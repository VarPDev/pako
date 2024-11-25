var mr = Object.defineProperty
var gr = (t, e, n) =>
  e in t
    ? mr(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (t[e] = n)
var E = (t, e, n) => (gr(t, typeof e != 'symbol' ? e + '' : e, n), n)
/**
 * @license
 * @builder.io/qwik 1.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */ const Ct = t => t && typeof t.nodeType == 'number',
  Qs = t => t.nodeType === 9,
  bt = t => t.nodeType === 1,
  Et = t => {
    const e = t.nodeType
    return e === 1 || e === 111
  },
  yr = t => {
    const e = t.nodeType
    return e === 1 || e === 111 || e === 3
  },
  it = t => t.nodeType === 111,
  xn = t => t.nodeType === 3,
  de = t => t.nodeType === 8,
  It = (t, ...e) => Tn(!1, t, ...e),
  vr = (t, ...e) => {
    throw Tn(!1, t, ...e)
  },
  _n = (t, ...e) => Tn(!0, t, ...e),
  ds = () => {},
  gt = () => {},
  Sr = t => t,
  Tn = (t, e, ...n) => {
    const s = e instanceof Error ? e : new Error(e)
    return (
      console.error('%cQWIK ERROR', '', s.message, ...Sr(n), s.stack),
      t &&
        setTimeout(() => {
          throw s
        }, 0),
      s
    )
  }
const Ue = t =>
    `Code(${t}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8 + t}`,
  Q = (t, ...e) => {
    const n = Ue(t, ...e)
    return _n(n, ...e)
  },
  wr = () => ({
    isServer: !0,
    importSymbol(t, e, n) {
      var r
      {
        const i = Yo(n),
          c = (r = globalThis.__qwik_reg_symbols) == null ? void 0 : r.get(i)
        if (c) return c
      }
      if (!e) throw Q(31, n)
      if (!t) throw Q(30, e, n)
      const s = br(t.ownerDocument, t, e).toString(),
        o = new URL(s)
      return (o.hash = ''), import(o.href).then(i => i[n])
    },
    raf: t =>
      new Promise(e => {
        requestAnimationFrame(() => {
          e(t())
        })
      }),
    nextTick: t =>
      new Promise(e => {
        setTimeout(() => {
          e(t())
        })
      }),
    chunkForSymbol: (t, e) => [t, e ?? '_'],
  }),
  br = (t, e, n) => {
    const s = t.baseURI,
      o = new URL(e.getAttribute('q:base') ?? s, s)
    return new URL(n, o)
  }
let kn = wr()
const Dl = t => (kn = t),
  qn = () => kn,
  Y = () => kn.isServer,
  He = t => {
    const e = Object.getPrototypeOf(t)
    return e === Object.prototype || e === null
  },
  Mt = t => !!t && typeof t == 'object',
  C = t => Array.isArray(t),
  yt = t => typeof t == 'string',
  Z = t => typeof t == 'function',
  L = t => t && typeof t.then == 'function',
  In = (t, e, n) => {
    try {
      const s = t()
      return L(s) ? s.then(e, n) : e(s)
    } catch (s) {
      return n(s)
    }
  },
  q = (t, e) => (L(t) ? t.then(e) : e(t)),
  An = t => (t.some(L) ? Promise.all(t) : t),
  Qt = t => (t.length > 0 ? Promise.all(t) : t),
  Ws = t => t != null,
  Er = t =>
    new Promise(e => {
      setTimeout(e, t)
    }),
  ut = [],
  F = {},
  pe = t =>
    typeof document < 'u' ? document : t.nodeType === 9 ? t : t.ownerDocument,
  xr = 'q:renderFn',
  j = 'q:slot',
  Us = 'q:s',
  Be = 'q:style',
  _r = 'q:sstyle',
  Hs = 'q:instance',
  Bs = (t, e) => t['qFuncs_' + e] || [],
  Tr = 'q:id',
  an = Symbol('proxy target'),
  Wt = Symbol('proxy flags'),
  et = Symbol('proxy manager'),
  N = Symbol('IMMUTABLE'),
  Ve = '_qc_',
  X = (t, e, n) => t.setAttribute(e, n),
  ot = (t, e) => t.getAttribute(e),
  Rn = t => t.replace(/([A-Z])/g, '-$1').toLowerCase(),
  kr = t => t.replace(/-./g, e => e[1].toUpperCase()),
  qr = (t, e, n, s) => {
    typeof CustomEvent == 'function' &&
      t &&
      t.dispatchEvent(
        new CustomEvent(e, { detail: n, bubbles: s, composed: s }),
      )
  },
  Nn = (t, e, n = 0) =>
    e.$proxyMap$.get(t) || (n !== 0 && Ke(t, n), he(t, e, void 0)),
  he = (t, e, n) => {
    sn(t), e.$proxyMap$.has(t)
    const s = e.$subsManager$.$createManager$(n),
      o = new Proxy(t, new Vs(e, s))
    return e.$proxyMap$.set(t, o), o
  },
  Ge = () => {
    const t = {}
    return Ke(t, 2), t
  },
  Ke = (t, e) => {
    Object.defineProperty(t, Wt, { value: e, enumerable: !1 })
  }
class Vs {
  constructor(e, n) {
    E(this, '$containerState$')
    E(this, '$manager$')
    ;(this.$containerState$ = e), (this.$manager$ = n)
  }
  deleteProperty(e, n) {
    if (2 & e[Wt]) throw Q(17)
    return (
      typeof n == 'string' &&
      delete e[n] &&
      (this.$manager$.$notifySubs$(C(e) ? void 0 : n), !0)
    )
  }
  get(e, n) {
    var l
    if (typeof n == 'symbol')
      return n === an ? e : n === et ? this.$manager$ : e[n]
    const s = e[Wt] ?? 0,
      o = st(),
      r = !!(1 & s),
      i = e['$$' + n]
    let c, $
    if (
      (o && (c = o.$subscriber$),
      !(2 & s) ||
        (n in e && !Ir((l = e[N]) == null ? void 0 : l[n])) ||
        (c = null),
      i ? (($ = i.value), (c = null)) : ($ = e[n]),
      c)
    ) {
      const a = C(e)
      this.$manager$.$addSub$(c, a ? void 0 : n)
    }
    return r ? Ar($, this.$containerState$) : $
  }
  set(e, n, s) {
    if (typeof n == 'symbol') return (e[n] = s), !0
    const o = e[Wt] ?? 0
    if (2 & o) throw Q(17)
    const r = 1 & o ? sn(s) : s
    if (C(e)) return (e[n] = r), this.$manager$.$notifySubs$(), !0
    const i = e[n]
    return (e[n] = r), i !== r && this.$manager$.$notifySubs$(n), !0
  }
  has(e, n) {
    if (n === an) return !0
    const s = Object.prototype.hasOwnProperty
    return !!s.call(e, n) || !(typeof n != 'string' || !s.call(e, '$$' + n))
  }
  ownKeys(e) {
    if (!(2 & (e[Wt] ?? 0))) {
      let s = null
      const o = st()
      o && (s = o.$subscriber$), s && this.$manager$.$addSub$(s)
    }
    return C(e)
      ? Reflect.ownKeys(e)
      : Reflect.ownKeys(e).map(s =>
          typeof s == 'string' && s.startsWith('$$') ? s.slice(2) : s,
        )
  }
  getOwnPropertyDescriptor(e, n) {
    return C(e) || typeof n == 'symbol'
      ? Object.getOwnPropertyDescriptor(e, n)
      : { enumerable: !0, configurable: !0 }
  }
}
const Ir = t => t === N || U(t),
  Ar = (t, e) => {
    if (Mt(t)) {
      if (Object.isFrozen(t)) return t
      const n = sn(t)
      if (n !== t || Go(n)) return t
      if (He(n) || C(n)) return e.$proxyMap$.get(n) || Nn(n, e, 1)
    }
    return t
  },
  Rr = /^(on|window:|document:)/,
  Gs = 'preventdefault:',
  Cn = t => t.endsWith('$') && Rr.test(t),
  Mn = t => {
    if (t.length === 0) return ut
    if (t.length === 1) {
      const n = t[0]
      return [[n[0], [n[1]]]]
    }
    const e = []
    for (let n = 0; n < t.length; n++) {
      const s = t[n][0]
      e.includes(s) || e.push(s)
    }
    return e.map(n => [n, t.filter(s => s[0] === n).map(s => s[1])])
  },
  Pn = (t, e, n, s) => {
    if ((e.endsWith('$'), (e = un(e.slice(0, -1))), n))
      if (C(n)) {
        const o = n
          .flat(1 / 0)
          .filter(r => r != null)
          .map(r => [e, hs(r, s)])
        t.push(...o)
      } else t.push([e, hs(n, s)])
    return e
  },
  ps = ['on', 'window:on', 'document:on'],
  Nr = ['on', 'on-window', 'on-document'],
  un = t => {
    let e = 'on'
    for (let n = 0; n < ps.length; n++) {
      const s = ps[n]
      if (t.startsWith(s)) {
        ;(e = Nr[n]), (t = t.slice(s.length))
        break
      }
    }
    return e + ':' + (t = t.startsWith('-') ? Rn(t.slice(1)) : t.toLowerCase())
  },
  hs = (t, e) => (t.$setContainer$(e), t),
  Cr = (t, e) => {
    const n = t.$element$.attributes,
      s = []
    for (let o = 0; o < n.length; o++) {
      const { name: r, value: i } = n.item(o)
      if (
        r.startsWith('on:') ||
        r.startsWith('on-window:') ||
        r.startsWith('on-document:')
      ) {
        const c = i.split(`
`)
        for (const $ of c) {
          const l = tn($, e)
          l.$capture$ && Wo(l, t), s.push([r, l])
        }
      }
    }
    return s
  },
  Mr = (t, e = 0) => {
    for (let n = 0; n < t.length; n++)
      (e = (e << 5) - e + t.charCodeAt(n)), (e |= 0)
    return Number(Math.abs(e)).toString(36)
  },
  Pr = (t, e) => `${Mr(t.$hash$)}-${e}`,
  Dr = t => '⭐️' + t,
  Ks = t => {
    const e = t.join('|')
    if (e.length > 0) return e
  },
  Pt = () => {
    const t = Jn(),
      e = V(t.$hostElement$, t.$renderCtx$.$static$.$containerState$),
      n = e.$seq$ || (e.$seq$ = []),
      s = t.$i$++
    return { val: n[s], set: o => (n[s] = o), i: s, iCtx: t, elCtx: e }
  },
  ct = t => Object.freeze({ id: Rn(t) }),
  $t = (t, e) => {
    const { val: n, set: s, elCtx: o } = Pt()
    if (n !== void 0) return
    ;(o.$contexts$ || (o.$contexts$ = new Map())).set(t.id, e), s(!0)
  },
  me = (t, e) => {
    const { val: n, set: s, iCtx: o, elCtx: r } = Pt()
    if (n !== void 0) return n
    const i = Js(t, r, o.$renderCtx$.$static$.$containerState$)
    if (typeof e == 'function') return s(W(void 0, e, i))
    if (i !== void 0) return s(i)
    if (e !== void 0) return s(e)
    throw Q(13, t.id)
  },
  Or = (t, e) => {
    var o
    let n = t,
      s = 1
    for (; n && !((o = n.hasAttribute) != null && o.call(n, 'q:container')); ) {
      for (; (n = n.previousSibling); )
        if (de(n)) {
          const r = n.__virtual
          if (r) {
            const i = r[Ve]
            if (n === r.open) return i ?? V(r, e)
            if (i != null && i.$parentCtx$) return i.$parentCtx$
            n = r
            continue
          }
          if (n.data === '/qv') s++
          else if (n.data.startsWith('qv ') && (s--, s === 0))
            return V(Se(n), e)
        }
      ;(n = t.parentElement), (t = n)
    }
    return null
  },
  Lr = (t, e) => (
    t.$parentCtx$ === void 0 && (t.$parentCtx$ = Or(t.$element$, e)),
    t.$parentCtx$
  ),
  Js = (t, e, n) => {
    var r
    const s = t.id
    if (!e) return
    let o = e
    for (; o; ) {
      const i = (r = o.$contexts$) == null ? void 0 : r.get(s)
      if (i) return i
      o = Lr(o, n)
    }
  },
  zr = ct('qk-error'),
  Dn = (t, e, n) => {
    const s = tt(e)
    if (Y()) throw t
    {
      const o = Js(zr, s, n.$static$.$containerState$)
      if (o === void 0) throw t
      o.error = t
    }
  },
  Fr = new Set([
    'animationIterationCount',
    'aspectRatio',
    'borderImageOutset',
    'borderImageSlice',
    'borderImageWidth',
    'boxFlex',
    'boxFlexGroup',
    'boxOrdinalGroup',
    'columnCount',
    'columns',
    'flex',
    'flexGrow',
    'flexShrink',
    'gridArea',
    'gridRow',
    'gridRowEnd',
    'gridRowStart',
    'gridColumn',
    'gridColumnEnd',
    'gridColumnStart',
    'fontWeight',
    'lineClamp',
    'lineHeight',
    'opacity',
    'order',
    'orphans',
    'scale',
    'tabSize',
    'widows',
    'zIndex',
    'zoom',
    'MozAnimationIterationCount',
    'MozBoxFlex',
    'msFlex',
    'msFlexPositive',
    'WebkitAnimationIterationCount',
    'WebkitBoxFlex',
    'WebkitBoxOrdinalGroup',
    'WebkitColumnCount',
    'WebkitColumns',
    'WebkitFlex',
    'WebkitFlexGrow',
    'WebkitFlexShrink',
    'WebkitLineClamp',
  ]),
  Qr = t => Fr.has(t),
  qe = (t, e, n) => {
    ;(e.$flags$ &= ~Jt), (e.$flags$ |= Gn), (e.$slots$ = []), (e.li.length = 0)
    const s = e.$element$,
      o = e.$componentQrl$,
      r = e.$props$,
      i = G(t.$static$.$locale$, s, void 0, 'qRender'),
      c = (i.$waitOn$ = []),
      $ = ge(t)
    ;($.$cmpCtx$ = e),
      ($.$slotCtx$ = void 0),
      (i.$subscriber$ = [0, s]),
      (i.$renderCtx$ = t),
      o.$setContainer$(t.$static$.$containerState$.$containerEl$)
    const l = o.getFn(i)
    return In(
      () => l(r),
      a =>
        q(
          Y()
            ? q(Qt(c), () => q(Ti(t.$static$.$containerState$, t), () => Qt(c)))
            : Qt(c),
          () => {
            var u
            if (e.$flags$ & Jt) {
              if (!(n && n > 100)) return qe(t, e, n ? n + 1 : 1)
              gt(
                `Infinite loop detected. Element: ${(u = e.$componentQrl$) == null ? void 0 : u.$symbol$}`,
              )
            }
            return { node: a, rCtx: $ }
          },
        ),
      a => {
        var u
        if (a === xo) {
          if (!(n && n > 100)) return q(Qt(c), () => qe(t, e, n ? n + 1 : 1))
          gt(
            `Infinite loop detected. Element: ${(u = e.$componentQrl$) == null ? void 0 : u.$symbol$}`,
          )
        }
        return Dn(a, s, t), { node: Fn, rCtx: $ }
      },
    )
  },
  Xs = (t, e) => ({
    $static$: {
      $doc$: t,
      $locale$: e.$serverData$.locale,
      $containerState$: e,
      $hostElements$: new Set(),
      $operations$: [],
      $postOperations$: [],
      $roots$: [],
      $addSlots$: [],
      $rmSlots$: [],
      $visited$: [],
    },
    $cmpCtx$: null,
    $slotCtx$: void 0,
  }),
  ge = t => ({
    $static$: t.$static$,
    $cmpCtx$: t.$cmpCtx$,
    $slotCtx$: t.$slotCtx$,
  }),
  On = (t, e) => {
    var n
    return (n = e == null ? void 0 : e.$scopeIds$) != null && n.length
      ? e.$scopeIds$.join(' ') + ' ' + Ie(t)
      : Ie(t)
  },
  Ie = t => {
    if (!t) return ''
    if (yt(t)) return t.trim()
    const e = []
    if (C(t))
      for (const n of t) {
        const s = Ie(n)
        s && e.push(s)
      }
    else for (const [n, s] of Object.entries(t)) s && e.push(n.trim())
    return e.join(' ')
  },
  Je = t => {
    if (t == null) return ''
    if (typeof t == 'object') {
      if (C(t)) throw Q(0, t, 'style')
      {
        const e = []
        for (const n in t)
          if (Object.prototype.hasOwnProperty.call(t, n)) {
            const s = t[n]
            s != null &&
              typeof s != 'function' &&
              (n.startsWith('--')
                ? e.push(n + ':' + s)
                : e.push(Rn(n) + ':' + Wr(n, s)))
          }
        return e.join(';')
      }
    }
    return String(t)
  },
  Wr = (t, e) => (typeof e != 'number' || e === 0 || Qr(t) ? e : e + 'px'),
  ie = t => Nt(t.$static$.$containerState$.$elementIndex$++),
  Ys = (t, e) => {
    const n = ie(t)
    e.$id$ = n
  },
  ce = t =>
    U(t) ? ce(t.value) : t == null || typeof t == 'boolean' ? '' : String(t)
function Zs(t) {
  return t.startsWith('aria-')
}
const js = (t, e) => !!e.key && (!Ot(t) || (!Z(t.type) && t.key != e.key)),
  H = 'dangerouslySetInnerHTML',
  Te = '<!--qkssr-f-->'
var Nl
class to {
  constructor(e) {
    E(this, 'nodeType')
    E(this, Nl, null)
    this.nodeType = e
  }
}
Nl = Ve
const Ur = () => new to(9),
  Ol = async (t, e) => {
    var y, g, f
    const n = e.containerTagName,
      s = Ae(1).$element$,
      o = To(s, e.base ?? '/')
    o.$serverData$.locale = (y = e.serverData) == null ? void 0 : y.locale
    const r = Ur(),
      i = Xs(r, o),
      c = e.beforeContent ?? [],
      $ = {
        $static$: {
          $contexts$: [],
          $headNodes$: n === 'html' ? c : [],
          $locale$: (g = e.serverData) == null ? void 0 : g.locale,
          $textNodes$: new Map(),
        },
        $projectedChildren$: void 0,
        $projectedCtxs$: void 0,
        $invocationContext$: void 0,
      },
      l = (f = e.serverData) == null ? void 0 : f.locale,
      a = e.containerAttributes,
      u = a['q:render']
    ;(a['q:container'] = 'paused'),
      (a['q:version'] = '1.10.0'),
      (a['q:render'] = (u ? u + '-' : '') + 'ssr'),
      (a['q:base'] = e.base || ''),
      (a['q:locale'] = l),
      (a['q:manifest-hash'] = e.manifestHash),
      (a['q:instance'] = Hr())
    const h = n === 'html' ? [t] : [c, t]
    n !== 'html' && (a.class = 'qc📦' + (a.class ? ' ' + a.class : ''))
    const d = (o.$serverData$ = { ...o.$serverData$, ...e.serverData })
    ;(d.containerAttributes = { ...d.containerAttributes, ...a }),
      (($.$invocationContext$ = G(l)).$renderCtx$ = i)
    const m = At(n, null, a, h, Jt | St, null)
    ;(o.$hostsRendering$ = new Set()),
      await Promise.resolve().then(() => Br(m, i, $, e.stream, o, e))
  },
  Hr = () => Math.random().toString(36).slice(2),
  Br = async (t, e, n, s, o, r) => {
    const i = r.beforeClose
    return (
      await zn(
        t,
        e,
        n,
        s,
        0,
        i
          ? c => {
              const $ = i(n.$static$.$contexts$, o, !1, n.$static$.$textNodes$)
              return nt($, e, n, c, 0, void 0)
            }
          : void 0,
      ),
      e
    )
  },
  Vr = async (t, e, n, s, o) => {
    s.write(Te)
    const r = t.props.children
    let i
    if (Z(r)) {
      const c = r({
        write($) {
          s.write($), s.write(Te)
        },
      })
      if (L(c)) return c
      i = c
    } else i = r
    for await (const c of i) await nt(c, e, n, s, o, void 0), s.write(Te)
  },
  eo = (t, e, n, s, o, r, i, c) => {
    var y
    const $ = t.props,
      l = $['q:renderFn']
    if (l) return (e.$componentQrl$ = l), Jr(s, o, r, e, t, i, c)
    let a = '<!--qv' + Kr($)
    const u = 'q:s' in $,
      h = t.key != null ? String(t.key) : null
    u &&
      ((y = s.$cmpCtx$) == null || y.$id$, (a += ' q:sref=' + s.$cmpCtx$.$id$)),
      h != null && (a += ' q:key=' + h),
      (a += '-->'),
      r.write(a)
    const d = t.props[H]
    if (d) return r.write(d), void r.write(rn)
    if (n) for (const g of n) Ln(g.type, g.props, r)
    const m = no(t.children, s, o, r, i)
    return q(m, () => {
      var f
      if (!u && !c) return void r.write(rn)
      let g
      if (u) {
        const v = (f = o.$projectedChildren$) == null ? void 0 : f[h]
        if (v) {
          const [S, p] = o.$projectedCtxs$,
            b = ge(S)
          ;(b.$slotCtx$ = e),
            (o.$projectedChildren$[h] = void 0),
            (g = nt(v, b, p, r, i))
        }
      }
      return (
        c && (g = q(g, () => c(r))),
        q(g, () => {
          r.write(rn)
        })
      )
    })
  },
  rn = '<!--/qv-->',
  Gr = t => {
    let e = ''
    for (const n in t) {
      if (n === H) continue
      const s = t[n]
      s != null && (e += ' ' + (s === '' ? n : n + '="' + s + '"'))
    }
    return e
  },
  Kr = t => {
    let e = ''
    for (const n in t) {
      if (n === 'children' || n === H) continue
      const s = t[n]
      s != null && (e += ' ' + (s === '' ? n : n + '=' + s))
    }
    return e
  },
  Ln = (t, e, n) => {
    if ((n.write('<' + t + Gr(e) + '>'), ro[t])) return
    const s = e[H]
    s != null && n.write(s), n.write(`</${t}>`)
  },
  Jr = (t, e, n, s, o, r, i) => (
    Yr(t, s, o.props.props),
    q(qe(t, s), c => {
      const $ = s.$element$,
        l = c.rCtx,
        a = G(e.$static$.$locale$, $, void 0)
      ;(a.$subscriber$ = [0, $]), (a.$renderCtx$ = l)
      const u = {
          $static$: e.$static$,
          $projectedChildren$: Xr(o.children, e),
          $projectedCtxs$: [t, e],
          $invocationContext$: a,
        },
        h = []
      if (s.$appendStyles$) {
        const g = 4 & r ? e.$static$.$headNodes$ : h
        for (const f of s.$appendStyles$)
          g.push(
            At(
              'style',
              { [Be]: f.styleId, [H]: f.content, hidden: '' },
              null,
              null,
              0,
              null,
            ),
          )
      }
      const d = ie(t),
        m = s.$scopeIds$ ? Ks(s.$scopeIds$) : void 0,
        y = dt(o.type, { [_r]: m, [Tr]: d, children: c.node }, 0, o.key)
      return (
        (s.$id$ = d),
        e.$static$.$contexts$.push(s),
        eo(y, s, h, l, u, n, r, g => {
          if (s.$flags$ & St) {
            const S = Ae(1),
              p = S.li
            p.push(...s.li), (s.$flags$ &= ~St), (S.$id$ = ie(t))
            const b = { type: 'placeholder', hidden: '', 'q:id': S.$id$ }
            e.$static$.$contexts$.push(S)
            const x = Mn(p)
            for (const k of x) {
              const w = io(k[0])
              ;(b[w] = rs(k[1], t.$static$.$containerState$, S)),
                fn(w, t.$static$.$containerState$)
            }
            Ln('script', b, g)
          }
          const f = u.$projectedChildren$
          let v
          if (f) {
            const S = Object.keys(f).map(k => {
                const w = f[k]
                if (w)
                  return At(
                    'q:template',
                    { [j]: k || !0, hidden: !0, 'aria-hidden': 'true' },
                    null,
                    w,
                    0,
                    null,
                  )
              }),
              [p, b] = u.$projectedCtxs$,
              x = ge(p)
            ;(x.$slotCtx$ = s), (v = nt(S, x, b, g, 0, void 0))
          }
          return i ? q(v, () => i(g)) : v
        })
      )
    })
  ),
  Xr = (t, e) => {
    const n = so(t, e)
    if (n === null) return
    const s = {}
    for (const o of n) {
      let r = ''
      Ot(o) && (r = o.props[j] || ''), (s[r] || (s[r] = [])).push(o)
    }
    return s
  },
  Ae = t => {
    const e = new to(t)
    return Ze(e)
  },
  zn = (t, e, n, s, o, r) => {
    var l
    const i = t.type,
      c = e.$cmpCtx$
    if (typeof i == 'string') {
      const a = t.key,
        u = t.props,
        h = t.immutableProps || F,
        d = Ae(1),
        m = d.$element$,
        y = i === 'head'
      let g = '<' + i,
        f = !1,
        v = !1,
        S = '',
        p = null
      const b = (w, _, I) => {
        if (w === 'ref') return void (_ !== void 0 && (Yn(_, m), (v = !0)))
        if (Cn(w)) return void Pn(d.li, w, _, void 0)
        if (
          (U(_) &&
            ((_ = ht(
              _,
              I ? [1, m, _, c.$element$, w] : [2, c.$element$, _, m, w],
            )),
            (f = !0)),
          w === H)
        )
          return void (p = _)
        let R
        w.startsWith(Gs) && fn(w.slice(15), e.$static$.$containerState$)
        const P = w === 'htmlFor' ? 'for' : w
        P === 'class' || P === 'className'
          ? (S = Ie(_))
          : P === 'style'
            ? (R = Je(_))
            : Zs(P) || P === 'draggable' || P === 'spellcheck'
              ? ((R = _ != null ? String(_) : null), (_ = R))
              : (R = _ === !1 || _ == null ? null : String(_)),
          R != null &&
            (P === 'value' && i === 'textarea'
              ? (p = Ut(R))
              : ni(P) || (g += ' ' + (_ === !0 ? P : P + '="' + Ut(R) + '"')))
      }
      for (const w in u) {
        let _ = !1,
          I
        w in h ? ((_ = !0), (I = h[w]), I === N && (I = u[w])) : (I = u[w]),
          b(w, I, _)
      }
      for (const w in h) {
        if (w in u) continue
        const _ = h[w]
        _ !== N && b(w, _, !0)
      }
      const x = d.li
      if (c) {
        if ((l = c.$scopeIds$) != null && l.length) {
          const w = c.$scopeIds$.join(' ')
          S = S ? `${w} ${S}` : w
        }
        c.$flags$ & St && (x.push(...c.li), (c.$flags$ &= ~St))
      }
      if (
        (y && (o |= 1),
        i in Zr && (o |= 16),
        i in jr && (o |= 8),
        S && (g += ' class="' + Ut(S) + '"'),
        x.length > 0)
      ) {
        const w = Mn(x),
          _ = !!(16 & o)
        for (const I of w) {
          const R = _ ? io(I[0]) : I[0]
          ;(g +=
            ' ' + R + '="' + rs(I[1], e.$static$.$containerState$, d) + '"'),
            fn(R, e.$static$.$containerState$)
        }
      }
      if (
        (a != null && (g += ' q:key="' + Ut(a) + '"'), v || f || x.length > 0)
      ) {
        if (v || f || si(x)) {
          const w = ie(e)
          ;(g += ' q:id="' + w + '"'), (d.$id$ = w)
        }
        n.$static$.$contexts$.push(d)
      }
      if ((1 & o && (g += ' q:head'), (g += '>'), s.write(g), i in ro)) return
      if (p != null) return s.write(String(p)), void s.write(`</${i}>`)
      i === 'html' ? (o |= 4) : (o &= -5), 2 & t.flags && (o |= 1024)
      const k = nt(t.children, e, n, s, o)
      return q(k, () => {
        if (y) {
          for (const w of n.$static$.$headNodes$) Ln(w.type, w.props, s)
          n.$static$.$headNodes$.length = 0
        }
        if (r)
          return q(r(s), () => {
            s.write(`</${i}>`)
          })
        s.write(`</${i}>`)
      })
    }
    if (i === pt) {
      const a = Ae(111)
      return (
        e.$slotCtx$
          ? ((a.$parentCtx$ = e.$slotCtx$), (a.$realParentCtx$ = e.$cmpCtx$))
          : (a.$parentCtx$ = e.$cmpCtx$),
        c && c.$flags$ & Kn && oi(c, a),
        eo(t, a, void 0, e, n, s, o, r)
      )
    }
    if (i === co) return void s.write(t.props.data)
    if (i === Qn) return Vr(t, e, n, s, o)
    const $ = W(n.$invocationContext$, i, t.props, t.key, t.flags, t.dev)
    return js($, t)
      ? zn(dt(pt, { children: $ }, 0, t.key), e, n, s, o, r)
      : nt($, e, n, s, o, r)
  },
  nt = (t, e, n, s, o, r) => {
    var i
    if (t != null && typeof t != 'boolean') {
      if (!yt(t) && typeof t != 'number') {
        if (Ot(t)) return zn(t, e, n, s, o, r)
        if (C(t)) return no(t, e, n, s, o)
        if (U(t)) {
          const c = 8 & o,
            $ = (i = e.$cmpCtx$) == null ? void 0 : i.$element$
          let l
          if ($) {
            if (!c) {
              const a = ie(e)
              if (
                ((l = ht(
                  t,
                  1024 & o ? [3, '#' + a, t, '#' + a] : [4, $, t, '#' + a],
                )),
                yt(l))
              ) {
                const u = ce(l)
                n.$static$.$textNodes$.set(u, a)
              }
              return (
                s.write(`<!--t=${a}-->`),
                nt(l, e, n, s, o, r),
                void s.write('<!---->')
              )
            }
            l = W(n.$invocationContext$, () => t.value)
          }
          return void s.write(Ut(ce(l)))
        }
        return L(t)
          ? (s.write(Te), t.then(c => nt(c, e, n, s, o, r)))
          : void gt()
      }
      s.write(Ut(String(t)))
    }
  },
  no = (t, e, n, s, o) => {
    if (t == null) return
    if (!C(t)) return nt(t, e, n, s, o)
    const r = t.length
    if (r === 1) return nt(t[0], e, n, s, o)
    if (r === 0) return
    let i = 0
    const c = []
    return t.reduce(
      ($, l, a) => {
        const u = []
        c.push(u)
        const h = nt(
          l,
          e,
          n,
          $
            ? {
                write(d) {
                  i === a ? s.write(d) : u.push(d)
                },
              }
            : s,
          o,
        )
        if ($ || L(h)) {
          const d = () => {
            i++, c.length > i && c[i].forEach(m => s.write(m))
          }
          return L(h)
            ? $
              ? Promise.all([h, $]).then(d)
              : h.then(d)
            : $.then(d)
        }
        i++
      },
      void 0,
    )
  },
  so = (t, e) => {
    if (t == null) return null
    const n = oo(t, e),
      s = C(n) ? n : [n]
    return s.length === 0 ? null : s
  },
  oo = (t, e) => {
    if (t == null) return null
    if (C(t)) return t.flatMap(n => oo(n, e))
    if (Ot(t) && Z(t.type) && t.type !== co && t.type !== Qn && t.type !== pt) {
      const n = W(e.$invocationContext$, t.type, t.props, t.key, t.flags)
      return so(n, e)
    }
    return t
  },
  Yr = (t, e, n) => {
    const s = Object.keys(n),
      o = Ge()
    if (((e.$props$ = he(o, t.$static$.$containerState$)), s.length === 0))
      return
    const r = (o[N] = n[N] ?? F)
    for (const i of s)
      i !== 'children' &&
        i !== j &&
        (U(r[i]) ? (o['$$' + i] = r[i]) : (o[i] = n[i]))
  },
  Zr = { head: !0, style: !0, script: !0, link: !0, meta: !0 },
  jr = { title: !0, style: !0, script: !0, noframes: !0, textarea: !0 },
  ro = {
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
  ti = /[&<>'"]/g,
  fn = (t, e) => {
    e.$events$.add(qo(t))
  },
  Ut = t =>
    t.replace(ti, e => {
      switch (e) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '"':
          return '&quot;'
        case "'":
          return '&#39;'
        default:
          return ''
      }
    }),
  ei = /[>/="'\u0009\u000a\u000c\u0020]/,
  ni = t => ei.test(t),
  si = t => t.some(e => e[1].$captureRef$ && e[1].$captureRef$.length > 0),
  oi = (t, e) => {
    const n = t.$dynamicSlots$ || (t.$dynamicSlots$ = [])
    n.includes(e) || n.push(e)
  },
  io = t => (t === 'on:qvisible' ? 'on-document:qinit' : t),
  Ll = (t, e, n) => new hn(t, e, n),
  ri = t => {
    const e = t.$funcStr$
    let n = ''
    for (let s = 0; s < t.$args$.length; s++) n += `p${s},`
    return `(${n})=>(${e})`
  },
  At = (t, e, n, s, o, r) => {
    const i = r == null ? null : String(r)
    return new Dt(t, e || F, n, s, o, i)
  },
  ii = (t, e, n, s, o, r) => {
    let i = null
    return (
      e && 'children' in e && ((i = e.children), delete e.children),
      At(t, e, n, i, s, o)
    )
  },
  dt = (t, e, n, s, o) => {
    const r = s == null ? null : String(s),
      i = e ?? {}
    if (typeof t == 'string' && N in i) {
      const $ = i[N]
      delete i[N]
      const l = i.children
      delete i.children
      for (const [a, u] of Object.entries($))
        u !== N && (delete i[a], (i[a] = u))
      return At(t, null, i, l, n, s)
    }
    const c = new Dt(t, i, null, i.children, n, r)
    return typeof t == 'string' && e && delete e.children, c
  },
  ms = (t, e, n) => {
    const s = n == null ? null : String(n),
      o = se(() => {
        const i = e.children
        return typeof t == 'string' && delete e.children, i
      })
    return (
      yt(t) &&
        'className' in e &&
        ((e.class = e.className), delete e.className),
      new Dt(t, e, null, o, 0, s)
    )
  }
class Dt {
  constructor(e, n, s, o, r, i = null) {
    E(this, 'type')
    E(this, 'props')
    E(this, 'immutableProps')
    E(this, 'children')
    E(this, 'flags')
    E(this, 'key')
    E(this, 'dev')
    ;(this.type = e),
      (this.props = n),
      (this.immutableProps = s),
      (this.children = o),
      (this.flags = r),
      (this.key = i)
  }
}
const pt = t => t.children,
  ci = (t, e) => new Dt(pt, F, null, t.children, 2, e),
  Ot = t => t instanceof Dt,
  Re = t => t.children,
  Fn = Symbol('skip render'),
  co = () => null,
  zl = (t, e) => ms(ci, { children: ms(Qn, t) }, e),
  Qn = () => null,
  Wn = (t, e, n) => {
    const s = !(e.$flags$ & Gn),
      o = e.$element$,
      r = t.$static$.$containerState$
    return (
      r.$hostsStaging$.delete(e),
      r.$subsManager$.$clearSub$(o),
      q(qe(t, e), i => {
        const c = t.$static$,
          $ = i.rCtx,
          l = G(t.$static$.$locale$, o)
        if (
          (c.$hostElements$.add(o),
          (l.$subscriber$ = [0, o]),
          (l.$renderCtx$ = $),
          s && e.$appendStyles$)
        )
          for (const u of e.$appendStyles$) gc(c, u)
        const a = vt(i.node, l)
        return q(a, u => {
          const h = $i(o, u),
            d = Un(e)
          return q(De($, d, h, n), () => {
            e.$vdom$ = h
          })
        })
      })
    )
  },
  Un = t => (t.$vdom$ || (t.$vdom$ = Oe(t.$element$)), t.$vdom$)
class ft {
  constructor(e, n, s, o, r, i) {
    E(this, '$type$')
    E(this, '$props$')
    E(this, '$immutableProps$')
    E(this, '$children$')
    E(this, '$flags$')
    E(this, '$key$')
    E(this, '$elm$', null)
    E(this, '$text$', '')
    E(this, '$signal$', null)
    E(this, '$id$')
    E(this, '$dev$')
    ;(this.$type$ = e),
      (this.$props$ = n),
      (this.$immutableProps$ = s),
      (this.$children$ = o),
      (this.$flags$ = r),
      (this.$key$ = i),
      (this.$id$ = e + (i ? ':' + i : ''))
  }
}
const $o = (t, e) => {
    const {
      key: n,
      type: s,
      props: o,
      children: r,
      flags: i,
      immutableProps: c,
    } = t
    let $ = ''
    if (yt(s)) $ = s
    else {
      if (s !== pt) {
        if (Z(s)) {
          const a = W(e, s, o, n, i, t.dev)
          return js(a, t) ? $o(dt(pt, { children: a }, 0, n), e) : vt(a, e)
        }
        throw Q(25, s)
      }
      $ = Xt
    }
    let l = ut
    return r != null
      ? q(
          vt(r, e),
          a => (a !== void 0 && (l = C(a) ? a : [a]), new ft($, o, c, l, i, n)),
        )
      : new ft($, o, c, l, i, n)
  },
  $i = (t, e) => {
    const n = e === void 0 ? ut : C(e) ? e : [e],
      s = new ft(':virtual', {}, null, n, 0, null)
    return (s.$elm$ = t), s
  },
  vt = (t, e) => {
    if (t != null && typeof t != 'boolean') {
      if (lo(t)) {
        const n = new ft('#text', F, null, ut, 0, null)
        return (n.$text$ = String(t)), n
      }
      if (Ot(t)) return $o(t, e)
      if (U(t)) {
        const n = new ft('#signal', F, null, ut, 0, null)
        return (n.$signal$ = t), n
      }
      if (C(t)) {
        const n = An(t.flatMap(s => vt(s, e)))
        return q(n, s => s.flat(100).filter(Ws))
      }
      return L(t)
        ? t.then(n => vt(n, e))
        : t === Fn
          ? new ft(':skipRender', F, null, ut, 0, null)
          : void gt()
    }
  },
  lo = t => yt(t) || typeof t == 'number',
  ao = t => {
    ot(t, 'q:container') === 'paused' && (ui(t), mi(t))
  },
  li = t => {
    const e = pe(t),
      n = pi(t === e.documentElement ? e.body : t, 'type')
    if (n) return JSON.parse(di(n.firstChild.data) || '{}')
  },
  ai = (t, e) => {
    const n = JSON.parse(t)
    if (typeof n != 'object') return null
    const { _objs: s, _entry: o } = n
    if (s === void 0 || o === void 0) return null
    let r = {},
      i = {}
    if (Ct(e) && Et(e)) {
      const l = Xn(e)
      l && ((i = Zt(l)), (r = l.ownerDocument))
    }
    const c = Ho(i, r)
    for (let l = 0; l < s.length; l++) {
      const a = s[l]
      yt(a) && (s[l] = a === en ? void 0 : c.prepare(a))
    }
    const $ = l => s[rt(l)]
    for (const l of s) uo(l, $, c)
    return $(o)
  },
  ui = t => {
    if (!Zi(t)) return void gt()
    const e = t._qwikjson_ ?? li(t)
    if (((t._qwikjson_ = null), !e)) return void gt()
    const n = pe(t),
      s = t.getAttribute(Hs),
      o = Bs(n, s),
      r = Zt(t),
      i = new Map(),
      c = new Map()
    let $ = null,
      l = 0
    const a = n.createTreeWalker(t, ko)
    for (; ($ = a.nextNode()); ) {
      const f = $.data
      if (l === 0) {
        if (f.startsWith('qv ')) {
          const v = gi(f)
          v >= 0 && i.set(v, $)
        } else if (f.startsWith('t=')) {
          const v = f.slice(2),
            S = rt(v),
            p = hi($)
          i.set(S, p), c.set(S, p.data)
        }
      }
      f === 'cq' ? l++ : f === '/cq' && l--
    }
    const u = t.getElementsByClassName('qc📦').length !== 0
    t.querySelectorAll('[q\\:id]').forEach(f => {
      if (u && f.closest('[q\\:container]') !== t) return
      const v = ot(f, 'q:id'),
        S = rt(v)
      i.set(S, f)
    })
    const h = Ho(r, n),
      d = new Map(),
      m = new Set(),
      y = f => (
        typeof f == 'string' && f.length > 0, d.has(f) ? d.get(f) : g(f)
      ),
      g = f => {
        if (f.startsWith('#')) {
          const x = f.slice(1),
            k = rt(x)
          i.has(k)
          const w = i.get(k)
          if (de(w)) {
            if (!w.isConnected) return void d.set(f, void 0)
            const _ = Se(w)
            return d.set(f, _), V(_, r), _
          }
          return bt(w) ? (d.set(f, w), V(w, r), w) : (d.set(f, w), w)
        }
        if (f.startsWith('@')) {
          const x = f.slice(1),
            k = rt(x)
          return o[k]
        }
        if (f.startsWith('*')) {
          const x = f.slice(1),
            k = rt(x)
          i.has(k)
          const w = c.get(k)
          return d.set(f, w), w
        }
        const v = rt(f),
          S = e.objs
        S.length > v
        let p = S[v]
        yt(p) && (p = p === en ? void 0 : h.prepare(p))
        let b = p
        for (let x = f.length - 1; x >= 0; x--) {
          const k = _$[f[x]]
          if (!k) break
          b = k(b, r)
        }
        return (
          d.set(f, b),
          lo(p) ||
            m.has(v) ||
            (m.add(v), fi(p, v, e.subs, y, r, h), uo(p, y, h)),
          b
        )
      }
    ;(r.$elementIndex$ = 1e5),
      (r.$pauseCtx$ = { getObject: y, meta: e.ctx, refs: e.refs }),
      X(t, 'q:container', 'resumed'),
      qr(t, 'qresume', void 0, !0)
  },
  fi = (t, e, n, s, o, r) => {
    const i = n[e]
    if (i) {
      const c = []
      let $ = 0
      for (const l of i)
        if (l.startsWith('_')) $ = parseInt(l.slice(1), 10)
        else {
          const a = A$(l, s)
          a && c.push(a)
        }
      if (($ > 0 && Ke(t, $), !r.subs(t, c))) {
        const l = o.$proxyMap$.get(t)
        l ? B(l).$addSubs$(c) : he(t, o, c)
      }
    }
  },
  uo = (t, e, n) => {
    if (!n.fill(t, e) && t && typeof t == 'object') {
      if (C(t)) for (let s = 0; s < t.length; s++) t[s] = e(t[s])
      else if (He(t)) for (const s in t) t[s] = e(t[s])
    }
  },
  di = t => t.replace(/\\x3C(\/?script)/gi, '<$1'),
  pi = (t, e) => {
    let n = t.lastElementChild
    for (; n; ) {
      if (n.tagName === 'SCRIPT' && ot(n, e) === 'qwik/json') return n
      n = n.previousElementSibling
    }
  },
  hi = t => {
    const e = t.nextSibling
    if (xn(e)) return e
    {
      const n = t.ownerDocument.createTextNode('')
      return t.parentElement.insertBefore(n, t), n
    }
  },
  mi = t => {
    t.qwik = { pause: () => Cc(t), state: Zt(t) }
  },
  gi = t => {
    const e = t.indexOf('q:id=')
    return e > 0 ? rt(t.slice(e + 5)) : -1
  },
  Xe = () => {
    const t = Hi()
    let e = t.$qrl$
    if (e) e.$captureRef$
    else {
      const n = t.$element$,
        s = Xn(n)
      ;(e = tn(decodeURIComponent(String(t.$url$)), s)), ao(s)
      const o = V(n, Zt(s))
      Wo(e, o)
    }
    return e.$captureRef$
  },
  yi = (t, e) => {
    try {
      const n = e[0],
        s = t.$static$
      switch (n) {
        case 1:
        case 2: {
          let o, r
          n === 1 ? ((o = e[1]), (r = e[3])) : ((o = e[3]), (r = e[1]))
          const i = tt(o)
          if (i == null) return
          const c = e[4],
            $ = o.namespaceURI === ve
          s.$containerState$.$subsManager$.$clearSignal$(e)
          let l = ht(e[2], e.slice(0, -1))
          c === 'class' ? (l = On(l, tt(r))) : c === 'style' && (l = Je(l))
          const a = Un(i)
          return c in a.$props$ && a.$props$[c] === l
            ? void 0
            : ((a.$props$[c] = l), jn(s, o, c, l, $))
        }
        case 3:
        case 4: {
          const o = e[3]
          if (!s.$visited$.includes(o)) {
            s.$containerState$.$subsManager$.$clearSignal$(e)
            const r = void 0
            let i = ht(e[2], e.slice(0, -1))
            const c = C$()
            Array.isArray(i) && (i = new Dt(pt, {}, null, i, 0, null))
            let $ = vt(i, r)
            if (L($)) It('Rendering promises in JSX signals is not supported')
            else {
              $ === void 0 && ($ = vt('', r))
              const l = Ao(o),
                a = vi(e[1])
              if (
                ((t.$cmpCtx$ = V(a, t.$static$.$containerState$)),
                l.$type$ == $.$type$ && l.$key$ == $.$key$ && l.$id$ == $.$id$)
              )
                zt(t, l, $, 0)
              else {
                const u = [],
                  h = l.$elm$,
                  d = kt(t, $, 0, u)
                u.length &&
                  It('Rendering promises in JSX signals is not supported'),
                  (c[3] = d),
                  Bt(t.$static$, o.parentElement, d, h),
                  h && es(s, h)
              }
            }
          }
        }
      }
    } catch {}
  }
function vi(t) {
  for (; t; ) {
    if (Et(t)) return t
    t = t.parentElement
  }
  throw new Error('Not found')
}
const Si = (t, e) => {
    if (t[0] === 0) {
      const n = t[1]
      Vn(n) ? Hn(n, e) : wi(n, e)
    } else bi(t, e)
  },
  wi = (t, e) => {
    const n = Y()
    n || ao(e.$containerEl$)
    const s = V(t, e)
    if ((s.$componentQrl$, !(s.$flags$ & Jt)))
      if (((s.$flags$ |= Jt), e.$hostsRendering$ !== void 0))
        e.$hostsStaging$.add(s)
      else {
        if (n) return void gt()
        e.$hostsNext$.add(s), Bn(e)
      }
  },
  bi = (t, e) => {
    const n = e.$hostsRendering$ !== void 0
    e.$opsNext$.add(t), n || Bn(e)
  },
  Hn = (t, e) => {
    t.$flags$ & Rt ||
      ((t.$flags$ |= Rt),
      e.$hostsRendering$ !== void 0
        ? e.$taskStaging$.add(t)
        : (e.$taskNext$.add(t), Bn(e)))
  },
  Bn = t => (
    t.$renderPromise$ === void 0 &&
      (t.$renderPromise$ = qn().nextTick(() => fo(t))),
    t.$renderPromise$
  ),
  Ei = () => {
    const [t] = Xe()
    Hn(t, Zt(Xn(t.$el$)))
  },
  fo = async t => {
    const e = t.$containerEl$,
      n = pe(e)
    try {
      const s = Xs(n, t),
        o = s.$static$,
        r = (t.$hostsRendering$ = new Set(t.$hostsNext$))
      t.$hostsNext$.clear(),
        await _i(t, s),
        t.$hostsStaging$.forEach($ => {
          r.add($)
        }),
        t.$hostsStaging$.clear()
      const i = Array.from(t.$opsNext$)
      t.$opsNext$.clear()
      const c = Array.from(r)
      qi(c),
        !t.$styleMoved$ &&
          c.length > 0 &&
          ((t.$styleMoved$ = !0),
          (e === n.documentElement ? n.body : e)
            .querySelectorAll('style[q\\:style]')
            .forEach($ => {
              t.$styleIds$.add(ot($, Be)), Lo(o, n.head, $)
            }))
      for (const $ of c) {
        const l = $.$element$
        if (!o.$hostElements$.has(l) && $.$componentQrl$) {
          l.isConnected, o.$roots$.push($)
          try {
            await Wn(s, $, xi(l.parentElement))
          } catch (a) {
            It(a)
          }
        }
      }
      return (
        i.forEach($ => {
          yi(s, $)
        }),
        o.$operations$.push(...o.$postOperations$),
        o.$operations$.length === 0
          ? (ks(o), void (await gs(t, s)))
          : (await ac(o), ks(o), gs(t, s))
      )
    } catch (s) {
      It(s)
    }
  },
  xi = t => {
    let e = 0
    return (
      t &&
        (t.namespaceURI === ve && (e |= J), t.tagName === 'HEAD' && (e |= Me)),
      e
    )
  },
  gs = async (t, e) => {
    const n = e.$static$.$hostElements$
    await ki(t, e, (s, o) => !!(s.$flags$ & mo) && (!o || n.has(s.$el$))),
      t.$hostsStaging$.forEach(s => {
        t.$hostsNext$.add(s)
      }),
      t.$hostsStaging$.clear(),
      (t.$hostsRendering$ = void 0),
      (t.$renderPromise$ = void 0),
      t.$hostsNext$.size + t.$taskNext$.size + t.$opsNext$.size > 0 &&
        (t.$renderPromise$ = fo(t))
  },
  dn = t => !!(t.$flags$ & go),
  ys = t => !!(t.$flags$ & yo),
  _i = async (t, e) => {
    const n = t.$containerEl$,
      s = [],
      o = []
    t.$taskNext$.forEach(r => {
      dn(r) &&
        (o.push(q(r.$qrl$.$resolveLazy$(n), () => r)), t.$taskNext$.delete(r)),
        ys(r) &&
          (s.push(q(r.$qrl$.$resolveLazy$(n), () => r)), t.$taskNext$.delete(r))
    })
    do
      if (
        (t.$taskStaging$.forEach(r => {
          dn(r)
            ? o.push(q(r.$qrl$.$resolveLazy$(n), () => r))
            : ys(r)
              ? s.push(q(r.$qrl$.$resolveLazy$(n), () => r))
              : t.$taskNext$.add(r)
        }),
        t.$taskStaging$.clear(),
        o.length > 0)
      ) {
        const r = await Promise.all(o)
        Ne(r), await Promise.all(r.map(i => Ce(i, t, e))), (o.length = 0)
      }
    while (t.$taskStaging$.size > 0)
    if (s.length > 0) {
      const r = await Promise.all(s)
      Ne(r)
      for (const i of r) Ce(i, t, e)
    }
  },
  Ti = (t, e) => {
    const n = t.$containerEl$,
      s = t.$taskStaging$
    if (!s.size) return
    const o = []
    let r = 20
    const i = () => {
      if (
        (s.forEach(c => {
          dn(c) && o.push(q(c.$qrl$.$resolveLazy$(n), () => c))
        }),
        s.clear(),
        o.length > 0)
      )
        return Promise.all(o).then(async c => {
          if (
            (Ne(c),
            await Promise.all(c.map($ => Ce($, t, e))),
            (o.length = 0),
            --r && s.size > 0)
          )
            return i()
          r ||
            gt(`Infinite task loop detected. Tasks:
${Array.from(s).map($ => `  ${$.$qrl$.$symbol$}`).join(`
`)}`)
        })
    }
    return i()
  },
  ki = async (t, e, n) => {
    const s = [],
      o = t.$containerEl$
    t.$taskNext$.forEach(r => {
      n(r, !1) &&
        (r.$el$.isConnected && s.push(q(r.$qrl$.$resolveLazy$(o), () => r)),
        t.$taskNext$.delete(r))
    })
    do
      if (
        (t.$taskStaging$.forEach(r => {
          r.$el$.isConnected &&
            (n(r, !0)
              ? s.push(q(r.$qrl$.$resolveLazy$(o), () => r))
              : t.$taskNext$.add(r))
        }),
        t.$taskStaging$.clear(),
        s.length > 0)
      ) {
        const r = await Promise.all(s)
        Ne(r)
        for (const i of r) Ce(i, t, e)
        s.length = 0
      }
    while (t.$taskStaging$.size > 0)
  },
  qi = t => {
    t.sort((e, n) =>
      2 & e.$element$.compareDocumentPosition(ze(n.$element$)) ? 1 : -1,
    )
  },
  Ne = t => {
    const e = Y()
    t.sort((n, s) =>
      e || n.$el$ === s.$el$
        ? n.$index$ < s.$index$
          ? -1
          : 1
        : 2 & n.$el$.compareDocumentPosition(ze(s.$el$))
          ? 1
          : -1,
    )
  },
  Ii = (t, e) => {
    ho(po(t, void 0), e)
  },
  vs = (t, e) => {
    ho(po(t, 'document'), e)
  },
  po = (t, e) => {
    const n = e !== void 0 ? e + ':' : ''
    return Array.isArray(t) ? t.map(s => `${n}on-${s}`) : `${n}on-${t}`
  },
  ho = (t, e) => {
    if (e) {
      const n = Jn(),
        s = V(n.$hostElement$, n.$renderCtx$.$static$.$containerState$)
      typeof t == 'string'
        ? s.li.push([un(t), e])
        : s.li.push(...t.map(o => [un(o), e])),
        (s.$flags$ |= St)
    }
  },
  Ai = t => {
    const e = Bi(),
      n = Z(t) && !$s(t) ? W(void 0, t) : t
    return Ji(n, e, 0)
  },
  Ri = t => {
    const { val: e, set: n } = Pt()
    return e ?? n((t = Z(t) && !$s(t) ? t() : t))
  },
  cn = t => Ri(() => Ai(t)),
  mo = 1,
  go = 2,
  yo = 4,
  Rt = 16,
  Ni = (t, e) => {
    const { val: n, set: s, iCtx: o, i: r, elCtx: i } = Pt()
    if (n) return
    const c = o.$renderCtx$.$static$.$containerState$,
      $ = new Ye(Rt | go, r, i.$element$, t, void 0)
    s(!0),
      t.$resolveLazy$(c.$containerEl$),
      i.$tasks$ || (i.$tasks$ = []),
      i.$tasks$.push($),
      Gi(o, () => So($, c, o.$renderCtx$)),
      Y() && pn($, e == null ? void 0 : e.eagerness)
  },
  Fl = (t, e) => {
    const { val: n, set: s, i: o, iCtx: r, elCtx: i } = Pt(),
      c = (e == null ? void 0 : e.strategy) ?? 'intersection-observer'
    if (n) return void (Y() && pn(n, c))
    const $ = new Ye(mo, o, i.$element$, t, void 0),
      l = r.$renderCtx$.$static$.$containerState$
    i.$tasks$ || (i.$tasks$ = []),
      i.$tasks$.push($),
      s($),
      pn($, c),
      Y() || (t.$resolveLazy$(l.$containerEl$), Hn($, l))
  },
  vo = t => !!(t.$flags$ & yo),
  Ci = t => !!(8 & t.$flags$),
  Ce = async (t, e, n) => (
    t.$flags$ & Rt, vo(t) ? Mi(t, e, n) : Ci(t) ? Pi(t, e, n) : So(t, e, n)
  ),
  Mi = (t, e, n, s) => {
    ;(t.$flags$ &= ~Rt), $e(t)
    const o = G(n.$static$.$locale$, t.$el$, void 0, 'qTask'),
      { $subsManager$: r } = e
    o.$renderCtx$ = n
    const i = t.$qrl$.getFn(o, () => {
        r.$clearSub$(t)
      }),
      c = [],
      $ = t.$state$,
      l = sn($),
      a = {
        track: (f, v) => {
          if (Z(f)) {
            const p = G()
            return (p.$renderCtx$ = n), (p.$subscriber$ = [0, t]), W(p, f)
          }
          const S = B(f)
          return (
            S ? S.$addSub$([0, t], v) : _n(Ue(26), f),
            v ? f[v] : U(f) ? f.value : f
          )
        },
        cleanup(f) {
          c.push(f)
        },
        cache(f) {
          let v = 0
          ;(v = f === 'immutable' ? 1 / 0 : f), ($._cache = v)
        },
        previous: l._resolved,
      }
    let u,
      h,
      d = !1
    const m = (f, v) =>
      !d &&
      ((d = !0),
      f
        ? ((d = !0),
          ($.loading = !1),
          ($._state = 'resolved'),
          ($._resolved = v),
          ($._error = void 0),
          u(v))
        : ((d = !0),
          ($.loading = !1),
          ($._state = 'rejected'),
          ($._error = v),
          h(v)),
      !0)
    W(o, () => {
      ;($._state = 'pending'),
        ($.loading = !Y()),
        ($.value = new Promise((f, v) => {
          ;(u = f), (h = v)
        }))
    }),
      (t.$destroy$ = nn(() => {
        ;(d = !0), c.forEach(f => f())
      }))
    const y = In(
        () => q(s, () => i(a)),
        f => {
          m(!0, f)
        },
        f => {
          m(!1, f)
        },
      ),
      g = l._timeout
    return g > 0
      ? Promise.race([
          y,
          Er(g).then(() => {
            m(!1, new Error('timeout')) && $e(t)
          }),
        ])
      : y
  },
  So = (t, e, n) => {
    ;(t.$flags$ &= ~Rt), $e(t)
    const s = t.$el$,
      o = G(n.$static$.$locale$, s, void 0, 'qTask')
    o.$renderCtx$ = n
    const { $subsManager$: r } = e,
      i = t.$qrl$.getFn(o, () => {
        r.$clearSub$(t)
      }),
      c = []
    t.$destroy$ = nn(() => {
      c.forEach(l => l())
    })
    const $ = {
      track: (l, a) => {
        if (Z(l)) {
          const h = G()
          return (h.$subscriber$ = [0, t]), W(h, l)
        }
        const u = B(l)
        return (
          u ? u.$addSub$([0, t], a) : _n(Ue(26), l),
          a ? l[a] : U(l) ? l.value : l
        )
      },
      cleanup(l) {
        c.push(l)
      },
    }
    return In(
      () => i($),
      l => {
        Z(l) && c.push(l)
      },
      l => {
        Dn(l, s, n)
      },
    )
  },
  Pi = (t, e, n) => {
    t.$state$, (t.$flags$ &= ~Rt), $e(t)
    const s = t.$el$,
      o = G(n.$static$.$locale$, s, void 0, 'qComputed')
    ;(o.$subscriber$ = [0, t]), (o.$renderCtx$ = n)
    const { $subsManager$: r } = e,
      i = t.$qrl$.getFn(o, () => {
        r.$clearSub$(t)
      }),
      c = l => {
        se(() => {
          const a = t.$state$
          ;(a[oe] &= ~Eo), (a.untrackedValue = l), a[et].$notifySubs$()
        })
      },
      $ = l => {
        Dn(l, s, n)
      }
    try {
      return q(t.$qrl$.$resolveLazy$(e.$containerEl$), () => {
        const l = i()
        if (L(l)) {
          const a =
              'useComputed$: Async functions in computed tasks are deprecated and will stop working in v2. Use useTask$ or useResource$ instead.',
            u = new Error(a).stack
          return u && u.replace(/^Error:\s*/, ''), ds(), l.then(c, $)
        }
        c(l)
      })
    } catch (l) {
      $(l)
    }
  },
  $e = t => {
    const e = t.$destroy$
    if (e) {
      t.$destroy$ = void 0
      try {
        e()
      } catch (n) {
        It(n)
      }
    }
  },
  wo = t => {
    32 & t.$flags$ ? ((t.$flags$ &= -33), (0, t.$qrl$)()) : $e(t)
  },
  pn = (t, e) => {
    e === 'visible' || e === 'intersection-observer'
      ? Ii('qvisible', $n(t))
      : e === 'load' || e === 'document-ready'
        ? vs('qinit', $n(t))
        : (e !== 'idle' && e !== 'document-idle') || vs('qidle', $n(t))
  },
  $n = t => {
    const e = t.$qrl$,
      n = we(e.$chunk$, '_hW', Ei, null, null, [t], e.$symbol$)
    return e.dev && (n.dev = e.dev), n
  },
  Vn = t => Mt(t) && t instanceof Ye,
  Di = (t, e) => {
    let n = `${Nt(t.$flags$)} ${Nt(t.$index$)} ${e(t.$qrl$)} ${e(t.$el$)}`
    return t.$state$ && (n += ` ${e(t.$state$)}`), n
  },
  Oi = t => {
    const [e, n, s, o, r] = t.split(' ')
    return new Ye(rt(e), rt(n), o, s, r)
  }
class Ye {
  constructor(e, n, s, o, r) {
    E(this, '$flags$')
    E(this, '$index$')
    E(this, '$el$')
    E(this, '$qrl$')
    E(this, '$state$')
    ;(this.$flags$ = e),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = o),
      (this.$state$ = r)
  }
}
function Li(t) {
  return zi(t) && t.nodeType === 1
}
function zi(t) {
  return t && typeof t.nodeType == 'number'
}
const Jt = 1,
  St = 2,
  Gn = 4,
  Kn = 8,
  tt = t => t[Ve],
  V = (t, e) => {
    const n = tt(t)
    if (n) return n
    const s = Ze(t),
      o = ot(t, 'q:id')
    if (o) {
      const r = e.$pauseCtx$
      if (((s.$id$ = o), r)) {
        const { getObject: i, meta: c, refs: $ } = r
        if (Li(t)) {
          const l = $[o]
          l &&
            ((s.$refMap$ = l.split(' ').map(i)),
            (s.li = Cr(s, e.$containerEl$)))
        } else {
          const l = t.getAttribute('q:sstyle')
          s.$scopeIds$ = l ? l.split('|') : null
          const a = c[o]
          if (a) {
            const u = a.s,
              h = a.h,
              d = a.c,
              m = a.w
            if (
              (u && (s.$seq$ = u.split(' ').map(i)),
              m && (s.$tasks$ = m.split(' ').map(i)),
              d)
            ) {
              s.$contexts$ = new Map()
              for (const y of d.split(' ')) {
                const [g, f] = y.split('=')
                s.$contexts$.set(g, i(f))
              }
            }
            if (h) {
              const [y, g] = h.split(' ')
              if (((s.$flags$ = Gn), y && (s.$componentQrl$ = i(y)), g)) {
                const f = i(g)
                ;(s.$props$ = f), Ke(f, 2), (f[N] = Fi(f))
              } else s.$props$ = he(Ge(), e)
            }
          }
        }
      }
    }
    return s
  },
  Fi = t => {
    const e = {},
      n = jt(t)
    for (const s in n) s.startsWith('$$') && (e[s.slice(2)] = n[s])
    return e
  },
  Ze = t => {
    const e = {
      $flags$: 0,
      $id$: '',
      $element$: t,
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
      $realParentCtx$: void 0,
    }
    return (t[Ve] = e), e
  },
  Qi = (t, e) => {
    var n
    ;(n = t.$tasks$) == null ||
      n.forEach(s => {
        e.$clearSub$(s), wo(s)
      }),
      (t.$componentQrl$ = null),
      (t.$seq$ = null),
      (t.$tasks$ = null)
  }
let Vt
function Wi(t) {
  if (Vt === void 0) {
    const e = st()
    if (e && e.$locale$) return e.$locale$
    if (t !== void 0) return t
    throw new Error('Reading `locale` outside of context.')
  }
  return Vt
}
function Ss(t, e) {
  const n = Vt
  try {
    return (Vt = t), e()
  } finally {
    Vt = n
  }
}
function Ui(t) {
  Vt = t
}
let ne
const st = () => {
    if (!ne) {
      const t = typeof document < 'u' && document && document.__q_context__
      return t ? (C(t) ? (document.__q_context__ = bo(t)) : t) : void 0
    }
    return ne
  },
  Hi = () => {
    const t = st()
    if (!t) throw Q(14)
    return t
  },
  Jn = () => {
    const t = st()
    if (!t || t.$event$ !== 'qRender') throw Q(20)
    return t.$hostElement$, t.$waitOn$, t.$renderCtx$, t.$subscriber$, t
  },
  Bi = () => Jn().$renderCtx$.$static$.$containerState$
function W(t, e, ...n) {
  return Vi.call(this, t, e, n)
}
function Vi(t, e, n) {
  const s = ne
  let o
  try {
    ;(ne = t), (o = e.apply(this, n))
  } finally {
    ne = s
  }
  return o
}
const Gi = (t, e) => {
    const n = t.$waitOn$
    if (n.length === 0) {
      const s = e()
      L(s) && n.push(s)
    } else n.push(Promise.all(n).then(e))
  },
  bo = ([t, e, n]) => {
    const s = t.closest('[q\\:container]'),
      o = (s == null ? void 0 : s.getAttribute('q:locale')) || void 0
    return o && Ui(o), G(o, void 0, t, e, n)
  },
  G = (t, e, n, s, o) => ({
    $url$: o,
    $i$: 0,
    $hostElement$: e,
    $element$: n,
    $event$: s,
    $qrl$: void 0,
    $waitOn$: void 0,
    $subscriber$: void 0,
    $renderCtx$: void 0,
    $locale$:
      t || (typeof s == 'object' && s && 'locale' in s ? s.locale : void 0),
  }),
  Xn = t => t.closest('[q\\:container]'),
  se = t => W(void 0, t),
  ws = G(void 0, void 0, void 0, 'qRender'),
  ht = (t, e) => ((ws.$subscriber$ = e), W(ws, () => t.value)),
  Ki = t => {
    const e = st()
    return (
      e &&
        e.$hostElement$ &&
        e.$renderCtx$ &&
        (V(e.$hostElement$, e.$renderCtx$.$static$.$containerState$).$flags$ |=
          Kn),
      t
    )
  },
  Ji = (t, e, n, s) => {
    const o = e.$subsManager$.$createManager$(s)
    return new le(t, o, n)
  },
  oe = Symbol('proxy manager'),
  Xi = 1,
  Eo = 2,
  xo = Symbol('unassigned signal')
class ye {}
var Cl, Ml
class le extends ye {
  constructor(n, s, o) {
    super()
    E(this, 'untrackedValue')
    E(this, Cl)
    E(this, Ml, 0)
    ;(this.untrackedValue = n), (this[et] = s), (this[oe] = o)
  }
  valueOf() {}
  toString() {
    return `[Signal ${String(this.value)}]`
  }
  toJSON() {
    return { value: this.value }
  }
  get value() {
    var s
    if (this[oe] & Eo) throw xo
    const n = (s = st()) == null ? void 0 : s.$subscriber$
    return n && this[et].$addSub$(n), this.untrackedValue
  }
  set value(n) {
    const s = this[et]
    s &&
      this.untrackedValue !== n &&
      ((this.untrackedValue = n), s.$notifySubs$())
  }
}
;(Cl = et), (Ml = oe)
class hn extends ye {
  constructor(n, s, o) {
    super()
    E(this, '$func$')
    E(this, '$args$')
    E(this, '$funcStr$')
    ;(this.$func$ = n), (this.$args$ = s), (this.$funcStr$ = o)
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$)
  }
}
class mn extends ye {
  constructor(n, s) {
    super()
    E(this, 'ref')
    E(this, 'prop')
    ;(this.ref = n), (this.prop = s)
  }
  get [et]() {
    return B(this.ref)
  }
  get value() {
    return this.ref[this.prop]
  }
  set value(n) {
    this.ref[this.prop] = n
  }
}
const U = t => t instanceof ye,
  _o = (t, e) => {
    var o, r
    if (!Mt(t)) return t[e]
    if (t instanceof ye) return t
    const n = jt(t)
    if (n) {
      const i = n['$$' + e]
      if (i) return i
      if (((o = n[N]) == null ? void 0 : o[e]) !== !0) return new mn(t, e)
    }
    const s = (r = t[N]) == null ? void 0 : r[e]
    return U(s) ? s : N
  },
  Yi = (t, e) => {
    const n = _o(t, e)
    return n === N ? t[e] : n
  },
  bs = Symbol('ContainerState'),
  Zt = t => {
    let e = t[bs]
    return e || (t[bs] = e = To(t, ot(t, 'q:base') ?? '/')), e
  },
  To = (t, e) => {
    const n = {}
    if (t) {
      const o = t.attributes
      if (o)
        for (let r = 0; r < o.length; r++) {
          const i = o[r]
          n[i.name] = i.value
        }
    }
    const s = {
      $containerEl$: t,
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
      $serverData$: { containerAttributes: n },
      $base$: e,
      $renderPromise$: void 0,
      $hostsRendering$: void 0,
      $pauseCtx$: void 0,
      $subsManager$: null,
      $inlineFns$: new Map(),
    }
    return (s.$subsManager$ = R$(s)), s
  },
  Yn = (t, e) => {
    if (Z(t)) return t(e)
    if (U(t)) return Y() ? (t.untrackedValue = e) : (t.value = e)
    throw Q(32, t)
  },
  ko = 128,
  Zi = t => bt(t) && t.hasAttribute('q:container'),
  Nt = t => t.toString(36),
  rt = t => parseInt(t, 36),
  qo = t => {
    const e = t.indexOf(':')
    return t && kr(t.slice(e + 1))
  },
  ve = 'http://www.w3.org/2000/svg',
  J = 1,
  Me = 2,
  Pe = [],
  De = (t, e, n, s) => {
    e.$elm$
    const o = n.$children$
    if (o.length === 1 && o[0].$type$ === ':skipRender')
      return void (n.$children$ = e.$children$)
    const r = e.$elm$
    let i = Le
    e.$children$ === Pe && r.nodeName === 'HEAD' && ((i = ec), (s |= Me))
    const c = ji(e, i)
    return c.length > 0 && o.length > 0
      ? tc(t, r, c, o, s)
      : c.length > 0 && o.length === 0
        ? Zn(t.$static$, c, 0, c.length - 1)
        : o.length > 0
          ? No(t, r, null, o, 0, o.length - 1, s)
          : void 0
  },
  ji = (t, e) => {
    const n = t.$children$
    return n === Pe ? (t.$children$ = Io(t.$elm$, e)) : n
  },
  tc = (t, e, n, s, o) => {
    let r = 0,
      i = 0,
      c = n.length - 1,
      $ = n[0],
      l = n[c],
      a = s.length - 1,
      u = s[0],
      h = s[a],
      d,
      m,
      y
    const g = [],
      f = t.$static$
    for (; r <= c && i <= a; )
      if ($ == null) $ = n[++r]
      else if (l == null) l = n[--c]
      else if (u == null) u = s[++i]
      else if (h == null) h = s[--a]
      else if ($.$id$ === u.$id$)
        g.push(zt(t, $, u, o)), ($ = n[++r]), (u = s[++i])
      else if (l.$id$ === h.$id$)
        g.push(zt(t, l, h, o)), (l = n[--c]), (h = s[--a])
      else if ($.$key$ && $.$id$ === h.$id$)
        $.$elm$,
          l.$elm$,
          g.push(zt(t, $, h, o)),
          mc(f, e, $.$elm$, l.$elm$),
          ($ = n[++r]),
          (h = s[--a])
      else if (l.$key$ && l.$id$ === u.$id$)
        $.$elm$,
          l.$elm$,
          g.push(zt(t, l, u, o)),
          Bt(f, e, l.$elm$, $.$elm$),
          (l = n[--c]),
          (u = s[++i])
      else {
        if (
          (d === void 0 && (d = dc(n, r, c)), (m = d[u.$key$]), m === void 0)
        ) {
          const S = kt(t, u, o, g)
          Bt(f, e, S, $ == null ? void 0 : $.$elm$)
        } else if (((y = n[m]), y.$type$ !== u.$type$)) {
          const S = kt(t, u, o, g)
          q(S, p => {
            Bt(f, e, p, $ == null ? void 0 : $.$elm$)
          })
        } else
          g.push(zt(t, y, u, o)),
            (n[m] = void 0),
            y.$elm$,
            Bt(f, e, y.$elm$, $.$elm$)
        u = s[++i]
      }
    i <= a &&
      g.push(No(t, e, s[a + 1] == null ? null : s[a + 1].$elm$, s, i, a, o))
    let v = An(g)
    return (
      r <= c &&
        (v = q(v, () => {
          Zn(f, n, r, c)
        })),
      v
    )
  },
  Ht = (t, e) => {
    const n = it(t) ? t.close : null,
      s = []
    let o = t.firstChild
    for (; (o = ns(o)) && (e(o) && s.push(o), (o = o.nextSibling), o !== n); );
    return s
  },
  Io = (t, e) => Ht(t, e).map(Ao),
  Ao = t => {
    var e
    return bt(t) ? (((e = tt(t)) == null ? void 0 : e.$vdom$) ?? Oe(t)) : Oe(t)
  },
  Oe = t => {
    if (Et(t)) {
      const e = new ft(t.localName, {}, null, Pe, 0, yn(t))
      return (e.$elm$ = t), e
    }
    if (xn(t)) {
      const e = new ft(t.nodeName, F, null, Pe, 0, null)
      return (e.$text$ = t.data), (e.$elm$ = t), e
    }
  },
  ec = t => {
    const e = t.nodeType
    return e === 1 ? t.hasAttribute('q:head') : e === 111
  },
  gn = t => t.nodeName === 'Q:TEMPLATE',
  Le = t => {
    const e = t.nodeType
    if (e === 3 || e === 111) return !0
    if (e !== 1) return !1
    const n = t.nodeName
    return (
      n !== 'Q:TEMPLATE' &&
      (n === 'HEAD'
        ? t.hasAttribute('q:head')
        : n !== 'STYLE' || !t.hasAttribute(Be))
    )
  },
  Ro = t => {
    const e = {}
    for (const n of t) {
      const s = nc(n)
      ;(
        e[s] ?? (e[s] = new ft(Xt, { [Us]: '' }, null, [], 0, s))
      ).$children$.push(n)
    }
    return e
  },
  zt = (t, e, n, s) => {
    e.$type$, n.$type$, e.$key$, n.$key$, e.$id$, n.$id$
    const o = e.$elm$,
      r = n.$type$,
      i = t.$static$,
      c = i.$containerState$,
      $ = t.$cmpCtx$
    if (((n.$elm$ = o), r === '#text')) {
      i.$visited$.push(o)
      const h = n.$signal$
      return (
        h && (n.$text$ = ce(ht(h, [4, $.$element$, h, o]))),
        void wt(i, o, 'data', n.$text$)
      )
    }
    if (r === '#signal') return
    const l = n.$props$,
      a = n.$flags$,
      u = V(o, c)
    if (r !== Xt) {
      let h = !!(s & J)
      if ((h || r !== 'svg' || ((s |= J), (h = !0)), l !== F)) {
        1 & a || (u.li.length = 0)
        const d = e.$props$
        n.$props$ = d
        for (const m in l) {
          let y = l[m]
          if (m !== 'ref')
            if (Cn(m)) {
              const g = Pn(u.li, m, y, c.$containerEl$)
              Po(i, o, g)
            } else
              U(y) && (y = ht(y, [1, $.$element$, y, o, m])),
                m === 'class' ? (y = On(y, $)) : m === 'style' && (y = Je(y)),
                d[m] !== y && ((d[m] = y), jn(i, o, m, y, h))
          else y !== void 0 && Yn(y, o)
        }
      }
      return 2 & a ||
        (h && r === 'foreignObject' && (s &= ~J), l[H] !== void 0) ||
        r === 'textarea'
        ? void 0
        : De(t, e, n, s)
    }
    if ('q:renderFn' in l) {
      const h = l.props
      lc(c, u, h)
      let d = !!(u.$flags$ & Jt)
      return (
        d ||
          u.$componentQrl$ ||
          u.$element$.hasAttribute('q:id') ||
          (Ys(t, u),
          (u.$componentQrl$ = h['q:renderFn']),
          u.$componentQrl$,
          (d = !0)),
        d ? q(Wn(t, u, s), () => Es(t, u, n, s)) : Es(t, u, n, s)
      )
    }
    if ('q:s' in l) return $.$slots$, void $.$slots$.push(n)
    if (H in l) wt(i, o, 'innerHTML', l[H])
    else if (!(2 & a)) return De(t, e, n, s)
  },
  Es = (t, e, n, s) => {
    if (2 & n.$flags$) return
    const o = t.$static$,
      r = Ro(n.$children$),
      i = Mo(e)
    for (const c in i.slots)
      if (!r[c]) {
        const $ = i.slots[c],
          l = Io($, Le)
        if (l.length > 0) {
          const a = tt($)
          a && a.$vdom$ && (a.$vdom$.$children$ = []), Zn(o, l, 0, l.length - 1)
        }
      }
    for (const c in i.templates) {
      const $ = i.templates[c]
      $ && !r[c] && ((i.templates[c] = void 0), es(o, $))
    }
    return An(
      Object.keys(r).map(c => {
        const $ = r[c],
          l = Co(o, i, e, c, t.$static$.$containerState$),
          a = Un(l),
          u = ge(t),
          h = l.$element$
        ;(u.$slotCtx$ = l), (l.$vdom$ = $), ($.$elm$ = h)
        let d = s & ~J
        h.isSvg && (d |= J)
        const m = o.$addSlots$.findIndex(y => y[0] === h)
        return m >= 0 && o.$addSlots$.splice(m, 1), De(u, a, $, d)
      }),
    )
  },
  No = (t, e, n, s, o, r, i) => {
    const c = []
    for (; o <= r; ++o) {
      const $ = s[o],
        l = kt(t, $, i, c)
      Bt(t.$static$, e, l, n)
    }
    return Qt(c)
  },
  Zn = (t, e, n, s) => {
    for (; n <= s; ++n) {
      const o = e[n]
      o && (o.$elm$, es(t, o.$elm$))
    }
  },
  Co = (t, e, n, s, o) => {
    const r = e.slots[s]
    if (r) return V(r, o)
    const i = e.templates[s]
    if (i) return V(i, o)
    const c = zo(t.$doc$, s),
      $ = Ze(c)
    return ($.$parentCtx$ = n), vc(t, n.$element$, c), (e.templates[s] = c), $
  },
  nc = t => t.$props$[j] ?? '',
  kt = (t, e, n, s) => {
    const o = e.$type$,
      r = t.$static$.$doc$,
      i = t.$cmpCtx$
    if (o === '#text') return (e.$elm$ = r.createTextNode(e.$text$))
    if (o === '#signal') {
      const g = e.$signal$,
        f = g.value
      if (Ot(f)) {
        const v = vt(f)
        if (U(v)) throw new Error('NOT IMPLEMENTED: Promise')
        if (Array.isArray(v)) throw new Error('NOT IMPLEMENTED: Array')
        {
          const S = kt(t, v, n, s)
          return (
            ht(g, 4 & n ? [3, S, g, S] : [4, i.$element$, g, S]), (e.$elm$ = S)
          )
        }
      }
      {
        const v = r.createTextNode(e.$text$)
        return (
          (v.data = e.$text$ = ce(f)),
          ht(g, 4 & n ? [3, v, g, v] : [4, i.$element$, g, v]),
          (e.$elm$ = v)
        )
      }
    }
    let c,
      $ = !!(n & J)
    $ || o !== 'svg' || ((n |= J), ($ = !0))
    const l = o === Xt,
      a = e.$props$,
      u = t.$static$,
      h = u.$containerState$
    l
      ? (c = _c(r, $))
      : o === 'head'
        ? ((c = r.head), (n |= Me))
        : ((c = ts(r, o, $)), (n &= ~Me)),
      2 & e.$flags$ && (n |= 4),
      (e.$elm$ = c)
    const d = Ze(c)
    if (
      (t.$slotCtx$
        ? ((d.$parentCtx$ = t.$slotCtx$), (d.$realParentCtx$ = t.$cmpCtx$))
        : (d.$parentCtx$ = t.$cmpCtx$),
      l)
    ) {
      if ('q:renderFn' in a) {
        const g = a['q:renderFn'],
          f = Ge(),
          v = h.$subsManager$.$createManager$(),
          S = new Proxy(f, new Vs(h, v)),
          p = a.props
        if ((h.$proxyMap$.set(f, S), (d.$props$ = S), p !== F)) {
          const x = (f[N] = p[N] ?? F)
          for (const k in p)
            if (k !== 'children' && k !== j) {
              const w = x[k]
              U(w) ? (f['$$' + k] = w) : (f[k] = p[k])
            }
        }
        Ys(t, d), (d.$componentQrl$ = g)
        const b = q(Wn(t, d, n), () => {
          let x = e.$children$
          if (x.length === 0) return
          x.length === 1 &&
            x[0].$type$ === ':skipRender' &&
            (x = x[0].$children$)
          const k = Mo(d),
            w = [],
            _ = Ro(x)
          for (const I in _) {
            const R = _[I],
              P = Co(u, k, d, I, u.$containerState$),
              O = ge(t),
              Lt = P.$element$
            ;(O.$slotCtx$ = P), (P.$vdom$ = R), (R.$elm$ = Lt)
            let K = n & ~J
            Lt.isSvg && (K |= J)
            for (const D of R.$children$) {
              const te = kt(O, D, K, w)
              D.$elm$, D.$elm$, Lo(u, Lt, te)
            }
          }
          return Qt(w)
        })
        return L(b) && s.push(b), c
      }
      if ('q:s' in a)
        i.$slots$,
          Ec(c, e.$key$),
          X(c, 'q:sref', i.$id$),
          X(c, 'q:s', ''),
          i.$slots$.push(e),
          u.$addSlots$.push([c, i.$element$])
      else if (H in a) return wt(u, c, 'innerHTML', a[H]), c
    } else {
      if (e.$immutableProps$) {
        const g =
          a !== F
            ? Object.fromEntries(
                Object.entries(e.$immutableProps$).map(([f, v]) => [
                  f,
                  v === N ? a[f] : v,
                ]),
              )
            : e.$immutableProps$
        Ts(u, d, i, g, $, !0)
      }
      if (a !== F) {
        d.$vdom$ = e
        const g = e.$immutableProps$
          ? Object.fromEntries(
              Object.entries(a).filter(([f]) => !(f in e.$immutableProps$)),
            )
          : a
        e.$props$ = Ts(u, d, i, g, $, !1)
      }
      if (($ && o === 'foreignObject' && (($ = !1), (n &= ~J)), i)) {
        const g = i.$scopeIds$
        g &&
          g.forEach(f => {
            c.classList.add(f)
          }),
          i.$flags$ & St && (d.li.push(...i.li), (i.$flags$ &= ~St))
      }
      for (const g of d.li) Po(u, c, g[0])
      if (a[H] !== void 0) return c
      $ && o === 'foreignObject' && (($ = !1), (n &= ~J))
    }
    let m = e.$children$
    if (m.length === 0) return c
    m.length === 1 && m[0].$type$ === ':skipRender' && (m = m[0].$children$)
    const y = m.map(g => kt(t, g, n, s))
    for (const g of y) ae(c, g)
    return c
  },
  sc = t => {
    const e = t.$slots$
    return e || (t.$element$.parentElement, (t.$slots$ = oc(t)))
  },
  Mo = t => {
    const e = sc(t),
      n = {},
      s = {},
      o = Array.from(t.$element$.childNodes).filter(gn)
    for (const r of e) r.$elm$, (n[r.$key$ ?? ''] = r.$elm$)
    for (const r of o) s[ot(r, j) ?? ''] = r
    return { slots: n, templates: s }
  },
  oc = t => {
    const e = t.$element$.parentElement
    return Ic(e, 'q:sref', t.$id$).map(Oe)
  },
  rc = (t, e, n) => (wt(t, e.style, 'cssText', n), !0),
  xs = (t, e, n) => (
    e.namespaceURI === ve ? ue(t, e, 'class', n) : wt(t, e, 'className', n), !0
  ),
  _s = (t, e, n, s) =>
    s in e &&
    ((e[s] !== n || (s === 'value' && !e.hasAttribute(s))) &&
      (s === 'value' && e.tagName !== 'OPTION'
        ? hc(t, e, s, n)
        : wt(t, e, s, n)),
    !0),
  ee = (t, e, n, s) => (ue(t, e, s.toLowerCase(), n), !0),
  ic = (t, e, n) => (wt(t, e, 'innerHTML', n), !0),
  cc = () => !0,
  $c = {
    style: rc,
    class: xs,
    className: xs,
    value: _s,
    checked: _s,
    href: ee,
    list: ee,
    form: ee,
    tabIndex: ee,
    download: ee,
    innerHTML: cc,
    [H]: ic,
  },
  jn = (t, e, n, s, o) => {
    if (Zs(n)) return void ue(t, e, n, s != null ? String(s) : s)
    const r = $c[n]
    ;(r && r(t, e, s, n)) ||
      (o || !(n in e)
        ? (n.startsWith(Gs) && Do(n.slice(15)), ue(t, e, n, s))
        : wt(t, e, n, s))
  },
  Ts = (t, e, n, s, o, r) => {
    const i = {},
      c = e.$element$
    for (const $ in s) {
      let l = s[$]
      if ($ !== 'ref')
        if (Cn($)) Pn(e.li, $, l, t.$containerState$.$containerEl$)
        else {
          if (
            (U(l) &&
              (l = ht(
                l,
                r ? [1, c, l, n.$element$, $] : [2, n.$element$, l, c, $],
              )),
            $ === 'class')
          ) {
            if (((l = On(l, n)), !l)) continue
          } else $ === 'style' && (l = Je(l))
          ;(i[$] = l), jn(t, c, $, l, o)
        }
      else l !== void 0 && Yn(l, c)
    }
    return i
  },
  lc = (t, e, n) => {
    let s = e.$props$
    if ((s || (e.$props$ = s = he(Ge(), t)), n === F)) return
    const o = B(s),
      r = jt(s),
      i = (r[N] = n[N] ?? F)
    for (const c in n)
      if (c !== 'children' && c !== j && !i[c]) {
        const $ = n[c]
        r[c] !== $ && ((r[c] = $), o.$notifySubs$(c))
      }
  },
  re = (t, e, n, s) => {
    if ((n.$clearSub$(t), Et(t))) {
      if (s && t.hasAttribute('q:s')) return void e.$rmSlots$.push(t)
      const o = tt(t)
      o && Qi(o, n)
      const r = it(t) ? t.close : null
      let i = t.firstChild
      for (; (i = ns(i)) && (re(i, e, n, !0), (i = i.nextSibling), i !== r); );
    }
  },
  ac = async t => {
    bc(t)
  },
  ae = (t, e) => {
    it(e) ? e.appendTo(t) : t.appendChild(e)
  },
  uc = (t, e) => {
    it(e) ? e.remove() : t.removeChild(e)
  },
  fc = (t, e, n) => {
    it(e)
      ? e.insertBeforeTo(t, (n == null ? void 0 : n.nextSibling) ?? null)
      : t.insertBefore(e, (n == null ? void 0 : n.nextSibling) ?? null)
  },
  je = (t, e, n) => {
    it(e) ? e.insertBeforeTo(t, ze(n)) : t.insertBefore(e, ze(n))
  },
  dc = (t, e, n) => {
    const s = {}
    for (let o = e; o <= n; ++o) {
      const r = t[o].$key$
      r != null && (s[r] = o)
    }
    return s
  },
  Po = (t, e, n) => {
    n.startsWith('on:') || ue(t, e, n, ''), Do(n)
  },
  Do = t => {
    {
      const e = qo(t)
      try {
        ;(globalThis.qwikevents || (globalThis.qwikevents = [])).push(e)
      } catch {}
    }
  },
  ue = (t, e, n, s) => {
    t.$operations$.push({ $operation$: pc, $args$: [e, n, s] })
  },
  pc = (t, e, n) => {
    if (n == null || n === !1) t.removeAttribute(e)
    else {
      const s = n === !0 ? '' : String(n)
      X(t, e, s)
    }
  },
  wt = (t, e, n, s) => {
    t.$operations$.push({ $operation$: Oo, $args$: [e, n, s] })
  },
  hc = (t, e, n, s) => {
    t.$postOperations$.push({ $operation$: Oo, $args$: [e, n, s] })
  },
  Oo = (t, e, n) => {
    try {
      ;(t[e] = n ?? ''), n == null && Ct(t) && bt(t) && t.removeAttribute(e)
    } catch (s) {
      It(Ue(6), e, { node: t, value: n }, s)
    }
  },
  ts = (t, e, n) => (n ? t.createElementNS(ve, e) : t.createElement(e)),
  Bt = (t, e, n, s) => (
    t.$operations$.push({ $operation$: je, $args$: [e, n, s || null] }), n
  ),
  mc = (t, e, n, s) => (
    t.$operations$.push({ $operation$: fc, $args$: [e, n, s || null] }), n
  ),
  Lo = (t, e, n) => (
    t.$operations$.push({ $operation$: ae, $args$: [e, n] }), n
  ),
  gc = (t, e) => {
    t.$containerState$.$styleIds$.add(e.styleId),
      t.$postOperations$.push({
        $operation$: yc,
        $args$: [t.$containerState$, e],
      })
  },
  yc = (t, e) => {
    const n = t.$containerEl$,
      s = pe(n),
      o = s.documentElement === n,
      r = s.head,
      i = s.createElement('style')
    X(i, Be, e.styleId),
      X(i, 'hidden', ''),
      (i.textContent = e.content),
      o && r ? ae(r, i) : je(n, i, n.firstChild)
  },
  vc = (t, e, n) => {
    t.$operations$.push({ $operation$: Sc, $args$: [e, n] })
  },
  Sc = (t, e) => {
    je(t, e, t.firstChild)
  },
  es = (t, e) => {
    Et(e) && re(e, t, t.$containerState$.$subsManager$, !0),
      t.$operations$.push({ $operation$: wc, $args$: [e, t] })
  },
  wc = t => {
    const e = t.parentElement
    e && uc(e, t)
  },
  zo = (t, e) => {
    const n = ts(t, 'q:template', !1)
    return X(n, j, e), X(n, 'hidden', ''), X(n, 'aria-hidden', 'true'), n
  },
  bc = t => {
    for (const e of t.$operations$) e.$operation$.apply(void 0, e.$args$)
    xc(t)
  },
  yn = t => ot(t, 'q:key'),
  Ec = (t, e) => {
    e !== null && X(t, 'q:key', e)
  },
  xc = t => {
    const e = t.$containerState$.$subsManager$
    for (const n of t.$rmSlots$) {
      const s = yn(n),
        o = Ht(n, Le)
      if (o.length > 0) {
        const r = n.getAttribute('q:sref'),
          i = t.$roots$.find(c => c.$id$ === r)
        if (i) {
          const c = i.$element$
          if (c.isConnected)
            if (Ht(c, gn).some($ => ot($, j) === s)) re(n, t, e, !1)
            else {
              const $ = zo(t.$doc$, s)
              for (const l of o) ae($, l)
              je(c, $, c.firstChild)
            }
          else re(n, t, e, !1)
        } else re(n, t, e, !1)
      }
    }
    for (const [n, s] of t.$addSlots$) {
      const o = yn(n),
        r = Ht(s, gn).find(i => i.getAttribute(j) === o)
      r &&
        (Ht(r, Le).forEach(i => {
          ae(n, i)
        }),
        r.remove())
    }
  },
  ks = () => {},
  _c = (t, e) => {
    const n = t.createComment('qv '),
      s = t.createComment('/qv')
    return new Fo(n, s, e)
  },
  Tc = t => {
    if (!t) return {}
    const e = t.split(' ')
    return Object.fromEntries(
      e.map(n => {
        const s = n.indexOf('=')
        return s >= 0 ? [n.slice(0, s), Rc(n.slice(s + 1))] : [n, '']
      }),
    )
  },
  kc = t => {
    const e = []
    return (
      Object.entries(t).forEach(([n, s]) => {
        e.push(s ? `${n}=${Ac(s)}` : `${n}`)
      }),
      e.join(' ')
    )
  },
  qc = (t, e, n) =>
    t.ownerDocument.createTreeWalker(t, 128, {
      acceptNode(s) {
        const o = Se(s)
        return o && ot(o, e) === n ? 1 : 2
      },
    }),
  Ic = (t, e, n) => {
    const s = qc(t, e, n),
      o = []
    let r = null
    for (; (r = s.nextNode()); ) o.push(Se(r))
    return o
  },
  Ac = t => t.replace(/ /g, '+'),
  Rc = t => t.replace(/\+/g, ' '),
  Xt = ':virtual'
class Fo {
  constructor(e, n, s) {
    E(this, 'open')
    E(this, 'close')
    E(this, 'isSvg')
    E(this, 'ownerDocument')
    E(this, '_qc_', null)
    E(this, 'nodeType', 111)
    E(this, 'localName', Xt)
    E(this, 'nodeName', Xt)
    E(this, '$attributes$')
    E(this, '$template$')
    ;(this.open = e), (this.close = n), (this.isSvg = s)
    const o = (this.ownerDocument = e.ownerDocument)
    ;(this.$template$ = ts(o, 'template', !1)),
      (this.$attributes$ = Tc(e.data.slice(3))),
      e.data.startsWith('qv '),
      (e.__virtual = this),
      (n.__virtual = this)
  }
  insertBefore(e, n) {
    const s = this.parentElement
    return (
      s
        ? s.insertBefore(e, n || this.close)
        : this.$template$.insertBefore(e, n),
      e
    )
  }
  remove() {
    const e = this.parentElement
    if (e) {
      const n = this.childNodes
      this.$template$.childElementCount, e.removeChild(this.open)
      for (let s = 0; s < n.length; s++) this.$template$.appendChild(n[s])
      e.removeChild(this.close)
    }
  }
  appendChild(e) {
    return this.insertBefore(e, null)
  }
  insertBeforeTo(e, n) {
    const s = this.childNodes
    e.insertBefore(this.open, n)
    for (const o of s) e.insertBefore(o, n)
    e.insertBefore(this.close, n), this.$template$.childElementCount
  }
  appendTo(e) {
    this.insertBeforeTo(e, null)
  }
  get namespaceURI() {
    var e
    return ((e = this.parentElement) == null ? void 0 : e.namespaceURI) ?? ''
  }
  removeChild(e) {
    this.parentElement
      ? this.parentElement.removeChild(e)
      : this.$template$.removeChild(e)
  }
  getAttribute(e) {
    return this.$attributes$[e] ?? null
  }
  hasAttribute(e) {
    return e in this.$attributes$
  }
  setAttribute(e, n) {
    ;(this.$attributes$[e] = n), (this.open.data = qs(this.$attributes$))
  }
  removeAttribute(e) {
    delete this.$attributes$[e], (this.open.data = qs(this.$attributes$))
  }
  matches(e) {
    return !1
  }
  compareDocumentPosition(e) {
    return this.open.compareDocumentPosition(e)
  }
  closest(e) {
    const n = this.parentElement
    return n ? n.closest(e) : null
  }
  querySelectorAll(e) {
    const n = []
    return (
      Ht(this, yr).forEach(s => {
        Et(s) &&
          (s.matches(e) && n.push(s),
          n.concat(Array.from(s.querySelectorAll(e))))
      }),
      n
    )
  }
  querySelector(e) {
    for (const n of this.childNodes)
      if (bt(n)) {
        if (n.matches(e)) return n
        const s = n.querySelector(e)
        if (s !== null) return s
      }
    return null
  }
  get innerHTML() {
    return ''
  }
  set innerHTML(e) {
    const n = this.parentElement
    n
      ? (this.childNodes.forEach(s => this.removeChild(s)),
        (this.$template$.innerHTML = e),
        n.insertBefore(this.$template$.content, this.close))
      : (this.$template$.innerHTML = e)
  }
  get firstChild() {
    if (this.parentElement) {
      const e = this.open.nextSibling
      return e === this.close ? null : e
    }
    return this.$template$.firstChild
  }
  get nextSibling() {
    return this.close.nextSibling
  }
  get previousSibling() {
    return this.open.previousSibling
  }
  get childNodes() {
    if (!this.parentElement) return Array.from(this.$template$.childNodes)
    const e = []
    let n = this.open
    for (; (n = n.nextSibling) && n !== this.close; ) e.push(n)
    return e
  }
  get isConnected() {
    return this.open.isConnected
  }
  get parentElement() {
    return this.open.parentElement
  }
}
const qs = t => `qv ${kc(t)}`,
  ns = t => {
    if (t == null) return null
    if (de(t)) {
      const e = Se(t)
      if (e) return e
    }
    return t
  },
  Nc = t => {
    let e = t,
      n = 1
    for (; (e = e.nextSibling); )
      if (de(e)) {
        const s = e.__virtual
        if (s) e = s
        else if (e.data.startsWith('qv ')) n++
        else if (e.data === '/qv' && (n--, n === 0)) return e
      }
  },
  Se = t => {
    var n
    const e = t.__virtual
    if (e) return e
    if (t.data.startsWith('qv ')) {
      const s = Nc(t)
      return new Fo(
        t,
        s,
        ((n = t.parentElement) == null ? void 0 : n.namespaceURI) === ve,
      )
    }
    return null
  },
  ze = t => (t == null ? null : it(t) ? t.open : t),
  Cc = async t => {
    const e = pe(t),
      n = e.documentElement,
      s = Qs(t) ? n : t
    if (ot(s, 'q:container') === 'paused') throw Q(21)
    const o = s === e.documentElement ? e.body : s,
      r = Zt(s),
      i = Pc(s, Hc)
    X(s, 'q:container', 'paused')
    for (const u of i) {
      const h = u.$element$,
        d = u.li
      if (u.$scopeIds$) {
        const m = Ks(u.$scopeIds$)
        m && h.setAttribute('q:sstyle', m)
      }
      if ((u.$id$ && h.setAttribute('q:id', u.$id$), bt(h) && d.length > 0)) {
        const m = Mn(d)
        for (const y of m) h.setAttribute(y[0], rs(y[1], r, u))
      }
    }
    const c = await Mc(i, r, u => (Ct(u) && xn(u) ? Gc(u, r) : null)),
      $ = e.createElement('script')
    X($, 'type', 'qwik/json'),
      ($.textContent = Fc(JSON.stringify(c.state, void 0, void 0))),
      o.appendChild($)
    const l = Array.from(r.$events$, u => JSON.stringify(u)),
      a = e.createElement('script')
    return (
      (a.textContent = `(window.qwikevents||=[]).push(${l.join(', ')})`),
      o.appendChild(a),
      c
    )
  },
  Mc = async (t, e, n, s) => {
    var S
    const o = Oc(e)
    s == null ||
      s.forEach((p, b) => {
        o.$seen$.add(b)
      })
    let r = !1
    for (const p of t)
      if (p.$tasks$)
        for (const b of p.$tasks$) vo(b) && o.$resources$.push(b.$state$), wo(b)
    for (const p of t) {
      const b = p.$element$,
        x = p.li
      for (const k of x)
        if (bt(b)) {
          const w = k[1],
            _ = w.$captureRef$
          if (_) for (const I of _) A(I, o, !0)
          o.$qrls$.push(w), (r = !0)
        }
    }
    if (!r)
      return {
        state: { refs: {}, ctx: {}, objs: [], subs: [] },
        objs: [],
        funcs: [],
        qrls: [],
        resources: o.$resources$,
        mode: 'static',
      }
    let i
    for (; (i = o.$promises$).length > 0; )
      (o.$promises$ = []), await Promise.all(i)
    const c = o.$elements$.length > 0
    if (c) {
      for (const p of o.$deferElements$) ss(p, o, p.$element$)
      for (const p of t) Dc(p, o)
    }
    for (; (i = o.$promises$).length > 0; )
      (o.$promises$ = []), await Promise.all(i)
    const $ = new Map(),
      l = Array.from(o.$objSet$.keys()),
      a = new Map(),
      u = p => {
        let b = ''
        if (L(p)) {
          const w = Wc(p)
          if (!w) return null
          ;(p = w.value), (b += w.resolved ? '~' : '_')
        }
        if (Mt(p)) {
          const w = jt(p)
          if (w) (b += '!'), (p = w)
          else if (Et(p)) {
            const _ = (I => {
              let R = $.get(I)
              return (
                R === void 0 &&
                  ((R = Vc(I)),
                  R || console.warn('Missing ID', I),
                  $.set(I, R)),
                R
              )
            })(p)
            return _ ? '#' + _ + b : null
          }
        }
        const x = a.get(p)
        if (x) return x + b
        const k = s == null ? void 0 : s.get(p)
        return k ? '*' + k : n ? n(p) : null
      },
      h = p => {
        const b = u(p)
        if (b === null) {
          if (cs(p)) {
            const x = Nt(a.size)
            return a.set(p, x), x
          }
          throw Q(27, p)
        }
        return b
      },
      d = new Map()
    for (const p of l) {
      const b = (S = Bc(p, e)) == null ? void 0 : S.$subs$
      if (!b) continue
      const x = Jo(p) ?? 0,
        k = []
      1 & x && k.push(x)
      for (const w of b) {
        const _ = w[1]
        ;(w[0] === 0 && Ct(_) && it(_) && !o.$elements$.includes(tt(_))) ||
          k.push(w)
      }
      k.length > 0 && d.set(p, k)
    }
    l.sort((p, b) => (d.has(p) ? 0 : 1) - (d.has(b) ? 0 : 1))
    let m = 0
    for (const p of l) a.set(p, Nt(m)), m++
    if (o.$noSerialize$.length > 0) {
      const p = a.get(void 0)
      for (const b of o.$noSerialize$) a.set(b, p)
    }
    const y = []
    for (const p of l) {
      const b = d.get(p)
      if (b == null) break
      y.push(b.map(x => (typeof x == 'number' ? `_${x}` : I$(x, u))).filter(Ws))
    }
    y.length, d.size
    const g = Kc(l, h, u, o, e),
      f = {},
      v = {}
    for (const p of t) {
      const b = p.$element$,
        x = p.$id$,
        k = p.$refMap$,
        w = p.$props$,
        _ = p.$contexts$,
        I = p.$tasks$,
        R = p.$componentQrl$,
        P = p.$seq$,
        O = {},
        Lt = it(b) && o.$elements$.includes(p)
      if (k.length > 0) {
        const K = qt(k, h, ' ')
        K && (v[x] = K)
      } else if (c) {
        let K = !1
        if (Lt) {
          const D = u(w)
          ;(O.h = h(R) + (D ? ' ' + D : '')), (K = !0)
        } else {
          const D = u(w)
          D && ((O.h = ' ' + D), (K = !0))
        }
        if (I && I.length > 0) {
          const D = qt(I, u, ' ')
          D && ((O.w = D), (K = !0))
        }
        if (Lt && P && P.length > 0) {
          const D = qt(P, h, ' ')
          ;(O.s = D), (K = !0)
        }
        if (_) {
          const D = []
          _.forEach((pr, hr) => {
            const fs = u(pr)
            fs && D.push(`${hr}=${fs}`)
          })
          const te = D.join(' ')
          te && ((O.c = te), (K = !0))
        }
        K && (f[x] = O)
      }
    }
    return {
      state: { refs: v, ctx: f, objs: g, subs: y },
      objs: l,
      funcs: o.$inlinedFunctions$,
      resources: o.$resources$,
      qrls: o.$qrls$,
      mode: c ? 'render' : 'listeners',
    }
  },
  qt = (t, e, n) => {
    let s = ''
    for (const o of t) {
      const r = e(o)
      r !== null && (s !== '' && (s += n), (s += r))
    }
    return s
  },
  Pc = (t, e) => {
    const n = [],
      s = e(t)
    s !== void 0 && n.push(s)
    const o = t.ownerDocument.createTreeWalker(t, 1 | ko, {
      acceptNode(r) {
        if (Uc(r)) return 2
        const i = e(r)
        return i !== void 0 && n.push(i), 3
      },
    })
    for (; o.nextNode(); );
    return n
  },
  Dc = (t, e) => {
    var o
    const n = t.$realParentCtx$ || t.$parentCtx$,
      s = t.$props$
    if (n && s && !Qo(s) && e.$elements$.includes(n)) {
      const r = (o = B(s)) == null ? void 0 : o.$subs$,
        i = t.$element$
      if (r)
        for (const [c, $] of r)
          c === 0
            ? ($ !== i && Yt(B(s), e, !1), Ct($) ? zc($, e) : A($, e, !0))
            : (A(s, e, !1), Yt(B(s), e, !1))
    }
  },
  Oc = t => {
    const e = []
    return (
      t.$inlineFns$.forEach((n, s) => {
        for (; e.length <= n; ) e.push('')
        e[n] = s
      }),
      {
        $containerState$: t,
        $seen$: new Set(),
        $objSet$: new Set(),
        $prefetch$: 0,
        $noSerialize$: [],
        $inlinedFunctions$: e,
        $resources$: [],
        $elements$: [],
        $qrls$: [],
        $deferElements$: [],
        $promises$: [],
      }
    )
  },
  Lc = (t, e) => {
    const n = tt(t)
    e.$elements$.includes(n) ||
      (e.$elements$.push(n),
      n.$flags$ & Kn
        ? (e.$prefetch$++, ss(n, e, !0), e.$prefetch$--)
        : e.$deferElements$.push(n))
  },
  zc = (t, e) => {
    const n = tt(t)
    if (n) {
      if (e.$elements$.includes(n)) return
      e.$elements$.push(n), ss(n, e, t)
    }
  },
  ss = (t, e, n) => {
    if (
      (t.$props$ &&
        !Qo(t.$props$) &&
        (A(t.$props$, e, n), Yt(B(t.$props$), e, n)),
      t.$componentQrl$ && A(t.$componentQrl$, e, n),
      t.$seq$)
    )
      for (const s of t.$seq$) A(s, e, n)
    if (t.$tasks$) {
      const s = e.$containerState$.$subsManager$.$groupToManagers$
      for (const o of t.$tasks$) s.has(o) && A(o, e, n)
    }
    if (n === !0 && (Is(t, e), t.$dynamicSlots$))
      for (const s of t.$dynamicSlots$) Is(s, e)
  },
  Is = (t, e) => {
    for (; t; ) {
      if (t.$contexts$) for (const n of t.$contexts$.values()) A(n, e, !0)
      t = t.$parentCtx$
    }
  },
  Fc = t => t.replace(/<(\/?script)/gi, '\\x3C$1'),
  Yt = (t, e, n) => {
    if (e.$seen$.has(t)) return
    e.$seen$.add(t)
    const s = t.$subs$
    for (const o of s)
      if ((o[0] > 0 && A(o[2], e, n), n === !0)) {
        const r = o[1]
        Ct(r) && it(r) ? o[0] === 0 && Lc(r, e) : A(r, e, !0)
      }
  },
  vn = Symbol(),
  Qc = t =>
    t.then(
      e => ((t[vn] = { resolved: !0, value: e }), e),
      e => ((t[vn] = { resolved: !1, value: e }), e),
    ),
  Wc = t => t[vn],
  A = (t, e, n) => {
    if (t != null) {
      const s = typeof t
      switch (s) {
        case 'function':
        case 'object': {
          if (e.$seen$.has(t)) return
          if ((e.$seen$.add(t), Go(t)))
            return e.$objSet$.add(void 0), void e.$noSerialize$.push(t)
          const o = t,
            r = jt(t)
          if (r) {
            const i = !(2 & Jo((t = r)))
            if ((n && i && Yt(B(o), e, n), Ko(o))) return void e.$objSet$.add(t)
          }
          if (E$(t, e, n)) return void e.$objSet$.add(t)
          if (L(t))
            return void e.$promises$.push(
              Qc(t).then(i => {
                A(i, e, n)
              }),
            )
          if (s === 'object') {
            if (Ct(t)) return
            if (C(t)) for (let i = 0; i < t.length; i++) A(o[i], e, n)
            else if (He(t)) for (const i in t) A(o[i], e, n)
          }
          break
        }
      }
    }
    e.$objSet$.add(t)
  },
  Uc = t => bt(t) && t.hasAttribute('q:container'),
  Hc = t => {
    const e = ns(t)
    if (Et(e)) {
      const n = tt(e)
      if (n && n.$id$) return n
    }
  },
  Bc = (t, e) => {
    if (!Mt(t)) return
    if (t instanceof le) return B(t)
    const n = e.$proxyMap$.get(t)
    return n ? B(n) : void 0
  },
  Vc = t => {
    const e = tt(t)
    return e ? e.$id$ : null
  },
  Gc = (t, e) => {
    const n = t.previousSibling
    if (n && de(n) && n.data.startsWith('t=')) return '#' + n.data.slice(2)
    const s = t.ownerDocument,
      o = Nt(e.$elementIndex$++),
      r = s.createComment(`t=${o}`),
      i = s.createComment(''),
      c = t.parentElement
    return c.insertBefore(r, t), c.insertBefore(i, t.nextSibling), '#' + o
  },
  Qo = t => Object.keys(t).length === 0
function Kc(t, e, n, s, o) {
  return t.map(r => {
    if (r === null) return null
    const i = typeof r
    switch (i) {
      case 'undefined':
        return en
      case 'number':
        if (!Number.isFinite(r)) break
        return r
      case 'string':
        if (r.charCodeAt(0) < 32) break
        return r
      case 'boolean':
        return r
    }
    const c = x$(r, e, s, o)
    if (c !== void 0) return c
    if (i === 'object') {
      if (C(r)) return r.map(e)
      if (He(r)) {
        const $ = {}
        for (const l in r)
          if (n) {
            const a = n(r[l])
            a !== null && ($[l] = a)
          } else $[l] = e(r[l])
        return $
      }
    }
    throw Q(3, r)
  })
}
const at = (t, e, n = ut) => we(null, e, t, null, null, n, null),
  Jc = (t, e = ut) => we(null, t, null, null, null, e, null),
  os = (t, e = {}) => {
    var l, a
    let n = t.$symbol$,
      s = t.$chunk$
    const o = t.$refSymbol$ ?? n,
      r = qn()
    if (r) {
      const u = r.chunkForSymbol(o, s, (l = t.dev) == null ? void 0 : l.file)
      u
        ? ((s = u[1]), t.$refSymbol$ || (n = u[0]))
        : console.error(
            'serializeQRL: Cannot resolve symbol',
            n,
            'in',
            s,
            (a = t.dev) == null ? void 0 : a.file,
          )
    }
    if (s == null) throw Q(31, t.$symbol$)
    if ((s.startsWith('./') && (s = s.slice(2)), M$(t)))
      if (e.$containerState$) {
        const u = t.resolved,
          h = e.$containerState$,
          d = u.serialized || u.toString()
        let m = h.$inlineFns$.get(d)
        m === void 0 && ((m = h.$inlineFns$.size), h.$inlineFns$.set(d, m)),
          (n = String(m))
      } else vr('Sync QRL without containerState')
    let i = `${s}#${n}`
    const c = t.$capture$,
      $ = t.$captureRef$
    return (
      $ && $.length
        ? e.$getObjId$
          ? (i += `[${qt($, e.$getObjId$, ' ')}]`)
          : e.$addRefMap$ && (i += `[${qt($, e.$addRefMap$, ' ')}]`)
        : c && c.length > 0 && (i += `[${c.join(' ')}]`),
      i
    )
  },
  rs = (t, e, n) => {
    n.$element$
    const s = { $containerState$: e, $addRefMap$: o => Xc(n.$refMap$, o) }
    return qt(
      t,
      o => os(o, s),
      `
`,
    )
  },
  tn = (t, e) => {
    const n = t.length,
      s = As(t, 0, '#'),
      o = As(t, s, '['),
      r = Math.min(s, o),
      i = t.substring(0, r),
      c = s == n ? s : s + 1,
      $ = c == o ? 'default' : t.substring(c, o),
      l = o === n ? ut : t.substring(o + 1, n - 1).split(' '),
      a = we(i, $, null, null, l, null, null)
    return e && a.$setContainer$(e), a
  },
  As = (t, e, n) => {
    const s = t.length,
      o = t.indexOf(n, e == s ? 0 : e)
    return o == -1 ? s : o
  },
  Xc = (t, e) => {
    const n = t.indexOf(e)
    return n === -1 ? (t.push(e), String(t.length - 1)) : String(n)
  },
  Wo = (t, e) => (
    t.$capture$,
    (t.$captureRef$ = t.$capture$.map(n => {
      const s = parseInt(n, 10),
        o = e.$refMap$[s]
      return e.$refMap$.length > s, o
    }))
  ),
  Yc = t => ({
    __brand: 'resource',
    value: void 0,
    loading: !Y(),
    _resolved: void 0,
    _error: void 0,
    _state: 'pending',
    _timeout: (t == null ? void 0 : t.timeout) ?? -1,
    _cache: 0,
  }),
  Zc = t => Mt(t) && t.__brand === 'resource',
  jc = (t, e) => {
    const n = t._state
    return n === 'resolved'
      ? `0 ${e(t._resolved)}`
      : n === 'pending'
        ? '1'
        : `2 ${e(t._error)}`
  },
  t$ = t => {
    const [e, n] = t.split(' '),
      s = Yc(void 0)
    return (
      (s.value = Promise.resolve()),
      e === '0'
        ? ((s._state = 'resolved'), (s._resolved = n), (s.loading = !1))
        : e === '1'
          ? ((s._state = 'pending'),
            (s.value = new Promise(() => {})),
            (s.loading = !0))
          : e === '2' &&
            ((s._state = 'rejected'), (s._error = n), (s.loading = !1)),
      s
    )
  },
  fe = t => dt(pt, { [Us]: '' }, 0, t.name ?? ''),
  en = ''
function M(t) {
  return {
    $prefixCode$: t.$prefix$.charCodeAt(0),
    $prefixChar$: t.$prefix$,
    $test$: t.$test$,
    $serialize$: t.$serialize$,
    $prepare$: t.$prepare$,
    $fill$: t.$fill$,
    $collect$: t.$collect$,
    $subs$: t.$subs$,
  }
}
const e$ = M({
    $prefix$: '',
    $test$: t => cs(t),
    $collect$: (t, e, n) => {
      if (t.$captureRef$) for (const s of t.$captureRef$) A(s, e, n)
      e.$prefetch$ === 0 && e.$qrls$.push(t)
    },
    $serialize$: (t, e) => os(t, { $getObjId$: e }),
    $prepare$: (t, e) => tn(t, e.$containerEl$),
    $fill$: (t, e) => {
      t.$capture$ &&
        t.$capture$.length > 0 &&
        ((t.$captureRef$ = t.$capture$.map(e)), (t.$capture$ = null))
    },
  }),
  n$ = M({
    $prefix$: '',
    $test$: t => Vn(t),
    $collect$: (t, e, n) => {
      A(t.$qrl$, e, n),
        t.$state$ &&
          (A(t.$state$, e, n),
          n === !0 && t.$state$ instanceof le && Yt(t.$state$[et], e, !0))
    },
    $serialize$: (t, e) => Di(t, e),
    $prepare$: t => Oi(t),
    $fill$: (t, e) => {
      ;(t.$el$ = e(t.$el$)),
        (t.$qrl$ = e(t.$qrl$)),
        t.$state$ && (t.$state$ = e(t.$state$))
    },
  }),
  s$ = M({
    $prefix$: '',
    $test$: t => Zc(t),
    $collect$: (t, e, n) => {
      A(t.value, e, n), A(t._resolved, e, n)
    },
    $serialize$: (t, e) => jc(t, e),
    $prepare$: t => t$(t),
    $fill$: (t, e) => {
      if (t._state === 'resolved')
        (t._resolved = e(t._resolved)), (t.value = Promise.resolve(t._resolved))
      else if (t._state === 'rejected') {
        const n = Promise.reject(t._error)
        n.catch(() => null), (t._error = e(t._error)), (t.value = n)
      }
    },
  }),
  o$ = M({
    $prefix$: '',
    $test$: t => t instanceof URL,
    $serialize$: t => t.href,
    $prepare$: t => new URL(t),
  }),
  r$ = M({
    $prefix$: '',
    $test$: t => t instanceof Date,
    $serialize$: t => t.toISOString(),
    $prepare$: t => new Date(t),
  }),
  i$ = M({
    $prefix$: '\x07',
    $test$: t => t instanceof RegExp,
    $serialize$: t => `${t.flags} ${t.source}`,
    $prepare$: t => {
      const e = t.indexOf(' '),
        n = t.slice(e + 1),
        s = t.slice(0, e)
      return new RegExp(n, s)
    },
  }),
  c$ = M({
    $prefix$: '',
    $test$: t => t instanceof Error,
    $serialize$: t => t.message,
    $prepare$: t => {
      const e = new Error(t)
      return (e.stack = void 0), e
    },
  }),
  $$ = M({
    $prefix$: '',
    $test$: t => !!t && typeof t == 'object' && Qs(t),
    $prepare$: (t, e, n) => n,
  }),
  Fe = Symbol('serializable-data'),
  l$ = M({
    $prefix$: '',
    $test$: t => $s(t),
    $serialize$: (t, e) => {
      const [n] = t[Fe]
      return os(n, { $getObjId$: e })
    },
    $prepare$: (t, e) => {
      const n = tn(t, e.$containerEl$)
      return on(n)
    },
    $fill$: (t, e) => {
      var s
      const [n] = t[Fe]
      ;(s = n.$capture$) != null &&
        s.length &&
        ((n.$captureRef$ = n.$capture$.map(e)), (n.$capture$ = null))
    },
  }),
  a$ = M({
    $prefix$: '',
    $test$: t => t instanceof hn,
    $collect$: (t, e, n) => {
      if (t.$args$) for (const s of t.$args$) A(s, e, n)
    },
    $serialize$: (t, e, n) => {
      const s = ri(t)
      let o = n.$inlinedFunctions$.indexOf(s)
      return (
        o < 0 &&
          ((o = n.$inlinedFunctions$.length), n.$inlinedFunctions$.push(s)),
        qt(t.$args$, e, ' ') + ' @' + Nt(o)
      )
    },
    $prepare$: t => {
      const e = t.split(' '),
        n = e.slice(0, -1),
        s = e[e.length - 1]
      return new hn(s, n, s)
    },
    $fill$: (t, e) => {
      t.$func$, (t.$func$ = e(t.$func$)), (t.$args$ = t.$args$.map(e))
    },
  }),
  u$ = M({
    $prefix$: '',
    $test$: t => t instanceof le,
    $collect$: (t, e, n) => (
      A(t.untrackedValue, e, n),
      n === !0 && !(t[oe] & Xi) && Yt(t[et], e, !0),
      t
    ),
    $serialize$: (t, e) => e(t.untrackedValue),
    $prepare$: (t, e) => {
      var n
      return new le(
        t,
        (n = e == null ? void 0 : e.$subsManager$) == null
          ? void 0
          : n.$createManager$(),
        0,
      )
    },
    $subs$: (t, e) => {
      t[et].$addSubs$(e)
    },
    $fill$: (t, e) => {
      t.untrackedValue = e(t.untrackedValue)
    },
  }),
  f$ = M({
    $prefix$: '',
    $test$: t => t instanceof mn,
    $collect$(t, e, n) {
      if ((A(t.ref, e, n), Ko(t.ref))) {
        const s = B(t.ref)
        T$(e.$containerState$.$subsManager$, s, n) && A(t.ref[t.prop], e, n)
      }
      return t
    },
    $serialize$: (t, e) => `${e(t.ref)} ${t.prop}`,
    $prepare$: t => {
      const [e, n] = t.split(' ')
      return new mn(e, n)
    },
    $fill$: (t, e) => {
      t.ref = e(t.ref)
    },
  }),
  d$ = M({
    $prefix$: '',
    $test$: t => typeof t == 'number',
    $serialize$: t => String(t),
    $prepare$: t => Number(t),
  }),
  p$ = M({
    $prefix$: '',
    $test$: t => t instanceof URLSearchParams,
    $serialize$: t => t.toString(),
    $prepare$: t => new URLSearchParams(t),
  }),
  h$ = M({
    $prefix$: '',
    $test$: t => typeof FormData < 'u' && t instanceof globalThis.FormData,
    $serialize$: t => {
      const e = []
      return (
        t.forEach((n, s) => {
          e.push(typeof n == 'string' ? [s, n] : [s, n.name])
        }),
        JSON.stringify(e)
      )
    },
    $prepare$: t => {
      const e = JSON.parse(t),
        n = new FormData()
      for (const [s, o] of e) n.append(s, o)
      return n
    },
  }),
  m$ = M({
    $prefix$: '',
    $test$: t => Ot(t),
    $collect$: (t, e, n) => {
      A(t.children, e, n),
        A(t.props, e, n),
        A(t.immutableProps, e, n),
        A(t.key, e, n)
      let s = t.type
      s === fe ? (s = ':slot') : s === Re && (s = ':fragment'), A(s, e, n)
    },
    $serialize$: (t, e) => {
      let n = t.type
      return (
        n === fe ? (n = ':slot') : n === Re && (n = ':fragment'),
        `${e(n)} ${e(t.props)} ${e(t.immutableProps)} ${e(t.key)} ${e(t.children)} ${t.flags}`
      )
    },
    $prepare$: t => {
      const [e, n, s, o, r, i] = t.split(' ')
      return new Dt(e, n, s, r, parseInt(i, 10), o)
    },
    $fill$: (t, e) => {
      ;(t.type = k$(e(t.type))),
        (t.props = e(t.props)),
        (t.immutableProps = e(t.immutableProps)),
        (t.key = e(t.key)),
        (t.children = e(t.children))
    },
  }),
  g$ = M({
    $prefix$: '',
    $test$: t => typeof t == 'bigint',
    $serialize$: t => t.toString(),
    $prepare$: t => BigInt(t),
  }),
  y$ = M({
    $prefix$: '',
    $test$: t => t instanceof Uint8Array,
    $serialize$: t => {
      let e = ''
      for (const n of t) e += String.fromCharCode(n)
      return btoa(e).replace(/=+$/, '')
    },
    $prepare$: t => {
      const e = atob(t),
        n = new Uint8Array(e.length)
      let s = 0
      for (const o of e) n[s++] = o.charCodeAt(0)
      return n
    },
    $fill$: void 0,
  }),
  Gt = Symbol(),
  v$ = M({
    $prefix$: '',
    $test$: t => t instanceof Set,
    $collect$: (t, e, n) => {
      t.forEach(s => A(s, e, n))
    },
    $serialize$: (t, e) => Array.from(t).map(e).join(' '),
    $prepare$: t => {
      const e = new Set()
      return (e[Gt] = t), e
    },
    $fill$: (t, e) => {
      const n = t[Gt]
      t[Gt] = void 0
      const s = n.length === 0 ? [] : n.split(' ')
      for (const o of s) t.add(e(o))
    },
  }),
  S$ = M({
    $prefix$: '',
    $test$: t => t instanceof Map,
    $collect$: (t, e, n) => {
      t.forEach((s, o) => {
        A(s, e, n), A(o, e, n)
      })
    },
    $serialize$: (t, e) => {
      const n = []
      return (
        t.forEach((s, o) => {
          n.push(e(o) + ' ' + e(s))
        }),
        n.join(' ')
      )
    },
    $prepare$: t => {
      const e = new Map()
      return (e[Gt] = t), e
    },
    $fill$: (t, e) => {
      const n = t[Gt]
      t[Gt] = void 0
      const s = n.length === 0 ? [] : n.split(' ')
      s.length % 2
      for (let o = 0; o < s.length; o += 2) t.set(e(s[o]), e(s[o + 1]))
    },
  }),
  w$ = M({
    $prefix$: '\x1B',
    $test$: t => !!Uo(t) || t === en,
    $serialize$: t => t,
    $prepare$: t => t,
  }),
  is = [
    e$,
    n$,
    s$,
    o$,
    r$,
    i$,
    c$,
    $$,
    l$,
    a$,
    u$,
    f$,
    d$,
    p$,
    h$,
    m$,
    g$,
    v$,
    S$,
    w$,
    y$,
  ],
  Rs = (() => {
    const t = []
    return (
      is.forEach(e => {
        const n = e.$prefixCode$
        for (; t.length < n; ) t.push(void 0)
        t.push(e)
      }),
      t
    )
  })()
function Uo(t) {
  if (typeof t == 'string') {
    const e = t.charCodeAt(0)
    if (e < Rs.length) return Rs[e]
  }
}
const b$ = is.filter(t => t.$collect$),
  E$ = (t, e, n) => {
    for (const s of b$) if (s.$test$(t)) return s.$collect$(t, e, n), !0
    return !1
  },
  x$ = (t, e, n, s) => {
    for (const o of is)
      if (o.$test$(t)) {
        let r = o.$prefixChar$
        return o.$serialize$ && (r += o.$serialize$(t, e, n, s)), r
      }
    if (typeof t == 'string') return t
  },
  Ho = (t, e) => {
    const n = new Map(),
      s = new Map()
    return {
      prepare(o) {
        const r = Uo(o)
        if (r) {
          const i = r.$prepare$(o.slice(1), t, e)
          return r.$fill$ && n.set(i, r), r.$subs$ && s.set(i, r), i
        }
        return o
      },
      subs(o, r) {
        const i = s.get(o)
        return !!i && (i.$subs$(o, r, t), !0)
      },
      fill(o, r) {
        const i = n.get(o)
        return !!i && (i.$fill$(o, r, t), !0)
      },
    }
  },
  _$ = {
    '!': (t, e) => e.$proxyMap$.get(t) ?? Nn(t, e),
    '~': t => Promise.resolve(t),
    _: t => Promise.reject(t),
  },
  T$ = (t, e, n) => {
    if (typeof n == 'boolean') return n
    const s = t.$groupToManagers$.get(n)
    return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== e)
  },
  k$ = t => (t === ':slot' ? fe : t === ':fragment' ? Re : t),
  Bo = new WeakSet(),
  Vo = new WeakSet(),
  Go = t => Bo.has(t),
  Ko = t => Vo.has(t),
  nn = t => (t != null && Bo.add(t), t),
  q$ = t => (Vo.add(t), t),
  sn = t => (Mt(t) ? (jt(t) ?? t) : t),
  jt = t => t[an],
  B = t => t[et],
  Jo = t => t[Wt],
  I$ = (t, e) => {
    const n = t[0],
      s = typeof t[1] == 'string' ? t[1] : e(t[1])
    if (!s) return
    let o = n + ' ' + s,
      r
    if (n === 0) r = t[2]
    else {
      const i = e(t[2])
      if (!i) return
      n <= 2
        ? ((r = t[5]), (o += ` ${i} ${Ns(e(t[3]))} ${t[4]}`))
        : n <= 4 &&
          ((r = t[4]),
          (o += ` ${i} ${typeof t[3] == 'string' ? t[3] : Ns(e(t[3]))}`))
    }
    return r && (o += ` ${encodeURI(r)}`), o
  },
  A$ = (t, e) => {
    const n = t.split(' '),
      s = parseInt(n[0], 10)
    n.length >= 2
    const o = e(n[1])
    if (!o || (Vn(o) && !o.$el$)) return
    const r = [s, o]
    return (
      s === 0
        ? (n.length <= 3, r.push(ln(n[2])))
        : s <= 2
          ? (n.length === 5 || n.length,
            r.push(e(n[2]), e(n[3]), n[4], ln(n[5])))
          : s <= 4 &&
            (n.length === 4 || n.length, r.push(e(n[2]), e(n[3]), ln(n[4]))),
      r
    )
  },
  ln = t => {
    if (t !== void 0) return decodeURI(t)
  },
  R$ = t => {
    const e = new Map()
    return {
      $groupToManagers$: e,
      $createManager$: s => new N$(e, t, s),
      $clearSub$: s => {
        const o = e.get(s)
        if (o) {
          for (const r of o) r.$unsubGroup$(s)
          e.delete(s), (o.length = 0)
        }
      },
      $clearSignal$: s => {
        const o = e.get(s[1])
        if (o) for (const r of o) r.$unsubEntry$(s)
      },
    }
  }
