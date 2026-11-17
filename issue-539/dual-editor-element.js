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
// React is required internally by @openworkflowspec/dual-editor.
// This wrapper encapsulates it behind a standard Custom Element API,
// so host applications don't need to interact with React directly.
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { DualEditor } from "@openworkflowspec/dual-editor";
// Vite transforms this module import into a Worker constructor.
// oxlint-disable-next-line import/default
import LanguageServiceWorker from "@openworkflowspec/text-editor/worker?worker";
export class DualEditorElement extends HTMLElement {
    static observedAttributes = ["locale", "color-mode", "read-only", "language"];
    _root = null;
    _mountPoint = null;
    _content = "";
    _contentResetKey = 0;
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
        this._contentResetKey += 1;
        this.render();
    }
    connectedCallback() {
        this._mountPoint = document.createElement("div");
        this._mountPoint.style.height = "100%";
        this._mountPoint.dataset.testid = "dual-editor-mount-point";
        this.appendChild(this._mountPoint);
        this._root = createRoot(this._mountPoint);
        this.render();
    }
    disconnectedCallback() {
        const root = this._root;
        this._root = null;
        root?.unmount();
        this._mountPoint?.remove();
        this._mountPoint = null;
    }
    attributeChangedCallback() {
        this.render();
    }
    render() {
        if (!this._root)
            return;
        const contentResetKey = this._contentResetKey;
        const props = {
            content: this._content,
            contentResetKey,
            locale: this.getAttribute("locale") ?? "en",
            isReadOnly: this.hasAttribute("read-only"),
            colorMode: this.getAttribute("color-mode") ?? "system",
            language: this.getAttribute("language") === "yaml" ? "yaml" : "json",
            createLanguageServiceWorker: () => new LanguageServiceWorker(),
            onContentChange: (content) => {
                if (contentResetKey !== this._contentResetKey)
                    return;
                this._content = content;
                this.render();
            },
        };
        this._root.render(createElement(DualEditor, props));
    }
}
