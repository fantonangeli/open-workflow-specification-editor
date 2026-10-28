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
// React is required internally by @openworkflowspec/text-editor.
// This wrapper encapsulates it behind a standard Custom Element API,
// so host applications don't need to interact with React directly.
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { TextEditor } from "@openworkflowspec/text-editor";
export class TextEditorElement extends HTMLElement {
    static observedAttributes = ["language", "color-mode", "read-only"];
    _root = null;
    _mountPoint = null;
    _content = "";
    _language = "json";
    _createLanguageServiceWorker = null;
    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
        this.render();
    }
    get language() {
        return this._language;
    }
    set language(value) {
        this._language = value;
        this.render();
    }
    get createLanguageServiceWorker() {
        return this._createLanguageServiceWorker;
    }
    set createLanguageServiceWorker(factory) {
        this._createLanguageServiceWorker = factory;
        this.ensureRootAndRender();
    }
    get isReadOnly() {
        return this.hasAttribute("read-only");
    }
    set isReadOnly(value) {
        if (value) {
            this.setAttribute("read-only", "");
        }
        else {
            this.removeAttribute("read-only");
        }
    }
    get colorMode() {
        return this.getAttribute("color-mode") ?? "system";
    }
    set colorMode(value) {
        this.setAttribute("color-mode", value);
    }
    connectedCallback() {
        if (!this._mountPoint) {
            this._mountPoint = document.createElement("div");
            this._mountPoint.style.height = "100%";
            this._mountPoint.dataset.testid = "text-editor-mount-point";
            this.appendChild(this._mountPoint);
        }
        this.ensureRootAndRender();
    }
    disconnectedCallback() {
        this._root?.unmount();
        this._root = null;
        this._mountPoint?.remove();
        this._mountPoint = null;
    }
    attributeChangedCallback(name, _oldValue, newValue) {
        if (name === "language" && newValue) {
            this._language = newValue;
        }
        this.render();
    }
    ensureRootAndRender() {
        if (!this.isConnected || !this._createLanguageServiceWorker) {
            return;
        }
        if (!this._root && this._mountPoint) {
            this._root = createRoot(this._mountPoint);
        }
        this.render();
    }
    handleContentChange = (newContent) => {
        this._content = newContent;
        this.dispatchEvent(new CustomEvent("change", {
            detail: { content: newContent },
            bubbles: true,
            composed: true,
        }));
    };
    render() {
        if (!this._root || !this._createLanguageServiceWorker)
            return;
        const props = {
            content: this._content,
            language: this._language,
            createLanguageServiceWorker: this._createLanguageServiceWorker,
            onContentChange: this.handleContentChange,
            isReadOnly: this.isReadOnly,
            colorMode: this.colorMode,
        };
        this._root.render(createElement(TextEditor, props));
    }
}
