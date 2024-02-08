// ==UserScript==
// @name               SoruxGPT Model Switcher
// @name:zh-CN         SoruxGPT 模型切换器
// @name:zh-TW         SoruxGPT 模型切换器
// @namespace          https://github.com/liaosunny123/SoruxGPT-ModelSwitcher
// @version            2.0.2
// @author             EpicMo
// @description        Use the GPT-4 Mobile model on the ChatGPT web interface. It also provides the ability to switch to other models for added flexibility. Generally, this script does not conflict with other popular ChatGPT scripts.
// @description:zh-CN  在 SoruxGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @description:zh-TW  在 SoruxGPT 网页端使用 GPT-4 Mobile 模型。同时，它还提供了切换到其他模型的功能，以提供更大的灵活性。一般来说，该脚本不会与其他流行的 ChatGPT 脚本产生冲突。
// @license            MIT
// @copyright          2023, EpicMo (https://github.com/liaosunny123)
// @icon               data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH1UExURUxpcXeqn3WqnHWonHSpnHWonHWpnG22knWpnHWpnHSmm3apm3SpnHWonHWpnHSonHWpnHWpm3apnXWpnHWpm3WpnP///8fc19fm43mrn67Nxf7///r8+6HFvNPk4JS8ssXb1XirnsDY0sPa1Pj7+qbHv5i/tXeqnvz9/X6uoo65roq2q+Tu7P3+/qrKwqDEu9bm4vP39qfIwPv9/NXl4ezz8Xqsn+nx73msn5/Dusnd2N7q59zp5pC6r4CwpKLFvIOxpszf2oSypsTa1fn7+/P49t/r6JrAt8LZ1L/X0d3q53aqnczf287h3Ie0qc7g3Pr8/LTQybDOxpvBuObv7c/h3PX5+Ory8ODr6OPt65G7sLnTzYWzp/n7+oi1qv7+/tTk4J7Cucve2Z3Cub7X0H+vo8LZ053CuKnJwff6+tnn4/3+/fD29XytoYWzqJe+tJa+tHapnHeqnaHEu8vf2oGxpazLw3utoMre2ZW9s7XRyu/19H2uou/186XHv6jJwNDi3sjd2OLt6u308ufw7tfm4rjTzK3MxOjw7tvp5dHi3sjd15m/tvL39q/Nxvb5+OPu64y3rIOyptnn5LbSy+Ds6eHs6tbl4cHZ0/v8/H6vo4GwpZ7Dus/h3fb6+ZK7sfT49/f6+aLFvavLw6zLxM3g28bc1pQLf2QAAAAVdFJOUwAtv5bz1PQH/dUuj5WQ/CyYwJHykqKEGP8AAAAJcEhZcwAAAHYAAAB2AU57JggAAAIcSURBVDjLhdNle9swEABgFdK0Kw7uHMfp6iTeAksaThpoUmZuV1x5zMxbx8wM7Xj7nZNjx/L2rNl9kXR6H51snwmhsWFTWQn8FSWGygKihLGmFP4ZpUXG7P5GWDcKZVEDeaKC1mfnHxUvoSV19YQOVFWTLdpiUfJ2POx/jOEzAy4tWU7KctPG95FpOjT0IA2PT80aSHEOpKQ5mSUxIA7bD2OzI5vdTNTt1QXBDvAxMT/7qkE+h8PdyoYC+DX0YgYyX4W+FwBunqYOhpp0YAl/1eN22Or5DPD8Jd6sBTiOZgYa8SfUysAMH+wWW/AK3ndbUWRADKUVMGIex1YrRGcs3uvYxcCzKVCAJTb66FZsFGDXTgHPMjD2WgWcFeCkHd/uoOshj0MD16QoLOI2+Q406ifpPXh4gisaOIXD4JiZXUoqwARx/Ab80zB7TJMzmK17nr4BK2eCOnocJGMMBBH9tO6FqYhveUJSwZsxBrpRDDltl6G3G7/8+K6AtLOZARu65hYwcLfL8s4l30EGCTzGwH6MA3Tew9u0Tp1HBmYOT+u+xZ62nl4AB91uGRQ+ZWAZ53HQqgMwgn3n6BC90+bl0nLJB51qH+QaphUD3EWuHVNuuhiQwlrPaS3n6zhEW+2G3I3TkSE3A5XalG860o/j/sSkcGAf62tS8MdvFfe3Oyf2tugyhBRB3qC/XuF/ADFWVOUHhFSXG4rXA78BYbiLJDUXqsMAAABXelRYdFJhdyBwcm9maWxlIHR5cGUgaXB0YwAAeJzj8gwIcVYoKMpPy8xJ5VIAAyMLLmMLEyMTS5MUAxMgRIA0w2QDI7NUIMvY1MjEzMQcxAfLgEigSi4A6hcRdPJCNZUAAAAASUVORK5CYII=
// @match              http*://chat*.sorux.cn*
// @require            https://cdn.jsdelivr.net/npm/vue@3.4.15/dist/vue.global.prod.js
// @grant              none
// ==/UserScript==

