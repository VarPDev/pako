import {
  C as _,
  D as ae,
  E as me,
  F as T,
  G as re,
  c as J,
  i as X,
  H as le,
  s as ce,
  _ as y,
  b,
  l as _e,
  g as S,
  k as pe,
  I as ue,
  J as fe,
  Q as je,
} from './q-56017ed5.js'
/**
 * @license
 * @builder.io/qwik/server 1.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */ var be = (s =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(s, {
            get: (e, n) => (typeof require < 'u' ? require : e)[n],
          })
        : s)(function (s) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw Error('Dynamic require of "' + s + '" is not supported')
  }),
  qe = '<sync>'
function xe(s, e) {
  const n = e == null ? void 0 : e.mapper,
    o = s.symbolMapper
      ? s.symbolMapper
      : (i, d, a) => {
          var m
          if (n) {
            const r = C(i),
              l = n[r]
            if (!l) {
              if (r === qe) return [r, '']
              if (
                (m = globalThis.__qwik_reg_symbols) == null ? void 0 : m.has(r)
              )
                return [i, '_']
              if (a) return [i, `${a}?qrl=${i}`]
              console.error('Cannot resolve symbol', i, 'in', n, a)
            }
            return l
          }
        }
  return {
    isServer: !0,
    async importSymbol(i, d, a) {
      var k
      const m = C(a),
        r = (k = globalThis.__qwik_reg_symbols) == null ? void 0 : k.get(m)
      if (r) return r
      let l = String(d)
      l.endsWith('.js') || (l += '.js')
      const j = be(l)
      if (!(a in j))
        throw new Error(`Q-ERROR: missing symbol '${a}' in module '${l}'.`)
      return j[a]
    },
    raf: () => (console.error('server can not rerender'), Promise.resolve()),
    nextTick: i =>
      new Promise(d => {
        setTimeout(() => {
          d(i())
        })
      }),
    chunkForSymbol(i, d, a) {
      return o(i, n, a)
    },
  }
}
async function ye(s, e) {
  const n = xe(s, e)
  re(n)
}
var C = s => {
    const e = s.lastIndexOf('_')
    return e > -1 ? s.slice(e + 1) : s
  },
  ke = 'q:instance'
