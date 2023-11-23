import { getNotFound as Bi } from './@qwik-city-not-found-paths.js'
import { isStaticPath as Ki } from './@qwik-city-static-paths.js'
import { createReadStream as Ji } from 'fs'
import { join as Pt, basename as Vi, extname as Yi } from 'path'
import { fileURLToPath as Zi } from 'url'
import { Http2ServerRequest as Gi } from 'http2'
import {
  TextEncoderStream as Xi,
  TextDecoderStream as el,
  WritableStream as tl,
  ReadableStream as nl,
} from 'stream/web'
import {
  fetch as sl,
  Headers as rl,
  Request as ol,
  Response as il,
  FormData as ll,
} from 'undici'
import al from 'crypto'
import { set as Dt, isWithinInterval as nr, format as cl } from 'date-fns'
import ul from 'number-to-words'
var Ur = class extends Error {
  constructor(e, t) {
    super(t), (this.status = e)
  }
}
function dl(e, t) {
  let n = 'Server Error'
  return (
    t != null &&
      (typeof t.message == 'string' ? (n = t.message) : (n = String(t))),
    '<html>' + Hr(e, n) + '</html>'
  )
}
function Hr(e, t) {
  typeof e != 'number' && (e = 500),
    typeof t == 'string' ? (t = ml(t)) : (t = '')
  const n = typeof t == 'string' ? '600px' : '300px',
    s = e >= 500 ? hl : fl
  return `
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${s}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${n}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${s}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${s}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`
}
var pl = /[&<>]/g,
  ml = e =>
    e.replace(pl, t => {
      switch (t) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        default:
          return ''
      }
    }),
  fl = '#006ce9',
  hl = '#713fc2',
  $l = { lax: 'Lax', none: 'None', strict: 'Strict' },
  gl = {
    seconds: 1,
    minutes: 1 * 60,
    hours: 1 * 60 * 60,
    days: 1 * 60 * 60 * 24,
    weeks: 1 * 60 * 60 * 24 * 7,
  },
  bl = (e, t, n) => {
    const s = [`${e}=${t}`]
    typeof n.domain == 'string' && s.push(`Domain=${n.domain}`),
      typeof n.maxAge == 'number'
        ? s.push(`Max-Age=${n.maxAge}`)
        : Array.isArray(n.maxAge)
          ? s.push(`Max-Age=${n.maxAge[0] * gl[n.maxAge[1]]}`)
          : typeof n.expires == 'number' || typeof n.expires == 'string'
            ? s.push(`Expires=${n.expires}`)
            : n.expires instanceof Date &&
              s.push(`Expires=${n.expires.toUTCString()}`),
      n.httpOnly && s.push('HttpOnly'),
      typeof n.path == 'string' && s.push(`Path=${n.path}`)
    const r = vl(n.sameSite)
    return (
      r && s.push(`SameSite=${r}`), n.secure && s.push('Secure'), s.join('; ')
    )
  }
function sr(e) {
  try {
    return decodeURIComponent(e)
  } catch {
    return e
  }
}
var yl = e => {
  const t = {}
  if (typeof e == 'string' && e !== '') {
    const n = e.split(';')
    for (const s of n) {
      const r = s.indexOf('=')
      r !== -1 && (t[sr(s.slice(0, r).trim())] = sr(s.slice(r + 1).trim()))
    }
  }
  return t
}
function vl(e) {
  if (e === !0) return 'Strict'
  if (e === !1) return 'None'
  if (e) return $l[e]
}
var lt = Symbol('request-cookies'),
  Kn = Symbol('response-cookies'),
  Ie = Symbol('live-cookies'),
  Qr,
  Br,
  wl = class {
    constructor(e) {
      ;(this[Qr] = {}),
        (this[Br] = {}),
        (this[lt] = yl(e)),
        (this[Ie] = { ...this[lt] })
    }
    get(e, t = !0) {
      const n = this[t ? Ie : lt][e]
      return n
        ? {
            value: n,
            json() {
              return JSON.parse(n)
            },
            number() {
              return Number(n)
            },
          }
        : null
    }
    getAll(e = !0) {
      return Object.keys(this[e ? Ie : lt]).reduce(
        (t, n) => ((t[n] = this.get(n)), t),
        {},
      )
    }
    has(e, t = !0) {
      return !!this[t ? Ie : lt][e]
    }
    set(e, t, n = {}) {
      this[Ie][e] = typeof t == 'string' ? t : JSON.stringify(t)
      const s = typeof t == 'string' ? t : encodeURIComponent(JSON.stringify(t))
      this[Kn][e] = bl(e, s, n)
    }
    delete(e, t) {
      this.set(e, 'deleted', { ...t, maxAge: 0 }), (this[Ie][e] = null)
    }
    headers() {
      return Object.values(this[Kn])
    }
  }
;(Qr = Kn), (Br = Ie)
var ds = class {},
  Kt = class extends ds {},
  rr = new WeakMap(),
  or = 'qaction',
  _l = 'qfunc'
function xl(e) {
  const { url: t, params: n, request: s, status: r, locale: o } = e,
    i = {}
  s.headers.forEach((y, $) => (i[$] = y))
  const l = e.sharedMap.get(gn),
    a = e.sharedMap.get(Xr),
    c = e.sharedMap.get(Gr),
    d = e.sharedMap.get(Dl),
    p = e.request.headers,
    m = new URL(t.pathname + t.search, t),
    h = p.get('X-Forwarded-Host'),
    b = p.get('X-Forwarded-Proto')
  return (
    h && ((m.port = ''), (m.host = h)),
    b && (m.protocol = b),
    {
      url: m.href,
      requestHeaders: i,
      locale: o(),
      nonce: d,
      containerAttributes: { 'q:route': c },
      qwikcity: {
        routeName: c,
        ev: e,
        params: { ...n },
        loadedRoute: Fl(e),
        response: { status: r(), loaders: bn(e), action: l, formData: a },
      },
    }
  )
}
var kl = (e, t, n, s, r) => {
    const o = [],
      i = [],
      l = [],
      a = !!(t && Al(t[2]))
    if ((e && ir(o, i, l, e, a, n), t)) {
      const c = t[0]
      s &&
        (n === 'POST' || n === 'PUT' || n === 'PATCH' || n === 'DELETE') &&
        l.unshift(Tl),
        a && (n === 'POST' && l.push(jl), l.push(El), l.push(Ml)),
        l.push(Il),
        ir(o, i, l, t[2], a, n),
        a &&
          (l.push(d => {
            d.sharedMap.set(Gr, c)
          }),
          l.push(Sl(o, i)),
          l.push(r))
    }
    return l
  },
  ir = (e, t, n, s, r, o) => {
    for (const i of s) {
      typeof i.onRequest == 'function'
        ? n.push(i.onRequest)
        : Array.isArray(i.onRequest) && n.push(...i.onRequest)
      let l
      switch (o) {
        case 'GET': {
          l = i.onGet
          break
        }
        case 'POST': {
          l = i.onPost
          break
        }
        case 'PUT': {
          l = i.onPut
          break
        }
        case 'PATCH': {
          l = i.onPatch
          break
        }
        case 'DELETE': {
          l = i.onDelete
          break
        }
        case 'OPTIONS': {
          l = i.onOptions
          break
        }
        case 'HEAD': {
          l = i.onHead
          break
        }
      }
      if (
        (typeof l == 'function' ? n.push(l) : Array.isArray(l) && n.push(...l),
        r)
      ) {
        const a = Object.values(i).filter(d => lr(d, 'server_loader'))
        e.push(...a)
        const c = Object.values(i).filter(d => lr(d, 'server_action'))
        t.push(...c)
      }
    }
  },
  lr = (e, t) => e && typeof e == 'function' && e.__brand === t
function Sl(e, t) {
  return async n => {
    if (n.headersSent) {
      n.exit()
      return
    }
    const { method: s } = n,
      r = bn(n),
      o = yn(n) === 'dev',
      i = n[$n]
    if (
      (o &&
        s === 'GET' &&
        n.query.has(or) &&
        console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),
      s === 'POST')
    ) {
      const l = n.query.get(or)
      if (l) {
        const a = globalThis._qwikActionsMap,
          c = t.find(d => d.__id === l) ?? (a == null ? void 0 : a.get(l))
        if (c) {
          n.sharedMap.set(gn, l)
          const d = await n.parseBody()
          if (!d || typeof d != 'object')
            throw new Error('Expected request data to be an object')
          const p = await ar(n, c.__validators, d, o)
          if (!p.success) r[l] = n.fail(p.status ?? 500, p.error)
          else {
            const m = o
              ? await Vt(n, c.__qrl.getSymbol().split('_', 1)[0], () =>
                  c.__qrl.call(n, p.data, n),
                )
              : await c.__qrl.call(n, p.data, n)
            o && Jt(i, m, c.__qrl), (r[l] = m)
          }
        }
      }
    }
    e.length > 0 &&
      (await Promise.all(
        e.map(l => {
          const a = l.__id
          return (r[a] = ar(n, l.__validators, void 0, o)
            .then(c =>
              c.success
                ? o
                  ? Vt(n, l.__qrl.getSymbol().split('_', 1)[0], () =>
                      l.__qrl.call(n, n),
                    )
                  : l.__qrl.call(n, n)
                : n.fail(c.status ?? 500, c.error),
            )
            .then(
              c => (
                typeof c == 'function'
                  ? (r[a] = c())
                  : (o && Jt(i, c, l.__qrl), (r[a] = c)),
                c
              ),
            ))
        }),
      ))
  }
}
async function ar(e, t, n, s) {
  let r = { success: !0, data: n }
  if (t)
    for (const o of t)
      if (
        (s
          ? (r = await Vt(e, 'validator$', () => o.validate(e, n)))
          : (r = await o.validate(e, n)),
        r.success)
      )
        n = r.data
      else return r
  return r
}
function ql(e) {
  return e && typeof e == 'object' && Symbol.asyncIterator in e
}
async function jl(e) {
  const t = e.query.get(_l)
  if (
    t &&
    e.request.headers.get('X-QRL') === t &&
    e.request.headers.get('Content-Type') === 'application/qwik-json'
  ) {
    e.exit()
    const n = yn(e) === 'dev',
      s = e[$n],
      r = await e.parseBody()
    if (Array.isArray(r)) {
      const [o, ...i] = r
      if (Cl(o) && o.getHash() === t) {
        let l
        try {
          n
            ? (l = await Vt(e, `server_${o.getSymbol()}`, () => o.apply(e, i)))
            : (l = await o.apply(e, i))
        } catch (a) {
          e.headers.set('Content-Type', 'application/qwik-json'),
            e.send(500, await s._serializeData(a, !0))
          return
        }
        if (ql(l)) {
          e.headers.set('Content-Type', 'text/qwik-json-stream')
          const c = e.getWritableStream().getWriter()
          for await (const d of l) {
            n && Jt(s, d, o)
            const p = await s._serializeData(d, !0)
            if (e.signal.aborted) break
            await c.write(
              hn.encode(`${p}
`),
            )
          }
          c.close()
        } else {
          Jt(s, l, o), e.headers.set('Content-Type', 'application/qwik-json')
          const a = await s._serializeData(l, !0)
          e.send(200, a)
        }
        return
      }
    }
    throw e.error(500, 'Invalid request')
  }
}
function El(e) {
  const t = ps(e),
    { basePathname: n, pathname: s, url: r, sharedMap: o } = e
  if (!o.has(St) && s !== n && !s.endsWith('.html')) {
    if (t) {
      if (!s.endsWith('/')) throw e.redirect(302, s + '/' + r.search)
    } else if (s.endsWith('/'))
      throw e.redirect(302, s.slice(0, s.length - 1) + r.search)
  }
}
function Jt(e, t, n) {
  try {
    e._verifySerializable(t, void 0)
  } catch (s) {
    throw (s instanceof Error && n.dev && (s.loc = n.dev), s)
  }
}
var Cl = e => typeof e == 'function' && typeof e.getSymbol == 'function'
function Al(e) {
  const t = e[e.length - 1]
  return t && typeof t.default == 'function'
}
function Kr(e, t) {
  return (
    (e = new URL(e)),
    e.pathname.endsWith(Ge) && (e.pathname = e.pathname.slice(0, -Ge.length)),
    t
      ? e.pathname.endsWith('/') || (e.pathname += '/')
      : e.pathname.endsWith('/') && (e.pathname = e.pathname.slice(0, -1)),
    e.toString().substring(e.origin.length)
  )
}
var hn = new TextEncoder()
function Tl(e) {
  if (
    Nl(
      e.request.headers,
      'application/x-www-form-urlencoded',
      'multipart/form-data',
      'text/plain',
    )
  ) {
    const n = e.request.headers.get('origin'),
      s = e.url.origin
    if (n !== s)
      throw e.error(
        403,
        `CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${s}".`,
      )
  }
}
function zl(e) {
  return async t => {
    if (t.headersSent || t.sharedMap.has(St)) return
    t.request.headers.forEach((p, m) => p)
    const s = t.headers
    s.has('Content-Type') || s.set('Content-Type', 'text/html; charset=utf-8')
    const r = ps(t),
      { readable: o, writable: i } = new TextEncoderStream(),
      l = t.getWritableStream(),
      a = o.pipeTo(l, { preventClose: !0 }),
      c = i.getWriter(),
      d = t.status()
    try {
      const p = yn(t) === 'static',
        m = xl(t),
        h = await e({
          base: t.basePathname + 'build/',
          stream: c,
          serverData: m,
          containerAttributes: {
            'q:render': p ? 'static' : '',
            ...m.containerAttributes,
          },
        }),
        b = {
          loaders: bn(t),
          action: t.sharedMap.get(gn),
          status: d !== 200 ? d : 200,
          href: Kr(t.url, r),
        }
      typeof h.html == 'string' && (await c.write(h.html)),
        t.sharedMap.set('qData', b)
    } finally {
      await c.ready, await c.close(), await a
    }
    await l.close()
  }
}
async function Il(e) {
  if (e.sharedMap.has(St)) {
    try {
      await e.next()
    } catch (o) {
      if (!(o instanceof Kt)) throw o
    }
    if (e.headersSent) return
    const n = e.status(),
      s = e.headers.get('Location')
    if (n >= 301 && n <= 308 && s) {
      const o = Rl(s)
      if (o) {
        e.headers.set('Location', o), e.getWritableStream().close()
        return
      } else e.status(200), e.headers.delete('Location')
    }
  }
}
async function Ml(e) {
  if (e.sharedMap.has(St)) {
    if ((await e.next(), e.headersSent || e.exited)) return
    const n = e.status(),
      s = e.headers.get('Location'),
      r = ps(e)
    e.request.headers.forEach((c, d) => c),
      e.headers.set('Content-Type', 'application/json; charset=utf-8')
    const o = {
        loaders: bn(e),
        action: e.sharedMap.get(gn),
        status: n !== 200 ? n : 200,
        href: Kr(e.url, r),
        redirect: s ?? void 0,
      },
      i = e.getWritableStream().getWriter(),
      a = await e[$n]._serializeData(o, !0)
    i.write(hn.encode(a)), e.sharedMap.set('qData', o), i.close()
  }
}
function Rl(e) {
  if (e.startsWith('/')) {
    const t = Ge,
      n = new URL(e, 'http://localhost')
    return (
      (n.pathname.endsWith('/') ? n.pathname.slice(0, -1) : n.pathname) +
      (t.startsWith('/') ? '' : '/') +
      t +
      n.search
    )
  } else return
}
function cr() {
  return typeof performance < 'u' ? performance.now() : 0
}
async function Vt(e, t, n) {
  const s = cr()
  try {
    return await n()
  } finally {
    const r = cr() - s
    let o = e.sharedMap.get('@serverTiming')
    o || e.sharedMap.set('@serverTiming', (o = [])), o.push([t, r])
  }
}
function Nl(e, ...t) {
  var n
  const s =
    ((n = e.get('content-type')) == null
      ? void 0
      : n.split(/;,/, 1)[0].trim()) ?? ''
  return t.includes(s)
}
function Ll(e) {
  const t = []
  return (
    e === 'day'
      ? (e = 60 * 60 * 24)
      : e === 'week'
        ? (e = 60 * 60 * 24 * 7)
        : e === 'month'
          ? (e = 60 * 60 * 24 * 30)
          : e === 'year'
            ? (e = 60 * 60 * 24 * 365)
            : e === 'private'
              ? (e = { private: !0, noCache: !0 })
              : e === 'immutable'
                ? (e = {
                    public: !0,
                    immutable: !0,
                    maxAge: 60 * 60 * 24 * 365,
                    staleWhileRevalidate: 60 * 60 * 24 * 365,
                  })
                : e === 'no-cache' && (e = { noCache: !0 }),
    typeof e == 'number' &&
      (e = { maxAge: e, sMaxAge: e, staleWhileRevalidate: e }),
    e.immutable && t.push('immutable'),
    e.maxAge && t.push(`max-age=${e.maxAge}`),
    e.sMaxAge && t.push(`s-maxage=${e.sMaxAge}`),
    e.noStore && t.push('no-store'),
    e.noCache && t.push('no-cache'),
    e.private && t.push('private'),
    e.public && t.push('public'),
    e.staleWhileRevalidate &&
      t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),
    e.staleIfError && t.push(`stale-if-error=${e.staleIfError}`),
    t.join(', ')
  )
}
var Pl = e => e && typeof e.then == 'function',
  Jr = Symbol('RequestEvLoaders'),
  Vr = Symbol('RequestEvMode'),
  Yr = Symbol('RequestEvRoute'),
  $n = Symbol('RequestEvQwikSerializer'),
  Zr = Symbol('RequestEvTrailingSlash'),
  Gr = '@routeName',
  gn = '@actionId',
  Xr = '@actionFormData',
  Dl = '@nonce'
function Ol(e, t, n, s, r, o, i, l) {
  const { request: a, platform: c, env: d } = e,
    p = new Map(),
    m = new wl(a.headers.get('cookie')),
    h = new Headers(),
    b = new URL(a.url)
  b.pathname.endsWith(Ge) &&
    ((b.pathname = b.pathname.slice(0, -eo)),
    r && !b.pathname.endsWith('/') && (b.pathname += '/'),
    p.set(St, !0)),
    p.set('@manifest', s)
  let y = -1,
    $ = null,
    f,
    S = e.locale,
    w = 200
  const g = async () => {
      for (y++; y < n.length; ) {
        const k = n[y],
          C = k(A)
        Pl(C) && (await C), y++
      }
    },
    j = () => {
      if ($ !== null) throw new Error('Response already sent')
    },
    E = (k, C) => {
      if ((j(), typeof k == 'number')) {
        w = k
        const Q = A.getWritableStream().getWriter()
        Q.write(typeof C == 'string' ? hn.encode(C) : C), Q.close()
      } else if (
        ((w = k.status),
        k.headers.forEach((I, Q) => {
          h.append(Q, I)
        }),
        k.body)
      ) {
        const I = A.getWritableStream()
        k.body.pipeTo(I)
      } else {
        if (w >= 300 && w < 400) return new Kt()
        A.getWritableStream().getWriter().close()
      }
      return x()
    },
    x = () => ((y = ur), new ds()),
    q = {},
    A = {
      [Jr]: q,
      [Vr]: e.mode,
      [Zr]: r,
      [Yr]: t,
      [$n]: i,
      cookie: m,
      headers: h,
      env: d,
      method: a.method,
      signal: a.signal,
      params: (t == null ? void 0 : t[1]) ?? {},
      pathname: b.pathname,
      platform: c,
      query: b.searchParams,
      request: a,
      url: b,
      basePathname: o,
      sharedMap: p,
      get headersSent() {
        return $ !== null
      },
      get exited() {
        return y >= ur
      },
      get clientConn() {
        return e.getClientConn()
      },
      next: g,
      exit: x,
      cacheControl: (k, C = 'Cache-Control') => {
        j(), h.set(C, Ll(k))
      },
      resolveValue: async k => {
        const C = k.__id
        if (k.__brand === 'server_loader' && !(C in q))
          throw new Error(
            'You can not get the returned data of a loader that has not been executed for this request.',
          )
        return q[C]
      },
      status: k => (typeof k == 'number' ? (j(), (w = k), k) : w),
      locale: k => (typeof k == 'string' && (S = k), S || ''),
      error: (k, C) => ((w = k), h.delete('Cache-Control'), new Ur(k, C)),
      redirect: (k, C) => {
        if ((j(), (w = k), C)) {
          const I = C.replace(/([^:])\/{2,}/g, '$1/')
          C !== I &&
            console.warn(`Redirect URL ${C} is invalid, fixing to ${I}`),
            h.set('Location', I)
        }
        return (
          h.delete('Cache-Control'),
          k > 301 && h.set('Cache-Control', 'no-store'),
          x(),
          new Kt()
        )
      },
      defer: k => (typeof k == 'function' ? k : () => k),
      fail: (k, C) => (
        j(), (w = k), h.delete('Cache-Control'), { failed: !0, ...C }
      ),
      text: (k, C) => (
        h.set('Content-Type', 'text/plain; charset=utf-8'), E(k, C)
      ),
      html: (k, C) => (
        h.set('Content-Type', 'text/html; charset=utf-8'), E(k, C)
      ),
      parseBody: async () => (f !== void 0 ? f : (f = Wl(A.request, p, i))),
      json: (k, C) => (
        h.set('Content-Type', 'application/json; charset=utf-8'),
        E(k, JSON.stringify(C))
      ),
      send: E,
      isDirty: () => $ !== null,
      getWritableStream: () => {
        if ($ === null) {
          if (e.mode === 'dev') {
            const k = p.get('@serverTiming')
            k &&
              h.set(
                'Server-Timing',
                k.map(C => `${C[0]};dur=${C[1]}`).join(','),
              )
          }
          $ = e.getWritableStream(w, h, m, l, A)
        }
        return $
      },
    }
  return Object.freeze(A)
}
function bn(e) {
  return e[Jr]
}
function ps(e) {
  return e[Zr]
}
function Fl(e) {
  return e[Yr]
}
function yn(e) {
  return e[Vr]
}
var ur = Number.MAX_SAFE_INTEGER,
  Wl = async (e, t, n) => {
    var s
    const r =
      ((s = e.headers.get('content-type')) == null
        ? void 0
        : s.split(/[;,]/, 1)[0].trim()) ?? ''
    if (
      r === 'application/x-www-form-urlencoded' ||
      r === 'multipart/form-data'
    ) {
      const o = await e.formData()
      return t.set(Xr, o), Ul(o)
    } else {
      if (r === 'application/json') return await e.json()
      if (r === 'application/qwik-json')
        return n._deserializeData(await e.text())
    }
  },
  Ul = e =>
    [...e.entries()].reduce(
      (n, [s, r]) => (
        s.split('.').reduce((o, i, l, a) => {
          if (i.endsWith('[]')) {
            const c = i.slice(0, -2)
            return (o[c] = o[c] || []), (o[c] = [...o[c], r])
          }
          return l < a.length - 1
            ? (o[i] = o[i] || (Number.isNaN(+a[l + 1]) ? {} : []))
            : (o[i] = r)
        }, n),
        n
      ),
      {},
    )
function Hl(e, t, n, s, r = !0, o = '/', i) {
  let l
  const a = new Promise(d => (l = d)),
    c = Ol(e, t, n, s, r, o, i, l)
  return { response: a, requestEv: c, completion: Ql(c, l) }
}
async function Ql(e, t) {
  try {
    await e.next()
  } catch (n) {
    if (n instanceof Kt) await e.getWritableStream().close()
    else if (n instanceof Ur) {
      if ((console.error(n), !e.headersSent)) {
        const s = dl(n.status, n),
          r = n.status
        e.html(r, s)
      }
    } else if (!(n instanceof ds)) {
      if (yn(e) !== 'dev')
        try {
          e.headersSent ||
            (e.headers.set('content-type', 'text/html; charset=utf-8'),
            e.cacheControl({ noCache: !0 }),
            e.status(500))
          const s = e.getWritableStream()
          if (!s.locked) {
            const r = s.getWriter()
            await r.write(hn.encode(Hr(500, 'Internal Server Error'))),
              await r.close()
          }
        } catch {
          console.error('Unable to render error page')
        }
      return n
    }
  } finally {
    e.isDirty() || t(null)
  }
}
function Bl(e, t) {
  if (e.endsWith(Ge)) {
    const n = e.length - eo + (t ? 1 : 0)
    ;(e = e.slice(0, n)), e === '' && (e = '/')
  }
  return e
}
var St = '@isQData',
  Ge = '/q-data.json',
  eo = Ge.length
function Kl(e, t) {
  const n = mr(e),
    s = dr(e),
    r = mr(t),
    o = dr(t)
  return to(e, n, s, t, r, o)
}
function to(e, t, n, s, r, o) {
  let i = null
  for (; t < n; ) {
    const l = e.charCodeAt(t++),
      a = s.charCodeAt(r++)
    if (l === 91) {
      const c = no(e, t),
        d = t + (c ? 3 : 0),
        p = Pn(e, d, n, 93),
        m = e.substring(d, p),
        h = Pn(e, p + 1, n, 47),
        b = e.substring(p + 1, h)
      t = p + 1
      const y = r - 1
      if (c) {
        const S = Vl(m, b, s, y, o, e, t + b.length + 1, n)
        if (S) return Object.assign(i || (i = {}), S)
      }
      const $ = Pn(s, y, o, 47, b)
      if ($ == -1) return null
      const f = s.substring(y, $)
      if (!c && !b && !f) return null
      ;(r = $), ((i || (i = {}))[m] = decodeURIComponent(f))
    } else if (l !== a && !(isNaN(a) && Jl(e, t))) return null
  }
  return pr(e, t) && pr(s, r) ? i || {} : null
}
function Jl(e, t) {
  return e.charCodeAt(t) === 91 && no(e, t + 1)
}
function dr(e) {
  const t = e.length
  return t > 1 && e.charCodeAt(t - 1) === 47 ? t - 1 : t
}
function pr(e, t) {
  const n = e.length
  return t >= n || (t == n - 1 && e.charCodeAt(t) === 47)
}
function mr(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0
}
function no(e, t) {
  return (
    e.charCodeAt(t) === 46 &&
    e.charCodeAt(t + 1) === 46 &&
    e.charCodeAt(t + 2) === 46
  )
}
function Pn(e, t, n, s, r = '') {
  for (; t < n && e.charCodeAt(t) !== s; ) t++
  const o = r.length
  for (let i = 0; i < o; i++)
    if (e.charCodeAt(t - o + i) !== r.charCodeAt(i)) return -1
  return t - o
}
function Vl(e, t, n, s, r, o, i, l) {
  n.charCodeAt(s) === 47 && s++
  let a = r
  const c = t + '/'
  let d = 5
  for (; a >= s && d--; ) {
    const p = to(o, i, l, n, a, r)
    if (p) {
      let m = n.substring(s, Math.min(a, r))
      return (
        m.endsWith(c) && (m = m.substring(0, m.length - c.length)),
        (p[e] = decodeURIComponent(m)),
        p
      )
    }
    a = Yl(n, s, c, a, s - 1) + c.length
  }
  return null
}
function Yl(e, t, n, s, r) {
  let o = e.lastIndexOf(n, s)
  return (
    o == s - n.length && (o = e.lastIndexOf(n, s - n.length - 1)), o > t ? o : r
  )
}
var Zl = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0],
          i = Kl(o, s)
        if (i) {
          const l = r[1],
            a = r[3],
            c = new Array(l.length),
            d = [],
            p = Gl(t, s)
          let m
          return (
            l.forEach((h, b) => {
              fr(h, d, y => (c[b] = y), n)
            }),
            fr(p, d, h => (m = h == null ? void 0 : h.default), n),
            d.length > 0 && (await Promise.all(d)),
            [o, i, c, m, a]
          )
        }
      }
    return null
  },
  fr = (e, t, n, s) => {
    if (typeof e == 'function') {
      const r = rr.get(e)
      if (r) n(r)
      else {
        const o = e()
        typeof o.then == 'function'
          ? t.push(
              o.then(i => {
                s !== !1 && rr.set(e, i), n(i)
              }),
            )
          : o && n(o)
      }
    }
  },
  Gl = (e, t) => {
    if (e) {
      t = t.endsWith('/') ? t : t + '/'
      const n = e.find(
        s => s[0] === t || t.startsWith(s[0] + (t.endsWith('/') ? '' : '/')),
      )
      if (n) return n[1]
    }
  }
async function Xl(e, t, n) {
  const { render: s, qwikCityPlan: r, manifest: o, checkOrigin: i } = t,
    l = e.url.pathname,
    a = Bl(l, r.trailingSlash),
    c = await ea(r, a, e.request.method, i ?? !0, s)
  return c ? Hl(e, c[0], c[1], o, r.trailingSlash, r.basePathname, n) : null
}
async function ea(e, t, n, s, r) {
  const { routes: o, serverPlugins: i, menus: l, cacheModules: a } = e,
    c = await Zl(o, l, a, t),
    d = kl(i, c, n, s, zl(r))
  return d.length > 0 ? [c, d] : null
}
const ta = !0,
  na = !1
