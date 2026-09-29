/*
 * Copyright 2021-Present The Open Workflow Specification Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { test, expect, Locator } from "@playwright/test";
import { getCodeLens, getCompletion } from "./helpers";
import helloWorldJson from "../stories/samples/hello-world.json" with { type: "json" };

test.describe("TextEditor JSON", () => {
  let monacoContainer: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto("/iframe.html?id=text-editor--empty-json");

    monacoContainer = page.locator(".monaco-editor").first();
    await expect(monacoContainer).toBeVisible();

    await monacoContainer.click();
  });

  test("Monaco editor is interactive", async ({ page }) => {
    await page.keyboard.type("Lorem ipsum");

    await expect(monacoContainer).toContainText("Lorem ipsum");
  });

  test.describe("Completions", () => {
    test("JSON schema completion adds the `do` property", async ({ page }) => {
      await page.keyboard.type("{}");
      await page.keyboard.press("ControlOrMeta+Home");
      await page.keyboard.press("ArrowRight");
      await page.keyboard.press("Escape");
      await page.keyboard.press("ControlOrMeta+Space");

      const documentCompletion = getCompletion(page, "document");
      await expect(documentCompletion).toHaveCount(1);
      await expect(documentCompletion).toBeVisible();

      const doCompletion = getCompletion(page, "do");
      await expect(doCompletion).toHaveCount(1);
      await expect(doCompletion).toBeVisible();
      await doCompletion.click();

      await expect(monacoContainer).toContainText('{"do": []}');
    });

    test("Hello World Completion inserts the sample workflow", async ({ page }) => {
      await page.keyboard.press("ControlOrMeta+Space");

      const helloWorldCompletion = getCompletion(page, "Insert Hello World workflow");
      await expect(helloWorldCompletion).toBeVisible();
      await helloWorldCompletion.click();

      await expect(monacoContainer).toContainText('"name": "hello-world",');
    });
  });

  test.describe("CodeLenses", () => {
    test("Hello World CodeLens activates and inserts the sample workflow", async ({ page }) => {
      const codeLens = getCodeLens(page, "Create an Open Workflow");
      await expect(codeLens).toBeVisible();
      await codeLens.click();

      await expect(monacoContainer).toContainText('"name": "hello-world"');
    });
  });

  test.describe("Diagnostics", () => {
    test("syntactically invalid JSON shows an error marker", async ({ page }) => {
      await page.goto("/iframe.html?id=text-editor--empty-json");

      const monacoContainer = page.locator(".monaco-editor").first();
      await expect(monacoContainer).toBeVisible();
      await monacoContainer.click();

      await page.keyboard.type("{invalid");

      await expect(monacoContainer.locator(".squiggly-error").first()).toBeVisible();
    });

    test("OWS-schema-invalid JSON shows a warning marker", async ({ page }) => {
      await page.goto("/iframe.html?id=text-editor--invalid-workflow");

      const monacoContainer = page.locator(".monaco-editor").first();
      await expect(monacoContainer).toBeVisible();

      await expect(monacoContainer.locator(".squiggly-warning").first()).toBeVisible();
    });

    test("replacing OWS-invalid JSON with a valid workflow removes warning markers", async ({
      page,
    }) => {
      await page.goto("/iframe.html?id=text-editor--invalid-workflow");

      const monacoContainer = page.locator(".monaco-editor").first();
      await expect(monacoContainer).toBeVisible();
      await expect(monacoContainer.locator(".squiggly-warning").first()).toBeVisible();

      await monacoContainer.click();
      await page.keyboard.press("ControlOrMeta+a");
      // Use clipboard paste instead of keyboard.type: Monaco auto-indents after each newline,
      // which corrupts the formatting when typing multi-line text character by character.
      await page.evaluate(
        (text) => navigator.clipboard.writeText(text),
        JSON.stringify(helloWorldJson, null, 2),
      );
      await page.keyboard.press("ControlOrMeta+v");

      await expect(monacoContainer.locator(".squiggly-warning").first()).not.toBeVisible();
    });
  });
});
