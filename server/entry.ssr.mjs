import{j as u,_ as oe,a as re,F as I,s as ce,c as W,i as H,u as ae,b as le,d as j,e as y,f as de,g as x,h as me,R as ue,S as pe,Q as fe}from"./assets/@qwik-city-plan-887acaba.mjs";import"number-to-words";import"date-fns";/**
 * @license
 * @builder.io/qwik/server 1.2.18
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var qe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(s,n)=>(typeof require<"u"?require:s)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function ye(e,s){const n=s==null?void 0:s.mapper,t=e.symbolMapper?e.symbolMapper:i=>{var c;if(n){const r=k(i),a=n[r];if(!a){if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return a}};return{isServer:!0,async importSymbol(i,c,r){var v;const a=k(r),l=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(a);if(l)return l;let m=String(c);m.endsWith(".js")||(m+=".js");const h=qe(m);if(!(r in h))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${m}'.`);return h[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(c=>{setTimeout(()=>{c(i())})}),chunkForSymbol(i){return t(i,n)}}}async function be(e,s){const n=ye(e,s);ce(n)}var k=e=>{const s=e.lastIndexOf("_");return s>-1?e.slice(s+1):e};function w(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function J(e){let s=e.base;return typeof e.base=="function"&&(s=e.base(e)),typeof s=="string"?(s.endsWith("/")||(s+="/"),s):"/build/"}var _e=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,je=`(() => {
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
})();`,ve=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,he=`(() => {
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
})();`;function ge(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?he:ve).replace("window.qEvents",JSON.stringify(e.events)):e.debug?je:_e}function xe(e,s,n){if(!n)return[];const t=s.prefetchStrategy,o=J(s);if(t!==null){if(!t||!t.symbolsToPrefetch||t.symbolsToPrefetch==="auto")return we(e,n,o);if(typeof t.symbolsToPrefetch=="function")try{return t.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function we(e,s,n){const t=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:c}=s,r=new Map;if(Array.isArray(o))for(const a of o){const l=a.getHash(),m=i[l];m&&Z(c,r,t,n,m[1])}return t}function Z(e,s,n,t,o){const i=t+o;let c=s.get(i);if(!c){c={url:i,imports:[]},s.set(i,c);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const a of r.imports)Z(e,s,c.imports,t,a)}n.push(c)}function ke(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function N(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function z(e){const s=[],n=t=>{if(Array.isArray(t))for(const o of t)s.includes(o.url)||(s.push(o.url),n(o.imports))};return n(e),s}function Ne(e){const s=new Map;let n=0;const t=(r,a)=>{if(Array.isArray(r))for(const l of r){const m=s.get(l.url)||0;s.set(l.url,m+1),n++,a.has(l.url)||(a.add(l.url),t(l.imports,a))}},o=new Set;for(const r of e)o.clear(),t(r.imports,o);const i=n/s.size*2,c=Array.from(s.entries());return c.sort((r,a)=>a[1]-r[1]),c.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ie(e,s,n){const t=Ae(e==null?void 0:e.implementation),o=[];return t.prefetchEvent==="always"&&ze(o,s,n),t.linkInsert==="html-append"&&Ee(o,s,t),t.linkInsert==="js-append"?Ce(o,s,t,n):t.workerFetchInsert==="always"&&Fe(o,s,n),o.length>0?u(I,{children:o}):null}function ze(e,s,n){const t=Ne(s);for(const o of t)e.push(u("link",{rel:"modulepreload",href:o,nonce:n}));e.push(u("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:n}))}function Ee(e,s,n){const t=z(s),o=n.linkRel||"prefetch";for(const i of t){const c={};c.href=i,c.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(c.as="script"),e.push(u("link",c,void 0))}}function Ce(e,s,n,t){const o=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(z(s))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=N(),i+="}"),n.workerFetchInsert==="always"&&(i+=N()),e.push(u("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:t}))}function Fe(e,s,n){let t=`const u=${JSON.stringify(z(s))};`;t+=N(),e.push(u("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:t,nonce:n}))}function Ae(e){return e&&typeof e=="object"?e:Se}var Se={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Ke="<!DOCTYPE html>";async function Te(e,s){var T;let n=s.stream,t=0,o=0,i=0,c=0,r="",a;const l=((T=s.streaming)==null?void 0:T.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=s.containerTagName??"html",h=s.containerAttributes??{},v=n,G=w(),X=J(s),p=Le(s.manifest);function E(){r&&(v.write(r),r="",t=0,i++,i===1&&(c=G()))}function C(d){const f=d.length;t+=f,o+=f,r+=d}switch(l.strategy){case"disabled":n={write:C};break;case"direct":n=v;break;case"auto":let d=0,f=!1;const L=l.maximunChunk??0,g=l.maximunInitialChunk??0;n={write(_){_==="<!--qkssr-f-->"?f||(f=!0):_==="<!--qkssr-pu-->"?d++:_==="<!--qkssr-po-->"?d--:C(_),d===0&&(f||t>=(i===0?g:L))&&(f=!1,E())}};break}m==="html"?n.write(Ke):(n.write("<!--cq-->"),s.qwikLoader?(s.qwikLoader.include===void 0&&(s.qwikLoader.include="never"),s.qwikLoader.position===void 0&&(s.qwikLoader.position="bottom")):s.qwikLoader={include:"never"}),s.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await be(s,p);const F=p==null?void 0:p.manifest.injections,ee=F?F.map(d=>u(d.tag,d.attributes??{})):void 0,se=w(),A=[];let S=0,K=0;await oe(e,{stream:n,containerTagName:m,containerAttributes:h,serverData:s.serverData,base:X,beforeContent:ee,beforeClose:async(d,f,L,g)=>{var U,D,$,M,O,B,Y;S=se();const _=w();a=await re(d,f,void 0,g);const b=[];if(s.prefetchStrategy!==null){const q=xe(a,s,p);if(q.length>0){const V=Ie(s.prefetchStrategy,q,(U=s.serverData)==null?void 0:U.nonce);V&&b.push(V)}}const te=JSON.stringify(a.state,void 0,void 0);b.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:Pe(te),nonce:(D=s.serverData)==null?void 0:D.nonce})),a.funcs.length>0&&b.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Re(a.funcs),nonce:($=s.serverData)==null?void 0:$.nonce}));const ie=!a||a.mode!=="static",P=((M=s.qwikLoader)==null?void 0:M.include)??"auto",Q=P==="always"||P==="auto"&&ie;if(Q){const q=ge({events:(O=s.qwikLoader)==null?void 0:O.events,debug:s.debug});b.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:q,nonce:(B=s.serverData)==null?void 0:B.nonce}))}const R=Array.from(f.$events$,q=>JSON.stringify(q));if(R.length>0){let q=`window.qwikevents.push(${R.join(", ")})`;Q||(q=`window.qwikevents||=[];${q}`),b.push(u("script",{dangerouslySetInnerHTML:q,nonce:(Y=s.serverData)==null?void 0:Y.nonce}))}return Qe(A,d),K=_(),u(I,{children:b})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),m!=="html"&&n.write("<!--/cq-->"),E();const ne=a.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:i,manifest:p==null?void 0:p.manifest,size:o,isStatic:!ne,timing:{render:S,snapshot:K,firstFlush:c},_symbols:A}}function Le(e){if(e){if("mapper"in e)return e;if(e=ke(e),e){const s={};return Object.entries(e.mapping).forEach(([n,t])=>{s[k(n)]=[n,t]}),{mapper:s,manifest:e}}}}var Pe=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Qe(e,s){var n;for(const t of s){const o=(n=t.$componentQrl$)==null?void 0:n.getSymbol();o&&!e.includes(o)&&e.push(o)}}function Re(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const Ue={manifestHash:"8uct02",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0ojETuoBKWY:{origin:"components/timeline/timeline.tsx",displayName:"Timeline_component_useVisibleTask",canonicalFilename:"s_0ojetuobkwy",hash:"0ojETuoBKWY",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_sZIPqDBaEpc",loc:[543,580]},s_yI5OAFh0EDM:{origin:"routes/index.tsx",displayName:"routes_component_useVisibleTask",canonicalFilename:"s_yi5oafh0edm",hash:"yI5OAFh0EDM",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_tstUEhxLUWc",loc:[4447,4484]},s_0DhRUxBQU40:{origin:"components/cat/cat-walk.tsx",displayName:"CatWalk_component",canonicalFilename:"s_0dhruxbqu40",hash:"0DhRUxBQU40",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[83,1869]},s_0VUcCxumgyg:{origin:"routes/pizza-test/index.tsx",displayName:"pizza_test_component",canonicalFilename:"s_0vuccxumgyg",hash:"0VUcCxumgyg",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1156,1460]},s_2Fq8wIUpq5I:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_2fq8wiupq5i",hash:"2Fq8wIUpq5I",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_6Y0uFrvPmQs:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_6y0ufrvpmqs",hash:"6Y0uFrvPmQs",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[803,1110]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_FMKqF5QZfNY:{origin:"routes/test/index.tsx",displayName:"test_component",canonicalFilename:"s_fmkqf5qzfny",hash:"FMKqF5QZfNY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[199,1082]},s_G10i0AP5aAM:{origin:"routes/articles/index.tsx",displayName:"articles_component",canonicalFilename:"s_g10i0ap5aam",hash:"G10i0AP5aAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1156,1460]},s_GvPhUJ5Kg9Q:{origin:"components/footer/footer.tsx",displayName:"Footer_component",canonicalFilename:"s_gvphuj5kg9q",hash:"GvPhUJ5Kg9Q",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[128,1892]},s_Jevt7v9CDh4:{origin:"components/hero/hero.tsx",displayName:"Hero_component",canonicalFilename:"s_jevt7v9cdh4",hash:"Jevt7v9CDh4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[294,1653]},s_KEBmF9bls1Q:{origin:"routes/pizza-test/[username]/index.tsx",displayName:"_username__component",canonicalFilename:"s_kebmf9bls1q",hash:"KEBmF9bls1Q",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[332,394]},s_KGOeb6p3oY8:{origin:"routes/links/index.tsx",displayName:"links_component",canonicalFilename:"s_kgoeb6p3oy8",hash:"KGOeb6p3oY8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[193,4518]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48978,50329]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_Yj7Oj0dysis:{origin:"components/cards/cards.tsx",displayName:"Cards_component",canonicalFilename:"s_yj7oj0dysis",hash:"Yj7Oj0dysis",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[201,1755]},s_YyslqZ7NkxQ:{origin:"routes/articles/[slug]/index.tsx",displayName:"_slug__component",canonicalFilename:"s_yyslqz7nkxq",hash:"YyslqZ7NkxQ",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[2059,3304]},s_aHaxQW3gUTM:{origin:"components/articles/articles.tsx",displayName:"Articles_component",canonicalFilename:"s_ahaxqw3gutm",hash:"aHaxQW3gUTM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[207,997]},s_bavVtvgbxHE:{origin:"routes/404.tsx",displayName:"_404_component",canonicalFilename:"s_bavvtvgbxhe",hash:"bavVtvgbxHE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[202,1093]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_eXD0K9bzzlo:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_exd0k9bzzlo",hash:"eXD0K9bzzlo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_k9rs7QcCFAU:{origin:"components/cat/cat.tsx",displayName:"Cat_component",canonicalFilename:"s_k9rs7qccfau",hash:"k9rs7QcCFAU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[79,526]},s_lVhXlSc0AIU:{origin:"routes/button-game/index.tsx",displayName:"button_game_component",canonicalFilename:"s_lvhxlsc0aiu",hash:"lVhXlSc0AIU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[423,2982]},s_o4ccBuvIYCs:{origin:"components/header/header.tsx",displayName:"Header_component",canonicalFilename:"s_o4ccbuviycs",hash:"o4ccBuvIYCs",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[196,3225]},s_o91wC8IGdho:{origin:"components/stacks/stacks.tsx",displayName:"Stacks_component",canonicalFilename:"s_o91wc8igdho",hash:"o91wC8IGdho",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[245,844]},s_puLNVv3I7Kc:{origin:"routes/stack/index.tsx",displayName:"stack_component",canonicalFilename:"s_pulnvv3i7kc",hash:"puLNVv3I7Kc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[187,25348]},s_sZIPqDBaEpc:{origin:"components/timeline/timeline.tsx",displayName:"Timeline_component",canonicalFilename:"s_szipqdbaepc",hash:"sZIPqDBaEpc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[224,3149]},s_tstUEhxLUWc:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_tstuehxluwc",hash:"tstUEhxLUWc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1646,8581]},s_vNaJw7V9CHY:{origin:"routes/history/index.tsx",displayName:"history_component",canonicalFilename:"s_vnajw7v9chy",hash:"vNaJw7V9CHY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[134,2989]},s_x0jeNTb2iQc:{origin:"components/linkItem/linkItem.tsx",displayName:"LinkItem_component",canonicalFilename:"s_x0jentb2iqc",hash:"x0jeNTb2iQc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[231,1117]},s_yMerZA5h0Vw:{origin:"routes/projects/index.tsx",displayName:"projects_component",canonicalFilename:"s_ymerza5h0vw",hash:"yMerZA5h0Vw",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[234,495]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46864]},s_8cyHPpVKZXc:{origin:"components/header/header.tsx",displayName:"Header_component__Fragment_div_div_input_onClick",canonicalFilename:"s_8cyhppvkzxc",hash:"8cyHPpVKZXc",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_o4ccBuvIYCs",loc:[2205,2249]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_SqNyGWM7k0k:{origin:"routes/button-game/index.tsx",displayName:"button_game_component_tryPassLevel",canonicalFilename:"s_sqnygwm7k0k",hash:"SqNyGWM7k0k",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_lVhXlSc0AIU",loc:[913,1411]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49285,49982]}},mapping:{s_02wMImzEAbk:"q-054ad303.js",s_0ojETuoBKWY:"q-44808424.js",s_yI5OAFh0EDM:"q-fb7acec7.js",s_0DhRUxBQU40:"q-5ddbbeff.js",s_0VUcCxumgyg:"q-ec61322b.js",s_2Fq8wIUpq5I:"q-9f7a292f.js",s_6Y0uFrvPmQs:"q-1dfab38b.js",s_8gdLBszqbaM:"q-d629ffd5.js",s_FMKqF5QZfNY:"q-17a4f058.js",s_G10i0AP5aAM:"q-6976f75e.js",s_GvPhUJ5Kg9Q:"q-6885b80c.js",s_Jevt7v9CDh4:"q-cfcbea46.js",s_KEBmF9bls1Q:"q-a082e36c.js",s_KGOeb6p3oY8:"q-c1087373.js",s_Nk9PlpjQm9Y:"q-7ff8276c.js",s_TxCFOy819ag:"q-054ad303.js",s_WmYC5H00wtI:"q-956ffbcd.js",s_Yj7Oj0dysis:"q-d667f399.js",s_YyslqZ7NkxQ:"q-8142ee41.js",s_aHaxQW3gUTM:"q-beb73ecb.js",s_bavVtvgbxHE:"q-1e683f2d.js",s_e0ssiDXoeAM:"q-e127a6b1.js",s_eXD0K9bzzlo:"q-dd101786.js",s_k9rs7QcCFAU:"q-6b2997e2.js",s_lVhXlSc0AIU:"q-0d3eaacd.js",s_o4ccBuvIYCs:"q-1fcaa036.js",s_o91wC8IGdho:"q-a2cee456.js",s_puLNVv3I7Kc:"q-9528a9bf.js",s_sZIPqDBaEpc:"q-44808424.js",s_tstUEhxLUWc:"q-fb7acec7.js",s_vNaJw7V9CHY:"q-91dff448.js",s_x0jeNTb2iQc:"q-1c551cc1.js",s_yMerZA5h0Vw:"q-e4baaf94.js",s_RPDJAz33WLA:"q-054ad303.js",s_A5bZC7WO00A:"q-7b35a86f.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-ef2809e7.js",s_8cyHPpVKZXc:"q-1fcaa036.js",s_BUbtvTyvVRE:"q-956ffbcd.js",s_SqNyGWM7k0k:"q-0d3eaacd.js",s_eBQ0vFsFKsk:"q-4497b89e.js",s_fX0bDjeJa0E:"q-054ad303.js",s_i1Cv0pYJNR0:"q-d629ffd5.js",s_p9MSze0ojs4:"q-7ff8276c.js"},bundles:{"q-054ad303.js":{size:6805,imports:["q-3364e8dc.js","q-d77398dd.js"],dynamicImports:["q-0c7c67ab.js","q-0fe5b3fb.js","q-24c92098.js","q-32814c96.js","q-32a287f5.js","q-5bc20ee9.js","q-5f4ef14a.js","q-776db1cf.js","q-7c7d72b1.js","q-9d1a24dc.js","q-9f37bf79.js","q-a4aa757b.js","q-cf7fb859.js","q-d241118a.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-0c7c67ab.js":{size:207,imports:["q-3364e8dc.js"],dynamicImports:["q-91dff448.js"],origins:["src/routes/history/index.tsx"]},"q-0d3eaacd.js":{size:2029,imports:["q-3364e8dc.js","q-9d1a24dc.js"],origins:["src/entry_button_game.js","src/s_lvhxlsc0aiu.js","src/s_sqnygwm7k0k.js"],symbols:["s_lVhXlSc0AIU","s_SqNyGWM7k0k"]},"q-0fe5b3fb.js":{size:435,imports:["q-3364e8dc.js","q-d77398dd.js"],dynamicImports:["q-8142ee41.js"],origins:["src/routes/articles/[slug]/index.tsx"]},"q-10959c2c.js":{size:202,imports:["q-3364e8dc.js"],dynamicImports:["q-dd101786.js"],origins:["src/global.css","src/root.tsx"]},"q-17a4f058.js":{size:1028,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_test.js","src/media/aliens-alien.gif?jsx","src/s_fmkqf5qzfny.js"],symbols:["s_FMKqF5QZfNY"]},"q-1c551cc1.js":{size:844,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/components/linkItem/linkItem.module.css?used","src/entry_LinkItem.js","src/s_x0jentb2iqc.js"],symbols:["s_x0jeNTb2iQc"]},"q-1dfab38b.js":{size:824,imports:["q-3364e8dc.js"],dynamicImports:["q-1fcaa036.js","q-5ddbbeff.js","q-6885b80c.js","q-6b2997e2.js"],origins:["src/components/cat/cat-walk.tsx","src/components/cat/cat.tsx","src/components/footer/footer.tsx","src/components/header/header.tsx","src/entry_layout.js","src/s_6y0ufrvpmqs.js"],symbols:["s_6Y0uFrvPmQs"]},"q-1e683f2d.js":{size:783,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_404.js","src/s_bavvtvgbxhe.js"],symbols:["s_bavVtvgbxHE"]},"q-1fcaa036.js":{size:1779,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_Header.js","src/s_8cyhppvkzxc.js","src/s_o4ccbuviycs.js"],symbols:["s_8cyHPpVKZXc","s_o4ccBuvIYCs"]},"q-24c92098.js":{size:125,imports:["q-3364e8dc.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-29addd4f.js":{size:201,imports:["q-3364e8dc.js"],dynamicImports:["q-a2cee456.js"],origins:["src/components/stacks/stacks.tsx"]},"q-32814c96.js":{size:435,imports:["q-3364e8dc.js","q-d77398dd.js"],dynamicImports:["q-6976f75e.js"],origins:["src/routes/articles/index.tsx"]},"q-32a287f5.js":{size:435,imports:["q-3364e8dc.js","q-d77398dd.js"],dynamicImports:["q-ec61322b.js"],origins:["src/routes/pizza-test/index.tsx"]},"q-3364e8dc.js":{size:48345,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-44808424.js":{size:2176,imports:["q-3364e8dc.js","q-ba33ece7.js"],origins:["src/entry_Timeline.js","src/s_0ojetuobkwy.js","src/s_szipqdbaepc.js"],symbols:["s_0ojETuoBKWY","s_sZIPqDBaEpc"]},"q-4497b89e.js":{size:128,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-4b214670.js":{size:1439,imports:["q-3364e8dc.js"],dynamicImports:["q-d667f399.js"],origins:["src/components/cards/cards.tsx","src/repository/projects.ts"]},"q-5bc20ee9.js":{size:329,imports:["q-3364e8dc.js"],dynamicImports:["q-e4baaf94.js"],origins:["src/routes/projects/index.tsx"]},"q-5ddbbeff.js":{size:1837,imports:["q-3364e8dc.js"],origins:["src/entry_CatWalk.js","src/s_0dhruxbqu40.js"],symbols:["s_0DhRUxBQU40"]},"q-5f4ef14a.js":{size:329,imports:["q-3364e8dc.js"],dynamicImports:["q-17a4f058.js"],origins:["src/routes/test/index.tsx"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-6885b80c.js":{size:1820,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_Footer.js","src/s_gvphuj5kg9q.js"],symbols:["s_GvPhUJ5Kg9Q"]},"q-6976f75e.js":{size:529,imports:["q-32814c96.js","q-3364e8dc.js","q-cb3ba44f.js","q-d77398dd.js"],origins:["src/entry_articles.js","src/s_g10i0ap5aam.js"],symbols:["s_G10i0AP5aAM"]},"q-6b2997e2.js":{size:528,imports:["q-3364e8dc.js"],origins:["src/entry_Cat.js","src/s_k9rs7qccfau.js"],symbols:["s_k9rs7QcCFAU"]},"q-776db1cf.js":{size:288,imports:["q-3364e8dc.js"],dynamicImports:["q-1dfab38b.js"],origins:["src/routes/layout.tsx"]},"q-7b35a86f.js":{size:751,imports:["q-3364e8dc.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-7c7d72b1.js":{size:329,imports:["q-3364e8dc.js"],dynamicImports:["q-c1087373.js"],origins:["src/routes/links/index.tsx"]},"q-7ff8276c.js":{size:1032,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-8142ee41.js":{size:1330,imports:["q-0fe5b3fb.js","q-3364e8dc.js","q-cb3ba44f.js","q-d77398dd.js"],origins:["src/entry__slug_.js","src/s_yyslqz7nkxq.js"],symbols:["s_YyslqZ7NkxQ"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-91dff448.js":{size:2558,imports:["q-3364e8dc.js","q-a887f67b.js"],origins:["src/entry_history.js","src/s_vnajw7v9chy.js"],symbols:["s_vNaJw7V9CHY"]},"q-9528a9bf.js":{size:24719,imports:["q-29addd4f.js","q-3364e8dc.js"],origins:["src/entry_stack.js","src/s_pulnvv3i7kc.js"],symbols:["s_puLNVv3I7Kc"]},"q-956ffbcd.js":{size:787,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-9d1a24dc.js":{size:478,imports:["q-3364e8dc.js"],dynamicImports:["q-0d3eaacd.js"],origins:["src/routes/button-game/index.tsx"]},"q-9f37bf79.js":{size:421,imports:["q-3364e8dc.js"],dynamicImports:["q-a082e36c.js"],origins:["src/routes/pizza-test/[username]/index.tsx"]},"q-9f7a292f.js":{size:671,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_RouterHead.js","src/s_2fq8wiupq5i.js"],symbols:["s_2Fq8wIUpq5I"]},"q-a082e36c.js":{size:148,imports:["q-3364e8dc.js"],origins:["src/entry__username_.js","src/s_kebmf9bls1q.js"],symbols:["s_KEBmF9bls1Q"]},"q-a2cee456.js":{size:716,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/components/stacks/stacks.module.css?used","src/entry_Stacks.js","src/s_o91wc8igdho.js"],symbols:["s_o91wC8IGdho"]},"q-a4aa757b.js":{size:329,imports:["q-3364e8dc.js"],dynamicImports:["q-9528a9bf.js"],origins:["src/routes/stack/index.tsx"]},"q-a887f67b.js":{size:201,imports:["q-3364e8dc.js"],dynamicImports:["q-44808424.js"],origins:["src/components/timeline/timeline.tsx"]},"q-ba33ece7.js":{size:209,origins:["src/utils/helpers.ts"]},"q-beb73ecb.js":{size:688,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_Articles.js","src/s_ahaxqw3gutm.js"],symbols:["s_aHaxQW3gUTM"]},"q-bf2ee06d.js":{size:201,imports:["q-3364e8dc.js"],dynamicImports:["q-1c551cc1.js"],origins:["src/components/linkItem/linkItem.tsx"]},"q-c1087373.js":{size:4232,imports:["q-3364e8dc.js","q-bf2ee06d.js"],origins:["src/entry_links.js","src/s_kgoeb6p3oy8.js"],symbols:["s_KGOeb6p3oY8"]},"q-cb3ba44f.js":{size:201,imports:["q-3364e8dc.js"],dynamicImports:["q-beb73ecb.js"],origins:["src/components/articles/articles.tsx"]},"q-cf7fb859.js":{size:329,imports:["q-3364e8dc.js"],dynamicImports:["q-1e683f2d.js"],origins:["src/routes/404.tsx"]},"q-cfcbea46.js":{size:4302,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["node_modules/number-to-words/numberToWords.min.js","src/entry_Hero.js","src/media/pako-cropped.jpeg?jsx","src/s_jevt7v9cdh4.js"],symbols:["s_Jevt7v9CDh4"]},"q-d241118a.js":{size:545,imports:["q-3364e8dc.js","q-d77398dd.js"],dynamicImports:["q-fb7acec7.js"],origins:["src/routes/index.tsx"]},"q-d629ffd5.js":{size:1144,imports:["q-3364e8dc.js","q-d77398dd.js"],dynamicImports:["q-4497b89e.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-d667f399.js":{size:1073,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_Cards.js","src/s_yj7oj0dysis.js"],symbols:["s_Yj7Oj0dysis"]},"q-d77398dd.js":{size:8388,imports:["q-3364e8dc.js"],dynamicImports:["q-054ad303.js","q-663033b0.js","q-d629ffd5.js","q-e127a6b1.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-dd101786.js":{size:543,imports:["q-3364e8dc.js","q-d77398dd.js"],dynamicImports:["q-9f7a292f.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_exd0k9bzzlo.js"],symbols:["s_eXD0K9bzzlo"]},"q-e127a6b1.js":{size:467,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-e4baaf94.js":{size:400,imports:["q-3364e8dc.js","q-4b214670.js"],origins:["src/entry_projects.js","src/s_ymerza5h0vw.js"],symbols:["s_yMerZA5h0Vw"]},"q-ec61322b.js":{size:529,imports:["q-32a287f5.js","q-3364e8dc.js","q-cb3ba44f.js","q-d77398dd.js"],origins:["src/entry_pizza_test.js","src/s_0vuccxumgyg.js"],symbols:["s_0VUcCxumgyg"]},"q-ef2809e7.js":{size:889,imports:["q-3364e8dc.js","q-d77398dd.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-fb7acec7.js":{size:26287,imports:["q-29addd4f.js","q-3364e8dc.js","q-4b214670.js","q-a887f67b.js","q-ba33ece7.js","q-bf2ee06d.js","q-cb3ba44f.js","q-d241118a.js","q-d77398dd.js"],dynamicImports:["q-cfcbea46.js"],origins:["src/components/hero/hero.tsx","src/entry_routes.js","src/media/badge-first-pr.webp?jsx","src/repository/links.ts","src/repository/stack.ts","src/repository/work.ts","src/s_tstuehxluwc.js","src/s_yi5oafh0edm.js"],symbols:["s_tstUEhxLUWc","s_yI5OAFh0EDM"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/build/q-6d05c2f9.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.18",vite:"",rollup:"3.29.4",env:"node",os:"darwin",node:"21.1.0"}},De=()=>{const e=ae(),s=le();return j(I,{children:[y("title",null,null,e.title,1,null),y("link",null,{href:de(n=>n.url.href,[s],"p0.url.href"),rel:"canonical"},null,3,null),y("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),y("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(n=>x("meta",{...n},null,0,n.key)),e.links.map(n=>x("link",{...n},null,0,n.key)),e.styles.map(n=>x("style",{...n.props,dangerouslySetInnerHTML:me(n,"style")},null,0,n.key))]},1,"0Z_0")},$e=W(H(De,"s_2Fq8wIUpq5I"));const Me=()=>j(fe,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),j($e,null,3,"Le_0")],1,null),y("body",null,{lang:"en"},[j(ue,null,3,"Le_1"),j(pe,null,3,"Le_2")],1,null)]},1,"Le_3"),Oe=W(H(Me,"s_eXD0K9bzzlo"));function He(e){return Te(j(Oe,null,3,"Ro_0"),{manifest:Ue,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{He as default};
