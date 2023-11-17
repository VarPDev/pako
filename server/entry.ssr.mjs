import{j as u,_ as oe,a as re,F as I,s as ae,c as V,i as H,u as ce,b as le,d as j,e as y,f as me,g as w,h as de,R as ue,S as pe,Q as fe}from"./assets/@qwik-city-plan-227515db.mjs";import"number-to-words";import"date-fns";/**
 * @license
 * @builder.io/qwik/server 1.2.15
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var qe=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,s)=>(typeof require<"u"?require:n)[s]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function ye(e,n){const s=n==null?void 0:n.mapper,t=e.symbolMapper?e.symbolMapper:i=>{var a;if(s){const r=k(i),c=s[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",s)}return c}};return{isServer:!0,async importSymbol(i,a,r){var v;const c=k(r),l=(v=globalThis.__qwik_reg_symbols)==null?void 0:v.get(c);if(l)return l;let d=String(a);d.endsWith(".js")||(d+=".js");const h=qe(d);if(!(r in h))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${d}'.`);return h[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return t(i,s)}}}async function _e(e,n){const s=ye(e,n);ae(s)}var k=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function x(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function J(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var be=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
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
})();`;function ge(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?he:ve).replace("window.qEvents",JSON.stringify(e.events)):e.debug?je:be}function we(e,n,s){if(!s)return[];const t=n.prefetchStrategy,o=J(n);if(t!==null){if(!t||!t.symbolsToPrefetch||t.symbolsToPrefetch==="auto")return xe(e,s,o);if(typeof t.symbolsToPrefetch=="function")try{return t.symbolsToPrefetch({manifest:s.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function xe(e,n,s){const t=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,r=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),d=i[l];d&&Z(a,r,t,s,d[1])}return t}function Z(e,n,s,t,o){const i=t+o;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const c of r.imports)Z(e,n,a.imports,t,c)}s.push(a)}function ke(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function N(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function E(e){const n=[],s=t=>{if(Array.isArray(t))for(const o of t)n.includes(o.url)||(n.push(o.url),s(o.imports))};return s(e),n}function Ne(e){const n=new Map;let s=0;const t=(r,c)=>{if(Array.isArray(r))for(const l of r){const d=n.get(l.url)||0;n.set(l.url,d+1),s++,c.has(l.url)||(c.add(l.url),t(l.imports,c))}},o=new Set;for(const r of e)o.clear(),t(r.imports,o);const i=s/n.size*2,a=Array.from(n.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ie(e,n,s){const t=Fe(e==null?void 0:e.implementation),o=[];return t.prefetchEvent==="always"&&Ee(o,n,s),t.linkInsert==="html-append"&&ze(o,n,t),t.linkInsert==="js-append"?Ce(o,n,t,s):t.workerFetchInsert==="always"&&Ae(o,n,s),o.length>0?u(I,{children:o}):null}function Ee(e,n,s){const t=Ne(n);for(const o of t)e.push(u("link",{rel:"modulepreload",href:o,nonce:s}));e.push(u("script",{"q:type":"prefetch-bundles",dangerouslySetInnerHTML:"document.dispatchEvent(new CustomEvent('qprefetch', {detail:{links: [location.pathname]}}))",nonce:s}))}function ze(e,n,s){const t=E(n),o=s.linkRel||"prefetch";for(const i of t){const a={};a.href=i,a.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function Ce(e,n,s,t){const o=s.linkRel||"prefetch";let i="";s.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(E(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,s.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",s.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=N(),i+="}"),s.workerFetchInsert==="always"&&(i+=N()),e.push(u("script",{type:"module","q:type":"link-js",dangerouslySetInnerHTML:i,nonce:t}))}function Ae(e,n,s){let t=`const u=${JSON.stringify(E(n))};`;t+=N(),e.push(u("script",{type:"module","q:type":"prefetch-worker",dangerouslySetInnerHTML:t,nonce:s}))}function Fe(e){return e&&typeof e=="object"?e:Se}var Se={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Te="<!DOCTYPE html>";async function Le(e,n){var L;let s=n.stream,t=0,o=0,i=0,a=0,r="",c;const l=((L=n.streaming)==null?void 0:L.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=n.containerTagName??"html",h=n.containerAttributes??{},v=s,X=x(),G=J(n),p=Ke(n.manifest);function z(){r&&(v.write(r),r="",t=0,i++,i===1&&(a=X()))}function C(m){const f=m.length;t+=f,o+=f,r+=m}switch(l.strategy){case"disabled":s={write:C};break;case"direct":s=v;break;case"auto":let m=0,f=!1;const K=l.maximunChunk??0,g=l.maximunInitialChunk??0;s={write(b){b==="<!--qkssr-f-->"?f||(f=!0):b==="<!--qkssr-pu-->"?m++:b==="<!--qkssr-po-->"?m--:C(b),m===0&&(f||t>=(i===0?g:K))&&(f=!1,z())}};break}d==="html"?s.write(Te):(s.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await _e(n,p);const A=p==null?void 0:p.manifest.injections,ee=A?A.map(m=>u(m.tag,m.attributes??{})):void 0,ne=x(),F=[];let S=0,T=0;await oe(e,{stream:s,containerTagName:d,containerAttributes:h,serverData:n.serverData,base:G,beforeContent:ee,beforeClose:async(m,f,K,g)=>{var D,Q,$,O,M,W,B;S=ne();const b=x();c=await re(m,f,void 0,g);const _=[];if(n.prefetchStrategy!==null){const q=we(c,n,p);if(q.length>0){const Y=Ie(n.prefetchStrategy,q,(D=n.serverData)==null?void 0:D.nonce);Y&&_.push(Y)}}const te=JSON.stringify(c.state,void 0,void 0);_.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:Pe(te),nonce:(Q=n.serverData)==null?void 0:Q.nonce})),c.funcs.length>0&&_.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Ue(c.funcs),nonce:($=n.serverData)==null?void 0:$.nonce}));const ie=!c||c.mode!=="static",P=((O=n.qwikLoader)==null?void 0:O.include)??"auto",R=P==="always"||P==="auto"&&ie;if(R){const q=ge({events:(M=n.qwikLoader)==null?void 0:M.events,debug:n.debug});_.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:q,nonce:(W=n.serverData)==null?void 0:W.nonce}))}const U=Array.from(f.$events$,q=>JSON.stringify(q));if(U.length>0){let q=`window.qwikevents.push(${U.join(", ")})`;R||(q=`window.qwikevents||=[];${q}`),_.push(u("script",{dangerouslySetInnerHTML:q,nonce:(B=n.serverData)==null?void 0:B.nonce}))}return Re(F,m),T=b(),u(I,{children:_})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),d!=="html"&&s.write("<!--/cq-->"),z();const se=c.resources.some(m=>m._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:o,isStatic:!se,timing:{render:S,snapshot:T,firstFlush:a},_symbols:F}}function Ke(e){if(e){if("mapper"in e)return e;if(e=ke(e),e){const n={};return Object.entries(e.mapping).forEach(([s,t])=>{n[k(s)]=[s,t]}),{mapper:n,manifest:e}}}}var Pe=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Re(e,n){var s;for(const t of n){const o=(s=t.$componentQrl$)==null?void 0:s.getSymbol();o&&!e.includes(o)&&e.push(o)}}function Ue(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const De={manifestHash:"mxc5s1",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0ojETuoBKWY:{origin:"components/timeline/timeline.tsx",displayName:"Timeline_component_useVisibleTask",canonicalFilename:"s_0ojetuobkwy",hash:"0ojETuoBKWY",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_sZIPqDBaEpc",loc:[543,580]},s_yI5OAFh0EDM:{origin:"routes/index.tsx",displayName:"routes_component_useVisibleTask",canonicalFilename:"s_yi5oafh0edm",hash:"yI5OAFh0EDM",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_tstUEhxLUWc",loc:[4447,4484]},s_0DhRUxBQU40:{origin:"components/cat/cat-walk.tsx",displayName:"CatWalk_component",canonicalFilename:"s_0dhruxbqu40",hash:"0DhRUxBQU40",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[83,1869]},s_2Fq8wIUpq5I:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_2fq8wiupq5i",hash:"2Fq8wIUpq5I",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_6Y0uFrvPmQs:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_6y0ufrvpmqs",hash:"6Y0uFrvPmQs",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[803,1110]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_FMKqF5QZfNY:{origin:"routes/test/index.tsx",displayName:"test_component",canonicalFilename:"s_fmkqf5qzfny",hash:"FMKqF5QZfNY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[199,1082]},s_GvPhUJ5Kg9Q:{origin:"components/footer/footer.tsx",displayName:"Footer_component",canonicalFilename:"s_gvphuj5kg9q",hash:"GvPhUJ5Kg9Q",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[128,1892]},s_Jevt7v9CDh4:{origin:"components/hero/hero.tsx",displayName:"Hero_component",canonicalFilename:"s_jevt7v9cdh4",hash:"Jevt7v9CDh4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[294,1653]},s_KGOeb6p3oY8:{origin:"routes/links/index.tsx",displayName:"links_component",canonicalFilename:"s_kgoeb6p3oy8",hash:"KGOeb6p3oY8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[193,4518]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48978,50329]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_Uzl3gaAclJA:{origin:"routes/blog/index.tsx",displayName:"blog_component",canonicalFilename:"s_uzl3gaaclja",hash:"Uzl3gaAclJA",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1156,1460]},s_VagWlidvcbs:{origin:"routes/blog/[slug]/index.tsx",displayName:"_slug__component",canonicalFilename:"s_vagwlidvcbs",hash:"VagWlidvcbs",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[2076,3321]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_Yj7Oj0dysis:{origin:"components/cards/cards.tsx",displayName:"Cards_component",canonicalFilename:"s_yj7oj0dysis",hash:"Yj7Oj0dysis",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[201,1755]},s_aHaxQW3gUTM:{origin:"components/articles/articles.tsx",displayName:"Articles_component",canonicalFilename:"s_ahaxqw3gutm",hash:"aHaxQW3gUTM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[207,997]},s_bavVtvgbxHE:{origin:"routes/404.tsx",displayName:"_404_component",canonicalFilename:"s_bavvtvgbxhe",hash:"bavVtvgbxHE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[202,1093]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_eXD0K9bzzlo:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_exd0k9bzzlo",hash:"eXD0K9bzzlo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_k9rs7QcCFAU:{origin:"components/cat/cat.tsx",displayName:"Cat_component",canonicalFilename:"s_k9rs7qccfau",hash:"k9rs7QcCFAU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[79,526]},s_lVhXlSc0AIU:{origin:"routes/button-game/index.tsx",displayName:"button_game_component",canonicalFilename:"s_lvhxlsc0aiu",hash:"lVhXlSc0AIU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[423,2982]},s_o4ccBuvIYCs:{origin:"components/header/header.tsx",displayName:"Header_component",canonicalFilename:"s_o4ccbuviycs",hash:"o4ccBuvIYCs",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[196,3225]},s_o91wC8IGdho:{origin:"components/stacks/stacks.tsx",displayName:"Stacks_component",canonicalFilename:"s_o91wc8igdho",hash:"o91wC8IGdho",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[245,844]},s_puLNVv3I7Kc:{origin:"routes/stack/index.tsx",displayName:"stack_component",canonicalFilename:"s_pulnvv3i7kc",hash:"puLNVv3I7Kc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[187,25348]},s_sZIPqDBaEpc:{origin:"components/timeline/timeline.tsx",displayName:"Timeline_component",canonicalFilename:"s_szipqdbaepc",hash:"sZIPqDBaEpc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[224,3149]},s_tstUEhxLUWc:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_tstuehxluwc",hash:"tstUEhxLUWc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1646,8581]},s_vNaJw7V9CHY:{origin:"routes/history/index.tsx",displayName:"history_component",canonicalFilename:"s_vnajw7v9chy",hash:"vNaJw7V9CHY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[134,2989]},s_x0jeNTb2iQc:{origin:"components/linkItem/linkItem.tsx",displayName:"LinkItem_component",canonicalFilename:"s_x0jentb2iqc",hash:"x0jeNTb2iQc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[231,1117]},s_yMerZA5h0Vw:{origin:"routes/projects/index.tsx",displayName:"projects_component",canonicalFilename:"s_ymerza5h0vw",hash:"yMerZA5h0Vw",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[234,495]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46864]},s_8cyHPpVKZXc:{origin:"components/header/header.tsx",displayName:"Header_component__Fragment_div_div_input_onClick",canonicalFilename:"s_8cyhppvkzxc",hash:"8cyHPpVKZXc",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_o4ccBuvIYCs",loc:[2205,2249]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_SqNyGWM7k0k:{origin:"routes/button-game/index.tsx",displayName:"button_game_component_tryPassLevel",canonicalFilename:"s_sqnygwm7k0k",hash:"SqNyGWM7k0k",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_lVhXlSc0AIU",loc:[913,1411]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49285,49982]}},mapping:{s_02wMImzEAbk:"q-24012958.js",s_0ojETuoBKWY:"q-40ec8991.js",s_yI5OAFh0EDM:"q-59f0e300.js",s_0DhRUxBQU40:"q-1a276491.js",s_2Fq8wIUpq5I:"q-cce741be.js",s_6Y0uFrvPmQs:"q-483c9d40.js",s_8gdLBszqbaM:"q-8e1c6dde.js",s_FMKqF5QZfNY:"q-199e394d.js",s_GvPhUJ5Kg9Q:"q-c0764e45.js",s_Jevt7v9CDh4:"q-d0821bae.js",s_KGOeb6p3oY8:"q-aa6eee54.js",s_Nk9PlpjQm9Y:"q-81779700.js",s_TxCFOy819ag:"q-24012958.js",s_Uzl3gaAclJA:"q-9d6aa8a1.js",s_VagWlidvcbs:"q-9585906f.js",s_WmYC5H00wtI:"q-8ca075b8.js",s_Yj7Oj0dysis:"q-af6a3307.js",s_aHaxQW3gUTM:"q-3bac9607.js",s_bavVtvgbxHE:"q-59c88b59.js",s_e0ssiDXoeAM:"q-1889ed08.js",s_eXD0K9bzzlo:"q-42e7b152.js",s_k9rs7QcCFAU:"q-3f2db1eb.js",s_lVhXlSc0AIU:"q-d7312ef6.js",s_o4ccBuvIYCs:"q-4ecef530.js",s_o91wC8IGdho:"q-1d926cb6.js",s_puLNVv3I7Kc:"q-b8afc72c.js",s_sZIPqDBaEpc:"q-40ec8991.js",s_tstUEhxLUWc:"q-59f0e300.js",s_vNaJw7V9CHY:"q-1aecdae5.js",s_x0jeNTb2iQc:"q-441d5ae8.js",s_yMerZA5h0Vw:"q-5b7fd406.js",s_RPDJAz33WLA:"q-24012958.js",s_A5bZC7WO00A:"q-e445fcd0.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-75527b6a.js",s_8cyHPpVKZXc:"q-4ecef530.js",s_BUbtvTyvVRE:"q-8ca075b8.js",s_SqNyGWM7k0k:"q-d7312ef6.js",s_eBQ0vFsFKsk:"q-c52f5d7d.js",s_fX0bDjeJa0E:"q-24012958.js",s_i1Cv0pYJNR0:"q-8e1c6dde.js",s_p9MSze0ojs4:"q-81779700.js"},bundles:{"q-025f5c05.js":{size:125,imports:["q-2ac32ad2.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-1889ed08.js":{size:467,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-199e394d.js":{size:1028,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_test.js","src/media/aliens-alien.gif?jsx","src/s_fmkqf5qzfny.js"],symbols:["s_FMKqF5QZfNY"]},"q-1a276491.js":{size:1837,imports:["q-2ac32ad2.js"],origins:["src/entry_CatWalk.js","src/s_0dhruxbqu40.js"],symbols:["s_0DhRUxBQU40"]},"q-1aecdae5.js":{size:2558,imports:["q-2ac32ad2.js","q-500a9997.js"],origins:["src/entry_history.js","src/s_vnajw7v9chy.js"],symbols:["s_vNaJw7V9CHY"]},"q-1d926cb6.js":{size:706,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/components/stacks/stacks.module.css?used","src/entry_Stacks.js","src/s_o91wc8igdho.js"],symbols:["s_o91wC8IGdho"]},"q-24012958.js":{size:6552,imports:["q-2ac32ad2.js","q-e7155321.js"],dynamicImports:["q-025f5c05.js","q-492be3af.js","q-65ae4f5c.js","q-6edb49dc.js","q-855458bf.js","q-8dd0d688.js","q-8f1b4cb6.js","q-90ab3bbd.js","q-a9e64e64.js","q-c475753f.js","q-da924818.js","q-dd9bac18.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-2729d7a6.js":{size:201,imports:["q-2ac32ad2.js"],dynamicImports:["q-1d926cb6.js"],origins:["src/components/stacks/stacks.tsx"]},"q-2ac32ad2.js":{size:47695,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-3bac9607.js":{size:688,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_Articles.js","src/s_ahaxqw3gutm.js"],symbols:["s_aHaxQW3gUTM"]},"q-3f2db1eb.js":{size:528,imports:["q-2ac32ad2.js"],origins:["src/entry_Cat.js","src/s_k9rs7qccfau.js"],symbols:["s_k9rs7QcCFAU"]},"q-40ec8991.js":{size:2176,imports:["q-2ac32ad2.js","q-ba33ece7.js"],origins:["src/entry_Timeline.js","src/s_0ojetuobkwy.js","src/s_szipqdbaepc.js"],symbols:["s_0ojETuoBKWY","s_sZIPqDBaEpc"]},"q-42e7b152.js":{size:543,imports:["q-2ac32ad2.js","q-e7155321.js"],dynamicImports:["q-cce741be.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_exd0k9bzzlo.js"],symbols:["s_eXD0K9bzzlo"]},"q-441d5ae8.js":{size:844,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/components/linkItem/linkItem.module.css?used","src/entry_LinkItem.js","src/s_x0jentb2iqc.js"],symbols:["s_x0jeNTb2iQc"]},"q-483c9d40.js":{size:824,imports:["q-2ac32ad2.js"],dynamicImports:["q-1a276491.js","q-3f2db1eb.js","q-4ecef530.js","q-c0764e45.js"],origins:["src/components/cat/cat-walk.tsx","src/components/cat/cat.tsx","src/components/footer/footer.tsx","src/components/header/header.tsx","src/entry_layout.js","src/s_6y0ufrvpmqs.js"],symbols:["s_6Y0uFrvPmQs"]},"q-492be3af.js":{size:329,imports:["q-2ac32ad2.js"],dynamicImports:["q-5b7fd406.js"],origins:["src/routes/projects/index.tsx"]},"q-4d639e14.js":{size:1439,imports:["q-2ac32ad2.js"],dynamicImports:["q-af6a3307.js"],origins:["src/components/cards/cards.tsx","src/repository/projects.ts"]},"q-4ecef530.js":{size:1779,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_Header.js","src/s_8cyhppvkzxc.js","src/s_o4ccbuviycs.js"],symbols:["s_8cyHPpVKZXc","s_o4ccBuvIYCs"]},"q-500a9997.js":{size:201,imports:["q-2ac32ad2.js"],dynamicImports:["q-40ec8991.js"],origins:["src/components/timeline/timeline.tsx"]},"q-59c88b59.js":{size:783,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_404.js","src/s_bavvtvgbxhe.js"],symbols:["s_bavVtvgbxHE"]},"q-59f0e300.js":{size:26287,imports:["q-2729d7a6.js","q-2ac32ad2.js","q-4d639e14.js","q-500a9997.js","q-b36cb7f9.js","q-ba33ece7.js","q-c475753f.js","q-e7155321.js","q-f1760c98.js"],dynamicImports:["q-d0821bae.js"],origins:["src/components/hero/hero.tsx","src/entry_routes.js","src/media/badge-first-pr.webp?jsx","src/repository/links.ts","src/repository/stack.ts","src/repository/work.ts","src/s_tstuehxluwc.js","src/s_yi5oafh0edm.js"],symbols:["s_tstUEhxLUWc","s_yI5OAFh0EDM"]},"q-5b7fd406.js":{size:400,imports:["q-2ac32ad2.js","q-4d639e14.js"],origins:["src/entry_projects.js","src/s_ymerza5h0vw.js"],symbols:["s_yMerZA5h0Vw"]},"q-65ae4f5c.js":{size:288,imports:["q-2ac32ad2.js"],dynamicImports:["q-483c9d40.js"],origins:["src/routes/layout.tsx"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-6edb49dc.js":{size:435,imports:["q-2ac32ad2.js","q-e7155321.js"],dynamicImports:["q-9d6aa8a1.js"],origins:["src/routes/blog/index.tsx"]},"q-75527b6a.js":{size:889,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-81779700.js":{size:1032,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-855458bf.js":{size:329,imports:["q-2ac32ad2.js"],dynamicImports:["q-b8afc72c.js"],origins:["src/routes/stack/index.tsx"]},"q-8b6c50ad.js":{size:202,imports:["q-2ac32ad2.js"],dynamicImports:["q-42e7b152.js"],origins:["src/global.css","src/root.tsx"]},"q-8ca075b8.js":{size:787,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-8dd0d688.js":{size:329,imports:["q-2ac32ad2.js"],dynamicImports:["q-59c88b59.js"],origins:["src/routes/404.tsx"]},"q-8e1c6dde.js":{size:1149,imports:["q-2ac32ad2.js","q-e7155321.js"],dynamicImports:["q-c52f5d7d.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-8f1b4cb6.js":{size:478,imports:["q-2ac32ad2.js"],dynamicImports:["q-d7312ef6.js"],origins:["src/routes/button-game/index.tsx"]},"q-90ab3bbd.js":{size:549,imports:["q-2ac32ad2.js","q-e7155321.js"],dynamicImports:["q-9585906f.js"],origins:["src/routes/blog/[slug]/index.tsx"]},"q-9585906f.js":{size:1330,imports:["q-2ac32ad2.js","q-90ab3bbd.js","q-e7155321.js","q-f1760c98.js"],origins:["src/entry__slug_.js","src/s_vagwlidvcbs.js"],symbols:["s_VagWlidvcbs"]},"q-9d6aa8a1.js":{size:524,imports:["q-2ac32ad2.js","q-6edb49dc.js","q-e7155321.js","q-f1760c98.js"],origins:["src/entry_blog.js","src/s_uzl3gaaclja.js"],symbols:["s_Uzl3gaAclJA"]},"q-a9e64e64.js":{size:329,imports:["q-2ac32ad2.js"],dynamicImports:["q-aa6eee54.js"],origins:["src/routes/links/index.tsx"]},"q-aa6eee54.js":{size:4232,imports:["q-2ac32ad2.js","q-b36cb7f9.js"],origins:["src/entry_links.js","src/s_kgoeb6p3oy8.js"],symbols:["s_KGOeb6p3oY8"]},"q-af6a3307.js":{size:1073,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_Cards.js","src/s_yj7oj0dysis.js"],symbols:["s_Yj7Oj0dysis"]},"q-b36cb7f9.js":{size:201,imports:["q-2ac32ad2.js"],dynamicImports:["q-441d5ae8.js"],origins:["src/components/linkItem/linkItem.tsx"]},"q-b8afc72c.js":{size:24719,imports:["q-2729d7a6.js","q-2ac32ad2.js"],origins:["src/entry_stack.js","src/s_pulnvv3i7kc.js"],symbols:["s_puLNVv3I7Kc"]},"q-ba33ece7.js":{size:209,origins:["src/utils/helpers.ts"]},"q-c0764e45.js":{size:1820,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_Footer.js","src/s_gvphuj5kg9q.js"],symbols:["s_GvPhUJ5Kg9Q"]},"q-c475753f.js":{size:545,imports:["q-2ac32ad2.js","q-e7155321.js"],dynamicImports:["q-59f0e300.js"],origins:["src/routes/index.tsx"]},"q-c52f5d7d.js":{size:128,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-cce741be.js":{size:671,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["src/entry_RouterHead.js","src/s_2fq8wiupq5i.js"],symbols:["s_2Fq8wIUpq5I"]},"q-d0821bae.js":{size:4302,imports:["q-2ac32ad2.js","q-e7155321.js"],origins:["node_modules/number-to-words/numberToWords.min.js","src/entry_Hero.js","src/media/pako-cropped.jpeg?jsx","src/s_jevt7v9cdh4.js"],symbols:["s_Jevt7v9CDh4"]},"q-d7312ef6.js":{size:2034,imports:["q-2ac32ad2.js","q-8f1b4cb6.js"],origins:["src/entry_button_game.js","src/s_lvhxlsc0aiu.js","src/s_sqnygwm7k0k.js"],symbols:["s_lVhXlSc0AIU","s_SqNyGWM7k0k"]},"q-da924818.js":{size:207,imports:["q-2ac32ad2.js"],dynamicImports:["q-1aecdae5.js"],origins:["src/routes/history/index.tsx"]},"q-dd9bac18.js":{size:329,imports:["q-2ac32ad2.js"],dynamicImports:["q-199e394d.js"],origins:["src/routes/test/index.tsx"]},"q-e445fcd0.js":{size:751,imports:["q-2ac32ad2.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-e7155321.js":{size:8388,imports:["q-2ac32ad2.js"],dynamicImports:["q-1889ed08.js","q-24012958.js","q-663033b0.js","q-8e1c6dde.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-f1760c98.js":{size:201,imports:["q-2ac32ad2.js"],dynamicImports:["q-3bac9607.js"],origins:["src/components/articles/articles.tsx"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/build/q-6d05c2f9.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.15",vite:"",rollup:"3.29.4",env:"node",os:"darwin",node:"21.1.0"}},Qe=()=>{const e=ce(),n=le();return j(I,{children:[y("title",null,null,e.title,1,null),y("link",null,{href:me(s=>s.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),y("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),y("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(s=>w("meta",{...s},null,0,s.key)),e.links.map(s=>w("link",{...s},null,0,s.key)),e.styles.map(s=>w("style",{...s.props,dangerouslySetInnerHTML:de(s,"style")},null,0,s.key))]},1,"0Z_0")},$e=V(H(Qe,"s_2Fq8wIUpq5I"));const Oe=()=>j(fe,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),j($e,null,3,"Le_0")],1,null),y("body",null,{lang:"en"},[j(ue,null,3,"Le_1"),j(pe,null,3,"Le_2")],1,null)]},1,"Le_3"),Me=V(H(Oe,"s_eXD0K9bzzlo"));function He(e){return Le(j(Me,null,3,"Ro_0"),{manifest:De,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{He as default};