class N$ {
  constructor(e, n, s) {
    E(this, '$groupToManagers$')
    E(this, '$containerState$')
    E(this, '$subs$')
    ;(this.$groupToManagers$ = e),
      (this.$containerState$ = n),
      (this.$subs$ = []),
      s && this.$addSubs$(s)
  }
  $addSubs$(e) {
    this.$subs$.push(...e)
    for (const n of this.$subs$) this.$addToGroup$(n[1], this)
  }
  $addToGroup$(e, n) {
    let s = this.$groupToManagers$.get(e)
    s || this.$groupToManagers$.set(e, (s = [])), s.includes(n) || s.push(n)
  }
  $unsubGroup$(e) {
    const n = this.$subs$
    for (let s = 0; s < n.length; s++) n[s][1] === e && (n.splice(s, 1), s--)
  }
  $unsubEntry$(e) {
    const [n, s, o, r] = e,
      i = this.$subs$
    if (n === 1 || n === 2) {
      const c = e[4]
      for (let $ = 0; $ < i.length; $++) {
        const l = i[$]
        l[0] === n &&
          l[1] === s &&
          l[2] === o &&
          l[3] === r &&
          l[4] === c &&
          (i.splice($, 1), $--)
      }
    } else if (n === 3 || n === 4)
      for (let c = 0; c < i.length; c++) {
        const $ = i[c]
        $[0] === n &&
          $[1] === s &&
          $[2] === o &&
          $[3] === r &&
          (i.splice(c, 1), c--)
      }
  }
  $addSub$(e, n) {
    const s = this.$subs$,
      o = e[1]
    ;(e[0] === 0 && s.some(([r, i, c]) => r === 0 && i === o && c === n)) ||
      (s.push((Xo = [...e, n])), this.$addToGroup$(o, this))
  }
  $notifySubs$(e) {
    const n = this.$subs$
    for (const s of n) {
      const o = s[s.length - 1]
      ;(e && o && o !== e) || Si(s, this.$containerState$)
    }
  }
}
let Xo
function C$() {
  return Xo
}
const Ns = t => {
    if (t == null) throw It('must be non null', t)
    return t
  },
  cs = t => typeof t == 'function' && typeof t.getSymbol == 'function',
  M$ = t => cs(t) && t.$symbol$ == '<sync>',
  we = (t, e, n, s, o, r, i) => {
    let c
    const $ = async function (...f) {
        return await d.call(this, st())(...f)
      },
      l = f => (c || (c = f), c),
      a = f =>
        typeof f != 'function' ||
        (!(o != null && o.length) && !(r != null && r.length))
          ? f
          : function (...v) {
              let S = st()
              if (S) {
                const p = S.$qrl$
                S.$qrl$ = $
                const b = S.$event$
                S.$event$ === void 0 && (S.$event$ = this)
                try {
                  return f.apply(this, v)
                } finally {
                  ;(S.$qrl$ = p), (S.$event$ = b)
                }
              }
              return (
                (S = G()),
                (S.$qrl$ = $),
                (S.$event$ = this),
                W.call(this, S, f, ...v)
              )
            },
      u = async f => {
        if (n !== null) return n
        if ((f && l(f), t === '')) {
          const p = c.getAttribute(Hs),
            b = Bs(c.ownerDocument, p)
          return ($.resolved = n = b[Number(e)])
        }
        const v = O$(),
          S = st()
        if (s !== null) n = s().then(p => ($.resolved = n = a(p[e])))
        else {
          const p = qn().importSymbol(c, t, e)
          n = q(p, b => ($.resolved = n = a(b)))
        }
        return (
          typeof n == 'object' &&
            L(n) &&
            n.then(
              () => P$(e, S == null ? void 0 : S.$element$, v),
              p => {
                throw (
                  (console.error(`qrl ${e} failed to load`, p), (n = null), p)
                )
              },
            ),
          n
        )
      },
      h = f => (n !== null ? n : u(f))
    function d(f, v) {
      return (...S) =>
        q(h(), p => {
          if (!Z(p)) throw Q(10)
          if (v && v() === !1) return
          const b = m(f)
          return W.call(this, b, p, ...S)
        })
    }
    const m = f => (f == null ? G() : C(f) ? bo(f) : f),
      y = i ?? e,
      g = Yo(y)
    return (
      Object.assign($, {
        getSymbol: () => y,
        getHash: () => g,
        getCaptured: () => r,
        resolve: u,
        $resolveLazy$: h,
        $setContainer$: l,
        $chunk$: t,
        $symbol$: e,
        $refSymbol$: i,
        $hash$: g,
        getFn: d,
        $capture$: o,
        $captureRef$: r,
        dev: null,
        resolved: void 0,
      }),
      n && (n = q(n, f => ($.resolved = n = a(f)))),
      $
    )
  },
  Yo = t => {
    const e = t.lastIndexOf('_')
    return e > -1 ? t.slice(e + 1) : t
  }
