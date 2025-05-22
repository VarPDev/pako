import {
  c as b,
  i as u,
  u as k,
  a as se,
  _ as o,
  b as e,
  S as L,
  F as f,
  d as q,
  e as j,
  f as M,
  g as I,
  h as a,
  j as il,
  n as Pe,
  k as w,
  l as p,
  m as Ie,
  o as ae,
  L as _,
  r as B,
  p as H,
  q as re,
  s as G,
  t as F,
  v as ce,
  w as sl,
  R as Te,
  x as cl,
  y as U,
  z as Ae,
  A as ul,
  B as X,
} from './q-56017ed5.js'
import { set as Q, isWithinInterval as Le, format as dl } from 'date-fns'
import {
  safeParseAsync as gl,
  getDotPath as hl,
  object as ue,
  pipe as O,
  string as E,
  minLength as D,
  email as Fe,
} from 'valibot'
import ml from 'number-to-words'
import {
  createContext as pl,
  Component as fl,
  createRef as bl,
  createElement as J,
} from 'react'
import { renderToString as vl } from 'react-dom/server'
import { jsx as ee } from 'react/jsx-runtime'
import { SRCImage as wl } from 'react-datocms'
import { StructuredText as yl } from 'react-datocms/structured-text'
const xl = l => {
    const t = k(),
      n = k(!1),
      r = { el: t, isVisible: n, observer: null }
    return (
      se(q('s_CHnWD2D8Ibg', [r])),
      o(
        f,
        {
          children: e(
            'div',
            {
              ref: r.el,
              class: `w-full animation ${l.pop && 'pop'}
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
  S = b(u(xl, 's_sdm0n9ZoKr0')),
  kl = `.cat-background{position:fixed;height:170px;width:192.1px;top:50%;left:50%;margin-top:-85px;margin-left:-96px;z-index:-1;opacity:.2}.cat-background .ear{position:absolute;top:-30%;height:60%;width:25%;background:#fff}.cat-background .ear:before,.cat-background .ear:after{content:"";position:absolute;bottom:24%;height:10%;width:5%;border-radius:50%;background:#161616}.cat-background .ear:after{transform-origin:50% 100%}.cat-background .ear--left{left:-7%;border-radius:70% 30% 0% 0%/100% 100% 0% 0%;transform:rotate(-15deg)}.cat-background .ear--left:before,.cat-background .ear--left:after{right:10%}.cat-background .ear--left:after{transform:rotate(-45deg)}.cat-background .ear--right{right:-7%;border-radius:30% 70% 0% 0%/100% 100% 0% 0%;transform:rotate(15deg)}.cat-background .ear--right:before,.cat-background .ear--right:after{left:10%}.cat-background .ear--right:after{transform:rotate(45deg)}.cat-background .face{position:absolute;height:100%;width:100%;background:#161616;border-radius:50%}.cat-background .eye{position:absolute;top:35%;height:30%;width:31%;background:#fff;border-radius:50%/60% 60% 40% 40%}.cat-background .eye:after{content:"";position:absolute;top:0;left:0;height:0;width:100%;border-radius:0 0 50% 50Array/0Array 0 40% 40%;background:#161616;animation:blink 4s infinite ease-in}@keyframes blink{0%{height:0}90%{height:0}92.5%{height:100%}95%{height:0}97.5%{height:100%}to{height:0}}.cat-background .eye:before{content:"";position:absolute;top:60%;height:10%;width:15%;background:#fff;border-radius:50%}.cat-background .eye--left{left:0}.cat-background .eye--left:before{right:-5%}.cat-background .eye--right{right:0}.cat-background .eye--right:before{left:-5%}.cat-background .eye-pupil{position:absolute;top:25%;height:50%;width:20%;background:#161616;border-radius:50%;animation:look-around 4s infinite}@keyframes look-around{0%{transform:translate(0)}5%{transform:translate(50%,-25%)}10%{transform:translate(50%,-25%)}15%{transform:translate(-100%,-25%)}20%{transform:translate(-100%,-25%)}25%{transform:translate(0)}to{transform:translate(0)}}.cat-background .eye--left .eye-pupil{right:30%}.cat-background .eye--right .eye-pupil{left:30%}.cat-background .eye-pupil:after{content:"";position:absolute;top:30%;right:-5%;height:20%;width:35%;border-radius:50%;background:#fff}.cat-background .muzzle{position:absolute;top:60%;left:50%;height:6%;width:10%;background:#fff;transform:translate(-50%);border-radius:50%/30% 30% 70% 70%}
`,
  _l = () => (
    j(u(kl, 's_xTYSAGLBrBU')),
    o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'cat-background' },
          [
            e('div', null, { class: 'ear ear--left' }, null, 3, null),
            e('div', null, { class: 'ear ear--right' }, null, 3, null),
            e(
              'div',
              null,
              { class: 'face' },
              [
                e(
                  'div',
                  null,
                  { class: 'eye eye--left' },
                  e('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                e(
                  'div',
                  null,
                  { class: 'eye eye--right' },
                  e('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                e('div', null, { class: 'muzzle' }, null, 3, null),
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
  zl = b(u(_l, 's_k9rs7QcCFAU')),
  Cl = `.cat-walk-container{position:fixed;z-index:9999;transform:scale(.5);transform-origin:right bottom;animation:init-cat 3s linear 1,walk-around 20s linear 3.2s infinite;right:0;bottom:0}@keyframes init-cat{0%{bottom:83%}to{bottom:0}}@keyframes init-cat-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}.cat-walk-container #tail{position:absolute;margin-left:40px;margin-top:40px;height:60px;width:80px;border:15px solid #d3b897;border-radius:50px;display:inline-block;z-index:0}.cat-walk-container #tail-mask{position:absolute;margin-top:40px;margin-left:100px;height:30px;width:75px;background-color:#fff;z-index:0;text-align:center;padding-top:2px;padding-left:7px;color:#000}.cat-walk-container #tail-end{position:absolute;margin-top:63px;margin-left:130px;height:17px;width:17px;border-radius:50%;background-color:#d3b897;z-index:1}.cat-walk-container #body{position:relative;height:130px;width:110px;background-color:#e9cba7;border-radius:22px;display:inline-block;overflow:hide;z-index:1}.cat-walk-container .ear{position:relative;margin-top:-20px;height:45px;width:50px;background-color:#e9cba7;display:inline-block;z-index:2}.cat-walk-container #ear-left{clip-path:polygon(0 0,0% 100%,100% 60%)}.cat-walk-container #ear-right{margin-left:6px;clip-path:polygon(100% 0,0% 60%,100% 100%)}.cat-walk-container .ear-inner{position:relative;height:30px;width:50px;background-color:#d3b897;z-index:3}.cat-walk-container #ear-inner-left{margin-top:8px;margin-left:5px;clip-path:polygon(0 0,100% 90%,0 100%)}.cat-walk-container #ear-inner-right{margin-top:8px;margin-left:-4px;clip-path:polygon(100% 0%,100% 100%,0 90%)}.cat-walk-container #mask{position:relative;background-color:#e9cba7;margin-top:-29px;height:50px;width:110px;border-radius:50%;z-index:4}.cat-walk-container #patch{position:relative;margin-top:-50px;z-index:5}.cat-walk-container .fur{width:5px;background-color:#c0a98b;display:inline-block}.cat-walk-container .fur:first-of-type{margin-left:40%;height:15px;float:left}.cat-walk-container .fur:nth-of-type(2){margin-left:4px;height:5px;float:left}.cat-walk-container .fur:nth-of-type(3){margin-left:4px;height:10px;float:left}.cat-walk-container #eyes{position:relative;margin-top:30%;z-index:5}.cat-walk-container .eye{height:18px;width:18px;border-radius:50%;background-color:#554d44;display:inline-block}.cat-walk-container #eye-left{margin-left:27%}.cat-walk-container #eye-right{margin-left:10%}.cat-walk-container .shine{height:7px;width:7px;border-radius:50%;background-color:#fff;margin-top:2px;margin-left:1px}.cat-walk-container #whisk-left{display:inline-block}.cat-walk-container .whisker{height:3px;width:25px;background-color:#d3b897;margin-bottom:6px}.cat-walk-container #whisk-one{transform:rotate(15deg)}.cat-walk-container #whisk-three{transform:rotate(-15deg)}.cat-walk-container #nose{position:absolute;margin-left:15%;height:17px;width:18px;background-color:#554d44;clip-path:ellipse(40% 22% at 50% 50%);display:inline-block;z-index:6}.cat-walk-container #whisk-right{display:inline-block;margin-left:56px}.cat-walk-container #whisk-four{transform:rotate(-15deg)}.cat-walk-container #whisk-six{transform:rotate(15deg)}.cat-walk-container #smile{position:relative;margin-left:29%;margin-top:-22%;z-index:5}.cat-walk-container #smile-left-align{display:inline-block;position:absolute}.cat-walk-container #smile-left{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-left{margin-top:-58%;height:4px;width:20px;background-color:#e9cba7}.cat-walk-container #smile-right-align{display:inline-block;margin-left:22px;position:absolute}.cat-walk-container #smile-right{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-right{margin-top:-58%;height:4px;width:24px;background-color:#e9cba7}.cat-walk-container #tongue{position:relative;margin-top:7px;margin-left:auto;margin-right:auto;height:17px;width:15px;border-radius:25px;background-color:#fc90a5;z-index:4}.cat-walk-container #tummy{margin-top:13%;margin-left:auto;margin-right:auto;height:30px;width:60px;border-radius:50px 50px 0 0;background-color:#f4e7d1}.cat-walk-container #credit{position:absolute;font-family:sans-serif;font-size:12px;color:#b9b9b9;margin-top:70px;left:20px}
`,
  Sl = () => (
    j(u(Cl, 's_ik8BQrQgw9g')),
    o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'cat-walk-container' },
          [
            e('div', null, { id: 'tail' }, null, 3, null),
            e('div', null, { id: 'tail-mask' }, 'WOW', 3, null),
            e('div', null, { id: 'tail-end' }, null, 3, null),
            e(
              'div',
              null,
              { id: 'body' },
              [
                e(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-left' },
                  e(
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
                e(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-right' },
                  e(
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
                e('div', null, { id: 'mask' }, null, 3, null),
                e(
                  'div',
                  null,
                  { id: 'patch' },
                  [
                    e('div', null, { class: 'fur' }, null, 3, null),
                    e('div', null, { class: 'fur' }, null, 3, null),
                    e('div', null, { class: 'fur' }, null, 3, null),
                  ],
                  3,
                  null,
                ),
                e(
                  'div',
                  null,
                  { id: 'eyes' },
                  [
                    e(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-left' },
                      e(
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
                    e(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-right' },
                      e(
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
                e(
                  'div',
                  null,
                  { id: 'whisk-left' },
                  [
                    e(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-one' },
                      null,
                      3,
                      null,
                    ),
                    e('div', null, { class: 'whisker' }, null, 3, null),
                    e(
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
                e('div', null, { id: 'nose' }, null, 3, null),
                e(
                  'div',
                  null,
                  { id: 'whisk-right' },
                  [
                    e(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-four' },
                      null,
                      3,
                      null,
                    ),
                    e('div', null, { class: 'whisker' }, null, 3, null),
                    e(
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
                e(
                  'div',
                  null,
                  { id: 'smile' },
                  [
                    e(
                      'div',
                      null,
                      { id: 'smile-left-align' },
                      [
                        e('div', null, { id: 'smile-left' }, null, 3, null),
                        e('div', null, { id: 'mask-left' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                    e(
                      'div',
                      null,
                      { id: 'smile-right-align' },
                      [
                        e('div', null, { id: 'smile-right' }, null, 3, null),
                        e('div', null, { id: 'mask-right' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                e('div', null, { id: 'tongue' }, null, 3, null),
                e('div', null, { id: 'tummy' }, null, 3, null),
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
  Ml = b(u(Sl, 's_0DhRUxBQU40'))
var je
import('node:async_hooks')
  .then(l => {
    const t = l.AsyncLocalStorage
    ;(je = new t()), (globalThis.qcAsyncRequestStore = je)
  })
  .catch(l => {
    console.warn(
      'AsyncLocalStorage not available, continuing without it. This might impact concurrent server calls.',
      l,
    )
  })
const Pl = async l => {
  const [t] = M(),
    n = await t.resolve(),
    r = await gl(typeof n == 'function' ? n() : n, l, { abortPipeEarly: !0 }),
    i = {}
  if (r.issues) for (const s of r.issues) i[hl(s)] = s.message
  return i
}
function de(l) {
  return u(Pl, 's_Zam4T0v4IrY', [l])
}
function Tl(l, t, n) {
  const {
    checked: r,
    files: i,
    options: s,
    value: d,
    valueAsDate: h,
    valueAsNumber: m,
  } = l
  return !n || n === 'string'
    ? d
    : n === 'string[]'
      ? s
        ? [...s].filter(c => c.selected && !c.disabled).map(c => c.value)
        : r
          ? [...(t.value || []), d]
          : (t.value || []).filter(c => c !== d)
      : n === 'number'
        ? m
        : n === 'boolean'
          ? r
          : n === 'File' && i
            ? Pe(i[0])
            : n === 'File[]' && i
              ? [...i].map(c => Pe(c))
              : n === 'Date' && h
                ? h
                : t.value
}
function ge(l) {
  return [
    ...Object.values(l.internal.fields),
    ...Object.values(l.internal.fieldArrays),
  ]
}
function W(l, t) {
  return l.internal.fieldArrays[t]
}
function Al(l, t) {
  return +t.replace(`${l}.`, '').split('.')[0]
}
function qe(l, t) {
  Oe(l, !1).forEach(n => {
    const r = W(l, n).items.length - 1
    t.filter(i => i.startsWith(`${n}.`) && Al(n, i) > r).forEach(i => {
      t.splice(t.indexOf(i), 1)
    })
  })
}
function Oe(l, t = !0) {
  const n = Object.keys(l.internal.fieldArrays)
  return t && qe(l, n), n
}
function Ll(l, t = !0) {
  const n = Object.keys(l.internal.fields)
  return t && qe(l, n), n
}
function R(l, t) {
  return l.internal.fields[t]
}
function he(l, t, n) {
  const r = Ll(l, n),
    i = Oe(l, n)
  return typeof t == 'string' || Array.isArray(t)
    ? (typeof t == 'string' ? [t] : t)
        .reduce(
          (s, d) => {
            const [h, m] = s
            return (
              i.includes(d)
                ? (i.forEach(c => {
                    c.startsWith(d) && m.add(c)
                  }),
                  r.forEach(c => {
                    c.startsWith(d) && h.add(c)
                  }))
                : h.add(d),
              s
            )
          },
          [new Set(), new Set()],
        )
        .map(s => [...s])
    : [r, i]
}
function jl(
  l,
  { items: t, initialItems: n, error: r } = {
    items: [],
    initialItems: [],
    error: '',
  },
) {
  const i = n.join() !== t.join()
  return {
    internal: {
      initialItems: [...n],
      startItems: [...n],
      validate: [],
      validateOn: void 0,
      revalidateOn: void 0,
      consumers: [],
    },
    name: l,
    items: t,
    error: r,
    active: !1,
    touched: i,
    dirty: i,
  }
}
function Ee(l, t) {
  const n = r => (r instanceof Blob ? r.size : r)
  return Array.isArray(l) && Array.isArray(t)
    ? l.map(n).join() !== t.map(n).join()
    : l instanceof Date && t instanceof Date
      ? l.getTime() !== t.getTime()
      : Number.isNaN(l) && Number.isNaN(t)
        ? !1
        : l !== t
}
function Bl(
  l,
  { value: t, initialValue: n, error: r } = {
    value: void 0,
    initialValue: void 0,
    error: '',
  },
) {
  const i = Ee(n, t)
  return {
    internal: {
      initialValue: n,
      startValue: n,
      validate: [],
      validateOn: void 0,
      revalidateOn: void 0,
      transform: [],
      elements: [],
      consumers: [],
    },
    name: l,
    value: t,
    error: r,
    active: !1,
    touched: i,
    dirty: i,
  }
}
function oe(l, t) {
  return l.split('.').reduce((n, r) => (n == null ? void 0 : n[r]), t)
}
let Il = 0
function me() {
  return Il++
}
function Fl({ loader: l, action: t, fieldArrays: n }) {
  function r(h) {
    var m
    return (
      ((m = t == null ? void 0 : t.value) == null ? void 0 : m.values) &&
      oe(h, t.value.values)
    )
  }
  const i = () => me(),
    s = h => {
      var m
      return (
        ((m = t == null ? void 0 : t.value) == null ? void 0 : m.errors[h]) ||
        ''
      )
    },
    d = (h, m, c) =>
      Object.entries(m).reduce((y, [x, g]) => {
        var P
        const v = c ? `${c}.${x}` : x
        if (n != null && n.includes(v.replace(/.\d+./g, '.$.'))) {
          const T = g.map(i)
          y[1][v] = jl(v, {
            initialItems: T,
            items: ((P = r(v)) == null ? void 0 : P.map(i)) || [...T],
            error: s(v),
          })
        } else
          (!g ||
            typeof g != 'object' ||
            Array.isArray(g) ||
            g instanceof Date) &&
            (y[0][v] = Bl(v, {
              initialValue: g,
              value: r(v) ?? g,
              error: s(v),
            }))
        return g && typeof g == 'object' && d(y, g, v), y
      }, h)
  return d([{}, {}], l.value)
}
function pe(l, t) {
  return (typeof l != 'string' && !Array.isArray(l) ? l : t) || {}
}
function ql(l, t) {
  l.dirty = t || ge(l).some(n => n.active && n.dirty)
}
function Ol(l, t) {
  const n = Ee(t.internal.startValue, t.value)
  n !== t.dirty && ((t.dirty = n), ql(l, n))
}
function El(l, t) {
  var n, r
  ;(r = (n = R(l, t)) == null ? void 0 : n.internal.elements[0]) == null ||
    r.focus()
}
function Dl(l, t, n) {
  const {
    shouldActive: r = !0,
    shouldTouched: i = !1,
    shouldDirty: s = !1,
    shouldValid: d = !1,
  } = pe(t, n)
  return he(l, t)[0].reduce(
    (h, m) => {
      const c = R(l, m)
      return (
        (!r || c.active) &&
          (!i || c.touched) &&
          (!s || c.dirty) &&
          (!d || !c.error) &&
          (typeof t == 'string' ? m.replace(`${t}.`, '') : m)
            .split('.')
            .reduce(
              (y, x, g, v) =>
                (y[x] =
                  g === v.length - 1
                    ? c.value
                    : (typeof y[x] == 'object' && y[x]) ||
                      (isNaN(+v[g + 1]) ? {} : [])),
              h,
            ),
        h
      )
    },
    typeof t == 'string' ? [] : {},
  )
}
function fe(l, t, n) {
  const [r, i] = he(l, t, !1),
    s = typeof t == 'string' && r.length === 1,
    d = !s && !Array.isArray(t),
    h = pe(t, n),
    {
      initialValue: m,
      initialValues: c,
      keepResponse: y = !1,
      keepSubmitCount: x = !1,
      keepSubmitted: g = !1,
      keepValues: v = !1,
      keepDirtyValues: P = !1,
      keepItems: T = !1,
      keepDirtyItems: ol = !1,
      keepErrors: Ce = !1,
      keepTouched: Se = !1,
      keepDirty: Me = !1,
    } = h
  r.forEach($ => {
    const z = R(l, $)
    ;(s ? 'initialValue' in h : c) &&
      (z.internal.initialValue = s ? m : oe($, c))
    const N = P && z.dirty
    !v &&
      !N &&
      ((z.internal.startValue = z.internal.initialValue),
      (z.value = z.internal.initialValue),
      z.internal.elements.forEach(V => {
        V.type === 'file' && (V.value = '')
      })),
      Se || (z.touched = !1),
      !Me && !v && !N && (z.dirty = !1),
      Ce || (z.error = '')
  }),
    i.forEach($ => {
      var V
      const z = W(l, $),
        N = ol && z.dirty
      !T &&
        !N &&
        (c &&
          (z.internal.initialItems =
            ((V = oe($, c)) == null ? void 0 : V.map(() => me())) || []),
        (z.internal.startItems = [...z.internal.initialItems]),
        (z.items = [...z.internal.initialItems])),
        Se || (z.touched = !1),
        !Me && !T && !N && (z.dirty = !1),
        Ce || (z.error = '')
    }),
    d &&
      (y || (l.response = {}),
      x || (l.submitCount = 0),
      g || (l.submitted = !1)),
    Wl(l)
}
function Rl(l, t, { duration: n } = {}) {
  ;(l.response = t),
    n &&
      setTimeout(() => {
        l.response === t && (l.response = {})
      }, n)
}
async function $l(l, t, n) {
  const [r, i] = he(l, t),
    { shouldActive: s = !0, shouldFocus: d = !0 } = pe(t, n),
    h = me()
  l.internal.validators.push(h), (l.validating = !0)
  const m = l.internal.validate
    ? await l.internal.validate(Dl(l, { shouldActive: s }))
    : {}
  let c =
    typeof t != 'string' && !Array.isArray(t) ? !Object.keys(m).length : !0
  const [y] = await Promise.all([
    Promise.all(
      r.map(async x => {
        const g = R(l, x)
        if (!s || g.active) {
          let v
          for (const T of g.internal.validate)
            if (((v = await T(g.value)), v)) break
          const P = v || m[x] || ''
          return P && (c = !1), (g.error = P), P ? x : null
        }
      }),
    ),
    Promise.all(
      i.map(async x => {
        const g = W(l, x)
        if (!s || g.active) {
          let v = ''
          for (const T of g.internal.validate)
            if (((v = await T(g.items)), v)) break
          const P = v || m[x] || ''
          P && (c = !1), (g.error = P)
        }
      }),
    ),
  ])
  if ((Vl(l, m, { shouldActive: s }), d)) {
    const x = y.find(g => g)
    x && El(l, x)
  }
  return (
    Hl(l, !c),
    l.internal.validators.splice(l.internal.validators.indexOf(h), 1),
    l.internal.validators.length || (l.validating = !1),
    c
  )
}
function Nl(l, t, n, { on: r, shouldFocus: i = !1 }) {
  const s = t.internal.validateOn ?? l.internal.validateOn,
    d = t.internal.revalidateOn ?? l.internal.revalidateOn
  r.includes((s === 'submit' ? l.submitted : t.error) ? d : s) &&
    $l(l, n, { shouldFocus: i })
}
async function be(l, t, n, r, i, s, d) {
  d !== void 0 && (t.value = d)
  for (const h of t.internal.transform) t.value = await h(t.value, r, i)
  ;(t.touched = !0), (l.touched = !0), Ol(l, t), Nl(l, t, n, { on: s })
}
function Vl(l, t, { duration: n, shouldActive: r = !0 }) {
  const i = Object.entries(t)
    .reduce(
      (s, [d, h]) => (
        [R(l, d), W(l, d)].every(m => !m || (r && !m.active)) && s.push(h), s
      ),
      [],
    )
    .join(' ')
  i && Rl(l, { status: 'error', message: i }, { duration: n })
}
function Hl(l, t) {
  l.invalid = t || ge(l).some(n => n.active && n.error)
}
function Wl(l) {
  let t = !1,
    n = !1,
    r = !1
  for (const i of ge(l))
    if (
      (i.active &&
        (i.touched && (t = !0), i.dirty && (n = !0), i.error && (r = !0)),
      t && n && r)
    )
      break
  ;(l.touched = t), (l.dirty = n), (l.invalid = r)
}
const Zl = l => (se(q('s_zlu40LlrNis', [l])), o(L, null, 3, '2Z_0'))
function De(l, t, n) {
  return b(u(Zl, 's_AMfhPV9ZgUw'))(l, t, n)
}
const Ul = l => {
    const [t] = M()
    t.internal.elements.push(l)
  },
  Ql = (l, t) => {
    const [n, r, i, s] = M()
    be(r, n, i, l, t, ['touched', 'input'], Tl(t, n, s))
  },
  Jl = (l, t) => {
    const [n, r, i] = M()
    be(r, n, i, l, t, ['change'])
  },
  Yl = (l, t) => {
    const [n, r, i] = M()
    be(r, n, i, l, t, ['touched', 'blur'])
  }
function Gl({ children: l, name: t, type: n, ...r }) {
  const { of: i } = r,
    s = R(i, t)
  return o(
    De,
    {
      store: s,
      ...r,
      children: l(s, {
        name: t,
        autoFocus: !!s.error,
        ref: u(Ul, 's_e9muVT8kIZo', [s]),
        onInput$: u(Ql, 's_UYiy8OdUmWo', [s, i, t, n]),
        onChange$: u(Jl, 's_ac4VqAnAxQ0', [s, i, t]),
        onBlur$: u(Yl, 's_M0rcc18CCgA', [s, i, t]),
      }),
    },
    0,
    t,
  )
}
function Kl({ children: l, name: t, ...n }) {
  const r = W(n.of, t)
  return o(De, { store: r, ...n, children: l(r) }, 0, t)
}
function Xl({
  of: l,
  action: t,
  onSubmit$: n,
  responseDuration: r,
  keepResponse: i,
  shouldActive: s,
  shouldTouched: d,
  shouldDirty: h,
  shouldFocus: m,
  reloadDocument: c,
  children: y,
  ...x
}) {
  const { encType: g } = x,
    v = {
      duration: r,
      shouldActive: s,
      shouldTouched: d,
      shouldDirty: h,
      shouldFocus: m,
    }
  return I(
    'form',
    {
      noValidate: !0,
      ...x,
      method: 'post',
      action: t == null ? void 0 : t.actionPath,
      'preventdefault:submit': !c,
      ref: P => {
        l.element = P
      },
      children: y,
      onSubmit$: q('s_8vZTs9fM6iI', [t, g, l, i, n, v, c]),
    },
    { noValidate: a, method: a },
    0,
    '2Z_1',
  )
}
function et({
  validate: l,
  validateOn: t = 'submit',
  revalidateOn: n = 'input',
  ...r
}) {
  return il(() => {
    var d, h
    const [i, s] = Fl(r)
    return {
      internal: {
        fields: i,
        fieldArrays: s,
        fieldArrayPaths: r.fieldArrays,
        validate: l,
        validators: [],
        validateOn: t,
        revalidateOn: n,
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
        ((h = (d = r.action) == null ? void 0 : d.value) == null
          ? void 0
          : h.response) || {},
    }
  })
}
function ve(l) {
  const t = et(l)
  return [
    t,
    {
      Form: n => Xl({ of: t, action: l.action, ...n }),
      Field: n => Gl({ of: t, ...n }),
      FieldArray: n => Kl({ of: t, ...n }),
    },
  ]
}
const lt = ue({
    email: O(
      E('Must be a string'),
      D(1, 'Please enter your email.'),
      Fe('The email address is badly formatted.'),
    ),
    name: O(E('Must be a string'), D(1, 'Please enter your name.')),
    message: O(E('Must be a string'), D(1, 'Please enter your message.')),
  }),
  tt = async (l, t) => {
    const [n, r, i, s] = M()
    try {
      r.value = !0
      const d = await fetch(
        `${{}.PUBLIC_NOTIFICATION_TELEGRAM_FUNCTION}?name=${l.name}&email=${l.email}&message=${l.message}`,
      )
      ;(r.value = !1),
        d
          ? (fe(n),
            (s.value = !0),
            setTimeout(() => {
              s.value = !1
            }, 3e3))
          : (i.value = !0)
    } catch {
      ;(r.value = !1), (i.value = !0)
    }
  },
  nt = l => {
    const t = k(!1),
      n = k(!1),
      r = k(!1),
      [i, { Form: s, Field: d, FieldArray: h }] = ve({
        loader: Ve(),
        validate: de(u(lt, 's_hisV3sNP0XM')),
      })
    return o(
      f,
      {
        children: [
          e(
            'div',
            null,
            { class: 'container mx-auto' },
            e(
              'div',
              null,
              { class: 'card bg-base-100 shadow-xl image-full w-full' },
              e(
                'div',
                null,
                { class: 'card-body' },
                e(
                  'div',
                  null,
                  {
                    class:
                      'flex items-center justify-around gap-8 flex-col md:flex-row',
                  },
                  [
                    e(
                      'svg',
                      null,
                      {
                        class: 'w-16 md:w-40 rotate-[270deg]',
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 323.057 323.057',
                        'xml:space': 'preserve',
                      },
                      [
                        e(
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
                        e(
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
                    e(
                      'div',
                      null,
                      null,
                      [
                        e(
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
                            onSubmit$: u(tt, 's_EmVjnisSR5Y', [i, t, n, r]),
                            class: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                            children: [
                              o(
                                d,
                                {
                                  name: 'name',
                                  children: (c, y) =>
                                    e(
                                      'div',
                                      null,
                                      {
                                        class:
                                          'flex flex-col gap-2 col-span-2 md:col-span-1',
                                      },
                                      [
                                        e(
                                          'label',
                                          null,
                                          {
                                            class:
                                              'input input-bordered flex items-center gap-2',
                                          },
                                          [
                                            e(
                                              'svg',
                                              null,
                                              {
                                                xmlns:
                                                  'http://www.w3.org/2000/svg',
                                                viewBox: '0 0 16 16',
                                                fill: 'currentColor',
                                                class: 'h-4 w-4 opacity-70',
                                              },
                                              e(
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
                                            I(
                                              'input',
                                              {
                                                ...y,
                                                get value() {
                                                  return c.value
                                                },
                                                value: w(c, 'value'),
                                                type: 'text',
                                                class: 'grow w-full',
                                                placeholder: 'Name',
                                              },
                                              {
                                                type: a,
                                                class: a,
                                                placeholder: a,
                                              },
                                              0,
                                              null,
                                            ),
                                          ],
                                          1,
                                          null,
                                        ),
                                        c.error &&
                                          e(
                                            'div',
                                            null,
                                            { class: 'text-red-500' },
                                            w(c, 'error'),
                                            1,
                                            'N9_0',
                                          ),
                                      ],
                                      1,
                                      'N9_1',
                                    ),
                                  [a]: { name: a },
                                },
                                3,
                                'N9_2',
                              ),
                              o(
                                d,
                                {
                                  name: 'email',
                                  children: (c, y) =>
                                    e(
                                      'div',
                                      null,
                                      {
                                        class:
                                          'flex flex-col gap-2 col-span-2 md:col-span-1',
                                      },
                                      [
                                        e(
                                          'label',
                                          null,
                                          {
                                            class:
                                              'input input-bordered flex items-center gap-2',
                                          },
                                          [
                                            e(
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
                                                e(
                                                  'path',
                                                  null,
                                                  {
                                                    d: 'M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z',
                                                  },
                                                  null,
                                                  3,
                                                  null,
                                                ),
                                                e(
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
                                            I(
                                              'input',
                                              {
                                                ...y,
                                                get value() {
                                                  return c.value
                                                },
                                                value: w(c, 'value'),
                                                type: 'email',
                                                class: 'grow w-full',
                                                placeholder: 'Email',
                                              },
                                              {
                                                type: a,
                                                class: a,
                                                placeholder: a,
                                              },
                                              0,
                                              null,
                                            ),
                                          ],
                                          1,
                                          null,
                                        ),
                                        c.error &&
                                          e(
                                            'div',
                                            null,
                                            { class: 'text-red-500' },
                                            w(c, 'error'),
                                            1,
                                            'N9_3',
                                          ),
                                      ],
                                      1,
                                      'N9_4',
                                    ),
                                  [a]: { name: a },
                                },
                                3,
                                'N9_5',
                              ),
                              o(
                                d,
                                {
                                  name: 'message',
                                  children: (c, y) =>
                                    e(
                                      'div',
                                      null,
                                      {
                                        class: 'flex flex-col gap-2 col-span-2',
                                      },
                                      [
                                        I(
                                          'textarea',
                                          {
                                            ...y,
                                            get value() {
                                              return c.value
                                            },
                                            value: w(c, 'value'),
                                            placeholder: 'Message',
                                            class:
                                              'textarea textarea-bordered textarea-lg w-full',
                                          },
                                          { placeholder: a, class: a },
                                          0,
                                          null,
                                        ),
                                        c.error &&
                                          e(
                                            'div',
                                            null,
                                            { class: 'text-red-500' },
                                            w(c, 'error'),
                                            1,
                                            'N9_6',
                                          ),
                                      ],
                                      1,
                                      'N9_7',
                                    ),
                                  [a]: { name: a },
                                },
                                3,
                                'N9_8',
                              ),
                              e(
                                'button',
                                null,
                                {
                                  class:
                                    'btn btn-primary text-white col-start-2',
                                  type: 'submit',
                                  disabled: p(c => c.value, [t], 'p0.value'),
                                  'data-goatcounter-click': 'send-email',
                                  'data-goatcounter-title': 'Send Email',
                                  'data-goatcounter-referrer': p(
                                    c => c.referral,
                                    [l],
                                    'p0.referral',
                                  ),
                                },
                                [
                                  t.value &&
                                    e(
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
                            [a]: { onSubmit$: a, class: a },
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
          (r.value || n.value) &&
            e(
              'div',
              null,
              { class: 'toast toast-end z-[999]' },
              [
                n.value &&
                  e(
                    'div',
                    null,
                    { class: 'alert alert-error gap-0' },
                    e(
                      'div',
                      null,
                      { class: 'flex gap-2 justify-beetwen' },
                      [
                        e(
                          'div',
                          null,
                          { class: 'flex-1' },
                          [
                            e(
                              'div',
                              null,
                              null,
                              'There was an error during message send.',
                              3,
                              null,
                            ),
                            e(
                              'div',
                              null,
                              null,
                              [
                                'Write directly to',
                                ' ',
                                e(
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
                        e(
                          'button',
                          null,
                          {
                            class: 'btn btn-xs btn-circle btn-outline',
                            onClick$: q('s_Emm0n9SRfY8', [n]),
                          },
                          e(
                            'svg',
                            null,
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              class: 'h-4 w-4',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                            },
                            e(
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
                  e(
                    'div',
                    null,
                    { class: 'alert alert-success gap-0' },
                    e(
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
  at = b(u(nt, 's_pCebMzCWV9M')),
  rt = `.eggs{margin:1em auto;text-align:center;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;opacity:.2}.egg{width:140px;height:200px;margin:1em auto;background:#fbe9e7;border-radius:50%/60% 60% 40% 40%;overflow:hidden;display:inline-block}.stripe{height:20%}.stripe:not(:first-child){border-top:2px solid #fff}.stripe:nth-child(1){background-color:#ffbde8}.stripe:nth-child(2){background-color:#bde8ff}.stripe:nth-child(3){background-color:#e8ffbd}.stripe:nth-child(4){background-color:#ffe8bd}.stripe:nth-child(5){background-color:#e8bdff}@keyframes egg-left-animation{0%{transform:rotate(-15deg)}to{transform:rotate(-10deg)}}@keyframes egg-right-animation{0%{transform:rotate(30deg)}to{transform:rotate(25deg)}}.egg-left{transform:rotate(-10deg);animation:egg-left-animation .8s linear 0s infinite alternate}.egg-right{transform:rotate(25deg);animation:egg-right-animation .7s linear 0s infinite alternate;background-color:#ec407a;background-image:url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")}
`,
  ot = () => (
    j(u(rt, 's_M7JMtWmYWDA')),
    o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'eggs' },
          [
            e(
              'div',
              null,
              { class: 'egg egg-left' },
              [
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
                e('div', null, { class: 'stripe' }, null, 3, null),
              ],
              3,
              null,
            ),
            e('div', null, { class: 'egg egg-right' }, null, 3, null),
          ],
          3,
          null,
        ),
      },
      3,
      'vR_0',
    )
  ),
  it = b(u(ot, 's_tC1zfRJh9xU')),
  K = Ie('common.show'),
  Re = Ie('common.snow'),
  st = () => {
    const l = ae(K),
      t = new Date().getFullYear()
    return o(
      f,
      {
        children: e(
          'footer',
          null,
          { class: 'footer items-center p-4 bg-neutral text-neutral-content' },
          [
            e(
              'aside',
              null,
              { class: 'items-center grid-flow-col' },
              [
                e(
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
                  e(
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
                e(
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
            e(
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
                    [a]: {
                      href: a,
                      target: a,
                      class: a,
                      'data-goatcounter-click': a,
                      'data-goatcounter-title': a,
                      'data-goatcounter-referrer': a,
                    },
                  },
                  3,
                  'yk_0',
                ),
                o(
                  _,
                  {
                    href: '/blog/dev',
                    class: 'md:row-span-full',
                    'data-goatcounter-click': 'open-articles',
                    'data-goatcounter-title': 'Open Articles',
                    'data-goatcounter-referrer': 'footer',
                    children: 'Blog',
                    [a]: {
                      href: a,
                      class: a,
                      'data-goatcounter-click': a,
                      'data-goatcounter-title': a,
                      'data-goatcounter-referrer': a,
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
                    [a]: {
                      href: a,
                      class: a,
                      'data-goatcounter-click': a,
                      'data-goatcounter-title': a,
                      'data-goatcounter-referrer': a,
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
                    [a]: {
                      href: a,
                      class: a,
                      'data-goatcounter-click': a,
                      'data-goatcounter-title': a,
                      'data-goatcounter-referrer': a,
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
                    [a]: {
                      href: a,
                      class: a,
                      'data-goatcounter-click': a,
                      'data-goatcounter-title': a,
                      'data-goatcounter-referrer': a,
                      target: a,
                    },
                  },
                  3,
                  'yk_4',
                ),
                e(
                  'label',
                  null,
                  {
                    class: 'cursor-pointer md:row-span-full',
                    'data-goatcounter-click': p(
                      n => (n.value, 'open'),
                      [l],
                      '"cat-mode-"+p0.value?"open":"close"',
                    ),
                    'data-goatcounter-title': 'Cat Mode',
                    'data-goatcounter-referrer': 'referrer',
                    onClick$: q('s_jWy0aWw4FvU', [l]),
                  },
                  'CLick me',
                  3,
                  null,
                ),
                o(
                  _,
                  {
                    href: '/privacy-policy/eng/',
                    class: 'md:row-span-full',
                    'data-goatcounter-click': 'open-privacy-policy',
                    'data-goatcounter-title': 'Open Privacy Policy',
                    'data-goatcounter-referrer': 'referrer',
                    children: 'Privacy Policy',
                    [a]: {
                      href: a,
                      class: a,
                      'data-goatcounter-click': a,
                      'data-goatcounter-title': a,
                      'data-goatcounter-referrer': a,
                    },
                  },
                  3,
                  'yk_5',
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
      'yk_6',
    )
  },
  $e = b(u(st, 's_GvPhUJ5Kg9Q')),
  ct = () => {
    ;(document == null ? void 0 : document.activeElement).blur()
  },
  ut = () => {
    const l = u(ct, 's_dKZoR4MCcs0')
    return o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'navbar bg-base-100' },
          [
            e(
              'div',
              null,
              { class: 'navbar-start' },
              e(
                'div',
                null,
                { class: 'dropdown' },
                [
                  e(
                    'label',
                    null,
                    { tabIndex: 0, class: 'btn btn-ghost btn-circle' },
                    e(
                      'svg',
                      null,
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        class: 'h-5 w-5',
                        fill: 'none',
                        viewBox: '0 0 24 24',
                        stroke: 'currentColor',
                      },
                      e(
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
                  e(
                    'ul',
                    null,
                    {
                      tabIndex: 0,
                      class:
                        'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52',
                    },
                    [
                      e(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            onClick$: l,
                            href: '/',
                            children: 'Homepage',
                            [a]: { onClick$: a, href: a },
                          },
                          3,
                          '8h_0',
                        ),
                        1,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            onClick$: l,
                            href: '/blog/dev',
                            'data-goatcounter-click': 'open-articles',
                            'data-goatcounter-title': 'Open Articles',
                            'data-goatcounter-referrer': 'header',
                            children: 'Blog',
                            [a]: {
                              onClick$: a,
                              href: a,
                              'data-goatcounter-click': a,
                              'data-goatcounter-title': a,
                              'data-goatcounter-referrer': a,
                            },
                          },
                          3,
                          '8h_1',
                        ),
                        1,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            onClick$: l,
                            href: '/projects',
                            'data-goatcounter-click': 'open-projects',
                            'data-goatcounter-title': 'Open Projects',
                            'data-goatcounter-referrer': 'header',
                            children: 'Projects',
                            [a]: {
                              onClick$: a,
                              href: a,
                              'data-goatcounter-click': a,
                              'data-goatcounter-title': a,
                              'data-goatcounter-referrer': a,
                            },
                          },
                          3,
                          '8h_2',
                        ),
                        1,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            onClick$: l,
                            href: '/Pasquale_De_Lucia-Resume.pdf',
                            target: '_blank',
                            'data-goatcounter-click': 'get-resume',
                            'data-goatcounter-title': 'Get Resume',
                            'data-goatcounter-referrer': 'header',
                            children: 'Resume',
                            [a]: {
                              onClick$: a,
                              href: a,
                              target: a,
                              'data-goatcounter-click': a,
                              'data-goatcounter-title': a,
                              'data-goatcounter-referrer': a,
                            },
                          },
                          3,
                          '8h_3',
                        ),
                        1,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        o(
                          _,
                          {
                            onClick$: l,
                            href: '/blog/finance',
                            'data-goatcounter-click': 'open-finance',
                            'data-goatcounter-title': 'Open Finance',
                            'data-goatcounter-referrer': 'header',
                            children: 'Personal finance',
                            [a]: {
                              onClick$: a,
                              href: a,
                              'data-goatcounter-click': a,
                              'data-goatcounter-title': a,
                              'data-goatcounter-referrer': a,
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
            e(
              'div',
              null,
              { class: 'navbar-center' },
              o(
                _,
                {
                  href: '/',
                  class: 'normal-case text-xl text-gradient-hover',
                  children: 'Nyruchi',
                  [a]: { href: a, class: a },
                },
                3,
                '8h_5',
              ),
              1,
              null,
            ),
            e('div', null, { class: 'navbar-end' }, null, 3, null),
          ],
          1,
          null,
        ),
      },
      1,
      '8h_6',
    )
  },
  Ne = b(u(ut, 's_o4ccBuvIYCs')),
  dt = l =>
    o(
      f,
      {
        children: e(
          'section',
          null,
          {
            class: p(
              t => 'inner-section ' + t.sectionClass,
              [l],
              '"inner-section "+p0.sectionClass',
            ),
          },
          [
            o(L, null, 3, 'rm_0'),
            l.showCta &&
              e(
                'p',
                null,
                { class: 'flex justify-center pt-6' },
                o(
                  _,
                  {
                    get href() {
                      return l.ctaHref
                    },
                    get 'aria-label'() {
                      return l.ctaLabel
                    },
                    class: 'btn btn-primary text-white',
                    get 'data-goatcounter-click'() {
                      return l.gcClick
                    },
                    get 'data-goatcounter-title'() {
                      return l.gcTitle
                    },
                    get 'data-goatcounter-referrer'() {
                      return l.gcReferrer
                    },
                    children: p(t => t.ctaLabel, [l], 'p0.ctaLabel'),
                    [a]: {
                      href: p(t => t.ctaHref, [l], 'p0.ctaHref'),
                      'aria-label': p(t => t.ctaLabel, [l], 'p0.ctaLabel'),
                      class: a,
                      'data-goatcounter-click': p(
                        t => t.gcClick,
                        [l],
                        'p0.gcClick',
                      ),
                      'data-goatcounter-title': p(
                        t => t.gcTitle,
                        [l],
                        'p0.gcTitle',
                      ),
                      'data-goatcounter-referrer': p(
                        t => t.gcReferrer,
                        [l],
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
  C = b(u(dt, 's_e0g7Sn2KjsA')),
  gt = `.reindeer{--rudolph-antler: #ddb892;--rudolph-body: #9d6b53;--rudolph-body-dark: #946651;--rudolph-nose: #8c6351;--rudolph-nose-red: #690500;--rudolph-eye: #432818;--rudolph-ear: #774936;--rudolph-belly: #ede0d4;--rudolph-leg: #432818;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;width:16rem;height:16rem;z-index:-1;opacity:.2}.reindeer .antler{position:absolute;margin:2.7rem 0 0 2.3rem;width:5rem;height:.7rem;border-radius:.35rem;background-color:var(--rudolph-antler);transform-origin:5.7rem 0;transform:translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler.antler--right{transform:scaleX(-1) translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler .hook:first-child{position:absolute;top:-2.3rem;left:-2.3rem;width:3rem;height:3rem;background:radial-gradient(circle at 100% 0,transparent,transparent 2.3rem,var(--rudolph-antler) 2.3rem,var(--rudolph-antler) 3rem,transparent 3rem)}.reindeer .antler .hook:nth-child(2){position:absolute;top:-1.7rem;width:2.4rem;height:2.4rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.7rem,var(--rudolph-antler) 1.7rem,var(--rudolph-antler) 2.4rem,transparent 2.4rem)}.reindeer .antler .hook:nth-child(3){position:absolute;top:-1.3rem;left:1.5rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.3rem,var(--rudolph-antler) 1.3rem,var(--rudolph-antler) 2rem,transparent 2rem)}.reindeer .antler .hook:before{content:"";display:block;position:absolute;top:-.35rem;width:.7rem;height:.7rem;background-color:var(--rudolph-antler);border-radius:.35rem}.reindeer .head{position:absolute;z-index:3;top:4rem;left:5rem;width:6rem;height:6rem}.reindeer .head .face{position:absolute;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:50%/50% 50% 60% 60%}.reindeer .head .face:after{content:"";display:block;position:absolute;top:.05rem;left:.5rem;width:5rem;height:5.4rem;border-radius:50%;background:radial-gradient(circle at center,transparent,transparent 2.5rem,var(--rudolph-body-dark) 2.5rem,var(--rudolph-body-dark) 5rem);background-position:0 .2rem;transform:scaleX(1.1) rotate(45deg) scaleX(1.1) scale(.9)}.reindeer .ear{position:absolute;left:-2.6rem;top:1.5rem;width:5rem;height:2rem;background:var(--rudolph-body);border-radius:50% 50% 60% 40%/50% 40% 40% 50%;transform:rotate(-10deg) scale(.8)}.reindeer .ear:after{content:"";display:block;position:absolute;left:1rem;top:.5rem;width:3rem;height:1.2rem;background:var(--rudolph-ear);border-radius:50% 50% 50% 40%/50% 40% 60% 50%}.reindeer .ear.ear--right{left:auto;right:-2.6rem;transform:rotate(10deg) scaleX(-1) scale(.8)}.reindeer .eye{position:absolute;top:2.5rem;left:2rem;width:.6rem;height:.8rem;border-radius:50%;background-color:var(--rudolph-eye);transform:rotate(10deg)}.reindeer .eye.eye--right{left:3.4rem;transform:rotate(-10deg)}.reindeer .nose{position:absolute;top:3.5rem;left:.7rem;width:4.6rem;height:3.6rem;border-radius:50%;background-color:var(--rudolph-nose)}.reindeer .nose:before{content:"";display:block;position:absolute;top:.3rem;left:.6rem;width:3.4rem;height:2.6rem;border-radius:50%;background-color:var(--rudolph-nose-red)}.reindeer .nose:after{content:"";display:block;position:absolute;top:.6rem;left:1.6rem;width:1.8rem;height:1.2rem;border-radius:50%;background-color:#ffffff1a}.reindeer .body{position:absolute;top:9.6rem;left:5rem;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:3rem 3rem 0 0/4rem 4rem 0 0}.reindeer .body:after{content:"";display:block;position:absolute;width:3rem;height:4rem;background-color:var(--rudolph-belly);border-radius:50%;top:0rem;left:1.5rem}.reindeer .hand{position:absolute;z-index:2;top:1rem;left:.8rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.15rem,var(--rudolph-leg) 1.2rem,var(--rudolph-leg) 2rem,transparent 2.05rem);transform:scaleX(.7) rotate(10deg)}.reindeer .hand:after{content:"";display:block;position:absolute;top:1.2rem;left:1.6rem;width:.8rem;height:.8rem;background-color:var(--rudolph-leg);border-radius:50%}.reindeer .hand.hand--right{left:3.2rem;transform:scaleX(-1) scaleX(.7) rotate(10deg)}.reindeer .legs{position:absolute;left:-1rem;top:2rem;width:8rem;height:4rem;overflow:hidden}.reindeer .legs:before{content:"";display:block;position:absolute;top:1rem;left:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(-20deg)}.reindeer .legs:after{content:"";display:block;position:absolute;top:1rem;right:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(20deg)}.reindeer .foot{position:absolute;width:3rem;height:1.5rem;background-color:var(--rudolph-leg);border-radius:1.5rem 1.5rem 0 0;top:4.5rem}.reindeer .foot.foot--right{left:3rem}
`,
  ht = () => (
    j(u(gt, 's_0HhqKOJuYCM')),
    o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'reindeer' },
          [
            e(
              'div',
              null,
              { class: 'antler' },
              [
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'antler antler--right' },
              [
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
                e('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'body' },
              [
                e('div', null, { class: 'hand' }, null, 3, null),
                e('div', null, { class: 'hand hand--right' }, null, 3, null),
                e('div', null, { class: 'legs' }, null, 3, null),
                e('div', null, { class: 'foot' }, null, 3, null),
                e('div', null, { class: 'foot foot--right' }, null, 3, null),
              ],
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'head' },
              [
                e('div', null, { class: 'ear' }, null, 3, null),
                e('div', null, { class: 'ear ear--right' }, null, 3, null),
                e('div', null, { class: 'face' }, null, 3, null),
                e('div', null, { class: 'eye' }, null, 3, null),
                e('div', null, { class: 'eye eye--right' }, null, 3, null),
                e('div', null, { class: 'nose' }, null, 3, null),
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
  mt = b(u(ht, 's_0Bd6yCHL7MI')),
  pt = `.santa-container{position:fixed;z-index:9999;opacity:1;transform-origin:right bottom;animation:init-santa 3s linear 1,walk-around 20s linear 3.2s infinite;height:46.875em;width:37.5em;right:0;bottom:0;transform:scale(.1)}.santa-container .santa{background-color:#edbb93;height:6.25em;width:18.75em;position:absolute;transform:translate(-50%);left:50%;top:17.5em}.santa-container .ears{position:absolute;height:4.37em;width:23.75em;background-color:#e59076;transform:translate(-50%);left:50%;top:18.75em;border-radius:3.12em}.santa-container .santa:before{content:"";position:absolute;height:1.56em;width:1.56em;background-color:#0c2137;border-radius:50%;top:2.5em;left:5em;box-shadow:6.25em 0 #0c2137}.santa-container .moustache{position:absolute;height:4.37em;width:11.25em;background-color:#e3e1ed;left:-2.18em;top:5em;border-radius:3.12em 0}.santa-container .moustache:before{position:absolute;content:"";height:4.37em;width:11.25em;background-color:#e3e1ed;left:11.25em;top:0;border-radius:0 3.12em}.santa-container .beard:after{content:"";background-color:#e3e1ed;height:20.62em;width:6.25em;border-radius:6.87em;position:absolute;top:3.12em;right:9.68em}.santa-container .beard:before{background-color:#d3d2e8;height:17.5em;width:6.87em;border-radius:6.87em;position:absolute;content:"";top:1.87em;right:5em;z-index:0;box-shadow:-8.75em 0 #d3d2e8}.santa-container .beard{background-color:#bfc2e0;height:15.62em;width:6.25em;border-radius:6.87em;position:absolute;top:21.25em;left:25em;box-shadow:-18.75em 0 #bfc2e0}.santa-container .mouth{background:linear-gradient(#ffffff 1.87em,#0c2137 1.87em);height:5.62em;width:4.37em;position:absolute;top:23.75em;left:16.25em;border-radius:0 0 4.375em 4.37em;overflow:hidden}.santa-container .mouth:before{content:"";position:absolute;background-color:#ea385f;height:2.81em;width:3.43em;top:3.43em;left:-.62em;border-radius:.62em}.santa-container .hair{height:5em;width:23.12em;background-color:#c3c1df;position:absolute;transform:translate(-50%);left:50%;top:15em;border-radius:5em}.santa-container .hair:before{position:absolute;content:"";width:25.62em;background-color:#d2d3e6;height:6.25em;left:-1.25em;bottom:2.5em;border-radius:1.25em}.santa-container .hair:after{position:absolute;content:"";height:10em;width:23.75em;background-color:#ea385d;bottom:8.75em;border-radius:16.25em 0 0}.santa-container .hat{position:absolute;background-color:#c82a50;height:6.25em;width:3.12em;left:30.81em;top:1.25em;border-radius:0 2.5em 0 0}.santa-container .hat:before{position:absolute;content:"";background-color:#e1e0ec;height:11.25em;width:11.25em;top:4.37em;left:-1.87em;border-radius:50%}@media screen and (max-width: 800px){.santa-container .container{font-size:.75em}}@keyframes init-santa{0%{bottom:83%}to{bottom:0}}@keyframes init-santa-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}
`,
  ft = () => (
    j(u(pt, 's_BsrO2LM87qo')),
    o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'santa-container' },
          [
            e('div', null, { class: 'ears' }, null, 3, null),
            e('div', null, { class: 'beard' }, null, 3, null),
            e('div', null, { class: 'mouth' }, null, 3, null),
            e('div', null, { class: 'hat' }, null, 3, null),
            e('div', null, { class: 'hair' }, null, 3, null),
            e(
              'div',
              null,
              { class: 'santa' },
              e('div', null, { class: 'moustache' }, null, 3, null),
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
  bt = b(u(ft, 's_o6tPurUTJPc')),
  vt = () => ({ name: '', email: '', message: '' }),
  Ve = B(u(vt, 's_B1VTVZE9Cik')),
  wt = async ({ cacheControl: l }) => {
    l({ staleWhileRevalidate: 604800, maxAge: 5 })
  },
  yt = () => {
    H()
    const l = k(!1)
    re(K, l)
    const t = new Date(),
      n = Q(t, { month: 11, date: 5 }),
      r = Q(t, { year: t.getFullYear() + 1, month: 0, date: 15 }),
      i = Le(t, { start: n, end: r }),
      s = k(i ? new Array(200).fill(0) : null)
    re(Re, s)
    const d = Q(t, { month: 2, date: 5 }),
      h = Q(t, { month: 4, date: 1 }),
      m = Le(t, { start: d, end: h })
    return o(
      f,
      {
        children: [
          l.value &&
            s.value &&
            e(
              'div',
              null,
              { class: 'snow-container' },
              s.value.map((c, y) =>
                e('div', null, { class: 'snow' }, null, 3, y),
              ),
              1,
              'q8_0',
            ),
          o(Ne, null, 3, 'q8_1'),
          e(
            'main',
            null,
            null,
            [
              l.value && !s.value && !m && o(zl, null, 3, 'q8_2'),
              l.value && !s.value && !m && o(Ml, null, 3, 'q8_3'),
              l.value && s.value && o(bt, null, 3, 'q8_4'),
              l.value && s.value && o(mt, null, 3, 'q8_5'),
              l.value && m && o(it, null, 3, 'q8_6'),
              o(L, null, 3, 'q8_7'),
              o(
                S,
                {
                  children: o(
                    C,
                    {
                      showCta: !1,
                      children: o(
                        at,
                        { referral: 'layout', [a]: { referral: a } },
                        3,
                        'q8_8',
                      ),
                      [a]: { showCta: a },
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
          o($e, null, 3, 'q8_11'),
        ],
      },
      1,
      'q8_12',
    )
  },
  xt = b(u(yt, 's_6Y0uFrvPmQs')),
  kt = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: xt, onGet: wt, useFormLoader: Ve },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  _t = ue({
    email: O(
      E('Must be a string'),
      D(1, 'Please enter your email.'),
      Fe('The email address is badly formatted.'),
    ),
  }),
  zt = async (l, t) => {
    const [n, r, i, s, d] = M()
    try {
      n.value = !0
      const h = await fetch(
        `${{}.PUBLIC_ADD_NEWSLETTER_FUNCTION}?email=${l.email}&blogType=${i.blogType}&enabled=true`,
      )
      ;(n.value = !1),
        h
          ? (fe(r),
            (d.value = !0),
            setTimeout(() => {
              d.value = !1
            }, 3e3))
          : (s.value = !0)
    } catch {
      ;(n.value = !1), (s.value = !0)
    }
  },
  Ct = l => {
    const t = k(!1),
      n = k(!1),
      r = k(!1),
      [i, { Form: s, Field: d, FieldArray: h }] = ve({
        loader: He(),
        validate: de(u(_t, 's_K0NszdGwrNo')),
      })
    return o(
      f,
      {
        children: [
          e(
            'div',
            null,
            { class: 'container mx-auto' },
            e(
              'div',
              null,
              { class: 'card bg-base-100 shadow-xl image-full w-full' },
              e(
                'div',
                null,
                { class: 'card-body' },
                e(
                  'div',
                  null,
                  {
                    class:
                      'flex items-center justify-around gap-8 flex-col md:flex-row',
                  },
                  [
                    e(
                      'svg',
                      null,
                      {
                        class: 'w-16 md:w-40 rotate-[270deg]',
                        xmlns: 'http://www.w3.org/2000/svg',
                        viewBox: '0 0 323.057 323.057',
                        'xml:space': 'preserve',
                      },
                      [
                        e(
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
                        e(
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
                    e(
                      'div',
                      null,
                      null,
                      [
                        e(
                          'h2',
                          null,
                          { class: 'card-title text-l md:text-2xl mb-6' },
                          'Stay in the loop!',
                          3,
                          null,
                        ),
                        e(
                          'p',
                          null,
                          { class: 'mb-6' },
                          'Subscribe to my newsletter for exclusive content, practical resources, and fresh ideas for your projects',
                          3,
                          null,
                        ),
                        o(
                          s,
                          {
                            onSubmit$: u(zt, 's_qV71460WFx8', [t, i, l, n, r]),
                            class: 'grid grid-cols-1 gap-4',
                            children: [
                              o(
                                d,
                                {
                                  name: 'email',
                                  children: (c, y) =>
                                    e(
                                      'div',
                                      null,
                                      {
                                        class:
                                          'flex flex-col gap-2 col-span-2 md:col-span-1',
                                      },
                                      [
                                        e(
                                          'label',
                                          null,
                                          {
                                            class:
                                              'input input-bordered flex items-center gap-2',
                                          },
                                          [
                                            e(
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
                                                e(
                                                  'path',
                                                  null,
                                                  {
                                                    d: 'M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z',
                                                  },
                                                  null,
                                                  3,
                                                  null,
                                                ),
                                                e(
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
                                            I(
                                              'input',
                                              {
                                                ...y,
                                                get value() {
                                                  return c.value
                                                },
                                                value: w(c, 'value'),
                                                type: 'email',
                                                class: 'grow w-full',
                                                placeholder: 'Email',
                                              },
                                              {
                                                type: a,
                                                class: a,
                                                placeholder: a,
                                              },
                                              0,
                                              null,
                                            ),
                                          ],
                                          1,
                                          null,
                                        ),
                                        c.error &&
                                          e(
                                            'div',
                                            null,
                                            { class: 'text-red-500' },
                                            w(c, 'error'),
                                            1,
                                            'jj_0',
                                          ),
                                      ],
                                      1,
                                      'jj_1',
                                    ),
                                  [a]: { name: a },
                                },
                                3,
                                'jj_2',
                              ),
                              e(
                                'button',
                                null,
                                {
                                  class:
                                    'btn btn-primary text-white col-start-2',
                                  type: 'submit',
                                  disabled: p(c => c.value, [t], 'p0.value'),
                                  'data-goatcounter-click':
                                    'subscribe-newsletter',
                                  'data-goatcounter-title':
                                    'Subscribe Newsletter',
                                  'data-goatcounter-referrer': p(
                                    c => c.referral,
                                    [l],
                                    'p0.referral',
                                  ),
                                },
                                [
                                  t.value &&
                                    e(
                                      'span',
                                      null,
                                      { class: 'loading loading-spinner' },
                                      null,
                                      3,
                                      'jj_3',
                                    ),
                                  'Subscribe to newsletter',
                                ],
                                1,
                                null,
                              ),
                            ],
                            [a]: { onSubmit$: a, class: a },
                          },
                          1,
                          'jj_4',
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
          (r.value || n.value) &&
            e(
              'div',
              null,
              { class: 'toast toast-end z-[999]' },
              [
                n.value &&
                  e(
                    'div',
                    null,
                    { class: 'alert alert-error gap-0' },
                    e(
                      'div',
                      null,
                      { class: 'flex gap-2 justify-beetwen' },
                      [
                        e(
                          'div',
                          null,
                          { class: 'flex-1' },
                          [
                            e(
                              'div',
                              null,
                              null,
                              'There was an error during subscription.',
                              3,
                              null,
                            ),
                            e(
                              'div',
                              null,
                              null,
                              [
                                'Write directly to',
                                ' ',
                                e(
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
                        e(
                          'button',
                          null,
                          {
                            class: 'btn btn-xs btn-circle btn-outline',
                            onClick$: q('s_NBHcMZTJPes', [n]),
                          },
                          e(
                            'svg',
                            null,
                            {
                              xmlns: 'http://www.w3.org/2000/svg',
                              class: 'h-4 w-4',
                              fill: 'none',
                              viewBox: '0 0 24 24',
                              stroke: 'currentColor',
                            },
                            e(
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
                    'jj_5',
                  ),
                r.value &&
                  e(
                    'div',
                    null,
                    { class: 'alert alert-success gap-0' },
                    e('span', null, null, 'Subscription successful.', 3, null),
                    3,
                    'jj_6',
                  ),
              ],
              1,
              'jj_7',
            ),
        ],
      },
      1,
      'jj_8',
    )
  },
  St = b(u(Ct, 's_0pBeUwLuB88')),
  Mt = () => ({ email: '' }),
  He = B(u(Mt, 's_04wASN4YXvQ')),
  Pt = () => ({ name: '', message: '' }),
  We = B(u(Pt, 's_3osxJTbYSNE')),
  Tt = async ({ cacheControl: l }) => {
    l({ staleWhileRevalidate: 604800, maxAge: 5 })
  },
  At = () => {
    const l = k(!1)
    re(K, l)
    const n = G().url.pathname.match(/^\/[^/]+\/([^/]+)\/?/),
      r = n ? n[1] : 'dev'
    return o(
      f,
      {
        children: [
          o(Ne, null, 3, 'WF_0'),
          e(
            'main',
            null,
            null,
            [
              o(L, null, 3, 'WF_1'),
              o(
                S,
                {
                  children: o(
                    C,
                    {
                      showCta: !1,
                      children: o(
                        St,
                        {
                          blogType: r,
                          referral: 'layout',
                          [a]: { referral: a },
                        },
                        3,
                        'WF_2',
                      ),
                      [a]: { showCta: a },
                    },
                    1,
                    'WF_3',
                  ),
                },
                1,
                'WF_4',
              ),
            ],
            1,
            null,
          ),
          o($e, null, 3, 'WF_5'),
        ],
      },
      1,
      'WF_6',
    )
  },
  Lt = b(u(At, 's_LdHC7hJQ16Y')),
  jt = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Lt,
        onGet: Tt,
        useCommentFormLoader: We,
        useNewsFormLoader: He,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Bt = l => {
    const t = [...l.articles]
    return o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'container mx-auto' },
          e(
            'div',
            null,
            { class: 'grid md:grid-cols-2 justify-items-start gap-12' },
            t.map(n =>
              o(
                _,
                {
                  href: '/' + l.urlBlogBasePath + '/' + n.slug,
                  'data-goatcounter-click': 'open-article',
                  'data-goatcounter-title': 'Open Article',
                  get 'data-goatcounter-referrer'() {
                    return l.referrer || 'referrer'
                  },
                  children: e(
                    'article',
                    null,
                    { class: 'prose' },
                    [
                      e('h3', null, null, w(n, 'title'), 1, null),
                      e(
                        'p',
                        null,
                        { class: 'flex items-center gap-2' },
                        [
                          dl(new Date(n._firstPublishedAt), 'MMM d, yyyy'),
                          ' ',
                          e(
                            'span',
                            null,
                            {
                              class:
                                'bg-secondary text-black p-1 text-xs rounded uppercase',
                            },
                            w(n, 'language'),
                            1,
                            null,
                          ),
                        ],
                        1,
                        null,
                      ),
                      e('p', null, null, w(n, 'subtitle'), 1, null),
                    ],
                    1,
                    null,
                  ),
                  [a]: {
                    'data-goatcounter-click': a,
                    'data-goatcounter-title': a,
                    'data-goatcounter-referrer': p(
                      r => r.referrer || 'referrer',
                      [l],
                      'p0.referrer||"referrer"',
                    ),
                  },
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
      'VS_0',
    )
  },
  we = b(u(Bt, 's_aHaxQW3gUTM')),
  It = l => {
    let t = [...l.items]
    return (
      l.limit && (t = t.splice(0, l.limit)),
      o(
        f,
        {
          children: e(
            'div',
            null,
            null,
            e(
              'div',
              null,
              { class: 'grid md:grid-cols-3 justify-items-center gap-12' },
              t.map(n =>
                o(
                  _,
                  {
                    get href() {
                      return n.href
                    },
                    target: '_blank',
                    get 'aria-label'() {
                      return n.action
                    },
                    class:
                      'card bg-base-100 shadow-xl image-full w-full max-w-[18rem]',
                    'data-goatcounter-click': 'click-card',
                    get 'data-goatcounter-title'() {
                      return n.title
                    },
                    get 'data-goatcounter-referrer'() {
                      return l.referrer || 'referrer'
                    },
                    children: [
                      n.image &&
                        e(
                          'figure',
                          null,
                          null,
                          e(
                            'img',
                            { src: w(n, 'image'), alt: w(n, 'altImage') },
                            { height: 250, width: 250 },
                            null,
                            3,
                            null,
                          ),
                          1,
                          'tS_0',
                        ),
                      e(
                        'div',
                        null,
                        { class: 'card-body' },
                        [
                          e(
                            'h2',
                            null,
                            { class: 'card-title' },
                            w(n, 'title'),
                            1,
                            null,
                          ),
                          e(
                            'p',
                            null,
                            null,
                            [
                              w(n, 'description'),
                              e('br', null, null, null, 3, null),
                              e('br', null, null, null, 3, null),
                              e(
                                'span',
                                null,
                                {
                                  class:
                                    'bg-secondary text-black rounded-3xl p-1 text-xs',
                                },
                                w(n, 'type'),
                                1,
                                null,
                              ),
                            ],
                            1,
                            null,
                          ),
                          e(
                            'div',
                            null,
                            { class: 'card-actions justify-end' },
                            e(
                              'label',
                              null,
                              { class: 'btn btn-square btn-outline btn-sm' },
                              e(
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
                                  e(
                                    'path',
                                    null,
                                    {
                                      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                                    },
                                    null,
                                    3,
                                    null,
                                  ),
                                  e(
                                    'polyline',
                                    null,
                                    { points: '15 3 21 3 21 9' },
                                    null,
                                    3,
                                    null,
                                  ),
                                  e(
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
                    [a]: {
                      href: F(n, 'href'),
                      target: a,
                      'aria-label': F(n, 'action'),
                      class: a,
                      'data-goatcounter-click': a,
                      'data-goatcounter-title': F(n, 'title'),
                      'data-goatcounter-referrer': p(
                        r => r.referrer || 'referrer',
                        [l],
                        'p0.referrer||"referrer"',
                      ),
                    },
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
        'tS_1',
      )
    )
  },
  Ze = b(u(It, 's_Yj7Oj0dysis')),
  Ft = `.area{background:#4e54c8;background:-webkit-linear-gradient(to left,#8f94fb,#4e54c8);width:100%;height:100vh}.circles{position:absolute;bottom:0;left:0;width:100%;height:calc(100dvh - 64px);overflow:hidden}.circles li{position:absolute;display:block;list-style:none;width:20px;height:20px;background:transparent;animation:animate 25s linear infinite;bottom:-150px}.circles li:nth-child(1){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Nuxt.js</title><path fill="rgba(255, 255, 255, 0.2)" d="M13.4642 19.8295h8.9218c.2834 0 .5618-.0723.8072-.2098a1.5899 1.5899 0 0 0 .5908-.5732 1.5293 1.5293 0 0 0 .216-.783 1.529 1.529 0 0 0-.2167-.7828L17.7916 7.4142a1.5904 1.5904 0 0 0-.5907-.573 1.6524 1.6524 0 0 0-.807-.2099c-.2833 0-.5616.0724-.807.2098a1.5904 1.5904 0 0 0-.5907.5731L13.4642 9.99l-2.9954-5.0366a1.5913 1.5913 0 0 0-.591-.573 1.6533 1.6533 0 0 0-.8071-.2098c-.2834 0-.5617.0723-.8072.2097a1.5913 1.5913 0 0 0-.591.573L.2168 17.4808A1.5292 1.5292 0 0 0 0 18.2635c-.0001.2749.0744.545.216.783a1.59 1.59 0 0 0 .5908.5732c.2454.1375.5238.2098.8072.2098h5.6003c2.219 0 3.8554-.9454 4.9813-2.7899l2.7337-4.5922L16.3935 9.99l4.3944 7.382h-5.8586ZM7.123 17.3694l-3.9083-.0009 5.8586-9.8421 2.9232 4.921-1.9572 3.2892c-.7478 1.1967-1.5972 1.6328-2.9163 1.6328z"/></svg> ');left:25%;width:80px;height:80px;animation-delay:0s}.circles li:nth-child(2){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path fill="rgba(255, 255, 255, 0.2)" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>');left:10%;width:35px;height:35px;animation-delay:2s;animation-duration:12s}.circles li:nth-child(3){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path fill="rgba(255, 255, 255, 0.2)" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>');left:70%;width:30px;height:30px;animation-delay:4s}.circles li:nth-child(4){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path fill="rgba(255, 255, 255, 0.2)" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/></svg>');left:40%;width:60px;height:60px;animation-delay:0s;animation-duration:18s}.circles li:nth-child(5){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Qwik</title><path fill="rgba(255, 255, 255, 0.2)" d="M7.5469 0a2.957 2.957 0 0 0-2.5606 1.4785L.5332 9.1915a2.957 2.957 0 0 0 0 2.957l4.4531 7.7128A2.955 2.955 0 0 0 7.547 21.338H12l8.5938 2.6484c.2409.0742.4512-.1782.3359-.4023l-1.916-3.7227 4.4531-7.7129a2.957 2.957 0 0 0 0-2.957l-4.4531-7.7129A2.957 2.957 0 0 0 16.453 0zm0 .7656L17.7324 10.67l-1.8965 1.8985.5782 7.5332L6.2676 10.67l2.371-2.373z"/></svg>');left:65%;width:30px;height:30px;animation-delay:0s}.circles li:nth-child(6){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>React</title><path fill="rgba(255, 255, 255, 0.2)" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>');left:75%;width:110px;height:110px;animation-delay:3s}.circles li:nth-child(7){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path fill="rgba(255, 255, 255, 0.2)" d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>');left:35%;width:150px;height:150px;animation-delay:7s}.circles li:nth-child(8){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Flutter</title><path fill="rgba(255, 255, 255, 0.2)" d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>');left:50%;width:35px;height:35px;animation-delay:15s;animation-duration:45s}.circles li:nth-child(9){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C Sharp</title><path fill="rgba(255, 255, 255, 0.2)" d="M1.194 7.543v8.913c0 1.103.588 2.122 1.544 2.674l7.718 4.456a3.086 3.086 0 0 0 3.088 0l7.718-4.456a3.087 3.087 0 0 0 1.544-2.674V7.543a3.084 3.084 0 0 0-1.544-2.673L13.544.414a3.086 3.086 0 0 0-3.088 0L2.738 4.87a3.085 3.085 0 0 0-1.544 2.673Zm5.403 2.914v3.087a.77.77 0 0 0 .772.772.773.773 0 0 0 .772-.772.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546 2.314 2.314 0 1 1-4.631 0v-3.087c0-.615.244-1.203.679-1.637a2.312 2.312 0 0 1 3.274 0c.434.434.678 1.023.678 1.637a.769.769 0 0 1-.226.545.767.767 0 0 1-1.091 0 .77.77 0 0 1-.226-.545.77.77 0 0 0-.772-.772.771.771 0 0 0-.772.772Zm12.35 3.087a.77.77 0 0 1-.772.772h-.772v.772a.773.773 0 0 1-1.544 0v-.772h-1.544v.772a.773.773 0 0 1-1.317.546.775.775 0 0 1-.226-.546v-.772H12a.771.771 0 1 1 0-1.544h.772v-1.543H12a.77.77 0 1 1 0-1.544h.772v-.772a.773.773 0 0 1 1.317-.546.775.775 0 0 1 .226.546v.772h1.544v-.772a.773.773 0 0 1 1.544 0v.772h.772a.772.772 0 0 1 0 1.544h-.772v1.543h.772a.776.776 0 0 1 .772.772Zm-3.088-2.315h-1.544v1.543h1.544v-1.543Z"/></svg>');left:20%;width:25px;height:25px;animation-delay:2s;animation-duration:35s}.circles li:nth-child(10){background-image:url('data:image/svg+xml,<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Angular</title><path fill="rgba(255, 255, 255, 0.2)" d="M9.96 12.648h4.08L12 7.74l-2.04 4.908zM12 0 .828 3.984l1.704 14.772L12 24l9.468-5.244 1.704-14.772L12 0zm6.972 18.312h-2.604l-1.404-3.504H9.036l-1.404 3.504H5.028L12 2.652l6.972 15.66z"/></svg>');left:85%;width:150px;height:150px;animation-delay:.3s;animation-duration:18s}@keyframes animate{0%{transform:translateY(0) rotate(0);opacity:1;border-radius:0}to{transform:translateY(-1000px) rotate(720deg);opacity:0;border-radius:50%}}
`,
  qt = () => (
    j(u(Ft, 's_CkFs2bTI3Zs')),
    o(
      f,
      {
        children: e(
          'ul',
          null,
          { class: 'circles' },
          [
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
            e('li', null, null, null, 3, null),
          ],
          3,
          null,
        ),
      },
      3,
      'HG_0',
    )
  ),
  Ot = b(u(qt, 's_0hvFUpzGAyM')),
  Et = () =>
    o(
      f,
      {
        children: e(
          'svg',
          null,
          {
            class: 'w-full',
            viewBox: '184.6301 223.3697 497.5289 319.6713',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          e(
            'g',
            null,
            {
              id: 'objects',
              transform: 'matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)',
            },
            e(
              'g',
              null,
              null,
              [
                e(
                  'g',
                  null,
                  null,
                  [
                    e(
                      'path',
                      null,
                      {
                        d: 'M203.088,436.81c0,0,121.289-218.016,234.086-213.367c52.271,2.155,80.667,54.58,189.018,187.39 c23.68,29.025-73.957,0.844-99.832-13.711c0,0,29.678,71.323,17.55,81.504C521.256,497.642,188.534,470.771,203.088,436.81z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
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
                    e(
                      'path',
                      null,
                      {
                        d: 'M533.792,394.077c-23.439-14.475-31.93-28.12-58.411-67.336c0,0,39.928,64.925,46.647,80.675 c6.72,15.75-3.59-15.027,0.655-15.027S536.182,395.552,533.792,394.077z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
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
                    e(
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
                e(
                  'g',
                  null,
                  null,
                  [
                    e(
                      'path',
                      null,
                      {
                        d: 'M556.344,493.337c-0.495-6.746-0.266-11.763-17.707-26.07c-18.356-9.955-32.218-13.512-43.255-14.848 c-3.575-0.434,18.395-3.008,15.385-3.985c-48.516-15.768-95.818-12.332-95.818-12.332l17.284-10.511 c-28.604-7.885-89.09-6.377-115.904-2.459l19.429-9.216c-38.666-1.87-84.902,3.968-107.871,15.085 c-2.298,1.113,1.069-6.262,1.069-6.262l-16.761,4.67c-18.54,6.636-26.521,14.498-27.281,33.827l-0.266,30.723 c-0.547,9.507,11.494,17.166,27.468,13.458c0,0,38.529-8.045,155.166,0.17c110.185,7.761,149.423,34.535,149.423,34.535 c18.271,8.081,28.894-1.364,35.337-19.125L556.344,493.337z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
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
                    e(
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
                e(
                  'g',
                  null,
                  null,
                  [
                    e(
                      'path',
                      null,
                      {
                        d: 'M605.095,470.902c-5.431-4.046-36.53-20.999-24.974-55.587c3.386-10.132,13.794-22.931,20.729-28.708 c0.821-0.684-5.086,14.443-0.303,10.613c15.538-12.441,39.81-23.444,55.914-19.135c1.367,0.365-11.646,7.652-10.29,8.143 c1.887,0.684,26.38,8.642,35.988,29.462c0,0-5.607-4.122-8.688,0.633c-1.833,2.83,6.723,11.623,2.112,34.466 c-2.233,11.067-12.674,28.604-23.56,30.354c0,0,0.815-9.578-1.444-8.624c-26.237,11.081-51.548,7.984-53.772,4.549 C596.574,476.708,608.104,473.147,605.095,470.902z',
                      },
                      null,
                      3,
                      null,
                    ),
                    e(
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
                    e(
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
  Dt = b(u(Et, 's_F4XGSf5645s')),
  Rt =
    '/assets/664d087c-pako_cropped.webp 200w, /assets/f00be9d3-pako_cropped.webp 400w, /assets/bdec0c37-pako_cropped.webp 600w, /assets/a93cfc9e-pako_cropped.webp 800w, /assets/65b6374b-pako_cropped.webp 1200w',
  $t = 1200,
  Nt = 1200,
  Vt = { srcSet: Rt, width: $t, height: Nt }
function Ht(l, t, n, r) {
  return e(
    'img',
    { decoding: 'async', loading: 'lazy', ...l },
    Vt,
    void 0,
    3,
    t,
  )
}
const Wt = l => {
    H()
    const t = ae(K),
      n = ae(Re),
      r = new Date().getFullYear(),
      i = new Date('1/1/2015').getFullYear(),
      s = ml.toWords(r - i)
    return (
      s.charAt(0).toUpperCase(),
      s.slice(1),
      o(
        f,
        {
          children: e(
            'div',
            null,
            { class: 'hero min-h-[calc(100vh-64px)] bg-base-200' },
            [
              o(Ot, null, 3, 'ED_0'),
              e(
                'div',
                null,
                { class: 'hero-content flex-col lg:flex-row' },
                [
                  e(
                    'div',
                    null,
                    { class: 'relative' },
                    [
                      o(
                        Ht,
                        {
                          loading: 'eager',
                          alt: 'Pasquale De Lucia picture',
                          class:
                            'lg:max-w-[18rem] xs:max-w-[8rem] max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                          [a]: { loading: a, alt: a, class: a },
                        },
                        3,
                        'ED_1',
                      ),
                      t.value &&
                        n.value &&
                        o(
                          f,
                          {
                            children: e(
                              'div',
                              null,
                              {
                                class:
                                  'absolute top-[-34px] right-[-48px] w-[100px] rotate-[26deg]',
                              },
                              o(Dt, null, 3, 'ED_2'),
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
                  e(
                    'div',
                    null,
                    { class: 'prose m-6 md:my-0' },
                    [
                      e(
                        'h1',
                        null,
                        { class: 'text-4xl md:text-5xl font-bold' },
                        [
                          'Pasquale ',
                          e('br', null, { class: 'md:hidden' }, null, 3, null),
                          ' De Lucia',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        { class: 'text-xl text-gradient' },
                        [
                          'Web Wizard and ',
                          e('strong', null, null, 'JavaScript Lover', 3, null),
                        ],
                        3,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        null,
                        [
                          'I craft digital wonders as a ',
                          p(d => d.role, [l], 'p0.role'),
                          ' at ',
                          p(d => d.company, [l], 'p0.company'),
                          '.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'p',
                        null,
                        null,
                        [
                          'With a solid ',
                          s,
                          ' years of',
                          ' ',
                          e('strong', null, null, 'web development', 3, null),
                          " under my belt, I'm here to make your online dreams a reality.",
                        ],
                        1,
                        null,
                      ),
                      e(
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
                            [a]: {
                              href: a,
                              class: a,
                              'data-goatcounter-click': a,
                              'data-goatcounter-title': a,
                              'data-goatcounter-referrer': a,
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
  Zt = b(u(Wt, 's_Jevt7v9CDh4')),
  Ut = '_icon_mcn59_1',
  Be = { icon: Ut },
  Qt = l =>
    o(
      f,
      {
        children: e(
          'ul',
          null,
          null,
          l.links.map(t =>
            e(
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
                    return l.referrer || 'referrer'
                  },
                  children: [
                    e(
                      'span',
                      { dangerouslySetInnerHTML: w(t, 'svg') },
                      { class: Be.icon + ' p-2' },
                      null,
                      3,
                      null,
                    ),
                    e('span', null, null, w(t, 'title'), 1, null),
                    e(
                      'span',
                      { dangerouslySetInnerHTML: w(t, 'svg') },
                      { class: Be.icon + ' p-2 invisible opacity-0' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  [a]: {
                    class: a,
                    href: F(t, 'url'),
                    target: a,
                    rel: a,
                    'data-goatcounter-click': a,
                    'data-goatcounter-title': F(t, 'title'),
                    'data-goatcounter-referrer': p(
                      n => n.referrer || 'referrer',
                      [l],
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
  ye = b(u(Qt, 's_x0jeNTb2iQc')),
  Jt = '_container_q7mvx_1',
  Yt = { container: Jt },
  Gt = l =>
    o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'container mx-auto ' + Yt.container },
          [
            e(
              'h3',
              null,
              { class: 'text-center mb-4 text-xl' },
              p(t => t.title, [l], 'p0.title'),
              3,
              null,
            ),
            e(
              'div',
              null,
              { class: 'flex flex-wrap justify-center gap-12' },
              l.stacks.map(t =>
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
                    children: e(
                      'div',
                      { dangerouslySetInnerHTML: w(t, 'svg') },
                      null,
                      null,
                      3,
                      null,
                    ),
                    [a]: {
                      href: F(t, 'href'),
                      target: a,
                      'aria-label': F(t, 'href'),
                      class: a,
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
  le = b(u(Gt, 's_o91wC8IGdho')),
  Kt = l =>
    o(
      f,
      {
        children: e(
          'div',
          null,
          { class: 'container mx-auto w-full h-full' },
          e(
            'div',
            null,
            { class: 'relative wrap overflow-hidden p-10 h-full' },
            [
              e(
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
              l.items.map(
                (t, n) => (
                  H(),
                  n % 2 === 0
                    ? o(
                        S,
                        {
                          pop: !0,
                          children: e(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline',
                            },
                            [
                              e(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              e(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right',
                                },
                                [
                                  e(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    w(t, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    w(t, 'company'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-md md:text-xl' },
                                    w(t, 'role'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug',
                                    },
                                    w(t, 'description'),
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
                          [a]: { pop: a },
                        },
                        1,
                        t.id,
                      )
                    : o(
                        S,
                        {
                          pop: !0,
                          children: e(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full right-timeline',
                            },
                            [
                              e(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              e(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1  w-full md:w-5/12 px-1 py-4 text-left',
                                },
                                [
                                  e(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    w(t, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    w(t, 'company'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-md md:text-xl' },
                                    w(t, 'role'),
                                    1,
                                    null,
                                  ),
                                  e(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug',
                                    },
                                    w(t, 'description'),
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
                          [a]: { pop: a },
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
  Xt = b(u(Kt, 's_sZIPqDBaEpc')),
  xe = [
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
  Ue = [
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
  en = [
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
  ln = [
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
  tn = [
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
  te = [
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
  Z = ['finance', 'dev'],
  nn = {
    finance: { title: 'Personal Finance' },
    dev: { title: 'Web Development' },
  },
  Qe = async (l, t, n) => {
    const r = `{
    page (filter: { slug: { eq: "${l}" }, blogType: { eq: "${t}" } }) {
      id
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
        headers: { Authorization: `Bearer ${n}` },
        method: 'POST',
        body: JSON.stringify({ query: r }),
      })
    ).json()
  },
  Je = async (l, t, n = 4) => {
    const r = `{
    allPages(first: ${n}, filter: { slug: { notIn: [${Z}] }, blogType: { eq: "${t}" } }) {
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
        headers: { Authorization: `Bearer ${l}` },
        method: 'POST',
        body: JSON.stringify({ query: r }),
      })
    ).json()
  },
  an = async (l, t) => {
    const n = `{
    allPages(filter: { slug: { notIn: [${Z}] }, blogType: { eq: "${t}" } }) {
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
        headers: { Authorization: `Bearer ${l}` },
        method: 'POST',
        body: JSON.stringify({ query: n }),
      })
    ).json()
  },
  ie = async (l, t) => {
    const n = `{
        allPages(filter: { slug: { notIn: [${Z}] }, blogType: { eq: "${t}" } }) {
          slug
          blogType
        }
      }`
    return await (
      await fetch('https://graphql.datocms.com/', {
        headers: { Authorization: `Bearer ${l}` },
        method: 'POST',
        body: JSON.stringify({ query: n }),
      })
    ).json()
  },
  rn = async (l, t) => {
    const n = `{
    allComments (filter: {pageLink: {eq: "${t}"}}) {
      _createdAt
      _updatedAt
      id
      name
      message
      likes
      dislikes
      parentComment {
        id
      }
    }
  }`
    return await (
      await fetch('https://graphql.datocms.com/', {
        headers: { Authorization: `Bearer ${l}` },
        method: 'POST',
        body: JSON.stringify({ query: n }),
      })
    ).json()
  },
  on = `h2{font-size:1.875rem;line-height:2.25rem;font-weight:700;text-transform:uppercase}
`,
  sn =
    '/assets/b6ff3ea8-badge-first-pr.webp 200w, /assets/fd499dfb-badge-first-pr.webp 400w, /assets/afd2a267-badge-first-pr.webp 600w, /assets/8e87c3b5-badge-first-pr.webp 800w, /assets/59cf075d-badge-first-pr.webp 896w',
  cn = 896,
  un = 768,
  dn = { srcSet: sn, width: cn, height: un }
function gn(l, t, n, r) {
  return e(
    'img',
    { decoding: 'async', loading: 'lazy', ...l },
    dn,
    void 0,
    3,
    t,
  )
}
const hn = async l => {
    const t = l.env.get('DATO_CMS_TOKEN')
    return Je(t || '', 'dev', 4)
  },
  Ye = B(u(hn, 's_OPVXBMJrrtQ')),
  mn = () => {
    j(u(on, 's_0w9yJ3mmM7E'))
    const l = Ye()
    return o(
      f,
      {
        children: [
          e(
            'section',
            null,
            null,
            o(
              Zt,
              {
                get role() {
                  return te[0].role
                },
                get company() {
                  return te[0].company
                },
                [a]: { role: a, company: a },
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
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e('h2', null, null, 'Latest projects', 3, null),
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
                    Ze,
                    {
                      items: Ue,
                      limit: 3,
                      referrer: 'index-project',
                      [a]: { items: a, limit: a, referrer: a },
                    },
                    3,
                    'eZ_2',
                  ),
                  [a]: {
                    showCta: a,
                    ctaHref: a,
                    ctaLabel: a,
                    gcClick: a,
                    gcTitle: a,
                    gcReferrer: a,
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
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                [
                  e('h2', null, null, 'History', 3, null),
                  e(
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
              children: e(
                'section',
                null,
                { class: 'w-11/12 lg:w-5/6 sticky mx-auto' },
                o(Xt, { items: te, [a]: { items: a } }, 3, 'eZ_6'),
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
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e(
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
                    we,
                    {
                      urlBlogBasePath: 'blog/dev',
                      get articles() {
                        return l.value.data.allPages
                      },
                      referrer: 'index-article',
                      [a]: {
                        urlBlogBasePath: a,
                        articles: p(
                          t => t.value.data.allPages,
                          [l],
                          'p0.value.data.allPages',
                        ),
                        referrer: a,
                      },
                    },
                    3,
                    'eZ_9',
                  ),
                  [a]: {
                    showCta: a,
                    ctaHref: a,
                    ctaLabel: a,
                    gcClick: a,
                    gcTitle: a,
                    gcReferrer: a,
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
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e('h2', null, null, 'Tecnology stack', 3, null),
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
                    le,
                    {
                      title: 'Front end',
                      stacks: en,
                      [a]: { title: a, stacks: a },
                    },
                    3,
                    'eZ_13',
                  ),
                  [a]: { showCta: a },
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
                    le,
                    {
                      title: 'Back end',
                      stacks: ln,
                      [a]: { title: a, stacks: a },
                    },
                    3,
                    'eZ_16',
                  ),
                  [a]: { showCta: a },
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
                    le,
                    {
                      title: 'Tools',
                      stacks: tn,
                      [a]: { title: a, stacks: a },
                    },
                    3,
                    'eZ_19',
                  ),
                  [a]: { showCta: a },
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
              children: e(
                'section',
                null,
                { class: 'title-section text-center' },
                e(
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
                  children: e(
                    'div',
                    null,
                    { class: 'flex items-center justify-center' },
                    o(
                      gn,
                      {
                        alt: 'My first PR',
                        class:
                          'max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                        [a]: { alt: a, class: a },
                      },
                      3,
                      'eZ_23',
                    ),
                    1,
                    null,
                  ),
                  [a]: { showCta: a },
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
              children: e(
                'section',
                null,
                { id: 'links', class: 'title-section text-center' },
                [
                  e('h2', null, null, 'Links', 3, null),
                  e(
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
              children: e(
                'section',
                null,
                { class: 'link-section' },
                o(
                  ye,
                  {
                    links: xe,
                    referrer: 'index',
                    [a]: { links: a, referrer: a },
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
  pn = b(u(mn, 's_tstUEhxLUWc')),
  fn = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  bn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: pn, head: fn, useLatestDevArticles: Ye },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  vn = () =>
    o(
      f,
      {
        children: o(
          C,
          {
            showCta: !1,
            children: e(
              'div',
              null,
              { class: 'flex flex-col gap-12 items-center justify-center' },
              [
                e('h1', null, { class: 'mb-6' }, 'OPSS!', 3, null),
                e(
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
                        [a]: { href: a },
                      },
                      3,
                      'OH_0',
                    ),
                    '.',
                  ],
                  1,
                  null,
                ),
                e(
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
            [a]: { showCta: a },
          },
          1,
          'OH_1',
        ),
      },
      1,
      'OH_2',
    ),
  wn = b(u(vn, 's_bavVtvgbxHE')),
  yn = {
    title: 'Pasquale De Lucia - Full-stack engineer - 404',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  xn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wn, head: yn },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
function kn(l) {
  const t = 'https://pasqualedelucia.com'
  return `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${l.map(
  n => `
    <url>
        <loc>${t}${n.loc.startsWith('/') ? '' : '/'}${n.loc}</loc>
        <priority>${n.priority}</priority>
    </url>`,
)}
</urlset>`.trim()
}
const _n = async l => {
    const t = rl
        .map(([c]) => c)
        .filter(c => c !== '/' && !c.includes('blog/[blogType]')),
      n = l.env.get('DATO_CMS_TOKEN'),
      r = await ie(n ?? '', 'dev'),
      s = (await ie(n ?? '', 'finance')).data.allPages.map(
        c => `blog/finance/${c.slug}/`,
      ),
      d = r.data.allPages.map(c => `blog/dev/${c.slug}/`)
    t.push(...s, ...d)
    const h = kn([
        { loc: '/', priority: 1 },
        ...t.map(c => ({ loc: c, priority: 0.9 })),
      ]),
      m = new Response(h, {
        status: 200,
        headers: { 'Content-Type': 'text/xml' },
      })
    l.send(m)
  },
  zn = Object.freeze(
    Object.defineProperty({ __proto__: null, onGet: _n }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  Cn = () =>
    o(
      f,
      {
        children: e(
          'svg',
          null,
          {
            xmlns: 'http://www.w3.org/2000/svg',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 36 36',
            'aria-hidden': 'true',
            role: 'img',
            class: 'iconify iconify--twemoji',
            preserveAspectRatio: 'xMidYMid meet',
          },
          [
            e(
              'path',
              null,
              {
                fill: '#CE2B37',
                d: 'M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z',
              },
              null,
              3,
              null,
            ),
            e(
              'path',
              null,
              {
                fill: '#009246',
                d: 'M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z',
              },
              null,
              3,
              null,
            ),
            e(
              'path',
              null,
              { fill: '#EEE', d: 'M12 5h12v26H12z' },
              null,
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      'px_0',
    ),
  Sn = b(u(Cn, 's_03cbbuaQymY')),
  ke = `.blog-content{line-height:2rem}@media (min-width: 768px){.blog-content{font-size:1.125rem;line-height:1.75rem}}.blog-content{p {margin-bottom: 1rem;} p {margin-top: 1rem;} h1,h2,h3,h4,h5,h6 {margin-top: 2rem;} h1,h2,h3,h4,h5,h6 {line-height: 1.2;} h1 {font-size: 1.875rem; line-height: 2.25rem;} h1 {text-transform: uppercase;} @media (min-width: 768px) {h1 {font-size: 3rem; line-height: 1;}} h2 {font-size: 1.125rem; line-height: 1.75rem;} @media (min-width: 768px) {h2 {font-size: 1.5rem; line-height: 2rem;}} ul,ol {list-style-position: outside;} ul,ol {padding-inline-start: 2rem;} ul {list-style-type: disc;} ol {list-style-type: decimal;} a { --tw-text-opacity: 1; color: var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity, 1))); } a {text-decoration-line: underline;} pre {border-radius: .75rem;} pre { --tw-bg-opacity: 1; background-color: var(--fallback-sc,oklch(var(--sc)/var(--tw-bg-opacity, 1))); } pre {-moz-tab-size: 2; -o-tab-size: 2; tab-size: 2;} code {font-family: monospace; font-size: inherit;} pre code {display: block;} pre code {min-width: 100px;} pre code {max-width: 100%;} pre code {background-image: none;} pre code {padding: 1.5rem;} pre code {white-space: pre; -webkit-overflow-scrolling: touch; overflow-x: scroll;}}
`,
  Mn = () => (
    ce(u(ke, 's_fkYY5aATgBY')),
    o(
      f,
      {
        children: [
          e(
            'div',
            null,
            { class: 'w-full flex justify-end' },
            e(
              'div',
              null,
              { class: 'w-12 mr-4' },
              e(
                'a',
                null,
                { href: '/privacy-policy/ita' },
                o(Sn, null, 3, 'w1_0'),
                1,
                null,
              ),
              1,
              null,
            ),
            1,
            null,
          ),
          o(
            C,
            {
              showCta: !1,
              children: e(
                'div',
                null,
                { class: 'blog-content' },
                [
                  e(
                    'section',
                    null,
                    { class: 'text-center' },
                    e('h1', null, null, 'Privacy & Policy', 3, null),
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'Welcome to',
                      ' ',
                      e(
                        'strong',
                        null,
                        null,
                        e(
                          'a',
                          null,
                          { href: 'https://pasqualdelucia.com' },
                          'pasqualedelucia.com',
                          3,
                          null,
                        ),
                        3,
                        null,
                      ),
                      '. Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect your personal information while using the Site.',
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '1. Information Collected', 3, null),
                  e(
                    'h3',
                    null,
                    null,
                    'a. Information Provided Voluntarily',
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    'I collect personal data that you provide directly to us, including:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        [
                          e('strong', null, null, 'Contact Form', 3, null),
                          ': name and email address.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        [
                          e('strong', null, null, 'Blog Comments', 3, null),
                          ': name, email address, and the content of the comment.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        [
                          e('strong', null, null, 'Registration Form', 3, null),
                          ': first name, last name, username, email address, and password.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        [
                          e(
                            'strong',
                            null,
                            null,
                            'Newsletter Subscription Form',
                            3,
                            null,
                          ),
                          ': email address.',
                        ],
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'h3',
                    null,
                    null,
                    'b. Information Collected Automatically',
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'I use ',
                      e('strong', null, null, 'GoatCounter', 3, null),
                      ' to collect anonymous browsing statistics, such as:',
                    ],
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e('li', null, null, 'Pages visited.', 3, null),
                      e('li', null, null, 'Duration of the visit.', 3, null),
                      e(
                        'li',
                        null,
                        null,
                        'Interactions with the Site.',
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      e('strong', null, null, 'Note', 3, null),
                      ': User IP addresses are not tracked.',
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '2. Purpose of Data Processing', 3, null),
                  e('p', null, null, 'I use your personal data for:', 3, null),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        'Responding to requests submitted via the contact form.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Allowing publication and moderation of blog comments.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Providing access to features for registered users.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Sending updates and content through the newsletter (only if you have given consent).',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Analyzing the usage of the Site to improve our services.',
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '3. Data Sharing', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'I share your personal data with third parties only in the following cases:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        [
                          e(
                            'strong',
                            null,
                            null,
                            e(
                              'a',
                              null,
                              {
                                class: 'text-primary',
                                target: '_blank',
                                href: 'https://resend.com/',
                              },
                              'Resend',
                              3,
                              null,
                            ),
                            3,
                            null,
                          ),
                          ': for sending emails related to the contact form, registration, or newsletter.',
                        ],
                        3,
                        null,
                      ),
                      e('li', null, null, 'When required by law.', 3, null),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    'I do not sell or share your data with third parties for commercial purposes.',
                    3,
                    null,
                  ),
                  e('h2', null, null, '4. Data Retention', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'I retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, unless required by law to retain it for a longer period.',
                    3,
                    null,
                  ),
                  e('h2', null, null, '5. User Rights', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'In accordance with the General Data Protection Regulation (GDPR), you have the right to:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        'Access your personal data.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Request the correction or deletion of your data.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Withdraw your consent at any time (for example, for the newsletter).',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Object to the processing of data for specific purposes.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'File a complaint with the competent supervisory authority.',
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'You can exercise these rights by contacting me via email at',
                      ' ',
                      e(
                        'strong',
                        null,
                        null,
                        e(
                          'a',
                          null,
                          { href: 'mailto:pasquale.delucia96@gmail.com' },
                          'pasquale.delucia96@gmail.com',
                          3,
                          null,
                        ),
                        3,
                        null,
                      ),
                      '.',
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '6. Cookies and Tracking', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'This Site uses',
                      ' ',
                      e(
                        'strong',
                        null,
                        null,
                        e(
                          'a',
                          null,
                          {
                            class: 'text-primary',
                            target: '_blank',
                            href: 'https://www.goatcounter.com/',
                          },
                          'GoatCounter',
                          3,
                          null,
                        ),
                        3,
                        null,
                      ),
                      ' ',
                      'to collect browsing statistics. The data collected is anonymous and does not include the IP address. We do not use profiling cookies.',
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '7. Data Security', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'I implement technical and organizational measures to protect your personal data from unauthorized access, loss, alteration, or disclosure.',
                    3,
                    null,
                  ),
                  e('h2', null, null, '8. Contact', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'If you have any questions about our Privacy Policy or wish to exercise your rights, you can contact me at:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    e(
                      'li',
                      null,
                      null,
                      [
                        e('strong', null, null, 'Email', 3, null),
                        ':',
                        ' ',
                        e(
                          'a',
                          null,
                          { href: 'mailto:pasquale.delucia96@gmail.com' },
                          'pasquale.delucia96@gmail.com',
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
                ],
                3,
                null,
              ),
              [a]: { showCta: a },
            },
            3,
            'w1_1',
          ),
        ],
      },
      1,
      'w1_2',
    )
  ),
  Pn = b(u(Mn, 's_jXDkCe4BzZI')),
  Tn = {
    title: 'Privacy Policy - Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Privacy Policy - Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  An = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pn, head: Tn },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ln = () =>
    o(
      f,
      {
        children: e(
          'svg',
          null,
          {
            xmlns: 'http://www.w3.org/2000/svg',
            'xmlns:xlink': 'http://www.w3.org/1999/xlink',
            viewBox: '0 0 36 36',
            'aria-hidden': 'true',
            role: 'img',
            class: 'iconify iconify--twemoji',
            preserveAspectRatio: 'xMidYMid meet',
          },
          [
            e(
              'path',
              null,
              {
                fill: '#00247D',
                d: 'M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z',
              },
              null,
              3,
              null,
            ),
            e(
              'path',
              null,
              {
                fill: '#CF1B2B',
                d: 'M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z',
              },
              null,
              3,
              null,
            ),
            e(
              'path',
              null,
              {
                fill: '#EEE',
                d: 'M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z',
              },
              null,
              3,
              null,
            ),
            e(
              'path',
              null,
              { fill: '#CF1B2B', d: 'M21 15V5h-6v10H0v6h15v10h6V21h15v-6z' },
              null,
              3,
              null,
            ),
          ],
          3,
          null,
        ),
      },
      3,
      '4o_0',
    ),
  jn = b(u(Ln, 's_Vn31O9w9kZ8')),
  Bn = () => (
    ce(u(ke, 's_T3RlYu50F5I')),
    o(
      f,
      {
        children: [
          e(
            'div',
            null,
            { class: 'w-full flex justify-end' },
            e(
              'div',
              null,
              { class: 'w-12 mr-4' },
              e(
                'a',
                null,
                { href: '/privacy-policy/eng' },
                o(jn, null, 3, 'vq_0'),
                1,
                null,
              ),
              1,
              null,
            ),
            1,
            null,
          ),
          o(
            C,
            {
              showCta: !1,
              children: e(
                'div',
                null,
                { class: 'blog-content' },
                [
                  e(
                    'section',
                    null,
                    { class: 'text-center' },
                    e('h1', null, null, 'Privacy & Policy', 3, null),
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'Benvenuto su',
                      ' ',
                      e(
                        'strong',
                        null,
                        null,
                        e(
                          'a',
                          null,
                          { href: 'https://pasqualdelucia.com' },
                          'pasqualedelucia.com',
                          3,
                          null,
                        ),
                        3,
                        null,
                      ),
                      ' ',
                      ". La tua privacy è importante per me. Questa Privacy Policy descrive come raccolgo, utilizzo e proteggo le tue informazioni personali durante l'utilizzo del Sito.",
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '1. Informazioni raccolte', 3, null),
                  e(
                    'h3',
                    null,
                    null,
                    'a. Informazioni fornite volontariamente',
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    'Raccolgo dati personali che ci fornisci direttamente, tra cui:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        [
                          e(
                            'strong',
                            null,
                            null,
                            'Modulo di contatto',
                            3,
                            null,
                          ),
                          ': nome e indirizzo email.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        [
                          e('strong', null, null, 'Commenti sul blog', 3, null),
                          ': nome, indirizzo email e il contenuto del commento.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        [
                          e(
                            'strong',
                            null,
                            null,
                            'Modulo di registrazione',
                            3,
                            null,
                          ),
                          ': nome, cognome, username, indirizzo email e password.',
                        ],
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        [
                          e(
                            'strong',
                            null,
                            null,
                            'Modulo di iscrizione alla newsletter',
                            3,
                            null,
                          ),
                          ': indirizzo email.',
                        ],
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'h3',
                    null,
                    null,
                    'b. Informazioni raccolte automaticamente',
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'Utilizzo ',
                      e('strong', null, null, 'GoatCounter', 3, null),
                      ' per raccogliere statistiche di navigazione anonime, come:',
                    ],
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e('li', null, null, 'Pagine visitate.', 3, null),
                      e('li', null, null, 'Durata della visita.', 3, null),
                      e('li', null, null, 'Interazioni con il Sito.', 3, null),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      e('strong', null, null, 'Nota', 3, null),
                      ": Non viene tracciato l'indirizzo IP degli utenti.",
                    ],
                    3,
                    null,
                  ),
                  e(
                    'h2',
                    null,
                    null,
                    '2. Finalità del trattamento dei dati',
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    'Utilizzo i tuoi dati personali per:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        'Rispondere alle richieste inviate tramite il modulo di contatto.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Consentire la pubblicazione e la moderazione dei commenti sul blog.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Fornire accesso alle funzionalità riservate agli utenti registrati.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Inviare aggiornamenti e contenuti tramite la newsletter (solo se hai fornito il consenso).',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        "Analizzare l'uso del Sito per migliorare i nostri servizi.",
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '3. Condivisione dei dati', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'Condivido i tuoi dati personali con terze parti solo nei seguenti casi:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        [
                          e(
                            'strong',
                            null,
                            null,
                            e(
                              'a',
                              null,
                              {
                                class: 'text-primary',
                                target: '_blank',
                                href: 'https://resend.com/',
                              },
                              'Resend',
                              3,
                              null,
                            ),
                            3,
                            null,
                          ),
                          ": per l'invio di email relative al modulo di contatto, alla registrazione o alla newsletter.",
                        ],
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Quando richiesto per legge.',
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    'Non vendo né cedo i tuoi dati a terze parti per scopi commerciali.',
                    3,
                    null,
                  ),
                  e('h2', null, null, '4. Conservazione dei dati', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'Conservo i tuoi dati personali solo per il tempo necessario a soddisfare le finalità per cui sono stati raccolti, salvo obblighi di legge che ne impongano la conservazione più a lungo.',
                    3,
                    null,
                  ),
                  e('h2', null, null, '5. Diritti degli utenti', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'In conformità al Regolamento Generale sulla Protezione dei Dati (GDPR), hai diritto a:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    [
                      e(
                        'li',
                        null,
                        null,
                        'Accedere ai tuoi dati personali.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Richiedere la correzione o l’eliminazione dei tuoi dati.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Ritirare il consenso in qualsiasi momento (ad esempio, per la newsletter).',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Opporsi al trattamento dei dati per determinati scopi.',
                        3,
                        null,
                      ),
                      e(
                        'li',
                        null,
                        null,
                        'Presentare un reclamo all’autorità di controllo competente.',
                        3,
                        null,
                      ),
                    ],
                    3,
                    null,
                  ),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'Puoi esercitare questi diritti contattandomi via email a',
                      ' ',
                      e(
                        'strong',
                        null,
                        null,
                        e(
                          'a',
                          null,
                          { href: 'mailto:pasquale.delucia96@gmail.com' },
                          'pasquale.delucia96@gmail.com',
                          3,
                          null,
                        ),
                        3,
                        null,
                      ),
                      '.',
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '6. Cookie e tracciamento', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    [
                      'Questo Sito utilizza',
                      ' ',
                      e(
                        'strong',
                        null,
                        null,
                        e(
                          'a',
                          null,
                          {
                            class: 'text-primary',
                            target: '_blank',
                            href: 'https://www.goatcounter.com/',
                          },
                          'GoatCounter',
                          3,
                          null,
                        ),
                        3,
                        null,
                      ),
                      ' ',
                      'per raccogliere statistiche di navigazione. I dati raccolti sono anonimi e non includono l’indirizzo IP. Non utilizziamo cookie di profilazione.',
                    ],
                    3,
                    null,
                  ),
                  e('h2', null, null, '7. Sicurezza dei dati', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'Adotto misure tecniche e organizzative per proteggere i tuoi dati personali da accessi non autorizzati, perdite, alterazioni o divulgazioni.',
                    3,
                    null,
                  ),
                  e('h2', null, null, '8. Contatti', 3, null),
                  e(
                    'p',
                    null,
                    null,
                    'Se hai domande sulla nostra Privacy Policy o desideri esercitare i tuoi diritti, puoi contattarmi a:',
                    3,
                    null,
                  ),
                  e(
                    'ul',
                    null,
                    null,
                    e(
                      'li',
                      null,
                      null,
                      [
                        e('strong', null, null, 'Email', 3, null),
                        ':',
                        ' ',
                        e(
                          'a',
                          null,
                          { href: 'mailto=pasquale.delucia96@gmail.com' },
                          'pasquale.delucia96@gmail.com',
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
                ],
                3,
                null,
              ),
              [a]: { showCta: a },
            },
            3,
            'vq_1',
          ),
        ],
      },
      1,
      'vq_2',
    )
  ),
  In = b(u(Bn, 's_6t16ZFngrIc')),
  Fn = {
    title: 'Privacy Policy - Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Privacy Policy - Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  qn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: In, head: Fn },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
function Y(l) {
  let t = 1
  for (let n = 0; n < l; n++) t *= (100 - n) / 100
  return t
}
function Ge(l) {
  return Math.floor(Math.random() * l)
}
const On = () => {
    const [l, t, n, r] = M(),
      i = Ge(100)
    l.value === 100
      ? ((l.value = 0), (n.value = 100))
      : (i <= n.value
          ? (l.value++, n.value--, l.value > t.value && (t.value = l.value))
          : ((l.value = 0), (n.value = 100)),
        (r.value = Y(n.value)))
  },
  En = () => {
    const l = k(100)
    Y(100)
    const t = k(Y(l.value)),
      n = k(0),
      r = k(0),
      i = u(On, 's_SqNyGWM7k0k', [n, r, l, t])
    return o(
      f,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              e('h1', null, { class: 'mb-4' }, 'Buttom game', 3, null),
              e(
                'h3',
                null,
                { class: 'mb-4' },
                "This game requires no skills but only LUCK. If you think you're lucky, try to win!",
                3,
                null,
              ),
              e(
                'p',
                null,
                { class: 'text-lg mb-4' },
                [
                  'There are 100 levels in this challenge. As you successfully conquer each level, the probability of passing the next one decreases by 1%.',
                  e(
                    'span',
                    null,
                    {
                      class: 'tooltip tooltip-left ml-2 top-[2px]',
                      'data-tip':
                        'Commencing with a full 100% chance of success for the initial level, each subsequent accomplishment introduces an added layer of difficulty. Navigate through the escalating challenges and witness the diminishing odds, putting your luck to the test with each passing level.',
                    },
                    e(
                      'svg',
                      null,
                      {
                        class: 'w-5 h-5',
                        viewBox: '0 0 20 20',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      e(
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
              e('p', null, null, null, 3, null),
            ],
            3,
            null,
          ),
          e(
            'section',
            null,
            { class: 'link-section' },
            e(
              'div',
              null,
              { class: 'grid grid-cols-1 gap-6 justify-items-center' },
              [
                e(
                  'div',
                  {
                    class: `text-center button w-36 h-36 md:w-48 md:h-48 rounded-full cursor-pointer select-none
    active:translate-y-4
    active:border-b-[0px]
    transition-all duration-150
    border-[5px] ${n.value === 100 ? 'border-green-400 bg-green-500 active:[box-shadow:0_0px_0_0_#298a09,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#298a09,0_13px_0_0_#1b70f841]' : 'border-red-400 bg-red-500 active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]'}`,
                  },
                  { onClick$: i },
                  e(
                    'span',
                    null,
                    {
                      class:
                        'flex flex-col justify-center items-center h-full text-white font-bold text-[5rem] opacity-50',
                    },
                    p(s => s.value, [n], 'p0.value'),
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                e(
                  'p',
                  null,
                  { class: 'text-xl mt-6' },
                  ['MAX ', p(s => s.value, [r], 'p0.value')],
                  3,
                  null,
                ),
                e(
                  'p',
                  null,
                  null,
                  p(
                    s => (s.value === 100 ? 'HAI VINTO' : ''),
                    [n],
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
  Dn = b(u(En, 's_lVhXlSc0AIU')),
  Rn = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  $n = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getRandomInt: Ge,
        _auto_probabilityOfSuccess: Y,
        default: Dn,
        head: Rn,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Nn = () =>
    o(
      f,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              e('h1', null, null, 'Projects', 3, null),
              e('h2', null, null, 'Check out my projects', 3, null),
            ],
            3,
            null,
          ),
          o(
            C,
            {
              showCta: !1,
              children: o(
                Ze,
                {
                  items: Ue,
                  referrer: 'page-projects',
                  [a]: { items: a, referrer: a },
                },
                3,
                'Mg_0',
              ),
              [a]: { showCta: a },
            },
            1,
            'Mg_1',
          ),
        ],
      },
      1,
      'Mg_2',
    ),
  Vn = b(u(Nn, 's_yMerZA5h0Vw')),
  Hn = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  Wn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Vn, head: Hn },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Zn = () =>
    o(
      f,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            e(
              'h2',
              null,
              { class: 'font-bold uppercase mt-12 mb-16' },
              'Something wrong',
              3,
              null,
            ),
            3,
            null,
          ),
          o(
            C,
            {
              showCta: !1,
              children: [
                e(
                  'p',
                  null,
                  { class: 'text-xl text-center' },
                  [
                    'Write to',
                    ' ',
                    e(
                      'a',
                      null,
                      {
                        class: 'text-primary',
                        href: 'mailto:pasquale.delucia96@gmail.com',
                      },
                      'pasquale.delucia96@gmail.com',
                      3,
                      null,
                    ),
                    ' ',
                    'to Unsubscribe.',
                  ],
                  3,
                  null,
                ),
                e(
                  'p',
                  null,
                  { class: 'text-xl text-center' },
                  'Remember to send email you want to unsubscribe',
                  3,
                  null,
                ),
              ],
              [a]: { showCta: a },
            },
            3,
            'fK_0',
          ),
          e(
            'section',
            null,
            { id: 'links', class: 'title-section text-center' },
            [
              e('h2', null, null, 'Links', 3, null),
              e(
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
          e(
            'section',
            null,
            { class: 'link-section' },
            o(
              ye,
              { links: xe, referrer: 'index', [a]: { links: a, referrer: a } },
              3,
              'fK_1',
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'fK_2',
    ),
  Un = b(u(Zn, 's_aKDVerZD54c')),
  Qn = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
      { name: 'robots', content: 'noindex' },
    ],
  },
  Jn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Un, head: Qn },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Yn = () =>
    o(
      f,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section text-center' },
            e(
              'h2',
              null,
              { class: 'font-bold uppercase my-12' },
              'Unsubscribe Successful',
              3,
              null,
            ),
            3,
            null,
          ),
          o(
            C,
            {
              showCta: !1,
              children: [
                e(
                  'p',
                  null,
                  { class: 'text-xl text-center' },
                  "You have successfully unsubscribed. We're sorry to see you go!",
                  3,
                  null,
                ),
                e(
                  'p',
                  null,
                  { class: 'text-xl text-center' },
                  'If this was a mistake, feel free to subscribe again anytime.',
                  3,
                  null,
                ),
              ],
              [a]: { showCta: a },
            },
            3,
            'Bc_0',
          ),
          e(
            'section',
            null,
            { id: 'links', class: 'title-section text-center' },
            [
              e('h2', null, null, 'Links', 3, null),
              e(
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
          e(
            'section',
            null,
            { class: 'link-section' },
            o(
              ye,
              { links: xe, referrer: 'index', [a]: { links: a, referrer: a } },
              3,
              'Bc_1',
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'Bc_2',
    ),
  Gn = b(u(Yn, 's_OR8GlEL3LEE')),
  Kn = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
      { name: 'robots', content: 'noindex' },
    ],
  },
  Xn = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gn, head: Kn },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ea = l => {
    const [t, n, r] = M()
    if (((r.value = l.target.value), r.value)) {
      const i = r.value.toLowerCase()
      n.value = [
        ...t.value.data.allPages.filter(
          s =>
            s.title.toLowerCase().includes(i) ||
            s.subtitle.toLowerCase().includes(i),
        ),
      ]
    } else n.value = [...t.value.data.allPages]
  },
  la = l => {
    const t = Ke(),
      n = k([...t.value.data.allPages]),
      r = k(''),
      i = u(ea, 's_EHyjUobaAp4', [t, n, r])
    return o(
      f,
      {
        children: [
          e(
            'section',
            null,
            { class: 'title-section flex flex-col items-center gap-4' },
            [
              e('h1', null, null, w(nn[l.blogType], 'title'), 1, null),
              e('h2', null, null, 'Find out what I write about', 3, null),
              e(
                'label',
                null,
                { class: 'input flex items-center gap-2 w-full max-w-xs' },
                [
                  e(
                    'input',
                    null,
                    {
                      type: 'text',
                      placeholder: 'Search articles',
                      class: 'grow',
                      value: p(s => s.value, [r], 'p0.value'),
                      onInput$: i,
                    },
                    null,
                    3,
                    null,
                  ),
                  e(
                    'svg',
                    null,
                    {
                      xmlns: 'http://www.w3.org/2000/svg',
                      viewBox: '0 0 16 16',
                      fill: 'currentColor',
                      class: 'h-4 w-4 opacity-70',
                    },
                    e(
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
                we,
                {
                  get urlBlogBasePath() {
                    return l.urlBlogBasePath
                  },
                  get articles() {
                    return n.value
                  },
                  referrer: 'page-articles',
                  [a]: {
                    urlBlogBasePath: p(
                      s => s.urlBlogBasePath,
                      [l],
                      'p0.urlBlogBasePath',
                    ),
                    articles: p(s => s.value, [n], 'p0.value'),
                    referrer: a,
                  },
                },
                3,
                'AT_0',
              ),
              [a]: { showCta: a },
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
  ta = b(u(la, 's_T5FLviseEE0')),
  na = async l => {
    const { blogType: t } = l.params,
      n = l.env.get('DATO_CMS_TOKEN')
    return an(n || '', t)
  },
  Ke = B(u(na, 's_faHCQ2pV65k')),
  aa = () => {
    const l = G()
    return o(
      f,
      {
        children: o(
          ta,
          {
            get urlBlogBasePath() {
              return 'blog/' + l.params.blogType
            },
            get blogType() {
              return l.params.blogType
            },
            [a]: {
              urlBlogBasePath: p(
                t => 'blog/' + t.params.blogType,
                [l],
                '"blog/"+p0.params.blogType',
              ),
              blogType: p(t => t.params.blogType, [l], 'p0.params.blogType'),
            },
          },
          3,
          'DI_0',
        ),
      },
      1,
      'DI_1',
    )
  },
  ra = b(u(aa, 's_kc55RtBXaKM')),
  oa = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  ia = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: ra, head: oa, useListArticles: Ke },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  sa = () =>
    o(
      f,
      {
        children: e(
          'div',
          null,
          { role: 'alert', class: 'alert' },
          [
            e(
              'svg',
              null,
              {
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'none',
                viewBox: '0 0 24 24',
                class: 'stroke-info h-6 w-6 shrink-0',
              },
              e(
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
            e(
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
  ca = b(u(sa, 's_GzGDOMI0hrg')),
  Xe = pl({ scopeId: '' })
function ua(l, t, n, r) {
  return J(Xe.Provider, {
    value: { el: l, scopeId: t, attachedEl: void 0 },
    children: J(n, { ...r, children: J(el, null) }),
  })
}
class el extends fl {
  constructor() {
    super(...arguments), (this.slotC = bl())
  }
  shouldComponentUpdate() {
    return !1
  }
  componentDidMount() {
    const t = this.slotC.current
    if (t) {
      const { attachedEl: n, el: r } = this.context
      if (r) {
        if (!n) t.appendChild(r)
        else if (n !== t) throw new Error('already attached')
      }
    }
  }
  render() {
    return J('q-slotc', {
      class: this.context.scopeId,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: '<!--SLOT-->' },
      ref: this.slotC,
    })
  }
}
el.contextType = Xe
const da = l => {
    const t = {}
    return (
      Object.keys(l).forEach(n => {
        if (!n.startsWith('client:') && !n.startsWith('host:')) {
          const r = n.endsWith('$') ? n.slice(0, -1) : n
          t[r] = l[n]
        }
      }),
      t
    )
  },
  ll = l => {
    const t = {}
    return (
      Object.keys(l).forEach(n => {
        n.startsWith('host:') && (t[n.slice(ma.length)] = l[n])
      }),
      t
    )
  },
  ga = () => {
    const [l] = M()
    return (l.value = !0)
  },
  ha = (l, t = {}) => {
    const n = k(!1),
      r = u(ga, 's_6LYztwGzxAA', [n]),
      i = !!(l['client:only'] || (t != null && t.clientOnly))
    return (
      (l['client:visible'] ||
        (t == null ? void 0 : t.eagerness) === 'visible') &&
        U('qvisible', r),
      (l['client:idle'] || (t == null ? void 0 : t.eagerness) === 'idle') &&
        Ae('qidle', r),
      (l['client:load'] ||
        i ||
        (t == null ? void 0 : t.eagerness) === 'load') &&
        Ae('qinit', r),
      (l['client:hover'] || (t == null ? void 0 : t.eagerness) === 'hover') &&
        U('mouseover', r),
      l['client:event'] && U(l['client:event'], r),
      t != null && t.event && U(t == null ? void 0 : t.event, r),
      [n, i, r]
    )
  },
  ma = 'host:'
async function pa(l, t, n, r, i, s, d) {
  {
    const h = await t.resolve(),
      m = da(r)
    Object.assign(d, m)
    const c = vl(ua(void 0, n, h, m)),
      y = c.indexOf('<!--SLOT-->')
    if (y > 0) {
      const x = c.slice(0, y),
        g = c.slice(y + 11)
      return o(
        l,
        {
          ref: i,
          ...ll(r),
          children: o(
            ul,
            {
              children: async function* () {
                yield o(X, { data: x }, 3, '0a_3'),
                  yield e(
                    'q-slot',
                    { ref: s },
                    null,
                    o(L, null, 3, '0a_4'),
                    1,
                    null,
                  ),
                  yield o(X, { data: g }, 3, '0a_5')
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
      f,
      {
        children: [
          o(l, { ref: i, children: o(X, { data: c }, 3, '0a_8') }, 1, '0a_9'),
          e('q-slot', { ref: s }, null, o(L, null, 3, '0a_10'), 1, null),
        ],
      },
      1,
      '0a_11',
    )
  }
}
const fa = 'q-slot{display:none} q-slotc,q-slotc>q-slot{display:contents}',
  ba = async ({ track: l }) => {
    const [t, n, r, i, s, d, h, m, c] = M()
    l(() => ({ ...s })), l(h)
  },
  va = l => {
    const [t, n] = M()
    H()
    const r = j(u(fa, 's_hkT84xKSMLE')),
      i = k(),
      s = k(),
      d = k(),
      [h, m] = ha(l, t),
      c = {},
      y = (t == null ? void 0 : t.tagName) ?? 'qwik-react'
    if ((sl(u(ba, 's_EWIT9ENzUX0', [i, c, d, m, l, n, h, s, r])), !m)) {
      const x = pa(y, n, r.scopeId, l, i, s, c)
      return o(Te, { children: x }, 1, 2)
    }
    return o(
      Te,
      {
        children: [
          o(
            y,
            {
              ...ll(l),
              ref: x => {
                i.value = x
              },
              children: cl,
              [a]: { ref: a },
            },
            1,
            '6S_0',
          ),
          e('q-slot', { ref: s }, null, o(L, null, 3, '6S_1'), 1, null),
        ],
      },
      1,
      '6S_2',
    )
  }
function wa(l, t) {
  return b(u(va, 's_zH94hIe0Ick', [t, l]))
}
function ya(l) {
  return ee(yl, {
    data: l.data,
    renderBlock: ({ record: t }) => {
      switch (t.__typename) {
        case 'ImageBlockRecord':
          return ee(wl, { data: t.asset.responsiveImage })
        default:
          return null
      }
    },
    renderLinkToRecord: ({ record: t, children: n, transformedMeta: r }) => {
      switch (t.__typename) {
        case 'PageRecord':
          return ee('a', {
            ...r,
            href: `/blog/${t.blogType}/${t.slug}`,
            children: n,
          })
        default:
          return null
      }
    },
  })
}
const xa = wa(u(ya, 's_h5ZUTiJtg0M')),
  ka = ue({
    name: O(E('Must be a string'), D(5, 'Minimun length 5.')),
    message: O(E('Must be a string'), D(5, 'Minimun length 5.')),
  })
function tl(l) {
  const t = new Map(),
    n = []
  for (const r of l) t.set(r.id, { ...r, children: [] })
  for (const r of l)
    if (r.parentComment && r.parentComment.id) {
      const i = t.get(r.parentComment.id),
        s = t.get(r.id)
      i && s && i.children.push(s)
    } else {
      const i = t.get(r.id)
      i && n.push(i)
    }
  return n
}
const _a = async (l, t) => {
    const [n, r, i, s, d] = M()
    try {
      i.value = !0
      const h = await fetch(
        `https://comment-dato-646933890902.europe-west3.run.app?name=${l.name}&message=${l.message}&pageId=${r.page.id}`,
      )
      if (((i.value = !1), h && h.ok)) {
        const m = await h.json()
        if (m.success) {
          fe(n), (d.value = !0)
          const c = {
            id: m.id,
            name: l.name,
            message: l.message,
            _createdAt: new Date().toISOString(),
            _updatedAt: new Date().toISOString(),
            likes: 0,
            dislikes: 0,
            parentComment: null,
            children: [],
          }
          ;(commentList.value = tl([...commentList.value, c])),
            setTimeout(() => {
              d.value = !1
            }, 3e3)
        } else s.value = !0
      } else s.value = !0
    } catch {
      ;(i.value = !1), (s.value = !0)
    }
  },
  za = () => {
    const [l] = M()
    ;(l.value = !1), localStorage.setItem('pako-ita-warn', 'closed')
  },
  Ca = l => {
    H(), ce(u(ke, 's_2A8V0pFvVL0'))
    const t = k(!1),
      n = k(!1),
      r = k(!1),
      [i, { Form: s, Field: d }] = ve({
        loader: We(),
        validate: de(u(ka, 's_v9EqJiBRR0U')),
      }),
      h = u(_a, 's_a7tEUukrY5Q', [i, l, t, n, r]),
      m = k(!1),
      c = k(tl(l.comments || [])),
      y = u(za, 's_MPTU77x6T2Q', [m])
    se(q('s_0EhuNoWgjY4', [m]))
    const x = g =>
      e(
        'div',
        null,
        { class: 'comment-item mb-4' },
        [
          e(
            'div',
            null,
            { class: 'comment-name font-bold' },
            w(g, 'name'),
            1,
            null,
          ),
          e('div', null, { class: 'comment-text' }, w(g, 'message'), 1, null),
          g.children &&
            g.children.length > 0 &&
            e(
              'div',
              null,
              { class: 'pl-4 mt-2' },
              g.children.map(v => x(v)),
              1,
              '1P_0',
            ),
        ],
        1,
        g.id,
      )
    return o(
      f,
      {
        children: [
          e(
            'section',
            null,
            {
              class: 'cover-section text-center blog-content',
              style: p(
                g => {
                  var v
                  return (
                    "background-image: url('" +
                    ((v = g.page.cover) == null ? void 0 : v.url) +
                    "')"
                  )
                },
                [l],
                `"background-image: url('"+p0.page.cover?.url+"')"`,
              ),
            },
            e(
              'div',
              null,
              { class: 'content' },
              [
                e(
                  'h1',
                  null,
                  null,
                  p(g => g.page.title, [l], 'p0.page.title'),
                  3,
                  null,
                ),
                e(
                  'h2',
                  null,
                  null,
                  p(g => g.page.subtitle, [l], 'p0.page.subtitle'),
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
          e(
            'section',
            null,
            { class: 'title-section' },
            e(
              'div',
              null,
              { class: 'breadcrumbs text-sm' },
              e(
                'ul',
                null,
                null,
                [
                  e(
                    'li',
                    null,
                    null,
                    o(
                      _,
                      { href: '/', children: 'Home', [a]: { href: a } },
                      3,
                      '1P_1',
                    ),
                    1,
                    null,
                  ),
                  e(
                    'li',
                    null,
                    null,
                    l.page.slug === 'finance' || l.page.slug === 'dev'
                      ? 'Blog'
                      : o(
                          _,
                          {
                            get href() {
                              return '/' + l.urlBlogBasePath
                            },
                            children: 'Blog',
                            [a]: {
                              href: p(
                                g => '/' + g.urlBlogBasePath,
                                [l],
                                '"/"+p0.urlBlogBasePath',
                              ),
                            },
                          },
                          3,
                          '1P_2',
                        ),
                    1,
                    null,
                  ),
                  l.page.slug !== 'finance' &&
                    l.page.slug !== 'dev' &&
                    e(
                      'li',
                      null,
                      null,
                      p(g => g.page.title, [l], 'p0.page.title'),
                      3,
                      '1P_3',
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
          l.showFinanceWarn &&
            e(
              'section',
              null,
              { class: 'title-section' },
              o(ca, null, 3, '1P_4'),
              1,
              '1P_5',
            ),
          o(
            C,
            {
              showCta: !1,
              sectionClass: 'blog-content',
              children: o(
                xa,
                {
                  get data() {
                    return l.page.content
                  },
                  [a]: { data: p(g => g.page.content, [l], 'p0.page.content') },
                },
                3,
                '1P_6',
              ),
              [a]: { showCta: a, sectionClass: a },
            },
            1,
            '1P_7',
          ),
          c &&
            c.value &&
            c.value.length &&
            o(
              C,
              {
                showCta: !1,
                sectionClass: 'blog-comments',
                children: c.value.map(g => x(g)),
                [a]: { showCta: a, sectionClass: a },
              },
              1,
              '1P_8',
            ),
          o(
            C,
            {
              showCta: !1,
              sectionClass: 'blog-write-comment',
              children: o(
                s,
                {
                  onSubmit$: h,
                  class: 'grid grid-cols-1 md:grid-cols-2 gap-4',
                  children: [
                    o(
                      d,
                      {
                        name: 'name',
                        children: (g, v) =>
                          e(
                            'div',
                            null,
                            {
                              class:
                                'flex flex-col gap-2 col-span-2 md:col-span-1',
                            },
                            [
                              e(
                                'label',
                                null,
                                {
                                  class:
                                    'input input-bordered flex items-center gap-2',
                                },
                                [
                                  e(
                                    'svg',
                                    null,
                                    {
                                      xmlns: 'http://www.w3.org/2000/svg',
                                      viewBox: '0 0 16 16',
                                      fill: 'currentColor',
                                      class: 'h-4 w-4 opacity-70',
                                    },
                                    e(
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
                                  I(
                                    'input',
                                    {
                                      ...v,
                                      get value() {
                                        return g.value
                                      },
                                      value: w(g, 'value'),
                                      type: 'text',
                                      class: 'grow w-full',
                                      placeholder: 'Name',
                                    },
                                    { type: a, class: a, placeholder: a },
                                    0,
                                    null,
                                  ),
                                ],
                                1,
                                null,
                              ),
                              g.error &&
                                e(
                                  'div',
                                  null,
                                  { class: 'text-red-500' },
                                  w(g, 'error'),
                                  1,
                                  '1P_9',
                                ),
                            ],
                            1,
                            '1P_10',
                          ),
                        [a]: { name: a },
                      },
                      3,
                      '1P_11',
                    ),
                    o(
                      d,
                      {
                        name: 'message',
                        children: (g, v) =>
                          e(
                            'div',
                            null,
                            { class: 'flex flex-col gap-2 col-span-2' },
                            [
                              I(
                                'textarea',
                                {
                                  ...v,
                                  get value() {
                                    return g.value
                                  },
                                  value: w(g, 'value'),
                                  placeholder: 'Message',
                                  class:
                                    'textarea textarea-bordered textarea-lg w-full',
                                },
                                { placeholder: a, class: a },
                                0,
                                null,
                              ),
                              g.error &&
                                e(
                                  'div',
                                  null,
                                  { class: 'text-red-500' },
                                  w(g, 'error'),
                                  1,
                                  '1P_12',
                                ),
                            ],
                            1,
                            '1P_13',
                          ),
                        [a]: { name: a },
                      },
                      3,
                      '1P_14',
                    ),
                    e(
                      'button',
                      null,
                      {
                        class: 'btn btn-primary text-white col-start-2',
                        type: 'submit',
                        disabled: p(g => g.value, [t], 'p0.value'),
                        'data-goatcounter-click': 'send-comment',
                        'data-goatcounter-title': 'Send Comment',
                        'data-goatcounter-referrer': 'referrer',
                      },
                      [
                        t.value &&
                          e(
                            'span',
                            null,
                            { class: 'loading loading-spinner' },
                            null,
                            3,
                            '1P_15',
                          ),
                        'Comment',
                      ],
                      1,
                      null,
                    ),
                  ],
                  [a]: { onSubmit$: a, class: a },
                },
                1,
                '1P_16',
              ),
              [a]: { showCta: a, sectionClass: a },
            },
            1,
            '1P_17',
          ),
          l.latestArticle &&
            o(
              f,
              {
                children: [
                  e(
                    'section',
                    null,
                    { class: 'title-section text-center' },
                    e(
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
                        return '/' + l.urlBlogBasePath + '/all'
                      },
                      ctaLabel: 'Scopri tutti gli articoli',
                      get gcClick() {
                        return 'more-' + l.blogType + '-articles'
                      },
                      get gcTitle() {
                        return 'More ' + l.blogType + ' Articles'
                      },
                      gcReferrer: 'referrer',
                      children: o(
                        we,
                        {
                          get urlBlogBasePath() {
                            return l.urlBlogBasePath
                          },
                          get articles() {
                            return l.latestArticle
                          },
                          referrer: 'index-article',
                          [a]: {
                            urlBlogBasePath: p(
                              g => g.urlBlogBasePath,
                              [l],
                              'p0.urlBlogBasePath',
                            ),
                            articles: p(
                              g => g.latestArticle,
                              [l],
                              'p0.latestArticle',
                            ),
                            referrer: a,
                          },
                        },
                        3,
                        '1P_18',
                      ),
                      [a]: {
                        showCta: a,
                        ctaHref: p(
                          g => '/' + g.urlBlogBasePath + '/all',
                          [l],
                          '"/"+p0.urlBlogBasePath+"/all"',
                        ),
                        ctaLabel: a,
                        gcClick: p(
                          g => 'more-' + g.blogType + '-articles',
                          [l],
                          '"more-"+p0.blogType+"-articles"',
                        ),
                        gcTitle: p(
                          g => 'More ' + g.blogType + ' Articles',
                          [l],
                          '"More "+p0.blogType+" Articles"',
                        ),
                        gcReferrer: a,
                      },
                    },
                    1,
                    '1P_19',
                  ),
                ],
              },
              1,
              '1P_20',
            ),
          m.value &&
            l.page.language === 'ita' &&
            e(
              'div',
              null,
              {
                role: 'alert',
                class: 'alert alert-info z-[999] fixed bottom-2 w-[98%]',
              },
              [
                e(
                  'svg',
                  null,
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    fill: 'none',
                    viewBox: '0 0 24 24',
                    class: 'h-6 w-6 shrink-0 stroke-current',
                  },
                  e(
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
                e('span', null, null, 'Italian content', 3, null),
                e(
                  'div',
                  null,
                  null,
                  e(
                    'button',
                    null,
                    { class: 'btn btn-sm btn-primary', onClick$: y },
                    'Close',
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
              ],
              3,
              '1P_21',
            ),
        ],
      },
      1,
      '1P_22',
    )
  },
  nl = b(u(Ca, 's_TBWAb6R23ho')),
  Sa = () => ({ params: Z.map(l => ({ blogType: l })) }),
  Ma = async l => {
    const { blogType: t } = l.params,
      n = l.env.get('DATO_CMS_TOKEN')
    return Qe(t, t, n || '')
  },
  _e = B(u(Ma, 's_6Sd2qTPnTM8')),
  Pa = async l => {
    const { blogType: t } = l.params,
      n = l.env.get('DATO_CMS_TOKEN')
    return Je(n || '', t)
  },
  al = B(u(Pa, 's_tQfbuidS0PQ')),
  Ta = () => {
    const l = G(),
      t = _e(),
      n = al()
    return o(
      f,
      {
        children: o(
          nl,
          {
            get urlBlogBasePath() {
              return 'blog/' + l.params.blogType
            },
            get blogType() {
              return l.params.blogType
            },
            get page() {
              return t.value.data.page
            },
            get latestArticle() {
              return n.value.data.allPages
            },
            get showFinanceWarn() {
              return l.params.blogType === 'finance'
            },
            [a]: {
              urlBlogBasePath: p(
                r => 'blog/' + r.params.blogType,
                [l],
                '"blog/"+p0.params.blogType',
              ),
              blogType: p(r => r.params.blogType, [l], 'p0.params.blogType'),
              page: p(r => r.value.data.page, [t], 'p0.value.data.page'),
              latestArticle: p(
                r => r.value.data.allPages,
                [n],
                'p0.value.data.allPages',
              ),
              showFinanceWarn: p(
                r => r.params.blogType === 'finance',
                [l],
                'p0.params.blogType==="finance"',
              ),
            },
          },
          3,
          'BW_0',
        ),
      },
      1,
      'BW_1',
    )
  },
  Aa = b(u(Ta, 's_7duOWr5CdMs')),
  La = ({ resolveValue: l, params: t }) => {
    const r = l(_e).data.page.seo,
      i = r.find(d => d.tag === 'title'),
      s = r.filter(d => d.tag === 'meta')
    return {
      title: i.content,
      meta: s.map(d => ({
        name: d.attributes.property,
        content: d.attributes.content,
      })),
    }
  },
  ja = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Aa,
        head: La,
        onStaticGenerate: Sa,
        useArticle: _e,
        useLatestArticles: al,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ba = async l => {
    const { slug: t, blogType: n } = l.params,
      r = l.env.get('DATO_CMS_TOKEN'),
      i = Qe(t, n, r || ''),
      s = rn(r || '', (await i).data.page.id)
    return { article: await i, comments: await s }
  },
  ze = B(u(Ba, 's_fCglpJAUA0M')),
  Ia = async ({ env: l }) => {
    const t = l.get('DATO_CMS_TOKEN'),
      n = []
    for (const r of Z) {
      const i = await ie(t ?? '', r)
      n.push(...i.data.allPages, { slug: 'all', blogType: r })
    }
    return { params: n.map(r => ({ slug: r.slug, blogType: r.blogType })) }
  },
  Fa = () => {
    const l = G(),
      t = ze()
    return o(
      f,
      {
        children: o(
          nl,
          {
            get urlBlogBasePath() {
              return 'blog/' + l.params.blogType
            },
            get blogType() {
              return l.params.blogType
            },
            get showFinanceWarn() {
              return l.params.blogType === 'finance'
            },
            get page() {
              return t.value.article.data.page
            },
            get comments() {
              return t.value.comments.data.allComments
            },
            [a]: {
              urlBlogBasePath: p(
                n => 'blog/' + n.params.blogType,
                [l],
                '"blog/"+p0.params.blogType',
              ),
              blogType: p(n => n.params.blogType, [l], 'p0.params.blogType'),
              showFinanceWarn: p(
                n => n.params.blogType === 'finance',
                [l],
                'p0.params.blogType==="finance"',
              ),
              page: p(
                n => n.value.article.data.page,
                [t],
                'p0.value.article.data.page',
              ),
              comments: p(
                n => n.value.comments.data.allComments,
                [t],
                'p0.value.comments.data.allComments',
              ),
            },
          },
          3,
          'T9_0',
        ),
      },
      1,
      'T9_1',
    )
  },
  qa = b(u(Fa, 's_oOld3bPJ5Ws')),
  Oa = ({ resolveValue: l, params: t }) => {
    const r = l(ze).article.data.page.seo,
      i = r.find(d => d.tag === 'title'),
      s = r.filter(d => d.tag === 'meta')
    return {
      title: i.content,
      meta: s.map(d => ({
        name: d.attributes.property,
        content: d.attributes.content,
      })),
    }
  },
  Ea = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: qa,
        head: Oa,
        onStaticGenerate: Ia,
        useArticle: ze,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Da = [],
  A = () => kt,
  ne = () => jt,
  rl = [
    ['/', [A, () => bn], '/', ['q-b8f0dd98.js', 'q-d9f9bbd0.js']],
    [
      '404.html',
      [A, () => xn],
      '/404.html',
      ['q-b8f0dd98.js', 'q-3710b96b.js'],
    ],
    [
      'dynamic-sitemap.xml',
      [A, () => zn],
      '/dynamic-sitemap.xml',
      ['q-b8f0dd98.js', 'q-c31a0420.js'],
    ],
    [
      'privacy-policy/eng/',
      [A, () => An],
      '/privacy-policy/eng/',
      ['q-b8f0dd98.js', 'q-428048bf.js'],
    ],
    [
      'privacy-policy/ita/',
      [A, () => qn],
      '/privacy-policy/ita/',
      ['q-b8f0dd98.js', 'q-4c3810c8.js'],
    ],
    [
      'button-game/',
      [A, () => $n],
      '/button-game/',
      ['q-b8f0dd98.js', 'q-ac2829a6.js'],
    ],
    [
      'projects/',
      [A, () => Wn],
      '/projects/',
      ['q-b8f0dd98.js', 'q-e3d357c4.js'],
    ],
    [
      'unsubscribed-failed/',
      [A, () => Jn],
      '/unsubscribed-failed/',
      ['q-b8f0dd98.js', 'q-70214924.js'],
    ],
    [
      'unsubscribed/',
      [A, () => Xn],
      '/unsubscribed/',
      ['q-b8f0dd98.js', 'q-5b74adc2.js'],
    ],
    [
      'blog/[blogType]/all/',
      [ne, () => ia],
      '/blog/[blogType]/all/',
      ['q-d7b70c8d.js', 'q-6a405fe6.js'],
    ],
    [
      'blog/[blogType]/',
      [ne, () => ja],
      '/blog/[blogType]/',
      ['q-d7b70c8d.js', 'q-2d218c05.js'],
    ],
    [
      'blog/[blogType]/[slug]/',
      [ne, () => Ea],
      '/blog/[blogType]/[slug]/',
      ['q-d7b70c8d.js', 'q-9433744a.js'],
    ],
  ],
  Ra = [],
  $a = !0,
  Na = '/',
  Va = !0,
  Xa = {
    routes: rl,
    serverPlugins: Da,
    menus: Ra,
    trailingSlash: $a,
    basePathname: Na,
    cacheModules: Va,
  }
export {
  Na as basePathname,
  Va as cacheModules,
  Xa as default,
  Ra as menus,
  rl as routes,
  Da as serverPlugins,
  $a as trailingSlash,
}
