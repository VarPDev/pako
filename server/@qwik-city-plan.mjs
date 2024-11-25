import {
  c as b,
  i as d,
  u as z,
  a as ne,
  _ as o,
  b as l,
  S as L,
  F as p,
  d as F,
  e as j,
  f as T,
  g as V,
  h as n,
  j as We,
  n as ve,
  k as y,
  l as g,
  m as Se,
  o as te,
  L as _,
  r as O,
  p as R,
  q as we,
  s as B,
  t as re,
  v as Qe,
  R as ye,
  w as Ue,
  x as N,
  y as xe,
  z as Je,
  A as U,
  B as Ye,
} from './q-36b0b1b5.js'
import { set as Z, isWithinInterval as ke, format as Ge } from 'date-fns'
import {
  safeParseAsync as Xe,
  getDotPath as Ke,
  object as et,
  pipe as J,
  string as Y,
  minLength as G,
  email as tt,
} from 'valibot'
import lt from 'number-to-words'
import {
  createContext as at,
  Component as nt,
  createRef as rt,
  createElement as W,
} from 'react'
import { renderToString as ot } from 'react-dom/server'
import { jsx as X } from 'react/jsx-runtime'
import { SRCImage as it } from 'react-datocms'
import { StructuredText as st } from 'react-datocms/structured-text'
const ct = e => {
    const t = z(),
      a = z(!1),
      r = { el: t, isVisible: a, observer: null }
    return (
      ne(F('s_CHnWD2D8Ibg', [r])),
      o(
        p,
        {
          children: l(
            'div',
            {
              ref: r.el,
              class: `w-full animation ${e.pop && 'pop'}
      ${r.isVisible.value && 'isVisible'}`,
            },
            null,
            o(L, null, 3, '09_0'),
            1,
            null,
          ),
        },
        1,
        '09_1',
      )
    )
  },
  S = b(d(ct, 's_sdm0n9ZoKr0')),
  ut = `.cat-background{position:fixed;height:170px;width:192.1px;top:50%;left:50%;margin-top:-85px;margin-left:-96px;z-index:-1;opacity:.2}.cat-background .ear{position:absolute;top:-30%;height:60%;width:25%;background:#fff}.cat-background .ear:before,.cat-background .ear:after{content:"";position:absolute;bottom:24%;height:10%;width:5%;border-radius:50%;background:#161616}.cat-background .ear:after{transform-origin:50% 100%}.cat-background .ear--left{left:-7%;border-radius:70% 30% 0% 0%/100% 100% 0% 0%;transform:rotate(-15deg)}.cat-background .ear--left:before,.cat-background .ear--left:after{right:10%}.cat-background .ear--left:after{transform:rotate(-45deg)}.cat-background .ear--right{right:-7%;border-radius:30% 70% 0% 0%/100% 100% 0% 0%;transform:rotate(15deg)}.cat-background .ear--right:before,.cat-background .ear--right:after{left:10%}.cat-background .ear--right:after{transform:rotate(45deg)}.cat-background .face{position:absolute;height:100%;width:100%;background:#161616;border-radius:50%}.cat-background .eye{position:absolute;top:35%;height:30%;width:31%;background:#fff;border-radius:50%/60% 60% 40% 40%}.cat-background .eye:after{content:"";position:absolute;top:0;left:0;height:0;width:100%;border-radius:0 0 50% 50Array/0Array 0 40% 40%;background:#161616;animation:blink 4s infinite ease-in}@keyframes blink{0%{height:0}90%{height:0}92.5%{height:100%}95%{height:0}97.5%{height:100%}to{height:0}}.cat-background .eye:before{content:"";position:absolute;top:60%;height:10%;width:15%;background:#fff;border-radius:50%}.cat-background .eye--left{left:0}.cat-background .eye--left:before{right:-5%}.cat-background .eye--right{right:0}.cat-background .eye--right:before{left:-5%}.cat-background .eye-pupil{position:absolute;top:25%;height:50%;width:20%;background:#161616;border-radius:50%;animation:look-around 4s infinite}@keyframes look-around{0%{transform:translate(0)}5%{transform:translate(50%,-25%)}10%{transform:translate(50%,-25%)}15%{transform:translate(-100%,-25%)}20%{transform:translate(-100%,-25%)}25%{transform:translate(0)}to{transform:translate(0)}}.cat-background .eye--left .eye-pupil{right:30%}.cat-background .eye--right .eye-pupil{left:30%}.cat-background .eye-pupil:after{content:"";position:absolute;top:30%;right:-5%;height:20%;width:35%;border-radius:50%;background:#fff}.cat-background .muzzle{position:absolute;top:60%;left:50%;height:6%;width:10%;background:#fff;transform:translate(-50%);border-radius:50%/30% 30% 70% 70%}
`,
  dt = () => (
    j(d(ut, 's_xTYSAGLBrBU')),
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'cat-background' },
          [
            l('div', null, { class: 'ear ear--left' }, null, 3, null),
            l('div', null, { class: 'ear ear--right' }, null, 3, null),
            l(
              'div',
              null,
              { class: 'face' },
              [
                l(
                  'div',
                  null,
                  { class: 'eye eye--left' },
                  l('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                l(
                  'div',
                  null,
                  { class: 'eye eye--right' },
                  l('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                l('div', null, { class: 'muzzle' }, null, 3, null),
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
      'ev_0',
    )
  ),
  gt = b(d(dt, 's_k9rs7QcCFAU')),
  ht = `.cat-walk-container{position:fixed;z-index:9999;transform:scale(.5);transform-origin:right bottom;animation:init-cat 3s linear 1,walk-around 20s linear 3.2s infinite;right:0;bottom:0}@keyframes init-cat{0%{bottom:83%}to{bottom:0}}@keyframes init-cat-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}.cat-walk-container #tail{position:absolute;margin-left:40px;margin-top:40px;height:60px;width:80px;border:15px solid #d3b897;border-radius:50px;display:inline-block;z-index:0}.cat-walk-container #tail-mask{position:absolute;margin-top:40px;margin-left:100px;height:30px;width:75px;background-color:#fff;z-index:0;text-align:center;padding-top:2px;padding-left:7px;color:#000}.cat-walk-container #tail-end{position:absolute;margin-top:63px;margin-left:130px;height:17px;width:17px;border-radius:50%;background-color:#d3b897;z-index:1}.cat-walk-container #body{position:relative;height:130px;width:110px;background-color:#e9cba7;border-radius:22px;display:inline-block;overflow:hide;z-index:1}.cat-walk-container .ear{position:relative;margin-top:-20px;height:45px;width:50px;background-color:#e9cba7;display:inline-block;z-index:2}.cat-walk-container #ear-left{clip-path:polygon(0 0,0% 100%,100% 60%)}.cat-walk-container #ear-right{margin-left:6px;clip-path:polygon(100% 0,0% 60%,100% 100%)}.cat-walk-container .ear-inner{position:relative;height:30px;width:50px;background-color:#d3b897;z-index:3}.cat-walk-container #ear-inner-left{margin-top:8px;margin-left:5px;clip-path:polygon(0 0,100% 90%,0 100%)}.cat-walk-container #ear-inner-right{margin-top:8px;margin-left:-4px;clip-path:polygon(100% 0%,100% 100%,0 90%)}.cat-walk-container #mask{position:relative;background-color:#e9cba7;margin-top:-29px;height:50px;width:110px;border-radius:50%;z-index:4}.cat-walk-container #patch{position:relative;margin-top:-50px;z-index:5}.cat-walk-container .fur{width:5px;background-color:#c0a98b;display:inline-block}.cat-walk-container .fur:first-of-type{margin-left:40%;height:15px;float:left}.cat-walk-container .fur:nth-of-type(2){margin-left:4px;height:5px;float:left}.cat-walk-container .fur:nth-of-type(3){margin-left:4px;height:10px;float:left}.cat-walk-container #eyes{position:relative;margin-top:30%;z-index:5}.cat-walk-container .eye{height:18px;width:18px;border-radius:50%;background-color:#554d44;display:inline-block}.cat-walk-container #eye-left{margin-left:27%}.cat-walk-container #eye-right{margin-left:10%}.cat-walk-container .shine{height:7px;width:7px;border-radius:50%;background-color:#fff;margin-top:2px;margin-left:1px}.cat-walk-container #whisk-left{display:inline-block}.cat-walk-container .whisker{height:3px;width:25px;background-color:#d3b897;margin-bottom:6px}.cat-walk-container #whisk-one{transform:rotate(15deg)}.cat-walk-container #whisk-three{transform:rotate(-15deg)}.cat-walk-container #nose{position:absolute;margin-left:15%;height:17px;width:18px;background-color:#554d44;clip-path:ellipse(40% 22% at 50% 50%);display:inline-block;z-index:6}.cat-walk-container #whisk-right{display:inline-block;margin-left:56px}.cat-walk-container #whisk-four{transform:rotate(-15deg)}.cat-walk-container #whisk-six{transform:rotate(15deg)}.cat-walk-container #smile{position:relative;margin-left:29%;margin-top:-22%;z-index:5}.cat-walk-container #smile-left-align{display:inline-block;position:absolute}.cat-walk-container #smile-left{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-left{margin-top:-58%;height:4px;width:20px;background-color:#e9cba7}.cat-walk-container #smile-right-align{display:inline-block;margin-left:22px;position:absolute}.cat-walk-container #smile-right{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-right{margin-top:-58%;height:4px;width:24px;background-color:#e9cba7}.cat-walk-container #tongue{position:relative;margin-top:7px;margin-left:auto;margin-right:auto;height:17px;width:15px;border-radius:25px;background-color:#fc90a5;z-index:4}.cat-walk-container #tummy{margin-top:13%;margin-left:auto;margin-right:auto;height:30px;width:60px;border-radius:50px 50px 0 0;background-color:#f4e7d1}.cat-walk-container #credit{position:absolute;font-family:sans-serif;font-size:12px;color:#b9b9b9;margin-top:70px;left:20px}
`,
  mt = () => (
    j(d(ht, 's_ik8BQrQgw9g')),
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'cat-walk-container' },
          [
            l('div', null, { id: 'tail' }, null, 3, null),
            l('div', null, { id: 'tail-mask' }, 'WOW', 3, null),
            l('div', null, { id: 'tail-end' }, null, 3, null),
            l(
              'div',
              null,
              { id: 'body' },
              [
                l(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-left' },
                  l(
                    'div',
                    null,
                    { class: 'ear-inner', id: 'ear-inner-left' },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                l(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-right' },
                  l(
                    'div',
                    null,
                    { class: 'ear-inner', id: 'ear-inner-right' },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                l('div', null, { id: 'mask' }, null, 3, null),
                l(
                  'div',
                  null,
                  { id: 'patch' },
                  [
                    l('div', null, { class: 'fur' }, null, 3, null),
                    l('div', null, { class: 'fur' }, null, 3, null),
                    l('div', null, { class: 'fur' }, null, 3, null),
                  ],
                  3,
                  null,
                ),
                l(
                  'div',
                  null,
                  { id: 'eyes' },
                  [
                    l(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-left' },
                      l(
                        'div',
                        null,
                        { class: 'shine', id: 'shine-left' },
                        null,
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                    l(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-right' },
                      l(
                        'div',
                        null,
                        { class: 'shine', id: 'shine-right' },
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
                l(
                  'div',
                  null,
                  { id: 'whisk-left' },
                  [
                    l(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-one' },
                      null,
                      3,
                      null,
                    ),
                    l('div', null, { class: 'whisker' }, null, 3, null),
                    l(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-three' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                l('div', null, { id: 'nose' }, null, 3, null),
                l(
                  'div',
                  null,
                  { id: 'whisk-right' },
                  [
                    l(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-four' },
                      null,
                      3,
                      null,
                    ),
                    l('div', null, { class: 'whisker' }, null, 3, null),
                    l(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-six' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                l(
                  'div',
                  null,
                  { id: 'smile' },
                  [
                    l(
                      'div',
                      null,
                      { id: 'smile-left-align' },
                      [
                        l('div', null, { id: 'smile-left' }, null, 3, null),
                        l('div', null, { id: 'mask-left' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                    l(
                      'div',
                      null,
                      { id: 'smile-right-align' },
                      [
                        l('div', null, { id: 'smile-right' }, null, 3, null),
                        l('div', null, { id: 'mask-right' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                l('div', null, { id: 'tongue' }, null, 3, null),
                l('div', null, { id: 'tummy' }, null, 3, null),
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
      'wM_0',
    )
  ),
  pt = b(d(mt, 's_0DhRUxBQU40'))
var _e
import('node:async_hooks')
  .then(e => {
    const t = e.AsyncLocalStorage
    ;(_e = new t()), (globalThis.qcAsyncRequestStore = _e)
  })
  .catch(e => {
    console.warn(
      'AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.',
      e,
    )
  })
const ft = async e => {
  const [t] = T(),
    a = await t.resolve(),
    r = await Xe(typeof a == 'function' ? a() : a, e, { abortPipeEarly: !0 }),
    i = {}
  if (r.issues) for (const s of r.issues) i[Ke(s)] = s.message
  return i
}
function bt(e) {
  return d(ft, 's_Zam4T0v4IrY', [e])
}
function vt(e, t, a) {
  const {
    checked: r,
    files: i,
    options: s,
    value: u,
    valueAsDate: m,
    valueAsNumber: h,
  } = e
  return !a || a === 'string'
    ? u
    : a === 'string[]'
      ? s
        ? [...s].filter(c => c.selected && !c.disabled).map(c => c.value)
        : r
          ? [...(t.value || []), u]
          : (t.value || []).filter(c => c !== u)
      : a === 'number'
        ? h
        : a === 'boolean'
          ? r
          : a === 'File' && i
            ? ve(i[0])
            : a === 'File[]' && i
              ? [...i].map(c => ve(c))
              : a === 'Date' && m
                ? m
                : t.value
}
function oe(e) {
  return [
    ...Object.values(e.internal.fields),
    ...Object.values(e.internal.fieldArrays),
  ]
}
function $(e, t) {
  return e.internal.fieldArrays[t]
}
function wt(e, t) {
  return +t.replace(`${e}.`, '').split('.')[0]
}
function Me(e, t) {
  Ce(e, !1).forEach(a => {
    const r = $(e, a).items.length - 1
    t.filter(i => i.startsWith(`${a}.`) && wt(a, i) > r).forEach(i => {
      t.splice(t.indexOf(i), 1)
    })
  })
}
function Ce(e, t = !0) {
  const a = Object.keys(e.internal.fieldArrays)
  return t && Me(e, a), a
}
function yt(e, t = !0) {
  const a = Object.keys(e.internal.fields)
  return t && Me(e, a), a
}
function I(e, t) {
  return e.internal.fields[t]
}
function ie(e, t, a) {
  const r = yt(e, a),
    i = Ce(e, a)
  return typeof t == 'string' || Array.isArray(t)
    ? (typeof t == 'string' ? [t] : t)
        .reduce(
          (s, u) => {
            const [m, h] = s
            return (
              i.includes(u)
                ? (i.forEach(c => {
                    c.startsWith(u) && h.add(c)
                  }),
                  r.forEach(c => {
                    c.startsWith(u) && m.add(c)
                  }))
                : m.add(u),
              s
            )
          },
          [new Set(), new Set()],
        )
        .map(s => [...s])
    : [r, i]
}
function xt(
  e,
  { items: t, initialItems: a, error: r } = {
    items: [],
    initialItems: [],
    error: '',
  },
) {
  const i = a.join() !== t.join()
  return {
    internal: {
      initialItems: [...a],
      startItems: [...a],
      validate: [],
      validateOn: void 0,
      revalidateOn: void 0,
      consumers: [],
    },
    name: e,
    items: t,
    error: r,
    active: !1,
    touched: i,
    dirty: i,
  }
}
function Te(e, t) {
  const a = r => (r instanceof Blob ? r.size : r)
  return Array.isArray(e) && Array.isArray(t)
    ? e.map(a).join() !== t.map(a).join()
    : e instanceof Date && t instanceof Date
      ? e.getTime() !== t.getTime()
      : Number.isNaN(e) && Number.isNaN(t)
        ? !1
        : e !== t
}
function kt(
  e,
  { value: t, initialValue: a, error: r } = {
    value: void 0,
    initialValue: void 0,
    error: '',
  },
) {
  const i = Te(a, t)
  return {
    internal: {
      initialValue: a,
      startValue: a,
      validate: [],
      validateOn: void 0,
      revalidateOn: void 0,
      transform: [],
      elements: [],
      consumers: [],
    },
    name: e,
    value: t,
    error: r,
    active: !1,
    touched: i,
    dirty: i,
  }
}
function le(e, t) {
  return e.split('.').reduce((a, r) => (a == null ? void 0 : a[r]), t)
}
let _t = 0
function se() {
  return _t++
}
function zt({ loader: e, action: t, fieldArrays: a }) {
  function r(m) {
    var h
    return (
      ((h = t == null ? void 0 : t.value) == null ? void 0 : h.values) &&
      le(m, t.value.values)
    )
  }
  const i = () => se(),
    s = m => {
      var h
      return (
        ((h = t == null ? void 0 : t.value) == null ? void 0 : h.errors[m]) ||
        ''
      )
    },
    u = (m, h, c) =>
      Object.entries(h).reduce((v, [w, f]) => {
        var M
        const x = c ? `${c}.${w}` : w
        if (a != null && a.includes(x.replace(/.\d+./g, '.$.'))) {
          const A = f.map(i)
          v[1][x] = xt(x, {
            initialItems: A,
            items: ((M = r(x)) == null ? void 0 : M.map(i)) || [...A],
            error: s(x),
          })
        } else
          (!f ||
            typeof f != 'object' ||
            Array.isArray(f) ||
            f instanceof Date) &&
            (v[0][x] = kt(x, {
              initialValue: f,
              value: r(x) ?? f,
              error: s(x),
            }))
        return f && typeof f == 'object' && u(v, f, x), v
      }, m)
  return u([{}, {}], e.value)
}
function ce(e, t) {
  return (typeof e != 'string' && !Array.isArray(e) ? e : t) || {}
}
function St(e, t) {
  e.dirty = t || oe(e).some(a => a.active && a.dirty)
}
function Mt(e, t) {
  const a = Te(t.internal.startValue, t.value)
  a !== t.dirty && ((t.dirty = a), St(e, a))
}
function Ct(e, t) {
  var a, r
  ;(r = (a = I(e, t)) == null ? void 0 : a.internal.elements[0]) == null ||
    r.focus()
}
function Tt(e, t, a) {
  const {
    shouldActive: r = !0,
    shouldTouched: i = !1,
    shouldDirty: s = !1,
    shouldValid: u = !1,
  } = ce(t, a)
  return ie(e, t)[0].reduce(
    (m, h) => {
      const c = I(e, h)
      return (
        (!r || c.active) &&
          (!i || c.touched) &&
          (!s || c.dirty) &&
          (!u || !c.error) &&
          (typeof t == 'string' ? h.replace(`${t}.`, '') : h)
            .split('.')
            .reduce(
              (v, w, f, x) =>
                (v[w] =
                  f === x.length - 1
                    ? c.value
                    : (typeof v[w] == 'object' && v[w]) ||
                      (isNaN(+x[f + 1]) ? {} : [])),
              m,
            ),
        m
      )
    },
    typeof t == 'string' ? [] : {},
  )
}
function At(e, t, a) {
  const [r, i] = ie(e, t, !1),
    s = typeof t == 'string' && r.length === 1,
    u = !s && !Array.isArray(t),
    m = ce(t, a),
    {
      initialValue: h,
      initialValues: c,
      keepResponse: v = !1,
      keepSubmitCount: w = !1,
      keepSubmitted: f = !1,
      keepValues: x = !1,
      keepDirtyValues: M = !1,
      keepItems: A = !1,
      keepDirtyItems: Ve = !1,
      keepErrors: pe = !1,
      keepTouched: fe = !1,
      keepDirty: be = !1,
    } = m
  r.forEach(q => {
    const k = I(e, q)
    ;(s ? 'initialValue' in m : c) &&
      (k.internal.initialValue = s ? h : le(q, c))
    const E = M && k.dirty
    !x &&
      !E &&
      ((k.internal.startValue = k.internal.initialValue),
      (k.value = k.internal.initialValue),
      k.internal.elements.forEach(D => {
        D.type === 'file' && (D.value = '')
      })),
      fe || (k.touched = !1),
      !be && !x && !E && (k.dirty = !1),
      pe || (k.error = '')
  }),
    i.forEach(q => {
      var D
      const k = $(e, q),
        E = Ve && k.dirty
      !A &&
        !E &&
        (c &&
          (k.internal.initialItems =
            ((D = le(q, c)) == null ? void 0 : D.map(() => se())) || []),
        (k.internal.startItems = [...k.internal.initialItems]),
        (k.items = [...k.internal.initialItems])),
        fe || (k.touched = !1),
        !be && !A && !E && (k.dirty = !1),
        pe || (k.error = '')
    }),
    u &&
      (v || (e.response = {}),
      w || (e.submitCount = 0),
      f || (e.submitted = !1)),
    Ot(e)
}
function Pt(e, t, { duration: a } = {}) {
  ;(e.response = t),
    a &&
      setTimeout(() => {
        e.response === t && (e.response = {})
      }, a)
}
async function jt(e, t, a) {
  const [r, i] = ie(e, t),
    { shouldActive: s = !0, shouldFocus: u = !0 } = ce(t, a),
    m = se()
  e.internal.validators.push(m), (e.validating = !0)
  const h = e.internal.validate
    ? await e.internal.validate(Tt(e, { shouldActive: s }))
    : {}
  let c =
    typeof t != 'string' && !Array.isArray(t) ? !Object.keys(h).length : !0
  const [v] = await Promise.all([
    Promise.all(
      r.map(async w => {
        const f = I(e, w)
        if (!s || f.active) {
          let x
          for (const A of f.internal.validate)
            if (((x = await A(f.value)), x)) break
          const M = x || h[w] || ''
          return M && (c = !1), (f.error = M), M ? w : null
        }
      }),
    ),
    Promise.all(
      i.map(async w => {
        const f = $(e, w)
        if (!s || f.active) {
          let x = ''
          for (const A of f.internal.validate)
            if (((x = await A(f.items)), x)) break
          const M = x || h[w] || ''
          M && (c = !1), (f.error = M)
        }
      }),
    ),
  ])
  if ((Lt(e, h, { shouldActive: s }), u)) {
    const w = v.find(f => f)
    w && Ct(e, w)
  }
  return (
    Ft(e, !c),
    e.internal.validators.splice(e.internal.validators.indexOf(m), 1),
    e.internal.validators.length || (e.validating = !1),
    c
  )
}
function Bt(e, t, a, { on: r, shouldFocus: i = !1 }) {
  const s = t.internal.validateOn ?? e.internal.validateOn,
    u = t.internal.revalidateOn ?? e.internal.revalidateOn
  r.includes((s === 'submit' ? e.submitted : t.error) ? u : s) &&
    jt(e, a, { shouldFocus: i })
}
async function ue(e, t, a, r, i, s, u) {
  u !== void 0 && (t.value = u)
  for (const m of t.internal.transform) t.value = await m(t.value, r, i)
  ;(t.touched = !0), (e.touched = !0), Mt(e, t), Bt(e, t, a, { on: s })
}
function Lt(e, t, { duration: a, shouldActive: r = !0 }) {
  const i = Object.entries(t)
    .reduce(
      (s, [u, m]) => (
        [I(e, u), $(e, u)].every(h => !h || (r && !h.active)) && s.push(m), s
      ),
      [],
    )
    .join(' ')
  i && Pt(e, { status: 'error', message: i }, { duration: a })
}
function Ft(e, t) {
  e.invalid = t || oe(e).some(a => a.active && a.error)
}
function Ot(e) {
  let t = !1,
    a = !1,
    r = !1
  for (const i of oe(e))
    if (
      (i.active &&
        (i.touched && (t = !0), i.dirty && (a = !0), i.error && (r = !0)),
      t && a && r)
    )
      break
  ;(e.touched = t), (e.dirty = a), (e.invalid = r)
}
const It = e => (ne(F('s_zlu40LlrNis', [e])), o(L, null, 3, '2Z_0'))
function Ae(e, t, a) {
  return b(d(It, 's_AMfhPV9ZgUw'))(e, t, a)
}
const qt = e => {
    const [t] = T()
    t.internal.elements.push(e)
  },
  Et = (e, t) => {
    const [a, r, i, s] = T()
    ue(r, a, i, e, t, ['touched', 'input'], vt(t, a, s))
  },
  Dt = (e, t) => {
    const [a, r, i] = T()
    ue(r, a, i, e, t, ['change'])
  },
  Rt = (e, t) => {
    const [a, r, i] = T()
    ue(r, a, i, e, t, ['touched', 'blur'])
  }
function $t({ children: e, name: t, type: a, ...r }) {
  const { of: i } = r,
    s = I(i, t)
  return o(
    Ae,
    {
      store: s,
      ...r,
      children: e(s, {
        name: t,
        autoFocus: !!s.error,
        ref: d(qt, 's_e9muVT8kIZo', [s]),
        onInput$: d(Et, 's_UYiy8OdUmWo', [s, i, t, a]),
        onChange$: d(Dt, 's_ac4VqAnAxQ0', [s, i, t]),
        onBlur$: d(Rt, 's_M0rcc18CCgA', [s, i, t]),
      }),
    },
    0,
    t,
  )
}
function Ht({ children: e, name: t, ...a }) {
  const r = $(a.of, t)
  return o(Ae, { store: r, ...a, children: e(r) }, 0, t)
}
function Nt({
  of: e,
  action: t,
  onSubmit$: a,
  responseDuration: r,
  keepResponse: i,
  shouldActive: s,
  shouldTouched: u,
  shouldDirty: m,
  shouldFocus: h,
  reloadDocument: c,
  children: v,
  ...w
}) {
  const { encType: f } = w,
    x = {
      duration: r,
      shouldActive: s,
      shouldTouched: u,
      shouldDirty: m,
      shouldFocus: h,
    }
  return V(
    'form',
    {
      noValidate: !0,
      ...w,
      method: 'post',
      action: t == null ? void 0 : t.actionPath,
      'preventdefault:submit': !c,
      ref: M => {
        e.element = M
      },
      children: v,
      onSubmit$: F('s_8vZTs9fM6iI', [t, f, e, i, a, x, c]),
    },
    { noValidate: n, method: n },
    0,
    '2Z_1',
  )
}
function Zt({
  validate: e,
  validateOn: t = 'submit',
  revalidateOn: a = 'input',
  ...r
}) {
  return We(() => {
    var u, m
    const [i, s] = zt(r)
    return {
      internal: {
        fields: i,
        fieldArrays: s,
        fieldArrayPaths: r.fieldArrays,
        validate: e,
        validators: [],
        validateOn: t,
        revalidateOn: a,
      },
      element: void 0,
      submitCount: 0,
      submitting: !1,
      submitted: !1,
      validating: !1,
      touched: !1,
      dirty: !1,
      invalid: !1,
      response:
        ((m = (u = r.action) == null ? void 0 : u.value) == null
          ? void 0
          : m.response) || {},
    }
  })
}
function Vt(e) {
  const t = Zt(e)
  return [
    t,
    {
      Form: a => Nt({ of: t, action: e.action, ...a }),
      Field: a => $t({ of: t, ...a }),
      FieldArray: a => Ht({ of: t, ...a }),
    },
  ]
}
const Wt = et({
    email: J(
      Y('Must be a string'),
      G(1, 'Please enter your email.'),
      tt('The email address is badly formatted.'),
    ),
    name: J(Y('Must be a string'), G(1, 'Please enter your name.')),
    message: J(Y('Must be a string'), G(1, 'Please enter your message.')),
  }),
  Qt = async (e, t) => {
    const [a, r, i, s] = T()
    try {
      r.value = !0
      const u = await fetch(
        `https://europe-west8-nyruchi.cloudfunctions.net/notification-telegram?name=${e.name}&email=${e.email}&message=${e.message}`,
      )
      ;(r.value = !1),
        u
          ? (At(a),
            (s.value = !0),
            setTimeout(() => {
              s.value = !1
            }, 3e3))
          : (i.value = !0)
    } catch {
      ;(r.value = !1), (i.value = !0)
    }
  },
  Ut = e => {
    const t = z(!1),
      a = z(!1),
      r = z(!1),
      [i, { Form: s, Field: u, FieldArray: m }] = Vt({
        loader: je(),
        validate: bt(d(Wt, 's_hisV3sNP0XM')),
      })
    return o(
      p,
      {
        children: [
          l(
            'div',
            null,
            { class: 'container mx-auto' },
            l(
              'div',
              null,
              { class: 'card bg-base-100 shadow-xl image-full w-full' },
              l(
                'div',
                null,
                { class: 'card-body' },
                l(
                  'div',
                  null,
                  {
                    class:
                      'flex items-center justify-around gap-8 flex-col md:flex-row',
                  },
                  [
                    l(
                      'svg',
                      null,
                      {
                        class: 'w-16 md:w-40 rotate-[270deg]',
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 323.057 323.057',
                        'xml:space': 'preserve',
                      },
                      [
                        l(
                          'path',
                          null,
                          {
                            class: 'fill-primary',
                            d: 'M281.442 256.312c-47.124 59.364-139.536 44.676-160.956-29.376-1.224-3.672-1.836-7.956-2.448-11.628 49.572-11.016 97.92-47.124 102.204-90.576 3.672-39.168-36.108-50.796-62.424-28.764-31.212 26.316-53.244 64.872-55.08 105.875-31.824 4.284-63.036-4.284-80.172-35.496-28.764-52.631 9.792-123.624 61.2-144.432 5.508-1.836 3.06-10.404-2.448-8.568C10.326 33.544-26.394 132.688 21.954 191.439c18.972 22.645 49.572 29.988 81.396 26.316 4.284 41.616 36.72 74.664 75.275 87.516 44.676 14.688 85.68-6.731 111.996-41.616 4.285-5.508-4.896-12.239-9.179-7.343zM144.354 132.688c9.792-13.464 22.644-28.764 39.168-34.272 15.911-5.508 21.42 16.524 22.031 26.316.612 12.24-7.956 23.256-15.912 31.824-16.523 18.971-44.063 35.496-72.215 42.839 1.836-23.868 13.464-47.123 26.928-66.707z',
                          },
                          null,
                          3,
                          null,
                        ),
                        l(
                          'path',
                          null,
                          {
                            class: 'fill-primary',
                            d: 'M315.713 233.668c-17.136 0-34.884 1.224-51.408 5.508-6.731 1.836-3.672 11.016 3.061 9.792 13.464-2.448 27.54-1.836 41.004-1.224-.612 7.955-1.224 16.523-2.448 24.479-1.224 6.12-5.508 15.3-1.836 21.42 1.836 3.061 4.896 3.061 7.956 1.836 7.344-3.06 7.344-15.912 8.568-22.644 1.836-11.017 2.447-21.42 2.447-32.437 0-3.67-3.672-6.73-7.344-6.73z',
                          },
                          null,
                          3,
                          null,
                        ),
                      ],
                      3,
                      null,
                    ),
                    l(
                      'div',
                      null,
                      null,
                      [
                        l(
                          'h2',
                          null,
                          { class: 'card-title text-l md:text-2xl mb-6' },
                          "Do you want to build castles? Let's do it together!",
                          3,
                          null,
                        ),
                        o(
                          s,
                          {
                            onSubmit$: d(Qt, 's_EmVjnisSR5Y', [i, t, a, r]),
                            class: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                            children: [
                              o(
                                u,
                                {
                                  name: 'name',
                                  children: (c, v) =>
                                    l(
                                      'div',
                                      null,
                                      {
                                        class:
                                          'flex flex-col gap-2 col-span-2 md:col-span-1',
                                      },
                                      [
                                        l(
                                          'label',
                                          null,
                                          {
                                            class:
                                              'input input-bordered flex items-center gap-2',
                                          },
                                          [
                                            l(
                                              'svg',
                                              null,
                                              {
                                                xmlns:
                                                  'http://www.w3.org/2000/svg',
                                                viewBox: '0 0 16 16',
                                                fill: 'currentColor',
                                                class: 'h-4 w-4 opacity-70',
                                              },
                                              l(
                                                'path',
                                                null,
                                                {
                                                  d: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z',
                                                },
                                                null,
                                                3,
                                                null,
                                              ),
                                              3,
                                              null,
                                            ),
                                            V(
                                              'input',
                                              {
                                                ...v,
                                                get value() {
                                                  return c.value
                                                },
                                                value: y(c, 'value'),
                                                type: 'text',
                                                class: 'grow w-full',
                                                placeholder: 'Name',
                                              },
                                              {
                                                type: n,
                                                class: n,
                                                placeholder: n,
                                              },
                                              0,
                                              null,
                                            ),
                                          ],
                                          1,
                                          null,
                                        ),
                                        c.error &&
                                          l(
                                            'div',
                                            null,
                                            { class: 'text-red-500' },
                                            y(c, 'error'),
                                            1,
                                            'N9_0',
                                          ),
                                      ],
                                      1,
                                      'N9_1',
                                    ),
                                  [n]: { name: n },
                                },
                                3,
                                'N9_2',
                              ),
                              o(
                                u,
                                {
                                  name: 'email',
                                  children: (c, v) =>
                                    l(
                                      'div',
                                      null,
                                      {
                                        class:
                                          'flex flex-col gap-2 col-span-2 md:col-span-1',
                                      },
                                      [
                                        l(
                                          'label',
                                          null,
                                          {
                                            class:
                                              'input input-bordered flex items-center gap-2',
                                          },
                                          [
                                            l(
                                              'svg',
                                              null,
                                              {
                                                xmlns:
                                                  'http://www.w3.org/2000/svg',
                                                viewBox: '0 0 16 16',
                                                fill: 'currentColor',
                                                class: 'h-4 w-4 opacity-70',
                                              },
                                              [
                                                l(
                                                  'path',
                                                  null,
                                                  {
                                                    d: 'M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z',
                                                  },
                                                  null,
                                                  3,
                                                  null,
                                                ),
                                                l(
                                                  'path',
                                                  null,
                                                  {
                                                    d: 'M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z',
                                                  },
                                                  null,
                                                  3,
                                                  null,
                                                ),
                                              ],
                                              3,
                                              null,
                                            ),
                                            V(
                                              'input',
                                              {
                                                ...v,
                                                get value() {
                                                  return c.value
                                                },
                                                value: y(c, 'value'),
                                                type: 'email',
                                                class: 'grow w-full',
                                                placeholder: 'Email',
                                              },
                                              {
                                                type: n,
                                                class: n,
                                                placeholder: n,
                                              },
                                              0,
                                              null,
                                            ),
                                          ],
                                          1,
                                          null,
                                        ),
                                        c.error &&
                                          l(
                                            'div',
                                            null,
                                            { class: 'text-red-500' },
                                            y(c, 'error'),
                                            1,
                                            'N9_3',
                                          ),
                                      ],
                                      1,
                                      'N9_4',
                                    ),
                                  [n]: { name: n },
                                },
                                3,
                                'N9_5',
                              ),
                              o(
                                u,
                                {
                                  name: 'message',
                                  children: (c, v) =>
                                    l(
                                      'div',
                                      null,
                                      {
                                        class: 'flex flex-col gap-2 col-span-2',
                                      },
                                      [
                                        V(
                                          'textarea',
                                          {
                                            ...v,
                                            get value() {
                                              return c.value
                                            },
                                            value: y(c, 'value'),
                                            placeholder: 'Message',
                                            class:
                                              'textarea textarea-bordered textarea-lg w-full',
                                          },
                                          { placeholder: n, class: n },
                                          0,
                                          null,
                                        ),
                                        c.error &&
                                          l(
                                            'div',
                                            null,
                                            { class: 'text-red-500' },
                                            y(c, 'error'),
                                            1,
                                            'N9_6',
                                          ),
                                      ],
                                      1,
                                      'N9_7',
                                    ),
                                  [n]: { name: n },
                                },
                                3,
                                'N9_8',
                              ),
                              l(
                                'button',
                                null,
                                {
                                  class:
                                    'btn btn-primary text-white col-start-2',
                                  type: 'submit',
                                  disabled: g(c => c.value, [t], 'p0.value'),
                                  'data-goatcounter-click': 'send-email',
                                  'data-goatcounter-title': 'Send Email',
                                  'data-goatcounter-referrer': g(
                                    c => c.referral,
                                    [e],
                                    'p0.referral',
                                  ),
                                },
                                [
                                  t.value &&
                                    l(
                                      'span',
                                      null,
                                      { class: 'loading loading-spinner' },
                                      null,
                                      3,
                                      'N9_9',
                                    ),
                                  'Contact me',
                                ],
                                1,
                                null,
                              ),
                            ],
                            [n]: { onSubmit$: n, class: n },
                          },
                          1,
                          'N9_10',
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
              1,
              null,
            ),
            1,
            null,
          ),
          (r.value || a.value) &&
            l(
              'div',
              null,
              { class: 'toast toast-end z-[999]' },
              [
                a.value &&
                  l(
                    'div',
                    null,
                    { class: 'alert alert-error gap-0' },
                    l(
                      'div',
                      null,
                      { class: 'flex gap-2 justify-beetwen' },
                      [
                        l(
                          'div',
                          null,
                          { class: 'flex-1' },
                          [
                            l(
                              'div',
                              null,
                              null,
                              'There was an error during message send.',
                              3,
                              null,
                            ),
                            l(
                              'div',
                              null,
                              null,
                              [
                                'Write directly to',
                                ' ',
                                l(
                                  'a',
                                  null,
                                  {
                                    class: 'underline',
                                    href: 'mailto:pasquale.delucia96@gmail.com',
                                  },
                                  'pasquale.delucia96@gmail.com',
                                  3,
                                  null,
                                ),
                              ],
                              3,
                              null,
                            ),
                          ],
                          3,
                          null,
                        ),
                        l(
                          'button',
                          null,
                          {
                            class: 'btn btn-xs btn-circle btn-outline',
                            onClick$: F('s_Emm0n9SRfY8', [a]),
                          },
                          l(
                            'svg',
                            null,
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              class: 'h-4 w-4',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                            },
                            l(
                              'path',
                              null,
                              {
                                'stroke-linecap': 'round',
                                'stroke-linejoin': 'round',
                                'stroke-width': '2',
                                d: 'M6 18L18 6M6 6l12 12',
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
                      ],
                      3,
                      null,
                    ),
                    3,
                    'N9_11',
                  ),
                r.value &&
                  l(
                    'div',
                    null,
                    { class: 'alert alert-success gap-0' },
                    l(
                      'span',
                      null,
                      null,
                      'Message sent successfully.',
                      3,
                      null,
                    ),
                    3,
                    'N9_12',
                  ),
              ],
              1,
              'N9_13',
            ),
        ],
      },
      1,
      'N9_14',
    )
  },
  Jt = b(d(Ut, 's_pCebMzCWV9M')),
  Yt = `.eggs{margin:1em auto;text-align:center;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;opacity:.2}.egg{width:140px;height:200px;margin:1em auto;background:#fbe9e7;border-radius:50%/60% 60% 40% 40%;overflow:hidden;display:inline-block}.stripe{height:20%}.stripe:not(:first-child){border-top:2px solid #fff}.stripe:nth-child(1){background-color:#ffbde8}.stripe:nth-child(2){background-color:#bde8ff}.stripe:nth-child(3){background-color:#e8ffbd}.stripe:nth-child(4){background-color:#ffe8bd}.stripe:nth-child(5){background-color:#e8bdff}@keyframes egg-left-animation{0%{transform:rotate(-15deg)}to{transform:rotate(-10deg)}}@keyframes egg-right-animation{0%{transform:rotate(30deg)}to{transform:rotate(25deg)}}.egg-left{transform:rotate(-10deg);animation:egg-left-animation .8s linear 0s infinite alternate}.egg-right{transform:rotate(25deg);animation:egg-right-animation .7s linear 0s infinite alternate;background-color:#ec407a;background-image:url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")}
`,
  Gt = () => (
    j(d(Yt, 's_M7JMtWmYWDA')),
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'eggs' },
          [
            l(
              'div',
              null,
              { class: 'egg egg-left' },
              [
                l('div', null, { class: 'stripe' }, null, 3, null),
                l('div', null, { class: 'stripe' }, null, 3, null),
                l('div', null, { class: 'stripe' }, null, 3, null),
                l('div', null, { class: 'stripe' }, null, 3, null),
                l('div', null, { class: 'stripe' }, null, 3, null),
              ],
              3,
              null,
            ),
            l('div', null, { class: 'egg egg-right' }, null, 3, null),
          ],
          3,
          null,
        ),
      },
      3,
      'vR_0',
    )
  ),
  Xt = b(d(Gt, 's_tC1zfRJh9xU')),
  de = Se('common.show'),
  Pe = Se('common.snow'),
  Kt = () => {
    const e = te(de),
      t = new Date().getFullYear()
    return o(
      p,
      {
        children: l(
          'footer',
          null,
          { class: 'footer items-center p-4 bg-neutral text-neutral-content' },
          [
            l(
              'aside',
              null,
              { class: 'items-center grid-flow-col' },
              [
                l(
                  'svg',
                  null,
                  {
                    width: '36',
                    height: '36',
                    viewBox: '0 0 24 24',
                    xmlns: 'http://www.w3.org/2000/svg',
                    'fill-rule': 'evenodd',
                    'clip-rule': 'evenodd',
                    class: 'fill-current',
                  },
                  l(
                    'path',
                    null,
                    {
                      d: 'M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z',
                    },
                    null,
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                l(
                  'p',
                  null,
                  null,
                  ['Copyright ', t, ' - All right reserved'],
                  1,
                  null,
                ),
              ],
              1,
              null,
            ),
            l(
              'nav',
              null,
              {
                class:
                  'w-full justify-end grid grid-cols-2 md:grid-cols-none gap-4',
              },
              [
                o(
                  _,
                  {
                    href: 'https://qwik.builder.io/',
                    target: '_blank',
                    class: 'md:row-span-full',
                    'data-goatcounter-click': 'open-quik',
                    'data-goatcounter-title': 'Open Quik',
                    'data-goatcounter-referrer': 'referrer',
                    children: 'made with qwik',
                    [n]: {
                      href: n,
                      target: n,
                      class: n,
                      'data-goatcounter-click': n,
                      'data-goatcounter-title': n,
                      'data-goatcounter-referrer': n,
                    },
                  },
                  3,
                  'yk_0',
                ),
                o(
                  _,
                  {
                    href: '/blog',
                    class: 'md:row-span-full',
                    'data-goatcounter-click': 'open-articles',
                    'data-goatcounter-title': 'Open Articles',
                    'data-goatcounter-referrer': 'footer',
                    children: 'Blog',
                    [n]: {
                      href: n,
                      class: n,
                      'data-goatcounter-click': n,
                      'data-goatcounter-title': n,
                      'data-goatcounter-referrer': n,
                    },
                  },
                  3,
                  'yk_1',
                ),
                o(
                  _,
                  {
                    href: '/projects',
                    class: 'md:row-span-full',
                    'data-goatcounter-click': 'open-projects',
                    'data-goatcounter-title': 'Open Projects',
                    'data-goatcounter-referrer': 'footer',
                    children: 'Projects',
                    [n]: {
                      href: n,
                      class: n,
                      'data-goatcounter-click': n,
                      'data-goatcounter-title': n,
                      'data-goatcounter-referrer': n,
                    },
                  },
                  3,
                  'yk_2',
                ),
                o(
                  _,
                  {
                    href: '/button-game',
                    class: 'md:row-span-full',
                    'data-goatcounter-click': 'open-game',
                    'data-goatcounter-title': 'Open Game',
                    'data-goatcounter-referrer': 'referrer',
                    children: 'Try this game',
                    [n]: {
                      href: n,
                      class: n,
                      'data-goatcounter-click': n,
                      'data-goatcounter-title': n,
                      'data-goatcounter-referrer': n,
                    },
                  },
                  3,
                  'yk_3',
                ),
                o(
                  _,
                  {
                    href: 'https://www.amazon.it/hz/wishlist/ls/2JT4PUEODMY27?ref_=wl_share',
                    class: 'md:row-span-full',
                    'data-goatcounter-click': 'open-wishlist',
                    'data-goatcounter-title': 'Open Wishilist',
                    'data-goatcounter-referrer': 'referrer',
                    target: '_blank',
                    children: 'Wishlist',
                    [n]: {
                      href: n,
                      class: n,
                      'data-goatcounter-click': n,
                      'data-goatcounter-title': n,
                      'data-goatcounter-referrer': n,
                      target: n,
                    },
                  },
                  3,
                  'yk_4',
                ),
                l(
                  'label',
                  null,
                  {
                    class: 'cursor-pointer md:row-span-full',
                    'data-goatcounter-click': g(
                      a => (a.value, 'open'),
                      [e],
                      '"cat-mode-"+p0.value?"open":"close"',
                    ),
                    'data-goatcounter-title': 'Cat Mode',
                    'data-goatcounter-referrer': 'referrer',
                    onClick$: F('s_jWy0aWw4FvU', [e]),
                  },
                  'CLick me',
                  3,
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
      },
      1,
      'yk_5',
    )
  },
  el = b(d(Kt, 's_GvPhUJ5Kg9Q')),
  tl = () =>
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'navbar bg-base-100' },
          [
            l(
              'div',
              null,
              { class: 'navbar-start' },
              l(
                'div',
                null,
                { class: 'dropdown' },
                [
                  l(
                    'label',
                    null,
                    { tabIndex: 0, class: 'btn btn-ghost btn-circle' },
                    l(
                      'svg',
                      null,
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        class: 'h-5 w-5',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        stroke: 'currentColor',
                      },
                      l(
                        'path',
                        null,
                        {
                          'stroke-linecap': 'round',
                          'stroke-linejoin': 'round',
                          'stroke-width': '2',
                          d: 'M4 6h16M4 12h16M4 18h7',
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
                  l(
                    'ul',
                    null,
                    {
                      tabIndex: 0,
                      class:
                        'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52',
                    },
                    [
                      l(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          { href: '/', children: 'Homepage', [n]: { href: n } },
                          3,
                          '8h_0',
                        ),
                        1,
                        null,
                      ),
                      l(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            href: '/blog',
                            'data-goatcounter-click': 'open-articles',
                            'data-goatcounter-title': 'Open Articles',
                            'data-goatcounter-referrer': 'header',
                            children: 'Blog',
                            [n]: {
                              href: n,
                              'data-goatcounter-click': n,
                              'data-goatcounter-title': n,
                              'data-goatcounter-referrer': n,
                            },
                          },
                          3,
                          '8h_1',
                        ),
                        1,
                        null,
                      ),
                      l(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            href: '/projects',
                            'data-goatcounter-click': 'open-projects',
                            'data-goatcounter-title': 'Open Projects',
                            'data-goatcounter-referrer': 'header',
                            children: 'Projects',
                            [n]: {
                              href: n,
                              'data-goatcounter-click': n,
                              'data-goatcounter-title': n,
                              'data-goatcounter-referrer': n,
                            },
                          },
                          3,
                          '8h_2',
                        ),
                        1,
                        null,
                      ),
                      l(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            href: '/Pasquale_De_Lucia-Resume.pdf',
                            target: '_blank',
                            'data-goatcounter-click': 'get-resume',
                            'data-goatcounter-title': 'Get Resume',
                            'data-goatcounter-referrer': 'header',
                            children: 'Resume',
                            [n]: {
                              href: n,
                              target: n,
                              'data-goatcounter-click': n,
                              'data-goatcounter-title': n,
                              'data-goatcounter-referrer': n,
                            },
                          },
                          3,
                          '8h_3',
                        ),
                        1,
                        null,
                      ),
                      l(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            href: '/blog/finance',
                            'data-goatcounter-click': 'open-finance',
                            'data-goatcounter-title': 'Open Finance',
                            'data-goatcounter-referrer': 'header',
                            children: 'Personal finance',
                            [n]: {
                              href: n,
                              'data-goatcounter-click': n,
                              'data-goatcounter-title': n,
                              'data-goatcounter-referrer': n,
                            },
                          },
                          3,
                          '8h_4',
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
            l(
              'div',
              null,
              { class: 'navbar-center' },
              o(
                _,
                {
                  href: '/',
                  class: 'normal-case text-xl text-gradient-hover',
                  children: 'Nyruchi',
                  [n]: { href: n, class: n },
                },
                3,
                '8h_5',
              ),
              1,
              null,
            ),
            l('div', null, { class: 'navbar-end' }, null, 3, null),
          ],
          1,
          null,
        ),
      },
      1,
      '8h_6',
    ),
  ll = b(d(tl, 's_o4ccBuvIYCs')),
  al = e =>
    o(
      p,
      {
        children: l(
          'section',
          null,
          {
            class: g(
              t => 'inner-section ' + t.sectionClass,
              [e],
              '"inner-section "+p0.sectionClass',
            ),
          },
          [
            o(L, null, 3, 'rm_0'),
            e.showCta &&
              l(
                'p',
                null,
                { class: 'flex justify-center pt-6' },
                o(
                  _,
                  {
                    get href() {
                      return e.ctaHref
                    },
                    get 'aria-label'() {
                      return e.ctaLabel
                    },
                    class: 'btn btn-primary text-white',
                    get 'data-goatcounter-click'() {
                      return e.gcClick
                    },
                    get 'data-goatcounter-title'() {
                      return e.gcTitle
                    },
                    get 'data-goatcounter-referrer'() {
                      return e.gcReferrer
                    },
                    children: g(t => t.ctaLabel, [e], 'p0.ctaLabel'),
                    [n]: {
                      href: g(t => t.ctaHref, [e], 'p0.ctaHref'),
                      'aria-label': g(t => t.ctaLabel, [e], 'p0.ctaLabel'),
                      class: n,
                      'data-goatcounter-click': g(
                        t => t.gcClick,
                        [e],
                        'p0.gcClick',
                      ),
                      'data-goatcounter-title': g(
                        t => t.gcTitle,
                        [e],
                        'p0.gcTitle',
                      ),
                      'data-goatcounter-referrer': g(
                        t => t.gcReferrer,
                        [e],
                        'p0.gcReferrer',
                      ),
                    },
                  },
                  3,
                  'rm_1',
                ),
                1,
                'rm_2',
              ),
          ],
          1,
          null,
        ),
      },
      1,
      'rm_3',
    ),
  C = b(d(al, 's_e0g7Sn2KjsA')),
  nl = `.reindeer{--rudolph-antler: #ddb892;--rudolph-body: #9d6b53;--rudolph-body-dark: #946651;--rudolph-nose: #8c6351;--rudolph-nose-red: #690500;--rudolph-eye: #432818;--rudolph-ear: #774936;--rudolph-belly: #ede0d4;--rudolph-leg: #432818;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;width:16rem;height:16rem;z-index:-1;opacity:.2}.reindeer .antler{position:absolute;margin:2.7rem 0 0 2.3rem;width:5rem;height:.7rem;border-radius:.35rem;background-color:var(--rudolph-antler);transform-origin:5.7rem 0;transform:translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler.antler--right{transform:scaleX(-1) translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler .hook:first-child{position:absolute;top:-2.3rem;left:-2.3rem;width:3rem;height:3rem;background:radial-gradient(circle at 100% 0,transparent,transparent 2.3rem,var(--rudolph-antler) 2.3rem,var(--rudolph-antler) 3rem,transparent 3rem)}.reindeer .antler .hook:nth-child(2){position:absolute;top:-1.7rem;width:2.4rem;height:2.4rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.7rem,var(--rudolph-antler) 1.7rem,var(--rudolph-antler) 2.4rem,transparent 2.4rem)}.reindeer .antler .hook:nth-child(3){position:absolute;top:-1.3rem;left:1.5rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.3rem,var(--rudolph-antler) 1.3rem,var(--rudolph-antler) 2rem,transparent 2rem)}.reindeer .antler .hook:before{content:"";display:block;position:absolute;top:-.35rem;width:.7rem;height:.7rem;background-color:var(--rudolph-antler);border-radius:.35rem}.reindeer .head{position:absolute;z-index:3;top:4rem;left:5rem;width:6rem;height:6rem}.reindeer .head .face{position:absolute;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:50%/50% 50% 60% 60%}.reindeer .head .face:after{content:"";display:block;position:absolute;top:.05rem;left:.5rem;width:5rem;height:5.4rem;border-radius:50%;background:radial-gradient(circle at center,transparent,transparent 2.5rem,var(--rudolph-body-dark) 2.5rem,var(--rudolph-body-dark) 5rem);background-position:0 .2rem;transform:scaleX(1.1) rotate(45deg) scaleX(1.1) scale(.9)}.reindeer .ear{position:absolute;left:-2.6rem;top:1.5rem;width:5rem;height:2rem;background:var(--rudolph-body);border-radius:50% 50% 60% 40%/50% 40% 40% 50%;transform:rotate(-10deg) scale(.8)}.reindeer .ear:after{content:"";display:block;position:absolute;left:1rem;top:.5rem;width:3rem;height:1.2rem;background:var(--rudolph-ear);border-radius:50% 50% 50% 40%/50% 40% 60% 50%}.reindeer .ear.ear--right{left:auto;right:-2.6rem;transform:rotate(10deg) scaleX(-1) scale(.8)}.reindeer .eye{position:absolute;top:2.5rem;left:2rem;width:.6rem;height:.8rem;border-radius:50%;background-color:var(--rudolph-eye);transform:rotate(10deg)}.reindeer .eye.eye--right{left:3.4rem;transform:rotate(-10deg)}.reindeer .nose{position:absolute;top:3.5rem;left:.7rem;width:4.6rem;height:3.6rem;border-radius:50%;background-color:var(--rudolph-nose)}.reindeer .nose:before{content:"";display:block;position:absolute;top:.3rem;left:.6rem;width:3.4rem;height:2.6rem;border-radius:50%;background-color:var(--rudolph-nose-red)}.reindeer .nose:after{content:"";display:block;position:absolute;top:.6rem;left:1.6rem;width:1.8rem;height:1.2rem;border-radius:50%;background-color:#ffffff1a}.reindeer .body{position:absolute;top:9.6rem;left:5rem;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:3rem 3rem 0 0/4rem 4rem 0 0}.reindeer .body:after{content:"";display:block;position:absolute;width:3rem;height:4rem;background-color:var(--rudolph-belly);border-radius:50%;top:0rem;left:1.5rem}.reindeer .hand{position:absolute;z-index:2;top:1rem;left:.8rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.15rem,var(--rudolph-leg) 1.2rem,var(--rudolph-leg) 2rem,transparent 2.05rem);transform:scaleX(.7) rotate(10deg)}.reindeer .hand:after{content:"";display:block;position:absolute;top:1.2rem;left:1.6rem;width:.8rem;height:.8rem;background-color:var(--rudolph-leg);border-radius:50%}.reindeer .hand.hand--right{left:3.2rem;transform:scaleX(-1) scaleX(.7) rotate(10deg)}.reindeer .legs{position:absolute;left:-1rem;top:2rem;width:8rem;height:4rem;overflow:hidden}.reindeer .legs:before{content:"";display:block;position:absolute;top:1rem;left:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(-20deg)}.reindeer .legs:after{content:"";display:block;position:absolute;top:1rem;right:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(20deg)}.reindeer .foot{position:absolute;width:3rem;height:1.5rem;background-color:var(--rudolph-leg);border-radius:1.5rem 1.5rem 0 0;top:4.5rem}.reindeer .foot.foot--right{left:3rem}
`,
  rl = () => (
    j(d(nl, 's_0HhqKOJuYCM')),
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'reindeer' },
          [
            l(
              'div',
              null,
              { class: 'antler' },
              [
                l('div', null, { class: 'hook' }, null, 3, null),
                l('div', null, { class: 'hook' }, null, 3, null),
                l('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            l(
              'div',
              null,
              { class: 'antler antler--right' },
              [
                l('div', null, { class: 'hook' }, null, 3, null),
                l('div', null, { class: 'hook' }, null, 3, null),
                l('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            l(
              'div',
              null,
              { class: 'body' },
              [
                l('div', null, { class: 'hand' }, null, 3, null),
                l('div', null, { class: 'hand hand--right' }, null, 3, null),
                l('div', null, { class: 'legs' }, null, 3, null),
                l('div', null, { class: 'foot' }, null, 3, null),
                l('div', null, { class: 'foot foot--right' }, null, 3, null),
              ],
              3,
              null,
            ),
            l(
              'div',
              null,
              { class: 'head' },
              [
                l('div', null, { class: 'ear' }, null, 3, null),
                l('div', null, { class: 'ear ear--right' }, null, 3, null),
                l('div', null, { class: 'face' }, null, 3, null),
                l('div', null, { class: 'eye' }, null, 3, null),
                l('div', null, { class: 'eye eye--right' }, null, 3, null),
                l('div', null, { class: 'nose' }, null, 3, null),
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
      'cm_0',
    )
  ),
  ol = b(d(rl, 's_0Bd6yCHL7MI')),
  il = `.santa-container{position:fixed;z-index:9999;opacity:1;transform-origin:right bottom;animation:init-santa 3s linear 1,walk-around 20s linear 3.2s infinite;height:46.875em;width:37.5em;right:0;bottom:0;transform:scale(.1)}.santa-container .santa{background-color:#edbb93;height:6.25em;width:18.75em;position:absolute;transform:translate(-50%);left:50%;top:17.5em}.santa-container .ears{position:absolute;height:4.37em;width:23.75em;background-color:#e59076;transform:translate(-50%);left:50%;top:18.75em;border-radius:3.12em}.santa-container .santa:before{content:"";position:absolute;height:1.56em;width:1.56em;background-color:#0c2137;border-radius:50%;top:2.5em;left:5em;box-shadow:6.25em 0 #0c2137}.santa-container .moustache{position:absolute;height:4.37em;width:11.25em;background-color:#e3e1ed;left:-2.18em;top:5em;border-radius:3.12em 0}.santa-container .moustache:before{position:absolute;content:"";height:4.37em;width:11.25em;background-color:#e3e1ed;left:11.25em;top:0;border-radius:0 3.12em}.santa-container .beard:after{content:"";background-color:#e3e1ed;height:20.62em;width:6.25em;border-radius:6.87em;position:absolute;top:3.12em;right:9.68em}.santa-container .beard:before{background-color:#d3d2e8;height:17.5em;width:6.87em;border-radius:6.87em;position:absolute;content:"";top:1.87em;right:5em;z-index:0;box-shadow:-8.75em 0 #d3d2e8}.santa-container .beard{background-color:#bfc2e0;height:15.62em;width:6.25em;border-radius:6.87em;position:absolute;top:21.25em;left:25em;box-shadow:-18.75em 0 #bfc2e0}.santa-container .mouth{background:linear-gradient(#ffffff 1.87em,#0c2137 1.87em);height:5.62em;width:4.37em;position:absolute;top:23.75em;left:16.25em;border-radius:0 0 4.375em 4.37em;overflow:hidden}.santa-container .mouth:before{content:"";position:absolute;background-color:#ea385f;height:2.81em;width:3.43em;top:3.43em;left:-.62em;border-radius:.62em}.santa-container .hair{height:5em;width:23.12em;background-color:#c3c1df;position:absolute;transform:translate(-50%);left:50%;top:15em;border-radius:5em}.santa-container .hair:before{position:absolute;content:"";width:25.62em;background-color:#d2d3e6;height:6.25em;left:-1.25em;bottom:2.5em;border-radius:1.25em}.santa-container .hair:after{position:absolute;content:"";height:10em;width:23.75em;background-color:#ea385d;bottom:8.75em;border-radius:16.25em 0 0}.santa-container .hat{position:absolute;background-color:#c82a50;height:6.25em;width:3.12em;left:30.81em;top:1.25em;border-radius:0 2.5em 0 0}.santa-container .hat:before{position:absolute;content:"";background-color:#e1e0ec;height:11.25em;width:11.25em;top:4.37em;left:-1.87em;border-radius:50%}@media screen and (max-width: 800px){.santa-container .container{font-size:.75em}}@keyframes init-santa{0%{bottom:83%}to{bottom:0}}@keyframes init-santa-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}
`,
  sl = () => (
    j(d(il, 's_BsrO2LM87qo')),
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'santa-container' },
          [
            l('div', null, { class: 'ears' }, null, 3, null),
            l('div', null, { class: 'beard' }, null, 3, null),
            l('div', null, { class: 'mouth' }, null, 3, null),
            l('div', null, { class: 'hat' }, null, 3, null),
            l('div', null, { class: 'hair' }, null, 3, null),
            l(
              'div',
              null,
              { class: 'santa' },
              l('div', null, { class: 'moustache' }, null, 3, null),
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      'gI_0',
    )
  ),
  cl = b(d(sl, 's_o6tPurUTJPc')),
  ul = () => ({ name: '', email: '', message: '' }),
  je = O(d(ul, 's_B1VTVZE9Cik')),
  dl = async ({ cacheControl: e }) => {
    e({ staleWhileRevalidate: 604800, maxAge: 5 })
  },
  gl = () => {
    R()
    const e = z(!1)
    we(de, e)
    const t = new Date(),
      a = Z(t, { month: 11, date: 5 }),
      r = Z(t, { year: t.getFullYear() + 1, month: 0, date: 15 }),
      i = ke(t, { start: a, end: r }),
      s = z(i ? new Array(200).fill(0) : null)
    we(Pe, s)
    const u = Z(t, { month: 2, date: 5 }),
      m = Z(t, { month: 3, date: 5 }),
      h = ke(t, { start: u, end: m })
    return o(
      p,
      {
        children: [
          e.value &&
            s.value &&
            l(
              'div',
              null,
              { class: 'snow-container' },
              s.value.map((c, v) =>
                l('div', null, { class: 'snow' }, null, 3, v),
              ),
              1,
              'q8_0',
            ),
          o(ll, null, 3, 'q8_1'),
          l(
            'main',
            null,
            null,
            [
              e.value && !s.value && !h && o(gt, null, 3, 'q8_2'),
              e.value && !s.value && !h && o(pt, null, 3, 'q8_3'),
              e.value && s.value && o(cl, null, 3, 'q8_4'),
              e.value && s.value && o(ol, null, 3, 'q8_5'),
              e.value && h && o(Xt, null, 3, 'q8_6'),
              o(L, null, 3, 'q8_7'),
              o(
                S,
                {
                  children: o(
                    C,
                    {
                      showCta: !1,
                      children: o(
                        Jt,
                        { referral: 'layout', [n]: { referral: n } },
                        3,
                        'q8_8',
                      ),
                      [n]: { showCta: n },
                    },
                    1,
                    'q8_9',
                  ),
                },
                1,
                'q8_10',
              ),
            ],
            1,
            null,
          ),
          o(el, null, 3, 'q8_11'),
        ],
      },
      1,
      'q8_12',
    )
  },
  hl = b(d(gl, 's_6Y0uFrvPmQs')),
  ml = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hl, onGet: dl, useFormLoader: je },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  pl = e => {
    const t = [...e.articles]
    return o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'container mx-auto' },
          l(
            'div',
            null,
            { class: 'grid md:grid-cols-2 justify-items-start gap-12' },
            t.map(a =>
              o(
                _,
                {
                  href: '/' + e.urlBlogBasePath + '/' + a.slug,
                  'data-goatcounter-click': 'open-article',
                  'data-goatcounter-title': 'Open Article',
                  get 'data-goatcounter-referrer'() {
                    return e.referrer || 'referrer'
                  },
                  children: l(
                    'article',
                    null,
                    { class: 'prose' },
                    [
                      l('h3', null, null, y(a, 'title'), 1, null),
                      l(
                        'p',
                        null,
                        { class: 'flex items-center gap-2' },
                        [
                          Ge(new Date(a._firstPublishedAt), 'MMM d, yyyy'),
                          ' ',
                          l(
                            'span',
                            null,
                            {
                              class:
                                'bg-secondary text-black p-1 text-xs rounded uppercase',
                            },
                            y(a, 'language'),
                            1,
                            null,
                          ),
                        ],
                        1,
                        null,
                      ),
                      l('p', null, null, y(a, 'subtitle'), 1, null),
                    ],
                    1,
                    null,
                  ),
                  [n]: {
                    'data-goatcounter-click': n,
                    'data-goatcounter-title': n,
                    'data-goatcounter-referrer': g(
                      r => r.referrer || 'referrer',
                      [e],
                      'p0.referrer||"referrer"',
                    ),
                  },
                },
                1,
                a.id,
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
      'VS_0',
    )
  },
  ge = b(d(pl, 's_aHaxQW3gUTM')),
  fl = e => {
    let t = [...e.items]
    return (
      e.limit && (t = t.splice(0, e.limit)),
      o(
        p,
        {
          children: l(
            'div',
            null,
            null,
            l(
              'div',
              null,
              { class: 'grid md:grid-cols-3 justify-items-center gap-12' },
              t.map(a =>
                o(
                  _,
                  {
                    get href() {
                      return a.href
                    },
                    target: '_blank',
                    get 'aria-label'() {
                      return a.action
                    },
                    class:
                      'card bg-base-100 shadow-xl image-full w-full max-w-[18rem]',
                    'data-goatcounter-click': 'click-card',
                    get 'data-goatcounter-title'() {
                      return a.title
                    },
                    get 'data-goatcounter-referrer'() {
                      return e.referrer || 'referrer'
                    },
                    children: [
                      a.image &&
                        l(
                          'figure',
                          null,
                          null,
                          l(
                            'img',
                            { src: y(a, 'image'), alt: y(a, 'altImage') },
                            { height: 250, width: 250 },
                            null,
                            3,
                            null,
                          ),
                          1,
                          'tS_0',
                        ),
                      l(
                        'div',
                        null,
                        { class: 'card-body' },
                        [
                          l(
                            'h2',
                            null,
                            { class: 'card-title' },
                            y(a, 'title'),
                            1,
                            null,
                          ),
                          l(
                            'p',
                            null,
                            null,
                            [
                              y(a, 'description'),
                              l('br', null, null, null, 3, null),
                              l('br', null, null, null, 3, null),
                              l(
                                'span',
                                null,
                                {
                                  class:
                                    'bg-secondary text-black rounded-3xl p-1 text-xs',
                                },
                                y(a, 'type'),
                                1,
                                null,
                              ),
                            ],
                            1,
                            null,
                          ),
                          l(
                            'div',
                            null,
                            { class: 'card-actions justify-end' },
                            l(
                              'label',
                              null,
                              { class: 'btn btn-square btn-outline btn-sm' },
                              l(
                                'svg',
                                null,
                                {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '22',
                                  height: '22',
                                  viewBox: '0 0 22 22',
                                  fill: 'none',
                                  stroke: 'currentColor',
                                  'stroke-width': '2',
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  class:
                                    'feather feather-external-link h-3 w-3',
                                },
                                [
                                  l(
                                    'path',
                                    null,
                                    {
                                      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                                    },
                                    null,
                                    3,
                                    null,
                                  ),
                                  l(
                                    'polyline',
                                    null,
                                    { points: '15 3 21 3 21 9' },
                                    null,
                                    3,
                                    null,
                                  ),
                                  l(
                                    'line',
                                    null,
                                    { x1: '10', y1: '14', x2: '21', y2: '3' },
                                    null,
                                    3,
                                    null,
                                  ),
                                ],
                                3,
                                null,
                              ),
                              3,
                              null,
                            ),
                            3,
                            null,
                          ),
                        ],
                        1,
                        null,
                      ),
                    ],
                    [n]: {
                      href: B(a, 'href'),
                      target: n,
                      'aria-label': B(a, 'action'),
                      class: n,
                      'data-goatcounter-click': n,
                      'data-goatcounter-title': B(a, 'title'),
                      'data-goatcounter-referrer': g(
                        r => r.referrer || 'referrer',
                        [e],
                        'p0.referrer||"referrer"',
                      ),
                    },
                  },
                  1,
                  a.id,
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
        'tS_1',
      )
    )
  },
  Be = b(d(fl, 's_Yj7Oj0dysis')),
  bl = `.area{background:#4e54c8;background:-webkit-linear-gradient(to left,#8f94fb,#4e54c8);width:100%;height:100vh}.circles{position:absolute;bottom:0;left:0;width:100%;height:calc(100dvh - 64px);overflow:hidden}.circles li{position:absolute;display:block;list-style:none;width:20px;height:20px;background:transparent;animation:animate 25s linear infinite;bottom:-150px}.circles li:nth-child(1){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path fill="rgba(255, 255, 255, 0.2)" d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg> ');left:25%;width:80px;height:80px;animation-delay:0s}.circles li:nth-child(2){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path fill="rgba(255, 255, 255, 0.2)" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>');left:10%;width:35px;height:35px;animation-delay:2s;animation-duration:12s}.circles li:nth-child(3){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path fill="rgba(255, 255, 255, 0.2)" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>');left:70%;width:30px;height:30px;animation-delay:4s}.circles li:nth-child(4){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path fill="rgba(255, 255, 255, 0.2)" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>');left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:18s}.circles li:nth-child(5){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Qwik</title><path fill="rgba(255, 255, 255, 0.2)" d="M7.5469 0a2.957 2.957 0 0 0-2.5606 1.4785L.5332 9.1915a2.957 2.957 0 0 0 0 2.957l4.4531 7.7128A2.955 2.955 0 0 0 7.547 21.338H12l8.5938 2.6484c.2409.0742.4512-.1782.3359-.4023l-1.916-3.7227 4.4531-7.7129a2.957 2.957 0 0 0 0-2.957l-4.4531-7.7129A2.957 2.957 0 0 0 16.453 0zm0 .7656L17.7324 10.67l-1.8965 1.8985.5782 7.5332L6.2676 10.67l2.371-2.373z"/></svg>');left:65%;width:30px;height:30px;animation-delay:0s}.circles li:nth-child(6){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path fill="rgba(255, 255, 255, 0.2)" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>');left:75%;width:110px;height:110px;animation-delay:3s}.circles li:nth-child(7){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path fill="rgba(255, 255, 255, 0.2)" d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>');left:35%;width:150px;height:150px;animation-delay:7s}.circles li:nth-child(8){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flutter</title><path fill="rgba(255, 255, 255, 0.2)" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>');left:50%;width:35px;height:35px;animation-delay:15s;animation-duration:45s}.circles li:nth-child(9){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C Sharp</title><path fill="rgba(255, 255, 255, 0.2)" d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg>');left:20%;width:25px;height:25px;animation-delay:2s;animation-duration:35s}.circles li:nth-child(10){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path fill="rgba(255, 255, 255, 0.2)" d="M9.96 12.648h4.08L12 7.74l-2.04 4.908zM12 0 .828 3.984l1.704 14.772L12 24l9.468-5.244 1.704-14.772L12 0zm6.972 18.312h-2.604l-1.404-3.504H9.036l-1.404 3.504H5.028L12 2.652l6.972 15.66z"/></svg>');left:85%;width:150px;height:150px;animation-delay:.3s;animation-duration:18s}@keyframes animate{0%{transform:translateY(0) rotate(0);opacity:1;border-radius:0}to{transform:translateY(-1000px) rotate(720deg);opacity:0;border-radius:50%}}
`,
  vl = () => (
    j(d(bl, 's_CkFs2bTI3Zs')),
    o(
      p,
      {
        children: l(
          'ul',
          null,
          { class: 'circles' },
          [
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
            l('li', null, null, null, 3, null),
          ],
          3,
          null,
        ),
      },
      3,
      'HG_0',
    )
  ),
  wl = b(d(vl, 's_0hvFUpzGAyM')),
  yl = () =>
    o(
      p,
      {
        children: l(
          'svg',
          null,
          {
            class: 'w-full',
            viewBox: '184.6301 223.3697 497.5289 319.6713',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          l(
            'g',
            null,
            {
              id: 'objects',
              transform: 'matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)',
            },
            l(
              'g',
              null,
              null,
              [
                l(
                  'g',
                  null,
                  null,
                  [
                    l(
                      'path',
                      null,
                      {
                        d: 'M203.088,436.81c0,0,121.289-218.016,234.086-213.367c52.271,2.155,80.667,54.58,189.018,187.39 c23.68,29.025-73.957,0.844-99.832-13.711c0,0,29.678,71.323,17.55,81.504C521.256,497.642,188.534,470.771,203.088,436.81z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        style: 'fill:#FF0000;',
                        d: 'M214.989,431.339c0,0,117.473-205.47,219.314-200.9c52.262,2.345,64.324,43.946,183.472,178.285 c24.855,28.025-78.717-9.817-104.593-24.371c0,0,33.153,80.05,21.025,90.231C511.553,493.6,200.434,465.299,214.989,431.339z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        d: 'M533.792,394.077c-23.439-14.475-31.93-28.12-58.411-67.336c0,0,39.928,64.925,46.647,80.675 c6.72,15.75-3.59-15.027,0.655-15.027S536.182,395.552,533.792,394.077z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        style: 'fill:#BA0808;',
                        d: 'M475.381,326.74c0,0,89.802,82.597,124.642,83.022c0,0-3.117,4.079-3.667,5.668 c-0.417,1.205-47.293-3.131-79.019-31.988C504.21,371.502,484.852,340.772,475.381,326.74z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        d: 'M460.028,332.805c0,0,24.459,12.937,54.497,60.486C525.396,410.499,497.02,347.764,460.028,332.805z',
                      },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                l(
                  'g',
                  null,
                  null,
                  [
                    l(
                      'path',
                      null,
                      {
                        d: 'M556.344,493.337c-0.495-6.746-0.266-11.763-17.707-26.07c-18.356-9.955-32.218-13.512-43.255-14.848 c-3.575-0.434,18.395-3.008,15.385-3.985c-48.516-15.768-95.818-12.332-95.818-12.332l17.284-10.511 c-28.604-7.885-89.09-6.377-115.904-2.459l19.429-9.216c-38.666-1.87-84.902,3.968-107.871,15.085 c-2.298,1.113,1.069-6.262,1.069-6.262l-16.761,4.67c-18.54,6.636-26.521,14.498-27.281,33.827l-0.266,30.723 c-0.547,9.507,11.494,17.166,27.468,13.458c0,0,38.529-8.045,155.166,0.17c110.185,7.761,149.423,34.535,149.423,34.535 c18.271,8.081,28.894-1.364,35.337-19.125L556.344,493.337z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        style: 'fill:#FFFFFF;',
                        d: 'M528.875,536.977c-2.731,0-5.852-0.742-9.28-2.21c-2.893-1.851-11.365-8.533-40.852-16.815 c-2.076-0.583,6.857-1.092,6.857-1.092c-17.284-2.426-53.776-10.246-77.602-13.34c-5.678-0.736,14.43-2.911,8.247-3.54 c-7.153-0.728-40.685,0.111-48.537-0.442c-31.446-2.215-80.92,0.038-99.922-9.867c-2.489-1.299,9.185,6.156,6.465,6.156 c-24.087,0-40.298,0.677-50.245,1.937c-9.512,1.206-13.959-3.055-13.428-2.129c2.351,4.093,0.586,3.785,0.298,3.846l-0.132,0.029 c-2.276,0.528-4.515,0.796-6.654,0.796c-4.98,0-9.374-1.504-11.753-4.024c-1.165-1.234-1.715-2.57-1.634-3.974l0.01-0.297 l0.264-30.629c0.62-15.518,8.887-24.977,30.719-31.243l-3.841,7.378c23.752-10.107,37.347-19.779,95.009-19.811 c-0.869,1.197-13.039,11.432-13.039,11.432s49.021-6.378,118.219,0.293c-0.345,0.98-10.979,8.693-10.979,8.693 s27.088,1.414,30.727,1.414c18.132,0,40.48,4.552,55.287,9.047c-5.862,0.758-8.545,3.736-8.667,4.067 c0,0,7.456,1.579,11.333,2.54c13.608,3.373,54.946,16.387,54.501,37.883l-4.103,26.396 c-6.491,17.443-14.537,17.506-17.238,17.506C528.894,536.977,528.884,536.977,528.875,536.977z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        style: 'fill:#E5E5E5;',
                        d: 'M542.38,527.54c-5.555,9.388-11.281,9.437-13.476,9.437h-0.037c-2.729,0-5.845-0.752-9.277-2.22 c-2.888-1.843-11.365-8.525-40.85-16.809c-2.074-0.583,6.865-1.092,6.865-1.092c-17.296-2.426-53.779-10.249-77.613-13.342 c-5.676-0.74,14.434-2.912,8.248-3.542c-7.156-0.728-40.68,0.109-48.528-0.437c-31.45-2.22-80.923,0.036-99.929-9.873 c-2.486-1.298,9.182,6.162,6.465,6.162c-24.088,0-40.292,0.679-50.238,1.94c-9.521,1.201-13.96-3.056-13.438-2.134 c2.352,4.087,0.594,3.784,0.303,3.845l-0.134,0.036c-2.28,0.521-4.512,0.788-6.646,0.788c-4.985,0-9.376-1.503-11.753-4.026 c-1.176-1.226-1.722-2.571-1.637-3.967l0.012-0.303l0.255-30.625c0.437-10.71,4.499-18.521,14.143-24.404 c-3.026,2.767-10.606,9.034-9.595,20.151l0.379,24.713l0,0c0.48,3.79,2.412,6.049,3.714,7.126 c3.942,3.259,9.092,2.444,14.077,2.444c2.134,0,4.378-0.267,6.646-0.788l0.134-0.036c0.291-0.061,2.049,0.242-0.291-3.845 c-0.534-0.922,3.917,3.335,13.427,2.134c9.945-1.261,26.149-1.939,50.238-1.939c2.729,0-8.951-7.46-6.465-6.162 c19.006,9.909,68.479,7.653,99.929,9.873c7.847,0.546,44.637,3.15,51.793,3.878c6.174,0.63-11.942,4.718-6.267,5.458 c23.833,3.093,57.562,7.328,74.845,9.754c0,0-9.502,1.843-7.429,2.426c29.498,8.284,36.048,11.863,38.947,13.706 c3.42,1.468,6.537,2.22,9.278,2.22c0,0,0.013,0,0.024,0C539.335,528.086,540.705,528.086,542.38,527.54z',
                      },
                      null,
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                l(
                  'g',
                  null,
                  null,
                  [
                    l(
                      'path',
                      null,
                      {
                        d: 'M605.095,470.902c-5.431-4.046-36.53-20.999-24.974-55.587c3.386-10.132,13.794-22.931,20.729-28.708 c0.821-0.684-5.086,14.443-0.303,10.613c15.538-12.441,39.81-23.444,55.914-19.135c1.367,0.365-11.646,7.652-10.29,8.143 c1.887,0.684,26.38,8.642,35.988,29.462c0,0-5.607-4.122-8.688,0.633c-1.833,2.83,6.723,11.623,2.112,34.466 c-2.233,11.067-12.674,28.604-23.56,30.354c0,0,0.815-9.578-1.444-8.624c-26.237,11.081-51.548,7.984-53.772,4.549 C596.574,476.708,608.104,473.147,605.095,470.902z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        style: 'fill:#FFFFFF;',
                        d: 'M608.822,474.511c1.157,0.009,3.928-1.543,2.063-3.746c-2.355-2.785-36.885-17.396-24.813-53.705 c1.679-5.053,8.041-16.109,7.688-13.904c-0.38,2.38,0.308,9.543,4.334,4.48c9.447-11.881,31.036-24.835,44.784-24.465 c0.031,0.349-4.611,2.905-3.173,5.335c1.016,1.72,22.305,4.403,37.19,22.769c-4.756-2.631-8.386,1.096-8.268,2.578 c0.654,8.168,6.186,15.753,2.858,32.772c-1.774,9.07-7.771,21.953-13.181,25.268c-0.985-1.39,0.256-6.953-4.077-10.876 c-0.884-0.799-0.013,1.927-4.843,5.596C631.506,480.192,609.646,475.228,608.822,474.511z',
                      },
                      null,
                      3,
                      null,
                    ),
                    l(
                      'path',
                      null,
                      {
                        style: 'fill:#E5E5E5;',
                        d: 'M672.589,437.448c-0.045,2.924-0.372,6.208-1.128,9.938c-1.849,9.047-7.934,21.897-13.366,25.168 c-0.973-1.401-1.251-7.848-3.069-10.749c-0.253-0.404-0.952,1.77-5.817,5.396c-17.977,13.455-39.798,8.336-40.615,7.615 c1.151,0.008,3.939-1.524,2.087-3.733c-2.212-2.66-33.201-16.129-25.995-48.304c0.181,25.242,25.101,36.229,27.073,38.608 c1.852,2.209-0.927,3.741-2.09,3.731c0.821,0.724,22.651,5.841,40.627-7.613c4.854-3.627,3.983-6.344,4.879-5.557 c2.53,2.225,4.097,9.3,3.999,10.91c5.433-3.273,11.528-16.122,13.366-25.17C672.551,437.606,672.576,437.521,672.589,437.448z',
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
              3,
              null,
            ),
            3,
            null,
          ),
          3,
          null,
        ),
      },
      3,
      'Fg_0',
    ),
  xl = b(d(yl, 's_F4XGSf5645s')),
  kl =
    '/assets/664d087c-pako_cropped.webp 200w, /assets/f00be9d3-pako_cropped.webp 400w, /assets/bdec0c37-pako_cropped.webp 600w, /assets/a93cfc9e-pako_cropped.webp 800w, /assets/65b6374b-pako_cropped.webp 1200w',
  _l = 1200,
  zl = 1200,
  Sl = { srcSet: kl, width: _l, height: zl }
function Ml(e, t, a, r) {
  return l(
    'img',
    { decoding: 'async', loading: 'lazy', ...e },
    Sl,
    void 0,
    3,
    t,
  )
}
const Cl = e => {
    R()
    const t = te(de),
      a = te(Pe),
      r = new Date().getFullYear(),
      i = new Date('1/1/2015').getFullYear(),
      s = lt.toWords(r - i)
    return (
      s.charAt(0).toUpperCase(),
      s.slice(1),
      o(
        p,
        {
          children: l(
            'div',
            null,
            { class: 'hero min-h-[calc(100vh-64px)] bg-base-200' },
            [
              o(wl, null, 3, 'ED_0'),
              l(
                'div',
                null,
                { class: 'hero-content flex-col lg:flex-row' },
                [
                  l(
                    'div',
                    null,
                    { class: 'relative' },
                    [
                      o(
                        Ml,
                        {
                          loading: 'eager',
                          alt: 'Pasquale De Lucia picture',
                          class:
                            'lg:max-w-[18rem] xs:max-w-[8rem] max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                          [n]: { loading: n, alt: n, class: n },
                        },
                        3,
                        'ED_1',
                      ),
                      t.value &&
                        a.value &&
                        o(
                          p,
                          {
                            children: l(
                              'div',
                              null,
                              {
                                class:
                                  'absolute top-[-34px] right-[-48px] w-[100px] rotate-[26deg]',
                              },
                              o(xl, null, 3, 'ED_2'),
                              1,
                              null,
                            ),
                          },
                          1,
                          'ED_3',
                        ),
                    ],
                    1,
                    null,
                  ),
                  l(
                    'div',
                    null,
                    { class: 'prose m-6 md:my-0' },
                    [
                      l(
                        'h1',
                        null,
                        { class: 'text-4xl md:text-5xl font-bold' },
                        [
                          'Pasquale ',
                          l('br', null, { class: 'md:hidden' }, null, 3, null),
                          ' De Lucia',
                        ],
                        3,
                        null,
                      ),
                      l(
                        'p',
                        null,
                        { class: 'text-xl text-gradient' },
                        [
                          'Web Wizard and ',
                          l('strong', null, null, 'JavaScript Lover', 3, null),
                        ],
                        3,
                        null,
                      ),
                      l(
                        'p',
                        null,
                        null,
                        [
                          'I craft digital wonders as a ',
                          g(u => u.role, [e], 'p0.role'),
                          ' at ',
                          g(u => u.company, [e], 'p0.company'),
                          '.',
                        ],
                        3,
                        null,
                      ),
                      l(
                        'p',
                        null,
                        null,
                        [
                          'With a solid ',
                          s,
                          ' years of',
                          ' ',
                          l('strong', null, null, 'web development', 3, null),
                          " under my belt, I'm here to make your online dreams a reality.",
                        ],
                        1,
                        null,
                      ),
                      l(
                        'p',
                        null,
                        null,
                        o(
                          _,
                          {
                            href: '#links',
                            class: 'btn btn-primary text-white',
                            'data-goatcounter-click': 'get-resume',
                            'data-goatcounter-title': 'Get Resume',
                            'data-goatcounter-referrer': 'index-hero',
                            children: 'Get resume',
                            [n]: {
                              href: n,
                              class: n,
                              'data-goatcounter-click': n,
                              'data-goatcounter-title': n,
                              'data-goatcounter-referrer': n,
                            },
                          },
                          3,
                          'ED_4',
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
            ],
            1,
            null,
          ),
        },
        1,
        'ED_5',
      )
    )
  },
  Tl = b(d(Cl, 's_Jevt7v9CDh4')),
  Al = '_icon_mcn59_1',
  ze = { icon: Al },
  Pl = e =>
    o(
      p,
      {
        children: l(
          'ul',
          null,
          null,
          e.links.map(t =>
            l(
              'li',
              null,
              { class: 'mb-4' },
              o(
                _,
                {
                  class:
                    'link-container flex items-center justify-between transition duration-200 bg-primary border-primary border-2 hover:bg-transparent hover:text-primary py-2 w-100 text-white rounded-lg pl-4 md:px-4',
                  get href() {
                    return t.url
                  },
                  target: '_blank',
                  rel: 'noopener',
                  'data-goatcounter-click': 'link-item',
                  get 'data-goatcounter-title'() {
                    return t.title
                  },
                  get 'data-goatcounter-referrer'() {
                    return e.referrer || 'referrer'
                  },
                  children: [
                    l(
                      'span',
                      { dangerouslySetInnerHTML: y(t, 'svg') },
                      { class: ze.icon + ' p-2' },
                      null,
                      3,
                      null,
                    ),
                    l('span', null, null, y(t, 'title'), 1, null),
                    l(
                      'span',
                      { dangerouslySetInnerHTML: y(t, 'svg') },
                      { class: ze.icon + ' p-2 invisible opacity-0' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  [n]: {
                    class: n,
                    href: B(t, 'url'),
                    target: n,
                    rel: n,
                    'data-goatcounter-click': n,
                    'data-goatcounter-title': B(t, 'title'),
                    'data-goatcounter-referrer': g(
                      a => a.referrer || 'referrer',
                      [e],
                      'p0.referrer||"referrer"',
                    ),
                  },
                },
                1,
                'YJ_0',
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
      'YJ_1',
    ),
  jl = b(d(Pl, 's_x0jeNTb2iQc')),
  Bl = '_container_q7mvx_1',
  Ll = { container: Bl },
  Fl = e =>
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'container mx-auto ' + Ll.container },
          [
            l(
              'h3',
              null,
              { class: 'text-center mb-4 text-xl' },
              g(t => t.title, [e], 'p0.title'),
              3,
              null,
            ),
            l(
              'div',
              null,
              { class: 'flex flex-wrap justify-center gap-12' },
              e.stacks.map(t =>
                o(
                  _,
                  {
                    get href() {
                      return t.href
                    },
                    target: '_blank',
                    get 'aria-label'() {
                      return t.href
                    },
                    class: 'w-full max-w-[3rem] min-w-[2rem]',
                    children: l(
                      'div',
                      { dangerouslySetInnerHTML: y(t, 'svg') },
                      null,
                      null,
                      3,
                      null,
                    ),
                    [n]: {
                      href: B(t, 'href'),
                      target: n,
                      'aria-label': B(t, 'href'),
                      class: n,
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
      'uZ_0',
    ),
  K = b(d(Fl, 's_o91wC8IGdho')),
  Ol = e =>
    o(
      p,
      {
        children: l(
          'div',
          null,
          { class: 'container mx-auto w-full h-full' },
          l(
            'div',
            null,
            { class: 'relative wrap overflow-hidden p-10 h-full' },
            [
              l(
                'div',
                null,
                {
                  class:
                    'border-2-2 border-secondary absolute h-full border left-5 md:left-1/2',
                  style: 'border-radius: 1%;',
                },
                null,
                3,
                null,
              ),
              e.items.map(
                (t, a) => (
                  R(),
                  a % 2 === 0
                    ? o(
                        S,
                        {
                          pop: !0,
                          children: l(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline',
                            },
                            [
                              l(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              l(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right',
                                },
                                [
                                  l(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    y(t, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  l(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    y(t, 'company'),
                                    1,
                                    null,
                                  ),
                                  l(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-md md:text-xl' },
                                    y(t, 'role'),
                                    1,
                                    null,
                                  ),
                                  l(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug',
                                    },
                                    y(t, 'description'),
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
                          [n]: { pop: n },
                        },
                        1,
                        t.id,
                      )
                    : o(
                        S,
                        {
                          pop: !0,
                          children: l(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full right-timeline',
                            },
                            [
                              l(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              l(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1  w-full md:w-5/12 px-1 py-4 text-left',
                                },
                                [
                                  l(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    y(t, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  l(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    y(t, 'company'),
                                    1,
                                    null,
                                  ),
                                  l(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-md md:text-xl' },
                                    y(t, 'role'),
                                    1,
                                    null,
                                  ),
                                  l(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug',
                                    },
                                    y(t, 'description'),
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
                          [n]: { pop: n },
                        },
                        1,
                        t.id,
                      )
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
      'VS_0',
    ),
  Il = b(d(Ol, 's_sZIPqDBaEpc')),
  ql = [
    {
      id: 1,
      title: 'Github',
      url: 'https://github.com/VarPDev',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    `,
    },
    {
      id: 2,
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/pasquale-de-lucia-web-dev/',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>    
    `,
    },
    {
      id: 3,
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/8172268/pasquale-de-lucia',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg>
    `,
    },
    {
      id: 4,
      title: 'DEV.to',
      url: 'https://dev.to/varpdev',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>dev.to</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>
    `,
    },
    {
      id: 5,
      title: 'Resume',
      url: '/Pasquale_De_Lucia-Resume.pdf',
      svg: `
      <svg fill="#ffffff" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ReadMe</title><path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8847-3.133 6.138-3.133h3.7373A2.0007 2.0007 0 0 0 24 15.5131V5.2697a2.0007 2.0007 0 0 0-1.9887-2.0006Zm-11.928 11.0557a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9524a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm10.8037 5.0696a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9484a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144v.9524z"/></svg>
    `,
    },
  ],
  Le = [
    {
      id: 6,
      title: 'Qwik',
      description: 'I joined this open source project as a contributor',
      altImage: 'Qwik logo picture',
      image: '/qwik-logo.png',
      action: 'Check framework',
      type: 'Qwik',
      color: 'orange-600',
      href: 'https://qwik.builder.io/',
    },
    {
      id: 5,
      title: 'PLMaker',
      description: 'Price list generator with some utilities',
      altImage: 'price list maker',
      image: '/price-list.jpeg',
      action: 'Try it',
      type: 'NextJS | Angular',
      color: 'orange-600',
      href: 'https://plmaker.dejizen.com/',
    },
    {
      id: 4,
      title: 'Dejizen',
      description: 'A brand that build many things',
      altImage: 'dejizen',
      image: '/dejizen.svg',
      action: 'Try it',
      type: 'NodeJS | pug',
      color: 'orange-600',
      href: 'https://dejizen.com/',
    },
    {
      id: 3,
      title: 'Rick & Morty',
      description:
        'Wiki about Rick and Morty, an adult animated science fiction sitcom',
      altImage: 'rick and morty',
      image: '/rick_and_morty.png',
      action: 'Try it',
      type: 'Angular',
      color: 'orange-600',
      href: 'https://rick-and-morty-e.web.app/',
    },
    {
      id: 2,
      title: 'This website',
      description: 'Feel free to check out how I developed this website',
      altImage: 'Pasquale De Lucia picture',
      image: '/Pako.jpeg',
      action: 'Check code',
      type: 'Qwik',
      color: 'orange-600',
      href: 'https://github.com/VarPDev/pako',
    },
    {
      id: 1,
      title: 'Resume me',
      description: 'An app built with Flutter to share your own resume',
      altImage: 'Resume me app logo',
      image: '/resume_me.png',
      action: 'Download',
      type: 'Flutter',
      color: 'orange-600',
      href: 'https://apps.apple.com/it/app/resume-me/id1663622782',
    },
  ],
  El = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path d="M9.96 12.648h4.08L12 7.74l-2.04 4.908zM12 0 .828 3.984l1.704 14.772L12 24l9.468-5.244 1.704-14.772L12 0zm6.972 18.312h-2.604l-1.404-3.504H9.036l-1.404 3.504H5.028L12 2.652l6.972 15.66z"/></svg>
    `,
      href: 'https://angular.io/',
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>
    `,
      href: 'https://react.dev/',
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flutter</title><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>
    `,
      href: 'https://flutter.dev/',
    },
    {
      id: 4,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>
    `,
      href: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
      id: 5,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>
    `,
      href: 'https://nextjs.org/',
    },
    {
      id: 6,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg>  
    `,
      href: 'https://nuxt.com/',
    },
    {
      id: 7,
      svg: `
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Qwik</title><path d="M7.5469 0a2.957 2.957 0 0 0-2.5606 1.4785L.5332 9.1915a2.957 2.957 0 0 0 0 2.957l4.4531 7.7128A2.955 2.955 0 0 0 7.547 21.338H12l8.5938 2.6484c.2409.0742.4512-.1782.3359-.4023l-1.916-3.7227 4.4531-7.7129a2.957 2.957 0 0 0 0-2.957l-4.4531-7.7129A2.957 2.957 0 0 0 16.453 0zm0 .7656L17.7324 10.67l-1.8965 1.8985.5782 7.5332L6.2676 10.67l2.371-2.373z"/></svg>
    `,
      href: 'https://qwik.builder.io/',
    },
  ],
  Dl = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>
    `,
      href: 'https://nodejs.org/en',
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>
    `,
      href: 'https://www.mongodb.com/en-us',
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C Sharp</title><path d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg>
    `,
      href: 'https://dotnet.microsoft.com/en-us/',
    },
  ],
  Rl = [
    {
      id: 1,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visual Studio Code</title><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
    `,
      href: 'https://code.visualstudio.com/',
    },
    {
      id: 2,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    `,
      href: 'https://github.com/',
    },
    {
      id: 3,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>
    `,
      href: 'https://www.npmjs.com/',
    },
    {
      id: 4,
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
    `,
      href: 'https://tailwindcss.com/',
    },
  ],
  ee = [
    {
      id: 1,
      startDate: 'Jan 2022',
      endDate: 'Current',
      company: 'ScuolaZoo',
      slug: 'The voice of the new generations',
      description: `I started in this company as a full-stack developer, in the first year I developed a new mobile app for IOS and Android, 
      stabilized a platform to create and print your own diary and started to think about the future technology which could be used in ScuolaZoo. 
      In the second year I projected the architecture of all new systems that will replace the old ecosystem, reaching the full-stack engineer promotion.`,
      role: 'Full-stack engineer',
    },
    {
      id: 2,
      startDate: 'Mar 2019',
      endDate: 'Jan 2022',
      company: 'Semantyca',
      description: `Worked in Milan based company Semantyca in a team of 7 people.
    During this three years I taught my colleagues the front-end best practices and new frameworks or new tools, becoming a front-end tech lead.
    I also interacted with customers, to decide on the specifications and for post production.`,
      slug: 'A software house with twenty years of experience in building databases',
      role: 'Lead front-end',
    },
    {
      id: 3,
      startDate: 'Jul 2018',
      endDate: 'Mar 2019',
      company: 'Botsociety',
      description: `I started to did some new features to the existings web products and bug fixing. 
      After showing my potential to the team, I was included in the refactoring of all Botsociety ecosystem.`,
      slug: '',
      role: 'Full-stack JavaScript developer',
    },
    {
      id: 4,
      startDate: 'Jun 2017',
      endDate: 'Jul 2018',
      company: 'MainStreaming',
      description: `I created a library that allows customers to use a full customizable video editor using pure javascript and
    developed the MainStreaming backoffice with Angular framework`,
      slug: '',
      role: 'Full-stack developer',
    },
    {
      id: 5,
      startDate: 'Feb 2016',
      endDate: 'Jun 2017',
      company: 'Zinformatica',
      description: `After demonstrating my aptitude for development, a tech lead selected me to initiate and lead a new AngularJS 
    project, this product allowed our client to drive sales to new heights.`,
      slug: '',
      role: 'Full-stack developer',
    },
  ],
  H = ['finance', 'dev'],
  $l = {
    finance: { title: 'Personal Finance' },
    dev: { title: 'Web Development' },
  },
  Fe = async (e, t, a) => {
    const r = `{
    page (filter: { slug: { eq: "${e}" }, blogType: { eq: "${t}" } }) {
      title
      slug
      subtitle
      language
      cover {
        alt
        url
      }
      content {
        value
        blocks {
          ... on RecordInterface {
            id
            __typename
          }
          ... on  ImageBlockRecord{
            id
            asset {
              alt
              height
              width
              url
              title
              responsiveImage {
                src
                srcSet
                width
                height
                alt
                title
              }
            }
            __typename
          }
        }
        links {
          ... on RecordInterface {
            id
            __typename
          }
          ... on PageRecord {
            id
            slug
            blogType
            __typename
          }
        }
      }
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }`
    return await (
      await fetch('https://graphql.datocms.com/', {
        headers: { Authorization: `Bearer ${a}` },
        method: 'POST',
        body: JSON.stringify({ query: r }),
      })
    ).json()
  },
  Oe = async (e, t, a = 4) => {
    const r = `{
    allPages(first: ${a}, filter: { slug: { notIn: [${H}] }, blogType: { eq: "${t}" } }) {
      id
      title
      subtitle
      slug
      _firstPublishedAt
      language
      cover {
        alt
        url
      }
      _status
      _firstPublishedAt
    }
  }`
    return await (
      await fetch('https://graphql.datocms.com/', {
        headers: { Authorization: `Bearer ${e}` },
        method: 'POST',
        body: JSON.stringify({ query: r }),
      })
    ).json()
  },
  Hl = async (e, t) => {
    const a = `{
    allPages(filter: { slug: { notIn: [${H}] }, blogType: { eq: "${t}" } }) {
      id
      title
      subtitle
      slug
      _firstPublishedAt
      language
      cover {
        alt
        url
      }
      _status
      _firstPublishedAt
    }
  }`
    return await (
      await fetch('https://graphql.datocms.com/', {
        headers: { Authorization: `Bearer ${e}` },
        method: 'POST',
        body: JSON.stringify({ query: a }),
      })
    ).json()
  },
  ae = async (e, t) => {
    const a = `{
        allPages(filter: { slug: { notIn: [${H}] }, blogType: { eq: "${t}" } }) {
          slug
          blogType
        }
      }`
    return await (
      await fetch('https://graphql.datocms.com/', {
        headers: { Authorization: `Bearer ${e}` },
        method: 'POST',
        body: JSON.stringify({ query: a }),
      })
    ).json()
  },
  Nl = `h2{font-size:1.875rem;line-height:2.25rem;font-weight:700;text-transform:uppercase}
`,
  Zl =
    '/assets/b6ff3ea8-badge-first-pr.webp 200w, /assets/fd499dfb-badge-first-pr.webp 400w, /assets/afd2a267-badge-first-pr.webp 600w, /assets/8e87c3b5-badge-first-pr.webp 800w, /assets/59cf075d-badge-first-pr.webp 896w',
  Vl = 896,
  Wl = 768,
  Ql = { srcSet: Zl, width: Vl, height: Wl }
function Ul(e, t, a, r) {
  return l(
    'img',
    { decoding: 'async', loading: 'lazy', ...e },
    Ql,
    void 0,
    3,
    t,
  )
}
const Jl = async e => {
    const t = e.env.get('DATO_CMS_TOKEN')
    return Oe(t || '', 'dev', 4)
  },
  Ie = O(d(Jl, 's_OPVXBMJrrtQ')),
  Yl = () => {
    j(d(Nl, 's_0w9yJ3mmM7E'))
    const e = Ie()
    return o(
      p,
      {
        children: [
          l(
            'section',
            null,
            null,
            o(
              Tl,
              {
                get role() {
                  return ee[0].role
                },
                get company() {
                  return ee[0].company
                },
                [n]: { role: n, company: n },
              },
              3,
              'eZ_0',
            ),
            1,
            null,
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { class: 'title-section text-center' },
                l('h2', null, null, 'Latest projects', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_1',
          ),
          o(
            S,
            {
              children: o(
                C,
                {
                  showCta: !0,
                  ctaHref: '/projects',
                  ctaLabel: 'See more projects',
                  gcClick: 'more-projects',
                  gcTitle: 'More Projects',
                  gcReferrer: 'referrer',
                  children: o(
                    Be,
                    {
                      items: Le,
                      limit: 3,
                      referrer: 'index-project',
                      [n]: { items: n, limit: n, referrer: n },
                    },
                    3,
                    'eZ_2',
                  ),
                  [n]: {
                    showCta: n,
                    ctaHref: n,
                    ctaLabel: n,
                    gcClick: n,
                    gcTitle: n,
                    gcReferrer: n,
                  },
                },
                1,
                'eZ_3',
              ),
            },
            1,
            'eZ_4',
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { class: 'title-section text-center' },
                [
                  l('h2', null, null, 'History', 3, null),
                  l(
                    'p',
                    null,
                    { class: 'text-xl' },
                    'All my experiences',
                    3,
                    null,
                  ),
                ],
                3,
                null,
              ),
            },
            3,
            'eZ_5',
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { class: 'w-11/12 lg:w-5/6 sticky mx-auto' },
                o(Il, { items: ee, [n]: { items: n } }, 3, 'eZ_6'),
                1,
                null,
              ),
            },
            1,
            'eZ_7',
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { class: 'title-section text-center' },
                l(
                  'h2',
                  null,
                  { class: 'font-bold' },
                  'Latest articles',
                  3,
                  null,
                ),
                3,
                null,
              ),
            },
            3,
            'eZ_8',
          ),
          o(
            S,
            {
              children: o(
                C,
                {
                  showCta: !0,
                  ctaHref: '/blog/dev',
                  ctaLabel: 'Read more articles',
                  gcClick: 'more-articles',
                  gcTitle: 'More Articles',
                  gcReferrer: 'referrer',
                  children: o(
                    ge,
                    {
                      urlBlogBasePath: 'blog/dev',
                      get articles() {
                        return e.value.data.allPages
                      },
                      referrer: 'index-article',
                      [n]: {
                        urlBlogBasePath: n,
                        articles: g(
                          t => t.value.data.allPages,
                          [e],
                          'p0.value.data.allPages',
                        ),
                        referrer: n,
                      },
                    },
                    3,
                    'eZ_9',
                  ),
                  [n]: {
                    showCta: n,
                    ctaHref: n,
                    ctaLabel: n,
                    gcClick: n,
                    gcTitle: n,
                    gcReferrer: n,
                  },
                },
                1,
                'eZ_10',
              ),
            },
            1,
            'eZ_11',
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { class: 'title-section text-center' },
                l('h2', null, null, 'Tecnology stack', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_12',
          ),
          o(
            S,
            {
              children: o(
                C,
                {
                  showCta: !1,
                  children: o(
                    K,
                    {
                      title: 'Front end',
                      stacks: El,
                      [n]: { title: n, stacks: n },
                    },
                    3,
                    'eZ_13',
                  ),
                  [n]: { showCta: n },
                },
                1,
                'eZ_14',
              ),
            },
            1,
            'eZ_15',
          ),
          o(
            S,
            {
              children: o(
                C,
                {
                  showCta: !1,
                  children: o(
                    K,
                    {
                      title: 'Back end',
                      stacks: Dl,
                      [n]: { title: n, stacks: n },
                    },
                    3,
                    'eZ_16',
                  ),
                  [n]: { showCta: n },
                },
                1,
                'eZ_17',
              ),
            },
            1,
            'eZ_18',
          ),
          o(
            S,
            {
              children: o(
                C,
                {
                  showCta: !1,
                  children: o(
                    K,
                    {
                      title: 'Tools',
                      stacks: Rl,
                      [n]: { title: n, stacks: n },
                    },
                    3,
                    'eZ_19',
                  ),
                  [n]: { showCta: n },
                },
                1,
                'eZ_20',
              ),
            },
            1,
            'eZ_21',
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { class: 'title-section text-center' },
                l(
                  'h2',
                  null,
                  null,
                  'Open source | My first accepted PR | Qwik',
                  3,
                  null,
                ),
                3,
                null,
              ),
            },
            3,
            'eZ_22',
          ),
          o(
            S,
            {
              children: o(
                C,
                {
                  showCta: !1,
                  children: l(
                    'div',
                    null,
                    { class: 'flex items-center justify-center' },
                    o(
                      Ul,
                      {
                        alt: 'My first PR',
                        class:
                          'max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                        [n]: { alt: n, class: n },
                      },
                      3,
                      'eZ_23',
                    ),
                    1,
                    null,
                  ),
                  [n]: { showCta: n },
                },
                1,
                'eZ_24',
              ),
            },
            1,
            'eZ_25',
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { id: 'links', class: 'title-section text-center' },
                [
                  l('h2', null, null, 'Links', 3, null),
                  l(
                    'p',
                    null,
                    { class: 'text-xl' },
                    'Stay updated or get in touch on my socials',
                    3,
                    null,
                  ),
                ],
                3,
                null,
              ),
            },
            3,
            'eZ_26',
          ),
          o(
            S,
            {
              children: l(
                'section',
                null,
                { class: 'link-section' },
                o(
                  jl,
                  {
                    links: ql,
                    referrer: 'index',
                    [n]: { links: n, referrer: n },
                  },
                  3,
                  'eZ_27',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_28',
          ),
        ],
      },
      1,
      'eZ_29',
    )
  },
  Gl = b(d(Yl, 's_tstUEhxLUWc')),
  Xl = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  Kl = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gl, head: Xl, useLatestDevArticles: Ie },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ea = () =>
    o(
      p,
      {
        children: o(
          C,
          {
            showCta: !1,
            children: l(
              'div',
              null,
              { class: 'flex flex-col gap-12 items-center justify-center' },
              [
                l('h1', null, { class: 'mb-6' }, 'OPSS!', 3, null),
                l(
                  'p',
                  null,
                  null,
                  [
                    "Uh-oh! It looks like you've wandered into the cosmic void of cyberspace. Our binary aliens are throwing a rave just around the corner. Hurry back before they invite you to dance in zeros and ones! Alternatively, try our game at this",
                    ' ',
                    o(
                      _,
                      {
                        href: '../button-game',
                        children: 'link',
                        [n]: { href: n },
                      },
                      3,
                      'OH_0',
                    ),
                    '.',
                  ],
                  1,
                  null,
                ),
                l(
                  'img',
                  null,
                  {
                    decoding: 'async',
                    loading: 'lazy',
                    src: ' /aliens-alien.gif',
                    width: '1200',
                    height: '1200',
                  },
                  null,
                  3,
                  null,
                ),
              ],
              1,
              null,
            ),
            [n]: { showCta: n },
          },
          1,
          'OH_1',
        ),
      },
      1,
      'OH_2',
    ),
  ta = b(d(ea, 's_bavVtvgbxHE')),
  la = {
    title: 'Pasquale De Lucia - Full-stack engineer - 404',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  aa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ta, head: la },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
function na(e) {
  const t = 'https://pasqualedelucia.com'
  return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${e.map(
  a => `
    <url>
        <loc>${t}${a.loc.startsWith('/') ? '' : '/'}${a.loc}</loc>
        <priority>${a.priority}</priority>
    </url>`,
)}
</urlset>`.trim()
}
const ra = async e => {
    const t = Ze.map(([c]) => c).filter(
        c => c !== '/' && c !== 'finance/[slug]/',
      ),
      a = e.env.get('DATO_CMS_TOKEN'),
      r = await ae(a ?? '', 'dev'),
      s = (await ae(a ?? '', 'finance')).data.allPages.map(
        c => `finance/${c.slug}/`,
      ),
      u = r.data.allPages.map(c => `blog/${c.slug}/`)
    t.push(...s, ...u)
    const m = na([
        { loc: '/', priority: 1 },
        ...t.map(c => ({ loc: c, priority: 0.9 })),
      ]),
      h = new Response(m, {
        status: 200,
        headers: { 'Content-Type': 'text/xml' },
      })
    e.send(h)
  },
  oa = Object.freeze(
    Object.defineProperty({ __proto__: null, onGet: ra }, Symbol.toStringTag, {
      value: 'Module',
    }),
  )
function Q(e) {
  let t = 1
  for (let a = 0; a < e; a++) t *= (100 - a) / 100
  return t
}
function qe(e) {
  return Math.floor(Math.random() * e)
}
const ia = () => {
    const [e, t, a, r] = T(),
      i = qe(100)
    e.value === 100
      ? ((e.value = 0), (a.value = 100))
      : (i <= a.value
          ? (e.value++, a.value--, e.value > t.value && (t.value = e.value))
          : ((e.value = 0), (a.value = 100)),
        (r.value = Q(a.value)))
  },
  sa = () => {
    const e = z(100)
    Q(100)
    const t = z(Q(e.value)),
      a = z(0),
      r = z(0),
      i = d(ia, 's_SqNyGWM7k0k', [a, r, e, t])
    return o(
      p,
      {
        children: [
          l(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              l('h1', null, { class: 'mb-4' }, 'Buttom game', 3, null),
              l(
                'h3',
                null,
                { class: 'mb-4' },
                "This game requires no skills but only LUCK. If you think you're lucky, try to win!",
                3,
                null,
              ),
              l(
                'p',
                null,
                { class: 'text-lg mb-4' },
                [
                  'There are 100 levels in this challenge. As you successfully conquer each level, the probability of passing the next one decreases by 1%.',
                  l(
                    'span',
                    null,
                    {
                      class: 'tooltip tooltip-left ml-2 top-[2px]',
                      'data-tip':
                        'Commencing with a full 100% chance of success for the initial level, each subsequent accomplishment introduces an added layer of difficulty. Navigate through the escalating challenges and witness the diminishing odds, putting your luck to the test with each passing level.',
                    },
                    l(
                      'svg',
                      null,
                      {
                        class: 'w-5 h-5',
                        viewBox: '0 0 20 20',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      l(
                        'path',
                        null,
                        {
                          class: 'fill-secondary',
                          'fill-rule': 'evenodd',
                          d: 'M0 10C0 4.478 4.478 0 10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002H8.989v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533H6.304C6.364 4.693 8.18 3.5 10.294 3.5c2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777V12zm.17 3.012a1.344 1.344 0 01-1.327 1.328 1.32 1.32 0 01-1.328-1.328 1.318 1.318 0 011.328-1.316c.712 0 1.322.592 1.328 1.316z',
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
                ],
                3,
                null,
              ),
              l('p', null, null, null, 3, null),
            ],
            3,
            null,
          ),
          l(
            'section',
            null,
            { class: 'link-section' },
            l(
              'div',
              null,
              { class: 'grid grid-cols-1 gap-6 justify-items-center' },
              [
                l(
                  'div',
                  {
                    class: `text-center button w-36 h-36 md:w-48 md:h-48 rounded-full cursor-pointer select-none
    active:translate-y-4
    active:border-b-[0px]
    transition-all duration-150
    border-[5px] ${a.value === 100 ? 'border-green-400 bg-green-500 active:[box-shadow:0_0px_0_0_#298a09,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#298a09,0_13px_0_0_#1b70f841]' : 'border-red-400 bg-red-500 active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]'}`,
                  },
                  { onClick$: i },
                  l(
                    'span',
                    null,
                    {
                      class:
                        'flex flex-col justify-center items-center h-full text-white font-bold text-[5rem] opacity-50',
                    },
                    g(s => s.value, [a], 'p0.value'),
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                l(
                  'p',
                  null,
                  { class: 'text-xl mt-6' },
                  ['MAX ', g(s => s.value, [r], 'p0.value')],
                  3,
                  null,
                ),
                l(
                  'p',
                  null,
                  null,
                  g(
                    s => (s.value === 100 ? 'HAI VINTO' : ''),
                    [a],
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
      'CD_0',
    )
  },
  ca = b(d(sa, 's_lVhXlSc0AIU')),
  ua = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  da = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getRandomInt: qe,
        _auto_probabilityOfSuccess: Q,
        default: ca,
        head: ua,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ga = () =>
    o(
      p,
      {
        children: [
          l(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              l('h1', null, null, 'Projects', 3, null),
              l('h2', null, null, 'Check out my projects', 3, null),
            ],
            3,
            null,
          ),
          o(
            C,
            {
              showCta: !1,
              children: o(
                Be,
                {
                  items: Le,
                  referrer: 'page-projects',
                  [n]: { items: n, referrer: n },
                },
                3,
                'Mg_0',
              ),
              [n]: { showCta: n },
            },
            1,
            'Mg_1',
          ),
        ],
      },
      1,
      'Mg_2',
    ),
  ha = b(d(ga, 's_yMerZA5h0Vw')),
  ma = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  pa = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ha, head: ma },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  fa = e => {
    const [t, a, r] = T()
    if (((r.value = e.target.value), r.value)) {
      const i = r.value.toLowerCase()
      a.value = [
        ...t.value.data.allPages.filter(
          s =>
            s.title.toLowerCase().includes(i) ||
            s.subtitle.toLowerCase().includes(i),
        ),
      ]
    } else a.value = [...t.value.data.allPages]
  },
  ba = e => {
    const t = Ee(),
      a = z([...t.value.data.allPages]),
      r = z(''),
      i = d(fa, 's_EHyjUobaAp4', [t, a, r])
    return o(
      p,
      {
        children: [
          l(
            'section',
            null,
            { class: 'title-section flex flex-col items-center gap-4' },
            [
              l('h1', null, null, y($l[e.blogType], 'title'), 1, null),
              l('h2', null, null, 'Find out what I write about', 3, null),
              l(
                'label',
                null,
                { class: 'input flex items-center gap-2 w-full max-w-xs' },
                [
                  l(
                    'input',
                    null,
                    {
                      type: 'text',
                      placeholder: 'Search articles',
                      class: 'grow',
                      value: g(s => s.value, [r], 'p0.value'),
                      onInput$: i,
                    },
                    null,
                    3,
                    null,
                  ),
                  l(
                    'svg',
                    null,
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 16 16',
                      fill: 'currentColor',
                      class: 'h-4 w-4 opacity-70',
                    },
                    l(
                      'path',
                      null,
                      {
                        'fill-rule': 'evenodd',
                        d: 'M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z',
                        'clip-rule': 'evenodd',
                      },
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
            ],
            1,
            null,
          ),
          o(
            C,
            {
              showCta: !1,
              children: o(
                ge,
                {
                  get urlBlogBasePath() {
                    return e.urlBlogBasePath
                  },
                  get articles() {
                    return a.value
                  },
                  referrer: 'page-articles',
                  [n]: {
                    urlBlogBasePath: g(
                      s => s.urlBlogBasePath,
                      [e],
                      'p0.urlBlogBasePath',
                    ),
                    articles: g(s => s.value, [a], 'p0.value'),
                    referrer: n,
                  },
                },
                3,
                'AT_0',
              ),
              [n]: { showCta: n },
            },
            1,
            'AT_1',
          ),
        ],
      },
      1,
      'AT_2',
    )
  },
  va = b(d(ba, 's_T5FLviseEE0')),
  wa = async e => {
    const { blogType: t } = e.params,
      a = e.env.get('DATO_CMS_TOKEN')
    return Hl(a || '', t)
  },
  Ee = O(d(wa, 's_2lUXkuT24as')),
  ya = () => {
    const e = re()
    return o(
      p,
      {
        children: o(
          va,
          {
            get urlBlogBasePath() {
              return 'blog/' + e.params.blogType
            },
            get blogType() {
              return e.params.blogType
            },
            [n]: {
              urlBlogBasePath: g(
                t => 'blog/' + t.params.blogType,
                [e],
                '"blog/"+p0.params.blogType',
              ),
              blogType: g(t => t.params.blogType, [e], 'p0.params.blogType'),
            },
          },
          3,
          'g1_0',
        ),
      },
      1,
      'g1_1',
    )
  },
  xa = b(d(ya, 's_yxS0OFfEfa0')),
  ka = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  _a = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xa, head: ka, useListArticles: Ee },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  za = () =>
    o(
      p,
      {
        children: l(
          'div',
          null,
          { role: 'alert', class: 'alert' },
          [
            l(
              'svg',
              null,
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                class: 'stroke-info h-6 w-6 shrink-0',
              },
              l(
                'path',
                null,
                {
                  'stroke-linecap': 'round',
                  'stroke-linejoin': 'round',
                  'stroke-width': '2',
                  d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                },
                null,
                3,
                null,
              ),
              3,
              null,
            ),
            l(
              'span',
              null,
              null,
              "Questo blog non offre consigli finanziari, ma condivide esclusivamente la mia esperienza personale, con l'intento di fornire spunti e riflessioni basate sul mio percorso.",
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      'vH_0',
    ),
  Sa = b(d(za, 's_GzGDOMI0hrg')),
  De = at({ scopeId: '' })
function Ma(e, t, a, r) {
  return W(De.Provider, {
    value: { el: e, scopeId: t, attachedEl: void 0 },
    children: W(a, { ...r, children: W(Re, null) }),
  })
}
class Re extends nt {
  constructor() {
    super(...arguments), (this.slotC = rt())
  }
  shouldComponentUpdate() {
    return !1
  }
  componentDidMount() {
    const t = this.slotC.current
    if (t) {
      const { attachedEl: a, el: r } = this.context
      if (r) {
        if (!a) t.appendChild(r)
        else if (a !== t) throw new Error('already attached')
      }
    }
  }
  render() {
    return W('q-slotc', {
      class: this.context.scopeId,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: '<!--SLOT-->' },
      ref: this.slotC,
    })
  }
}
Re.contextType = De
const Ca = e => {
    const t = {}
    return (
      Object.keys(e).forEach(a => {
        if (!a.startsWith('client:') && !a.startsWith('host:')) {
          const r = a.endsWith('$') ? a.slice(0, -1) : a
          t[r] = e[a]
        }
      }),
      t
    )
  },
  $e = e => {
    const t = {}
    return (
      Object.keys(e).forEach(a => {
        a.startsWith('host:') && (t[a.slice(Pa.length)] = e[a])
      }),
      t
    )
  },
  Ta = () => {
    const [e] = T()
    return (e.value = !0)
  },
  Aa = (e, t = {}) => {
    const a = z(!1),
      r = d(Ta, 's_6LYztwGzxAA', [a]),
      i = !!(e['client:only'] || (t != null && t.clientOnly))
    return (
      (e['client:visible'] ||
        (t == null ? void 0 : t.eagerness) === 'visible') &&
        N('qvisible', r),
      (e['client:idle'] || (t == null ? void 0 : t.eagerness) === 'idle') &&
        xe('qidle', r),
      (e['client:load'] ||
        i ||
        (t == null ? void 0 : t.eagerness) === 'load') &&
        xe('qinit', r),
      (e['client:hover'] || (t == null ? void 0 : t.eagerness) === 'hover') &&
        N('mouseover', r),
      e['client:event'] && N(e['client:event'], r),
      t != null && t.event && N(t == null ? void 0 : t.event, r),
      [a, i, r]
    )
  },
  Pa = 'host:'
async function ja(e, t, a, r, i, s, u) {
  {
    const m = await t.resolve(),
      h = Ca(r)
    Object.assign(u, h)
    const c = ot(Ma(void 0, a, m, h)),
      v = c.indexOf('<!--SLOT-->')
    if (v > 0) {
      const w = c.slice(0, v),
        f = c.slice(v + 11)
      return o(
        e,
        {
          ref: i,
          ...$e(r),
          children: o(
            Je,
            {
              children: async function* () {
                yield o(U, { data: w }, 3, '0a_3'),
                  yield l(
                    'q-slot',
                    { ref: s },
                    null,
                    o(L, null, 3, '0a_4'),
                    1,
                    null,
                  ),
                  yield o(U, { data: f }, 3, '0a_5')
              },
            },
            1,
            '0a_6',
          ),
        },
        1,
        '0a_7',
      )
    }
    return o(
      p,
      {
        children: [
          o(e, { ref: i, children: o(U, { data: c }, 3, '0a_8') }, 1, '0a_9'),
          l('q-slot', { ref: s }, null, o(L, null, 3, '0a_10'), 1, null),
        ],
      },
      1,
      '0a_11',
    )
  }
}
const Ba = 'q-slot{display:none} q-slotc,q-slotc>q-slot{display:contents}',
  La = async ({ track: e }) => {
    const [t, a, r, i, s, u, m, h, c] = T()
    e(() => ({ ...s })), e(m)
  },
  Fa = e => {
    const [t, a] = T()
    R()
    const r = j(d(Ba, 's_hkT84xKSMLE')),
      i = z(),
      s = z(),
      u = z(),
      [m, h] = Aa(e, t),
      c = {},
      v = (t == null ? void 0 : t.tagName) ?? 'qwik-react'
    if ((Qe(d(La, 's_EWIT9ENzUX0', [i, c, u, h, e, a, m, s, r])), !h)) {
      const w = ja(v, a, r.scopeId, e, i, s, c)
      return o(ye, { children: w }, 1, 2)
    }
    return o(
      ye,
      {
        children: [
          o(
            v,
            {
              ...$e(e),
              ref: w => {
                i.value = w
              },
              children: Ue,
              [n]: { ref: n },
            },
            1,
            '6S_0',
          ),
          l('q-slot', { ref: s }, null, o(L, null, 3, '6S_1'), 1, null),
        ],
      },
      1,
      '6S_2',
    )
  }
function Oa(e, t) {
  return b(d(Fa, 's_zH94hIe0Ick', [t, e]))
}
function Ia(e) {
  return X(st, {
    data: e.data,
    renderBlock: ({ record: t }) => {
      switch (t.__typename) {
        case 'ImageBlockRecord':
          return X(it, { data: t.asset.responsiveImage })
        default:
          return null
      }
    },
    renderLinkToRecord: ({ record: t, children: a, transformedMeta: r }) => {
      switch (t.__typename) {
        case 'PageRecord':
          return X('a', { ...r, href: `/${t.blogType}/${t.slug}`, children: a })
        default:
          return null
      }
    },
  })
}
const qa = Oa(d(Ia, 's_h5ZUTiJtg0M')),
  Ea = `.blog-content{p {margin-bottom: 1rem;} p {margin-top: 1rem;} ul,ol {list-style-position: outside;} ul,ol {padding-inline-start: 2rem;} ul {list-style-type: disc;} ol {list-style-type: decimal;} a { --tw-text-opacity: 1; color: var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity, 1))); } pre {border-radius: .75rem;} pre { --tw-bg-opacity: 1; background-color: var(--fallback-sc,oklch(var(--sc)/var(--tw-bg-opacity, 1))); } pre {-moz-tab-size: 2; -o-tab-size: 2; tab-size: 2;} code {font-family: monospace; font-size: inherit;} pre code {display: block;} pre code {min-width: 100px;} pre code {max-width: 100%;} pre code {background-image: none;} pre code {padding: 1.5rem;} pre code {white-space: pre; -webkit-overflow-scrolling: touch; overflow-x: scroll;}}
`,
  Da = () => {
    const [e] = T()
    ;(e.value = !1), localStorage.setItem('pako-ita-warn', 'closed')
  },
  Ra = e => {
    R(), Ye(d(Ea, 's_2A8V0pFvVL0'))
    const t = z(!1),
      a = d(Da, 's_MPTU77x6T2Q', [t])
    return (
      ne(F('s_0EhuNoWgjY4', [t])),
      o(
        p,
        {
          children: [
            l(
              'section',
              null,
              {
                class: 'cover-section text-center',
                style: g(
                  r => {
                    var i
                    return (
                      "background-image: url('" +
                      ((i = r.page.cover) == null ? void 0 : i.url) +
                      "')"
                    )
                  },
                  [e],
                  `"background-image: url('"+p0.page.cover?.url+"')"`,
                ),
              },
              l(
                'div',
                null,
                { class: 'content' },
                [
                  l(
                    'h1',
                    null,
                    null,
                    g(r => r.page.title, [e], 'p0.page.title'),
                    3,
                    null,
                  ),
                  l(
                    'h2',
                    null,
                    null,
                    g(r => r.page.subtitle, [e], 'p0.page.subtitle'),
                    3,
                    null,
                  ),
                ],
                3,
                null,
              ),
              3,
              null,
            ),
            e.showFinanceWarn &&
              l(
                'section',
                null,
                { class: 'title-section' },
                o(Sa, null, 3, '1P_0'),
                1,
                '1P_1',
              ),
            o(
              C,
              {
                showCta: !1,
                sectionClass: 'blog-content',
                children: o(
                  qa,
                  {
                    get data() {
                      return e.page.content
                    },
                    [n]: {
                      data: g(r => r.page.content, [e], 'p0.page.content'),
                    },
                  },
                  3,
                  '1P_2',
                ),
                [n]: { showCta: n, sectionClass: n },
              },
              1,
              '1P_3',
            ),
            e.latestArticle &&
              o(
                p,
                {
                  children: [
                    l(
                      'section',
                      null,
                      { class: 'title-section text-center' },
                      l(
                        'h2',
                        null,
                        { class: 'font-bold text-3xl uppercase' },
                        'Latest articles',
                        3,
                        null,
                      ),
                      3,
                      null,
                    ),
                    o(
                      C,
                      {
                        showCta: !0,
                        get ctaHref() {
                          return '/' + e.urlBlogBasePath + '/all'
                        },
                        ctaLabel: 'Scopri tutti gli articoli',
                        get gcClick() {
                          return 'more-' + e.blogType + '-articles'
                        },
                        get gcTitle() {
                          return 'More ' + e.blogType + ' Articles'
                        },
                        gcReferrer: 'referrer',
                        children: o(
                          ge,
                          {
                            get urlBlogBasePath() {
                              return e.urlBlogBasePath
                            },
                            get articles() {
                              return e.latestArticle
                            },
                            referrer: 'index-article',
                            [n]: {
                              urlBlogBasePath: g(
                                r => r.urlBlogBasePath,
                                [e],
                                'p0.urlBlogBasePath',
                              ),
                              articles: g(
                                r => r.latestArticle,
                                [e],
                                'p0.latestArticle',
                              ),
                              referrer: n,
                            },
                          },
                          3,
                          '1P_4',
                        ),
                        [n]: {
                          showCta: n,
                          ctaHref: g(
                            r => '/' + r.urlBlogBasePath + '/all',
                            [e],
                            '"/"+p0.urlBlogBasePath+"/all"',
                          ),
                          ctaLabel: n,
                          gcClick: g(
                            r => 'more-' + r.blogType + '-articles',
                            [e],
                            '"more-"+p0.blogType+"-articles"',
                          ),
                          gcTitle: g(
                            r => 'More ' + r.blogType + ' Articles',
                            [e],
                            '"More "+p0.blogType+" Articles"',
                          ),
                          gcReferrer: n,
                        },
                      },
                      1,
                      '1P_5',
                    ),
                  ],
                },
                1,
                '1P_6',
              ),
            t.value &&
              e.page.language === 'ita' &&
              l(
                'div',
                null,
                {
                  role: 'alert',
                  class: 'alert alert-info z-[999] fixed bottom-2 w-[98%]',
                },
                [
                  l(
                    'svg',
                    null,
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      fill: 'none',
                      viewBox: '0 0 24 24',
                      class: 'h-6 w-6 shrink-0 stroke-current',
                    },
                    l(
                      'path',
                      null,
                      {
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        'stroke-width': '2',
                        d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                      },
                      null,
                      3,
                      null,
                    ),
                    3,
                    null,
                  ),
                  l('span', null, null, 'Italian content', 3, null),
                  l(
                    'div',
                    null,
                    null,
                    l(
                      'button',
                      null,
                      { class: 'btn btn-sm btn-primary', onClick$: a },
                      'Close',
                      3,
                      null,
                    ),
                    3,
                    null,
                  ),
                ],
                3,
                '1P_7',
              ),
          ],
        },
        1,
        '1P_8',
      )
    )
  },
  He = b(d(Ra, 's_TBWAb6R23ho')),
  $a = () => ({ params: H.map(e => ({ blogType: e })) }),
  Ha = async e => {
    const { blogType: t } = e.params,
      a = e.env.get('DATO_CMS_TOKEN')
    return Fe(t, t, a || '')
  },
  he = O(d(Ha, 's_qx30OZpqr64')),
  Na = async e => {
    const { blogType: t } = e.params,
      a = e.env.get('DATO_CMS_TOKEN')
    return Oe(a || '', t)
  },
  Ne = O(d(Na, 's_F0CVkeQsnQw')),
  Za = () => {
    const e = re(),
      t = he(),
      a = Ne()
    return o(
      p,
      {
        children: o(
          He,
          {
            get urlBlogBasePath() {
              return 'blog/' + e.params.blogType
            },
            get blogType() {
              return e.params.blogType
            },
            get page() {
              return t.value.data.page
            },
            get latestArticle() {
              return a.value.data.allPages
            },
            get showFinanceWarn() {
              return e.params.blogType === 'finance'
            },
            [n]: {
              urlBlogBasePath: g(
                r => 'blog/' + r.params.blogType,
                [e],
                '"blog/"+p0.params.blogType',
              ),
              blogType: g(r => r.params.blogType, [e], 'p0.params.blogType'),
              page: g(r => r.value.data.page, [t], 'p0.value.data.page'),
              latestArticle: g(
                r => r.value.data.allPages,
                [a],
                'p0.value.data.allPages',
              ),
              showFinanceWarn: g(
                r => r.params.blogType === 'finance',
                [e],
                'p0.params.blogType==="finance"',
              ),
            },
          },
          3,
          'jn_0',
        ),
      },
      1,
      'jn_1',
    )
  },
  Va = b(d(Za, 's_0FnePCDMnMQ')),
  Wa = ({ resolveValue: e, params: t }) => {
    const r = e(he).data.page.seo,
      i = r.find(u => u.tag === 'title'),
      s = r.filter(u => u.tag === 'meta')
    return {
      title: i.content,
      meta: s.map(u => ({
        name: u.attributes.property,
        content: u.attributes.content,
      })),
    }
  },
  Qa = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Va,
        head: Wa,
        onStaticGenerate: $a,
        useArticle: he,
        useLatestArticles: Ne,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ua = async e => {
    const { slug: t, blogType: a } = e.params,
      r = e.env.get('DATO_CMS_TOKEN')
    return Fe(t, a, r || '')
  },
  me = O(d(Ua, 's_bd3rH0wPYj8')),
  Ja = async ({ env: e }) => {
    const t = e.get('DATO_CMS_TOKEN'),
      a = []
    for (const r of H) {
      const i = await ae(t ?? '', r)
      a.push(...i.data.allPages, { slug: 'all', blogType: r })
    }
    return { params: a.map(r => ({ slug: r.slug, blogType: r.blogType })) }
  },
  Ya = () => {
    const e = re(),
      t = me()
    return o(
      p,
      {
        children: o(
          He,
          {
            get urlBlogBasePath() {
              return 'blog/' + e.params.blogType
            },
            get blogType() {
              return e.params.blogType
            },
            get showFinanceWarn() {
              return e.params.blogType === 'finance'
            },
            get page() {
              return t.value.data.page
            },
            [n]: {
              urlBlogBasePath: g(
                a => 'blog/' + a.params.blogType,
                [e],
                '"blog/"+p0.params.blogType',
              ),
              blogType: g(a => a.params.blogType, [e], 'p0.params.blogType'),
              showFinanceWarn: g(
                a => a.params.blogType === 'finance',
                [e],
                'p0.params.blogType==="finance"',
              ),
              page: g(a => a.value.data.page, [t], 'p0.value.data.page'),
            },
          },
          3,
          'f0_0',
        ),
      },
      1,
      'f0_1',
    )
  },
  Ga = b(d(Ya, 's_lwtdEk0VDEs')),
  Xa = ({ resolveValue: e, params: t }) => {
    const r = e(me).data.page.seo,
      i = r.find(u => u.tag === 'title'),
      s = r.filter(u => u.tag === 'meta')
    return {
      title: i.content,
      meta: s.map(u => ({
        name: u.attributes.property,
        content: u.attributes.content,
      })),
    }
  },
  Ka = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Ga,
        head: Xa,
        onStaticGenerate: Ja,
        useArticle: me,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  e1 = [],
  P = () => ml,
  Ze = [
    ['/', [P, () => Kl], '/', ['q-c8186c1a.js', 'q-cb073544.js']],
    [
      '404.html',
      [P, () => aa],
      '/404.html',
      ['q-c8186c1a.js', 'q-df5c9952.js'],
    ],
    [
      'dynamic-sitemap.xml',
      [P, () => oa],
      '/dynamic-sitemap.xml',
      ['q-c8186c1a.js', 'q-c31a0420.js'],
    ],
    [
      'button-game/',
      [P, () => da],
      '/button-game/',
      ['q-c8186c1a.js', 'q-ac2829a6.js'],
    ],
    [
      'projects/',
      [P, () => pa],
      '/projects/',
      ['q-c8186c1a.js', 'q-7adb3d34.js'],
    ],
    [
      'blog/[blogType]/all/',
      [P, () => _a],
      '/blog/[blogType]/all/',
      ['q-c8186c1a.js', 'q-c319a99f.js'],
    ],
    [
      'blog/[blogType]/',
      [P, () => Qa],
      '/blog/[blogType]/',
      ['q-c8186c1a.js', 'q-1850812e.js'],
    ],
    [
      'blog/[blogType]/[slug]/',
      [P, () => Ka],
      '/blog/[blogType]/[slug]/',
      ['q-c8186c1a.js', 'q-d854875e.js'],
    ],
  ],
  t1 = [],
  l1 = !0,
  a1 = '/',
  n1 = !0,
  m1 = {
    routes: Ze,
    serverPlugins: e1,
    menus: t1,
    trailingSlash: l1,
    basePathname: a1,
    cacheModules: n1,
  }
export {
  a1 as basePathname,
  n1 as cacheModules,
  m1 as default,
  t1 as menus,
  Ze as routes,
  e1 as serverPlugins,
  l1 as trailingSlash,
}