const Cs = new Set(),
  P$ = (t, e, n) => {
    Cs.has(t) ||
      (Cs.add(t), D$('qsymbol', { symbol: t, element: e, reqTime: n }))
  },
  D$ = (t, e) => {
    Y() ||
      typeof document != 'object' ||
      document.dispatchEvent(new CustomEvent(t, { bubbles: !1, detail: e }))
  },
  O$ = () => (Y() ? 0 : typeof performance == 'object' ? performance.now() : 0),
  L$ = t => t,
  Zo = function (t, e) {
    return (
      e === void 0 && (e = t.toString()),
      (t.serialized = e),
      we('', '<sync>', t, null, null, null, null)
    )
  },
  on = t => {
    function e(n, s, o) {
      const r = t.$hash$.slice(0, 4) + ':' + (s || '')
      return dt(
        pt,
        { [xr]: t, [j]: n[j], [N]: n[N], children: n.children, props: n },
        o,
        r,
      )
    }
    return (e[Fe] = [t]), e
  },
  $s = t => typeof t == 'function' && t[Fe] !== void 0,
  be = (t, e) => {
    const { val: n, set: s, iCtx: o } = Pt()
    if (n != null) return n
    const r = Z(t) ? W(void 0, t) : t
    if ((e == null ? void 0 : e.reactive) === !1) return s(r), r
    {
      const i = Nn(
        r,
        o.$renderCtx$.$static$.$containerState$,
        ((e == null ? void 0 : e.deep) ?? !0) ? 1 : 0,
      )
      return s(i), i
    }
  }
