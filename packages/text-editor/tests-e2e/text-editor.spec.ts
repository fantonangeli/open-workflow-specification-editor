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
import { getCompletion } from "./helpers";

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

  test("JSON schema completion adds the `do` property", async ({ page }) => {
    await page.keyboard.type("{}");
    await page.keyboard.press("ControlOrMeta+Home");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("Escape");
    await page.keyboard.press("ControlOrMeta+Space");

    await expect(getCompletion(page, "document")).toBeVisible();

    const doCompletion = getCompletion(page, "do");
    await expect(doCompletion).toBeVisible();
    await doCompletion.click();

    await expect(monacoContainer).toContainText('{"do": []}');
  });

  test("Hello World completion inserts the sample workflow", async ({ page }) => {
    await page.keyboard.press("ControlOrMeta+Space");

    const helloWorldCompletion = getCompletion(page, "Insert Hello World workflow");
    await expect(helloWorldCompletion).toBeVisible();
    await helloWorldCompletion.click();

    await expect(monacoContainer).toContainText('"name": "hello-world",');
  });
});
