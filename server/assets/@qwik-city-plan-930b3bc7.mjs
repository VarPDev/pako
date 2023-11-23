import X1 from "number-to-words";
import { format as el } from "date-fns";
const tl = !0,
  nl = !1;
/**
 * @license
 * @builder.io/qwik 1.2.15
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ const Fe = (e) => e && typeof e.nodeType == "number",
  Ss = (e) => e.nodeType === 9,
  Se = (e) => e.nodeType === 1,
  Be = (e) => {
    const t = e.nodeType;
    return t === 1 || t === 111;
  },
  sl = (e) => {
    const t = e.nodeType;
    return t === 1 || t === 111 || t === 3;
  },
  $e = (e) => e.nodeType === 111,
  bn = (e) => e.nodeType === 3,
  ut = (e) => e.nodeType === 8,
  Xe = (e, ...t) => xs(!0, e, ...t),
  Sn = (e, ...t) => xs(!0, e, ...t),
  et = () => {},
  ll = (e) => e,
  xs = (e, t, ...n) => {
    const s = t instanceof Error ? t : new Error(t);
    return (
      console.error("%cQWIK ERROR", "", s.stack || s.message, ...ll(n)),
      e &&
        setTimeout(() => {
          throw s;
        }, 0),
      s
    );
  },
  j = (e, ...t) => {
    const n = Ft(e);
    return Sn(n, ...t);
  },
  Ft = (e) => `Code(${e})`,
  ol = () => ({
    isServer: tl,
    importSymbol(e, t, n) {
      var o;
      {
        const r = L1(n),
          i = (o = globalThis.__qwik_reg_symbols) == null ? void 0 : o.get(r);
        if (i) return i;
      }
      if (!t) throw j(31, n);
      if (!e) throw j(30, t, n);
      const s = rl(e.ownerDocument, e, t).toString(),
        l = new URL(s);
      return (l.hash = ""), (l.search = ""), import(l.href).then((r) => r[n]);
    },
    raf: (e) =>
      new Promise((t) => {
        requestAnimationFrame(() => {
          t(e());
        });
      }),
    nextTick: (e) =>
      new Promise((t) => {
        setTimeout(() => {
          t(e());
        });
      }),
    chunkForSymbol: (e, t) => [e, t ?? "_"],
  }),
  rl = (e, t, n) => {
    const s = e.baseURI,
      l = new URL(t.getAttribute("q:base") ?? s, s);
    return new URL(n, l);
  };
let xn = ol();
const u2 = (e) => (xn = e),
  Bt = () => xn,
  fe = () => xn.isServer;
const Ht = (e) => {
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  },
  xe = (e) => e && typeof e == "object",
  O = (e) => Array.isArray(e),
  He = (e) => typeof e == "string",
  le = (e) => typeof e == "function",
  Z = (e) => e && typeof e.then == "function",
  Qt = (e, t, n) => {
    try {
      const s = e();
      return Z(s) ? s.then(t, n) : t(s);
    } catch (s) {
      return n(s);
    }
  },
  A = (e, t) => (Z(e) ? e.then(t) : t(e)),
  _n = (e) => (e.some(Z) ? Promise.all(e) : e),
  kt = (e) => (e.length > 0 ? Promise.all(e) : e),
  _s = (e) => e != null,
  il = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    }),
  ce = [],
  U = {},
  $t = (e) =>
    typeof document < "u" ? document : e.nodeType === 9 ? e : e.ownerDocument,
  ee = "q:slot",
  jt = "q:style",
  an = Symbol("proxy target"),
  qe = Symbol("proxy flags"),
  ae = Symbol("proxy manager"),
  m = Symbol("IMMUTABLE"),
  Wt = "_qc_",
  X = (e, t, n) => e.setAttribute(t, n),
  re = (e, t) => e.getAttribute(t),
  kn = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(),
  cl = (e) => e.replace(/-./g, (t) => t[1].toUpperCase()),
  al = /^(on|window:|document:)/,
  un = "preventdefault:",
  zt = (e) => e.endsWith("$") && al.test(e),
  zn = (e) => {
    if (e.length === 0) return ce;
    if (e.length === 1) {
      const n = e[0];
      return [[n[0], [n[1]]]];
    }
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n][0];
      t.includes(s) || t.push(s);
    }
    return t.map((n) => [n, e.filter((s) => s[0] === n).map((s) => s[1])]);
  },
  Mt = (e, t, n, s) => {
    if ((t.endsWith("$"), (t = $n(t.slice(0, -1))), n))
      if (O(n)) {
        const l = n
          .flat(1 / 0)
          .filter((o) => o != null)
          .map((o) => [t, Yn(o, s)]);
        e.push(...l);
      } else e.push([t, Yn(n, s)]);
    return t;
  },
  Kn = ["on", "window:on", "document:on"],
  ul = ["on", "on-window", "on-document"],
  $n = (e) => {
    let t = "on";
    for (let n = 0; n < Kn.length; n++) {
      const s = Kn[n];
      if (e.startsWith(s)) {
        (t = ul[n]), (e = e.slice(s.length));
        break;
      }
    }
    return t + ":" + (e = e.startsWith("-") ? kn(e.slice(1)) : e.toLowerCase());
  },
  Yn = (e, t) => (e.$setContainer$(t), e),
  $l = (e, t) => {
    const n = e.$element$.attributes,
      s = [];
    for (let l = 0; l < n.length; l++) {
      const { name: o, value: r } = n.item(l);
      if (
        o.startsWith("on:") ||
        o.startsWith("on-window:") ||
        o.startsWith("on-document:")
      ) {
        const i = r.split(`
`);
        for (const c of i) {
          const u = en(c, t);
          u.$capture$ && x1(u, e), s.push([o, u]);
        }
      }
    }
    return s;
  },
  Xn = Symbol("ContainerState"),
  dt = (e) => {
    let t = e[Xn];
    return t || (e[Xn] = t = ks(e, re(e, "q:base") ?? "/")), t;
  },
  ks = (e, t) => {
    const n = {
      $containerEl$: e,
      $elementIndex$: 0,
      $styleMoved$: !1,
      $proxyMap$: new WeakMap(),
      $opsNext$: new Set(),
      $taskNext$: new Set(),
      $taskStaging$: new Set(),
      $hostsNext$: new Set(),
      $hostsStaging$: new Set(),
      $styleIds$: new Set(),
      $events$: new Set(),
      $serverData$: {},
      $base$: t,
      $renderPromise$: void 0,
      $hostsRendering$: void 0,
      $pauseCtx$: void 0,
      $subsManager$: null,
    };
    return (n.$subsManager$ = Xr(n)), n;
  },
  Mn = (e, t) => {
    if (le(e)) return e(t);
    if (xe(e) && "value" in e) return (e.value = t);
    throw j(32, e);
  },
  dl = (e) => Se(e) && e.hasAttribute("q:container"),
  ke = (e) => e.toString(36),
  he = (e) => parseInt(e, 36),
  zs = (e) => {
    const t = e.indexOf(":");
    return e && cl(e.slice(t + 1));
  },
  hl = (e, t) => {
    Es(Ms(e, void 0), t);
  },
  es = (e, t) => {
    Es(Ms(e, "document"), t);
  },
  Ms = (e, t) => {
    const n = t !== void 0 ? t + ":" : "";
    return Array.isArray(e) ? e.map((s) => `${n}on-${s}`) : `${n}on-${e}`;
  },
  Es = (e, t) => {
    if (t) {
      const n = Ks(),
        s = se(n.$hostElement$, n.$renderCtx$.$static$.$containerState$);
      typeof e == "string"
        ? s.li.push([$n(e), t])
        : s.li.push(...e.map((l) => [$n(l), t])),
        (s.$flags$ |= be);
    }
  },
  pl = (e, t, n, s) => {
    typeof CustomEvent == "function" &&
      e &&
      e.dispatchEvent(
        new CustomEvent(t, { detail: n, bubbles: s, composed: s }),
      );
  },
  V = (e, t, n) => new dn(e, t, n),
  fl = (e) => {
    const t = e.$funcStr$;
    let n = "";
    for (let s = 0; s < e.$args$.length; s++) n += `p${s},`;
    return `(${n})=>(${t})`;
  };
var qs;
const ml = (e, t, n, s) => {
    const l = t.$subsManager$.$createManager$(s);
    return new nt(e, l, n);
  },
  tt = Symbol("proxy manager"),
  Ts = Symbol("unassigned signal");
class ht {}
class nt extends ht {
  constructor(t, n, s) {
    super(),
      (this[qs] = 0),
      (this.untrackedValue = t),
      (this[ae] = n),
      (this[tt] = s);
  }
  valueOf() {}
  toString() {
    return `[Signal ${String(this.value)}]`;
  }
  toJSON() {
    return { value: this.value };
  }
  get value() {
    var n;
    if (2 & this[tt]) throw Ts;
    const t = (n = me()) == null ? void 0 : n.$subscriber$;
    return t && this[ae].$addSub$(t), this.untrackedValue;
  }
  set value(t) {
    const n = this[ae];
    n &&
      this.untrackedValue !== t &&
      ((this.untrackedValue = t), n.$notifySubs$());
  }
}
qs = tt;
class dn extends ht {
  constructor(t, n, s) {
    super(), (this.$func$ = t), (this.$args$ = n), (this.$funcStr$ = s);
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
}
class hn extends ht {
  constructor(t, n) {
    super(), (this.ref = t), (this.prop = n);
  }
  get [ae]() {
    return J(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
}
const te = (e) => e instanceof ht,
  Pe = (e, t) => {
    var l, o;
    if (!xe(e)) return e[t];
    if (e instanceof ht) return e;
    const n = je(e);
    if (n) {
      const r = n["$$" + t];
      if (r) return r;
      if (((l = n[m]) == null ? void 0 : l[t]) !== !0) return new hn(e, t);
    }
    const s = (o = e[m]) == null ? void 0 : o[t];
    return te(s) ? s : m;
  },
  P = (e, t) => {
    const n = Pe(e, t);
    return n === m ? e[t] : n;
  },
  En = (e, t, n = 0) =>
    t.$proxyMap$.get(e) || (n !== 0 && Jt(e, n), pt(e, t, void 0)),
  pt = (e, t, n) => {
    nn(e), t.$proxyMap$.has(e);
    const s = t.$subsManager$.$createManager$(n),
      l = new Proxy(e, new Ls(t, s));
    return t.$proxyMap$.set(e, l), l;
  },
  Ut = () => {
    const e = {};
    return Jt(e, 2), e;
  },
  Jt = (e, t) => {
    Object.defineProperty(e, qe, { value: t, enumerable: !1 });
  };
class Ls {
  constructor(t, n) {
    (this.$containerState$ = t), (this.$manager$ = n);
  }
  deleteProperty(t, n) {
    if (2 & t[qe]) throw j(17);
    return (
      typeof n == "string" &&
      delete t[n] &&
      (this.$manager$.$notifySubs$(O(t) ? void 0 : n), !0)
    );
  }
  get(t, n) {
    var u;
    if (typeof n == "symbol")
      return n === an ? t : n === ae ? this.$manager$ : t[n];
    const s = t[qe] ?? 0,
      l = me(),
      o = (1 & s) != 0,
      r = t["$$" + n];
    let i, c;
    if (
      (l && (i = l.$subscriber$),
      !(2 & s) ||
        (n in t && !gl((u = t[m]) == null ? void 0 : u[n])) ||
        (i = null),
      r ? ((c = r.value), (i = null)) : (c = t[n]),
      i)
    ) {
      const $ = O(t);
      this.$manager$.$addSub$(i, $ ? void 0 : n);
    }
    return o ? vl(c, this.$containerState$) : c;
  }
  set(t, n, s) {
    if (typeof n == "symbol") return (t[n] = s), !0;
    const l = t[qe] ?? 0;
    if (2 & l) throw j(17);
    const o = 1 & l ? nn(s) : s;
    if (O(t)) return (t[n] = o), this.$manager$.$notifySubs$(), !0;
    const r = t[n];
    return (t[n] = o), r !== o && this.$manager$.$notifySubs$(n), !0;
  }
  has(t, n) {
    if (n === an) return !0;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(t, n) || !(typeof n != "string" || !s.call(t, "$$" + n));
  }
  ownKeys(t) {
    if (!(2 & (t[qe] ?? 0))) {
      let s = null;
      const l = me();
      l && (s = l.$subscriber$), s && this.$manager$.$addSub$(s);
    }
    return O(t)
      ? Reflect.ownKeys(t)
      : Reflect.ownKeys(t).map((s) =>
          typeof s == "string" && s.startsWith("$$") ? s.slice(2) : s,
        );
  }
  getOwnPropertyDescriptor(t, n) {
    return O(t) || typeof n == "symbol"
      ? Object.getOwnPropertyDescriptor(t, n)
      : { enumerable: !0, configurable: !0 };
  }
}
const gl = (e) => e === m || te(e),
  vl = (e, t) => {
    if (xe(e)) {
      if (Object.isFrozen(e)) return e;
      const n = nn(e);
      if (n !== e || M1(n)) return e;
      if (Ht(n) || O(n)) return t.$proxyMap$.get(n) || En(n, t, 1);
    }
    return e;
  },
  qn = Symbol("skip render"),
  Is = () => null,
  Rs = () => null,
  Ee = () => {
    const e = Ks(),
      t = se(e.$hostElement$, e.$renderCtx$.$static$.$containerState$),
      n = t.$seq$ || (t.$seq$ = []),
      s = e.$i$++;
    return { val: n[s], set: (l) => (n[s] = l), i: s, iCtx: e, elCtx: t };
  },
  ye = (e) => Object.freeze({ id: kn(e) }),
  we = (e, t) => {
    const { val: n, set: s, elCtx: l } = Ee();
    if (n !== void 0) return;
    (l.$contexts$ || (l.$contexts$ = new Map())).set(e.id, t), s(!0);
  },
  ft = (e, t) => {
    const { val: n, set: s, iCtx: l, elCtx: o } = Ee();
    if (n !== void 0) return n;
    const r = As(e, o, l.$renderCtx$.$static$.$containerState$);
    if (typeof t == "function") return s(G(void 0, t, r));
    if (r !== void 0) return s(r);
    if (t !== void 0) return s(t);
    throw j(13, e.id);
  },
  yl = (e, t) => {
    var l;
    let n = e,
      s = 1;
    for (; n && !((l = n.hasAttribute) != null && l.call(n, "q:container")); ) {
      for (; (n = n.previousSibling); )
        if (ut(n)) {
          const o = n.__virtual;
          if (o) {
            const r = o[Wt];
            if (n === o.open) return r ?? se(o, t);
            if (r != null && r.$parentCtx$) return r.$parentCtx$;
            n = o;
            continue;
          }
          if (n.data === "/qv") s++;
          else if (n.data.startsWith("qv ") && (s--, s === 0))
            return se(yt(n), t);
        }
      (n = e.parentElement), (e = n);
    }
    return null;
  },
  pn = (e, t) => {
    if (e.$parentCtx$ === void 0) {
      const n = yl(e.$element$, t);
      e.$parentCtx$ = !n || n.$contexts$ ? n : pn(n, t);
    } else
      e.$parentCtx$ &&
        !e.$parentCtx$.$contexts$ &&
        (e.$parentCtx$ = pn(e.$parentCtx$, t));
    return e.$parentCtx$;
  },
  As = (e, t, n) => {
    var o;
    const s = e.id;
    if (!t) return;
    let l = t;
    for (; l; ) {
      const r = (o = l.$contexts$) == null ? void 0 : o.get(s);
      if (r) return r;
      l = pn(l, n);
    }
  },
  wl = ye("qk-error"),
  Tn = (e, t, n) => {
    const s = ne(t);
    if (fe()) throw e;
    {
      const l = As(wl, s, n.$static$.$containerState$);
      if (l === void 0) throw e;
      l.error = e;
    }
  },
  Et = (e, t) => {
    (t.$flags$ &= ~De), (t.$flags$ |= Dn), (t.$slots$ = []), (t.li.length = 0);
    const n = t.$element$,
      s = t.$componentQrl$,
      l = t.$props$,
      o = oe(e.$static$.$locale$, n, void 0, "qRender"),
      r = (o.$waitOn$ = []),
      i = mt(e);
    (i.$cmpCtx$ = t),
      (i.$slotCtx$ = null),
      (o.$subscriber$ = [0, n]),
      (o.$renderCtx$ = e),
      s.$setContainer$(e.$static$.$containerState$.$containerEl$);
    const c = s.getFn(o);
    return Qt(
      () => c(l),
      (u) => A(kt(r), () => (t.$flags$ & De ? Et(e, t) : { node: u, rCtx: i })),
      (u) =>
        u === Ts
          ? A(kt(r), () => Et(e, t))
          : (Tn(u, n, e), { node: qn, rCtx: i }),
    );
  },
  Ps = (e, t) => ({
    $static$: {
      $doc$: e,
      $locale$: t.$serverData$.locale,
      $containerState$: t,
      $hostElements$: new Set(),
      $operations$: [],
      $postOperations$: [],
      $roots$: [],
      $addSlots$: [],
      $rmSlots$: [],
      $visited$: [],
    },
    $cmpCtx$: null,
    $slotCtx$: null,
  }),
  mt = (e) => ({
    $static$: e.$static$,
    $cmpCtx$: e.$cmpCtx$,
    $slotCtx$: e.$slotCtx$,
  }),
  Ln = (e, t) =>
    t && t.$scopeIds$ ? t.$scopeIds$.join(" ") + " " + qt(e) : qt(e),
  qt = (e) => {
    if (!e) return "";
    if (He(e)) return e.trim();
    const t = [];
    if (O(e))
      for (const n of e) {
        const s = qt(n);
        s && t.push(s);
      }
    else for (const [n, s] of Object.entries(e)) s && t.push(n.trim());
    return t.join(" ");
  },
  Zt = (e) => {
    if (e == null) return "";
    if (typeof e == "object") {
      if (O(e)) throw j(0, e, "style");
      {
        const t = [];
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const s = e[n];
            if (s != null) {
              const l = n.startsWith("--") ? n : kn(n);
              t.push(l + ":" + s);
            }
          }
        return t.join(";");
      }
    }
    return String(e);
  },
  st = (e) => ke(e.$static$.$containerState$.$elementIndex$++),
  Cs = (e, t) => {
    const n = st(e);
    t.$id$ = n;
  },
  Ce = (e) =>
    te(e) ? Ce(e.value) : e == null || typeof e == "boolean" ? "" : String(e);
function Ds(e) {
  return e.startsWith("aria-");
}
const Vs = (e, t) => !!t.key && (!Qe(e) || (!le(e.type) && e.key != t.key)),
  W = "dangerouslySetInnerHTML",
  In = (e, t, n) => {
    const s = !(t.$flags$ & Dn),
      l = t.$element$,
      o = e.$static$.$containerState$;
    return (
      o.$hostsStaging$.delete(t),
      o.$subsManager$.$clearSub$(l),
      A(Et(e, t), (r) => {
        const i = e.$static$,
          c = r.rCtx,
          u = oe(e.$static$.$locale$, l);
        if (
          (i.$hostElements$.add(l),
          (u.$subscriber$ = [0, l]),
          (u.$renderCtx$ = c),
          s && t.$appendStyles$)
        )
          for (const h of t.$appendStyles$) No(i, h);
        const $ = lt(r.node, u);
        return A($, (h) => {
          const g = bl(l, h),
            v = Rn(t);
          return A(Pt(c, v, g, n), () => {
            t.$vdom$ = g;
          });
        });
      })
    );
  },
  Rn = (e) => (e.$vdom$ || (e.$vdom$ = Ct(e.$element$)), e.$vdom$);
class pe {
  constructor(t, n, s, l, o, r) {
    (this.$type$ = t),
      (this.$props$ = n),
      (this.$immutableProps$ = s),
      (this.$children$ = l),
      (this.$flags$ = o),
      (this.$key$ = r),
      (this.$elm$ = null),
      (this.$text$ = ""),
      (this.$signal$ = null),
      (this.$id$ = t + (r ? ":" + r : ""));
  }
}
const Os = (e, t) => {
    const {
      key: n,
      type: s,
      props: l,
      children: o,
      flags: r,
      immutableProps: i,
    } = e;
    let c = "";
    if (He(s)) c = s;
    else {
      if (s !== Me) {
        if (le(s)) {
          const $ = G(t, s, l, n, r, e.dev);
          return Vs($, e) ? Os(x(Me, { children: $ }, 0, n), t) : lt($, t);
        }
        throw j(25, s);
      }
      c = Ve;
    }
    let u = ce;
    return o != null
      ? A(
          lt(o, t),
          ($) => (
            $ !== void 0 && (u = O($) ? $ : [$]), new pe(c, l, i, u, r, n)
          ),
        )
      : new pe(c, l, i, u, r, n);
  },
  bl = (e, t) => {
    const n = t === void 0 ? ce : O(t) ? t : [t],
      s = new pe(":virtual", {}, null, n, 0, null);
    return (s.$elm$ = e), s;
  },
  lt = (e, t) => {
    if (e != null && typeof e != "boolean") {
      if (Ns(e)) {
        const n = new pe("#text", U, null, ce, 0, null);
        return (n.$text$ = String(e)), n;
      }
      if (Qe(e)) return Os(e, t);
      if (te(e)) {
        const n = new pe("#text", U, null, ce, 0, null);
        return (n.$signal$ = e), n;
      }
      if (O(e)) {
        const n = _n(e.flatMap((s) => lt(s, t)));
        return A(n, (s) => s.flat(100).filter(_s));
      }
      return Z(e)
        ? e.then((n) => lt(n, t))
        : e === qn
          ? new pe(It, U, null, ce, 0, null)
          : void et();
    }
  },
  Ns = (e) => He(e) || typeof e == "number",
  Fs = (e) => {
    re(e, "q:container") === "paused" && (xl(e), ql(e));
  },
  Sl = (e) => {
    const t = $t(e),
      n = Bs(e === t.documentElement ? t.body : e, "type");
    if (n) return JSON.parse(zl(n.firstChild.data) || "{}");
  },
  xl = (e) => {
    if (!dl(e)) return void et();
    const t = e._qwikjson_ ?? Sl(e);
    if (((e._qwikjson_ = null), !t)) return void et();
    const n = $t(e),
      s = e === n.documentElement ? n.body : e,
      l = Ml(s),
      o = dt(e),
      r = new Map(),
      i = new Map();
    let c = null,
      u = 0;
    const $ = n.createTreeWalker(e, 128);
    for (; (c = $.nextNode()); ) {
      const d = c.data;
      if (u === 0) {
        if (d.startsWith("qv ")) {
          const z = Tl(d);
          z >= 0 && r.set(z, c);
        } else if (d.startsWith("t=")) {
          const z = d.slice(2),
            y = he(z),
            p = El(c);
          r.set(y, p), i.set(y, p.data);
        }
      }
      d === "cq" ? u++ : d === "/cq" && u--;
    }
    const h = e.getElementsByClassName("qc📦").length !== 0;
    e.querySelectorAll("[q\\:id]").forEach((d) => {
      if (h && d.closest("[q\\:container]") !== e) return;
      const z = re(d, "q:id"),
        y = he(z);
      r.set(y, d);
    });
    const g = Wr(o, n),
      v = new Map(),
      w = new Set(),
      _ = (d) => (
        typeof d == "string" && d.length > 0, v.has(d) ? v.get(d) : f(d)
      ),
      f = (d) => {
        if (d.startsWith("#")) {
          const M = d.slice(1),
            b = he(M);
          r.has(b);
          const S = r.get(b);
          if (ut(S)) {
            if (!S.isConnected) return void v.set(d, void 0);
            const E = yt(S);
            return v.set(d, E), se(E, o), E;
          }
          return Se(S) ? (v.set(d, S), se(S, o), S) : (v.set(d, S), S);
        }
        if (d.startsWith("@")) {
          const M = d.slice(1),
            b = he(M);
          return l[b];
        }
        if (d.startsWith("*")) {
          const M = d.slice(1),
            b = he(M);
          r.has(b);
          const S = i.get(b);
          return v.set(d, S), S;
        }
        const z = he(d),
          y = t.objs;
        y.length > z;
        let p = y[z];
        He(p) && (p = p === Un ? void 0 : g.prepare(p));
        let k = p;
        for (let M = d.length - 1; M >= 0; M--) {
          const b = Ur[d[M]];
          if (!b) break;
          k = b(k, o);
        }
        return (
          v.set(d, k),
          Ns(p) ||
            w.has(z) ||
            (w.add(z), _l(p, z, t.subs, _, o, g), kl(p, _, g)),
          k
        );
      };
    (o.$elementIndex$ = 1e5),
      (o.$pauseCtx$ = { getObject: _, meta: t.ctx, refs: t.refs }),
      X(e, "q:container", "resumed"),
      pl(e, "qresume", void 0, !0);
  },
  _l = (e, t, n, s, l, o) => {
    const r = n[t];
    if (r) {
      const i = [];
      let c = 0;
      for (const u of r)
        if (u.startsWith("_")) c = parseInt(u.slice(1), 10);
        else {
          const $ = Yr(u, s);
          $ && i.push($);
        }
      if ((c > 0 && Jt(e, c), !o.subs(e, i))) {
        const u = l.$proxyMap$.get(e);
        u ? J(u).$addSubs$(i) : pt(e, l, i);
      }
    }
  },
  kl = (e, t, n) => {
    if (!n.fill(e, t) && e && typeof e == "object") {
      if (O(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s]);
      else if (Ht(e)) for (const s in e) e[s] = t(e[s]);
    }
  },
  zl = (e) => e.replace(/\\x3C(\/?script)/g, "<$1"),
  Ml = (e) => {
    const t = Bs(e, "q:func");
    return (t == null ? void 0 : t.qFuncs) ?? ce;
  },
  Bs = (e, t) => {
    let n = e.lastElementChild;
    for (; n; ) {
      if (n.tagName === "SCRIPT" && re(n, t) === "qwik/json") return n;
      n = n.previousElementSibling;
    }
  },
  El = (e) => {
    const t = e.nextSibling;
    if (bn(t)) return t;
    {
      const n = e.ownerDocument.createTextNode("");
      return e.parentElement.insertBefore(n, e), n;
    }
  },
  ql = (e) => {
    e.qwik = { pause: () => nr(e), state: dt(e) };
  },
  Tl = (e) => {
    const t = e.indexOf("q:id=");
    return t > 0 ? he(e.slice(t + 5)) : -1;
  },
  Gt = () => {
    const e = Yl();
    let t = e.$qrl$;
    if (t) t.$captureRef$;
    else {
      const n = e.$element$,
        s = Xs(n);
      (t = en(decodeURIComponent(String(e.$url$)), s)), Fs(s);
      const l = se(n, dt(s));
      x1(t, l);
    }
    return t.$captureRef$;
  },
  Ll = (e, t) => {
    try {
      const n = t[0];
      switch (n) {
        case 1:
        case 2: {
          let s, l;
          n === 1 ? ((s = t[1]), (l = t[3])) : ((s = t[3]), (l = t[1]));
          const o = ne(s);
          if (o == null) return;
          const r = t[4],
            i = s.namespaceURI === vt;
          e.$containerState$.$subsManager$.$clearSignal$(t);
          let c = ge(t[2], t.slice(0, -1));
          r === "class" ? (c = Ln(c, ne(l))) : r === "style" && (c = Zt(c));
          const u = Rn(o);
          return r in u.$props$ && u.$props$[r] === c
            ? void 0
            : ((u.$props$[r] = c), Fn(e, s, r, c, i));
        }
        case 3:
        case 4: {
          const s = t[3];
          if (!e.$visited$.includes(s)) {
            e.$containerState$.$subsManager$.$clearSignal$(t);
            const l = ge(t[2], t.slice(0, -1));
            return ve(e, s, "data", Ce(l));
          }
        }
      }
    } catch {}
  },
  Il = (e, t) => {
    if (e[0] === 0) {
      const n = e[1];
      Cn(n) ? An(n, t) : Rl(n, t);
    } else Al(e, t);
  },
  Rl = (e, t) => {
    const n = fe();
    n || Fs(t.$containerEl$);
    const s = se(e, t);
    if ((s.$componentQrl$, !(s.$flags$ & De)))
      if (((s.$flags$ |= De), t.$hostsRendering$ !== void 0))
        t.$hostsStaging$.add(s);
      else {
        if (n) return void et();
        t.$hostsNext$.add(s), Pn(t);
      }
  },
  Al = (e, t) => {
    const n = t.$hostsRendering$ !== void 0;
    t.$opsNext$.add(e), n || Pn(t);
  },
  An = (e, t) => {
    e.$flags$ & ze ||
      ((e.$flags$ |= ze),
      t.$hostsRendering$ !== void 0
        ? t.$taskStaging$.add(e)
        : (t.$taskNext$.add(e), Pn(t)));
  },
  Pn = (e) => (
    e.$renderPromise$ === void 0 &&
      (e.$renderPromise$ = Bt().nextTick(() => Hs(e))),
    e.$renderPromise$
  ),
  Pl = () => {
    const [e] = Gt();
    An(e, dt(Xs(e.$el$)));
  },
  Hs = async (e) => {
    const t = e.$containerEl$,
      n = $t(t);
    try {
      const s = Ps(n, e),
        l = s.$static$,
        o = (e.$hostsRendering$ = new Set(e.$hostsNext$));
      e.$hostsNext$.clear(),
        await Dl(e, s),
        e.$hostsStaging$.forEach((c) => {
          o.add(c);
        }),
        e.$hostsStaging$.clear();
      const r = Array.from(e.$opsNext$);
      e.$opsNext$.clear();
      const i = Array.from(o);
      Ol(i),
        !e.$styleMoved$ &&
          i.length > 0 &&
          ((e.$styleMoved$ = !0),
          (t === n.documentElement ? n.body : t)
            .querySelectorAll("style[q\\:style]")
            .forEach((c) => {
              e.$styleIds$.add(re(c, jt)), v1(l, n.head, c);
            }));
      for (const c of i) {
        const u = c.$element$;
        if (!l.$hostElements$.has(u) && c.$componentQrl$) {
          u.isConnected, l.$roots$.push(c);
          try {
            await In(s, c, Cl(u.parentElement));
          } catch ($) {
            Xe($);
          }
        }
      }
      return (
        r.forEach((c) => {
          Ll(l, c);
        }),
        l.$operations$.push(...l.$postOperations$),
        l.$operations$.length === 0
          ? (us(l), void (await ts(e, s)))
          : (await Ro(l), us(l), ts(e, s))
      );
    } catch (s) {
      Xe(s);
    }
  },
  Cl = (e) => {
    let t = 0;
    return (
      e &&
        (e.namespaceURI === vt && (t |= Y), e.tagName === "HEAD" && (t |= Rt)),
      t
    );
  },
  ts = async (e, t) => {
    const n = t.$static$.$hostElements$;
    await Vl(e, t, (s, l) => (s.$flags$ & Qs) != 0 && (!l || n.has(s.$el$))),
      e.$hostsStaging$.forEach((s) => {
        e.$hostsNext$.add(s);
      }),
      e.$hostsStaging$.clear(),
      (e.$hostsRendering$ = void 0),
      (e.$renderPromise$ = void 0),
      e.$hostsNext$.size + e.$taskNext$.size + e.$opsNext$.size > 0 &&
        (e.$renderPromise$ = Hs(e));
  },
  Dl = async (e, t) => {
    const n = e.$containerEl$,
      s = [],
      l = [],
      o = (i) => (i.$flags$ & js) != 0,
      r = (i) => (i.$flags$ & Ws) != 0;
    e.$taskNext$.forEach((i) => {
      o(i) &&
        (l.push(A(i.$qrl$.$resolveLazy$(n), () => i)), e.$taskNext$.delete(i)),
        r(i) &&
          (s.push(A(i.$qrl$.$resolveLazy$(n), () => i)),
          e.$taskNext$.delete(i));
    });
    do
      if (
        (e.$taskStaging$.forEach((i) => {
          o(i)
            ? l.push(A(i.$qrl$.$resolveLazy$(n), () => i))
            : r(i)
              ? s.push(A(i.$qrl$.$resolveLazy$(n), () => i))
              : e.$taskNext$.add(i);
        }),
        e.$taskStaging$.clear(),
        l.length > 0)
      ) {
        const i = await Promise.all(l);
        fn(i), await Promise.all(i.map((c) => mn(c, e, t))), (l.length = 0);
      }
    while (e.$taskStaging$.size > 0);
    if (s.length > 0) {
      const i = await Promise.all(s);
      fn(i), i.forEach((c) => mn(c, e, t));
    }
  },
  Vl = async (e, t, n) => {
    const s = [],
      l = e.$containerEl$;
    e.$taskNext$.forEach((o) => {
      n(o, !1) &&
        (o.$el$.isConnected && s.push(A(o.$qrl$.$resolveLazy$(l), () => o)),
        e.$taskNext$.delete(o));
    });
    do
      if (
        (e.$taskStaging$.forEach((o) => {
          o.$el$.isConnected &&
            (n(o, !0)
              ? s.push(A(o.$qrl$.$resolveLazy$(l), () => o))
              : e.$taskNext$.add(o));
        }),
        e.$taskStaging$.clear(),
        s.length > 0)
      ) {
        const o = await Promise.all(s);
        fn(o);
        for (const r of o) mn(r, e, t);
        s.length = 0;
      }
    while (e.$taskStaging$.size > 0);
  },
  Ol = (e) => {
    e.sort((t, n) =>
      2 & t.$element$.compareDocumentPosition(Vt(n.$element$)) ? 1 : -1,
    );
  },
  fn = (e) => {
    e.sort((t, n) =>
      t.$el$ === n.$el$
        ? t.$index$ < n.$index$
          ? -1
          : 1
        : 2 & t.$el$.compareDocumentPosition(Vt(n.$el$))
          ? 1
          : -1,
    );
  },
  Qs = 1,
  js = 2,
  Ws = 4,
  ze = 16,
  Nl = (e, t) => {
    const { val: n, set: s, iCtx: l, i: o, elCtx: r } = Ee();
    if (n) return;
    const i = l.$renderCtx$.$static$.$containerState$,
      c = new Kt(ze | js, o, r.$element$, e, void 0);
    s(!0),
      e.$resolveLazy$(i.$containerEl$),
      r.$tasks$ || (r.$tasks$ = []),
      r.$tasks$.push(c),
      Xl(l, () => Zs(c, i, l.$renderCtx$)),
      fe() && gn(c, t == null ? void 0 : t.eagerness);
  },
  Us = (e, t) => {
    const { val: n, set: s, i: l, iCtx: o, elCtx: r } = Ee(),
      i = (t == null ? void 0 : t.strategy) ?? "intersection-observer";
    if (n) return void (fe() && gn(n, i));
    const c = new Kt(Qs, l, r.$element$, e, void 0),
      u = o.$renderCtx$.$static$.$containerState$;
    r.$tasks$ || (r.$tasks$ = []),
      r.$tasks$.push(c),
      s(c),
      gn(c, i),
      fe() || (e.$resolveLazy$(u.$containerEl$), An(c, u));
  },
  Js = (e) => (e.$flags$ & Ws) != 0,
  Fl = (e) => (8 & e.$flags$) != 0,
  mn = async (e, t, n) => (
    e.$flags$ & ze, Js(e) ? Bl(e, t, n) : Fl(e) ? Hl(e, t, n) : Zs(e, t, n)
  ),
  Bl = (e, t, n, s) => {
    (e.$flags$ &= ~ze), ot(e);
    const l = oe(n.$static$.$locale$, e.$el$, void 0, "TaskEvent"),
      { $subsManager$: o } = t;
    l.$renderCtx$ = n;
    const r = e.$qrl$.getFn(l, () => {
        o.$clearSub$(e);
      }),
      i = [],
      c = e.$state$,
      u = nn(c),
      $ = {
        track: (d, z) => {
          if (le(d)) {
            const p = oe();
            return (p.$renderCtx$ = n), (p.$subscriber$ = [0, e]), G(p, d);
          }
          const y = J(d);
          return (
            y ? y.$addSub$([0, e], z) : Sn(Ft(26), d),
            z ? d[z] : te(d) ? d.value : d
          );
        },
        cleanup(d) {
          i.push(d);
        },
        cache(d) {
          let z = 0;
          (z = d === "immutable" ? 1 / 0 : d), (c._cache = z);
        },
        previous: u._resolved,
      };
    let h,
      g,
      v = !1;
    const w = (d, z) =>
      !v &&
      ((v = !0),
      d
        ? ((v = !0),
          (c.loading = !1),
          (c._state = "resolved"),
          (c._resolved = z),
          (c._error = void 0),
          h(z))
        : ((v = !0),
          (c.loading = !1),
          (c._state = "rejected"),
          (c._error = z),
          g(z)),
      !0);
    G(l, () => {
      (c._state = "pending"),
        (c.loading = !fe()),
        (c.value = new Promise((d, z) => {
          (h = d), (g = z);
        }));
    }),
      (e.$destroy$ = tn(() => {
        (v = !0), i.forEach((d) => d());
      }));
    const _ = Qt(
        () => A(s, () => r($)),
        (d) => {
          w(!0, d);
        },
        (d) => {
          w(!1, d);
        },
      ),
      f = u._timeout;
    return f > 0
      ? Promise.race([
          _,
          il(f).then(() => {
            w(!1, new Error("timeout")) && ot(e);
          }),
        ])
      : _;
  },
  Zs = (e, t, n) => {
    (e.$flags$ &= ~ze), ot(e);
    const s = e.$el$,
      l = oe(n.$static$.$locale$, s, void 0, "TaskEvent");
    l.$renderCtx$ = n;
    const { $subsManager$: o } = t,
      r = e.$qrl$.getFn(l, () => {
        o.$clearSub$(e);
      }),
      i = [];
    e.$destroy$ = tn(() => {
      i.forEach((u) => u());
    });
    const c = {
      track: (u, $) => {
        if (le(u)) {
          const g = oe();
          return (g.$subscriber$ = [0, e]), G(g, u);
        }
        const h = J(u);
        return h ? h.$addSub$([0, e], $) : Sn(Ft(26), u), $ ? u[$] : u;
      },
      cleanup(u) {
        i.push(u);
      },
    };
    return Qt(
      () => r(c),
      (u) => {
        le(u) && i.push(u);
      },
      (u) => {
        Tn(u, s, n);
      },
    );
  },
  Hl = (e, t, n) => {
    e.$state$, (e.$flags$ &= ~ze), ot(e);
    const s = e.$el$,
      l = oe(n.$static$.$locale$, s, void 0, "ComputedEvent");
    (l.$subscriber$ = [0, e]), (l.$renderCtx$ = n);
    const { $subsManager$: o } = t,
      r = e.$qrl$.getFn(l, () => {
        o.$clearSub$(e);
      });
    return Qt(
      r,
      (i) =>
        Tt(() => {
          const c = e.$state$;
          (c[tt] &= -3), (c.untrackedValue = i), c[ae].$notifySubs$();
        }),
      (i) => {
        Tn(i, s, n);
      },
    );
  },
  ot = (e) => {
    const t = e.$destroy$;
    if (t) {
      e.$destroy$ = void 0;
      try {
        t();
      } catch (n) {
        Xe(n);
      }
    }
  },
  Gs = (e) => {
    32 & e.$flags$ ? ((e.$flags$ &= -33), (0, e.$qrl$)()) : ot(e);
  },
  gn = (e, t) => {
    t === "visible" || t === "intersection-observer"
      ? hl("qvisible", ln(e))
      : t === "load" || t === "document-ready"
        ? es("qinit", ln(e))
        : (t !== "idle" && t !== "document-idle") || es("qidle", ln(e));
  },
  ln = (e) => {
    const t = e.$qrl$;
    return sn(t.$chunk$, "_hW", Pl, null, null, [e], t.$symbol$);
  },
  Cn = (e) => xe(e) && e instanceof Kt,
  Ql = (e, t) => {
    let n = `${ke(e.$flags$)} ${ke(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;
    return e.$state$ && (n += ` ${t(e.$state$)}`), n;
  },
  jl = (e) => {
    const [t, n, s, l, o] = e.split(" ");
    return new Kt(he(t), he(n), l, s, o);
  };
class Kt {
  constructor(t, n, s, l, o) {
    (this.$flags$ = t),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = l),
      (this.$state$ = o);
  }
}
function Wl(e) {
  return Ul(e) && e.nodeType === 1;
}
function Ul(e) {
  return e && typeof e.nodeType == "number";
}
const De = 1,
  be = 2,
  Dn = 4,
  ne = (e) => e[Wt],
  se = (e, t) => {
    const n = ne(e);
    if (n) return n;
    const s = Yt(e),
      l = re(e, "q:id");
    if (l) {
      const o = t.$pauseCtx$;
      if (((s.$id$ = l), o)) {
        const { getObject: r, meta: i, refs: c } = o;
        if (Wl(e)) {
          const u = c[l];
          u &&
            ((s.$refMap$ = u.split(" ").map(r)),
            (s.li = $l(s, t.$containerEl$)));
        } else {
          const u = e.getAttribute("q:sstyle");
          s.$scopeIds$ = u ? u.split("|") : null;
          const $ = i[l];
          if ($) {
            const h = $.s,
              g = $.h,
              v = $.c,
              w = $.w;
            if (
              (h && (s.$seq$ = h.split(" ").map(r)),
              w && (s.$tasks$ = w.split(" ").map(r)),
              v)
            ) {
              s.$contexts$ = new Map();
              for (const _ of v.split(" ")) {
                const [f, d] = _.split("=");
                s.$contexts$.set(f, r(d));
              }
            }
            if (g) {
              const [_, f] = g.split(" ");
              if (((s.$flags$ = Dn), _ && (s.$componentQrl$ = r(_)), f)) {
                const d = r(f);
                (s.$props$ = d), Jt(d, 2), (d[m] = Jl(d));
              } else s.$props$ = pt(Ut(), t);
            }
          }
        }
      }
    }
    return s;
  },
  Jl = (e) => {
    const t = {},
      n = je(e);
    for (const s in n) s.startsWith("$$") && (t[s.slice(2)] = n[s]);
    return t;
  },
  Yt = (e) => {
    const t = {
      $flags$: 0,
      $id$: "",
      $element$: e,
      $refMap$: [],
      li: [],
      $tasks$: null,
      $seq$: null,
      $slots$: null,
      $scopeIds$: null,
      $appendStyles$: null,
      $props$: null,
      $vdom$: null,
      $componentQrl$: null,
      $contexts$: null,
      $dynamicSlots$: null,
      $parentCtx$: void 0,
    };
    return (e[Wt] = t), t;
  },
  Zl = (e, t) => {
    var n;
    (n = e.$tasks$) == null ||
      n.forEach((s) => {
        t.$clearSub$(s), Gs(s);
      }),
      (e.$componentQrl$ = null),
      (e.$seq$ = null),
      (e.$tasks$ = null);
  };
let Le;
function Gl(e) {
  if (Le === void 0) {
    const t = me();
    if (t && t.$locale$) return t.$locale$;
    if (e !== void 0) return e;
    throw new Error("Reading `locale` outside of context.");
  }
  return Le;
}
function ns(e, t) {
  const n = Le;
  try {
    return (Le = e), t();
  } finally {
    Le = n;
  }
}
function Kl(e) {
  Le = e;
}
let Ge;
const me = () => {
    if (!Ge) {
      const e = typeof document < "u" && document && document.__q_context__;
      return e ? (O(e) ? (document.__q_context__ = Ys(e)) : e) : void 0;
    }
    return Ge;
  },
  Yl = () => {
    const e = me();
    if (!e) throw j(14);
    return e;
  },
  Ks = () => {
    const e = me();
    if (!e || e.$event$ !== "qRender") throw j(20);
    return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
  };
function G(e, t, ...n) {
  const s = Ge;
  let l;
  try {
    (Ge = e), (l = t.apply(this, n));
  } finally {
    Ge = s;
  }
  return l;
}
const Xl = (e, t) => {
    const n = e.$waitOn$;
    if (n.length === 0) {
      const s = t();
      Z(s) && n.push(s);
    } else n.push(Promise.all(n).then(t));
  },
  Ys = (e) => {
    const t = e[0],
      n = t.closest("[q\\:container]"),
      s = (n == null ? void 0 : n.getAttribute("q:locale")) || void 0;
    return s && Kl(s), oe(s, void 0, t, e[1], e[2]);
  },
  oe = (e, t, n, s, l) => ({
    $url$: l,
    $i$: 0,
    $hostElement$: t,
    $element$: n,
    $event$: s,
    $qrl$: void 0,
    $waitOn$: void 0,
    $subscriber$: void 0,
    $renderCtx$: void 0,
    $locale$: e,
  }),
  Xs = (e) => e.closest("[q\\:container]"),
  Tt = (e) => G(void 0, e),
  ss = oe(void 0, void 0, void 0, "qRender"),
  ge = (e, t) => ((ss.$subscriber$ = t), G(ss, () => e.value)),
  e1 = (e) => {
    const t = me();
    return (
      t &&
        t.$hostElement$ &&
        t.$renderCtx$ &&
        (se(t.$hostElement$, t.$renderCtx$.$static$.$containerState$).$flags$ |=
          8),
      e
    );
  },
  eo = (e, t = 0) => {
    for (let n = 0; n < e.length; n++)
      (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
    return Number(Math.abs(t)).toString(36);
  },
  to = (e, t) => `${eo(e.$hash$)}-${t}`,
  no = (e) => "⭐️" + e,
  t1 = (e) => {
    const t = e.join("|");
    if (t.length > 0) return t;
  };
var n1;
const xt = "<!--qkssr-f-->";
class s1 {
  constructor(t) {
    (this.nodeType = t), (this[n1] = null);
  }
}
n1 = Wt;
const so = () => new s1(9),
  $2 = async (e, t) => {
    var g, v, w;
    const n = t.containerTagName,
      s = Lt(1).$element$,
      l = ks(s, t.base ?? "/");
    l.$serverData$.locale = (g = t.serverData) == null ? void 0 : g.locale;
    const o = so(),
      r = Ps(o, l),
      i = t.beforeContent ?? [],
      c = {
        $static$: {
          $contexts$: [],
          $headNodes$: n === "html" ? i : [],
          $locale$: (v = t.serverData) == null ? void 0 : v.locale,
          $textNodes$: new Map(),
        },
        $projectedChildren$: void 0,
        $projectedCtxs$: void 0,
        $invocationContext$: void 0,
      };
    let u = "ssr";
    t.containerAttributes["q:render"] &&
      (u = `${t.containerAttributes["q:render"]}-${u}`);
    const $ = {
        ...t.containerAttributes,
        "q:container": "paused",
        "q:version": "1.2.15",
        "q:render": u,
        "q:base": t.base,
        "q:locale": (w = t.serverData) == null ? void 0 : w.locale,
        "q:manifest-hash": t.manifestHash,
      },
      h = n === "html" ? [e] : [i, e];
    n !== "html" && ($.class = "qc📦" + ($.class ? " " + $.class : "")),
      t.serverData && (l.$serverData$ = t.serverData),
      (e = a(n, null, $, h, De | be, null)),
      (l.$hostsRendering$ = new Set()),
      await Promise.resolve().then(() => lo(e, r, c, t.stream, l, t));
  },
  lo = async (e, t, n, s, l, o) => {
    const r = o.beforeClose;
    return (
      await On(
        e,
        t,
        n,
        s,
        0,
        r
          ? (i) => {
              const c = r(n.$static$.$contexts$, l, !1, n.$static$.$textNodes$);
              return ue(c, t, n, i, 0, void 0);
            }
          : void 0,
      ),
      t
    );
  },
  oo = async (e, t, n, s, l) => {
    s.write(xt);
    const o = e.props.children;
    let r;
    if (le(o)) {
      const i = o({
        write(c) {
          s.write(c), s.write(xt);
        },
      });
      if (Z(i)) return i;
      r = i;
    } else r = o;
    for await (const i of r) await ue(i, t, n, s, l, void 0), s.write(xt);
  },
  l1 = (e, t, n, s, l, o, r, i) => {
    var _;
    const c = e.props,
      u = c["q:renderFn"];
    if (u) return (t.$componentQrl$ = u), co(s, l, o, t, e, r, i);
    let $ = "<!--qv" + io(c);
    const h = "q:s" in c,
      g = e.key != null ? String(e.key) : null;
    h &&
      ((_ = s.$cmpCtx$) == null || _.$id$, ($ += " q:sref=" + s.$cmpCtx$.$id$)),
      g != null && ($ += " q:key=" + g),
      ($ += "-->"),
      o.write($);
    const v = e.props[W];
    if (v) return o.write(v), void o.write(on);
    if (n) for (const f of n) Vn(f.type, f.props, o);
    const w = o1(e.children, s, l, o, r);
    return A(w, () => {
      var d;
      if (!h && !i) return void o.write(on);
      let f;
      if (h) {
        const z = (d = l.$projectedChildren$) == null ? void 0 : d[g];
        if (z) {
          const [y, p] = l.$projectedCtxs$,
            k = mt(y);
          (k.$slotCtx$ = t),
            (l.$projectedChildren$[g] = void 0),
            (f = ue(z, k, p, o, r));
        }
      }
      return (
        i && (f = A(f, () => i(o))),
        A(f, () => {
          o.write(on);
        })
      );
    });
  },
  on = "<!--/qv-->",
  ro = (e) => {
    let t = "";
    for (const n in e) {
      if (n === W) continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + '="' + s + '"'));
    }
    return t;
  },
  io = (e) => {
    let t = "";
    for (const n in e) {
      if (n === "children" || n === W) continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + "=" + s));
    }
    return t;
  },
  Vn = (e, t, n) => {
    if ((n.write("<" + e + ro(t) + ">"), c1[e])) return;
    const s = t[W];
    s != null && n.write(s), n.write(`</${e}>`);
  },
  co = (e, t, n, s, l, o, r) => (
    uo(e, s, l.props.props),
    A(Et(e, s), (i) => {
      const c = s.$element$,
        u = i.rCtx,
        $ = oe(t.$static$.$locale$, c, void 0);
      ($.$subscriber$ = [0, c]), ($.$renderCtx$ = u);
      const h = {
          $static$: t.$static$,
          $projectedChildren$: ao(l.children, t),
          $projectedCtxs$: [e, t],
          $invocationContext$: $,
        },
        g = [];
      if (s.$appendStyles$) {
        const f = 4 & o ? t.$static$.$headNodes$ : g;
        for (const d of s.$appendStyles$)
          f.push(
            a(
              "style",
              { [jt]: d.styleId, [W]: d.content, hidden: "" },
              null,
              null,
              0,
              null,
            ),
          );
      }
      const v = st(e),
        w = s.$scopeIds$ ? t1(s.$scopeIds$) : void 0,
        _ = x(l.type, { "q:sstyle": w, "q:id": v, children: i.node }, 0, l.key);
      return (
        (s.$id$ = v),
        t.$static$.$contexts$.push(s),
        l1(_, s, g, u, h, n, o, (f) => {
          if (s.$flags$ & be) {
            const y = Lt(1),
              p = y.li;
            p.push(...s.li), (s.$flags$ &= ~be), (y.$id$ = st(e));
            const k = { type: "placeholder", hidden: "", "q:id": y.$id$ };
            t.$static$.$contexts$.push(y);
            const M = zn(p);
            for (const b of M) {
              const S = a1(b[0]);
              (k[S] = Wn(b[1], y)), _t(S, e.$static$.$containerState$);
            }
            Vn("script", k, f);
          }
          const d = h.$projectedChildren$;
          let z;
          if (d) {
            const y = Object.keys(d).map((b) => {
                const S = d[b];
                if (S)
                  return a(
                    "q:template",
                    { [ee]: b, hidden: "", "aria-hidden": "true" },
                    null,
                    S,
                    0,
                    null,
                  );
              }),
              [p, k] = h.$projectedCtxs$,
              M = mt(p);
            (M.$slotCtx$ = s), (z = ue(y, M, k, f, 0, void 0));
          }
          return r ? A(z, () => r(f)) : z;
        })
      );
    })
  ),
  ao = (e, t) => {
    const n = r1(e, t);
    if (n === null) return;
    const s = {};
    for (const l of n) {
      let o = "";
      Qe(l) && (o = l.props[ee] ?? ""), (s[o] || (s[o] = [])).push(l);
    }
    return s;
  },
  Lt = (e) => {
    const t = new s1(e);
    return Yt(t);
  },
  On = (e, t, n, s, l, o) => {
    var u;
    const r = e.type,
      i = t.$cmpCtx$;
    if (typeof r == "string") {
      const $ = e.key,
        h = e.props,
        g = e.immutableProps,
        v = Lt(1),
        w = v.$element$,
        _ = r === "head";
      let f = "<" + r,
        d = !1,
        z = !1,
        y = "",
        p = null;
      if (g)
        for (const b in g) {
          let S = g[b];
          if (zt(b)) {
            Mt(v.li, b, S, void 0);
            continue;
          }
          const E = ls(b);
          if (
            (te(S) && ((S = ge(S, [1, w, S, i.$element$, E])), (d = !0)),
            b === W)
          ) {
            p = S;
            continue;
          }
          b.startsWith(un) && _t(b.slice(15), t.$static$.$containerState$);
          const L = os(E, S);
          L != null &&
            (E === "class"
              ? (y = L)
              : E === "value" && r === "textarea"
                ? (p = Ke(L))
                : rs(E) ||
                  (f += " " + (S === "" ? E : E + '="' + wt(L) + '"')));
        }
      for (const b in h) {
        let S = h[b];
        if (b === "ref") {
          S !== void 0 && (Mn(S, w), (z = !0));
          continue;
        }
        if (zt(b)) {
          Mt(v.li, b, S, void 0);
          continue;
        }
        const E = ls(b);
        if (
          (te(S) && ((S = ge(S, [2, i.$element$, S, w, E])), (d = !0)), b === W)
        ) {
          p = S;
          continue;
        }
        b.startsWith(un) && _t(b.slice(15), t.$static$.$containerState$);
        const L = os(E, S);
        L != null &&
          (E === "class"
            ? (y = L)
            : E === "value" && r === "textarea"
              ? (p = Ke(L))
              : rs(E) || (f += " " + (S === "" ? E : E + '="' + wt(L) + '"')));
      }
      const k = v.li;
      if (i) {
        if ((u = i.$scopeIds$) != null && u.length) {
          const b = i.$scopeIds$.join(" ");
          y = y ? `${b} ${y}` : b;
        }
        i.$flags$ & be && (k.push(...i.li), (i.$flags$ &= ~be));
      }
      if (
        (_ && (l |= 1),
        r in $o && (l |= 16),
        r in ho && (l |= 8),
        y && (f += ' class="' + wt(y) + '"'),
        k.length > 0)
      ) {
        const b = zn(k),
          S = (16 & l) != 0;
        for (const E of b) {
          const L = S ? a1(E[0]) : E[0];
          (f += " " + L + '="' + Wn(E[1], v) + '"'),
            _t(L, t.$static$.$containerState$);
        }
      }
      if (
        ($ != null && (f += ' q:key="' + wt($) + '"'), z || d || k.length > 0)
      ) {
        if (z || d || go(k)) {
          const b = st(t);
          (f += ' q:id="' + b + '"'), (v.$id$ = b);
        }
        n.$static$.$contexts$.push(v);
      }
      if ((1 & l && (f += " q:head"), (f += ">"), s.write(f), r in c1)) return;
      if (p != null) return s.write(String(p)), void s.write(`</${r}>`);
      r === "html" ? (l |= 4) : (l &= -5), 2 & e.flags && (l |= 1024);
      const M = ue(e.children, t, n, s, l);
      return A(M, () => {
        if (_) {
          for (const b of n.$static$.$headNodes$) Vn(b.type, b.props, s);
          n.$static$.$headNodes$.length = 0;
        }
        if (o)
          return A(o(s), () => {
            s.write(`</${r}>`);
          });
        s.write(`</${r}>`);
      });
    }
    if (r === Me) {
      const $ = Lt(111);
      return (
        ($.$parentCtx$ = t.$slotCtx$ || t.$cmpCtx$),
        i && 8 & i.$flags$ && vo(i, $),
        l1(e, $, void 0, t, n, s, l, o)
      );
    }
    if (r === Is) return void s.write(e.props.data);
    if (r === Rs) return oo(e, t, n, s, l);
    const c = G(n.$invocationContext$, r, e.props, e.key, e.flags, e.dev);
    return Vs(c, e)
      ? On(x(Me, { children: c }, 0, e.key), t, n, s, l, o)
      : ue(c, t, n, s, l, o);
  },
  ue = (e, t, n, s, l, o) => {
    var r;
    if (e != null && typeof e != "boolean") {
      if (!He(e) && typeof e != "number") {
        if (Qe(e)) return On(e, t, n, s, l, o);
        if (O(e)) return o1(e, t, n, s, l);
        if (te(e)) {
          const i = 8 & l,
            c = (r = t.$cmpCtx$) == null ? void 0 : r.$element$;
          let u;
          if (c) {
            if (!i) {
              const $ = st(t);
              u = ge(
                e,
                1024 & l ? [3, "#" + $, e, "#" + $] : [4, c, e, "#" + $],
              );
              const h = Ce(u);
              return (
                n.$static$.$textNodes$.set(h, $),
                void s.write(`<!--t=${$}-->${Ke(h)}<!---->`)
              );
            }
            u = G(n.$invocationContext$, () => e.value);
          }
          return void s.write(Ke(Ce(u)));
        }
        return Z(e)
          ? (s.write(xt), e.then((i) => ue(i, t, n, s, l, o)))
          : void et();
      }
      s.write(Ke(String(e)));
    }
  },
  o1 = (e, t, n, s, l) => {
    if (e == null) return;
    if (!O(e)) return ue(e, t, n, s, l);
    const o = e.length;
    if (o === 1) return ue(e[0], t, n, s, l);
    if (o === 0) return;
    let r = 0;
    const i = [];
    return e.reduce(
      (c, u, $) => {
        const h = [];
        i.push(h);
        const g = ue(
            u,
            t,
            n,
            c
              ? {
                  write(w) {
                    r === $ ? s.write(w) : h.push(w);
                  },
                }
              : s,
            l,
          ),
          v = () => {
            r++, i.length > r && i[r].forEach((w) => s.write(w));
          };
        return Z(g) && c
          ? Promise.all([g, c]).then(v)
          : Z(g)
            ? g.then(v)
            : c
              ? c.then(v)
              : void r++;
      },
      void 0,
    );
  },
  r1 = (e, t) => {
    if (e == null) return null;
    const n = i1(e, t),
      s = O(n) ? n : [n];
    return s.length === 0 ? null : s;
  },
  i1 = (e, t) => {
    if (e == null) return null;
    if (O(e)) return e.flatMap((n) => i1(n, t));
    if (
      Qe(e) &&
      le(e.type) &&
      e.type !== Is &&
      e.type !== Rs &&
      e.type !== Me
    ) {
      const n = G(t.$invocationContext$, e.type, e.props, e.key, e.flags);
      return r1(n, t);
    }
    return e;
  },
  uo = (e, t, n) => {
    const s = Object.keys(n),
      l = Ut();
    if (((t.$props$ = pt(l, e.$static$.$containerState$)), s.length === 0))
      return;
    const o = (l[m] = n[m] ?? U);
    for (const r of s)
      r !== "children" &&
        r !== ee &&
        (te(o[r]) ? (l["$$" + r] = o[r]) : (l[r] = n[r]));
  },
  ls = (e) => (e === "htmlFor" ? "for" : e),
  os = (e, t) =>
    e === "class"
      ? qt(t)
      : e === "style"
        ? Zt(t)
        : Ds(e) || e === "draggable" || e === "spellcheck"
          ? t != null
            ? String(t)
            : t
          : t === !1 || t == null
            ? null
            : t === !0
              ? ""
              : String(t),
  $o = { head: !0, style: !0, script: !0, link: !0, meta: !0 },
  ho = { title: !0, style: !0, script: !0, noframes: !0, textarea: !0 },
  c1 = {
    area: !0,
    base: !0,
    basefont: !0,
    bgsound: !0,
    br: !0,
    col: !0,
    embed: !0,
    frame: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
  po = /[&<>]/g,
  fo = /[&"]/g,
  _t = (e, t) => {
    t.$events$.add(zs(e));
  },
  Ke = (e) =>
    e.replace(po, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        default:
          return "";
      }
    }),
  wt = (e) =>
    e.replace(fo, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        default:
          return "";
      }
    }),
  mo = /[>/="'\u0009\u000a\u000c\u0020]/,
  rs = (e) => mo.test(e),
  go = (e) => e.some((t) => t[1].$captureRef$ && t[1].$captureRef$.length > 0),
  vo = (e, t) => {
    const n = e.$dynamicSlots$ || (e.$dynamicSlots$ = []);
    n.includes(t) || n.push(t);
  },
  a1 = (e) => (e === "on:qvisible" ? "on-document:qinit" : e),
  a = (e, t, n, s, l, o) => {
    const r = o == null ? null : String(o);
    return new gt(e, t ?? U, n, s, l, r);
  },
  yo = (e, t, n, s, l, o) => {
    let r = null;
    return (
      t && "children" in t && ((r = t.children), delete t.children),
      a(e, t, n, r, s, l)
    );
  },
  x = (e, t, n, s, l) => {
    const o = s == null ? null : String(s),
      r = t ?? U;
    if (typeof e == "string" && m in r) {
      const c = {};
      for (const [u, $] of Object.entries(r[m])) c[u] = $ === m ? r[u] : $;
      return a(e, null, c, r.children, n, s);
    }
    const i = new gt(e, r, null, r.children, n, o);
    return typeof e == "string" && t && delete t.children, i;
  },
  d2 = (e, t, n) => {
    const s = n == null ? null : String(n),
      l = Tt(() => {
        const r = t.children;
        return typeof e == "string" && delete t.children, r;
      });
    return (
      He(e) &&
        "className" in t &&
        ((t.class = t.className), delete t.className),
      new gt(e, t, null, l, 0, s)
    );
  },
  It = ":skipRender";
class gt {
  constructor(t, n, s, l, o, r = null) {
    (this.type = t),
      (this.props = n),
      (this.immutableProps = s),
      (this.children = l),
      (this.flags = o),
      (this.key = r);
  }
}
const Me = (e) => e.children,
  Qe = (e) => e instanceof gt,
  C = (e) => e.children,
  vt = "http://www.w3.org/2000/svg",
  Y = 1,
  Rt = 2,
  At = [],
  Pt = (e, t, n, s) => {
    t.$elm$;
    const l = n.$children$;
    if (l.length === 1 && l[0].$type$ === It)
      return void (n.$children$ = t.$children$);
    const o = t.$elm$;
    let r = Dt;
    t.$children$ === At && o.nodeName === "HEAD" && ((r = xo), (s |= Rt));
    const i = wo(t, r);
    return i.length > 0 && l.length > 0
      ? bo(e, o, i, l, s)
      : i.length > 0 && l.length === 0
        ? Nn(e.$static$, i, 0, i.length - 1)
        : l.length > 0
          ? d1(e, o, null, l, 0, l.length - 1, s)
          : void 0;
  },
  wo = (e, t) => {
    const n = e.$children$;
    return n === At ? (e.$children$ = u1(e.$elm$, t)) : n;
  },
  bo = (e, t, n, s, l) => {
    let o = 0,
      r = 0,
      i = n.length - 1,
      c = n[0],
      u = n[i],
      $ = s.length - 1,
      h = s[0],
      g = s[$],
      v,
      w,
      _;
    const f = [],
      d = e.$static$;
    for (; o <= i && r <= $; )
      if (c == null) c = n[++o];
      else if (u == null) u = n[--i];
      else if (h == null) h = s[++r];
      else if (g == null) g = s[--$];
      else if (c.$id$ === h.$id$)
        f.push(Ue(e, c, h, l)), (c = n[++o]), (h = s[++r]);
      else if (u.$id$ === g.$id$)
        f.push(Ue(e, u, g, l)), (u = n[--i]), (g = s[--$]);
      else if (c.$key$ && c.$id$ === g.$id$)
        c.$elm$,
          u.$elm$,
          f.push(Ue(e, c, g, l)),
          Oo(d, t, c.$elm$, u.$elm$),
          (c = n[++o]),
          (g = s[--$]);
      else if (u.$key$ && u.$id$ === h.$id$)
        c.$elm$,
          u.$elm$,
          f.push(Ue(e, u, h, l)),
          Ze(d, t, u.$elm$, c.$elm$),
          (u = n[--i]),
          (h = s[++r]);
      else {
        if (
          (v === void 0 && (v = Co(n, o, i)), (w = v[h.$key$]), w === void 0)
        ) {
          const y = rt(e, h, l, f);
          Ze(d, t, y, c == null ? void 0 : c.$elm$);
        } else if (((_ = n[w]), _.$type$ !== h.$type$)) {
          const y = rt(e, h, l, f);
          A(y, (p) => {
            Ze(d, t, p, c == null ? void 0 : c.$elm$);
          });
        } else
          f.push(Ue(e, _, h, l)),
            (n[w] = void 0),
            _.$elm$,
            Ze(d, t, _.$elm$, c.$elm$);
        h = s[++r];
      }
    r <= $ &&
      f.push(d1(e, t, s[$ + 1] == null ? null : s[$ + 1].$elm$, s, r, $, l));
    let z = _n(f);
    return (
      o <= i &&
        (z = A(z, () => {
          Nn(d, n, o, i);
        })),
      z
    );
  },
  Te = (e, t) => {
    const n = $e(e) ? e.close : null,
      s = [];
    let l = e.firstChild;
    for (; (l = Hn(l)) && (t(l) && s.push(l), (l = l.nextSibling), l !== n); );
    return s;
  },
  u1 = (e, t) => Te(e, t).map(So),
  So = (e) => {
    var t;
    return Se(e) ? ((t = ne(e)) == null ? void 0 : t.$vdom$) ?? Ct(e) : Ct(e);
  },
  Ct = (e) => {
    if (Be(e)) {
      const t = new pe(e.localName, {}, null, At, 0, yn(e));
      return (t.$elm$ = e), t;
    }
    if (bn(e)) {
      const t = new pe(e.nodeName, U, null, At, 0, null);
      return (t.$text$ = e.data), (t.$elm$ = e), t;
    }
  },
  xo = (e) => {
    const t = e.nodeType;
    return t === 1 ? e.hasAttribute("q:head") : t === 111;
  },
  vn = (e) => e.nodeName === "Q:TEMPLATE",
  Dt = (e) => {
    const t = e.nodeType;
    if (t === 3 || t === 111) return !0;
    if (t !== 1) return !1;
    const n = e.nodeName;
    return (
      n !== "Q:TEMPLATE" &&
      (n === "HEAD"
        ? e.hasAttribute("q:head")
        : n !== "STYLE" || !e.hasAttribute(jt))
    );
  },
  $1 = (e) => {
    const t = {};
    for (const n of e) {
      const s = _o(n);
      (
        t[s] ?? (t[s] = new pe(Ve, { "q:s": "" }, null, [], 0, s))
      ).$children$.push(n);
    }
    return t;
  },
  Ue = (e, t, n, s) => {
    t.$type$, n.$type$, t.$key$, n.$key$, t.$id$, n.$id$;
    const l = t.$elm$,
      o = n.$type$,
      r = e.$static$,
      i = r.$containerState$,
      c = e.$cmpCtx$;
    if (((n.$elm$ = l), o === "#text")) {
      r.$visited$.push(l);
      const g = n.$signal$;
      return (
        g && (n.$text$ = Ce(ge(g, [4, c.$element$, g, l]))),
        void ve(r, l, "data", n.$text$)
      );
    }
    const u = n.$props$,
      $ = n.$flags$,
      h = se(l, i);
    if (o !== Ve) {
      let g = (s & Y) != 0;
      if ((g || o !== "svg" || ((s |= Y), (g = !0)), u !== U)) {
        !(1 & $) && (h.li.length = 0);
        const v = t.$props$;
        n.$props$ = v;
        for (const w in u) {
          let _ = u[w];
          if (w !== "ref")
            if (zt(w)) {
              const f = Mt(h.li, w, _, i.$containerEl$);
              f1(r, l, f);
            } else
              te(_) && (_ = ge(_, [1, c.$element$, _, l, w])),
                w === "class" ? (_ = Ln(_, c)) : w === "style" && (_ = Zt(_)),
                v[w] !== _ && ((v[w] = _), Fn(r, l, w, _, g));
          else _ !== void 0 && Mn(_, l);
        }
      }
      return 2 & $ ||
        (g && o === "foreignObject" && (s &= ~Y), u[W] !== void 0) ||
        o === "textarea"
        ? void 0
        : Pt(e, t, n, s);
    }
    if ("q:renderFn" in u) {
      const g = u.props;
      Io(i, h, g);
      let v = !!(h.$flags$ & De);
      return (
        v ||
          h.$componentQrl$ ||
          h.$element$.hasAttribute("q:id") ||
          (Cs(e, h),
          (h.$componentQrl$ = g["q:renderFn"]),
          h.$componentQrl$,
          (v = !0)),
        v ? A(In(e, h, s), () => is(e, h, n, s)) : is(e, h, n, s)
      );
    }
    if ("q:s" in u) return c.$slots$, void c.$slots$.push(n);
    if (W in u) ve(r, l, "innerHTML", u[W]);
    else if (!(2 & $)) return Pt(e, t, n, s);
  },
  is = (e, t, n, s) => {
    if (2 & n.$flags$) return;
    const l = e.$static$,
      o = $1(n.$children$),
      r = p1(t);
    for (const i in r.slots)
      if (!o[i]) {
        const c = r.slots[i],
          u = u1(c, Dt);
        if (u.length > 0) {
          const $ = ne(c);
          $ && $.$vdom$ && ($.$vdom$.$children$ = []),
            Nn(l, u, 0, u.length - 1);
        }
      }
    for (const i in r.templates) {
      const c = r.templates[i];
      c && !o[i] && ((r.templates[i] = void 0), y1(l, c));
    }
    return _n(
      Object.keys(o).map((i) => {
        const c = o[i],
          u = h1(l, r, t, i, e.$static$.$containerState$),
          $ = Rn(u),
          h = mt(e),
          g = u.$element$;
        (h.$slotCtx$ = u), (u.$vdom$ = c), (c.$elm$ = g);
        let v = s & ~Y;
        g.isSvg && (v |= Y);
        const w = l.$addSlots$.findIndex((_) => _[0] === g);
        return w >= 0 && l.$addSlots$.splice(w, 1), Pt(h, $, c, v);
      }),
    );
  },
  d1 = (e, t, n, s, l, o, r) => {
    const i = [];
    for (; l <= o; ++l) {
      const c = s[l],
        u = rt(e, c, r, i);
      Ze(e.$static$, t, u, n);
    }
    return kt(i);
  },
  Nn = (e, t, n, s) => {
    for (; n <= s; ++n) {
      const l = t[n];
      l && (l.$elm$, y1(e, l.$elm$));
    }
  },
  h1 = (e, t, n, s, l) => {
    const o = t.slots[s];
    if (o) return se(o, l);
    const r = t.templates[s];
    if (r) return se(r, l);
    const i = w1(e.$doc$, s),
      c = Yt(i);
    return (c.$parentCtx$ = n), Bo(e, n.$element$, i), (t.templates[s] = i), c;
  },
  _o = (e) => e.$props$[ee] ?? "",
  rt = (e, t, n, s) => {
    const l = t.$type$,
      o = e.$static$.$doc$,
      r = e.$cmpCtx$;
    if (l === "#text") {
      const f = t.$signal$,
        d = o.createTextNode(t.$text$);
      return (
        f &&
          (d.data = t.$text$ =
            Ce(ge(f, 4 & n ? [3, d, f, d] : [4, r.$element$, f, d]))),
        (t.$elm$ = d)
      );
    }
    let i,
      c = !!(n & Y);
    c || l !== "svg" || ((n |= Y), (c = !0));
    const u = l === Ve,
      $ = t.$props$,
      h = e.$static$,
      g = h.$containerState$;
    u
      ? (i = Jo(o, c))
      : l === "head"
        ? ((i = o.head), (n |= Rt))
        : ((i = Bn(o, l, c)), (n &= ~Rt)),
      2 & t.$flags$ && (n |= 4),
      (t.$elm$ = i);
    const v = Yt(i);
    if (((v.$parentCtx$ = e.$slotCtx$ ?? e.$cmpCtx$), u)) {
      if ("q:renderFn" in $) {
        const f = $["q:renderFn"],
          d = Ut(),
          z = g.$subsManager$.$createManager$(),
          y = new Proxy(d, new Ls(g, z)),
          p = $.props;
        if ((g.$proxyMap$.set(d, y), (v.$props$ = y), p !== U)) {
          const M = (d[m] = p[m] ?? U);
          for (const b in p)
            if (b !== "children" && b !== ee) {
              const S = M[b];
              te(S) ? (d["$$" + b] = S) : (d[b] = p[b]);
            }
        }
        Cs(e, v), (v.$componentQrl$ = f);
        const k = A(In(e, v, n), () => {
          let M = t.$children$;
          if (M.length === 0) return;
          M.length === 1 && M[0].$type$ === It && (M = M[0].$children$);
          const b = p1(v),
            S = [],
            E = $1(M);
          for (const L in E) {
            const Q = E[L],
              F = h1(h, b, v, L, h.$containerState$),
              ie = mt(e),
              T = F.$element$;
            (ie.$slotCtx$ = F), (F.$vdom$ = Q), (Q.$elm$ = T);
            let K = n & ~Y;
            T.isSvg && (K |= Y);
            for (const H of Q.$children$) {
              const We = rt(ie, H, K, S);
              H.$elm$, H.$elm$, v1(h, T, We);
            }
          }
          return kt(S);
        });
        return Z(k) && s.push(k), i;
      }
      if ("q:s" in $)
        r.$slots$,
          Wo(i, t.$key$),
          X(i, "q:sref", r.$id$),
          X(i, "q:s", ""),
          r.$slots$.push(t),
          h.$addSlots$.push([i, r.$element$]);
      else if (W in $) return ve(h, i, "innerHTML", $[W]), i;
    } else {
      if (
        (t.$immutableProps$ && as(h, v, r, t.$immutableProps$, c, !0),
        $ !== U && ((v.$vdom$ = t), (t.$props$ = as(h, v, r, $, c, !1))),
        c && l === "foreignObject" && ((c = !1), (n &= ~Y)),
        r)
      ) {
        const f = r.$scopeIds$;
        f &&
          f.forEach((d) => {
            i.classList.add(d);
          }),
          r.$flags$ & be && (v.li.push(...r.li), (r.$flags$ &= ~be));
      }
      for (const f of v.li) f1(h, i, f[0]);
      if ($[W] !== void 0) return i;
      c && l === "foreignObject" && ((c = !1), (n &= ~Y));
    }
    let w = t.$children$;
    if (w.length === 0) return i;
    w.length === 1 && w[0].$type$ === It && (w = w[0].$children$);
    const _ = w.map((f) => rt(e, f, n, s));
    for (const f of _) it(i, f);
    return i;
  },
  ko = (e) => {
    const t = e.$slots$;
    return t || (e.$element$.parentElement, (e.$slots$ = zo(e)));
  },
  p1 = (e) => {
    const t = ko(e),
      n = {},
      s = {},
      l = Array.from(e.$element$.childNodes).filter(vn);
    for (const o of t) o.$elm$, (n[o.$key$ ?? ""] = o.$elm$);
    for (const o of l) s[re(o, ee) ?? ""] = o;
    return { slots: n, templates: s };
  },
  zo = (e) => {
    const t = e.$element$.parentElement;
    return Yo(t, "q:sref", e.$id$).map(Ct);
  },
  Mo = (e, t, n) => (ve(e, t.style, "cssText", n), !0),
  Eo = (e, t, n) => (
    t.namespaceURI === vt ? ct(e, t, "class", n) : ve(e, t, "className", n), !0
  ),
  cs = (e, t, n, s) => (
    s in t &&
      t[s] !== n &&
      (t.tagName === "SELECT" ? Vo(e, t, s, n) : ve(e, t, s, n)),
    !0
  ),
  Je = (e, t, n, s) => (ct(e, t, s.toLowerCase(), n), !0),
  qo = (e, t, n) => (ve(e, t, "innerHTML", n), !0),
  To = () => !0,
  Lo = {
    style: Mo,
    class: Eo,
    value: cs,
    checked: cs,
    href: Je,
    list: Je,
    form: Je,
    tabIndex: Je,
    download: Je,
    innerHTML: To,
    [W]: qo,
  },
  Fn = (e, t, n, s, l) => {
    if (Ds(n)) return void ct(e, t, n, s != null ? String(s) : s);
    const o = Lo[n];
    (o && o(e, t, s, n)) ||
      (l || !(n in t)
        ? (n.startsWith(un) && m1(n.slice(15)), ct(e, t, n, s))
        : ve(e, t, n, s));
  },
  as = (e, t, n, s, l, o) => {
    const r = {},
      i = t.$element$;
    for (const c in s) {
      let u = s[c];
      if (c !== "ref")
        if (zt(c)) Mt(t.li, c, u, e.$containerState$.$containerEl$);
        else {
          if (
            (te(u) &&
              (u = ge(
                u,
                o ? [1, i, u, n.$element$, c] : [2, n.$element$, u, i, c],
              )),
            c === "class")
          ) {
            if (((u = Ln(u, n)), !u)) continue;
          } else c === "style" && (u = Zt(u));
          (r[c] = u), Fn(e, i, c, u, l);
        }
      else u !== void 0 && Mn(u, i);
    }
    return r;
  },
  Io = (e, t, n) => {
    let s = t.$props$;
    if ((s || (t.$props$ = s = pt(Ut(), e)), n === U)) return;
    const l = J(s),
      o = je(s),
      r = (o[m] = n[m] ?? U);
    for (const i in n)
      if (i !== "children" && i !== ee && !r[i]) {
        const c = n[i];
        o[i] !== c && ((o[i] = c), l.$notifySubs$(i));
      }
  },
  Ye = (e, t, n, s) => {
    if ((n.$clearSub$(e), Be(e))) {
      if (s && e.hasAttribute("q:s")) return void t.$rmSlots$.push(e);
      const l = ne(e);
      l && Zl(l, n);
      const o = $e(e) ? e.close : null;
      let r = e.firstChild;
      for (; (r = Hn(r)) && (Ye(r, t, n, !0), (r = r.nextSibling), r !== o); );
    }
  },
  Ro = async (e) => {
    jo(e);
  },
  it = (e, t) => {
    $e(t) ? t.appendTo(e) : e.appendChild(t);
  },
  Ao = (e, t) => {
    $e(t) ? t.remove() : e.removeChild(t);
  },
  Po = (e, t, n) => {
    $e(t)
      ? t.insertBeforeTo(e, (n == null ? void 0 : n.nextSibling) ?? null)
      : e.insertBefore(t, (n == null ? void 0 : n.nextSibling) ?? null);
  },
  Xt = (e, t, n) => {
    $e(t) ? t.insertBeforeTo(e, Vt(n)) : e.insertBefore(t, Vt(n));
  },
  Co = (e, t, n) => {
    const s = {};
    for (let l = t; l <= n; ++l) {
      const o = e[l].$key$;
      o != null && (s[o] = l);
    }
    return s;
  },
  f1 = (e, t, n) => {
    n.startsWith("on:") || ct(e, t, n, ""), m1(n);
  },
  m1 = (e) => {
    var t;
    {
      const n = zs(e);
      try {
        ((t = globalThis).qwikevents || (t.qwikevents = [])).push(n);
      } catch {}
    }
  },
  ct = (e, t, n, s) => {
    e.$operations$.push({ $operation$: Do, $args$: [t, n, s] });
  },
  Do = (e, t, n) => {
    if (n == null || n === !1) e.removeAttribute(t);
    else {
      const s = n === !0 ? "" : String(n);
      X(e, t, s);
    }
  },
  ve = (e, t, n, s) => {
    e.$operations$.push({ $operation$: g1, $args$: [t, n, s] });
  },
  Vo = (e, t, n, s) => {
    e.$postOperations$.push({ $operation$: g1, $args$: [t, n, s] });
  },
  g1 = (e, t, n) => {
    try {
      (e[t] = n ?? ""), n == null && Fe(e) && Se(e) && e.removeAttribute(t);
    } catch (s) {
      Xe(Ft(6), { node: e, key: t, value: n }, s);
    }
  },
  Bn = (e, t, n) => (n ? e.createElementNS(vt, t) : e.createElement(t)),
  Ze = (e, t, n, s) => (
    e.$operations$.push({ $operation$: Xt, $args$: [t, n, s || null] }), n
  ),
  Oo = (e, t, n, s) => (
    e.$operations$.push({ $operation$: Po, $args$: [t, n, s || null] }), n
  ),
  v1 = (e, t, n) => (
    e.$operations$.push({ $operation$: it, $args$: [t, n] }), n
  ),
  No = (e, t) => {
    e.$containerState$.$styleIds$.add(t.styleId),
      e.$postOperations$.push({
        $operation$: Fo,
        $args$: [e.$containerState$, t],
      });
  },
  Fo = (e, t) => {
    const n = e.$containerEl$,
      s = $t(n),
      l = s.documentElement === n,
      o = s.head,
      r = s.createElement("style");
    X(r, jt, t.styleId),
      X(r, "hidden", ""),
      (r.textContent = t.content),
      l && o ? it(o, r) : Xt(n, r, n.firstChild);
  },
  Bo = (e, t, n) => {
    e.$operations$.push({ $operation$: Ho, $args$: [t, n] });
  },
  Ho = (e, t) => {
    Xt(e, t, e.firstChild);
  },
  y1 = (e, t) => {
    Be(t) && Ye(t, e, e.$containerState$.$subsManager$, !0),
      e.$operations$.push({ $operation$: Qo, $args$: [t, e] });
  },
  Qo = (e) => {
    const t = e.parentElement;
    t && Ao(t, e);
  },
  w1 = (e, t) => {
    const n = Bn(e, "q:template", !1);
    return X(n, ee, t), X(n, "hidden", ""), X(n, "aria-hidden", "true"), n;
  },
  jo = (e) => {
    for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$);
    Uo(e);
  },
  yn = (e) => re(e, "q:key"),
  Wo = (e, t) => {
    t !== null && X(e, "q:key", t);
  },
  Uo = (e) => {
    const t = e.$containerState$.$subsManager$;
    for (const n of e.$rmSlots$) {
      const s = yn(n),
        l = Te(n, Dt);
      if (l.length > 0) {
        const o = n.getAttribute("q:sref"),
          r = e.$roots$.find((i) => i.$id$ === o);
        if (r) {
          const i = r.$element$;
          if (i.isConnected)
            if (Te(i, vn).some((c) => re(c, ee) === s)) Ye(n, e, t, !1);
            else {
              const c = w1(e.$doc$, s);
              for (const u of l) it(c, u);
              Xt(i, c, i.firstChild);
            }
          else Ye(n, e, t, !1);
        } else Ye(n, e, t, !1);
      }
    }
    for (const [n, s] of e.$addSlots$) {
      const l = yn(n),
        o = Te(s, vn).find((r) => r.getAttribute(ee) === l);
      o &&
        (Te(o, Dt).forEach((r) => {
          it(n, r);
        }),
        o.remove());
    }
  },
  us = () => {},
  Jo = (e, t) => {
    const n = e.createComment("qv "),
      s = e.createComment("/qv");
    return new b1(n, s, t);
  },
  Zo = (e) => {
    if (!e) return {};
    const t = e.split(" ");
    return Object.fromEntries(
      t.map((n) => {
        const s = n.indexOf("=");
        return s >= 0 ? [n.slice(0, s), er(n.slice(s + 1))] : [n, ""];
      }),
    );
  },
  Go = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([n, s]) => {
        t.push(s ? `${n}=${Xo(s)}` : `${n}`);
      }),
      t.join(" ")
    );
  },
  Ko = (e, t, n) =>
    e.ownerDocument.createTreeWalker(e, 128, {
      acceptNode(s) {
        const l = yt(s);
        return l && re(l, t) === n ? 1 : 2;
      },
    }),
  Yo = (e, t, n) => {
    const s = Ko(e, t, n),
      l = [];
    let o = null;
    for (; (o = s.nextNode()); ) l.push(yt(o));
    return l;
  },
  Xo = (e) => e.replace(/ /g, "+"),
  er = (e) => e.replace(/\+/g, " "),
  Ve = ":virtual";
class b1 {
  constructor(t, n, s) {
    (this.open = t),
      (this.close = n),
      (this.isSvg = s),
      (this._qc_ = null),
      (this.nodeType = 111),
      (this.localName = Ve),
      (this.nodeName = Ve);
    const l = (this.ownerDocument = t.ownerDocument);
    (this.$template$ = Bn(l, "template", !1)),
      (this.$attributes$ = Zo(t.data.slice(3))),
      t.data.startsWith("qv "),
      (t.__virtual = this),
      (n.__virtual = this);
  }
  insertBefore(t, n) {
    const s = this.parentElement;
    return (
      s
        ? s.insertBefore(t, n || this.close)
        : this.$template$.insertBefore(t, n),
      t
    );
  }
  remove() {
    const t = this.parentElement;
    if (t) {
      const n = this.childNodes;
      this.$template$.childElementCount, t.removeChild(this.open);
      for (let s = 0; s < n.length; s++) this.$template$.appendChild(n[s]);
      t.removeChild(this.close);
    }
  }
  appendChild(t) {
    return this.insertBefore(t, null);
  }
  insertBeforeTo(t, n) {
    const s = this.childNodes;
    t.insertBefore(this.open, n);
    for (const l of s) t.insertBefore(l, n);
    t.insertBefore(this.close, n), this.$template$.childElementCount;
  }
  appendTo(t) {
    this.insertBeforeTo(t, null);
  }
  get namespaceURI() {
    var t;
    return ((t = this.parentElement) == null ? void 0 : t.namespaceURI) ?? "";
  }
  removeChild(t) {
    this.parentElement
      ? this.parentElement.removeChild(t)
      : this.$template$.removeChild(t);
  }
  getAttribute(t) {
    return this.$attributes$[t] ?? null;
  }
  hasAttribute(t) {
    return t in this.$attributes$;
  }
  setAttribute(t, n) {
    (this.$attributes$[t] = n), (this.open.data = $s(this.$attributes$));
  }
  removeAttribute(t) {
    delete this.$attributes$[t], (this.open.data = $s(this.$attributes$));
  }
  matches(t) {
    return !1;
  }
  compareDocumentPosition(t) {
    return this.open.compareDocumentPosition(t);
  }
  closest(t) {
    const n = this.parentElement;
    return n ? n.closest(t) : null;
  }
  querySelectorAll(t) {
    const n = [];
    return (
      Te(this, sl).forEach((s) => {
        Be(s) &&
          (s.matches(t) && n.push(s),
          n.concat(Array.from(s.querySelectorAll(t))));
      }),
      n
    );
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (Se(n)) {
        if (n.matches(t)) return n;
        const s = n.querySelector(t);
        if (s !== null) return s;
      }
    return null;
  }
  get innerHTML() {
    return "";
  }
  set innerHTML(t) {
    const n = this.parentElement;
    n
      ? (this.childNodes.forEach((s) => this.removeChild(s)),
        (this.$template$.innerHTML = t),
        n.insertBefore(this.$template$.content, this.close))
      : (this.$template$.innerHTML = t);
  }
  get firstChild() {
    if (this.parentElement) {
      const t = this.open.nextSibling;
      return t === this.close ? null : t;
    }
    return this.$template$.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement) return Array.from(this.$template$.childNodes);
    const t = [];
    let n = this.open;
    for (; (n = n.nextSibling) && n !== this.close; ) t.push(n);
    return t;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
}
const $s = (e) => `qv ${Go(e)}`,
  Hn = (e) => {
    if (e == null) return null;
    if (ut(e)) {
      const t = yt(e);
      if (t) return t;
    }
    return e;
  },
  tr = (e) => {
    let t = e,
      n = 1;
    for (; (t = t.nextSibling); )
      if (ut(t)) {
        const s = t.__virtual;
        if (s) t = s;
        else if (t.data.startsWith("qv ")) n++;
        else if (t.data === "/qv" && (n--, n === 0)) return t;
      }
  },
  yt = (e) => {
    var n;
    const t = e.__virtual;
    if (t) return t;
    if (e.data.startsWith("qv ")) {
      const s = tr(e);
      return new b1(
        e,
        s,
        ((n = e.parentElement) == null ? void 0 : n.namespaceURI) === vt,
      );
    }
    return null;
  },
  Vt = (e) => (e == null ? null : $e(e) ? e.open : e),
  nr = async (e, t) => {
    const n = $t(e),
      s = n.documentElement,
      l = Ss(e) ? s : e;
    if (re(l, "q:container") === "paused") throw j(21);
    const o = t ?? (l === n.documentElement ? n.body : l),
      r = dt(l),
      i = lr(l, hr);
    X(l, "q:container", "paused");
    for (const g of i) {
      const v = g.$element$,
        w = g.li;
      if (g.$scopeIds$) {
        const _ = t1(g.$scopeIds$);
        _ && v.setAttribute("q:sstyle", _);
      }
      if ((g.$id$ && v.setAttribute("q:id", g.$id$), Se(v) && w.length > 0)) {
        const _ = zn(w);
        for (const f of _) v.setAttribute(f[0], Wn(f[1], g));
      }
    }
    const c = await sr(i, r, (g) => (Fe(g) && bn(g) ? mr(g, r) : null)),
      u = n.createElement("script");
    X(u, "type", "qwik/json"),
      (u.textContent = ar(JSON.stringify(c.state, void 0, void 0))),
      o.appendChild(u);
    const $ = Array.from(r.$events$, (g) => JSON.stringify(g)),
      h = n.createElement("script");
    return (
      (h.textContent = `window.qwikevents||=[];window.qwikevents.push(${$.join(
        ", ",
      )})`),
      o.appendChild(h),
      c
    );
  },
  sr = async (e, t, n, s) => {
    var y;
    const l = rr(t);
    s == null ||
      s.forEach((p, k) => {
        l.$seen$.add(k);
      });
    let o = !1;
    for (const p of e)
      if (p.$tasks$)
        for (const k of p.$tasks$)
          Js(k) && l.$resources$.push(k.$state$), Gs(k);
    for (const p of e) {
      const k = p.$element$,
        M = p.li;
      for (const b of M)
        if (Se(k)) {
          const S = b[1],
            E = S.$captureRef$;
          if (E) for (const L of E) R(L, l, !0);
          l.$qrls$.push(S), (o = !0);
        }
    }
    if (!o)
      return {
        state: { refs: {}, ctx: {}, objs: [], subs: [] },
        objs: [],
        funcs: [],
        qrls: [],
        resources: l.$resources$,
        mode: "static",
      };
    let r;
    for (; (r = l.$promises$).length > 0; )
      (l.$promises$ = []), await Promise.all(r);
    const i = l.$elements$.length > 0;
    if (i) {
      for (const p of l.$deferElements$) Qn(p, l, p.$element$);
      for (const p of e) or(p, l);
    }
    for (; (r = l.$promises$).length > 0; )
      (l.$promises$ = []), await Promise.all(r);
    const c = new Map(),
      u = Array.from(l.$objSet$.keys()),
      $ = new Map(),
      h = (p) => {
        let k = "";
        if (Z(p)) {
          const S = $r(p);
          if (!S) return null;
          (p = S.value), (k += S.resolved ? "~" : "_");
        }
        if (xe(p)) {
          const S = je(p);
          if (S) (k += "!"), (p = S);
          else if (Be(p)) {
            const E = ((L) => {
              let Q = c.get(L);
              return (
                Q === void 0 &&
                  ((Q = fr(L)),
                  Q || console.warn("Missing ID", L),
                  c.set(L, Q)),
                Q
              );
            })(p);
            return E ? "#" + E + k : null;
          }
        }
        const M = $.get(p);
        if (M) return M + k;
        const b = s == null ? void 0 : s.get(p);
        return b ? "*" + b : n ? n(p) : null;
      },
      g = (p) => {
        const k = h(p);
        if (k === null) {
          if (T1(p)) {
            const M = ke($.size);
            return $.set(p, M), M;
          }
          throw j(27, p);
        }
        return k;
      },
      v = new Map();
    for (const p of u) {
      const k = (y = pr(p, t)) == null ? void 0 : y.$subs$;
      if (!k) continue;
      const M = q1(p) ?? 0,
        b = [];
      1 & M && b.push(M);
      for (const S of k) {
        const E = S[1];
        (S[0] === 0 && Fe(E) && $e(E) && !l.$elements$.includes(ne(E))) ||
          b.push(S);
      }
      b.length > 0 && v.set(p, b);
    }
    u.sort((p, k) => (v.has(p) ? 0 : 1) - (v.has(k) ? 0 : 1));
    let w = 0;
    for (const p of u) $.set(p, ke(w)), w++;
    if (l.$noSerialize$.length > 0) {
      const p = $.get(void 0);
      for (const k of l.$noSerialize$) $.set(k, p);
    }
    const _ = [];
    for (const p of u) {
      const k = v.get(p);
      if (k == null) break;
      _.push(
        k.map((M) => (typeof M == "number" ? `_${M}` : Kr(M, h))).filter(_s),
      );
    }
    _.length, v.size;
    const f = gr(u, g, h, l, t),
      d = {},
      z = {};
    for (const p of e) {
      const k = p.$element$,
        M = p.$id$,
        b = p.$refMap$,
        S = p.$props$,
        E = p.$contexts$,
        L = p.$tasks$,
        Q = p.$componentQrl$,
        F = p.$seq$,
        ie = {},
        T = $e(k) && l.$elements$.includes(p);
      if (b.length > 0) {
        const K = _e(b, g, " ");
        K && (z[M] = K);
      } else if (i) {
        let K = !1;
        if (T) {
          const H = h(S);
          (ie.h = g(Q) + (H ? " " + H : "")), (K = !0);
        } else {
          const H = h(S);
          H && ((ie.h = " " + H), (K = !0));
        }
        if (L && L.length > 0) {
          const H = _e(L, h, " ");
          H && ((ie.w = H), (K = !0));
        }
        if (T && F && F.length > 0) {
          const H = _e(F, g, " ");
          (ie.s = H), (K = !0);
        }
        if (E) {
          const H = [];
          E.forEach((K1, Y1) => {
            const Gn = h(K1);
            Gn && H.push(`${Y1}=${Gn}`);
          });
          const We = H.join(" ");
          We && ((ie.c = We), (K = !0));
        }
        K && (d[M] = ie);
      }
    }
    return {
      state: { refs: z, ctx: d, objs: f, subs: _ },
      objs: u,
      funcs: l.$inlinedFunctions$,
      resources: l.$resources$,
      qrls: l.$qrls$,
      mode: i ? "render" : "listeners",
    };
  },
  _e = (e, t, n) => {
    let s = "";
    for (const l of e) {
      const o = t(l);
      o !== null && (s !== "" && (s += n), (s += o));
    }
    return s;
  },
  lr = (e, t) => {
    const n = [],
      s = t(e);
    s !== void 0 && n.push(s);
    const l = e.ownerDocument.createTreeWalker(e, 129, {
      acceptNode(o) {
        if (dr(o)) return 2;
        const r = t(o);
        return r !== void 0 && n.push(r), 3;
      },
    });
    for (; l.nextNode(); );
    return n;
  },
  or = (e, t) => {
    var l;
    const n = e.$parentCtx$,
      s = e.$props$;
    if (n && s && !S1(s) && t.$elements$.includes(n)) {
      const o = (l = J(s)) == null ? void 0 : l.$subs$,
        r = e.$element$;
      if (o)
        for (const [i, c] of o)
          i === 0
            ? (c !== r && Oe(J(s), t, !1), Fe(c) ? cr(c, t) : R(c, t, !0))
            : (R(s, t, !1), Oe(J(s), t, !1));
    }
  },
  rr = (e) => ({
    $containerState$: e,
    $seen$: new Set(),
    $objSet$: new Set(),
    $prefetch$: 0,
    $noSerialize$: [],
    $inlinedFunctions$: [],
    $resources$: [],
    $elements$: [],
    $qrls$: [],
    $deferElements$: [],
    $promises$: [],
  }),
  ir = (e, t) => {
    const n = ne(e);
    t.$elements$.includes(n) ||
      (t.$elements$.push(n),
      t.$prefetch$++,
      8 & n.$flags$ ? Qn(n, t, !0) : t.$deferElements$.push(n),
      t.$prefetch$--);
  },
  cr = (e, t) => {
    const n = ne(e);
    if (n) {
      if (t.$elements$.includes(n)) return;
      t.$elements$.push(n), Qn(n, t, e);
    }
  },
  Qn = (e, t, n) => {
    if (
      (e.$props$ &&
        !S1(e.$props$) &&
        (R(e.$props$, t, n), Oe(J(e.$props$), t, n)),
      e.$componentQrl$ && R(e.$componentQrl$, t, n),
      e.$seq$)
    )
      for (const s of e.$seq$) R(s, t, n);
    if (e.$tasks$) {
      const s = t.$containerState$.$subsManager$.$groupToManagers$;
      for (const l of e.$tasks$) s.has(l) && R(l, t, n);
    }
    if (n === !0 && (ds(e, t), e.$dynamicSlots$))
      for (const s of e.$dynamicSlots$) ds(s, t);
  },
  ds = (e, t) => {
    for (; e; ) {
      if (e.$contexts$) for (const n of e.$contexts$.values()) R(n, t, !0);
      e = e.$parentCtx$;
    }
  },
  ar = (e) => e.replace(/<(\/?script)/g, "\\x3C$1"),
  Oe = (e, t, n) => {
    if (t.$seen$.has(e)) return;
    t.$seen$.add(e);
    const s = e.$subs$;
    for (const l of s) {
      const o = l[0];
      if ((o > 0 && R(l[2], t, n), n === !0)) {
        const r = l[1];
        Fe(r) && $e(r) ? o === 0 && ir(r, t) : R(r, t, !0);
      }
    }
  },
  wn = Symbol(),
  ur = (e) =>
    e.then(
      (t) => ((e[wn] = { resolved: !0, value: t }), t),
      (t) => ((e[wn] = { resolved: !1, value: t }), t),
    ),
  $r = (e) => e[wn],
  R = (e, t, n) => {
    if (e !== null) {
      const s = typeof e;
      switch (s) {
        case "function":
        case "object": {
          const l = t.$seen$;
          if (l.has(e)) return;
          if ((l.add(e), M1(e)))
            return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
          const o = e,
            r = je(e);
          if (r) {
            const i = (2 & q1((e = r))) == 0;
            if ((n && i && Oe(J(o), t, n), E1(o)))
              return void t.$objSet$.add(e);
          }
          if (Qr(e, t, n)) return void t.$objSet$.add(e);
          if (Z(e))
            return void t.$promises$.push(
              ur(e).then((i) => {
                R(i, t, n);
              }),
            );
          if (s === "object") {
            if (Fe(e)) return;
            if (O(e)) for (let i = 0; i < e.length; i++) R(o[i], t, n);
            else if (Ht(e)) for (const i in e) R(o[i], t, n);
          }
          break;
        }
        case "string":
          if (t.$seen$.has(e)) return;
      }
    }
    t.$objSet$.add(e);
  },
  dr = (e) => Se(e) && e.hasAttribute("q:container"),
  hr = (e) => {
    const t = Hn(e);
    if (Be(t)) {
      const n = ne(t);
      if (n && n.$id$) return n;
    }
  },
  pr = (e, t) => {
    if (!xe(e)) return;
    if (e instanceof nt) return J(e);
    const n = t.$proxyMap$.get(e);
    return n ? J(n) : void 0;
  },
  fr = (e) => {
    const t = ne(e);
    return t ? t.$id$ : null;
  },
  mr = (e, t) => {
    const n = e.previousSibling;
    if (n && ut(n) && n.data.startsWith("t=")) return "#" + n.data.slice(2);
    const s = e.ownerDocument,
      l = ke(t.$elementIndex$++),
      o = s.createComment(`t=${l}`),
      r = s.createComment(""),
      i = e.parentElement;
    return i.insertBefore(o, e), i.insertBefore(r, e.nextSibling), "#" + l;
  },
  S1 = (e) => Object.keys(e).length === 0;
function gr(e, t, n, s, l) {
  return e.map((o) => {
    if (o === null) return null;
    const r = typeof o;
    switch (r) {
      case "undefined":
        return Un;
      case "number":
        if (!Number.isFinite(o)) break;
        return o;
      case "string":
        if (o.charCodeAt(0) < 32) break;
        return o;
      case "boolean":
        return o;
    }
    const i = jr(o, t, s, l);
    if (i !== void 0) return i;
    if (r === "object") {
      if (O(o)) return o.map(t);
      if (Ht(o)) {
        const c = {};
        for (const u in o)
          if (n) {
            const $ = n(o[u]);
            $ !== null && (c[u] = $);
          } else c[u] = t(o[u]);
        return c;
      }
    }
    throw j(3, o);
  });
}
const I = (e, t, n = ce) => sn(null, t, e, null, null, n, null),
  at = (e, t = ce) => sn(null, e, null, null, null, t, null),
  jn = (e, t = {}) => {
    let n = e.$symbol$,
      s = e.$chunk$;
    const l = e.$refSymbol$ ?? n,
      o = Bt();
    if (o) {
      const u = o.chunkForSymbol(l, s);
      u && ((s = u[1]), e.$refSymbol$ || (n = u[0]));
    }
    if (!s) throw j(31, e.$symbol$);
    s.startsWith("./") && (s = s.slice(2));
    let r = `${s}#${n}`;
    const i = e.$capture$,
      c = e.$captureRef$;
    return (
      c && c.length
        ? t.$getObjId$
          ? (r += `[${_e(c, t.$getObjId$, " ")}]`)
          : t.$addRefMap$ && (r += `[${_e(c, t.$addRefMap$, " ")}]`)
        : i && i.length > 0 && (r += `[${i.join(" ")}]`),
      r
    );
  },
  Wn = (e, t) => {
    t.$element$;
    const n = { $addRefMap$: (s) => vr(t.$refMap$, s) };
    return _e(
      e,
      (s) => jn(s, n),
      `
`,
    );
  },
  en = (e, t) => {
    const n = e.length,
      s = hs(e, 0, "#"),
      l = hs(e, s, "["),
      o = Math.min(s, l),
      r = e.substring(0, o),
      i = s == n ? s : s + 1,
      c = i == l ? "default" : e.substring(i, l),
      u = l === n ? ce : e.substring(l + 1, n - 1).split(" "),
      $ = sn(r, c, null, null, u, null, null);
    return t && $.$setContainer$(t), $;
  },
  hs = (e, t, n) => {
    const s = e.length,
      l = e.indexOf(n, t == s ? 0 : t);
    return l == -1 ? s : l;
  },
  vr = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? (e.push(t), String(e.length - 1)) : String(n);
  },
  x1 = (e, t) => (
    e.$capture$,
    (e.$captureRef$ = e.$capture$.map((n) => {
      const s = parseInt(n, 10),
        l = t.$refMap$[s];
      return t.$refMap$.length > s, l;
    }))
  ),
  yr = (e) => ({
    __brand: "resource",
    value: void 0,
    loading: !fe(),
    _resolved: void 0,
    _error: void 0,
    _state: "pending",
    _timeout: (e == null ? void 0 : e.timeout) ?? -1,
    _cache: 0,
  }),
  wr = (e) => xe(e) && e.__brand === "resource",
  br = (e, t) => {
    const n = e._state;
    return n === "resolved"
      ? `0 ${t(e._resolved)}`
      : n === "pending"
        ? "1"
        : `2 ${t(e._error)}`;
  },
  Sr = (e) => {
    const [t, n] = e.split(" "),
      s = yr(void 0);
    return (
      (s.value = Promise.resolve()),
      t === "0"
        ? ((s._state = "resolved"), (s._resolved = n), (s.loading = !1))
        : t === "1"
          ? ((s._state = "pending"),
            (s.value = new Promise(() => {})),
            (s.loading = !0))
          : t === "2" &&
            ((s._state = "rejected"), (s._error = n), (s.loading = !1)),
      s
    );
  },
  Ne = (e) => x(Me, { "q:s": "" }, 0, e.name ?? ""),
  Un = "";
function N(e) {
  return {
    $prefixCode$: e.$prefix$.charCodeAt(0),
    $prefixChar$: e.$prefix$,
    $test$: e.$test$,
    $serialize$: e.$serialize$,
    $prepare$: e.$prepare$,
    $fill$: e.$fill$,
    $collect$: e.$collect$,
    $subs$: e.$subs$,
  };
}
const xr = N({
    $prefix$: "",
    $test$: (e) => T1(e),
    $collect$: (e, t, n) => {
      if (e.$captureRef$) for (const s of e.$captureRef$) R(s, t, n);
      t.$prefetch$ === 0 && t.$qrls$.push(e);
    },
    $serialize$: (e, t) => jn(e, { $getObjId$: t }),
    $prepare$: (e, t) => en(e, t.$containerEl$),
    $fill$: (e, t) => {
      e.$capture$ &&
        e.$capture$.length > 0 &&
        ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null));
    },
  }),
  _r = N({
    $prefix$: "",
    $test$: (e) => Cn(e),
    $collect$: (e, t, n) => {
      R(e.$qrl$, t, n),
        e.$state$ &&
          (R(e.$state$, t, n),
          n === !0 && e.$state$ instanceof nt && Oe(e.$state$[ae], t, !0));
    },
    $serialize$: (e, t) => Ql(e, t),
    $prepare$: (e) => jl(e),
    $fill$: (e, t) => {
      (e.$el$ = t(e.$el$)),
        (e.$qrl$ = t(e.$qrl$)),
        e.$state$ && (e.$state$ = t(e.$state$));
    },
  }),
  kr = N({
    $prefix$: "",
    $test$: (e) => wr(e),
    $collect$: (e, t, n) => {
      R(e.value, t, n), R(e._resolved, t, n);
    },
    $serialize$: (e, t) => br(e, t),
    $prepare$: (e) => Sr(e),
    $fill$: (e, t) => {
      if (e._state === "resolved")
        (e._resolved = t(e._resolved)),
          (e.value = Promise.resolve(e._resolved));
      else if (e._state === "rejected") {
        const n = Promise.reject(e._error);
        n.catch(() => null), (e._error = t(e._error)), (e.value = n);
      }
    },
  }),
  zr = N({
    $prefix$: "",
    $test$: (e) => e instanceof URL,
    $serialize$: (e) => e.href,
    $prepare$: (e) => new URL(e),
    $fill$: void 0,
  }),
  Mr = N({
    $prefix$: "",
    $test$: (e) => e instanceof Date,
    $serialize$: (e) => e.toISOString(),
    $prepare$: (e) => new Date(e),
    $fill$: void 0,
  }),
  Er = N({
    $prefix$: "\x07",
    $test$: (e) => e instanceof RegExp,
    $serialize$: (e) => `${e.flags} ${e.source}`,
    $prepare$: (e) => {
      const t = e.indexOf(" "),
        n = e.slice(t + 1),
        s = e.slice(0, t);
      return new RegExp(n, s);
    },
    $fill$: void 0,
  }),
  qr = N({
    $prefix$: "",
    $test$: (e) => e instanceof Error,
    $serialize$: (e) => e.message,
    $prepare$: (e) => {
      const t = new Error(e);
      return (t.stack = void 0), t;
    },
    $fill$: void 0,
  }),
  Tr = N({
    $prefix$: "",
    $test$: (e) => Ss(e),
    $serialize$: void 0,
    $prepare$: (e, t, n) => n,
    $fill$: void 0,
  }),
  Ot = Symbol("serializable-data"),
  Lr = N({
    $prefix$: "",
    $test$: (e) => I1(e),
    $serialize$: (e, t) => {
      const [n] = e[Ot];
      return jn(n, { $getObjId$: t });
    },
    $prepare$: (e, t) => {
      const n = en(e, t.$containerEl$);
      return D(n);
    },
    $fill$: (e, t) => {
      const [n] = e[Ot];
      n.$capture$ &&
        n.$capture$.length > 0 &&
        ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null));
    },
  }),
  Ir = N({
    $prefix$: "",
    $test$: (e) => e instanceof dn,
    $collect$: (e, t, n) => {
      if (e.$args$) for (const s of e.$args$) R(s, t, n);
    },
    $serialize$: (e, t, n) => {
      const s = fl(e);
      let l = n.$inlinedFunctions$.indexOf(s);
      return (
        l < 0 &&
          (n.$inlinedFunctions$.push(s), (l = n.$inlinedFunctions$.length - 1)),
        _e(e.$args$, t, " ") + " @" + ke(l)
      );
    },
    $prepare$: (e) => {
      const t = e.split(" "),
        n = t.slice(0, -1),
        s = t[t.length - 1];
      return new dn(s, n, s);
    },
    $fill$: (e, t) => {
      e.$func$, (e.$func$ = t(e.$func$)), (e.$args$ = e.$args$.map(t));
    },
  }),
  Rr = N({
    $prefix$: "",
    $test$: (e) => e instanceof nt,
    $collect$: (e, t, n) => (
      R(e.untrackedValue, t, n), n === !0 && !(1 & e[tt]) && Oe(e[ae], t, !0), e
    ),
    $serialize$: (e, t) => t(e.untrackedValue),
    $prepare$: (e, t) => {
      var n;
      return new nt(
        e,
        (n = t == null ? void 0 : t.$subsManager$) == null
          ? void 0
          : n.$createManager$(),
        0,
      );
    },
    $subs$: (e, t) => {
      e[ae].$addSubs$(t);
    },
    $fill$: (e, t) => {
      e.untrackedValue = t(e.untrackedValue);
    },
  }),
  Ar = N({
    $prefix$: "",
    $test$: (e) => e instanceof hn,
    $collect$(e, t, n) {
      if ((R(e.ref, t, n), E1(e.ref))) {
        const s = J(e.ref);
        Jr(t.$containerState$.$subsManager$, s, n) && R(e.ref[e.prop], t, n);
      }
      return e;
    },
    $serialize$: (e, t) => `${t(e.ref)} ${e.prop}`,
    $prepare$: (e) => {
      const [t, n] = e.split(" ");
      return new hn(t, n);
    },
    $fill$: (e, t) => {
      e.ref = t(e.ref);
    },
  }),
  Pr = N({
    $prefix$: "",
    $test$: (e) => typeof e == "number",
    $serialize$: (e) => String(e),
    $prepare$: (e) => Number(e),
    $fill$: void 0,
  }),
  Cr = N({
    $prefix$: "",
    $test$: (e) => e instanceof URLSearchParams,
    $serialize$: (e) => e.toString(),
    $prepare$: (e) => new URLSearchParams(e),
    $fill$: void 0,
  }),
  Dr = N({
    $prefix$: "",
    $test$: (e) => typeof FormData < "u" && e instanceof globalThis.FormData,
    $serialize$: (e) => {
      const t = [];
      return (
        e.forEach((n, s) => {
          t.push(typeof n == "string" ? [s, n] : [s, n.name]);
        }),
        JSON.stringify(t)
      );
    },
    $prepare$: (e) => {
      const t = JSON.parse(e),
        n = new FormData();
      for (const [s, l] of t) n.append(s, l);
      return n;
    },
    $fill$: void 0,
  }),
  Vr = N({
    $prefix$: "",
    $test$: (e) => Qe(e),
    $collect$: (e, t, n) => {
      R(e.children, t, n), R(e.props, t, n), R(e.immutableProps, t, n);
      let s = e.type;
      s === Ne ? (s = ":slot") : s === C && (s = ":fragment"), R(s, t, n);
    },
    $serialize$: (e, t) => {
      let n = e.type;
      return (
        n === Ne ? (n = ":slot") : n === C && (n = ":fragment"),
        `${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.children)} ${
          e.flags
        }`
      );
    },
    $prepare$: (e) => {
      const [t, n, s, l, o] = e.split(" ");
      return new gt(t, n, s, l, parseInt(o, 10));
    },
    $fill$: (e, t) => {
      (e.type = Zr(t(e.type))),
        (e.props = t(e.props)),
        (e.immutableProps = t(e.immutableProps)),
        (e.children = t(e.children));
    },
  }),
  Or = N({
    $prefix$: "",
    $test$: (e) => typeof e == "bigint",
    $serialize$: (e) => e.toString(),
    $prepare$: (e) => BigInt(e),
    $fill$: void 0,
  }),
  Ie = Symbol(),
  Nr = N({
    $prefix$: "",
    $test$: (e) => e instanceof Set,
    $collect$: (e, t, n) => {
      e.forEach((s) => R(s, t, n));
    },
    $serialize$: (e, t) => Array.from(e).map(t).join(" "),
    $prepare$: (e) => {
      const t = new Set();
      return (t[Ie] = e), t;
    },
    $fill$: (e, t) => {
      const n = e[Ie];
      e[Ie] = void 0;
      const s = n.length === 0 ? [] : n.split(" ");
      for (const l of s) e.add(t(l));
    },
  }),
  Fr = N({
    $prefix$: "",
    $test$: (e) => e instanceof Map,
    $collect$: (e, t, n) => {
      e.forEach((s, l) => {
        R(s, t, n), R(l, t, n);
      });
    },
    $serialize$: (e, t) => {
      const n = [];
      return (
        e.forEach((s, l) => {
          n.push(t(l) + " " + t(s));
        }),
        n.join(" ")
      );
    },
    $prepare$: (e) => {
      const t = new Map();
      return (t[Ie] = e), t;
    },
    $fill$: (e, t) => {
      const n = e[Ie];
      e[Ie] = void 0;
      const s = n.length === 0 ? [] : n.split(" ");
      s.length % 2;
      for (let l = 0; l < s.length; l += 2) e.set(t(s[l]), t(s[l + 1]));
    },
  }),
  Br = N({
    $prefix$: "\x1B",
    $test$: (e) => !!_1(e) || e === Un,
    $serialize$: (e) => e,
    $prepare$: (e) => e,
    $fill$: void 0,
  }),
  Jn = [
    xr,
    _r,
    kr,
    zr,
    Mr,
    Er,
    qr,
    Tr,
    Lr,
    Ir,
    Rr,
    Ar,
    Pr,
    Cr,
    Dr,
    Vr,
    Or,
    Nr,
    Fr,
    Br,
  ],
  ps = (() => {
    const e = [];
    return (
      Jn.forEach((t) => {
        const n = t.$prefixCode$;
        for (; e.length < n; ) e.push(void 0);
        e.push(t);
      }),
      e
    );
  })();
function _1(e) {
  if (typeof e == "string") {
    const t = e.charCodeAt(0);
    if (t < ps.length) return ps[t];
  }
}
const Hr = Jn.filter((e) => e.$collect$),
  Qr = (e, t, n) => {
    for (const s of Hr) if (s.$test$(e)) return s.$collect$(e, t, n), !0;
    return !1;
  },
  jr = (e, t, n, s) => {
    for (const l of Jn)
      if (l.$test$(e)) {
        let o = l.$prefixChar$;
        return l.$serialize$ && (o += l.$serialize$(e, t, n, s)), o;
      }
    if (typeof e == "string") return e;
  },
  Wr = (e, t) => {
    const n = new Map(),
      s = new Map();
    return {
      prepare(l) {
        const o = _1(l);
        if (o) {
          const r = o.$prepare$(l.slice(1), e, t);
          return o.$fill$ && n.set(r, o), o.$subs$ && s.set(r, o), r;
        }
        return l;
      },
      subs(l, o) {
        const r = s.get(l);
        return !!r && (r.$subs$(l, o, e), !0);
      },
      fill(l, o) {
        const r = n.get(l);
        return !!r && (r.$fill$(l, o, e), !0);
      },
    };
  },
  Ur = {
    "!": (e, t) => t.$proxyMap$.get(e) ?? En(e, t),
    "~": (e) => Promise.resolve(e),
    _: (e) => Promise.reject(e),
  },
  Jr = (e, t, n) => {
    if (typeof n == "boolean") return n;
    const s = e.$groupToManagers$.get(n);
    return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== t);
  },
  Zr = (e) => (e === ":slot" ? Ne : e === ":fragment" ? C : e),
  k1 = new WeakSet(),
  z1 = new WeakSet(),
  M1 = (e) => k1.has(e),
  E1 = (e) => z1.has(e),
  tn = (e) => (e != null && k1.add(e), e),
  Gr = (e) => (z1.add(e), e),
  nn = (e) => (xe(e) ? je(e) ?? e : e),
  je = (e) => e[an],
  J = (e) => e[ae],
  q1 = (e) => e[qe],
  Kr = (e, t) => {
    const n = e[0],
      s = typeof e[1] == "string" ? e[1] : t(e[1]);
    if (!s) return;
    let l = n + " " + s,
      o;
    if (n === 0) o = e[2];
    else {
      const r = t(e[2]);
      if (!r) return;
      n <= 2
        ? ((o = e[5]), (l += ` ${r} ${fs(t(e[3]))} ${e[4]}`))
        : n <= 4 &&
          ((o = e[4]),
          (l += ` ${r} ${typeof e[3] == "string" ? e[3] : fs(t(e[3]))}`));
    }
    return o && (l += ` ${encodeURI(o)}`), l;
  },
  Yr = (e, t) => {
    const n = e.split(" "),
      s = parseInt(n[0], 10);
    n.length >= 2;
    const l = t(n[1]);
    if (!l || (Cn(l) && !l.$el$)) return;
    const o = [s, l];
    return (
      s === 0
        ? (n.length <= 3, o.push(rn(n[2])))
        : s <= 2
          ? (n.length === 5 || n.length,
            o.push(t(n[2]), t(n[3]), n[4], rn(n[5])))
          : s <= 4 &&
            (n.length === 4 || n.length, o.push(t(n[2]), t(n[3]), rn(n[4]))),
      o
    );
  },
  rn = (e) => {
    if (e !== void 0) return decodeURI(e);
  },
  Xr = (e) => {
    const t = new Map();
    return {
      $groupToManagers$: t,
      $createManager$: (s) => new ei(t, e, s),
      $clearSub$: (s) => {
        const l = t.get(s);
        if (l) {
          for (const o of l) o.$unsubGroup$(s);
          t.delete(s), (l.length = 0);
        }
      },
      $clearSignal$: (s) => {
        const l = t.get(s[1]);
        if (l) for (const o of l) o.$unsubEntry$(s);
      },
    };
  };
class ei {
  constructor(t, n, s) {
    (this.$groupToManagers$ = t),
      (this.$containerState$ = n),
      (this.$subs$ = []),
      s && this.$addSubs$(s);
  }
  $addSubs$(t) {
    this.$subs$.push(...t);
    for (const n of this.$subs$) this.$addToGroup$(n[1], this);
  }
  $addToGroup$(t, n) {
    let s = this.$groupToManagers$.get(t);
    s || this.$groupToManagers$.set(t, (s = [])), s.includes(n) || s.push(n);
  }
  $unsubGroup$(t) {
    const n = this.$subs$;
    for (let s = 0; s < n.length; s++) n[s][1] === t && (n.splice(s, 1), s--);
  }
  $unsubEntry$(t) {
    const [n, s, l, o] = t,
      r = this.$subs$;
    if (n === 1 || n === 2) {
      const i = t[4];
      for (let c = 0; c < r.length; c++) {
        const u = r[c];
        u[0] === n &&
          u[1] === s &&
          u[2] === l &&
          u[3] === o &&
          u[4] === i &&
          (r.splice(c, 1), c--);
      }
    } else if (n === 3 || n === 4)
      for (let i = 0; i < r.length; i++) {
        const c = r[i];
        c[0] === n &&
          c[1] === s &&
          c[2] === l &&
          c[3] === o &&
          (r.splice(i, 1), i--);
      }
  }
  $addSub$(t, n) {
    const s = this.$subs$,
      l = t[1];
    (t[0] === 0 && s.some(([o, r, i]) => o === 0 && r === l && i === n)) ||
      (s.push([...t, n]), this.$addToGroup$(l, this));
  }
  $notifySubs$(t) {
    const n = this.$subs$;
    for (const s of n) {
      const l = s[s.length - 1];
      (t && l && l !== t) || Il(s, this.$containerState$);
    }
  }
}
const fs = (e) => {
    if (e == null) throw Xe("must be non null", e);
    return e;
  },
  T1 = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  sn = (e, t, n, s, l, o, r) => {
    let i;
    const c = async function (...f) {
        return await g.call(this, me())(...f);
      },
      u = (f) => (i || (i = f), i),
      $ = async (f) => {
        if ((f && u(f), n !== null)) return n;
        if (s !== null) return (n = s().then((d) => (c.resolved = n = d[t])));
        {
          const d = Bt().importSymbol(i, e, t);
          return (n = A(d, (z) => (c.resolved = n = z)));
        }
      },
      h = (f) => (n !== null ? n : $(f));
    function g(f, d) {
      return (...z) => {
        const y = si(),
          p = h();
        return A(p, (k) => {
          if (le(k)) {
            if (d && d() === !1) return;
            const M = { ...v(f), $qrl$: c };
            return (
              M.$event$ === void 0 && (M.$event$ = this),
              ti(t, M.$element$, y),
              G.call(this, M, k, ...z)
            );
          }
          throw j(10);
        });
      };
    }
    const v = (f) => (f == null ? oe() : O(f) ? Ys(f) : f),
      w = r ?? t,
      _ = L1(w);
    return (
      Object.assign(c, {
        getSymbol: () => w,
        getHash: () => _,
        getCaptured: () => o,
        resolve: $,
        $resolveLazy$: h,
        $setContainer$: u,
        $chunk$: e,
        $symbol$: t,
        $refSymbol$: r,
        $hash$: _,
        getFn: g,
        $capture$: l,
        $captureRef$: o,
        dev: null,
        resolved: void 0,
      }),
      c
    );
  },
  L1 = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  };
const ms = new Set(),
  ti = (e, t, n) => {
    ms.has(e) ||
      (ms.add(e), ni("qsymbol", { symbol: e, element: t, reqTime: n }));
  },
  ni = (e, t) => {
    fe() ||
      typeof document != "object" ||
      document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }));
  },
  si = () =>
    fe() ? 0 : typeof performance == "object" ? performance.now() : 0,
  gs = (e) => e,
  D = (e) => {
    function t(n, s, l) {
      const o = e.$hash$.slice(0, 4);
      return x(
        Me,
        {
          "q:renderFn": e,
          [ee]: n[ee],
          [m]: n[m],
          children: n.children,
          props: n,
        },
        l,
        o + ":" + (s || ""),
      );
    }
    return (t[Ot] = [e]), t;
  },
  I1 = (e) => typeof e == "function" && e[Ot] !== void 0,
  bt = (e, t) => {
    const { val: n, set: s, iCtx: l } = Ee();
    if (n != null) return n;
    const o = le(e) ? G(void 0, e) : e;
    if ((t == null ? void 0 : t.reactive) === !1) return s(o), o;
    {
      const r = En(
        o,
        l.$renderCtx$.$static$.$containerState$,
        (t == null ? void 0 : t.deep) ?? !0 ? 1 : 0,
      );
      return s(r), r;
    }
  };
function Zn(e, t) {
  var s;
  const n = me();
  return (
    ((s = n == null ? void 0 : n.$renderCtx$) == null
      ? void 0
      : s.$static$.$containerState$.$serverData$[e]) ?? t
  );
}
const li = (e) => {
    oi(e, (t) => t, !1);
  },
  oi = (e, t, n) => {
    const { val: s, set: l, iCtx: o, i: r, elCtx: i } = Ee();
    if (s) return s;
    const c = to(e, r),
      u = o.$renderCtx$.$static$.$containerState$;
    if (
      (l(c),
      i.$appendStyles$ || (i.$appendStyles$ = []),
      i.$scopeIds$ || (i.$scopeIds$ = []),
      n && i.$scopeIds$.push(no(c)),
      u.$styleIds$.has(c))
    )
      return c;
    u.$styleIds$.add(c);
    const $ = e.$resolveLazy$(u.$containerEl$),
      h = (g) => {
        i.$appendStyles$,
          i.$appendStyles$.push({ styleId: c, content: t(g, c) });
      };
    return Z($) ? o.$waitOn$.push($.then(h)) : h($), c;
  },
  q = (e) => {
    const { val: t, set: n, iCtx: s } = Ee();
    if (t != null) return t;
    const l = s.$renderCtx$.$static$.$containerState$,
      o = le(e) && !I1(e) ? G(void 0, e) : e;
    return n(ml(o, l, 0, void 0));
  },
  ri = () =>
    x(
      C,
      {
        children: a(
          "div",
          null,
          { class: "cat-background" },
          [
            a("div", null, { class: "ear ear--left" }, null, 3, null),
            a("div", null, { class: "ear ear--right" }, null, 3, null),
            a(
              "div",
              null,
              { class: "face" },
              [
                a(
                  "div",
                  null,
                  { class: "eye eye--left" },
                  a("div", null, { class: "eye-pupil" }, null, 3, null),
                  3,
                  null,
                ),
                a(
                  "div",
                  null,
                  { class: "eye eye--right" },
                  a("div", null, { class: "eye-pupil" }, null, 3, null),
                  3,
                  null,
                ),
                a("div", null, { class: "muzzle" }, null, 3, null),
              ],
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      "ev_0",
    ),
  ii = D(I(ri, "s_k9rs7QcCFAU")),
  ci = () =>
    x(
      C,
      {
        children: a(
          "div",
          null,
          { class: "cat-walk-container" },
          [
            a("div", null, { id: "tail" }, null, 3, null),
            a("div", null, { id: "tail-mask" }, "WOW", 3, null),
            a("div", null, { id: "tail-end" }, null, 3, null),
            a(
              "div",
              null,
              { id: "body" },
              [
                a(
                  "div",
                  null,
                  { class: "ear", id: "ear-left" },
                  a(
                    "div",
                    null,
                    { class: "ear-inner", id: "ear-inner-left" },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                a(
                  "div",
                  null,
                  { class: "ear", id: "ear-right" },
                  a(
                    "div",
                    null,
                    { class: "ear-inner", id: "ear-inner-right" },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                a("div", null, { id: "mask" }, null, 3, null),
                a(
                  "div",
                  null,
                  { id: "patch" },
                  [
                    a("div", null, { class: "fur" }, null, 3, null),
                    a("div", null, { class: "fur" }, null, 3, null),
                    a("div", null, { class: "fur" }, null, 3, null),
                  ],
                  3,
                  null,
                ),
                a(
                  "div",
                  null,
                  { id: "eyes" },
                  [
                    a(
                      "div",
                      null,
                      { class: "eye", id: "eye-left" },
                      a(
                        "div",
                        null,
                        { class: "shine", id: "shine-left" },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                    a(
                      "div",
                      null,
                      { class: "eye", id: "eye-right" },
                      a(
                        "div",
                        null,
                        { class: "shine", id: "shine-right" },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                a(
                  "div",
                  null,
                  { id: "whisk-left" },
                  [
                    a(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-one" },
                      null,
                      3,
                      null,
                    ),
                    a("div", null, { class: "whisker" }, null, 3, null),
                    a(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-three" },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                a("div", null, { id: "nose" }, null, 3, null),
                a(
                  "div",
                  null,
                  { id: "whisk-right" },
                  [
                    a(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-four" },
                      null,
                      3,
                      null,
                    ),
                    a("div", null, { class: "whisker" }, null, 3, null),
                    a(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-six" },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                a(
                  "div",
                  null,
                  { id: "smile" },
                  [
                    a(
                      "div",
                      null,
                      { id: "smile-left-align" },
                      [
                        a("div", null, { id: "smile-left" }, null, 3, null),
                        a("div", null, { id: "mask-left" }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                    a(
                      "div",
                      null,
                      { id: "smile-right-align" },
                      [
                        a("div", null, { id: "smile-right" }, null, 3, null),
                        a("div", null, { id: "mask-right" }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                a("div", null, { id: "tongue" }, null, 3, null),
                a("div", null, { id: "tummy" }, null, 3, null),
              ],
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      "wM_0",
    ),
  ai = D(I(ci, "s_0DhRUxBQU40")),
  ui =
    '((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',
  R1 = ye("qc-s"),
  $i = ye("qc-c"),
  A1 = ye("qc-ic"),
  P1 = ye("qc-h"),
  C1 = ye("qc-l"),
  D1 = ye("qc-n"),
  di = ye("qc-a"),
  hi = ye("qc-ir"),
  pi = (e) => {
    const t = window,
      n = location.pathname + location.search,
      s = "_qCitySPA",
      l = "_qCityHistoryPatch",
      o = "_qCityBootstrap",
      r = "_qCityInitPopstate",
      i = "_qCityInitAnchors",
      c = "_qCityInitVisibility",
      u = "_qCityInitScroll",
      $ = "_qCityScrollEnabled",
      h = "_qCityScrollDebounce",
      g = "_qCityScroll",
      v = (f) => {
        f && t.scrollTo(f.x, f.y);
      },
      w = () => {
        const f = document.documentElement;
        return {
          x: f.scrollLeft,
          y: f.scrollTop,
          w: Math.max(f.scrollWidth, f.clientWidth),
          h: Math.max(f.scrollHeight, f.clientHeight),
        };
      },
      _ = (f) => {
        const d = history.state || {};
        (d[g] = f || w()), history.replaceState(d, "");
      };
    if (!t[s] && !t[r] && !t[i] && !t[c] && !t[u]) {
      if (
        (_(),
        (t[r] = () => {
          var f;
          if (!t[s]) {
            if (
              ((t[$] = !1),
              clearTimeout(t[h]),
              n !== location.pathname + location.search)
            ) {
              const z = e
                .closest("[q\\:container]")
                .querySelector('a[q\\:key="AD_1"]');
              if (z) {
                const y = z.closest("[q\\:container]"),
                  p = z.cloneNode();
                p.setAttribute("q:nbs", ""),
                  (p.style.display = "none"),
                  y.appendChild(p),
                  (t[o] = p),
                  p.click();
              } else location.reload();
            } else if (history.scrollRestoration === "manual") {
              const d = (f = history.state) == null ? void 0 : f[g];
              v(d), (t[$] = !0);
            }
          }
        }),
        !t[l])
      ) {
        t[l] = !0;
        const f = history.pushState,
          d = history.replaceState,
          z = (y) => (
            y === null || typeof y > "u"
              ? (y = {})
              : (y == null ? void 0 : y.constructor) !== Object &&
                (y = { _data: y }),
            (y._qCityScroll = y._qCityScroll || w()),
            y
          );
        (history.pushState = (y, p, k) => (
          (y = z(y)), f.call(history, y, p, k)
        )),
          (history.replaceState = (y, p, k) => (
            (y = z(y)), d.call(history, y, p, k)
          ));
      }
      (t[i] = (f) => {
        if (t[s] || f.defaultPrevented) return;
        const d = f.target.closest("a[href]");
        if (d && !d.hasAttribute("preventdefault:click")) {
          const z = d.getAttribute("href"),
            y = new URL(location.href),
            p = new URL(z, y),
            k = p.origin === y.origin,
            M = p.pathname + p.search === y.pathname + y.search;
          if (k && M)
            if (
              (f.preventDefault(),
              p.href !== y.href && history.pushState(null, "", p),
              !p.hash)
            )
              p.href.endsWith("#")
                ? window.scrollTo(0, 0)
                : ((t[$] = !1),
                  clearTimeout(t[h]),
                  _({ ...w(), x: 0, y: 0 }),
                  location.reload());
            else {
              const b = p.hash.slice(1),
                S = document.getElementById(b);
              S && S.scrollIntoView();
            }
        }
      }),
        (t[c] = () => {
          !t[s] && t[$] && document.visibilityState === "hidden" && _();
        }),
        (t[u] = () => {
          t[s] ||
            !t[$] ||
            (clearTimeout(t[h]),
            (t[h] = setTimeout(() => {
              _(), (t[h] = void 0);
            }, 200)));
        }),
        (t[$] = !0),
        setTimeout(() => {
          addEventListener("popstate", t[r]),
            addEventListener("scroll", t[u], { passive: !0 }),
            document.body.addEventListener("click", t[i]),
            t.navigation ||
              document.addEventListener("visibilitychange", t[c], {
                passive: !0,
              });
        }, 0);
    }
  },
  fi = I(pi, "s_DyVc0YBIqQU"),
  mi = () => {
    {
      const [e, t] = Bt().chunkForSymbol(fi.getSymbol(), null),
        n = G1 + "build/" + t;
      return `(${gi.toString()})('${n}','${e}');`;
    }
  },
  gi = async (e, t) => {
    var n;
    if (!window._qcs && history.scrollRestoration === "manual") {
      window._qcs = !0;
      const s = (n = history.state) == null ? void 0 : n._qCityScroll;
      s && window.scrollTo(s.x, s.y);
      const l = document.currentScript;
      (await import(e))[t](l);
    }
  },
  vi = () => {
    const e = mi();
    e1();
    const t = Zn("nonce"),
      n = ft(A1);
    if (n.value && n.value.length > 0) {
      const s = n.value.length;
      let l = null;
      for (let o = s - 1; o >= 0; o--)
        n.value[o].default &&
          (l = x(n.value[o].default, { children: l }, 1, "zl_0"));
      return x(
        C,
        {
          children: [
            l,
            a(
              "script",
              { dangerouslySetInnerHTML: e },
              { nonce: t },
              null,
              3,
              null,
            ),
          ],
        },
        1,
        "zl_1",
      );
    }
    return qn;
  },
  h2 = D(I(vi, "s_e0ssiDXoeAM")),
  vs = (e) => e.pathname + e.search + e.hash,
  Re = (e, t) => new URL(e, t.href),
  V1 = (e, t) => e.origin === t.origin,
  yi = (e, t) => e.pathname + e.search === t.pathname + t.search,
  wi = (e, t) => e.pathname === t.pathname,
  bi = (e, t) => e.search === t.search,
  Si = (e, t) => {
    const n = e.href;
    if (typeof n == "string" && typeof e.target != "string" && !e.reload)
      try {
        const s = Re(n.trim(), t.url),
          l = Re("", t.url);
        if (V1(s, l)) return vs(s);
      } catch (s) {
        console.error(s);
      }
    else if (e.reload) return vs(Re("", t.url));
    return null;
  },
  xi = (e, t, n) => {
    if (e.prefetch === !0 && t) {
      const s = Re(t, n.url),
        l = Re("", n.url);
      if (!wi(s, l) || !bi(s, l)) return "";
    }
    return null;
  },
  _i = (e) => e && typeof e.then == "function",
  ki = (e, t, n, s) => {
    const l = O1(),
      r = {
        head: l,
        withLocale: (i) => ns(s, i),
        resolveValue: (i) => {
          const c = i.__id;
          if (i.__brand === "server_loader" && !(c in e.loaders))
            throw new Error(
              "You can not get the returned data of a loader that has not been executed for this request.",
            );
          const u = e.loaders[c];
          if (_i(u))
            throw new Error(
              "Loaders returning a function can not be referred to in the head function.",
            );
          return u;
        },
        ...t,
      };
    for (let i = n.length - 1; i >= 0; i--) {
      const c = n[i] && n[i].head;
      c &&
        (typeof c == "function"
          ? ys(
              l,
              ns(s, () => c(r)),
            )
          : typeof c == "object" && ys(l, c));
    }
    return r.head;
  },
  ys = (e, t) => {
    typeof t.title == "string" && (e.title = t.title),
      St(e.meta, t.meta),
      St(e.links, t.links),
      St(e.styles, t.styles),
      St(e.scripts, t.scripts),
      Object.assign(e.frontmatter, t.frontmatter);
  },
  St = (e, t) => {
    if (Array.isArray(t))
      for (const n of t) {
        if (typeof n.key == "string") {
          const s = e.findIndex((l) => l.key === n.key);
          if (s > -1) {
            e[s] = n;
            continue;
          }
        }
        e.push(n);
      }
  },
  O1 = () => ({
    title: "",
    meta: [],
    links: [],
    styles: [],
    scripts: [],
    frontmatter: {},
  });
let ws;
(function (e) {
  (e[(e.EOL = 0)] = "EOL"),
    (e[(e.OPEN_BRACKET = 91)] = "OPEN_BRACKET"),
    (e[(e.CLOSE_BRACKET = 93)] = "CLOSE_BRACKET"),
    (e[(e.DOT = 46)] = "DOT"),
    (e[(e.SLASH = 47)] = "SLASH");
})(ws || (ws = {}));
const p2 = () => ft(P1),
  zi = () => ft(C1),
  Mi = () => ft(D1),
  Ei = () => tn(Zn("qwikcity")),
  qi = ":root{view-transition-name:none}",
  Ti = async (e, t) => {
    const [n, s, l, o] = Gt(),
      {
        type: r = "link",
        forceReload: i = e === void 0,
        replaceState: c = !1,
        scroll: u = !0,
      } = typeof t == "object" ? t : { forceReload: t },
      $ = l.value.dest,
      h = e === void 0 ? $ : Re(e, o.url);
    if (V1(h, $) && !(!i && yi(h, $)))
      return (
        (l.value = {
          type: r,
          dest: h,
          forceReload: i,
          replaceState: c,
          scroll: u,
        }),
        (n.value = void 0),
        (o.isNavigating = !0),
        new Promise((g) => {
          s.r = g;
        })
      );
  },
  Li = ({ track: e }) => {
    const [t, n, s, l, o, r, i, c, u, $, h] = Gt();
    async function g() {
      const [w, _] = e(() => [$.value, t.value]),
        f = Gl(""),
        d = h.url,
        z = _ ? "form" : w.type;
      w.replaceState;
      let y,
        p,
        k = null;
      if (
        ((y = new URL(w.dest, h.url)), (k = o.loadedRoute), (p = o.response), k)
      ) {
        const [M, b, S, E] = k,
          L = S,
          Q = L[L.length - 1];
        (h.prevUrl = d),
          (h.url = y),
          (h.params = { ...b }),
          ($.untrackedValue = { type: z, dest: y });
        const F = ki(p, h, L, f);
        (n.headings = Q.headings),
          (n.menu = E),
          (s.value = tn(L)),
          (l.links = F.links),
          (l.meta = F.meta),
          (l.styles = F.styles),
          (l.scripts = F.scripts),
          (l.title = F.title),
          (l.frontmatter = F.frontmatter);
      }
    }
    return g();
  },
  Ii = (e) => {
    li(I(qi, "s_RPDJAz33WLA"));
    const t = Ei();
    if (!(t != null && t.params)) throw new Error("Missing Qwik City Env Data");
    const n = Zn("url");
    if (!n) throw new Error("Missing Qwik URL Env Data");
    const s = new URL(n),
      l = bt(
        { url: s, params: t.params, isNavigating: !1, prevUrl: void 0 },
        { deep: !1 },
      ),
      o = {},
      r = Gr(bt(t.response.loaders, { deep: !1 })),
      i = q({
        type: "initial",
        dest: s,
        forceReload: !1,
        replaceState: !1,
        scroll: !0,
      }),
      c = bt(O1),
      u = bt({ headings: void 0, menu: void 0 }),
      $ = q(),
      h = t.response.action,
      g = h ? t.response.loaders[h] : void 0,
      v = q(
        g
          ? {
              id: h,
              data: t.response.formData,
              output: { result: g, status: t.response.status },
            }
          : void 0,
      ),
      w = I(Ti, "s_fX0bDjeJa0E", [v, o, i, l]);
    return (
      we($i, u),
      we(A1, $),
      we(P1, c),
      we(C1, l),
      we(D1, w),
      we(R1, r),
      we(di, v),
      we(hi, i),
      Nl(I(Li, "s_02wMImzEAbk", [v, u, $, c, t, w, r, o, e, i, l])),
      x(Ne, null, 3, "qY_0")
    );
  },
  f2 = D(I(Ii, "s_TxCFOy819ag")),
  Ri = (e) => {
    const t = Mi(),
      n = zi(),
      {
        onClick$: s,
        reload: l,
        replaceState: o,
        scroll: r,
        ...i
      } = (() => e)(),
      c = Tt(() => Si({ ...i, reload: l }, n)),
      u = Tt(() => xi(e, c, n));
    (i["preventdefault:click"] = !!c), (i.href = c || e.href);
    const $ = u != null ? gs(at("s_eBQ0vFsFKsk")) : void 0,
      h = gs(at("s_i1Cv0pYJNR0", [t, l, o, r]));
    return yo(
      "a",
      {
        ...i,
        children: x(Ne, null, 3, "AD_0"),
        "data-prefetch": u,
        onClick$: [s, h],
        onFocus$: $,
        onMouseOver$: $,
        onQVisible$: $,
      },
      null,
      0,
      "AD_1",
    );
  },
  B = D(I(Ri, "s_8gdLBszqbaM")),
  m2 = (e) =>
    a(
      "script",
      { nonce: P(e, "nonce") },
      { dangerouslySetInnerHTML: ui },
      null,
      3,
      "1Z_0",
    ),
  N1 = (e, ...t) => {
    const { id: n, validators: s } = Ai(t, e);
    function l() {
      return ft(R1, (o) => {
        if (!(n in o))
          throw new Error(`routeLoader$ "${e.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);
        return P(o, n);
      });
    }
    return (
      (l.__brand = "server_loader"),
      (l.__qrl = e),
      (l.__validators = s),
      (l.__id = n),
      Object.freeze(l),
      l
    );
  },
  Ai = (e, t) => {
    let n;
    const s = [];
    if (e.length === 1) {
      const l = e[0];
      l &&
        typeof l == "object" &&
        ("validate" in l
          ? s.push(l)
          : ((n = l.id), l.validation && s.push(...l.validation)));
    } else e.length > 1 && s.push(...e.filter((l) => !!l));
    return (
      typeof n == "string" ? (n = `id_${n}`) : (n = t.getHash()),
      { validators: s.reverse(), id: n }
    );
  },
  Pi = () => {
    const e = new Date().getFullYear();
    return x(
      C,
      {
        children: a(
          "footer",
          null,
          { class: "footer items-center p-4 bg-neutral text-neutral-content" },
          [
            a(
              "aside",
              null,
              { class: "items-center grid-flow-col" },
              [
                a(
                  "svg",
                  null,
                  {
                    class: "fill-current",
                    "clip-rule": "evenodd",
                    "fill-rule": "evenodd",
                    height: "36",
                    viewBox: "0 0 24 24",
                    width: "36",
                    xmlns: "http://www.w3.org/2000/svg",
                  },
                  a(
                    "path",
                    null,
                    {
                      d: "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z",
                    },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                a(
                  "p",
                  null,
                  null,
                  ["Copyright ", e, " - All right reserved"],
                  1,
                  null,
                ),
              ],
              1,
              null,
            ),
            a(
              "nav",
              null,
              {
                class:
                  "grid-flow-col gap-4 md:place-self-center md:justify-self-end",
              },
              [
                x(
                  B,
                  {
                    children: "made with qwik",
                    href: "https://qwik.builder.io/",
                    target: "_blank",
                    [m]: { href: m, target: m },
                  },
                  3,
                  "yk_0",
                ),
                x(
                  B,
                  { children: "Blog", href: "/blog", [m]: { href: m } },
                  3,
                  "yk_1",
                ),
                x(
                  B,
                  { children: "Projects", href: "/projects", [m]: { href: m } },
                  3,
                  "yk_2",
                ),
                x(
                  B,
                  {
                    children: "Try this game",
                    href: "/button-game",
                    [m]: { href: m },
                  },
                  3,
                  "yk_3",
                ),
              ],
              1,
              null,
            ),
          ],
          1,
          null,
        ),
      },
      1,
      "yk_4",
    );
  },
  Ci = D(I(Pi, "s_GvPhUJ5Kg9Q")),
  Di = (e) =>
    x(
      C,
      {
        children: a(
          "div",
          null,
          { class: "navbar bg-base-100" },
          [
            a(
              "div",
              null,
              { class: "navbar-start" },
              a(
                "div",
                null,
                { class: "dropdown" },
                [
                  a(
                    "label",
                    null,
                    { class: "btn btn-ghost btn-circle", tabIndex: 0 },
                    a(
                      "svg",
                      null,
                      {
                        class: "h-5 w-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      a(
                        "path",
                        null,
                        {
                          d: "M4 6h16M4 12h16M4 18h7",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                        },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                    3,
                    null,
                  ),
                  a(
                    "ul",
                    null,
                    {
                      class:
                        "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                      tabIndex: 0,
                    },
                    [
                      a(
                        "li",
                        null,
                        null,
                        x(
                          B,
                          { children: "Homepage", href: "/", [m]: { href: m } },
                          3,
                          "8h_0",
                        ),
                        1,
                        null,
                      ),
                      a(
                        "li",
                        null,
                        null,
                        x(
                          B,
                          { children: "Blog", href: "/blog", [m]: { href: m } },
                          3,
                          "8h_1",
                        ),
                        1,
                        null,
                      ),
                      a(
                        "li",
                        null,
                        null,
                        x(
                          B,
                          {
                            children: "Projects",
                            href: "/projects",
                            [m]: { href: m },
                          },
                          3,
                          "8h_2",
                        ),
                        1,
                        null,
                      ),
                      a(
                        "li",
                        null,
                        null,
                        x(
                          B,
                          {
                            children: "Resume",
                            href: "/Pasquale_De_Lucia-Resume.pdf",
                            target: "_blank",
                            [m]: { href: m, target: m },
                          },
                          3,
                          "8h_3",
                        ),
                        1,
                        null,
                      ),
                    ],
                    1,
                    null,
                  ),
                ],
                1,
                null,
              ),
              1,
              null,
            ),
            a(
              "div",
              null,
              { class: "navbar-center" },
              x(
                B,
                {
                  children: "Nyruchi",
                  class: "btn btn-ghost normal-case text-xl",
                  href: "/",
                  [m]: { class: m, href: m },
                },
                3,
                "8h_4",
              ),
              1,
              null,
            ),
            a(
              "div",
              null,
              { class: "navbar-end" },
              [
                a(
                  "label",
                  null,
                  { class: "h-0 w-0 text-[0px]", for: "cat-spawn" },
                  "Try",
                  3,
                  null,
                ),
                a(
                  "input",
                  null,
                  {
                    class: "toggle",
                    id: "cat-spawn",
                    onClick$: at("s_8cyHPpVKZXc", [e]),
                    type: "checkbox",
                  },
                  null,
                  3,
                  null,
                ),
              ],
              3,
              null,
            ),
          ],
          1,
          null,
        ),
      },
      1,
      "8h_5",
    ),
  Vi = D(I(Di, "s_o4ccBuvIYCs")),
  Oi = async ({ cacheControl: e }) => {
    e({ staleWhileRevalidate: 604800, maxAge: 5 });
  },
  Ni = () => {
    e1();
    const e = q(!1);
    return x(
      C,
      {
        children: [
          x(Vi, { show: e, [m]: { show: m } }, 3, "q8_0"),
          a(
            "main",
            null,
            null,
            [
              e.value && x(ii, null, 3, "q8_1"),
              e.value && x(ai, null, 3, "q8_2"),
              x(Ne, null, 3, "q8_3"),
            ],
            1,
            null,
          ),
          x(Ci, null, 3, "q8_4"),
        ],
      },
      1,
      "q8_5",
    );
  },
  Fi = D(I(Ni, "s_6Y0uFrvPmQs")),
  Bi = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fi, onGet: Oi },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Hi =
    "/build/q-9935d8f4.webp 200w, /build/q-7543aba4.webp 400w, /build/q-0a255698.webp 600w",
  Qi = 600,
  ji = 623,
  Wi = { srcSet: Hi, width: Qi, height: ji };
function Ui(e, t, n, s) {
  return a(
    "img",
    { decoding: "async", loading: "lazy", ...e },
    Wi,
    void 0,
    3,
    t,
  );
}
const Ji = (e) => {
    const t = new Date().getFullYear(),
      n = new Date("1/1/2015").getFullYear(),
      s = X1.toWords(t - n);
    return (
      s.charAt(0).toUpperCase(),
      s.slice(1),
      x(
        C,
        {
          children: a(
            "div",
            null,
            { class: "hero min-h-screen bg-base-200" },
            a(
              "div",
              null,
              { class: "hero-content flex-col lg:flex-row" },
              [
                x(
                  Ui,
                  {
                    alt: "Pasquale De Lucia picture",
                    class:
                      "max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl",
                    loading: "eager",
                    [m]: { alt: m, class: m, loading: m },
                  },
                  3,
                  "ED_0",
                ),
                a(
                  "div",
                  null,
                  { class: "prose m-6 md:my-0" },
                  [
                    a(
                      "h1",
                      null,
                      { class: "text-5xl font-bold" },
                      "Pasquale De Lucia",
                      3,
                      null,
                    ),
                    a(
                      "p",
                      null,
                      null,
                      "Web Wizard and JavaScript Lover",
                      3,
                      null,
                    ),
                    a(
                      "p",
                      null,
                      null,
                      [
                        "I craft digital wonders as a ",
                        V((l) => l.role, [e], "p0.role"),
                        " at ",
                        V((l) => l.company, [e], "p0.company"),
                        ".",
                      ],
                      3,
                      null,
                    ),
                    a(
                      "p",
                      null,
                      null,
                      [
                        "With a solid ",
                        s,
                        " years of web development under my belt, I'm here to make your online dreams a reality.",
                      ],
                      1,
                      null,
                    ),
                    a(
                      "p",
                      null,
                      null,
                      x(
                        B,
                        {
                          children: "Get resume",
                          class: "btn btn-primary text-black",
                          href: "/Pasquale_De_Lucia-Resume.pdf",
                          target: "_blank",
                          [m]: { class: m, href: m, target: m },
                        },
                        3,
                        "ED_1",
                      ),
                      1,
                      null,
                    ),
                  ],
                  1,
                  null,
                ),
              ],
              1,
              null,
            ),
            1,
            null,
          ),
        },
        1,
        "ED_2",
      )
    );
  },
  Zi = D(I(Ji, "s_Jevt7v9CDh4")),
  Gi = (e) => {
    let t = [...e.items];
    return (
      e.limit && (t = t.splice(0, e.limit)),
      x(
        C,
        {
          children: a(
            "div",
            null,
            null,
            a(
              "div",
              null,
              { class: "grid md:grid-cols-3 justify-items-center gap-12" },
              t.map((n) =>
                a(
                  "div",
                  null,
                  {
                    class:
                      "card w-80 bg-base-100 shadow-xl image-full w-full max-w-[18rem]",
                  },
                  [
                    n.image &&
                      a(
                        "figure",
                        null,
                        null,
                        a(
                          "img",
                          { alt: P(n, "altImage"), src: P(n, "image") },
                          { height: 250, width: 250 },
                          null,
                          3,
                          null,
                        ),
                        1,
                        "tS_0",
                      ),
                    a(
                      "div",
                      null,
                      { class: "card-body" },
                      [
                        a(
                          "h2",
                          null,
                          { class: "card-title" },
                          P(n, "title"),
                          1,
                          null,
                        ),
                        a(
                          "p",
                          null,
                          null,
                          [
                            P(n, "description"),
                            a("br", null, null, null, 3, null),
                            a("br", null, null, null, 3, null),
                            a(
                              "span",
                              null,
                              {
                                class:
                                  "bg-secondary text-black rounded-3xl p-1 text-xs",
                              },
                              P(n, "type"),
                              1,
                              null,
                            ),
                          ],
                          1,
                          null,
                        ),
                        a(
                          "div",
                          null,
                          { class: "card-actions justify-end" },
                          x(
                            B,
                            {
                              class: "btn btn-primary text-black",
                              get href() {
                                return n.href;
                              },
                              children: P(n, "action"),
                              target: "_blank",
                              [m]: { class: m, href: Pe(n, "href"), target: m },
                            },
                            1,
                            "tS_1",
                          ),
                          1,
                          null,
                        ),
                      ],
                      1,
                      null,
                    ),
                  ],
                  1,
                  n.id,
                ),
              ),
              1,
              null,
            ),
            1,
            null,
          ),
        },
        1,
        "tS_2",
      )
    );
  },
  F1 = D(I(Gi, "s_Yj7Oj0dysis")),
  Ki = (e) => {
    const t = [...e.articles];
    return x(
      C,
      {
        children: a(
          "div",
          null,
          { class: "container mx-auto" },
          a(
            "div",
            null,
            { class: "grid md:grid-cols-2 justify-items-center gap-12" },
            t.map((n) =>
              x(
                B,
                {
                  get href() {
                    return n.href;
                  },
                  children: a(
                    "article",
                    null,
                    { class: "prose" },
                    [
                      a("h3", null, null, P(n, "title"), 1, null),
                      a(
                        "p",
                        null,
                        { class: "flex items-center gap-2" },
                        [
                          P(n, "date"),
                          " ",
                          a(
                            "span",
                            null,
                            {
                              class:
                                "bg-secondary text-black p-1 text-xs rounded",
                            },
                            P(n, "lang"),
                            1,
                            null,
                          ),
                        ],
                        1,
                        null,
                      ),
                      a("p", null, null, P(n, "description"), 1, null),
                    ],
                    1,
                    null,
                  ),
                  target: "_blank",
                  [m]: { href: Pe(n, "href"), target: m },
                },
                1,
                n.id,
              ),
            ),
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      "VS_0",
    );
  },
  B1 = D(I(Ki, "s_aHaxQW3gUTM")),
  Yi = (e) => {
    const t = e.items.map((n) => ({
      el: q(),
      isVisible: q(!0),
      observer: null,
    }));
    return (
      Us(at("s_0ojETuoBKWY", [t])),
      x(
        C,
        {
          children: a(
            "div",
            null,
            { class: "container mx-auto w-full h-full" },
            a(
              "div",
              null,
              { class: "relative wrap overflow-hidden p-10 h-full" },
              [
                a(
                  "div",
                  null,
                  {
                    class:
                      "border-2-2 border-secondary absolute h-full border left-5 md:left-1/2",
                    style: "border-radius: 1%;",
                  },
                  null,
                  3,
                  null,
                ),
                e.items.map((n, s) =>
                  s % 2 === 0
                    ? a(
                        "div",
                        {
                          class: `mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline
                  animation
                  ${t[s].isVisible.value && "isVisible"}`,
                          ref: t[s].el,
                        },
                        null,
                        [
                          a(
                            "div",
                            null,
                            { class: "order-1 w-0 md:w-5/12" },
                            null,
                            3,
                            null,
                          ),
                          a(
                            "div",
                            null,
                            {
                              class:
                                "order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right",
                            },
                            [
                              a(
                                "p",
                                null,
                                { class: "mb-3 text-base text-secondary" },
                                P(n, "startDate"),
                                1,
                                null,
                              ),
                              a(
                                "h4",
                                null,
                                { class: "mb-3 font-bold text-lg md:text-2xl" },
                                P(n, "title"),
                                1,
                                null,
                              ),
                              a(
                                "p",
                                null,
                                { class: "mb-3 font-bold text-md md:text-xl" },
                                P(n, "role"),
                                1,
                                null,
                              ),
                              a(
                                "p",
                                null,
                                {
                                  class:
                                    "text-sm md:text-base leading-snug text-gray-50 text-opacity-100",
                                },
                                P(n, "description"),
                                1,
                                null,
                              ),
                            ],
                            1,
                            null,
                          ),
                        ],
                        1,
                        n.id,
                      )
                    : a(
                        "div",
                        {
                          class: `mb-8 flex justify-between items-center w-full right-timeline animation
                  ${t[s].isVisible.value && "isVisible"}`,
                          ref: t[s].el,
                        },
                        null,
                        [
                          a(
                            "div",
                            null,
                            { class: "order-1 w-0 md:w-5/12" },
                            null,
                            3,
                            null,
                          ),
                          a(
                            "div",
                            null,
                            {
                              class:
                                "order-1  w-full md:w-5/12 px-1 py-4 text-left",
                            },
                            [
                              a(
                                "p",
                                null,
                                { class: "mb-3 text-base text-secondary" },
                                P(n, "startDate"),
                                1,
                                null,
                              ),
                              a(
                                "h4",
                                null,
                                { class: "mb-3 font-bold text-lg md:text-2xl" },
                                P(n, "title"),
                                1,
                                null,
                              ),
                              a(
                                "p",
                                null,
                                { class: "mb-3 font-bold text-md md:text-xl" },
                                P(n, "role"),
                                1,
                                null,
                              ),
                              a(
                                "p",
                                null,
                                {
                                  class:
                                    "text-sm md:text-base leading-snug text-gray-50 text-opacity-100",
                                },
                                P(n, "description"),
                                1,
                                null,
                              ),
                            ],
                            1,
                            null,
                          ),
                        ],
                        1,
                        n.id,
                      ),
                ),
              ],
              1,
              null,
            ),
            1,
            null,
          ),
        },
        1,
        "VS_0",
      )
    );
  },
  H1 = D(I(Yi, "s_sZIPqDBaEpc")),
  Xi = "_container_txf6w_1",
  ec = { container: Xi },
  tc = (e) =>
    x(
      C,
      {
        children: a(
          "div",
          null,
          { class: "container mx-auto " + ec.container },
          [
            a(
              "h4",
              null,
              { class: "text-center mb-4 text-xl font-bold" },
              V((t) => t.title, [e], "p0.title"),
              3,
              null,
            ),
            a(
              "div",
              null,
              { class: "flex flex-wrap justify-center gap-12" },
              e.stacks.map((t) =>
                x(
                  B,
                  {
                    get href() {
                      return t.href;
                    },
                    target: "_blank",
                    get "aria-label"() {
                      return t.href;
                    },
                    children: a(
                      "div",
                      { dangerouslySetInnerHTML: P(t, "svg") },
                      null,
                      null,
                      3,
                      null,
                    ),
                    class: "w-full max-w-[3rem] min-w-[2rem]",
                    [m]: {
                      "aria-label": Pe(t, "href"),
                      class: m,
                      href: Pe(t, "href"),
                      target: m,
                    },
                  },
                  1,
                  t.id,
                ),
              ),
              1,
              null,
            ),
          ],
          1,
          null,
        ),
      },
      1,
      "uZ_0",
    ),
  Ae = D(I(tc, "s_o91wC8IGdho")),
  nc = "_icon_mcn59_1",
  bs = { icon: nc },
  sc = (e) =>
    x(
      C,
      {
        children: a(
          "ul",
          null,
          null,
          e.links.map((t) =>
            a(
              "li",
              null,
              { class: "mb-4" },
              x(
                B,
                {
                  class:
                    "link-container flex items-center justify-between transition duration-200 font-bold bg-primary border-primary border-2 hover:bg-transparent hover:text-primary py-2 w-100 block text-black rounded-lg pl-4 md:px-4",
                  get href() {
                    return t.url;
                  },
                  children: [
                    a(
                      "span",
                      { dangerouslySetInnerHTML: P(t, "svg") },
                      { class: bs.icon + " p-2" },
                      null,
                      3,
                      null,
                    ),
                    a("span", null, null, P(t, "title"), 1, null),
                    a(
                      "span",
                      { dangerouslySetInnerHTML: P(t, "svg") },
                      { class: bs.icon + " p-2 invisible opacity-0" },
                      null,
                      3,
                      null,
                    ),
                  ],
                  rel: "noopener",
                  target: "_blank",
                  [m]: { class: m, href: Pe(t, "url"), rel: m, target: m },
                },
                1,
                "YJ_0",
              ),
              1,
              t.id,
            ),
          ),
          1,
          null,
        ),
      },
      1,
      "YJ_1",
    ),
  Q1 = D(I(sc, "s_x0jeNTb2iQc")),
  lc = [
    {
      id: 1,
      title: "Github",
      url: "https://github.com/VarPDev",
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    `,
    },
    {
      id: 2,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/pasquale-de-lucia-web-dev/",
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>    
    `,
    },
    {
      id: 3,
      title: "Stack Overflow",
      url: "https://stackoverflow.com/users/8172268/pasquale-de-lucia",
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg>
    `,
    },
    {
      id: 4,
      title: "DEV.to",
      url: "https://dev.to/varpdev",
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>dev.to</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>
    `,
    },
    {
      id: 5,
      title: "Resume",
      url: "/Pasquale_De_Lucia-Resume.pdf",
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ReadMe</title><path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8847-3.133 6.138-3.133h3.7373A2.0007 2.0007 0 0 0 24 15.5131V5.2697a2.0007 2.0007 0 0 0-1.9887-2.0006Zm-11.928 11.0557a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9524a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm10.8037 5.0696a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9484a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144v.9524z"/></svg>
    `,
    },
  ],
  cn = [
    {
      id: 1,
      startDate: "Jan 2022",
      endDate: "Current",
      company: "ScuolaZoo",
      slug: "The voice of the new generations",
      description: `I started in this company as a full-stack developer, in the first year I developed a new mobile app for IOS and Android, 
      stabilized a platform to create and print your own diary and started to think about the future technology which could be used in ScuolaZoo. 
      In the second year I projected the architecture of all new systems that will replace the old ecosystem, reaching the full-stack engineer promotion.`,
      role: "Full-stack engineer",
    },
    {
      id: 2,
      startDate: "Mar 2019",
      endDate: "Gen 2022",
      company: "Semantyca",
      description: `Worked in Milan based company Semantyca in a team of 7 people.
    During this three years I taught my colleagues the front-end best practices and new frameworks or new tools, becoming a front-end tech lead.
    I also interacted with customers, to decide on the specifications and for post production.`,
      slug: "A software house with twenty years of experience in building databases",
      role: "Lead front-end",
    },
    {
      id: 3,
      startDate: "Jul 2018",
      endDate: "Mar 2019",
      company: "Botsociety",
      description: `I started to did some new features to the existings web products and bug fixing. 
      After showing my potential to the team, I was included in the refactoring of all Botsociety ecosystem.`,
      slug: "",
      role: "Full-stack JavaScript developer",
    },
    {
      id: 4,
      startDate: "Jun 2017",
      endDate: "Jul 2018",
      company: "MainStreaming",
      description: `I created a library that allows customers to use a full customizable video editor using pure javascript and
    developed the MainStreaming backoffice with Angular framework`,
      slug: "",
      role: "Full-stack developer",
    },
    {
      id: 5,
      startDate: "Feb 2016",
      endDate: "Jun 2017",
      company: "Zinformatica",
      description: `After demonstrating my aptitude for development, a tech lead selected me to initiate and lead a new AngularJS 
    project, this product allowed our client to drive sales to new heights.`,
      slug: "",
      role: "Full-stack developer",
    },
  ],
  j1 = [
    {
      id: 1,
      title: "Qwik",
      description: "I joined this open source project as a contributor",
      altImage: "Qwik logo picture",
      image: "/qwik-logo.png",
      action: "Check framework",
      type: "Qwik",
      color: "orange-600",
      href: "https://qwik.builder.io/",
    },
    {
      id: 2,
      title: "This website",
      description: "Feel free to check out how I developed this website",
      altImage: "Pasquale De Lucia picture",
      image: "/Pako.jpeg",
      action: "Check code",
      type: "Qwik",
      color: "orange-600",
      href: "https://github.com/VarPDev/pako",
    },
    {
      id: 3,
      title: "Rick & Morty",
      description:
        "Wiki about Rick and Morty, an adult animated science fiction sitcom",
      altImage: "rick and morty",
      image: "/rick_and_morty.png",
      action: "Try it",
      type: "Angular",
      color: "orange-600",
      href: "https://rick-and-morty-e.web.app/",
    },
    {
      id: 4,
      title: "Resume me",
      description: "An app built with Flutter to share your own resume",
      altImage: "Resume me app logo",
      image: "/resume_me.png",
      action: "Download",
      type: "APP",
      color: "orange-600",
      href: "https://play.google.com/store/apps/details?id=com.pako.resume_me&pli=1",
    },
    {
      id: 5,
      title: "Tab sync",
      description:
        "Npm library that allows you to communicate between multiple browser tabs",
      altImage: "Tab sync logo",
      action: "Try it",
      type: "NPM",
      color: "orange-600",
      href: "https://www.npmjs.com/package/@devhobby/tab-sync",
    },
  ],
  oc = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path d="M9.96 12.648h4.08L12 7.74l-2.04 4.908zM12 0 .828 3.984l1.704 14.772L12 24l9.468-5.244 1.704-14.772L12 0zm6.972 18.312h-2.604l-1.404-3.504H9.036l-1.404 3.504H5.028L12 2.652l6.972 15.66z"/></svg>
    `,
      href: "https://angular.io/",
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
    `,
      href: "https://react.dev/",
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flutter</title><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>
    `,
      href: "https://flutter.dev/",
    },
    {
      id: 4,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
    `,
      href: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      id: 5,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>
    `,
      href: "https://nextjs.org/",
    },
    {
      id: 6,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg>  
    `,
      href: "https://nuxt.com/",
    },
    {
      id: 7,
      svg: `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;" d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "/>
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;" d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "/>
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "/>
        </svg>
    `,
      href: "https://qwik.builder.io/",
    },
  ],
  rc = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
    `,
      href: "https://nodejs.org/en",
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
    `,
      href: "https://www.mongodb.com/en-us",
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C Sharp</title><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg>
    `,
      href: "https://dotnet.microsoft.com/en-us/",
    },
  ],
  ic = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code</title><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
    `,
      href: "https://code.visualstudio.com/",
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    `,
      href: "https://github.com/",
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>
    `,
      href: "https://www.npmjs.com/",
    },
    {
      id: 4,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
    `,
      href: "https://tailwindcss.com/",
    },
  ],
  cc =
    "/build/q-b6ff3ea8.webp 200w, /build/q-fd499dfb.webp 400w, /build/q-afd2a267.webp 600w, /build/q-8e87c3b5.webp 800w",
  ac = 800,
  uc = 686,
  $c = { srcSet: cc, width: ac, height: uc };
function dc(e, t, n, s) {
  return a(
    "img",
    { decoding: "async", loading: "lazy", ...e },
    $c,
    void 0,
    3,
    t,
  );
}
function hc(e) {
  switch (!0) {
    case e.includes("ita"):
      return "ITA";
    default:
      return "ENG";
  }
}
const W1 = async ({ devToApiKey: e, limit: t }) => {
    const n = await fetch(
      `https://dev.to/api/articles/me/published?per_page=${t || 30}`,
      { headers: new Headers({ "api-key": e }) },
    );
    if (n.status !== 200) throw Error(n.status.toString());
    return (await n.json()).map((l) => ({
      id: l.id,
      href: l.url,
      title: l.title,
      description: l.description,
      bodyMarkdown: l.body_markdown,
      username: l.user.username,
      slug: l.slug,
      date: el(new Date(l.published_timestamp), "PP"),
      lang: hc(l.tag_list),
    }));
  },
  pc = async (e) =>
    await W1({ devToApiKey: e.env.get("DEV_TO_API_KEY"), limit: 4 }),
  U1 = N1(I(pc, "s_7CjMt5KkVcg")),
  fc = () => {
    const e = U1(),
      t = q(),
      n = q(!0),
      s = q(),
      l = q(!0),
      o = q(),
      r = q(!0),
      i = q(),
      c = q(!0),
      u = q(),
      $ = q(!0),
      h = q(),
      g = q(!0),
      v = q(),
      w = q(!0),
      _ = q(),
      f = q(!0),
      d = q(),
      z = q(!0),
      y = q(),
      p = q(!0),
      k = q(),
      M = q(!0),
      b = q(),
      S = q(!0),
      E = q(),
      L = q(!0),
      Q = q(),
      F = q(!0);
    return (
      Us(
        at("s_yI5OAFh0EDM", [
          [
            { el: t, isVisible: n, observer: null },
            { el: s, isVisible: l, observer: null },
            { el: o, isVisible: r, observer: null },
            { el: i, isVisible: c, observer: null },
            { el: u, isVisible: $, observer: null },
            { el: h, isVisible: g, observer: null },
            { el: v, isVisible: w, observer: null },
            { el: _, isVisible: f, observer: null },
            { el: d, isVisible: z, observer: null },
            { el: y, isVisible: p, observer: null },
            { el: k, isVisible: M, observer: null },
            { el: b, isVisible: S, observer: null },
            { el: E, isVisible: L, observer: null },
            { el: Q, isVisible: F, observer: null },
          ],
        ]),
      ),
      x(
        C,
        {
          children: [
            a(
              "section",
              null,
              null,
              x(
                Zi,
                {
                  get role() {
                    return cn[0].role;
                  },
                  get company() {
                    return cn[0].company;
                  },
                  [m]: { company: m, role: m },
                },
                3,
                "eZ_0",
              ),
              1,
              null,
            ),
            a(
              "section",
              { ref: t },
              {
                class: V(
                  (T) => `
      title-section text-center
      animation
      ${T.value && "isVisible"}
    `,
                  [n],
                  `\`
      title-section text-center
      animation
      \${p0.value&&"isVisible"}
    \``,
                ),
              },
              a("h2", null, null, "Latest projects", 3, null),
              3,
              null,
            ),
            a(
              "section",
              { ref: s },
              {
                class: V(
                  (T) => `inner-section
      animation
      ${T.value && "isVisible"}`,
                  [l],
                  '`inner-section\n      animation\n      ${p0.value&&"isVisible"}`',
                ),
              },
              [
                x(
                  F1,
                  { items: j1, limit: 3, [m]: { items: m, limit: m } },
                  3,
                  "eZ_1",
                ),
                a(
                  "p",
                  null,
                  { class: "flex justify-center pt-6" },
                  x(
                    B,
                    {
                      "aria-label": "See more projects",
                      children: "See more projects",
                      class: "btn btn-primary text-black",
                      href: "/projects",
                      [m]: { "aria-label": m, class: m, href: m },
                    },
                    3,
                    "eZ_2",
                  ),
                  1,
                  null,
                ),
              ],
              1,
              null,
            ),
            a(
              "section",
              { ref: o },
              {
                class: V(
                  (T) => `
      title-section text-center
      animation
      ${T.value && "isVisible"}
    `,
                  [r],
                  `\`
      title-section text-center
      animation
      \${p0.value&&"isVisible"}
    \``,
                ),
              },
              [
                a("h2", null, null, "History", 3, null),
                a("h3", null, null, "All my jobs", 3, null),
              ],
              3,
              null,
            ),
            a(
              "section",
              { ref: i },
              {
                class: V(
                  (T) => `w-11/12 lg:w-5/6 sticky animation
      ${T.value && "isVisible"}`,
                  [c],
                  '`w-11/12 lg:w-5/6 sticky animation\n      ${p0.value&&"isVisible"}`',
                ),
              },
              x(H1, { items: cn, [m]: { items: m } }, 3, "eZ_3"),
              1,
              null,
            ),
            a(
              "section",
              { ref: u },
              {
                class: V(
                  (T) => `
      title-section text-center
      animation
      ${T.value && "isVisible"}
    `,
                  [$],
                  `\`
      title-section text-center
      animation
      \${p0.value&&"isVisible"}
    \``,
                ),
              },
              a("h2", null, null, "Latest articles", 3, null),
              3,
              null,
            ),
            a(
              "section",
              { ref: h },
              {
                class: V(
                  (T) => `inner-section
      animation
      ${T.value && "isVisible"}`,
                  [g],
                  '`inner-section\n      animation\n      ${p0.value&&"isVisible"}`',
                ),
              },
              [
                x(
                  B1,
                  {
                    get articles() {
                      return e.value;
                    },
                    [m]: { articles: V((T) => T.value, [e], "p0.value") },
                  },
                  3,
                  "eZ_4",
                ),
                a(
                  "p",
                  null,
                  { class: "flex justify-center pt-6" },
                  x(
                    B,
                    {
                      "aria-label": "Read more articles",
                      children: "Read more articles",
                      class: "btn btn-primary text-black",
                      href: "/blog",
                      [m]: { "aria-label": m, class: m, href: m },
                    },
                    3,
                    "eZ_5",
                  ),
                  1,
                  null,
                ),
              ],
              1,
              null,
            ),
            a(
              "section",
              { ref: v },
              {
                class: V(
                  (T) => `title-section text-center
      animation
      ${T.value && "isVisible"}`,
                  [w],
                  '`title-section text-center\n      animation\n      ${p0.value&&"isVisible"}`',
                ),
              },
              [
                a("h2", null, null, "Stack", 3, null),
                a("h3", null, null, "My tecnology stack", 3, null),
              ],
              3,
              null,
            ),
            a(
              "section",
              { ref: _ },
              {
                class: V(
                  (T) => `inner-section
        animation
        ${T.value && "isVisible"}`,
                  [f],
                  '`inner-section\n        animation\n        ${p0.value&&"isVisible"}`',
                ),
              },
              x(
                Ae,
                {
                  stacks: oc,
                  title: "Front end",
                  [m]: { stacks: m, title: m },
                },
                3,
                "eZ_6",
              ),
              1,
              null,
            ),
            a(
              "section",
              { ref: d },
              {
                class: V(
                  (T) => `inner-section
        animation
        ${T.value && "isVisible"}`,
                  [z],
                  '`inner-section\n        animation\n        ${p0.value&&"isVisible"}`',
                ),
              },
              x(
                Ae,
                { stacks: rc, title: "Back end", [m]: { stacks: m, title: m } },
                3,
                "eZ_7",
              ),
              1,
              null,
            ),
            a(
              "section",
              { ref: y },
              {
                class: V(
                  (T) => `inner-section
        animation
        ${T.value && "isVisible"}`,
                  [p],
                  '`inner-section\n        animation\n        ${p0.value&&"isVisible"}`',
                ),
              },
              x(
                Ae,
                { stacks: ic, title: "Tools", [m]: { stacks: m, title: m } },
                3,
                "eZ_8",
              ),
              1,
              null,
            ),
            a(
              "section",
              { ref: k },
              {
                class: V(
                  (T) => `title-section text-center
      animation
      ${T.value && "isVisible"}`,
                  [M],
                  '`title-section text-center\n      animation\n      ${p0.value&&"isVisible"}`',
                ),
              },
              [
                a("h2", null, null, "Open source world", 3, null),
                a("h3", null, null, "My first accepted PR | Qwik", 3, null),
              ],
              3,
              null,
            ),
            a(
              "section",
              { ref: b },
              {
                class: V(
                  (T) => `inner-section
        animation
        ${T.value && "isVisible"}`,
                  [S],
                  '`inner-section\n        animation\n        ${p0.value&&"isVisible"}`',
                ),
              },
              a(
                "div",
                null,
                { class: "flex items-center justify-center" },
                x(
                  dc,
                  {
                    alt: "My first PR",
                    class:
                      "max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl",
                    [m]: { alt: m, class: m },
                  },
                  3,
                  "eZ_9",
                ),
                1,
                null,
              ),
              1,
              null,
            ),
            a(
              "section",
              { ref: E },
              {
                class: V(
                  (T) => `title-section text-center
      animation
      ${T.value && "isVisible"}`,
                  [F],
                  '`title-section text-center\n      animation\n      ${p0.value&&"isVisible"}`',
                ),
              },
              [
                a("h2", null, null, "Links", 3, null),
                a("h3", null, null, "Some of my socials", 3, null),
              ],
              3,
              null,
            ),
            a(
              "section",
              { ref: Q },
              {
                class: V(
                  (T) => `link-section
        animation
        ${T.value && "isVisible"}`,
                  [F],
                  '`link-section\n        animation\n        ${p0.value&&"isVisible"}`',
                ),
              },
              x(Q1, { links: lc, [m]: { links: m } }, 3, "eZ_10"),
              1,
              null,
            ),
          ],
        },
        1,
        "eZ_11",
      )
    );
  },
  mc = D(I(fc, "s_tstUEhxLUWc")),
  gc = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  vc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: mc, head: gc, useArticles: U1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  yc = () =>
    x(
      C,
      {
        children: a(
          "section",
          null,
          { class: "inner-section" },
          a(
            "div",
            null,
            { class: "flex flex-col gap-12 items-center justify-center" },
            [
              a("h1", null, { class: "mb-6" }, "OPSS!", 3, null),
              a(
                "p",
                null,
                null,
                [
                  "Uh-oh! It looks like you've wandered into the cosmic void of cyberspace. Our binary aliens are throwing a rave just around the corner. Hurry back before they invite you to dance in zeros and ones! Alternatively, try our game at this",
                  " ",
                  x(
                    B,
                    {
                      children: "link",
                      href: "../button-game",
                      [m]: { href: m },
                    },
                    3,
                    "OH_0",
                  ),
                  ".",
                ],
                1,
                null,
              ),
              a(
                "img",
                null,
                {
                  decoding: "async",
                  height: "1200",
                  loading: "lazy",
                  srcSet: " /aliens-alien.gif",
                  width: "1200",
                },
                null,
                3,
                null,
              ),
            ],
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      "OH_1",
    ),
  wc = D(I(yc, "s_bavVtvgbxHE")),
  bc = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  Sc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wc, head: bc },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  xc = async (e) => await W1({ devToApiKey: e.env.get("DEV_TO_API_KEY") }),
  J1 = N1(I(xc, "s_M0p6wqFFl3I")),
  _c = () => {
    const e = J1();
    return x(
      C,
      {
        children: [
          a(
            "section",
            null,
            { class: "title-section text-center" },
            [
              a("h1", null, null, "Blog", 3, null),
              a("h3", null, null, "Some of my articles", 3, null),
            ],
            3,
            null,
          ),
          a(
            "section",
            null,
            { class: "inner-section" },
            x(
              B1,
              {
                get articles() {
                  return e.value;
                },
                [m]: { articles: V((t) => t.value, [e], "p0.value") },
              },
              3,
              "TQ_0",
            ),
            1,
            null,
          ),
        ],
      },
      1,
      "TQ_1",
    );
  },
  kc = D(I(_c, "s_Uzl3gaAclJA")),
  zc = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  Mc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kc, head: zc, useArticles: J1 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
function Nt(e) {
  let t = 1;
  for (let n = 0; n < e; n++) t *= (100 - n) / 100;
  return t;
}
function Z1(e) {
  return Math.floor(Math.random() * e);
}
const Ec = () => {
    const [e, t, n] = Gt(),
      s = Z1(100);
    e.value === 100
      ? ((e.value = 0), (t.value = 100))
      : (s <= t.value
          ? (e.value++, t.value--)
          : ((e.value = 0), (t.value = 100)),
        (n.value = Nt(t.value)));
  },
  qc = () => {
    const e = q(100),
      t = Nt(100),
      n = q(Nt(e.value)),
      s = q(0),
      l = I(Ec, "s_SqNyGWM7k0k", [s, e, n]);
    return x(
      C,
      {
        children: [
          a(
            "section",
            null,
            { class: "title-section text-center" },
            [
              a("h1", null, { class: "mb-2" }, "Buttom game", 3, null),
              a(
                "h3",
                null,
                null,
                "This game requires no skills but only LUCK. If you win at this game, think to try the lottery!",
                3,
                null,
              ),
            ],
            3,
            null,
          ),
          a(
            "section",
            null,
            { class: "link-section" },
            a(
              "div",
              null,
              { class: "grid grid-cols-1 gap-6 justify-items-center" },
              [
                a(
                  "p",
                  null,
                  null,
                  [
                    "Percentege of success in this level: ",
                    V((o) => o.value, [e], "p0.value"),
                    "%",
                  ],
                  3,
                  null,
                ),
                a(
                  "p",
                  null,
                  null,
                  [
                    "Percentege of win from now: ",
                    V((o) => o.value, [n], "p0.value"),
                    "%",
                  ],
                  3,
                  null,
                ),
                a("p", null, null, ["Percentege of win ", t, "%"], 1, null),
                a(
                  "div",
                  {
                    class: `button w-48 h-48 md:w-72 md:h-72 rounded-full cursor-pointer select-none
    active:translate-y-4
    active:border-b-[0px]
    transition-all duration-150
    border-[5px] ${
      s.value === 100
        ? "border-green-400 bg-green-500 active:[box-shadow:0_0px_0_0_#298a09,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#298a09,0_13px_0_0_#1b70f841]"
        : "border-red-400 bg-red-500 active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]"
    }`,
                  },
                  { onClick$: l },
                  a(
                    "span",
                    null,
                    {
                      class:
                        "flex flex-col justify-center items-center h-full text-white font-bold text-lg ",
                    },
                    "Press this button",
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                a(
                  "p",
                  null,
                  null,
                  ["You are at level ", V((o) => o.value, [s], "p0.value")],
                  3,
                  null,
                ),
                a(
                  "p",
                  null,
                  null,
                  V(
                    (o) => (o.value === 100 ? "HAI VINTO" : ""),
                    [s],
                    'p0.value===100?"HAI VINTO":""',
                  ),
                  3,
                  null,
                ),
              ],
              1,
              null,
            ),
            1,
            null,
          ),
        ],
      },
      1,
      "CD_0",
    );
  },
  Tc = D(I(qc, "s_lVhXlSc0AIU")),
  Lc = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  Ic = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getRandomInt: Z1,
        _auto_probabilityOfSuccess: Nt,
        default: Tc,
        head: Lc,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Rc = () =>
    x(
      C,
      {
        children: [
          a(
            "section",
            null,
            { class: "title-section text-center" },
            [
              a("h1", null, null, "History", 3, null),
              a("h3", null, null, "All my jobs", 3, null),
            ],
            3,
            null,
          ),
          a(
            "section",
            null,
            { class: "lg:w-2/3 sticky" },
            x(
              H1,
              {
                items: [
                  {
                    id: 1,
                    startDate: "Jan 2022",
                    endDate: "Current",
                    title: "ScuolaZoo",
                    slug: "The voice of the new generations",
                    description:
                      "ScuolaZoo is one of the companies of OneDay Group, a business and community builder, whose goal is to test, implement and spread a new and engaging way of experiencing work and doing business! What makes us different from the others is our approach: we mix digital and on field activities, we go from memes to community creation, always having at the center our vision, that is to put the new generations at the center!",
                    role: "Full-stack engineer",
                  },
                  {
                    id: 2,
                    startDate: "Mar 2019",
                    endDate: "Gen 2022",
                    title: "Semantyca",
                    description:
                      "We create web systems that can import any number of documents and all types into a database, we correlate them with each other, we recognize the entities based on what your data contains, we organize them into taxonomies. Finally we allow searching for them, full text or for concepts through neural networks",
                    slug: "A software house with twenty years of experience in building databases",
                    role: "Lead fron-end",
                  },
                  {
                    id: 3,
                    startDate: "Jul 2018",
                    endDate: "Mar 2019",
                    title: "Botsociety",
                    description:
                      "Botsociety allows you to design conversations for any platform, including WhatsApp, Messenger, the Google Assistant, Alexa, Slack, and more. Each platform is customized for that tool specifically, so you can be sure that all of your designs will flow as intended.",
                    slug: "",
                    role: "Full-stack JavaScript developer",
                  },
                  {
                    id: 4,
                    startDate: "Jun 2017",
                    endDate: "Jul 2018",
                    title: "MainStreaming",
                    description:
                      "MainStreaming is a video delivery network created to distribute video streaming in an intelligent and sustainable way available to industries who need an evolved service of both video hosting and live streaming on a global level. The first Video Delivery Network (VDN) designed to deliver the highest quality & performance in live video and on demand globally",
                    slug: "",
                    role: "Full-stack developer",
                  },
                  {
                    id: 5,
                    startDate: "Feb 2016",
                    endDate: "Jun 2017",
                    title: "Zinformatica",
                    description:
                      "Zinformatica provide IT services that exceed customer expectations, maintaining a high standard of excellence through quality work and total commitment.",
                    slug: "",
                    role: "Full-stack developer",
                  },
                ],
              },
              3,
              "u8_0",
            ),
            1,
            null,
          ),
        ],
      },
      1,
      "u8_1",
    ),
  Ac = D(I(Rc, "s_vNaJw7V9CHY")),
  Pc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ac },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Cc = () =>
    x(
      C,
      {
        children: [
          a(
            "section",
            null,
            { class: "title-section text-center" },
            [
              a("h1", null, null, "Links", 3, null),
              a("h3", null, null, "Some of my socials", 3, null),
            ],
            3,
            null,
          ),
          a(
            "section",
            null,
            { class: "link-section" },
            x(
              Q1,
              {
                links: [
                  {
                    id: 1,
                    title: "Github",
                    url: "https://github.com/VarPDev",
                    svg: `
        <svg viewBox="0 0 128 128">
          <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
        </svg>
      `,
                  },
                  {
                    id: 2,
                    title: "Linkedin",
                    url: "https://www.linkedin.com/in/pasquale-de-lucia-web-dev/",
                    svg: `
        <svg viewBox="0 0 128 128">
          <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
        </svg>      
      `,
                  },
                  {
                    id: 3,
                    title: "Stack Overflow",
                    url: "https://stackoverflow.com/users/8172268/pasquale-de-lucia",
                    svg: `
        <svg viewBox="0 0 128 128"><path d="M84.021 75.825v31H11v-31H0v42h95v-42H84.021z" fill="#BCBBBB"/><path d="M21.057 96.825H74v-10H21.057v10zm1.058-23.915l51.429 10.794 2.116-10.265-51.428-10.794-2.117 10.265zm6.773-24.656l47.619 22.222 4.444-9.524L33.332 38.73l-4.444 9.524zm13.227-23.386l40.423 33.65 6.773-8.042-40.53-33.65-6.666 8.042zM68.147 0L59.68 6.243l31.323 42.222 8.465-6.243L68.147 0z" fill="#F48024"/></svg>
      `,
                  },
                  {
                    id: 4,
                    title: "DEV.to",
                    url: "https://dev.to/varpdev",
                    svg: `
        <svg viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="11.264"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%"></rect><path fill="#ffffff" d="M140.47 203.94h-17.44v104.47h17.45c10.155-.545 17.358-8.669 17.47-17.41v-69.65c-.696-10.364-7.796-17.272-17.48-17.41zm45.73 87.25c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H233.6v38.42h32.57v29.57H233.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"></path></g></svg>
      `,
                  },
                ],
              },
              3,
              "l7_0",
            ),
            1,
            null,
          ),
        ],
      },
      1,
      "l7_1",
    ),
  Dc = D(I(Cc, "s_KGOeb6p3oY8")),
  Vc = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  Oc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Dc, head: Vc },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Nc = () =>
    x(
      C,
      {
        children: [
          a(
            "section",
            null,
            { class: "title-section text-center" },
            [
              a("h1", null, null, "Projects", 3, null),
              a("h3", null, null, "Some of my projects", 3, null),
            ],
            3,
            null,
          ),
          a(
            "section",
            null,
            { class: "inner-section" },
            x(F1, { items: j1, [m]: { items: m } }, 3, "Mg_0"),
            1,
            null,
          ),
        ],
      },
      1,
      "Mg_1",
    ),
  Fc = D(I(Nc, "s_yMerZA5h0Vw")),
  Bc = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  Hc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Fc, head: Bc },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Qc = () => {
    const e = [
        {
          id: 2,
          svg: `
        <svg viewBox="0 0 128 128">
          <path fill="#C4473A" d="M52.864 64h23.28L63.769 38.123zM63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026zM48.044 75l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.141l.123-.274V12h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 3,
          svg: `
        <svg viewBox="0 0 128 128">
          <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 4,
          svg: `
        <svg viewBox="0 0 128 128">
          <path fill="#3FB6D3" d="M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 8,
          svg: `
        <svg viewBox="0 0 128 128">
          <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 9,
          svg: `
        <svg viewBox="0 0 128 128">
          <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 12,
          svg: `
        <svg viewBox="0 0 128 128">
          <path d="M9.836 75.263l-.07-.142c-.143-.284-.143-.568-.072-.924H2.02l11.37-20.182 4.762 8.599 1.563-1.137-4.76-8.599c-.072-.142-.64-.995-1.564-.995-.427 0-1.066.142-1.564 1.066L.314 73.345c-.071.213-.569 1.137-.142 1.918.284.427.71.853 1.705.853h9.665c-.995 0-1.492-.426-1.706-.853z"></path><path d="M31.724 73.416l-9.238-16.63c-.142-.142-.64-1.065-1.563-1.065-.427 0-1.066.213-1.564 1.066l-1.208 1.99v3.837l2.772-4.761 9.167 16.344h-3.482a1.634 1.634 0 01-.142.995l-.071.071c-.427.782-1.493.853-1.635.853h5.401c.213 0 1.208-.07 1.706-.853.213-.355.355-.994-.143-1.847z"></path><path d="M26.679 75.263v-.07l.07-.143c.072-.284.143-.568.072-.853l-.284-.852-7.249-12.65-1.066-1.919h-.071l-1.066 1.92-7.249 12.649-.284.852a1.706 1.706 0 00.142 1.066c.285.427.711.853 1.706.853h13.502c.213 0 1.28-.07 1.777-.853zm-8.528-12.65l6.61 11.584H11.541z"></path><g><path d="M49.598 60.828c.163.179.277.424.26.684V74.8c0 .277-.097.554-.293.766a1.01 1.01 0 01-.75.31c-.163 0-.326-.032-.489-.081a.815.815 0 01-.342-.229l-8.608-11.2v10.532a.93.93 0 01-.978.962.887.887 0 01-.652-.277.946.946 0 01-.278-.669v-13.32c0-.276.115-.553.326-.749a.978.978 0 01.702-.293c.163 0 .342.032.489.097a.86.86 0 01.39.278l8.56 11.232V61.512a.93.93 0 01.978-.961c.245 0 .49.081.652.277zm17.72.032c.18.212.294.49.278.75v8.412a6.235 6.235 0 01-.766 3.098 5.425 5.425 0 01-2.12 2.168 5.784 5.784 0 01-3.032.8 6.35 6.35 0 01-3.065-.783 5.543 5.543 0 01-2.12-2.152 6.293 6.293 0 01-.765-3.114v-8.412c0-.278.097-.555.326-.75a1.092 1.092 0 011.516 0c.195.195.31.456.31.75v8.38a3.976 3.976 0 00.521 2.053 3.782 3.782 0 003.277 1.908 3.913 3.913 0 003.93-3.962v-8.38c0-.277.08-.554.26-.766a.919.919 0 01.734-.31c.277 0 .538.115.717.31zm16.94 13.336a1.027 1.027 0 01.179.62.952.952 0 01-.31.75 1.043 1.043 0 01-.701.277 1.017 1.017 0 01-.864-.44l-4.239-5.674-4.173 5.673a1.01 1.01 0 01-.848.457.923.923 0 01-.668-.277.908.908 0 01-.278-.62c0-.26.098-.521.261-.717l4.5-6.114-4.516-6.064a1.01 1.01 0 01.081-1.37 1.027 1.027 0 011.207-.195.978.978 0 01.391.326l4.206 5.64 4.141-5.591c.18-.278.49-.457.832-.49.26 0 .521.13.7.327.18.163.294.407.31.652 0 .244-.081.456-.228.652l-4.565 6.064 4.565 6.114zM99.99 60.828a.95.95 0 01.31.733.93.93 0 01-.327.718c-.195.179-.472.277-.75.26h-3.88v12.293a.974.974 0 01-.31.733 1.206 1.206 0 01-1.597 0 1.01 1.01 0 01-.326-.733V62.539h-3.88c-.277 0-.538-.081-.75-.277a.962.962 0 01-.31-.733c0-.261.098-.522.294-.701.212-.196.489-.294.75-.277h10.01c.277 0 .554.081.766.277zM104.75 75.484a4.573 4.573 0 01-1.712-1.68 1.198 1.198 0 01-.195-.586.93.93 0 01.326-.717c.18-.196.424-.294.684-.327.392.05.75.245.979.555A2.588 2.588 0 00107.13 74a2.804 2.804 0 002.886-2.804V61.61a.978.978 0 01.326-.75 1.145 1.145 0 011.549-.016 1.027 1.027 0 01.293.75v9.619a4.728 4.728 0 01-2.445 4.238 5.086 5.086 0 01-4.973.033zm15.08.065a6.945 6.945 0 01-2.347-1.467 1.174 1.174 0 01-.457-.88.978.978 0 01.326-.718.978.978 0 01.701-.31c.245 0 .457.082.636.245.522.49 1.141.897 1.793 1.19.685.26 1.402.391 2.12.391a4.11 4.11 0 002.331-.652c.57-.326.946-.929.946-1.597a2.053 2.053 0 00-.946-1.761 8.477 8.477 0 00-2.837-1.027c-1.5-.326-2.657-.815-3.472-1.516s-1.207-1.68-1.207-2.919a3.802 3.802 0 01.685-2.282 4.524 4.524 0 011.859-1.5 7.418 7.418 0 015.282-.081 5.38 5.38 0 011.956 1.157c.294.228.49.57.49.93a.978.978 0 01-.294.7.93.93 0 01-.718.326.786.786 0 01-.489-.179 5.233 5.233 0 00-3.488-1.337 4.052 4.052 0 00-2.332.587 1.94 1.94 0 000 3.228 8.151 8.151 0 002.576.978c.962.18 1.891.49 2.788.864.685.31 1.271.783 1.679 1.402.424.718.62 1.517.587 2.348a3.688 3.688 0 01-.701 2.25 4.53 4.53 0 01-1.956 1.532 8.119 8.119 0 01-5.527.098z"></path></g>
        </svg>      
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
      ],
      t = [
        {
          id: 6,
          svg: `
        <svg viewBox="0 0 128 128">
          <path fill="#83CD29" d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 011.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 004.647 1.246 9.303 9.303 0 004.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 7,
          svg: `
        <svg viewBox="0 0 128 128">
          <path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M82.803 34.23c-2.604-8.108-6.781-15.284-12.667-21.459-1.488-1.562-3.142-2.993-4.18-4.936-.656-1.23-1.281-2.477-1.92-3.715l-.406-1.021-.113.402c-.053 2.02-1.197 3.389-2.621 4.668-1.604 1.438-3.096 3-4.636 4.509l-4.736 6.229-3.829 7.042-2.561 6.915-.077.107c-1.409 4.629-2.104 9.389-2.445 14.195-.129 1.807.019 3.639.12 5.455.145 2.596.596 5.147 1.272 7.66 2.457 9.126 7.444 16.695 14.263 23.127 1.266 1.195 2.635 2.282 3.956 3.418l.585 2.008.544 3.116.26 3.253c-.003.66-.03 1.323.009 1.981.011.169.231.325.355.487l1.104.388 1.149.447-.197-2.891-.009-2.848.397-4.338.288-.944.825-1.461c1.018-.818 2.109-1.562 3.036-2.473 1.677-1.647 3.351-3.317 4.852-5.122a38.489 38.489 0 004.969-7.636c.899-1.833 1.747-3.703 2.448-5.618.618-1.688 1.001-3.463 1.488-5.2l.128-.375c1.005-4.688 1.174-9.424.805-14.19-.297-3.841-1.2-7.548-2.456-11.18zm-19.9 50.275c.154-.771.345-1.538.484-2.312-.139.774-.329 1.541-.484 2.312zm3.417.532l-.646-1.415.646 1.415.949.811-.949-.811zm40.154 17.927c-.826-1.583-2.038-2.785-3.64-3.574-1.342-.66-2.785-.95-4.269-.992-1.112-.032-2.228.025-3.342.039-.989.012-1.979.029-2.968.02-1.163-.012-2.326-.047-3.489-.08-.193-.006-.33.033-.42.229-.141.305-.308.599-.481.933l.194.062c.577.102 1.157.189 1.731.304.738.147 1.07.571 1.104 1.193.05.886.07 1.774.067 2.662-.015 3.514-.04 7.028-.066 10.541-.002.232-.006.474-.069.692-.073.252-.152.578-.34.702a2.907 2.907 0 01-1.115.425c-.561.092-.655.117-.83.669l-.076.276c-.084.301-.039.36.275.363 1.802.02 3.603.059 5.404.053 1.643-.006 3.286.094 4.923-.215 1.547-.291 2.991-.801 4.309-1.664 1.71-1.121 2.94-2.619 3.589-4.574.524-1.579.641-3.19.463-4.841a8.928 8.928 0 00-.954-3.223zm-3.157 9.661c-.964 1.794-2.402 2.992-4.457 3.308-1.287.197-2.576.14-3.803-.347-.777-.308-1.066-.979-1.09-1.772a82.426 82.426 0 01-.033-2.332c-.004-2.734-.004-5.468 0-8.201.002-.861.017-1.724.031-2.586.01-.606.137-.809.728-.858 2.596-.218 5.073.062 7.13 1.889 1.272 1.13 1.996 2.571 2.297 4.226.125.69.163 1.396.241 2.096-.063 1.598-.279 3.153-1.044 4.577zm21.789-2.961c-.512-1.246-1.482-2.027-2.701-2.527-.416-.171-.845-.312-1.294-.478l.157-.1c.485-.311 1.025-.562 1.443-.945 1.016-.931 1.438-2.102 1.24-3.493-.188-1.323-.848-2.294-2.027-2.924-1.07-.57-2.224-.778-3.418-.777-2.066.002-4.133.033-6.199.037-.712.001-1.424-.052-2.136-.062-.138-.002-.343.033-.402.125-.163.25-.271.538-.387.816-.067.162-.001.251.184.275.497.068.993.153 1.491.227.688.103 1.021.461 1.063 1.154l.009.411c.001 2.155.008 4.31-.001 6.465a926.932 926.932 0 01-.061 6.456c-.003.271-.04.543-.079.812-.059.406-.276.686-.692.774l-1.177.232c-.139.028-.34.024-.397.11-.216.323-.39.676-.366 1.102l.121.033 3.953.097.793-.003c1.368-.016 2.738.011 4.104-.059 1.479-.074 2.868-.513 4.152-1.268 1.367-.805 2.419-1.866 2.793-3.462.24-1.019.241-2.044-.166-3.028zm-10.043-9.181c.006-.433.197-.621.627-.632 1.059-.029 2.111-.023 3.133.342 1.322.472 2.135 1.612 2.12 3.005-.007.535.001 1.065-.196 1.579-.389 1.012-1.135 1.546-2.193 1.65-.552.056-1.109.062-1.601.088l-1.642-.072c-.218-.008-.313-.104-.312-.328l.064-5.632zm6.806 13.494c-.529 1.151-1.493 1.756-2.7 1.966a6.823 6.823 0 01-2.892-.127c-.706-.181-.994-.748-1.135-1.377-.095-.421-.079-.922-.087-1.36-.013-.676-.003-2.079-.003-2.079h-.014c0-1 .003-1.866-.003-2.825-.001-.207.034-.31.287-.302.898.027 1.799.042 2.697.077.803.031 1.555.269 2.262.65 1.076.58 1.724 1.468 1.902 2.688.136.925.078 1.835-.314 2.689zm-98.587 1.078l.019-5.437c.003-.818-.101-1.62-.369-2.396-.739-2.137-2.777-3.11-4.899-2.343-.965.349-1.83.878-2.656 1.478-.481.35-.481.35-.829-.149-.985-1.412-2.392-1.895-4.03-1.374-1.059.336-1.985.911-2.862 1.579-.082.062-.247.131-.296.094-.082-.061-.139-.206-.137-.315l.06-.966c.005-.203-.034-.407-.054-.62-.396.137-.712.274-1.043.354-1.023.25-2.053.48-3.082.715-.249.057-.512.132-.536.418-.025.281.246.328.456.412.442.178.881.367 1.318.559.367.162.504.455.502.849-.007 1.685.004 3.368-.006 5.053-.004.685-.036 1.369-.067 2.054-.028.607-.235.861-.823 1.014-.312.082-.629.137-.943.211-.069.016-.187.06-.188.094-.013.297-.029.601.021.89.01.052.324.052.498.072l.117-.007c1.212-.018 2.424-.037 3.637-.05.643-.007 1.285-.001 1.983-.001l.075-.97c-.4-.073-.757-.128-1.109-.205-.549-.12-.783-.411-.797-.965l-.01-.793c-.006-2.057-.014-4.113-.014-6.17 0-.299.124-.536.387-.715.557-.376 1.145-.675 1.796-.842 1.372-.351 2.562.137 3.09 1.304.167.368.298.775.335 1.175.194 2.062.11 4.126-.007 6.188-.025.445-.234.669-.673.778l-1.032.218c-.083.021-.204-.035-.21.034-.023.285-.01.722-.01.722h.246l3.142.103c.861-.002 1.723.102 2.583.124.154.003.291.026.3-.152a8.492 8.492 0 00-.011-.829l-.164-.029-.885-.199c-.597-.141-.803-.368-.805-.972-.007-1.489.013-2.977 0-4.465a45.225 45.225 0 00-.095-2.551c-.015-.226.02-.374.2-.501a5.311 5.311 0 011.732-.835c1.935-.51 3.519.551 3.619 2.546.098 1.924.057 3.855.042 5.783-.005.671-.227.874-.888 1.054l-.228.059c-.677.162-.671.162-.631.881.013.225.075.283.315.277 1.379-.031 2.758-.039 4.137-.051.564-.005 1.128 0 1.742 0l.125-.936c-.539-.143-1.036-.249-1.516-.406-.424-.144-.574-.4-.572-.848zm47.489-8.241c.568-.527.572-1.223.413-1.996-.45.471-.954.688-1.529.729-.771.055-1.528-.012-2.246-.319-1.942-.834-3.854-.775-5.76.14-1.603.768-2.589 1.965-2.688 3.78-.063 1.163.155 2.264.931 3.189.465.554 1.062.913 1.735 1.161.29.107.312.245.069.43a7.01 7.01 0 01-.557.38 73.2 73.2 0 01-1.226.754c-.241.146-.323.332-.244.617.231.838.826 1.322 1.57 1.675l.271.189-.237.237c-.729.591-1.487 1.149-2.185 1.776-.586.527-.775 1.233-.598 2.012.357 1.555 1.388 2.517 2.851 2.959 2.557.774 4.958.33 7.147-1.185 1.298-.899 2.229-2.069 2.512-3.679.317-1.809-.688-3.379-2.487-3.703-1.19-.216-2.408-.278-3.612-.416-.562-.064-1.132-.102-1.679-.231-.465-.11-.696-.489-.653-.859.043-.364.43-.703.873-.738.892-.072 1.766-.211 2.588-.587 2.178-.996 3.189-2.74 2.936-5.088-.033-.316-.105-.628-.17-.996.697.117 1.41.294 1.975-.231zm-6.609 11.017c.886.026 1.894.081 2.868.366.857.25 1.562.688 1.77 1.645.251 1.156-.305 2.306-1.424 2.924-1.048.578-2.186.626-3.34.507-.988-.102-1.877-.444-2.589-1.174-.938-.961-.943-2.291-.004-3.249.839-.856 1.288-1.033 2.719-1.019zm2.217-6.962c-.516 1.651-2.018 1.879-3.195 1.351-1.003-.449-1.44-1.333-1.669-2.342-.089-.388-.11-.791-.162-1.188.021-.569.115-1.115.36-1.627.751-1.577 2.596-1.483 3.617-.769.438.306.743.722.934 1.215a4.998 4.998 0 01.115 3.36zm-9.37 5.263a7.984 7.984 0 01-1.057-.236c-.608-.186-.682-.3-.689-.943-.018-1.792-.03-3.584-.05-5.375-.01-.806-.106-1.601-.353-2.371-.65-2.03-2.641-3.12-4.633-2.521-1.104.333-2.052.952-2.935 1.679l-.322.247.001-.331c.021-.381.062-.762.059-1.143-.002-.199-.078-.399-.115-.574-.753.227-1.428.455-2.117.629-.691.174-1.396.292-2.095.434-.347.07-.602.28-.596.519.009.337.288.402.532.503.442.181.883.364 1.32.558.312.139.439.397.436.732-.022 2.329-.036 4.659-.07 6.989-.01.736-.196.93-.92 1.092l-.316.063c-.67.115-.689.142-.643.849l.004.117c-.008.272.111.36.391.357 1.78-.021 3.561-.031 5.341-.024.763.003.845-.057.829-.841l-.036-.337c-.436-.073-.853-.126-1.261-.216-.427-.095-.58-.27-.62-.704-.037-.397-.049-.8-.053-1.2-.02-1.831-.036-3.662-.045-5.492-.002-.461.083-.889.507-1.186a4.14 4.14 0 012.125-.762c1.588-.109 2.795.832 2.881 2.415.106 1.953.074 3.913.099 5.87.002.146-.024.293-.044.438-.038.286-.178.501-.468.575-.283.074-.57.14-.859.184-.431.064-.44.061-.473.496l.011.293c.051.506.052.491.564.486 1.722-.014 3.443-.023 5.164-.021.72.002.771-.032.777-.774l-.002-.176c.011-.19-.074-.267-.269-.298zm24.052-11.323c-1.805-.441-3.517-.113-5.143.728-1.58.817-2.636 2.08-3.038 3.824-.406 1.763-.212 3.483.567 5.12.507 1.063 1.287 1.885 2.349 2.419 2.486 1.252 5.527.684 7.477-.991 1.539-1.321 2.104-3.08 2.138-5.257-.021-.218-.042-.638-.1-1.054-.327-2.37-1.968-4.231-4.25-4.789zm1.367 9.155c-.479 1.886-2.11 2.724-3.95 2.076-.939-.33-1.641-.961-2.113-1.814-1.086-1.96-1.295-4.044-.677-6.182.412-1.424 1.584-2.203 2.978-2.105 1.246.087 2.204.685 2.907 1.699.741 1.07 1.027 2.287 1.103 3.565.013.205.002.41.002.616l.088.01c-.11.713-.162 1.44-.338 2.135zm-46.764-9.186c-1.899-.434-3.678-.005-5.326.96-1.425.834-2.346 2.08-2.699 3.708-.331 1.521-.196 3.016.343 4.473.328.888.825 1.669 1.554 2.278 1.535 1.281 3.329 1.605 5.238 1.248 1.616-.303 3.036-1.021 4.068-2.364.966-1.256 1.334-2.698 1.372-4.261-.057-.495-.071-.999-.176-1.482-.522-2.411-1.932-4.003-4.374-4.56zm1.549 9.18c-.463 1.876-2.12 2.735-3.947 2.087-1.173-.417-1.937-1.276-2.42-2.377-.774-1.769-.932-3.61-.431-5.476.384-1.427 1.541-2.478 3.312-2.226 1.087.154 1.935.709 2.567 1.592.854 1.191 1.135 2.555 1.174 3.988v.293l.072.011c-.105.704-.157 1.42-.327 2.108z"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 8,
          svg: `
        <svg viewBox="0 0 128 128">
          <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
      ],
      n = [
        {
          id: 1,
          svg: `
        <svg viewBox="0 0 128 128">
          <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 5,
          svg: `
        <svg viewBox="0 0 128 128">
          <g fill="#181616"><path fill-rule="evenodd" clip-rule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 10,
          svg: `
        <svg viewBox="0 0 128 128">
          <path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
        {
          id: 11,
          svg: `
        <svg viewBox="0 0 128 128">
          <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path>
        </svg>
      `,
          href: "https://rick-and-morty-e.web.app/",
        },
      ];
    return x(
      C,
      {
        children: [
          a(
            "section",
            null,
            { class: "title-section text-center" },
            [
              a("h1", null, null, "Stack", 3, null),
              a("h3", null, null, "My tecnology stack", 3, null),
            ],
            3,
            null,
          ),
          a(
            "section",
            null,
            null,
            x(
              Ae,
              { stacks: e, title: "Front end", [m]: { title: m } },
              3,
              "R0_0",
            ),
            1,
            null,
          ),
          a(
            "section",
            null,
            null,
            x(
              Ae,
              { stacks: t, title: "Back end", [m]: { title: m } },
              3,
              "R0_1",
            ),
            1,
            null,
          ),
          a(
            "section",
            null,
            null,
            x(Ae, { stacks: n, title: "Tools", [m]: { title: m } }, 3, "R0_2"),
            1,
            null,
          ),
        ],
      },
      1,
      "R0_3",
    );
  },
  jc = D(I(Qc, "s_puLNVv3I7Kc")),
  Wc = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  Uc = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: jc, head: Wc },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  Jc = "/build/q-7849080f.webp 200w, /build/q-29b1c058.webp 400w",
  Zc = 400,
  Gc = 225,
  Kc = { srcSet: Jc, width: Zc, height: Gc };
function Yc(e, t, n, s) {
  return a(
    "img",
    { decoding: "async", loading: "lazy", ...e },
    Kc,
    void 0,
    3,
    t,
  );
}
const Xc = () =>
    x(
      C,
      {
        children: a(
          "section",
          null,
          { class: "inner-section" },
          a(
            "div",
            null,
            { class: "flex flex-col gap-12 items-center justify-center" },
            [
              a("h1", null, { class: "mb-6" }, "OPSS!", 3, null),
              a(
                "p",
                null,
                null,
                [
                  "Uh-oh! It looks like you've wandered into the cosmic void of cyberspace. Our binary aliens are throwing a rave just around the corner. Hurry back before they invite you to dance in zeros and ones! Alternatively, try our game at this",
                  " ",
                  x(
                    B,
                    {
                      children: "link",
                      href: "../button-game",
                      [m]: { href: m },
                    },
                    3,
                    "r9_0",
                  ),
                  ".",
                ],
                1,
                null,
              ),
              x(Yc, { alt: "Binary aliens", [m]: { alt: m } }, 3, "r9_1"),
              a(
                "img",
                null,
                {
                  decoding: "async",
                  height: "1200",
                  loading: "lazy",
                  srcSet: " /aliens-alien.gif",
                  width: "1200",
                },
                null,
                3,
                null,
              ),
            ],
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      "r9_2",
    ),
  e2 = D(I(Xc, "s_FMKqF5QZfNY")),
  t2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  n2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: e2, head: t2 },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  s2 = [],
  de = () => Bi,
  l2 = [
    ["/", [de, () => vc], "/", ["q-7a865d91.js", "q-b763e79a.js"]],
    [
      "404.html",
      [de, () => Sc],
      "/404.html",
      ["q-7a865d91.js", "q-ece8d6e0.js"],
    ],
    ["blog/", [de, () => Mc], "/blog/", ["q-7a865d91.js", "q-b48e1f71.js"]],
    [
      "button-game/",
      [de, () => Ic],
      "/button-game/",
      ["q-7a865d91.js", "q-4ec0fed3.js"],
    ],
    [
      "history/",
      [de, () => Pc],
      "/history/",
      ["q-7a865d91.js", "q-2364f243.js"],
    ],
    ["links/", [de, () => Oc], "/links/", ["q-7a865d91.js", "q-825ca909.js"]],
    [
      "projects/",
      [de, () => Hc],
      "/projects/",
      ["q-7a865d91.js", "q-c540d711.js"],
    ],
    ["stack/", [de, () => Uc], "/stack/", ["q-7a865d91.js", "q-1c20d5a6.js"]],
    ["test/", [de, () => n2], "/test/", ["q-7a865d91.js", "q-dc24f9e9.js"]],
  ],
  o2 = [],
  r2 = !0,
  G1 = "/",
  i2 = !0,
  g2 = {
    routes: l2,
    serverPlugins: s2,
    menus: o2,
    trailingSlash: r2,
    basePathname: G1,
    cacheModules: i2,
  };
export {
  C as F,
  f2 as Q,
  h2 as R,
  m2 as S,
  $2 as _,
  sr as a,
  zi as b,
  D as c,
  x as d,
  a as e,
  V as f,
  yo as g,
  P as h,
  I as i,
  d2 as j,
  s2 as k,
  G1 as l,
  o2 as m,
  i2 as n,
  g2 as o,
  l2 as r,
  u2 as s,
  r2 as t,
  p2 as u,
};