function ls(t, e) {
  var s
  const n = st()
  return (
    ((s = n == null ? void 0 : n.$renderCtx$) == null
      ? void 0
      : s.$static$.$containerState$.$serverData$[t]) ?? e
  )
}
const Ms = new Map(),
  z$ = (t, e) => {
    let n = Ms.get(e)
    return n || Ms.set(e, (n = F$(t, e))), n
  },
  F$ = (t, e) => {
    const n = t.length,
      s = [],
      o = []
    let r = 0,
      i = r,
      c = Kt,
      $ = 0
    for (; r < n; ) {
      const d = r
      let m = t.charCodeAt(r++)
      m === J$ && (r++, (m = or))
      const y = tl[c]
      for (let g = 0; g < y.length; g++) {
        const f = y[g],
          [v, S, p] = f
        if (
          (v === $ || v === T || (v === Qe && ke($)) || (v === Sn && Ds($))) &&
          (S === m ||
            S === T ||
            (S === Qe && ke(m)) ||
            (S === lt && !ke(m) && m !== us) ||
            (S === Sn && Ds(m))) &&
          (f.length == 3 || u(f))
        ) {
          if ((f.length > 3 && (m = t.charCodeAt(r - 1)), p === z || p == _t)) {
            p === _t &&
              (c !== jo || h()
                ? Ps(m) || a(r - (S == lt ? 1 : S == wn ? 2 : 0))
                : (Ps(m) ? l(r - 2) : a(r - 2), i++)),
              S === lt && (r--, (m = $))
            do (c = o.pop() || Kt), c === Tt && (l(r - 1), i++)
            while (Q$(c))
          } else
            o.push(c),
              c === Tt && p === Kt ? (l(r - 8), (i = r)) : p === tr && a(d),
              (c = p)
          break
        }
      }
      $ = m
    }
    return l(r), s.join('')
    function l(d) {
      s.push(t.substring(i, d)), (i = d)
    }
    function a(d) {
      c === Tt || h() || (l(d), s.push('.', '⭐️', e))
    }
    function u(d) {
      let m = 0
      if (t.charCodeAt(r) === bn) {
        for (let y = 1; y < 10; y++)
          if (t.charCodeAt(r + y) === bn) {
            m = y + 1
            break
          }
      }
      t: for (let y = 3; y < d.length; y++) {
        const g = d[y]
        for (let f = 0; f < g.length; f++)
          if ((t.charCodeAt(r + f + m) | Y$) !== g.charCodeAt(f)) continue t
        return (r += g.length + m), !0
      }
      return !1
    }
    function h() {
      return o.indexOf(Tt) !== -1 || o.indexOf(as) !== -1
    }
  },
  ke = t =>
    (t >= V$ && t <= G$) ||
    (t >= or && t <= K$) ||
    (t >= Z$ && t <= j$) ||
    t >= 128 ||
    t === X$ ||
    t === bn,
  Ps = t => t === Ft || t === us || t === rr || t === sr || ke(t),
  Q$ = t => t === er || t === as || t === nr || t === Tt,
  Ds = t => t === B$ || t === W$ || t === U$ || t === H$,
  Kt = 0,
  jo = 2,
  Tt = 5,
  tr = 6,
  as = 10,
  er = 11,
  nr = 12,
  z = 17,
  _t = 18,
  T = 0,
  Qe = 1,
  lt = 2,
  Sn = 3,
  W$ = 9,
  U$ = 10,
  H$ = 13,
  B$ = 32,
  sr = 35,
  wn = 41,
  bn = 45,
  us = 46,
  V$ = 48,
  G$ = 57,
  Ft = 58,
  or = 65,
  K$ = 90,
  rr = 91,
  J$ = 92,
  X$ = 95,
  Y$ = 32,
  Z$ = 97,
  j$ = 122,
  xt = [
    [T, 39, 14],
    [T, 34, 15],
    [T, 47, 16, '*'],
  ],
  tl = [
    [
      [T, 42, jo],
      [T, rr, 7],
      [T, Ft, tr, ':', 'before', 'after', 'first-letter', 'first-line'],
      [T, Ft, Tt, 'global'],
      [T, Ft, 3, 'has', 'host-context', 'not', 'where', 'is', 'matches', 'any'],
      [T, Ft, 4],
      [T, Qe, 1],
      [T, us, 1],
      [T, sr, 1],
      [T, 64, as, 'keyframe'],
      [T, 64, er, 'media', 'supports', 'container'],
      [T, 64, nr],
      [T, 123, 13],
      [47, 42, 16],
      [T, 59, z],
      [T, 125, z],
      [T, wn, z],
      ...xt,
    ],
    [[T, lt, _t]],
    [[T, lt, _t]],
    [
      [T, 40, Kt],
      [T, lt, _t],
    ],
    [
      [T, 40, 8],
      [T, lt, _t],
    ],
    [
      [T, 40, Kt],
      [T, lt, z],
    ],
    [[T, lt, z]],
    [
      [T, 93, _t],
      [T, 39, 14],
      [T, 34, 15],
    ],
    [[T, wn, z], ...xt],
    [[T, 125, z], ...xt],
    [[T, 125, z], [Sn, Qe, 1], [T, Ft, Tt, 'global'], [T, 123, 13], ...xt],
    [[T, 123, Kt], [T, 59, z], ...xt],
    [[T, 59, z], [T, 123, 9], ...xt],
    [[T, 125, z], [T, 123, 13], [T, 40, 8], ...xt],
    [[T, 39, z]],
    [[T, 34, z]],
    [[42, 47, z]],
  ],
  el = t => {
    ir(t, e => e, !1)
  },
  Ql = t => ({ scopeId: '⭐️' + ir(t, z$, !0) }),
  ir = (t, e, n) => {
    const { val: s, set: o, iCtx: r, i, elCtx: c } = Pt()
    if (s) return s
    const $ = Pr(t, i),
      l = r.$renderCtx$.$static$.$containerState$
    if (
      (o($),
      c.$appendStyles$ || (c.$appendStyles$ = []),
      c.$scopeIds$ || (c.$scopeIds$ = []),
      n && c.$scopeIds$.push(Dr($)),
      l.$styleIds$.has($))
    )
      return $
    l.$styleIds$.add($)
    const a = t.$resolveLazy$(l.$containerEl$),
      u = h => {
        c.$appendStyles$,
          c.$appendStyles$.push({ styleId: $, content: e(h, $) })
      }
    return L(a) ? r.$waitOn$.push(a.then(u)) : u(a), $
  },
  nl =
    '((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',
  cr = ct('qc-s'),
  sl = ct('qc-c'),
  $r = ct('qc-ic'),
  lr = ct('qc-h'),
  ar = ct('qc-l'),
  ur = ct('qc-n'),
  ol = ct('qc-a'),
  rl = ct('qc-ir'),
  il = ct('qc-p'),
  cl = L$(Jc('s_iX0Wv91fJIY')),
  $l = () => {
    if (!ls('containerAttributes'))
      throw new Error(
        'PrefetchServiceWorker component must be rendered on the server.',
      )
    Ki()
    const e = me($r)
    if (e.value && e.value.length > 0) {
      const n = e.value.length
      let s = null
      for (let o = n - 1; o >= 0; o--)
        e.value[o].default &&
          (s = dt(e.value[o].default, { children: s }, 1, 'PC_0'))
      return dt(
        Re,
        {
          children: [
            s,
            At(
              'script',
              {
                'document:onQCInit$': cl,
                'document:onQInit$': Zo(() => {
                  ;((o, r) => {
                    var i
                    if (!o._qcs && r.scrollRestoration === 'manual') {
                      o._qcs = !0
                      const c = (i = r.state) == null ? void 0 : i._qCityScroll
                      c && o.scrollTo(c.x, c.y),
                        document.dispatchEvent(new Event('qcinit'))
                    }
                  })(window, history)
                }, '()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}'),
              },
              null,
              null,
              2,
              'PC_1',
            ),
          ],
        },
        1,
        'PC_2',
      )
    }
    return Fn
  },
  Wl = on(at($l, 's_8jOBWsjxgB8')),
  Ee = new Map(),
  ll = 'qaction',
  Os = t => t.pathname + t.search + t.hash,
  mt = (t, e) => new URL(t, e.href),
  En = (t, e) => t.origin === e.origin,
  Ls = t => (t.endsWith('/') ? t : t + '/'),
  fr = ({ pathname: t }, { pathname: e }) => {
    const n = Math.abs(t.length - e.length)
    return n === 0 ? t === e : n === 1 && Ls(t) === Ls(e)
  },
  al = (t, e) => t.search === e.search,
  We = (t, e) => al(t, e) && fr(t, e),
  ul = (t, e, n) => {
    let s = e ?? ''
    return (
      n && (s += (s ? '&' : '?') + ll + '=' + encodeURIComponent(n.id)),
      t + (t.endsWith('/') ? '' : '/') + 'q-data.json' + s
    )
  },
  fl = (t, e) => {
    const n = t.href
    if (typeof n == 'string' && typeof t.target != 'string' && !t.reload)
      try {
        const s = mt(n.trim(), e.url),
          o = mt('', e.url)
        if (En(s, o)) return Os(s)
      } catch (s) {
        console.error(s)
      }
    else if (t.reload) return Os(mt('', e.url))
    return null
  },
  dl = (t, e) => {
    if (t) {
      const n = mt(t, e.url),
        s = mt('', e.url)
      return !We(n, s)
    }
    return !1
  },
  pl = (t, e) => {
    if (t) {
      const n = mt(t, e.url),
        s = mt('', e.url)
      return !fr(n, s)
    }
    return !1
  },
  hl = t => t && typeof t.then == 'function',
  ml = (t, e, n, s) => {
    const o = dr(),
      i = {
        head: o,
        withLocale: c => Ss(s, c),
        resolveValue: c => {
          const $ = c.__id
          if (c.__brand === 'server_loader' && !($ in t.loaders))
            throw new Error(
              'You can not get the returned data of a loader that has not been executed for this request.',
            )
          const l = t.loaders[$]
          if (hl(l))
            throw new Error(
              'Loaders returning a promise can not be resolved for the head function.',
            )
          return l
        },
        ...e,
      }
    for (let c = n.length - 1; c >= 0; c--) {
      const $ = n[c] && n[c].head
      $ &&
        (typeof $ == 'function'
          ? zs(
              o,
              Ss(s, () => $(i)),
            )
          : typeof $ == 'object' && zs(o, $))
    }
    return i.head
  },
  zs = (t, e) => {
    typeof e.title == 'string' && (t.title = e.title),
      xe(t.meta, e.meta),
      xe(t.links, e.links),
      xe(t.styles, e.styles),
      xe(t.scripts, e.scripts),
      Object.assign(t.frontmatter, e.frontmatter)
  },
  xe = (t, e) => {
    if (Array.isArray(e))
      for (const n of e) {
        if (typeof n.key == 'string') {
          const s = t.findIndex(o => o.key === n.key)
          if (s > -1) {
            t[s] = n
            continue
          }
        }
        t.push(n)
      }
  },
  dr = () => ({
    title: '',
    meta: [],
    links: [],
    styles: [],
    scripts: [],
    frontmatter: {},
  }),
  gl = t => {},
  yl = async (t, e, n) => {
    const s = t.pathname,
      o = t.search,
      r = ul(s, o, n == null ? void 0 : n.action)
    let i
    ;(n != null && n.action) || (i = Ee.get(r)), n == null || n.prefetchSymbols
    let c
    if (!i) {
      const $ = vl(n == null ? void 0 : n.action)
      n != null && n.action && (n.action.data = void 0),
        (i = fetch(r, $).then(l => {
          if (l.redirected) {
            const a = new URL(l.url)
            if (
              !a.pathname.endsWith('/q-data.json') ||
              a.origin !== location.origin
            ) {
              location.href = a.href
              return
            }
          }
          if ((l.headers.get('content-type') || '').includes('json'))
            return l.text().then(a => {
              const u = ai(a, e)
              if (!u) {
                location.href = t.href
                return
              }
              if ((n != null && n.clearCache && Ee.delete(r), u.redirect))
                location.href = u.redirect
              else if (n != null && n.action) {
                const { action: h } = n,
                  d = u.loaders[h.id]
                c = () => {
                  h.resolve({ status: l.status, result: d })
                }
              }
              return u
            })
          ;(n == null ? void 0 : n.isPrefetch) !== !0 &&
            (location.href = t.href)
        })),
        (n != null && n.action) || Ee.set(r, i)
    }
    return i.then($ => ($ || Ee.delete(r), c && c(), $))
  },
  vl = t => {
    const e = t == null ? void 0 : t.data
    return e
      ? e instanceof FormData
        ? { method: 'POST', body: e }
        : {
            method: 'POST',
            body: JSON.stringify(e),
            headers: { 'Content-Type': 'application/json, charset=UTF-8' },
          }
      : {
          cache: 'no-cache',
          headers: { 'Cache-Control': 'no-cache', Pragma: 'no-cache' },
        }
  },
  Ul = () => me(lr),
  Sl = () => me(ar),
  wl = () => me(ur),
  bl = () => nn(ls('qwikcity')),
  Fs = {},
  _e = { navCount: 0 },
  El = ':root{view-transition-name:none}',
  xl = t => {},
  _l = async (t, e) => {
    const [n, s, o, r] = Xe(),
      {
        type: i = 'link',
        forceReload: c = t === void 0,
        replaceState: $ = !1,
        scroll: l = !0,
      } = typeof e == 'object' ? e : { forceReload: e }
    _e.navCount++
    const a = o.value.dest,
      u = t === void 0 ? a : typeof t == 'number' ? t : mt(t, r.url)
    if (Fs.$cbs$ && (c || typeof u == 'number' || !We(u, a) || !En(u, a))) {
      const h = _e.navCount,
        d = await Promise.all([...Fs.$cbs$.values()].map(m => m(u)))
      if (h !== _e.navCount || d.some(Boolean)) {
        h === _e.navCount && i === 'popstate' && history.pushState(null, '', a)
        return
      }
    }
    if (typeof u != 'number' && En(u, a) && !(!c && We(u, a)))
      return (
        (o.value = {
          type: i,
          dest: u,
          forceReload: c,
          replaceState: $,
          scroll: l,
        }),
        (n.value = void 0),
        (r.isNavigating = !0),
        new Promise(h => {
          s.r = h
        })
      )
  },
  Tl = ({ track: t }) => {
    const [e, n, s, o, r, i, c, $, l, a, u] = Xe()
    async function h() {
      const [m, y] = t(() => [a.value, e.value]),
        g = Wi(''),
        f = u.url,
        v = y ? 'form' : m.type
      m.replaceState
      let S,
        p,
        b = null
      if (
        ((S = new URL(m.dest, u.url)), (b = r.loadedRoute), (p = r.response), b)
      ) {
        const [x, k, w, _] = b,
          I = w,
          R = I[I.length - 1],
          P = v === 'form' && !We(S, f)
        m.dest.search && !P && (S.search = m.dest.search),
          (u.prevUrl = f),
          (u.url = S),
          (u.params = { ...k }),
          (a.untrackedValue = { type: v, dest: S })
        const O = ml(p, u, I, g)
        ;(n.headings = R.headings),
          (n.menu = _),
          (s.value = nn(I)),
          (o.links = O.links),
          (o.meta = O.meta),
          (o.styles = O.styles),
          (o.scripts = O.scripts),
          (o.title = O.title),
          (o.frontmatter = O.frontmatter)
      }
    }
    return h()
  },
  kl = t => {
    el(at(El, 's_DBNWDwXgCow'))
    const e = bl()
    if (!(e != null && e.params))
      throw new Error(
        'Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237',
      )
    const n = ls('url')
    if (!n) throw new Error('Missing Qwik URL Env Data')
    const s = new URL(n),
      o = be(
        { url: s, params: e.params, isNavigating: !1, prevUrl: void 0 },
        { deep: !1 },
      ),
      r = {},
      i = q$(be(e.response.loaders, { deep: !1 })),
      c = cn({
        type: 'initial',
        dest: s,
        forceReload: !1,
        replaceState: !1,
        scroll: !0,
      }),
      $ = be(dr),
      l = be({ headings: void 0, menu: void 0 }),
      a = cn(),
      u = e.response.action,
      h = u ? e.response.loaders[u] : void 0,
      d = cn(
        h
          ? {
              id: u,
              data: e.response.formData,
              output: { result: h, status: e.response.status },
            }
          : void 0,
      ),
      m = at(xl, 's_wxKQczXDgGA'),
      y = at(_l, 's_SHMqyqh5H4E', [d, r, c, o])
    return (
      $t(sl, l),
      $t($r, a),
      $t(lr, $),
      $t(ar, o),
      $t(ur, y),
      $t(cr, i),
      $t(ol, d),
      $t(rl, c),
      $t(il, m),
      Ni(at(Tl, 's_7V8C6m30W8E', [d, l, a, $, e, y, i, r, t, c, o])),
      dt(fe, null, 3, 'PC_3')
    )
  },
  Hl = on(at(kl, 's_D4XD62ic8NY')),
  ql = (t, e) => {
    var n
    if (!((n = navigator.connection) != null && n.saveData) && e && e.href) {
      const s = new URL(e.href)
      gl(s.pathname),
        e.hasAttribute('data-prefetch') &&
          yl(s, e, { prefetchSymbols: !1, isPrefetch: !0 })
    }
  },
  Il = async (t, e) => {
    const [n, s, o, r] = Xe()
    t.defaultPrevented &&
      (e.hasAttribute('q:nbs')
        ? await n(location.href, { type: 'popstate' })
        : e.href &&
          (e.setAttribute('aria-pressed', 'true'),
          await n(e.href, { forceReload: s, replaceState: o, scroll: r }),
          e.removeAttribute('aria-pressed')))
  },
  Al = t => {
    const e = wl(),
      n = Sl(),
      {
        onClick$: s,
        prefetch: o,
        reload: r,
        replaceState: i,
        scroll: c,
        ...$
      } = (() => t)(),
      l = se(() => fl({ ...$, reload: r }, n))
    $.href = l || t.href
    const a = se(() => (!!l && o !== !1 && o !== 'js' && dl(l, n)) || void 0),
      h = se(() => a || (!!l && o !== !1 && pl(l, n)))
        ? at(ql, 's_JQka7qFSgTA')
        : void 0,
      d = l
        ? Zo((y, g) => {
            y.metaKey ||
              y.ctrlKey ||
              y.shiftKey ||
              y.altKey ||
              y.preventDefault()
          }, '(event,target)=>{if(!(event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)){event.preventDefault();}}')
        : void 0
    return ii(
      'a',
      {
        'q:link': !!l,
        ...$,
        'data-prefetch': a,
        children: dt(fe, null, 3, 'PC_5'),
        onClick$: [d, s, l ? at(Il, 's_hKb0i0wO1HM', [e, r, i, c]) : void 0],
        onMouseOver$: [$.onMouseOver$, h],
        onFocus$: [$.onFocus$, h],
        onQVisible$: [$.onQVisible$, h],
      },
      null,
      0,
      'PC_6',
    )
  },
  Bl = on(at(Al, 's_9C3L9HsfW0c')),
  Vl = t =>
    At(
      'script',
      { nonce: Yi(t, 'nonce') },
      { dangerouslySetInnerHTML: nl },
      null,
      3,
      'PC_7',
    ),
  Gl = (t, ...e) => {
    const { id: n, validators: s } = Rl(e, t)
    function o() {
      return me(cr, r => {
        if (!(n in r))
          throw new Error(`routeLoader$ "${t.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.dev/qwikcity/route-loader/

    If your are managing reusable logic or a library it is essential that this function is re-exported from within 'layout.tsx' or 'index.tsx file of the existing route otherwise it will not run or throw exception.
    For more information check: https://qwik.dev/docs/cookbook/re-exporting-loaders/`)
        return _o(r, n)
      })
    }
    return (
      (o.__brand = 'server_loader'),
      (o.__qrl = t),
      (o.__validators = s),
      (o.__id = n),
      Object.freeze(o),
      o
    )
  },
  Rl = (t, e) => {
    let n
    const s = []
    if (t.length === 1) {
      const o = t[0]
      o &&
        typeof o == 'object' &&
        ('validate' in o
          ? s.push(o)
          : ((n = o.id), o.validation && s.push(...o.validation)))
    } else t.length > 1 && s.push(...t.filter(o => !!o))
    return (
      typeof n == 'string' ? (n = `id_${n}`) : (n = e.getHash()),
      { validators: s.reverse(), id: n }
    )
  }
export {
  co as A,
  el as B,
  ms as C,
  Ol as D,
  Mc as E,
  Re as F,
  Dl as G,
  Ul as H,
  Wl as I,
  Vl as J,
  Bl as L,
  Hl as Q,
  ci as R,
  fe as S,
  dt as _,
  Fl as a,
  At as b,
  on as c,
  Jc as d,
  Ql as e,
  Xe as f,
  ii as g,
  N as h,
  at as i,
  be as j,
  Yi as k,
  Ll as l,
  ct as m,
  nn as n,
  me as o,
  Ki as p,
  $t as q,
  Gl as r,
  _o as s,
  Sl as t,
  cn as u,
  Ni as v,
  Fn as w,
  Ii as x,
  vs as y,
  zl as z,
}
