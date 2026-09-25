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

import { registerProviders } from "@volar/monaco";
import type { WorkerLanguageService } from "@volar/monaco/worker";
import * as monaco from "monaco-editor/editor";

export function createTextEditorLanguageService(
  model: monaco.editor.ITextModel,
  createWorker: () => Worker,
): monaco.IDisposable {
  const worker = monaco.editor.createWebWorker<WorkerLanguageService>({
    worker: createWorker(),
  });

  let providers: monaco.IDisposable | undefined;
  let disposed = false;

  void registerProviders(worker, "json", () => [model.uri], monaco.languages)
    .then((disposable) => {
      if (disposed) {
        disposable.dispose();
      } else {
        providers = disposable;
      }
    })
    .catch((error) => {
      if (!disposed) {
        console.error("registerProviders failed", error);
      }
    });

  return {
    dispose() {
      disposed = true;
      providers?.dispose();
      worker.dispose();
    },
  };
}