(function (vue) {
  'use strict';

  function d$3(u2, e2, r2) {
    let i2 = vue.ref(r2 == null ? void 0 : r2.value), f2 = vue.computed(() => u2.value !== void 0);
    return [vue.computed(() => f2.value ? u2.value : i2.value), function(t2) {
      return f2.value || (i2.value = t2), e2 == null ? void 0 : e2(t2);
    }];
  }
  let e$1 = 0;
  function n$4() {
    return ++e$1;
  }
  function t$2() {
    return n$4();
  }
  function o$1(e2) {
    var l2;
    if (e2 == null || e2.value == null)
      return null;
    let n2 = (l2 = e2.value.$el) != null ? l2 : e2.value;
    return n2 instanceof Node ? n2 : null;
  }
  function u$2(r2, n2, ...a2) {
    if (r2 in n2) {
      let e2 = n2[r2];
      return typeof e2 == "function" ? e2(...a2) : e2;
    }
    let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
  }
  var i$3 = Object.defineProperty;
  var d$2 = (t2, e2, r2) => e2 in t2 ? i$3(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
  var n$3 = (t2, e2, r2) => (d$2(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
  let s$3 = class s {
    constructor() {
      n$3(this, "current", this.detect());
      n$3(this, "currentId", 0);
    }
    set(e2) {
      this.current !== e2 && (this.currentId = 0, this.current = e2);
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === "server";
    }
    get isClient() {
      return this.current === "client";
    }
    detect() {
      return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
    }
  };
  let c$1 = new s$3();
  function i$2(r2) {
    if (c$1.isServer)
      return null;
    if (r2 instanceof Node)
      return r2.ownerDocument;
    if (r2 != null && r2.hasOwnProperty("value")) {
      let n2 = o$1(r2);
      if (n2)
        return n2.ownerDocument;
    }
    return document;
  }
  let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
  var N$2 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$2 || {}), T$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$1 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
  function E$2(e2 = document.body) {
    return e2 == null ? [] : Array.from(e2.querySelectorAll(c)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
  }
  var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
  function w$2(e2, r2 = 0) {
    var t2;
    return e2 === ((t2 = i$2(e2)) == null ? void 0 : t2.body) ? false : u$2(r2, { [0]() {
      return e2.matches(c);
    }, [1]() {
      let l2 = e2;
      for (; l2 !== null; ) {
        if (l2.matches(c))
          return true;
        l2 = l2.parentElement;
      }
      return false;
    } });
  }
  var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
    e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true), document.addEventListener("click", (e2) => {
    e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
  }, true));
  let H = ["textarea", "input"].join(",");
  function I(e2) {
    var r2, t2;
    return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H)) != null ? t2 : false;
  }
  function O$1(e2, r2 = (t2) => t2) {
    return e2.slice().sort((t2, l2) => {
      let o2 = r2(t2), i2 = r2(l2);
      if (o2 === null || i2 === null)
        return 0;
      let n2 = o2.compareDocumentPosition(i2);
      return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
  }
  function P(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o2 = [] } = {}) {
    var m2;
    let i2 = (m2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2 == null ? void 0 : e2.ownerDocument) != null ? m2 : document, n2 = Array.isArray(e2) ? t2 ? O$1(e2) : e2 : E$2(e2);
    o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l2 = l2 != null ? l2 : i2.activeElement;
    let x2 = (() => {
      if (r2 & 5)
        return 1;
      if (r2 & 10)
        return -1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), p2 = (() => {
      if (r2 & 1)
        return 0;
      if (r2 & 2)
        return Math.max(0, n2.indexOf(l2)) - 1;
      if (r2 & 4)
        return Math.max(0, n2.indexOf(l2)) + 1;
      if (r2 & 8)
        return n2.length - 1;
      throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
    })(), L = r2 & 32 ? { preventScroll: true } : {}, a2 = 0, d2 = n2.length, u2;
    do {
      if (a2 >= d2 || a2 + d2 <= 0)
        return 0;
      let s3 = p2 + a2;
      if (r2 & 16)
        s3 = (s3 + d2) % d2;
      else {
        if (s3 < 0)
          return 3;
        if (s3 >= d2)
          return 1;
      }
      u2 = n2[s3], u2 == null || u2.focus(L), a2 += x2;
    } while (u2 !== i2.activeElement);
    return r2 & 6 && I(u2) && u2.select(), 2;
  }
  function t$1() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
  }
  function i$1() {
    return /Android/gi.test(window.navigator.userAgent);
  }
  function n$2() {
    return t$1() || i$1();
  }
  function u$1(e2, t2, n2) {
    c$1.isServer || vue.watchEffect((o2) => {
      document.addEventListener(e2, t2, n2), o2(() => document.removeEventListener(e2, t2, n2));
    });
  }
  function w$1(e2, n2, t2) {
    c$1.isServer || vue.watchEffect((o2) => {
      window.addEventListener(e2, n2, t2), o2(() => window.removeEventListener(e2, n2, t2));
    });
  }
  function w(f2, m2, l2 = vue.computed(() => true)) {
    function a2(e2, r2) {
      if (!l2.value || e2.defaultPrevented)
        return;
      let t2 = r2(e2);
      if (t2 === null || !t2.getRootNode().contains(t2))
        return;
      let c2 = function o2(n2) {
        return typeof n2 == "function" ? o2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
      }(f2);
      for (let o2 of c2) {
        if (o2 === null)
          continue;
        let n2 = o2 instanceof HTMLElement ? o2 : o$1(o2);
        if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
          return;
      }
      return !w$2(t2, h.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
    }
    let u2 = vue.ref(null);
    u$1("pointerdown", (e2) => {
      var r2, t2;
      l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
    }, true), u$1("mousedown", (e2) => {
      var r2, t2;
      l2.value && (u2.value = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
    }, true), u$1("click", (e2) => {
      n$2() || u2.value && (a2(e2, () => u2.value), u2.value = null);
    }, true), u$1("touchend", (e2) => a2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), w$1("blur", (e2) => a2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
  }
  function r(t2, e2) {
    if (t2)
      return t2;
    let n2 = e2 != null ? e2 : "button";
    if (typeof n2 == "string" && n2.toLowerCase() === "button")
      return "button";
  }
  function s$2(t2, e2) {
    let n2 = vue.ref(r(t2.value.type, t2.value.as));
    return vue.onMounted(() => {
      n2.value = r(t2.value.type, t2.value.as);
    }), vue.watchEffect(() => {
      var u2;
      n2.value || o$1(e2) && o$1(e2) instanceof HTMLButtonElement && !((u2 = o$1(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
    }), n2;
  }
  var N$1 = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N$1 || {}), S$2 = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S$2 || {});
  function A$1({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
    var a2;
    let n2 = j(o2, e2), l2 = Object.assign(i2, { props: n2 });
    if (r2 || t2 & 2 && n2.static)
      return y(l2);
    if (t2 & 1) {
      let d2 = (a2 = n2.unmount) == null || a2 ? 0 : 1;
      return u$2(d2, { [0]() {
        return null;
      }, [1]() {
        return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
      } });
    }
    return y(l2);
  }
  function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
    var m2, h2;
    let { as: n2, ...l2 } = T(r2, ["unmount", "static"]), a2 = (m2 = e2.default) == null ? void 0 : m2.call(e2, o2), d2 = {};
    if (o2) {
      let u2 = false, c2 = [];
      for (let [p2, f2] of Object.entries(o2))
        typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p2);
      u2 && (d2["data-headlessui-state"] = c2.join(" "));
    }
    if (n2 === "template") {
      if (a2 = b$1(a2 != null ? a2 : []), Object.keys(l2).length > 0 || Object.keys(t2).length > 0) {
        let [u2, ...c2] = a2 != null ? a2 : [];
        if (!v$1(u2) || c2.length > 0)
          throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l2).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g, R) => R.indexOf(s3) === g).sort((s3, g) => s3.localeCompare(g)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
        let p2 = j((h2 = u2.props) != null ? h2 : {}, l2, d2), f2 = vue.cloneVNode(u2, p2, true);
        for (let s3 in p2)
          s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p2[s3]);
        return f2;
      }
      return Array.isArray(a2) && a2.length === 1 ? a2[0] : a2;
    }
    return vue.h(n2, Object.assign({}, l2, d2), { default: () => a2 });
  }
  function b$1(r2) {
    return r2.flatMap((t2) => t2.type === vue.Fragment ? b$1(t2.children) : [t2]);
  }
  function j(...r2) {
    if (r2.length === 0)
      return {};
    if (r2.length === 1)
      return r2[0];
    let t2 = {}, e2 = {};
    for (let i2 of r2)
      for (let n2 in i2)
        n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
    if (t2.disabled || t2["aria-disabled"])
      return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
    for (let i2 in e2)
      Object.assign(t2, { [i2](n2, ...l2) {
        let a2 = e2[i2];
        for (let d2 of a2) {
          if (n2 instanceof Event && n2.defaultPrevented)
            return;
          d2(n2, ...l2);
        }
      } });
    return t2;
  }
  function E$1(r2) {
    let t2 = Object.assign({}, r2);
    for (let e2 in t2)
      t2[e2] === void 0 && delete t2[e2];
    return t2;
  }
  function T(r2, t2 = []) {
    let e2 = Object.assign({}, r2);
    for (let o2 of t2)
      o2 in e2 && delete e2[o2];
    return e2;
  }
  function v$1(r2) {
    return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
  }
  var s$1 = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(s$1 || {});
  let f = vue.defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(d2, { slots: o2, attrs: i2 }) {
    return () => {
      var t2;
      let { features: e2, ...r2 } = d2, n2 = { "aria-hidden": (e2 & 2) === 2 ? true : (t2 = r2["aria-hidden"]) != null ? t2 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
      return A$1({ ourProps: n2, theirProps: r2, slot: {}, attrs: i2, slots: o2, name: "Hidden" });
    };
  } });
  let n$1 = Symbol("Context");
  var i = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(i || {});
  function l() {
    return vue.inject(n$1, null);
  }
  function t(o2) {
    vue.provide(n$1, o2);
  }
  var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
  function p(i2) {
    var t2, r2;
    let s3 = (t2 = i2 == null ? void 0 : i2.form) != null ? t2 : i2.closest("form");
    if (s3) {
      for (let n2 of s3.elements)
        if (n2 !== i2 && (n2.tagName === "INPUT" && n2.type === "submit" || n2.tagName === "BUTTON" && n2.type === "submit" || n2.nodeName === "INPUT" && n2.type === "image")) {
          n2.click();
          return;
        }
      (r2 = s3.requestSubmit) == null || r2.call(s3);
    }
  }
  function E(n2, e2, o2, r2) {
    c$1.isServer || vue.watchEffect((t2) => {
      n2 = n2 != null ? n2 : window, n2.addEventListener(e2, o2, r2), t2(() => n2.removeEventListener(e2, o2, r2));
    });
  }
  var d$1 = ((r2) => (r2[r2.Forwards = 0] = "Forwards", r2[r2.Backwards = 1] = "Backwards", r2))(d$1 || {});
  function n() {
    let o2 = vue.ref(0);
    return w$1("keydown", (e2) => {
      e2.key === "Tab" && (o2.value = e2.shiftKey ? 1 : 0);
    }), o2;
  }
  function N({ defaultContainers: o2 = [], portals: i2, mainTreeNodeRef: H2 } = {}) {
    let t2 = vue.ref(null), r2 = i$2(t2);
    function u2() {
      var l2, f2, a2;
      let n2 = [];
      for (let e2 of o2)
        e2 !== null && (e2 instanceof HTMLElement ? n2.push(e2) : "value" in e2 && e2.value instanceof HTMLElement && n2.push(e2.value));
      if (i2 != null && i2.value)
        for (let e2 of i2.value)
          n2.push(e2);
      for (let e2 of (l2 = r2 == null ? void 0 : r2.querySelectorAll("html > *, body > *")) != null ? l2 : [])
        e2 !== document.body && e2 !== document.head && e2 instanceof HTMLElement && e2.id !== "headlessui-portal-root" && (e2.contains(o$1(t2)) || e2.contains((a2 = (f2 = o$1(t2)) == null ? void 0 : f2.getRootNode()) == null ? void 0 : a2.host) || n2.some((M) => e2.contains(M)) || n2.push(e2));
      return n2;
    }
    return { resolveContainers: u2, contains(n2) {
      return u2().some((l2) => l2.contains(n2));
    }, mainTreeNodeRef: t2, MainTreeNode() {
      return H2 != null ? null : vue.h(f, { features: s$1.Hidden, ref: t2 });
    } };
  }
  function v() {
    let o2 = vue.ref(null);
    return { mainTreeNodeRef: o2, MainTreeNode() {
      return vue.h(f, { features: s$1.Hidden, ref: o2 });
    } };
  }
  let e = Symbol("ForcePortalRootContext");
  function s2() {
    return vue.inject(e, false);
  }
  vue.defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o2, { slots: t2, attrs: r2 }) {
    return vue.provide(e, o2.force), () => {
      let { force: f2, ...n2 } = o2;
      return A$1({ theirProps: n2, ourProps: {}, slot: {}, slots: t2, attrs: r2, name: "ForcePortalRoot" });
    };
  } });
  let u = Symbol("DescriptionContext");
  function b() {
    let t2 = vue.inject(u, null);
    if (t2 === null)
      throw new Error("Missing parent");
    return t2;
  }
  function S$1({ slot: t2 = vue.ref({}), name: i2 = "Description", props: o2 = {} } = {}) {
    let e2 = vue.ref([]);
    function s3(n2) {
      return e2.value.push(n2), () => {
        let r2 = e2.value.indexOf(n2);
        r2 !== -1 && e2.value.splice(r2, 1);
      };
    }
    return vue.provide(u, { register: s3, slot: t2, name: i2, props: o2 }), vue.computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
  }
  vue.defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t$2()}` } }, setup(t2, { attrs: i2, slots: o2 }) {
    let e2 = b();
    return vue.onMounted(() => vue.onUnmounted(e2.register(t2.id))), () => {
      let { name: s3 = "Description", slot: n2 = vue.ref({}), props: r2 = {} } = e2, { id: d2, ...l2 } = t2, c2 = { ...Object.entries(r2).reduce((f2, [a2, g]) => Object.assign(f2, { [a2]: vue.unref(g) }), {}), id: d2 };
      return A$1({ ourProps: c2, theirProps: l2, slot: n2.value, attrs: i2, slots: o2, name: s3 });
    };
  } });
  function x(r2) {
    let e2 = i$2(r2);
    if (!e2) {
      if (r2 === null)
        return null;
      throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${r2}`);
    }
    let u2 = e2.getElementById("headlessui-portal-root");
    if (u2)
      return u2;
    let t2 = e2.createElement("div");
    return t2.setAttribute("id", "headlessui-portal-root"), e2.body.appendChild(t2);
  }
  vue.defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(r2, { slots: e2, attrs: u2 }) {
    let t2 = vue.ref(null), i2 = vue.computed(() => i$2(t2)), l2 = s2(), n2 = vue.inject(C, null), o2 = vue.ref(l2 === true || n2 == null ? x(t2.value) : n2.resolveTarget()), d2 = vue.ref(false);
    vue.onMounted(() => {
      d2.value = true;
    }), vue.watchEffect(() => {
      l2 || n2 != null && (o2.value = n2.resolveTarget());
    });
    let c2 = vue.inject(m, null), v2 = false, H2 = vue.getCurrentInstance();
    return vue.watch(t2, () => {
      if (v2 || !c2)
        return;
      let a2 = o$1(t2);
      a2 && (vue.onUnmounted(c2.register(a2), H2), v2 = true);
    }), vue.onUnmounted(() => {
      var g, P2;
      let a2 = (g = i2.value) == null ? void 0 : g.getElementById("headlessui-portal-root");
      a2 && o2.value === a2 && o2.value.children.length <= 0 && ((P2 = o2.value.parentElement) == null || P2.removeChild(o2.value));
    }), () => {
      if (!d2.value || o2.value === null)
        return null;
      let a2 = { ref: t2, "data-headlessui-portal": "" };
      return vue.h(vue.Teleport, { to: o2.value }, A$1({ ourProps: a2, theirProps: r2, slot: {}, attrs: u2, slots: e2, name: "Portal" }));
    };
  } });
  let m = Symbol("PortalParentContext");
  function A() {
    let r2 = vue.inject(m, null), e2 = vue.ref([]);
    function u2(l2) {
      return e2.value.push(l2), r2 && r2.register(l2), () => t2(l2);
    }
    function t2(l2) {
      let n2 = e2.value.indexOf(l2);
      n2 !== -1 && e2.value.splice(n2, 1), r2 && r2.unregister(l2);
    }
    let i2 = { register: u2, unregister: t2, portals: e2 };
    return [e2, vue.defineComponent({ name: "PortalWrapper", setup(l2, { slots: n2 }) {
      return vue.provide(m, i2), () => {
        var o2;
        return (o2 = n2.default) == null ? void 0 : o2.call(n2);
      };
    } })];
  }
  let C = Symbol("PortalGroupContext");
  vue.defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(r2, { attrs: e2, slots: u2 }) {
    let t2 = vue.reactive({ resolveTarget() {
      return r2.target;
    } });
    return vue.provide(C, t2), () => {
      let { target: i2, ...l2 } = r2;
      return A$1({ theirProps: l2, ourProps: {}, slot: {}, attrs: e2, slots: u2, name: "PortalGroup" });
    };
  } });
  var Se = ((p2) => (p2[p2.Open = 0] = "Open", p2[p2.Closed = 1] = "Closed", p2))(Se || {});
  let re = Symbol("PopoverContext");
  function V(P2) {
    let b2 = vue.inject(re, null);
    if (b2 === null) {
      let p2 = new Error(`<${P2} /> is missing a parent <${ye.name} /> component.`);
      throw Error.captureStackTrace && Error.captureStackTrace(p2, V), p2;
    }
    return b2;
  }
  let le = Symbol("PopoverGroupContext");
  function ae() {
    return vue.inject(le, null);
  }
  let ue = Symbol("PopoverPanelContext");
  function ge() {
    return vue.inject(ue, null);
  }
  let ye = vue.defineComponent({ name: "Popover", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P2, { slots: b2, attrs: p2, expose: h$2 }) {
    var v2;
    let t$12 = vue.ref(null);
    h$2({ el: t$12, $el: t$12 });
    let e2 = vue.ref(1), c2 = vue.ref(null), d2 = vue.ref(null), O2 = vue.ref(null), f2 = vue.ref(null), y2 = vue.computed(() => i$2(t$12)), M = vue.computed(() => {
      var Y, Z;
      if (!o$1(c2) || !o$1(f2))
        return false;
      for (let B of document.querySelectorAll("body > *"))
        if (Number(B == null ? void 0 : B.contains(o$1(c2))) ^ Number(B == null ? void 0 : B.contains(o$1(f2))))
          return true;
      let o2 = E$2(), a2 = o2.indexOf(o$1(c2)), g = (a2 + o2.length - 1) % o2.length, E2 = (a2 + 1) % o2.length, N2 = o2[g], $ = o2[E2];
      return !((Y = o$1(f2)) != null && Y.contains(N2)) && !((Z = o$1(f2)) != null && Z.contains($));
    }), l2 = { popoverState: e2, buttonId: vue.ref(null), panelId: vue.ref(null), panel: f2, button: c2, isPortalled: M, beforePanelSentinel: d2, afterPanelSentinel: O2, togglePopover() {
      e2.value = u$2(e2.value, { [0]: 1, [1]: 0 });
    }, closePopover() {
      e2.value !== 1 && (e2.value = 1);
    }, close(o2) {
      l2.closePopover();
      let a2 = (() => o2 ? o2 instanceof HTMLElement ? o2 : o2.value instanceof HTMLElement ? o$1(o2) : o$1(l2.button) : o$1(l2.button))();
      a2 == null || a2.focus();
    } };
    vue.provide(re, l2), t(vue.computed(() => u$2(e2.value, { [0]: i.Open, [1]: i.Closed })));
    let m2 = { buttonId: l2.buttonId, panelId: l2.panelId, close() {
      l2.closePopover();
    } }, S2 = ae(), I2 = S2 == null ? void 0 : S2.registerPopover, [s3, u2] = A(), i$12 = N({ mainTreeNodeRef: S2 == null ? void 0 : S2.mainTreeNodeRef, portals: s3, defaultContainers: [c2, f2] });
    function n2() {
      var o2, a2, g, E2;
      return (E2 = S2 == null ? void 0 : S2.isFocusWithinPopoverGroup()) != null ? E2 : ((o2 = y2.value) == null ? void 0 : o2.activeElement) && (((a2 = o$1(c2)) == null ? void 0 : a2.contains(y2.value.activeElement)) || ((g = o$1(f2)) == null ? void 0 : g.contains(y2.value.activeElement)));
    }
    return vue.watchEffect(() => I2 == null ? void 0 : I2(m2)), E((v2 = y2.value) == null ? void 0 : v2.defaultView, "focus", (o2) => {
      var a2, g;
      o2.target !== window && o2.target instanceof HTMLElement && e2.value === 0 && (n2() || c2 && f2 && (i$12.contains(o2.target) || (a2 = o$1(l2.beforePanelSentinel)) != null && a2.contains(o2.target) || (g = o$1(l2.afterPanelSentinel)) != null && g.contains(o2.target) || l2.closePopover()));
    }, true), w(i$12.resolveContainers, (o2, a2) => {
      var g;
      l2.closePopover(), w$2(a2, h.Loose) || (o2.preventDefault(), (g = o$1(c2)) == null || g.focus());
    }, vue.computed(() => e2.value === 0)), () => {
      let o2 = { open: e2.value === 0, close: l2.close };
      return vue.h(vue.Fragment, [vue.h(u2, {}, () => A$1({ theirProps: { ...P2, ...p2 }, ourProps: { ref: t$12 }, slot: o2, slots: b2, attrs: p2, name: "Popover" })), vue.h(i$12.MainTreeNode)]);
    };
  } }), Ge = vue.defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t$2()}` } }, inheritAttrs: false, setup(P$1, { attrs: b2, slots: p2, expose: h2 }) {
    let t2 = V("PopoverButton"), e2 = vue.computed(() => i$2(t2.button));
    h2({ el: t2.button, $el: t2.button }), vue.onMounted(() => {
      t2.buttonId.value = P$1.id;
    }), vue.onUnmounted(() => {
      t2.buttonId.value = null;
    });
    let c2 = ae(), d2 = c2 == null ? void 0 : c2.closeOthers, O2 = ge(), f$1 = vue.computed(() => O2 === null ? false : O2.value === t2.panelId.value), y2 = vue.ref(null), M = `headlessui-focus-sentinel-${t$2()}`;
    f$1.value || vue.watchEffect(() => {
      t2.button.value = o$1(y2);
    });
    let l2 = s$2(vue.computed(() => ({ as: P$1.as, type: b2.type })), y2);
    function m2(n2) {
      var v2, o$2, a2, g, E2;
      if (f$1.value) {
        if (t2.popoverState.value === 1)
          return;
        switch (n2.key) {
          case o.Space:
          case o.Enter:
            n2.preventDefault(), (o$2 = (v2 = n2.target).click) == null || o$2.call(v2), t2.closePopover(), (a2 = o$1(t2.button)) == null || a2.focus();
            break;
        }
      } else
        switch (n2.key) {
          case o.Space:
          case o.Enter:
            n2.preventDefault(), n2.stopPropagation(), t2.popoverState.value === 1 && (d2 == null || d2(t2.buttonId.value)), t2.togglePopover();
            break;
          case o.Escape:
            if (t2.popoverState.value !== 0)
              return d2 == null ? void 0 : d2(t2.buttonId.value);
            if (!o$1(t2.button) || (g = e2.value) != null && g.activeElement && !((E2 = o$1(t2.button)) != null && E2.contains(e2.value.activeElement)))
              return;
            n2.preventDefault(), n2.stopPropagation(), t2.closePopover();
            break;
        }
    }
    function S2(n2) {
      f$1.value || n2.key === o.Space && n2.preventDefault();
    }
    function I2(n2) {
      var v2, o2;
      P$1.disabled || (f$1.value ? (t2.closePopover(), (v2 = o$1(t2.button)) == null || v2.focus()) : (n2.preventDefault(), n2.stopPropagation(), t2.popoverState.value === 1 && (d2 == null || d2(t2.buttonId.value)), t2.togglePopover(), (o2 = o$1(t2.button)) == null || o2.focus()));
    }
    function s3(n2) {
      n2.preventDefault(), n2.stopPropagation();
    }
    let u2 = n();
    function i2() {
      let n2 = o$1(t2.panel);
      if (!n2)
        return;
      function v2() {
        u$2(u2.value, { [d$1.Forwards]: () => P(n2, N$2.First), [d$1.Backwards]: () => P(n2, N$2.Last) }) === T$1.Error && P(E$2().filter((a2) => a2.dataset.headlessuiFocusGuard !== "true"), u$2(u2.value, { [d$1.Forwards]: N$2.Next, [d$1.Backwards]: N$2.Previous }), { relativeTo: o$1(t2.button) });
      }
      v2();
    }
    return () => {
      let n2 = t2.popoverState.value === 0, v2 = { open: n2 }, { id: o2, ...a2 } = P$1, g = f$1.value ? { ref: y2, type: l2.value, onKeydown: m2, onClick: I2 } : { ref: y2, id: o2, type: l2.value, "aria-expanded": t2.popoverState.value === 0, "aria-controls": o$1(t2.panel) ? t2.panelId.value : void 0, disabled: P$1.disabled ? true : void 0, onKeydown: m2, onKeyup: S2, onClick: I2, onMousedown: s3 };
      return vue.h(vue.Fragment, [A$1({ ourProps: g, theirProps: { ...b2, ...a2 }, slot: v2, attrs: b2, slots: p2, name: "PopoverButton" }), n2 && !f$1.value && t2.isPortalled.value && vue.h(f, { id: M, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: i2 })]);
    };
  } });
  vue.defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(P2, { attrs: b2, slots: p2 }) {
    let h2 = V("PopoverOverlay"), t2 = `headlessui-popover-overlay-${t$2()}`, e2 = l(), c2 = vue.computed(() => e2 !== null ? (e2.value & i.Open) === i.Open : h2.popoverState.value === 0);
    function d2() {
      h2.closePopover();
    }
    return () => {
      let O2 = { open: h2.popoverState.value === 0 };
      return A$1({ ourProps: { id: t2, "aria-hidden": true, onClick: d2 }, theirProps: P2, slot: O2, attrs: b2, slots: p2, features: N$1.RenderStrategy | N$1.Static, visible: c2.value, name: "PopoverOverlay" });
    };
  } });
  let je = vue.defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t$2()}` } }, inheritAttrs: false, setup(P$1, { attrs: b2, slots: p2, expose: h2 }) {
    let { focus: t2 } = P$1, e2 = V("PopoverPanel"), c2 = vue.computed(() => i$2(e2.panel)), d2 = `headlessui-focus-sentinel-before-${t$2()}`, O2 = `headlessui-focus-sentinel-after-${t$2()}`;
    h2({ el: e2.panel, $el: e2.panel }), vue.onMounted(() => {
      e2.panelId.value = P$1.id;
    }), vue.onUnmounted(() => {
      e2.panelId.value = null;
    }), vue.provide(ue, e2.panelId), vue.watchEffect(() => {
      var u2, i2;
      if (!t2 || e2.popoverState.value !== 0 || !e2.panel)
        return;
      let s3 = (u2 = c2.value) == null ? void 0 : u2.activeElement;
      (i2 = o$1(e2.panel)) != null && i2.contains(s3) || P(o$1(e2.panel), N$2.First);
    });
    let f$1 = l(), y2 = vue.computed(() => f$1 !== null ? (f$1.value & i.Open) === i.Open : e2.popoverState.value === 0);
    function M(s3) {
      var u2, i2;
      switch (s3.key) {
        case o.Escape:
          if (e2.popoverState.value !== 0 || !o$1(e2.panel) || c2.value && !((u2 = o$1(e2.panel)) != null && u2.contains(c2.value.activeElement)))
            return;
          s3.preventDefault(), s3.stopPropagation(), e2.closePopover(), (i2 = o$1(e2.button)) == null || i2.focus();
          break;
      }
    }
    function l$1(s3) {
      var i2, n2, v2, o2, a2;
      let u2 = s3.relatedTarget;
      u2 && o$1(e2.panel) && ((i2 = o$1(e2.panel)) != null && i2.contains(u2) || (e2.closePopover(), ((v2 = (n2 = o$1(e2.beforePanelSentinel)) == null ? void 0 : n2.contains) != null && v2.call(n2, u2) || (a2 = (o2 = o$1(e2.afterPanelSentinel)) == null ? void 0 : o2.contains) != null && a2.call(o2, u2)) && u2.focus({ preventScroll: true })));
    }
    let m2 = n();
    function S2() {
      let s3 = o$1(e2.panel);
      if (!s3)
        return;
      function u2() {
        u$2(m2.value, { [d$1.Forwards]: () => {
          var n2;
          P(s3, N$2.First) === T$1.Error && ((n2 = o$1(e2.afterPanelSentinel)) == null || n2.focus());
        }, [d$1.Backwards]: () => {
          var i2;
          (i2 = o$1(e2.button)) == null || i2.focus({ preventScroll: true });
        } });
      }
      u2();
    }
    function I2() {
      let s3 = o$1(e2.panel);
      if (!s3)
        return;
      function u2() {
        u$2(m2.value, { [d$1.Forwards]: () => {
          let i2 = o$1(e2.button), n2 = o$1(e2.panel);
          if (!i2)
            return;
          let v2 = E$2(), o2 = v2.indexOf(i2), a2 = v2.slice(0, o2 + 1), E2 = [...v2.slice(o2 + 1), ...a2];
          for (let N2 of E2.slice())
            if (N2.dataset.headlessuiFocusGuard === "true" || n2 != null && n2.contains(N2)) {
              let $ = E2.indexOf(N2);
              $ !== -1 && E2.splice($, 1);
            }
          P(E2, N$2.First, { sorted: false });
        }, [d$1.Backwards]: () => {
          var n2;
          P(s3, N$2.Previous) === T$1.Error && ((n2 = o$1(e2.button)) == null || n2.focus());
        } });
      }
      u2();
    }
    return () => {
      let s3 = { open: e2.popoverState.value === 0, close: e2.close }, { id: u2, focus: i2, ...n2 } = P$1, v2 = { ref: e2.panel, id: u2, onKeydown: M, onFocusout: t2 && e2.popoverState.value === 0 ? l$1 : void 0, tabIndex: -1 };
      return A$1({ ourProps: v2, theirProps: { ...b2, ...n2 }, attrs: b2, slot: s3, slots: { ...p2, default: (...o2) => {
        var a2;
        return [vue.h(vue.Fragment, [y2.value && e2.isPortalled.value && vue.h(f, { id: d2, ref: e2.beforePanelSentinel, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: S2 }), (a2 = p2.default) == null ? void 0 : a2.call(p2, ...o2), y2.value && e2.isPortalled.value && vue.h(f, { id: O2, ref: e2.afterPanelSentinel, features: s$1.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: I2 })])];
      } }, features: N$1.RenderStrategy | N$1.Static, visible: y2.value, name: "PopoverPanel" });
    };
  } });
  vue.defineComponent({ name: "PopoverGroup", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" } }, setup(P2, { attrs: b2, slots: p2, expose: h2 }) {
    let t2 = vue.ref(null), e2 = vue.shallowRef([]), c2 = vue.computed(() => i$2(t2)), d2 = v();
    h2({ el: t2, $el: t2 });
    function O2(l2) {
      let m2 = e2.value.indexOf(l2);
      m2 !== -1 && e2.value.splice(m2, 1);
    }
    function f2(l2) {
      return e2.value.push(l2), () => {
        O2(l2);
      };
    }
    function y2() {
      var S2;
      let l2 = c2.value;
      if (!l2)
        return false;
      let m2 = l2.activeElement;
      return (S2 = o$1(t2)) != null && S2.contains(m2) ? true : e2.value.some((I2) => {
        var s3, u2;
        return ((s3 = l2.getElementById(I2.buttonId.value)) == null ? void 0 : s3.contains(m2)) || ((u2 = l2.getElementById(I2.panelId.value)) == null ? void 0 : u2.contains(m2));
      });
    }
    function M(l2) {
      for (let m2 of e2.value)
        m2.buttonId.value !== l2 && m2.close();
    }
    return vue.provide(le, { registerPopover: f2, unregisterPopover: O2, isFocusWithinPopoverGroup: y2, closeOthers: M, mainTreeNodeRef: d2.mainTreeNodeRef }), () => vue.h(vue.Fragment, [A$1({ ourProps: { ref: t2 }, theirProps: { ...P2, ...b2 }, slot: {}, attrs: b2, slots: p2, name: "PopoverGroup" }), vue.h(d2.MainTreeNode)]);
  } });
  let a = Symbol("LabelContext");
  function d() {
    let t2 = vue.inject(a, null);
    if (t2 === null) {
      let n2 = new Error("You used a <Label /> component, but it is not inside a parent.");
      throw Error.captureStackTrace && Error.captureStackTrace(n2, d), n2;
    }
    return t2;
  }
  function O({ slot: t2 = {}, name: n2 = "Label", props: i2 = {} } = {}) {
    let e2 = vue.ref([]);
    function l2(r2) {
      return e2.value.push(r2), () => {
        let o2 = e2.value.indexOf(r2);
        o2 !== -1 && e2.value.splice(o2, 1);
      };
    }
    return vue.provide(a, { register: l2, slot: t2, name: n2, props: i2 }), vue.computed(() => e2.value.length > 0 ? e2.value.join(" ") : void 0);
  }
  vue.defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t$2()}` } }, setup(t2, { slots: n2, attrs: i2 }) {
    let e2 = d();
    return vue.onMounted(() => vue.onUnmounted(e2.register(t2.id))), () => {
      let { name: l2 = "Label", slot: r2 = {}, props: o2 = {} } = e2, { id: p2, passive: c2, ...u2 } = t2, s3 = { ...Object.entries(o2).reduce((f2, [b2, g]) => Object.assign(f2, { [b2]: vue.unref(g) }), {}), id: p2 };
      return c2 && (delete s3.onClick, delete s3.htmlFor, delete u2.onClick), A$1({ ourProps: s3, theirProps: u2, slot: r2, attrs: i2, slots: n2, name: l2 });
    };
  } });
  let S = Symbol("GroupContext");
  vue.defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l2, { slots: p2, attrs: a2 }) {
    let o2 = vue.ref(null), f2 = O({ name: "SwitchLabel", props: { htmlFor: vue.computed(() => {
      var r2;
      return (r2 = o2.value) == null ? void 0 : r2.id;
    }), onClick(r2) {
      o2.value && (r2.currentTarget.tagName === "LABEL" && r2.preventDefault(), o2.value.click(), o2.value.focus({ preventScroll: true }));
    } } }), t2 = S$1({ name: "SwitchDescription" });
    return vue.provide(S, { switchRef: o2, labelledby: f2, describedby: t2 }), () => A$1({ theirProps: l2, ourProps: {}, slot: {}, slots: p2, attrs: a2, name: "SwitchGroup" });
  } });
  let ie = vue.defineComponent({ name: "Switch", emits: { "update:modelValue": (l2) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, form: { type: String, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t$2()}` } }, inheritAttrs: false, setup(l2, { emit: p$1, attrs: a2, slots: o$2, expose: f$1 }) {
    let t2 = vue.inject(S, null), [i2, r2] = d$3(vue.computed(() => l2.modelValue), (e2) => p$1("update:modelValue", e2), vue.computed(() => l2.defaultChecked));
    function s3() {
      r2(!i2.value);
    }
    let w2 = vue.ref(null), u2 = t2 === null ? w2 : t2.switchRef, g = s$2(vue.computed(() => ({ as: l2.as, type: a2.type })), u2);
    f$1({ el: u2, $el: u2 });
    function k(e2) {
      e2.preventDefault(), s3();
    }
    function C2(e2) {
      e2.key === o.Space ? (e2.preventDefault(), s3()) : e2.key === o.Enter && p(e2.currentTarget);
    }
    function E2(e2) {
      e2.preventDefault();
    }
    let c2 = vue.computed(() => {
      var e2, n2;
      return (n2 = (e2 = o$1(u2)) == null ? void 0 : e2.closest) == null ? void 0 : n2.call(e2, "form");
    });
    return vue.onMounted(() => {
      vue.watch([c2], () => {
        if (!c2.value || l2.defaultChecked === void 0)
          return;
        function e2() {
          r2(l2.defaultChecked);
        }
        return c2.value.addEventListener("reset", e2), () => {
          var n2;
          (n2 = c2.value) == null || n2.removeEventListener("reset", e2);
        };
      }, { immediate: true });
    }), () => {
      let { id: e2, name: n2, value: L, form: D, ...R } = l2, K = { checked: i2.value }, x2 = { id: e2, ref: u2, role: "switch", type: g.value, tabIndex: 0, "aria-checked": i2.value, "aria-labelledby": t2 == null ? void 0 : t2.labelledby.value, "aria-describedby": t2 == null ? void 0 : t2.describedby.value, onClick: k, onKeyup: C2, onKeypress: E2 };
      return vue.h(vue.Fragment, [n2 != null && i2.value != null ? vue.h(f, E$1({ features: s$1.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i2.value, form: D, name: n2, value: L })) : null, A$1({ ourProps: x2, theirProps: { ...a2, ...T(R, ["modelValue", "defaultChecked"]) }, slot: K, attrs: a2, slots: o$2, name: "Switch" })]);
    };
  } });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$5 = {};
  const _hoisted_1$4 = { class: "my-1.5 border-b border-token-border-light" };
  function _sfc_render$3(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4);
  }
  const DividerItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
  const _sfc_main$4 = {};
  const _hoisted_1$3 = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$3 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M2.16479 10.0003C2.16479 5.67409 5.6719 2.16699 9.99813 2.16699C14.3244 2.16699 17.8315 5.67409 17.8315 10.0003C17.8315 14.3266 14.3244 17.8337 9.99813 17.8337C5.6719 17.8337 2.16479 14.3266 2.16479 10.0003Z",
    stroke: "currentColor",
    "stroke-opacity": "0.16",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1);
  const _hoisted_3$3 = [
    _hoisted_2$3
  ];
  function _sfc_render$2(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
  }
  const CircleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
  const _sfc_main$3 = {};
  const _hoisted_1$2 = {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  };
  const _hoisted_2$2 = /* @__PURE__ */ vue.createElementVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M1.66479 10.0003C1.66479 5.39795 5.39575 1.66699 9.99813 1.66699C14.6005 1.66699 18.3315 5.39795 18.3315 10.0003C18.3315 14.6027 14.6005 18.3337 9.99813 18.3337C5.39575 18.3337 1.66479 14.6027 1.66479 10.0003ZM13.3944 6.61049C13.7708 6.87535 13.8612 7.39518 13.5963 7.77157L9.63797 13.3966C9.49241 13.6034 9.26078 13.733 9.00835 13.7487C8.75591 13.7645 8.50998 13.6647 8.33984 13.4776L6.25651 11.1859C5.94692 10.8453 5.97202 10.3183 6.31257 10.0087C6.65311 9.69912 7.18015 9.72422 7.48974 10.0648L8.87348 11.5869L12.2333 6.81241C12.4982 6.43603 13.018 6.34562 13.3944 6.61049Z",
    fill: "currentColor"
  }, null, -1);
  const _hoisted_3$2 = [
    _hoisted_2$2
  ];
  function _sfc_render$1(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, _hoisted_3$2);
  }
  const CircleCheckIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
  const _hoisted_1$1 = { class: "flex gap-2 m-1.5 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-black/5 dark:hover:bg-white/5 radix-disabled:pointer-events-none radix-disabled:opacity-50 group !pr-3 !opacity-100" };
  const _hoisted_2$1 = { class: "flex grow items-center justify-between gap-2" };
  const _hoisted_3$1 = { class: "flex items-center gap-3" };
  const _hoisted_4 = { class: "text-token-text-tertiary" };
  const _sfc_main$2 = {
    __name: "ModelItem",
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      isSelected: {
        type: Boolean,
        default: false
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
          vue.createElementVNode("div", _hoisted_2$1, [
            vue.createElementVNode("div", null, [
              vue.createElementVNode("div", _hoisted_3$1, [
                vue.createElementVNode("div", null, [
                  vue.createTextVNode(vue.toDisplayString(__props.title) + " ", 1),
                  vue.createElementVNode("div", _hoisted_4, vue.toDisplayString(__props.description), 1)
                ])
              ])
            ]),
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(__props.isSelected ? CircleCheckIcon : CircleIcon), { class: "icon-md block shrink-0" }))
          ])
        ]);
      };
    }
  };
  const _sfc_main$1 = {};
  const _hoisted_1 = {
    width: "16",
    height: "17",
    viewBox: "0 0 16 17",
    fill: "none"
  };
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("path", {
    d: "M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, null, -1);
  const _hoisted_3 = [
    _hoisted_2
  ];
  function _sfc_render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("svg", _hoisted_1, _hoisted_3);
  }
  const ChevronDownIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
  const extraModels = [
    {
      slug: "text-davinci-002-render-sha-mobile",
      title: "GPT-3.5 (Mobile)",
      description: "An experimental model that does not guarantee usability",
      tags: ["gpt3.5", "mobile", "unofficial"]
    },
    {
      slug: "gpt-4-mobile",
      title: "GPT-4 (Mobile)",
      description: "An experimental model that does not guarantee usability",
      tags: ["gpt4", "mobile", "unofficial"]
    }
  ];
  const models = vue.reactive({
    all: [],
    update(newModels) {
      this.all = newModels.concat(
        extraModels.filter(
          (model) => newModels.some((m2) => m2.tags.includes("gpt4")) || !model.tags.includes("gpt4")
        )
      );
    }
  });
  const LOCAL_STORAGE_KEY = "github.com/liaosunny123/SoruxGPT-ModelSwitcher";
  function getInitialState() {
    const defaultState = {
      isEnabled: false,
      selectedModelSlug: "text-davinci-002-render-sha"
    };
    try {
      const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      console.warn(
        "[SoruxGPT_Model_Switcher]",
        "Failed to restore state from localStorage, falling back to default state"
      );
    }
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultState));
    return defaultState;
  }
  const state = vue.reactive(getInitialState());
  vue.watch(state, (newState) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newState));
  });
  const _sfc_main = {
    __name: "App",
    setup(__props) {
      const anchorPopoverPanel = vue.ref();
      const stylePopoverPanel = vue.ref();
      const currentBaseDomain = vue.ref("");
      vue.onMounted(() => {
        currentBaseDomain.value = `${window.location.protocol}//${window.location.host}`;
      });
      const groupedModels = vue.computed(() => {
        return [
          models.all.filter(
            (model) => model.tags.includes("gpt3.5") && !model.tags.includes("unofficial")
          ),
          models.all.filter((model) => model.tags.includes("gpt4") && !model.tags.includes("unofficial")),
          models.all.filter((model) => model.tags.includes("unofficial"))
        ].filter((group) => group.length > 0);
      });
      const selectModel = (slug) => {
        const isOldGpt4 = state.selectedModelSlug.startsWith("gpt-4");
        const isNewGpt4 = slug.startsWith("gpt-4");
        state.selectedModelSlug = slug;
        if (!isOldGpt4 && isNewGpt4) {
          const newUrl = `${currentBaseDomain.value}?model=gpt-4`;
          window.location.href = newUrl;
        }
      };
      vue.onMounted(async () => {
        const rect = anchorPopoverPanel.value.getBoundingClientRect();
        stylePopoverPanel.value = {
          position: "fixed",
          right: `${document.documentElement.clientWidth - rect.right}px`,
          top: `${rect.bottom}px`
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createVNode(vue.unref(ie), {
            modelValue: vue.unref(state).isEnabled,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(state).isEnabled = $event),
            class: vue.normalizeClass([vue.unref(state).isEnabled ? "bg-green-600" : "bg-gray-200", "cursor-pointer relative shrink-0 rounded-full h-[20px] w-[32px]"])
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("span", {
                style: vue.normalizeStyle(vue.unref(state).isEnabled ? "transform: translateX(14px)" : "transform: translateX(0.125rem)"),
                class: "flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform bg-white shadow-[0_1px_2px_rgba(0,0,0,0.45)] h-[16px] w-[16px]"
              }, null, 4)
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          vue.createVNode(vue.unref(ye), { class: "relative" }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(Ge), { class: "group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-black/10 dark:radix-state-open:bg-black/20" }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(" SoruxGPT Model Switcher "),
                  vue.createVNode(ChevronDownIcon, { class: "text-token-text-tertiary" })
                ]),
                _: 1
              }),
              vue.createElementVNode("div", {
                ref_key: "anchorPopoverPanel",
                ref: anchorPopoverPanel,
                class: "absolute right-0"
              }, null, 512),
              (vue.openBlock(), vue.createBlock(vue.Teleport, { to: "body" }, [
                vue.createVNode(vue.Transition, {
                  "enter-active-class": "transition duration-200 ease-out",
                  "enter-from-class": "translate-y-1 opacity-0",
                  "enter-to-class": "translate-y-0 opacity-100",
                  "leave-active-class": "transition duration-150 ease-in",
                  "leave-from-class": "translate-y-0 opacity-100",
                  "leave-to-class": "translate-y-1 opacity-0"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(je), {
                      class: "mt-2 min-w-[340px] max-w-xs overflow-hidden rounded-lg border border-gray-100 bg-token-surface-primary shadow-lg dark:border-gray-700",
                      style: vue.normalizeStyle(stylePopoverPanel.value)
                    }, {
                      default: vue.withCtx(() => [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(groupedModels.value, (group, index) => {
                          return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
                            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(group, (model) => {
                              return vue.openBlock(), vue.createBlock(_sfc_main$2, {
                                key: model.slug,
                                title: model.title,
                                description: model.description,
                                isSelected: model.slug === vue.unref(state).selectedModelSlug,
                                onClick: ($event) => selectModel(model.slug)
                              }, null, 8, ["title", "description", "isSelected", "onClick"]);
                            }), 128)),
                            index < groupedModels.value.length - 1 ? (vue.openBlock(), vue.createBlock(DividerItem, { key: index })) : vue.createCommentVNode("", true)
                          ], 64);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["style"])
                  ]),
                  _: 1
                })
              ]))
            ]),
            _: 1
          })
        ], 64);
      };
    }
  };
  let app = null;
  function mountApp(mountPoint) {
    if (app) {
      app.unmount();
      app = null;
    }
    const rootContainer = document.createElement("div");
    rootContainer.className = "flex gap-2 pr-1 items-center";
    rootContainer.id = "soruxgpt-model-switcher";
    const wrapper = document.createElement("div");
    wrapper.className = "flex items-center gap-2";
    wrapper.appendChild(rootContainer);
    wrapper.appendChild(mountPoint.removeChild(mountPoint.lastChild));
    mountPoint.appendChild(wrapper);
    app = vue.createApp(_sfc_main);
    app.mount(rootContainer);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        const mountPoint = document.querySelector("main div.sticky");
        if (mountPoint && !document.getElementById("chatgpt-model-switcher")) {
          mountApp(mountPoint);
          break;
        }
      }
    }
  }).observe(document.body, {
    subtree: true,
    childList: true
  });
  const CONVERSATION_API_URL = "/backend-api/conversation";
  const MODELS_API_URL = "/backend-api/models";
  async function handleModelsApi(fetchPromise) {
    return fetchPromise.then(async (response) => {
      if (response.ok) {
        const data = await response.clone().json();
        models.update(data.models);
      }
      return response;
    });
  }
  window.fetch = new Proxy(window.fetch, {
    apply: async function(target, that, args) {
      let resource = args[0];
      let options = args[1];
      if (state.isEnabled && resource === CONVERSATION_API_URL) {
        const requestBody = JSON.parse(options.body);
        requestBody.model = state.selectedModelSlug;
        if (requestBody.model.startsWith("text-davinci-002-render-sha")) {
          requestBody.arkose_token = null;
        }
        options = { ...options, body: JSON.stringify(requestBody) };
        args[0] = resource;
        args[1] = options;
      }
      const fetchPromise = Reflect.apply(target, that, args);
      if (resource.includes(MODELS_API_URL)) {
        return handleModelsApi(fetchPromise);
      }
      return fetchPromise;
    }
  });

})(Vue);