/**
 * @license
 * @builder.io/qwik 1.2.18
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ const Ce = e => e && typeof e.nodeType == 'number',
  so = e => e.nodeType === 9,
  Ae = e => e.nodeType === 1,
  Fe = e => {
    const t = e.nodeType
    return t === 1 || t === 111
  },
  sa = e => {
    const t = e.nodeType
    return t === 1 || t === 111 || t === 3
  },
  $e = e => e.nodeType === 111,
  ms = e => e.nodeType === 3,
  qt = e => e.nodeType === 8,
  ht = (e, ...t) => hs(!0, e, ...t),
  ra = (e, ...t) => {
    throw hs(!1, e, ...t)
  },
  fs = (e, ...t) => hs(!0, e, ...t),
  $t = () => {},
  oa = e => e,
  hs = (e, t, ...n) => {
    const s = t instanceof Error ? t : new Error(t)
    return (
      console.error('%cQWIK ERROR', '', s.stack || s.message, ...oa(n)),
      e &&
        setTimeout(() => {
          throw s
        }, 0),
      s
    )
  },
  H = (e, ...t) => {
    const n = vn(e)
    return fs(n, ...t)
  },
  vn = e => `Code(${e})`,
  ia = () => ({
    isServer: ta,
    importSymbol(e, t, n) {
      var o
      {
        const i = hi(n),
          l = (o = globalThis.__qwik_reg_symbols) == null ? void 0 : o.get(i)
        if (l) return l
      }
      if (!t) throw H(31, n)
      if (!e) throw H(30, t, n)
      const s = la(e.ownerDocument, e, t).toString(),
        r = new URL(s)
      return (r.hash = ''), (r.search = ''), import(r.href).then(i => i[n])
    },
    raf: e =>
      new Promise(t => {
        requestAnimationFrame(() => {
          t(e())
        })
      }),
    nextTick: e =>
      new Promise(t => {
        setTimeout(() => {
          t(e())
        })
      }),
    chunkForSymbol: (e, t) => [e, t ?? '_'],
  }),
  la = (e, t, n) => {
    const s = e.baseURI,
      r = new URL(t.getAttribute('q:base') ?? s, s)
    return new URL(n, r)
  }
let $s = ia()
const ro = e => ($s = e),
  wn = () => $s,
  we = () => $s.isServer
const jt = e => {
    const t = Object.getPrototypeOf(e)
    return t === Object.prototype || t === null
  },
  ge = e => e && typeof e == 'object',
  O = e => Array.isArray(e),
  We = e => typeof e == 'string',
  ne = e => typeof e == 'function',
  J = e => e && typeof e.then == 'function',
  _n = (e, t, n) => {
    try {
      const s = e()
      return J(s) ? s.then(t, n) : t(s)
    } catch (s) {
      return n(s)
    }
  },
  N = (e, t) => (J(e) ? e.then(t) : t(e)),
  gs = e => (e.some(J) ? Promise.all(e) : e),
  Yt = e => (e.length > 0 ? Promise.all(e) : e),
  oo = e => e != null,
  aa = e =>
    new Promise(t => {
      setTimeout(t, e)
    }),
  me = [],
  Y = {},
  Et = e =>
    typeof document < 'u' ? document : e.nodeType === 9 ? e : e.ownerDocument,
  se = 'q:slot',
  xn = 'q:style',
  Jn = Symbol('proxy target'),
  Be = Symbol('proxy flags'),
  fe = Symbol('proxy manager'),
  v = Symbol('IMMUTABLE'),
  kn = '_qc_',
  te = (e, t, n) => e.setAttribute(t, n),
  ae = (e, t) => e.getAttribute(t),
  bs = e => e.replace(/([A-Z])/g, '-$1').toLowerCase(),
  ca = e => e.replace(/-./g, t => t[1].toUpperCase()),
  ua = /^(on|window:|document:)/,
  Vn = 'preventdefault:',
  Zt = e => e.endsWith('$') && ua.test(e),
  ys = e => {
    if (e.length === 0) return me
    if (e.length === 1) {
      const n = e[0]
      return [[n[0], [n[1]]]]
    }
    const t = []
    for (let n = 0; n < e.length; n++) {
      const s = e[n][0]
      t.includes(s) || t.push(s)
    }
    return t.map(n => [n, e.filter(s => s[0] === n).map(s => s[1])])
  },
  Gt = (e, t, n, s) => {
    if ((t.endsWith('$'), (t = Yn(t.slice(0, -1))), n))
      if (O(n)) {
        const r = n
          .flat(1 / 0)
          .filter(o => o != null)
          .map(o => [t, $r(o, s)])
        e.push(...r)
      } else e.push([t, $r(n, s)])
    return t
  },
  hr = ['on', 'window:on', 'document:on'],
  da = ['on', 'on-window', 'on-document'],
  Yn = e => {
    let t = 'on'
    for (let n = 0; n < hr.length; n++) {
      const s = hr[n]
      if (e.startsWith(s)) {
        ;(t = da[n]), (e = e.slice(s.length))
        break
      }
    }
    return t + ':' + (e = e.startsWith('-') ? bs(e.slice(1)) : e.toLowerCase())
  },
  $r = (e, t) => (e.$setContainer$(t), e),
  pa = (e, t) => {
    const n = e.$element$.attributes,
      s = []
    for (let r = 0; r < n.length; r++) {
      const { name: o, value: i } = n.item(r)
      if (
        o.startsWith('on:') ||
        o.startsWith('on-window:') ||
        o.startsWith('on-document:')
      ) {
        const l = i.split(`
`)
        for (const a of l) {
          const c = zn(a, t)
          c.$capture$ && li(c, e), s.push([o, c])
        }
      }
    }
    return s
  },
  gr = Symbol('ContainerState'),
  st = e => {
    let t = e[gr]
    return t || (e[gr] = t = io(e, ae(e, 'q:base') ?? '/')), t
  },
  io = (e, t) => {
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
    }
    return (n.$subsManager$ = sd(n)), n
  },
  vs = (e, t) => {
    if (ne(e)) return e(t)
    if (ge(e) && 'value' in e) return (e.value = t)
    throw H(32, e)
  },
  ma = e => Ae(e) && e.hasAttribute('q:container'),
  je = e => e.toString(36),
  de = e => parseInt(e, 36),
  lo = e => {
    const t = e.indexOf(':')
    return e && ca(e.slice(t + 1))
  },
  fa = (e, t) => {
    co(ao(e, void 0), t)
  },
  br = (e, t) => {
    co(ao(e, 'document'), t)
  },
  ao = (e, t) => {
    const n = t !== void 0 ? t + ':' : ''
    return Array.isArray(e) ? e.map(s => `${n}on-${s}`) : `${n}on-${e}`
  },
  co = (e, t) => {
    if (t) {
      const n = Io(),
        s = ie(n.$hostElement$, n.$renderCtx$.$static$.$containerState$)
      typeof e == 'string'
        ? s.li.push([Yn(e), t])
        : s.li.push(...e.map(r => [Yn(r), t])),
        (s.$flags$ |= Ee)
    }
  },
  ha = (e, t, n, s) => {
    typeof CustomEvent == 'function' &&
      e &&
      e.dispatchEvent(
        new CustomEvent(t, { detail: n, bubbles: s, composed: s }),
      )
  },
  ye = (e, t, n) => new Zn(e, t, n),
  $a = e => {
    const t = e.$funcStr$
    let n = ''
    for (let s = 0; s < e.$args$.length; s++) n += `p${s},`
    return `(${n})=>(${t})`
  }
var uo
const ga = (e, t, n, s) => {
    const r = t.$subsManager$.$createManager$(s)
    return new bt(e, r, n)
  },
  gt = Symbol('proxy manager'),
  po = Symbol('unassigned signal')
class Ct {}
class bt extends Ct {
  constructor(t, n, s) {
    super(),
      (this[uo] = 0),
      (this.untrackedValue = t),
      (this[fe] = n),
      (this[gt] = s)
  }
  valueOf() {}
  toString() {
    return `[Signal ${String(this.value)}]`
  }
  toJSON() {
    return { value: this.value }
  }
  get value() {
    var n
    if (2 & this[gt]) throw po
    const t = (n = _e()) == null ? void 0 : n.$subscriber$
    return t && this[fe].$addSub$(t), this.untrackedValue
  }
  set value(t) {
    const n = this[fe]
    n &&
      this.untrackedValue !== t &&
      ((this.untrackedValue = t), n.$notifySubs$())
  }
}
uo = gt
class Zn extends Ct {
  constructor(t, n, s) {
    super(), (this.$func$ = t), (this.$args$ = n), (this.$funcStr$ = s)
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$)
  }
}
class Gn extends Ct {
  constructor(t, n) {
    super(), (this.ref = t), (this.prop = n)
  }
  get [fe]() {
    return Z(this.ref)
  }
  get value() {
    return this.ref[this.prop]
  }
  set value(t) {
    this.ref[this.prop] = t
  }
}
const re = e => e instanceof Ct,
  Le = (e, t) => {
    var r, o
    if (!ge(e)) return e[t]
    if (e instanceof Ct) return e
    const n = He(e)
    if (n) {
      const i = n['$$' + t]
      if (i) return i
      if (((r = n[v]) == null ? void 0 : r[t]) !== !0) return new Gn(e, t)
    }
    const s = (o = e[v]) == null ? void 0 : o[t]
    return re(s) ? s : v
  },
  D = (e, t) => {
    const n = Le(e, t)
    return n === v ? e[t] : n
  },
  ws = (e, t, n = 0) =>
    t.$proxyMap$.get(e) || (n !== 0 && qn(e, n), At(e, t, void 0)),
  At = (e, t, n) => {
    Nt(e), t.$proxyMap$.has(e)
    const s = t.$subsManager$.$createManager$(n),
      r = new Proxy(e, new mo(t, s))
    return t.$proxyMap$.set(e, r), r
  },
  Sn = () => {
    const e = {}
    return qn(e, 2), e
  },
  qn = (e, t) => {
    Object.defineProperty(e, Be, { value: t, enumerable: !1 })
  }
class mo {
  constructor(t, n) {
    ;(this.$containerState$ = t), (this.$manager$ = n)
  }
  deleteProperty(t, n) {
    if (2 & t[Be]) throw H(17)
    return (
      typeof n == 'string' &&
      delete t[n] &&
      (this.$manager$.$notifySubs$(O(t) ? void 0 : n), !0)
    )
  }
  get(t, n) {
    var c
    if (typeof n == 'symbol')
      return n === Jn ? t : n === fe ? this.$manager$ : t[n]
    const s = t[Be] ?? 0,
      r = _e(),
      o = (1 & s) != 0,
      i = t['$$' + n]
    let l, a
    if (
      (r && (l = r.$subscriber$),
      !(2 & s) ||
        (n in t && !ba((c = t[v]) == null ? void 0 : c[n])) ||
        (l = null),
      i ? ((a = i.value), (l = null)) : (a = t[n]),
      l)
    ) {
      const d = O(t)
      this.$manager$.$addSub$(l, d ? void 0 : n)
    }
    return o ? ya(a, this.$containerState$) : a
  }
  set(t, n, s) {
    if (typeof n == 'symbol') return (t[n] = s), !0
    const r = t[Be] ?? 0
    if (2 & r) throw H(17)
    const o = 1 & r ? Nt(s) : s
    if (O(t)) return (t[n] = o), this.$manager$.$notifySubs$(), !0
    const i = t[n]
    return (t[n] = o), i !== o && this.$manager$.$notifySubs$(n), !0
  }
  has(t, n) {
    if (n === Jn) return !0
    const s = Object.prototype.hasOwnProperty
    return !!s.call(t, n) || !(typeof n != 'string' || !s.call(t, '$$' + n))
  }
  ownKeys(t) {
    if (!(2 & (t[Be] ?? 0))) {
      let s = null
      const r = _e()
      r && (s = r.$subscriber$), s && this.$manager$.$addSub$(s)
    }
    return O(t)
      ? Reflect.ownKeys(t)
      : Reflect.ownKeys(t).map(s =>
          typeof s == 'string' && s.startsWith('$$') ? s.slice(2) : s,
        )
  }
  getOwnPropertyDescriptor(t, n) {
    return O(t) || typeof n == 'symbol'
      ? Object.getOwnPropertyDescriptor(t, n)
      : { enumerable: !0, configurable: !0 }
  }
}
const ba = e => e === v || re(e),
  ya = (e, t) => {
    if (ge(e)) {
      if (Object.isFrozen(e)) return e
      const n = Nt(e)
      if (n !== e || di(n)) return e
      if (jt(n) || O(n)) return t.$proxyMap$.get(n) || ws(n, t, 1)
    }
    return e
  },
  _s = Symbol('skip render'),
  fo = () => null,
  ho = () => null,
  Ue = () => {
    const e = Io(),
      t = ie(e.$hostElement$, e.$renderCtx$.$static$.$containerState$),
      n = t.$seq$ || (t.$seq$ = []),
      s = e.$i$++
    return { val: n[s], set: r => (n[s] = r), i: s, iCtx: e, elCtx: t }
  },
  Se = e => Object.freeze({ id: bs(e) }),
  qe = (e, t) => {
    const { val: n, set: s, elCtx: r } = Ue()
    if (n !== void 0) return
    ;(r.$contexts$ || (r.$contexts$ = new Map())).set(e.id, t), s(!0)
  },
  Tt = (e, t) => {
    const { val: n, set: s, iCtx: r, elCtx: o } = Ue()
    if (n !== void 0) return n
    const i = $o(e, o, r.$renderCtx$.$static$.$containerState$)
    if (typeof t == 'function') return s(G(void 0, t, i))
    if (i !== void 0) return s(i)
    if (t !== void 0) return s(t)
    throw H(13, e.id)
  },
  va = (e, t) => {
    var r
    let n = e,
      s = 1
    for (; n && !((r = n.hasAttribute) != null && r.call(n, 'q:container')); ) {
      for (; (n = n.previousSibling); )
        if (qt(n)) {
          const o = n.__virtual
          if (o) {
            const i = o[kn]
            if (n === o.open) return i ?? ie(o, t)
            if (i != null && i.$parentCtx$) return i.$parentCtx$
            n = o
            continue
          }
          if (n.data === '/qv') s++
          else if (n.data.startsWith('qv ') && (s--, s === 0))
            return ie(Rt(n), t)
        }
      ;(n = e.parentElement), (e = n)
    }
    return null
  },
  wa = (e, t) => (
    e.$parentCtx$ === void 0 && (e.$parentCtx$ = va(e.$element$, t)),
    e.$parentCtx$
  ),
  $o = (e, t, n) => {
    var o
    const s = e.id
    if (!t) return
    let r = t
    for (; r; ) {
      const i = (o = r.$contexts$) == null ? void 0 : o.get(s)
      if (i) return i
      r = wa(r, n)
    }
  },
  _a = Se('qk-error'),
  xs = (e, t, n) => {
    const s = oe(t)
    if (we()) throw e
    {
      const r = $o(_a, s, n.$static$.$containerState$)
      if (r === void 0) throw e
      r.error = e
    }
  },
  xa = new Set([
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
  ka = e => xa.has(e),
  Xt = (e, t) => {
    ;(t.$flags$ &= ~et), (t.$flags$ |= As), (t.$slots$ = []), (t.li.length = 0)
    const n = t.$element$,
      s = t.$componentQrl$,
      r = t.$props$,
      o = le(e.$static$.$locale$, n, void 0, 'qRender'),
      i = (o.$waitOn$ = []),
      l = zt(e)
    ;(l.$cmpCtx$ = t),
      (l.$slotCtx$ = null),
      (o.$subscriber$ = [0, n]),
      (o.$renderCtx$ = e),
      s.$setContainer$(e.$static$.$containerState$.$containerEl$)
    const a = s.getFn(o)
    return _n(
      () => a(r),
      c => N(Yt(i), () => (t.$flags$ & et ? Xt(e, t) : { node: c, rCtx: l })),
      c =>
        c === po
          ? N(Yt(i), () => Xt(e, t))
          : (xs(c, n, e), { node: _s, rCtx: l }),
    )
  },
  go = (e, t) => ({
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
  zt = e => ({
    $static$: e.$static$,
    $cmpCtx$: e.$cmpCtx$,
    $slotCtx$: e.$slotCtx$,
  }),
  ks = (e, t) =>
    t && t.$scopeIds$ ? t.$scopeIds$.join(' ') + ' ' + en(e) : en(e),
  en = e => {
    if (!e) return ''
    if (We(e)) return e.trim()
    const t = []
    if (O(e))
      for (const n of e) {
        const s = en(n)
        s && t.push(s)
      }
    else for (const [n, s] of Object.entries(e)) s && t.push(n.trim())
    return t.join(' ')
  },
  jn = e => {
    if (e == null) return ''
    if (typeof e == 'object') {
      if (O(e)) throw H(0, e, 'style')
      {
        const t = []
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const s = e[n]
            s != null &&
              (n.startsWith('--')
                ? t.push(n + ':' + s)
                : t.push(bs(n) + ':' + Sa(n, s)))
          }
        return t.join(';')
      }
    }
    return String(e)
  },
  Sa = (e, t) => (typeof t != 'number' || t === 0 || ka(e) ? t : t + 'px'),
  yt = e => je(e.$static$.$containerState$.$elementIndex$++),
  bo = (e, t) => {
    const n = yt(e)
    t.$id$ = n
  },
  Xe = e =>
    re(e) ? Xe(e.value) : e == null || typeof e == 'boolean' ? '' : String(e)
function yo(e) {
  return e.startsWith('aria-')
}
const vo = (e, t) => !!t.key && (!rt(e) || (!ne(e.type) && e.key != t.key)),
  V = 'dangerouslySetInnerHTML',
  Ss = (e, t, n) => {
    const s = !(t.$flags$ & As),
      r = t.$element$,
      o = e.$static$.$containerState$
    return (
      o.$hostsStaging$.delete(t),
      o.$subsManager$.$clearSub$(r),
      N(Xt(e, t), i => {
        const l = e.$static$,
          a = i.rCtx,
          c = le(e.$static$.$locale$, r)
        if (
          (l.$hostElements$.add(r),
          (c.$subscriber$ = [0, r]),
          (c.$renderCtx$ = a),
          s && t.$appendStyles$)
        )
          for (const p of t.$appendStyles$) Qc(l, p)
        const d = vt(i.node, c)
        return N(d, p => {
          const m = qa(r, p),
            h = qs(t)
          return N(ln(a, h, m, n), () => {
            t.$vdom$ = m
          })
        })
      })
    )
  },
  qs = e => (e.$vdom$ || (e.$vdom$ = an(e.$element$)), e.$vdom$)
class ve {
  constructor(t, n, s, r, o, i) {
    ;(this.$type$ = t),
      (this.$props$ = n),
      (this.$immutableProps$ = s),
      (this.$children$ = r),
      (this.$flags$ = o),
      (this.$key$ = i),
      (this.$elm$ = null),
      (this.$text$ = ''),
      (this.$signal$ = null),
      (this.$id$ = t + (i ? ':' + i : ''))
  }
}
const wo = (e, t) => {
    const {
      key: n,
      type: s,
      props: r,
      children: o,
      flags: i,
      immutableProps: l,
    } = e
    let a = ''
    if (We(s)) a = s
    else {
      if (s !== De) {
        if (ne(s)) {
          const d = G(t, s, r, n, i, e.dev)
          return vo(d, e) ? wo(_(De, { children: d }, 0, n), t) : vt(d, t)
        }
        throw H(25, s)
      }
      a = tt
    }
    let c = me
    return o != null
      ? N(
          vt(o, t),
          d => (d !== void 0 && (c = O(d) ? d : [d]), new ve(a, r, l, c, i, n)),
        )
      : new ve(a, r, l, c, i, n)
  },
  qa = (e, t) => {
    const n = t === void 0 ? me : O(t) ? t : [t],
      s = new ve(':virtual', {}, null, n, 0, null)
    return (s.$elm$ = e), s
  },
  vt = (e, t) => {
    if (e != null && typeof e != 'boolean') {
      if (_o(e)) {
        const n = new ve('#text', Y, null, me, 0, null)
        return (n.$text$ = String(e)), n
      }
      if (rt(e)) return wo(e, t)
      if (re(e)) {
        const n = new ve('#text', Y, null, me, 0, null)
        return (n.$signal$ = e), n
      }
      if (O(e)) {
        const n = gs(e.flatMap(s => vt(s, t)))
        return N(n, s => s.flat(100).filter(oo))
      }
      return J(e)
        ? e.then(n => vt(n, t))
        : e === _s
          ? new ve(sn, Y, null, me, 0, null)
          : void $t()
    }
  },
  _o = e => We(e) || typeof e == 'number',
  xo = e => {
    ae(e, 'q:container') === 'paused' && (Ca(e), Ma(e))
  },
  ja = e => {
    const t = Et(e),
      n = So(e === t.documentElement ? t.body : e, 'type')
    if (n) return JSON.parse(Ta(n.firstChild.data) || '{}')
  },
  Ea = (e, t) => {
    const n = JSON.parse(e)
    if (typeof n != 'object') return null
    const { _objs: s, _entry: r } = n
    if (s === void 0 || r === void 0) return null
    let o = {},
      i = {}
    if (Ce(t) && Fe(t)) {
      const c = Ts(t)
      c && ((i = st(c)), (o = c.ownerDocument))
    }
    const l = ci(i, o)
    for (let c = 0; c < s.length; c++) {
      const d = s[c]
      We(d) && (s[c] = d === In ? void 0 : l.prepare(d))
    }
    const a = c => s[de(c)]
    for (const c of s) ko(c, a, l)
    return a(r)
  },
  Ca = e => {
    if (!ma(e)) return void $t()
    const t = e._qwikjson_ ?? ja(e)
    if (((e._qwikjson_ = null), !t)) return void $t()
    const n = Et(e),
      s = e === n.documentElement ? n.body : e,
      r = za(s),
      o = st(e),
      i = new Map(),
      l = new Map()
    let a = null,
      c = 0
    const d = n.createTreeWalker(e, 128)
    for (; (a = d.nextNode()); ) {
      const f = a.data
      if (c === 0) {
        if (f.startsWith('qv ')) {
          const S = Ra(f)
          S >= 0 && i.set(S, a)
        } else if (f.startsWith('t=')) {
          const S = f.slice(2),
            w = de(S),
            g = Ia(a)
          i.set(w, g), l.set(w, g.data)
        }
      }
      f === 'cq' ? c++ : f === '/cq' && c--
    }
    const p = e.getElementsByClassName('qc📦').length !== 0
    e.querySelectorAll('[q\\:id]').forEach(f => {
      if (p && f.closest('[q\\:container]') !== e) return
      const S = ae(f, 'q:id'),
        w = de(S)
      i.set(w, f)
    })
    const m = ci(o, n),
      h = new Map(),
      b = new Set(),
      y = f => (
        typeof f == 'string' && f.length > 0, h.has(f) ? h.get(f) : $(f)
      ),
      $ = f => {
        if (f.startsWith('#')) {
          const E = f.slice(1),
            x = de(E)
          i.has(x)
          const q = i.get(x)
          if (qt(q)) {
            if (!q.isConnected) return void h.set(f, void 0)
            const A = Rt(q)
            return h.set(f, A), ie(A, o), A
          }
          return Ae(q) ? (h.set(f, q), ie(q, o), q) : (h.set(f, q), q)
        }
        if (f.startsWith('@')) {
          const E = f.slice(1),
            x = de(E)
          return r[x]
        }
        if (f.startsWith('*')) {
          const E = f.slice(1),
            x = de(E)
          i.has(x)
          const q = l.get(x)
          return h.set(f, q), q
        }
        const S = de(f),
          w = t.objs
        w.length > S
        let g = w[S]
        We(g) && (g = g === In ? void 0 : m.prepare(g))
        let j = g
        for (let E = f.length - 1; E >= 0; E--) {
          const x = Vu[f[E]]
          if (!x) break
          j = x(j, o)
        }
        return (
          h.set(f, j),
          _o(g) ||
            b.has(S) ||
            (b.add(S), Aa(g, S, t.subs, y, o, m), ko(g, y, m)),
          j
        )
      }
    ;(o.$elementIndex$ = 1e5),
      (o.$pauseCtx$ = { getObject: y, meta: t.ctx, refs: t.refs }),
      te(e, 'q:container', 'resumed'),
      ha(e, 'qresume', void 0, !0)
  },
  Aa = (e, t, n, s, r, o) => {
    const i = n[t]
    if (i) {
      const l = []
      let a = 0
      for (const c of i)
        if (c.startsWith('_')) a = parseInt(c.slice(1), 10)
        else {
          const d = nd(c, s)
          d && l.push(d)
        }
      if ((a > 0 && qn(e, a), !o.subs(e, l))) {
        const c = r.$proxyMap$.get(e)
        c ? Z(c).$addSubs$(l) : At(e, r, l)
      }
    }
  },
  ko = (e, t, n) => {
    if (!n.fill(e, t) && e && typeof e == 'object') {
      if (O(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s])
      else if (jt(e)) for (const s in e) e[s] = t(e[s])
    }
  },
  Ta = e => e.replace(/\\x3C(\/?script)/g, '<$1'),
  za = e => {
    const t = So(e, 'q:func')
    return (t == null ? void 0 : t.qFuncs) ?? me
  },
  So = (e, t) => {
    let n = e.lastElementChild
    for (; n; ) {
      if (n.tagName === 'SCRIPT' && ae(n, t) === 'qwik/json') return n
      n = n.previousElementSibling
    }
  },
  Ia = e => {
    const t = e.nextSibling
    if (ms(t)) return t
    {
      const n = e.ownerDocument.createTextNode('')
      return e.parentElement.insertBefore(n, e), n
    }
  },
  Ma = e => {
    e.qwik = { pause: () => au(e), state: st(e) }
  },
  Ra = e => {
    const t = e.indexOf('q:id=')
    return t > 0 ? de(e.slice(t + 5)) : -1
  },
  En = () => {
    const e = rc()
    let t = e.$qrl$
    if (t) t.$captureRef$
    else {
      const n = e.$element$,
        s = Ts(n)
      ;(t = zn(decodeURIComponent(String(e.$url$)), s)), xo(s)
      const r = ie(n, st(s))
      li(t, r)
    }
    return t.$captureRef$
  },
  Na = (e, t) => {
    try {
      const n = t[0]
      switch (n) {
        case 1:
        case 2: {
          let s, r
          n === 1 ? ((s = t[1]), (r = t[3])) : ((s = t[3]), (r = t[1]))
          const o = oe(s)
          if (o == null) return
          const i = t[4],
            l = s.namespaceURI === Mt
          e.$containerState$.$subsManager$.$clearSignal$(t)
          let a = xe(t[2], t.slice(0, -1))
          i === 'class' ? (a = ks(a, oe(r))) : i === 'style' && (a = jn(a))
          const c = qs(o)
          return i in c.$props$ && c.$props$[i] === a
            ? void 0
            : ((c.$props$[i] = a), Ns(e, s, i, a, l))
        }
        case 3:
        case 4: {
          const s = t[3]
          if (!e.$visited$.includes(s)) {
            e.$containerState$.$subsManager$.$clearSignal$(t)
            const r = xe(t[2], t.slice(0, -1))
            return ke(e, s, 'data', Xe(r))
          }
        }
      }
    } catch {}
  },
  La = (e, t) => {
    if (e[0] === 0) {
      const n = e[1]
      Cs(n) ? js(n, t) : Pa(n, t)
    } else Da(e, t)
  },
  Pa = (e, t) => {
    const n = we()
    n || xo(t.$containerEl$)
    const s = ie(e, t)
    if ((s.$componentQrl$, !(s.$flags$ & et)))
      if (((s.$flags$ |= et), t.$hostsRendering$ !== void 0))
        t.$hostsStaging$.add(s)
      else {
        if (n) return void $t()
        t.$hostsNext$.add(s), Es(t)
      }
  },
  Da = (e, t) => {
    const n = t.$hostsRendering$ !== void 0
    t.$opsNext$.add(e), n || Es(t)
  },
  js = (e, t) => {
    e.$flags$ & Pe ||
      ((e.$flags$ |= Pe),
      t.$hostsRendering$ !== void 0
        ? t.$taskStaging$.add(e)
        : (t.$taskNext$.add(e), Es(t)))
  },
  Es = e => (
    e.$renderPromise$ === void 0 &&
      (e.$renderPromise$ = wn().nextTick(() => qo(e))),
    e.$renderPromise$
  ),
  Oa = () => {
    const [e] = En()
    js(e, st(Ts(e.$el$)))
  },
  qo = async e => {
    const t = e.$containerEl$,
      n = Et(t)
    try {
      const s = go(n, e),
        r = s.$static$,
        o = (e.$hostsRendering$ = new Set(e.$hostsNext$))
      e.$hostsNext$.clear(),
        await Wa(e, s),
        e.$hostsStaging$.forEach(a => {
          o.add(a)
        }),
        e.$hostsStaging$.clear()
      const i = Array.from(e.$opsNext$)
      e.$opsNext$.clear()
      const l = Array.from(o)
      Ha(l),
        !e.$styleMoved$ &&
          l.length > 0 &&
          ((e.$styleMoved$ = !0),
          (t === n.documentElement ? n.body : t)
            .querySelectorAll('style[q\\:style]')
            .forEach(a => {
              e.$styleIds$.add(ae(a, xn)), Go(r, n.head, a)
            }))
      for (const a of l) {
        const c = a.$element$
        if (!r.$hostElements$.has(c) && a.$componentQrl$) {
          c.isConnected, r.$roots$.push(a)
          try {
            await Ss(s, a, Fa(c.parentElement))
          } catch (d) {
            ht(d)
          }
        }
      }
      return (
        i.forEach(a => {
          Na(r, a)
        }),
        r.$operations$.push(...r.$postOperations$),
        r.$operations$.length === 0
          ? (Er(r), void (await yr(e, s)))
          : (await Pc(r), Er(r), yr(e, s))
      )
    } catch (s) {
      ht(s)
    }
  },
  Fa = e => {
    let t = 0
    return (
      e &&
        (e.namespaceURI === Mt && (t |= ee), e.tagName === 'HEAD' && (t |= rn)),
      t
    )
  },
  yr = async (e, t) => {
    const n = t.$static$.$hostElements$
    await Ua(e, t, (s, r) => (s.$flags$ & jo) != 0 && (!r || n.has(s.$el$))),
      e.$hostsStaging$.forEach(s => {
        e.$hostsNext$.add(s)
      }),
      e.$hostsStaging$.clear(),
      (e.$hostsRendering$ = void 0),
      (e.$renderPromise$ = void 0),
      e.$hostsNext$.size + e.$taskNext$.size + e.$opsNext$.size > 0 &&
        (e.$renderPromise$ = qo(e))
  },
  Wa = async (e, t) => {
    const n = e.$containerEl$,
      s = [],
      r = [],
      o = l => (l.$flags$ & Eo) != 0,
      i = l => (l.$flags$ & Co) != 0
    e.$taskNext$.forEach(l => {
      o(l) &&
        (r.push(N(l.$qrl$.$resolveLazy$(n), () => l)), e.$taskNext$.delete(l)),
        i(l) &&
          (s.push(N(l.$qrl$.$resolveLazy$(n), () => l)), e.$taskNext$.delete(l))
    })
    do
      if (
        (e.$taskStaging$.forEach(l => {
          o(l)
            ? r.push(N(l.$qrl$.$resolveLazy$(n), () => l))
            : i(l)
              ? s.push(N(l.$qrl$.$resolveLazy$(n), () => l))
              : e.$taskNext$.add(l)
        }),
        e.$taskStaging$.clear(),
        r.length > 0)
      ) {
        const l = await Promise.all(r)
        Xn(l), await Promise.all(l.map(a => es(a, e, t))), (r.length = 0)
      }
    while (e.$taskStaging$.size > 0)
    if (s.length > 0) {
      const l = await Promise.all(s)
      Xn(l), l.forEach(a => es(a, e, t))
    }
  },
  Ua = async (e, t, n) => {
    const s = [],
      r = e.$containerEl$
    e.$taskNext$.forEach(o => {
      n(o, !1) &&
        (o.$el$.isConnected && s.push(N(o.$qrl$.$resolveLazy$(r), () => o)),
        e.$taskNext$.delete(o))
    })
    do
      if (
        (e.$taskStaging$.forEach(o => {
          o.$el$.isConnected &&
            (n(o, !0)
              ? s.push(N(o.$qrl$.$resolveLazy$(r), () => o))
              : e.$taskNext$.add(o))
        }),
        e.$taskStaging$.clear(),
        s.length > 0)
      ) {
        const o = await Promise.all(s)
        Xn(o)
        for (const i of o) es(i, e, t)
        s.length = 0
      }
    while (e.$taskStaging$.size > 0)
  },
  Ha = e => {
    e.sort((t, n) =>
      2 & t.$element$.compareDocumentPosition(un(n.$element$)) ? 1 : -1,
    )
  },
  Xn = e => {
    e.sort((t, n) =>
      t.$el$ === n.$el$
        ? t.$index$ < n.$index$
          ? -1
          : 1
        : 2 & t.$el$.compareDocumentPosition(un(n.$el$))
          ? 1
          : -1,
    )
  },
  jo = 1,
  Eo = 2,
  Co = 4,
  Pe = 16,
  Qa = (e, t) => {
    const { val: n, set: s, iCtx: r, i: o, elCtx: i } = Ue()
    if (n) return
    const l = r.$renderCtx$.$static$.$containerState$,
      a = new Cn(Pe | Eo, o, i.$element$, e, void 0)
    s(!0),
      e.$resolveLazy$(l.$containerEl$),
      i.$tasks$ || (i.$tasks$ = []),
      i.$tasks$.push(a),
      oc(r, () => To(a, l, r.$renderCtx$)),
      we() && ts(a, t == null ? void 0 : t.eagerness)
  },
  Ba = (e, t) => {
    const { val: n, set: s, i: r, iCtx: o, elCtx: i } = Ue(),
      l = (t == null ? void 0 : t.strategy) ?? 'intersection-observer'
    if (n) return void (we() && ts(n, l))
    const a = new Cn(jo, r, i.$element$, e, void 0),
      c = o.$renderCtx$.$static$.$containerState$
    i.$tasks$ || (i.$tasks$ = []),
      i.$tasks$.push(a),
      s(a),
      ts(a, l),
      we() || (e.$resolveLazy$(c.$containerEl$), js(a, c))
  },
  Ao = e => (e.$flags$ & Co) != 0,
  Ka = e => (8 & e.$flags$) != 0,
  es = async (e, t, n) => (
    e.$flags$ & Pe, Ao(e) ? Ja(e, t, n) : Ka(e) ? Va(e, t, n) : To(e, t, n)
  ),
  Ja = (e, t, n, s) => {
    ;(e.$flags$ &= ~Pe), wt(e)
    const r = le(n.$static$.$locale$, e.$el$, void 0, 'TaskEvent'),
      { $subsManager$: o } = t
    r.$renderCtx$ = n
    const i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e)
      }),
      l = [],
      a = e.$state$,
      c = Nt(a),
      d = {
        track: (f, S) => {
          if (ne(f)) {
            const g = le()
            return (g.$renderCtx$ = n), (g.$subscriber$ = [0, e]), G(g, f)
          }
          const w = Z(f)
          return (
            w ? w.$addSub$([0, e], S) : fs(vn(26), f),
            S ? f[S] : re(f) ? f.value : f
          )
        },
        cleanup(f) {
          l.push(f)
        },
        cache(f) {
          let S = 0
          ;(S = f === 'immutable' ? 1 / 0 : f), (a._cache = S)
        },
        previous: c._resolved,
      }
    let p,
      m,
      h = !1
    const b = (f, S) =>
      !h &&
      ((h = !0),
      f
        ? ((h = !0),
          (a.loading = !1),
          (a._state = 'resolved'),
          (a._resolved = S),
          (a._error = void 0),
          p(S))
        : ((h = !0),
          (a.loading = !1),
          (a._state = 'rejected'),
          (a._error = S),
          m(S)),
      !0)
    G(r, () => {
      ;(a._state = 'pending'),
        (a.loading = !we()),
        (a.value = new Promise((f, S) => {
          ;(p = f), (m = S)
        }))
    }),
      (e.$destroy$ = Rn(() => {
        ;(h = !0), l.forEach(f => f())
      }))
    const y = _n(
        () => N(s, () => i(d)),
        f => {
          b(!0, f)
        },
        f => {
          b(!1, f)
        },
      ),
      $ = c._timeout
    return $ > 0
      ? Promise.race([
          y,
          aa($).then(() => {
            b(!1, new Error('timeout')) && wt(e)
          }),
        ])
      : y
  },
  To = (e, t, n) => {
    ;(e.$flags$ &= ~Pe), wt(e)
    const s = e.$el$,
      r = le(n.$static$.$locale$, s, void 0, 'TaskEvent')
    r.$renderCtx$ = n
    const { $subsManager$: o } = t,
      i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e)
      }),
      l = []
    e.$destroy$ = Rn(() => {
      l.forEach(c => c())
    })
    const a = {
      track: (c, d) => {
        if (ne(c)) {
          const m = le()
          return (m.$subscriber$ = [0, e]), G(m, c)
        }
        const p = Z(c)
        return p ? p.$addSub$([0, e], d) : fs(vn(26), c), d ? c[d] : c
      },
      cleanup(c) {
        l.push(c)
      },
    }
    return _n(
      () => i(a),
      c => {
        ne(c) && l.push(c)
      },
      c => {
        xs(c, s, n)
      },
    )
  },
  Va = (e, t, n) => {
    e.$state$, (e.$flags$ &= ~Pe), wt(e)
    const s = e.$el$,
      r = le(n.$static$.$locale$, s, void 0, 'ComputedEvent')
    ;(r.$subscriber$ = [0, e]), (r.$renderCtx$ = n)
    const { $subsManager$: o } = t,
      i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e)
      })
    return _n(
      i,
      l =>
        tn(() => {
          const a = e.$state$
          ;(a[gt] &= -3), (a.untrackedValue = l), a[fe].$notifySubs$()
        }),
      l => {
        xs(l, s, n)
      },
    )
  },
  wt = e => {
    const t = e.$destroy$
    if (t) {
      e.$destroy$ = void 0
      try {
        t()
      } catch (n) {
        ht(n)
      }
    }
  },
  zo = e => {
    32 & e.$flags$ ? ((e.$flags$ &= -33), (0, e.$qrl$)()) : wt(e)
  },
  ts = (e, t) => {
    t === 'visible' || t === 'intersection-observer'
      ? fa('qvisible', Dn(e))
      : t === 'load' || t === 'document-ready'
        ? br('qinit', Dn(e))
        : (t !== 'idle' && t !== 'document-idle') || br('qidle', Dn(e))
  },
  Dn = e => {
    const t = e.$qrl$
    return Nn(t.$chunk$, '_hW', Oa, null, null, [e], t.$symbol$)
  },
  Cs = e => ge(e) && e instanceof Cn,
  Ya = (e, t) => {
    let n = `${je(e.$flags$)} ${je(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`
    return e.$state$ && (n += ` ${t(e.$state$)}`), n
  },
  Za = e => {
    const [t, n, s, r, o] = e.split(' ')
    return new Cn(de(t), de(n), r, s, o)
  }
class Cn {
  constructor(t, n, s, r, o) {
    ;(this.$flags$ = t),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = r),
      (this.$state$ = o)
  }
}
function Ga(e) {
  return Xa(e) && e.nodeType === 1
}
function Xa(e) {
  return e && typeof e.nodeType == 'number'
}
const et = 1,
  Ee = 2,
  As = 4,
  oe = e => e[kn],
  ie = (e, t) => {
    const n = oe(e)
    if (n) return n
    const s = An(e),
      r = ae(e, 'q:id')
    if (r) {
      const o = t.$pauseCtx$
      if (((s.$id$ = r), o)) {
        const { getObject: i, meta: l, refs: a } = o
        if (Ga(e)) {
          const c = a[r]
          c &&
            ((s.$refMap$ = c.split(' ').map(i)),
            (s.li = pa(s, t.$containerEl$)))
        } else {
          const c = e.getAttribute('q:sstyle')
          s.$scopeIds$ = c ? c.split('|') : null
          const d = l[r]
          if (d) {
            const p = d.s,
              m = d.h,
              h = d.c,
              b = d.w
            if (
              (p && (s.$seq$ = p.split(' ').map(i)),
              b && (s.$tasks$ = b.split(' ').map(i)),
              h)
            ) {
              s.$contexts$ = new Map()
              for (const y of h.split(' ')) {
                const [$, f] = y.split('=')
                s.$contexts$.set($, i(f))
              }
            }
            if (m) {
              const [y, $] = m.split(' ')
              if (((s.$flags$ = As), y && (s.$componentQrl$ = i(y)), $)) {
                const f = i($)
                ;(s.$props$ = f), qn(f, 2), (f[v] = ec(f))
              } else s.$props$ = At(Sn(), t)
            }
          }
        }
      }
    }
    return s
  },
  ec = e => {
    const t = {},
      n = He(e)
    for (const s in n) s.startsWith('$$') && (t[s.slice(2)] = n[s])
    return t
  },
  An = e => {
    const t = {
      $flags$: 0,
      $id$: '',
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
    }
    return (e[kn] = t), t
  },
  tc = (e, t) => {
    var n
    ;(n = e.$tasks$) == null ||
      n.forEach(s => {
        t.$clearSub$(s), zo(s)
      }),
      (e.$componentQrl$ = null),
      (e.$seq$ = null),
      (e.$tasks$ = null)
  }
let Je
function nc(e) {
  if (Je === void 0) {
    const t = _e()
    if (t && t.$locale$) return t.$locale$
    if (e !== void 0) return e
    throw new Error('Reading `locale` outside of context.')
  }
  return Je
}
function vr(e, t) {
  const n = Je
  try {
    return (Je = e), t()
  } finally {
    Je = n
  }
}
function sc(e) {
  Je = e
}
let pt
const _e = () => {
    if (!pt) {
      const e = typeof document < 'u' && document && document.__q_context__
      return e ? (O(e) ? (document.__q_context__ = Mo(e)) : e) : void 0
    }
    return pt
  },
  rc = () => {
    const e = _e()
    if (!e) throw H(14)
    return e
  },
  Io = () => {
    const e = _e()
    if (!e || e.$event$ !== 'qRender') throw H(20)
    return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e
  }
function G(e, t, ...n) {
  const s = pt
  let r
  try {
    ;(pt = e), (r = t.apply(this, n))
  } finally {
    pt = s
  }
  return r
}
const oc = (e, t) => {
    const n = e.$waitOn$
    if (n.length === 0) {
      const s = t()
      J(s) && n.push(s)
    } else n.push(Promise.all(n).then(t))
  },
  Mo = e => {
    const t = e[0],
      n = t.closest('[q\\:container]'),
      s = (n == null ? void 0 : n.getAttribute('q:locale')) || void 0
    return s && sc(s), le(s, void 0, t, e[1], e[2])
  },
  le = (e, t, n, s, r) => ({
    $url$: r,
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
  Ts = e => e.closest('[q\\:container]'),
  tn = e => G(void 0, e),
  wr = le(void 0, void 0, void 0, 'qRender'),
  xe = (e, t) => ((wr.$subscriber$ = t), G(wr, () => e.value)),
  zs = e => {
    const t = _e()
    return (
      t &&
        t.$hostElement$ &&
        t.$renderCtx$ &&
        (ie(t.$hostElement$, t.$renderCtx$.$static$.$containerState$).$flags$ |=
          8),
      e
    )
  },
  ic = (e, t = 0) => {
    for (let n = 0; n < e.length; n++)
      (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0)
    return Number(Math.abs(t)).toString(36)
  },
  lc = (e, t) => `${ic(e.$hash$)}-${t}`,
  ac = e => '⭐️' + e,
  Ro = e => {
    const t = e.join('|')
    if (t.length > 0) return t
  }
var No
const Ut = '<!--qkssr-f-->'
class Lo {
  constructor(t) {
    ;(this.nodeType = t), (this[No] = null)
  }
}
No = kn
const cc = () => new Lo(9),
  uc = async (e, t) => {
    var m, h, b
    const n = t.containerTagName,
      s = nn(1).$element$,
      r = io(s, t.base ?? '/')
    r.$serverData$.locale = (m = t.serverData) == null ? void 0 : m.locale
    const o = cc(),
      i = go(o, r),
      l = t.beforeContent ?? [],
      a = {
        $static$: {
          $contexts$: [],
          $headNodes$: n === 'html' ? l : [],
          $locale$: (h = t.serverData) == null ? void 0 : h.locale,
          $textNodes$: new Map(),
        },
        $projectedChildren$: void 0,
        $projectedCtxs$: void 0,
        $invocationContext$: void 0,
      }
    let c = 'ssr'
    t.containerAttributes['q:render'] &&
      (c = `${t.containerAttributes['q:render']}-${c}`)
    const d = {
        ...t.containerAttributes,
        'q:container': 'paused',
        'q:version': '1.2.18',
        'q:render': c,
        'q:base': t.base,
        'q:locale': (b = t.serverData) == null ? void 0 : b.locale,
        'q:manifest-hash': t.manifestHash,
      },
      p = n === 'html' ? [e] : [l, e]
    n !== 'html' && (d.class = 'qc📦' + (d.class ? ' ' + d.class : '')),
      t.serverData && (r.$serverData$ = t.serverData),
      (e = u(n, null, d, p, et | Ee, null)),
      (r.$hostsRendering$ = new Set()),
      await Promise.resolve().then(() => dc(e, i, a, t.stream, r, t))
  },
  dc = async (e, t, n, s, r, o) => {
    const i = o.beforeClose
    return (
      await Ms(
        e,
        t,
        n,
        s,
        0,
        i
          ? l => {
              const a = i(n.$static$.$contexts$, r, !1, n.$static$.$textNodes$)
              return he(a, t, n, l, 0, void 0)
            }
          : void 0,
      ),
      t
    )
  },
  pc = async (e, t, n, s, r) => {
    s.write(Ut)
    const o = e.props.children
    let i
    if (ne(o)) {
      const l = o({
        write(a) {
          s.write(a), s.write(Ut)
        },
      })
      if (J(l)) return l
      i = l
    } else i = o
    for await (const l of i) await he(l, t, n, s, r, void 0), s.write(Ut)
  },
  Po = (e, t, n, s, r, o, i, l) => {
    var y
    const a = e.props,
      c = a['q:renderFn']
    if (c) return (t.$componentQrl$ = c), hc(s, r, o, t, e, i, l)
    let d = '<!--qv' + fc(a)
    const p = 'q:s' in a,
      m = e.key != null ? String(e.key) : null
    p &&
      ((y = s.$cmpCtx$) == null || y.$id$, (d += ' q:sref=' + s.$cmpCtx$.$id$)),
      m != null && (d += ' q:key=' + m),
      (d += '-->'),
      o.write(d)
    const h = e.props[V]
    if (h) return o.write(h), void o.write(On)
    if (n) for (const $ of n) Is($.type, $.props, o)
    const b = Do(e.children, s, r, o, i)
    return N(b, () => {
      var f
      if (!p && !l) return void o.write(On)
      let $
      if (p) {
        const S = (f = r.$projectedChildren$) == null ? void 0 : f[m]
        if (S) {
          const [w, g] = r.$projectedCtxs$,
            j = zt(w)
          ;(j.$slotCtx$ = t),
            (r.$projectedChildren$[m] = void 0),
            ($ = he(S, j, g, o, i))
        }
      }
      return (
        l && ($ = N($, () => l(o))),
        N($, () => {
          o.write(On)
        })
      )
    })
  },
  On = '<!--/qv-->',
  mc = e => {
    let t = ''
    for (const n in e) {
      if (n === V) continue
      const s = e[n]
      s != null && (t += ' ' + (s === '' ? n : n + '="' + s + '"'))
    }
    return t
  },
  fc = e => {
    let t = ''
    for (const n in e) {
      if (n === 'children' || n === V) continue
      const s = e[n]
      s != null && (t += ' ' + (s === '' ? n : n + '=' + s))
    }
    return t
  },
  Is = (e, t, n) => {
    if ((n.write('<' + e + mc(t) + '>'), Wo[e])) return
    const s = t[V]
    s != null && n.write(s), n.write(`</${e}>`)
  },
  hc = (e, t, n, s, r, o, i) => (
    gc(e, s, r.props.props),
    N(Xt(e, s), l => {
      const a = s.$element$,
        c = l.rCtx,
        d = le(t.$static$.$locale$, a, void 0)
      ;(d.$subscriber$ = [0, a]), (d.$renderCtx$ = c)
      const p = {
          $static$: t.$static$,
          $projectedChildren$: $c(r.children, t),
          $projectedCtxs$: [e, t],
          $invocationContext$: d,
        },
        m = []
      if (s.$appendStyles$) {
        const $ = 4 & o ? t.$static$.$headNodes$ : m
        for (const f of s.$appendStyles$)
          $.push(
            u(
              'style',
              { [xn]: f.styleId, [V]: f.content, hidden: '' },
              null,
              null,
              0,
              null,
            ),
          )
      }
      const h = yt(e),
        b = s.$scopeIds$ ? Ro(s.$scopeIds$) : void 0,
        y = _(r.type, { 'q:sstyle': b, 'q:id': h, children: l.node }, 0, r.key)
      return (
        (s.$id$ = h),
        t.$static$.$contexts$.push(s),
        Po(y, s, m, c, p, n, o, $ => {
          if (s.$flags$ & Ee) {
            const w = nn(1),
              g = w.li
            g.push(...s.li), (s.$flags$ &= ~Ee), (w.$id$ = yt(e))
            const j = { type: 'placeholder', hidden: '', 'q:id': w.$id$ }
            t.$static$.$contexts$.push(w)
            const E = ys(g)
            for (const x of E) {
              const q = Uo(x[0])
              ;(j[q] = Fs(x[1], w)), Ht(q, e.$static$.$containerState$)
            }
            Is('script', j, $)
          }
          const f = p.$projectedChildren$
          let S
          if (f) {
            const w = Object.keys(f).map(x => {
                const q = f[x]
                if (q)
                  return u(
                    'q:template',
                    { [se]: x, hidden: '', 'aria-hidden': 'true' },
                    null,
                    q,
                    0,
                    null,
                  )
              }),
              [g, j] = p.$projectedCtxs$,
              E = zt(g)
            ;(E.$slotCtx$ = s), (S = he(w, E, j, $, 0, void 0))
          }
          return i ? N(S, () => i($)) : S
        })
      )
    })
  ),
  $c = (e, t) => {
    const n = Oo(e, t)
    if (n === null) return
    const s = {}
    for (const r of n) {
      let o = ''
      rt(r) && (o = r.props[se] ?? ''), (s[o] || (s[o] = [])).push(r)
    }
    return s
  },
  nn = e => {
    const t = new Lo(e)
    return An(t)
  },
  Ms = (e, t, n, s, r, o) => {
    var c
    const i = e.type,
      l = t.$cmpCtx$
    if (typeof i == 'string') {
      const d = e.key,
        p = e.props,
        m = e.immutableProps,
        h = nn(1),
        b = h.$element$,
        y = i === 'head'
      let $ = '<' + i,
        f = !1,
        S = !1,
        w = '',
        g = null
      if (m)
        for (const x in m) {
          let q = m[x]
          if (Zt(x)) {
            Gt(h.li, x, q, void 0)
            continue
          }
          const A = _r(x)
          if (
            (re(q) && ((q = xe(q, [1, b, q, l.$element$, A])), (f = !0)),
            x === V)
          ) {
            g = q
            continue
          }
          x.startsWith(Vn) && Ht(x.slice(15), t.$static$.$containerState$)
          const k = xr(A, q)
          k != null &&
            (A === 'class'
              ? (w = k)
              : A === 'value' && i === 'textarea'
                ? (g = mt(k))
                : kr(A) || ($ += ' ' + (q === '' ? A : A + '="' + Ot(k) + '"')))
        }
      for (const x in p) {
        let q = p[x]
        if (x === 'ref') {
          q !== void 0 && (vs(q, b), (S = !0))
          continue
        }
        if (Zt(x)) {
          Gt(h.li, x, q, void 0)
          continue
        }
        const A = _r(x)
        if (
          (re(q) && ((q = xe(q, [2, l.$element$, q, b, A])), (f = !0)), x === V)
        ) {
          g = q
          continue
        }
        x.startsWith(Vn) && Ht(x.slice(15), t.$static$.$containerState$)
        const k = xr(A, q)
        k != null &&
          (A === 'class'
            ? (w = k)
            : A === 'value' && i === 'textarea'
              ? (g = mt(k))
              : kr(A) || ($ += ' ' + (q === '' ? A : A + '="' + Ot(k) + '"')))
      }
      const j = h.li
      if (l) {
        if ((c = l.$scopeIds$) != null && c.length) {
          const x = l.$scopeIds$.join(' ')
          w = w ? `${x} ${w}` : x
        }
        l.$flags$ & Ee && (j.push(...l.li), (l.$flags$ &= ~Ee))
      }
      if (
        (y && (r |= 1),
        i in bc && (r |= 16),
        i in yc && (r |= 8),
        w && ($ += ' class="' + Ot(w) + '"'),
        j.length > 0)
      ) {
        const x = ys(j),
          q = (16 & r) != 0
        for (const A of x) {
          const k = q ? Uo(A[0]) : A[0]
          ;($ += ' ' + k + '="' + Fs(A[1], h) + '"'),
            Ht(k, t.$static$.$containerState$)
        }
      }
      if (
        (d != null && ($ += ' q:key="' + Ot(d) + '"'), S || f || j.length > 0)
      ) {
        if (S || f || xc(j)) {
          const x = yt(t)
          ;($ += ' q:id="' + x + '"'), (h.$id$ = x)
        }
        n.$static$.$contexts$.push(h)
      }
      if ((1 & r && ($ += ' q:head'), ($ += '>'), s.write($), i in Wo)) return
      if (g != null) return s.write(String(g)), void s.write(`</${i}>`)
      i === 'html' ? (r |= 4) : (r &= -5), 2 & e.flags && (r |= 1024)
      const E = he(e.children, t, n, s, r)
      return N(E, () => {
        if (y) {
          for (const x of n.$static$.$headNodes$) Is(x.type, x.props, s)
          n.$static$.$headNodes$.length = 0
        }
        if (o)
          return N(o(s), () => {
            s.write(`</${i}>`)
          })
        s.write(`</${i}>`)
      })
    }
    if (i === De) {
      const d = nn(111)
      return (
        (d.$parentCtx$ = t.$slotCtx$ || t.$cmpCtx$),
        l && 8 & l.$flags$ && kc(l, d),
        Po(e, d, void 0, t, n, s, r, o)
      )
    }
    if (i === fo) return void s.write(e.props.data)
    if (i === ho) return pc(e, t, n, s, r)
    const a = G(n.$invocationContext$, i, e.props, e.key, e.flags, e.dev)
    return vo(a, e)
      ? Ms(_(De, { children: a }, 0, e.key), t, n, s, r, o)
      : he(a, t, n, s, r, o)
  },
  he = (e, t, n, s, r, o) => {
    var i
    if (e != null && typeof e != 'boolean') {
      if (!We(e) && typeof e != 'number') {
        if (rt(e)) return Ms(e, t, n, s, r, o)
        if (O(e)) return Do(e, t, n, s, r)
        if (re(e)) {
          const l = 8 & r,
            a = (i = t.$cmpCtx$) == null ? void 0 : i.$element$
          let c
          if (a) {
            if (!l) {
              const d = yt(t)
              c = xe(
                e,
                1024 & r ? [3, '#' + d, e, '#' + d] : [4, a, e, '#' + d],
              )
              const p = Xe(c)
              return (
                n.$static$.$textNodes$.set(p, d),
                void s.write(`<!--t=${d}-->${mt(p)}<!---->`)
              )
            }
            c = G(n.$invocationContext$, () => e.value)
          }
          return void s.write(mt(Xe(c)))
        }
        return J(e)
          ? (s.write(Ut), e.then(l => he(l, t, n, s, r, o)))
          : void $t()
      }
      s.write(mt(String(e)))
    }
  },
  Do = (e, t, n, s, r) => {
    if (e == null) return
    if (!O(e)) return he(e, t, n, s, r)
    const o = e.length
    if (o === 1) return he(e[0], t, n, s, r)
    if (o === 0) return
    let i = 0
    const l = []
    return e.reduce(
      (a, c, d) => {
        const p = []
        l.push(p)
        const m = he(
            c,
            t,
            n,
            a
              ? {
                  write(b) {
                    i === d ? s.write(b) : p.push(b)
                  },
                }
              : s,
            r,
          ),
          h = () => {
            i++, l.length > i && l[i].forEach(b => s.write(b))
          }
        return J(m) && a
          ? Promise.all([m, a]).then(h)
          : J(m)
            ? m.then(h)
            : a
              ? a.then(h)
              : void i++
      },
      void 0,
    )
  },
  Oo = (e, t) => {
    if (e == null) return null
    const n = Fo(e, t),
      s = O(n) ? n : [n]
    return s.length === 0 ? null : s
  },
  Fo = (e, t) => {
    if (e == null) return null
    if (O(e)) return e.flatMap(n => Fo(n, t))
    if (
      rt(e) &&
      ne(e.type) &&
      e.type !== fo &&
      e.type !== ho &&
      e.type !== De
    ) {
      const n = G(t.$invocationContext$, e.type, e.props, e.key, e.flags)
      return Oo(n, t)
    }
    return e
  },
  gc = (e, t, n) => {
    const s = Object.keys(n),
      r = Sn()
    if (((t.$props$ = At(r, e.$static$.$containerState$)), s.length === 0))
      return
    const o = (r[v] = n[v] ?? Y)
    for (const i of s)
      i !== 'children' &&
        i !== se &&
        (re(o[i]) ? (r['$$' + i] = o[i]) : (r[i] = n[i]))
  },
  _r = e => (e === 'htmlFor' ? 'for' : e),
  xr = (e, t) =>
    e === 'class'
      ? en(t)
      : e === 'style'
        ? jn(t)
        : yo(e) || e === 'draggable' || e === 'spellcheck'
          ? t != null
            ? String(t)
            : t
          : t === !1 || t == null
            ? null
            : t === !0
              ? ''
              : String(t),
  bc = { head: !0, style: !0, script: !0, link: !0, meta: !0 },
  yc = { title: !0, style: !0, script: !0, noframes: !0, textarea: !0 },
  Wo = {
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
  vc = /[&<>]/g,
  wc = /[&"]/g,
  Ht = (e, t) => {
    t.$events$.add(lo(e))
  },
  mt = e =>
    e.replace(vc, t => {
      switch (t) {
        case '&':
          return '&amp;'
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        default:
          return ''
      }
    }),
  Ot = e =>
    e.replace(wc, t => {
      switch (t) {
        case '&':
          return '&amp;'
        case '"':
          return '&quot;'
        default:
          return ''
      }
    }),
  _c = /[>/="'\u0009\u000a\u000c\u0020]/,
  kr = e => _c.test(e),
  xc = e => e.some(t => t[1].$captureRef$ && t[1].$captureRef$.length > 0),
  kc = (e, t) => {
    const n = e.$dynamicSlots$ || (e.$dynamicSlots$ = [])
    n.includes(t) || n.push(t)
  },
  Uo = e => (e === 'on:qvisible' ? 'on-document:qinit' : e),
  u = (e, t, n, s, r, o) => {
    const i = o == null ? null : String(o)
    return new It(e, t ?? Y, n, s, r, i)
  },
  Qt = (e, t, n, s, r, o) => {
    let i = null
    return (
      t && 'children' in t && ((i = t.children), delete t.children),
      u(e, t, n, i, s, r)
    )
  },
  _ = (e, t, n, s, r) => {
    const o = s == null ? null : String(s),
      i = t ?? Y
    if (typeof e == 'string' && v in i) {
      const a = {}
      for (const [c, d] of Object.entries(i[v])) a[c] = d === v ? i[c] : d
      return u(e, null, a, i.children, n, s)
    }
    const l = new It(e, i, null, i.children, n, o)
    return typeof e == 'string' && t && delete t.children, l
  },
  X = (e, t, n) => {
    const s = n == null ? null : String(n),
      r = tn(() => {
        const i = t.children
        return typeof e == 'string' && delete t.children, i
      })
    return (
      We(e) &&
        'className' in t &&
        ((t.class = t.className), delete t.className),
      new It(e, t, null, r, 0, s)
    )
  },
  sn = ':skipRender'
class It {
  constructor(t, n, s, r, o, i = null) {
    ;(this.type = t),
      (this.props = n),
      (this.immutableProps = s),
      (this.children = r),
      (this.flags = o),
      (this.key = i)
  }
}
const De = e => e.children,
  rt = e => e instanceof It,
  R = e => e.children,
  Mt = 'http://www.w3.org/2000/svg',
  ee = 1,
  rn = 2,
  on = [],
  ln = (e, t, n, s) => {
    t.$elm$
    const r = n.$children$
    if (r.length === 1 && r[0].$type$ === sn)
      return void (n.$children$ = t.$children$)
    const o = t.$elm$
    let i = cn
    t.$children$ === on && o.nodeName === 'HEAD' && ((i = Ec), (s |= rn))
    const l = Sc(t, i)
    return l.length > 0 && r.length > 0
      ? qc(e, o, l, r, s)
      : l.length > 0 && r.length === 0
        ? Rs(e.$static$, l, 0, l.length - 1)
        : r.length > 0
          ? Bo(e, o, null, r, 0, r.length - 1, s)
          : void 0
  },
  Sc = (e, t) => {
    const n = e.$children$
    return n === on ? (e.$children$ = Ho(e.$elm$, t)) : n
  },
  qc = (e, t, n, s, r) => {
    let o = 0,
      i = 0,
      l = n.length - 1,
      a = n[0],
      c = n[l],
      d = s.length - 1,
      p = s[0],
      m = s[d],
      h,
      b,
      y
    const $ = [],
      f = e.$static$
    for (; o <= l && i <= d; )
      if (a == null) a = n[++o]
      else if (c == null) c = n[--l]
      else if (p == null) p = s[++i]
      else if (m == null) m = s[--d]
      else if (a.$id$ === p.$id$)
        $.push(at(e, a, p, r)), (a = n[++o]), (p = s[++i])
      else if (c.$id$ === m.$id$)
        $.push(at(e, c, m, r)), (c = n[--l]), (m = s[--d])
      else if (a.$key$ && a.$id$ === m.$id$)
        a.$elm$,
          c.$elm$,
          $.push(at(e, a, m, r)),
          Hc(f, t, a.$elm$, c.$elm$),
          (a = n[++o]),
          (m = s[--d])
      else if (c.$key$ && c.$id$ === p.$id$)
        a.$elm$,
          c.$elm$,
          $.push(at(e, c, p, r)),
          dt(f, t, c.$elm$, a.$elm$),
          (c = n[--l]),
          (p = s[++i])
      else {
        if (
          (h === void 0 && (h = Fc(n, o, l)), (b = h[p.$key$]), b === void 0)
        ) {
          const w = _t(e, p, r, $)
          dt(f, t, w, a == null ? void 0 : a.$elm$)
        } else if (((y = n[b]), y.$type$ !== p.$type$)) {
          const w = _t(e, p, r, $)
          N(w, g => {
            dt(f, t, g, a == null ? void 0 : a.$elm$)
          })
        } else
          $.push(at(e, y, p, r)),
            (n[b] = void 0),
            y.$elm$,
            dt(f, t, y.$elm$, a.$elm$)
        p = s[++i]
      }
    i <= d &&
      $.push(Bo(e, t, s[d + 1] == null ? null : s[d + 1].$elm$, s, i, d, r))
    let S = gs($)
    return (
      o <= l &&
        (S = N(S, () => {
          Rs(f, n, o, l)
        })),
      S
    )
  },
  Ke = (e, t) => {
    const n = $e(e) ? e.close : null,
      s = []
    let r = e.firstChild
    for (; (r = Ps(r)) && (t(r) && s.push(r), (r = r.nextSibling), r !== n); );
    return s
  },
  Ho = (e, t) => Ke(e, t).map(jc),
  jc = e => {
    var t
    return Ae(e) ? ((t = oe(e)) == null ? void 0 : t.$vdom$) ?? an(e) : an(e)
  },
  an = e => {
    if (Fe(e)) {
      const t = new ve(e.localName, {}, null, on, 0, ss(e))
      return (t.$elm$ = e), t
    }
    if (ms(e)) {
      const t = new ve(e.nodeName, Y, null, on, 0, null)
      return (t.$text$ = e.data), (t.$elm$ = e), t
    }
  },
  Ec = e => {
    const t = e.nodeType
    return t === 1 ? e.hasAttribute('q:head') : t === 111
  },
  ns = e => e.nodeName === 'Q:TEMPLATE',
  cn = e => {
    const t = e.nodeType
    if (t === 3 || t === 111) return !0
    if (t !== 1) return !1
    const n = e.nodeName
    return (
      n !== 'Q:TEMPLATE' &&
      (n === 'HEAD'
        ? e.hasAttribute('q:head')
        : n !== 'STYLE' || !e.hasAttribute(xn))
    )
  },
  Qo = e => {
    const t = {}
    for (const n of e) {
      const s = Cc(n)
      ;(
        t[s] ?? (t[s] = new ve(tt, { 'q:s': '' }, null, [], 0, s))
      ).$children$.push(n)
    }
    return t
  },
  at = (e, t, n, s) => {
    t.$type$, n.$type$, t.$key$, n.$key$, t.$id$, n.$id$
    const r = t.$elm$,
      o = n.$type$,
      i = e.$static$,
      l = i.$containerState$,
      a = e.$cmpCtx$
    if (((n.$elm$ = r), o === '#text')) {
      i.$visited$.push(r)
      const m = n.$signal$
      return (
        m && (n.$text$ = Xe(xe(m, [4, a.$element$, m, r]))),
        void ke(i, r, 'data', n.$text$)
      )
    }
    const c = n.$props$,
      d = n.$flags$,
      p = ie(r, l)
    if (o !== tt) {
      let m = (s & ee) != 0
      if ((m || o !== 'svg' || ((s |= ee), (m = !0)), c !== Y)) {
        !(1 & d) && (p.li.length = 0)
        const h = t.$props$
        n.$props$ = h
        for (const b in c) {
          let y = c[b]
          if (b !== 'ref')
            if (Zt(b)) {
              const $ = Gt(p.li, b, y, l.$containerEl$)
              Vo(i, r, $)
            } else
              re(y) && (y = xe(y, [1, a.$element$, y, r, b])),
                b === 'class' ? (y = ks(y, a)) : b === 'style' && (y = jn(y)),
                h[b] !== y && ((h[b] = y), Ns(i, r, b, y, m))
          else y !== void 0 && vs(y, r)
        }
      }
      return 2 & d ||
        (m && o === 'foreignObject' && (s &= ~ee), c[V] !== void 0) ||
        o === 'textarea'
        ? void 0
        : ln(e, t, n, s)
    }
    if ('q:renderFn' in c) {
      const m = c.props
      Lc(l, p, m)
      let h = !!(p.$flags$ & et)
      return (
        h ||
          p.$componentQrl$ ||
          p.$element$.hasAttribute('q:id') ||
          (bo(e, p),
          (p.$componentQrl$ = m['q:renderFn']),
          p.$componentQrl$,
          (h = !0)),
        h ? N(Ss(e, p, s), () => Sr(e, p, n, s)) : Sr(e, p, n, s)
      )
    }
    if ('q:s' in c) return a.$slots$, void a.$slots$.push(n)
    if (V in c) ke(i, r, 'innerHTML', c[V])
    else if (!(2 & d)) return ln(e, t, n, s)
  },
  Sr = (e, t, n, s) => {
    if (2 & n.$flags$) return
    const r = e.$static$,
      o = Qo(n.$children$),
      i = Jo(t)
    for (const l in i.slots)
      if (!o[l]) {
        const a = i.slots[l],
          c = Ho(a, cn)
        if (c.length > 0) {
          const d = oe(a)
          d && d.$vdom$ && (d.$vdom$.$children$ = []), Rs(r, c, 0, c.length - 1)
        }
      }
    for (const l in i.templates) {
      const a = i.templates[l]
      a && !o[l] && ((i.templates[l] = void 0), Xo(r, a))
    }
    return gs(
      Object.keys(o).map(l => {
        const a = o[l],
          c = Ko(r, i, t, l, e.$static$.$containerState$),
          d = qs(c),
          p = zt(e),
          m = c.$element$
        ;(p.$slotCtx$ = c), (c.$vdom$ = a), (a.$elm$ = m)
        let h = s & ~ee
        m.isSvg && (h |= ee)
        const b = r.$addSlots$.findIndex(y => y[0] === m)
        return b >= 0 && r.$addSlots$.splice(b, 1), ln(p, d, a, h)
      }),
    )
  },
  Bo = (e, t, n, s, r, o, i) => {
    const l = []
    for (; r <= o; ++r) {
      const a = s[r],
        c = _t(e, a, i, l)
      dt(e.$static$, t, c, n)
    }
    return Yt(l)
  },
  Rs = (e, t, n, s) => {
    for (; n <= s; ++n) {
      const r = t[n]
      r && (r.$elm$, Xo(e, r.$elm$))
    }
  },
  Ko = (e, t, n, s, r) => {
    const o = t.slots[s]
    if (o) return ie(o, r)
    const i = t.templates[s]
    if (i) return ie(i, r)
    const l = ei(e.$doc$, s),
      a = An(l)
    return (a.$parentCtx$ = n), Kc(e, n.$element$, l), (t.templates[s] = l), a
  },
  Cc = e => e.$props$[se] ?? '',
  _t = (e, t, n, s) => {
    const r = t.$type$,
      o = e.$static$.$doc$,
      i = e.$cmpCtx$
    if (r === '#text') {
      const $ = t.$signal$,
        f = o.createTextNode(t.$text$)
      return (
        $ &&
          (f.data = t.$text$ =
            Xe(xe($, 4 & n ? [3, f, $, f] : [4, i.$element$, $, f]))),
        (t.$elm$ = f)
      )
    }
    let l,
      a = !!(n & ee)
    a || r !== 'svg' || ((n |= ee), (a = !0))
    const c = r === tt,
      d = t.$props$,
      p = e.$static$,
      m = p.$containerState$
    c
      ? (l = Xc(o, a))
      : r === 'head'
        ? ((l = o.head), (n |= rn))
        : ((l = Ls(o, r, a)), (n &= ~rn)),
      2 & t.$flags$ && (n |= 4),
      (t.$elm$ = l)
    const h = An(l)
    if (((h.$parentCtx$ = e.$slotCtx$ ?? e.$cmpCtx$), c)) {
      if ('q:renderFn' in d) {
        const $ = d['q:renderFn'],
          f = Sn(),
          S = m.$subsManager$.$createManager$(),
          w = new Proxy(f, new mo(m, S)),
          g = d.props
        if ((m.$proxyMap$.set(f, w), (h.$props$ = w), g !== Y)) {
          const E = (f[v] = g[v] ?? Y)
          for (const x in g)
            if (x !== 'children' && x !== se) {
              const q = E[x]
              re(q) ? (f['$$' + x] = q) : (f[x] = g[x])
            }
        }
        bo(e, h), (h.$componentQrl$ = $)
        const j = N(Ss(e, h, n), () => {
          let E = t.$children$
          if (E.length === 0) return
          E.length === 1 && E[0].$type$ === sn && (E = E[0].$children$)
          const x = Jo(h),
            q = [],
            A = Qo(E)
          for (const k in A) {
            const C = A[k],
              I = Ko(p, x, h, k, p.$containerState$),
              Q = zt(e),
              ce = I.$element$
            ;(Q.$slotCtx$ = I), (I.$vdom$ = C), (C.$elm$ = ce)
            let W = n & ~ee
            ce.isSvg && (W |= ee)
            for (const P of C.$children$) {
              const Te = _t(Q, P, W, q)
              P.$elm$, P.$elm$, Go(p, ce, Te)
            }
          }
          return Yt(q)
        })
        return J(j) && s.push(j), l
      }
      if ('q:s' in d)
        i.$slots$,
          Zc(l, t.$key$),
          te(l, 'q:sref', i.$id$),
          te(l, 'q:s', ''),
          i.$slots$.push(t),
          p.$addSlots$.push([l, i.$element$])
      else if (V in d) return ke(p, l, 'innerHTML', d[V]), l
    } else {
      if (
        (t.$immutableProps$ && jr(p, h, i, t.$immutableProps$, a, !0),
        d !== Y && ((h.$vdom$ = t), (t.$props$ = jr(p, h, i, d, a, !1))),
        a && r === 'foreignObject' && ((a = !1), (n &= ~ee)),
        i)
      ) {
        const $ = i.$scopeIds$
        $ &&
          $.forEach(f => {
            l.classList.add(f)
          }),
          i.$flags$ & Ee && (h.li.push(...i.li), (i.$flags$ &= ~Ee))
      }
      for (const $ of h.li) Vo(p, l, $[0])
      if (d[V] !== void 0) return l
      a && r === 'foreignObject' && ((a = !1), (n &= ~ee))
    }
    let b = t.$children$
    if (b.length === 0) return l
    b.length === 1 && b[0].$type$ === sn && (b = b[0].$children$)
    const y = b.map($ => _t(e, $, n, s))
    for (const $ of y) xt(l, $)
    return l
  },
  Ac = e => {
    const t = e.$slots$
    return t || (e.$element$.parentElement, (e.$slots$ = Tc(e)))
  },
  Jo = e => {
    const t = Ac(e),
      n = {},
      s = {},
      r = Array.from(e.$element$.childNodes).filter(ns)
    for (const o of t) o.$elm$, (n[o.$key$ ?? ''] = o.$elm$)
    for (const o of r) s[ae(o, se) ?? ''] = o
    return { slots: n, templates: s }
  },
  Tc = e => {
    const t = e.$element$.parentElement
    return su(t, 'q:sref', e.$id$).map(an)
  },
  zc = (e, t, n) => (ke(e, t.style, 'cssText', n), !0),
  Ic = (e, t, n) => (
    t.namespaceURI === Mt ? kt(e, t, 'class', n) : ke(e, t, 'className', n), !0
  ),
  qr = (e, t, n, s) => (
    s in t &&
      t[s] !== n &&
      (t.tagName === 'SELECT' ? Uc(e, t, s, n) : ke(e, t, s, n)),
    !0
  ),
  ct = (e, t, n, s) => (kt(e, t, s.toLowerCase(), n), !0),
  Mc = (e, t, n) => (ke(e, t, 'innerHTML', n), !0),
  Rc = () => !0,
  Nc = {
    style: zc,
    class: Ic,
    value: qr,
    checked: qr,
    href: ct,
    list: ct,
    form: ct,
    tabIndex: ct,
    download: ct,
    innerHTML: Rc,
    [V]: Mc,
  },
  Ns = (e, t, n, s, r) => {
    if (yo(n)) return void kt(e, t, n, s != null ? String(s) : s)
    const o = Nc[n]
    ;(o && o(e, t, s, n)) ||
      (r || !(n in t)
        ? (n.startsWith(Vn) && Yo(n.slice(15)), kt(e, t, n, s))
        : ke(e, t, n, s))
  },
  jr = (e, t, n, s, r, o) => {
    const i = {},
      l = t.$element$
    for (const a in s) {
      let c = s[a]
      if (a !== 'ref')
        if (Zt(a)) Gt(t.li, a, c, e.$containerState$.$containerEl$)
        else {
          if (
            (re(c) &&
              (c = xe(
                c,
                o ? [1, l, c, n.$element$, a] : [2, n.$element$, c, l, a],
              )),
            a === 'class')
          ) {
            if (((c = ks(c, n)), !c)) continue
          } else a === 'style' && (c = jn(c))
          ;(i[a] = c), Ns(e, l, a, c, r)
        }
      else c !== void 0 && vs(c, l)
    }
    return i
  },
  Lc = (e, t, n) => {
    let s = t.$props$
    if ((s || (t.$props$ = s = At(Sn(), e)), n === Y)) return
    const r = Z(s),
      o = He(s),
      i = (o[v] = n[v] ?? Y)
    for (const l in n)
      if (l !== 'children' && l !== se && !i[l]) {
        const a = n[l]
        o[l] !== a && ((o[l] = a), r.$notifySubs$(l))
      }
  },
  ft = (e, t, n, s) => {
    if ((n.$clearSub$(e), Fe(e))) {
      if (s && e.hasAttribute('q:s')) return void t.$rmSlots$.push(e)
      const r = oe(e)
      r && tc(r, n)
      const o = $e(e) ? e.close : null
      let i = e.firstChild
      for (; (i = Ps(i)) && (ft(i, t, n, !0), (i = i.nextSibling), i !== o); );
    }
  },
  Pc = async e => {
    Yc(e)
  },
  xt = (e, t) => {
    $e(t) ? t.appendTo(e) : e.appendChild(t)
  },
  Dc = (e, t) => {
    $e(t) ? t.remove() : e.removeChild(t)
  },
  Oc = (e, t, n) => {
    $e(t)
      ? t.insertBeforeTo(e, (n == null ? void 0 : n.nextSibling) ?? null)
      : e.insertBefore(t, (n == null ? void 0 : n.nextSibling) ?? null)
  },
  Tn = (e, t, n) => {
    $e(t) ? t.insertBeforeTo(e, un(n)) : e.insertBefore(t, un(n))
  },
  Fc = (e, t, n) => {
    const s = {}
    for (let r = t; r <= n; ++r) {
      const o = e[r].$key$
      o != null && (s[o] = r)
    }
    return s
  },
  Vo = (e, t, n) => {
    n.startsWith('on:') || kt(e, t, n, ''), Yo(n)
  },
  Yo = e => {
    var t
    {
      const n = lo(e)
      try {
        ;((t = globalThis).qwikevents || (t.qwikevents = [])).push(n)
      } catch {}
    }
  },
  kt = (e, t, n, s) => {
    e.$operations$.push({ $operation$: Wc, $args$: [t, n, s] })
  },
  Wc = (e, t, n) => {
    if (n == null || n === !1) e.removeAttribute(t)
    else {
      const s = n === !0 ? '' : String(n)
      te(e, t, s)
    }
  },
  ke = (e, t, n, s) => {
    e.$operations$.push({ $operation$: Zo, $args$: [t, n, s] })
  },
  Uc = (e, t, n, s) => {
    e.$postOperations$.push({ $operation$: Zo, $args$: [t, n, s] })
  },
  Zo = (e, t, n) => {
    try {
      ;(e[t] = n ?? ''), n == null && Ce(e) && Ae(e) && e.removeAttribute(t)
    } catch (s) {
      ht(vn(6), { node: e, key: t, value: n }, s)
    }
  },
  Ls = (e, t, n) => (n ? e.createElementNS(Mt, t) : e.createElement(t)),
  dt = (e, t, n, s) => (
    e.$operations$.push({ $operation$: Tn, $args$: [t, n, s || null] }), n
  ),
  Hc = (e, t, n, s) => (
    e.$operations$.push({ $operation$: Oc, $args$: [t, n, s || null] }), n
  ),
  Go = (e, t, n) => (
    e.$operations$.push({ $operation$: xt, $args$: [t, n] }), n
  ),
  Qc = (e, t) => {
    e.$containerState$.$styleIds$.add(t.styleId),
      e.$postOperations$.push({
        $operation$: Bc,
        $args$: [e.$containerState$, t],
      })
  },
  Bc = (e, t) => {
    const n = e.$containerEl$,
      s = Et(n),
      r = s.documentElement === n,
      o = s.head,
      i = s.createElement('style')
    te(i, xn, t.styleId),
      te(i, 'hidden', ''),
      (i.textContent = t.content),
      r && o ? xt(o, i) : Tn(n, i, n.firstChild)
  },
  Kc = (e, t, n) => {
    e.$operations$.push({ $operation$: Jc, $args$: [t, n] })
  },
  Jc = (e, t) => {
    Tn(e, t, e.firstChild)
  },
  Xo = (e, t) => {
    Fe(t) && ft(t, e, e.$containerState$.$subsManager$, !0),
      e.$operations$.push({ $operation$: Vc, $args$: [t, e] })
  },
  Vc = e => {
    const t = e.parentElement
    t && Dc(t, e)
  },
  ei = (e, t) => {
    const n = Ls(e, 'q:template', !1)
    return te(n, se, t), te(n, 'hidden', ''), te(n, 'aria-hidden', 'true'), n
  },
  Yc = e => {
    for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$)
    Gc(e)
  },
  ss = e => ae(e, 'q:key'),
  Zc = (e, t) => {
    t !== null && te(e, 'q:key', t)
  },
  Gc = e => {
    const t = e.$containerState$.$subsManager$
    for (const n of e.$rmSlots$) {
      const s = ss(n),
        r = Ke(n, cn)
      if (r.length > 0) {
        const o = n.getAttribute('q:sref'),
          i = e.$roots$.find(l => l.$id$ === o)
        if (i) {
          const l = i.$element$
          if (l.isConnected)
            if (Ke(l, ns).some(a => ae(a, se) === s)) ft(n, e, t, !1)
            else {
              const a = ei(e.$doc$, s)
              for (const c of r) xt(a, c)
              Tn(l, a, l.firstChild)
            }
          else ft(n, e, t, !1)
        } else ft(n, e, t, !1)
      }
    }
    for (const [n, s] of e.$addSlots$) {
      const r = ss(n),
        o = Ke(s, ns).find(i => i.getAttribute(se) === r)
      o &&
        (Ke(o, cn).forEach(i => {
          xt(n, i)
        }),
        o.remove())
    }
  },
  Er = () => {},
  Xc = (e, t) => {
    const n = e.createComment('qv '),
      s = e.createComment('/qv')
    return new ti(n, s, t)
  },
  eu = e => {
    if (!e) return {}
    const t = e.split(' ')
    return Object.fromEntries(
      t.map(n => {
        const s = n.indexOf('=')
        return s >= 0 ? [n.slice(0, s), ou(n.slice(s + 1))] : [n, '']
      }),
    )
  },
  tu = e => {
    const t = []
    return (
      Object.entries(e).forEach(([n, s]) => {
        t.push(s ? `${n}=${ru(s)}` : `${n}`)
      }),
      t.join(' ')
    )
  },
  nu = (e, t, n) =>
    e.ownerDocument.createTreeWalker(e, 128, {
      acceptNode(s) {
        const r = Rt(s)
        return r && ae(r, t) === n ? 1 : 2
      },
    }),
  su = (e, t, n) => {
    const s = nu(e, t, n),
      r = []
    let o = null
    for (; (o = s.nextNode()); ) r.push(Rt(o))
    return r
  },
  ru = e => e.replace(/ /g, '+'),
  ou = e => e.replace(/\+/g, ' '),
  tt = ':virtual'
class ti {
  constructor(t, n, s) {
    ;(this.open = t),
      (this.close = n),
      (this.isSvg = s),
      (this._qc_ = null),
      (this.nodeType = 111),
      (this.localName = tt),
      (this.nodeName = tt)
    const r = (this.ownerDocument = t.ownerDocument)
    ;(this.$template$ = Ls(r, 'template', !1)),
      (this.$attributes$ = eu(t.data.slice(3))),
      t.data.startsWith('qv '),
      (t.__virtual = this),
      (n.__virtual = this)
  }
  insertBefore(t, n) {
    const s = this.parentElement
    return (
      s
        ? s.insertBefore(t, n || this.close)
        : this.$template$.insertBefore(t, n),
      t
    )
  }
  remove() {
    const t = this.parentElement
    if (t) {
      const n = this.childNodes
      this.$template$.childElementCount, t.removeChild(this.open)
      for (let s = 0; s < n.length; s++) this.$template$.appendChild(n[s])
      t.removeChild(this.close)
    }
  }
  appendChild(t) {
    return this.insertBefore(t, null)
  }
  insertBeforeTo(t, n) {
    const s = this.childNodes
    t.insertBefore(this.open, n)
    for (const r of s) t.insertBefore(r, n)
    t.insertBefore(this.close, n), this.$template$.childElementCount
  }
  appendTo(t) {
    this.insertBeforeTo(t, null)
  }
  get namespaceURI() {
    var t
    return ((t = this.parentElement) == null ? void 0 : t.namespaceURI) ?? ''
  }
  removeChild(t) {
    this.parentElement
      ? this.parentElement.removeChild(t)
      : this.$template$.removeChild(t)
  }
  getAttribute(t) {
    return this.$attributes$[t] ?? null
  }
  hasAttribute(t) {
    return t in this.$attributes$
  }
  setAttribute(t, n) {
    ;(this.$attributes$[t] = n), (this.open.data = Cr(this.$attributes$))
  }
  removeAttribute(t) {
    delete this.$attributes$[t], (this.open.data = Cr(this.$attributes$))
  }
  matches(t) {
    return !1
  }
  compareDocumentPosition(t) {
    return this.open.compareDocumentPosition(t)
  }
  closest(t) {
    const n = this.parentElement
    return n ? n.closest(t) : null
  }
  querySelectorAll(t) {
    const n = []
    return (
      Ke(this, sa).forEach(s => {
        Fe(s) &&
          (s.matches(t) && n.push(s),
          n.concat(Array.from(s.querySelectorAll(t))))
      }),
      n
    )
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (Ae(n)) {
        if (n.matches(t)) return n
        const s = n.querySelector(t)
        if (s !== null) return s
      }
    return null
  }
  get innerHTML() {
    return ''
  }
  set innerHTML(t) {
    const n = this.parentElement
    n
      ? (this.childNodes.forEach(s => this.removeChild(s)),
        (this.$template$.innerHTML = t),
        n.insertBefore(this.$template$.content, this.close))
      : (this.$template$.innerHTML = t)
  }
  get firstChild() {
    if (this.parentElement) {
      const t = this.open.nextSibling
      return t === this.close ? null : t
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
    const t = []
    let n = this.open
    for (; (n = n.nextSibling) && n !== this.close; ) t.push(n)
    return t
  }
  get isConnected() {
    return this.open.isConnected
  }
  get parentElement() {
    return this.open.parentElement
  }
}
const Cr = e => `qv ${tu(e)}`,
  Ps = e => {
    if (e == null) return null
    if (qt(e)) {
      const t = Rt(e)
      if (t) return t
    }
    return e
  },
  iu = e => {
    let t = e,
      n = 1
    for (; (t = t.nextSibling); )
      if (qt(t)) {
        const s = t.__virtual
        if (s) t = s
        else if (t.data.startsWith('qv ')) n++
        else if (t.data === '/qv' && (n--, n === 0)) return t
      }
  },
  Rt = e => {
    var n
    const t = e.__virtual
    if (t) return t
    if (e.data.startsWith('qv ')) {
      const s = iu(e)
      return new ti(
        e,
        s,
        ((n = e.parentElement) == null ? void 0 : n.namespaceURI) === Mt,
      )
    }
    return null
  },
  un = e => (e == null ? null : $e(e) ? e.open : e),
  lu = async e => {
    const t = {},
      n = si(t)
    let s
    for (M(e, n, !1); (s = n.$promises$).length > 0; )
      (n.$promises$ = []), await Promise.all(s)
    const r = Array.from(n.$objSet$.keys())
    let o = 0
    const i = new Map()
    for (const c of r) i.set(c, je(o)), o++
    if (n.$noSerialize$.length > 0) {
      const c = i.get(void 0)
      for (const d of n.$noSerialize$) i.set(d, c)
    }
    const l = c => {
        let d = ''
        if (J(c)) {
          const m = ri(c)
          if (!m) throw H(27, c)
          ;(c = m.value), (d += m.resolved ? '~' : '_')
        }
        if (ge(c)) {
          const m = He(c)
          m && ((d += '!'), (c = m))
        }
        const p = i.get(c)
        if (p === void 0) throw H(27, c)
        return p + d
      },
      a = ii(r, l, null, n, t)
    return JSON.stringify({ _entry: l(e), _objs: a })
  },
  au = async (e, t) => {
    const n = Et(e),
      s = n.documentElement,
      r = so(e) ? s : e
    if (ae(r, 'q:container') === 'paused') throw H(21)
    const o = t ?? (r === n.documentElement ? n.body : r),
      i = st(r),
      l = cu(r, $u)
    te(r, 'q:container', 'paused')
    for (const m of l) {
      const h = m.$element$,
        b = m.li
      if (m.$scopeIds$) {
        const y = Ro(m.$scopeIds$)
        y && h.setAttribute('q:sstyle', y)
      }
      if ((m.$id$ && h.setAttribute('q:id', m.$id$), Ae(h) && b.length > 0)) {
        const y = ys(b)
        for (const $ of y) h.setAttribute($[0], Fs($[1], m))
      }
    }
    const a = await ni(l, i, m => (Ce(m) && ms(m) ? yu(m, i) : null)),
      c = n.createElement('script')
    te(c, 'type', 'qwik/json'),
      (c.textContent = mu(JSON.stringify(a.state, void 0, void 0))),
      o.appendChild(c)
    const d = Array.from(i.$events$, m => JSON.stringify(m)),
      p = n.createElement('script')
    return (
      (p.textContent = `window.qwikevents||=[];window.qwikevents.push(${d.join(
        ', ',
      )})`),
      o.appendChild(p),
      a
    )
  },
  ni = async (e, t, n, s) => {
    var w
    const r = si(t)
    s == null ||
      s.forEach((g, j) => {
        r.$seen$.add(j)
      })
    let o = !1
    for (const g of e)
      if (g.$tasks$)
        for (const j of g.$tasks$) Ao(j) && r.$resources$.push(j.$state$), zo(j)
    for (const g of e) {
      const j = g.$element$,
        E = g.li
      for (const x of E)
        if (Ae(j)) {
          const q = x[1],
            A = q.$captureRef$
          if (A) for (const k of A) M(k, r, !0)
          r.$qrls$.push(q), (o = !0)
        }
    }
    if (!o)
      return {
        state: { refs: {}, ctx: {}, objs: [], subs: [] },
        objs: [],
        funcs: [],
        qrls: [],
        resources: r.$resources$,
        mode: 'static',
      }
    let i
    for (; (i = r.$promises$).length > 0; )
      (r.$promises$ = []), await Promise.all(i)
    const l = r.$elements$.length > 0
    if (l) {
      for (const g of r.$deferElements$) Ds(g, r, g.$element$)
      for (const g of e) uu(g, r)
    }
    for (; (i = r.$promises$).length > 0; )
      (r.$promises$ = []), await Promise.all(i)
    const a = new Map(),
      c = Array.from(r.$objSet$.keys()),
      d = new Map(),
      p = g => {
        let j = ''
        if (J(g)) {
          const q = ri(g)
          if (!q) return null
          ;(g = q.value), (j += q.resolved ? '~' : '_')
        }
        if (ge(g)) {
          const q = He(g)
          if (q) (j += '!'), (g = q)
          else if (Fe(g)) {
            const A = (k => {
              let C = a.get(k)
              return (
                C === void 0 &&
                  ((C = bu(k)),
                  C || console.warn('Missing ID', k),
                  a.set(k, C)),
                C
              )
            })(g)
            return A ? '#' + A + j : null
          }
        }
        const E = d.get(g)
        if (E) return E + j
        const x = s == null ? void 0 : s.get(g)
        return x ? '*' + x : n ? n(g) : null
      },
      m = g => {
        const j = p(g)
        if (j === null) {
          if (fi(g)) {
            const E = je(d.size)
            return d.set(g, E), E
          }
          throw H(27, g)
        }
        return j
      },
      h = new Map()
    for (const g of c) {
      const j = (w = gu(g, t)) == null ? void 0 : w.$subs$
      if (!j) continue
      const E = mi(g) ?? 0,
        x = []
      1 & E && x.push(E)
      for (const q of j) {
        const A = q[1]
        ;(q[0] === 0 && Ce(A) && $e(A) && !r.$elements$.includes(oe(A))) ||
          x.push(q)
      }
      x.length > 0 && h.set(g, x)
    }
    c.sort((g, j) => (h.has(g) ? 0 : 1) - (h.has(j) ? 0 : 1))
    let b = 0
    for (const g of c) d.set(g, je(b)), b++
    if (r.$noSerialize$.length > 0) {
      const g = d.get(void 0)
      for (const j of r.$noSerialize$) d.set(j, g)
    }
    const y = []
    for (const g of c) {
      const j = h.get(g)
      if (j == null) break
      y.push(j.map(E => (typeof E == 'number' ? `_${E}` : td(E, p))).filter(oo))
    }
    y.length, h.size
    const $ = ii(c, m, p, r, t),
      f = {},
      S = {}
    for (const g of e) {
      const j = g.$element$,
        E = g.$id$,
        x = g.$refMap$,
        q = g.$props$,
        A = g.$contexts$,
        k = g.$tasks$,
        C = g.$componentQrl$,
        I = g.$seq$,
        Q = {},
        ce = $e(j) && r.$elements$.includes(g)
      if (x.length > 0) {
        const W = Ne(x, m, ' ')
        W && (S[E] = W)
      } else if (l) {
        let W = !1
        if (ce) {
          const P = p(q)
          ;(Q.h = m(C) + (P ? ' ' + P : '')), (W = !0)
        } else {
          const P = p(q)
          P && ((Q.h = ' ' + P), (W = !0))
        }
        if (k && k.length > 0) {
          const P = Ne(k, p, ' ')
          P && ((Q.w = P), (W = !0))
        }
        if (ce && I && I.length > 0) {
          const P = Ne(I, m, ' ')
          ;(Q.s = P), (W = !0)
        }
        if (A) {
          const P = []
          A.forEach((Ln, Lt) => {
            const it = p(Ln)
            it && P.push(`${Lt}=${it}`)
          })
          const Te = P.join(' ')
          Te && ((Q.c = Te), (W = !0))
        }
        W && (f[E] = Q)
      }
    }
    return {
      state: { refs: S, ctx: f, objs: $, subs: y },
      objs: c,
      funcs: r.$inlinedFunctions$,
      resources: r.$resources$,
      qrls: r.$qrls$,
      mode: l ? 'render' : 'listeners',
    }
  },
  Ne = (e, t, n) => {
    let s = ''
    for (const r of e) {
      const o = t(r)
      o !== null && (s !== '' && (s += n), (s += o))
    }
    return s
  },
  cu = (e, t) => {
    const n = [],
      s = t(e)
    s !== void 0 && n.push(s)
    const r = e.ownerDocument.createTreeWalker(e, 129, {
      acceptNode(o) {
        if (hu(o)) return 2
        const i = t(o)
        return i !== void 0 && n.push(i), 3
      },
    })
    for (; r.nextNode(); );
    return n
  },
  uu = (e, t) => {
    var r
    const n = e.$parentCtx$,
      s = e.$props$
    if (n && s && !oi(s) && t.$elements$.includes(n)) {
      const o = (r = Z(s)) == null ? void 0 : r.$subs$,
        i = e.$element$
      if (o)
        for (const [l, a] of o)
          l === 0
            ? (a !== i && nt(Z(s), t, !1), Ce(a) ? pu(a, t) : M(a, t, !0))
            : (M(s, t, !1), nt(Z(s), t, !1))
    }
  },
  si = e => ({
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
  du = (e, t) => {
    const n = oe(e)
    t.$elements$.includes(n) ||
      (t.$elements$.push(n),
      t.$prefetch$++,
      8 & n.$flags$ ? Ds(n, t, !0) : t.$deferElements$.push(n),
      t.$prefetch$--)
  },
  pu = (e, t) => {
    const n = oe(e)
    if (n) {
      if (t.$elements$.includes(n)) return
      t.$elements$.push(n), Ds(n, t, e)
    }
  },
  Ds = (e, t, n) => {
    if (
      (e.$props$ &&
        !oi(e.$props$) &&
        (M(e.$props$, t, n), nt(Z(e.$props$), t, n)),
      e.$componentQrl$ && M(e.$componentQrl$, t, n),
      e.$seq$)
    )
      for (const s of e.$seq$) M(s, t, n)
    if (e.$tasks$) {
      const s = t.$containerState$.$subsManager$.$groupToManagers$
      for (const r of e.$tasks$) s.has(r) && M(r, t, n)
    }
    if (n === !0 && (Ar(e, t), e.$dynamicSlots$))
      for (const s of e.$dynamicSlots$) Ar(s, t)
  },
  Ar = (e, t) => {
    for (; e; ) {
      if (e.$contexts$) for (const n of e.$contexts$.values()) M(n, t, !0)
      e = e.$parentCtx$
    }
  },
  mu = e => e.replace(/<(\/?script)/g, '\\x3C$1'),
  nt = (e, t, n) => {
    if (t.$seen$.has(e)) return
    t.$seen$.add(e)
    const s = e.$subs$
    for (const r of s) {
      const o = r[0]
      if ((o > 0 && M(r[2], t, n), n === !0)) {
        const i = r[1]
        Ce(i) && $e(i) ? o === 0 && du(i, t) : M(i, t, !0)
      }
    }
  },
  rs = Symbol(),
  fu = e =>
    e.then(
      t => ((e[rs] = { resolved: !0, value: t }), t),
      t => ((e[rs] = { resolved: !1, value: t }), t),
    ),
  ri = e => e[rs],
  M = (e, t, n) => {
    if (e !== null) {
      const s = typeof e
      switch (s) {
        case 'function':
        case 'object': {
          const r = t.$seen$
          if (r.has(e)) return
          if ((r.add(e), di(e)))
            return t.$objSet$.add(void 0), void t.$noSerialize$.push(e)
          const o = e,
            i = He(e)
          if (i) {
            const l = (2 & mi((e = i))) == 0
            if ((n && l && nt(Z(o), t, n), pi(o))) return void t.$objSet$.add(e)
          }
          if (Ku(e, t, n)) return void t.$objSet$.add(e)
          if (J(e))
            return void t.$promises$.push(
              fu(e).then(l => {
                M(l, t, n)
              }),
            )
          if (s === 'object') {
            if (Ce(e)) return
            if (O(e)) for (let l = 0; l < e.length; l++) M(o[l], t, n)
            else if (jt(e)) for (const l in e) M(o[l], t, n)
          }
          break
        }
        case 'string':
          if (t.$seen$.has(e)) return
      }
    }
    t.$objSet$.add(e)
  },
  hu = e => Ae(e) && e.hasAttribute('q:container'),
  $u = e => {
    const t = Ps(e)
    if (Fe(t)) {
      const n = oe(t)
      if (n && n.$id$) return n
    }
  },
  gu = (e, t) => {
    if (!ge(e)) return
    if (e instanceof bt) return Z(e)
    const n = t.$proxyMap$.get(e)
    return n ? Z(n) : void 0
  },
  bu = e => {
    const t = oe(e)
    return t ? t.$id$ : null
  },
  yu = (e, t) => {
    const n = e.previousSibling
    if (n && qt(n) && n.data.startsWith('t=')) return '#' + n.data.slice(2)
    const s = e.ownerDocument,
      r = je(t.$elementIndex$++),
      o = s.createComment(`t=${r}`),
      i = s.createComment(''),
      l = e.parentElement
    return l.insertBefore(o, e), l.insertBefore(i, e.nextSibling), '#' + r
  },
  oi = e => Object.keys(e).length === 0
function ii(e, t, n, s, r) {
  return e.map(o => {
    if (o === null) return null
    const i = typeof o
    switch (i) {
      case 'undefined':
        return In
      case 'number':
        if (!Number.isFinite(o)) break
        return o
      case 'string':
        if (o.charCodeAt(0) < 32) break
        return o
      case 'boolean':
        return o
    }
    const l = Ju(o, t, s, r)
    if (l !== void 0) return l
    if (i === 'object') {
      if (O(o)) return o.map(t)
      if (jt(o)) {
        const a = {}
        for (const c in o)
          if (n) {
            const d = n(o[c])
            d !== null && (a[c] = d)
          } else a[c] = t(o[c])
        return a
      }
    }
    throw H(3, o)
  })
}
const z = (e, t, n = me) => Nn(null, t, e, null, null, n, null),
  dn = (e, t = me) => Nn(null, e, null, null, null, t, null),
  Os = (e, t = {}) => {
    let n = e.$symbol$,
      s = e.$chunk$
    const r = e.$refSymbol$ ?? n,
      o = wn()
    if (o) {
      const c = o.chunkForSymbol(r, s)
      c && ((s = c[1]), e.$refSymbol$ || (n = c[0]))
    }
    if (!s) throw H(31, e.$symbol$)
    s.startsWith('./') && (s = s.slice(2))
    let i = `${s}#${n}`
    const l = e.$capture$,
      a = e.$captureRef$
    return (
      a && a.length
        ? t.$getObjId$
          ? (i += `[${Ne(a, t.$getObjId$, ' ')}]`)
          : t.$addRefMap$ && (i += `[${Ne(a, t.$addRefMap$, ' ')}]`)
        : l && l.length > 0 && (i += `[${l.join(' ')}]`),
      i
    )
  },
  Fs = (e, t) => {
    t.$element$
    const n = { $addRefMap$: s => vu(t.$refMap$, s) }
    return Ne(
      e,
      s => Os(s, n),
      `
`,
    )
  },
  zn = (e, t) => {
    const n = e.length,
      s = Tr(e, 0, '#'),
      r = Tr(e, s, '['),
      o = Math.min(s, r),
      i = e.substring(0, o),
      l = s == n ? s : s + 1,
      a = l == r ? 'default' : e.substring(l, r),
      c = r === n ? me : e.substring(r + 1, n - 1).split(' '),
      d = Nn(i, a, null, null, c, null, null)
    return t && d.$setContainer$(t), d
  },
  Tr = (e, t, n) => {
    const s = e.length,
      r = e.indexOf(n, t == s ? 0 : t)
    return r == -1 ? s : r
  },
  vu = (e, t) => {
    const n = e.indexOf(t)
    return n === -1 ? (e.push(t), String(e.length - 1)) : String(n)
  },
  li = (e, t) => (
    e.$capture$,
    (e.$captureRef$ = e.$capture$.map(n => {
      const s = parseInt(n, 10),
        r = t.$refMap$[s]
      return t.$refMap$.length > s, r
    }))
  ),
  wu = e => ({
    __brand: 'resource',
    value: void 0,
    loading: !we(),
    _resolved: void 0,
    _error: void 0,
    _state: 'pending',
    _timeout: (e == null ? void 0 : e.timeout) ?? -1,
    _cache: 0,
  }),
  _u = e => ge(e) && e.__brand === 'resource',
  xu = (e, t) => {
    const n = e._state
    return n === 'resolved'
      ? `0 ${t(e._resolved)}`
      : n === 'pending'
        ? '1'
        : `2 ${t(e._error)}`
  },
  ku = e => {
    const [t, n] = e.split(' '),
      s = wu(void 0)
    return (
      (s.value = Promise.resolve()),
      t === '0'
        ? ((s._state = 'resolved'), (s._resolved = n), (s.loading = !1))
        : t === '1'
          ? ((s._state = 'pending'),
            (s.value = new Promise(() => {})),
            (s.loading = !0))
          : t === '2' &&
            ((s._state = 'rejected'), (s._error = n), (s.loading = !1)),
      s
    )
  },
  Oe = e => _(De, { 'q:s': '' }, 0, e.name ?? ''),
  In = ''
function F(e) {
  return {
    $prefixCode$: e.$prefix$.charCodeAt(0),
    $prefixChar$: e.$prefix$,
    $test$: e.$test$,
    $serialize$: e.$serialize$,
    $prepare$: e.$prepare$,
    $fill$: e.$fill$,
    $collect$: e.$collect$,
    $subs$: e.$subs$,
  }
}
const Su = F({
    $prefix$: '',
    $test$: e => fi(e),
    $collect$: (e, t, n) => {
      if (e.$captureRef$) for (const s of e.$captureRef$) M(s, t, n)
      t.$prefetch$ === 0 && t.$qrls$.push(e)
    },
    $serialize$: (e, t) => Os(e, { $getObjId$: t }),
    $prepare$: (e, t) => zn(e, t.$containerEl$),
    $fill$: (e, t) => {
      e.$capture$ &&
        e.$capture$.length > 0 &&
        ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null))
    },
  }),
  qu = F({
    $prefix$: '',
    $test$: e => Cs(e),
    $collect$: (e, t, n) => {
      M(e.$qrl$, t, n),
        e.$state$ &&
          (M(e.$state$, t, n),
          n === !0 && e.$state$ instanceof bt && nt(e.$state$[fe], t, !0))
    },
    $serialize$: (e, t) => Ya(e, t),
    $prepare$: e => Za(e),
    $fill$: (e, t) => {
      ;(e.$el$ = t(e.$el$)),
        (e.$qrl$ = t(e.$qrl$)),
        e.$state$ && (e.$state$ = t(e.$state$))
    },
  }),
  ju = F({
    $prefix$: '',
    $test$: e => _u(e),
    $collect$: (e, t, n) => {
      M(e.value, t, n), M(e._resolved, t, n)
    },
    $serialize$: (e, t) => xu(e, t),
    $prepare$: e => ku(e),
    $fill$: (e, t) => {
      if (e._state === 'resolved')
        (e._resolved = t(e._resolved)), (e.value = Promise.resolve(e._resolved))
      else if (e._state === 'rejected') {
        const n = Promise.reject(e._error)
        n.catch(() => null), (e._error = t(e._error)), (e.value = n)
      }
    },
  }),
  Eu = F({
    $prefix$: '',
    $test$: e => e instanceof URL,
    $serialize$: e => e.href,
    $prepare$: e => new URL(e),
    $fill$: void 0,
  }),
  Cu = F({
    $prefix$: '',
    $test$: e => e instanceof Date,
    $serialize$: e => e.toISOString(),
    $prepare$: e => new Date(e),
    $fill$: void 0,
  }),
  Au = F({
    $prefix$: '\x07',
    $test$: e => e instanceof RegExp,
    $serialize$: e => `${e.flags} ${e.source}`,
    $prepare$: e => {
      const t = e.indexOf(' '),
        n = e.slice(t + 1),
        s = e.slice(0, t)
      return new RegExp(n, s)
    },
    $fill$: void 0,
  }),
  Tu = F({
    $prefix$: '',
    $test$: e => e instanceof Error,
    $serialize$: e => e.message,
    $prepare$: e => {
      const t = new Error(e)
      return (t.stack = void 0), t
    },
    $fill$: void 0,
  }),
  zu = F({
    $prefix$: '',
    $test$: e => so(e),
    $serialize$: void 0,
    $prepare$: (e, t, n) => n,
    $fill$: void 0,
  }),
  pn = Symbol('serializable-data'),
  Iu = F({
    $prefix$: '',
    $test$: e => $i(e),
    $serialize$: (e, t) => {
      const [n] = e[pn]
      return Os(n, { $getObjId$: t })
    },
    $prepare$: (e, t) => {
      const n = zn(e, t.$containerEl$)
      return L(n)
    },
    $fill$: (e, t) => {
      const [n] = e[pn]
      n.$capture$ &&
        n.$capture$.length > 0 &&
        ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null))
    },
  }),
  Mu = F({
    $prefix$: '',
    $test$: e => e instanceof Zn,
    $collect$: (e, t, n) => {
      if (e.$args$) for (const s of e.$args$) M(s, t, n)
    },
    $serialize$: (e, t, n) => {
      const s = $a(e)
      let r = n.$inlinedFunctions$.indexOf(s)
      return (
        r < 0 &&
          (n.$inlinedFunctions$.push(s), (r = n.$inlinedFunctions$.length - 1)),
        Ne(e.$args$, t, ' ') + ' @' + je(r)
      )
    },
    $prepare$: e => {
      const t = e.split(' '),
        n = t.slice(0, -1),
        s = t[t.length - 1]
      return new Zn(s, n, s)
    },
    $fill$: (e, t) => {
      e.$func$, (e.$func$ = t(e.$func$)), (e.$args$ = e.$args$.map(t))
    },
  }),
  Ru = F({
    $prefix$: '',
    $test$: e => e instanceof bt,
    $collect$: (e, t, n) => (
      M(e.untrackedValue, t, n), n === !0 && !(1 & e[gt]) && nt(e[fe], t, !0), e
    ),
    $serialize$: (e, t) => t(e.untrackedValue),
    $prepare$: (e, t) => {
      var n
      return new bt(
        e,
        (n = t == null ? void 0 : t.$subsManager$) == null
          ? void 0
          : n.$createManager$(),
        0,
      )
    },
    $subs$: (e, t) => {
      e[fe].$addSubs$(t)
    },
    $fill$: (e, t) => {
      e.untrackedValue = t(e.untrackedValue)
    },
  }),
  Nu = F({
    $prefix$: '',
    $test$: e => e instanceof Gn,
    $collect$(e, t, n) {
      if ((M(e.ref, t, n), pi(e.ref))) {
        const s = Z(e.ref)
        Yu(t.$containerState$.$subsManager$, s, n) && M(e.ref[e.prop], t, n)
      }
      return e
    },
    $serialize$: (e, t) => `${t(e.ref)} ${e.prop}`,
    $prepare$: e => {
      const [t, n] = e.split(' ')
      return new Gn(t, n)
    },
    $fill$: (e, t) => {
      e.ref = t(e.ref)
    },
  }),
  Lu = F({
    $prefix$: '',
    $test$: e => typeof e == 'number',
    $serialize$: e => String(e),
    $prepare$: e => Number(e),
    $fill$: void 0,
  }),
  Pu = F({
    $prefix$: '',
    $test$: e => e instanceof URLSearchParams,
    $serialize$: e => e.toString(),
    $prepare$: e => new URLSearchParams(e),
    $fill$: void 0,
  }),
  Du = F({
    $prefix$: '',
    $test$: e => typeof FormData < 'u' && e instanceof globalThis.FormData,
    $serialize$: e => {
      const t = []
      return (
        e.forEach((n, s) => {
          t.push(typeof n == 'string' ? [s, n] : [s, n.name])
        }),
        JSON.stringify(t)
      )
    },
    $prepare$: e => {
      const t = JSON.parse(e),
        n = new FormData()
      for (const [s, r] of t) n.append(s, r)
      return n
    },
    $fill$: void 0,
  }),
  Ou = F({
    $prefix$: '',
    $test$: e => rt(e),
    $collect$: (e, t, n) => {
      M(e.children, t, n), M(e.props, t, n), M(e.immutableProps, t, n)
      let s = e.type
      s === Oe ? (s = ':slot') : s === R && (s = ':fragment'), M(s, t, n)
    },
    $serialize$: (e, t) => {
      let n = e.type
      return (
        n === Oe ? (n = ':slot') : n === R && (n = ':fragment'),
        `${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.children)} ${
          e.flags
        }`
      )
    },
    $prepare$: e => {
      const [t, n, s, r, o] = e.split(' ')
      return new It(t, n, s, r, parseInt(o, 10))
    },
    $fill$: (e, t) => {
      ;(e.type = Zu(t(e.type))),
        (e.props = t(e.props)),
        (e.immutableProps = t(e.immutableProps)),
        (e.children = t(e.children))
    },
  }),
  Fu = F({
    $prefix$: '',
    $test$: e => typeof e == 'bigint',
    $serialize$: e => e.toString(),
    $prepare$: e => BigInt(e),
    $fill$: void 0,
  }),
  Ve = Symbol(),
  Wu = F({
    $prefix$: '',
    $test$: e => e instanceof Set,
    $collect$: (e, t, n) => {
      e.forEach(s => M(s, t, n))
    },
    $serialize$: (e, t) => Array.from(e).map(t).join(' '),
    $prepare$: e => {
      const t = new Set()
      return (t[Ve] = e), t
    },
    $fill$: (e, t) => {
      const n = e[Ve]
      e[Ve] = void 0
      const s = n.length === 0 ? [] : n.split(' ')
      for (const r of s) e.add(t(r))
    },
  }),
  Uu = F({
    $prefix$: '',
    $test$: e => e instanceof Map,
    $collect$: (e, t, n) => {
      e.forEach((s, r) => {
        M(s, t, n), M(r, t, n)
      })
    },
    $serialize$: (e, t) => {
      const n = []
      return (
        e.forEach((s, r) => {
          n.push(t(r) + ' ' + t(s))
        }),
        n.join(' ')
      )
    },
    $prepare$: e => {
      const t = new Map()
      return (t[Ve] = e), t
    },
    $fill$: (e, t) => {
      const n = e[Ve]
      e[Ve] = void 0
      const s = n.length === 0 ? [] : n.split(' ')
      s.length % 2
      for (let r = 0; r < s.length; r += 2) e.set(t(s[r]), t(s[r + 1]))
    },
  }),
  Hu = F({
    $prefix$: '\x1B',
    $test$: e => !!ai(e) || e === In,
    $serialize$: e => e,
    $prepare$: e => e,
    $fill$: void 0,
  }),
  Mn = [
    Su,
    qu,
    ju,
    Eu,
    Cu,
    Au,
    Tu,
    zu,
    Iu,
    Mu,
    Ru,
    Nu,
    Lu,
    Pu,
    Du,
    Ou,
    Fu,
    Wu,
    Uu,
    Hu,
  ],
  zr = (() => {
    const e = []
    return (
      Mn.forEach(t => {
        const n = t.$prefixCode$
        for (; e.length < n; ) e.push(void 0)
        e.push(t)
      }),
      e
    )
  })()
function ai(e) {
  if (typeof e == 'string') {
    const t = e.charCodeAt(0)
    if (t < zr.length) return zr[t]
  }
}
const Qu = Mn.filter(e => e.$collect$),
  Bu = e => {
    for (const t of Mn) if (t.$test$(e)) return !0
    return !1
  },
  Ku = (e, t, n) => {
    for (const s of Qu) if (s.$test$(e)) return s.$collect$(e, t, n), !0
    return !1
  },
  Ju = (e, t, n, s) => {
    for (const r of Mn)
      if (r.$test$(e)) {
        let o = r.$prefixChar$
        return r.$serialize$ && (o += r.$serialize$(e, t, n, s)), o
      }
    if (typeof e == 'string') return e
  },
  ci = (e, t) => {
    const n = new Map(),
      s = new Map()
    return {
      prepare(r) {
        const o = ai(r)
        if (o) {
          const i = o.$prepare$(r.slice(1), e, t)
          return o.$fill$ && n.set(i, o), o.$subs$ && s.set(i, o), i
        }
        return r
      },
      subs(r, o) {
        const i = s.get(r)
        return !!i && (i.$subs$(r, o, e), !0)
      },
      fill(r, o) {
        const i = n.get(r)
        return !!i && (i.$fill$(r, o, e), !0)
      },
    }
  },
  Vu = {
    '!': (e, t) => t.$proxyMap$.get(e) ?? ws(e, t),
    '~': e => Promise.resolve(e),
    _: e => Promise.reject(e),
  },
  Yu = (e, t, n) => {
    if (typeof n == 'boolean') return n
    const s = e.$groupToManagers$.get(n)
    return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== t)
  },
  Zu = e => (e === ':slot' ? Oe : e === ':fragment' ? R : e),
  Gu = (e, t) => os(e, new Set(), '_', t),
  os = (e, t, n, s) => {
    const r = Nt(e)
    if (r == null) return e
    if (Xu(r)) {
      if (t.has(r) || (t.add(r), Bu(r))) return e
      const o = typeof r
      switch (o) {
        case 'object':
          if (J(r) || Ce(r)) return e
          if (O(r)) {
            let l = 0
            return (
              r.forEach((a, c) => {
                if (c !== l) throw H(3, r)
                os(a, t, n + '[' + c + ']'), (l = c + 1)
              }),
              e
            )
          }
          if (jt(r)) {
            for (const [l, a] of Object.entries(r)) os(a, t, n + '.' + l)
            return e
          }
          break
        case 'boolean':
        case 'string':
        case 'number':
          return e
      }
      let i = ''
      if (
        ((i = s || 'Value cannot be serialized'),
        n !== '_' && (i += ` in ${n},`),
        o === 'object')
      )
        i += ` because it's an instance of "${
          e == null ? void 0 : e.constructor.name
        }". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.builder.io/docs/advanced/dollar/`
      else if (o === 'function') {
        const l = e.name
        i += ` because it's a function named "${l}". You might need to convert it to a QRL using $(fn):

const ${l} = $(${String(e)});

Please check out https://qwik.builder.io/docs/advanced/qrl/ for more information.`
      }
      console.error('Trying to serialize', e), ra(i)
    }
    return e
  },
  Ws = new WeakSet(),
  ui = new WeakSet(),
  Xu = e => (!ge(e) && !ne(e)) || !Ws.has(e),
  di = e => Ws.has(e),
  pi = e => ui.has(e),
  Rn = e => (e != null && Ws.add(e), e),
  ed = e => (ui.add(e), e),
  Nt = e => (ge(e) ? He(e) ?? e : e),
  He = e => e[Jn],
  Z = e => e[fe],
  mi = e => e[Be],
  td = (e, t) => {
    const n = e[0],
      s = typeof e[1] == 'string' ? e[1] : t(e[1])
    if (!s) return
    let r = n + ' ' + s,
      o
    if (n === 0) o = e[2]
    else {
      const i = t(e[2])
      if (!i) return
      n <= 2
        ? ((o = e[5]), (r += ` ${i} ${Ir(t(e[3]))} ${e[4]}`))
        : n <= 4 &&
          ((o = e[4]),
          (r += ` ${i} ${typeof e[3] == 'string' ? e[3] : Ir(t(e[3]))}`))
    }
    return o && (r += ` ${encodeURI(o)}`), r
  },
  nd = (e, t) => {
    const n = e.split(' '),
      s = parseInt(n[0], 10)
    n.length >= 2
    const r = t(n[1])
    if (!r || (Cs(r) && !r.$el$)) return
    const o = [s, r]
    return (
      s === 0
        ? (n.length <= 3, o.push(Fn(n[2])))
        : s <= 2
          ? (n.length === 5 || n.length,
            o.push(t(n[2]), t(n[3]), n[4], Fn(n[5])))
          : s <= 4 &&
            (n.length === 4 || n.length, o.push(t(n[2]), t(n[3]), Fn(n[4]))),
      o
    )
  },
  Fn = e => {
    if (e !== void 0) return decodeURI(e)
  },
  sd = e => {
    const t = new Map()
    return {
      $groupToManagers$: t,
      $createManager$: s => new rd(t, e, s),
      $clearSub$: s => {
        const r = t.get(s)
        if (r) {
          for (const o of r) o.$unsubGroup$(s)
          t.delete(s), (r.length = 0)
        }
      },
      $clearSignal$: s => {
        const r = t.get(s[1])
        if (r) for (const o of r) o.$unsubEntry$(s)
      },
    }
  }
class rd {
  constructor(t, n, s) {
    ;(this.$groupToManagers$ = t),
      (this.$containerState$ = n),
      (this.$subs$ = []),
      s && this.$addSubs$(s)
  }
  $addSubs$(t) {
    this.$subs$.push(...t)
    for (const n of this.$subs$) this.$addToGroup$(n[1], this)
  }
  $addToGroup$(t, n) {
    let s = this.$groupToManagers$.get(t)
    s || this.$groupToManagers$.set(t, (s = [])), s.includes(n) || s.push(n)
  }
  $unsubGroup$(t) {
    const n = this.$subs$
    for (let s = 0; s < n.length; s++) n[s][1] === t && (n.splice(s, 1), s--)
  }
  $unsubEntry$(t) {
    const [n, s, r, o] = t,
      i = this.$subs$
    if (n === 1 || n === 2) {
      const l = t[4]
      for (let a = 0; a < i.length; a++) {
        const c = i[a]
        c[0] === n &&
          c[1] === s &&
          c[2] === r &&
          c[3] === o &&
          c[4] === l &&
          (i.splice(a, 1), a--)
      }
    } else if (n === 3 || n === 4)
      for (let l = 0; l < i.length; l++) {
        const a = i[l]
        a[0] === n &&
          a[1] === s &&
          a[2] === r &&
          a[3] === o &&
          (i.splice(l, 1), l--)
      }
  }
  $addSub$(t, n) {
    const s = this.$subs$,
      r = t[1]
    ;(t[0] === 0 && s.some(([o, i, l]) => o === 0 && i === r && l === n)) ||
      (s.push([...t, n]), this.$addToGroup$(r, this))
  }
  $notifySubs$(t) {
    const n = this.$subs$
    for (const s of n) {
      const r = s[s.length - 1]
      ;(t && r && r !== t) || La(s, this.$containerState$)
    }
  }
}
const Ir = e => {
    if (e == null) throw ht('must be non null', e)
    return e
  },
  fi = e => typeof e == 'function' && typeof e.getSymbol == 'function',
  Nn = (e, t, n, s, r, o, i) => {
    let l
    const a = async function (...$) {
        return await m.call(this, _e())(...$)
      },
      c = $ => (l || (l = $), l),
      d = async $ => {
        if (($ && c($), n !== null)) return n
        if (s !== null) return (n = s().then(f => (a.resolved = n = f[t])))
        {
          const f = wn().importSymbol(l, e, t)
          return (n = N(f, S => (a.resolved = n = S)))
        }
      },
      p = $ => (n !== null ? n : d($))
    function m($, f) {
      return (...S) => {
        const w = ld(),
          g = p()
        return N(g, j => {
          if (ne(j)) {
            if (f && f() === !1) return
            const E = { ...h($), $qrl$: a }
            return (
              E.$event$ === void 0 && (E.$event$ = this),
              od(t, E.$element$, w),
              G.call(this, E, j, ...S)
            )
          }
          throw H(10)
        })
      }
    }
    const h = $ => ($ == null ? le() : O($) ? Mo($) : $),
      b = i ?? t,
      y = hi(b)
    return (
      Object.assign(a, {
        getSymbol: () => b,
        getHash: () => y,
        getCaptured: () => o,
        resolve: d,
        $resolveLazy$: p,
        $setContainer$: c,
        $chunk$: e,
        $symbol$: t,
        $refSymbol$: i,
        $hash$: y,
        getFn: m,
        $capture$: r,
        $captureRef$: o,
        dev: null,
        resolved: void 0,
      }),
      a
    )
  },
  hi = e => {
    const t = e.lastIndexOf('_')
    return t > -1 ? e.slice(t + 1) : e
  }
const Mr = new Set(),
  od = (e, t, n) => {
    Mr.has(e) ||
      (Mr.add(e), id('qsymbol', { symbol: e, element: t, reqTime: n }))
  },
  id = (e, t) => {
    we() ||
      typeof document != 'object' ||
      document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }))
  },
  ld = () =>
    we() ? 0 : typeof performance == 'object' ? performance.now() : 0,
  Rr = e => e,
  L = e => {
    function t(n, s, r) {
      const o = e.$hash$.slice(0, 4)
      return _(
        De,
        {
          'q:renderFn': e,
          [se]: n[se],
          [v]: n[v],
          children: n.children,
          props: n,
        },
        r,
        o + ':' + (s || ''),
      )
    }
    return (t[pn] = [e]), t
  },
  $i = e => typeof e == 'function' && e[pn] !== void 0,
  Ft = (e, t) => {
    const { val: n, set: s, iCtx: r } = Ue()
    if (n != null) return n
    const o = ne(e) ? G(void 0, e) : e
    if ((t == null ? void 0 : t.reactive) === !1) return s(o), o
    {
      const i = ws(
        o,
        r.$renderCtx$.$static$.$containerState$,
        (t == null ? void 0 : t.deep) ?? !0 ? 1 : 0,
      )
      return s(i), i
    }
  }
function Us(e, t) {
  var s
  const n = _e()
  return (
    ((s = n == null ? void 0 : n.$renderCtx$) == null
      ? void 0
      : s.$static$.$containerState$.$serverData$[e]) ?? t
  )
}
const Nr = new Map(),
  ad = (e, t) => {
    let n = Nr.get(t)
    return n || Nr.set(t, (n = cd(e, t))), n
  },
  cd = (e, t) => {
    const n = e.length,
      s = [],
      r = []
    let o = 0,
      i = o,
      l = Ye,
      a = 0
    for (; o < n; ) {
      const h = o
      let b = e.charCodeAt(o++)
      b === bd && (o++, (b = _i))
      const y = xd[l]
      for (let $ = 0; $ < y.length; $++) {
        const f = y[$],
          [S, w, g] = f
        if (
          (S === a || S === T || (S === mn && Bt(a)) || (S === is && Pr(a))) &&
          (w === b ||
            w === T ||
            (w === mn && Bt(b)) ||
            (w === be && !Bt(b) && b !== Qs) ||
            (w === is && Pr(b))) &&
          (f.length == 3 || p(f))
        ) {
          if ((f.length > 3 && (b = e.charCodeAt(o - 1)), g === K || g == Me)) {
            g === Me &&
              (l !== gi || m()
                ? Lr(b) || d(o - (w == be ? 1 : w == ls ? 2 : 0))
                : (Lr(b) ? c(o - 2) : d(o - 2), i++)),
              w === be && (o--, (b = a))
            do (l = r.pop() || Ye), l === Re && (c(o - 1), i++)
            while (ud(l))
          } else
            r.push(l),
              l === Re && g === Ye ? (c(o - 8), (i = o)) : g === bi && d(h),
              (l = g)
          break
        }
      }
      a = b
    }
    return c(o), s.join('')
    function c(h) {
      s.push(e.substring(i, h)), (i = h)
    }
    function d(h) {
      l === Re || m() || (c(h), s.push('.', '⭐️', t))
    }
    function p(h) {
      let b = 0
      if (e.charCodeAt(o) === as) {
        for (let y = 1; y < 10; y++)
          if (e.charCodeAt(o + y) === as) {
            b = y + 1
            break
          }
      }
      e: for (let y = 3; y < h.length; y++) {
        const $ = h[y]
        for (let f = 0; f < $.length; f++)
          if ((e.charCodeAt(o + f + b) | vd) !== $.charCodeAt(f)) continue e
        return (o += $.length + b), !0
      }
      return !1
    }
    function m() {
      return r.indexOf(Re) !== -1 || r.indexOf(Hs) !== -1
    }
  },
  Bt = e =>
    (e >= hd && e <= $d) ||
    (e >= _i && e <= gd) ||
    (e >= wd && e <= _d) ||
    e >= 128 ||
    e === yd ||
    e === as,
  Lr = e => e === Qe || e === Qs || e === xi || e === wi || Bt(e),
  ud = e => e === yi || e === Hs || e === vi || e === Re,
  Pr = e => e === fd || e === dd || e === pd || e === md,
  Ye = 0,
  gi = 2,
  Re = 5,
  bi = 6,
  Hs = 10,
  yi = 11,
  vi = 12,
  K = 17,
  Me = 18,
  T = 0,
  mn = 1,
  be = 2,
  is = 3,
  dd = 9,
  pd = 10,
  md = 13,
  fd = 32,
  wi = 35,
  ls = 41,
  as = 45,
  Qs = 46,
  hd = 48,
  $d = 57,
  Qe = 58,
  _i = 65,
  gd = 90,
  xi = 91,
  bd = 92,
  yd = 95,
  vd = 32,
  wd = 97,
  _d = 122,
  ze = [
    [T, 39, 14],
    [T, 34, 15],
    [T, 47, 16, '*'],
  ],
  xd = [
    [
      [T, 42, gi],
      [T, xi, 7],
      [T, Qe, bi, ':', 'before', 'after', 'first-letter', 'first-line'],
      [T, Qe, Re, 'global'],
      [T, Qe, 3, 'has', 'host-context', 'not', 'where', 'is', 'matches', 'any'],
      [T, Qe, 4],
      [T, mn, 1],
      [T, Qs, 1],
      [T, wi, 1],
      [T, 64, Hs, 'keyframe'],
      [T, 64, yi, 'media', 'supports'],
      [T, 64, vi],
      [T, 123, 13],
      [47, 42, 16],
      [T, 59, K],
      [T, 125, K],
      [T, ls, K],
      ...ze,
    ],
    [[T, be, Me]],
    [[T, be, Me]],
    [
      [T, 40, Ye],
      [T, be, Me],
    ],
    [
      [T, 40, 8],
      [T, be, Me],
    ],
    [
      [T, 40, Ye],
      [T, be, K],
    ],
    [[T, be, K]],
    [
      [T, 93, Me],
      [T, 39, 14],
      [T, 34, 15],
    ],
    [[T, ls, K], ...ze],
    [[T, 125, K], ...ze],
    [[T, 125, K], [is, mn, 1], [T, Qe, Re, 'global'], [T, 123, 13], ...ze],
    [[T, 123, Ye], [T, 59, K], ...ze],
    [[T, 59, K], [T, 123, 9], ...ze],
    [[T, 125, K], [T, 123, 13], [T, 40, 8], ...ze],
    [[T, 39, K]],
    [[T, 34, K]],
    [[42, 47, K]],
  ],
  kd = e => {
    ki(e, t => t, !1)
  },
  ot = e => ({ scopeId: '⭐️' + ki(e, ad, !0) }),
  ki = (e, t, n) => {
    const { val: s, set: r, iCtx: o, i, elCtx: l } = Ue()
    if (s) return s
    const a = lc(e, i),
      c = o.$renderCtx$.$static$.$containerState$
    if (
      (r(a),
      l.$appendStyles$ || (l.$appendStyles$ = []),
      l.$scopeIds$ || (l.$scopeIds$ = []),
      n && l.$scopeIds$.push(ac(a)),
      c.$styleIds$.has(a))
    )
      return a
    c.$styleIds$.add(a)
    const d = e.$resolveLazy$(c.$containerEl$),
      p = m => {
        l.$appendStyles$,
          l.$appendStyles$.push({ styleId: a, content: t(m, a) })
      }
    return J(d) ? o.$waitOn$.push(d.then(p)) : p(d), a
  },
  pe = e => {
    const { val: t, set: n, iCtx: s } = Ue()
    if (t != null) return t
    const r = s.$renderCtx$.$static$.$containerState$,
      o = ne(e) && !$i(e) ? G(void 0, e) : e
    return n(ga(o, r, 0, void 0))
  }
/**
 * @license
 * @builder.io/qwik/server 1.2.18
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ var Sd = (e =>
  typeof require < 'u'
    ? require
    : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, n) => (typeof require < 'u' ? require : t)[n] })
      : e)(function (e) {
  if (typeof require < 'u') return require.apply(this, arguments)
  throw Error('Dynamic require of "' + e + '" is not supported')
})
function Si(e, t) {
  const n = t == null ? void 0 : t.mapper,
    s = e.symbolMapper
      ? e.symbolMapper
      : o => {
          var i
          if (n) {
            const l = cs(o),
              a = n[l]
            if (!a) {
              if (
                (i = globalThis.__qwik_reg_symbols) == null ? void 0 : i.has(l)
              )
                return [o, '_']
              console.error('Cannot resolve symbol', o, 'in', n)
            }
            return a
          }
        }
  return {
    isServer: !0,
    async importSymbol(o, i, l) {
      var m
      const a = cs(l),
        c = (m = globalThis.__qwik_reg_symbols) == null ? void 0 : m.get(a)
      if (c) return c
      let d = String(i)
      d.endsWith('.js') || (d += '.js')
      const p = Sd(d)
      if (!(l in p))
        throw new Error(`Q-ERROR: missing symbol '${l}' in module '${d}'.`)
      return p[l]
    },
    raf: () => (console.error('server can not rerender'), Promise.resolve()),
    nextTick: o =>
      new Promise(i => {
        setTimeout(() => {
          i(o())
        })
      }),
    chunkForSymbol(o) {
      return s(o, n)
    },
  }
}
async function qd(e, t) {
  const n = Si(e, t)
  ro(n)
}
var cs = e => {
  const t = e.lastIndexOf('_')
  return t > -1 ? e.slice(t + 1) : e
}
function Wn() {
  if (typeof performance > 'u') return () => 0
  const e = performance.now()
  return () => (performance.now() - e) / 1e6
}
function qi(e) {
  let t = e.base
  return (
    typeof e.base == 'function' && (t = e.base(e)),
    typeof t == 'string' ? (t.endsWith('/') || (t += '/'), t) : '/build/'
  )
}
var jd = `((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,
  Ed = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,
  Cd = `((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,
  Ad = `(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`
function Td(e = {}) {
  return Array.isArray(e.events) && e.events.length > 0
    ? (e.debug ? Ad : Cd).replace('window.qEvents', JSON.stringify(e.events))
    : e.debug
      ? Ed
      : jd
}
function zd(e, t, n) {
  if (!n) return []
  const s = t.prefetchStrategy,
    r = qi(t)
  if (s !== null) {
    if (!s || !s.symbolsToPrefetch || s.symbolsToPrefetch === 'auto')
      return Id(e, n, r)
    if (typeof s.symbolsToPrefetch == 'function')
      try {
        return s.symbolsToPrefetch({ manifest: n.manifest })
      } catch (o) {
        console.error('getPrefetchUrls, symbolsToPrefetch()', o)
      }
  }
  return []
}
function Id(e, t, n) {
  const s = [],
    r = e == null ? void 0 : e.qrls,
    { mapper: o, manifest: i } = t,
    l = new Map()
  if (Array.isArray(r))
    for (const a of r) {
      const c = a.getHash(),
        d = o[c]
      d && ji(i, l, s, n, d[1])
    }
  return s
}
function ji(e, t, n, s, r) {
  const o = s + r
  let i = t.get(o)
  if (!i) {
    ;(i = { url: o, imports: [] }), t.set(o, i)
    const l = e.bundles[r]
    if (l && Array.isArray(l.imports))
      for (const a of l.imports) ji(e, t, i.imports, s, a)
  }
  n.push(i)
}
function Md(e) {
  if (
    e != null &&
    e.mapping != null &&
    typeof e.mapping == 'object' &&
    e.symbols != null &&
    typeof e.symbols == 'object' &&
    e.bundles != null &&
    typeof e.bundles == 'object'
  )
    return e
}
function us() {
  let r = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`
  return (
    (r += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (r += 'w.onmessage=()=>{w.terminate()};'),
    r
  )
}
function Bs(e) {
  const t = [],
    n = s => {
      if (Array.isArray(s))
        for (const r of s) t.includes(r.url) || (t.push(r.url), n(r.imports))
    }
  return n(e), t
}
function Rd(e) {
  const t = new Map()
  let n = 0
  const s = (l, a) => {
      if (Array.isArray(l))
        for (const c of l) {
          const d = t.get(c.url) || 0
          t.set(c.url, d + 1),
            n++,
            a.has(c.url) || (a.add(c.url), s(c.imports, a))
        }
    },
    r = new Set()
  for (const l of e) r.clear(), s(l.imports, r)
  const o = (n / t.size) * 2,
    i = Array.from(t.entries())
  return (
    i.sort((l, a) => a[1] - l[1]),
    i
      .slice(0, 5)
      .filter(l => l[1] > o)
      .map(l => l[0])
  )
}
function Nd(e, t, n) {
  const s = Fd(e == null ? void 0 : e.implementation),
    r = []
  return (
    s.prefetchEvent === 'always' && Ld(r, t, n),
    s.linkInsert === 'html-append' && Pd(r, t, s),
    s.linkInsert === 'js-append'
      ? Dd(r, t, s, n)
      : s.workerFetchInsert === 'always' && Od(r, t, n),
    r.length > 0 ? X(R, { children: r }) : null
  )
}
function Ld(e, t, n) {
  const s = Rd(t)
  for (const r of s)
    e.push(X('link', { rel: 'modulepreload', href: r, nonce: n }))
  e.push(
    X('script', {
      'q:type': 'prefetch-bundles',
      dangerouslySetInnerHTML:
        "document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",
      nonce: n,
    }),
  )
}
function Pd(e, t, n) {
  const s = Bs(t),
    r = n.linkRel || 'prefetch'
  for (const o of s) {
    const i = {}
    ;(i.href = o),
      (i.rel = r),
      (r === 'prefetch' || r === 'preload') &&
        o.endsWith('.js') &&
        (i.as = 'script'),
      e.push(X('link', i, void 0))
  }
}
function Dd(e, t, n, s) {
  const r = n.linkRel || 'prefetch'
  let o = ''
  n.workerFetchInsert === 'no-link-support' &&
    (o += 'let supportsLinkRel = true;'),
    (o += `const u=${JSON.stringify(Bs(t))};`),
    (o += 'u.map((u,i)=>{'),
    (o += "const l=document.createElement('link');"),
    (o += 'l.setAttribute("href",u);'),
    (o += `l.setAttribute("rel","${r}");`),
    n.workerFetchInsert === 'no-link-support' &&
      ((o += 'if(i===0){'),
      (o += 'try{'),
      (o += `supportsLinkRel=l.relList.supports("${r}");`),
      (o += '}catch(e){}'),
      (o += '}')),
    (o += 'document.body.appendChild(l);'),
    (o += '});'),
    n.workerFetchInsert === 'no-link-support' &&
      ((o += 'if(!supportsLinkRel){'), (o += us()), (o += '}')),
    n.workerFetchInsert === 'always' && (o += us()),
    e.push(
      X('script', {
        type: 'module',
        'q:type': 'link-js',
        dangerouslySetInnerHTML: o,
        nonce: s,
      }),
    )
}
function Od(e, t, n) {
  let s = `const u=${JSON.stringify(Bs(t))};`
  ;(s += us()),
    e.push(
      X('script', {
        type: 'module',
        'q:type': 'prefetch-worker',
        dangerouslySetInnerHTML: s,
        nonce: n,
      }),
    )
}
function Fd(e) {
  return e && typeof e == 'object' ? e : Wd
}
var Wd = {
    linkInsert: null,
    linkRel: null,
    workerFetchInsert: null,
    prefetchEvent: 'always',
  },
  Ud = '<!DOCTYPE html>'
async function Hd(e, t) {
  var k
  let n = t.stream,
    s = 0,
    r = 0,
    o = 0,
    i = 0,
    l = '',
    a
  const c = ((k = t.streaming) == null ? void 0 : k.inOrder) ?? {
      strategy: 'auto',
      maximunInitialChunk: 5e4,
      maximunChunk: 3e4,
    },
    d = t.containerTagName ?? 'html',
    p = t.containerAttributes ?? {},
    m = n,
    h = Wn(),
    b = qi(t),
    y = Ei(t.manifest)
  function $() {
    l && (m.write(l), (l = ''), (s = 0), o++, o === 1 && (i = h()))
  }
  function f(C) {
    const I = C.length
    ;(s += I), (r += I), (l += C)
  }
  switch (c.strategy) {
    case 'disabled':
      n = { write: f }
      break
    case 'direct':
      n = m
      break
    case 'auto':
      let C = 0,
        I = !1
      const Q = c.maximunChunk ?? 0,
        ce = c.maximunInitialChunk ?? 0
      n = {
        write(W) {
          W === '<!--qkssr-f-->'
            ? I || (I = !0)
            : W === '<!--qkssr-pu-->'
              ? C++
              : W === '<!--qkssr-po-->'
                ? C--
                : f(W),
            C === 0 && (I || s >= (o === 0 ? ce : Q)) && ((I = !1), $())
        },
      }
      break
  }
  d === 'html'
    ? n.write(Ud)
    : (n.write('<!--cq-->'),
      t.qwikLoader
        ? (t.qwikLoader.include === void 0 && (t.qwikLoader.include = 'never'),
          t.qwikLoader.position === void 0 &&
            (t.qwikLoader.position = 'bottom'))
        : (t.qwikLoader = { include: 'never' })),
    t.manifest ||
      console.warn(
        'Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.',
      ),
    await qd(t, y)
  const S = y == null ? void 0 : y.manifest.injections,
    w = S ? S.map(C => X(C.tag, C.attributes ?? {})) : void 0,
    g = Wn(),
    j = []
  let E = 0,
    x = 0
  await uc(e, {
    stream: n,
    containerTagName: d,
    containerAttributes: p,
    serverData: t.serverData,
    base: b,
    beforeContent: w,
    beforeClose: async (C, I, Q, ce) => {
      var Js, Vs, Ys, Zs, Gs, Xs, er
      E = g()
      const W = Wn()
      a = await ni(C, I, void 0, ce)
      const P = []
      if (t.prefetchStrategy !== null) {
        const ue = zd(a, t, y)
        if (ue.length > 0) {
          const tr = Nd(
            t.prefetchStrategy,
            ue,
            (Js = t.serverData) == null ? void 0 : Js.nonce,
          )
          tr && P.push(tr)
        }
      }
      const Te = JSON.stringify(a.state, void 0, void 0)
      P.push(
        X('script', {
          type: 'qwik/json',
          dangerouslySetInnerHTML: Qd(Te),
          nonce: (Vs = t.serverData) == null ? void 0 : Vs.nonce,
        }),
      ),
        a.funcs.length > 0 &&
          P.push(
            X('script', {
              'q:func': 'qwik/json',
              dangerouslySetInnerHTML: Kd(a.funcs),
              nonce: (Ys = t.serverData) == null ? void 0 : Ys.nonce,
            }),
          )
      const Ln = !a || a.mode !== 'static',
        Lt = ((Zs = t.qwikLoader) == null ? void 0 : Zs.include) ?? 'auto',
        it = Lt === 'always' || (Lt === 'auto' && Ln)
      if (it) {
        const ue = Td({
          events: (Gs = t.qwikLoader) == null ? void 0 : Gs.events,
          debug: t.debug,
        })
        P.push(
          X('script', {
            id: 'qwikloader',
            dangerouslySetInnerHTML: ue,
            nonce: (Xs = t.serverData) == null ? void 0 : Xs.nonce,
          }),
        )
      }
      const Ks = Array.from(I.$events$, ue => JSON.stringify(ue))
      if (Ks.length > 0) {
        let ue = `window.qwikevents.push(${Ks.join(', ')})`
        it || (ue = `window.qwikevents||=[];${ue}`),
          P.push(
            X('script', {
              dangerouslySetInnerHTML: ue,
              nonce: (er = t.serverData) == null ? void 0 : er.nonce,
            }),
          )
      }
      return Bd(j, C), (x = W()), X(R, { children: P })
    },
    manifestHash: (y == null ? void 0 : y.manifest.manifestHash) || 'dev',
  }),
    d !== 'html' && n.write('<!--/cq-->'),
    $()
  const q = a.resources.some(C => C._cache !== 1 / 0)
  return {
    prefetchResources: void 0,
    snapshotResult: a,
    flushes: o,
    manifest: y == null ? void 0 : y.manifest,
    size: r,
    isStatic: !q,
    timing: { render: E, snapshot: x, firstFlush: i },
    _symbols: j,
  }
}
function Ei(e) {
  if (e) {
    if ('mapper' in e) return e
    if (((e = Md(e)), e)) {
      const t = {}
      return (
        Object.entries(e.mapping).forEach(([n, s]) => {
          t[cs(n)] = [n, s]
        }),
        { mapper: t, manifest: e }
      )
    }
  }
}
var Qd = e => e.replace(/<(\/?script)/g, '\\x3C$1')
function Bd(e, t) {
  var n
  for (const s of t) {
    const r = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol()
    r && !e.includes(r) && e.push(r)
  }
}
function Kd(e) {
  return `document.currentScript.qFuncs=[${e.join(`,
`)}]`
}
async function Jd(e) {
  const t = Si({ manifest: e }, Ei(e))
  ro(t)
}
function Un(e, t) {
  var n
  return (
    ((n = t == null ? void 0 : t.getOrigin) == null ? void 0 : n.call(t, e)) ??
    (t == null ? void 0 : t.origin) ??
    process.env.ORIGIN ??
    Vd(e)
  )
}
function Vd(e) {
  const { PROTOCOL_HEADER: t, HOST_HEADER: n } = process.env,
    s = e.headers,
    r =
      (t && s[t]) ||
      (e.socket.encrypted || e.connection.encrypted ? 'https' : 'http'),
    o = n ?? (e instanceof Gi ? ':authority' : 'host'),
    i = s[o]
  return `${r}://${i}`
}
function Hn(e, t) {
  return Zd(e.originalUrl || e.url || '/', t)
}
var Yd = /\/\/|\\\\/g
function Zd(e, t) {
  return new URL(e.replace(Yd, '/'), t)
}
async function Gd(e, t, n, s, r) {
  const o = new Headers(),
    i = t.headers
  for (const m in i) {
    const h = i[m]
    if (typeof h == 'string') o.set(m, h)
    else if (Array.isArray(h)) for (const b of h) o.append(m, b)
  }
  const l = async function* () {
      for await (const m of t) yield m
    },
    a = t.method === 'HEAD' || t.method === 'GET' ? void 0 : l(),
    c = new AbortController(),
    d = {
      method: t.method,
      headers: o,
      body: a,
      signal: c.signal,
      duplex: 'half',
    }
  return (
    n.on('close', () => {
      c.abort()
    }),
    {
      mode: s,
      url: e,
      request: new Request(e.href, d),
      env: {
        get(m) {
          return process.env[m]
        },
      },
      getWritableStream: (m, h, b) => {
        ;(n.statusCode = m), h.forEach(($, f) => n.setHeader(f, $))
        const y = b.headers()
        return (
          y.length > 0 && n.setHeader('Set-Cookie', y),
          new WritableStream({
            write($) {
              n.closed ||
                n.destroyed ||
                n.write($, f => {
                  f && console.error(f)
                })
            },
            close() {
              n.end()
            },
          })
        )
      },
      getClientConn: () => (r ? r(t) : { ip: t.socket.remoteAddress }),
      platform: { ssr: !0, incomingMessage: t, node: process.versions.node },
      locale: void 0,
    }
  )
}
var Xd = {
  '3gp': 'video/3gpp',
  '3gpp': 'video/3gpp',
  asf: 'video/x-ms-asf',
  asx: 'video/x-ms-asf',
  avi: 'video/x-msvideo',
  avif: 'image/avif',
  bmp: 'image/x-ms-bmp',
  css: 'text/css',
  flv: 'video/x-flv',
  gif: 'image/gif',
  htm: 'text/html',
  html: 'text/html',
  ico: 'image/x-icon',
  jng: 'image/x-jng',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  js: 'application/javascript',
  json: 'application/json',
  kar: 'audio/midi',
  m4a: 'audio/x-m4a',
  m4v: 'video/x-m4v',
  mid: 'audio/midi',
  midi: 'audio/midi',
  mng: 'video/x-mng',
  mov: 'video/quicktime',
  mp3: 'audio/mpeg',
  mp4: 'video/mp4',
  mpeg: 'video/mpeg',
  mpg: 'video/mpeg',
  ogg: 'audio/ogg',
  pdf: 'application/pdf',
  png: 'image/png',
  rar: 'application/x-rar-compressed',
  shtml: 'text/html',
  svg: 'image/svg+xml',
  svgz: 'image/svg+xml',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  ts: 'video/mp2t',
  txt: 'text/plain',
  wbmp: 'image/vnd.wap.wbmp',
  webm: 'video/webm',
  webp: 'image/webp',
  wmv: 'video/x-ms-wmv',
  woff: 'font/woff',
  woff2: 'font/woff2',
  xml: 'text/xml',
  zip: 'application/zip',
}
function e0() {
  typeof global < 'u' &&
    typeof globalThis.fetch != 'function' &&
    typeof process < 'u' &&
    process.versions.node &&
    ((globalThis.fetch = sl),
    (globalThis.Headers = rl),
    (globalThis.Request = ol),
    (globalThis.Response = il),
    (globalThis.FormData = ll)),
    typeof globalThis.TextEncoderStream > 'u' &&
      ((globalThis.TextEncoderStream = Xi),
      (globalThis.TextDecoderStream = el)),
    typeof globalThis.WritableStream > 'u' &&
      ((globalThis.WritableStream = tl), (globalThis.ReadableStream = nl)),
    typeof globalThis.crypto > 'u' && (globalThis.crypto = al.webcrypto)
}
function t0(e) {
  var t
  e0()
  const n = {
    _deserializeData: Ea,
    _serializeData: lu,
    _verifySerializable: Gu,
  }
  e.manifest && Jd(e.manifest)
  const s =
    ((t = e.static) == null ? void 0 : t.root) ??
    Pt(Zi(import.meta.url), '..', '..', 'dist')
  return {
    router: async (l, a, c) => {
      try {
        const d = Un(l, e),
          p = await Gd(Hn(l, d), l, a, 'server', e.getClientConn),
          m = await Xl(p, e, n)
        if (m) {
          const h = await m.completion
          if (h) throw h
          if (m.requestEv.headersSent) return
        }
        c()
      } catch (d) {
        console.error(d), c(d)
      }
    },
    notFound: async (l, a, c) => {
      try {
        if (!a.headersSent) {
          const d = Un(l, e),
            p = Hn(l, d),
            m = Bi(p.pathname)
          a.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8',
            'X-Not-Found': p.pathname,
          }),
            a.end(m)
        }
      } catch (d) {
        console.error(d), c(d)
      }
    },
    staticFile: async (l, a, c) => {
      var d
      try {
        const p = Un(l, e),
          m = Hn(l, p)
        if (Ki(l.method || 'GET', m)) {
          const h = m.pathname
          let b
          Vi(h).includes('.')
            ? (b = Pt(s, h))
            : e.qwikCityPlan.trailingSlash
              ? (b = Pt(s, h + 'index.html'))
              : (b = Pt(s, h, 'index.html'))
          const y = Ji(b),
            $ = Yi(b).replace(/^\./, ''),
            f = Xd[$]
          f && a.setHeader('Content-Type', f),
            (d = e.static) != null &&
              d.cacheControl &&
              a.setHeader('Cache-Control', e.static.cacheControl),
            y.on('error', c),
            y.pipe(a)
          return
        }
        return c()
      } catch (p) {
        console.error(p), c(p)
      }
    },
  }
}
const n0 = e => {
    const t = pe(),
      n = pe(!1),
      s = { el: t, isVisible: n, observer: null }
    return (
      Ba(dn('s_CHnWD2D8Ibg', [s])),
      _(
        R,
        {
          children: u(
            'div',
            {
              class: `w-full animation ${e.pop && 'pop'}
      ${s.isVisible.value && 'isVisible'}`,
              ref: s.el,
            },
            null,
            _(Oe, null, 3, '09_0'),
            1,
            null,
          ),
        },
        1,
        '09_1',
      )
    )
  },
  B = L(z(n0, 's_sdm0n9ZoKr0')),
  s0 = `.cat-background{position:fixed;height:170px;width:192.1px;top:50%;left:50%;margin-top:-85px;margin-left:-96px;z-index:-1;opacity:.2}.cat-background .ear{position:absolute;top:-30%;height:60%;width:25%;background:#fff}.cat-background .ear:before,.cat-background .ear:after{content:"";position:absolute;bottom:24%;height:10%;width:5%;border-radius:50%;background:#161616}.cat-background .ear:after{transform-origin:50% 100%}.cat-background .ear--left{left:-7%;border-radius:70% 30% 0% 0%/100% 100% 0% 0%;transform:rotate(-15deg)}.cat-background .ear--left:before,.cat-background .ear--left:after{right:10%}.cat-background .ear--left:after{transform:rotate(-45deg)}.cat-background .ear--right{right:-7%;border-radius:30% 70% 0% 0%/100% 100% 0% 0%;transform:rotate(15deg)}.cat-background .ear--right:before,.cat-background .ear--right:after{left:10%}.cat-background .ear--right:after{transform:rotate(45deg)}.cat-background .face{position:absolute;height:100%;width:100%;background:#161616;border-radius:50%}.cat-background .eye{position:absolute;top:35%;height:30%;width:31%;background:#fff;border-radius:50%/60% 60% 40% 40%}.cat-background .eye:after{content:"";position:absolute;top:0;left:0;height:0;width:100%;border-radius:0 0 50% 50Array/0Array 0 40% 40%;background:#161616;animation:blink 4s infinite ease-in}@keyframes blink{0%{height:0}90%{height:0}92.5%{height:100%}95%{height:0}97.5%{height:100%}to{height:0}}.cat-background .eye:before{content:"";position:absolute;top:60%;height:10%;width:15%;background:#fff;border-radius:50%}.cat-background .eye--left{left:0}.cat-background .eye--left:before{right:-5%}.cat-background .eye--right{right:0}.cat-background .eye--right:before{left:-5%}.cat-background .eye-pupil{position:absolute;top:25%;height:50%;width:20%;background:#161616;border-radius:50%;animation:look-around 4s infinite}@keyframes look-around{0%{transform:translate(0)}5%{transform:translate(50%,-25%)}10%{transform:translate(50%,-25%)}15%{transform:translate(-100%,-25%)}20%{transform:translate(-100%,-25%)}25%{transform:translate(0)}to{transform:translate(0)}}.cat-background .eye--left .eye-pupil{right:30%}.cat-background .eye--right .eye-pupil{left:30%}.cat-background .eye-pupil:after{content:"";position:absolute;top:30%;right:-5%;height:20%;width:35%;border-radius:50%;background:#fff}.cat-background .muzzle{position:absolute;top:60%;left:50%;height:6%;width:10%;background:#fff;transform:translate(-50%);border-radius:50%/30% 30% 70% 70%}
`,
  r0 = () => (
    ot(z(s0, 's_xTYSAGLBrBU')),
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'cat-background' },
          [
            u('div', null, { class: 'ear ear--left' }, null, 3, null),
            u('div', null, { class: 'ear ear--right' }, null, 3, null),
            u(
              'div',
              null,
              { class: 'face' },
              [
                u(
                  'div',
                  null,
                  { class: 'eye eye--left' },
                  u('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                u(
                  'div',
                  null,
                  { class: 'eye eye--right' },
                  u('div', null, { class: 'eye-pupil' }, null, 3, null),
                  3,
                  null,
                ),
                u('div', null, { class: 'muzzle' }, null, 3, null),
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
  o0 = L(z(r0, 's_k9rs7QcCFAU')),
  i0 = `.cat-walk-container{position:fixed;z-index:9999;transform:scale(.5);transform-origin:right bottom;animation:init-cat 3s linear 1,walk-around 20s linear 3.2s infinite;right:0;bottom:0}@keyframes init-cat{0%{bottom:83%}to{bottom:0}}@keyframes init-cat-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}.cat-walk-container #tail{position:absolute;margin-left:40px;margin-top:40px;height:60px;width:80px;border:15px solid #d3b897;border-radius:50px;display:inline-block;z-index:0}.cat-walk-container #tail-mask{position:absolute;margin-top:40px;margin-left:100px;height:30px;width:75px;background-color:#fff;z-index:0;text-align:center;padding-top:2px;padding-left:7px;color:#000}.cat-walk-container #tail-end{position:absolute;margin-top:63px;margin-left:130px;height:17px;width:17px;border-radius:50%;background-color:#d3b897;z-index:1}.cat-walk-container #body{position:relative;height:130px;width:110px;background-color:#e9cba7;border-radius:22px;display:inline-block;overflow:hide;z-index:1}.cat-walk-container .ear{position:relative;margin-top:-20px;height:45px;width:50px;background-color:#e9cba7;display:inline-block;z-index:2}.cat-walk-container #ear-left{-webkit-clip-path:polygon(0 0,0% 100%,100% 60%);clip-path:polygon(0 0,0% 100%,100% 60%)}.cat-walk-container #ear-right{margin-left:6px;-webkit-clip-path:polygon(100% 0,0% 60%,100% 100%);clip-path:polygon(100% 0,0% 60%,100% 100%)}.cat-walk-container .ear-inner{position:relative;height:30px;width:50px;background-color:#d3b897;z-index:3}.cat-walk-container #ear-inner-left{margin-top:8px;margin-left:5px;-webkit-clip-path:polygon(0 0,100% 90%,0 100%);clip-path:polygon(0 0,100% 90%,0 100%)}.cat-walk-container #ear-inner-right{margin-top:8px;margin-left:-4px;-webkit-clip-path:polygon(100% 0%,100% 100%,0 90%);clip-path:polygon(100% 0%,100% 100%,0 90%)}.cat-walk-container #mask{position:relative;background-color:#e9cba7;margin-top:-29px;height:50px;width:110px;border-radius:50%;z-index:4}.cat-walk-container #patch{position:relative;margin-top:-50px;z-index:5}.cat-walk-container .fur{width:5px;background-color:#c0a98b;display:inline-block}.cat-walk-container .fur:first-of-type{margin-left:40%;height:15px;float:left}.cat-walk-container .fur:nth-of-type(2){margin-left:4px;height:5px;float:left}.cat-walk-container .fur:nth-of-type(3){margin-left:4px;height:10px;float:left}.cat-walk-container #eyes{position:relative;margin-top:30%;z-index:5}.cat-walk-container .eye{height:18px;width:18px;border-radius:50%;background-color:#554d44;display:inline-block}.cat-walk-container #eye-left{margin-left:27%}.cat-walk-container #eye-right{margin-left:10%}.cat-walk-container .shine{height:7px;width:7px;border-radius:50%;background-color:#fff;margin-top:2px;margin-left:1px}.cat-walk-container #whisk-left{display:inline-block}.cat-walk-container .whisker{height:3px;width:25px;background-color:#d3b897;margin-bottom:6px}.cat-walk-container #whisk-one{transform:rotate(15deg)}.cat-walk-container #whisk-three{transform:rotate(-15deg)}.cat-walk-container #nose{position:absolute;margin-left:15%;height:17px;width:18px;background-color:#554d44;-webkit-clip-path:ellipse(40% 22% at 50% 50%);clip-path:ellipse(40% 22% at 50% 50%);display:inline-block;z-index:6}.cat-walk-container #whisk-right{display:inline-block;margin-left:56px}.cat-walk-container #whisk-four{transform:rotate(-15deg)}.cat-walk-container #whisk-six{transform:rotate(15deg)}.cat-walk-container #smile{position:relative;margin-left:29%;margin-top:-22%;z-index:5}.cat-walk-container #smile-left-align{display:inline-block;position:absolute}.cat-walk-container #smile-left{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-left{margin-top:-58%;height:4px;width:20px;background-color:#e9cba7}.cat-walk-container #smile-right-align{display:inline-block;margin-left:22px;position:absolute}.cat-walk-container #smile-right{height:10px;width:20px;border-radius:0 0 10px 10px;background-color:#e9cba7;border:2px solid #554d44}.cat-walk-container #mask-right{margin-top:-58%;height:4px;width:24px;background-color:#e9cba7}.cat-walk-container #tongue{position:relative;margin-top:7px;margin-left:auto;margin-right:auto;height:17px;width:15px;border-radius:25px;background-color:#fc90a5;z-index:4}.cat-walk-container #tummy{margin-top:13%;margin-left:auto;margin-right:auto;height:30px;width:60px;border-radius:50px 50px 0 0;background-color:#f4e7d1}.cat-walk-container #credit{position:absolute;font-family:sans-serif;font-size:12px;color:#b9b9b9;margin-top:70px;left:20px}
`,
  l0 = () => (
    ot(z(i0, 's_ik8BQrQgw9g')),
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'cat-walk-container' },
          [
            u('div', null, { id: 'tail' }, null, 3, null),
            u('div', null, { id: 'tail-mask' }, 'WOW', 3, null),
            u('div', null, { id: 'tail-end' }, null, 3, null),
            u(
              'div',
              null,
              { id: 'body' },
              [
                u(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-left' },
                  u(
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
                u(
                  'div',
                  null,
                  { class: 'ear', id: 'ear-right' },
                  u(
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
                u('div', null, { id: 'mask' }, null, 3, null),
                u(
                  'div',
                  null,
                  { id: 'patch' },
                  [
                    u('div', null, { class: 'fur' }, null, 3, null),
                    u('div', null, { class: 'fur' }, null, 3, null),
                    u('div', null, { class: 'fur' }, null, 3, null),
                  ],
                  3,
                  null,
                ),
                u(
                  'div',
                  null,
                  { id: 'eyes' },
                  [
                    u(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-left' },
                      u(
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
                    u(
                      'div',
                      null,
                      { class: 'eye', id: 'eye-right' },
                      u(
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
                u(
                  'div',
                  null,
                  { id: 'whisk-left' },
                  [
                    u(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-one' },
                      null,
                      3,
                      null,
                    ),
                    u('div', null, { class: 'whisker' }, null, 3, null),
                    u(
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
                u('div', null, { id: 'nose' }, null, 3, null),
                u(
                  'div',
                  null,
                  { id: 'whisk-right' },
                  [
                    u(
                      'div',
                      null,
                      { class: 'whisker', id: 'whisk-four' },
                      null,
                      3,
                      null,
                    ),
                    u('div', null, { class: 'whisker' }, null, 3, null),
                    u(
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
                u(
                  'div',
                  null,
                  { id: 'smile' },
                  [
                    u(
                      'div',
                      null,
                      { id: 'smile-left-align' },
                      [
                        u('div', null, { id: 'smile-left' }, null, 3, null),
                        u('div', null, { id: 'mask-left' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                    u(
                      'div',
                      null,
                      { id: 'smile-right-align' },
                      [
                        u('div', null, { id: 'smile-right' }, null, 3, null),
                        u('div', null, { id: 'mask-right' }, null, 3, null),
                      ],
                      3,
                      null,
                    ),
                  ],
                  3,
                  null,
                ),
                u('div', null, { id: 'tongue' }, null, 3, null),
                u('div', null, { id: 'tummy' }, null, 3, null),
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
  a0 = L(z(l0, 's_0DhRUxBQU40')),
  c0 =
    '((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',
  Ci = Se('qc-s'),
  u0 = Se('qc-c'),
  Ai = Se('qc-ic'),
  Ti = Se('qc-h'),
  zi = Se('qc-l'),
  Ii = Se('qc-n'),
  d0 = Se('qc-a'),
  p0 = Se('qc-ir'),
  m0 = e => {
    const t = window,
      n = location.pathname + location.search,
      s = '_qCitySPA',
      r = '_qCityHistoryPatch',
      o = '_qCityBootstrap',
      i = '_qCityInitPopstate',
      l = '_qCityInitAnchors',
      a = '_qCityInitVisibility',
      c = '_qCityInitScroll',
      d = '_qCityScrollEnabled',
      p = '_qCityScrollDebounce',
      m = '_qCityScroll',
      h = $ => {
        $ && t.scrollTo($.x, $.y)
      },
      b = () => {
        const $ = document.documentElement
        return {
          x: $.scrollLeft,
          y: $.scrollTop,
          w: Math.max($.scrollWidth, $.clientWidth),
          h: Math.max($.scrollHeight, $.clientHeight),
        }
      },
      y = $ => {
        const f = history.state || {}
        ;(f[m] = $ || b()), history.replaceState(f, '')
      }
    if (!t[s] && !t[i] && !t[l] && !t[a] && !t[c]) {
      if (
        (y(),
        (t[i] = () => {
          var $
          if (!t[s]) {
            if (
              ((t[d] = !1),
              clearTimeout(t[p]),
              n !== location.pathname + location.search)
            ) {
              const S = e
                .closest('[q\\:container]')
                .querySelector('a[q\\:key="AD_1"]')
              if (S) {
                const w = S.closest('[q\\:container]'),
                  g = S.cloneNode()
                g.setAttribute('q:nbs', ''),
                  (g.style.display = 'none'),
                  w.appendChild(g),
                  (t[o] = g),
                  g.click()
              } else location.reload()
            } else if (history.scrollRestoration === 'manual') {
              const f = ($ = history.state) == null ? void 0 : $[m]
              h(f), (t[d] = !0)
            }
          }
        }),
        !t[r])
      ) {
        t[r] = !0
        const $ = history.pushState,
          f = history.replaceState,
          S = w => (
            w === null || typeof w > 'u'
              ? (w = {})
              : (w == null ? void 0 : w.constructor) !== Object &&
                (w = { _data: w }),
            (w._qCityScroll = w._qCityScroll || b()),
            w
          )
        ;(history.pushState = (w, g, j) => (
          (w = S(w)), $.call(history, w, g, j)
        )),
          (history.replaceState = (w, g, j) => (
            (w = S(w)), f.call(history, w, g, j)
          ))
      }
      ;(t[l] = $ => {
        if (t[s] || $.defaultPrevented) return
        const f = $.target.closest('a[href]')
        if (f && !f.hasAttribute('preventdefault:click')) {
          const S = f.getAttribute('href'),
            w = new URL(location.href),
            g = new URL(S, w),
            j = g.origin === w.origin,
            E = g.pathname + g.search === w.pathname + w.search
          if (j && E)
            if (
              ($.preventDefault(),
              g.href !== w.href && history.pushState(null, '', g),
              !g.hash)
            )
              g.href.endsWith('#')
                ? window.scrollTo(0, 0)
                : ((t[d] = !1),
                  clearTimeout(t[p]),
                  y({ ...b(), x: 0, y: 0 }),
                  location.reload())
            else {
              const x = g.hash.slice(1),
                q = document.getElementById(x)
              q && q.scrollIntoView()
            }
        }
      }),
        (t[a] = () => {
          !t[s] && t[d] && document.visibilityState === 'hidden' && y()
        }),
        (t[c] = () => {
          t[s] ||
            !t[d] ||
            (clearTimeout(t[p]),
            (t[p] = setTimeout(() => {
              y(), (t[p] = void 0)
            }, 200)))
        }),
        (t[d] = !0),
        setTimeout(() => {
          addEventListener('popstate', t[i]),
            addEventListener('scroll', t[c], { passive: !0 }),
            document.body.addEventListener('click', t[l]),
            t.navigation ||
              document.addEventListener('visibilitychange', t[a], {
                passive: !0,
              })
        }, 0)
    }
  },
  f0 = z(m0, 's_DyVc0YBIqQU'),
  h0 = () => {
    {
      const [e, t] = wn().chunkForSymbol(f0.getSymbol(), null),
        n = Qi + 'build/' + t
      return `(${$0.toString()})('${n}','${e}');`
    }
  },
  $0 = async (e, t) => {
    var n
    if (!window._qcs && history.scrollRestoration === 'manual') {
      window._qcs = !0
      const s = (n = history.state) == null ? void 0 : n._qCityScroll
      s && window.scrollTo(s.x, s.y)
      const r = document.currentScript
      ;(await import(e))[t](r)
    }
  },
  g0 = () => {
    const e = h0()
    zs()
    const t = Us('nonce'),
      n = Tt(Ai)
    if (n.value && n.value.length > 0) {
      const s = n.value.length
      let r = null
      for (let o = s - 1; o >= 0; o--)
        n.value[o].default &&
          (r = _(n.value[o].default, { children: r }, 1, 'zl_0'))
      return _(
        R,
        {
          children: [
            r,
            u(
              'script',
              { dangerouslySetInnerHTML: e },
              { nonce: t },
              null,
              3,
              null,
            ),
          ],
        },
        1,
        'zl_1',
      )
    }
    return _s
  },
  b0 = L(z(g0, 's_e0ssiDXoeAM')),
  Dr = e => e.pathname + e.search + e.hash,
  Ze = (e, t) => new URL(e, t.href),
  Mi = (e, t) => e.origin === t.origin,
  y0 = (e, t) => e.pathname + e.search === t.pathname + t.search,
  v0 = (e, t) => e.pathname === t.pathname,
  w0 = (e, t) => e.search === t.search,
  _0 = (e, t) => {
    const n = e.href
    if (typeof n == 'string' && typeof e.target != 'string' && !e.reload)
      try {
        const s = Ze(n.trim(), t.url),
          r = Ze('', t.url)
        if (Mi(s, r)) return Dr(s)
      } catch (s) {
        console.error(s)
      }
    else if (e.reload) return Dr(Ze('', t.url))
    return null
  },
  x0 = (e, t, n) => {
    if (e.prefetch === !0 && t) {
      const s = Ze(t, n.url),
        r = Ze('', n.url)
      if (!v0(s, r) || !w0(s, r)) return ''
    }
    return null
  },
  k0 = e => e && typeof e.then == 'function',
  S0 = (e, t, n, s) => {
    const r = Ri(),
      i = {
        head: r,
        withLocale: l => vr(s, l),
        resolveValue: l => {
          const a = l.__id
          if (l.__brand === 'server_loader' && !(a in e.loaders))
            throw new Error(
              'You can not get the returned data of a loader that has not been executed for this request.',
            )
          const c = e.loaders[a]
          if (k0(c))
            throw new Error(
              'Loaders returning a function can not be referred to in the head function.',
            )
          return c
        },
        ...t,
      }
    for (let l = n.length - 1; l >= 0; l--) {
      const a = n[l] && n[l].head
      a &&
        (typeof a == 'function'
          ? Or(
              r,
              vr(s, () => a(i)),
            )
          : typeof a == 'object' && Or(r, a))
    }
    return i.head
  },
  Or = (e, t) => {
    typeof t.title == 'string' && (e.title = t.title),
      Wt(e.meta, t.meta),
      Wt(e.links, t.links),
      Wt(e.styles, t.styles),
      Wt(e.scripts, t.scripts),
      Object.assign(e.frontmatter, t.frontmatter)
  },
  Wt = (e, t) => {
    if (Array.isArray(t))
      for (const n of t) {
        if (typeof n.key == 'string') {
          const s = e.findIndex(r => r.key === n.key)
          if (s > -1) {
            e[s] = n
            continue
          }
        }
        e.push(n)
      }
  },
  Ri = () => ({
    title: '',
    meta: [],
    links: [],
    styles: [],
    scripts: [],
    frontmatter: {},
  })
let Fr
;(function (e) {
  ;(e[(e.EOL = 0)] = 'EOL'),
    (e[(e.OPEN_BRACKET = 91)] = 'OPEN_BRACKET'),
    (e[(e.CLOSE_BRACKET = 93)] = 'CLOSE_BRACKET'),
    (e[(e.DOT = 46)] = 'DOT'),
    (e[(e.SLASH = 47)] = 'SLASH')
})(Fr || (Fr = {}))
const q0 = () => Tt(Ti),
  Ni = () => Tt(zi),
  j0 = () => Tt(Ii),
  E0 = () => Rn(Us('qwikcity')),
  C0 = ':root{view-transition-name:none}',
  A0 = async (e, t) => {
    const [n, s, r, o] = En(),
      {
        type: i = 'link',
        forceReload: l = e === void 0,
        replaceState: a = !1,
        scroll: c = !0,
      } = typeof t == 'object' ? t : { forceReload: t },
      d = r.value.dest,
      p = e === void 0 ? d : Ze(e, o.url)
    if (Mi(p, d) && !(!l && y0(p, d)))
      return (
        (r.value = {
          type: i,
          dest: p,
          forceReload: l,
          replaceState: a,
          scroll: c,
        }),
        (n.value = void 0),
        (o.isNavigating = !0),
        new Promise(m => {
          s.r = m
        })
      )
  },
  T0 = ({ track: e }) => {
    const [t, n, s, r, o, i, l, a, c, d, p] = En()
    async function m() {
      const [b, y] = e(() => [d.value, t.value]),
        $ = nc(''),
        f = p.url,
        S = y ? 'form' : b.type
      b.replaceState
      let w,
        g,
        j = null
      if (
        ((w = new URL(b.dest, p.url)), (j = o.loadedRoute), (g = o.response), j)
      ) {
        const [E, x, q, A] = j,
          k = q,
          C = k[k.length - 1]
        ;(p.prevUrl = f),
          (p.url = w),
          (p.params = { ...x }),
          (d.untrackedValue = { type: S, dest: w })
        const I = S0(g, p, k, $)
        ;(n.headings = C.headings),
          (n.menu = A),
          (s.value = Rn(k)),
          (r.links = I.links),
          (r.meta = I.meta),
          (r.styles = I.styles),
          (r.scripts = I.scripts),
          (r.title = I.title),
          (r.frontmatter = I.frontmatter)
      }
    }
    return m()
  },
  z0 = e => {
    kd(z(C0, 's_RPDJAz33WLA'))
    const t = E0()
    if (!(t != null && t.params)) throw new Error('Missing Qwik City Env Data')
    const n = Us('url')
    if (!n) throw new Error('Missing Qwik URL Env Data')
    const s = new URL(n),
      r = Ft(
        { url: s, params: t.params, isNavigating: !1, prevUrl: void 0 },
        { deep: !1 },
      ),
      o = {},
      i = ed(Ft(t.response.loaders, { deep: !1 })),
      l = pe({
        type: 'initial',
        dest: s,
        forceReload: !1,
        replaceState: !1,
        scroll: !0,
      }),
      a = Ft(Ri),
      c = Ft({ headings: void 0, menu: void 0 }),
      d = pe(),
      p = t.response.action,
      m = p ? t.response.loaders[p] : void 0,
      h = pe(
        m
          ? {
              id: p,
              data: t.response.formData,
              output: { result: m, status: t.response.status },
            }
          : void 0,
      ),
      b = z(A0, 's_fX0bDjeJa0E', [h, o, l, r])
    return (
      qe(u0, c),
      qe(Ai, d),
      qe(Ti, a),
      qe(zi, r),
      qe(Ii, b),
      qe(Ci, i),
      qe(d0, h),
      qe(p0, l),
      Qa(z(T0, 's_02wMImzEAbk', [h, c, d, a, t, b, i, o, e, l, r])),
      _(Oe, null, 3, 'qY_0')
    )
  },
  I0 = L(z(z0, 's_TxCFOy819ag')),
  M0 = e => {
    const t = j0(),
      n = Ni(),
      {
        onClick$: s,
        reload: r,
        replaceState: o,
        scroll: i,
        ...l
      } = (() => e)(),
      a = tn(() => _0({ ...l, reload: r }, n)),
      c = tn(() => x0(e, a, n))
    ;(l['preventdefault:click'] = !!a), (l.href = a || e.href)
    const d = c != null ? Rr(dn('s_eBQ0vFsFKsk')) : void 0,
      p = Rr(dn('s_i1Cv0pYJNR0', [t, r, o, i]))
    return Qt(
      'a',
      {
        ...l,
        children: _(Oe, null, 3, 'AD_0'),
        'data-prefetch': c,
        onClick$: [s, p],
        onFocus$: d,
        onMouseOver$: d,
        onQVisible$: d,
      },
      null,
      0,
      'AD_1',
    )
  },
  U = L(z(M0, 's_8gdLBszqbaM')),
  R0 = e =>
    u(
      'script',
      { nonce: D(e, 'nonce') },
      { dangerouslySetInnerHTML: c0 },
      null,
      3,
      '1Z_0',
    ),
  Li = (e, ...t) => {
    const { id: n, validators: s } = N0(t, e)
    function r() {
      return Tt(Ci, o => {
        if (!(n in o))
          throw new Error(`routeLoader$ "${e.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`)
        return D(o, n)
      })
    }
    return (
      (r.__brand = 'server_loader'),
      (r.__qrl = e),
      (r.__validators = s),
      (r.__id = n),
      Object.freeze(r),
      r
    )
  },
  N0 = (e, t) => {
    let n
    const s = []
    if (e.length === 1) {
      const r = e[0]
      r &&
        typeof r == 'object' &&
        ('validate' in r
          ? s.push(r)
          : ((n = r.id), r.validation && s.push(...r.validation)))
    } else e.length > 1 && s.push(...e.filter(r => !!r))
    return (
      typeof n == 'string' ? (n = `id_${n}`) : (n = t.getHash()),
      { validators: s.reverse(), id: n }
    )
  },
  L0 = () =>
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'container mx-auto' },
          u(
            'div',
            null,
            { class: 'card bg-base-100 shadow-xl image-full w-full' },
            u(
              'div',
              null,
              { class: 'card-body' },
              u(
                'div',
                null,
                { class: 'flex justify-between items-center gap-8' },
                [
                  u(
                    'svg',
                    null,
                    {
                      class: 'w-48 rotate-[270deg]',
                      viewBox: '0 0 323.057 323.057',
                      'xml:space': 'preserve',
                      xmlns: 'http://www.w3.org/2000/svg',
                    },
                    [
                      u(
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
                      u(
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
                  u(
                    'div',
                    null,
                    null,
                    [
                      u(
                        'h2',
                        null,
                        { class: 'card-title text-3xl mb-6' },
                        "Do you want to build castles? Let's do it together!",
                        3,
                        null,
                      ),
                      u(
                        'p',
                        null,
                        { class: 'text-2xl flex gap-2 items-center' },
                        [
                          'pasquale.delucia96@gmail.com',
                          ' ',
                          _(
                            U,
                            {
                              'aria-label': 'pasquale.delucia96@gmail.com',
                              children: u(
                                'svg',
                                null,
                                {
                                  class: 'feather feather-external-link',
                                  fill: 'none',
                                  height: '24',
                                  stroke: 'currentColor',
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  'stroke-width': '2',
                                  viewBox: '0 0 24 24',
                                  width: '24',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                },
                                [
                                  u(
                                    'path',
                                    null,
                                    {
                                      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                                    },
                                    null,
                                    3,
                                    null,
                                  ),
                                  u(
                                    'polyline',
                                    null,
                                    { points: '15 3 21 3 21 9' },
                                    null,
                                    3,
                                    null,
                                  ),
                                  u(
                                    'line',
                                    null,
                                    { x1: '10', x2: '21', y1: '14', y2: '3' },
                                    null,
                                    3,
                                    null,
                                  ),
                                ],
                                3,
                                null,
                              ),
                              class: 'btn btn-square btn-outline',
                              href: 'mailto:pasquale.delucia96@gmail.com',
                              target: '_blank',
                              [v]: {
                                'aria-label': v,
                                class: v,
                                href: v,
                                target: v,
                              },
                            },
                            3,
                            'N9_0',
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
              1,
              null,
            ),
            1,
            null,
          ),
          1,
          null,
        ),
      },
      1,
      'N9_1',
    ),
  P0 = L(z(L0, 's_pCebMzCWV9M')),
  D0 = `.eggs{margin:1em auto;text-align:center;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;opacity:.2}.egg{width:140px;height:200px;margin:1em auto;background:#fbe9e7;border-radius:50%/60% 60% 40% 40%;overflow:hidden;display:inline-block}.stripe{height:20%}.stripe:not(:first-child){border-top:2px solid #fff}.stripe:nth-child(1){background-color:#ffbde8}.stripe:nth-child(2){background-color:#bde8ff}.stripe:nth-child(3){background-color:#e8ffbd}.stripe:nth-child(4){background-color:#ffe8bd}.stripe:nth-child(5){background-color:#e8bdff}@keyframes egg-left-animation{0%{transform:rotate(-15deg)}to{transform:rotate(-10deg)}}@keyframes egg-right-animation{0%{transform:rotate(30deg)}to{transform:rotate(25deg)}}.egg-left{transform:rotate(-10deg);animation:egg-left-animation .8s linear 0s infinite alternate}.egg-right{transform:rotate(25deg);animation:egg-right-animation .7s linear 0s infinite alternate;background-color:#ec407a;background-image:url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")}
`,
  O0 = () => (
    ot(z(D0, 's_M7JMtWmYWDA')),
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'eggs' },
          [
            u(
              'div',
              null,
              { class: 'egg egg-left' },
              [
                u('div', null, { class: 'stripe' }, null, 3, null),
                u('div', null, { class: 'stripe' }, null, 3, null),
                u('div', null, { class: 'stripe' }, null, 3, null),
                u('div', null, { class: 'stripe' }, null, 3, null),
                u('div', null, { class: 'stripe' }, null, 3, null),
              ],
              3,
              null,
            ),
            u('div', null, { class: 'egg egg-right' }, null, 3, null),
          ],
          3,
          null,
        ),
      },
      3,
      'vR_0',
    )
  ),
  F0 = L(z(O0, 's_tC1zfRJh9xU')),
  W0 = () => {
    const e = new Date().getFullYear()
    return _(
      R,
      {
        children: u(
          'footer',
          null,
          { class: 'footer items-center p-4 bg-neutral text-neutral-content' },
          [
            u(
              'aside',
              null,
              { class: 'items-center grid-flow-col' },
              [
                u(
                  'svg',
                  null,
                  {
                    class: 'fill-current',
                    'clip-rule': 'evenodd',
                    'fill-rule': 'evenodd',
                    height: '36',
                    viewBox: '0 0 24 24',
                    width: '36',
                    xmlns: 'http://www.w3.org/2000/svg',
                  },
                  u(
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
                u(
                  'p',
                  null,
                  null,
                  ['Copyright ', e, ' - All right reserved'],
                  1,
                  null,
                ),
              ],
              1,
              null,
            ),
            u(
              'nav',
              null,
              {
                class:
                  'grid-flow-col gap-4 md:place-self-center md:justify-self-end',
              },
              [
                _(
                  U,
                  {
                    children: 'made with qwik',
                    href: 'https://qwik.builder.io/',
                    target: '_blank',
                    [v]: { href: v, target: v },
                  },
                  3,
                  'yk_0',
                ),
                _(
                  U,
                  { children: 'Blog', href: '/blog', [v]: { href: v } },
                  3,
                  'yk_1',
                ),
                _(
                  U,
                  { children: 'Projects', href: '/projects', [v]: { href: v } },
                  3,
                  'yk_2',
                ),
                _(
                  U,
                  {
                    children: 'Try this game',
                    href: '/button-game',
                    [v]: { href: v },
                  },
                  3,
                  'yk_3',
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
      'yk_4',
    )
  },
  U0 = L(z(W0, 's_GvPhUJ5Kg9Q')),
  H0 = e =>
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'navbar bg-base-100' },
          [
            u(
              'div',
              null,
              { class: 'navbar-start' },
              u(
                'div',
                null,
                { class: 'dropdown' },
                [
                  u(
                    'label',
                    null,
                    { class: 'btn btn-ghost btn-circle', tabIndex: 0 },
                    u(
                      'svg',
                      null,
                      {
                        class: 'h-5 w-5',
                        fill: 'none',
                        stroke: 'currentColor',
                        viewBox: '0 0 24 24',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      u(
                        'path',
                        null,
                        {
                          d: 'M4 6h16M4 12h16M4 18h7',
                          'stroke-linecap': 'round',
                          'stroke-linejoin': 'round',
                          'stroke-width': '2',
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
                  u(
                    'ul',
                    null,
                    {
                      class:
                        'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52',
                      tabIndex: 0,
                    },
                    [
                      u(
                        'li',
                        null,
                        null,
                        _(
                          U,
                          { children: 'Homepage', href: '/', [v]: { href: v } },
                          3,
                          '8h_0',
                        ),
                        1,
                        null,
                      ),
                      u(
                        'li',
                        null,
                        null,
                        _(
                          U,
                          { children: 'Blog', href: '/blog', [v]: { href: v } },
                          3,
                          '8h_1',
                        ),
                        1,
                        null,
                      ),
                      u(
                        'li',
                        null,
                        null,
                        _(
                          U,
                          {
                            children: 'Projects',
                            href: '/projects',
                            [v]: { href: v },
                          },
                          3,
                          '8h_2',
                        ),
                        1,
                        null,
                      ),
                      u(
                        'li',
                        null,
                        null,
                        _(
                          U,
                          {
                            children: 'Resume',
                            href: '/Pasquale_De_Lucia-Resume.pdf',
                            target: '_blank',
                            [v]: { href: v, target: v },
                          },
                          3,
                          '8h_3',
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
            u(
              'div',
              null,
              { class: 'navbar-center' },
              _(
                U,
                {
                  children: 'Nyruchi',
                  class: 'btn btn-ghost normal-case text-xl',
                  href: '/',
                  [v]: { class: v, href: v },
                },
                3,
                '8h_4',
              ),
              1,
              null,
            ),
            u(
              'div',
              null,
              { class: 'navbar-end' },
              [
                u(
                  'label',
                  null,
                  { class: 'h-0 w-0 text-[0px]', for: 'cat-spawn' },
                  'Try',
                  3,
                  null,
                ),
                u(
                  'input',
                  null,
                  {
                    class: 'toggle',
                    id: 'cat-spawn',
                    onClick$: dn('s_8cyHPpVKZXc', [e]),
                    type: 'checkbox',
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
      '8h_5',
    ),
  Q0 = L(z(H0, 's_o4ccBuvIYCs')),
  B0 = `.reindeer{--rudolph-antler: #ddb892;--rudolph-body: #9d6b53;--rudolph-body-dark: #946651;--rudolph-nose: #8c6351;--rudolph-nose-red: #690500;--rudolph-eye: #432818;--rudolph-ear: #774936;--rudolph-belly: #ede0d4;--rudolph-leg: #432818;position:fixed;transform:translate(-50%,-50%);top:50%;left:50%;width:16rem;height:16rem;z-index:-1;opacity:.2}.reindeer .antler{position:absolute;margin:2.7rem 0 0 2.3rem;width:5rem;height:.7rem;border-radius:.35rem;background-color:var(--rudolph-antler);transform-origin:5.7rem 0;transform:translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler.antler--right{transform:scaleX(-1) translate(-1rem,2.5rem) rotate(20deg)}.reindeer .antler .hook:first-child{position:absolute;top:-2.3rem;left:-2.3rem;width:3rem;height:3rem;background:radial-gradient(circle at 100% 0,transparent,transparent 2.3rem,var(--rudolph-antler) 2.3rem,var(--rudolph-antler) 3rem,transparent 3rem)}.reindeer .antler .hook:nth-child(2){position:absolute;top:-1.7rem;width:2.4rem;height:2.4rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.7rem,var(--rudolph-antler) 1.7rem,var(--rudolph-antler) 2.4rem,transparent 2.4rem)}.reindeer .antler .hook:nth-child(3){position:absolute;top:-1.3rem;left:1.5rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.3rem,var(--rudolph-antler) 1.3rem,var(--rudolph-antler) 2rem,transparent 2rem)}.reindeer .antler .hook:before{content:"";display:block;position:absolute;top:-.35rem;width:.7rem;height:.7rem;background-color:var(--rudolph-antler);border-radius:.35rem}.reindeer .head{position:absolute;z-index:3;top:4rem;left:5rem;width:6rem;height:6rem}.reindeer .head .face{position:absolute;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:50%/50% 50% 60% 60%}.reindeer .head .face:after{content:"";display:block;position:absolute;top:.05rem;left:.5rem;width:5rem;height:5.4rem;border-radius:50%;background:radial-gradient(circle at center,transparent,transparent 2.5rem,var(--rudolph-body-dark) 2.5rem,var(--rudolph-body-dark) 5rem);background-position:0 .2rem;transform:scaleX(1.1) rotate(45deg) scaleX(1.1) scale(.9)}.reindeer .ear{position:absolute;left:-2.6rem;top:1.5rem;width:5rem;height:2rem;background:var(--rudolph-body);border-radius:50% 50% 60% 40%/50% 40% 40% 50%;transform:rotate(-10deg) scale(.8)}.reindeer .ear:after{content:"";display:block;position:absolute;left:1rem;top:.5rem;width:3rem;height:1.2rem;background:var(--rudolph-ear);border-radius:50% 50% 50% 40%/50% 40% 60% 50%}.reindeer .ear.ear--right{left:auto;right:-2.6rem;transform:rotate(10deg) scaleX(-1) scale(.8)}.reindeer .eye{position:absolute;top:2.5rem;left:2rem;width:.6rem;height:.8rem;border-radius:50%;background-color:var(--rudolph-eye);transform:rotate(10deg)}.reindeer .eye.eye--right{left:3.4rem;transform:rotate(-10deg)}.reindeer .nose{position:absolute;top:3.5rem;left:.7rem;width:4.6rem;height:3.6rem;border-radius:50%;background-color:var(--rudolph-nose)}.reindeer .nose:before{content:"";display:block;position:absolute;top:.3rem;left:.6rem;width:3.4rem;height:2.6rem;border-radius:50%;background-color:var(--rudolph-nose-red)}.reindeer .nose:after{content:"";display:block;position:absolute;top:.6rem;left:1.6rem;width:1.8rem;height:1.2rem;border-radius:50%;background-color:#ffffff1a}.reindeer .body{position:absolute;top:9.6rem;left:5rem;width:6rem;height:6rem;background:var(--rudolph-body);border-radius:3rem 3rem 0 0/4rem 4rem 0 0}.reindeer .body:after{content:"";display:block;position:absolute;width:3rem;height:4rem;background-color:var(--rudolph-belly);border-radius:50%;top:0rem;left:1.5rem}.reindeer .hand{position:absolute;z-index:2;top:1rem;left:.8rem;width:2rem;height:2rem;background:radial-gradient(circle at 100% 0,transparent,transparent 1.15rem,var(--rudolph-leg) 1.2rem,var(--rudolph-leg) 2rem,transparent 2.05rem);transform:scaleX(.7) rotate(10deg)}.reindeer .hand:after{content:"";display:block;position:absolute;top:1.2rem;left:1.6rem;width:.8rem;height:.8rem;background-color:var(--rudolph-leg);border-radius:50%}.reindeer .hand.hand--right{left:3.2rem;transform:scaleX(-1) scaleX(.7) rotate(10deg)}.reindeer .legs{position:absolute;left:-1rem;top:2rem;width:8rem;height:4rem;overflow:hidden}.reindeer .legs:before{content:"";display:block;position:absolute;top:1rem;left:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(-20deg)}.reindeer .legs:after{content:"";display:block;position:absolute;top:1rem;right:.3rem;width:2rem;height:3.4rem;background-color:var(--rudolph-body);border-radius:50%;transform:rotate(20deg)}.reindeer .foot{position:absolute;width:3rem;height:1.5rem;background-color:var(--rudolph-leg);border-radius:1.5rem 1.5rem 0 0;top:4.5rem}.reindeer .foot.foot--right{left:3rem}
`,
  K0 = () => (
    ot(z(B0, 's_0HhqKOJuYCM')),
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'reindeer' },
          [
            u(
              'div',
              null,
              { class: 'antler' },
              [
                u('div', null, { class: 'hook' }, null, 3, null),
                u('div', null, { class: 'hook' }, null, 3, null),
                u('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            u(
              'div',
              null,
              { class: 'antler antler--right' },
              [
                u('div', null, { class: 'hook' }, null, 3, null),
                u('div', null, { class: 'hook' }, null, 3, null),
                u('div', null, { class: 'hook' }, null, 3, null),
              ],
              3,
              null,
            ),
            u(
              'div',
              null,
              { class: 'body' },
              [
                u('div', null, { class: 'hand' }, null, 3, null),
                u('div', null, { class: 'hand hand--right' }, null, 3, null),
                u('div', null, { class: 'legs' }, null, 3, null),
                u('div', null, { class: 'foot' }, null, 3, null),
                u('div', null, { class: 'foot foot--right' }, null, 3, null),
              ],
              3,
              null,
            ),
            u(
              'div',
              null,
              { class: 'head' },
              [
                u('div', null, { class: 'ear' }, null, 3, null),
                u('div', null, { class: 'ear ear--right' }, null, 3, null),
                u('div', null, { class: 'face' }, null, 3, null),
                u('div', null, { class: 'eye' }, null, 3, null),
                u('div', null, { class: 'eye eye--right' }, null, 3, null),
                u('div', null, { class: 'nose' }, null, 3, null),
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
  J0 = L(z(K0, 's_0Bd6yCHL7MI')),
  V0 = `.santa-container{position:fixed;z-index:9999;opacity:1;transform-origin:right bottom;animation:init-santa 3s linear 1,walk-around 20s linear 3.2s infinite;height:46.875em;width:37.5em;right:0;bottom:0;transform:scale(.1)}.santa-container .santa{background-color:#edbb93;height:6.25em;width:18.75em;position:absolute;transform:translate(-50%);left:50%;top:17.5em}.santa-container .ears{position:absolute;height:4.37em;width:23.75em;background-color:#e59076;transform:translate(-50%);left:50%;top:18.75em;border-radius:3.12em}.santa-container .santa:before{content:"";position:absolute;height:1.56em;width:1.56em;background-color:#0c2137;border-radius:50%;top:2.5em;left:5em;box-shadow:6.25em 0 #0c2137}.santa-container .moustache{position:absolute;height:4.37em;width:11.25em;background-color:#e3e1ed;left:-2.18em;top:5em;border-radius:3.12em 0}.santa-container .moustache:before{position:absolute;content:"";height:4.37em;width:11.25em;background-color:#e3e1ed;left:11.25em;top:0;border-radius:0 3.12em}.santa-container .beard:after{content:"";background-color:#e3e1ed;height:20.62em;width:6.25em;border-radius:6.87em;position:absolute;top:3.12em;right:9.68em}.santa-container .beard:before{background-color:#d3d2e8;height:17.5em;width:6.87em;border-radius:6.87em;position:absolute;content:"";top:1.87em;right:5em;z-index:0;box-shadow:-8.75em 0 #d3d2e8}.santa-container .beard{background-color:#bfc2e0;height:15.62em;width:6.25em;border-radius:6.87em;position:absolute;top:21.25em;left:25em;box-shadow:-18.75em 0 #bfc2e0}.santa-container .mouth{background:linear-gradient(#ffffff 1.87em,#0c2137 1.87em);height:5.62em;width:4.37em;position:absolute;top:23.75em;left:16.25em;border-radius:0 0 4.375em 4.37em;overflow:hidden}.santa-container .mouth:before{content:"";position:absolute;background-color:#ea385f;height:2.81em;width:3.43em;top:3.43em;left:-.62em;border-radius:.62em}.santa-container .hair{height:5em;width:23.12em;background-color:#c3c1df;position:absolute;transform:translate(-50%);left:50%;top:15em;border-radius:5em}.santa-container .hair:before{position:absolute;content:"";width:25.62em;background-color:#d2d3e6;height:6.25em;left:-1.25em;bottom:2.5em;border-radius:1.25em}.santa-container .hair:after{position:absolute;content:"";height:10em;width:23.75em;background-color:#ea385d;bottom:8.75em;border-radius:16.25em 0 0}.santa-container .hat{position:absolute;background-color:#c82a50;height:6.25em;width:3.12em;left:30.81em;top:1.25em;border-radius:0 2.5em 0 0}.santa-container .hat:before{position:absolute;content:"";background-color:#e1e0ec;height:11.25em;width:11.25em;top:4.37em;left:-1.87em;border-radius:50%}@media screen and (max-width: 800px){.santa-container .container{font-size:.75em}}@keyframes init-santa{0%{bottom:83%}to{bottom:0}}@keyframes init-santa-zig-zag{0%{bottom:83%;right:0}10%{right:10%}20%{right:2%}30%{right:15%}40%{right:7%}50%{right:12%}60%{right:0}70%{right:8%}80%{right:0%}90%{right:10%}to{bottom:0;right:0}}@keyframes walk-around{0%{right:0;bottom:0}5%{right:4%;bottom:5px}10%{right:8%;bottom:0}15%{right:12%;bottom:5px}20%{right:16%;bottom:0}25%{right:20%;bottom:5px}30%{right:24%;bottom:0}35%{right:28%;bottom:5px}40%{right:32%;bottom:0}45%{right:36%;bottom:5px}50%{right:40%;bottom:0}55%{right:36%;bottom:5px}60%{right:32%;bottom:0}65%{right:28%;bottom:5px}70%{right:24%;bottom:0}75%{right:20%;bottom:5px}80%{right:16%;bottom:0}85%{right:12%;bottom:5px}90%{right:8%;bottom:0}95%{right:4%;bottom:5px}to{right:0;bottom:0}}
`,
  Y0 = () => (
    ot(z(V0, 's_BsrO2LM87qo')),
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'santa-container' },
          [
            u('div', null, { class: 'ears' }, null, 3, null),
            u('div', null, { class: 'beard' }, null, 3, null),
            u('div', null, { class: 'mouth' }, null, 3, null),
            u('div', null, { class: 'hat' }, null, 3, null),
            u('div', null, { class: 'hair' }, null, 3, null),
            u(
              'div',
              null,
              { class: 'santa' },
              u('div', null, { class: 'moustache' }, null, 3, null),
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
  Z0 = L(z(Y0, 's_o6tPurUTJPc')),
  G0 = async ({ cacheControl: e }) => {
    e({ staleWhileRevalidate: 604800, maxAge: 5 })
  },
  X0 = () => {
    zs()
    const e = pe(!1),
      t = new Date(),
      n = Dt(t, { month: 11, date: 5 }),
      s = Dt(t, { year: t.getFullYear() + 1, month: 0, date: 15 }),
      o = nr(t, { start: n, end: s }) ? new Array(200).fill(0) : null,
      i = Dt(t, { month: 2, date: 5 }),
      l = Dt(t, { month: 3, date: 5 }),
      a = nr(t, { start: i, end: l })
    return _(
      R,
      {
        children: [
          e.value &&
            o &&
            u(
              'div',
              null,
              { class: 'snow-container' },
              o.map((c, d) => u('div', null, { class: 'snow' }, null, 3, d)),
              1,
              'q8_0',
            ),
          _(Q0, { show: e, [v]: { show: v } }, 3, 'q8_1'),
          u(
            'main',
            null,
            null,
            [
              e.value && !o && !a && _(o0, null, 3, 'q8_2'),
              e.value && !o && !a && _(a0, null, 3, 'q8_3'),
              e.value && o && _(Z0, null, 3, 'q8_4'),
              e.value && o && _(J0, null, 3, 'q8_5'),
              e.value && a && _(F0, null, 3, 'q8_6'),
              _(Oe, null, 3, 'q8_7'),
              _(
                B,
                {
                  children: u(
                    'section',
                    null,
                    { class: 'inner-section' },
                    _(P0, null, 3, 'q8_8'),
                    1,
                    null,
                  ),
                },
                1,
                'q8_9',
              ),
            ],
            1,
            null,
          ),
          _(U0, null, 3, 'q8_10'),
        ],
      },
      1,
      'q8_11',
    )
  },
  e1 = L(z(X0, 's_6Y0uFrvPmQs')),
  t1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: e1, onGet: G0 },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  n1 =
    '/build/q-9935d8f4.webp 200w, /build/q-7543aba4.webp 400w, /build/q-0a255698.webp 600w',
  s1 = 600,
  r1 = 623,
  o1 = { srcSet: n1, width: s1, height: r1 }
function i1(e, t, n, s) {
  return u(
    'img',
    { decoding: 'async', loading: 'lazy', ...e },
    o1,
    void 0,
    3,
    t,
  )
}
const l1 = e => {
    const t = new Date().getFullYear(),
      n = new Date('1/1/2015').getFullYear(),
      s = ul.toWords(t - n)
    return (
      s.charAt(0).toUpperCase(),
      s.slice(1),
      _(
        R,
        {
          children: u(
            'div',
            null,
            { class: 'hero min-h-screen bg-base-200' },
            u(
              'div',
              null,
              { class: 'hero-content flex-col lg:flex-row' },
              [
                _(
                  i1,
                  {
                    alt: 'Pasquale De Lucia picture',
                    class:
                      'max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                    loading: 'eager',
                    [v]: { alt: v, class: v, loading: v },
                  },
                  3,
                  'ED_0',
                ),
                u(
                  'div',
                  null,
                  { class: 'prose m-6 md:my-0' },
                  [
                    u(
                      'h1',
                      null,
                      { class: 'text-5xl font-bold' },
                      'Pasquale De Lucia',
                      3,
                      null,
                    ),
                    u(
                      'p',
                      null,
                      null,
                      'Web Wizard and JavaScript Lover',
                      3,
                      null,
                    ),
                    u(
                      'p',
                      null,
                      null,
                      [
                        'I craft digital wonders as a ',
                        ye(r => r.role, [e], 'p0.role'),
                        ' at ',
                        ye(r => r.company, [e], 'p0.company'),
                        '.',
                      ],
                      3,
                      null,
                    ),
                    u(
                      'p',
                      null,
                      null,
                      [
                        'With a solid ',
                        s,
                        " years of web development under my belt, I'm here to make your online dreams a reality.",
                      ],
                      1,
                      null,
                    ),
                    u(
                      'p',
                      null,
                      null,
                      _(
                        U,
                        {
                          children: 'Get resume',
                          class: 'btn btn-primary text-black',
                          href: '#links',
                          [v]: { class: v, href: v },
                        },
                        3,
                        'ED_1',
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
        'ED_2',
      )
    )
  },
  a1 = L(z(l1, 's_Jevt7v9CDh4')),
  c1 = e => {
    let t = [...e.items]
    return (
      e.limit && (t = t.splice(0, e.limit)),
      _(
        R,
        {
          children: u(
            'div',
            null,
            null,
            u(
              'div',
              null,
              { class: 'grid md:grid-cols-3 justify-items-center gap-12' },
              t.map(n =>
                u(
                  'div',
                  null,
                  {
                    class:
                      'card bg-base-100 shadow-xl image-full w-full max-w-[18rem]',
                  },
                  [
                    n.image &&
                      u(
                        'figure',
                        null,
                        null,
                        u(
                          'img',
                          { alt: D(n, 'altImage'), src: D(n, 'image') },
                          { height: 250, width: 250 },
                          null,
                          3,
                          null,
                        ),
                        1,
                        'tS_0',
                      ),
                    u(
                      'div',
                      null,
                      { class: 'card-body' },
                      [
                        u(
                          'h2',
                          null,
                          { class: 'card-title' },
                          D(n, 'title'),
                          1,
                          null,
                        ),
                        u(
                          'p',
                          null,
                          null,
                          [
                            D(n, 'description'),
                            u('br', null, null, null, 3, null),
                            u('br', null, null, null, 3, null),
                            u(
                              'span',
                              null,
                              {
                                class:
                                  'bg-secondary text-black rounded-3xl p-1 text-xs',
                              },
                              D(n, 'type'),
                              1,
                              null,
                            ),
                          ],
                          1,
                          null,
                        ),
                        u(
                          'div',
                          null,
                          { class: 'card-actions justify-end' },
                          _(
                            U,
                            {
                              class: 'btn btn-square btn-outline',
                              get href() {
                                return n.href
                              },
                              target: '_blank',
                              get 'aria-label'() {
                                return n.action
                              },
                              children: u(
                                'svg',
                                null,
                                {
                                  class: 'feather feather-external-link',
                                  fill: 'none',
                                  height: '24',
                                  stroke: 'currentColor',
                                  'stroke-linecap': 'round',
                                  'stroke-linejoin': 'round',
                                  'stroke-width': '2',
                                  viewBox: '0 0 24 24',
                                  width: '24',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                },
                                [
                                  u(
                                    'path',
                                    null,
                                    {
                                      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
                                    },
                                    null,
                                    3,
                                    null,
                                  ),
                                  u(
                                    'polyline',
                                    null,
                                    { points: '15 3 21 3 21 9' },
                                    null,
                                    3,
                                    null,
                                  ),
                                  u(
                                    'line',
                                    null,
                                    { x1: '10', x2: '21', y1: '14', y2: '3' },
                                    null,
                                    3,
                                    null,
                                  ),
                                ],
                                3,
                                null,
                              ),
                              [v]: {
                                'aria-label': Le(n, 'action'),
                                class: v,
                                href: Le(n, 'href'),
                                target: v,
                              },
                            },
                            3,
                            'tS_1',
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
        'tS_2',
      )
    )
  },
  Pi = L(z(c1, 's_Yj7Oj0dysis')),
  u1 = e => {
    const t = [...e.articles]
    return _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'container mx-auto' },
          u(
            'div',
            null,
            { class: 'grid md:grid-cols-2 justify-items-center gap-12' },
            t.map(n =>
              _(
                U,
                {
                  get href() {
                    return n.href
                  },
                  children: u(
                    'article',
                    null,
                    { class: 'prose' },
                    [
                      u('h3', null, null, D(n, 'title'), 1, null),
                      u(
                        'p',
                        null,
                        { class: 'flex items-center gap-2' },
                        [
                          D(n, 'date'),
                          ' ',
                          u(
                            'span',
                            null,
                            {
                              class:
                                'bg-secondary text-black p-1 text-xs rounded',
                            },
                            D(n, 'lang'),
                            1,
                            null,
                          ),
                        ],
                        1,
                        null,
                      ),
                      u('p', null, null, D(n, 'description'), 1, null),
                    ],
                    1,
                    null,
                  ),
                  target: '_blank',
                  [v]: { href: Le(n, 'href'), target: v },
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
  Di = L(z(u1, 's_aHaxQW3gUTM')),
  d1 = e =>
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'container mx-auto w-full h-full' },
          u(
            'div',
            null,
            { class: 'relative wrap overflow-hidden p-10 h-full' },
            [
              u(
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
                (t, n) => (
                  zs(),
                  n % 2 === 0
                    ? _(
                        B,
                        {
                          children: u(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline',
                            },
                            [
                              u(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              u(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right',
                                },
                                [
                                  u(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    D(t, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  u(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    D(t, 'title'),
                                    1,
                                    null,
                                  ),
                                  u(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-md md:text-xl',
                                    },
                                    D(t, 'role'),
                                    1,
                                    null,
                                  ),
                                  u(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug text-gray-50 text-opacity-100',
                                    },
                                    D(t, 'description'),
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
                          pop: !0,
                          [v]: { pop: v },
                        },
                        1,
                        t.id,
                      )
                    : _(
                        B,
                        {
                          children: u(
                            'div',
                            null,
                            {
                              class:
                                'mb-8 flex justify-between items-center w-full right-timeline',
                            },
                            [
                              u(
                                'div',
                                null,
                                { class: 'order-1 w-0 md:w-5/12' },
                                null,
                                3,
                                null,
                              ),
                              u(
                                'div',
                                null,
                                {
                                  class:
                                    'order-1  w-full md:w-5/12 px-1 py-4 text-left',
                                },
                                [
                                  u(
                                    'p',
                                    null,
                                    { class: 'mb-3 text-base text-secondary' },
                                    D(t, 'startDate'),
                                    1,
                                    null,
                                  ),
                                  u(
                                    'h3',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-lg md:text-2xl',
                                    },
                                    D(t, 'title'),
                                    1,
                                    null,
                                  ),
                                  u(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'mb-3 font-bold text-md md:text-xl',
                                    },
                                    D(t, 'role'),
                                    1,
                                    null,
                                  ),
                                  u(
                                    'p',
                                    null,
                                    {
                                      class:
                                        'text-sm md:text-base leading-snug text-gray-50 text-opacity-100',
                                    },
                                    D(t, 'description'),
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
                          pop: !0,
                          [v]: { pop: v },
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
  p1 = L(z(d1, 's_sZIPqDBaEpc')),
  m1 = '_container_q7mvx_1',
  f1 = { container: m1 },
  h1 = e =>
    _(
      R,
      {
        children: u(
          'div',
          null,
          { class: 'container mx-auto ' + f1.container },
          [
            u(
              'h3',
              null,
              { class: 'text-center mb-4 text-xl font-bold' },
              ye(t => t.title, [e], 'p0.title'),
              3,
              null,
            ),
            u(
              'div',
              null,
              { class: 'flex flex-wrap justify-center gap-12' },
              e.stacks.map(t =>
                _(
                  U,
                  {
                    get href() {
                      return t.href
                    },
                    target: '_blank',
                    get 'aria-label'() {
                      return t.href
                    },
                    children: u(
                      'div',
                      { dangerouslySetInnerHTML: D(t, 'svg') },
                      null,
                      null,
                      3,
                      null,
                    ),
                    class: 'w-full max-w-[3rem] min-w-[2rem]',
                    [v]: {
                      'aria-label': Le(t, 'href'),
                      class: v,
                      href: Le(t, 'href'),
                      target: v,
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
  Qn = L(z(h1, 's_o91wC8IGdho')),
  $1 = '_icon_mcn59_1',
  Wr = { icon: $1 },
  g1 = e =>
    _(
      R,
      {
        children: u(
          'ul',
          null,
          null,
          e.links.map(t =>
            u(
              'li',
              null,
              { class: 'mb-4' },
              _(
                U,
                {
                  class:
                    'link-container flex items-center justify-between transition duration-200 font-bold bg-primary border-primary border-2 hover:bg-transparent hover:text-primary py-2 w-100 block text-black rounded-lg pl-4 md:px-4',
                  get href() {
                    return t.url
                  },
                  children: [
                    u(
                      'span',
                      { dangerouslySetInnerHTML: D(t, 'svg') },
                      { class: Wr.icon + ' p-2' },
                      null,
                      3,
                      null,
                    ),
                    u('span', null, null, D(t, 'title'), 1, null),
                    u(
                      'span',
                      { dangerouslySetInnerHTML: D(t, 'svg') },
                      { class: Wr.icon + ' p-2 invisible opacity-0' },
                      null,
                      3,
                      null,
                    ),
                  ],
                  rel: 'noopener',
                  target: '_blank',
                  [v]: { class: v, href: Le(t, 'url'), rel: v, target: v },
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
  b1 = L(z(g1, 's_x0jeNTb2iQc')),
  y1 = [
    {
      id: 1,
      title: 'Github',
      url: 'https://github.com/VarPDev',
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    `,
    },
    {
      id: 2,
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/pasquale-de-lucia-web-dev/',
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>    
    `,
    },
    {
      id: 3,
      title: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/8172268/pasquale-de-lucia',
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg>
    `,
    },
    {
      id: 4,
      title: 'DEV.to',
      url: 'https://dev.to/varpdev',
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>dev.to</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>
    `,
    },
    {
      id: 5,
      title: 'Resume',
      url: '/Pasquale_De_Lucia-Resume.pdf',
      svg: `
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>ReadMe</title><path d="M22.0113 3.269h-5.8219a4.2894 4.2894 0 0 0-4.1854 3.3452A4.2894 4.2894 0 0 0 7.8186 3.269h-5.818A2.0007 2.0007 0 0 0 0 5.2697v10.2434a2.0007 2.0007 0 0 0 2.0007 2.0007h3.7372c4.2574 0 5.5299 1.0244 6.138 3.133a.112.112 0 0 0 .1121.084h.024a.112.112 0 0 0 .112-.084c.6122-2.1086 1.8847-3.133 6.138-3.133h3.7373A2.0007 2.0007 0 0 0 24 15.5131V5.2697a2.0007 2.0007 0 0 0-1.9887-2.0006Zm-11.928 11.0557a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144H3.2571a.144.144 0 0 1-.144-.144v-.9524a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm10.8037 5.0696a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9523a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144zm0-2.5368a.144.144 0 0 1-.144.144h-6.6823a.144.144 0 0 1-.144-.144v-.9484a.144.144 0 0 1 .144-.144h6.6822a.144.144 0 0 1 .144.144v.9524z"/></svg>
    `,
    },
  ],
  Bn = [
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
      endDate: 'Gen 2022',
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
  Oi = [
    {
      id: 1,
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
      id: 4,
      title: 'Resume me',
      description: 'An app built with Flutter to share your own resume',
      altImage: 'Resume me app logo',
      image: '/resume_me.png',
      action: 'Download',
      type: 'APP',
      color: 'orange-600',
      href: 'https://play.google.com/store/apps/details?id=com.pako.resume_me&pli=1',
    },
    {
      id: 5,
      title: 'Tab sync',
      description:
        'Npm library that allows you to communicate between multiple browser tabs',
      altImage: 'Tab sync logo',
      action: 'Try it',
      type: 'NPM',
      color: 'orange-600',
      href: 'https://www.npmjs.com/package/@devhobby/tab-sync',
    },
  ],
  v1 = [
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(9.411765%,71.372549%,96.470588%);fill-opacity:1;" d="M 95.671875 112.554688 L 78.242188 95.214844 L 77.996094 95.257812 L 77.996094 95.074219 L 40.929688 58.417969 L 50.082031 49.597656 L 44.699219 18.757812 L 19.230469 50.355469 C 14.90625 54.722656 14.074219 61.863281 17.207031 67.105469 L 33.125 93.527344 C 35.558594 97.578125 39.382812 100.183594 44.722656 99.992188 C 56.027344 99.589844 60.996094 99.589844 60.996094 99.589844 L 95.664062 112.546875 L 95.671875 112.558594 Z M 95.671875 112.554688 "/>
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(67.45098%,49.411765%,95.686275%);fill-opacity:1;" d="M 104.285156 63.960938 C 106.792969 58.785156 107.691406 54.257812 105.214844 49.707031 L 101.691406 43.222656 L 99.863281 39.894531 L 99.152344 38.597656 L 99.085938 38.671875 L 89.5 22.042969 C 87.082031 17.835938 82.582031 15.265625 77.734375 15.320312 L 69.328125 15.558594 L 44.234375 15.625 C 39.496094 15.65625 35.125 18.175781 32.722656 22.257812 L 17.476562 52.539062 L 44.761719 18.59375 L 80.554688 57.953125 L 74.148438 64.445312 L 77.972656 95.238281 L 78.027344 95.167969 L 78.027344 95.257812 L 77.972656 95.257812 L 78.046875 95.332031 L 81.03125 98.238281 L 95.46875 112.339844 C 96.074219 112.925781 97.058594 112.222656 96.65625 111.5 L 87.730469 93.9375 "/>
          <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 80.640625 57.855469 L 44.753906 18.695312 L 49.851562 49.359375 L 40.71875 58.222656 L 77.90625 95.179688 L 74.554688 64.5 L 80.640625 57.867188 Z M 80.640625 57.855469 "/>
        </svg>
    `,
      href: 'https://qwik.builder.io/',
    },
  ],
  w1 = [
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
  _1 = [
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
  x1 =
    '/build/q-b6ff3ea8.webp 200w, /build/q-fd499dfb.webp 400w, /build/q-afd2a267.webp 600w, /build/q-8e87c3b5.webp 800w',
  k1 = 800,
  S1 = 686,
  q1 = { srcSet: x1, width: k1, height: S1 }
function j1(e, t, n, s) {
  return u(
    'img',
    { decoding: 'async', loading: 'lazy', ...e },
    q1,
    void 0,
    3,
    t,
  )
}
function E1(e) {
  switch (!0) {
    case e.includes('ita'):
      return 'ITA'
    default:
      return 'ENG'
  }
}
const Fi = async ({ devToApiKey: e, limit: t }) => {
    const n = await fetch(
      `https://dev.to/api/articles/me/published?per_page=${t || 30}`,
      { headers: new Headers({ 'api-key': e }) },
    )
    if (n.status !== 200) throw Error(n.status.toString())
    return (await n.json()).map(r => ({
      id: r.id,
      href: r.url,
      title: r.title,
      description: r.description,
      bodyMarkdown: r.body_markdown,
      username: r.user.username,
      slug: r.slug,
      date: cl(new Date(r.published_timestamp), 'PP'),
      lang: E1(r.tag_list),
    }))
  },
  C1 = `h2{font-size:1.875rem;line-height:2.25rem;font-weight:700;text-transform:uppercase}
`,
  A1 = async e =>
    await Fi({ devToApiKey: e.env.get('DEV_TO_API_KEY'), limit: 4 }),
  Wi = Li(z(A1, 's_7CjMt5KkVcg')),
  T1 = () => {
    ot(z(C1, 's_0w9yJ3mmM7E'))
    const e = Wi()
    return _(
      R,
      {
        children: [
          u(
            'section',
            null,
            null,
            _(
              a1,
              {
                get role() {
                  return Bn[0].role
                },
                get company() {
                  return Bn[0].company
                },
                [v]: { company: v, role: v },
              },
              3,
              'eZ_0',
            ),
            1,
            null,
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'title-section text-center' },
                u('h2', null, null, 'Latest projects', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_1',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'inner-section' },
                [
                  _(
                    Pi,
                    { items: Oi, limit: 3, [v]: { items: v, limit: v } },
                    3,
                    'eZ_2',
                  ),
                  u(
                    'p',
                    null,
                    { class: 'flex justify-center pt-6' },
                    _(
                      U,
                      {
                        'aria-label': 'See more projects',
                        children: 'See more projects',
                        class: 'btn btn-primary text-black',
                        href: '/projects',
                        [v]: { 'aria-label': v, class: v, href: v },
                      },
                      3,
                      'eZ_3',
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
            'eZ_4',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'title-section text-center' },
                [
                  u('h2', null, null, 'History', 3, null),
                  u('h3', null, null, 'All my experiences', 3, null),
                ],
                3,
                null,
              ),
            },
            3,
            'eZ_5',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'w-11/12 lg:w-5/6 sticky mx-auto' },
                _(p1, { items: Bn, [v]: { items: v } }, 3, 'eZ_6'),
                1,
                null,
              ),
            },
            1,
            'eZ_7',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'title-section text-center' },
                u('h2', null, null, 'Latest articles', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_8',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'inner-section' },
                [
                  _(
                    Di,
                    {
                      get articles() {
                        return e.value
                      },
                      [v]: { articles: ye(t => t.value, [e], 'p0.value') },
                    },
                    3,
                    'eZ_9',
                  ),
                  u(
                    'p',
                    null,
                    { class: 'flex justify-center pt-6' },
                    _(
                      U,
                      {
                        'aria-label': 'Read more articles',
                        children: 'Read more articles',
                        class: 'btn btn-primary text-black',
                        href: '/blog',
                        [v]: { 'aria-label': v, class: v, href: v },
                      },
                      3,
                      'eZ_10',
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
            'eZ_11',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'title-section text-center' },
                u('h2', null, null, 'Tecnology stack', 3, null),
                3,
                null,
              ),
            },
            3,
            'eZ_12',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'inner-section' },
                _(
                  Qn,
                  {
                    stacks: v1,
                    title: 'Front end',
                    [v]: { stacks: v, title: v },
                  },
                  3,
                  'eZ_13',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_14',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'inner-section' },
                _(
                  Qn,
                  {
                    stacks: w1,
                    title: 'Back end',
                    [v]: { stacks: v, title: v },
                  },
                  3,
                  'eZ_15',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_16',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'inner-section' },
                _(
                  Qn,
                  { stacks: _1, title: 'Tools', [v]: { stacks: v, title: v } },
                  3,
                  'eZ_17',
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_18',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'title-section text-center' },
                u(
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
            'eZ_19',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'inner-section' },
                u(
                  'div',
                  null,
                  { class: 'flex items-center justify-center' },
                  _(
                    j1,
                    {
                      alt: 'My first PR',
                      class:
                        'max-w-[18rem] xs:max-w-[8rem] sm:max-w-[12rem] md:max-w-xs rounded-lg shadow-2xl',
                      [v]: { alt: v, class: v },
                    },
                    3,
                    'eZ_20',
                  ),
                  1,
                  null,
                ),
                1,
                null,
              ),
            },
            1,
            'eZ_21',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'title-section text-center', id: 'links' },
                [
                  u('h2', null, null, 'Links', 3, null),
                  u(
                    'h3',
                    null,
                    null,
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
            'eZ_22',
          ),
          _(
            B,
            {
              children: u(
                'section',
                null,
                { class: 'link-section' },
                _(b1, { links: y1, [v]: { links: v } }, 3, 'eZ_23'),
                1,
                null,
              ),
            },
            1,
            'eZ_24',
          ),
        ],
      },
      1,
      'eZ_25',
    )
  },
  z1 = L(z(T1, 's_tstUEhxLUWc')),
  I1 = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  M1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: z1, head: I1, useArticles: Wi },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  R1 = () =>
    _(
      R,
      {
        children: u(
          'section',
          null,
          { class: 'inner-section' },
          u(
            'div',
            null,
            { class: 'flex flex-col gap-12 items-center justify-center' },
            [
              u('h1', null, { class: 'mb-6' }, 'OPSS!', 3, null),
              u(
                'p',
                null,
                null,
                [
                  "Uh-oh! It looks like you've wandered into the cosmic void of cyberspace. Our binary aliens are throwing a rave just around the corner. Hurry back before they invite you to dance in zeros and ones! Alternatively, try our game at this",
                  ' ',
                  _(
                    U,
                    {
                      children: 'link',
                      href: '../button-game',
                      [v]: { href: v },
                    },
                    3,
                    'OH_0',
                  ),
                  '.',
                ],
                1,
                null,
              ),
              u(
                'img',
                null,
                {
                  decoding: 'async',
                  height: '1200',
                  loading: 'lazy',
                  srcSet: ' /aliens-alien.gif',
                  width: '1200',
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
      'OH_1',
    ),
  N1 = L(z(R1, 's_bavVtvgbxHE')),
  L1 = {
    title: 'Pasquale De Lucia - Full-stack engineer - 404',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  P1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: N1, head: L1 },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  D1 = async e => await Fi({ devToApiKey: e.env.get('DEV_TO_API_KEY') }),
  Ui = Li(z(D1, 's_M0p6wqFFl3I')),
  O1 = () => {
    const e = Ui()
    return _(
      R,
      {
        children: [
          u(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              u('h1', null, null, 'Blog', 3, null),
              u('h2', null, null, 'Find out what I write about', 3, null),
            ],
            3,
            null,
          ),
          u(
            'section',
            null,
            { class: 'inner-section' },
            _(
              Di,
              {
                get articles() {
                  return e.value
                },
                [v]: { articles: ye(t => t.value, [e], 'p0.value') },
              },
              3,
              'TQ_0',
            ),
            1,
            null,
          ),
        ],
      },
      1,
      'TQ_1',
    )
  },
  F1 = L(z(O1, 's_Uzl3gaAclJA')),
  W1 = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  U1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: F1, head: W1, useArticles: Ui },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  )
function fn(e) {
  let t = 1
  for (let n = 0; n < e; n++) t *= (100 - n) / 100
  return t
}
function Hi(e) {
  return Math.floor(Math.random() * e)
}
const H1 = () => {
    const [e, t, n, s] = En(),
      r = Hi(100)
    e.value === 100
      ? ((e.value = 0), (n.value = 100))
      : (r <= n.value
          ? (e.value++, n.value--, e.value > t.value && (t.value = e.value))
          : ((e.value = 0), (n.value = 100)),
        (s.value = fn(n.value)))
  },
  Q1 = () => {
    const e = pe(100)
    fn(100)
    const t = pe(fn(e.value)),
      n = pe(0),
      s = pe(0),
      r = z(H1, 's_SqNyGWM7k0k', [n, s, e, t])
    return _(
      R,
      {
        children: [
          u(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              u('h1', null, { class: 'mb-4' }, 'Buttom game', 3, null),
              u(
                'h3',
                null,
                { class: 'mb-4' },
                "This game requires no skills but only LUCK. If you think you're lucky, try to win!",
                3,
                null,
              ),
              u(
                'p',
                null,
                { class: 'text-lg mb-4' },
                [
                  'There are 100 levels in this challenge. As you successfully conquer each level, the probability of passing the next one decreases by 1%.',
                  u(
                    'span',
                    null,
                    {
                      class: 'tooltip ml-2 top-[2px]',
                      'data-tip':
                        'Commencing with a full 100% chance of success for the initial level, each subsequent accomplishment introduces an added layer of difficulty. Navigate through the escalating challenges and witness the diminishing odds, putting your luck to the test with each passing level.',
                    },
                    u(
                      'svg',
                      null,
                      {
                        class: 'w-5 h-5',
                        viewBox: '0 0 20 20',
                        xmlns: 'http://www.w3.org/2000/svg',
                      },
                      u(
                        'path',
                        null,
                        {
                          class: 'fill-secondary',
                          d: 'M0 10C0 4.478 4.478 0 10 0c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.522 0-10-4.477-10-10zm11.125 2.002H8.989v-.141c.01-1.966.492-2.254 1.374-2.782.093-.056.19-.114.293-.178.73-.459 1.292-1.038 1.292-1.883 0-.948-.743-1.564-1.666-1.564-.851 0-1.657.398-1.712 1.533H6.304C6.364 4.693 8.18 3.5 10.294 3.5c2.306 0 3.894 1.447 3.894 3.488 0 1.382-.695 2.288-1.805 2.952l-.238.144c-.79.475-1.009.607-1.02 1.777V12zm.17 3.012a1.344 1.344 0 01-1.327 1.328 1.32 1.32 0 01-1.328-1.328 1.318 1.318 0 011.328-1.316c.712 0 1.322.592 1.328 1.316z',
                          'fill-rule': 'evenodd',
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
              u('p', null, null, null, 3, null),
            ],
            3,
            null,
          ),
          u(
            'section',
            null,
            { class: 'link-section' },
            u(
              'div',
              null,
              { class: 'grid grid-cols-1 gap-6 justify-items-center' },
              [
                u(
                  'div',
                  {
                    class: `text-center button w-36 h-36 md:w-48 md:h-48 rounded-full cursor-pointer select-none
    active:translate-y-4
    active:border-b-[0px]
    transition-all duration-150
    border-[5px] ${
      n.value === 100
        ? 'border-green-400 bg-green-500 active:[box-shadow:0_0px_0_0_#298a09,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#298a09,0_13px_0_0_#1b70f841]'
        : 'border-red-400 bg-red-500 active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841]'
    }`,
                  },
                  { onClick$: r },
                  u(
                    'span',
                    null,
                    {
                      class:
                        'flex flex-col justify-center items-center h-full text-white font-bold text-[5rem] opacity-50',
                    },
                    ye(o => o.value, [n], 'p0.value'),
                    3,
                    null,
                  ),
                  3,
                  null,
                ),
                u(
                  'p',
                  null,
                  { class: 'text-xl mt-6' },
                  ['MAX ', ye(o => o.value, [s], 'p0.value')],
                  3,
                  null,
                ),
                u(
                  'p',
                  null,
                  null,
                  ye(
                    o => (o.value === 100 ? 'HAI VINTO' : ''),
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
  B1 = L(z(Q1, 's_lVhXlSc0AIU')),
  K1 = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  J1 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getRandomInt: Hi,
        _auto_probabilityOfSuccess: fn,
        default: B1,
        head: K1,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  V1 = () =>
    _(
      R,
      {
        children: [
          u(
            'section',
            null,
            { class: 'title-section text-center' },
            [
              u('h1', null, null, 'Projects', 3, null),
              u('h2', null, null, 'Check out my projects', 3, null),
            ],
            3,
            null,
          ),
          u(
            'section',
            null,
            { class: 'inner-section' },
            _(Pi, { items: Oi, [v]: { items: v } }, 3, 'Mg_0'),
            1,
            null,
          ),
        ],
      },
      1,
      'Mg_1',
    ),
  Y1 = L(z(V1, 's_yMerZA5h0Vw')),
  Z1 = {
    title: 'Pasquale De Lucia - Full-stack engineer',
    meta: [
      {
        name: 'description',
        content:
          'Pasquale De Lucia - Full-stack engineer - Web Wizard and JavaScript Lover',
      },
    ],
  },
  G1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Y1, head: Z1 },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  X1 = [],
  ut = () => t1,
  ep = [
    ['/', [ut, () => M1], '/', ['q-b01f5105.js', 'q-1650c6af.js']],
    [
      '404.html',
      [ut, () => P1],
      '/404.html',
      ['q-b01f5105.js', 'q-f583465e.js'],
    ],
    ['blog/', [ut, () => U1], '/blog/', ['q-b01f5105.js', 'q-8e26f1bd.js']],
    [
      'button-game/',
      [ut, () => J1],
      '/button-game/',
      ['q-b01f5105.js', 'q-defaf50c.js'],
    ],
    [
      'projects/',
      [ut, () => G1],
      '/projects/',
      ['q-b01f5105.js', 'q-d8cff65f.js'],
    ],
  ],
  tp = [],
  np = !0,
  Qi = '/',
  sp = !0,
  rp = {
    routes: ep,
    serverPlugins: X1,
    menus: tp,
    trailingSlash: np,
    basePathname: Qi,
    cacheModules: sp,
  },
  op = {
    manifestHash: 'uhb20g',
    symbols: {
      s_02wMImzEAbk: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'QwikCityProvider_component_useTask',
        canonicalFilename: 's_02wmimzeabk',
        hash: '02wMImzEAbk',
        ctxKind: 'function',
        ctxName: 'useTask$',
        captures: !0,
        parent: 's_TxCFOy819ag',
        loc: [26295, 35258],
      },
      s_CHnWD2D8Ibg: {
        origin: 'components/animated-component/animated-component.tsx',
        displayName: 'AnimatedComp_component_useVisibleTask',
        canonicalFilename: 's_chnwd2d8ibg',
        hash: 'CHnWD2D8Ibg',
        ctxKind: 'function',
        ctxName: 'useVisibleTask$',
        captures: !0,
        parent: 's_sdm0n9ZoKr0',
        loc: [420, 464],
      },
      s_0Bd6yCHL7MI: {
        origin: 'components/rudolph/rudolph.tsx',
        displayName: 'Rudolph_component',
        canonicalFilename: 's_0bd6ychl7mi',
        hash: '0Bd6yCHL7MI',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [142, 1074],
      },
      s_0DhRUxBQU40: {
        origin: 'components/cat/cat-walk.tsx',
        displayName: 'CatWalk_component',
        canonicalFilename: 's_0dhruxbqu40',
        hash: '0DhRUxBQU40',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [143, 1956],
      },
      s_2Fq8wIUpq5I: {
        origin: 'components/router-head/router-head.tsx',
        displayName: 'RouterHead_component',
        canonicalFilename: 's_2fq8wiupq5i',
        hash: '2Fq8wIUpq5I',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [241, 843],
      },
      s_6Y0uFrvPmQs: {
        origin: 'routes/layout.tsx',
        displayName: 'layout_component',
        canonicalFilename: 's_6y0ufrvpmqs',
        hash: '6Y0uFrvPmQs',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [1131, 2552],
      },
      s_8gdLBszqbaM: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'Link_component',
        canonicalFilename: 's_8gdlbszqbam',
        hash: '8gdLBszqbaM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [37211, 38862],
      },
      s_GvPhUJ5Kg9Q: {
        origin: 'components/footer/footer.tsx',
        displayName: 'Footer_component',
        canonicalFilename: 's_gvphuj5kg9q',
        hash: 'GvPhUJ5Kg9Q',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [126, 1888],
      },
      s_Jevt7v9CDh4: {
        origin: 'components/hero/hero.tsx',
        displayName: 'Hero_component',
        canonicalFilename: 's_jevt7v9cdh4',
        hash: 'Jevt7v9CDh4',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [288, 1538],
      },
      s_Nk9PlpjQm9Y: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'GetForm_component',
        canonicalFilename: 's_nk9plpjqm9y',
        hash: 'Nk9PlpjQm9Y',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [48978, 50329],
      },
      s_TxCFOy819ag: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'QwikCityProvider_component',
        canonicalFilename: 's_txcfoy819ag',
        hash: 'TxCFOy819ag',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [23025, 35545],
      },
      s_Uzl3gaAclJA: {
        origin: 'routes/blog/index.tsx',
        displayName: 'blog_component',
        canonicalFilename: 's_uzl3gaaclja',
        hash: 'Uzl3gaAclJA',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [415, 725],
      },
      s_WmYC5H00wtI: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'QwikCityMockProvider_component',
        canonicalFilename: 's_wmyc5h00wti',
        hash: 'WmYC5H00wtI',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [35829, 37092],
      },
      s_Yj7Oj0dysis: {
        origin: 'components/cards/cards.tsx',
        displayName: 'Cards_component',
        canonicalFilename: 's_yj7oj0dysis',
        hash: 'Yj7Oj0dysis',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [197, 2490],
      },
      s_aHaxQW3gUTM: {
        origin: 'components/articles/articles.tsx',
        displayName: 'Articles_component',
        canonicalFilename: 's_ahaxqw3gutm',
        hash: 'aHaxQW3gUTM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [186, 961],
      },
      s_bavVtvgbxHE: {
        origin: 'routes/404.tsx',
        displayName: '_404_component',
        canonicalFilename: 's_bavvtvgbxhe',
        hash: 'bavVtvgbxHE',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [200, 1090],
      },
      s_e0ssiDXoeAM: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'RouterOutlet_component',
        canonicalFilename: 's_e0ssidxoeam',
        hash: 'e0ssiDXoeAM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [7931, 8645],
      },
      s_eXD0K9bzzlo: {
        origin: 'root.tsx',
        displayName: 'root_component',
        canonicalFilename: 's_exd0k9bzzlo',
        hash: 'eXD0K9bzzlo',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [265, 941],
      },
      s_k9rs7QcCFAU: {
        origin: 'components/cat/cat.tsx',
        displayName: 'Cat_component',
        canonicalFilename: 's_k9rs7qccfau',
        hash: 'k9rs7QcCFAU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [134, 608],
      },
      s_lVhXlSc0AIU: {
        origin: 'routes/button-game/index.tsx',
        displayName: 'button_game_component',
        canonicalFilename: 's_lvhxlsc0aiu',
        hash: 'lVhXlSc0AIU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [407, 4598],
      },
      s_o4ccBuvIYCs: {
        origin: 'components/header/header.tsx',
        displayName: 'Header_component',
        canonicalFilename: 's_o4ccbuviycs',
        hash: 'o4ccBuvIYCs',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [193, 2008],
      },
      s_o6tPurUTJPc: {
        origin: 'components/santa/santa.tsx',
        displayName: 'Santa_component',
        canonicalFilename: 's_o6tpurutjpc',
        hash: 'o6tPurUTJPc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [138, 503],
      },
      s_o91wC8IGdho: {
        origin: 'components/stacks/stacks.tsx',
        displayName: 'Stacks_component',
        canonicalFilename: 's_o91wc8igdho',
        hash: 'o91wC8IGdho',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [240, 834],
      },
      s_pCebMzCWV9M: {
        origin: 'components/contact/contact.tsx',
        displayName: 'Contact_component',
        canonicalFilename: 's_pcebmzcwv9m',
        hash: 'pCebMzCWV9M',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [127, 3326],
      },
      s_sZIPqDBaEpc: {
        origin: 'components/timeline/timeline.tsx',
        displayName: 'Timeline_component',
        canonicalFilename: 's_szipqdbaepc',
        hash: 'sZIPqDBaEpc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [211, 2453],
      },
      s_sdm0n9ZoKr0: {
        origin: 'components/animated-component/animated-component.tsx',
        displayName: 'AnimatedComp_component',
        canonicalFilename: 's_sdm0n9zokr0',
        hash: 'sdm0n9ZoKr0',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [226, 675],
      },
      s_tC1zfRJh9xU: {
        origin: 'components/eggs/eggs.tsx',
        displayName: 'Eggs_component',
        canonicalFilename: 's_tc1zfrjh9xu',
        hash: 'tC1zfRJh9xU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [136, 518],
      },
      s_tstUEhxLUWc: {
        origin: 'routes/index.tsx',
        displayName: 'routes_component',
        canonicalFilename: 's_tstuehxluwc',
        hash: 'tstUEhxLUWc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [1144, 4529],
      },
      s_x0jeNTb2iQc: {
        origin: 'components/linkItem/linkItem.tsx',
        displayName: 'LinkItem_component',
        canonicalFilename: 's_x0jentb2iqc',
        hash: 'x0jeNTb2iQc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [227, 1108],
      },
      s_yMerZA5h0Vw: {
        origin: 'routes/projects/index.tsx',
        displayName: 'projects_component',
        canonicalFilename: 's_ymerza5h0vw',
        hash: 'yMerZA5h0Vw',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        parent: null,
        loc: [230, 492],
      },
      s_RPDJAz33WLA: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'QwikCityProvider_component_useStyles',
        canonicalFilename: 's_rpdjaz33wla',
        hash: 'RPDJAz33WLA',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_TxCFOy819ag',
        loc: [23080, 23114],
      },
      s_0HhqKOJuYCM: {
        origin: 'components/rudolph/rudolph.tsx',
        displayName: 'Rudolph_component_useStylesScoped',
        canonicalFilename: 's_0hhqkojuycm',
        hash: '0HhqKOJuYCM',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_0Bd6yCHL7MI',
        loc: [169, 175],
      },
      s_0w9yJ3mmM7E: {
        origin: 'routes/index.tsx',
        displayName: 'routes_component_useStylesScoped',
        canonicalFilename: 's_0w9yj3mmm7e',
        hash: '0w9yJ3mmM7E',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_tstUEhxLUWc',
        loc: [1171, 1177],
      },
      s_BsrO2LM87qo: {
        origin: 'components/santa/santa.tsx',
        displayName: 'Santa_component_useStylesScoped',
        canonicalFilename: 's_bsro2lm87qo',
        hash: 'BsrO2LM87qo',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_o6tPurUTJPc',
        loc: [165, 171],
      },
      s_M7JMtWmYWDA: {
        origin: 'components/eggs/eggs.tsx',
        displayName: 'Eggs_component_useStylesScoped',
        canonicalFilename: 's_m7jmtwmywda',
        hash: 'M7JMtWmYWDA',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_tC1zfRJh9xU',
        loc: [163, 169],
      },
      s_ik8BQrQgw9g: {
        origin: 'components/cat/cat-walk.tsx',
        displayName: 'CatWalk_component_useStylesScoped',
        canonicalFilename: 's_ik8bqrqgw9g',
        hash: 'ik8BQrQgw9g',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_0DhRUxBQU40',
        loc: [170, 176],
      },
      s_xTYSAGLBrBU: {
        origin: 'components/cat/cat.tsx',
        displayName: 'Cat_component_useStylesScoped',
        canonicalFilename: 's_xtysaglbrbu',
        hash: 'xTYSAGLBrBU',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_k9rs7QcCFAU',
        loc: [161, 167],
      },
      s_A5bZC7WO00A: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'routeActionQrl_action_submit',
        canonicalFilename: 's_a5bzc7wo00a',
        hash: 'A5bZC7WO00A',
        ctxKind: 'function',
        ctxName: 'submit',
        captures: !0,
        parent: null,
        loc: [40230, 41864],
      },
      s_DyVc0YBIqQU: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'spa_init',
        canonicalFilename: 's_dyvc0ybiqqu',
        hash: 'DyVc0YBIqQU',
        ctxKind: 'function',
        ctxName: 'spaInit',
        captures: !1,
        parent: null,
        loc: [1391, 6872],
      },
      s_wOIPfiQ04l4: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'serverQrl_stuff',
        canonicalFilename: 's_woipfiq04l4',
        hash: 'wOIPfiQ04l4',
        ctxKind: 'function',
        ctxName: 'stuff',
        captures: !0,
        parent: null,
        loc: [44878, 46864],
      },
      s_8cyHPpVKZXc: {
        origin: 'components/header/header.tsx',
        displayName: 'Header_component__Fragment_div_div_input_onClick',
        canonicalFilename: 's_8cyhppvkzxc',
        hash: '8cyHPpVKZXc',
        ctxKind: 'eventHandler',
        ctxName: 'onClick$',
        captures: !0,
        parent: 's_o4ccBuvIYCs',
        loc: [1908, 1952],
      },
      s_BUbtvTyvVRE: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'QwikCityMockProvider_component_goto',
        canonicalFilename: 's_bubtvtyvvre',
        hash: 'BUbtvTyvVRE',
        ctxKind: 'function',
        ctxName: 'goto',
        captures: !1,
        parent: 's_WmYC5H00wtI',
        loc: [36230, 36291],
      },
      s_SqNyGWM7k0k: {
        origin: 'routes/button-game/index.tsx',
        displayName: 'button_game_component_tryPassLevel',
        canonicalFilename: 's_sqnygwm7k0k',
        hash: 'SqNyGWM7k0k',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_lVhXlSc0AIU',
        loc: [924, 1508],
      },
      s_eBQ0vFsFKsk: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'Link_component_onPrefetch_event',
        canonicalFilename: 's_ebq0vfsfksk',
        hash: 'eBQ0vFsFKsk',
        ctxKind: 'function',
        ctxName: 'event$',
        captures: !1,
        parent: 's_8gdLBszqbaM',
        loc: [37738, 37801],
      },
      s_fX0bDjeJa0E: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'QwikCityProvider_component_goto',
        canonicalFilename: 's_fx0bdjeja0e',
        hash: 'fX0bDjeJa0E',
        ctxKind: 'function',
        ctxName: 'goto',
        captures: !0,
        parent: 's_TxCFOy819ag',
        loc: [24364, 25683],
      },
      s_i1Cv0pYJNR0: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'Link_component_handleClick_event',
        canonicalFilename: 's_i1cv0pyjnr0',
        hash: 'i1Cv0pYJNR0',
        ctxKind: 'function',
        ctxName: 'event$',
        captures: !0,
        parent: 's_8gdLBszqbaM',
        loc: [37919, 38434],
      },
      s_p9MSze0ojs4: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        displayName: 'GetForm_component_form_onSubmit',
        canonicalFilename: 's_p9msze0ojs4',
        hash: 'p9MSze0ojs4',
        ctxKind: 'function',
        ctxName: '_jsxS',
        captures: !0,
        parent: 's_Nk9PlpjQm9Y',
        loc: [49285, 49982],
      },
    },
    mapping: {
      s_02wMImzEAbk: 'q-64ee48ae.js',
      s_CHnWD2D8Ibg: 'q-fbb74ab2.js',
      s_0Bd6yCHL7MI: 'q-7e43db2f.js',
      s_0DhRUxBQU40: 'q-bf65c018.js',
      s_2Fq8wIUpq5I: 'q-036e65c3.js',
      s_6Y0uFrvPmQs: 'q-10f7dfcb.js',
      s_8gdLBszqbaM: 'q-ae59149a.js',
      s_GvPhUJ5Kg9Q: 'q-f44c2d46.js',
      s_Jevt7v9CDh4: 'q-09f395de.js',
      s_Nk9PlpjQm9Y: 'q-d8f7166f.js',
      s_TxCFOy819ag: 'q-64ee48ae.js',
      s_Uzl3gaAclJA: 'q-a2a3447b.js',
      s_WmYC5H00wtI: 'q-3024e459.js',
      s_Yj7Oj0dysis: 'q-344c774b.js',
      s_aHaxQW3gUTM: 'q-6564e21e.js',
      s_bavVtvgbxHE: 'q-56c34f64.js',
      s_e0ssiDXoeAM: 'q-b3dc2b1f.js',
      s_eXD0K9bzzlo: 'q-e174f0a3.js',
      s_k9rs7QcCFAU: 'q-e5c77783.js',
      s_lVhXlSc0AIU: 'q-d29caf81.js',
      s_o4ccBuvIYCs: 'q-cc2dd748.js',
      s_o6tPurUTJPc: 'q-52bbdce5.js',
      s_o91wC8IGdho: 'q-7db41bf4.js',
      s_pCebMzCWV9M: 'q-ff41d346.js',
      s_sZIPqDBaEpc: 'q-f07e0ce4.js',
      s_sdm0n9ZoKr0: 'q-fbb74ab2.js',
      s_tC1zfRJh9xU: 'q-46688954.js',
      s_tstUEhxLUWc: 'q-1fd071e5.js',
      s_x0jeNTb2iQc: 'q-1573c9b0.js',
      s_yMerZA5h0Vw: 'q-5786862e.js',
      s_RPDJAz33WLA: 'q-64ee48ae.js',
      s_0HhqKOJuYCM: 'q-7e43db2f.js',
      s_0w9yJ3mmM7E: 'q-1fd071e5.js',
      s_BsrO2LM87qo: 'q-52bbdce5.js',
      s_M7JMtWmYWDA: 'q-46688954.js',
      s_ik8BQrQgw9g: 'q-bf65c018.js',
      s_xTYSAGLBrBU: 'q-e5c77783.js',
      s_A5bZC7WO00A: 'q-35f3b4bb.js',
      s_DyVc0YBIqQU: 'q-663033b0.js',
      s_wOIPfiQ04l4: 'q-461c53eb.js',
      s_8cyHPpVKZXc: 'q-cc2dd748.js',
      s_BUbtvTyvVRE: 'q-3024e459.js',
      s_SqNyGWM7k0k: 'q-d29caf81.js',
      s_eBQ0vFsFKsk: 'q-52ff7744.js',
      s_fX0bDjeJa0E: 'q-64ee48ae.js',
      s_i1Cv0pYJNR0: 'q-ae59149a.js',
      s_p9MSze0ojs4: 'q-d8f7166f.js',
    },
    bundles: {
      'q-036e65c3.js': {
        size: 671,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_RouterHead.js', 'src/s_2fq8wiupq5i.js'],
        symbols: ['s_2Fq8wIUpq5I'],
      },
      'q-09f395de.js': {
        size: 4254,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: [
          'node_modules/.pnpm/number-to-words@1.2.4/node_modules/number-to-words/numberToWords.min.js',
          'src/entry_Hero.js',
          'src/media/pako-cropped.jpeg?jsx',
          'src/s_jevt7v9cdh4.js',
        ],
        symbols: ['s_Jevt7v9CDh4'],
      },
      'q-10f7dfcb.js': {
        size: 3845,
        imports: ['q-2f44cc0c.js', 'q-a90c5719.js'],
        dynamicImports: [
          'q-46688954.js',
          'q-52bbdce5.js',
          'q-7e43db2f.js',
          'q-bf65c018.js',
          'q-cc2dd748.js',
          'q-e5c77783.js',
          'q-f44c2d46.js',
          'q-ff41d346.js',
        ],
        origins: [
          'node_modules/.pnpm/@babel+runtime@7.23.4/node_modules/@babel/runtime/helpers/esm/typeof.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/requiredArgs/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/toInteger/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDaysInMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isWithinInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/set/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/toDate/index.js',
          'src/components/cat/cat-walk.tsx',
          'src/components/cat/cat.tsx',
          'src/components/contact/contact.tsx',
          'src/components/eggs/eggs.tsx',
          'src/components/footer/footer.tsx',
          'src/components/header/header.tsx',
          'src/components/rudolph/rudolph.tsx',
          'src/components/santa/santa.tsx',
          'src/entry_layout.js',
          'src/s_6y0ufrvpmqs.js',
        ],
        symbols: ['s_6Y0uFrvPmQs'],
      },
      'q-1573c9b0.js': {
        size: 844,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: [
          'src/components/linkItem/linkItem.module.css?used',
          'src/entry_LinkItem.js',
          'src/s_x0jentb2iqc.js',
        ],
        symbols: ['s_x0jeNTb2iQc'],
      },
      'q-1650c6af.js': {
        size: 531,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        dynamicImports: ['q-1fd071e5.js'],
        origins: ['src/routes/index.tsx'],
      },
      'q-1fd071e5.js': {
        size: 25358,
        imports: [
          'q-1650c6af.js',
          'q-2f44cc0c.js',
          'q-5b9d5302.js',
          'q-8575bd8a.js',
          'q-a3b72f17.js',
          'q-a90c5719.js',
        ],
        dynamicImports: [
          'q-09f395de.js',
          'q-1573c9b0.js',
          'q-7db41bf4.js',
          'q-f07e0ce4.js',
        ],
        origins: [
          'src/components/hero/hero.tsx',
          'src/components/linkItem/linkItem.tsx',
          'src/components/stacks/stacks.tsx',
          'src/components/timeline/timeline.tsx',
          'src/entry_routes.js',
          'src/media/badge-first-pr.webp?jsx',
          'src/repository/links.ts',
          'src/repository/stack.ts',
          'src/repository/work.ts',
          'src/routes/index.css?used&inline',
          'src/s_0w9yj3mmm7e.js',
          'src/s_tstuehxluwc.js',
        ],
        symbols: ['s_0w9yJ3mmM7E', 's_tstUEhxLUWc'],
      },
      'q-2f44cc0c.js': {
        size: 50605,
        origins: [
          'node_modules/.pnpm/@builder.io+qwik@1.2.18_@types+node@20.9.3_sass@1.69.5_undici@5.27.2/node_modules/@builder.io/qwik/core.min.mjs',
        ],
      },
      'q-3024e459.js': {
        size: 787,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: [
          'src/entry_QwikCityMockProvider.js',
          'src/s_bubtvtyvvre.js',
          'src/s_wmyc5h00wti.js',
        ],
        symbols: ['s_BUbtvTyvVRE', 's_WmYC5H00wtI'],
      },
      'q-344c774b.js': {
        size: 1568,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_Cards.js', 'src/s_yj7oj0dysis.js'],
        symbols: ['s_Yj7Oj0dysis'],
      },
      'q-35f3b4bb.js': {
        size: 751,
        imports: ['q-2f44cc0c.js'],
        origins: ['src/entry_routeActionQrl.js', 'src/s_a5bzc7wo00a.js'],
        symbols: ['s_A5bZC7WO00A'],
      },
      'q-461c53eb.js': {
        size: 889,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_serverQrl.js', 'src/s_woipfiq04l4.js'],
        symbols: ['s_wOIPfiQ04l4'],
      },
      'q-46688954.js': {
        size: 2909,
        imports: ['q-2f44cc0c.js'],
        origins: [
          'src/components/eggs/eggs.css?used&inline',
          'src/entry_Eggs.js',
          'src/s_m7jmtwmywda.js',
          'src/s_tc1zfrjh9xu.js',
        ],
        symbols: ['s_M7JMtWmYWDA', 's_tC1zfRJh9xU'],
      },
      'q-52bbdce5.js': {
        size: 4174,
        imports: ['q-2f44cc0c.js'],
        origins: [
          'src/components/santa/santa.css?used&inline',
          'src/entry_Santa.js',
          'src/s_bsro2lm87qo.js',
          'src/s_o6tpurutjpc.js',
        ],
        symbols: ['s_BsrO2LM87qo', 's_o6tPurUTJPc'],
      },
      'q-52ff7744.js': {
        size: 128,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/s_ebq0vfsfksk.js'],
        symbols: ['s_eBQ0vFsFKsk'],
      },
      'q-56c34f64.js': {
        size: 783,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_404.js', 'src/s_bavvtvgbxhe.js'],
        symbols: ['s_bavVtvgbxHE'],
      },
      'q-5786862e.js': {
        size: 402,
        imports: ['q-2f44cc0c.js', 'q-a3b72f17.js'],
        origins: ['src/entry_projects.js', 'src/s_ymerza5h0vw.js'],
        symbols: ['s_yMerZA5h0Vw'],
      },
      'q-5b9d5302.js': {
        size: 8388,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: [
          'q-64ee48ae.js',
          'q-663033b0.js',
          'q-ae59149a.js',
          'q-b3dc2b1f.js',
        ],
        origins: [
          '@qwik-city-sw-register',
          'node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/index.qwik.mjs',
        ],
      },
      'q-5f02da63.js': {
        size: 202,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-e174f0a3.js'],
        origins: ['src/global.scss', 'src/root.tsx'],
      },
      'q-64ee48ae.js': {
        size: 6034,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        dynamicImports: [
          'q-1650c6af.js',
          'q-8e26f1bd.js',
          'q-b01f5105.js',
          'q-d8cff65f.js',
          'q-defaf50c.js',
          'q-f2cf8524.js',
          'q-f583465e.js',
        ],
        origins: [
          '@qwik-city-plan',
          'src/entry_QwikCityProvider.js',
          'src/s_02wmimzeabk.js',
          'src/s_fx0bdjeja0e.js',
          'src/s_rpdjaz33wla.js',
          'src/s_txcfoy819ag.js',
        ],
        symbols: [
          's_02wMImzEAbk',
          's_fX0bDjeJa0E',
          's_RPDJAz33WLA',
          's_TxCFOy819ag',
        ],
      },
      'q-6564e21e.js': {
        size: 722,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_Articles.js', 'src/s_ahaxqw3gutm.js'],
        symbols: ['s_aHaxQW3gUTM'],
      },
      'q-663033b0.js': {
        size: 2286,
        origins: ['src/entry_spaInit.js', 'src/s_dyvc0ybiqqu.js'],
        symbols: ['s_DyVc0YBIqQU'],
      },
      'q-7db41bf4.js': {
        size: 716,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: [
          'src/components/stacks/stacks.module.css?used',
          'src/entry_Stacks.js',
          'src/s_o91wc8igdho.js',
        ],
        symbols: ['s_o91wC8IGdho'],
      },
      'q-7e43db2f.js': {
        size: 6112,
        imports: ['q-2f44cc0c.js'],
        origins: [
          'src/components/rudolph/rudolph.css?used&inline',
          'src/entry_Rudolph.js',
          'src/s_0bd6ychl7mi.js',
          'src/s_0hhqkojuycm.js',
        ],
        symbols: ['s_0Bd6yCHL7MI', 's_0HhqKOJuYCM'],
      },
      'q-8575bd8a.js': {
        size: 201,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-6564e21e.js'],
        origins: ['src/components/articles/articles.tsx'],
      },
      'q-8e26f1bd.js': {
        size: 487,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        dynamicImports: ['q-a2a3447b.js'],
        origins: ['src/routes/blog/index.tsx'],
      },
      'q-8ea06850.js': {
        size: 2539,
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.2.18_@types+node@20.9.3_sass@1.69.5/node_modules/@builder.io/qwik-city/service-worker.mjs',
          'src/routes/service-worker.ts',
        ],
      },
      'q-a2a3447b.js': {
        size: 537,
        imports: [
          'q-2f44cc0c.js',
          'q-5b9d5302.js',
          'q-8575bd8a.js',
          'q-8e26f1bd.js',
        ],
        origins: ['src/entry_blog.js', 'src/s_uzl3gaaclja.js'],
        symbols: ['s_Uzl3gaAclJA'],
      },
      'q-a3b72f17.js': {
        size: 1439,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-344c774b.js'],
        origins: [
          'src/components/cards/cards.tsx',
          'src/repository/projects.ts',
        ],
      },
      'q-a90c5719.js': {
        size: 179,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-fbb74ab2.js'],
        origins: ['src/components/animated-component/animated-component.tsx'],
      },
      'q-ae59149a.js': {
        size: 1144,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        dynamicImports: ['q-52ff7744.js'],
        origins: [
          'src/entry_Link.js',
          'src/s_8gdlbszqbam.js',
          'src/s_i1cv0pyjnr0.js',
        ],
        symbols: ['s_8gdLBszqbaM', 's_i1Cv0pYJNR0'],
      },
      'q-b01f5105.js': {
        size: 310,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-10f7dfcb.js'],
        origins: ['src/routes/layout.tsx'],
      },
      'q-b3dc2b1f.js': {
        size: 467,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_RouterOutlet.js', 'src/s_e0ssidxoeam.js'],
        symbols: ['s_e0ssiDXoeAM'],
      },
      'q-bf65c018.js': {
        size: 7284,
        imports: ['q-2f44cc0c.js'],
        origins: [
          'src/components/cat/cat-walk.css?used&inline',
          'src/entry_CatWalk.js',
          'src/s_0dhruxbqu40.js',
          'src/s_ik8bqrqgw9g.js',
        ],
        symbols: ['s_0DhRUxBQU40', 's_ik8BQrQgw9g'],
      },
      'q-cc2dd748.js': {
        size: 1779,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: [
          'src/entry_Header.js',
          'src/s_8cyhppvkzxc.js',
          'src/s_o4ccbuviycs.js',
        ],
        symbols: ['s_8cyHPpVKZXc', 's_o4ccBuvIYCs'],
      },
      'q-d29caf81.js': {
        size: 3151,
        imports: ['q-2f44cc0c.js', 'q-defaf50c.js'],
        origins: [
          'src/entry_button_game.js',
          'src/s_lvhxlsc0aiu.js',
          'src/s_sqnygwm7k0k.js',
        ],
        symbols: ['s_lVhXlSc0AIU', 's_SqNyGWM7k0k'],
      },
      'q-d8cff65f.js': {
        size: 381,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-5786862e.js'],
        origins: ['src/routes/projects/index.tsx'],
      },
      'q-d8f7166f.js': {
        size: 1032,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: [
          'src/entry_GetForm.js',
          'src/s_nk9plpjqm9y.js',
          'src/s_p9msze0ojs4.js',
        ],
        symbols: ['s_Nk9PlpjQm9Y', 's_p9MSze0ojs4'],
      },
      'q-defaf50c.js': {
        size: 530,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-d29caf81.js'],
        origins: ['src/routes/button-game/index.tsx'],
      },
      'q-e174f0a3.js': {
        size: 666,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        dynamicImports: ['q-036e65c3.js'],
        origins: [
          'src/components/router-head/router-head.tsx',
          'src/entry_root.js',
          'src/s_exd0k9bzzlo.js',
        ],
        symbols: ['s_eXD0K9bzzlo'],
      },
      'q-e5c77783.js': {
        size: 3243,
        imports: ['q-2f44cc0c.js'],
        origins: [
          'src/components/cat/cat.css?used&inline',
          'src/entry_Cat.js',
          'src/s_k9rs7qccfau.js',
          'src/s_xtysaglbrbu.js',
        ],
        symbols: ['s_k9rs7QcCFAU', 's_xTYSAGLBrBU'],
      },
      'q-f07e0ce4.js': {
        size: 1733,
        imports: ['q-2f44cc0c.js', 'q-a90c5719.js'],
        origins: ['src/entry_Timeline.js', 'src/s_szipqdbaepc.js'],
        symbols: ['s_sZIPqDBaEpc'],
      },
      'q-f2cf8524.js': {
        size: 125,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-8ea06850.js'],
        origins: ['@qwik-city-entries'],
      },
      'q-f44c2d46.js': {
        size: 1820,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_Footer.js', 'src/s_gvphuj5kg9q.js'],
        symbols: ['s_GvPhUJ5Kg9Q'],
      },
      'q-f583465e.js': {
        size: 387,
        imports: ['q-2f44cc0c.js'],
        dynamicImports: ['q-56c34f64.js'],
        origins: ['src/routes/404.tsx'],
      },
      'q-fbb74ab2.js': {
        size: 794,
        imports: ['q-2f44cc0c.js'],
        origins: [
          'src/entry_AnimatedComp.js',
          'src/s_chnwd2d8ibg.js',
          'src/s_sdm0n9zokr0.js',
          'src/utils/helpers.ts',
        ],
        symbols: ['s_CHnWD2D8Ibg', 's_sdm0n9ZoKr0'],
      },
      'q-ff41d346.js': {
        size: 2647,
        imports: ['q-2f44cc0c.js', 'q-5b9d5302.js'],
        origins: ['src/entry_Contact.js', 'src/s_pcebmzcwv9m.js'],
        symbols: ['s_pCebMzCWV9M'],
      },
    },
    injections: [
      {
        tag: 'link',
        location: 'head',
        attributes: { rel: 'stylesheet', href: '/build/q-94918182.css' },
      },
    ],
    version: '1',
    options: {
      target: 'client',
      buildMode: 'production',
      entryStrategy: { type: 'smart' },
    },
    platform: {
      qwik: '1.2.18',
      vite: '',
      rollup: '3.29.4',
      env: 'node',
      os: 'darwin',
      node: '21.1.0',
    },
  },
  ip = () => {
    const e = q0(),
      t = Ni()
    return _(
      R,
      {
        children: [
          u('title', null, null, e.title, 1, null),
          u(
            'link',
            null,
            { href: ye(n => n.url.href, [t], 'p0.url.href'), rel: 'canonical' },
            null,
            3,
            null,
          ),
          u(
            'meta',
            null,
            {
              content: 'width=device-width, initial-scale=1.0',
              name: 'viewport',
            },
            null,
            3,
            null,
          ),
          u(
            'link',
            null,
            { href: '/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
            null,
            3,
            null,
          ),
          e.meta.map(n => Qt('meta', { ...n }, null, 0, n.key)),
          e.links.map(n => Qt('link', { ...n }, null, 0, n.key)),
          e.styles.map(n =>
            Qt(
              'style',
              { ...n.props, dangerouslySetInnerHTML: D(n, 'style') },
              null,
              0,
              n.key,
            ),
          ),
        ],
      },
      1,
      '0Z_0',
    )
  },
  lp = L(z(ip, 's_2Fq8wIUpq5I'))
const ap = () =>
    _(
      I0,
      {
        children: [
          u(
            'head',
            null,
            null,
            [
              u('meta', null, { charSet: 'utf-8' }, null, 3, null),
              u(
                'link',
                null,
                { href: '/manifest.json', rel: 'manifest' },
                null,
                3,
                null,
              ),
              u(
                'script',
                null,
                {
                  async: !0,
                  'data-goatcounter': 'https://pako.goatcounter.com/count',
                  src: '//gc.zgo.at/count.js',
                },
                null,
                3,
                null,
              ),
              _(lp, null, 3, 'Le_0'),
            ],
            1,
            null,
          ),
          u(
            'body',
            null,
            { lang: 'en' },
            [_(b0, null, 3, 'Le_1'), _(R0, null, 3, 'Le_2')],
            1,
            null,
          ),
        ],
      },
      1,
      'Le_3',
    ),
  cp = L(z(ap, 's_eXD0K9bzzlo'))
function up(e) {
  return Hd(_(cp, null, 3, 'Ro_0'), {
    manifest: op,
    ...e,
    containerAttributes: { lang: 'en-us', ...e.containerAttributes },
  })
}
const _p = t0({ render: up, qwikCityPlan: rp })
export { _p as default }
