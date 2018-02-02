! function(n, t) {
    function hi(n) {
        var t = n.length,
            r = i.type(n);
        return !i.isWindow(n) && (!(1 !== n.nodeType || !t) || "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n))
    }

    function sr(n, r, u, f) {
        if (i.acceptData(n)) {
            var s, l, h = i.expando,
                a = "string" == typeof r,
                c = n.nodeType,
                o = c ? i.cache : n,
                e = c ? n[h] : n[h] && h;
            if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (c ? n[h] = e = k.pop() || i.guid++ : e = h), o[e] || (o[e] = {}, c || (o[e].toJSON = i.noop)), "object" != typeof r && "function" != typeof r || (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? null == (l = s[r]) && (l = s[i.camelCase(r)]) : l = s, l
        }
    }

    function lr(n, t, r) {
        if (i.acceptData(n)) {
            var o, h, e, s = n.nodeType,
                u = s ? i.cache : n,
                f = s ? n[i.expando] : i.expando;
            if (u[f]) {
                if (t && (e = r ? u[f] : u[f].data)) {
                    for (o = 0, h = (t = i.isArray(t) ? t.concat(i.map(t, i.camelCase)) : t in e ? [t] : (t = i.camelCase(t)) in e ? [t] : t.split(" ")).length; o < h; o++) delete e[t[o]];
                    if (!(r ? wt : i.isEmptyObject)(e)) return
                }(r || (delete u[f].data, wt(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
            }
        }
    }

    function ar(n, r, u) {
        if (u === t && 1 === n.nodeType) {
            var f = "data-" + r.replace(gu, "-$1").toLowerCase();
            if ("string" == typeof(u = n.getAttribute(f))) {
                try {
                    u = "true" === u || "false" !== u && ("null" === u ? null : +u + "" === u ? +u : eu.test(u) ? i.parseJSON(u) : u)
                } catch (n) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function wt(n) {
        var t;
        for (t in n)
            if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function ht() {
        return !0
    }

    function g() {
        return !1
    }

    function wr(n, t) {
        do n = n[t]; while (n && 1 !== n.nodeType);
        return n
    }

    function pr(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
            return !!t.call(n, i, n) === r
        });
        if (t.nodeType) return i.grep(n, function(n) {
            return n === t === r
        });
        if ("string" == typeof t) {
            var u = i.grep(n, function(n) {
                return 1 === n.nodeType
            });
            if (ce.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function(n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function rr(n) {
        var i = pi.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            for (; i.length;) t.createElement(i.pop());
        return t
    }

    function wu(n) {
        var t = n.getAttributeNode("type");
        return n.type = (t && t.specified) + "/" + n.type, n
    }

    function yu(n) {
        var t = fe.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function ni(n, t) {
        for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function lu(n, t) {
        if (1 === t.nodeType && i.hasData(n)) {
            var e, f, o, s = i._data(n),
                r = i._data(t, s),
                u = s.events;
            if (u) {
                delete r.handle, r.events = {};
                for (e in u)
                    for (f = 0, o = u[e].length; f < o; f++) i.event.add(t, e, u[e][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function ge(n, t) {
        var r, f, u;
        if (1 === t.nodeType) {
            if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
                u = i._data(t);
                for (f in u.events) i.removeEvent(t, f, u.handle);
                t.removeAttribute(i.expando)
            }
            "script" === r && t.text !== n.text ? (wu(t).text = n.text, yu(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && ti.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : "input" !== r && "textarea" !== r || (t.defaultValue = n.defaultValue)
        }
    }

    function u(n, r) {
        var s, e, h = 0,
            f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
        if (!f)
            for (f = [], s = n.childNodes || n; null != (e = s[h]); h++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
        return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
    }

    function of(n) {
        ti.test(n.type) && (n.defaultChecked = n.checked)
    }

    function hu(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = gr.length; i--;)
            if ((t = gr[i] + r) in n) return t;
        return u
    }

    function ut(n, t) {
        return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }

    function vu(n, t) {
        for (var e, r, o, f = [], u = 0, s = n.length; u < s; u++)(r = n[u]).style && (f[u] = i._data(r, "olddisplay"), e = r.style.display, t ? (f[u] || "none" !== e || (r.style.display = ""), "" === r.style.display && ut(r) && (f[u] = i._data(r, "olddisplay", ku(r.nodeName)))) : f[u] || (o = ut(r), (e && "none" !== e || !o) && i._data(r, "olddisplay", o ? e : i.css(r, "display"))));
        for (u = 0; u < s; u++)(r = n[u]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? f[u] || "" : "none"));
        return n
    }

    function au(n, t, i) {
        var r = to.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function iu(n, t, r, u, f) {
        for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; e < 4; e += 2) "margin" === r && (o += i.css(n, r + c[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + c[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + c[e] + "Width", !0, f))) : (o += i.css(n, "padding" + c[e], !0, f), "padding" !== r && (o += i.css(n, "border" + c[e] + "Width", !0, f)));
        return o
    }

    function fu(n, t, r) {
        var o = !0,
            u = "width" === t ? n.offsetWidth : n.offsetHeight,
            f = y(n),
            e = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
        if (u <= 0 || null == u) {
            if (((u = p(n, t, f)) < 0 || null == u) && (u = n.style[t]), ot.test(u)) return u;
            o = e && (i.support.boxSizingReliable || u === n.style[t]), u = parseFloat(u) || 0
        }
        return u + iu(n, t, r || (e ? "border" : "content"), o, f) + "px"
    }

    function ku(n) {
        var u = r,
            t = yr[n];
        return t || ("none" !== (t = bu(n, u)) && t || ((u = ((lt = (lt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement))[0].contentWindow || lt[0].contentDocument).document).write("<!doctype html><html><body>"), u.close(), t = bu(n, u), lt.detach()), yr[n] = t), t
    }

    function bu(n, t) {
        var r = i(t.createElement(n)).appendTo(t.body),
            u = i.css(r[0], "display");
        return r.remove(), u
    }

    function si(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function(t, i) {
            r || sf.test(n) ? u(n, i) : si(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== i.type(t)) u(n, t);
        else
            for (f in t) si(n + "[" + f + "]", t[f], r, u)
    }

    function pu(n) {
        return function(t, r) {
            "string" != typeof t && (r = t, t = "*");
            var u, e = 0,
                f = t.toLowerCase().match(s) || [];
            if (i.isFunction(r))
                for (; u = f[e++];) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function rf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        var f = {},
            o = n === yi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ci(n, r) {
        var f, u, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        return f && i.extend(!0, n, f), n
    }

    function tf() {
        try {
            return new n.XMLHttpRequest
        } catch (n) {}
    }

    function du() {
        return setTimeout(function() {
            b = t
        }), b = i.now()
    }

    function uu(n, t, r) {
        var h, s, o = 0,
            l = yt.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (s) return !1;
                for (var o = b || du(), i = Math.max(0, u.startTime + u.duration - o), r = 1 - (i / u.duration || 0), t = 0, e = u.tweens.length; t < e; t++) u.tweens[t].run(r);
                return f.notifyWith(n, [u, r, i]), r < 1 && e ? i : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: b || du(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            e = u.props;
        for (function(n, t) {
                var u, f, r, e, o;
                for (r in n)
                    if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o) {
                        u = o.expand(u), delete n[f];
                        for (r in u) r in n || (n[r] = u[r], t[r] = e)
                    } else t[f] = e
            }(e, u.opts.specialEasing); o < l; o++)
            if (h = yt[o].call(u, n, e, u.opts)) return h;
        return function(n, t) {
            i.each(t, function(t, i) {
                for (var u = (tt[t] || []).concat(tt["*"]), r = 0, f = u.length; r < f; r++)
                    if (u[r].call(n, t, i)) return
            })
        }(u, e), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function e(n, t, i, r, u) {
        return new e.prototype.init(n, t, i, r, u)
    }

    function et(n, t) {
        var u, i = {
                height: n
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = c[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function ru(n) {
        return i.isWindow(n) ? n : 9 === n.nodeType && (n.defaultView || n.parentWindow)
    }
    var ct, tu, o = typeof t,
        r = n.document,
        yf = n.location,
        lf = n.jQuery,
        af = n.$,
        st = {},
        k = [],
        cu = k.concat,
        kt = k.push,
        a = k.slice,
        ou = k.indexOf,
        ef = st.toString,
        rt = st.hasOwnProperty,
        ii = "1.9.1".trim,
        i = function(n, t) {
            return new i.fn.init(n, t, tu)
        },
        vt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        s = /\S+/g,
        no = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ke = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        su = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        be = /^[\],:{}\s]*$/,
        eo = /(?:^|:|,)(?:\s*\[)+/g,
        io = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ro = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        uo = /^-ms-/,
        ye = /-([\da-z])/gi,
        re = function(n, t) {
            return t.toUpperCase()
        },
        h = function(n) {
            (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (nu(), i.ready())
        },
        nu = function() {
            r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
        },
        ui, eu, gu, ei, ft, nt, it, hr, pt;
    i.fn = i.prototype = {
        jquery: "1.9.1",
        constructor: i,
        init: function(n, u, f) {
            var e, o;
            if (!n) return this;
            if ("string" == typeof n) {
                if (!(e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : ke.exec(n)) || !e[1] && u) return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
                if (e[1]) {
                    if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), su.test(e[1]) && i.isPlainObject(u))
                        for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
                    return this
                }
                if ((o = r.getElementById(e[2])) && o.parentNode) {
                    if (o.id !== e[2]) return f.find(n);
                    this.length = 1, this[0] = o
                }
                return this.context = r, this.selector = n, this
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return a.call(this)
        },
        get: function(n) {
            return null == n ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(n, t) {
            return i.each(this, n, t)
        },
        ready: function(n) {
            return i.ready.promise().done(n), this
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: kt,
        sort: [].sort,
        splice: [].splice
    }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function() {
        var r, s, u, e, h, c, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            o = !1;
        for ("boolean" == typeof n && (o = n, n = arguments[1] || {}, f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); f < l; f++)
            if (null != (h = arguments[f]))
                for (e in h) r = n[e], n !== (u = h[e]) && (o && u && (i.isPlainObject(u) || (s = i.isArray(u))) ? (s ? (s = !1, c = r && i.isArray(r) ? r : []) : c = r && i.isPlainObject(r) ? r : {}, n[e] = i.extend(o, c, u)) : u !== t && (n[e] = u));
        return n
    }, i.extend({
        noConflict: function(t) {
            return n.$ === i && (n.$ = af), t && n.jQuery === i && (n.jQuery = lf), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function(n) {
            if (!0 === n ? !--i.readyWait : !i.isReady) {
                if (!r.body) return setTimeout(i.ready);
                i.isReady = !0, !0 !== n && --i.readyWait > 0 || (ct.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function(n) {
            return "function" === i.type(n)
        },
        isArray: Array.isArray || function(n) {
            return "array" === i.type(n)
        },
        isWindow: function(n) {
            return null != n && n == n.window
        },
        isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function(n) {
            return null == n ? String(n) : "object" == typeof n || "function" == typeof n ? st[ef.call(n)] || "object" : typeof n
        },
        isPlainObject: function(n) {
            if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !rt.call(n, "constructor") && !rt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in n);
            return r === t || rt.call(n, r)
        },
        isEmptyObject: function(n) {
            var t;
            for (t in n) return !1;
            return !0
        },
        error: function(n) {
            throw new Error(n);
        },
        parseHTML: function(n, t, u) {
            if (!n || "string" != typeof n) return null;
            "boolean" == typeof t && (u = t, t = !1), t = t || r;
            var f = su.exec(n),
                e = !u && [];
            return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
        },
        parseJSON: function(t) {
            return n.JSON && n.JSON.parse ? n.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = i.trim(t)) && be.test(t.replace(io, "@").replace(ro, "]").replace(eo, "")) ? new Function("return " + t)() : void i.error("Invalid JSON: " + t)
        },
        parseXML: function(r) {
            var u, f;
            if (!r || "string" != typeof r) return null;
            try {
                n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : ((u = new ActiveXObject("Microsoft.XMLDOM")).async = "false", u.loadXML(r))
            } catch (n) {
                u = t
            }
            return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
        },
        noop: function() {},
        globalEval: function(t) {
            t && i.trim(t) && (n.execScript || function(t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function(n) {
            return n.replace(uo, "ms-").replace(ye, re)
        },
        nodeName: function(n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(n, t, i) {
            var r = 0,
                f = n.length,
                u = hi(n);
            if (i) {
                if (u)
                    for (; r < f && !1 !== t.apply(n[r], i); r++);
                else
                    for (r in n)
                        if (!1 === t.apply(n[r], i)) break
            } else if (u)
                for (; r < f && !1 !== t.call(n[r], r, n[r]); r++);
            else
                for (r in n)
                    if (!1 === t.call(n[r], r, n[r])) break; return n
        },
        trim: ii && !ii.call("ï»¿Â ") ? function(n) {
            return null == n ? "" : ii.call(n)
        } : function(n) {
            return null == n ? "" : (n + "").replace(no, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (hi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : kt.call(r, n)), r
        },
        inArray: function(n, t, i) {
            var r;
            if (t) {
                if (ou) return ou.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function(n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if ("number" == typeof f)
                for (; r < f; r++) n[u++] = i[r];
            else
                for (; i[r] !== t;) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function(n, t, i) {
            var u = [],
                r = 0,
                f = n.length;
            for (i = !!i; r < f; r++) i !== !!t(n[r], r) && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var f, r = 0,
                e = n.length,
                u = [];
            if (hi(n))
                for (; r < e; r++) null != (f = t(n[r], r, i)) && (u[u.length] = f);
            else
                for (r in n) null != (f = t(n[r], r, i)) && (u[u.length] = f);
            return cu.apply([], u)
        },
        guid: 1,
        proxy: function(n, r) {
            var e, u, f;
            return "string" == typeof r && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = a.call(arguments, 2), u = function() {
                return n.apply(r || this, e.concat(a.call(arguments)))
            }, u.guid = n.guid = n.guid || i.guid++, u) : t
        },
        access: function(n, r, u, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == u;
            if ("object" === i.type(u)) {
                e = !0;
                for (h in u) i.access(n, r, h, u[h], !0, o, s)
            } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
                    return c.call(i(n), r)
                })), r))
                for (; h < l; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
            return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
        },
        now: function() {
            return +new Date
        }
    }), i.ready.promise = function(n) {
        if (!ct)
            if (ct = i.Deferred(), "complete" === r.readyState) setTimeout(i.ready);
            else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1), t.addEventListener("load", h, !1);
        else {
            r.attachEvent("onreadystatechange", h), t.attachEvent("onload", h);
            var u = !1;
            try {
                u = null == t.frameElement && r.documentElement
            } catch (t) {}
            u && u.doScroll && function t() {
                if (!i.isReady) {
                    try {
                        u.doScroll("left")
                    } catch (n) {
                        return setTimeout(t, 50)
                    }
                    nu(), i.ready()
                }
            }()
        }
        return ct.promise(n)
    }, i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
        st["[object " + t + "]"] = t.toLowerCase()
    }), tu = i(r), ui = {}, i.Callbacks = function(n) {
        var h, f, l, c, e, v, r = [],
            u = !(n = "string" == typeof n ? ui[n] || function(n) {
                var t = ui[n] = {};
                return i.each(n.match(s) || [], function(n, i) {
                    t[i] = !0
                }), t
            }(n) : i.extend({}, n)).once && [],
            a = function(t) {
                for (f = n.memory && t, l = !0, e = v || 0, v = 0, c = r.length, h = !0; r && e < c; e++)
                    if (!1 === r[e].apply(t[0], t[1]) && n.stopOnFalse) {
                        f = !1;
                        break
                    }
                h = !1, r && (u ? u.length && a(u.shift()) : f ? r = [] : o.disable())
            },
            o = {
                add: function() {
                    if (r) {
                        var t = r.length;
                        ! function t(u) {
                            i.each(u, function(u, f) {
                                var e = i.type(f);
                                "function" === e ? n.unique && o.has(f) || r.push(f) : f && f.length && "string" !== e && t(f)
                            })
                        }(arguments), h ? c = r.length : f && (v = t, a(f))
                    }
                    return this
                },
                remove: function() {
                    return r && i.each(arguments, function(n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), h && (u <= c && c--, u <= e && e--)
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
                },
                empty: function() {
                    return r = [], this
                },
                disable: function() {
                    return r = u = f = t, this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return u = t, f || o.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(n, t) {
                    return t = t || [], t = [n, t.slice ? t.slice() : t], !r || l && !u || (h ? u.push(t) : a(t)), this
                },
                fire: function() {
                    return o.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!l
                }
            };
        return o
    }, i.extend({
        Deferred: function(n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function() {
                        return f
                    },
                    always: function() {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return i.Deferred(function(f) {
                            i.each(u, function(u, e) {
                                var s = e[0],
                                    o = i.isFunction(n[u]) && n[u];
                                t[e[1]](function() {
                                    var n = o && o.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                })
                            }), n = null
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function(n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add, o && e.add(function() {
                    f = o
                }, u[1 ^ n][2].disable, u[2][2].lock), t[i[0]] = function() {
                    return t[i[0] + "With"](this === t ? r : this, arguments), this
                }, t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function(n) {
            var o, c, s, t = 0,
                u = a.call(arguments),
                r = u.length,
                e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
                f = 1 === e ? n : i.Deferred(),
                h = function(n, t, i) {
                    return function(r) {
                        t[n] = this, i[n] = arguments.length > 1 ? a.call(arguments) : r, i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                };
            if (r > 1)
                for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    }), i.support = function() {
        var u, h, e, f, a, c, s, v, y, l, t = r.createElement("div");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", h = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !h || !e || !h.length) return {};
        s = (a = r.createElement("select")).appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], e.style.cssText = "top:1px;float:left;opacity:.5", u = {
            getSetAttribute: "t" !== t.className,
            leadingWhitespace: 3 === t.firstChild.nodeType,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: "/a" === e.getAttribute("href"),
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: !!f.value,
            optSelected: s.selected,
            enctype: !!r.createElement("form").enctype,
            html5Clone: "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === r.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, a.disabled = !0, u.optDisabled = !s.disabled;
        try {
            delete t.test
        } catch (n) {
            u.deleteExpando = !1
        }(f = r.createElement("input")).setAttribute("value", ""), u.input = "" === f.getAttribute("value"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = "t" === f.value, f.setAttribute("checked", "t"), f.setAttribute("name", "t"), (c = r.createDocumentFragment()).appendChild(f), u.appendChecked = f.checked, u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked, t.attachEvent && (t.attachEvent("onclick", function() {
            u.noCloneEvent = !1
        }), t.cloneNode(!0).click());
        for (l in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t.setAttribute(v = "on" + l, "t"), u[l + "Bubbles"] = v in n || !1 === t.attributes[v].expando;
        return t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === t.style.backgroundClip, i(function() {
            var s, e, i, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                f = r.getElementsByTagName("body")[0];
            f && ((s = r.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(s).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", (i = t.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", u.reliableHiddenOffsets = y && 0 === i[0].offsetHeight, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = 4 === t.offsetWidth, u.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, n.getComputedStyle && (u.pixelPosition = "1%" !== (n.getComputedStyle(t, null) || {}).top, u.boxSizingReliable = "4px" === (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width, (e = t.appendChild(r.createElement("div"))).style.cssText = t.style.cssText = h, e.style.marginRight = e.style.width = "0", t.style.width = "1px", u.reliableMarginRight = !parseFloat((n.getComputedStyle(e, null) || {}).marginRight)), typeof t.style.zoom !== o && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = 3 === t.offsetWidth, t.style.display = "block", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = 3 !== t.offsetWidth, u.inlineBlockNeedsLayout && (f.style.zoom = 1)), f.removeChild(s), s = t = i = e = null)
        }), h = a = c = s = e = f = null, u
    }(), eu = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, gu = /([A-Z])/g, i.extend({
        cache: {},
        expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(n) {
            return !!(n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando]) && !wt(n)
        },
        data: function(n, t, i) {
            return sr(n, t, i)
        },
        removeData: function(n, t) {
            return lr(n, t)
        },
        _data: function(n, t, i) {
            return sr(n, t, i, !0)
        },
        _removeData: function(n, t) {
            return lr(n, t, !0)
        },
        acceptData: function(n) {
            if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType) return !1;
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || !0 !== t && n.getAttribute("classid") === t
        }
    }), i.fn.extend({
        data: function(n, r) {
            var s, f, u = this[0],
                o = 0,
                e = null;
            if (n === t) {
                if (this.length && (e = i.data(u), 1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
                    for (s = u.attributes; o < s.length; o++)(f = s[o].name).indexOf("data-") || (f = i.camelCase(f.slice(5)), ar(u, f, e[f]));
                    i._data(u, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                i.data(this, n)
            }) : i.access(this, function(r) {
                if (r === t) return u ? ar(u, n, i.data(u, n)) : null;
                this.each(function() {
                    i.data(this, n, r)
                })
            }, null, r, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                i.removeData(this, n)
            })
        }
    }), i.extend({
        queue: function(n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var f = i.queue(n, t),
                e = f.length,
                r = f.shift(),
                u = i._queueHooks(n, t);
            "inprogress" === r && (r = f.shift(), e--), u.cur = r, r && ("fx" === t && f.unshift("inprogress"), delete u.stop, r.call(n, function() {
                i.dequeue(n, t)
            }, u)), !e && u && u.empty.fire()
        },
        _queueHooks: function(n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function() {
                    i._removeData(n, t + "queue"), i._removeData(n, r)
                })
            })
        }
    }), i.fn.extend({
        queue: function(n, r) {
            var u = 2;
            return "string" != typeof n && (r = n, n = "fx", u--), arguments.length < u ? i.queue(this[0], n) : r === t ? this : this.each(function() {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n), "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        delay: function(n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
                var r = setTimeout(t, n);
                i.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, r) {
            var f, s = 1,
                h = i.Deferred(),
                u = this,
                o = this.length,
                e = function() {
                    --s || h.resolveWith(u, [u])
                };
            for ("string" != typeof n && (r = n, n = t), n = n || "fx"; o--;)(f = i._data(u[o], n + "queueHooks")) && f.empty && (s++, f.empty.add(e));
            return e(), h.promise(r)
        }
    });
    var d, nf, ri = /[\t\r\n]/g,
        te = /\r/g,
        ee = /^(?:input|select|textarea|button|object)$/i,
        le = /^(?:a|area)$/i,
        br = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        li = /^(?:checked|selected)$/i,
        l = i.support.getSetAttribute,
        oi = i.support.input;
    i.fn.extend({
        attr: function(n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        },
        prop: function(n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return n = i.propFix[n] || n, this.each(function() {
                try {
                    this[n] = t, delete this[n]
                } catch (n) {}
            })
        },
        addClass: function(n) {
            var e, t, r, f, o, u = 0,
                c = this.length,
                h = "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (h)
                for (e = (n || "").match(s) || []; u < c; u++)
                    if (t = this[u], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ri, " ") : " ")) {
                        for (o = 0; f = e[o++];) r.indexOf(" " + f + " ") < 0 && (r += f + " ");
                        t.className = i.trim(r)
                    }
            return this
        },
        removeClass: function(n) {
            var e, t, r, f, o, u = 0,
                c = this.length,
                h = 0 === arguments.length || "string" == typeof n && n;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (h)
                for (e = (n || "").match(s) || []; u < c; u++)
                    if (t = this[u], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ri, " ") : "")) {
                        for (o = 0; f = e[o++];)
                            for (; r.indexOf(" " + f + " ") >= 0;) r = r.replace(" " + f + " ", " ");
                        t.className = n ? i.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(n, t) {
            var r = typeof n,
                u = "boolean" == typeof t;
            return i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function() {
                if ("string" === r)
                    for (var f, l = 0, h = i(this), e = t, c = n.match(s) || []; f = c[l++];) h[(e = u ? e : !h.hasClass(f)) ? "addClass" : "removeClass"](f);
                else r !== o && "boolean" !== r || (this.className && i._data(this, "__className__", this.className), this.className = this.className || !1 === n ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function(n) {
            for (var r = " " + n + " ", t = 0, i = this.length; t < i; t++)
                if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ri, " ").indexOf(r) >= 0) return !0;
            return !1
        },
        val: function(n) {
            var u, r, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
                var f, o = i(this);
                1 === this.nodeType && (null == (f = e ? n.call(this, u, o.val()) : n) ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
                    return null == n ? "" : n + ""
                })), (r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in r && (u = r.get(f, "value")) !== t ? u : "string" == typeof(u = f.value) ? u.replace(te, "") : null == u ? "" : u : void 0
        }
    }), i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, f = "select-one" === n.type || r < 0, h = f ? null : [], s = f ? r + 1 : o.length, u = r < 0 ? s : f ? r : 0; u < s; u++)
                        if (((t = o[u]).selected || u === r) && (i.support.optDisabled ? !t.disabled : null === t.getAttribute("disabled")) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            h.push(e)
                        }
                    return h
                },
                set: function(n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function() {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attr: function(n, r, u) {
            var e, h, f, s = n.nodeType;
            if (n && 3 !== s && 8 !== s && 2 !== s) return typeof n.getAttribute === o ? i.prop(n, r, u) : ((h = 1 !== s || !i.isXMLDoc(n)) && (r = r.toLowerCase(), e = i.attrHooks[r] || (br.test(r) ? nf : d)), u === t ? e && h && "get" in e && null !== (f = e.get(n, r)) ? f : (typeof n.getAttribute !== o && (f = n.getAttribute(r)), null == f ? t : f) : null !== u ? e && h && "set" in e && (f = e.set(n, u, r)) !== t ? f : (n.setAttribute(r, u + ""), u) : void i.removeAttr(n, r))
        },
        removeAttr: function(n, t) {
            var r, u, e = 0,
                f = t && t.match(s);
            if (f && 1 === n.nodeType)
                for (; r = f[e++];) u = i.propFix[r] || r, br.test(r) ? !l && li.test(r) ? n[i.camelCase("default-" + r)] = n[u] = !1 : n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(l ? r : u)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(n, r, u) {
            var o, f, e = n.nodeType;
            if (n && 3 !== e && 8 !== e && 2 !== e) return (1 !== e || !i.isXMLDoc(n)) && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (o = f.set(n, u, r)) !== t ? o : n[r] = u : f && "get" in f && null !== (o = f.get(n, r)) ? o : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : ee.test(n.nodeName) || le.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    }), nf = {
        get: function(n, r) {
            var e = i.prop(n, r),
                f = "boolean" == typeof e && n.getAttribute(r),
                u = "boolean" == typeof e ? oi && l ? null != f : li.test(r) ? n[i.camelCase("default-" + r)] : !!f : n.getAttributeNode(r);
            return u && !1 !== u.value ? r.toLowerCase() : t
        },
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : oi && l || !li.test(r) ? n.setAttribute(!l && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
        }
    }, oi && l || (i.attrHooks.value = {
        get: function(n, r) {
            var u = n.getAttributeNode(r);
            return i.nodeName(n, "input") ? n.defaultValue : u && u.specified ? u.value : t
        },
        set: function(n, t, r) {
            if (!i.nodeName(n, "input")) return d && d.set(n, t, r);
            n.defaultValue = t
        }
    }), l || (d = i.valHooks.button = {
        get: function(n, i) {
            var r = n.getAttributeNode(i);
            return r && ("id" === i || "name" === i || "coords" === i ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(n, i, r) {
            var u = n.getAttributeNode(r);
            return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", "value" === r || i === n.getAttribute(r) ? i : t
        }
    }, i.attrHooks.contenteditable = {
        get: d.get,
        set: function(n, t, i) {
            d.set(n, "" !== t && t, i)
        }
    }, i.each(["width", "height"], function(n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function(n, i) {
                if ("" === i) return n.setAttribute(t, "auto"), i
            }
        })
    })), i.support.hrefNormalized || (i.each(["href", "src", "width", "height"], function(n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function(n) {
                var i = n.getAttribute(r, 2);
                return null == i ? t : i
            }
        })
    }), i.each(["href", "src"], function(n, t) {
        i.propHooks[t] = {
            get: function(n) {
                return n.getAttribute(t, 4)
            }
        }
    })), i.support.style || (i.attrHooks.style = {
        get: function(n) {
            return n.style.cssText || t
        },
        set: function(n, t) {
            return n.style.cssText = t + ""
        }
    }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function(n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            get: function(n) {
                return null === n.getAttribute("value") ? "on" : n.value
            }
        }
    }), i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function(n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var fi = /^(?:input|select|textarea)$/i,
        he = /^key/,
        ff = /^(?:mouse|contextmenu)|click/,
        ki = /^(?:focusinfocus|focusoutblur)$/,
        tr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
            global: {},
            add: function(n, r, u, f, e) {
                var d, p, k, b, c, a, l, v, h, w, g, y = i._data(n);
                if (y) {
                    for (u.handler && (u = (b = u).handler, e = b.selector), u.guid || (u.guid = i.guid++), (p = y.events) || (p = y.events = {}), (a = y.handle) || ((a = y.handle = function(n) {
                            return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(a.elem, arguments)
                        }).elem = n), k = (r = (r || "").match(s) || [""]).length; k--;) h = g = (d = tr.exec(r[k]) || [])[1], w = (d[2] || "").split(".").sort(), c = i.event.special[h] || {}, h = (e ? c.delegateType : c.bindType) || h, c = i.event.special[h] || {}, l = i.extend({
                        type: h,
                        origType: g,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: w.join(".")
                    }, b), (v = p[h]) || ((v = p[h] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(n, f, w, a) || (n.addEventListener ? n.addEventListener(h, a, !1) : n.attachEvent && n.attachEvent("on" + h, a))), c.add && (c.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, l) : v.push(l), i.event.global[h] = !0;
                    n = null
                }
            },
            remove: function(n, t, r, u, f) {
                var y, o, c, b, p, a, h, l, e, w, k, v = i.hasData(n) && i._data(n);
                if (v && (a = v.events)) {
                    for (p = (t = (t || "").match(s) || [""]).length; p--;)
                        if (c = tr.exec(t[p]) || [], e = k = c[1], w = (c[2] || "").split(".").sort(), e) {
                            for (h = i.event.special[e] || {}, l = a[e = (u ? h.delegateType : h.bindType) || e] || [], c = c[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || c && !c.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, h.remove && h.remove.call(n, o));
                            b && !l.length && (h.teardown && !1 !== h.teardown.call(n, w, v.handle) || i.removeEvent(n, e, v.handle), delete a[e])
                        } else
                            for (e in a) i.event.remove(n, e + t[p], r, u, !0);
                    i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
                }
            },
            trigger: function(u, f, e, o) {
                var v, a, h, p, c, l, w, b = [e || r],
                    s = rt.call(u, "type") ? u.type : u,
                    y = rt.call(u, "namespace") ? u.namespace.split(".") : [];
                if (h = l = e = e || r, 3 !== e.nodeType && 8 !== e.nodeType && !ki.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (s = (y = s.split(".")).shift(), y.sort()), a = s.indexOf(":") < 0 && "on" + s, u = u[i.expando] ? u : new i.Event(s, "object" == typeof u && u), u.isTrigger = !0, u.namespace = y.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = null == f ? [u] : i.makeArray(f, [u]), c = i.event.special[s] || {}, o || !c.trigger || !1 !== c.trigger.apply(e, f))) {
                    if (!o && !c.noBubble && !i.isWindow(e)) {
                        for (p = c.delegateType || s, ki.test(p + s) || (h = h.parentNode); h; h = h.parentNode) b.push(h), l = h;
                        l === (e.ownerDocument || r) && b.push(l.defaultView || l.parentWindow || n)
                    }
                    for (w = 0;
                        (h = b[w++]) && !u.isPropagationStopped();) u.type = w > 1 ? p : c.bindType || s, (v = (i._data(h, "events") || {})[u.type] && i._data(h, "handle")) && v.apply(h, f), (v = a && h[a]) && i.acceptData(h) && v.apply && !1 === v.apply(h, f) && u.preventDefault();
                    if (u.type = s, !o && !u.isDefaultPrevented() && (!c._default || !1 === c._default.apply(e.ownerDocument, f)) && ("click" !== s || !i.nodeName(e, "a")) && i.acceptData(e) && a && e[s] && !i.isWindow(e)) {
                        (l = e[a]) && (e[a] = null), i.event.triggered = s;
                        try {
                            e[s]()
                        } catch (n) {}
                        i.event.triggered = t, l && (e[a] = l)
                    }
                    return u.result
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var o, h, r, f, c, s = [],
                    e = a.call(arguments),
                    l = (i._data(this, "events") || {})[n.type] || [],
                    u = i.event.special[n.type] || {};
                if (e[0] = n, n.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, n)) {
                    for (s = i.event.handlers.call(this, n, l), o = 0;
                        (f = s[o++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = f.elem, c = 0;
                            (r = f.handlers[c++]) && !n.isImmediatePropagationStopped();) n.namespace_re && !n.namespace_re.test(r.namespace) || (n.handleObj = r, n.data = r.data, (h = ((i.event.special[r.origType] || {}).handle || r.handler).apply(f.elem, e)) !== t && !1 === (n.result = h) && (n.preventDefault(), n.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, r) {
                var e, h, f, s, c = [],
                    o = r.delegateCount,
                    u = n.target;
                if (o && u.nodeType && (!n.button || "click" !== n.type))
                    for (; u != this; u = u.parentNode || this)
                        if (1 === u.nodeType && (!0 !== u.disabled || "click" !== n.type)) {
                            for (f = [], s = 0; s < o; s++) f[e = (h = r[s]).selector + " "] === t && (f[e] = h.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length), f[e] && f.push(h);
                            f.length && c.push({
                                elem: u,
                                handlers: f
                            })
                        }
                return o < r.length && c.push({
                    elem: this,
                    handlers: r.slice(o)
                }), c
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var o, s, e, f = n.type,
                    u = n,
                    t = this.fixHooks[f];
                for (t || (this.fixHooks[f] = t = ff.test(f) ? this.mouseHooks : he.test(f) ? this.keyHooks : {}), e = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(u), o = e.length; o--;) n[s = e[o]] = u[s];
                return n.target || (n.target = u.srcElement || r), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, u) : n
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, i) {
                    var f, s, u, e = i.button,
                        o = i.fromElement;
                    return null == n.pageX && null != i.clientX && (u = (s = n.target.ownerDocument || r).documentElement, f = s.body, n.pageX = i.clientX + (u && u.scrollLeft || f && f.scrollLeft || 0) - (u && u.clientLeft || f && f.clientLeft || 0), n.pageY = i.clientY + (u && u.scrollTop || f && f.scrollTop || 0) - (u && u.clientTop || f && f.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? i.toElement : o), n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), n
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        if (i.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== r.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (n) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === r.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(n) {
                        n.result !== t && (n.originalEvent.returnValue = n.result)
                    }
                }
            },
            simulate: function(n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
            }
        }, i.removeEvent = r.removeEventListener ? function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        } : function(n, t, i) {
            var r = "on" + t;
            n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
        }, i.Event = function(n, t) {
            if (!(this instanceof i.Event)) return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || !1 === n.returnValue || n.getPreventDefault && n.getPreventDefault() ? ht : g) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0
        }, i.Event.prototype = {
            isDefaultPrevented: g,
            isPropagationStopped: g,
            isImmediatePropagationStopped: g,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = ht, n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = ht, n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = ht, this.stopPropagation()
            }
        }, i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var f, r = n.relatedTarget,
                        u = n.handleObj;
                    return r && (r === this || i.contains(this, r)) || (n.type = u.origType, f = u.handler.apply(this, arguments), n.type = t), f
                }
            }
        }), i.support.submitBubbles || (i.event.special.submit = {
            setup: function() {
                if (i.nodeName(this, "form")) return !1;
                i.event.add(this, "click._submit keypress._submit", function(n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
                        n._submit_bubble = !0
                    }), i._data(r, "submitBubbles", !0))
                })
            },
            postDispatch: function(n) {
                n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
            },
            teardown: function() {
                if (i.nodeName(this, "form")) return !1;
                i.event.remove(this, "._submit")
            }
        }), i.support.changeBubbles || (i.event.special.change = {
            setup: function() {
                if (fi.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (i.event.add(this, "propertychange._change", function(n) {
                    "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
                }), i.event.add(this, "click._change", function(n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, n, !0)
                })), !1;
                i.event.add(this, "beforeactivate._change", function(n) {
                    var t = n.target;
                    fi.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
                        !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                    }), i._data(t, "changeBubbles", !0))
                })
            },
            handle: function(n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return n.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return i.event.remove(this, "._change"), !fi.test(this.nodeName)
            }
        }), i.support.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var f = 0,
                u = function(n) {
                    i.event.simulate(t, n.target, i.event.fix(n), !0)
                };
            i.event.special[t] = {
                setup: function() {
                    0 == f++ && r.addEventListener(n, u, !0)
                },
                teardown: function() {
                    0 == --f && r.removeEventListener(n, u, !0)
                }
            }
        }), i.fn.extend({
            on: function(n, r, u, f, e) {
                var s, o;
                if ("object" == typeof n) {
                    "string" != typeof r && (u = u || r, r = t);
                    for (s in n) this.on(s, r, u, n[s], e);
                    return this
                }
                if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), !1 === f) f = g;
                else if (!f) return this;
                return 1 === e && (o = f, (f = function(n) {
                    return i().off(n), o.apply(this, arguments)
                }).guid = o.guid || (o.guid = i.guid++)), this.each(function() {
                    i.event.add(this, n, f, u, r)
                })
            },
            one: function(n, t, i, r) {
                return this.on(n, t, i, r, 1)
            },
            off: function(n, r, u) {
                var f, e;
                if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                if ("object" == typeof n) {
                    for (e in n) this.off(e, r, n[e]);
                    return this
                }
                return !1 !== r && "function" != typeof r || (u = r, r = t), !1 === u && (u = g), this.each(function() {
                    i.event.remove(this, n, u, r)
                })
            },
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
            },
            trigger: function(n, t) {
                return this.each(function() {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function(n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0)
            }
        }),
        function(n) {
            function ii(n) {
                return nr.test(n + "")
            }

            function dt() {
                var n, t = [];
                return n = function(i, u) {
                    return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u
                }
            }

            function l(n) {
                return n[f] = !0, n
            }

            function w(n) {
                var t = s.createElement("div");
                try {
                    return n(t)
                } catch (n) {
                    return !1
                } finally {
                    t = null
                }
            }

            function u(n, t, i, u) {
                var nt, e, h, w, g, v, d, l, tt, b;
                if ((t ? t.ownerDocument || t : k) !== s && it(t), t = t || s, i = i || [], !n || "string" != typeof n) return i;
                if (1 !== (w = t.nodeType) && 9 !== w) return [];
                if (!c && !u) {
                    if (nt = bi.exec(n))
                        if (h = nt[1]) {
                            if (9 === w) {
                                if (!(e = t.getElementById(h)) || !e.parentNode) return i;
                                if (e.id === h) return i.push(e), i
                            } else if (t.ownerDocument && (e = t.ownerDocument.getElementById(h)) && ft(t, e) && e.id === h) return i.push(e), i
                        } else {
                            if (nt[2]) return ut.apply(i, rt.call(t.getElementsByTagName(n), 0)), i;
                            if ((h = nt[3]) && o.getByClassName && t.getElementsByClassName) return ut.apply(i, rt.call(t.getElementsByClassName(h), 0)), i
                        }
                    if (o.qsa && !a.test(n)) {
                        if (d = !0, l = f, tt = t, b = 9 === w && n, 1 === w && "object" !== t.nodeName.toLowerCase()) {
                            for (v = pt(n), (d = t.getAttribute("id")) ? l = d.replace(gi, "\\$&") : t.setAttribute("id", l), l = "[id='" + l + "'] ", g = v.length; g--;) v[g] = l + yt(v[g]);
                            tt = bt.test(n) && t.parentNode || t, b = v.join(",")
                        }
                        if (b) try {
                            return ut.apply(i, rt.call(tt.querySelectorAll(b), 0)), i
                        } catch (n) {} finally {
                            d || t.removeAttribute("id")
                        }
                    }
                }
                return function(n, t, i, u) {
                    var s, f, e, h, l, o = pt(n);
                    if (!u && 1 === o.length) {
                        if ((f = o[0] = o[0].slice(0)).length > 2 && "ID" === (e = f[0]).type && 9 === t.nodeType && !c && r.relative[f[1].type]) {
                            if (!(t = r.find.ID(e.matches[0].replace(p, y), t)[0])) return i;
                            n = n.slice(f.shift().value.length)
                        }
                        for (s = et.needsContext.test(n) ? 0 : f.length; s-- && (e = f[s], !r.relative[h = e.type]);)
                            if ((l = r.find[h]) && (u = l(e.matches[0].replace(p, y), bt.test(f[0].type) && t.parentNode || t))) {
                                if (f.splice(s, 1), !(n = u.length && yt(f))) return ut.apply(i, rt.call(u, 0)), i;
                                break
                            }
                    }
                    return ri(n, o)(u, t, c, i, bt.test(n)), i
                }(n.replace(ct, "$1"), t, i, u)
            }

            function oi(n, t) {
                var i = t && n,
                    r = i && (~t.sourceIndex || ai) - (~n.sourceIndex || ai);
                if (r) return r;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function rr(n) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === n
                }
            }

            function fr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === n
                }
            }

            function b(n) {
                return l(function(t) {
                    return t = +t, l(function(i, r) {
                        for (var u, e = n([], i.length, t), f = e.length; f--;) i[u = e[f]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function pt(n, t) {
                var e, f, c, o, i, h, s, l = si[n + " "];
                if (l) return t ? 0 : l.slice(0);
                for (i = n, h = [], s = r.preFilter; i;) {
                    (!e || (f = ki.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(c = [])), e = !1, (f = tr.exec(i)) && (e = f.shift(), c.push({
                        value: e,
                        type: f[0].replace(ct, " ")
                    }), i = i.slice(e.length));
                    for (o in r.filter)(f = et[o].exec(i)) && (!s[o] || (f = s[o](f))) && (e = f.shift(), c.push({
                        value: e,
                        type: o,
                        matches: f
                    }), i = i.slice(e.length));
                    if (!e) break
                }
                return t ? i.length : i ? u.error(n) : si(n, h).slice(0)
            }

            function yt(n) {
                for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
                return i
            }

            function fi(n, t, i) {
                var r = t.dir,
                    u = i && "parentNode" === r,
                    e = er++;
                return t.first ? function(t, i, f) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || u) return n(t, i, f)
                } : function(t, i, o) {
                    var c, s, h, l = v + " " + e;
                    if (o) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || u) && n(t, i, o)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || u)
                                if (h = t[f] || (t[f] = {}), (s = h[r]) && s[0] === l) {
                                    if (!0 === (c = s[1]) || c === at) return !0 === c
                                } else if (s = h[r] = [l], s[1] = n(t, i, o) || at, !0 === s[1]) return !0
                }
            }

            function kt(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function ht(n, t, i, r, u) {
                for (var e, o = [], f = 0, h = n.length, s = null != t; f < h; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), s && t.push(f)));
                return o
            }

            function ni(n, t, i, r, e, o) {
                return r && !r[f] && (r = ni(r)), e && !e[f] && (e = ni(e, o)), l(function(f, o, s, h) {
                    var a, l, v, w = [],
                        p = [],
                        b = o.length,
                        k = f || function(n, t, i) {
                            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                            return i
                        }(t || "*", s.nodeType ? [s] : s, []),
                        y = !n || !f && t ? k : ht(k, w, n, s, h),
                        c = i ? e || (f ? n : b || r) ? [] : o : y;
                    if (i && i(y, c, s, h), r)
                        for (a = ht(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                    if (f) {
                        if (e || n) {
                            if (e) {
                                for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                                e(null, c = [], a, h)
                            }
                            for (l = c.length; l--;)(v = c[l]) && (a = e ? wt.call(f, v) : w[l]) > -1 && (f[a] = !(o[a] = v))
                        }
                    } else c = ht(c === o ? c.splice(b, c.length) : c), e ? e(null, o, c, h) : ut.apply(o, c)
                })
            }

            function gt(n) {
                for (var h, e, i, o = n.length, s = r.relative[n[0].type], c = s || r.relative[" "], t = s ? 1 : 0, l = fi(function(n) {
                        return n === h
                    }, c, !0), a = fi(function(n) {
                        return wt.call(h, n) > -1
                    }, c, !0), u = [function(n, t, i) {
                        return !s && (i || t !== lt) || ((h = t).nodeType ? l(n, t, i) : a(n, t, i))
                    }]; t < o; t++)
                    if (e = r.relative[n[t].type]) u = [fi(kt(u), e)];
                    else {
                        if ((e = r.filter[n[t].type].apply(null, n[t].matches))[f]) {
                            for (i = ++t; i < o && !r.relative[n[i].type]; i++);
                            return ni(t > 1 && kt(u), t > 1 && yt(n.slice(0, t - 1)).replace(ct, "$1"), e, t < i && gt(n.slice(t, i)), i < o && gt(n = n.slice(i)), i < o && yt(n))
                        }
                        u.push(e)
                    }
                return kt(u)
            }

            function ci() {}
            var tt, at, r, vt, li, ri, nt, lt, it, s, h, c, a, g, st, ft, ui, f = "sizzle" + -new Date,
                k = n.document,
                o = {},
                v = 0,
                er = 0,
                yi = dt(),
                si = dt(),
                vi = dt(),
                ai = -2147483648,
                ot = [],
                ir = ot.pop,
                ut = ot.push,
                rt = ot.slice,
                wt = ot.indexOf || function(n) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (this[t] === n) return t;
                    return -1
                },
                e = "[\\x20\\t\\r\\n\\f]",
                d = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ei = d.replace("w", "w#"),
                hi = "\\[" + e + "*(" + d + ")" + e + "*(?:([*^$|!~]?=)" + e + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ei + ")|)|)" + e + "*\\]",
                ti = ":(" + d + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + hi.replace(3, 8) + ")*)|.*)\\)|)",
                ct = new RegExp("^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$", "g"),
                ki = new RegExp("^" + e + "*," + e + "*"),
                tr = new RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"),
                ur = new RegExp(ti),
                or = new RegExp("^" + ei + "$"),
                et = {
                    ID: new RegExp("^#(" + d + ")"),
                    CLASS: new RegExp("^\\.(" + d + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + d + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + d.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + hi),
                    PSEUDO: new RegExp("^" + ti),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + e + "*(even|odd|(([+-]|)(\\d*)n|)" + e + "*(?:([+-]|)" + e + "*(\\d+)|))" + e + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + e + "*((?:-\\d)?\\d*)" + e + "*\\)|)(?=[^-]|$)", "i")
                },
                bt = /[\x20\t\r\n\f]*[+~]/,
                nr = /^[^{]+\{\s*\[native code/,
                bi = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                wi = /^(?:input|select|textarea|button)$/i,
                pi = /^h\d$/i,
                gi = /'|\\/g,
                di = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                y = function(n, t) {
                    var i = "0x" + t - 65536;
                    return i != i ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                rt.call(k.documentElement.childNodes, 0)[0].nodeType
            } catch (n) {
                rt = function(n) {
                    for (var i, t = []; i = this[n++];) t.push(i);
                    return t
                }
            }
            li = u.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, it = u.setDocument = function(n) {
                var t = n ? n.ownerDocument || n : k;
                return t !== s && 9 === t.nodeType && t.documentElement ? (s = t, h = t.documentElement, c = li(t), o.tagNameNoComments = w(function(n) {
                    return n.appendChild(t.createComment("")), !n.getElementsByTagName("*").length
                }), o.attributes = w(function(n) {
                    n.innerHTML = "<select><\/select>";
                    var t = typeof n.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), o.getByClassName = w(function(n) {
                    return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", !(!n.getElementsByClassName || !n.getElementsByClassName("e").length) && (n.lastChild.className = "e", 2 === n.getElementsByClassName("e").length)
                }), o.getByName = w(function(n) {
                    n.id = f + 0, n.innerHTML = "<a name='" + f + "'><\/a><div name='" + f + "'><\/div>", h.insertBefore(n, h.firstChild);
                    var i = t.getElementsByName && t.getElementsByName(f).length === 2 + t.getElementsByName(f + 0).length;
                    return o.getIdNotName = !t.getElementById(f), h.removeChild(n), i
                }), r.attrHandle = w(function(n) {
                    return n.innerHTML = "<a href='#'><\/a>", n.firstChild && void 0 !== n.firstChild.getAttribute && "#" === n.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(n) {
                        return n.getAttribute("href", 2)
                    },
                    type: function(n) {
                        return n.getAttribute("type")
                    }
                }, o.getIdNotName ? (r.find.ID = function(n, t) {
                    if (void 0 !== t.getElementById && !c) {
                        var i = t.getElementById(n);
                        return i && i.parentNode ? [i] : []
                    }
                }, r.filter.ID = function(n) {
                    var t = n.replace(p, y);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }) : (r.find.ID = function(n, t) {
                    if (void 0 !== t.getElementById && !c) {
                        var i = t.getElementById(n);
                        return i ? i.id === n || void 0 !== i.getAttributeNode && i.getAttributeNode("id").value === n ? [i] : void 0 : []
                    }
                }, r.filter.ID = function(n) {
                    var t = n.replace(p, y);
                    return function(n) {
                        var i = void 0 !== n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), r.find.TAG = o.tagNameNoComments ? function(n, t) {
                    if (void 0 !== t.getElementsByTagName) return t.getElementsByTagName(n)
                } : function(n, t) {
                    var i, u = [],
                        f = 0,
                        r = t.getElementsByTagName(n);
                    if ("*" === n) {
                        for (; i = r[f++];) 1 === i.nodeType && u.push(i);
                        return u
                    }
                    return r
                }, r.find.NAME = o.getByName && function(n, t) {
                    if (void 0 !== t.getElementsByName) return t.getElementsByName(name)
                }, r.find.CLASS = o.getByClassName && function(n, t) {
                    if (void 0 !== t.getElementsByClassName && !c) return t.getElementsByClassName(n)
                }, g = [], a = [":focus"], (o.qsa = ii(t.querySelectorAll)) && (w(function(n) {
                    n.innerHTML = "<select><option selected=''><\/option><\/select>", n.querySelectorAll("[selected]").length || a.push("\\[" + e + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), n.querySelectorAll(":checked").length || a.push(":checked")
                }), w(function(n) {
                    n.innerHTML = "<input type='hidden' i=''/>", n.querySelectorAll("[i^='']").length && a.push("[*^$]=" + e + "*(?:\"\"|'')"), n.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled"), n.querySelectorAll("*,:x"), a.push(",.*:")
                })), (o.matchesSelector = ii(st = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && w(function(n) {
                    o.disconnectedMatch = st.call(n, "div"), st.call(n, "[s!='']:x"), g.push("!=", ti)
                }), a = new RegExp(a.join("|")), g = new RegExp(g.join("|")), ft = ii(h.contains) || h.compareDocumentPosition ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === n) return !0;
                    return !1
                }, ui = h.compareDocumentPosition ? function(n, i) {
                    var r;
                    return n === i ? (nt = !0, 0) : (r = i.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(i)) ? 1 & r || n.parentNode && 11 === n.parentNode.nodeType ? n === t || ft(k, n) ? -1 : i === t || ft(k, i) ? 1 : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
                } : function(n, i) {
                    var u, r = 0,
                        s = n.parentNode,
                        o = i.parentNode,
                        f = [n],
                        e = [i];
                    if (n === i) return nt = !0, 0;
                    if (!s || !o) return n === t ? -1 : i === t ? 1 : s ? -1 : o ? 1 : 0;
                    if (s === o) return oi(n, i);
                    for (u = n; u = u.parentNode;) f.unshift(u);
                    for (u = i; u = u.parentNode;) e.unshift(u);
                    for (; f[r] === e[r];) r++;
                    return r ? oi(f[r], e[r]) : f[r] === k ? -1 : e[r] === k ? 1 : 0
                }, nt = !1, [0, 0].sort(ui), o.detectDuplicates = nt, s) : s
            }, u.matches = function(n, t) {
                return u(n, null, null, t)
            }, u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== s && it(n), t = t.replace(di, "='$1']"), o.matchesSelector && !c && (!g || !g.test(t)) && !a.test(t)) try {
                    var i = st.call(n, t);
                    if (i || o.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
                } catch (n) {}
                return u(t, s, null, [n]).length > 0
            }, u.contains = function(n, t) {
                return (n.ownerDocument || n) !== s && it(n), ft(n, t)
            }, u.attr = function(n, t) {
                var i;
                return (n.ownerDocument || n) !== s && it(n), c || (t = t.toLowerCase()), (i = r.attrHandle[t]) ? i(n) : c || o.attributes ? n.getAttribute(t) : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) && !0 === n[t] ? t : i && i.specified ? i.value : null
            }, u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, u.uniqueSort = function(n) {
                var u, r = [],
                    t = 1,
                    i = 0;
                if (nt = !o.detectDuplicates, n.sort(ui), nt) {
                    for (; u = n[t]; t++) u === n[t - 1] && (i = r.push(t));
                    for (; i--;) n.splice(r[i], 1)
                }
                return n
            }, vt = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += vt(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    for (; r = n[u]; u++) i += vt(r);
                return i
            }, r = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: et,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(p, y), n[3] = (n[4] || n[5] || "").replace(p, y), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[5] && n[2];
                        return et.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && ur.test(t) && (i = pt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        return "*" === n ? function() {
                            return !0
                        } : (n = n.replace(p, y).toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === n
                        })
                    },
                    CLASS: function(n) {
                        var t = yi[n + " "];
                        return t || (t = new RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) && yi(n, function(n) {
                            return t.test(n.className || void 0 !== n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var y, d, c, l, a, b, w = s !== o ? "nextSibling" : "previousSibling",
                                p = t.parentNode,
                                g = e && t.nodeName.toLowerCase(),
                                k = !h && !e;
                            if (p) {
                                if (s) {
                                    for (; w;) {
                                        for (c = t; c = c[w];)
                                            if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                        b = w = "only" === n && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? p.firstChild : p.lastChild], o && k) {
                                    for (a = (y = (d = p[f] || (p[f] = {}))[n] || [])[0] === v && y[1], l = y[0] === v && y[2], c = a && p.childNodes[a]; c = ++a && c && c[w] || (l = a = 0) || b.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            d[n] = [v, a, l];
                                            break
                                        }
                                } else if (k && (y = (t[f] || (t[f] = {}))[n]) && y[0] === v) l = y[1];
                                else
                                    for (;
                                        (c = ++a && c && c[w] || (l = a = 0) || b.pop()) && ((e ? c.nodeName.toLowerCase() !== g : 1 !== c.nodeType) || !++l || (k && ((c[f] || (c[f] = {}))[n] = [v, l]), c !== t)););
                                return (l -= u) === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, t) {
                        var e, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return i[f] ? i(t) : i.length > 1 ? (e = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, r) {
                            for (var e, u = i(n, t), f = u.length; f--;) n[e = wt.call(n, u[f])] = !(r[e] = u[f])
                        }) : function(n) {
                            return i(n, 0, e)
                        }) : i
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var i = [],
                            r = [],
                            t = ri(n.replace(ct, "$1"));
                        return t[f] ? l(function(n, i, r, u) {
                            for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                        }) : function(n, u, f) {
                            return i[0] = n, t(i, null, f, r), !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return u(n, t).length > 0
                        }
                    }),
                    contains: l(function(n) {
                        return function(t) {
                            return (t.textContent || t.innerText || vt(t)).indexOf(n) > -1
                        }
                    }),
                    lang: l(function(n) {
                        return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(p, y).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = c ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === h
                    },
                    focus: function(n) {
                        return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) {
                        return !1 === n.disabled
                    },
                    disabled: function(n) {
                        return !0 === n.disabled
                    },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !r.pseudos.empty(n)
                    },
                    header: function(n) {
                        return pi.test(n.nodeName)
                    },
                    input: function(n) {
                        return wi.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
                    },
                    first: b(function() {
                        return [0]
                    }),
                    last: b(function(n, t) {
                        return [t - 1]
                    }),
                    eq: b(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: b(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: b(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: b(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: b(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            for (tt in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[tt] = rr(tt);
            for (tt in {
                    submit: !0,
                    reset: !0
                }) r.pseudos[tt] = fr(tt);
            ri = u.compile = function(n, t) {
                var e, o = [],
                    h = [],
                    i = vi[n + " "];
                if (!i) {
                    for (t || (t = pt(n)), e = t.length; e--;)(i = gt(t[e]))[f] ? o.push(i) : h.push(i);
                    i = vi(n, function(n, t) {
                        var o = 0,
                            i = t.length > 0,
                            e = n.length > 0,
                            f = function(f, h, c, l, a) {
                                var w, nt, k, p = [],
                                    b = 0,
                                    y = "0",
                                    g = f && [],
                                    d = null != a,
                                    it = lt,
                                    rt = f || e && r.find.TAG("*", a && h.parentNode || h),
                                    tt = v += null == it ? 1 : Math.random() || .1;
                                for (d && (lt = h !== s && h, at = o); null != (w = rt[y]); y++) {
                                    if (e && w) {
                                        for (nt = 0; k = n[nt++];)
                                            if (k(w, h, c)) {
                                                l.push(w);
                                                break
                                            }
                                        d && (v = tt, at = ++o)
                                    }
                                    i && ((w = !k && w) && b--, f && g.push(w))
                                }
                                if (b += y, i && y !== b) {
                                    for (nt = 0; k = t[nt++];) k(g, p, h, c);
                                    if (f) {
                                        if (b > 0)
                                            for (; y--;) g[y] || p[y] || (p[y] = ir.call(l));
                                        p = ht(p)
                                    }
                                    ut.apply(l, p), d && !f && p.length > 0 && b + t.length > 1 && u.uniqueSort(l)
                                }
                                return d && (v = tt, lt = it), g
                            };
                        return i ? l(f) : f
                    }(h, o))
                }
                return i
            }, r.pseudos.nth = r.pseudos.eq, r.filters = ci.prototype = r.pseudos, r.setFilters = new ci, it(), u.attr = i.attr, i.find = u, i.expr = u.selectors, i.expr[":"] = i.expr.pseudos, i.unique = u.uniqueSort, i.text = u.getText, i.isXMLDoc = u.isXML, i.contains = u.contains
        }(n);
    var se = /Until$/,
        oe = /^(?:parents|prev(?:Until|All))/,
        ce = /^.[^:#\[\.,]*$/,
        nr = i.expr.match.needsContext,
        ve = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function(n) {
            var t, r, f, u = this.length;
            if ("string" != typeof n) return f = this, this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = [], t = 0; t < u; t++) i.find(n, this[t], r);
            return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = (this.selector ? this.selector + " " : "") + n, r
        },
        has: function(n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        not: function(n) {
            return this.pushStack(pr(this, n, !1))
        },
        filter: function(n) {
            return this.pushStack(pr(this, n, !0))
        },
        is: function(n) {
            return !!n && ("string" == typeof n ? nr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function(n, t) {
            for (var r, f = 0, o = this.length, u = [], e = nr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r.ownerDocument && r !== t && 11 !== r.nodeType;) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break
                    }
                    r = r.parentNode
                }
            return this.pushStack(u.length > 1 ? i.unique(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            var u = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(i.unique(r))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    }), i.fn.andSelf = i.fn.addBack, i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function(n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function(n) {
            return wr(n, "nextSibling")
        },
        prev: function(n) {
            return wr(n, "previousSibling")
        },
        nextAll: function(n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function(n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function(n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function(n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function(n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return i.sibling(n.firstChild)
        },
        contents: function(n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return se.test(n) || (u = r), u && "string" == typeof u && (f = i.filter(u, f)), f = this.length > 1 && !ve[n] ? i.unique(f) : f, this.length > 1 && oe.test(n) && (f = f.reverse()), this.pushStack(f)
        }
    }), i.extend({
        filter: function(n, t, r) {
            return r && (n = ":not(" + n + ")"), 1 === t.length ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function(n, r, u) {
            for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u));) 1 === f.nodeType && e.push(f), f = f[r];
            return e
        },
        sibling: function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        }
    });
    var pi = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ae = / jQuery\d+="(?:null|\d+)"/g,
        wi = new RegExp("<(?:" + pi + ")[\\s/>]", "i"),
        bt = /^\s+/,
        gi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        di = /<([\w:]+)/,
        ir = /<tbody/i,
        ne = /<|&#?\w+;/,
        gf = /<(?:script|style|link)/i,
        ti = /^(?:checkbox|radio)$/i,
        ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bi = /^$|\/(?:java|ecma)script/i,
        fe = /^true\/(.*)/,
        ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        f = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            legend: [1, "<fieldset>", "<\/fieldset>"],
            area: [1, "<map>", "<\/map>"],
            param: [1, "<object>", "<\/object>"],
            thead: [1, "<table>", "<\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
        },
        ai = rr(r).appendChild(r.createElement("div"));
    f.optgroup = f.option, f.tbody = f.tfoot = f.colgroup = f.caption = f.thead, f.th = f.td, i.fn.extend({
        text: function(n) {
            return i.access(this, function(n) {
                return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
            }, null, n, arguments.length)
        },
        wrapAll: function(n) {
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).wrapAll(n.call(this, t))
            });
            if (this[0]) {
                var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
                    return n
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var r = i(this),
                    t = r.contents();
                t.length ? t.wrapAll(n) : r.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(n)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(n, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        remove: function(n, t) {
            for (var r, f = 0; null != (r = this[f]); f++)(!n || i.filter(n, [r]).length > 0) && (t || 1 !== r.nodeType || i.cleanData(u(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && ni(u(r, "script")), r.parentNode.removeChild(r)));
            return this
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) {
                for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
                n.options && i.nodeName(n, "select") && (n.options.length = 0)
            }
            return this
        },
        clone: function(n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return i.access(this, function(n) {
                var r = this[0] || {},
                    e = 0,
                    o = this.length;
                if (n === t) return 1 === r.nodeType ? r.innerHTML.replace(ae, "") : t;
                if ("string" == typeof n && !gf.test(n) && (i.support.htmlSerialize || !wi.test(n)) && (i.support.leadingWhitespace || !bt.test(n)) && !f[(di.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = n.replace(gi, "<$1><\/$2>");
                    try {
                        for (; e < o; e++) 1 === (r = this[e] || {}).nodeType && (i.cleanData(u(r, !1)), r.innerHTML = n);
                        r = 0
                    } catch (n) {}
                }
                r && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function(n) {
            return i.isFunction(n) || "string" == typeof n || (n = i(n).not(this).detach()), this.domManip([n], !0, function(n) {
                var r = this.nextSibling,
                    t = this.parentNode;
                t && (i(this).remove(), t.insertBefore(n, r))
            })
        },
        detach: function(n) {
            return this.remove(n, !0)
        },
        domManip: function(n, r, f) {
            n = cu.apply([], n);
            var c, e, v, h, p, s, o = 0,
                l = this.length,
                b = this,
                w = l - 1,
                a = n[0],
                y = i.isFunction(a);
            if (y || !(l <= 1 || "string" != typeof a || i.support.checkClone) && ie.test(a)) return this.each(function(i) {
                var u = b.eq(i);
                y && (n[0] = a.call(this, i, r ? u.html() : t)), u.domManip(n, r, f)
            });
            if (l && (s = i.buildFragment(n, this[0].ownerDocument, !1, this), c = s.firstChild, 1 === s.childNodes.length && (s = c), c)) {
                for (r = r && i.nodeName(c, "tr"), v = (h = i.map(u(s, "script"), wu)).length; o < l; o++) e = s, o !== w && (e = i.clone(e, !0, !0), v && i.merge(h, u(e, "script"))), f.call(r && i.nodeName(this[o], "table") ? function(n, t) {
                    return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
                }(this[o], "tbody") : this[o], e, o);
                if (v)
                    for (p = h[h.length - 1].ownerDocument, i.map(h, yu), o = 0; o < v; o++) e = h[o], bi.test(e.type || "") && !i._data(e, "globalEval") && i.contains(p, e) && (e.src ? i.ajax({
                        url: e.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : i.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ue, "")));
                s = c = null
            }
            return this
        }
    }), i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, r = 0, o = [], e = i(n), f = e.length - 1; r <= f; r++) u = r === f ? this : this.clone(!0), i(e[r])[t](u), kt.apply(o, u.get());
            return this.pushStack(o)
        }
    }), i.extend({
        clone: function(n, t, r) {
            var e, h, o, f, s, c = i.contains(n.ownerDocument, n);
            if (i.support.html5Clone || i.isXMLDoc(n) || !wi.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (ai.innerHTML = n.outerHTML, ai.removeChild(o = ai.firstChild)), !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (e = u(o), s = u(n), f = 0; null != (h = s[f]); ++f) e[f] && ge(h, e[f]);
            if (t)
                if (r)
                    for (s = s || u(n), e = e || u(o), f = 0; null != (h = s[f]); f++) lu(h, e[f]);
                else lu(n, o);
            return (e = u(o, "script")).length > 0 && ni(e, !c && u(n, "script")), e = s = h = null, o
        },
        buildFragment: function(n, t, r, e) {
            for (var h, o, w, s, y, p, v, b = n.length, a = rr(t), c = [], l = 0; l < b; l++)
                if ((o = n[l]) || 0 === o)
                    if ("object" === i.type(o)) i.merge(c, o.nodeType ? [o] : o);
                    else if (ne.test(o)) {
                for (s = s || a.appendChild(t.createElement("div")), y = (di.exec(o) || ["", ""])[1].toLowerCase(), v = f[y] || f._default, s.innerHTML = v[1] + o.replace(gi, "<$1><\/$2>") + v[2], h = v[0]; h--;) s = s.lastChild;
                if (!i.support.leadingWhitespace && bt.test(o) && c.push(t.createTextNode(bt.exec(o)[0])), !i.support.tbody)
                    for (h = (o = "table" !== y || ir.test(o) ? "<table>" !== v[1] || ir.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
                for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = a.lastChild
            } else c.push(t.createTextNode(o));
            for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), of), l = 0; o = c[l++];)
                if ((!e || -1 === i.inArray(o, e)) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && ni(s), r))
                    for (h = 0; o = s[h++];) bi.test(o.type || "") && r.push(o);
            return s = null, a
        },
        cleanData: function(n, t) {
            for (var r, s, u, e, c = 0, f = i.expando, h = i.cache, a = i.support.deleteExpando, l = i.event.special; null != (r = n[c]); c++)
                if ((t || i.acceptData(r)) && (u = r[f], e = u && h[u])) {
                    if (e.events)
                        for (s in e.events) l[s] ? i.event.remove(r, s) : i.removeEvent(r, s, e.handle);
                    h[u] && (delete h[u], a ? delete r[f] : typeof r.removeAttribute !== o ? r.removeAttribute(f) : r[f] = null, k.push(u))
                }
        }
    });
    var lt, y, p, gt = /alpha\([^)]*\)/i,
        fo = /opacity\s*=\s*([^)]*)/,
        so = /^(top|right|bottom|left)$/,
        oo = /^(none|table(?!-c[ea]).+)/,
        vr = /^margin/,
        to = new RegExp("^(" + vt + ")(.*)$", "i"),
        ot = new RegExp("^(" + vt + ")(?!px)[a-z%]+$", "i"),
        we = new RegExp("^([+-])=(" + vt + ")", "i"),
        yr = {
            BODY: "block"
        },
        pe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dr = {
            letterSpacing: 0,
            fontWeight: 400
        },
        c = ["Top", "Right", "Bottom", "Left"],
        gr = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
        css: function(n, r) {
            return i.access(this, function(n, r, u) {
                var e, s, o = {},
                    f = 0;
                if (i.isArray(r)) {
                    for (s = y(n), e = r.length; f < e; f++) o[r[f]] = i.css(n, r[f], !1, s);
                    return o
                }
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function() {
            return vu(this, !0)
        },
        hide: function() {
            return vu(this)
        },
        toggle: function(n) {
            var t = "boolean" == typeof n;
            return this.each(function() {
                (t ? n : ut(this)) ? i(this).show(): i(this).hide()
            })
        }
    }), i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = p(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(n, r, u, f) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var s, c, e, o = i.camelCase(r),
                    h = n.style;
                if (r = i.cssProps[o] || (i.cssProps[o] = hu(h, o)), e = i.cssHooks[r] || i.cssHooks[o], u === t) return e && "get" in e && (s = e.get(n, !1, f)) !== t ? s : h[r];
                if (!("string" == (c = typeof u) && (s = we.exec(u)) && (u = (s[1] + 1) * s[2] + parseFloat(i.css(n, r)), c = "number"), null == u || "number" === c && isNaN(u) || ("number" !== c || i.cssNumber[o] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (h[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t))) try {
                    h[r] = u
                } catch (n) {}
            }
        },
        css: function(n, r, u, f) {
            var s, e, h, o = i.camelCase(r);
            return r = i.cssProps[o] || (i.cssProps[o] = hu(n.style, o)), (h = i.cssHooks[r] || i.cssHooks[o]) && "get" in h && (e = h.get(n, !0, u)), e === t && (e = p(n, r, f)), "normal" === e && r in dr && (e = dr[r]), "" === u || u ? (s = parseFloat(e), !0 === u || i.isNumeric(s) ? s || 0 : e) : e
        },
        swap: function(n, t, i, r) {
            var e, u, f = {};
            for (u in t) f[u] = n.style[u], n.style[u] = t[u];
            e = i.apply(n, r || []);
            for (u in t) n.style[u] = f[u];
            return e
        }
    }), n.getComputedStyle ? (y = function(t) {
        return n.getComputedStyle(t, null)
    }, p = function(n, r, u) {
        var c, s, h, o = u || y(n),
            e = o ? o.getPropertyValue(r) || o[r] : t,
            f = n.style;
        return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ot.test(e) && vr.test(r) && (c = f.width, s = f.minWidth, h = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = c, f.minWidth = s, f.maxWidth = h)), e
    }) : r.documentElement.currentStyle && (y = function(n) {
        return n.currentStyle
    }, p = function(n, i, r) {
        var h, e, o, s = r || y(n),
            u = s ? s[i] : t,
            f = n.style;
        return null == u && f && f[i] && (u = f[i]), ot.test(u) && !so.test(i) && (h = f.left, (o = (e = n.runtimeStyle) && e.left) && (e.left = n.currentStyle.left), f.left = "fontSize" === i ? "1em" : u, u = f.pixelLeft + "px", f.left = h, o && (e.left = o)), "" === u ? "auto" : u
    }), i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return 0 === n.offsetWidth && oo.test(i.css(n, "display")) ? i.swap(n, pe, function() {
                    return fu(n, t, u)
                }) : fu(n, t, u)
            },
            set: function(n, r, u) {
                var f = u && y(n);
                return au(0, r, u ? iu(n, t, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
            }
        }
    }), i.support.opacity || (i.cssHooks.opacity = {
        get: function(n, t) {
            return fo.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(n, t) {
            var r = n.style,
                f = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                u = f && f.filter || r.filter || "";
            r.zoom = 1, (t >= 1 || "" === t) && "" === i.trim(u.replace(gt, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || f && !f.filter) || (r.filter = gt.test(u) ? u.replace(gt, e) : u + " " + e)
        }
    }), i(function() {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function(n, t) {
                if (t) return i.swap(n, {
                    display: "inline-block"
                }, p, [n, "marginRight"])
            }
        }), !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r) {
                    if (r) return r = p(n, t), ot.test(r) ? i(n).position()[t] + "px" : r
                }
            }
        })
    }), i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
        return n.offsetWidth <= 0 && n.offsetHeight <= 0 || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
    }, i.expr.filters.visible = function(n) {
        return !i.expr.filters.hidden(n)
    }), i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + c[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }, vr.test(n) || (i.cssHooks[n + t].set = au)
    });
    var de = /%20/g,
        sf = /\[\]$/,
        kr = /\r?\n/g,
        cf = /^(?:submit|button|image|reset|file)$/i,
        hf = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && hf.test(this.nodeName) && !cf.test(n) && (this.checked || !ti.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(kr, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(kr, "\r\n")
                }
            }).get()
        }
    }), i.param = function(n, r) {
        var f, u = [],
            e = function(n, t) {
                t = i.isFunction(t) ? t() : null == t ? "" : t, u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            e(this.name, this.value)
        });
        else
            for (f in n) si(f, n[f], r, e);
        return u.join("&").replace(de, "+")
    }, i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    }), i.fn.hover = function(n, t) {
        return this.mouseenter(n).mouseleave(t || n)
    };
    var v, w, dt = i.now(),
        vi = /\?/,
        bf = /#.*$/,
        er = /([?&])_=[^&]*/,
        df = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        kf = /^(?:GET|HEAD)$/,
        pf = /^\/\//,
        or = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        ur = i.fn.load,
        fr = {},
        yi = {},
        cr = "*/".concat("*");
    try {
        w = yf.href
    } catch (n) {
        (w = r.createElement("a")).href = "", w = w.href
    }
    v = or.exec(w.toLowerCase()) || [], i.fn.load = function(n, r, u) {
        if ("string" != typeof n && ur) return ur.apply(this, arguments);
        var o, h, s, f = this,
            e = n.indexOf(" ");
        return e >= 0 && (o = n.slice(e, n.length), n = n.slice(0, e)), i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (s = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: s,
            dataType: "html",
            data: r
        }).done(function(n) {
            h = arguments, f.html(o ? i("<div>").append(i.parseHTML(n)).find(o) : n)
        }).complete(u && function(n, t) {
            f.each(u, h || [n.responseText, t, n])
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.each(["get", "post"], function(n, r) {
        i[r] = function(n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                url: n,
                type: r,
                dataType: e,
                data: u,
                success: f
            })
        }
    }), i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: w,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(v[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": cr,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ci(ci(n, i.ajaxSettings), t) : ci(i.ajaxSettings, n)
        },
        ajaxPrefilter: pu(fr),
        ajaxTransport: pu(yi),
        ajax: function(n, r) {
            function b(n, r, s, c) {
                var v, b, w, rt, y, l = r;
                2 !== o && (o = 2, g && clearTimeout(g), a = t, d = c || "", f.readyState = n > 0 ? 4 : 0, s && (rt = function(n, i, r) {
                    var s, o, e, u, h = n.contents,
                        f = n.dataTypes,
                        c = n.responseFields;
                    for (u in c) u in r && (i[c[u]] = r[u]);
                    for (;
                        "*" === f[0];) f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
                    if (o)
                        for (u in h)
                            if (h[u] && h[u].test(o)) {
                                f.unshift(u);
                                break
                            }
                    if (f[0] in r) e = f[0];
                    else {
                        for (u in r) {
                            if (!f[0] || n.converters[u + " " + f[0]]) {
                                e = u;
                                break
                            }
                            s || (s = u)
                        }
                        e = e || s
                    }
                    if (e) return e !== f[0] && f.unshift(e), r[e]
                }(u, f, s)), n >= 200 && n < 300 || 304 === n ? (u.ifModified && ((y = f.getResponseHeader("Last-Modified")) && (i.lastModified[e] = y), (y = f.getResponseHeader("etag")) && (i.etag[e] = y)), 204 === n ? (v = !0, l = "nocontent") : 304 === n ? (v = !0, l = "notmodified") : (l = (v = function(n, t) {
                    var s, r, i, o, u = {},
                        h = 0,
                        e = n.dataTypes.slice(),
                        f = e[0];
                    if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), e[1])
                        for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
                    for (; r = e[++h];)
                        if ("*" !== r) {
                            if ("*" !== f && f !== r) {
                                if (!(i = u[f + " " + r] || u["* " + r]))
                                    for (s in u)
                                        if ((o = s.split(" "))[1] === r && (i = u[f + " " + o[0]] || u["* " + o[0]])) {
                                            !0 === i ? i = u[s] : !0 !== u[s] && (r = o[0], e.splice(h--, 0, r));
                                            break
                                        }
                                if (!0 !== i)
                                    if (i && n.throws) t = i(t);
                                    else try {
                                        t = i(t)
                                    } catch (n) {
                                        return {
                                            state: "parsererror",
                                            error: i ? n : "No conversion from " + f + " to " + r
                                        }
                                    }
                            }
                            f = r
                        }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, rt)).state, b = v.data, v = !(w = v.error))) : (w = l, !n && l || (l = "error", n < 0 && (n = 0))), f.status = n, f.statusText = (r || l) + "", v ? tt.resolveWith(h, [b, l, f]) : tt.rejectWith(h, [f, l, w]), f.statusCode(p), p = t, k && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [f, u, v ? b : w]), it.fireWith(h, [f, l]), k && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            "object" == typeof n && (r = n, n = t), r = r || {};
            var c, l, e, d, g, k, a, y, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                p = u.statusCode || {},
                ut = {},
                ft = {},
                o = 0,
                rt = "canceled",
                f = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (2 === o) {
                            if (!y)
                                for (y = {}; t = df.exec(d);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === o ? d : null
                    },
                    setRequestHeader: function(n, t) {
                        var i = n.toLowerCase();
                        return o || (n = ft[i] = ft[i] || n, ut[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return o || (u.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (o < 2)
                                for (t in n) p[t] = [p[t], n[t]];
                            else f.always(n[f.status]);
                        return this
                    },
                    abort: function(n) {
                        var t = n || rt;
                        return a && a.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || w) + "").replace(bf, "").replace(pf, v[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], null == u.crossDomain && (c = or.exec(u.url.toLowerCase()), u.crossDomain = !(!c || c[1] === v[1] && c[2] === v[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (v[3] || ("http:" === v[1] ? 80 : 443)))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), rf(fr, u, r, f), 2 === o) return f;
            (k = u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !kf.test(u.type), e = u.url, u.hasContent || (u.data && (e = u.url += (vi.test(e) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = er.test(e) ? e.replace(er, "$1_=" + dt++) : e + (vi.test(e) ? "&" : "?") + "_=" + dt++)), u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + cr + "; q=0.01" : "") : u.accepts["*"]);
            for (l in u.headers) f.setRequestHeader(l, u.headers[l]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, f, u) || 2 === o)) return f.abort();
            rt = "abort";
            for (l in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) f[l](u[l]);
            if (a = rf(yi, u, r, f)) {
                f.readyState = 1, k && nt.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (g = setTimeout(function() {
                    f.abort("timeout")
                }, u.timeout));
                try {
                    o = 1, a.send(ut, b)
                } catch (n) {
                    if (!(o < 2)) throw n;
                    b(-1, n)
                }
            } else b(-1, "No Transport");
            return f
        },
        getScript: function(n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        }
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var u, f = r.head || i("head")[0] || r.documentElement;
            return {
                send: function(t, i) {
                    (u = r.createElement("script")).async = !0, n.scriptCharset && (u.charset = n.scriptCharset), u.src = n.url, u.onload = u.onreadystatechange = function(n, t) {
                        (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"))
                    }, f.insertBefore(u, f.firstChild)
                },
                abort: function() {
                    u && u.onload(t, !0)
                }
            }
        }
    }), ei = [], ft = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = ei.pop() || i.expando + "_" + dt++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(r, u, f) {
        var e, s, o, h = !1 !== r.jsonp && (ft.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ft.test(r.data) && "data");
        if (h || "jsonp" === r.dataTypes[0]) return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(ft, "$1" + e) : !1 !== r.jsonp && (r.url += (vi.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
            return o || i.error(e + " was not called"), o[0]
        }, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
            o = arguments
        }, f.always(function() {
            n[e] = s, r[e] && (r.jsonpCallback = u.jsonpCallback, ei.push(e)), o && i.isFunction(s) && s(o[0]), o = s = t
        }), "script"
    }), hr = 0, pt = n.ActiveXObject && function() {
        var n;
        for (n in nt) nt[n](t, !0)
    }, i.ajaxSettings.xhr = n.ActiveXObject ? function() {
        return !this.isLocal && tf() || function() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (n) {}
        }()
    } : tf, it = i.ajaxSettings.xhr(), i.support.cors = !!it && "withCredentials" in it, (it = i.support.ajax = !!it) && i.ajaxTransport(function(r) {
        if (!r.crossDomain || i.support.cors) {
            var u;
            return {
                send: function(f, e) {
                    var h, s, o = r.xhr();
                    if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                        for (s in r.xhrFields) o[s] = r.xhrFields[s];
                    r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in f) o.setRequestHeader(s, f[s])
                    } catch (n) {}
                    o.send(r.hasContent && r.data || null), u = function(n, f) {
                        var s, a, l, c;
                        try {
                            if (u && (f || 4 === o.readyState))
                                if (u = t, h && (o.onreadystatechange = i.noop, pt && delete nt[h]), f) 4 !== o.readyState && o.abort();
                                else {
                                    c = {}, s = o.status, a = o.getAllResponseHeaders(), "string" == typeof o.responseText && (c.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (n) {
                                        l = ""
                                    }
                                    s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                        } catch (n) {
                            f || e(-1, n)
                        }
                        c && e(s, l, c, a)
                    }, r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++hr, pt && (nt || (nt = {}, i(n).unload(pt)), nt[h] = u), o.onreadystatechange = u) : u()
                },
                abort: function() {
                    u && u(t, !0)
                }
            }
        }
    });
    var b, at, vf = /^(?:toggle|show|hide)$/,
        wf = new RegExp("^(?:([+-])=|)(" + vt + ")([a-z%]*)$", "i"),
        uf = /queueHooks$/,
        yt = [function(n, t, r) {
            var u, o, b, a, s, v, l, e, w, h = this,
                f = n.style,
                p = {},
                y = [],
                c = n.nodeType && ut(n);
            r.queue || (null == (e = i._queueHooks(n, "fx")).unqueued && (e.unqueued = 0, w = e.empty.fire, e.empty.fire = function() {
                e.unqueued || w()
            }), e.unqueued++, h.always(function() {
                h.always(function() {
                    e.unqueued--, i.queue(n, "fx").length || e.empty.fire()
                })
            })), 1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== ku(n.nodeName) ? f.zoom = 1 : f.display = "inline-block")), r.overflow && (f.overflow = "hidden", i.support.shrinkWrapBlocks || h.always(function() {
                f.overflow = r.overflow[0], f.overflowX = r.overflow[1], f.overflowY = r.overflow[2]
            }));
            for (o in t)
                if (a = t[o], vf.exec(a)) {
                    if (delete t[o], v = v || "toggle" === a, a === (c ? "hide" : "show")) continue;
                    y.push(o)
                }
            if (b = y.length)
                for (("hidden" in (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}))) && (c = s.hidden), v && (s.hidden = !c), c ? i(n).show() : h.done(function() {
                        i(n).hide()
                    }), h.done(function() {
                        var t;
                        i._removeData(n, "fxshow");
                        for (t in p) i.style(n, t, p[t])
                    }), o = 0; o < b; o++) u = y[o], l = h.createTween(u, c ? s[u] : 0), p[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = "width" === u || "height" === u ? 1 : 0))
        }],
        tt = {
            "*": [function(n, t) {
                var o, s, r = this.createTween(n, t),
                    e = wf.exec(t),
                    h = r.cur(),
                    u = +h || 0,
                    f = 1,
                    c = 20;
                if (e) {
                    if (o = +e[2], "px" !== (s = e[3] || (i.cssNumber[n] ? "" : "px")) && u) {
                        u = i.css(r.elem, n, !0) || o || 1;
                        do u /= f = f || ".5", i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && 1 !== f && --c)
                    }
                    r.unit = s, r.start = u, r.end = e[1] ? u + (e[1] + 1) * o : o
                }
                return r
            }]
        };
    i.Animation = i.extend(uu, {
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], tt[r] = tt[r] || [], tt[r].unshift(t)
        },
        prefilter: function(n, t) {
            t ? yt.unshift(n) : yt.push(n)
        }
    }), i.Tween = e, (e.prototype = {
        constructor: e,
        init: function(n, t, r, u, f, e) {
            this.elem = n, this.prop = r, this.easing = f || "swing", this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = e.propHooks[this.prop];
            return n && n.get ? n.get(this) : e.propHooks._default.get(this)
        },
        run: function(n) {
            var r, t = e.propHooks[this.prop];
            return this.pos = this.options.duration ? r = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : r = n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : e.propHooks._default.set(this), this
        }
    }).init.prototype = e.prototype, (e.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0 : n.elem[n.prop]
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    }).scrollTop = e.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    }, i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(et(t, !0), n, i, u)
        }
    }), i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ut).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, r, u) {
            var o = i.isEmptyObject(n),
                e = i.speed(t, r, u),
                f = function() {
                    var t = uu(this, i.extend({}, n), e);
                    f.finish = function() {
                        t.stop(!0)
                    }, (o || i._data(this, "finish")) && t.stop(!0)
                };
            return f.finish = f, o || !1 === e.queue ? this.each(f) : this.queue(e.queue, f)
        },
        stop: function(n, r, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop, t(u)
            };
            return "string" != typeof n && (u = r, r = n, n = t), r && !1 !== n && this.queue(n || "fx", []), this.each(function() {
                var o = !0,
                    t = null != n && n + "queueHooks",
                    e = i.timers,
                    r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && uf.test(t) && f(r[t]);
                for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                !o && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, f = i._data(this),
                    u = f[n + "queue"],
                    e = f[n + "queueHooks"],
                    r = i.timers,
                    o = u ? u.length : 0;
                for (f.finish = !0, i.queue(this, n, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), t = r.length; t--;) r[t].elem === this && r[t].queue === n && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < o; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete f.finish
            })
        }
    }), i.each({
        slideDown: et("show"),
        slideUp: et("hide"),
        slideToggle: et("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    }), i.speed = function(n, t, r) {
        var u = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, null != u.queue && !0 !== u.queue || (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this), u.queue && i.dequeue(this, u.queue)
        }, u
    }, i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    }, i.timers = [], i.fx = e.prototype.init, i.fx.tick = function() {
        var u, r = i.timers,
            n = 0;
        for (b = i.now(); n < r.length; n++)(u = r[n])() || r[n] !== u || r.splice(n--, 1);
        r.length || i.fx.stop(), b = t
    }, i.fx.timer = function(n) {
        n() && i.timers.push(n) && i.fx.start()
    }, i.fx.interval = 13, i.fx.start = function() {
        at || (at = setInterval(i.fx.tick, i.fx.interval))
    }, i.fx.stop = function() {
        clearInterval(at), at = null
    }, i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, i.fx.step = {}, i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }), i.fn.offset = function(n) {
        if (arguments.length) return n === t ? this : this.each(function(t) {
            i.offset.setOffset(this, n, t)
        });
        var r, s, f = {
                top: 0,
                left: 0
            },
            u = this[0],
            e = u && u.ownerDocument;
        if (e) return r = e.documentElement, i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), s = ru(e), {
            top: f.top + (s.pageYOffset || r.scrollTop) - (r.clientTop || 0),
            left: f.left + (s.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
        }) : f
    }, i.offset = {
        setOffset: function(n, t, r) {
            var o = i.css(n, "position");
            "static" === o && (n.style.position = "relative");
            var s, h, f = i(n),
                e = f.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                u = {},
                c = {};
            ("absolute" === o || "fixed" === o) && i.inArray("auto", [l, a]) > -1 ? (s = (c = f.position()).top, h = c.left) : (s = parseFloat(l) || 0, h = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, e)), null != t.top && (u.top = t.top - e.top + s), null != t.left && (u.left = t.left - e.left + h), "using" in t ? t.using.call(n, u) : f.css(u)
        }
    }, i.fn.extend({
        position: function() {
            if (this[0]) {
                var t, u, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === i.css(r, "position") ? u = r.getBoundingClientRect() : (t = this.offsetParent(), u = this.offset(), i.nodeName(t[0], "html") || (n = t.offset()), n.top += i.css(t[0], "borderTopWidth", !0), n.left += i.css(t[0], "borderLeftWidth", !0)), {
                    top: u.top - n.top - i.css(r, "marginTop", !0),
                    left: u.left - n.left - i.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent || r.documentElement; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || r.documentElement
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function(f) {
            return i.access(this, function(n, f, e) {
                var o = ru(n);
                if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function(u, f) {
            i.fn[f] = function(f, e) {
                var s = arguments.length && (u || "boolean" != typeof f),
                    o = u || (!0 === f || !0 === e ? "margin" : "border");
                return i.access(this, function(r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, o) : i.style(r, u, f, o)
                }, r, s ? f : t, s, null)
            }
        })
    }), n.jQuery = n.$ = i, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return i
    })
}(window), ! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Popper = t()
}(this, function() {
    "use strict";

    function ht(n) {
        return n && "[object Function]" === {}.toString.call(n)
    }

    function f(n, t) {
        if (1 !== n.nodeType) return [];
        var i = window.getComputedStyle(n, null);
        return t ? i[t] : i
    }

    function b(n) {
        return "HTML" === n.nodeName ? n : n.parentNode || n.host
    }

    function s(n) {
        if (!n) return window.document.body;
        switch (n.nodeName) {
            case "HTML":
            case "BODY":
                return n.ownerDocument.body;
            case "#document":
                return n.body
        }
        var t = f(n),
            u = t.overflow,
            r = t.overflowX,
            i = t.overflowY;
        return /(auto|scroll)/.test(u + i + r) ? n : s(b(n))
    }

    function e(n) {
        var t = n && n.offsetParent,
            i = t && t.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) && "static" === f(t, "position") ? e(t) : t : n ? n.ownerDocument.documentElement : window.document.documentElement
    }

    function k(n) {
        return null === n.parentNode ? n : k(n.parentNode)
    }

    function a(n, t) {
        var i, u;
        if (!(n && n.nodeType && t && t.nodeType)) return window.document.documentElement;
        var o = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            f = o ? n : t,
            s = o ? t : n,
            r = document.createRange();
        return (r.setStart(f, 0), r.setEnd(s, 0), i = r.commonAncestorContainer, n !== i && t !== i || f.contains(s)) ? function(n) {
            var t = n.nodeName;
            return "BODY" !== t && ("HTML" === t || e(n.firstElementChild) === n)
        }(i) ? i : e(i) : (u = k(n), u.host ? a(u.host, t) : a(n, k(t).host))
    }

    function u(n) {
        var r = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            i = n.nodeName,
            t;
        return "BODY" === i || "HTML" === i ? (t = n.ownerDocument.documentElement, (n.ownerDocument.scrollingElement || t)[r]) : n[r]
    }

    function ui(n, t) {
        var e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            f = u(t, "top"),
            r = u(t, "left"),
            i = e ? -1 : 1;
        return n.top += f * i, n.bottom += f * i, n.left += r * i, n.right += r * i, n
    }

    function gt(n, t) {
        var i = "x" === t ? "Left" : "Top",
            r = "Left" == i ? "Right" : "Bottom";
        return +n["border" + i + "Width"].split("px")[0] + +n["border" + r + "Width"].split("px")[0]
    }

    function pt(n, t, r, u) {
        return i(t["offset" + n], t["scroll" + n], r["client" + n], r["offset" + n], r["scroll" + n], h() ? r["offset" + n] + u["margin" + ("Height" === n ? "Top" : "Left")] + u["margin" + ("Height" === n ? "Bottom" : "Right")] : 0)
    }

    function kt() {
        var i = window.document.body,
            n = window.document.documentElement,
            t = h() && window.getComputedStyle(n);
        return {
            height: pt("Height", i, n, t),
            width: pt("Width", i, n, t)
        }
    }

    function t(t) {
        return n({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function g(n) {
        var i = {},
            c, l, s;
        if (h()) try {
            i = n.getBoundingClientRect(), c = u(n, "top"), l = u(n, "left"), i.top += c, i.left += l, i.bottom += c, i.right += l
        } catch (n) {} else i = n.getBoundingClientRect();
        var r = {
                left: i.left,
                top: i.top,
                width: i.right - i.left,
                height: i.bottom - i.top
            },
            a = "HTML" === n.nodeName ? kt() : {},
            v = a.width || n.clientWidth || r.right - r.left,
            y = a.height || n.clientHeight || r.bottom - r.top,
            o = n.offsetWidth - v,
            e = n.offsetHeight - y;
        return (o || e) && (s = f(n), o -= gt(s, "x"), e -= gt(s, "y"), r.width -= o, r.height -= e), t(r)
    }

    function nt(n, i) {
        var y = h(),
            w = "HTML" === i.nodeName,
            c = g(n),
            p = g(i),
            l = s(n),
            e = f(i),
            a = +e.borderTopWidth.split("px")[0],
            v = +e.borderLeftWidth.split("px")[0],
            r = t({
                top: c.top - p.top - a,
                left: c.left - p.left - v,
                width: c.width,
                height: c.height
            }),
            o, u;
        return (r.marginTop = 0, r.marginLeft = 0, !y && w) && (o = +e.marginTop.split("px")[0], u = +e.marginLeft.split("px")[0], r.top -= a - o, r.bottom -= a - o, r.left -= v - u, r.right -= v - u, r.marginTop = o, r.marginLeft = u), (y ? i.contains(l) : i === l && "BODY" !== l.nodeName) && (r = ui(r, i)), r
    }

    function fi(n) {
        var r = n.ownerDocument.documentElement,
            f = nt(n, r),
            s = i(r.clientWidth, window.innerWidth || 0),
            h = i(r.clientHeight, window.innerHeight || 0),
            e = u(r),
            o = u(r, "left");
        return t({
            top: e - f.top + f.marginTop,
            left: o - f.left + f.marginLeft,
            width: s,
            height: h
        })
    }

    function wt(n) {
        var t = n.nodeName;
        return "BODY" !== t && "HTML" !== t && ("fixed" === f(n, "position") || wt(b(n)))
    }

    function rt(n, t, i, r) {
        var u = {
                top: 0,
                left: 0
            },
            o = a(n, t),
            e, f;
        if ("viewport" === r) u = fi(o);
        else if ("scrollParent" === r ? "BODY" === (e = s(b(n))).nodeName && (e = n.ownerDocument.documentElement) : e = "window" === r ? n.ownerDocument.documentElement : r, f = nt(e, o), "HTML" !== e.nodeName || wt(o)) u = f;
        else {
            var h = kt(),
                l = h.height,
                c = h.width;
            u.top += f.top - f.marginTop, u.bottom = l + f.top, u.left += f.left - f.marginLeft, u.right = c + f.left
        }
        return u.left += i, u.top += i, u.right -= i, u.bottom -= i, u
    }

    function bt(t, i, r, u, f) {
        var l = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var e = rt(r, u, l, f),
            o = {
                top: {
                    width: e.width,
                    height: i.top - e.top
                },
                right: {
                    width: e.right - i.right,
                    height: e.height
                },
                bottom: {
                    width: e.width,
                    height: e.bottom - i.bottom
                },
                left: {
                    width: i.left - e.left,
                    height: e.height
                }
            },
            h = Object.keys(o).map(function(t) {
                return n({
                    key: t
                }, o[t], {
                    area: function(n) {
                        return n.width * n.height
                    }(o[t])
                })
            }).sort(function(n, t) {
                return t.area - n.area
            }),
            s = h.filter(function(n) {
                var i = n.width,
                    t = n.height;
                return i >= r.clientWidth && t >= r.clientHeight
            }),
            a = 0 < s.length ? s[0].key : h[0].key,
            c = t.split("-")[1];
        return a + (c ? "-" + c : "")
    }

    function ni(n, t, i) {
        return nt(i, a(t, i))
    }

    function at(n) {
        var t = window.getComputedStyle(n),
            r = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: n.offsetWidth + i,
            height: n.offsetHeight + r
        }
    }

    function c(n) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return n.replace(/left|right|bottom|top/g, function(n) {
            return t[n]
        })
    }

    function vt(n, t, i) {
        i = i.split("-")[0];
        var f = at(n),
            e = {
                width: f.width,
                height: f.height
            },
            r = -1 !== ["right", "left"].indexOf(i),
            s = r ? "top" : "left",
            u = r ? "left" : "top",
            o = r ? "height" : "width",
            h = r ? "width" : "height";
        return e[s] = t[s] + t[o] / 2 - f[o] / 2, e[u] = i === u ? t[u] - f[h] : t[c(u)], e
    }

    function o(n, t) {
        return Array.prototype.find ? n.find(t) : n.filter(t)[0]
    }

    function yt(n, i, r) {
        return (void 0 === r ? n : n.slice(0, function(n, t, i) {
            if (Array.prototype.findIndex) return n.findIndex(function(n) {
                return n[t] === i
            });
            var r = o(n, function(n) {
                return n[t] === i
            });
            return n.indexOf(r)
        }(n, "name", r))).forEach(function(n) {
            n.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = n.function || n.fn;
            n.enabled && ht(r) && (i.offsets.popper = t(i.offsets.popper), i.offsets.reference = t(i.offsets.reference), i = r(i, n))
        }), i
    }

    function ti(n, t) {
        return n.some(function(n) {
            var i = n.name;
            return n.enabled && i === t
        })
    }

    function ii(n) {
        for (var i, r, u = [!1, "ms", "Webkit", "Moz", "O"], f = n.charAt(0).toUpperCase() + n.slice(1), t = 0; t < u.length - 1; t++)
            if (i = u[t], r = i ? "" + i + f : n, void 0 !== window.document.body.style[r]) return r;
        return null
    }

    function ri(n) {
        var t = n.ownerDocument;
        return t ? t.defaultView : window
    }

    function dt(n, t, i, r) {
        var f = "BODY" === n.nodeName,
            u = f ? n.ownerDocument.defaultView : n;
        u.addEventListener(t, i, {
            passive: !0
        }), f || dt(s(u.parentNode), t, i, r), r.push(u)
    }

    function si() {
        this.state.eventsEnabled || (this.state = function(n, t, i, r) {
            i.updateBound = r, ri(n).addEventListener("resize", i.updateBound, {
                passive: !0
            });
            var u = s(n);
            return dt(u, "scroll", i.updateBound, i.scrollParents), i.scrollElement = u, i.eventsEnabled = !0, i
        }(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function ei() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = function(n, t) {
            return ri(n).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(n) {
                n.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
        }(this.reference, this.state))
    }

    function y(n) {
        return "" !== n && !isNaN(parseFloat(n)) && isFinite(n)
    }

    function w(n, t) {
        Object.keys(t).forEach(function(i) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && y(t[i]) && (r = "px"), n.style[i] = t[i] + r
        })
    }

    function ft(n, t, i) {
        var u = o(n, function(n) {
                return n.name === t
            }),
            f = !!u && n.some(function(n) {
                return n.name === i && n.enabled && n.order < u.order
            }),
            r;
        return f || (r = "`" + t + "`", console.warn("`" + i + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")), f
    }

    function et(n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            t = it.indexOf(n),
            i = it.slice(t + 1).concat(it.slice(0, t));
        return r ? i.reverse() : i
    }

    function oi(n, r, u, f) {
        var l = [0, 0],
            a = -1 !== ["right", "left"].indexOf(f),
            e = n.split(/(\+|\-)/).map(function(n) {
                return n.trim()
            }),
            s = e.indexOf(o(e, function(n) {
                return -1 !== n.search(/,|\s/)
            })),
            h, c;
        return e[s] && -1 === e[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."), h = /\s*,\s*|\s+/, c = -1 === s ? [e] : [e.slice(0, s).concat([e[s].split(h)[0]]), [e[s].split(h)[1]].concat(e.slice(s + 1))], (c = c.map(function(n, f) {
            var o = (1 === f ? !a : a) ? "height" : "width",
                e = !1;
            return n.reduce(function(n, t) {
                return "" === n[n.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (n[n.length - 1] = t, e = !0, n) : e ? (n[n.length - 1] += t, e = !1, n) : n.concat(t)
            }, []).map(function(n) {
                return function(n, r, u, f) {
                    var h = n.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        o = +h[1],
                        e = h[2],
                        s;
                    if (!o) return n;
                    if (0 === e.indexOf("%")) {
                        switch (e) {
                            case "%p":
                                s = u;
                                break;
                            case "%":
                            case "%r":
                            default:
                                s = f
                        }
                        return t(s)[r] / 100 * o
                    }
                    return "vh" === e || "vw" === e ? ("vh" === e ? i(document.documentElement.clientHeight, window.innerHeight || 0) : i(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                }(n, o, r, u)
            })
        })).forEach(function(n, t) {
            n.forEach(function(i, r) {
                y(i) && (l[t] += i * ("-" === n[r - 1] ? -1 : 1))
            })
        }), l
    }
    for (var ot = Math.min, r = Math.floor, i = Math.max, ct = "undefined" != typeof window && void 0 !== window.document, lt = ["Edge", "Trident", "Firefox"], st = 0, p = 0; p < lt.length; p += 1)
        if (ct && 0 <= navigator.userAgent.indexOf(lt[p])) {
            st = 1;
            break
        }
    var d, li = ct && window.Promise ? function(n) {
            var t = !1;
            return function() {
                t || (t = !0, Promise.resolve().then(function() {
                    t = !1, n()
                }))
            }
        } : function(n) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, n()
                }, st))
            }
        },
        h = function() {
            return void 0 == d && (d = -1 !== navigator.appVersion.indexOf("MSIE 10")), d
        },
        ci = function(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        hi = function() {
            function n(n, t) {
                for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
            }
            return function(t, i, r) {
                return i && n(t.prototype, i), r && n(t, r), t
            }
        }(),
        l = function(n, t, i) {
            return t in n ? Object.defineProperty(n, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : n[t] = i, n
        },
        n = Object.assign || function(n) {
            for (var r, i, t = 1; t < arguments.length; t++)
                for (i in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
            return n
        },
        ut = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        it = ut.slice(3),
        tt = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        v = function() {
            function t(i, r) {
                var u = this,
                    f = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    e;
                ci(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(u.update)
                }, this.update = li(this.update.bind(this)), this.options = n({}, t.Defaults, f), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = i && i.jquery ? i[0] : i, this.popper = r && r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(n({}, t.Defaults.modifiers, f.modifiers)).forEach(function(i) {
                    u.options.modifiers[i] = n({}, t.Defaults.modifiers[i] || {}, f.modifiers ? f.modifiers[i] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return n({
                        name: t
                    }, u.options.modifiers[t])
                }).sort(function(n, t) {
                    return n.order - t.order
                }), this.modifiers.forEach(function(n) {
                    n.enabled && ht(n.onLoad) && n.onLoad(u.reference, u.popper, u.options, n, u.state)
                }), this.update(), e = this.options.eventsEnabled, e && this.enableEventListeners(), this.state.eventsEnabled = e
            }
            return hi(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var n = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            n.offsets.reference = ni(this.state, this.popper, this.reference), n.placement = bt(this.options.placement, n.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), n.originalPlacement = n.placement, n.offsets.popper = vt(this.popper, n.offsets.reference, n.placement), n.offsets.popper.position = "absolute", n = yt(this.modifiers, n), this.state.isCreated ? this.options.onUpdate(n) : (this.state.isCreated = !0, this.options.onCreate(n))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, ti(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[ii("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return si.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return ei.call(this)
                }
            }]), t
        }();
    return v.Utils = ("undefined" == typeof window ? global : window).PopperUtils, v.placements = ut, v.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(t) {
                    var f = t.placement,
                        a = f.split("-")[0],
                        s = f.split("-")[1];
                    if (s) {
                        var h = t.offsets,
                            r = h.reference,
                            o = h.popper,
                            u = -1 !== ["bottom", "top"].indexOf(a),
                            i = u ? "left" : "top",
                            e = u ? "width" : "height",
                            c = {
                                start: l({}, i, r[i]),
                                end: l({}, i, r[i] + r[e] - o[e])
                            };
                        t.offsets.popper = n({}, o, c[s])
                    }
                    return t
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(n, t) {
                    var r, f = t.offset,
                        o = n.placement,
                        e = n.offsets,
                        i = e.popper,
                        s = e.reference,
                        u = o.split("-")[0];
                    return r = y(+f) ? [+f, 0] : oi(f, i, s, u), "left" === u ? (i.top += r[0], i.left -= r[1]) : "right" === u ? (i.top += r[0], i.left += r[1]) : "top" === u ? (i.left += r[0], i.top -= r[1]) : "bottom" === u && (i.left += r[0], i.top += r[1]), n.popper = i, n
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(t, r) {
                    var o = r.boundariesElement || e(t.instance.popper),
                        f;
                    t.instance.reference === o && (o = e(o)), f = rt(t.instance.popper, t.instance.reference, r.padding, o), r.boundaries = f;
                    var h = r.priority,
                        u = t.offsets.popper,
                        s = {
                            primary: function(n) {
                                var t = u[n];
                                return u[n] < f[n] && !r.escapeWithReference && (t = i(u[n], f[n])), l({}, n, t)
                            },
                            secondary: function(n) {
                                var t = "right" === n ? "left" : "top",
                                    i = u[t];
                                return u[n] > f[n] && !r.escapeWithReference && (i = ot(u[t], f[n] - ("right" === n ? u.width : u.height))), l({}, t, i)
                            }
                        };
                    return h.forEach(function(t) {
                        var i = -1 === ["left", "top"].indexOf(t) ? "secondary" : "primary";
                        u = n({}, u, s[i](t))
                    }), t.offsets.popper = u, t
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(n) {
                    var s = n.offsets,
                        o = s.popper,
                        i = s.reference,
                        c = n.placement.split("-")[0],
                        u = r,
                        f = -1 !== ["top", "bottom"].indexOf(c),
                        e = f ? "right" : "bottom",
                        t = f ? "left" : "top",
                        h = f ? "width" : "height";
                    return o[e] < u(i[t]) && (n.offsets.popper[t] = u(i[t]) - o[h]), o[t] > u(i[e]) && (n.offsets.popper[t] = u(i[e])), n
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(n, r) {
                    var e;
                    if (!ft(n.instance.modifiers, "arrow", "keepTogether")) return n;
                    if (e = r.element, "string" == typeof e) {
                        if (!(e = n.instance.popper.querySelector(e))) return n
                    } else if (!n.instance.popper.contains(e)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), n;
                    var b = n.placement.split("-")[0],
                        y = n.offsets,
                        h = y.popper,
                        s = y.reference,
                        l = -1 !== ["left", "right"].indexOf(b),
                        v = l ? "height" : "width",
                        p = l ? "Top" : "Left",
                        u = p.toLowerCase(),
                        k = l ? "left" : "top",
                        c = l ? "bottom" : "right",
                        o = at(e)[v];
                    s[c] - o < h[u] && (n.offsets.popper[u] -= h[u] - (s[c] - o)), s[u] + o > h[c] && (n.offsets.popper[u] += s[u] + o - h[c]);
                    var d = s[u] + s[v] / 2 - o / 2,
                        w = f(n.instance.popper, "margin" + p).replace("px", ""),
                        a = d - t(n.offsets.popper)[u] - w;
                    return a = i(ot(h[v] - o, a), 0), n.arrowElement = e, n.offsets.arrow = {}, n.offsets.arrow[u] = Math.round(a), n.offsets.arrow[k] = "", n
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(t, i) {
                    if (ti(t.instance.modifiers, "inner") || t.flipped && t.placement === t.originalPlacement) return t;
                    var o = rt(t.instance.popper, t.instance.reference, i.padding, i.boundariesElement),
                        u = t.placement.split("-")[0],
                        s = c(u),
                        f = t.placement.split("-")[1] || "",
                        e = [];
                    switch (i.behavior) {
                        case tt.FLIP:
                            e = [u, s];
                            break;
                        case tt.CLOCKWISE:
                            e = et(u);
                            break;
                        case tt.COUNTERCLOCKWISE:
                            e = et(u, !0);
                            break;
                        default:
                            e = i.behavior
                    }
                    return e.forEach(function(h, l) {
                        if (u !== h || e.length === l + 1) return t;
                        u = t.placement.split("-")[0], s = c(u);
                        var v = t.offsets.popper,
                            p = t.offsets.reference,
                            a = r,
                            g = "left" === u && a(v.right) > a(p.left) || "right" === u && a(v.left) < a(p.right) || "top" === u && a(v.bottom) > a(p.top) || "bottom" === u && a(v.top) < a(p.bottom),
                            d = a(v.left) < a(o.left),
                            tt = a(v.right) > a(o.right),
                            nt = a(v.top) < a(o.top),
                            w = a(v.bottom) > a(o.bottom),
                            b = "left" === u && d || "right" === u && tt || "top" === u && nt || "bottom" === u && w,
                            y = -1 !== ["top", "bottom"].indexOf(u),
                            k = !!i.flipVariations && (y && "start" === f && d || y && "end" === f && tt || !y && "start" === f && nt || !y && "end" === f && w);
                        (g || b || k) && (t.flipped = !0, (g || b) && (u = e[l + 1]), k && (f = function(n) {
                            return "end" === n ? "start" : "start" === n ? "end" : n
                        }(f)), t.placement = u + (f ? "-" + f : ""), t.offsets.popper = n({}, t.offsets.popper, vt(t.instance.popper, t.offsets.reference, t.placement)), t = yt(t.instance.modifiers, t, "flip"))
                    }), t
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(n) {
                    var f = n.placement,
                        i = f.split("-")[0],
                        e = n.offsets,
                        r = e.popper,
                        s = e.reference,
                        u = -1 !== ["left", "right"].indexOf(i),
                        o = -1 === ["top", "left"].indexOf(i);
                    return r[u ? "left" : "top"] = s[i] - (o ? r[u ? "width" : "height"] : 0), n.placement = c(f), n.offsets.popper = t(r), n
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(n) {
                    if (!ft(n.instance.modifiers, "hide", "preventOverflow")) return n;
                    var i = n.offsets.reference,
                        t = o(n.instance.modifiers, function(n) {
                            return "preventOverflow" === n.name
                        }).boundaries;
                    if (i.bottom < t.top || i.left > t.right || i.top > t.bottom || i.right < t.left) {
                        if (!0 === n.hide) return n;
                        n.hide = !0, n.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === n.hide) return n;
                        n.hide = !1, n.attributes["x-out-of-boundaries"] = !1
                    }
                    return n
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(t, i) {
                    var nt = i.x,
                        tt = i.y,
                        h = t.offsets.popper,
                        a = o(t.instance.modifiers, function(n) {
                            return "applyStyle" === n.name
                        }).gpuAcceleration,
                        p, w, b;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var l, v, d = void 0 === a ? i.gpuAcceleration : a,
                        k = g(e(t.instance.popper)),
                        u = {
                            position: h.position
                        },
                        c = {
                            left: r(h.left),
                            top: r(h.top),
                            bottom: r(h.bottom),
                            right: r(h.right)
                        },
                        f = "bottom" === nt ? "top" : "bottom",
                        s = "right" === tt ? "left" : "right",
                        y = ii("transform");
                    return (v = "bottom" == f ? -k.height + c.bottom : c.top, l = "right" == s ? -k.width + c.right : c.left, d && y) ? (u[y] = "translate3d(" + l + "px, " + v + "px, 0)", u[f] = 0, u[s] = 0, u.willChange = "transform") : (p = "bottom" == f ? -1 : 1, w = "right" == s ? -1 : 1, u[f] = v * p, u[s] = l * w, u.willChange = f + ", " + s), b = {
                        "x-placement": t.placement
                    }, t.attributes = n({}, b, t.attributes), t.styles = n({}, u, t.styles), t.arrowStyles = n({}, t.offsets.arrow, t.arrowStyles), t
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(n) {
                    return w(n.instance.popper, n.styles),
                        function(n, t) {
                            Object.keys(t).forEach(function(i) {
                                !1 === t[i] ? n.removeAttribute(i) : n.setAttribute(i, t[i])
                            })
                        }(n.instance.popper, n.attributes), n.arrowElement && Object.keys(n.arrowStyles).length && w(n.arrowElement, n.arrowStyles), n
                },
                onLoad: function(n, t, i) {
                    var e = ni(0, t, n),
                        f = bt(i.placement, e, t, n, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", f), w(t, {
                        position: "absolute"
                    }), i
                },
                gpuAcceleration: void 0
            }
        }
    }, v
});
/*!
 * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
var bootstrap = function(n, t, i) {
    "use strict";

    function e(n, t) {
        for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, i = i && i.hasOwnProperty("default") ? i.default : i;
    var r = function() {
            function u(n) {
                return {}.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function f() {
                return {
                    bindType: i.end,
                    delegateType: i.end,
                    handle: function(n) {
                        if (t(n.target).is(this)) return n.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function e() {
                var t, n;
                if (window.QUnit) return !1;
                t = document.createElement("bootstrap");
                for (n in r)
                    if ("undefined" != typeof t.style[n]) return {
                        end: r[n]
                    };
                return !1
            }

            function o(i) {
                var u = this,
                    r = !1;
                return t(this).one(n.TRANSITION_END, function() {
                    r = !0
                }), setTimeout(function() {
                    r || n.triggerTransitionEnd(u)
                }, i), this
            }
            var i = !1,
                r = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                n = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(n) {
                        do n += ~~(1e6 * Math.random()); while (document.getElementById(n));
                        return n
                    },
                    getSelectorFromElement: function(n) {
                        var i = n.getAttribute("data-target");
                        i && "#" !== i || (i = n.getAttribute("href") || "");
                        try {
                            return t(document).find(i).length > 0 ? i : null
                        } catch (n) {
                            return null
                        }
                    },
                    reflow: function(n) {
                        return n.offsetHeight
                    },
                    triggerTransitionEnd: function(n) {
                        t(n).trigger(i.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(i)
                    },
                    isElement: function(n) {
                        return (n[0] || n).nodeType
                    },
                    typeCheckConfig: function(t, i, r) {
                        var f;
                        for (f in r)
                            if (Object.prototype.hasOwnProperty.call(r, f)) {
                                var s = r[f],
                                    e = i[f],
                                    o = e && n.isElement(e) ? "element" : u(e);
                                if (!new RegExp(s).test(o)) throw new Error(t.toUpperCase() + ': Option "' + f + '" provided type "' + o + '" but expected type "' + s + '".');
                            }
                    }
                };
            return i = e(), t.fn.emulateTransitionEnd = o, n.supportsTransitionEnd() && (t.event.special[n.TRANSITION_END] = f()), n
        }(),
        u = function(n, t, i) {
            return t && e(n.prototype, t), i && e(n, i), n
        },
        v = function(n, t) {
            n.prototype = Object.create(t.prototype), n.prototype.constructor = n, n.__proto__ = t
        },
        a = function() {
            var i = "alert",
                o = t.fn[i],
                f = {
                    CLOSE: "close.bs.alert",
                    CLOSED: "closed.bs.alert",
                    CLICK_DATA_API: "click.bs.alert.data-api"
                },
                e = {
                    ALERT: "alert",
                    FADE: "fade",
                    SHOW: "show"
                },
                n = function() {
                    function i(n) {
                        this._element = n
                    }
                    var n = i.prototype;
                    return n.close = function(n) {
                        n = n || this._element;
                        var t = this._getRootElement(n);
                        this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                    }, n.dispose = function() {
                        t.removeData(this._element, "bs.alert"), this._element = null
                    }, n._getRootElement = function(n) {
                        var u = r.getSelectorFromElement(n),
                            i = !1;
                        return u && (i = t(u)[0]), i || (i = t(n).closest("." + e.ALERT)[0]), i
                    }, n._triggerCloseEvent = function(n) {
                        var i = t.Event(f.CLOSE);
                        return t(n).trigger(i), i
                    }, n._removeElement = function(n) {
                        var i = this;
                        t(n).removeClass(e.SHOW), r.supportsTransitionEnd() && t(n).hasClass(e.FADE) ? t(n).one(r.TRANSITION_END, function(t) {
                            return i._destroyElement(n, t)
                        }).emulateTransitionEnd(150) : this._destroyElement(n)
                    }, n._destroyElement = function(n) {
                        t(n).detach().trigger(f.CLOSED).remove()
                    }, i._jQueryInterface = function(n) {
                        return this.each(function() {
                            var u = t(this),
                                r = u.data("bs.alert");
                            r || (r = new i(this), u.data("bs.alert", r)), "close" === n && r[n](this)
                        })
                    }, i._handleDismiss = function(n) {
                        return function(t) {
                            t && t.preventDefault(), n.close(this)
                        }
                    }, u(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), i
                }();
            return t(document).on(f.CLICK_DATA_API, {
                DISMISS: '[data-dismiss="alert"]'
            }.DISMISS, n._handleDismiss(new n)), t.fn[i] = n._jQueryInterface, t.fn[i].Constructor = n, t.fn[i].noConflict = function() {
                return t.fn[i] = o, n._jQueryInterface
            }, n
        }(),
        y = function() {
            var f = "button",
                o = t.fn[f],
                i = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                n = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                e = {
                    CLICK_DATA_API: "click.bs.button.data-api",
                    FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
                },
                r = function() {
                    function r(n) {
                        this._element = n
                    }
                    var f = r.prototype;
                    return f.toggle = function() {
                        var e = !0,
                            o = !0,
                            u = t(this._element).closest(n.DATA_TOGGLE)[0],
                            r, f;
                        if (u && (r = t(this._element).find(n.INPUT)[0], r)) {
                            if ("radio" === r.type && (r.checked && t(this._element).hasClass(i.ACTIVE) ? e = !1 : (f = t(u).find(n.ACTIVE)[0], f && t(f).removeClass(i.ACTIVE))), e) {
                                if (r.hasAttribute("disabled") || u.hasAttribute("disabled") || r.classList.contains("disabled") || u.classList.contains("disabled")) return;
                                r.checked = !t(this._element).hasClass(i.ACTIVE), t(r).trigger("change")
                            }
                            r.focus(), o = !1
                        }
                        o && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(i.ACTIVE)), e && t(this._element).toggleClass(i.ACTIVE)
                    }, f.dispose = function() {
                        t.removeData(this._element, "bs.button"), this._element = null
                    }, r._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data("bs.button");
                            i || (i = new r(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                        })
                    }, u(r, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), r
                }();
            return t(document).on(e.CLICK_DATA_API, n.DATA_TOGGLE_CARROT, function(u) {
                u.preventDefault();
                var f = u.target;
                t(f).hasClass(i.BUTTON) || (f = t(f).closest(n.BUTTON)), r._jQueryInterface.call(t(f), "toggle")
            }).on(e.FOCUS_BLUR_DATA_API, n.DATA_TOGGLE_CARROT, function(r) {
                var u = t(r.target).closest(n.BUTTON)[0];
                t(u).toggleClass(i.FOCUS, /^focus(in)?$/.test(r.type))
            }), t.fn[f] = r._jQueryInterface, t.fn[f].Constructor = r, t.fn[f].noConflict = function() {
                return t.fn[f] = o, r._jQueryInterface
            }, r
        }(),
        w = function() {
            var h = "carousel",
                c = "bs.carousel",
                o = "." + c,
                v = t.fn[h],
                l = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                a = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                i = {
                    NEXT: "next",
                    PREV: "prev",
                    LEFT: "left",
                    RIGHT: "right"
                },
                f = {
                    SLIDE: "slide" + o,
                    SLID: "slid" + o,
                    KEYDOWN: "keydown" + o,
                    MOUSEENTER: "mouseenter" + o,
                    MOUSELEAVE: "mouseleave" + o,
                    TOUCHEND: "touchend" + o,
                    LOAD_DATA_API: "load.bs.carousel.data-api",
                    CLICK_DATA_API: "click.bs.carousel.data-api"
                },
                n = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "carousel-item-right",
                    LEFT: "carousel-item-left",
                    NEXT: "carousel-item-next",
                    PREV: "carousel-item-prev",
                    ITEM: "carousel-item"
                },
                e = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                s = function() {
                    function v(n, i) {
                        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = t(n)[0], this._indicatorsElement = t(this._element).find(e.INDICATORS)[0], this._addEventListeners()
                    }
                    var s = v.prototype;
                    return s.next = function() {
                        this._isSliding || this._slide(i.NEXT)
                    }, s.nextWhenVisible = function() {
                        !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                    }, s.prev = function() {
                        this._isSliding || this._slide(i.PREV)
                    }, s.pause = function(n) {
                        n || (this._isPaused = !0), t(this._element).find(e.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, s.cycle = function(n) {
                        n || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }, s.to = function(n) {
                        var o = this,
                            r, u;
                        if (this._activeElement = t(this._element).find(e.ACTIVE_ITEM)[0], r = this._getItemIndex(this._activeElement), !(n > this._items.length - 1 || n < 0))
                            if (this._isSliding) t(this._element).one(f.SLID, function() {
                                return o.to(n)
                            });
                            else {
                                if (r === n) return this.pause(), void this.cycle();
                                u = n > r ? i.NEXT : i.PREV, this._slide(u, this._items[n])
                            }
                    }, s.dispose = function() {
                        t(this._element).off(o), t.removeData(this._element, c), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, s._getConfig = function(n) {
                        return n = t.extend({}, l, n), r.typeCheckConfig(h, n, a), n
                    }, s._addEventListeners = function() {
                        var n = this;
                        this._config.keyboard && t(this._element).on(f.KEYDOWN, function(t) {
                            return n._keydown(t)
                        }), "hover" === this._config.pause && (t(this._element).on(f.MOUSEENTER, function(t) {
                            return n.pause(t)
                        }).on(f.MOUSELEAVE, function(t) {
                            return n.cycle(t)
                        }), "ontouchstart" in document.documentElement && t(this._element).on(f.TOUCHEND, function() {
                            n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(t) {
                                return n.cycle(t)
                            }, 500 + n._config.interval)
                        }))
                    }, s._keydown = function(n) {
                        if (!/input|textarea/i.test(n.target.tagName)) switch (n.which) {
                            case 37:
                                n.preventDefault(), this.prev();
                                break;
                            case 39:
                                n.preventDefault(), this.next();
                                break;
                            default:
                                return
                        }
                    }, s._getItemIndex = function(n) {
                        return this._items = t.makeArray(t(n).parent().find(e.ITEM)), this._items.indexOf(n)
                    }, s._getItemByDirection = function(n, t) {
                        var o = n === i.NEXT,
                            f = n === i.PREV,
                            r = this._getItemIndex(t),
                            e = this._items.length - 1,
                            u;
                        return (f && 0 === r || o && r === e) && !this._config.wrap ? t : (u = (r + (n === i.PREV ? -1 : 1)) % this._items.length, -1 === u ? this._items[this._items.length - 1] : this._items[u])
                    }, s._triggerSlideEvent = function(n, i) {
                        var u = this._getItemIndex(n),
                            o = this._getItemIndex(t(this._element).find(e.ACTIVE_ITEM)[0]),
                            r = t.Event(f.SLIDE, {
                                relatedTarget: n,
                                direction: i,
                                from: o,
                                to: u
                            });
                        return t(this._element).trigger(r), r
                    }, s._setActiveIndicatorElement = function(i) {
                        if (this._indicatorsElement) {
                            t(this._indicatorsElement).find(e.ACTIVE).removeClass(n.ACTIVE);
                            var r = this._indicatorsElement.children[this._getItemIndex(i)];
                            r && t(r).addClass(n.ACTIVE)
                        }
                    }, s._slide = function(u, o) {
                        var c, l, a, p = this,
                            h = t(this._element).find(e.ACTIVE_ITEM)[0],
                            w = this._getItemIndex(h),
                            s = o || h && this._getItemByDirection(u, h),
                            b = this._getItemIndex(s),
                            y = Boolean(this._interval),
                            v;
                        (u === i.NEXT ? (c = n.LEFT, l = n.NEXT, a = i.LEFT) : (c = n.RIGHT, l = n.PREV, a = i.RIGHT), s && t(s).hasClass(n.ACTIVE)) ? this._isSliding = !1: !this._triggerSlideEvent(s, a).isDefaultPrevented() && h && s && (this._isSliding = !0, y && this.pause(), this._setActiveIndicatorElement(s), v = t.Event(f.SLID, {
                            relatedTarget: s,
                            direction: a,
                            from: w,
                            to: b
                        }), r.supportsTransitionEnd() && t(this._element).hasClass(n.SLIDE) ? (t(s).addClass(l), r.reflow(s), t(h).addClass(c), t(s).addClass(c), t(h).one(r.TRANSITION_END, function() {
                            t(s).removeClass(c + " " + l).addClass(n.ACTIVE), t(h).removeClass(n.ACTIVE + " " + l + " " + c), p._isSliding = !1, setTimeout(function() {
                                return t(p._element).trigger(v)
                            }, 0)
                        }).emulateTransitionEnd(600)) : (t(h).removeClass(n.ACTIVE), t(s).addClass(n.ACTIVE), this._isSliding = !1, t(this._element).trigger(v)), y && this.cycle())
                    }, v._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data(c),
                                u = t.extend({}, l, t(this).data()),
                                r;
                            if ("object" == typeof n && t.extend(u, n), r = "string" == typeof n ? n : u.slide, i || (i = new v(this, u), t(this).data(c, i)), "number" == typeof n) i.to(n);
                            else if ("string" == typeof r) {
                                if ("undefined" == typeof i[r]) throw new Error('No method named "' + r + '"');
                                i[r]()
                            } else u.interval && (i.pause(), i.cycle())
                        })
                    }, v._dataApiClickHandler = function(i) {
                        var o = r.getSelectorFromElement(this),
                            u, e, f;
                        o && (u = t(o)[0], u && t(u).hasClass(n.CAROUSEL) && (e = t.extend({}, t(u).data(), t(this).data()), f = this.getAttribute("data-slide-to"), f && (e.interval = !1), v._jQueryInterface.call(t(u), e), f && t(u).data(c).to(f), i.preventDefault()))
                    }, u(v, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }]), v
                }();
            return t(document).on(f.CLICK_DATA_API, e.DATA_SLIDE, s._dataApiClickHandler), t(window).on(f.LOAD_DATA_API, function() {
                t(e.DATA_RIDE).each(function() {
                    var n = t(this);
                    s._jQueryInterface.call(n, n.data())
                })
            }), t.fn[h] = s._jQueryInterface, t.fn[h].Constructor = s, t.fn[h].noConflict = function() {
                return t.fn[h] = v, s._jQueryInterface
            }, s
        }(),
        p = function() {
            var f = "collapse",
                i = "bs.collapse",
                a = t.fn[f],
                c = {
                    toggle: !0,
                    parent: ""
                },
                l = {
                    toggle: "boolean",
                    parent: "(string|element)"
                },
                e = {
                    SHOW: "show.bs.collapse",
                    SHOWN: "shown.bs.collapse",
                    HIDE: "hide.bs.collapse",
                    HIDDEN: "hidden.bs.collapse",
                    CLICK_DATA_API: "click.bs.collapse.data-api"
                },
                n = {
                    SHOW: "show",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                s = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                h = {
                    ACTIVES: ".show, .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                o = function() {
                    function a(n, i) {
                        var o, u, e, f;
                        for (this._isTransitioning = !1, this._element = n, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]')), o = t(h.DATA_TOGGLE), u = 0; u < o.length; u++) e = o[u], f = r.getSelectorFromElement(e), null !== f && t(f).filter(n).length > 0 && this._triggerArray.push(e);
                        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    var o = a.prototype;
                    return o.toggle = function() {
                        t(this._element).hasClass(n.SHOW) ? this.hide() : this.show()
                    }, o.show = function() {
                        var o = this,
                            u, c, l, f, s, v;
                        this._isTransitioning || t(this._element).hasClass(n.SHOW) || (this._parent && ((u = t.makeArray(t(this._parent).children().children(h.ACTIVES))).length || (u = null)), u && (c = t(u).data(i)) && c._isTransitioning) || (l = t.Event(e.SHOW), (t(this._element).trigger(l), l.isDefaultPrevented()) || (u && (a._jQueryInterface.call(t(u), "hide"), c || t(u).data(i, null)), f = this._getDimension(), t(this._element).removeClass(n.COLLAPSE).addClass(n.COLLAPSING), this._element.style[f] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(n.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0), s = function() {
                            t(o._element).removeClass(n.COLLAPSING).addClass(n.COLLAPSE).addClass(n.SHOW), o._element.style[f] = "", o.setTransitioning(!1), t(o._element).trigger(e.SHOWN)
                        }, r.supportsTransitionEnd() ? (v = "scroll" + (f[0].toUpperCase() + f.slice(1)), t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(600), this._element.style[f] = this._element[v] + "px") : s()))
                    }, o.hide = function() {
                        var c = this,
                            s, i, u, f, o, h;
                        if (!this._isTransitioning && t(this._element).hasClass(n.SHOW) && (s = t.Event(e.HIDE), t(this._element).trigger(s), !s.isDefaultPrevented())) {
                            if (i = this._getDimension(), this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", r.reflow(this._element), t(this._element).addClass(n.COLLAPSING).removeClass(n.COLLAPSE).removeClass(n.SHOW), this._triggerArray.length)
                                for (u = 0; u < this._triggerArray.length; u++) f = this._triggerArray[u], o = r.getSelectorFromElement(f), null !== o && (t(o).hasClass(n.SHOW) || t(f).addClass(n.COLLAPSED).attr("aria-expanded", !1));
                            this.setTransitioning(!0), h = function() {
                                c.setTransitioning(!1), t(c._element).removeClass(n.COLLAPSING).addClass(n.COLLAPSE).trigger(e.HIDDEN)
                            }, this._element.style[i] = "", r.supportsTransitionEnd() ? t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(600) : h()
                        }
                    }, o.setTransitioning = function(n) {
                        this._isTransitioning = n
                    }, o.dispose = function() {
                        t.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, o._getConfig = function(n) {
                        return n = t.extend({}, c, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(f, n, l), n
                    }, o._getDimension = function() {
                        return t(this._element).hasClass(s.WIDTH) ? s.WIDTH : s.HEIGHT
                    }, o._getParent = function() {
                        var u = this,
                            n = null,
                            i;
                        return r.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0], i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', t(n).find(i).each(function(n, t) {
                            u._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t])
                        }), n
                    }, o._addAriaAndCollapsedClass = function(i, r) {
                        if (i) {
                            var u = t(i).hasClass(n.SHOW);
                            r.length && t(r).toggleClass(n.COLLAPSED, !u).attr("aria-expanded", u)
                        }
                    }, a._getTargetFromElement = function(n) {
                        var i = r.getSelectorFromElement(n);
                        return i ? t(i)[0] : null
                    }, a._jQueryInterface = function(n) {
                        return this.each(function() {
                            var f = t(this),
                                r = f.data(i),
                                u = t.extend({}, c, f.data(), "object" == typeof n && n);
                            if (!r && u.toggle && /show|hide/.test(n) && (u.toggle = !1), r || (r = new a(this, u), f.data(i, r)), "string" == typeof n) {
                                if ("undefined" == typeof r[n]) throw new Error('No method named "' + n + '"');
                                r[n]()
                            }
                        })
                    }, u(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return c
                        }
                    }]), a
                }();
            return t(document).on(e.CLICK_DATA_API, h.DATA_TOGGLE, function(n) {
                "A" === n.currentTarget.tagName && n.preventDefault();
                var f = t(this),
                    u = r.getSelectorFromElement(this);
                t(u).each(function() {
                    var n = t(this),
                        r = n.data(i) ? "toggle" : f.data();
                    o._jQueryInterface.call(n, r)
                })
            }), t.fn[f] = o._jQueryInterface, t.fn[f].Constructor = o, t.fn[f].noConflict = function() {
                return t.fn[f] = a, o._jQueryInterface
            }, o
        }(),
        l = function() {
            if ("undefined" == typeof i) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
            var h = "dropdown",
                c = "bs.dropdown",
                s = "." + c,
                y = t.fn[h],
                v = new RegExp("38|40|27"),
                f = {
                    HIDE: "hide" + s,
                    HIDDEN: "hidden" + s,
                    SHOW: "show" + s,
                    SHOWN: "shown" + s,
                    CLICK: "click" + s,
                    CLICK_DATA_API: "click.bs.dropdown.data-api",
                    KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                    KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
                },
                n = {
                    DISABLED: "disabled",
                    SHOW: "show",
                    DROPUP: "dropup",
                    MENURIGHT: "dropdown-menu-right",
                    MENULEFT: "dropdown-menu-left"
                },
                e = {
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    MENU: ".dropdown-menu",
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)"
                },
                l = {
                    TOP: "top-start",
                    TOPEND: "top-end",
                    BOTTOM: "bottom-start",
                    BOTTOMEND: "bottom-end"
                },
                p = {
                    offset: 0,
                    flip: !0
                },
                a = {
                    offset: "(number|string|function)",
                    flip: "boolean"
                },
                o = function() {
                    function o(n, t) {
                        this._element = n, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                    }
                    var y = o.prototype;
                    return y.toggle = function() {
                        var r, c, h, u, s;
                        this._element.disabled || t(this._element).hasClass(n.DISABLED) || (r = o._getParentFromElement(this._element), c = t(this._menu).hasClass(n.SHOW), (o._clearMenus(), c) || (h = {
                            relatedTarget: this._element
                        }, u = t.Event(f.SHOW, h), (t(r).trigger(u), u.isDefaultPrevented()) || (s = this._element, t(r).hasClass(n.DROPUP) && (t(this._menu).hasClass(n.MENULEFT) || t(this._menu).hasClass(n.MENURIGHT)) && (s = r), this._popper = new i(s, this._menu, this._getPopperConfig()), "ontouchstart" in document.documentElement && !t(r).closest(e.NAVBAR_NAV).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(n.SHOW), t(r).toggleClass(n.SHOW).trigger(t.Event(f.SHOWN, h)))))
                    }, y.dispose = function() {
                        t.removeData(this._element, c), t(this._element).off(s), this._element = null, this._menu = null, null !== this._popper && this._popper.destroy(), this._popper = null
                    }, y.update = function() {
                        this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                    }, y._addEventListeners = function() {
                        var n = this;
                        t(this._element).on(f.CLICK, function(t) {
                            t.preventDefault(), t.stopPropagation(), n.toggle()
                        })
                    }, y._getConfig = function(n) {
                        return n = t.extend({}, this.constructor.Default, t(this._element).data(), n), r.typeCheckConfig(h, n, this.constructor.DefaultType), n
                    }, y._getMenuElement = function() {
                        if (!this._menu) {
                            var n = o._getParentFromElement(this._element);
                            this._menu = t(n).find(e.MENU)[0]
                        }
                        return this._menu
                    }, y._getPlacement = function() {
                        var r = t(this._element).parent(),
                            i = l.BOTTOM;
                        return r.hasClass(n.DROPUP) ? (i = l.TOP, t(this._menu).hasClass(n.MENURIGHT) && (i = l.TOPEND)) : t(this._menu).hasClass(n.MENURIGHT) && (i = l.BOTTOMEND), i
                    }, y._detectNavbar = function() {
                        return t(this._element).closest(".navbar").length > 0
                    }, y._getPopperConfig = function() {
                        var r = this,
                            i = {},
                            n;
                        return "function" == typeof this._config.offset ? i.fn = function(n) {
                            return n.offsets = t.extend({}, n.offsets, r._config.offset(n.offsets) || {}), n
                        } : i.offset = this._config.offset, n = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: i,
                                flip: {
                                    enabled: this._config.flip
                                }
                            }
                        }, this._inNavbar && (n.modifiers.applyStyle = {
                            enabled: !this._inNavbar
                        }), n
                    }, o._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data(c),
                                r = "object" == typeof n ? n : null;
                            if (i || (i = new o(this, r), t(this).data(c, i)), "string" == typeof n) {
                                if ("undefined" == typeof i[n]) throw new Error('No method named "' + n + '"');
                                i[n]()
                            }
                        })
                    }, o._clearMenus = function(i) {
                        var u, r, a, h;
                        if (!i || 3 !== i.which && ("keyup" !== i.type || 9 === i.which))
                            for (u = t.makeArray(t(e.DATA_TOGGLE)), r = 0; r < u.length; r++) {
                                var s = o._getParentFromElement(u[r]),
                                    l = t(u[r]).data(c),
                                    v = {
                                        relatedTarget: u[r]
                                    };
                                l && (a = l._menu, !t(s).hasClass(n.SHOW) || i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "keyup" === i.type && 9 === i.which) && t.contains(s, i.target) || (h = t.Event(f.HIDE, v), t(s).trigger(h), h.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), u[r].setAttribute("aria-expanded", "false"), t(a).removeClass(n.SHOW), t(s).removeClass(n.SHOW).trigger(t.Event(f.HIDDEN, v)))))
                            }
                    }, o._getParentFromElement = function(n) {
                        var u, i = r.getSelectorFromElement(n);
                        return i && (u = t(i)[0]), u || n.parentNode
                    }, o._dataApiKeydownHandler = function(i) {
                        var f, s, u, r, h;
                        !v.test(i.which) || /button/i.test(i.target.tagName) && 32 === i.which || /input|textarea/i.test(i.target.tagName) || (i.preventDefault(), i.stopPropagation(), this.disabled || t(this).hasClass(n.DISABLED)) || (f = o._getParentFromElement(this), s = t(f).hasClass(n.SHOW), (s || 27 === i.which && 32 === i.which) && (!s || 27 !== i.which && 32 !== i.which) ? (u = t(f).find(e.VISIBLE_ITEMS).get(), u.length && (r = u.indexOf(i.target), 38 === i.which && r > 0 && r--, 40 === i.which && r < u.length - 1 && r++, r < 0 && (r = 0), u[r].focus())) : (27 === i.which && (h = t(f).find(e.DATA_TOGGLE)[0], t(h).trigger("focus")), t(this).trigger("click")))
                    }, u(o, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return p
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return a
                        }
                    }]), o
                }();
            return t(document).on(f.KEYDOWN_DATA_API, e.DATA_TOGGLE, o._dataApiKeydownHandler).on(f.KEYDOWN_DATA_API, e.MENU, o._dataApiKeydownHandler).on(f.CLICK_DATA_API + " " + f.KEYUP_DATA_API, o._clearMenus).on(f.CLICK_DATA_API, e.DATA_TOGGLE, function(n) {
                n.preventDefault(), n.stopPropagation(), o._jQueryInterface.call(t(this), "toggle")
            }).on(f.CLICK_DATA_API, e.FORM_CHILD, function(n) {
                n.stopPropagation()
            }), t.fn[h] = o._jQueryInterface, t.fn[h].Constructor = o, t.fn[h].noConflict = function() {
                return t.fn[h] = y, o._jQueryInterface
            }, o
        }(),
        o = function() {
            var e = "modal",
                c = ".bs.modal",
                l = t.fn[e],
                s = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                h = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                n = {
                    HIDE: "hide.bs.modal",
                    HIDDEN: "hidden.bs.modal",
                    SHOW: "show.bs.modal",
                    SHOWN: "shown.bs.modal",
                    FOCUSIN: "focusin.bs.modal",
                    RESIZE: "resize.bs.modal",
                    CLICK_DISMISS: "click.dismiss.bs.modal",
                    KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                    MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                    MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                    CLICK_DATA_API: "click.bs.modal.data-api"
                },
                i = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    SHOW: "show"
                },
                f = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                o = function() {
                    function l(n, i) {
                        this._config = this._getConfig(i), this._element = n, this._dialog = t(n).find(f.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    var o = l.prototype;
                    return o.toggle = function(n) {
                        return this._isShown ? this.hide() : this.show(n)
                    }, o.show = function(u) {
                        var e = this,
                            o;
                        this._isTransitioning || this._isShown || (r.supportsTransitionEnd() && t(this._element).hasClass(i.FADE) && (this._isTransitioning = !0), o = t.Event(n.SHOW, {
                            relatedTarget: u
                        }), t(this._element).trigger(o), this._isShown || o.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(i.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(n.CLICK_DISMISS, f.DATA_DISMISS, function(n) {
                            return e.hide(n)
                        }), t(this._dialog).on(n.MOUSEDOWN_DISMISS, function() {
                            t(e._element).one(n.MOUSEUP_DISMISS, function(n) {
                                t(n.target).is(e._element) && (e._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return e._showElement(u)
                        })))
                    }, o.hide = function(u) {
                        var o = this,
                            f, e;
                        (u && u.preventDefault(), !this._isTransitioning && this._isShown) && (f = t.Event(n.HIDE), (t(this._element).trigger(f), this._isShown && !f.isDefaultPrevented()) && (this._isShown = !1, e = r.supportsTransitionEnd() && t(this._element).hasClass(i.FADE), e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(n.FOCUSIN), t(this._element).removeClass(i.SHOW), t(this._element).off(n.CLICK_DISMISS), t(this._dialog).off(n.MOUSEDOWN_DISMISS), e ? t(this._element).one(r.TRANSITION_END, function(n) {
                            return o._hideModal(n)
                        }).emulateTransitionEnd(300) : this._hideModal()))
                    }, o.dispose = function() {
                        t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(c), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                    }, o.handleUpdate = function() {
                        this._adjustDialog()
                    }, o._getConfig = function(n) {
                        return n = t.extend({}, s, n), r.typeCheckConfig(e, n, h), n
                    }, o._showElement = function(u) {
                        var f = this,
                            o = r.supportsTransitionEnd() && t(this._element).hasClass(i.FADE),
                            s, e;
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, o && r.reflow(this._element), t(this._element).addClass(i.SHOW), this._config.focus && this._enforceFocus(), s = t.Event(n.SHOWN, {
                            relatedTarget: u
                        }), e = function() {
                            f._config.focus && f._element.focus(), f._isTransitioning = !1, t(f._element).trigger(s)
                        }, o ? t(this._dialog).one(r.TRANSITION_END, e).emulateTransitionEnd(300) : e()
                    }, o._enforceFocus = function() {
                        var i = this;
                        t(document).off(n.FOCUSIN).on(n.FOCUSIN, function(n) {
                            document === n.target || i._element === n.target || t(i._element).has(n.target).length || i._element.focus()
                        })
                    }, o._setEscapeEvent = function() {
                        var i = this;
                        this._isShown && this._config.keyboard ? t(this._element).on(n.KEYDOWN_DISMISS, function(n) {
                            27 === n.which && (n.preventDefault(), i.hide())
                        }) : this._isShown || t(this._element).off(n.KEYDOWN_DISMISS)
                    }, o._setResizeEvent = function() {
                        var i = this;
                        this._isShown ? t(window).on(n.RESIZE, function(n) {
                            return i.handleUpdate(n)
                        }) : t(window).off(n.RESIZE)
                    }, o._hideModal = function() {
                        var r = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                            t(document.body).removeClass(i.OPEN), r._resetAdjustments(), r._resetScrollbar(), t(r._element).trigger(n.HIDDEN)
                        })
                    }, o._removeBackdrop = function() {
                        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                    }, o._showBackdrop = function(u) {
                        var f = this,
                            s = t(this._element).hasClass(i.FADE) ? i.FADE : "",
                            o, e;
                        if (this._isShown && this._config.backdrop) {
                            if (o = r.supportsTransitionEnd() && s, this._backdrop = document.createElement("div"), this._backdrop.className = i.BACKDROP, s && t(this._backdrop).addClass(s), t(this._backdrop).appendTo(document.body), t(this._element).on(n.CLICK_DISMISS, function(n) {
                                    f._ignoreBackdropClick ? f._ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" === f._config.backdrop ? f._element.focus() : f.hide())
                                }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(i.SHOW), !u) return;
                            if (!o) return void u();
                            t(this._backdrop).one(r.TRANSITION_END, u).emulateTransitionEnd(150)
                        } else !this._isShown && this._backdrop ? (t(this._backdrop).removeClass(i.SHOW), e = function() {
                            f._removeBackdrop(), u && u()
                        }, r.supportsTransitionEnd() && t(this._element).hasClass(i.FADE) ? t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150) : e()) : u && u()
                    }, o._adjustDialog = function() {
                        var n = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, o._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, o._checkScrollbar = function() {
                        var n = document.body.getBoundingClientRect();
                        this._isBodyOverflowing = n.left + n.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, o._setScrollbar = function() {
                        var n = this,
                            r, i;
                        this._isBodyOverflowing && (t(f.FIXED_CONTENT).each(function(i, r) {
                            var f = t(r)[0].style.paddingRight,
                                u = t(r).css("padding-right");
                            t(r).data("padding-right", f).css("padding-right", parseFloat(u) + n._scrollbarWidth + "px")
                        }), t(f.STICKY_CONTENT).each(function(i, r) {
                            var f = t(r)[0].style.marginRight,
                                u = t(r).css("margin-right");
                            t(r).data("margin-right", f).css("margin-right", parseFloat(u) - n._scrollbarWidth + "px")
                        }), t(f.NAVBAR_TOGGLER).each(function(i, r) {
                            var f = t(r)[0].style.marginRight,
                                u = t(r).css("margin-right");
                            t(r).data("margin-right", f).css("margin-right", parseFloat(u) + n._scrollbarWidth + "px")
                        }), r = document.body.style.paddingRight, i = t("body").css("padding-right"), t("body").data("padding-right", r).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px"))
                    }, o._resetScrollbar = function() {
                        t(f.FIXED_CONTENT).each(function(n, i) {
                            var r = t(i).data("padding-right");
                            "undefined" != typeof r && t(i).css("padding-right", r).removeData("padding-right")
                        }), t(f.STICKY_CONTENT + ", " + f.NAVBAR_TOGGLER).each(function(n, i) {
                            var r = t(i).data("margin-right");
                            "undefined" != typeof r && t(i).css("margin-right", r).removeData("margin-right")
                        });
                        var n = t("body").data("padding-right");
                        "undefined" != typeof n && t("body").css("padding-right", n).removeData("padding-right")
                    }, o._getScrollbarWidth = function() {
                        var n = document.createElement("div"),
                            t;
                        return n.className = i.SCROLLBAR_MEASURER, document.body.appendChild(n), t = n.getBoundingClientRect().width - n.clientWidth, document.body.removeChild(n), t
                    }, l._jQueryInterface = function(n, i) {
                        return this.each(function() {
                            var r = t(this).data("bs.modal"),
                                u = t.extend({}, l.Default, t(this).data(), "object" == typeof n && n);
                            if (r || (r = new l(this, u), t(this).data("bs.modal", r)), "string" == typeof n) {
                                if ("undefined" == typeof r[n]) throw new Error('No method named "' + n + '"');
                                r[n](i)
                            } else u.show && r.show(i)
                        })
                    }, u(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return s
                        }
                    }]), l
                }();
            return t(document).on(n.CLICK_DATA_API, f.DATA_TOGGLE, function(i) {
                var u, s = this,
                    h = r.getSelectorFromElement(this),
                    f, e;
                h && (u = t(h)[0]), f = t(u).data("bs.modal") ? "toggle" : t.extend({}, t(u).data(), t(this).data()), "A" !== this.tagName && "AREA" !== this.tagName || i.preventDefault(), e = t(u).one(n.SHOW, function(i) {
                    i.isDefaultPrevented() || e.one(n.HIDDEN, function() {
                        t(s).is(":visible") && s.focus()
                    })
                }), o._jQueryInterface.call(t(u), f, this)
            }), t.fn[e] = o._jQueryInterface, t.fn[e].Constructor = o, t.fn[e].noConflict = function() {
                return t.fn[e] = l, o._jQueryInterface
            }, o
        }(),
        f = function() {
            if ("undefined" == typeof i) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            var s = "tooltip",
                n = ".bs.tooltip",
                a = t.fn[s],
                v = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                p = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "(number|string)",
                    container: "(string|element|boolean)",
                    fallbackPlacement: "(string|array)"
                },
                y = {
                    AUTO: "auto",
                    TOP: "top",
                    RIGHT: "right",
                    BOTTOM: "bottom",
                    LEFT: "left"
                },
                l = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip"
                },
                o = {
                    SHOW: "show",
                    OUT: "out"
                },
                w = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                f = {
                    FADE: "fade",
                    SHOW: "show"
                },
                c = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner",
                    ARROW: ".arrow"
                },
                e = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                h = function() {
                    function a(n, t) {
                        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = n, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    var h = a.prototype;
                    return h.enable = function() {
                        this._isEnabled = !0
                    }, h.disable = function() {
                        this._isEnabled = !1
                    }, h.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, h.toggle = function(n) {
                        if (this._isEnabled)
                            if (n) {
                                var r = this.constructor.DATA_KEY,
                                    i = t(n.currentTarget).data(r);
                                i || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                            } else {
                                if (t(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }, h.dispose = function() {
                        clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                    }, h.show = function() {
                        var n = this,
                            l, p, u, h, v, s, y, e;
                        if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                        if (l = t.Event(this.constructor.Event.SHOW), this.isWithContent() && this._isEnabled) {
                            if (t(this.element).trigger(l), p = t.contains(this.element.ownerDocument.documentElement, this.element), l.isDefaultPrevented() || !p) return;
                            u = this.getTipElement(), h = r.getUID(this.constructor.NAME), u.setAttribute("id", h), this.element.setAttribute("aria-describedby", h), this.setContent(), this.config.animation && t(u).addClass(f.FADE), v = "function" == typeof this.config.placement ? this.config.placement.call(this, u, this.element) : this.config.placement, s = this._getAttachment(v), this.addAttachmentClass(s), y = !1 === this.config.container ? document.body : t(this.config.container), t(u).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(u).appendTo(y), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, u, {
                                placement: s,
                                modifiers: {
                                    offset: {
                                        offset: this.config.offset
                                    },
                                    flip: {
                                        behavior: this.config.fallbackPlacement
                                    },
                                    arrow: {
                                        element: c.ARROW
                                    }
                                },
                                onCreate: function(t) {
                                    t.originalPlacement !== t.placement && n._handlePopperPlacementChange(t)
                                },
                                onUpdate: function(t) {
                                    n._handlePopperPlacementChange(t)
                                }
                            }), t(u).addClass(f.SHOW), "ontouchstart" in document.documentElement && t("body").children().on("mouseover", null, t.noop), e = function() {
                                n.config.animation && n._fixTransition();
                                var i = n._hoverState;
                                n._hoverState = null, t(n.element).trigger(n.constructor.Event.SHOWN), i === o.OUT && n._leave(null, n)
                            }, r.supportsTransitionEnd() && t(this.tip).hasClass(f.FADE) ? t(this.tip).one(r.TRANSITION_END, e).emulateTransitionEnd(a._TRANSITION_DURATION) : e()
                        }
                    }, h.hide = function(n) {
                        var i = this,
                            u = this.getTipElement(),
                            h = t.Event(this.constructor.Event.HIDE),
                            s = function() {
                                i._hoverState !== o.SHOW && u.parentNode && u.parentNode.removeChild(u), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), n && n()
                            };
                        t(this.element).trigger(h), h.isDefaultPrevented() || (t(u).removeClass(f.SHOW), "ontouchstart" in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[e.CLICK] = !1, this._activeTrigger[e.FOCUS] = !1, this._activeTrigger[e.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(f.FADE) ? t(u).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "")
                    }, h.update = function() {
                        null !== this._popper && this._popper.scheduleUpdate()
                    }, h.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, h.addAttachmentClass = function(n) {
                        t(this.getTipElement()).addClass("bs-tooltip-" + n)
                    }, h.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, h.setContent = function() {
                        var n = t(this.getTipElement());
                        this.setElementContent(n.find(c.TOOLTIP_INNER), this.getTitle()), n.removeClass(f.FADE + " " + f.SHOW)
                    }, h.setElementContent = function(n, i) {
                        var r = this.config.html;
                        "object" == typeof i && (i.nodeType || i.jquery) ? r ? t(i).parent().is(n) || n.empty().append(i) : n.text(t(i).text()) : n[r ? "html" : "text"](i)
                    }, h.getTitle = function() {
                        var n = this.element.getAttribute("data-original-title");
                        return n || (n = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), n
                    }, h._getAttachment = function(n) {
                        return y[n.toUpperCase()]
                    }, h._setListeners = function() {
                        var n = this;
                        this.config.trigger.split(" ").forEach(function(i) {
                            if ("click" === i) t(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
                                return n.toggle(t)
                            });
                            else if (i !== e.MANUAL) {
                                var u = i === e.HOVER ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                                    r = i === e.HOVER ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                                t(n.element).on(u, n.config.selector, function(t) {
                                    return n._enter(t)
                                }).on(r, n.config.selector, function(t) {
                                    return n._leave(t)
                                })
                            }
                            t(n.element).closest(".modal").on("hide.bs.modal", function() {
                                return n.hide()
                            })
                        }), this.config.selector ? this.config = t.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, h._fixTitle = function() {
                        var n = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, h._enter = function(n, i) {
                        var r = this.constructor.DATA_KEY;
                        (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i)), n && (i._activeTrigger["focusin" === n.type ? e.FOCUS : e.HOVER] = !0), t(i.getTipElement()).hasClass(f.SHOW) || i._hoverState === o.SHOW ? i._hoverState = o.SHOW : (clearTimeout(i._timeout), i._hoverState = o.SHOW, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function() {
                            i._hoverState === o.SHOW && i.show()
                        }, i.config.delay.show) : i.show())
                    }, h._leave = function(n, i) {
                        var r = this.constructor.DATA_KEY;
                        (i = i || t(n.currentTarget).data(r)) || (i = new this.constructor(n.currentTarget, this._getDelegateConfig()), t(n.currentTarget).data(r, i)), n && (i._activeTrigger["focusout" === n.type ? e.FOCUS : e.HOVER] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = o.OUT, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function() {
                            i._hoverState === o.OUT && i.hide()
                        }, i.config.delay.hide) : i.hide())
                    }, h._isWithActiveTrigger = function() {
                        for (var n in this._activeTrigger)
                            if (this._activeTrigger[n]) return !0;
                        return !1
                    }, h._getConfig = function(n) {
                        return "number" == typeof(n = t.extend({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                            show: n.delay,
                            hide: n.delay
                        }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), r.typeCheckConfig(s, n, this.constructor.DefaultType), n
                    }, h._getDelegateConfig = function() {
                        var t = {},
                            n;
                        if (this.config)
                            for (n in this.config) this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
                        return t
                    }, h._cleanTipClass = function() {
                        var i = t(this.getTipElement()),
                            n = i.attr("class").match(v);
                        null !== n && n.length > 0 && i.removeClass(n.join(""))
                    }, h._handlePopperPlacementChange = function(n) {
                        this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(n.placement))
                    }, h._fixTransition = function() {
                        var n = this.getTipElement(),
                            i = this.config.animation;
                        null === n.getAttribute("x-placement") && (t(n).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
                    }, a._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data("bs.tooltip"),
                                r = "object" == typeof n && n;
                            if ((i || !/dispose|hide/.test(n)) && (i || (i = new a(this, r), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                                if ("undefined" == typeof i[n]) throw new Error('No method named "' + n + '"');
                                i[n]()
                            }
                        })
                    }, u(a, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.tooltip"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return w
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return p
                        }
                    }]), a
                }();
            return t.fn[s] = h._jQueryInterface, t.fn[s].Constructor = h, t.fn[s].noConflict = function() {
                return t.fn[s] = a, h._jQueryInterface
            }, h
        }(),
        s = function() {
            var i = "popover",
                n = ".bs.popover",
                c = t.fn[i],
                a = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                s = t.extend({}, f.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
                }),
                l = t.extend({}, f.DefaultType, {
                    content: "(string|element|function)"
                }),
                o = {
                    FADE: "fade",
                    SHOW: "show"
                },
                e = {
                    TITLE: ".popover-header",
                    CONTENT: ".popover-body"
                },
                h = {
                    HIDE: "hide" + n,
                    HIDDEN: "hidden" + n,
                    SHOW: "show" + n,
                    SHOWN: "shown" + n,
                    INSERTED: "inserted" + n,
                    CLICK: "click" + n,
                    FOCUSIN: "focusin" + n,
                    FOCUSOUT: "focusout" + n,
                    MOUSEENTER: "mouseenter" + n,
                    MOUSELEAVE: "mouseleave" + n
                },
                r = function(r) {
                    function c() {
                        return r.apply(this, arguments) || this
                    }
                    v(c, r);
                    var f = c.prototype;
                    return f.isWithContent = function() {
                        return this.getTitle() || this._getContent()
                    }, f.addAttachmentClass = function(n) {
                        t(this.getTipElement()).addClass("bs-popover-" + n)
                    }, f.getTipElement = function() {
                        return this.tip = this.tip || t(this.config.template)[0], this.tip
                    }, f.setContent = function() {
                        var n = t(this.getTipElement());
                        this.setElementContent(n.find(e.TITLE), this.getTitle()), this.setElementContent(n.find(e.CONTENT), this._getContent()), n.removeClass(o.FADE + " " + o.SHOW)
                    }, f._getContent = function() {
                        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                    }, f._cleanTipClass = function() {
                        var i = t(this.getTipElement()),
                            n = i.attr("class").match(a);
                        null !== n && n.length > 0 && i.removeClass(n.join(""))
                    }, c._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data("bs.popover"),
                                r = "object" == typeof n ? n : null;
                            if ((i || !/destroy|hide/.test(n)) && (i || (i = new c(this, r), t(this).data("bs.popover", i)), "string" == typeof n)) {
                                if ("undefined" == typeof i[n]) throw new Error('No method named "' + n + '"');
                                i[n]()
                            }
                        })
                    }, u(c, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return s
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return "bs.popover"
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return h
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return n
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return l
                        }
                    }]), c
                }(f);
            return t.fn[i] = r._jQueryInterface, t.fn[i].Constructor = r, t.fn[i].noConflict = function() {
                return t.fn[i] = c, r._jQueryInterface
            }, r
        }(),
        c = function() {
            var f = "scrollspy",
                l = t.fn[f],
                h = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                c = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                s = {
                    ACTIVATE: "activate.bs.scrollspy",
                    SCROLL: "scroll.bs.scrollspy",
                    LOAD_DATA_API: "load.bs.scrollspy.data-api"
                },
                i = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active"
                },
                n = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    NAV_LINKS: ".nav-link",
                    NAV_ITEMS: ".nav-item",
                    LIST_ITEMS: ".list-group-item",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                o = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                e = function() {
                    function l(i, r) {
                        var u = this;
                        this._element = i, this._scrollElement = "BODY" === i.tagName ? window : i, this._config = this._getConfig(r), this._selector = this._config.target + " " + n.NAV_LINKS + "," + this._config.target + " " + n.LIST_ITEMS + "," + this._config.target + " " + n.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(s.SCROLL, function(n) {
                            return u._process(n)
                        }), this.refresh(), this._process()
                    }
                    var e = l.prototype;
                    return e.refresh = function() {
                        var i = this,
                            f = this._scrollElement !== this._scrollElement.window ? o.POSITION : o.OFFSET,
                            n = "auto" === this._config.method ? f : this._config.method,
                            u = n === o.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function(i) {
                            var f, o = r.getSelectorFromElement(i),
                                e;
                            return (o && (f = t(o)[0]), f) && (e = f.getBoundingClientRect(), e.width || e.height) ? [t(f)[n]().top + u, o] : null
                        }).filter(function(n) {
                            return n
                        }).sort(function(n, t) {
                            return n[0] - t[0]
                        }).forEach(function(n) {
                            i._offsets.push(n[0]), i._targets.push(n[1])
                        })
                    }, e.dispose = function() {
                        t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, e._getConfig = function(n) {
                        if ("string" != typeof(n = t.extend({}, h, n)).target) {
                            var i = t(n.target).attr("id");
                            i || (i = r.getUID(f), t(n.target).attr("id", i)), n.target = "#" + i
                        }
                        return r.typeCheckConfig(f, n, c), n
                    }, e._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }, e._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, e._getOffsetHeight = function() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }, e._process = function() {
                        var t = this._getScrollTop() + this._config.offset,
                            r = this._getScrollHeight(),
                            u = this._config.offset + r - this._getOffsetHeight(),
                            i, n;
                        if (this._scrollHeight !== r && this.refresh(), t >= u) i = this._targets[this._targets.length - 1], this._activeTarget !== i && this._activate(i);
                        else {
                            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
                        }
                    }, e._activate = function(r) {
                        var f, u;
                        this._activeTarget = r, this._clear(), f = this._selector.split(","), f = f.map(function(n) {
                            return n + '[data-target="' + r + '"],' + n + '[href="' + r + '"]'
                        }), u = t(f.join(",")), u.hasClass(i.DROPDOWN_ITEM) ? (u.closest(n.DROPDOWN).find(n.DROPDOWN_TOGGLE).addClass(i.ACTIVE), u.addClass(i.ACTIVE)) : (u.addClass(i.ACTIVE), u.parents(n.NAV_LIST_GROUP).prev(n.NAV_LINKS + ", " + n.LIST_ITEMS).addClass(i.ACTIVE), u.parents(n.NAV_LIST_GROUP).prev(n.NAV_ITEMS).children(n.NAV_LINKS).addClass(i.ACTIVE)), t(this._scrollElement).trigger(s.ACTIVATE, {
                            relatedTarget: r
                        })
                    }, e._clear = function() {
                        t(this._selector).filter(n.ACTIVE).removeClass(i.ACTIVE)
                    }, l._jQueryInterface = function(n) {
                        return this.each(function() {
                            var i = t(this).data("bs.scrollspy"),
                                r = "object" == typeof n && n;
                            if (i || (i = new l(this, r), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                                if ("undefined" == typeof i[n]) throw new Error('No method named "' + n + '"');
                                i[n]()
                            }
                        })
                    }, u(l, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return h
                        }
                    }]), l
                }();
            return t(window).on(s.LOAD_DATA_API, function() {
                for (var i, u = t.makeArray(t(n.DATA_SPY)), r = u.length; r--;) i = t(u[r]), e._jQueryInterface.call(i, i.data())
            }), t.fn[f] = e._jQueryInterface, t.fn[f].Constructor = e, t.fn[f].noConflict = function() {
                return t.fn[f] = l, e._jQueryInterface
            }, e
        }(),
        h = function() {
            var o = t.fn.tab,
                e = {
                    HIDE: "hide.bs.tab",
                    HIDDEN: "hidden.bs.tab",
                    SHOW: "show.bs.tab",
                    SHOWN: "shown.bs.tab",
                    CLICK_DATA_API: "click.bs.tab.data-api"
                },
                n = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    DISABLED: "disabled",
                    FADE: "fade",
                    SHOW: "show"
                },
                i = {
                    DROPDOWN: ".dropdown",
                    NAV_LIST_GROUP: ".nav, .list-group",
                    ACTIVE: ".active",
                    ACTIVE_UL: "> li > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                f = function() {
                    function f(n) {
                        this._element = n
                    }
                    var o = f.prototype;
                    return o.show = function() {
                        var a = this,
                            o, u, f, c, v, s, h, l;
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(n.ACTIVE) || t(this._element).hasClass(n.DISABLED) || (f = t(this._element).closest(i.NAV_LIST_GROUP)[0], c = r.getSelectorFromElement(this._element), f && (v = "UL" === f.nodeName ? i.ACTIVE_UL : i.ACTIVE, u = t.makeArray(t(f).find(v)), u = u[u.length - 1]), s = t.Event(e.HIDE, {
                            relatedTarget: this._element
                        }), h = t.Event(e.SHOW, {
                            relatedTarget: u
                        }), (u && t(u).trigger(s), t(this._element).trigger(h), h.isDefaultPrevented() || s.isDefaultPrevented()) || (c && (o = t(c)[0]), this._activate(this._element, f), l = function() {
                            var i = t.Event(e.HIDDEN, {
                                    relatedTarget: a._element
                                }),
                                n = t.Event(e.SHOWN, {
                                    relatedTarget: u
                                });
                            t(u).trigger(i), t(a._element).trigger(n)
                        }, o ? this._activate(o, o.parentNode, l) : l()))
                    }, o.dispose = function() {
                        t.removeData(this._element, "bs.tab"), this._element = null
                    }, o._activate = function(u, f, e) {
                        var c, l = this,
                            o = (c = "UL" === f.nodeName ? t(f).find(i.ACTIVE_UL) : t(f).children(i.ACTIVE))[0],
                            s = e && r.supportsTransitionEnd() && o && t(o).hasClass(n.FADE),
                            h = function() {
                                return l._transitionComplete(u, o, s, e)
                            };
                        o && s ? t(o).one(r.TRANSITION_END, h).emulateTransitionEnd(150) : h(), o && t(o).removeClass(n.SHOW)
                    }, o._transitionComplete = function(u, f, e, o) {
                        var h, s;
                        f && (t(f).removeClass(n.ACTIVE), h = t(f.parentNode).find(i.DROPDOWN_ACTIVE_CHILD)[0], h && t(h).removeClass(n.ACTIVE), "tab" === f.getAttribute("role") && f.setAttribute("aria-selected", !1)), (t(u).addClass(n.ACTIVE), "tab" === u.getAttribute("role") && u.setAttribute("aria-selected", !0), e ? (r.reflow(u), t(u).addClass(n.SHOW)) : t(u).removeClass(n.FADE), u.parentNode && t(u.parentNode).hasClass(n.DROPDOWN_MENU)) && (s = t(u).closest(i.DROPDOWN)[0], s && t(s).find(i.DROPDOWN_TOGGLE).addClass(n.ACTIVE), u.setAttribute("aria-expanded", !0)), o && o()
                    }, f._jQueryInterface = function(n) {
                        return this.each(function() {
                            var r = t(this),
                                i = r.data("bs.tab");
                            if (i || (i = new f(this), r.data("bs.tab", i)), "string" == typeof n) {
                                if ("undefined" == typeof i[n]) throw new Error('No method named "' + n + '"');
                                i[n]()
                            }
                        })
                    }, u(f, null, [{
                        key: "VERSION",
                        get: function() {
                            return "4.0.0-beta.2"
                        }
                    }]), f
                }();
            return t(document).on(e.CLICK_DATA_API, i.DATA_TOGGLE, function(n) {
                n.preventDefault(), f._jQueryInterface.call(t(this), "show")
            }), t.fn.tab = f._jQueryInterface, t.fn.tab.Constructor = f, t.fn.tab.noConflict = function() {
                return t.fn.tab = o, f._jQueryInterface
            }, f
        }();
    return function() {
        if ("undefined" == typeof t) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var n = t.fn.jquery.split(" ")[0].split(".");
        if (n[0] < 2 && n[1] < 9 || 1 === n[0] && 9 === n[1] && n[2] < 1 || n[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(), n.Util = r, n.Alert = a, n.Button = y, n.Carousel = w, n.Collapse = p, n.Dropdown = l, n.Modal = o, n.Popover = s, n.Scrollspy = c, n.Tab = h, n.Tooltip = f, n
}({}, $, Popper)