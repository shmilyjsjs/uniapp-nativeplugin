function hj_lbc() {
	this["@ali/lib-applink/callApp"] = function(a) {
		function b(c) {
			if (d[c]) return d[c].exports;
			var e = d[c] = {
				exports: {},
				id: c,
				loaded: !1
			};
			return a[c].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
		}
		var d, e, c = window.webpackJsonp_ali_lib_applink__name_;
		return window.webpackJsonp_ali_lib_applink__name_ = function(f, g) {
			for (var h, i, j = 0, k = []; j < f.length; j++) i = f[j], e[i] && k.push.apply(k, e[i]), e[i] = 0;
			for (h in g) a[h] = g[h];
			for (c && c(f, g); k.length;) k.shift().call(null, b);
			return g[0] ? (d[0] = 0, b(0)) : void 0
		}, d = {}, e = {
			0: 0
		}, b.e = function(a, c) {
			if (0 === e[a]) return c.call(null, b);
			if (void 0 !== e[a]) e[a].push(c);
			else {
				e[a] = [c];
				var d = document.getElementsByTagName("head")[0],
					f = document.createElement("script");
				f.type = "text/javascript", f.charset = "utf-8", f.async = !0, f.src = b.p + "" + a + "." + ({
					1: "linksdk"
				} [a] || a) + ".js", d.appendChild(f)
			}
		}, b.m = a, b.c = d, b.p = "", b(0)
	}([function(a, b, c) {
		a.exports = c(1)
	}, function(a, b, c) {
		function d(a) {
			var b, c;
			if (a && a.__esModule) return a;
			if (b = {}, null != a)
				for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
			return b["default"] = a, b
		}

		function e(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}

		function f(a, b) {
			var d, e, c = new n["default"](location.href);
			for (d in c.params) a.params.hasOwnProperty(d) || (a.params[d] = c.params[d]);
			if ("object" === ("undefined" == typeof b ? "undefined" : l(b)))
				for (e in b) a.params[e] = "number" == typeof b[e] ? "" + b[e] : "function" == typeof b[e] ? "" : b[e];
			return a
		}

		function g(a) {
			D || (D = w.createElement("iframe"), D.id = "callapp_iframe_" + Date.now(), D.frameborder = "0", D.style.cssText =
				"display:none;border:0;width:0;height:0;", w.body.appendChild(D)), D.src = a
		}

		function h(a, b) {
			b === !1 || !z && b !== !0 ? location.href = a : location.replace(a)
		}

		function i(a) {
			var c, b = document.createElement("a");
			b.setAttribute("href", a), b.style.display = "none", document.body.appendChild(b), c = document.createEvent(
				"HTMLEvents"), c.initEvent("click", !1, !1), b.dispatchEvent(c)
		}

		function j(a) {
			if (a instanceof n["default"])
				for (var b in a._params) null !== a.params[b] && "undefined" !== a.params[b] && "" !== a.params[b] || delete a.params[
					b]
		}

		function k() {
			var a = arguments,
				b = {};
			return Array.prototype.forEach.call(a, function(a) {
				for (var d in a) void 0 !== a[d] && null !== a[d] || delete a[d];
				b = r["default"](b, a)
			}), b
		}
		var B, C, D, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
				return typeof a
			} : function(a) {
				return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
			},
			m = c(2),
			n = e(m),
			o = c(3),
			p = d(o),
			q = c(10),
			r = e(q),
			s = c(11),
			t = d(s),
			u = t.BIZ_DEFAULT_CONF,
			v = t.ERROR_ENUM,
			w = window.document,
			x = window.navigator.userAgent,
			y = p.os,
			z = (p.params, p.aliapp),
			A = p.browser;
		A.isLieBaoFast = x.match(/(?:LieBaoFast\/)([\d\.]+)/), A.isBaiduBrowser = x.match(/(?:baidubrowser\/)([\d\.]+)/),
			B = p.os.isIOS ? 2e3 : 1e3, C = {
				callNative: function(a) {
					var d, e, k, l, b = "" + a.protocol + a.hostPath;
					try {
						b = new n["default"](b)
					} catch (c) {
						return void console.error(v.CALLNATIVE_ERROR.MSG)
					}
					return a.params && f(b, a.params), j(b), d = y.isAndroid && A.isChrome && !A.isWebview, e = y.isAndroid && (A.isQQ ||
							A.isLieBaoFast), k = y.isAndroid && !!x.match(/samsung/i) && y.version.gte("4.3") && y.version.lt("4.5"), l =
						y.isIPhone && y.version.gte("9.0") && A.isSafari, (d || e || k || a.forceIntent) && (b.hash =
							"Intent;scheme=" + b.protocol.replace(":", "") + ";package=" + a["package"] + ";end", b.protocol = "intent:"
						), l ? setTimeout(function() {
							i(b.toString())
						}, 300) : "intent:" === b.protocol ? setTimeout(function() {
							h(b.toString())
						}, 300) : setTimeout(function() {
							g(b.toString())
						}, 300), b.toString()
				},
				gotoApp: function(a) {
					var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
					return u[a] && u[a].protocol ? u[a].usable === !1 ? void console.error("" + v.CALLNATIVE_NOT_USABLE.MSG) : (b.protocol =
						b.protocol || u[a].protocol || "", b.hostPath = b.hostPath || u[a].hostPath || "", b["package"] = b[
							"package"] || u[a]["package"] || "", C.callNative(b)) : void console.error(v.LINKKEY_ERROR.MSG +
						", please check the params of callApp.gotoApp.")
				},
				download: function(a) {
					var c, b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
					return u[a] || b.downloadUrl ? (b.downloadUrl || (b.downloadUrl = u[a].downloadUrl), c = new n["default"](b.downloadUrl),
						b.exdParams && f(c, b.exdParams), j(c), c = c.toString(), h(c, b.replace), void 0) : void console.error(v.LINKKEY_ERROR
						.MSG + ", please check the params of callApp.download.")
				},
				gotoPage: function(a) {
					var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
					return u[a] && u[a].protocol || console.error(v.LINKKEY_ERROR.MSG +
						", please check the params of callApp.gotoPage."), b = k({
						timeout: B
					}, b), b.targetUrl = C.gotoApp(a, b), b.isNeedDownload ? ! function() {
						var c = window.setTimeout(function() {
							clearTimeout(c), C.download(a, b)
						}, b.timeout)
					}() : b.uri && ! function() {
						var a = window.setTimeout(function() {
							clearTimeout(a), h(b.uri, b.replace)
						}, b.timeout)
					}(), b.targetUrl
				}
			}, D = void 0, a.exports = C
	}, function(a, b) {
		function c(a, b) {
			if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
		}
		var h, i, d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
				return typeof a
			} : function(a) {
				return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
			},
			e = function() {
				function a(a, b) {
					var g, h, c = [],
						d = !0,
						e = !1,
						f = void 0;
					try {
						for (h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
					} catch (i) {
						e = !0, f = i
					} finally {
						try {
							!d && h["return"] && h["return"]()
						} finally {
							if (e) throw f
						}
					}
					return c
				}
				return function(b, c) {
					if (Array.isArray(b)) return b;
					if (Symbol.iterator in Object(b)) return a(b, c);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			f = "function" == typeof Symbol && "symbol" === d(Symbol.iterator) ? function(a) {
				return "undefined" == typeof a ? "undefined" : d(a)
			} : function(a) {
				return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : "undefined" == typeof a ?
					"undefined" : d(a)
			},
			g = function() {
				function a(a, b) {
					var c, d;
					for (c = 0; c < b.length; c++) d = b[c], d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d &&
						(d.writable = !0), Object.defineProperty(a, d.key, d)
				}
				return function(b, c, d) {
					return c && a(b.prototype, c), d && a(b, d), b
				}
			}();
		Object.defineProperty(b, "__esModule", {
			value: !0
		}), h = new RegExp(
			"^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$",
			"i"), i = function() {
			function a(b) {
				c(this, a), this._params = {}, this._hash = "", b && this.assign(b.toString())
			}
			return g(a, [{
				key: "assign",
				value: function(a) {
					a = a || "";
					var b = a.match(h);
					b ? (this.protocol = "http:", this.username = b[2] || "", this.password = b[3] || "", this.hostname = b[4],
						this.port = b[5] || "", this.pathname = b[6] || "/", this.search = b[7] || "", this.hash = b[8] || "",
						this.origin = this.protocol + "//" + this.host) : (this.protocol = "", this.username = "", this.password =
						"", this.hostname = "yx3d", this.port = "", this.pathname = "/", this.search = "", this.hash = "", this.origin =
						this.protocol + "//" + this.host)
				}
			}, {
				key: "toString",
				value: function() {
					var a = this.protocol + "//";
					return this.username && (a += this.username, this.password && (a += ":" + this.password), a += "@"), a +=
						this.hostname, this.port && "80" !== this.port && (a += ":" + this.port), this.pathname && (a += this.pathname),
						this.search && (a += this.search), this.hash && (a += this.hash), a
				}
			}, {
				key: "params",
				get: function() {
					return this._params
				},
				set: function(a) {
					var b;
					if (!(!a || "object" !== ("undefined" == typeof a ? "undefined" : f(a)) || a instanceof Date || a instanceof RegExp ||
							a instanceof Array || a instanceof String || a instanceof Number || a instanceof Boolean)) {
						for (b in this._params) delete this._params[b];
						for (b in a) this._params[b] = a[b]
					}
				}
			}, {
				key: "search",
				get: function() {
					var b, a = [];
					for (b in this._params)
						if (void 0 !== this._params[b])
							if ("" !== this._params[b]) try {
								a.push(encodeURIComponent(b) + "=" + encodeURIComponent(this._params[b]))
							} catch (c) {
								a.push(b + "=" + this._params[b])
							} else try {
								a.push(encodeURIComponent(b))
							} catch (c) {
								a.push(b)
							}
					return a.length ? "?" + a.join("&") : ""
				},
				set: function(a) {
					var b, c, d, f, g, h, i;
					if ("string" == typeof a || a instanceof String) {
						a = a.toString(), 0 === a.indexOf("?") && (a = a.substr(1)), b = a.split("&");
						for (c in this._params) delete this._params[c];
						for (d = 0; d < b.length; d++)
							if (f = b[d].split("="), g = e(f, 2), h = g[0], i = g[1], void 0 !== i && (i = i.toString()), h) try {
								this._params[decodeURIComponent(h)] = decodeURIComponent(i)
							} catch (j) {
								this._params[h] = i
							}
					}
				}
			}, {
				key: "hash",
				get: function() {
					return this._hash
				},
				set: function(a) {
					("string" == typeof a || a instanceof String) && (a = a.toString(), a && a.indexOf("#") < 0 && (a = "#" +
						a), this._hash = a || "")
				}
			}, {
				key: "host",
				get: function() {
					return this.hostname + (this.port ? ":" + this.port : "")
				},
				set: function(a) {
					if ("string" == typeof a || a instanceof String) {
						a = a.toString();
						var b = a.match(/([^:\/?#]+)(?:[:]([0-9]+))?/);
						b && (this.hostname = b[1], this.port = b[2] || "")
					}
				}
			}]), a
		}(), b["default"] = i
	}, function(a, b, c) {
		function d(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		}), b.Version = b.params = b.thirdapp = b.aliapp = b.os = b.browser = void 0;
		var e = c(4),
			f = d(e),
			g = c(7),
			h = d(g),
			i = c(6),
			j = d(i),
			k = c(8),
			l = d(k),
			m = c(9),
			n = d(m),
			o = c(5),
			p = d(o);
		b.browser = h["default"], b.os = j["default"], b.aliapp = f["default"], b.thirdapp = l["default"], b.params = n[
			"default"], b.Version = p["default"]
	}, function(a, b, c) {
		function d(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r;
		Object.defineProperty(b, "__esModule", {
				value: !0
			}), g = c(5), h = d(g), i = c(6), j = d(i), k = window.navigator.userAgent, l = !1, m = "", n = "", o = "", (f =
				k.match(/WindVane[\/\s]([\d\.\_]+)/i)) && (e = f[1]), (f = k.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (l = !
				0, m = f[1], o = f[2], n = m.indexOf("-PD") > 0 ? j["default"].isIOS ? "iPad" : j["default"].isAndroid ?
				"AndroidPad" : j["default"].name : j["default"].name), !m && k.indexOf("TBIOS") > 0 && (m = "TB"), p = window._ua_popLayer ||
			"", q = !1, r = "", p && (f = p.match(/PopLayer\/([\d\.]+)/i)) && (q = !0, r = f[1]), l && (l = {
				windvane: new h["default"](e || "0.0.0"),
				appname: m || "unkown",
				version: new h["default"](o || "0.0.0"),
				platform: n || j["default"].name,
				poplayer: q || !1,
				poplayerVersion: new h["default"](r || "0.0.0")
			}), b["default"] = l
	}, function(a, b) {
		function c(a, b) {
			if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var d = function() {
				function a(a, b) {
					var c, d;
					for (c = 0; c < b.length; c++) d = b[c], d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d &&
						(d.writable = !0), Object.defineProperty(a, d.key, d)
				}
				return function(b, c, d) {
					return c && a(b.prototype, c), d && a(b, d), b
				}
			}(),
			e = function() {
				function a(b) {
					c(this, a), this.val = b ? b.toString() : ""
				}
				return d(a, null, [{
					key: "compare",
					value: function(a, b) {
						var c, d, e;
						for (a = a.toString().split("."), b = b.toString().split("."), c = 0; c < a.length || c < b.length; c++) {
							if (d = parseInt(a[c], 10), e = parseInt(b[c], 10), isNaN(d) && (d = 0), isNaN(e) && (e = 0), e > d)
								return -1;
							if (d > e) return 1
						}
						return 0
					}
				}]), d(a, [{
					key: "gt",
					value: function(b) {
						return a.compare(this, b) > 0
					}
				}, {
					key: "gte",
					value: function(b) {
						return a.compare(this, b) >= 0
					}
				}, {
					key: "lt",
					value: function(b) {
						return a.compare(this, b) < 0
					}
				}, {
					key: "lte",
					value: function(b) {
						return a.compare(this, b) <= 0
					}
				}, {
					key: "eq",
					value: function(b) {
						return 0 === a.compare(this, b)
					}
				}, {
					key: "toString",
					value: function() {
						return this.val.toString()
					}
				}]), a
			}();
		b["default"] = e
	}, function(a, b, c) {
		function d(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}
		var e, f, g, h, i, j;
		Object.defineProperty(b, "__esModule", {
			value: !0
		}), g = c(5), h = d(g), i = window.navigator.userAgent, (f = i.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)) ? e = {
			name: "Windows Phone",
			isWindowsPhone: !0,
			version: new h["default"](f[1])
		} : i.match(/Safari/) && (f = i.match(/Android[\s\/]([\d\.]+)/)) ? (e = {
			version: new h["default"](f[1])
		}, i.match(/Mobile\s+Safari/) ? (e.name = "Android", e.isAndroid = !0) : (e.name = "AndroidPad", e.isAndroidPad = !
			0)) : (f = i.match(/(iPhone|iPad|iPod)/)) && (j = f[1], (f = i.match(/OS ([\d_\.]+) like Mac OS X/)) && (e = {
			name: j,
			isIPhone: "iPhone" === j || "iPod" === j,
			isIPad: "iPad" === j,
			isIOS: !0,
			version: new h["default"](f[1].split("_").join("."))
		})), e || (e = {
			name: "unknown",
			version: new h["default"]("0.0.0")
		}), b["default"] = e
	}, function(a, b, c) {
		function d(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var e, f, g = c(5),
			h = d(g),
			i = window.navigator.userAgent;
		(f = i.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? e = {
				name: "UC",
				isUC: !0,
				version: new h["default"](f[1])
			}: (f = i.match(/MQQBrowser\/([\d\.]+)/)) ? e = {
				name: "QQ",
				isQQ: !0,
				version: new h["default"](f[1])
			} : (f = i.match(/(?:Firefox|FxiOS)\/([\d\.]+)/)) ? e = {
				name: "Firefox",
				isFirefox: !0,
				version: new h["default"](f[1])
			} : (f = i.match(/MSIE\s([\d\.]+)/)) || (f = i.match(/IEMobile\/([\d\.]+)/)) ? (e = {
				version: new h["default"](f[1])
			}, i.match(/IEMobile/) ? (e.name = "IEMobile", e.isIEMobile = !0) : (e.name = "IE", e.isIE = !0), i.match(
				/Android|iPhone/) && (e.isIELikeWebkit = !0)) : (f = i.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? (e = {
				name: "Chrome",
				isChrome: !0,
				version: new h["default"](f[1])
			}, i.match(/Version\/[\d+\.]+\s*Chrome/) && (e.name = "Chrome Webview", e.isWebview = !0)) : i.match(/Safari/) &&
			(f = i.match(/Android[\s\/]([\d\.]+)/)) ? e = {
				name: "Android",
				isAndroid: !0,
				version: new h["default"](f[1])
			} : i.match(/iPhone|iPad|iPod/) && (i.match(/Safari/) && (f = i.match(/Version\/([\d\.]+)/)) ? e = {
				name: "Safari",
				isSafari: !0,
				version: new h["default"](f[1])
			} : (f = i.match(/OS ([\d_\.]+) like Mac OS X/)) && (e = {
				name: "iOS Webview",
				isWebview: !0,
				version: new h["default"](f[1].replace(/\_/g, "."))
			})), e || (e = {
				name: "unknown",
				version: new h["default"]("0.0.0")
			}), b["default"] = e
	}, function(a, b) {
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var c, d = window.navigator.userAgent;
		c = d.match(/Weibo/i) ? {
			appname: "Weibo",
			isWeibo: !0
		} : !!d.match(/MicroMessenger/i) && {
			appname: "Weixin",
			isWeixin: !0
		}, b["default"] = c
	}, function(a, b) {
		var c, d, e, f;
		if (Object.defineProperty(b, "__esModule", {
				value: !0
			}), c = {}, d = window.location.search.replace(/^\?/, ""), d)
			for (e = d.split("&"), f = 0; f < e.length; f++) {
				e[f] = e[f].split("=");
				try {
					c[e[f][0]] = decodeURIComponent(e[f][1])
				} catch (g) {
					c[e[f][0]] = e[f][1]
				}
			}
		b["default"] = c
	}, function(a) {
		function c() {
			var a, b, c, e;
			for (a = {}, b = 0; b < arguments.length; b++) {
				c = arguments[b];
				for (e in c) d.call(c, e) && (a[e] = c[e])
			}
			return a
		}
		a.exports = c;
		var d = Object.prototype.hasOwnProperty
	}, function(a, b, c) {
		function d(a) {
			var b, c;
			if (a && a.__esModule) return a;
			if (b = {}, null != a)
				for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
			return b["default"] = a, b
		}
		var e = c(3),
			f = d(e),
			g = {
				LINKKEY_ERROR: {
					MSG: "linkKey should be TB/TM/TBI/TMI"
				},
				CALLNATIVE_ERROR: {
					MSG: "callNative url is invalid"
				},
				CALLNATIVE_NOT_USABLE: {
					MSG: "callNative evn is invalid"
				}
			},
			h = {
				TB: {
					protocol: "tbopen://",
					hostPath: "m.taobao.com/tbopen/index.html",
					"package": "com.taobao.taobao",
					downloadUrl: "//h5.m.taobao.com/bcec/downloadTaobao.html",
					usable: "TB" != f.aliapp.appname
				},
				TBI: {
					protocol: "taobao://",
					"package": "com.taobao.taobao",
					downloadUrl: "//h5.m.taobao.com/bcec/downloadTaobao.html",
					usable: "TB" != f.aliapp.appname
				},
				TM: {
					protocol: "tmall://",
					hostPath: "page.tm/appLink",
					"package": "com.tmall.wireless",
					downloadUrl: "//pages.tmall.com/wow/portal/act/app-download",
					usable: "TM" != f.aliapp.appname
				},
				TMI: {
					protocol: "tmall://",
					"package": "com.tmall.wireless",
					downloadUrl: "//pages.tmall.com/wow/portal/act/app-download",
					usable: "TM" != f.aliapp.appname
				}
			};
		Object.keys(h).forEach(function(a) {
			Object.defineProperty(h[a], "protocol", {
				writable: !1,
				configurable: !1
			}), Object.defineProperty(h[a], "package", {
				writable: !1,
				configurable: !1
			})
		}), b.ERROR_ENUM = g, b.BIZ_DEFAULT_CONF = h
	}]), this["@ali/lib-applink/linksdk"] = webpackJsonp_ali_lib_applink__name_([1], [function(a, b, c) {
		function d(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}

		function e(a) {
			var b = new g["default"](a);
			return i["default"].bcAplus(b), b
		}
		var f = c(12),
			g = d(f),
			h = c(15),
			i = d(h);
		! function() {
			window.goldlog && window.goldlog.record || i["default"].getScript()
		}(), window.BCSDK_AppLink = window.BCSDK_AppLink || {}, window.BCSDK_AppLink.init = e, a.exports = e
	}, , , , , , , , , , , , function(a, b, c) {
		function d(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}

		function e(a, b) {
			if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
		}

		function f(a, b, c) {
			var n, d = new w["default"](window.location.href),
				e = a.appkey,
				f = a.params && a.params.isv_code || "",
				h = a.params && a.params.visa || d.params.visa || "",
				j = "ybh.100.1",
				k = "H46717801",
				l = [],
				m = {
					jumpType: b,
					jumpTo: encodeURIComponent(c),
					appkey: e,
					ttid: i(a),
					isv_code: f,
					source: "linksdk",
					linkKey: a.linkKey,
					v: z,
					fromUrl: encodeURIComponent(window.location.href.split("?")[0]),
					visa: h
				};
			m = o(a.params, m);
			for (n in m) l.push(n + "=" + m[n]);
			try {
				window.goldlog && goldlog.record ? window.goldlog.record("/" + j, "", l.join("&"), k) : g(
					"https://wgo.mmstat.com/" + j + "?" + l.join("&") + ("&t=" + (new Date).getTime() + "}"))
			} catch (p) {
				return !1
			}
		}

		function g(a) {
			var b = document.createElement("img");
			b.style.cssText = "display:none", b.src = a, document.body.appendChild(b)
		}

		function h() {
			var g, h, a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				b = i(a),
				c = [],
				d = {
					ttid: b
				},
				e = a.ybhpss || "";
			if (a.trackParams && (d = s["default"](d, a.trackParams)), e) try {
				! function() {
					var a = decodeURIComponent(e),
						b = atob(a),
						c = b.split("&"),
						f = {};
					c.forEach(function(a) {
						var c = a.split("=");
						f[c[0]] = decodeURIComponent(c[1])
					}), d = s["default"](d, f)
				}()
			} catch (f) {
				console.error("ybhpss decode error:", e)
			}
			for (g in d) h = encodeURIComponent(d[g]), c.push(g + "=" + h);
			return e = c.join("&"), e = u["default"](e), e = encodeURIComponent(e)
		}

		function i() {
			var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				b = a.appkey,
				c = a.channelType || "0",
				d = a.channelName || "";
			return "2014_" + c + d + "_" + b + "@baichuan_h5_" + z
		}

		function j(a) {
			var g, j, b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
				c = i(b),
				d = m(a),
				e = h(b),
				f = b.params || {};
			if (!a || !d) return console.error(B.D_ERR), !1;
			for (g in f) j = f[g], "object" === ("undefined" == typeof j ? "undefined" : p(j)) ? j = JSON.stringify(j) :
				"function" == typeof j && (j = ""), d.params[g] = j;
			return d.params.ttid = d.params.ttid || c, d.params.ybhpss = decodeURIComponent(e), d.toString()
		}

		function k() {
			var q, r, s, a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				b = arguments.length <= 1 || void 0 === arguments[1] ? "h5" : arguments[1],
				c = a.params || {},
				d = a.itemId,
				e = a.shopId,
				f = a.tkUrl,
				g = a.url,
				j = a.backURL,
				k = a.appkey,
				m = c.isv_code || "",
				n = i(a),
				o = h(a),
				p = {};
			if (p = {
					action: "ali.open.nav",
					module: b,
					appkey: k,
					backURL: j || "",
					TTID: n,
					packageName: c.packageName || "",
					source: "linksdk",
					tag: m,
					utdid: c.utdid || "",
					v: z
				}, c.ybhpss = o, delete c.packageName, delete c.utdid, d) c.itemId = d;
			else if (e) c.shopId = e;
			else if (f) p.h5Url = l(f, c);
			else {
				if (!g) return console.error(B.NULL), !1;
				p.h5Url = l(g, c)
			}
			for (q in c) "number" == typeof c[q] && (c[q] = "" + c[q]);
			p.params = JSON.stringify(c);
			for (r in p) "function" == typeof p[r] ? p[r] = "" : "string" != typeof p[r] && (p[r] = JSON.stringify(p[r]));
			return s = {
				uri: a.uri,
				isNeedDownload: a.isNeedDownload,
				params: p
			}, a.timeout && (s.timeout = a.timeout), s
		}

		function l(a) {
			var b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
				c = m(a);
			return a && c ? (c.params.params = JSON.stringify(b), c.toString()) : (console.error(B.D_ERR), !1)
		}

		function m(a) {
			if (!a) return !1;
			try {
				return new w["default"](a)
			} catch (b) {
				return !1
			}
		}

		function n(a) {
			return !!a.appkey || (console.error(B.NULL_APPKEY), !1)
		}

		function o() {
			var a = arguments,
				b = {};
			return Array.prototype.forEach.call(a, function(a) {
				for (var d in a) void 0 !== a[d] && null !== a[d] || (a[d] = "");
				b = s["default"](b, a)
			}), b
		}
		Object.defineProperty(b, "__esModule", {
			value: !0
		});
		var p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
				return typeof a
			} : function(a) {
				return a && "function" == typeof Symbol && a.constructor === Symbol ? "symbol" : typeof a
			},
			q = function() {
				function a(a, b) {
					var c, d;
					for (c = 0; c < b.length; c++) d = b[c], d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d &&
						(d.writable = !0), Object.defineProperty(a, d.key, d)
				}
				return function(b, c, d) {
					return c && a(b.prototype, c), d && a(b, d), b
				}
			}(),
			r = c(10),
			s = d(r),
			t = c(13),
			u = d(t),
			v = c(2),
			w = d(v),
			x = c(1),
			z = (d(x), "0.3.8"),
			A = "BCSDK:",
			B = {
				D_ERR: A + "找不到url或者url不符合标准规划",
				UA_ERR: A + "不符合百川规范",
				INIT_APPKEY: A + "初始化未找到appkey",
				NULL: A + "找不到对象",
				NULL_ITEMID: A + "找不到itemId",
				NULL_SHOPID: A + "找不到shopId",
				NULL_APPKEY: A + "找不到appkey"
			},
			C = {
				appkey: "",
				backURL: "",
				openApp: !0,
				linkKey: "TB",
				isNeedDownload: !1,
				isDefaultRedirect: !0,
				channelType: "0",
				channelName: "",
				params: {},
				trackParams: {},
				ybhpss: ""
			},
			D = function() {
				function a(b) {
					e(this, a), this.version = z, this.options = o(C, b || {}), this.options.appkey || console.error(B.INIT_APPKEY)
				}
				return q(a, [{
					key: "openPage",
					value: function() {
						var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
							b = this;
						if (a.itemId) b.goDetail(a);
						else if (a.shopId) b.goShop(a);
						else if (a.tkUrl) b.goTaoke(a);
						else {
							if (!a.url) return console.error(B.NULL), !1;
							b.gotoUrl(a)
						}
					}
				}, {
					key: "goDetail",
					value: function() {
						var c, d, a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
							b = this;
						return a = o(b.options, a), a.params.forceCallApp = a.forceCallApp || 0, n(a) ? (c = a.itemId, d =
							"//h5.m.taobao.com/awp/core/detail.htm?id=" + c, a.itemId ? (f(a, "detail", c), void b.urlLink(d, a,
								"detail")) : (console.error(B.NULL_ITEMID), !1)) : !1
					}
				}, {
					key: "goShop",
					value: function() {
						var c, d, a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
							b = this;
						return a = o(b.options, a), a.params.forceCallApp = a.forceCallApp || 0, n(a) ? (c = a.shopId, d =
							"//shop.m.taobao.com/shop/shop_index.htm?shop_id=" + c, a.shopId ? (f(a, "shop", c), void b.urlLink(d, a,
								"shop")) : (console.error(B.NULL_SHOPID), !1)) : !1
					}
				}, {
					key: "goTaoke",
					value: function() {
						var c, d, a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
							b = this;
						return a = o(b.options, a), a.params.forceCallApp = a.forceCallApp || 0, n(a) ? (c = a.tkUrl, d = m(c), d ?
							(f(a, "taoke", c.split("?")[0]), void b.urlLink(c, a, "h5")) : (console.error(B.D_ERR), !1)) : !1
					}
				}, {
					key: "gotoUrl",
					value: function() {
						var c, d, a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
							b = this;
						return a = o(b.options, a), n(a) ? (c = a.url, d = m(c), d ? (f(a, "other", c.split("?")[0]), void b.urlLink(
							c, a, "h5")) : (console.error(B.D_ERR), !1)) : !1
					}
				}, {
					key: "urlLink",
					value: function(a) {
						var d, b = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
							c = arguments.length <= 2 || void 0 === arguments[2] ? "h5" : arguments[2];
						return a && m(a) ? (b.ybhpss = h(b), d = j(a, b), b.uri = d, k(b, c),location.href=b, void 0) : void console.error(B.D_ERR)
					}
				}]), a
			}();
		b["default"] = D
	}, function(a, b, c) {
		function d(a) {
			var b, c, d, g, h, i, j, k = "",
				l = 0;
			for (a = e(a); l < a.length;) b = a.charCodeAt(l++), c = a.charCodeAt(l++), d = a.charCodeAt(l++), g = b >> 2, h =
				(3 & b) << 4 | c >> 4, i = (15 & c) << 2 | d >> 6, j = 63 & d, isNaN(c) ? i = j = 64 : isNaN(d) && (j = 64), k =
				k + f.charAt(g) + f.charAt(h) + f.charAt(i) + f.charAt(j);
			return k
		}
		var e = c(14),
			f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		a.exports = d
	}, function(a) {
		function c(a) {
			var b, c, d;
			for (a = a.replace(/\r\n/g, "\n"), b = "", c = 0; c < a.length; c++) d = a.charCodeAt(c), 128 > d ? b += String.fromCharCode(
				d) : d > 127 && 2048 > d ? (b += String.fromCharCode(192 | d >> 6), b += String.fromCharCode(128 | 63 & d)) : (
				b += String.fromCharCode(224 | d >> 12), b += String.fromCharCode(128 | 63 & d >> 6), b += String.fromCharCode(
					128 | 63 & d));
			return b
		}
		a.exports = c
	}, function(a, b, c) {
		function d(a) {
			return a && a.__esModule ? a : {
				"default": a
			}
		}

		function e(a) {
			var b = "//g.alicdn.com/alilog/mlog/aplus_wap.js",
				c = document.createElement("script");
			return c.src = b, c.onload = function() {
				a && g["default"](a)
			}, c
		}
		var f = c(16),
			g = d(f),
			h = {
				bcAplus: function(a) {
					if (window.goldlog && window.goldlog.record) g["default"](a);
					else {
						var b = e(a);
						document.body.appendChild(b)
					}
				},
				getScript: e
			};
		a.exports = h
	}, function(a) {
		function c() {
			function a(a) {
				a.preventDefault();
				var c = a.target,
					e = d(c);
				b.openPage(e)
			}
			var h, i, j, k, l, m, b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
				c = document.querySelectorAll("a"),
				e = b.options || {},
				g = e.dataType || "bc_applink";
			if (!c.length) return !1;
			for (h = 0; h < c.length; h++)
				if (i = c[h], j = i.getAttribute("data-type"), j === g) {
					if (k = f, k || (f = []), k && k.length)
						for (l = 0; l < k.length; l++)
							if (m = k[l], m.a === i) {
								i.removeEventListener("click", m.handler, !1), f.splice(l, 1);
								break
							} f.push({
						a: i,
						handler: a
					}), i.addEventListener("click", a, !1)
				}
		}

		function d(a) {
			var b = a.getAttribute("data-appkey"),
				c = a.getAttribute("data-linkkey"),
				d = a.getAttribute("data-openapp"),
				f = a.getAttribute("data-itemid"),
				g = a.getAttribute("data-shopid"),
				h = a.getAttribute("data-taoke"),
				i = a.href,
				j = a.getAttribute("data-params"),
				k = a.getAttribute("data-trackparams"),
				l = a.getAttribute("data-ybhpss"),
				m = {
					itemId: f,
					shopId: g,
					tkUrl: h,
					url: i,
					appkey: b,
					linkKey: c,
					openApp: "false" !== d,
					ybhpss: l
				};
			if (j) try {
				m.params = JSON.parse(j)
			} catch (n) {
				delete m.params
			}
			if (k) try {
				m.trackParams = JSON.parse(k)
			} catch (n) {
				delete m.trackParams
			}
			return e(m), m
		}

		function e() {
			var a = arguments;
			Array.prototype.forEach.call(a, function(a) {
				for (var c in a) void 0 !== a[c] && null !== a[c] || delete a[c]
			})
		}
		var f = [];
		a.exports = c
	}])
};
export const core = String(hj_lbc)
