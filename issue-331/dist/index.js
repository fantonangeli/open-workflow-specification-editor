import { n as e, t } from "./esm-BG1bcJ97.js";
import { a as n, i as r, o as i, t as a } from "./editor.api-BPYT69K7.js";
import { s as o } from "./wordPartOperations-92rlRT3H.js";
import * as s from "react";
import { useCallback as c, useSyncExternalStore as l } from "react";
import { jsx as ee } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/monaco-editor@0.56.0/node_modules/monaco-editor/esm/vs/features/find/register.js
var u = "__monacoFindWidgetTabIndexPatchApplied", d = "__monacoFindWidgetOriginalTabIndex";
function f(e, t) {
	let n = e?._domNode;
	if (!n) return;
	let r = n.querySelectorAll("input, textarea, [tabindex], [role=\"button\"], [role=\"checkbox\"]");
	for (let e of r) if (e instanceof HTMLElement) {
		if (t) {
			if (!(d in e.dataset)) continue;
			let t = e.dataset[d];
			t === "" ? e.removeAttribute("tabindex") : e.tabIndex = Number(t), delete e.dataset[d];
		} else d in e.dataset || (e.dataset[d] = e.getAttribute("tabindex") ?? ""), e.tabIndex = -1;
	}
}
if (!o[u]) {
	let e = o.prototype._reveal, t = o.prototype._hide;
	o.prototype._reveal = function(...t) {
		e.apply(this, t), f(this, !0);
	}, o.prototype._hide = function(...e) {
		t.apply(this, e), f(this, !1);
	}, o[u] = !0;
}
var p = new class {
	constructor(e, t, n) {
		this._onDidChange = new a(), this._languageId = e, this.setDiagnosticsOptions(t), this.setModeConfiguration(n);
	}
	get onDidChange() {
		return this._onDidChange.event;
	}
	get languageId() {
		return this._languageId;
	}
	get modeConfiguration() {
		return this._modeConfiguration;
	}
	get diagnosticsOptions() {
		return this._diagnosticsOptions;
	}
	setDiagnosticsOptions(e) {
		this._diagnosticsOptions = e || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
	setModeConfiguration(e) {
		this._modeConfiguration = e || /* @__PURE__ */ Object.create(null), this._onDidChange.fire(this);
	}
}("json", {
	validate: !0,
	allowComments: !0,
	schemas: [],
	enableSchemaRequest: !1,
	schemaRequest: "warning",
	schemaValidation: "warning",
	comments: "error",
	trailingCommas: "error"
}, {
	documentFormattingEdits: !0,
	documentRangeFormattingEdits: !0,
	completionItems: !0,
	hovers: !0,
	documentSymbols: !0,
	tokens: !0,
	colors: !0,
	foldingRanges: !0,
	diagnostics: !0,
	selectionRanges: !0
});
function te() {
	return import("./jsonMode-D2KQFFHI.js");
}
i.register({
	id: "json",
	extensions: [
		".json",
		".bowerrc",
		".jshintrc",
		".jscsrc",
		".eslintrc",
		".babelrc",
		".har"
	],
	aliases: ["JSON", "json"],
	mimetypes: ["application/json"]
}), i.onLanguage("json", () => {
	te().then((e) => e.setupMode(p));
});
//#endregion
//#region ../../node_modules/.pnpm/monaco-editor@0.56.0/node_modules/monaco-editor/esm/vs/languages/definitions/_.contribution.js
var m = {}, h = {}, g = class e {
	static getOrCreate(t) {
		return h[t] || (h[t] = new e(t)), h[t];
	}
	constructor(e) {
		this._languageId = e, this._loadingTriggered = !1, this._lazyLoadPromise = new Promise((e, t) => {
			this._lazyLoadPromiseResolve = e, this._lazyLoadPromiseReject = t;
		});
	}
	load() {
		return this._loadingTriggered || (this._loadingTriggered = !0, m[this._languageId].loader().then((e) => this._lazyLoadPromiseResolve(e), (e) => this._lazyLoadPromiseReject(e))), this._lazyLoadPromise;
	}
};
function ne(e) {
	let t = e.id;
	m[t] = e, i.register(e);
	let n = g.getOrCreate(t);
	i.registerTokensProviderFactory(t, { create: async () => (await n.load()).language }), i.onLanguageEncountered(t, async () => {
		let e = await n.load();
		i.setLanguageConfiguration(t, e.conf);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-editor@0.56.0/node_modules/monaco-editor/esm/vs/languages/definitions/yaml/register.js
ne({
	id: "yaml",
	extensions: [".yaml", ".yml"],
	aliases: [
		"YAML",
		"yaml",
		"YML",
		"yml"
	],
	mimetypes: ["application/x-yaml", "text/x-yaml"],
	loader: () => import("./yaml-DhndSwr0.js")
});
//#endregion
//#region src/hooks/useResolvedColorMode.ts
var re = "(prefers-color-scheme: dark)";
function ie(e) {
	return e === "light" || e === "dark" || e === "system" ? e : "system";
}
function _() {
	return typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia(re) : null;
}
function ae() {
	return _()?.matches ? "dark" : "light";
}
function oe() {
	return "light";
}
function v() {}
function se(e) {
	let t = ie(e), n = c((e) => {
		if (t !== "system") return v;
		let n = _();
		return n == null ? v : (n.addEventListener("change", e), () => {
			n.removeEventListener("change", e);
		});
	}, [t]);
	return l(n, () => t === "system" ? ae() : t, () => t === "system" ? oe() : t);
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/marker-severity.js
function ce(e) {
	return e === 4 ? 1 : e === 3 ? 2 : e === 2 ? 4 : 8;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/marker-tag.js
function y(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/range.js
function b(e) {
	return {
		start: {
			line: e.startLineNumber - 1,
			character: e.startColumn - 1
		},
		end: {
			line: e.endLineNumber - 1,
			character: e.endColumn - 1
		}
	};
}
function x(e) {
	return {
		startLineNumber: e.start.line + 1,
		startColumn: e.start.character + 1,
		endLineNumber: e.end.line + 1,
		endColumn: e.end.character + 1
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/related-information.js
t();
function le(t) {
	return {
		...x(t.location.range),
		message: t.message,
		resource: e.parse(t.location.uri)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/marker-data.js
t();
function S(t) {
	let n = {
		...x(t.range),
		message: t.message,
		severity: t.severity ? ce(t.severity) : 8
	};
	return t.code != null && (n.code = t.codeDescription == null ? String(t.code) : {
		value: String(t.code),
		target: e.parse(t.codeDescription.href)
	}), t.relatedInformation && (n.relatedInformation = t.relatedInformation.map(le)), t.tags && (n.tags = t.tags.map(y)), t.source != null && (n.source = t.source), n;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/text-edit.js
function C(e) {
	return {
		range: x(e.range),
		text: e.newText
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/workspace-edit-metadata.js
function w(e) {
	let t = {
		label: e.label,
		needsConfirmation: e.needsConfirmation ?? !1
	};
	return e.description != null && (t.description = e.description), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/workspace-file-edit-options.js
function ue(e) {
	let t = {};
	return e.ignoreIfExists != null && (t.ignoreIfExists = e.ignoreIfExists), e.ignoreIfNotExists != null && (t.ignoreIfNotExists = e.ignoreIfNotExists), e.overwrite != null && (t.overwrite = e.overwrite), e.recursive != null && (t.recursive = e.recursive), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/workspace-file-edit.js
t();
function de(t) {
	let n = t.kind === "create" ? { newResource: e.parse(t.uri) } : t.kind === "delete" ? { oldResource: e.parse(t.uri) } : {
		oldResource: e.parse(t.oldUri),
		newResource: e.parse(t.newUri)
	};
	return t.options && (n.options = ue(t.options)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/workspace-edit.js
t();
function T(t, n, r, i) {
	let a = {
		resource: e.parse(n),
		versionId: i,
		textEdit: C(t)
	};
	if ("annotationId" in t) {
		let e = r?.[t.annotationId];
		e && (a.metadata = w(e));
	}
	return a;
}
function E(e) {
	let t = [];
	if (e.changes) for (let [n, r] of Object.entries(e.changes)) for (let i of r) t.push(T(i, n, e.changeAnnotations));
	if (e.documentChanges) for (let n of e.documentChanges) {
		if (!("textDocument" in n)) {
			t.push(de(n));
			continue;
		}
		for (let r of n.edits) t.push(T(r, n.textDocument.uri, e.changeAnnotations, n.textDocument.version ?? void 0));
	}
	return { edits: t };
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/code-action.js
function D(e) {
	let t = {
		title: e.title,
		isPreferred: e.isPreferred
	};
	return e.diagnostics && (t.diagnostics = e.diagnostics.map(S)), e.disabled && (t.disabled = e.disabled.reason), e.edit && (t.edit = E(e.edit)), e.isPreferred != null && (t.isPreferred = e.isPreferred), e.kind && (t.kind = e.kind), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/command.js
function O(e) {
	let t = {
		title: e.title,
		id: e.command
	};
	return e.arguments && (t.arguments = e.arguments), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/code-lens.js
function k(e) {
	let t = { range: x(e.range) };
	return e.command && (t.command = O(e.command)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/color.js
function fe(e) {
	return {
		red: e.red,
		blue: e.blue,
		green: e.green,
		alpha: e.alpha
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/color-information.js
function pe(e) {
	return {
		range: x(e.range),
		color: fe(e.color)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/color-presentation.js
function A(e) {
	let t = { label: e.label };
	return e.textEdit && (t.textEdit = C(e.textEdit)), e.additionalTextEdits && (t.additionalTextEdits = e.additionalTextEdits.map(C)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/completion-trigger-kind.js
function j(e) {
	return e === 0 ? 1 : e === 1 ? 2 : 3;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/completion-context.js
function M(e) {
	let t = { triggerKind: j(e.triggerKind) };
	return e.triggerCharacter != null && (t.triggerCharacter = e.triggerCharacter), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/completion-item-kind.js
function N(e) {
	return e === 1 ? 18 : e === 2 ? 0 : e === 3 ? 1 : e === 4 ? 2 : e === 5 ? 3 : e === 6 ? 4 : e === 7 ? 5 : e === 8 ? 7 : e === 9 ? 8 : e === 10 ? 9 : e === 11 ? 12 : e === 12 ? 13 : e === 13 ? 15 : e === 14 ? 17 : e === 15 ? 27 : e === 16 ? 19 : e === 17 ? 20 : e === 18 ? 21 : e === 19 ? 23 : e === 20 ? 16 : e === 21 ? 14 : e === 22 ? 6 : e === 23 ? 10 : e === 24 ? 11 : 24;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/completion-item-tag.js
function P(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/markdown-string.js
function F(e) {
	return {
		kind: "markdown",
		value: e.value
	};
}
function I(e) {
	return { value: e.value };
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/single-edit-operation.js
function L(e) {
	return {
		range: x(e.range),
		text: e.newText
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/completion-item.js
function R(e) {
	return "range" in e ? x(e.range) : "insert" in e && "replace" in e ? {
		insert: x(e.insert),
		replace: x(e.replace)
	} : x(e);
}
function z(e, t) {
	let n = t.itemDefaults ?? {}, r = e.textEdit ?? n.editRange, i = e.commitCharacters ?? n.commitCharacters, a = e.insertTextFormat ?? n.insertTextFormat, o = e.insertTextMode ?? n.insertTextMode, s = e.insertText, c;
	r ? (c = R(r), "newText" in r && (s = r.newText)) : c = { ...t.range };
	let l = {
		insertText: s ?? e.label,
		kind: e.kind == null ? 18 : N(e.kind),
		label: e.label,
		range: c
	};
	return e.additionalTextEdits && (l.additionalTextEdits = e.additionalTextEdits.map(L)), e.command && (l.command = O(e.command)), i && (l.commitCharacters = i), e.detail != null && (l.detail = e.detail), typeof e.documentation == "string" ? l.documentation = e.documentation : e.documentation && (l.documentation = I(e.documentation)), e.filterText != null && (l.filterText = e.filterText), a === 2 ? l.insertTextRules = 4 : o === 2 && (l.insertTextRules = 1), e.preselect != null && (l.preselect = e.preselect), e.sortText != null && (l.sortText = e.sortText), e.tags && (l.tags = e.tags.map(P)), l;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/completion-list.js
function B(e, t) {
	return {
		incomplete: !!e.isIncomplete,
		suggestions: e.items.map((n) => z(n, {
			range: t.range,
			itemDefaults: e.itemDefaults
		}))
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/location.js
t();
function V(t) {
	return {
		range: x(t.range),
		uri: e.parse(t.uri)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/document-highlight-kind.js
function me(e) {
	return e === 2 ? 1 : e === 3 ? 2 : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/document-highlight.js
function he(e) {
	let t = { range: x(e.range) };
	return e.kind != null && (t.kind = me(e.kind)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/symbol-kind.js
function ge(e) {
	return e === 1 ? 0 : e === 2 ? 1 : e === 3 ? 2 : e === 4 ? 3 : e === 5 ? 4 : e === 6 ? 5 : e === 7 ? 6 : e === 8 ? 7 : e === 9 ? 8 : e === 10 ? 9 : e === 11 ? 10 : e === 12 ? 11 : e === 13 ? 12 : e === 14 ? 13 : e === 15 ? 14 : e === 16 ? 15 : e === 17 ? 16 : e === 18 ? 17 : e === 19 ? 18 : e === 20 ? 19 : e === 21 ? 20 : e === 22 ? 21 : e === 23 ? 22 : e === 24 ? 23 : e === 25 ? 24 : 25;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/symbol-tag.js
function _e(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/document-symbol.js
function H(e) {
	let t = {
		detail: e.detail ?? "",
		kind: ge(e.kind),
		name: e.name,
		range: x(e.range),
		selectionRange: x(e.selectionRange),
		tags: e.tags?.map(_e) ?? []
	};
	return e.children && (t.children = e.children.map(H)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/folding-range.js
function ve(e) {
	let t = {
		start: e.startLine + 1,
		end: e.endLine + 1
	};
	return e.kind != null && (t.kind = { value: e.kind }), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/formatting-options.js
function U(e) {
	return {
		insertSpaces: e.insertSpaces,
		tabSize: e.tabSize
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/hover.js
function W(e) {
	return typeof e == "string" ? { value: e } : { value: `\`\`\`${e.language}\n${e.value}\n\`\`\`` };
}
function ye(e) {
	return typeof e == "string" || "language" in e ? [W(e)] : Array.isArray(e) ? e.map(W) : [I(e)];
}
function be(e) {
	let t = { contents: ye(e.contents) };
	return e.range && (t.range = x(e.range)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/inlay-hint-kind.js
function xe(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/inlay-hint-label-part.js
function Se(e) {
	let t = { label: e.value };
	return e.command && (t.command = O(e.command)), e.location && (t.location = V(e.location)), typeof e.tooltip == "string" ? t.tooltip = e.tooltip : e.tooltip && (t.tooltip = I(e.tooltip)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/position.js
function G(e) {
	return {
		character: e.column - 1,
		line: e.lineNumber - 1
	};
}
function Ce(e) {
	return {
		lineNumber: e.line + 1,
		column: e.character + 1
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/inlay-hint.js
function K(e) {
	let t = {
		label: typeof e.label == "string" ? e.label : e.label.map(Se),
		position: Ce(e.position)
	};
	return e.kind != null && (t.kind = xe(e.kind)), e.paddingLeft != null && (t.paddingLeft = e.paddingLeft), e.paddingRight != null && (t.paddingRight = e.paddingRight), e.textEdits && (t.textEdits = e.textEdits.map(C)), typeof e.tooltip == "string" ? t.tooltip = e.tooltip : e.tooltip && (t.tooltip = I(e.tooltip)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/link.js
t();
function q(t) {
	let n = { range: x(t.range) };
	return t.tooltip != null && (n.tooltip = t.tooltip), t.target != null && (n.url = e.parse(t.target)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/linked-editing-ranges.js
function we(e) {
	let t = { ranges: e.ranges.map(x) };
	return e.wordPattern != null && (t.wordPattern = new RegExp(e.wordPattern)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/location-link.js
t();
function J(t) {
	let n = {
		range: x(t.targetRange),
		targetSelectionRange: x(t.targetSelectionRange),
		uri: e.parse(t.targetUri)
	};
	return t.originSelectionRange && (n.originSelectionRange = x(t.originSelectionRange)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/parameter-information.js
function Te(e) {
	let t = { label: e.label };
	return typeof e.documentation == "string" ? t.documentation = e.documentation : e.documentation && (t.documentation = F(e.documentation)), t;
}
function Ee(e) {
	let t = { label: e.label };
	return typeof e.documentation == "string" ? t.documentation = e.documentation : e.documentation && (t.documentation = I(e.documentation)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/selection-ranges.js
function De(e) {
	let t = [], n = e;
	for (; n;) t.push({ range: x(n.range) }), n = n.parent;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/semantic-tokens.js
function Y(e) {
	let t = { data: Uint32Array.from(e.data) };
	return e.resultId != null && (t.resultId = e.resultId), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/signature-information.js
function Oe(e) {
	let t = {
		label: e.label,
		parameters: e.parameters.map(Te)
	};
	return typeof e.documentation == "string" ? t.documentation = e.documentation : e.documentation && (t.documentation = F(e.documentation)), e.activeParameter != null && (t.activeParameter = e.activeParameter), t;
}
function ke(e) {
	let t = {
		label: e.label,
		parameters: e.parameters?.map(Ee) ?? []
	};
	return typeof e.documentation == "string" ? t.documentation = e.documentation : e.documentation && (t.documentation = I(e.documentation)), e.activeParameter != null && (t.activeParameter = e.activeParameter), t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/signature-help.js
function Ae(e) {
	return {
		activeParameter: e.activeParameter,
		activeSignature: e.activeSignature,
		signatures: e.signatures.map(Oe)
	};
}
function je(e) {
	return {
		activeParameter: e.activeParameter ?? 0,
		activeSignature: e.activeSignature ?? 0,
		signatures: e.signatures.map(ke)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/signature-help-trigger-kind.js
function Me(e) {
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-languageserver-types@0.4.1/node_modules/monaco-languageserver-types/dist/signature-help-context.js
function Ne(e) {
	let t = {
		isRetrigger: e.isRetrigger,
		triggerKind: Me(e.triggerKind)
	};
	return e.triggerCharacter != null && (t.triggerCharacter = e.triggerCharacter), e.activeSignatureHelp && (t.activeSignatureHelp = Ae(e.activeSignatureHelp)), t;
}
//#endregion
//#region ../../node_modules/.pnpm/@volar+monaco@2.4.28/node_modules/@volar/monaco/lib/markers.js
var X = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap();
function Q(e, t) {
	let n = (Z.get(t) ?? 0) + 1;
	return Z.set(t, n), e.onCancellationRequested(() => t.cancelRequest(n)), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@volar+monaco@2.4.28/node_modules/@volar/monaco/lib/editor.js
function $(e, t, n, r, i) {
	let a = [], o = /* @__PURE__ */ new Map();
	a.push(i.onDidCreateModel((e) => c(e)), i.onWillDisposeModel(s), i.onDidChangeModelLanguage((e) => {
		s(e.model), c(e.model);
	}), { dispose: () => {
		for (let e of i.getModels()) s(e);
	} });
	for (let e of i.getModels()) c(e);
	return { dispose: () => a.forEach((e) => e.dispose()) };
	function s(e) {
		i.setModelMarkers(e, n, []);
		let t = e.uri.toString();
		o.has(t) && (o.get(t)?.dispose(), o.delete(t));
	}
	function c(e) {
		if (!t.includes(e.getLanguageId?.() ?? e.getModeId?.())) return;
		let r, a = e.onDidChangeContent(() => {
			clearTimeout(r), r = setTimeout(() => l(e), 250);
		}), s = e.onDidChangeAttached(() => {
			e.isAttachedToEditor() ? l(e) : i.setModelMarkers(e, n, []);
		});
		o.set(e.uri.toString(), { dispose: () => {
			a.dispose(), s.dispose(), clearTimeout(r);
		} }), l(e);
	}
	async function l(t) {
		if (t.isDisposed() || !t.isAttachedToEditor()) return;
		let a = await e.withSyncedResources(r()), o = Pe(t), s = await a.getDiagnostics(Q(o.token, a), t.uri);
		if (o.dispose(), o.token.isCancellationRequested) return;
		let c = s.map((e) => {
			let t = S(e);
			return X.set(t, e), t;
		});
		i.setModelMarkers(t, n, c);
	}
}
function Pe(e) {
	let t = e.getVersionId(), n;
	return {
		token: {
			get isCancellationRequested() {
				return e.getVersionId() !== t;
			},
			onCancellationRequested(t) {
				let r = e.onDidChangeContent(() => {
					t(void 0), r.dispose(), n?.delete(r);
				});
				return n ??= /* @__PURE__ */ new Set(), n.add(r), { dispose() {
					r.dispose(), n?.delete(r);
				} };
			}
		},
		dispose() {
			if (n) {
				for (let e of n) e.dispose();
				n.clear();
			}
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@volar+monaco@2.4.28/node_modules/@volar/monaco/lib/provider.js
async function Fe(e, t) {
	let n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), c = await e.getProxy(), l = await c.getSemanticTokenLegend();
	return {
		triggerCharacters: await c.getTriggerCharacters(),
		autoFormatTriggerCharacters: await c.getAutoFormatTriggerCharacters(),
		signatureHelpTriggerCharacters: await c.getSignatureHelpTriggerCharacters(),
		signatureHelpRetriggerCharacters: await c.getSignatureHelpRetriggerCharacters(),
		getLegend() {
			return l;
		},
		async provideDocumentSemanticTokens(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getSemanticTokens(Q(i, a), n.uri, void 0, l);
			if (o) return Y(o);
		},
		async provideDocumentRangeSemanticTokens(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getSemanticTokens(Q(i, a), n.uri, b(r), l);
			if (o) return Y(o);
		},
		releaseDocumentSemanticTokens() {},
		async provideDocumentSymbols(n, r) {
			let i = await e.withSyncedResources(t()), a = await i.getDocumentSymbols(Q(r, i), n.uri);
			if (a) return a.map(H);
		},
		async provideDocumentHighlights(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getDocumentHighlights(Q(i, a), n.uri, G(r));
			if (o) return o.map(he);
		},
		async provideLinkedEditingRanges(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getLinkedEditingRanges(Q(i, a), n.uri, G(r));
			if (o) return we(o);
		},
		async provideDefinition(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getDefinition(Q(i, a), n.uri, G(r));
			if (o) return o.map(J);
		},
		async provideImplementation(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getImplementations(Q(i, a), n.uri, G(r));
			if (o) return o.map(J);
		},
		async provideTypeDefinition(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getTypeDefinition(Q(i, a), n.uri, G(r));
			if (o) return o.map(J);
		},
		async provideCodeLenses(n, i) {
			let a = await e.withSyncedResources(t()), o = await a.getCodeLenses(Q(i, a), n.uri);
			if (o) {
				let e = o.map(k);
				for (let t = 0; t < e.length; t++) r.set(e[t], o[t]);
				return {
					lenses: e,
					dispose: () => {}
				};
			}
		},
		async resolveCodeLens(n, i, a) {
			let o = r.get(i);
			if (o) {
				let n = await e.withSyncedResources(t());
				o = await n.resolveCodeLens(Q(a, n), o), o && (i = k(o), r.set(i, o));
			}
			return i;
		},
		async provideCodeActions(n, r, a, o) {
			let s = [];
			for (let e of a.markers) {
				let t = X.get(e);
				t && s.push(t);
			}
			let c = await e.withSyncedResources(t()), l = await c.getCodeActions(Q(o, c), n.uri, b(r), {
				diagnostics: s,
				only: a.only ? [a.only] : void 0
			});
			if (l) {
				let e = l.map(D);
				for (let t = 0; t < e.length; t++) i.set(e[t], l[t]);
				return {
					actions: e,
					dispose: () => {}
				};
			}
		},
		async resolveCodeAction(n, r) {
			let a = i.get(n);
			if (a) {
				let o = await e.withSyncedResources(t());
				a = await o.resolveCodeAction(Q(r, o), a), a && (n = D(a), i.set(n, a));
			}
			return n;
		},
		async provideDocumentFormattingEdits(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getDocumentFormattingEdits(Q(i, a), n.uri, U(r), void 0, void 0);
			if (o) return o.map(C);
		},
		async provideDocumentRangeFormattingEdits(n, r, i, a) {
			let o = await e.withSyncedResources(t()), s = await o.getDocumentFormattingEdits(Q(a, o), n.uri, U(i), b(r), void 0);
			if (s) return s.map(C);
		},
		async provideOnTypeFormattingEdits(n, r, i, a, o) {
			let s = await e.withSyncedResources(t()), c = await s.getDocumentFormattingEdits(Q(o, s), n.uri, U(a), void 0, {
				ch: i,
				position: G(r)
			});
			if (c) return c.map(C);
		},
		async provideLinks(n, r) {
			let i = await e.withSyncedResources(t()), a = await i.getDocumentLinks(Q(r, i), n.uri);
			if (a) return { links: a.map((e) => {
				let t = q(e);
				return o.set(t, e), t;
			}) };
		},
		async resolveLink(e, t) {
			let n = o.get(e);
			return n ? (n = await c.resolveDocumentLink(Q(t, c), n), q(n)) : e;
		},
		async provideCompletionItems(r, i, a, o) {
			let s = await e.withSyncedResources(t()), c = await s.getCompletionItems(Q(o, s), r.uri, G(i), M(a)), l = B(c, { range: {
				startColumn: r.getWordUntilPosition(i).startColumn,
				startLineNumber: i.lineNumber,
				endColumn: i.column,
				endLineNumber: i.lineNumber
			} });
			for (let e = 0; e < c.items.length; e++) n.set(l.suggestions[e], c.items[e]);
			return l;
		},
		async resolveCompletionItem(r, i) {
			let a = n.get(r);
			if (a) {
				let o = await e.withSyncedResources(t());
				a = await o.resolveCompletionItem(Q(i, o), a), r = z(a, { range: "replace" in r.range ? r.range.replace : r.range }), n.set(r, a);
			}
			return r;
		},
		async provideDocumentColors(n, r) {
			let i = await e.withSyncedResources(t()), a = await i.getDocumentColors(Q(r, i), n.uri);
			if (a) return a.map(pe);
		},
		async provideColorPresentations(n, r, i) {
			let o = await e.withSyncedResources(t()), s = a.get(r);
			if (s) {
				let e = await o.getColorPresentations(Q(i, o), n.uri, s.color, {
					start: G(n.getPositionAt(0)),
					end: G(n.getPositionAt(n.getValueLength()))
				});
				if (e) return e.map(A);
			}
		},
		async provideFoldingRanges(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getFoldingRanges(Q(i, a), n.uri);
			if (o) return o.map(ve);
		},
		async provideDeclaration(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getDefinition(Q(i, a), n.uri, G(r));
			if (o) return o.map(J);
		},
		async provideSelectionRanges(n, r, i) {
			let a = await e.withSyncedResources(t());
			return (await a.getSelectionRanges(Q(i, a), n.uri, r.map(G)))?.map(De);
		},
		async provideSignatureHelp(n, r, i, a) {
			let o = await e.withSyncedResources(t()), s = await o.getSignatureHelp(Q(i, o), n.uri, G(r), Ne(a));
			if (s) return {
				value: je(s),
				dispose: () => {}
			};
		},
		async provideRenameEdits(n, r, i, a) {
			let o = await e.withSyncedResources(t()), s = await o.getRenameEdits(Q(a, o), n.uri, G(r), i);
			if (s) return E(s);
		},
		async provideReferences(n, r, i, a) {
			let o = await e.withSyncedResources(t()), s = await o.getReferences(Q(a, o), n.uri, G(r), i);
			if (s) return s.map(V);
		},
		async provideInlayHints(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getInlayHints(Q(i, a), n.uri, b(r));
			if (o) return {
				hints: o.map((e) => {
					let t = K(e);
					return s.set(t, e), t;
				}),
				dispose: () => {}
			};
		},
		async resolveInlayHint(n, r) {
			let i = await e.withSyncedResources(t()), a = s.get(n);
			return a ? K(await i.resolveInlayHint(Q(r, i), a)) : n;
		},
		async provideHover(n, r, i) {
			let a = await e.withSyncedResources(t()), o = await a.getHover(Q(i, a), n.uri, G(r));
			if (o) return be(o);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@volar+monaco@2.4.28/node_modules/@volar/monaco/lib/languages.js
async function Ie(e, t, n, r) {
	let i = await Fe(e, n), a = [
		r.registerHoverProvider(t, i),
		r.registerReferenceProvider(t, i),
		r.registerRenameProvider(t, i),
		r.registerSignatureHelpProvider(t, i),
		r.registerDocumentSymbolProvider(t, i),
		r.registerDocumentHighlightProvider(t, i),
		r.registerLinkedEditingRangeProvider(t, i),
		r.registerDefinitionProvider(t, i),
		r.registerImplementationProvider(t, i),
		r.registerTypeDefinitionProvider(t, i),
		r.registerCodeLensProvider(t, i),
		r.registerCodeActionProvider(t, i),
		r.registerDocumentFormattingEditProvider(t, i),
		r.registerDocumentRangeFormattingEditProvider(t, i),
		r.registerOnTypeFormattingEditProvider(t, i),
		r.registerLinkProvider(t, i),
		r.registerCompletionItemProvider(t, i),
		r.registerColorProvider(t, i),
		r.registerFoldingRangeProvider(t, i),
		r.registerDeclarationProvider(t, i),
		r.registerSelectionRangeProvider(t, i),
		r.registerInlayHintsProvider(t, i),
		r.registerDocumentSemanticTokensProvider(t, i),
		r.registerDocumentRangeSemanticTokensProvider(t, i)
	];
	return { dispose: () => a.forEach((e) => e.dispose()) };
}
//#endregion
//#region src/editor-commands.ts
function Le(e) {
	let t = n.registerCommand("openworkflow.insertHelloWorld", (t, n) => {
		e.pushEditOperations(null, [{
			range: e.getFullModelRange(),
			text: n
		}], () => null);
	});
	return { dispose() {
		t.dispose();
	} };
}
//#endregion
//#region src/language-service.ts
function Re(e, t) {
	let r = n.createWebWorker({ worker: t() }), a = Le(e), o = $(r, ["json"], "openworkflow", () => [e.uri], n), s, c = !1;
	return Ie(r, "json", () => [e.uri], i).then((e) => {
		c ? e.dispose() : s = e;
	}).catch((e) => {
		c || console.error("registerProviders failed", e);
	}), { dispose() {
		c = !0, s?.dispose(), o.dispose(), a.dispose(), r.dispose();
	} };
}
//#endregion
//#region src/TextEditor.tsx
p.setModeConfiguration({
	tokens: !0,
	colors: !1,
	completionItems: !1,
	hovers: !1,
	documentSymbols: !1,
	documentFormattingEdits: !1,
	documentRangeFormattingEdits: !1,
	diagnostics: !1,
	foldingRanges: !1,
	selectionRanges: !1
});
var ze = ({ content: e, language: t, createLanguageServiceWorker: i, onContentChange: a, isReadOnly: o = !1, colorMode: c = "system" }) => {
	let l = se(c), u = s.useRef(null), d = s.useRef(null), f = s.useRef(!1);
	return s.useEffect(() => {
		if (!u.current) return;
		let a = n.createModel(e, t, r.parse("inmemory://openworkflow/workflow.json")), s = n.create(u.current, {
			model: a,
			readOnly: o,
			codeLens: t === "json" && !o,
			automaticLayout: !0,
			renderLineHighlight: "none",
			...l && { theme: l === "dark" ? "vs-dark" : "vs" }
		}), c = Re(a, i);
		return d.current = s, () => {
			c.dispose(), s.dispose(), a.dispose(), d.current = null;
		};
	}, []), s.useEffect(() => {
		let e = d.current;
		if (!e || !a) return;
		let t = e.onDidChangeModelContent(() => {
			f.current || a(e.getValue());
		});
		return () => t.dispose();
	}, [a]), s.useEffect(() => {
		let t = d.current;
		t && t.getValue() !== e && (f.current = !0, t.setValue(e), f.current = !1);
	}, [e]), s.useEffect(() => {
		let e = d.current;
		if (!e) return;
		e.updateOptions({
			readOnly: o,
			codeLens: t === "json" && !o
		});
		let r = e.getModel();
		r && r.getLanguageId() !== t && n.setModelLanguage(r, t);
	}, [o, t]), s.useEffect(() => {
		d.current && n.setTheme(l === "dark" ? "vs-dark" : "vs");
	}, [l]), /* @__PURE__ */ ee("div", {
		"data-testid": "text-editor-container",
		ref: u,
		style: {
			width: "100%",
			height: "100%"
		}
	});
};
//#endregion
export { ze as TextEditor };

//# sourceMappingURL=index.js.map