function we(s) {
  if (
    s != null &&
    s.mapping != null &&
    typeof s.mapping == 'object' &&
    s.symbols != null &&
    typeof s.symbols == 'object' &&
    s.bundles != null &&
    typeof s.bundles == 'object'
  )
    return s
}
function N() {
  let t = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`
  return (
    (t += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (t += 'w.onmessage=()=>{w.terminate()};'),
    t
  )
}
function ge(s, e) {
  const n = { bundles: w(e).map(t => t.split('/').pop()) }
  return `(window.qwikPrefetchSW||(window.qwikPrefetchSW=[])).push(${JSON.stringify(['prefetch', s, ...n.bundles])});`
}
function w(s) {
  const e = [],
    n = o => {
      if (Array.isArray(o))
        for (const t of o) e.includes(t.url) || (e.push(t.url), n(t.imports))
    }
  return n(s), e
}
function he(s) {
  const e = new Map()
  let n = 0
  const o = (a, m) => {
      if (Array.isArray(a))
        for (const r of a) {
          const l = e.get(r.url) || 0
          e.set(r.url, l + 1),
            n++,
            m.has(r.url) || (m.add(r.url), o(r.imports, m))
        }
    },
    t = new Set()
  for (const a of s) t.clear(), o(a.imports, t)
  const i = (n / e.size) * 2,
    d = Array.from(e.entries())
  return (
    d.sort((a, m) => m[1] - a[1]),
    d
      .slice(0, 5)
      .filter(a => a[1] > i)
      .map(a => a[0])
  )
}
function ve(s, e, n, o) {
  const t = Te(e == null ? void 0 : e.implementation),
    i = []
  return (
    t.prefetchEvent === 'always' && Se(s, i, n, o),
    t.linkInsert === 'html-append' && ze(i, n, t),
    t.linkInsert === 'js-append'
      ? Ce(i, n, t, o)
      : t.workerFetchInsert === 'always' && Ne(i, n, o),
    i.length > 0 ? _(T, { children: i }) : null
  )
}
function Se(s, e, n, o) {
  const t = he(n)
  for (const i of t)
    e.push(_('link', { rel: 'modulepreload', href: i, nonce: o }))
  e.push(
    _('script', {
      'q:type': 'prefetch-bundles',
      dangerouslySetInnerHTML:
        ge(s, n) +
        "document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",
      nonce: o,
    }),
  )
}
function ze(s, e, n) {
  const o = w(e),
    t = n.linkRel || 'prefetch',
    i = n.linkFetchPriority
  for (const d of o) {
    const a = {}
    ;(a.href = d),
      (a.rel = t),
      i && (a.fetchpriority = i),
      (t === 'prefetch' || t === 'preload') &&
        d.endsWith('.js') &&
        (a.as = 'script'),
      s.push(_('link', a, void 0))
  }
}
function Ce(s, e, n, o) {
  const t = n.linkRel || 'prefetch',
    i = n.linkFetchPriority
  let d = ''
  n.workerFetchInsert === 'no-link-support' &&
    (d += 'let supportsLinkRel = true;'),
    (d += `const u=${JSON.stringify(w(e))};`),
    (d += 'u.map((u,i)=>{'),
    (d += "const l=document.createElement('link');"),
    (d += 'l.setAttribute("href",u);'),
    (d += `l.setAttribute("rel","${t}");`),
    i && (d += `l.setAttribute("fetchpriority","${i}");`),
    n.workerFetchInsert === 'no-link-support' &&
      ((d += 'if(i===0){'),
      (d += 'try{'),
      (d += `supportsLinkRel=l.relList.supports("${t}");`),
      (d += '}catch(e){}'),
      (d += '}')),
    (d += 'document.body.appendChild(l);'),
    (d += '});'),
    n.workerFetchInsert === 'no-link-support' &&
      ((d += 'if(!supportsLinkRel){'), (d += N()), (d += '}')),
    n.workerFetchInsert === 'always' && (d += N()),
    s.push(
      _('script', {
        type: 'module',
        'q:type': 'link-js',
        dangerouslySetInnerHTML: d,
        nonce: o,
      }),
    )
}
function Ne(s, e, n) {
  let o = `const u=${JSON.stringify(w(e))};`
  ;(o += N()),
    s.push(
      _('script', {
        type: 'module',
        'q:type': 'prefetch-worker',
        dangerouslySetInnerHTML: o,
        nonce: n,
      }),
    )
}
function Te(s) {
  return { ...Fe, ...s }
}
var Fe = {
  linkInsert: null,
  linkRel: null,
  linkFetchPriority: null,
  workerFetchInsert: null,
  prefetchEvent: 'always',
}
function z() {
  if (typeof performance > 'u') return () => 0
  const s = performance.now()
  return () => (performance.now() - s) / 1e6
}
function Z(s) {
  let e = s.base
  return (
    typeof s.base == 'function' && (e = s.base(s)),
    typeof e == 'string' ? (e.endsWith('/') || (e += '/'), e) : '/build/'
  )
}
function Ie(s, e, n) {
  if (!n) return []
  const o = e.prefetchStrategy,
    t = Z(e)
  if (o !== null) {
    if (!o || !o.symbolsToPrefetch || o.symbolsToPrefetch === 'auto')
      return Ee(s, n, t)
    if (typeof o.symbolsToPrefetch == 'function')
      try {
        return o.symbolsToPrefetch({ manifest: n.manifest })
      } catch (i) {
        console.error('getPrefetchUrls, symbolsToPrefetch()', i)
      }
  }
  return []
}
function Ee(s, e, n) {
  const o = [],
    t = s == null ? void 0 : s.qrls,
    { mapper: i, manifest: d } = e,
    a = new Map()
  if (Array.isArray(t))
    for (const m of t) {
      const r = m.getHash(),
        l = i[r]
      if (l) {
        const j = l[1]
        G(d, a, o, n, j)
      }
    }
  return o
}
function G(s, e, n, o, t) {
  const i = o + t
  let d = e.get(i)
  if (!d) {
    ;(d = { url: i, imports: [] }), e.set(i, d)
    const a = s.bundles[t]
    if (a && Array.isArray(a.imports))
      for (const m of a.imports) G(s, e, d.imports, o, m)
  }
  n.push(d)
}
var Me =
    '(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&n(e,a,s[a]);return e};((e,t)=>{const r="__q_context__",o=window,n=new Set,a=new Set([e]),c="replace",i="forEach",l="target",f="getAttribute",p="isConnected",b="qvisible",u="_qwikjson_",y=(e,t)=>Array.from(e.querySelectorAll(t)),h=e=>{const t=[];return a.forEach((r=>t.push(...y(r,e)))),t},d=e=>{S(e),y(e,"[q\\\\:shadowroot]").forEach((e=>{const t=e.shadowRoot;t&&d(t)}))},m=e=>e&&"function"==typeof e.then,w=(e,t,r=t.type)=>{h("[on"+e+"\\\\:"+r+"]")[i]((o=>E(o,e,t,r)))},q=t=>{if(void 0===t[u]){let r=(t===e.documentElement?e.body:t).lastElementChild;for(;r;){if("SCRIPT"===r.tagName&&"qwik/json"===r[f]("type")){t[u]=JSON.parse(r.textContent[c](/\\\\x3C(\\/?script)/gi,"<$1"));break}r=r.previousElementSibling}}},v=(e,t)=>new CustomEvent(e,{detail:t}),E=async(t,o,n,a=n.type)=>{const i="on"+o+":"+a;t.hasAttribute("preventdefault:"+a)&&n.preventDefault();const l=t._qc_,b=l&&l.li.filter((e=>e[0]===i));if(b&&b.length>0){for(const e of b){const r=e[1].getFn([t,n],(()=>t[p]))(n,t),o=n.cancelBubble;m(r)&&await r,o&&n.stopPropagation()}return}const u=t[f](i);if(u){const o=t.closest("[q\\\\:container]"),a=o[f]("q:base"),i=o[f]("q:version")||"unknown",l=o[f]("q:manifest-hash")||"dev",b=new URL(a,e.baseURI);for(const f of u.split("\\n")){const u=new URL(f,b),y=u.href,h=u.hash[c](/^#?([^?[|]*).*$/,"$1")||"default",d=performance.now();let w,v,E;const _=f.startsWith("#"),A={qBase:a,qManifest:l,qVersion:i,href:y,symbol:h,element:t,reqTime:d};if(_){const t=o.getAttribute("q:instance");w=(e["qFuncs_"+t]||[])[Number.parseInt(h)],w||(v="sync",E=Error("sync handler error for symbol: "+h))}else{const e=u.href.split("#")[0];try{const t=import(e);q(o),w=(await t)[h],w||(v="no-symbol",E=Error(`${h} not in ${e}`))}catch(e){v||(v="async"),E=e}}if(!w){g("qerror",s({importError:v,error:E},A)),console.error(E);break}const k=e[r];if(t[p])try{e[r]=[t,n,u],_||g("qsymbol",s({},A));const o=w(n,t);m(o)&&await o}catch(e){g("qerror",s({error:e},A))}finally{e[r]=k}}}},g=(t,r)=>{e.dispatchEvent(v(t,r))},_=e=>e[c](/([A-Z])/g,(e=>"-"+e.toLowerCase())),A=async e=>{let t=_(e.type),r=e[l];for(w("-document",e,t);r&&r[f];){const o=E(r,"",e,t);let n=e.cancelBubble;m(o)&&await o,n=n||e.cancelBubble||r.hasAttribute("stoppropagation:"+e.type),r=e.bubbles&&!0!==n?r.parentElement:null}},k=e=>{w("-window",e,_(e.type))},C=()=>{var r;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(a.forEach(d),t=1,g("qinit"),(null!=(r=o.requestIdleCallback)?r:o.setTimeout).bind(o)((()=>g("qidle"))),n.has(b))){const e=h("[on\\\\:"+b+"]"),t=new IntersectionObserver((e=>{for(const r of e)r.isIntersecting&&(t.unobserve(r[l]),E(r[l],"",v(b,r)))}));e[i]((e=>t.observe(e)))}},O=(e,t,r,o=!1)=>e.addEventListener(t,r,{capture:o,passive:!1}),S=(...e)=>{for(const t of e)"string"==typeof t?n.has(t)||(a.forEach((e=>O(e,t,A,!0))),O(o,t,k,!0),n.add(t)):a.has(t)||(n.forEach((e=>O(t,e,A,!0))),a.add(t))};if(!(r in e)){e[r]=0;const t=o.qwikevents;Array.isArray(t)&&S(...t),o.qwikevents={events:n,roots:a,push:S},O(e,"readystatechange",C),C()}})(document)})()',
  Oe = `(() => {
    var __defProp = Object.defineProperty;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value
    }) : obj[key] = value;
    var __spreadValues = (a, b) => {
        for (var prop in b || (b = {})) {
            __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
        }
        if (__getOwnPropSymbols) {
            for (var prop of __getOwnPropSymbols(b)) {
                __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
            }
        }
        return a;
    };
    ((doc, hasInitialized) => {
        const Q_CONTEXT = "__q_context__";
        const win = window;
        const events =  new Set;
        const roots =  new Set([ doc ]);
        const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
        const querySelectorAll = query => {
            const elements = [];
            roots.forEach((root => elements.push(...nativeQuerySelectorAll(root, query))));
            return elements;
        };
        const findShadowRoots = fragment => {
            processEventOrNode(fragment);
            nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent => {
                const shadowRoot = parent.shadowRoot;
                shadowRoot && findShadowRoots(shadowRoot);
            }));
        };
        const isPromise = promise => promise && "function" == typeof promise.then;
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el => dispatch(el, infix, ev, type)));
        };
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === script.getAttribute("type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1"));
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
            const relevantListeners = ctx && ctx.li.filter((li => li[0] === attrName));
            if (relevantListeners && relevantListeners.length > 0) {
                for (const listener of relevantListeners) {
                    const results = listener[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                    const cancelBubble = ev.cancelBubble;
                    isPromise(results) && await results;
                    cancelBubble && ev.stopPropagation();
                }
                return;
            }
            const attrValue = element.getAttribute(attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const qBase = container.getAttribute("q:base");
                const qVersion = container.getAttribute("q:version") || "unknown";
                const qManifest = container.getAttribute("q:manifest-hash") || "dev";
                const base = new URL(qBase, doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const href = url.href;
                    const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    let handler;
                    let importError;
                    let error;
                    const isSync = qrl.startsWith("#");
                    const eventData = {
                        qBase: qBase,
                        qManifest: qManifest,
                        qVersion: qVersion,
                        href: href,
                        symbol: symbol,
                        element: element,
                        reqTime: reqTime
                    };
                    if (isSync) {
                        const hash = container.getAttribute("q:instance");
                        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
                        if (!handler) {
                            importError = "sync";
                            error = new Error("sync handler error for symbol: " + symbol);
                        }
                    } else {
                        const uri = url.href.split("#")[0];
                        try {
                            const module = import(
                                                        uri);
                            resolveContainer(container);
                            handler = (await module)[symbol];
                            if (!handler) {
                                importError = "no-symbol";
                                error = new Error(\`\${symbol} not in \${uri}\`);
                            }
                        } catch (err) {
                            importError || (importError = "async");
                            error = err;
                        }
                    }
                    if (!handler) {
                        emitEvent("qerror", __spreadValues({
                            importError: importError,
                            error: error
                        }, eventData));
                        console.error(error);
                        break;
                    }
                    const previousCtx = doc[Q_CONTEXT];
                    if (element.isConnected) {
                        try {
                            doc[Q_CONTEXT] = [ element, ev, url ];
                            isSync || emitEvent("qsymbol", __spreadValues({}, eventData));
                            const results = handler(ev, element);
                            isPromise(results) && await results;
                        } catch (error2) {
                            emitEvent("qerror", __spreadValues({
                                error: error2
                            }, eventData));
                        } finally {
                            doc[Q_CONTEXT] = previousCtx;
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
                const results = dispatch(element, "", ev, type);
                let cancelBubble = ev.cancelBubble;
                isPromise(results) && await results;
                cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type);
                element = ev.bubbles && !0 !== cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                roots.forEach(findShadowRoots);
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
        const processEventOrNode = (...eventNames) => {
            for (const eventNameOrNode of eventNames) {
                if ("string" == typeof eventNameOrNode) {
                    if (!events.has(eventNameOrNode)) {
                        roots.forEach((root => addEventListener(root, eventNameOrNode, processDocumentEvent, !0)));
                        addEventListener(win, eventNameOrNode, processWindowEvent, !0);
                        events.add(eventNameOrNode);
                    }
                } else if (!roots.has(eventNameOrNode)) {
                    events.forEach((eventName => addEventListener(eventNameOrNode, eventName, processDocumentEvent, !0)));
                    roots.add(eventNameOrNode);
                }
            }
        };
        if (!(Q_CONTEXT in doc)) {
            doc[Q_CONTEXT] = 0;
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && processEventOrNode(...qwikevents);
            win.qwikevents = {
                events: events,
                roots: roots,
                push: processEventOrNode
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})()`
function V(s = {}) {
  return s.debug ? Oe : Me
}
var We = '<!DOCTYPE html>'
async function Le(s, e) {
  var L, U, A
  let n = e.stream,
    o = 0,
    t = 0,
    i = 0,
    d = 0,
    a = '',
    m
  const r = ((L = e.streaming) == null ? void 0 : L.inOrder) ?? {
      strategy: 'auto',
      maximunInitialChunk: 5e4,
      maximunChunk: 3e4,
    },
    l = e.containerTagName ?? 'html',
    j = e.containerAttributes ?? {},
    k = n,
    ee = z(),
    se = Z(e),
    p = Ae(e.manifest)
  function F() {
    a && (k.write(a), (a = ''), (o = 0), i++, i === 1 && (d = ee()))
  }
  function I(c) {
    const u = c.length
    ;(o += u), (t += u), (a += c)
  }
  switch (r.strategy) {
    case 'disabled':
      n = { write: I }
      break
    case 'direct':
      n = k
      break
    case 'auto':
      let c = 0,
        u = !1
      const Q = r.maximunChunk ?? 0,
        v = r.maximunInitialChunk ?? 0
      n = {
        write(x) {
          x === '<!--qkssr-f-->'
            ? u || (u = !0)
            : x === '<!--qkssr-pu-->'
              ? c++
              : x === '<!--qkssr-po-->'
                ? c--
                : I(x),
            c === 0 && (u || o >= (i === 0 ? v : Q)) && ((u = !1), F())
        },
      }
      break
  }
  l === 'html'
    ? n.write(We)
    : (n.write('<!--cq-->'),
      e.qwikLoader
        ? (e.qwikLoader.include === void 0 && (e.qwikLoader.include = 'never'),
          e.qwikLoader.position === void 0 &&
            (e.qwikLoader.position = 'bottom'))
        : (e.qwikLoader = { include: 'never' }),
      e.qwikPrefetchServiceWorker || (e.qwikPrefetchServiceWorker = {}),
      e.qwikPrefetchServiceWorker.include ||
        (e.qwikPrefetchServiceWorker.include = !1),
      e.qwikPrefetchServiceWorker.position ||
        (e.qwikPrefetchServiceWorker.position = 'top')),
    e.manifest ||
      console.warn(
        'Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build.',
      ),
    await ye(e, p)
  const E = p == null ? void 0 : p.manifest.injections,
    g = E ? E.map(c => _(c.tag, c.attributes ?? {})) : [],
    h = ((U = e.qwikLoader) == null ? void 0 : U.include) ?? 'auto'
  if (
    (((A = e.qwikLoader) == null ? void 0 : A.position) ?? 'bottom') ===
      'top' &&
    h !== 'never'
  ) {
    const c = V({ debug: e.debug })
    g.push(_('script', { id: 'qwikloader', dangerouslySetInnerHTML: c })),
      g.push(
        _('script', {
          dangerouslySetInnerHTML: "window.qwikevents.push('click')",
        }),
      )
  }
  const ne = z(),
    M = []
  let O = 0,
    W = 0
  await ae(s, {
    stream: n,
    containerTagName: l,
    containerAttributes: j,
    serverData: e.serverData,
    base: se,
    beforeContent: g,
    beforeClose: async (c, u, Q, v) => {
      var K, Y, B, H, R
      O = ne()
      const x = z()
      m = await me(c, u, void 0, v)
      const q = []
      if (e.prefetchStrategy !== null) {
        const f = Ie(m, e, p),
          ie = j['q:base']
        if (f.length > 0) {
          const $ = ve(
            ie,
            e.prefetchStrategy,
            f,
            (K = e.serverData) == null ? void 0 : K.nonce,
          )
          $ && q.push($)
        }
      }
      const te = JSON.stringify(m.state, void 0, void 0)
      if (
        (q.push(
          _('script', {
            type: 'qwik/json',
            dangerouslySetInnerHTML: Qe(te),
            nonce: (Y = e.serverData) == null ? void 0 : Y.nonce,
          }),
        ),
        m.funcs.length > 0)
      ) {
        const f = j[ke]
        q.push(
          _('script', {
            'q:func': 'qwik/json',
            dangerouslySetInnerHTML: Ke(f, m.funcs),
            nonce: (B = e.serverData) == null ? void 0 : B.nonce,
          }),
        )
      }
      const de = !m || m.mode !== 'static',
        D = h === 'always' || (h === 'auto' && de)
      if (D) {
        const f = V({ debug: e.debug })
        q.push(
          _('script', {
            id: 'qwikloader',
            dangerouslySetInnerHTML: f,
            nonce: (H = e.serverData) == null ? void 0 : H.nonce,
          }),
        )
      }
      const P = Array.from(u.$events$, f => JSON.stringify(f))
      if (P.length > 0) {
        const f =
          (D ? 'window.qwikevents' : '(window.qwikevents||=[])') +
          `.push(${P.join(', ')})`
        q.push(
          _('script', {
            dangerouslySetInnerHTML: f,
            nonce: (R = e.serverData) == null ? void 0 : R.nonce,
          }),
        )
      }
      return De(M, c), (W = x()), _(T, { children: q })
    },
    manifestHash:
      (p == null ? void 0 : p.manifest.manifestHash) || 'dev' + Ue(),
  }),
    l !== 'html' && n.write('<!--/cq-->'),
    F()
  const oe = m.resources.some(c => c._cache !== 1 / 0)
  return {
    prefetchResources: void 0,
    snapshotResult: m,
    flushes: i,
    manifest: p == null ? void 0 : p.manifest,
    size: t,
    isStatic: !oe,
    timing: { render: O, snapshot: W, firstFlush: d },
    _symbols: M,
  }
}
function Ue() {
  return Math.random().toString(36).slice(2)
}
function Ae(s) {
  if (s) {
    if ('mapper' in s) return s
    if (((s = we(s)), s)) {
      const e = {}
      return (
        Object.entries(s.mapping).forEach(([n, o]) => {
          e[C(n)] = [n, o]
        }),
        { mapper: e, manifest: s }
      )
    }
  }
}
var Qe = s => s.replace(/<(\/?script)/gi, '\\x3C$1')
function De(s, e) {
  var n
  for (const o of e) {
    const t = (n = o.$componentQrl$) == null ? void 0 : n.getSymbol()
    t && !s.includes(t) && s.push(t)
  }
}
var Pe = 'document["qFuncs_HASH"]='
function Ke(s, e) {
  return (
    Pe.replace('HASH', s) +
    `[${e.join(`,
`)}]`
  )
}
const Ye = {
    manifestHash: 'q4ozoe',
    symbols: {
      s_7V8C6m30W8E: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component_useTask',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_useTask_7V8C6m30W8E',
        hash: '7V8C6m30W8E',
        ctxKind: 'function',
        ctxName: 'useTask$',
        captures: !0,
        parent: 's_D4XD62ic8NY',
        loc: [28961, 38279],
      },
      s_EWIT9ENzUX0: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_qwikifyQrl_component_useTask',
        canonicalFilename:
          'index.qwik.mjs_qwikifyQrl_component_useTask_EWIT9ENzUX0',
        hash: 'EWIT9ENzUX0',
        ctxKind: 'function',
        ctxName: 'useTask$',
        captures: !0,
        parent: 's_zH94hIe0Ick',
        loc: [5529, 6719],
      },
      s_xm092zOFEuY: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_usePreventNavigateQrl_useVisibleTask',
        canonicalFilename:
          'index.qwik.mjs_usePreventNavigateQrl_useVisibleTask_xm092zOFEuY',
        hash: 'xm092zOFEuY',
        ctxKind: 'function',
        ctxName: 'useVisibleTask$',
        captures: !0,
        loc: [22708, 22736],
      },
      s_0EhuNoWgjY4: {
        origin: 'components/blog/blogComponent.tsx',
        displayName: 'blogComponent.tsx_BlogComponent_component_useVisibleTask',
        canonicalFilename:
          'blogComponent.tsx_BlogComponent_component_useVisibleTask_0EhuNoWgjY4',
        hash: '0EhuNoWgjY4',
        ctxKind: 'function',
        ctxName: 'useVisibleTask$',
        captures: !0,
        parent: 's_TBWAb6R23ho',
        loc: [3724, 3874],
      },
      s_CHnWD2D8Ibg: {
        origin: 'components/animated-component/animated-component.tsx',
        displayName:
          'animated-component.tsx_AnimatedComp_component_useVisibleTask',
        canonicalFilename:
          'animated-component.tsx_AnimatedComp_component_useVisibleTask_CHnWD2D8Ibg',
        hash: 'CHnWD2D8Ibg',
        ctxKind: 'function',
        ctxName: 'useVisibleTask$',
        captures: !0,
        parent: 's_sdm0n9ZoKr0',
        loc: [420, 464],
      },
      s_zlu40LlrNis: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Lifecycle_component_useVisibleTask',
        canonicalFilename:
          'index.qwik.mjs_Lifecycle_component_useVisibleTask_zlu40LlrNis',
        hash: 'zlu40LlrNis',
        ctxKind: 'function',
        ctxName: 'useVisibleTask$',
        captures: !0,
        parent: 's_AMfhPV9ZgUw',
        loc: [35251, 36352],
      },
      s_03cbbuaQymY: {
        origin: 'components/svg/italian-svg.tsx',
        displayName: 'italian-svg.tsx_ItalianSvg_component',
        canonicalFilename: 'italian-svg.tsx_ItalianSvg_component_03cbbuaQymY',
        hash: '03cbbuaQymY',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [85, 647],
      },
      s_0Bd6yCHL7MI: {
        origin: 'components/rudolph/rudolph.tsx',
        displayName: 'rudolph.tsx_Rudolph_component',
        canonicalFilename: 'rudolph.tsx_Rudolph_component_0Bd6yCHL7MI',
        hash: '0Bd6yCHL7MI',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [142, 1074],
      },
      s_0DhRUxBQU40: {
        origin: 'components/cat/cat-walk.tsx',
        displayName: 'cat-walk.tsx_CatWalk_component',
        canonicalFilename: 'cat-walk.tsx_CatWalk_component_0DhRUxBQU40',
        hash: '0DhRUxBQU40',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [143, 1956],
      },
      s_0hvFUpzGAyM: {
        origin: 'components/bubble/bubble.tsx',
        displayName: 'bubble.tsx_Bubble_component',
        canonicalFilename: 'bubble.tsx_Bubble_component_0hvFUpzGAyM',
        hash: '0hvFUpzGAyM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [140, 426],
      },
      s_0pBeUwLuB88: {
        origin: 'components/newsletter/newsletter.tsx',
        displayName: 'newsletter.tsx_Newsletter_component',
        canonicalFilename: 'newsletter.tsx_Newsletter_component_0pBeUwLuB88',
        hash: '0pBeUwLuB88',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [609, 7970],
      },
      s_2Fq8wIUpq5I: {
        origin: 'components/router-head/router-head.tsx',
        displayName: 'router-head.tsx_RouterHead_component',
        canonicalFilename: 'router-head.tsx_RouterHead_component_2Fq8wIUpq5I',
        hash: '2Fq8wIUpq5I',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [241, 843],
      },
      s_6Y0uFrvPmQs: {
        origin: 'routes/layout.tsx',
        displayName: 'layout.tsx_layout_component',
        canonicalFilename: 'layout.tsx_layout_component_6Y0uFrvPmQs',
        hash: '6Y0uFrvPmQs',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [1521, 3098],
      },
      s_6t16ZFngrIc: {
        origin: 'routes/privacy-policy/ita/index.tsx',
        displayName: 'index.tsx_ita_component',
        canonicalFilename: 'index.tsx_ita_component_6t16ZFngrIc',
        hash: '6t16ZFngrIc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [337, 6424],
      },
      s_7duOWr5CdMs: {
        origin: 'routes/blog/[blogType]/index@blog.tsx',
        displayName: 'index@blog.tsx_index_blog_component',
        canonicalFilename: 'index@blog.tsx_index_blog_component_7duOWr5CdMs',
        hash: '7duOWr5CdMs',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [991, 1416],
      },
      s_8jOBWsjxgB8: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_RouterOutlet_component',
        canonicalFilename: 'index.qwik.mjs_RouterOutlet_component_8jOBWsjxgB8',
        hash: '8jOBWsjxgB8',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [7054, 8208],
      },
      s_8vZTs9fM6iI: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Form_form_onSubmit',
        canonicalFilename: 'index.qwik.mjs_Form_form_onSubmit_8vZTs9fM6iI',
        hash: '8vZTs9fM6iI',
        ctxKind: 'eventHandler',
        ctxName: 'onSubmit$',
        captures: !0,
        loc: [38142, 39604],
      },
      s_9C3L9HsfW0c: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Link_component',
        canonicalFilename: 'index.qwik.mjs_Link_component_9C3L9HsfW0c',
        hash: '9C3L9HsfW0c',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [39759, 42049],
      },
      s_AMfhPV9ZgUw: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Lifecycle_component',
        canonicalFilename: 'index.qwik.mjs_Lifecycle_component_AMfhPV9ZgUw',
        hash: 'AMfhPV9ZgUw',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [35108, 36400],
      },
      s_D4XD62ic8NY: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_D4XD62ic8NY',
        hash: 'D4XD62ic8NY',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [24144, 38325],
      },
      s_F4XGSf5645s: {
        origin: 'components/santa-hat/santa-hat.tsx',
        displayName: 'santa-hat.tsx_SantaHat_component',
        canonicalFilename: 'santa-hat.tsx_SantaHat_component_F4XGSf5645s',
        hash: 'F4XGSf5645s',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [83, 6563],
      },
      s_GvPhUJ5Kg9Q: {
        origin: 'components/footer/footer.tsx',
        displayName: 'footer.tsx_Footer_component',
        canonicalFilename: 'footer.tsx_Footer_component_GvPhUJ5Kg9Q',
        hash: 'GvPhUJ5Kg9Q',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [194, 3941],
      },
      s_GzGDOMI0hrg: {
        origin: 'components/finance/no-tips/no-tips.tsx',
        displayName: 'no-tips.tsx_NoTips_component',
        canonicalFilename: 'no-tips.tsx_NoTips_component_GzGDOMI0hrg',
        hash: 'GzGDOMI0hrg',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [81, 795],
      },
      s_Jevt7v9CDh4: {
        origin: 'components/hero/hero.tsx',
        displayName: 'hero.tsx_Hero_component',
        canonicalFilename: 'hero.tsx_Hero_component_Jevt7v9CDh4',
        hash: 'Jevt7v9CDh4',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [460, 2501],
      },
      s_LdHC7hJQ16Y: {
        origin: 'routes/layout-blog.tsx',
        displayName: 'layout-blog.tsx_layout_blog_component',
        canonicalFilename: 'layout-blog.tsx_layout_blog_component_LdHC7hJQ16Y',
        hash: 'LdHC7hJQ16Y',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [1426, 1960],
      },
      s_OR8GlEL3LEE: {
        origin: 'routes/unsubscribed/index.tsx',
        displayName: 'index.tsx_unsubscribed_component',
        canonicalFilename: 'index.tsx_unsubscribed_component_OR8GlEL3LEE',
        hash: 'OR8GlEL3LEE',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [322, 1121],
      },
      s_T5FLviseEE0: {
        origin: 'components/blog/blogHomeComponent.tsx',
        displayName: 'blogHomeComponent.tsx_blogHomeComponent_component',
        canonicalFilename:
          'blogHomeComponent.tsx_blogHomeComponent_component_T5FLviseEE0',
        hash: 'T5FLviseEE0',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [423, 2296],
      },
      s_TBWAb6R23ho: {
        origin: 'components/blog/blogComponent.tsx',
        displayName: 'blogComponent.tsx_BlogComponent_component',
        canonicalFilename:
          'blogComponent.tsx_BlogComponent_component_TBWAb6R23ho',
        hash: 'TBWAb6R23ho',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [1881, 9639],
      },
      s_Vn31O9w9kZ8: {
        origin: 'components/svg/england-svg.tsx',
        displayName: 'england-svg.tsx_EnglandSvg_component',
        canonicalFilename: 'england-svg.tsx_EnglandSvg_component_Vn31O9w9kZ8',
        hash: 'Vn31O9w9kZ8',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [85, 1637],
      },
      s_Yj7Oj0dysis: {
        origin: 'components/cards/cards.tsx',
        displayName: 'cards.tsx_Cards_component',
        canonicalFilename: 'cards.tsx_Cards_component_Yj7Oj0dysis',
        hash: 'Yj7Oj0dysis',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [217, 2640],
      },
      s_aHaxQW3gUTM: {
        origin: 'components/articles/articles.tsx',
        displayName: 'articles.tsx_Articles_component',
        canonicalFilename: 'articles.tsx_Articles_component_aHaxQW3gUTM',
        hash: 'aHaxQW3gUTM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [266, 1333],
      },
      s_aKDVerZD54c: {
        origin: 'routes/unsubscribed-failed/index.tsx',
        displayName: 'index.tsx_unsubscribed_failed_component',
        canonicalFilename:
          'index.tsx_unsubscribed_failed_component_aKDVerZD54c',
        hash: 'aKDVerZD54c',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [322, 1222],
      },
      s_bavVtvgbxHE: {
        origin: 'routes/404.tsx',
        displayName: '404.tsx__404_component',
        canonicalFilename: '404.tsx__404_component_bavVtvgbxHE',
        hash: 'bavVtvgbxHE',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [289, 1198],
      },
      s_e0g7Sn2KjsA: {
        origin: 'components/inner-section/innerSectionComponent.tsx',
        displayName:
          'innerSectionComponent.tsx_InnerSectionComponent_component',
        canonicalFilename:
          'innerSectionComponent.tsx_InnerSectionComponent_component_e0g7Sn2KjsA',
        hash: 'e0g7Sn2KjsA',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [325, 939],
      },
      s_eXD0K9bzzlo: {
        origin: 'root.tsx',
        displayName: 'root.tsx_root_component',
        canonicalFilename: 'root.tsx_root_component_eXD0K9bzzlo',
        hash: 'eXD0K9bzzlo',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [265, 941],
      },
      s_gqIDJ86ux1w: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityMockProvider_component',
        canonicalFilename:
          'index.qwik.mjs_QwikCityMockProvider_component_gqIDJ86ux1w',
        hash: 'gqIDJ86ux1w',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [38527, 39732],
      },
      s_jXDkCe4BzZI: {
        origin: 'routes/privacy-policy/eng/index.tsx',
        displayName: 'index.tsx_eng_component',
        canonicalFilename: 'index.tsx_eng_component_jXDkCe4BzZI',
        hash: 'jXDkCe4BzZI',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [337, 6085],
      },
      s_k9rs7QcCFAU: {
        origin: 'components/cat/cat.tsx',
        displayName: 'cat.tsx_Cat_component',
        canonicalFilename: 'cat.tsx_Cat_component_k9rs7QcCFAU',
        hash: 'k9rs7QcCFAU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [134, 608],
      },
      s_kc55RtBXaKM: {
        origin: 'routes/blog/[blogType]/all/index@blog.tsx',
        displayName: 'index@blog.tsx_index_blog_component',
        canonicalFilename: 'index@blog.tsx_index_blog_component_kc55RtBXaKM',
        hash: 'kc55RtBXaKM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [508, 705],
      },
      s_lVhXlSc0AIU: {
        origin: 'routes/button-game/index.tsx',
        displayName: 'index.tsx_button_game_component',
        canonicalFilename: 'index.tsx_button_game_component_lVhXlSc0AIU',
        hash: 'lVhXlSc0AIU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [407, 4611],
      },
      s_o1uLqgowy5k: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_GetForm_component',
        canonicalFilename: 'index.qwik.mjs_GetForm_component_o1uLqgowy5k',
        hash: 'o1uLqgowy5k',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [58614, 59767],
      },
      s_o4ccBuvIYCs: {
        origin: 'components/header/header.tsx',
        displayName: 'header.tsx_Header_component',
        canonicalFilename: 'header.tsx_Header_component_o4ccBuvIYCs',
        hash: 'o4ccBuvIYCs',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [129, 3367],
      },
      s_o6tPurUTJPc: {
        origin: 'components/santa/santa.tsx',
        displayName: 'santa.tsx_Santa_component',
        canonicalFilename: 'santa.tsx_Santa_component_o6tPurUTJPc',
        hash: 'o6tPurUTJPc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [138, 503],
      },
      s_o91wC8IGdho: {
        origin: 'components/stacks/stacks.tsx',
        displayName: 'stacks.tsx_Stacks_component',
        canonicalFilename: 'stacks.tsx_Stacks_component_o91wC8IGdho',
        hash: 'o91wC8IGdho',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [240, 824],
      },
      s_oOld3bPJ5Ws: {
        origin: 'routes/blog/[blogType]/[slug]/index@blog.tsx',
        displayName: 'index@blog.tsx_index_blog_component',
        canonicalFilename: 'index@blog.tsx_index_blog_component_oOld3bPJ5Ws',
        hash: 'oOld3bPJ5Ws',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [1218, 1617],
      },
      s_pCebMzCWV9M: {
        origin: 'components/contact/contact.tsx',
        displayName: 'contact.tsx_Contact_component',
        canonicalFilename: 'contact.tsx_Contact_component_pCebMzCWV9M',
        hash: 'pCebMzCWV9M',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [1863, 10697],
      },
      s_sZIPqDBaEpc: {
        origin: 'components/timeline/timeline.tsx',
        displayName: 'timeline.tsx_Timeline_component',
        canonicalFilename: 'timeline.tsx_Timeline_component_sZIPqDBaEpc',
        hash: 'sZIPqDBaEpc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [211, 2377],
      },
      s_sdm0n9ZoKr0: {
        origin: 'components/animated-component/animated-component.tsx',
        displayName: 'animated-component.tsx_AnimatedComp_component',
        canonicalFilename:
          'animated-component.tsx_AnimatedComp_component_sdm0n9ZoKr0',
        hash: 'sdm0n9ZoKr0',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [226, 675],
      },
      s_tC1zfRJh9xU: {
        origin: 'components/eggs/eggs.tsx',
        displayName: 'eggs.tsx_Eggs_component',
        canonicalFilename: 'eggs.tsx_Eggs_component_tC1zfRJh9xU',
        hash: 'tC1zfRJh9xU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [136, 518],
      },
      s_tstUEhxLUWc: {
        origin: 'routes/index.tsx',
        displayName: 'index.tsx_routes_component',
        canonicalFilename: 'index.tsx_routes_component_tstUEhxLUWc',
        hash: 'tstUEhxLUWc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [1378, 4949],
      },
      s_x0jeNTb2iQc: {
        origin: 'components/linkItem/linkItem.tsx',
        displayName: 'linkItem.tsx_LinkItem_component',
        canonicalFilename: 'linkItem.tsx_LinkItem_component_x0jeNTb2iQc',
        hash: 'x0jeNTb2iQc',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [247, 1282],
      },
      s_yMerZA5h0Vw: {
        origin: 'routes/projects/index.tsx',
        displayName: 'index.tsx_projects_component',
        canonicalFilename: 'index.tsx_projects_component_yMerZA5h0Vw',
        hash: 'yMerZA5h0Vw',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [319, 628],
      },
      s_zH94hIe0Ick: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_qwikifyQrl_component',
        canonicalFilename: 'index.qwik.mjs_qwikifyQrl_component_zH94hIe0Ick',
        hash: 'zH94hIe0Ick',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !0,
        loc: [4948, 8083],
      },
      s_2A8V0pFvVL0: {
        origin: 'components/blog/blogComponent.tsx',
        displayName: 'blogComponent.tsx_BlogComponent_component_useStyles',
        canonicalFilename:
          'blogComponent.tsx_BlogComponent_component_useStyles_2A8V0pFvVL0',
        hash: '2A8V0pFvVL0',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_TBWAb6R23ho',
        loc: [1905, 1911],
      },
      s_DBNWDwXgCow: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component_useStyles',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_useStyles_DBNWDwXgCow',
        hash: 'DBNWDwXgCow',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_D4XD62ic8NY',
        loc: [24170, 24204],
      },
      s_T3RlYu50F5I: {
        origin: 'routes/privacy-policy/ita/index.tsx',
        displayName: 'index.tsx_ita_component_useStyles',
        canonicalFilename: 'index.tsx_ita_component_useStyles_T3RlYu50F5I',
        hash: 'T3RlYu50F5I',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_6t16ZFngrIc',
        loc: [358, 364],
      },
      s_fkYY5aATgBY: {
        origin: 'routes/privacy-policy/eng/index.tsx',
        displayName: 'index.tsx_eng_component_useStyles',
        canonicalFilename: 'index.tsx_eng_component_useStyles_fkYY5aATgBY',
        hash: 'fkYY5aATgBY',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_jXDkCe4BzZI',
        loc: [358, 364],
      },
      s_0HhqKOJuYCM: {
        origin: 'components/rudolph/rudolph.tsx',
        displayName: 'rudolph.tsx_Rudolph_component_useStylesScoped',
        canonicalFilename:
          'rudolph.tsx_Rudolph_component_useStylesScoped_0HhqKOJuYCM',
        hash: '0HhqKOJuYCM',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_0Bd6yCHL7MI',
        loc: [169, 175],
      },
      s_0w9yJ3mmM7E: {
        origin: 'routes/index.tsx',
        displayName: 'index.tsx_routes_component_useStylesScoped',
        canonicalFilename:
          'index.tsx_routes_component_useStylesScoped_0w9yJ3mmM7E',
        hash: '0w9yJ3mmM7E',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_tstUEhxLUWc',
        loc: [1405, 1411],
      },
      s_BsrO2LM87qo: {
        origin: 'components/santa/santa.tsx',
        displayName: 'santa.tsx_Santa_component_useStylesScoped',
        canonicalFilename:
          'santa.tsx_Santa_component_useStylesScoped_BsrO2LM87qo',
        hash: 'BsrO2LM87qo',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_o6tPurUTJPc',
        loc: [165, 171],
      },
      s_CkFs2bTI3Zs: {
        origin: 'components/bubble/bubble.tsx',
        displayName: 'bubble.tsx_Bubble_component_useStylesScoped',
        canonicalFilename:
          'bubble.tsx_Bubble_component_useStylesScoped_CkFs2bTI3Zs',
        hash: 'CkFs2bTI3Zs',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_0hvFUpzGAyM',
        loc: [167, 173],
      },
      s_M7JMtWmYWDA: {
        origin: 'components/eggs/eggs.tsx',
        displayName: 'eggs.tsx_Eggs_component_useStylesScoped',
        canonicalFilename:
          'eggs.tsx_Eggs_component_useStylesScoped_M7JMtWmYWDA',
        hash: 'M7JMtWmYWDA',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_tC1zfRJh9xU',
        loc: [163, 169],
      },
      s_hkT84xKSMLE: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs',
        displayName:
          'index.qwik.mjs_qwikifyQrl_component_stylesscoped_useStylesScoped',
        canonicalFilename:
          'index.qwik.mjs_qwikifyQrl_component_stylesscoped_useStylesScoped_hkT84xKSMLE',
        hash: 'hkT84xKSMLE',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_zH94hIe0Ick',
        loc: [5102, 5165],
      },
      s_ik8BQrQgw9g: {
        origin: 'components/cat/cat-walk.tsx',
        displayName: 'cat-walk.tsx_CatWalk_component_useStylesScoped',
        canonicalFilename:
          'cat-walk.tsx_CatWalk_component_useStylesScoped_ik8BQrQgw9g',
        hash: 'ik8BQrQgw9g',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_0DhRUxBQU40',
        loc: [170, 176],
      },
      s_xTYSAGLBrBU: {
        origin: 'components/cat/cat.tsx',
        displayName: 'cat.tsx_Cat_component_useStylesScoped',
        canonicalFilename: 'cat.tsx_Cat_component_useStylesScoped_xTYSAGLBrBU',
        hash: 'xTYSAGLBrBU',
        ctxKind: 'function',
        ctxName: 'useStylesScoped$',
        captures: !1,
        parent: 's_k9rs7QcCFAU',
        loc: [161, 167],
      },
      s_4CJH25Ljv0c: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_minRange',
        canonicalFilename: 'index.qwik.mjs_minRange_4CJH25Ljv0c',
        hash: '4CJH25Ljv0c',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [42769, 42842],
      },
      s_6LYztwGzxAA: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_useWakeupSignal_activate',
        canonicalFilename:
          'index.qwik.mjs_useWakeupSignal_activate_6LYztwGzxAA',
        hash: '6LYztwGzxAA',
        ctxKind: 'function',
        ctxName: 'activate',
        captures: !0,
        loc: [2477, 2562],
      },
      s_AObcoQang9s: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_zodFieldQrl',
        canonicalFilename: 'index.qwik.mjs_zodFieldQrl_AObcoQang9s',
        hash: 'AObcoQang9s',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [34396, 34545],
      },
      s_AqRXUgC443E: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_maxTotalSize',
        canonicalFilename: 'index.qwik.mjs_maxTotalSize_AqRXUgC443E',
        hash: 'AqRXUgC443E',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [42162, 42282],
      },
      s_EWbqm6di3Sw: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_required',
        canonicalFilename: 'index.qwik.mjs_required_EWbqm6di3Sw',
        hash: 'EWbqm6di3Sw',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [43383, 43474],
      },
      s_HsGYxytrly4: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Form_form_onSubmit',
        canonicalFilename: 'index.qwik.mjs_Form_form_onSubmit_HsGYxytrly4',
        hash: 'HsGYxytrly4',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [57745, 57859],
      },
      s_KcTWxoK9iXo: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_valiFieldQrl',
        canonicalFilename: 'index.qwik.mjs_valiFieldQrl_KcTWxoK9iXo',
        hash: 'KcTWxoK9iXo',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [3015, 3293],
      },
      s_LZZ0ijqm0lk: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_email',
        canonicalFilename: 'index.qwik.mjs_email_LZZ0ijqm0lk',
        hash: 'LZZ0ijqm0lk',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [41486, 41643],
      },
      s_M0rcc18CCgA: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Field_Lifecycle_children_3',
        canonicalFilename:
          'index.qwik.mjs_Field_Lifecycle_children_3_M0rcc18CCgA',
        hash: 'M0rcc18CCgA',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [37160, 37301],
      },
      s_NSwSC1UQpPU: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_zodFormQrl',
        canonicalFilename: 'index.qwik.mjs_zodFormQrl_NSwSC1UQpPU',
        hash: 'NSwSC1UQpPU',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [34641, 34995],
      },
      s_QoaFfgct0gI: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_serverQrl_rpc',
        canonicalFilename: 'index.qwik.mjs_serverQrl_rpc_QoaFfgct0gI',
        hash: 'QoaFfgct0gI',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [52839, 55816],
      },
      s_S9rrNUg5Cko: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_maxSize',
        canonicalFilename: 'index.qwik.mjs_maxSize_S9rrNUg5Cko',
        hash: 'S9rrNUg5Cko',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [41954, 42102],
      },
      s_UYiy8OdUmWo: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Field_Lifecycle_children_1',
        canonicalFilename:
          'index.qwik.mjs_Field_Lifecycle_children_1_UYiy8OdUmWo',
        hash: 'UYiy8OdUmWo',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [36815, 36996],
      },
      s_XMqlqhHFmmQ: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_minSize',
        canonicalFilename: 'index.qwik.mjs_minSize_XMqlqhHFmmQ',
        hash: 'XMqlqhHFmmQ',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [42897, 43045],
      },
      s_Yd0S4NGStHU: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_minTotalSize',
        canonicalFilename: 'index.qwik.mjs_minTotalSize_Yd0S4NGStHU',
        hash: 'Yd0S4NGStHU',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [43105, 43225],
      },
      s_Zam4T0v4IrY: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_valiFormQrl',
        canonicalFilename: 'index.qwik.mjs_valiFormQrl_Zam4T0v4IrY',
        hash: 'Zam4T0v4IrY',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [3392, 3812],
      },
      s_ac4VqAnAxQ0: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Field_Lifecycle_children_2',
        canonicalFilename:
          'index.qwik.mjs_Field_Lifecycle_children_2_ac4VqAnAxQ0',
        hash: 'ac4VqAnAxQ0',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [37018, 37140],
      },
      s_bN6zFlHfzfQ: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_toLowerCase_toCustom',
        canonicalFilename: 'index.qwik.mjs_toLowerCase_toCustom_bN6zFlHfzfQ',
        hash: 'bN6zFlHfzfQ',
        ctxKind: 'function',
        ctxName: 'toCustom$',
        captures: !1,
        loc: [40962, 41004],
      },
      s_cSgeVFaDGFw: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_mimeType',
        canonicalFilename: 'index.qwik.mjs_mimeType_cSgeVFaDGFw',
        hash: 'cSgeVFaDGFw',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [42424, 42586],
      },
      s_e9muVT8kIZo: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Field_Lifecycle_children',
        canonicalFilename:
          'index.qwik.mjs_Field_Lifecycle_children_e9muVT8kIZo',
        hash: 'e9muVT8kIZo',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [36725, 36794],
      },
      s_fSUCqxr5kAQ: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_maxRange',
        canonicalFilename: 'index.qwik.mjs_maxRange_fSUCqxr5kAQ',
        hash: 'fSUCqxr5kAQ',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [41826, 41899],
      },
      s_fa5jrRWO58Y: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_url',
        canonicalFilename: 'index.qwik.mjs_url_fa5jrRWO58Y',
        hash: 'fa5jrRWO58Y',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [43512, 43633],
      },
      s_gg9h4thIbzI: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_formActionQrl_globalActionQrl',
        canonicalFilename:
          'index.qwik.mjs_formActionQrl_globalActionQrl_gg9h4thIbzI',
        hash: 'gg9h4thIbzI',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [1110, 2880],
      },
      s_h5ZUTiJtg0M: {
        origin: 'integrations/react/QDatoText.tsx',
        displayName: 'QDatoText.tsx_QDatoText_qwikify',
        canonicalFilename: 'QDatoText.tsx_QDatoText_qwikify_h5ZUTiJtg0M',
        hash: 'h5ZUTiJtg0M',
        ctxKind: 'function',
        ctxName: 'qwikify$',
        captures: !1,
        loc: [1176, 1184],
      },
      s_iX0Wv91fJIY: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_spaInit_event',
        canonicalFilename: 'index.qwik.mjs_spaInit_event_iX0Wv91fJIY',
        hash: 'iX0Wv91fJIY',
        ctxKind: 'function',
        ctxName: 'event$',
        captures: !1,
        loc: [1356, 7019],
      },
      s_iZeC0Oh401c: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_toCustomQrl',
        canonicalFilename: 'index.qwik.mjs_toCustomQrl_iZeC0Oh401c',
        hash: 'iZeC0Oh401c',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [40767, 40856],
      },
      s_j9BXpLjplGM: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_pattern',
        canonicalFilename: 'index.qwik.mjs_pattern_j9BXpLjplGM',
        hash: 'j9BXpLjplGM',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [43280, 43340],
      },
      s_jgxEusSojEA: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_toUpperCase_toCustom',
        canonicalFilename: 'index.qwik.mjs_toUpperCase_toCustom_jgxEusSojEA',
        hash: 'jgxEusSojEA',
        ctxKind: 'function',
        ctxName: 'toCustom$',
        captures: !1,
        loc: [41167, 41209],
      },
      s_tF0xoLbwQWg: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_maxLength',
        canonicalFilename: 'index.qwik.mjs_maxLength_tF0xoLbwQWg',
        hash: 'tF0xoLbwQWg',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [41700, 41770],
      },
      s_vqh5IpcWAkw: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_minLength',
        canonicalFilename: 'index.qwik.mjs_minLength_vqh5IpcWAkw',
        hash: 'vqh5IpcWAkw',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [42643, 42713],
      },
      s_wK63AiDJbYc: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_toTrimmed_toCustom',
        canonicalFilename: 'index.qwik.mjs_toTrimmed_toCustom_wK63AiDJbYc',
        hash: 'wK63AiDJbYc',
        ctxKind: 'function',
        ctxName: 'toCustom$',
        captures: !1,
        loc: [41067, 41102],
      },
      s_yY91eDXPInU: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_value',
        canonicalFilename: 'index.qwik.mjs_value_yY91eDXPInU',
        hash: 'yY91eDXPInU',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [43686, 43761],
      },
      s_yv4EUxL7Sw4: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_routeActionQrl_action_submit',
        canonicalFilename:
          'index.qwik.mjs_routeActionQrl_action_submit_yv4EUxL7Sw4',
        hash: 'yv4EUxL7Sw4',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [44752, 46397],
      },
      s_zegRNyaBlL4: {
        origin:
          '../node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
        displayName: 'index.qwik.mjs_customQrl',
        canonicalFilename: 'index.qwik.mjs_customQrl_zegRNyaBlL4',
        hash: 'zegRNyaBlL4',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [41275, 41400],
      },
      s_CaT9cMPIbPY: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityMockProvider_component_goto',
        canonicalFilename:
          'index.qwik.mjs_QwikCityMockProvider_component_goto_CaT9cMPIbPY',
        hash: 'CaT9cMPIbPY',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_gqIDJ86ux1w',
        loc: [38917, 38995],
      },
      s_EHyjUobaAp4: {
        origin: 'components/blog/blogHomeComponent.tsx',
        displayName:
          'blogHomeComponent.tsx_blogHomeComponent_component_handleSearch',
        canonicalFilename:
          'blogHomeComponent.tsx_blogHomeComponent_component_handleSearch_EHyjUobaAp4',
        hash: 'EHyjUobaAp4',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_T5FLviseEE0',
        loc: [601, 1125],
      },
      s_EmVjnisSR5Y: {
        origin: 'components/contact/contact.tsx',
        displayName: 'contact.tsx_Contact_component_handleSubmit',
        canonicalFilename:
          'contact.tsx_Contact_component_handleSubmit_EmVjnisSR5Y',
        hash: 'EmVjnisSR5Y',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_pCebMzCWV9M',
        loc: [2234, 2865],
      },
      s_Emm0n9SRfY8: {
        origin: 'components/contact/contact.tsx',
        displayName:
          'contact.tsx_Contact_component_Fragment_div_div_div_button_onClick',
        canonicalFilename:
          'contact.tsx_Contact_component_Fragment_div_div_div_button_onClick_Emm0n9SRfY8',
        hash: 'Emm0n9SRfY8',
        ctxKind: 'eventHandler',
        ctxName: 'onClick$',
        captures: !0,
        parent: 's_pCebMzCWV9M',
        loc: [9819, 9890],
      },
      s_FEnOt2TvnW8: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_GetForm_component_form_onSubmit_1',
        canonicalFilename:
          'index.qwik.mjs_GetForm_component_form_onSubmit_1_FEnOt2TvnW8',
        hash: 'FEnOt2TvnW8',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_o1uLqgowy5k',
        loc: [59369, 59705],
      },
      s_JQka7qFSgTA: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Link_component_handlePrefetch',
        canonicalFilename:
          'index.qwik.mjs_Link_component_handlePrefetch_JQka7qFSgTA',
        hash: 'JQka7qFSgTA',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_9C3L9HsfW0c',
        loc: [40471, 40820],
      },
      s_K0NszdGwrNo: {
        origin: 'components/newsletter/newsletter.tsx',
        displayName: 'newsletter.tsx_Newsletter_component_useForm_valiForm',
        canonicalFilename:
          'newsletter.tsx_Newsletter_component_useForm_valiForm_K0NszdGwrNo',
        hash: 'K0NszdGwrNo',
        ctxKind: 'function',
        ctxName: 'valiForm$',
        captures: !1,
        parent: 's_0pBeUwLuB88',
        loc: [929, 945],
      },
      s_MPTU77x6T2Q: {
        origin: 'components/blog/blogComponent.tsx',
        displayName: 'blogComponent.tsx_BlogComponent_component_onCloseWarning',
        canonicalFilename:
          'blogComponent.tsx_BlogComponent_component_onCloseWarning_MPTU77x6T2Q',
        hash: 'MPTU77x6T2Q',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_TBWAb6R23ho',
        loc: [3612, 3703],
      },
      s_NBHcMZTJPes: {
        origin: 'components/newsletter/newsletter.tsx',
        displayName:
          'newsletter.tsx_Newsletter_component_Fragment_div_div_div_button_onClick',
        canonicalFilename:
          'newsletter.tsx_Newsletter_component_Fragment_div_div_div_button_onClick_NBHcMZTJPes',
        hash: 'NBHcMZTJPes',
        ctxKind: 'eventHandler',
        ctxName: 'onClick$',
        captures: !0,
        parent: 's_0pBeUwLuB88',
        loc: [7032, 7107],
      },
      s_SHMqyqh5H4E: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component_goto',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_goto_SHMqyqh5H4E',
        hash: 'SHMqyqh5H4E',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_D4XD62ic8NY',
        loc: [26358, 28432],
      },
      s_SqNyGWM7k0k: {
        origin: 'routes/button-game/index.tsx',
        displayName: 'index.tsx_button_game_component_tryPassLevel',
        canonicalFilename:
          'index.tsx_button_game_component_tryPassLevel_SqNyGWM7k0k',
        hash: 'SqNyGWM7k0k',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_lVhXlSc0AIU',
        loc: [924, 1508],
      },
      s_a7tEUukrY5Q: {
        origin: 'components/blog/blogComponent.tsx',
        displayName: 'blogComponent.tsx_BlogComponent_component_handleSubmit',
        canonicalFilename:
          'blogComponent.tsx_BlogComponent_component_handleSubmit_a7tEUukrY5Q',
        hash: 'a7tEUukrY5Q',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_TBWAb6R23ho',
        loc: [2263, 3471],
      },
      s_dKZoR4MCcs0: {
        origin: 'components/header/header.tsx',
        displayName: 'header.tsx_Header_component_handleItemCLick',
        canonicalFilename:
          'header.tsx_Header_component_handleItemCLick_dKZoR4MCcs0',
        hash: 'dKZoR4MCcs0',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_o4ccBuvIYCs',
        loc: [165, 267],
      },
      s_hKb0i0wO1HM: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Link_component_handleClick',
        canonicalFilename:
          'index.qwik.mjs_Link_component_handleClick_hKb0i0wO1HM',
        hash: 'hKb0i0wO1HM',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_9C3L9HsfW0c',
        loc: [41070, 41496],
      },
      s_hisV3sNP0XM: {
        origin: 'components/contact/contact.tsx',
        displayName: 'contact.tsx_Contact_component_useForm_valiForm',
        canonicalFilename:
          'contact.tsx_Contact_component_useForm_valiForm_hisV3sNP0XM',
        hash: 'hisV3sNP0XM',
        ctxKind: 'function',
        ctxName: 'valiForm$',
        captures: !1,
        parent: 's_pCebMzCWV9M',
        loc: [2159, 2172],
      },
      s_jWy0aWw4FvU: {
        origin: 'components/footer/footer.tsx',
        displayName:
          'footer.tsx_Footer_component_Fragment_footer_nav_label_onClick',
        canonicalFilename:
          'footer.tsx_Footer_component_Fragment_footer_nav_label_onClick_jWy0aWw4FvU',
        hash: 'jWy0aWw4FvU',
        ctxKind: 'eventHandler',
        ctxName: 'onClick$',
        captures: !0,
        parent: 's_GvPhUJ5Kg9Q',
        loc: [3322, 3354],
      },
      s_qV71460WFx8: {
        origin: 'components/newsletter/newsletter.tsx',
        displayName: 'newsletter.tsx_Newsletter_component_handleSubmit',
        canonicalFilename:
          'newsletter.tsx_Newsletter_component_handleSubmit_qV71460WFx8',
        hash: 'qV71460WFx8',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_0pBeUwLuB88',
        loc: [1023, 1692],
      },
      s_s1K6mJeDXyI: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_GetForm_component_form_onSubmit',
        canonicalFilename:
          'index.qwik.mjs_GetForm_component_form_onSubmit_s1K6mJeDXyI',
        hash: 's1K6mJeDXyI',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_o1uLqgowy5k',
        loc: [58978, 59358],
      },
      s_v9EqJiBRR0U: {
        origin: 'components/blog/blogComponent.tsx',
        displayName:
          'blogComponent.tsx_BlogComponent_component_useForm_valiForm',
        canonicalFilename:
          'blogComponent.tsx_BlogComponent_component_useForm_valiForm_v9EqJiBRR0U',
        hash: 'v9EqJiBRR0U',
        ctxKind: 'function',
        ctxName: 'valiForm$',
        captures: !1,
        parent: 's_TBWAb6R23ho',
        loc: [2188, 2201],
      },
      s_wxKQczXDgGA: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName:
          'index.qwik.mjs_QwikCityProvider_component_registerPreventNav',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_registerPreventNav_wxKQczXDgGA',
        hash: 'wxKQczXDgGA',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_D4XD62ic8NY',
        loc: [25461, 26338],
      },
    },
    mapping: {
      s_7V8C6m30W8E: 'q-1b7b904b.js',
      s_EWIT9ENzUX0: 'q-ad1710ea.js',
      s_xm092zOFEuY: 'q-55751edd.js',
      s_0EhuNoWgjY4: 'q-f0c55488.js',
      s_CHnWD2D8Ibg: 'q-4fee56e2.js',
      s_zlu40LlrNis: 'q-cdc3709f.js',
      s_03cbbuaQymY: 'q-bf170860.js',
      s_0Bd6yCHL7MI: 'q-c5cba8c7.js',
      s_0DhRUxBQU40: 'q-d13f67f9.js',
      s_0hvFUpzGAyM: 'q-739bbd36.js',
      s_0pBeUwLuB88: 'q-b24af7f6.js',
      s_2Fq8wIUpq5I: 'q-1fa6c33e.js',
      s_6Y0uFrvPmQs: 'q-6e332a13.js',
      s_6t16ZFngrIc: 'q-ac693190.js',
      s_7duOWr5CdMs: 'q-2d218c05.js',
      s_8jOBWsjxgB8: 'q-36b52b38.js',
      s_8vZTs9fM6iI: 'q-6823d332.js',
      s_9C3L9HsfW0c: 'q-c8fb9159.js',
      s_AMfhPV9ZgUw: 'q-0423706b.js',
      s_D4XD62ic8NY: 'q-cf32db7f.js',
      s_F4XGSf5645s: 'q-685760d8.js',
      s_GvPhUJ5Kg9Q: 'q-4a2a0f3e.js',
      s_GzGDOMI0hrg: 'q-6a512b8a.js',
      s_Jevt7v9CDh4: 'q-d1d6dc3c.js',
      s_LdHC7hJQ16Y: 'q-e08ae665.js',
      s_OR8GlEL3LEE: 'q-ae145814.js',
      s_T5FLviseEE0: 'q-6a405fe6.js',
      s_TBWAb6R23ho: 'q-d7b70c8d.js',
      s_Vn31O9w9kZ8: 'q-0b008694.js',
      s_Yj7Oj0dysis: 'q-56969448.js',
      s_aHaxQW3gUTM: 'q-52e0adb8.js',
      s_aKDVerZD54c: 'q-4591c419.js',
      s_bavVtvgbxHE: 'q-d91b978a.js',
      s_e0g7Sn2KjsA: 'q-d8e4ee6a.js',
      s_eXD0K9bzzlo: 'q-ba477472.js',
      s_gqIDJ86ux1w: 'q-a4f85ac7.js',
      s_jXDkCe4BzZI: 'q-c79d3c19.js',
      s_k9rs7QcCFAU: 'q-e17b270d.js',
      s_kc55RtBXaKM: 'q-8d5e63a6.js',
      s_lVhXlSc0AIU: 'q-ac2829a6.js',
      s_o1uLqgowy5k: 'q-e9b99868.js',
      s_o4ccBuvIYCs: 'q-750c28b0.js',
      s_o6tPurUTJPc: 'q-efacb2dc.js',
      s_o91wC8IGdho: 'q-cecf1b60.js',
      s_oOld3bPJ5Ws: 'q-9433744a.js',
      s_pCebMzCWV9M: 'q-35eabcb1.js',
      s_sZIPqDBaEpc: 'q-73c2aea4.js',
      s_sdm0n9ZoKr0: 'q-801bbed9.js',
      s_tC1zfRJh9xU: 'q-a6f723fe.js',
      s_tstUEhxLUWc: 'q-d9f9bbd0.js',
      s_x0jeNTb2iQc: 'q-ef526c1c.js',
      s_yMerZA5h0Vw: 'q-4043d6aa.js',
      s_zH94hIe0Ick: 'q-ab1e2fe1.js',
      s_2A8V0pFvVL0: 'q-cce99e68.js',
      s_DBNWDwXgCow: 'q-66de24ab.js',
      s_T3RlYu50F5I: 'q-549043e6.js',
      s_fkYY5aATgBY: 'q-3c198ef6.js',
      s_0HhqKOJuYCM: 'q-d705464e.js',
      s_0w9yJ3mmM7E: 'q-bad7e75e.js',
      s_BsrO2LM87qo: 'q-5d0273bf.js',
      s_CkFs2bTI3Zs: 'q-0a3017ca.js',
      s_M7JMtWmYWDA: 'q-0756b131.js',
      s_hkT84xKSMLE: 'q-39d118db.js',
      s_ik8BQrQgw9g: 'q-48eaaf81.js',
      s_xTYSAGLBrBU: 'q-3df50034.js',
      s_4CJH25Ljv0c: 'q-76fa87e8.js',
      s_6LYztwGzxAA: 'q-9f2e1462.js',
      s_AObcoQang9s: 'q-bf3575ae.js',
      s_AqRXUgC443E: 'q-bd1fde7b.js',
      s_EWbqm6di3Sw: 'q-49c86949.js',
      s_HsGYxytrly4: 'q-f6539fe1.js',
      s_KcTWxoK9iXo: 'q-dc51d921.js',
      s_LZZ0ijqm0lk: 'q-659052aa.js',
      s_M0rcc18CCgA: 'q-ae74dd14.js',
      s_NSwSC1UQpPU: 'q-fa5e2dc4.js',
      s_QoaFfgct0gI: 'q-a332a1dc.js',
      s_S9rrNUg5Cko: 'q-168d614a.js',
      s_UYiy8OdUmWo: 'q-e42259d6.js',
      s_XMqlqhHFmmQ: 'q-3098143b.js',
      s_Yd0S4NGStHU: 'q-813730b7.js',
      s_Zam4T0v4IrY: 'q-2e553166.js',
      s_ac4VqAnAxQ0: 'q-7c694359.js',
      s_bN6zFlHfzfQ: 'q-bd558bc5.js',
      s_cSgeVFaDGFw: 'q-fb57866d.js',
      s_e9muVT8kIZo: 'q-8e6fcff6.js',
      s_fSUCqxr5kAQ: 'q-28343ad1.js',
      s_fa5jrRWO58Y: 'q-8e3f873d.js',
      s_gg9h4thIbzI: 'q-4639c84f.js',
      s_h5ZUTiJtg0M: 'q-a0ff2d20.js',
      s_iX0Wv91fJIY: 'q-899b12ed.js',
      s_iZeC0Oh401c: 'q-93e7c9b7.js',
      s_j9BXpLjplGM: 'q-cba81f6e.js',
      s_jgxEusSojEA: 'q-f716e75d.js',
      s_tF0xoLbwQWg: 'q-cdd4a425.js',
      s_vqh5IpcWAkw: 'q-745a17f6.js',
      s_wK63AiDJbYc: 'q-e4dc7563.js',
      s_yY91eDXPInU: 'q-cf5f8fa5.js',
      s_yv4EUxL7Sw4: 'q-21a52da7.js',
      s_zegRNyaBlL4: 'q-46227876.js',
      s_CaT9cMPIbPY: 'q-fa5b8268.js',
      s_EHyjUobaAp4: 'q-a24ab611.js',
      s_EmVjnisSR5Y: 'q-d352143c.js',
      s_Emm0n9SRfY8: 'q-78ce4e6d.js',
      s_FEnOt2TvnW8: 'q-194f01bd.js',
      s_JQka7qFSgTA: 'q-c80adf81.js',
      s_K0NszdGwrNo: 'q-31e2e6e4.js',
      s_MPTU77x6T2Q: 'q-4084d96a.js',
      s_NBHcMZTJPes: 'q-7588d1d9.js',
      s_SHMqyqh5H4E: 'q-5d896105.js',
      s_SqNyGWM7k0k: 'q-65ca55d3.js',
      s_a7tEUukrY5Q: 'q-bc34c240.js',
      s_dKZoR4MCcs0: 'q-754aec20.js',
      s_hKb0i0wO1HM: 'q-0aa35c18.js',
      s_hisV3sNP0XM: 'q-b8f0dd98.js',
      s_jWy0aWw4FvU: 'q-f14942ed.js',
      s_qV71460WFx8: 'q-3f7fc853.js',
      s_s1K6mJeDXyI: 'q-5dcaf0da.js',
      s_v9EqJiBRR0U: 'q-30fd3f98.js',
      s_wxKQczXDgGA: 'q-e7f9df46.js',
    },
    bundles: {
      '..\\service-worker.js': {
        size: 2808,
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/service-worker.mjs',
          'src/routes/service-worker.ts',
        ],
      },
      'q-0423706b.js': {
        size: 107,
        imports: ['q-ae74dd14.js', 'q-cdc3709f.js', 'q-f6539fe1.js'],
        symbols: ['s_AMfhPV9ZgUw'],
      },
      'q-0756b131.js': {
        size: 83,
        imports: ['q-a6f723fe.js', 'q-f6539fe1.js'],
        symbols: ['s_M7JMtWmYWDA'],
      },
      'q-0a3017ca.js': {
        size: 88,
        imports: ['q-739bbd36.js', 'q-f6539fe1.js'],
        symbols: ['s_CkFs2bTI3Zs'],
      },
      'q-0aa35c18.js': {
        size: 135,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-c80adf81.js', 'q-f6539fe1.js'],
        symbols: ['s_hKb0i0wO1HM'],
      },
      'q-0b008694.js': {
        size: 1533,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/svg/england-svg.tsx_EnglandSvg_component_Vn31O9w9kZ8.js',
        ],
        symbols: ['s_Vn31O9w9kZ8'],
      },
      'q-168d614a.js': {
        size: 202,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_maxSize_S9rrNUg5Cko.js',
        ],
        symbols: ['s_S9rrNUg5Cko'],
      },
      'q-194f01bd.js': {
        size: 111,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        symbols: ['s_FEnOt2TvnW8'],
      },
      'q-1b7b904b.js': {
        size: 135,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-e7f9df46.js', 'q-f6539fe1.js'],
        symbols: ['s_7V8C6m30W8E'],
      },
      'q-1fa6c33e.js': {
        size: 717,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'src/components/router-head/router-head.tsx_RouterHead_component_2Fq8wIUpq5I.js',
        ],
        symbols: ['s_2Fq8wIUpq5I'],
      },
      'q-21a52da7.js': {
        size: 813,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_routeActionQrl_action_submit_yv4EUxL7Sw4.js',
        ],
        symbols: ['s_yv4EUxL7Sw4'],
      },
      'q-28343ad1.js': {
        size: 166,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_maxRange_fSUCqxr5kAQ.js',
        ],
        symbols: ['s_fSUCqxr5kAQ'],
      },
      'q-2d218c05.js': {
        size: 1526,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: [
          'src/routes/blog/[blogType]/index@blog.tsx',
          'src/routes/blog/[blogType]/index@blog.tsx_index_blog_component_7duOWr5CdMs.js',
        ],
        symbols: ['s_7duOWr5CdMs'],
      },
      'q-2e553166.js': {
        size: 334,
        isTask: !0,
        imports: ['q-dc51d921.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_valiFormQrl_Zam4T0v4IrY.js',
        ],
        symbols: ['s_Zam4T0v4IrY'],
      },
      'q-3098143b.js': {
        size: 202,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_minSize_XMqlqhHFmmQ.js',
        ],
        symbols: ['s_XMqlqhHFmmQ'],
      },
      'q-30fd3f98.js': {
        size: 184,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_v9EqJiBRR0U'],
      },
      'q-31e2e6e4.js': {
        size: 208,
        imports: [
          'q-39d118db.js',
          'q-3f7fc853.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_K0NszdGwrNo'],
      },
      'q-35eabcb1.js': {
        size: 155,
        imports: [
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-b8f0dd98.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_pCebMzCWV9M'],
      },
      'q-36b52b38.js': {
        size: 982,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_RouterOutlet_component_8jOBWsjxgB8.js',
        ],
        symbols: ['s_8jOBWsjxgB8'],
      },
      'q-3710b96b.js': {
        size: 322,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-d91b978a.js'],
        origins: ['src/routes/404.tsx'],
      },
      'q-39d118db.js': {
        size: 143894,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-9f2e1462.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs',
          'node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs_qwikifyQrl_component_stylesscoped_useStylesScoped_hkT84xKSMLE.js',
          'node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs_qwikifyQrl_component_useTask_EWIT9ENzUX0.js',
          'node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs_qwikifyQrl_component_zH94hIe0Ick.js',
          'node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.production.min.js',
          'node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/client.js',
          'node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js',
          'node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js',
          'node_modules/.pnpm/react@18.2.0/node_modules/react/index.js',
          'node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js',
          'node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js',
        ],
        symbols: ['s_hkT84xKSMLE'],
      },
      'q-3c198ef6.js': {
        size: 5494,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: ['q-bf170860.js'],
        origins: [
          'src/components/svg/italian-svg.tsx',
          'src/routes/privacy-policy/eng/index.tsx_eng_component_jXDkCe4BzZI.js',
          'src/routes/privacy-policy/eng/index.tsx_eng_component_useStyles_fkYY5aATgBY.js',
        ],
        symbols: ['s_fkYY5aATgBY'],
      },
      'q-3df50034.js': {
        size: 88,
        imports: ['q-e17b270d.js', 'q-f6539fe1.js'],
        symbols: ['s_xTYSAGLBrBU'],
      },
      'q-3f7fc853.js': {
        size: 5828,
        isTask: !0,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: [
          'src/components/newsletter/newsletter.tsx',
          'src/components/newsletter/newsletter.tsx_Newsletter_component_0pBeUwLuB88.js',
          'src/components/newsletter/newsletter.tsx_Newsletter_component_Fragment_div_div_div_button_onClick_NBHcMZTJPes.js',
          'src/components/newsletter/newsletter.tsx_Newsletter_component_handleSubmit_qV71460WFx8.js',
          'src/components/newsletter/newsletter.tsx_Newsletter_component_useForm_valiForm_K0NszdGwrNo.js',
        ],
        symbols: ['s_qV71460WFx8'],
      },
      'q-4043d6aa.js': {
        size: 597,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-73c2aea4.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-d9f9bbd0.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: [
          'src/routes/projects/index.tsx_projects_component_yMerZA5h0Vw.js',
        ],
        symbols: ['s_yMerZA5h0Vw'],
      },
      'q-4084d96a.js': {
        size: 207,
        isTask: !0,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_MPTU77x6T2Q'],
      },
      'q-428048bf.js': {
        size: 350,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-c79d3c19.js'],
        origins: ['src/routes/privacy-policy/eng/index.tsx'],
      },
      'q-4591c419.js': {
        size: 1123,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-73c2aea4.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-d9f9bbd0.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: [
          'src/routes/unsubscribed-failed/index.tsx_unsubscribed_failed_component_aKDVerZD54c.js',
        ],
        symbols: ['s_aKDVerZD54c'],
      },
      'q-46227876.js': {
        size: 206,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_customQrl_zegRNyaBlL4.js',
        ],
        symbols: ['s_zegRNyaBlL4'],
      },
      'q-4639c84f.js': {
        size: 3843,
        isTask: !0,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        dynamicImports: ['q-b25bb000.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/middleware/request-handler/index.mjs',
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_formActionQrl_globalActionQrl_gg9h4thIbzI.js',
          'node_modules/.pnpm/decode-formdata@0.8.0/node_modules/decode-formdata/dist/index.js',
        ],
        symbols: ['s_gg9h4thIbzI'],
      },
      'q-48eaaf81.js': {
        size: 88,
        imports: ['q-d13f67f9.js', 'q-f6539fe1.js'],
        symbols: ['s_ik8BQrQgw9g'],
      },
      'q-49c86949.js': {
        size: 187,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_required_EWbqm6di3Sw.js',
        ],
        symbols: ['s_EWbqm6di3Sw'],
      },
      'q-4a2a0f3e.js': {
        size: 4134,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'src/components/footer/footer.tsx_Footer_component_Fragment_footer_nav_label_onClick_jWy0aWw4FvU.js',
          'src/components/footer/footer.tsx_Footer_component_GvPhUJ5Kg9Q.js',
          'src/services/common.service.ts',
        ],
        symbols: ['s_GvPhUJ5Kg9Q'],
      },
      'q-4c3810c8.js': {
        size: 363,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-ac693190.js'],
        origins: ['src/routes/privacy-policy/ita/index.tsx'],
      },
      'q-4fee56e2.js': {
        size: 844,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/animated-component/animated-component.tsx_AnimatedComp_component_sdm0n9ZoKr0.js',
          'src/components/animated-component/animated-component.tsx_AnimatedComp_component_useVisibleTask_CHnWD2D8Ibg.js',
          'src/utils/helpers.ts',
        ],
        symbols: ['s_CHnWD2D8Ibg'],
      },
      'q-52e0adb8.js': {
        size: 26151,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/classCallCheck.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/createClass.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/createSuper.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/defineProperty.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/inherits.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/toPrimitive.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/typeof.js',
          'node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/addLeadingZeros/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/assign/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/cloneObject/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/defaultLocale/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/defaultOptions/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/format/formatters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/format/lightFormatters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/format/longFormatters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/protectedTokens/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/requiredArgs/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/roundingMethods/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/setUTCDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/setUTCISODay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/setUTCISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/setUTCWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/_lib/toInteger/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/add/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addBusinessDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addISOWeekYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addMonths/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addQuarters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addWeeks/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/addYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/areIntervalsOverlapping/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/clamp/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/closestIndexTo/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/closestTo/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/compareAsc/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/compareDesc/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/constants/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/daysToWeeks/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInBusinessDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarISOWeekYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarISOWeeks/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarMonths/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarQuarters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarWeeks/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInCalendarYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInISOWeekYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInMonths/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInQuarters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInWeeks/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/differenceInYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachDayOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachHourOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachMinuteOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachMonthOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachQuarterOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachWeekOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachWeekendOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachWeekendOfMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachWeekendOfYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/eachYearOfInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfDecade/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfHour/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfMinute/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfQuarter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfSecond/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfToday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfTomorrow/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/endOfYesterday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/format/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistance/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistanceStrict/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistanceToNow/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDistanceToNowStrict/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatDuration/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatISO/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatISO9075/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatISODuration/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatRFC3339/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatRFC7231/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/formatRelative/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/fromUnixTime/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDate/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDayOfYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDaysInMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDaysInYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDecade/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getDefaultOptions/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getISODay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getISOWeeksInYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getOverlappingDaysInIntervals/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getQuarter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getTime/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getUnixTime/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getWeekOfMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getWeeksInMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/getYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/hoursToMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/hoursToMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/hoursToSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/intervalToDuration/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/intlFormat/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/intlFormatDistance/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isAfter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isBefore/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isDate/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isEqual/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isExists/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isFirstDayOfMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isFriday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isFuture/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isLastDayOfMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isLeapYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isMatch/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isMonday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isPast/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameHour/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameMinute/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameQuarter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameSecond/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSameYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSaturday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isSunday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisHour/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisMinute/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisQuarter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisSecond/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThisYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isThursday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isToday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isTomorrow/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isTuesday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isValid/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isWednesday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isWeekend/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isWithinInterval/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/isYesterday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfDecade/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfQuarter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lastDayOfYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/lightFormat/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/_lib/match/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/locale/en-US/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/max/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/milliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/millisecondsToHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/millisecondsToMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/millisecondsToSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/min/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/minutesToHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/minutesToMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/minutesToSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/monthsToQuarters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/monthsToYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextFriday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextMonday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextSaturday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextSunday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextThursday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextTuesday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/nextWednesday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/Parser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/Setter.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/constants.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/AMPMMidnightParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/AMPMParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/DateParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/DayOfYearParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/DayParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/DayPeriodParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/EraParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/ExtendedYearParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/FractionOfSecondParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/Hour0To11Parser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/Hour0to23Parser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/Hour1To24Parser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/Hour1to12Parser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/ISODayParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/ISOTimezoneWithZParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/ISOWeekYearParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/LocalDayParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/LocalWeekYearParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/MinuteParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/MonthParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/QuarterParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/SecondParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/StandAloneLocalDayParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/StandAloneMonthParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/StandAloneQuarterParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/TimestampMillisecondsParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/TimestampSecondsParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/YearParser.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/parsers/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/_lib/utils.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parse/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parseISO/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/parseJSON/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousFriday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousMonday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousSaturday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousSunday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousThursday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousTuesday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/previousWednesday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/quartersToMonths/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/quartersToYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/roundToNearestMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/secondsToHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/secondsToMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/secondsToMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/set/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setDate/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setDayOfYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setDefaultOptions/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setISODay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setQuarter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/setYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfDay/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfDecade/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfHour/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfISOWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfISOWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfMinute/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfMonth/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfQuarter/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfSecond/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfToday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfTomorrow/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfWeek/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfWeekYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfYear/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/startOfYesterday/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/sub/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subBusinessDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subHours/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subISOWeekYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subMilliseconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subMinutes/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subMonths/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subQuarters/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subSeconds/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subWeeks/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/subYears/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/toDate/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/weeksToDays/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/yearsToMonths/index.js',
          'node_modules/.pnpm/date-fns@2.30.0/node_modules/date-fns/esm/yearsToQuarters/index.js',
          'src/components/articles/articles.tsx_Articles_component_aHaxQW3gUTM.js',
        ],
        symbols: ['s_aHaxQW3gUTM'],
      },
      'q-549043e6.js': {
        size: 208,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ac693190.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_T3RlYu50F5I'],
      },
      'q-55751edd.js': {
        size: 152,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_usePreventNavigateQrl_useVisibleTask_xm092zOFEuY.js',
        ],
        symbols: ['s_xm092zOFEuY'],
      },
      'q-56969448.js': {
        size: 1864,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'src/components/cards/cards.tsx_Cards_component_Yj7Oj0dysis.js',
        ],
        symbols: ['s_Yj7Oj0dysis'],
      },
      'q-5b74adc2.js': {
        size: 350,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-ae145814.js'],
        origins: ['src/routes/unsubscribed/index.tsx'],
      },
      'q-5d0273bf.js': {
        size: 4146,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/santa/santa.css?used&inline',
          'src/components/santa/santa.tsx_Santa_component_o6tPurUTJPc.js',
          'src/components/santa/santa.tsx_Santa_component_useStylesScoped_BsrO2LM87qo.js',
        ],
        symbols: ['s_BsrO2LM87qo'],
      },
      'q-5d896105.js': {
        size: 135,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-e7f9df46.js', 'q-f6539fe1.js'],
        symbols: ['s_SHMqyqh5H4E'],
      },
      'q-5dcaf0da.js': {
        size: 10294,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        dynamicImports: [
          'q-36b52b38.js',
          'q-899b12ed.js',
          'q-c8fb9159.js',
          'q-cf32db7f.js',
        ],
        origins: [
          '@qwik-city-sw-register',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_form_onSubmit_1_FEnOt2TvnW8.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_form_onSubmit_s1K6mJeDXyI.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_o1uLqgowy5k.js',
          'node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs',
        ],
        symbols: ['s_s1K6mJeDXyI'],
      },
      'q-5f986b27.js': {
        size: 125,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['..\\service-worker.js'],
        origins: ['@qwik-city-entries'],
      },
      'q-659052aa.js': {
        size: 270,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_email_LZZ0ijqm0lk.js',
        ],
        symbols: ['s_LZZ0ijqm0lk'],
      },
      'q-65ca55d3.js': {
        size: 111,
        isTask: !0,
        imports: ['q-ac2829a6.js', 'q-f6539fe1.js'],
        symbols: ['s_SqNyGWM7k0k'],
      },
      'q-66de24ab.js': {
        size: 112,
        imports: ['q-5dcaf0da.js', 'q-e7f9df46.js', 'q-f6539fe1.js'],
        symbols: ['s_DBNWDwXgCow'],
      },
      'q-6823d332.js': {
        size: 717,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_Form_form_onSubmit_8vZTs9fM6iI.js',
        ],
        symbols: ['s_8vZTs9fM6iI'],
      },
      'q-685760d8.js': {
        size: 6256,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/santa-hat/santa-hat.tsx_SantaHat_component_F4XGSf5645s.js',
        ],
        symbols: ['s_F4XGSf5645s'],
      },
      'q-6a405fe6.js': {
        size: 2364,
        imports: [
          'q-39d118db.js',
          'q-4fee56e2.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: ['q-8d5e63a6.js'],
        origins: [
          'src/components/blog/blogHomeComponent.tsx_blogHomeComponent_component_T5FLviseEE0.js',
          'src/components/blog/blogHomeComponent.tsx_blogHomeComponent_component_handleSearch_EHyjUobaAp4.js',
          'src/routes/blog/[blogType]/all/index@blog.tsx',
        ],
        symbols: ['s_T5FLviseEE0'],
      },
      'q-6a512b8a.js': {
        size: 655,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/finance/no-tips/no-tips.tsx_NoTips_component_GzGDOMI0hrg.js',
        ],
        symbols: ['s_GzGDOMI0hrg'],
      },
      'q-6e332a13.js': {
        size: 1675,
        imports: [
          'q-39d118db.js',
          'q-3f7fc853.js',
          'q-4a2a0f3e.js',
          'q-52e0adb8.js',
          'q-5dcaf0da.js',
          'q-73c2aea4.js',
          'q-ae74dd14.js',
          'q-b8f0dd98.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-e08ae665.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: [
          'q-a6f723fe.js',
          'q-c5cba8c7.js',
          'q-d13f67f9.js',
          'q-e17b270d.js',
          'q-efacb2dc.js',
        ],
        origins: [
          'src/components/cat/cat-walk.tsx',
          'src/components/cat/cat.tsx',
          'src/components/eggs/eggs.tsx',
          'src/components/rudolph/rudolph.tsx',
          'src/components/santa/santa.tsx',
          'src/routes/layout.tsx_layout_component_6Y0uFrvPmQs.js',
        ],
        symbols: ['s_6Y0uFrvPmQs'],
      },
      'q-70214924.js': {
        size: 350,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-4591c419.js'],
        origins: ['src/routes/unsubscribed-failed/index.tsx'],
      },
      'q-739bbd36.js': {
        size: 13468,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/bubble/bubble.css?used&inline',
          'src/components/bubble/bubble.tsx_Bubble_component_0hvFUpzGAyM.js',
          'src/components/bubble/bubble.tsx_Bubble_component_useStylesScoped_CkFs2bTI3Zs.js',
        ],
        symbols: ['s_0hvFUpzGAyM'],
      },
      'q-73c2aea4.js': {
        size: 1829,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-801bbed9.js'],
        origins: [
          'src/components/animated-component/animated-component.tsx',
          'src/components/timeline/timeline.tsx_Timeline_component_sZIPqDBaEpc.js',
        ],
        symbols: ['s_sZIPqDBaEpc'],
      },
      'q-745a17f6.js': {
        size: 181,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_minLength_vqh5IpcWAkw.js',
        ],
        symbols: ['s_vqh5IpcWAkw'],
      },
      'q-750c28b0.js': {
        size: 2767,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'src/components/header/header.tsx_Header_component_handleItemCLick_dKZoR4MCcs0.js',
          'src/components/header/header.tsx_Header_component_o4ccBuvIYCs.js',
        ],
        symbols: ['s_o4ccBuvIYCs'],
      },
      'q-754aec20.js': {
        size: 135,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-750c28b0.js', 'q-f6539fe1.js'],
        symbols: ['s_dKZoR4MCcs0'],
      },
      'q-7588d1d9.js': {
        size: 208,
        imports: [
          'q-39d118db.js',
          'q-3f7fc853.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_NBHcMZTJPes'],
      },
      'q-76fa87e8.js': {
        size: 166,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_minRange_4CJH25Ljv0c.js',
        ],
        symbols: ['s_4CJH25Ljv0c'],
      },
      'q-78ce4e6d.js': {
        size: 155,
        imports: [
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-b8f0dd98.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_Emm0n9SRfY8'],
      },
      'q-7c694359.js': {
        size: 111,
        isTask: !0,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        symbols: ['s_ac4VqAnAxQ0'],
      },
      'q-801bbed9.js': {
        size: 88,
        imports: ['q-4fee56e2.js', 'q-f6539fe1.js'],
        symbols: ['s_sdm0n9ZoKr0'],
      },
      'q-813730b7.js': {
        size: 205,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_minTotalSize_Yd0S4NGStHU.js',
        ],
        symbols: ['s_Yd0S4NGStHU'],
      },
      'q-899b12ed.js': {
        size: 2297,
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_spaInit_event_iX0Wv91fJIY.js',
        ],
        symbols: ['s_iX0Wv91fJIY'],
      },
      'q-8d5e63a6.js': {
        size: 484,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        dynamicImports: ['q-6a405fe6.js'],
        origins: [
          'src/components/blog/blogHomeComponent.tsx',
          'src/routes/blog/[blogType]/all/index@blog.tsx_index_blog_component_kc55RtBXaKM.js',
        ],
        symbols: ['s_kc55RtBXaKM'],
      },
      'q-8e3f873d.js': {
        size: 181,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_url_fa5jrRWO58Y.js',
        ],
        symbols: ['s_fa5jrRWO58Y'],
      },
      'q-8e6fcff6.js': {
        size: 111,
        isTask: !0,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        symbols: ['s_e9muVT8kIZo'],
      },
      'q-93e7c9b7.js': {
        size: 169,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_toCustomQrl_iZeC0Oh401c.js',
        ],
        symbols: ['s_iZeC0Oh401c'],
      },
      'q-9433744a.js': {
        size: 1514,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: [
          'src/routes/blog/[blogType]/[slug]/index@blog.tsx',
          'src/routes/blog/[blogType]/[slug]/index@blog.tsx_index_blog_component_oOld3bPJ5Ws.js',
        ],
        symbols: ['s_oOld3bPJ5Ws'],
      },
      'q-9f2e1462.js': {
        size: 109,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs_useWakeupSignal_activate_6LYztwGzxAA.js',
        ],
        symbols: ['s_6LYztwGzxAA'],
      },
      'q-a0ff2d20.js': {
        size: 194,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: [
          'src/integrations/react/QDatoText.tsx_QDatoText_qwikify_h5ZUTiJtg0M.js',
        ],
        symbols: ['s_h5ZUTiJtg0M'],
      },
      'q-a24ab611.js': {
        size: 255,
        isTask: !0,
        imports: [
          'q-39d118db.js',
          'q-4fee56e2.js',
          'q-5dcaf0da.js',
          'q-6a405fe6.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_EHyjUobaAp4'],
      },
      'q-a332a1dc.js': {
        size: 1233,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_serverQrl_rpc_QoaFfgct0gI.js',
        ],
        symbols: ['s_QoaFfgct0gI'],
      },
      'q-a3be9786.js': {
        size: 142,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-ba477472.js'],
        origins: ['src/global.scss', 'src/root.tsx'],
      },
      'q-a4f85ac7.js': {
        size: 798,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityMockProvider_component_goto_CaT9cMPIbPY.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityMockProvider_component_gqIDJ86ux1w.js',
        ],
        symbols: ['s_gqIDJ86ux1w'],
      },
      'q-a6f723fe.js': {
        size: 2997,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/eggs/eggs.css?used&inline',
          'src/components/eggs/eggs.tsx_Eggs_component_tC1zfRJh9xU.js',
          'src/components/eggs/eggs.tsx_Eggs_component_useStylesScoped_M7JMtWmYWDA.js',
        ],
        symbols: ['s_tC1zfRJh9xU'],
      },
      'q-ab1e2fe1.js': {
        size: 88,
        imports: ['q-39d118db.js', 'q-f6539fe1.js'],
        symbols: ['s_zH94hIe0Ick'],
      },
      'q-ac2829a6.js': {
        size: 3683,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/routes/button-game/index.tsx',
          'src/routes/button-game/index.tsx_button_game_component_lVhXlSc0AIU.js',
          'src/routes/button-game/index.tsx_button_game_component_tryPassLevel_SqNyGWM7k0k.js',
        ],
        symbols: ['s_lVhXlSc0AIU'],
      },
      'q-ac693190.js': {
        size: 5815,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: ['q-0b008694.js'],
        origins: [
          'src/components/svg/england-svg.tsx',
          'src/routes/privacy-policy/ita/index.tsx_ita_component_6t16ZFngrIc.js',
          'src/routes/privacy-policy/ita/index.tsx_ita_component_useStyles_T3RlYu50F5I.js',
        ],
        symbols: ['s_6t16ZFngrIc'],
      },
      'q-ad1710ea.js': {
        size: 106,
        isTask: !0,
        imports: ['q-39d118db.js', 'q-f6539fe1.js'],
        symbols: ['s_EWIT9ENzUX0'],
      },
      'q-ae145814.js': {
        size: 1048,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-73c2aea4.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-d9f9bbd0.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: [
          'src/routes/unsubscribed/index.tsx_unsubscribed_component_OR8GlEL3LEE.js',
        ],
        symbols: ['s_OR8GlEL3LEE'],
      },
      'q-ae74dd14.js': {
        size: 9867,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-0423706b.js', 'q-2e553166.js', 'q-6823d332.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs',
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_Field_Lifecycle_children_1_UYiy8OdUmWo.js',
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_Field_Lifecycle_children_2_ac4VqAnAxQ0.js',
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_Field_Lifecycle_children_3_M0rcc18CCgA.js',
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_Field_Lifecycle_children_e9muVT8kIZo.js',
        ],
        symbols: ['s_M0rcc18CCgA'],
      },
      'q-b24af7f6.js': {
        size: 208,
        imports: [
          'q-39d118db.js',
          'q-3f7fc853.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_0pBeUwLuB88'],
      },
      'q-b25bb000.js': { size: 33, origins: ['__vite-browser-external'] },
      'q-b8f0dd98.js': {
        size: 7205,
        imports: [
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: ['q-6e332a13.js'],
        origins: [
          'src/components/contact/contact.tsx',
          'src/components/contact/contact.tsx_Contact_component_Fragment_div_div_div_button_onClick_Emm0n9SRfY8.js',
          'src/components/contact/contact.tsx_Contact_component_handleSubmit_EmVjnisSR5Y.js',
          'src/components/contact/contact.tsx_Contact_component_pCebMzCWV9M.js',
          'src/components/contact/contact.tsx_Contact_component_useForm_valiForm_hisV3sNP0XM.js',
          'src/routes/layout.tsx',
        ],
        symbols: ['s_hisV3sNP0XM'],
      },
      'q-ba477472.js': {
        size: 601,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        dynamicImports: ['q-1fa6c33e.js'],
        origins: [
          'src/components/router-head/router-head.tsx',
          'src/root.tsx_root_component_eXD0K9bzzlo.js',
        ],
        symbols: ['s_eXD0K9bzzlo'],
      },
      'q-bad7e75e.js': {
        size: 232,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-73c2aea4.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-d9f9bbd0.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_0w9yJ3mmM7E'],
      },
      'q-bc34c240.js': {
        size: 207,
        isTask: !0,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_a7tEUukrY5Q'],
      },
      'q-bd1fde7b.js': {
        size: 205,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_maxTotalSize_AqRXUgC443E.js',
        ],
        symbols: ['s_AqRXUgC443E'],
      },
      'q-bd558bc5.js': {
        size: 58,
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_toLowerCase_toCustom_bN6zFlHfzfQ.js',
        ],
        symbols: ['s_bN6zFlHfzfQ'],
      },
      'q-bf170860.js': {
        size: 587,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/svg/italian-svg.tsx_ItalianSvg_component_03cbbuaQymY.js',
        ],
        symbols: ['s_03cbbuaQymY'],
      },
      'q-bf3575ae.js': {
        size: 240,
        isTask: !0,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_zodFieldQrl_AObcoQang9s.js',
        ],
        symbols: ['s_AObcoQang9s'],
      },
      'q-c31a0420.js': {
        size: 118,
        origins: ['src/routes/dynamic-sitemap.xml/index.tsx'],
      },
      'q-c5cba8c7.js': {
        size: 88,
        imports: ['q-d705464e.js', 'q-f6539fe1.js'],
        symbols: ['s_0Bd6yCHL7MI'],
      },
      'q-c79d3c19.js': {
        size: 208,
        imports: [
          'q-39d118db.js',
          'q-3c198ef6.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_jXDkCe4BzZI'],
      },
      'q-c80adf81.js': {
        size: 1687,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_9C3L9HsfW0c.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_handleClick_hKb0i0wO1HM.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_handlePrefetch_JQka7qFSgTA.js',
        ],
        symbols: ['s_JQka7qFSgTA'],
      },
      'q-c8fb9159.js': {
        size: 112,
        imports: ['q-5dcaf0da.js', 'q-c80adf81.js', 'q-f6539fe1.js'],
        symbols: ['s_9C3L9HsfW0c'],
      },
      'q-cba81f6e.js': {
        size: 165,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_pattern_j9BXpLjplGM.js',
        ],
        symbols: ['s_j9BXpLjplGM'],
      },
      'q-cce99e68.js': {
        size: 184,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_2A8V0pFvVL0'],
      },
      'q-cdc3709f.js': {
        size: 1133,
        isTask: !0,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_Lifecycle_component_AMfhPV9ZgUw.js',
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_Lifecycle_component_useVisibleTask_zlu40LlrNis.js',
        ],
        symbols: ['s_zlu40LlrNis'],
      },
      'q-cdd4a425.js': {
        size: 181,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_maxLength_tF0xoLbwQWg.js',
        ],
        symbols: ['s_tF0xoLbwQWg'],
      },
      'q-cecf1b60.js': {
        size: 706,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'src/components/stacks/stacks.module.css?used',
          'src/components/stacks/stacks.tsx_Stacks_component_o91wC8IGdho.js',
        ],
        symbols: ['s_o91wC8IGdho'],
      },
      'q-cf32db7f.js': {
        size: 112,
        imports: ['q-5dcaf0da.js', 'q-e7f9df46.js', 'q-f6539fe1.js'],
        symbols: ['s_D4XD62ic8NY'],
      },
      'q-cf5f8fa5.js': {
        size: 168,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_value_yY91eDXPInU.js',
        ],
        symbols: ['s_yY91eDXPInU'],
      },
      'q-d13f67f9.js': {
        size: 7129,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/cat/cat-walk.css?used&inline',
          'src/components/cat/cat-walk.tsx_CatWalk_component_0DhRUxBQU40.js',
          'src/components/cat/cat-walk.tsx_CatWalk_component_useStylesScoped_ik8BQrQgw9g.js',
        ],
        symbols: ['s_0DhRUxBQU40'],
      },
      'q-d1d6dc3c.js': {
        size: 5051,
        imports: [
          'q-39d118db.js',
          'q-4a2a0f3e.js',
          'q-5dcaf0da.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: ['q-685760d8.js', 'q-739bbd36.js'],
        origins: [
          'node_modules/.pnpm/number-to-words@1.2.4/node_modules/number-to-words/numberToWords.min.js',
          'src/components/bubble/bubble.tsx',
          'src/components/hero/hero.tsx_Hero_component_Jevt7v9CDh4.js',
          'src/components/santa-hat/santa-hat.tsx',
          'src/media/pako_cropped.jpg?jsx',
        ],
        symbols: ['s_Jevt7v9CDh4'],
      },
      'q-d352143c.js': {
        size: 178,
        isTask: !0,
        imports: [
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-b8f0dd98.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_EmVjnisSR5Y'],
      },
      'q-d705464e.js': {
        size: 6084,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/rudolph/rudolph.css?used&inline',
          'src/components/rudolph/rudolph.tsx_Rudolph_component_0Bd6yCHL7MI.js',
          'src/components/rudolph/rudolph.tsx_Rudolph_component_useStylesScoped_0HhqKOJuYCM.js',
        ],
        symbols: ['s_0HhqKOJuYCM'],
      },
      'q-d7b70c8d.js': {
        size: 20408,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: [
          'q-52e0adb8.js',
          'q-6a512b8a.js',
          'q-a0ff2d20.js',
          'q-d8e4ee6a.js',
          'q-e08ae665.js',
        ],
        origins: [
          'node_modules/.pnpm/@0no-co+graphql.web@1.0.11/node_modules/@0no-co/graphql.web/dist/graphql.web.js',
          'node_modules/.pnpm/@mux+mux-player-react@3.1.0_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@mux/mux-player-react/dist/lazy.mjs',
          'node_modules/.pnpm/array-flatten@3.0.0/node_modules/array-flatten/dist.es2015/index.js',
          'node_modules/.pnpm/datocms-listen@0.1.15/node_modules/datocms-listen/dist/index.js',
          'node_modules/.pnpm/datocms-listen@0.1.15/node_modules/datocms-listen/dist/subscribeToQuery/index.js',
          'node_modules/.pnpm/datocms-structured-text-generic-html-renderer@4.0.2/node_modules/datocms-structured-text-generic-html-renderer/dist/esm/index.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/definitions.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/guards.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/index.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/render.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/types.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/validate.js',
          'node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/dist/index.mjs',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Image/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Image/useInView.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Image/utils.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/SRCImage/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/SRCImage/utils.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Seo/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Seo/nextUtils.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Seo/remixUtils.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Seo/renderMetaTags.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Seo/renderMetaTagsToString.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/Seo/types.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/StructuredText/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/VideoPlayer/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/useQuerySubscription/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/useSiteSearch/index.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/useVideoPlayer/index.js',
          'node_modules/.pnpm/react-intersection-observer@9.13.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-intersection-observer/dist/index.mjs',
          'node_modules/.pnpm/react-string-replace@1.1.1/node_modules/react-string-replace/index.js',
          'node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js',
          'node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
          'node_modules/.pnpm/use-deep-compare-effect@1.8.1_react@18.2.0/node_modules/use-deep-compare-effect/dist/use-deep-compare-effect.esm.js',
          'src/blog.css?used&inline',
          'src/components/articles/articles.tsx',
          'src/components/blog/blogComponent.tsx',
          'src/components/blog/blogComponent.tsx_BlogComponent_component_TBWAb6R23ho.js',
          'src/components/blog/blogComponent.tsx_BlogComponent_component_handleSubmit_a7tEUukrY5Q.js',
          'src/components/blog/blogComponent.tsx_BlogComponent_component_onCloseWarning_MPTU77x6T2Q.js',
          'src/components/blog/blogComponent.tsx_BlogComponent_component_useForm_valiForm_v9EqJiBRR0U.js',
          'src/components/blog/blogComponent.tsx_BlogComponent_component_useStyles_2A8V0pFvVL0.js',
          'src/components/blog/blogComponent.tsx_BlogComponent_component_useVisibleTask_0EhuNoWgjY4.js',
          'src/components/finance/no-tips/no-tips.tsx',
          'src/components/inner-section/innerSectionComponent.tsx',
          'src/integrations/react/QDatoText.tsx',
          'src/routes/layout-blog.tsx',
        ],
        symbols: ['s_TBWAb6R23ho'],
      },
      'q-d8e4ee6a.js': {
        size: 840,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'src/components/inner-section/innerSectionComponent.tsx_InnerSectionComponent_component_e0g7Sn2KjsA.js',
        ],
        symbols: ['s_e0g7Sn2KjsA'],
      },
      'q-d91b978a.js': {
        size: 891,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        origins: ['src/routes/404.tsx__404_component_bavVtvgbxHE.js'],
        symbols: ['s_bavVtvgbxHE'],
      },
      'q-d9f9bbd0.js': {
        size: 26127,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-73c2aea4.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: [
          'q-56969448.js',
          'q-73c2aea4.js',
          'q-cecf1b60.js',
          'q-d1d6dc3c.js',
          'q-ef526c1c.js',
        ],
        origins: [
          'src/components/cards/cards.tsx',
          'src/components/hero/hero.tsx',
          'src/components/linkItem/linkItem.tsx',
          'src/components/stacks/stacks.tsx',
          'src/components/timeline/timeline.tsx',
          'src/media/badge-first-pr.webp?jsx',
          'src/repository/links.ts',
          'src/repository/projects.ts',
          'src/repository/stack.ts',
          'src/repository/work.ts',
          'src/routes/index.css?used&inline',
          'src/routes/index.tsx',
          'src/routes/index.tsx_routes_component_tstUEhxLUWc.js',
          'src/routes/index.tsx_routes_component_useStylesScoped_0w9yJ3mmM7E.js',
        ],
        symbols: ['s_tstUEhxLUWc'],
      },
      'q-dc51d921.js': {
        size: 3703,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_valiFieldQrl_KcTWxoK9iXo.js',
          'node_modules/.pnpm/valibot@1.0.0-beta.7_typescript@5.3.3/node_modules/valibot/dist/index.js',
        ],
        symbols: ['s_KcTWxoK9iXo'],
      },
      'q-e08ae665.js': {
        size: 1022,
        imports: [
          'q-39d118db.js',
          'q-3f7fc853.js',
          'q-4a2a0f3e.js',
          'q-5dcaf0da.js',
          'q-73c2aea4.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        dynamicImports: ['q-4a2a0f3e.js', 'q-750c28b0.js'],
        origins: [
          'src/components/footer/footer.tsx',
          'src/components/header/header.tsx',
          'src/routes/layout-blog.tsx_layout_blog_component_LdHC7hJQ16Y.js',
        ],
        symbols: ['s_LdHC7hJQ16Y'],
      },
      'q-e17b270d.js': {
        size: 3326,
        imports: ['q-f6539fe1.js'],
        origins: [
          'src/components/cat/cat.css?used&inline',
          'src/components/cat/cat.tsx_Cat_component_k9rs7QcCFAU.js',
          'src/components/cat/cat.tsx_Cat_component_useStylesScoped_xTYSAGLBrBU.js',
        ],
        symbols: ['s_k9rs7QcCFAU'],
      },
      'q-e3d357c4.js': {
        size: 316,
        imports: ['q-f6539fe1.js'],
        dynamicImports: ['q-4043d6aa.js'],
        origins: ['src/routes/projects/index.tsx'],
      },
      'q-e42259d6.js': {
        size: 111,
        isTask: !0,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        symbols: ['s_UYiy8OdUmWo'],
      },
      'q-e4dc7563.js': {
        size: 51,
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_toTrimmed_toCustom_wK63AiDJbYc.js',
        ],
        symbols: ['s_wK63AiDJbYc'],
      },
      'q-e7f9df46.js': {
        size: 7646,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        dynamicImports: [
          'q-2d218c05.js',
          'q-3710b96b.js',
          'q-428048bf.js',
          'q-4c3810c8.js',
          'q-5b74adc2.js',
          'q-6a405fe6.js',
          'q-70214924.js',
          'q-9433744a.js',
          'q-ac2829a6.js',
          'q-b8f0dd98.js',
          'q-c31a0420.js',
          'q-d7b70c8d.js',
          'q-d9f9bbd0.js',
          'q-e3d357c4.js',
        ],
        origins: [
          '@qwik-city-plan',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_D4XD62ic8NY.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_goto_SHMqyqh5H4E.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_registerPreventNav_wxKQczXDgGA.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_useStyles_DBNWDwXgCow.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_useTask_7V8C6m30W8E.js',
        ],
        symbols: ['s_wxKQczXDgGA'],
      },
      'q-e9b99868.js': {
        size: 88,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        symbols: ['s_o1uLqgowy5k'],
      },
      'q-ef526c1c.js': {
        size: 1108,
        imports: ['q-5dcaf0da.js', 'q-f6539fe1.js'],
        origins: [
          'src/components/linkItem/linkItem.module.css?used',
          'src/components/linkItem/linkItem.tsx_LinkItem_component_x0jeNTb2iQc.js',
        ],
        symbols: ['s_x0jeNTb2iQc'],
      },
      'q-efacb2dc.js': {
        size: 88,
        imports: ['q-5d0273bf.js', 'q-f6539fe1.js'],
        symbols: ['s_o6tPurUTJPc'],
      },
      'q-f0c55488.js': {
        size: 207,
        isTask: !0,
        imports: [
          'q-39d118db.js',
          'q-5dcaf0da.js',
          'q-ae74dd14.js',
          'q-d7b70c8d.js',
          'q-dc51d921.js',
          'q-f6539fe1.js',
        ],
        symbols: ['s_0EhuNoWgjY4'],
      },
      'q-f14942ed.js': {
        size: 107,
        imports: ['q-4a2a0f3e.js', 'q-5dcaf0da.js', 'q-f6539fe1.js'],
        symbols: ['s_jWy0aWw4FvU'],
      },
      'q-f6539fe1.js': {
        size: 69950,
        isTask: !0,
        origins: [
          '@builder.io/qwik/build',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.3.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Form_form_onSubmit_HsGYxytrly4.js',
          'node_modules/.pnpm/@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik/dist/core.prod.mjs',
        ],
        symbols: ['s_HsGYxytrly4'],
      },
      'q-f716e75d.js': {
        size: 58,
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_toUpperCase_toCustom_jgxEusSojEA.js',
        ],
        symbols: ['s_jgxEusSojEA'],
      },
      'q-fa5b8268.js': {
        size: 135,
        isTask: !0,
        imports: ['q-5dcaf0da.js', 'q-a4f85ac7.js', 'q-f6539fe1.js'],
        symbols: ['s_CaT9cMPIbPY'],
      },
      'q-fa5e2dc4.js': {
        size: 301,
        isTask: !0,
        imports: ['q-ae74dd14.js', 'q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_zodFormQrl_NSwSC1UQpPU.js',
        ],
        symbols: ['s_NSwSC1UQpPU'],
      },
      'q-fb57866d.js': {
        size: 229,
        isTask: !0,
        imports: ['q-f6539fe1.js'],
        origins: [
          'node_modules/.pnpm/@modular-forms+qwik@0.29.0_@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript_kgpjnhxokgwpazbpfil2by3eze/node_modules/@modular-forms/qwik/dist/index.qwik.mjs_mimeType_cSgeVFaDGFw.js',
        ],
        symbols: ['s_cSgeVFaDGFw'],
      },
    },
    injections: [
      {
        tag: 'link',
        location: 'head',
        attributes: { rel: 'stylesheet', href: '/assets/6d18fdb1-style.css' },
      },
    ],
    version: '1',
    options: {
      target: 'client',
      buildMode: 'production',
      entryStrategy: { type: 'smart' },
    },
    platform: {
      qwik: '1.10.0',
      vite: '',
      rollup: '3.29.4',
      env: 'node',
      os: 'win32',
      node: '22.14.0',
    },
  },
  Be = () => {
    const s = le(),
      e = ce()
    return y(
      T,
      {
        children: [
          b('title', null, null, s.title, 1, null),
          b(
            'link',
            null,
            { rel: 'canonical', href: _e(n => n.url.href, [e], 'p0.url.href') },
            null,
            3,
            null,
          ),
          b(
            'meta',
            null,
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1.0',
            },
            null,
            3,
            null,
          ),
          b(
            'link',
            null,
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            null,
            3,
            null,
          ),
          s.meta.map(n => S('meta', { ...n }, null, 0, n.key)),
          s.links.map(n => S('link', { ...n }, null, 0, n.key)),
          s.styles.map(n =>
            S(
              'style',
              {
                ...n.props,
                get dangerouslySetInnerHTML() {
                  return n.style
                },
                dangerouslySetInnerHTML: pe(n, 'style'),
              },
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
  He = J(X(Be, 's_2Fq8wIUpq5I'))
const Re = () =>
    y(
      je,
      {
        children: [
          b(
            'head',
            null,
            null,
            [
              b('meta', null, { charSet: 'utf-8' }, null, 3, null),
              b(
                'link',
                null,
                { rel: 'manifest', href: '/manifest.json' },
                null,
                3,
                null,
              ),
              b(
                'script',
                null,
                {
                  'data-goatcounter': 'https://pako.goatcounter.com/count',
                  async: !0,
                  src: '//gc.zgo.at/count.js',
                },
                null,
                3,
                null,
              ),
              y(He, null, 3, 'Le_0'),
            ],
            1,
            null,
          ),
          b(
            'body',
            null,
            { lang: 'en' },
            [y(ue, null, 3, 'Le_1'), y(fe, null, 3, 'Le_2')],
            1,
            null,
          ),
        ],
      },
      1,
      'Le_3',
    ),
  $e = J(X(Re, 's_eXD0K9bzzlo'))
function Ze(s) {
  return Le(y($e, null, 3, 'Ro_0'), {
    manifest: Ye,
    ...s,
    containerAttributes: { lang: 'en-us', ...s.containerAttributes },
  })
}
export { Ze as default }
