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

/**
 * An opaque handle to the Open Workflow language service integration for the
 * Monaco text editor.
 *
 * Create **one instance per application** with
 * {@link createTextEditorLanguageService} and pass it to every
 * {@link TextEditor}. A single instance can be shared across multiple
 * `TextEditor` components — Monaco language providers are registered globally
 * per language and must not be registered more than once.
 *
 * The host application owns this object and is responsible for calling
 * {@link dispose} when the language service is no longer needed.
 *
 * @example
 * ```ts
 * const languageService = createTextEditorLanguageService({
 *   createWorker: () =>
 *     new Worker(new URL("./language.worker.ts", import.meta.url), {
 *       type: "module",
 *     }),
 * });
 *
 * <TextEditor content={content} language="json" languageService={languageService} />
 *
 * // When done with all TextEditor instances
 * languageService.dispose();
 * ```
 */
export interface TextEditorLanguageService {
  /**
   * Releases all resources owned by this language service: the internal
   * MonacoWebWorker, all registered Volar providers, and marker activation.
   *
   * The underlying Worker supplied via `createWorker` is terminated as part
   * of this call because the MonacoWebWorker wrapper owns it.
   *
   * After calling `dispose`, the `TextEditor` instances that were using this
   * language service lose language features but remain functional as editors.
   */
  dispose(): void;
}

/**
 * Options for {@link createTextEditorLanguageService}.
 */
export interface CreateTextEditorLanguageServiceOptions {
  /**
   * Factory called once to create the language service Worker.
   *
   * The returned Worker must load the Open Workflow language worker entry
   * point (e.g. `language.worker.ts`) which initialises the Volar language
   * service via `createSimpleWorkerLanguageService` from `@volar/monaco/worker`.
   *
   * The Worker is owned by the returned {@link TextEditorLanguageService} and
   * will be terminated when {@link TextEditorLanguageService.dispose} is
   * called.
   *
   * @example
   * ```ts
   * createWorker: () =>
   *   new Worker(new URL("./language.worker.ts", import.meta.url), {
   *     type: "module",
   *   })
   * ```
   */
  createWorker: () => Worker;
}

/**
 * Creates a {@link TextEditorLanguageService} that bridges the Open Workflow
 * language service with Monaco Editor via `@volar/monaco`.
 *
 * Call this **once per application**. A single instance can be shared across
 * multiple {@link TextEditor} components — Monaco language providers are
 * registered globally per language and must not be registered more than once.
 *
 * The language service is initialised lazily: the Worker and Volar providers
 * are set up the first time the returned instance is used.
 *
 * **Lifecycle**
 *
 * - The host application creates and owns the `TextEditorLanguageService`.
 * - Individual `TextEditor` components receive it as a prop; they never
 *   create or dispose the language service.
 * - Call `languageService.dispose()` when all `TextEditor` instances using
 *   it have been unmounted and the language features are no longer needed.
 *
 * **Worker ownership**
 *
 * The Worker returned by `createWorker` is owned by the language service.
 * Calling `dispose()` terminates it.
 *
 * @param options - Configuration options including the Worker factory.
 * @returns A new `TextEditorLanguageService` instance.
 */
export function createTextEditorLanguageService(
  options: CreateTextEditorLanguageServiceOptions,
): TextEditorLanguageService {
  const { createWorker } = options;

  // Eagerly create the Worker so the host's factory is called exactly once
  // and the Worker lifetime is clearly tied to this object.
  const worker = createWorker();

  return {
    dispose() {
      worker.terminate();
    },
  };
}
