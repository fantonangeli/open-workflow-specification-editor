import { Go as e, Ho as t, Ko as n, Uo as r, Vo as i, i as a, n as o, r as s, st as c, t as l } from "./esm-BG1bcJ97.js";
//#region ../../node_modules/.pnpm/@volar+source-map@2.4.28/node_modules/@volar/source-map/lib/binarySearch.js
var u = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.binarySearch = t;
	function t(e, t) {
		let n = 0, r = e.length - 1, i;
		for (; n <= r;) {
			let a = Math.floor((n + r) / 2), o = e[a];
			if (o < t) n = a + 1;
			else if (o > t) r = a - 1;
			else {
				n = a, r = a, i = a;
				break;
			}
		}
		return {
			low: Math.max(Math.min(n, r, e.length - 1), 0),
			high: Math.min(Math.max(n, r, 0), e.length - 1),
			match: i
		};
	}
})), d = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.translateOffset = n;
	var t = !1;
	function n(e, n, r, i, a = i, o = !1) {
		if (!n.every((e, t) => t === 0 || n[t - 1] <= e)) {
			for (let t = 0; t < n.length; t++) {
				let s = n[t], c = i[t];
				if (e >= s && e <= s + c) {
					let n = a[t], i = r[t], l, u = e - s;
					return l = o && n > c && u === c ? n : Math.min(u, n), i + l;
				}
			}
			t || (t = !0, console.warn("fromOffsets should be sorted in ascending order"));
		}
		let s = 0, c = n.length - 1;
		for (; s <= c;) {
			let t = Math.floor((s + c) / 2), l = n[t], u = i[t];
			if (e >= l && e <= l + u) {
				let n = a[t], i = r[t], s, c = e - l;
				return s = o && n > u && c === u ? n : Math.min(c, n), i + s;
			}
			e < l ? c = t - 1 : s = t + 1;
		}
	}
})), f = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SourceMap = void 0;
	var t = u(), n = d();
	e.SourceMap = class {
		constructor(e) {
			this.mappings = e;
		}
		toSourceRange(e, t, n, r) {
			return this.findMatchingStartEnd(e, t, n, "generatedOffsets", r);
		}
		toGeneratedRange(e, t, n, r) {
			return this.findMatchingStartEnd(e, t, n, "sourceOffsets", r);
		}
		toSourceLocation(e, t) {
			return this.findMatchingOffsets(e, "generatedOffsets", t);
		}
		toGeneratedLocation(e, t) {
			return this.findMatchingOffsets(e, "sourceOffsets", t);
		}
		*findMatchingOffsets(e, i, a, o = !1) {
			let s = this.getMemoBasedOnRange(i);
			if (s.offsets.length === 0) return;
			let { low: c, high: l } = (0, t.binarySearch)(s.offsets, e), u = /* @__PURE__ */ new Set(), d = i === "sourceOffsets" ? "generatedOffsets" : "sourceOffsets";
			for (let t = c; t <= l; t++) for (let c of s.mappings[t]) {
				if (u.has(c) || (u.add(c), a && !a(c.data))) continue;
				let t = (0, n.translateOffset)(e, c[i], c[d], r(c, i), r(c, d), o);
				t !== void 0 && (yield [t, c]);
			}
		}
		*findMatchingStartEnd(e, t, i, a, o) {
			let s = a === "sourceOffsets" ? "generatedOffsets" : "sourceOffsets", c = s === "sourceOffsets", l = [], u = !1;
			for (let [i, d] of this.findMatchingOffsets(e, a)) {
				if (o && !o(d.data)) continue;
				l.push([i, d]);
				let e = (0, n.translateOffset)(t, d[a], d[s], r(d, a), r(d, s), c);
				e !== void 0 && (u = !0, yield [
					i,
					e,
					d,
					d
				]);
			}
			if (!u && i) {
				for (let [e, n] of l) for (let [r, i] of this.findMatchingOffsets(t, a, void 0, c)) if (!(o && !o(i.data) || r < e)) {
					yield [
						e,
						r,
						n,
						i
					];
					break;
				}
			}
		}
		getMemoBasedOnRange(e) {
			return e === "sourceOffsets" ? this.sourceCodeOffsetsMemo ??= this.createMemo("sourceOffsets") : this.generatedCodeOffsetsMemo ??= this.createMemo("generatedOffsets");
		}
		createMemo(e) {
			let n = /* @__PURE__ */ new Set();
			for (let t of this.mappings) for (let i = 0; i < t[e].length; i++) n.add(t[e][i]), n.add(t[e][i] + r(t, e)[i]);
			let i = [...n].sort((e, t) => e - t), a = i.map(() => /* @__PURE__ */ new Set());
			for (let n of this.mappings) for (let o = 0; o < n[e].length; o++) {
				let s = (0, t.binarySearch)(i, n[e][o]).match, c = (0, t.binarySearch)(i, n[e][o] + r(n, e)[o]).match;
				for (let e = s; e <= c; e++) a[e].add(n);
			}
			return {
				offsets: i,
				mappings: a
			};
		}
	};
	function r(e, t) {
		return t === "sourceOffsets" ? e.lengths : e.generatedLengths ?? e.lengths;
	}
})), p = /* @__PURE__ */ i(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), n(f(), e), n(d(), e);
})), m = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isHoverEnabled = t, e.isInlayHintsEnabled = n, e.isCodeLensEnabled = r, e.isMonikerEnabled = i, e.isInlineValueEnabled = a, e.isSemanticTokensEnabled = o, e.isCallHierarchyEnabled = s, e.isTypeHierarchyEnabled = c, e.isRenameEnabled = l, e.isDefinitionEnabled = u, e.isTypeDefinitionEnabled = d, e.isReferencesEnabled = f, e.isImplementationEnabled = p, e.isHighlightEnabled = m, e.isSymbolsEnabled = h, e.isFoldingRangesEnabled = g, e.isSelectionRangesEnabled = _, e.isLinkedEditingEnabled = v, e.isColorEnabled = y, e.isDocumentLinkEnabled = b, e.isDiagnosticsEnabled = x, e.isCodeActionsEnabled = S, e.isFormattingEnabled = C, e.isCompletionEnabled = w, e.isAutoInsertEnabled = T, e.isSignatureHelpEnabled = E, e.shouldReportDiagnostics = D, e.resolveRenameNewName = O, e.resolveRenameEditText = k, e.findOverlapCodeRange = A;
	function t(e) {
		return !!e.semantic;
	}
	function n(e) {
		return !!e.semantic;
	}
	function r(e) {
		return !!e.semantic;
	}
	function i(e) {
		return !!e.semantic;
	}
	function a(e) {
		return !!e.semantic;
	}
	function o(e) {
		return typeof e.semantic == "object" ? e.semantic.shouldHighlight?.() ?? !0 : !!e.semantic;
	}
	function s(e) {
		return !!e.navigation;
	}
	function c(e) {
		return !!e.navigation;
	}
	function l(e) {
		return typeof e.navigation == "object" ? e.navigation.shouldRename?.() ?? !0 : !!e.navigation;
	}
	function u(e) {
		return !!e.navigation;
	}
	function d(e) {
		return !!e.navigation;
	}
	function f(e) {
		return !!e.navigation;
	}
	function p(e) {
		return !!e.navigation;
	}
	function m(e) {
		return typeof e.navigation == "object" ? e.navigation.shouldHighlight?.() ?? !0 : !!e.navigation;
	}
	function h(e) {
		return !!e.structure;
	}
	function g(e) {
		return !!e.structure;
	}
	function _(e) {
		return !!e.structure;
	}
	function v(e) {
		return !!e.structure;
	}
	function y(e) {
		return !!e.structure;
	}
	function b(e) {
		return !!e.structure;
	}
	function x(e) {
		return !!e.verification;
	}
	function S(e) {
		return !!e.verification;
	}
	function C(e) {
		return !!e.format;
	}
	function w(e) {
		return !!e.completion;
	}
	function T(e) {
		return !!e.completion;
	}
	function E(e) {
		return !!e.completion;
	}
	function D(e, t, n) {
		return typeof e.verification == "object" ? e.verification.shouldReport?.(t, n) ?? !0 : !!e.verification;
	}
	function O(e, t) {
		return typeof t.navigation == "object" ? t.navigation.resolveRenameNewName?.(e) ?? e : e;
	}
	function k(e, t) {
		return typeof t.navigation == "object" ? t.navigation.resolveRenameEditText?.(e) ?? e : e;
	}
	function A(e, t, n, r) {
		let i, a;
		for (let [t, a] of n.toGeneratedLocation(e)) if (r(a.data)) {
			i = t;
			break;
		}
		for (let [e, i] of n.toGeneratedLocation(t)) if (r(i.data)) {
			a = e;
			break;
		}
		if (i === void 0 || a === void 0) {
			for (let o of n.mappings) if (r(o.data)) {
				let n = o.sourceOffsets[0], r = j(e, t, n, o.sourceOffsets[o.sourceOffsets.length - 1] + o.lengths[o.lengths.length - 1]);
				if (r) {
					let e = r.start - n + o.generatedOffsets[0], t = (o.generatedLengths ?? o.lengths)[o.generatedOffsets.length - 1], s = Math.min(r.end - o.sourceOffsets[o.sourceOffsets.length - 1], t), c = o.generatedOffsets[o.generatedOffsets.length - 1] + s;
					i = i === void 0 ? e : Math.min(i, e), a = a === void 0 ? c : Math.max(a, c);
				}
			}
		}
		if (i !== void 0 && a !== void 0) return {
			start: i,
			end: a
		};
	}
	function j(e, t, n, r) {
		let i = Math.max(e, n), a = Math.min(t, r);
		if (!(i > a)) return {
			start: i,
			end: a
		};
	}
})), h = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.LinkedCodeMap = void 0;
	var t = p();
	e.LinkedCodeMap = class extends t.SourceMap {
		*getLinkedOffsets(e) {
			for (let t of this.toGeneratedLocation(e)) yield t[0];
			for (let t of this.toSourceLocation(e)) yield t[0];
		}
	};
})), g = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
})), _ = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.FileMap = void 0, e.FileMap = class extends Map {
		constructor(e) {
			super(), this.caseSensitive = e, this.originalFileNames = /* @__PURE__ */ new Map();
		}
		keys() {
			return this.originalFileNames.values();
		}
		get(e) {
			return super.get(this.normalizeId(e));
		}
		has(e) {
			return super.has(this.normalizeId(e));
		}
		set(e, t) {
			return this.originalFileNames.set(this.normalizeId(e), e), super.set(this.normalizeId(e), t);
		}
		delete(e) {
			return this.originalFileNames.delete(this.normalizeId(e)), super.delete(this.normalizeId(e));
		}
		clear() {
			return this.originalFileNames.clear(), super.clear();
		}
		normalizeId(e) {
			return this.caseSensitive ? e : e.toLowerCase();
		}
	};
})), v = /* @__PURE__ */ i(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultMapperFactory = e.SourceMap = void 0, e.createLanguage = o, e.forEachEmbeddedCode = s;
	var r = p();
	Object.defineProperty(e, "SourceMap", {
		enumerable: !0,
		get: function() {
			return r.SourceMap;
		}
	}), n(m(), e), n(h(), e), n(g(), e), n(_(), e);
	var i = p(), a = h();
	e.defaultMapperFactory = (e) => new i.SourceMap(e);
	function o(t, n, r, i) {
		let o = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), u = {
			mapperFactory: e.defaultMapperFactory,
			plugins: t,
			scripts: {
				fromVirtualCode(e) {
					return o.get(e);
				},
				get(e, t = !0, i = !1) {
					r(e, t, i);
					let a = n.get(e);
					return a?.isAssociationDirty && this.set(e, a.snapshot, a.languageId), n.get(e);
				},
				set(e, r, i, a = t) {
					if (!i) {
						for (let n of t) if (i = n.getLanguageId?.(e), i) break;
					}
					if (!i) {
						console.warn(`languageId not found for ${String(e)}`);
						return;
					}
					let c = !1;
					for (let n of t) if (n.isAssociatedFileOnly?.(e, i)) {
						c = !0;
						break;
					}
					if (n.has(e)) {
						let t = n.get(e);
						if (t.languageId !== i || t.associatedOnly !== c) return this.delete(e), d(t), this.set(e, r, i);
						if (c) t.snapshot !== r && (t.snapshot = r, d(t));
						else if (t.isAssociationDirty || t.snapshot !== r) {
							t.snapshot !== r && (t.snapshot = r, d(t));
							let n = f(t);
							if (t.generated) {
								let { updateVirtualCode: a, createVirtualCode: c } = t.generated.languagePlugin, l = a ? a(e, t.generated.root, r, n) : c?.(e, i, r, n);
								if (l) {
									t.generated.root = l, t.generated.embeddedCodes.clear();
									for (let e of s(t.generated.root)) o.set(e, t), t.generated.embeddedCodes.set(e.id, e);
									return t;
								}
								this.delete(e);
								return;
							}
						} else return t;
					} else {
						let t = {
							id: e,
							languageId: i,
							snapshot: r,
							associatedIds: /* @__PURE__ */ new Set(),
							targetIds: /* @__PURE__ */ new Set(),
							associatedOnly: c
						};
						if (n.set(e, t), c) return t;
						for (let n of a) {
							let a = n.createVirtualCode?.(e, i, r, f(t));
							if (a) {
								t.generated = {
									root: a,
									languagePlugin: n,
									embeddedCodes: /* @__PURE__ */ new Map()
								};
								for (let e of s(a)) o.set(e, t), t.generated.embeddedCodes.set(e.id, e);
								break;
							}
						}
						return t;
					}
				},
				delete(e) {
					let t = n.get(e);
					t && (t.generated?.languagePlugin.disposeVirtualCode?.(e, t.generated.root), n.delete(e), d(t));
				}
			},
			maps: {
				get(e, t) {
					let n = c.get(e.snapshot);
					if (n || c.set(e.snapshot, n = /* @__PURE__ */ new WeakMap()), !n.has(t.snapshot)) {
						let r = e.associatedScriptMappings?.get(t.id) ?? e.mappings;
						n.set(t.snapshot, u.mapperFactory(r));
					}
					return n.get(t.snapshot);
				},
				*forEach(e) {
					let t = o.get(e);
					if (yield [t, this.get(e, t)], e.associatedScriptMappings) for (let [t] of e.associatedScriptMappings) {
						let r = n.get(t);
						r && (yield [r, this.get(e, r)]);
					}
				}
			},
			linkedCodeMaps: { get(e) {
				let t = o.get(e), n = l.get(e.snapshot);
				return n?.[0] !== t.snapshot && l.set(e.snapshot, n = [t.snapshot, e.linkedCodeMappings ? new a.LinkedCodeMap(e.linkedCodeMappings) : void 0]), n[1];
			} }
		};
		return u;
		function d(e) {
			e.targetIds.forEach((e) => {
				let t = n.get(e);
				t && (t.isAssociationDirty = !0, i?.(t.id));
			});
		}
		function f(e) {
			for (let t of e.associatedIds) n.get(t)?.targetIds.delete(e.id);
			return e.associatedIds.clear(), e.isAssociationDirty = !1, { getAssociatedScript(t) {
				r(t, !0, !0);
				let i = n.get(t);
				return i && (i.targetIds.add(e.id), e.associatedIds.add(i.id)), i;
			} };
		}
	}
	function* s(e) {
		if (yield e, e.embeddedCodes) for (let t of e.embeddedCodes) yield* s(t);
	}
})), y = /* @__PURE__ */ i(((e, t) => {
	(function(n, r) {
		if (typeof e == "object" && typeof t == "object") t.exports = r();
		else if (typeof define == "function" && define.amd) define([], r);
		else {
			var i = r();
			for (var a in i) (typeof e == "object" ? e : n)[a] = i[a];
		}
	})(e, () => (() => {
		var e = {
			70(e, t) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.isWindows = void 0, typeof process == "object" ? t.isWindows = process.platform === "win32" : typeof navigator == "object" && (t.isWindows = navigator.userAgent.indexOf("Windows") >= 0);
			},
			231(e, t, n) {
				Object.defineProperty(t, "__esModule", { value: !0 }), t.uriToFsPath = t.URI = void 0;
				let r = n(70), i = /^\w[\w\d+.-]*$/, a = /^\//, o = /^\/\//;
				function s(e, t) {
					if (!e.scheme && t) throw Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`);
					if (e.scheme && !i.test(e.scheme)) throw Error("[UriError]: Scheme contains illegal characters.");
					if (e.path) {
						if (e.authority) {
							if (!a.test(e.path)) throw Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
						} else if (o.test(e.path)) throw Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
					}
				}
				let c = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
				class l {
					static isUri(e) {
						return e instanceof l || !!e && typeof e.authority == "string" && typeof e.fragment == "string" && typeof e.path == "string" && typeof e.query == "string" && typeof e.scheme == "string" && typeof e.fsPath == "string" && typeof e.with == "function" && typeof e.toString == "function";
					}
					scheme;
					authority;
					path;
					query;
					fragment;
					constructor(e, t, n, r, i, a = !1) {
						typeof e == "object" ? (this.scheme = e.scheme || "", this.authority = e.authority || "", this.path = e.path || "", this.query = e.query || "", this.fragment = e.fragment || "") : (this.scheme = function(e, t) {
							return e || t ? e : "file";
						}(e, a), this.authority = t || "", this.path = function(e, t) {
							switch (e) {
								case "https":
								case "http":
								case "file": t ? t[0] !== "/" && (t = "/" + t) : t = "/";
							}
							return t;
						}(this.scheme, n || ""), this.query = r || "", this.fragment = i || "", s(this, a));
					}
					get fsPath() {
						return h(this, !1);
					}
					with(e) {
						if (!e) return this;
						let { scheme: t, authority: n, path: r, query: i, fragment: a } = e;
						return t === void 0 ? t = this.scheme : t === null && (t = ""), n === void 0 ? n = this.authority : n === null && (n = ""), r === void 0 ? r = this.path : r === null && (r = ""), i === void 0 ? i = this.query : i === null && (i = ""), a === void 0 ? a = this.fragment : a === null && (a = ""), t === this.scheme && n === this.authority && r === this.path && i === this.query && a === this.fragment ? this : new d(t, n, r, i, a);
					}
					static parse(e, t = !1) {
						let n = c.exec(e);
						return n ? new d(n[2] || "", y(n[4] || ""), y(n[5] || ""), y(n[7] || ""), y(n[9] || ""), t) : new d("", "", "", "", "");
					}
					static file(e) {
						let t = "";
						if (r.isWindows && (e = e.replace(/\\/g, "/")), e[0] === "/" && e[1] === "/") {
							let n = e.indexOf("/", 2);
							n === -1 ? (t = e.substring(2), e = "/") : (t = e.substring(2, n), e = e.substring(n) || "/");
						}
						return new d("file", t, e, "", "");
					}
					static from(e) {
						let t = new d(e.scheme, e.authority, e.path, e.query, e.fragment);
						return s(t, !0), t;
					}
					toString(e = !1) {
						return g(this, e);
					}
					toJSON() {
						return this;
					}
					static revive(e) {
						if (e) {
							if (e instanceof l) return e;
							{
								let t = new d(e);
								return t._formatted = e.external, t._fsPath = e._sep === u ? e.fsPath : null, t;
							}
						}
						return e;
					}
				}
				t.URI = l;
				let u = r.isWindows ? 1 : void 0;
				class d extends l {
					_formatted = null;
					_fsPath = null;
					get fsPath() {
						return this._fsPath ||= h(this, !1), this._fsPath;
					}
					toString(e = !1) {
						return e ? g(this, !0) : (this._formatted ||= g(this, !1), this._formatted);
					}
					toJSON() {
						let e = { $mid: 1 };
						return this._fsPath && (e.fsPath = this._fsPath, e._sep = u), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
					}
				}
				let f = {
					58: "%3A",
					47: "%2F",
					63: "%3F",
					35: "%23",
					91: "%5B",
					93: "%5D",
					64: "%40",
					33: "%21",
					36: "%24",
					38: "%26",
					39: "%27",
					40: "%28",
					41: "%29",
					42: "%2A",
					43: "%2B",
					44: "%2C",
					59: "%3B",
					61: "%3D",
					32: "%20"
				};
				function p(e, t, n) {
					let r, i = -1;
					for (let a = 0; a < e.length; a++) {
						let o = e.charCodeAt(a);
						if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || o === 45 || o === 46 || o === 95 || o === 126 || t && o === 47 || n && o === 91 || n && o === 93 || n && o === 58) i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r !== void 0 && (r += e.charAt(a));
						else {
							r === void 0 && (r = e.substr(0, a));
							let t = f[o];
							t === void 0 ? i === -1 && (i = a) : (i !== -1 && (r += encodeURIComponent(e.substring(i, a)), i = -1), r += t);
						}
					}
					return i !== -1 && (r += encodeURIComponent(e.substring(i))), r === void 0 ? e : r;
				}
				function m(e) {
					let t;
					for (let n = 0; n < e.length; n++) {
						let r = e.charCodeAt(n);
						r === 35 || r === 63 ? (t === void 0 && (t = e.substr(0, n)), t += f[r]) : t !== void 0 && (t += e[n]);
					}
					return t === void 0 ? e : t;
				}
				function h(e, t) {
					let n;
					return n = e.authority && e.path.length > 1 && e.scheme === "file" ? `//${e.authority}${e.path}` : e.path.charCodeAt(0) === 47 && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && e.path.charCodeAt(2) === 58 ? t ? e.path.substr(1) : e.path[1].toLowerCase() + e.path.substr(2) : e.path, r.isWindows && (n = n.replace(/\//g, "\\")), n;
				}
				function g(e, t) {
					let n = t ? m : p, r = "", { scheme: i, authority: a, path: o, query: s, fragment: c } = e;
					if (i && (r += i, r += ":"), (a || i === "file") && (r += "/", r += "/"), a) {
						let e = a.indexOf("@");
						if (e !== -1) {
							let t = a.substr(0, e);
							a = a.substr(e + 1), e = t.lastIndexOf(":"), e === -1 ? r += n(t, !1, !1) : (r += n(t.substr(0, e), !1, !1), r += ":", r += n(t.substr(e + 1), !1, !0)), r += "@";
						}
						a = a.toLowerCase(), e = a.lastIndexOf(":"), e === -1 ? r += n(a, !1, !0) : (r += n(a.substr(0, e), !1, !0), r += a.substr(e));
					}
					if (o) {
						if (o.length >= 3 && o.charCodeAt(0) === 47 && o.charCodeAt(2) === 58) {
							let e = o.charCodeAt(1);
							e >= 65 && e <= 90 && (o = `/${String.fromCharCode(e + 32)}:${o.substr(3)}`);
						} else if (o.length >= 2 && o.charCodeAt(1) === 58) {
							let e = o.charCodeAt(0);
							e >= 65 && e <= 90 && (o = `${String.fromCharCode(e + 32)}:${o.substr(2)}`);
						}
						r += n(o, !0, !1);
					}
					return s && (r += "?", r += n(s, !1, !1)), c && (r += "#", r += t ? c : p(c, !1, !1)), r;
				}
				function _(e) {
					try {
						return decodeURIComponent(e);
					} catch {
						return e.length > 3 ? e.substr(0, 3) + _(e.substr(3)) : e;
					}
				}
				t.uriToFsPath = h;
				let v = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
				function y(e) {
					return e.match(v) ? e.replace(v, (e) => _(e)) : e;
				}
			},
			552(e, t, n) {
				var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
					r === void 0 && (r = n);
					var i = Object.getOwnPropertyDescriptor(t, n);
					i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
						enumerable: !0,
						get: function() {
							return t[n];
						}
					}), Object.defineProperty(e, r, i);
				} : function(e, t, n, r) {
					r === void 0 && (r = n), e[r] = t[n];
				}), i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
					Object.defineProperty(e, "default", {
						enumerable: !0,
						value: t
					});
				} : function(e, t) {
					e.default = t;
				}), a = this && this.__importStar || function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
					return i(t, e), t;
				};
				Object.defineProperty(t, "__esModule", { value: !0 }), t.Utils = void 0;
				let o = a(n(975)), s = o.posix || o;
				var c;
				(function(e) {
					e.joinPath = function(e, ...t) {
						return e.with({ path: s.join(e.path, ...t) });
					}, e.resolvePath = function(e, ...t) {
						let n = e.path, r = !1;
						n[0] !== "/" && (n = "/" + n, r = !0);
						let i = s.resolve(n, ...t);
						return r && i[0] === "/" && !e.authority && (i = i.substring(1)), e.with({ path: i });
					}, e.dirname = function(e) {
						if (e.path.length === 0 || e.path === "/") return e;
						let t = s.dirname(e.path);
						return t.length === 1 && t.charCodeAt(0) === 46 && (t = ""), e.with({ path: t });
					}, e.basename = function(e) {
						return s.basename(e.path);
					}, e.extname = function(e) {
						return s.extname(e.path);
					};
				})(c || (t.Utils = c = {}));
			},
			975(e) {
				function t(e) {
					if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
				}
				function n(e, t) {
					for (var n, r = "", i = 0, a = -1, o = 0, s = 0; s <= e.length; ++s) {
						if (s < e.length) n = e.charCodeAt(s);
						else {
							if (n === 47) break;
							n = 47;
						}
						if (n === 47) {
							if (a !== s - 1 && o !== 1) {
								if (a !== s - 1 && o === 2) {
									if (r.length < 2 || i !== 2 || r.charCodeAt(r.length - 1) !== 46 || r.charCodeAt(r.length - 2) !== 46) {
										if (r.length > 2) {
											var c = r.lastIndexOf("/");
											if (c !== r.length - 1) {
												c === -1 ? (r = "", i = 0) : i = (r = r.slice(0, c)).length - 1 - r.lastIndexOf("/"), a = s, o = 0;
												continue;
											}
										} else if (r.length === 2 || r.length === 1) {
											r = "", i = 0, a = s, o = 0;
											continue;
										}
									}
									t && (r.length > 0 ? r += "/.." : r = "..", i = 2);
								} else r.length > 0 ? r += "/" + e.slice(a + 1, s) : r = e.slice(a + 1, s), i = s - a - 1;
							}
							a = s, o = 0;
						} else n === 46 && o !== -1 ? ++o : o = -1;
					}
					return r;
				}
				var r = {
					resolve: function() {
						for (var e, r = "", i = !1, a = arguments.length - 1; a >= -1 && !i; a--) {
							var o;
							a >= 0 ? o = arguments[a] : (e === void 0 && (e = process.cwd()), o = e), t(o), o.length !== 0 && (r = o + "/" + r, i = o.charCodeAt(0) === 47);
						}
						return r = n(r, !i), i ? r.length > 0 ? "/" + r : "/" : r.length > 0 ? r : ".";
					},
					normalize: function(e) {
						if (t(e), e.length === 0) return ".";
						var r = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
						return (e = n(e, !r)).length !== 0 || r || (e = "."), e.length > 0 && i && (e += "/"), r ? "/" + e : e;
					},
					isAbsolute: function(e) {
						return t(e), e.length > 0 && e.charCodeAt(0) === 47;
					},
					join: function() {
						if (arguments.length === 0) return ".";
						for (var e, n = 0; n < arguments.length; ++n) {
							var i = arguments[n];
							t(i), i.length > 0 && (e === void 0 ? e = i : e += "/" + i);
						}
						return e === void 0 ? "." : r.normalize(e);
					},
					relative: function(e, n) {
						if (t(e), t(n), e === n || (e = r.resolve(e)) === (n = r.resolve(n))) return "";
						for (var i = 1; i < e.length && e.charCodeAt(i) === 47; ++i);
						for (var a = e.length, o = a - i, s = 1; s < n.length && n.charCodeAt(s) === 47; ++s);
						for (var c = n.length - s, l = o < c ? o : c, u = -1, d = 0; d <= l; ++d) {
							if (d === l) {
								if (c > l) {
									if (n.charCodeAt(s + d) === 47) return n.slice(s + d + 1);
									if (d === 0) return n.slice(s + d);
								} else o > l && (e.charCodeAt(i + d) === 47 ? u = d : d === 0 && (u = 0));
								break;
							}
							var f = e.charCodeAt(i + d);
							if (f !== n.charCodeAt(s + d)) break;
							f === 47 && (u = d);
						}
						var p = "";
						for (d = i + u + 1; d <= a; ++d) d !== a && e.charCodeAt(d) !== 47 || (p.length === 0 ? p += ".." : p += "/..");
						return p.length > 0 ? p + n.slice(s + u) : (s += u, n.charCodeAt(s) === 47 && ++s, n.slice(s));
					},
					_makeLong: function(e) {
						return e;
					},
					dirname: function(e) {
						if (t(e), e.length === 0) return ".";
						for (var n = e.charCodeAt(0), r = n === 47, i = -1, a = !0, o = e.length - 1; o >= 1; --o) if ((n = e.charCodeAt(o)) === 47) {
							if (!a) {
								i = o;
								break;
							}
						} else a = !1;
						return i === -1 ? r ? "/" : "." : r && i === 1 ? "//" : e.slice(0, i);
					},
					basename: function(e, n) {
						if (n !== void 0 && typeof n != "string") throw TypeError("\"ext\" argument must be a string");
						t(e);
						var r, i = 0, a = -1, o = !0;
						if (n !== void 0 && n.length > 0 && n.length <= e.length) {
							if (n.length === e.length && n === e) return "";
							var s = n.length - 1, c = -1;
							for (r = e.length - 1; r >= 0; --r) {
								var l = e.charCodeAt(r);
								if (l === 47) {
									if (!o) {
										i = r + 1;
										break;
									}
								} else c === -1 && (o = !1, c = r + 1), s >= 0 && (l === n.charCodeAt(s) ? --s === -1 && (a = r) : (s = -1, a = c));
							}
							return i === a ? a = c : a === -1 && (a = e.length), e.slice(i, a);
						}
						for (r = e.length - 1; r >= 0; --r) if (e.charCodeAt(r) === 47) {
							if (!o) {
								i = r + 1;
								break;
							}
						} else a === -1 && (o = !1, a = r + 1);
						return a === -1 ? "" : e.slice(i, a);
					},
					extname: function(e) {
						t(e);
						for (var n = -1, r = 0, i = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
							var c = e.charCodeAt(s);
							if (c !== 47) i === -1 && (a = !1, i = s + 1), c === 46 ? n === -1 ? n = s : o !== 1 && (o = 1) : n !== -1 && (o = -1);
							else if (!a) {
								r = s + 1;
								break;
							}
						}
						return n === -1 || i === -1 || o === 0 || o === 1 && n === i - 1 && n === r + 1 ? "" : e.slice(n, i);
					},
					format: function(e) {
						if (typeof e != "object" || !e) throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
						return function(e, t) {
							var n = t.dir || t.root, r = t.base || (t.name || "") + (t.ext || "");
							return n ? n === t.root ? n + r : n + "/" + r : r;
						}(0, e);
					},
					parse: function(e) {
						t(e);
						var n = {
							root: "",
							dir: "",
							base: "",
							ext: "",
							name: ""
						};
						if (e.length === 0) return n;
						var r, i = e.charCodeAt(0), a = i === 47;
						a ? (n.root = "/", r = 1) : r = 0;
						for (var o = -1, s = 0, c = -1, l = !0, u = e.length - 1, d = 0; u >= r; --u) if ((i = e.charCodeAt(u)) !== 47) c === -1 && (l = !1, c = u + 1), i === 46 ? o === -1 ? o = u : d !== 1 && (d = 1) : o !== -1 && (d = -1);
						else if (!l) {
							s = u + 1;
							break;
						}
						return o === -1 || c === -1 || d === 0 || d === 1 && o === c - 1 && o === s + 1 ? c !== -1 && (n.base = n.name = s === 0 && a ? e.slice(1, c) : e.slice(s, c)) : (s === 0 && a ? (n.name = e.slice(1, o), n.base = e.slice(1, c)) : (n.name = e.slice(s, o), n.base = e.slice(s, c)), n.ext = e.slice(o, c)), s > 0 ? n.dir = e.slice(0, s - 1) : a && (n.dir = "/"), n;
					},
					sep: "/",
					delimiter: ":",
					win32: null,
					posix: null
				};
				r.posix = r, e.exports = r;
			}
		}, t = {};
		function n(r) {
			var i = t[r];
			if (i !== void 0) return i.exports;
			var a = t[r] = { exports: {} };
			return e[r].call(a.exports, a, a.exports, n), a.exports;
		}
		var r = {};
		return (() => {
			var e = r;
			Object.defineProperty(e, "__esModule", { value: !0 }), e.Utils = e.URI = void 0;
			let t = n(231);
			Object.defineProperty(e, "URI", {
				enumerable: !0,
				get: function() {
					return t.URI;
				}
			});
			let i = n(552);
			Object.defineProperty(e, "Utils", {
				enumerable: !0,
				get: function() {
					return i.Utils;
				}
			}), e.default = {
				URI: t.URI,
				Utils: i.Utils
			};
		})(), r;
	})());
})), b = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.NoneCancellationToken = void 0, e.NoneCancellationToken = {
		isCancellationRequested: !1,
		onCancellationRequested: () => ({ dispose: () => {} })
	};
})), x = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createLocationSet = t, e.withCodeAction = n, e.withTextEdits = r, e.withDocumentChanges = i, e.withDiagnostics = a, e.withLocations = o, e.withLocationLinks = s, e.withCallHierarchyIncomingCalls = c, e.withCallHierarchyOutgoingCalls = l, e.withRanges = u;
	function t() {
		let e = /* @__PURE__ */ new Set();
		return {
			add: t,
			has: n
		};
		function t(t) {
			return !n(t) && (e.add(r(t)), !0);
		}
		function n(t) {
			return e.has(r(t));
		}
		function r(e) {
			return [
				e.uri,
				e.range.start.line,
				e.range.start.character,
				e.range.end.line,
				e.range.end.character
			].join(":");
		}
	}
	function n(e) {
		return d(e, (e) => [e.title].join(":"));
	}
	function r(e) {
		return d(e, (e) => [
			e.range.start.line,
			e.range.start.character,
			e.range.end.line,
			e.range.end.character,
			e.newText
		].join(":"));
	}
	function i(e) {
		return d(e, (e) => JSON.stringify(e));
	}
	function a(e) {
		return d(e, (e) => [
			e.range.start.line,
			e.range.start.character,
			e.range.end.line,
			e.range.end.character,
			e.source,
			e.code,
			e.severity,
			e.message
		].join(":"));
	}
	function o(e) {
		return d(e, (e) => [
			e.uri,
			e.range.start.line,
			e.range.start.character,
			e.range.end.line,
			e.range.end.character
		].join(":"));
	}
	function s(e) {
		return d(e, (e) => [
			e.targetUri,
			e.targetSelectionRange.start.line,
			e.targetSelectionRange.start.character,
			e.targetSelectionRange.end.line,
			e.targetSelectionRange.end.character
		].join(":"));
	}
	function c(e) {
		return d(e, (e) => [
			e.from.uri,
			e.from.range.start.line,
			e.from.range.start.character,
			e.from.range.end.line,
			e.from.range.end.character
		].join(":"));
	}
	function l(e) {
		return d(e, (e) => [
			e.to.uri,
			e.to.range.start.line,
			e.to.range.start.character,
			e.to.range.end.line,
			e.to.range.end.character
		].join(":"));
	}
	function u(e) {
		return d(e, (e) => [
			e.start.line,
			e.start.character,
			e.end.line,
			e.end.character
		].join(":"));
	}
	function d(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let r of e.reverse()) n.set(t(r), r);
		return [...n.values()];
	}
})), S = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.documentFeatureWorker = t, e.languageFeatureWorker = n, e.safeCall = r, e.forEachEmbeddedDocument = i, e.getSourceRange = a, e.getGeneratedRange = o, e.getSourceRanges = s, e.getGeneratedRanges = c, e.getSourcePositions = l, e.getGeneratedPositions = u, e.getLinkedCodePositions = d;
	function t(e, t, r, i, a, o) {
		return n(e, t, () => void 0, function* (e) {
			r(e) && (yield);
		}, i, a, o);
	}
	async function n(e, t, n, a, o, s, c) {
		let l, u = e.decodeEmbeddedDocumentUri(t);
		if (l = u ? e.language.scripts.get(u[0]) : e.language.scripts.get(t), !l) return;
		let d = [];
		if (u) {
			let n = l.generated?.embeddedCodes.get(u[1]);
			n && await f([
				e.documents.get(l.id, l.languageId, l.snapshot),
				e.documents.get(t, n.languageId, n.snapshot),
				e.language.maps.get(n, l)
			], !1);
		} else if (l.generated) for (let t of i(e, l, l.generated.root)) (!d.length || c) && await f(t, !0);
		else {
			let i = e.documents.get(t, l.languageId, l.snapshot), a = n();
			for (let [t, n] of Object.entries(e.plugins)) {
				if (e.disabledServicePlugins.has(n[1])) continue;
				let l = await r(() => o(n, i, a, void 0), `Language service plugin "${n[0].name}" (${t}) failed to provide document feature for ${i.uri}.`);
				if (!l) continue;
				let u = s(l, void 0);
				if (u && (d.push(u), !c)) break;
			}
		}
		if (c && d.length > 0) return c(d);
		if (d.length > 0) return d[0];
		async function f(t, n) {
			for (let i of a(t)) if (!d.length || c) for (let [a, l] of Object.entries(e.plugins)) {
				if (e.disabledServicePlugins.has(l[1]) || d.length && !c) continue;
				let u = await r(() => o(l, t[1], i, t), `Language service plugin "${l[0].name}" (${a}) failed to provide document feature for ${t[1].uri}.`);
				if (u) {
					if (n) {
						let e = s(u, t);
						e && d.push(e);
					} else d.push(u);
				}
			}
		}
	}
	async function r(e, t) {
		try {
			return await e();
		} catch (e) {
			console.warn(t, e);
		}
	}
	function* i(e, t, n) {
		if (n.embeddedCodes) for (let r of n.embeddedCodes) yield* i(e, t, r);
		let r = e.encodeEmbeddedDocumentUri(t.id, n.id);
		e.disabledEmbeddedDocumentUris.get(r) || (yield [
			e.documents.get(t.id, t.languageId, t.snapshot),
			e.documents.get(r, n.languageId, n.snapshot),
			e.language.maps.get(n, t)
		]);
	}
	function a(e, t, n) {
		for (let r of s(e, t, n)) return r;
	}
	function o(e, t, n) {
		for (let r of c(e, t, n)) return r;
	}
	function* s([e, t, n], r, i) {
		for (let [a, o] of n.toSourceRange(t.offsetAt(r.start), t.offsetAt(r.end), !0, i)) yield {
			start: e.positionAt(a),
			end: e.positionAt(o)
		};
	}
	function* c([e, t, n], r, i) {
		for (let [a, o] of n.toGeneratedRange(e.offsetAt(r.start), e.offsetAt(r.end), !0, i)) yield {
			start: t.positionAt(a),
			end: t.positionAt(o)
		};
	}
	function* l([e, t, n], r, i = () => !0) {
		for (let a of n.toSourceLocation(t.offsetAt(r), i)) yield e.positionAt(a[0]);
	}
	function* u([e, t, n], r, i = () => !0) {
		for (let a of n.toGeneratedLocation(e.offsetAt(r), i)) yield t.positionAt(a[0]);
	}
	function* d(e, t, n) {
		for (let r of t.getLinkedOffsets(e.offsetAt(n))) yield e.positionAt(r);
	}
})), C = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.transformDocumentLinkTarget = i, e.transformMarkdown = a, e.transformCompletionItem = o, e.transformCompletionList = s, e.transformDocumentSymbol = c, e.transformFoldingRanges = l, e.transformHover = u, e.transformLocation = d, e.transformLocations = f, e.transformSelectionRange = p, e.transformSelectionRanges = m, e.transformTextEdit = h, e.transformWorkspaceSymbol = _, e.transformWorkspaceEdit = b, e.pushEditToDocumentChanges = x;
	var t = v(), n = y(), r = S();
	function i(e, i) {
		let a = n.URI.parse(e), o = i.decodeEmbeddedDocumentUri(a);
		if (!o) return a;
		let s = a.fragment.match(/^L(\d+)(,(\d+))?(-L(\d+)(,(\d+))?)?$/), c = i.language.scripts.get(o[0]), l = c?.generated?.embeddedCodes.get(o[1]);
		if (a = o[0], s && c && l) {
			let e = i.documents.get(i.encodeEmbeddedDocumentUri(c.id, l.id), l.languageId, l.snapshot);
			for (let [n, o] of i.language.maps.forEach(l)) {
				if (!o.mappings.some((e) => (0, t.isDocumentLinkEnabled)(e.data))) continue;
				let c = [
					i.documents.get(n.id, n.languageId, n.snapshot),
					e,
					o
				], l = Number(s[1]) - 1, u = Number(s[3] ?? 1) - 1;
				if (s[5] !== void 0) {
					let e = Number(s[5]) - 1, t = Number(s[7] ?? 1) - 1, n = (0, r.getSourceRange)(c, {
						start: {
							line: l,
							character: u
						},
						end: {
							line: e,
							character: t
						}
					});
					if (n) {
						a = a.with({ fragment: "L" + (n.start.line + 1) + "," + (n.start.character + 1) + "-L" + (n.end.line + 1) + "," + (n.end.character + 1) });
						break;
					}
				} else {
					let e = !1;
					for (let t of (0, r.getSourcePositions)(c, {
						line: l,
						character: u
					})) {
						e = !0, a = a.with({ fragment: "L" + (t.line + 1) + "," + (t.character + 1) });
						break;
					}
					if (e) break;
				}
			}
		}
		return a;
	}
	function a(e, t) {
		return e.replace(/(?!\()volar-embedded-content:\/\/\w+\/[^)]+/g, (e) => {
			let n = e.split("|");
			return n[0] = i(n[0], t).toString(), n.join("|");
		});
	}
	function o(e, t, n, r) {
		return {
			...e,
			additionalTextEdits: e.additionalTextEdits?.map((e) => h(e, t, n)).filter((e) => !!e),
			textEdit: e.textEdit ? h(e.textEdit, t, n) : void 0,
			documentation: e.documentation ? typeof e.documentation == "string" ? a(e.documentation, r) : e.documentation.kind === "markdown" ? {
				kind: "markdown",
				value: a(e.documentation.value, r)
			} : e.documentation : void 0
		};
	}
	function s(e, t, n, r) {
		return {
			isIncomplete: e.isIncomplete,
			itemDefaults: e.itemDefaults ? {
				...e.itemDefaults,
				editRange: e.itemDefaults.editRange ? "replace" in e.itemDefaults.editRange ? {
					insert: t(e.itemDefaults.editRange.insert),
					replace: t(e.itemDefaults.editRange.replace)
				} : t(e.itemDefaults.editRange) : void 0
			} : void 0,
			items: e.items.map((e) => o(e, t, n, r))
		};
	}
	function c(e, t) {
		let n = t(e.range);
		if (!n) return;
		let r = t(e.selectionRange);
		if (r) return {
			...e,
			range: n,
			selectionRange: r,
			children: e.children?.map((e) => c(e, t)).filter((e) => !!e)
		};
	}
	function l(e, t) {
		let n = [];
		for (let r of e) {
			let e = t({
				start: {
					line: r.startLine,
					character: r.startCharacter ?? 0
				},
				end: {
					line: r.endLine,
					character: r.endCharacter ?? 0
				}
			});
			e && (r.startLine = e.start.line, r.endLine = e.end.line, r.startCharacter !== void 0 && (r.startCharacter = e.start.character), r.endCharacter !== void 0 && (r.endCharacter = e.end.character), n.push(r));
		}
		return n;
	}
	function u(e, t) {
		if (!e?.range) return e;
		let n = t(e.range);
		if (n) return {
			...e,
			range: n
		};
	}
	function d(e, t) {
		let n = t(e.range);
		if (n) return {
			...e,
			range: n
		};
	}
	function f(e, t) {
		return e.map((e) => d(e, t)).filter((e) => !!e);
	}
	function p(e, t) {
		let n = t(e.range);
		if (n) return {
			range: n,
			parent: e.parent ? p(e.parent, t) : void 0
		};
	}
	function m(e, t) {
		return e.map((e) => p(e, t)).filter((e) => !!e);
	}
	function h(e, t, n) {
		if ("range" in e) {
			let r = t(e.range);
			if (r) return {
				...e,
				range: r
			};
			let i = g(t, e.range, e.newText, n);
			if (i) return {
				...e,
				range: i.range,
				newText: i.newText
			};
		} else if ("replace" in e && "insert" in e) {
			let r = t(e.insert), i = r ? t(e.replace) : void 0;
			if (r && i) return {
				...e,
				insert: r,
				replace: i
			};
			let a = g(t, e.insert, e.newText, n), o = a ? g(t, e.replace, e.newText, n) : void 0;
			if (a && o && a.newText === o.newText) return {
				...e,
				insert: a.range,
				replace: o.range,
				newText: a.newText
			};
		}
	}
	function g(e, t, n, r) {
		if (t.start.line === t.end.line && t.end.character > t.start.character) {
			let i = t.start.character;
			for (; n.length && t.end.character > i;) {
				let a = {
					line: t.start.line,
					character: t.start.character + 1
				};
				if (r.getText({
					start: t.start,
					end: a
				}) === n[0]) {
					n = n.slice(1), i++;
					let r = e({
						start: a,
						end: t.end
					});
					if (r) return {
						newText: n,
						range: r
					};
				} else break;
			}
		}
	}
	function _(e, t) {
		if (!("range" in e.location)) return e;
		let n = t(e.location);
		if (n) return {
			...e,
			location: n
		};
	}
	function b(e, i, a, o = {}) {
		let s = {}, c = !1;
		for (let t in e.changeAnnotations) {
			s.changeAnnotations ??= {};
			let r = e.changeAnnotations[t], a = i.decodeEmbeddedDocumentUri(n.URI.parse(t)), o = a && i.language.scripts.get(a[0]), c = a && o?.generated?.embeddedCodes.get(a[1]);
			if (o && c) for (let [e] of i.language.maps.forEach(c)) {
				let t = e.id.toString();
				s.changeAnnotations[t] = r;
				break;
			}
			else s.changeAnnotations[t] = r;
		}
		for (let o in e.changes) {
			s.changes ??= {};
			let l = i.decodeEmbeddedDocumentUri(n.URI.parse(o)), u = l && i.language.scripts.get(l[0]), d = l && u?.generated?.embeddedCodes.get(l[1]);
			if (u && d) {
				let n = i.documents.get(i.encodeEmbeddedDocumentUri(u.id, d.id), d.languageId, d.snapshot);
				for (let [l, u] of i.language.maps.forEach(d)) {
					let d = i.documents.get(l.id, l.languageId, l.snapshot), f = [
						d,
						n,
						u
					], p = e.changes[o];
					for (let e of p) if (a === "rename" || a === "fileName" || a === "codeAction") {
						let n, i = (0, r.getSourceRange)(f, e.range, (e) => (n = e, (0, t.isRenameEnabled)(e)));
						i && (s.changes[d.uri] ??= [], s.changes[d.uri].push({
							newText: (0, t.resolveRenameEditText)(e.newText, n),
							range: i
						}), c = !0);
					} else {
						let t = (0, r.getSourceRange)(f, e.range);
						t && (s.changes[d.uri] ??= [], s.changes[d.uri].push({
							newText: e.newText,
							range: t
						}), c = !0);
					}
				}
			} else s.changes[o] = e.changes[o], c = !0;
		}
		if (e.documentChanges) for (let l of e.documentChanges) {
			s.documentChanges ??= [];
			let e;
			if ("textDocument" in l) {
				let s = i.decodeEmbeddedDocumentUri(n.URI.parse(l.textDocument.uri)), c = s && i.language.scripts.get(s[0]), u = s && c?.generated?.embeddedCodes.get(s[1]);
				if (c && u) {
					let n = i.documents.get(i.encodeEmbeddedDocumentUri(c.id, u.id), u.languageId, u.snapshot);
					for (let [s, c] of i.language.maps.forEach(u)) {
						let u = i.documents.get(s.id, s.languageId, s.snapshot), d = [
							u,
							n,
							c
						];
						e = {
							textDocument: {
								uri: u.uri,
								version: o[u.uri] ?? null
							},
							edits: []
						};
						for (let n of l.edits) if (a === "rename" || a === "fileName" || a === "codeAction") {
							let i, a = (0, r.getSourceRange)(d, n.range, (e) => (i = e, (0, t.isRenameEnabled)(e)));
							a && e.edits.push({
								annotationId: "annotationId" in n ? n.annotationId : void 0,
								newText: (0, t.resolveRenameEditText)(n.newText, i),
								range: a
							});
						} else {
							let t = (0, r.getSourceRange)(d, n.range);
							t && e.edits.push({
								annotationId: "annotationId" in n ? n.annotationId : void 0,
								newText: n.newText,
								range: t
							});
						}
						e.edits.length || (e = void 0);
					}
				} else e = l;
			} else if (l.kind === "create") e = l;
			else if (l.kind === "rename") {
				let t = i.decodeEmbeddedDocumentUri(n.URI.parse(l.oldUri)), r = t && i.language.scripts.get(t[0]), a = t && r?.generated?.embeddedCodes.get(t[1]);
				if (a) for (let [t] of i.language.maps.forEach(a)) e = {
					kind: "rename",
					oldUri: t.id.toString(),
					newUri: l.newUri,
					options: l.options,
					annotationId: l.annotationId
				};
				else e = l;
			} else if (l.kind === "delete") {
				let t = i.decodeEmbeddedDocumentUri(n.URI.parse(l.uri)), r = t && i.language.scripts.get(t[0]), a = t && r?.generated?.embeddedCodes.get(t[1]);
				if (a) for (let [t] of i.language.maps.forEach(a)) e = {
					kind: "delete",
					uri: t.id.toString(),
					options: l.options,
					annotationId: l.annotationId
				};
				else e = l;
			}
			e && (x(s.documentChanges, e), c = !0);
		}
		if (c) return s;
	}
	function x(e, t) {
		let n = e.find((e) => "textDocument" in e && "textDocument" in t && e.textDocument.uri === t.textDocument.uri);
		n ? n.edits.push(...t.edits) : e.push(t);
	}
})), w = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = s, e.mergeWorkspaceEdits = c;
	var t = v(), n = y(), r = b(), i = x(), a = S(), o = C();
	function s(e) {
		return (s, l, u, d = r.NoneCancellationToken) => (0, a.languageFeatureWorker)(e, s, () => ({
			position: l,
			newName: u
		}), function* (e) {
			let n;
			for (let r of (0, a.getGeneratedPositions)(e, l, (e) => (n = e, (0, t.isRenameEnabled)(e)))) yield {
				position: r,
				newName: (0, t.resolveRenameNewName)(u, n)
			};
		}, async (t, r, o) => {
			if (d.isCancellationRequested) return;
			let s = i.createLocationSet(), c;
			return await l(r, o.position, o.newName), c;
			async function l(r, i, o) {
				if (!t[1].provideRenameEdits || s.has({
					uri: r.uri,
					range: {
						start: i,
						end: i
					}
				})) return;
				s.add({
					uri: r.uri,
					range: {
						start: i,
						end: i
					}
				});
				let u = await t[1].provideRenameEdits(r, i, o, d);
				if (u) {
					if (c ||= {}, u.changes) for (let t in u.changes) {
						let r = u.changes[t];
						for (let i of r) {
							let r = !1;
							s.add({
								uri: t,
								range: {
									start: i.range.start,
									end: i.range.start
								}
							});
							let u = e.decodeEmbeddedDocumentUri(n.URI.parse(t)), d = u && e.language.scripts.get(u[0]), f = u && d?.generated?.embeddedCodes.get(u[1]), p = f && d ? e.language.linkedCodeMaps.get(f) : void 0;
							if (d && f && p) {
								let t = e.documents.get(e.encodeEmbeddedDocumentUri(d.id, f.id), f.languageId, f.snapshot);
								for (let e of (0, a.getLinkedCodePositions)(t, p, i.range.start)) s.has({
									uri: t.uri,
									range: {
										start: e,
										end: e
									}
								}) || (r = !0, await l(t, e, o));
							}
							r || (c.changes || (c.changes = {}), c.changes[t] || (c.changes[t] = []), c.changes[t].push(i));
						}
					}
					if (u.changeAnnotations) for (let e in u.changeAnnotations) c.changeAnnotations || (c.changeAnnotations = {}), c.changeAnnotations[e] = u.changeAnnotations[e];
					u.documentChanges && (c.documentChanges || (c.documentChanges = []), c.documentChanges = c.documentChanges.concat(u.documentChanges));
				}
			}
		}, (t) => (0, o.transformWorkspaceEdit)(t, e, "rename"), (e) => {
			let t = e[0];
			if (c(t, ...e.slice(1)), t.changes) for (let e in t.changes) t.changes[e] = i.withTextEdits(t.changes[e]);
			return e[0];
		});
	}
	function c(e, ...t) {
		for (let n of t) {
			for (let t in n.changeAnnotations) e.changeAnnotations ||= {}, e.changeAnnotations[t] = n.changeAnnotations[t];
			for (let t in n.changes) {
				e.changes ||= {}, e.changes[t] || (e.changes[t] = []);
				let r = n.changes[t];
				e.changes[t] = e.changes[t].concat(r);
			}
			if (n.documentChanges) {
				e.documentChanges ||= [];
				for (let t of n.documentChanges) (0, o.pushEditToDocumentChanges)(e.documentChanges, t);
			}
		}
	}
})), T = /* @__PURE__ */ r({ TextDocument: () => M });
function E(e, t) {
	if (e.length <= 1) return e;
	let n = e.length / 2 | 0, r = e.slice(0, n), i = e.slice(n);
	E(r, t), E(i, t);
	let a = 0, o = 0, s = 0;
	for (; a < r.length && o < i.length;) t(r[a], i[o]) <= 0 ? e[s++] = r[a++] : e[s++] = i[o++];
	for (; a < r.length;) e[s++] = r[a++];
	for (; o < i.length;) e[s++] = i[o++];
	return e;
}
function D(e, t, n = 0) {
	let r = t ? [n] : [];
	for (let t = 0; t < e.length; t++) {
		let i = e.charCodeAt(t);
		O(i) && (i === 13 && t + 1 < e.length && e.charCodeAt(t + 1) === 10 && t++, r.push(n + t + 1));
	}
	return r;
}
function O(e) {
	return e === 13 || e === 10;
}
function k(e) {
	let t = e.start, n = e.end;
	return t.line > n.line || t.line === n.line && t.character > n.character ? {
		start: n,
		end: t
	} : e;
}
function A(e) {
	let t = k(e.range);
	return t === e.range ? e : {
		newText: e.newText,
		range: t
	};
}
var j, M, N = t((() => {
	j = class e {
		constructor(e, t, n, r) {
			this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
		}
		get uri() {
			return this._uri;
		}
		get languageId() {
			return this._languageId;
		}
		get version() {
			return this._version;
		}
		getText(e) {
			if (e) {
				let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
				return this._content.substring(t, n);
			}
			return this._content;
		}
		update(t, n) {
			for (let n of t) if (e.isIncremental(n)) {
				let e = k(n.range), t = this.offsetAt(e.start), r = this.offsetAt(e.end);
				this._content = this._content.substring(0, t) + n.text + this._content.substring(r, this._content.length);
				let i = Math.max(e.start.line, 0), a = Math.max(e.end.line, 0), o = this._lineOffsets, s = D(n.text, !1, t);
				if (a - i === s.length) for (let e = 0, t = s.length; e < t; e++) o[e + i + 1] = s[e];
				else s.length < 1e4 ? o.splice(i + 1, a - i, ...s) : this._lineOffsets = o = o.slice(0, i + 1).concat(s, o.slice(a + 1));
				let c = n.text.length - (r - t);
				if (c !== 0) for (let e = i + 1 + s.length, t = o.length; e < t; e++) o[e] = o[e] + c;
			} else if (e.isFull(n)) this._content = n.text, this._lineOffsets = void 0;
			else throw Error("Unknown change event received");
			this._version = n;
		}
		getLineOffsets() {
			return this._lineOffsets === void 0 && (this._lineOffsets = D(this._content, !0)), this._lineOffsets;
		}
		positionAt(e) {
			e = Math.max(Math.min(e, this._content.length), 0);
			let t = this.getLineOffsets(), n = 0, r = t.length;
			if (r === 0) return {
				line: 0,
				character: e
			};
			for (; n < r;) {
				let i = Math.floor((n + r) / 2);
				t[i] > e ? r = i : n = i + 1;
			}
			let i = n - 1;
			return e = this.ensureBeforeEOL(e, t[i]), {
				line: i,
				character: e - t[i]
			};
		}
		offsetAt(e) {
			let t = this.getLineOffsets();
			if (e.line >= t.length) return this._content.length;
			if (e.line < 0) return 0;
			let n = t[e.line];
			if (e.character <= 0) return n;
			let r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length, i = Math.min(n + e.character, r);
			return this.ensureBeforeEOL(i, n);
		}
		getLineRange(e) {
			let t = this.getLineOffsets();
			if (e >= t.length) {
				let e = t.length - 1;
				return {
					start: {
						line: e,
						character: 0
					},
					end: {
						line: e,
						character: this._content.length - t[e]
					}
				};
			}
			if (e < 0) return {
				start: {
					line: 0,
					character: 0
				},
				end: {
					line: 0,
					character: 0
				}
			};
			let n = t[e], r = e + 1 < t.length ? t[e + 1] : this._content.length, i = this.ensureBeforeEOL(r, n);
			return {
				start: {
					line: e,
					character: 0
				},
				end: {
					line: e,
					character: i - n
				}
			};
		}
		getEOLCharacters(e) {
			let t = this.getLineOffsets();
			if (e >= t.length || e < 0) return "";
			let n = e + 1 < t.length ? t[e + 1] : this._content.length, r = this.ensureBeforeEOL(n, t[e]);
			return this._content.substring(r, n);
		}
		ensureBeforeEOL(e, t) {
			for (; e > t && O(this._content.charCodeAt(e - 1));) e--;
			return e;
		}
		get lineCount() {
			return this.getLineOffsets().length;
		}
		static isIncremental(e) {
			let t = e;
			return t != null && typeof t.text == "string" && t.range !== void 0 && (t.rangeLength === void 0 || typeof t.rangeLength == "number");
		}
		static isFull(e) {
			let t = e;
			return t != null && typeof t.text == "string" && t.range === void 0 && t.rangeLength === void 0;
		}
	}, (function(e) {
		function t(e, t, n, r) {
			return new j(e, t, n, r);
		}
		e.create = t;
		function n(e, t, n) {
			if (e instanceof j) return e.update(t, n), e;
			throw Error("TextDocument.update: document must be created by TextDocument.create");
		}
		e.update = n;
		function r(e, t) {
			let n = e.getText(), r = E(t.map(A), (e, t) => {
				let n = e.range.start.line - t.range.start.line;
				return n === 0 ? e.range.start.character - t.range.start.character : n;
			}), i = 0, a = [];
			for (let t of r) {
				let r = e.offsetAt(t.range.start);
				if (r < i) throw Error("Overlapping edit");
				r > i && a.push(n.substring(i, r)), t.newText.length && a.push(t.newText), i = e.offsetAt(t.range.end);
			}
			return a.push(n.substr(i)), a.join("");
		}
		e.applyEdits = r;
	})(M ||= {});
})), ee = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a, o, s = n.NoneCancellationToken) => (0, r.languageFeatureWorker)(e, i, () => ({
			selection: a,
			change: o
		}), function* (e) {
			for (let n of (0, r.getGeneratedPositions)(e, a, t.isAutoInsertEnabled)) for (let t of e[2].toGeneratedLocation(o.rangeOffset)) {
				yield {
					selection: n,
					change: {
						text: o.text,
						rangeOffset: t[0],
						rangeLength: o.rangeLength
					}
				};
				break;
			}
		}, (e, t, n) => {
			if (!s.isCancellationRequested) return e[1].provideAutoInsertSnippet?.(t, n.selection, n.change, s);
		}, (e) => e);
	}
})), te = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = y(), r = b(), i = x(), a = S();
	function o(e) {
		return {
			getCallHierarchyItems(n, s, c = r.NoneCancellationToken) {
				return (0, a.languageFeatureWorker)(e, n, () => s, (e) => (0, a.getGeneratedPositions)(e, s, t.isCallHierarchyEnabled), async (t, r, i, a) => {
					if (c.isCancellationRequested) return;
					let o = await t[1].provideCallHierarchyItems?.(r, i, c);
					return o?.forEach((r) => {
						r.data = {
							uri: n.toString(),
							original: { data: r.data },
							pluginIndex: e.plugins.indexOf(t),
							embeddedDocumentUri: a?.[1].uri
						};
					}), o;
				}, (e, t) => t ? e.map((e) => o(e, [])?.[0]).filter((e) => !!e) : e, (e) => i.withLocations(e.flat()));
			},
			getTypeHierarchyItems(n, s, c = r.NoneCancellationToken) {
				return (0, a.languageFeatureWorker)(e, n, () => s, (e) => (0, a.getGeneratedPositions)(e, s, t.isTypeHierarchyEnabled), async (t, r, i, a) => {
					if (c.isCancellationRequested) return;
					let o = await t[1].provideTypeHierarchyItems?.(r, i, c);
					return o?.forEach((r) => {
						r.data = {
							uri: n.toString(),
							original: { data: r.data },
							pluginIndex: e.plugins.indexOf(t),
							embeddedDocumentUri: a?.[1].uri
						};
					}), o;
				}, (e, t) => t ? e.map((e) => o(e, [])?.[0]).filter((e) => !!e) : e, (e) => i.withLocations(e.flat()));
			},
			async getCallHierarchyIncomingCalls(t, r) {
				let a = t.data, s = [];
				if (a) {
					let i = e.plugins[a.pluginIndex];
					if (!i[1].provideCallHierarchyIncomingCalls) return s;
					if (Object.assign(t, a.original), a.embeddedDocumentUri) {
						if (e.decodeEmbeddedDocumentUri(n.URI.parse(a.embeddedDocumentUri))) {
							let e = await i[1].provideCallHierarchyIncomingCalls(t, r);
							for (let t of e) {
								let e = o(t.from, t.fromRanges);
								e && s.push({
									from: e[0],
									fromRanges: e[1]
								});
							}
						}
					} else {
						let e = await i[1].provideCallHierarchyIncomingCalls(t, r);
						for (let t of e) {
							let e = o(t.from, t.fromRanges);
							e && s.push({
								from: e[0],
								fromRanges: e[1]
							});
						}
					}
				}
				return i.withCallHierarchyIncomingCalls(s);
			},
			async getCallHierarchyOutgoingCalls(t, r) {
				let a = t.data, s = [];
				if (a) {
					let i = e.plugins[a.pluginIndex];
					if (!i[1].provideCallHierarchyOutgoingCalls) return s;
					if (Object.assign(t, a.original), a.embeddedDocumentUri) {
						if (e.decodeEmbeddedDocumentUri(n.URI.parse(a.embeddedDocumentUri))) {
							let e = await i[1].provideCallHierarchyOutgoingCalls(t, r);
							for (let t of e) {
								let e = o(t.to, t.fromRanges);
								e && s.push({
									to: e[0],
									fromRanges: e[1]
								});
							}
						}
					} else {
						let e = await i[1].provideCallHierarchyOutgoingCalls(t, r);
						for (let t of e) {
							let e = o(t.to, t.fromRanges);
							e && s.push({
								to: e[0],
								fromRanges: e[1]
							});
						}
					}
				}
				return i.withCallHierarchyOutgoingCalls(s);
			},
			async getTypeHierarchySupertypes(t, r) {
				let i = t.data;
				if (i) {
					let a = e.plugins[i.pluginIndex];
					if (!a[1].provideTypeHierarchySupertypes) return [];
					if (Object.assign(t, i.original), i.embeddedDocumentUri) {
						if (e.decodeEmbeddedDocumentUri(n.URI.parse(i.embeddedDocumentUri))) return (await a[1].provideTypeHierarchySupertypes(t, r)).map((e) => o(e, [])?.[0]).filter((e) => !!e);
					} else return (await a[1].provideTypeHierarchySupertypes(t, r)).map((e) => o(e, [])?.[0]).filter((e) => !!e);
				}
			},
			async getTypeHierarchySubtypes(t, r) {
				let i = t.data;
				if (i) {
					let a = e.plugins[i.pluginIndex];
					if (!a[1].provideTypeHierarchySubtypes) return [];
					if (Object.assign(t, i.original), i.embeddedDocumentUri) {
						if (e.decodeEmbeddedDocumentUri(n.URI.parse(i.embeddedDocumentUri))) return (await a[1].provideTypeHierarchySubtypes(t, r)).map((e) => o(e, [])?.[0]).filter((e) => !!e);
					} else return (await a[1].provideTypeHierarchySubtypes(t, r)).map((e) => o(e, [])?.[0]).filter((e) => !!e);
				}
			}
		};
		function o(t, r) {
			let i = e.decodeEmbeddedDocumentUri(n.URI.parse(t.uri)), o = i && e.language.scripts.get(i[0]), s = i && o?.generated?.embeddedCodes.get(i[1]);
			if (!o || !s) return [t, r];
			let c = e.documents.get(e.encodeEmbeddedDocumentUri(o.id, s.id), s.languageId, s.snapshot);
			for (let [n, i] of e.language.maps.forEach(s)) {
				let o = e.documents.get(n.id, n.languageId, n.snapshot), s = [
					o,
					c,
					i
				], l = (0, a.getSourceRange)(s, t.range);
				l ||= {
					start: o.positionAt(0),
					end: o.positionAt(o.getText().length)
				};
				let u = (0, a.getSourceRange)(s, t.selectionRange);
				if (!u) continue;
				let d = r.map((e) => (0, a.getSourceRange)(s, e)).filter((e) => !!e);
				return [{
					...t,
					name: t.name === c.uri.substring(c.uri.lastIndexOf("/") + 1) ? o.uri.substring(o.uri.lastIndexOf("/") + 1) : t.name,
					uri: o.uri,
					range: {
						start: l.start,
						end: l.end
					},
					selectionRange: {
						start: u.start,
						end: u.end
					}
				}, d];
			}
		}
	}
})), ne = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = b(), r = x(), i = S(), a = C();
	function o(e) {
		return async (o, s, c, l = n.NoneCancellationToken) => {
			if (!e.language.scripts.get(o)) return;
			let u = /* @__PURE__ */ new WeakSet();
			return await (0, i.languageFeatureWorker)(e, o, () => ({
				range: s,
				codeActionContext: c
			}), function* (e) {
				let n = {
					diagnostics: (0, a.transformLocations)(c.diagnostics, (t) => (0, i.getGeneratedRange)(e, t)),
					only: c.only
				}, r = (0, t.findOverlapCodeRange)(e[0].offsetAt(s.start), e[0].offsetAt(s.end), e[2], t.isCodeActionsEnabled);
				r && (yield {
					range: {
						start: e[1].positionAt(r.start),
						end: e[1].positionAt(r.end)
					},
					codeActionContext: n
				});
			}, async (t, n, { range: r, codeActionContext: i }) => {
				if (l.isCancellationRequested) return;
				let a = e.plugins.indexOf(t), s = i.diagnostics.filter((e) => {
					let t = e.data;
					return t && t.version !== n.version ? !1 : t?.pluginIndex === a;
				}).map((e) => {
					let t = e.data;
					return {
						...e,
						...t.original
					};
				}), c = await t[1].provideCodeActions?.(n, r, {
					...i,
					diagnostics: s
				}, l);
				if (c?.forEach((r) => {
					t[1].resolveCodeAction ? r.data = {
						uri: o.toString(),
						version: n.version,
						original: {
							data: r.data,
							edit: r.edit
						},
						pluginIndex: e.plugins.indexOf(t)
					} : delete r.data;
				}), c && t[1].transformCodeAction) for (let e = 0; e < c.length; e++) {
					let n = t[1].transformCodeAction(c[e]);
					n && (c[e] = n, u.add(n));
				}
				return c;
			}, (t) => t.map((t) => {
				if (u.has(t)) return t;
				if (t.edit) {
					let n = (0, a.transformWorkspaceEdit)(t.edit, e, "codeAction");
					if (!n) return;
					t.edit = n;
				}
				return t;
			}).filter((e) => !!e), (e) => r.withCodeAction(e.flat()));
		};
	}
})), re = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return async (i, a = n.NoneCancellationToken) => await (0, r.documentFeatureWorker)(e, i, (e) => e[2].mappings.some((e) => (0, t.isCodeLensEnabled)(e.data)), async (t, n) => {
			if (a.isCancellationRequested) return;
			let r = await t[1].provideCodeLenses?.(n, a), o = e.plugins.indexOf(t);
			r?.forEach((e) => {
				t[1].resolveCodeLens ? e.data = {
					kind: "normal",
					uri: i.toString(),
					original: { data: e.data },
					pluginIndex: o
				} : delete e.data;
			});
			let s = (await t[1].provideReferencesCodeLensRanges?.(n, a))?.map((e) => ({
				range: e,
				data: {
					kind: "references",
					sourceFileUri: i.toString(),
					workerFileUri: n.uri,
					workerFileRange: e,
					pluginIndex: o
				}
			}));
			return r = [...r ?? [], ...s ?? []], r;
		}, (e, n) => n ? e.map((e) => {
			let i = (0, r.getSourceRange)(n, e.range, t.isCodeLensEnabled);
			if (i) return {
				...e,
				range: i
			};
		}).filter((e) => !!e) : e, (e) => e.flat()) ?? [];
	}
})), ie = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a, o, s = n.NoneCancellationToken) => (0, r.languageFeatureWorker)(e, i, () => o, function* (e) {
			for (let n of (0, r.getGeneratedRanges)(e, o, t.isColorEnabled)) yield n;
		}, (e, t, n) => {
			if (!s.isCancellationRequested) return e[1].provideColorPresentations?.(t, a, n, s);
		}, (e, t) => t ? e.map((e) => {
			if (e.textEdit) {
				let n = (0, r.getSourceRange)(t, e.textEdit.range);
				if (!n) return;
				e.textEdit.range = n;
			}
			if (e.additionalTextEdits) for (let n of e.additionalTextEdits) {
				let e = (0, r.getSourceRange)(t, n.range);
				if (!e) return;
				n.range = e;
			}
			return e;
		}).filter((e) => !!e) : e);
	}
})), ae = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = y(), r = b(), i = S(), a = C();
	function o(e) {
		let o;
		return async (s, c, l = { triggerKind: 1 }, u = r.NoneCancellationToken) => {
			let d, f, p = e.decodeEmbeddedDocumentUri(s);
			if (p ? d = e.language.scripts.get(p[0])?.generated?.embeddedCodes.get(p[1]) : (f = e.language.scripts.get(s), d = f), !d) return {
				isIncomplete: !1,
				items: []
			};
			if (l?.triggerKind === 3 && o?.uri.toString() === s.toString()) for (let n of o.results) {
				if (!n.list?.isIncomplete) continue;
				let r = e.plugins.findIndex((e) => e[1] === n.plugin);
				if (n.embeddedDocumentUri) {
					let o = e.decodeEmbeddedDocumentUri(n.embeddedDocumentUri), d = o && e.language.scripts.get(o[0]), f = o && d?.generated?.embeddedCodes.get(o[1]);
					if (!d || !f) continue;
					let p = e.documents.get(e.encodeEmbeddedDocumentUri(d.id, f.id), f.languageId, f.snapshot);
					for (let [o, d] of e.language.maps.forEach(f)) {
						let f = [
							e.documents.get(o.id, o.languageId, o.snapshot),
							p,
							d
						];
						for (let o of (0, i.getGeneratedPositions)(f, c, (e) => (0, t.isCompletionEnabled)(e))) if (n.plugin.provideCompletionItems && (n.list = await n.plugin.provideCompletionItems(p, o, l, u), n.list)) {
							for (let e of n.list.items) n.plugin.resolveCompletionItem ? e.data = {
								uri: s.toString(),
								original: {
									additionalTextEdits: e.additionalTextEdits,
									textEdit: e.textEdit,
									data: e.data
								},
								pluginIndex: r,
								embeddedDocumentUri: p.uri
							} : delete e.data;
							n.list = (0, a.transformCompletionList)(n.list, (e) => (0, i.getSourceRange)(f, e), p, e);
						}
					}
				} else {
					if (!n.plugin.provideCompletionItems) continue;
					let t = e.documents.get(s, d.languageId, d.snapshot);
					if (n.list = await n.plugin.provideCompletionItems(t, c, l, u), !n.list) continue;
					for (let e of n.list.items) n.plugin.resolveCompletionItem ? e.data = {
						uri: s.toString(),
						original: {
							additionalTextEdits: e.additionalTextEdits,
							textEdit: e.textEdit,
							data: e.data
						},
						pluginIndex: r,
						embeddedDocumentUri: void 0
					} : delete e.data;
				}
			}
			else {
				o = {
					uri: s,
					results: []
				};
				let r = !0, p, h = [...e.plugins].filter((t) => !e.disabledServicePlugins.has(t[1])).sort((e, t) => m(e[1], t[1])), g = async (c, d, f, m) => {
					for (let g of h) {
						if (u.isCancellationRequested) break;
						if (!g[1].provideCompletionItems || g[1].isAdditionalCompletion && !r || l?.triggerCharacter && !g[0].capabilities.completionProvider?.triggerCharacters?.includes(l.triggerCharacter)) continue;
						let h = m && typeof m.completion == "object" && m.completion.isAdditional || g[1].isAdditionalCompletion;
						if (p && (!h || p !== c.uri) || g[1].isAdditionalCompletion && o?.results.some((e) => e.plugin === g[1])) continue;
						let _ = await g[1].provideCompletionItems(c, d, l, u);
						if (!_ || !_.items.length) continue;
						typeof m?.completion == "object" && m.completion.onlyImport && (_.items = _.items.filter((e) => !!e.labelDetails)), h || (p = c.uri);
						let v = e.plugins.indexOf(g);
						for (let e of _.items) g[1].resolveCompletionItem ? e.data = {
							uri: s.toString(),
							original: {
								additionalTextEdits: e.additionalTextEdits,
								textEdit: e.textEdit,
								data: e.data
							},
							pluginIndex: v,
							embeddedDocumentUri: f ? c.uri : void 0
						} : delete e.data;
						f && (_ = (0, a.transformCompletionList)(_, (e) => (0, i.getSourceRange)(f, e, t.isCompletionEnabled), c, e)), o?.results.push({
							embeddedDocumentUri: f ? n.URI.parse(c.uri) : void 0,
							plugin: g[1],
							list: _
						});
					}
					r = !1;
				};
				if (f?.generated) for (let n of (0, i.forEachEmbeddedDocument)(e, f, f.generated.root)) {
					let e;
					for (let r of (0, i.getGeneratedPositions)(n, c, (n) => (e = n, (0, t.isCompletionEnabled)(n)))) await g(n[1], r, n, e);
				}
				else await g(e.documents.get(s, d.languageId, d.snapshot), c);
			}
			return h(o.results.map((e) => e.list));
			function m(e, t) {
				return (t.isAdditionalCompletion ? -1 : 1) - (e.isAdditionalCompletion ? -1 : 1);
			}
			function h(e) {
				return {
					isIncomplete: e.some((e) => e?.isIncomplete),
					itemDefaults: e.find((e) => e?.itemDefaults)?.itemDefaults,
					items: e.map((e) => e?.items ?? []).flat()
				};
			}
		};
	}
})), oe = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = a;
	var t = y(), n = b(), r = x(), i = S();
	function a(e, a, s) {
		return (c, l, u = n.NoneCancellationToken) => (0, i.languageFeatureWorker)(e, c, () => l, (e) => (0, i.getGeneratedPositions)(e, l, s), async (n, o, s) => {
			if (u.isCancellationRequested) return;
			let c = r.createLocationSet(), l = [];
			return await d(o, s, void 0), l;
			async function d(r, o, s) {
				let f = n[1][a];
				if (!f || c.has({
					uri: r.uri,
					range: {
						start: o,
						end: o
					}
				})) return;
				c.add({
					uri: r.uri,
					range: {
						start: o,
						end: o
					}
				});
				let p = await f?.(r, o, u) ?? [];
				for (let n of p) {
					let r = !1;
					c.add({
						uri: n.targetUri,
						range: {
							start: n.targetRange.start,
							end: n.targetRange.start
						}
					});
					let a = e.decodeEmbeddedDocumentUri(t.URI.parse(n.targetUri)), o = a && e.language.scripts.get(a[0]), u = a && o?.generated?.embeddedCodes.get(a[1]), f = u && o ? e.language.linkedCodeMaps.get(u) : void 0;
					if (o && u && f) {
						let t = e.documents.get(e.encodeEmbeddedDocumentUri(o.id, u.id), u.languageId, u.snapshot);
						for (let e of (0, i.getLinkedCodePositions)(t, f, n.targetSelectionRange.start)) c.has({
							uri: t.uri,
							range: {
								start: e,
								end: e
							}
						}) || (r = !0, await d(t, e, s ?? n));
					}
					r || (s ? l.push({
						...n,
						originSelectionRange: s.originSelectionRange
					}) : l.push(n));
				}
			}
		}, (n, r) => n.map((n) => {
			if (n.originSelectionRange && r) {
				let e = o(r, n.originSelectionRange, l);
				if (!e) return;
				n.originSelectionRange = e;
			}
			let s = !1, u = e.decodeEmbeddedDocumentUri(t.URI.parse(n.targetUri)), d = u && e.language.scripts.get(u[0]), f = u && d?.generated?.embeddedCodes.get(u[1]);
			if (d && f) {
				let t = e.documents.get(e.encodeEmbeddedDocumentUri(d.id, f.id), f.languageId, f.snapshot);
				for (let [r, a] of e.language.maps.forEach(f)) {
					let o = e.documents.get(r.id, r.languageId, r.snapshot), c = [
						o,
						t,
						a
					], l = (0, i.getSourceRange)(c, n.targetSelectionRange);
					if (!l) continue;
					s = !0;
					let u = (0, i.getSourceRange)(c, n.targetRange);
					n.targetUri = o.uri, n.targetRange = u ?? l, n.targetSelectionRange = l;
				}
				if (a === "provideDefinition" && !s) {
					for (let [t] of e.language.maps.forEach(f)) if (t.id.toString() !== c.toString()) return {
						...n,
						targetUri: t.id.toString(),
						targetRange: {
							start: {
								line: 0,
								character: 0
							},
							end: {
								line: 0,
								character: 0
							}
						},
						targetSelectionRange: {
							start: {
								line: 0,
								character: 0
							},
							end: {
								line: 0,
								character: 0
							}
						}
					};
					return;
				}
			}
			return n;
		}).filter((e) => !!e), (e) => r.withLocationLinks(e.flat()));
	}
	function o(e, t, n) {
		let r;
		for (let a of (0, i.getSourceRanges)(e, t)) if (r ||= a, (a.start.line < n.line || a.start.line === n.line && a.start.character <= n.character) && (a.end.line > n.line || a.end.line === n.line && a.end.character >= n.character)) return a;
		return r;
	}
})), se = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isInsideRange = t, e.isEqualRange = n, e.stringToSnapshot = r, e.sleep = i;
	function t(e, t) {
		return !(t.start.line < e.start.line || t.end.line > e.end.line || t.start.line === e.start.line && t.start.character < e.start.character || t.end.line === e.end.line && t.end.character > e.end.character);
	}
	function n(e, t) {
		return e.start.line === t.start.line && e.start.character === t.start.character && e.end.line === t.end.line && e.end.character === t.end.character;
	}
	function r(e) {
		return {
			getText: (t, n) => e.substring(t, n),
			getLength: () => e.length,
			getChangeRange: () => void 0
		};
	}
	function i(e) {
		return new Promise((t) => setTimeout(t, e));
	}
})), ce = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createUriMap = t;
	function t(e = !1) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
		return {
			get size() {
				return t.size;
			},
			get [Symbol.toStringTag]() {
				return "UriMap";
			},
			[Symbol.iterator]() {
				return this.entries();
			},
			clear() {
				return n.clear(), r.clear(), t.clear();
			},
			values() {
				return t.values();
			},
			*keys() {
				for (let e of t.keys()) yield r.get(e);
			},
			*entries() {
				for (let [e, n] of t.entries()) yield [r.get(e), n];
			},
			forEach(e, t) {
				for (let [n, r] of this.entries()) e.call(t, r, n, this);
			},
			delete(e) {
				return t.delete(i(e));
			},
			get(e) {
				return t.get(i(e));
			},
			has(e) {
				return t.has(i(e));
			},
			set(e, n) {
				return t.set(i(e), n), this;
			}
		};
		function i(t) {
			let i = t.toString();
			if (!n.has(i)) {
				let a = t.toString();
				e || (a = a.toLowerCase()), n.set(i, a), r.set(a, t);
			}
			return n.get(i);
		}
	}
})), P = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.errorMarkups = void 0, e.register = c, e.transformDiagnostic = l, e.updateRange = u;
	var t = v(), n = y(), r = b(), i = se(), a = x(), o = S(), s = ce();
	e.errorMarkups = (0, s.createUriMap)();
	function c(e) {
		let n = (0, s.createUriMap)(), c = {
			semantic: /* @__PURE__ */ new Map(),
			syntactic: /* @__PURE__ */ new Map()
		};
		return e.env.onDidChangeConfiguration?.(() => {
			n.clear(), c.semantic.clear(), c.syntactic.clear();
		}), async (s, d, f = r.NoneCancellationToken) => {
			let p, m = e.decodeEmbeddedDocumentUri(s);
			if (p = m ? e.language.scripts.get(m[0])?.generated?.embeddedCodes.get(m[1]) : e.language.scripts.get(s), !p) return [];
			let h = e.documents.get(s, p.languageId, p.snapshot), g = n.get(s) ?? n.set(s, {
				semantic: { errors: [] },
				syntactic: { errors: [] }
			}).get(s), _ = !1, v = !1, y = 0;
			for (let e of Object.values(g)) {
				let t = e.snapshot, n = e.document, r = t ? p.snapshot.getChangeRange(t) : void 0;
				if (e.snapshot = p.snapshot, e.document = h, !_ && n && r) {
					let t = {
						range: {
							start: n.positionAt(r.span.start),
							end: n.positionAt(r.span.start + r.span.length)
						},
						newEnd: h.positionAt(r.span.start + r.newLength)
					};
					for (let n of e.errors) if (!u(n.range, t)) {
						_ = !0;
						break;
					}
				}
			}
			return await S("syntactic", c.syntactic, g.syntactic), b(), await S("semantic", c.semantic, g.semantic), x();
			function b() {
				v && !_ && (d?.(x()), v = !1);
			}
			function x() {
				return Object.values(g).flatMap(({ errors: e }) => e);
			}
			async function S(n, r, c) {
				let u = await (0, o.documentFeatureWorker)(e, s, (e) => e[2].mappings.some((e) => (0, t.isDiagnosticsEnabled)(e.data)), async (t, a) => {
					let o = t[0].capabilities.diagnosticProvider?.interFileDependencies;
					if (n === "semantic" !== o || (Date.now() - y >= 10 && (await (0, i.sleep)(10), y = Date.now()), f.isCancellationRequested)) return;
					let c = e.plugins.indexOf(t), l = r.get(c) ?? r.set(c, /* @__PURE__ */ new Map()).get(c), u = l.get(a.uri);
					if (!o && u && u.documentVersion === a.version) return u.errors;
					let d = await t[1].provideDiagnostics?.(a, f) || [];
					return d.forEach((e) => {
						e.data = {
							uri: s.toString(),
							version: a.version,
							pluginIndex: c,
							isFormat: !1,
							original: { data: e.data },
							documentUri: a.uri
						};
					}), v = !0, l.set(a.uri, {
						documentVersion: a.version,
						errors: d
					}), d;
				}, (t, n) => t.map((t) => l(e, t, n)).filter((e) => !!e), (e) => a.withDiagnostics(e.flat()));
				u && (c.errors = u, c.snapshot = p?.snapshot);
			}
		};
	}
	function l(e, r, i) {
		let a = { ...r };
		if (i) {
			let e = (0, o.getSourceRange)(i, r.range, (e) => (0, t.shouldReportDiagnostics)(e, r.source, r.code));
			if (!e) return;
			a.range = e;
		}
		if (a.relatedInformation) {
			let r = [];
			for (let i of a.relatedInformation) {
				let a = e.decodeEmbeddedDocumentUri(n.URI.parse(i.location.uri)), s = a && e.language.scripts.get(a[0]), c = a && s?.generated?.embeddedCodes.get(a[1]);
				if (s && c) {
					let n = e.documents.get(e.encodeEmbeddedDocumentUri(s.id, c.id), c.languageId, c.snapshot);
					for (let [a, s] of e.language.maps.forEach(c)) {
						let c = e.documents.get(a.id, a.languageId, a.snapshot), l = [
							c,
							n,
							s
						], u = (0, o.getSourceRange)(l, i.location.range, (e) => (0, t.shouldReportDiagnostics)(e, void 0, void 0));
						u && r.push({
							location: {
								uri: c.uri,
								range: u
							},
							message: i.message
						});
					}
				} else r.push(i);
			}
			a.relatedInformation = r;
		}
		return a;
	}
	function u(e, t) {
		if (d(e.start, t, !1) && d(e.end, t, !0)) return e.end.line === e.start.line && e.end.character <= e.start.character && e.end.character++, e;
	}
	function d(e, t, n) {
		if (t.range.end.line > e.line) {
			if (t.newEnd.line > e.line) return !0;
			if (t.newEnd.line === e.line) return e.character = Math.min(e.character, t.newEnd.character), !0;
			if (t.newEnd.line < e.line) return e.line = t.newEnd.line, e.character = t.newEnd.character, !0;
		} else if (t.range.end.line === e.line) {
			let r = t.newEnd.character - t.range.end.character;
			if (e.character >= t.range.end.character) {
				if (t.newEnd.line !== t.range.end.line) e.line = t.newEnd.line, e.character = t.newEnd.character + e.character - t.range.end.character;
				else if (n ? t.range.end.character < e.character : t.range.end.character <= e.character) e.character += r;
				else {
					let n = t.range.end.character - e.character;
					-r > n && (e.character += r + n);
				}
				return !0;
			}
			if (t.newEnd.line === t.range.end.line) {
				let n = t.range.end.character - e.character;
				-r > n && (e.character += r + n);
			} else t.newEnd.line < t.range.end.line && (e.line = t.newEnd.line, e.character = t.newEnd.character);
			return !0;
		} else if (t.range.end.line < e.line) return e.line += t.newEnd.line - t.range.end.line, !0;
		return !1;
	}
})), le = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a = n.NoneCancellationToken) => (0, r.documentFeatureWorker)(e, i, (e) => e[2].mappings.some((e) => (0, t.isColorEnabled)(e.data)), (e, t) => {
			if (!a.isCancellationRequested) return e[1].provideDocumentColors?.(t, a);
		}, (e, n) => n ? e.map((e) => {
			let i = (0, r.getSourceRange)(n, e.range, t.isColorEnabled);
			if (i) return {
				range: i,
				color: e.color
			};
		}).filter((e) => !!e) : e, (e) => e.flat());
	}
})), ue = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = b(), n = S(), r = C();
	function i(e) {
		return (i, a, o, s = t.NoneCancellationToken) => (0, n.languageFeatureWorker)(e, i, () => a, function* (e) {
			for (let t of (0, n.getGeneratedPositions)(e, a)) yield t;
		}, (e, t, n) => {
			if (!s.isCancellationRequested) return e[1].provideDocumentDropEdits?.(t, n, o, s);
		}, (t) => (t.additionalEdit &&= (0, r.transformWorkspaceEdit)(t.additionalEdit, e, void 0), t));
	}
})), de = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.register = c;
	var n = v(), r = (N(), e(T)), i = y(), a = b(), o = se(), s = S();
	function c(e) {
		return async (t, c, d, f, p = a.NoneCancellationToken) => {
			let m = e.language.scripts.get(t);
			if (!m) return;
			let h = e.documents.get(t, m.languageId, m.snapshot);
			if (d ??= {
				start: h.positionAt(0),
				end: h.positionAt(h.getText().length)
			}, !m.generated) return f ? (await y(h, h, m, void 0, 0, f.position, f.ch))?.edits : (await y(h, h, m, void 0, 0, d, void 0))?.edits;
			let g = /* @__PURE__ */ new Map(), _ = h.offsetAt(d.start), v = h.offsetAt(d.end);
			for (let t of (0, n.forEachEmbeddedCode)(m.generated.root)) {
				let r = e.language.maps.get(t, m);
				if (r) {
					let e = (0, n.findOverlapCodeRange)(_, v, r, n.isFormattingEnabled);
					if (e) {
						e.start === r.mappings[0].generatedOffsets[0] && (e.start = 0);
						let n = r.mappings[r.mappings.length - 1];
						e.end === n.generatedOffsets[n.generatedOffsets.length - 1] + (n.generatedLengths ?? n.lengths)[n.lengths.length - 1] && (e.end = t.snapshot.getLength()), g.set(t.id, e);
					}
				}
			}
			try {
				let a = h, c = m.snapshot, u = e.language.scripts.set(i.URI.parse(m.id.toString() + ".tmp"), m.snapshot, m.languageId, [m.generated.languagePlugin])?.generated?.root;
				if (!u) return;
				let d = [];
				for (let a = 0; (d = l(e, m.id, u, a)).length > 0; a++) {
					let l = [];
					for (let r of d) {
						if (!r.mappings.some((e) => (0, n.isFormattingEnabled)(e.data))) continue;
						let i = g.get(r.id);
						if (!i || [...(0, n.forEachEmbeddedCode)(r)].some((e) => {
							if (e === r) return !1;
							let t = g.get(e.id);
							return t && t.end - t.start >= i.end - i.start;
						})) continue;
						let o = [
							e.documents.get(t, m.languageId, c),
							e.documents.get(e.encodeEmbeddedDocumentUri(t, r.id), r.languageId, r.snapshot),
							e.language.mapperFactory(r.mappings)
						], u;
						if (f) for (let e of (0, s.getGeneratedPositions)(o, f.position)) {
							u = await y(o[0], o[1], m, r, a, e, f.ch);
							break;
						}
						else i && (u = await y(o[0], o[1], m, r, a, {
							start: o[1].positionAt(i.start),
							end: o[1].positionAt(i.end)
						}));
						if (u) for (let e of u.edits) {
							let t = (0, s.getSourceRange)(o, e.range);
							t && l.push({
								newText: e.newText,
								range: t
							});
						}
					}
					if (l.length > 0) {
						let t = r.TextDocument.applyEdits(h, l);
						if (h = r.TextDocument.create(h.uri, h.languageId, h.version + 1, t), c = (0, o.stringToSnapshot)(t), u = e.language.scripts.set(i.URI.parse(m.id.toString() + ".tmp"), c, m.languageId, [m.generated.languagePlugin])?.generated?.root, !u) break;
					}
				}
				return h.getText() === a.getText() ? void 0 : [{
					range: {
						start: a.positionAt(0),
						end: a.positionAt(a.getText().length)
					},
					newText: h.getText()
				}];
			} finally {
				e.language.scripts.delete(i.URI.parse(m.id.toString() + ".tmp"));
			}
			async function y(t, n, r, a, o, s, l) {
				if (e.disabledEmbeddedDocumentUris.get(i.URI.parse(n.uri))) return;
				let d;
				if (s ??= {
					start: n.positionAt(0),
					end: n.positionAt(n.getText().length)
				}, a) {
					if (d = {
						level: o,
						initialIndentLevel: 0
					}, a.mappings.length) {
						let e = a.mappings[0].sourceOffsets[0], n = t.positionAt(e);
						d.initialIndentLevel = u(t.getText(), t.offsetAt({
							line: n.line,
							character: 0
						}), c);
					}
					for (let t of e.plugins) e.disabledServicePlugins.has(t[1]) || (d = await t[1].resolveEmbeddedCodeFormattingOptions?.(r, a, d, p) ?? d);
				}
				for (let t of e.plugins) {
					if (e.disabledServicePlugins.has(t[1])) continue;
					if (p.isCancellationRequested) break;
					let r;
					try {
						l !== void 0 && s && "line" in s && "character" in s ? t[0].capabilities.documentOnTypeFormattingProvider?.triggerCharacters?.includes(l) && (r = await t[1].provideOnTypeFormattingEdits?.(n, s, l, c, d, p)) : l === void 0 && s && "start" in s && "end" in s && (r = await t[1].provideDocumentFormattingEdits?.(n, s, c, d, p));
					} catch (e) {
						console.warn(e);
					}
					if (r) return {
						plugin: t,
						edits: r
					};
				}
			}
		};
	}
	function l(e, t, n, r) {
		let i = [[n]];
		for (;;) {
			if (i.length > r) return i[r];
			let n = [];
			for (let r of i[i.length - 1]) if (r.embeddedCodes) for (let i of r.embeddedCodes) e.disabledEmbeddedDocumentUris.get(e.encodeEmbeddedDocumentUri(t, i.id)) || n.push(i);
			i.push(n);
		}
	}
	function u(e, t, n) {
		let r = 0, i = n.tabSize || 4;
		for (; t < e.length;) {
			let n = e.charAt(t);
			if (n === " ") r++;
			else if (n === "	") r += i;
			else break;
			t++;
		}
		return Math.floor(r / i);
	}
})), fe = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = y(), r = b(), i = x(), a = S();
	function o(e) {
		return (o, s, c = r.NoneCancellationToken) => (0, a.languageFeatureWorker)(e, o, () => s, (e) => (0, a.getGeneratedPositions)(e, s, t.isHighlightEnabled), async (t, r, o) => {
			if (c.isCancellationRequested) return;
			let s = i.createLocationSet(), l = [];
			return await u(r, o), l;
			async function u(r, i) {
				if (!t[1].provideDocumentHighlights || s.has({
					uri: r.uri,
					range: {
						start: i,
						end: i
					}
				})) return;
				s.add({
					uri: r.uri,
					range: {
						start: i,
						end: i
					}
				});
				let o = await t[1].provideDocumentHighlights(r, i, c) ?? [];
				for (let t of o) {
					let i = !1;
					s.add({
						uri: r.uri,
						range: {
							start: t.range.start,
							end: t.range.start
						}
					});
					let o = e.decodeEmbeddedDocumentUri(n.URI.parse(r.uri)), c = o && e.language.scripts.get(o[0]), d = o && c?.generated?.embeddedCodes.get(o[1]), f = d && c ? e.language.linkedCodeMaps.get(d) : void 0;
					if (c && d && f) {
						let n = e.documents.get(e.encodeEmbeddedDocumentUri(c.id, d.id), d.languageId, d.snapshot);
						for (let e of (0, a.getLinkedCodePositions)(n, f, t.range.start)) s.has({
							uri: n.uri,
							range: {
								start: e,
								end: e
							}
						}) || (i = !0, await u(n, e));
					}
					i || l.push(t);
				}
			}
		}, (e, n) => e.map((e) => {
			if (!n) return e;
			let r = (0, a.getSourceRange)(n, e.range, t.isHighlightEnabled);
			if (r) return {
				...e,
				range: r
			};
		}).filter((e) => !!e), (e) => e.flat());
	}
})), pe = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = a;
	var t = v(), n = b(), r = S(), i = C();
	function a(e) {
		return async (a, o = n.NoneCancellationToken) => await (0, r.documentFeatureWorker)(e, a, (e) => e[2].mappings.some((e) => (0, t.isDocumentLinkEnabled)(e.data)), async (t, n) => {
			if (o.isCancellationRequested) return;
			let r = await t[1].provideDocumentLinks?.(n, o);
			for (let n of r ?? []) t[1].resolveDocumentLink ? n.data = {
				uri: a.toString(),
				original: { data: n.data },
				pluginIndex: e.plugins.indexOf(t)
			} : delete n.data;
			return r;
		}, (n, a) => a ? n.map((n) => {
			let o = (0, r.getSourceRange)(a, n.range, t.isDocumentLinkEnabled);
			if (o) return n = {
				...n,
				range: o
			}, n.target && (n.target = (0, i.transformDocumentLinkTarget)(n.target, e).toString()), n;
		}).filter((e) => !!e) : n, (e) => e.flat()) ?? [];
	}
})), me = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.SemanticTokensBuilder = void 0, e.SemanticTokensBuilder = class {
		constructor() {
			this.initialize();
		}
		initialize() {
			this._id = Date.now(), this._prevLine = 0, this._prevChar = 0, this._data = [], this._dataLen = 0;
		}
		push(e, t, n, r, i) {
			let a = e, o = t;
			this._dataLen > 0 && (a -= this._prevLine, a === 0 && (o -= this._prevChar)), this._data[this._dataLen++] = a, this._data[this._dataLen++] = o, this._data[this._dataLen++] = n, this._data[this._dataLen++] = r, this._data[this._dataLen++] = i, this._prevLine = e, this._prevChar = t;
		}
		get id() {
			return this._id.toString();
		}
		build() {
			return {
				resultId: this.id,
				data: this._data
			};
		}
	};
})), he = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = a;
	var t = v(), n = b(), r = S(), i = me();
	function a(e) {
		return async (i, a, s, c, l = n.NoneCancellationToken) => {
			let u = e.language.scripts.get(i);
			if (!u) return;
			let d = e.documents.get(i, u.languageId, u.snapshot);
			a ||= {
				start: {
					line: 0,
					character: 0
				},
				end: {
					line: d.lineCount - 1,
					character: d.getText().length
				}
			};
			let f = await (0, r.languageFeatureWorker)(e, i, () => a, function* (e) {
				let n = (0, t.findOverlapCodeRange)(e[0].offsetAt(a.start), e[0].offsetAt(a.end), e[2], t.isSemanticTokensEnabled);
				n && (yield {
					start: e[1].positionAt(n.start),
					end: e[1].positionAt(n.end)
				});
			}, (e, t, n) => {
				if (!l?.isCancellationRequested) return e[1].provideDocumentSemanticTokens?.(t, n, s, l);
			}, (e, n) => n ? e.map((e) => {
				let i = (0, r.getSourceRange)(n, {
					start: {
						line: e[0],
						character: e[1]
					},
					end: {
						line: e[0],
						character: e[1] + e[2]
					}
				}, t.isSemanticTokensEnabled);
				if (i) return [
					i.start.line,
					i.start.character,
					i.end.character - i.start.character,
					e[3],
					e[4]
				];
			}).filter((e) => !!e) : e, (e) => e.flat());
			if (f) return o(f);
		};
	}
	function o(e) {
		let t = new i.SemanticTokensBuilder(), n = e.sort((e, t) => e[0] - t[0] === 0 ? e[1] - t[1] : e[0] - t[0]);
		for (let e of n) t.push(...e);
		return t.build();
	}
})), ge = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = b(), r = se(), i = S(), a = C();
	function o(e) {
		return (o, c = n.NoneCancellationToken) => (0, i.documentFeatureWorker)(e, o, (e) => e[2].mappings.some((e) => (0, t.isSymbolsEnabled)(e.data)), (e, t) => {
			if (!c.isCancellationRequested) return e[1].provideDocumentSymbols?.(t, c);
		}, (e, n) => n ? e.map((e) => (0, a.transformDocumentSymbol)(e, (e) => (0, i.getSourceRange)(n, e, t.isSymbolsEnabled))).filter((e) => !!e) : e, (e) => {
			for (let t = 0; t < e.length; t++) for (let n = 0; n < e.length; n++) t !== n && (e[t] = e[t].filter((t) => {
				for (let i of s(e[n])) if ((0, r.isInsideRange)(i.range, t.range)) return i.children ??= [], i.children.push(t), !1;
				return !0;
			}));
			return e.flat();
		});
	}
	function* s(e) {
		for (let t of e) t.children && (yield* s(t.children)), yield t;
	}
})), _e = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = y(), r = b(), i = x(), a = S();
	function o(e) {
		return (o, s = r.NoneCancellationToken) => (0, a.documentFeatureWorker)(e, o, () => !0, async (e, t) => {
			if (!s.isCancellationRequested) return await e[1].provideFileReferences?.(t, s) ?? [];
		}, (r) => r.map((r) => {
			let i = e.decodeEmbeddedDocumentUri(n.URI.parse(r.uri)), o = i && e.language.scripts.get(i[0]), s = i && o?.generated?.embeddedCodes.get(i[1]);
			if (!o || !s) return r;
			let c = e.documents.get(e.encodeEmbeddedDocumentUri(o.id, s.id), s.languageId, s.snapshot);
			for (let [n, i] of e.language.maps.forEach(s)) {
				let o = e.documents.get(n.id, n.languageId, n.snapshot), s = [
					o,
					c,
					i
				], l = (0, a.getSourceRange)(s, r.range, t.isReferencesEnabled);
				if (l) return r.uri = o.uri, r.range = l, r;
			}
		}).filter((e) => !!e), (e) => i.withLocations(e.flat()));
	}
})), ve = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = b(), n = x(), r = C();
	function i(e) {
		return async (i, a, o = t.NoneCancellationToken) => {
			for (let t of e.plugins) {
				if (e.disabledServicePlugins.has(t[1])) continue;
				if (o.isCancellationRequested) break;
				if (!t[1].provideFileRenameEdits) continue;
				let s = await t[1].provideFileRenameEdits(i, a, o);
				if (s) {
					let t = (0, r.transformWorkspaceEdit)(s, e, "fileName");
					return t?.documentChanges && (t.documentChanges = n.withDocumentChanges(t.documentChanges)), t;
				}
			}
		};
	}
})), ye = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = a;
	var t = v(), n = b(), r = S(), i = C();
	function a(e) {
		return (a, o = n.NoneCancellationToken) => (0, r.documentFeatureWorker)(e, a, (e) => e[2].mappings.some((e) => (0, t.isFoldingRangesEnabled)(e.data)), (e, t) => {
			if (!o.isCancellationRequested) return e[1].provideFoldingRanges?.(t, o);
		}, (e, n) => n ? (0, i.transformFoldingRanges)(e, (e) => (0, r.getSourceRange)(n, e, t.isFoldingRangesEnabled)) : e, (e) => e.flat());
	}
})), be = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = s;
	var t = v(), n = b(), r = se(), i = S(), a = C(), o = P();
	function s(e) {
		return async (a, c, l = n.NoneCancellationToken) => {
			let u = await (0, i.languageFeatureWorker)(e, a, () => c, (e) => (0, i.getGeneratedPositions)(e, c, t.isHoverEnabled), (e, t, n) => {
				if (!l.isCancellationRequested) return e[1].provideHover?.(t, n, l);
			}, (e, n) => (!n || !e.range || (e.range = (0, i.getSourceRange)(n, e.range, t.isHoverEnabled)), e), (e) => ({
				contents: {
					kind: "markdown",
					value: e.map(s).flat().join("\n\n---\n\n")
				},
				range: e.find((e) => e.range && (0, r.isInsideRange)(e.range, {
					start: c,
					end: c
				}))?.range ?? e[0].range
			})), d = o.errorMarkups.get(a);
			if (d) for (let e of d) (0, r.isInsideRange)(e.error.range, {
				start: c,
				end: c
			}) && (u ??= { contents: {
				kind: "markdown",
				value: ""
			} }, u.range = e.error.range, (typeof u.contents != "object" || typeof u.contents != "string") && (u.contents = {
				kind: "markdown",
				value: u.contents
			}), u.contents.value && (u.contents.value += "\n\n---\n\n"), u.contents.value += e.markup.value);
			return u;
		};
		function s(t) {
			return typeof t.contents == "string" ? [(0, a.transformMarkdown)(t.contents, e)] : Array.isArray(t.contents) ? t.contents.map((t) => typeof t == "string" ? (0, a.transformMarkdown)(t, e) : t.language === "md" ? `\`\`\`${t.language}\n${(0, a.transformMarkdown)(t.value, e)}\n\`\`\`` : `\`\`\`${t.language}\n${t.value}\n\`\`\``) : "kind" in t.contents ? t.contents.kind === "markdown" ? [(0, a.transformMarkdown)(t.contents.value, e)] : [t.contents.value] : t.contents.language === "md" ? [`\`\`\`${t.contents.language}\n${(0, a.transformMarkdown)(t.contents.value, e)}\n\`\`\``] : [`\`\`\`${t.contents.language}\n${t.contents.value}\n\`\`\``];
		}
	}
})), xe = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = a;
	var t = v(), n = b(), r = S(), i = C();
	function a(e) {
		return (a, o, s = n.NoneCancellationToken) => {
			if (e.language.scripts.get(a)) return (0, r.languageFeatureWorker)(e, a, () => o, function* (e) {
				let n = (0, t.findOverlapCodeRange)(e[0].offsetAt(o.start), e[0].offsetAt(o.end), e[2], t.isInlayHintsEnabled);
				n && (yield {
					start: e[1].positionAt(n.start),
					end: e[1].positionAt(n.end)
				});
			}, async (t, n, r) => {
				if (s.isCancellationRequested) return;
				let i = await t[1].provideInlayHints?.(n, r, s);
				return i?.forEach((n) => {
					t[1].resolveInlayHint ? n.data = {
						uri: a.toString(),
						original: { data: n.data },
						pluginIndex: e.plugins.indexOf(t)
					} : delete n.data;
				}), i;
			}, (e, n) => n ? e.map((e) => {
				let a = e.textEdits?.map((e) => (0, i.transformTextEdit)(e, (e) => (0, r.getSourceRange)(n, e), n[1])).filter((e) => !!e);
				for (let i of (0, r.getSourcePositions)(n, e.position, t.isInlayHintsEnabled)) return {
					...e,
					position: i,
					textEdits: a
				};
			}).filter((e) => !!e) : e, (e) => e.flat());
		};
	}
})), Se = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a, o, s = n.NoneCancellationToken) => (0, r.languageFeatureWorker)(e, i, () => a, (e) => (0, r.getGeneratedRanges)(e, a, t.isInlineValueEnabled), (e, t, n) => {
			if (!s.isCancellationRequested) return e[1].provideInlineValues?.(t, n, o, s);
		}, (e, n) => n ? e.map((e) => {
			let i = (0, r.getSourceRange)(n, e.range, t.isInlineValueEnabled);
			if (i) return e.range = i, e;
		}).filter((e) => !!e) : e, (e) => e.flat());
	}
})), Ce = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a, o = n.NoneCancellationToken) => (0, r.languageFeatureWorker)(e, i, () => a, function* (e) {
			for (let n of (0, r.getGeneratedPositions)(e, a, t.isLinkedEditingEnabled)) yield n;
		}, (e, t, n) => {
			if (!o.isCancellationRequested) return e[1].provideLinkedEditingRanges?.(t, n, o);
		}, (e, n) => n ? {
			wordPattern: e.wordPattern,
			ranges: e.ranges.map((e) => (0, r.getSourceRange)(n, e, t.isLinkedEditingEnabled)).filter((e) => !!e)
		} : e);
	}
})), we = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a, o = n.NoneCancellationToken) => (0, r.languageFeatureWorker)(e, i, () => a, (e) => (0, r.getGeneratedPositions)(e, a, t.isMonikerEnabled), (e, t, n) => {
			if (!o.isCancellationRequested) return e[1].provideMoniker?.(t, n, o);
		}, (e) => e, (e) => e.flat());
	}
})), Te = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = y(), r = b(), i = x(), a = S();
	function o(e) {
		return (o, s, c, l = r.NoneCancellationToken) => (0, a.languageFeatureWorker)(e, o, () => s, (e) => (0, a.getGeneratedPositions)(e, s, t.isReferencesEnabled), async (t, r, o) => {
			if (l.isCancellationRequested) return;
			let s = i.createLocationSet(), u = [];
			return await d(r, o), u;
			async function d(r, i) {
				if (!t[1].provideReferences || s.has({
					uri: r.uri,
					range: {
						start: i,
						end: i
					}
				})) return;
				s.add({
					uri: r.uri,
					range: {
						start: i,
						end: i
					}
				});
				let o = await t[1].provideReferences(r, i, c, l) ?? [];
				for (let t of o) {
					let r = !1;
					s.add({
						uri: t.uri,
						range: {
							start: t.range.start,
							end: t.range.start
						}
					});
					let i = e.decodeEmbeddedDocumentUri(n.URI.parse(t.uri)), o = i && e.language.scripts.get(i[0]), c = i && o?.generated?.embeddedCodes.get(i[1]), l = c && o ? e.language.linkedCodeMaps.get(c) : void 0;
					if (o && c && l) {
						let n = e.documents.get(e.encodeEmbeddedDocumentUri(o.id, c.id), c.languageId, c.snapshot);
						for (let e of (0, a.getLinkedCodePositions)(n, l, t.range.start)) s.has({
							uri: n.uri,
							range: {
								start: e,
								end: e
							}
						}) || (r = !0, await d(n, e));
					}
					r || u.push(t);
				}
			}
		}, (r) => {
			let i = [];
			for (let o of r) {
				let r = e.decodeEmbeddedDocumentUri(n.URI.parse(o.uri)), s = r && e.language.scripts.get(r[0]), c = r && s?.generated?.embeddedCodes.get(r[1]);
				if (s && c) {
					let n = e.documents.get(e.encodeEmbeddedDocumentUri(s.id, c.id), c.languageId, c.snapshot);
					for (let [r, s] of e.language.maps.forEach(c)) {
						let c = e.documents.get(r.id, r.languageId, r.snapshot), l = [
							c,
							n,
							s
						], u = (0, a.getSourceRange)(l, o.range, t.isReferencesEnabled);
						u && i.push({
							uri: c.uri,
							range: u
						});
					}
				} else i.push(o);
			}
			return i;
		}, (e) => i.withLocations(e.flat()));
	}
})), Ee = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a, o = n.NoneCancellationToken) => (0, r.languageFeatureWorker)(e, i, () => a, (e) => (0, r.getGeneratedPositions)(e, a, t.isRenameEnabled), (e, t, n) => {
			if (!o.isCancellationRequested) return e[1].provideRenameRange?.(t, n, o);
		}, (e, t) => t && "start" in e && "end" in e ? (0, r.getSourceRange)(t, e) : e, (e) => {
			for (let t of e) if ("start" in t && "end" in t) return t;
			return e[0];
		});
	}
})), De = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = o;
	var t = v(), n = b(), r = se(), i = S(), a = C();
	function o(e) {
		return (o, s, c = n.NoneCancellationToken) => (0, i.languageFeatureWorker)(e, o, () => s, function* (e) {
			let n = s.map((n) => {
				for (let r of (0, i.getGeneratedPositions)(e, n, t.isSelectionRangesEnabled)) return r;
			}).filter((e) => !!e);
			n.length && (yield n);
		}, async (e, t, n) => {
			if (c.isCancellationRequested) return;
			let r = await e[1].provideSelectionRanges?.(t, n, c);
			if (r && r.length !== n.length) {
				console.error("Selection ranges count should be equal to positions count:", e[0].name, r.length, n.length);
				return;
			}
			return r;
		}, (e, n) => n ? (0, a.transformSelectionRanges)(e, (e) => (0, i.getSourceRange)(n, e, t.isSelectionRangesEnabled)) : e, (e) => {
			let t = [];
			for (let n = 0; n < s.length; n++) {
				let i = [];
				for (let t of e) i.push(t[n]);
				i = i.sort((e, t) => (0, r.isInsideRange)(e.range, t.range) ? 1 : (0, r.isInsideRange)(t.range, e.range) ? -1 : 0);
				for (let e = 1; e < i.length; e++) {
					let t = i[e - 1], n = i[e];
					for (; t.parent && (0, r.isInsideRange)(n.range, t.parent.range) && !(0, r.isEqualRange)(n.range, t.parent.range);) t = t.parent;
					t && (t.parent = n);
				}
				t.push(i[0]);
			}
			return t;
		});
	}
})), Oe = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = v(), n = b(), r = S();
	function i(e) {
		return (i, a, o = {
			triggerKind: 1,
			isRetrigger: !1
		}, s = n.NoneCancellationToken) => (0, r.languageFeatureWorker)(e, i, () => a, (e) => (0, r.getGeneratedPositions)(e, a, t.isSignatureHelpEnabled), (e, t, n) => {
			if (!s.isCancellationRequested && (o?.triggerKind !== 2 || !o.triggerCharacter || (o.isRetrigger ? e[0].capabilities.signatureHelpProvider?.retriggerCharacters : e[0].capabilities.signatureHelpProvider?.triggerCharacters)?.includes(o.triggerCharacter))) return e[1].provideSignatureHelp?.(t, n, o, s);
		}, (e) => e);
	}
})), ke = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = y(), n = b(), r = P();
	function i(e) {
		return async (i = n.NoneCancellationToken) => {
			let a = [];
			for (let n of e.plugins) {
				if (e.disabledServicePlugins.has(n[1])) continue;
				if (i.isCancellationRequested) break;
				if (!n[1].provideWorkspaceDiagnostics) continue;
				let o = await n[1].provideWorkspaceDiagnostics(i);
				if (!o) continue;
				let s = o.map((n) => {
					let i = e.decodeEmbeddedDocumentUri(t.URI.parse(n.uri)), a = i && e.language.scripts.get(i[0]), o = i && a?.generated?.embeddedCodes.get(i[1]);
					if (o && a) {
						if (n.kind === "unchanged") return {
							...n,
							uri: a.id.toString()
						};
						{
							let t = e.language.maps.get(o, a), i = [
								e.documents.get(a.id, a.languageId, a.snapshot),
								e.documents.get(e.encodeEmbeddedDocumentUri(a.id, o.id), o.languageId, o.snapshot),
								t
							];
							return {
								...n,
								items: n.items.map((t) => (0, r.transformDiagnostic)(e, t, i)).filter((e) => !!e)
							};
						}
					}
					return n.kind === "unchanged" ? n : {
						...n,
						items: n.items.map((t) => (0, r.transformDiagnostic)(e, t, void 0)).filter((e) => !!e)
					};
				});
				a.push(...s);
			}
			return a;
		};
	}
})), Ae = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = a;
	var t = y(), n = b(), r = S(), i = C();
	function a(e) {
		return async (a, o = n.NoneCancellationToken) => {
			let s = [];
			for (let n of e.plugins) {
				if (e.disabledServicePlugins.has(n[1])) continue;
				if (o.isCancellationRequested) break;
				if (!n[1].provideWorkspaceSymbols) continue;
				let c = await n[1].provideWorkspaceSymbols(a, o);
				if (!c) continue;
				let l = c.map((n) => (0, i.transformWorkspaceSymbol)(n, (n) => {
					let i = e.decodeEmbeddedDocumentUri(t.URI.parse(n.uri)), a = i && e.language.scripts.get(i[0]), o = i && a?.generated?.embeddedCodes.get(i[1]);
					if (a && o) {
						let t = e.documents.get(e.encodeEmbeddedDocumentUri(a.id, o.id), o.languageId, o.snapshot);
						for (let [i, a] of e.language.maps.forEach(o)) {
							let o = e.documents.get(i.id, i.languageId, i.snapshot), s = [
								o,
								t,
								a
							], c = (0, r.getSourceRange)(s, n.range);
							if (c) return {
								uri: o.uri,
								range: c
							};
						}
					} else return n;
				})).filter((e) => !!e);
				l?.forEach((t) => {
					n[1].resolveWorkspaceSymbol ? t.data = {
						original: { data: t.data },
						pluginIndex: e.plugins.indexOf(n)
					} : delete t.data;
				}), s.push(l);
			}
			return s.flat();
		};
	}
})), je = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = r;
	var t = b(), n = C();
	function r(e) {
		return async (r, i = t.NoneCancellationToken) => {
			let a = r.data;
			if (a) {
				let t = e.plugins[a.pluginIndex];
				if (!t[1].resolveCodeAction) return delete r.data, r;
				Object.assign(r, a.original), r = await t[1].resolveCodeAction(r, i), r = t[1].transformCodeAction?.(r) ?? (r.edit ? {
					...r,
					edit: (0, n.transformWorkspaceEdit)(r.edit, e, "codeAction", { [a.uri]: a.version })
				} : r);
			}
			return delete r.data, r;
		};
	}
})), Me = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = i;
	var t = y(), n = b(), r = Te();
	function i(e) {
		let i = r.register(e);
		return async (r, a = n.NoneCancellationToken) => {
			let o = r.data;
			if (o?.kind === "normal") {
				let t = e.plugins[o.pluginIndex];
				if (!t[1].resolveCodeLens) return delete r.data, r;
				Object.assign(r, o.original), r = await t[1].resolveCodeLens(r, a);
			} else if (o?.kind === "references") {
				let n = await i(t.URI.parse(o.sourceFileUri), r.range.start, { includeDeclaration: !1 }, a) ?? [];
				r.command = e.commands.showReferences.create(o.sourceFileUri, r.range.start, n);
			}
			return delete r.data, r;
		};
	}
})), Ne = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = a;
	var t = y(), n = b(), r = S(), i = C();
	function a(e) {
		return async (a, o = n.NoneCancellationToken) => {
			let s = a.data;
			if (s) {
				let n = e.plugins[s.pluginIndex];
				if (!n[1].resolveCompletionItem) return delete a.data, a;
				if (a = Object.assign(a, s.original), s.embeddedDocumentUri) {
					let c = e.decodeEmbeddedDocumentUri(t.URI.parse(s.embeddedDocumentUri)), l = c && e.language.scripts.get(c[0]), u = c && l?.generated?.embeddedCodes.get(c[1]);
					if (l && u) {
						let t = e.documents.get(e.encodeEmbeddedDocumentUri(l.id, u.id), u.languageId, u.snapshot);
						for (let [s, c] of e.language.maps.forEach(u)) {
							let l = [
								e.documents.get(s.id, s.languageId, s.snapshot),
								t,
								c
							];
							a = await n[1].resolveCompletionItem(a, o), a = n[1].transformCompletionItem?.(a) ?? (0, i.transformCompletionItem)(a, (e) => (0, r.getSourceRange)(l, e), t, e);
						}
					}
				} else a = await n[1].resolveCompletionItem(a, o);
			}
			return delete a.data, a;
		};
	}
})), Pe = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = r;
	var t = b(), n = C();
	function r(e) {
		return async (r, i = t.NoneCancellationToken) => {
			let a = r.data;
			if (a) {
				let t = e.plugins[a.pluginIndex];
				if (!t[1].resolveDocumentLink) return delete r.data, r;
				Object.assign(r, a.original), r = await t[1].resolveDocumentLink(r, i), r.target && (r.target = (0, n.transformDocumentLinkTarget)(r.target, e).toString());
			}
			return delete r.data, r;
		};
	}
})), Fe = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = n;
	var t = b();
	function n(e) {
		return async (n, r = t.NoneCancellationToken) => {
			let i = n.data;
			if (i) {
				let t = e.plugins[i.pluginIndex];
				if (!t[1].resolveInlayHint) return delete n.data, n;
				Object.assign(n, i.original), n = await t[1].resolveInlayHint(n, r);
			}
			return delete n.data, n;
		};
	}
})), Ie = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.register = n;
	var t = b();
	function n(e) {
		return async (n, r = t.NoneCancellationToken) => {
			let i = n.data;
			if (i) {
				let t = e.plugins[i.pluginIndex];
				if (!t[1].resolveWorkspaceSymbol) return delete n.data, n;
				Object.assign(n, i.original), n = await t[1].resolveWorkspaceSymbol(n, r);
			}
			return delete n.data, n;
		};
	}
})), Le = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.embeddedContentScheme = void 0, t.createLanguageService = Ye, t.decodeEmbeddedDocumentUri = Xe, t.encodeEmbeddedDocumentUri = Ze;
	var n = v(), r = (N(), e(T)), i = y(), a = ee(), o = te(), s = ne(), c = re(), l = ie(), u = ae(), d = oe(), f = P(), p = le(), m = ue(), h = de(), g = fe(), _ = pe(), x = he(), S = ge(), C = _e(), E = ve(), D = ye(), O = be(), k = xe(), A = Se(), j = Ce(), M = we(), se = Te(), me = w(), Le = Ee(), Re = De(), ze = Oe(), Be = ke(), Ve = Ae(), He = je(), Ue = Me(), We = Ne(), Ge = Pe(), F = Fe(), Ke = Ie(), qe = b(), Je = ce();
	t.embeddedContentScheme = "volar-embedded-content";
	function Ye(e, t, n, i) {
		let a = (0, Je.createUriMap)(), o = /* @__PURE__ */ new WeakMap(), s = {
			language: e,
			project: i,
			getLanguageService: () => c,
			documents: { get(e, t, n) {
				o.has(n) || o.set(n, (0, Je.createUriMap)());
				let i = o.get(n);
				if (!i.has(e)) {
					let o = a.get(e) ?? 0;
					a.set(e, o + 1), i.set(e, r.TextDocument.create(e.toString(), t, o, n.getText(0, n.getLength())));
				}
				return i.get(e);
			} },
			env: n,
			inject: (e, ...t) => {
				for (let n of s.plugins) {
					if (s.disabledServicePlugins.has(n[1])) continue;
					let r = n[1].provide?.[e];
					if (r) return r(...t);
				}
			},
			plugins: [],
			commands: {
				rename: {
					create(e, t) {
						return {
							title: "",
							command: "editor.action.rename",
							arguments: [e, t]
						};
					},
					is(e) {
						return e.command === "editor.action.rename";
					}
				},
				showReferences: {
					create(e, t, n) {
						return {
							title: n.length === 1 ? "1 reference" : `${n.length} references`,
							command: "editor.action.showReferences",
							arguments: [
								e,
								t,
								n
							]
						};
					},
					is(e) {
						return e.command === "editor.action.showReferences";
					}
				},
				setSelection: {
					create(e) {
						return {
							title: "",
							command: "setSelection",
							arguments: [{ selection: {
								selectionStartLineNumber: e.line + 1,
								positionLineNumber: e.line + 1,
								selectionStartColumn: e.character + 1,
								positionColumn: e.character + 1
							} }]
						};
					},
					is(e) {
						return e.command === "setSelection";
					}
				}
			},
			disabledEmbeddedDocumentUris: (0, Je.createUriMap)(),
			disabledServicePlugins: /* @__PURE__ */ new WeakSet(),
			decodeEmbeddedDocumentUri: Xe,
			encodeEmbeddedDocumentUri: Ze
		};
		for (let e of t) s.plugins.push([e, e.create(s)]);
		let c = Qe(t, s);
		return c;
	}
	function Xe(e) {
		if (e.scheme === t.embeddedContentScheme) {
			let t = decodeURIComponent(e.authority), n = decodeURIComponent(e.path.substring(1));
			return [i.URI.parse(n), t];
		}
	}
	function Ze(e, n) {
		return n !== n.toLowerCase() && console.error(`embeddedContentId must be lowercase: ${n}`), i.URI.from({
			scheme: t.embeddedContentScheme,
			authority: encodeURIComponent(n),
			path: "/" + encodeURIComponent(e.toString())
		});
	}
	function Qe(e, t) {
		let r = e.map((e) => e.capabilities.semanticTokensProvider?.legend?.tokenModifiers ?? []).flat(), i = e.map((e) => e.capabilities.semanticTokensProvider?.legend?.tokenTypes ?? []).flat();
		return {
			semanticTokenLegend: {
				tokenModifiers: [...new Set(r)],
				tokenTypes: [...new Set(i)]
			},
			commands: e.map((e) => e.capabilities.executeCommandProvider?.commands ?? []).flat(),
			triggerCharacters: e.map((e) => e.capabilities.completionProvider?.triggerCharacters ?? []).flat(),
			autoFormatTriggerCharacters: e.map((e) => e.capabilities.documentOnTypeFormattingProvider?.triggerCharacters ?? []).flat(),
			signatureHelpTriggerCharacters: e.map((e) => e.capabilities.signatureHelpProvider?.triggerCharacters ?? []).flat(),
			signatureHelpRetriggerCharacters: e.map((e) => e.capabilities.signatureHelpProvider?.retriggerCharacters ?? []).flat(),
			executeCommand(e, n, r = qe.NoneCancellationToken) {
				for (let i of t.plugins) if (!t.disabledServicePlugins.has(i[1]) && i[1].executeCommand && i[0].capabilities.executeCommandProvider?.commands.includes(e)) return i[1].executeCommand(e, n, r);
			},
			getDocumentFormattingEdits: h.register(t),
			getFoldingRanges: D.register(t),
			getSelectionRanges: Re.register(t),
			getLinkedEditingRanges: j.register(t),
			getDocumentSymbols: S.register(t),
			getDocumentColors: p.register(t),
			getColorPresentations: l.register(t),
			getDiagnostics: f.register(t),
			getWorkspaceDiagnostics: Be.register(t),
			getReferences: se.register(t),
			getFileReferences: C.register(t),
			getDeclaration: d.register(t, "provideDeclaration", n.isDefinitionEnabled),
			getDefinition: d.register(t, "provideDefinition", n.isDefinitionEnabled),
			getTypeDefinition: d.register(t, "provideTypeDefinition", n.isTypeDefinitionEnabled),
			getImplementations: d.register(t, "provideImplementation", n.isImplementationEnabled),
			getRenameRange: Le.register(t),
			getRenameEdits: me.register(t),
			getFileRenameEdits: E.register(t),
			getSemanticTokens: x.register(t),
			getHover: O.register(t),
			getCompletionItems: u.register(t),
			getCodeActions: s.register(t),
			getSignatureHelp: ze.register(t),
			getCodeLenses: c.register(t),
			getDocumentHighlights: g.register(t),
			getDocumentLinks: _.register(t),
			getWorkspaceSymbols: Ve.register(t),
			getAutoInsertSnippet: a.register(t),
			getDocumentDropEdits: m.register(t),
			getInlayHints: k.register(t),
			getMoniker: M.register(t),
			getInlineValue: A.register(t),
			resolveCodeAction: He.register(t),
			resolveCompletionItem: We.register(t),
			resolveCodeLens: Ue.register(t),
			resolveDocumentLink: Ge.register(t),
			resolveInlayHint: F.register(t),
			resolveWorkspaceSymbol: Ke.register(t),
			...o.register(t),
			dispose: () => t.plugins.forEach((e) => e[1].dispose?.()),
			context: t
		};
	}
})), Re = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.FileType = void 0;
	var t;
	(function(e) {
		e[e.Unknown = 0] = "Unknown", e[e.File = 1] = "File", e[e.Directory = 2] = "Directory", e[e.SymbolicLink = 64] = "SymbolicLink";
	})(t || (e.FileType = t = {}));
})), ze = /* @__PURE__ */ i(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeWorkspaceEdits = void 0, n(v(), e);
	var r = w();
	Object.defineProperty(e, "mergeWorkspaceEdits", {
		enumerable: !0,
		get: function() {
			return r.mergeWorkspaceEdits;
		}
	}), n(Le(), e), n(Re(), e), n(C(), e), n(ce(), e);
}));
//#endregion
//#region ../../node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/scanner.js
function Be(e, t = !1) {
	let n = e.length, r = 0, i = "", a = 0, o = 16, s = 0, c = 0, l = 0, u = 0, d = 0;
	function f(t, n) {
		let i = 0, a = 0;
		for (; i < t || !n;) {
			let t = e.charCodeAt(r);
			if (t >= 48 && t <= 57) a = a * 16 + t - 48;
			else if (t >= 65 && t <= 70) a = a * 16 + t - 65 + 10;
			else if (t >= 97 && t <= 102) a = a * 16 + t - 97 + 10;
			else break;
			r++, i++;
		}
		return i < t && (a = -1), a;
	}
	function p(e) {
		r = e, i = "", a = 0, o = 16, d = 0;
	}
	function m() {
		let t = r;
		if (e.charCodeAt(r) === 48) r++;
		else for (r++; r < e.length && Ue(e.charCodeAt(r));) r++;
		if (r < e.length && e.charCodeAt(r) === 46) {
			if (r++, r < e.length && Ue(e.charCodeAt(r))) for (r++; r < e.length && Ue(e.charCodeAt(r));) r++;
			else return d = 3, e.substring(t, r);
		}
		let n = r;
		if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101)) {
			if (r++, (r < e.length && e.charCodeAt(r) === 43 || e.charCodeAt(r) === 45) && r++, r < e.length && Ue(e.charCodeAt(r))) {
				for (r++; r < e.length && Ue(e.charCodeAt(r));) r++;
				n = r;
			} else d = 3;
		}
		return e.substring(t, n);
	}
	function h() {
		let t = "", i = r;
		for (;;) {
			if (r >= n) {
				t += e.substring(i, r), d = 2;
				break;
			}
			let a = e.charCodeAt(r);
			if (a === 34) {
				t += e.substring(i, r), r++;
				break;
			}
			if (a === 92) {
				if (t += e.substring(i, r), r++, r >= n) {
					d = 2;
					break;
				}
				switch (e.charCodeAt(r++)) {
					case 34:
						t += "\"";
						break;
					case 92:
						t += "\\";
						break;
					case 47:
						t += "/";
						break;
					case 98:
						t += "\b";
						break;
					case 102:
						t += "\f";
						break;
					case 110:
						t += "\n";
						break;
					case 114:
						t += "\r";
						break;
					case 116:
						t += "	";
						break;
					case 117:
						let e = f(4, !0);
						e >= 0 ? t += String.fromCharCode(e) : d = 4;
						break;
					default: d = 5;
				}
				i = r;
				continue;
			}
			if (a >= 0 && a <= 31) {
				if (He(a)) {
					t += e.substring(i, r), d = 2;
					break;
				}
				d = 6;
			}
			r++;
		}
		return t;
	}
	function g() {
		if (i = "", d = 0, a = r, c = s, u = l, r >= n) return a = n, o = 17;
		let t = e.charCodeAt(r);
		if (Ve(t)) {
			do
				r++, i += String.fromCharCode(t), t = e.charCodeAt(r);
			while (Ve(t));
			return o = 15;
		}
		if (He(t)) return r++, i += String.fromCharCode(t), t === 13 && e.charCodeAt(r) === 10 && (r++, i += "\n"), s++, l = r, o = 14;
		switch (t) {
			case 123: return r++, o = 1;
			case 125: return r++, o = 2;
			case 91: return r++, o = 3;
			case 93: return r++, o = 4;
			case 58: return r++, o = 6;
			case 44: return r++, o = 5;
			case 34: return r++, i = h(), o = 10;
			case 47:
				let c = r - 1;
				if (e.charCodeAt(r + 1) === 47) {
					for (r += 2; r < n && !He(e.charCodeAt(r));) r++;
					return i = e.substring(c, r), o = 12;
				}
				if (e.charCodeAt(r + 1) === 42) {
					r += 2;
					let t = n - 1, a = !1;
					for (; r < t;) {
						let t = e.charCodeAt(r);
						if (t === 42 && e.charCodeAt(r + 1) === 47) {
							r += 2, a = !0;
							break;
						}
						r++, He(t) && (t === 13 && e.charCodeAt(r) === 10 && r++, s++, l = r);
					}
					return a || (r++, d = 1), i = e.substring(c, r), o = 13;
				}
				return i += String.fromCharCode(t), r++, o = 16;
			case 45: if (i += String.fromCharCode(t), r++, r === n || !Ue(e.charCodeAt(r))) return o = 16;
			case 48:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
			case 55:
			case 56:
			case 57: return i += m(), o = 11;
			default:
				for (; r < n && _(t);) r++, t = e.charCodeAt(r);
				if (a !== r) {
					switch (i = e.substring(a, r), i) {
						case "true": return o = 8;
						case "false": return o = 9;
						case "null": return o = 7;
					}
					return o = 16;
				}
				return i += String.fromCharCode(t), r++, o = 16;
		}
	}
	function _(e) {
		if (Ve(e) || He(e)) return !1;
		switch (e) {
			case 125:
			case 93:
			case 123:
			case 91:
			case 34:
			case 58:
			case 44:
			case 47: return !1;
		}
		return !0;
	}
	function v() {
		let e;
		do
			e = g();
		while (e >= 12 && e <= 15);
		return e;
	}
	return {
		setPosition: p,
		getPosition: () => r,
		scan: t ? v : g,
		getToken: () => o,
		getTokenValue: () => i,
		getTokenOffset: () => a,
		getTokenLength: () => r - a,
		getTokenStartLine: () => c,
		getTokenStartCharacter: () => a - u,
		getTokenError: () => d
	};
}
function Ve(e) {
	return e === 32 || e === 9;
}
function He(e) {
	return e === 10 || e === 13;
}
function Ue(e) {
	return e >= 48 && e <= 57;
}
var We, Ge = t((() => {
	(function(e) {
		e[e.lineFeed = 10] = "lineFeed", e[e.carriageReturn = 13] = "carriageReturn", e[e.space = 32] = "space", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.a = 97] = "a", e[e.b = 98] = "b", e[e.c = 99] = "c", e[e.d = 100] = "d", e[e.e = 101] = "e", e[e.f = 102] = "f", e[e.g = 103] = "g", e[e.h = 104] = "h", e[e.i = 105] = "i", e[e.j = 106] = "j", e[e.k = 107] = "k", e[e.l = 108] = "l", e[e.m = 109] = "m", e[e.n = 110] = "n", e[e.o = 111] = "o", e[e.p = 112] = "p", e[e.q = 113] = "q", e[e.r = 114] = "r", e[e.s = 115] = "s", e[e.t = 116] = "t", e[e.u = 117] = "u", e[e.v = 118] = "v", e[e.w = 119] = "w", e[e.x = 120] = "x", e[e.y = 121] = "y", e[e.z = 122] = "z", e[e.A = 65] = "A", e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", e[e.asterisk = 42] = "asterisk", e[e.backslash = 92] = "backslash", e[e.closeBrace = 125] = "closeBrace", e[e.closeBracket = 93] = "closeBracket", e[e.colon = 58] = "colon", e[e.comma = 44] = "comma", e[e.dot = 46] = "dot", e[e.doubleQuote = 34] = "doubleQuote", e[e.minus = 45] = "minus", e[e.openBrace = 123] = "openBrace", e[e.openBracket = 91] = "openBracket", e[e.plus = 43] = "plus", e[e.slash = 47] = "slash", e[e.formFeed = 12] = "formFeed", e[e.tab = 9] = "tab";
	})(We ||= {});
})), F, Ke, qe, Je, Ye = t((() => {
	F = Array(20).fill(0).map((e, t) => " ".repeat(t)), Ke = 200, qe = {
		" ": {
			"\n": Array(Ke).fill(0).map((e, t) => "\n" + " ".repeat(t)),
			"\r": Array(Ke).fill(0).map((e, t) => "\r" + " ".repeat(t)),
			"\r\n": Array(Ke).fill(0).map((e, t) => "\r\n" + " ".repeat(t))
		},
		"	": {
			"\n": Array(Ke).fill(0).map((e, t) => "\n" + "	".repeat(t)),
			"\r": Array(Ke).fill(0).map((e, t) => "\r" + "	".repeat(t)),
			"\r\n": Array(Ke).fill(0).map((e, t) => "\r\n" + "	".repeat(t))
		}
	}, Je = [
		"\n",
		"\r",
		"\r\n"
	];
}));
//#endregion
//#region ../../node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/format.js
function Xe(e, t, n) {
	let r, i, a, o, s;
	if (t) {
		for (o = t.offset, s = o + t.length, a = o; a > 0 && !et(e, a - 1);) a--;
		let c = s;
		for (; c < e.length && !et(e, c);) c++;
		i = e.substring(a, c), r = Qe(i, n);
	} else i = e, r = 0, a = 0, o = 0, s = e.length;
	let c = $e(n, e), l = Je.includes(c), u = 0, d = 0, f;
	f = n.insertSpaces ? F[n.tabSize || 4] ?? Ze(F[1], n.tabSize || 4) : "	";
	let p = f === "	" ? "	" : " ", m = Be(i, !1), h = !1;
	function g() {
		if (u > 1) return Ze(c, u) + Ze(f, r + d);
		let e = f.length * (r + d);
		return !l || e > qe[p][c].length ? c + Ze(f, r + d) : e <= 0 ? c : qe[p][c][e];
	}
	function _() {
		let e = m.scan();
		for (u = 0; e === 15 || e === 14;) e === 14 && n.keepLines ? u += 1 : e === 14 && (u = 1), e = m.scan();
		return h = e === 16 || m.getTokenError() !== 0, e;
	}
	let v = [];
	function y(n, r, i) {
		!h && (!t || r < s && i > o) && e.substring(r, i) !== n && v.push({
			offset: r,
			length: i - r,
			content: n
		});
	}
	let b = _();
	if (n.keepLines && u > 0 && y(Ze(c, u), 0, 0), b !== 17) {
		let e = m.getTokenOffset() + a;
		y(f.length * r < 20 && n.insertSpaces ? F[f.length * r] : Ze(f, r), a, e);
	}
	for (; b !== 17;) {
		let e = m.getTokenOffset() + m.getTokenLength() + a, t = _(), r = "", i = !1;
		for (; u === 0 && (t === 12 || t === 13);) {
			let n = m.getTokenOffset() + a;
			y(F[1], e, n), e = m.getTokenOffset() + m.getTokenLength() + a, i = t === 12, r = i ? g() : "", t = _();
		}
		if (t === 2) b !== 1 && d--, n.keepLines && u > 0 || !n.keepLines && b !== 1 ? r = g() : n.keepLines && (r = F[1]);
		else if (t === 4) b !== 3 && d--, n.keepLines && u > 0 || !n.keepLines && b !== 3 ? r = g() : n.keepLines && (r = F[1]);
		else {
			switch (b) {
				case 3:
				case 1:
					d++, r = n.keepLines && u > 0 || !n.keepLines ? g() : F[1];
					break;
				case 5:
					r = n.keepLines && u > 0 || !n.keepLines ? g() : F[1];
					break;
				case 12:
					r = g();
					break;
				case 13:
					u > 0 ? r = g() : i || (r = F[1]);
					break;
				case 6:
					n.keepLines && u > 0 ? r = g() : i || (r = F[1]);
					break;
				case 10:
					n.keepLines && u > 0 ? r = g() : t === 6 && !i && (r = "");
					break;
				case 7:
				case 8:
				case 9:
				case 11:
				case 2:
				case 4:
					n.keepLines && u > 0 ? r = g() : (t === 12 || t === 13) && !i ? r = F[1] : t !== 5 && t !== 17 && (h = !0);
					break;
				case 16: h = !0;
			}
			u > 0 && (t === 12 || t === 13) && (r = g());
		}
		t === 17 && (r = n.keepLines && u > 0 ? g() : n.insertFinalNewline ? c : "");
		let o = m.getTokenOffset() + a;
		y(r, e, o), b = t;
	}
	return v;
}
function Ze(e, t) {
	let n = "";
	for (let r = 0; r < t; r++) n += e;
	return n;
}
function Qe(e, t) {
	let n = 0, r = 0, i = t.tabSize || 4;
	for (; n < e.length;) {
		let t = e.charAt(n);
		if (t === F[1]) r++;
		else if (t === "	") r += i;
		else break;
		n++;
	}
	return Math.floor(r / i);
}
function $e(e, t) {
	for (let e = 0; e < t.length; e++) {
		let n = t.charAt(e);
		if (n === "\r") return e + 1 < t.length && t.charAt(e + 1) === "\n" ? "\r\n" : "\r";
		if (n === "\n") return "\n";
	}
	return e && e.eol || "\n";
}
function et(e, t) {
	return "\r\n".indexOf(e.charAt(t)) !== -1;
}
var tt = t((() => {
	Ge(), Ye();
}));
//#endregion
//#region ../../node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/impl/parser.js
function nt(e, t = [], n = ct.DEFAULT) {
	let r = null, i = [], a = [];
	function o(e) {
		Array.isArray(i) ? i.push(e) : r !== null && (i[r] = e);
	}
	return st(e, {
		onObjectBegin: () => {
			let e = {};
			o(e), a.push(i), i = e, r = null;
		},
		onObjectProperty: (e) => {
			r = e;
		},
		onObjectEnd: () => {
			i = a.pop();
		},
		onArrayBegin: () => {
			let e = [];
			o(e), a.push(i), i = e, r = null;
		},
		onArrayEnd: () => {
			i = a.pop();
		},
		onLiteralValue: o,
		onError: (e, n, r) => {
			t.push({
				error: e,
				offset: n,
				length: r
			});
		}
	}, n), i[0];
}
function rt(e) {
	if (!e.parent || !e.parent.children) return [];
	let t = rt(e.parent);
	if (e.parent.type === "property") {
		let n = e.parent.children[0].value;
		t.push(n);
	} else if (e.parent.type === "array") {
		let n = e.parent.children.indexOf(e);
		n !== -1 && t.push(n);
	}
	return t;
}
function it(e) {
	switch (e.type) {
		case "array": return e.children.map(it);
		case "object":
			let t = Object.create(null);
			for (let n of e.children) {
				let e = n.children[1];
				e && (t[n.children[0].value] = it(e));
			}
			return t;
		case "null":
		case "string":
		case "number":
		case "boolean": return e.value;
		default: return;
	}
}
function at(e, t, n = !1) {
	return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function ot(e, t, n = !1) {
	if (at(e, t, n)) {
		let r = e.children;
		if (Array.isArray(r)) for (let e = 0; e < r.length && r[e].offset <= t; e++) {
			let i = ot(r[e], t, n);
			if (i) return i;
		}
		return e;
	}
}
function st(e, t, n = ct.DEFAULT) {
	let r = Be(e, !1), i = [], a = 0;
	function o(e) {
		return e ? () => a === 0 && e(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => !0;
	}
	function s(e) {
		return e ? (t) => a === 0 && e(t, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter()) : () => !0;
	}
	function c(e) {
		return e ? (t) => a === 0 && e(t, r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) : () => !0;
	}
	function l(e) {
		return e ? () => {
			a > 0 ? a++ : e(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter(), () => i.slice()) === !1 && (a = 1);
		} : () => !0;
	}
	function u(e) {
		return e ? () => {
			a > 0 && a--, a === 0 && e(r.getTokenOffset(), r.getTokenLength(), r.getTokenStartLine(), r.getTokenStartCharacter());
		} : () => !0;
	}
	let d = l(t.onObjectBegin), f = c(t.onObjectProperty), p = u(t.onObjectEnd), m = l(t.onArrayBegin), h = u(t.onArrayEnd), g = c(t.onLiteralValue), _ = s(t.onSeparator), v = o(t.onComment), y = s(t.onError), b = n && n.disallowComments, x = n && n.allowTrailingComma;
	function S() {
		for (;;) {
			let e = r.scan();
			switch (r.getTokenError()) {
				case 4:
					C(14);
					break;
				case 5:
					C(15);
					break;
				case 3:
					C(13);
					break;
				case 1:
					b || C(11);
					break;
				case 2:
					C(12);
					break;
				case 6: C(16);
			}
			switch (e) {
				case 12:
				case 13:
					b ? C(10) : v();
					break;
				case 16:
					C(1);
					break;
				case 15:
				case 14: break;
				default: return e;
			}
		}
	}
	function C(e, t = [], n = []) {
		if (y(e), t.length + n.length > 0) {
			let e = r.getToken();
			for (; e !== 17;) {
				if (t.indexOf(e) !== -1) {
					S();
					break;
				}
				if (n.indexOf(e) !== -1) break;
				e = S();
			}
		}
	}
	function w(e) {
		let t = r.getTokenValue();
		return e ? g(t) : (f(t), i.push(t)), S(), !0;
	}
	function T() {
		switch (r.getToken()) {
			case 11:
				let e = r.getTokenValue(), t = Number(e);
				isNaN(t) && (C(2), t = 0), g(t);
				break;
			case 7:
				g(null);
				break;
			case 8:
				g(!0);
				break;
			case 9:
				g(!1);
				break;
			default: return !1;
		}
		return S(), !0;
	}
	function E() {
		return r.getToken() === 10 ? (w(!1), r.getToken() === 6 ? (_(":"), S(), k() || C(4, [], [2, 5])) : C(5, [], [2, 5]), i.pop(), !0) : (C(3, [], [2, 5]), !1);
	}
	function D() {
		d(), S();
		let e = !1;
		for (; r.getToken() !== 2 && r.getToken() !== 17;) {
			if (r.getToken() === 5) {
				if (e || C(4, [], []), _(","), S(), r.getToken() === 2 && x) break;
			} else e && C(6, [], []);
			E() || C(4, [], [2, 5]), e = !0;
		}
		return p(), r.getToken() === 2 ? S() : C(7, [2], []), !0;
	}
	function O() {
		m(), S();
		let e = !0, t = !1;
		for (; r.getToken() !== 4 && r.getToken() !== 17;) {
			if (r.getToken() === 5) {
				if (t || C(4, [], []), _(","), S(), r.getToken() === 4 && x) break;
			} else t && C(6, [], []);
			e ? (i.push(0), e = !1) : i[i.length - 1]++, k() || C(4, [], [4, 5]), t = !0;
		}
		return h(), e || i.pop(), r.getToken() === 4 ? S() : C(8, [4], []), !0;
	}
	function k() {
		switch (r.getToken()) {
			case 3: return O();
			case 1: return D();
			case 10: return w(!0);
			default: return T();
		}
	}
	return S(), r.getToken() === 17 ? n.allowEmptyContent ? !0 : (C(4, [], []), !1) : k() ? (r.getToken() !== 17 && C(9, [], []), !0) : (C(4, [], []), !1);
}
var ct, lt = t((() => {
	Ge(), (function(e) {
		e.DEFAULT = { allowTrailingComma: !1 };
	})(ct ||= {});
})), ut = t((() => {
	tt(), lt();
}));
//#endregion
//#region ../../node_modules/.pnpm/jsonc-parser@3.3.1/node_modules/jsonc-parser/lib/esm/main.js
function dt(e, t, n) {
	return Xe(e, t, n);
}
var ft, pt, mt, ht, gt, _t, vt, yt, bt = t((() => {
	tt(), ut(), Ge(), lt(), ft = Be, (function(e) {
		e[e.None = 0] = "None", e[e.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 4] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 6] = "InvalidCharacter";
	})(pt ||= {}), (function(e) {
		e[e.OpenBraceToken = 1] = "OpenBraceToken", e[e.CloseBraceToken = 2] = "CloseBraceToken", e[e.OpenBracketToken = 3] = "OpenBracketToken", e[e.CloseBracketToken = 4] = "CloseBracketToken", e[e.CommaToken = 5] = "CommaToken", e[e.ColonToken = 6] = "ColonToken", e[e.NullKeyword = 7] = "NullKeyword", e[e.TrueKeyword = 8] = "TrueKeyword", e[e.FalseKeyword = 9] = "FalseKeyword", e[e.StringLiteral = 10] = "StringLiteral", e[e.NumericLiteral = 11] = "NumericLiteral", e[e.LineCommentTrivia = 12] = "LineCommentTrivia", e[e.BlockCommentTrivia = 13] = "BlockCommentTrivia", e[e.LineBreakTrivia = 14] = "LineBreakTrivia", e[e.Trivia = 15] = "Trivia", e[e.Unknown = 16] = "Unknown", e[e.EOF = 17] = "EOF";
	})(mt ||= {}), ht = nt, gt = ot, _t = rt, vt = it, (function(e) {
		e[e.InvalidSymbol = 1] = "InvalidSymbol", e[e.InvalidNumberFormat = 2] = "InvalidNumberFormat", e[e.PropertyNameExpected = 3] = "PropertyNameExpected", e[e.ValueExpected = 4] = "ValueExpected", e[e.ColonExpected = 5] = "ColonExpected", e[e.CommaExpected = 6] = "CommaExpected", e[e.CloseBraceExpected = 7] = "CloseBraceExpected", e[e.CloseBracketExpected = 8] = "CloseBracketExpected", e[e.EndOfFileExpected = 9] = "EndOfFileExpected", e[e.InvalidCommentToken = 10] = "InvalidCommentToken", e[e.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 14] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 16] = "InvalidCharacter";
	})(yt ||= {});
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/objects.js
function xt(e, t) {
	if (e === t) return !0;
	if (e == null || t == null || typeof e != typeof t || typeof e != "object" || Array.isArray(e) !== Array.isArray(t)) return !1;
	let n, r;
	if (Array.isArray(e)) {
		if (e.length !== t.length) return !1;
		for (n = 0; n < e.length; n++) if (!xt(e[n], t[n])) return !1;
	} else {
		let i = [];
		for (r in e) i.push(r);
		i.sort();
		let a = [];
		for (r in t) a.push(r);
		if (a.sort(), !xt(i, a)) return !1;
		for (n = 0; n < i.length; n++) if (!xt(e[i[n]], t[i[n]])) return !1;
	}
	return !0;
}
function I(e) {
	return typeof e == "number";
}
function St(e) {
	return e !== void 0;
}
function Ct(e) {
	return typeof e == "boolean";
}
function wt(e) {
	return typeof e == "string";
}
function Tt(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var Et = t((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/strings.js
function Dt(e, t) {
	if (e.length < t.length) return !1;
	for (let n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function Ot(e, t) {
	let n = e.length - t.length;
	return n > 0 ? e.lastIndexOf(t) === n : n === 0 && e === t;
}
function kt(e) {
	let t = "";
	Dt(e, "(?i)") && (e = e.substring(4), t = "i");
	try {
		return new RegExp(e, t + "u");
	} catch {
		try {
			return new RegExp(e, t);
		} catch {
			return;
		}
	}
}
function At(e) {
	let t = 0;
	for (let n = 0; n < e.length; n++) {
		t++;
		let r = e.charCodeAt(n);
		55296 <= r && r <= 56319 && n++;
	}
	return t;
}
var jt = t((() => {})), Mt, Nt, Pt, Ft, L, R, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, z, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, B, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, V, ar = t((() => {
	(function(e) {
		function t(e) {
			return typeof e == "string";
		}
		e.is = t;
	})(Mt ||= {}), (function(e) {
		function t(e) {
			return typeof e == "string";
		}
		e.is = t;
	})(Nt ||= {}), (function(e) {
		e.MIN_VALUE = -2147483648, e.MAX_VALUE = 2147483647;
		function t(t) {
			return typeof t == "number" && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
		}
		e.is = t;
	})(Pt ||= {}), (function(e) {
		e.MIN_VALUE = 0, e.MAX_VALUE = 2147483647;
		function t(t) {
			return typeof t == "number" && e.MIN_VALUE <= t && t <= e.MAX_VALUE;
		}
		e.is = t;
	})(Ft ||= {}), (function(e) {
		function t(e, t) {
			return e === Number.MAX_VALUE && (e = Ft.MAX_VALUE), t === Number.MAX_VALUE && (t = Ft.MAX_VALUE), {
				line: e,
				character: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && V.uinteger(t.line) && V.uinteger(t.character);
		}
		e.is = n;
	})(L ||= {}), (function(e) {
		function t(e, t, n, r) {
			if (V.uinteger(e) && V.uinteger(t) && V.uinteger(n) && V.uinteger(r)) return {
				start: L.create(e, t),
				end: L.create(n, r)
			};
			if (L.is(e) && L.is(t)) return {
				start: e,
				end: t
			};
			throw Error(`Range#create called with invalid arguments[${e}, ${t}, ${n}, ${r}]`);
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && L.is(t.start) && L.is(t.end);
		}
		e.is = n;
	})(R ||= {}), (function(e) {
		function t(e, t) {
			return {
				uri: e,
				range: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && R.is(t.range) && (V.string(t.uri) || V.undefined(t.uri));
		}
		e.is = n;
	})(It ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				targetUri: e,
				targetRange: t,
				targetSelectionRange: n,
				originSelectionRange: r
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && R.is(t.targetRange) && V.string(t.targetUri) && R.is(t.targetSelectionRange) && (R.is(t.originSelectionRange) || V.undefined(t.originSelectionRange));
		}
		e.is = n;
	})(Lt ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				red: e,
				green: t,
				blue: n,
				alpha: r
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && V.numberRange(t.red, 0, 1) && V.numberRange(t.green, 0, 1) && V.numberRange(t.blue, 0, 1) && V.numberRange(t.alpha, 0, 1);
		}
		e.is = n;
	})(Rt ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				color: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && R.is(t.range) && Rt.is(t.color);
		}
		e.is = n;
	})(zt ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				label: e,
				textEdit: t,
				additionalTextEdits: n
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && V.string(t.label) && (V.undefined(t.textEdit) || Jt.is(t)) && (V.undefined(t.additionalTextEdits) || V.typedArray(t.additionalTextEdits, Jt.is));
		}
		e.is = n;
	})(Bt ||= {}), (function(e) {
		e.Comment = "comment", e.Imports = "imports", e.Region = "region";
	})(Vt ||= {}), (function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				startLine: e,
				endLine: t
			};
			return V.defined(n) && (o.startCharacter = n), V.defined(r) && (o.endCharacter = r), V.defined(i) && (o.kind = i), V.defined(a) && (o.collapsedText = a), o;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && V.uinteger(t.startLine) && V.uinteger(t.startLine) && (V.undefined(t.startCharacter) || V.uinteger(t.startCharacter)) && (V.undefined(t.endCharacter) || V.uinteger(t.endCharacter)) && (V.undefined(t.kind) || V.string(t.kind));
		}
		e.is = n;
	})(Ht ||= {}), (function(e) {
		function t(e, t) {
			return {
				location: e,
				message: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && It.is(t.location) && V.string(t.message);
		}
		e.is = n;
	})(Ut ||= {}), (function(e) {
		e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
	})(z ||= {}), (function(e) {
		e.Unnecessary = 1, e.Deprecated = 2;
	})(Wt ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return V.objectLiteral(t) && V.string(t.href);
		}
		e.is = t;
	})(Gt ||= {}), (function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				range: e,
				message: t
			};
			return V.defined(n) && (o.severity = n), V.defined(r) && (o.code = r), V.defined(i) && (o.source = i), V.defined(a) && (o.relatedInformation = a), o;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && R.is(t.range) && (V.string(t.message) || dn.is(t.message)) && (V.number(t.severity) || V.undefined(t.severity)) && (V.integer(t.code) || V.string(t.code) || V.undefined(t.code)) && (V.undefined(t.codeDescription) || V.string(t.codeDescription?.href)) && (V.string(t.source) || V.undefined(t.source)) && (V.undefined(t.relatedInformation) || V.typedArray(t.relatedInformation, Ut.is));
		}
		e.is = n;
		function r(e) {
			return V.string(e.message);
		}
		e.is3_17 = r;
		function i(e) {
			if (V.string(e.message)) return e.message;
			if (dn.is(e.message)) return e.message.value;
			throw Error(`Unknown message type ${typeof e.message}`);
		}
		e.getMessageString = i;
	})(Kt ||= {}), (function(e) {
		function t(e, t, ...n) {
			let r = {
				title: e,
				command: t
			};
			return V.defined(n) && n.length > 0 && (r.arguments = n), r;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && V.string(t.title) && (t.tooltip === void 0 || V.string(t.tooltip)) && V.string(t.command);
		}
		e.is = n;
	})(qt ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				newText: t
			};
		}
		e.replace = t;
		function n(e, t) {
			return {
				range: {
					start: e,
					end: e
				},
				newText: t
			};
		}
		e.insert = n;
		function r(e) {
			return {
				range: e,
				newText: ""
			};
		}
		e.del = r;
		function i(e) {
			let t = e;
			return V.objectLiteral(t) && V.string(t.newText) && R.is(t.range);
		}
		e.is = i;
	})(Jt ||= {}), (function(e) {
		function t(e, t, n) {
			let r = { label: e };
			return t !== void 0 && (r.needsConfirmation = t), n !== void 0 && (r.description = n), r;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && V.string(t.label) && (V.boolean(t.needsConfirmation) || t.needsConfirmation === void 0) && (V.string(t.description) || t.description === void 0);
		}
		e.is = n;
	})(Yt ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return V.string(t);
		}
		e.is = t;
	})(Xt ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				range: e,
				newText: t,
				annotationId: n
			};
		}
		e.replace = t;
		function n(e, t, n) {
			return {
				range: {
					start: e,
					end: e
				},
				newText: t,
				annotationId: n
			};
		}
		e.insert = n;
		function r(e, t) {
			return {
				range: e,
				newText: "",
				annotationId: t
			};
		}
		e.del = r;
		function i(e) {
			let t = e;
			return Jt.is(t) && (Yt.is(t.annotationId) || Xt.is(t.annotationId));
		}
		e.is = i;
	})(Zt ||= {}), (function(e) {
		function t(e, t) {
			return {
				textDocument: e,
				edits: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && sn.is(t.textDocument) && Array.isArray(t.edits);
		}
		e.is = n;
	})(Qt ||= {}), (function(e) {
		function t(e, t, n) {
			let r = {
				kind: "create",
				uri: e
			};
			return t !== void 0 && (t.overwrite !== void 0 || t.ignoreIfExists !== void 0) && (r.options = t), n !== void 0 && (r.annotationId = n), r;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "create" && V.string(t.uri) && (t.options === void 0 || (t.options.overwrite === void 0 || V.boolean(t.options.overwrite)) && (t.options.ignoreIfExists === void 0 || V.boolean(t.options.ignoreIfExists))) && (t.annotationId === void 0 || Xt.is(t.annotationId));
		}
		e.is = n;
	})($t ||= {}), (function(e) {
		function t(e, t, n, r) {
			let i = {
				kind: "rename",
				oldUri: e,
				newUri: t
			};
			return n !== void 0 && (n.overwrite !== void 0 || n.ignoreIfExists !== void 0) && (i.options = n), r !== void 0 && (i.annotationId = r), i;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "rename" && V.string(t.oldUri) && V.string(t.newUri) && (t.options === void 0 || (t.options.overwrite === void 0 || V.boolean(t.options.overwrite)) && (t.options.ignoreIfExists === void 0 || V.boolean(t.options.ignoreIfExists))) && (t.annotationId === void 0 || Xt.is(t.annotationId));
		}
		e.is = n;
	})(en ||= {}), (function(e) {
		function t(e, t, n) {
			let r = {
				kind: "delete",
				uri: e
			};
			return t !== void 0 && (t.recursive !== void 0 || t.ignoreIfNotExists !== void 0) && (r.options = t), n !== void 0 && (r.annotationId = n), r;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t && t.kind === "delete" && V.string(t.uri) && (t.options === void 0 || (t.options.recursive === void 0 || V.boolean(t.options.recursive)) && (t.options.ignoreIfNotExists === void 0 || V.boolean(t.options.ignoreIfNotExists))) && (t.annotationId === void 0 || Xt.is(t.annotationId));
		}
		e.is = n;
	})(tn ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return t && (t.changes !== void 0 || t.documentChanges !== void 0) && (t.documentChanges === void 0 || t.documentChanges.every((e) => V.string(e.kind) ? $t.is(e) || en.is(e) || tn.is(e) : Qt.is(e)));
		}
		e.is = t;
	})(nn ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return V.objectLiteral(t) && R.is(t.range) && Xn.isSnippet(t.snippet) && (t.annotationId === void 0 || Yt.is(t.annotationId) || Xt.is(t.annotationId));
		}
		e.is = t;
	})(rn ||= {}), (function(e) {
		function t(e) {
			return { uri: e };
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && V.string(t.uri);
		}
		e.is = n;
	})(an ||= {}), (function(e) {
		function t(e, t) {
			return {
				uri: e,
				version: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && V.string(t.uri) && V.integer(t.version);
		}
		e.is = n;
	})(on ||= {}), (function(e) {
		function t(e, t) {
			return {
				uri: e,
				version: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && V.string(t.uri) && (t.version === null || V.integer(t.version));
		}
		e.is = n;
	})(sn ||= {}), (function(e) {
		e.ABAP = "abap", e.WindowsBat = "bat", e.BibTeX = "bibtex", e.Clojure = "clojure", e.Coffeescript = "coffeescript", e.C = "c", e.CPP = "cpp", e.CSharp = "csharp", e.CSS = "css", e.D = "d", e.Delphi = "pascal", e.Diff = "diff", e.Dart = "dart", e.Dockerfile = "dockerfile", e.Elixir = "elixir", e.Erlang = "erlang", e.FSharp = "fsharp", e.GitCommit = "git-commit", e.GitRebase = "git-rebase", e.Go = "go", e.Groovy = "groovy", e.Handlebars = "handlebars", e.Haskell = "haskell", e.HTML = "html", e.Ini = "ini", e.Java = "java", e.JavaScript = "javascript", e.JavaScriptReact = "javascriptreact", e.JSON = "json", e.LaTeX = "latex", e.Less = "less", e.Lua = "lua", e.Makefile = "makefile", e.Markdown = "markdown", e.ObjectiveC = "objective-c", e.ObjectiveCPP = "objective-cpp", e.Pascal = "pascal", e.Perl = "perl", e.Perl6 = "perl6", e.PHP = "php", e.Plaintext = "plaintext", e.Powershell = "powershell", e.Pug = "jade", e.Python = "python", e.R = "r", e.Razor = "razor", e.Ruby = "ruby", e.Rust = "rust", e.SCSS = "scss", e.SASS = "sass", e.Scala = "scala", e.ShaderLab = "shaderlab", e.ShellScript = "shellscript", e.SQL = "sql", e.Swift = "swift", e.TypeScript = "typescript", e.TypeScriptReact = "typescriptreact", e.TeX = "tex", e.VisualBasic = "vb", e.XML = "xml", e.XSL = "xsl", e.YAML = "yaml";
	})(cn ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				uri: e,
				languageId: t,
				version: n,
				text: r
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && V.string(t.uri) && V.string(t.languageId) && V.integer(t.version) && V.string(t.text);
		}
		e.is = n;
	})(ln ||= {}), (function(e) {
		e.PlainText = "plaintext", e.Markdown = "markdown";
		function t(t) {
			let n = t;
			return n === e.PlainText || n === e.Markdown;
		}
		e.is = t;
	})(un ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return V.objectLiteral(e) && un.is(t.kind) && V.string(t.value);
		}
		e.is = t;
	})(dn ||= {}), (function(e) {
		e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
	})(fn ||= {}), (function(e) {
		e.PlainText = 1, e.Snippet = 2;
	})(B ||= {}), (function(e) {
		e.Deprecated = 1;
	})(pn ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				newText: e,
				insert: t,
				replace: n
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t && V.string(t.newText) && R.is(t.insert) && R.is(t.replace);
		}
		e.is = n;
	})(mn ||= {}), (function(e) {
		e.asIs = 1, e.adjustIndentation = 2;
	})(hn ||= {}), (function(e) {
		e.Replace = 1, e.Merge = 2;
	})(gn ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return t && (V.string(t.detail) || t.detail === void 0) && (V.string(t.description) || t.description === void 0);
		}
		e.is = t;
	})(_n ||= {}), (function(e) {
		function t(e) {
			return { label: e };
		}
		e.create = t;
	})(vn ||= {}), (function(e) {
		function t(e, t) {
			return {
				items: e || [],
				isIncomplete: !!t
			};
		}
		e.create = t;
	})(yn ||= {}), (function(e) {
		function t(e) {
			return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
		}
		e.fromPlainText = t;
		function n(e) {
			let t = e;
			return V.string(t) || V.objectLiteral(t) && V.string(t.language) && V.string(t.value);
		}
		e.is = n;
	})(bn ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return !!t && V.objectLiteral(t) && (dn.is(t.contents) || bn.is(t.contents) || V.typedArray(t.contents, bn.is)) && (e.range === void 0 || R.is(e.range));
		}
		e.is = t;
	})(xn ||= {}), (function(e) {
		function t(e, t) {
			return t ? {
				label: e,
				documentation: t
			} : { label: e };
		}
		e.create = t;
	})(Sn ||= {}), (function(e) {
		function t(e, t, ...n) {
			let r = { label: e };
			return V.defined(t) && (r.documentation = t), r.parameters = V.defined(n) ? n : [], r;
		}
		e.create = t;
	})(Cn ||= {}), (function(e) {
		e.Text = 1, e.Read = 2, e.Write = 3;
	})(wn ||= {}), (function(e) {
		function t(e, t) {
			let n = { range: e };
			return V.number(t) && (n.kind = t), n;
		}
		e.create = t;
	})(Tn ||= {}), (function(e) {
		e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
	})(En ||= {}), (function(e) {
		e.Deprecated = 1;
	})(Dn ||= {}), (function(e) {
		function t(e, t, n, r, i) {
			let a = {
				name: e,
				kind: t,
				location: {
					uri: r,
					range: n
				}
			};
			return i && (a.containerName = i), a;
		}
		e.create = t;
	})(On ||= {}), (function(e) {
		function t(e, t, n, r) {
			return r === void 0 ? {
				name: e,
				kind: t,
				location: { uri: n }
			} : {
				name: e,
				kind: t,
				location: {
					uri: n,
					range: r
				}
			};
		}
		e.create = t;
	})(kn ||= {}), (function(e) {
		function t(e, t, n, r, i, a) {
			let o = {
				name: e,
				detail: t,
				kind: n,
				range: r,
				selectionRange: i
			};
			return a !== void 0 && (o.children = a), o;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t && V.string(t.name) && V.number(t.kind) && R.is(t.range) && R.is(t.selectionRange) && (t.detail === void 0 || V.string(t.detail)) && (t.deprecated === void 0 || V.boolean(t.deprecated)) && (t.children === void 0 || Array.isArray(t.children)) && (t.tags === void 0 || Array.isArray(t.tags));
		}
		e.is = n;
	})(An ||= {}), (function(e) {
		e.Empty = "", e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorMove = "refactor.move", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports", e.SourceFixAll = "source.fixAll", e.Notebook = "notebook";
	})(jn ||= {}), (function(e) {
		e.Invoked = 1, e.Automatic = 2;
	})(Mn ||= {}), (function(e) {
		function t(e, t, n) {
			let r = { diagnostics: e };
			return t != null && (r.only = t), n != null && (r.triggerKind = n), r;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && V.typedArray(t.diagnostics, Kt.is) && (t.only === void 0 || V.typedArray(t.only, V.string)) && (t.triggerKind === void 0 || t.triggerKind === Mn.Invoked || t.triggerKind === Mn.Automatic);
		}
		e.is = n;
	})(Nn ||= {}), (function(e) {
		e.LLMGenerated = 1;
		function t(t) {
			return V.defined(t) && t === e.LLMGenerated;
		}
		e.is = t;
	})(Pn ||= {}), (function(e) {
		function t(e, t, n) {
			let r = { title: e }, i = !0;
			return typeof t == "string" ? (i = !1, r.kind = t) : qt.is(t) ? r.command = t : r.edit = t, i && n !== void 0 && (r.kind = n), r;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t && V.string(t.title) && (t.diagnostics === void 0 || V.typedArray(t.diagnostics, Kt.is)) && (t.kind === void 0 || V.string(t.kind)) && (t.edit !== void 0 || t.command !== void 0) && (t.command === void 0 || qt.is(t.command)) && (t.isPreferred === void 0 || V.boolean(t.isPreferred)) && (t.edit === void 0 || nn.is(t.edit)) && (t.tags === void 0 || V.typedArray(t.tags, Pn.is));
		}
		e.is = n;
	})(Fn ||= {}), (function(e) {
		function t(e, t) {
			let n = { range: e };
			return V.defined(t) && (n.data = t), n;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && R.is(t.range) && (V.undefined(t.command) || qt.is(t.command));
		}
		e.is = n;
	})(In ||= {}), (function(e) {
		function t(e, t) {
			return {
				tabSize: e,
				insertSpaces: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && V.uinteger(t.tabSize) && V.boolean(t.insertSpaces);
		}
		e.is = n;
	})(Ln ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				range: e,
				target: t,
				data: n
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && R.is(t.range) && (V.undefined(t.target) || V.string(t.target));
		}
		e.is = n;
	})(Rn ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				parent: t
			};
		}
		e.create = t;
		function n(t) {
			let n = t;
			return V.objectLiteral(n) && R.is(n.range) && (n.parent === void 0 || e.is(n.parent));
		}
		e.is = n;
	})(zn ||= {}), (function(e) {
		e.namespace = "namespace", e.type = "type", e.class = "class", e.enum = "enum", e.interface = "interface", e.struct = "struct", e.typeParameter = "typeParameter", e.parameter = "parameter", e.variable = "variable", e.property = "property", e.enumMember = "enumMember", e.event = "event", e.function = "function", e.method = "method", e.macro = "macro", e.keyword = "keyword", e.modifier = "modifier", e.comment = "comment", e.string = "string", e.number = "number", e.regexp = "regexp", e.operator = "operator", e.decorator = "decorator", e.label = "label";
	})(Bn ||= {}), (function(e) {
		e.declaration = "declaration", e.definition = "definition", e.readonly = "readonly", e.static = "static", e.deprecated = "deprecated", e.abstract = "abstract", e.async = "async", e.modification = "modification", e.documentation = "documentation", e.defaultLibrary = "defaultLibrary";
	})(Vn ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return V.objectLiteral(t) && (t.resultId === void 0 || typeof t.resultId == "string") && Array.isArray(t.data) && (t.data.length === 0 || typeof t.data[0] == "number");
		}
		e.is = t;
	})(Hn ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				text: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t != null && R.is(t.range) && V.string(t.text);
		}
		e.is = n;
	})(Un ||= {}), (function(e) {
		function t(e, t, n) {
			return {
				range: e,
				variableName: t,
				caseSensitiveLookup: n
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t != null && R.is(t.range) && V.boolean(t.caseSensitiveLookup) && (V.string(t.variableName) || t.variableName === void 0);
		}
		e.is = n;
	})(Wn ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				expression: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return t != null && R.is(t.range) && (V.string(t.expression) || t.expression === void 0);
		}
		e.is = n;
	})(Gn ||= {}), (function(e) {
		function t(e, t) {
			return {
				frameId: e,
				stoppedLocation: t
			};
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.defined(t) && R.is(e.stoppedLocation);
		}
		e.is = n;
	})(Kn ||= {}), (function(e) {
		e.Type = 1, e.Parameter = 2;
		function t(e) {
			return e === 1 || e === 2;
		}
		e.is = t;
	})(qn ||= {}), (function(e) {
		function t(e) {
			return { value: e };
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && (t.tooltip === void 0 || V.string(t.tooltip) || dn.is(t.tooltip)) && (t.location === void 0 || It.is(t.location)) && (t.command === void 0 || qt.is(t.command));
		}
		e.is = n;
	})(Jn ||= {}), (function(e) {
		function t(e, t, n) {
			let r = {
				position: e,
				label: t
			};
			return n !== void 0 && (r.kind = n), r;
		}
		e.create = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && L.is(t.position) && (V.string(t.label) || V.typedArray(t.label, Jn.is)) && (t.kind === void 0 || qn.is(t.kind)) && t.textEdits === void 0 || V.typedArray(t.textEdits, Jt.is) && (t.tooltip === void 0 || V.string(t.tooltip) || dn.is(t.tooltip)) && (t.paddingLeft === void 0 || V.boolean(t.paddingLeft)) && (t.paddingRight === void 0 || V.boolean(t.paddingRight));
		}
		e.is = n;
	})(Yn ||= {}), (function(e) {
		function t(e) {
			return {
				kind: "snippet",
				value: e
			};
		}
		e.createSnippet = t;
		function n(e) {
			let t = e;
			return V.objectLiteral(t) && t.kind === "snippet" && V.string(t.value);
		}
		e.isSnippet = n;
	})(Xn ||= {}), (function(e) {
		function t(e, t, n, r) {
			return {
				insertText: e,
				filterText: t,
				range: n,
				command: r
			};
		}
		e.create = t;
	})(Zn ||= {}), (function(e) {
		function t(e) {
			return { items: e };
		}
		e.create = t;
	})(Qn ||= {}), (function(e) {
		e.Invoked = 1, e.Automatic = 2;
	})($n ||= {}), (function(e) {
		function t(e, t) {
			return {
				range: e,
				text: t
			};
		}
		e.create = t;
	})(er ||= {}), (function(e) {
		function t(e, t) {
			return {
				triggerKind: e,
				selectedCompletionInfo: t
			};
		}
		e.create = t;
	})(tr ||= {}), (function(e) {
		function t(e) {
			let t = e;
			return V.objectLiteral(t) && Nt.is(t.uri) && V.string(t.name);
		}
		e.is = t;
	})(nr ||= {}), (function(e) {
		function t(e, t, n, r) {
			return new ir(e, t, n, r);
		}
		e.create = t;
		function n(e) {
			let t = e;
			return !!(V.defined(t) && V.string(t.uri) && (V.undefined(t.languageId) || V.string(t.languageId)) && V.uinteger(t.lineCount) && V.func(t.getText) && V.func(t.positionAt) && V.func(t.offsetAt));
		}
		e.is = n;
		function r(e, t) {
			let n = e.getText(), r = i(t, (e, t) => {
				let n = e.range.start.line - t.range.start.line;
				return n === 0 ? e.range.start.character - t.range.start.character : n;
			}), a = n.length;
			for (let t = r.length - 1; t >= 0; t--) {
				let i = r[t], o = e.offsetAt(i.range.start), s = e.offsetAt(i.range.end);
				if (s <= a) n = n.substring(0, o) + i.newText + n.substring(s, n.length);
				else throw Error("Overlapping edit");
				a = o;
			}
			return n;
		}
		e.applyEdits = r;
		function i(e, t) {
			if (e.length <= 1) return e;
			let n = e.length / 2 | 0, r = e.slice(0, n), a = e.slice(n);
			i(r, t), i(a, t);
			let o = 0, s = 0, c = 0;
			for (; o < r.length && s < a.length;) t(r[o], a[s]) <= 0 ? e[c++] = r[o++] : e[c++] = a[s++];
			for (; o < r.length;) e[c++] = r[o++];
			for (; s < a.length;) e[c++] = a[s++];
			return e;
		}
	})(rr ||= {}), ir = class {
		constructor(e, t, n, r) {
			this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = void 0;
		}
		get uri() {
			return this._uri;
		}
		get languageId() {
			return this._languageId;
		}
		get version() {
			return this._version;
		}
		getText(e) {
			if (e) {
				let t = this.offsetAt(e.start), n = this.offsetAt(e.end);
				return this._content.substring(t, n);
			}
			return this._content;
		}
		update(e, t) {
			this._content = e.text, this._version = t, this._lineOffsets = void 0;
		}
		getLineOffsets() {
			if (this._lineOffsets === void 0) {
				let e = [], t = this._content, n = !0;
				for (let r = 0; r < t.length; r++) {
					n &&= (e.push(r), !1);
					let i = t.charAt(r);
					n = i === "\r" || i === "\n", i === "\r" && r + 1 < t.length && t.charAt(r + 1) === "\n" && r++;
				}
				n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
			}
			return this._lineOffsets;
		}
		positionAt(e) {
			e = Math.max(Math.min(e, this._content.length), 0);
			let t = this.getLineOffsets(), n = 0, r = t.length;
			if (r === 0) return L.create(0, e);
			for (; n < r;) {
				let i = Math.floor((n + r) / 2);
				t[i] > e ? r = i : n = i + 1;
			}
			let i = n - 1;
			return L.create(i, e - t[i]);
		}
		offsetAt(e) {
			let t = this.getLineOffsets();
			if (e.line >= t.length) return this._content.length;
			if (e.line < 0) return 0;
			let n = t[e.line], r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
			return Math.max(Math.min(n + e.character, r), n);
		}
		get lineCount() {
			return this.getLineOffsets().length;
		}
	}, (function(e) {
		let t = Object.prototype.toString;
		function n(e) {
			return e !== void 0;
		}
		e.defined = n;
		function r(e) {
			return e === void 0;
		}
		e.undefined = r;
		function i(e) {
			return e === !0 || e === !1;
		}
		e.boolean = i;
		function a(e) {
			return t.call(e) === "[object String]";
		}
		e.string = a;
		function o(e) {
			return t.call(e) === "[object Number]";
		}
		e.number = o;
		function s(e, n, r) {
			return t.call(e) === "[object Number]" && n <= e && e <= r;
		}
		e.numberRange = s;
		function c(e) {
			return t.call(e) === "[object Number]" && -2147483648 <= e && e <= 2147483647;
		}
		e.integer = c;
		function l(e) {
			return t.call(e) === "[object Number]" && 0 <= e && e <= 2147483647;
		}
		e.uinteger = l;
		function u(e) {
			return t.call(e) === "[object Function]";
		}
		e.func = u;
		function d(e) {
			return typeof e == "object" && !!e;
		}
		e.objectLiteral = d;
		function f(e, t) {
			return Array.isArray(e) && e.every(t);
		}
		e.typedArray = f;
	})(V ||= {});
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/jsonLanguageTypes.js
function or(e) {
	return e >= H.SchemaResolveError;
}
var H, sr, cr, lr = t((() => {
	ar(), N(), (function(e) {
		e[e.Undefined = 0] = "Undefined", e[e.EnumValueMismatch = 1] = "EnumValueMismatch", e[e.Deprecated = 2] = "Deprecated", e[e.UnexpectedEndOfComment = 257] = "UnexpectedEndOfComment", e[e.UnexpectedEndOfString = 258] = "UnexpectedEndOfString", e[e.UnexpectedEndOfNumber = 259] = "UnexpectedEndOfNumber", e[e.InvalidUnicode = 260] = "InvalidUnicode", e[e.InvalidEscapeCharacter = 261] = "InvalidEscapeCharacter", e[e.InvalidCharacter = 262] = "InvalidCharacter", e[e.PropertyExpected = 513] = "PropertyExpected", e[e.CommaExpected = 514] = "CommaExpected", e[e.ColonExpected = 515] = "ColonExpected", e[e.ValueExpected = 516] = "ValueExpected", e[e.CommaOrCloseBacketExpected = 517] = "CommaOrCloseBacketExpected", e[e.CommaOrCloseBraceExpected = 518] = "CommaOrCloseBraceExpected", e[e.TrailingComma = 519] = "TrailingComma", e[e.DuplicateKey = 520] = "DuplicateKey", e[e.CommentNotPermitted = 521] = "CommentNotPermitted", e[e.PropertyKeysMustBeDoublequoted = 528] = "PropertyKeysMustBeDoublequoted", e[e.SchemaUnsupportedFeature = 769] = "SchemaUnsupportedFeature", e[e.SchemaResolveError = 65536] = "SchemaResolveError";
	})(H ||= {}), (function(e) {
		e[e.v3 = 3] = "v3", e[e.v4 = 4] = "v4", e[e.v6 = 6] = "v6", e[e.v7 = 7] = "v7", e[e.v2019_09 = 19] = "v2019_09", e[e.v2020_12 = 20] = "v2020_12";
	})(sr ||= {}), (function(e) {
		e.LATEST = { textDocument: { completion: { completionItem: {
			documentationFormat: [un.Markdown, un.PlainText],
			commitCharactersSupport: !0,
			labelDetailsSupport: !0
		} } } };
	})(cr ||= {});
}));
//#endregion
//#region ../../node_modules/.pnpm/@vscode+l10n@0.0.18/node_modules/@vscode/l10n/dist/browser.js
function U(...e) {
	let t = e[0], n, r, i;
	if (typeof t == "string") n = t, r = t, e.splice(0, 1), i = !e || typeof e[0] != "object" ? e : e[0];
	else if (t instanceof Array) {
		let n = e.slice(1);
		if (t.length !== n.length + 1) throw Error("expected a string as the first argument to l10n.t");
		let r = t[0];
		for (let e = 1; e < t.length; e++) r += `{${e - 1}}` + t[e];
		return U(r, ...n);
	} else r = t.message, n = r, t.comment && t.comment.length > 0 && (n += `/${Array.isArray(t.comment) ? t.comment.join("") : t.comment}`), i = t.args ?? {};
	let a = dr?.[n];
	return a ? typeof a == "string" ? ur(a, i) : a.comment ? ur(a.message, i) : ur(r, i) : ur(r, i);
}
function ur(e, t) {
	return Object.keys(t).length === 0 ? e : e.replace(fr, (e, n) => t[n] ?? e);
}
var dr, fr, pr = t((() => {
	fr = /{([^}]+)}/g;
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/parser/jsonParser.js
function W(e) {
	return Ct(e) ? e ? {} : { not: {} } : e;
}
function mr(e) {
	e.startsWith(Mr) && (e = Nr + e.substring(Mr.length));
	try {
		return o.parse(e).toString(!0);
	} catch {
		return e;
	}
}
function hr(e) {
	return Pr[mr(e)] ?? void 0;
}
function gr(e, t = [], n = []) {
	return new Rr(e, t, n);
}
function _r(e) {
	return vt(e);
}
function vr(e) {
	return _t(e);
}
function yr(e, t, n = !1) {
	return t >= e.offset && t < e.offset + e.length || n && t === e.offset + e.length;
}
function br(e, t = sr.v2020_12) {
	let n = e.$schema;
	return n ? hr(n) ?? t : t;
}
function G(e, t, n, r, i) {
	if (!e || !r.include(e)) return;
	if (e.type === "property") return G(e.valueNode, t, n, r, i);
	let a = e;
	switch (o(), a.type) {
		case "object":
			d(a);
			break;
		case "array":
			u(a);
			break;
		case "string":
			l(a);
			break;
		case "number": c(a);
	}
	r.add({
		node: a,
		schema: t
	});
	function o() {
		function e(e) {
			return a.type === e || e === "integer" && a.type === "number" && a.isInteger;
		}
		if (Array.isArray(t.type) ? t.type.some(e) || n.problems.push({
			location: {
				offset: a.offset,
				length: a.length
			},
			message: t.errorMessage || U("Incorrect type. Expected one of {0}.", t.type.join(", "))
		}) : t.type && (e(t.type) || n.problems.push({
			location: {
				offset: a.offset,
				length: a.length
			},
			message: t.errorMessage || U("Incorrect type. Expected \"{0}\".", t.type)
		})), Array.isArray(t.allOf)) for (let e of t.allOf) {
			let t = new K(), o = r.newSub();
			G(a, W(e), t, o, i), n.merge(t), r.merge(o);
		}
		let o = W(t.not);
		if (o) {
			let e = new K(), s = r.newSub();
			G(a, o, e, s, i), e.hasProblems() || n.problems.push({
				location: {
					offset: a.offset,
					length: a.length
				},
				message: t.errorMessage || U("Matches a schema that is not allowed.")
			});
			for (let e of s.schemas) e.inverted = !e.inverted, r.add(e);
		}
		let c = (e, t) => {
			let o = [], c = s(e) ?? e, l;
			for (let e of c) {
				let n = W(e), s = new K(), c = r.newSub();
				if (G(a, n, s, c, i), s.hasProblems() || o.push(n), !l) l = {
					schema: n,
					validationResult: s,
					matchingSchemas: c
				};
				else if (!t && !s.hasProblems() && !l.validationResult.hasProblems()) l.matchingSchemas.merge(c), l.validationResult.propertiesMatches += s.propertiesMatches, l.validationResult.propertiesValueMatches += s.propertiesValueMatches, l.validationResult.mergeProcessedProperties(s);
				else {
					let e = s.compare(l.validationResult);
					e > 0 ? l = {
						schema: n,
						validationResult: s,
						matchingSchemas: c
					} : e === 0 && (l.matchingSchemas.merge(c), l.validationResult.mergeEnumValues(s));
				}
			}
			return o.length > 1 && t && n.problems.push({
				location: {
					offset: a.offset,
					length: 1
				},
				message: U("Matches multiple schemas when only one must validate.")
			}), l && (l.validationResult.updateEnumMismatchProblemMessages(), n.merge(l.validationResult), r.merge(l.matchingSchemas)), o.length;
		};
		Array.isArray(t.anyOf) && c(t.anyOf, !1), Array.isArray(t.oneOf) && c(t.oneOf, !0);
		let l = (e) => {
			let t = new K(), o = r.newSub();
			G(a, W(e), t, o, i), n.merge(t), r.merge(o);
		}, u = (e, t, o) => {
			let s = W(e), c = new K(), u = r.newSub();
			G(a, s, c, u, i), r.merge(u), n.mergeProcessedProperties(c), c.hasProblems() ? o && l(o) : t && l(t);
		}, d = W(t.if);
		if (d && u(d, W(t.then), W(t.else)), Array.isArray(t.enum)) {
			let e = _r(a), r = !1;
			for (let n of t.enum) if (xt(e, n)) {
				r = !0;
				break;
			}
			n.enumValues = t.enum, n.enumValueMatch = r, r || n.problems.push({
				location: {
					offset: a.offset,
					length: a.length
				},
				code: H.EnumValueMismatch,
				message: t.errorMessage || U("Value is not accepted. Valid values: {0}.", t.enum.map((e) => JSON.stringify(e)).join(", "))
			});
		}
		St(t.const) && (xt(_r(a), t.const) ? n.enumValueMatch = !0 : (n.problems.push({
			location: {
				offset: a.offset,
				length: a.length
			},
			code: H.EnumValueMismatch,
			message: t.errorMessage || U("Value must be {0}.", JSON.stringify(t.const))
		}), n.enumValueMatch = !1), n.enumValues = [t.const]);
		let f = t.deprecationMessage;
		if (f || t.deprecated) {
			f ||= U("Value is deprecated");
			let e = a.parent?.type === "property" ? a.parent : a;
			n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				severity: z.Warning,
				message: f,
				code: H.Deprecated
			});
		}
	}
	function s(e) {
		if (e.length < 2) return;
		let t = (t) => {
			let n = /* @__PURE__ */ new Map();
			for (let r = 0; r < e.length; r++) {
				let i = t(W(e[r]), r);
				if (!i) return;
				i.forEach(([e, t]) => {
					if (t.const !== void 0) {
						n.has(e) || n.set(e, /* @__PURE__ */ new Map());
						let i = n.get(e);
						i.has(t.const) || i.set(t.const, []), i.get(t.const).push(r);
					}
				});
			}
			return n;
		}, n = (t, n) => {
			for (let [r, i] of t) {
				let t = /* @__PURE__ */ new Set();
				if (i.forEach((e) => e.forEach((e) => t.add(e))), t.size === e.length) {
					let t = n(r), a = i.get(t);
					if (a?.length) return a.map((t) => e[t]);
					break;
				}
			}
		};
		if (a.type === "object" && a.properties?.length) {
			let e = t((e) => e.properties ? Object.entries(e.properties).map(([e, t]) => [e, W(t)]) : void 0);
			if (e) return n(e, (e) => {
				let t = a.properties.find((t) => t.keyNode.value === e);
				return t?.valueNode?.type === "string" ? t.valueNode.value : void 0;
			});
		} else if (a.type === "array" && a.items?.length) {
			let e = t((e) => {
				let t = e.prefixItems || (Array.isArray(e.items) ? e.items : void 0);
				return t ? t.map((e, t) => [t, W(e)]) : void 0;
			});
			if (e) return n(e, (e) => {
				let t = a.items[e];
				return t?.type === "string" ? t.value : void 0;
			});
		}
	}
	function c(e) {
		let r = e.value;
		function i(e) {
			let t = /^(-?\d+)(?:\.(\d+))?(?:e([-+]\d+))?$/.exec(e.toString());
			return t && {
				value: Number(t[1] + (t[2] || "")),
				multiplier: (t[2]?.length || 0) - (parseInt(t[3]) || 0)
			};
		}
		if (I(t.multipleOf)) {
			let a = -1;
			if (Number.isInteger(t.multipleOf)) a = r % t.multipleOf;
			else {
				let e = i(t.multipleOf), n = i(r);
				if (e && n) {
					let t = 10 ** Math.abs(n.multiplier - e.multiplier);
					n.multiplier < e.multiplier ? n.value *= t : e.value *= t, a = n.value % e.value;
				}
			}
			a !== 0 && n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: U("Value is not divisible by {0}.", t.multipleOf)
			});
		}
		function a(e, t) {
			if (I(t)) return t;
			if (Ct(t) && t) return e;
		}
		function o(e, t) {
			if (!Ct(t) || !t) return e;
		}
		let s = a(t.minimum, t.exclusiveMinimum);
		I(s) && r <= s && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Value is below the exclusive minimum of {0}.", s)
		});
		let c = a(t.maximum, t.exclusiveMaximum);
		I(c) && r >= c && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Value is above the exclusive maximum of {0}.", c)
		});
		let l = o(t.minimum, t.exclusiveMinimum);
		I(l) && r < l && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Value is below the minimum of {0}.", l)
		});
		let u = o(t.maximum, t.exclusiveMaximum);
		I(u) && r > u && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Value is above the maximum of {0}.", u)
		});
	}
	function l(e) {
		if (I(t.minLength) && At(e.value) < t.minLength && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("String is shorter than the minimum length of {0}.", t.minLength)
		}), I(t.maxLength) && At(e.value) > t.maxLength && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("String is longer than the maximum length of {0}.", t.maxLength)
		}), wt(t.pattern)) {
			let r = kt(t.pattern);
			r && !r.test(e.value) && n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: t.patternErrorMessage || t.errorMessage || U("String does not match the pattern of \"{0}\".", t.pattern)
			});
		}
		if (t.format) switch (t.format) {
			case "uri":
			case "uri-reference":
				{
					let r;
					if (!e.value) r = U("URI expected.");
					else {
						let n = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/.exec(e.value);
						n ? !n[2] && t.format === "uri" && (r = U("URI with a scheme is expected.")) : r = U("URI is expected.");
					}
					r && n.problems.push({
						location: {
							offset: e.offset,
							length: e.length
						},
						message: t.patternErrorMessage || t.errorMessage || U("String is not a URI: {0}", r)
					});
				}
				break;
			case "color-hex":
			case "date-time":
			case "date":
			case "time":
			case "email":
			case "hostname":
			case "ipv4":
			case "ipv6":
				let r = Sr[t.format];
				(!e.value || !r.pattern.exec(e.value)) && n.problems.push({
					location: {
						offset: e.offset,
						length: e.length
					},
					message: t.patternErrorMessage || t.errorMessage || r.errorMessage
				});
		}
	}
	function u(e) {
		let a, o;
		i.schemaDraft >= sr.v2020_12 ? (a = t.prefixItems, o = Array.isArray(t.items) ? void 0 : t.items) : (a = Array.isArray(t.items) ? t.items : void 0, o = Array.isArray(t.items) ? t.additionalItems : t.items);
		let s = 0;
		if (a !== void 0) {
			let t = Math.min(a.length, e.items.length);
			for (; s < t; s++) {
				let t = a[s], o = W(t), c = new K(), l = e.items[s];
				l && (G(l, o, c, r, i), n.mergePropertyMatch(c)), n.processedProperties.add(String(s));
			}
		}
		if (o !== void 0 && s < e.items.length) {
			if (typeof o == "boolean") for (o === !1 && n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: U("Array has too many items according to schema. Expected {0} or fewer.", s)
			}); s < e.items.length; s++) n.processedProperties.add(String(s)), n.propertiesValueMatches++;
			else for (; s < e.items.length; s++) {
				let t = new K();
				G(e.items[s], o, t, r, i), n.mergePropertyMatch(t), n.processedProperties.add(String(s));
			}
		}
		let c = W(t.contains);
		if (c) {
			let r = 0;
			for (let t = 0; t < e.items.length; t++) {
				let a = e.items[t], o = new K();
				G(a, c, o, Lr.instance, i), o.hasProblems() || (r++, i.schemaDraft >= sr.v2020_12 && n.processedProperties.add(String(t)));
			}
			r === 0 && !I(t.minContains) && n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: t.errorMessage || U("Array does not contain required item.")
			}), I(t.minContains) && r < t.minContains && n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: t.errorMessage || U("Array has too few items that match the contains contraint. Expected {0} or more.", t.minContains)
			}), I(t.maxContains) && r > t.maxContains && n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: t.errorMessage || U("Array has too many items that match the contains contraint. Expected {0} or less.", t.maxContains)
			});
		}
		let l = t.unevaluatedItems;
		if (l !== void 0) for (let a = 0; a < e.items.length; a++) {
			if (!n.processedProperties.has(String(a))) {
				if (l === !1) n.problems.push({
					location: {
						offset: e.offset,
						length: e.length
					},
					message: U("Item does not match any validation rule from the array.")
				});
				else {
					let o = new K();
					G(e.items[a], t.unevaluatedItems, o, r, i), n.mergePropertyMatch(o);
				}
			}
			n.processedProperties.add(String(a)), n.propertiesValueMatches++;
		}
		if (I(t.minItems) && e.items.length < t.minItems && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Array has too few items. Expected {0} or more.", t.minItems)
		}), I(t.maxItems) && e.items.length > t.maxItems && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Array has too many items. Expected {0} or fewer.", t.maxItems)
		}), t.uniqueItems === !0) {
			let t = _r(e);
			function r() {
				for (let e = 0; e < t.length - 1; e++) {
					let n = t[e];
					for (let r = e + 1; r < t.length; r++) if (xt(n, t[r])) return !0;
				}
				return !1;
			}
			r() && n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: U("Array has duplicate items.")
			});
		}
	}
	function d(e) {
		let a = Object.create(null), o = /* @__PURE__ */ new Set();
		for (let t of e.properties) {
			let e = t.keyNode.value;
			a[e] = t.valueNode, o.add(e);
		}
		if (Array.isArray(t.required)) {
			for (let r of t.required) if (!a[r]) {
				let t = e.parent && e.parent.type === "property" && e.parent.keyNode, i = t ? {
					offset: t.offset,
					length: t.length
				} : {
					offset: e.offset,
					length: 1
				};
				n.problems.push({
					location: i,
					message: U("Missing property \"{0}\".", r)
				});
			}
		}
		let s = (e) => {
			o.delete(e), n.processedProperties.add(e);
		};
		if (t.properties) for (let e of Object.keys(t.properties)) {
			s(e);
			let o = t.properties[e], c = a[e];
			if (c) {
				if (Ct(o)) {
					if (o) n.propertiesMatches++, n.propertiesValueMatches++;
					else {
						let r = c.parent;
						n.problems.push({
							location: {
								offset: r.keyNode.offset,
								length: r.keyNode.length
							},
							message: t.errorMessage || U("Property {0} is not allowed.", e)
						});
					}
				} else {
					let e = new K();
					G(c, o, e, r, i), n.mergePropertyMatch(e);
				}
			}
		}
		if (t.patternProperties) for (let e of Object.keys(t.patternProperties)) {
			let c = kt(e);
			if (c) {
				let l = [];
				for (let s of o) if (c.test(s)) {
					l.push(s);
					let o = a[s];
					if (o) {
						let a = t.patternProperties[e];
						if (Ct(a)) {
							if (a) n.propertiesMatches++, n.propertiesValueMatches++;
							else {
								let e = o.parent;
								n.problems.push({
									location: {
										offset: e.keyNode.offset,
										length: e.keyNode.length
									},
									message: t.errorMessage || U("Property {0} is not allowed.", s)
								});
							}
						} else {
							let e = new K();
							G(o, a, e, r, i), n.mergePropertyMatch(e);
						}
					}
				}
				l.forEach(s);
			}
		}
		let c = t.additionalProperties;
		if (c !== void 0) for (let e of o) {
			s(e);
			let o = a[e];
			if (o) {
				if (c === !1) {
					let r = o.parent;
					n.problems.push({
						location: {
							offset: r.keyNode.offset,
							length: r.keyNode.length
						},
						message: t.errorMessage || U("Property {0} is not allowed.", e)
					});
				} else if (c !== !0) {
					let e = new K();
					G(o, c, e, r, i), n.mergePropertyMatch(e);
				}
			}
		}
		let l = t.unevaluatedProperties;
		if (l !== void 0) {
			let e = [];
			for (let s of o) if (!n.processedProperties.has(s)) {
				e.push(s);
				let o = a[s];
				if (o) {
					if (l === !1) {
						let e = o.parent;
						n.problems.push({
							location: {
								offset: e.keyNode.offset,
								length: e.keyNode.length
							},
							message: t.errorMessage || U("Property {0} is not allowed.", s)
						});
					} else if (l !== !0) {
						let e = new K();
						G(o, l, e, r, i), n.mergePropertyMatch(e);
					}
				}
			}
			e.forEach(s);
		}
		if (I(t.maxProperties) && e.properties.length > t.maxProperties && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Object has more properties than limit of {0}.", t.maxProperties)
		}), I(t.minProperties) && e.properties.length < t.minProperties && n.problems.push({
			location: {
				offset: e.offset,
				length: e.length
			},
			message: U("Object has fewer properties than the required number of {0}", t.minProperties)
		}), t.dependentRequired) for (let e in t.dependentRequired) {
			let n = a[e], r = t.dependentRequired[e];
			n && Array.isArray(r) && d(e, r);
		}
		if (t.dependentSchemas) for (let e in t.dependentSchemas) {
			let n = a[e], r = t.dependentSchemas[e];
			n && Tt(r) && d(e, r);
		}
		if (t.dependencies) for (let e in t.dependencies) a[e] && d(e, t.dependencies[e]);
		let u = W(t.propertyNames);
		if (u) for (let t of e.properties) {
			let e = t.keyNode;
			e && G(e, u, n, r, i);
		}
		function d(t, o) {
			if (Array.isArray(o)) for (let r of o) a[r] ? n.propertiesValueMatches++ : n.problems.push({
				location: {
					offset: e.offset,
					length: e.length
				},
				message: U("Object is missing property {0} required by property {1}.", r, t)
			});
			else {
				let t = W(o);
				if (t) {
					let a = new K();
					G(e, t, a, r, i), n.mergePropertyMatch(a);
				}
			}
		}
	}
}
function xr(e, t) {
	let n = [], r = -1, i = e.getText(), a = ft(i, !1), o = t && t.collectComments ? [] : void 0;
	function s() {
		for (;;) {
			let t = a.scan();
			switch (u(), t) {
				case 12:
				case 13:
					Array.isArray(o) && o.push(R.create(e.positionAt(a.getTokenOffset()), e.positionAt(a.getTokenOffset() + a.getTokenLength())));
					break;
				case 15:
				case 14: break;
				default: return t;
			}
		}
	}
	function c(t, i, a, o, s = z.Error) {
		if (n.length === 0 || a !== r) {
			let c = R.create(e.positionAt(a), e.positionAt(o));
			n.push(Kt.create(c, t, s, i, e.languageId)), r = a;
		}
	}
	function l(e, t, n = void 0, r = [], o = []) {
		let l = a.getTokenOffset(), u = a.getTokenOffset() + a.getTokenLength();
		if (l === u && l > 0) {
			for (l--; l > 0 && /\s/.test(i.charAt(l));) l--;
			u = l + 1;
		}
		if (c(e, t, l, u), n && d(n, !1), r.length + o.length > 0) {
			let e = a.getToken();
			for (; e !== 17;) {
				if (r.indexOf(e) !== -1) {
					s();
					break;
				}
				if (o.indexOf(e) !== -1) break;
				e = s();
			}
		}
		return n;
	}
	function u() {
		switch (a.getTokenError()) {
			case 4: return l(U("Invalid unicode sequence in string."), H.InvalidUnicode), !0;
			case 5: return l(U("Invalid escape character in string."), H.InvalidEscapeCharacter), !0;
			case 3: return l(U("Unexpected end of number."), H.UnexpectedEndOfNumber), !0;
			case 1: return l(U("Unexpected end of comment."), H.UnexpectedEndOfComment), !0;
			case 2: return l(U("Unexpected end of string."), H.UnexpectedEndOfString), !0;
			case 6: return l(U("Invalid characters in string. Control characters must be escaped."), H.InvalidCharacter), !0;
		}
		return !1;
	}
	function d(e, t) {
		return e.length = a.getTokenOffset() + a.getTokenLength() - e.offset, t && s(), e;
	}
	function f(e) {
		if (a.getToken() !== 3) return;
		let t = new Er(e, a.getTokenOffset());
		s();
		let n = !1;
		for (; a.getToken() !== 4 && a.getToken() !== 17;) {
			if (a.getToken() === 5) {
				n || l(U("Value expected"), H.ValueExpected);
				let e = a.getTokenOffset();
				if (s(), a.getToken() === 4) {
					n && c(U("Trailing comma"), H.TrailingComma, e, e + 1);
					continue;
				}
			} else n && l(U("Expected comma"), H.CommaExpected);
			let e = y(t);
			e ? t.items.push(e) : l(U("Value expected"), H.ValueExpected, void 0, [], [4, 5]), n = !0;
		}
		return a.getToken() === 4 ? d(t, !0) : l(U("Expected comma or closing bracket"), H.CommaOrCloseBacketExpected, t);
	}
	let p = new Or(void 0, 0, 0);
	function m(t, n) {
		let r = new kr(t, a.getTokenOffset(), p), i = g(r);
		if (!i) {
			if (a.getToken() === 16) {
				l(U("Property keys must be doublequoted"), H.PropertyKeysMustBeDoublequoted);
				let e = new Or(r, a.getTokenOffset(), a.getTokenLength());
				e.value = a.getTokenValue(), i = e, s();
			} else return;
		}
		if (r.keyNode = i, i.value !== "//") {
			let e = n[i.value];
			e ? (c(U("Duplicate object key"), H.DuplicateKey, r.keyNode.offset, r.keyNode.offset + r.keyNode.length, z.Warning), Tt(e) && c(U("Duplicate object key"), H.DuplicateKey, e.keyNode.offset, e.keyNode.offset + e.keyNode.length, z.Warning), n[i.value] = !0) : n[i.value] = r;
		}
		if (a.getToken() === 6) r.colonOffset = a.getTokenOffset(), s();
		else if (l(U("Colon expected"), H.ColonExpected), a.getToken() === 10 && e.positionAt(i.offset + i.length).line < e.positionAt(a.getTokenOffset()).line) return r.length = i.length, r;
		let o = y(r);
		return o ? (r.valueNode = o, r.length = o.offset + o.length - r.offset, r) : l(U("Value expected"), H.ValueExpected, r, [], [2, 5]);
	}
	function h(e) {
		if (a.getToken() !== 1) return;
		let t = new Ar(e, a.getTokenOffset()), n = Object.create(null);
		s();
		let r = !1;
		for (; a.getToken() !== 2 && a.getToken() !== 17;) {
			if (a.getToken() === 5) {
				r || l(U("Property expected"), H.PropertyExpected);
				let e = a.getTokenOffset();
				if (s(), a.getToken() === 2) {
					r && c(U("Trailing comma"), H.TrailingComma, e, e + 1);
					continue;
				}
			} else r && l(U("Expected comma"), H.CommaExpected);
			let e = m(t, n);
			e ? t.properties.push(e) : l(U("Property expected"), H.PropertyExpected, void 0, [], [2, 5]), r = !0;
		}
		return a.getToken() === 2 ? d(t, !0) : l(U("Expected comma or closing brace"), H.CommaOrCloseBraceExpected, t);
	}
	function g(e) {
		if (a.getToken() !== 10) return;
		let t = new Or(e, a.getTokenOffset());
		return t.value = a.getTokenValue(), d(t, !0);
	}
	function _(e) {
		if (a.getToken() !== 11) return;
		let t = new Dr(e, a.getTokenOffset());
		if (a.getTokenError() === 0) {
			let e = a.getTokenValue();
			try {
				let n = JSON.parse(e);
				if (!I(n)) return l(U("Invalid number format."), H.Undefined, t);
				t.value = n;
			} catch {
				return l(U("Invalid number format."), H.Undefined, t);
			}
			t.isInteger = e.indexOf(".") === -1;
		}
		return d(t, !0);
	}
	function v(e) {
		switch (a.getToken()) {
			case 7: return d(new wr(e, a.getTokenOffset()), !0);
			case 8: return d(new Tr(e, !0, a.getTokenOffset()), !0);
			case 9: return d(new Tr(e, !1, a.getTokenOffset()), !0);
			default: return;
		}
	}
	function y(e) {
		return f(e) || h(e) || g(e) || _(e) || v(e);
	}
	let b;
	return s() !== 17 && (b = y(b), b ? a.getToken() !== 17 && l(U("End of file expected."), H.Undefined) : l(U("Expected a JSON object, array or literal."), H.Undefined)), new Rr(b, n, o);
}
var Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr, Fr, Ir, Lr, K, Rr, zr = t((() => {
	bt(), Et(), jt(), lr(), l(), pr(), Sr = {
		"color-hex": {
			errorMessage: U("Invalid color format. Use #RGB, #RGBA, #RRGGBB or #RRGGBBAA."),
			pattern: /^#([0-9A-Fa-f]{3,4}|([0-9A-Fa-f]{2}){3,4})$/
		},
		"date-time": {
			errorMessage: U("String is not a RFC3339 date-time."),
			pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
		},
		date: {
			errorMessage: U("String is not a RFC3339 date."),
			pattern: /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/i
		},
		time: {
			errorMessage: U("String is not a RFC3339 time."),
			pattern: /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)([01][0-9]|2[0-3]):([0-5][0-9]))$/i
		},
		email: {
			errorMessage: U("String is not an e-mail address."),
			pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/
		},
		hostname: {
			errorMessage: U("String is not a hostname."),
			pattern: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i
		},
		ipv4: {
			errorMessage: U("String is not an IPv4 address."),
			pattern: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
		},
		ipv6: {
			errorMessage: U("String is not an IPv6 address."),
			pattern: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i
		}
	}, Cr = class {
		constructor(e, t, n = 0) {
			this.offset = t, this.length = n, this.parent = e;
		}
		get children() {
			return [];
		}
		toString() {
			return "type: " + this.type + " (" + this.offset + "/" + this.length + ")" + (this.parent ? " parent: {" + this.parent.toString() + "}" : "");
		}
	}, wr = class extends Cr {
		constructor(e, t) {
			super(e, t), this.type = "null", this.value = null;
		}
	}, Tr = class extends Cr {
		constructor(e, t, n) {
			super(e, n), this.type = "boolean", this.value = t;
		}
	}, Er = class extends Cr {
		constructor(e, t) {
			super(e, t), this.type = "array", this.items = [];
		}
		get children() {
			return this.items;
		}
	}, Dr = class extends Cr {
		constructor(e, t) {
			super(e, t), this.type = "number", this.isInteger = !0, this.value = NaN;
		}
	}, Or = class extends Cr {
		constructor(e, t, n) {
			super(e, t, n), this.type = "string", this.value = "";
		}
	}, kr = class extends Cr {
		constructor(e, t, n) {
			super(e, t), this.type = "property", this.colonOffset = -1, this.keyNode = n;
		}
		get children() {
			return this.valueNode ? [this.keyNode, this.valueNode] : [this.keyNode];
		}
	}, Ar = class extends Cr {
		constructor(e, t) {
			super(e, t), this.type = "object", this.properties = [];
		}
		get children() {
			return this.properties;
		}
	}, (function(e) {
		e[e.Key = 0] = "Key", e[e.Enum = 1] = "Enum";
	})(jr ||= {}), Mr = "http://json-schema.org/", Nr = "https://json-schema.org/", Pr = {
		"https://json-schema.org/draft-03/schema": sr.v3,
		"https://json-schema.org/draft-04/schema": sr.v4,
		"https://json-schema.org/draft-06/schema": sr.v6,
		"https://json-schema.org/draft-07/schema": sr.v7,
		"https://json-schema.org/draft/2019-09/schema": sr.v2019_09,
		"https://json-schema.org/draft/2020-12/schema": sr.v2020_12
	}, Fr = class {
		constructor(e) {
			this.schemaDraft = e;
		}
	}, Ir = class e {
		constructor(e = -1, t) {
			this.focusOffset = e, this.exclude = t, this.schemas = [];
		}
		add(e) {
			this.schemas.push(e);
		}
		merge(e) {
			Array.prototype.push.apply(this.schemas, e.schemas);
		}
		include(e) {
			return (this.focusOffset === -1 || yr(e, this.focusOffset)) && e !== this.exclude;
		}
		newSub() {
			return new e(-1, this.exclude);
		}
	}, Lr = class {
		constructor() {}
		get schemas() {
			return [];
		}
		add(e) {}
		merge(e) {}
		include(e) {
			return !0;
		}
		newSub() {
			return this;
		}
	}, Lr.instance = new Lr(), K = class {
		constructor() {
			this.problems = [], this.propertiesMatches = 0, this.processedProperties = /* @__PURE__ */ new Set(), this.propertiesValueMatches = 0, this.primaryValueMatches = 0, this.enumValueMatch = !1, this.enumValues = void 0;
		}
		hasProblems() {
			return !!this.problems.length;
		}
		merge(e) {
			this.problems = this.problems.concat(e.problems), this.propertiesMatches += e.propertiesMatches, this.propertiesValueMatches += e.propertiesValueMatches, this.mergeProcessedProperties(e);
		}
		mergeEnumValues(e) {
			!this.enumValueMatch && !e.enumValueMatch && this.enumValues && e.enumValues && (this.enumValues = this.enumValues.concat(e.enumValues));
		}
		updateEnumMismatchProblemMessages() {
			if (!this.enumValueMatch && this.enumValues) for (let e of this.problems) e.code === H.EnumValueMismatch && (e.message = U("Value is not accepted. Valid values: {0}.", this.enumValues.map((e) => JSON.stringify(e)).join(", ")));
		}
		mergePropertyMatch(e) {
			this.problems = this.problems.concat(e.problems), this.propertiesMatches++, (e.enumValueMatch || !e.hasProblems() && e.propertiesMatches) && this.propertiesValueMatches++, e.enumValueMatch && e.enumValues && e.enumValues.length === 1 && this.primaryValueMatches++;
		}
		mergeProcessedProperties(e) {
			e.processedProperties.forEach((e) => this.processedProperties.add(e));
		}
		compare(e) {
			let t = this.hasProblems();
			return t === e.hasProblems() ? this.enumValueMatch === e.enumValueMatch ? this.primaryValueMatches === e.primaryValueMatches ? this.propertiesValueMatches === e.propertiesValueMatches ? this.propertiesMatches - e.propertiesMatches : this.propertiesValueMatches - e.propertiesValueMatches : this.primaryValueMatches - e.primaryValueMatches : e.enumValueMatch ? -1 : 1 : t ? -1 : 1;
		}
	}, Rr = class {
		constructor(e, t = [], n = []) {
			this.root = e, this.syntaxErrors = t, this.comments = n;
		}
		getNodeFromOffset(e, t = !1) {
			if (this.root) return gt(this.root, e, t);
		}
		visit(e) {
			if (this.root) {
				let t = (n) => {
					let r = e(n), i = n.children;
					if (Array.isArray(i)) for (let e = 0; e < i.length && r; e++) r = t(i[e]);
					return r;
				};
				t(this.root);
			}
		}
		validate(e, t, n = z.Warning, r) {
			if (this.root && t) {
				let i = new K();
				return G(this.root, t, i, Lr.instance, new Fr(r ?? br(t))), i.problems.map((t) => {
					let r = R.create(e.positionAt(t.location.offset), e.positionAt(t.location.offset + t.location.length));
					return Kt.create(r, t.message, t.severity ?? n, t.code);
				});
			}
		}
		getMatchingSchemas(e, t = -1, n) {
			if (this.root && e) {
				let r = new Ir(t, n), i = br(e), a = new Fr(i);
				return G(this.root, e, new K(), r, a), r.schemas;
			}
			return [];
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/json.js
function Br(e, t, n) {
	if (typeof e == "object" && e) {
		let r = t + "	";
		if (Array.isArray(e)) {
			if (e.length === 0) return "[]";
			let i = "[\n";
			for (let t = 0; t < e.length; t++) i += r + Br(e[t], r, n), t < e.length - 1 && (i += ","), i += "\n";
			return i += t + "]", i;
		}
		{
			let i = Object.keys(e);
			if (i.length === 0) return "{}";
			let a = "{\n";
			for (let t = 0; t < i.length; t++) {
				let o = i[t];
				a += r + JSON.stringify(o) + ": " + Br(e[o], r, n), t < i.length - 1 && (a += ","), a += "\n";
			}
			return a += t + "}", a;
		}
	}
	return n(e);
}
var Vr = t((() => {})), Hr, Ur = t((() => {
	zr(), bt(), Vr(), jt(), Et(), lr(), pr(), Hr = class {
		constructor(e, t = [], n = Promise, r = {}) {
			this.schemaService = e, this.contributions = t, this.promiseConstructor = n, this.clientCapabilities = r;
		}
		doResolve(e) {
			for (let t = this.contributions.length - 1; t >= 0; t--) {
				let n = this.contributions[t].resolveCompletion;
				if (n) {
					let t = n(e);
					if (t) return t;
				}
			}
			return this.promiseConstructor.resolve(e);
		}
		doComplete(e, t, n) {
			let r = {
				items: [],
				isIncomplete: !1
			}, i = e.getText(), a = e.offsetAt(t), o = n.getNodeFromOffset(a, !0);
			if (this.isInComment(e, o ? o.offset : 0, a)) return Promise.resolve(r);
			if (o && a === o.offset + o.length && a > 0) {
				let e = i[a - 1];
				(o.type === "object" && e === "}" || o.type === "array" && e === "]") && (o = o.parent);
			}
			let s = this.getCurrentWord(e, a), c;
			if (o && (o.type === "string" || o.type === "number" || o.type === "boolean" || o.type === "null")) c = R.create(e.positionAt(o.offset), e.positionAt(o.offset + o.length));
			else {
				let n = a - s.length;
				n > 0 && i[n - 1] === "\"" && n--, c = R.create(e.positionAt(n), t);
			}
			let l = /* @__PURE__ */ new Map(), u = {
				add: (e) => {
					let t = e.label, n = l.get(t);
					if (n) n.documentation ||= e.documentation, n.detail ||= e.detail, n.labelDetails ||= e.labelDetails;
					else {
						if (t = t.replace(/[\n]/g, "↵"), t.length > 60) {
							let e = t.substr(0, 57).trim() + "...";
							l.has(e) || (t = e);
						}
						e.textEdit = Jt.replace(c, e.insertText), e.label = t, l.set(t, e), r.items.push(e);
					}
				},
				setAsIncomplete: () => {
					r.isIncomplete = !0;
				},
				error: (e) => {
					console.error(e);
				},
				getNumberOfProposals: () => r.items.length
			};
			return this.schemaService.getSchemaForResource(e.uri, n).then((t) => {
				let d = [], f = !0, p = "", m;
				if (o && o.type === "string") {
					let e = o.parent;
					e && e.type === "property" && e.keyNode === o && (f = !e.valueNode, m = e, p = i.substr(o.offset + 1, o.length - 2), e && (o = e.parent));
				}
				if (o && o.type === "object") {
					if (o.offset === a) return r;
					o.properties.forEach((e) => {
						(!m || m !== e) && l.set(e.keyNode.value, vn.create("__"));
					});
					let h = "";
					f && (h = this.evaluateSeparatorAfter(e, e.offsetAt(c.end))), t ? this.getPropertyCompletions(t, n, o, f, h, u) : this.getSchemaLessPropertyCompletions(n, o, p, u);
					let g = vr(o);
					this.contributions.forEach((t) => {
						let n = t.collectPropertyCompletions(e.uri, g, s, f, h === "", u);
						n && d.push(n);
					}), !t && s.length > 0 && i.charAt(a - s.length - 1) !== "\"" && (u.add({
						kind: fn.Property,
						label: this.getLabelForValue(s),
						insertText: this.getInsertTextForProperty(s, void 0, !1, h),
						insertTextFormat: B.Snippet,
						documentation: ""
					}), u.setAsIncomplete());
				}
				let h = {};
				return t ? this.getValueCompletions(t, n, o, a, e, u, h) : this.getSchemaLessValueCompletions(n, o, a, e, u), this.contributions.length > 0 && this.getContributedValueCompletions(n, o, a, e, u, d), this.promiseConstructor.all(d).then(() => {
					if (u.getNumberOfProposals() === 0) {
						let t = a;
						o && (o.type === "string" || o.type === "number" || o.type === "boolean" || o.type === "null") && (t = o.offset + o.length);
						let n = this.evaluateSeparatorAfter(e, t);
						this.addFillerValueCompletions(h, n, u);
					}
					return r;
				});
			});
		}
		getPropertyCompletions(e, t, n, r, i, a) {
			t.getMatchingSchemas(e.schema, n.offset).forEach((e) => {
				if (e.node === n && !e.inverted) {
					let t = e.schema.properties;
					t && Object.keys(t).forEach((e) => {
						let n = t[e];
						if (typeof n == "object" && !n.deprecationMessage && !n.doNotSuggest) {
							let t = {
								kind: fn.Property,
								label: e,
								insertText: this.getInsertTextForProperty(e, n, r, i),
								insertTextFormat: B.Snippet,
								filterText: this.getFilterTextForValue(e),
								documentation: this.fromMarkup(n.markdownDescription) || n.description || ""
							};
							n.completionDetail !== void 0 && (t.detail = n.completionDetail), n.suggestSortText !== void 0 && (t.sortText = n.suggestSortText), t.insertText && Ot(t.insertText, `$1${i}`) && (t.command = {
								title: "Suggest",
								command: "editor.action.triggerSuggest"
							}), a.add(t);
						}
					});
					let n = e.schema.propertyNames;
					if (typeof n == "object" && !n.deprecationMessage && !n.doNotSuggest) {
						let e = (e, t, o, s) => {
							let c = {
								kind: fn.Property,
								label: e,
								insertText: this.getInsertTextForProperty(e, void 0, r, i),
								insertTextFormat: B.Snippet,
								filterText: this.getFilterTextForValue(e),
								documentation: t || this.fromMarkup(n.markdownDescription) || n.description || "",
								sortText: s,
								detail: o
							};
							c.insertText && Ot(c.insertText, `$1${i}`) && (c.command = {
								title: "Suggest",
								command: "editor.action.triggerSuggest"
							}), a.add(c);
						};
						if (n.enum) for (let t = 0; t < n.enum.length; t++) {
							let r;
							n.markdownEnumDescriptions && t < n.markdownEnumDescriptions.length ? r = this.fromMarkup(n.markdownEnumDescriptions[t]) : n.enumDescriptions && t < n.enumDescriptions.length && (r = n.enumDescriptions[t]);
							let i = n.enumSortTexts?.[t], a = n.enumDetails?.[t];
							e(n.enum[t], r, a, i);
						}
						if (n.examples) for (let t = 0; t < n.examples.length; t++) e(n.examples[t], void 0, void 0, void 0);
						n.const && e(n.const, void 0, n.completionDetail, n.suggestSortText);
					}
				}
			});
		}
		getSchemaLessPropertyCompletions(e, t, n, r) {
			let i = (e) => {
				e.properties.forEach((e) => {
					let t = e.keyNode.value;
					r.add({
						kind: fn.Property,
						label: t,
						insertText: this.getInsertTextForValue(t, ""),
						insertTextFormat: B.Snippet,
						filterText: this.getFilterTextForValue(t),
						documentation: ""
					});
				});
			};
			if (t.parent) {
				if (t.parent.type === "property") {
					let n = t.parent.keyNode.value;
					e.visit((e) => (e.type === "property" && e !== t.parent && e.keyNode.value === n && e.valueNode && e.valueNode.type === "object" && i(e.valueNode), !0));
				} else t.parent.type === "array" && t.parent.items.forEach((e) => {
					e.type === "object" && e !== t && i(e);
				});
			} else t.type === "object" && r.add({
				kind: fn.Property,
				label: "$schema",
				insertText: this.getInsertTextForProperty("$schema", void 0, !0, ""),
				insertTextFormat: B.Snippet,
				documentation: "",
				filterText: this.getFilterTextForValue("$schema")
			});
		}
		getSchemaLessValueCompletions(e, t, n, r, i) {
			let a = n;
			if (t && (t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") && (a = t.offset + t.length, t = t.parent), !t) {
				i.add({
					kind: this.getSuggestionKind("object"),
					label: "Empty object",
					insertText: this.getInsertTextForValue({}, ""),
					insertTextFormat: B.Snippet,
					documentation: ""
				}), i.add({
					kind: this.getSuggestionKind("array"),
					label: "Empty array",
					insertText: this.getInsertTextForValue([], ""),
					insertTextFormat: B.Snippet,
					documentation: ""
				});
				return;
			}
			let o = this.evaluateSeparatorAfter(r, a), s = (e) => {
				e.parent && !yr(e.parent, n, !0) && i.add({
					kind: this.getSuggestionKind(e.type),
					label: this.getLabelTextForMatchingNode(e, r),
					insertText: this.getInsertTextForMatchingNode(e, r, o),
					insertTextFormat: B.Snippet,
					documentation: ""
				}), e.type === "boolean" && this.addBooleanValueCompletion(!e.value, o, i);
			};
			if (t.type === "property" && n > (t.colonOffset || 0)) {
				let r = t.valueNode;
				if (r && (n > r.offset + r.length || r.type === "object" || r.type === "array")) return;
				let a = t.keyNode.value;
				e.visit((e) => (e.type === "property" && e.keyNode.value === a && e.valueNode && s(e.valueNode), !0)), a === "$schema" && t.parent && !t.parent.parent && this.addDollarSchemaCompletions(o, i);
			}
			if (t.type === "array") {
				if (t.parent && t.parent.type === "property") {
					let n = t.parent.keyNode.value;
					e.visit((e) => (e.type === "property" && e.keyNode.value === n && e.valueNode && e.valueNode.type === "array" && e.valueNode.items.forEach(s), !0));
				} else t.items.forEach(s);
			}
		}
		getValueCompletions(e, t, n, r, i, a, o) {
			let s = r, c, l;
			if (n && (n.type === "string" || n.type === "number" || n.type === "boolean" || n.type === "null") && (s = n.offset + n.length, l = n, n = n.parent), !n) {
				this.addSchemaValueCompletions(e.schema, "", a, o);
				return;
			}
			if (n.type === "property" && r > (n.colonOffset || 0)) {
				let e = n.valueNode;
				if (e && r > e.offset + e.length) return;
				c = n.keyNode.value, n = n.parent;
			}
			if (n && (c !== void 0 || n.type === "array")) {
				let u = this.evaluateSeparatorAfter(i, s), d = t.getMatchingSchemas(e.schema, n.offset, l);
				for (let e of d) if (e.node === n && !e.inverted && e.schema) {
					if (n.type === "array" && e.schema.items) {
						let t = a;
						if (e.schema.uniqueItems) {
							let e = /* @__PURE__ */ new Set();
							n.children.forEach((t) => {
								t.type !== "array" && t.type !== "object" && e.add(this.getLabelForValue(_r(t)));
							}), t = {
								...a,
								add(t) {
									e.has(t.label) || a.add(t);
								}
							};
						}
						if (Array.isArray(e.schema.items)) {
							let a = this.findItemAtOffset(n, i, r);
							a < e.schema.items.length && this.addSchemaValueCompletions(e.schema.items[a], u, t, o);
						} else this.addSchemaValueCompletions(e.schema.items, u, t, o);
					}
					if (c !== void 0) {
						let t = !1;
						if (e.schema.properties) {
							let n = e.schema.properties[c];
							n && (t = !0, this.addSchemaValueCompletions(n, u, a, o));
						}
						if (e.schema.patternProperties && !t) {
							for (let n of Object.keys(e.schema.patternProperties)) if (kt(n)?.test(c)) {
								t = !0;
								let r = e.schema.patternProperties[n];
								this.addSchemaValueCompletions(r, u, a, o);
							}
						}
						if (e.schema.additionalProperties && !t) {
							let t = e.schema.additionalProperties;
							this.addSchemaValueCompletions(t, u, a, o);
						}
					}
				}
				c === "$schema" && !n.parent && this.addDollarSchemaCompletions(u, a), o.boolean && (this.addBooleanValueCompletion(!0, u, a), this.addBooleanValueCompletion(!1, u, a)), o.null && this.addNullValueCompletion(u, a);
			}
		}
		getContributedValueCompletions(e, t, n, r, i, a) {
			if (!t) this.contributions.forEach((e) => {
				let t = e.collectDefaultCompletions(r.uri, i);
				t && a.push(t);
			});
			else if ((t.type === "string" || t.type === "number" || t.type === "boolean" || t.type === "null") && (t = t.parent), t && t.type === "property" && n > (t.colonOffset || 0)) {
				let e = t.keyNode.value, o = t.valueNode;
				if ((!o || n <= o.offset + o.length) && t.parent) {
					let n = vr(t.parent);
					this.contributions.forEach((t) => {
						let o = t.collectValueCompletions(r.uri, n, e, i);
						o && a.push(o);
					});
				}
			}
		}
		addSchemaValueCompletions(e, t, n, r) {
			typeof e == "object" && (this.addEnumValueCompletions(e, t, n), this.addDefaultValueCompletions(e, t, n), this.collectTypes(e, r), Array.isArray(e.allOf) && e.allOf.forEach((e) => this.addSchemaValueCompletions(e, t, n, r)), Array.isArray(e.anyOf) && e.anyOf.forEach((e) => this.addSchemaValueCompletions(e, t, n, r)), Array.isArray(e.oneOf) && e.oneOf.forEach((e) => this.addSchemaValueCompletions(e, t, n, r)));
		}
		addDefaultValueCompletions(e, t, n, r = 0) {
			let i = !1;
			if (St(e.default)) {
				let a = e.type, o = e.default;
				for (let e = r; e > 0; e--) o = [o], a = "array";
				let s = {
					kind: this.getSuggestionKind(a),
					label: this.getLabelForValue(o),
					insertText: this.getInsertTextForValue(o, t),
					insertTextFormat: B.Snippet
				};
				this.doesSupportsLabelDetails() ? s.labelDetails = { description: U("Default value") } : s.detail = U("Default value"), n.add(s), i = !0;
			}
			Array.isArray(e.examples) && e.examples.forEach((a) => {
				let o = e.type, s = a;
				for (let e = r; e > 0; e--) s = [s], o = "array";
				n.add({
					kind: this.getSuggestionKind(o),
					label: this.getLabelForValue(s),
					insertText: this.getInsertTextForValue(s, t),
					insertTextFormat: B.Snippet
				}), i = !0;
			}), Array.isArray(e.defaultSnippets) && e.defaultSnippets.forEach((a) => {
				let o = e.type, s = a.body, c = a.label, l, u;
				if (St(s)) {
					e.type;
					for (let e = r; e > 0; e--) s = [s];
					l = this.getInsertTextForSnippetValue(s, t), u = this.getFilterTextForSnippetValue(s), c ||= this.getLabelForSnippetValue(s);
				} else if (typeof a.bodyText == "string") {
					let e = "", n = "", i = "";
					for (let t = r; t > 0; t--) e = e + i + "[\n", n = n + "\n" + i + "]", i += "	", o = "array";
					l = e + i + a.bodyText.split("\n").join("\n" + i) + n + t, c ||= l, u = l.replace(/[\n]/g, "");
				} else return;
				n.add({
					kind: this.getSuggestionKind(o),
					label: c,
					documentation: this.fromMarkup(a.markdownDescription) || a.description,
					insertText: l,
					insertTextFormat: B.Snippet,
					filterText: u
				}), i = !0;
			}), !i && typeof e.items == "object" && !Array.isArray(e.items) && r < 5 && this.addDefaultValueCompletions(e.items, t, n, r + 1);
		}
		addEnumValueCompletions(e, t, n) {
			if (St(e.const) && n.add({
				kind: this.getSuggestionKind(e.type),
				label: this.getLabelForValue(e.const),
				insertText: this.getInsertTextForValue(e.const, t),
				insertTextFormat: B.Snippet,
				documentation: this.fromMarkup(e.markdownDescription) || e.description
			}), Array.isArray(e.enum)) for (let r = 0, i = e.enum.length; r < i; r++) {
				let i = e.enum[r], a = this.fromMarkup(e.markdownDescription) || e.description;
				e.markdownEnumDescriptions && r < e.markdownEnumDescriptions.length && this.doesSupportMarkdown() ? a = this.fromMarkup(e.markdownEnumDescriptions[r]) : e.enumDescriptions && r < e.enumDescriptions.length && (a = e.enumDescriptions[r]), n.add({
					kind: this.getSuggestionKind(e.type),
					label: this.getLabelForValue(i),
					insertText: this.getInsertTextForValue(i, t),
					insertTextFormat: B.Snippet,
					sortText: e.enumSortTexts?.[r],
					detail: e.enumDetails?.[r],
					documentation: a
				});
			}
		}
		collectTypes(e, t) {
			if (Array.isArray(e.enum) || St(e.const)) return;
			let n = e.type;
			Array.isArray(n) ? n.forEach((e) => t[e] = !0) : n && (t[n] = !0);
		}
		addFillerValueCompletions(e, t, n) {
			e.object && n.add({
				kind: this.getSuggestionKind("object"),
				label: "{}",
				insertText: this.getInsertTextForGuessedValue({}, t),
				insertTextFormat: B.Snippet,
				detail: U("New object"),
				documentation: ""
			}), e.array && n.add({
				kind: this.getSuggestionKind("array"),
				label: "[]",
				insertText: this.getInsertTextForGuessedValue([], t),
				insertTextFormat: B.Snippet,
				detail: U("New array"),
				documentation: ""
			});
		}
		addBooleanValueCompletion(e, t, n) {
			n.add({
				kind: this.getSuggestionKind("boolean"),
				label: e ? "true" : "false",
				insertText: this.getInsertTextForValue(e, t),
				insertTextFormat: B.Snippet,
				documentation: ""
			});
		}
		addNullValueCompletion(e, t) {
			t.add({
				kind: this.getSuggestionKind("null"),
				label: "null",
				insertText: "null" + e,
				insertTextFormat: B.Snippet,
				documentation: ""
			});
		}
		addDollarSchemaCompletions(e, t) {
			this.schemaService.getRegisteredSchemaIds((e) => e === "http" || e === "https").forEach((n) => {
				n.startsWith("https://json-schema.org/draft-") && (n += "#"), t.add({
					kind: fn.Module,
					label: this.getLabelForValue(n),
					filterText: this.getFilterTextForValue(n),
					insertText: this.getInsertTextForValue(n, e),
					insertTextFormat: B.Snippet,
					documentation: ""
				});
			});
		}
		getLabelForValue(e) {
			return JSON.stringify(e);
		}
		getValueFromLabel(e) {
			return JSON.parse(e);
		}
		getFilterTextForValue(e) {
			return JSON.stringify(e);
		}
		getFilterTextForSnippetValue(e) {
			return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
		}
		getLabelForSnippetValue(e) {
			return JSON.stringify(e).replace(/\$\{\d+:([^}]+)\}|\$\d+/g, "$1");
		}
		getInsertTextForPlainText(e) {
			return e.replace(/[\\\$\}]/g, "\\$&");
		}
		getInsertTextForValue(e, t) {
			let n = JSON.stringify(e, null, "	");
			return n === "{}" ? "{$1}" + t : n === "[]" ? "[$1]" + t : this.getInsertTextForPlainText(n + t);
		}
		getInsertTextForSnippetValue(e, t) {
			return Br(e, "", (e) => typeof e == "string" && e[0] === "^" ? e.substr(1) : JSON.stringify(e)) + t;
		}
		getInsertTextForGuessedValue(e, t) {
			switch (typeof e) {
				case "object": return e === null ? "${1:null}" + t : this.getInsertTextForValue(e, t);
				case "string":
					let n = JSON.stringify(e);
					return n = n.substr(1, n.length - 2), n = this.getInsertTextForPlainText(n), "\"${1:" + n + "}\"" + t;
				case "number":
				case "boolean": return "${1:" + JSON.stringify(e) + "}" + t;
			}
			return this.getInsertTextForValue(e, t);
		}
		getSuggestionKind(e) {
			if (Array.isArray(e)) {
				let t = e;
				e = t.length > 0 ? t[0] : void 0;
			}
			if (!e) return fn.Value;
			switch (e) {
				case "string": return fn.Value;
				case "object": return fn.Module;
				case "property": return fn.Property;
				default: return fn.Value;
			}
		}
		getLabelTextForMatchingNode(e, t) {
			switch (e.type) {
				case "array": return "[]";
				case "object": return "{}";
				default: return t.getText().substr(e.offset, e.length);
			}
		}
		getInsertTextForMatchingNode(e, t, n) {
			switch (e.type) {
				case "array": return this.getInsertTextForValue([], n);
				case "object": return this.getInsertTextForValue({}, n);
				default:
					let r = t.getText().substr(e.offset, e.length) + n;
					return this.getInsertTextForPlainText(r);
			}
		}
		getInsertTextForProperty(e, t, n, r) {
			let i = this.getInsertTextForValue(e, "");
			if (!n) return i;
			let a = i + ": ", o, s = 0;
			if (t) {
				if (Array.isArray(t.defaultSnippets)) {
					if (t.defaultSnippets.length === 1) {
						let e = t.defaultSnippets[0].body;
						St(e) && (o = this.getInsertTextForSnippetValue(e, ""));
					}
					s += t.defaultSnippets.length;
				}
				if (t.enum && (!o && t.enum.length === 1 && (o = this.getInsertTextForGuessedValue(t.enum[0], "")), s += t.enum.length), St(t.const) && (o ||= this.getInsertTextForGuessedValue(t.const, ""), s++), St(t.default) && (o ||= this.getInsertTextForGuessedValue(t.default, ""), s++), Array.isArray(t.examples) && t.examples.length && (o ||= this.getInsertTextForGuessedValue(t.examples[0], ""), s += t.examples.length), s === 0) {
					let e = Array.isArray(t.type) ? t.type[0] : t.type;
					switch (e || (t.properties ? e = "object" : t.items && (e = "array")), e) {
						case "boolean":
							o = "$1";
							break;
						case "string":
							o = "\"$1\"";
							break;
						case "object":
							o = "{$1}";
							break;
						case "array":
							o = "[$1]";
							break;
						case "number":
						case "integer":
							o = "${1:0}";
							break;
						case "null":
							o = "${1:null}";
							break;
						default: return i;
					}
				}
			}
			return (!o || s > 1) && (o = "$1"), a + o + r;
		}
		getCurrentWord(e, t) {
			let n = t - 1, r = e.getText();
			for (; n >= 0 && " 	\n\r\v\":{[,]}".indexOf(r.charAt(n)) === -1;) n--;
			return r.substring(n + 1, t);
		}
		evaluateSeparatorAfter(e, t) {
			let n = ft(e.getText(), !0);
			switch (n.setPosition(t), n.scan()) {
				case 5:
				case 2:
				case 4:
				case 17: return "";
				default: return ",";
			}
		}
		findItemAtOffset(e, t, n) {
			let r = ft(t.getText(), !0), i = e.items;
			for (let e = i.length - 1; e >= 0; e--) {
				let t = i[e];
				if (n > t.offset + t.length) return r.setPosition(t.offset + t.length), r.scan() === 5 && n >= r.getTokenOffset() + r.getTokenLength() ? e + 1 : e;
				if (n >= t.offset) return e;
			}
			return 0;
		}
		isInComment(e, t, n) {
			let r = ft(e.getText(), !1);
			r.setPosition(t);
			let i = r.scan();
			for (; i !== 17 && r.getTokenOffset() + r.getTokenLength() < n;) i = r.scan();
			return (i === 12 || i === 13) && r.getTokenOffset() <= n;
		}
		fromMarkup(e) {
			if (e && this.doesSupportMarkdown()) return {
				kind: un.Markdown,
				value: e
			};
		}
		doesSupportMarkdown() {
			if (!St(this.supportsMarkdown)) {
				let e = this.clientCapabilities.textDocument?.completion?.completionItem?.documentationFormat;
				this.supportsMarkdown = Array.isArray(e) && e.indexOf(un.Markdown) !== -1;
			}
			return this.supportsMarkdown;
		}
		doesSupportsCommitCharacters() {
			return St(this.supportsCommitCharacters) || (this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.commitCharactersSupport), this.supportsCommitCharacters;
		}
		doesSupportsLabelDetails() {
			return St(this.labelDetailsSupport) || (this.labelDetailsSupport = this.clientCapabilities.textDocument?.completion?.completionItem?.labelDetailsSupport), this.labelDetailsSupport;
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/services/jsonHover.js
function Wr(e) {
	if (e) return e.trim().replace(/[\\`*_{}[\]()<>#+\-.!]/g, "\\$&").replace(/(^ +)/gm, (e, t) => "&nbsp;".repeat(t.length)).replace(/( {2,})/g, (e, t) => " " + "&nbsp;".repeat(t.length - 1)).replace(/(\t+)/g, (e, t) => "&nbsp;".repeat(t.length * 4)).replace(/\n/g, "\\\n");
}
function Gr(e) {
	return e.indexOf("`") === -1 ? e : "`` " + e + " ``";
}
var Kr, qr = t((() => {
	zr(), lr(), Kr = class {
		constructor(e, t = [], n) {
			this.schemaService = e, this.contributions = t, this.promise = n || Promise;
		}
		doHover(e, t, n) {
			let r = e.offsetAt(t), i = n.getNodeFromOffset(r);
			if (!i || (i.type === "object" || i.type === "array") && r > i.offset + 1 && r < i.offset + i.length - 1) return this.promise.resolve(null);
			let a = i;
			if (i.type === "string") {
				let e = i.parent;
				if (e && e.type === "property" && e.keyNode === i && (i = e.valueNode, !i)) return this.promise.resolve(null);
			}
			let o = R.create(e.positionAt(a.offset), e.positionAt(a.offset + a.length)), s = (e) => ({
				contents: e,
				range: o
			}), c = vr(i);
			for (let t = this.contributions.length - 1; t >= 0; t--) {
				let n = this.contributions[t].getInfoContribution(e.uri, c);
				if (n) return n.then((e) => s(e));
			}
			return this.schemaService.getSchemaForResource(e.uri, n).then((e) => {
				if (!e) return null;
				let t, r, a, o, c = n.getMatchingSchemas(e.schema, i.offset).filter((e) => e.node === i && !e.inverted).map((e) => e.schema);
				for (let e of c) if (t ||= e.title, r = r || e.markdownDescription || Wr(e.description), e.enum) {
					let t = e.enum.indexOf(_r(i));
					e.markdownEnumDescriptions ? a = e.markdownEnumDescriptions[t] : e.enumDescriptions && (a = Wr(e.enumDescriptions[t])), a && (o = e.enum[t], typeof o != "string" && (o = JSON.stringify(o)));
				}
				let l = "";
				return t && (l = Wr(t)), r && (l.length > 0 && (l += "\n\n"), l += r), a && (l.length > 0 && (l += "\n\n"), l += `\`${Gr(o)}\`: ${a}`), s([l]);
			});
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/services/jsonValidation.js
function Jr(e) {
	if (e && typeof e == "object") {
		if (Ct(e.allowComments)) return e.allowComments;
		if (e.allOf) for (let t of e.allOf) {
			let e = Jr(t);
			if (Ct(e)) return e;
		}
	}
}
function Yr(e) {
	if (e && typeof e == "object") {
		if (Ct(e.allowTrailingCommas)) return e.allowTrailingCommas;
		let t = e;
		if (Ct(t.allowsTrailingCommas)) return t.allowsTrailingCommas;
		if (e.allOf) for (let t of e.allOf) {
			let e = Yr(t);
			if (Ct(e)) return e;
		}
	}
}
function Xr(e) {
	switch (e) {
		case "error": return z.Error;
		case "warning": return z.Warning;
		case "ignore": return;
	}
}
var Zr, Qr, $r = t((() => {
	lr(), pr(), Et(), Zr = class {
		constructor(e, t) {
			this.jsonSchemaService = e, this.promise = t, this.validationEnabled = !0;
		}
		configure(e) {
			e && (this.validationEnabled = e.validate !== !1, this.commentSeverity = e.allowComments ? void 0 : z.Error);
		}
		doValidation(e, t, n, r) {
			if (!this.validationEnabled) return this.promise.resolve([]);
			let i = [], a = {}, o = (e) => {
				let t = e.range.start.line + " " + e.range.start.character + " " + e.message;
				a[t] || (a[t] = !0, i.push(e));
			}, s = (r) => {
				let a = n?.trailingCommas ? Xr(n.trailingCommas) : z.Error, s = n?.comments ? Xr(n.comments) : this.commentSeverity, c = n?.schemaValidation ? Xr(n.schemaValidation) : z.Warning, l = n?.schemaRequest ? Xr(n.schemaRequest) : z.Warning;
				if (r) {
					let i = (n, r, i) => {
						if (t.root && l) {
							let a = t.root, s = a.type === "object" ? a.properties[0] : void 0;
							if (s && s.keyNode.value === "$schema") {
								let t = s.valueNode || s, a = R.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length));
								o(Kt.create(a, n, l, r, "json", i));
							} else {
								let t = R.create(e.positionAt(a.offset), e.positionAt(a.offset + 1));
								o(Kt.create(t, n, l, r, "json", i));
							}
						}
					};
					if (r.errors.length) {
						let e = r.errors[0];
						i(e.message, e.code, e.relatedInformation);
					} else if (c) {
						for (let e of r.warnings) i(e.message, e.code, e.relatedInformation);
						let a = t.validate(e, r.schema, c, n?.schemaDraft);
						a && a.forEach(o);
					}
					Jr(r.schema) && (s = void 0), Yr(r.schema) && (a = void 0);
				}
				for (let e of t.syntaxErrors) {
					if (e.code === H.TrailingComma) {
						if (typeof a != "number") continue;
						e.severity = a;
					}
					o(e);
				}
				if (typeof s == "number") {
					let e = U("Comments are not permitted in JSON.");
					t.comments.forEach((t) => {
						o(Kt.create(t, e, s, H.CommentNotPermitted));
					});
				}
				return i;
			};
			if (r) {
				let e = r.id || "schemaservice://untitled/" + Qr++;
				return this.jsonSchemaService.registerExternalSchema({
					uri: e,
					schema: r
				}).getResolvedSchema().then((e) => s(e));
			}
			return this.jsonSchemaService.getSchemaForResource(e.uri, t).then((e) => s(e));
		}
		getLanguageStatus(e, t) {
			return { schemas: this.jsonSchemaService.getSchemaURIsForResource(e.uri, t) };
		}
	}, Qr = 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/colors.js
function q(e) {
	return e < ti ? 0 : e <= ni ? e - ti : (e < ri && (e += 32), e >= ri && e <= ii ? e - ri + 10 : 0);
}
function ei(e) {
	if (e[0] === "#") switch (e.length) {
		case 4: return {
			red: q(e.charCodeAt(1)) * 17 / 255,
			green: q(e.charCodeAt(2)) * 17 / 255,
			blue: q(e.charCodeAt(3)) * 17 / 255,
			alpha: 1
		};
		case 5: return {
			red: q(e.charCodeAt(1)) * 17 / 255,
			green: q(e.charCodeAt(2)) * 17 / 255,
			blue: q(e.charCodeAt(3)) * 17 / 255,
			alpha: q(e.charCodeAt(4)) * 17 / 255
		};
		case 7: return {
			red: (q(e.charCodeAt(1)) * 16 + q(e.charCodeAt(2))) / 255,
			green: (q(e.charCodeAt(3)) * 16 + q(e.charCodeAt(4))) / 255,
			blue: (q(e.charCodeAt(5)) * 16 + q(e.charCodeAt(6))) / 255,
			alpha: 1
		};
		case 9: return {
			red: (q(e.charCodeAt(1)) * 16 + q(e.charCodeAt(2))) / 255,
			green: (q(e.charCodeAt(3)) * 16 + q(e.charCodeAt(4))) / 255,
			blue: (q(e.charCodeAt(5)) * 16 + q(e.charCodeAt(6))) / 255,
			alpha: (q(e.charCodeAt(7)) * 16 + q(e.charCodeAt(8))) / 255
		};
	}
}
var ti, ni, ri, ii, ai = t((() => {
	ti = 48, ni = 57, ri = 97, ii = 102;
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/services/jsonDocumentSymbols.js
function oi(e, t) {
	return R.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length));
}
function si(e) {
	return _r(e) || U("<empty>");
}
var ci, li = t((() => {
	zr(), jt(), ai(), pr(), lr(), ci = class {
		constructor(e) {
			this.schemaService = e;
		}
		findDocumentSymbols(e, t, n = { resultLimit: Number.MAX_VALUE }) {
			let r = t.root;
			if (!r) return [];
			let i = n.resultLimit || Number.MAX_VALUE, a = e.uri;
			if ((a === "vscode://defaultsettings/keybindings.json" || Ot(a.toLowerCase(), "/user/keybindings.json")) && r.type === "array") {
				let t = [];
				for (let o of r.items) if (o.type === "object") {
					for (let r of o.properties) if (r.keyNode.value === "key" && r.valueNode) {
						let s = It.create(e.uri, oi(e, o));
						if (t.push({
							name: si(r.valueNode),
							kind: En.Function,
							location: s
						}), i--, i <= 0) return n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), t;
					}
				}
				return t;
			}
			let o = [{
				node: r,
				containerName: ""
			}], s = 0, c = !1, l = [], u = (t, n) => {
				t.type === "array" ? t.items.forEach((e) => {
					e && o.push({
						node: e,
						containerName: n
					});
				}) : t.type === "object" && t.properties.forEach((t) => {
					let r = t.valueNode;
					if (r) {
						if (i > 0) {
							i--;
							let a = It.create(e.uri, oi(e, t)), s = n ? n + "." + t.keyNode.value : t.keyNode.value;
							l.push({
								name: this.getKeyLabel(t),
								kind: this.getSymbolKind(r.type),
								location: a,
								containerName: n
							}), o.push({
								node: r,
								containerName: s
							});
						} else c = !0;
					}
				});
			};
			for (; s < o.length;) {
				let e = o[s++];
				u(e.node, e.containerName);
			}
			return c && n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), l;
		}
		findDocumentSymbols2(e, t, n = { resultLimit: Number.MAX_VALUE }) {
			let r = t.root;
			if (!r) return [];
			let i = n.resultLimit || Number.MAX_VALUE, a = e.uri;
			if ((a === "vscode://defaultsettings/keybindings.json" || Ot(a.toLowerCase(), "/user/keybindings.json")) && r.type === "array") {
				let t = [];
				for (let o of r.items) if (o.type === "object") {
					for (let r of o.properties) if (r.keyNode.value === "key" && r.valueNode) {
						let s = oi(e, o), c = oi(e, r.keyNode);
						if (t.push({
							name: si(r.valueNode),
							kind: En.Function,
							range: s,
							selectionRange: c
						}), i--, i <= 0) return n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), t;
					}
				}
				return t;
			}
			let o = [], s = [{
				node: r,
				result: o
			}], c = 0, l = !1, u = (t, n) => {
				t.type === "array" ? t.items.forEach((t, r) => {
					if (t) {
						if (i > 0) {
							i--;
							let a = oi(e, t), o = a, c = {
								name: String(r),
								kind: this.getSymbolKind(t.type),
								range: a,
								selectionRange: o,
								children: []
							};
							n.push(c), s.push({
								result: c.children,
								node: t
							});
						} else l = !0;
					}
				}) : t.type === "object" && t.properties.forEach((t) => {
					let r = t.valueNode;
					if (r) {
						if (i > 0) {
							i--;
							let a = oi(e, t), o = oi(e, t.keyNode), c = [], l = {
								name: this.getKeyLabel(t),
								kind: this.getSymbolKind(r.type),
								range: a,
								selectionRange: o,
								children: c,
								detail: this.getDetail(r)
							};
							n.push(l), s.push({
								result: c,
								node: r
							});
						} else l = !0;
					}
				});
			};
			for (; c < s.length;) {
				let e = s[c++];
				u(e.node, e.result);
			}
			return l && n && n.onResultLimitExceeded && n.onResultLimitExceeded(a), o;
		}
		getSymbolKind(e) {
			switch (e) {
				case "object": return En.Module;
				case "string": return En.String;
				case "number": return En.Number;
				case "array": return En.Array;
				case "boolean": return En.Boolean;
				default: return En.Variable;
			}
		}
		getKeyLabel(e) {
			let t = e.keyNode.value;
			return t &&= t.replace(/[\n]/g, "↵"), t && t.trim() ? t : `"${t}"`;
		}
		getDetail(e) {
			if (e) {
				if (e.type === "boolean" || e.type === "number" || e.type === "null" || e.type === "string") return String(e.value);
				if (e.type === "array") return e.children.length ? void 0 : "[]";
				if (e.type === "object") return e.children.length ? void 0 : "{}";
			}
		}
		findDocumentColors(e, t, n) {
			return this.schemaService.getSchemaForResource(e.uri, t).then((r) => {
				let i = [];
				if (r) {
					let a = n && typeof n.resultLimit == "number" ? n.resultLimit : Number.MAX_VALUE, o = t.getMatchingSchemas(r.schema), s = {};
					for (let t of o) if (!t.inverted && t.schema && (t.schema.format === "color" || t.schema.format === "color-hex") && t.node && t.node.type === "string") {
						let r = String(t.node.offset);
						if (!s[r]) {
							let o = ei(_r(t.node));
							if (o) {
								let n = oi(e, t.node);
								i.push({
									color: o,
									range: n
								});
							}
							if (s[r] = !0, a--, a <= 0) return n && n.onResultLimitExceeded && n.onResultLimitExceeded(e.uri), i;
						}
					}
				}
				return i;
			});
		}
		getColorPresentations(e, t, n, r) {
			let i = [], a = Math.round(n.red * 255), o = Math.round(n.green * 255), s = Math.round(n.blue * 255);
			function c(e) {
				let t = e.toString(16);
				return t.length === 2 ? t : "0" + t;
			}
			let l;
			return l = n.alpha === 1 ? `#${c(a)}${c(o)}${c(s)}` : `#${c(a)}${c(o)}${c(s)}${c(Math.round(n.alpha * 255))}`, i.push({
				label: l,
				textEdit: Jt.replace(r, JSON.stringify(l))
			}), i;
		}
	};
})), ui, di = t((() => {
	ui = {
		$id: "https://json-schema.org/draft/2019-09/schema",
		$schema: "https://json-schema.org/draft/2019-09/schema",
		title: "(Flattened static) Core and Validation specifications meta-schema",
		type: ["object", "boolean"],
		properties: {
			definitions: {
				$comment: "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
				type: "object",
				additionalProperties: { $ref: "#" },
				default: {}
			},
			dependencies: {
				$comment: "\"dependencies\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \"dependentSchemas\" and \"dependentRequired\"",
				type: "object",
				additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/stringArray" }] }
			},
			$id: {
				type: "string",
				format: "uri-reference",
				$comment: "Non-empty fragments not allowed.",
				pattern: "^[^#]*#?$"
			},
			$schema: {
				type: "string",
				format: "uri"
			},
			$anchor: {
				type: "string",
				pattern: "^[A-Za-z][-A-Za-z0-9.:_]*$"
			},
			$ref: {
				type: "string",
				format: "uri-reference"
			},
			$recursiveAnchor: {
				type: "boolean",
				default: !1
			},
			$vocabulary: {
				type: "object",
				propertyNames: {
					type: "string",
					format: "uri"
				},
				additionalProperties: { type: "boolean" }
			},
			$comment: { type: "string" },
			$defs: {
				type: "object",
				additionalProperties: { $ref: "#" },
				default: {}
			},
			additionalItems: { $ref: "#" },
			unevaluatedItems: { $ref: "#" },
			items: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/schemaArray" }] },
			contains: { $ref: "#" },
			additionalProperties: { $ref: "#" },
			unevaluatedProperties: { $ref: "#" },
			properties: {
				type: "object",
				additionalProperties: { $ref: "#" },
				default: {}
			},
			patternProperties: {
				type: "object",
				additionalProperties: { $ref: "#" },
				propertyNames: { format: "regex" },
				default: {}
			},
			dependentSchemas: {
				type: "object",
				additionalProperties: { $ref: "#" }
			},
			propertyNames: { $ref: "#" },
			if: { $ref: "#" },
			then: { $ref: "#" },
			else: { $ref: "#" },
			allOf: { $ref: "#/$defs/schemaArray" },
			anyOf: { $ref: "#/$defs/schemaArray" },
			oneOf: { $ref: "#/$defs/schemaArray" },
			not: { $ref: "#" },
			multipleOf: {
				type: "number",
				exclusiveMinimum: 0
			},
			maximum: { type: "number" },
			exclusiveMaximum: { type: "number" },
			minimum: { type: "number" },
			exclusiveMinimum: { type: "number" },
			maxLength: { $ref: "#/$defs/nonNegativeInteger" },
			minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
			pattern: {
				type: "string",
				format: "regex"
			},
			maxItems: { $ref: "#/$defs/nonNegativeInteger" },
			minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
			uniqueItems: {
				type: "boolean",
				default: !1
			},
			maxContains: { $ref: "#/$defs/nonNegativeInteger" },
			minContains: {
				$ref: "#/$defs/nonNegativeInteger",
				default: 1
			},
			maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
			minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
			required: { $ref: "#/$defs/stringArray" },
			dependentRequired: {
				type: "object",
				additionalProperties: { $ref: "#/$defs/stringArray" }
			},
			const: !0,
			enum: {
				type: "array",
				items: !0
			},
			type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, {
				type: "array",
				items: { $ref: "#/$defs/simpleTypes" },
				minItems: 1,
				uniqueItems: !0
			}] },
			title: { type: "string" },
			description: { type: "string" },
			default: !0,
			deprecated: {
				type: "boolean",
				default: !1
			},
			readOnly: {
				type: "boolean",
				default: !1
			},
			writeOnly: {
				type: "boolean",
				default: !1
			},
			examples: {
				type: "array",
				items: !0
			},
			format: { type: "string" },
			contentMediaType: { type: "string" },
			contentEncoding: { type: "string" },
			contentSchema: { $ref: "#" }
		},
		$defs: {
			schemaArray: {
				type: "array",
				minItems: 1,
				items: { $ref: "#" }
			},
			nonNegativeInteger: {
				type: "integer",
				minimum: 0
			},
			nonNegativeIntegerDefault0: {
				$ref: "#/$defs/nonNegativeInteger",
				default: 0
			},
			simpleTypes: { enum: [
				"array",
				"boolean",
				"integer",
				"null",
				"number",
				"object",
				"string"
			] },
			stringArray: {
				type: "array",
				items: { type: "string" },
				uniqueItems: !0,
				default: []
			}
		}
	};
})), fi, pi = t((() => {
	fi = {
		$id: "https://json-schema.org/draft/2020-12/schema",
		$schema: "https://json-schema.org/draft/2020-12/schema",
		title: "(Flattened static) Core and Validation specifications meta-schema",
		type: ["object", "boolean"],
		properties: {
			definitions: {
				$comment: "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
				type: "object",
				additionalProperties: { $ref: "#" },
				default: {}
			},
			dependencies: {
				$comment: "\"dependencies\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \"dependentSchemas\" and \"dependentRequired\"",
				type: "object",
				additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/$defs/stringArray" }] }
			},
			$id: {
				type: "string",
				format: "uri-reference",
				$comment: "Non-empty fragments not allowed.",
				pattern: "^[^#]*#?$"
			},
			$schema: {
				type: "string",
				format: "uri"
			},
			$anchor: {
				type: "string",
				pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
			},
			$ref: {
				type: "string",
				format: "uri-reference"
			},
			$dynamicRef: {
				type: "string",
				format: "uri-reference"
			},
			$vocabulary: {
				type: "object",
				propertyNames: {
					type: "string",
					format: "uri"
				},
				additionalProperties: { type: "boolean" }
			},
			$comment: { type: "string" },
			$defs: {
				type: "object",
				additionalProperties: { $ref: "#" },
				default: {}
			},
			prefixItems: { $ref: "#/$defs/schemaArray" },
			items: { $ref: "#" },
			contains: { $ref: "#" },
			additionalProperties: { $ref: "#" },
			properties: {
				type: "object",
				additionalProperties: { $ref: "#" },
				default: {}
			},
			patternProperties: {
				type: "object",
				additionalProperties: { $ref: "#" },
				propertyNames: { format: "regex" },
				default: {}
			},
			dependentSchemas: {
				type: "object",
				additionalProperties: { $ref: "#" }
			},
			propertyNames: { $ref: "#" },
			if: { $ref: "#" },
			then: { $ref: "#" },
			else: { $ref: "#" },
			allOf: { $ref: "#/$defs/schemaArray" },
			anyOf: { $ref: "#/$defs/schemaArray" },
			oneOf: { $ref: "#/$defs/schemaArray" },
			not: { $ref: "#" },
			unevaluatedItems: { $ref: "#" },
			unevaluatedProperties: { $ref: "#" },
			multipleOf: {
				type: "number",
				exclusiveMinimum: 0
			},
			maximum: { type: "number" },
			exclusiveMaximum: { type: "number" },
			minimum: { type: "number" },
			exclusiveMinimum: { type: "number" },
			maxLength: { $ref: "#/$defs/nonNegativeInteger" },
			minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
			pattern: {
				type: "string",
				format: "regex"
			},
			maxItems: { $ref: "#/$defs/nonNegativeInteger" },
			minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
			uniqueItems: {
				type: "boolean",
				default: !1
			},
			maxContains: { $ref: "#/$defs/nonNegativeInteger" },
			minContains: {
				$ref: "#/$defs/nonNegativeInteger",
				default: 1
			},
			maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
			minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
			required: { $ref: "#/$defs/stringArray" },
			dependentRequired: {
				type: "object",
				additionalProperties: { $ref: "#/$defs/stringArray" }
			},
			const: !0,
			enum: {
				type: "array",
				items: !0
			},
			type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, {
				type: "array",
				items: { $ref: "#/$defs/simpleTypes" },
				minItems: 1,
				uniqueItems: !0
			}] },
			title: { type: "string" },
			description: { type: "string" },
			default: !0,
			deprecated: {
				type: "boolean",
				default: !1
			},
			readOnly: {
				type: "boolean",
				default: !1
			},
			writeOnly: {
				type: "boolean",
				default: !1
			},
			examples: {
				type: "array",
				items: !0
			},
			format: { type: "string" },
			contentMediaType: { type: "string" },
			contentEncoding: { type: "string" },
			contentSchema: { $ref: "#" }
		},
		$defs: {
			schemaArray: {
				type: "array",
				minItems: 1,
				items: { $ref: "#" }
			},
			nonNegativeInteger: {
				type: "integer",
				minimum: 0
			},
			nonNegativeIntegerDefault0: {
				$ref: "#/$defs/nonNegativeInteger",
				default: 0
			},
			simpleTypes: { enum: [
				"array",
				"boolean",
				"integer",
				"null",
				"number",
				"object",
				"string"
			] },
			stringArray: {
				type: "array",
				items: { type: "string" },
				uniqueItems: !0,
				default: []
			}
		}
	};
})), mi, hi, gi = t((() => {
	di(), pi(), pr(), mi = {
		schemaAssociations: [],
		schemas: {
			"https://json-schema.org/draft-04/schema": {
				definitions: {
					schemaArray: {
						type: "array",
						minItems: 1,
						items: { $ref: "#" }
					},
					positiveInteger: {
						type: "integer",
						minimum: 0
					},
					positiveIntegerDefault0: { allOf: [{ $ref: "#/definitions/positiveInteger" }, { default: 0 }] },
					simpleTypes: {
						type: "string",
						enum: [
							"array",
							"boolean",
							"integer",
							"null",
							"number",
							"object",
							"string"
						]
					},
					stringArray: {
						type: "array",
						items: { type: "string" },
						minItems: 1,
						uniqueItems: !0
					}
				},
				type: "object",
				properties: {
					id: {
						type: "string",
						format: "uri"
					},
					$schema: {
						type: "string",
						format: "uri"
					},
					title: { type: "string" },
					description: { type: "string" },
					default: {},
					multipleOf: {
						type: "number",
						minimum: 0,
						exclusiveMinimum: !0
					},
					maximum: { type: "number" },
					exclusiveMaximum: {
						type: "boolean",
						default: !1
					},
					minimum: { type: "number" },
					exclusiveMinimum: {
						type: "boolean",
						default: !1
					},
					maxLength: { allOf: [{ $ref: "#/definitions/positiveInteger" }] },
					minLength: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }] },
					pattern: {
						type: "string",
						format: "regex"
					},
					additionalItems: {
						anyOf: [{ type: "boolean" }, { $ref: "#" }],
						default: {}
					},
					items: {
						anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
						default: {}
					},
					maxItems: { allOf: [{ $ref: "#/definitions/positiveInteger" }] },
					minItems: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }] },
					uniqueItems: {
						type: "boolean",
						default: !1
					},
					maxProperties: { allOf: [{ $ref: "#/definitions/positiveInteger" }] },
					minProperties: { allOf: [{ $ref: "#/definitions/positiveIntegerDefault0" }] },
					required: { allOf: [{ $ref: "#/definitions/stringArray" }] },
					additionalProperties: {
						anyOf: [{ type: "boolean" }, { $ref: "#" }],
						default: {}
					},
					definitions: {
						type: "object",
						additionalProperties: { $ref: "#" },
						default: {}
					},
					properties: {
						type: "object",
						additionalProperties: { $ref: "#" },
						default: {}
					},
					patternProperties: {
						type: "object",
						additionalProperties: { $ref: "#" },
						default: {}
					},
					dependencies: {
						type: "object",
						additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }
					},
					enum: {
						type: "array",
						minItems: 1,
						uniqueItems: !0
					},
					type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, {
						type: "array",
						items: { $ref: "#/definitions/simpleTypes" },
						minItems: 1,
						uniqueItems: !0
					}] },
					format: { anyOf: [{
						type: "string",
						enum: [
							"date-time",
							"uri",
							"email",
							"hostname",
							"ipv4",
							"ipv6",
							"regex"
						]
					}, { type: "string" }] },
					allOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
					anyOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
					oneOf: { allOf: [{ $ref: "#/definitions/schemaArray" }] },
					not: { allOf: [{ $ref: "#" }] }
				},
				dependencies: {
					exclusiveMaximum: ["maximum"],
					exclusiveMinimum: ["minimum"]
				},
				default: {}
			},
			"https://json-schema.org/draft-07/schema": {
				definitions: {
					schemaArray: {
						type: "array",
						minItems: 1,
						items: { $ref: "#" }
					},
					nonNegativeInteger: {
						type: "integer",
						minimum: 0
					},
					nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] },
					simpleTypes: { enum: [
						"array",
						"boolean",
						"integer",
						"null",
						"number",
						"object",
						"string"
					] },
					stringArray: {
						type: "array",
						items: { type: "string" },
						uniqueItems: !0,
						default: []
					}
				},
				type: ["object", "boolean"],
				properties: {
					$id: {
						type: "string",
						format: "uri-reference"
					},
					$schema: {
						type: "string",
						format: "uri"
					},
					$ref: {
						type: "string",
						format: "uri-reference"
					},
					$comment: { type: "string" },
					title: { type: "string" },
					description: { type: "string" },
					default: !0,
					readOnly: {
						type: "boolean",
						default: !1
					},
					examples: {
						type: "array",
						items: !0
					},
					multipleOf: {
						type: "number",
						exclusiveMinimum: 0
					},
					maximum: { type: "number" },
					exclusiveMaximum: { type: "number" },
					minimum: { type: "number" },
					exclusiveMinimum: { type: "number" },
					maxLength: { $ref: "#/definitions/nonNegativeInteger" },
					minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
					pattern: {
						type: "string",
						format: "regex"
					},
					additionalItems: { $ref: "#" },
					items: {
						anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
						default: !0
					},
					maxItems: { $ref: "#/definitions/nonNegativeInteger" },
					minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
					uniqueItems: {
						type: "boolean",
						default: !1
					},
					contains: { $ref: "#" },
					maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
					minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
					required: { $ref: "#/definitions/stringArray" },
					additionalProperties: { $ref: "#" },
					definitions: {
						type: "object",
						additionalProperties: { $ref: "#" },
						default: {}
					},
					properties: {
						type: "object",
						additionalProperties: { $ref: "#" },
						default: {}
					},
					patternProperties: {
						type: "object",
						additionalProperties: { $ref: "#" },
						propertyNames: { format: "regex" },
						default: {}
					},
					dependencies: {
						type: "object",
						additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }
					},
					propertyNames: { $ref: "#" },
					const: !0,
					enum: {
						type: "array",
						items: !0,
						minItems: 1,
						uniqueItems: !0
					},
					type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, {
						type: "array",
						items: { $ref: "#/definitions/simpleTypes" },
						minItems: 1,
						uniqueItems: !0
					}] },
					format: { type: "string" },
					contentMediaType: { type: "string" },
					contentEncoding: { type: "string" },
					if: { $ref: "#" },
					then: { $ref: "#" },
					else: { $ref: "#" },
					allOf: { $ref: "#/definitions/schemaArray" },
					anyOf: { $ref: "#/definitions/schemaArray" },
					oneOf: { $ref: "#/definitions/schemaArray" },
					not: { $ref: "#" }
				},
				default: !0
			},
			"https://json-schema.org/draft/2020-12/schema": fi,
			"https://json-schema.org/draft/2019-09/schema": ui
		}
	}, hi = {
		id: U("A unique identifier for the schema."),
		$schema: U("The schema to verify this document against."),
		title: U("A descriptive title of the schema."),
		description: U("A long description of the schema. Used in hover menus and suggestions."),
		default: U("A default value. Used by suggestions."),
		multipleOf: U("A number that should cleanly divide the current value (i.e. have no remainder)."),
		maximum: U("The maximum numerical value, inclusive by default."),
		exclusiveMaximum: U("Makes the maximum property exclusive."),
		minimum: U("The minimum numerical value, inclusive by default."),
		exclusiveMinimum: U("Makes the minimum property exclusive."),
		maxLength: U("The maximum length of a string."),
		minLength: U("The minimum length of a string."),
		pattern: U("A regular expression to match the string against. It is not implicitly anchored."),
		additionalItems: U("For arrays, only when items is set as an array. If items are a schema, this schema validates items after the ones specified by the items schema. If false, additional items will cause validation to fail."),
		items: U("For arrays. Can either be a schema to validate every element against or an array of schemas to validate each item against in order (the first schema will validate the first element, the second schema will validate the second element, and so on."),
		maxItems: U("The maximum number of items that can be inside an array. Inclusive."),
		minItems: U("The minimum number of items that can be inside an array. Inclusive."),
		uniqueItems: U("If all of the items in the array must be unique. Defaults to false."),
		maxProperties: U("The maximum number of properties an object can have. Inclusive."),
		minProperties: U("The minimum number of properties an object can have. Inclusive."),
		required: U("An array of strings that lists the names of all properties required on this object."),
		additionalProperties: U("Either a schema or a boolean. If a schema, used to validate all properties not matched by 'properties', 'propertyNames', or 'patternProperties'. If false, any properties not defined by the adjacent keywords will cause this schema to fail."),
		definitions: U("Not used for validation. Place subschemas here that you wish to reference inline with $ref."),
		properties: U("A map of property names to schemas for each property."),
		patternProperties: U("A map of regular expressions on property names to schemas for matching properties."),
		dependencies: U("A map of property names to either an array of property names or a schema. An array of property names means the property named in the key depends on the properties in the array being present in the object in order to be valid. If the value is a schema, then the schema is only applied to the object if the property in the key exists on the object."),
		enum: U("The set of literal values that are valid."),
		type: U("Either a string of one of the basic schema types (number, integer, null, array, object, boolean, string) or an array of strings specifying a subset of those types."),
		format: U("Describes the format expected for the value. By default, not used for validation"),
		allOf: U("An array of schemas, all of which must match."),
		anyOf: U("An array of schemas, where at least one must match."),
		oneOf: U("An array of schemas, exactly one of which must match."),
		not: U("A schema which must not match."),
		$id: U("A unique identifier for the schema."),
		$ref: U("Reference a definition hosted on any location."),
		$comment: U("Comments from schema authors to readers or maintainers of the schema."),
		readOnly: U("Indicates that the value of the instance is managed exclusively by the owning authority."),
		examples: U("Sample JSON values associated with a particular schema, for the purpose of illustrating usage."),
		contains: U("An array instance is valid against \"contains\" if at least one of its elements is valid against the given schema."),
		propertyNames: U("If the instance is an object, this keyword validates if every property name in the instance validates against the provided schema."),
		const: U("An instance validates successfully against this keyword if its value is equal to the value of the keyword."),
		contentMediaType: U("Describes the media type of a string property."),
		contentEncoding: U("Describes the content encoding of a string property."),
		if: U("The validation outcome of the \"if\" subschema controls which of the \"then\" or \"else\" keywords are evaluated."),
		then: U("The \"then\" subschema is used for validation when the \"if\" subschema succeeds."),
		else: U("The \"else\" subschema is used for validation when the \"if\" subschema fails.")
	};
	for (let e in mi.schemas) {
		let t = mi.schemas[e];
		for (let e in t.properties) {
			let n = t.properties[e];
			typeof n == "boolean" && (n = t.properties[e] = {});
			let r = hi[e];
			r && (n.description = r);
		}
	}
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/glob.js
function _i(e, t) {
	if (typeof e != "string") throw TypeError("Expected a string");
	let n = String(e), r = "", i = t ? !!t.extended : !1, a = t ? !!t.globstar : !1, o = !1, s = t && typeof t.flags == "string" ? t.flags : "", c;
	for (let e = 0, t = n.length; e < t; e++) switch (c = n[e], c) {
		case "/":
		case "$":
		case "^":
		case "+":
		case ".":
		case "(":
		case ")":
		case "=":
		case "!":
		case "|":
			r += "\\" + c;
			break;
		case "?": if (i) {
			r += ".";
			break;
		}
		case "[":
		case "]": if (i) {
			r += c;
			break;
		}
		case "{": if (i) {
			o = !0, r += "(";
			break;
		}
		case "}": if (i) {
			o = !1, r += ")";
			break;
		}
		case ",":
			if (o) {
				r += "|";
				break;
			}
			r += "\\" + c;
			break;
		case "*":
			let t = n[e - 1], s = 1;
			for (; n[e + 1] === "*";) s++, e++;
			let l = n[e + 1];
			a ? s > 1 && (t === "/" || t === void 0 || t === "{" || t === ",") && (l === "/" || l === void 0 || l === "," || l === "}") ? (l === "/" ? e++ : t === "/" && r.endsWith("\\/") && (r = r.substr(0, r.length - 2)), r += "((?:[^/]*(?:/|$))*)") : r += "([^/]*)" : r += ".*";
			break;
		default: r += c;
	}
	return (!s || !~s.indexOf("g")) && (r = "^" + r + "$"), new RegExp(r, s);
}
var vi = t((() => {}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/services/jsonSchemaService.js
function yi(e, t, n) {
	return {
		message: e,
		code: t,
		relatedInformation: n ? [{
			location: {
				uri: n,
				range: R.create(0, 0, 0, 0)
			},
			message: e
		}] : void 0
	};
}
function bi(e) {
	try {
		return o.parse(e).with({
			fragment: null,
			query: null
		}).toString(!0);
	} catch {
		return e;
	}
}
function xi(e) {
	try {
		let t = o.parse(e);
		if (t.scheme === "file") return t.fsPath;
	} catch {}
	return e;
}
var Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai = t((() => {
	bt(), l(), jt(), zr(), lr(), pr(), vi(), Et(), ar(), Si = "!", Ci = "/", wi = class {
		constructor(e, t, n) {
			this.folderUri = t, this.uris = n, this.globWrappers = [];
			try {
				for (let t of e) {
					let e = t[0] !== Si;
					e || (t = t.substring(1)), t.length > 0 && (t[0] === Ci && (t = t.substring(1)), this.globWrappers.push({
						regexp: _i("**/" + t, {
							extended: !0,
							globstar: !0
						}),
						include: e
					}));
				}
				t && (t = bi(t), t.endsWith("/") || (t += "/"), this.folderUri = t);
			} catch {
				this.globWrappers.length = 0, this.uris = [];
			}
		}
		matchesPattern(e) {
			if (this.folderUri && !e.startsWith(this.folderUri)) return !1;
			let t = !1;
			for (let { regexp: n, include: r } of this.globWrappers) n.test(e) && (t = r);
			return t;
		}
		getURIs() {
			return this.uris;
		}
	}, Ti = class {
		constructor(e, t, n) {
			this.service = e, this.uri = t, this.dependencies = /* @__PURE__ */ new Set(), this.anchors = void 0, n && (this.unresolvedSchema = this.service.promise.resolve(new Ei(n)));
		}
		getUnresolvedSchema() {
			return this.unresolvedSchema ||= this.service.loadSchema(this.uri), this.unresolvedSchema;
		}
		getResolvedSchema() {
			return this.resolvedSchema ||= this.getUnresolvedSchema().then((e) => this.service.resolveSchemaContent(e, this)), this.resolvedSchema;
		}
		clearSchema() {
			let e = !!this.unresolvedSchema;
			return this.resolvedSchema = void 0, this.unresolvedSchema = void 0, this.dependencies.clear(), this.anchors = void 0, e;
		}
	}, Ei = class {
		constructor(e, t = []) {
			this.schema = e, this.errors = t;
		}
	}, Di = class {
		constructor(e, t = [], n = [], r) {
			this.schema = e, this.errors = t, this.warnings = n, this.schemaDraft = r;
		}
		getSection(e) {
			let t = this.getSectionRecursive(e, this.schema);
			if (t) return W(t);
		}
		getSectionRecursive(e, t) {
			if (!t || typeof t == "boolean" || e.length === 0) return t;
			let n = e.shift();
			if (t.properties && typeof t.properties[n]) return this.getSectionRecursive(e, t.properties[n]);
			if (t.patternProperties) {
				for (let r of Object.keys(t.patternProperties)) if (kt(r)?.test(n)) return this.getSectionRecursive(e, t.patternProperties[r]);
			} else if (typeof t.additionalProperties == "object") return this.getSectionRecursive(e, t.additionalProperties);
			else if (n.match("[0-9]+")) {
				if (Array.isArray(t.items)) {
					let r = parseInt(n, 10);
					if (!isNaN(r) && t.items[r]) return this.getSectionRecursive(e, t.items[r]);
				} else if (t.items) return this.getSectionRecursive(e, t.items);
			}
		}
	}, Oi = class {
		constructor(e, t, n) {
			this.contextService = t, this.requestService = e, this.promiseConstructor = n || Promise, this.callOnDispose = [], this.contributionSchemas = {}, this.contributionAssociations = [], this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {};
		}
		getRegisteredSchemaIds(e) {
			return Object.keys(this.registeredSchemasIds).filter((t) => {
				let n = o.parse(t).scheme;
				return n !== "schemaservice" && (!e || e(n));
			});
		}
		get promise() {
			return this.promiseConstructor;
		}
		dispose() {
			for (; this.callOnDispose.length > 0;) this.callOnDispose.pop()();
		}
		onResourceChange(e) {
			this.cachedSchemaForResource = void 0;
			let t = !1;
			e = mr(e);
			let n = [e], r = Object.keys(this.schemasById).map((e) => this.schemasById[e]);
			for (; n.length;) {
				let e = n.pop();
				for (let i = 0; i < r.length; i++) {
					let a = r[i];
					a && (a.uri === e || a.dependencies.has(e)) && (a.uri !== e && n.push(a.uri), a.clearSchema() && (t = !0), r[i] = void 0);
				}
			}
			return t;
		}
		setSchemaContributions(e) {
			if (e.schemas) {
				let t = e.schemas;
				for (let e in t) {
					let n = mr(e);
					this.contributionSchemas[n] = this.addSchemaHandle(n, t[e]);
				}
			}
			if (Array.isArray(e.schemaAssociations)) {
				let t = e.schemaAssociations;
				for (let e of t) {
					let t = e.uris.map(mr), n = this.addFilePatternAssociation(e.pattern, e.folderUri, t);
					this.contributionAssociations.push(n);
				}
			}
		}
		addSchemaHandle(e, t) {
			let n = new Ti(this, e, t);
			return this.schemasById[e] = n, n;
		}
		getOrAddSchemaHandle(e, t) {
			return this.schemasById[e] || this.addSchemaHandle(e, t);
		}
		addFilePatternAssociation(e, t, n) {
			let r = new wi(e, t, n);
			return this.filePatternAssociations.push(r), r;
		}
		registerExternalSchema(e) {
			let t = mr(e.uri);
			return this.registeredSchemasIds[t] = !0, this.cachedSchemaForResource = void 0, e.fileMatch && e.fileMatch.length && this.addFilePatternAssociation(e.fileMatch, e.folderUri, [t]), e.schema ? this.addSchemaHandle(t, e.schema) : this.getOrAddSchemaHandle(t);
		}
		clearExternalSchemas() {
			this.schemasById = {}, this.filePatternAssociations = [], this.registeredSchemasIds = {}, this.cachedSchemaForResource = void 0;
			for (let e in this.contributionSchemas) this.schemasById[e] = this.contributionSchemas[e], this.registeredSchemasIds[e] = !0;
			for (let e of this.contributionAssociations) this.filePatternAssociations.push(e);
		}
		getResolvedSchema(e) {
			let t = mr(e), n = this.schemasById[t];
			return n ? n.getResolvedSchema() : this.promise.resolve(void 0);
		}
		loadSchema(e) {
			if (!this.requestService) {
				let t = U("Unable to load schema from '{0}'. No schema request service available", xi(e));
				return this.promise.resolve(new Ei({}, [yi(t, H.SchemaResolveError, e)]));
			}
			return this.requestService(e).then((t) => {
				if (!t) {
					let t = U("Unable to load schema from '{0}': No content.", xi(e));
					return new Ei({}, [yi(t, H.SchemaResolveError, e)]);
				}
				let n = [];
				t.charCodeAt(0) === 65279 && (n.push(yi(U("Problem reading content from '{0}': UTF-8 with BOM detected, only UTF 8 is allowed.", xi(e)), H.SchemaResolveError, e)), t = t.trimStart());
				let r = {}, i = [];
				return r = ht(t, i), i.length && n.push(yi(U("Unable to parse content from '{0}': Parse error at offset {1}.", xi(e), i[0].offset), H.SchemaResolveError, e)), new Ei(r, n);
			}, (t) => {
				let { message: n, code: r } = t;
				if (typeof n != "string") {
					let e = t.toString(), r = t.toString().split("Error: ");
					r.length > 1 && (e = r[1]), Ot(e, ".") && (e = e.substr(0, e.length - 1)), n = e;
				}
				let i = H.SchemaResolveError;
				typeof r == "number" && r < 65536 && (i += r);
				let a = U("Unable to load schema from '{0}': {1}.", xi(e), n);
				return new Ei({}, [yi(a, i, e)]);
			});
		}
		resolveSchemaContent(e, t) {
			let n = e.errors.slice(0), r = e.schema, i = r.$schema ? hr(r.$schema) : void 0;
			if (i === sr.v3) return this.promise.resolve(new Di({}, [yi(U("Draft-03 schemas are not supported."), H.SchemaUnsupportedFeature)], [], i));
			let a = /* @__PURE__ */ new Set(), o = this.contextService, s = (e, t) => {
				t = decodeURIComponent(t);
				let n = e;
				return t[0] === "/" && (t = t.substring(1)), t.split("/").some((e) => (e = e.replace(/~1/g, "/").replace(/~0/g, "~"), n = n[e], !n)), n;
			}, c = (e, t, n) => (t.anchors ||= p(e), t.anchors.get(n)), l = (e, t) => {
				for (let n in t) t.hasOwnProperty(n) && n !== "id" && n !== "$id" && (e[n] = t[n]);
			}, u = (e, t, r, i) => {
				let a;
				if (a = i === void 0 || i.length === 0 ? t : i.charAt(0) === "/" ? s(t, i) : c(t, r, i), a) l(e, a);
				else {
					let e = U("$ref '{0}' in '{1}' can not be resolved.", i || "", r.uri);
					n.push(yi(e, H.SchemaResolveError));
				}
			}, d = (e, t, r, i) => {
				o && !/^[A-Za-z][A-Za-z0-9+\-.+]*:\/.*/.test(t) && (t = o.resolveRelativePath(t, i.uri)), t = mr(t);
				let a = this.getOrAddSchemaHandle(t);
				return a.getUnresolvedSchema().then((o) => {
					if (i.dependencies.add(t), o.errors.length) {
						let e = o.errors[0];
						r && t + "" + r;
						let i = r ? U("Problems loading reference '{0}': {1}", r, e.message) : e.message;
						n.push(yi(i, e.code, t));
					}
					return u(e, o.schema, a, r), f(e, o.schema, a);
				});
			}, f = (e, t, n) => {
				let r = [];
				return this.traverseNodes(e, (e) => {
					let i = /* @__PURE__ */ new Set();
					for (; e.$ref;) {
						let a = e.$ref, o = a.split("#", 2);
						if (delete e.$ref, o[0].length > 0) {
							r.push(d(e, o[0], o[1], n));
							return;
						}
						if (!i.has(a)) {
							let r = o[1];
							u(e, t, n, r), i.add(a);
						}
					}
					e.$recursiveRef && a.add("$recursiveRef"), e.$dynamicRef && a.add("$dynamicRef");
				}), this.promise.all(r);
			}, p = (e) => {
				let t = /* @__PURE__ */ new Map();
				return this.traverseNodes(e, (e) => {
					let r = e.$id || e.id, i = wt(r) && r.charAt(0) === "#" ? r.substring(1) : e.$anchor;
					i && (t.has(i) ? n.push(yi(U("Duplicate anchor declaration: '{0}'", i), H.SchemaResolveError)) : t.set(i, e)), e.$recursiveAnchor && a.add("$recursiveAnchor"), e.$dynamicAnchor && a.add("$dynamicAnchor");
				}), t;
			};
			return f(r, r, t).then((e) => {
				let t = [];
				return a.size && t.push(yi(U("The schema uses meta-schema features ({0}) that are not yet supported by the validator.", Array.from(a.keys()).join(", ")), H.SchemaUnsupportedFeature)), new Di(r, n, t, i);
			});
		}
		traverseNodes(e, t) {
			if (!e || typeof e != "object") return Promise.resolve(null);
			let n = /* @__PURE__ */ new Set(), r = (...e) => {
				for (let t of e) Tt(t) && s.push(t);
			}, i = (...e) => {
				for (let t of e) if (Tt(t)) for (let e in t) {
					let n = t[e];
					Tt(n) && s.push(n);
				}
			}, a = (...e) => {
				for (let t of e) if (Array.isArray(t)) for (let e of t) Tt(e) && s.push(e);
			}, o = (e) => {
				if (Array.isArray(e)) for (let t of e) Tt(t) && s.push(t);
				else Tt(e) && s.push(e);
			}, s = [e], c = s.pop();
			for (; c;) n.has(c) || (n.add(c), t(c), r(c.additionalItems, c.additionalProperties, c.not, c.contains, c.propertyNames, c.if, c.then, c.else, c.unevaluatedItems, c.unevaluatedProperties), i(c.definitions, c.$defs, c.properties, c.patternProperties, c.dependencies, c.dependentSchemas), a(c.anyOf, c.allOf, c.oneOf, c.prefixItems), o(c.items)), c = s.pop();
		}
		getSchemaFromProperty(e, t) {
			if (t.root?.type === "object") {
				for (let n of t.root.properties) if (n.keyNode.value === "$schema" && n.valueNode?.type === "string") {
					let t = n.valueNode.value;
					return this.contextService && !/^\w[\w\d+.-]*:/.test(t) && (t = this.contextService.resolveRelativePath(t, e)), t;
				}
			}
		}
		getAssociatedSchemas(e) {
			let t = Object.create(null), n = [], r = bi(e);
			for (let e of this.filePatternAssociations) if (e.matchesPattern(r)) for (let r of e.getURIs()) t[r] || (n.push(r), t[r] = !0);
			return n;
		}
		getSchemaURIsForResource(e, t) {
			let n = t && this.getSchemaFromProperty(e, t);
			return n ? [n] : this.getAssociatedSchemas(e);
		}
		getSchemaForResource(e, t) {
			if (t) {
				let n = this.getSchemaFromProperty(e, t);
				if (n) {
					let e = mr(n);
					return this.getOrAddSchemaHandle(e).getResolvedSchema();
				}
			}
			if (this.cachedSchemaForResource && this.cachedSchemaForResource.resource === e) return this.cachedSchemaForResource.resolvedSchema;
			let n = this.getAssociatedSchemas(e), r = n.length > 0 ? this.createCombinedSchema(e, n).getResolvedSchema() : this.promise.resolve(void 0);
			return this.cachedSchemaForResource = {
				resource: e,
				resolvedSchema: r
			}, r;
		}
		createCombinedSchema(e, t) {
			if (t.length === 1) return this.getOrAddSchemaHandle(t[0]);
			{
				let n = "schemaservice://combinedSchema/" + encodeURIComponent(e), r = { allOf: t.map((e) => ({ $ref: e })) };
				return this.addSchemaHandle(n, r);
			}
		}
		getMatchingSchemas(e, t, n) {
			if (n) {
				let e = n.id || "schemaservice://untitled/matchingSchemas/" + ki++;
				return this.addSchemaHandle(e, n).getResolvedSchema().then((e) => t.getMatchingSchemas(e.schema).filter((e) => !e.inverted));
			}
			return this.getSchemaForResource(e.uri, t).then((e) => e ? t.getMatchingSchemas(e.schema).filter((e) => !e.inverted) : []);
		}
	}, ki = 0;
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/services/jsonFolding.js
function ji(e, t) {
	let n = [], r = [], i = [], a = -1, o = ft(e.getText(), !1), s = o.scan();
	function c(e) {
		n.push(e), r.push(i.length);
	}
	for (; s !== 17;) {
		switch (s) {
			case 1:
			case 3: {
				let t = e.positionAt(o.getTokenOffset()).line, n = {
					startLine: t,
					endLine: t,
					kind: s === 1 ? "object" : "array"
				};
				i.push(n);
				break;
			}
			case 2:
			case 4: {
				let t = s === 2 ? "object" : "array";
				if (i.length > 0 && i[i.length - 1].kind === t) {
					let t = i.pop(), n = e.positionAt(o.getTokenOffset()).line;
					t && n > t.startLine + 1 && a !== t.startLine && (t.endLine = n - 1, c(t), a = t.startLine);
				}
				break;
			}
			case 13: {
				let t = e.positionAt(o.getTokenOffset()).line, n = e.positionAt(o.getTokenOffset() + o.getTokenLength()).line;
				o.getTokenError() === 1 && t + 1 < e.lineCount ? o.setPosition(e.offsetAt(L.create(t + 1, 0))) : t < n && (c({
					startLine: t,
					endLine: n,
					kind: Vt.Comment
				}), a = t);
				break;
			}
			case 12: {
				let t = e.getText().substr(o.getTokenOffset(), o.getTokenLength()).match(/^\/\/\s*#(region\b)|(endregion\b)/);
				if (t) {
					let n = e.positionAt(o.getTokenOffset()).line;
					if (t[1]) {
						let e = {
							startLine: n,
							endLine: n,
							kind: Vt.Region
						};
						i.push(e);
					} else {
						let e = i.length - 1;
						for (; e >= 0 && i[e].kind !== Vt.Region;) e--;
						if (e >= 0) {
							let t = i[e];
							i.length = e, n > t.startLine && a !== t.startLine && (t.endLine = n, c(t), a = t.startLine);
						}
					}
				}
				break;
			}
		}
		s = o.scan();
	}
	let l = t && t.rangeLimit;
	if (typeof l != "number" || n.length <= l) return n;
	t && t.onRangeLimitExceeded && t.onRangeLimitExceeded(e.uri);
	let u = [];
	for (let e of r) e < 30 && (u[e] = (u[e] || 0) + 1);
	let d = 0, f = 0;
	for (let e = 0; e < u.length; e++) {
		let t = u[e];
		if (t) {
			if (t + d > l) {
				f = e;
				break;
			}
			d += t;
		}
	}
	let p = [];
	for (let e = 0; e < n.length; e++) {
		let t = r[e];
		typeof t == "number" && (t < f || t === f && d++ < l) && p.push(n[e]);
	}
	return p;
}
var Mi = t((() => {
	bt(), lr();
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/services/jsonSelectionRanges.js
function Ni(e, t, n) {
	function r(t) {
		let r = e.offsetAt(t), a = n.getNodeFromOffset(r, !0), s = [];
		for (; a;) {
			switch (a.type) {
				case "string":
				case "object":
				case "array":
					let e = a.offset + 1, t = a.offset + a.length - 1;
					e < t && r >= e && r <= t && s.push(i(e, t)), s.push(i(a.offset, a.offset + a.length));
					break;
				case "number":
				case "boolean":
				case "null":
				case "property": s.push(i(a.offset, a.offset + a.length));
			}
			if (a.type === "property" || a.parent && a.parent.type === "array") {
				let e = o(a.offset + a.length, 5);
				e !== -1 && s.push(i(a.offset, e));
			}
			a = a.parent;
		}
		let c;
		for (let e = s.length - 1; e >= 0; e--) c = zn.create(s[e], c);
		return c ||= zn.create(R.create(t, t)), c;
	}
	function i(t, n) {
		return R.create(e.positionAt(t), e.positionAt(n));
	}
	let a = ft(e.getText(), !0);
	function o(e, t) {
		return a.setPosition(e), a.scan() === t ? a.getTokenOffset() + a.getTokenLength() : -1;
	}
	return t.map(r);
}
var Pi = t((() => {
	lr(), bt();
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/format.js
function Fi(e, t, n) {
	let r;
	if (n) {
		let t = e.offsetAt(n.start);
		r = {
			offset: t,
			length: e.offsetAt(n.end) - t
		};
	}
	let i = {
		tabSize: t ? t.tabSize : 4,
		insertSpaces: t?.insertSpaces === !0,
		insertFinalNewline: t?.insertFinalNewline === !0,
		eol: "\n",
		keepLines: t?.keepLines === !0
	};
	return dt(e.getText(), r, i).map((t) => Jt.replace(R.create(e.positionAt(t.offset), e.positionAt(t.offset + t.length)), t.content));
}
var Ii = t((() => {
	bt(), lr();
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/propertyTree.js
function Li(e, t) {
	let n = e.propertyName.toLowerCase(), r = t.propertyName.toLowerCase();
	return n < r ? -1 : +(n > r);
}
function Ri(e, t, n) {
	let r = t.propertyName.toLowerCase(), i = e[0].propertyName.toLowerCase(), a = e[e.length - 1].propertyName.toLowerCase();
	if (r < i) return 0;
	if (r > a) return e.length;
	let o = 0, s = e.length - 1;
	for (; o <= s;) {
		let r = s + o >> 1, i = n(t, e[r]);
		if (i > 0) o = r + 1;
		else if (i < 0) s = r - 1;
		else return r;
	}
	return -o - 1;
}
var J, zi, Bi = t((() => {
	(function(e) {
		e[e.Object = 0] = "Object", e[e.Array = 1] = "Array";
	})(J ||= {}), zi = class {
		constructor(e, t) {
			this.propertyName = e ?? "", this.beginningLineNumber = t, this.childrenProperties = [], this.lastProperty = !1, this.noKeyName = !1;
		}
		addChildProperty(e) {
			if (e.parent = this, this.childrenProperties.length > 0) {
				let t = 0;
				t = e.noKeyName ? this.childrenProperties.length : Ri(this.childrenProperties, e, Li), t < 0 && (t = t * -1 - 1), this.childrenProperties.splice(t, 0, e);
			} else this.childrenProperties.push(e);
			return e;
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/utils/sort.js
function Vi(e, t) {
	let n = {
		...t,
		keepLines: !1
	}, r = M.applyEdits(e, Fi(e, n, void 0)), i = M.create("test://test.json", "json", 0, r), a = Ui(i, Hi(i)), o = Fi(a, n, void 0), s = M.applyEdits(a, o);
	return [Jt.replace(R.create(L.create(0, 0), e.positionAt(e.getText().length)), s)];
}
function Hi(e) {
	let t = e.getText(), n = ft(t, !1), r = new zi(), i = r, a = r, o = r, s, c = 0, l = 0, u, d, f = -1, p = -1, m = 0, h = 0, g = [], _ = !1, v = !1;
	for (; (s = n.scan()) !== 17;) {
		if (_ === !0 && s !== 14 && s !== 15 && s !== 12 && s !== 13 && a.endLineNumber === void 0) {
			let e = n.getTokenStartLine();
			d === 2 || d === 4 ? o.endLineNumber = e - 1 : a.endLineNumber = e - 1, m = e, _ = !1;
		}
		if (v === !0 && s !== 14 && s !== 15 && s !== 12 && s !== 13 && (m = n.getTokenStartLine(), v = !1), n.getTokenStartLine() !== c) {
			for (let t = c; t < n.getTokenStartLine(); t++) {
				let n = e.getText(R.create(L.create(t, 0), L.create(t + 1, 0))).length;
				l += n;
			}
			c = n.getTokenStartLine();
		}
		switch (s) {
			case 10:
				if (u === void 0 || u === 1 || u === 5 && g[g.length - 1] === J.Object) {
					let e = new zi(n.getTokenValue(), m);
					o = a, a = i.addChildProperty(e);
				}
				break;
			case 3:
				if (r.beginningLineNumber === void 0 && (r.beginningLineNumber = n.getTokenStartLine()), g[g.length - 1] === J.Object) i = a;
				else if (g[g.length - 1] === J.Array) {
					let e = new zi(n.getTokenValue(), m);
					e.noKeyName = !0, o = a, a = i.addChildProperty(e), i = a;
				}
				g.push(J.Array), a.type = J.Array, m = n.getTokenStartLine(), m++;
				break;
			case 1:
				if (r.beginningLineNumber === void 0) r.beginningLineNumber = n.getTokenStartLine();
				else if (g[g.length - 1] === J.Array) {
					let e = new zi(n.getTokenValue(), m);
					e.noKeyName = !0, o = a, a = i.addChildProperty(e);
				}
				a.type = J.Object, g.push(J.Object), i = a, m = n.getTokenStartLine(), m++;
				break;
			case 4:
				h = n.getTokenStartLine(), g.pop(), a.endLineNumber === void 0 && (u === 2 || u === 4) && (a.endLineNumber = h - 1, a.lastProperty = !0, a.lineWhereToAddComma = f, a.indexWhereToAddComa = p, o = a, a = a ? a.parent : void 0, i = a), r.endLineNumber = h, m = h + 1;
				break;
			case 2:
				h = n.getTokenStartLine(), g.pop(), u !== 1 && (a.endLineNumber === void 0 && (a.endLineNumber = h - 1, a.lastProperty = !0, a.lineWhereToAddComma = f, a.indexWhereToAddComa = p), o = a, a = a ? a.parent : void 0, i = a), r.endLineNumber = n.getTokenStartLine(), m = h + 1;
				break;
			case 5:
				h = n.getTokenStartLine(), a.endLineNumber === void 0 && (g[g.length - 1] === J.Object || g[g.length - 1] === J.Array && (u === 2 || u === 4)) && (a.endLineNumber = h, a.commaIndex = n.getTokenOffset() - l, a.commaLine = h), (u === 2 || u === 4) && (o = a, a = a ? a.parent : void 0, i = a), m = h + 1;
				break;
			case 13: u === 5 && f === n.getTokenStartLine() && (g[g.length - 1] === J.Array && (d === 2 || d === 4) || g[g.length - 1] === J.Object) && (g[g.length - 1] === J.Array && (d === 2 || d === 4) || g[g.length - 1] === J.Object) && (a.endLineNumber = void 0, _ = !0), (u === 1 || u === 3) && f === n.getTokenStartLine() && (v = !0);
		}
		s !== 14 && s !== 13 && s !== 12 && s !== 15 && (d = u, u = s, f = n.getTokenStartLine(), p = n.getTokenOffset() + n.getTokenLength() - l);
	}
	return r;
}
function Ui(e, t) {
	if (t.childrenProperties.length === 0) return e;
	let n = M.create("test://test.json", "json", 0, e.getText()), r = [];
	for (Gi(r, t, t.beginningLineNumber); r.length > 0;) {
		let t = r.shift(), i = t.propertyTreeArray, a = t.beginningLineNumber;
		for (let t = 0; t < i.length; t++) {
			let o = i[t], s = R.create(L.create(o.beginningLineNumber, 0), L.create(o.endLineNumber + 1, 0)), c = e.getText(s), l = M.create("test://test.json", "json", 0, c);
			if (o.lastProperty === !0 && t !== i.length - 1) {
				let e = o.lineWhereToAddComma - o.beginningLineNumber, t = o.indexWhereToAddComa, n = {
					range: R.create(L.create(e, t), L.create(e, t)),
					text: ","
				};
				M.update(l, [n], 1);
			} else if (o.lastProperty === !1 && t === i.length - 1) {
				let e = o.commaIndex, t = o.commaLine - o.beginningLineNumber, n = {
					range: R.create(L.create(t, e), L.create(t, e + 1)),
					text: ""
				};
				M.update(l, [n], 1);
			}
			let u = o.endLineNumber - o.beginningLineNumber + 1, d = {
				range: R.create(L.create(a, 0), L.create(a + u, 0)),
				text: l.getText()
			};
			M.update(n, [d], 1), Gi(r, o, a), a += u;
		}
	}
	return n;
}
function Wi(e) {
	e.sort((e, t) => e.propertyName.localeCompare(t.propertyName));
}
function Gi(e, t, n) {
	if (t.childrenProperties.length !== 0) {
		if (t.type === J.Object) {
			let r = Infinity;
			for (let e of t.childrenProperties) e.beginningLineNumber < r && (r = e.beginningLineNumber);
			let i = r - t.beginningLineNumber;
			n += i, Wi(t.childrenProperties), e.push(new qi(n, t.childrenProperties));
		} else t.type === J.Array && Ki(e, t, n);
	}
}
function Ki(e, t, n) {
	for (let r of t.childrenProperties) {
		if (r.type === J.Object) {
			let i = Infinity;
			for (let e of r.childrenProperties) e.beginningLineNumber < i && (i = e.beginningLineNumber);
			let a = i - r.beginningLineNumber;
			e.push(new qi(n + r.beginningLineNumber - t.beginningLineNumber + a, r.childrenProperties));
		}
		r.type === J.Array && Ki(e, r, n + r.beginningLineNumber - t.beginningLineNumber);
	}
}
var qi, Ji = t((() => {
	bt(), lr(), Ii(), Bi(), qi = class {
		constructor(e, t) {
			this.beginningLineNumber = e, this.propertyTreeArray = t;
		}
	};
}));
//#endregion
//#region ../../node_modules/.pnpm/vscode-json-languageservice@5.7.2/node_modules/vscode-json-languageservice/lib/esm/services/jsonLinks.js
function Yi(e, t) {
	let n = [];
	return t.visit((r) => {
		if (r.type === "property" && r.keyNode.value === "$ref" && r.valueNode?.type === "string") {
			let i = r.valueNode.value, a = Zi(t, i);
			if (a) {
				let t = e.positionAt(a.offset);
				n.push({
					target: `${e.uri}#${t.line + 1},${t.character + 1}`,
					range: Xi(e, r.valueNode)
				});
			}
		}
		return !0;
	}), Promise.resolve(n);
}
function Xi(e, t) {
	return R.create(e.positionAt(t.offset + 1), e.positionAt(t.offset + t.length - 1));
}
function Zi(e, t) {
	let n = $i(t);
	return n ? Qi(n, e.root) : null;
}
function Qi(e, t) {
	if (!t) return null;
	if (e.length === 0) return t;
	let n = e.shift();
	if (t && t.type === "object") {
		let r = t.properties.find((e) => e.keyNode.value === n);
		return r ? Qi(e, r.valueNode) : null;
	}
	if (t && t.type === "array" && n.match(/^(0|[1-9][0-9]*)$/)) {
		let r = Number.parseInt(n), i = t.items[r];
		return i ? Qi(e, i) : null;
	}
	return null;
}
function $i(e) {
	return e === "#" ? [] : e[0] !== "#" || e[1] !== "/" ? null : e.substring(2).split(/\//).map(ea);
}
function ea(e) {
	return e.replace(/~1/g, "/").replace(/~0/g, "~");
}
var ta = t((() => {
	lr();
})), na = /* @__PURE__ */ r({
	ClientCapabilities: () => cr,
	CodeAction: () => Fn,
	CodeActionContext: () => Nn,
	CodeActionKind: () => jn,
	Color: () => Rt,
	ColorInformation: () => zt,
	ColorPresentation: () => Bt,
	Command: () => qt,
	CompletionItem: () => vn,
	CompletionItemKind: () => fn,
	CompletionItemTag: () => pn,
	CompletionList: () => yn,
	Diagnostic: () => Kt,
	DiagnosticSeverity: () => z,
	DocumentHighlight: () => Tn,
	DocumentHighlightKind: () => wn,
	DocumentLink: () => Rn,
	DocumentSymbol: () => An,
	DocumentUri: () => Mt,
	ErrorCode: () => H,
	FoldingRange: () => Ht,
	FoldingRangeKind: () => Vt,
	Hover: () => xn,
	InsertTextFormat: () => B,
	Location: () => It,
	MarkedString: () => bn,
	MarkupContent: () => dn,
	MarkupKind: () => un,
	Position: () => L,
	Range: () => R,
	SchemaDraft: () => sr,
	SelectionRange: () => zn,
	SymbolInformation: () => On,
	SymbolKind: () => En,
	TextDocument: () => M,
	TextDocumentEdit: () => Qt,
	TextEdit: () => Jt,
	VersionedTextDocumentIdentifier: () => on,
	WorkspaceEdit: () => nn,
	getLanguageService: () => ra,
	isSchemaResolveError: () => or
});
function ra(e) {
	let t = e.promiseConstructor || Promise, n = new Oi(e.schemaRequestService, e.workspaceContext, t);
	n.setSchemaContributions(mi);
	let r = new Hr(n, e.contributions, t, e.clientCapabilities), i = new Kr(n, e.contributions, t), a = new ci(n), o = new Zr(n, t);
	return {
		configure: (e) => {
			n.clearExternalSchemas(), e.schemas?.forEach(n.registerExternalSchema.bind(n)), o.configure(e);
		},
		resetSchema: (e) => n.onResourceChange(e),
		doValidation: o.doValidation.bind(o),
		getLanguageStatus: o.getLanguageStatus.bind(o),
		parseJSONDocument: (e) => xr(e, { collectComments: !0 }),
		newJSONDocument: (e, t, n) => gr(e, t, n),
		getMatchingSchemas: n.getMatchingSchemas.bind(n),
		doResolve: r.doResolve.bind(r),
		doComplete: r.doComplete.bind(r),
		findDocumentSymbols: a.findDocumentSymbols.bind(a),
		findDocumentSymbols2: a.findDocumentSymbols2.bind(a),
		findDocumentColors: a.findDocumentColors.bind(a),
		getColorPresentations: a.getColorPresentations.bind(a),
		doHover: i.doHover.bind(i),
		getFoldingRanges: ji,
		getSelectionRanges: Ni,
		findDefinition: () => Promise.resolve([]),
		findLinks: Yi,
		format: (e, t, n) => Fi(e, n, t),
		sort: (e, t) => Vi(e, t)
	};
}
var ia = t((() => {
	Ur(), qr(), $r(), li(), zr(), gi(), Ai(), Mi(), Pi(), Ji(), Ii(), ta(), lr();
})), aa = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.create = a;
	var n = (ia(), e(na)), r = y();
	function i(e, t, n) {
		if (e.match(/^\w[\w\d+.-]*:/)) return e;
		if (e[0] === "/") {
			let t = a();
			if (t) return t + e.substr(1);
		}
		let i = t.path.endsWith("/") ? t : r.Utils.dirname(t);
		return r.Utils.resolvePath(i, e).toString(!0);
		function a() {
			for (let e of n) {
				let n = e.toString();
				if (n.endsWith("/") || (n += "/"), t.toString().startsWith(n)) return n;
			}
		}
	}
	function a({ documentSelector: e = ["json", "jsonc"], getWorkspaceContextService: t = (e) => ({ resolveRelativePath(t, n) {
		let a = n.substring(0, n.lastIndexOf("/") + 1), o = r.URI.parse(a), s = e.decodeEmbeddedDocumentUri(o);
		return s && (o = s[0]), i(t, o, e.env.workspaceFolders);
	} }), isFormattingEnabled: a = async (e, t) => await t.env.getConfiguration?.("json.format.enable") ?? !0, getFormattingOptions: s = async (e, t, n) => ({
		...t,
		...await n.env.getConfiguration?.("json.format")
	}), getLanguageSettings: c = async (e) => {
		let t = {};
		t.validate = await e.env.getConfiguration?.("json.validate") ?? !0, t.schemas ??= [];
		let n = await e.env.getConfiguration?.("json.schemas") ?? [];
		for (let e = 0; e < n.length; e++) {
			let r = n[e], i = r.url;
			!i && r.schema && (i = r.schema.id || `vscode://schemas/custom/${e}`), i && t.schemas.push({
				uri: i,
				fileMatch: r.fileMatch,
				schema: r.schema,
				folderUri: r.folderUri
			});
		}
		return t;
	}, getDocumentLanguageSettings: l = (e) => e.languageId === "jsonc" ? {
		comments: "ignore",
		trailingCommas: "warning"
	} : {
		comments: "error",
		trailingCommas: "error"
	}, onDidChangeLanguageSettings: u = (e, t) => {
		let n = t.env.onDidChangeConfiguration?.(e);
		return { dispose() {
			n?.dispose();
		} };
	} } = {}) {
		return {
			name: "json",
			capabilities: {
				completionProvider: {
					triggerCharacters: ["\"", ":"],
					resolveProvider: !0
				},
				definitionProvider: !0,
				diagnosticProvider: {
					interFileDependencies: !1,
					workspaceDiagnostics: !1
				},
				hoverProvider: !0,
				documentLinkProvider: {},
				documentSymbolProvider: !0,
				colorProvider: !0,
				foldingRangeProvider: !0,
				selectionRangeProvider: !0,
				documentFormattingProvider: !0
			},
			create(i) {
				let d = /* @__PURE__ */ new WeakMap(), f = n.getLanguageService({
					schemaRequestService: async (e) => await i.env.fs?.readFile(r.URI.parse(e)) ?? "",
					workspaceContext: t(i),
					clientCapabilities: i.env.clientCapabilities
				}), p = u(() => m = void 0, i), m;
				return {
					dispose() {
						p.dispose();
					},
					provide: {
						"json/jsonDocument": _,
						"json/languageService": () => f
					},
					provideCompletionItems(e, t) {
						return h(e, async (n) => await f.doComplete(e, t, n));
					},
					resolveCompletionItem(e) {
						return f.doResolve(e);
					},
					provideDefinition(e, t) {
						return h(e, async (n) => await f.findDefinition(e, t, n));
					},
					provideDiagnostics(e) {
						return h(e, async (t) => {
							let n = await l(e, i);
							return await f.doValidation(e, t, n);
						});
					},
					provideHover(e, t) {
						return h(e, async (n) => await f.doHover(e, t, n));
					},
					provideDocumentLinks(e) {
						return h(e, (t) => f.findLinks(e, t));
					},
					provideDocumentSymbols(e) {
						return h(e, (t) => f.findDocumentSymbols2(e, t));
					},
					provideDocumentColors(e) {
						return h(e, (t) => f.findDocumentColors(e, t));
					},
					provideColorPresentations(e, t, n) {
						return h(e, (r) => f.getColorPresentations(e, r, t, n));
					},
					provideFoldingRanges(e) {
						return h(e, () => f.getFoldingRanges(e, i.env.clientCapabilities?.textDocument?.foldingRange));
					},
					provideSelectionRanges(e, t) {
						return h(e, (n) => f.getSelectionRanges(e, t, n));
					},
					provideDocumentFormattingEdits(e, t, n) {
						return h(e, async () => {
							if (!await a(e, i)) return;
							let r = await s(e, n, i);
							return f.format(e, t, r);
						});
					}
				};
				async function h(e, t) {
					let n = _(e);
					if (n) return await (m ??= g()), await t(n);
				}
				async function g() {
					let e = await c(i);
					f.configure(e);
				}
				function _(t) {
					if (!o(e, t)) return;
					let n = d.get(t);
					if (n) {
						let [e, r] = n;
						if (e === t.version) return r;
					}
					let r = f.parseJSONDocument(t);
					return d.set(t, [t.version, r]), r;
				}
			}
		};
	}
	function o(e, t) {
		for (let n of e) if (n === t.languageId || typeof n == "object" && n.language === t.languageId) return !0;
		return !1;
	}
})), oa = /* @__PURE__ */ i(((e, t) => {
	t.exports = class {
		constructor() {
			this.max = 1e3, this.map = /* @__PURE__ */ new Map();
		}
		get(e) {
			let t = this.map.get(e);
			if (t !== void 0) return this.map.delete(e), this.map.set(e, t), t;
		}
		delete(e) {
			return this.map.delete(e);
		}
		set(e, t) {
			if (!this.delete(e) && t !== void 0) {
				if (this.map.size >= this.max) {
					let e = this.map.keys().next().value;
					this.delete(e);
				}
				this.map.set(e, t);
			}
			return this;
		}
	};
})), sa = /* @__PURE__ */ i(((e, t) => {
	var n = Object.freeze({ loose: !0 }), r = Object.freeze({});
	t.exports = (e) => e ? typeof e == "object" ? e : n : r;
})), ca = /* @__PURE__ */ i(((e, t) => {
	t.exports = {
		MAX_LENGTH: 256,
		MAX_SAFE_COMPONENT_LENGTH: 16,
		MAX_SAFE_BUILD_LENGTH: 250,
		MAX_SAFE_INTEGER: 2 ** 53 - 1 || 
		/* istanbul ignore next */ 9007199254740991,
		RELEASE_TYPES: [
			"major",
			"premajor",
			"minor",
			"preminor",
			"patch",
			"prepatch",
			"prerelease"
		],
		SEMVER_SPEC_VERSION: "2.0.0",
		FLAG_INCLUDE_PRERELEASE: 1,
		FLAG_LOOSE: 2
	};
})), la = /* @__PURE__ */ i(((e, t) => {
	t.exports = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
})), ua = /* @__PURE__ */ i(((e, t) => {
	var { MAX_SAFE_COMPONENT_LENGTH: n, MAX_SAFE_BUILD_LENGTH: r, MAX_LENGTH: i } = ca(), a = la();
	e = t.exports = {};
	var o = e.re = [], s = e.safeRe = [], c = e.src = [], l = e.safeSrc = [], u = e.t = {}, d = 0, f = "[a-zA-Z0-9-]", p = [
		["\\s", 1],
		["\\d", i],
		[f, r]
	], m = (e) => {
		for (let [t, n] of p) e = e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);
		return e;
	}, h = (e, t, n) => {
		let r = m(t), i = d++;
		a(e, i, t), u[e] = i, c[i] = t, l[i] = r, o[i] = new RegExp(t, n ? "g" : void 0), s[i] = new RegExp(r, n ? "g" : void 0);
	};
	h("NUMERICIDENTIFIER", "0|[1-9]\\d*"), h("NUMERICIDENTIFIERLOOSE", "\\d+"), h("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${f}*`), h("MAINVERSION", `(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`), h("MAINVERSIONLOOSE", `(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASEIDENTIFIER", `(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIER]})`), h("PRERELEASEIDENTIFIERLOOSE", `(?:${c[u.NONNUMERICIDENTIFIER]}|${c[u.NUMERICIDENTIFIERLOOSE]})`), h("PRERELEASE", `(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`), h("PRERELEASELOOSE", `(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`), h("BUILDIDENTIFIER", `${f}+`), h("BUILD", `(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`), h("FULLPLAIN", `v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`), h("FULL", `^${c[u.FULLPLAIN]}$`), h("LOOSEPLAIN", `[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`), h("LOOSE", `^${c[u.LOOSEPLAIN]}$`), h("GTLT", "((?:<|>)?=?)"), h("XRANGEIDENTIFIERLOOSE", `${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), h("XRANGEIDENTIFIER", `${c[u.NUMERICIDENTIFIER]}|x|X|\\*`), h("XRANGEPLAIN", `[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`), h("XRANGEPLAINLOOSE", `[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`), h("XRANGE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`), h("XRANGELOOSE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`), h("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), h("COERCE", `${c[u.COERCEPLAIN]}(?:$|[^\\d])`), h("COERCEFULL", c[u.COERCEPLAIN] + `(?:${c[u.PRERELEASE]})?(?:${c[u.BUILD]})?(?:$|[^\\d])`), h("COERCERTL", c[u.COERCE], !0), h("COERCERTLFULL", c[u.COERCEFULL], !0), h("LONETILDE", "(?:~>?)"), h("TILDETRIM", `(\\s*)${c[u.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", h("TILDE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`), h("TILDELOOSE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`), h("LONECARET", "(?:\\^)"), h("CARETTRIM", `(\\s*)${c[u.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", h("CARET", `^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`), h("CARETLOOSE", `^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`), h("COMPARATORLOOSE", `^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`), h("COMPARATOR", `^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`), h("COMPARATORTRIM", `(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", h("HYPHENRANGE", `^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`), h("HYPHENRANGELOOSE", `^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`), h("STAR", "(<|>)?=?\\s*\\*"), h("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), h("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})), da = /* @__PURE__ */ i(((e, t) => {
	var n = /^[0-9]+$/, r = (e, t) => {
		if (typeof e == "number" && typeof t == "number") return e === t ? 0 : e < t ? -1 : 1;
		let r = n.test(e), i = n.test(t);
		return r && i && (e = +e, t = +t), e === t ? 0 : r && !i ? -1 : i && !r ? 1 : e < t ? -1 : 1;
	};
	t.exports = {
		compareIdentifiers: r,
		rcompareIdentifiers: (e, t) => r(t, e)
	};
})), fa = /* @__PURE__ */ i(((e, t) => {
	var n = la(), { MAX_LENGTH: r, MAX_SAFE_INTEGER: i } = ca(), { safeRe: a, t: o } = ua(), s = sa(), { compareIdentifiers: c } = da(), l = (e, t) => {
		let n = t.split(".");
		if (n.length > e.length) return !1;
		for (let t = 0; t < n.length; t++) if (c(e[t], n[t]) !== 0) return !1;
		return !0;
	};
	t.exports = class e {
		constructor(t, c) {
			if (c = s(c), t instanceof e) {
				if (t.loose === !!c.loose && t.includePrerelease === !!c.includePrerelease) return t;
				t = t.version;
			} else if (typeof t != "string") throw TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);
			if (t.length > r) throw TypeError(`version is longer than ${r} characters`);
			n("SemVer", t, c), this.options = c, this.loose = !!c.loose, this.includePrerelease = !!c.includePrerelease;
			let l = t.trim().match(c.loose ? a[o.LOOSE] : a[o.FULL]);
			if (!l) throw TypeError(`Invalid Version: ${t}`);
			if (this.raw = t, this.major = +l[1], this.minor = +l[2], this.patch = +l[3], this.major > i || this.major < 0) throw TypeError("Invalid major version");
			if (this.minor > i || this.minor < 0) throw TypeError("Invalid minor version");
			if (this.patch > i || this.patch < 0) throw TypeError("Invalid patch version");
			this.prerelease = l[4] ? l[4].split(".").map((e) => {
				if (/^[0-9]+$/.test(e)) {
					let t = +e;
					if (t >= 0 && t < i) return t;
				}
				return e;
			}) : [], this.build = l[5] ? l[5].split(".") : [], this.format();
		}
		format() {
			return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
		}
		toString() {
			return this.version;
		}
		compare(t) {
			if (n("SemVer.compare", this.version, this.options, t), !(t instanceof e)) {
				if (typeof t == "string" && t === this.version) return 0;
				t = new e(t, this.options);
			}
			return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
		}
		compareMain(t) {
			return t instanceof e || (t = new e(t, this.options)), this.major < t.major ? -1 : this.major > t.major ? 1 : this.minor < t.minor ? -1 : this.minor > t.minor ? 1 : this.patch < t.patch ? -1 : +(this.patch > t.patch);
		}
		comparePre(t) {
			if (t instanceof e || (t = new e(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
			if (!this.prerelease.length && t.prerelease.length) return 1;
			if (!this.prerelease.length && !t.prerelease.length) return 0;
			let r = 0;
			do {
				let e = this.prerelease[r], i = t.prerelease[r];
				if (n("prerelease compare", r, e, i), e === void 0 && i === void 0) return 0;
				if (i === void 0) return 1;
				if (e === void 0) return -1;
				if (e !== i) return c(e, i);
			} while (++r);
		}
		compareBuild(t) {
			t instanceof e || (t = new e(t, this.options));
			let r = 0;
			do {
				let e = this.build[r], i = t.build[r];
				if (n("build compare", r, e, i), e === void 0 && i === void 0) return 0;
				if (i === void 0) return 1;
				if (e === void 0) return -1;
				if (e !== i) return c(e, i);
			} while (++r);
		}
		inc(e, t, n) {
			if (e.startsWith("pre")) {
				if (!t && n === !1) throw Error("invalid increment argument: identifier is empty");
				if (t) {
					let e = `-${t}`.match(this.options.loose ? a[o.PRERELEASELOOSE] : a[o.PRERELEASE]);
					if (!e || e[1] !== t) throw Error(`invalid identifier: ${t}`);
				}
			}
			switch (e) {
				case "premajor":
					this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, n);
					break;
				case "preminor":
					this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, n);
					break;
				case "prepatch":
					this.prerelease.length = 0, this.inc("patch", t, n), this.inc("pre", t, n);
					break;
				case "prerelease":
					this.prerelease.length === 0 && this.inc("patch", t, n), this.inc("pre", t, n);
					break;
				case "release":
					if (this.prerelease.length === 0) throw Error(`version ${this.raw} is not a prerelease`);
					this.prerelease.length = 0;
					break;
				case "major":
					(this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
					break;
				case "minor":
					(this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
					break;
				case "patch":
					this.prerelease.length === 0 && this.patch++, this.prerelease = [];
					break;
				case "pre": {
					let e = +!!Number(n);
					if (this.prerelease.length === 0) this.prerelease = [e];
					else {
						let r = this.prerelease.length;
						for (; --r >= 0;) typeof this.prerelease[r] == "number" && (this.prerelease[r]++, r = -2);
						if (r === -1) {
							if (t === this.prerelease.join(".") && n === !1) throw Error("invalid increment argument: identifier already exists");
							this.prerelease.push(e);
						}
					}
					if (t) {
						let r = [t, e];
						if (n === !1 && (r = [t]), l(this.prerelease, t)) {
							let e = this.prerelease[t.split(".").length];
							isNaN(e) && (this.prerelease = r);
						} else this.prerelease = r;
					}
					break;
				}
				default: throw Error(`invalid increment argument: ${e}`);
			}
			return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
		}
	};
})), pa = /* @__PURE__ */ i(((e, t) => {
	var n = fa();
	t.exports = (e, t, r) => new n(e, r).compare(new n(t, r));
})), ma = /* @__PURE__ */ i(((e, t) => {
	var n = pa();
	t.exports = (e, t, r) => n(e, t, r) === 0;
})), ha = /* @__PURE__ */ i(((e, t) => {
	var n = pa();
	t.exports = (e, t, r) => n(e, t, r) !== 0;
})), ga = /* @__PURE__ */ i(((e, t) => {
	var n = pa();
	t.exports = (e, t, r) => n(e, t, r) > 0;
})), _a = /* @__PURE__ */ i(((e, t) => {
	var n = pa();
	t.exports = (e, t, r) => n(e, t, r) >= 0;
})), va = /* @__PURE__ */ i(((e, t) => {
	var n = pa();
	t.exports = (e, t, r) => n(e, t, r) < 0;
})), ya = /* @__PURE__ */ i(((e, t) => {
	var n = pa();
	t.exports = (e, t, r) => n(e, t, r) <= 0;
})), ba = /* @__PURE__ */ i(((e, t) => {
	var n = ma(), r = ha(), i = ga(), a = _a(), o = va(), s = ya();
	t.exports = (e, t, c, l) => {
		switch (t) {
			case "===": return typeof e == "object" && (e = e.version), typeof c == "object" && (c = c.version), e === c;
			case "!==": return typeof e == "object" && (e = e.version), typeof c == "object" && (c = c.version), e !== c;
			case "":
			case "=":
			case "==": return n(e, c, l);
			case "!=": return r(e, c, l);
			case ">": return i(e, c, l);
			case ">=": return a(e, c, l);
			case "<": return o(e, c, l);
			case "<=": return s(e, c, l);
			default: throw TypeError(`Invalid operator: ${t}`);
		}
	};
})), xa = /* @__PURE__ */ i(((e, t) => {
	var n = Symbol("SemVer ANY");
	t.exports = class e {
		static get ANY() {
			return n;
		}
		constructor(t, i) {
			if (i = r(i), t instanceof e) {
				if (t.loose === !!i.loose) return t;
				t = t.value;
			}
			t = t.trim().split(/\s+/).join(" "), s("comparator", t, i), this.options = i, this.loose = !!i.loose, this.parse(t), this.value = this.semver === n ? "" : this.operator + this.semver.version, s("comp", this);
		}
		parse(e) {
			let t = this.options.loose ? i[a.COMPARATORLOOSE] : i[a.COMPARATOR], r = e.match(t);
			if (!r) throw TypeError(`Invalid comparator: ${e}`);
			this.operator = r[1] === void 0 ? "" : r[1], this.operator === "=" && (this.operator = ""), this.semver = r[2] ? new c(r[2], this.options.loose) : n;
		}
		toString() {
			return this.value;
		}
		test(e) {
			if (s("Comparator.test", e, this.options.loose), this.semver === n || e === n) return !0;
			if (typeof e == "string") try {
				e = new c(e, this.options);
			} catch {
				return !1;
			}
			return o(e, this.operator, this.semver, this.options);
		}
		intersects(t, n) {
			if (!(t instanceof e)) throw TypeError("a Comparator is required");
			return this.operator === "" ? this.value === "" || new l(t.value, n).test(this.value) : t.operator === "" ? t.value === "" || new l(this.value, n).test(t.semver) : (n = r(n), n.includePrerelease && (this.value === "<0.0.0-0" || t.value === "<0.0.0-0") || !n.includePrerelease && (this.value.startsWith("<0.0.0") || t.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && t.operator.startsWith(">") || this.operator.startsWith("<") && t.operator.startsWith("<") || this.semver.version === t.semver.version && this.operator.includes("=") && t.operator.includes("=") || o(this.semver, "<", t.semver, n) && this.operator.startsWith(">") && t.operator.startsWith("<") || o(this.semver, ">", t.semver, n) && this.operator.startsWith("<") && t.operator.startsWith(">")));
		}
	};
	var r = sa(), { safeRe: i, t: a } = ua(), o = ba(), s = la(), c = fa(), l = Sa();
})), Sa = /* @__PURE__ */ i(((e, t) => {
	var n = /\s+/g;
	t.exports = class e {
		constructor(t, r) {
			if (r = i(r), t instanceof e) return t.loose === !!r.loose && t.includePrerelease === !!r.includePrerelease ? t : new e(t.raw, r);
			if (t instanceof a) return this.raw = t.value, this.set = [[t]], this.formatted = void 0, this;
			if (this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease, this.raw = t.trim().replace(n, " "), this.set = this.raw.split("||").map((e) => this.parseRange(e.trim())).filter((e) => e.length), !this.set.length) throw TypeError(`Invalid SemVer Range: ${this.raw}`);
			if (this.set.length > 1) {
				let e = this.set[0];
				if (this.set = this.set.filter((e) => !_(e[0])), this.set.length === 0) this.set = [e];
				else if (this.set.length > 1) {
					for (let e of this.set) if (e.length === 1 && v(e[0])) {
						this.set = [e];
						break;
					}
				}
			}
			this.formatted = void 0;
		}
		get range() {
			if (this.formatted === void 0) {
				this.formatted = "";
				for (let e = 0; e < this.set.length; e++) {
					e > 0 && (this.formatted += "||");
					let t = this.set[e];
					for (let e = 0; e < t.length; e++) e > 0 && (this.formatted += " "), this.formatted += t[e].toString().trim();
				}
			}
			return this.formatted;
		}
		format() {
			return this.range;
		}
		toString() {
			return this.range;
		}
		parseRange(e) {
			e = e.replace(g, "");
			let t = ((this.options.includePrerelease && m) | (this.options.loose && h)) + ":" + e, n = r.get(t);
			if (n) return n;
			let i = this.options.loose, s = i ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
			e = e.replace(s, j(this.options.includePrerelease)), o("hyphen replace", e), e = e.replace(c[u.COMPARATORTRIM], d), o("comparator trim", e), e = e.replace(c[u.TILDETRIM], f), o("tilde trim", e), e = e.replace(c[u.CARETTRIM], p), o("caret trim", e);
			let l = e.split(" ").map((e) => b(e, this.options)).join(" ").split(/\s+/).map((e) => A(e, this.options));
			i && (l = l.filter((e) => (o("loose invalid filter", e, this.options), !!e.match(c[u.COMPARATORLOOSE])))), o("range list", l);
			let v = /* @__PURE__ */ new Map(), y = l.map((e) => new a(e, this.options));
			for (let e of y) {
				if (_(e)) return [e];
				v.set(e.value, e);
			}
			v.size > 1 && v.has("") && v.delete("");
			let x = [...v.values()];
			return r.set(t, x), x;
		}
		intersects(t, n) {
			if (!(t instanceof e)) throw TypeError("a Range is required");
			return this.set.some((e) => y(e, n) && t.set.some((t) => y(t, n) && e.every((e) => t.every((t) => e.intersects(t, n)))));
		}
		test(e) {
			if (!e) return !1;
			if (typeof e == "string") try {
				e = new s(e, this.options);
			} catch {
				return !1;
			}
			for (let t = 0; t < this.set.length; t++) if (M(this.set[t], e, this.options)) return !0;
			return !1;
		}
	};
	var r = new (oa())(), i = sa(), a = xa(), o = la(), s = fa(), { safeRe: c, src: l, t: u, comparatorTrimReplace: d, tildeTrimReplace: f, caretTrimReplace: p } = ua(), { FLAG_INCLUDE_PRERELEASE: m, FLAG_LOOSE: h } = ca(), g = new RegExp(l[u.BUILD], "g"), _ = (e) => e.value === "<0.0.0-0", v = (e) => e.value === "", y = (e, t) => {
		let n = !0, r = e.slice(), i = r.pop();
		for (; n && r.length;) n = r.every((e) => i.intersects(e, t)), i = r.pop();
		return n;
	}, b = (e, t) => (e = e.replace(c[u.BUILD], ""), o("comp", e, t), e = T(e, t), o("caret", e), e = C(e, t), o("tildes", e), e = D(e, t), o("xrange", e), e = k(e, t), o("stars", e), e), x = (e) => !e || e.toLowerCase() === "x" || e === "*", S = (e, t, n) => x(e) && !x(t) || x(t) && n && !x(n), C = (e, t) => e.trim().split(/\s+/).map((e) => w(e, t)).join(" "), w = (e, t) => {
		let n = t.loose ? c[u.TILDELOOSE] : c[u.TILDE], r = t.includePrerelease ? "-0" : "";
		return e.replace(n, (t, n, i, a, s) => {
			o("tilde", e, t, n, i, a, s);
			let c;
			return x(n) ? c = "" : x(i) ? c = `>=${n}.0.0${r} <${+n + 1}.0.0-0` : x(a) ? c = `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : s ? (o("replaceTilde pr", s), c = `>=${n}.${i}.${a}-${s} <${n}.${+i + 1}.0-0`) : c = `>=${n}.${i}.${a} <${n}.${+i + 1}.0-0`, o("tilde return", c), c;
		});
	}, T = (e, t) => e.trim().split(/\s+/).map((e) => E(e, t)).join(" "), E = (e, t) => {
		o("caret", e, t);
		let n = t.loose ? c[u.CARETLOOSE] : c[u.CARET], r = t.includePrerelease ? "-0" : "";
		return e.replace(n, (t, n, i, a, s) => {
			o("caret", e, t, n, i, a, s);
			let c;
			return x(n) ? c = "" : x(i) ? c = `>=${n}.0.0${r} <${+n + 1}.0.0-0` : x(a) ? c = n === "0" ? `>=${n}.${i}.0${r} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.0${r} <${+n + 1}.0.0-0` : s ? (o("replaceCaret pr", s), c = n === "0" ? i === "0" ? `>=${n}.${i}.${a}-${s} <${n}.${i}.${+a + 1}-0` : `>=${n}.${i}.${a}-${s} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${a}-${s} <${+n + 1}.0.0-0`) : (o("no pr"), c = n === "0" ? i === "0" ? `>=${n}.${i}.${a} <${n}.${i}.${+a + 1}-0` : `>=${n}.${i}.${a} <${n}.${+i + 1}.0-0` : `>=${n}.${i}.${a} <${+n + 1}.0.0-0`), o("caret return", c), c;
		});
	}, D = (e, t) => (o("replaceXRanges", e, t), e.split(/\s+/).map((e) => O(e, t)).join(" ")), O = (e, t) => {
		e = e.trim();
		let n = t.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
		return e.replace(n, (n, r, i, a, s, c) => {
			if (o("xRange", e, n, r, i, a, s, c), S(i, a, s)) return e;
			let l = x(i), u = l || x(a), d = u || x(s), f = d;
			return r === "=" && f && (r = ""), c = t.includePrerelease ? "-0" : "", l ? n = r === ">" || r === "<" ? "<0.0.0-0" : "*" : r && f ? (u && (a = 0), s = 0, r === ">" ? (r = ">=", u ? (i = +i + 1, a = 0, s = 0) : (a = +a + 1, s = 0)) : r === "<=" && (r = "<", u ? i = +i + 1 : a = +a + 1), r === "<" && (c = "-0"), n = `${r + i}.${a}.${s}${c}`) : u ? n = `>=${i}.0.0${c} <${+i + 1}.0.0-0` : d && (n = `>=${i}.${a}.0${c} <${i}.${+a + 1}.0-0`), o("xRange return", n), n;
		});
	}, k = (e, t) => (o("replaceStars", e, t), e.trim().replace(c[u.STAR], "")), A = (e, t) => (o("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? u.GTE0PRE : u.GTE0], "")), j = (e) => (t, n, r, i, a, o, s, c, l, u, d, f) => (n = x(r) ? "" : x(i) ? `>=${r}.0.0${e ? "-0" : ""}` : x(a) ? `>=${r}.${i}.0${e ? "-0" : ""}` : o ? `>=${n}` : `>=${n}${e ? "-0" : ""}`, c = x(l) ? "" : x(u) ? `<${+l + 1}.0.0-0` : x(d) ? `<${l}.${+u + 1}.0-0` : f ? `<=${l}.${u}.${d}-${f}` : e ? `<${l}.${u}.${+d + 1}-0` : `<=${c}`, `${n} ${c}`.trim()), M = (e, t, n) => {
		for (let n = 0; n < e.length; n++) if (!e[n].test(t)) return !1;
		if (t.prerelease.length && !n.includePrerelease) {
			for (let n = 0; n < e.length; n++) if (o(e[n].semver), e[n].semver !== a.ANY && e[n].semver.prerelease.length > 0) {
				let r = e[n].semver;
				if (r.major === t.major && r.minor === t.minor && r.patch === t.patch) return !0;
			}
			return !1;
		}
		return !0;
	};
})), Ca = /* @__PURE__ */ i(((e, t) => {
	var n = Sa();
	t.exports = (e, t, r) => {
		try {
			t = new n(t, r);
		} catch {
			return !1;
		}
		return t.test(e);
	};
})), wa = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
	var t = class {};
	e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
	var n = class extends t {
		constructor(t) {
			if (super(), !e.IDENTIFIER.test(t)) throw Error("CodeGen: name must be a valid identifier");
			this.str = t;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			return !1;
		}
		get names() {
			return { [this.str]: 1 };
		}
	};
	e.Name = n;
	var r = class extends t {
		constructor(e) {
			super(), this._items = typeof e == "string" ? [e] : e;
		}
		toString() {
			return this.str;
		}
		emptyStr() {
			if (this._items.length > 1) return !1;
			let e = this._items[0];
			return e === "" || e === "\"\"";
		}
		get str() {
			return this._str ??= this._items.reduce((e, t) => `${e}${t}`, "");
		}
		get names() {
			return this._names ??= this._items.reduce((e, t) => (t instanceof n && (e[t.str] = (e[t.str] || 0) + 1), e), {});
		}
	};
	e._Code = r, e.nil = new r("");
	function i(e, ...t) {
		let n = [e[0]], i = 0;
		for (; i < t.length;) s(n, t[i]), n.push(e[++i]);
		return new r(n);
	}
	e._ = i;
	var a = new r("+");
	function o(e, ...t) {
		let n = [p(e[0])], i = 0;
		for (; i < t.length;) n.push(a), s(n, t[i]), n.push(a, p(e[++i]));
		return c(n), new r(n);
	}
	e.str = o;
	function s(e, t) {
		t instanceof r ? e.push(...t._items) : t instanceof n ? e.push(t) : e.push(d(t));
	}
	e.addCodeArg = s;
	function c(e) {
		let t = 1;
		for (; t < e.length - 1;) {
			if (e[t] === a) {
				let n = l(e[t - 1], e[t + 1]);
				if (n !== void 0) {
					e.splice(t - 1, 3, n);
					continue;
				}
				e[t++] = "+";
			}
			t++;
		}
	}
	function l(e, t) {
		if (t === "\"\"") return e;
		if (e === "\"\"") return t;
		if (typeof e == "string") return t instanceof n || e[e.length - 1] !== "\"" ? void 0 : typeof t == "string" ? t[0] === "\"" ? e.slice(0, -1) + t.slice(1) : void 0 : `${e.slice(0, -1)}${t}"`;
		if (typeof t == "string" && t[0] === "\"" && !(e instanceof n)) return `"${e}${t.slice(1)}`;
	}
	function u(e, t) {
		return t.emptyStr() ? e : e.emptyStr() ? t : o`${e}${t}`;
	}
	e.strConcat = u;
	function d(e) {
		return typeof e == "number" || typeof e == "boolean" || e === null ? e : p(Array.isArray(e) ? e.join(",") : e);
	}
	function f(e) {
		return new r(p(e));
	}
	e.stringify = f;
	function p(e) {
		return JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
	}
	e.safeStringify = p;
	function m(t) {
		return typeof t == "string" && e.IDENTIFIER.test(t) ? new r(`.${t}`) : i`[${t}]`;
	}
	e.getProperty = m;
	function h(t) {
		if (typeof t == "string" && e.IDENTIFIER.test(t)) return new r(`${t}`);
		throw Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
	}
	e.getEsmExportName = h;
	function g(e) {
		return new r(e.toString());
	}
	e.regexpCode = g;
})), Ta = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
	var t = wa(), n = class extends Error {
		constructor(e) {
			super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
		}
	}, r;
	(function(e) {
		e[e.Started = 0] = "Started", e[e.Completed = 1] = "Completed";
	})(r || (e.UsedValueState = r = {})), e.varKinds = {
		const: new t.Name("const"),
		let: new t.Name("let"),
		var: new t.Name("var")
	};
	var i = class {
		constructor({ prefixes: e, parent: t } = {}) {
			this._names = {}, this._prefixes = e, this._parent = t;
		}
		toName(e) {
			return e instanceof t.Name ? e : this.name(e);
		}
		name(e) {
			return new t.Name(this._newName(e));
		}
		_newName(e) {
			let t = this._names[e] || this._nameGroup(e);
			return `${e}${t.index++}`;
		}
		_nameGroup(e) {
			if ((this._parent?._prefixes)?.has(e) || this._prefixes && !this._prefixes.has(e)) throw Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
			return this._names[e] = {
				prefix: e,
				index: 0
			};
		}
	};
	e.Scope = i;
	var a = class extends t.Name {
		constructor(e, t) {
			super(t), this.prefix = e;
		}
		setValue(e, { property: n, itemIndex: r }) {
			this.value = e, this.scopePath = (0, t._)`.${new t.Name(n)}[${r}]`;
		}
	};
	e.ValueScopeName = a;
	var o = (0, t._)`\n`;
	e.ValueScope = class extends i {
		constructor(e) {
			super(e), this._values = {}, this._scope = e.scope, this.opts = {
				...e,
				_n: e.lines ? o : t.nil
			};
		}
		get() {
			return this._scope;
		}
		name(e) {
			return new a(e, this._newName(e));
		}
		value(e, t) {
			if (t.ref === void 0) throw Error("CodeGen: ref must be passed in value");
			let n = this.toName(e), { prefix: r } = n, i = t.key ?? t.ref, a = this._values[r];
			if (a) {
				let e = a.get(i);
				if (e) return e;
			} else a = this._values[r] = /* @__PURE__ */ new Map();
			a.set(i, n);
			let o = this._scope[r] || (this._scope[r] = []), s = o.length;
			return o[s] = t.ref, n.setValue(t, {
				property: r,
				itemIndex: s
			}), n;
		}
		getValue(e, t) {
			let n = this._values[e];
			if (n) return n.get(t);
		}
		scopeRefs(e, n = this._values) {
			return this._reduceValues(n, (n) => {
				if (n.scopePath === void 0) throw Error(`CodeGen: name "${n}" has no value`);
				return (0, t._)`${e}${n.scopePath}`;
			});
		}
		scopeCode(e = this._values, t, n) {
			return this._reduceValues(e, (e) => {
				if (e.value === void 0) throw Error(`CodeGen: name "${e}" has no value`);
				return e.value.code;
			}, t, n);
		}
		_reduceValues(i, a, o = {}, s) {
			let c = t.nil;
			for (let l in i) {
				let u = i[l];
				if (!u) continue;
				let d = o[l] = o[l] || /* @__PURE__ */ new Map();
				u.forEach((i) => {
					if (d.has(i)) return;
					d.set(i, r.Started);
					let o = a(i);
					if (o) {
						let n = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
						c = (0, t._)`${c}${n} ${i} = ${o};${this.opts._n}`;
					} else if (o = s?.(i)) c = (0, t._)`${c}${o}${this.opts._n}`;
					else throw new n(i);
					d.set(i, r.Completed);
				});
			}
			return c;
		}
	};
})), Y = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
	var t = wa(), n = Ta(), r = wa();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return r._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return r.str;
		}
	}), Object.defineProperty(e, "strConcat", {
		enumerable: !0,
		get: function() {
			return r.strConcat;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return r.nil;
		}
	}), Object.defineProperty(e, "getProperty", {
		enumerable: !0,
		get: function() {
			return r.getProperty;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return r.stringify;
		}
	}), Object.defineProperty(e, "regexpCode", {
		enumerable: !0,
		get: function() {
			return r.regexpCode;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return r.Name;
		}
	});
	var i = Ta();
	Object.defineProperty(e, "Scope", {
		enumerable: !0,
		get: function() {
			return i.Scope;
		}
	}), Object.defineProperty(e, "ValueScope", {
		enumerable: !0,
		get: function() {
			return i.ValueScope;
		}
	}), Object.defineProperty(e, "ValueScopeName", {
		enumerable: !0,
		get: function() {
			return i.ValueScopeName;
		}
	}), Object.defineProperty(e, "varKinds", {
		enumerable: !0,
		get: function() {
			return i.varKinds;
		}
	}), e.operators = {
		GT: new t._Code(">"),
		GTE: new t._Code(">="),
		LT: new t._Code("<"),
		LTE: new t._Code("<="),
		EQ: new t._Code("==="),
		NEQ: new t._Code("!=="),
		NOT: new t._Code("!"),
		OR: new t._Code("||"),
		AND: new t._Code("&&"),
		ADD: new t._Code("+")
	};
	var a = class {
		optimizeNodes() {
			return this;
		}
		optimizeNames(e, t) {
			return this;
		}
	}, o = class extends a {
		constructor(e, t, n) {
			super(), this.varKind = e, this.name = t, this.rhs = n;
		}
		render({ es5: e, _n: t }) {
			let r = e ? n.varKinds.var : this.varKind, i = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
			return `${r} ${this.name}${i};` + t;
		}
		optimizeNames(e, t) {
			if (e[this.name.str]) return this.rhs &&= k(this.rhs, e, t), this;
		}
		get names() {
			return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
		}
	}, s = class extends a {
		constructor(e, t, n) {
			super(), this.lhs = e, this.rhs = t, this.sideEffects = n;
		}
		render({ _n: e }) {
			return `${this.lhs} = ${this.rhs};` + e;
		}
		optimizeNames(e, n) {
			if (!(this.lhs instanceof t.Name && !e[this.lhs.str] && !this.sideEffects)) return this.rhs = k(this.rhs, e, n), this;
		}
		get names() {
			return O(this.lhs instanceof t.Name ? {} : { ...this.lhs.names }, this.rhs);
		}
	}, c = class extends s {
		constructor(e, t, n, r) {
			super(e, n, r), this.op = t;
		}
		render({ _n: e }) {
			return `${this.lhs} ${this.op}= ${this.rhs};` + e;
		}
	}, l = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `${this.label}:` + e;
		}
	}, u = class extends a {
		constructor(e) {
			super(), this.label = e, this.names = {};
		}
		render({ _n: e }) {
			return `break${this.label ? ` ${this.label}` : ""};` + e;
		}
	}, d = class extends a {
		constructor(e) {
			super(), this.error = e;
		}
		render({ _n: e }) {
			return `throw ${this.error};` + e;
		}
		get names() {
			return this.error.names;
		}
	}, f = class extends a {
		constructor(e) {
			super(), this.code = e;
		}
		render({ _n: e }) {
			return `${this.code};` + e;
		}
		optimizeNodes() {
			return `${this.code}` ? this : void 0;
		}
		optimizeNames(e, t) {
			return this.code = k(this.code, e, t), this;
		}
		get names() {
			return this.code instanceof t._CodeOrName ? this.code.names : {};
		}
	}, p = class extends a {
		constructor(e = []) {
			super(), this.nodes = e;
		}
		render(e) {
			return this.nodes.reduce((t, n) => t + n.render(e), "");
		}
		optimizeNodes() {
			let { nodes: e } = this, t = e.length;
			for (; t--;) {
				let n = e[t].optimizeNodes();
				Array.isArray(n) ? e.splice(t, 1, ...n) : n ? e[t] = n : e.splice(t, 1);
			}
			return e.length > 0 ? this : void 0;
		}
		optimizeNames(e, t) {
			let { nodes: n } = this, r = n.length;
			for (; r--;) {
				let i = n[r];
				i.optimizeNames(e, t) || (A(e, i.names), n.splice(r, 1));
			}
			return n.length > 0 ? this : void 0;
		}
		get names() {
			return this.nodes.reduce((e, t) => D(e, t.names), {});
		}
	}, m = class extends p {
		render(e) {
			return "{" + e._n + super.render(e) + "}" + e._n;
		}
	}, h = class extends p {}, g = class extends m {};
	g.kind = "else";
	var _ = class e extends m {
		constructor(e, t) {
			super(t), this.condition = e;
		}
		render(e) {
			let t = `if(${this.condition})` + super.render(e);
			return this.else && (t += "else " + this.else.render(e)), t;
		}
		optimizeNodes() {
			super.optimizeNodes();
			let t = this.condition;
			if (t === !0) return this.nodes;
			let n = this.else;
			if (n) {
				let e = n.optimizeNodes();
				n = this.else = Array.isArray(e) ? new g(e) : e;
			}
			if (n) return t === !1 ? n instanceof e ? n : n.nodes : this.nodes.length ? this : new e(j(t), n instanceof e ? [n] : n.nodes);
			if (t !== !1 && this.nodes.length) return this;
		}
		optimizeNames(e, t) {
			if (this.else = this.else?.optimizeNames(e, t), super.optimizeNames(e, t) || this.else) return this.condition = k(this.condition, e, t), this;
		}
		get names() {
			let e = super.names;
			return O(e, this.condition), this.else && D(e, this.else.names), e;
		}
	};
	_.kind = "if";
	var v = class extends m {};
	v.kind = "for";
	var y = class extends v {
		constructor(e) {
			super(), this.iteration = e;
		}
		render(e) {
			return `for(${this.iteration})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iteration = k(this.iteration, e, t), this;
		}
		get names() {
			return D(super.names, this.iteration.names);
		}
	}, b = class extends v {
		constructor(e, t, n, r) {
			super(), this.varKind = e, this.name = t, this.from = n, this.to = r;
		}
		render(e) {
			let t = e.es5 ? n.varKinds.var : this.varKind, { name: r, from: i, to: a } = this;
			return `for(${t} ${r}=${i}; ${r}<${a}; ${r}++)` + super.render(e);
		}
		get names() {
			return O(O(super.names, this.from), this.to);
		}
	}, x = class extends v {
		constructor(e, t, n, r) {
			super(), this.loop = e, this.varKind = t, this.name = n, this.iterable = r;
		}
		render(e) {
			return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
		}
		optimizeNames(e, t) {
			if (super.optimizeNames(e, t)) return this.iterable = k(this.iterable, e, t), this;
		}
		get names() {
			return D(super.names, this.iterable.names);
		}
	}, S = class extends m {
		constructor(e, t, n) {
			super(), this.name = e, this.args = t, this.async = n;
		}
		render(e) {
			return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
		}
	};
	S.kind = "func";
	var C = class extends p {
		render(e) {
			return "return " + super.render(e);
		}
	};
	C.kind = "return";
	var w = class extends m {
		render(e) {
			let t = "try" + super.render(e);
			return this.catch && (t += this.catch.render(e)), this.finally && (t += this.finally.render(e)), t;
		}
		optimizeNodes() {
			var e, t;
			return super.optimizeNodes(), (e = this.catch) == null || e.optimizeNodes(), (t = this.finally) == null || t.optimizeNodes(), this;
		}
		optimizeNames(e, t) {
			var n, r;
			return super.optimizeNames(e, t), (n = this.catch) == null || n.optimizeNames(e, t), (r = this.finally) == null || r.optimizeNames(e, t), this;
		}
		get names() {
			let e = super.names;
			return this.catch && D(e, this.catch.names), this.finally && D(e, this.finally.names), e;
		}
	}, T = class extends m {
		constructor(e) {
			super(), this.error = e;
		}
		render(e) {
			return `catch(${this.error})` + super.render(e);
		}
	};
	T.kind = "catch";
	var E = class extends m {
		render(e) {
			return "finally" + super.render(e);
		}
	};
	E.kind = "finally", e.CodeGen = class {
		constructor(e, t = {}) {
			this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = {
				...t,
				_n: t.lines ? "\n" : ""
			}, this._extScope = e, this._scope = new n.Scope({ parent: e }), this._nodes = [new h()];
		}
		toString() {
			return this._root.render(this.opts);
		}
		name(e) {
			return this._scope.name(e);
		}
		scopeName(e) {
			return this._extScope.name(e);
		}
		scopeValue(e, t) {
			let n = this._extScope.value(e, t);
			return (this._values[n.prefix] || (this._values[n.prefix] = /* @__PURE__ */ new Set())).add(n), n;
		}
		getScopeValue(e, t) {
			return this._extScope.getValue(e, t);
		}
		scopeRefs(e) {
			return this._extScope.scopeRefs(e, this._values);
		}
		scopeCode() {
			return this._extScope.scopeCode(this._values);
		}
		_def(e, t, n, r) {
			let i = this._scope.toName(t);
			return n !== void 0 && r && (this._constants[i.str] = n), this._leafNode(new o(e, i, n)), i;
		}
		const(e, t, r) {
			return this._def(n.varKinds.const, e, t, r);
		}
		let(e, t, r) {
			return this._def(n.varKinds.let, e, t, r);
		}
		var(e, t, r) {
			return this._def(n.varKinds.var, e, t, r);
		}
		assign(e, t, n) {
			return this._leafNode(new s(e, t, n));
		}
		add(t, n) {
			return this._leafNode(new c(t, e.operators.ADD, n));
		}
		code(e) {
			return typeof e == "function" ? e() : e !== t.nil && this._leafNode(new f(e)), this;
		}
		object(...e) {
			let n = ["{"];
			for (let [r, i] of e) n.length > 1 && n.push(","), n.push(r), (r !== i || this.opts.es5) && (n.push(":"), (0, t.addCodeArg)(n, i));
			return n.push("}"), new t._Code(n);
		}
		if(e, t, n) {
			if (this._blockNode(new _(e)), t && n) this.code(t).else().code(n).endIf();
			else if (t) this.code(t).endIf();
			else if (n) throw Error("CodeGen: \"else\" body without \"then\" body");
			return this;
		}
		elseIf(e) {
			return this._elseNode(new _(e));
		}
		else() {
			return this._elseNode(new g());
		}
		endIf() {
			return this._endBlockNode(_, g);
		}
		_for(e, t) {
			return this._blockNode(e), t && this.code(t).endFor(), this;
		}
		for(e, t) {
			return this._for(new y(e), t);
		}
		forRange(e, t, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
			let o = this._scope.toName(e);
			return this._for(new b(a, o, t, r), () => i(o));
		}
		forOf(e, r, i, a = n.varKinds.const) {
			let o = this._scope.toName(e);
			if (this.opts.es5) {
				let e = r instanceof t.Name ? r : this.var("_arr", r);
				return this.forRange("_i", 0, (0, t._)`${e}.length`, (n) => {
					this.var(o, (0, t._)`${e}[${n}]`), i(o);
				});
			}
			return this._for(new x("of", a, o, r), () => i(o));
		}
		forIn(e, r, i, a = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
			if (this.opts.ownProperties) return this.forOf(e, (0, t._)`Object.keys(${r})`, i);
			let o = this._scope.toName(e);
			return this._for(new x("in", a, o, r), () => i(o));
		}
		endFor() {
			return this._endBlockNode(v);
		}
		label(e) {
			return this._leafNode(new l(e));
		}
		break(e) {
			return this._leafNode(new u(e));
		}
		return(e) {
			let t = new C();
			if (this._blockNode(t), this.code(e), t.nodes.length !== 1) throw Error("CodeGen: \"return\" should have one node");
			return this._endBlockNode(C);
		}
		try(e, t, n) {
			if (!t && !n) throw Error("CodeGen: \"try\" without \"catch\" and \"finally\"");
			let r = new w();
			if (this._blockNode(r), this.code(e), t) {
				let e = this.name("e");
				this._currNode = r.catch = new T(e), t(e);
			}
			return n && (this._currNode = r.finally = new E(), this.code(n)), this._endBlockNode(T, E);
		}
		throw(e) {
			return this._leafNode(new d(e));
		}
		block(e, t) {
			return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(t), this;
		}
		endBlock(e) {
			let t = this._blockStarts.pop();
			if (t === void 0) throw Error("CodeGen: not in self-balancing block");
			let n = this._nodes.length - t;
			if (n < 0 || e !== void 0 && n !== e) throw Error(`CodeGen: wrong number of nodes: ${n} vs ${e} expected`);
			return this._nodes.length = t, this;
		}
		func(e, n = t.nil, r, i) {
			return this._blockNode(new S(e, n, r)), i && this.code(i).endFunc(), this;
		}
		endFunc() {
			return this._endBlockNode(S);
		}
		optimize(e = 1) {
			for (; e-- > 0;) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
		}
		_leafNode(e) {
			return this._currNode.nodes.push(e), this;
		}
		_blockNode(e) {
			this._currNode.nodes.push(e), this._nodes.push(e);
		}
		_endBlockNode(e, t) {
			let n = this._currNode;
			if (n instanceof e || t && n instanceof t) return this._nodes.pop(), this;
			throw Error(`CodeGen: not in block "${t ? `${e.kind}/${t.kind}` : e.kind}"`);
		}
		_elseNode(e) {
			let t = this._currNode;
			if (!(t instanceof _)) throw Error("CodeGen: \"else\" without \"if\"");
			return this._currNode = t.else = e, this;
		}
		get _root() {
			return this._nodes[0];
		}
		get _currNode() {
			let e = this._nodes;
			return e[e.length - 1];
		}
		set _currNode(e) {
			let t = this._nodes;
			t[t.length - 1] = e;
		}
	};
	function D(e, t) {
		for (let n in t) e[n] = (e[n] || 0) + (t[n] || 0);
		return e;
	}
	function O(e, n) {
		return n instanceof t._CodeOrName ? D(e, n.names) : e;
	}
	function k(e, n, r) {
		return e instanceof t.Name ? i(e) : a(e) ? new t._Code(e._items.reduce((e, n) => (n instanceof t.Name && (n = i(n)), n instanceof t._Code ? e.push(...n._items) : e.push(n), e), [])) : e;
		function i(e) {
			let t = r[e.str];
			return t === void 0 || n[e.str] !== 1 ? e : (delete n[e.str], t);
		}
		function a(e) {
			return e instanceof t._Code && e._items.some((e) => e instanceof t.Name && n[e.str] === 1 && r[e.str] !== void 0);
		}
	}
	function A(e, t) {
		for (let n in t) e[n] = (e[n] || 0) - (t[n] || 0);
	}
	function j(e) {
		return typeof e == "boolean" || typeof e == "number" || e === null ? !e : (0, t._)`!${re(e)}`;
	}
	e.not = j;
	var M = ne(e.operators.AND);
	function N(...e) {
		return e.reduce(M);
	}
	e.and = N;
	var ee = ne(e.operators.OR);
	function te(...e) {
		return e.reduce(ee);
	}
	e.or = te;
	function ne(e) {
		return (n, r) => n === t.nil ? r : r === t.nil ? n : (0, t._)`${re(n)} ${e} ${re(r)}`;
	}
	function re(e) {
		return e instanceof t.Name ? e : (0, t._)`(${e})`;
	}
})), X = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
	var t = Y(), n = wa();
	function r(e) {
		let t = {};
		for (let n of e) t[n] = !0;
		return t;
	}
	e.toHash = r;
	function i(e, t) {
		return typeof t == "boolean" ? t : Object.keys(t).length === 0 || (a(e, t), !o(t, e.self.RULES.all));
	}
	e.alwaysValidSchema = i;
	function a(e, t = e.schema) {
		let { opts: n, self: r } = e;
		if (!n.strictSchema || typeof t == "boolean") return;
		let i = r.RULES.keywords;
		for (let n in t) i[n] || x(e, `unknown keyword: "${n}"`);
	}
	e.checkUnknownRules = a;
	function o(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t[n]) return !0;
		return !1;
	}
	e.schemaHasRules = o;
	function s(e, t) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (n !== "$ref" && t.all[n]) return !0;
		return !1;
	}
	e.schemaHasRulesButRef = s;
	function c({ topSchemaRef: e, schemaPath: n }, r, i, a) {
		if (!a) {
			if (typeof r == "number" || typeof r == "boolean") return r;
			if (typeof r == "string") return (0, t._)`${r}`;
		}
		return (0, t._)`${e}${n}${(0, t.getProperty)(i)}`;
	}
	e.schemaRefOrVal = c;
	function l(e) {
		return f(decodeURIComponent(e));
	}
	e.unescapeFragment = l;
	function u(e) {
		return encodeURIComponent(d(e));
	}
	e.escapeFragment = u;
	function d(e) {
		return typeof e == "number" ? `${e}` : e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
	e.escapeJsonPointer = d;
	function f(e) {
		return e.replace(/~1/g, "/").replace(/~0/g, "~");
	}
	e.unescapeJsonPointer = f;
	function p(e, t) {
		if (Array.isArray(e)) for (let n of e) t(n);
		else t(e);
	}
	e.eachItem = p;
	function m({ mergeNames: e, mergeToName: n, mergeValues: r, resultToName: i }) {
		return (a, o, s, c) => {
			let l = s === void 0 ? o : s instanceof t.Name ? (o instanceof t.Name ? e(a, o, s) : n(a, o, s), s) : o instanceof t.Name ? (n(a, s, o), o) : r(o, s);
			return c === t.Name && !(l instanceof t.Name) ? i(a, l) : l;
		};
	}
	e.mergeEvaluated = {
		props: m({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => {
				e.if((0, t._)`${n} === true`, () => e.assign(r, !0), () => e.assign(r, (0, t._)`${r} || {}`).code((0, t._)`Object.assign(${r}, ${n})`));
			}),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => {
				n === !0 ? e.assign(r, !0) : (e.assign(r, (0, t._)`${r} || {}`), g(e, r, n));
			}),
			mergeValues: (e, t) => e === !0 || {
				...e,
				...t
			},
			resultToName: h
		}),
		items: m({
			mergeNames: (e, n, r) => e.if((0, t._)`${r} !== true && ${n} !== undefined`, () => e.assign(r, (0, t._)`${n} === true ? true : ${r} > ${n} ? ${r} : ${n}`)),
			mergeToName: (e, n, r) => e.if((0, t._)`${r} !== true`, () => e.assign(r, n === !0 || (0, t._)`${r} > ${n} ? ${r} : ${n}`)),
			mergeValues: (e, t) => e === !0 || Math.max(e, t),
			resultToName: (e, t) => e.var("items", t)
		})
	};
	function h(e, n) {
		if (n === !0) return e.var("props", !0);
		let r = e.var("props", (0, t._)`{}`);
		return n !== void 0 && g(e, r, n), r;
	}
	e.evaluatedPropsToName = h;
	function g(e, n, r) {
		Object.keys(r).forEach((r) => e.assign((0, t._)`${n}${(0, t.getProperty)(r)}`, !0));
	}
	e.setEvaluated = g;
	var _ = {};
	function v(e, t) {
		return e.scopeValue("func", {
			ref: t,
			code: _[t.code] || (_[t.code] = new n._Code(t.code))
		});
	}
	e.useFunc = v;
	var y;
	(function(e) {
		e[e.Num = 0] = "Num", e[e.Str = 1] = "Str";
	})(y || (e.Type = y = {}));
	function b(e, n, r) {
		if (e instanceof t.Name) {
			let i = n === y.Num;
			return r ? i ? (0, t._)`"[" + ${e} + "]"` : (0, t._)`"['" + ${e} + "']"` : i ? (0, t._)`"/" + ${e}` : (0, t._)`"/" + ${e}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
		}
		return r ? (0, t.getProperty)(e).toString() : "/" + d(e);
	}
	e.getErrorPath = b;
	function x(e, t, n = e.opts.strictSchema) {
		if (n) {
			if (t = `strict mode: ${t}`, n === !0) throw Error(t);
			e.self.logger.warn(t);
		}
	}
	e.checkStrictMode = x;
})), Ea = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y();
	e.default = {
		data: new t.Name("data"),
		valCxt: new t.Name("valCxt"),
		instancePath: new t.Name("instancePath"),
		parentData: new t.Name("parentData"),
		parentDataProperty: new t.Name("parentDataProperty"),
		rootData: new t.Name("rootData"),
		dynamicAnchors: new t.Name("dynamicAnchors"),
		vErrors: new t.Name("vErrors"),
		errors: new t.Name("errors"),
		this: new t.Name("this"),
		self: new t.Name("self"),
		scope: new t.Name("scope"),
		json: new t.Name("json"),
		jsonPos: new t.Name("jsonPos"),
		jsonLen: new t.Name("jsonLen"),
		jsonPart: new t.Name("jsonPart")
	};
})), Da = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
	var t = Y(), n = X(), r = Ea();
	e.keywordError = { message: ({ keyword: e }) => (0, t.str)`must pass "${e}" keyword validation` }, e.keyword$DataError = { message: ({ keyword: e, schemaType: n }) => n ? (0, t.str)`"${e}" keyword must be ${n} ($data)` : (0, t.str)`"${e}" keyword is invalid ($data)` };
	function i(n, r = e.keywordError, i, a) {
		let { it: o } = n, { gen: s, compositeRule: u, allErrors: f } = o, p = d(n, r, i);
		a ?? (u || f) ? c(s, p) : l(o, (0, t._)`[${p}]`);
	}
	e.reportError = i;
	function a(t, n = e.keywordError, i) {
		let { it: a } = t, { gen: o, compositeRule: s, allErrors: u } = a;
		c(o, d(t, n, i)), s || u || l(a, r.default.vErrors);
	}
	e.reportExtraError = a;
	function o(e, n) {
		e.assign(r.default.errors, n), e.if((0, t._)`${r.default.vErrors} !== null`, () => e.if(n, () => e.assign((0, t._)`${r.default.vErrors}.length`, n), () => e.assign(r.default.vErrors, null)));
	}
	e.resetErrorsCount = o;
	function s({ gen: e, keyword: n, schemaValue: i, data: a, errsCount: o, it: s }) {
		/* istanbul ignore if */
		if (o === void 0) throw Error("ajv implementation error");
		let c = e.name("err");
		e.forRange("i", o, r.default.errors, (o) => {
			e.const(c, (0, t._)`${r.default.vErrors}[${o}]`), e.if((0, t._)`${c}.instancePath === undefined`, () => e.assign((0, t._)`${c}.instancePath`, (0, t.strConcat)(r.default.instancePath, s.errorPath))), e.assign((0, t._)`${c}.schemaPath`, (0, t.str)`${s.errSchemaPath}/${n}`), s.opts.verbose && (e.assign((0, t._)`${c}.schema`, i), e.assign((0, t._)`${c}.data`, a));
		});
	}
	e.extendErrors = s;
	function c(e, n) {
		let i = e.const("err", n);
		e.if((0, t._)`${r.default.vErrors} === null`, () => e.assign(r.default.vErrors, (0, t._)`[${i}]`), (0, t._)`${r.default.vErrors}.push(${i})`), e.code((0, t._)`${r.default.errors}++`);
	}
	function l(e, n) {
		let { gen: r, validateName: i, schemaEnv: a } = e;
		a.$async ? r.throw((0, t._)`new ${e.ValidationError}(${n})`) : (r.assign((0, t._)`${i}.errors`, n), r.return(!1));
	}
	var u = {
		keyword: new t.Name("keyword"),
		schemaPath: new t.Name("schemaPath"),
		params: new t.Name("params"),
		propertyName: new t.Name("propertyName"),
		message: new t.Name("message"),
		schema: new t.Name("schema"),
		parentSchema: new t.Name("parentSchema")
	};
	function d(e, n, r) {
		let { createErrors: i } = e.it;
		return i === !1 ? (0, t._)`{}` : f(e, n, r);
	}
	function f(e, t, n = {}) {
		let { gen: r, it: i } = e, a = [p(i, n), m(e, n)];
		return h(e, t, a), r.object(...a);
	}
	function p({ errorPath: e }, { instancePath: i }) {
		let a = i ? (0, t.str)`${e}${(0, n.getErrorPath)(i, n.Type.Str)}` : e;
		return [r.default.instancePath, (0, t.strConcat)(r.default.instancePath, a)];
	}
	function m({ keyword: e, it: { errSchemaPath: r } }, { schemaPath: i, parentSchema: a }) {
		let o = a ? r : (0, t.str)`${r}/${e}`;
		return i && (o = (0, t.str)`${o}${(0, n.getErrorPath)(i, n.Type.Str)}`), [u.schemaPath, o];
	}
	function h(e, { params: n, message: i }, a) {
		let { keyword: o, data: s, schemaValue: c, it: l } = e, { opts: d, propertyName: f, topSchemaRef: p, schemaPath: m } = l;
		a.push([u.keyword, o], [u.params, typeof n == "function" ? n(e) : n || (0, t._)`{}`]), d.messages && a.push([u.message, typeof i == "function" ? i(e) : i]), d.verbose && a.push([u.schema, c], [u.parentSchema, (0, t._)`${p}${m}`], [r.default.data, s]), f && a.push([u.propertyName, f]);
	}
})), Oa = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.boolOrEmptySchema = e.topBoolOrEmptySchema = void 0;
	var t = Da(), n = Y(), r = Ea(), i = { message: "boolean schema is false" };
	function a(e) {
		let { gen: t, schema: i, validateName: a } = e;
		i === !1 ? s(e, !1) : typeof i == "object" && i.$async === !0 ? t.return(r.default.data) : (t.assign((0, n._)`${a}.errors`, null), t.return(!0));
	}
	e.topBoolOrEmptySchema = a;
	function o(e, t) {
		let { gen: n, schema: r } = e;
		r === !1 ? (n.var(t, !1), s(e)) : n.var(t, !0);
	}
	e.boolOrEmptySchema = o;
	function s(e, n) {
		let { gen: r, data: a } = e, o = {
			gen: r,
			keyword: "false schema",
			data: a,
			schema: !1,
			schemaCode: !1,
			schemaValue: !1,
			params: {},
			it: e
		};
		(0, t.reportError)(o, i, void 0, n);
	}
})), ka = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getRules = e.isJSONType = void 0;
	var t = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null",
		"object",
		"array"
	]);
	function n(e) {
		return typeof e == "string" && t.has(e);
	}
	e.isJSONType = n;
	function r() {
		let e = {
			number: {
				type: "number",
				rules: []
			},
			string: {
				type: "string",
				rules: []
			},
			array: {
				type: "array",
				rules: []
			},
			object: {
				type: "object",
				rules: []
			}
		};
		return {
			types: {
				...e,
				integer: !0,
				boolean: !0,
				null: !0
			},
			rules: [
				{ rules: [] },
				e.number,
				e.string,
				e.array,
				e.object
			],
			post: { rules: [] },
			all: {},
			keywords: {}
		};
	}
	e.getRules = r;
})), Aa = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.shouldUseRule = e.shouldUseGroup = e.schemaHasRulesForType = void 0;
	function t({ schema: e, self: t }, r) {
		let i = t.RULES.types[r];
		return i && i !== !0 && n(e, i);
	}
	e.schemaHasRulesForType = t;
	function n(e, t) {
		return t.rules.some((t) => r(e, t));
	}
	e.shouldUseGroup = n;
	function r(e, t) {
		return e[t.keyword] !== void 0 || t.definition.implements?.some((t) => e[t] !== void 0);
	}
	e.shouldUseRule = r;
})), ja = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
	var t = ka(), n = Aa(), r = Da(), i = Y(), a = X(), o;
	(function(e) {
		e[e.Correct = 0] = "Correct", e[e.Wrong = 1] = "Wrong";
	})(o || (e.DataType = o = {}));
	function s(e) {
		let t = c(e.type);
		if (t.includes("null")) {
			if (e.nullable === !1) throw Error("type: null contradicts nullable: false");
		} else {
			if (!t.length && e.nullable !== void 0) throw Error("\"nullable\" cannot be used without \"type\"");
			e.nullable === !0 && t.push("null");
		}
		return t;
	}
	e.getSchemaTypes = s;
	function c(e) {
		let n = Array.isArray(e) ? e : e ? [e] : [];
		if (n.every(t.isJSONType)) return n;
		throw Error("type must be JSONType or JSONType[]: " + n.join(","));
	}
	e.getJSONTypes = c;
	function l(e, t) {
		let { gen: r, data: i, opts: a } = e, s = d(t, a.coerceTypes), c = t.length > 0 && !(s.length === 0 && t.length === 1 && (0, n.schemaHasRulesForType)(e, t[0]));
		if (c) {
			let n = h(t, i, a.strictNumbers, o.Wrong);
			r.if(n, () => {
				s.length ? f(e, t, s) : _(e);
			});
		}
		return c;
	}
	e.coerceAndCheckDataType = l;
	var u = /* @__PURE__ */ new Set([
		"string",
		"number",
		"integer",
		"boolean",
		"null"
	]);
	function d(e, t) {
		return t ? e.filter((e) => u.has(e) || t === "array" && e === "array") : [];
	}
	function f(e, t, n) {
		let { gen: r, data: a, opts: o } = e, s = r.let("dataType", (0, i._)`typeof ${a}`), c = r.let("coerced", (0, i._)`undefined`);
		o.coerceTypes === "array" && r.if((0, i._)`${s} == 'object' && Array.isArray(${a}) && ${a}.length == 1`, () => r.assign(a, (0, i._)`${a}[0]`).assign(s, (0, i._)`typeof ${a}`).if(h(t, a, o.strictNumbers), () => r.assign(c, a))), r.if((0, i._)`${c} !== undefined`);
		for (let e of n) (u.has(e) || e === "array" && o.coerceTypes === "array") && l(e);
		r.else(), _(e), r.endIf(), r.if((0, i._)`${c} !== undefined`, () => {
			r.assign(a, c), p(e, c);
		});
		function l(e) {
			switch (e) {
				case "string":
					r.elseIf((0, i._)`${s} == "number" || ${s} == "boolean"`).assign(c, (0, i._)`"" + ${a}`).elseIf((0, i._)`${a} === null`).assign(c, (0, i._)`""`);
					return;
				case "number":
					r.elseIf((0, i._)`${s} == "boolean" || ${a} === null
              || (${s} == "string" && ${a} && ${a} == +${a})`).assign(c, (0, i._)`+${a}`);
					return;
				case "integer":
					r.elseIf((0, i._)`${s} === "boolean" || ${a} === null
              || (${s} === "string" && ${a} && ${a} == +${a} && !(${a} % 1))`).assign(c, (0, i._)`+${a}`);
					return;
				case "boolean":
					r.elseIf((0, i._)`${a} === "false" || ${a} === 0 || ${a} === null`).assign(c, !1).elseIf((0, i._)`${a} === "true" || ${a} === 1`).assign(c, !0);
					return;
				case "null":
					r.elseIf((0, i._)`${a} === "" || ${a} === 0 || ${a} === false`), r.assign(c, null);
					return;
				case "array": r.elseIf((0, i._)`${s} === "string" || ${s} === "number"
              || ${s} === "boolean" || ${a} === null`).assign(c, (0, i._)`[${a}]`);
			}
		}
	}
	function p({ gen: e, parentData: t, parentDataProperty: n }, r) {
		e.if((0, i._)`${t} !== undefined`, () => e.assign((0, i._)`${t}[${n}]`, r));
	}
	function m(e, t, n, r = o.Correct) {
		let a = r === o.Correct ? i.operators.EQ : i.operators.NEQ, s;
		switch (e) {
			case "null": return (0, i._)`${t} ${a} null`;
			case "array":
				s = (0, i._)`Array.isArray(${t})`;
				break;
			case "object":
				s = (0, i._)`${t} && typeof ${t} == "object" && !Array.isArray(${t})`;
				break;
			case "integer":
				s = c((0, i._)`!(${t} % 1) && !isNaN(${t})`);
				break;
			case "number":
				s = c();
				break;
			default: return (0, i._)`typeof ${t} ${a} ${e}`;
		}
		return r === o.Correct ? s : (0, i.not)(s);
		function c(e = i.nil) {
			return (0, i.and)((0, i._)`typeof ${t} == "number"`, e, n ? (0, i._)`isFinite(${t})` : i.nil);
		}
	}
	e.checkDataType = m;
	function h(e, t, n, r) {
		if (e.length === 1) return m(e[0], t, n, r);
		let o, s = (0, a.toHash)(e);
		if (s.array && s.object) {
			let e = (0, i._)`typeof ${t} != "object"`;
			o = s.null ? e : (0, i._)`!${t} || ${e}`, delete s.null, delete s.array, delete s.object;
		} else o = i.nil;
		s.number && delete s.integer;
		for (let e in s) o = (0, i.and)(o, m(e, t, n, r));
		return o;
	}
	e.checkDataTypes = h;
	var g = {
		message: ({ schema: e }) => `must be ${e}`,
		params: ({ schema: e, schemaValue: t }) => typeof e == "string" ? (0, i._)`{type: ${e}}` : (0, i._)`{type: ${t}}`
	};
	function _(e) {
		let t = v(e);
		(0, r.reportError)(t, g);
	}
	e.reportTypeError = _;
	function v(e) {
		let { gen: t, data: n, schema: r } = e, i = (0, a.schemaRefOrVal)(e, r, "type");
		return {
			gen: t,
			keyword: "type",
			data: n,
			schema: r.type,
			schemaCode: i,
			schemaValue: i,
			parentSchema: r,
			params: {},
			it: e
		};
	}
})), Ma = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.assignDefaults = void 0;
	var t = Y(), n = X();
	function r(e, t) {
		let { properties: n, items: r } = e.schema;
		if (t === "object" && n) for (let t in n) i(e, t, n[t].default);
		else t === "array" && Array.isArray(r) && r.forEach((t, n) => i(e, n, t.default));
	}
	e.assignDefaults = r;
	function i(e, r, i) {
		let { gen: a, compositeRule: o, data: s, opts: c } = e;
		if (i === void 0) return;
		let l = (0, t._)`${s}${(0, t.getProperty)(r)}`;
		if (o) {
			(0, n.checkStrictMode)(e, `default is ignored for: ${l}`);
			return;
		}
		let u = (0, t._)`${l} === undefined`;
		c.useDefaults === "empty" && (u = (0, t._)`${u} || ${l} === null || ${l} === ""`), a.if(u, (0, t._)`${l} = ${(0, t.stringify)(i)}`);
	}
})), Na = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateUnion = e.validateArray = e.usePattern = e.callValidateCode = e.schemaProperties = e.allSchemaProperties = e.noPropertyInData = e.propertyInData = e.isOwnProperty = e.hasPropFunc = e.reportMissingProp = e.checkMissingProp = e.checkReportMissingProp = void 0;
	var t = Y(), n = X(), r = Ea(), i = X();
	function a(e, n) {
		let { gen: r, data: i, it: a } = e;
		r.if(d(r, i, n, a.opts.ownProperties), () => {
			e.setParams({ missingProperty: (0, t._)`${n}` }, !0), e.error();
		});
	}
	e.checkReportMissingProp = a;
	function o({ gen: e, data: n, it: { opts: r } }, i, a) {
		return (0, t.or)(...i.map((i) => (0, t.and)(d(e, n, i, r.ownProperties), (0, t._)`${a} = ${i}`)));
	}
	e.checkMissingProp = o;
	function s(e, t) {
		e.setParams({ missingProperty: t }, !0), e.error();
	}
	e.reportMissingProp = s;
	function c(e) {
		return e.scopeValue("func", {
			ref: Object.prototype.hasOwnProperty,
			code: (0, t._)`Object.prototype.hasOwnProperty`
		});
	}
	e.hasPropFunc = c;
	function l(e, n, r) {
		return (0, t._)`${c(e)}.call(${n}, ${r})`;
	}
	e.isOwnProperty = l;
	function u(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} !== undefined`;
		return i ? (0, t._)`${a} && ${l(e, n, r)}` : a;
	}
	e.propertyInData = u;
	function d(e, n, r, i) {
		let a = (0, t._)`${n}${(0, t.getProperty)(r)} === undefined`;
		return i ? (0, t.or)(a, (0, t.not)(l(e, n, r))) : a;
	}
	e.noPropertyInData = d;
	function f(e) {
		return e ? Object.keys(e).filter((e) => e !== "__proto__") : [];
	}
	e.allSchemaProperties = f;
	function p(e, t) {
		return f(t).filter((r) => !(0, n.alwaysValidSchema)(e, t[r]));
	}
	e.schemaProperties = p;
	function m({ schemaCode: e, data: n, it: { gen: i, topSchemaRef: a, schemaPath: o, errorPath: s }, it: c }, l, u, d) {
		let f = d ? (0, t._)`${e}, ${n}, ${a}${o}` : n, p = [
			[r.default.instancePath, (0, t.strConcat)(r.default.instancePath, s)],
			[r.default.parentData, c.parentData],
			[r.default.parentDataProperty, c.parentDataProperty],
			[r.default.rootData, r.default.rootData]
		];
		c.opts.dynamicRef && p.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
		let m = (0, t._)`${f}, ${i.object(...p)}`;
		return u === t.nil ? (0, t._)`${l}(${m})` : (0, t._)`${l}.call(${u}, ${m})`;
	}
	e.callValidateCode = m;
	var h = (0, t._)`new RegExp`;
	function g({ gen: e, it: { opts: n } }, r) {
		let a = n.unicodeRegExp ? "u" : "", { regExp: o } = n.code, s = o(r, a);
		return e.scopeValue("pattern", {
			key: s.toString(),
			ref: s,
			code: (0, t._)`${o.code === "new RegExp" ? h : (0, i.useFunc)(e, o)}(${r}, ${a})`
		});
	}
	e.usePattern = g;
	function _(e) {
		let { gen: r, data: i, keyword: a, it: o } = e, s = r.name("valid");
		if (o.allErrors) {
			let e = r.let("valid", !0);
			return c(() => r.assign(e, !1)), e;
		}
		return r.var(s, !0), c(() => r.break()), s;
		function c(o) {
			let c = r.const("len", (0, t._)`${i}.length`);
			r.forRange("i", 0, c, (i) => {
				e.subschema({
					keyword: a,
					dataProp: i,
					dataPropType: n.Type.Num
				}, s), r.if((0, t.not)(s), o);
			});
		}
	}
	e.validateArray = _;
	function v(e) {
		let { gen: r, schema: i, keyword: a, it: o } = e;
		/* istanbul ignore if */
		if (!Array.isArray(i)) throw Error("ajv implementation error");
		if (i.some((e) => (0, n.alwaysValidSchema)(o, e)) && !o.opts.unevaluated) return;
		let s = r.let("valid", !1), c = r.name("_valid");
		r.block(() => i.forEach((n, i) => {
			let o = e.subschema({
				keyword: a,
				schemaProp: i,
				compositeRule: !0
			}, c);
			r.assign(s, (0, t._)`${s} || ${c}`), e.mergeValidEvaluated(o, c) || r.if((0, t.not)(s));
		})), e.result(s, () => e.reset(), () => e.error(!0));
	}
	e.validateUnion = v;
})), Pa = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateKeywordUsage = e.validSchemaType = e.funcKeywordCode = e.macroKeywordCode = void 0;
	var t = Y(), n = Ea(), r = Na(), i = Da();
	function a(e, n) {
		let { gen: r, keyword: i, schema: a, parentSchema: o, it: s } = e, c = n.macro.call(s.self, a, o, s), l = u(r, i, c);
		s.opts.validateSchema !== !1 && s.self.validateSchema(c, !0);
		let d = r.name("valid");
		e.subschema({
			schema: c,
			schemaPath: t.nil,
			errSchemaPath: `${s.errSchemaPath}/${i}`,
			topSchemaRef: l,
			compositeRule: !0
		}, d), e.pass(d, () => e.error(!0));
	}
	e.macroKeywordCode = a;
	function o(e, i) {
		let { gen: a, keyword: o, schema: d, parentSchema: f, $data: p, it: m } = e;
		l(m, i);
		let h = u(a, o, !p && i.compile ? i.compile.call(m.self, d, f, m) : i.validate), g = a.let("valid");
		e.block$data(g, _), e.ok(i.valid ?? g);
		function _() {
			if (i.errors === !1) b(), i.modifying && s(e), x(() => e.error());
			else {
				let t = i.async ? v() : y();
				i.modifying && s(e), x(() => c(e, t));
			}
		}
		function v() {
			let e = a.let("ruleErrs", null);
			return a.try(() => b((0, t._)`await `), (n) => a.assign(g, !1).if((0, t._)`${n} instanceof ${m.ValidationError}`, () => a.assign(e, (0, t._)`${n}.errors`), () => a.throw(n))), e;
		}
		function y() {
			let e = (0, t._)`${h}.errors`;
			return a.assign(e, null), b(t.nil), e;
		}
		function b(o = i.async ? (0, t._)`await ` : t.nil) {
			let s = m.opts.passContext ? n.default.this : n.default.self, c = !("compile" in i && !p || i.schema === !1);
			a.assign(g, (0, t._)`${o}${(0, r.callValidateCode)(e, h, s, c)}`, i.modifying);
		}
		function x(e) {
			a.if((0, t.not)(i.valid ?? g), e);
		}
	}
	e.funcKeywordCode = o;
	function s(e) {
		let { gen: n, data: r, it: i } = e;
		n.if(i.parentData, () => n.assign(r, (0, t._)`${i.parentData}[${i.parentDataProperty}]`));
	}
	function c(e, r) {
		let { gen: a } = e;
		a.if((0, t._)`Array.isArray(${r})`, () => {
			a.assign(n.default.vErrors, (0, t._)`${n.default.vErrors} === null ? ${r} : ${n.default.vErrors}.concat(${r})`).assign(n.default.errors, (0, t._)`${n.default.vErrors}.length`), (0, i.extendErrors)(e);
		}, () => e.error());
	}
	function l({ schemaEnv: e }, t) {
		if (t.async && !e.$async) throw Error("async keyword in sync schema");
	}
	function u(e, n, r) {
		if (r === void 0) throw Error(`keyword "${n}" failed to compile`);
		return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : {
			ref: r,
			code: (0, t.stringify)(r)
		});
	}
	function d(e, t, n = !1) {
		return !t.length || t.some((t) => t === "array" ? Array.isArray(e) : t === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == t || n && e === void 0);
	}
	e.validSchemaType = d;
	function f({ schema: e, opts: t, self: n, errSchemaPath: r }, i, a) {
		/* istanbul ignore if */
		if (Array.isArray(i.keyword) ? !i.keyword.includes(a) : i.keyword !== a) throw Error("ajv implementation error");
		let o = i.dependencies;
		if (o?.some((t) => !Object.prototype.hasOwnProperty.call(e, t))) throw Error(`parent schema must have dependencies of ${a}: ${o.join(",")}`);
		if (i.validateSchema && !i.validateSchema(e[a])) {
			let e = `keyword "${a}" value is invalid at path "${r}": ` + n.errorsText(i.validateSchema.errors);
			if (t.validateSchema === "log") n.logger.error(e);
			else throw Error(e);
		}
	}
	e.validateKeywordUsage = f;
})), Fa = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.extendSubschemaMode = e.extendSubschemaData = e.getSubschema = void 0;
	var t = Y(), n = X();
	function r(e, { keyword: r, schemaProp: i, schema: a, schemaPath: o, errSchemaPath: s, topSchemaRef: c }) {
		if (r !== void 0 && a !== void 0) throw Error("both \"keyword\" and \"schema\" passed, only one allowed");
		if (r !== void 0) {
			let a = e.schema[r];
			return i === void 0 ? {
				schema: a,
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}`
			} : {
				schema: a[i],
				schemaPath: (0, t._)`${e.schemaPath}${(0, t.getProperty)(r)}${(0, t.getProperty)(i)}`,
				errSchemaPath: `${e.errSchemaPath}/${r}/${(0, n.escapeFragment)(i)}`
			};
		}
		if (a !== void 0) {
			if (o === void 0 || s === void 0 || c === void 0) throw Error("\"schemaPath\", \"errSchemaPath\" and \"topSchemaRef\" are required with \"schema\"");
			return {
				schema: a,
				schemaPath: o,
				topSchemaRef: c,
				errSchemaPath: s
			};
		}
		throw Error("either \"keyword\" or \"schema\" must be passed");
	}
	e.getSubschema = r;
	function i(e, r, { dataProp: i, dataPropType: a, data: o, dataTypes: s, propertyName: c }) {
		if (o !== void 0 && i !== void 0) throw Error("both \"data\" and \"dataProp\" passed, only one allowed");
		let { gen: l } = r;
		if (i !== void 0) {
			let { errorPath: o, dataPathArr: s, opts: c } = r;
			u(l.let("data", (0, t._)`${r.data}${(0, t.getProperty)(i)}`, !0)), e.errorPath = (0, t.str)`${o}${(0, n.getErrorPath)(i, a, c.jsPropertySyntax)}`, e.parentDataProperty = (0, t._)`${i}`, e.dataPathArr = [...s, e.parentDataProperty];
		}
		o !== void 0 && (u(o instanceof t.Name ? o : l.let("data", o, !0)), c !== void 0 && (e.propertyName = c)), s && (e.dataTypes = s);
		function u(t) {
			e.data = t, e.dataLevel = r.dataLevel + 1, e.dataTypes = [], r.definedProperties = /* @__PURE__ */ new Set(), e.parentData = r.data, e.dataNames = [...r.dataNames, t];
		}
	}
	e.extendSubschemaData = i;
	function a(e, { jtdDiscriminator: t, jtdMetadata: n, compositeRule: r, createErrors: i, allErrors: a }) {
		r !== void 0 && (e.compositeRule = r), i !== void 0 && (e.createErrors = i), a !== void 0 && (e.allErrors = a), e.jtdDiscriminator = t, e.jtdMetadata = n;
	}
	e.extendSubschemaMode = a;
})), Ia = /* @__PURE__ */ i(((e, t) => {
	t.exports = function e(t, n) {
		if (t === n) return !0;
		if (t && n && typeof t == "object" && typeof n == "object") {
			if (t.constructor !== n.constructor) return !1;
			var r, i, a;
			if (Array.isArray(t)) {
				if (r = t.length, r != n.length) return !1;
				for (i = r; i-- !== 0;) if (!e(t[i], n[i])) return !1;
				return !0;
			}
			if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
			if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
			if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
			if (a = Object.keys(t), r = a.length, r !== Object.keys(n).length) return !1;
			for (i = r; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
			for (i = r; i-- !== 0;) {
				var o = a[i];
				if (!e(t[o], n[o])) return !1;
			}
			return !0;
		}
		return t !== t && n !== n;
	};
})), La = /* @__PURE__ */ i(((e, t) => {
	var n = t.exports = function(e, t, n) {
		typeof t == "function" && (n = t, t = {}), n = t.cb || n;
		var i = typeof n == "function" ? n : n.pre || function() {}, a = n.post || function() {};
		r(t, i, a, e, "", e);
	};
	n.keywords = {
		additionalItems: !0,
		items: !0,
		contains: !0,
		additionalProperties: !0,
		propertyNames: !0,
		not: !0,
		if: !0,
		then: !0,
		else: !0
	}, n.arrayKeywords = {
		items: !0,
		allOf: !0,
		anyOf: !0,
		oneOf: !0
	}, n.propsKeywords = {
		$defs: !0,
		definitions: !0,
		properties: !0,
		patternProperties: !0,
		dependencies: !0
	}, n.skipKeywords = {
		default: !0,
		enum: !0,
		const: !0,
		required: !0,
		maximum: !0,
		minimum: !0,
		exclusiveMaximum: !0,
		exclusiveMinimum: !0,
		multipleOf: !0,
		maxLength: !0,
		minLength: !0,
		pattern: !0,
		format: !0,
		maxItems: !0,
		minItems: !0,
		uniqueItems: !0,
		maxProperties: !0,
		minProperties: !0
	};
	function r(e, t, a, o, s, c, l, u, d, f) {
		if (o && typeof o == "object" && !Array.isArray(o)) {
			for (var p in t(o, s, c, l, u, d, f), o) {
				var m = o[p];
				if (Array.isArray(m)) {
					if (p in n.arrayKeywords) for (var h = 0; h < m.length; h++) r(e, t, a, m[h], s + "/" + p + "/" + h, c, s, p, o, h);
				} else if (p in n.propsKeywords) {
					if (m && typeof m == "object") for (var g in m) r(e, t, a, m[g], s + "/" + p + "/" + i(g), c, s, p, o, g);
				} else (p in n.keywords || e.allKeys && !(p in n.skipKeywords)) && r(e, t, a, m, s + "/" + p, c, s, p, o);
			}
			a(o, s, c, l, u, d, f);
		}
	}
	function i(e) {
		return e.replace(/~/g, "~0").replace(/\//g, "~1");
	}
})), Ra = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getSchemaRefs = e.resolveUrl = e.normalizeId = e._getFullPath = e.getFullPath = e.inlineRef = void 0;
	var t = X(), n = Ia(), r = La(), i = /* @__PURE__ */ new Set([
		"type",
		"format",
		"pattern",
		"maxLength",
		"minLength",
		"maxProperties",
		"minProperties",
		"maxItems",
		"minItems",
		"maximum",
		"minimum",
		"uniqueItems",
		"multipleOf",
		"required",
		"enum",
		"const"
	]);
	function a(e, t = !0) {
		return typeof e == "boolean" ? !0 : t === !0 ? !s(e) : t ? c(e) <= t : !1;
	}
	e.inlineRef = a;
	var o = /* @__PURE__ */ new Set([
		"$ref",
		"$recursiveRef",
		"$recursiveAnchor",
		"$dynamicRef",
		"$dynamicAnchor"
	]);
	function s(e) {
		for (let t in e) {
			if (o.has(t)) return !0;
			let n = e[t];
			if (Array.isArray(n) && n.some(s) || typeof n == "object" && s(n)) return !0;
		}
		return !1;
	}
	function c(e) {
		let n = 0;
		for (let r in e) if (r === "$ref" || (n++, !i.has(r) && (typeof e[r] == "object" && (0, t.eachItem)(e[r], (e) => n += c(e)), n === Infinity))) return Infinity;
		return n;
	}
	function l(e, t = "", n) {
		return n !== !1 && (t = f(t)), u(e, e.parse(t));
	}
	e.getFullPath = l;
	function u(e, t) {
		return e.serialize(t).split("#")[0] + "#";
	}
	e._getFullPath = u;
	var d = /#\/?$/;
	function f(e) {
		return e ? e.replace(d, "") : "";
	}
	e.normalizeId = f;
	function p(e, t, n) {
		return n = f(n), e.resolve(t, n);
	}
	e.resolveUrl = p;
	var m = /^[a-z_][-a-z0-9._]*$/i;
	function h(e, t) {
		if (typeof e == "boolean") return {};
		let { schemaId: i, uriResolver: a } = this.opts, o = f(e[i] || t), s = { "": o }, c = l(a, o, !1), u = {}, d = /* @__PURE__ */ new Set();
		return r(e, { allKeys: !0 }, (e, t, n, r) => {
			if (r === void 0) return;
			let a = c + t, o = s[r];
			typeof e[i] == "string" && (o = l.call(this, e[i])), g.call(this, e.$anchor), g.call(this, e.$dynamicAnchor), s[t] = o;
			function l(t) {
				let n = this.opts.uriResolver.resolve;
				if (t = f(o ? n(o, t) : t), d.has(t)) throw h(t);
				d.add(t);
				let r = this.refs[t];
				return typeof r == "string" && (r = this.refs[r]), typeof r == "object" ? p(e, r.schema, t) : t !== f(a) && (t[0] === "#" ? (p(e, u[t], t), u[t] = e) : this.refs[t] = a), t;
			}
			function g(e) {
				if (typeof e == "string") {
					if (!m.test(e)) throw Error(`invalid anchor "${e}"`);
					l.call(this, `#${e}`);
				}
			}
		}), u;
		function p(e, t, r) {
			if (t !== void 0 && !n(e, t)) throw h(r);
		}
		function h(e) {
			return /* @__PURE__ */ Error(`reference "${e}" resolves to more than one schema`);
		}
	}
	e.getSchemaRefs = h;
})), za = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getData = e.KeywordCxt = e.validateFunctionCode = void 0;
	var t = Oa(), n = ja(), r = Aa(), i = ja(), a = Ma(), o = Pa(), s = Fa(), c = Y(), l = Ea(), u = Ra(), d = X(), f = Da();
	function p(e) {
		if (S(e) && (w(e), x(e))) {
			_(e);
			return;
		}
		m(e, () => (0, t.topBoolOrEmptySchema)(e));
	}
	e.validateFunctionCode = p;
	function m({ gen: e, validateName: t, schema: n, schemaEnv: r, opts: i }, a) {
		i.code.es5 ? e.func(t, (0, c._)`${l.default.data}, ${l.default.valCxt}`, r.$async, () => {
			e.code((0, c._)`"use strict"; ${y(n, i)}`), g(e, i), e.code(a);
		}) : e.func(t, (0, c._)`${l.default.data}, ${h(i)}`, r.$async, () => e.code(y(n, i)).code(a));
	}
	function h(e) {
		return (0, c._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${e.dynamicRef ? (0, c._)`, ${l.default.dynamicAnchors}={}` : c.nil}}={}`;
	}
	function g(e, t) {
		e.if(l.default.valCxt, () => {
			e.var(l.default.instancePath, (0, c._)`${l.default.valCxt}.${l.default.instancePath}`), e.var(l.default.parentData, (0, c._)`${l.default.valCxt}.${l.default.parentData}`), e.var(l.default.parentDataProperty, (0, c._)`${l.default.valCxt}.${l.default.parentDataProperty}`), e.var(l.default.rootData, (0, c._)`${l.default.valCxt}.${l.default.rootData}`), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
		}, () => {
			e.var(l.default.instancePath, (0, c._)`""`), e.var(l.default.parentData, (0, c._)`undefined`), e.var(l.default.parentDataProperty, (0, c._)`undefined`), e.var(l.default.rootData, l.default.data), t.dynamicRef && e.var(l.default.dynamicAnchors, (0, c._)`{}`);
		});
	}
	function _(e) {
		let { schema: t, opts: n, gen: r } = e;
		m(e, () => {
			n.$comment && t.$comment && A(e), D(e), r.let(l.default.vErrors, null), r.let(l.default.errors, 0), n.unevaluated && v(e), T(e), j(e);
		});
	}
	function v(e) {
		let { gen: t, validateName: n } = e;
		e.evaluated = t.const("evaluated", (0, c._)`${n}.evaluated`), t.if((0, c._)`${e.evaluated}.dynamicProps`, () => t.assign((0, c._)`${e.evaluated}.props`, (0, c._)`undefined`)), t.if((0, c._)`${e.evaluated}.dynamicItems`, () => t.assign((0, c._)`${e.evaluated}.items`, (0, c._)`undefined`));
	}
	function y(e, t) {
		let n = typeof e == "object" && e[t.schemaId];
		return n && (t.code.source || t.code.process) ? (0, c._)`/*# sourceURL=${n} */` : c.nil;
	}
	function b(e, n) {
		if (S(e) && (w(e), x(e))) {
			C(e, n);
			return;
		}
		(0, t.boolOrEmptySchema)(e, n);
	}
	function x({ schema: e, self: t }) {
		if (typeof e == "boolean") return !e;
		for (let n in e) if (t.RULES.all[n]) return !0;
		return !1;
	}
	function S(e) {
		return typeof e.schema != "boolean";
	}
	function C(e, t) {
		let { schema: n, gen: r, opts: i } = e;
		i.$comment && n.$comment && A(e), O(e), k(e);
		let a = r.const("_errs", l.default.errors);
		T(e, a), r.var(t, (0, c._)`${a} === ${l.default.errors}`);
	}
	function w(e) {
		(0, d.checkUnknownRules)(e), E(e);
	}
	function T(e, t) {
		if (e.opts.jtd) return N(e, [], !1, t);
		let r = (0, n.getSchemaTypes)(e.schema);
		N(e, r, !(0, n.coerceAndCheckDataType)(e, r), t);
	}
	function E(e) {
		let { schema: t, errSchemaPath: n, opts: r, self: i } = e;
		t.$ref && r.ignoreKeywordsWithRef && (0, d.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn(`$ref: keywords ignored in schema at path "${n}"`);
	}
	function D(e) {
		let { schema: t, opts: n } = e;
		t.default !== void 0 && n.useDefaults && n.strictSchema && (0, d.checkStrictMode)(e, "default is ignored in the schema root");
	}
	function O(e) {
		let t = e.schema[e.opts.schemaId];
		t && (e.baseId = (0, u.resolveUrl)(e.opts.uriResolver, e.baseId, t));
	}
	function k(e) {
		if (e.schema.$async && !e.schemaEnv.$async) throw Error("async schema in sync schema");
	}
	function A({ gen: e, schemaEnv: t, schema: n, errSchemaPath: r, opts: i }) {
		let a = n.$comment;
		if (i.$comment === !0) e.code((0, c._)`${l.default.self}.logger.log(${a})`);
		else if (typeof i.$comment == "function") {
			let n = (0, c.str)`${r}/$comment`, i = e.scopeValue("root", { ref: t.root });
			e.code((0, c._)`${l.default.self}.opts.$comment(${a}, ${n}, ${i}.schema)`);
		}
	}
	function j(e) {
		let { gen: t, schemaEnv: n, validateName: r, ValidationError: i, opts: a } = e;
		n.$async ? t.if((0, c._)`${l.default.errors} === 0`, () => t.return(l.default.data), () => t.throw((0, c._)`new ${i}(${l.default.vErrors})`)) : (t.assign((0, c._)`${r}.errors`, l.default.vErrors), a.unevaluated && M(e), t.return((0, c._)`${l.default.errors} === 0`));
	}
	function M({ gen: e, evaluated: t, props: n, items: r }) {
		n instanceof c.Name && e.assign((0, c._)`${t}.props`, n), r instanceof c.Name && e.assign((0, c._)`${t}.items`, r);
	}
	function N(e, t, n, a) {
		let { gen: o, schema: s, data: u, allErrors: f, opts: p, self: m } = e, { RULES: h } = m;
		if (s.$ref && (p.ignoreKeywordsWithRef || !(0, d.schemaHasRulesButRef)(s, h))) {
			o.block(() => le(e, "$ref", h.all.$ref.definition));
			return;
		}
		p.jtd || te(e, t), o.block(() => {
			for (let e of h.rules) g(e);
			g(h.post);
		});
		function g(d) {
			(0, r.shouldUseGroup)(s, d) && (d.type ? (o.if((0, i.checkDataType)(d.type, u, p.strictNumbers)), ee(e, d), t.length === 1 && t[0] === d.type && n && (o.else(), (0, i.reportTypeError)(e)), o.endIf()) : ee(e, d), f || o.if((0, c._)`${l.default.errors} === ${a || 0}`));
		}
	}
	function ee(e, t) {
		let { gen: n, schema: i, opts: { useDefaults: o } } = e;
		o && (0, a.assignDefaults)(e, t.type), n.block(() => {
			for (let n of t.rules) (0, r.shouldUseRule)(i, n) && le(e, n.keyword, n.definition, t.type);
		});
	}
	function te(e, t) {
		!e.schemaEnv.meta && e.opts.strictTypes && (ne(e, t), e.opts.allowUnionTypes || re(e, t), ie(e, e.dataTypes));
	}
	function ne(e, t) {
		if (t.length) {
			if (!e.dataTypes.length) {
				e.dataTypes = t;
				return;
			}
			t.forEach((t) => {
				oe(e.dataTypes, t) || ce(e, `type "${t}" not allowed by context "${e.dataTypes.join(",")}"`);
			}), se(e, t);
		}
	}
	function re(e, t) {
		t.length > 1 && !(t.length === 2 && t.includes("null")) && ce(e, "use allowUnionTypes to allow union type keyword");
	}
	function ie(e, t) {
		let n = e.self.RULES.all;
		for (let i in n) {
			let a = n[i];
			if (typeof a == "object" && (0, r.shouldUseRule)(e.schema, a)) {
				let { type: n } = a.definition;
				n.length && !n.some((e) => ae(t, e)) && ce(e, `missing type "${n.join(",")}" for keyword "${i}"`);
			}
		}
	}
	function ae(e, t) {
		return e.includes(t) || t === "number" && e.includes("integer");
	}
	function oe(e, t) {
		return e.includes(t) || t === "integer" && e.includes("number");
	}
	function se(e, t) {
		let n = [];
		for (let r of e.dataTypes) oe(t, r) ? n.push(r) : t.includes("integer") && r === "number" && n.push("integer");
		e.dataTypes = n;
	}
	function ce(e, t) {
		let n = e.schemaEnv.baseId + e.errSchemaPath;
		t += ` at "${n}" (strictTypes)`, (0, d.checkStrictMode)(e, t, e.opts.strictTypes);
	}
	var P = class {
		constructor(e, t, n) {
			if ((0, o.validateKeywordUsage)(e, t, n), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = n, this.data = e.data, this.schema = e.schema[n], this.$data = t.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, d.schemaRefOrVal)(e, this.schema, n, this.$data), this.schemaType = t.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = t, this.$data) this.schemaCode = e.gen.const("vSchema", fe(this.$data, e));
			else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, t.schemaType, t.allowUndefined)) throw Error(`${n} value must be ${JSON.stringify(t.schemaType)}`);
			("code" in t ? t.trackErrors : t.errors !== !1) && (this.errsCount = e.gen.const("_errs", l.default.errors));
		}
		result(e, t, n) {
			this.failResult((0, c.not)(e), t, n);
		}
		failResult(e, t, n) {
			this.gen.if(e), n ? n() : this.error(), t ? (this.gen.else(), t(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
		}
		pass(e, t) {
			this.failResult((0, c.not)(e), void 0, t);
		}
		fail(e) {
			if (e === void 0) {
				this.error(), this.allErrors || this.gen.if(!1);
				return;
			}
			this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
		}
		fail$data(e) {
			if (!this.$data) return this.fail(e);
			let { schemaCode: t } = this;
			this.fail((0, c._)`${t} !== undefined && (${(0, c.or)(this.invalid$data(), e)})`);
		}
		error(e, t, n) {
			if (t) {
				this.setParams(t), this._error(e, n), this.setParams({});
				return;
			}
			this._error(e, n);
		}
		_error(e, t) {
			(e ? f.reportExtraError : f.reportError)(this, this.def.error, t);
		}
		$dataError() {
			(0, f.reportError)(this, this.def.$dataError || f.keyword$DataError);
		}
		reset() {
			if (this.errsCount === void 0) throw Error("add \"trackErrors\" to keyword definition");
			(0, f.resetErrorsCount)(this.gen, this.errsCount);
		}
		ok(e) {
			this.allErrors || this.gen.if(e);
		}
		setParams(e, t) {
			t ? Object.assign(this.params, e) : this.params = e;
		}
		block$data(e, t, n = c.nil) {
			this.gen.block(() => {
				this.check$data(e, n), t();
			});
		}
		check$data(e = c.nil, t = c.nil) {
			if (!this.$data) return;
			let { gen: n, schemaCode: r, schemaType: i, def: a } = this;
			n.if((0, c.or)((0, c._)`${r} === undefined`, t)), e !== c.nil && n.assign(e, !0), (i.length || a.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), e !== c.nil && n.assign(e, !1)), n.else();
		}
		invalid$data() {
			let { gen: e, schemaCode: t, schemaType: n, def: r, it: a } = this;
			return (0, c.or)(o(), s());
			function o() {
				if (n.length) {
					/* istanbul ignore if */
					if (!(t instanceof c.Name)) throw Error("ajv implementation error");
					let e = Array.isArray(n) ? n : [n];
					return (0, c._)`${(0, i.checkDataTypes)(e, t, a.opts.strictNumbers, i.DataType.Wrong)}`;
				}
				return c.nil;
			}
			function s() {
				if (r.validateSchema) {
					let n = e.scopeValue("validate$data", { ref: r.validateSchema });
					return (0, c._)`!${n}(${t})`;
				}
				return c.nil;
			}
		}
		subschema(e, t) {
			let n = (0, s.getSubschema)(this.it, e);
			(0, s.extendSubschemaData)(n, this.it, e), (0, s.extendSubschemaMode)(n, e);
			let r = {
				...this.it,
				...n,
				items: void 0,
				props: void 0
			};
			return b(r, t), r;
		}
		mergeEvaluated(e, t) {
			let { it: n, gen: r } = this;
			n.opts.unevaluated && (n.props !== !0 && e.props !== void 0 && (n.props = d.mergeEvaluated.props(r, e.props, n.props, t)), n.items !== !0 && e.items !== void 0 && (n.items = d.mergeEvaluated.items(r, e.items, n.items, t)));
		}
		mergeValidEvaluated(e, t) {
			let { it: n, gen: r } = this;
			if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0)) return r.if(t, () => this.mergeEvaluated(e, c.Name)), !0;
		}
	};
	e.KeywordCxt = P;
	function le(e, t, n, r) {
		let i = new P(e, n, t);
		"code" in n ? n.code(i, r) : i.$data && n.validate ? (0, o.funcKeywordCode)(i, n) : "macro" in n ? (0, o.macroKeywordCode)(i, n) : (n.compile || n.validate) && (0, o.funcKeywordCode)(i, n);
	}
	var ue = /^\/(?:[^~]|~0|~1)*$/, de = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
	function fe(e, { dataLevel: t, dataNames: n, dataPathArr: r }) {
		let i, a;
		if (e === "") return l.default.rootData;
		if (e[0] === "/") {
			if (!ue.test(e)) throw Error(`Invalid JSON-pointer: ${e}`);
			i = e, a = l.default.rootData;
		} else {
			let o = de.exec(e);
			if (!o) throw Error(`Invalid JSON-pointer: ${e}`);
			let s = +o[1];
			if (i = o[2], i === "#") {
				if (s >= t) throw Error(u("property/index", s));
				return r[t - s];
			}
			if (s > t) throw Error(u("data", s));
			if (a = n[t - s], !i) return a;
		}
		let o = a, s = i.split("/");
		for (let e of s) e && (a = (0, c._)`${a}${(0, c.getProperty)((0, d.unescapeJsonPointer)(e))}`, o = (0, c._)`${o} && ${a}`);
		return o;
		function u(e, n) {
			return `Cannot access ${e} ${n} levels up, current level is ${t}`;
		}
	}
	e.getData = fe;
})), Ba = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = class extends Error {
		constructor(e) {
			super("validation failed"), this.errors = e, this.ajv = this.validation = !0;
		}
	};
})), Va = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ra();
	e.default = class extends Error {
		constructor(e, n, r, i) {
			super(i || `can't resolve reference ${r} from id ${n}`), this.missingRef = (0, t.resolveUrl)(e, n, r), this.missingSchema = (0, t.normalizeId)((0, t.getFullPath)(e, this.missingRef));
		}
	};
})), Ha = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.resolveSchema = e.getCompilingSchema = e.resolveRef = e.compileSchema = e.SchemaEnv = void 0;
	var t = Y(), n = Ba(), r = Ea(), i = Ra(), a = X(), o = za(), s = class {
		constructor(e) {
			this.refs = {}, this.dynamicAnchors = {};
			let t;
			typeof e.schema == "object" && (t = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = e.baseId ?? (0, i.normalizeId)(t?.[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = t?.$async, this.refs = {};
		}
	};
	e.SchemaEnv = s;
	function c(e) {
		let a = d.call(this, e);
		if (a) return a;
		let s = (0, i.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: c, lines: l } = this.opts.code, { ownProperties: u } = this.opts, f = new t.CodeGen(this.scope, {
			es5: c,
			lines: l,
			ownProperties: u
		}), p;
		e.$async && (p = f.scopeValue("Error", {
			ref: n.default,
			code: (0, t._)`require("ajv/dist/runtime/validation_error").default`
		}));
		let m = f.scopeName("validate");
		e.validateName = m;
		let h = {
			gen: f,
			allErrors: this.opts.allErrors,
			data: r.default.data,
			parentData: r.default.parentData,
			parentDataProperty: r.default.parentDataProperty,
			dataNames: [r.default.data],
			dataPathArr: [t.nil],
			dataLevel: 0,
			dataTypes: [],
			definedProperties: /* @__PURE__ */ new Set(),
			topSchemaRef: f.scopeValue("schema", this.opts.code.source === !0 ? {
				ref: e.schema,
				code: (0, t.stringify)(e.schema)
			} : { ref: e.schema }),
			validateName: m,
			ValidationError: p,
			schema: e.schema,
			schemaEnv: e,
			rootId: s,
			baseId: e.baseId || s,
			schemaPath: t.nil,
			errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
			errorPath: (0, t._)`""`,
			opts: this.opts,
			self: this
		}, g;
		try {
			this._compilations.add(e), (0, o.validateFunctionCode)(h), f.optimize(this.opts.code.optimize);
			let n = f.toString();
			g = `${f.scopeRefs(r.default.scope)}return ${n}`, this.opts.code.process && (g = this.opts.code.process(g, e));
			let i = Function(`${r.default.self}`, `${r.default.scope}`, g)(this, this.scope.get());
			if (this.scope.value(m, { ref: i }), i.errors = null, i.schema = e.schema, i.schemaEnv = e, e.$async && (i.$async = !0), this.opts.code.source === !0 && (i.source = {
				validateName: m,
				validateCode: n,
				scopeValues: f._values
			}), this.opts.unevaluated) {
				let { props: e, items: n } = h;
				i.evaluated = {
					props: e instanceof t.Name ? void 0 : e,
					items: n instanceof t.Name ? void 0 : n,
					dynamicProps: e instanceof t.Name,
					dynamicItems: n instanceof t.Name
				}, i.source && (i.source.evaluated = (0, t.stringify)(i.evaluated));
			}
			return e.validate = i, e;
		} catch (t) {
			throw delete e.validate, delete e.validateName, g && this.logger.error("Error compiling schema, function code:", g), t;
		} finally {
			this._compilations.delete(e);
		}
	}
	e.compileSchema = c;
	function l(e, t, n) {
		n = (0, i.resolveUrl)(this.opts.uriResolver, t, n);
		let r = e.refs[n];
		if (r) return r;
		let a = p.call(this, e, n);
		if (a === void 0) {
			let r = e.localRefs?.[n], { schemaId: i } = this.opts;
			r && (a = new s({
				schema: r,
				schemaId: i,
				root: e,
				baseId: t
			}));
		}
		if (a !== void 0) return e.refs[n] = u.call(this, a);
	}
	e.resolveRef = l;
	function u(e) {
		return (0, i.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : c.call(this, e);
	}
	function d(e) {
		for (let t of this._compilations) if (f(t, e)) return t;
	}
	e.getCompilingSchema = d;
	function f(e, t) {
		return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
	}
	function p(e, t) {
		let n;
		for (; typeof (n = this.refs[t]) == "string";) t = n;
		return n || this.schemas[t] || m.call(this, e, t);
	}
	function m(e, t) {
		let n = this.opts.uriResolver.parse(t), r = (0, i._getFullPath)(this.opts.uriResolver, n), a = (0, i.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
		if (Object.keys(e.schema).length > 0 && r === a) return g.call(this, n, e);
		let o = (0, i.normalizeId)(r), l = this.refs[o] || this.schemas[o];
		if (typeof l == "string") {
			let t = m.call(this, e, l);
			return typeof t?.schema == "object" ? g.call(this, n, t) : void 0;
		}
		if (typeof l?.schema == "object") {
			if (l.validate || c.call(this, l), o === (0, i.normalizeId)(t)) {
				let { schema: t } = l, { schemaId: n } = this.opts, r = t[n];
				return r && (a = (0, i.resolveUrl)(this.opts.uriResolver, a, r)), new s({
					schema: t,
					schemaId: n,
					root: e,
					baseId: a
				});
			}
			return g.call(this, n, l);
		}
	}
	e.resolveSchema = m;
	var h = /* @__PURE__ */ new Set([
		"properties",
		"patternProperties",
		"enum",
		"dependencies",
		"definitions"
	]);
	function g(e, { baseId: t, schema: n, root: r }) {
		if (e.fragment?.[0] !== "/") return;
		for (let r of e.fragment.slice(1).split("/")) {
			if (typeof n == "boolean") return;
			let e = n[(0, a.unescapeFragment)(r)];
			if (e === void 0) return;
			n = e;
			let o = typeof n == "object" && n[this.opts.schemaId];
			!h.has(r) && o && (t = (0, i.resolveUrl)(this.opts.uriResolver, t, o));
		}
		let o;
		if (typeof n != "boolean" && n.$ref && !(0, a.schemaHasRulesButRef)(n, this.RULES)) {
			let e = (0, i.resolveUrl)(this.opts.uriResolver, t, n.$ref);
			o = m.call(this, r, e);
		}
		let { schemaId: c } = this.opts;
		if (o ||= new s({
			schema: n,
			schemaId: c,
			root: r,
			baseId: t
		}), o.schema !== o.root.schema) return o;
	}
})), Ua = /* @__PURE__ */ r({
	$id: () => Wa,
	additionalProperties: () => !1,
	default: () => Ya,
	description: () => Ga,
	properties: () => Ja,
	required: () => qa,
	type: () => Ka
}), Wa, Ga, Ka, qa, Ja, Ya, Xa = t((() => {
	Wa = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Ga = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Ka = "object", qa = ["$data"], Ja = { $data: {
		type: "string",
		anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }]
	} }, Ya = {
		$id: Wa,
		description: Ga,
		type: Ka,
		required: qa,
		properties: Ja,
		additionalProperties: !1
	};
})), Za = /* @__PURE__ */ i(((e, t) => {
	var n = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), i = RegExp.prototype.test.bind(/^\d*$/u), a = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), s = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), c = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), l = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), u = Array(256);
	{
		let e = "0123456789ABCDEF";
		for (let t = 0; t < 256; t++) u[t] = "%" + e[t >> 4] + e[t & 15];
	}
	function d(e) {
		return e < 2048 ? u[192 | e >> 6] + u[128 | e & 63] : e < 65536 ? u[224 | e >> 12] + u[128 | e >> 6 & 63] + u[128 | e & 63] : u[240 | e >> 18] + u[128 | e >> 12 & 63] + u[128 | e >> 6 & 63] + u[128 | e & 63];
	}
	function f(e) {
		let t = "", n = 0, r = 0;
		for (r = 0; r < e.length; r++) if (n = e[r].charCodeAt(0), n !== 48) {
			if (!(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
			break;
		}
		for (r += 1; r < e.length; r++) {
			if (n = e[r].charCodeAt(0), !(n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102)) return "";
			t += e[r];
		}
		return t;
	}
	var p = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), m = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), h = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), g = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
	function _(e) {
		if (e.length === 0) return !1;
		for (let t = 0; t < e.length; t++) if (!h(e[t])) {
			if (e[t] === "%" && t + 2 < e.length && a(e.slice(t + 1, t + 3))) {
				t += 2;
				continue;
			}
			return !1;
		}
		return !0;
	}
	function v(e) {
		let t = -1, n = 0, r = -1, i = 0;
		for (let a = 0; a < e.length; a++) e[a] === "0" ? (r === -1 && (r = a), i++, i > n && (n = i, t = r)) : (r = -1, i = 0);
		if (n < 2) return e.join(":");
		let a = e.slice(0, t).join(":"), o = e.slice(t + n).join(":");
		return a + "::" + o;
	}
	function y(e) {
		let t = e.indexOf("::");
		if (t !== -1 && e.indexOf("::", t + 1) !== -1) return;
		let n = t === -1 ? e.split(":") : e.slice(0, t).split(":"), i = t === -1 ? [] : e.slice(t + 2).split(":");
		t !== -1 && (n.length === 1 && n[0] === "" && (n.length = 0), i.length === 1 && i[0] === "" && (i.length = 0));
		let a = n.concat(i), o = 0;
		for (let e = 0; e < a.length; e++) {
			let n = a[e];
			if (n === "") return;
			if (n.indexOf(".") !== -1) {
				if (e !== a.length - 1 || t !== -1 && i.length === 0 || !r(n)) return;
				o += 2;
				continue;
			}
			if (!p(n)) return;
			a[e] = parseInt(n, 16).toString(16), o++;
		}
		if (t === -1) return o === 8 ? v(a) : void 0;
		if (o >= 8) return;
		let s = a.slice(0, n.length);
		for (let e = o; e < 8; e++) s.push("0");
		for (let e = n.length; e < a.length; e++) s.push(a[e]);
		return v(s);
	}
	function b(e) {
		let t = e[0] === "[" && e[e.length - 1] === "]";
		if ((e[0] === "[" || e[e.length - 1] === "]") && !t) return {
			host: e,
			isIPV6: !1,
			error: !0
		};
		let n = t ? e.slice(1, -1) : e;
		if (t && m(n)) return n = n.toLowerCase(), {
			host: `[${n}]`,
			escapedHost: n,
			isIPV6: !1,
			isIPVFuture: !0
		};
		if (x(n, ":") < 2) return {
			host: e,
			isIPV6: !1,
			error: t
		};
		let r = "", i = n.indexOf("%");
		if (i !== -1) {
			let t = n.slice(i, i + 3).toLowerCase() === "%25" ? 3 : 1;
			if (r = n.slice(i + t), !_(r)) return {
				host: e,
				isIPV6: !1,
				error: !0
			};
			n = n.slice(0, i);
		}
		let a = y(n);
		return a === void 0 ? {
			host: e,
			isIPV6: !1,
			error: !0
		} : {
			host: a + (r ? "%" + r : ""),
			escapedHost: a + (r ? "%25" + r : ""),
			isIPV6: !0
		};
	}
	function x(e, t) {
		let n = 0;
		for (let r = 0; r < e.length; r++) e[r] === t && n++;
		return n;
	}
	function S(e) {
		let t = e, n = [], r = -1, i = 0;
		for (; i = t.length;) {
			if (i === 1) {
				if (t === ".") break;
				if (t === "/") {
					n.push("/");
					break;
				}
				n.push(t);
				break;
			}
			if (i === 2) {
				if (t[0] === ".") {
					if (t[1] === ".") break;
					if (t[1] === "/") {
						t = t.slice(2);
						continue;
					}
				} else if (t[0] === "/" && (t[1] === "." || t[1] === "/")) {
					n.push("/");
					break;
				}
			} else if (i === 3 && t === "/..") {
				n.length !== 0 && n.pop(), n.push("/");
				break;
			}
			if (t[0] === ".") {
				if (t[1] === ".") {
					if (t[2] === "/") {
						t = t.slice(3);
						continue;
					}
				} else if (t[1] === "/") {
					t = t.slice(2);
					continue;
				}
			} else if (t[0] === "/" && t[1] === ".") {
				if (t[2] === "/") {
					t = t.slice(2);
					continue;
				}
				if (t[2] === "." && t[3] === "/") {
					t = t.slice(3), n.length !== 0 && n.pop();
					continue;
				}
			}
			if ((r = t.indexOf("/", 1)) === -1) {
				n.push(t);
				break;
			}
			n.push(t.slice(0, r)), t = t.slice(r);
		}
		return n.join("");
	}
	var C = {
		"@": "%40",
		"/": "%2F",
		"?": "%3F",
		"#": "%23",
		":": "%3A"
	}, w = /[@/?#:]/g, T = /[@/?#]/g;
	function E(e, t) {
		let n = t ? T : w;
		return n.lastIndex = 0, e.replace(n, (e) => C[e]);
	}
	function D(e, t = !1) {
		if (e.indexOf("%") === -1) return e;
		let n = "";
		for (let r = 0; r < e.length; r++) {
			if (e[r] === "%" && r + 2 < e.length) {
				let i = e.slice(r + 1, r + 3);
				if (a(i)) {
					let e = i.toUpperCase(), a = String.fromCharCode(parseInt(e, 16));
					t && o(a) ? n += a : n += "%" + e, r += 2;
					continue;
				}
			}
			n += e[r];
		}
		return n;
	}
	function O(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					let e = r.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					i !== "." && o(i) ? t += i : t += "%" + e, n += 2;
					continue;
				}
			}
			if (s(r)) t += r;
			else {
				let i = e.charCodeAt(n);
				if (i < 128) t += ee(i) ? r : u[i];
				else if (i < 55296 || i > 57343) t += d(i);
				else if (i <= 56319 && n + 1 < e.length) {
					let r = e.charCodeAt(n + 1);
					r >= 56320 && r <= 57343 ? (t += d(65536 + (i - 55296 << 10) + (r - 56320)), n++) : t += d(65533);
				} else t += d(65533);
			}
		}
		return t;
	}
	function k(e, t = !1) {
		let n = "", r = t && e[0] !== "/";
		for (let t = 0; t < e.length; t++) {
			let i = e[t];
			if (i === "%" && t + 2 < e.length) {
				let r = e.slice(t + 1, t + 3);
				if (a(r)) {
					n += "%" + r.toUpperCase(), t += 2;
					continue;
				}
			}
			if (i === "/" && (r = !1), s(i) && (i !== ":" || !r)) n += i;
			else {
				let r = e.charCodeAt(t);
				if (r < 128) n += u[r];
				else if (r < 55296 || r > 57343) n += d(r);
				else if (r <= 56319 && t + 1 < e.length) {
					let i = e.charCodeAt(t + 1);
					i >= 56320 && i <= 57343 ? (n += d(65536 + (r - 55296 << 10) + (i - 56320)), t++) : n += d(65533);
				} else n += d(65533);
			}
		}
		return n;
	}
	function A(e, t) {
		let n = "";
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			if (i === "%" && r + 2 < e.length) {
				let t = e.slice(r + 1, r + 3);
				if (a(t)) {
					n += "%" + t.toUpperCase(), r += 2;
					continue;
				}
			}
			if (t(i)) n += i;
			else {
				let t = e.charCodeAt(r);
				if (t < 128) n += u[t];
				else if (t < 55296 || t > 57343) n += d(t);
				else if (t <= 56319 && r + 1 < e.length) {
					let i = e.charCodeAt(r + 1);
					i >= 56320 && i <= 57343 ? (n += d(65536 + (t - 55296 << 10) + (i - 56320)), r++) : n += d(65533);
				} else n += d(65533);
			}
		}
		return n;
	}
	function j(e) {
		return A(e, l);
	}
	function M(e) {
		return A(e, c);
	}
	function N(e) {
		return A(e, c);
	}
	function ee(e) {
		return e >= 48 && e <= 57 || e >= 65 && e <= 90 || e >= 97 && e <= 122 || e === 42 || e === 43 || e === 45 || e === 46 || e === 47 || e === 64 || e === 95;
	}
	function te(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (r === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					let e = r.toUpperCase(), i = String.fromCharCode(parseInt(e, 16));
					o(i) ? t += i : t += "%" + e, n += 2;
					continue;
				}
			}
			if (c(r)) t += r;
			else {
				let i = e.charCodeAt(n);
				if (i < 128) t += ee(i) ? r : u[i];
				else if (i < 55296 || i > 57343) t += d(i);
				else if (i <= 56319 && n + 1 < e.length) {
					let r = e.charCodeAt(n + 1);
					r >= 56320 && r <= 57343 ? (t += d(65536 + (i - 55296 << 10) + (r - 56320)), n++) : t += d(65533);
				} else t += d(65533);
			}
		}
		return t;
	}
	function ne(e) {
		let t = "";
		for (let n = 0; n < e.length; n++) {
			if (e[n] === "%" && n + 2 < e.length) {
				let r = e.slice(n + 1, n + 3);
				if (a(r)) {
					t += "%" + r.toUpperCase(), n += 2;
					continue;
				}
			}
			t += escape(e[n]);
		}
		return t;
	}
	function re(e) {
		let t = [];
		if (e.userinfo !== void 0 && (t.push(j(e.userinfo)), t.push("@")), e.host !== void 0) {
			let n = e.host;
			if (!r(n)) {
				let e = b(n);
				e.isIPV6 !== !0 && e.isIPVFuture !== !0 && (n = D(n, !0), e = b(n)), n = e.isIPV6 === !0 || e.isIPVFuture === !0 ? `[${e.escapedHost}]` : E(n, !1);
			}
			t.push(n);
		}
		if (typeof e.port == "number" || typeof e.port == "string") {
			let n = String(e.port);
			if (!i(n)) throw TypeError("URI port is malformed.");
			t.push(":"), t.push(n);
		}
		return t.length ? t.join("") : void 0;
	}
	t.exports = {
		nonSimpleDomain: g,
		recomposeAuthority: re,
		reescapeHostDelimiters: E,
		normalizePercentEncoding: D,
		normalizePathEncoding: O,
		serializePathEncoding: k,
		normalizeQueryFragmentEncoding: te,
		encodeUserinfo: j,
		encodeQuery: M,
		encodeFragment: N,
		escapePreservingEscapes: ne,
		removeDotSegments: S,
		isIPv4: r,
		isUUID: n,
		normalizeIPv6: b,
		stringArrayToHexStripped: f
	};
})), Qa = /* @__PURE__ */ i(((e, t) => {
	var { isUUID: n } = Za(), r = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, i = [
		"http",
		"https",
		"ws",
		"wss",
		"urn",
		"urn:uuid"
	];
	function a(e) {
		return i.indexOf(e) !== -1;
	}
	function o(e) {
		return e.secure === !0 ? !0 : e.secure === !1 ? !1 : e.scheme ? e.scheme.length === 3 && (e.scheme[0] === "w" || e.scheme[0] === "W") && (e.scheme[1] === "s" || e.scheme[1] === "S") && (e.scheme[2] === "s" || e.scheme[2] === "S") : !1;
	}
	function s(e) {
		return e.host || (e.error = e.error || "HTTP URIs must have a host."), e;
	}
	function c(e) {
		let t = String(e.scheme).toLowerCase() === "https";
		return (e.port === (t ? 443 : 80) || e.port === "") && (e.port = void 0), e.path ||= "/", e;
	}
	function l(e) {
		return e.secure = o(e), e.resourceName = (e.path || "/") + (e.query ? "?" + e.query : ""), e.path = void 0, e.query = void 0, e;
	}
	function u(e) {
		if ((e.port === (o(e) ? 443 : 80) || e.port === "") && (e.port = void 0), typeof e.secure == "boolean" && (e.scheme = e.secure ? "wss" : "ws", e.secure = void 0), e.resourceName) {
			let t = e.resourceName.indexOf("?"), n = t === -1 ? e.resourceName : e.resourceName.slice(0, t);
			e.path = n && n !== "/" ? n : void 0, e.query = t === -1 ? void 0 : e.resourceName.slice(t + 1), e.resourceName = void 0;
		}
		return e.fragment = void 0, e;
	}
	function d(e, t) {
		if (!e.path) return e.error = "URN can not be parsed", e;
		let n = e.path.match(r);
		if (n && n[0] === e.path) {
			let r = t.scheme || e.scheme || "urn";
			e.nid = n[1].toLowerCase(), e.nss = n[2];
			let i = y(`${r}:${t.nid || e.nid}`);
			e.path = void 0, i && (e = i.parse(e, t));
		} else e.error = e.error || "URN can not be parsed.";
		return e;
	}
	function f(e, t) {
		if (e.nid === void 0) throw Error("URN without nid cannot be serialized");
		let n = t.scheme || e.scheme || "urn", r = e.nid.toLowerCase(), i = y(`${n}:${t.nid || r}`);
		i && (e = i.serialize(e, t));
		let a = e, o = e.nss;
		return a.path = `${r || t.nid}:${o}`, t.skipEscape = !0, a;
	}
	function p(e, t) {
		let r = e;
		return r.uuid = r.nss, r.nss = void 0, !t.tolerant && (!r.uuid || !n(r.uuid)) && (r.error = r.error || "UUID is not valid."), r;
	}
	function m(e) {
		let t = e;
		return t.nss = (e.uuid || "").toLowerCase(), t;
	}
	var h = {
		scheme: "http",
		domainHost: !0,
		parse: s,
		serialize: c
	}, g = {
		scheme: "https",
		domainHost: h.domainHost,
		parse: s,
		serialize: c
	}, _ = {
		scheme: "ws",
		domainHost: !0,
		parse: l,
		serialize: u
	}, v = {
		http: h,
		https: g,
		ws: _,
		wss: {
			scheme: "wss",
			domainHost: _.domainHost,
			parse: _.parse,
			serialize: _.serialize
		},
		urn: {
			scheme: "urn",
			parse: d,
			serialize: f,
			skipNormalize: !0
		},
		"urn:uuid": {
			scheme: "urn:uuid",
			parse: p,
			serialize: m,
			skipNormalize: !0
		}
	};
	Object.setPrototypeOf(v, null);
	function y(e) {
		return e && (v[e] || v[e.toLowerCase()]) || void 0;
	}
	t.exports = {
		wsIsSecure: o,
		SCHEMES: v,
		isValidSchemeName: a,
		getSchemeHandler: y
	};
})), $a = /* @__PURE__ */ i(((e, t) => {
	var { normalizeIPv6: n, removeDotSegments: r, recomposeAuthority: i, normalizePercentEncoding: a, normalizePathEncoding: o, serializePathEncoding: s, normalizeQueryFragmentEncoding: c, encodeQuery: l, encodeFragment: u, reescapeHostDelimiters: d, isIPv4: f, nonSimpleDomain: p } = Za(), { SCHEMES: m, getSchemeHandler: h } = Qa(), g = /^[A-Za-z][A-Za-z0-9+.-]*$/u, _ = "URI scheme is malformed.";
	function v(e) {
		let t = unescape(String(e));
		if (!g.test(t)) throw TypeError(_);
		return t;
	}
	function y(e, t) {
		return typeof e == "string" ? e = ee(e, t) : typeof e == "object" && (e = N(C(e, t), t)), e;
	}
	function b(e, t, r) {
		let i = r ? Object.assign({ scheme: "null" }, r) : { scheme: "null" }, { parsed: a, malformedAuthorityOrPort: o, malformedPercentEncoding: s, malformedSchemeSpecific: c, malformedHost: l, malformedScheme: u } = M(e, i), { parsed: d, malformedAuthorityOrPort: p, malformedPercentEncoding: m, malformedSchemeSpecific: g, malformedHost: _, malformedScheme: v } = M(t, i);
		if (o || p || s || m || c || g || l || _ || u || v) throw Error(a.error || d.error || "URI is malformed.");
		let y = x(a, d, i, !0), b = h(r && r.scheme || y.scheme), S = y.host, w = S !== void 0 && S !== "" && (f(S) || n(S).isIPV6);
		j(y, r || {}, b, w);
		let T = S && S.indexOf("%") !== -1 && !/\P{ASCII}/u.test(S);
		if (y.error && !T) throw Error(y.error);
		return i.skipEscape = !0, C(y, i);
	}
	function x(e, t, n, i) {
		let a = {};
		return i || (e = N(C(e, n), n), t = N(C(t, n), n)), n ||= {}, !n.tolerant && t.scheme ? (a.scheme = t.scheme, a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = r(t.path || ""), a.query = t.query) : (t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0 ? (a.userinfo = t.userinfo, a.host = t.host, a.port = t.port, a.path = r(t.path || ""), a.query = t.query) : (t.path ? (t.path[0] === "/" ? a.path = r(t.path) : (a.path = (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0) && !e.path ? "/" + t.path : e.path ? e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : t.path, a.path = r(a.path)), a.query = t.query) : (a.path = e.path, a.query = t.query === void 0 ? e.query : t.query), a.userinfo = e.userinfo, a.host = e.host, a.port = e.port), a.scheme = e.scheme), a.fragment = t.fragment, a;
	}
	function S(e, t, n) {
		let r = ne(e, n), i = ne(t, n);
		return r !== void 0 && i !== void 0 && r === i;
	}
	function C(e, t) {
		let n = {
			host: e.host,
			scheme: e.scheme,
			userinfo: e.userinfo,
			port: e.port,
			path: e.path,
			query: e.query,
			nid: e.nid,
			nss: e.nss,
			uuid: e.uuid,
			fragment: e.fragment,
			reference: e.reference,
			resourceName: e.resourceName,
			secure: e.secure,
			error: ""
		}, o = Object.assign({}, t), c = [];
		n.scheme &&= v(n.scheme);
		let d = h(o.scheme || n.scheme);
		d && d.serialize && d.serialize(n, o);
		let f = n.userinfo !== void 0 || n.host !== void 0 || n.port !== void 0, p = !o.skipEscape && n.scheme === void 0 && !f;
		n.path !== void 0 && (n.path = o.skipEscape ? a(n.path) : s(n.path, p)), o.reference !== "suffix" && n.scheme && (n.scheme = v(n.scheme), c.push(n.scheme, ":"));
		let m = i(n);
		if (m !== void 0 && (o.reference !== "suffix" && c.push("//"), c.push(m), n.path && n.path[0] !== "/" && c.push("/")), n.path !== void 0) {
			let e = n.path;
			!o.absolutePath && (!d || !d.absolutePath) && (e = r(e)), p && (e = s(e, !0)), m === void 0 && e[0] === "/" && e[1] === "/" && (e = "/%2F" + e.slice(2)), c.push(e);
		}
		return n.query !== void 0 && c.push("?", l(n.query)), n.fragment !== void 0 && c.push("#", u(n.fragment)), c.join("");
	}
	var w = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, T = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, E = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
	function D(e, t) {
		if (t[2] !== void 0 && e.path && e.path[0] !== "/") return "URI path must start with \"/\" when authority is present.";
		if (typeof e.port == "number" && (e.port < 0 || e.port > 65535)) return "URI port is malformed.";
	}
	function O(e) {
		if (e === void 0) return !1;
		let t = e.indexOf("%");
		for (; t !== -1;) {
			if (t + 2 >= e.length || !/^[\da-f]{2}$/iu.test(e.slice(t + 1, t + 3))) return !0;
			t = e.indexOf("%", t + 3);
		}
		return !1;
	}
	function k(e) {
		return e[0] === "[" && e[e.length - 1] === "]";
	}
	function A(e) {
		let t = e[4];
		return O(e[3]) || t !== void 0 && !k(t) && O(t) || O(e[6]) || O(e[7]) || O(e[8]);
	}
	function j(e, t, n, r) {
		if (!t.unicodeSupport && (!n || !n.unicodeSupport) && e.host && !k(e.host) && (t.domainHost || n && n.domainHost) && r === !1 && p(e.host)) try {
			e.host = new URL("http://" + e.host).hostname;
		} catch (t) {
			return e.error = e.error || "Host's domain name can not be converted to ASCII: " + t, !0;
		}
		return !1;
	}
	function M(e, t) {
		let r = Object.assign({}, t), i = {
			scheme: void 0,
			userinfo: void 0,
			host: "",
			port: void 0,
			path: "",
			query: void 0,
			fragment: void 0
		}, s = !1, l = !1, u = !1, p = !1, v = !1, y = !1, b = !1;
		r.reference === "suffix" && (e = r.scheme ? r.scheme + ":" + e : "//" + e);
		let x = e.match(T);
		x !== null && x[1].indexOf("\\") !== -1 && (i.error = "URI authority must not contain a literal backslash.", s = !0);
		let S = e.match(E);
		if (S !== null) {
			let e = S[1], t = e.replace(/[\t\n\r]/g, "");
			t.length >= 2 && (t.slice(0, 2) === "//" ? e.length !== t.length && (i.error = i.error || "URI authority introducer must not contain whitespace.", s = !0) : (i.error = i.error || "URI authority must not contain a literal backslash.", s = !0));
		}
		let C = e.match(w);
		if (C) {
			if (i.scheme = C[1], i.userinfo = C[3], i.host = C[4], i.port = parseInt(C[5], 10), i.path = C[6] || "", i.query = C[7], i.fragment = C[8], i.scheme !== void 0) {
				let e = unescape(i.scheme);
				g.test(e) ? i.scheme = e.toLowerCase() : (i.error = i.error || _, y = !0);
			}
			l = A(C), l && (i.error = i.error || "URI contains malformed percent-encoding."), isNaN(i.port) && (i.port = C[5]);
			let t = D(i, C);
			if (t !== void 0 && (i.error = i.error || t, s = !0), i.host) {
				if (f(i.host) === !1) {
					let e = k(i.host), t = i.host.indexOf("[") !== -1 || i.host.indexOf("]") !== -1, r = n(i.host);
					b = r.isIPV6 || r.isIPVFuture === !0, v = t && (!e || r.error === !0), i.host = b ? r.host : r.host.toLowerCase(), v && (i.error = i.error || "URI host is malformed.", s = !0);
				} else b = !0;
			}
			i.reference = i.scheme === void 0 && i.userinfo === void 0 && i.host === void 0 && i.port === void 0 && i.query === void 0 && !i.path ? "same-document" : i.scheme === void 0 ? "relative" : i.fragment === void 0 ? "absolute" : "uri", r.reference && r.reference !== "suffix" && r.reference !== i.reference && (i.error = i.error || "URI is not a " + r.reference + " reference.");
			let x = h(r.scheme || i.scheme);
			v || (p = j(i, r, x, b)), (!x || x && !x.skipNormalize) && (e.indexOf("%") !== -1 && i.host !== void 0 && !v && (i.host = d(b ? i.host : a(i.host, !0), b)), i.path &&= o(i.path), i.query &&= c(i.query), i.fragment &&= c(i.fragment)), x && x.parse && (x.parse(i, r), x === m.urn && i.nid === void 0 && (u = !0));
		} else i.error = i.error || "URI can not be parsed.";
		return {
			parsed: i,
			malformedAuthorityOrPort: s,
			malformedPercentEncoding: l,
			malformedSchemeSpecific: u,
			malformedHost: p,
			malformedScheme: y
		};
	}
	function N(e, t) {
		return M(e, t).parsed;
	}
	function ee(e, t) {
		return te(e, t).normalized;
	}
	function te(e, t) {
		let { parsed: n, malformedAuthorityOrPort: r, malformedPercentEncoding: i, malformedSchemeSpecific: a, malformedHost: o, malformedScheme: s } = M(e, t);
		return {
			normalized: r || i || a || o || s ? e : C(n, t),
			malformedAuthorityOrPort: r,
			malformedPercentEncoding: i,
			malformedSchemeSpecific: a,
			malformedHost: o,
			malformedScheme: s
		};
	}
	function ne(e, t) {
		if (typeof e != "string" && typeof e != "object") return;
		let n;
		try {
			n = typeof e == "string" ? e : C(e, t);
		} catch {
			return;
		}
		let { normalized: r, malformedAuthorityOrPort: i, malformedPercentEncoding: a, malformedSchemeSpecific: o, malformedHost: s, malformedScheme: c } = te(n, t);
		return i || a || o || s || c ? void 0 : r;
	}
	var re = {
		SCHEMES: m,
		normalize: y,
		resolve: b,
		resolveComponent: x,
		equal: S,
		serialize: C,
		parse: N
	};
	t.exports = re, t.exports.default = re, t.exports.fastUri = re;
})), eo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = $a();
	t.code = "require(\"ajv/dist/runtime/uri\").default", e.default = t;
})), to = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
	var n = za();
	Object.defineProperty(t, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return n.KeywordCxt;
		}
	});
	var r = Y();
	Object.defineProperty(t, "_", {
		enumerable: !0,
		get: function() {
			return r._;
		}
	}), Object.defineProperty(t, "str", {
		enumerable: !0,
		get: function() {
			return r.str;
		}
	}), Object.defineProperty(t, "stringify", {
		enumerable: !0,
		get: function() {
			return r.stringify;
		}
	}), Object.defineProperty(t, "nil", {
		enumerable: !0,
		get: function() {
			return r.nil;
		}
	}), Object.defineProperty(t, "Name", {
		enumerable: !0,
		get: function() {
			return r.Name;
		}
	}), Object.defineProperty(t, "CodeGen", {
		enumerable: !0,
		get: function() {
			return r.CodeGen;
		}
	});
	var i = Ba(), a = Va(), o = ka(), s = Ha(), c = Y(), l = Ra(), u = ja(), d = X(), f = (Xa(), e(Ua).default), p = eo(), m = (e, t) => new RegExp(e, t);
	m.code = "new RegExp";
	var h = [
		"removeAdditional",
		"useDefaults",
		"coerceTypes"
	], g = /* @__PURE__ */ new Set([
		"validate",
		"serialize",
		"parse",
		"wrapper",
		"root",
		"schema",
		"keyword",
		"pattern",
		"formats",
		"validate$data",
		"func",
		"obj",
		"Error"
	]), _ = {
		errorDataPath: "",
		format: "`validateFormats: false` can be used instead.",
		nullable: "\"nullable\" keyword is supported by default.",
		jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
		extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
		missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
		processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
		sourceCode: "Use option `code: {source: true}`",
		strictDefaults: "It is default now, see option `strict`.",
		strictKeywords: "It is default now, see option `strict`.",
		uniqueItems: "\"uniqueItems\" keyword is always validated.",
		unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
		cache: "Map is used as cache, schema object as key.",
		serialize: "Map is used as cache, schema object as key.",
		ajvErrors: "It is default now."
	}, v = {
		ignoreKeywordsWithRef: "",
		jsPropertySyntax: "",
		unicode: "\"minLength\"/\"maxLength\" account for unicode characters by default."
	}, y = 200;
	function b(e) {
		let t = e.strict, n = e.code?.optimize, r = n === !0 || n === void 0 ? 1 : n || 0, i = e.code?.regExp ?? m, a = e.uriResolver ?? p.default;
		return {
			strictSchema: e.strictSchema ?? t ?? !0,
			strictNumbers: e.strictNumbers ?? t ?? !0,
			strictTypes: e.strictTypes ?? t ?? "log",
			strictTuples: e.strictTuples ?? t ?? "log",
			strictRequired: e.strictRequired ?? t ?? !1,
			code: e.code ? {
				...e.code,
				optimize: r,
				regExp: i
			} : {
				optimize: r,
				regExp: i
			},
			loopRequired: e.loopRequired ?? y,
			loopEnum: e.loopEnum ?? y,
			meta: e.meta ?? !0,
			messages: e.messages ?? !0,
			inlineRefs: e.inlineRefs ?? !0,
			schemaId: e.schemaId ?? "$id",
			addUsedSchema: e.addUsedSchema ?? !0,
			validateSchema: e.validateSchema ?? !0,
			validateFormats: e.validateFormats ?? !0,
			unicodeRegExp: e.unicodeRegExp ?? !0,
			int32range: e.int32range ?? !0,
			uriResolver: a
		};
	}
	var x = class {
		constructor(e = {}) {
			this.schemas = {}, this.refs = {}, this.formats = Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), e = this.opts = {
				...e,
				...b(e)
			};
			let { es5: t, lines: n } = this.opts.code;
			this.scope = new c.ValueScope({
				scope: {},
				prefixes: g,
				es5: t,
				lines: n
			}), this.logger = k(e.logger);
			let r = e.validateFormats;
			e.validateFormats = !1, this.RULES = (0, o.getRules)(), S.call(this, _, e, "NOT SUPPORTED"), S.call(this, v, e, "DEPRECATED", "warn"), this._metaOpts = D.call(this), e.formats && T.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && E.call(this, e.keywords), typeof e.meta == "object" && this.addMetaSchema(e.meta), w.call(this), e.validateFormats = r;
		}
		_addVocabularies() {
			this.addKeyword("$async");
		}
		_addDefaultMetaSchema() {
			let { $data: e, meta: t, schemaId: n } = this.opts, r = f;
			n === "id" && (r = { ...f }, r.id = r.$id, delete r.$id), t && e && this.addMetaSchema(r, r[n], !1);
		}
		defaultMeta() {
			let { meta: e, schemaId: t } = this.opts;
			return this.opts.defaultMeta = typeof e == "object" ? e[t] || e : void 0;
		}
		validate(e, t) {
			let n;
			if (typeof e == "string") {
				if (n = this.getSchema(e), !n) throw Error(`no schema with key or ref "${e}"`);
			} else n = this.compile(e);
			let r = n(t);
			return "$async" in n || (this.errors = n.errors), r;
		}
		compile(e, t) {
			let n = this._addSchema(e, t);
			return n.validate || this._compileSchemaEnv(n);
		}
		compileAsync(e, t) {
			if (typeof this.opts.loadSchema != "function") throw Error("options.loadSchema should be a function");
			let { loadSchema: n } = this.opts;
			return r.call(this, e, t);
			async function r(e, t) {
				await i.call(this, e.$schema);
				let n = this._addSchema(e, t);
				return n.validate || o.call(this, n);
			}
			async function i(e) {
				e && !this.getSchema(e) && await r.call(this, { $ref: e }, !0);
			}
			async function o(e) {
				try {
					return this._compileSchemaEnv(e);
				} catch (t) {
					if (!(t instanceof a.default)) throw t;
					return s.call(this, t), await c.call(this, t.missingSchema), o.call(this, e);
				}
			}
			function s({ missingSchema: e, missingRef: t }) {
				if (this.refs[e]) throw Error(`AnySchema ${e} is loaded but ${t} cannot be resolved`);
			}
			async function c(e) {
				let n = await l.call(this, e);
				this.refs[e] || await i.call(this, n.$schema), this.refs[e] || this.addSchema(n, e, t);
			}
			async function l(e) {
				let t = this._loading[e];
				if (t) return t;
				try {
					return await (this._loading[e] = n(e));
				} finally {
					delete this._loading[e];
				}
			}
		}
		addSchema(e, t, n, r = this.opts.validateSchema) {
			if (Array.isArray(e)) {
				for (let t of e) this.addSchema(t, void 0, n, r);
				return this;
			}
			let i;
			if (typeof e == "object") {
				let { schemaId: t } = this.opts;
				if (i = e[t], i !== void 0 && typeof i != "string") throw Error(`schema ${t} must be string`);
			}
			return t = (0, l.normalizeId)(t || i), this._checkUnique(t), this.schemas[t] = this._addSchema(e, n, t, r, !0), this;
		}
		addMetaSchema(e, t, n = this.opts.validateSchema) {
			return this.addSchema(e, t, !0, n), this;
		}
		validateSchema(e, t) {
			if (typeof e == "boolean") return !0;
			let n;
			if (n = e.$schema, n !== void 0 && typeof n != "string") throw Error("$schema must be a string");
			if (n = n || this.opts.defaultMeta || this.defaultMeta(), !n) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
			let r = this.validate(n, e);
			if (!r && t) {
				let e = "schema is invalid: " + this.errorsText();
				if (this.opts.validateSchema === "log") this.logger.error(e);
				else throw Error(e);
			}
			return r;
		}
		getSchema(e) {
			let t;
			for (; typeof (t = C.call(this, e)) == "string";) e = t;
			if (t === void 0) {
				let { schemaId: n } = this.opts, r = new s.SchemaEnv({
					schema: {},
					schemaId: n
				});
				if (t = s.resolveSchema.call(this, r, e), !t) return;
				this.refs[e] = t;
			}
			return t.validate || this._compileSchemaEnv(t);
		}
		removeSchema(e) {
			if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
			switch (typeof e) {
				case "undefined": return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
				case "string": {
					let t = C.call(this, e);
					return typeof t == "object" && this._cache.delete(t.schema), delete this.schemas[e], delete this.refs[e], this;
				}
				case "object": {
					let t = e;
					this._cache.delete(t);
					let n = e[this.opts.schemaId];
					return n && (n = (0, l.normalizeId)(n), delete this.schemas[n], delete this.refs[n]), this;
				}
				default: throw Error("ajv.removeSchema: invalid parameter");
			}
		}
		addVocabulary(e) {
			for (let t of e) this.addKeyword(t);
			return this;
		}
		addKeyword(e, t) {
			let n;
			if (typeof e == "string") n = e, typeof t == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), t.keyword = n);
			else if (typeof e == "object" && t === void 0) {
				if (t = e, n = t.keyword, Array.isArray(n) && !n.length) throw Error("addKeywords: keyword must be string or non-empty array");
			} else throw Error("invalid addKeywords parameters");
			if (j.call(this, n, t), !t) return (0, d.eachItem)(n, (e) => M.call(this, e)), this;
			ee.call(this, t);
			let r = {
				...t,
				type: (0, u.getJSONTypes)(t.type),
				schemaType: (0, u.getJSONTypes)(t.schemaType)
			};
			return (0, d.eachItem)(n, r.type.length === 0 ? (e) => M.call(this, e, r) : (e) => r.type.forEach((t) => M.call(this, e, r, t))), this;
		}
		getKeyword(e) {
			let t = this.RULES.all[e];
			return typeof t == "object" ? t.definition : !!t;
		}
		removeKeyword(e) {
			let { RULES: t } = this;
			delete t.keywords[e], delete t.all[e];
			for (let n of t.rules) {
				let t = n.rules.findIndex((t) => t.keyword === e);
				t >= 0 && n.rules.splice(t, 1);
			}
			return this;
		}
		addFormat(e, t) {
			return typeof t == "string" && (t = new RegExp(t)), this.formats[e] = t, this;
		}
		errorsText(e = this.errors, { separator: t = ", ", dataVar: n = "data" } = {}) {
			return !e || e.length === 0 ? "No errors" : e.map((e) => `${n}${e.instancePath} ${e.message}`).reduce((e, n) => e + t + n);
		}
		$dataMetaSchema(e, t) {
			let n = this.RULES.all;
			e = JSON.parse(JSON.stringify(e));
			for (let r of t) {
				let t = r.split("/").slice(1), i = e;
				for (let e of t) i = i[e];
				for (let e in n) {
					let t = n[e];
					if (typeof t != "object") continue;
					let { $data: r } = t.definition, a = i[e];
					r && a && (i[e] = ne(a));
				}
			}
			return e;
		}
		_removeAllSchemas(e, t) {
			for (let n in e) {
				let r = e[n];
				(!t || t.test(n)) && (typeof r == "string" ? delete e[n] : r && !r.meta && (this._cache.delete(r.schema), delete e[n]));
			}
		}
		_addSchema(e, t, n, r = this.opts.validateSchema, i = this.opts.addUsedSchema) {
			let a, { schemaId: o } = this.opts;
			if (typeof e == "object") a = e[o];
			else if (this.opts.jtd) throw Error("schema must be object");
			else if (typeof e != "boolean") throw Error("schema must be object or boolean");
			let c = this._cache.get(e);
			if (c !== void 0) return c;
			n = (0, l.normalizeId)(a || n);
			let u = l.getSchemaRefs.call(this, e, n);
			return c = new s.SchemaEnv({
				schema: e,
				schemaId: o,
				meta: t,
				baseId: n,
				localRefs: u
			}), this._cache.set(c.schema, c), i && !n.startsWith("#") && (n && this._checkUnique(n), this.refs[n] = c), r && this.validateSchema(e, !0), c;
		}
		_checkUnique(e) {
			if (this.schemas[e] || this.refs[e]) throw Error(`schema with key or id "${e}" already exists`);
		}
		_compileSchemaEnv(e) {
			/* istanbul ignore if */
			if (e.meta ? this._compileMetaSchema(e) : s.compileSchema.call(this, e), !e.validate) throw Error("ajv implementation error");
			return e.validate;
		}
		_compileMetaSchema(e) {
			let t = this.opts;
			this.opts = this._metaOpts;
			try {
				s.compileSchema.call(this, e);
			} finally {
				this.opts = t;
			}
		}
	};
	x.ValidationError = i.default, x.MissingRefError = a.default, t.default = x;
	function S(e, t, n, r = "error") {
		for (let i in e) {
			let a = i;
			a in t && this.logger[r](`${n}: option ${i}. ${e[a]}`);
		}
	}
	function C(e) {
		return e = (0, l.normalizeId)(e), this.schemas[e] || this.refs[e];
	}
	function w() {
		let e = this.opts.schemas;
		if (e) {
			if (Array.isArray(e)) this.addSchema(e);
			else for (let t in e) this.addSchema(e[t], t);
		}
	}
	function T() {
		for (let e in this.opts.formats) {
			let t = this.opts.formats[e];
			t && this.addFormat(e, t);
		}
	}
	function E(e) {
		if (Array.isArray(e)) {
			this.addVocabulary(e);
			return;
		}
		this.logger.warn("keywords option as map is deprecated, pass array");
		for (let t in e) {
			let n = e[t];
			n.keyword ||= t, this.addKeyword(n);
		}
	}
	function D() {
		let e = { ...this.opts };
		for (let t of h) delete e[t];
		return e;
	}
	var O = {
		log() {},
		warn() {},
		error() {}
	};
	function k(e) {
		if (e === !1) return O;
		if (e === void 0) return console;
		if (e.log && e.warn && e.error) return e;
		throw Error("logger must implement log, warn and error methods");
	}
	var A = /^[a-z_$][a-z0-9_$:-]*$/i;
	function j(e, t) {
		let { RULES: n } = this;
		if ((0, d.eachItem)(e, (e) => {
			if (n.keywords[e]) throw Error(`Keyword ${e} is already defined`);
			if (!A.test(e)) throw Error(`Keyword ${e} has invalid name`);
		}), t && t.$data && !("code" in t || "validate" in t)) throw Error("$data keyword must have \"code\" or \"validate\" function");
	}
	function M(e, t, n) {
		var r;
		let i = t?.post;
		if (n && i) throw Error("keyword with \"post\" flag cannot have \"type\"");
		let { RULES: a } = this, o = i ? a.post : a.rules.find(({ type: e }) => e === n);
		if (o || (o = {
			type: n,
			rules: []
		}, a.rules.push(o)), a.keywords[e] = !0, !t) return;
		let s = {
			keyword: e,
			definition: {
				...t,
				type: (0, u.getJSONTypes)(t.type),
				schemaType: (0, u.getJSONTypes)(t.schemaType)
			}
		};
		t.before ? N.call(this, o, s, t.before) : o.rules.push(s), a.all[e] = s, (r = t.implements) == null || r.forEach((e) => this.addKeyword(e));
	}
	function N(e, t, n) {
		let r = e.rules.findIndex((e) => e.keyword === n);
		r >= 0 ? e.rules.splice(r, 0, t) : (e.rules.push(t), this.logger.warn(`rule ${n} is not defined`));
	}
	function ee(e) {
		let { metaSchema: t } = e;
		t !== void 0 && (e.$data && this.opts.$data && (t = ne(t)), e.validateSchema = this.compile(t, !0));
	}
	var te = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
	function ne(e) {
		return { anyOf: [e, te] };
	}
})), no = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "id",
		code() {
			throw Error("NOT SUPPORTED: keyword \"id\", use \"$id\" for schema ID");
		}
	};
})), ro = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.callRef = e.getValidate = void 0;
	var t = Va(), n = Na(), r = Y(), i = Ea(), a = Ha(), o = X(), s = {
		keyword: "$ref",
		schemaType: "string",
		code(e) {
			let { gen: n, schema: i, it: o } = e, { baseId: s, schemaEnv: u, validateName: d, opts: f, self: p } = o, { root: m } = u;
			if ((i === "#" || i === "#/") && s === m.baseId) return g();
			let h = a.resolveRef.call(p, m, s, i);
			if (h === void 0) throw new t.default(o.opts.uriResolver, s, i);
			return h instanceof a.SchemaEnv ? _(h) : v(h);
			function g() {
				if (u === m) return l(e, d, u, u.$async);
				let t = n.scopeValue("root", { ref: m });
				return l(e, (0, r._)`${t}.validate`, m, m.$async);
			}
			function _(t) {
				l(e, c(e, t), t, t.$async);
			}
			function v(t) {
				let a = n.scopeValue("schema", f.code.source === !0 ? {
					ref: t,
					code: (0, r.stringify)(t)
				} : { ref: t }), o = n.name("valid"), s = e.subschema({
					schema: t,
					dataTypes: [],
					schemaPath: r.nil,
					topSchemaRef: a,
					errSchemaPath: i
				}, o);
				e.mergeEvaluated(s), e.ok(o);
			}
		}
	};
	function c(e, t) {
		let { gen: n } = e;
		return t.validate ? n.scopeValue("validate", { ref: t.validate }) : (0, r._)`${n.scopeValue("wrapper", { ref: t })}.validate`;
	}
	e.getValidate = c;
	function l(e, t, a, s) {
		let { gen: c, it: l } = e, { allErrors: u, schemaEnv: d, opts: f } = l, p = f.passContext ? i.default.this : r.nil;
		s ? m() : h();
		function m() {
			if (!d.$async) throw Error("async schema referenced by sync schema");
			let i = c.let("valid");
			c.try(() => {
				c.code((0, r._)`await ${(0, n.callValidateCode)(e, t, p)}`), _(t), u || c.assign(i, !0);
			}, (e) => {
				c.if((0, r._)`!(${e} instanceof ${l.ValidationError})`, () => c.throw(e)), g(e), u || c.assign(i, !1);
			}), e.ok(i);
		}
		function h() {
			e.result((0, n.callValidateCode)(e, t, p), () => _(t), () => g(t));
		}
		function g(e) {
			let t = (0, r._)`${e}.errors`;
			c.assign(i.default.vErrors, (0, r._)`${i.default.vErrors} === null ? ${t} : ${i.default.vErrors}.concat(${t})`), c.assign(i.default.errors, (0, r._)`${i.default.vErrors}.length`);
		}
		function _(e) {
			if (!l.opts.unevaluated) return;
			let t = a?.validate?.evaluated;
			if (l.props !== !0) {
				if (t && !t.dynamicProps) t.props !== void 0 && (l.props = o.mergeEvaluated.props(c, t.props, l.props));
				else {
					let t = c.var("props", (0, r._)`${e}.evaluated.props`);
					l.props = o.mergeEvaluated.props(c, t, l.props, r.Name);
				}
			}
			if (l.items !== !0) {
				if (t && !t.dynamicItems) t.items !== void 0 && (l.items = o.mergeEvaluated.items(c, t.items, l.items));
				else {
					let t = c.var("items", (0, r._)`${e}.evaluated.items`);
					l.items = o.mergeEvaluated.items(c, t, l.items, r.Name);
				}
			}
		}
	}
	e.callRef = l, e.default = s;
})), io = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = no(), n = ro();
	e.default = [
		"$schema",
		"$id",
		"$defs",
		"$vocabulary",
		{ keyword: "$comment" },
		"definitions",
		t.default,
		n.default
	];
})), ao = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = t.operators, r = {
		maximum: {
			okStr: "<=",
			ok: n.LTE,
			fail: n.GT
		},
		minimum: {
			okStr: ">=",
			ok: n.GTE,
			fail: n.LT
		},
		exclusiveMaximum: {
			okStr: "<",
			ok: n.LT,
			fail: n.GTE
		},
		exclusiveMinimum: {
			okStr: ">",
			ok: n.GT,
			fail: n.LTE
		}
	};
	e.default = {
		keyword: Object.keys(r),
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: n }) => (0, t.str)`must be ${r[e].okStr} ${n}`,
			params: ({ keyword: e, schemaCode: n }) => (0, t._)`{comparison: ${r[e].okStr}, limit: ${n}}`
		},
		code(e) {
			let { keyword: n, data: i, schemaCode: a } = e;
			e.fail$data((0, t._)`${i} ${r[n].fail} ${a} || isNaN(${i})`);
		}
	};
})), oo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y();
	e.default = {
		keyword: "multipleOf",
		type: "number",
		schemaType: "number",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must be multiple of ${e}`,
			params: ({ schemaCode: e }) => (0, t._)`{multipleOf: ${e}}`
		},
		code(e) {
			let { gen: n, data: r, schemaCode: i, it: a } = e, o = a.opts.multipleOfPrecision, s = n.let("res"), c = o ? (0, t._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${o}` : (0, t._)`${s} !== parseInt(${s})`;
			e.fail$data((0, t._)`(${i} === 0 || (${s} = ${r}/${i}, ${c}))`);
		}
	};
})), so = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function t(e) {
		let t = e.length, n = 0, r = 0, i;
		for (; r < t;) n++, i = e.charCodeAt(r++), i >= 55296 && i <= 56319 && r < t && (i = e.charCodeAt(r), (i & 64512) == 56320 && r++);
		return n;
	}
	e.default = t, t.code = "require(\"ajv/dist/runtime/ucs2length\").default";
})), co = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X(), r = so();
	e.default = {
		keyword: ["maxLength", "minLength"],
		type: "string",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxLength" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} characters`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: i, data: a, schemaCode: o, it: s } = e, c = i === "maxLength" ? t.operators.GT : t.operators.LT, l = s.opts.unicode === !1 ? (0, t._)`${a}.length` : (0, t._)`${(0, n.useFunc)(e.gen, r.default)}(${a})`;
			e.fail$data((0, t._)`${l} ${c} ${o}`);
		}
	};
})), lo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Na(), n = X(), r = Y();
	e.default = {
		keyword: "pattern",
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, r.str)`must match pattern "${e}"`,
			params: ({ schemaCode: e }) => (0, r._)`{pattern: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e, u = l.opts.unicodeRegExp ? "u" : "";
			if (o) {
				let { regExp: t } = l.opts.code, o = t.code === "new RegExp" ? (0, r._)`new RegExp` : (0, n.useFunc)(i, t), s = i.let("valid");
				i.try(() => i.assign(s, (0, r._)`${o}(${c}, ${u}).test(${a})`), () => i.assign(s, !1)), e.fail$data((0, r._)`!${s}`);
			} else {
				let n = (0, t.usePattern)(e, s);
				e.fail$data((0, r._)`!${n}.test(${a})`);
			}
		}
	};
})), uo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y();
	e.default = {
		keyword: ["maxProperties", "minProperties"],
		type: "object",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxProperties" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} properties`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxProperties" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`Object.keys(${r}).length ${a} ${i}`);
		}
	};
})), fo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Na(), n = Y(), r = X();
	e.default = {
		keyword: "required",
		type: "object",
		schemaType: "array",
		$data: !0,
		error: {
			message: ({ params: { missingProperty: e } }) => (0, n.str)`must have required property '${e}'`,
			params: ({ params: { missingProperty: e } }) => (0, n._)`{missingProperty: ${e}}`
		},
		code(e) {
			let { gen: i, schema: a, schemaCode: o, data: s, $data: c, it: l } = e, { opts: u } = l;
			if (!c && a.length === 0) return;
			let d = a.length >= u.loopRequired;
			if (l.allErrors ? f() : p(), u.strictRequired) {
				let t = e.parentSchema.properties, { definedProperties: n } = e.it;
				for (let e of a) if (t?.[e] === void 0 && !n.has(e)) {
					let t = `required property "${e}" is not defined at "${l.schemaEnv.baseId + l.errSchemaPath}" (strictRequired)`;
					(0, r.checkStrictMode)(l, t, l.opts.strictRequired);
				}
			}
			function f() {
				if (d || c) e.block$data(n.nil, m);
				else for (let n of a) (0, t.checkReportMissingProp)(e, n);
			}
			function p() {
				let n = i.let("missing");
				if (d || c) {
					let t = i.let("valid", !0);
					e.block$data(t, () => h(n, t)), e.ok(t);
				} else i.if((0, t.checkMissingProp)(e, a, n)), (0, t.reportMissingProp)(e, n), i.else();
			}
			function m() {
				i.forOf("prop", o, (n) => {
					e.setParams({ missingProperty: n }), i.if((0, t.noPropertyInData)(i, s, n, u.ownProperties), () => e.error());
				});
			}
			function h(r, a) {
				e.setParams({ missingProperty: r }), i.forOf(r, o, () => {
					i.assign(a, (0, t.propertyInData)(i, s, r, u.ownProperties)), i.if((0, n.not)(a), () => {
						e.error(), i.break();
					});
				}, n.nil);
			}
		}
	};
})), po = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y();
	e.default = {
		keyword: ["maxItems", "minItems"],
		type: "array",
		schemaType: "number",
		$data: !0,
		error: {
			message({ keyword: e, schemaCode: n }) {
				let r = e === "maxItems" ? "more" : "fewer";
				return (0, t.str)`must NOT have ${r} than ${n} items`;
			},
			params: ({ schemaCode: e }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { keyword: n, data: r, schemaCode: i } = e, a = n === "maxItems" ? t.operators.GT : t.operators.LT;
			e.fail$data((0, t._)`${r}.length ${a} ${i}`);
		}
	};
})), mo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Ia();
	t.code = "require(\"ajv/dist/runtime/equal\").default", e.default = t;
})), ho = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ja(), n = Y(), r = X(), i = mo();
	e.default = {
		keyword: "uniqueItems",
		type: "array",
		schemaType: "boolean",
		$data: !0,
		error: {
			message: ({ params: { i: e, j: t } }) => (0, n.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
			params: ({ params: { i: e, j: t } }) => (0, n._)`{i: ${e}, j: ${t}}`
		},
		code(e) {
			let { gen: a, data: o, $data: s, schema: c, parentSchema: l, schemaCode: u, it: d } = e;
			if (!s && !c) return;
			let f = a.let("valid"), p = l.items ? (0, t.getSchemaTypes)(l.items) : [];
			e.block$data(f, m, (0, n._)`${u} === false`), e.ok(f);
			function m() {
				let t = a.let("i", (0, n._)`${o}.length`), r = a.let("j");
				e.setParams({
					i: t,
					j: r
				}), a.assign(f, !0), a.if((0, n._)`${t} > 1`, () => (h() ? g : _)(t, r));
			}
			function h() {
				return p.length > 0 && !p.some((e) => e === "object" || e === "array");
			}
			function g(r, i) {
				let s = a.name("item"), c = (0, t.checkDataTypes)(p, s, d.opts.strictNumbers, t.DataType.Wrong), l = a.const("indices", (0, n._)`{}`);
				a.for((0, n._)`;${r}--;`, () => {
					a.let(s, (0, n._)`${o}[${r}]`), a.if(c, (0, n._)`continue`), p.length > 1 && a.if((0, n._)`typeof ${s} == "string"`, (0, n._)`${s} += "_"`), a.if((0, n._)`typeof ${l}[${s}] == "number"`, () => {
						a.assign(i, (0, n._)`${l}[${s}]`), e.error(), a.assign(f, !1).break();
					}).code((0, n._)`${l}[${s}] = ${r}`);
				});
			}
			function _(t, s) {
				let c = (0, r.useFunc)(a, i.default), l = a.name("outer");
				a.label(l).for((0, n._)`;${t}--;`, () => a.for((0, n._)`${s} = ${t}; ${s}--;`, () => a.if((0, n._)`${c}(${o}[${t}], ${o}[${s}])`, () => {
					e.error(), a.assign(f, !1).break(l);
				})));
			}
		}
	};
})), go = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X(), r = mo();
	e.default = {
		keyword: "const",
		$data: !0,
		error: {
			message: "must be equal to constant",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValue: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schemaCode: s, schema: c } = e;
			o || c && typeof c == "object" ? e.fail$data((0, t._)`!${(0, n.useFunc)(i, r.default)}(${a}, ${s})`) : e.fail((0, t._)`${c} !== ${a}`);
		}
	};
})), _o = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X(), r = mo();
	e.default = {
		keyword: "enum",
		schemaType: "array",
		$data: !0,
		error: {
			message: "must be equal to one of the allowed values",
			params: ({ schemaCode: e }) => (0, t._)`{allowedValues: ${e}}`
		},
		code(e) {
			let { gen: i, data: a, $data: o, schema: s, schemaCode: c, it: l } = e;
			if (!o && s.length === 0) throw Error("enum must have non-empty array");
			let u = s.length >= l.opts.loopEnum, d, f = () => d ??= (0, n.useFunc)(i, r.default), p;
			if (u || o) p = i.let("valid"), e.block$data(p, m);
			else {
				/* istanbul ignore if */
				if (!Array.isArray(s)) throw Error("ajv implementation error");
				let e = i.const("vSchema", c);
				p = (0, t.or)(...s.map((t, n) => h(e, n)));
			}
			e.pass(p);
			function m() {
				i.assign(p, !1), i.forOf("v", c, (e) => i.if((0, t._)`${f()}(${a}, ${e})`, () => i.assign(p, !0).break()));
			}
			function h(e, n) {
				let r = s[n];
				return typeof r == "object" && r ? (0, t._)`${f()}(${a}, ${e}[${n}])` : (0, t._)`${a} === ${r}`;
			}
		}
	};
})), vo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = ao(), n = oo(), r = co(), i = lo(), a = uo(), o = fo(), s = po(), c = ho(), l = go(), u = _o();
	e.default = [
		t.default,
		n.default,
		r.default,
		i.default,
		a.default,
		o.default,
		s.default,
		c.default,
		{
			keyword: "type",
			schemaType: ["string", "array"]
		},
		{
			keyword: "nullable",
			schemaType: "boolean"
		},
		l.default,
		u.default
	];
})), yo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateAdditionalItems = void 0;
	var t = Y(), n = X(), r = {
		keyword: "additionalItems",
		type: "array",
		schemaType: ["boolean", "object"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { parentSchema: t, it: r } = e, { items: a } = t;
			if (!Array.isArray(a)) {
				(0, n.checkStrictMode)(r, "\"additionalItems\" is ignored when \"items\" is not an array of schemas");
				return;
			}
			i(e, a);
		}
	};
	function i(e, r) {
		let { gen: i, schema: a, data: o, keyword: s, it: c } = e;
		c.items = !0;
		let l = i.const("len", (0, t._)`${o}.length`);
		if (a === !1) e.setParams({ len: r.length }), e.pass((0, t._)`${l} <= ${r.length}`);
		else if (typeof a == "object" && !(0, n.alwaysValidSchema)(c, a)) {
			let n = i.var("valid", (0, t._)`${l} <= ${r.length}`);
			i.if((0, t.not)(n), () => u(n)), e.ok(n);
		}
		function u(a) {
			i.forRange("i", r.length, l, (r) => {
				e.subschema({
					keyword: s,
					dataProp: r,
					dataPropType: n.Type.Num
				}, a), c.allErrors || i.if((0, t.not)(a), () => i.break());
			});
		}
	}
	e.validateAdditionalItems = i, e.default = r;
})), bo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateTuple = void 0;
	var t = Y(), n = X(), r = Na(), i = {
		keyword: "items",
		type: "array",
		schemaType: [
			"object",
			"array",
			"boolean"
		],
		before: "uniqueItems",
		code(e) {
			let { schema: t, it: i } = e;
			if (Array.isArray(t)) return a(e, "additionalItems", t);
			i.items = !0, !(0, n.alwaysValidSchema)(i, t) && e.ok((0, r.validateArray)(e));
		}
	};
	function a(e, r, i = e.schema) {
		let { gen: a, parentSchema: o, data: s, keyword: c, it: l } = e;
		f(o), l.opts.unevaluated && i.length && l.items !== !0 && (l.items = n.mergeEvaluated.items(a, i.length, l.items));
		let u = a.name("valid"), d = a.const("len", (0, t._)`${s}.length`);
		i.forEach((r, i) => {
			(0, n.alwaysValidSchema)(l, r) || (a.if((0, t._)`${d} > ${i}`, () => e.subschema({
				keyword: c,
				schemaProp: i,
				dataProp: i
			}, u)), e.ok(u));
		});
		function f(e) {
			let { opts: t, errSchemaPath: a } = l, o = i.length, s = o === e.minItems && (o === e.maxItems || e[r] === !1);
			if (t.strictTuples && !s) {
				let e = `"${c}" is ${o}-tuple, but minItems or maxItems/${r} are not specified or different at path "${a}"`;
				(0, n.checkStrictMode)(l, e, t.strictTuples);
			}
		}
	}
	e.validateTuple = a, e.default = i;
})), xo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = bo();
	e.default = {
		keyword: "prefixItems",
		type: "array",
		schemaType: ["array"],
		before: "uniqueItems",
		code: (e) => (0, t.validateTuple)(e, "items")
	};
})), So = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X(), r = Na(), i = yo();
	e.default = {
		keyword: "items",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { schema: t, parentSchema: a, it: o } = e, { prefixItems: s } = a;
			o.items = !0, !(0, n.alwaysValidSchema)(o, t) && (s ? (0, i.validateAdditionalItems)(e, s) : e.ok((0, r.validateArray)(e)));
		}
	};
})), Co = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X();
	e.default = {
		keyword: "contains",
		type: "array",
		schemaType: ["object", "boolean"],
		before: "uniqueItems",
		trackErrors: !0,
		error: {
			message: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t.str)`must contain at least ${e} valid item(s)` : (0, t.str)`must contain at least ${e} and no more than ${n} valid item(s)`,
			params: ({ params: { min: e, max: n } }) => n === void 0 ? (0, t._)`{minContains: ${e}}` : (0, t._)`{minContains: ${e}, maxContains: ${n}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, data: o, it: s } = e, c, l, { minContains: u, maxContains: d } = a;
			s.opts.next ? (c = u === void 0 ? 1 : u, l = d) : c = 1;
			let f = r.const("len", (0, t._)`${o}.length`);
			if (e.setParams({
				min: c,
				max: l
			}), l === void 0 && c === 0) {
				(0, n.checkStrictMode)(s, "\"minContains\" == 0 without \"maxContains\": \"contains\" keyword ignored");
				return;
			}
			if (l !== void 0 && c > l) {
				(0, n.checkStrictMode)(s, "\"minContains\" > \"maxContains\" is always invalid"), e.fail();
				return;
			}
			if ((0, n.alwaysValidSchema)(s, i)) {
				let n = (0, t._)`${f} >= ${c}`;
				l !== void 0 && (n = (0, t._)`${n} && ${f} <= ${l}`), e.pass(n);
				return;
			}
			s.items = !0;
			let p = r.name("valid");
			l === void 0 && c === 1 ? h(p, () => r.if(p, () => r.break())) : c === 0 ? (r.let(p, !0), l !== void 0 && r.if((0, t._)`${o}.length > 0`, m)) : (r.let(p, !1), m()), e.result(p, () => e.reset());
			function m() {
				let e = r.name("_valid"), t = r.let("count", 0);
				h(e, () => r.if(e, () => g(t)));
			}
			function h(t, i) {
				r.forRange("i", 0, f, (r) => {
					e.subschema({
						keyword: "contains",
						dataProp: r,
						dataPropType: n.Type.Num,
						compositeRule: !0
					}, t), i();
				});
			}
			function g(e) {
				r.code((0, t._)`${e}++`), l === void 0 ? r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0).break()) : (r.if((0, t._)`${e} > ${l}`, () => r.assign(p, !1).break()), c === 1 ? r.assign(p, !0) : r.if((0, t._)`${e} >= ${c}`, () => r.assign(p, !0)));
			}
		}
	};
})), wo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
	var t = Y(), n = X(), r = Na();
	e.error = {
		message: ({ params: { property: e, depsCount: n, deps: r } }) => {
			let i = n === 1 ? "property" : "properties";
			return (0, t.str)`must have ${i} ${r} when property ${e} is present`;
		},
		params: ({ params: { property: e, depsCount: n, deps: r, missingProperty: i } }) => (0, t._)`{property: ${e},
    missingProperty: ${i},
    depsCount: ${n},
    deps: ${r}}`
	};
	var i = {
		keyword: "dependencies",
		type: "object",
		schemaType: "object",
		error: e.error,
		code(e) {
			let [t, n] = a(e);
			o(e, t), s(e, n);
		}
	};
	function a({ schema: e }) {
		let t = {}, n = {};
		for (let r in e) {
			if (r === "__proto__") continue;
			let i = Array.isArray(e[r]) ? t : n;
			i[r] = e[r];
		}
		return [t, n];
	}
	function o(e, n = e.schema) {
		let { gen: i, data: a, it: o } = e;
		if (Object.keys(n).length === 0) return;
		let s = i.let("missing");
		for (let c in n) {
			let l = n[c];
			if (l.length === 0) continue;
			let u = (0, r.propertyInData)(i, a, c, o.opts.ownProperties);
			e.setParams({
				property: c,
				depsCount: l.length,
				deps: l.join(", ")
			}), o.allErrors ? i.if(u, () => {
				for (let t of l) (0, r.checkReportMissingProp)(e, t);
			}) : (i.if((0, t._)`${u} && (${(0, r.checkMissingProp)(e, l, s)})`), (0, r.reportMissingProp)(e, s), i.else());
		}
	}
	e.validatePropertyDeps = o;
	function s(e, t = e.schema) {
		let { gen: i, data: a, keyword: o, it: s } = e, c = i.name("valid");
		for (let l in t) (0, n.alwaysValidSchema)(s, t[l]) || (i.if((0, r.propertyInData)(i, a, l, s.opts.ownProperties), () => {
			let t = e.subschema({
				keyword: o,
				schemaProp: l
			}, c);
			e.mergeValidEvaluated(t, c);
		}, () => i.var(c, !0)), e.ok(c));
	}
	e.validateSchemaDeps = s, e.default = i;
})), To = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X();
	e.default = {
		keyword: "propertyNames",
		type: "object",
		schemaType: ["object", "boolean"],
		error: {
			message: "property name must be valid",
			params: ({ params: e }) => (0, t._)`{propertyName: ${e.propertyName}}`
		},
		code(e) {
			let { gen: r, schema: i, data: a, it: o } = e;
			if ((0, n.alwaysValidSchema)(o, i)) return;
			let s = r.name("valid");
			r.forIn("key", a, (n) => {
				e.setParams({ propertyName: n }), e.subschema({
					keyword: "propertyNames",
					data: n,
					dataTypes: ["string"],
					propertyName: n,
					compositeRule: !0
				}, s), r.if((0, t.not)(s), () => {
					e.error(!0), o.allErrors || r.break();
				});
			}), e.ok(s);
		}
	};
})), Eo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Na(), n = Y(), r = Ea(), i = X();
	e.default = {
		keyword: "additionalProperties",
		type: ["object"],
		schemaType: ["boolean", "object"],
		allowUndefined: !0,
		trackErrors: !0,
		error: {
			message: "must NOT have additional properties",
			params: ({ params: e }) => (0, n._)`{additionalProperty: ${e.additionalProperty}}`
		},
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, errsCount: l, it: u } = e;
			/* istanbul ignore if */
			if (!l) throw Error("ajv implementation error");
			let { allErrors: d, opts: f } = u;
			if (u.props = !0, f.removeAdditional !== "all" && (0, i.alwaysValidSchema)(u, o)) return;
			let p = (0, t.allSchemaProperties)(s.properties), m = (0, t.allSchemaProperties)(s.patternProperties);
			h(), e.ok((0, n._)`${l} === ${r.default.errors}`);
			function h() {
				a.forIn("key", c, (e) => {
					!p.length && !m.length ? v(e) : a.if(g(e), () => v(e));
				});
			}
			function g(r) {
				let o;
				if (p.length > 8) {
					let e = (0, i.schemaRefOrVal)(u, s.properties, "properties");
					o = (0, t.isOwnProperty)(a, e, r);
				} else o = p.length ? (0, n.or)(...p.map((e) => (0, n._)`${r} === ${e}`)) : n.nil;
				return m.length && (o = (0, n.or)(o, ...m.map((i) => (0, n._)`${(0, t.usePattern)(e, i)}.test(${r})`))), (0, n.not)(o);
			}
			function _(e) {
				a.code((0, n._)`delete ${c}[${e}]`);
			}
			function v(t) {
				if (f.removeAdditional === "all" || f.removeAdditional && o === !1) {
					_(t);
					return;
				}
				if (o === !1) {
					e.setParams({ additionalProperty: t }), e.error(), d || a.break();
					return;
				}
				if (typeof o == "object" && !(0, i.alwaysValidSchema)(u, o)) {
					let r = a.name("valid");
					f.removeAdditional === "failing" ? (y(t, r, !1), a.if((0, n.not)(r), () => {
						e.reset(), _(t);
					})) : (y(t, r), d || a.if((0, n.not)(r), () => a.break()));
				}
			}
			function y(t, n, r) {
				let a = {
					keyword: "additionalProperties",
					dataProp: t,
					dataPropType: i.Type.Str
				};
				r === !1 && Object.assign(a, {
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}), e.subschema(a, n);
			}
		}
	};
})), Do = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = za(), n = Na(), r = X(), i = Eo();
	e.default = {
		keyword: "properties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, parentSchema: s, data: c, it: l } = e;
			l.opts.removeAdditional === "all" && s.additionalProperties === void 0 && i.default.code(new t.KeywordCxt(l, i.default, "additionalProperties"));
			let u = (0, n.allSchemaProperties)(o);
			for (let e of u) l.definedProperties.add(e);
			l.opts.unevaluated && u.length && l.props !== !0 && (l.props = r.mergeEvaluated.props(a, (0, r.toHash)(u), l.props));
			let d = u.filter((e) => !(0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0) return;
			let f = a.name("valid");
			for (let t of d) p(t) ? m(t) : (a.if((0, n.propertyInData)(a, c, t, l.opts.ownProperties)), m(t), l.allErrors || a.else().var(f, !0), a.endIf()), e.it.definedProperties.add(t), e.ok(f);
			function p(e) {
				return l.opts.useDefaults && !l.compositeRule && o[e].default !== void 0;
			}
			function m(t) {
				e.subschema({
					keyword: "properties",
					schemaProp: t,
					dataProp: t
				}, f);
			}
		}
	};
})), Oo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Na(), n = Y(), r = X(), i = X();
	e.default = {
		keyword: "patternProperties",
		type: "object",
		schemaType: "object",
		code(e) {
			let { gen: a, schema: o, data: s, parentSchema: c, it: l } = e, { opts: u } = l, d = (0, t.allSchemaProperties)(o), f = d.filter((e) => (0, r.alwaysValidSchema)(l, o[e]));
			if (d.length === 0 || f.length === d.length && (!l.opts.unevaluated || l.props === !0)) return;
			let p = u.strictSchema && !u.allowMatchingProperties && c.properties, m = a.name("valid");
			l.props !== !0 && !(l.props instanceof n.Name) && (l.props = (0, i.evaluatedPropsToName)(a, l.props));
			let { props: h } = l;
			g();
			function g() {
				for (let e of d) p && _(e), l.allErrors ? v(e) : (a.var(m, !0), v(e), a.if(m));
			}
			function _(e) {
				for (let t in p) new RegExp(e).test(t) && (0, r.checkStrictMode)(l, `property ${t} matches pattern ${e} (use allowMatchingProperties)`);
			}
			function v(r) {
				a.forIn("key", s, (o) => {
					a.if((0, n._)`${(0, t.usePattern)(e, r)}.test(${o})`, () => {
						let t = f.includes(r);
						t || e.subschema({
							keyword: "patternProperties",
							schemaProp: r,
							dataProp: o,
							dataPropType: i.Type.Str
						}, m), l.opts.unevaluated && h !== !0 ? a.assign((0, n._)`${h}[${o}]`, !0) : !t && !l.allErrors && a.if((0, n.not)(m), () => a.break());
					});
				});
			}
		}
	};
})), ko = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = X();
	e.default = {
		keyword: "not",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			if ((0, t.alwaysValidSchema)(i, r)) {
				e.fail();
				return;
			}
			let a = n.name("valid");
			e.subschema({
				keyword: "not",
				compositeRule: !0,
				createErrors: !1,
				allErrors: !1
			}, a), e.failResult(a, () => e.reset(), () => e.error());
		},
		error: { message: "must NOT be valid" }
	};
})), Ao = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = {
		keyword: "anyOf",
		schemaType: "array",
		trackErrors: !0,
		code: Na().validateUnion,
		error: { message: "must match a schema in anyOf" }
	};
})), jo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X();
	e.default = {
		keyword: "oneOf",
		schemaType: "array",
		trackErrors: !0,
		error: {
			message: "must match exactly one schema in oneOf",
			params: ({ params: e }) => (0, t._)`{passingSchemas: ${e.passing}}`
		},
		code(e) {
			let { gen: r, schema: i, parentSchema: a, it: o } = e;
			/* istanbul ignore if */
			if (!Array.isArray(i)) throw Error("ajv implementation error");
			if (o.opts.discriminator && a.discriminator) return;
			let s = i, c = r.let("valid", !1), l = r.let("passing", null), u = r.name("_valid");
			e.setParams({ passing: l }), r.block(d), e.result(c, () => e.reset(), () => e.error(!0));
			function d() {
				s.forEach((i, a) => {
					let s;
					(0, n.alwaysValidSchema)(o, i) ? r.var(u, !0) : s = e.subschema({
						keyword: "oneOf",
						schemaProp: a,
						compositeRule: !0
					}, u), a > 0 && r.if((0, t._)`${u} && ${c}`).assign(c, !1).assign(l, (0, t._)`[${l}, ${a}]`).else(), r.if(u, () => {
						r.assign(c, !0), r.assign(l, a), s && e.mergeEvaluated(s, t.Name);
					});
				});
			}
		}
	};
})), Mo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = X();
	e.default = {
		keyword: "allOf",
		schemaType: "array",
		code(e) {
			let { gen: n, schema: r, it: i } = e;
			/* istanbul ignore if */
			if (!Array.isArray(r)) throw Error("ajv implementation error");
			let a = n.name("valid");
			r.forEach((n, r) => {
				if ((0, t.alwaysValidSchema)(i, n)) return;
				let o = e.subschema({
					keyword: "allOf",
					schemaProp: r
				}, a);
				e.ok(a), e.mergeEvaluated(o);
			});
		}
	};
})), No = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X(), r = {
		keyword: "if",
		schemaType: ["object", "boolean"],
		trackErrors: !0,
		error: {
			message: ({ params: e }) => (0, t.str)`must match "${e.ifClause}" schema`,
			params: ({ params: e }) => (0, t._)`{failingKeyword: ${e.ifClause}}`
		},
		code(e) {
			let { gen: r, parentSchema: a, it: o } = e;
			a.then === void 0 && a.else === void 0 && (0, n.checkStrictMode)(o, "\"if\" without \"then\" and \"else\" is ignored");
			let s = i(o, "then"), c = i(o, "else");
			if (!s && !c) return;
			let l = r.let("valid", !0), u = r.name("_valid");
			if (d(), e.reset(), s && c) {
				let t = r.let("ifClause");
				e.setParams({ ifClause: t }), r.if(u, f("then", t), f("else", t));
			} else s ? r.if(u, f("then")) : r.if((0, t.not)(u), f("else"));
			e.pass(l, () => e.error(!0));
			function d() {
				let t = e.subschema({
					keyword: "if",
					compositeRule: !0,
					createErrors: !1,
					allErrors: !1
				}, u);
				e.mergeEvaluated(t);
			}
			function f(n, i) {
				return () => {
					let a = e.subschema({ keyword: n }, u);
					r.assign(l, u), e.mergeValidEvaluated(a, l), i ? r.assign(i, (0, t._)`${n}`) : e.setParams({ ifClause: n });
				};
			}
		}
	};
	function i(e, t) {
		let r = e.schema[t];
		return r !== void 0 && !(0, n.alwaysValidSchema)(e, r);
	}
	e.default = r;
})), Po = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = X();
	e.default = {
		keyword: ["then", "else"],
		schemaType: ["object", "boolean"],
		code({ keyword: e, parentSchema: n, it: r }) {
			n.if === void 0 && (0, t.checkStrictMode)(r, `"${e}" without "if" is ignored`);
		}
	};
})), Fo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = yo(), n = xo(), r = bo(), i = So(), a = Co(), o = wo(), s = To(), c = Eo(), l = Do(), u = Oo(), d = ko(), f = Ao(), p = jo(), m = Mo(), h = No(), g = Po();
	function _(e = !1) {
		let _ = [
			d.default,
			f.default,
			p.default,
			m.default,
			h.default,
			g.default,
			s.default,
			c.default,
			o.default,
			l.default,
			u.default
		];
		return e ? _.push(n.default, i.default) : _.push(t.default, r.default), _.push(a.default), _;
	}
	e.default = _;
})), Io = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dynamicAnchor = void 0;
	var t = Y(), n = Ea(), r = Ha(), i = ro(), a = {
		keyword: "$dynamicAnchor",
		schemaType: "string",
		code: (e) => o(e, e.schema)
	};
	function o(e, r) {
		let { gen: i, it: a } = e;
		a.schemaEnv.root.dynamicAnchors[r] = !0;
		let o = (0, t._)`${n.default.dynamicAnchors}${(0, t.getProperty)(r)}`, c = a.errSchemaPath === "#" ? a.validateName : s(e);
		i.if((0, t._)`!${o}`, () => i.assign(o, c));
	}
	e.dynamicAnchor = o;
	function s(e) {
		let { schemaEnv: t, schema: n, self: a } = e.it, { root: o, baseId: s, localRefs: c, meta: l } = t.root, { schemaId: u } = a.opts, d = new r.SchemaEnv({
			schema: n,
			schemaId: u,
			root: o,
			baseId: s,
			localRefs: c,
			meta: l
		});
		return r.compileSchema.call(a, d), (0, i.getValidate)(e, d);
	}
	e.default = a;
})), Lo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dynamicRef = void 0;
	var t = Y(), n = Ea(), r = ro(), i = {
		keyword: "$dynamicRef",
		schemaType: "string",
		code: (e) => a(e, e.schema)
	};
	function a(e, i) {
		let { gen: a, keyword: o, it: s } = e;
		if (i[0] !== "#") throw Error(`"${o}" only supports hash fragment reference`);
		let c = i.slice(1);
		if (s.allErrors) l();
		else {
			let t = a.let("valid", !1);
			l(t), e.ok(t);
		}
		function l(e) {
			if (s.schemaEnv.root.dynamicAnchors[c]) {
				let r = a.let("_v", (0, t._)`${n.default.dynamicAnchors}${(0, t.getProperty)(c)}`);
				a.if(r, u(r, e), u(s.validateName, e));
			} else u(s.validateName, e)();
		}
		function u(t, n) {
			return n ? () => a.block(() => {
				(0, r.callRef)(e, t), a.let(n, !0);
			}) : () => (0, r.callRef)(e, t);
		}
	}
	e.dynamicRef = a, e.default = i;
})), Ro = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Io(), n = X();
	e.default = {
		keyword: "$recursiveAnchor",
		schemaType: "boolean",
		code(e) {
			e.schema ? (0, t.dynamicAnchor)(e, "") : (0, n.checkStrictMode)(e.it, "$recursiveAnchor: false is ignored");
		}
	};
})), zo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Lo();
	e.default = {
		keyword: "$recursiveRef",
		schemaType: "string",
		code: (e) => (0, t.dynamicRef)(e, e.schema)
	};
})), Bo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Io(), n = Lo(), r = Ro(), i = zo();
	e.default = [
		t.default,
		n.default,
		r.default,
		i.default
	];
})), Vo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = wo();
	e.default = {
		keyword: "dependentRequired",
		type: "object",
		schemaType: "object",
		error: t.error,
		code: (e) => (0, t.validatePropertyDeps)(e)
	};
})), Ho = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = wo();
	e.default = {
		keyword: "dependentSchemas",
		type: "object",
		schemaType: "object",
		code: (e) => (0, t.validateSchemaDeps)(e)
	};
})), Uo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = X();
	e.default = {
		keyword: ["maxContains", "minContains"],
		type: "array",
		schemaType: "number",
		code({ keyword: e, parentSchema: n, it: r }) {
			n.contains === void 0 && (0, t.checkStrictMode)(r, `"${e}" without "contains" is ignored`);
		}
	};
})), Wo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Vo(), n = Ho(), r = Uo();
	e.default = [
		t.default,
		n.default,
		r.default
	];
})), Go = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X(), r = Ea();
	e.default = {
		keyword: "unevaluatedProperties",
		type: "object",
		schemaType: ["boolean", "object"],
		trackErrors: !0,
		error: {
			message: "must NOT have unevaluated properties",
			params: ({ params: e }) => (0, t._)`{unevaluatedProperty: ${e.unevaluatedProperty}}`
		},
		code(e) {
			let { gen: i, schema: a, data: o, errsCount: s, it: c } = e;
			/* istanbul ignore if */
			if (!s) throw Error("ajv implementation error");
			let { allErrors: l, props: u } = c;
			u instanceof t.Name ? i.if((0, t._)`${u} !== true`, () => i.forIn("key", o, (e) => i.if(f(u, e), () => d(e)))) : u !== !0 && i.forIn("key", o, (e) => u === void 0 ? d(e) : i.if(p(u, e), () => d(e))), c.props = !0, e.ok((0, t._)`${s} === ${r.default.errors}`);
			function d(r) {
				if (a === !1) {
					e.setParams({ unevaluatedProperty: r }), e.error(), l || i.break();
					return;
				}
				if (!(0, n.alwaysValidSchema)(c, a)) {
					let a = i.name("valid");
					e.subschema({
						keyword: "unevaluatedProperties",
						dataProp: r,
						dataPropType: n.Type.Str
					}, a), l || i.if((0, t.not)(a), () => i.break());
				}
			}
			function f(e, n) {
				return (0, t._)`!${e} || !${e}[${n}]`;
			}
			function p(e, n) {
				let r = [];
				for (let i in e) e[i] === !0 && r.push((0, t._)`${n} !== ${i}`);
				return (0, t.and)(...r);
			}
		}
	};
})), Ko = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = X();
	e.default = {
		keyword: "unevaluatedItems",
		type: "array",
		schemaType: ["boolean", "object"],
		error: {
			message: ({ params: { len: e } }) => (0, t.str)`must NOT have more than ${e} items`,
			params: ({ params: { len: e } }) => (0, t._)`{limit: ${e}}`
		},
		code(e) {
			let { gen: r, schema: i, data: a, it: o } = e, s = o.items || 0;
			if (s === !0) return;
			let c = r.const("len", (0, t._)`${a}.length`);
			if (i === !1) e.setParams({ len: s }), e.fail((0, t._)`${c} > ${s}`);
			else if (typeof i == "object" && !(0, n.alwaysValidSchema)(o, i)) {
				let n = r.var("valid", (0, t._)`${c} <= ${s}`);
				r.if((0, t.not)(n), () => l(n, s)), e.ok(n);
			}
			o.items = !0;
			function l(i, a) {
				r.forRange("i", a, c, (a) => {
					e.subschema({
						keyword: "unevaluatedItems",
						dataProp: a,
						dataPropType: n.Type.Num
					}, i), o.allErrors || r.if((0, t.not)(i), () => r.break());
				});
			}
		}
	};
})), qo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Go(), n = Ko();
	e.default = [t.default, n.default];
})), Jo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y();
	e.default = {
		keyword: "format",
		type: ["number", "string"],
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ schemaCode: e }) => (0, t.str)`must match format "${e}"`,
			params: ({ schemaCode: e }) => (0, t._)`{format: ${e}}`
		},
		code(e, n) {
			let { gen: r, data: i, $data: a, schema: o, schemaCode: s, it: c } = e, { opts: l, errSchemaPath: u, schemaEnv: d, self: f } = c;
			if (!l.validateFormats) return;
			a ? p() : m();
			function p() {
				let a = r.scopeValue("formats", {
					ref: f.formats,
					code: l.code.formats
				}), o = r.const("fDef", (0, t._)`${a}[${s}]`), c = r.let("fType"), u = r.let("format");
				r.if((0, t._)`typeof ${o} == "object" && !(${o} instanceof RegExp)`, () => r.assign(c, (0, t._)`${o}.type || "string"`).assign(u, (0, t._)`${o}.validate`), () => r.assign(c, (0, t._)`"string"`).assign(u, o)), e.fail$data((0, t.or)(p(), m()));
				function p() {
					return l.strictSchema === !1 ? t.nil : (0, t._)`${s} && !${u}`;
				}
				function m() {
					let e = d.$async ? (0, t._)`(${o}.async ? await ${u}(${i}) : ${u}(${i}))` : (0, t._)`${u}(${i})`, r = (0, t._)`(typeof ${u} == "function" ? ${e} : ${u}.test(${i}))`;
					return (0, t._)`${u} && ${u} !== true && ${c} === ${n} && !${r}`;
				}
			}
			function m() {
				let a = f.formats[o];
				if (!a) {
					m();
					return;
				}
				if (a === !0) return;
				let [s, c, p] = h(a);
				s === n && e.pass(g());
				function m() {
					if (l.strictSchema === !1) {
						f.logger.warn(e());
						return;
					}
					throw Error(e());
					function e() {
						return `unknown format "${o}" ignored in schema at path "${u}"`;
					}
				}
				function h(e) {
					let n = e instanceof RegExp ? (0, t.regexpCode)(e) : l.code.formats ? (0, t._)`${l.code.formats}${(0, t.getProperty)(o)}` : void 0, i = r.scopeValue("formats", {
						key: o,
						ref: e,
						code: n
					});
					return typeof e == "object" && !(e instanceof RegExp) ? [
						e.type || "string",
						e.validate,
						(0, t._)`${i}.validate`
					] : [
						"string",
						e,
						i
					];
				}
				function g() {
					if (typeof a == "object" && !(a instanceof RegExp) && a.async) {
						if (!d.$async) throw Error("async format in sync schema");
						return (0, t._)`await ${p}(${i})`;
					}
					return typeof c == "function" ? (0, t._)`${p}(${i})` : (0, t._)`${p}.test(${i})`;
				}
			}
		}
	};
})), Yo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = [Jo().default];
})), Xo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.contentVocabulary = e.metadataVocabulary = void 0, e.metadataVocabulary = [
		"title",
		"description",
		"default",
		"deprecated",
		"readOnly",
		"writeOnly",
		"examples"
	], e.contentVocabulary = [
		"contentMediaType",
		"contentEncoding",
		"contentSchema"
	];
})), Zo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = io(), n = vo(), r = Fo(), i = Bo(), a = Wo(), o = qo(), s = Yo(), c = Xo();
	e.default = [
		i.default,
		t.default,
		n.default,
		(0, r.default)(!0),
		s.default,
		c.metadataVocabulary,
		c.contentVocabulary,
		a.default,
		o.default
	];
})), Qo = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.DiscrError = void 0;
	var t;
	(function(e) {
		e.Tag = "tag", e.Mapping = "mapping";
	})(t || (e.DiscrError = t = {}));
})), $o = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = Y(), n = Qo(), r = Ha(), i = Va(), a = X();
	e.default = {
		keyword: "discriminator",
		type: "object",
		schemaType: "object",
		error: {
			message: ({ params: { discrError: e, tagName: t } }) => e === n.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
			params: ({ params: { discrError: e, tag: n, tagName: r } }) => (0, t._)`{error: ${e}, tag: ${r}, tagValue: ${n}}`
		},
		code(e) {
			let { gen: o, data: s, schema: c, parentSchema: l, it: u } = e, { oneOf: d } = l;
			if (!u.opts.discriminator) throw Error("discriminator: requires discriminator option");
			let f = c.propertyName;
			if (typeof f != "string") throw Error("discriminator: requires propertyName");
			if (c.mapping) throw Error("discriminator: mapping is not supported");
			if (!d) throw Error("discriminator: requires oneOf keyword");
			let p = o.let("valid", !1), m = o.const("tag", (0, t._)`${s}${(0, t.getProperty)(f)}`);
			o.if((0, t._)`typeof ${m} == "string"`, () => h(), () => e.error(!1, {
				discrError: n.DiscrError.Tag,
				tag: m,
				tagName: f
			})), e.ok(p);
			function h() {
				let r = _();
				o.if(!1);
				for (let e in r) o.elseIf((0, t._)`${m} === ${e}`), o.assign(p, g(r[e]));
				o.else(), e.error(!1, {
					discrError: n.DiscrError.Mapping,
					tag: m,
					tagName: f
				}), o.endIf();
			}
			function g(n) {
				let r = o.name("valid"), i = e.subschema({
					keyword: "oneOf",
					schemaProp: n
				}, r);
				return e.mergeEvaluated(i, t.Name), r;
			}
			function _() {
				let e = {}, t = o(l), n = !0;
				for (let e = 0; e < d.length; e++) {
					let c = d[e];
					if (c?.$ref && !(0, a.schemaHasRulesButRef)(c, u.self.RULES)) {
						let e = c.$ref;
						if (c = r.resolveRef.call(u.self, u.schemaEnv.root, u.baseId, e), c instanceof r.SchemaEnv && (c = c.schema), c === void 0) throw new i.default(u.opts.uriResolver, u.baseId, e);
					}
					let l = c?.properties?.[f];
					if (typeof l != "object") throw Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${f}"`);
					n &&= t || o(c), s(l, e);
				}
				if (!n) throw Error(`discriminator: "${f}" must be required`);
				return e;
				function o({ required: e }) {
					return Array.isArray(e) && e.includes(f);
				}
				function s(e, t) {
					if (e.const) c(e.const, t);
					else if (e.enum) for (let n of e.enum) c(n, t);
					else throw Error(`discriminator: "properties/${f}" must have "const" or "enum"`);
				}
				function c(t, n) {
					if (typeof t != "string" || t in e) throw Error(`discriminator: "${f}" values must be unique strings`);
					e[t] = n;
				}
			}
		}
	};
})), es = /* @__PURE__ */ r({
	$comment: () => cs,
	$dynamicAnchor: () => is,
	$id: () => ns,
	$schema: () => ts,
	$vocabulary: () => rs,
	allOf: () => os,
	default: () => us,
	properties: () => ls,
	title: () => as,
	type: () => ss
}), ts, ns, rs, is, as, os, ss, cs, ls, us, ds = t((() => {
	ts = "https://json-schema.org/draft/2020-12/schema", ns = "https://json-schema.org/draft/2020-12/schema", rs = {
		"https://json-schema.org/draft/2020-12/vocab/core": !0,
		"https://json-schema.org/draft/2020-12/vocab/applicator": !0,
		"https://json-schema.org/draft/2020-12/vocab/unevaluated": !0,
		"https://json-schema.org/draft/2020-12/vocab/validation": !0,
		"https://json-schema.org/draft/2020-12/vocab/meta-data": !0,
		"https://json-schema.org/draft/2020-12/vocab/format-annotation": !0,
		"https://json-schema.org/draft/2020-12/vocab/content": !0
	}, is = "meta", as = "Core and Validation specifications meta-schema", os = [
		{ $ref: "meta/core" },
		{ $ref: "meta/applicator" },
		{ $ref: "meta/unevaluated" },
		{ $ref: "meta/validation" },
		{ $ref: "meta/meta-data" },
		{ $ref: "meta/format-annotation" },
		{ $ref: "meta/content" }
	], ss = ["object", "boolean"], cs = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", ls = {
		definitions: {
			$comment: "\"definitions\" has been replaced by \"$defs\".",
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			deprecated: !0,
			default: {}
		},
		dependencies: {
			$comment: "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
			type: "object",
			additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] },
			deprecated: !0,
			default: {}
		},
		$recursiveAnchor: {
			$comment: "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".",
			$ref: "meta/core#/$defs/anchorString",
			deprecated: !0
		},
		$recursiveRef: {
			$comment: "\"$recursiveRef\" has been replaced by \"$dynamicRef\".",
			$ref: "meta/core#/$defs/uriReferenceString",
			deprecated: !0
		}
	}, us = {
		$schema: ts,
		$id: ns,
		$vocabulary: rs,
		$dynamicAnchor: is,
		title: as,
		allOf: os,
		type: ss,
		$comment: cs,
		properties: ls
	};
})), fs = /* @__PURE__ */ r({
	$defs: () => bs,
	$dynamicAnchor: () => gs,
	$id: () => ms,
	$schema: () => ps,
	$vocabulary: () => hs,
	default: () => xs,
	properties: () => ys,
	title: () => _s,
	type: () => vs
}), ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss = t((() => {
	ps = "https://json-schema.org/draft/2020-12/schema", ms = "https://json-schema.org/draft/2020-12/meta/applicator", hs = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, gs = "meta", _s = "Applicator vocabulary meta-schema", vs = ["object", "boolean"], ys = {
		prefixItems: { $ref: "#/$defs/schemaArray" },
		items: { $dynamicRef: "#meta" },
		contains: { $dynamicRef: "#meta" },
		additionalProperties: { $dynamicRef: "#meta" },
		properties: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			default: {}
		},
		patternProperties: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			propertyNames: { format: "regex" },
			default: {}
		},
		dependentSchemas: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" },
			default: {}
		},
		propertyNames: { $dynamicRef: "#meta" },
		if: { $dynamicRef: "#meta" },
		then: { $dynamicRef: "#meta" },
		else: { $dynamicRef: "#meta" },
		allOf: { $ref: "#/$defs/schemaArray" },
		anyOf: { $ref: "#/$defs/schemaArray" },
		oneOf: { $ref: "#/$defs/schemaArray" },
		not: { $dynamicRef: "#meta" }
	}, bs = { schemaArray: {
		type: "array",
		minItems: 1,
		items: { $dynamicRef: "#meta" }
	} }, xs = {
		$schema: ps,
		$id: ms,
		$vocabulary: hs,
		$dynamicAnchor: gs,
		title: _s,
		type: vs,
		properties: ys,
		$defs: bs
	};
})), Cs = /* @__PURE__ */ r({
	$dynamicAnchor: () => Ds,
	$id: () => Ts,
	$schema: () => ws,
	$vocabulary: () => Es,
	default: () => js,
	properties: () => As,
	title: () => Os,
	type: () => ks
}), ws, Ts, Es, Ds, Os, ks, As, js, Ms = t((() => {
	ws = "https://json-schema.org/draft/2020-12/schema", Ts = "https://json-schema.org/draft/2020-12/meta/unevaluated", Es = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Ds = "meta", Os = "Unevaluated applicator vocabulary meta-schema", ks = ["object", "boolean"], As = {
		unevaluatedItems: { $dynamicRef: "#meta" },
		unevaluatedProperties: { $dynamicRef: "#meta" }
	}, js = {
		$schema: ws,
		$id: Ts,
		$vocabulary: Es,
		$dynamicAnchor: Ds,
		title: Os,
		type: ks,
		properties: As
	};
})), Ns = /* @__PURE__ */ r({
	$dynamicAnchor: () => Ls,
	$id: () => Fs,
	$schema: () => Ps,
	$vocabulary: () => Is,
	default: () => Vs,
	properties: () => Bs,
	title: () => Rs,
	type: () => zs
}), Ps, Fs, Is, Ls, Rs, zs, Bs, Vs, Hs = t((() => {
	Ps = "https://json-schema.org/draft/2020-12/schema", Fs = "https://json-schema.org/draft/2020-12/meta/content", Is = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Ls = "meta", Rs = "Content vocabulary meta-schema", zs = ["object", "boolean"], Bs = {
		contentEncoding: { type: "string" },
		contentMediaType: { type: "string" },
		contentSchema: { $dynamicRef: "#meta" }
	}, Vs = {
		$schema: Ps,
		$id: Fs,
		$vocabulary: Is,
		$dynamicAnchor: Ls,
		title: Rs,
		type: zs,
		properties: Bs
	};
})), Us = /* @__PURE__ */ r({
	$defs: () => Zs,
	$dynamicAnchor: () => qs,
	$id: () => Gs,
	$schema: () => Ws,
	$vocabulary: () => Ks,
	default: () => Qs,
	properties: () => Xs,
	title: () => Js,
	type: () => Ys
}), Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s = t((() => {
	Ws = "https://json-schema.org/draft/2020-12/schema", Gs = "https://json-schema.org/draft/2020-12/meta/core", Ks = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, qs = "meta", Js = "Core vocabulary meta-schema", Ys = ["object", "boolean"], Xs = {
		$id: {
			$ref: "#/$defs/uriReferenceString",
			$comment: "Non-empty fragments not allowed.",
			pattern: "^[^#]*#?$"
		},
		$schema: { $ref: "#/$defs/uriString" },
		$ref: { $ref: "#/$defs/uriReferenceString" },
		$anchor: { $ref: "#/$defs/anchorString" },
		$dynamicRef: { $ref: "#/$defs/uriReferenceString" },
		$dynamicAnchor: { $ref: "#/$defs/anchorString" },
		$vocabulary: {
			type: "object",
			propertyNames: { $ref: "#/$defs/uriString" },
			additionalProperties: { type: "boolean" }
		},
		$comment: { type: "string" },
		$defs: {
			type: "object",
			additionalProperties: { $dynamicRef: "#meta" }
		}
	}, Zs = {
		anchorString: {
			type: "string",
			pattern: "^[A-Za-z_][-A-Za-z0-9._]*$"
		},
		uriString: {
			type: "string",
			format: "uri"
		},
		uriReferenceString: {
			type: "string",
			format: "uri-reference"
		}
	}, Qs = {
		$schema: Ws,
		$id: Gs,
		$vocabulary: Ks,
		$dynamicAnchor: qs,
		title: Js,
		type: Ys,
		properties: Xs,
		$defs: Zs
	};
})), ec = /* @__PURE__ */ r({
	$dynamicAnchor: () => ic,
	$id: () => nc,
	$schema: () => tc,
	$vocabulary: () => rc,
	default: () => cc,
	properties: () => sc,
	title: () => ac,
	type: () => oc
}), tc, nc, rc, ic, ac, oc, sc, cc, lc = t((() => {
	tc = "https://json-schema.org/draft/2020-12/schema", nc = "https://json-schema.org/draft/2020-12/meta/format-annotation", rc = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, ic = "meta", ac = "Format vocabulary meta-schema for annotation results", oc = ["object", "boolean"], sc = { format: { type: "string" } }, cc = {
		$schema: tc,
		$id: nc,
		$vocabulary: rc,
		$dynamicAnchor: ic,
		title: ac,
		type: oc,
		properties: sc
	};
})), uc = /* @__PURE__ */ r({
	$dynamicAnchor: () => mc,
	$id: () => fc,
	$schema: () => dc,
	$vocabulary: () => pc,
	default: () => vc,
	properties: () => _c,
	title: () => hc,
	type: () => gc
}), dc, fc, pc, mc, hc, gc, _c, vc, yc = t((() => {
	dc = "https://json-schema.org/draft/2020-12/schema", fc = "https://json-schema.org/draft/2020-12/meta/meta-data", pc = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, mc = "meta", hc = "Meta-data vocabulary meta-schema", gc = ["object", "boolean"], _c = {
		title: { type: "string" },
		description: { type: "string" },
		default: !0,
		deprecated: {
			type: "boolean",
			default: !1
		},
		readOnly: {
			type: "boolean",
			default: !1
		},
		writeOnly: {
			type: "boolean",
			default: !1
		},
		examples: {
			type: "array",
			items: !0
		}
	}, vc = {
		$schema: dc,
		$id: fc,
		$vocabulary: pc,
		$dynamicAnchor: mc,
		title: hc,
		type: gc,
		properties: _c
	};
})), bc = /* @__PURE__ */ r({
	$defs: () => Oc,
	$dynamicAnchor: () => wc,
	$id: () => Sc,
	$schema: () => xc,
	$vocabulary: () => Cc,
	default: () => kc,
	properties: () => Dc,
	title: () => Tc,
	type: () => Ec
}), xc, Sc, Cc, wc, Tc, Ec, Dc, Oc, kc, Ac = t((() => {
	xc = "https://json-schema.org/draft/2020-12/schema", Sc = "https://json-schema.org/draft/2020-12/meta/validation", Cc = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, wc = "meta", Tc = "Validation vocabulary meta-schema", Ec = ["object", "boolean"], Dc = {
		type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, {
			type: "array",
			items: { $ref: "#/$defs/simpleTypes" },
			minItems: 1,
			uniqueItems: !0
		}] },
		const: !0,
		enum: {
			type: "array",
			items: !0
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: { type: "number" },
		exclusiveMaximum: { type: "number" },
		minimum: { type: "number" },
		exclusiveMinimum: { type: "number" },
		maxLength: { $ref: "#/$defs/nonNegativeInteger" },
		minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		pattern: {
			type: "string",
			format: "regex"
		},
		maxItems: { $ref: "#/$defs/nonNegativeInteger" },
		minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		uniqueItems: {
			type: "boolean",
			default: !1
		},
		maxContains: { $ref: "#/$defs/nonNegativeInteger" },
		minContains: {
			$ref: "#/$defs/nonNegativeInteger",
			default: 1
		},
		maxProperties: { $ref: "#/$defs/nonNegativeInteger" },
		minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" },
		required: { $ref: "#/$defs/stringArray" },
		dependentRequired: {
			type: "object",
			additionalProperties: { $ref: "#/$defs/stringArray" }
		}
	}, Oc = {
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: {
			$ref: "#/$defs/nonNegativeInteger",
			default: 0
		},
		simpleTypes: { enum: [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		] },
		stringArray: {
			type: "array",
			items: { type: "string" },
			uniqueItems: !0,
			default: []
		}
	}, kc = {
		$schema: xc,
		$id: Sc,
		$vocabulary: Cc,
		$dynamicAnchor: wc,
		title: Tc,
		type: Ec,
		properties: Dc,
		$defs: Oc
	};
})), jc = /* @__PURE__ */ i(((t) => {
	Object.defineProperty(t, "__esModule", { value: !0 });
	var n = (ds(), e(es).default), r = (Ss(), e(fs).default), i = (Ms(), e(Cs).default), a = (Hs(), e(Ns).default), o = ($s(), e(Us).default), s = (lc(), e(ec).default), c = (yc(), e(uc).default), l = (Ac(), e(bc).default), u = ["/properties"];
	function d(e) {
		return [
			n,
			r,
			i,
			a,
			o,
			t(this, s),
			c,
			t(this, l)
		].forEach((e) => this.addMetaSchema(e, void 0, !1)), this;
		function t(t, n) {
			return e ? t.$dataMetaSchema(n, u) : n;
		}
	}
	t.default = d;
})), Mc = /* @__PURE__ */ i(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.MissingRefError = e.ValidationError = e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = e.Ajv2020 = void 0;
	var n = to(), r = Zo(), i = $o(), a = jc(), o = "https://json-schema.org/draft/2020-12/schema", s = class extends n.default {
		constructor(e = {}) {
			super({
				...e,
				dynamicRef: !0,
				next: !0,
				unevaluated: !0
			});
		}
		_addVocabularies() {
			super._addVocabularies(), r.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(i.default);
		}
		_addDefaultMetaSchema() {
			super._addDefaultMetaSchema();
			let { $data: e, meta: t } = this.opts;
			t && (a.default.call(this, e), this.refs["http://json-schema.org/schema"] = o);
		}
		defaultMeta() {
			return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
		}
	};
	e.Ajv2020 = s, t.exports = e = s, t.exports.Ajv2020 = s, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
	var c = za();
	Object.defineProperty(e, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return c.KeywordCxt;
		}
	});
	var l = Y();
	Object.defineProperty(e, "_", {
		enumerable: !0,
		get: function() {
			return l._;
		}
	}), Object.defineProperty(e, "str", {
		enumerable: !0,
		get: function() {
			return l.str;
		}
	}), Object.defineProperty(e, "stringify", {
		enumerable: !0,
		get: function() {
			return l.stringify;
		}
	}), Object.defineProperty(e, "nil", {
		enumerable: !0,
		get: function() {
			return l.nil;
		}
	}), Object.defineProperty(e, "Name", {
		enumerable: !0,
		get: function() {
			return l.Name;
		}
	}), Object.defineProperty(e, "CodeGen", {
		enumerable: !0,
		get: function() {
			return l.CodeGen;
		}
	});
	var u = Ba();
	Object.defineProperty(e, "ValidationError", {
		enumerable: !0,
		get: function() {
			return u.default;
		}
	});
	var d = Va();
	Object.defineProperty(e, "MissingRefError", {
		enumerable: !0,
		get: function() {
			return d.default;
		}
	});
})), Nc = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
	function t(e, t) {
		return {
			validate: e,
			compare: t
		};
	}
	e.fullFormats = {
		date: t(a, o),
		time: t(c(!0), l),
		"date-time": t(f(!0), p),
		"iso-time": t(c(), u),
		"iso-date-time": t(f(), m),
		duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
		uri: _,
		"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
		"uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
		url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
		email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
		hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
		ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
		ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
		regex: E,
		uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
		"json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
		"json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
		"relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
		byte: y,
		int32: {
			type: "number",
			validate: S
		},
		int64: {
			type: "number",
			validate: C
		},
		float: {
			type: "number",
			validate: w
		},
		double: {
			type: "number",
			validate: w
		},
		password: !0,
		binary: !0
	}, e.fastFormats = {
		...e.fullFormats,
		date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, o),
		time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
		"date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, p),
		"iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, u),
		"iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, m),
		uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
		"uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
		email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
	}, e.formatNames = Object.keys(e.fullFormats);
	function n(e) {
		return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
	}
	var r = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, i = [
		0,
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	];
	function a(e) {
		let t = r.exec(e);
		if (!t) return !1;
		let a = +t[1], o = +t[2], s = +t[3];
		return o >= 1 && o <= 12 && s >= 1 && s <= (o === 2 && n(a) ? 29 : i[o]);
	}
	function o(e, t) {
		if (e && t) return e > t ? 1 : e < t ? -1 : 0;
	}
	var s = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
	function c(e) {
		return function(t) {
			let n = s.exec(t);
			if (!n) return !1;
			let r = +n[1], i = +n[2], a = +n[3], o = n[4], c = n[5] === "-" ? -1 : 1, l = +(n[6] || 0), u = +(n[7] || 0);
			if (l > 23 || u > 59 || e && !o) return !1;
			if (r <= 23 && i <= 59 && a < 60) return !0;
			let d = i - u * c, f = r - l * c - +(d < 0);
			return (f === 23 || f === -1) && (d === 59 || d === -1) && a < 61;
		};
	}
	function l(e, t) {
		if (!(e && t)) return;
		let n = (/* @__PURE__ */ new Date("2020-01-01T" + e)).valueOf(), r = (/* @__PURE__ */ new Date("2020-01-01T" + t)).valueOf();
		if (n && r) return n - r;
	}
	function u(e, t) {
		if (!(e && t)) return;
		let n = s.exec(e), r = s.exec(t);
		if (n && r) return e = n[1] + n[2] + n[3], t = r[1] + r[2] + r[3], e > t ? 1 : e < t ? -1 : 0;
	}
	var d = /t|\s/i;
	function f(e) {
		let t = c(e);
		return function(e) {
			let n = e.split(d);
			return n.length === 2 && a(n[0]) && t(n[1]);
		};
	}
	function p(e, t) {
		if (!(e && t)) return;
		let n = new Date(e).valueOf(), r = new Date(t).valueOf();
		if (n && r) return n - r;
	}
	function m(e, t) {
		if (!(e && t)) return;
		let [n, r] = e.split(d), [i, a] = t.split(d), s = o(n, i);
		if (s !== void 0) return s || l(r, a);
	}
	var h = /\/|:/, g = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	function _(e) {
		return h.test(e) && g.test(e);
	}
	var v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
	function y(e) {
		return v.lastIndex = 0, v.test(e);
	}
	var b = -(2 ** 31), x = 2 ** 31 - 1;
	function S(e) {
		return Number.isInteger(e) && e <= x && e >= b;
	}
	function C(e) {
		return Number.isInteger(e);
	}
	function w() {
		return !0;
	}
	var T = /[^\\]\\Z/;
	function E(e) {
		if (T.test(e)) return !1;
		try {
			return new RegExp(e), !0;
		} catch {
			return !1;
		}
	}
})), Pc = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var t = io(), n = vo(), r = Fo(), i = Yo(), a = Xo();
	e.default = [
		t.default,
		n.default,
		(0, r.default)(),
		i.default,
		a.metadataVocabulary,
		a.contentVocabulary
	];
})), Fc = /* @__PURE__ */ r({
	$id: () => Lc,
	$schema: () => Ic,
	default: () => Hc,
	definitions: () => zc,
	properties: () => Vc,
	title: () => Rc,
	type: () => Bc
}), Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc = t((() => {
	Ic = "http://json-schema.org/draft-07/schema#", Lc = "http://json-schema.org/draft-07/schema#", Rc = "Core schema meta-schema", zc = {
		schemaArray: {
			type: "array",
			minItems: 1,
			items: { $ref: "#" }
		},
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] },
		simpleTypes: { enum: [
			"array",
			"boolean",
			"integer",
			"null",
			"number",
			"object",
			"string"
		] },
		stringArray: {
			type: "array",
			items: { type: "string" },
			uniqueItems: !0,
			default: []
		}
	}, Bc = ["object", "boolean"], Vc = {
		$id: {
			type: "string",
			format: "uri-reference"
		},
		$schema: {
			type: "string",
			format: "uri"
		},
		$ref: {
			type: "string",
			format: "uri-reference"
		},
		$comment: { type: "string" },
		title: { type: "string" },
		description: { type: "string" },
		default: !0,
		readOnly: {
			type: "boolean",
			default: !1
		},
		examples: {
			type: "array",
			items: !0
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: { type: "number" },
		exclusiveMaximum: { type: "number" },
		minimum: { type: "number" },
		exclusiveMinimum: { type: "number" },
		maxLength: { $ref: "#/definitions/nonNegativeInteger" },
		minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		pattern: {
			type: "string",
			format: "regex"
		},
		additionalItems: { $ref: "#" },
		items: {
			anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }],
			default: !0
		},
		maxItems: { $ref: "#/definitions/nonNegativeInteger" },
		minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		uniqueItems: {
			type: "boolean",
			default: !1
		},
		contains: { $ref: "#" },
		maxProperties: { $ref: "#/definitions/nonNegativeInteger" },
		minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" },
		required: { $ref: "#/definitions/stringArray" },
		additionalProperties: { $ref: "#" },
		definitions: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		properties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			default: {}
		},
		patternProperties: {
			type: "object",
			additionalProperties: { $ref: "#" },
			propertyNames: { format: "regex" },
			default: {}
		},
		dependencies: {
			type: "object",
			additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] }
		},
		propertyNames: { $ref: "#" },
		const: !0,
		enum: {
			type: "array",
			items: !0,
			minItems: 1,
			uniqueItems: !0
		},
		type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, {
			type: "array",
			items: { $ref: "#/definitions/simpleTypes" },
			minItems: 1,
			uniqueItems: !0
		}] },
		format: { type: "string" },
		contentMediaType: { type: "string" },
		contentEncoding: { type: "string" },
		if: { $ref: "#" },
		then: { $ref: "#" },
		else: { $ref: "#" },
		allOf: { $ref: "#/definitions/schemaArray" },
		anyOf: { $ref: "#/definitions/schemaArray" },
		oneOf: { $ref: "#/definitions/schemaArray" },
		not: { $ref: "#" }
	}, Hc = {
		$schema: Ic,
		$id: Lc,
		title: Rc,
		definitions: zc,
		type: Bc,
		properties: Vc,
		default: !0
	};
})), Wc = /* @__PURE__ */ i(((t, n) => {
	Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
	var r = to(), i = Pc(), a = $o(), o = (Uc(), e(Fc).default), s = ["/properties"], c = "http://json-schema.org/draft-07/schema", l = class extends r.default {
		_addVocabularies() {
			super._addVocabularies(), i.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(a.default);
		}
		_addDefaultMetaSchema() {
			if (super._addDefaultMetaSchema(), !this.opts.meta) return;
			let e = this.opts.$data ? this.$dataMetaSchema(o, s) : o;
			this.addMetaSchema(e, c, !1), this.refs["http://json-schema.org/schema"] = c;
		}
		defaultMeta() {
			return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(c) ? c : void 0);
		}
	};
	t.Ajv = l, n.exports = t = l, n.exports.Ajv = l, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = l;
	var u = za();
	Object.defineProperty(t, "KeywordCxt", {
		enumerable: !0,
		get: function() {
			return u.KeywordCxt;
		}
	});
	var d = Y();
	Object.defineProperty(t, "_", {
		enumerable: !0,
		get: function() {
			return d._;
		}
	}), Object.defineProperty(t, "str", {
		enumerable: !0,
		get: function() {
			return d.str;
		}
	}), Object.defineProperty(t, "stringify", {
		enumerable: !0,
		get: function() {
			return d.stringify;
		}
	}), Object.defineProperty(t, "nil", {
		enumerable: !0,
		get: function() {
			return d.nil;
		}
	}), Object.defineProperty(t, "Name", {
		enumerable: !0,
		get: function() {
			return d.Name;
		}
	}), Object.defineProperty(t, "CodeGen", {
		enumerable: !0,
		get: function() {
			return d.CodeGen;
		}
	});
	var f = Ba();
	Object.defineProperty(t, "ValidationError", {
		enumerable: !0,
		get: function() {
			return f.default;
		}
	});
	var p = Va();
	Object.defineProperty(t, "MissingRefError", {
		enumerable: !0,
		get: function() {
			return p.default;
		}
	});
})), Gc = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
	var t = Wc(), n = Y(), r = n.operators, i = {
		formatMaximum: {
			okStr: "<=",
			ok: r.LTE,
			fail: r.GT
		},
		formatMinimum: {
			okStr: ">=",
			ok: r.GTE,
			fail: r.LT
		},
		formatExclusiveMaximum: {
			okStr: "<",
			ok: r.LT,
			fail: r.GTE
		},
		formatExclusiveMinimum: {
			okStr: ">",
			ok: r.GT,
			fail: r.LTE
		}
	};
	e.formatLimitDefinition = {
		keyword: Object.keys(i),
		type: "string",
		schemaType: "string",
		$data: !0,
		error: {
			message: ({ keyword: e, schemaCode: t }) => (0, n.str)`should be ${i[e].okStr} ${t}`,
			params: ({ keyword: e, schemaCode: t }) => (0, n._)`{comparison: ${i[e].okStr}, limit: ${t}}`
		},
		code(e) {
			let { gen: r, data: a, schemaCode: o, keyword: s, it: c } = e, { opts: l, self: u } = c;
			if (!l.validateFormats) return;
			let d = new t.KeywordCxt(c, u.RULES.all.format.definition, "format");
			d.$data ? f() : p();
			function f() {
				let t = r.scopeValue("formats", {
					ref: u.formats,
					code: l.code.formats
				}), i = r.const("fmt", (0, n._)`${t}[${d.schemaCode}]`);
				e.fail$data((0, n.or)((0, n._)`typeof ${i} != "object"`, (0, n._)`${i} instanceof RegExp`, (0, n._)`typeof ${i}.compare != "function"`, m(i)));
			}
			function p() {
				let t = d.schema, i = u.formats[t];
				if (!i || i === !0) return;
				if (typeof i != "object" || i instanceof RegExp || typeof i.compare != "function") throw Error(`"${s}": format "${t}" does not define "compare" function`);
				let a = r.scopeValue("formats", {
					key: t,
					ref: i,
					code: l.code.formats ? (0, n._)`${l.code.formats}${(0, n.getProperty)(t)}` : void 0
				});
				e.fail$data(m(a));
			}
			function m(e) {
				return (0, n._)`${e}.compare(${a}, ${o}) ${i[s].fail} 0`;
			}
		},
		dependencies: ["format"]
	}, e.default = (t) => (t.addKeyword(e.formatLimitDefinition), t);
})), Kc = /* @__PURE__ */ i(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	var n = Nc(), r = Gc(), i = Y(), a = new i.Name("fullFormats"), o = new i.Name("fastFormats"), s = (e, t = { keywords: !0 }) => {
		if (Array.isArray(t)) return c(e, t, n.fullFormats, a), e;
		let [i, s] = t.mode === "fast" ? [n.fastFormats, o] : [n.fullFormats, a];
		return c(e, t.formats || n.formatNames, i, s), t.keywords && (0, r.default)(e), e;
	};
	s.get = (e, t = "full") => {
		let r = (t === "fast" ? n.fastFormats : n.fullFormats)[e];
		if (!r) throw Error(`Unknown format "${e}"`);
		return r;
	};
	function c(e, t, n, r) {
		var a;
		(a = e.opts.code).formats ?? (a.formats = (0, i._)`require("ajv-formats/dist/formats").${r}`);
		for (let r of t) e.addFormat(r, n[r]);
	}
	t.exports = e = s, Object.defineProperty(e, "__esModule", { value: !0 }), e.default = s;
})), qc = ze(), Jc = aa(), Yc = /* @__PURE__ */ n(Ca(), 1), Xc = /* @__PURE__ */ n(Mc(), 1), Zc = /* @__PURE__ */ n(Kc(), 1), Z = Symbol("NOT_RESOLVED");
function Q(e, t) {
	return {
		tagName: e,
		nodeKind: "scalar",
		implicit: t.implicit ?? !1,
		matchByTagPrefix: t.matchByTagPrefix ?? !1,
		implicitFirstChars: t.implicitFirstChars ?? null,
		resolve: t.resolve,
		identify: t.identify,
		represent: t.represent ?? ((e) => String(e)),
		representTagName: t.representTagName ?? (() => e)
	};
}
function Qc(e, t) {
	let n = t.finalize === void 0;
	return {
		tagName: e,
		nodeKind: "sequence",
		implicit: !1,
		matchByTagPrefix: t.matchByTagPrefix ?? !1,
		create: t.create,
		addItem: t.addItem,
		finalize: t.finalize ?? ((e) => e),
		carrierIsResult: n,
		identify: t.identify,
		represent: t.represent ?? ((e) => e),
		representTagName: t.representTagName ?? (() => e)
	};
}
function $c(e, t) {
	let n = t.finalize === void 0;
	return {
		tagName: e,
		nodeKind: "mapping",
		implicit: !1,
		matchByTagPrefix: t.matchByTagPrefix ?? !1,
		create: t.create,
		addPair: t.addPair,
		has: t.has,
		keys: t.keys,
		get: t.get,
		finalize: t.finalize ?? ((e) => e),
		carrierIsResult: n,
		identify: t.identify,
		represent: t.represent ?? ((e) => e),
		representTagName: t.representTagName ?? (() => e)
	};
}
var el = Q("tag:yaml.org,2002:str", {
	resolve: (e) => e,
	identify: (e) => typeof e == "string"
}), tl = [
	"",
	"~",
	"null",
	"Null",
	"NULL"
], nl = Q("tag:yaml.org,2002:null", {
	implicit: !0,
	implicitFirstChars: [
		"",
		"~",
		"n",
		"N"
	],
	resolve: (e) => tl.indexOf(e) === -1 ? Z : null,
	identify: (e) => e === null,
	represent: () => "null"
}), rl = Q("tag:yaml.org,2002:null", {
	implicit: !0,
	implicitFirstChars: ["n"],
	resolve: (e, t) => e === "null" || t && e === "" ? null : Z,
	identify: (e) => e === null,
	represent: () => "null"
}), il = [
	"",
	"~",
	"null",
	"Null",
	"NULL"
], al = Q("tag:yaml.org,2002:null", {
	implicit: !0,
	implicitFirstChars: [
		"",
		"~",
		"n",
		"N"
	],
	resolve: (e) => il.indexOf(e) === -1 ? Z : null,
	identify: (e) => e === null,
	represent: () => "null"
}), ol = [
	"true",
	"True",
	"TRUE"
], sl = [
	"false",
	"False",
	"FALSE"
], cl = Q("tag:yaml.org,2002:bool", {
	implicit: !0,
	implicitFirstChars: [
		"t",
		"T",
		"f",
		"F"
	],
	resolve: (e) => ol.indexOf(e) !== -1 || sl.indexOf(e) === -1 && Z,
	identify: (e) => Object.prototype.toString.call(e) === "[object Boolean]",
	represent: (e) => e ? "true" : "false"
}), ll = ["true"], ul = ["false"], dl = Q("tag:yaml.org,2002:bool", {
	implicit: !0,
	implicitFirstChars: ["t", "f"],
	resolve: (e) => ll.indexOf(e) !== -1 || ul.indexOf(e) === -1 && Z,
	identify: (e) => Object.prototype.toString.call(e) === "[object Boolean]",
	represent: (e) => e ? "true" : "false"
}), fl = [
	"true",
	"True",
	"TRUE",
	"y",
	"Y",
	"yes",
	"Yes",
	"YES",
	"on",
	"On",
	"ON"
], pl = [
	"false",
	"False",
	"FALSE",
	"n",
	"N",
	"no",
	"No",
	"NO",
	"off",
	"Off",
	"OFF"
], ml = Q("tag:yaml.org,2002:bool", {
	implicit: !0,
	implicitFirstChars: [
		"y",
		"Y",
		"n",
		"N",
		"t",
		"T",
		"f",
		"F",
		"o",
		"O"
	],
	resolve: (e) => fl.indexOf(e) !== -1 || pl.indexOf(e) === -1 && Z,
	identify: (e) => Object.prototype.toString.call(e) === "[object Boolean]",
	represent: (e) => e ? "true" : "false"
}), hl = /* @__PURE__ */ RegExp("^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$"), gl = /* @__PURE__ */ RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function _l(e) {
	let t = e, n = 1;
	return (t[0] === "-" || t[0] === "+") && (t[0] === "-" && (n = -1), t = t.slice(1)), t.startsWith("0b") ? n * parseInt(t.slice(2), 2) : t.startsWith("0o") ? n * parseInt(t.slice(2), 8) : t.startsWith("0x") ? n * parseInt(t.slice(2), 16) : n * parseInt(t, 10);
}
function vl(e, t) {
	if (t) {
		if (!gl.test(e)) return Z;
	} else if (!hl.test(e)) return Z;
	let n = _l(e);
	return Number.isFinite(n) ? n : Z;
}
var yl = Q("tag:yaml.org,2002:int", {
	implicit: !0,
	implicitFirstChars: [
		"-",
		"+",
		..."0123456789"
	],
	resolve: vl,
	identify: (e) => Number.isInteger(e) && !Object.is(e, -0) && e.toString(10).indexOf("e") < 0,
	represent: (e) => e.toString(10)
}), bl = /* @__PURE__ */ RegExp("^-?(?:0|[1-9][0-9]*)$"), xl = /* @__PURE__ */ RegExp("^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$");
function Sl(e) {
	let t = e, n = 1;
	return (t[0] === "-" || t[0] === "+") && (t[0] === "-" && (n = -1), t = t.slice(1)), t.startsWith("0b") ? n * parseInt(t.slice(2), 2) : t.startsWith("0o") ? n * parseInt(t.slice(2), 8) : t.startsWith("0x") ? n * parseInt(t.slice(2), 16) : n * parseInt(t, 10);
}
function Cl(e, t) {
	if (t) {
		if (!xl.test(e)) return Z;
	} else if (!bl.test(e)) return Z;
	let n = Sl(e);
	return Number.isFinite(n) ? n : Z;
}
var wl = Q("tag:yaml.org,2002:int", {
	implicit: !0,
	implicitFirstChars: ["-", ..."0123456789"],
	resolve: Cl,
	identify: (e) => Number.isInteger(e) && !Object.is(e, -0) && e.toString(10).indexOf("e") < 0,
	represent: (e) => e.toString(10)
}), Tl = /* @__PURE__ */ RegExp("^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$");
function El(e) {
	let t = e.replace(/_/g, ""), n = 1;
	if ((t[0] === "-" || t[0] === "+") && (t[0] === "-" && (n = -1), t = t.slice(1)), t.startsWith("0b")) return n * parseInt(t.slice(2), 2);
	if (t.startsWith("0x")) return n * parseInt(t.slice(2), 16);
	if (t.includes(":")) {
		let e = 0;
		for (let n of t.split(":")) e = e * 60 + Number(n);
		return n * e;
	}
	return t !== "0" && t[0] === "0" ? n * parseInt(t, 8) : n * parseInt(t, 10);
}
function Dl(e) {
	if (!Tl.test(e)) return Z;
	let t = El(e);
	return Number.isFinite(t) ? t : Z;
}
var Ol = Q("tag:yaml.org,2002:int", {
	implicit: !0,
	implicitFirstChars: [
		"-",
		"+",
		..."0123456789"
	],
	resolve: Dl,
	identify: (e) => Number.isInteger(e) && !Object.is(e, -0) && e.toString(10).indexOf("e") < 0,
	represent: (e) => e.toString(10)
}), kl = /* @__PURE__ */ RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), Al = /* @__PURE__ */ RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function jl(e) {
	if (!kl.test(e)) return Z;
	let t = e.toLowerCase(), n = t[0] === "-" ? -1 : 1;
	if ("+-".includes(t[0]) && (t = t.slice(1)), t === ".inf") return n === 1 ? Infinity : -Infinity;
	if (t === ".nan") return NaN;
	let r = n * parseFloat(t);
	return Number.isFinite(r) || Al.test(e) ? r : Z;
}
function Ml(e) {
	if (isNaN(e)) return ".nan";
	if (e === Infinity) return ".inf";
	if (e === -Infinity) return "-.inf";
	if (Object.is(e, -0)) return "-0.0";
	let t = e.toString(10);
	return /^[-+]?[0-9]+e/.test(t) ? t.replace("e", ".e") : t;
}
var Nl = Q("tag:yaml.org,2002:float", {
	implicit: !0,
	implicitFirstChars: [
		"-",
		"+",
		".",
		..."0123456789"
	],
	resolve: jl,
	identify: (e) => typeof e == "number" && (!Number.isInteger(e) || Object.is(e, -0) || e.toString(10).indexOf("e") >= 0),
	represent: Ml
}), Pl = /* @__PURE__ */ RegExp("^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$"), Fl = /* @__PURE__ */ RegExp("^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Il(e, t) {
	if (t) {
		if (!Fl.test(e)) return Z;
		let t = e.toLowerCase(), n = t[0] === "-" ? -1 : 1;
		if ("+-".includes(t[0]) && (t = t.slice(1)), t === ".inf") return n === 1 ? Infinity : -Infinity;
		if (t === ".nan") return NaN;
		let r = n * parseFloat(t);
		return Number.isFinite(r) ? r : Z;
	}
	if (!Pl.test(e)) return Z;
	let n = Number(e);
	return Number.isFinite(n) ? n : Z;
}
function Ll(e) {
	if (isNaN(e)) return ".nan";
	if (e === Infinity) return ".inf";
	if (e === -Infinity) return "-.inf";
	if (Object.is(e, -0)) return "-0.0";
	let t = e.toString(10);
	return /^[-+]?[0-9]+e/.test(t) ? t.replace("e", ".e") : t;
}
var Rl = Q("tag:yaml.org,2002:float", {
	implicit: !0,
	implicitFirstChars: ["-", ..."0123456789"],
	resolve: Il,
	identify: (e) => typeof e == "number" && (!Number.isInteger(e) || Object.is(e, -0) || e.toString(10).indexOf("e") >= 0),
	represent: Ll
}), zl = /* @__PURE__ */ RegExp("^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"), Bl = /* @__PURE__ */ RegExp("^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
function Vl(e) {
	if (!zl.test(e)) return Z;
	let t = e.toLowerCase().replace(/_/g, ""), n = t[0] === "-" ? -1 : 1;
	if ("+-".includes(t[0]) && (t = t.slice(1)), t === ".inf") return n === 1 ? Infinity : -Infinity;
	if (t === ".nan") return NaN;
	let r = 0;
	if (t.includes(":")) {
		for (let e of t.split(":")) r = r * 60 + Number(e);
		r *= n;
	} else r = n * parseFloat(t);
	return Number.isFinite(r) || Bl.test(e) ? r : Z;
}
function Hl(e) {
	if (isNaN(e)) return ".nan";
	if (e === Infinity) return ".inf";
	if (e === -Infinity) return "-.inf";
	if (Object.is(e, -0)) return "-0.0";
	let t = e.toString(10);
	return /^[-+]?[0-9]+e/.test(t) ? t.replace("e", ".e") : t;
}
var Ul = Q("tag:yaml.org,2002:float", {
	implicit: !0,
	implicitFirstChars: [
		"-",
		"+",
		".",
		..."0123456789"
	],
	resolve: Vl,
	identify: (e) => typeof e == "number" && (!Number.isInteger(e) || Object.is(e, -0) || e.toString(10).indexOf("e") >= 0),
	represent: Hl
}), Wl = Q("tag:yaml.org,2002:merge", {
	implicit: !0,
	implicitFirstChars: ["<"],
	resolve: (e, t) => e === "<<" || t && e === "" ? "<<" : Z,
	identify: () => !1
}), Gl = /^[A-Za-z0-9+/]*={0,2}$/;
function Kl(e) {
	let t = e.replace(/\s/g, "");
	if (t.length % 4 != 0 || !Gl.test(t)) return Z;
	let n = atob(t), r = new Uint8Array(n.length);
	for (let e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
	return r;
}
function ql(e) {
	let t = "";
	for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
	return btoa(t);
}
var Jl = Q("tag:yaml.org,2002:binary", {
	resolve: Kl,
	identify: (e) => Object.prototype.toString.call(e) === "[object Uint8Array]",
	represent: ql
}), Yl = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), Xl = /* @__PURE__ */ RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function Zl(e, t, n, r = 0, i = 0, a = 0, o = 0) {
	let s = new Date(Date.UTC(e, t, n, r, i, a, o));
	return s.setUTCFullYear(e, t, n), s;
}
function Ql(e) {
	let t = Yl.exec(e);
	if (t === null && (t = Xl.exec(e)), t === null) return Z;
	let n = +t[1], r = t[2] - 1, i = +t[3];
	if (!t[4]) {
		let e = Zl(n, r, i);
		return e.getUTCFullYear() !== n || e.getUTCMonth() !== r || e.getUTCDate() !== i ? Z : e;
	}
	let a = +t[4], o = +t[5], s = +t[6], c = 0;
	if (a > 23 || o > 59 || s > 59) return Z;
	if (t[7]) {
		let e = t[7].slice(0, 3);
		for (; e.length < 3;) e += "0";
		c = +e;
	}
	let l = Zl(n, r, i, a, o, s, c);
	if (l.getUTCFullYear() !== n || l.getUTCMonth() !== r || l.getUTCDate() !== i) return Z;
	if (t[9]) {
		let e = +t[10], n = +(t[11] || 0);
		if (e > 23 || n > 59) return Z;
		let r = (e * 60 + n) * 6e4;
		l.setTime(l.getTime() - (t[9] === "-" ? -r : r));
	}
	return l;
}
var $l = Q("tag:yaml.org,2002:timestamp", {
	implicit: !0,
	implicitFirstChars: [..."0123456789"],
	resolve: Ql,
	identify: (e) => e instanceof Date,
	represent: (e) => e.toISOString()
}), eu = Qc("tag:yaml.org,2002:seq", {
	create: () => [],
	addItem: (e, t) => {
		e.push(t);
	},
	identify: Array.isArray
});
function tu(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !1;
	let t = Object.getPrototypeOf(e);
	return t === null || t === Object.prototype;
}
var nu = Qc("tag:yaml.org,2002:omap", {
	create: () => ({
		list: [],
		seen: /* @__PURE__ */ new Set()
	}),
	addItem: (e, t) => {
		let n;
		if (t instanceof Map) {
			if (t.size !== 1) return "cannot resolve an ordered map item";
			n = t.keys().next().value;
		} else if (tu(t)) {
			let e = Object.keys(t);
			if (e.length !== 1) return "cannot resolve an ordered map item";
			n = e[0];
		} else return "cannot resolve an ordered map item";
		return e.seen.has(n) ? "duplicate key in ordered map" : (e.seen.add(n), e.list.push(t), "");
	},
	finalize: (e) => e.list,
	identify: () => !1
}), ru = Qc("tag:yaml.org,2002:pairs", {
	create: () => [],
	addItem: (e, t) => {
		if (t instanceof Map) return t.size === 1 ? (e.push(t.entries().next().value), "") : "cannot resolve a pairs item";
		if (Object.prototype.toString.call(t) !== "[object Object]") return "cannot resolve a pairs item";
		let n = t, r = Object.keys(n);
		return r.length === 1 ? (e.push([r[0], n[r[0]]]), "") : "cannot resolve a pairs item";
	},
	identify: () => !1
}), iu = $c("tag:yaml.org,2002:map", {
	create: () => ({}),
	identify: tu,
	represent: (e) => {
		let t = /* @__PURE__ */ new Map();
		for (let n of Object.keys(e)) t.set(n, e[n]);
		return t;
	},
	addPair: (e, t, n) => {
		if (typeof t == "object" && t) return "object-based map does not support complex keys";
		let r = String(t);
		return r === "__proto__" ? Object.defineProperty(e, r, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = n, "";
	},
	has: (e, t) => typeof t == "object" && t ? !1 : Object.prototype.hasOwnProperty.call(e, String(t)),
	keys: (e) => Object.keys(e),
	get: (e, t) => {
		let n = String(t);
		return Object.prototype.hasOwnProperty.call(e, n) ? e[n] : null;
	}
}), au = $c("tag:yaml.org,2002:set", {
	create: () => /* @__PURE__ */ new Set(),
	identify: (e) => e instanceof Set,
	represent: (e) => {
		let t = /* @__PURE__ */ new Map();
		for (let n of e) t.set(n, null);
		return t;
	},
	addPair: (e, t, n) => n === null ? (e.add(t), "") : "cannot resolve a set item",
	has: (e, t) => e.has(t),
	keys: (e) => e.keys(),
	get: () => null
});
function ou() {
	return {
		scalar: Object.create(null),
		sequence: Object.create(null),
		mapping: Object.create(null)
	};
}
function su() {
	return {
		scalar: [],
		sequence: [],
		mapping: []
	};
}
function cu(e) {
	let t = [];
	for (let n of e) {
		let e = t.length;
		for (let r = 0; r < t.length; r++) {
			let i = t[r];
			if (i.nodeKind === n.nodeKind && i.tagName === n.tagName && i.matchByTagPrefix === n.matchByTagPrefix) {
				e = r;
				break;
			}
		}
		t[e] = n;
	}
	return t;
}
var lu = class e {
	tags;
	implicitScalarTags;
	implicitScalarByFirstChar;
	implicitScalarAnyFirstChar;
	defaultScalarTag;
	defaultSequenceTag;
	defaultMappingTag;
	exact;
	prefix;
	constructor(e) {
		let t = cu(e), n = [], r = ou(), i = su();
		for (let e of t) {
			if (e.nodeKind === "scalar" && e.implicit) {
				if (e.matchByTagPrefix) throw Error("Implicit scalar tags cannot match by tag prefix");
				n.push(e);
			}
			switch (e.nodeKind) {
				case "scalar":
					e.matchByTagPrefix ? i.scalar.push(e) : r.scalar[e.tagName] = e;
					break;
				case "sequence":
					e.matchByTagPrefix ? i.sequence.push(e) : r.sequence[e.tagName] = e;
					break;
				case "mapping": e.matchByTagPrefix ? i.mapping.push(e) : r.mapping[e.tagName] = e;
			}
		}
		let a = n.filter((e) => e.implicitFirstChars === null), o = /* @__PURE__ */ new Set();
		for (let e of n) if (e.implicitFirstChars !== null) for (let t of e.implicitFirstChars) o.add(t);
		let s = /* @__PURE__ */ new Map();
		for (let e of o) s.set(e, n.filter((t) => t.implicitFirstChars === null || t.implicitFirstChars.indexOf(e) !== -1));
		let c = r.scalar["tag:yaml.org,2002:str"];
		if (!c) throw Error("schema does not define the default scalar tag (tag:yaml.org,2002:str)");
		this.tags = t, this.implicitScalarTags = n, this.implicitScalarByFirstChar = s, this.implicitScalarAnyFirstChar = a, this.defaultScalarTag = c, this.defaultSequenceTag = r.sequence["tag:yaml.org,2002:seq"], this.defaultMappingTag = r.mapping["tag:yaml.org,2002:map"], this.exact = r, this.prefix = i;
	}
	lookupScalarTag(e) {
		let t = this.exact.scalar[e];
		if (t) return t;
		for (let t of this.prefix.scalar) if (e.startsWith(t.tagName)) return t;
	}
	lookupSequenceTag(e) {
		let t = this.exact.sequence[e];
		if (t) return t;
		for (let t of this.prefix.sequence) if (e.startsWith(t.tagName)) return t;
	}
	lookupMappingTag(e) {
		let t = this.exact.mapping[e];
		if (t) return t;
		for (let t of this.prefix.mapping) if (e.startsWith(t.tagName)) return t;
	}
	resolveImplicitScalarTag(e) {
		let t = this.implicitScalarByFirstChar.get(e.charAt(0)) ?? this.implicitScalarAnyFirstChar;
		for (let n of t) {
			let t = n.resolve(e, !1, n.tagName);
			if (t !== Z) return {
				value: t,
				tag: n
			};
		}
		let n = this.defaultScalarTag;
		return {
			value: n.resolve(e, !1, n.tagName),
			tag: n
		};
	}
	withTags(...t) {
		let n = [];
		for (let e of t) n = n.concat(e);
		return new e([...this.tags, ...n]);
	}
}, uu = new lu([
	el,
	eu,
	iu
]);
new lu([
	...uu.tags,
	rl,
	dl,
	wl,
	Rl
]);
var du = new lu([
	...uu.tags,
	nl,
	cl,
	yl,
	Nl
]);
new lu([
	...uu.tags,
	al,
	ml,
	Ol,
	Ul,
	$l,
	Wl,
	Jl,
	nu,
	ru,
	au
]).withTags({
	...Ol,
	resolve: (e, t, n) => {
		let r = Ol.resolve(e, t, n);
		return r === Z ? yl.resolve(e, t, n) : r;
	}
}, {
	...Ul,
	resolve: (e, t, n) => {
		let r = Ul.resolve(e, t, n);
		return r === Z ? Nl.resolve(e, t, n) : r;
	}
}), $c("tag:yaml.org,2002:map", {
	create: () => /* @__PURE__ */ new Map(),
	addPair: (e, t, n) => (e.set(t, n), ""),
	has: (e, t) => e.has(t),
	keys: (e) => e.keys(),
	get: (e, t) => e.get(t),
	identify: (e) => e instanceof Map || tu(e),
	represent: (e) => {
		if (e instanceof Map) return e;
		let t = /* @__PURE__ */ new Map(), n = e;
		for (let e of Object.keys(n)) t.set(e, n[e]);
		return t;
	}
});
function fu(e) {
	if (Array.isArray(e)) {
		let t = Array.prototype.slice.call(e);
		for (let e = 0; e < t.length; e++) {
			if (Array.isArray(t[e])) return null;
			typeof t[e] == "object" && Object.prototype.toString.call(t[e]) === "[object Object]" && (t[e] = "[object Object]");
		}
		return String(t);
	}
	return typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" ? "[object Object]" : String(e);
}
$c("tag:yaml.org,2002:map", {
	create: () => ({}),
	identify: tu,
	represent: (e) => {
		let t = /* @__PURE__ */ new Map();
		for (let n of Object.keys(e)) t.set(n, e[n]);
		return t;
	},
	addPair: (e, t, n) => {
		let r = fu(t);
		return r === null ? "nested arrays are not supported inside keys" : (r === "__proto__" ? Object.defineProperty(e, r, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : e[r] = n, "");
	},
	has: (e, t) => {
		let n = fu(t);
		return n !== null && Object.prototype.hasOwnProperty.call(e, n);
	},
	keys: (e) => Object.keys(e),
	get: (e, t) => {
		let n = String(t);
		return Object.prototype.hasOwnProperty.call(e, n) ? e[n] : null;
	}
});
var pu = {
	DOCUMENT: 1,
	SEQUENCE: 2,
	MAPPING: 3,
	SCALAR: 4,
	ALIAS: 5,
	POP: 6
}, $ = {
	PLAIN: 1,
	SINGLE_QUOTED: 2,
	DOUBLE_QUOTED: 3,
	LITERAL_BLOCK: 4,
	FOLDED_BLOCK: 5
}, mu = {
	BLOCK: 1,
	FLOW: 2
}, hu = {
	CLIP: 1,
	STRIP: 2,
	KEEP: 3
};
function gu(e) {
	switch (e) {
		case 48: return "\0";
		case 97: return "\x07";
		case 98: return "\b";
		case 116: return "	";
		case 9: return "	";
		case 110: return "\n";
		case 118: return "\v";
		case 102: return "\f";
		case 114: return "\r";
		case 101: return "\x1B";
		case 32: return " ";
		case 34: return "\"";
		case 47: return "/";
		case 92: return "\\";
		case 78: return "";
		case 95: return "\xA0";
		case 76: return "\u2028";
		case 80: return "\u2029";
		default: return "";
	}
}
var _u = Array(256), vu = Array(256);
for (let e = 0; e < 256; e++) _u[e] = +!!gu(e), vu[e] = gu(e);
Object.assign(Object.create(null), {
	"!": "!",
	"!!": "tag:yaml.org,2002:"
});
var yu = {
	filename: "",
	schema: du,
	json: !1,
	maxTotalMergeKeys: 1e4,
	maxAliases: -1
}, bu = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`, xu = String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`;
RegExp(`^(?:${bu})*$`), RegExp(`^(?:${xu})+$`), RegExp(`^(?:!(?:${bu})*|${xu}(?:${bu})*)$`), { ...yu };
function Su(e, t) {
	return !!(e & 1 << t);
}
var Cu = {
	applyQuoteFlowKeysOption: Tu,
	doubleQuoteForInvisibles: Eu,
	doubleQuoteWhitespaceOnly: Du,
	applyForceQuotesOption: Ou,
	tryLongOrMultilineAsBlock: ku,
	quoteInvalidPlain: Au,
	fallbackToDoubleQuoted: ju
};
function wu(e) {
	return e.presenterOptions.quoteStyle === "single" && Su(e.allowedStylesMask, $.SINGLE_QUOTED) ? $.SINGLE_QUOTED : $.DOUBLE_QUOTED;
}
function Tu(e) {
	e.presenterOptions.quoteFlowKeys && e.isKey && e.flowOnly && e.style === $.PLAIN && (e.style = $.DOUBLE_QUOTED);
}
function Eu(e) {
	e.style === $.PLAIN && /[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value) && (e.style = $.DOUBLE_QUOTED);
}
function Du(e) {
	e.style === $.PLAIN && /^\s+$/.test(e.node.value) && (e.style = $.DOUBLE_QUOTED);
}
function Ou(e) {
	e.presenterOptions.forceQuotes && (e.isKey || e.style !== $.PLAIN || e.node.tag === e.presenterOptions.schema.defaultScalarTag.tagName && (e.style = e.node.value.includes("\n") ? $.DOUBLE_QUOTED : wu(e)));
}
function ku(e) {
	if (e.style !== $.PLAIN || e.isKey) return;
	let t = e.node.value, n = t.indexOf("\n") !== -1;
	if (!Su(e.allowedStylesMask, $.LITERAL_BLOCK)) {
		n && (e.style = $.DOUBLE_QUOTED);
		return;
	}
	let r = e.presenterOptions.lineWidth;
	if (r === -1) {
		n && (e.style = $.LITERAL_BLOCK);
		return;
	}
	let i = Math.max(Math.min(r, 40), r - e.shiftOfContent), a = 0, o = !1;
	for (; a <= t.length;) {
		let e = t.length, n = t.indexOf("\n", a);
		n !== -1 && (e = n);
		let r = t.slice(a, e);
		if (r.length > i && r[0] !== " " && / [^ \t]/.test(r) && (o = !0), n === -1) break;
		a = n + 1;
	}
	o ? e.style = $.FOLDED_BLOCK : n && (e.style = $.LITERAL_BLOCK);
}
function Au(e) {
	e.style === $.PLAIN && !Su(e.allowedStylesMask, $.PLAIN) && (e.style = wu(e));
}
function ju(e) {
	Su(e.allowedStylesMask, e.style) || (e.style = $.DOUBLE_QUOTED);
}
var Mu = "[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]", Nu = "[\\n\\r]", Pu = "\\uFEFF", Fu = "[ \\t]", Iu = `(?:(?!(?:${Nu}|${Pu}))${Mu})`, Lu = `(?:(?!${Fu})${Iu})`, Ru = "[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]", zu = "[-?:,\\[\\]{}#&*!|>'\"%@`]", Bu = "[,\\[\\]{}]", Vu = Lu, Hu = `(?:(?!${Bu})${Lu})`, Uu = `(?:(?:(?!${zu})${Lu})|[?:-](?=${Vu}))`, Wu = `(?:(?:(?!${zu})${Lu})|[?:-](?=${Hu}))`, Gu = `(?:(?:(?![:#])${Vu})|:(?=${Vu}))#*`, Ku = `(?:(?:(?![:#])${Hu})|:(?=${Hu}))#*`, qu = `(?:${Fu}*${Gu})*`, Ju = `(?:${Fu}*${Ku})*`, Yu = `${Uu}#*${qu}`, Xu = `${Wu}#*${Ju}`, Zu = Yu, Qu = Xu, $u = `\\n+${Gu}${qu}`, ed = `\\n+${Ku}${Ju}`, td = `${Yu}(?:${$u})*`, nd = `${Xu}(?:${ed})*`;
RegExp(`^(?:${td})$`, "u"), RegExp(`^(?:${nd})$`, "u"), RegExp(`^(?:${Zu})$`, "u"), RegExp(`^(?:${Qu})$`, "u"), RegExp(`^(?:${Ru})*$`, "u"), RegExp(`^(?:${Ru}|\\n)*$`, "u"), RegExp(`^(?:${Iu}|\\n)*$`, "u"), Object.keys(Cu).map((e) => Reflect.get(Cu, e)), pu.DOCUMENT, pu.SEQUENCE, pu.MAPPING, pu.SCALAR, pu.ALIAS, pu.POP, $.PLAIN, $.SINGLE_QUOTED, $.DOUBLE_QUOTED, $.LITERAL_BLOCK, $.FOLDED_BLOCK, mu.BLOCK, mu.FLOW, hu.CLIP, hu.STRIP, hu.KEEP;
//#endregion
//#region ../../node_modules/.pnpm/@openworkflowspec+sdk@1.0.3-alpha8/node_modules/@openworkflowspec/sdk/index.mjs
var rd = ">=1.0.0-0 <=1.0.3", id = { preValidation(e) {
	let t = e?.document?.dsl;
	if (!(typeof t == "string" && (0, Yc.default)(t, rd, { includePrerelease: !0 }))) throw Error(`'Workflow' is invalid - The DSL version of the workflow '${t}' does not satisfy the DSL version range supported by this SDK '${rd}'.`);
} }, ad = { postValidation(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = Object.keys(r)[0];
		t.has(e) ? n.add(e) : t.add(e);
	}
	if (n.size > 0) {
		let e = [...n].map((e) => `'${e}'`).join(", ");
		throw Error(`'TaskList' is invalid - The following task names are duplicated: ${e}.`);
	}
} }, od = /* @__PURE__ */ new Map(), sd = (e, t) => {
	od.set(e, t);
};
sd("Workflow", id), sd("TaskList", ad);
var cd = {
	$id: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json",
	$schema: "https://json-schema.org/draft/2020-12/schema",
	description: "Open Workflow Specification DSL - Workflow Schema.",
	type: "object",
	required: ["document", "do"],
	properties: {
		document: {
			type: "object",
			title: "Document",
			description: "Documents the workflow.",
			unevaluatedProperties: !1,
			properties: {
				dsl: {
					type: "string",
					pattern: "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
					title: "WorkflowDSL",
					description: "The version of the DSL used by the workflow."
				},
				namespace: {
					type: "string",
					pattern: "^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$",
					title: "WorkflowNamespace",
					description: "The workflow's namespace."
				},
				name: {
					type: "string",
					pattern: "^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?$",
					title: "WorkflowName",
					description: "The workflow's name."
				},
				version: {
					type: "string",
					pattern: "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
					title: "WorkflowVersion",
					description: "The workflow's semantic version."
				},
				title: {
					type: "string",
					title: "WorkflowTitle",
					description: "The workflow's title."
				},
				summary: {
					type: "string",
					title: "WorkflowSummary",
					description: "The workflow's Markdown summary."
				},
				tags: {
					type: "object",
					title: "WorkflowTags",
					description: "A key/value mapping of the workflow's tags, if any.",
					additionalProperties: !0
				},
				metadata: {
					type: "object",
					title: "WorkflowMetadata",
					description: "Holds additional information about the workflow.",
					additionalProperties: !0
				}
			},
			required: [
				"dsl",
				"namespace",
				"name",
				"version"
			]
		},
		input: {
			$ref: "#/$defs/input",
			title: "Input",
			description: "Configures the workflow's input."
		},
		use: {
			type: "object",
			title: "Use",
			description: "Defines the workflow's reusable components.",
			unevaluatedProperties: !1,
			properties: {
				authentications: {
					type: "object",
					title: "UseAuthentications",
					description: "The workflow's reusable authentication policies.",
					additionalProperties: { $ref: "#/$defs/authenticationPolicy" }
				},
				errors: {
					type: "object",
					title: "UseErrors",
					description: "The workflow's reusable errors.",
					additionalProperties: { $ref: "#/$defs/error" }
				},
				extensions: {
					type: "array",
					title: "UseExtensions",
					description: "The workflow's extensions.",
					items: {
						type: "object",
						title: "ExtensionItem",
						minProperties: 1,
						maxProperties: 1,
						additionalProperties: { $ref: "#/$defs/extension" }
					}
				},
				functions: {
					type: "object",
					title: "UseFunctions",
					description: "The workflow's reusable functions.",
					additionalProperties: { $ref: "#/$defs/task" }
				},
				retries: {
					type: "object",
					title: "UseRetries",
					description: "The workflow's reusable retry policies.",
					additionalProperties: { $ref: "#/$defs/retryPolicy" }
				},
				secrets: {
					type: "array",
					title: "UseSecrets",
					description: "The workflow's reusable secrets.",
					items: {
						type: "string",
						description: "The workflow's secrets."
					}
				},
				timeouts: {
					type: "object",
					title: "UseTimeouts",
					description: "The workflow's reusable timeouts.",
					additionalProperties: { $ref: "#/$defs/timeout" }
				},
				catalogs: {
					type: "object",
					title: "UseCatalogs",
					description: "The workflow's reusable catalogs.",
					additionalProperties: { $ref: "#/$defs/catalog" }
				}
			}
		},
		do: {
			$ref: "#/$defs/taskList",
			title: "Do",
			description: "Defines the task(s) the workflow must perform."
		},
		timeout: {
			title: "DoTimeout",
			oneOf: [{
				$ref: "#/$defs/timeout",
				title: "TimeoutDefinition",
				description: "The workflow's timeout configuration, if any."
			}, {
				type: "string",
				title: "TimeoutReference",
				description: "The name of the workflow's timeout, if any."
			}]
		},
		output: {
			$ref: "#/$defs/output",
			title: "Output",
			description: "Configures the workflow's output."
		},
		schedule: {
			type: "object",
			title: "Schedule",
			description: "Schedules the workflow.",
			unevaluatedProperties: !1,
			properties: {
				every: {
					$ref: "#/$defs/duration",
					title: "ScheduleEvery",
					description: "Specifies the duration of the interval at which the workflow should be executed."
				},
				cron: {
					type: "string",
					title: "ScheduleCron",
					description: "Specifies the schedule using a cron expression, e.g., '0 0 * * *' for daily at midnight."
				},
				after: {
					$ref: "#/$defs/duration",
					title: "ScheduleAfter",
					description: "Specifies a delay duration that the workflow must wait before starting again after it completes."
				},
				on: {
					$ref: "#/$defs/eventConsumptionStrategy",
					title: "ScheduleOn",
					description: "Specifies the events that trigger the workflow execution."
				}
			}
		}
	},
	$defs: {
		taskList: {
			title: "TaskList",
			description: "List of named tasks to perform.",
			type: "array",
			items: {
				type: "object",
				title: "TaskItem",
				minProperties: 1,
				maxProperties: 1,
				additionalProperties: { $ref: "#/$defs/task" }
			}
		},
		taskBase: {
			type: "object",
			title: "TaskBase",
			description: "An object inherited by all tasks.",
			properties: {
				if: {
					type: "string",
					title: "TaskBaseIf",
					description: "A runtime expression, if any, used to determine whether or not the task should be run."
				},
				input: {
					$ref: "#/$defs/input",
					title: "TaskBaseInput",
					description: "Configure the task's input."
				},
				output: {
					$ref: "#/$defs/output",
					title: "TaskBaseOutput",
					description: "Configure the task's output."
				},
				export: {
					$ref: "#/$defs/export",
					title: "TaskBaseExport",
					description: "Export task output to context."
				},
				timeout: {
					title: "TaskTimeout",
					oneOf: [{
						$ref: "#/$defs/timeout",
						title: "TaskTimeoutDefinition",
						description: "The task's timeout configuration, if any."
					}, {
						type: "string",
						title: "TaskTimeoutReference",
						description: "The name of the task's timeout, if any."
					}]
				},
				then: {
					$ref: "#/$defs/flowDirective",
					title: "TaskBaseThen",
					description: "The flow directive to be performed upon completion of the task."
				},
				metadata: {
					type: "object",
					title: "TaskMetadata",
					description: "Holds additional information about the task.",
					additionalProperties: !0
				}
			}
		},
		task: {
			title: "Task",
			description: "A discrete unit of work that contributes to achieving the overall objectives defined by the workflow.",
			unevaluatedProperties: !1,
			oneOf: [
				{ $ref: "#/$defs/callTask" },
				{ $ref: "#/$defs/doTask" },
				{ $ref: "#/$defs/forkTask" },
				{ $ref: "#/$defs/emitTask" },
				{ $ref: "#/$defs/forTask" },
				{ $ref: "#/$defs/listenTask" },
				{ $ref: "#/$defs/raiseTask" },
				{ $ref: "#/$defs/runTask" },
				{ $ref: "#/$defs/setTask" },
				{ $ref: "#/$defs/switchTask" },
				{ $ref: "#/$defs/tryTask" },
				{ $ref: "#/$defs/waitTask" }
			]
		},
		callTask: {
			title: "CallTask",
			description: "Defines the call to perform.",
			oneOf: [
				{
					title: "CallAsyncAPI",
					description: "Defines the AsyncAPI call to perform.",
					type: "object",
					required: ["call", "with"],
					unevaluatedProperties: !1,
					allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
						call: {
							type: "string",
							const: "asyncapi"
						},
						with: {
							type: "object",
							title: "AsyncApiArguments",
							description: "The Async API call arguments.",
							properties: {
								document: {
									$ref: "#/$defs/externalResource",
									title: "AsyncAPIDocument",
									description: "The document that defines the AsyncAPI operation to call."
								},
								channel: {
									type: "string",
									title: "With",
									description: "The name of the channel on which to perform the operation. Used only in case the referenced document uses AsyncAPI v2.6.0."
								},
								operation: {
									type: "string",
									title: "AsyncAPIOperation",
									description: "A reference to the AsyncAPI operation to call."
								},
								server: {
									$ref: "#/$defs/asyncApiServer",
									title: "AsyncAPIServer",
									description: "An object used to configure to the server to call the specified AsyncAPI operation on."
								},
								protocol: {
									type: "string",
									title: "AsyncApiProtocol",
									description: "The protocol to use to select the target server.",
									enum: [
										"amqp",
										"amqp1",
										"anypointmq",
										"googlepubsub",
										"http",
										"ibmmq",
										"jms",
										"kafka",
										"mercure",
										"mqtt",
										"mqtt5",
										"nats",
										"pulsar",
										"redis",
										"sns",
										"solace",
										"sqs",
										"stomp",
										"ws"
									]
								},
								message: {
									$ref: "#/$defs/asyncApiOutboundMessage",
									title: "AsyncApiMessage",
									description: "An object used to configure the message to publish using the target operation."
								},
								subscription: {
									$ref: "#/$defs/asyncApiSubscription",
									title: "AsyncApiSubscription",
									description: "An object used to configure the subscription to messages consumed using the target operation."
								},
								authentication: {
									$ref: "#/$defs/referenceableAuthenticationPolicy",
									title: "AsyncAPIAuthentication",
									description: "The authentication policy, if any, to use when calling the AsyncAPI operation."
								}
							},
							oneOf: [
								{ required: [
									"document",
									"operation",
									"message"
								] },
								{ required: [
									"document",
									"operation",
									"subscription"
								] },
								{ required: [
									"document",
									"channel",
									"message"
								] },
								{ required: [
									"document",
									"channel",
									"subscription"
								] }
							],
							unevaluatedProperties: !1
						}
					} }]
				},
				{
					title: "CallGRPC",
					description: "Defines the GRPC call to perform.",
					type: "object",
					unevaluatedProperties: !1,
					required: ["call", "with"],
					allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
						call: {
							type: "string",
							const: "grpc"
						},
						with: {
							type: "object",
							title: "GRPCArguments",
							description: "The GRPC call arguments.",
							properties: {
								proto: {
									$ref: "#/$defs/externalResource",
									title: "WithGRPCProto",
									description: "The proto resource that describes the GRPC service to call."
								},
								service: {
									type: "object",
									title: "WithGRPCService",
									unevaluatedProperties: !1,
									properties: {
										name: {
											type: "string",
											title: "WithGRPCServiceName",
											description: "The name of the GRPC service to call."
										},
										host: {
											type: "string",
											title: "WithGRPCServiceHost",
											description: "The hostname of the GRPC service to call.",
											pattern: "^[a-zA-Z0-9](?:[a-zA-Z0-9-.]{0,61}[a-zA-Z0-9])?$"
										},
										port: {
											type: "integer",
											title: "WithGRPCServicePort",
											description: "The port number of the GRPC service to call.",
											minimum: 0,
											maximum: 65535
										},
										authentication: {
											$ref: "#/$defs/referenceableAuthenticationPolicy",
											title: "WithGRPCServiceAuthentication",
											description: "The endpoint's authentication policy, if any."
										}
									},
									required: ["name", "host"]
								},
								method: {
									type: "string",
									title: "WithGRPCMethod",
									description: "The name of the method to call on the defined GRPC service."
								},
								arguments: {
									type: "object",
									title: "WithGRPCArguments",
									description: "The arguments, if any, to call the method with.",
									additionalProperties: !0
								}
							},
							required: [
								"proto",
								"service",
								"method"
							],
							unevaluatedProperties: !1
						}
					} }]
				},
				{
					title: "CallHTTP",
					description: "Defines the HTTP call to perform.",
					type: "object",
					unevaluatedProperties: !1,
					required: ["call", "with"],
					allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
						call: {
							type: "string",
							const: "http"
						},
						with: {
							type: "object",
							title: "HTTPArguments",
							description: "The HTTP call arguments.",
							properties: {
								method: {
									type: "string",
									title: "HTTPMethod",
									description: "The HTTP method of the HTTP request to perform."
								},
								endpoint: {
									title: "HTTPEndpoint",
									description: "The HTTP endpoint to send the request to.",
									$ref: "#/$defs/endpoint"
								},
								headers: {
									oneOf: [{
										type: "object",
										additionalProperties: { type: "string" }
									}, { $ref: "#/$defs/runtimeExpression" }],
									title: "HTTPHeaders",
									description: "A name/value mapping of the headers, if any, of the HTTP request to perform."
								},
								body: {
									title: "HTTPBody",
									description: "The body, if any, of the HTTP request to perform."
								},
								query: {
									oneOf: [{
										type: "object",
										additionalProperties: { type: "string" }
									}, { $ref: "#/$defs/runtimeExpression" }],
									title: "HTTPQuery",
									description: "A name/value mapping of the query parameters, if any, of the HTTP request to perform.",
									additionalProperties: !0
								},
								output: {
									type: "string",
									title: "HTTPOutput",
									description: "The http call output format. Defaults to 'content'.",
									enum: [
										"raw",
										"content",
										"response"
									]
								},
								redirect: {
									type: "boolean",
									title: "HttpRedirect",
									description: "Specifies whether redirection status codes (`300–399`) should be treated as errors."
								}
							},
							required: ["method", "endpoint"],
							unevaluatedProperties: !1
						}
					} }]
				},
				{
					title: "CallOpenAPI",
					description: "Defines the OpenAPI call to perform.",
					type: "object",
					unevaluatedProperties: !1,
					required: ["call", "with"],
					allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
						call: {
							type: "string",
							const: "openapi"
						},
						with: {
							type: "object",
							title: "OpenAPIArguments",
							description: "The OpenAPI call arguments.",
							properties: {
								document: {
									$ref: "#/$defs/externalResource",
									title: "WithOpenAPIDocument",
									description: "The document that defines the OpenAPI operation to call."
								},
								operationId: {
									type: "string",
									title: "WithOpenAPIOperation",
									description: "The id of the OpenAPI operation to call."
								},
								parameters: {
									type: "object",
									title: "WithOpenAPIParameters",
									description: "A name/value mapping of the parameters of the OpenAPI operation to call.",
									additionalProperties: !0
								},
								authentication: {
									$ref: "#/$defs/referenceableAuthenticationPolicy",
									title: "WithOpenAPIAuthentication",
									description: "The authentication policy, if any, to use when calling the OpenAPI operation."
								},
								output: {
									type: "string",
									enum: [
										"raw",
										"content",
										"response"
									],
									title: "WithOpenAPIOutput",
									description: "The http call output format. Defaults to 'content'."
								},
								redirect: {
									type: "boolean",
									title: "HttpRedirect",
									description: "Specifies whether redirection status codes (`300–399`) should be treated as errors."
								}
							},
							required: ["document", "operationId"],
							unevaluatedProperties: !1
						}
					} }]
				},
				{
					title: "CallA2A",
					description: "Defines the A2A call to perform.",
					type: "object",
					unevaluatedProperties: !1,
					required: ["call", "with"],
					allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
						call: {
							type: "string",
							const: "a2a"
						},
						with: {
							type: "object",
							title: "A2AArguments",
							description: "The A2A call arguments.",
							properties: {
								agentCard: {
									$ref: "#/$defs/externalResource",
									title: "WithA2AAgentCard",
									description: "The Agent Card that defines the agent to call."
								},
								server: {
									title: "A2AServer",
									description: "The server endpoint to send the request to.",
									$ref: "#/$defs/endpoint"
								},
								method: {
									type: "string",
									title: "WithA2AMethod",
									description: "The A2A method to send.",
									enum: [
										"message/send",
										"message/stream",
										"tasks/get",
										"tasks/list",
										"tasks/cancel",
										"tasks/resubscribe",
										"tasks/pushNotificationConfig/set",
										"tasks/pushNotificationConfig/get",
										"tasks/pushNotificationConfig/list",
										"tasks/pushNotificationConfig/delete",
										"agent/getAuthenticatedExtendedCard"
									]
								},
								parameters: {
									oneOf: [{
										type: "object",
										minProperties: 1,
										additionalProperties: !0
									}, { type: "string" }],
									title: "WithA2AParameters",
									description: "The parameters object to send with the A2A method."
								}
							},
							required: ["method"],
							unevaluatedProperties: !1
						}
					} }]
				},
				{
					title: "CallMCP",
					description: "Defines the MCP call to perform.",
					type: "object",
					unevaluatedProperties: !1,
					required: ["call", "with"],
					allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
						call: {
							type: "string",
							const: "mcp"
						},
						with: {
							type: "object",
							title: "MCPArguments",
							description: "The MCP call arguments.",
							properties: {
								protocolVersion: {
									type: "string",
									default: "2025-06-18",
									title: "McpProtocolVersion",
									description: "The version of the MCP protocol to use."
								},
								method: {
									type: "string",
									enum: [
										"tools/list",
										"tools/call",
										"prompts/list",
										"prompts/get",
										"resources/list",
										"resources/read",
										"resources/templates/list"
									],
									title: "McpMethod",
									description: "The MCP method to call."
								},
								parameters: {
									oneOf: [{
										type: "object",
										additionalProperties: !0
									}, { type: "string" }],
									title: "McpMethodParameters",
									description: "The MCP method parameters."
								},
								timeout: {
									$ref: "#/$defs/duration",
									title: "McpCallTimeout",
									description: "The duration after which the MCP call times out."
								},
								transport: {
									type: "object",
									title: "McpCallTransport",
									description: "The transport to use to perform the MCP call.",
									properties: {
										http: {
											type: "object",
											title: "McpHttpTransport",
											description: "The definition of the HTTP transport to use.",
											properties: {
												endpoint: {
													$ref: "#/$defs/endpoint",
													title: "McpHttpTransportEndpoint",
													description: "The MCP server endpoint to connect to."
												},
												headers: {
													type: "object",
													additionalProperties: { type: "string" },
													title: "McpHttpTransportHeaders",
													description: "A key/value mapping of the HTTP headers to send with requests, if any."
												}
											},
											required: ["endpoint"]
										},
										stdio: {
											type: "object",
											title: "McpStdioTransport",
											description: "The definition of the STDIO transport to use.",
											properties: {
												command: {
													type: "string",
													title: "McpStdioTransportCommand",
													description: "The command used to run the MCP server."
												},
												arguments: {
													type: "array",
													items: { type: "string" },
													title: "McpStdioTransportArguments",
													description: "An optional list of arguments to pass to the command."
												},
												environment: {
													type: "object",
													additionalProperties: { type: "string" },
													title: "McpStdioTransportEnvironment",
													description: "A key/value mapping, if any, of environment variables used to configure the MCP server."
												}
											},
											required: ["command"]
										},
										options: {
											type: "object",
											additionalProperties: { type: "string" }
										}
									},
									oneOf: [{ required: ["http"] }, { required: ["stdio"] }]
								},
								client: {
									type: "object",
									title: "McpClient",
									description: "Describes the client used to perform the MCP call.",
									properties: {
										name: {
											type: "string",
											title: "McpClientName",
											description: "The name of the client used to connect to the MCP server."
										},
										description: {
											type: "string",
											title: "McpClientVersion",
											description: "The version of the client used to connect to the MCP server."
										}
									},
									required: ["name", "version"]
								}
							},
							required: ["method", "transport"]
						}
					} }]
				},
				{
					title: "CallFunction",
					description: "Defines the function call to perform.",
					type: "object",
					unevaluatedProperties: !1,
					required: ["call"],
					allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
						call: {
							type: "string",
							not: { enum: [
								"asyncapi",
								"grpc",
								"http",
								"openapi",
								"a2a",
								"mcp"
							] },
							description: "The name of the function to call."
						},
						with: {
							type: "object",
							title: "FunctionArguments",
							description: "A name/value mapping of the parameters, if any, to call the function with.",
							additionalProperties: !0
						}
					} }]
				}
			]
		},
		forkTask: {
			type: "object",
			title: "ForkTask",
			description: "Allows workflows to execute multiple tasks concurrently and optionally race them against each other, with a single possible winner, which sets the task's output.",
			unevaluatedProperties: !1,
			required: ["fork"],
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { fork: {
				type: "object",
				title: "ForkTaskConfiguration",
				description: "The configuration of the branches to perform concurrently.",
				unevaluatedProperties: !1,
				required: ["branches"],
				properties: {
					branches: {
						$ref: "#/$defs/taskList",
						title: "ForkBranches"
					},
					compete: {
						type: "boolean",
						title: "ForkCompete",
						description: "Indicates whether or not the concurrent tasks are racing against each other, with a single possible winner, which sets the composite task's output.",
						default: !1
					}
				}
			} } }]
		},
		doTask: {
			type: "object",
			title: "DoTask",
			description: "Allows to execute a list of tasks in sequence.",
			unevaluatedProperties: !1,
			required: ["do"],
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { do: {
				$ref: "#/$defs/taskList",
				title: "DoTaskConfiguration",
				description: "The configuration of the tasks to perform sequentially."
			} } }]
		},
		emitTask: {
			type: "object",
			title: "EmitTask",
			description: "Allows workflows to publish events to event brokers or messaging systems, facilitating communication and coordination between different components and services.",
			required: ["emit"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { emit: {
				type: "object",
				title: "EmitTaskConfiguration",
				description: "The configuration of an event's emission.",
				unevaluatedProperties: !1,
				properties: { event: {
					type: "object",
					title: "EmitEventDefinition",
					description: "The definition of the event to emit.",
					properties: { with: {
						$ref: "#/$defs/eventProperties",
						title: "EmitEventWith",
						description: "Defines the properties of event to emit.",
						required: ["source", "type"]
					} },
					additionalProperties: !0
				} },
				required: ["event"]
			} } }]
		},
		forTask: {
			type: "object",
			title: "ForTask",
			description: "Allows workflows to iterate over a collection of items, executing a defined set of subtasks for each item in the collection. This task type is instrumental in handling scenarios such as batch processing, data transformation, and repetitive operations across datasets.",
			required: ["for", "do"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
				for: {
					type: "object",
					title: "ForTaskConfiguration",
					description: "The definition of the loop that iterates over a range of values.",
					unevaluatedProperties: !1,
					properties: {
						each: {
							type: "string",
							title: "ForEach",
							description: "The name of the variable used to store the current item being enumerated.",
							default: "item"
						},
						in: {
							type: "string",
							title: "ForIn",
							description: "A runtime expression used to get the collection to enumerate."
						},
						at: {
							type: "string",
							title: "ForAt",
							description: "The name of the variable used to store the index of the current item being enumerated.",
							default: "index"
						}
					},
					required: ["in"]
				},
				while: {
					type: "string",
					title: "While",
					description: "A runtime expression that represents the condition, if any, that must be met for the iteration to continue."
				},
				do: {
					$ref: "#/$defs/taskList",
					title: "ForTaskDo"
				}
			} }]
		},
		listenTask: {
			type: "object",
			title: "ListenTask",
			description: "Provides a mechanism for workflows to await and react to external events, enabling event-driven behavior within workflow systems.",
			required: ["listen"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
				listen: {
					type: "object",
					title: "ListenTaskConfiguration",
					description: "The configuration of the listener to use.",
					unevaluatedProperties: !1,
					properties: {
						to: {
							$ref: "#/$defs/eventConsumptionStrategy",
							title: "ListenTo",
							description: "Defines the event(s) to listen to."
						},
						read: {
							type: "string",
							enum: [
								"data",
								"envelope",
								"raw"
							],
							default: "data",
							title: "ListenAndReadAs",
							description: "Specifies how events are read during the listen operation."
						}
					},
					required: ["to"]
				},
				foreach: {
					$ref: "#/$defs/subscriptionIterator",
					title: "ListenIterator",
					description: "Configures the iterator, if any, for processing consumed event(s)."
				}
			} }]
		},
		raiseTask: {
			type: "object",
			title: "RaiseTask",
			description: "Intentionally triggers and propagates errors.",
			required: ["raise"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { raise: {
				type: "object",
				title: "RaiseTaskConfiguration",
				description: "The definition of the error to raise.",
				unevaluatedProperties: !1,
				properties: { error: {
					title: "RaiseTaskError",
					oneOf: [{
						$ref: "#/$defs/error",
						title: "RaiseErrorDefinition",
						description: "Defines the error to raise."
					}, {
						type: "string",
						title: "RaiseErrorReference",
						description: "The name of the error to raise"
					}]
				} },
				required: ["error"]
			} } }]
		},
		runTask: {
			type: "object",
			title: "RunTask",
			description: "Provides the capability to execute external containers, shell commands, scripts, or workflows.",
			required: ["run"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { run: {
				type: "object",
				title: "RunTaskConfiguration",
				description: "The configuration of the process to execute.",
				unevaluatedProperties: !1,
				properties: {
					await: {
						type: "boolean",
						default: !0,
						title: "AwaitProcessCompletion",
						description: "Whether to await the process completion before continuing."
					},
					return: {
						type: "string",
						title: "ProcessReturnType",
						description: "Configures the output of the process.",
						enum: [
							"stdout",
							"stderr",
							"code",
							"all",
							"none"
						],
						default: "stdout"
					}
				},
				oneOf: [
					{
						title: "RunContainer",
						description: "Enables the execution of external processes encapsulated within a containerized environment.",
						properties: { container: {
							type: "object",
							title: "Container",
							description: "The configuration of the container to run.",
							unevaluatedProperties: !1,
							properties: {
								image: {
									type: "string",
									title: "ContainerImage",
									description: "The name of the container image to run."
								},
								name: {
									type: "string",
									title: "ContainerName",
									description: "A runtime expression, if any, used to give specific name to the container."
								},
								command: {
									type: "string",
									title: "ContainerCommand",
									description: "The command, if any, to execute on the container."
								},
								ports: {
									type: "object",
									title: "ContainerPorts",
									description: "The container's port mappings, if any."
								},
								volumes: {
									type: "object",
									title: "ContainerVolumes",
									description: "The container's volume mappings, if any."
								},
								environment: {
									type: "object",
									title: "ContainerEnvironment",
									description: "A key/value mapping of the environment variables, if any, to use when running the configured process."
								},
								stdin: {
									type: "string",
									title: "ContainerStdin",
									description: "A runtime expression, if any, passed as standard input (stdin) to the command or default container CMD"
								},
								arguments: {
									type: "array",
									title: "ContainerArguments",
									description: "A list of the arguments, if any, passed as argv to the command or default container CMD",
									items: { type: "string" }
								},
								lifetime: {
									$ref: "#/$defs/containerLifetime",
									title: "ContainerLifetime",
									description: "An object, if any, used to configure the container's lifetime"
								},
								pullPolicy: {
									type: "string",
									title: "ContainerPullPolicy",
									description: "Policy that controls how the container's image should be pulled from the registry. Defaults to `ifNotPresent`",
									enum: [
										"ifNotPresent",
										"always",
										"never"
									]
								}
							},
							required: ["image"]
						} },
						required: ["container"]
					},
					{
						title: "RunScript",
						description: "Enables the execution of custom scripts or code within a workflow, empowering workflows to perform specialized logic, data processing, or integration tasks by executing user-defined scripts written in various programming languages.",
						properties: { script: {
							type: "object",
							title: "Script",
							description: "The configuration of the script to run.",
							unevaluatedProperties: !1,
							properties: {
								language: {
									type: "string",
									title: "ScriptLanguage",
									description: "The language of the script to run."
								},
								stdin: {
									type: "string",
									title: "ScriptStdin",
									description: "A runtime expression, if any, to the script as standard input (stdin)."
								},
								arguments: {
									type: "array",
									title: "ScriptArguments",
									description: "A list of the arguments, if any, to the script as argv",
									items: { type: "string" }
								},
								environment: {
									type: "object",
									title: "ScriptEnvironment",
									description: "A key/value mapping of the environment variables, if any, to use when running the configured script process.",
									additionalProperties: !0
								}
							},
							oneOf: [{
								title: "InlineScript",
								type: "object",
								description: "The script's code.",
								properties: { code: {
									type: "string",
									title: "InlineScriptCode"
								} },
								required: ["code"]
							}, {
								title: "ExternalScript",
								type: "object",
								description: "The script's resource.",
								properties: { source: {
									$ref: "#/$defs/externalResource",
									title: "ExternalScriptResource"
								} },
								required: ["source"]
							}],
							required: ["language"]
						} },
						required: ["script"]
					},
					{
						title: "RunShell",
						description: "Enables the execution of shell commands within a workflow, enabling workflows to interact with the underlying operating system and perform system-level operations, such as file manipulation, environment configuration, or system administration tasks.",
						properties: { shell: {
							type: "object",
							title: "Shell",
							description: "The configuration of the shell command to run.",
							unevaluatedProperties: !1,
							properties: {
								command: {
									type: "string",
									title: "ShellCommand",
									description: "The shell command to run."
								},
								stdin: {
									type: "string",
									title: "ShellStdin",
									description: "A runtime expression, if any, to the shell command as standard input (stdin)."
								},
								arguments: {
									type: "array",
									title: "ShellArguments",
									description: "A list of the arguments, if any, to the shell command as argv",
									items: { type: "string" }
								},
								environment: {
									type: "object",
									title: "ShellEnvironment",
									description: "A key/value mapping of the environment variables, if any, to use when running the configured process.",
									additionalProperties: !0
								}
							},
							required: ["command"]
						} },
						required: ["shell"]
					},
					{
						title: "RunWorkflow",
						description: "Enables the invocation and execution of nested workflows within a parent workflow, facilitating modularization, reusability, and abstraction of complex logic or business processes by encapsulating them into standalone workflow units.",
						properties: { workflow: {
							type: "object",
							title: "SubflowConfiguration",
							description: "The configuration of the workflow to run.",
							unevaluatedProperties: !1,
							properties: {
								namespace: {
									type: "string",
									title: "SubflowNamespace",
									description: "The namespace the workflow to run belongs to."
								},
								name: {
									type: "string",
									title: "SubflowName",
									description: "The name of the workflow to run."
								},
								version: {
									type: "string",
									default: "latest",
									title: "SubflowVersion",
									description: "The version of the workflow to run. Defaults to latest."
								},
								input: {
									type: "object",
									title: "SubflowInput",
									description: "The data, if any, to pass as input to the workflow to execute. The value should be validated against the target workflow's input schema, if specified.",
									additionalProperties: !0
								}
							},
							required: [
								"namespace",
								"name",
								"version"
							]
						} },
						required: ["workflow"]
					}
				]
			} } }]
		},
		setTask: {
			type: "object",
			title: "SetTask",
			description: "A task used to set data.",
			required: ["set"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { set: {
				oneOf: [{
					type: "object",
					minProperties: 1,
					additionalProperties: !0
				}, { type: "string" }],
				title: "SetTaskConfiguration",
				description: "The data to set."
			} } }]
		},
		switchTask: {
			type: "object",
			title: "SwitchTask",
			description: "Enables conditional branching within workflows, allowing them to dynamically select different paths based on specified conditions or criteria.",
			required: ["switch"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { switch: {
				type: "array",
				title: "SwitchTaskConfiguration",
				description: "The definition of the switch to use.",
				minItems: 1,
				items: {
					type: "object",
					title: "SwitchItem",
					minProperties: 1,
					maxProperties: 1,
					additionalProperties: {
						type: "object",
						title: "SwitchCase",
						description: "The definition of a case within a switch task, defining a condition and corresponding tasks to execute if the condition is met.",
						unevaluatedProperties: !1,
						required: ["then"],
						properties: {
							when: {
								type: "string",
								title: "SwitchCaseCondition",
								description: "A runtime expression used to determine whether or not the case matches."
							},
							then: {
								$ref: "#/$defs/flowDirective",
								title: "SwitchCaseOutcome",
								description: "The flow directive to execute when the case matches."
							}
						}
					}
				}
			} } }]
		},
		tryTask: {
			type: "object",
			title: "TryTask",
			description: "Serves as a mechanism within workflows to handle errors gracefully, potentially retrying failed tasks before proceeding with alternate ones.",
			required: ["try", "catch"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: {
				try: {
					$ref: "#/$defs/taskList",
					title: "TryTaskConfiguration",
					description: "The task(s) to perform."
				},
				catch: {
					type: "object",
					title: "TryTaskCatch",
					description: "The object used to define the errors to catch.",
					unevaluatedProperties: !1,
					properties: {
						errors: {
							type: "object",
							title: "CatchErrors",
							properties: { with: { $ref: "#/$defs/errorFilter" } },
							description: "static error filter"
						},
						as: {
							type: "string",
							title: "CatchAs",
							description: "The name of the runtime expression variable to save the error as. Defaults to 'error'."
						},
						when: {
							type: "string",
							title: "CatchWhen",
							description: "A runtime expression used to determine whether to catch the filtered error."
						},
						exceptWhen: {
							type: "string",
							title: "CatchExceptWhen",
							description: "A runtime expression used to determine whether not to catch the filtered error."
						},
						retry: { oneOf: [{
							$ref: "#/$defs/retryPolicy",
							title: "RetryPolicyDefinition",
							description: "The retry policy to use, if any, when catching errors."
						}, {
							type: "string",
							title: "RetryPolicyReference",
							description: "The name of the retry policy to use, if any, when catching errors."
						}] },
						do: {
							$ref: "#/$defs/taskList",
							title: "TryTaskCatchDo",
							description: "The definition of the task(s) to run when catching an error."
						}
					}
				}
			} }]
		},
		waitTask: {
			type: "object",
			title: "WaitTask",
			description: "Allows workflows to pause or delay their execution for a specified period of time.",
			required: ["wait"],
			unevaluatedProperties: !1,
			allOf: [{ $ref: "#/$defs/taskBase" }, { properties: { wait: {
				$ref: "#/$defs/duration",
				title: "WaitTaskConfiguration",
				description: "The amount of time to wait."
			} } }]
		},
		flowDirective: {
			title: "FlowDirective",
			description: "Represents different transition options for a workflow.",
			anyOf: [{
				title: "FlowDirectiveEnum",
				type: "string",
				enum: [
					"continue",
					"exit",
					"end"
				],
				default: "continue"
			}, { type: "string" }]
		},
		referenceableAuthenticationPolicy: {
			type: "object",
			title: "ReferenceableAuthenticationPolicy",
			description: "Represents a referenceable authentication policy.",
			unevaluatedProperties: !1,
			oneOf: [{
				title: "AuthenticationPolicyReference",
				description: "The reference of the authentication policy to use.",
				properties: { use: {
					type: "string",
					minLength: 1,
					title: "ReferenceableAuthenticationPolicyName",
					description: "The name of the authentication policy to use."
				} },
				required: ["use"]
			}, { $ref: "#/$defs/authenticationPolicy" }]
		},
		secretBasedAuthenticationPolicy: {
			type: "object",
			title: "SecretBasedAuthenticationPolicy",
			description: "Represents an authentication policy based on secrets.",
			unevaluatedProperties: !1,
			properties: { use: {
				type: "string",
				minLength: 1,
				title: "SecretBasedAuthenticationPolicyName",
				description: "The name of the authentication policy to use."
			} },
			required: ["use"]
		},
		authenticationPolicy: {
			type: "object",
			title: "AuthenticationPolicy",
			description: "Defines an authentication policy.",
			oneOf: [
				{
					title: "BasicAuthenticationPolicy",
					description: "Use basic authentication.",
					properties: { basic: {
						type: "object",
						title: "BasicAuthenticationPolicyConfiguration",
						description: "The configuration of the basic authentication policy.",
						unevaluatedProperties: !1,
						oneOf: [{
							title: "BasicAuthenticationProperties",
							description: "Inline configuration of the basic authentication policy.",
							properties: {
								username: {
									type: "string",
									description: "The username to use."
								},
								password: {
									type: "string",
									description: "The password to use."
								}
							},
							required: ["username", "password"]
						}, {
							$ref: "#/$defs/secretBasedAuthenticationPolicy",
							title: "BasicAuthenticationPolicySecret",
							description: "Secret based configuration of the basic authentication policy."
						}]
					} },
					required: ["basic"]
				},
				{
					title: "BearerAuthenticationPolicy",
					description: "Use bearer authentication.",
					properties: { bearer: {
						type: "object",
						title: "BearerAuthenticationPolicyConfiguration",
						description: "The configuration of the bearer authentication policy.",
						unevaluatedProperties: !1,
						oneOf: [{
							title: "BearerAuthenticationProperties",
							description: "Inline configuration of the bearer authentication policy.",
							properties: { token: {
								type: "string",
								description: "The bearer token to use."
							} },
							required: ["token"]
						}, {
							$ref: "#/$defs/secretBasedAuthenticationPolicy",
							title: "BearerAuthenticationPolicySecret",
							description: "Secret based configuration of the bearer authentication policy."
						}]
					} },
					required: ["bearer"]
				},
				{
					title: "DigestAuthenticationPolicy",
					description: "Use digest authentication.",
					properties: { digest: {
						type: "object",
						title: "DigestAuthenticationPolicyConfiguration",
						description: "The configuration of the digest authentication policy.",
						unevaluatedProperties: !1,
						oneOf: [{
							title: "DigestAuthenticationProperties",
							description: "Inline configuration of the digest authentication policy.",
							properties: {
								username: {
									type: "string",
									description: "The username to use."
								},
								password: {
									type: "string",
									description: "The password to use."
								}
							},
							required: ["username", "password"]
						}, {
							$ref: "#/$defs/secretBasedAuthenticationPolicy",
							title: "DigestAuthenticationPolicySecret",
							description: "Secret based configuration of the digest authentication policy."
						}]
					} },
					required: ["digest"]
				},
				{
					title: "OAuth2AuthenticationPolicy",
					description: "Use OAuth2 authentication.",
					properties: { oauth2: {
						type: "object",
						title: "OAuth2AuthenticationPolicyConfiguration",
						description: "The configuration of the OAuth2 authentication policy.",
						unevaluatedProperties: !1,
						oneOf: [{
							$ref: "#/$defs/oauth2AuthenticationProperties",
							type: "object",
							title: "OAuth2ConnectAuthenticationProperties",
							description: "The inline configuration of the OAuth2 authentication policy.",
							unevaluatedProperties: !1,
							properties: { endpoints: {
								type: "object",
								title: "OAuth2AuthenticationPropertiesEndpoints",
								description: "The endpoint configurations for OAuth2.",
								properties: {
									token: {
										type: "string",
										format: "uri-template",
										default: "/oauth2/token",
										title: "OAuth2TokenEndpoint",
										description: "The relative path to the token endpoint. Defaults to `/oauth2/token`."
									},
									revocation: {
										type: "string",
										format: "uri-template",
										default: "/oauth2/revoke",
										title: "OAuth2RevocationEndpoint",
										description: "The relative path to the revocation endpoint. Defaults to `/oauth2/revoke`."
									},
									introspection: {
										type: "string",
										format: "uri-template",
										default: "/oauth2/introspect",
										title: "OAuth2IntrospectionEndpoint",
										description: "The relative path to the introspection endpoint. Defaults to `/oauth2/introspect`."
									}
								}
							} }
						}, {
							$ref: "#/$defs/secretBasedAuthenticationPolicy",
							title: "OAuth2AuthenticationPolicySecret",
							description: "Secret based configuration of the OAuth2 authentication policy."
						}]
					} },
					required: ["oauth2"]
				},
				{
					title: "OpenIdConnectAuthenticationPolicy",
					description: "Use OpenIdConnect authentication.",
					properties: { oidc: {
						type: "object",
						title: "OpenIdConnectAuthenticationPolicyConfiguration",
						description: "The configuration of the OpenIdConnect authentication policy.",
						unevaluatedProperties: !1,
						oneOf: [{
							$ref: "#/$defs/oauth2AuthenticationProperties",
							title: "OpenIdConnectAuthenticationProperties",
							description: "The inline configuration of the OpenIdConnect authentication policy.",
							unevaluatedProperties: !1
						}, {
							$ref: "#/$defs/secretBasedAuthenticationPolicy",
							title: "OpenIdConnectAuthenticationPolicySecret",
							description: "Secret based configuration of the OpenIdConnect authentication policy."
						}]
					} },
					required: ["oidc"]
				}
			]
		},
		oauth2AuthenticationProperties: {
			type: "object",
			title: "OAuth2AuthenticationData",
			description: "Inline configuration of the OAuth2 authentication policy.",
			properties: {
				authority: {
					$ref: "#/$defs/uriTemplate",
					title: "OAuth2AuthenticationDataAuthority",
					description: "The URI that references the OAuth2 authority to use."
				},
				grant: {
					type: "string",
					enum: [
						"authorization_code",
						"client_credentials",
						"password",
						"refresh_token",
						"urn:ietf:params:oauth:grant-type:token-exchange"
					],
					title: "OAuth2AuthenticationDataGrant",
					description: "The grant type to use."
				},
				client: {
					type: "object",
					title: "OAuth2AuthenticationDataClient",
					description: "The definition of an OAuth2 client.",
					unevaluatedProperties: !1,
					properties: {
						id: {
							type: "string",
							title: "ClientId",
							description: "The client id to use."
						},
						secret: {
							type: "string",
							title: "ClientSecret",
							description: "The client secret to use, if any."
						},
						assertion: {
							type: "string",
							title: "ClientAssertion",
							description: "A JWT containing a signed assertion with your application credentials."
						},
						authentication: {
							type: "string",
							enum: [
								"client_secret_basic",
								"client_secret_post",
								"client_secret_jwt",
								"private_key_jwt",
								"none"
							],
							default: "client_secret_post",
							title: "ClientAuthentication",
							description: "The authentication method to use to authenticate the client."
						}
					}
				},
				request: {
					type: "object",
					title: "OAuth2TokenRequest",
					description: "The configuration of an OAuth2 token request",
					properties: { encoding: {
						type: "string",
						enum: ["application/x-www-form-urlencoded", "application/json"],
						default: "application/x-www-form-urlencoded",
						title: "Oauth2TokenRequestEncoding"
					} }
				},
				issuers: {
					type: "array",
					title: "OAuth2Issuers",
					description: "A list that contains that contains valid issuers that will be used to check against the issuer of generated tokens.",
					items: { type: "string" }
				},
				scopes: {
					type: "array",
					title: "OAuth2AuthenticationDataScopes",
					description: "The scopes, if any, to request the token for.",
					items: { type: "string" }
				},
				audiences: {
					type: "array",
					title: "OAuth2AuthenticationDataAudiences",
					description: "The audiences, if any, to request the token for.",
					items: { type: "string" }
				},
				username: {
					type: "string",
					title: "OAuth2AuthenticationDataUsername",
					description: "The username to use. Used only if the grant type is Password."
				},
				password: {
					type: "string",
					title: "OAuth2AuthenticationDataPassword",
					description: "The password to use. Used only if the grant type is Password."
				},
				subject: {
					$ref: "#/$defs/oauth2Token",
					title: "OAuth2AuthenticationDataSubject",
					description: "The security token that represents the identity of the party on behalf of whom the request is being made."
				},
				actor: {
					$ref: "#/$defs/oauth2Token",
					title: "OAuth2AuthenticationDataActor",
					description: "The security token that represents the identity of the acting party."
				}
			}
		},
		oauth2Token: {
			type: "object",
			title: "OAuth2TokenDefinition",
			description: "Represents an OAuth2 token.",
			unevaluatedProperties: !1,
			properties: {
				token: {
					type: "string",
					title: "OAuth2Token",
					description: "The security token to use."
				},
				type: {
					type: "string",
					title: "OAuth2TokenType",
					description: "The type of the security token to use."
				}
			},
			required: ["token", "type"]
		},
		duration: { oneOf: [
			{
				type: "object",
				minProperties: 1,
				unevaluatedProperties: !1,
				properties: {
					days: {
						type: "integer",
						title: "DurationDays",
						description: "Number of days, if any."
					},
					hours: {
						type: "integer",
						title: "DurationHours",
						description: "Number of days, if any."
					},
					minutes: {
						type: "integer",
						title: "DurationMinutes",
						description: "Number of minutes, if any."
					},
					seconds: {
						type: "integer",
						title: "DurationSeconds",
						description: "Number of seconds, if any."
					},
					milliseconds: {
						type: "integer",
						title: "DurationMilliseconds",
						description: "Number of milliseconds, if any."
					}
				},
				title: "DurationInline",
				description: "The inline definition of a duration."
			},
			{
				$ref: "#/$defs/runtimeExpression",
				title: "DurationExpression",
				description: "Runtime expression that generates an ISO 8601"
			},
			{
				type: "string",
				pattern: "^P(?!$)(\\d+(?:\\.\\d+)?Y)?(\\d+(?:\\.\\d+)?M)?(\\d+(?:\\.\\d+)?W)?(\\d+(?:\\.\\d+)?D)?(T(?=\\d)(\\d+(?:\\.\\d+)?H)?(\\d+(?:\\.\\d+)?M)?(\\d+(?:\\.\\d+)?S)?)?$",
				title: "DurationLiteral",
				description: "The Literal ISO 8601 representation of a duration."
			}
		] },
		error: {
			type: "object",
			title: "Error",
			description: "Represents an error.",
			unevaluatedProperties: !1,
			properties: {
				type: {
					title: "ErrorType",
					description: "A URI reference that identifies the error type.",
					oneOf: [{
						title: "LiteralErrorType",
						$ref: "#/$defs/uriTemplate",
						description: "The literal error type."
					}, {
						title: "ExpressionErrorType",
						$ref: "#/$defs/runtimeExpression",
						description: "An expression based error type."
					}]
				},
				status: {
					type: "integer",
					title: "ErrorStatus",
					description: "The status code generated by the origin for this occurrence of the error."
				},
				instance: {
					title: "ErrorInstance",
					description: "A JSON Pointer used to reference the component the error originates from.",
					oneOf: [{
						title: "LiteralErrorInstance",
						description: "The literal error instance.",
						type: "string",
						format: "json-pointer"
					}, {
						$ref: "#/$defs/runtimeExpression",
						title: "ExpressionErrorInstance",
						description: "An expression based error instance."
					}]
				},
				title: {
					description: "A short, human-readable summary of the error.",
					title: "ErrorTitle",
					anyOf: [{
						$ref: "#/$defs/runtimeExpression",
						title: "ExpressionErrorTitle"
					}, {
						type: "string",
						title: "LiteralErrorTitle"
					}]
				},
				detail: {
					title: "ErrorDetails",
					description: "A human-readable explanation specific to this occurrence of the error.",
					anyOf: [{
						$ref: "#/$defs/runtimeExpression",
						title: "ExpressionErrorDetails"
					}, {
						type: "string",
						title: "LiteralErrorDetails"
					}]
				}
			},
			required: ["type", "status"]
		},
		errorFilter: {
			type: "object",
			title: "ErrorFilter",
			description: "Error filtering base on static values. For error filtering on dynamic values, use catch.when property",
			minProperties: 1,
			properties: {
				type: {
					type: "string",
					description: "if present, means this value should be used for filtering"
				},
				status: {
					type: "integer",
					description: "if present, means this value should be used for filtering"
				},
				instance: {
					type: "string",
					description: "if present, means this value should be used for filtering"
				},
				title: {
					type: "string",
					description: "if present, means this value should be used for filtering"
				},
				details: {
					type: "string",
					description: "if present, means this value should be used for filtering"
				}
			}
		},
		uriTemplate: {
			title: "UriTemplate",
			anyOf: [{
				title: "LiteralUriTemplate",
				type: "string",
				format: "uri-template",
				pattern: "^[A-Za-z][A-Za-z0-9+\\-.]*://.*"
			}, {
				title: "LiteralUri",
				type: "string",
				format: "uri",
				pattern: "^[A-Za-z][A-Za-z0-9+\\-.]*://.*"
			}]
		},
		endpoint: {
			title: "Endpoint",
			description: "Represents an endpoint.",
			oneOf: [
				{ $ref: "#/$defs/runtimeExpression" },
				{ $ref: "#/$defs/uriTemplate" },
				{
					title: "EndpointConfiguration",
					type: "object",
					unevaluatedProperties: !1,
					properties: {
						uri: {
							title: "EndpointUri",
							description: "The endpoint's URI.",
							oneOf: [{
								title: "LiteralEndpointURI",
								description: "The literal endpoint's URI.",
								$ref: "#/$defs/uriTemplate"
							}, {
								title: "ExpressionEndpointURI",
								$ref: "#/$defs/runtimeExpression",
								description: "An expression based endpoint's URI."
							}]
						},
						authentication: {
							$ref: "#/$defs/referenceableAuthenticationPolicy",
							title: "EndpointAuthentication",
							description: "The authentication policy to use."
						}
					},
					required: ["uri"]
				}
			]
		},
		eventProperties: {
			type: "object",
			title: "EventProperties",
			description: "Describes the properties of an event.",
			properties: {
				id: {
					type: "string",
					title: "EventId",
					description: "The event's unique identifier."
				},
				source: {
					title: "EventSource",
					description: "Identifies the context in which an event happened.",
					oneOf: [{ $ref: "#/$defs/uriTemplate" }, { $ref: "#/$defs/runtimeExpression" }]
				},
				type: {
					type: "string",
					title: "EventType",
					description: "This attribute contains a value describing the type of event related to the originating occurrence."
				},
				time: {
					title: "EventTime",
					description: "When the event occured.",
					oneOf: [{
						title: "LiteralTime",
						type: "string",
						format: "date-time"
					}, { $ref: "#/$defs/runtimeExpression" }]
				},
				subject: {
					type: "string",
					title: "EventSubject",
					description: "The subject of the event."
				},
				datacontenttype: {
					type: "string",
					title: "EventDataContentType",
					description: "Content type of data value. This attribute enables data to carry any type of content, whereby format and encoding might differ from that of the chosen event format."
				},
				dataschema: {
					title: "EventDataschema",
					description: "The schema describing the event format.",
					oneOf: [{
						title: "LiteralDataSchema",
						$ref: "#/$defs/uriTemplate",
						description: "The literal event data schema."
					}, {
						title: "ExpressionDataSchema",
						$ref: "#/$defs/runtimeExpression",
						description: "An expression based event data schema."
					}]
				},
				data: {
					title: "EventData",
					description: "The event's payload data",
					anyOf: [{ $ref: "#/$defs/runtimeExpression" }, {}]
				}
			},
			additionalProperties: !0
		},
		eventConsumptionStrategy: {
			type: "object",
			title: "EventConsumptionStrategy",
			description: "Describe the event consumption strategy to adopt.",
			unevaluatedProperties: !1,
			oneOf: [
				{
					title: "AllEventConsumptionStrategy",
					properties: { all: {
						type: "array",
						title: "AllEventConsumptionStrategyConfiguration",
						description: "A list containing all the events that must be consumed.",
						items: { $ref: "#/$defs/eventFilter" }
					} },
					required: ["all"]
				},
				{
					title: "AnyEventConsumptionStrategy",
					properties: {
						any: {
							type: "array",
							title: "AnyEventConsumptionStrategyConfiguration",
							description: "A list containing any of the events to consume.",
							items: { $ref: "#/$defs/eventFilter" }
						},
						until: { oneOf: [{
							type: "string",
							title: "AnyEventUntilCondition",
							description: "A runtime expression condition evaluated after consuming an event and which determines whether or not to continue listening."
						}, {
							allOf: [{
								$ref: "#/$defs/eventConsumptionStrategy",
								description: "The strategy that defines the event(s) to consume to stop listening."
							}, { properties: { until: !1 } }],
							title: "AnyEventUntilConsumed"
						}] }
					},
					required: ["any"]
				},
				{
					title: "OneEventConsumptionStrategy",
					properties: { one: {
						$ref: "#/$defs/eventFilter",
						title: "OneEventConsumptionStrategyConfiguration",
						description: "The single event to consume."
					} },
					required: ["one"]
				}
			]
		},
		eventFilter: {
			type: "object",
			title: "EventFilter",
			description: "An event filter is a mechanism used to selectively process or handle events based on predefined criteria, such as event type, source, or specific attributes.",
			unevaluatedProperties: !1,
			properties: {
				with: {
					$ref: "#/$defs/eventProperties",
					minProperties: 1,
					title: "WithEvent",
					description: "An event filter is a mechanism used to selectively process or handle events based on predefined criteria, such as event type, source, or specific attributes."
				},
				correlate: {
					type: "object",
					title: "EventFilterCorrelate",
					description: "A correlation is a link between events and data, established by mapping event attributes to specific data attributes, allowing for coordinated processing or handling based on event characteristics.",
					additionalProperties: {
						type: "object",
						properties: {
							from: {
								type: "string",
								title: "CorrelateFrom",
								description: "A runtime expression used to extract the correlation value from the filtered event."
							},
							expect: {
								type: "string",
								title: "CorrelateExpect",
								description: "A constant or a runtime expression, if any, used to determine whether or not the extracted correlation value matches expectations. If not set, the first extracted value will be used as the correlation's expectation."
							}
						},
						required: ["from"]
					}
				}
			},
			required: ["with"]
		},
		extension: {
			type: "object",
			title: "Extension",
			description: "The definition of an extension.",
			unevaluatedProperties: !1,
			properties: {
				extend: {
					type: "string",
					enum: [
						"call",
						"composite",
						"emit",
						"for",
						"listen",
						"raise",
						"run",
						"set",
						"switch",
						"try",
						"wait",
						"all"
					],
					title: "ExtensionTarget",
					description: "The type of task to extend."
				},
				when: {
					type: "string",
					title: "ExtensionCondition",
					description: "A runtime expression, if any, used to determine whether or not the extension should apply in the specified context."
				},
				before: {
					$ref: "#/$defs/taskList",
					title: "ExtensionDoBefore",
					description: "The task(s) to execute before the extended task, if any."
				},
				after: {
					$ref: "#/$defs/taskList",
					title: "ExtensionDoAfter",
					description: "The task(s) to execute after the extended task, if any."
				}
			},
			required: ["extend"]
		},
		externalResource: {
			type: "object",
			title: "ExternalResource",
			description: "Represents an external resource.",
			unevaluatedProperties: !1,
			properties: {
				name: {
					type: "string",
					title: "ExternalResourceName",
					description: "The name of the external resource, if any."
				},
				endpoint: {
					$ref: "#/$defs/endpoint",
					title: "ExternalResourceEndpoint",
					description: "The endpoint of the external resource."
				}
			},
			required: ["endpoint"]
		},
		input: {
			type: "object",
			title: "Input",
			description: "Configures the input of a workflow or task.",
			unevaluatedProperties: !1,
			properties: {
				schema: {
					$ref: "#/$defs/schema",
					title: "InputSchema",
					description: "The schema used to describe and validate the input of the workflow or task."
				},
				from: {
					title: "InputFrom",
					description: "A runtime expression, if any, used to mutate and/or filter the input of the workflow or task.",
					oneOf: [{ type: "string" }, { type: "object" }]
				}
			}
		},
		output: {
			type: "object",
			title: "Output",
			description: "Configures the output of a workflow or task.",
			unevaluatedProperties: !1,
			properties: {
				schema: {
					$ref: "#/$defs/schema",
					title: "OutputSchema",
					description: "The schema used to describe and validate the output of the workflow or task."
				},
				as: {
					title: "OutputAs",
					description: "A runtime expression, if any, used to mutate and/or filter the output of the workflow or task.",
					oneOf: [{ type: "string" }, { type: "object" }]
				}
			}
		},
		export: {
			type: "object",
			title: "Export",
			description: "Set the content of the context. .",
			unevaluatedProperties: !1,
			properties: {
				schema: {
					$ref: "#/$defs/schema",
					title: "ExportSchema",
					description: "The schema used to describe and validate the workflow context."
				},
				as: {
					title: "ExportAs",
					description: "A runtime expression, if any, used to export the output data to the context.",
					oneOf: [{ type: "string" }, { type: "object" }]
				}
			}
		},
		retryPolicy: {
			type: "object",
			title: "RetryPolicy",
			description: "Defines a retry policy.",
			unevaluatedProperties: !1,
			properties: {
				when: {
					type: "string",
					title: "RetryWhen",
					description: "A runtime expression, if any, used to determine whether or not to retry running the task, in a given context."
				},
				exceptWhen: {
					type: "string",
					title: "RetryExcepWhen",
					description: "A runtime expression used to determine whether or not to retry running the task, in a given context."
				},
				delay: {
					$ref: "#/$defs/duration",
					title: "RetryDelay",
					description: "The duration to wait between retry attempts."
				},
				backoff: {
					type: "object",
					title: "RetryBackoff",
					description: "The retry duration backoff.",
					unevaluatedProperties: !1,
					oneOf: [
						{
							title: "ConstantBackoff",
							properties: { constant: {
								type: "object",
								description: "The definition of the constant backoff to use, if any."
							} },
							required: ["constant"]
						},
						{
							title: "ExponentialBackOff",
							properties: { exponential: {
								type: "object",
								description: "The definition of the exponential backoff to use, if any."
							} },
							required: ["exponential"]
						},
						{
							title: "LinearBackoff",
							properties: { linear: {
								type: "object",
								description: "The definition of the linear backoff to use, if any."
							} },
							required: ["linear"]
						}
					]
				},
				limit: {
					type: "object",
					title: "RetryLimit",
					unevaluatedProperties: !1,
					properties: {
						attempt: {
							type: "object",
							title: "RetryLimitAttempt",
							unevaluatedProperties: !1,
							properties: {
								count: {
									type: "integer",
									title: "RetryLimitAttemptCount",
									description: "The maximum amount of retry attempts, if any."
								},
								duration: {
									$ref: "#/$defs/duration",
									title: "RetryLimitAttemptDuration",
									description: "The maximum duration for each retry attempt."
								}
							}
						},
						duration: {
							$ref: "#/$defs/duration",
							title: "RetryLimitDuration",
							description: "The duration limit, if any, for all retry attempts."
						}
					},
					description: "The retry limit, if any."
				},
				jitter: {
					type: "object",
					title: "RetryPolicyJitter",
					description: "The parameters, if any, that control the randomness or variability of the delay between retry attempts.",
					unevaluatedProperties: !1,
					properties: {
						from: {
							$ref: "#/$defs/duration",
							title: "RetryPolicyJitterFrom",
							description: "The minimum duration of the jitter range."
						},
						to: {
							$ref: "#/$defs/duration",
							title: "RetryPolicyJitterTo",
							description: "The maximum duration of the jitter range."
						}
					},
					required: ["from", "to"]
				}
			}
		},
		schema: {
			type: "object",
			title: "Schema",
			description: "Represents the definition of a schema.",
			unevaluatedProperties: !1,
			properties: { format: {
				type: "string",
				default: "json",
				title: "SchemaFormat",
				description: "The schema's format. Defaults to 'json'. The (optional) version of the format can be set using `{format}:{version}`."
			} },
			oneOf: [{
				title: "SchemaInline",
				properties: { document: { description: "The schema's inline definition." } },
				required: ["document"]
			}, {
				title: "SchemaExternal",
				properties: { resource: {
					$ref: "#/$defs/externalResource",
					title: "SchemaExternalResource",
					description: "The schema's external resource."
				} },
				required: ["resource"]
			}]
		},
		timeout: {
			type: "object",
			title: "Timeout",
			description: "The definition of a timeout.",
			unevaluatedProperties: !1,
			properties: { after: {
				$ref: "#/$defs/duration",
				title: "TimeoutAfter",
				description: "The duration after which to timeout."
			} },
			required: ["after"]
		},
		catalog: {
			type: "object",
			title: "Catalog",
			description: "The definition of a resource catalog.",
			unevaluatedProperties: !1,
			properties: { endpoint: {
				$ref: "#/$defs/endpoint",
				title: "CatalogEndpoint",
				description: "The root URL where the catalog is hosted."
			} },
			required: ["endpoint"]
		},
		runtimeExpression: {
			type: "string",
			title: "RuntimeExpression",
			description: "A runtime expression.",
			pattern: "^\\s*\\$\\{.+\\}\\s*$"
		},
		containerLifetime: {
			type: "object",
			title: "ContainerLifetime",
			description: "The configuration of a container's lifetime",
			unevaluatedProperties: !1,
			properties: {
				cleanup: {
					type: "string",
					title: "ContainerCleanupPolicy",
					description: "The container cleanup policy to use",
					enum: [
						"always",
						"never",
						"eventually"
					],
					default: "never"
				},
				after: {
					$ref: "#/$defs/duration",
					title: "ContainerLifetimeDuration",
					description: "The duration after which to cleanup the container, in case the cleanup policy has been set to 'eventually'"
				}
			},
			required: ["cleanup"],
			if: { properties: { cleanup: { const: "eventually" } } },
			then: { required: ["after"] },
			else: { not: { required: ["after"] } }
		},
		processResult: {
			type: "object",
			title: "ProcessResult",
			description: "The object returned by a run task when its return type has been set 'all'.",
			unevaluatedProperties: !1,
			properties: {
				code: {
					type: "integer",
					title: "ProcessExitCode",
					description: "The process's exit code."
				},
				stdout: {
					type: "string",
					title: "ProcessStandardOutput",
					description: "The content of the process's STDOUT."
				},
				stderr: {
					type: "string",
					title: "ProcessStandardError",
					description: "The content of the process's STDERR."
				}
			},
			required: [
				"code",
				"stdout",
				"stderr"
			]
		},
		asyncApiServer: {
			type: "object",
			title: "AsyncApiServer",
			description: "Configures the target server of an AsyncAPI operation.",
			unevaluatedProperties: !1,
			properties: {
				name: {
					type: "string",
					title: "AsyncApiServerName",
					description: "The target server's name."
				},
				variables: {
					type: "object",
					title: "AsyncApiServerVariables",
					description: "The target server's variables, if any."
				}
			},
			required: ["name"]
		},
		asyncApiOutboundMessage: {
			type: "object",
			title: "AsyncApiOutboundMessage",
			description: "An object used to configure the message to publish using the target operation.",
			unevaluatedProperties: !1,
			properties: {
				payload: {
					type: "object",
					title: "AsyncApiMessagePayload",
					description: "The message's payload, if any."
				},
				headers: {
					type: "object",
					title: "AsyncApiMessageHeaders",
					description: "The message's headers, if any."
				}
			}
		},
		asyncApiInboundMessage: {
			title: "AsyncApiInboundMessage",
			description: "Represents a message counsumed by an AsyncAPI subscription.",
			allOf: [{ $ref: "#/$defs/asyncApiOutboundMessage" }, { properties: { correlationId: {
				type: "string",
				title: "AsyncApiMessageCorrelationId",
				description: "The message's correlation id, if any."
			} } }]
		},
		asyncApiSubscription: {
			type: "object",
			title: "AsyncApiSubscription",
			description: "An object used to configure the subscription to messages consumed using the target operation.",
			unevaluatedProperties: !1,
			properties: {
				filter: {
					$ref: "#/$defs/runtimeExpression",
					title: "AsyncApiSubscriptionCorrelation",
					description: "A runtime expression, if any, used to filter consumed messages."
				},
				consume: {
					$ref: "#/$defs/asyncApiMessageConsumptionPolicy",
					title: "AsyncApiMessageConsumptionPolicy",
					description: "An object used to configure the subscription's message consumption policy."
				},
				foreach: {
					$ref: "#/$defs/subscriptionIterator",
					title: "AsyncApiSubscriptionIterator",
					description: "Configures the iterator, if any, for processing consumed messages(s)."
				}
			},
			required: ["consume"]
		},
		asyncApiMessageConsumptionPolicy: {
			type: "object",
			title: "AsyncApiMessageConsumptionPolicy",
			description: "An object used to configure a subscription's message consumption policy.",
			unevaluatedProperties: !1,
			properties: { for: {
				$ref: "#/$defs/duration",
				title: "AsyncApiMessageConsumptionPolicyFor",
				description: "Specifies the time period over which messages will be consumed."
			} },
			oneOf: [
				{
					properties: { amount: {
						type: "integer",
						description: "The amount of (filtered) messages to consume before disposing of the subscription."
					} },
					title: "AsyncApiMessageConsumptionPolicyAmount",
					required: ["amount"]
				},
				{
					properties: { while: {
						$ref: "#/$defs/runtimeExpression",
						description: "A runtime expression evaluated after each consumed (filtered) message to decide if message consumption should continue."
					} },
					title: "AsyncApiMessageConsumptionPolicyWhile",
					required: ["while"]
				},
				{
					properties: { until: {
						$ref: "#/$defs/runtimeExpression",
						description: "A runtime expression evaluated before each consumed (filtered) message to decide if message consumption should continue."
					} },
					title: "AsyncApiMessageConsumptionPolicyUntil",
					required: ["until"]
				}
			]
		},
		subscriptionIterator: {
			type: "object",
			title: "SubscriptionIterator",
			description: "Configures the iteration over each item (event or message) consumed by a subscription.",
			unevaluatedProperties: !1,
			properties: {
				item: {
					type: "string",
					title: "SubscriptionIteratorItem",
					description: "The name of the variable used to store the current item being enumerated.",
					default: "item"
				},
				at: {
					type: "string",
					title: "SubscriptionIteratorIndex",
					description: "The name of the variable used to store the index of the current item being enumerated.",
					default: "index"
				},
				do: {
					$ref: "#/$defs/taskList",
					title: "SubscriptionIteratorTasks",
					description: "The tasks to perform for each consumed item."
				},
				output: {
					$ref: "#/$defs/output",
					title: "SubscriptionIteratorOutput",
					description: "An object, if any, used to customize the item's output and to document its schema."
				},
				export: {
					$ref: "#/$defs/export",
					title: "SubscriptionIteratorExport",
					description: "An object, if any, used to customize the content of the workflow context."
				}
			}
		}
	}
}, ld = {
	Workflow: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#",
	A2AArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/4/allOf/1/properties/with",
	AllEventConsumptionStrategy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy/oneOf/0",
	AllEventConsumptionStrategyConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy/oneOf/0/properties/all",
	AnyEventConsumptionStrategy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1",
	AnyEventConsumptionStrategyConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1/properties/any",
	AnyEventConsumptionStrategyUntil: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1/properties/until",
	AnyEventUntilConsumed: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy/oneOf/1/properties/until/oneOf/1",
	AsyncApiArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/0/allOf/1/properties/with",
	AuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy",
	AuthenticationPolicyReference: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/referenceableAuthenticationPolicy/oneOf/0",
	BasicAuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/0",
	BasicAuthenticationPolicyConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/0/properties/basic",
	BasicAuthenticationProperties: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/0/properties/basic/oneOf/0",
	BearerAuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/1",
	BearerAuthenticationPolicyConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/1/properties/bearer",
	BearerAuthenticationProperties: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/1/properties/bearer/oneOf/0",
	CallA2A: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/4",
	CallAsyncAPI: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/0",
	CallFunction: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/6",
	CallGRPC: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/1",
	CallHTTP: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/2",
	CallMCP: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/5",
	CallOpenAPI: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/3",
	CallTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask",
	Catalog: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/catalog",
	CatchErrors: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/tryTask/allOf/1/properties/catch/properties/errors",
	ConstantBackoff: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy/properties/backoff/oneOf/0",
	Container: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/0/properties/container",
	ContainerArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/0/properties/container/properties/arguments",
	ContainerEnvironment: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/0/properties/container/properties/environment",
	ContainerLifetime: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/0/properties/container/properties/lifetime",
	ContainerPorts: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/0/properties/container/properties/ports",
	ContainerVolumes: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/0/properties/container/properties/volumes",
	DigestAuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/2",
	DigestAuthenticationPolicyConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/2/properties/digest",
	DigestAuthenticationProperties: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/2/properties/digest/oneOf/0",
	Document: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/document",
	DoTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/doTask",
	Duration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/duration",
	DurationInline: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/duration/oneOf/0",
	EmitEventDefinition: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/emitTask/allOf/1/properties/emit/properties/event",
	EmitEventWith: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/emitTask/allOf/1/properties/emit/properties/event/properties/with",
	EmitTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/emitTask",
	EmitTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/emitTask/allOf/1/properties/emit",
	Endpoint: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/endpoint",
	EndpointConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/endpoint/oneOf/2",
	EndpointUri: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/endpoint/oneOf/2/properties/uri",
	Error: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/error",
	ErrorDetails: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/error/properties/detail",
	ErrorFilter: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/errorFilter",
	ErrorInstance: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/error/properties/instance",
	ErrorTitle: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/error/properties/title",
	ErrorType: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/error/properties/type",
	EventConsumptionStrategy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy",
	EventData: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventProperties/properties/data",
	EventDataschema: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventProperties/properties/dataschema",
	EventFilter: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventFilter",
	EventFilterCorrelate: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventFilter/properties/correlate",
	EventSource: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventProperties/properties/source",
	EventTime: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventProperties/properties/time",
	ExponentialBackOff: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy/properties/backoff/oneOf/1",
	Export: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/export",
	ExportAs: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/export/properties/as",
	Extension: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/extension",
	ExtensionItem: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/extensions/items",
	ExternalResource: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/externalResource",
	ExternalScript: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/1/properties/script/oneOf/1",
	FlowDirective: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/flowDirective",
	ForkTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/forkTask",
	ForkTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/forkTask/allOf/1/properties/fork",
	ForTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/forTask",
	ForTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/forTask/allOf/1/properties/for",
	FunctionArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/6/allOf/1/properties/with",
	GRPCArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/1/allOf/1/properties/with",
	HTTPArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/2/allOf/1/properties/with",
	HTTPBody: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/2/allOf/1/properties/with/properties/body",
	HTTPHeaders: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/2/allOf/1/properties/with/properties/headers",
	HTTPQuery: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/2/allOf/1/properties/with/properties/query",
	InlineScript: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/1/properties/script/oneOf/0",
	Input: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/input",
	InputFrom: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/input/properties/from",
	LinearBackoff: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy/properties/backoff/oneOf/2",
	ListenTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/listenTask",
	ListenTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/listenTask/allOf/1/properties/listen",
	MCPArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/5/allOf/1/properties/with",
	McpCallTransport: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/5/allOf/1/properties/with/properties/transport",
	McpClient: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/5/allOf/1/properties/with/properties/client",
	McpMethodParameters: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/5/allOf/1/properties/with/properties/parameters",
	OAuth2AuthenticationData: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/oauth2AuthenticationProperties",
	OAuth2AuthenticationDataAudiences: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/oauth2AuthenticationProperties/properties/audiences",
	OAuth2AuthenticationDataClient: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/oauth2AuthenticationProperties/properties/client",
	OAuth2AuthenticationDataScopes: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/oauth2AuthenticationProperties/properties/scopes",
	OAuth2AuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/3",
	OAuth2AuthenticationPolicyConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/3/properties/oauth2",
	OAuth2AuthenticationPropertiesEndpoints: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/3/properties/oauth2/oneOf/0/properties/endpoints",
	OAuth2ConnectAuthenticationProperties: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/3/properties/oauth2/oneOf/0",
	OAuth2Issuers: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/oauth2AuthenticationProperties/properties/issuers",
	OAuth2TokenDefinition: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/oauth2Token",
	OAuth2TokenRequest: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/oauth2AuthenticationProperties/properties/request",
	OneEventConsumptionStrategy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventConsumptionStrategy/oneOf/2",
	OpenAPIArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/3/allOf/1/properties/with",
	OpenIdConnectAuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/4",
	OpenIdConnectAuthenticationPolicyConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/4/properties/oidc",
	OpenIdConnectAuthenticationProperties: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/authenticationPolicy/oneOf/4/properties/oidc/oneOf/0",
	Output: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/output",
	OutputAs: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/output/properties/as",
	RaiseTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/raiseTask",
	RaiseTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/raiseTask/allOf/1/properties/raise",
	RaiseTaskError: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/raiseTask/allOf/1/properties/raise/properties/error",
	ReferenceableAuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/referenceableAuthenticationPolicy",
	RetryBackoff: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy/properties/backoff",
	RetryLimit: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy/properties/limit",
	RetryLimitAttempt: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy/properties/limit/properties/attempt",
	RetryPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy",
	RetryPolicyJitter: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/retryPolicy/properties/jitter",
	RunContainer: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/0",
	RunScript: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/1",
	RunShell: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/2",
	RunTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask",
	RunTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run",
	RuntimeExpression: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runtimeExpression",
	RunWorkflow: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/3",
	Schedule: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/schedule",
	Schema: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/schema",
	SchemaExternal: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/schema/oneOf/1",
	SchemaInline: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/schema/oneOf/0",
	Script: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/1/properties/script",
	SecretBasedAuthenticationPolicy: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/secretBasedAuthenticationPolicy",
	SetTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/setTask",
	SetTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/setTask/allOf/1/properties/set",
	Shell: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/2/properties/shell",
	ShellArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/2/properties/shell/properties/arguments",
	ShellEnvironment: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/2/properties/shell/properties/environment",
	SubflowConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/3/properties/workflow",
	SubflowInput: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/runTask/allOf/1/properties/run/oneOf/3/properties/workflow/properties/input",
	SubscriptionIterator: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/subscriptionIterator",
	SwitchCase: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/switchTask/allOf/1/properties/switch/items/additionalProperties",
	SwitchItem: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/switchTask/allOf/1/properties/switch/items",
	SwitchTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/switchTask",
	SwitchTaskConfiguration: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/switchTask/allOf/1/properties/switch",
	Task: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/task",
	TaskBase: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/taskBase",
	TaskBaseIf: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/taskBase/properties/if",
	TaskItem: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/taskList/items",
	TaskList: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/taskList",
	TaskMetadata: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/taskBase/properties/metadata",
	TaskTimeout: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/taskBase/properties/timeout",
	Timeout: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/timeout",
	TryTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/tryTask",
	TryTaskCatch: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/tryTask/allOf/1/properties/catch",
	TryTaskCatchRetry: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/tryTask/allOf/1/properties/catch/properties/retry",
	UriTemplate: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/uriTemplate",
	Use: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use",
	UseAuthentications: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/authentications",
	UseCatalogs: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/catalogs",
	UseErrors: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/errors",
	UseExtensions: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/extensions",
	UseFunctions: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/functions",
	UseRetries: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/retries",
	UseSecrets: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/secrets",
	UseTimeouts: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/use/properties/timeouts",
	WaitTask: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/waitTask",
	WithA2AParameters: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/4/allOf/1/properties/with/properties/parameters",
	WithEvent: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/eventFilter/properties/with",
	WithGRPCArguments: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/1/allOf/1/properties/with/properties/arguments",
	WithGRPCService: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/1/allOf/1/properties/with/properties/service",
	WithOpenAPIParameters: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/$defs/callTask/oneOf/3/allOf/1/properties/with/properties/parameters",
	WorkflowMetadata: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/document/properties/metadata",
	WorkflowTags: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/document/properties/tags",
	WorkflowTimeout: "https://open-workflow-specification.org/schemas/1.0.3/workflow.json#/properties/timeout"
}, ud = new Xc.default({
	schemas: [cd],
	strict: !1
});
(0, Zc.default)(ud), new Map(Object.entries(ld).map(([e, t]) => {
	if (!t) throw Error(`No JSON pointer provided for type '${e}'`);
	let n = ud.getSchema(t);
	if (!n) throw Error(`Unable to find schema '${t}' for type '${e}'`);
	return [e, n];
}));
var dd = cd, fd = "urn:open-workflow-specification:workflow-schema";
function pd() {
	return (0, Jc.create)({ getLanguageSettings() {
		return { schemas: [{
			uri: dd.$id || fd,
			fileMatch: ["*.json"],
			schema: dd
		}] };
	} });
}
var md = "{\n  \"document\": {\n    \"dsl\": \"1.0.3\",\n    \"namespace\": \"examples\",\n    \"name\": \"hello-world\",\n    \"version\": \"0.1.0\"\n  },\n  \"do\": [\n    {\n      \"greet\": {\n        \"call\": \"http\",\n        \"with\": {\n          \"method\": \"GET\",\n          \"endpoint\": \"https://httpbin.org/get\"\n        }\n      }\n    }\n  ]\n}";
function hd(e) {
	return e.trim().length === 0;
}
var gd = 15, _d = {
	start: {
		line: 0,
		character: 0
	},
	end: {
		line: 0,
		character: 0
	}
};
function vd() {
	return {
		capabilities: { completionProvider: {} },
		create() {
			return {
				isAdditionalCompletion: !0,
				provideCompletionItems(e) {
					return e.languageId !== "json" || !hd(e.getText()) ? null : {
						isIncomplete: !1,
						items: [{
							label: "Insert Hello World workflow",
							kind: gd,
							detail: "Insert a Hello World Open Workflow document",
							textEdit: {
								range: _d,
								newText: md
							}
						}]
					};
				}
			};
		}
	};
}
function yd() {
	return {
		capabilities: { codeLensProvider: {} },
		create() {
			return { provideCodeLenses(e) {
				return e.languageId !== "json" || !hd(e.getText()) ? null : [{
					range: {
						start: {
							line: 0,
							character: 0
						},
						end: {
							line: 0,
							character: 0
						}
					},
					command: {
						title: "Create an Open Workflow",
						command: "openworkflow.insertHelloWorld",
						arguments: [md]
					}
				}];
			} };
		}
	};
}
function bd() {
	return [
		pd(),
		vd(),
		yd()
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@volar+typescript@2.4.28/node_modules/@volar/typescript/lib/common.js
var xd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.resolveFileLanguageId = t;
	function t(e) {
		switch (e.split(".").pop()) {
			case "js": return "javascript";
			case "cjs": return "javascript";
			case "mjs": return "javascript";
			case "ts": return "typescript";
			case "cts": return "typescript";
			case "mts": return "typescript";
			case "jsx": return "javascriptreact";
			case "tsx": return "typescriptreact";
			case "json": return "json";
		}
	}
})), Sd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createResolveModuleName = t;
	function t(e, t, n, r, i) {
		let a = /* @__PURE__ */ new Map(), o = {
			readFile: n.readFile.bind(n),
			directoryExists: n.directoryExists?.bind(n),
			realpath: n.realpath?.bind(n),
			getCurrentDirectory: n.getCurrentDirectory?.bind(n),
			getDirectories: n.getDirectories?.bind(n),
			useCaseSensitiveFileNames: typeof n.useCaseSensitiveFileNames == "function" ? n.useCaseSensitiveFileNames.bind(n) : n.useCaseSensitiveFileNames,
			fileExists(e) {
				let t = n.fileExists(e);
				for (let { typescript: n } of r) if (n) {
					if (!t) for (let { extension: t } of n.extraFileExtensions) {
						if (!e.endsWith(`.d.${t}.ts`)) continue;
						let n = e.slice(0, -`.d.${t}.ts`.length) + `.${t}`;
						if (s(n)) {
							let t = i(n);
							if (t?.generated) {
								let r = t.generated.languagePlugin.typescript?.getServiceScript(t.generated.root);
								if (r) {
									let t = n + ".d.ts";
									return (r.extension === ".js" || r.extension === ".jsx") && s(t) ? a.set(e, {
										sourceFileName: t,
										extension: ".ts"
									}) : a.set(e, {
										sourceFileName: n,
										extension: r.extension
									}), !0;
								}
							}
						}
					}
					if (n.resolveHiddenExtensions && e.endsWith(".d.ts")) for (let { extension: t } of n.extraFileExtensions) {
						let n = e.slice(0, -5) + `.${t}`;
						if (s(n)) {
							let t = i(n);
							if (t?.generated) {
								let r = t.generated.languagePlugin.typescript?.getServiceScript(t.generated.root);
								if (r) return a.set(e, {
									sourceFileName: n,
									extension: r.extension
								}), !0;
							}
						}
					}
				}
				return t;
			}
		};
		return (t, n, r, i, s, c) => {
			let l = e.resolveModuleName(t, n, r, o, i, s, c);
			if (l.resolvedModule) {
				let e = a.get(l.resolvedModule.resolvedFileName);
				e && (l.resolvedModule.resolvedFileName = e.sourceFileName, l.resolvedModule.extension = e.extension);
			}
			return a.clear(), l;
		};
		function s(e) {
			return n.fileExists(e) ? (t?.(e) ?? n.readFile(e)?.length ?? 0) < 4194304 : !1;
		}
	}
})), Cd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.getServiceScript = t, e.fixupImpliedNodeFormatForFile = n;
	function t(e, t) {
		let n = e.scripts.get(t);
		if (n?.targetIds.size) for (let t of n.targetIds) {
			let r = e.scripts.get(t);
			if (r?.generated) {
				let e = r.generated.languagePlugin.typescript?.getServiceScript(r.generated.root);
				if (e) return [
					e,
					r,
					n
				];
			}
		}
		if (n?.associatedOnly) return [
			void 0,
			n,
			n
		];
		if (n?.generated) {
			let e = n.generated.languagePlugin.typescript?.getServiceScript(n.generated.root);
			if (e) return [
				e,
				n,
				n
			];
		}
		return [
			void 0,
			void 0,
			void 0
		];
	}
	function n(e, t, n, r, i, a) {
		if (n.impliedNodeFormat !== void 0 || !t.some((e) => n.fileName.endsWith(e)) || [
			".d.ts",
			".ts",
			".tsx",
			".js",
			".jsx"
		].some((e) => n.fileName.endsWith(e))) return;
		let o = n.fileName + ".ts", s = e.getImpliedNodeFormatForFileWorker?.(o, r, i, a)?.impliedNodeFormat;
		if (s !== void 0) return n.impliedNodeFormat = s, () => n.impliedNodeFormat = void 0;
	}
})), wd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.decorateLanguageServiceHost = r, e.searchExternalFiles = i;
	var t = Sd(), n = Cd();
	function r(e, r, i) {
		let a = r.plugins.map((e) => e.typescript?.extraFileExtensions.map((e) => "." + e.extension) ?? []).flat(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), c = i.readDirectory?.bind(i), l = i.resolveModuleNameLiterals?.bind(i), u = i.resolveModuleNames?.bind(i), d = i.getScriptSnapshot.bind(i), f = i.getScriptKind?.bind(i);
		if (c && (i.readDirectory = (e, t, n, r, i) => {
			if (t) for (let e of a) t.includes(e) || (t = [...t, e]);
			return c(e, t, n, r, i);
		}), a.length) {
			let o = (0, t.createResolveModuleName)(e, e.sys.getFileSize, i, r.plugins, (e) => r.scripts.get(e)), s = i.getModuleResolutionCache?.();
			l && (i.resolveModuleNameLiterals = (t, r, c, u, d, ...f) => {
				let p = (0, n.fixupImpliedNodeFormatForFile)(e, a, d, s?.getPackageJsonInfoCache(), i, u);
				try {
					return t.every((e) => !a.some((t) => e.text.endsWith(t))) ? l(t, r, c, u, d, ...f) : t.map((t) => {
						let n = e.getModeForUsageLocation(d, t, u);
						return o(t.text, r, u, s, c, n);
					});
				} finally {
					p?.();
				}
			}), u && (i.resolveModuleNames = (e, t, n, r, i, c) => e.every((e) => !a.some((t) => e.endsWith(t))) ? u(e, t, n, r, i, c) : e.map((e) => o(e, t, i, s, r).resolvedModule));
		}
		i.getScriptSnapshot = (e) => {
			let t = p(e, !0);
			return t ? t.snapshot : d(e);
		}, f && (i.getScriptKind = (e) => {
			let t = p(e, !1);
			return t ? t.scriptKind : f(e);
		});
		function p(t, n) {
			if (s.has(t)) return;
			let a;
			try {
				a = i.getScriptVersion(t);
			} catch {
				s.add(t);
			}
			if (a === void 0) return;
			let c = o.get(t);
			if (!c || c[0] !== a) {
				c = [a];
				let i = r.scripts.get(t, void 0, n);
				if (i?.generated) {
					let t = i.generated.languagePlugin.typescript?.getServiceScript(i.generated.root);
					if (t) {
						if (t.preventLeadingOffset) c[1] = {
							extension: t.extension,
							scriptKind: t.scriptKind,
							snapshot: t.code.snapshot
						};
						else {
							let n = i.snapshot.getText(0, i.snapshot.getLength()).split("\n").map((e) => " ".repeat(e.length)).join("\n") + t.code.snapshot.getText(0, t.code.snapshot.getLength());
							c[1] = {
								extension: t.extension,
								scriptKind: t.scriptKind,
								snapshot: e.ScriptSnapshot.fromString(n)
							};
						}
					}
					i.generated.languagePlugin.typescript?.getExtraServiceScripts && console.warn("getExtraServiceScripts() is not available in TS plugin.");
				}
				o.set(t, c);
			}
			return c[1];
		}
	}
	function i(e, t, n) {
		if (t.projectKind !== e.server.ProjectKind.Configured) return [];
		let r = t.getProjectName(), i = e.readJsonConfigFile(r, t.readFile.bind(t)), a = {
			useCaseSensitiveFileNames: t.useCaseSensitiveFileNames(),
			fileExists: t.fileExists.bind(t),
			readFile: t.readFile.bind(t),
			readDirectory: (...e) => (e[1] = n, t.readDirectory(...e))
		};
		return e.parseJsonSourceFileConfigFileContent(i, a, t.getCurrentDirectory()).fileNames;
	}
})), Td = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.transformCallHierarchyItem = a, e.transformDiagnostic = o, e.fillSourceFileText = s, e.transformFileTextChanges = c, e.transformDocumentSpan = l, e.transformSpan = u, e.transformTextChange = d, e.transformTextSpan = f, e.toSourceOffset = p, e.toSourceRanges = m, e.toSourceOffsets = h, e.toGeneratedRange = g, e.toGeneratedRanges = _, e.toGeneratedOffset = y, e.toGeneratedOffsets = b, e.getMappingOffset = x;
	var t = v(), n = Cd(), r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakSet();
	function a(e, t, n, r) {
		let i = u(e, t.file, t.span, n, r), a = u(e, t.file, t.selectionSpan, n, r);
		return {
			...t,
			file: i?.fileName ?? t.file,
			span: i?.textSpan ?? {
				start: 0,
				length: 0
			},
			selectionSpan: a?.textSpan ?? {
				start: 0,
				length: 0
			}
		};
	}
	function o(e, i, a, c) {
		if (!r.has(i)) {
			r.set(i, void 0);
			let { relatedInformation: l } = i;
			if (l && (i.relatedInformation = l.map((t) => o(e, t, a, c)).filter((e) => !!e)), i.file !== void 0 && i.start !== void 0 && i.length !== void 0) {
				let [o] = (0, n.getServiceScript)(e, i.file.fileName);
				if (o) {
					let [n, l] = f(void 0, e, o, {
						start: i.start,
						length: i.length
					}, !0, (e) => (0, t.shouldReportDiagnostics)(e, String(i.source), String(i.code))) ?? [], u = n ? i.file.fileName === n ? i.file : a?.getSourceFile(n) : void 0;
					l && u && (c && s(e, i.file), r.set(i, {
						...i,
						file: u,
						start: l.start,
						length: l.length
					}));
				} else r.set(i, i);
			} else r.set(i, i);
		}
		return r.get(i);
	}
	function s(e, t) {
		if (i.has(t)) return;
		i.add(t);
		let [r] = (0, n.getServiceScript)(e, t.fileName);
		if (r && !r.preventLeadingOffset) {
			let n = e.scripts.fromVirtualCode(r.code);
			t.text = n.snapshot.getText(0, n.snapshot.getLength()) + t.text.substring(n.snapshot.getLength());
		}
	}
	function c(e, t, r, i) {
		let a = {}, o = /* @__PURE__ */ new Set();
		for (let s of t) {
			let [t, c] = (0, n.getServiceScript)(e, s.fileName);
			if (c) s.textChanges.forEach((t) => {
				let { fileName: n, textSpan: o } = u(e, s.fileName, t.span, r, i) ?? {};
				n && o && (a[n] ?? (a[n] = [])).push({
					...t,
					span: o
				});
			});
			else {
				let e = a[s.fileName] ?? (a[s.fileName] = []);
				s.textChanges.forEach((t) => {
					e.push(t);
				}), s.isNewFile && o.add(s.fileName);
			}
		}
		let s = [];
		for (let e in a) s.push({
			fileName: e,
			isNewFile: o.has(e),
			textChanges: a[e]
		});
		return s;
	}
	function l(e, t, n, r, i) {
		let a = u(e, t.fileName, t.textSpan, n, r);
		if (!a && i && (a = {
			fileName: t.fileName,
			textSpan: {
				start: 0,
				length: 0
			}
		}), !a) return;
		let o = u(e, t.fileName, t.contextSpan, n, r), s = u(e, t.originalFileName, t.originalTextSpan, n, r), c = u(e, t.originalFileName, t.originalContextSpan, n, r);
		return {
			...t,
			fileName: a.fileName,
			textSpan: a.textSpan,
			contextSpan: o?.textSpan,
			originalFileName: s?.fileName,
			originalTextSpan: s?.textSpan,
			originalContextSpan: c?.textSpan
		};
	}
	function u(e, t, r, i, a) {
		if (!t || !r) return;
		let [o] = (0, n.getServiceScript)(e, t);
		if (o) {
			let [t, n] = f(void 0, e, o, r, i, a) ?? [];
			if (n && t) return {
				fileName: t,
				textSpan: n
			};
		} else return {
			fileName: t,
			textSpan: r
		};
	}
	function d(e, t, n, r, i, a) {
		let [o, s] = f(e, t, n, r.span, i, a) ?? [];
		if (s && o) return [o, {
			newText: r.newText,
			span: s
		}];
	}
	function f(e, t, n, r, i, a) {
		let o = r.start, s = r.start + r.length;
		for (let [r, c, l] of m(e, t, n, o, s, i, a)) return [r, {
			start: c,
			length: l - c
		}];
	}
	function p(e, t, n, r, i) {
		for (let a of h(e, t, n, r, i)) return a;
	}
	function* m(e, t, n, r, i, a, o) {
		if (e) {
			let s = t.maps.get(n.code, e);
			for (let [c, l] of s.toSourceRange(r - x(t, n), i - x(t, n), a, o)) yield [
				e.id,
				c,
				l
			];
		} else for (let [e, s] of t.maps.forEach(n.code)) for (let [c, l] of s.toSourceRange(r - x(t, n), i - x(t, n), a, o)) yield [
			e.id,
			c,
			l
		];
	}
	function* h(e, t, n, r, i) {
		if (e) {
			let a = t.maps.get(n.code, e);
			for (let [o, s] of a.toSourceLocation(r - x(t, n))) i(s.data) && (yield [e.id, o]);
		} else for (let [e, a] of t.maps.forEach(n.code)) for (let [o, s] of a.toSourceLocation(r - x(t, n))) i(s.data) && (yield [e.id, o]);
	}
	function g(e, t, n, r, i, a) {
		for (let o of _(e, t, n, r, i, a)) return o;
	}
	function* _(e, t, n, r, i, a) {
		let o = e.maps.get(t.code, n);
		for (let [n, s] of o.toGeneratedRange(r, i, !0, a)) yield [n + x(e, t), s + x(e, t)];
	}
	function y(e, t, n, r, i) {
		for (let [a] of b(e, t, n, r, i)) return a;
	}
	function* b(e, t, n, r, i) {
		let a = e.maps.get(t.code, n);
		for (let [n, o] of a.toGeneratedLocation(r)) i(o.data) && (yield [n + x(e, t), o]);
	}
	function x(e, t) {
		return t.preventLeadingOffset ? 0 : e.scripts.fromVirtualCode(t.code).snapshot.getLength();
	}
})), Ed = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.decorateProgram = r;
	var t = Td(), n = Cd();
	function r(e, r) {
		let i = r.emit, a = r.getSyntacticDiagnostics, o = r.getSemanticDiagnostics, s = r.getGlobalDiagnostics, c = r.getSourceFileByPath, l = r.getBindAndCheckDiagnostics;
		r.emit = (...n) => {
			let a = i(...n);
			return {
				...a,
				diagnostics: a.diagnostics.map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e)
			};
		}, r.getSyntacticDiagnostics = (i, o) => {
			if (i) {
				let [s, c, l] = (0, n.getServiceScript)(e, i.fileName), u = c ? r.getSourceFile(c.id) : i;
				return a(u, o).map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e).filter((t) => !s || !t.file || e.scripts.get(t.file.fileName) === l);
			}
			return a(void 0, o).map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e);
		}, r.getSemanticDiagnostics = (i, a) => {
			if (i) {
				let [s, c, l] = (0, n.getServiceScript)(e, i.fileName), u = c ? r.getSourceFile(c.id) : i;
				return o(u, a).map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e).filter((t) => !s || !t.file || e.scripts.get(t.file.fileName) === l);
			}
			return o(void 0, a).map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e);
		}, r.getGlobalDiagnostics = (n) => s(n).map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e), r.getBindAndCheckDiagnostics = (i, a) => {
			if (i) {
				let [o, s, c] = (0, n.getServiceScript)(e, i.fileName), u = s ? r.getSourceFile(s.id) : i;
				return l(u, a).map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e).filter((t) => !o || e.scripts.get(t.file.fileName) === c);
			}
			return l(void 0, a).map((n) => (0, t.transformDiagnostic)(e, n, r, !0)).filter((e) => !!e);
		}, r.getSourceFileByPath = (n) => {
			let r = c(n);
			return r && (0, t.fillSourceFileText)(e, r), r;
		};
	}
})), Dd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.proxyCreateProgram = c;
	var t = v(), n = xd(), r = Sd(), i = Ed(), a = Cd(), o = (e, t) => {
		if (e.length !== t.length) return !1;
		for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
		return !0;
	}, s = (e, t) => {
		let n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (let r of n) if (e[r] !== t[r]) return !1;
		return !0;
	};
	function c(e, c, u) {
		let d = new t.FileMap(e.sys.useCaseSensitiveFileNames), f = /* @__PURE__ */ new WeakMap(), p, m, h, g;
		return new Proxy(c, { apply: (c, _, v) => {
			let y = v[0];
			if (l(!!y.host, "!!options.host"), !p || !m || !h || !o(y.rootNames, p.rootNames) || !s(y.options, p.options)) {
				g = e.createModuleResolutionCache(y.host.getCurrentDirectory(), y.host.getCanonicalFileName, y.options), p = y;
				let r = u(e, y);
				m = Array.isArray(r) ? r : r.languagePlugins, h = (0, t.createLanguage)([...m, { getLanguageId: n.resolveFileLanguageId }], new t.FileMap(e.sys.useCaseSensitiveFileNames), (e, t) => {
					if (t && !d.has(e)) {
						let t = b.readFile(e);
						t === void 0 ? d.set(e, [void 0, void 0]) : d.set(e, [void 0, {
							getChangeRange() {},
							getLength() {
								return t.length;
							},
							getText(e, n) {
								return t.substring(e, n);
							}
						}]);
					}
					let n = d.get(e)?.[1];
					n ? h.scripts.set(e, n) : h.scripts.delete(e);
				}), "setup" in r && r.setup?.(h);
			}
			let b = y.host, x = m.map((e) => e.typescript?.extraFileExtensions.map(({ extension: e }) => `.${e}`) ?? []).flat();
			if (y.host = { ...b }, y.host.getSourceFile = (t, n, r, i) => {
				let a = b.getSourceFile(t, n, r, i);
				if ((!d.has(t) || d.get(t)?.[0] !== a) && (a ? d.set(t, [a, {
					getChangeRange() {},
					getLength() {
						return a.text.length;
					},
					getText(e, t) {
						return a.text.substring(e, t);
					}
				}]) : d.set(t, [void 0, void 0])), a) {
					if (!f.has(a)) {
						let r = h.scripts.get(t);
						if (l(!!r, "!!sourceScript"), f.set(a, void 0), r.generated?.languagePlugin.typescript) {
							let { getServiceScript: i, getExtraServiceScripts: o } = r.generated.languagePlugin.typescript, s = i(r.generated.root);
							if (s) {
								let r;
								r = s.preventLeadingOffset ? s.code.snapshot.getText(0, s.code.snapshot.getLength()) : a.text.split("\n").map((e) => " ".repeat(e.length)).join("\n") + s.code.snapshot.getText(0, s.code.snapshot.getLength());
								let i = e.createSourceFile(t, r, n, void 0, s.scriptKind);
								i.version = a.version, a.scriptKind = s.scriptKind, f.set(a, i);
							}
							o && console.warn("getExtraServiceScripts() is not available in this use case.");
						}
					}
					return f.get(a) ?? a;
				}
			}, x.length) {
				y.options.allowArbitraryExtensions = !0;
				let t = (0, r.createResolveModuleName)(e, e.sys.getFileSize, b, h.plugins, (e) => h.scripts.get(e)), n = b.resolveModuleNameLiterals, i = b.resolveModuleNames;
				y.host.resolveModuleNameLiterals = (r, i, o, s, c, ...l) => {
					let u = (0, a.fixupImpliedNodeFormatForFile)(e, x, c, g.getPackageJsonInfoCache(), b, s);
					try {
						return n && r.every((e) => !x.some((t) => e.text.endsWith(t))) ? n(r, i, o, s, c, ...l) : r.map((n) => {
							let r = e.getModeForUsageLocation(c, n, s);
							return t(n.text, i, s, g, o, r);
						});
					} finally {
						u?.();
					}
				}, y.host.resolveModuleNames = (e, n, r, a, o, s) => i && e.every((e) => !x.some((t) => e.endsWith(t))) ? i(e, n, r, a, o, s) : e.map((e) => t(e, n, o, g, a, s?.impliedNodeFormat).resolvedModule);
			}
			let S = Reflect.apply(c, _, v);
			return (0, i.decorateProgram)(h, S), S;
		} });
	}
	function l(e, t) {
		if (!e) throw console.error(t), Error(t);
	}
})), Od = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.dedupeDocumentSpans = t;
	function t(e) {
		return n(e, (e) => [
			e.fileName,
			e.textSpan.start,
			e.textSpan.length
		].join(":"));
	}
	function n(e, t) {
		let n = /* @__PURE__ */ new Map();
		for (let r of e.reverse()) n.set(t(r), r);
		return [...n.values()];
	}
})), kd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createProxyLanguageService = o;
	var t = v(), n = Od(), r = Td(), i = Cd(), a = /\\/g;
	function o(e) {
		let t = /* @__PURE__ */ new Map(), n;
		return {
			initialize(t) {
				n = (n, r) => {
					switch (r) {
						case "getNavigationTree": return s(t, n[r]);
						case "getOutliningSpans": return c(t, n[r]);
						case "getFormattingEditsForDocument": return l(t, n[r]);
						case "getFormattingEditsForRange": return u(t, n[r]);
						case "getFormattingEditsAfterKeystroke": return d(t, n[r]);
						case "getEditsForFileRename": return f(t, n[r]);
						case "getLinkedEditingRangeAtPosition": return p(t, n[r]);
						case "prepareCallHierarchy": return m(t, n[r]);
						case "provideCallHierarchyIncomingCalls": return h(t, n[r]);
						case "provideCallHierarchyOutgoingCalls": return g(t, n[r]);
						case "organizeImports": return _(t, n[r]);
						case "getQuickInfoAtPosition": return y(t, n[r]);
						case "getSignatureHelpItems": return b(t, n[r]);
						case "getDocumentHighlights": return x(t, n[r]);
						case "getApplicableRefactors": return S(t, n[r]);
						case "getEditsForRefactor": return C(t, n[r]);
						case "getCombinedCodeFix": return w(t, n[r]);
						case "getRenameInfo": return T(t, n[r]);
						case "getCodeFixesAtPosition": return E(t, n[r]);
						case "getEncodedSemanticClassifications": return D(t, n[r]);
						case "getSyntacticDiagnostics": return O(t, e, n[r]);
						case "getSemanticDiagnostics": return k(t, e, n[r]);
						case "getSuggestionDiagnostics": return A(t, e, n[r]);
						case "getDefinitionAndBoundSpan": return j(t, n[r]);
						case "findReferences": return M(t, n[r]);
						case "getDefinitionAtPosition": return N(t, n[r]);
						case "getTypeDefinitionAtPosition": return ee(t, n[r]);
						case "getImplementationAtPosition": return te(t, n[r]);
						case "findRenameLocations": return ne(t, n[r]);
						case "getReferencesAtPosition": return re(t, n[r]);
						case "getCompletionsAtPosition": return ie(t, n[r]);
						case "getCompletionEntryDetails": return ae(t, n[r]);
						case "provideInlayHints": return oe(t, n[r]);
						case "getFileReferences": return se(t, n[r]);
						case "getNavigateToItems": return ce(t, n[r]);
					}
				};
			},
			proxy: new Proxy(e, {
				get(e, r, i) {
					if (n) {
						t.has(r) || t.set(r, n(e, r));
						let i = t.get(r);
						if (i) return i;
					}
					return Reflect.get(e, r, i);
				},
				set(e, t, n, r) {
					return Reflect.set(e, t, n, r);
				}
			})
		};
	}
	function s(e, t) {
		return (n) => {
			let r = n.replace(a, "/"), [o, s] = (0, i.getServiceScript)(e, r);
			if (o || s?.associatedOnly) {
				let e = t(s.id);
				return e.childItems = void 0, e;
			}
			return t(r);
		};
	}
	function c(e, t) {
		return (n) => {
			let r = n.replace(a, "/"), [o, s] = (0, i.getServiceScript)(e, r);
			return o || s?.associatedOnly ? [] : t(r);
		};
	}
	function l(e, n) {
		return (o, s) => {
			let c = o.replace(a, "/"), [l, u, d] = (0, i.getServiceScript)(e, c);
			return u?.associatedOnly ? [] : l ? e.maps.get(l.code, u).mappings.some((e) => (0, t.isFormattingEnabled)(e.data)) ? n(u.id, s).map((n) => (0, r.transformTextChange)(d, e, l, n, !1, t.isFormattingEnabled)?.[1]).filter((e) => !!e) : [] : n(c, s);
		};
	}
	function u(e, n) {
		return (o, s, c, l) => {
			let u = o.replace(a, "/"), [d, f, p] = (0, i.getServiceScript)(e, u);
			if (f?.associatedOnly) return [];
			if (d) {
				let i = (0, r.toGeneratedRange)(e, d, p, s, c, t.isFormattingEnabled);
				return i === void 0 ? [] : n(f.id, i[0], i[1], l).map((n) => (0, r.transformTextChange)(p, e, d, n, !1, t.isFormattingEnabled)?.[1]).filter((e) => !!e);
			}
			return n(u, s, c, l);
		};
	}
	function d(e, n) {
		return (o, s, c, l) => {
			let u = o.replace(a, "/"), [d, f, p] = (0, i.getServiceScript)(e, u);
			if (f?.associatedOnly) return [];
			if (d) {
				let i = (0, r.toGeneratedOffset)(e, d, p, s, t.isFormattingEnabled);
				return i === void 0 ? [] : n(f.id, i, c, l).map((n) => (0, r.transformTextChange)(p, e, d, n, !1, t.isFormattingEnabled)?.[1]).filter((e) => !!e);
			}
			return n(u, s, c, l);
		};
	}
	function f(e, n) {
		return (i, a, o, s) => {
			let c = n(i, a, o, s);
			return (0, r.transformFileTextChanges)(e, c, !1, t.isRenameEnabled);
		};
	}
	function p(e, n) {
		return (o, s) => {
			let c = o.replace(a, "/"), [l, u, d] = (0, i.getServiceScript)(e, c);
			if (!u?.associatedOnly) {
				if (l) {
					let i = (0, r.toGeneratedOffset)(e, l, d, s, t.isLinkedEditingEnabled);
					if (i !== void 0) {
						let a = n(u.id, i);
						if (a) return {
							ranges: a.ranges.map((n) => (0, r.transformTextSpan)(d, e, l, n, !1, t.isLinkedEditingEnabled)?.[1]).filter((e) => !!e),
							wordPattern: a.wordPattern
						};
					}
				} else return n(c, s);
			}
		};
	}
	function m(e, n) {
		return (o, s) => {
			let c = o.replace(a, "/"), [l, u, d] = (0, i.getServiceScript)(e, c);
			if (!u?.associatedOnly) {
				if (l) {
					let i = (0, r.toGeneratedOffset)(e, l, d, s, t.isCallHierarchyEnabled);
					if (i !== void 0) {
						let a = n(u.id, i);
						if (Array.isArray(a)) return a.map((n) => (0, r.transformCallHierarchyItem)(e, n, !0, t.isCallHierarchyEnabled));
						if (a) return (0, r.transformCallHierarchyItem)(e, a, !0, t.isCallHierarchyEnabled);
					}
				} else return n(c, s);
			}
		};
	}
	function h(e, n) {
		return (o, s) => {
			let c = [], l = o.replace(a, "/"), [u, d, f] = (0, i.getServiceScript)(e, l);
			if (d?.associatedOnly) return [];
			if (u) {
				let i = (0, r.toGeneratedOffset)(e, u, f, s, t.isCallHierarchyEnabled);
				i !== void 0 && (c = n(d.id, i));
			} else c = n(l, s);
			return c.map((n) => ({
				from: (0, r.transformCallHierarchyItem)(e, n.from, !0, t.isCallHierarchyEnabled),
				fromSpans: n.fromSpans.map((i) => (0, r.transformSpan)(e, n.from.file, i, !0, t.isCallHierarchyEnabled)?.textSpan).filter((e) => !!e)
			}));
		};
	}
	function g(e, n) {
		return (o, s) => {
			let c = [], l = o.replace(a, "/"), [u, d, f] = (0, i.getServiceScript)(e, l);
			if (d?.associatedOnly) return [];
			if (u) {
				let i = (0, r.toGeneratedOffset)(e, u, f, s, t.isCallHierarchyEnabled);
				i !== void 0 && (c = n(d.id, i));
			} else c = n(l, s);
			return c.map((n) => ({
				to: (0, r.transformCallHierarchyItem)(e, n.to, !0, t.isCallHierarchyEnabled),
				fromSpans: n.fromSpans.map((n) => u ? (0, r.transformTextSpan)(f, e, u, n, !0, t.isCallHierarchyEnabled)?.[1] : n).filter((e) => !!e)
			}));
		};
	}
	function _(e, n) {
		return (i, a, o) => {
			let s = n(i, a, o);
			return (0, r.transformFileTextChanges)(e, s, !1, t.isCodeActionsEnabled);
		};
	}
	function y(e, n) {
		return (o, s, ...c) => {
			let l = o.replace(a, "/"), [u, d, f] = (0, i.getServiceScript)(e, l);
			if (!d?.associatedOnly) {
				if (u) {
					let i = [];
					for (let [a] of (0, r.toGeneratedOffsets)(e, u, f, s, t.isHoverEnabled)) {
						let o = n(d.id, a, ...c);
						if (o) {
							let n = (0, r.transformTextSpan)(f, e, u, o.textSpan, !0, t.isHoverEnabled)?.[1];
							n && i.push({
								...o,
								textSpan: n
							});
						}
					}
					if (i.length === 1) return i[0];
					if (i.length >= 2) {
						let e = { ...i[0] };
						e.displayParts = e.displayParts?.slice(), e.documentation = e.documentation?.slice(), e.tags = e.tags?.slice();
						let t = /* @__PURE__ */ new Set([le(i[0].displayParts)]), n = /* @__PURE__ */ new Set([le(i[0].documentation)]), r = /* @__PURE__ */ new Set();
						for (let e of i[0].tags ?? []) r.add(e.name + "__volar__" + le(e.text));
						for (let a = 1; a < i.length; a++) {
							let { displayParts: o, documentation: s, tags: c } = i[a];
							o?.length && !t.has(le(o)) && (t.add(le(o)), e.displayParts ??= [], e.displayParts.push({
								...o[0],
								text: "\n\n" + o[0].text
							}), e.displayParts.push(...o.slice(1))), s?.length && !n.has(le(s)) && (n.add(le(s)), e.documentation ??= [], e.documentation.push({
								...s[0],
								text: "\n\n" + s[0].text
							}), e.documentation.push(...s.slice(1)));
							for (let t of c ?? []) r.has(t.name + "__volar__" + le(t.text)) || (r.add(t.name + "__volar__" + le(t.text)), e.tags ??= [], e.tags.push(t));
						}
						return e;
					}
				} else return n(l, s, ...c);
			}
		};
	}
	function b(e, n) {
		return (o, s, c) => {
			let l = o.replace(a, "/"), [u, d, f] = (0, i.getServiceScript)(e, l);
			if (!d?.associatedOnly) {
				if (u) {
					let i = (0, r.toGeneratedOffset)(e, u, f, s, t.isSignatureHelpEnabled);
					if (i !== void 0) {
						let a = n(d.id, i, c);
						if (a) {
							let n = (0, r.transformTextSpan)(f, e, u, a.applicableSpan, !0, t.isSignatureHelpEnabled)?.[1];
							if (n) return {
								...a,
								applicableSpan: n
							};
						}
					}
				} else return n(l, s, c);
			}
		};
	}
	function x(e, n) {
		return (i, o, s) => P(e, i.replace(a, "/"), o, t.isHighlightEnabled, (e, t) => n(e, t, s), function* (e) {
			for (let t of e) for (let e of t.highlightSpans) yield [e.fileName ?? t.fileName, e.textSpan.start];
		}).flat().map((n) => ({
			...n,
			highlightSpans: n.highlightSpans.map((i) => {
				let { textSpan: a } = (0, r.transformSpan)(e, i.fileName ?? n.fileName, i.textSpan, !1, t.isHighlightEnabled) ?? {};
				if (a) return {
					...i,
					contextSpan: (0, r.transformSpan)(e, i.fileName ?? n.fileName, i.contextSpan, !1, t.isHighlightEnabled)?.textSpan,
					textSpan: a
				};
			}).filter((e) => !!e)
		}));
	}
	function S(e, n) {
		return (o, s, c, l, u, d) => {
			let f = o.replace(a, "/"), [p, m, h] = (0, i.getServiceScript)(e, f);
			if (m?.associatedOnly) return [];
			if (p) {
				if (typeof s == "number") {
					let i = (0, r.toGeneratedOffset)(e, p, h, s, t.isCodeActionsEnabled);
					if (i !== void 0) return n(m.id, i, c, l, u, d);
				} else for (let [i, a] of (0, r.toGeneratedRanges)(e, p, h, s.pos, s.end, t.isCodeActionsEnabled)) return n(m.id, {
					pos: i,
					end: a
				}, c, l, u, d);
				return [];
			}
			return n(f, s, c, l, u, d);
		};
	}
	function C(e, n) {
		return (o, s, c, l, u, d, f) => {
			let p, m = o.replace(a, "/"), [h, g, _] = (0, i.getServiceScript)(e, m);
			if (!g?.associatedOnly) {
				if (h) {
					if (typeof c == "number") {
						let i = (0, r.toGeneratedOffset)(e, h, _, c, t.isCodeActionsEnabled);
						i !== void 0 && (p = n(g.id, s, i, l, u, d, f));
					} else for (let [i, a] of (0, r.toGeneratedRanges)(e, h, _, c.pos, c.end, t.isCodeActionsEnabled)) p = n(g.id, s, {
						pos: i,
						end: a
					}, l, u, d, f);
				} else p = n(m, s, c, l, u, d, f);
				if (p) return p.edits = (0, r.transformFileTextChanges)(e, p.edits, !1, t.isCodeActionsEnabled), p;
			}
		};
	}
	function w(e, n) {
		return (...i) => {
			let a = n(...i);
			return a.changes = (0, r.transformFileTextChanges)(e, a.changes, !1, t.isCodeActionsEnabled), a;
		};
	}
	function T(e, n) {
		return (o, s, c) => {
			let l = o.replace(a, "/"), [u, d, f] = (0, i.getServiceScript)(e, l);
			if (d?.associatedOnly) return {
				canRename: !1,
				localizedErrorMessage: "Cannot rename"
			};
			if (u) {
				let i;
				for (let [a] of (0, r.toGeneratedOffsets)(e, u, f, s, t.isRenameEnabled)) {
					let o = n(d.id, a, c);
					if (o.canRename) {
						let n = (0, r.transformTextSpan)(f, e, u, o.triggerSpan, !1, t.isRenameEnabled)?.[1];
						if (n) return o.triggerSpan = n, o;
					} else i = o;
				}
				return i || {
					canRename: !1,
					localizedErrorMessage: "Failed to get rename locations"
				};
			}
			return n(l, s, c);
		};
	}
	function E(e, n) {
		return (o, s, c, l, u, d) => {
			let f = [], p = o.replace(a, "/"), [m, h, g] = (0, i.getServiceScript)(e, p);
			if (h?.associatedOnly) return [];
			if (m) {
				let i = (0, r.toGeneratedRange)(e, m, g, s, c, t.isCodeActionsEnabled);
				i !== void 0 && (f = n(h.id, i[0], i[1], l, u, d));
			} else f = n(p, s, c, l, u, d);
			return f = f.map((n) => (n.changes = (0, r.transformFileTextChanges)(e, n.changes, !1, t.isCodeActionsEnabled), n)), f;
		};
	}
	function D(e, n) {
		return (o, s, c) => {
			let l = o.replace(a, "/"), [u, d, f] = (0, i.getServiceScript)(e, l);
			if (d?.associatedOnly) return {
				spans: [],
				endOfLineState: 0
			};
			if (u) {
				let i = e.maps.get(u.code, d), a = (0, t.findOverlapCodeRange)(s.start, s.start + s.length, i, t.isSemanticTokensEnabled);
				if (!a) return {
					spans: [],
					endOfLineState: 0
				};
				let o = (0, r.getMappingOffset)(e, u), l = a.start + o, p = a.end + o, m = n(d.id, {
					start: l,
					length: p - l
				}, c), h = [];
				for (let n = 0; n < m.spans.length; n += 3) for (let [i, a, o] of (0, r.toSourceRanges)(f, e, u, m.spans[n], m.spans[n] + m.spans[n + 1], !1, t.isSemanticTokensEnabled)) {
					h.push(a, o - a, m.spans[n + 2]);
					break;
				}
				return m.spans = h, m;
			}
			return n(l, s, c);
		};
	}
	function O(e, t, n) {
		return (o) => {
			let s = o.replace(a, "/"), [c, l, u] = (0, i.getServiceScript)(e, s);
			return l?.associatedOnly ? [] : n(l?.id ?? s).map((n) => (0, r.transformDiagnostic)(e, n, t.getProgram(), !1)).filter((e) => !!e).filter((t) => !c || e.scripts.get(t.file.fileName) === u);
		};
	}
	function k(e, t, n) {
		return (o) => {
			let s = o.replace(a, "/"), [c, l, u] = (0, i.getServiceScript)(e, s);
			return l?.associatedOnly ? [] : n(l?.id ?? s).map((n) => (0, r.transformDiagnostic)(e, n, t.getProgram(), !1)).filter((e) => !!e).filter((t) => !c || !t.file || e.scripts.get(t.file.fileName) === u);
		};
	}
	function A(e, t, n) {
		return (o) => {
			let s = o.replace(a, "/"), [c, l, u] = (0, i.getServiceScript)(e, s);
			return l?.associatedOnly ? [] : n(l?.id ?? s).map((n) => (0, r.transformDiagnostic)(e, n, t.getProgram(), !1)).filter((e) => !!e).filter((t) => !c || !t.file || e.scripts.get(t.file.fileName) === u);
		};
	}
	function j(e, i) {
		return (o, s) => {
			let c = o.replace(a, "/"), l = P(e, c, s, t.isDefinitionEnabled, (e, t) => i(e, t), function* (e) {
				for (let t of e.definitions ?? []) yield [t.fileName, t.textSpan.start];
			}), u = l.map((n) => (0, r.transformSpan)(e, c, n.textSpan, !0, t.isDefinitionEnabled)?.textSpan).filter((e) => !!e)[0];
			if (!u) return;
			let d = l.map((n) => n.definitions?.map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isDefinitionEnabled, n.fileName !== c)).filter((e) => !!e) ?? []).flat();
			return {
				textSpan: u,
				definitions: (0, n.dedupeDocumentSpans)(d)
			};
		};
	}
	function M(e, n) {
		return (i, o) => P(e, i.replace(a, "/"), o, t.isReferencesEnabled, (e, t) => n(e, t), function* (e) {
			for (let t of e) for (let e of t.references) yield [e.fileName, e.textSpan.start];
		}).flat().map((n) => ({
			definition: (0, r.transformDocumentSpan)(e, n.definition, !0, t.isDefinitionEnabled, !0),
			references: n.references.map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isReferencesEnabled)).filter((e) => !!e)
		}));
	}
	function N(e, i) {
		return (o, s) => {
			let c = o.replace(a, "/"), l = P(e, c, s, t.isDefinitionEnabled, (e, t) => i(e, t), function* (e) {
				for (let t of e) yield [t.fileName, t.textSpan.start];
			}).flat().map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isDefinitionEnabled, n.fileName !== c)).filter((e) => !!e);
			return (0, n.dedupeDocumentSpans)(l);
		};
	}
	function ee(e, i) {
		return (o, s) => {
			let c = P(e, o.replace(a, "/"), s, t.isTypeDefinitionEnabled, (e, t) => i(e, t), function* (e) {
				for (let t of e) yield [t.fileName, t.textSpan.start];
			}).flat().map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isTypeDefinitionEnabled)).filter((e) => !!e);
			return (0, n.dedupeDocumentSpans)(c);
		};
	}
	function te(e, i) {
		return (o, s) => {
			let c = P(e, o.replace(a, "/"), s, t.isImplementationEnabled, (e, t) => i(e, t), function* (e) {
				for (let t of e) yield [t.fileName, t.textSpan.start];
			}).flat().map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isImplementationEnabled)).filter((e) => !!e);
			return (0, n.dedupeDocumentSpans)(c);
		};
	}
	function ne(e, i) {
		return (o, s, c, l, u) => {
			let d = P(e, o.replace(a, "/"), s, t.isRenameEnabled, (e, t) => i(e, t, c, l, u), function* (e) {
				for (let t of e) yield [t.fileName, t.textSpan.start];
			}).flat().map((n) => (0, r.transformDocumentSpan)(e, n, !1, t.isRenameEnabled)).filter((e) => !!e);
			return (0, n.dedupeDocumentSpans)(d);
		};
	}
	function re(e, i) {
		return (o, s) => {
			let c = P(e, o.replace(a, "/"), s, t.isReferencesEnabled, (e, t) => i(e, t), function* (e) {
				for (let t of e) yield [t.fileName, t.textSpan.start];
			}).flat().map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isReferencesEnabled)).filter((e) => !!e);
			return (0, n.dedupeDocumentSpans)(c);
		};
	}
	function ie(e, n) {
		return (o, s, c, l) => {
			let u = o.replace(a, "/"), [d, f, p] = (0, i.getServiceScript)(e, u);
			if (!f?.associatedOnly) {
				if (d) {
					let i, a = [];
					for (let [o, u] of (0, r.toGeneratedOffsets)(e, d, p, s, t.isCompletionEnabled)) {
						let s = typeof u.data.completion == "object" && u.data.completion.isAdditional;
						if (!s && i?.entries.length) continue;
						let m = n(f.id, o, c, l);
						if (m) {
							typeof u.data.completion == "object" && u.data.completion.onlyImport && (m.entries = m.entries.filter((e) => !!e.sourceDisplay));
							for (let n of m.entries) n.replacementSpan = n.replacementSpan && (0, r.transformTextSpan)(p, e, d, n.replacementSpan, !1, t.isCompletionEnabled)?.[1];
							m.optionalReplacementSpan = m.optionalReplacementSpan && (0, r.transformTextSpan)(p, e, d, m.optionalReplacementSpan, !1, t.isCompletionEnabled)?.[1], s ? a.push(m) : i = m;
						}
					}
					let o = a;
					if (i && o.unshift(i), o.length) return {
						...o[0],
						entries: o.map((e) => e.entries).flat()
					};
				} else return n(u, s, c, l);
			}
		};
	}
	function ae(e, n) {
		return (o, s, c, l, u, d, f) => {
			let p, m = o.replace(a, "/"), [h, g, _] = (0, i.getServiceScript)(e, m);
			if (!g?.associatedOnly) {
				if (h) {
					let i = (0, r.toGeneratedOffset)(e, h, _, s, t.isCompletionEnabled);
					i !== void 0 && (p = n(g.id, i, c, l, u, d, f));
				} else return n(m, s, c, l, u, d, f);
				if (p?.codeActions) for (let n of p.codeActions) n.changes = (0, r.transformFileTextChanges)(e, n.changes, !1, t.isCompletionEnabled);
				return p;
			}
		};
	}
	function oe(e, n) {
		return (o, s, c) => {
			let l = o.replace(a, "/"), [u, d, f] = (0, i.getServiceScript)(e, l);
			if (d?.associatedOnly) return [];
			if (u) {
				let i = e.maps.get(u.code, f), a = (0, t.findOverlapCodeRange)(s.start, s.start + s.length, i, t.isSemanticTokensEnabled);
				if (!a) return [];
				let o = (0, r.getMappingOffset)(e, u), l = a.start + o, p = a.end + o, m = n(d.id, {
					start: l,
					length: p - l
				}, c), h = [];
				for (let n of m) {
					let i = (0, r.toSourceOffset)(f, e, u, n.position, t.isInlayHintsEnabled);
					i !== void 0 && h.push({
						...n,
						position: i[1]
					});
				}
				return h;
			}
			return n(l, s, c);
		};
	}
	function se(e, i) {
		return (o) => {
			let s = i(o.replace(a, "/")).map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isReferencesEnabled)).filter((e) => !!e);
			return (0, n.dedupeDocumentSpans)(s);
		};
	}
	function ce(e, i) {
		return (...a) => {
			let o = i(...a).map((n) => (0, r.transformDocumentSpan)(e, n, !0, t.isReferencesEnabled)).filter((e) => !!e);
			return (0, n.dedupeDocumentSpans)(o);
		};
	}
	function P(e, t, n, a, o, s) {
		let c = [], l = /* @__PURE__ */ new Set(), [u, d, f] = (0, i.getServiceScript)(e, t);
		if (u) for (let [t] of (0, r.toGeneratedOffsets)(e, u, f, n, a)) p(d.id, t);
		else p(t, n);
		return c;
		function p(t, n) {
			if (l.has(t + ":" + n)) return;
			l.add(t + ":" + n);
			let a = o(t, n);
			if (a) {
				c.push(a);
				for (let t of s(a)) {
					l.add(t[0] + ":" + t[1]);
					let [n] = (0, i.getServiceScript)(e, t[0]);
					if (!n) continue;
					let a = e.linkedCodeMaps.get(n.code);
					if (!a) continue;
					let o = (0, r.getMappingOffset)(e, n);
					for (let e of a.getLinkedOffsets(t[1] - o)) p(t[0], e + o);
				}
			}
		}
	}
	function le(e) {
		return e ? e.map((e) => e.text).join("") : "";
	}
})), Ad = /* @__PURE__ */ i(((e, t) => {
	function n(e) {
		if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
	}
	function r(e, t) {
		for (var n = "", r = 0, i = -1, a = 0, o, s = 0; s <= e.length; ++s) {
			if (s < e.length) o = e.charCodeAt(s);
			else if (o === 47) break;
			else o = 47;
			if (o === 47) {
				if (i !== s - 1 && a !== 1) {
					if (i !== s - 1 && a === 2) {
						if (n.length < 2 || r !== 2 || n.charCodeAt(n.length - 1) !== 46 || n.charCodeAt(n.length - 2) !== 46) {
							if (n.length > 2) {
								var c = n.lastIndexOf("/");
								if (c !== n.length - 1) {
									c === -1 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = s, a = 0;
									continue;
								}
							} else if (n.length === 2 || n.length === 1) {
								n = "", r = 0, i = s, a = 0;
								continue;
							}
						}
						t && (n.length > 0 ? n += "/.." : n = "..", r = 2);
					} else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
				}
				i = s, a = 0;
			} else o === 46 && a !== -1 ? ++a : a = -1;
		}
		return n;
	}
	function i(e, t) {
		var n = t.dir || t.root, r = t.base || (t.name || "") + (t.ext || "");
		return n ? n === t.root ? n + r : n + e + r : r;
	}
	var a = {
		resolve: function() {
			for (var e = "", t = !1, i, a = arguments.length - 1; a >= -1 && !t; a--) {
				var o;
				a >= 0 ? o = arguments[a] : (i === void 0 && (i = process.cwd()), o = i), n(o), o.length !== 0 && (e = o + "/" + e, t = o.charCodeAt(0) === 47);
			}
			return e = r(e, !t), t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
		},
		normalize: function(e) {
			if (n(e), e.length === 0) return ".";
			var t = e.charCodeAt(0) === 47, i = e.charCodeAt(e.length - 1) === 47;
			return e = r(e, !t), e.length === 0 && !t && (e = "."), e.length > 0 && i && (e += "/"), t ? "/" + e : e;
		},
		isAbsolute: function(e) {
			return n(e), e.length > 0 && e.charCodeAt(0) === 47;
		},
		join: function() {
			if (arguments.length === 0) return ".";
			for (var e, t = 0; t < arguments.length; ++t) {
				var r = arguments[t];
				n(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
			}
			return e === void 0 ? "." : a.normalize(e);
		},
		relative: function(e, t) {
			if (n(e), n(t), e === t || (e = a.resolve(e), t = a.resolve(t), e === t)) return "";
			for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
			for (var i = e.length, o = i - r, s = 1; s < t.length && t.charCodeAt(s) === 47; ++s);
			for (var c = t.length - s, l = o < c ? o : c, u = -1, d = 0; d <= l; ++d) {
				if (d === l) {
					if (c > l) {
						if (t.charCodeAt(s + d) === 47) return t.slice(s + d + 1);
						if (d === 0) return t.slice(s + d);
					} else o > l && (e.charCodeAt(r + d) === 47 ? u = d : d === 0 && (u = 0));
					break;
				}
				var f = e.charCodeAt(r + d);
				if (f !== t.charCodeAt(s + d)) break;
				f === 47 && (u = d);
			}
			var p = "";
			for (d = r + u + 1; d <= i; ++d) (d === i || e.charCodeAt(d) === 47) && (p.length === 0 ? p += ".." : p += "/..");
			return p.length > 0 ? p + t.slice(s + u) : (s += u, t.charCodeAt(s) === 47 && ++s, t.slice(s));
		},
		_makeLong: function(e) {
			return e;
		},
		dirname: function(e) {
			if (n(e), e.length === 0) return ".";
			for (var t = e.charCodeAt(0), r = t === 47, i = -1, a = !0, o = e.length - 1; o >= 1; --o) if (t = e.charCodeAt(o), t === 47) {
				if (!a) {
					i = o;
					break;
				}
			} else a = !1;
			return i === -1 ? r ? "/" : "." : r && i === 1 ? "//" : e.slice(0, i);
		},
		basename: function(e, t) {
			if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
			n(e);
			var r = 0, i = -1, a = !0, o;
			if (t !== void 0 && t.length > 0 && t.length <= e.length) {
				if (t.length === e.length && t === e) return "";
				var s = t.length - 1, c = -1;
				for (o = e.length - 1; o >= 0; --o) {
					var l = e.charCodeAt(o);
					if (l === 47) {
						if (!a) {
							r = o + 1;
							break;
						}
					} else c === -1 && (a = !1, c = o + 1), s >= 0 && (l === t.charCodeAt(s) ? --s === -1 && (i = o) : (s = -1, i = c));
				}
				return r === i ? i = c : i === -1 && (i = e.length), e.slice(r, i);
			}
			for (o = e.length - 1; o >= 0; --o) if (e.charCodeAt(o) === 47) {
				if (!a) {
					r = o + 1;
					break;
				}
			} else i === -1 && (a = !1, i = o + 1);
			return i === -1 ? "" : e.slice(r, i);
		},
		extname: function(e) {
			n(e);
			for (var t = -1, r = 0, i = -1, a = !0, o = 0, s = e.length - 1; s >= 0; --s) {
				var c = e.charCodeAt(s);
				if (c === 47) {
					if (!a) {
						r = s + 1;
						break;
					}
					continue;
				}
				i === -1 && (a = !1, i = s + 1), c === 46 ? t === -1 ? t = s : o !== 1 && (o = 1) : t !== -1 && (o = -1);
			}
			return t === -1 || i === -1 || o === 0 || o === 1 && t === i - 1 && t === r + 1 ? "" : e.slice(t, i);
		},
		format: function(e) {
			if (typeof e != "object" || !e) throw TypeError("The \"pathObject\" argument must be of type Object. Received type " + typeof e);
			return i("/", e);
		},
		parse: function(e) {
			n(e);
			var t = {
				root: "",
				dir: "",
				base: "",
				ext: "",
				name: ""
			};
			if (e.length === 0) return t;
			var r = e.charCodeAt(0), i = r === 47, a;
			i ? (t.root = "/", a = 1) : a = 0;
			for (var o = -1, s = 0, c = -1, l = !0, u = e.length - 1, d = 0; u >= a; --u) {
				if (r = e.charCodeAt(u), r === 47) {
					if (!l) {
						s = u + 1;
						break;
					}
					continue;
				}
				c === -1 && (l = !1, c = u + 1), r === 46 ? o === -1 ? o = u : d !== 1 && (d = 1) : o !== -1 && (d = -1);
			}
			return o === -1 || c === -1 || d === 0 || d === 1 && o === c - 1 && o === s + 1 ? c !== -1 && (t.base = t.name = s === 0 && i ? e.slice(1, c) : e.slice(s, c)) : (s === 0 && i ? (t.name = e.slice(1, o), t.base = e.slice(1, c)) : (t.name = e.slice(s, o), t.base = e.slice(s, c)), t.ext = e.slice(o, c)), s > 0 ? t.dir = e.slice(0, s - 1) : i && (t.dir = "/"), t;
		},
		sep: "/",
		delimiter: ":",
		win32: null,
		posix: null
	};
	a.posix = a, t.exports = a;
})), jd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createLanguageServiceHost = a;
	var t = v(), n = Ad(), r = Cd(), i = Sd();
	function a(e, a, s, c, l) {
		let u = s.plugins.map((e) => e.typescript?.extraFileExtensions.map((e) => "." + e.extension) ?? []).flat(), d = new t.FileMap(a.useCaseSensitiveFileNames), f, p = 0, m = new t.FileMap(a.useCaseSensitiveFileNames), h = new t.FileMap(a.useCaseSensitiveFileNames), g = new t.FileMap(a.useCaseSensitiveFileNames), _ = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), y = {
			...a,
			getCurrentDirectory() {
				return l.getCurrentDirectory();
			},
			useCaseSensitiveFileNames() {
				return a.useCaseSensitiveFileNames;
			},
			getNewLine() {
				return a.newLine;
			},
			getTypeRootsVersion: () => "version" in a ? a.version : -1,
			getDirectories(e) {
				return a.getDirectories(e);
			},
			readDirectory(e, t, n, r, i) {
				let o = new Set(t);
				for (let e of u) o.add(e);
				return t = [...o], a.readDirectory(e, t, n, r, i);
			},
			getCompilationSettings() {
				let e = l.getCompilationSettings();
				return u.length && (e.allowNonTsExtensions ??= !0, e.allowNonTsExtensions || console.warn("`allowNonTsExtensions` must be `true`.")), e;
			},
			getLocalizedDiagnosticMessages: l.getLocalizedDiagnosticMessages,
			getProjectReferences: l.getProjectReferences,
			getDefaultLibFileName: (t) => {
				try {
					return e.getDefaultLibFilePath(t);
				} catch {
					return `/node_modules/typescript/lib/${e.getDefaultLibFileName(t)}`;
				}
			},
			readFile(e) {
				let t = S(e);
				if (t) return t.getText(0, t.getLength());
			},
			directoryExists(e) {
				return x(), h.has(e) ? !0 : a.directoryExists(e);
			},
			fileExists(e) {
				return C(e) !== "";
			},
			getProjectVersion() {
				return x(), p + ("version" in a ? `:${a.version}` : "");
			},
			getScriptFileNames() {
				return x(), [...m.keys()];
			},
			getScriptKind(t) {
				if (x(), g.has(t)) return g.get(t).scriptKind;
				let r = s.scripts.get(c(t));
				if (r?.generated) {
					let e = r.generated.languagePlugin.typescript?.getServiceScript(r.generated.root);
					if (e) return e.scriptKind;
				}
				switch (n.extname(t)) {
					case ".js":
					case ".cjs":
					case ".mjs": return e.ScriptKind.JS;
					case ".jsx": return e.ScriptKind.JSX;
					case ".ts":
					case ".cts":
					case ".mts": return e.ScriptKind.TS;
					case ".tsx": return e.ScriptKind.TSX;
					case ".json": return e.ScriptKind.JSON;
					default: return e.ScriptKind.Unknown;
				}
			},
			getScriptVersion: C,
			getScriptSnapshot: S
		};
		for (let e of s.plugins) e.typescript?.resolveLanguageServiceHost && (y = e.typescript.resolveLanguageServiceHost(y));
		if (u.length) {
			let t = e.createModuleResolutionCache(y.getCurrentDirectory(), y.useCaseSensitiveFileNames?.() ? (e) => e : (e) => e.toLowerCase(), y.getCompilationSettings()), n = (0, i.createResolveModuleName)(e, a.getFileSize, y, s.plugins, (e) => s.scripts.get(c(e))), o = "version" in a ? a.version : void 0;
			y.resolveModuleNameLiterals = (i, s, c, l, d) => {
				let f = (0, r.fixupImpliedNodeFormatForFile)(e, u, d, t.getPackageJsonInfoCache(), y, l);
				try {
					return "version" in a && o !== a.version && (o = a.version, t.clear()), i.map((r) => {
						let i = e.getModeForUsageLocation(d, r, l);
						return n(r.text, s, l, t, c, i);
					});
				} finally {
					f?.();
				}
			}, y.resolveModuleNames = (e, r, i, s, c) => ("version" in a && o !== a.version && (o = a.version, t.clear()), e.map((e) => n(e, r, c, t, s).resolvedModule)), y.getModuleResolutionCache = () => t;
		}
		return {
			languageServiceHost: y,
			getExtraServiceScript: b
		};
		function b(e) {
			return x(), g.get(e);
		}
		function x() {
			let e = l.getProjectVersion?.();
			if (e !== void 0 && e === f) return;
			f = e, g.clear();
			let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set();
			for (let e of l.getScriptFileNames()) {
				let a = s.scripts.get(c(e));
				if (a?.generated) {
					let o = a.generated.languagePlugin.typescript?.getServiceScript(a.generated.root);
					o && (n.add(o.code.snapshot), i.add(e));
					for (let t of a.generated.languagePlugin.typescript?.getExtraServiceScripts?.(e, a.generated.root) ?? []) n.add(t.code.snapshot), i.add(t.fileName), g.set(t.fileName, t);
					for (let e of (0, t.forEachEmbeddedCode)(a.generated.root)) r.add(e.snapshot);
				} else i.add(e);
			}
			o(_, n) ? o(v, r) && p++ : p++, _ = n, v = r, m.clear(), h.clear();
			for (let e of i) {
				m.set(e, !0);
				let t = e.split("/");
				for (let e = 1; e < t.length; e++) {
					let n = t.slice(0, e).join("/");
					h.set(n, !0);
				}
			}
		}
		function S(e) {
			if (x(), g.has(e)) return g.get(e).code.snapshot;
			let t = s.scripts.get(c(e));
			if (t?.generated) {
				let e = t.generated.languagePlugin.typescript?.getServiceScript(t.generated.root);
				if (e) return e.code.snapshot;
			} else if (t) return t.snapshot;
		}
		function C(e) {
			x(), d.has(e) || d.set(e, {
				lastVersion: 0,
				map: /* @__PURE__ */ new WeakMap()
			});
			let t = d.get(e);
			if (g.has(e)) {
				let n = g.get(e).code.snapshot;
				return t.map.has(n) || t.map.set(n, t.lastVersion++), t.map.get(n).toString();
			}
			let n = s.scripts.get(c(e));
			if (n?.generated) {
				let e = n.generated.languagePlugin.typescript?.getServiceScript(n.generated.root);
				if (e) return t.map.has(e.code.snapshot) || t.map.set(e.code.snapshot, t.lastVersion++), t.map.get(e.code.snapshot).toString();
			}
			let r = s.scripts.get(c(e), !1);
			return r && !r.generated ? (t.map.has(r.snapshot) || t.map.set(r.snapshot, t.lastVersion++), t.map.get(r.snapshot).toString()) : a.fileExists(e) ? a.getModifiedTime?.(e)?.valueOf().toString() ?? "0" : "";
		}
	}
	function o(e, t) {
		if (e.size !== t.size) return !1;
		for (let n of e) if (!t.has(n)) return !1;
		return !0;
	}
})), Md = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.every = n, e.findIndex = r, e.indexOfAnyCharCode = a, e.map = o, e.flatten = s, e.flatMap = c, e.some = l, e.sort = p, e.lastOrUndefined = m, e.last = h, e.equateStringsCaseInsensitive = S, e.equateStringsCaseSensitive = C, e.compareStringsCaseSensitive = E, e.getStringComparer = D, e.endsWith = O, e.stringContains = k, e.createGetCanonicalFileName = A, e.startsWith = j;
	var t = [];
	function n(e, t) {
		if (e) {
			for (let n = 0; n < e.length; n++) if (!t(e[n], n)) return !1;
		}
		return !0;
	}
	function r(e, t, n) {
		if (e === void 0) return -1;
		for (let r = n ?? 0; r < e.length; r++) if (t(e[r], r)) return r;
		return -1;
	}
	function i(e, t, n = x) {
		if (e) {
			for (let r of e) if (n(r, t)) return !0;
		}
		return !1;
	}
	function a(e, t, n) {
		for (let r = n || 0; r < e.length; r++) if (i(t, e.charCodeAt(r))) return r;
		return -1;
	}
	function o(e, t) {
		let n;
		if (e) {
			n = [];
			for (let r = 0; r < e.length; r++) n.push(t(e[r], r));
		}
		return n;
	}
	function s(e) {
		let t = [];
		for (let n of e) n && (g(n) ? f(t, n) : t.push(n));
		return t;
	}
	function c(e, n) {
		let r;
		if (e) for (let t = 0; t < e.length; t++) {
			let i = n(e[t], t);
			i && (r = g(i) ? f(r, i) : u(r, i));
		}
		return r || t;
	}
	function l(e, t) {
		if (e) {
			if (t) {
				for (let n of e) if (t(n)) return !0;
			} else return e.length > 0;
		}
		return !1;
	}
	function u(e, t) {
		return t === void 0 ? e : e === void 0 ? [t] : (e.push(t), e);
	}
	function d(e, t) {
		return t < 0 ? e.length + t : t;
	}
	function f(e, t, n, r) {
		if (t === void 0 || t.length === 0) return e;
		if (e === void 0) return t.slice(n, r);
		n = n === void 0 ? 0 : d(t, n), r = r === void 0 ? t.length : d(t, r);
		for (let i = n; i < r && i < t.length; i++) t[i] !== void 0 && e.push(t[i]);
		return e;
	}
	function p(e, t) {
		return e.length === 0 ? e : e.slice().sort(t);
	}
	function m(e) {
		return e === void 0 || e.length === 0 ? void 0 : e[e.length - 1];
	}
	function h(e) {
		return e[e.length - 1];
	}
	function g(e) {
		return Array.isArray ? Array.isArray(e) : e instanceof Array;
	}
	function _(e) {
		return e;
	}
	function v(e) {
		return e.toLowerCase();
	}
	var y = /[^\u0130\u0131\u00DFa-z0-9\\/:\-_\. ]+/g;
	function b(e) {
		return y.test(e) ? e.replace(y, v) : e;
	}
	function x(e, t) {
		return e === t;
	}
	function S(e, t) {
		return e === t || e !== void 0 && t !== void 0 && e.toUpperCase() === t.toUpperCase();
	}
	function C(e, t) {
		return x(e, t);
	}
	function w(e, t) {
		return e === t ? 0 : e === void 0 ? -1 : t === void 0 ? 1 : e < t ? -1 : 1;
	}
	function T(e, t) {
		return e === t ? 0 : e === void 0 ? -1 : t === void 0 ? 1 : (e = e.toUpperCase(), t = t.toUpperCase(), e < t ? -1 : +(e > t));
	}
	function E(e, t) {
		return w(e, t);
	}
	function D(e) {
		return e ? T : E;
	}
	function O(e, t) {
		let n = e.length - t.length;
		return n >= 0 && e.indexOf(t, n) === n;
	}
	function k(e, t) {
		return e.indexOf(t) !== -1;
	}
	function A(e) {
		return e ? _ : b;
	}
	function j(e, t) {
		return e.lastIndexOf(t, 0) === 0;
	}
})), Nd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.directorySeparator = void 0, e.isRootedDiskPath = o, e.hasExtension = s, e.fileExtensionIsOneOf = l, e.getDirectoryPath = h, e.combinePaths = T, e.getNormalizedPathComponents = E, e.normalizePath = D, e.removeTrailingDirectorySeparator = O, e.containsPath = j;
	var t = Md();
	e.directorySeparator = "/";
	var n = "\\", r = "://", i = /\\/g;
	function a(e) {
		return e === 47 || e === 92;
	}
	function o(e) {
		return p(e) > 0;
	}
	function s(e) {
		return (0, t.stringContains)(g(e), ".");
	}
	function c(e, n) {
		return e.length > n.length && (0, t.endsWith)(e, n);
	}
	function l(e, t) {
		for (let n of t) if (c(e, n)) return !0;
		return !1;
	}
	function u(e) {
		return e.length > 0 && a(e.charCodeAt(e.length - 1));
	}
	function d(e) {
		return e >= 97 && e <= 122 || e >= 65 && e <= 90;
	}
	function f(e, t) {
		let n = e.charCodeAt(t);
		if (n === 58) return t + 1;
		if (n === 37 && e.charCodeAt(t + 1) === 51) {
			let n = e.charCodeAt(t + 2);
			if (n === 97 || n === 65) return t + 3;
		}
		return -1;
	}
	function p(t) {
		if (!t) return 0;
		let i = t.charCodeAt(0);
		if (i === 47 || i === 92) {
			if (t.charCodeAt(1) !== i) return 1;
			let r = t.indexOf(i === 47 ? e.directorySeparator : n, 2);
			return r < 0 ? t.length : r + 1;
		}
		if (d(i) && t.charCodeAt(1) === 58) {
			let e = t.charCodeAt(2);
			if (e === 47 || e === 92) return 3;
			if (t.length === 2) return 2;
		}
		let a = t.indexOf(r);
		if (a !== -1) {
			let n = a + 3, r = t.indexOf(e.directorySeparator, n);
			if (r !== -1) {
				let e = t.slice(0, a), i = t.slice(n, r);
				if (e === "file" && (i === "" || i === "localhost") && d(t.charCodeAt(r + 1))) {
					let e = f(t, r + 2);
					if (e !== -1) {
						if (t.charCodeAt(e) === 47) return ~(e + 1);
						if (e === t.length) return ~e;
					}
				}
				return ~(r + 1);
			}
			return ~t.length;
		}
		return 0;
	}
	function m(e) {
		let t = p(e);
		return t < 0 ? ~t : t;
	}
	function h(t) {
		t = C(t);
		let n = m(t);
		return n === t.length ? t : (t = O(t), t.slice(0, Math.max(n, t.lastIndexOf(e.directorySeparator))));
	}
	function g(t, n, r) {
		if (t = C(t), m(t) === t.length) return "";
		t = O(t);
		let i = t.slice(Math.max(m(t), t.lastIndexOf(e.directorySeparator) + 1)), a = n !== void 0 && r !== void 0 ? y(i, n, r) : void 0;
		return a ? i.slice(0, i.length - a.length) : i;
	}
	function _(e, n, r) {
		if ((0, t.startsWith)(n, ".") || (n = "." + n), e.length >= n.length && e.charCodeAt(e.length - n.length) === 46) {
			let t = e.slice(e.length - n.length);
			if (r(t, n)) return t;
		}
	}
	function v(e, t, n) {
		if (typeof t == "string") return _(e, t, n) || "";
		for (let r of t) {
			let t = _(e, r, n);
			if (t) return t;
		}
		return "";
	}
	function y(e, n, r) {
		if (n) return v(O(e), n, r ? t.equateStringsCaseInsensitive : t.equateStringsCaseSensitive);
		let i = g(e), a = i.lastIndexOf(".");
		return a >= 0 ? i.substring(a) : "";
	}
	function b(n, r) {
		let i = n.substring(0, r), a = n.substring(r).split(e.directorySeparator);
		return a.length && !(0, t.lastOrUndefined)(a) && a.pop(), [i, ...a];
	}
	function x(e, t = "") {
		return e = T(t, e), b(e, m(e));
	}
	function S(t) {
		return t.length === 0 ? "" : (t[0] && k(t[0])) + t.slice(1).join(e.directorySeparator);
	}
	function C(t) {
		return t.indexOf("\\") === -1 ? t : t.replace(i, e.directorySeparator);
	}
	function w(e) {
		if (!(0, t.some)(e)) return [];
		let n = [e[0]];
		for (let t = 1; t < e.length; t++) {
			let r = e[t];
			if (r && r !== ".") {
				if (r === "..") {
					if (n.length > 1) {
						if (n[n.length - 1] !== "..") {
							n.pop();
							continue;
						}
					} else if (n[0]) continue;
				}
				n.push(r);
			}
		}
		return n;
	}
	function T(e, ...t) {
		e &&= C(e);
		for (let n of t) n && (n = C(n), e = !e || m(n) !== 0 ? n : k(e) + n);
		return e;
	}
	function E(e, t) {
		return w(x(e, t));
	}
	function D(e) {
		if (e = C(e), !A.test(e)) return e;
		let t = e.replace(/\/\.\//g, "/").replace(/^\.\//, "");
		if (t !== e && (e = t, !A.test(e))) return e;
		let n = S(w(x(e)));
		return n && u(e) ? k(n) : n;
	}
	function O(e) {
		return u(e) ? e.substr(0, e.length - 1) : e;
	}
	function k(t) {
		return u(t) ? t : t + e.directorySeparator;
	}
	var A = /(?:\/\/)|(?:^|\/)\.\.?(?:$|\/)/;
	function j(e, n, r, i) {
		if (typeof r == "string" ? (e = T(r, e), n = T(r, n)) : typeof r == "boolean" && (i = r), e === void 0 || n === void 0) return !1;
		if (e === n) return !0;
		let a = w(x(e)), o = w(x(n));
		if (o.length < a.length) return !1;
		let s = i ? t.equateStringsCaseInsensitive : t.equateStringsCaseSensitive;
		for (let e = 0; e < a.length; e++) if (!(e === 0 ? t.equateStringsCaseInsensitive : s)(a[e], o[e])) return !1;
		return !0;
	}
})), Pd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.matchFiles = _;
	var t = Md(), n = Nd(), r = /[^\w\s\/]/g, i = [42, 63], a = `(?!(${[
		"node_modules",
		"bower_components",
		"jspm_packages"
	].join("|")})(/|$))`, o = {
		singleAsteriskRegexFragment: "([^./]|(\\.(?!min\\.js$))?)*",
		doubleAsteriskRegexFragment: `(/${a}[^/.][^/]*)*?`,
		replaceWildcardCharacter: (e) => m(e, o.singleAsteriskRegexFragment)
	}, s = {
		singleAsteriskRegexFragment: "[^/]*",
		doubleAsteriskRegexFragment: `(/${a}[^/.][^/]*)*?`,
		replaceWildcardCharacter: (e) => m(e, s.singleAsteriskRegexFragment)
	}, c = {
		singleAsteriskRegexFragment: "[^/]*",
		doubleAsteriskRegexFragment: "(/.+?)?",
		replaceWildcardCharacter: (e) => m(e, c.singleAsteriskRegexFragment)
	}, l = {
		files: o,
		directories: s,
		exclude: c
	};
	function u(e, t, n) {
		let r = d(e, t, n);
		if (r && r.length) return `^(${r.map((e) => `(${e})`).join("|")})${n === "exclude" ? "($|/)" : "$"}`;
	}
	function d(e, n, r) {
		if (e !== void 0 && e.length !== 0) return (0, t.flatMap)(e, (e) => e && p(e, n, r, l[r]));
	}
	function f(e) {
		return !/[.*?]/.test(e);
	}
	function p(e, i, o, { singleAsteriskRegexFragment: s, doubleAsteriskRegexFragment: c, replaceWildcardCharacter: l }) {
		let u = "", d = !1, p = (0, n.getNormalizedPathComponents)(e, i), m = (0, t.last)(p);
		if (o !== "exclude" && m === "**") return;
		p[0] = (0, n.removeTrailingDirectorySeparator)(p[0]), f(m) && p.push("**", "*");
		let h = 0;
		for (let e of p) {
			if (e === "**") u += c;
			else if (o === "directories" && (u += "(", h++), d && (u += n.directorySeparator), o !== "exclude") {
				let t = "";
				e.charCodeAt(0) === 42 ? (t += "([^./]" + s + ")?", e = e.substr(1)) : e.charCodeAt(0) === 63 && (t += "[^./]", e = e.substr(1)), t += e.replace(r, l), t !== e && (u += a), u += t;
			} else u += e.replace(r, l);
			d = !0;
		}
		for (; h > 0;) u += ")?", h--;
		return u;
	}
	function m(e, t) {
		return e === "*" ? t : e === "?" ? "[^/]" : "\\" + e;
	}
	function h(e, r, i, a, o) {
		e = (0, n.normalizePath)(e), o = (0, n.normalizePath)(o);
		let s = (0, n.combinePaths)(o, e);
		return {
			includeFilePatterns: (0, t.map)(d(i, s, "files"), (e) => `^${e}$`),
			includeFilePattern: u(i, s, "files"),
			includeDirectoryPattern: u(i, s, "directories"),
			excludePattern: u(r, s, "exclude"),
			basePaths: v(e, i, a)
		};
	}
	function g(e, t) {
		return new RegExp(e, t ? "" : "i");
	}
	function _(e, r, i, a, o, s, c, l, u) {
		e = (0, n.normalizePath)(e), s = (0, n.normalizePath)(s);
		let d = h(e, i, a, o, s), f = d.includeFilePatterns && d.includeFilePatterns.map((e) => g(e, o)), p = d.includeDirectoryPattern && g(d.includeDirectoryPattern, o), m = d.excludePattern && g(d.excludePattern, o), _ = f ? f.map(() => []) : [[]], v = /* @__PURE__ */ new Map(), y = (0, t.createGetCanonicalFileName)(o);
		for (let e of d.basePaths) b(e, (0, n.combinePaths)(s, e), c);
		return (0, t.flatten)(_);
		function b(e, i, a) {
			let o = y(u(i));
			if (v.has(o)) return;
			v.set(o, !0);
			let { files: s, directories: c } = l(e);
			for (let a of (0, t.sort)(s, t.compareStringsCaseSensitive)) {
				let o = (0, n.combinePaths)(e, a), s = (0, n.combinePaths)(i, a);
				if ((!r || (0, n.fileExtensionIsOneOf)(o, r)) && !(m && m.test(s))) {
					if (!f) _[0].push(o);
					else {
						let e = (0, t.findIndex)(f, (e) => e.test(s));
						e !== -1 && _[e].push(o);
					}
				}
			}
			if (!(a !== void 0 && (a--, a === 0))) for (let r of (0, t.sort)(c, t.compareStringsCaseSensitive)) {
				let t = (0, n.combinePaths)(e, r), o = (0, n.combinePaths)(i, r);
				(!p || p.test(o)) && (!m || !m.test(o)) && b(t, o, a);
			}
		}
	}
	function v(e, r, i) {
		let a = [e];
		if (r) {
			let o = [];
			for (let t of r) {
				let r = (0, n.isRootedDiskPath)(t) ? t : (0, n.normalizePath)((0, n.combinePaths)(e, t));
				o.push(y(r));
			}
			o.sort((0, t.getStringComparer)(!i));
			for (let r of o) (0, t.every)(a, (t) => !(0, n.containsPath)(t, r, e, !i)) && a.push(r);
		}
		return a;
	}
	function y(e) {
		let r = (0, t.indexOfAnyCharCode)(e, i);
		return r < 0 ? (0, n.hasExtension)(e) ? (0, n.removeTrailingDirectorySeparator)((0, n.getDirectoryPath)(e)) : e : e.substring(0, e.lastIndexOf(n.directorySeparator, r));
	}
})), Fd = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.createSys = a;
	var t = Ad(), n = y(), r = Pd(), i = "";
	function a(e, a, o, s) {
		let c = 0, l = e?.useCaseSensitiveFileNames ?? !1, u = {
			name: "",
			dirs: /* @__PURE__ */ new Map(),
			files: /* @__PURE__ */ new Map(),
			requestedRead: !1
		}, d = /* @__PURE__ */ new Set(), f = a.onDidChangeWatchedFiles?.(({ changes: e }) => {
			c++;
			for (let r of e) {
				let e = n.URI.parse(r.uri), i = s.asFileName(e), a = t.dirname(i), o = t.basename(i), c = r.type === 1 || r.type === 2;
				T(a, c).files.set(D(o), c ? {
					name: o,
					stat: {
						type: 1,
						ctime: Date.now(),
						mtime: Date.now(),
						size: -1
					},
					requestedStat: !1,
					requestedText: !1
				} : {
					name: o,
					stat: void 0,
					text: void 0,
					requestedStat: !0,
					requestedText: !0
				});
			}
		});
		return {
			dispose() {
				f?.dispose();
			},
			args: e?.args ?? [],
			newLine: e?.newLine ?? "\n",
			useCaseSensitiveFileNames: l,
			realpath: e?.realpath,
			write: e?.write ?? (() => {}),
			writeFile: e?.writeFile ?? (() => {}),
			createDirectory: e?.createDirectory ?? (() => {}),
			exit: e?.exit ?? (() => {}),
			getExecutingFilePath: e?.getExecutingFilePath ?? (() => o + "/__fake__.js"),
			getCurrentDirectory: o,
			getModifiedTime: g,
			readFile: m,
			readDirectory: x,
			getDirectories: b,
			resolvePath: p,
			fileExists: _,
			directoryExists: h,
			get version() {
				return c;
			},
			async sync() {
				for (; d.size;) await Promise.all(d);
				return c;
			}
		};
		function p(n) {
			if (e) {
				let t = o();
				if (i !== t && (i = t, e.directoryExists(t))) try {
					process.chdir(t);
				} catch {}
				return e.resolvePath(n).replace(/\\/g, "/");
			}
			return t.resolve(n).replace(/\\/g, "/");
		}
		function m(e, n) {
			e = p(e);
			let r = T(t.dirname(e)), i = t.basename(e);
			return S(e, n, r), r.files.get(D(i))?.text;
		}
		function h(e) {
			e = p(e);
			let t = T(e);
			if (t.exists === void 0) {
				t.exists = !1;
				let n = a.fs?.stat(s.asUri(e));
				if (typeof n == "object" && "then" in n) {
					let e = n;
					d.add(e), n.then((n) => {
						d.delete(e), t.exists = n?.type === 2, t.exists && c++;
					});
				} else t.exists = n?.type === 2;
			}
			return t.exists;
		}
		function g(e) {
			e = p(e);
			let t = y(e);
			return t.requestedStat || (t.requestedStat = !0, v(e, t)), t.stat ? new Date(t.stat.mtime) : /* @__PURE__ */ new Date(-1);
		}
		function _(e) {
			e = p(e);
			let t = y(e), n = () => t.text !== void 0 || t.stat?.type === 1;
			return n() ? !0 : (t.requestedStat || (t.requestedStat = !0, v(e, t)), n());
		}
		function v(e, t) {
			let n = a.fs?.stat(s.asUri(e));
			if (typeof n == "object" && "then" in n) {
				let e = n;
				d.add(e), n.then((n) => {
					d.delete(e), (t.stat?.type !== n?.type || t.stat?.mtime !== n?.mtime) && c++, t.stat = n;
				});
			} else t.stat = n;
		}
		function y(e) {
			e = p(e);
			let n = t.dirname(e), r = t.basename(e), i = T(n), a = i.files.get(D(r));
			return a || i.files.set(D(r), a = {
				name: r,
				requestedStat: !1,
				requestedText: !1
			}), a;
		}
		function b(e) {
			return e = p(e), C(e), [...T(e).dirs.values()].filter((e) => e.exists).map((e) => e.name);
		}
		function x(t, n, i, a, s) {
			t = p(t);
			let c = o(), u = (0, r.matchFiles)(t, n, i, a, l, c, s, (e) => {
				e = p(e), C(e);
				let t = T(e);
				return {
					files: [...t.files.values()].filter((e) => e.stat?.type === 1).map((e) => e.name),
					directories: [...t.dirs.values()].filter((e) => e.exists).map((e) => e.name)
				};
			}, e?.realpath ? ((t) => e.realpath(t)) : ((e) => e));
			return [...new Set(u)];
		}
		function S(e, n, r) {
			let i = t.basename(e), o = r.files.get(D(i));
			if (o || r.files.set(D(i), o = {
				name: i,
				requestedStat: !1,
				requestedText: !1
			}), o.requestedText) return;
			o.requestedText = !0;
			let l = s.asUri(e), u = a.fs?.readFile(l, n);
			if (typeof u == "object" && "then" in u) {
				let e = u;
				d.add(e), u.then((t) => {
					d.delete(e), t !== void 0 && (o.text = t, o.stat && o.stat.mtime++, c++);
				});
			} else u !== void 0 && (o.text = u);
		}
		function C(e) {
			let t = T(e);
			if (t.requestedRead) return;
			t.requestedRead = !0;
			let n = a.fs?.readDirectory(s.asUri(e || "."));
			if (typeof n == "object" && "then" in n) {
				let r = n;
				d.add(r), n.then((n) => {
					d.delete(r), w(e, t, n) && c++;
				});
			} else w(e, t, n ?? []);
		}
		function w(e, t, n) {
			n = n.filter(([e]) => e !== "." && e !== "..");
			let r = !1;
			for (let [i, o] of n) {
				let n = o;
				if (n === 64) {
					let r = a.fs?.stat(s.asUri(e + "/" + i));
					if (typeof r == "object" && "then" in r) {
						let e = r;
						d.add(e), r.then((n) => {
							if (d.delete(e), n?.type === 1) {
								let e = t.files.get(D(i));
								e || t.files.set(D(i), e = {
									name: i,
									requestedStat: !1,
									requestedText: !1
								}), (n.type !== e.stat?.type || n.mtime !== e.stat?.mtime) && c++, e.stat = n, e.requestedStat = !0;
							} else if (n?.type === 2) {
								let e = E(t, i);
								e.exists || (e.exists = !0, c++);
							}
						});
					} else r && (n = r.type);
				}
				if (n === 1) {
					let e = t.files.get(D(i));
					e || t.files.set(D(i), e = {
						name: i,
						requestedStat: !1,
						requestedText: !1
					}), e.stat || (e.stat = {
						type: 1,
						mtime: 0,
						ctime: 0,
						size: 0
					}, r = !0);
				} else if (n === 2) {
					let e = E(t, i);
					e.exists || (e.exists = !0, r = !0);
				}
			}
			return r;
		}
		function T(e, n = !1) {
			let r = [], i = e, a = t.basename(i), o;
			for (; o !== i;) o = i, r.push(a), i = t.dirname(i), a = t.basename(i);
			let s = u;
			for (let e = r.length - 1; e >= 0; e--) {
				let t = r[e];
				s = E(s, t), n && !s.exists && (s.exists = !0, c++);
			}
			return s;
		}
		function E(e, t) {
			let n = e.dirs.get(D(t));
			return n || e.dirs.set(D(t), n = {
				name: t,
				dirs: /* @__PURE__ */ new Map(),
				files: /* @__PURE__ */ new Map()
			}), n;
		}
		function D(e) {
			return l ? e : e.toLowerCase();
		}
	}
}));
(/* @__PURE__ */ i(((e) => {
	var t = e && e.__createBinding || (Object.create ? (function(e, t, n, r) {
		r === void 0 && (r = n);
		var i = Object.getOwnPropertyDescriptor(t, n);
		(!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
			enumerable: !0,
			get: function() {
				return t[n];
			}
		}), Object.defineProperty(e, r, i);
	}) : (function(e, t, n, r) {
		r === void 0 && (r = n), e[r] = t[n];
	})), n = e && e.__exportStar || function(e, n) {
		for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(n, r) && t(n, e, r);
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), n(xd(), e), n(wd(), e), n(Ed(), e), n(Dd(), e), n(kd(), e), n(jd(), e), n(Fd(), e);
})))(), l(), (0, qc.createUriMap)();
function Id({ env: e, workerContext: t, languagePlugins: n, languageServicePlugins: r, setup: i }) {
	let a = /* @__PURE__ */ new Map(), o = (0, qc.createLanguage)(n, (0, qc.createUriMap)(!1), (e) => {
		let n = t.getMirrorModels().find((t) => t.uri.toString() === e.toString());
		if (n) {
			let t = a.get(n);
			if (t && t[0] === n.version) return;
			let r = n.getValue(), i = {
				getText: (e, t) => r.substring(e, t),
				getLength: () => r.length,
				getChangeRange: () => void 0
			};
			a.set(n, [n.version, i]), o.scripts.set(e, i);
		} else o.scripts.delete(e);
	}), s = {};
	return i?.({
		language: o,
		project: s
	}), new Ld((0, qc.createLanguageService)(o, r, e, s));
}
var Ld = class {
	constructor(e) {
		this.languageService = e, this.pendingRequests = /* @__PURE__ */ new Map();
	}
	getSemanticTokenLegend() {
		return this.languageService.semanticTokenLegend;
	}
	getCommands() {
		return this.languageService.commands;
	}
	getTriggerCharacters() {
		return this.languageService.triggerCharacters;
	}
	getAutoFormatTriggerCharacters() {
		return this.languageService.autoFormatTriggerCharacters;
	}
	getSignatureHelpTriggerCharacters() {
		return this.languageService.signatureHelpTriggerCharacters;
	}
	getSignatureHelpRetriggerCharacters() {
		return this.languageService.signatureHelpRetriggerCharacters;
	}
	executeCommand(e, ...t) {
		return this.withToken(e, (e) => this.languageService.executeCommand(...t, e));
	}
	getDocumentFormattingEdits(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getDocumentFormattingEdits(o.from(t), ...n, e));
	}
	getFoldingRanges(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getFoldingRanges(o.from(t), ...n, e));
	}
	getSelectionRanges(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getSelectionRanges(o.from(t), ...n, e));
	}
	getLinkedEditingRanges(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getLinkedEditingRanges(o.from(t), ...n, e));
	}
	getDocumentSymbols(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getDocumentSymbols(o.from(t), ...n, e));
	}
	getDocumentColors(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getDocumentColors(o.from(t), ...n, e));
	}
	getColorPresentations(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getColorPresentations(o.from(t), ...n, e));
	}
	getDiagnostics(e, t) {
		return this.withToken(e, (e) => this.languageService.getDiagnostics(o.from(t), void 0, e));
	}
	getWorkspaceDiagnostics(e) {
		return this.withToken(e, (e) => this.languageService.getWorkspaceDiagnostics(e));
	}
	getReferences(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getReferences(o.from(t), ...n, e));
	}
	getFileReferences(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getFileReferences(o.from(t), ...n, e));
	}
	getDefinition(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getDefinition(o.from(t), ...n, e));
	}
	getTypeDefinition(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getTypeDefinition(o.from(t), ...n, e));
	}
	getImplementations(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getImplementations(o.from(t), ...n, e));
	}
	getRenameRange(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getRenameRange(o.from(t), ...n, e));
	}
	getRenameEdits(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getRenameEdits(o.from(t), ...n, e));
	}
	getFileRenameEdits(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getFileRenameEdits(o.from(t), ...n, e));
	}
	getSemanticTokens(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getSemanticTokens(o.from(t), ...n, e));
	}
	getHover(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getHover(o.from(t), ...n, e));
	}
	getCompletionItems(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getCompletionItems(o.from(t), ...n, e));
	}
	getCodeActions(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getCodeActions(o.from(t), ...n, e));
	}
	getSignatureHelp(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getSignatureHelp(o.from(t), ...n, e));
	}
	getCodeLenses(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getCodeLenses(o.from(t), ...n, e));
	}
	getDocumentHighlights(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getDocumentHighlights(o.from(t), ...n, e));
	}
	getDocumentLinks(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getDocumentLinks(o.from(t), ...n, e));
	}
	getWorkspaceSymbols(e, ...t) {
		return this.withToken(e, (e) => this.languageService.getWorkspaceSymbols(...t, e));
	}
	getAutoInsertSnippet(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getAutoInsertSnippet(o.from(t), ...n, e));
	}
	getDocumentDropEdits(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getDocumentDropEdits(o.from(t), ...n, e));
	}
	getInlayHints(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getInlayHints(o.from(t), ...n, e));
	}
	resolveCodeAction(e, ...t) {
		return this.withToken(e, (e) => this.languageService.resolveCodeAction(...t, e));
	}
	resolveCompletionItem(e, ...t) {
		return this.withToken(e, (e) => this.languageService.resolveCompletionItem(...t, e));
	}
	resolveCodeLens(e, ...t) {
		return this.withToken(e, (e) => this.languageService.resolveCodeLens(...t, e));
	}
	resolveDocumentLink(e, ...t) {
		return this.withToken(e, (e) => this.languageService.resolveDocumentLink(...t, e));
	}
	resolveInlayHint(e, ...t) {
		return this.withToken(e, (e) => this.languageService.resolveInlayHint(...t, e));
	}
	resolveWorkspaceSymbol(e, ...t) {
		return this.withToken(e, (e) => this.languageService.resolveWorkspaceSymbol(...t, e));
	}
	getCallHierarchyItems(e, t, ...n) {
		return this.withToken(e, (e) => this.languageService.getCallHierarchyItems(o.from(t), ...n, e));
	}
	getCallHierarchyIncomingCalls(e, ...t) {
		return this.withToken(e, (e) => this.languageService.getCallHierarchyIncomingCalls(...t, e));
	}
	getCallHierarchyOutgoingCalls(e, ...t) {
		return this.withToken(e, (e) => this.languageService.getCallHierarchyOutgoingCalls(...t, e));
	}
	dispose() {
		this.languageService.dispose();
	}
	cancelRequest(e) {
		this.pendingRequests.delete(e);
	}
	async withToken(e, t) {
		let { pendingRequests: n } = this, r = {
			get isCancellationRequested() {
				return !n.has(e);
			},
			onCancellationRequested(t) {
				let r = n.get(e);
				return r || (r = /* @__PURE__ */ new Set(), n.set(e, r)), r.add(t), { dispose() {
					r.delete(t);
				} };
			}
		};
		this.pendingRequests.set(e, void 0);
		try {
			return await t(r);
		} finally {
			this.pendingRequests.delete(e);
		}
	}
}, Rd = !1;
function zd(e) {
	if (Rd) throw Error("WebWorker already initialized!");
	Rd = !0;
	let t = new c((e) => globalThis.postMessage(e), (t) => e(t));
	return globalThis.onmessage = (e) => {
		t.onmessage(e.data);
	}, t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-editor@0.56.0/node_modules/monaco-editor/esm/vs/editor/editor.worker.start.js
function Bd(e) {
	let t, n = zd((r) => {
		let i = s.getChannel(r);
		return t = e({
			host: new Proxy({}, { get(e, t, n) {
				if (t !== "then") {
					if (typeof t != "string") throw Error("Not supported");
					return (...e) => i.$fhr(t, e);
				}
			} }),
			getMirrorModels: () => n.requestHandler.getModels()
		}), new a(t);
	});
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/monaco-editor@0.56.0/node_modules/monaco-editor/esm/vs/internal/common/initialize.js
var Vd = !1;
function Hd() {
	return Vd;
}
function Ud(e) {
	Vd = !0, self.onmessage = (t) => {
		Bd((n) => e(n, t.data));
	};
}
self.onmessage = () => {
	Hd() || Bd(() => ({}));
}, l(), Ud((e) => Id({
	workerContext: e,
	env: { workspaceFolders: [o.parse("file:///")] },
	languagePlugins: [{ getLanguageId: () => "json" }],
	languageServicePlugins: bd()
}));
//#endregion

//# sourceMappingURL=worker.js.map