<!--
   Copyright 2021-Present The Open Workflow Specification Authors

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
-->

# @openworkflowspec/text-editor

React text editor component for Open Workflow documents, based on [Monaco Editor](https://github.com/microsoft/monaco-editor).

## Overview

`TextEditor` is a controlled component that provides:

- JSON and YAML syntax highlighting;
- read-only mode;
- controlled content updates;
- Open Workflow language features (completions, diagnostics, code lenses) via `@openworkflowspec/language-service`.

## Props

| Prop              | Type                        | Required | Default     | Description                                                                   |
| ----------------- | --------------------------- | -------- | ----------- | ----------------------------------------------------------------------------- |
| `content`         | `string`                    | ✅       | —           | Current document content.                                                     |
| `language`        | `TextEditorLanguage`        | ✅       | —           | Document language: `json` or `yaml`.                                          |
| `languageService` | `TextEditorLanguageService` | ✅       | —           | Language service integration. Created with `createTextEditorLanguageService`. |
| `isReadOnly`      | `boolean`                   | —        | `false`     | Prevents editing when enabled.                                                |
| `onContentChange` | `(content: string) => void` | —        | `undefined` | Called when the user modifies the document.                                   |
| `colorMode`       | `light, dark, system`       | —        | `system`    | Controls the editor theme.                                                    |

## Sizing

The editor fills `100%` of its container's width and height. The host must provide a container with a non-zero height.

## Usage

```tsx
import { TextEditor, createTextEditorLanguageService } from "@openworkflowspec/text-editor";
import { useState } from "react";

// Create once per application, outside of any component.
const languageService = createTextEditorLanguageService({
  createWorker: () =>
    new Worker(new URL("./language.worker.ts", import.meta.url), {
      type: "module",
    }),
});

function App() {
  const [content, setContent] = useState('{"hello": "world"}');

  return (
    <div style={{ height: "400px" }}>
      <TextEditor
        content={content}
        language="json"
        onContentChange={setContent}
        languageService={languageService}
      />
    </div>
  );
}
```

## Language service

### Lifecycle and ownership

The host application owns the `TextEditorLanguageService` and is responsible for its disposal:

```ts
// When language features are no longer needed
languageService.dispose();
```

Calling `dispose()` terminates the underlying Worker and releases all registered Monaco providers and markers.

Individual `TextEditor` components never create or dispose the language service — their lifecycle is independent. Unmounting a `TextEditor` does not affect the language service.

### Supported languages

| Language | Syntax highlighting | OWS completions | OWS diagnostics | OWS code lenses |
| -------- | ------------------- | --------------- | --------------- | --------------- |
| JSON     | ✅                  | ✅              | ✅              | ✅              |
| YAML     | ✅                  | 🚧 planned      | 🚧 planned      | 🚧 planned      |

YAML language-service support is not yet available. Until then, YAML documents use Monaco's built-in syntax highlighting and language configuration only.
