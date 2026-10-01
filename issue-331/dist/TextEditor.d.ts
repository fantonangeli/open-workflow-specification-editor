import * as React from "react";
import "monaco-editor/features/register.all";
import "monaco-editor/languages/definitions/yaml/register";
import { ColorMode } from "./types/colorMode";
export type TextEditorLanguage = "json" | "yaml";
export type TextEditorProps = {
    content: string;
    language: TextEditorLanguage;
    createLanguageServiceWorker: () => Worker;
    onContentChange?: (content: string) => void;
    isReadOnly?: boolean;
    colorMode?: ColorMode;
};
export declare const TextEditor: ({ content, language, createLanguageServiceWorker, onContentChange, isReadOnly, colorMode, }: TextEditorProps) => React.JSX.Element;
//# sourceMappingURL=TextEditor.d.ts.map