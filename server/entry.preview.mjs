import { getNotFound as vi } from "./@qwik-city-not-found-paths.js";
import { isStaticPath as yi } from "./@qwik-city-static-paths.js";
import { createReadStream as bi } from "fs";
import { join as Et, basename as wi, extname as _i } from "path";
import { fileURLToPath as xi } from "url";
import { Http2ServerRequest as qi } from "http2";
import {
  TextEncoderStream as Si,
  TextDecoderStream as ki,
  WritableStream as ji,
  ReadableStream as zi,
} from "stream/web";
import {
  fetch as Ei,
  Headers as Ti,
  Request as Ai,
  Response as Ii,
  FormData as Mi,
} from "undici";
import Ci from "crypto";
import Ri from "number-to-words";
import { format as gr } from "date-fns";
var vr = class extends Error {
  constructor(e, t) {
    super(t), (this.status = e);
  }
};
function Li(e, t) {
  let n = "Server Error";
  return (
    t != null &&
      (typeof t.message == "string" ? (n = t.message) : (n = String(t))),
    "<html>" + yr(e, n) + "</html>"
  );
}
function yr(e, t) {
  typeof e != "number" && (e = 500),
    typeof t == "string" ? (t = Pi(t)) : (t = "");
  const n = typeof t == "string" ? "600px" : "300px",
    s = e >= 500 ? Oi : Di;
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
`;
}
var Ni = /[&<>]/g,
  Pi = (e) =>
    e.replace(Ni, (t) => {
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
  Di = "#006ce9",
  Oi = "#713fc2",
  Fi = { lax: "Lax", none: "None", strict: "Strict" },
  Hi = {
    seconds: 1,
    minutes: 1 * 60,
    hours: 1 * 60 * 60,
    days: 1 * 60 * 60 * 24,
    weeks: 1 * 60 * 60 * 24 * 7,
  },
  Qi = (e, t, n) => {
    const s = [`${e}=${t}`];
    typeof n.domain == "string" && s.push(`Domain=${n.domain}`),
      typeof n.maxAge == "number"
        ? s.push(`Max-Age=${n.maxAge}`)
        : Array.isArray(n.maxAge)
        ? s.push(`Max-Age=${n.maxAge[0] * Hi[n.maxAge[1]]}`)
        : typeof n.expires == "number" || typeof n.expires == "string"
        ? s.push(`Expires=${n.expires}`)
        : n.expires instanceof Date &&
          s.push(`Expires=${n.expires.toUTCString()}`),
      n.httpOnly && s.push("HttpOnly"),
      typeof n.path == "string" && s.push(`Path=${n.path}`);
    const r = Ui(n.sameSite);
    return (
      r && s.push(`SameSite=${r}`), n.secure && s.push("Secure"), s.join("; ")
    );
  };
function Rs(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
var Bi = (e) => {
  const t = {};
  if (typeof e == "string" && e !== "") {
    const n = e.split(";");
    for (const s of n) {
      const r = s.indexOf("=");
      r !== -1 && (t[Rs(s.slice(0, r).trim())] = Rs(s.slice(r + 1).trim()));
    }
  }
  return t;
};
function Ui(e) {
  if (e === !0) return "Strict";
  if (e === !1) return "None";
  if (e) return Fi[e];
}
var Ze = Symbol("request-cookies"),
  An = Symbol("response-cookies"),
  ke = Symbol("live-cookies"),
  br,
  wr,
  Wi = class {
    constructor(e) {
      (this[br] = {}),
        (this[wr] = {}),
        (this[Ze] = Bi(e)),
        (this[ke] = { ...this[Ze] });
    }
    get(e, t = !0) {
      const n = this[t ? ke : Ze][e];
      return n
        ? {
            value: n,
            json() {
              return JSON.parse(n);
            },
            number() {
              return Number(n);
            },
          }
        : null;
    }
    getAll(e = !0) {
      return Object.keys(this[e ? ke : Ze]).reduce(
        (t, n) => ((t[n] = this.get(n)), t),
        {}
      );
    }
    has(e, t = !0) {
      return !!this[t ? ke : Ze][e];
    }
    set(e, t, n = {}) {
      this[ke][e] = typeof t == "string" ? t : JSON.stringify(t);
      const s =
        typeof t == "string" ? t : encodeURIComponent(JSON.stringify(t));
      this[An][e] = Qi(e, s, n);
    }
    delete(e, t) {
      this.set(e, "deleted", { ...t, maxAge: 0 }), (this[ke][e] = null);
    }
    headers() {
      return Object.values(this[An]);
    }
  };
(br = An), (wr = ke);
var Vn = class {},
  Lt = class extends Vn {},
  Ls = new WeakMap(),
  Ns = "qaction",
  Vi = "qfunc";
function Ki(e) {
  const { url: t, params: n, request: s, status: r, locale: o } = e,
    i = {};
  s.headers.forEach((y, h) => (i[h] = y));
  const l = e.sharedMap.get(sn),
    c = e.sharedMap.get(zr),
    a = e.sharedMap.get(jr),
    u = e.sharedMap.get(ul),
    f = e.request.headers,
    $ = new URL(t.pathname + t.search, t),
    m = f.get("X-Forwarded-Host"),
    v = f.get("X-Forwarded-Proto");
  return (
    m && (($.port = ""), ($.host = m)),
    v && ($.protocol = v),
    {
      url: $.href,
      requestHeaders: i,
      locale: o(),
      nonce: u,
      containerAttributes: { "q:route": a },
      qwikcity: {
        routeName: a,
        ev: e,
        params: { ...n },
        loadedRoute: fl(e),
        response: { status: r(), loaders: rn(e), action: l, formData: c },
      },
    }
  );
}
var Ji = (e, t, n, s, r) => {
    const o = [],
      i = [],
      l = [],
      c = !!(t && tl(t[2]));
    if ((e && Ps(o, i, l, e, c, n), t)) {
      const a = t[0];
      s &&
        (n === "POST" || n === "PUT" || n === "PATCH" || n === "DELETE") &&
        l.unshift(nl),
        c && (n === "POST" && l.push(Zi), l.push(Xi), l.push(ol)),
        l.push(rl),
        Ps(o, i, l, t[2], c, n),
        c &&
          (l.push((u) => {
            u.sharedMap.set(jr, a);
          }),
          l.push(Yi(o, i)),
          l.push(r));
    }
    return l;
  },
  Ps = (e, t, n, s, r, o) => {
    for (const i of s) {
      typeof i.onRequest == "function"
        ? n.push(i.onRequest)
        : Array.isArray(i.onRequest) && n.push(...i.onRequest);
      let l;
      switch (o) {
        case "GET": {
          l = i.onGet;
          break;
        }
        case "POST": {
          l = i.onPost;
          break;
        }
        case "PUT": {
          l = i.onPut;
          break;
        }
        case "PATCH": {
          l = i.onPatch;
          break;
        }
        case "DELETE": {
          l = i.onDelete;
          break;
        }
        case "OPTIONS": {
          l = i.onOptions;
          break;
        }
        case "HEAD": {
          l = i.onHead;
          break;
        }
      }
      if (
        (typeof l == "function" ? n.push(l) : Array.isArray(l) && n.push(...l),
        r)
      ) {
        const c = Object.values(i).filter((u) => Ds(u, "server_loader"));
        e.push(...c);
        const a = Object.values(i).filter((u) => Ds(u, "server_action"));
        t.push(...a);
      }
    }
  },
  Ds = (e, t) => e && typeof e == "function" && e.__brand === t;
function Yi(e, t) {
  return async (n) => {
    if (n.headersSent) {
      n.exit();
      return;
    }
    const { method: s } = n,
      r = rn(n),
      o = on(n) === "dev",
      i = n[nn];
    if (
      (o &&
        s === "GET" &&
        n.query.has(Ns) &&
        console.warn(`Seems like you are submitting a Qwik Action via GET request. Qwik Actions should be submitted via POST request.
Make sure your <form> has method="POST" attribute, like this: <form method="POST">`),
      s === "POST")
    ) {
      const l = n.query.get(Ns);
      if (l) {
        const c = globalThis._qwikActionsMap,
          a = t.find((u) => u.__id === l) ?? (c == null ? void 0 : c.get(l));
        if (a) {
          n.sharedMap.set(sn, l);
          const u = await n.parseBody();
          if (!u || typeof u != "object")
            throw new Error("Expected request data to be an object");
          const f = await Os(n, a.__validators, u, o);
          if (!f.success) r[l] = n.fail(f.status ?? 500, f.error);
          else {
            const $ = o
              ? await Pt(n, a.__qrl.getSymbol().split("_", 1)[0], () =>
                  a.__qrl.call(n, f.data, n)
                )
              : await a.__qrl.call(n, f.data, n);
            o && Nt(i, $, a.__qrl), (r[l] = $);
          }
        }
      }
    }
    e.length > 0 &&
      (await Promise.all(
        e.map((l) => {
          const c = l.__id;
          return (r[c] = Os(n, l.__validators, void 0, o)
            .then((a) =>
              a.success
                ? o
                  ? Pt(n, l.__qrl.getSymbol().split("_", 1)[0], () =>
                      l.__qrl.call(n, n)
                    )
                  : l.__qrl.call(n, n)
                : n.fail(a.status ?? 500, a.error)
            )
            .then(
              (a) => (
                typeof a == "function"
                  ? (r[c] = a())
                  : (o && Nt(i, a, l.__qrl), (r[c] = a)),
                a
              )
            ));
        })
      ));
  };
}
async function Os(e, t, n, s) {
  let r = { success: !0, data: n };
  if (t)
    for (const o of t)
      if (
        (s
          ? (r = await Pt(e, "validator$", () => o.validate(e, n)))
          : (r = await o.validate(e, n)),
        r.success)
      )
        n = r.data;
      else return r;
  return r;
}
function Gi(e) {
  return e && typeof e == "object" && Symbol.asyncIterator in e;
}
async function Zi(e) {
  const t = e.query.get(Vi);
  if (
    t &&
    e.request.headers.get("X-QRL") === t &&
    e.request.headers.get("Content-Type") === "application/qwik-json"
  ) {
    e.exit();
    const n = on(e) === "dev",
      s = e[nn],
      r = await e.parseBody();
    if (Array.isArray(r)) {
      const [o, ...i] = r;
      if (el(o) && o.getHash() === t) {
        let l;
        try {
          n
            ? (l = await Pt(e, `server_${o.getSymbol()}`, () => o.apply(e, i)))
            : (l = await o.apply(e, i));
        } catch (c) {
          e.headers.set("Content-Type", "application/qwik-json"),
            e.send(500, await s._serializeData(c, !0));
          return;
        }
        if (Gi(l)) {
          e.headers.set("Content-Type", "text/qwik-json-stream");
          const a = e.getWritableStream().getWriter();
          for await (const u of l) {
            n && Nt(s, u, o);
            const f = await s._serializeData(u, !0);
            if (e.signal.aborted) break;
            await a.write(
              tn.encode(`${f}
`)
            );
          }
          a.close();
        } else {
          Nt(s, l, o), e.headers.set("Content-Type", "application/qwik-json");
          const c = await s._serializeData(l, !0);
          e.send(200, c);
        }
        return;
      }
    }
    throw e.error(500, "Invalid request");
  }
}
function Xi(e) {
  const t = Kn(e),
    { basePathname: n, pathname: s, url: r, sharedMap: o } = e;
  if (!o.has(mt) && s !== n && !s.endsWith(".html")) {
    if (t) {
      if (!s.endsWith("/")) throw e.redirect(302, s + "/" + r.search);
    } else if (s.endsWith("/"))
      throw e.redirect(302, s.slice(0, s.length - 1) + r.search);
  }
}
function Nt(e, t, n) {
  try {
    e._verifySerializable(t, void 0);
  } catch (s) {
    throw (s instanceof Error && n.dev && (s.loc = n.dev), s);
  }
}
var el = (e) => typeof e == "function" && typeof e.getSymbol == "function";
function tl(e) {
  const t = e[e.length - 1];
  return t && typeof t.default == "function";
}
function _r(e, t) {
  return (
    (e = new URL(e)),
    e.pathname.endsWith(He) && (e.pathname = e.pathname.slice(0, -He.length)),
    t
      ? e.pathname.endsWith("/") || (e.pathname += "/")
      : e.pathname.endsWith("/") && (e.pathname = e.pathname.slice(0, -1)),
    e.toString().substring(e.origin.length)
  );
}
var tn = new TextEncoder();
function nl(e) {
  if (
    ll(
      e.request.headers,
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain"
    )
  ) {
    const n = e.request.headers.get("origin"),
      s = e.url.origin;
    if (n !== s)
      throw e.error(
        403,
        `CSRF check failed. Cross-site ${e.method} form submissions are forbidden.
The request origin "${n}" does not match the server origin "${s}".`
      );
  }
}
function sl(e) {
  return async (t) => {
    if (t.headersSent || t.sharedMap.has(mt)) return;
    t.request.headers.forEach((f, $) => f);
    const s = t.headers;
    s.has("Content-Type") || s.set("Content-Type", "text/html; charset=utf-8");
    const r = Kn(t),
      { readable: o, writable: i } = new TextEncoderStream(),
      l = t.getWritableStream(),
      c = o.pipeTo(l, { preventClose: !0 }),
      a = i.getWriter(),
      u = t.status();
    try {
      const f = on(t) === "static",
        $ = Ki(t),
        m = await e({
          base: t.basePathname + "build/",
          stream: a,
          serverData: $,
          containerAttributes: {
            "q:render": f ? "static" : "",
            ...$.containerAttributes,
          },
        }),
        v = {
          loaders: rn(t),
          action: t.sharedMap.get(sn),
          status: u !== 200 ? u : 200,
          href: _r(t.url, r),
        };
      typeof m.html == "string" && (await a.write(m.html)),
        t.sharedMap.set("qData", v);
    } finally {
      await a.ready, await a.close(), await c;
    }
    await l.close();
  };
}
async function rl(e) {
  if (e.sharedMap.has(mt)) {
    try {
      await e.next();
    } catch (o) {
      if (!(o instanceof Lt)) throw o;
    }
    if (e.headersSent) return;
    const n = e.status(),
      s = e.headers.get("Location");
    if (n >= 301 && n <= 308 && s) {
      const o = il(s);
      if (o) {
        e.headers.set("Location", o), e.getWritableStream().close();
        return;
      } else e.status(200), e.headers.delete("Location");
    }
  }
}
async function ol(e) {
  if (e.sharedMap.has(mt)) {
    if ((await e.next(), e.headersSent || e.exited)) return;
    const n = e.status(),
      s = e.headers.get("Location"),
      r = Kn(e);
    e.request.headers.forEach((a, u) => a),
      e.headers.set("Content-Type", "application/json; charset=utf-8");
    const o = {
        loaders: rn(e),
        action: e.sharedMap.get(sn),
        status: n !== 200 ? n : 200,
        href: _r(e.url, r),
        redirect: s ?? void 0,
      },
      i = e.getWritableStream().getWriter(),
      c = await e[nn]._serializeData(o, !0);
    i.write(tn.encode(c)), e.sharedMap.set("qData", o), i.close();
  }
}
function il(e) {
  if (e.startsWith("/")) {
    const t = He,
      n = new URL(e, "http://localhost");
    return (
      (n.pathname.endsWith("/") ? n.pathname.slice(0, -1) : n.pathname) +
      (t.startsWith("/") ? "" : "/") +
      t +
      n.search
    );
  } else return;
}
function Fs() {
  return typeof performance < "u" ? performance.now() : 0;
}
async function Pt(e, t, n) {
  const s = Fs();
  try {
    return await n();
  } finally {
    const r = Fs() - s;
    let o = e.sharedMap.get("@serverTiming");
    o || e.sharedMap.set("@serverTiming", (o = [])), o.push([t, r]);
  }
}
function ll(e, ...t) {
  var n;
  const s =
    ((n = e.get("content-type")) == null
      ? void 0
      : n.split(/;,/, 1)[0].trim()) ?? "";
  return t.includes(s);
}
function cl(e) {
  const t = [];
  return (
    e === "day"
      ? (e = 60 * 60 * 24)
      : e === "week"
      ? (e = 60 * 60 * 24 * 7)
      : e === "month"
      ? (e = 60 * 60 * 24 * 30)
      : e === "year"
      ? (e = 60 * 60 * 24 * 365)
      : e === "private"
      ? (e = { private: !0, noCache: !0 })
      : e === "immutable"
      ? (e = {
          public: !0,
          immutable: !0,
          maxAge: 60 * 60 * 24 * 365,
          staleWhileRevalidate: 60 * 60 * 24 * 365,
        })
      : e === "no-cache" && (e = { noCache: !0 }),
    typeof e == "number" &&
      (e = { maxAge: e, sMaxAge: e, staleWhileRevalidate: e }),
    e.immutable && t.push("immutable"),
    e.maxAge && t.push(`max-age=${e.maxAge}`),
    e.sMaxAge && t.push(`s-maxage=${e.sMaxAge}`),
    e.noStore && t.push("no-store"),
    e.noCache && t.push("no-cache"),
    e.private && t.push("private"),
    e.public && t.push("public"),
    e.staleWhileRevalidate &&
      t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),
    e.staleIfError && t.push(`stale-if-error=${e.staleIfError}`),
    t.join(", ")
  );
}
var al = (e) => e && typeof e.then == "function",
  xr = Symbol("RequestEvLoaders"),
  qr = Symbol("RequestEvMode"),
  Sr = Symbol("RequestEvRoute"),
  nn = Symbol("RequestEvQwikSerializer"),
  kr = Symbol("RequestEvTrailingSlash"),
  jr = "@routeName",
  sn = "@actionId",
  zr = "@actionFormData",
  ul = "@nonce";
function dl(e, t, n, s, r, o, i, l) {
  const { request: c, platform: a, env: u } = e,
    f = new Map(),
    $ = new Wi(c.headers.get("cookie")),
    m = new Headers(),
    v = new URL(c.url);
  v.pathname.endsWith(He) &&
    ((v.pathname = v.pathname.slice(0, -Er)),
    r && !v.pathname.endsWith("/") && (v.pathname += "/"),
    f.set(mt, !0)),
    f.set("@manifest", s);
  let y = -1,
    h = null,
    p,
    j = e.locale,
    w = 200;
  const g = async () => {
      for (y++; y < n.length; ) {
        const x = n[y],
          E = x(T);
        al(E) && (await E), y++;
      }
    },
    k = () => {
      if (h !== null) throw new Error("Response already sent");
    },
    z = (x, E) => {
      if ((k(), typeof x == "number")) {
        w = x;
        const Q = T.getWritableStream().getWriter();
        Q.write(typeof E == "string" ? tn.encode(E) : E), Q.close();
      } else if (
        ((w = x.status),
        x.headers.forEach((A, Q) => {
          m.append(Q, A);
        }),
        x.body)
      ) {
        const A = T.getWritableStream();
        x.body.pipeTo(A);
      } else {
        if (w >= 300 && w < 400) return new Lt();
        T.getWritableStream().getWriter().close();
      }
      return _();
    },
    _ = () => ((y = Hs), new Vn()),
    q = {},
    T = {
      [xr]: q,
      [qr]: e.mode,
      [kr]: r,
      [Sr]: t,
      [nn]: i,
      cookie: $,
      headers: m,
      env: u,
      method: c.method,
      signal: c.signal,
      params: (t == null ? void 0 : t[1]) ?? {},
      pathname: v.pathname,
      platform: a,
      query: v.searchParams,
      request: c,
      url: v,
      basePathname: o,
      sharedMap: f,
      get headersSent() {
        return h !== null;
      },
      get exited() {
        return y >= Hs;
      },
      get clientConn() {
        return e.getClientConn();
      },
      next: g,
      exit: _,
      cacheControl: (x, E = "Cache-Control") => {
        k(), m.set(E, cl(x));
      },
      resolveValue: async (x) => {
        const E = x.__id;
        if (x.__brand === "server_loader" && !(E in q))
          throw new Error(
            "You can not get the returned data of a loader that has not been executed for this request."
          );
        return q[E];
      },
      status: (x) => (typeof x == "number" ? (k(), (w = x), x) : w),
      locale: (x) => (typeof x == "string" && (j = x), j || ""),
      error: (x, E) => ((w = x), m.delete("Cache-Control"), new vr(x, E)),
      redirect: (x, E) => {
        if ((k(), (w = x), E)) {
          const A = E.replace(/([^:])\/{2,}/g, "$1/");
          E !== A &&
            console.warn(`Redirect URL ${E} is invalid, fixing to ${A}`),
            m.set("Location", A);
        }
        return (
          m.delete("Cache-Control"),
          x > 301 && m.set("Cache-Control", "no-store"),
          _(),
          new Lt()
        );
      },
      defer: (x) => (typeof x == "function" ? x : () => x),
      fail: (x, E) => (
        k(), (w = x), m.delete("Cache-Control"), { failed: !0, ...E }
      ),
      text: (x, E) => (
        m.set("Content-Type", "text/plain; charset=utf-8"), z(x, E)
      ),
      html: (x, E) => (
        m.set("Content-Type", "text/html; charset=utf-8"), z(x, E)
      ),
      parseBody: async () => (p !== void 0 ? p : (p = $l(T.request, f, i))),
      json: (x, E) => (
        m.set("Content-Type", "application/json; charset=utf-8"),
        z(x, JSON.stringify(E))
      ),
      send: z,
      isDirty: () => h !== null,
      getWritableStream: () => {
        if (h === null) {
          if (e.mode === "dev") {
            const x = f.get("@serverTiming");
            x &&
              m.set(
                "Server-Timing",
                x.map((E) => `${E[0]};dur=${E[1]}`).join(",")
              );
          }
          h = e.getWritableStream(w, m, $, l, T);
        }
        return h;
      },
    };
  return Object.freeze(T);
}
function rn(e) {
  return e[xr];
}
function Kn(e) {
  return e[kr];
}
function fl(e) {
  return e[Sr];
}
function on(e) {
  return e[qr];
}
var Hs = Number.MAX_SAFE_INTEGER,
  $l = async (e, t, n) => {
    var s;
    const r = e.clone(),
      o =
        ((s = e.headers.get("content-type")) == null
          ? void 0
          : s.split(/[;,]/, 1)[0].trim()) ?? "";
    if (
      o === "application/x-www-form-urlencoded" ||
      o === "multipart/form-data"
    ) {
      const i = await r.formData();
      return t.set(zr, i), pl(i);
    } else {
      if (o === "application/json") return await r.json();
      if (o === "application/qwik-json")
        return n._deserializeData(await r.text());
    }
  },
  pl = (e) =>
    [...e.entries()].reduce(
      (n, [s, r]) => (
        s.split(".").reduce((o, i, l, c) => {
          if (i.endsWith("[]")) {
            const a = i.slice(0, -2);
            return (o[a] = o[a] || []), (o[a] = [...o[a], r]);
          }
          return l < c.length - 1
            ? (o[i] = o[i] || (Number.isNaN(+c[l + 1]) ? {} : []))
            : (o[i] = r);
        }, n),
        n
      ),
      {}
    );
function ml(e, t, n, s, r = !0, o = "/", i) {
  let l;
  const c = new Promise((u) => (l = u)),
    a = dl(e, t, n, s, r, o, i, l);
  return { response: c, requestEv: a, completion: hl(a, l) };
}
async function hl(e, t) {
  try {
    await e.next();
  } catch (n) {
    if (n instanceof Lt) await e.getWritableStream().close();
    else if (n instanceof vr) {
      if ((console.error(n), !e.headersSent)) {
        const s = Li(n.status, n),
          r = n.status;
        e.html(r, s);
      }
    } else if (!(n instanceof Vn)) {
      if (on(e) !== "dev")
        try {
          e.headersSent ||
            (e.headers.set("content-type", "text/html; charset=utf-8"),
            e.cacheControl({ noCache: !0 }),
            e.status(500));
          const s = e.getWritableStream();
          if (!s.locked) {
            const r = s.getWriter();
            await r.write(tn.encode(yr(500, "Internal Server Error"))),
              await r.close();
          }
        } catch {
          console.error("Unable to render error page");
        }
      return n;
    }
  } finally {
    e.isDirty() || t(null);
  }
}
function gl(e, t) {
  if (e.endsWith(He)) {
    const n = e.length - Er + (t ? 1 : 0);
    (e = e.slice(0, n)), e === "" && (e = "/");
  }
  return e;
}
var mt = "@isQData",
  He = "/q-data.json",
  Er = He.length;
function vl(e, t) {
  const n = Us(e),
    s = Qs(e),
    r = Us(t),
    o = Qs(t);
  return Tr(e, n, s, t, r, o);
}
function Tr(e, t, n, s, r, o) {
  let i = null;
  for (; t < n; ) {
    const l = e.charCodeAt(t++),
      c = s.charCodeAt(r++);
    if (l === 91) {
      const a = Ar(e, t),
        u = t + (a ? 3 : 0),
        f = qn(e, u, n, 93),
        $ = e.substring(u, f),
        m = qn(e, f + 1, n, 47),
        v = e.substring(f + 1, m);
      t = f + 1;
      const y = r - 1;
      if (a) {
        const j = bl($, v, s, y, o, e, t + v.length + 1, n);
        if (j) return Object.assign(i || (i = {}), j);
      }
      const h = qn(s, y, o, 47, v);
      if (h == -1) return null;
      const p = s.substring(y, h);
      if (!a && !v && !p) return null;
      (r = h), ((i || (i = {}))[$] = decodeURIComponent(p));
    } else if (l !== c && !(isNaN(c) && yl(e, t))) return null;
  }
  return Bs(e, t) && Bs(s, r) ? i || {} : null;
}
function yl(e, t) {
  return e.charCodeAt(t) === 91 && Ar(e, t + 1);
}
function Qs(e) {
  const t = e.length;
  return t > 1 && e.charCodeAt(t - 1) === 47 ? t - 1 : t;
}
function Bs(e, t) {
  const n = e.length;
  return t >= n || (t == n - 1 && e.charCodeAt(t) === 47);
}
function Us(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0;
}
function Ar(e, t) {
  return (
    e.charCodeAt(t) === 46 &&
    e.charCodeAt(t + 1) === 46 &&
    e.charCodeAt(t + 2) === 46
  );
}
function qn(e, t, n, s, r = "") {
  for (; t < n && e.charCodeAt(t) !== s; ) t++;
  const o = r.length;
  for (let i = 0; i < o; i++)
    if (e.charCodeAt(t - o + i) !== r.charCodeAt(i)) return -1;
  return t - o;
}
function bl(e, t, n, s, r, o, i, l) {
  n.charCodeAt(s) === 47 && s++;
  let c = r;
  const a = t + "/";
  let u = 5;
  for (; c >= s && u--; ) {
    const f = Tr(o, i, l, n, c, r);
    if (f) {
      let $ = n.substring(s, Math.min(c, r));
      return (
        $.endsWith(a) && ($ = $.substring(0, $.length - a.length)),
        (f[e] = decodeURIComponent($)),
        f
      );
    }
    c = wl(n, s, a, c, s - 1) + a.length;
  }
  return null;
}
function wl(e, t, n, s, r) {
  let o = e.lastIndexOf(n, s);
  return (
    o == s - n.length && (o = e.lastIndexOf(n, s - n.length - 1)), o > t ? o : r
  );
}
var _l = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0],
          i = vl(o, s);
        if (i) {
          const l = r[1],
            c = r[3],
            a = new Array(l.length),
            u = [],
            f = xl(t, s);
          let $;
          return (
            l.forEach((m, v) => {
              Ws(m, u, (y) => (a[v] = y), n);
            }),
            Ws(f, u, (m) => ($ = m == null ? void 0 : m.default), n),
            u.length > 0 && (await Promise.all(u)),
            [o, i, a, $, c]
          );
        }
      }
    return null;
  },
  Ws = (e, t, n, s) => {
    if (typeof e == "function") {
      const r = Ls.get(e);
      if (r) n(r);
      else {
        const o = e();
        typeof o.then == "function"
          ? t.push(
              o.then((i) => {
                s !== !1 && Ls.set(e, i), n(i);
              })
            )
          : o && n(o);
      }
    }
  },
  xl = (e, t) => {
    if (e) {
      t = t.endsWith("/") ? t : t + "/";
      const n = e.find(
        (s) => s[0] === t || t.startsWith(s[0] + (t.endsWith("/") ? "" : "/"))
      );
      if (n) return n[1];
    }
  };
async function ql(e, t, n) {
  const { render: s, qwikCityPlan: r, manifest: o, checkOrigin: i } = t,
    l = e.url.pathname,
    c = gl(l, r.trailingSlash),
    a = await Sl(r, c, e.request.method, i ?? !0, s);
  return a ? ml(e, a[0], a[1], o, r.trailingSlash, r.basePathname, n) : null;
}
async function Sl(e, t, n, s, r) {
  const { routes: o, serverPlugins: i, menus: l, cacheModules: c } = e,
    a = await _l(o, l, c, t),
    u = Ji(i, a, n, s, sl(r));
  return u.length > 0 ? [a, u] : null;
}
const kl = !0,
  jl = !1;
/**
 * @license
 * @builder.io/qwik 1.2.15
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ const xe = (e) => e && typeof e.nodeType == "number",
  Ir = (e) => e.nodeType === 9,
  qe = (e) => e.nodeType === 1,
  Ie = (e) => {
    const t = e.nodeType;
    return t === 1 || t === 111;
  },
  zl = (e) => {
    const t = e.nodeType;
    return t === 1 || t === 111 || t === 3;
  },
  fe = (e) => e.nodeType === 111,
  Jn = (e) => e.nodeType === 3,
  ht = (e) => e.nodeType === 8,
  ot = (e, ...t) => Gn(!0, e, ...t),
  El = (e, ...t) => {
    throw Gn(!1, e, ...t);
  },
  Yn = (e, ...t) => Gn(!0, e, ...t),
  it = () => {},
  Tl = (e) => e,
  Gn = (e, t, ...n) => {
    const s = t instanceof Error ? t : new Error(t);
    return (
      console.error("%cQWIK ERROR", "", s.stack || s.message, ...Tl(n)),
      e &&
        setTimeout(() => {
          throw s;
        }, 0),
      s
    );
  },
  H = (e, ...t) => {
    const n = ln(e);
    return Yn(n, ...t);
  },
  ln = (e) => `Code(${e})`,
  Al = () => ({
    isServer: kl,
    importSymbol(e, t, n) {
      var o;
      {
        const i = Uo(n),
          l = (o = globalThis.__qwik_reg_symbols) == null ? void 0 : o.get(i);
        if (l) return l;
      }
      if (!t) throw H(31, n);
      if (!e) throw H(30, t, n);
      const s = Il(e.ownerDocument, e, t).toString(),
        r = new URL(s);
      return (r.hash = ""), (r.search = ""), import(r.href).then((i) => i[n]);
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
  Il = (e, t, n) => {
    const s = e.baseURI,
      r = new URL(t.getAttribute("q:base") ?? s, s);
    return new URL(n, r);
  };
let Zn = Al();
const Mr = (e) => (Zn = e),
  cn = () => Zn,
  Me = () => Zn.isServer;
const gt = (e) => {
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  },
  $e = (e) => e && typeof e == "object",
  D = (e) => Array.isArray(e),
  Ce = (e) => typeof e == "string",
  X = (e) => typeof e == "function",
  U = (e) => e && typeof e.then == "function",
  an = (e, t, n) => {
    try {
      const s = e();
      return U(s) ? s.then(t, n) : t(s);
    } catch (s) {
      return n(s);
    }
  },
  C = (e, t) => (U(e) ? e.then(t) : t(e)),
  Xn = (e) => (e.some(U) ? Promise.all(e) : e),
  Dt = (e) => (e.length > 0 ? Promise.all(e) : e),
  Cr = (e) => e != null,
  Ml = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    }),
  ae = [],
  V = {},
  vt = (e) =>
    typeof document < "u" ? document : e.nodeType === 9 ? e : e.ownerDocument,
  ee = "q:slot",
  un = "q:style",
  In = Symbol("proxy target"),
  Le = Symbol("proxy flags"),
  ue = Symbol("proxy manager"),
  b = Symbol("IMMUTABLE"),
  dn = "_qc_",
  Z = (e, t, n) => e.setAttribute(t, n),
  oe = (e, t) => e.getAttribute(t),
  es = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(),
  Cl = (e) => e.replace(/-./g, (t) => t[1].toUpperCase()),
  Rl = /^(on|window:|document:)/,
  Mn = "preventdefault:",
  Ot = (e) => e.endsWith("$") && Rl.test(e),
  ts = (e) => {
    if (e.length === 0) return ae;
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
  Ft = (e, t, n, s) => {
    if ((t.endsWith("$"), (t = Cn(t.slice(0, -1))), n))
      if (D(n)) {
        const r = n
          .flat(1 / 0)
          .filter((o) => o != null)
          .map((o) => [t, Ks(o, s)]);
        e.push(...r);
      } else e.push([t, Ks(n, s)]);
    return t;
  },
  Vs = ["on", "window:on", "document:on"],
  Ll = ["on", "on-window", "on-document"],
  Cn = (e) => {
    let t = "on";
    for (let n = 0; n < Vs.length; n++) {
      const s = Vs[n];
      if (e.startsWith(s)) {
        (t = Ll[n]), (e = e.slice(s.length));
        break;
      }
    }
    return t + ":" + (e = e.startsWith("-") ? es(e.slice(1)) : e.toLowerCase());
  },
  Ks = (e, t) => (e.$setContainer$(t), e),
  Nl = (e, t) => {
    const n = e.$element$.attributes,
      s = [];
    for (let r = 0; r < n.length; r++) {
      const { name: o, value: i } = n.item(r);
      if (
        o.startsWith("on:") ||
        o.startsWith("on-window:") ||
        o.startsWith("on-document:")
      ) {
        const l = i.split(`
`);
        for (const c of l) {
          const a = vn(c, t);
          a.$capture$ && No(a, e), s.push([o, a]);
        }
      }
    }
    return s;
  },
  Js = Symbol("ContainerState"),
  Ke = (e) => {
    let t = e[Js];
    return t || (e[Js] = t = Rr(e, oe(e, "q:base") ?? "/")), t;
  },
  Rr = (e, t) => {
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
    return (n.$subsManager$ = S1(n)), n;
  },
  ns = (e, t) => {
    if (X(e)) return e(t);
    if ($e(e) && "value" in e) return (e.value = t);
    throw H(32, e);
  },
  Pl = (e) => qe(e) && e.hasAttribute("q:container"),
  we = (e) => e.toString(36),
  ce = (e) => parseInt(e, 36),
  Lr = (e) => {
    const t = e.indexOf(":");
    return e && Cl(e.slice(t + 1));
  },
  Dl = (e, t) => {
    Pr(Nr(e, void 0), t);
  },
  Ys = (e, t) => {
    Pr(Nr(e, "document"), t);
  },
  Nr = (e, t) => {
    const n = t !== void 0 ? t + ":" : "";
    return Array.isArray(e) ? e.map((s) => `${n}on-${s}`) : `${n}on-${e}`;
  },
  Pr = (e, t) => {
    if (t) {
      const n = lo(),
        s = se(n.$hostElement$, n.$renderCtx$.$static$.$containerState$);
      typeof e == "string"
        ? s.li.push([Cn(e), t])
        : s.li.push(...e.map((r) => [Cn(r), t])),
        (s.$flags$ |= _e);
    }
  },
  Ol = (e, t, n, s) => {
    typeof CustomEvent == "function" &&
      e &&
      e.dispatchEvent(
        new CustomEvent(t, { detail: n, bubbles: s, composed: s })
      );
  },
  je = (e, t, n) => new Rn(e, t, n),
  Fl = (e) => {
    const t = e.$funcStr$;
    let n = "";
    for (let s = 0; s < e.$args$.length; s++) n += `p${s},`;
    return `(${n})=>(${t})`;
  };
var Dr;
const Hl = (e, t, n, s) => {
    const r = t.$subsManager$.$createManager$(s);
    return new ct(e, r, n);
  },
  lt = Symbol("proxy manager"),
  Or = Symbol("unassigned signal");
class yt {}
class ct extends yt {
  constructor(t, n, s) {
    super(),
      (this[Dr] = 0),
      (this.untrackedValue = t),
      (this[ue] = n),
      (this[lt] = s);
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
    if (2 & this[lt]) throw Or;
    const t = (n = he()) == null ? void 0 : n.$subscriber$;
    return t && this[ue].$addSub$(t), this.untrackedValue;
  }
  set value(t) {
    const n = this[ue];
    n &&
      this.untrackedValue !== t &&
      ((this.untrackedValue = t), n.$notifySubs$());
  }
}
Dr = lt;
class Rn extends yt {
  constructor(t, n, s) {
    super(), (this.$func$ = t), (this.$args$ = n), (this.$funcStr$ = s);
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
}
class Ln extends yt {
  constructor(t, n) {
    super(), (this.ref = t), (this.prop = n);
  }
  get [ue]() {
    return K(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
}
const te = (e) => e instanceof yt,
  bt = (e, t) => {
    var r, o;
    if (!$e(e)) return e[t];
    if (e instanceof yt) return e;
    const n = Re(e);
    if (n) {
      const i = n["$$" + t];
      if (i) return i;
      if (((r = n[b]) == null ? void 0 : r[t]) !== !0) return new Ln(e, t);
    }
    const s = (o = e[b]) == null ? void 0 : o[t];
    return te(s) ? s : b;
  },
  P = (e, t) => {
    const n = bt(e, t);
    return n === b ? e[t] : n;
  },
  ss = (e, t, n = 0) =>
    t.$proxyMap$.get(e) || (n !== 0 && $n(e, n), wt(e, t, void 0)),
  wt = (e, t, n) => {
    jt(e), t.$proxyMap$.has(e);
    const s = t.$subsManager$.$createManager$(n),
      r = new Proxy(e, new Fr(t, s));
    return t.$proxyMap$.set(e, r), r;
  },
  fn = () => {
    const e = {};
    return $n(e, 2), e;
  },
  $n = (e, t) => {
    Object.defineProperty(e, Le, { value: t, enumerable: !1 });
  };
class Fr {
  constructor(t, n) {
    (this.$containerState$ = t), (this.$manager$ = n);
  }
  deleteProperty(t, n) {
    if (2 & t[Le]) throw H(17);
    return (
      typeof n == "string" &&
      delete t[n] &&
      (this.$manager$.$notifySubs$(D(t) ? void 0 : n), !0)
    );
  }
  get(t, n) {
    var a;
    if (typeof n == "symbol")
      return n === In ? t : n === ue ? this.$manager$ : t[n];
    const s = t[Le] ?? 0,
      r = he(),
      o = (1 & s) != 0,
      i = t["$$" + n];
    let l, c;
    if (
      (r && (l = r.$subscriber$),
      !(2 & s) ||
        (n in t && !Ql((a = t[b]) == null ? void 0 : a[n])) ||
        (l = null),
      i ? ((c = i.value), (l = null)) : (c = t[n]),
      l)
    ) {
      const u = D(t);
      this.$manager$.$addSub$(l, u ? void 0 : n);
    }
    return o ? Bl(c, this.$containerState$) : c;
  }
  set(t, n, s) {
    if (typeof n == "symbol") return (t[n] = s), !0;
    const r = t[Le] ?? 0;
    if (2 & r) throw H(17);
    const o = 1 & r ? jt(s) : s;
    if (D(t)) return (t[n] = o), this.$manager$.$notifySubs$(), !0;
    const i = t[n];
    return (t[n] = o), i !== o && this.$manager$.$notifySubs$(n), !0;
  }
  has(t, n) {
    if (n === In) return !0;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(t, n) || !(typeof n != "string" || !s.call(t, "$$" + n));
  }
  ownKeys(t) {
    if (!(2 & (t[Le] ?? 0))) {
      let s = null;
      const r = he();
      r && (s = r.$subscriber$), s && this.$manager$.$addSub$(s);
    }
    return D(t)
      ? Reflect.ownKeys(t)
      : Reflect.ownKeys(t).map((s) =>
          typeof s == "string" && s.startsWith("$$") ? s.slice(2) : s
        );
  }
  getOwnPropertyDescriptor(t, n) {
    return D(t) || typeof n == "symbol"
      ? Object.getOwnPropertyDescriptor(t, n)
      : { enumerable: !0, configurable: !0 };
  }
}
const Ql = (e) => e === b || te(e),
  Bl = (e, t) => {
    if ($e(e)) {
      if (Object.isFrozen(e)) return e;
      const n = jt(e);
      if (n !== e || Fo(n)) return e;
      if (gt(n) || D(n)) return t.$proxyMap$.get(n) || ss(n, t, 1);
    }
    return e;
  },
  rs = Symbol("skip render"),
  Hr = () => null,
  Qr = () => null,
  Je = () => {
    const e = lo(),
      t = se(e.$hostElement$, e.$renderCtx$.$static$.$containerState$),
      n = t.$seq$ || (t.$seq$ = []),
      s = e.$i$++;
    return { val: n[s], set: (r) => (n[s] = r), i: s, iCtx: e, elCtx: t };
  },
  ye = (e) => Object.freeze({ id: es(e) }),
  be = (e, t) => {
    const { val: n, set: s, elCtx: r } = Je();
    if (n !== void 0) return;
    (r.$contexts$ || (r.$contexts$ = new Map())).set(e.id, t), s(!0);
  },
  _t = (e, t) => {
    const { val: n, set: s, iCtx: r, elCtx: o } = Je();
    if (n !== void 0) return n;
    const i = Br(e, o, r.$renderCtx$.$static$.$containerState$);
    if (typeof t == "function") return s(J(void 0, t, i));
    if (i !== void 0) return s(i);
    if (t !== void 0) return s(t);
    throw H(13, e.id);
  },
  Ul = (e, t) => {
    var r;
    let n = e,
      s = 1;
    for (; n && !((r = n.hasAttribute) != null && r.call(n, "q:container")); ) {
      for (; (n = n.previousSibling); )
        if (ht(n)) {
          const o = n.__virtual;
          if (o) {
            const i = o[dn];
            if (n === o.open) return i ?? se(o, t);
            if (i != null && i.$parentCtx$) return i.$parentCtx$;
            n = o;
            continue;
          }
          if (n.data === "/qv") s++;
          else if (n.data.startsWith("qv ") && (s--, s === 0))
            return se(kt(n), t);
        }
      (n = e.parentElement), (e = n);
    }
    return null;
  },
  Nn = (e, t) => {
    if (e.$parentCtx$ === void 0) {
      const n = Ul(e.$element$, t);
      e.$parentCtx$ = !n || n.$contexts$ ? n : Nn(n, t);
    } else
      e.$parentCtx$ &&
        !e.$parentCtx$.$contexts$ &&
        (e.$parentCtx$ = Nn(e.$parentCtx$, t));
    return e.$parentCtx$;
  },
  Br = (e, t, n) => {
    var o;
    const s = e.id;
    if (!t) return;
    let r = t;
    for (; r; ) {
      const i = (o = r.$contexts$) == null ? void 0 : o.get(s);
      if (i) return i;
      r = Nn(r, n);
    }
  },
  Wl = ye("qk-error"),
  os = (e, t, n) => {
    const s = ne(t);
    if (Me()) throw e;
    {
      const r = Br(Wl, s, n.$static$.$containerState$);
      if (r === void 0) throw e;
      r.error = e;
    }
  },
  Ht = (e, t) => {
    (t.$flags$ &= ~Be), (t.$flags$ |= fs), (t.$slots$ = []), (t.li.length = 0);
    const n = t.$element$,
      s = t.$componentQrl$,
      r = t.$props$,
      o = re(e.$static$.$locale$, n, void 0, "qRender"),
      i = (o.$waitOn$ = []),
      l = xt(e);
    (l.$cmpCtx$ = t),
      (l.$slotCtx$ = null),
      (o.$subscriber$ = [0, n]),
      (o.$renderCtx$ = e),
      s.$setContainer$(e.$static$.$containerState$.$containerEl$);
    const c = s.getFn(o);
    return an(
      () => c(r),
      (a) => C(Dt(i), () => (t.$flags$ & Be ? Ht(e, t) : { node: a, rCtx: l })),
      (a) =>
        a === Or
          ? C(Dt(i), () => Ht(e, t))
          : (os(a, n, e), { node: rs, rCtx: l })
    );
  },
  Ur = (e, t) => ({
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
  xt = (e) => ({
    $static$: e.$static$,
    $cmpCtx$: e.$cmpCtx$,
    $slotCtx$: e.$slotCtx$,
  }),
  is = (e, t) =>
    t && t.$scopeIds$ ? t.$scopeIds$.join(" ") + " " + Qt(e) : Qt(e),
  Qt = (e) => {
    if (!e) return "";
    if (Ce(e)) return e.trim();
    const t = [];
    if (D(e))
      for (const n of e) {
        const s = Qt(n);
        s && t.push(s);
      }
    else for (const [n, s] of Object.entries(e)) s && t.push(n.trim());
    return t.join(" ");
  },
  pn = (e) => {
    if (e == null) return "";
    if (typeof e == "object") {
      if (D(e)) throw H(0, e, "style");
      {
        const t = [];
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const s = e[n];
            if (s != null) {
              const r = n.startsWith("--") ? n : es(n);
              t.push(r + ":" + s);
            }
          }
        return t.join(";");
      }
    }
    return String(e);
  },
  at = (e) => we(e.$static$.$containerState$.$elementIndex$++),
  Wr = (e, t) => {
    const n = at(e);
    t.$id$ = n;
  },
  Qe = (e) =>
    te(e) ? Qe(e.value) : e == null || typeof e == "boolean" ? "" : String(e);
function Vr(e) {
  return e.startsWith("aria-");
}
const Kr = (e, t) => !!t.key && (!Ye(e) || (!X(e.type) && e.key != t.key)),
  W = "dangerouslySetInnerHTML",
  ls = (e, t, n) => {
    const s = !(t.$flags$ & fs),
      r = t.$element$,
      o = e.$static$.$containerState$;
    return (
      o.$hostsStaging$.delete(t),
      o.$subsManager$.$clearSub$(r),
      C(Ht(e, t), (i) => {
        const l = e.$static$,
          c = i.rCtx,
          a = re(e.$static$.$locale$, r);
        if (
          (l.$hostElements$.add(r),
          (a.$subscriber$ = [0, r]),
          (a.$renderCtx$ = c),
          s && t.$appendStyles$)
        )
          for (const f of t.$appendStyles$) $a(l, f);
        const u = ut(i.node, a);
        return C(u, (f) => {
          const $ = Vl(r, f),
            m = cs(t);
          return C(Jt(c, m, $, n), () => {
            t.$vdom$ = $;
          });
        });
      })
    );
  },
  cs = (e) => (e.$vdom$ || (e.$vdom$ = Yt(e.$element$)), e.$vdom$);
class me {
  constructor(t, n, s, r, o, i) {
    (this.$type$ = t),
      (this.$props$ = n),
      (this.$immutableProps$ = s),
      (this.$children$ = r),
      (this.$flags$ = o),
      (this.$key$ = i),
      (this.$elm$ = null),
      (this.$text$ = ""),
      (this.$signal$ = null),
      (this.$id$ = t + (i ? ":" + i : ""));
  }
}
const Jr = (e, t) => {
    const {
      key: n,
      type: s,
      props: r,
      children: o,
      flags: i,
      immutableProps: l,
    } = e;
    let c = "";
    if (Ce(s)) c = s;
    else {
      if (s !== Ae) {
        if (X(s)) {
          const u = J(t, s, r, n, i, e.dev);
          return Kr(u, e) ? Jr(S(Ae, { children: u }, 0, n), t) : ut(u, t);
        }
        throw H(25, s);
      }
      c = Ue;
    }
    let a = ae;
    return o != null
      ? C(
          ut(o, t),
          (u) => (
            u !== void 0 && (a = D(u) ? u : [u]), new me(c, r, l, a, i, n)
          )
        )
      : new me(c, r, l, a, i, n);
  },
  Vl = (e, t) => {
    const n = t === void 0 ? ae : D(t) ? t : [t],
      s = new me(":virtual", {}, null, n, 0, null);
    return (s.$elm$ = e), s;
  },
  ut = (e, t) => {
    if (e != null && typeof e != "boolean") {
      if (Yr(e)) {
        const n = new me("#text", V, null, ae, 0, null);
        return (n.$text$ = String(e)), n;
      }
      if (Ye(e)) return Jr(e, t);
      if (te(e)) {
        const n = new me("#text", V, null, ae, 0, null);
        return (n.$signal$ = e), n;
      }
      if (D(e)) {
        const n = Xn(e.flatMap((s) => ut(s, t)));
        return C(n, (s) => s.flat(100).filter(Cr));
      }
      return U(e)
        ? e.then((n) => ut(n, t))
        : e === rs
        ? new me(Wt, V, null, ae, 0, null)
        : void it();
    }
  },
  Yr = (e) => Ce(e) || typeof e == "number",
  Gr = (e) => {
    oe(e, "q:container") === "paused" && (Yl(e), tc(e));
  },
  Kl = (e) => {
    const t = vt(e),
      n = Xr(e === t.documentElement ? t.body : e, "type");
    if (n) return JSON.parse(Zl(n.firstChild.data) || "{}");
  },
  Jl = (e, t) => {
    const n = JSON.parse(e);
    if (typeof n != "object") return null;
    const { _objs: s, _entry: r } = n;
    if (s === void 0 || r === void 0) return null;
    let o = {},
      i = {};
    if (xe(t) && Ie(t)) {
      const a = $s(t);
      a && ((i = Ke(a)), (o = a.ownerDocument));
    }
    const l = Do(i, o);
    for (let a = 0; a < s.length; a++) {
      const u = s[a];
      Ce(u) && (s[a] = u === yn ? void 0 : l.prepare(u));
    }
    const c = (a) => s[ce(a)];
    for (const a of s) Zr(a, c, l);
    return c(r);
  },
  Yl = (e) => {
    if (!Pl(e)) return void it();
    const t = e._qwikjson_ ?? Kl(e);
    if (((e._qwikjson_ = null), !t)) return void it();
    const n = vt(e),
      s = e === n.documentElement ? n.body : e,
      r = Xl(s),
      o = Ke(e),
      i = new Map(),
      l = new Map();
    let c = null,
      a = 0;
    const u = n.createTreeWalker(e, 128);
    for (; (c = u.nextNode()); ) {
      const p = c.data;
      if (a === 0) {
        if (p.startsWith("qv ")) {
          const j = nc(p);
          j >= 0 && i.set(j, c);
        } else if (p.startsWith("t=")) {
          const j = p.slice(2),
            w = ce(j),
            g = ec(c);
          i.set(w, g), l.set(w, g.data);
        }
      }
      p === "cq" ? a++ : p === "/cq" && a--;
    }
    const f = e.getElementsByClassName("qc📦").length !== 0;
    e.querySelectorAll("[q\\:id]").forEach((p) => {
      if (f && p.closest("[q\\:container]") !== e) return;
      const j = oe(p, "q:id"),
        w = ce(j);
      i.set(w, p);
    });
    const $ = Do(o, n),
      m = new Map(),
      v = new Set(),
      y = (p) => (
        typeof p == "string" && p.length > 0, m.has(p) ? m.get(p) : h(p)
      ),
      h = (p) => {
        if (p.startsWith("#")) {
          const z = p.slice(1),
            _ = ce(z);
          i.has(_);
          const q = i.get(_);
          if (ht(q)) {
            if (!q.isConnected) return void m.set(p, void 0);
            const T = kt(q);
            return m.set(p, T), se(T, o), T;
          }
          return qe(q) ? (m.set(p, q), se(q, o), q) : (m.set(p, q), q);
        }
        if (p.startsWith("@")) {
          const z = p.slice(1),
            _ = ce(z);
          return r[_];
        }
        if (p.startsWith("*")) {
          const z = p.slice(1),
            _ = ce(z);
          i.has(_);
          const q = l.get(_);
          return m.set(p, q), q;
        }
        const j = ce(p),
          w = t.objs;
        w.length > j;
        let g = w[j];
        Ce(g) && (g = g === yn ? void 0 : $.prepare(g));
        let k = g;
        for (let z = p.length - 1; z >= 0; z--) {
          const _ = g1[p[z]];
          if (!_) break;
          k = _(k, o);
        }
        return (
          m.set(p, k),
          Yr(g) ||
            v.has(j) ||
            (v.add(j), Gl(g, j, t.subs, y, o, $), Zr(g, y, $)),
          k
        );
      };
    (o.$elementIndex$ = 1e5),
      (o.$pauseCtx$ = { getObject: y, meta: t.ctx, refs: t.refs }),
      Z(e, "q:container", "resumed"),
      Ol(e, "qresume", void 0, !0);
  },
  Gl = (e, t, n, s, r, o) => {
    const i = n[t];
    if (i) {
      const l = [];
      let c = 0;
      for (const a of i)
        if (a.startsWith("_")) c = parseInt(a.slice(1), 10);
        else {
          const u = q1(a, s);
          u && l.push(u);
        }
      if ((c > 0 && $n(e, c), !o.subs(e, l))) {
        const a = r.$proxyMap$.get(e);
        a ? K(a).$addSubs$(l) : wt(e, r, l);
      }
    }
  },
  Zr = (e, t, n) => {
    if (!n.fill(e, t) && e && typeof e == "object") {
      if (D(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s]);
      else if (gt(e)) for (const s in e) e[s] = t(e[s]);
    }
  },
  Zl = (e) => e.replace(/\\x3C(\/?script)/g, "<$1"),
  Xl = (e) => {
    const t = Xr(e, "q:func");
    return (t == null ? void 0 : t.qFuncs) ?? ae;
  },
  Xr = (e, t) => {
    let n = e.lastElementChild;
    for (; n; ) {
      if (n.tagName === "SCRIPT" && oe(n, t) === "qwik/json") return n;
      n = n.previousElementSibling;
    }
  },
  ec = (e) => {
    const t = e.nextSibling;
    if (Jn(t)) return t;
    {
      const n = e.ownerDocument.createTextNode("");
      return e.parentElement.insertBefore(n, e), n;
    }
  },
  tc = (e) => {
    e.qwik = { pause: () => Ta(e), state: Ke(e) };
  },
  nc = (e) => {
    const t = e.indexOf("q:id=");
    return t > 0 ? ce(e.slice(t + 5)) : -1;
  },
  mn = () => {
    const e = kc();
    let t = e.$qrl$;
    if (t) t.$captureRef$;
    else {
      const n = e.$element$,
        s = $s(n);
      (t = vn(decodeURIComponent(String(e.$url$)), s)), Gr(s);
      const r = se(n, Ke(s));
      No(t, r);
    }
    return t.$captureRef$;
  },
  sc = (e, t) => {
    try {
      const n = t[0];
      switch (n) {
        case 1:
        case 2: {
          let s, r;
          n === 1 ? ((s = t[1]), (r = t[3])) : ((s = t[3]), (r = t[1]));
          const o = ne(s);
          if (o == null) return;
          const i = t[4],
            l = s.namespaceURI === St;
          e.$containerState$.$subsManager$.$clearSignal$(t);
          let c = ge(t[2], t.slice(0, -1));
          i === "class" ? (c = is(c, ne(r))) : i === "style" && (c = pn(c));
          const a = cs(o);
          return i in a.$props$ && a.$props$[i] === c
            ? void 0
            : ((a.$props$[i] = c), gs(e, s, i, c, l));
        }
        case 3:
        case 4: {
          const s = t[3];
          if (!e.$visited$.includes(s)) {
            e.$containerState$.$subsManager$.$clearSignal$(t);
            const r = ge(t[2], t.slice(0, -1));
            return ve(e, s, "data", Qe(r));
          }
        }
      }
    } catch {}
  },
  rc = (e, t) => {
    if (e[0] === 0) {
      const n = e[1];
      us(n) ? eo(n, t) : oc(n, t);
    } else ic(e, t);
  },
  oc = (e, t) => {
    const n = Me();
    n || Gr(t.$containerEl$);
    const s = se(e, t);
    if ((s.$componentQrl$, !(s.$flags$ & Be)))
      if (((s.$flags$ |= Be), t.$hostsRendering$ !== void 0))
        t.$hostsStaging$.add(s);
      else {
        if (n) return void it();
        t.$hostsNext$.add(s), as(t);
      }
  },
  ic = (e, t) => {
    const n = t.$hostsRendering$ !== void 0;
    t.$opsNext$.add(e), n || as(t);
  },
  eo = (e, t) => {
    e.$flags$ & Te ||
      ((e.$flags$ |= Te),
      t.$hostsRendering$ !== void 0
        ? t.$taskStaging$.add(e)
        : (t.$taskNext$.add(e), as(t)));
  },
  as = (e) => (
    e.$renderPromise$ === void 0 &&
      (e.$renderPromise$ = cn().nextTick(() => to(e))),
    e.$renderPromise$
  ),
  lc = () => {
    const [e] = mn();
    eo(e, Ke($s(e.$el$)));
  },
  to = async (e) => {
    const t = e.$containerEl$,
      n = vt(t);
    try {
      const s = Ur(n, e),
        r = s.$static$,
        o = (e.$hostsRendering$ = new Set(e.$hostsNext$));
      e.$hostsNext$.clear(),
        await ac(e, s),
        e.$hostsStaging$.forEach((c) => {
          o.add(c);
        }),
        e.$hostsStaging$.clear();
      const i = Array.from(e.$opsNext$);
      e.$opsNext$.clear();
      const l = Array.from(o);
      dc(l),
        !e.$styleMoved$ &&
          l.length > 0 &&
          ((e.$styleMoved$ = !0),
          (t === n.documentElement ? n.body : t)
            .querySelectorAll("style[q\\:style]")
            .forEach((c) => {
              e.$styleIds$.add(oe(c, un)), zo(r, n.head, c);
            }));
      for (const c of l) {
        const a = c.$element$;
        if (!r.$hostElements$.has(a) && c.$componentQrl$) {
          a.isConnected, r.$roots$.push(c);
          try {
            await ls(s, c, cc(a.parentElement));
          } catch (u) {
            ot(u);
          }
        }
      }
      return (
        i.forEach((c) => {
          sc(r, c);
        }),
        r.$operations$.push(...r.$postOperations$),
        r.$operations$.length === 0
          ? (ir(r), void (await Gs(e, s)))
          : (await ia(r), ir(r), Gs(e, s))
      );
    } catch (s) {
      ot(s);
    }
  },
  cc = (e) => {
    let t = 0;
    return (
      e &&
        (e.namespaceURI === St && (t |= G), e.tagName === "HEAD" && (t |= Vt)),
      t
    );
  },
  Gs = async (e, t) => {
    const n = t.$static$.$hostElements$;
    await uc(e, t, (s, r) => (s.$flags$ & fc) != 0 && (!r || n.has(s.$el$))),
      e.$hostsStaging$.forEach((s) => {
        e.$hostsNext$.add(s);
      }),
      e.$hostsStaging$.clear(),
      (e.$hostsRendering$ = void 0),
      (e.$renderPromise$ = void 0),
      e.$hostsNext$.size + e.$taskNext$.size + e.$opsNext$.size > 0 &&
        (e.$renderPromise$ = to(e));
  },
  ac = async (e, t) => {
    const n = e.$containerEl$,
      s = [],
      r = [],
      o = (l) => (l.$flags$ & no) != 0,
      i = (l) => (l.$flags$ & so) != 0;
    e.$taskNext$.forEach((l) => {
      o(l) &&
        (r.push(C(l.$qrl$.$resolveLazy$(n), () => l)), e.$taskNext$.delete(l)),
        i(l) &&
          (s.push(C(l.$qrl$.$resolveLazy$(n), () => l)),
          e.$taskNext$.delete(l));
    });
    do
      if (
        (e.$taskStaging$.forEach((l) => {
          o(l)
            ? r.push(C(l.$qrl$.$resolveLazy$(n), () => l))
            : i(l)
            ? s.push(C(l.$qrl$.$resolveLazy$(n), () => l))
            : e.$taskNext$.add(l);
        }),
        e.$taskStaging$.clear(),
        r.length > 0)
      ) {
        const l = await Promise.all(r);
        Pn(l), await Promise.all(l.map((c) => Dn(c, e, t))), (r.length = 0);
      }
    while (e.$taskStaging$.size > 0);
    if (s.length > 0) {
      const l = await Promise.all(s);
      Pn(l), l.forEach((c) => Dn(c, e, t));
    }
  },
  uc = async (e, t, n) => {
    const s = [],
      r = e.$containerEl$;
    e.$taskNext$.forEach((o) => {
      n(o, !1) &&
        (o.$el$.isConnected && s.push(C(o.$qrl$.$resolveLazy$(r), () => o)),
        e.$taskNext$.delete(o));
    });
    do
      if (
        (e.$taskStaging$.forEach((o) => {
          o.$el$.isConnected &&
            (n(o, !0)
              ? s.push(C(o.$qrl$.$resolveLazy$(r), () => o))
              : e.$taskNext$.add(o));
        }),
        e.$taskStaging$.clear(),
        s.length > 0)
      ) {
        const o = await Promise.all(s);
        Pn(o);
        for (const i of o) Dn(i, e, t);
        s.length = 0;
      }
    while (e.$taskStaging$.size > 0);
  },
  dc = (e) => {
    e.sort((t, n) =>
      2 & t.$element$.compareDocumentPosition(Zt(n.$element$)) ? 1 : -1
    );
  },
  Pn = (e) => {
    e.sort((t, n) =>
      t.$el$ === n.$el$
        ? t.$index$ < n.$index$
          ? -1
          : 1
        : 2 & t.$el$.compareDocumentPosition(Zt(n.$el$))
        ? 1
        : -1
    );
  },
  fc = 1,
  no = 2,
  so = 4,
  Te = 16,
  $c = (e, t) => {
    const { val: n, set: s, iCtx: r, i: o, elCtx: i } = Je();
    if (n) return;
    const l = r.$renderCtx$.$static$.$containerState$,
      c = new ds(Te | no, o, i.$element$, e, void 0);
    s(!0),
      e.$resolveLazy$(l.$containerEl$),
      i.$tasks$ || (i.$tasks$ = []),
      i.$tasks$.push(c),
      jc(r, () => oo(c, l, r.$renderCtx$)),
      Me() && gc(c, t == null ? void 0 : t.eagerness);
  },
  ro = (e) => (e.$flags$ & so) != 0,
  pc = (e) => (8 & e.$flags$) != 0,
  Dn = async (e, t, n) => (
    e.$flags$ & Te, ro(e) ? mc(e, t, n) : pc(e) ? hc(e, t, n) : oo(e, t, n)
  ),
  mc = (e, t, n, s) => {
    (e.$flags$ &= ~Te), dt(e);
    const r = re(n.$static$.$locale$, e.$el$, void 0, "TaskEvent"),
      { $subsManager$: o } = t;
    r.$renderCtx$ = n;
    const i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      l = [],
      c = e.$state$,
      a = jt(c),
      u = {
        track: (p, j) => {
          if (X(p)) {
            const g = re();
            return (g.$renderCtx$ = n), (g.$subscriber$ = [0, e]), J(g, p);
          }
          const w = K(p);
          return (
            w ? w.$addSub$([0, e], j) : Yn(ln(26), p),
            j ? p[j] : te(p) ? p.value : p
          );
        },
        cleanup(p) {
          l.push(p);
        },
        cache(p) {
          let j = 0;
          (j = p === "immutable" ? 1 / 0 : p), (c._cache = j);
        },
        previous: a._resolved,
      };
    let f,
      $,
      m = !1;
    const v = (p, j) =>
      !m &&
      ((m = !0),
      p
        ? ((m = !0),
          (c.loading = !1),
          (c._state = "resolved"),
          (c._resolved = j),
          (c._error = void 0),
          f(j))
        : ((m = !0),
          (c.loading = !1),
          (c._state = "rejected"),
          (c._error = j),
          $(j)),
      !0);
    J(r, () => {
      (c._state = "pending"),
        (c.loading = !Me()),
        (c.value = new Promise((p, j) => {
          (f = p), ($ = j);
        }));
    }),
      (e.$destroy$ = wn(() => {
        (m = !0), l.forEach((p) => p());
      }));
    const y = an(
        () => C(s, () => i(u)),
        (p) => {
          v(!0, p);
        },
        (p) => {
          v(!1, p);
        }
      ),
      h = a._timeout;
    return h > 0
      ? Promise.race([
          y,
          Ml(h).then(() => {
            v(!1, new Error("timeout")) && dt(e);
          }),
        ])
      : y;
  },
  oo = (e, t, n) => {
    (e.$flags$ &= ~Te), dt(e);
    const s = e.$el$,
      r = re(n.$static$.$locale$, s, void 0, "TaskEvent");
    r.$renderCtx$ = n;
    const { $subsManager$: o } = t,
      i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      l = [];
    e.$destroy$ = wn(() => {
      l.forEach((a) => a());
    });
    const c = {
      track: (a, u) => {
        if (X(a)) {
          const $ = re();
          return ($.$subscriber$ = [0, e]), J($, a);
        }
        const f = K(a);
        return f ? f.$addSub$([0, e], u) : Yn(ln(26), a), u ? a[u] : a;
      },
      cleanup(a) {
        l.push(a);
      },
    };
    return an(
      () => i(c),
      (a) => {
        X(a) && l.push(a);
      },
      (a) => {
        os(a, s, n);
      }
    );
  },
  hc = (e, t, n) => {
    e.$state$, (e.$flags$ &= ~Te), dt(e);
    const s = e.$el$,
      r = re(n.$static$.$locale$, s, void 0, "ComputedEvent");
    (r.$subscriber$ = [0, e]), (r.$renderCtx$ = n);
    const { $subsManager$: o } = t,
      i = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      });
    return an(
      i,
      (l) =>
        Bt(() => {
          const c = e.$state$;
          (c[lt] &= -3), (c.untrackedValue = l), c[ue].$notifySubs$();
        }),
      (l) => {
        os(l, s, n);
      }
    );
  },
  dt = (e) => {
    const t = e.$destroy$;
    if (t) {
      e.$destroy$ = void 0;
      try {
        t();
      } catch (n) {
        ot(n);
      }
    }
  },
  io = (e) => {
    32 & e.$flags$ ? ((e.$flags$ &= -33), (0, e.$qrl$)()) : dt(e);
  },
  gc = (e, t) => {
    t === "visible" || t === "intersection-observer"
      ? Dl("qvisible", Sn(e))
      : t === "load" || t === "document-ready"
      ? Ys("qinit", Sn(e))
      : (t !== "idle" && t !== "document-idle") || Ys("qidle", Sn(e));
  },
  Sn = (e) => {
    const t = e.$qrl$;
    return _n(t.$chunk$, "_hW", lc, null, null, [e], t.$symbol$);
  },
  us = (e) => $e(e) && e instanceof ds,
  vc = (e, t) => {
    let n = `${we(e.$flags$)} ${we(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;
    return e.$state$ && (n += ` ${t(e.$state$)}`), n;
  },
  yc = (e) => {
    const [t, n, s, r, o] = e.split(" ");
    return new ds(ce(t), ce(n), r, s, o);
  };
class ds {
  constructor(t, n, s, r, o) {
    (this.$flags$ = t),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = r),
      (this.$state$ = o);
  }
}
function bc(e) {
  return wc(e) && e.nodeType === 1;
}
function wc(e) {
  return e && typeof e.nodeType == "number";
}
const Be = 1,
  _e = 2,
  fs = 4,
  ne = (e) => e[dn],
  se = (e, t) => {
    const n = ne(e);
    if (n) return n;
    const s = hn(e),
      r = oe(e, "q:id");
    if (r) {
      const o = t.$pauseCtx$;
      if (((s.$id$ = r), o)) {
        const { getObject: i, meta: l, refs: c } = o;
        if (bc(e)) {
          const a = c[r];
          a &&
            ((s.$refMap$ = a.split(" ").map(i)),
            (s.li = Nl(s, t.$containerEl$)));
        } else {
          const a = e.getAttribute("q:sstyle");
          s.$scopeIds$ = a ? a.split("|") : null;
          const u = l[r];
          if (u) {
            const f = u.s,
              $ = u.h,
              m = u.c,
              v = u.w;
            if (
              (f && (s.$seq$ = f.split(" ").map(i)),
              v && (s.$tasks$ = v.split(" ").map(i)),
              m)
            ) {
              s.$contexts$ = new Map();
              for (const y of m.split(" ")) {
                const [h, p] = y.split("=");
                s.$contexts$.set(h, i(p));
              }
            }
            if ($) {
              const [y, h] = $.split(" ");
              if (((s.$flags$ = fs), y && (s.$componentQrl$ = i(y)), h)) {
                const p = i(h);
                (s.$props$ = p), $n(p, 2), (p[b] = _c(p));
              } else s.$props$ = wt(fn(), t);
            }
          }
        }
      }
    }
    return s;
  },
  _c = (e) => {
    const t = {},
      n = Re(e);
    for (const s in n) s.startsWith("$$") && (t[s.slice(2)] = n[s]);
    return t;
  },
  hn = (e) => {
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
    return (e[dn] = t), t;
  },
  xc = (e, t) => {
    var n;
    (n = e.$tasks$) == null ||
      n.forEach((s) => {
        t.$clearSub$(s), io(s);
      }),
      (e.$componentQrl$ = null),
      (e.$seq$ = null),
      (e.$tasks$ = null);
  };
let Pe;
function qc(e) {
  if (Pe === void 0) {
    const t = he();
    if (t && t.$locale$) return t.$locale$;
    if (e !== void 0) return e;
    throw new Error("Reading `locale` outside of context.");
  }
  return Pe;
}
function Zs(e, t) {
  const n = Pe;
  try {
    return (Pe = e), t();
  } finally {
    Pe = n;
  }
}
function Sc(e) {
  Pe = e;
}
let nt;
const he = () => {
    if (!nt) {
      const e = typeof document < "u" && document && document.__q_context__;
      return e ? (D(e) ? (document.__q_context__ = co(e)) : e) : void 0;
    }
    return nt;
  },
  kc = () => {
    const e = he();
    if (!e) throw H(14);
    return e;
  },
  lo = () => {
    const e = he();
    if (!e || e.$event$ !== "qRender") throw H(20);
    return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
  };
function J(e, t, ...n) {
  const s = nt;
  let r;
  try {
    (nt = e), (r = t.apply(this, n));
  } finally {
    nt = s;
  }
  return r;
}
const jc = (e, t) => {
    const n = e.$waitOn$;
    if (n.length === 0) {
      const s = t();
      U(s) && n.push(s);
    } else n.push(Promise.all(n).then(t));
  },
  co = (e) => {
    const t = e[0],
      n = t.closest("[q\\:container]"),
      s = (n == null ? void 0 : n.getAttribute("q:locale")) || void 0;
    return s && Sc(s), re(s, void 0, t, e[1], e[2]);
  },
  re = (e, t, n, s, r) => ({
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
  $s = (e) => e.closest("[q\\:container]"),
  Bt = (e) => J(void 0, e),
  Xs = re(void 0, void 0, void 0, "qRender"),
  ge = (e, t) => ((Xs.$subscriber$ = t), J(Xs, () => e.value)),
  ao = (e) => {
    const t = he();
    return (
      t &&
        t.$hostElement$ &&
        t.$renderCtx$ &&
        (se(
          t.$hostElement$,
          t.$renderCtx$.$static$.$containerState$
        ).$flags$ |= 8),
      e
    );
  },
  zc = (e, t = 0) => {
    for (let n = 0; n < e.length; n++)
      (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
    return Number(Math.abs(t)).toString(36);
  },
  Ec = (e, t) => `${zc(e.$hash$)}-${t}`,
  Tc = (e) => "⭐️" + e,
  uo = (e) => {
    const t = e.join("|");
    if (t.length > 0) return t;
  };
var fo;
const Mt = "<!--qkssr-f-->";
class $o {
  constructor(t) {
    (this.nodeType = t), (this[fo] = null);
  }
}
fo = dn;
const Ac = () => new $o(9),
  Ic = async (e, t) => {
    var $, m, v;
    const n = t.containerTagName,
      s = Ut(1).$element$,
      r = Rr(s, t.base ?? "/");
    r.$serverData$.locale = ($ = t.serverData) == null ? void 0 : $.locale;
    const o = Ac(),
      i = Ur(o, r),
      l = t.beforeContent ?? [],
      c = {
        $static$: {
          $contexts$: [],
          $headNodes$: n === "html" ? l : [],
          $locale$: (m = t.serverData) == null ? void 0 : m.locale,
          $textNodes$: new Map(),
        },
        $projectedChildren$: void 0,
        $projectedCtxs$: void 0,
        $invocationContext$: void 0,
      };
    let a = "ssr";
    t.containerAttributes["q:render"] &&
      (a = `${t.containerAttributes["q:render"]}-${a}`);
    const u = {
        ...t.containerAttributes,
        "q:container": "paused",
        "q:version": "1.2.15",
        "q:render": a,
        "q:base": t.base,
        "q:locale": (v = t.serverData) == null ? void 0 : v.locale,
        "q:manifest-hash": t.manifestHash,
      },
      f = n === "html" ? [e] : [l, e];
    n !== "html" && (u.class = "qc📦" + (u.class ? " " + u.class : "")),
      t.serverData && (r.$serverData$ = t.serverData),
      (e = d(n, null, u, f, Be | _e, null)),
      (r.$hostsRendering$ = new Set()),
      await Promise.resolve().then(() => Mc(e, i, c, t.stream, r, t));
  },
  Mc = async (e, t, n, s, r, o) => {
    const i = o.beforeClose;
    return (
      await ms(
        e,
        t,
        n,
        s,
        0,
        i
          ? (l) => {
              const c = i(n.$static$.$contexts$, r, !1, n.$static$.$textNodes$);
              return de(c, t, n, l, 0, void 0);
            }
          : void 0
      ),
      t
    );
  },
  Cc = async (e, t, n, s, r) => {
    s.write(Mt);
    const o = e.props.children;
    let i;
    if (X(o)) {
      const l = o({
        write(c) {
          s.write(c), s.write(Mt);
        },
      });
      if (U(l)) return l;
      i = l;
    } else i = o;
    for await (const l of i) await de(l, t, n, s, r, void 0), s.write(Mt);
  },
  po = (e, t, n, s, r, o, i, l) => {
    var y;
    const c = e.props,
      a = c["q:renderFn"];
    if (a) return (t.$componentQrl$ = a), Nc(s, r, o, t, e, i, l);
    let u = "<!--qv" + Lc(c);
    const f = "q:s" in c,
      $ = e.key != null ? String(e.key) : null;
    f &&
      ((y = s.$cmpCtx$) == null || y.$id$, (u += " q:sref=" + s.$cmpCtx$.$id$)),
      $ != null && (u += " q:key=" + $),
      (u += "-->"),
      o.write(u);
    const m = e.props[W];
    if (m) return o.write(m), void o.write(kn);
    if (n) for (const h of n) ps(h.type, h.props, o);
    const v = mo(e.children, s, r, o, i);
    return C(v, () => {
      var p;
      if (!f && !l) return void o.write(kn);
      let h;
      if (f) {
        const j = (p = r.$projectedChildren$) == null ? void 0 : p[$];
        if (j) {
          const [w, g] = r.$projectedCtxs$,
            k = xt(w);
          (k.$slotCtx$ = t),
            (r.$projectedChildren$[$] = void 0),
            (h = de(j, k, g, o, i));
        }
      }
      return (
        l && (h = C(h, () => l(o))),
        C(h, () => {
          o.write(kn);
        })
      );
    });
  },
  kn = "<!--/qv-->",
  Rc = (e) => {
    let t = "";
    for (const n in e) {
      if (n === W) continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + '="' + s + '"'));
    }
    return t;
  },
  Lc = (e) => {
    let t = "";
    for (const n in e) {
      if (n === "children" || n === W) continue;
      const s = e[n];
      s != null && (t += " " + (s === "" ? n : n + "=" + s));
    }
    return t;
  },
  ps = (e, t, n) => {
    if ((n.write("<" + e + Rc(t) + ">"), vo[e])) return;
    const s = t[W];
    s != null && n.write(s), n.write(`</${e}>`);
  },
  Nc = (e, t, n, s, r, o, i) => (
    Dc(e, s, r.props.props),
    C(Ht(e, s), (l) => {
      const c = s.$element$,
        a = l.rCtx,
        u = re(t.$static$.$locale$, c, void 0);
      (u.$subscriber$ = [0, c]), (u.$renderCtx$ = a);
      const f = {
          $static$: t.$static$,
          $projectedChildren$: Pc(r.children, t),
          $projectedCtxs$: [e, t],
          $invocationContext$: u,
        },
        $ = [];
      if (s.$appendStyles$) {
        const h = 4 & o ? t.$static$.$headNodes$ : $;
        for (const p of s.$appendStyles$)
          h.push(
            d(
              "style",
              { [un]: p.styleId, [W]: p.content, hidden: "" },
              null,
              null,
              0,
              null
            )
          );
      }
      const m = at(e),
        v = s.$scopeIds$ ? uo(s.$scopeIds$) : void 0,
        y = S(r.type, { "q:sstyle": v, "q:id": m, children: l.node }, 0, r.key);
      return (
        (s.$id$ = m),
        t.$static$.$contexts$.push(s),
        po(y, s, $, a, f, n, o, (h) => {
          if (s.$flags$ & _e) {
            const w = Ut(1),
              g = w.li;
            g.push(...s.li), (s.$flags$ &= ~_e), (w.$id$ = at(e));
            const k = { type: "placeholder", hidden: "", "q:id": w.$id$ };
            t.$static$.$contexts$.push(w);
            const z = ts(g);
            for (const _ of z) {
              const q = yo(_[0]);
              (k[q] = _s(_[1], w)), Ct(q, e.$static$.$containerState$);
            }
            ps("script", k, h);
          }
          const p = f.$projectedChildren$;
          let j;
          if (p) {
            const w = Object.keys(p).map((_) => {
                const q = p[_];
                if (q)
                  return d(
                    "q:template",
                    { [ee]: _, hidden: "", "aria-hidden": "true" },
                    null,
                    q,
                    0,
                    null
                  );
              }),
              [g, k] = f.$projectedCtxs$,
              z = xt(g);
            (z.$slotCtx$ = s), (j = de(w, z, k, h, 0, void 0));
          }
          return i ? C(j, () => i(h)) : j;
        })
      );
    })
  ),
  Pc = (e, t) => {
    const n = ho(e, t);
    if (n === null) return;
    const s = {};
    for (const r of n) {
      let o = "";
      Ye(r) && (o = r.props[ee] ?? ""), (s[o] || (s[o] = [])).push(r);
    }
    return s;
  },
  Ut = (e) => {
    const t = new $o(e);
    return hn(t);
  },
  ms = (e, t, n, s, r, o) => {
    var a;
    const i = e.type,
      l = t.$cmpCtx$;
    if (typeof i == "string") {
      const u = e.key,
        f = e.props,
        $ = e.immutableProps,
        m = Ut(1),
        v = m.$element$,
        y = i === "head";
      let h = "<" + i,
        p = !1,
        j = !1,
        w = "",
        g = null;
      if ($)
        for (const _ in $) {
          let q = $[_];
          if (Ot(_)) {
            Ft(m.li, _, q, void 0);
            continue;
          }
          const T = er(_);
          if (
            (te(q) && ((q = ge(q, [1, v, q, l.$element$, T])), (p = !0)),
            _ === W)
          ) {
            g = q;
            continue;
          }
          _.startsWith(Mn) && Ct(_.slice(15), t.$static$.$containerState$);
          const x = tr(T, q);
          x != null &&
            (T === "class"
              ? (w = x)
              : T === "value" && i === "textarea"
              ? (g = st(x))
              : nr(T) || (h += " " + (q === "" ? T : T + '="' + Tt(x) + '"')));
        }
      for (const _ in f) {
        let q = f[_];
        if (_ === "ref") {
          q !== void 0 && (ns(q, v), (j = !0));
          continue;
        }
        if (Ot(_)) {
          Ft(m.li, _, q, void 0);
          continue;
        }
        const T = er(_);
        if (
          (te(q) && ((q = ge(q, [2, l.$element$, q, v, T])), (p = !0)), _ === W)
        ) {
          g = q;
          continue;
        }
        _.startsWith(Mn) && Ct(_.slice(15), t.$static$.$containerState$);
        const x = tr(T, q);
        x != null &&
          (T === "class"
            ? (w = x)
            : T === "value" && i === "textarea"
            ? (g = st(x))
            : nr(T) || (h += " " + (q === "" ? T : T + '="' + Tt(x) + '"')));
      }
      const k = m.li;
      if (l) {
        if ((a = l.$scopeIds$) != null && a.length) {
          const _ = l.$scopeIds$.join(" ");
          w = w ? `${_} ${w}` : _;
        }
        l.$flags$ & _e && (k.push(...l.li), (l.$flags$ &= ~_e));
      }
      if (
        (y && (r |= 1),
        i in Oc && (r |= 16),
        i in Fc && (r |= 8),
        w && (h += ' class="' + Tt(w) + '"'),
        k.length > 0)
      ) {
        const _ = ts(k),
          q = (16 & r) != 0;
        for (const T of _) {
          const x = q ? yo(T[0]) : T[0];
          (h += " " + x + '="' + _s(T[1], m) + '"'),
            Ct(x, t.$static$.$containerState$);
        }
      }
      if (
        (u != null && (h += ' q:key="' + Tt(u) + '"'), j || p || k.length > 0)
      ) {
        if (j || p || Uc(k)) {
          const _ = at(t);
          (h += ' q:id="' + _ + '"'), (m.$id$ = _);
        }
        n.$static$.$contexts$.push(m);
      }
      if ((1 & r && (h += " q:head"), (h += ">"), s.write(h), i in vo)) return;
      if (g != null) return s.write(String(g)), void s.write(`</${i}>`);
      i === "html" ? (r |= 4) : (r &= -5), 2 & e.flags && (r |= 1024);
      const z = de(e.children, t, n, s, r);
      return C(z, () => {
        if (y) {
          for (const _ of n.$static$.$headNodes$) ps(_.type, _.props, s);
          n.$static$.$headNodes$.length = 0;
        }
        if (o)
          return C(o(s), () => {
            s.write(`</${i}>`);
          });
        s.write(`</${i}>`);
      });
    }
    if (i === Ae) {
      const u = Ut(111);
      return (
        (u.$parentCtx$ = t.$slotCtx$ || t.$cmpCtx$),
        l && 8 & l.$flags$ && Wc(l, u),
        po(e, u, void 0, t, n, s, r, o)
      );
    }
    if (i === Hr) return void s.write(e.props.data);
    if (i === Qr) return Cc(e, t, n, s, r);
    const c = J(n.$invocationContext$, i, e.props, e.key, e.flags, e.dev);
    return Kr(c, e)
      ? ms(S(Ae, { children: c }, 0, e.key), t, n, s, r, o)
      : de(c, t, n, s, r, o);
  },
  de = (e, t, n, s, r, o) => {
    var i;
    if (e != null && typeof e != "boolean") {
      if (!Ce(e) && typeof e != "number") {
        if (Ye(e)) return ms(e, t, n, s, r, o);
        if (D(e)) return mo(e, t, n, s, r);
        if (te(e)) {
          const l = 8 & r,
            c = (i = t.$cmpCtx$) == null ? void 0 : i.$element$;
          let a;
          if (c) {
            if (!l) {
              const u = at(t);
              a = ge(
                e,
                1024 & r ? [3, "#" + u, e, "#" + u] : [4, c, e, "#" + u]
              );
              const f = Qe(a);
              return (
                n.$static$.$textNodes$.set(f, u),
                void s.write(`<!--t=${u}-->${st(f)}<!---->`)
              );
            }
            a = J(n.$invocationContext$, () => e.value);
          }
          return void s.write(st(Qe(a)));
        }
        return U(e)
          ? (s.write(Mt), e.then((l) => de(l, t, n, s, r, o)))
          : void it();
      }
      s.write(st(String(e)));
    }
  },
  mo = (e, t, n, s, r) => {
    if (e == null) return;
    if (!D(e)) return de(e, t, n, s, r);
    const o = e.length;
    if (o === 1) return de(e[0], t, n, s, r);
    if (o === 0) return;
    let i = 0;
    const l = [];
    return e.reduce(
      (c, a, u) => {
        const f = [];
        l.push(f);
        const $ = de(
            a,
            t,
            n,
            c
              ? {
                  write(v) {
                    i === u ? s.write(v) : f.push(v);
                  },
                }
              : s,
            r
          ),
          m = () => {
            i++, l.length > i && l[i].forEach((v) => s.write(v));
          };
        return U($) && c
          ? Promise.all([$, c]).then(m)
          : U($)
          ? $.then(m)
          : c
          ? c.then(m)
          : void i++;
      },
      void 0
    );
  },
  ho = (e, t) => {
    if (e == null) return null;
    const n = go(e, t),
      s = D(n) ? n : [n];
    return s.length === 0 ? null : s;
  },
  go = (e, t) => {
    if (e == null) return null;
    if (D(e)) return e.flatMap((n) => go(n, t));
    if (Ye(e) && X(e.type) && e.type !== Hr && e.type !== Qr && e.type !== Ae) {
      const n = J(t.$invocationContext$, e.type, e.props, e.key, e.flags);
      return ho(n, t);
    }
    return e;
  },
  Dc = (e, t, n) => {
    const s = Object.keys(n),
      r = fn();
    if (((t.$props$ = wt(r, e.$static$.$containerState$)), s.length === 0))
      return;
    const o = (r[b] = n[b] ?? V);
    for (const i of s)
      i !== "children" &&
        i !== ee &&
        (te(o[i]) ? (r["$$" + i] = o[i]) : (r[i] = n[i]));
  },
  er = (e) => (e === "htmlFor" ? "for" : e),
  tr = (e, t) =>
    e === "class"
      ? Qt(t)
      : e === "style"
      ? pn(t)
      : Vr(e) || e === "draggable" || e === "spellcheck"
      ? t != null
        ? String(t)
        : t
      : t === !1 || t == null
      ? null
      : t === !0
      ? ""
      : String(t),
  Oc = { head: !0, style: !0, script: !0, link: !0, meta: !0 },
  Fc = { title: !0, style: !0, script: !0, noframes: !0, textarea: !0 },
  vo = {
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
  Hc = /[&<>]/g,
  Qc = /[&"]/g,
  Ct = (e, t) => {
    t.$events$.add(Lr(e));
  },
  st = (e) =>
    e.replace(Hc, (t) => {
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
  Tt = (e) =>
    e.replace(Qc, (t) => {
      switch (t) {
        case "&":
          return "&amp;";
        case '"':
          return "&quot;";
        default:
          return "";
      }
    }),
  Bc = /[>/="'\u0009\u000a\u000c\u0020]/,
  nr = (e) => Bc.test(e),
  Uc = (e) => e.some((t) => t[1].$captureRef$ && t[1].$captureRef$.length > 0),
  Wc = (e, t) => {
    const n = e.$dynamicSlots$ || (e.$dynamicSlots$ = []);
    n.includes(t) || n.push(t);
  },
  yo = (e) => (e === "on:qvisible" ? "on-document:qinit" : e),
  d = (e, t, n, s, r, o) => {
    const i = o == null ? null : String(o);
    return new qt(e, t ?? V, n, s, r, i);
  },
  Rt = (e, t, n, s, r, o) => {
    let i = null;
    return (
      t && "children" in t && ((i = t.children), delete t.children),
      d(e, t, n, i, s, r)
    );
  },
  S = (e, t, n, s, r) => {
    const o = s == null ? null : String(s),
      i = t ?? V;
    if (typeof e == "string" && b in i) {
      const c = {};
      for (const [a, u] of Object.entries(i[b])) c[a] = u === b ? i[a] : u;
      return d(e, null, c, i.children, n, s);
    }
    const l = new qt(e, i, null, i.children, n, o);
    return typeof e == "string" && t && delete t.children, l;
  },
  Y = (e, t, n) => {
    const s = n == null ? null : String(n),
      r = Bt(() => {
        const i = t.children;
        return typeof e == "string" && delete t.children, i;
      });
    return (
      Ce(e) &&
        "className" in t &&
        ((t.class = t.className), delete t.className),
      new qt(e, t, null, r, 0, s)
    );
  },
  Wt = ":skipRender";
class qt {
  constructor(t, n, s, r, o, i = null) {
    (this.type = t),
      (this.props = n),
      (this.immutableProps = s),
      (this.children = r),
      (this.flags = o),
      (this.key = i);
  }
}
const Ae = (e) => e.children,
  Ye = (e) => e instanceof qt,
  R = (e) => e.children,
  St = "http://www.w3.org/2000/svg",
  G = 1,
  Vt = 2,
  Kt = [],
  Jt = (e, t, n, s) => {
    t.$elm$;
    const r = n.$children$;
    if (r.length === 1 && r[0].$type$ === Wt)
      return void (n.$children$ = t.$children$);
    const o = t.$elm$;
    let i = Gt;
    t.$children$ === Kt && o.nodeName === "HEAD" && ((i = Yc), (s |= Vt));
    const l = Vc(t, i);
    return l.length > 0 && r.length > 0
      ? Kc(e, o, l, r, s)
      : l.length > 0 && r.length === 0
      ? hs(e.$static$, l, 0, l.length - 1)
      : r.length > 0
      ? _o(e, o, null, r, 0, r.length - 1, s)
      : void 0;
  },
  Vc = (e, t) => {
    const n = e.$children$;
    return n === Kt ? (e.$children$ = bo(e.$elm$, t)) : n;
  },
  Kc = (e, t, n, s, r) => {
    let o = 0,
      i = 0,
      l = n.length - 1,
      c = n[0],
      a = n[l],
      u = s.length - 1,
      f = s[0],
      $ = s[u],
      m,
      v,
      y;
    const h = [],
      p = e.$static$;
    for (; o <= l && i <= u; )
      if (c == null) c = n[++o];
      else if (a == null) a = n[--l];
      else if (f == null) f = s[++i];
      else if ($ == null) $ = s[--u];
      else if (c.$id$ === f.$id$)
        h.push(Xe(e, c, f, r)), (c = n[++o]), (f = s[++i]);
      else if (a.$id$ === $.$id$)
        h.push(Xe(e, a, $, r)), (a = n[--l]), ($ = s[--u]);
      else if (c.$key$ && c.$id$ === $.$id$)
        c.$elm$,
          a.$elm$,
          h.push(Xe(e, c, $, r)),
          fa(p, t, c.$elm$, a.$elm$),
          (c = n[++o]),
          ($ = s[--u]);
      else if (a.$key$ && a.$id$ === f.$id$)
        c.$elm$,
          a.$elm$,
          h.push(Xe(e, a, f, r)),
          tt(p, t, a.$elm$, c.$elm$),
          (a = n[--l]),
          (f = s[++i]);
      else {
        if (
          (m === void 0 && (m = aa(n, o, l)), (v = m[f.$key$]), v === void 0)
        ) {
          const w = ft(e, f, r, h);
          tt(p, t, w, c == null ? void 0 : c.$elm$);
        } else if (((y = n[v]), y.$type$ !== f.$type$)) {
          const w = ft(e, f, r, h);
          C(w, (g) => {
            tt(p, t, g, c == null ? void 0 : c.$elm$);
          });
        } else
          h.push(Xe(e, y, f, r)),
            (n[v] = void 0),
            y.$elm$,
            tt(p, t, y.$elm$, c.$elm$);
        f = s[++i];
      }
    i <= u &&
      h.push(_o(e, t, s[u + 1] == null ? null : s[u + 1].$elm$, s, i, u, r));
    let j = Xn(h);
    return (
      o <= l &&
        (j = C(j, () => {
          hs(p, n, o, l);
        })),
      j
    );
  },
  Ne = (e, t) => {
    const n = fe(e) ? e.close : null,
      s = [];
    let r = e.firstChild;
    for (; (r = ys(r)) && (t(r) && s.push(r), (r = r.nextSibling), r !== n); );
    return s;
  },
  bo = (e, t) => Ne(e, t).map(Jc),
  Jc = (e) => {
    var t;
    return qe(e) ? ((t = ne(e)) == null ? void 0 : t.$vdom$) ?? Yt(e) : Yt(e);
  },
  Yt = (e) => {
    if (Ie(e)) {
      const t = new me(e.localName, {}, null, Kt, 0, Fn(e));
      return (t.$elm$ = e), t;
    }
    if (Jn(e)) {
      const t = new me(e.nodeName, V, null, Kt, 0, null);
      return (t.$text$ = e.data), (t.$elm$ = e), t;
    }
  },
  Yc = (e) => {
    const t = e.nodeType;
    return t === 1 ? e.hasAttribute("q:head") : t === 111;
  },
  On = (e) => e.nodeName === "Q:TEMPLATE",
  Gt = (e) => {
    const t = e.nodeType;
    if (t === 3 || t === 111) return !0;
    if (t !== 1) return !1;
    const n = e.nodeName;
    return (
      n !== "Q:TEMPLATE" &&
      (n === "HEAD"
        ? e.hasAttribute("q:head")
        : n !== "STYLE" || !e.hasAttribute(un))
    );
  },
  wo = (e) => {
    const t = {};
    for (const n of e) {
      const s = Gc(n);
      (
        t[s] ?? (t[s] = new me(Ue, { "q:s": "" }, null, [], 0, s))
      ).$children$.push(n);
    }
    return t;
  },
  Xe = (e, t, n, s) => {
    t.$type$, n.$type$, t.$key$, n.$key$, t.$id$, n.$id$;
    const r = t.$elm$,
      o = n.$type$,
      i = e.$static$,
      l = i.$containerState$,
      c = e.$cmpCtx$;
    if (((n.$elm$ = r), o === "#text")) {
      i.$visited$.push(r);
      const $ = n.$signal$;
      return (
        $ && (n.$text$ = Qe(ge($, [4, c.$element$, $, r]))),
        void ve(i, r, "data", n.$text$)
      );
    }
    const a = n.$props$,
      u = n.$flags$,
      f = se(r, l);
    if (o !== Ue) {
      let $ = (s & G) != 0;
      if (($ || o !== "svg" || ((s |= G), ($ = !0)), a !== V)) {
        !(1 & u) && (f.li.length = 0);
        const m = t.$props$;
        n.$props$ = m;
        for (const v in a) {
          let y = a[v];
          if (v !== "ref")
            if (Ot(v)) {
              const h = Ft(f.li, v, y, l.$containerEl$);
              So(i, r, h);
            } else
              te(y) && (y = ge(y, [1, c.$element$, y, r, v])),
                v === "class" ? (y = is(y, c)) : v === "style" && (y = pn(y)),
                m[v] !== y && ((m[v] = y), gs(i, r, v, y, $));
          else y !== void 0 && ns(y, r);
        }
      }
      return 2 & u ||
        ($ && o === "foreignObject" && (s &= ~G), a[W] !== void 0) ||
        o === "textarea"
        ? void 0
        : Jt(e, t, n, s);
    }
    if ("q:renderFn" in a) {
      const $ = a.props;
      oa(l, f, $);
      let m = !!(f.$flags$ & Be);
      return (
        m ||
          f.$componentQrl$ ||
          f.$element$.hasAttribute("q:id") ||
          (Wr(e, f),
          (f.$componentQrl$ = $["q:renderFn"]),
          f.$componentQrl$,
          (m = !0)),
        m ? C(ls(e, f, s), () => sr(e, f, n, s)) : sr(e, f, n, s)
      );
    }
    if ("q:s" in a) return c.$slots$, void c.$slots$.push(n);
    if (W in a) ve(i, r, "innerHTML", a[W]);
    else if (!(2 & u)) return Jt(e, t, n, s);
  },
  sr = (e, t, n, s) => {
    if (2 & n.$flags$) return;
    const r = e.$static$,
      o = wo(n.$children$),
      i = qo(t);
    for (const l in i.slots)
      if (!o[l]) {
        const c = i.slots[l],
          a = bo(c, Gt);
        if (a.length > 0) {
          const u = ne(c);
          u && u.$vdom$ && (u.$vdom$.$children$ = []),
            hs(r, a, 0, a.length - 1);
        }
      }
    for (const l in i.templates) {
      const c = i.templates[l];
      c && !o[l] && ((i.templates[l] = void 0), Eo(r, c));
    }
    return Xn(
      Object.keys(o).map((l) => {
        const c = o[l],
          a = xo(r, i, t, l, e.$static$.$containerState$),
          u = cs(a),
          f = xt(e),
          $ = a.$element$;
        (f.$slotCtx$ = a), (a.$vdom$ = c), (c.$elm$ = $);
        let m = s & ~G;
        $.isSvg && (m |= G);
        const v = r.$addSlots$.findIndex((y) => y[0] === $);
        return v >= 0 && r.$addSlots$.splice(v, 1), Jt(f, u, c, m);
      })
    );
  },
  _o = (e, t, n, s, r, o, i) => {
    const l = [];
    for (; r <= o; ++r) {
      const c = s[r],
        a = ft(e, c, i, l);
      tt(e.$static$, t, a, n);
    }
    return Dt(l);
  },
  hs = (e, t, n, s) => {
    for (; n <= s; ++n) {
      const r = t[n];
      r && (r.$elm$, Eo(e, r.$elm$));
    }
  },
  xo = (e, t, n, s, r) => {
    const o = t.slots[s];
    if (o) return se(o, r);
    const i = t.templates[s];
    if (i) return se(i, r);
    const l = To(e.$doc$, s),
      c = hn(l);
    return (c.$parentCtx$ = n), ma(e, n.$element$, l), (t.templates[s] = l), c;
  },
  Gc = (e) => e.$props$[ee] ?? "",
  ft = (e, t, n, s) => {
    const r = t.$type$,
      o = e.$static$.$doc$,
      i = e.$cmpCtx$;
    if (r === "#text") {
      const h = t.$signal$,
        p = o.createTextNode(t.$text$);
      return (
        h &&
          (p.data = t.$text$ =
            Qe(ge(h, 4 & n ? [3, p, h, p] : [4, i.$element$, h, p]))),
        (t.$elm$ = p)
      );
    }
    let l,
      c = !!(n & G);
    c || r !== "svg" || ((n |= G), (c = !0));
    const a = r === Ue,
      u = t.$props$,
      f = e.$static$,
      $ = f.$containerState$;
    a
      ? (l = wa(o, c))
      : r === "head"
      ? ((l = o.head), (n |= Vt))
      : ((l = vs(o, r, c)), (n &= ~Vt)),
      2 & t.$flags$ && (n |= 4),
      (t.$elm$ = l);
    const m = hn(l);
    if (((m.$parentCtx$ = e.$slotCtx$ ?? e.$cmpCtx$), a)) {
      if ("q:renderFn" in u) {
        const h = u["q:renderFn"],
          p = fn(),
          j = $.$subsManager$.$createManager$(),
          w = new Proxy(p, new Fr($, j)),
          g = u.props;
        if (($.$proxyMap$.set(p, w), (m.$props$ = w), g !== V)) {
          const z = (p[b] = g[b] ?? V);
          for (const _ in g)
            if (_ !== "children" && _ !== ee) {
              const q = z[_];
              te(q) ? (p["$$" + _] = q) : (p[_] = g[_]);
            }
        }
        Wr(e, m), (m.$componentQrl$ = h);
        const k = C(ls(e, m, n), () => {
          let z = t.$children$;
          if (z.length === 0) return;
          z.length === 1 && z[0].$type$ === Wt && (z = z[0].$children$);
          const _ = qo(m),
            q = [],
            T = wo(z);
          for (const x in T) {
            const E = T[x],
              A = xo(f, _, m, x, f.$containerState$),
              Q = xt(e),
              ie = A.$element$;
            (Q.$slotCtx$ = A), (A.$vdom$ = E), (E.$elm$ = ie);
            let F = n & ~G;
            ie.isSvg && (F |= G);
            for (const N of E.$children$) {
              const Se = ft(Q, N, F, q);
              N.$elm$, N.$elm$, zo(f, ie, Se);
            }
          }
          return Dt(q);
        });
        return U(k) && s.push(k), l;
      }
      if ("q:s" in u)
        i.$slots$,
          ya(l, t.$key$),
          Z(l, "q:sref", i.$id$),
          Z(l, "q:s", ""),
          i.$slots$.push(t),
          f.$addSlots$.push([l, i.$element$]);
      else if (W in u) return ve(f, l, "innerHTML", u[W]), l;
    } else {
      if (
        (t.$immutableProps$ && or(f, m, i, t.$immutableProps$, c, !0),
        u !== V && ((m.$vdom$ = t), (t.$props$ = or(f, m, i, u, c, !1))),
        c && r === "foreignObject" && ((c = !1), (n &= ~G)),
        i)
      ) {
        const h = i.$scopeIds$;
        h &&
          h.forEach((p) => {
            l.classList.add(p);
          }),
          i.$flags$ & _e && (m.li.push(...i.li), (i.$flags$ &= ~_e));
      }
      for (const h of m.li) So(f, l, h[0]);
      if (u[W] !== void 0) return l;
      c && r === "foreignObject" && ((c = !1), (n &= ~G));
    }
    let v = t.$children$;
    if (v.length === 0) return l;
    v.length === 1 && v[0].$type$ === Wt && (v = v[0].$children$);
    const y = v.map((h) => ft(e, h, n, s));
    for (const h of y) $t(l, h);
    return l;
  },
  Zc = (e) => {
    const t = e.$slots$;
    return t || (e.$element$.parentElement, (e.$slots$ = Xc(e)));
  },
  qo = (e) => {
    const t = Zc(e),
      n = {},
      s = {},
      r = Array.from(e.$element$.childNodes).filter(On);
    for (const o of t) o.$elm$, (n[o.$key$ ?? ""] = o.$elm$);
    for (const o of r) s[oe(o, ee) ?? ""] = o;
    return { slots: n, templates: s };
  },
  Xc = (e) => {
    const t = e.$element$.parentElement;
    return Sa(t, "q:sref", e.$id$).map(Yt);
  },
  ea = (e, t, n) => (ve(e, t.style, "cssText", n), !0),
  ta = (e, t, n) => (
    t.namespaceURI === St ? pt(e, t, "class", n) : ve(e, t, "className", n), !0
  ),
  rr = (e, t, n, s) => (
    s in t &&
      t[s] !== n &&
      (t.tagName === "SELECT" ? da(e, t, s, n) : ve(e, t, s, n)),
    !0
  ),
  et = (e, t, n, s) => (pt(e, t, s.toLowerCase(), n), !0),
  na = (e, t, n) => (ve(e, t, "innerHTML", n), !0),
  sa = () => !0,
  ra = {
    style: ea,
    class: ta,
    value: rr,
    checked: rr,
    href: et,
    list: et,
    form: et,
    tabIndex: et,
    download: et,
    innerHTML: sa,
    [W]: na,
  },
  gs = (e, t, n, s, r) => {
    if (Vr(n)) return void pt(e, t, n, s != null ? String(s) : s);
    const o = ra[n];
    (o && o(e, t, s, n)) ||
      (r || !(n in t)
        ? (n.startsWith(Mn) && ko(n.slice(15)), pt(e, t, n, s))
        : ve(e, t, n, s));
  },
  or = (e, t, n, s, r, o) => {
    const i = {},
      l = t.$element$;
    for (const c in s) {
      let a = s[c];
      if (c !== "ref")
        if (Ot(c)) Ft(t.li, c, a, e.$containerState$.$containerEl$);
        else {
          if (
            (te(a) &&
              (a = ge(
                a,
                o ? [1, l, a, n.$element$, c] : [2, n.$element$, a, l, c]
              )),
            c === "class")
          ) {
            if (((a = is(a, n)), !a)) continue;
          } else c === "style" && (a = pn(a));
          (i[c] = a), gs(e, l, c, a, r);
        }
      else a !== void 0 && ns(a, l);
    }
    return i;
  },
  oa = (e, t, n) => {
    let s = t.$props$;
    if ((s || (t.$props$ = s = wt(fn(), e)), n === V)) return;
    const r = K(s),
      o = Re(s),
      i = (o[b] = n[b] ?? V);
    for (const l in n)
      if (l !== "children" && l !== ee && !i[l]) {
        const c = n[l];
        o[l] !== c && ((o[l] = c), r.$notifySubs$(l));
      }
  },
  rt = (e, t, n, s) => {
    if ((n.$clearSub$(e), Ie(e))) {
      if (s && e.hasAttribute("q:s")) return void t.$rmSlots$.push(e);
      const r = ne(e);
      r && xc(r, n);
      const o = fe(e) ? e.close : null;
      let i = e.firstChild;
      for (; (i = ys(i)) && (rt(i, t, n, !0), (i = i.nextSibling), i !== o); );
    }
  },
  ia = async (e) => {
    va(e);
  },
  $t = (e, t) => {
    fe(t) ? t.appendTo(e) : e.appendChild(t);
  },
  la = (e, t) => {
    fe(t) ? t.remove() : e.removeChild(t);
  },
  ca = (e, t, n) => {
    fe(t)
      ? t.insertBeforeTo(e, (n == null ? void 0 : n.nextSibling) ?? null)
      : e.insertBefore(t, (n == null ? void 0 : n.nextSibling) ?? null);
  },
  gn = (e, t, n) => {
    fe(t) ? t.insertBeforeTo(e, Zt(n)) : e.insertBefore(t, Zt(n));
  },
  aa = (e, t, n) => {
    const s = {};
    for (let r = t; r <= n; ++r) {
      const o = e[r].$key$;
      o != null && (s[o] = r);
    }
    return s;
  },
  So = (e, t, n) => {
    n.startsWith("on:") || pt(e, t, n, ""), ko(n);
  },
  ko = (e) => {
    var t;
    {
      const n = Lr(e);
      try {
        ((t = globalThis).qwikevents || (t.qwikevents = [])).push(n);
      } catch {}
    }
  },
  pt = (e, t, n, s) => {
    e.$operations$.push({ $operation$: ua, $args$: [t, n, s] });
  },
  ua = (e, t, n) => {
    if (n == null || n === !1) e.removeAttribute(t);
    else {
      const s = n === !0 ? "" : String(n);
      Z(e, t, s);
    }
  },
  ve = (e, t, n, s) => {
    e.$operations$.push({ $operation$: jo, $args$: [t, n, s] });
  },
  da = (e, t, n, s) => {
    e.$postOperations$.push({ $operation$: jo, $args$: [t, n, s] });
  },
  jo = (e, t, n) => {
    try {
      (e[t] = n ?? ""), n == null && xe(e) && qe(e) && e.removeAttribute(t);
    } catch (s) {
      ot(ln(6), { node: e, key: t, value: n }, s);
    }
  },
  vs = (e, t, n) => (n ? e.createElementNS(St, t) : e.createElement(t)),
  tt = (e, t, n, s) => (
    e.$operations$.push({ $operation$: gn, $args$: [t, n, s || null] }), n
  ),
  fa = (e, t, n, s) => (
    e.$operations$.push({ $operation$: ca, $args$: [t, n, s || null] }), n
  ),
  zo = (e, t, n) => (
    e.$operations$.push({ $operation$: $t, $args$: [t, n] }), n
  ),
  $a = (e, t) => {
    e.$containerState$.$styleIds$.add(t.styleId),
      e.$postOperations$.push({
        $operation$: pa,
        $args$: [e.$containerState$, t],
      });
  },
  pa = (e, t) => {
    const n = e.$containerEl$,
      s = vt(n),
      r = s.documentElement === n,
      o = s.head,
      i = s.createElement("style");
    Z(i, un, t.styleId),
      Z(i, "hidden", ""),
      (i.textContent = t.content),
      r && o ? $t(o, i) : gn(n, i, n.firstChild);
  },
  ma = (e, t, n) => {
    e.$operations$.push({ $operation$: ha, $args$: [t, n] });
  },
  ha = (e, t) => {
    gn(e, t, e.firstChild);
  },
  Eo = (e, t) => {
    Ie(t) && rt(t, e, e.$containerState$.$subsManager$, !0),
      e.$operations$.push({ $operation$: ga, $args$: [t, e] });
  },
  ga = (e) => {
    const t = e.parentElement;
    t && la(t, e);
  },
  To = (e, t) => {
    const n = vs(e, "q:template", !1);
    return Z(n, ee, t), Z(n, "hidden", ""), Z(n, "aria-hidden", "true"), n;
  },
  va = (e) => {
    for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$);
    ba(e);
  },
  Fn = (e) => oe(e, "q:key"),
  ya = (e, t) => {
    t !== null && Z(e, "q:key", t);
  },
  ba = (e) => {
    const t = e.$containerState$.$subsManager$;
    for (const n of e.$rmSlots$) {
      const s = Fn(n),
        r = Ne(n, Gt);
      if (r.length > 0) {
        const o = n.getAttribute("q:sref"),
          i = e.$roots$.find((l) => l.$id$ === o);
        if (i) {
          const l = i.$element$;
          if (l.isConnected)
            if (Ne(l, On).some((c) => oe(c, ee) === s)) rt(n, e, t, !1);
            else {
              const c = To(e.$doc$, s);
              for (const a of r) $t(c, a);
              gn(l, c, l.firstChild);
            }
          else rt(n, e, t, !1);
        } else rt(n, e, t, !1);
      }
    }
    for (const [n, s] of e.$addSlots$) {
      const r = Fn(n),
        o = Ne(s, On).find((i) => i.getAttribute(ee) === r);
      o &&
        (Ne(o, Gt).forEach((i) => {
          $t(n, i);
        }),
        o.remove());
    }
  },
  ir = () => {},
  wa = (e, t) => {
    const n = e.createComment("qv "),
      s = e.createComment("/qv");
    return new Ao(n, s, t);
  },
  _a = (e) => {
    if (!e) return {};
    const t = e.split(" ");
    return Object.fromEntries(
      t.map((n) => {
        const s = n.indexOf("=");
        return s >= 0 ? [n.slice(0, s), ja(n.slice(s + 1))] : [n, ""];
      })
    );
  },
  xa = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([n, s]) => {
        t.push(s ? `${n}=${ka(s)}` : `${n}`);
      }),
      t.join(" ")
    );
  },
  qa = (e, t, n) =>
    e.ownerDocument.createTreeWalker(e, 128, {
      acceptNode(s) {
        const r = kt(s);
        return r && oe(r, t) === n ? 1 : 2;
      },
    }),
  Sa = (e, t, n) => {
    const s = qa(e, t, n),
      r = [];
    let o = null;
    for (; (o = s.nextNode()); ) r.push(kt(o));
    return r;
  },
  ka = (e) => e.replace(/ /g, "+"),
  ja = (e) => e.replace(/\+/g, " "),
  Ue = ":virtual";
class Ao {
  constructor(t, n, s) {
    (this.open = t),
      (this.close = n),
      (this.isSvg = s),
      (this._qc_ = null),
      (this.nodeType = 111),
      (this.localName = Ue),
      (this.nodeName = Ue);
    const r = (this.ownerDocument = t.ownerDocument);
    (this.$template$ = vs(r, "template", !1)),
      (this.$attributes$ = _a(t.data.slice(3))),
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
    for (const r of s) t.insertBefore(r, n);
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
    (this.$attributes$[t] = n), (this.open.data = lr(this.$attributes$));
  }
  removeAttribute(t) {
    delete this.$attributes$[t], (this.open.data = lr(this.$attributes$));
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
      Ne(this, zl).forEach((s) => {
        Ie(s) &&
          (s.matches(t) && n.push(s),
          n.concat(Array.from(s.querySelectorAll(t))));
      }),
      n
    );
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (qe(n)) {
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
const lr = (e) => `qv ${xa(e)}`,
  ys = (e) => {
    if (e == null) return null;
    if (ht(e)) {
      const t = kt(e);
      if (t) return t;
    }
    return e;
  },
  za = (e) => {
    let t = e,
      n = 1;
    for (; (t = t.nextSibling); )
      if (ht(t)) {
        const s = t.__virtual;
        if (s) t = s;
        else if (t.data.startsWith("qv ")) n++;
        else if (t.data === "/qv" && (n--, n === 0)) return t;
      }
  },
  kt = (e) => {
    var n;
    const t = e.__virtual;
    if (t) return t;
    if (e.data.startsWith("qv ")) {
      const s = za(e);
      return new Ao(
        e,
        s,
        ((n = e.parentElement) == null ? void 0 : n.namespaceURI) === St
      );
    }
    return null;
  },
  Zt = (e) => (e == null ? null : fe(e) ? e.open : e),
  Ea = async (e) => {
    const t = {},
      n = Mo(t);
    let s;
    for (M(e, n, !1); (s = n.$promises$).length > 0; )
      (n.$promises$ = []), await Promise.all(s);
    const r = Array.from(n.$objSet$.keys());
    let o = 0;
    const i = new Map();
    for (const a of r) i.set(a, we(o)), o++;
    if (n.$noSerialize$.length > 0) {
      const a = i.get(void 0);
      for (const u of n.$noSerialize$) i.set(u, a);
    }
    const l = (a) => {
        let u = "";
        if (U(a)) {
          const $ = Co(a);
          if (!$) throw H(27, a);
          (a = $.value), (u += $.resolved ? "~" : "_");
        }
        if ($e(a)) {
          const $ = Re(a);
          $ && ((u += "!"), (a = $));
        }
        const f = i.get(a);
        if (f === void 0) throw H(27, a);
        return f + u;
      },
      c = Lo(r, l, null, n, t);
    return JSON.stringify({ _entry: l(e), _objs: c });
  },
  Ta = async (e, t) => {
    const n = vt(e),
      s = n.documentElement,
      r = Ir(e) ? s : e;
    if (oe(r, "q:container") === "paused") throw H(21);
    const o = t ?? (r === n.documentElement ? n.body : r),
      i = Ke(r),
      l = Aa(r, Pa);
    Z(r, "q:container", "paused");
    for (const $ of l) {
      const m = $.$element$,
        v = $.li;
      if ($.$scopeIds$) {
        const y = uo($.$scopeIds$);
        y && m.setAttribute("q:sstyle", y);
      }
      if (($.$id$ && m.setAttribute("q:id", $.$id$), qe(m) && v.length > 0)) {
        const y = ts(v);
        for (const h of y) m.setAttribute(h[0], _s(h[1], $));
      }
    }
    const c = await Io(l, i, ($) => (xe($) && Jn($) ? Fa($, i) : null)),
      a = n.createElement("script");
    Z(a, "type", "qwik/json"),
      (a.textContent = Ra(JSON.stringify(c.state, void 0, void 0))),
      o.appendChild(a);
    const u = Array.from(i.$events$, ($) => JSON.stringify($)),
      f = n.createElement("script");
    return (
      (f.textContent = `window.qwikevents||=[];window.qwikevents.push(${u.join(
        ", "
      )})`),
      o.appendChild(f),
      c
    );
  },
  Io = async (e, t, n, s) => {
    var w;
    const r = Mo(t);
    s == null ||
      s.forEach((g, k) => {
        r.$seen$.add(k);
      });
    let o = !1;
    for (const g of e)
      if (g.$tasks$)
        for (const k of g.$tasks$)
          ro(k) && r.$resources$.push(k.$state$), io(k);
    for (const g of e) {
      const k = g.$element$,
        z = g.li;
      for (const _ of z)
        if (qe(k)) {
          const q = _[1],
            T = q.$captureRef$;
          if (T) for (const x of T) M(x, r, !0);
          r.$qrls$.push(q), (o = !0);
        }
    }
    if (!o)
      return {
        state: { refs: {}, ctx: {}, objs: [], subs: [] },
        objs: [],
        funcs: [],
        qrls: [],
        resources: r.$resources$,
        mode: "static",
      };
    let i;
    for (; (i = r.$promises$).length > 0; )
      (r.$promises$ = []), await Promise.all(i);
    const l = r.$elements$.length > 0;
    if (l) {
      for (const g of r.$deferElements$) bs(g, r, g.$element$);
      for (const g of e) Ia(g, r);
    }
    for (; (i = r.$promises$).length > 0; )
      (r.$promises$ = []), await Promise.all(i);
    const c = new Map(),
      a = Array.from(r.$objSet$.keys()),
      u = new Map(),
      f = (g) => {
        let k = "";
        if (U(g)) {
          const q = Co(g);
          if (!q) return null;
          (g = q.value), (k += q.resolved ? "~" : "_");
        }
        if ($e(g)) {
          const q = Re(g);
          if (q) (k += "!"), (g = q);
          else if (Ie(g)) {
            const T = ((x) => {
              let E = c.get(x);
              return (
                E === void 0 &&
                  ((E = Oa(x)),
                  E || console.warn("Missing ID", x),
                  c.set(x, E)),
                E
              );
            })(g);
            return T ? "#" + T + k : null;
          }
        }
        const z = u.get(g);
        if (z) return z + k;
        const _ = s == null ? void 0 : s.get(g);
        return _ ? "*" + _ : n ? n(g) : null;
      },
      $ = (g) => {
        const k = f(g);
        if (k === null) {
          if (Bo(g)) {
            const z = we(u.size);
            return u.set(g, z), z;
          }
          throw H(27, g);
        }
        return k;
      },
      m = new Map();
    for (const g of a) {
      const k = (w = Da(g, t)) == null ? void 0 : w.$subs$;
      if (!k) continue;
      const z = Qo(g) ?? 0,
        _ = [];
      1 & z && _.push(z);
      for (const q of k) {
        const T = q[1];
        (q[0] === 0 && xe(T) && fe(T) && !r.$elements$.includes(ne(T))) ||
          _.push(q);
      }
      _.length > 0 && m.set(g, _);
    }
    a.sort((g, k) => (m.has(g) ? 0 : 1) - (m.has(k) ? 0 : 1));
    let v = 0;
    for (const g of a) u.set(g, we(v)), v++;
    if (r.$noSerialize$.length > 0) {
      const g = u.get(void 0);
      for (const k of r.$noSerialize$) u.set(k, g);
    }
    const y = [];
    for (const g of a) {
      const k = m.get(g);
      if (k == null) break;
      y.push(
        k.map((z) => (typeof z == "number" ? `_${z}` : x1(z, f))).filter(Cr)
      );
    }
    y.length, m.size;
    const h = Lo(a, $, f, r, t),
      p = {},
      j = {};
    for (const g of e) {
      const k = g.$element$,
        z = g.$id$,
        _ = g.$refMap$,
        q = g.$props$,
        T = g.$contexts$,
        x = g.$tasks$,
        E = g.$componentQrl$,
        A = g.$seq$,
        Q = {},
        ie = fe(k) && r.$elements$.includes(g);
      if (_.length > 0) {
        const F = ze(_, $, " ");
        F && (j[z] = F);
      } else if (l) {
        let F = !1;
        if (ie) {
          const N = f(q);
          (Q.h = $(E) + (N ? " " + N : "")), (F = !0);
        } else {
          const N = f(q);
          N && ((Q.h = " " + N), (F = !0));
        }
        if (x && x.length > 0) {
          const N = ze(x, f, " ");
          N && ((Q.w = N), (F = !0));
        }
        if (ie && A && A.length > 0) {
          const N = ze(A, $, " ");
          (Q.s = N), (F = !0);
        }
        if (T) {
          const N = [];
          T.forEach((xn, zt) => {
            const Ge = f(xn);
            Ge && N.push(`${zt}=${Ge}`);
          });
          const Se = N.join(" ");
          Se && ((Q.c = Se), (F = !0));
        }
        F && (p[z] = Q);
      }
    }
    return {
      state: { refs: j, ctx: p, objs: h, subs: y },
      objs: a,
      funcs: r.$inlinedFunctions$,
      resources: r.$resources$,
      qrls: r.$qrls$,
      mode: l ? "render" : "listeners",
    };
  },
  ze = (e, t, n) => {
    let s = "";
    for (const r of e) {
      const o = t(r);
      o !== null && (s !== "" && (s += n), (s += o));
    }
    return s;
  },
  Aa = (e, t) => {
    const n = [],
      s = t(e);
    s !== void 0 && n.push(s);
    const r = e.ownerDocument.createTreeWalker(e, 129, {
      acceptNode(o) {
        if (Na(o)) return 2;
        const i = t(o);
        return i !== void 0 && n.push(i), 3;
      },
    });
    for (; r.nextNode(); );
    return n;
  },
  Ia = (e, t) => {
    var r;
    const n = e.$parentCtx$,
      s = e.$props$;
    if (n && s && !Ro(s) && t.$elements$.includes(n)) {
      const o = (r = K(s)) == null ? void 0 : r.$subs$,
        i = e.$element$;
      if (o)
        for (const [l, c] of o)
          l === 0
            ? (c !== i && We(K(s), t, !1), xe(c) ? Ca(c, t) : M(c, t, !0))
            : (M(s, t, !1), We(K(s), t, !1));
    }
  },
  Mo = (e) => ({
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
  Ma = (e, t) => {
    const n = ne(e);
    t.$elements$.includes(n) ||
      (t.$elements$.push(n),
      t.$prefetch$++,
      8 & n.$flags$ ? bs(n, t, !0) : t.$deferElements$.push(n),
      t.$prefetch$--);
  },
  Ca = (e, t) => {
    const n = ne(e);
    if (n) {
      if (t.$elements$.includes(n)) return;
      t.$elements$.push(n), bs(n, t, e);
    }
  },
  bs = (e, t, n) => {
    if (
      (e.$props$ &&
        !Ro(e.$props$) &&
        (M(e.$props$, t, n), We(K(e.$props$), t, n)),
      e.$componentQrl$ && M(e.$componentQrl$, t, n),
      e.$seq$)
    )
      for (const s of e.$seq$) M(s, t, n);
    if (e.$tasks$) {
      const s = t.$containerState$.$subsManager$.$groupToManagers$;
      for (const r of e.$tasks$) s.has(r) && M(r, t, n);
    }
    if (n === !0 && (cr(e, t), e.$dynamicSlots$))
      for (const s of e.$dynamicSlots$) cr(s, t);
  },
  cr = (e, t) => {
    for (; e; ) {
      if (e.$contexts$) for (const n of e.$contexts$.values()) M(n, t, !0);
      e = e.$parentCtx$;
    }
  },
  Ra = (e) => e.replace(/<(\/?script)/g, "\\x3C$1"),
  We = (e, t, n) => {
    if (t.$seen$.has(e)) return;
    t.$seen$.add(e);
    const s = e.$subs$;
    for (const r of s) {
      const o = r[0];
      if ((o > 0 && M(r[2], t, n), n === !0)) {
        const i = r[1];
        xe(i) && fe(i) ? o === 0 && Ma(i, t) : M(i, t, !0);
      }
    }
  },
  Hn = Symbol(),
  La = (e) =>
    e.then(
      (t) => ((e[Hn] = { resolved: !0, value: t }), t),
      (t) => ((e[Hn] = { resolved: !1, value: t }), t)
    ),
  Co = (e) => e[Hn],
  M = (e, t, n) => {
    if (e !== null) {
      const s = typeof e;
      switch (s) {
        case "function":
        case "object": {
          const r = t.$seen$;
          if (r.has(e)) return;
          if ((r.add(e), Fo(e)))
            return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
          const o = e,
            i = Re(e);
          if (i) {
            const l = (2 & Qo((e = i))) == 0;
            if ((n && l && We(K(o), t, n), Ho(o)))
              return void t.$objSet$.add(e);
          }
          if (m1(e, t, n)) return void t.$objSet$.add(e);
          if (U(e))
            return void t.$promises$.push(
              La(e).then((l) => {
                M(l, t, n);
              })
            );
          if (s === "object") {
            if (xe(e)) return;
            if (D(e)) for (let l = 0; l < e.length; l++) M(o[l], t, n);
            else if (gt(e)) for (const l in e) M(o[l], t, n);
          }
          break;
        }
        case "string":
          if (t.$seen$.has(e)) return;
      }
    }
    t.$objSet$.add(e);
  },
  Na = (e) => qe(e) && e.hasAttribute("q:container"),
  Pa = (e) => {
    const t = ys(e);
    if (Ie(t)) {
      const n = ne(t);
      if (n && n.$id$) return n;
    }
  },
  Da = (e, t) => {
    if (!$e(e)) return;
    if (e instanceof ct) return K(e);
    const n = t.$proxyMap$.get(e);
    return n ? K(n) : void 0;
  },
  Oa = (e) => {
    const t = ne(e);
    return t ? t.$id$ : null;
  },
  Fa = (e, t) => {
    const n = e.previousSibling;
    if (n && ht(n) && n.data.startsWith("t=")) return "#" + n.data.slice(2);
    const s = e.ownerDocument,
      r = we(t.$elementIndex$++),
      o = s.createComment(`t=${r}`),
      i = s.createComment(""),
      l = e.parentElement;
    return l.insertBefore(o, e), l.insertBefore(i, e.nextSibling), "#" + r;
  },
  Ro = (e) => Object.keys(e).length === 0;
function Lo(e, t, n, s, r) {
  return e.map((o) => {
    if (o === null) return null;
    const i = typeof o;
    switch (i) {
      case "undefined":
        return yn;
      case "number":
        if (!Number.isFinite(o)) break;
        return o;
      case "string":
        if (o.charCodeAt(0) < 32) break;
        return o;
      case "boolean":
        return o;
    }
    const l = h1(o, t, s, r);
    if (l !== void 0) return l;
    if (i === "object") {
      if (D(o)) return o.map(t);
      if (gt(o)) {
        const c = {};
        for (const a in o)
          if (n) {
            const u = n(o[a]);
            u !== null && (c[a] = u);
          } else c[a] = t(o[a]);
        return c;
      }
    }
    throw H(3, o);
  });
}
const I = (e, t, n = ae) => _n(null, t, e, null, null, n, null),
  Qn = (e, t = ae) => _n(null, e, null, null, null, t, null),
  ws = (e, t = {}) => {
    let n = e.$symbol$,
      s = e.$chunk$;
    const r = e.$refSymbol$ ?? n,
      o = cn();
    if (o) {
      const a = o.chunkForSymbol(r, s);
      a && ((s = a[1]), e.$refSymbol$ || (n = a[0]));
    }
    if (!s) throw H(31, e.$symbol$);
    s.startsWith("./") && (s = s.slice(2));
    let i = `${s}#${n}`;
    const l = e.$capture$,
      c = e.$captureRef$;
    return (
      c && c.length
        ? t.$getObjId$
          ? (i += `[${ze(c, t.$getObjId$, " ")}]`)
          : t.$addRefMap$ && (i += `[${ze(c, t.$addRefMap$, " ")}]`)
        : l && l.length > 0 && (i += `[${l.join(" ")}]`),
      i
    );
  },
  _s = (e, t) => {
    t.$element$;
    const n = { $addRefMap$: (s) => Ha(t.$refMap$, s) };
    return ze(
      e,
      (s) => ws(s, n),
      `
`
    );
  },
  vn = (e, t) => {
    const n = e.length,
      s = ar(e, 0, "#"),
      r = ar(e, s, "["),
      o = Math.min(s, r),
      i = e.substring(0, o),
      l = s == n ? s : s + 1,
      c = l == r ? "default" : e.substring(l, r),
      a = r === n ? ae : e.substring(r + 1, n - 1).split(" "),
      u = _n(i, c, null, null, a, null, null);
    return t && u.$setContainer$(t), u;
  },
  ar = (e, t, n) => {
    const s = e.length,
      r = e.indexOf(n, t == s ? 0 : t);
    return r == -1 ? s : r;
  },
  Ha = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? (e.push(t), String(e.length - 1)) : String(n);
  },
  No = (e, t) => (
    e.$capture$,
    (e.$captureRef$ = e.$capture$.map((n) => {
      const s = parseInt(n, 10),
        r = t.$refMap$[s];
      return t.$refMap$.length > s, r;
    }))
  ),
  Qa = (e) => ({
    __brand: "resource",
    value: void 0,
    loading: !Me(),
    _resolved: void 0,
    _error: void 0,
    _state: "pending",
    _timeout: (e == null ? void 0 : e.timeout) ?? -1,
    _cache: 0,
  }),
  Ba = (e) => $e(e) && e.__brand === "resource",
  Ua = (e, t) => {
    const n = e._state;
    return n === "resolved"
      ? `0 ${t(e._resolved)}`
      : n === "pending"
      ? "1"
      : `2 ${t(e._error)}`;
  },
  Wa = (e) => {
    const [t, n] = e.split(" "),
      s = Qa(void 0);
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
  Ve = (e) => S(Ae, { "q:s": "" }, 0, e.name ?? ""),
  yn = "";
function O(e) {
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
const Va = O({
    $prefix$: "",
    $test$: (e) => Bo(e),
    $collect$: (e, t, n) => {
      if (e.$captureRef$) for (const s of e.$captureRef$) M(s, t, n);
      t.$prefetch$ === 0 && t.$qrls$.push(e);
    },
    $serialize$: (e, t) => ws(e, { $getObjId$: t }),
    $prepare$: (e, t) => vn(e, t.$containerEl$),
    $fill$: (e, t) => {
      e.$capture$ &&
        e.$capture$.length > 0 &&
        ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null));
    },
  }),
  Ka = O({
    $prefix$: "",
    $test$: (e) => us(e),
    $collect$: (e, t, n) => {
      M(e.$qrl$, t, n),
        e.$state$ &&
          (M(e.$state$, t, n),
          n === !0 && e.$state$ instanceof ct && We(e.$state$[ue], t, !0));
    },
    $serialize$: (e, t) => vc(e, t),
    $prepare$: (e) => yc(e),
    $fill$: (e, t) => {
      (e.$el$ = t(e.$el$)),
        (e.$qrl$ = t(e.$qrl$)),
        e.$state$ && (e.$state$ = t(e.$state$));
    },
  }),
  Ja = O({
    $prefix$: "",
    $test$: (e) => Ba(e),
    $collect$: (e, t, n) => {
      M(e.value, t, n), M(e._resolved, t, n);
    },
    $serialize$: (e, t) => Ua(e, t),
    $prepare$: (e) => Wa(e),
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
  Ya = O({
    $prefix$: "",
    $test$: (e) => e instanceof URL,
    $serialize$: (e) => e.href,
    $prepare$: (e) => new URL(e),
    $fill$: void 0,
  }),
  Ga = O({
    $prefix$: "",
    $test$: (e) => e instanceof Date,
    $serialize$: (e) => e.toISOString(),
    $prepare$: (e) => new Date(e),
    $fill$: void 0,
  }),
  Za = O({
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
  Xa = O({
    $prefix$: "",
    $test$: (e) => e instanceof Error,
    $serialize$: (e) => e.message,
    $prepare$: (e) => {
      const t = new Error(e);
      return (t.stack = void 0), t;
    },
    $fill$: void 0,
  }),
  e1 = O({
    $prefix$: "",
    $test$: (e) => Ir(e),
    $serialize$: void 0,
    $prepare$: (e, t, n) => n,
    $fill$: void 0,
  }),
  Xt = Symbol("serializable-data"),
  t1 = O({
    $prefix$: "",
    $test$: (e) => Wo(e),
    $serialize$: (e, t) => {
      const [n] = e[Xt];
      return ws(n, { $getObjId$: t });
    },
    $prepare$: (e, t) => {
      const n = vn(e, t.$containerEl$);
      return L(n);
    },
    $fill$: (e, t) => {
      const [n] = e[Xt];
      n.$capture$ &&
        n.$capture$.length > 0 &&
        ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null));
    },
  }),
  n1 = O({
    $prefix$: "",
    $test$: (e) => e instanceof Rn,
    $collect$: (e, t, n) => {
      if (e.$args$) for (const s of e.$args$) M(s, t, n);
    },
    $serialize$: (e, t, n) => {
      const s = Fl(e);
      let r = n.$inlinedFunctions$.indexOf(s);
      return (
        r < 0 &&
          (n.$inlinedFunctions$.push(s), (r = n.$inlinedFunctions$.length - 1)),
        ze(e.$args$, t, " ") + " @" + we(r)
      );
    },
    $prepare$: (e) => {
      const t = e.split(" "),
        n = t.slice(0, -1),
        s = t[t.length - 1];
      return new Rn(s, n, s);
    },
    $fill$: (e, t) => {
      e.$func$, (e.$func$ = t(e.$func$)), (e.$args$ = e.$args$.map(t));
    },
  }),
  s1 = O({
    $prefix$: "",
    $test$: (e) => e instanceof ct,
    $collect$: (e, t, n) => (
      M(e.untrackedValue, t, n), n === !0 && !(1 & e[lt]) && We(e[ue], t, !0), e
    ),
    $serialize$: (e, t) => t(e.untrackedValue),
    $prepare$: (e, t) => {
      var n;
      return new ct(
        e,
        (n = t == null ? void 0 : t.$subsManager$) == null
          ? void 0
          : n.$createManager$(),
        0
      );
    },
    $subs$: (e, t) => {
      e[ue].$addSubs$(t);
    },
    $fill$: (e, t) => {
      e.untrackedValue = t(e.untrackedValue);
    },
  }),
  r1 = O({
    $prefix$: "",
    $test$: (e) => e instanceof Ln,
    $collect$(e, t, n) {
      if ((M(e.ref, t, n), Ho(e.ref))) {
        const s = K(e.ref);
        v1(t.$containerState$.$subsManager$, s, n) && M(e.ref[e.prop], t, n);
      }
      return e;
    },
    $serialize$: (e, t) => `${t(e.ref)} ${e.prop}`,
    $prepare$: (e) => {
      const [t, n] = e.split(" ");
      return new Ln(t, n);
    },
    $fill$: (e, t) => {
      e.ref = t(e.ref);
    },
  }),
  o1 = O({
    $prefix$: "",
    $test$: (e) => typeof e == "number",
    $serialize$: (e) => String(e),
    $prepare$: (e) => Number(e),
    $fill$: void 0,
  }),
  i1 = O({
    $prefix$: "",
    $test$: (e) => e instanceof URLSearchParams,
    $serialize$: (e) => e.toString(),
    $prepare$: (e) => new URLSearchParams(e),
    $fill$: void 0,
  }),
  l1 = O({
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
      for (const [s, r] of t) n.append(s, r);
      return n;
    },
    $fill$: void 0,
  }),
  c1 = O({
    $prefix$: "",
    $test$: (e) => Ye(e),
    $collect$: (e, t, n) => {
      M(e.children, t, n), M(e.props, t, n), M(e.immutableProps, t, n);
      let s = e.type;
      s === Ve ? (s = ":slot") : s === R && (s = ":fragment"), M(s, t, n);
    },
    $serialize$: (e, t) => {
      let n = e.type;
      return (
        n === Ve ? (n = ":slot") : n === R && (n = ":fragment"),
        `${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.children)} ${
          e.flags
        }`
      );
    },
    $prepare$: (e) => {
      const [t, n, s, r, o] = e.split(" ");
      return new qt(t, n, s, r, parseInt(o, 10));
    },
    $fill$: (e, t) => {
      (e.type = y1(t(e.type))),
        (e.props = t(e.props)),
        (e.immutableProps = t(e.immutableProps)),
        (e.children = t(e.children));
    },
  }),
  a1 = O({
    $prefix$: "",
    $test$: (e) => typeof e == "bigint",
    $serialize$: (e) => e.toString(),
    $prepare$: (e) => BigInt(e),
    $fill$: void 0,
  }),
  De = Symbol(),
  u1 = O({
    $prefix$: "",
    $test$: (e) => e instanceof Set,
    $collect$: (e, t, n) => {
      e.forEach((s) => M(s, t, n));
    },
    $serialize$: (e, t) => Array.from(e).map(t).join(" "),
    $prepare$: (e) => {
      const t = new Set();
      return (t[De] = e), t;
    },
    $fill$: (e, t) => {
      const n = e[De];
      e[De] = void 0;
      const s = n.length === 0 ? [] : n.split(" ");
      for (const r of s) e.add(t(r));
    },
  }),
  d1 = O({
    $prefix$: "",
    $test$: (e) => e instanceof Map,
    $collect$: (e, t, n) => {
      e.forEach((s, r) => {
        M(s, t, n), M(r, t, n);
      });
    },
    $serialize$: (e, t) => {
      const n = [];
      return (
        e.forEach((s, r) => {
          n.push(t(r) + " " + t(s));
        }),
        n.join(" ")
      );
    },
    $prepare$: (e) => {
      const t = new Map();
      return (t[De] = e), t;
    },
    $fill$: (e, t) => {
      const n = e[De];
      e[De] = void 0;
      const s = n.length === 0 ? [] : n.split(" ");
      s.length % 2;
      for (let r = 0; r < s.length; r += 2) e.set(t(s[r]), t(s[r + 1]));
    },
  }),
  f1 = O({
    $prefix$: "\x1B",
    $test$: (e) => !!Po(e) || e === yn,
    $serialize$: (e) => e,
    $prepare$: (e) => e,
    $fill$: void 0,
  }),
  bn = [
    Va,
    Ka,
    Ja,
    Ya,
    Ga,
    Za,
    Xa,
    e1,
    t1,
    n1,
    s1,
    r1,
    o1,
    i1,
    l1,
    c1,
    a1,
    u1,
    d1,
    f1,
  ],
  ur = (() => {
    const e = [];
    return (
      bn.forEach((t) => {
        const n = t.$prefixCode$;
        for (; e.length < n; ) e.push(void 0);
        e.push(t);
      }),
      e
    );
  })();
function Po(e) {
  if (typeof e == "string") {
    const t = e.charCodeAt(0);
    if (t < ur.length) return ur[t];
  }
}
const $1 = bn.filter((e) => e.$collect$),
  p1 = (e) => {
    for (const t of bn) if (t.$test$(e)) return !0;
    return !1;
  },
  m1 = (e, t, n) => {
    for (const s of $1) if (s.$test$(e)) return s.$collect$(e, t, n), !0;
    return !1;
  },
  h1 = (e, t, n, s) => {
    for (const r of bn)
      if (r.$test$(e)) {
        let o = r.$prefixChar$;
        return r.$serialize$ && (o += r.$serialize$(e, t, n, s)), o;
      }
    if (typeof e == "string") return e;
  },
  Do = (e, t) => {
    const n = new Map(),
      s = new Map();
    return {
      prepare(r) {
        const o = Po(r);
        if (o) {
          const i = o.$prepare$(r.slice(1), e, t);
          return o.$fill$ && n.set(i, o), o.$subs$ && s.set(i, o), i;
        }
        return r;
      },
      subs(r, o) {
        const i = s.get(r);
        return !!i && (i.$subs$(r, o, e), !0);
      },
      fill(r, o) {
        const i = n.get(r);
        return !!i && (i.$fill$(r, o, e), !0);
      },
    };
  },
  g1 = {
    "!": (e, t) => t.$proxyMap$.get(e) ?? ss(e, t),
    "~": (e) => Promise.resolve(e),
    _: (e) => Promise.reject(e),
  },
  v1 = (e, t, n) => {
    if (typeof n == "boolean") return n;
    const s = e.$groupToManagers$.get(n);
    return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== t);
  },
  y1 = (e) => (e === ":slot" ? Ve : e === ":fragment" ? R : e),
  b1 = (e, t) => Bn(e, new Set(), "_", t),
  Bn = (e, t, n, s) => {
    const r = jt(e);
    if (r == null) return e;
    if (w1(r)) {
      if (t.has(r) || (t.add(r), p1(r))) return e;
      const o = typeof r;
      switch (o) {
        case "object":
          if (U(r) || xe(r)) return e;
          if (D(r)) {
            let l = 0;
            return (
              r.forEach((c, a) => {
                if (a !== l) throw H(3, r);
                Bn(c, t, n + "[" + a + "]"), (l = a + 1);
              }),
              e
            );
          }
          if (gt(r)) {
            for (const [l, c] of Object.entries(r)) Bn(c, t, n + "." + l);
            return e;
          }
          break;
        case "boolean":
        case "string":
        case "number":
          return e;
      }
      let i = "";
      if (
        ((i = s || "Value cannot be serialized"),
        n !== "_" && (i += ` in ${n},`),
        o === "object")
      )
        i += ` because it's an instance of "${
          e == null ? void 0 : e.constructor.name
        }". You might need to use 'noSerialize()' or use an object literal instead. Check out https://qwik.builder.io/docs/advanced/dollar/`;
      else if (o === "function") {
        const l = e.name;
        i += ` because it's a function named "${l}". You might need to convert it to a QRL using $(fn):

const ${l} = $(${String(e)});

Please check out https://qwik.builder.io/docs/advanced/qrl/ for more information.`;
      }
      console.error("Trying to serialize", e), El(i);
    }
    return e;
  },
  xs = new WeakSet(),
  Oo = new WeakSet(),
  w1 = (e) => (!$e(e) && !X(e)) || !xs.has(e),
  Fo = (e) => xs.has(e),
  Ho = (e) => Oo.has(e),
  wn = (e) => (e != null && xs.add(e), e),
  _1 = (e) => (Oo.add(e), e),
  jt = (e) => ($e(e) ? Re(e) ?? e : e),
  Re = (e) => e[In],
  K = (e) => e[ue],
  Qo = (e) => e[Le],
  x1 = (e, t) => {
    const n = e[0],
      s = typeof e[1] == "string" ? e[1] : t(e[1]);
    if (!s) return;
    let r = n + " " + s,
      o;
    if (n === 0) o = e[2];
    else {
      const i = t(e[2]);
      if (!i) return;
      n <= 2
        ? ((o = e[5]), (r += ` ${i} ${dr(t(e[3]))} ${e[4]}`))
        : n <= 4 &&
          ((o = e[4]),
          (r += ` ${i} ${typeof e[3] == "string" ? e[3] : dr(t(e[3]))}`));
    }
    return o && (r += ` ${encodeURI(o)}`), r;
  },
  q1 = (e, t) => {
    const n = e.split(" "),
      s = parseInt(n[0], 10);
    n.length >= 2;
    const r = t(n[1]);
    if (!r || (us(r) && !r.$el$)) return;
    const o = [s, r];
    return (
      s === 0
        ? (n.length <= 3, o.push(jn(n[2])))
        : s <= 2
        ? (n.length === 5 || n.length, o.push(t(n[2]), t(n[3]), n[4], jn(n[5])))
        : s <= 4 &&
          (n.length === 4 || n.length, o.push(t(n[2]), t(n[3]), jn(n[4]))),
      o
    );
  },
  jn = (e) => {
    if (e !== void 0) return decodeURI(e);
  },
  S1 = (e) => {
    const t = new Map();
    return {
      $groupToManagers$: t,
      $createManager$: (s) => new k1(t, e, s),
      $clearSub$: (s) => {
        const r = t.get(s);
        if (r) {
          for (const o of r) o.$unsubGroup$(s);
          t.delete(s), (r.length = 0);
        }
      },
      $clearSignal$: (s) => {
        const r = t.get(s[1]);
        if (r) for (const o of r) o.$unsubEntry$(s);
      },
    };
  };
class k1 {
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
    const [n, s, r, o] = t,
      i = this.$subs$;
    if (n === 1 || n === 2) {
      const l = t[4];
      for (let c = 0; c < i.length; c++) {
        const a = i[c];
        a[0] === n &&
          a[1] === s &&
          a[2] === r &&
          a[3] === o &&
          a[4] === l &&
          (i.splice(c, 1), c--);
      }
    } else if (n === 3 || n === 4)
      for (let l = 0; l < i.length; l++) {
        const c = i[l];
        c[0] === n &&
          c[1] === s &&
          c[2] === r &&
          c[3] === o &&
          (i.splice(l, 1), l--);
      }
  }
  $addSub$(t, n) {
    const s = this.$subs$,
      r = t[1];
    (t[0] === 0 && s.some(([o, i, l]) => o === 0 && i === r && l === n)) ||
      (s.push([...t, n]), this.$addToGroup$(r, this));
  }
  $notifySubs$(t) {
    const n = this.$subs$;
    for (const s of n) {
      const r = s[s.length - 1];
      (t && r && r !== t) || rc(s, this.$containerState$);
    }
  }
}
const dr = (e) => {
    if (e == null) throw ot("must be non null", e);
    return e;
  },
  Bo = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  _n = (e, t, n, s, r, o, i) => {
    let l;
    const c = async function (...h) {
        return await $.call(this, he())(...h);
      },
      a = (h) => (l || (l = h), l),
      u = async (h) => {
        if ((h && a(h), n !== null)) return n;
        if (s !== null) return (n = s().then((p) => (c.resolved = n = p[t])));
        {
          const p = cn().importSymbol(l, e, t);
          return (n = C(p, (j) => (c.resolved = n = j)));
        }
      },
      f = (h) => (n !== null ? n : u(h));
    function $(h, p) {
      return (...j) => {
        const w = E1(),
          g = f();
        return C(g, (k) => {
          if (X(k)) {
            if (p && p() === !1) return;
            const z = { ...m(h), $qrl$: c };
            return (
              z.$event$ === void 0 && (z.$event$ = this),
              j1(t, z.$element$, w),
              J.call(this, z, k, ...j)
            );
          }
          throw H(10);
        });
      };
    }
    const m = (h) => (h == null ? re() : D(h) ? co(h) : h),
      v = i ?? t,
      y = Uo(v);
    return (
      Object.assign(c, {
        getSymbol: () => v,
        getHash: () => y,
        getCaptured: () => o,
        resolve: u,
        $resolveLazy$: f,
        $setContainer$: a,
        $chunk$: e,
        $symbol$: t,
        $refSymbol$: i,
        $hash$: y,
        getFn: $,
        $capture$: r,
        $captureRef$: o,
        dev: null,
        resolved: void 0,
      }),
      c
    );
  },
  Uo = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  };
const fr = new Set(),
  j1 = (e, t, n) => {
    fr.has(e) ||
      (fr.add(e), z1("qsymbol", { symbol: e, element: t, reqTime: n }));
  },
  z1 = (e, t) => {
    Me() ||
      typeof document != "object" ||
      document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }));
  },
  E1 = () =>
    Me() ? 0 : typeof performance == "object" ? performance.now() : 0,
  $r = (e) => e,
  L = (e) => {
    function t(n, s, r) {
      const o = e.$hash$.slice(0, 4);
      return S(
        Ae,
        {
          "q:renderFn": e,
          [ee]: n[ee],
          [b]: n[b],
          children: n.children,
          props: n,
        },
        r,
        o + ":" + (s || "")
      );
    }
    return (t[Xt] = [e]), t;
  },
  Wo = (e) => typeof e == "function" && e[Xt] !== void 0,
  At = (e, t) => {
    const { val: n, set: s, iCtx: r } = Je();
    if (n != null) return n;
    const o = X(e) ? J(void 0, e) : e;
    if ((t == null ? void 0 : t.reactive) === !1) return s(o), o;
    {
      const i = ss(
        o,
        r.$renderCtx$.$static$.$containerState$,
        (t == null ? void 0 : t.deep) ?? !0 ? 1 : 0
      );
      return s(i), i;
    }
  };
function qs(e, t) {
  var s;
  const n = he();
  return (
    ((s = n == null ? void 0 : n.$renderCtx$) == null
      ? void 0
      : s.$static$.$containerState$.$serverData$[e]) ?? t
  );
}
const T1 = (e) => {
    A1(e, (t) => t, !1);
  },
  A1 = (e, t, n) => {
    const { val: s, set: r, iCtx: o, i, elCtx: l } = Je();
    if (s) return s;
    const c = Ec(e, i),
      a = o.$renderCtx$.$static$.$containerState$;
    if (
      (r(c),
      l.$appendStyles$ || (l.$appendStyles$ = []),
      l.$scopeIds$ || (l.$scopeIds$ = []),
      n && l.$scopeIds$.push(Tc(c)),
      a.$styleIds$.has(c))
    )
      return c;
    a.$styleIds$.add(c);
    const u = e.$resolveLazy$(a.$containerEl$),
      f = ($) => {
        l.$appendStyles$,
          l.$appendStyles$.push({ styleId: c, content: t($, c) });
      };
    return U(u) ? o.$waitOn$.push(u.then(f)) : f(u), c;
  },
  Ee = (e) => {
    const { val: t, set: n, iCtx: s } = Je();
    if (t != null) return t;
    const r = s.$renderCtx$.$static$.$containerState$,
      o = X(e) && !Wo(e) ? J(void 0, e) : e;
    return n(Hl(o, r, 0, void 0));
  };
/**
 * @license
 * @builder.io/qwik/server 1.2.15
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */ var I1 = ((e) =>
  typeof require < "u"
    ? require
    : typeof Proxy < "u"
    ? new Proxy(e, { get: (t, n) => (typeof require < "u" ? require : t)[n] })
    : e)(function (e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
function Vo(e, t) {
  const n = t == null ? void 0 : t.mapper,
    s = e.symbolMapper
      ? e.symbolMapper
      : (o) => {
          var i;
          if (n) {
            const l = Un(o),
              c = n[l];
            if (!c) {
              if (
                (i = globalThis.__qwik_reg_symbols) == null ? void 0 : i.has(l)
              )
                return [o, "_"];
              console.error("Cannot resolve symbol", o, "in", n);
            }
            return c;
          }
        };
  return {
    isServer: !0,
    async importSymbol(o, i, l) {
      var $;
      const c = Un(l),
        a = ($ = globalThis.__qwik_reg_symbols) == null ? void 0 : $.get(c);
      if (a) return a;
      let u = String(i);
      u.endsWith(".js") || (u += ".js");
      const f = I1(u);
      if (!(l in f))
        throw new Error(`Q-ERROR: missing symbol '${l}' in module '${u}'.`);
      return f[l];
    },
    raf: () => (console.error("server can not rerender"), Promise.resolve()),
    nextTick: (o) =>
      new Promise((i) => {
        setTimeout(() => {
          i(o());
        });
      }),
    chunkForSymbol(o) {
      return s(o, n);
    },
  };
}
async function M1(e, t) {
  const n = Vo(e, t);
  Mr(n);
}
var Un = (e) => {
  const t = e.lastIndexOf("_");
  return t > -1 ? e.slice(t + 1) : e;
};
function zn() {
  if (typeof performance > "u") return () => 0;
  const e = performance.now();
  return () => (performance.now() - e) / 1e6;
}
function Ko(e) {
  let t = e.base;
  return (
    typeof e.base == "function" && (t = e.base(e)),
    typeof t == "string" ? (t.endsWith("/") || (t += "/"), t) : "/build/"
  );
}
var C1 = `((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,
  R1 = `(() => {
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
  L1 = `((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,
  N1 = `(() => {
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
})();`;
function P1(e = {}) {
  return Array.isArray(e.events) && e.events.length > 0
    ? (e.debug ? N1 : L1).replace("window.qEvents", JSON.stringify(e.events))
    : e.debug
    ? R1
    : C1;
}
function D1(e, t, n) {
  if (!n) return [];
  const s = t.prefetchStrategy,
    r = Ko(t);
  if (s !== null) {
    if (!s || !s.symbolsToPrefetch || s.symbolsToPrefetch === "auto")
      return O1(e, n, r);
    if (typeof s.symbolsToPrefetch == "function")
      try {
        return s.symbolsToPrefetch({ manifest: n.manifest });
      } catch (o) {
        console.error("getPrefetchUrls, symbolsToPrefetch()", o);
      }
  }
  return [];
}
function O1(e, t, n) {
  const s = [],
    r = e == null ? void 0 : e.qrls,
    { mapper: o, manifest: i } = t,
    l = new Map();
  if (Array.isArray(r))
    for (const c of r) {
      const a = c.getHash(),
        u = o[a];
      u && Jo(i, l, s, n, u[1]);
    }
  return s;
}
function Jo(e, t, n, s, r) {
  const o = s + r;
  let i = t.get(o);
  if (!i) {
    (i = { url: o, imports: [] }), t.set(o, i);
    const l = e.bundles[r];
    if (l && Array.isArray(l.imports))
      for (const c of l.imports) Jo(e, t, i.imports, s, c);
  }
  n.push(i);
}
function F1(e) {
  if (
    e != null &&
    e.mapping != null &&
    typeof e.mapping == "object" &&
    e.symbols != null &&
    typeof e.symbols == "object" &&
    e.bundles != null &&
    typeof e.bundles == "object"
  )
    return e;
}
function Wn() {
  let r = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;
  return (
    (r += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (r += "w.onmessage=()=>{w.terminate()};"),
    r
  );
}
function Ss(e) {
  const t = [],
    n = (s) => {
      if (Array.isArray(s))
        for (const r of s) t.includes(r.url) || (t.push(r.url), n(r.imports));
    };
  return n(e), t;
}
function H1(e) {
  const t = new Map();
  let n = 0;
  const s = (l, c) => {
      if (Array.isArray(l))
        for (const a of l) {
          const u = t.get(a.url) || 0;
          t.set(a.url, u + 1),
            n++,
            c.has(a.url) || (c.add(a.url), s(a.imports, c));
        }
    },
    r = new Set();
  for (const l of e) r.clear(), s(l.imports, r);
  const o = (n / t.size) * 2,
    i = Array.from(t.entries());
  return (
    i.sort((l, c) => c[1] - l[1]),
    i
      .slice(0, 5)
      .filter((l) => l[1] > o)
      .map((l) => l[0])
  );
}
function Q1(e, t, n) {
  const s = K1(e == null ? void 0 : e.implementation),
    r = [];
  return (
    s.prefetchEvent === "always" && B1(r, t, n),
    s.linkInsert === "html-append" && U1(r, t, s),
    s.linkInsert === "js-append"
      ? W1(r, t, s, n)
      : s.workerFetchInsert === "always" && V1(r, t, n),
    r.length > 0 ? Y(R, { children: r }) : null
  );
}
function B1(e, t, n) {
  const s = H1(t);
  for (const r of s)
    e.push(Y("link", { rel: "modulepreload", href: r, nonce: n }));
  e.push(
    Y("script", {
      "q:type": "prefetch-bundles",
      dangerouslySetInnerHTML:
        "document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",
      nonce: n,
    })
  );
}
function U1(e, t, n) {
  const s = Ss(t),
    r = n.linkRel || "prefetch";
  for (const o of s) {
    const i = {};
    (i.href = o),
      (i.rel = r),
      (r === "prefetch" || r === "preload") &&
        o.endsWith(".js") &&
        (i.as = "script"),
      e.push(Y("link", i, void 0));
  }
}
function W1(e, t, n, s) {
  const r = n.linkRel || "prefetch";
  let o = "";
  n.workerFetchInsert === "no-link-support" &&
    (o += "let supportsLinkRel = true;"),
    (o += `const u=${JSON.stringify(Ss(t))};`),
    (o += "u.map((u,i)=>{"),
    (o += "const l=document.createElement('link');"),
    (o += 'l.setAttribute("href",u);'),
    (o += `l.setAttribute("rel","${r}");`),
    n.workerFetchInsert === "no-link-support" &&
      ((o += "if(i===0){"),
      (o += "try{"),
      (o += `supportsLinkRel=l.relList.supports("${r}");`),
      (o += "}catch(e){}"),
      (o += "}")),
    (o += "document.body.appendChild(l);"),
    (o += "});"),
    n.workerFetchInsert === "no-link-support" &&
      ((o += "if(!supportsLinkRel){"), (o += Wn()), (o += "}")),
    n.workerFetchInsert === "always" && (o += Wn()),
    e.push(
      Y("script", {
        type: "module",
        "q:type": "link-js",
        dangerouslySetInnerHTML: o,
        nonce: s,
      })
    );
}
function V1(e, t, n) {
  let s = `const u=${JSON.stringify(Ss(t))};`;
  (s += Wn()),
    e.push(
      Y("script", {
        type: "module",
        "q:type": "prefetch-worker",
        dangerouslySetInnerHTML: s,
        nonce: n,
      })
    );
}
function K1(e) {
  return e && typeof e == "object" ? e : J1;
}
var J1 = {
    linkInsert: null,
    linkRel: null,
    workerFetchInsert: null,
    prefetchEvent: "always",
  },
  Y1 = "<!DOCTYPE html>";
async function G1(e, t) {
  var x;
  let n = t.stream,
    s = 0,
    r = 0,
    o = 0,
    i = 0,
    l = "",
    c;
  const a = ((x = t.streaming) == null ? void 0 : x.inOrder) ?? {
      strategy: "auto",
      maximunInitialChunk: 5e4,
      maximunChunk: 3e4,
    },
    u = t.containerTagName ?? "html",
    f = t.containerAttributes ?? {},
    $ = n,
    m = zn(),
    v = Ko(t),
    y = Yo(t.manifest);
  function h() {
    l && ($.write(l), (l = ""), (s = 0), o++, o === 1 && (i = m()));
  }
  function p(E) {
    const A = E.length;
    (s += A), (r += A), (l += E);
  }
  switch (a.strategy) {
    case "disabled":
      n = { write: p };
      break;
    case "direct":
      n = $;
      break;
    case "auto":
      let E = 0,
        A = !1;
      const Q = a.maximunChunk ?? 0,
        ie = a.maximunInitialChunk ?? 0;
      n = {
        write(F) {
          F === "<!--qkssr-f-->"
            ? A || (A = !0)
            : F === "<!--qkssr-pu-->"
            ? E++
            : F === "<!--qkssr-po-->"
            ? E--
            : p(F),
            E === 0 && (A || s >= (o === 0 ? ie : Q)) && ((A = !1), h());
        },
      };
      break;
  }
  u === "html"
    ? n.write(Y1)
    : (n.write("<!--cq-->"),
      t.qwikLoader
        ? (t.qwikLoader.include === void 0 && (t.qwikLoader.include = "never"),
          t.qwikLoader.position === void 0 &&
            (t.qwikLoader.position = "bottom"))
        : (t.qwikLoader = { include: "never" })),
    t.manifest ||
      console.warn(
        "Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."
      ),
    await M1(t, y);
  const j = y == null ? void 0 : y.manifest.injections,
    w = j ? j.map((E) => Y(E.tag, E.attributes ?? {})) : void 0,
    g = zn(),
    k = [];
  let z = 0,
    _ = 0;
  await Ic(e, {
    stream: n,
    containerTagName: u,
    containerAttributes: f,
    serverData: t.serverData,
    base: v,
    beforeContent: w,
    beforeClose: async (E, A, Q, ie) => {
      var js, zs, Es, Ts, As, Is, Ms;
      z = g();
      const F = zn();
      c = await Io(E, A, void 0, ie);
      const N = [];
      if (t.prefetchStrategy !== null) {
        const le = D1(c, t, y);
        if (le.length > 0) {
          const Cs = Q1(
            t.prefetchStrategy,
            le,
            (js = t.serverData) == null ? void 0 : js.nonce
          );
          Cs && N.push(Cs);
        }
      }
      const Se = JSON.stringify(c.state, void 0, void 0);
      N.push(
        Y("script", {
          type: "qwik/json",
          dangerouslySetInnerHTML: Z1(Se),
          nonce: (zs = t.serverData) == null ? void 0 : zs.nonce,
        })
      ),
        c.funcs.length > 0 &&
          N.push(
            Y("script", {
              "q:func": "qwik/json",
              dangerouslySetInnerHTML: e0(c.funcs),
              nonce: (Es = t.serverData) == null ? void 0 : Es.nonce,
            })
          );
      const xn = !c || c.mode !== "static",
        zt = ((Ts = t.qwikLoader) == null ? void 0 : Ts.include) ?? "auto",
        Ge = zt === "always" || (zt === "auto" && xn);
      if (Ge) {
        const le = P1({
          events: (As = t.qwikLoader) == null ? void 0 : As.events,
          debug: t.debug,
        });
        N.push(
          Y("script", {
            id: "qwikloader",
            dangerouslySetInnerHTML: le,
            nonce: (Is = t.serverData) == null ? void 0 : Is.nonce,
          })
        );
      }
      const ks = Array.from(A.$events$, (le) => JSON.stringify(le));
      if (ks.length > 0) {
        let le = `window.qwikevents.push(${ks.join(", ")})`;
        Ge || (le = `window.qwikevents||=[];${le}`),
          N.push(
            Y("script", {
              dangerouslySetInnerHTML: le,
              nonce: (Ms = t.serverData) == null ? void 0 : Ms.nonce,
            })
          );
      }
      return X1(k, E), (_ = F()), Y(R, { children: N });
    },
    manifestHash: (y == null ? void 0 : y.manifest.manifestHash) || "dev",
  }),
    u !== "html" && n.write("<!--/cq-->"),
    h();
  const q = c.resources.some((E) => E._cache !== 1 / 0);
  return {
    prefetchResources: void 0,
    snapshotResult: c,
    flushes: o,
    manifest: y == null ? void 0 : y.manifest,
    size: r,
    isStatic: !q,
    timing: { render: z, snapshot: _, firstFlush: i },
    _symbols: k,
  };
}
function Yo(e) {
  if (e) {
    if ("mapper" in e) return e;
    if (((e = F1(e)), e)) {
      const t = {};
      return (
        Object.entries(e.mapping).forEach(([n, s]) => {
          t[Un(n)] = [n, s];
        }),
        { mapper: t, manifest: e }
      );
    }
  }
}
var Z1 = (e) => e.replace(/<(\/?script)/g, "\\x3C$1");
function X1(e, t) {
  var n;
  for (const s of t) {
    const r = (n = s.$componentQrl$) == null ? void 0 : n.getSymbol();
    r && !e.includes(r) && e.push(r);
  }
}
function e0(e) {
  return `document.currentScript.qFuncs=[${e.join(`,
`)}]`;
}
async function t0(e) {
  const t = Vo({ manifest: e }, Yo(e));
  Mr(t);
}
function En(e, t) {
  var n;
  return (
    ((n = t == null ? void 0 : t.getOrigin) == null ? void 0 : n.call(t, e)) ??
    (t == null ? void 0 : t.origin) ??
    process.env.ORIGIN ??
    n0(e)
  );
}
function n0(e) {
  const { PROTOCOL_HEADER: t, HOST_HEADER: n } = process.env,
    s = e.headers,
    r =
      (t && s[t]) ||
      (e.socket.encrypted || e.connection.encrypted ? "https" : "http"),
    o = n ?? (e instanceof qi ? ":authority" : "host"),
    i = s[o];
  return `${r}://${i}`;
}
function Tn(e, t) {
  return r0(e.originalUrl || e.url || "/", t);
}
var s0 = /\/\/|\\\\/g;
function r0(e, t) {
  return new URL(e.replace(s0, "/"), t);
}
async function o0(e, t, n, s, r) {
  const o = new Headers(),
    i = t.headers;
  for (const $ in i) {
    const m = i[$];
    if (typeof m == "string") o.set($, m);
    else if (Array.isArray(m)) for (const v of m) o.append($, v);
  }
  const l = async function* () {
      for await (const $ of t) yield $;
    },
    c = t.method === "HEAD" || t.method === "GET" ? void 0 : l(),
    a = new AbortController(),
    u = {
      method: t.method,
      headers: o,
      body: c,
      signal: a.signal,
      duplex: "half",
    };
  return (
    n.on("close", () => {
      a.abort();
    }),
    {
      mode: s,
      url: e,
      request: new Request(e.href, u),
      env: {
        get($) {
          return process.env[$];
        },
      },
      getWritableStream: ($, m, v) => {
        (n.statusCode = $), m.forEach((h, p) => n.setHeader(p, h));
        const y = v.headers();
        return (
          y.length > 0 && n.setHeader("Set-Cookie", y),
          new WritableStream({
            write(h) {
              n.closed ||
                n.destroyed ||
                n.write(h, (p) => {
                  p && console.error(p);
                });
            },
            close() {
              n.end();
            },
          })
        );
      },
      getClientConn: () => (r ? r(t) : { ip: t.socket.remoteAddress }),
      platform: { ssr: !0, incomingMessage: t, node: process.versions.node },
      locale: void 0,
    }
  );
}
var i0 = {
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  asf: "video/x-ms-asf",
  asx: "video/x-ms-asf",
  avi: "video/x-msvideo",
  avif: "image/avif",
  bmp: "image/x-ms-bmp",
  css: "text/css",
  flv: "video/x-flv",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  jng: "image/x-jng",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "application/javascript",
  json: "application/json",
  kar: "audio/midi",
  m4a: "audio/x-m4a",
  m4v: "video/x-m4v",
  mid: "audio/midi",
  midi: "audio/midi",
  mng: "video/x-mng",
  mov: "video/quicktime",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpeg: "video/mpeg",
  mpg: "video/mpeg",
  ogg: "audio/ogg",
  pdf: "application/pdf",
  png: "image/png",
  rar: "application/x-rar-compressed",
  shtml: "text/html",
  svg: "image/svg+xml",
  svgz: "image/svg+xml",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "video/mp2t",
  txt: "text/plain",
  wbmp: "image/vnd.wap.wbmp",
  webm: "video/webm",
  webp: "image/webp",
  wmv: "video/x-ms-wmv",
  woff: "font/woff",
  woff2: "font/woff2",
  xml: "text/xml",
  zip: "application/zip",
};
function l0() {
  typeof global < "u" &&
    typeof globalThis.fetch != "function" &&
    typeof process < "u" &&
    process.versions.node &&
    ((globalThis.fetch = Ei),
    (globalThis.Headers = Ti),
    (globalThis.Request = Ai),
    (globalThis.Response = Ii),
    (globalThis.FormData = Mi)),
    typeof globalThis.TextEncoderStream > "u" &&
      ((globalThis.TextEncoderStream = Si),
      (globalThis.TextDecoderStream = ki)),
    typeof globalThis.WritableStream > "u" &&
      ((globalThis.WritableStream = ji), (globalThis.ReadableStream = zi)),
    typeof globalThis.crypto > "u" && (globalThis.crypto = Ci.webcrypto);
}
function c0(e) {
  var t;
  l0();
  const n = {
    _deserializeData: Jl,
    _serializeData: Ea,
    _verifySerializable: b1,
  };
  e.manifest && t0(e.manifest);
  const s =
    ((t = e.static) == null ? void 0 : t.root) ??
    Et(xi(import.meta.url), "..", "..", "dist");
  return {
    router: async (l, c, a) => {
      try {
        const u = En(l, e),
          f = await o0(Tn(l, u), l, c, "server", e.getClientConn),
          $ = await ql(f, e, n);
        if ($) {
          const m = await $.completion;
          if (m) throw m;
          if ($.requestEv.headersSent) return;
        }
        a();
      } catch (u) {
        console.error(u), a(u);
      }
    },
    notFound: async (l, c, a) => {
      try {
        if (!c.headersSent) {
          const u = En(l, e),
            f = Tn(l, u),
            $ = vi(f.pathname);
          c.writeHead(404, {
            "Content-Type": "text/html; charset=utf-8",
            "X-Not-Found": f.pathname,
          }),
            c.end($);
        }
      } catch (u) {
        console.error(u), a(u);
      }
    },
    staticFile: async (l, c, a) => {
      var u;
      try {
        const f = En(l, e),
          $ = Tn(l, f);
        if (yi(l.method || "GET", $)) {
          const m = $.pathname;
          let v;
          wi(m).includes(".")
            ? (v = Et(s, m))
            : e.qwikCityPlan.trailingSlash
            ? (v = Et(s, m + "index.html"))
            : (v = Et(s, m, "index.html"));
          const y = bi(v),
            h = _i(v).replace(/^\./, ""),
            p = i0[h];
          p && c.setHeader("Content-Type", p),
            (u = e.static) != null &&
              u.cacheControl &&
              c.setHeader("Cache-Control", e.static.cacheControl),
            y.on("error", a),
            y.pipe(c);
          return;
        }
        return a();
      } catch (f) {
        console.error(f), a(f);
      }
    },
  };
}
const a0 = () =>
    S(
      R,
      {
        children: d(
          "div",
          null,
          { class: "cat-background" },
          [
            d("div", null, { class: "ear ear--left" }, null, 3, null),
            d("div", null, { class: "ear ear--right" }, null, 3, null),
            d(
              "div",
              null,
              { class: "face" },
              [
                d(
                  "div",
                  null,
                  { class: "eye eye--left" },
                  d("div", null, { class: "eye-pupil" }, null, 3, null),
                  3,
                  null
                ),
                d(
                  "div",
                  null,
                  { class: "eye eye--right" },
                  d("div", null, { class: "eye-pupil" }, null, 3, null),
                  3,
                  null
                ),
                d("div", null, { class: "muzzle" }, null, 3, null),
              ],
              3,
              null
            ),
          ],
          3,
          null
        ),
      },
      3,
      "ev_0"
    ),
  u0 = L(I(a0, "s_k9rs7QcCFAU")),
  d0 = () =>
    S(
      R,
      {
        children: d(
          "div",
          null,
          { class: "cat-walk-container" },
          [
            d("div", null, { id: "tail" }, null, 3, null),
            d("div", null, { id: "tail-mask" }, "WOW", 3, null),
            d("div", null, { id: "tail-end" }, null, 3, null),
            d(
              "div",
              null,
              { id: "body" },
              [
                d(
                  "div",
                  null,
                  { class: "ear", id: "ear-left" },
                  d(
                    "div",
                    null,
                    { class: "ear-inner", id: "ear-inner-left" },
                    null,
                    3,
                    null
                  ),
                  3,
                  null
                ),
                d(
                  "div",
                  null,
                  { class: "ear", id: "ear-right" },
                  d(
                    "div",
                    null,
                    { class: "ear-inner", id: "ear-inner-right" },
                    null,
                    3,
                    null
                  ),
                  3,
                  null
                ),
                d("div", null, { id: "mask" }, null, 3, null),
                d(
                  "div",
                  null,
                  { id: "patch" },
                  [
                    d("div", null, { class: "fur" }, null, 3, null),
                    d("div", null, { class: "fur" }, null, 3, null),
                    d("div", null, { class: "fur" }, null, 3, null),
                  ],
                  3,
                  null
                ),
                d(
                  "div",
                  null,
                  { id: "eyes" },
                  [
                    d(
                      "div",
                      null,
                      { class: "eye", id: "eye-left" },
                      d(
                        "div",
                        null,
                        { class: "shine", id: "shine-left" },
                        null,
                        3,
                        null
                      ),
                      3,
                      null
                    ),
                    d(
                      "div",
                      null,
                      { class: "eye", id: "eye-right" },
                      d(
                        "div",
                        null,
                        { class: "shine", id: "shine-right" },
                        null,
                        3,
                        null
                      ),
                      3,
                      null
                    ),
                  ],
                  3,
                  null
                ),
                d(
                  "div",
                  null,
                  { id: "whisk-left" },
                  [
                    d(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-one" },
                      null,
                      3,
                      null
                    ),
                    d("div", null, { class: "whisker" }, null, 3, null),
                    d(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-three" },
                      null,
                      3,
                      null
                    ),
                  ],
                  3,
                  null
                ),
                d("div", null, { id: "nose" }, null, 3, null),
                d(
                  "div",
                  null,
                  { id: "whisk-right" },
                  [
                    d(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-four" },
                      null,
                      3,
                      null
                    ),
                    d("div", null, { class: "whisker" }, null, 3, null),
                    d(
                      "div",
                      null,
                      { class: "whisker", id: "whisk-six" },
                      null,
                      3,
                      null
                    ),
                  ],
                  3,
                  null
                ),
                d(
                  "div",
                  null,
                  { id: "smile" },
                  [
                    d(
                      "div",
                      null,
                      { id: "smile-left-align" },
                      [
                        d("div", null, { id: "smile-left" }, null, 3, null),
                        d("div", null, { id: "mask-left" }, null, 3, null),
                      ],
                      3,
                      null
                    ),
                    d(
                      "div",
                      null,
                      { id: "smile-right-align" },
                      [
                        d("div", null, { id: "smile-right" }, null, 3, null),
                        d("div", null, { id: "mask-right" }, null, 3, null),
                      ],
                      3,
                      null
                    ),
                  ],
                  3,
                  null
                ),
                d("div", null, { id: "tongue" }, null, 3, null),
                d("div", null, { id: "tummy" }, null, 3, null),
              ],
              3,
              null
            ),
          ],
          3,
          null
        ),
      },
      3,
      "wM_0"
    ),
  f0 = L(I(d0, "s_0DhRUxBQU40")),
  $0 =
    '((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',
  Go = ye("qc-s"),
  p0 = ye("qc-c"),
  Zo = ye("qc-ic"),
  Xo = ye("qc-h"),
  ei = ye("qc-l"),
  ti = ye("qc-n"),
  m0 = ye("qc-a"),
  h0 = ye("qc-ir"),
  g0 = (e) => {
    const t = window,
      n = location.pathname + location.search,
      s = "_qCitySPA",
      r = "_qCityHistoryPatch",
      o = "_qCityBootstrap",
      i = "_qCityInitPopstate",
      l = "_qCityInitAnchors",
      c = "_qCityInitVisibility",
      a = "_qCityInitScroll",
      u = "_qCityScrollEnabled",
      f = "_qCityScrollDebounce",
      $ = "_qCityScroll",
      m = (h) => {
        h && t.scrollTo(h.x, h.y);
      },
      v = () => {
        const h = document.documentElement;
        return {
          x: h.scrollLeft,
          y: h.scrollTop,
          w: Math.max(h.scrollWidth, h.clientWidth),
          h: Math.max(h.scrollHeight, h.clientHeight),
        };
      },
      y = (h) => {
        const p = history.state || {};
        (p[$] = h || v()), history.replaceState(p, "");
      };
    if (!t[s] && !t[i] && !t[l] && !t[c] && !t[a]) {
      if (
        (y(),
        (t[i] = () => {
          var h;
          if (!t[s]) {
            if (
              ((t[u] = !1),
              clearTimeout(t[f]),
              n !== location.pathname + location.search)
            ) {
              const j = e
                .closest("[q\\:container]")
                .querySelector('a[q\\:key="AD_1"]');
              if (j) {
                const w = j.closest("[q\\:container]"),
                  g = j.cloneNode();
                g.setAttribute("q:nbs", ""),
                  (g.style.display = "none"),
                  w.appendChild(g),
                  (t[o] = g),
                  g.click();
              } else location.reload();
            } else if (history.scrollRestoration === "manual") {
              const p = (h = history.state) == null ? void 0 : h[$];
              m(p), (t[u] = !0);
            }
          }
        }),
        !t[r])
      ) {
        t[r] = !0;
        const h = history.pushState,
          p = history.replaceState,
          j = (w) => (
            w === null || typeof w > "u"
              ? (w = {})
              : (w == null ? void 0 : w.constructor) !== Object &&
                (w = { _data: w }),
            (w._qCityScroll = w._qCityScroll || v()),
            w
          );
        (history.pushState = (w, g, k) => (
          (w = j(w)), h.call(history, w, g, k)
        )),
          (history.replaceState = (w, g, k) => (
            (w = j(w)), p.call(history, w, g, k)
          ));
      }
      (t[l] = (h) => {
        if (t[s] || h.defaultPrevented) return;
        const p = h.target.closest("a[href]");
        if (p && !p.hasAttribute("preventdefault:click")) {
          const j = p.getAttribute("href"),
            w = new URL(location.href),
            g = new URL(j, w),
            k = g.origin === w.origin,
            z = g.pathname + g.search === w.pathname + w.search;
          if (k && z)
            if (
              (h.preventDefault(),
              g.href !== w.href && history.pushState(null, "", g),
              !g.hash)
            )
              g.href.endsWith("#")
                ? window.scrollTo(0, 0)
                : ((t[u] = !1),
                  clearTimeout(t[f]),
                  y({ ...v(), x: 0, y: 0 }),
                  location.reload());
            else {
              const _ = g.hash.slice(1),
                q = document.getElementById(_);
              q && q.scrollIntoView();
            }
        }
      }),
        (t[c] = () => {
          !t[s] && t[u] && document.visibilityState === "hidden" && y();
        }),
        (t[a] = () => {
          t[s] ||
            !t[u] ||
            (clearTimeout(t[f]),
            (t[f] = setTimeout(() => {
              y(), (t[f] = void 0);
            }, 200)));
        }),
        (t[u] = !0),
        setTimeout(() => {
          addEventListener("popstate", t[i]),
            addEventListener("scroll", t[a], { passive: !0 }),
            document.body.addEventListener("click", t[l]),
            t.navigation ||
              document.addEventListener("visibilitychange", t[c], {
                passive: !0,
              });
        }, 0);
    }
  },
  v0 = I(g0, "s_DyVc0YBIqQU"),
  y0 = () => {
    {
      const [e, t] = cn().chunkForSymbol(v0.getSymbol(), null),
        n = gi + "build/" + t;
      return `(${b0.toString()})('${n}','${e}');`;
    }
  },
  b0 = async (e, t) => {
    var n;
    if (!window._qcs && history.scrollRestoration === "manual") {
      window._qcs = !0;
      const s = (n = history.state) == null ? void 0 : n._qCityScroll;
      s && window.scrollTo(s.x, s.y);
      const r = document.currentScript;
      (await import(e))[t](r);
    }
  },
  w0 = () => {
    const e = y0();
    ao();
    const t = qs("nonce"),
      n = _t(Zo);
    if (n.value && n.value.length > 0) {
      const s = n.value.length;
      let r = null;
      for (let o = s - 1; o >= 0; o--)
        n.value[o].default &&
          (r = S(n.value[o].default, { children: r }, 1, "zl_0"));
      return S(
        R,
        {
          children: [
            r,
            d(
              "script",
              { dangerouslySetInnerHTML: e },
              { nonce: t },
              null,
              3,
              null
            ),
          ],
        },
        1,
        "zl_1"
      );
    }
    return rs;
  },
  _0 = L(I(w0, "s_e0ssiDXoeAM")),
  pr = (e) => e.pathname + e.search + e.hash,
  Oe = (e, t) => new URL(e, t.href),
  ni = (e, t) => e.origin === t.origin,
  x0 = (e, t) => e.pathname + e.search === t.pathname + t.search,
  q0 = (e, t) => e.pathname === t.pathname,
  S0 = (e, t) => e.search === t.search,
  k0 = (e, t) => {
    const n = e.href;
    if (typeof n == "string" && typeof e.target != "string" && !e.reload)
      try {
        const s = Oe(n.trim(), t.url),
          r = Oe("", t.url);
        if (ni(s, r)) return pr(s);
      } catch (s) {
        console.error(s);
      }
    else if (e.reload) return pr(Oe("", t.url));
    return null;
  },
  j0 = (e, t, n) => {
    if (e.prefetch === !0 && t) {
      const s = Oe(t, n.url),
        r = Oe("", n.url);
      if (!q0(s, r) || !S0(s, r)) return "";
    }
    return null;
  },
  z0 = (e) => e && typeof e.then == "function",
  E0 = (e, t, n, s) => {
    const r = si(),
      i = {
        head: r,
        withLocale: (l) => Zs(s, l),
        resolveValue: (l) => {
          const c = l.__id;
          if (l.__brand === "server_loader" && !(c in e.loaders))
            throw new Error(
              "You can not get the returned data of a loader that has not been executed for this request."
            );
          const a = e.loaders[c];
          if (z0(a))
            throw new Error(
              "Loaders returning a function can not be referred to in the head function."
            );
          return a;
        },
        ...t,
      };
    for (let l = n.length - 1; l >= 0; l--) {
      const c = n[l] && n[l].head;
      c &&
        (typeof c == "function"
          ? mr(
              r,
              Zs(s, () => c(i))
            )
          : typeof c == "object" && mr(r, c));
    }
    return i.head;
  },
  mr = (e, t) => {
    typeof t.title == "string" && (e.title = t.title),
      It(e.meta, t.meta),
      It(e.links, t.links),
      It(e.styles, t.styles),
      It(e.scripts, t.scripts),
      Object.assign(e.frontmatter, t.frontmatter);
  },
  It = (e, t) => {
    if (Array.isArray(t))
      for (const n of t) {
        if (typeof n.key == "string") {
          const s = e.findIndex((r) => r.key === n.key);
          if (s > -1) {
            e[s] = n;
            continue;
          }
        }
        e.push(n);
      }
  },
  si = () => ({
    title: "",
    meta: [],
    links: [],
    styles: [],
    scripts: [],
    frontmatter: {},
  });
let hr;
(function (e) {
  (e[(e.EOL = 0)] = "EOL"),
    (e[(e.OPEN_BRACKET = 91)] = "OPEN_BRACKET"),
    (e[(e.CLOSE_BRACKET = 93)] = "CLOSE_BRACKET"),
    (e[(e.DOT = 46)] = "DOT"),
    (e[(e.SLASH = 47)] = "SLASH");
})(hr || (hr = {}));
const T0 = () => _t(Xo),
  ri = () => _t(ei),
  A0 = () => _t(ti),
  I0 = () => wn(qs("qwikcity")),
  M0 = ":root{view-transition-name:none}",
  C0 = async (e, t) => {
    const [n, s, r, o] = mn(),
      {
        type: i = "link",
        forceReload: l = e === void 0,
        replaceState: c = !1,
        scroll: a = !0,
      } = typeof t == "object" ? t : { forceReload: t },
      u = r.value.dest,
      f = e === void 0 ? u : Oe(e, o.url);
    if (ni(f, u) && !(!l && x0(f, u)))
      return (
        (r.value = {
          type: i,
          dest: f,
          forceReload: l,
          replaceState: c,
          scroll: a,
        }),
        (n.value = void 0),
        (o.isNavigating = !0),
        new Promise(($) => {
          s.r = $;
        })
      );
  },
  R0 = ({ track: e }) => {
    const [t, n, s, r, o, i, l, c, a, u, f] = mn();
    async function $() {
      const [v, y] = e(() => [u.value, t.value]),
        h = qc(""),
        p = f.url,
        j = y ? "form" : v.type;
      v.replaceState;
      let w,
        g,
        k = null;
      if (
        ((w = new URL(v.dest, f.url)), (k = o.loadedRoute), (g = o.response), k)
      ) {
        const [z, _, q, T] = k,
          x = q,
          E = x[x.length - 1];
        (f.prevUrl = p),
          (f.url = w),
          (f.params = { ..._ }),
          (u.untrackedValue = { type: j, dest: w });
        const A = E0(g, f, x, h);
        (n.headings = E.headings),
          (n.menu = T),
          (s.value = wn(x)),
          (r.links = A.links),
          (r.meta = A.meta),
          (r.styles = A.styles),
          (r.scripts = A.scripts),
          (r.title = A.title),
          (r.frontmatter = A.frontmatter);
      }
    }
    return $();
  },
  L0 = (e) => {
    T1(I(M0, "s_RPDJAz33WLA"));
    const t = I0();
    if (!(t != null && t.params)) throw new Error("Missing Qwik City Env Data");
    const n = qs("url");
    if (!n) throw new Error("Missing Qwik URL Env Data");
    const s = new URL(n),
      r = At(
        { url: s, params: t.params, isNavigating: !1, prevUrl: void 0 },
        { deep: !1 }
      ),
      o = {},
      i = _1(At(t.response.loaders, { deep: !1 })),
      l = Ee({
        type: "initial",
        dest: s,
        forceReload: !1,
        replaceState: !1,
        scroll: !0,
      }),
      c = At(si),
      a = At({ headings: void 0, menu: void 0 }),
      u = Ee(),
      f = t.response.action,
      $ = f ? t.response.loaders[f] : void 0,
      m = Ee(
        $
          ? {
              id: f,
              data: t.response.formData,
              output: { result: $, status: t.response.status },
            }
          : void 0
      ),
      v = I(C0, "s_fX0bDjeJa0E", [m, o, l, r]);
    return (
      be(p0, a),
      be(Zo, u),
      be(Xo, c),
      be(ei, r),
      be(ti, v),
      be(Go, i),
      be(m0, m),
      be(h0, l),
      $c(I(R0, "s_02wMImzEAbk", [m, a, u, c, t, v, i, o, e, l, r])),
      S(Ve, null, 3, "qY_0")
    );
  },
  N0 = L(I(L0, "s_TxCFOy819ag")),
  P0 = (e) => {
    const t = A0(),
      n = ri(),
      {
        onClick$: s,
        reload: r,
        replaceState: o,
        scroll: i,
        ...l
      } = (() => e)(),
      c = Bt(() => k0({ ...l, reload: r }, n)),
      a = Bt(() => j0(e, c, n));
    (l["preventdefault:click"] = !!c), (l.href = c || e.href);
    const u = a != null ? $r(Qn("s_eBQ0vFsFKsk")) : void 0,
      f = $r(Qn("s_i1Cv0pYJNR0", [t, r, o, i]));
    return Rt(
      "a",
      {
        ...l,
        children: S(Ve, null, 3, "AD_0"),
        "data-prefetch": a,
        onClick$: [s, f],
        onFocus$: u,
        onMouseOver$: u,
        onQVisible$: u,
      },
      null,
      0,
      "AD_1"
    );
  },
  B = L(I(P0, "s_8gdLBszqbaM")),
  D0 = (e) =>
    d(
      "script",
      { nonce: P(e, "nonce") },
      { dangerouslySetInnerHTML: $0 },
      null,
      3,
      "1Z_0"
    ),
  oi = (e, ...t) => {
    const { id: n, validators: s } = O0(t, e);
    function r() {
      return _t(Go, (o) => {
        if (!(n in o))
          throw new Error(`routeLoader$ "${e.getSymbol()}" was invoked in a route where it was not declared.
    This is because the routeLoader$ was not exported in a 'layout.tsx' or 'index.tsx' file of the existing route.
    For more information check: https://qwik.builder.io/qwikcity/route-loader/`);
        return P(o, n);
      });
    }
    return (
      (r.__brand = "server_loader"),
      (r.__qrl = e),
      (r.__validators = s),
      (r.__id = n),
      Object.freeze(r),
      r
    );
  },
  O0 = (e, t) => {
    let n;
    const s = [];
    if (e.length === 1) {
      const r = e[0];
      r &&
        typeof r == "object" &&
        ("validate" in r
          ? s.push(r)
          : ((n = r.id), r.validation && s.push(...r.validation)));
    } else e.length > 1 && s.push(...e.filter((r) => !!r));
    return (
      typeof n == "string" ? (n = `id_${n}`) : (n = t.getHash()),
      { validators: s.reverse(), id: n }
    );
  },
  F0 = () => {
    const e = new Date().getFullYear();
    return S(
      R,
      {
        children: d(
          "footer",
          null,
          { class: "footer items-center p-4 bg-neutral text-neutral-content" },
          [
            d(
              "aside",
              null,
              { class: "items-center grid-flow-col" },
              [
                d(
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
                  d(
                    "path",
                    null,
                    {
                      d: "M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z",
                    },
                    null,
                    3,
                    null
                  ),
                  3,
                  null
                ),
                d(
                  "p",
                  null,
                  null,
                  ["Copyright ", e, " - All right reserved"],
                  1,
                  null
                ),
              ],
              1,
              null
            ),
            d(
              "nav",
              null,
              {
                class:
                  "grid-flow-col gap-4 md:place-self-center md:justify-self-end",
              },
              [
                S(
                  B,
                  {
                    children: "made with qwik",
                    href: "https://qwik.builder.io/",
                    target: "_blank",
                    [b]: { href: b, target: b },
                  },
                  3,
                  "yk_0"
                ),
                S(
                  B,
                  { children: "Homepage", href: "/", [b]: { href: b } },
                  3,
                  "yk_1"
                ),
                S(
                  B,
                  { children: "Blog", href: "/blog", [b]: { href: b } },
                  3,
                  "yk_2"
                ),
                S(
                  B,
                  { children: "Projects", href: "/projects", [b]: { href: b } },
                  3,
                  "yk_3"
                ),
                S(
                  B,
                  {
                    children: "Try this game",
                    href: "/button-game",
                    [b]: { href: b },
                  },
                  3,
                  "yk_4"
                ),
              ],
              1,
              null
            ),
          ],
          1,
          null
        ),
      },
      1,
      "yk_5"
    );
  },
  H0 = L(I(F0, "s_GvPhUJ5Kg9Q")),
  Q0 = (e) =>
    S(
      R,
      {
        children: d(
          "div",
          null,
          { class: "navbar bg-base-100" },
          [
            d(
              "div",
              null,
              { class: "navbar-start" },
              d(
                "div",
                null,
                { class: "dropdown" },
                [
                  d(
                    "label",
                    null,
                    { class: "btn btn-ghost btn-circle", tabIndex: 0 },
                    d(
                      "svg",
                      null,
                      {
                        class: "h-5 w-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      d(
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
                        null
                      ),
                      3,
                      null
                    ),
                    3,
                    null
                  ),
                  d(
                    "ul",
                    null,
                    {
                      class:
                        "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                      tabIndex: 0,
                    },
                    [
                      d(
                        "li",
                        null,
                        null,
                        S(
                          B,
                          { children: "Homepage", href: "/", [b]: { href: b } },
                          3,
                          "8h_0"
                        ),
                        1,
                        null
                      ),
                      d(
                        "li",
                        null,
                        null,
                        S(
                          B,
                          { children: "Blog", href: "/blog", [b]: { href: b } },
                          3,
                          "8h_1"
                        ),
                        1,
                        null
                      ),
                      d(
                        "li",
                        null,
                        null,
                        S(
                          B,
                          {
                            children: "Projects",
                            href: "/projects",
                            [b]: { href: b },
                          },
                          3,
                          "8h_2"
                        ),
                        1,
                        null
                      ),
                      d(
                        "li",
                        null,
                        null,
                        S(
                          B,
                          {
                            children: "Resume",
                            href: "/Pasquale_De_Lucia-Resume.pdf",
                            target: "_blank",
                            [b]: { href: b, target: b },
                          },
                          3,
                          "8h_3"
                        ),
                        1,
                        null
                      ),
                    ],
                    1,
                    null
                  ),
                ],
                1,
                null
              ),
              1,
              null
            ),
            d(
              "div",
              null,
              { class: "navbar-center" },
              S(
                B,
                {
                  children: "Nyruchi",
                  class: "btn btn-ghost normal-case text-xl",
                  href: "/",
                  [b]: { class: b, href: b },
                },
                3,
                "8h_4"
              ),
              1,
              null
            ),
            d(
              "div",
              null,
              { class: "navbar-end" },
              d(
                "input",
                null,
                {
                  class: "toggle",
                  id: "cat-spawn",
                  onClick$: Qn("s_8cyHPpVKZXc", [e]),
                  type: "checkbox",
                },
                null,
                3,
                null
              ),
              3,
              null
            ),
          ],
          1,
          null
        ),
      },
      1,
      "8h_5"
    ),
  B0 = L(I(Q0, "s_o4ccBuvIYCs")),
  U0 = async ({ cacheControl: e }) => {
    e({ staleWhileRevalidate: 604800, maxAge: 5 });
  },
  W0 = () => {
    ao();
    const e = Ee(!1);
    return S(
      R,
      {
        children: [
          S(B0, { show: e, [b]: { show: b } }, 3, "q8_0"),
          d(
            "main",
            null,
            null,
            [
              e.value && S(u0, null, 3, "q8_1"),
              e.value && S(f0, null, 3, "q8_2"),
              S(Ve, null, 3, "q8_3"),
            ],
            1,
            null
          ),
          S(H0, null, 3, "q8_4"),
        ],
      },
      1,
      "q8_5"
    );
  },
  V0 = L(I(W0, "s_6Y0uFrvPmQs")),
  K0 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V0, onGet: U0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  J0 =
    "/build/q-d1ab7919.webp 200w, /build/q-6100b497.webp 400w, /build/q-4e56dd94.webp 600w, /build/q-c62ddc1d.webp 800w, /build/q-56a7fb2e.webp 1200w",
  Y0 = 1200,
  G0 = 1126,
  Z0 = { srcSet: J0, width: Y0, height: G0 };
function X0(e, t, n, s) {
  return d(
    "img",
    { decoding: "async", loading: "lazy", ...e },
    Z0,
    void 0,
    3,
    t
  );
}
const e2 = () => {
    const e = new Date().getFullYear(),
      t = new Date("1/1/2015").getFullYear(),
      n = Ri.toWords(e - t);
    return (
      n.charAt(0).toUpperCase(),
      n.slice(1),
      S(
        R,
        {
          children: d(
            "div",
            null,
            { class: "hero min-h-screen bg-base-200" },
            d(
              "div",
              null,
              { class: "hero-content flex-col lg:flex-row" },
              [
                S(
                  X0,
                  {
                    alt: "Pasquale De Lucia picture",
                    class:
                      "xs:max-w-[12rem] sm:max-w-[18rem] md:max-w-sm rounded-lg shadow-2xl",
                    [b]: { alt: b, class: b },
                  },
                  3,
                  "ED_0"
                ),
                d(
                  "div",
                  null,
                  { class: "prose" },
                  [
                    d(
                      "h1",
                      null,
                      { class: "text-5xl font-bold" },
                      "Pasquale De Lucia",
                      3,
                      null
                    ),
                    d(
                      "p",
                      null,
                      null,
                      "Web Wizard and JavaScript Lover",
                      3,
                      null
                    ),
                    d(
                      "p",
                      null,
                      null,
                      "I craft digital wonders as a Full-Stack Engineer at ScuolaZoo.",
                      3,
                      null
                    ),
                    d(
                      "p",
                      null,
                      null,
                      [
                        "With a solid ",
                        n,
                        " years of web development under my belt, I'm here to make your online dreams a reality.",
                      ],
                      1,
                      null
                    ),
                    d(
                      "p",
                      null,
                      null,
                      S(
                        B,
                        {
                          children: d(
                            "button",
                            null,
                            { class: "btn btn-primary text-black" },
                            "Get resume",
                            3,
                            null
                          ),
                          href: "/Pasquale_De_Lucia-Resume.pdf",
                          target: "_blank",
                          [b]: { href: b, target: b },
                        },
                        3,
                        "ED_1"
                      ),
                      1,
                      null
                    ),
                  ],
                  1,
                  null
                ),
              ],
              1,
              null
            ),
            1,
            null
          ),
        },
        1,
        "ED_2"
      )
    );
  },
  t2 = L(I(e2, "s_Jevt7v9CDh4")),
  n2 = (e) => {
    let t = [...e.items];
    return (
      e.limit && (t = t.splice(0, e.limit)),
      S(
        R,
        {
          children: d(
            "div",
            null,
            { class: "container mx-auto" },
            d(
              "div",
              null,
              { class: "grid md:grid-cols-3 justify-items-center gap-12" },
              t.map((n) =>
                d(
                  "div",
                  null,
                  {
                    class: "card w-80 bg-base-100 shadow-xl image-full w-full",
                  },
                  [
                    n.image &&
                      d(
                        "figure",
                        null,
                        null,
                        d(
                          "img",
                          { alt: P(n, "altImage"), src: P(n, "image") },
                          { height: 300, width: 300 },
                          null,
                          3,
                          null
                        ),
                        1,
                        "tS_0"
                      ),
                    d(
                      "div",
                      null,
                      { class: "card-body" },
                      [
                        d(
                          "h2",
                          null,
                          { class: "card-title" },
                          P(n, "title"),
                          1,
                          null
                        ),
                        d(
                          "p",
                          null,
                          null,
                          [
                            P(n, "description"),
                            d("br", null, null, null, 3, null),
                            d("br", null, null, null, 3, null),
                            d(
                              "span",
                              null,
                              {
                                class:
                                  "bg-secondary text-black rounded-3xl p-1 text-xs",
                              },
                              P(n, "type"),
                              1,
                              null
                            ),
                          ],
                          1,
                          null
                        ),
                        d(
                          "div",
                          null,
                          { class: "card-actions justify-end" },
                          S(
                            B,
                            {
                              get href() {
                                return n.href;
                              },
                              children: d(
                                "button",
                                null,
                                { class: "btn btn-primary text-black" },
                                P(n, "action"),
                                1,
                                null
                              ),
                              target: "_blank",
                              [b]: { href: bt(n, "href"), target: b },
                            },
                            1,
                            "tS_1"
                          ),
                          1,
                          null
                        ),
                      ],
                      1,
                      null
                    ),
                  ],
                  1,
                  n.id
                )
              ),
              1,
              null
            ),
            1,
            null
          ),
        },
        1,
        "tS_2"
      )
    );
  },
  ii = L(I(n2, "s_Yj7Oj0dysis")),
  s2 = (e) => {
    let t = [...e.articles];
    return (
      e.limit && (t = t.splice(0, e.limit)),
      S(
        R,
        {
          children: d(
            "div",
            null,
            { class: "container mx-auto" },
            d(
              "div",
              null,
              { class: "grid md:grid-cols-2 justify-items-center gap-12" },
              t.map((n) =>
                S(
                  B,
                  {
                    get href() {
                      return n.href;
                    },
                    children: d(
                      "article",
                      null,
                      { class: "prose" },
                      [
                        d("h3", null, null, P(n, "title"), 1, null),
                        d(
                          "p",
                          null,
                          { class: "flex items-center gap-2" },
                          [
                            P(n, "date"),
                            " ",
                            d(
                              "span",
                              null,
                              {
                                class:
                                  "bg-secondary text-black p-1 text-xs rounded",
                              },
                              P(n, "lang"),
                              1,
                              null
                            ),
                          ],
                          1,
                          null
                        ),
                        d("p", null, null, P(n, "description"), 1, null),
                      ],
                      1,
                      null
                    ),
                    target: "_blank",
                    [b]: { href: bt(n, "href"), target: b },
                  },
                  1,
                  n.id
                )
              ),
              1,
              null
            ),
            1,
            null
          ),
        },
        1,
        "VS_0"
      )
    );
  },
  li = L(I(s2, "s_aHaxQW3gUTM")),
  r2 = (e) =>
    S(
      R,
      {
        children: d(
          "div",
          null,
          { class: "container mx-auto w-full h-full" },
          d(
            "div",
            null,
            { class: "relative wrap overflow-hidden p-10 h-full" },
            [
              d(
                "div",
                null,
                {
                  class:
                    "border-2-2 border-secondary absolute h-full border left-5 md:left-1/2",
                  style: "border-radius: 1%;",
                },
                null,
                3,
                null
              ),
              e.items.map((t, n) =>
                n % 2 === 0
                  ? d(
                      "div",
                      null,
                      {
                        class:
                          "mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline",
                      },
                      [
                        d(
                          "div",
                          null,
                          { class: "order-1 w-0 md:w-5/12" },
                          null,
                          3,
                          null
                        ),
                        d(
                          "div",
                          null,
                          {
                            class:
                              "order-1 w-full md:w-5/12 px-1 py-4 text-left md:text-right",
                          },
                          [
                            d(
                              "p",
                              null,
                              { class: "mb-3 text-base text-secondary" },
                              P(t, "startDate"),
                              1,
                              null
                            ),
                            d(
                              "h4",
                              null,
                              { class: "mb-3 font-bold text-lg md:text-2xl" },
                              P(t, "title"),
                              1,
                              null
                            ),
                            d(
                              "p",
                              null,
                              { class: "mb-3 font-bold text-md md:text-xl" },
                              P(t, "role"),
                              1,
                              null
                            ),
                            d(
                              "p",
                              null,
                              {
                                class:
                                  "text-sm md:text-base leading-snug text-gray-50 text-opacity-100",
                              },
                              P(t, "description"),
                              1,
                              null
                            ),
                          ],
                          1,
                          null
                        ),
                      ],
                      1,
                      t.id
                    )
                  : d(
                      "div",
                      null,
                      {
                        class:
                          "mb-8 flex justify-between items-center w-full right-timeline",
                      },
                      [
                        d(
                          "div",
                          null,
                          { class: "order-1 w-0 md:w-5/12" },
                          null,
                          3,
                          null
                        ),
                        d(
                          "div",
                          null,
                          {
                            class:
                              "order-1  w-full md:w-5/12 px-1 py-4 text-left",
                          },
                          [
                            d(
                              "p",
                              null,
                              { class: "mb-3 text-base text-secondary" },
                              P(t, "startDate"),
                              1,
                              null
                            ),
                            d(
                              "h4",
                              null,
                              { class: "mb-3 font-bold text-lg md:text-2xl" },
                              P(t, "title"),
                              1,
                              null
                            ),
                            d(
                              "p",
                              null,
                              { class: "mb-3 font-bold text-md md:text-xl" },
                              P(t, "role"),
                              1,
                              null
                            ),
                            d(
                              "p",
                              null,
                              {
                                class:
                                  "text-sm md:text-base leading-snug text-gray-50 text-opacity-100",
                              },
                              P(t, "description"),
                              1,
                              null
                            ),
                          ],
                          1,
                          null
                        ),
                      ],
                      1,
                      t.id
                    )
              ),
            ],
            1,
            null
          ),
          1,
          null
        ),
      },
      1,
      "VS_0"
    ),
  ci = L(I(r2, "s_sZIPqDBaEpc")),
  o2 = "_container_txf6w_1",
  i2 = { container: o2 },
  l2 = (e) =>
    S(
      R,
      {
        children: d(
          "div",
          null,
          { class: "container mx-auto " + i2.container },
          [
            d(
              "h4",
              null,
              { class: "text-center mb-4 text-xl font-bold" },
              je((t) => t.title, [e], "p0.title"),
              3,
              null
            ),
            d(
              "div",
              null,
              { class: "flex flex-wrap justify-center gap-12" },
              e.stacks.map((t) =>
                S(
                  B,
                  {
                    get href() {
                      return t.href;
                    },
                    children: d(
                      "div",
                      { dangerouslySetInnerHTML: P(t, "svg") },
                      null,
                      null,
                      3,
                      null
                    ),
                    class: "w-full max-w-[3rem] min-w-[2rem]",
                    target: "_blank",
                    [b]: { class: b, href: bt(t, "href"), target: b },
                  },
                  1,
                  t.id
                )
              ),
              1,
              null
            ),
          ],
          1,
          null
        ),
      },
      1,
      "uZ_0"
    ),
  Fe = L(I(l2, "s_o91wC8IGdho")),
  c2 = "_icon_1wjrd_1",
  a2 = { icon: c2 },
  u2 = (e) =>
    S(
      R,
      {
        children: d(
          "ul",
          null,
          null,
          e.links.map((t) =>
            d(
              "li",
              null,
              { class: "mb-4" },
              S(
                B,
                {
                  class:
                    "relative transition duration-200 font-bold bg-primary border-primary border-2 hover:bg-transparent hover:text-primary py-4 w-100 block text-center text-neutral rounded-lg pl-12 md:px-12",
                  get href() {
                    return t.url;
                  },
                  children: [
                    d(
                      "span",
                      { dangerouslySetInnerHTML: P(t, "svg") },
                      { class: a2.icon + " p-2" },
                      null,
                      3,
                      null
                    ),
                    d("span", null, null, P(t, "title"), 1, null),
                  ],
                  rel: "noopener",
                  target: "_blank",
                  [b]: { class: b, href: bt(t, "url"), rel: b, target: b },
                },
                1,
                "YJ_0"
              ),
              1,
              t.id
            )
          ),
          1,
          null
        ),
      },
      1,
      "YJ_1"
    ),
  ai = L(I(u2, "s_x0jeNTb2iQc")),
  d2 = [
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
  f2 = [
    {
      id: 1,
      startDate: "Jan 2022",
      endDate: "Current",
      title: "ScuolaZoo",
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
      title: "Semantyca",
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
      title: "Botsociety",
      description: `I started to did some new features to the existings web products and bug fixing. 
      After showing my potential to the team, I was included in the refactoring of all Botsociety ecosystem.`,
      slug: "",
      role: "Full-stack JavaScript developer",
    },
    {
      id: 4,
      startDate: "Jun 2017",
      endDate: "Jul 2018",
      title: "MainStreaming",
      description: `I created a library that allows customers to use a full customizable video editor using pure javascript and
    developed the MainStreaming backoffice with Angular framework`,
      slug: "",
      role: "Full-stack developer",
    },
    {
      id: 5,
      startDate: "Feb 2016",
      endDate: "Jun 2017",
      title: "Zinformatica",
      description: `After demonstrating my aptitude for development, a tech lead selected me to initiate and lead a new AngularJS 
    project, this product allowed our client to drive sales to new heights.`,
      slug: "",
      role: "Full-stack developer",
    },
  ],
  ui = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
  $2 = [
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
  p2 = [
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
  m2 = [
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
  ];
function di(e) {
  switch (!0) {
    case e.includes("ita"):
      return "ITA";
    default:
      return "ENG";
  }
}
const h2 = async () =>
    (
      await (await fetch("https://dev.to/api/articles?username=nyruchi")).json()
    ).map((n) => ({
      id: n.id,
      href: n.url,
      title: n.title,
      description: n.description,
      date: gr(new Date(n.published_timestamp), "PP"),
      lang: di(n.tag_list),
    })),
  fi = oi(I(h2, "s_7CjMt5KkVcg")),
  g2 = () => {
    const e = fi();
    return S(
      R,
      {
        children: [
          d("section", null, null, S(t2, null, 3, "eZ_0"), 1, null),
          d(
            "section",
            null,
            { class: "title-section text-center" },
            d("h2", null, null, "Recent projects", 3, null),
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "inner-section" },
            S(
              ii,
              { items: ui, limit: 3, [b]: { items: b, limit: b } },
              3,
              "eZ_1"
            ),
            1,
            null
          ),
          d(
            "section",
            null,
            { class: "title-section text-center" },
            d("h2", null, null, "Recent articles", 3, null),
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "inner-section" },
            S(
              li,
              {
                get articles() {
                  return e.value;
                },
                limit: 4,
                [b]: {
                  articles: je((t) => t.value, [e], "p0.value"),
                  limit: b,
                },
              },
              3,
              "eZ_2"
            ),
            1,
            null
          ),
          d(
            "section",
            null,
            { class: "title-section text-center" },
            [
              d("h2", null, null, "History", 3, null),
              d("h3", null, null, "All my jobs", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "lg:w-5/6 sticky" },
            S(ci, { items: f2, [b]: { items: b } }, 3, "eZ_3"),
            1,
            null
          ),
          d(
            "section",
            null,
            { class: "title-section text-center" },
            [
              d("h2", null, null, "Stack", 3, null),
              d("h3", null, null, "My tecnology stack", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            null,
            S(
              Fe,
              { stacks: $2, title: "Front end", [b]: { stacks: b, title: b } },
              3,
              "eZ_4"
            ),
            1,
            null
          ),
          d(
            "section",
            null,
            null,
            S(
              Fe,
              { stacks: p2, title: "Back end", [b]: { stacks: b, title: b } },
              3,
              "eZ_5"
            ),
            1,
            null
          ),
          d(
            "section",
            null,
            null,
            S(
              Fe,
              { stacks: m2, title: "Tools", [b]: { stacks: b, title: b } },
              3,
              "eZ_6"
            ),
            1,
            null
          ),
          d(
            "section",
            null,
            { class: "title-section text-center" },
            [
              d("h2", null, null, "Links", 3, null),
              d("h3", null, null, "Some of my socials", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "link-section" },
            S(ai, { links: d2, [b]: { links: b } }, 3, "eZ_7"),
            1,
            null
          ),
        ],
      },
      1,
      "eZ_8"
    );
  },
  v2 = L(I(g2, "s_tstUEhxLUWc")),
  y2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  b2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getLang: di,
        default: v2,
        head: y2,
        useArticles: fi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  w2 = "/build/q-7849080f.webp 200w, /build/q-29b1c058.webp 400w",
  _2 = 400,
  x2 = 225,
  q2 = { srcSet: w2, width: _2, height: x2 };
function $i(e, t, n, s) {
  return d(
    "img",
    { decoding: "async", loading: "lazy", ...e },
    q2,
    void 0,
    3,
    t
  );
}
const S2 = () =>
    S(
      R,
      {
        children: d(
          "section",
          null,
          { class: "inner-section" },
          d(
            "div",
            null,
            { class: "flex flex-col gap-12 items-center justify-center" },
            [
              d("h1", null, { class: "mb-6" }, "OPSS!", 3, null),
              d(
                "p",
                null,
                null,
                [
                  "Uh-oh! It looks like you've wandered into the cosmic void of cyberspace. Our binary aliens are throwing a rave just around the corner. Hurry back before they invite you to dance in zeros and ones! Alternatively, try our game at this",
                  " ",
                  S(
                    B,
                    {
                      children: "link",
                      href: "../button-game",
                      [b]: { href: b },
                    },
                    3,
                    "OH_0"
                  ),
                  ".",
                ],
                1,
                null
              ),
              S($i, { alt: "Binary aliens", [b]: { alt: b } }, 3, "OH_1"),
            ],
            1,
            null
          ),
          1,
          null
        ),
      },
      1,
      "OH_2"
    ),
  k2 = L(I(S2, "s_bavVtvgbxHE")),
  j2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  z2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: k2, head: j2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function pi(e) {
  switch (!0) {
    case e.includes("ita"):
      return "ITA";
    default:
      return "ENG";
  }
}
const E2 = async () =>
    (
      await (await fetch("https://dev.to/api/articles?username=nyruchi")).json()
    ).map((n) => ({
      id: n.id,
      href: n.url,
      title: n.title,
      description: n.description,
      date: gr(new Date(n.published_timestamp), "PP"),
      lang: pi(n.tag_list),
    })),
  mi = oi(I(E2, "s_M0p6wqFFl3I")),
  T2 = () => {
    const e = mi();
    return S(
      R,
      {
        children: [
          d(
            "section",
            null,
            { class: "text-center" },
            [
              d("h1", null, null, "Blog", 3, null),
              d("h3", null, null, "Some of my articles", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "inner-section" },
            S(
              li,
              {
                get articles() {
                  return e.value;
                },
                [b]: { articles: je((t) => t.value, [e], "p0.value") },
              },
              3,
              "TQ_0"
            ),
            1,
            null
          ),
        ],
      },
      1,
      "TQ_1"
    );
  },
  A2 = L(I(T2, "s_Uzl3gaAclJA")),
  I2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  M2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getLang: pi,
        default: A2,
        head: I2,
        useArticles: mi,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function en(e) {
  let t = 1;
  for (let n = 0; n < e; n++) t *= (100 - n) / 100;
  return t;
}
function hi(e) {
  return Math.floor(Math.random() * e);
}
const C2 = () => {
    const [e, t, n] = mn();
    hi(100) <= t.value
      ? (e.value++, t.value--)
      : ((e.value = 0), (t.value = 100)),
      (n.value = en(t.value));
  },
  R2 = () => {
    const e = Ee(100),
      t = en(100),
      n = Ee(en(e.value)),
      s = Ee(0),
      r = I(C2, "s_SqNyGWM7k0k", [s, e, n]);
    return S(
      R,
      {
        children: [
          d(
            "section",
            null,
            { class: "text-center" },
            [
              d("h1", null, { class: "mb-2" }, "Buttom game", 3, null),
              d(
                "h3",
                null,
                null,
                "This game requires no skills but only LUCK. If you win at this game, think to try the lottery!",
                3,
                null
              ),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "link-section" },
            d(
              "div",
              null,
              { class: "grid grid-cols-1 gap-6 justify-items-center" },
              [
                d(
                  "p",
                  null,
                  null,
                  [
                    "Percentege of success in this level: ",
                    je((o) => o.value, [e], "p0.value"),
                    "%",
                  ],
                  3,
                  null
                ),
                d(
                  "p",
                  null,
                  null,
                  [
                    "Percentege of win from now: ",
                    je((o) => o.value, [n], "p0.value"),
                    "%",
                  ],
                  3,
                  null
                ),
                d("p", null, null, ["Percentege of win ", t, "%"], 1, null),
                d(
                  "div",
                  null,
                  {
                    class:
                      "button w-48 h-48 md:w-72 md:h-72 bg-red-500 rounded-full cursor-pointer select-none active:translate-y-4  active:[box-shadow:0_0px_0_0_#8a0909,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_16px_0_0_#8a0909,0_13px_0_0_#1b70f841] border-[5px] border-red-400 ",
                    onClick$: r,
                  },
                  d(
                    "span",
                    null,
                    {
                      class:
                        "flex flex-col justify-center items-center h-full text-white font-bold text-lg ",
                    },
                    "Press this button",
                    3,
                    null
                  ),
                  3,
                  null
                ),
                d(
                  "p",
                  null,
                  null,
                  ["You are at level ", je((o) => o.value, [s], "p0.value")],
                  3,
                  null
                ),
              ],
              1,
              null
            ),
            1,
            null
          ),
        ],
      },
      1,
      "CD_0"
    );
  },
  L2 = L(I(R2, "s_lVhXlSc0AIU")),
  N2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  P2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        _auto_getRandomInt: hi,
        _auto_probabilityOfSuccess: en,
        default: L2,
        head: N2,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  D2 = () =>
    S(
      R,
      {
        children: [
          d(
            "section",
            null,
            { class: "text-center" },
            [
              d("h1", null, null, "History", 3, null),
              d("h3", null, null, "All my jobs", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "lg:w-2/3 sticky" },
            S(
              ci,
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
              "u8_0"
            ),
            1,
            null
          ),
        ],
      },
      1,
      "u8_1"
    ),
  O2 = L(I(D2, "s_vNaJw7V9CHY")),
  F2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: O2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  H2 = () =>
    S(
      R,
      {
        children: [
          d(
            "section",
            null,
            { class: "text-center" },
            [
              d("h1", null, null, "Links", 3, null),
              d("h3", null, null, "Some of my socials", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "link-section" },
            S(
              ai,
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
              "l7_0"
            ),
            1,
            null
          ),
        ],
      },
      1,
      "l7_1"
    ),
  Q2 = L(I(H2, "s_KGOeb6p3oY8")),
  B2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  U2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Q2, head: B2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  W2 = () =>
    S(
      R,
      {
        children: [
          d(
            "section",
            null,
            { class: "text-center" },
            [
              d("h1", null, null, "Projects", 3, null),
              d("h3", null, null, "Some of my projects", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            { class: "5/6 lg:w-5/6" },
            S(ii, { items: ui, [b]: { items: b } }, 3, "Mg_0"),
            1,
            null
          ),
        ],
      },
      1,
      "Mg_1"
    ),
  V2 = L(I(W2, "s_yMerZA5h0Vw")),
  K2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  J2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: V2, head: K2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Y2 = () => {
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
    return S(
      R,
      {
        children: [
          d(
            "section",
            null,
            { class: "text-center" },
            [
              d("h1", null, null, "Stack", 3, null),
              d("h3", null, null, "My tecnology stack", 3, null),
            ],
            3,
            null
          ),
          d(
            "section",
            null,
            null,
            S(
              Fe,
              { stacks: e, title: "Front end", [b]: { title: b } },
              3,
              "R0_0"
            ),
            1,
            null
          ),
          d(
            "section",
            null,
            null,
            S(
              Fe,
              { stacks: t, title: "Back end", [b]: { title: b } },
              3,
              "R0_1"
            ),
            1,
            null
          ),
          d(
            "section",
            null,
            null,
            S(Fe, { stacks: n, title: "Tools", [b]: { title: b } }, 3, "R0_2"),
            1,
            null
          ),
        ],
      },
      1,
      "R0_3"
    );
  },
  G2 = L(I(Y2, "s_puLNVv3I7Kc")),
  Z2 = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  X2 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: G2, head: Z2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  eu = () =>
    S(
      R,
      {
        children: d(
          "section",
          null,
          { class: "inner-section" },
          d(
            "div",
            null,
            { class: "flex flex-col gap-12 items-center justify-center" },
            [
              d("h1", null, { class: "mb-6" }, "OPSS!", 3, null),
              d(
                "p",
                null,
                null,
                [
                  "Uh-oh! It looks like you've wandered into the cosmic void of cyberspace. Our binary aliens are throwing a rave just around the corner. Hurry back before they invite you to dance in zeros and ones! Alternatively, try our game at this",
                  " ",
                  S(
                    B,
                    {
                      children: "link",
                      href: "../button-game",
                      [b]: { href: b },
                    },
                    3,
                    "r9_0"
                  ),
                  ".",
                ],
                1,
                null
              ),
              S($i, { alt: "Binary aliens", [b]: { alt: b } }, 3, "r9_1"),
            ],
            1,
            null
          ),
          1,
          null
        ),
      },
      1,
      "r9_2"
    ),
  tu = L(I(eu, "s_FMKqF5QZfNY")),
  nu = {
    title: "Pasquale De Lucia - Full-stack engineer",
    meta: [{ name: "description", content: "Qwik site description" }],
  },
  su = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tu, head: nu },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ru = [],
  pe = () => K0,
  ou = [
    ["/", [pe, () => b2], "/", ["q-5338ca30.js", "q-33f7ca00.js"]],
    [
      "404.html",
      [pe, () => z2],
      "/404.html",
      ["q-5338ca30.js", "q-83e87ecb.js"],
    ],
    ["blog/", [pe, () => M2], "/blog/", ["q-5338ca30.js", "q-972000b7.js"]],
    [
      "button-game/",
      [pe, () => P2],
      "/button-game/",
      ["q-5338ca30.js", "q-e92d1254.js"],
    ],
    [
      "history/",
      [pe, () => F2],
      "/history/",
      ["q-5338ca30.js", "q-ca619f3f.js"],
    ],
    ["links/", [pe, () => U2], "/links/", ["q-5338ca30.js", "q-1a8234ec.js"]],
    [
      "projects/",
      [pe, () => J2],
      "/projects/",
      ["q-5338ca30.js", "q-719af83b.js"],
    ],
    ["stack/", [pe, () => X2], "/stack/", ["q-5338ca30.js", "q-d491d4a7.js"]],
    ["test/", [pe, () => su], "/test/", ["q-5338ca30.js", "q-5e2b9470.js"]],
  ],
  iu = [],
  lu = !0,
  gi = "/",
  cu = !0,
  au = {
    routes: ou,
    serverPlugins: ru,
    menus: iu,
    trailingSlash: lu,
    basePathname: gi,
    cacheModules: cu,
  },
  uu = {
    manifestHash: "wdhqjr",
    symbols: {
      s_02wMImzEAbk: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCityProvider_component_useTask",
        canonicalFilename: "s_02wmimzeabk",
        hash: "02wMImzEAbk",
        ctxKind: "function",
        ctxName: "useTask$",
        captures: !0,
        parent: "s_TxCFOy819ag",
        loc: [26295, 35258],
      },
      s_0DhRUxBQU40: {
        origin: "components/cat/cat-walk.tsx",
        displayName: "CatWalk_component",
        canonicalFilename: "s_0dhruxbqu40",
        hash: "0DhRUxBQU40",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [83, 1869],
      },
      s_2Fq8wIUpq5I: {
        origin: "components/router-head/router-head.tsx",
        displayName: "RouterHead_component",
        canonicalFilename: "s_2fq8wiupq5i",
        hash: "2Fq8wIUpq5I",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [243, 854],
      },
      s_6Y0uFrvPmQs: {
        origin: "routes/layout.tsx",
        displayName: "layout_component",
        canonicalFilename: "s_6y0ufrvpmqs",
        hash: "6Y0uFrvPmQs",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [803, 1110],
      },
      s_8gdLBszqbaM: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component",
        canonicalFilename: "s_8gdlbszqbam",
        hash: "8gdLBszqbaM",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [37211, 38862],
      },
      s_FMKqF5QZfNY: {
        origin: "routes/test/index.tsx",
        displayName: "test_component",
        canonicalFilename: "s_fmkqf5qzfny",
        hash: "FMKqF5QZfNY",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [199, 888],
      },
      s_GvPhUJ5Kg9Q: {
        origin: "components/footer/footer.tsx",
        displayName: "Footer_component",
        canonicalFilename: "s_gvphuj5kg9q",
        hash: "GvPhUJ5Kg9Q",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [128, 1933],
      },
      s_Jevt7v9CDh4: {
        origin: "components/hero/hero.tsx",
        displayName: "Hero_component",
        canonicalFilename: "s_jevt7v9cdh4",
        hash: "Jevt7v9CDh4",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [223, 1468],
      },
      s_KGOeb6p3oY8: {
        origin: "routes/links/index.tsx",
        displayName: "links_component",
        canonicalFilename: "s_kgoeb6p3oy8",
        hash: "KGOeb6p3oY8",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [193, 4504],
      },
      s_Nk9PlpjQm9Y: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "GetForm_component",
        canonicalFilename: "s_nk9plpjqm9y",
        hash: "Nk9PlpjQm9Y",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [48978, 50329],
      },
      s_TxCFOy819ag: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCityProvider_component",
        canonicalFilename: "s_txcfoy819ag",
        hash: "TxCFOy819ag",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [23025, 35545],
      },
      s_Uzl3gaAclJA: {
        origin: "routes/blog/index.tsx",
        displayName: "blog_component",
        canonicalFilename: "s_uzl3gaaclja",
        hash: "Uzl3gaAclJA",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [829, 1119],
      },
      s_WmYC5H00wtI: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCityMockProvider_component",
        canonicalFilename: "s_wmyc5h00wti",
        hash: "WmYC5H00wtI",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [35829, 37092],
      },
      s_Yj7Oj0dysis: {
        origin: "components/cards/cards.tsx",
        displayName: "Cards_component",
        canonicalFilename: "s_yj7oj0dysis",
        hash: "Yj7Oj0dysis",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [201, 1694],
      },
      s_aHaxQW3gUTM: {
        origin: "components/articles/articles.tsx",
        displayName: "Articles_component",
        canonicalFilename: "s_ahaxqw3gutm",
        hash: "aHaxQW3gUTM",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [207, 1002],
      },
      s_bavVtvgbxHE: {
        origin: "routes/404.tsx",
        displayName: "_404_component",
        canonicalFilename: "s_bavvtvgbxhe",
        hash: "bavVtvgbxHE",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [199, 888],
      },
      s_e0ssiDXoeAM: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "RouterOutlet_component",
        canonicalFilename: "s_e0ssidxoeam",
        hash: "e0ssiDXoeAM",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [7931, 8645],
      },
      s_eXD0K9bzzlo: {
        origin: "root.tsx",
        displayName: "root_component",
        canonicalFilename: "s_exd0k9bzzlo",
        hash: "eXD0K9bzzlo",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [268, 793],
      },
      s_k9rs7QcCFAU: {
        origin: "components/cat/cat.tsx",
        displayName: "Cat_component",
        canonicalFilename: "s_k9rs7qccfau",
        hash: "k9rs7QcCFAU",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [79, 526],
      },
      s_lVhXlSc0AIU: {
        origin: "routes/button-game/index.tsx",
        displayName: "button_game_component",
        canonicalFilename: "s_lvhxlsc0aiu",
        hash: "lVhXlSc0AIU",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [423, 2522],
      },
      s_o4ccBuvIYCs: {
        origin: "components/header/header.tsx",
        displayName: "Header_component",
        canonicalFilename: "s_o4ccbuviycs",
        hash: "o4ccBuvIYCs",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [196, 3179],
      },
      s_o91wC8IGdho: {
        origin: "components/stacks/stacks.tsx",
        displayName: "Stacks_component",
        canonicalFilename: "s_o91wc8igdho",
        hash: "o91wC8IGdho",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [245, 810],
      },
      s_puLNVv3I7Kc: {
        origin: "routes/stack/index.tsx",
        displayName: "stack_component",
        canonicalFilename: "s_pulnvv3i7kc",
        hash: "puLNVv3I7Kc",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [187, 25335],
      },
      s_sZIPqDBaEpc: {
        origin: "components/timeline/timeline.tsx",
        displayName: "Timeline_component",
        canonicalFilename: "s_szipqdbaepc",
        hash: "sZIPqDBaEpc",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [141, 2471],
      },
      s_tstUEhxLUWc: {
        origin: "routes/index.tsx",
        displayName: "routes_component",
        canonicalFilename: "s_tstuehxluwc",
        hash: "tstUEhxLUWc",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [1297, 2813],
      },
      s_vNaJw7V9CHY: {
        origin: "routes/history/index.tsx",
        displayName: "history_component",
        canonicalFilename: "s_vnajw7v9chy",
        hash: "vNaJw7V9CHY",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [134, 2975],
      },
      s_x0jeNTb2iQc: {
        origin: "components/linkItem/linkItem.tsx",
        displayName: "LinkItem_component",
        canonicalFilename: "s_x0jentb2iqc",
        hash: "x0jeNTb2iQc",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [231, 934],
      },
      s_yMerZA5h0Vw: {
        origin: "routes/projects/index.tsx",
        displayName: "projects_component",
        canonicalFilename: "s_ymerza5h0vw",
        hash: "yMerZA5h0Vw",
        ctxKind: "function",
        ctxName: "component$",
        captures: !1,
        parent: null,
        loc: [234, 480],
      },
      s_RPDJAz33WLA: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCityProvider_component_useStyles",
        canonicalFilename: "s_rpdjaz33wla",
        hash: "RPDJAz33WLA",
        ctxKind: "function",
        ctxName: "useStyles$",
        captures: !1,
        parent: "s_TxCFOy819ag",
        loc: [23080, 23114],
      },
      s_A5bZC7WO00A: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "routeActionQrl_action_submit",
        canonicalFilename: "s_a5bzc7wo00a",
        hash: "A5bZC7WO00A",
        ctxKind: "function",
        ctxName: "submit",
        captures: !0,
        parent: null,
        loc: [40230, 41864],
      },
      s_DyVc0YBIqQU: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "spa_init",
        canonicalFilename: "s_dyvc0ybiqqu",
        hash: "DyVc0YBIqQU",
        ctxKind: "function",
        ctxName: "spaInit",
        captures: !1,
        parent: null,
        loc: [1391, 6872],
      },
      s_wOIPfiQ04l4: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "serverQrl_stuff",
        canonicalFilename: "s_woipfiq04l4",
        hash: "wOIPfiQ04l4",
        ctxKind: "function",
        ctxName: "stuff",
        captures: !0,
        parent: null,
        loc: [44878, 46864],
      },
      s_8cyHPpVKZXc: {
        origin: "components/header/header.tsx",
        displayName: "Header_component__Fragment_div_div_input_onClick",
        canonicalFilename: "s_8cyhppvkzxc",
        hash: "8cyHPpVKZXc",
        ctxKind: "eventHandler",
        ctxName: "onClick$",
        captures: !0,
        parent: "s_o4ccBuvIYCs",
        loc: [2159, 2203],
      },
      s_BUbtvTyvVRE: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCityMockProvider_component_goto",
        canonicalFilename: "s_bubtvtyvvre",
        hash: "BUbtvTyvVRE",
        ctxKind: "function",
        ctxName: "goto",
        captures: !1,
        parent: "s_WmYC5H00wtI",
        loc: [36230, 36291],
      },
      s_SqNyGWM7k0k: {
        origin: "routes/button-game/index.tsx",
        displayName: "button_game_component_tryPassLevel",
        canonicalFilename: "s_sqnygwm7k0k",
        hash: "SqNyGWM7k0k",
        ctxKind: "function",
        ctxName: "$",
        captures: !0,
        parent: "s_lVhXlSc0AIU",
        loc: [887, 1239],
      },
      s_eBQ0vFsFKsk: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_onPrefetch_event",
        canonicalFilename: "s_ebq0vfsfksk",
        hash: "eBQ0vFsFKsk",
        ctxKind: "function",
        ctxName: "event$",
        captures: !1,
        parent: "s_8gdLBszqbaM",
        loc: [37738, 37801],
      },
      s_fX0bDjeJa0E: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "QwikCityProvider_component_goto",
        canonicalFilename: "s_fx0bdjeja0e",
        hash: "fX0bDjeJa0E",
        ctxKind: "function",
        ctxName: "goto",
        captures: !0,
        parent: "s_TxCFOy819ag",
        loc: [24364, 25683],
      },
      s_i1Cv0pYJNR0: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "Link_component_handleClick_event",
        canonicalFilename: "s_i1cv0pyjnr0",
        hash: "i1Cv0pYJNR0",
        ctxKind: "function",
        ctxName: "event$",
        captures: !0,
        parent: "s_8gdLBszqbaM",
        loc: [37919, 38434],
      },
      s_p9MSze0ojs4: {
        origin: "../node_modules/@builder.io/qwik-city/index.qwik.mjs",
        displayName: "GetForm_component_form_onSubmit",
        canonicalFilename: "s_p9msze0ojs4",
        hash: "p9MSze0ojs4",
        ctxKind: "function",
        ctxName: "_jsxS",
        captures: !0,
        parent: "s_Nk9PlpjQm9Y",
        loc: [49285, 49982],
      },
    },
    mapping: {
      s_02wMImzEAbk: "q-90d00d47.js",
      s_0DhRUxBQU40: "q-0176fe1e.js",
      s_2Fq8wIUpq5I: "q-5056083e.js",
      s_6Y0uFrvPmQs: "q-eca77845.js",
      s_8gdLBszqbaM: "q-d620e7cb.js",
      s_FMKqF5QZfNY: "q-854f0929.js",
      s_GvPhUJ5Kg9Q: "q-23fe1614.js",
      s_Jevt7v9CDh4: "q-14732642.js",
      s_KGOeb6p3oY8: "q-6bed3fd5.js",
      s_Nk9PlpjQm9Y: "q-efd4c604.js",
      s_TxCFOy819ag: "q-90d00d47.js",
      s_Uzl3gaAclJA: "q-8b6c5ca4.js",
      s_WmYC5H00wtI: "q-dea6f352.js",
      s_Yj7Oj0dysis: "q-53b4dfc6.js",
      s_aHaxQW3gUTM: "q-d550abcf.js",
      s_bavVtvgbxHE: "q-337ed0a9.js",
      s_e0ssiDXoeAM: "q-575f11cc.js",
      s_eXD0K9bzzlo: "q-fd60f041.js",
      s_k9rs7QcCFAU: "q-fd1d9231.js",
      s_lVhXlSc0AIU: "q-8fcf6f2d.js",
      s_o4ccBuvIYCs: "q-cea7d206.js",
      s_o91wC8IGdho: "q-7c0cb626.js",
      s_puLNVv3I7Kc: "q-46e958b7.js",
      s_sZIPqDBaEpc: "q-b96c0b08.js",
      s_tstUEhxLUWc: "q-1163b81d.js",
      s_vNaJw7V9CHY: "q-f73035d6.js",
      s_x0jeNTb2iQc: "q-ee5e2f38.js",
      s_yMerZA5h0Vw: "q-eff16619.js",
      s_RPDJAz33WLA: "q-90d00d47.js",
      s_A5bZC7WO00A: "q-60c54ed8.js",
      s_DyVc0YBIqQU: "q-663033b0.js",
      s_wOIPfiQ04l4: "q-b7fda301.js",
      s_8cyHPpVKZXc: "q-cea7d206.js",
      s_BUbtvTyvVRE: "q-dea6f352.js",
      s_SqNyGWM7k0k: "q-8fcf6f2d.js",
      s_eBQ0vFsFKsk: "q-ba7f3a72.js",
      s_fX0bDjeJa0E: "q-90d00d47.js",
      s_i1Cv0pYJNR0: "q-d620e7cb.js",
      s_p9MSze0ojs4: "q-efd4c604.js",
    },
    bundles: {
      "q-0176fe1e.js": {
        size: 1837,
        imports: ["q-df2d8f23.js"],
        origins: ["src/entry_CatWalk.js", "src/s_0dhruxbqu40.js"],
        symbols: ["s_0DhRUxBQU40"],
      },
      "q-1163b81d.js": {
        size: 23113,
        imports: [
          "q-33f7ca00.js",
          "q-588805f5.js",
          "q-735c49c1.js",
          "q-7b7d3d2b.js",
          "q-8d7a9869.js",
          "q-df2d8f23.js",
          "q-eeec3fbf.js",
          "q-fe3ac8bd.js",
        ],
        dynamicImports: ["q-14732642.js"],
        origins: [
          "src/components/hero/hero.tsx",
          "src/entry_routes.js",
          "src/repository/links.ts",
          "src/repository/stack.ts",
          "src/repository/work.ts",
          "src/s_tstuehxluwc.js",
        ],
        symbols: ["s_tstUEhxLUWc"],
      },
      "q-14732642.js": {
        size: 4296,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: [
          "node_modules/number-to-words/numberToWords.min.js",
          "src/entry_Hero.js",
          "src/media/Pako-cropped.jpeg?jsx",
          "src/s_jevt7v9cdh4.js",
        ],
        symbols: ["s_Jevt7v9CDh4"],
      },
      "q-1a8234ec.js": {
        size: 329,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-6bed3fd5.js"],
        origins: ["src/routes/links/index.tsx"],
      },
      "q-23fe1614.js": {
        size: 1878,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: ["src/entry_Footer.js", "src/s_gvphuj5kg9q.js"],
        symbols: ["s_GvPhUJ5Kg9Q"],
      },
      "q-29dd787e.js": {
        size: 125,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-8ea06850.js"],
        origins: ["@qwik-city-entries"],
      },
      "q-337ed0a9.js": {
        size: 752,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js", "q-f16131da.js"],
        origins: ["src/entry_404.js", "src/s_bavvtvgbxhe.js"],
        symbols: ["s_bavVtvgbxHE"],
      },
      "q-33f7ca00.js": {
        size: 523,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        dynamicImports: ["q-1163b81d.js"],
        origins: ["src/routes/index.tsx"],
      },
      "q-46e958b7.js": {
        size: 24705,
        imports: ["q-df2d8f23.js", "q-eeec3fbf.js"],
        origins: ["src/entry_stack.js", "src/s_pulnvv3i7kc.js"],
        symbols: ["s_puLNVv3I7Kc"],
      },
      "q-5056083e.js": {
        size: 671,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: ["src/entry_RouterHead.js", "src/s_2fq8wiupq5i.js"],
        symbols: ["s_2Fq8wIUpq5I"],
      },
      "q-5338ca30.js": {
        size: 288,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-eca77845.js"],
        origins: ["src/routes/layout.tsx"],
      },
      "q-53b4dfc6.js": {
        size: 1089,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: ["src/entry_Cards.js", "src/s_yj7oj0dysis.js"],
        symbols: ["s_Yj7Oj0dysis"],
      },
      "q-575f11cc.js": {
        size: 467,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: ["src/entry_RouterOutlet.js", "src/s_e0ssidxoeam.js"],
        symbols: ["s_e0ssiDXoeAM"],
      },
      "q-588805f5.js": {
        size: 1214,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-53b4dfc6.js"],
        origins: [
          "src/components/cards/cards.tsx",
          "src/repository/projects.ts",
        ],
      },
      "q-5e2b9470.js": {
        size: 351,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-854f0929.js"],
        origins: ["src/routes/test/index.tsx"],
      },
      "q-60c54ed8.js": {
        size: 751,
        imports: ["q-df2d8f23.js"],
        origins: ["src/entry_routeActionQrl.js", "src/s_a5bzc7wo00a.js"],
        symbols: ["s_A5bZC7WO00A"],
      },
      "q-663033b0.js": {
        size: 2286,
        origins: ["src/entry_spaInit.js", "src/s_dyvc0ybiqqu.js"],
        symbols: ["s_DyVc0YBIqQU"],
      },
      "q-6bed3fd5.js": {
        size: 4218,
        imports: ["q-df2d8f23.js", "q-fe3ac8bd.js"],
        origins: ["src/entry_links.js", "src/s_kgoeb6p3oy8.js"],
        symbols: ["s_KGOeb6p3oY8"],
      },
      "q-719af83b.js": {
        size: 329,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-eff16619.js"],
        origins: ["src/routes/projects/index.tsx"],
      },
      "q-735c49c1.js": {
        size: 201,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-d550abcf.js"],
        origins: ["src/components/articles/articles.tsx"],
      },
      "q-7b7d3d2b.js": {
        size: 8388,
        imports: ["q-df2d8f23.js"],
        dynamicImports: [
          "q-575f11cc.js",
          "q-663033b0.js",
          "q-90d00d47.js",
          "q-d620e7cb.js",
        ],
        origins: [
          "@qwik-city-sw-register",
          "node_modules/@builder.io/qwik-city/index.qwik.mjs",
        ],
      },
      "q-7c0cb626.js": {
        size: 658,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: [
          "src/components/stacks/stacks.module.css?used",
          "src/entry_Stacks.js",
          "src/s_o91wc8igdho.js",
        ],
        symbols: ["s_o91wC8IGdho"],
      },
      "q-83e87ecb.js": {
        size: 351,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-337ed0a9.js"],
        origins: ["src/routes/404.tsx"],
      },
      "q-854f0929.js": {
        size: 752,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js", "q-f16131da.js"],
        origins: ["src/entry_test.js", "src/s_fmkqf5qzfny.js"],
        symbols: ["s_FMKqF5QZfNY"],
      },
      "q-8b6c5ca4.js": {
        size: 510,
        imports: [
          "q-735c49c1.js",
          "q-7b7d3d2b.js",
          "q-972000b7.js",
          "q-df2d8f23.js",
        ],
        origins: ["src/entry_blog.js", "src/s_uzl3gaaclja.js"],
        symbols: ["s_Uzl3gaAclJA"],
      },
      "q-8d7a9869.js": {
        size: 179,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-b96c0b08.js"],
        origins: ["src/components/timeline/timeline.tsx"],
      },
      "q-8ea06850.js": {
        size: 2539,
        origins: [
          "node_modules/@builder.io/qwik-city/service-worker.mjs",
          "src/routes/service-worker.ts",
        ],
      },
      "q-8fcf6f2d.js": {
        size: 1740,
        imports: ["q-df2d8f23.js", "q-e92d1254.js"],
        origins: [
          "src/entry_button_game.js",
          "src/s_lvhxlsc0aiu.js",
          "src/s_sqnygwm7k0k.js",
        ],
        symbols: ["s_lVhXlSc0AIU", "s_SqNyGWM7k0k"],
      },
      "q-90d00d47.js": {
        size: 6432,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        dynamicImports: [
          "q-1a8234ec.js",
          "q-29dd787e.js",
          "q-33f7ca00.js",
          "q-5338ca30.js",
          "q-5e2b9470.js",
          "q-719af83b.js",
          "q-83e87ecb.js",
          "q-972000b7.js",
          "q-ca619f3f.js",
          "q-d491d4a7.js",
          "q-e92d1254.js",
        ],
        origins: [
          "@qwik-city-plan",
          "src/entry_QwikCityProvider.js",
          "src/s_02wmimzeabk.js",
          "src/s_fx0bdjeja0e.js",
          "src/s_rpdjaz33wla.js",
          "src/s_txcfoy819ag.js",
        ],
        symbols: [
          "s_02wMImzEAbk",
          "s_fX0bDjeJa0E",
          "s_RPDJAz33WLA",
          "s_TxCFOy819ag",
        ],
      },
      "q-972000b7.js": {
        size: 435,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        dynamicImports: ["q-8b6c5ca4.js"],
        origins: ["src/routes/blog/index.tsx"],
      },
      "q-9f05197d.js": {
        size: 202,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-fd60f041.js"],
        origins: ["src/global.css", "src/root.tsx"],
      },
      "q-b7fda301.js": {
        size: 889,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: ["src/entry_serverQrl.js", "src/s_woipfiq04l4.js"],
        symbols: ["s_wOIPfiQ04l4"],
      },
      "q-b96c0b08.js": {
        size: 1593,
        imports: ["q-df2d8f23.js"],
        origins: ["src/entry_Timeline.js", "src/s_szipqdbaepc.js"],
        symbols: ["s_sZIPqDBaEpc"],
      },
      "q-ba7f3a72.js": {
        size: 128,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: ["src/s_ebq0vfsfksk.js"],
        symbols: ["s_eBQ0vFsFKsk"],
      },
      "q-ca619f3f.js": {
        size: 207,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-f73035d6.js"],
        origins: ["src/routes/history/index.tsx"],
      },
      "q-cea7d206.js": {
        size: 1703,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: [
          "src/entry_Header.js",
          "src/s_8cyhppvkzxc.js",
          "src/s_o4ccbuviycs.js",
        ],
        symbols: ["s_8cyHPpVKZXc", "s_o4ccBuvIYCs"],
      },
      "q-d491d4a7.js": {
        size: 329,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-46e958b7.js"],
        origins: ["src/routes/stack/index.tsx"],
      },
      "q-d550abcf.js": {
        size: 753,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: ["src/entry_Articles.js", "src/s_ahaxqw3gutm.js"],
        symbols: ["s_aHaxQW3gUTM"],
      },
      "q-d620e7cb.js": {
        size: 1149,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        dynamicImports: ["q-ba7f3a72.js"],
        origins: [
          "src/entry_Link.js",
          "src/s_8gdlbszqbam.js",
          "src/s_i1cv0pyjnr0.js",
        ],
        symbols: ["s_8gdLBszqbaM", "s_i1Cv0pYJNR0"],
      },
      "q-dea6f352.js": {
        size: 787,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: [
          "src/entry_QwikCityMockProvider.js",
          "src/s_bubtvtyvvre.js",
          "src/s_wmyc5h00wti.js",
        ],
        symbols: ["s_BUbtvTyvVRE", "s_WmYC5H00wtI"],
      },
      "q-df2d8f23.js": {
        size: 46919,
        origins: ["node_modules/@builder.io/qwik/core.min.mjs"],
      },
      "q-e92d1254.js": {
        size: 478,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-8fcf6f2d.js"],
        origins: ["src/routes/button-game/index.tsx"],
      },
      "q-eca77845.js": {
        size: 824,
        imports: ["q-df2d8f23.js"],
        dynamicImports: [
          "q-0176fe1e.js",
          "q-23fe1614.js",
          "q-cea7d206.js",
          "q-fd1d9231.js",
        ],
        origins: [
          "src/components/cat/cat-walk.tsx",
          "src/components/cat/cat.tsx",
          "src/components/footer/footer.tsx",
          "src/components/header/header.tsx",
          "src/entry_layout.js",
          "src/s_6y0ufrvpmqs.js",
        ],
        symbols: ["s_6Y0uFrvPmQs"],
      },
      "q-ee5e2f38.js": {
        size: 719,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: [
          "src/components/linkItem/linkItem.module.css?used",
          "src/entry_LinkItem.js",
          "src/s_x0jentb2iqc.js",
        ],
        symbols: ["s_x0jeNTb2iQc"],
      },
      "q-eeec3fbf.js": {
        size: 201,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-7c0cb626.js"],
        origins: ["src/components/stacks/stacks.tsx"],
      },
      "q-efd4c604.js": {
        size: 1032,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        origins: [
          "src/entry_GetForm.js",
          "src/s_nk9plpjqm9y.js",
          "src/s_p9msze0ojs4.js",
        ],
        symbols: ["s_Nk9PlpjQm9Y", "s_p9MSze0ojs4"],
      },
      "q-eff16619.js": {
        size: 385,
        imports: ["q-588805f5.js", "q-df2d8f23.js"],
        origins: ["src/entry_projects.js", "src/s_ymerza5h0vw.js"],
        symbols: ["s_yMerZA5h0Vw"],
      },
      "q-f16131da.js": {
        size: 249,
        imports: ["q-df2d8f23.js"],
        origins: ["src/media/aliens-alien.gif?jsx"],
      },
      "q-f73035d6.js": {
        size: 2544,
        imports: ["q-8d7a9869.js", "q-df2d8f23.js"],
        origins: ["src/entry_history.js", "src/s_vnajw7v9chy.js"],
        symbols: ["s_vNaJw7V9CHY"],
      },
      "q-fd1d9231.js": {
        size: 528,
        imports: ["q-df2d8f23.js"],
        origins: ["src/entry_Cat.js", "src/s_k9rs7qccfau.js"],
        symbols: ["s_k9rs7QcCFAU"],
      },
      "q-fd60f041.js": {
        size: 543,
        imports: ["q-7b7d3d2b.js", "q-df2d8f23.js"],
        dynamicImports: ["q-5056083e.js"],
        origins: [
          "src/components/router-head/router-head.tsx",
          "src/entry_root.js",
          "src/s_exd0k9bzzlo.js",
        ],
        symbols: ["s_eXD0K9bzzlo"],
      },
      "q-fe3ac8bd.js": {
        size: 201,
        imports: ["q-df2d8f23.js"],
        dynamicImports: ["q-ee5e2f38.js"],
        origins: ["src/components/linkItem/linkItem.tsx"],
      },
    },
    injections: [
      {
        tag: "link",
        location: "head",
        attributes: { rel: "stylesheet", href: "/build/q-18cd24cf.css" },
      },
    ],
    version: "1",
    options: {
      target: "client",
      buildMode: "production",
      entryStrategy: { type: "smart" },
    },
    platform: {
      qwik: "1.2.15",
      vite: "",
      rollup: "3.29.4",
      env: "node",
      os: "darwin",
      node: "21.1.0",
    },
  },
  du = () => {
    const e = T0(),
      t = ri();
    return S(
      R,
      {
        children: [
          d("title", null, null, e.title, 1, null),
          d(
            "link",
            null,
            {
              href: je((n) => n.url.href, [t], "p0.url.href"),
              rel: "canonical",
            },
            null,
            3,
            null
          ),
          d(
            "meta",
            null,
            {
              content: "width=device-width, initial-scale=1.0",
              name: "viewport",
            },
            null,
            3,
            null
          ),
          d(
            "link",
            null,
            { href: "/favicon.svg", rel: "icon", type: "image/svg+xml" },
            null,
            3,
            null
          ),
          e.meta.map((n) => Rt("meta", { ...n }, null, 0, n.key)),
          e.links.map((n) => Rt("link", { ...n }, null, 0, n.key)),
          e.styles.map((n) =>
            Rt(
              "style",
              { ...n.props, dangerouslySetInnerHTML: P(n, "style") },
              null,
              0,
              n.key
            )
          ),
        ],
      },
      1,
      "0Z_0"
    );
  },
  fu = L(I(du, "s_2Fq8wIUpq5I"));
const $u = () =>
    S(
      N0,
      {
        children: [
          d(
            "head",
            null,
            null,
            [
              d("meta", null, { charSet: "utf-8" }, null, 3, null),
              d(
                "link",
                null,
                { href: "/manifest.json", rel: "manifest" },
                null,
                3,
                null
              ),
              S(fu, null, 3, "Le_0"),
            ],
            1,
            null
          ),
          d(
            "body",
            null,
            { lang: "en" },
            [S(_0, null, 3, "Le_1"), S(D0, null, 3, "Le_2")],
            1,
            null
          ),
        ],
      },
      1,
      "Le_3"
    ),
  pu = L(I($u, "s_eXD0K9bzzlo"));
function mu(e) {
  return G1(S(pu, null, 3, "Ro_0"), {
    manifest: uu,
    ...e,
    containerAttributes: { lang: "en-us", ...e.containerAttributes },
  });
}
const ju = c0({ render: mu, qwikCityPlan: au });
export { ju as default };
