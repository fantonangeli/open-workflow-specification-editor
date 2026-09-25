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

import { render, renderHook, act } from "@testing-library/react";
import * as React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useResolvedColorMode } from "../../src/hooks/useResolvedColorMode";

import {
  mockCreateModel,
  mockEditorCreate,
  mockEditorDispose,
  mockEditorSetValue,
  mockEditorUpdateOptions,
  mockModel,
  mockModelDispose,
  mockSetModelLanguage,
  simulateEditorContentChange,
  mockSetTheme,
  mockMonacoWorkerDispose,
} from "../__mocks__/monaco-editor";
import { TextEditor, type TextEditorProps } from "../../src/TextEditor";

const makeWorker = () => ({ terminate: vi.fn() }) as unknown as Worker;
const createLanguageServiceWorker = vi.fn(makeWorker);

const defaultProps: TextEditorProps = {
  content: "initial content",
  language: "json",
  createLanguageServiceWorker,
};

const renderEditor = (props: Partial<TextEditorProps> = {}) => {
  let currentProps: TextEditorProps = { ...defaultProps, ...props };
  const result = render(<TextEditor {...currentProps} />);

  return {
    ...result,
    rerenderEditor: (nextProps: Partial<TextEditorProps>) => {
      currentProps = { ...currentProps, ...nextProps };
      result.rerender(<TextEditor {...currentProps} />);
    },
  };
};

