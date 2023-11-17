import{j as f,_ as oe,a as ie,F as A,s as ae,c as J,i as V,u as le,b as ce,d as w,e as b,f as ue,g as k,h as de,R as fe,S as me,Q as pe}from"./assets/@qwik-city-plan-7942f01d.mjs";import"number-to-words";import"date-fns";/**
 * @license
 * @builder.io/qwik/server 1.2.15
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var ve=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function be(e,n){const t=n==null?void 0:n.mapper,r=e.symbolMapper?e.symbolMapper:s=>{var a;if(t){const i=S(s),l=t[i];if(!l){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(i))return[s,"_"];console.error("Cannot resolve symbol",s,"in",t)}return l}};return{isServer:!0,async importSymbol(s,a,i){var q;const l=S(i),c=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(l);if(c)return c;let d=String(a);d.endsWith(".js")||(d+=".js");const g=ve(d);if(!(i in g))throw new Error(`Q-ERROR: missing symbol '${i}' in module '${d}'.`);return g[i]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(a=>{setTimeout(()=>{a(s())})}),chunkForSymbol(s){return r(s,t)}}}async function he(e,n){const t=be(e,n);ae(t)}var S=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function E(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function Z(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var ye=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,we=`(() => {
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
})();`,qe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ge=`(() => {
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
})();`;function _e(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?ge:qe).replace("window.qEvents",JSON.stringify(e.events)):e.debug?we:ye}function ke(e,n,t){if(!t)return[];const r=n.prefetchStrategy,o=Z(n);if(r!==null){if(!r||!r.symbolsToPrefetch||r.symbolsToPrefetch==="auto")return Ee(e,t,o);if(typeof r.symbolsToPrefetch=="function")try{return r.symbolsToPrefetch({manifest:t.manifest})}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}}return[]}function Ee(e,n,t){const r=[],o=e==null?void 0:e.qrls,{mapper:s,manifest:a}=n,i=new Map;if(Array.isArray(o))for(const l of o){const c=l.getHash(),d=s[c];d&&G(a,i,r,t,d[1])}return r}function G(e,n,t,r,o){const s=r+o;let a=n.get(s);if(!a){a={url:s,imports:[]},n.set(s,a);const i=e.bundles[o];if(i&&Array.isArray(i.imports))for(const l of i.imports)G(e,n,a.imports,r,l)}t.push(a)}function Se(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function I(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function C(e){const n=[],t=r=>{if(Array.isArray(r))for(const o of r)n.includes(o.url)||(n.push(o.url),t(o.imports))};return t(e),n}function Ie(e){const n=new Map;let t=0;const r=(i,l)=>{if(Array.isArray(i))for(const c of i){const d=n.get(c.url)||0;n.set(c.url,d+1),t++,l.has(c.url)||(l.add(c.url),r(c.imports,l))}},o=new Set;for(const i of e)o.clear(),r(i.imports,o);const s=t/n.size*2,a=Array.from(n.entries());return a.sort((i,l)=>l[1]-i[1]),a.slice(0,5).filter(i=>i[1]>s).map(i=>i[0])}function Ae(e,n,t){const r=xe(e==null?void 0:e.implementation),o=[];return r.prefetchEvent==="always"&&Ce(o,n,t),r.linkInsert==="html-append"&&Le(o,n,r),r.linkInsert==="js-append"?Te(o,n,r,t):r.workerFetchInsert==="always"&&Re(o,n,t),o.length>0?f(A,{children:o}):null}function Ce(e,n,t){const r=Ie(n);for(const o of r)e.push(f("link",{rel:"modulepreload",href:o,nonce:t}));e.push(f("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:t}))}function Le(e,n,t){const r=C(n),o=t.linkRel||"prefetch";for(const s of r){const a={};a.href=s,a.rel=o,(o==="prefetch"||o==="preload")&&s.endsWith(".js")&&(a.as="script"),e.push(f("link",a,void 0))}}function Te(e,n,t,r){const o=t.linkRel||"prefetch";let s="";t.workerFetchInsert==="no-link-support"&&(s+="let supportsLinkRel = true;"),s+=`const u=${JSON.stringify(C(n))};`,s+="u.map((u,i)=>{",s+="const l=document.createElement('link');",s+='l.setAttribute("href",u);',s+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(s+="if(i===0){",s+="try{",s+=`supportsLinkRel=l.relList.supports("${o}");`,s+="}catch(e){}",s+="}"),s+="document.body.appendChild(l);",s+="});",t.workerFetchInsert==="no-link-support"&&(s+="if(!supportsLinkRel){",s+=I(),s+="}"),t.workerFetchInsert==="always"&&(s+=I()),e.push(f("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:s,nonce:r}))}function Re(e,n,t){let r=`const u=${JSON.stringify(C(n))};`;r+=I(),e.push(f("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:r,nonce:t}))}function xe(e){return e&&typeof e=="object"?e:Ne}var Ne={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Pe="<!DOCTYPE html>";async function je(e,n){var j;let t=n.stream,r=0,o=0,s=0,a=0,i="",l;const c=((j=n.streaming)==null?void 0:j.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=n.containerTagName??"html",g=n.containerAttributes??{},q=t,X=E(),Y=Z(n),m=De(n.manifest);function L(){i&&(q.write(i),i="",r=0,s++,s===1&&(a=X()))}function T(u){const p=u.length;r+=p,o+=p,i+=u}switch(c.strategy){case"disabled":t={write:T};break;case"direct":t=q;break;case"auto":let u=0,p=!1;const D=c.maximunChunk??0,_=c.maximunInitialChunk??0;t={write(y){y==="<!--qkssr-f-->"?p||(p=!0):y==="<!--qkssr-pu-->"?u++:y==="<!--qkssr-po-->"?u--:T(y),u===0&&(p||r>=(s===0?_:D))&&(p=!1,L())}};break}d==="html"?t.write(Pe):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await he(n,m);const R=m==null?void 0:m.manifest.injections,ee=R?R.map(u=>f(u.tag,u.attributes??{})):void 0,ne=E(),x=[];let N=0,P=0;await oe(e,{stream:t,containerTagName:d,containerAttributes:g,serverData:n.serverData,base:Y,beforeContent:ee,beforeClose:async(u,p,D,_)=>{var U,z,H,B,W,K,M;N=ne();const y=E();l=await ie(u,p,void 0,_);const h=[];if(n.prefetchStrategy!==null){const v=ke(l,n,m);if(v.length>0){const Q=Ae(n.prefetchStrategy,v,(U=n.serverData)==null?void 0:U.nonce);Q&&h.push(Q)}}const re=JSON.stringify(l.state,void 0,void 0);h.push(f("script",{type:"qwik/json",dangerouslySetInnerHTML:Fe(re),nonce:(z=n.serverData)==null?void 0:z.nonce})),l.funcs.length>0&&h.push(f("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Oe(l.funcs),nonce:(H=n.serverData)==null?void 0:H.nonce}));const se=!l||l.mode!=="static",F=((B=n.qwikLoader)==null?void 0:B.include)??"auto",$=F==="always"||F==="auto"&&se;if($){const v=_e({events:(W=n.qwikLoader)==null?void 0:W.events,debug:n.debug});h.push(f("script",{id:"qwikloader",dangerouslySetInnerHTML:v,nonce:(K=n.serverData)==null?void 0:K.nonce}))}const O=Array.from(p.$events$,v=>JSON.stringify(v));if(O.length>0){let v=`window.qwikevents.push(${O.join(", ")})`;$||(v=`window.qwikevents||=[];${v}`),h.push(f("script",{dangerouslySetInnerHTML:v,nonce:(M=n.serverData)==null?void 0:M.nonce}))}return $e(x,u),P=y(),f(A,{children:h})},manifestHash:(m==null?void 0:m.manifest.manifestHash)||"dev"}),d!=="html"&&t.write("<!--/cq-->"),L();const te=l.resources.some(u=>u._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:s,manifest:m==null?void 0:m.manifest,size:o,isStatic:!te,timing:{render:N,snapshot:P,firstFlush:a},_symbols:x}}function De(e){if(e){if("mapper"in e)return e;if(e=Se(e),e){const n={};return Object.entries(e.mapping).forEach(([t,r])=>{n[S(t)]=[t,r]}),{mapper:n,manifest:e}}}}var Fe=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function $e(e,n){var t;for(const r of n){const o=(t=r.$componentQrl$)==null?void 0:t.getSymbol();o&&!e.includes(o)&&e.push(o)}}function Oe(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const Ue=null,ze=()=>{const e=le(),n=ce();return w(A,{children:[b("title",null,null,e.title,1,null),b("link",null,{href:ue(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),b("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),b("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>k("meta",{...t},null,0,t.key)),e.links.map(t=>k("link",{...t},null,0,t.key)),e.styles.map(t=>k("style",{...t.props,dangerouslySetInnerHTML:de(t,"style")},null,0,t.key))]},1,"0Z_0")},He=J(V(ze,"s_2Fq8wIUpq5I"));const Be=()=>w(pe,{children:[b("head",null,null,[b("meta",null,{charSet:"utf-8"},null,3,null),b("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),w(He,null,3,"Le_0")],1,null),b("body",null,{lang:"en"},[w(fe,null,3,"Le_1"),w(me,null,3,"Le_2")],1,null)]},1,"Le_3"),We=J(V(Be,"s_eXD0K9bzzlo"));function Ve(e){return je(w(We,null,3,"Ro_0"),{manifest:Ue,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Ve as default};
