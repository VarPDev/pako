import {
  y as _,
  z as ae,
  A as me,
  F as N,
  B as re,
  c as G,
  i as Z,
  C as le,
  D as ce,
  _ as q,
  b as j,
  j as _e,
  E as S,
  m as pe,
  G as ue,
  H as fe,
  Q as be,
} from './q-dcf4b8bd.js'
/**
 * @license
 * @builder.io/qwik/server 1.10.0
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */ var je = (s =>
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
  xe = '<sync>'
function ye(s, e) {
  const n = e == null ? void 0 : e.mapper,
    o = s.symbolMapper
      ? s.symbolMapper
      : (i, d, a) => {
          var m
          if (n) {
            const r = T(i),
              l = n[r]
            if (!l) {
              if (r === xe) return [r, '']
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
      var h
      const m = T(a),
        r = (h = globalThis.__qwik_reg_symbols) == null ? void 0 : h.get(m)
      if (r) return r
      let l = String(d)
      l.endsWith('.js') || (l += '.js')
      const b = je(l)
      if (!(a in b))
        throw new Error(`Q-ERROR: missing symbol '${a}' in module '${l}'.`)
      return b[a]
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
async function qe(s, e) {
  const n = ye(s, e)
  re(n)
}
var T = s => {
    const e = s.lastIndexOf('_')
    return e > -1 ? s.slice(e + 1) : s
  },
  he = 'q:instance'
function ke(s) {
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
function O() {
  let t = `const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`
  return (
    (t += "w.postMessage(u.map(u=>new URL(u,origin)+''));"),
    (t += 'w.onmessage=()=>{w.terminate()};'),
    t
  )
}
function we(s, e) {
  const n = { bundles: k(e).map(t => t.split('/').pop()) }
  return `(window.qwikPrefetchSW||(window.qwikPrefetchSW=[])).push(${JSON.stringify(['prefetch', s, ...n.bundles])});`
}
function k(s) {
  const e = [],
    n = o => {
      if (Array.isArray(o))
        for (const t of o) e.includes(t.url) || (e.push(t.url), n(t.imports))
    }
  return n(s), e
}
function ge(s) {
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
  const t = Ne(e == null ? void 0 : e.implementation),
    i = []
  return (
    t.prefetchEvent === 'always' && Se(s, i, n, o),
    t.linkInsert === 'html-append' && Ie(i, n, t),
    t.linkInsert === 'js-append'
      ? Te(i, n, t, o)
      : t.workerFetchInsert === 'always' && Oe(i, n, o),
    i.length > 0 ? _(N, { children: i }) : null
  )
}
function Se(s, e, n, o) {
  const t = ge(n)
  for (const i of t)
    e.push(_('link', { rel: 'modulepreload', href: i, nonce: o }))
  e.push(
    _('script', {
      'q:type': 'prefetch-bundles',
      dangerouslySetInnerHTML:
        we(s, n) +
        "document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",
      nonce: o,
    }),
  )
}
function Ie(s, e, n) {
  const o = k(e),
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
function Te(s, e, n, o) {
  const t = n.linkRel || 'prefetch',
    i = n.linkFetchPriority
  let d = ''
  n.workerFetchInsert === 'no-link-support' &&
    (d += 'let supportsLinkRel = true;'),
    (d += `const u=${JSON.stringify(k(e))};`),
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
      ((d += 'if(!supportsLinkRel){'), (d += O()), (d += '}')),
    n.workerFetchInsert === 'always' && (d += O()),
    s.push(
      _('script', {
        type: 'module',
        'q:type': 'link-js',
        dangerouslySetInnerHTML: d,
        nonce: o,
      }),
    )
}
function Oe(s, e, n) {
  let o = `const u=${JSON.stringify(k(e))};`
  ;(o += O()),
    s.push(
      _('script', {
        type: 'module',
        'q:type': 'prefetch-worker',
        dangerouslySetInnerHTML: o,
        nonce: n,
      }),
    )
}
function Ne(s) {
  return { ...Ce, ...s }
}
var Ce = {
  linkInsert: null,
  linkRel: null,
  linkFetchPriority: null,
  workerFetchInsert: null,
  prefetchEvent: 'always',
}
function I() {
  if (typeof performance > 'u') return () => 0
  const s = performance.now()
  return () => (performance.now() - s) / 1e6
}
function V(s) {
  let e = s.base
  return (
    typeof s.base == 'function' && (e = s.base(s)),
    typeof e == 'string' ? (e.endsWith('/') || (e += '/'), e) : '/build/'
  )
}
function Me(s, e, n) {
  if (!n) return []
  const o = e.prefetchStrategy,
    t = V(e)
  if (o !== null) {
    if (!o || !o.symbolsToPrefetch || o.symbolsToPrefetch === 'auto')
      return Pe(s, n, t)
    if (typeof o.symbolsToPrefetch == 'function')
      try {
        return o.symbolsToPrefetch({ manifest: n.manifest })
      } catch (i) {
        console.error('getPrefetchUrls, symbolsToPrefetch()', i)
      }
  }
  return []
}
function Pe(s, e, n) {
  const o = [],
    t = s == null ? void 0 : s.qrls,
    { mapper: i, manifest: d } = e,
    a = new Map()
  if (Array.isArray(t))
    for (const m of t) {
      const r = m.getHash(),
        l = i[r]
      if (l) {
        const b = l[1]
        X(d, a, o, n, b)
      }
    }
  return o
}
function X(s, e, n, o, t) {
  const i = o + t
  let d = e.get(i)
  if (!d) {
    ;(d = { url: i, imports: [] }), e.set(i, d)
    const a = s.bundles[t]
    if (a && Array.isArray(a.imports))
      for (const m of a.imports) X(s, e, d.imports, o, m)
  }
  n.push(d)
}
var Fe =
    '(()=>{var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,s=(e,s)=>{for(var a in s||(s={}))r.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&n(e,a,s[a]);return e};((e,t)=>{const r="__q_context__",o=window,n=new Set,a=new Set([e]),c="replace",i="forEach",l="target",f="getAttribute",p="isConnected",b="qvisible",u="_qwikjson_",y=(e,t)=>Array.from(e.querySelectorAll(t)),h=e=>{const t=[];return a.forEach((r=>t.push(...y(r,e)))),t},d=e=>{S(e),y(e,"[q\\\\:shadowroot]").forEach((e=>{const t=e.shadowRoot;t&&d(t)}))},m=e=>e&&"function"==typeof e.then,w=(e,t,r=t.type)=>{h("[on"+e+"\\\\:"+r+"]")[i]((o=>E(o,e,t,r)))},q=t=>{if(void 0===t[u]){let r=(t===e.documentElement?e.body:t).lastElementChild;for(;r;){if("SCRIPT"===r.tagName&&"qwik/json"===r[f]("type")){t[u]=JSON.parse(r.textContent[c](/\\\\x3C(\\/?script)/gi,"<$1"));break}r=r.previousElementSibling}}},v=(e,t)=>new CustomEvent(e,{detail:t}),E=async(t,o,n,a=n.type)=>{const i="on"+o+":"+a;t.hasAttribute("preventdefault:"+a)&&n.preventDefault();const l=t._qc_,b=l&&l.li.filter((e=>e[0]===i));if(b&&b.length>0){for(const e of b){const r=e[1].getFn([t,n],(()=>t[p]))(n,t),o=n.cancelBubble;m(r)&&await r,o&&n.stopPropagation()}return}const u=t[f](i);if(u){const o=t.closest("[q\\\\:container]"),a=o[f]("q:base"),i=o[f]("q:version")||"unknown",l=o[f]("q:manifest-hash")||"dev",b=new URL(a,e.baseURI);for(const f of u.split("\\n")){const u=new URL(f,b),y=u.href,h=u.hash[c](/^#?([^?[|]*).*$/,"$1")||"default",d=performance.now();let w,v,E;const _=f.startsWith("#"),A={qBase:a,qManifest:l,qVersion:i,href:y,symbol:h,element:t,reqTime:d};if(_){const t=o.getAttribute("q:instance");w=(e["qFuncs_"+t]||[])[Number.parseInt(h)],w||(v="sync",E=Error("sync handler error for symbol: "+h))}else{const e=u.href.split("#")[0];try{const t=import(e);q(o),w=(await t)[h],w||(v="no-symbol",E=Error(`${h} not in ${e}`))}catch(e){v||(v="async"),E=e}}if(!w){g("qerror",s({importError:v,error:E},A)),console.error(E);break}const k=e[r];if(t[p])try{e[r]=[t,n,u],_||g("qsymbol",s({},A));const o=w(n,t);m(o)&&await o}catch(e){g("qerror",s({error:e},A))}finally{e[r]=k}}}},g=(t,r)=>{e.dispatchEvent(v(t,r))},_=e=>e[c](/([A-Z])/g,(e=>"-"+e.toLowerCase())),A=async e=>{let t=_(e.type),r=e[l];for(w("-document",e,t);r&&r[f];){const o=E(r,"",e,t);let n=e.cancelBubble;m(o)&&await o,n=n||e.cancelBubble||r.hasAttribute("stoppropagation:"+e.type),r=e.bubbles&&!0!==n?r.parentElement:null}},k=e=>{w("-window",e,_(e.type))},C=()=>{var r;const s=e.readyState;if(!t&&("interactive"==s||"complete"==s)&&(a.forEach(d),t=1,g("qinit"),(null!=(r=o.requestIdleCallback)?r:o.setTimeout).bind(o)((()=>g("qidle"))),n.has(b))){const e=h("[on\\\\:"+b+"]"),t=new IntersectionObserver((e=>{for(const r of e)r.isIntersecting&&(t.unobserve(r[l]),E(r[l],"",v(b,r)))}));e[i]((e=>t.observe(e)))}},O=(e,t,r,o=!1)=>e.addEventListener(t,r,{capture:o,passive:!1}),S=(...e)=>{for(const t of e)"string"==typeof t?n.has(t)||(a.forEach((e=>O(e,t,A,!0))),O(o,t,k,!0),n.add(t)):a.has(t)||(n.forEach((e=>O(t,e,A,!0))),a.add(t))};if(!(r in e)){e[r]=0;const t=o.qwikevents;Array.isArray(t)&&S(...t),o.qwikevents={events:n,roots:a,push:S},O(e,"readystatechange",C),C()}})(document)})()',
  ze = `(() => {
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
function B(s = {}) {
  return s.debug ? ze : Fe
}
var Ue = '<!DOCTYPE html>'
async function Ae(s, e) {
  var A, E, D
  let n = e.stream,
    o = 0,
    t = 0,
    i = 0,
    d = 0,
    a = '',
    m
  const r = ((A = e.streaming) == null ? void 0 : A.inOrder) ?? {
      strategy: 'auto',
      maximunInitialChunk: 5e4,
      maximunChunk: 3e4,
    },
    l = e.containerTagName ?? 'html',
    b = e.containerAttributes ?? {},
    h = n,
    ee = I(),
    se = V(e),
    p = De(e.manifest)
  function C() {
    a && (h.write(a), (a = ''), (o = 0), i++, i === 1 && (d = ee()))
  }
  function M(c) {
    const u = c.length
    ;(o += u), (t += u), (a += c)
  }
  switch (r.strategy) {
    case 'disabled':
      n = { write: M }
      break
    case 'direct':
      n = h
      break
    case 'auto':
      let c = 0,
        u = !1
      const W = r.maximunChunk ?? 0,
        v = r.maximunInitialChunk ?? 0
      n = {
        write(y) {
          y === '<!--qkssr-f-->'
            ? u || (u = !0)
            : y === '<!--qkssr-pu-->'
              ? c++
              : y === '<!--qkssr-po-->'
                ? c--
                : M(y),
            c === 0 && (u || o >= (i === 0 ? v : W)) && ((u = !1), C())
        },
      }
      break
  }
  l === 'html'
    ? n.write(Ue)
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
    await qe(e, p)
  const P = p == null ? void 0 : p.manifest.injections,
    w = P ? P.map(c => _(c.tag, c.attributes ?? {})) : [],
    g = ((E = e.qwikLoader) == null ? void 0 : E.include) ?? 'auto'
  if (
    (((D = e.qwikLoader) == null ? void 0 : D.position) ?? 'bottom') ===
      'top' &&
    g !== 'never'
  ) {
    const c = B({ debug: e.debug })
    w.push(_('script', { id: 'qwikloader', dangerouslySetInnerHTML: c })),
      w.push(
        _('script', {
          dangerouslySetInnerHTML: "window.qwikevents.push('click')",
        }),
      )
  }
  const ne = I(),
    F = []
  let z = 0,
    U = 0
  await ae(s, {
    stream: n,
    containerTagName: l,
    containerAttributes: b,
    serverData: e.serverData,
    base: se,
    beforeContent: w,
    beforeClose: async (c, u, W, v) => {
      var H, Y, L, J, R
      z = ne()
      const y = I()
      m = await me(c, u, void 0, v)
      const x = []
      if (e.prefetchStrategy !== null) {
        const f = Me(m, e, p),
          ie = b['q:base']
        if (f.length > 0) {
          const $ = ve(
            ie,
            e.prefetchStrategy,
            f,
            (H = e.serverData) == null ? void 0 : H.nonce,
          )
          $ && x.push($)
        }
      }
      const te = JSON.stringify(m.state, void 0, void 0)
      if (
        (x.push(
          _('script', {
            type: 'qwik/json',
            dangerouslySetInnerHTML: We(te),
            nonce: (Y = e.serverData) == null ? void 0 : Y.nonce,
          }),
        ),
        m.funcs.length > 0)
      ) {
        const f = b[he]
        x.push(
          _('script', {
            'q:func': 'qwik/json',
            dangerouslySetInnerHTML: He(f, m.funcs),
            nonce: (L = e.serverData) == null ? void 0 : L.nonce,
          }),
        )
      }
      const de = !m || m.mode !== 'static',
        Q = g === 'always' || (g === 'auto' && de)
      if (Q) {
        const f = B({ debug: e.debug })
        x.push(
          _('script', {
            id: 'qwikloader',
            dangerouslySetInnerHTML: f,
            nonce: (J = e.serverData) == null ? void 0 : J.nonce,
          }),
        )
      }
      const K = Array.from(u.$events$, f => JSON.stringify(f))
      if (K.length > 0) {
        const f =
          (Q ? 'window.qwikevents' : '(window.qwikevents||=[])') +
          `.push(${K.join(', ')})`
        x.push(
          _('script', {
            dangerouslySetInnerHTML: f,
            nonce: (R = e.serverData) == null ? void 0 : R.nonce,
          }),
        )
      }
      return Qe(F, c), (U = y()), _(N, { children: x })
    },
    manifestHash:
      (p == null ? void 0 : p.manifest.manifestHash) || 'dev' + Ee(),
  }),
    l !== 'html' && n.write('<!--/cq-->'),
    C()
  const oe = m.resources.some(c => c._cache !== 1 / 0)
  return {
    prefetchResources: void 0,
    snapshotResult: m,
    flushes: i,
    manifest: p == null ? void 0 : p.manifest,
    size: t,
    isStatic: !oe,
    timing: { render: z, snapshot: U, firstFlush: d },
    _symbols: F,
  }
}
function Ee() {
  return Math.random().toString(36).slice(2)
}
function De(s) {
  if (s) {
    if ('mapper' in s) return s
    if (((s = ke(s)), s)) {
      const e = {}
      return (
        Object.entries(s.mapping).forEach(([n, o]) => {
          e[T(n)] = [n, o]
        }),
        { mapper: e, manifest: s }
      )
    }
  }
}
var We = s => s.replace(/<(\/?script)/gi, '\\x3C$1')
function Qe(s, e) {
  var n
  for (const o of e) {
    const t = (n = o.$componentQrl$) == null ? void 0 : n.getSymbol()
    t && !s.includes(t) && s.push(t)
  }
}
var Ke = 'document["qFuncs_HASH"]='
function He(s, e) {
  return (
    Ke.replace('HASH', s) +
    `[${e.join(`,
`)}]`
  )
}
const Ye = {
    manifestHash: 'lfkcfo',
    symbols: {
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
      s_nl5HISeg0wo: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component_useTask',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_useTask_nl5HISeg0wo',
        hash: 'nl5HISeg0wo',
        ctxKind: 'function',
        ctxName: 'useTask$',
        captures: !0,
        parent: 's_M0r1Ml4RS8Y',
        loc: [28961, 38279],
      },
      s_AS9AtyfykOo: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_usePreventNavigateQrl_useVisibleTask',
        canonicalFilename:
          'index.qwik.mjs_usePreventNavigateQrl_useVisibleTask_AS9AtyfykOo',
        hash: 'AS9AtyfykOo',
        ctxKind: 'function',
        ctxName: 'useVisibleTask$',
        captures: !0,
        loc: [22708, 22736],
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
        loc: [1229, 2766],
      },
      s_9SnDmpwm0UA: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityMockProvider_component',
        canonicalFilename:
          'index.qwik.mjs_QwikCityMockProvider_component_9SnDmpwm0UA',
        hash: '9SnDmpwm0UA',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [38527, 39732],
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
        loc: [194, 3465],
      },
      s_Jevt7v9CDh4: {
        origin: 'components/hero/hero.tsx',
        displayName: 'hero.tsx_Hero_component',
        canonicalFilename: 'hero.tsx_Hero_component_Jevt7v9CDh4',
        hash: 'Jevt7v9CDh4',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [460, 2436],
      },
      s_M0r1Ml4RS8Y: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_M0r1Ml4RS8Y',
        hash: 'M0r1Ml4RS8Y',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [24144, 38325],
      },
      s_Uzl3gaAclJA: {
        origin: 'routes/blog/index.tsx',
        displayName: 'index.tsx_blog_component',
        canonicalFilename: 'index.tsx_blog_component_Uzl3gaAclJA',
        hash: 'Uzl3gaAclJA',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [415, 750],
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
      s_ZHlbw7cbduU: {
        origin: 'routes/finance/index.tsx',
        displayName: 'index.tsx_finance_component',
        canonicalFilename: 'index.tsx_finance_component_ZHlbw7cbduU',
        hash: 'ZHlbw7cbduU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [695, 2635],
      },
      s_aHaxQW3gUTM: {
        origin: 'components/articles/articles.tsx',
        displayName: 'articles.tsx_Articles_component',
        canonicalFilename: 'articles.tsx_Articles_component_aHaxQW3gUTM',
        hash: 'aHaxQW3gUTM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [206, 1211],
      },
      s_bavVtvgbxHE: {
        origin: 'routes/404.tsx',
        displayName: '404.tsx__404_component',
        canonicalFilename: '404.tsx__404_component_bavVtvgbxHE',
        hash: 'bavVtvgbxHE',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [200, 1087],
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
      s_lVhXlSc0AIU: {
        origin: 'routes/button-game/index.tsx',
        displayName: 'index.tsx_button_game_component',
        canonicalFilename: 'index.tsx_button_game_component_lVhXlSc0AIU',
        hash: 'lVhXlSc0AIU',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [407, 4598],
      },
      s_mjOPF0JN0c0: {
        origin: 'routes/finance/[slug]/index.tsx',
        displayName: 'index.tsx_slug_component',
        canonicalFilename: 'index.tsx_slug_component_mjOPF0JN0c0',
        hash: 'mjOPF0JN0c0',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [848, 1233],
      },
      s_mvZ0o0x6mlM: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_RouterOutlet_component',
        canonicalFilename: 'index.qwik.mjs_RouterOutlet_component_mvZ0o0x6mlM',
        hash: 'mvZ0o0x6mlM',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [7054, 8208],
      },
      s_o4ccBuvIYCs: {
        origin: 'components/header/header.tsx',
        displayName: 'header.tsx_Header_component',
        canonicalFilename: 'header.tsx_Header_component_o4ccBuvIYCs',
        hash: 'o4ccBuvIYCs',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [126, 2979],
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
      s_pCebMzCWV9M: {
        origin: 'components/contact/contact.tsx',
        displayName: 'contact.tsx_Contact_component',
        canonicalFilename: 'contact.tsx_Contact_component_pCebMzCWV9M',
        hash: 'pCebMzCWV9M',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [127, 3553],
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
        loc: [1089, 4883],
      },
      s_vF5JWJgPaqg: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Link_component',
        canonicalFilename: 'index.qwik.mjs_Link_component_vF5JWJgPaqg',
        hash: 'vF5JWJgPaqg',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [39759, 42049],
      },
      s_w1885HzKivA: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_GetForm_component',
        canonicalFilename: 'index.qwik.mjs_GetForm_component_w1885HzKivA',
        hash: 'w1885HzKivA',
        ctxKind: 'function',
        ctxName: 'component$',
        captures: !1,
        loc: [58614, 59767],
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
        loc: [230, 517],
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
      s_ZyezcyCH0SU: {
        origin: 'routes/finance/[slug]/index.tsx',
        displayName: 'index.tsx_slug_component_useStyles',
        canonicalFilename: 'index.tsx_slug_component_useStyles_ZyezcyCH0SU',
        hash: 'ZyezcyCH0SU',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_mjOPF0JN0c0',
        loc: [869, 875],
      },
      s_fmb2t7vTfK4: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component_useStyles',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_useStyles_fmb2t7vTfK4',
        hash: 'fmb2t7vTfK4',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_M0r1Ml4RS8Y',
        loc: [24170, 24204],
      },
      s_ybemPOcl0BA: {
        origin: 'routes/finance/index.tsx',
        displayName: 'index.tsx_finance_component_useStyles',
        canonicalFilename: 'index.tsx_finance_component_useStyles_ybemPOcl0BA',
        hash: 'ybemPOcl0BA',
        ctxKind: 'function',
        ctxName: 'useStyles$',
        captures: !1,
        parent: 's_ZHlbw7cbduU',
        loc: [716, 722],
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
        loc: [1116, 1122],
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
      s_0nUqwewvsMY: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_serverQrl_rpc',
        canonicalFilename: 'index.qwik.mjs_serverQrl_rpc_0nUqwewvsMY',
        hash: '0nUqwewvsMY',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [52839, 55816],
      },
      s_1xmY1GPKbGU: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_spaInit_event',
        canonicalFilename: 'index.qwik.mjs_spaInit_event_1xmY1GPKbGU',
        hash: '1xmY1GPKbGU',
        ctxKind: 'function',
        ctxName: 'event$',
        captures: !1,
        loc: [1356, 7019],
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
      s_Oqvp8pd8rfo: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Form_form_onSubmit',
        canonicalFilename: 'index.qwik.mjs_Form_form_onSubmit_Oqvp8pd8rfo',
        hash: 'Oqvp8pd8rfo',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [57745, 57859],
      },
      s_dimUHEZc9pI: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_routeActionQrl_action_submit',
        canonicalFilename:
          'index.qwik.mjs_routeActionQrl_action_submit_dimUHEZc9pI',
        hash: 'dimUHEZc9pI',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        loc: [44752, 46397],
      },
      s_IzYFpmvIvqg: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Link_component_handlePrefetch',
        canonicalFilename:
          'index.qwik.mjs_Link_component_handlePrefetch_IzYFpmvIvqg',
        hash: 'IzYFpmvIvqg',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_vF5JWJgPaqg',
        loc: [40471, 40820],
      },
      s_JisMKTklGqY: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_GetForm_component_form_onSubmit',
        canonicalFilename:
          'index.qwik.mjs_GetForm_component_form_onSubmit_JisMKTklGqY',
        hash: 'JisMKTklGqY',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_w1885HzKivA',
        loc: [58978, 59358],
      },
      s_Kr4t4seIT8M: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityMockProvider_component_goto',
        canonicalFilename:
          'index.qwik.mjs_QwikCityMockProvider_component_goto_Kr4t4seIT8M',
        hash: 'Kr4t4seIT8M',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_9SnDmpwm0UA',
        loc: [38917, 38995],
      },
      s_P78OndRdLsc: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_GetForm_component_form_onSubmit_1',
        canonicalFilename:
          'index.qwik.mjs_GetForm_component_form_onSubmit_1_P78OndRdLsc',
        hash: 'P78OndRdLsc',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_w1885HzKivA',
        loc: [59369, 59705],
      },
      s_PoiYXOcjt2Q: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName:
          'index.qwik.mjs_QwikCityProvider_component_registerPreventNav',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_registerPreventNav_PoiYXOcjt2Q',
        hash: 'PoiYXOcjt2Q',
        ctxKind: 'function',
        ctxName: '$',
        captures: !1,
        parent: 's_M0r1Ml4RS8Y',
        loc: [25461, 26338],
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
      s_aH6gC3O3NjI: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_QwikCityProvider_component_goto',
        canonicalFilename:
          'index.qwik.mjs_QwikCityProvider_component_goto_aH6gC3O3NjI',
        hash: 'aH6gC3O3NjI',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_M0r1Ml4RS8Y',
        loc: [26358, 28432],
      },
      s_etOD00CvXIA: {
        origin:
          '../node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
        displayName: 'index.qwik.mjs_Link_component_handleClick',
        canonicalFilename:
          'index.qwik.mjs_Link_component_handleClick_etOD00CvXIA',
        hash: 'etOD00CvXIA',
        ctxKind: 'function',
        ctxName: '$',
        captures: !0,
        parent: 's_vF5JWJgPaqg',
        loc: [41070, 41496],
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
        loc: [3159, 3191],
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
      s_h5ZUTiJtg0M: {
        origin: 'integrations/react/QDatoText.tsx',
        displayName: 'QDatoText.tsx_QDatoText_qwikify',
        canonicalFilename: 'QDatoText.tsx_QDatoText_qwikify_h5ZUTiJtg0M',
        hash: 'h5ZUTiJtg0M',
        ctxKind: 'function',
        ctxName: 'qwikify$',
        captures: !1,
        loc: [415, 423],
      },
      s_l0pvcy0l9l8: {
        origin: 'routes/finance/index.tsx',
        displayName:
          'index.tsx_finance_component_Fragment_div_div_button_onClick',
        canonicalFilename:
          'index.tsx_finance_component_Fragment_div_div_button_onClick_l0pvcy0l9l8',
        hash: 'l0pvcy0l9l8',
        ctxKind: 'eventHandler',
        ctxName: 'onClick$',
        captures: !0,
        parent: 's_ZHlbw7cbduU',
        loc: [2492, 2523],
      },
    },
    mapping: {
      s_EWIT9ENzUX0: 'q-f404139e.js',
      s_nl5HISeg0wo: 'q-56c83f43.js',
      s_AS9AtyfykOo: 'q-ba1cd6ea.js',
      s_CHnWD2D8Ibg: 'q-a611f669.js',
      s_0Bd6yCHL7MI: 'q-df8ac5ed.js',
      s_0DhRUxBQU40: 'q-3274e0b8.js',
      s_0hvFUpzGAyM: 'q-2b61f76c.js',
      s_2Fq8wIUpq5I: 'q-ed3fad15.js',
      s_6Y0uFrvPmQs: 'q-9b27ed2e.js',
      s_9SnDmpwm0UA: 'q-a0beaed7.js',
      s_F4XGSf5645s: 'q-a28b32be.js',
      s_GvPhUJ5Kg9Q: 'q-b54d6362.js',
      s_Jevt7v9CDh4: 'q-a5b7a129.js',
      s_M0r1Ml4RS8Y: 'q-957df035.js',
      s_Uzl3gaAclJA: 'q-2c047b37.js',
      s_Yj7Oj0dysis: 'q-70527a67.js',
      s_ZHlbw7cbduU: 'q-255d4d77.js',
      s_aHaxQW3gUTM: 'q-5b6ac6e3.js',
      s_bavVtvgbxHE: 'q-85b75e8a.js',
      s_eXD0K9bzzlo: 'q-eb12dcc2.js',
      s_k9rs7QcCFAU: 'q-2feb40a4.js',
      s_lVhXlSc0AIU: 'q-22b880c9.js',
      s_mjOPF0JN0c0: 'q-d0217f35.js',
      s_mvZ0o0x6mlM: 'q-684f062f.js',
      s_o4ccBuvIYCs: 'q-7f64cf44.js',
      s_o6tPurUTJPc: 'q-52a83ca8.js',
      s_o91wC8IGdho: 'q-1f550e5d.js',
      s_pCebMzCWV9M: 'q-8d7e3664.js',
      s_sZIPqDBaEpc: 'q-1231e223.js',
      s_sdm0n9ZoKr0: 'q-cad317b0.js',
      s_tC1zfRJh9xU: 'q-0bafd649.js',
      s_tstUEhxLUWc: 'q-474c3e4a.js',
      s_vF5JWJgPaqg: 'q-cf5b2a51.js',
      s_w1885HzKivA: 'q-57c340b2.js',
      s_x0jeNTb2iQc: 'q-c095fa9f.js',
      s_yMerZA5h0Vw: 'q-da3ff146.js',
      s_zH94hIe0Ick: 'q-9c0712f4.js',
      s_ZyezcyCH0SU: 'q-299a6719.js',
      s_fmb2t7vTfK4: 'q-fb77be38.js',
      s_ybemPOcl0BA: 'q-bdc73ccf.js',
      s_0HhqKOJuYCM: 'q-b1d58b9c.js',
      s_0w9yJ3mmM7E: 'q-a8455b7e.js',
      s_BsrO2LM87qo: 'q-d328bc64.js',
      s_CkFs2bTI3Zs: 'q-ef1427ff.js',
      s_M7JMtWmYWDA: 'q-a900479b.js',
      s_hkT84xKSMLE: 'q-2bd0137f.js',
      s_ik8BQrQgw9g: 'q-02be8f24.js',
      s_0nUqwewvsMY: 'q-cc1e7c88.js',
      s_1xmY1GPKbGU: 'q-d45faad0.js',
      s_6LYztwGzxAA: 'q-031ea14c.js',
      s_Oqvp8pd8rfo: 'q-9ab3e67b.js',
      s_dimUHEZc9pI: 'q-3ddcb897.js',
      s_IzYFpmvIvqg: 'q-6bb0653a.js',
      s_JisMKTklGqY: 'q-32cfef90.js',
      s_Kr4t4seIT8M: 'q-ab939fa3.js',
      s_P78OndRdLsc: 'q-0c03bc22.js',
      s_PoiYXOcjt2Q: 'q-d76e51fc.js',
      s_SqNyGWM7k0k: 'q-64987741.js',
      s_aH6gC3O3NjI: 'q-84720cbd.js',
      s_etOD00CvXIA: 'q-7af04e28.js',
      s_jWy0aWw4FvU: 'q-f1e591ca.js',
      s_xTYSAGLBrBU: 'q-98ea8e75.js',
      s_h5ZUTiJtg0M: 'q-995cd6e9.js',
      s_l0pvcy0l9l8: 'q-20642cd5.js',
    },
    bundles: {
      '../service-worker.js': {
        size: 2808,
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/service-worker.mjs',
          'src/routes/service-worker.ts',
        ],
      },
      'q-02be8f24.js': {
        size: 88,
        imports: ['q-3274e0b8.js', 'q-9ab3e67b.js'],
        symbols: ['s_ik8BQrQgw9g'],
      },
      'q-031ea14c.js': {
        size: 109,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-react@0.5.0_@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81_d442eccn5xlvshbz4k7bf5blka/node_modules/@builder.io/qwik-react/lib/index.qwik.mjs_useWakeupSignal_activate_6LYztwGzxAA.js',
        ],
        symbols: ['s_6LYztwGzxAA'],
      },
      'q-0bafd649.js': {
        size: 2997,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/eggs/eggs.css?used&inline',
          'src/components/eggs/eggs.tsx_Eggs_component_tC1zfRJh9xU.js',
          'src/components/eggs/eggs.tsx_Eggs_component_useStylesScoped_M7JMtWmYWDA.js',
        ],
        symbols: ['s_tC1zfRJh9xU'],
      },
      'q-0c03bc22.js': {
        size: 111,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        symbols: ['s_P78OndRdLsc'],
      },
      'q-1231e223.js': {
        size: 1829,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: ['q-cad317b0.js'],
        origins: [
          'src/components/animated-component/animated-component.tsx',
          'src/components/timeline/timeline.tsx_Timeline_component_sZIPqDBaEpc.js',
        ],
        symbols: ['s_sZIPqDBaEpc'],
      },
      'q-1f550e5d.js': {
        size: 706,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/stacks/stacks.module.css?used',
          'src/components/stacks/stacks.tsx_Stacks_component_o91wC8IGdho.js',
        ],
        symbols: ['s_o91wC8IGdho'],
      },
      'q-20642cd5.js': {
        size: 179,
        imports: [
          'q-299a6719.js',
          'q-2bd0137f.js',
          'q-32cfef90.js',
          'q-995cd6e9.js',
          'q-9ab3e67b.js',
          'q-bdc73ccf.js',
        ],
        symbols: ['s_l0pvcy0l9l8'],
      },
      'q-22b880c9.js': {
        size: 3670,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/routes/button-game/index.tsx',
          'src/routes/button-game/index.tsx_button_game_component_lVhXlSc0AIU.js',
          'src/routes/button-game/index.tsx_button_game_component_tryPassLevel_SqNyGWM7k0k.js',
        ],
        symbols: ['s_lVhXlSc0AIU'],
      },
      'q-255d4d77.js': {
        size: 184,
        imports: [
          'q-299a6719.js',
          'q-2bd0137f.js',
          'q-32cfef90.js',
          'q-995cd6e9.js',
          'q-9ab3e67b.js',
          'q-bdc73ccf.js',
        ],
        symbols: ['s_ZHlbw7cbduU'],
      },
      'q-299a6719.js': {
        size: 1489,
        imports: [
          'q-2bd0137f.js',
          'q-32cfef90.js',
          'q-995cd6e9.js',
          'q-9ab3e67b.js',
        ],
        origins: [
          'src/routes/finance/[slug]/index.tsx',
          'src/routes/finance/[slug]/index.tsx_slug_component_mjOPF0JN0c0.js',
          'src/routes/finance/[slug]/index.tsx_slug_component_useStyles_ZyezcyCH0SU.js',
          'src/routes/finance/finance.css?used&inline',
        ],
        symbols: ['s_ZyezcyCH0SU'],
      },
      'q-2b61f76c.js': {
        size: 2204,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/bubble/bubble.css?used&inline',
          'src/components/bubble/bubble.tsx_Bubble_component_0hvFUpzGAyM.js',
          'src/components/bubble/bubble.tsx_Bubble_component_useStylesScoped_CkFs2bTI3Zs.js',
        ],
        symbols: ['s_0hvFUpzGAyM'],
      },
      'q-2bd0137f.js': {
        size: 143894,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: ['q-031ea14c.js'],
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
      'q-2c047b37.js': {
        size: 1102,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        dynamicImports: ['q-5b6ac6e3.js'],
        origins: [
          'src/components/articles/articles.tsx',
          'src/routes/blog/index.tsx',
          'src/routes/blog/index.tsx_blog_component_Uzl3gaAclJA.js',
        ],
        symbols: ['s_Uzl3gaAclJA'],
      },
      'q-2feb40a4.js': {
        size: 3326,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/cat/cat.css?used&inline',
          'src/components/cat/cat.tsx_Cat_component_k9rs7QcCFAU.js',
          'src/components/cat/cat.tsx_Cat_component_useStylesScoped_xTYSAGLBrBU.js',
        ],
        symbols: ['s_k9rs7QcCFAU'],
      },
      'q-3274e0b8.js': {
        size: 7129,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/cat/cat-walk.css?used&inline',
          'src/components/cat/cat-walk.tsx_CatWalk_component_0DhRUxBQU40.js',
          'src/components/cat/cat-walk.tsx_CatWalk_component_useStylesScoped_ik8BQrQgw9g.js',
        ],
        symbols: ['s_0DhRUxBQU40'],
      },
      'q-32cfef90.js': {
        size: 10299,
        isTask: !0,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: [
          'q-684f062f.js',
          'q-957df035.js',
          'q-cf5b2a51.js',
          'q-d45faad0.js',
        ],
        origins: [
          '@qwik-city-sw-register',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_form_onSubmit_1_P78OndRdLsc.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_form_onSubmit_JisMKTklGqY.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_GetForm_component_w1885HzKivA.js',
          'node_modules/.pnpm/zod@3.22.4/node_modules/zod/lib/index.mjs',
        ],
        symbols: ['s_JisMKTklGqY'],
      },
      'q-3ddcb897.js': {
        size: 813,
        isTask: !0,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_routeActionQrl_action_submit_dimUHEZc9pI.js',
        ],
        symbols: ['s_dimUHEZc9pI'],
      },
      'q-474c3e4a.js': {
        size: 26432,
        imports: [
          'q-1231e223.js',
          'q-2c047b37.js',
          'q-32cfef90.js',
          'q-9ab3e67b.js',
        ],
        dynamicImports: [
          'q-1231e223.js',
          'q-1f550e5d.js',
          'q-70527a67.js',
          'q-a5b7a129.js',
          'q-c095fa9f.js',
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
      'q-52a83ca8.js': {
        size: 88,
        imports: ['q-9ab3e67b.js', 'q-d328bc64.js'],
        symbols: ['s_o6tPurUTJPc'],
      },
      'q-56c83f43.js': {
        size: 7271,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        dynamicImports: [
          'q-22b880c9.js',
          'q-299a6719.js',
          'q-2c047b37.js',
          'q-474c3e4a.js',
          'q-98467757.js',
          'q-a3767944.js',
          'q-bdc73ccf.js',
          'q-c31a0420.js',
          'q-f8228b5a.js',
        ],
        origins: [
          '@qwik-city-plan',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_M0r1Ml4RS8Y.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_goto_aH6gC3O3NjI.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_registerPreventNav_PoiYXOcjt2Q.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_useStyles_fmb2t7vTfK4.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityProvider_component_useTask_nl5HISeg0wo.js',
        ],
        symbols: ['s_nl5HISeg0wo'],
      },
      'q-57c340b2.js': {
        size: 88,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        symbols: ['s_w1885HzKivA'],
      },
      'q-5b6ac6e3.js': {
        size: 988,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/articles/articles.tsx_Articles_component_aHaxQW3gUTM.js',
        ],
        symbols: ['s_aHaxQW3gUTM'],
      },
      'q-64987741.js': {
        size: 111,
        isTask: !0,
        imports: ['q-22b880c9.js', 'q-9ab3e67b.js'],
        symbols: ['s_SqNyGWM7k0k'],
      },
      'q-684f062f.js': {
        size: 982,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_RouterOutlet_component_mvZ0o0x6mlM.js',
        ],
        symbols: ['s_mvZ0o0x6mlM'],
      },
      'q-6bb0653a.js': {
        size: 130,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-7af04e28.js', 'q-9ab3e67b.js'],
        symbols: ['s_IzYFpmvIvqg'],
      },
      'q-70527a67.js': {
        size: 1864,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/cards/cards.tsx_Cards_component_Yj7Oj0dysis.js',
        ],
        symbols: ['s_Yj7Oj0dysis'],
      },
      'q-7af04e28.js': {
        size: 1687,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_handleClick_etOD00CvXIA.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_handlePrefetch_IzYFpmvIvqg.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Link_component_vF5JWJgPaqg.js',
        ],
        symbols: ['s_etOD00CvXIA'],
      },
      'q-7f64cf44.js': {
        size: 2241,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/header/header.tsx_Header_component_o4ccBuvIYCs.js',
        ],
        symbols: ['s_o4ccBuvIYCs'],
      },
      'q-84720cbd.js': {
        size: 135,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-56c83f43.js', 'q-9ab3e67b.js'],
        symbols: ['s_aH6gC3O3NjI'],
      },
      'q-85b75e8a.js': {
        size: 775,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: ['src/routes/404.tsx__404_component_bavVtvgbxHE.js'],
        symbols: ['s_bavVtvgbxHE'],
      },
      'q-8d7e3664.js': {
        size: 2904,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/contact/contact.tsx_Contact_component_pCebMzCWV9M.js',
        ],
        symbols: ['s_pCebMzCWV9M'],
      },
      'q-957df035.js': {
        size: 112,
        imports: ['q-32cfef90.js', 'q-56c83f43.js', 'q-9ab3e67b.js'],
        symbols: ['s_M0r1Ml4RS8Y'],
      },
      'q-98467757.js': {
        size: 316,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: ['q-da3ff146.js'],
        origins: ['src/routes/projects/index.tsx'],
      },
      'q-98ea8e75.js': {
        size: 88,
        imports: ['q-2feb40a4.js', 'q-9ab3e67b.js'],
        symbols: ['s_xTYSAGLBrBU'],
      },
      'q-995cd6e9.js': {
        size: 9124,
        imports: ['q-2bd0137f.js', 'q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/array-flatten@3.0.0/node_modules/array-flatten/dist.es2015/index.js',
          'node_modules/.pnpm/datocms-structured-text-generic-html-renderer@4.0.2/node_modules/datocms-structured-text-generic-html-renderer/dist/esm/index.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/definitions.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/guards.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/index.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/render.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/types.js',
          'node_modules/.pnpm/datocms-structured-text-utils@4.0.1/node_modules/datocms-structured-text-utils/dist/esm/validate.js',
          'node_modules/.pnpm/react-datocms@7.0.4_@types+react-dom@18.3.1_@types+react@18.3.12_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-datocms/dist/esm/StructuredText/index.js',
          'node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js',
          'node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js',
          'src/integrations/react/QDatoText.tsx',
          'src/integrations/react/QDatoText.tsx_QDatoText_qwikify_h5ZUTiJtg0M.js',
        ],
        symbols: ['s_h5ZUTiJtg0M'],
      },
      'q-9ab3e67b.js': {
        size: 69950,
        isTask: !0,
        origins: [
          '@builder.io/qwik/build',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_Form_form_onSubmit_Oqvp8pd8rfo.js',
          'node_modules/.pnpm/@builder.io+qwik@1.10.0_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik/dist/core.prod.mjs',
        ],
        symbols: ['s_Oqvp8pd8rfo'],
      },
      'q-9b27ed2e.js': {
        size: 3601,
        imports: [
          'q-1231e223.js',
          'q-32cfef90.js',
          'q-9ab3e67b.js',
          'q-b54d6362.js',
        ],
        dynamicImports: [
          'q-0bafd649.js',
          'q-2feb40a4.js',
          'q-3274e0b8.js',
          'q-52a83ca8.js',
          'q-7f64cf44.js',
          'q-8d7e3664.js',
          'q-b54d6362.js',
          'q-df8ac5ed.js',
        ],
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
          'src/components/cat/cat-walk.tsx',
          'src/components/cat/cat.tsx',
          'src/components/contact/contact.tsx',
          'src/components/eggs/eggs.tsx',
          'src/components/footer/footer.tsx',
          'src/components/header/header.tsx',
          'src/components/rudolph/rudolph.tsx',
          'src/components/santa/santa.tsx',
          'src/routes/layout.tsx_layout_component_6Y0uFrvPmQs.js',
        ],
        symbols: ['s_6Y0uFrvPmQs'],
      },
      'q-9c0712f4.js': {
        size: 88,
        imports: ['q-2bd0137f.js', 'q-9ab3e67b.js'],
        symbols: ['s_zH94hIe0Ick'],
      },
      'q-a0beaed7.js': {
        size: 803,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityMockProvider_component_9SnDmpwm0UA.js',
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_QwikCityMockProvider_component_goto_Kr4t4seIT8M.js',
        ],
        symbols: ['s_9SnDmpwm0UA'],
      },
      'q-a28b32be.js': {
        size: 6256,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/santa-hat/santa-hat.tsx_SantaHat_component_F4XGSf5645s.js',
        ],
        symbols: ['s_F4XGSf5645s'],
      },
      'q-a3767944.js': {
        size: 245,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: ['q-9b27ed2e.js'],
        origins: ['src/routes/layout.tsx'],
      },
      'q-a5b7a129.js': {
        size: 4993,
        imports: [
          'q-2bd0137f.js',
          'q-32cfef90.js',
          'q-9ab3e67b.js',
          'q-b54d6362.js',
        ],
        dynamicImports: ['q-2b61f76c.js', 'q-a28b32be.js'],
        origins: [
          'node_modules/.pnpm/number-to-words@1.2.4/node_modules/number-to-words/numberToWords.min.js',
          'src/components/bubble/bubble.tsx',
          'src/components/hero/hero.tsx_Hero_component_Jevt7v9CDh4.js',
          'src/components/santa-hat/santa-hat.tsx',
          'src/media/pako_cropped.jpg?jsx',
        ],
        symbols: ['s_Jevt7v9CDh4'],
      },
      'q-a611f669.js': {
        size: 768,
        isTask: !0,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/animated-component/animated-component.tsx_AnimatedComp_component_sdm0n9ZoKr0.js',
          'src/components/animated-component/animated-component.tsx_AnimatedComp_component_useVisibleTask_CHnWD2D8Ibg.js',
          'src/utils/helpers.ts',
        ],
        symbols: ['s_CHnWD2D8Ibg'],
      },
      'q-a8455b7e.js': {
        size: 155,
        imports: [
          'q-1231e223.js',
          'q-2c047b37.js',
          'q-32cfef90.js',
          'q-474c3e4a.js',
          'q-9ab3e67b.js',
        ],
        symbols: ['s_0w9yJ3mmM7E'],
      },
      'q-a900479b.js': {
        size: 83,
        imports: ['q-0bafd649.js', 'q-9ab3e67b.js'],
        symbols: ['s_M7JMtWmYWDA'],
      },
      'q-ab939fa3.js': {
        size: 135,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js', 'q-a0beaed7.js'],
        symbols: ['s_Kr4t4seIT8M'],
      },
      'q-b18fffa2.js': {
        size: 142,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: ['q-eb12dcc2.js'],
        origins: ['src/global.scss', 'src/root.tsx'],
      },
      'q-b1d58b9c.js': {
        size: 6084,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/rudolph/rudolph.css?used&inline',
          'src/components/rudolph/rudolph.tsx_Rudolph_component_0Bd6yCHL7MI.js',
          'src/components/rudolph/rudolph.tsx_Rudolph_component_useStylesScoped_0HhqKOJuYCM.js',
        ],
        symbols: ['s_0HhqKOJuYCM'],
      },
      'q-b54d6362.js': {
        size: 3658,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/footer/footer.tsx_Footer_component_Fragment_footer_nav_label_onClick_jWy0aWw4FvU.js',
          'src/components/footer/footer.tsx_Footer_component_GvPhUJ5Kg9Q.js',
          'src/services/common.service.ts',
        ],
        symbols: ['s_GvPhUJ5Kg9Q'],
      },
      'q-ba1cd6ea.js': {
        size: 152,
        isTask: !0,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_usePreventNavigateQrl_useVisibleTask_AS9AtyfykOo.js',
        ],
        symbols: ['s_AS9AtyfykOo'],
      },
      'q-bdc73ccf.js': {
        size: 2807,
        imports: [
          'q-299a6719.js',
          'q-2bd0137f.js',
          'q-32cfef90.js',
          'q-995cd6e9.js',
          'q-9ab3e67b.js',
        ],
        origins: [
          'src/routes/finance/index.tsx',
          'src/routes/finance/index.tsx_finance_component_Fragment_div_div_button_onClick_l0pvcy0l9l8.js',
          'src/routes/finance/index.tsx_finance_component_ZHlbw7cbduU.js',
          'src/routes/finance/index.tsx_finance_component_useStyles_ybemPOcl0BA.js',
        ],
        symbols: ['s_ybemPOcl0BA'],
      },
      'q-c095fa9f.js': {
        size: 1108,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/linkItem/linkItem.module.css?used',
          'src/components/linkItem/linkItem.tsx_LinkItem_component_x0jeNTb2iQc.js',
        ],
        symbols: ['s_x0jeNTb2iQc'],
      },
      'q-c31a0420.js': {
        size: 118,
        origins: ['src/routes/dynamic-sitemap.xml/index.tsx'],
      },
      'q-cad317b0.js': {
        size: 88,
        imports: ['q-9ab3e67b.js', 'q-a611f669.js'],
        symbols: ['s_sdm0n9ZoKr0'],
      },
      'q-cc1e7c88.js': {
        size: 1238,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_serverQrl_rpc_0nUqwewvsMY.js',
        ],
        symbols: ['s_0nUqwewvsMY'],
      },
      'q-cf5b2a51.js': {
        size: 107,
        imports: ['q-32cfef90.js', 'q-7af04e28.js', 'q-9ab3e67b.js'],
        symbols: ['s_vF5JWJgPaqg'],
      },
      'q-d0217f35.js': {
        size: 155,
        imports: [
          'q-299a6719.js',
          'q-2bd0137f.js',
          'q-32cfef90.js',
          'q-995cd6e9.js',
          'q-9ab3e67b.js',
        ],
        symbols: ['s_mjOPF0JN0c0'],
      },
      'q-d328bc64.js': {
        size: 4146,
        imports: ['q-9ab3e67b.js'],
        origins: [
          'src/components/santa/santa.css?used&inline',
          'src/components/santa/santa.tsx_Santa_component_o6tPurUTJPc.js',
          'src/components/santa/santa.tsx_Santa_component_useStylesScoped_BsrO2LM87qo.js',
        ],
        symbols: ['s_BsrO2LM87qo'],
      },
      'q-d45faad0.js': {
        size: 2297,
        origins: [
          'node_modules/.pnpm/@builder.io+qwik-city@1.10.0_acorn@8.14.0_rollup@3.29.5_typescript@5.6.3_vite@4.5.5_@types+node@20.17.6_sass@1.81.0_/node_modules/@builder.io/qwik-city/lib/index.qwik.mjs_spaInit_event_1xmY1GPKbGU.js',
        ],
        symbols: ['s_1xmY1GPKbGU'],
      },
      'q-d76e51fc.js': {
        size: 130,
        isTask: !0,
        imports: ['q-32cfef90.js', 'q-56c83f43.js', 'q-9ab3e67b.js'],
        symbols: ['s_PoiYXOcjt2Q'],
      },
      'q-da3ff146.js': {
        size: 510,
        imports: [
          'q-1231e223.js',
          'q-2c047b37.js',
          'q-32cfef90.js',
          'q-474c3e4a.js',
          'q-9ab3e67b.js',
        ],
        origins: [
          'src/routes/projects/index.tsx_projects_component_yMerZA5h0Vw.js',
        ],
        symbols: ['s_yMerZA5h0Vw'],
      },
      'q-df8ac5ed.js': {
        size: 88,
        imports: ['q-9ab3e67b.js', 'q-b1d58b9c.js'],
        symbols: ['s_0Bd6yCHL7MI'],
      },
      'q-eb12dcc2.js': {
        size: 601,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        dynamicImports: ['q-ed3fad15.js'],
        origins: [
          'src/components/router-head/router-head.tsx',
          'src/root.tsx_root_component_eXD0K9bzzlo.js',
        ],
        symbols: ['s_eXD0K9bzzlo'],
      },
      'q-ed3fad15.js': {
        size: 717,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js'],
        origins: [
          'src/components/router-head/router-head.tsx_RouterHead_component_2Fq8wIUpq5I.js',
        ],
        symbols: ['s_2Fq8wIUpq5I'],
      },
      'q-ed66b930.js': {
        size: 125,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: ['../service-worker.js'],
        origins: ['@qwik-city-entries'],
      },
      'q-ef1427ff.js': {
        size: 88,
        imports: ['q-2b61f76c.js', 'q-9ab3e67b.js'],
        symbols: ['s_CkFs2bTI3Zs'],
      },
      'q-f1e591ca.js': {
        size: 107,
        imports: ['q-32cfef90.js', 'q-9ab3e67b.js', 'q-b54d6362.js'],
        symbols: ['s_jWy0aWw4FvU'],
      },
      'q-f404139e.js': {
        size: 106,
        isTask: !0,
        imports: ['q-2bd0137f.js', 'q-9ab3e67b.js'],
        symbols: ['s_EWIT9ENzUX0'],
      },
      'q-f8228b5a.js': {
        size: 322,
        imports: ['q-9ab3e67b.js'],
        dynamicImports: ['q-85b75e8a.js'],
        origins: ['src/routes/404.tsx'],
      },
      'q-fb77be38.js': {
        size: 112,
        imports: ['q-32cfef90.js', 'q-56c83f43.js', 'q-9ab3e67b.js'],
        symbols: ['s_fmb2t7vTfK4'],
      },
    },
    injections: [
      {
        tag: 'link',
        location: 'head',
        attributes: { rel: 'stylesheet', href: '/assets/6bdacab8-style.css' },
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
      os: 'darwin',
      node: '21.1.0',
    },
  },
  Le = () => {
    const s = le(),
      e = ce()
    return q(
      N,
      {
        children: [
          j('title', null, null, s.title, 1, null),
          j(
            'link',
            null,
            { rel: 'canonical', href: _e(n => n.url.href, [e], 'p0.url.href') },
            null,
            3,
            null,
          ),
          j(
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
          j(
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
  Je = G(Z(Le, 's_2Fq8wIUpq5I'))
const Re = () =>
    q(
      be,
      {
        children: [
          j(
            'head',
            null,
            null,
            [
              j('meta', null, { charSet: 'utf-8' }, null, 3, null),
              j(
                'link',
                null,
                { rel: 'manifest', href: '/manifest.json' },
                null,
                3,
                null,
              ),
              j(
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
              q(Je, null, 3, 'Le_0'),
            ],
            1,
            null,
          ),
          j(
            'body',
            null,
            { lang: 'en' },
            [q(ue, null, 3, 'Le_1'), q(fe, null, 3, 'Le_2')],
            1,
            null,
          ),
        ],
      },
      1,
      'Le_3',
    ),
  $e = G(Z(Re, 's_eXD0K9bzzlo'))
function Ve(s) {
  return Ae(q($e, null, 3, 'Ro_0'), {
    manifest: Ye,
    ...s,
    containerAttributes: { lang: 'en-us', ...s.containerAttributes },
  })
}
export { Ve as default }