describe("TextEditor", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("package entry point", () => {
    it("exports TextEditor from the package index", async () => {
      const pkg = await import("../../src/index");
      expect(pkg.TextEditor).toBeDefined();
    });
  });

  describe("mount", () => {
    it("renders a host container that fills its parent", () => {
      const { container } = renderEditor();
      const host = container.firstElementChild;

      expect(host).toBeInTheDocument();
      expect(host).toHaveStyle({ width: "100%", height: "100%" });
    });

    it("creates the model then the editor with it", () => {
      const { container } = renderEditor({
        content: "hello yaml",
        language: "yaml",
        isReadOnly: true,
      });

      expect(mockCreateModel).toHaveBeenCalledOnce();
      expect(mockCreateModel).toHaveBeenCalledWith(
        "hello yaml",
        "yaml",
        expect.objectContaining({ toString: expect.any(Function) }),
      );

      expect(mockEditorCreate).toHaveBeenCalledOnce();
      expect(mockEditorCreate).toHaveBeenCalledWith(
        container.firstElementChild,
        expect.objectContaining({ model: mockModel, readOnly: true }),
      );
    });

    it("calls createLanguageServiceWorker once on mount", () => {
      renderEditor();

      expect(createLanguageServiceWorker).toHaveBeenCalledOnce();
    });
  });

  describe("controlled content", () => {
    it("updates Monaco when content changes externally", () => {
      const onContentChange = vi.fn();
      const { rerenderEditor } = renderEditor({ content: "initial content", onContentChange });

      rerenderEditor({ content: "updated content" });

      expect(mockEditorSetValue).toHaveBeenCalledOnce();
      expect(mockEditorSetValue).toHaveBeenCalledWith("updated content");
      expect(onContentChange).not.toHaveBeenCalled();
    });

    it("does not update Monaco when content is unchanged", () => {
      const { rerenderEditor } = renderEditor({ content: "same content" });

      rerenderEditor({ content: "same content" });

      expect(mockEditorSetValue).not.toHaveBeenCalled();
    });

    it("calls onContentChange for editor-driven changes", () => {
      const onContentChange = vi.fn();
      renderEditor({ onContentChange });

      simulateEditorContentChange("edited content");

      expect(onContentChange).toHaveBeenCalledOnce();
      expect(onContentChange).toHaveBeenCalledWith("edited content");
    });
  });

  describe("language", () => {
    it("updates the model language without recreating Monaco", () => {
      const { rerenderEditor } = renderEditor({ language: "json" });

      rerenderEditor({ language: "yaml" });

      expect(mockEditorCreate).toHaveBeenCalledOnce();
      expect(mockSetModelLanguage).toHaveBeenCalledOnce();
      expect(mockSetModelLanguage).toHaveBeenCalledWith(mockModel, "yaml");
    });
  });

  describe("read-only", () => {
    it("passes readOnly to Monaco at creation time", () => {
      const { container } = renderEditor({ isReadOnly: true });

      expect(mockEditorCreate).toHaveBeenCalledWith(
        container.firstElementChild,
        expect.objectContaining({ readOnly: true }),
      );
    });

    it("updates readOnly without recreating Monaco", () => {
      const { rerenderEditor } = renderEditor({ isReadOnly: false });
      mockEditorUpdateOptions.mockClear();

      rerenderEditor({ isReadOnly: true });

      expect(mockEditorCreate).toHaveBeenCalledOnce();
      expect(mockEditorUpdateOptions).toHaveBeenCalledOnce();
      expect(mockEditorUpdateOptions).toHaveBeenCalledWith({ readOnly: true });
    });
  });

  describe("lifecycle", () => {
    it("does not recreate Monaco when props change", () => {
      const { rerenderEditor } = renderEditor({ content: "v1" });

      rerenderEditor({ content: "v2" });
      rerenderEditor({ language: "yaml" });
      rerenderEditor({ isReadOnly: true });
      rerenderEditor({ onContentChange: vi.fn() });

      expect(mockEditorCreate).toHaveBeenCalledOnce();
    });

    it("disposes language service, editor and model on unmount", () => {
      const { unmount } = renderEditor();

      unmount();

      expect(mockMonacoWorkerDispose).toHaveBeenCalledOnce();
      expect(mockEditorDispose).toHaveBeenCalledOnce();
      expect(mockModelDispose).toHaveBeenCalledOnce();
    });
  });

  describe("theme", () => {
    it("uses the light Monaco theme for light color mode", () => {
      renderEditor({ colorMode: "light" });

      expect(mockSetTheme).toHaveBeenCalledOnce();
      expect(mockSetTheme).toHaveBeenCalledWith("vs");
    });

    it("uses the dark Monaco theme for dark color mode", () => {
      renderEditor({ colorMode: "dark" });

      expect(mockSetTheme).toHaveBeenCalledOnce();
      expect(mockSetTheme).toHaveBeenCalledWith("vs-dark");
    });

    it("updates the Monaco theme when color mode changes", () => {
      const { rerenderEditor } = renderEditor({ colorMode: "light" });

      expect(mockSetTheme).toHaveBeenCalledWith("vs");
      mockSetTheme.mockClear();

      rerenderEditor({ colorMode: "dark" });

      expect(mockSetTheme).toHaveBeenCalledOnce();
      expect(mockSetTheme).toHaveBeenCalledWith("vs-dark");
    });

    it("does not recreate Monaco when color mode changes", () => {
      const { rerenderEditor } = renderEditor({ colorMode: "light" });

      rerenderEditor({ colorMode: "dark" });

      expect(mockEditorCreate).toHaveBeenCalledOnce();
    });
  });

  describe("useResolvedColorMode", () => {
    let mediaQueryListeners: Array<(event: MediaQueryListEvent) => void>;
    let mediaQueryList: {
      matches: boolean;
      addEventListener: ReturnType<typeof vi.fn>;
      removeEventListener: ReturnType<typeof vi.fn>;
    };

    beforeEach(() => {
      mediaQueryListeners = [];

      mediaQueryList = {
        matches: false,
        addEventListener: vi.fn((_: string, listener: (event: MediaQueryListEvent) => void) => {
          mediaQueryListeners.push(listener);
        }),
        removeEventListener: vi.fn(),
      };

      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vi.fn(() => mediaQueryList),
      });
    });

    it("resolves system mode to light when the system prefers light", () => {
      mediaQueryList.matches = false;

      const { result } = renderHook(() => useResolvedColorMode("system"));

      expect(result.current).toBe("light");
    });

    it("resolves system mode to dark when the system prefers dark", () => {
      mediaQueryList.matches = true;

      const { result } = renderHook(() => useResolvedColorMode("system"));

      expect(result.current).toBe("dark");
    });

    it("updates when the system color mode changes", () => {
      mediaQueryList.matches = false;

      const { result } = renderHook(() => useResolvedColorMode("system"));

      expect(result.current).toBe("light");

      act(() => {
        mediaQueryList.matches = true;

        mediaQueryListeners.forEach((listener) =>
          listener({ matches: true } as MediaQueryListEvent),
        );
      });

      expect(result.current).toBe("dark");

      act(() => {
        mediaQueryList.matches = false;

        mediaQueryListeners.forEach((listener) =>
          listener({ matches: false } as MediaQueryListEvent),
        );
      });

      expect(result.current).toBe("light");
    });

    it("subscribes to system color mode changes", () => {
      renderHook(() => useResolvedColorMode("system"));

      expect(mediaQueryList.addEventListener).toHaveBeenCalledWith("change", expect.any(Function));
    });

    it("removes the system color mode listener on unmount", () => {
      const { unmount } = renderHook(() => useResolvedColorMode("system"));

      const listener = mediaQueryList.addEventListener.mock.calls[0][1];

      unmount();

      expect(mediaQueryList.removeEventListener).toHaveBeenCalledWith("change", listener);
    });

    it("uses the server fallback for system mode", () => {
      const { result } = renderHook(() => useResolvedColorMode("system"));

      expect(result.current).toBe("light");
    });
  });
});
