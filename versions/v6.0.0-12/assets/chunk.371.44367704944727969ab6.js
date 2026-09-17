/*! For license information please see chunk.371.44367704944727969ab6.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_||=[]).push([[222,371],{6251(e,t,n){"use strict"
function r(e){return null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}n.d(t,{A:()=>r})},28(e,t,n){"use strict"
n.d(t,{d6:()=>s,kf:()=>o,zN:()=>i})
var r=n(7933)
const a=setTimeout
function o(e){return!isNaN(parseFloat(e))&&isFinite(Number(e))}function i(e){const t=window.getComputedStyle(e)
return"none"!==t.display&&"hidden"!==t.visibility}function s(e){return!!(0,r.A)(e)&&e.disabled}n.d(t,["NZ",0,a,"dY",0,e=>Promise.resolve().then(e)])},642(e,t,n){"use strict"
n.d(t,{A:()=>a})
var r=n(4951)
function a(e){return!(0,r.wz)(e)&&"SELECT"===e.tagName}},2222(e,t,n){"use strict"
n.r(t),n.d(t,{blur:()=>ft,clearRender:()=>$e,click:()=>yt,currentRouteName:()=>ee,currentURL:()=>ne,doubleClick:()=>wt,fillIn:()=>Mt,find:()=>Lt,findAll:()=>zt,focus:()=>mt,getApplication:()=>u,getContext:()=>be,getDebugInfo:()=>U,getDeprecations:()=>Ee,getDeprecationsDuringCallback:()=>xe,getResolver:()=>r.v,getRootElement:()=>_e,getSettledState:()=>ue,getTestMetadata:()=>R,getWarnings:()=>Ae,getWarningsDuringCallback:()=>Fe,hasEmberVersion:()=>c,isSettled:()=>le,pauseTest:()=>we,registerDebugInfoHelper:()=>z,registerHook:()=>j,render:()=>Ve,rerender:()=>Ge,resetOnerror:()=>fe,resumeTest:()=>De,runHooks:()=>B,scrollTo:()=>Ut,select:()=>jt,setApplication:()=>s,setContext:()=>ve,setResolver:()=>r.V,settled:()=>ce,setupApplicationContext:()=>re,setupContext:()=>Ce,setupOnerror:()=>pe,setupRenderingContext:()=>Ue,tab:()=>At,tap:()=>Ft,teardownContext:()=>Te,triggerEvent:()=>Ct,triggerKeyEvent:()=>St,typeIn:()=>Vt,unsetContext:()=>ye,validateErrorHandler:()=>Qe,visit:()=>J,waitFor:()=>qt,waitForFocus:()=>Ht,waitUntil:()=>E.A})
var r=n(7934),a=n(2294),o=n.n(a)
let i
function s(e){if(i=e,!(0,r.v)()){const t=e.Resolver.create({namespace:e});(0,r.V)(t)}}function u(){return i}var l=n(5152)
function c(e,t){const n=l.VERSION.split("-")[0]?.split(".")
if(!n||!n[0]||!n[1])throw new Error("`Ember.VERSION` is not set.")
const r=parseInt(n[0],10),a=parseInt(n[1],10)
return r>e||r===e&&a>=t}var d=n(1223),p=n(4471),f=n.n(p),h=n(4540),m=n.n(h),g=n(9311),v=n(9132)
const b=f().extend(v.RegistryProxyMixin,v.ContainerProxyMixin,{_emberTestHelpersMockOwner:!0,unregister(e){this.__container__.reset(e),this.__registry__.unregister(e)}})
function y(e,t){if(e)return e.boot().then(e=>e.buildInstance().boot())
if(!t)throw new Error("You must set up the ember-test-helpers environment with either `setResolver` or `setApplication` before running any tests.")
const{owner:n}=function(e){const t=new(o())
t.Resolver={create:()=>e}
const n=o().buildRegistry(t),r=new g.Registry({fallback:n})
m().setupRegistry(r),r.normalizeFullName=n.normalizeFullName,r.makeToString=n.makeToString,r.describe=n.describe
const a=b.create({__registry__:r,__container__:null}),i=r.container({owner:a})
return a.__container__=i,function(e){const t=["register","unregister","resolve","normalize","typeInjection","injection","factoryInjection","factoryTypeInjection","has","options","optionsForType"]
for(let n=0,r=t.length;n<r;n++){const r=t[n]
if(r&&r in e){const t=r
e[t]=function(...n){return e._registry[t](...n)}}}}(i),{registry:r,container:i,owner:a}}(t)
return Promise.resolve(n)}var w=n(8234),D=n(28),E=n(5884),x=n(1704),A=n(1603),F=n(3887)
function C(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class k{constructor(){C(this,"testName",void 0),C(this,"setupTypes",void 0),C(this,"usedHelpers",void 0),this.setupTypes=[],this.usedHelpers=[]}get isRendering(){return this.setupTypes.indexOf("setupRenderingContext")>-1&&this.usedHelpers.indexOf("render")>-1}get isApplication(){return this.setupTypes.indexOf("setupApplicationContext")>-1}}const T=new WeakMap
function R(e){return T.has(e)||T.set(e,new k),T.get(e)}var N=n(6251)
const _=new WeakMap
function S(e){if(!e)throw new TypeError(`[@ember/test-helpers] could not get deprecations for an invalid test context: '${e}'`)
let t=_.get(e)
return Array.isArray(t)||(t=[],_.set(e,t)),t}if("undefined"!=typeof URLSearchParams){const e=new URLSearchParams(document.location.search.substring(1)),t=e.get("disabledDeprecations"),n=e.get("debugDeprecations")
t&&(0,A.registerDeprecationHandler)((e,n,r)=>{n&&t.includes(n.id)||r.apply(null,[e,n])}),n&&(0,A.registerDeprecationHandler)((e,t,r)=>{t&&n.includes(t.id),r.apply(null,[e,t])})}const O=new WeakMap
function M(e){if(!e)throw new TypeError(`[@ember/test-helpers] could not get warnings for an invalid test context: '${e}'`)
let t=O.get(e)
return Array.isArray(t)||(t=[],O.set(e,t)),t}if("undefined"!=typeof URLSearchParams){const e=new URLSearchParams(document.location.search.substring(1)),t=e.get("disabledWarnings"),n=e.get("debugWarnings")
t&&(0,A.registerWarnHandler)((e,n,r)=>{n&&t.includes(n.id)||r.apply(null,[e,n])}),n&&(0,A.registerWarnHandler)((e,t,r)=>{t&&n.includes(t.id),r.apply(null,[e,t])})}const P=new Map
function I(e,t){return`${e}:${t}`}function j(e,t,n){const r=I(e,t)
let a=P.get(r)
return void 0===a&&(a=new Set,P.set(r,a)),a.add(n),{unregister(){a.delete(n)}}}function B(e,t,...n){const r=P.get(I(e,t))||new Set,a=[]
return r.forEach(e=>{const t=e(...n)
a.push(t)}),Promise.all(a).then(()=>{})}var q=n(2186)
const L=new Set
function z(e){L.add(e)}function V(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const $="Pending test waiters"
function U(){return!0===d._backburner.DEBUG&&"function"==typeof d._backburner.getDebugInfo?d._backburner.getDebugInfo():null}class H{constructor(e,t=U()){V(this,"_settledState",void 0),V(this,"_debugInfo",void 0),V(this,"_summaryInfo",void 0),this._settledState=e,this._debugInfo=t}get summary(){return this._summaryInfo||(this._summaryInfo={...this._settledState},this._debugInfo&&(this._summaryInfo.autorunStackTrace=this._debugInfo.autorun&&this._debugInfo.autorun.stack,this._summaryInfo.pendingTimersCount=this._debugInfo.timers.length,this._summaryInfo.hasPendingTimers=this._settledState.hasPendingTimers&&this._summaryInfo.pendingTimersCount>0,this._summaryInfo.pendingTimersStackTraces=this._debugInfo.timers.map(e=>e.stack),this._summaryInfo.pendingScheduledQueueItemCount=this._debugInfo.instanceStack.filter(G).reduce((e,t)=>(Object.values(t).forEach(t=>{e+=t?.length??0}),e),0),this._summaryInfo.pendingScheduledQueueItemStackTraces=this._debugInfo.instanceStack.filter(G).reduce((e,t)=>(Object.values(t).forEach(t=>{t?.forEach(t=>t.stack&&e.push(t.stack))}),e),[])),this._summaryInfo.hasPendingTestWaiters&&(this._summaryInfo.pendingTestWaiterInfo=(0,q.getPendingWaiterState)())),this._summaryInfo}toConsole(e=console){const t=this.summary
t.hasPendingRequests&&e.log("Pending AJAX requests"),t.hasPendingLegacyWaiters&&e.log($),t.hasPendingTestWaiters&&(t.hasPendingLegacyWaiters||e.log($),Object.keys(t.pendingTestWaiterInfo.waiters).forEach(n=>{const r=t.pendingTestWaiterInfo.waiters[n]
Array.isArray(r)?(e.group(n),r.forEach(t=>{e.log(`${t.label?t.label:"stack"}: ${t.stack}`)}),e.groupEnd()):e.log(n)})),(t.hasPendingTimers||t.pendingScheduledQueueItemCount>0)&&(e.group("Scheduled async"),t.pendingTimersStackTraces.forEach(t=>{e.log(t)}),t.pendingScheduledQueueItemStackTraces.forEach(t=>{e.log(t)}),e.groupEnd()),t.hasRunLoop&&0===t.pendingTimersCount&&0===t.pendingScheduledQueueItemCount&&(e.log("Scheduled autorun"),t.autorunStackTrace&&e.log(t.autorunStackTrace)),L.forEach(e=>{e.log()})}_formatCount(e,t){return`${e}: ${t}`}}function G(e){return null!=e}const W=c(3,6)
let K=null
const Q=new WeakMap,Y=new WeakMap
function X(e){return he(e)}function Z(){if(W)return K
const e=be()
if(void 0===e)return null
const t=Q.get(e)
if(void 0===t)return null
const n=t._routerMicrolib||t.router
return void 0===n?null:!!n.activeTransition}function J(e,t){const n=be()
if(!n||!X(n))throw new Error("Cannot call `visit` without having first called `setupApplicationContext`.")
const{owner:r}=n
return R(n).usedHelpers.push("visit"),Promise.resolve().then(()=>B("visit","start",e,t)).then(()=>{const n=r.visit(e,t)
return function(){const e=be()
if(void 0===e||!he(e))throw new Error("Cannot setupRouterSettlednessTracking outside of a test context")
if(Y.get(e))return
Y.set(e,!0)
const{owner:t}=e
let n
if(W){const e=t.lookup("service:router");(0,A.assert)("router service is not set up correctly",!!e),n=e,n.on("routeWillChange",()=>K=!0),n.on("routeDidChange",()=>K=!1)}else{const r=t.lookup("router:main");(0,A.assert)("router:main is not available",!!r),n=r,Q.set(e,n)}const r=n.willDestroy
n.willDestroy=function(){return K=null,r.call(this)}}(),n}).then(()=>{n.element=document.querySelector("#ember-testing")}).then(ce).then(()=>B("visit","end",e,t))}function ee(){const e=be()
if(!e||!X(e))throw new Error("Cannot call `currentRouteName` without having first called `setupApplicationContext`.")
const t=e.owner.lookup("router:main").currentRouteName
return(0,A.assert)("currentRouteName should be a string","string"==typeof t),t}const te=c(2,13)
function ne(){const e=be()
if(!e||!X(e))throw new Error("Cannot call `currentURL` without having first called `setupApplicationContext`.")
const t=e.owner.lookup("router:main")
if(te){const e=t.currentURL
return null===e||(0,A.assert)("currentUrl should be a string, but was "+typeof e,"string"==typeof e),e}return t.location.getURL()}function re(e){return R(e).setupTypes.push("setupApplicationContext"),Promise.resolve()}let ae
const oe=w.Test.checkWaiters
function ie(e,t){ae.push(t)}function se(e,t){(0,D.dY)(()=>{for(let e=0;e<ae.length;e++)t===ae[e]&&ae.splice(e,1)})}function ue(){const e=d._backburner.hasTimers(),t=Boolean(d._backburner.currentInstance),n=oe(),r=(0,q.hasPendingWaiters)(),a=void 0!==ae?ae.length:0,o=a>0,i=!!t
return{hasPendingTimers:e,hasRunLoop:t,hasPendingWaiters:n||r,hasPendingRequests:o,hasPendingTransitions:Z(),isRenderPending:i,pendingRequestCount:a,debugInfo:new H({hasPendingTimers:e,hasRunLoop:t,hasPendingLegacyWaiters:n,hasPendingTestWaiters:r,hasPendingRequests:o,isRenderPending:i})}}function le(){const{hasPendingTimers:e,hasRunLoop:t,hasPendingRequests:n,hasPendingWaiters:r,hasPendingTransitions:a,isRenderPending:o}=ue()
return!(e||t||n||r||a||o)}function ce(){return(0,E.A)(le,{timeout:1/0}).then(()=>{})}const de=new Map
function pe(e){const t=be()
if(!t)throw new Error("Must setup test context before calling setupOnerror")
if(!de.has(t))throw new Error("_cacheOriginalOnerror must be called before setupOnerror. Normally, this will happen as part of your test harness.")
"function"!=typeof e&&(e=de.get(t)),(0,x.setOnerror)(e)}function fe(){const e=be()
e&&de.has(e)&&(0,x.setOnerror)(de.get(e))}function he(e){const t=e
return"function"==typeof t.pauseTest&&"function"==typeof t.resumeTest}function me(e){return e&&e.Math===Math&&e}(0,A.registerDeprecationHandler)((e,t,n)=>{const r=be()
void 0!==r?(S(r).push({message:e,options:t}),n.apply(null,[e,t])):n.apply(null,[e,t])}),(0,A.registerWarnHandler)((e,t,n)=>{const r=be()
void 0!==r?(M(r).push({message:e,options:t}),n.apply(null,[e,t])):n.apply(null,[e,t])})
const ge=me("object"==typeof globalThis&&globalThis)||me("object"==typeof window&&window)||me("object"==typeof self&&self)||me("object"==typeof F.A&&F.A)
function ve(e){ge.__test_context__=e}function be(){return ge.__test_context__}function ye(){ge.__test_context__=void 0}function we(){const e=be()
if(!e||!he(e))throw new Error("Cannot call `pauseTest` without having first called `setupTest` or `setupRenderingTest`.")
return e.pauseTest()}function De(){const e=be()
if(!e||!he(e))throw new Error("Cannot call `resumeTest` without having first called `setupTest` or `setupRenderingTest`.")
e.resumeTest()}function Ee(){const e=be()
if(!e)throw new Error("[@ember/test-helpers] could not get deprecations if no test context is currently active")
return S(e)}function xe(e){const t=be()
if(!t)throw new Error("[@ember/test-helpers] could not get deprecations if no test context is currently active")
return function(e,t){if(!e)throw new TypeError(`[@ember/test-helpers] could not get deprecations for an invalid test context: '${e}'`)
const n=S(e),r=n.length,a=t()
return(0,N.A)(a)?Promise.resolve(a).then(()=>n.slice(r)):n.slice(r)}(t,e)}function Ae(){const e=be()
if(!e)throw new Error("[@ember/test-helpers] could not get warnings if no test context is currently active")
return M(e)}function Fe(e){const t=be()
if(!t)throw new Error("[@ember/test-helpers] could not get warnings if no test context is currently active")
return function(e,t){if(!e)throw new TypeError(`[@ember/test-helpers] could not get warnings for an invalid test context: '${e}'`)
const n=M(e),r=n.length,a=t()
return(0,N.A)(a)?Promise.resolve(a).then(()=>n.slice(r)):n.slice(r)}(t,e)}function Ce(e,t={}){const n=e
return(0,A.setTesting)(!0),ve(n),R(n).setupTypes.push("setupContext"),d._backburner.DEBUG=!0,function(e){if(de.has(e))throw new Error("_prepareOnerror should only be called once per-context")
de.set(e,(0,x.getOnerror)())}(n),Promise.resolve().then(()=>{const e=u()
if(e)return e.boot().then(()=>{})}).then(()=>{const{resolver:e}=t
return e?y(null,e):y(u(),(0,r.v)())}).then(e=>{let t
return Object.defineProperty(n,"owner",{configurable:!0,enumerable:!0,value:e,writable:!1}),(0,a.setOwner)(n,e),Object.defineProperty(n,"set",{configurable:!0,enumerable:!0,value:(e,t)=>(0,d.run)(function(){return(0,p.set)(n,e,t)}),writable:!1}),Object.defineProperty(n,"setProperties",{configurable:!0,enumerable:!0,value:e=>(0,d.run)(function(){return(0,p.setProperties)(n,e)}),writable:!1}),Object.defineProperty(n,"get",{configurable:!0,enumerable:!0,value:e=>(0,p.get)(n,e),writable:!1}),Object.defineProperty(n,"getProperties",{configurable:!0,enumerable:!0,value:(...e)=>(0,p.getProperties)(n,e),writable:!1}),n.resumeTest=function(){(0,A.assert)("Testing has not been paused. There is nothing to resume.",!!t),t(),F.A.resumeTest=t=void 0},n.pauseTest=function(){return console.info("Testing paused. Use `resumeTest()` to continue."),new Promise(e=>{t=e,F.A.resumeTest=De})},ae=[],void 0!==globalThis.jQuery&&(globalThis.jQuery(document).on("ajaxSend",ie),globalThis.jQuery(document).on("ajaxComplete",se)),n})}var ke=n(1130)
function Te(e,{waitForSettled:t=!0}={}){return Promise.resolve().then(()=>{!function(e){fe(),de.delete(e)}(e),ae=[],void 0!==globalThis.jQuery&&(globalThis.jQuery(document).off("ajaxSend",ie),globalThis.jQuery(document).off("ajaxComplete",se)),(0,A.setTesting)(!1),ye(),(0,ke.destroy)(e.owner)}).finally(()=>{if(t)return ce()})}var Re=n(4334),Ne=n(4951)
function _e(){const e=be()
if(!e||!he(e)||!e.owner)throw new Error("Must setup rendering context before attempting to interact with elements.")
const t=e.owner
let n
if(n=t&&void 0===t._emberTestHelpersMockOwner?t.rootElement:"#ember-testing",n instanceof Window&&(n=n.document),(0,Ne.vq)(n)||(0,Ne.wz)(n))return n
if("string"==typeof n){const e=document.querySelector(n)
if(e)return e
throw new Error(`Application.rootElement (${n}) not found`)}throw new Error("Application.rootElement must be an element or a selector string")}var Se=n(9095),Oe=n(1465)
const Me=(0,Oe.createTemplateFactory)({id:"OuZsg6hU",block:'[[[46,[28,[37,1],null,null],null,null,null]],[],false,["component","-outlet"]]',moduleName:"/Volumes/code/ember-table/node_modules/@ember/test-helpers/dist/setup-rendering-context.js",isStrictMode:!1}),Pe=(0,Oe.createTemplateFactory)({id:"AG26UZbP",block:"[[],[],false,[]]",moduleName:"/Volumes/code/ember-table/node_modules/@ember/test-helpers/dist/setup-rendering-context.js",isStrictMode:!1}),Ie=(0,Oe.createTemplateFactory)({id:"9gA+utM9",block:'[[[8,[30,0,["ProvidedComponent"]],null,null,null]],[],false,[]]',moduleName:"/Volumes/code/ember-table/node_modules/@ember/test-helpers/dist/setup-rendering-context.js",isStrictMode:!1}),je=Symbol()
function Be(e){return he(e)&&je in e}function qe(e,t){const n=e.lookup(t)
return"function"==typeof n?n(e):n}let Le,ze=0
function Ve(e,t){let n=be()
if(!e)throw new Error("you must pass a template to `render()`")
return Promise.resolve().then(()=>B("render","start")).then(()=>{if(!n||!Be(n))throw new Error("Cannot call `render` without having first called `setupRenderingContext`.")
const{owner:r}=n
R(n).usedHelpers.push("render")
const a=r.lookup("-top-level-view:main"),o=function(e){let t=qe(e,"template:-outlet")
return t||(e.register("template:-outlet",Me),t=qe(e,"template:-outlet")),t}(r),i=t?.owner||r
var s
s=e,(0,Se.getInternalComponentManager)(s,!0)&&(n={ProvidedComponent:e},e=Ie),ze+=1
const u=`template:-undertest-${ze}`
i.register(u,e)
const l=qe(i,u),c={render:{owner:r,into:void 0,outlet:"main",name:"application",controller:void 0,ViewClass:void 0,template:o},outlets:{main:{render:{owner:i,into:void 0,outlet:"main",name:"index",controller:n,ViewClass:void 0,template:l,outlets:{}},outlets:{}}}}
return a.setOutletState(c),ce()}).then(()=>B("render","end"))}function $e(){const e=be()
if(!e||!Be(e))throw new Error("Cannot call `clearRender` without having first called `setupRenderingContext`.")
return Ve(Pe)}function Ue(e){R(e).setupTypes.push("setupRenderingContext")
const t=function(e){return e[je]=!0,e}(e)
return Promise.resolve().then(()=>{const{owner:e}=t
e._emberTestHelpersMockOwner&&(e.lookup("event_dispatcher:main")||Re.EventDispatcher.create()).setup({},"#ember-testing")
const n=e.factoryFor?e.factoryFor("view:-outlet"):e._lookupFactory("view:-outlet"),r=e.lookup("-environment:main"),a=e.lookup("template:-outlet"),o=n.create({template:a,environment:r})
return e.register("-top-level-view:main",{create:()=>o}),Ve(Pe).then(()=>((0,d.run)(o,"appendTo",_e()),ce()))}).then(()=>(Object.defineProperty(t,"element",{configurable:!0,enumerable:!0,value:_e(),writable:!1}),t))}Le=(0,n(3193).A)(n(8935)).renderSettled
var He=Le
function Ge(){return He()}const We=Object.freeze({isValid:!0,message:null}),Ke=Object.freeze({isValid:!1,message:"error handler should have re-thrown the provided error"})
function Qe(e=(0,x.getOnerror)()){if(null==e)return We
const t=new Error("Error handler validation error!"),n=(0,A.isTesting)();(0,A.setTesting)(!0)
try{e(t)}catch(e){if(e===t)return We}finally{(0,A.setTesting)(n)}return Ke}var Ye=n(6994)
function Xe(e){if("string"==typeof e)return _e().querySelector(e)
if((0,Ne.vq)(e)||(0,Ne.wz)(e))return e
if(e instanceof Window)return e.document
{const t=(0,Ye.Ob)(e)
if(t)return(0,Ye.lH)(t)
throw new Error("Must use an element, selector string, or DOM element descriptor")}}function Ze(e){return(0,Ne.l6)(e)?e:Xe(e)}var Je=n(4627),et=n(4225)
j("fireEvent","start",e=>{(0,et.R)("fireEvent",e)})
const tt=(()=>{try{return new MouseEvent("test"),!0}catch{return!1}})(),nt={bubbles:!0,cancelable:!0},rt=(0,Je.A)("keydown","keypress","keyup")
function at(e){return rt.indexOf(e)>-1}const ot=(0,Je.A)("click","mousedown","mouseup","dblclick","mouseenter","mouseleave","mousemove","mouseout","mouseover"),it=(0,Je.A)("change")
function st(e,t,n={}){return Promise.resolve().then(()=>B("fireEvent","start",e)).then(()=>B(`fireEvent:${t}`,"start",e)).then(()=>{if(!e)throw new Error("Must pass an element to `fireEvent`")
let r
if(at(t))r=lt(t,n)
else if(function(e){return ot.indexOf(e)>-1}(t)){let a
if(e instanceof Window&&e.document.documentElement)a=e.document.documentElement.getBoundingClientRect()
else if((0,Ne.wz)(e))a=e.documentElement.getBoundingClientRect()
else{if(!(0,Ne.vq)(e))return
a=e.getBoundingClientRect()}const o=a.left+1,i=a.top+1,s={screenX:o+5,screenY:i+95,clientX:o,clientY:i,...n}
r=function(e,t={}){let n
const r={view:window,...nt,...t}
if(tt)n=new MouseEvent(e,r)
else try{n=document.createEvent("MouseEvents"),n.initMouseEvent(e,r.bubbles,r.cancelable,window,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget)}catch{n=ut(e,t)}return n}(t,s)}else r=function(e){return it.indexOf(e)>-1}(t)&&function(e){return e.files}(e)?function(e,t,n={}){const r=ut(e),a=n.files
if(Array.isArray(n))throw new Error("Please pass an object with a files array to `triggerEvent` instead of passing the `options` param as an array to.")
if(Array.isArray(a)){Object.defineProperty(a,"item",{value(e){return"number"==typeof e?this[e]:null},configurable:!0}),Object.defineProperty(t,"files",{value:a,configurable:!0})
const e=Object.getPrototypeOf(t),n=Object.getOwnPropertyDescriptor(e,"value")
Object.defineProperty(t,"value",{configurable:!0,get:()=>n.get.call(t),set(e){n.set.call(t,e),Object.defineProperty(t,"files",{configurable:!0,value:[]})}})}return Object.defineProperty(r,"target",{value:t}),r}(t,e,n):ut(t,n)
return e.dispatchEvent(r),r}).then(n=>B(`fireEvent:${t}`,"end",e).then(()=>n)).then(t=>B("fireEvent","end",e).then(()=>t))}function ut(e,t={}){const n=document.createEvent("Events"),r=void 0===t.bubbles||t.bubbles,a=void 0===t.cancelable||t.cancelable
delete t.bubbles,delete t.cancelable,n.initEvent(e,r,a)
for(const o in t)n[o]=t[o]
return n}function lt(e,t={}){const n={...nt,...t}
let r,a
try{return r=new KeyboardEvent(e,n),Object.defineProperty(r,"keyCode",{get:()=>parseInt(n.keyCode)}),Object.defineProperty(r,"which",{get:()=>parseInt(n.which)}),r}catch{}try{r=document.createEvent("KeyboardEvents"),a="initKeyboardEvent"}catch{}if(!r)try{r=document.createEvent("KeyEvents"),a="initKeyEvent"}catch{}return r&&a?r[a](e,n.bubbles,n.cancelable,window,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.keyCode,n.charCode):r=ut(e,t),r}var ct=n(1799),dt=n(4031)
function pt(e,t=null){if(!(0,ct.A)(e))throw new Error(`${e} is not focusable`)
const n=document.hasFocus&&!document.hasFocus(),r=null!==t
r||e.blur()
const a={relatedTarget:t}
return n||r?Promise.resolve().then(()=>st(e,"blur",{bubbles:!1,...a})).then(()=>st(e,"focusout",a)):Promise.resolve()}function ft(e=document.activeElement){return Promise.resolve().then(()=>B("blur","start",e)).then(()=>{const t=Xe(e)
if(!t){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`blur('${t}')\`.`)}return pt(t).then(()=>ce())}).then(()=>B("blur","end",e))}function ht(e){return Promise.resolve().then(()=>{const t=function(e){if((0,Ne.wz)(e))return null
let t=e
for(;t&&!(0,ct.A)(t);)t=t.parentElement
return t}(e),n=document.activeElement&&document.activeElement!==t&&(0,ct.A)(document.activeElement)?document.activeElement:null
return!t&&n?pt(n,null).then(()=>Promise.resolve({focusTarget:t,previousFocusedElement:n})):Promise.resolve({focusTarget:t,previousFocusedElement:n})}).then(({focusTarget:e,previousFocusedElement:t})=>{if(!e)throw new Error("There was a previously focused element")
const n=!document?.hasFocus()
return t&&n?pt(t,e).then(()=>Promise.resolve({focusTarget:e})):Promise.resolve({focusTarget:e})}).then(({focusTarget:e})=>{e.focus()
const t=document?.hasFocus()
return t?Promise.resolve():Promise.resolve().then(()=>st(e,"focus",{bubbles:!1})).then(()=>st(e,"focusin")).then(()=>ce())}).catch(()=>{})}function mt(e){return Promise.resolve().then(()=>B("focus","start",e)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `focus`.")
const t=Xe(e)
if(!t){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`focus('${t}')\`.`)}if(!(0,ct.A)(t))throw new Error(`${t} is not focusable`)
return ht(t).then(ce)}).then(()=>B("focus","end",e))}j("blur","start",e=>{(0,et.R)("blur",e)}),j("focus","start",e=>{(0,et.R)("focus",e)})
var gt=n(7933)
j("click","start",e=>{(0,et.R)("click",e)})
const vt={buttons:1,button:0}
function bt(e,t){return Promise.resolve().then(()=>st(e,"mousedown",t)).then(t=>(0,Ne.l6)(e)||t?.defaultPrevented?Promise.resolve():ht(e)).then(()=>st(e,"mouseup",t)).then(()=>st(e,"click",t))}function yt(e,t={}){const n={...vt,...t}
return Promise.resolve().then(()=>B("click","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `click`.")
const t=Ze(e)
if(!t){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`click('${t}')\`.`)}if((0,gt.A)(t)&&t.disabled)throw new Error(`Can not \`click\` disabled ${t}`)
return bt(t,n).then(ce)}).then(()=>B("click","end",e,t))}function wt(e,t={}){const n={...vt,...t}
return Promise.resolve().then(()=>B("doubleClick","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `doubleClick`.")
const t=Ze(e)
if(!t){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`doubleClick('${t}')\`.`)}if((0,gt.A)(t)&&t.disabled)throw new Error(`Can not \`doubleClick\` disabled ${t}`)
return function(e,t){return Promise.resolve().then(()=>st(e,"mousedown",t)).then(t=>(0,Ne.l6)(e)||t?.defaultPrevented?Promise.resolve():ht(e)).then(()=>st(e,"mouseup",t)).then(()=>st(e,"click",t)).then(()=>st(e,"mousedown",t)).then(()=>st(e,"mouseup",t)).then(()=>st(e,"click",t)).then(()=>st(e,"dblclick",t))}(t,n).then(ce)}).then(()=>B("doubleClick","end",e,t))}j("doubleClick","start",e=>{(0,et.R)("doubleClick",e)})
const Dt="inert"in Element.prototype,Et=["CANVAS","VIDEO","PICTURE"]
function xt(e){return e.activeElement||e.body}function At({backwards:e=!1,unRestrainTabIndex:t=!1}={}){return Promise.resolve().then(()=>function(e,t){const n=_e()
let r,a;(0,Ne.wz)(n)?(a=n.body,r=n):(a=n,r=n.ownerDocument)
const o={keyCode:9,which:9,key:"Tab",code:"Tab",shiftKey:e},i={keyboardEventOptions:o,ownerDocument:r,rootElement:a}
return Promise.resolve().then(()=>B("tab","start",i)).then(()=>xt(r)).then(e=>B("tab","targetFound",e).then(()=>e)).then(t=>{const n=lt("keydown",o)
if(t.dispatchEvent(n)){t=xt(r)
const n=function(e,t){const n=function(e=document.body){const{ownerDocument:t}=e
if(!t)throw new Error("Element must be in the DOM")
const n=xt(t),r=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{if("AREA"!==e.tagName&&!1===(0,D.zN)(e))return NodeFilter.FILTER_REJECT
const t=e.parentNode
return t&&-1!==Et.indexOf(t.tagName)||Dt&&e.inert||(0,D.d6)(e)?NodeFilter.FILTER_REJECT:e===n||e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}})
let a
const o=[]
for(;a=r.nextNode();)o.push(a)
return o}(e),r=function(e){return e.map((e,t)=>({index:t,element:e})).sort((e,t)=>e.element.tabIndex===t.element.tabIndex?e.index-t.index:0===e.element.tabIndex||0===t.element.tabIndex?t.element.tabIndex-e.element.tabIndex:e.element.tabIndex-t.element.tabIndex).map(e=>e.element)}(n),a=-1===t.tabIndex?n:r,o=a.indexOf(t)
return-1===o?{next:r[0],previous:r[r.length-1]}:{next:a[o+1],previous:a[o-1]}}(a,t)
if(n)return e&&n.previous?ht(n.previous):!e&&n.next?ht(n.next):pt(t)}return Promise.resolve()}).then(()=>{const e=xt(r)
return st(e,"keyup",o).then(()=>e)}).then(e=>{if(!t&&e.tabIndex>0)throw new Error(`tabindex of greater than 0 is not allowed. Found tabindex=${e.tabIndex}`)}).then(()=>B("tab","end",i))}(e,t)).then(()=>ce())}function Ft(e,t={}){return Promise.resolve().then(()=>B("tap","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `tap`.")
const n=Xe(e)
if(!n){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`tap('${t}')\`.`)}if((0,gt.A)(n)&&n.disabled)throw new Error(`Can not \`tap\` disabled ${n}`)
return st(n,"touchstart",t).then(e=>st(n,"touchend",t).then(t=>[e,t])).then(([e,r])=>e.defaultPrevented||r.defaultPrevented?Promise.resolve():bt(n,t)).then(ce)}).then(()=>B("tap","end",e,t))}function Ct(e,t,n,r=!1){return Promise.resolve().then(()=>B("triggerEvent","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `triggerEvent`.")
if(!t)throw new Error("Must provide an `eventType` to `triggerEvent`")
const a=Ze(e)
if(!a){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`triggerEvent('${t}', ...)\`.`)}if(!r&&(0,gt.A)(a)&&a.disabled)throw new Error(`Can not \`triggerEvent\` on disabled ${a}`)
return st(a,t,n).then(ce)}).then(()=>B("triggerEvent","end",e,t,n))}j("tab","start",e=>{(0,et.R)("tab",e)}),j("tap","start",e=>{(0,et.R)("tap",e)}),j("triggerEvent","start",(e,t)=>{(0,et.R)("triggerEvent",e,t)}),j("triggerKeyEvent","start",(e,t,n)=>{(0,et.R)("triggerKeyEvent",e,t,n)})
const kt=Object.freeze({ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1}),Tt={8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:"Meta",93:"Meta",186:";",187:"=",188:",",189:"-",190:".",191:"/",219:"[",220:"\\",221:"]",222:"'"},Rt={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",186:":",187:"+",188:"<",189:"_",190:">",191:"?",219:"{",220:"|",221:"}",222:'"'}
function Nt(e,t){return e>64&&e<91?t.shiftKey?String.fromCharCode(e):String.fromCharCode(e).toLocaleLowerCase():t.shiftKey&&Rt[e]||Tt[e]}function _t(e,t,n,r=kt){return Promise.resolve().then(()=>{let a
if("number"==typeof n)a={keyCode:n,which:n,key:Nt(n,r),...r}
else{if("string"!=typeof n||0===n.length)throw new Error("Must provide a `key` or `keyCode` to `triggerKeyEvent`")
{const e=n[0]
if(!e||e!==e.toUpperCase())throw new Error(`Must provide a \`key\` to \`triggerKeyEvent\` that starts with an uppercase character but you passed \`${n}\`.`)
if((0,D.kf)(n)&&n.length>1)throw new Error(`Must provide a numeric \`keyCode\` to \`triggerKeyEvent\` but you passed \`${n}\` as a string.`)
const t=function(e){const t=Object.keys(Tt),n=t.find(t=>Tt[Number(t)]===e)||t.find(t=>Tt[Number(t)]===e.toLowerCase())
return void 0!==n?parseInt(n):void 0}(n)
a={keyCode:t,which:t,key:n,...r}}}return st(e,t,a)})}function St(e,t,n,r=kt){return Promise.resolve().then(()=>B("triggerKeyEvent","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `triggerKeyEvent`.")
const a=Xe(e)
if(!a){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`triggerKeyEvent('${t}')\`.`)}if(!t)throw new Error("Must provide an `eventType` to `triggerKeyEvent`")
if(!at(t)){const e=rt.join(", ")
throw new Error(`Must provide an \`eventType\` of ${e} to \`triggerKeyEvent\` but you passed \`${t}\`.`)}if((0,gt.A)(a)&&a.disabled)throw new Error(`Can not \`triggerKeyEvent\` on disabled ${a}`)
return _t(a,t,n,r).then(ce)}).then(()=>B("triggerKeyEvent","end",e,t,n))}var Ot=n(4648)
function Mt(e,t){return Promise.resolve().then(()=>B("fillIn","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `fillIn`.")
const n=Xe(e)
if(!n){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`fillIn('${t}')\`.`)}if(null==t)throw new Error("Must provide `text` when calling `fillIn`.")
if((0,gt.A)(n)){if(n.disabled)throw new Error(`Can not \`fillIn\` disabled '${(0,dt.A)(e)}'.`)
if("readOnly"in n&&n.readOnly)throw new Error(`Can not \`fillIn\` readonly '${(0,dt.A)(e)}'.`)
return(0,Ot.A)(n,t,"fillIn"),ht(n).then(()=>(n.value=t,n))}if((0,Ne.eJ)(n))return ht(n).then(()=>(n.innerHTML=t,n))
throw new Error("`fillIn` is only usable on form controls or contenteditable elements.")}).then(e=>st(e,"input").then(()=>st(e,"change")).then(ce)).then(()=>B("fillIn","end",e,t))}j("fillIn","start",(e,t)=>{(0,et.R)("fillIn",e,t)})
var Pt=n(642)
function It(e,t){return`${e} when calling \`select('${(0,dt.A)(t)}')\`.`}function jt(e,t,n=!1){return Promise.resolve().then(()=>B("select","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `select`.")
if(null==t)throw new Error("Must provide an `option` or `options` to select when calling `select`.")
const n=Xe(e)
if(!n)throw new Error(It("Element not found",e))
if(!(0,Pt.A)(n))throw new Error(It("Element is not a HTMLSelectElement",e))
if(n.disabled)throw new Error(It("Element is disabled",e))
if(t=Array.isArray(t)?t:[t],!n.multiple&&t.length>1)throw new Error(It("HTMLSelectElement `multiple` attribute is set to `false` but multiple options were passed",e))
return ht(n).then(()=>n)}).then(e=>{for(let r=0;r<e.options.length;r++){const a=e.options.item(r)
a&&(t.indexOf(a.value)>-1?a.selected=!0:n||(a.selected=!1))}return st(e,"input").then(()=>st(e,"change")).then(ce)}).then(()=>B("select","end",e,t,n))}function Bt(e){if("string"==typeof e)return _e().querySelectorAll(e)
{const t=(0,Ye.Ob)(e)
if(t)return(0,Ye.Mt)(t)
throw new Error("Must use a selector string or DOM element descriptor")}}function qt(e,t={}){return Promise.resolve().then(()=>{if("string"!=typeof e&&!(0,Ye.Ob)(e))throw new Error("Must pass a selector or DOM element descriptor to `waitFor`.")
const{timeout:n=1e3,count:r=null}=t
let a,{timeoutMessage:o}=t
return o||(o=`waitFor timed out waiting for selector "${(0,dt.A)(e)}"`),a=null!==r?()=>{const t=Array.from(Bt(e))
if(t.length===r)return t}:()=>Xe(e),(0,E.A)(a,{timeout:n,timeoutMessage:o})})}function Lt(e){if(!e)throw new Error("Must pass a selector to `find`.")
if(arguments.length>1)throw new Error("The `find` test helper only takes a single argument.")
return Xe(e)}function zt(e){if(!e)throw new Error("Must pass a selector to `findAll`.")
if(arguments.length>1)throw new Error("The `findAll` test helper only takes a single argument.")
return Array.from(Bt(e))}function Vt(e,t,n={}){return Promise.resolve().then(()=>B("typeIn","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `typeIn`.")
const r=Xe(e)
if(!r){const t=(0,dt.A)(e)
throw new Error(`Element not found when calling \`typeIn('${t}')\``)}if((0,Ne.wz)(r)||!(0,gt.A)(r)&&!(0,Ne.eJ)(r))throw new Error("`typeIn` is only usable on form controls or contenteditable elements.")
if(null==t)throw new Error("Must provide `text` when calling `typeIn`.")
if((0,gt.A)(r)){if(r.disabled)throw new Error(`Can not \`typeIn\` disabled '${(0,dt.A)(e)}'.`)
if("readOnly"in r&&r.readOnly)throw new Error(`Can not \`typeIn\` readonly '${(0,dt.A)(e)}'.`)}const{delay:a=50}=n
return ht(r).then(()=>function(e,t,n){const r=t.split("").map(t=>function(e,t){const n={shiftKey:t===t.toUpperCase()&&t!==t.toLowerCase()},r=t.toUpperCase()
return function(){return Promise.resolve().then(()=>_t(e,"keydown",r,n)).then(()=>_t(e,"keypress",r,n)).then(()=>{if((0,gt.A)(e)){const n=e.value+t;(0,Ot.A)(e,n,"typeIn"),e.value=n}else{const n=e.innerHTML+t
e.innerHTML=n}return st(e,"input")}).then(()=>_t(e,"keyup",r,n))}}(e,t))
return r.reduce((e,t)=>e.then(()=>function(e){return new Promise(t=>{setTimeout(t,e)})}(n)).then(t),Promise.resolve())}(r,t,a)).then(()=>st(r,"change")).then(ce).then(()=>B("typeIn","end",e,t,n))})}function $t(e,t){return`${e} when calling \`scrollTo('${(0,dt.A)(t)}')\`.`}function Ut(e,t,n){return Promise.resolve().then(()=>B("scrollTo","start",e)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `scrollTo`.")
if(void 0===t||void 0===n)throw new Error("Must pass both x and y coordinates to `scrollTo`.")
const r=Xe(e)
if(!r)throw new Error($t("Element not found",e))
if(!(0,Ne.vq)(r)){let t
throw t=(0,Ne.wz)(r)?"Document":r.nodeType,new Error($t(`"target" must be an element, but was a ${t}`,e))}return r.scrollTop=n,r.scrollLeft=t,st(r,"scroll").then(ce)}).then(()=>B("scrollTo","end",e))}function Ht(e,t={}){return Promise.resolve().then(()=>{if("string"!=typeof e&&!(0,Ye.Ob)(e))throw new Error("Must pass a selector or DOM element descriptor to `waitFor`.")
const{timeout:n=1e3}=t
let{timeoutMessage:r}=t
return r||(r=`waitForFocus timed out waiting for selector "${(0,dt.A)(e)}"`),(0,E.A)(()=>{const t=Xe(e)
if(t&&t===document.activeElement)return document.activeElement},{timeout:n,timeoutMessage:r})})}j("typeIn","start",(e,t)=>{(0,et.R)("typeIn",e,t)})},7934(e,t,n){"use strict"
let r
function a(e){r=e}function o(){return r}n.d(t,{V:()=>a,v:()=>o})},6198(e,t,n){"use strict"
n.r(t),n.d(t,["CI",0,!1,"DEBUG",0,!1])},1707(e,t){!function t(n){var r=n,a=n.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
i.version="4.13.0","function"==typeof define&&define.amd&&define("axe-core",[],function(){return i}),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof n.getComputedStyle&&(n.axe=i)
var s=["precision","format","inGamut"],u=["space"],l=["algorithm"],c=["method"],d=["maxDeltaE","deltaEMethod","steps","maxSteps"],p=["node"],f=["relatedNodes"],h=["node"],m=["variant"],g=["matches"],v=["chromium"],b=["noImplicit"],y=["noPresentational"],w=["node"],D=["environmentData"],E=["environmentData"],x=["environmentData"],A=["environmentData"],F=["environmentData"]
function C(){var e,t,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",a=n.toStringTag||"@@toStringTag"
function o(n,r,a,o){var u=r&&r.prototype instanceof s?r:s,l=Object.create(u.prototype)
return k(l,"_invoke",function(n,r,a){var o,s,u,l=0,c=a||[],d=!1,p={p:0,n:0,v:e,a:f,f:f.bind(e,4),d:function(t,n){return o=t,s=0,u=e,p.n=n,i}}
function f(n,r){for(s=n,u=r,t=0;!d&&l&&!a&&t<c.length;t++){var a,o=c[t],f=p.p,h=o[2]
n>3?(a=h===r)&&(u=o[(s=o[4])?5:(s=3,3)],o[4]=o[5]=e):o[0]<=f&&((a=n<2&&f<o[1])?(s=0,p.v=r,p.n=o[1]):f<h&&(a=n<3||o[0]>r||r>h)&&(o[4]=n,o[5]=r,p.n=h,s=0))}if(a||n>1)return i
throw d=!0,r}return function(a,c,h){if(l>1)throw TypeError("Generator is already running")
for(d&&1===c&&f(c,h),s=c,u=h;(t=s<2?e:u)||!d;){o||(s?s<3?(s>1&&(p.n=-1),f(s,u)):p.n=u:p.v=u)
try{if(l=2,o){if(s||(a="next"),t=o[a]){if(!(t=t.call(o,u)))throw TypeError("iterator result is not an object")
if(!t.done)return t
u=t.value,s<2&&(s=0)}else 1===s&&(t=o.return)&&t.call(o),s<2&&(u=TypeError("The iterator does not provide a '"+a+"' method"),s=1)
o=e}else if((t=(d=p.n<0)?u:n.call(r,p))!==i)break}catch(t){o=e,s=1,u=t}finally{l=1}}return{value:t,done:d}}}(n,a,o),!0),l}var i={}
function s(){}function u(){}function l(){}t=Object.getPrototypeOf
var c=[][r]?t(t([][r]())):(k(t={},r,function(){return this}),t),d=l.prototype=s.prototype=Object.create(c)
function p(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,k(e,a,"GeneratorFunction")),e.prototype=Object.create(d),e}return u.prototype=l,k(d,"constructor",l),k(l,"constructor",u),u.displayName="GeneratorFunction",k(l,a,"GeneratorFunction"),k(d),k(d,a,"Generator"),k(d,r,function(){return this}),k(d,"toString",function(){return"[object Generator]"}),(C=function(){return{w:o,m:p}})()}function k(e,t,n,r){var a=Object.defineProperty
try{a({},"",{})}catch(e){a=0}k=function(e,t,n,r){function o(t,n){k(e,t,function(e){return this._invoke(t,n,e)})}t?a?a(e,t,{value:n,enumerable:!r,configurable:!r,writable:!r}):e[t]=n:(o("next",0),o("throw",1),o("return",2))},k(e,t,n,r)}function T(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,a)}function R(e){return function(){var t=this,n=arguments
return new Promise(function(r,a){var o=e.apply(t,n)
function i(e){T(o,r,a,i,s,"next",e)}function s(e){T(o,r,a,i,s,"throw",e)}i(void 0)})}}function N(e){var t="function"==typeof Map?new Map:void 0
return N=function(e){if(null===e||!function(e){try{return-1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return"function"==typeof e}}(e))return e
if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function")
if(void 0!==t){if(t.has(e))return t.get(e)
t.set(e,n)}function n(){return S(e,arguments,I(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),B(n,e)},N(e)}function _(e,t,n){return(t=ee(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t,n){if(P())return Reflect.construct.apply(null,arguments)
var r=[null]
r.push.apply(r,t)
var a=new(e.bind.apply(e,r))
return n&&B(a,n.prototype),a}function O(e,t){if(null==e)return{}
var n,r,a=function(e,t){if(null==e)return{}
var n={}
for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue
n[r]=e[r]}return n}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t,n){return t=I(t),function(e,t){if(t&&("object"==o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(e,P()?Reflect.construct(t,n||[],I(e).constructor):t.apply(e,n))}function P(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(P=function(){return!!e})()}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}function j(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(null,arguments)}function L(e){return function(e){if(Array.isArray(e))return re(e)}(e)||z(e)||ne(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function V(e,t,n){U(e,t),t.set(e,n)}function $(e,t){U(e,t),t.add(e)}function U(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function H(e,t){return e.get(W(e,t))}function G(e,t,n){return e.set(W(e,t),n),n}function W(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}function K(e,t){return Y(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,i,s=[],u=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}(e,t)||ne(e,t)||Q()}function Q(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Y(e){if(Array.isArray(e))return e}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ee(r.key),r)}}function J(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e){var t=function(e){if("object"!=o(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=o(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==o(t)?t:t+""}function te(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=ne(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,s=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw o}}}}function ne(e,t){if(e){if("string"==typeof e)return re(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re(e,t):void 0}}function re(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(e,t,k,T,P,I,B,U,Z,ee,ae){var oe=Object.create,ie=Object.defineProperty,se=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,le=Object.getOwnPropertyNames,ce=Object.getOwnPropertyDescriptor,de=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},pe=function(e,t){for(var n in t)ie(e,n,{get:t[n],enumerable:!0})},fe=function(e){return function(e,t,n){if(t&&"object"===o(t)||"function"==typeof t){var r,a=te(le(t))
try{var i=function(){var a=r.value
ue.call(e,a)||"default"===a||ie(e,a,{get:function(){return t[a]},enumerable:!(n=ce(t,a))||n.enumerable})}
for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}return e}((t=ie(null!=e?oe(se(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),ie(t,"__esModule",{value:!0})),e)
var t},he=function(e,t,n){return function(e,t,n){t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==o(t)?t+"":t,n),n},me=de(function(e,t){var i,s
i=e,s=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,s=void 0,u=void 0,l=function(e,t){g[i]=e,g[i+1]=t,2===(i+=2)&&(u?u(v):E())},c=void 0!==n?n:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(v,1)}}var g=new Array(1e3)
function v(){for(var e=0;e<i;e+=2)(0,g[e])(g[e+1]),g[e]=void 0,g[e+1]=void 0
i=0}var b,y,w,D,E=void 0
function x(e,t){var n=this,r=new this.constructor(C)
void 0===r[F]&&q(r)
var a=n._state
if(a){var o=arguments[a-1]
l(function(){return j(a,r,o,n._result)})}else P(n,r,e,t)
return r}function A(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(C)
return _(t,e),t}f?E=function(){return process.nextTick(v)}:p?(y=0,w=new p(v),D=a.createTextNode(""),w.observe(D,{characterData:!0}),E=function(){D.data=y=++y%2}):h?((b=new MessageChannel).port1.onmessage=v,E=function(){return b.port2.postMessage(0)}):E=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(s=e.runOnLoop||e.runOnContext)?function(){s(v)}:m()}catch(e){return m()}}():m()
var F=Math.random().toString(36).substring(2)
function C(){}var k=void 0,T=1,R=2
function N(t,n,r){n.constructor===t.constructor&&r===x&&n.constructor.resolve===A?function(e,t){t._state===T?O(e,t._result):t._state===R?M(e,t._result):P(t,void 0,function(t){return _(e,t)},function(t){return M(e,t)})}(t,n):void 0===r?O(t,n):e(r)?function(e,t,n){l(function(e){var r=!1,a=function(n,a){try{n.call(a,function(n){r||(r=!0,t!==n?_(e,n):O(e,n))},function(t){r||(r=!0,M(e,t))})}catch(e){return e}}(n,t,e._label)
!r&&a&&(r=!0,M(e,a))},e)}(t,n,r):O(t,n)}function _(e,t){if(e===t)M(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(r=t),null===r||"object"!==a&&"function"!==a)O(e,t)
else{var n=void 0
try{n=t.then}catch(t){return void M(e,t)}N(e,t,n)}var r,a}function S(e){e._onerror&&e._onerror(e._result),I(e)}function O(e,t){e._state===k&&(e._result=t,e._state=T,0!==e._subscribers.length&&l(I,e))}function M(e,t){e._state===k&&(e._state=R,e._result=t,l(S,e))}function P(e,t,n,r){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+T]=n,a[o+R]=r,0===o&&e._state&&l(I,e)}function I(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?j(n,r,a,o):a(o)
e._subscribers.length=0}}function j(t,n,r,a){var o=e(r),i=void 0,s=void 0,u=!0
if(o){try{i=r(a)}catch(e){u=!1,s=e}if(n===i)return void M(n,new TypeError("A promises callback cannot return that same promise."))}else i=a
n._state!==k||(o&&u?_(n,i):!1===u?M(n,s):t===T?O(n,i):t===R&&M(n,i))}var B=0
function q(e){e[F]=B++,e._state=void 0,e._result=void 0,e._subscribers=[]}var L=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(C),this.promise[F]||q(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&O(this.promise,this._result))):M(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===A){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===x&&e._state!==k)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(n===z){var s=new n(C)
i?M(s,o):N(s,e,a),this._willSettleAt(s,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===k&&(this._remaining--,e===R?M(r,n):this._result[t]=n),0===this._remaining&&O(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
P(e,void 0,function(e){return n._settledAt(T,t,e)},function(e){return n._settledAt(R,t,e)})},e}(),z=function(){function t(e){this[F]=B++,this._result=this._state=void 0,this._subscribers=[],C!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){_(e,t)},function(t){M(e,t)})}catch(t){M(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor
return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}()
return z.prototype.then=x,z.all=function(e){return new L(this,e).promise},z.race=function(e){var n=this
return t(e)?new n(function(t,r){for(var a=e.length,o=0;o<a;o++)n.resolve(e[o]).then(t,r)}):new n(function(e,t){return t(new TypeError("You must pass an array to race."))})},z.resolve=A,z.reject=function(e){var t=new this(C)
return M(t,e),t},z._setScheduler=function(e){u=e},z._setAsap=function(e){l=e},z._asap=l,z.polyfill=function(){var e=void 0
if(void 0!==r)e=r
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z},z.Promise=z,z},"object"===o(e)&&void 0!==t?t.exports=s():"function"==typeof define&&define.amd?define(s):i.ES6Promise=s()}),ge=de(function(e){var t,n,r=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return 0|e},ToUint32:function(e){return e>>>0}}),a=Math.LN2,i=Math.abs,s=Math.floor,u=Math.log,l=Math.min,c=Math.pow,d=Math.round
function p(e,t,n){return e<t?t:e>n?n:e}var f,h=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,n=[]
for(t in e)r.HasOwnProperty(e,t)&&n.push(t)
return n}
function m(e){if(h&&f){var t,n=h(e)
for(t=0;t<n.length;t+=1)f(e,n[t],{value:e[n[t]],writable:!1,enumerable:!1,configurable:!1})}}function g(e,t){var n=32-t
return e<<n>>n}function v(e,t){var n=32-t
return e<<n>>>n}function b(e){return[255&e]}function y(e){return g(e[0],8)}function w(e){return[255&e]}function D(e){return v(e[0],8)}function E(e){return[(e=d(Number(e)))<0?0:e>255?255:255&e]}function x(e){return[e>>8&255,255&e]}function A(e){return g(e[0]<<8|e[1],16)}function F(e){return[e>>8&255,255&e]}function C(e){return v(e[0]<<8|e[1],16)}function k(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function T(e){return g(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function N(e){return v(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function _(e,t,n){var r,o,d,p,f,h,m,g=(1<<t-1)-1
function v(e){var t=s(e),n=e-t
return n<.5?t:n>.5||t%2?t+1:t}for(e!=e?(o=(1<<t)-1,d=c(2,n-1),r=0):e===1/0||e===-1/0?(o=(1<<t)-1,d=0,r=e<0?1:0):0===e?(o=0,d=0,r=1/e==-1/0?1:0):(r=e<0,(e=i(e))>=c(2,1-g)?(o=l(s(u(e)/a),1023),(d=v(e/c(2,o)*c(2,n)))/c(2,n)>=2&&(o+=1,d=1),o>g?(o=(1<<t)-1,d=0):(o+=g,d-=c(2,n))):(o=0,d=v(e/c(2,1-g-n)))),f=[],p=n;p;p-=1)f.push(d%2?1:0),d=s(d/2)
for(p=t;p;p-=1)f.push(o%2?1:0),o=s(o/2)
for(f.push(r?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function S(e,t,n){var r,a,o,i,s,u,l,d,p=[]
for(r=e.length;r;r-=1)for(o=e[r-1],a=8;a;a-=1)p.push(o%2?1:0),o>>=1
return p.reverse(),i=p.join(""),s=(1<<t-1)-1,u=parseInt(i.substring(0,1),2)?-1:1,l=parseInt(i.substring(1,1+t),2),d=parseInt(i.substring(1+t),2),l===(1<<t)-1?0===d?u*(1/0):NaN:l>0?u*c(2,l-s)*(1+d/c(2,n)):0!==d?u*c(2,-(s-1))*(d/c(2,n)):u<0?-0:0}function O(e){return S(e,11,52)}function M(e){return _(e,11,52)}function P(e){return S(e,8,23)}function I(e){return _(e,8,23)}f=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,n){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
return r.HasProperty(n,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(e,t,n.get),r.HasProperty(n,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(e,t,n.set),r.HasProperty(n,"value")&&(e[t]=n.value),e},function(){function t(e){if((e=r.ToInt32(e))<0)throw new RangeError("ArrayBuffer size is not a small enough positive integer")
var t
for(this.byteLength=e,this._bytes=[],this._bytes.length=e,t=0;t<this.byteLength;t+=1)this._bytes[t]=0
m(this)}function n(){}function a(e,a,i){var s
return s=function(e,n,a){var i,u,l,c
if(arguments.length&&"number"!=typeof arguments[0])if("object"===o(arguments[0])&&arguments[0].constructor===s)for(i=arguments[0],this.length=i.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)this._setter(l,i._getter(l))
else if("object"!==o(arguments[0])||arguments[0]instanceof t||"ArrayBuffer"===r.Class(arguments[0])){if("object"!==o(arguments[0])||!(arguments[0]instanceof t||"ArrayBuffer"===r.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)")
if(this.buffer=e,this.byteOffset=r.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.")
if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size")
this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=r.ToUint32(a),this.byteLength=this.length*this.BYTES_PER_ELEMENT
if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(u=arguments[0],this.length=r.ToUint32(u.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)c=u[l],this._setter(l,Number(c))
else{if(this.length=r.ToInt32(arguments[0]),a<0)throw new RangeError("ArrayBufferView size is not a small enough positive integer")
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=s,m(this),function(e){if(f){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)n(t)}function n(t){f(e,t,{get:function(){return e._getter(t)},set:function(n){e._setter(t,n)},enumerable:!0,configurable:!1})}}(this)},s.prototype=new n,s.prototype.BYTES_PER_ELEMENT=e,s.prototype._pack=a,s.prototype._unpack=i,s.BYTES_PER_ELEMENT=e,s.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
if(!((e=r.ToUint32(e))>=this.length)){for(var t=[],n=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,a+=1)t.push(this.buffer._bytes[a])
return this._unpack(t)}},s.prototype.get=s.prototype._getter,s.prototype._setter=function(e,t){if(arguments.length<2)throw new SyntaxError("Not enough arguments")
if((e=r.ToUint32(e))<this.length){var n,a,o=this._pack(t)
for(n=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,a+=1)this.buffer._bytes[a]=o[n]}},s.prototype.set=function(e,t){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
var n,a,i,s,u,l,c,d,p,f
if("object"===o(arguments[0])&&arguments[0].constructor===this.constructor){if(n=arguments[0],(i=r.ToUint32(arguments[1]))+n.length>this.length)throw new RangeError("Offset plus length of array is out of range")
if(d=this.byteOffset+i*this.BYTES_PER_ELEMENT,p=n.length*this.BYTES_PER_ELEMENT,n.buffer===this.buffer){for(f=[],u=0,l=n.byteOffset;u<p;u+=1,l+=1)f[u]=n.buffer._bytes[l]
for(u=0,c=d;u<p;u+=1,c+=1)this.buffer._bytes[c]=f[u]}else for(u=0,l=n.byteOffset,c=d;u<p;u+=1,l+=1,c+=1)this.buffer._bytes[c]=n.buffer._bytes[l]}else{if("object"!==o(arguments[0])||void 0===arguments[0].length)throw new TypeError("Unexpected argument type(s)")
if(a=arguments[0],s=r.ToUint32(a.length),(i=r.ToUint32(arguments[1]))+s>this.length)throw new RangeError("Offset plus length of array is out of range")
for(u=0;u<s;u+=1)l=a[u],this._setter(i+u,Number(l))}},s.prototype.subarray=function(e,t){e=r.ToInt32(e),t=r.ToInt32(t),arguments.length<1&&(e=0),arguments.length<2&&(t=this.length),e<0&&(e=this.length+e),t<0&&(t=this.length+t),e=p(e,0,this.length)
var n=(t=p(t,0,this.length))-e
return n<0&&(n=0),new this.constructor(this.buffer,this.byteOffset+e*this.BYTES_PER_ELEMENT,n)},s}e.ArrayBuffer=e.ArrayBuffer||t
var i=a(1,b,y),s=a(1,w,D),u=a(1,E,D),l=a(2,x,A),c=a(2,F,C),d=a(4,k,T),h=a(4,R,N),g=a(4,I,P),v=a(8,M,O)
e.Int8Array=e.Int8Array||i,e.Uint8Array=e.Uint8Array||s,e.Uint8ClampedArray=e.Uint8ClampedArray||u,e.Int16Array=e.Int16Array||l,e.Uint16Array=e.Uint16Array||c,e.Int32Array=e.Int32Array||d,e.Uint32Array=e.Uint32Array||h,e.Float32Array=e.Float32Array||g,e.Float64Array=e.Float64Array||v}(),function(){function t(e,t){return r.IsCallable(e.get)?e.get(t):e[t]}var n,a=(n=new e.Uint16Array([4660]),18===t(new e.Uint8Array(n.buffer),0))
function o(t,n,a){if(0===arguments.length)t=new e.ArrayBuffer(0)
else if(!(t instanceof e.ArrayBuffer||"ArrayBuffer"===r.Class(t)))throw new TypeError("TypeError")
if(this.buffer=t||new e.ArrayBuffer(0),this.byteOffset=r.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:r.ToUint32(a),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
m(this)}function i(n){return function(o,i){if((o=r.ToUint32(o))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
o+=this.byteOffset
var s,u=new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT),l=[]
for(s=0;s<n.BYTES_PER_ELEMENT;s+=1)l.push(t(u,s))
return Boolean(i)===Boolean(a)&&l.reverse(),t(new n(new e.Uint8Array(l).buffer),0)}}function s(n){return function(o,i,s){if((o=r.ToUint32(o))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
var u,l=new n([i]),c=new e.Uint8Array(l.buffer),d=[]
for(u=0;u<n.BYTES_PER_ELEMENT;u+=1)d.push(t(c,u))
Boolean(s)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=i(e.Uint8Array),o.prototype.getInt8=i(e.Int8Array),o.prototype.getUint16=i(e.Uint16Array),o.prototype.getInt16=i(e.Int16Array),o.prototype.getUint32=i(e.Uint32Array),o.prototype.getInt32=i(e.Int32Array),o.prototype.getFloat32=i(e.Float32Array),o.prototype.getFloat64=i(e.Float64Array),o.prototype.setUint8=s(e.Uint8Array),o.prototype.setInt8=s(e.Int8Array),o.prototype.setUint16=s(e.Uint16Array),o.prototype.setInt16=s(e.Int16Array),o.prototype.setUint32=s(e.Uint32Array),o.prototype.setInt32=s(e.Int32Array),o.prototype.setFloat32=s(e.Float32Array),o.prototype.setFloat64=s(e.Float64Array),e.DataView=e.DataView||o}()}),ve=de(function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(r(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!a(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+o(e))}function i(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",function(e){if(n(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))}),r(e.prototype,"get",function(e){if(n(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}}),r(e.prototype,"has",function(e){if(n(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)}),r(e.prototype,"set",function(e,t){if(n(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)}),r(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==n?n:void 0!==r?r:e)}),be=de(function(e,t){"use strict"
var a=function(e){return e&&e.Math===Math&&e}
t.exports=a("object"==("undefined"==typeof globalThis?"undefined":o(globalThis))&&globalThis)||a("object"==(void 0===n?"undefined":o(n))&&n)||a("object"==("undefined"==typeof self?"undefined":o(self))&&self)||a("object"==(void 0===r?"undefined":o(r))&&r)||a("object"==o(e)&&e)||function(){return this}()||Function("return this")()}),ye=de(function(e,t){"use strict"
t.exports=function(e){try{return!!e()}catch(e){return!0}}}),we=de(function(e,t){"use strict"
var n=ye()
t.exports=!n(function(){var e=function(){}.bind()
return"function"!=typeof e||e.hasOwnProperty("prototype")})}),De=de(function(e,t){"use strict"
var n=we(),r=Function.prototype,a=r.apply,i=r.call
t.exports="object"==("undefined"==typeof Reflect?"undefined":o(Reflect))&&Reflect.apply||(n?i.bind(a):function(){return i.apply(a,arguments)})}),Ee=de(function(e,t){"use strict"
var n=we(),r=Function.prototype,a=r.call,o=n&&r.bind.bind(a,a)
t.exports=n?o:function(e){return function(){return a.apply(e,arguments)}}}),xe=de(function(e,t){"use strict"
var n=Ee(),r=n({}.toString),a=n("".slice)
t.exports=function(e){return a(r(e),8,-1)}}),Ae=de(function(e,t){"use strict"
var n=xe(),r=Ee()
t.exports=function(e){if("Function"===n(e))return r(e)}}),Fe=de(function(e,t){"use strict"
var n="object"==(void 0===a?"undefined":o(a))&&a.all
t.exports=void 0===n&&void 0!==n?function(e){return"function"==typeof e||e===n}:function(e){return"function"==typeof e}}),Ce=de(function(e,t){"use strict"
var n=ye()
t.exports=!n(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})}),ke=de(function(e,t){"use strict"
var n=we(),r=Function.prototype.call
t.exports=n?r.bind(r):function(){return r.apply(r,arguments)}}),Te=de(function(e){"use strict"
var t={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!t.call({1:2},1)
e.f=r?function(e){var t=n(this,e)
return!!t&&t.enumerable}:t}),Re=de(function(e,t){"use strict"
t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}}),Ne=de(function(e,t){"use strict"
var n=Ee(),r=ye(),a=xe(),o=Object,i=n("".split)
t.exports=r(function(){return!o("z").propertyIsEnumerable(0)})?function(e){return"String"===a(e)?i(e,""):o(e)}:o}),_e=de(function(e,t){"use strict"
t.exports=function(e){return null==e}}),Se=de(function(e,t){"use strict"
var n=_e(),r=TypeError
t.exports=function(e){if(n(e))throw new r("Can't call method on "+e)
return e}}),Oe=de(function(e,t){"use strict"
var n=Ne(),r=Se()
t.exports=function(e){return n(r(e))}}),Me=de(function(e,t){"use strict"
var n=Fe()
t.exports=function(e){return"object"==o(e)?null!==e:n(e)}}),Pe=de(function(e,t){"use strict"
t.exports={}}),Ie=de(function(e,t){"use strict"
var n=Pe(),r=be(),a=Fe(),o=function(e){return a(e)?e:void 0}
t.exports=function(e,t){return arguments.length<2?o(n[e])||o(r[e]):n[e]&&n[e][t]||r[e]&&r[e][t]}}),je=de(function(e,t){"use strict"
var n=Ee()
t.exports=n({}.isPrototypeOf)}),Be=de(function(e,t){"use strict"
var n=be().navigator,r=n&&n.userAgent
t.exports=r?String(r):""}),qe=de(function(e,t){"use strict"
var n,r,a=be(),o=Be(),i=a.process,s=a.Deno,u=i&&i.versions||s&&s.version,l=u&&u.v8
l&&(r=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!r&&o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(r=+n[1]),t.exports=r}),Le=de(function(e,t){"use strict"
var n=qe(),r=ye(),a=be().String
t.exports=!!Object.getOwnPropertySymbols&&!r(function(){var e=Symbol("symbol detection")
return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41})}),ze=de(function(e,t){"use strict"
var n=Le()
t.exports=n&&!Symbol.sham&&"symbol"==o(Symbol.iterator)}),Ve=de(function(e,t){"use strict"
var n=Ie(),r=Fe(),a=je(),i=ze(),s=Object
t.exports=i?function(e){return"symbol"==o(e)}:function(e){var t=n("Symbol")
return r(t)&&a(t.prototype,s(e))}}),$e=de(function(e,t){"use strict"
var n=String
t.exports=function(e){try{return n(e)}catch(e){return"Object"}}}),Ue=de(function(e,t){"use strict"
var n=Fe(),r=$e(),a=TypeError
t.exports=function(e){if(n(e))return e
throw new a(r(e)+" is not a function")}}),He=de(function(e,t){"use strict"
var n=Ue(),r=_e()
t.exports=function(e,t){var a=e[t]
return r(a)?void 0:n(a)}}),Ge=de(function(e,t){"use strict"
var n=ke(),r=Fe(),a=Me(),o=TypeError
t.exports=function(e,t){var i,s
if("string"===t&&r(i=e.toString)&&!a(s=n(i,e)))return s
if(r(i=e.valueOf)&&!a(s=n(i,e)))return s
if("string"!==t&&r(i=e.toString)&&!a(s=n(i,e)))return s
throw new o("Can't convert object to primitive value")}}),We=de(function(e,t){"use strict"
t.exports=!0}),Ke=de(function(e,t){"use strict"
var n=be(),r=Object.defineProperty
t.exports=function(e,t){try{r(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}}),Qe=de(function(e,t){"use strict"
var n=We(),r=be(),a=Ke(),o="__core-js_shared__",i=t.exports=r[o]||a(o,{});(i.versions||(i.versions=[])).push({version:"3.49.0",mode:n?"pure":"global",copyright:"© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",license:"https://github.com/zloirock/core-js/blob/v3.49.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),Ye=de(function(e,t){"use strict"
var n=Qe()
t.exports=function(e,t){return n[e]||(n[e]=t||{})}}),Xe=de(function(e,t){"use strict"
var n=Se(),r=Object
t.exports=function(e){return r(n(e))}}),Ze=de(function(e,t){"use strict"
var n=Ee(),r=Xe(),a=n({}.hasOwnProperty)
t.exports=Object.hasOwn||function(e,t){return a(r(e),t)}}),Je=de(function(e,t){"use strict"
var n=Ee(),r=0,a=Math.random(),o=n(1.1.toString)
t.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+a,36)}}),et=de(function(e,t){"use strict"
var n=be(),r=Ye(),a=Ze(),o=Je(),i=Le(),s=ze(),u=n.Symbol,l=r("wks"),c=s?u.for||u:u&&u.withoutSetter||o
t.exports=function(e){return a(l,e)||(l[e]=i&&a(u,e)?u[e]:c("Symbol."+e)),l[e]}}),tt=de(function(e,t){"use strict"
var n=ke(),r=Me(),a=Ve(),o=He(),i=Ge(),s=et(),u=TypeError,l=s("toPrimitive")
t.exports=function(e,t){if(!r(e)||a(e))return e
var s,c=o(e,l)
if(c){if(void 0===t&&(t="default"),s=n(c,e,t),!r(s)||a(s))return s
throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}}),nt=de(function(e,t){"use strict"
var n=tt(),r=Ve()
t.exports=function(e){var t=n(e,"string")
return r(t)?t:t+""}}),rt=de(function(e,t){"use strict"
var n=be(),r=Me(),a=n.document,o=r(a)&&r(a.createElement)
t.exports=function(e){return o?a.createElement(e):{}}}),at=de(function(e,t){"use strict"
var n=Ce(),r=ye(),a=rt()
t.exports=!n&&!r(function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a})}),ot=de(function(e){"use strict"
var t=Ce(),n=ke(),r=Te(),a=Re(),o=Oe(),i=nt(),s=Ze(),u=at(),l=Object.getOwnPropertyDescriptor
e.f=t?l:function(e,t){if(e=o(e),t=i(t),u)try{return l(e,t)}catch(e){}if(s(e,t))return a(!n(r.f,e,t),e[t])}}),it=de(function(e,t){"use strict"
var n=ye(),r=Fe(),a=/#|\.prototype\./,o=function(e,t){var a=s[i(e)]
return a===l||a!==u&&(r(t)?n(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},s=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P"
t.exports=o}),st=de(function(e,t){"use strict"
var n=Ae(),r=Ue(),a=we(),o=n(n.bind)
t.exports=function(e,t){return r(e),void 0===t?e:a?o(e,t):function(){return e.apply(t,arguments)}}}),ut=de(function(e,t){"use strict"
var n=Ce(),r=ye()
t.exports=n&&r(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})}),lt=de(function(e,t){"use strict"
var n=Me(),r=String,a=TypeError
t.exports=function(e){if(n(e))return e
throw new a(r(e)+" is not an object")}}),ct=de(function(e){"use strict"
var t=Ce(),n=at(),r=ut(),a=lt(),o=nt(),i=TypeError,s=Object.defineProperty,u=Object.getOwnPropertyDescriptor,l="enumerable",c="configurable",d="writable"
e.f=t?r?function(e,t,n){if(a(e),t=o(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=u(e,t)
r&&r[d]&&(e[t]=n.value,n={configurable:c in n?n[c]:r[c],enumerable:l in n?n[l]:r[l],writable:!1})}return s(e,t,n)}:s:function(e,t,r){if(a(e),t=o(t),a(r),n)try{return s(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new i("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}}),dt=de(function(e,t){"use strict"
var n=Ce(),r=ct(),a=Re()
t.exports=n?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}}),pt=de(function(e,t){"use strict"
var n=be(),r=De(),a=Ae(),i=Fe(),s=ot().f,u=it(),l=Pe(),c=st(),d=dt(),p=Ze()
Qe()
var f=function(e){var t=function(n,a,o){if(this instanceof t){switch(arguments.length){case 0:return new e
case 1:return new e(n)
case 2:return new e(n,a)}return new e(n,a,o)}return r(e,this,arguments)}
return t.prototype=e.prototype,t}
t.exports=function(e,t){var r,h,m,g,v,b,y,w,D,E=e.target,x=e.global,A=e.stat,F=e.proto,C=x?n:A?n[E]:n[E]&&n[E].prototype,k=x?l:l[E]||d(l,E,{})[E],T=k.prototype
for(g in t)h=!(r=u(x?g:E+(A?".":"#")+g,e.forced))&&C&&p(C,g),b=k[g],h&&(y=e.dontCallGetSet?(D=s(C,g))&&D.value:C[g]),v=h&&y?y:t[g],(r||F||o(b)!=o(v))&&(w=e.bind&&h?c(v,n):e.wrap&&h?f(v):F&&i(v)?a(v):v,(e.sham||v&&v.sham||b&&b.sham)&&d(w,"sham",!0),d(k,g,w),F&&(p(l,m=E+"Prototype")||d(l,m,{}),d(l[m],g,v),e.real&&T&&(r||!T[g])&&d(T,g,v)))}}),ft=de(function(){"use strict"
pt()({target:"Object",stat:!0},{hasOwn:Ze()})}),ht=de(function(e,t){"use strict"
ft()
var n=Pe()
t.exports=n.Object.hasOwn}),mt=de(function(e,t){"use strict"
var n=ht()
t.exports=n}),gt=de(function(e,t){"use strict"
var n=mt()
t.exports=n}),vt=de(function(e,t){"use strict"
var n=Ye(),r=Je(),a=n("keys")
t.exports=function(e){return a[e]||(a[e]=r(e))}}),bt=de(function(e,t){"use strict"
var n=ye()
t.exports=!n(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})}),yt=de(function(e,t){"use strict"
var n=Ze(),r=Fe(),a=Xe(),o=vt(),i=bt(),s=o("IE_PROTO"),u=Object,l=u.prototype
t.exports=i?u.getPrototypeOf:function(e){var t=a(e)
if(n(t,s))return t[s]
var o=t.constructor
return r(o)&&t instanceof o?o.prototype:t instanceof u?l:null}}),wt=de(function(e,t){"use strict"
var n=Math.ceil,r=Math.floor
t.exports=Math.trunc||function(e){var t=+e
return(t>0?r:n)(t)}}),Dt=de(function(e,t){"use strict"
var n=wt()
t.exports=function(e){var t=+e
return t!=t||0===t?0:n(t)}}),Et=de(function(e,t){"use strict"
var n=Dt(),r=Math.max,a=Math.min
t.exports=function(e,t){var o=n(e)
return o<0?r(o+t,0):a(o,t)}}),xt=de(function(e,t){"use strict"
var n=Dt(),r=Math.min
t.exports=function(e){var t=n(e)
return t>0?r(t,9007199254740991):0}}),At=de(function(e,t){"use strict"
var n=xt()
t.exports=function(e){return n(e.length)}}),Ft=de(function(e,t){"use strict"
var n=Oe(),r=Et(),a=At(),o=function(e){return function(t,o,i){var s=n(t),u=a(s)
if(0===u)return!e&&-1
var l,c=r(i,u)
if(e&&o!=o){for(;u>c;)if((l=s[c++])!=l)return!0}else for(;u>c;c++)if((e||c in s)&&s[c]===o)return e||c||0
return!e&&-1}}
t.exports={includes:o(!0),indexOf:o(!1)}}),Ct=de(function(e,t){"use strict"
t.exports={}}),kt=de(function(e,t){"use strict"
var n=Ee(),r=Ze(),a=Oe(),o=Ft().indexOf,i=Ct(),s=n([].push)
t.exports=function(e,t){var n,u=a(e),l=0,c=[]
for(n in u)!r(i,n)&&r(u,n)&&s(c,n)
for(;t.length>l;)r(u,n=t[l++])&&(~o(c,n)||s(c,n))
return c}}),Tt=de(function(e,t){"use strict"
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]}),Rt=de(function(e,t){"use strict"
var n=kt(),r=Tt()
t.exports=Object.keys||function(e){return n(e,r)}}),Nt=de(function(e,t){"use strict"
var n=Ce(),r=ye(),a=Ee(),o=yt(),i=Rt(),s=Oe(),u=a(Te().f),l=a([].push),c=n&&r(function(){var e=Object.create(null)
return e[2]=2,!u(e,2)}),d=function(e){return function(t){for(var r,a=s(t),d=i(a),p=c&&null===o(a),f=d.length,h=0,m=[];f>h;)r=d[h++],n&&!(p?r in a:u(a,r))||l(m,e?[r,a[r]]:a[r])
return m}}
t.exports={entries:d(!0),values:d(!1)}}),_t=de(function(){"use strict"
var e=pt(),t=Nt().values
e({target:"Object",stat:!0},{values:function(e){return t(e)}})}),St=de(function(e,t){"use strict"
_t()
var n=Pe()
t.exports=n.Object.values}),Ot=de(function(e,t){"use strict"
var n=St()
t.exports=n}),Mt=de(function(e,t){"use strict"
var n=Ot()
t.exports=n}),Pt=de(function(e,t){"use strict"
var n={}
n[et()("toStringTag")]="z",t.exports="[object z]"===String(n)}),It=de(function(e,t){"use strict"
var n=Pt(),r=Fe(),a=xe(),o=et()("toStringTag"),i=Object,s="Arguments"===a(function(){return arguments}())
t.exports=n?a:function(e){var t,n,u
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=i(e),o))?n:s?a(t):"Object"===(u=a(t))&&r(t.callee)?"Arguments":u}}),jt=de(function(e,t){"use strict"
var n=It(),r=String
t.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string")
return r(e)}}),Bt=de(function(e,t){"use strict"
var n=Ee(),r=Dt(),a=jt(),o=Se(),i=n("".charAt),s=n("".charCodeAt),u=n("".slice),l=function(e){return function(t,n){var l,c,d=a(o(t)),p=r(n),f=d.length
return p<0||p>=f?e?"":void 0:(l=s(d,p))<55296||l>56319||p+1===f||(c=s(d,p+1))<56320||c>57343?e?i(d,p):l:e?u(d,p,p+2):c-56320+(l-55296<<10)+65536}}
t.exports={codeAt:l(!1),charAt:l(!0)}}),qt=de(function(e,t){"use strict"
var n=be(),r=Fe(),a=n.WeakMap
t.exports=r(a)&&/native code/.test(String(a))}),Lt=de(function(e,t){"use strict"
var n,r,a,o,i,s=qt(),u=be(),l=Me(),c=dt(),d=Ze(),p=Qe(),f=vt(),h=Ct(),m="Object already initialized",g=u.TypeError,v=u.WeakMap
s||p.state?((o=p.state||(p.state=new v)).get=o.get,o.has=o.has,o.set=o.set,n=function(e,t){if(o.has(e))throw new g(m)
return t.facade=e,o.set(e,t),t},r=function(e){return o.get(e)||{}},a=function(e){return o.has(e)}):(h[i=f("state")]=!0,n=function(e,t){if(d(e,i))throw new g(m)
return t.facade=e,c(e,i,t),t},r=function(e){return d(e,i)?e[i]:{}},a=function(e){return d(e,i)}),t.exports={set:n,get:r,has:a,enforce:function(e){return a(e)?r(e):n(e,{})},getterFor:function(e){return function(t){var n
if(!l(t)||(n=r(t)).type!==e)throw new g("Incompatible receiver, "+e+" required")
return n}}}}),zt=de(function(e,t){"use strict"
var n=Ce(),r=Ze(),a=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,i=r(a,"name"),s=i&&"something"===function(){}.name,u=i&&(!n||n&&o(a,"name").configurable)
t.exports={EXISTS:i,PROPER:s,CONFIGURABLE:u}}),Vt=de(function(e){"use strict"
var t=Ce(),n=ut(),r=ct(),a=lt(),o=Oe(),i=Rt()
e.f=t&&!n?Object.defineProperties:function(e,t){a(e)
for(var n,s=o(t),u=i(t),l=u.length,c=0;l>c;)r.f(e,n=u[c++],s[n])
return e}}),$t=de(function(e,t){"use strict"
var n=Ie()
t.exports=n("document","documentElement")}),Ut=de(function(e,t){"use strict"
var n,r=lt(),o=Vt(),i=Tt(),s=Ct(),u=$t(),l=rt(),c=vt(),d="prototype",p="script",f=c("IE_PROTO"),h=function(){},m=function(e){return"<"+p+">"+e+"</"+p+">"},g=function(e){e.write(m("")),e.close()
var t=e.parentWindow.Object
return e=null,t},v=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}var e,t,r
v=void 0!==a?a.domain&&n?g(n):(t=l("iframe"),r="java"+p+":",t.style.display="none",u.appendChild(t),t.src=String(r),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F):g(n)
for(var o=i.length;o--;)delete v[d][i[o]]
return v()}
s[f]=!0,t.exports=Object.create||function(e,t){var n
return null!==e?(h[d]=r(e),n=new h,h[d]=null,n[f]=e):n=v(),void 0===t?n:o.f(n,t)}}),Ht=de(function(e,t){"use strict"
var n=dt()
t.exports=function(e,t,r,a){return a&&a.enumerable?e[t]=r:n(e,t,r),e}}),Gt=de(function(e,t){"use strict"
var n,r,a,o=ye(),i=Fe(),s=Me(),u=Ut(),l=yt(),c=Ht(),d=et(),p=We(),f=d("iterator"),h=!1;[].keys&&("next"in(a=[].keys())?(r=l(l(a)))!==Object.prototype&&(n=r):h=!0),!s(n)||o(function(){var e={}
return n[f].call(e)!==e})?n={}:p&&(n=u(n)),i(n[f])||c(n,f,function(){return this}),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:h}}),Wt=de(function(e,t){"use strict"
var n=Pt(),r=It()
t.exports=n?{}.toString:function(){return"[object "+r(this)+"]"}}),Kt=de(function(e,t){"use strict"
var n=Pt(),r=ct().f,a=dt(),o=Ze(),i=Wt(),s=et()("toStringTag")
t.exports=function(e,t,u,l){var c=u?e:e&&e.prototype
c&&(o(c,s)||r(c,s,{configurable:!0,value:t}),l&&!n&&a(c,"toString",i))}}),Qt=de(function(e,t){"use strict"
t.exports={}}),Yt=de(function(e,t){"use strict"
var n=Gt().IteratorPrototype,r=Ut(),a=Re(),o=Kt(),i=Qt(),s=function(){return this}
t.exports=function(e,t,u,l){var c=t+" Iterator"
return e.prototype=r(n,{next:a(+!l,u)}),o(e,c,!1,!0),i[c]=s,e}}),Xt=de(function(e,t){"use strict"
var n=Ee(),r=Ue()
t.exports=function(e,t,a){try{return n(r(Object.getOwnPropertyDescriptor(e,t)[a]))}catch(e){}}}),Zt=de(function(e,t){"use strict"
var n=Me()
t.exports=function(e){return n(e)||null===e}}),Jt=de(function(e,t){"use strict"
var n=Zt(),r=String,a=TypeError
t.exports=function(e){if(n(e))return e
throw new a("Can't set "+r(e)+" as a prototype")}}),en=de(function(e,t){"use strict"
var n=Xt(),r=Me(),a=Se(),o=Jt()
t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,i={}
try{(e=n(Object.prototype,"__proto__","set"))(i,[]),t=i instanceof Array}catch(e){}return function(n,i){return a(n),o(i),r(n)?(t?e(n,i):n.__proto__=i,n):n}}():void 0)}),tn=de(function(e,t){"use strict"
var n=pt(),r=ke(),a=We(),o=zt(),i=Fe(),s=Yt(),u=yt(),l=en(),c=Kt(),d=dt(),p=Ht(),f=et(),h=Qt(),m=Gt(),g=o.PROPER,v=o.CONFIGURABLE,b=m.IteratorPrototype,y=m.BUGGY_SAFARI_ITERATORS,w=f("iterator"),D="keys",E="values",x="entries",A=function(){return this}
t.exports=function(e,t,o,f,m,F,C){s(o,t,f)
var k,T,R,N=function(e){if(e===m&&P)return P
if(!y&&e&&e in O)return O[e]
switch(e){case D:case E:case x:return function(){return new o(this,e)}}return function(){return new o(this)}},_=t+" Iterator",S=!1,O=e.prototype,M=O[w]||O["@@iterator"]||m&&O[m],P=!y&&M||N(m),I="Array"===t&&O.entries||M
if(I&&(k=u(I.call(new e)))!==Object.prototype&&k.next&&(a||u(k)===b||(l?l(k,b):i(k[w])||p(k,w,A)),c(k,_,!0,!0),a&&(h[_]=A)),g&&m===E&&M&&M.name!==E&&(!a&&v?d(O,"name",E):(S=!0,P=function(){return r(M,this)})),m)if(T={values:N(E),keys:F?P:N(D),entries:N(x)},C)for(R in T)(y||S||!(R in O))&&p(O,R,T[R])
else n({target:t,proto:!0,forced:y||S},T)
return a&&!C||O[w]===P||p(O,w,P,{name:m}),h[t]=P,T}}),nn=de(function(e,t){"use strict"
t.exports=function(e,t){return{value:e,done:t}}}),rn=de(function(){"use strict"
var e=Bt().charAt,t=jt(),n=Lt(),r=tn(),a=nn(),o="String Iterator",i=n.set,s=n.getterFor(o)
r(String,"String",function(e){i(this,{type:o,string:t(e),index:0})},function(){var t,n=s(this),r=n.string,o=n.index
return o>=r.length?a(void 0,!0):(t=e(r,o),n.index+=t.length,a(t,!1))})}),an=de(function(e,t){"use strict"
var n=ke(),r=lt(),a=He()
t.exports=function(e,t,o){var i,s
r(e)
try{if(!(i=a(e,"return"))){if("throw"===t)throw o
return o}i=n(i,e)}catch(e){s=!0,i=e}if("throw"===t)throw o
if(s)throw i
return r(i),o}}),on=de(function(e,t){"use strict"
var n=lt(),r=an()
t.exports=function(e,t,a,o){try{return o?t(n(a)[0],a[1]):t(a)}catch(t){r(e,"throw",t)}}}),sn=de(function(e,t){"use strict"
var n=et(),r=Qt(),a=n("iterator"),o=Array.prototype
t.exports=function(e){return void 0!==e&&(r.Array===e||o[a]===e)}}),un=de(function(e,t){"use strict"
var n=Ee(),r=Fe(),a=Qe(),o=n(Function.toString)
r(a.inspectSource)||(a.inspectSource=function(e){return o(e)}),t.exports=a.inspectSource}),ln=de(function(e,t){"use strict"
var n=Ee(),r=ye(),a=Fe(),o=It(),i=Ie(),s=un(),u=function(){},l=i("Reflect","construct"),c=/^\s*(?:class|function)\b/,d=n(c.exec),p=!c.test(u),f=function(e){if(!a(e))return!1
try{return l(u,[],e),!0}catch(e){return!1}},h=function(e){if(!a(e))return!1
switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!d(c,s(e))}catch(e){return!0}}
h.sham=!0,t.exports=!l||r(function(){var e
return f(f.call)||!f(Object)||!f(function(){e=!0})||e})?h:f}),cn=de(function(e,t){"use strict"
var n=Ce(),r=ct(),a=Re()
t.exports=function(e,t,o){n?r.f(e,t,a(0,o)):e[t]=o}}),dn=de(function(e,t){"use strict"
var n=xe()
t.exports=Array.isArray||function(e){return"Array"===n(e)}}),pn=de(function(e,t){"use strict"
var n=Ce(),r=dn(),a=TypeError,o=Object.getOwnPropertyDescriptor,i=n&&!function(){if(void 0!==this)return!0
try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}()
t.exports=i?function(e,t){if(r(e)&&!o(e,"length").writable)throw new a("Cannot set read only .length")
return e.length=t}:function(e,t){return e.length=t}}),fn=de(function(e,t){"use strict"
var n=It(),r=He(),a=_e(),o=Qt(),i=et()("iterator")
t.exports=function(e){if(!a(e))return r(e,i)||r(e,"@@iterator")||o[n(e)]}}),hn=de(function(e,t){"use strict"
var n=ke(),r=Ue(),a=lt(),o=$e(),i=fn(),s=TypeError
t.exports=function(e,t){var u=arguments.length<2?i(e):t
if(r(u))return a(n(u,e))
throw new s(o(e)+" is not iterable")}}),mn=de(function(e,t){"use strict"
var n=st(),r=ke(),a=Xe(),o=on(),i=sn(),s=ln(),u=At(),l=cn(),c=pn(),d=hn(),p=fn(),f=an(),h=Array
t.exports=function(e){var t=s(this),m=arguments.length,g=m>1?arguments[1]:void 0,v=void 0!==g
v&&(g=n(g,m>2?arguments[2]:void 0))
var b,y,w,D,E,x,A=a(e),F=p(A),C=0
if(!F||this===h&&i(F))for(b=u(A),y=t?new this(b):h(b);b>C;C++)x=v?g(A[C],C):A[C],l(y,C,x)
else for(y=t?new this:[],E=(D=d(A,F)).next;!(w=r(E,D)).done;C++){x=v?o(D,g,[w.value,C],!0):w.value
try{l(y,C,x)}catch(e){f(D,"throw",e)}}return c(y,C),y}}),gn=de(function(e,t){"use strict"
var n,r,a=et()("iterator"),o=!1
try{n=0,(r={next:function(){return{done:!!n++}},return:function(){o=!0}})[a]=function(){return this},Array.from(r,function(){throw 2})}catch(e){}t.exports=function(e,t){try{if(!t&&!o)return!1}catch(e){return!1}var n=!1
try{var r={}
r[a]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}}),vn=de(function(){"use strict"
var e=pt(),t=mn()
e({target:"Array",stat:!0,forced:!gn()(function(e){Array.from(e)})},{from:t})}),bn=de(function(e,t){"use strict"
rn(),vn()
var n=Pe()
t.exports=n.Array.from}),yn=de(function(e,t){"use strict"
var n=bn()
t.exports=n}),wn=de(function(e,t){"use strict"
var n=yn()
t.exports=n}),Dn=de(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var n=t.length,r="",a=0;a<n;){var o=t.charAt(a)
if(e.identSpecialChars[o])r+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")r+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var s=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&s))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&s)+65536}r+="\\"+i.toString(16)+" "}a++}return r},e.escapeStr=function(t){for(var n,r=t.length,a="",o=0;o<r;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(n=e.strReplacementsRev[i])&&(i=n),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}}),En=de(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Dn()
e.parseCssSelector=function(e,n,r,a,o,i){var s=e.length,u=""
function l(r,a){var o=""
for(n++,u=e.charAt(n);n<s;){if(u===r)return n++,o
if("\\"===u){n++
var i=void 0
if((u=e.charAt(n))===r)o+=r
else if(void 0!==(i=a[u]))o+=i
else{if(t.isHex(u)){var l=u
for(n++,u=e.charAt(n);t.isHex(u);)l+=u,n++,u=e.charAt(n)
" "===u&&(n++,u=e.charAt(n)),o+=String.fromCharCode(parseInt(l,16))
continue}o+=u}}else o+=u
n++,u=e.charAt(n)}return o}function c(){var r=""
for(u=e.charAt(n);n<s;){if(t.isIdent(u))r+=u
else{if("\\"!==u)return r
if(++n>=s)throw Error("Expected symbol but end of file reached.")
if(u=e.charAt(n),t.identSpecialChars[u])r+=u
else{if(t.isHex(u)){var a=u
for(n++,u=e.charAt(n);t.isHex(u);)a+=u,n++,u=e.charAt(n)
" "===u&&(n++,u=e.charAt(n)),r+=String.fromCharCode(parseInt(a,16))
continue}r+=u}}n++,u=e.charAt(n)}return r}function d(){u=e.charAt(n)
for(var t=!1;" "===u||"\t"===u||"\n"===u||"\r"===u||"\f"===u;)t=!0,n++,u=e.charAt(n)
return t}function p(){var t=f()
if(!t)return null
var r=t
for(u=e.charAt(n);","===u;){if(n++,d(),"selectors"!==r.type&&(r={type:"selectors",selectors:[t]}),!(t=f()))throw Error('Rule expected after ",".')
r.selectors.push(t)}return r}function f(){d()
var t={type:"ruleSet"},r=h()
if(!r)return null
for(var a=t;r&&(r.type="rule",a.rule=r,a=r,d(),u=e.charAt(n),!(n>=s||","===u||")"===u));)if(o[u]){var i=u
if(n++,d(),!(r=h()))throw Error('Rule expected after "'+i+'".')
r.nestingOperator=i}else(r=h())&&(r.nestingOperator=null)
return t}function h(){for(var o=null;n<s;)if("*"===(u=e.charAt(n)))n++,(o=o||{}).tagName="*"
else if(t.isIdentStart(u)||"\\"===u)(o=o||{}).tagName=c()
else if("."===u)n++,((o=o||{}).classNames=o.classNames||[]).push(c())
else if("#"===u)n++,(o=o||{}).id=c()
else if("["===u){n++,d()
var f={name:c()}
if(d(),"]"===u)n++
else{var h=""
if(a[u]&&(h=u,n++,u=e.charAt(n)),n>=s)throw Error('Expected "=" but end of file reached.')
if("="!==u)throw Error('Expected "=" but "'+u+'" found.')
f.operator=h+"=",n++,d()
var m=""
if(f.valueType="string",'"'===u)m=l('"',t.doubleQuotesEscapeChars)
else if("'"===u)m=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===u)n++,m=c(),f.valueType="substitute"
else{for(;n<s&&"]"!==u;)m+=u,n++,u=e.charAt(n)
m=m.trim()}if(d(),n>=s)throw Error('Expected "]" but end of file reached.')
if("]"!==u)throw Error('Expected "]" but "'+u+'" found.')
n++,f.value=m}((o=o||{}).attrs=o.attrs||[]).push(f)}else{if(":"!==u)break
n++
var g=c(),v={name:g}
if("("===u){n++
var b=""
if(d(),"selector"===r[g])v.valueType="selector",b=p()
else{if(v.valueType=r[g]||"string",'"'===u)b=l('"',t.doubleQuotesEscapeChars)
else if("'"===u)b=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===u)n++,b=c(),v.valueType="substitute"
else{for(;n<s&&")"!==u;)b+=u,n++,u=e.charAt(n)
b=b.trim()}d()}if(n>=s)throw Error('Expected ")" but end of file reached.')
if(")"!==u)throw Error('Expected ")" but "'+u+'" found.')
n++,v.value=b}((o=o||{}).pseudos=o.pseudos||[]).push(v)}return o}return function(){var t=p()
if(n<s)throw Error('Rule expected but "'+e.charAt(n)+'" found.')
return t}()}}),xn=de(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Dn()
e.renderEntity=function e(n){var r=""
switch(n.type){case"ruleSet":for(var a=n.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
r=o.join(" ")
break
case"selectors":r=n.selectors.map(e).join(", ")
break
case"rule":n.tagName&&(r="*"===n.tagName?"*":t.escapeIdentifier(n.tagName)),n.id&&(r+="#"+t.escapeIdentifier(n.id)),n.classNames&&(r+=n.classNames.map(function(e){return"."+t.escapeIdentifier(e)}).join("")),n.attrs&&(r+=n.attrs.map(function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"}).join("")),n.pseudos&&(r+=n.pseudos.map(function(n){return n.valueType?"selector"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+e(n.value)+")":"substitute"===n.valueType?":"+t.escapeIdentifier(n.name)+"($"+n.value+")":"numeric"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+n.value+")":":"+t.escapeIdentifier(n.name)+"("+t.escapeIdentifier(n.value)+")":":"+t.escapeIdentifier(n.name)}).join(""))
break
default:throw Error('Unknown entity type: "'+n.type+'".')}return r}}),An=de(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=En(),n=xn(),r=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var n=0,r=e;n<r.length;n++){var a=r[n]
delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(e){return t.parseCssSelector(e,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(e){return n.renderEntity(e).trim()},e}()
e.CssSelectorParser=r}),Fn=de(function(e,t){!function(){"use strict"
var e={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":o(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){n.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==n)return n
if(void 0!==r)return r
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),e.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(n,function(e){return t[e]||e}):""}},void 0!==t&&t.exports?t.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):globalThis.doT=e
var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},i=/$^/
function s(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||i,function(t,r,a,o){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===a?(e.defineParams&&o.replace(e.defineParams,function(e,t,a){n[r]={arg:t,text:a}}),r in n||(n[r]=o)):new Function("def","def['"+r+"']="+o)(n)),""}).replace(e.use||i,function(t,r){e.useParams&&(r=r.replace(e.useParams,function(e,t,r,a){if(n[r]&&n[r].arg&&a){var o=(r+":"+a).replace(/'|\\/g,"_")
return n.__exp=n.__exp||{},n.__exp[o]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}}))
var a=new Function("def","return "+r)(n)
return a?s(e,a,n):a})}function u(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}e.template=function(t,n,r){var o,l,c=(n=n||e.templateSettings).append?a.append:a.split,d=0,p=n.use||n.define?s(n,t,r||{}):t
p=("var out='"+(n.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(n.interpolate||i,function(e,t){return c.start+u(t)+c.end}).replace(n.encode||i,function(e,t){return o=!0,c.startencode+u(t)+c.end}).replace(n.conditional||i,function(e,t,n){return t?n?"';}else if("+u(n)+"){out+='":"';}else{out+='":n?"';if("+u(n)+"){out+='":"';}out+='"}).replace(n.iterate||i,function(e,t,n,r){return t?(d+=1,l=r||"i"+d,t=u(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+n+","+l+"=-1,l"+d+"=arr"+d+".length-1;while("+l+"<l"+d+"){"+n+"=arr"+d+"["+l+"+=1];out+='"):"';} } out+='"}).replace(n.evaluate||i,function(e,t){return"';"+u(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),o&&(n.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=e.encodeHTMLSource(n.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+e.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+p)
try{return new Function(n.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,n){return e.template(t,null,n)}}()}),Cn=de(function(e,t){"use strict"
t.exports=function(){}}),kn=de(function(e,t){"use strict"
var n=Cn()()
t.exports=function(e){return e!==n&&null!==e}}),Tn=de(function(e,t){"use strict"
var n=kn(),r=Array.prototype.forEach,a=Object.create
t.exports=function(e){var t=a(null)
return r.call(arguments,function(e){n(e)&&function(e,t){var n
for(n in e)t[n]=e[n]}(Object(e),t)}),t}}),Rn=de(function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}}),Nn=de(function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}}),_n=de(function(e,t){"use strict"
t.exports=Rn()()?Math.sign:Nn()}),Sn=de(function(e,t){"use strict"
var n=_n(),r=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?n(e)*a(r(e)):e}}),On=de(function(e,t){"use strict"
var n=Sn(),r=Math.max
t.exports=function(e){return r(0,n(e))}}),Mn=de(function(e,t){"use strict"
var n=On()
t.exports=function(e,t,r){var a
return isNaN(e)?(a=t)>=0?r&&a?a-1:a:1:!1!==e&&n(e)}}),Pn=de(function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}}),In=de(function(e,t){"use strict"
var n=kn()
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}}),jn=de(function(e,t){"use strict"
var n=Pn(),r=In(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,s=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(u,l){var c,d=arguments[2],p=arguments[3]
return u=Object(r(u)),n(l),c=i(u),p&&c.sort("function"==typeof p?a.call(p,u):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,function(e,n){return s.call(u,e)?o.call(l,d,u[e],e,u,n):t})}}}),Bn=de(function(e,t){"use strict"
t.exports=jn()("forEach")}),qn=de(function(){}),Ln=de(function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}}),zn=de(function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}}),Vn=de(function(e,t){"use strict"
var n=kn(),r=Object.keys
t.exports=function(e){return r(n(e)?Object(e):e)}}),$n=de(function(e,t){"use strict"
t.exports=zn()()?Object.keys:Vn()}),Un=de(function(e,t){"use strict"
var n=$n(),r=In(),a=Math.max
t.exports=function(e,t){var o,i,s,u=a(arguments.length,2)
for(e=Object(r(e)),s=function(n){try{e[n]=t[n]}catch(e){o||(o=e)}},i=1;i<u;++i)n(t=arguments[i]).forEach(s)
if(void 0!==o)throw o
return e}}),Hn=de(function(e,t){"use strict"
t.exports=Ln()()?Object.assign:Un()}),Gn=de(function(e,t){"use strict"
var n=kn(),r={function:!0,object:!0}
t.exports=function(e){return n(e)&&r[o(e)]||!1}}),Wn=de(function(e,t){"use strict"
var n=Hn(),r=Gn(),a=kn(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),s=arguments[1],u=arguments[2]
return a(u)||r(s)&&(u=s,s=null),a(u)&&n(i,u),a(s)&&(i.code=s),o&&o(i,t.exports),i}}),Kn=de(function(e,t){"use strict"
var n=In(),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var s,u=Object(n(t))
if(e=Object(n(e)),o(u).forEach(function(n){try{r(e,n,a(t,n))}catch(e){s=e}}),"function"==typeof i&&i(u).forEach(function(n){try{r(e,n,a(t,n))}catch(e){s=e}}),void 0!==s)throw s
return e}}),Qn=de(function(e,t){"use strict"
var n,r,a,o,i,s=On(),u=function(e,t){return t}
try{Object.defineProperty(u,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===u.length?(n={configurable:!0,writable:!1,enumerable:!1},r=Object.defineProperty,t.exports=function(e,t){return t=s(t),e.length===t?e:(n.value=t,r(e,"length",n))}):(o=Kn(),i=[],a=function(e){var t,n=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++n).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var n
if(t=s(t),e.length===t)return e
n=a(t)(e)
try{o(n,e)}catch(e){}return n})}),Yn=de(function(e,t){"use strict"
t.exports=function(e){return null!=e}}),Xn=de(function(e,t){"use strict"
var n=Yn(),r={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!n(e)&&hasOwnProperty.call(r,o(e))}}),Zn=de(function(e,t){"use strict"
var n=Xn()
t.exports=function(e){if(!n(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}}),Jn=de(function(e,t){"use strict"
var n=Zn()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}}),er=de(function(e,t){"use strict"
var n=Jn(),r=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!n(e)&&!r.test(a.call(e))}}),tr=de(function(e,t){"use strict"
var n="razdwatrzy"
t.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}}),nr=de(function(e,t){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}}),rr=de(function(e,t){"use strict"
t.exports=tr()()?String.prototype.contains:nr()}),ar=de(function(e,t){"use strict"
var n=Yn(),r=er(),a=Hn(),o=Tn(),i=rr(),s=t.exports=function(e,t){var r,s,u,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],n(e)?(r=i.call(e,"c"),s=i.call(e,"e"),u=i.call(e,"w")):(r=u=!0,s=!1),c={value:t,configurable:r,enumerable:s,writable:u},l?a(o(l),c):c}
s.gs=function(e,t,s){var u,l,c,d
return"string"!=typeof e?(c=s,s=t,t=e,e=null):c=arguments[3],n(t)?r(t)?n(s)?r(s)||(c=s,s=void 0):s=void 0:(c=t,t=s=void 0):t=void 0,n(e)?(u=i.call(e,"c"),l=i.call(e,"e")):(u=!0,l=!1),d={get:t,set:s,configurable:u,enumerable:l},c?a(o(c),d):d}}),or=de(function(e,t){"use strict"
var n,r,a,i,s,u,l,c=ar(),d=Pn(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,g=Object.defineProperties,v=Object.prototype.hasOwnProperty,b={configurable:!0,enumerable:!1,writable:!0}
r=function(e,t){var r,o
return d(t),o=this,n.call(this,e,r=function(){a.call(o,e,r),p.call(t,this,arguments)}),r.__eeOnceListener__=t,this},a=function(e,t){var n,r,a,i
if(d(t),!v.call(this,"__ee__"))return this
if(!(n=this.__ee__)[e])return this
if(r=n[e],"object"===o(r))for(i=0;a=r[i];++i)a!==t&&a.__eeOnceListener__!==t||(2===r.length?n[e]=r[i?0:1]:r.splice(i,1))
else r!==t&&r.__eeOnceListener__!==t||delete n[e]
return this},i=function(e){var t,n,r,a,i
if(v.call(this,"__ee__")&&(a=this.__ee__[e]))if("object"===o(a)){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
for(a=a.slice(),t=0;r=a[t];++t)p.call(r,this,i)}else switch(arguments.length){case 1:f.call(a,this)
break
case 2:f.call(a,this,arguments[1])
break
case 3:f.call(a,this,arguments[1],arguments[2])
break
default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
p.call(a,this,i)}},s={on:n=function(e,t){var n
return d(t),v.call(this,"__ee__")?n=this.__ee__:(n=b.value=h(null),m(this,"__ee__",b),b.value=null),n[e]?"object"===o(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:a,emit:i},u={on:c(n),once:c(r),off:c(a),emit:c(i)},l=g({},u),t.exports=e=function(e){return null==e?h(l):g(Object(e),u)},e.methods=s}),ir=de(function(e,t){"use strict"
t.exports=function(){var e,t,n=Array.from
return"function"==typeof n&&(t=n(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}}),sr=de(function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}}),ur=de(function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===n?"undefined":o(n))&&n)return n
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()}),lr=de(function(e,t){"use strict"
t.exports=sr()()?globalThis:ur()}),cr=de(function(e,t){"use strict"
var n=lr(),r={object:!0,symbol:!0}
t.exports=function(){var e,t=n.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!r[o(t.iterator)]&&!!r[o(t.toPrimitive)]&&!!r[o(t.toStringTag)]}}),dr=de(function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}}),pr=de(function(e,t){"use strict"
var n=dr()
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}}),fr=de(function(e,t){"use strict"
var n=ar(),r=Object.create,a=Object.defineProperty,o=Object.prototype,i=r(null)
t.exports=function(e){for(var t,r,s=0;i[e+(s||"")];)++s
return i[e+=s||""]=!0,a(o,t="@@"+e,n.gs(null,function(e){r||(r=!0,a(this,t,n(e)),r=!1)})),t}}),hr=de(function(e,t){"use strict"
var n=ar(),r=lr().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:n("",r&&r.hasInstance||e("hasInstance")),isConcatSpreadable:n("",r&&r.isConcatSpreadable||e("isConcatSpreadable")),iterator:n("",r&&r.iterator||e("iterator")),match:n("",r&&r.match||e("match")),replace:n("",r&&r.replace||e("replace")),search:n("",r&&r.search||e("search")),species:n("",r&&r.species||e("species")),split:n("",r&&r.split||e("split")),toPrimitive:n("",r&&r.toPrimitive||e("toPrimitive")),toStringTag:n("",r&&r.toStringTag||e("toStringTag")),unscopables:n("",r&&r.unscopables||e("unscopables"))})}}),mr=de(function(e,t){"use strict"
var n=ar(),r=pr(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:n(function(t){return a[t]?a[t]:a[t]=e(String(t))}),keyFor:n(function(e){var t
for(t in r(e),a)if(a[t]===e)return t})})}}),gr=de(function(e,t){"use strict"
var n,r,a,i=ar(),s=pr(),u=lr().Symbol,l=fr(),c=hr(),d=mr(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof u)try{String(u()),a=!0}catch(e){}else u=null
r=function(e){if(this instanceof r)throw new TypeError("Symbol is not a constructor")
return n(e)},t.exports=n=function e(t){var n
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?u(t):(n=p(r.prototype),t=void 0===t?"":String(t),f(n,{__description__:i("",t),__name__:i("",l(t))}))},c(n),d(n),f(r.prototype,{constructor:i(n),toString:i("",function(){return this.__name__})}),f(n.prototype,{toString:i(function(){return"Symbol ("+s(this).__description__+")"}),valueOf:i(function(){return s(this)})}),h(n.prototype,n.toPrimitive,i("",function(){var e=s(this)
return"symbol"===o(e)?e:e.toString()})),h(n.prototype,n.toStringTag,i("c","Symbol")),h(r.prototype,n.toStringTag,i("c",n.prototype[n.toStringTag])),h(r.prototype,n.toPrimitive,i("c",n.prototype[n.toPrimitive]))}),vr=de(function(e,t){"use strict"
t.exports=cr()()?lr().Symbol:gr()}),br=de(function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===r}}),yr=de(function(e,t){"use strict"
var n=Object.prototype.toString,r=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&r(n.call(e))}}),wr=de(function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||n.call(e)===r)||!1}}),Dr=de(function(e,t){"use strict"
var n=vr().iterator,r=br(),a=yr(),o=On(),i=Pn(),s=In(),u=kn(),l=wr(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,g,v,b,y,w,D,E,x=arguments[1],A=arguments[2]
if(e=Object(s(e)),u(x)&&i(x),this&&this!==Array&&a(this))t=this
else{if(!x){if(r(e))return 1!==(v=e.length)?Array.apply(null,e):((g=new Array(1))[0]=e[0],g)
if(c(e)){for(g=new Array(v=e.length),h=0;h<v;++h)g[h]=e[h]
return g}}g=[]}if(!c(e))if(void 0!==(D=e[n])){for(y=i(D).call(e),t&&(g=new t),w=y.next(),h=0;!w.done;)E=x?d.call(x,A,w.value,h):w.value,t?(p.value=E,f(g,h,p)):g[h]=E,w=y.next(),++h
v=h}else if(l(e)){for(v=e.length,t&&(g=new t),h=0,m=0;h<v;++h)E=e[h],h+1<v&&(b=E.charCodeAt(0))>=55296&&b<=56319&&(E+=e[++h]),E=x?d.call(x,A,E,m):E,t?(p.value=E,f(g,m,p)):g[m]=E,++m
v=m}if(void 0===v)for(v=o(e.length),t&&(g=new t(v)),h=0;h<v;++h)E=x?d.call(x,A,e[h],h):e[h],t?(p.value=E,f(g,h,p)):g[h]=E
return t&&(p.value=null,g.length=v),g}}),Er=de(function(e,t){"use strict"
t.exports=ir()()?Array.from:Dr()}),xr=de(function(e,t){"use strict"
var n=Er(),r=Array.isArray
t.exports=function(e){return r(e)?e:n(e)}}),Ar=de(function(e,t){"use strict"
var n,r=xr(),a=kn(),o=Pn(),i=Array.prototype.slice
n=function(e){return this.map(function(t,n){return t?t(e[n]):e[n]}).concat(i.call(e,this.length))},t.exports=function(e){return(e=r(e)).forEach(function(e){a(e)&&o(e)}),n.bind(e)}}),Fr=de(function(e,t){"use strict"
var n=Pn()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:n(e.get)},void 0!==e.set?(t.set=n(e.set),e.delete&&(t.delete=n(e.delete)),e.clear&&(t.clear=n(e.clear)),t):(t.set=t.get,t))}}),Cr=de(function(e,t){"use strict"
var n=Wn(),r=Qn(),a=ar(),o=or().methods,i=Ar(),s=Fr(),u=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var h,m,g,v,b,y,w,D,E,x,A,F,C,k,T,R=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(x=s(o.normalizer),g=x.get,v=x.set,b=x.delete,y=x.clear),null!=o.resolvers&&(T=i(o.resolvers)),k=g?r(function(t){var r,a,o=arguments
if(T&&(o=T(o)),null!==(r=g(o))&&hasOwnProperty.call(R,r))return A&&h.emit("get",r,o,this),R[r]
if(a=1===o.length?l.call(e,this,o[0]):u.call(e,this,o),null===r){if(null!==(r=g(o)))throw n("Circular invocation","CIRCULAR_INVOCATION")
r=v(o)}else if(hasOwnProperty.call(R,r))throw n("Circular invocation","CIRCULAR_INVOCATION")
return R[r]=a,F&&h.emit("set",r,null,a),a},m):0===t?function(){var t
if(hasOwnProperty.call(R,"data"))return A&&h.emit("get","data",arguments,this),R.data
if(t=arguments.length?u.call(e,this,arguments):l.call(e,this),hasOwnProperty.call(R,"data"))throw n("Circular invocation","CIRCULAR_INVOCATION")
return R.data=t,F&&h.emit("set","data",null,t),t}:function(t){var r,a,o=arguments
if(T&&(o=T(arguments)),a=String(o[0]),hasOwnProperty.call(R,a))return A&&h.emit("get",a,o,this),R[a]
if(r=1===o.length?l.call(e,this,o[0]):u.call(e,this,o),hasOwnProperty.call(R,a))throw n("Circular invocation","CIRCULAR_INVOCATION")
return R[a]=r,F&&h.emit("set",a,null,r),r},h={original:e,memoized:k,profileName:o.profileName,get:function(e){return T&&(e=T(e)),g?g(e):String(e[0])},has:function(e){return hasOwnProperty.call(R,e)},delete:function(e){var t
hasOwnProperty.call(R,e)&&(b&&b(e),t=R[e],delete R[e],C&&h.emit("delete",e,t))},clear:function(){var e=R
y&&y(),R=c(null),h.emit("clear",e)},on:function(e,t){return"get"===e?A=!0:"set"===e?F=!0:"delete"===e&&(C=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=h.original}},w=g?r(function(e){var t,n=arguments
T&&(n=T(n)),null!==(t=g(n))&&h.delete(t)},m):0===t?function(){return h.delete("data")}:function(e){return T&&(e=T(arguments)[0]),h.delete(e)},D=r(function(){var e,n=arguments
return 0===t?R.data:(T&&(n=T(n)),e=g?g(n):String(n[0]),R[e])}),E=r(function(){var e,n=arguments
return 0===t?h.has("data"):(T&&(n=T(n)),null!==(e=g?g(n):String(n[0]))&&h.has(e))}),d(k,{__memoized__:a(!0),delete:a(w),clear:a(h.clear),_get:a(D),_has:a(E)}),h}}),kr=de(function(e,t){"use strict"
var n=Pn(),r=Bn(),a=qn(),o=Cr(),i=Mn()
t.exports=function e(t){var s,u,l
if(n(t),(s=Object(arguments[1])).async&&s.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!s.force?t:(u=i(s.length,t.length,s.async&&a.async),l=o(t,u,s),r(a,function(e,t){s[t]&&e(s[t],l,s)}),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}}),Tr=de(function(e,t){"use strict"
t.exports=function(e){var t,n,r=e.length
if(!r)return""
for(t=String(e[n=0]);--r;)t+=""+e[++n]
return t}}),Rr=de(function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var n=String(t[0]),r=0,a=e;--a;)n+=""+t[++r]
return n}:function(){return""}}}),Nr=de(function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}}),_r=de(function(e,t){"use strict"
t.exports=function(e){return e!=e}}),Sr=de(function(e,t){"use strict"
t.exports=Nr()()?Number.isNaN:_r()}),Or=de(function(e,t){"use strict"
var n=Sr(),r=On(),a=In(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,s=Math.abs,u=Math.floor
t.exports=function(e){var t,l,c,d
if(!n(e))return o.apply(this,arguments)
for(l=r(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?u(c):r(this.length)-u(s(c));t<l;++t)if(i.call(this,t)&&(d=this[t],n(d)))return t
return-1}}),Mr=de(function(e,t){"use strict"
var n=Or(),r=Object.create
t.exports=function(){var e=0,t=[],a=r(null)
return{get:function(e){var r,a=0,o=t,i=e.length
if(0===i)return o[i]||null
if(o=o[i]){for(;a<i-1;){if(-1===(r=n.call(o[0],e[a])))return null
o=o[1][r],++a}return-1===(r=n.call(o[0],e[a]))?null:o[1][r]||null}return null},set:function(r){var o,i=0,s=t,u=r.length
if(0===u)s[u]=++e
else{for(s[u]||(s[u]=[[],[]]),s=s[u];i<u-1;)-1===(o=n.call(s[0],r[i]))&&(o=s[0].push(r[i])-1,s[1].push([[],[]])),s=s[1][o],++i;-1===(o=n.call(s[0],r[i]))&&(o=s[0].push(r[i])-1),s[1][o]=++e}return a[e]=r,e},delete:function(e){var r,o=0,i=t,s=a[e],u=s.length,l=[]
if(0===u)delete i[u]
else if(i=i[u]){for(;o<u-1;){if(-1===(r=n.call(i[0],s[o])))return
l.push(i,r),i=i[1][r],++o}if(-1===(r=n.call(i[0],s[o])))return
for(e=i[1][r],i[0].splice(r,1),i[1].splice(r,1);!i[0].length&&l.length;)r=l.pop(),(i=l.pop())[0].splice(r,1),i[1].splice(r,1)}delete a[e]},clear:function(){t=[],a=r(null)}}}}),Pr=de(function(e,t){"use strict"
var n=Or()
t.exports=function(){var e=0,t=[],r=[]
return{get:function(e){var a=n.call(t,e[0])
return-1===a?null:r[a]},set:function(n){return t.push(n[0]),r.push(++e),e},delete:function(e){var a=n.call(r,e);-1!==a&&(t.splice(a,1),r.splice(a,1))},clear:function(){t=[],r=[]}}}}),Ir=de(function(e,t){"use strict"
var n=Or(),r=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=r(null)
return{get:function(t){for(var r,o=0,i=a;o<e-1;){if(-1===(r=n.call(i[0],t[o])))return null
i=i[1][r],++o}return-1===(r=n.call(i[0],t[o]))?null:i[1][r]||null},set:function(r){for(var i,s=0,u=a;s<e-1;)-1===(i=n.call(u[0],r[s]))&&(i=u[0].push(r[s])-1,u[1].push([[],[]])),u=u[1][i],++s
return-1===(i=n.call(u[0],r[s]))&&(i=u[0].push(r[s])-1),u[1][i]=++t,o[t]=r,t},delete:function(t){for(var r,i=0,s=a,u=[],l=o[t];i<e-1;){if(-1===(r=n.call(s[0],l[i])))return
u.push(s,r),s=s[1][r],++i}if(-1!==(r=n.call(s[0],l[i]))){for(t=s[1][r],s[0].splice(r,1),s[1].splice(r,1);!s[0].length&&u.length;)r=u.pop(),(s=u.pop())[0].splice(r,1),s[1].splice(r,1)
delete o[t]}},clear:function(){a=[[],[]],o=r(null)}}}}),jr=de(function(e,t){"use strict"
var n=Pn(),r=Bn(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return n(t),r(e,function(e,n,r,s){o[n]=a.call(t,i,e,n,r,s)}),o}}),Br=de(function(e,t){"use strict"
var n=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e},r=function(e){var t,r,o=a.createTextNode(""),i=0
return new e(function(){var e
if(t)r&&(t=r.concat(t))
else{if(!r)return
t=r}if(r=t,t=null,"function"==typeof r)return e=r,r=null,void e()
for(o.data=i=++i%2;r;)e=r.shift(),r.length||(r=null),e()}).observe(o,{characterData:!0}),function(e){n(e),t?"function"==typeof t?t=[t,e]:t.push(e):(t=e,o.data=i=++i%2)}}
t.exports=function(){if("object"===("undefined"==typeof process?"undefined":o(process))&&process&&"function"==typeof process.nextTick)return process.nextTick
if("function"==typeof queueMicrotask)return function(e){queueMicrotask(n(e))}
if("object"===(void 0===a?"undefined":o(a))&&a){if("function"==typeof MutationObserver)return r(MutationObserver)
if("function"==typeof WebKitMutationObserver)return r(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(n(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(n(e),0)}:null}()}),qr=de(function(){"use strict"
var e=Er(),t=jr(),n=Kn(),r=Qn(),a=Br(),o=Array.prototype.slice,i=Function.prototype.apply,s=Object.create
qn().async=function(u,l){var c,d,p,f=s(null),h=s(null),m=l.memoized,g=l.original
l.memoized=r(function(e){var t=arguments,n=t[t.length-1]
return"function"==typeof n&&(c=n,t=o.call(t,0,-1)),m.apply(d=this,p=t)},m)
try{n(l.memoized,m)}catch(e){}l.on("get",function(e){var t,n,r
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,n=d,r=p,c=d=p=null,a(function(){var a
hasOwnProperty.call(h,e)?(a=h[e],l.emit("getasync",e,r,n),i.call(t,a.context,a.args)):(c=t,d=n,p=r,m.apply(n,r))})}}),l.original=function(){var t,n,r,o
return c?(t=e(arguments),n=function t(n){var r,s,u=t.id
if(null!=u){if(delete t.id,r=f[u],delete f[u],r)return s=e(arguments),l.has(u)&&(n?l.delete(u):(h[u]={context:this,args:s},l.emit("setasync",u,"function"==typeof r?1:r.length))),"function"==typeof r?o=i.call(r,this,s):r.forEach(function(e){o=i.call(e,this,s)},this),o}else a(i.bind(t,this,arguments))},r=c,c=d=p=null,t.push(n),o=i.call(g,this,t),n.cb=r,c=n,o):i.call(g,this,arguments)},l.on("set",function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)}),l.on("delete",function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],l.emit("deleteasync",e,o.call(t.args,1)))}),l.on("clear",function(){var e=h
h=s(null),l.emit("clearasync",t(e,function(e){return o.call(e.args,1)}))})}}),Lr=de(function(e,t){"use strict"
var n=Array.prototype.forEach,r=Object.create
t.exports=function(e){var t=r(null)
return n.call(arguments,function(e){t[e]=!0}),t}}),zr=de(function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}}),Vr=de(function(e,t){"use strict"
var n=zr()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}}),$r=de(function(e,t){"use strict"
var n=In(),r=Vr()
t.exports=function(e){return r(n(e))}}),Ur=de(function(e,t){"use strict"
var n=zr()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}}),Hr=de(function(e,t){"use strict"
var n=Ur(),r=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=n(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(r,function(e){return JSON.stringify(e).slice(1,-1)})}}),Gr=de(function(e,t){function n(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=n,t.exports.default=n}),Wr=de(function(){"use strict"
var e=jr(),t=Lr(),n=$r(),r=Hr(),a=Gr(),o=Br(),i=Object.create,s=t("then","then:finally","done","done:finally")
qn().promise=function(t,u){var l=i(null),c=i(null),d=i(null)
if(!0===t)t=null
else if(t=n(t),!s[t])throw new TypeError("'"+r(t)+"' is not valid promise mode")
u.on("set",function(e,n,r){var i=!1
if(!a(r))return c[e]=r,void u.emit("setasync",e,1)
l[e]=1,d[e]=r
var s=function(t){var n=l[e]
if(i)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
n&&(delete l[e],c[e]=t,u.emit("setasync",e,n))},p=function(){i=!0,l[e]&&(delete l[e],delete d[e],u.delete(e))},f=t
if(f||(f="then"),"then"===f){var h=function(){o(p)}
"function"==typeof(r=r.then(function(e){o(s.bind(this,e))},h)).finally&&r.finally(h)}else if("done"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
r.done(s,p)}else if("done:finally"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof r.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
r.done(s),r.finally(p)}}),u.on("get",function(e,t,n){var r
if(l[e])++l[e]
else{r=d[e]
var i=function(){u.emit("getasync",e,t,n)}
a(r)?"function"==typeof r.done?r.done(i):r.then(function(){o(i)}):i()}}),u.on("delete",function(e){if(delete d[e],l[e])delete l[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],u.emit("deleteasync",e,[t])}}),u.on("clear",function(){var t=c
c=i(null),l=i(null),d=i(null),u.emit("clearasync",e(t,function(e){return[e]}))})}}),Kr=de(function(){"use strict"
var e=Pn(),t=Bn(),n=qn(),r=Function.prototype.apply
n.dispose=function(a,o,i){var s
if(e(a),i.async&&n.async||i.promise&&n.promise)return o.on("deleteasync",s=function(e,t){r.call(a,null,t)}),void o.on("clearasync",function(e){t(e,function(e,t){s(t,e)})})
o.on("delete",s=function(e,t){a(t)}),o.on("clear",function(e){t(e,function(e,t){s(t,e)})})}}),Qr=de(function(e,t){"use strict"
t.exports=2147483647}),Yr=de(function(e,t){"use strict"
var n=On(),r=Qr()
t.exports=function(e){if((e=n(e))>r)throw new TypeError(e+" exceeds maximum possible timeout")
return e}}),Xr=de(function(){"use strict"
var e=Er(),t=Bn(),n=Br(),r=Gr(),a=Yr(),o=qn(),i=Function.prototype,s=Math.max,u=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,h,m,g;(c=a(c))&&(f=l(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,function(e){f[e]=setTimeout(function(){d.delete(e)},c),"function"==typeof f[e].unref&&f[e].unref(),g&&(g[e]&&"nextTick"!==g[e]&&clearTimeout(g[e]),g[e]=setTimeout(function(){delete g[e]},m),"function"==typeof g[e].unref&&g[e].unref())}),d.on("delete"+h,function(e){clearTimeout(f[e]),delete f[e],g&&("nextTick"!==g[e]&&clearTimeout(g[e]),delete g[e])}),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:s(u(Number(p.preFetch),1),0))&&(g={},m=(1-m)*c,d.on("get"+h,function(t,a,o){g[t]||(g[t]="nextTick",n(function(){var n
"nextTick"===g[t]&&(delete g[t],d.delete(t),p.async&&(a=e(a)).push(i),n=d.memoized.apply(o,a),p.promise&&r(n)&&("function"==typeof n.done?n.done(i,i):n.then(i,i)))}))})),d.on("clear"+h,function(){t(f,function(e){clearTimeout(e)}),f={},g&&(t(g,function(e){"nextTick"!==e&&clearTimeout(e)}),g={})}))}}),Zr=de(function(e,t){"use strict"
var n=On(),r=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,s=r(null),u=r(null),l=0
return e=n(e),{hit:function(n){var r=u[n],c=++l
if(s[c]=n,u[n]=c,!r){if(++o<=e)return
return n=s[i],t(n),n}if(delete s[r],i===r)for(;!a.call(s,++i););},delete:t=function(e){var t=u[e]
if(t&&(delete s[t],delete u[e],--o,i===t)){if(!o)return l=0,void(i=1)
for(;!a.call(s,++i););}},clear:function(){o=0,i=1,s=r(null),u=r(null),l=0}}}}),Jr=de(function(){"use strict"
var e=On(),t=Zr(),n=qn()
n.max=function(r,a,o){var i,s,u;(r=e(r))&&(s=t(r),i=o.async&&n.async||o.promise&&n.promise?"async":"",a.on("set"+i,u=function(e){void 0!==(e=s.hit(e))&&a.delete(e)}),a.on("get"+i,u),a.on("delete"+i,s.delete),a.on("clear"+i,s.clear))}}),ea=de(function(){"use strict"
var e=ar(),t=qn(),n=Object.create,r=Object.defineProperties
t.refCounter=function(a,o,i){var s,u
s=n(null),u=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+u,function(e,t){s[e]=t||1}),o.on("get"+u,function(e){++s[e]}),o.on("delete"+u,function(e){delete s[e]}),o.on("clear"+u,function(){s={}}),r(o.memoized,{deleteRef:e(function(){var e=o.get(arguments)
return null===e?null:s[e]?! --s[e]&&(o.delete(e),!0):null}),getRefCount:e(function(){var e=o.get(arguments)
return null===e?0:s[e]?s[e]:0})})}}),ta=de(function(e,t){"use strict"
var n=Tn(),r=Mn(),a=kr()
t.exports=function(e){var t,o=n(arguments[1])
return o.normalizer||0!==(t=o.length=r(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=Tr():t>1&&(o.normalizer=Rr()(t)):o.normalizer=!1===t?Mr()():1===t?Pr()():Ir()(t)),o.async&&qr(),o.promise&&Wr(),o.dispose&&Kr(),o.maxAge&&Xr(),o.max&&Jr(),o.refCounter&&ea(),a(e,o)}}),na={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,selectorSimilarFilterLimit:700,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>",serializableErrorProps:Object.freeze(["message","stack","name","code","ruleId","method"])};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach(function(e){var t=e.name,n=e.value,r=e.priority,a=e.group
na[t]=n,na[t+"_PRIO"]=r,na[t+"_GROUP"]=a,na.results[r]=n,na.resultGroups[r]=a,na.resultGroupMap[n]=a}),Object.freeze(na.results),Object.freeze(na.resultGroups),Object.freeze(na.resultGroupMap),Object.freeze(na)
var ra,aa=na
function oa(){if(ra)ra.apply(void 0,arguments)
else if("object"===("undefined"==typeof console?"undefined":o(console))&&console.log){var e;(e=console).log.apply(e,arguments)}}var ia=/[\t\r\n\f]/g,sa=J(function e(){X(this,e),this.parent=void 0},[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var n=" "+e+" "
return(" "+t+" ").replace(ia," ").indexOf(n)>=0}}]),ua={}
pe(ua,{DqElement:function(){return vu},RuleError:function(){return Xm},aggregate:function(){return la},aggregateChecks:function(){return ma},aggregateNodeResults:function(){return va},aggregateResult:function(){return ya},areStylesSet:function(){return wa},assert:function(){return Da},checkHelper:function(){return bu},clone:function(){return yu},closest:function(){return Pu},collectResultsFromFrames:function(){return Nl},contains:function(){return _l},convertSelector:function(){return Su},cssParser:function(){return Eu},deepMerge:function(){return Sl},escapeSelector:function(){return xa},extendMetaData:function(){return Ol},filterHtmlAttrs:function(){return Hm},finalizeRuleResult:function(){return ga},findBy:function(){return kl},getAllChecks:function(){return Cl},getAncestry:function(){return iu},getBaseLang:function(){return Fh},getCheckMessage:function(){return Mh},getCheckOption:function(){return Ph},getElementInternals:function(){return im},getElementSource:function(){return fu},getEnvironmentData:function(){return Ih},getFlattenedTree:function(){return Dh},getFrameContexts:function(){return Qh},getFriendlyUriEnd:function(){return ka},getNodeAttributes:function(){return Ta},getNodeFromTree:function(){return pu},getPreloadConfig:function(){return qm},getRootNode:function(){return Vl},getRule:function(){return Yh},getScroll:function(){return Zh},getScrollState:function(){return em},getSelector:function(){return ru},getSelectorData:function(){return Xs},getShadowSelector:function(){return Vs},getStandards:function(){return tm},getStyleSheetFactory:function(){return rm},getXpath:function(){return uu},injectStyle:function(){return sm},isArrayLike:function(){return um},isContextObject:function(){return dm},isContextProp:function(){return pm},isContextSpec:function(){return cm},isHidden:function(){return mm},isHtmlElement:function(){return gm},isLabelledFramesSelector:function(){return fm},isLabelledShadowDomSelector:function(){return hm},isNodeInContext:function(){return vm},isShadowRoot:function(){return Ll},isValidCustomElementName:function(){return Bl},isValidLang:function(){return ig},isXHTML:function(){return zs},matchAncestry:function(){return ym},matches:function(){return xu},matchesExpression:function(){return Mu},matchesSelector:function(){return Ra},memoize:function(){return Ls},mergeResults:function(){return Rl},nodeLookup:function(){return Dm},nodeSerializer:function(){return Fl},nodeSorter:function(){return wm},normalizeRunOptions:function(){return sg},objectHasOwn:function(){return lm},parseCrossOriginStylesheet:function(){return Am},parseSameOriginStylesheet:function(){return Em},parseStylesheet:function(){return xm},parseTabindex:function(){return Fm},performanceTimer:function(){return km},pollyfillElementsFromPoint:function(){return Tm},preload:function(){return jm},preloadCssom:function(){return Sm},preloadMedia:function(){return Im},processMessage:function(){return Oh},publishMetaData:function(){return Lm},querySelectorAll:function(){return Vm},querySelectorAllFilter:function(){return _m},queue:function(){return Lu},respondable:function(){return bl},ruleShouldRun:function(){return Um},select:function(){return Wm},sendCommandToFrame:function(){return wl},serializeError:function(){return Qm},setScrollState:function(){return Zm},shadowSelect:function(){return Jm},shadowSelectAll:function(){return tg},shouldPreload:function(){return Bm},toArray:function(){return Ea},tokenList:function(){return hh},uniqueArray:function(){return Rm},uuid:function(){return nl},validInputTypes:function(){return rg},validLangs:function(){return og}})
var la=function(e,t,n){t=t.slice(),n&&t.push(n)
var r=t.map(function(t){return e.indexOf(t)}).sort()
return e[r.pop()]},ca=aa.CANTTELL_PRIO,da=aa.FAIL_PRIO,pa=[]
pa[aa.PASS_PRIO]=!0,pa[aa.CANTTELL_PRIO]=null,pa[aa.FAIL_PRIO]=!1
var fa=["any","all","none"]
function ha(e,t){return fa.reduce(function(n,r){return n[r]=(e[r]||[]).map(function(e){return t(e,r)}),n},{})}var ma=function(e){var t=Object.assign({},e)
ha(t,function(e,t){var n=void 0===e.result?-1:pa.indexOf(e.result)
e.priority=-1!==n?n:aa.CANTTELL_PRIO,"none"===t&&(e.priority===aa.PASS_PRIO?e.priority=aa.FAIL_PRIO:e.priority===aa.FAIL_PRIO&&(e.priority=aa.PASS_PRIO))})
var n={all:t.all.reduce(function(e,t){return Math.max(e,t.priority)},0),none:t.none.reduce(function(e,t){return Math.max(e,t.priority)},0),any:t.any.reduce(function(e,t){return Math.min(e,t.priority)},4)%4}
t.priority=Math.max(n.all,n.none,n.any)
var r=[]
return fa.forEach(function(e){t[e]=t[e].filter(function(r){return r.priority===t.priority&&r.priority===n[e]}),t[e].forEach(function(e){return r.push(e.impact)})}),[ca,da].includes(t.priority)?t.impact=la(aa.impact,r):t.impact=null,ha(t,function(e){delete e.result,delete e.priority}),t.result=aa.results[t.priority],delete t.priority,t}
function ga(e){var t=i._audit.rules.find(function(t){return t.id===e.id})
return t&&t.impact&&e.nodes.forEach(function(e){["any","all","none"].forEach(function(n){(e[n]||[]).forEach(function(e){e.impact=t.impact})})}),Object.assign(e,va(e.nodes)),delete e.nodes,e}var va=function(e){var t={}
if((e=e.map(function(e){if(e.any&&e.all&&e.none)return ma(e)
if(Array.isArray(e.node))return ga(e)
throw new TypeError("Invalid Result type")}))&&e.length){var n=e.map(function(e){return e.result})
t.result=la(aa.results,n,t.result)}else t.result="inapplicable"
aa.resultGroups.forEach(function(e){return t[e]=[]}),e.forEach(function(e){var n=aa.resultGroupMap[e.result]
t[n].push(e)})
var r=aa.FAIL_GROUP
if(0===t[r].length&&(r=aa.CANTTELL_GROUP),t[r].length>0){var a=t[r].map(function(e){return e.impact})
t.impact=la(aa.impact,a)||null}else t.impact=null
return t}
function ba(e,t,n){var r=Object.assign({},t)
r.nodes=(r[n]||[]).concat(),aa.resultGroups.forEach(function(e){delete r[e]}),e[n].push(r)}var ya=function(e){var t={}
return aa.resultGroups.forEach(function(e){return t[e]=[]}),e.forEach(function(e){e.error?ba(t,e,aa.CANTTELL_GROUP):e.result===aa.NA?ba(t,e,aa.NA_GROUP):aa.resultGroups.forEach(function(n){Array.isArray(e[n])&&e[n].length>0&&ba(t,e,n)})}),t},wa=function e(t,r,a){var o=n.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<r.length;++i){var s=r[i]
if(o.getPropertyValue(s.property)===s.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,r,a)},Da=function(e,t){if(!e)throw new Error(t)},Ea=function(e){return Array.prototype.slice.call(e)},xa=function(e){for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�"
return o}
function Aa(e,t){return[e.substring(0,t),e.substring(t)]}function Fa(e){return e.replace(/\s+$/,"")}var Ca,ka=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var n=t.currentDomain,r=t.maxLength,a=void 0===r?25:r,o=function(e){var t=e,n="",r="",a="",o="",i=""
if(e.includes("#")){var s=K(Aa(e,e.indexOf("#")),2)
e=s[0],i=s[1]}if(e.includes("?")){var u=K(Aa(e,e.indexOf("?")),2)
e=u[0],o=u[1]}if(e.includes("://")){var l=K(e.split("://"),2)
n=l[0]
var c=K(Aa(e=l[1],e.indexOf("/")),2)
r=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=K(Aa(e=e.substr(2),e.indexOf("/")),2)
r=d[0],e=d[1]}if("www."===r.substr(0,4)&&(r=r.substr(4)),r&&r.includes(":")){var p=K(Aa(r,r.indexOf(":")),2)
r=p[0],a=p[1]}return{original:t,protocol:n,domain:r,port:a,path:e,query:o,hash:i}}(e),i=o.path,s=o.domain,u=o.hash,l=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(u)return l&&(l+u).length<=a?Fa(l+u):l.length<2&&u.length>2&&u.length<=a?Fa(u):void 0
if(s&&s.length<a&&i.length<=1)return Fa(s+i)
if(i==="/"+l&&s&&n&&s!==n&&(s+i).length<=a)return Fa(s+i)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}(l)?Fa(l):void 0}},Ta=function(e){return e.attributes instanceof n.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},Ra=function(e,t){return Ca&&e[Ca]||(Ca=function(e){var t,n,r=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=r.length
for(t=0;t<a;t++)if(e[n=r[t]])return n}(e)),!!e[Ca]&&e[Ca](t)},Na={}
pe(Na,{ArrayFrom:function(){return qs.default},Colorjs:function(){return Os},CssSelectorParser:function(){return Ia.CssSelectorParser},doT:function(){return ja.default},emojiRegexText:function(){return Ba},memoize:function(){return qa.default}})
var _a=fe(me()),Sa=fe(ge()),Oa=(fe(ve()),fe(gt())),Ma=fe(Mt()),Pa=fe(wn())
"hasOwn"in Object||(Object.hasOwn=Oa.default),"values"in Object||(Object.values=Ma.default),"Promise"in n||_a.default.polyfill(),"Uint32Array"in n||(n.Uint32Array=Sa.Uint32Array),n.Uint32Array&&("some"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce})),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,n=Object(this),r=n.length>>>0,a=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(a,t,o,n))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var n,r=Object(this),a=r.length>>>0,o=0;o<a;o++)if(n=r[o],e.call(t,n,o,r))return o
return-1}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),n=parseInt(t.length,10)||0
if(0===n)return!1
var r,a,o=parseInt(arguments[1],10)||0
for(o>=0?r=o:(r=n+o)<0&&(r=0);r<n;){if(e===(a=t[r])||e!=e&&a!=a)return!0
r++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,a=0;a<n;a++)if(a in t&&e.call(r,t[a],a,t))return!0
return!1}}),Array.from||(Array.from=Pa.default),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n},[]):Array.prototype.slice.call(this)},writable:!0}),n.Node&&!("isConnected"in n.Node.prototype)&&Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var Ia=fe(An()),ja=fe(Fn()),Ba=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},qa=fe(ta())
function La(e,t){var n=e.length
Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(function(e){return[e]}))
var r=t[0].length,a=t[0].map(function(e,n){return t.map(function(e){return e[n]})}),o=e.map(function(e){return a.map(function(t){var n=0
if(!Array.isArray(e)){var r,a=te(t)
try{for(a.s();!(r=a.n()).done;){var o=r.value
n+=e*o}}catch(e){a.e(e)}finally{a.f()}return n}for(var i=0;i<e.length;i++)n+=e[i]*(t[i]||0)
return n})})
return 1===n&&(o=o[0]),1===r?o.map(function(e){return e[0]}):o}function za(e){return"string"===Va(e)}function Va(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function $a(e,t){e=+e,t=+t
var n=(Math.floor(e)+"").length
if(t>n)return+e.toFixed(t-n)
var r=Math.pow(10,n-t)
return Math.round(e/r)*r}function Ua(e){if(e){e=e.trim()
var t=/^-?[\d.]+$/,n=e.match(/^([a-z]+)\((.+?)\)$/i)
if(n){var r=[]
return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,function(e,n){/%$/.test(n)?(n=new Number(n.slice(0,-1)/100)).type="<percentage>":/deg$/.test(n)?((n=new Number(+n.slice(0,-3))).type="<angle>",n.unit="deg"):t.test(n)&&((n=new Number(n)).type="<number>"),e.startsWith("/")&&((n=n instanceof Number?n:new Number(n)).alpha=!0),r.push(n)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:r}}}}function Ha(e){return e[e.length-1]}function Ga(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Wa(e,t,n){return(n-e)/(t-e)}function Ka(e,t,n){return Ga(t[0],t[1],Wa(e[0],e[1],n))}function Qa(e){return e.map(function(e){return e.split("|").map(function(e){var t=(e=e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/)
if(t){var n=new String(t[1])
return n.range=[+t[2],+t[3]],n}return e})})}var Ya=Object.freeze({__proto__:null,isString:za,type:Va,toPrecision:$a,parseFunction:Ua,last:Ha,interpolate:Ga,interpolateInv:Wa,mapRange:Ka,parseCoordGrammar:Qa,multiplyMatrices:La}),Xa=J(function e(){X(this,e)},[{key:"add",value:function(e,t,n){if("string"==typeof arguments[0])(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?"unshift":"push"](t)},this)
else for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1])}},{key:"run",value:function(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}}]),Za=new Xa,Ja={gamut_mapping:"lch.c",precision:5,deltaE:"76"},eo={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]}
function to(e){return Array.isArray(e)?e:eo[e]}function no(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(e=to(e),t=to(t),!e||!t)throw new TypeError("Missing white point to convert ".concat(e?"":"from").concat(e||t?"":"/").concat(t?"":"to"))
if(e===t)return n
var a={W1:e,W2:t,XYZ:n,options:r}
if(Za.run("chromatic-adaptation-start",a),a.M||(a.W1===eo.D65&&a.W2===eo.D50?a.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:a.W1===eo.D50&&a.W2===eo.D65&&(a.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Za.run("chromatic-adaptation-end",a),a.M)return La(a.M,a.XYZ)
throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var ro=(e=new WeakSet,t=new WeakMap,J(function n(r){var a,o,i,s,u,l,c
X(this,n),$(this,e),V(this,t,void 0),this.id=r.id,this.name=r.name,this.base=r.base?ro.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase)
var d=null!==(a=r.coords)&&void 0!==a?a:this.base.coords
this.coords=d
var p=null!==(o=null!==(i=r.white)&&void 0!==i?i:this.base.white)&&void 0!==o?o:"D65"
for(var f in this.white=to(p),this.formats=null!==(s=r.formats)&&void 0!==s?s:{},this.formats){var h=this.formats[f]
h.type||(h.type="function"),h.name||(h.name=f)}!r.cssId||null!==(u=this.formats.functions)&&void 0!==u&&u.color?null===(l=this.formats)||void 0===l||!l.color||null!==(c=this.formats)&&void 0!==c&&c.color.id||(this.formats.color.id=this.id):(this.formats.color={id:r.cssId},Object.defineProperty(this,"cssId",{value:r.cssId})),this.referred=r.referred,G(t,this,W(e,this,oo).call(this).reverse()),Za.run("colorspace-init-end",this)},[{key:"inGamut",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).epsilon,n=void 0===t?75e-6:t
if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:n})
var r=Object.values(this.coords)
return e.every(function(e,t){var a=r[t]
if("angle"!==a.type&&a.range){if(Number.isNaN(e))return!0
var o=K(a.range,2),i=o[0],s=o[1]
return(void 0===i||e>=i-n)&&(void 0===s||e<=s+n)}return!0})}},{key:"cssId",get:function(){var e
return(null===(e=this.formats.functions)||void 0===e||null===(e=e.color)||void 0===e?void 0:e.id)||this.id}},{key:"isPolar",get:function(){for(var e in this.coords)if("angle"===this.coords[e].type)return!0
return!1}},{key:"getFormat",value:function(t){return"object"===o(t)?t=W(e,this,ao).call(this,t):(n="default"===t?Object.values(this.formats)[0]:this.formats[t])?n=W(e,this,ao).call(this,n):null
var n}},{key:"to",value:function(e,n){if(1===arguments.length){var r=[e.space,e.coords]
e=r[0],n=r[1]}if(this===(e=ro.get(e)))return n
n=n.map(function(e){return Number.isNaN(e)?0:e})
for(var a,o,i=H(t,this),s=H(t,e),u=0;u<i.length&&i[u]===s[u];u++)a=i[u],o=u
if(!a)throw new Error("Cannot convert between color spaces ".concat(this," and ").concat(e,": no connection space was found"))
for(var l=i.length-1;l>o;l--)n=i[l].toBase(n)
for(var c=o+1;c<s.length;c++)n=s[c].fromBase(n)
return n}},{key:"from",value:function(e,t){if(1===arguments.length){var n=[e.space,e.coords]
e=n[0],t=n[1]}return(e=ro.get(e)).to(this,t)}},{key:"toString",value:function(){return"".concat(this.name," (").concat(this.id,")")}},{key:"getMinCoords",value:function(){var e=[]
for(var t in this.coords){var n,r=this.coords[t],a=r.range||r.refRange
e.push(null!==(n=null==a?void 0:a.min)&&void 0!==n?n:0)}return e}}],[{key:"all",get:function(){return L(new Set(Object.values(ro.registry)))}},{key:"register",value:function(e,t){if(1===arguments.length&&(e=(t=arguments[0]).id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error("Duplicate color space registration: '".concat(e,"'"))
if(this.registry[e]=t,1===arguments.length&&t.aliases){var n,r=te(t.aliases)
try{for(r.s();!(n=r.n()).done;){var a=n.value
this.register(a,t)}}catch(e){r.e(e)}finally{r.f()}}return t}},{key:"get",value:function(e){if(!e||e instanceof ro)return e
if("string"===Va(e)){var t=ro.registry[e.toLowerCase()]
if(!t)throw new TypeError('No color space found with id = "'.concat(e,'"'))
return t}for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a]
if(r.length)return ro.get.apply(ro,r)
throw new TypeError("".concat(e," is not a valid color space"))}},{key:"resolveCoord",value:function(e,t){var n,r,a=Va(e)
if("string"===a)if(e.includes(".")){var o=K(e.split("."),2)
n=o[0],r=o[1]}else n=void 0,r=e
else if(Array.isArray(e)){var i=K(e,2)
n=i[0],r=i[1]}else n=e.space,r=e.coordId
if((n=ro.get(n))||(n=t),!n)throw new TypeError("Cannot resolve coordinate reference ".concat(e,": No color space specified and relative references are not allowed here"))
if("number"===(a=Va(r))||"string"===a&&r>=0){var s=Object.entries(n.coords)[r]
if(s)return q({space:n,id:s[0],index:r},s[1])}n=ro.get(n)
var u=r.toLowerCase(),l=0
for(var c in n.coords){var d,p=n.coords[c]
if(c.toLowerCase()===u||(null===(d=p.name)||void 0===d?void 0:d.toLowerCase())===u)return q({space:n,id:c,index:l},p)
l++}throw new TypeError('No "'.concat(r,'" coordinate found in ').concat(n.name,". Its coordinates are: ").concat(Object.keys(n.coords).join(", ")))}}]))
function ao(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Qa(e.coords)
var t=Object.entries(this.coords).map(function(t,n){var r=K(t,2),a=(r[0],r[1]),o=e.coordGrammar[n][0],i=a.range||a.refRange,s=o.range,u=""
return"<percentage>"==o?(s=[0,100],u="%"):"<angle>"==o&&(u="deg"),{fromRange:i,toRange:s,suffix:u}})
e.serializeCoords=function(e,n){return e.map(function(e,r){var a=t[r],o=a.fromRange,i=a.toRange,s=a.suffix
return o&&i&&(e=Ka(o,i,e)),e=$a(e,n),s&&(e+=s),e})}}return e}function oo(){for(var e=[this],t=this;t=t.base;)e.push(t)
return e}var io=ro
he(io,"registry",{}),he(io,"DEFAULT_FORMAT",{type:"functions",name:"color"})
var so=new io({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),uo=function(e){function t(e){var n,r,a,o
return X(this,t),e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=so),e.toXYZ_M&&e.fromXYZ_M&&(null!==(a=e.toBase)&&void 0!==a||(e.toBase=function(t){var n=La(e.toXYZ_M,t)
return r.white!==r.base.white&&(n=no(r.white,r.base.white,n)),n}),null!==(o=e.fromBase)&&void 0!==o||(e.fromBase=function(t){return t=no(r.base.white,r.white,t),La(e.fromXYZ_M,t)})),null!==(n=e.referred)&&void 0!==n||(e.referred="display"),r=M(this,t,[e])}return j(t,e),J(t)}(io)
function lo(e){var t,n={str:null===(t=String(e))||void 0===t?void 0:t.trim()}
if(Za.run("parse-start",n),n.color)return n.color
if(n.parsed=Ua(n.str),n.parsed){var r=n.parsed.name
if("color"===r){var a,o=n.parsed.args.shift(),i=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1,s=te(io.all)
try{var u,l=function(){var e,t=a.value,r=t.getFormat("color")
if(r&&(o===r.id||null!==(e=r.ids)&&void 0!==e&&e.includes(o))){var s=Object.keys(t.coords).length,u=Array(s).fill(0)
return u.forEach(function(e,t){return u[t]=n.parsed.args[t]||0}),{v:{spaceId:t.id,coords:u,alpha:i}}}}
for(s.s();!(a=s.n()).done;)if(u=l())return u.v}catch(e){s.e(e)}finally{s.f()}var c=""
if(o in io.registry){var d,p=null===(d=io.registry[o].formats)||void 0===d||null===(d=d.functions)||void 0===d||null===(d=d.color)||void 0===d?void 0:d.id
p&&(c="Did you mean color(".concat(p,")?"))}throw new TypeError("Cannot parse color(".concat(o,"). ")+(c||"Missing a plugin?"))}var f,h=te(io.all)
try{var m,g=function(){var e=f.value,t=e.getFormat(r)
if(t&&"function"===t.type){var a=1;(t.lastAlpha||Ha(n.parsed.args).alpha)&&(a=n.parsed.args.pop())
var o=n.parsed.args
return t.coordGrammar&&Object.entries(e.coords).forEach(function(e,n){var a,i=K(e,2),s=i[0],u=i[1],l=t.coordGrammar[n],c=null===(a=o[n])||void 0===a?void 0:a.type
if(!(l=l.find(function(e){return e==c}))){var d=u.name||s
throw new TypeError("".concat(c," not allowed for ").concat(d," in ").concat(r,"()"))}var p=l.range
"<percentage>"===c&&(p||(p=[0,1]))
var f=u.range||u.refRange
p&&f&&(o[n]=Ka(p,f,o[n]))}),{v:{spaceId:e.id,coords:o,alpha:a}}}}
for(h.s();!(f=h.n()).done;)if(m=g())return m.v}catch(e){h.e(e)}finally{h.f()}}else{var v,b=te(io.all)
try{for(b.s();!(v=b.n()).done;){var y=v.value
for(var w in y.formats){var D=y.formats[w]
if("custom"===D.type&&(!D.test||D.test(n.str))){var E,x=D.parse(n.str)
if(x)return null!==(E=x.alpha)&&void 0!==E||(x.alpha=1),x}}}}catch(e){b.e(e)}finally{b.f()}}throw new TypeError("Could not parse ".concat(e," as a color. Missing a plugin?"))}function co(e){if(!e)throw new TypeError("Empty color reference")
za(e)&&(e=lo(e))
var t=e.space||e.spaceId
return t instanceof io||(e.space=io.get(t)),void 0===e.alpha&&(e.alpha=1),e}function po(e,t){return(t=io.get(t)).from(e)}function fo(e,t){var n=io.resolveCoord(t,e.space),r=n.space,a=n.index
return po(e,r)[a]}function ho(e,t,n){return t=io.get(t),e.coords=t.to(e.space,n),e}function mo(e,t,n){if(e=co(e),2===arguments.length&&"object"===Va(arguments[1])){var r=arguments[1]
for(var a in r)mo(e,a,r[a])}else{"function"==typeof n&&(n=n(fo(e,t)))
var o=io.resolveCoord(t,e.space),i=o.space,s=o.index,u=po(e,i)
u[s]=n,ho(e,i,u)}return e}var go=new io({id:"xyz-d50",name:"XYZ D50",white:"D50",base:so,fromBase:function(e){return no(so.white,"D50",e)},toBase:function(e){return no("D50",so.white,e)},formats:{color:{}}}),vo=216/24389,bo=24/116,yo=24389/27,wo=eo.D50,Do=new io({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:wo,base:go,fromBase:function(e){var t=e.map(function(e,t){return e/wo[t]}).map(function(e){return e>vo?Math.cbrt(e):(yo*e+16)/116})
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>bo?Math.pow(t[0],3):(116*t[0]-16)/yo,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/yo,t[2]>bo?Math.pow(t[2],3):(116*t[2]-16)/yo].map(function(e,t){return e*wo[t]})},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}})
function Eo(e){return(e%360+360)%360}var xo=new io({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Do,fromBase:function(e){var t,n=K(e,3),r=n[0],a=n[1],o=n[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Eo(t)]},toBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2]
return r<0&&(r=0),isNaN(a)&&(a=0),[n,r*Math.cos(a*Math.PI/180),r*Math.sin(a*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),Ao=Math.pow(25,7),Fo=Math.PI,Co=180/Fo,ko=Fo/180
function To(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.kL,a=void 0===r?1:r,o=n.kC,i=void 0===o?1:o,s=n.kH,u=void 0===s?1:s,l=K(Do.from(e),3),c=l[0],d=l[1],p=l[2],f=xo.from(Do,[c,d,p])[1],h=K(Do.from(t),3),m=h[0],g=h[1],v=h[2],b=xo.from(Do,[m,g,v])[1]
f<0&&(f=0),b<0&&(b=0)
var y=(f+b)/2,w=Math.pow(y,7),D=.5*(1-Math.sqrt(w/(w+Ao))),E=(1+D)*d,x=(1+D)*g,A=Math.sqrt(Math.pow(E,2)+Math.pow(p,2)),F=Math.sqrt(Math.pow(x,2)+Math.pow(v,2)),C=0===E&&0===p?0:Math.atan2(p,E),k=0===x&&0===v?0:Math.atan2(v,x)
C<0&&(C+=2*Fo),k<0&&(k+=2*Fo)
var T,R=m-c,N=F-A,_=(k*=Co)-(C*=Co),S=C+k,O=Math.abs(_)
A*F===0?T=0:O<=180?T=_:_>180?T=_-360:_<-180?T=_+360:console.log("the unthinkable has happened")
var M,P=2*Math.sqrt(F*A)*Math.sin(T*ko/2),I=(c+m)/2,j=(A+F)/2,B=Math.pow(j,7)
M=A*F===0?S:O<=180?S/2:S<360?(S+360)/2:(S-360)/2
var q=Math.pow(I-50,2),L=1+.015*q/Math.sqrt(20+q),z=1+.045*j,V=1
V-=.17*Math.cos((M-30)*ko),V+=.24*Math.cos(2*M*ko),V+=.32*Math.cos((3*M+6)*ko)
var $=1+.015*j*(V-=.2*Math.cos((4*M-63)*ko)),U=30*Math.exp(-1*Math.pow((M-275)/25,2)),H=2*Math.sqrt(B/(B+Ao)),G=-1*Math.sin(2*U*ko)*H,W=Math.pow(R/(a*L),2)
return W+=Math.pow(N/(i*z),2),W+=Math.pow(P/(u*$),2),W+=G*(N/(i*z))*(P/(u*$)),Math.sqrt(W)}function Ro(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.space,n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).epsilon,r=void 0===n?75e-6:n
e=co(e),t=io.get(t)
var a=e.coords
return t!==e.space&&(a=t.from(e)),t.inGamut(a,{epsilon:r})}function No(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function _o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,r=void 0===n?Ja.gamut_mapping:n,a=t.space,o=void 0===a?e.space:a
if(za(arguments[1])&&(o=arguments[1]),Ro(e,o=io.get(o),{epsilon:0}))return e
var i=So(e,o)
if("clip"!==r&&!Ro(e,o)){var s=_o(No(i),{method:"clip",space:o})
if(To(e,s)>2){for(var u=io.resolveCoord(r),l=u.space,c=u.id,d=So(i,l),p=(u.range||u.refRange)[0],f=fo(d,c);f-p>.01;){var h=No(d)
To(d,h=_o(h,{space:o,method:"clip"}))-2<.01?p=fo(d,c):f=fo(d,c),mo(d,c,(p+f)/2)}i=So(d,o)}else i=s}if("clip"===r||!Ro(i,o,{epsilon:0})){var m=Object.values(o.coords).map(function(e){return e.range||[]})
i.coords=i.coords.map(function(e,t){var n=K(m[t],2),r=n[0],a=n[1]
return void 0!==r&&(e=Math.max(r,e)),void 0!==a&&(e=Math.min(e,a)),e})}return o!==e.space&&(i=So(i,e.space)),e.coords=i.coords,e}function So(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).inGamut
e=co(e)
var r=(t=io.get(t)).from(e),a={space:t,coords:r,alpha:e.alpha}
return n&&(a=_o(a)),a}function Oo(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.precision,i=void 0===o?Ja.precision:o,u=a.format,l=void 0===u?"default":u,c=a.inGamut,d=void 0===c||c,p=O(a,s),f=l
l=null!==(t=null!==(n=(e=co(e)).space.getFormat(l))&&void 0!==n?n:e.space.getFormat("default"))&&void 0!==t?t:io.DEFAULT_FORMAT,d||(d=l.toGamut)
var h=e.coords
if(h=h.map(function(e){return e||0}),d&&!Ro(e)&&(h=_o(No(e),!0===d?void 0:d).coords),"custom"===l.type){if(p.precision=i,!l.serialize)throw new TypeError("format ".concat(f," can only be used to parse colors, not for serialization"))
r=l.serialize(h,e.alpha,p)}else{var m=l.name||"color"
l.serializeCoords?h=l.serializeCoords(h,i):null!==i&&(h=h.map(function(e){return $a(e,i)}))
var g=L(h)
if("color"===m){var v,b=l.id||(null===(v=l.ids)||void 0===v?void 0:v[0])||e.space.id
g.unshift(b)}var y=e.alpha
null!==i&&(y=$a(y,i))
var w=e.alpha<1&&!l.noAlpha?"".concat(l.commas?",":" /"," ").concat(y):""
r="".concat(m,"(").concat(g.join(l.commas?", ":" ")).concat(w,")")}return r}_o.returns="color",So.returns="color"
var Mo=new uo({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],formats:{color:{}}}),Po=1.09929682680944,Io=.018053968510807,jo=new uo({id:"rec2020",name:"REC.2020",base:Mo,toBase:function(e){return e.map(function(e){return e<4.5*Io?e/4.5:Math.pow((e+Po-1)/Po,1/.45)})},fromBase:function(e){return e.map(function(e){return e>=Io?Po*Math.pow(e,.45)-(Po-1):4.5*e})},formats:{color:{}}}),Bo=new uo({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),qo=new uo({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ_M:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],formats:{color:{}}}),Lo={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[.6,50/255,.8],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,.6],lightslategrey:[119/255,136/255,.6],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[.4,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,.8],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[.4,.2,.6],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},zo=Array(3).fill("<percentage> | <number>[0, 255]"),Vo=Array(3).fill("<number>[0, 255]"),$o=new uo({id:"srgb",name:"sRGB",base:qo,fromBase:function(e){return e.map(function(e){var t=e<0?-1:1,n=e*t
return n>.0031308?t*(1.055*Math.pow(n,1/2.4)-.055):12.92*e})},toBase:function(e){return e.map(function(e){var t=e<0?-1:1,n=e*t
return n<.04045?e/12.92:t*Math.pow((n+.055)/1.055,2.4)})},formats:{rgb:{coords:zo},rgb_number:{name:"rgb",commas:!0,coords:Vo,noAlpha:!0},color:{},rgba:{coords:zo,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Vo},hex:{type:"custom",toGamut:!0,test:function(e){return/^#([a-f0-9]{3,4}){1,2}$/i.test(e)},parse:function(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"))
var t=[]
return e.replace(/[a-f0-9]{2}/gi,function(e){t.push(parseInt(e,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).collapse,r=void 0===n||n
t<1&&e.push(t),e=e.map(function(e){return Math.round(255*e)})
var a=r&&e.every(function(e){return e%17==0})
return"#"+e.map(function(e){return a?(e/17).toString(16):e.toString(16).padStart(2,"0")}).join("")}},keyword:{type:"custom",test:function(e){return/^[a-z]+$/i.test(e)},parse:function(e){var t={spaceId:"srgb",coords:null,alpha:1}
if("transparent"===(e=e.toLowerCase())?(t.coords=Lo.black,t.alpha=0):t.coords=Lo[e],t.coords)return t}}}}),Uo=new uo({id:"p3",name:"P3",base:Bo,fromBase:$o.fromBase,toBase:$o.toBase,formats:{color:{id:"display-p3"}}})
if(Ja.display_space=$o,"undefined"!=typeof CSS&&null!==(k=CSS)&&void 0!==k&&k.supports)for(var Ho=0,Go=[Do,jo,Uo];Ho<Go.length;Ho++){var Wo=Go[Ho],Ko=Wo.getMinCoords(),Qo=Oo({space:Wo,coords:Ko,alpha:1})
if(CSS.supports("color",Qo)){Ja.display_space=Wo
break}}function Yo(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.space,a=void 0===r?Ja.display_space:r,o=O(n,u),i=Oo(e,o)
if("undefined"==typeof CSS||null!==(t=CSS)&&void 0!==t&&t.supports("color",i)||!Ja.display_space)(i=new String(i)).color=e
else{var s=So(e,a);(i=new String(Oo(s,o))).color=s}return i}function Xo(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lab",r=(n=io.get(n)).from(e),a=n.from(t)
return Math.sqrt(r.reduce(function(e,t,n){var r=a[n]
return isNaN(t)||isNaN(r)?e:e+Math.pow(r-t,2)},0))}function Zo(e){return fo(e,[so,"y"])}function Jo(e,t){mo(e,[so,"y"],t)}var ei=Object.freeze({__proto__:null,getLuminance:Zo,setLuminance:Jo,register:function(e){Object.defineProperty(e.prototype,"luminance",{get:function(){return Zo(this)},set:function(e){Jo(this,e)}})}})
function ti(e){return e>=.022?e:e+Math.pow(.022-e,1.414)}function ni(e){var t=e<0?-1:1,n=Math.abs(e)
return t*Math.pow(n,2.4)}var ri=216/24389,ai=24/116,oi=24389/27,ii=eo.D65,si=new io({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:ii,base:so,fromBase:function(e){var t=e.map(function(e,t){return e/ii[t]}).map(function(e){return e>ri?Math.cbrt(e):(oi*e+16)/116})
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ai?Math.pow(t[0],3):(116*t[0]-16)/oi,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/oi,t[2]>ai?Math.pow(t[2],3):(116*t[2]-16)/oi].map(function(e,t){return e*ii[t]})},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}}),ui=.5*Math.pow(5,.5)+.5,li=Object.freeze({__proto__:null,contrastWCAG21:function(e,t){e=co(e),t=co(t)
var n=Math.max(Zo(e),0),r=Math.max(Zo(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return(n+.05)/(r+.05)},contrastAPCA:function(e,t){var n,r,a,o
t=co(t),e=co(e)
var i=K((t=So(t,"srgb")).coords,3)
r=i[0],a=i[1],o=i[2]
var s=.2126729*ni(r)+.7151522*ni(a)+.072175*ni(o),u=K((e=So(e,"srgb")).coords,3)
r=u[0],a=u[1],o=u[2]
var l=.2126729*ni(r)+.7151522*ni(a)+.072175*ni(o),c=ti(s),d=ti(l),p=d>c
return n=Math.abs(d-c)<5e-4?0:p?1.14*(Math.pow(d,.56)-Math.pow(c,.57)):1.14*(Math.pow(d,.65)-Math.pow(c,.62)),100*(Math.abs(n)<.1?0:n>0?n-.027:n+.027)},contrastMichelson:function(e,t){e=co(e),t=co(t)
var n=Math.max(Zo(e),0),r=Math.max(Zo(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}var o=n+r
return 0===o?0:(n-r)/o},contrastWeber:function(e,t){e=co(e),t=co(t)
var n=Math.max(Zo(e),0),r=Math.max(Zo(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return 0===r?5e4:(n-r)/r},contrastLstar:function(e,t){e=co(e),t=co(t)
var n=fo(e,[Do,"l"]),r=fo(t,[Do,"l"])
return Math.abs(n-r)},contrastDeltaPhi:function(e,t){e=co(e),t=co(t)
var n=fo(e,[si,"l"]),r=fo(t,[si,"l"]),a=Math.abs(Math.pow(n,ui)-Math.pow(r,ui)),o=Math.pow(a,1/ui)*Math.SQRT2-40
return o<7.5?0:o}})
function ci(e){var t=K(po(e,so),3),n=t[0],r=t[1],a=n+15*r+3*t[2]
return[4*n/a,9*r/a]}function di(e){var t=K(po(e,so),3),n=t[0],r=t[1],a=n+r+t[2]
return[n/a,r/a]}var pi=Object.freeze({__proto__:null,uv:ci,xy:di,register:function(e){Object.defineProperty(e.prototype,"uv",{get:function(){return ci(this)}}),Object.defineProperty(e.prototype,"xy",{get:function(){return di(this)}})}}),fi=Math.PI/180,hi=new io({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:so,fromBase:function(e){return e.map(function(e){return Math.max(203*e,0)})},toBase:function(e){return e.map(function(e){return Math.max(e/203,0)})}}),mi=1.15,gi=.66,vi=2610/Math.pow(2,14),bi=Math.pow(2,14)/2610,yi=3424/Math.pow(2,12),wi=2413/Math.pow(2,7),Di=2392/Math.pow(2,7),Ei=1.7*2523/Math.pow(2,5),xi=Math.pow(2,5)/(1.7*2523),Ai=-.56,Fi=16295499532821565e-27,Ci=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],ki=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],Ti=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Ri=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],Ni=new io({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:hi,fromBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2],o=La(Ci,[mi*n-(mi-1)*a,gi*r-(gi-1)*n,a]).map(function(e){var t=yi+wi*Math.pow(e/1e4,vi),n=1+Di*Math.pow(e/1e4,vi)
return Math.pow(t/n,Ei)}),i=K(La(Ti,o),3),s=i[0],u=i[1],l=i[2]
return[(1+Ai)*s/(1+Ai*s)-Fi,u,l]},toBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2],o=La(Ri,[(n+Fi)/(1+Ai-Ai*(n+Fi)),r,a]).map(function(e){var t=yi-Math.pow(e,xi),n=Di*Math.pow(e,xi)-wi
return 1e4*Math.pow(t/n,bi)}),i=K(La(ki,o),3),s=i[0],u=i[1],l=i[2],c=(s+(mi-1)*l)/mi
return[c,(u+(gi-1)*c)/gi,l]},formats:{color:{}}}),_i=new io({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ni,fromBase:function(e){var t,n=K(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Eo(t)]},toBase:function(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}}),Si=.8359375,Oi=2413/128,Mi=18.6875,Pi=2610/16384,Ii=16384/2610,ji=32/2523,Bi=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],qi=[[.5,.5,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Li=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],zi=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]],Vi=new io({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:hi,fromBase:function(e){return t=La(Bi,e).map(function(e){var t=Si+Oi*Math.pow(e/1e4,Pi),n=1+Mi*Math.pow(e/1e4,Pi)
return Math.pow(t/n,78.84375)}),La(qi,t)
var t},toBase:function(e){var t=function(e){return La(Li,e).map(function(e){var t=Math.max(Math.pow(e,ji)-Si,0),n=Oi-Mi*Math.pow(e,ji)
return 1e4*Math.pow(t/n,Ii)})}(e)
return La(zi,t)},formats:{color:{}}}),$i=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Ui=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Hi=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Gi=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],Wi=new io({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:so,fromBase:function(e){var t=La($i,e).map(function(e){return Math.cbrt(e)})
return La(Hi,t)},toBase:function(e){var t=La(Gi,e).map(function(e){return Math.pow(e,3)})
return La(Ui,t)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}}),Ki=Object.freeze({__proto__:null,deltaE76:function(e,t){return Xo(e,t,"lab")},deltaECMC:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.l,a=void 0===r?2:r,o=n.c,i=void 0===o?1:o,s=K(Do.from(e),3),u=s[0],l=s[1],c=s[2],d=K(xo.from(Do,[u,l,c]),3),p=d[1],f=d[2],h=K(Do.from(t),3),m=h[0],g=h[1],v=h[2],b=xo.from(Do,[m,g,v])[1]
p<0&&(p=0),b<0&&(b=0)
var y=u-m,w=p-b,D=l-g,E=c-v,x=Math.pow(D,2)+Math.pow(E,2)-Math.pow(w,2),A=.511
u>=16&&(A=.040975*u/(1+.01765*u))
var F,C=.0638*p/(1+.0131*p)+.638
Number.isNaN(f)&&(f=0),F=f>=164&&f<=345?.56+Math.abs(.2*Math.cos((f+168)*fi)):.36+Math.abs(.4*Math.cos((f+35)*fi))
var k=Math.pow(p,4),T=Math.sqrt(k/(k+1900)),R=C*(T*F+1-T),N=Math.pow(y/(a*A),2)
return N+=Math.pow(w/(i*C),2),N+=x/Math.pow(R,2),Math.sqrt(N)},deltaE2000:To,deltaEJz:function(e,t){var n=K(_i.from(e),3),r=n[0],a=n[1],o=n[2],i=K(_i.from(t),3),s=i[0],u=i[1],l=i[2],c=r-s,d=a-u
Number.isNaN(o)&&Number.isNaN(l)?(o=0,l=0):Number.isNaN(o)?o=l:Number.isNaN(l)&&(l=o)
var p=o-l,f=2*Math.sqrt(a*u)*Math.sin(p/2*(Math.PI/180))
return Math.sqrt(Math.pow(c,2)+Math.pow(d,2)+Math.pow(f,2))},deltaEITP:function(e,t){var n=K(Vi.from(e),3),r=n[0],a=n[1],o=n[2],i=K(Vi.from(t),3),s=i[0],u=i[1],l=i[2]
return 720*Math.sqrt(Math.pow(r-s,2)+.25*Math.pow(a-u,2)+Math.pow(o-l,2))},deltaEOK:function(e,t){var n=K(Wi.from(e),3),r=n[0],a=n[1],o=n[2],i=K(Wi.from(t),3),s=r-i[0],u=a-i[1],l=o-i[2]
return Math.sqrt(Math.pow(s,2)+Math.pow(u,2)+Math.pow(l,2))}})
function Qi(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
za(n)&&(n={method:n})
var r=n,a=r.method,o=void 0===a?Ja.deltaE:a,i=O(r,c)
for(var s in e=co(e),t=co(t),Ki)if("deltae"+o.toLowerCase()===s.toLowerCase())return Ki[s](e,t,i)
throw new TypeError("Unknown deltaE method: ".concat(o))}var Yi=Object.freeze({__proto__:null,lighten:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return mo(e,[io.get("oklch","lch"),"l"],function(e){return e*(1+t)})},darken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return mo(e,[io.get("oklch","lch"),"l"],function(e){return e*(1-t)})}})
function Xi(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[co(e),co(t)]
if(e=a[0],t=a[1],"object"===Va(n)){var o=[.5,n]
n=o[0],r=o[1]}var i=r
return Ji(e,t,{space:i.space,outputSpace:i.outputSpace,premultiplied:i.premultiplied})(n)}function Zi(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(es(e)){r=t
var a=K((n=e).rangeArgs.colors,2)
e=a[0],t=a[1]}var o=r,i=o.maxDeltaE,s=o.deltaEMethod,u=o.steps,l=void 0===u?2:u,c=o.maxSteps,p=void 0===c?1e3:c,f=O(o,d)
if(!n){var h=[co(e),co(t)]
n=Ji(e=h[0],t=h[1],f)}var m=Qi(e,t),g=i>0?Math.max(l,Math.ceil(m/i)+1):l,v=[]
if(void 0!==p&&(g=Math.min(g,p)),1===g)v=[{p:.5,color:n(.5)}]
else{var b=1/(g-1)
v=Array.from({length:g},function(e,t){var r=t*b
return{p:r,color:n(r)}})}if(i>0)for(var y=v.reduce(function(e,t,n){if(0===n)return 0
var r=Qi(t.color,v[n-1].color,s)
return Math.max(e,r)},0);y>i;){y=0
for(var w=1;w<v.length&&v.length<p;w++){var D=v[w-1],E=v[w],x=(E.p+D.p)/2,A=n(x)
y=Math.max(y,Qi(A,D.color),Qi(A,E.color)),v.splice(w,0,{p:x,color:n(x)}),w++}}return v=v.map(function(e){return e.color})}function Ji(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(es(e)){var r=e,a=t
return Ji.apply(void 0,L(r.rangeArgs.colors).concat([q({},r.rangeArgs.options,a)]))}var o=n.space,i=n.outputSpace,s=n.progression,u=n.premultiplied
e=co(e),t=co(t),e=No(e),t=No(t)
var l={colors:[e,t],options:n}
if(o=o?io.get(o):io.registry[Ja.interpolationSpace]||e.space,i=i?io.get(i):o,e=So(e,o),t=So(t,o),e=_o(e),t=_o(t),o.coords.h&&"angle"===o.coords.h.type){var c=n.hue=n.hue||"shorter",d=[o,"h"],p=[fo(e,d),fo(t,d)],f=p[0],h=p[1],m=function(e,t){if("raw"===e)return t
var n=K(t.map(Eo),2),r=n[0],a=n[1],o=a-r
return"increasing"===e?o<0&&(a+=360):"decreasing"===e?o>0&&(r+=360):"longer"===e?-180<o&&o<180&&(o>0?a+=360:r+=360):"shorter"===e&&(o>180?r+=360:o<-180&&(a+=360)),[r,a]}(c,[f,h]),g=K(m,2)
f=g[0],h=g[1],mo(e,d,f),mo(t,d,h)}return u&&(e.coords=e.coords.map(function(t){return t*e.alpha}),t.coords=t.coords.map(function(e){return e*t.alpha})),Object.assign(function(n){n=s?s(n):n
var r=e.coords.map(function(e,r){return Ga(e,t.coords[r],n)}),a=Ga(e.alpha,t.alpha,n),l={space:o,coords:r,alpha:a}
return u&&(l.coords=l.coords.map(function(e){return e/a})),i!==o&&(l=So(l,i)),l},{rangeArgs:l})}function es(e){return"function"===Va(e)&&!!e.rangeArgs}Ja.interpolationSpace="lab"
var ts=Object.freeze({__proto__:null,mix:Xi,steps:Zi,range:Ji,isRange:es,register:function(e){e.defineFunction("mix",Xi,{returns:"color"}),e.defineFunction("range",Ji,{returns:"function<color>"}),e.defineFunction("steps",Zi,{returns:"array<color>"})}}),ns=new io({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:$o,fromBase:function(e){var t=Math.max.apply(Math,L(e)),n=Math.min.apply(Math,L(e)),r=K(e,3),a=r[0],o=r[1],i=r[2],s=NaN,u=0,l=(n+t)/2,c=t-n
if(0!==c){switch(u=0===l||1===l?0:(t-l)/Math.min(l,1-l),t){case a:s=(o-i)/c+(o<i?6:0)
break
case o:s=(i-a)/c+2
break
case i:s=(a-o)/c+4}s*=60}return[s,100*u,100*l]},toBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2]
function o(e){var t=(e+n/30)%12,o=r*Math.min(a,1-a)
return a-o*Math.max(-1,Math.min(t-3,9-t,1))}return(n%=360)<0&&(n+=360),r/=100,a/=100,[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),rs=new io({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:ns,fromBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)+(r/=100)*Math.min(a,1-a)
return[n,0===o?0:200*(1-a/o),100*o]},toBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)*(1-(r/=100)/2)
return[n,0===o||1===o?0:(a-o)/Math.min(o,1-o)*100,100*o]},formats:{color:{toGamut:!0}}}),as=new io({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:rs,fromBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2]
return[n,a*(100-r)/100,100-a]},toBase:function(e){var t=K(e,3),n=t[0],r=t[1],a=t[2],o=(r/=100)+(a/=100)
if(o>=1)return[n,0,r/o*100]
var i=1-a
return[n,100*(0===i?0:1-r/i),100*i]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}}),os=new uo({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),is=new uo({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:os,toBase:function(e){return e.map(function(e){return Math.pow(Math.abs(e),563/256)*Math.sign(e)})},fromBase:function(e){return e.map(function(e){return Math.pow(Math.abs(e),256/563)*Math.sign(e)})},formats:{color:{id:"a98-rgb"}}}),ss=new uo({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:go,toXYZ_M:[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],fromXYZ_M:[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]]}),us=1/512,ls=new uo({id:"prophoto",name:"ProPhoto",base:ss,toBase:function(e){return e.map(function(e){return e<.03125?e/16:Math.pow(e,1.8)})},fromBase:function(e){return e.map(function(e){return e>=us?Math.pow(e,1/1.8):16*e})},formats:{color:{id:"prophoto-rgb"}}}),cs=new io({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Wi,fromBase:function(e){var t,n=K(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Eo(t)]},toBase:function(e){var t,n,r=K(e,3),a=r[0],o=r[1],i=r[2]
return isNaN(i)?(t=0,n=0):(t=o*Math.cos(i*Math.PI/180),n=o*Math.sin(i*Math.PI/180)),[a,t,n]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),ds=2610/Math.pow(2,14),ps=Math.pow(2,14)/2610,fs=2523/Math.pow(2,5),hs=Math.pow(2,5)/2523,ms=3424/Math.pow(2,12),gs=2413/Math.pow(2,7),vs=2392/Math.pow(2,7),bs=new uo({id:"rec2100pq",name:"REC.2100-PQ",base:Mo,toBase:function(e){return e.map(function(e){return 1e4*Math.pow(Math.max(Math.pow(e,hs)-ms,0)/(gs-vs*Math.pow(e,hs)),ps)/203})},fromBase:function(e){return e.map(function(e){var t=Math.max(203*e/1e4,0),n=ms+gs*Math.pow(t,ds),r=1+vs*Math.pow(t,ds)
return Math.pow(n/r,fs)})},formats:{color:{id:"rec2100-pq"}}}),ys=.17883277,ws=.28466892,Ds=.55991073,Es=3.7743,xs=new uo({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Mo,toBase:function(e){return e.map(function(e){return e<=.5?Math.pow(e,2)/3*Es:Math.exp((e-Ds)/ys+ws)/12*Es})},fromBase:function(e){return e.map(function(e){return(e/=Es)<=1/12?Math.sqrt(3*e):ys*Math.log(12*e-ws)+Ds})},formats:{color:{id:"rec2100-hlg"}}}),As={}
function Fs(e){var t=e.id
e.toCone_M,e.fromCone_M,As[t]=arguments[0]}function Cs(e,t){var n=As[arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Bradford"],r=K(La(n.toCone_M,e),3),a=r[0],o=r[1],i=r[2],s=K(La(n.toCone_M,t),3),u=La([[s[0]/a,0,0],[0,s[1]/o,0],[0,0,s[2]/i]],n.toCone_M)
return La(n.fromCone_M,u)}Za.add("chromatic-adaptation-start",function(e){e.options.method&&(e.M=Cs(e.W1,e.W2,e.options.method))}),Za.add("chromatic-adaptation-end",function(e){e.M||(e.M=Cs(e.W1,e.W2,e.options.method))}),Fs({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]}),Fs({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]}),Fs({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]}),Fs({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]}),Object.assign(eo,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),eo.ACES=[.32168/.33767,1,.34065/.33767]
var ks=new uo({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:eo.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],formats:{color:{}}}),Ts=Math.pow(2,-16),Rs=-.35828683,Ns=(Math.log2(65504)+9.72)/17.52,_s=new uo({id:"acescc",name:"ACEScc",coords:{r:{range:[Rs,Ns],name:"Red"},g:{range:[Rs,Ns],name:"Green"},b:{range:[Rs,Ns],name:"Blue"}},referred:"scene",base:ks,toBase:function(e){return e.map(function(e){return e<=-.3013698630136986?2*(Math.pow(2,17.52*e-9.72)-Ts):e<Ns?Math.pow(2,17.52*e-9.72):65504})},fromBase:function(e){return e.map(function(e){return e<=0?(Math.log2(Ts)+9.72)/17.52:e<Ts?(Math.log2(Ts+.5*e)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),Ss=Object.freeze({__proto__:null,XYZ_D65:so,XYZ_D50:go,XYZ_ABS_D65:hi,Lab_D65:si,Lab:Do,LCH:xo,sRGB_Linear:qo,sRGB:$o,HSL:ns,HWB:as,HSV:rs,P3_Linear:Bo,P3:Uo,A98RGB_Linear:os,A98RGB:is,ProPhoto_Linear:ss,ProPhoto:ls,REC_2020_Linear:Mo,REC_2020:jo,OKLab:Wi,OKLCH:cs,Jzazbz:Ni,JzCzHz:_i,ICTCP:Vi,REC_2100_PQ:bs,REC_2100_HLG:xs,ACEScg:ks,ACEScc:_s}),Os=(T=new WeakMap,J(function e(){var t,n,r,a,o=this
X(this,e),V(this,T,void 0)
for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u]
1===s.length&&(t=co(s[0])),t?(n=t.space||t.spaceId,r=t.coords,a=t.alpha):(n=s[0],r=s[1],a=s[2]),G(T,this,io.get(n)),this.coords=r?r.slice():[0,0,0],this.alpha=a<1?a:1
for(var l=0;l<this.coords.length;l++)"NaN"===this.coords[l]&&(this.coords[l]=NaN)
var c=function(e){Object.defineProperty(o,e,{get:function(){return o.get(e)},set:function(t){return o.set(e,t)}})}
for(var d in H(T,this).coords)c(d)},[{key:"space",get:function(){return H(T,this)}},{key:"spaceId",get:function(){return H(T,this).id}},{key:"clone",value:function(){return new Os(this.space,this.coords,this.alpha)}},{key:"toJSON",value:function(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}},{key:"display",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=Yo.apply(void 0,[this].concat(t))
return r.color=new Os(r.color),r}}],[{key:"get",value:function(e){if(e instanceof Os)return e
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return S(Os,[e].concat(n))}},{key:"defineFunction",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=n.instance,a=void 0===r||r,o=n.returns,i=function(){var e=t.apply(void 0,arguments)
if("color"===o)e=Os.get(e)
else if("function<color>"===o){var n=e
e=function(){var e=n.apply(void 0,arguments)
return Os.get(e)},Object.assign(e,n)}else"array<color>"===o&&(e=e.map(function(e){return Os.get(e)}))
return e}
e in Os||(Os[e]=i),a&&(Os.prototype[e]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return i.apply(void 0,[this].concat(t))})}},{key:"defineFunctions",value:function(e){for(var t in e)Os.defineFunction(t,e[t],e[t])}},{key:"extend",value:function(e){if(e.register)e.register(Os)
else for(var t in e)Os.defineFunction(t,e[t])}}]))
Os.defineFunctions({get:fo,getAll:po,set:mo,setAll:ho,to:So,equals:function(e,t){return e=co(e),t=co(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every(function(e,n){return e===t.coords[n]})},inGamut:Ro,toGamut:_o,distance:Xo,toString:Oo}),Object.assign(Os,{util:Ya,hooks:Za,WHITES:eo,Space:io,spaces:io.registry,parse:lo,defaults:Ja})
for(var Ms=0,Ps=Object.keys(Ss);Ms<Ps.length;Ms++){var Is=Ps[Ms]
io.register(Ss[Is])}for(var js in io.registry)Bs(js,io.registry[js])
function Bs(e,t){Object.keys(t.coords),Object.values(t.coords).map(function(e){return e.name})
var n=e.replace(/-/g,"_")
Object.defineProperty(Os.prototype,n,{get:function(){var n=this,r=this.getAll(e)
return"undefined"==typeof Proxy?r:new Proxy(r,{has:function(e,n){try{return io.resolveCoord([t,n]),!0}catch(e){}return Reflect.has(e,n)},get:function(e,n,r){if(n&&"symbol"!==o(n)&&!(n in e)){var a=io.resolveCoord([t,n]).index
if(a>=0)return e[a]}return Reflect.get(e,n,r)},set:function(r,a,i,s){if(a&&"symbol"!==o(a)&&!(a in r)||a>=0){var u=io.resolveCoord([t,a]).index
if(u>=0)return r[u]=i,n.setAll(e,r),!0}return Reflect.set(r,a,i,s)}})},set:function(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}Za.add("colorspace-init-end",function(e){var t
Bs(e.id,e),null===(t=e.aliases)||void 0===t||t.forEach(function(t){Bs(t,e)})}),Os.extend(Ki),Os.extend({deltaE:Qi}),Os.extend(Yi),Os.extend({contrast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
za(n)&&(n={algorithm:n})
var r=n,a=r.algorithm,o=O(r,l)
if(!a){var i=Object.keys(li).map(function(e){return e.replace(/^contrast/,"")}).join(", ")
throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(i))}for(var s in e=co(e),t=co(t),li)if("contrast"+a.toLowerCase()===s.toLowerCase())return li[s](e,t,o)
throw new TypeError("Unknown contrast algorithm: ".concat(a))}}),Os.extend(pi),Os.extend(ei),Os.extend(ts),Os.extend(li)
var qs=fe(wn())
ja.default.templateSettings.strip=!1,i._memoizedFns=[]
var Ls=function(e){var t=(0,qa.default)(e)
return i._memoizedFns.push(t),t},zs=Ls(function(e){return!(null==e||!e.createElement)&&"A"===e.createElement("A").localName})
function Vs(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var r=t.getRootNode&&t.getRootNode()||a
if(11!==r.nodeType)return e(t,n,r)
for(var o=[];11===r.nodeType;){if(!r.host)return""
o.unshift({elm:t,doc:r}),r=(t=r.host).getRootNode()}return o.unshift({elm:t,doc:r}),o.map(function(t){return e(t.elm,n,t.doc)})}var $s=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow","xmlns"],Us=31,Hs=/([\\"])/g,Gs=/[\u0000-\u001f\u007f]/g
function Ws(e){return e.replace(Hs,"\\$1").replace(Gs,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Ks(e,t){var n,r=t.name
if(-1!==r.indexOf("href")||-1!==r.indexOf("src")){var a=ka(e.getAttribute(r))
n=a?xa(t.name)+'$="'+Ws(a)+'"':xa(t.name)+'="'+Ws(e.getAttribute(r))+'"'}else n=xa(r)+'="'+Ws(t.value)+'"'
return n}function Qs(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Ys(e){return!$s.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<Us)}function Xs(e){for(var t={classes:{},tags:{},attributes:{}},n=(e=Array.isArray(e)?e:[e]).slice(),r=[],a=function(){var e=n.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach(function(e){var n=xa(e)
t.classes[n]?t.classes[n]++:t.classes[n]=1}),a.hasAttributes()&&Array.from(Ta(a)).filter(Ys).forEach(function(e){var n=Ks(a,e)
n&&(t.attributes[n]?t.attributes[n]++:t.attributes[n]=1)})}for(e.children.length&&(r.push(n),n=e.children.slice());!n.length&&r.length;)n=r.pop()};n.length;)a()
return t}function Zs(e,t){var n=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return n.find(function(n){return n!==e&&Ra(n,t)})?":nth-child("+(1+n.indexOf(e))+")":""}function Js(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,n="#"+xa(e.getAttribute("id")||"")
return n.match(/player_uid_/)||1!==t.querySelectorAll(n).length?void 0:n}}function eu(e){var t=zs(a)
return xa(t?e.localName:e.nodeName.toLowerCase())}function tu(e,t){var n,r="",a=function(e,t){var n=[],r=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach(function(t){var o=xa(t)
r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"class"})}),n.sort(Qs)}(e,t),o=function(e,t){var n=[],r=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(Ta(e)).filter(Ys).forEach(function(t){var o=Ks(e,t)
o&&r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"attribute"})}),n.sort(Qs)}(e,t)
return a.length&&1===a[0].count?n=[a[0]]:o.length&&1===o[0].count?(n=[o[0]],r=eu(e)):((n=a.concat(o)).sort(Qs),(n=n.slice(0,3)).some(function(e){return"class"===e.species})?n.sort(function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1}):r=eu(e)),r+n.reduce(function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e},"")}function nu(e,t,n){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var r,a,o=t.toRoot,s=void 0!==o&&o
do{var u=Js(e)
u||(u=tu(e,i._selectorData),u+=Zs(e,u)),r=r?u+" > "+r:u,a=!a||a.length>aa.selectorSimilarFilterLimit?au(n,r):a.filter(function(e){return Ra(e,r)}),e=e.parentElement}while((a.length>1||s)&&e&&11!==e.nodeType)
return 1===a.length?r:-1!==r.indexOf(" > ")?":root"+r.substring(r.indexOf(" > ")):":root"}var ru=Ls(function(e,t){return Vs(nu,e,t)}),au=Ls(function(e,t){return Array.from(e.querySelectorAll(t))})
function ou(e){var t=xa(e.nodeName.toLowerCase()),n=e.parentElement,r=e.parentNode,a=""
if("head"!==t&&"body"!==t&&(null==r?void 0:r.children.length)>1){var o=Array.prototype.indexOf.call(r.children,e)+1
a=":nth-child(".concat(o,")")}return n?ou(n)+" > "+t+a:t+a}function iu(e,t){return Vs(ou,e,t)}function su(e,t){var n,r
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=su(e.parentNode,t)),e.previousSibling){r=1,n=e.previousSibling
do{1===n.nodeType&&n.nodeName===e.nodeName&&r++,n=n.previousSibling}while(n)
1===r&&(r=null)}else if(e.nextSibling){n=e.nextSibling
do{1===n.nodeType&&n.nodeName===e.nodeName?(r=1,n=null):(r=null,n=n.previousSibling)}while(n)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&xa(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),r>1&&(a.count=r),t.push(a)}return t}var uu=function(e){return su(e).reduce(function(e,t){return t.id?"//".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")},"")},lu={},cu={set:function(e,t){!function(e){Da("string"==typeof e,"key must be a string, "+o(e)+" given"),Da(""!==e,"key must not be empty")}(e),lu[e]=t},get:function(e,t){if(function(e){Da("function"==typeof e||void 0===e,"creator must be a function or undefined, "+o(e)+" given")}(t),e in lu)return lu[e]
if("function"==typeof t){var n=t()
return Da(void 0!==n,"Cache creator function should not return undefined"),this.set(e,n),lu[e]}},clear:function(){lu={}}},du=cu,pu=function(e,t){var n=t||e
return du.get("nodeMap")?du.get("nodeMap").get(n):null}
function fu(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.maxLength,i=void 0===o?300:o,s=r.attrLimit,u=void 0===s?20:s
if(!e)return""
if(1!==e.nodeType)return hu(null!==(t=e.nodeValue)&&void 0!==t?t:"",i)
var l,c,d=((c=(l=e).outerHTML)||"function"!=typeof n.XMLSerializer||(c=(new n.XMLSerializer).serializeToString(l)),c||"")
return d.length>i?function(e,t){var n=t.maxLength,r=t.attrLimit,o=zs(e.ownerDocument||a)?e.nodeName:e.nodeName.toLowerCase(),i=Array.from(Ta(e)).map(function(e){return{name:e.name,value:e.value}}),s=i.reduce(function(e,t){var n=t.name,r=t.value
return e+n.length+r.length+4},0)
2+o.length+s>n&&i.forEach(function(e){e.name=hu(e.name,r),e.value=hu(e.value,r)})
var u,l="<".concat(o),c=">",d=te(i)
try{for(d.s();!(u=d.n()).done;){var p=u.value,f=" ".concat(p.name,'="').concat(p.value,'"')
l.length+f.length>n-5?c=" ...>":l+=f}}catch(e){d.e(e)}finally{d.f()}return l+c}(e,{maxLength:i,attrLimit:u}):d}function hu(e,t){return e.length<=t?e:e.substring(0,t)+"..."}var mu="DqElm.RunOptions",gu=Ls(function(e,t,n){var r,a,o,s
return null!=t||(t=null),null!=n||(n={}),t||(t=null!==(o=du.get(mu))&&void 0!==o?o:{}),this.spec=n,e instanceof sa?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=pu(e)),this.fromFrame=(null===(r=this.spec.selector)||void 0===r?void 0:r.length)>1,this._includeElementInJson=t.elementRef,t.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(a=this._virtualNode)||void 0===a?void 0:a.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(s=this.spec.source)&&void 0!==s?s:fu(this._element)),this})
gu.prototype={get selector(){return this.spec.selector||[ru(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[iu(this.element)]},get xpath(){return this.spec.xpath||[uu(this.element)]},get element(){return this._element},toJSON:function(){var e={selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes,fromFrame:this.fromFrame}
return this._includeElementInJson&&(e.element=this._element),e}},gu.fromFrame=function(e,t,n){var r=gu.mergeSpecs(e,n)
return new gu(n.element,t,r)},gu.mergeSpecs=function(e,t){return q({},e,{selector:[].concat(L(t.selector),L(e.selector)),ancestry:[].concat(L(t.ancestry),L(e.ancestry)),xpath:[].concat(L(t.xpath),L(e.xpath)),nodeIndexes:[].concat(L(t.nodeIndexes),L(e.nodeIndexes)),fromFrame:!0})},gu.setRunOptions=function(e){var t=e.elementRef,n=e.absolutePaths
du.set(mu,{elementRef:t,absolutePaths:n})}
var vu=gu,bu=function(e,t,r,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(t){n.Node&&(t=t instanceof n.Node||t instanceof sa?[t]:Ea(t),e.relatedNodes=[],t.forEach(function(t){if(t instanceof sa&&(t=t.actualNode),t instanceof n.Node){var r=new vu(t)
e.relatedNodes.push(r)}}))}}}
function yu(e){return wu(e,new Map)}function wu(e,t){var r,a
if(null===e||"object"!==o(e))return e
if(null!==(r=n)&&void 0!==r&&r.Node&&e instanceof n.Node||null!==(a=n)&&void 0!==a&&a.HTMLCollection&&e instanceof n.HTMLCollection||"nodeName"in e&&"nodeType"in e&&"ownerDocument"in e)return e
if(t.has(e))return t.get(e)
if(Array.isArray(e)){var i=[]
return t.set(e,i),e.forEach(function(e){i.push(wu(e,t))}),i}var s={}
for(var u in t.set(e,s),e)s[u]=wu(e[u],t)
return s}var Du=new Ia.CssSelectorParser
Du.registerSelectorPseudos("not"),Du.registerSelectorPseudos("is"),Du.registerNestingOperators(">"),Du.registerAttrEqualityMods("^","$","*","~")
var Eu=Du
function xu(e,t){return Su(t).some(function(t){return Mu(e,t)})}function Au(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every(function(t){return e.hasClass(t.value)})}(e,t)&&function(e,t){return!t.attributes||t.attributes.every(function(t){var n=e.attr(t.key)
return null!==n&&t.test(n)})}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(n=e,!((r=t).pseudos&&!r.pseudos.every(function(e){if("not"===e.name)return!e.expressions.some(function(e){return Mu(n,e)})
if("is"===e.name)return e.expressions.some(function(e){return Mu(n,e)})
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")})))
var n,r}var Fu,Cu=(Fu=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(Fu,"\\")}),ku=/\\/g
function Tu(e){if(e)return e.map(function(e){var t,n,r=e.name.replace(ku,""),a=(e.value||"").replace(ku,"")
switch(e.operator){case"^=":n=new RegExp("^"+Cu(a))
break
case"$=":n=new RegExp(Cu(a)+"$")
break
case"~=":n=new RegExp("(^|\\s)"+Cu(a)+"(\\s|$)")
break
case"|=":n=new RegExp("^"+Cu(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&n.test(e)}),{key:r,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}})}function Ru(e){if(e)return e.map(function(e){return{value:e=e.replace(ku,""),regexp:new RegExp("(^|\\s)"+Cu(e)+"(\\s|$)")}})}function Nu(e){if(e)return e.map(function(e){var t
return["is","not"].includes(e.name)&&(t=_u(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}})}function _u(e){return e.map(function(e){for(var t=[],n=e.rule;n;)t.push({tag:n.tagName?n.tagName.toLowerCase():"*",combinator:n.nestingOperator?n.nestingOperator:" ",id:n.id,attributes:Tu(n.attrs),classes:Ru(n.classNames),pseudos:Nu(n.pseudos)}),n=n.rule
return t})}function Su(e){var t=Eu.parse(e)
return _u(t=t.selectors?t.selectors:[t])}function Ou(e,t,n,r){if(!e)return!1
for(var a=Array.isArray(t)?t[n]:t,o=Au(e,a);!o&&r&&e.parent;)o=Au(e=e.parent,a)
if(n>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&Ou(e.parent,t,n-1," "===a.combinator)}return o}function Mu(e,t,n){return Ou(e,t,t.length-1,n)}var Pu=function(e,t){for(;e;){if(xu(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Iu(){}function ju(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Bu,qu,Lu=function(){var e,t=[],n=0,r=0,a=Iu,i=!1,s=function(t){e=t,setTimeout(function(){null!=e&&oa("Uncaught error (of queue)",e)},1)},u=s
function l(e){return function(n){t[e]=n,(r-=1)||a===Iu||(i=!0,a(t))}}function c(e){return a=Iu,u(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var s=a
a=function(e,t){s.then(e).catch(t)}}if(ju(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++r,function(){for(var e=t.length;n<e;n++){var r=t[n]
try{r.call(null,l(n),c)}catch(e){c(e)}}}(),d}},then:function(n){if(ju(n),a!==Iu)throw new Error("queue `then` already set")
return e||(a=n,r||(i=!0,a(t))),d},catch:function(t){if(ju(t),u!==s)throw new Error("queue `catch` already set")
return e?(t(e),e=null):u=t,d},abort:c}
return d},zu=n.crypto||n.msCrypto
if(!qu&&zu&&zu.getRandomValues){var Vu=new Uint8Array(16)
qu=function(){return zu.getRandomValues(Vu),Vu}}if(!qu){var $u=new Array(16)
qu=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),$u[t]=e>>>((3&t)<<3)&255
return $u}}for(var Uu="function"==typeof n.Buffer?n.Buffer:Array,Hu=[],Gu={},Wu=0;Wu<256;Wu++)Hu[Wu]=(Wu+256).toString(16).substr(1),Gu[Hu[Wu]]=Wu
function Ku(e,t){var n=t||0,r=Hu
return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var Qu=qu(),Yu=[1|Qu[0],Qu[1],Qu[2],Qu[3],Qu[4],Qu[5]],Xu=16383&(Qu[6]<<8|Qu[7]),Zu=0,Ju=0
function el(e,t,n){var r=t&&n||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Xu,i=null!=e.msecs?e.msecs:(new Date).getTime(),s=null!=e.nsecs?e.nsecs:Ju+1,u=i-Zu+(s-Ju)/1e4
if(u<0&&null==e.clockseq&&(o=o+1&16383),(u<0||i>Zu)&&null==e.nsecs&&(s=0),s>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
Zu=i,Ju=s,Xu=o
var l=(1e4*(268435455&(i+=122192928e5))+s)%4294967296
a[r++]=l>>>24&255,a[r++]=l>>>16&255,a[r++]=l>>>8&255,a[r++]=255&l
var c=i/4294967296*1e4&268435455
a[r++]=c>>>8&255,a[r++]=255&c,a[r++]=c>>>24&15|16,a[r++]=c>>>16&255,a[r++]=o>>>8|128,a[r++]=255&o
for(var d=e.node||Yu,p=0;p<6;p++)a[r+p]=d[p]
return t||Ku(a)}function tl(e,t,n){var r=t&&n||0
"string"==typeof e&&(t="binary"==e?new Uu(16):null,e=null)
var a=(e=e||{}).random||(e.rng||qu)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[r+o]=a[o]
return t||Ku(a)}(Bu=tl).v1=el,Bu.v4=tl,Bu.parse=function(e,t,n){var r=t&&n||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){a<16&&(t[r+a++]=Gu[e])});a<16;)t[r+a++]=0
return t},Bu.unparse=Ku,Bu.BufferClass=Uu,i._uuid=el()
var nl=tl,rl=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function al(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}function ol(e){sl(e),Da(n.parent===e,"Source of the response must be the parent window.")}function il(e){sl(e),Da(e.parent===n,"Respondable target must be a frame in the current window")}function sl(e){Da(n!==e,"Messages can not be sent to the same window.")}var ul={},ll=[]
function cl(){var e="".concat(tl(),":").concat(tl())
return ll.includes(e)?cl():(ll.push(e),e)}function dl(e,t,n,r){if(n?ol(e):il(e),t.message instanceof Error&&!n)return i.log(t.message),!1
var a=function(e){var t=e.topic,n=e.channelId,r=e.message,a={channelId:n,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:al()}
return r instanceof Error?a.error={name:r.name,message:r.message,stack:r.stack}:a.payload=r,JSON.stringify(a)}(q({messageId:cl()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||("function"==typeof r&&function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
Da(!Object.prototype.hasOwnProperty.call(ul,e),"A replyHandler already exists for this message channel."),ul[e]={replyHandler:t,sendToParent:n}}(t.channelId,r,n),o.forEach(function(t){try{e.postMessage(a,t)}catch(n){if(n instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw n}}),0))}function pl(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(r,a,o){dl(e,{channelId:t,message:r,keepalive:a},n,o)}}var fl,hl,ml={open:function(e){if("function"==typeof n.addEventListener){var t=function(t){(function(e,t){var r,a=e.origin,s=e.data,u=e.source
try{var l=function(e){var t,r,a,i,s
try{t=JSON.parse(e)}catch(e){return}if(null!==(u=t)&&"object"===o(u)&&"string"==typeof u.channelId&&u.source===al()){var u,l=t,c=l.topic,d=l.channelId,p=l.messageId,f=l.keepalive
return{topic:c,message:"object"===o(t.error)?(r=t.error,a=r.message||"Unknown error occurred",i=rl.includes(r.name)?r.name:"Error",s=n[i]||Error,r.stack&&(a+="\n"+r.stack.replace(r.message,"")),new s(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(s)||{},c=l.channelId,d=l.message,p=l.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(r=p,ll.includes(r)||(ll.push(r),0)))return
if(d instanceof Error&&u.parent!==n)return i.log(d),!1
try{if(l.topic){var f=pl(u,c)
ol(u),t(l,f)}else!function(e,t){var n=t.channelId,r=t.message,a=t.keepalive,o=function(e){return Object.prototype.hasOwnProperty.call(ul,e)?ul[e]:void 0}(n)||{},s=o.replyHandler,u=o.sendToParent
if(s){u?ol(e):il(e)
var l=pl(e,n,u)
!a&&n&&function(e){delete ul[e]}(n)
try{s(r,a,l)}catch(e){i.log(e),l(e,a)}}}(u,l)}catch(e){!function(e,t,r){if(!e.parent!==n)return i.log(t)
try{dl(e,{topic:null,channelId:r,message:t,messageId:cl(),keepalive:!0},!0)}catch(e){return i.log(e)}}(u,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return n.addEventListener("message",t,!1),function(){n.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof n.addEventListener&&dl(e,t,!1,r)}}
function gl(e){e.updateMessenger(ml)}var vl={}
function bl(e,t,n,r,a){var o={topic:t,message:n,channelId:"".concat(tl(),":").concat(tl()),keepalive:r}
return hl(e,o,a)}function yl(e,t){var n=e.topic,r=e.message,a=e.keepalive,o=Object.prototype.hasOwnProperty.call(vl,n)?vl[n]:void 0
if(o)try{o(r,a,t)}catch(e){i.log(e),t(e,a)}}function wl(e,t,n,r){var a,o,i=e.contentWindow,s=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return oa("Frame does not have a content window",e),void n(null)
if(0!==s){var u=setTimeout(function(){u=setTimeout(function(){t.debug?r(El("No response from frame",e)):n(null)},0)},s)
bl(i,"axe.ping",null,void 0,function(){clearTimeout(u),Dl(e,t,n,r)})}else Dl(e,t,n,r)}function Dl(e,t,n,r){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,s=e.contentWindow,u=setTimeout(function(){r(El("Axe in frame timed out",e))},i)
bl(s,"axe.start",t,void 0,function(e){clearTimeout(u),e instanceof Error==0?n(e):r(e)})}function El(e,t){var n
return i._tree&&(n=ru(t)),new Error(e+": "+(n||t))}bl.updateMessenger=function(e){var t=e.open,n=e.post
Da("function"==typeof t,"open callback must be a function"),Da("function"==typeof n,"post callback must be a function"),fl&&fl()
var r=t(yl)
r?(Da("function"==typeof r,"open callback must return a cleanup function"),fl=r):fl=null,hl=n},bl.subscribe=function(e,t){Da("function"==typeof t,"Subscriber callback must be a function"),Da(!Object.prototype.hasOwnProperty.call(vl,e),"Topic ".concat(e," is already registered to.")),vl[e]=t},bl.isInFrame=function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n).frameElement},gl(bl)
var xl=null,Al={update:function(e){Da("object"===o(e),"serializer must be an object"),xl=e},toSpec:function(e){return Al.dqElmToSpec(new vu(e))},dqElmToSpec:function(e,t){var n
return e instanceof vu==0?e:(t&&(e=function(e,t){var n=e.fromFrame,r=t.ancestry,a=t.xpath,o=!1!==t.selectors||n
return(e=new vu(e.element,t,{source:e.source,nodeIndexes:e.nodeIndexes,selector:o?e.selector:[":root"],ancestry:r?e.ancestry:[":root"],xpath:a?e.xpath:"/"})).fromFrame=n,e}(e,t)),"function"==typeof(null===(n=xl)||void 0===n?void 0:n.toSpec)?xl.toSpec(e):e.toJSON())},mergeSpecs:function(e,t){var n
return"function"==typeof(null===(n=xl)||void 0===n?void 0:n.mergeSpecs)?xl.mergeSpecs(e,t):vu.mergeSpecs(e,t)},mapRawResults:function(e){return e.map(function(e){return q({},e,{nodes:Al.mapRawNodeResults(e.nodes)})})},mapRawNodeResults:function(e){return null==e?void 0:e.map(function(e){var t=e.node,n=O(e,p)
n.node=Al.dqElmToSpec(t)
for(var r=0,a=["any","all","none"];r<a.length;r++){var o=a[r]
n[o]=n[o].map(function(e){var t=e.relatedNodes,n=O(e,f)
return n.relatedNodes=t.map(Al.dqElmToSpec),n})}return n})}},Fl=Al,Cl=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},kl=function(e,t,n){if(Array.isArray(e))return e.find(function(e){return null!==e&&"object"===o(e)&&Object.hasOwn(e,t)&&e[t]===n})}
function Tl(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),r=0;r<n;r++){var a=null==e?void 0:e[r],o=null==t?void 0:t[r]
if("number"!=typeof a||isNaN(a))return 0===r?1:-1
if("number"!=typeof o||isNaN(o))return 0===r?-1:1
if(a!==o)return a-o}return 0}var Rl=function(e,t){var n=[]
return e.forEach(function(e){var t,r=(t=e)&&t.results?Array.isArray(t.results)?t.results.length?t.results:null:[t.results]:null
if(r&&r.length){var a=function(e){return e.frameElement?Fl.toSpec(e.frameElement):e.frameSpec?e.frameSpec:null}(e)
r.forEach(function(e){e.nodes&&a&&function(e,t,n){e.forEach(function(e){e.node=Fl.mergeSpecs(e.node,n),Cl(e).forEach(function(e){e.relatedNodes=e.relatedNodes.map(function(e){return Fl.mergeSpecs(e,n)})})})}(e.nodes,0,a)
var t,r=kl(n,"id",e.id)
r?(e.nodes.length&&function(e,t){for(var n,r=t[0].node,a=0;a<e.length;a++){var o=Tl((n=e[a].node).nodeIndexes,r.nodeIndexes)
if(o>0||0===o&&r.selector.length<n.selector.length)return void e.splice.apply(e,[a,0].concat(L(t)))}e.push.apply(e,L(t))}(r.nodes,e.nodes),e.error&&(null!==(t=r.error)&&void 0!==t||(r.error=e.error))):n.push(e)})}}),n.forEach(function(e){e.nodes&&e.nodes.sort(function(e,t){return Tl(e.node.nodeIndexes,t.node.nodeIndexes)})}),n}
function Nl(e,t,n,r,a,o){t=q({},t,{elementRef:!1})
var i=Lu()
e.frames.forEach(function(e){var a=e.node,o=O(e,h)
i.defer(function(e,i){wl(a,{options:t,command:n,parameter:r,context:o},function(t){return e(t?{results:t,frameElement:a}:null)},i)})}),i.then(function(e){a(Rl(e,t))}).catch(o)}function _l(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var Sl=function e(){for(var t={},n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return r.forEach(function(n){if(n&&"object"===o(n)&&!Array.isArray(n))for(var r=0,a=Object.keys(n);r<a.length;r++){var i=a[r]
!t.hasOwnProperty(i)||"object"!==o(n[i])||Array.isArray(t[i])?t[i]=n[i]:t[i]=e(t[i],n[i])}}),t},Ol=function(e,t){Object.assign(e,t),Object.keys(t).filter(function(e){return"function"==typeof t[e]}).forEach(function(n){e[n]=null
try{e[n]=t[n](e)}catch(e){}})},Ml=["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"],Pl=/^(?:[A-Za-z](?:[\x01-\x08\x0B\x0E-\x1F!-\.0-=\?-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*|(?:[:_\x80-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])(?:[\x2D\.0-:A-Z_a-z\x80-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF])*)$/,Il=/[a-z]/,jl=/[A-Z]/
function Bl(e){return!Ml.includes(e)&&Pl.test(e)&&Il.test(e[0])&&!jl.test(e)&&e.includes("-")}var ql=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],Ll=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(ql.includes(t)||Bl(t))return!0}return!1},zl={}
pe(zl,{createGrid:function(){return Jc},findElmsInContext:function(){return Ul},findNearbyElms:function(){return ld},findUp:function(){return Gl},findUpVirtual:function(){return Hl},focusDisabled:function(){return md},getComposedParent:function(){return Ac},getElementByReference:function(){return yd},getElementCoordinates:function(){return Cc},getElementStack:function(){return Ad},getModalDialog:function(){return cd},getNodeGrid:function(){return ud},getOverflowHiddenAncestors:function(){return Ql},getResolvedRefs:function(){return Nd},getRootNode:function(){return $l},getScrollOffset:function(){return Fc},getTabbableElements:function(){return Fd},getTargetRects:function(){return Rd},getTargetSize:function(){return _d},getTextElementStack:function(){return gf},getViewportSize:function(){return kc},getVisibleChildTextRects:function(){return hf},hasContent:function(){return Ef},hasContentVirtual:function(){return Df},hasLangText:function(){return xf},idrefs:function(){return zd},insertedIntoFocusOrder:function(){return Af},isCurrentPageLink:function(){return bd},isFixedPosition:function(){return Tc},isFocusable:function(){return kd},isHTML5:function(){return Tf},isHiddenForEveryone:function(){return Dc},isHiddenWithCSS:function(){return kf},isInTabOrder:function(){return Td},isInTextBlock:function(){return Sf},isInert:function(){return dd},isModalOpen:function(){return Pf},isMultiline:function(){return If},isNativelyFocusable:function(){return Cd},isNode:function(){return jf},isOffscreen:function(){return _c},isOpaque:function(){return Qf},isSkipLink:function(){return Yf},isVisible:function(){return eh},isVisibleOnScreen:function(){return Oc},isVisibleToScreenReaders:function(){return Rp},isVisualContent:function(){return bf},reduceToElementsBelowFloating:function(){return th},shadowElementsFromPoint:function(){return oh},urlPropsFromAttribute:function(){return lh},visuallyContains:function(){return nh},visuallyOverlaps:function(){return ch},visuallySort:function(){return wd}})
var Vl=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},$l=Vl,Ul=function(e){var t,n=e.context,r=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,s=xa(r)
return t=9===n.nodeType||11===n.nodeType?n:$l(n),Array.from(t.querySelectorAll(i+"["+a+"="+s+"]"))},Hl=function(e,t){var n
if(n=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(n=n.assignedSlot?n.assignedSlot:n.parentNode)&&11===n.nodeType&&(n=n.host)}while(n&&!Ra(n,t)&&n!==a.documentElement)
return n&&Ra(n,t)?n:null},Gl=function(e,t){return Hl(pu(e),t)}
function Wl(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var Kl=Ls(function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(Kl(e.parent))):t}),Ql=Kl,Yl={"aria-actions":{type:"idrefs",prop:"ariaActionsElements",allowEmpty:!0,global:!0},"aria-activedescendant":{type:"idref",prop:"ariaActiveDescendantElement",allowEmpty:!0},"aria-atomic":{type:"boolean",prop:"ariaAtomic",global:!0,caseInsensitive:!0},"aria-autocomplete":{type:"nmtoken",prop:"ariaAutoComplete",values:["inline","list","both","none"],caseInsensitive:!0},"aria-braillelabel":{type:"string",prop:"ariaBrailleLabel",allowEmpty:!0,global:!0},"aria-brailleroledescription":{type:"string",prop:"ariaBrailleRoleDescription",allowEmpty:!0,global:!0},"aria-busy":{type:"boolean",prop:"ariaBusy",global:!0,caseInsensitive:!1},"aria-checked":{type:"nmtoken",prop:"ariaChecked",values:["false","mixed","true","undefined"],caseInsensitive:!1},"aria-colcount":{type:"int",prop:"ariaColCount",minValue:-1},"aria-colindex":{type:"int",prop:"ariaColIndex",minValue:1},"aria-colspan":{type:"int",prop:"ariaColSpan",minValue:1},"aria-controls":{type:"idrefs",prop:"ariaControlsElements",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",prop:"ariaCurrent",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0,caseInsensitive:!1},"aria-describedby":{type:"idrefs",prop:"ariaDescribedByElements",allowEmpty:!0,global:!0},"aria-description":{type:"string",prop:"ariaDescription",allowEmpty:!0,global:!0},"aria-details":{type:"idrefs",prop:"ariaDetailsElements",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",prop:"ariaDisabled",global:!0,caseInsensitive:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0,caseInsensitive:!0,deprecated:!0},"aria-errormessage":{type:"idrefs",prop:"ariaErrorMessageElements",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",prop:"ariaExpanded",values:["true","false","undefined"],caseInsensitive:!0},"aria-flowto":{type:"idrefs",prop:"ariaFlowToElements",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0,caseInsensitive:!0,deprecated:!0},"aria-haspopup":{type:"nmtoken",prop:"ariaHasPopup",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0,caseInsensitive:!0},"aria-hidden":{type:"nmtoken",prop:"ariaHidden",values:["true","false","undefined"],global:!0,caseInsensitive:!0},"aria-invalid":{type:"nmtoken",prop:"ariaInvalid",values:["grammar","false","spelling","true"],global:!0,caseInsensitive:!0},"aria-keyshortcuts":{type:"string",prop:"ariaKeyShortcuts",allowEmpty:!0,global:!0},"aria-label":{type:"string",prop:"ariaLabel",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",prop:"ariaLabelledByElements",allowEmpty:!0,global:!0},"aria-level":{type:"int",prop:"ariaLevel",minValue:1},"aria-live":{type:"nmtoken",prop:"ariaLive",values:["assertive","off","polite"],global:!0,caseInsensitive:!0},"aria-modal":{type:"boolean",prop:"ariaModal",caseInsensitive:!0},"aria-multiline":{type:"boolean",prop:"ariaMultiline",caseInsensitive:!1},"aria-multiselectable":{type:"boolean",prop:"ariaMultiSelectable",caseInsensitive:!0},"aria-orientation":{type:"nmtoken",prop:"ariaOrientation",values:["horizontal","undefined","vertical"],caseInsensitive:!0},"aria-owns":{type:"idrefs",prop:"ariaOwnsElements",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",prop:"ariaPlaceholder",allowEmpty:!0},"aria-posinset":{type:"int",prop:"ariaPosInSet",minValue:1},"aria-pressed":{type:"nmtoken",prop:"ariaPressed",values:["false","mixed","true","undefined"],caseInsensitive:!1},"aria-readonly":{type:"boolean",prop:"ariaReadOnly",caseInsensitive:!1},"aria-relevant":{type:"nmtokens",prop:"ariaRelevant",values:["additions","all","removals","text"],global:!0,caseInsensitive:!1},"aria-required":{type:"boolean",prop:"ariaRequired",caseInsensitive:!1},"aria-roledescription":{type:"string",prop:"ariaRoleDescription",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",prop:"ariaRowCount",minValue:-1},"aria-rowindex":{type:"int",prop:"ariaRowIndex",minValue:1},"aria-rowspan":{type:"int",prop:"ariaRowSpan",minValue:0},"aria-selected":{type:"nmtoken",prop:"ariaSelected",values:["false","true","undefined"],caseInsensitive:!0},"aria-setsize":{type:"int",prop:"ariaSetSize",minValue:-1},"aria-sort":{type:"nmtoken",prop:"ariaSort",values:["ascending","descending","none","other"],caseInsensitive:!1},"aria-valuemax":{type:"decimal",prop:"ariaValueMax"},"aria-valuemin":{type:"decimal",prop:"ariaValueMin"},"aria-valuenow":{type:"decimal",prop:"ariaValueNow"},"aria-valuetext":{type:"string",prop:"ariaValueText",allowEmpty:!0}},Xl={type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},Zl={type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},Jl={alert:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-expanded","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},dialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",deprecated:!0,allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},image:q({},Xl),img:q({},Xl),input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:q({},Zl),note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},presentation:q({},Zl),progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionfooter:{type:"structure",superclassRole:["section"]},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionheader:{type:"structure",superclassRole:["section"]},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-required","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-readonly","aria-required"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-actions","aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},ec={ariaAttrs:Yl,ariaRoles:q({},Jl,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"],namingProhibited:!0}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-glossary","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},base:{allowedRoles:!1,allowedAriaAttrs:[]},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0,namingProhibited:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"],allowedAriaAttrs:["aria-hidden"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","gridcell","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","separator","slider","switch","tab","treeitem"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1,namingProhibited:!0},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},col:{allowedRoles:!1,allowedAriaAttrs:[]},colgroup:{allowedRoles:!1,allowedAriaAttrs:[]},data:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:[],implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1,namingProhibited:!0},del:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0,namingProhibited:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","image","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"],namingProhibited:!0},figure:{variant:{figcaption:{matches:{hasChild:"figcaption"},allowedRoles:["doc-example"]},default:{allowedRoles:!0}},contentTypes:["flow"],namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["form","search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,allowedAriaAttrs:[]},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,allowedAriaAttrs:[]},i:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","image","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","math","menuitem","menuitemcheckbox","menuitemradio","meter","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,allowedAriaAttrs:[]},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label",namingProhibited:!0},legend:{allowedRoles:!1,namingProhibited:!0},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:[]},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:[]},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,allowedAriaAttrs:[]},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:[]},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img","image"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0,namingProhibited:!0},param:{allowedRoles:!1,allowedAriaAttrs:[]},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:["aria-hidden"]},pre:{contentTypes:["flow"],allowedRoles:!0,namingProhibited:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},rp:{allowedRoles:!0,namingProhibited:!0},rt:{allowedRoles:!0,namingProhibited:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:[]},search:{contentTypes:["flow"],allowedRoles:["form","group","none","presentation","region","search"]},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:[]},small:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},source:{allowedRoles:!1,allowedAriaAttrs:[]},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0,namingProhibited:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},style:{allowedRoles:!1,allowedAriaAttrs:[]},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},summary:{variant:{summaryForDetails:{matches:{isSummaryForDetails:!0},allowedRoles:!1},default:{allowedRoles:!0}},namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,allowedAriaAttrs:[]},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},title:{allowedRoles:!1,allowedAriaAttrs:[]},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,allowedAriaAttrs:[]},u:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingProhibited:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],allowedAriaAttrs:["aria-hidden"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},tc=q({},ec),nc=tc,rc=["idref","idrefs"],ac=[{source:"attribute",getValue:function(e,t,n){var r=t.type,a=e.attr(n)
if(!rc.includes(r))return a
if(a)return a
var o=ic(e,t)
return(Array.isArray(o)?o.length:o)?null:a}},{source:"property",getValue:ic},{source:"internals",getValue:function(e,t){var n=t.prop
return n&&e.elementInternals?e.elementInternals[n]:null}}]
function oc(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=nc.ariaAttrs[t]
if(!a)return{value:null,source:null}
var o,i=a.type,s=Dm(e).vNode,u=r.lowercase,l=te(ac)
try{for(l.s();!(o=l.n()).done;){var c=o.value,d=c.source,p=(0,c.getValue)(s,a,t)
if(null!=p)return"string"==typeof p?("string"!==i&&(p=p.trim()),p=u||a.caseInsensitive?p.toLowerCase():p):p=p instanceof n.Node?p.nodeName:"["+Array.from(p).map(function(e){return e.nodeName}).join(",")+"]",{value:p,source:d}}}catch(e){l.e(e)}finally{l.f()}return{value:null,source:null}}function ic(e,t){var n=t.prop
return n&&e.actualNode?e.actualNode[n]:null}var sc=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,uc=/(\w+)\((\d+)/
function lc(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function cc(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function dc(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function pc(e){return!!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function fc(e){return"true"===oc(e,"aria-hidden").value}function hc(e){return"0"===e.getComputedStylePropertyValue("opacity")}function mc(e){var t=Zh(e.actualNode),n=parseInt(e.getComputedStylePropertyValue("height")),r=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===n||0===r)}function gc(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=e.getComputedStylePropertyValue("position")
if("fixed"===t)return!1
var n=Ql(e)
if(!n.length)return!1
var r=e.boundingClientRect
return n.some(function(n){if("absolute"===t&&!function(e,t){for(var n=e.parent;n&&n!==t;){if(["relative","sticky"].includes(n.getComputedStylePropertyValue("position")))return!0
n=n.parent}return!1}(e,n)&&"static"===n.getComputedStylePropertyValue("position"))return!1
var a=n.boundingClientRect
return a.width<2||a.height<2||!Wl(r,a)})}function vc(e){var t=e.getComputedStylePropertyValue("clip").match(sc),n=e.getComputedStylePropertyValue("clip-path").match(uc)
if(t&&5===t.length){var r=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function bc(e,t){var n=Pu(e,"map")
if(!n)return!0
var r=n.attr("name")
if(!r)return!0
var a=Vl(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=Vm(i._tree,'img[usemap="#'.concat(xa(r),'"]'))
return!o||!o.length||o.some(function(e){return!t(e)})}function yc(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find(function(e){return"summary"===e.props.nodeName})!==e)&&!e.parent.hasAttr("open")}var wc=[cc,dc,pc,yc]
function Dc(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor,a=void 0!==r&&r
return e=Dm(e).vNode,n?Ec(e,a):xc(e,a)}var Ec=Ls(function(e,t){return!(!lc(e)&&(!e.actualNode||!wc.some(function(n){return n(e,{isAncestor:t})})&&e.actualNode.isConnected))}),xc=Ls(function(e,t){return!!Ec(e,t)||!!e.parent&&xc(e.parent,!0)}),Ac=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var n=t.parentNode
if(1===n.nodeType)return n
if(n.host)return n.host}return null},Fc=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,n=e.body
return{left:t&&t.scrollLeft||n&&n.scrollLeft||0,top:t&&t.scrollTop||n&&n.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},Cc=function(e){var t=Fc(a),n=t.left,r=t.top,o=e.getBoundingClientRect()
return{top:o.top+r,right:o.right+n,bottom:o.bottom+r,left:o.left+n,width:o.right-o.left,height:o.bottom-o.top}},kc=function(e){var t=e.document,n=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(n)return{width:n.clientWidth,height:n.clientHeight}
var r=t.body
return{width:r.clientWidth,height:r.clientHeight}}
function Tc(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).skipAncestors,n=Dm(e).vNode
return!!n&&(t?Rc(n):Nc(n))}var Rc=Ls(function(e){return"fixed"===e.getComputedStylePropertyValue("position")}),Nc=Ls(function(e){return!!Rc(e)||!!e.parent&&Nc(e.parent)}),_c=function(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=Dm(e).domNode
if(t){var r=a.documentElement,o=n.getComputedStyle(t),i=n.getComputedStyle(a.body||r).getPropertyValue("direction"),s=Tc(t),u=s?t.getBoundingClientRect():Cc(t)
if(0===u.top&&0===u.bottom)return!1
if(0===u.left&&0===u.right)return!1
if(u.bottom<=0&&(function(e,t){for(e=Ac(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Ac(e)}return!0}(t,u.bottom)||"absolute"===o.position))return!0
var l=kc(n)
if(s&&u.top>=l.height)return!0
var c=Math.max(r.scrollWidth,l.width)
return!(!s&&"rtl"!==i||!(u.left>=c))||!(!s&&"ltr"!==i||!(u.right<=0))}},Sc=[hc,mc,gc,vc,_c]
function Oc(e){return e=Dm(e).vNode,Mc(e)}var Mc=Ls(function(e,t){return e.actualNode&&"area"===e.props.nodeName?!bc(e,Mc):!Dc(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!Sc.some(function(n){return n(e,{isAncestor:t})}))&&(!e.parent||Mc(e.parent,!0))})
function Pc(e,t){var r=Math.min(e.top,t.top),a=Math.max(e.right,t.right),o=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left)
return new n.DOMRect(i,r,a-i,o-r)}function Ic(e,t){var n=e.x,r=e.y,a=t.top,o=t.right,i=t.bottom,s=t.left
return r>=a&&n<=o&&r<=i&&n>=s}var jc={}
function Bc(e,t){var r=Math.max(e.left,t.left),a=Math.min(e.right,t.right),o=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom)
return r>=a||o>=i?null:new n.DOMRect(r,o,a-r,i-o)}function qc(e){var t=e.left,r=e.top,a=e.width,o=e.height
return new n.DOMPoint(t+a/2,r+o/2)}pe(jc,{getBoundingRect:function(){return Pc},getIntersectionRect:function(){return Bc},getOffset:function(){return Vc},getRectCenter:function(){return qc},hasVisualOverlap:function(){return Hc},isPointInRect:function(){return Ic},rectHasMinimumSize:function(){return zc},rectsOverlap:function(){return Wl},splitRects:function(){return Gc}})
var Lc=.05
function zc(e,t){var n=t.width,r=t.height
return n+Lc>=e&&r+Lc>=e}function Vc(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,r=Rd(e),a=Rd(t)
return r.length&&a.length?r.reduce(function(e,r){var o,i=qc(r),s=te(a)
try{for(s.s();!(o=s.n()).done;){var u=o.value
if(Ic(i,u))return 0
var l=Uc(i,$c(i,u))
e=Math.min(e,l)}}catch(e){s.e(e)}finally{s.f()}var c=_d(t)
if(zc(2*n,c))return e
var d=Uc(i,qc(a.reduce(Pc)))-n
return Math.max(0,Math.min(e,d))},1/0):null}function $c(e,t){return{x:e.x<t.left?t.left:e.x>t.right?t.right:e.x,y:e.y<t.top?t.top:e.y>t.bottom?t.bottom:e.y}}function Uc(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function Hc(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return!(n.left>=r.right||n.right<=r.left||n.top>=r.bottom||n.bottom<=r.top)&&wd(e,t)>0}function Gc(e,t){var n,r=Array.isArray(e)?e:[e],a=te(t)
try{var o=function(){var e=n.value
if((r=r.reduce(function(t,n){return t.concat(function(e,t){var n,r,a=e.top,o=e.left,i=e.bottom,s=e.right,u=a<t.bottom&&i>t.top,l=o<t.right&&s>t.left,c=[]
if(Wc(t.top,a,i)&&l&&c.push({top:a,left:o,bottom:t.top,right:s}),Wc(t.right,o,s)&&u&&c.push({top:a,left:t.right,bottom:i,right:s}),Wc(t.bottom,a,i)&&l&&c.push({top:t.bottom,right:s,bottom:i,left:o}),Wc(t.left,o,s)&&u&&c.push({top:a,left:o,bottom:i,right:t.left}),0===c.length){if(r=t,(n=e).top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right)return[]
c.push(e)}return c.map(Kc)}(n,e))},[])).length>4e3)throw new Error("splitRects: Too many rects")}
for(a.s();!(n=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return r}var Wc=function(e,t,n){return e>t&&e<n}
function Kc(e){return new n.DOMRect(e.left,e.top,e.right-e.left,e.bottom-e.top)}var Qc=0,Yc=.1,Xc=.2,Zc=0
function Jc(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(du.get("gridCreated")&&!r)return aa.gridSize
if(du.set("gridCreated",!0),!r){var o=pu(a.documentElement)
if(o||(o=new fh(a.documentElement)),Zc=0,o._stackingOrder=[rd(Qc,!0,Zc++,null)],null!=t||(t=new id),od(t,o),Zh(o.actualNode)){var s=new id(o)
o._subGrid=s}}for(var u=a.createTreeWalker(e,n.NodeFilter.SHOW_ELEMENT,null,!1),l=r?u.nextNode():u.currentNode;l;){var c=pu(l)
c&&c.parent?r=c.parent:l.assignedSlot?r=pu(l.assignedSlot):l.parentElement?r=pu(l.parentElement):l.parentNode&&pu(l.parentNode)&&(r=pu(l.parentNode)),c||(c=new i.VirtualNode(l,r)),c._stackingOrder=nd(c,r,Zc++)
var d=ad(c,r),p=d?d._subGrid:t
if(Zh(c.actualNode)){var f=new id(c)
c._subGrid=f}var h=c.boundingClientRect
0!==h.width&&0!==h.height&&Oc(l)&&od(p,c),Ll(l)&&Jc(l.shadowRoot,p,c),l=u.nextNode()}return aa.gridSize}function ed(e,t){var n=e.getComputedStylePropertyValue("position"),r=e.getComputedStylePropertyValue("z-index")
if("fixed"===n||"sticky"===n)return!0
if("auto"!==r&&"static"!==n)return!0
if("1"!==e.getComputedStylePropertyValue("opacity"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-transform")||e.getComputedStylePropertyValue("-ms-transform")||e.getComputedStylePropertyValue("transform")||"none"))return!0
var a=e.getComputedStylePropertyValue("mix-blend-mode")
if(a&&"normal"!==a)return!0
var o=e.getComputedStylePropertyValue("filter")
if(o&&"none"!==o)return!0
var i=e.getComputedStylePropertyValue("perspective")
if(i&&"none"!==i)return!0
var s=e.getComputedStylePropertyValue("clip-path")
if(s&&"none"!==s)return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask")||e.getComputedStylePropertyValue("mask")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-image")||e.getComputedStylePropertyValue("mask-image")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-border")||e.getComputedStylePropertyValue("mask-border")||"none"))return!0
if("isolate"===e.getComputedStylePropertyValue("isolation"))return!0
var u=e.getComputedStylePropertyValue("will-change")
if("transform"===u||"opacity"===u)return!0
if("touch"===e.getComputedStylePropertyValue("-webkit-overflow-scrolling"))return!0
var l=e.getComputedStylePropertyValue("contain")
return!!["layout","paint","strict","content"].includes(l)||!("auto"===r||!td(t))}function td(e){if(!e)return!1
var t=e.getComputedStylePropertyValue("display")
return["flex","inline-flex","grid","inline-grid"].includes(t)}function nd(e,t,n){var r=t._stackingOrder.slice(),a=ed(e,t),o="static"!==e.getComputedStylePropertyValue("position")
if(a||o){var i=r.findIndex(function(e){return!!e.pseudo});-1!==i&&r.splice(i)}var s=function(e,t){var n=function(e,t){return"static"!==e.getComputedStylePropertyValue("position")||td(t)?e.getComputedStylePropertyValue("z-index"):"auto"}(e,t)
if(!["auto","0"].includes(n))return parseInt(n)
if("none"!==e.getComputedStylePropertyValue("float"))return Yc
var r=ed(e,t),a="static"!==e.getComputedStylePropertyValue("position")
return r||a?Xc:null}(e,t)
return null!==s&&r.push(rd(s,!a,n,e)),r}function rd(e,t,n,r){return{stackLevel:e,pseudo:t,treeOrder:n,vNode:r}}function ad(e,t){for(var n=null,r=[e];t;){if(Zh(t.actualNode)){n=t
break}if(t._scrollRegionParent){n=t._scrollRegionParent
break}r.push(t),t=pu(t.actualNode.parentElement||t.actualNode.parentNode)}return r.forEach(function(e){return e._scrollRegionParent=n}),n}function od(e,t){var n=Ql(t)
t.clientRects.forEach(function(r){var a,o=n.reduce(function(e,t){return e&&Bc(e,t.boundingClientRect)},r)
if(o){null!==(a=t._grid)&&void 0!==a||(t._grid=e)
var i=e.getGridPositionOfRect(o)
e.loopGridPosition(i,function(e){e.includes(t)||e.push(t)})}})}var id=J(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
X(this,e),this.container=t,this.cells=[]},[{key:"toGridIndex",value:function(e){return Math.floor(e/aa.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,n,r=e.x,a=e.y
Da(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),i=this.toGridIndex(r)
Da(Ic({y:o,x:i},this.boundaries),"Element midpoint exceeds the grid bounds")
var s=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(n=s[i-s._negativeIndex])&&void 0!==n?n:[]}},{key:"loopGridPosition",value:function(e,t){var n=e,r=n.left,a=n.right,o=n.top,i=n.bottom
this.boundaries&&(e=Pc(this.boundaries,e)),this.boundaries=e,sd(this.cells,o,i,function(e,n){sd(e,r,a,function(e,r){t(e,{row:n,col:r})})})}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,r=e.right,a=e.bottom,o=e.left,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-i),r=this.toGridIndex(r+i-1),a=this.toGridIndex(a+i-1),o=this.toGridIndex(o-i),new n.DOMRect(o,t,r-o,a-t)}}])
function sd(e,t,n,r){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var i=t-e._negativeIndex,s=n-e._negativeIndex,u=i;u<=s;u++){var l,c
null!==(c=e[l=u])&&void 0!==c||(e[l]=[]),r(e[u],u+e._negativeIndex)}}function ud(e){return Jc(),Dm(e).vNode._grid}function ld(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=ud(e)
if(null==r||null===(t=r.cells)||void 0===t||!t.length)return[]
var a=e.boundingClientRect,o=Tc(e),i=r.getGridPositionOfRect(a,n),s=[]
return r.loopGridPosition(i,function(t){var n,r=te(t)
try{for(r.s();!(n=r.n()).done;){var a=n.value
a&&a!==e&&!s.includes(a)&&o===Tc(a)&&s.push(a)}}catch(e){r.e(e)}finally{r.f()}}),s}var cd=Ls(function(){var e
if(!i._tree)return null
var t=_m(i._tree[0],"dialog[open]",function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left+1,t.top+1).includes(e.actualNode)&&Oc(e)})
return t.length?t.find(function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left-10,t.top-10).includes(e.actualNode)})||(null!==(e=t.find(function(e){var t,r=null!==(t=function(e){Jc()
var t=i._tree[0]._grid,r=new n.DOMRect(0,0,n.innerWidth,n.innerHeight)
if(t)for(var a=0;a<t.cells.length;a++){var o=t.cells[a]
if(o)for(var s=0;s<o.length;s++){var u=o[s]
if(u)for(var l=0;l<u.length;l++){var c=u[l],d=Bc(c.boundingClientRect,r)
if("html"!==c.props.nodeName&&c!==e&&"none"!==c.getComputedStylePropertyValue("pointer-events")&&d)return{vNode:c,rect:d}}}}}(e))&&void 0!==t?t:{},o=r.vNode,s=r.rect
return!!o&&!a.elementsFromPoint(s.left+1,s.top+1).includes(o.actualNode)}))&&void 0!==e?e:null):null})
function dd(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor
return n?pd(e,r):fd(e,r)}var pd=Ls(function(e,t){if(e.hasAttr("inert"))return!0
if(!t&&e.actualNode){var n=cd()
if(n&&!_l(n,e))return!0}return!1}),fd=Ls(function(e,t){return!!pd(e,t)||!!e.parent&&fd(e.parent,!0)}),hd=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],md=function(e){var t,n=Dm(e).vNode
if(t=n.props.nodeName,hd.includes(t)&&n.hasAttr("disabled")||dd(n))return!0
for(var r=n.parent,a=[],o=!1;r&&r.shadowId===n.shadowId&&!o&&(a.push(r),"legend"!==r.props.nodeName);){if(void 0!==r._inDisabledFieldset){o=r._inDisabledFieldset
break}"fieldset"===r.props.nodeName&&r.hasAttr("disabled")&&(o=!0),r=r.parent}return a.forEach(function(e){return e._inDisabledFieldset=o}),!!o||"area"!==n.props.nodeName&&!!n.actualNode&&Dc(n)},gd=/^\/\#/,vd=/^#[!/]/
function bd(e){var t,r=e.getAttribute("href")
if(!r||"#"===r)return!1
if(gd.test(r))return!0
var a=e.hash,o=e.protocol,i=e.hostname,s=e.port,u=e.pathname
if(vd.test(a))return!1
if("#"===r.charAt(0))return!0
if("string"!=typeof(null===(t=n.location)||void 0===t?void 0:t.origin)||-1===n.location.origin.indexOf("://"))return null
var l,c=n.location.origin+n.location.pathname
return l=i?"".concat(o,"//").concat(i).concat(s?":".concat(s):""):n.location.origin,(l+=u?("/"!==u[0]?"/":"")+u:n.location.pathname)===c}function yd(e,t){var n=Dm(e).vNode.attr(t)
if(!n)return null
if("href"===t&&!bd(e))return null;-1!==n.indexOf("#")&&(n=decodeURIComponent(n.substr(n.indexOf("#")+1)))
var r=a.getElementById(n)
return r||((r=a.getElementsByName(n)).length?r[0]:null)}function wd(e,t){Jc()
for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<r;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a].stackLevel>e._stackingOrder[a].stackLevel)return 1
if(t._stackingOrder[a].stackLevel<e._stackingOrder[a].stackLevel)return-1
if(t._stackingOrder[a].treeOrder!==e._stackingOrder[a].treeOrder)return t._stackingOrder[a].treeOrder-e._stackingOrder[a].treeOrder}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var s=[];o;)s.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!s.find(function(e){return e.root===i.getRootNode()});)i=i.getRootNode().host
if((o=s.find(function(e){return e.root===i.getRootNode()}).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var u=n.Node,l=u.DOCUMENT_POSITION_FOLLOWING,c=u.DOCUMENT_POSITION_CONTAINS,d=u.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&l?1:-1,h=p&c||p&d,m=Dd(e),g=Dd(t)
return m===g||h?f:g-m}function Dd(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:Ed(e)?1:0}function Ed(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=Ed(e.parent)
return e._isFloated=t,t}function xd(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=qc(t),o=e.getCellFromPoint(r)||[],i=Math.floor(r.x),s=Math.floor(r.y),u=o.filter(function(e){return e.clientRects.some(function(e){var t=e.left,n=e.top
return i<Math.floor(t+e.width)&&i>=Math.floor(t)&&s<Math.floor(n+e.height)&&s>=Math.floor(n)})}),l=e.container
return l&&(u=xd(l._grid,l.boundingClientRect,!0).concat(u)),n||(u=u.sort(wd).map(function(e){return e.actualNode}).concat(a.documentElement).filter(function(e,t,n){return n.indexOf(e)===t})),u}var Ad=function(e){var t=ud(e)
return t?xd(t,pu(e).boundingClientRect):[]}
function Fd(e){return Vm(e,"*").filter(function(e){var t=e.isFocusable,n=Fm(e.attr("tabindex"))
return null!==n?t&&n>=0:t})}var Cd=function(e){var t=Dm(e).vNode
if(!t||md(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!Vm(t,"summary").length}return!1}
function kd(e){var t=Dm(e).vNode
return!(1!==t.props.nodeType||md(t)||!Cd(t)&&null===Fm(t.attr("tabindex")))}function Td(e){var t=Dm(e).vNode
return 1===t.props.nodeType&&!(Fm(t.attr("tabindex"))<=-1)&&kd(t)}var Rd=Ls(function(e){var t="inline"===e.getComputedStylePropertyValue("display")?e.clientRects:[e.boundingClientRect],n=ld(e).filter(function(t){return Hc(e,t)&&"none"!==t.getComputedStylePropertyValue("pointer-events")&&!function(e,t){return _l(e,t)&&!Td(t)}(e,t)})
return n.length?Gc(t,n.map(function(e){return"inline"===e.getComputedStylePropertyValue("display")?e.clientRects:e.boundingClientRect}).flat(1/0)):t})
function Nd(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).self,r=void 0===n||n,a=Dm(e),o=a.vNode,i=a.domNode
try{var s,u=function(e,t){var n,r=(null!==(n=nc.ariaAttrs[t])&&void 0!==n?n:{}).prop
if(r&&e.actualNode){var a=e.actualNode[r]
if(null!=a)return a}var o=e.attr(t)
if(null!==o)return o
if(r&&e.elementInternals){var i=e.elementInternals[r]
if(null!=i)return i}return null}(o,t)
if(!u)return[]
if("string"==typeof u){var l=$l(i)
s=hh(u).map(function(e){return l.getElementById(e)})}else s=Array.from(u)
return r||(s=s.filter(function(e){return e!==i})),s.map(function(e){return pu(e)||null})}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes",{cause:e})}}var _d=Ls(function(e,t){return function(e,t){return e.reduce(function(e,n){var r=zc(t,e)
return r!==zc(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n})}(Rd(e),t)}),Sd={}
function Od(e,t){var n=nc.ariaAttrs[t]
if(!n)throw new TypeError("Attribute ".concat(t," is not an ARIA attribute"))
var r=Dm(e).vNode
return function(e,t){return e.hasAttr(t)}(r,t)||function(e,t){var n=t.prop
return!(!n||!e.actualNode)&&null!=e.actualNode[n]}(r,n)||function(e,t){var n=t.prop
return!(!n||!e.elementInternals)&&null!=e.elementInternals[n]}(r,n)}pe(Sd,{accessibleText:function(){return Kp},accessibleTextVirtual:function(){return tf},autocomplete:function(){return of},formControlValue:function(){return Hp},formControlValueMethods:function(){return $p},hasUnicode:function(){return _p},isHumanInterpretable:function(){return af},isIconLigature:function(){return Sp},isValidAutocomplete:function(){return sf},label:function(){return df},labelText:function(){return Qp},labelVirtual:function(){return cf},nativeElementType:function(){return pf},nativeTextAlternative:function(){return ef},nativeTextMethods:function(){return Jp},removeUnicode:function(){return rf},sanitize:function(){return Wd},subtreeText:function(){return Wp},titleText:function(){return Fp},unsupported:function(){return Tp},visible:function(){return lf},visibleTextNodes:function(){return ff},visibleVirtual:function(){return Op}})
var Md=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Dm(e).vNode
return 1!==(null==n?void 0:n.props.nodeType)||1!==n.props.nodeType||t.inLabelledByContext||t.inControlContext||!Od(n,"aria-labelledby")?"":Nd(n,"aria-labelledby").filter(function(e){return e}).reduce(function(e,r){var a=tf(r,q({inLabelledByContext:!0,startNode:t.startNode||n},t))
return e?"".concat(e," ").concat(a):a},"")}
function Pd(e){var t=Dm(e).vNode
return 1!==(null==t?void 0:t.props.nodeType)?"":oc(t,"aria-label").value||""}var Id=function(e){var t=nc.ariaRoles[e]
return!!t&&!!t.unsupported},jd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAbstract,r=t.flagUnsupported,a=void 0!==r&&r,o=nc.ariaRoles[e],i=Id(e)
return!(!o||a&&i||!n&&"abstract"===o.type)},Bd=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fallback,r=t.abstracts,a=t.dpub
if(1!==(e=e instanceof sa?e:pu(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase()
return(n?hh(o):[o]).find(function(e){return!(!a&&"doc-"===e.substr(0,4))&&jd(e,{allowAbstract:r})})||null},qd=function(e){return Object.keys(nc.htmlElms).filter(function(t){var n=nc.htmlElms[t]
return n.contentTypes?n.contentTypes.includes(e):!!n.variant&&!(!n.variant.default||!n.variant.default.contentTypes)&&n.variant.default.contentTypes.includes(e)})},Ld=function(){return du.get("globalAriaAttrs",function(){return Object.keys(nc.ariaAttrs).filter(function(e){return nc.ariaAttrs[e].global})})},zd=function(e,t){e=e.actualNode||e
try{var n=$l(e),r=[],a=e.getAttribute(t)
if(a){a=hh(a)
for(var o=0;o<a.length;o++)r.push(n.getElementById(a[o]))}return r}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},Vd=Ls(function(e){for(var t=[],n=e.rows,r=0,a=n.length;r<a;r++){var o=n[r].cells
t[r]=t[r]||[]
for(var i=0,s=0,u=o.length;s<u;s++)for(var l=0;l<o[s].colSpan;l++){for(var c=o[s].getAttribute("rowspan"),d=0===parseInt(c)||0===o[s].rowspan?n.length:o[s].rowSpan,p=0;p<d;p++){for(t[r+p]=t[r+p]||[];t[r+p][i];)i++
t[r+p][i]=o[s]}i++}}return t}),$d=Ls(function(e,t){var n,r
for(t||(t=Vd(Gl(e,"table"))),n=0;n<t.length;n++)if(t[n]&&-1!==(r=t[n].indexOf(e)))return{x:r,y:n}})
function Ud(e){var t=Dm(e),n=t.vNode,r=t.domNode,a=n.attr("scope"),o=Bd(n)
if(!["td","th"].includes(n.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===o)return"col"
if("rowheader"===o)return"row"
if("col"===a||"row"===a)return a
if("th"!==n.props.nodeName)return!1
if(!n.actualNode)return"auto"
var i=Vd(Gl(r,"table")),s=$d(r,i)
return i[s.y].every(function(e){return"TH"===e.nodeName.toUpperCase()})?"col":i.map(function(e){return e[s.x]}).every(function(e){return e&&"TH"===e.nodeName.toUpperCase()})?"row":"auto"}var Hd=function(e){return-1!==["col","auto"].indexOf(Ud(e))},Gd=function(e){return["row","auto"].includes(Ud(e))},Wd=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},Kd=function(){return du.get("sectioningContentSelector",function(){return qd("sectioning").map(function(e){return"".concat(e,":not([role])")}).join(", ")+" , [role=article], [role=complementary], [role=navigation], [role=region]"})},Qd=function(){return du.get("sectioningContentPlusMainSelector",function(){return Kd()+" , main:not([role]), [role=main]"})}
function Yd(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).checkTitle,n=void 0!==t&&t
return!!(Wd(Md(e))||Wd(Pd(e))||n&&1===(null==e?void 0:e.props.nodeType)&&Wd(e.attr("title")))}var Xd={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:function(e){return Pu(e.parent,Kd())&&!Yd(e,{checkTitle:!0})?null:"complementary"},body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return Pu(e,Qd())?null:"contentinfo"},form:function(e){return Yd(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return Pu(e,Qd())?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),n=Ld().find(function(t){return e.hasAttr(t)})
return!t||n||kd(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var n=zd(e.actualNode,"list").filter(function(e){return!!e})[0]
t=n&&"datalist"===n.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",meter:"meter",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",search:"search",section:function(e){return Yd(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=Pu(e,"table"),n=Bd(t)
return["grid","treegrid"].includes(n)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return Hd(e)?"columnheader":Gd(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"}
function Zd(e,t){var n=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===n)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var r=t.substring(1,t.length-1)
return new RegExp(r).test(e)}}return t===e}function Jd(e,t){return Zd(e,t)}var ep=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every(function(n){return Jd(e(n),t[n])})},tp=function(e,t){return e=Dm(e).vNode,ep(function(t){return e.attr(t)},t)}
function np(e,t){return!!t(e)}var rp=function(e,t){return Jd(Bd(e),t)},ap=function(e,t){return Jd(!!tf(e),t)}
function op(e,t){return e.children.some(function(e){return xu(e,t)})}var ip=function(e,t){return Jd(bp(e),t)},sp=["article","complementary","main","navigation","region"]
function up(e,t){var n=du.get("sectioningElms",function(){return qd("sectioning").concat("main")})
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
for(e=e.parent;e;){var r,a=e.props.nodeName,o=Bd(e)
if(["presentation","none"].includes(o)&&Ep(e)&&(o=null),!o&&null!==(r=e.elementInternals)&&void 0!==r&&r.role&&(o=e.elementInternals.role),!o&&n.includes(a)||sp.includes(o))return Jd(!0,t)
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return Jd(!1,t)}function lp(e,t){if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
return e.parent&&"details"===e.parent.props.nodeName?Jd(e.parent.children.find(function(e){return"summary"===e.props.nodeName})===e,t):Jd(!1,t)}var cp=function(e,t){return Jd((e=Dm(e).vNode).props.nodeName,t)},dp=function(e,t){return e=Dm(e).vNode,ep(function(t){return e.props[t]},t)},pp=function(e,t){return Jd(xp(e),t)},fp={attributes:tp,condition:np,explicitRole:rp,hasAccessibleName:ap,hasChild:op,implicitRole:ip,inSectioningContent:up,isSummaryForDetails:lp,nodeName:cp,properties:dp,semanticRole:pp},hp=function e(t,n){return t=Dm(t).vNode,Array.isArray(n)?n.some(function(n){return e(t,n)}):"string"==typeof n?xu(t,n):Object.keys(n).every(function(e){if(!fp[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var r=fp[e],a=n[e]
return r(t,a)})},mp=function(e,t){return hp(e,t)}
mp.attributes=tp,mp.condition=np,mp.explicitRole=rp,mp.fromDefinition=hp,mp.fromFunction=ep,mp.fromPrimative=Jd,mp.fromPrimitive=Zd,mp.hasAccessibleName=ap,mp.hasChild=op,mp.implicitRole=ip,mp.inSectioningContent=up,mp.isSummaryForDetails=lp,mp.nodeName=cp,mp.properties=dp,mp.semanticRole=pp
var gp=mp,vp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noMatchAccessibleName,n=void 0!==t&&t,r=nc.htmlElms[e.props.nodeName]
if(!r)return{}
if(!r.variant)return r
var a=r.variant,o=O(r,m)
for(var i in a)if(a.hasOwnProperty(i)&&"default"!==i){for(var s=a[i],u=s.matches,l=O(s,g),c=Array.isArray(u)?u:[u],d=0;d<c.length&&n;d++)if(c[d].hasOwnProperty("hasAccessibleName"))return r
if(gp(e,u))for(var p in l)l.hasOwnProperty(p)&&(o[p]=l[p])}for(var f in a.default)a.default.hasOwnProperty(f)&&void 0===o[f]&&(o[f]=a.default[f])
return o},bp=function(e){var t,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).chromium,r=Dm(e).vNode
if(!r)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
if(null!==(t=r.elementInternals)&&void 0!==t&&t.role)return r.elementInternals.role
var a=r.props.nodeName,o=Xd[a]
return!o&&n?vp(r).chromiumRole||null:"function"==typeof o?o(r):o||null},yp={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function wp(e,t){var n=yp[e.props.nodeName]
if(!n)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!n.includes(e.parent.props.nodeName))return null
var r=Bd(e.parent,t)
return["none","presentation"].includes(r)&&!Ep(e.parent)?r:r?null:wp(e.parent,t)}function Dp(e,t){var n=t.chromium,r=O(t,v),a=bp(e,{chromium:n})
return a?wp(e,r)||a:null}function Ep(e){return Ld().some(function(t){return e.hasAttr(t)})||kd(e)}var xp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noPresentational,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noImplicit,r=O(t,b),a=Dm(e).vNode
if(1!==a.props.nodeType)return null
var o=Bd(a,r)
return o?["presentation","none"].includes(o)&&Ep(a)?Bl(a.props.nodeName)||n?null:Dp(a,r):o:n?null:Dp(a,r)}(e,O(t,y))
return n&&["presentation","none"].includes(r)?null:r},Ap=["iframe"],Fp=function(e){var t=Dm(e).vNode
return 1===t.props.nodeType&&e.hasAttr("title")?!mp(t,Ap)&&["none","presentation"].includes(xp(t))?"":t.attr("title"):""},Cp=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).strict
if(1!==(e=e instanceof sa?e:pu(e)).props.nodeType)return!1
var n=xp(e),r=nc.ariaRoles[n]
return!(!r||!r.nameFromContent)||!t&&(!r||["presentation","none"].includes(n))},kp=function(e){var t=e.children
if(!t)throw new Error("getOwnedVirtual requires a virtual node")
if(Od(e,"aria-owns")){var n=Nd(e,"aria-owns").filter(function(e){return!!e}),r=n.filter(function(e,t){return n.indexOf(e)===t}),a=t.filter(function(e){return!r.includes(e)})
return[].concat(L(a),L(r))}return L(t)},Tp={accessibleNameFromFieldValue:["progressbar"]}
function Rp(e){return e=Dm(e).vNode,Np(e)}var Np=Ls(function(e,t){return!fc(e)&&!dd(e,{skipAncestors:!0,isAncestor:t})&&(e.actualNode&&"area"===e.props.nodeName?!bc(e,Np):!Dc(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||Np(e.parent,!0)))}),_p=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations,o=!1
return n&&(o||(o=Ba().test(e))),r&&(o||(o=/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e)||/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g.test(e))),a&&(o||(o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e))),o}
function Sp(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!Wd(o)||_p(o,{emoji:!0,nonBmp:!0}))return!1
var i=du.get("canvasContext",function(){return a.createElement("canvas").getContext("2d",{willReadFrequently:!0})}),s=i.canvas,u=du.get("fonts",function(){return{}}),l=n.getComputedStyle(e.parent.actualNode).getPropertyValue("font-family")
u[l]||(u[l]={occurrences:0,numLigatures:0})
var c=u[l]
if(c.occurrences>=r){if(c.numLigatures/c.occurrences===1)return!0
if(0===c.numLigatures)return!1}c.occurrences++
var d=30,p="".concat(d,"px ").concat(l)
i.font=p
var f=o.charAt(0),h=i.measureText(f).width
if(0===h)return c.numLigatures++,!0
if(h<30){var m=30/h
h*=m,p="".concat(d*=m,"px ").concat(l)}s.width=h,s.height=d,i.font=p,i.textAlign="left",i.textBaseline="top",i.fillText(f,0,0)
var g=new Uint32Array(i.getImageData(0,0,h,d).data.buffer)
if(!g.some(function(e){return e}))return c.numLigatures++,!0
i.clearRect(0,0,h,d),i.fillText(o,0,0)
var v=new Uint32Array(i.getImageData(0,0,h,d).data.buffer),b=g.reduce(function(e,t,n){return 0===t&&0===v[n]||0!==t&&0!==v[n]?e:++e},0),y=o.split("").reduce(function(e,t){return e+i.measureText(t).width},0),w=i.measureText(o).width
return b/g.length>=t&&1-w/y>=t&&(c.numLigatures++,!0)}var Op=function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=Dm(t).vNode,i=n?Rp:Oc,s=!t.actualNode||t.actualNode&&i(t),u=a.ignoreIconLigature,l=a.pixelThreshold,c=a.occurrenceThreshold,d=o.children.map(function(t){var o=t.props,i=o.nodeType,d=o.nodeValue,p=o.nodeName
return 3===i?d&&s?u&&Sp(t,l,c)?"":d:"":"br"===p?" ":r?void 0:e(t,n,!1,a)}).join("")
return Wd(d)},Mp=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],Pp=function(e){var t=(e=e instanceof sa?e:pu(e)).props.nodeName
return"textarea"===t||"input"===t&&!Mp.includes((e.attr("type")||"").toLowerCase())},Ip=function(e){return"select"===(e=e instanceof sa?e:pu(e)).props.nodeName},jp=function(e){return"textbox"===Bd(e)},Bp=function(e){return"listbox"===Bd(e)},qp=function(e){return"combobox"===Bd(e)},Lp=["progressbar","scrollbar","slider","spinbutton"],zp=function(e){var t=Bd(e)
return Lp.includes(t)},Vp=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],$p={nativeTextboxValue:function(e){var t=Dm(e).vNode
return Pp(t)&&t.props.value||""},nativeSelectValue:function(e){var t=Dm(e).vNode
if(!Ip(t))return""
var n=Vm(t,"option"),r=n.filter(function(e){return e.props.selected})
return r.length||r.push(n[0]),r.map(function(e){return Op(e)}).join(" ")||""},ariaTextboxValue:function(e){var t=Dm(e),n=t.vNode,r=t.domNode
return jp(n)?!r||r&&!Dc(r)?Op(n,!0):r.textContent:""},ariaListboxValue:Up,ariaComboboxValue:function(e,t){var n=Dm(e).vNode
if(!qp(n))return""
var r=kp(n).filter(function(e){return"listbox"===xp(e)})[0]
return r?Up(r,t):""},ariaRangeValue:function(e){var t=Dm(e).vNode
if(!zp(t)||!Od(t,"aria-valuenow"))return""
var n=+oc(t,"aria-valuenow").value
return isNaN(n)?"0":String(n)}}
function Up(e,t){var n=Dm(e).vNode
if(!Bp(n))return""
var r=kp(n).filter(function(e){return"option"===xp(e)&&"true"===oc(e,"aria-selected").value})
return 0===r.length?"":tf(r[0],t)}var Hp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode,r=Tp.accessibleNameFromFieldValue||[],a=xp(e)
if(t.startNode===e||!Vp.includes(a)||r.includes(a))return""
var o=Object.keys($p).map(function(e){return $p[e]}).reduce(function(n,r){return n||r(e,t)},"")
return t.debug&&oa(o||"{empty-value}",n,t),o},Gp=qd("phrasing").concat(["#text"]),Wp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=tf.alreadyProcessed
t.startNode=t.startNode||e
var r=t,a=r.strict,o=r.inControlContext,i=r.inLabelledByContext,s=xp(e),u=vp(e,{noMatchAccessibleName:!0}).contentTypes
return n(e,t)||1!==e.props.nodeType||null!=u&&u.includes("embedded")||Vp.includes(s)?"":t.subtreeDescendant||t.inLabelledByContext||Cp(e,{strict:a})?(a||(t=q({subtreeDescendant:!o&&!i},t)),kp(e).reduce(function(e,n){return function(e,t,n){var r=t.props.nodeName,a=tf(t,n)
return a?(Gp.includes(r)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}(e,n,t)},"")):""},Kp=function(e,t){return tf(pu(e),t)},Qp=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=tf.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||n(e,t))return""
t.startNode||(t.startNode=e)
var r=q({inControlContext:!0},t),a=e.elementInternals
if(a)try{return Array.from(a.labels).map(function(e){return Kp(e,r)}).filter(function(e){return""!==e}).join(" ")}catch(e){}var o,i=function(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return Ul({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}(e),s=Pu(e,"label")
return s?(o=[].concat(L(i),[s.actualNode])).sort(wm):o=i,o.map(function(e){return Kp(e,r)}).filter(function(e){return""!==e}).join(" ")},Yp={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function Xp(e,t){return t.attr(e)||""}function Zp(e,t,n){var r=t.actualNode,a=[e=e.toLowerCase(),r.nodeName.toLowerCase()].join(","),o=r.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?Kp(o,n):""}var Jp={valueText:function(e){return e.props.value||""},buttonDefaultText:function(e){return Yp[e.props.type]||""},tableCaptionText:Zp.bind(null,"caption"),figureText:Zp.bind(null,"figcaption"),svgTitleText:Zp.bind(null,"title"),fieldsetLegendText:Zp.bind(null,"legend"),altText:Xp.bind(null,"alt"),tableSummaryText:Xp.bind(null,"summary"),titleText:Fp,subtreeText:Wp,labelText:Qp,singleSpace:function(){return" "},placeholderText:Xp.bind(null,"placeholder")}
function ef(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(xp(e)))return""
var r=function(e){var t=vp(e,{noMatchAccessibleName:!0}).namingMethods||[],n=t.map(function(e){return Jp[e]}),r=e.elementInternals
if(r&&!t.includes("labelText"))try{r.labels&&n.push(Jp.labelText)}catch(e){}return n}(e),a=r.reduce(function(n,r){return n||r(e,t)},"")
return t.debug&&i.log(a||"{empty-value}",n,t),a}function tf(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=function(e,t){return t.startNode||(t=q({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=q({includeHidden:!Rp(e)},t)),t}(e,t),function(e,t){return!(!e||t.includeHidden&&!lc(e)||1!==e.props.nodeType||Rp(e))}(e,t))return""
if(function(e,t){var n,r=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(n=t.occurrenceThreshold)&&void 0!==n?n:t.occuranceThreshold
return!(3!==e.props.nodeType||!r)&&Sp(e,a,o)}(e,t))return""
var n=[Md,Pd,ef,Hp,Wp,nf,Fp].reduce(function(n,r){return t.startNode===e&&(n=Wd(n)),""!==n?n:r(e,t)},"")
return t.debug&&i.log(n||"{empty-value}",e.actualNode,t),n}function nf(e){return 3!==e.props.nodeType?"":e.props.nodeValue}tf.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var rf=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n&&(e=e.replace(Ba(),"")),r&&(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"").replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"").replace(/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},af=function(e){return function(e){return 0===Wd(e).length}(e)||function(e){return 1===e.length&&e.match(/\D/)}(e)||function(e){return["aa","abc"].includes(e.toLowerCase())}(e)||function(e){var t=rf(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return!Wd(t)}(e)?0:1},of={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},sf=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.looseTyped,r=void 0!==n&&n,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,s=void 0===i?[]:i,u=t.qualifiers,l=void 0===u?[]:u,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p,h=t.ignoredValues,m=void 0===h?[]:h
if(e=e.toLowerCase().trim(),(o=o.concat(of.stateTerms)).includes(e)||""===e)return!0
l=l.concat(of.qualifiers),s=s.concat(of.locations),d=d.concat(of.standaloneTerms),f=f.concat(of.qualifiedTerms)
var g=e.split(/\s+/g)
if("webauthn"===g[g.length-1]&&(g.pop(),0===g.length))return!1
if(!r&&(g[0].length>8&&"section-"===g[0].substr(0,8)&&g.shift(),s.includes(g[0])&&g.shift(),l.includes(g[0])&&(g.shift(),d=[]),1!==g.length))return!1
var v=g[g.length-1]
return m.includes(v)?void 0:d.includes(v)||f.includes(v)},uf=function(e){var t
return Od(e,"aria-labelledby")&&(t=Nd(e,"aria-labelledby").map(function(e){return e?Op(e):""}).join(" ").trim())||(t=oc(e,"aria-label").value)&&(t=Wd(t))?t:null},lf=function(e,t,n){return e=pu(e),Op(e,t,n)},cf=function(e){var t,n
if(n=uf(e))return n
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var r=xa(e.attr("id"))
if(n=(t=$l(e.actualNode).querySelector('label[for="'+r+'"]'))&&lf(t,!0))return n}return(n=(t=Pu(e,"label"))&&Op(t,!0))||null},df=function(e){return e=pu(e),cf(e)},pf=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],ff=function e(t){var n=Oc(t),r=[]
return t.children.forEach(function(t){3===t.actualNode.nodeType?n&&r.push(t):r=r.concat(e(t))}),r},hf=Ls(function(e){var t=pu(e),n=t.boundingClientRect,r=[],o=Ql(t)
return e.childNodes.forEach(function(e){if(3===e.nodeType&&""!==Wd(e.nodeValue)){var t=function(e){var t=a.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some(function(e){return!Ic(qc(e),t)})})(t,n)||r.push.apply(r,L(mf(t,o)))}}),r.length?r:mf([n],o)})
function mf(e,t){var n=[]
return e.forEach(function(e){if(!(e.width<1||e.height<1)){var r=t.reduce(function(e,t){return e&&Bc(e,t.boundingClientRect)},e)
r&&n.push(r)}}),n}var gf=function(e){var t=ud(e)
return t?hf(e).map(function(e){return xd(t,e)}):[]},vf=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],bf=function(e){var t=Dm(e).vNode,n=i.commons.aria.getExplicitRole(t)
if(n)return-1!==vf.indexOf(n)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},yf=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function wf(e){return!yf.includes(e.props.nodeName)&&e.children.some(function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()})}var Df=function e(t,n,r){return wf(t)||bf(t.actualNode)||!r&&!!uf(t)||!n&&t.children.some(function(t){return 1===t.actualNode.nodeType&&e(t)})},Ef=function(e,t,n){return e=pu(e),Df(e,t,n)}
function xf(e){return!(void 0!==e.children&&!wf(e))||(1===e.props.nodeType&&bf(e)?!!i.commons.text.accessibleTextVirtual(e):e.children.some(function(e){return!e.attr("lang")&&xf(e)&&!Dc(e)}))}function Af(e){var t=Dm(e).vNode
return Fm(t.attr("tabindex"))>-1&&kd(e)&&!Cd(e)}function Ff(e,t){var n=Dm(e),r=n.vNode,a=n.domNode
return r?(void 0===r._isHiddenWithCSS&&(r._isHiddenWithCSS=Cf(a,t)),r._isHiddenWithCSS):Cf(a,t)}function Cf(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=n.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=r.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=Ac(e)
return!(!i||a.includes(o))&&Ff(i,o)}var kf=Ff,Tf=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId},Rf=function(e){var t;(e instanceof sa||null!==(t=n)&&void 0!==t&&t.Node&&e instanceof n.Node)&&(e=i.commons.aria.getRole(e))
var r=nc.ariaRoles[e]
return(null==r?void 0:r.type)||null},Nf=["block","list-item","table","flex","grid"],_f=["inline-block","inline-flex","inline-grid"],Sf=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noLengthCompare,r=t.includeInlineBlock,a=void 0!==r&&r,o=Dm(e),i=o.vNode,s=o.domNode
if(Of(s)||!a&&function(e){var t=e.getComputedStylePropertyValue("display")
return _f.includes(t)}(i))return!1
var u=function(e){for(var t=Ac(e);t&&!Of(t);)t=Ac(t)
return pu(t)}(s),l="",c="",d=0
return Mf(u,function(e){if(e===u.actualNode)return!0
if(2===d)return!1
if(3===e.nodeType&&(l+=e.nodeValue),1===e.nodeType){var t=(e.nodeName||"").toUpperCase()
e===s&&(d=1)
var n=Of(e)
return(n||["BR","HR"].includes(t))&&(0===d?(l="",c=""):d=2),!(n||"none"===e.style.display||"hidden"===e.style.overflow||!["",null,"none"].includes(e.style.float)||!["",null,"relative"].includes(e.style.position))&&("widget"===Rf(e)?(c+=e.textContent,!1):void 0)}}),l=Wd(l),n?0!==l.length:(c=Wd(c),l.length>c.length)}
function Of(e){var t=Dm(e).vNode.getComputedStylePropertyValue("display")
return Nf.includes(t)||"table-"===t.substr(0,6)}function Mf(e,t){!1!==t(e.actualNode)&&e.children.forEach(function(e){return Mf(e,t)})}var Pf=function(e){var t=(e=e||{}).modalPercent||.75
if(du.get("isModalOpen"))return du.get("isModalOpen")
if(_m(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",Oc).length)return du.set("isModalOpen",!0),!0
for(var r,o=kc(n),s=o.width*t,u=o.height*t,l=(o.width-s)/2,c=(o.height-u)/2,d=[{x:l,y:c},{x:o.width-l,y:c},{x:o.width/2,y:o.height/2},{x:l,y:o.height-c},{x:o.width-l,y:o.height-c}].map(function(e){return Array.from(a.elementsFromPoint(e.x,e.y))}),p=function(){var e=d[f].find(function(e){var t=n.getComputedStyle(e)
return parseInt(t.width,10)>=s&&parseInt(t.height,10)>=u&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)})
if(e&&d.every(function(t){return t.includes(e)}))return du.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++)if(r=p())return r.v
du.set("isModalOpen",void 0)}
function If(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.ownerDocument.createRange()
n.setStart(e,0),n.setEnd(e,e.childNodes.length)
var r,a=0,o=0,i=te(n.getClientRects())
try{for(i.s();!(r=i.n()).done;){var s=r.value
if(!(s.height<=t))if(a>s.top+t)a=Math.max(a,s.bottom)
else{if(0!==o)return!0
a=s.bottom,o++}}}catch(e){i.e(e)}finally{i.f()}return!1}var jf=function(e){return e instanceof n.Node},Bf="color.incompleteData",qf={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
var n=du.get(Bf,function(){return{}})
return t&&(n[e]=t),n[e]},get:function(e){var t=du.get(Bf)
return null==t?void 0:t[e]},clear:function(){du.set(Bf,{})}},Lf=qf,zf=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return Lf.set("bgColor","imgNode"),!0
var a=(t=t||n.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
Lf.set("bgColor",i?"bgGradient":"bgImage")}return o},Vf=/^#[0-9a-f]{3,8}$/i,$f=/hsl\(\s*([-\d.]+)(rad|turn)/,Uf=(P=new WeakMap,I=new WeakMap,B=new WeakMap,U=new WeakMap,Z=new WeakMap,ee=new WeakMap,ae=new WeakSet,J(function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
if(X(this,e),$(this,ae),V(this,P,void 0),V(this,I,void 0),V(this,B,void 0),V(this,U,void 0),V(this,Z,void 0),V(this,ee,void 0),t instanceof Uf){var o=t.r,i=t.g,s=t.b
return this.r=o,this.g=i,this.b=s,void(this.alpha=t.alpha)}this.red=t,this.green=n,this.blue=r,this.alpha=a},[{key:"r",get:function(){return H(P,this)},set:function(e){G(P,this,e),G(U,this,Math.round(255*Wf(e,0,1)))}},{key:"g",get:function(){return H(I,this)},set:function(e){G(I,this,e),G(Z,this,Math.round(255*Wf(e,0,1)))}},{key:"b",get:function(){return H(B,this)},set:function(e){G(B,this,e),G(ee,this,Math.round(255*Wf(e,0,1)))}},{key:"red",get:function(){return H(U,this)},set:function(e){G(P,this,e/255),G(U,this,Wf(e,0,255))}},{key:"green",get:function(){return H(Z,this)},set:function(e){G(I,this,e/255),G(Z,this,Wf(e,0,255))}},{key:"blue",get:function(){return H(ee,this)},set:function(e){G(B,this,e/255),G(ee,this,Wf(e,0,255))}},{key:"toHexString",value:function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?n:"0"+n)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}},{key:"parseString",value:function(e){e=e.replace($f,function(e,t,n){var r=t+n
switch(n){case"rad":return e.replace(r,180*t/Math.PI)
case"turn":return e.replace(r,360*t)}})
try{var t
"Prototype"in n&&"Version"in n.Prototype&&(t=Array.from,Array.from=qs.default)
var r=new Os(e).toGamut({space:"srgb",method:"clip"}).to("srgb")
t&&(Array.from=t,t=null),this.r=r.r,this.g=r.g,this.b=r.b,this.alpha=+r.alpha}catch(t){throw Lf.set("colorParse",e),new Error('Unable to parse color "'.concat(e,'"'))}return this}},{key:"parseRgbString",value:function(e){this.parseString(e)}},{key:"parseHexString",value:function(e){e.match(Vf)&&![6,8].includes(e.length)&&this.parseString(e)}},{key:"parseColorFnString",value:function(e){this.parseString(e)}},{key:"getRelativeLuminance",value:function(){var e=this.r,t=this.g,n=this.b
return.2126*(e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4))}},{key:"getLuminosity",value:function(){return.3*this.r+.59*this.g+.11*this.b}},{key:"setLuminosity",value:function(e){var t=e-this.getLuminosity()
return W(ae,this,Hf).call(this,t).clip()}},{key:"getSaturation",value:function(){return Math.max(this.r,this.g,this.b)-Math.min(this.r,this.g,this.b)}},{key:"setSaturation",value:function(e){var t=new Uf(this),n=K([{name:"r",value:t.r},{name:"g",value:t.g},{name:"b",value:t.b}].sort(function(e,t){return e.value-t.value}),3),r=n[0],a=n[1],o=n[2]
return o.value>r.value?(a.value=(a.value-r.value)*e/(o.value-r.value),o.value=e):a.value=o.value=0,r.value=0,t[o.name]=o.value,t[r.name]=r.value,t[a.name]=a.value,t}},{key:"clip",value:function(){var e=new Uf(this),t=e.getLuminosity(),n=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b)
return n<0&&(e.r=t+(e.r-t)*t/(t-n),e.g=t+(e.g-t)*t/(t-n),e.b=t+(e.b-t)*t/(t-n)),r>1&&(e.r=t+(e.r-t)*(1-t)/(r-t),e.g=t+(e.g-t)*(1-t)/(r-t),e.b=t+(e.b-t)*(1-t)/(r-t)),e}}]))
function Hf(e){var t=new Uf(this)
return t.r+=e,t.g+=e,t.b+=e,t}var Gf=Uf
function Wf(e,t,n){return Math.min(Math.max(t,e),n)}var Kf=function(e){var t=new Gf
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var n=e.getPropertyValue("opacity")
t.alpha=t.alpha*n}return t},Qf=function(e){var t=n.getComputedStyle(e)
return zf(e,t)||1===Kf(t).alpha}
function Yf(e){if(!e.href)return!1
var t=du.get("firstPageLink",Xf)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function Xf(){return(n.location.origin?Vm(i._tree,'a[href]:not([href^="javascript:"])').find(function(e){return!bd(e.actualNode)}):Vm(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var Zf=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Jf=/(\w+)\((\d+)/,eh=function e(t,r,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var s=t instanceof sa?t:pu(t)
t=s?s.actualNode:t
var u="_isVisible"+(r?"ScreenReader":""),l=null!==(o=n.Node)&&void 0!==o?o:{},c=l.DOCUMENT_NODE,d=l.DOCUMENT_FRAGMENT_NODE,p=s?s.props.nodeType:t.nodeType,f=s?s.props.nodeName:t.nodeName.toLowerCase()
if(s&&void 0!==s[u])return s[u]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(s?s.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=s.parent,m=!0
return h&&(m=e(h,r,!0)),s&&(s[u]=m),m}var g=n.getComputedStyle(t,null)
if(null===g)return!1
if("area"===f)return function(t,n,r){var a=Gl(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var s=$l(t)
if(!s||9!==s.nodeType)return!1
var u=Vm(i._tree,'img[usemap="#'.concat(xa(o),'"]'))
return!(!u||!u.length)&&u.some(function(t){return e(t.actualNode,n,r)})}(t,r,a)
if("none"===g.getPropertyValue("display"))return!1
var v=parseInt(g.getPropertyValue("height")),b=parseInt(g.getPropertyValue("width")),y=Zh(t),w=y&&0===v,D=y&&0===b,E="absolute"===g.getPropertyValue("position")&&(v<2||b<2)&&"hidden"===g.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(Zf),n=e.getPropertyValue("clip-path").match(Jf)
if(t&&5===t.length){var r=e.getPropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(g)||"0"===g.getPropertyValue("opacity")||w||D||E))return!1
if(!a&&("hidden"===g.getPropertyValue("visibility")||!r&&_c(t)))return!1
var x=t.assignedSlot?t.assignedSlot:t.parentNode,A=!1
return x&&(A=e(x,r,!0)),s&&(s[u]=A),A},th=function(e,t){for(var r=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var s=e[i]
s===t&&(o=!0)
var u=n.getComputedStyle(s)
o||-1===r.indexOf(u.position)?a.push(s):a=[]}return a}
function nh(e,t){var n=rh(t)
do{var r=rh(e)
if(r===n||r===t)return ah(e,t)
e=r}while(e)
return!1}function rh(e){for(var t=pu(e).parent;t;){if(Zh(t.actualNode))return t.actualNode
t=t.parent}}function ah(e,t){var r=n.getComputedStyle(t),a=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),s={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof n.HTMLHtmlElement)&&(s.width=t.scrollWidth,s.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===r.getPropertyValue("white-space")&&(o[0]=s),o.some(function(e){return!(Math.ceil(e.left)<Math.floor(s.left)||Math.ceil(e.top)<Math.floor(s.top)||Math.floor(e.left+e.width)>Math.ceil(s.left+s.width)||Math.floor(e.top+e.height)>Math.ceil(s.top+s.height))})}var oh=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(r.elementsFromPoint(t,n)||[]).filter(function(e){return $l(e)===r}).reduce(function(r,a){if(Ll(a)){var i=e(t,n,a.shadowRoot,o+1);(r=r.concat(i)).length&&nh(r[0],a)&&r.push(a)}else r.push(a)
return r},[])}
function ih(e){var t={}
if(!e||!e.length)return t
var n=e.substring(1).split("&")
if(!n||!n.length)return t
for(var r=0;r<n.length;r++){var a=K(n[r].split("="),2),o=a[0],i=a[1],s=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(s)}return t}function sh(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===K(t,1)[0]?"":e:""}var uh,lh=function(e,t){if(e.hasAttribute(t)){var n=e.nodeName.toUpperCase(),r=e;["A","AREA"].includes(n)&&!e.ownerSVGElement||((r=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(r.protocol)?r.protocol.replace(/s:$/,":"):r.protocol,s=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(r.pathname)?r.pathname:"/".concat(r.pathname)),u=s.pathname,l=s.filename
return{protocol:i,hostname:r.hostname,port:(o=r.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(u)?u:"".concat(u,"/"),search:ih(r.search),hash:sh(r.hash),filename:l}}},ch=function(e,t){var r=t.getBoundingClientRect(),a=r.top,o=r.left,i=a-t.scrollTop,s=a-t.scrollTop+t.scrollHeight,u=o-t.scrollLeft,l=o-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>r.right||e.top>s&&e.top>r.bottom||e.right<u&&e.right<r.left||e.bottom<i&&e.bottom<r.top)return!1
var c=n.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof n.HTMLBodyElement||t instanceof n.HTMLHtmlElement},dh=0,ph=function(e){function t(e,n,r){var a
if(X(this,t),(a=M(this,t)).shadowId=r,a.children=[],a.actualNode=e,a.parent=n,n||(dh=0),a.nodeIndex=dh++,a._isHidden=null,a._cache={},a._isXHTML=zs(e.ownerDocument),"input"===e.nodeName.toLowerCase()){var o=e.getAttribute("type")
o=a._isXHTML?o:(o||"").toLowerCase(),rg().includes(o)||(o="text"),a._type=o}return du.get("nodeMap")&&du.get("nodeMap").set(e,a),a}return j(t,e),J(t,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,n=e.nodeName,r=e.id,a=e.nodeValue
this._cache.props={nodeType:t,nodeName:this._isXHTML?n:n.toLowerCase(),id:r,type:this._type,nodeValue:a},1===t&&(this._cache.props.multiple=this.actualNode.multiple,this._cache.props.value=this.actualNode.value,this._cache.props.selected=this.actualNode.selected,this._cache.props.checked=this.actualNode.checked,this._cache.props.indeterminate=this.actualNode.indeterminate)}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof n.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map(function(e){return e.name})),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=n.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=kd(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=Fd(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter(function(e){return e.width>0})),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}},{key:"elementInternals",get:function(){return this._cache.hasOwnProperty("elementInternals")||(this._cache.elementInternals=im(this.actualNode)),this._cache.elementInternals},set:function(e){this._cache.elementInternals=e}}])}(sa),fh=ph,hh=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},mh=" [idsMap]"
function gh(e,t,n){var r=e[0]._selectorMap
if(r){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some(function(e){return vh(e)}))return
var i=new Set
t.forEach(function(e){var t,n=function(e,t,n){var r=e[e.length-1],a=null,o=e.length>1||!!r.pseudos||!!r.classes
if(vh(r))a=t["*"]
else{if(r.id){var i
if(!t[mh]||!Object.hasOwn(t[mh],r.id)||null===(i=t[mh][r.id])||void 0===i||!i.length)return
a=t[mh][r.id].filter(function(e){return e.shadowId===n})}if(r.tag&&"*"!==r.tag){var s
if(null===(s=t[r.tag])||void 0===s||!s.length)return
var u=t[r.tag]
a=a?bh(u,a):u}if(r.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?bh(c,a):c}if(r.attributes)for(var d=0;d<r.attributes.length;d++){var p,f=r.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var h=t["[".concat(f.key,"]")]
a=a?bh(h,a):h}}return{nodes:a,isComplexSelector:o}}(e,r,a)
null==n||null===(t=n.nodes)||void 0===t||t.forEach(function(t){n.isComplexSelector&&!Mu(t,e)||i.add(t)})})
var s=[]
return i.forEach(function(e){return s.push(e)}),n&&(s=s.filter(n)),s.sort(function(e,t){return e.nodeIndex-t.nodeIndex})}}function vh(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function bh(e,t){return e.filter(function(e){return t.includes(e)})}function yh(e,t,n){Object.hasOwn(n,e)||(n[e]=[]),n[e].push(t)}function wh(e,t){1===e.props.nodeType&&(yh(e.props.nodeName,e,t),yh("*",e,t),e.attrNames.forEach(function(n){"id"===n&&(t[mh]=t[mh]||{},hh(e.attr(n)).forEach(function(n){yh(n,e,t[mh])})),yh("[".concat(n,"]"),e,t)}))}function Dh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
uh=!1
var n={}
du.set("nodeMap",new WeakMap),du.set("selectorMap",n)
var r=Ah(e,t,null)
return r[0]._selectorMap=n,r[0]._hasShadowRoot=uh,r}function Eh(e,t,n){var r=new fh(e,t,n)
return wh(r,du.get("selectorMap")),r}function xh(e,t,n){var r=[]
return e.forEach(function(e){var a=Ah(e,n,t)
a&&r.push.apply(r,L(a))}),r}function Ah(e,t,r){var o,i
e.documentElement&&(e=e.documentElement)
var s=e.nodeName.toLowerCase()
return Ll(e)?(uh=!0,o=Eh(e,r,t),t="a"+Math.random().toString().substring(2),i=Array.from(e.shadowRoot.childNodes),o.children=xh(i,o,t),[o]):"content"===s&&"function"==typeof e.getDistributedNodes?xh(i=Array.from(e.getDistributedNodes()),r,t):"slot"===s&&"function"==typeof e.assignedNodes?((i=Array.from(e.assignedNodes())).length||(i=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),n.getComputedStyle(e),xh(i,r,t)):e.nodeType===a.ELEMENT_NODE?(o=Eh(e,r,t),i=Array.from(e.childNodes),o.children=xh(i,o,t),[o]):e.nodeType===a.TEXT_NODE?[Eh(e,r)]:void 0}var Fh=function(e){return e?e.trim().split("-")[0].toLowerCase():""},Ch=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map(function(e){if(t[e].length){var n=i._audit.data.failureSummaries[e]
return n&&"function"==typeof n.failureMessage?n.failureMessage(t[e].map(function(e){return e.message||""})):void 0}}).filter(function(e){return void 0!==e}).join("\n\n")}
function kh(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var Th=aa.resultGroups
function Rh(e,t){var n=i.utils.aggregateResult(e)
return Th.forEach(function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(n[e]||[]).forEach(function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])}),n[e]=(n[e]||[]).map(function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map(function(e){if("object"===o(e.node)){var n=Nh(e.node,t)
Object.assign(e,n)}return delete e.result,delete e.node,function(e,t){["any","all","none"].forEach(function(n){Array.isArray(e[n])&&e[n].filter(function(e){return Array.isArray(e.relatedNodes)}).forEach(function(e){e.relatedNodes=e.relatedNodes.map(function(e){return Nh(e,t)})})})}(e,t),e})),Th.forEach(function(t){return delete e[t]}),delete e.pageLevel,delete e.result,e})}),n}function Nh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
e=Fl.dqElmToSpec(e,t)
var n,r,a,o,s,u={}
return i._audit.noHtml?u.html=null:u.html=null!==(n=e.source)&&void 0!==n?n:"Undefined",t.elementRef&&!e.fromFrame&&(u.element=null!==(r=e.element)&&void 0!==r?r:null),(!1!==t.selectors||e.fromFrame)&&(u.target=null!==(a=e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(u.ancestry=null!==(o=e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(u.xpath=null!==(s=e.xpath)&&void 0!==s?s:["/"]),u}var _h=/\$\{\s?data\s?\}/g
function Sh(e,t){if("string"==typeof t)return e.replace(_h,t)
for(var n in t)if(t.hasOwnProperty(n)){var r=new RegExp("\\${\\s?data\\."+n+"\\s?}","g"),a=void 0===t[n]?"":String(t[n])
e=e.replace(r,a)}return e}var Oh=function e(t,n){if(t){if(Array.isArray(n))return n.values=n.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?Sh(1===n.length?t.singular:t.plural,n):Sh(t,n)
if("string"==typeof t)return Sh(t,n)
if("string"==typeof n)return Sh(t[n],n)
var r=t.default||kh()
return n&&n.messageKey&&t[n.messageKey]&&(r=t[n.messageKey]),e(r,n)}},Mh=function(e,t,n){var r=i._audit.data.checks[e]
if(!r)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!r.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return Oh(r.messages[t],n)},Ph=function(e,t,n){var r=((n.rules&&n.rules[t]||{}).checks||{})[e.id],a=(n.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),r&&(r.hasOwnProperty("enabled")&&(o=r.enabled),r.hasOwnProperty("options")&&(i=r.options)),{enabled:o,options:i,absolutePaths:n.absolutePaths}}
function Ih(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n
return t&&"object"===o(t)?t:"object"!==o(r)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:jh(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function jh(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,n=e.navigator,r=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},s=i.angle,u=i.type
return{userAgent:n.userAgent,windowWidth:a,windowHeight:r,orientationAngle:s,orientationType:u}}function Bh(e,t){var n=t.focusable,r=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:n&&qh(e),size:Lh(e),page:r}}function qh(e){var t=Fm(e.getAttribute("tabindex"))
return null===t||t>=0}function Lh(e){var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(n)){var r=e.getBoundingClientRect()
t=isNaN(t)?r.width:t,n=isNaN(n)?r.height:n}return{width:t,height:n}}function zh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[]
um(e)||(e=[e])
for(var n=0;n<e.length;n++){var r=Vh(e[n])
r&&t.push(r)}return t}function Vh(e){return e instanceof n.Node?e:"string"==typeof e?[e]:(fm(e)?(function(e){Hh(Array.isArray(e.fromFrames),"fromFrames property must be an array"),Hh(e.fromFrames.every(function(e){return!lm(e,"fromFrames")}),"Invalid context; fromFrames selector must be appended, rather than nested"),Hh(!lm(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):hm(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,n=[],r=te(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value
if(hm(a)&&($h(a),a=a.fromShadowDom),"string"!=typeof a&&!Uh(a))return
n.push(a)}}catch(e){r.e(e)}finally{r.f()}return n}}(e))}function $h(e){Hh(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),Hh(e.fromShadowDom.every(function(e){return!lm(e,"fromFrames")}),"shadow selector must be inside fromFrame instead"),Hh(e.fromShadowDom.every(function(e){return!lm(e,"fromShadowDom")}),"fromShadowDom selector must be appended, rather than nested")}function Uh(e){return Array.isArray(e)&&e.every(function(e){return"string"==typeof e})}function Hh(e,t){Da(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function Gh(e,t){for(var r=[],a=0,o=e[t].length;a<o;a++){var i=e[t][a]
if(i instanceof n.Node)if(i.documentElement instanceof n.Node)r.push(e.flatTree[0])
else if(i.host instanceof n.Node){var s=Array.from(i.children).map(function(e){return pu(e)})
r.push.apply(r,L(s))}else r.push(pu(i))
else if(i&&i.length)if(i.length>1)Wh(e,t,i)
else{var u=tg(i[0])
r.push.apply(r,L(u.map(function(e){return pu(e)})))}}return r.filter(function(e){return e})}function Wh(e,t,n){e.frames=e.frames||[],tg(n.shift()).forEach(function(r){var a=e.frames.find(function(e){return e.node===r})
a||(a=Bh(r,e),e.frames.push(a)),a[t].push(n)})}function Kh(e,t){var r,i,s,u,l,c=this
e=yu(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(s=e)||void 0===s?void 0:s.focusable)||e.focusable,this.size="object"===o(null===(u=e)||void 0===u?void 0:u.size)?e.size:{},e=function(e){if(dm(e)){var t=" must be used inside include or exclude. It should not be on the same object."
Hh(!lm(e,"fromFrames"),"fromFrames"+t),Hh(!lm(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!pm(e))return{include:[a],exclude:[]}
e={include:e,exclude:[]}}var n=zh(e.include)
return 0===n.length&&n.push(a),{include:n,exclude:zh(e.exclude)}}(e),this.flatTree=null!=t?t:Dh(function(e){for(var t=e.include,r=e.exclude,o=Array.from(t).concat(Array.from(r)),i=0;i<o.length;i++){var s=o[i]
if(s instanceof n.Element)return s.ownerDocument.documentElement
if(s instanceof n.Document)return s.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=Gh(this,"include"),this.exclude=Gh(this,"exclude"),Wm("frame, iframe",this).forEach(function(e){vm(e,c)&&function(e,t){Rp(t)&&!kl(e.frames,"node",t)&&e.frames.push(Bh(t,e))}(c,e.actualNode)}),void 0===this.page&&(this.page=1===(l=this.include).length&&l[0].actualNode===a.documentElement,this.frames.forEach(function(e){e.page=c.page})),function(e){if(0===e.include.length&&0===e.frames.length){var t=bl.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(wm)}function Qh(e){return!1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iframes?[]:new Kh(e).frames.map(function(e){var t=e.node,n=O(e,w)
return n.initiator=!1,{frameSelector:iu(t),frameContext:n}})}function Yh(e){var t=i._audit.rules.find(function(t){return t.id===e})
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}function Xh(e,t){var n=e.getPropertyValue(t)
return["scroll","auto"].includes(n)}var Zh=Ls(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(r||a){var o=n.getComputedStyle(e),i=Xh(o,"overflow-x"),s=Xh(o,"overflow-y")
return r&&i||a&&s?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}})
function Jh(e){return Array.from(e.children||e.childNodes||[]).reduce(function(e,t){var n=Zh(t)
return n&&e.push(n),e.concat(Jh(t))},[])}var em=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.document.documentElement
return[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}].concat(Jh(a.body))}
function tm(){return yu(nc)}var nm,rm=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var n=t.data,r=t.isCrossOrigin,a=void 0!==r&&r,o=t.shadowId,i=t.root,s=t.priority,u=t.isLink,l=void 0!==u&&u,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(n.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(n))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:s}}},am=["_internals","internals","internals_"],om=["internals","privateInternals"]
function im(e){var t
if(Bl(e.nodeName.toLowerCase())){var r=null===(t=globalThis._elementInternals)||void 0===t?void 0:t.get(e)
if(r)return r
if("ElementInternals"in n){var a,o=te(am)
try{for(o.s();!(a=o.n()).done;){var i,s=a.value
if((null===(i=Object.getOwnPropertyDescriptor(e,s))||void 0===i||!i.get)&&e[s]instanceof n.ElementInternals)return e[s]}}catch(e){o.e(e)}finally{o.f()}var u=Object.getOwnPropertySymbols(e)
if(u.length){var l,c=te(om)
try{var d,p=function(){var t=l.value,r=u.find(function(e){return e.description===t})
if(r){var a
if(null!==(a=Object.getOwnPropertyDescriptor(e,r))&&void 0!==a&&a.get)return 0
if(e[r]instanceof n.ElementInternals)return{v:e[r]}}}
for(c.s();!(l=c.n()).done;)if(0!==(d=p())&&d)return d.v}catch(e){c.e(e)}finally{c.f()}}}}}var sm=function(e){if(nm&&nm.parentNode)return void 0===nm.styleSheet?nm.appendChild(a.createTextNode(e)):nm.styleSheet.cssText+=e,nm
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(nm=a.createElement("style")).type="text/css",void 0===nm.styleSheet?nm.appendChild(a.createTextNode(e)):nm.styleSheet.cssText=e,t.appendChild(nm),nm}}
function um(e){return!!e&&"object"===o(e)&&"number"==typeof e.length&&e instanceof n.Node==0}function lm(e,t){return!(!e||"object"!==o(e))&&Object.prototype.hasOwnProperty.call(e,t)}function cm(e){return dm(e)||pm(e)}function dm(e){return["include","exclude"].some(function(t){return lm(e,t)&&pm(e[t])})}function pm(e){return"string"==typeof e||e instanceof n.Node||fm(e)||hm(e)||um(e)}function fm(e){return lm(e,"fromFrames")}function hm(e){return lm(e,"fromShadowDom")}var mm=function e(t,r){var a=pu(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=n.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!r&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i}
function gm(e){var t,n,r=null!==(t=null===(n=e.props)||void 0===n?void 0:n.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!nc.htmlElms[r]}function vm(e,t){var n=t.include,r=void 0===n?[]:n,a=t.exclude,o=void 0===a?[]:a,i=r.filter(function(t){return _l(t,e)})
if(0===i.length)return!1
var s=o.filter(function(t){return _l(t,e)})
if(0===s.length)return!0
var u=bm(i)
return _l(bm(s),u)}function bm(e){var t,n,r=te(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
t&&_l(a,t)||(t=a)}}catch(e){r.e(e)}finally{r.f()}return t}function ym(e,t){return e.length===t.length&&e.every(function(e,n){var r=t[n]
return Array.isArray(e)?e.length===r.length&&e.every(function(e,t){return r[t]===e}):e===r})}var wm=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1}
function Dm(e){return e instanceof sa?{vNode:e,domNode:e.actualNode}:{vNode:pu(e),domNode:e}}var Em=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter(function(e){return 3===e.type})
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var s=i.filter(function(e){return e.href}).map(function(e){return e.href}).filter(function(e){return!r.includes(e)}).map(function(e,a){var o=[].concat(L(n),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return Am(e,t,o,r,i)}),u=o.filter(function(e){return 3!==e.type})
return u.length?(s.push(Promise.resolve(t.convertDataToStylesheet({data:u.map(function(e){return e.cssText}).join(),isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(s)):Promise.all(s)},xm=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
return function(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}(e)?Em(e,t,n,r,a):Am(e.href,t,n,r,!0)},Am=function(e,t,r,a,o){return null==e?Promise.resolve():(a.push(e),new Promise(function(t,r){var a=new n.XMLHttpRequest
a.open("GET",e),a.timeout=aa.preload.timeout,a.addEventListener("error",r),a.addEventListener("timeout",r),a.addEventListener("loadend",function(e){if(e.loaded&&a.responseText)return t(a.responseText)
r(a.responseText)}),a.send()}).then(function(e){var n=t.convertDataToStylesheet({data:e,isCrossOrigin:o,priority:r,root:t.rootNode,shadowId:t.shadowId})
return xm(n.sheet,t,r,a,n.isCrossOrigin)}))},Fm=function(e){if("string"!=typeof e)return null
var t=e.trim().match(/^([-+]?\d+)/)
return t?Number(t[1]):null},Cm=function(){function e(){if(n.performance&&n.performance)return n.performance.now()}var t=e(),r=!1
return{start:function(){this.reset(),r=!0,this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end",!0),this.logMeasures("axe"),this.clearMark("mark_axe_start","mark_axe_end"),r=!1},auditStart:function(){r||this.reset(),this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end",!0),this.logMeasures(),this.clearMark("mark_audit_start","mark_audit_end")},mark:function(e){var t
null!==(t=n.performance)&&void 0!==t&&t.mark&&n.performance.mark(e)},measure:function(e,t,r){var a,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3]
if(null!==(a=n.performance)&&void 0!==a&&a.measure){try{n.performance.measure(e,t,r)}catch(e){this._log(e)}o||this.clearMark(t,r)}},logMeasures:function(e){var t,r,a=this,o=function(e){return Array.isArray(e)?e[e.length-1]:e},i=function(e){a._log("Measure "+e.name+" took "+e.duration+"ms")}
if(null!==(t=n.performance)&&void 0!==t&&t.getEntriesByType&&null!==(r=n.performance)&&void 0!==r&&r.getEntriesByName){var s=o(n.performance.getEntriesByName("mark_axe_start"))||o(n.performance.getEntriesByName("mark_audit_start"))
if(s)for(var u=n.performance.getEntriesByType("measure").filter(function(e){return e.startTime>=s.startTime}),l=0;l<u.length;++l){var c=u[l]
if(c.name===e)return void i(c)
e||i(c)}else this._log("Axe must be started before using performanceTimer")}},timeElapsed:function(){return e()-t},clearMark:function(){var e
if(null!==(e=n.performance)&&void 0!==e&&e.clearMarks){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a]
for(var o=0,i=r;o<i.length;o++){var s=i[o]
n.performance.clearMarks(s)}}},reset:function(){t=e()},_log:function(e){oa(e)}}}(),km=Cm
function Tm(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),n=t?"pointer-events":"visibility",r=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,s,u,l=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===l.indexOf(i);)l.push(i),c.push({value:i.style.getPropertyValue(n),priority:i.style.getPropertyPriority(n)}),i.style.setProperty(n,r,"important")
for(l.indexOf(a.documentElement)<l.length-1&&(l.splice(l.indexOf(a.documentElement),1),l.push(a.documentElement)),s=c.length;u=c[--s];)l[s].style.setProperty(n,u.value?u.value:"",u.priority)
return a.head.removeChild(o),l}}"function"==typeof n.addEventListener&&(a.elementsFromPoint=Tm())
var Rm=function(e,t){return e.concat(t).filter(function(e,t,n){return n.indexOf(e)===t})}
function Nm(e,t,n,r,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=n,o.parentShadowId=r,o}var _m=function(e,t,n){e=Array.isArray(e)?e:[e]
var r=Su(t)
return gh(e,r,n)||function(e,t,n){for(var r=du.get("qsa.recycledLocalVariables",function(){return[]}),a=[],o=Nm(Array.isArray(e)?e:[e],t,null,e[0].shadowId,r.pop()),i=[];o.vNodesIndex<o.vNodes.length;){for(var s,u,l=o.vNodes[o.vNodesIndex++],c=null,d=null,p=((null===(s=o.anyLevel)||void 0===s?void 0:s.length)||0)+((null===(u=o.thisLevel)||void 0===u?void 0:u.length)||0),f=!1,h=0;h<p;h++){var m,g,v,b=h<((null===(m=o.anyLevel)||void 0===m?void 0:m.length)||0)?o.anyLevel[h]:o.thisLevel[h-((null===(g=o.anyLevel)||void 0===g?void 0:g.length)||0)]
if((!b[0].id||l.shadowId===o.parentShadowId)&&Mu(l,b[0]))if(1===b.length)f||n&&!n(l)||(i.push(l),f=!0)
else{var y=b.slice(1)
if(!1===[" ",">"].includes(y[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+b[1].combinator)
">"===y[0].combinator?(c=c||[]).push(y):(d=d||[]).push(y)}b[0].id&&l.shadowId!==o.parentShadowId||null===(v=o.anyLevel)||void 0===v||!v.includes(b)||(d=d||[]).push(b)}for(l.children&&l.children.length&&(a.push(o),o=Nm(l.children,d,c,l.shadowId,r.pop()));o.vNodesIndex===o.vNodes.length&&a.length;)r.push(o),o=a.pop()}return i}(e,r,n)},Sm=function(e){var t=e.treeRoot,n=function(e){var t=[],n=_m(e,"*",function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)}).map(function(e){return{shadowId:e.shadowId,rootNode:Vl(e.actualNode)}})
return Rm(n,[])}(void 0===t?i._tree[0]:t)
if(!n.length)return Promise.resolve()
var r=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var n=[]
return e.forEach(function(e,r){var a=e.rootNode,o=e.shadowId,i=function(e,t,n){var r
return r=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(Mm).reduce(function(n,r){var a=r.nodeName.toUpperCase(),o="STYLE"===a?r.textContent:r,i=t({data:o,isLink:"LINK"===a,root:e})
return i.sheet&&n.push(i.sheet),n},[])}(e,n):function(e){return Array.from(e.styleSheets).filter(function(e){return!!e.media&&Pm(e.media.mediaText)})}(e),function(e){var t=[]
return e.filter(function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)})}(r)}(a,o,t)
if(!i)return Promise.all(n)
var s=r+1,u={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:s},l=[],c=Promise.all(i.map(function(e,t){return xm(e,u,[s,t],l)}))
n.push(c)}),Promise.all(n)}(n,rm(r)).then(function(e){return Om(e)})}
function Om(e){return e.reduce(function(e,t){return Array.isArray(t)?e.concat(Om(t)):e.concat(t)},[])}function Mm(e){var t=e.nodeName.toUpperCase(),n=e.getAttribute("href"),r=e.getAttribute("rel"),a="LINK"===t&&n&&r&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&Pm(e.media)}function Pm(e){return!e||!e.toUpperCase().includes("PRINT")}var Im=function(e){var t=e.treeRoot,n=void 0===t?i._tree[0]:t,r=_m(n,"video[autoplay], audio[autoplay]",function(e){var t=e.actualNode
return!("none"===t.preload&&0===t.readyState&&t.networkState!==t.NETWORK_LOADING||t.hasAttribute("paused")||t.hasAttribute("muted")||(t.hasAttribute("src")?!t.getAttribute("src"):Array.from(t.getElementsByTagName("source")).filter(function(e){return!!e.getAttribute("src")}).length<=0))})
return Promise.all(r.map(function(e){var t,n=e.actualNode
return t=n,new Promise(function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",function n(){t.removeEventListener("loadedmetadata",n),e(t)})})}))}
function jm(e){var t={cssom:Sm,media:Im}
return Bm(e)?new Promise(function(n,r){var a=qm(e),o=a.assets,i=a.timeout,s=setTimeout(function(){return r(new Error("Preload assets timed out."))},i)
Promise.all(o.map(function(n){return t[n](e).then(function(e){return _({},n,e)})})).then(function(e){var t=e.reduce(function(e,t){return q({},e,t)},{})
clearTimeout(s),n(t)}).catch(function(e){clearTimeout(s),r(e)})}):Promise.resolve()}function Bm(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function qm(e){var t=aa.preload,n=t.assets,r=t.timeout,a={assets:n,timeout:r}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every(function(e){return n.includes(e.toLowerCase())}))throw new Error("Requested assets, not supported. Supported assets are: ".concat(n.join(", "),"."))
return a.assets=Rm(e.preload.assets.map(function(e){return e.toLowerCase()}),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}function Lm(e){var t=i._audit.data.checks||{},n=i._audit.data.rules||{},r=kl(i._audit.rules,"id",e.id)||{}
e.tags=yu(r.tags||[])
var a=zm(t,!0,r),o=zm(t,!1,r)
e.nodes.forEach(function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)}),Ol(e,yu(n[e.id]||{}))}function zm(e,t,n){return function(r){var a=e[r.id]||{},i=a.messages||{},s=Object.assign({},a)
delete s.messages,n.reviewOnFail||void 0!==r.result?s.message=r.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(r.data)||(s.message=function(e,t){function n(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:kh()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:n(t)
try{var r=t.incomplete[e.missingData[0].reason]
if(!r)throw new Error
return r}catch(r){return"string"==typeof e.missingData?t.incomplete[e.missingData]:n(t)}}(r.data,i)),s.message||(s.message=i.incomplete)),"function"!=typeof s.message&&(s.message=Oh(s.message,r.data)),Ol(r,s)}}var Vm=function(e,t){return _m(e,t)}
function $m(e,t){var n,r,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(n=t.include||[],n=Array.isArray(n)?n:[n],r=t.exclude||[],r=(r=Array.isArray(r)?r:[r]).concat(a.filter(function(e){return-1===n.indexOf(e)}))):(n=Array.isArray(t)?t:[t],r=a.filter(function(e){return-1===n.indexOf(e)})),!!(n.some(function(t){return-1!==e.tags.indexOf(t)})||0===n.length&&!1!==e.enabled)&&r.every(function(t){return-1===e.tags.indexOf(t)})}var Um=function(e,t,n){var r=n.runOnly||{},a=(n.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===r.type?-1!==r.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===r.type&&r.values?$m(e,r.values):$m(e,[]))}
function Hm(e,t){if(!t)return e
var n=e.cloneNode(!1),r=Ta(n)
if(1===n.nodeType){var a=n.outerHTML
n=du.get(a,function(){return Gm(n,r,e,t)})}else n=Gm(n,r,e,t)
return Array.from(e.childNodes).forEach(function(e){n.appendChild(Hm(e,t))}),n}function Gm(e,t,n,r){return t?(e=a.createElement(e.nodeName),Array.from(t).forEach(function(t){(function(e,t,n){return void 0!==n[t]&&(!0===n[t]||Ra(e,n[t]))})(n,t.name,r)||e.setAttribute(t.name,t.value)}),e):e}function Wm(e,t){var n,r=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var s=i._selectCache[a]
if(s.selector===e)return s.result}for(var u=t.include.reduce(function(e,t){return e.length&&_l(e[e.length-1],t)||e.push(t),e},[]),l=function(e){return e.exclude&&0!==e.exclude.length?function(t){return vm(t,e)}:null}(t),c=0;c<u.length;c++)n=u[c],r=Km(r,_m(n,e,l))
return i._selectCache&&i._selectCache.push({selector:e,result:r}),r}function Km(e,t){if(0===e.length)return t
if(e.length<t.length){var n=e
e=t,t=n}for(var r=0,a=t.length;r<a;r++)e.includes(t[r])||e.push(t[r])
return e}function Qm(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if("object"!==o(e)||null===e)return{message:String(e)}
var n,r={},a=te(aa.serializableErrorProps)
try{for(a.s();!(n=a.n()).done;){var i=n.value;["string","number","boolean"].includes(o(e[i]))&&(r[i]=e[i])}}catch(e){a.e(e)}finally{a.f()}return e.cause&&(r.cause=t<10?Qm(e.cause,t+1):"..."),r}var Ym=function(e){function t(e){var n,r,a=e.error,o=e.ruleId,i=e.method,s=e.errorNode
return X(this,t),(r=M(this,t)).name=null!==(n=a.name)&&void 0!==n?n:"RuleError",r.message=a.message,r.stack=a.stack,a.cause&&(r.cause=Qm(a.cause)),o&&(r.ruleId=o,r.message+=" Skipping ".concat(r.ruleId," rule.")),i&&(r.method=i),s&&(r.errorNode=s),r}return j(t,e),J(t)}(N(Error)),Xm=Ym,Zm=function(e){e.forEach(function(e){return function(e,t,r){if(e===n)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)})}
function Jm(e){return eg(Array.isArray(e)?L(e):[e],a)}function eg(e,t){var n=e.shift(),r=n?t.querySelector(n):null
return 0===e.length?r:null!=r&&r.shadowRoot?eg(e,r.shadowRoot):null}function tg(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Array.isArray(e)?L(e):[e]
return 0===e.length?[]:ng(n,t)}function ng(e,t){var n,r=Y(n=e)||z(n)||ne(n)||Q(),a=r[0],o=re(r).slice(1),i=t.querySelectorAll(a)
if(0===o.length)return Array.from(i)
var s,u=[],l=te(i)
try{for(l.s();!(s=l.n()).done;){var c=s.value
null!=c&&c.shadowRoot&&u.push.apply(u,L(ng(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return u}var rg=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},ag=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,1,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,1,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,1,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,1,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],[,,,,,,,,1],[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,1,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,1,1,,1,1,,1,,,,,,,,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,1,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,1,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,1,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,1,,1,,1,,1,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,1,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,1,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,1,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,1,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,1,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,1,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,1,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,1,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,1,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,1,1,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,1,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,1,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],[,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,1,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,1,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,1,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,1,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,1,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,1,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,1,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,1,,,1,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,1,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,1,,1,,,,,1],[,,1,,,,,,,1,,1,1,1,1,,,,,,,,,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,1,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1,,,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,1,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,1,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,1,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,1,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,1,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],[,,,,,,,,,,,1],[,1,,,,,,,,1,1,1,1,1,1,1,1,,,,1,1,,,,,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,1,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,1,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,1,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,1,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,1,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,1,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,,1,1,1,,1,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,1,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,1,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,1,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,1,,1],[,1,,,1,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,1,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,1,,,,1,,,,,1,,,1,1,,,1,,1,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function og(e){e=Array.isArray(e)?e:ag
var t=[]
return e.forEach(function(e,n){var r=String.fromCharCode(n+96).replace("`","")
Array.isArray(e)?t=t.concat(og(e).map(function(e){return r+e})):t.push(r)}),t}var ig=function(e){for(var t=ag;e.length<3;)e+="`"
for(var n=0;n<=e.length-1;n++)if(!(t=t[e.charCodeAt(n)-96]))return!1
return!0}
function sg(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],n=[]
if(i._audit.rules.forEach(function(e){n.push(e.id),e.tags.forEach(function(e){t.includes(e)||t.push(e)})}),["object","string"].includes(o(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var r=e.runOnly.find(function(e){return t.includes(e)}),a=e.runOnly.find(function(e){return n.includes(e)})
if(r&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var s=e.runOnly
if(s.value&&!s.values&&(s.values=s.value,delete s.value),!Array.isArray(s.values)||0===s.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(s.type))s.type="rule",s.values.forEach(function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")})
else{if(!["tag","tags",void 0].includes(s.type))throw new Error("Unknown runOnly type '".concat(s.type,"'"))
s.type="tag"
var u=s.values.filter(function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)})
0!==u.length&&i.log("Could not find tags `"+u.join("`, `")+"`")}}return"object"===o(e.rules)&&Object.keys(e.rules).forEach(function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")}),e}var ug=function(e){function t(e){var n,r,a,i
return X(this,t),(n=M(this,t))._props=function(e){var t,n,r,a=null!==(t=e.nodeName)&&void 0!==t?t:cg[e.nodeType],o=null!==(n=null!==(r=e.nodeType)&&void 0!==r?r:lg[e.nodeName])&&void 0!==n?n:1
Da("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),Da("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),rg().includes(i)||(i="text"))
var s=q({},e,{nodeType:o,nodeName:a})
return i&&(s.type=i),delete s.attributes,Object.freeze(s)}(e),n._attrs=(r=e.attributes,a=void 0===r?{}:r,i={htmlFor:"for",className:"class"},Object.keys(a).reduce(function(e,t){var n=a[t]
return Da("object"!==o(n)||null===n,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==n&&(e[i[t]||t]=null!==n?String(n):null),e},{})),n}return j(t,e),J(t,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}])}(sa),lg={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},cg={}
Object.keys(lg).forEach(function(e){cg[lg[e]]=e})
var dg,pg,fg,hg=ug,mg=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var n=i.utils.queue(),r=[]
Object.keys(i.plugins).forEach(function(e){n.defer(function(t){var n=function(e){r.push(e),t()}
try{i.plugins[e].cleanup(t,n)}catch(e){n(e)}})})
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach(function(e){n.defer(function(t,n){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,n)})}),n.then(function(n){0===r.length?e(n):t(r)}).catch(t)},gg={}
function vg(e){return gg.hasOwnProperty(e)}function bg(e){return"string"==typeof e&&gg[e]?gg[e]:"function"==typeof e?e:dg}function yg(e){return null!=e}function wg(e){return Dg.apply(this,arguments)}function Dg(){return(Dg=R(C().m(function e(t){return C().w(function(e){for(;;)if(0===e.n)return e.a(2,new Promise(function(e){return setTimeout(e,t,"timeout")}))},e)}))).apply(this,arguments)}function Eg(){return Eg=R(C().m(function e(){var t,n,r,a,i,s,u,l,c,d,p,f,h,m,g,v,b=arguments
return C().w(function(e){for(;;)switch(e.n){case 0:if(t=b.length>0&&void 0!==b[0]?b[0]:oa,pg){e.n=1
break}return e.a(2)
case 1:return e.n=2,Promise.race([wg(fg),pg()])
case 2:if(n=e.v,Da("timeout"!==n,"Timeout called for elementInternals"),(r=yu(n))&&Array.isArray(r)){e.n=3
break}return t("externalAPIs.getElementInternals() did not return an array"),e.a(2)
case 3:a=0
case 4:if(!(a<r.length)){e.n=14
break}if(r[a]&&"object"===o(r[a])){e.n=5
break}return t("externalAPIs.getElementInternals()[".concat(a,"] is not an object")),e.a(3,13)
case 5:if(i=r[a],s=i.internals,u=i.ancestry,s&&"object"===o(s)){e.n=6
break}return t("externalAPIs.getElementInternals()[".concat(a,"].internals is not an object")),e.a(3,13)
case 6:if(u&&(Array.isArray(u)||"string"==typeof u)){e.n=7
break}return t("externalAPIs.getElementInternals()[".concat(a,"].ancestry is not a string or an array of strings")),e.a(3,13)
case 7:if(l=Jm(u),c=pu(l)){e.n=8
break}return t("Unable to locate node using selector ".concat(u," from externalAPIs.getElementInternals()[").concat(a,"]")),e.a(3,13)
case 8:d=0,p=Object.entries(s)
case 9:if(!(d<p.length)){e.n=12
break}if(f=K(p[d],2),h=f[0],"string"!=typeof(m=f[1])){e.n=10
break}return e.a(3,11)
case 10:g=m.type,v=m.value,g||t("externalAPIs.getElementInternals()[".concat(a,"].internals.").concat(h,' is an object but has no "type" property')),v||t("externalAPIs.getElementInternals()[".concat(a,"].internals.").concat(h,' is an object but has no "value" property')),"HTMLElement"===g?Ag(s,h,v):"NodeList"===g&&Fg(s,h,v)
case 11:d++,e.n=9
break
case 12:c.elementInternals=s
case 13:a++,e.n=4
break
case 14:return e.a(2)}},e)})),Eg.apply(this,arguments)}var xg={loadElementInternals:function(){return Eg.apply(this,arguments)}}
function Ag(e,t,n){var r=Jm(n)
r?e[t]=r:Object.defineProperty(e,t,{get:function(){throw new Error("Unable to locate node using selector: ".concat(n))}})}function Fg(e,t,n){var r,a=[],o=[],i=te(n)
try{for(i.s();!(r=i.n()).done;){var s=r.value,u=Jm(s)
u?a.push(u):o.push(s)}}catch(e){i.e(e)}finally{i.f()}0===o.length?e[t]=a:Object.defineProperty(e,t,{get:function(){throw new Error("Unable to locate nodes using selectors: ".concat(o.join(",")))}})}var Cg={}
pe(Cg,{getAllCells:function(){return kg},getCellPosition:function(){return $d},getHeaders:function(){return Rg},getScope:function(){return Ud},isColumnHeader:function(){return Hd},isDataCell:function(){return Ng},isDataTable:function(){return _g},isHeader:function(){return Sg},isRowHeader:function(){return Gd},toArray:function(){return Vd},toGrid:function(){return Vd},traverse:function(){return Mg}})
var kg=function(e){var t,n,r,a,o=[]
for(t=0,r=e.rows.length;t<r;t++)for(n=0,a=e.rows[t].cells.length;n<a;n++)o.push(e.rows[t].cells[n])
return o}
function Tg(e,t,n){for(var r,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?Gd:Hd,s=n[t.y][t.x],u=s.colSpan-1,l=s.getAttribute("rowspan"),c=(0===parseInt(l)||0===s.rowspan?n.length:s.rowSpan)-1,d=t.y+c,p=t.x+u,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],g=d;g>=f&&!r;g--)for(var v=p;v>=h;v--){var b=n[g]?n[g][v]:void 0
if(b){var y=i.utils.getNodeFromTree(b)
if(y[a]){r=y[a]
break}m.push(b)}}return r=(r||[]).concat(m.filter(o)),m.forEach(function(e){i.utils.getNodeFromTree(e)[a]=r}),r}var Rg=function(e,t){if(e.getAttribute("headers")){var n=zd(e,"headers")
if(n.filter(function(e){return e}).length)return n}t||(t=Vd(Gl(e,"table")))
var r=$d(e,t),a=Tg("row",r,t),o=Tg("col",r,t)
return[].concat(a,o).reverse()},Ng=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=Bd(e)
return t?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},_g=function(e){var t=Bd(e)
if(("presentation"===t||"none"===t)&&!kd(e))return!1
if("true"===e.getAttribute("contenteditable")||Gl(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===Rf(t))return!0
if("0"===e.getAttribute("datatable"))return!1
if(e.getAttribute("summary"))return!0
if(e.tHead||e.tFoot||e.caption)return!0
for(var r=0,a=e.children.length;r<a;r++)if("COLGROUP"===e.children[r].nodeName.toUpperCase())return!0
for(var o,i,s=0,u=e.rows.length,l=!1,c=0;c<u;c++)for(var d=0,p=(o=e.rows[c]).cells.length;d<p;d++){if("TH"===(i=o.cells[d]).nodeName.toUpperCase())return!0
if(l||i.offsetWidth===i.clientWidth&&i.offsetHeight===i.clientHeight||(l=!0),i.getAttribute("scope")||i.getAttribute("headers")||i.getAttribute("abbr"))return!0
if(["columnheader","rowheader"].includes(Bd(i)))return!0
if(1===i.children.length&&"ABBR"===i.children[0].nodeName.toUpperCase())return!0
s++}if(e.getElementsByTagName("table").length)return!1
if(u<2)return!1
var f,h,m=e.rows[Math.ceil(u/2)]
if(1===m.cells.length&&1===m.cells[0].colSpan)return!1
if(m.cells.length>=5)return!0
if(l)return!0
for(var g=0;g<u;g++){if(o=e.rows[g],f&&f!==n.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=n.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==n.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=n.getComputedStyle(o).getPropertyValue("background-image")}return u>=20||!(Cc(e).width>.95*kc(n).width)&&!(s<10)&&!e.querySelector("object, embed, iframe, applet")},Sg=function(e){if(Hd(e)||Gd(e))return!0
if(e.getAttribute("id")){var t=xa(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function Og(e,t,n,r){var a,o=n[t.y]?n[t.y][t.x]:void 0
return o?"function"==typeof r&&!0===(a=r(o,t,n))?[o]:((a=Og(e,{x:t.x+e.x,y:t.y+e.y},n,r)).unshift(o),a):[]}var Mg=function(e,t,n,r){if(Array.isArray(t)&&(r=n,n=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return Og(e,{x:t.x+e.x,y:t.y+e.y},n,r)},Pg={}
pe(Pg,{allowedAttr:function(){return Ig},arialabelText:function(){return Pd},arialabelledbyText:function(){return Md},getAccessibleRefs:function(){return qg},getAriaValue:function(){return oc},getElementUnallowedRoles:function(){return $g},getExplicitRole:function(){return Bd},getImplicitRole:function(){return bp},getOwnedVirtual:function(){return kp},getRole:function(){return xp},getRoleType:function(){return Rf},getRolesByType:function(){return Hg},getRolesWithNameFromContents:function(){return Wg},hasAriaValue:function(){return Od},implicitNodes:function(){return Zg},implicitRole:function(){return bp},isAccessibleRef:function(){return Jg},isAriaRoleAllowedOnElement:function(){return Lg},isComboboxPopup:function(){return ev},isUnsupportedRole:function(){return Id},isValidRole:function(){return jd},label:function(){return nv},labelVirtual:function(){return uf},lookupTable:function(){return Xg},namedFromContents:function(){return Cp},requiredAttr:function(){return rv},requiredContext:function(){return av},requiredOwned:function(){return ov},validateAttr:function(){return sv},validateAttrValue:function(){return iv}})
var Ig=function(e){var t=nc.ariaRoles[e],n=L(Ld())
return t?(t.allowedAttrs&&n.push.apply(n,L(t.allowedAttrs)),t.requiredAttrs&&n.push.apply(n,L(t.requiredAttrs)),n):n},jg=/^idrefs?$/
function Bg(e,t,n){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var r=e.getAttribute("for")
t.has(r)?t.get(r).push(e):t.set(r,[e])}for(var a=0;a<n.length;++a){var o=n[a],i=Wd(e.getAttribute(o)||"")
if(i){var s,u=te(hh(i))
try{for(u.s();!(s=u.n()).done;){var l=s.value
t.has(l)?t.get(l).push(e):t.set(l,[e])}}catch(e){u.e(e)}finally{u.f()}}}}for(var c=0;c<e.childNodes.length;c++)1===e.childNodes[c].nodeType&&Bg(e.childNodes[c],t,n)}var qg=function(e){var t
e=e.actualNode||e
var n=$l(e)
n=n.documentElement||n
var r=du.get("idRefsByRoot",function(){return new Map}),a=r.get(n)
return a||(a=new Map,r.set(n,a),Bg(n,a,Object.keys(nc.ariaAttrs).filter(function(e){var t=nc.ariaAttrs[e].type
return jg.test(t)}))),null!==(t=a.get(e.id))&&void 0!==t?t:[]},Lg=function(e,t){var n=e instanceof sa?e:pu(e),r=bp(n),a=vp(n)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==r&&!!a.allowedRoles},zg=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],Vg={header:"banner",footer:"contentinfo"},$g=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Dm(e).vNode
if(!gm(n))return[]
var r=n.props.nodeName,a=bp(n)||Vg[r]
return function(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var n=hh(e.attr("role").toLowerCase())
t=t.concat(n)}return t.filter(function(e){return jd(e)})}(n).filter(function(e){return!function(e,t,n,r){return!(!n||e!==r)||(!zg.includes(e)||Rf(e)===r)&&Lg(t,e)}(e,n,t,a)})},Ug=function(e){return Object.keys(nc.ariaRoles).filter(function(t){return nc.ariaRoles[t].type===e})},Hg=function(e){return Ug(e)},Gg=function(){return du.get("ariaRolesNameFromContent",function(){return Object.keys(nc.ariaRoles).filter(function(e){return nc.ariaRoles[e].nameFromContent})})},Wg=function(){return Gg()},Kg=function(e){return null===e},Qg=function(e){return null!==e},Yg={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
Yg.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Qg}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Qg}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Qg}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Qg}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Qg}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:Qg}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Qg}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:Qg}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Qg}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:Qg}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Qg}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Qg}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:Qg}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:Qg}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},Yg.implicitHtmlRole=Xd,Yg.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:Qg}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:Qg}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],Yg.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:Kg}},{nodeName:"img",attributes:{alt:Kg}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],Yg.evaluateRoleForElement={A:function(e){var t=e.node,n=e.out
return"http://www.w3.org/2000/svg"===t.namespaceURI||!t.href.length||n},AREA:function(e){return!e.node.href},BUTTON:function(e){var t=e.node,n=e.role,r=e.out
return"menu"===t.getAttribute("type")?"menuitem"===n:r},IMG:function(e){var t=e.node,n=e.role,r=e.out
switch(t.alt){case null:return r
case"":return"presentation"===n||"none"===n
default:return"presentation"!==n&&"none"!==n}},INPUT:function(e){var t=e.node,n=e.role,r=e.out
switch(t.type){case"button":case"image":return r
case"checkbox":return!("button"!==n||!t.hasAttribute("aria-pressed"))||r
case"radio":return"menuitemradio"===n
case"text":return"combobox"===n||"searchbox"===n||"spinbutton"===n
case"tel":return"combobox"===n||"spinbutton"===n
case"url":case"search":case"email":return"combobox"===n
default:return!1}},LI:function(e){var t=e.node,n=e.out
return!i.utils.matchesSelector(t,"ol li, ul li")||n},MENU:function(e){return"context"!==e.node.getAttribute("type")},OPTION:function(e){var t=e.node
return!i.utils.matchesSelector(t,"select > option, datalist > option, optgroup > option")},SELECT:function(e){var t=e.node,n=e.role
return!t.multiple&&t.size<=1&&"menu"===n},SVG:function(e){var t=e.node,n=e.out
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||n}},Yg.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var Xg=Yg,Zg=function(e){var t=null,n=Xg.role[e]
return n&&n.implicit&&(t=yu(n.implicit)),t},Jg=function(e){return!!qg(e).length}
function ev(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).popupRoles,n=xp(e)
if(null!=t||(t=Yl["aria-haspopup"].values),!t.includes(n))return!1
var r=function(e){for(;e=e.parent;)if(null!==xp(e,{noPresentational:!0}))return e
return null}(e)
if(tv(r))return!0
var a=e.props.id
if(!a)return!1
if(!e.actualNode)throw new Error("Unable to determine combobox popup without an actualNode")
var o=Vl(e.actualNode).querySelectorAll('[aria-owns~="'.concat(a,'"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(a,'"][role~="combobox"]:not(select)'))
return Array.from(o).some(tv)}var tv=function(e){return e&&"combobox"===xp(e)},nv=function(e){return e=pu(e),uf(e)},rv=function(e){var t=nc.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?L(t.requiredAttrs):[]},av=function(e){var t=nc.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?L(t.requiredContext):null},ov=function(e){var t=nc.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?L(t.requiredOwned):null},iv=function(e,t){var n,r,a=(e=e instanceof sa?e:pu(e)).attr(t),o=nc.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(r=hh(a)).reduce(function(e,t){return e&&o.values.includes(t)},0!==r.length)
case"idref":try{var i=$l(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return zd(e,t).some(function(e){return!!e})
case"string":return""!==a.trim()
case"decimal":return!(!(n=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!n[1]&&!n[2])
case"int":var s=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=s}},sv=function(e){return!!nc.ariaAttrs[e]},uv=["cell-header-not-in-table","cell-header-not-th","header-refs-self","empty-hdrs"],lv=uv[0],cv=uv[1],dv=uv[2],pv=uv[3]
function fv(e){return"caption"===e.props.nodeName}var hv={}
pe(hv,{getAriaRolesByType:function(){return Ug},getAriaRolesSupportingNameFromContent:function(){return Gg},getElementSpec:function(){return vp},getElementsByContentType:function(){return qd},getGlobalAriaAttrs:function(){return Ld},implicitHtmlRoles:function(){return Xd}})
var mv=["alert","log","status"]
function gv(e,t){var n=e.actualNode
if("button"===xp(e)||function(e,t){var n,r=xp(e),a=null!==(n=oc(e,"aria-live").value)&&void 0!==n?n:"",o=Ug("landmark")
return!!(["assertive","polite"].includes(a)||mv.includes(r)||o.includes(r)||t.regionMatcher&&gp(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Yf(e.actualNode)&&yd(e.actualNode,"href")||!Rp(n)){for(var r=e;r;)r._hasRegionDescendant=!0,r=r.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return n!==a.body&&Ef(n,!0)&&!function(e){return["none","presentation"].includes(xp(e))&&!wf(e)}(e)?[e]:e.children.filter(function(e){return 1===e.actualNode.nodeType}).map(function(e){return gv(e,t)}).reduce(function(e,t){return e.concat(t)},[])}function vv(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function bv(e){var t=n.getComputedStyle(function(e){for(var t=e,n=e.textContent.trim(),r=n;r===n&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,r=e.children[a].textContent.trim()}while(""===r&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:vv(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function yv(e,t,n){return n.reduce(function(n,r){return n||(!r.size||e.fontSize/r.size>t.fontSize)&&(!r.weight||e.fontWeight-r.weight>t.fontWeight)&&(!r.italic||e.isItalic&&!t.isItalic)},!1)}var wv=/[;,\s]/,Dv=/^[0-9.]+$/,Ev={}
pe(Ev,{aria:function(){return Pg},color:function(){return xv},dom:function(){return zl},forms:function(){return rb},matches:function(){return gp},math:function(){return jc},standards:function(){return hv},table:function(){return Cg},text:function(){return Sd},utils:function(){return ua}})
var xv={}
pe(xv,{Color:function(){return Gf},centerPointOfRect:function(){return Av},elementHasImage:function(){return zf},elementIsDistinct:function(){return Cv},filteredRectStack:function(){return Tv},flattenColors:function(){return _v},flattenShadowColors:function(){return Ov},getBackgroundColor:function(){return Yv},getBackgroundStack:function(){return Mv},getContrast:function(){return Jv},getForegroundColor:function(){return eb},getOwnBackgroundColor:function(){return Kf},getRectStack:function(){return kv},getStackingContext:function(){return Hv},getStrokeColorsFromShadows:function(){return Lv},getTextShadowColors:function(){return $v},hasValidContrastRatio:function(){return nb},incompleteData:function(){return Lf},parseTextShadows:function(){return Vv},stackingContextToColor:function(){return Gv}})
var Av=function(e){if(!(e.left>n.innerWidth||e.top>n.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),n.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),n.innerHeight-1)}}
function Fv(e){return e.getPropertyValue("font-family").split(/[,;]/g).map(function(e){return e.trim().toLowerCase()})}var Cv=function(e,t){var r=n.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce(function(e,t){var n=new Gf
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha},!1))return!0
var a=n.getComputedStyle(t)
if(Fv(r)[0]!==Fv(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce(function(e,t){return e||r.getPropertyValue(t)!==a.getPropertyValue(t)},!1),i=r.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},kv=function(e){var t=Ad(e),n=gf(e)
return!n||n.length<=1?[t]:n.some(function(e){return void 0===e})?null:(n.splice(0,0,t),n)},Tv=function(e){var t=kv(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var n,r=t.shift()
return t.forEach(function(a,o){if(0!==o){var i=t[o-1],s=t[o]
n=i.every(function(e,t){return e===s[t]})||r.includes(e)}}),n?t[0]:(Lf.set("bgColor","elmPartiallyObscuring"),null)}return Lf.set("bgColor","outsideViewport"),null},Rv=["hue","saturation","color","luminosity"],Nv={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t},hue:function(e,t){return t.setSaturation(e.getSaturation()).setLuminosity(e.getLuminosity())},saturation:function(e,t){return e.setSaturation(t.getSaturation()).setLuminosity(e.getLuminosity())},color:function(e,t){return t.setLuminosity(e.getLuminosity())},luminosity:function(e,t){return e.setLuminosity(t.getLuminosity())}}
function _v(e,t){var n,r=function(e,t,n){if(Rv.includes(n))return Nv[n](e,t)
var r=new Gf
return["r","g","b"].forEach(function(a){r[a]=Nv[n](e[a],t[a])}),r}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal"),a=Sv(e.red,e.alpha,t.red,t.alpha,255*r.r),o=Sv(e.green,e.alpha,t.green,t.alpha,255*r.g),i=Sv(e.blue,e.alpha,t.blue,t.alpha,255*r.b),s=(n=e.alpha+t.alpha*(1-e.alpha),Math.min(Math.max(0,n),1))
if(0===s)return new Gf(a,o,i,s)
var u=Math.round(a/s),l=Math.round(o/s),c=Math.round(i/s)
return new Gf(u,l,c,s)}function Sv(e,t,n,r,a){return t*(1-r)*e+t*r*a+(1-t)*r*n}function Ov(e,t){var n=e.alpha,r=(1-n)*t.red+n*e.red,a=(1-n)*t.green+n*e.green,o=(1-n)*t.blue+n*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new Gf(r,a,o,i)}function Mv(e){for(var t=gf(e).map(function(t){return function(e){var t=e.indexOf(a.body),r=e,o=Kf(n.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!zf(a.documentElement)){t>1&&(r.splice(t,1),r.push(a.body))
var i=r.indexOf(a.documentElement)
i>0&&(r.splice(i,1),r.push(a.documentElement))}return r}(t=th(t,e))}),r=0;r<t.length;r++){var o=t[r]
if(o[0]!==e)return Lf.set("bgColor","bgOverlap"),null
if(0!==r&&!Pv(o,t[0]))return Lf.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function Pv(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}var Iv=.54,jv=.5,Bv=1.5,qv=["top","right","bottom","left"]
function Lv(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreEdgeCount,n=void 0!==t&&t,r=function(e){var t,n={},r=te(e)
try{for(r.s();!(t=r.n()).done;){var a,o=t.value,i=o.colorStr,s=o.pixels
null!==(a=n[i])&&void 0!==a||(n[i]={top:[],right:[],bottom:[],left:[]})
var u=n[i],l=K(s,2),c=l[0],d=l[1]
c>jv?u.right.push(c):-c>jv&&u.left.push(-c),d>jv?u.bottom.push(d):-d>jv&&u.top.push(-d)}}catch(e){r.e(e)}finally{r.f()}return n}(e),a=Object.entries(r).map(function(e){var t=K(e,2),n=t[0],r=t[1],a=qv.filter(function(e){return 0!==r[e].length}).length
return{colorStr:n,sides:r,edgeCount:a}})
return!n&&a.some(function(e){var t=e.edgeCount
return t>1&&t<4})?null:a.map(zv).filter(function(e){return null!==e})}function zv(e){var t=e.colorStr,n=e.sides
if(4!==e.edgeCount)return null
var r=new Gf
r.parseString(t)
var a=0,o=!0
return qv.forEach(function(e){a+=n[e].length/4,o&&(o=n[e].every(function(e){return e>Bv}))}),o||(r.alpha=1-Math.pow(Iv,a)),r}function Vv(e){var t={pixels:[]},n=e.trim(),r=[t]
if(!n)return[]
for(;n;){var a=n.match(/^[a-z]+(\([^)]+\))?/i)||n.match(/^#[0-9a-f]+/i),o=n.match(/^([0-9.-]+)px/i)||n.match(/^(0)/)
if(a)Da(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),n=n.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){Da(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),n=n.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==n[0])throw new Error("Unable to process text-shadows: ".concat(n))
Da(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},r.push(t),n=n.substr(1).trim()}}return r.forEach(function(e){var t=e.pixels
2===t.length&&t.push(0)}),r}function $v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,a=t.maxRatio,o=t.ignoreEdgeCount,i=[],s=n.getComputedStyle(e),u=s.getPropertyValue("text-shadow")
if("none"===u)return i
var l=s.getPropertyValue("font-size"),c=parseInt(l)
Da(!1===isNaN(c),"Unable to determine font-size value ".concat(l))
var d,p=[],f=te(Vv(u))
try{for(f.s();!(d=f.n()).done;){var h=d.value,m=h.colorStr||s.getPropertyValue("color"),g=K(h.pixels,3),v=g[0],b=g[1],y=g[2],w=void 0===y?0:y
if(!(a&&w>=c*a))if(r&&w<c*r)p.push({colorStr:m,pixels:h.pixels})
else{if(p.length>0){var D=Lv(p,{ignoreEdgeCount:o})
if(null===D)return null
i.push.apply(i,L(D)),p.splice(0,p.length)}var E=Uv({colorStr:m,offsetX:v,offsetY:b,blurRadius:w,fontSize:c})
i.push(E)}}}catch(e){f.e(e)}finally{f.f()}if(p.length>0){var x=Lv(p,{ignoreEdgeCount:o})
if(null===x)return null
i.push.apply(i,L(x))}return i}function Uv(e){var t=e.colorStr,n=e.offsetX,r=e.offsetY,a=e.blurRadius,o=e.fontSize
if(n>a||r>a)return new Gf(0,0,0,0)
var i=new Gf
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}function Hv(e,t){var n=pu(e)
if(n._stackingContext)return n._stackingContext
var r=[],a=new Map
return(t=null!=t?t:Mv(e)).forEach(function(e){var t,n=pu(e),o=function(e){var t=new Gf
return t.parseString(e.getComputedStylePropertyValue("background-color")),t}(n),i=n._stackingOrder.filter(function(e){return!!e.vNode})
i.forEach(function(e,t){var n,o=e.vNode,s=null===(n=i[t-1])||void 0===n?void 0:n.vNode,u=Qv(a,o,s)
0!==t||a.get(o)||r.unshift(u),a.set(o,u)})
var s=null===(t=i[i.length-1])||void 0===t?void 0:t.vNode,u=Qv(a,n,s)
i.length||r.unshift(u),u.bgColor=o}),n._stackingContext=r,r}function Gv(e){var t
if(null===(t=e.descendants)||void 0===t||!t.length){var n=e.bgColor
return n.alpha*=e.opacity,{color:n,blendMode:e.blendMode}}var r=_v(e.descendants.reduce(Wv,Kv()),e.bgColor,e.descendants[0].blendMode)
return r.alpha*=e.opacity,{color:r,blendMode:e.blendMode}}function Wv(e,t){var n
return n=e instanceof Gf?e:Gv(e).color,_v(Gv(t).color,n,t.blendMode)}function Kv(e,t){var n,r
return{vNode:e,ancestor:t,opacity:parseFloat(null!==(n=null==e?void 0:e.getComputedStylePropertyValue("opacity"))&&void 0!==n?n:1),bgColor:new Gf(0,0,0,0),blendMode:(r=null==e?void 0:e.getComputedStylePropertyValue("mix-blend-mode"),r||void 0),descendants:[]}}function Qv(e,t,n){var r,a=e.get(n),o=null!==(r=e.get(t))&&void 0!==r?r:Kv(t,a)
return a&&n!==t&&!a.descendants.includes(o)&&a.descendants.unshift(o),o}function Yv(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,o=pu(e),i=o._cache.getBackgroundColor
if(i)return t.push.apply(t,L(i.bgElms)),Lf.set("bgColor",i.incompleteData),i.bgColor
var s=function(e,t,r){var o,i,s=Mv(e)
if(!s)return null
var u=hf(e),l=null!==(o=$v(e,{minRatio:r,ignoreEdgeCount:!0}))&&void 0!==o?o:[]
l.length&&(l=[{color:l.reduce(Ov)}])
for(var c=0;c<s.length;c++){var d=s[c],p=n.getComputedStyle(d)
if(zf(d,p))return t.push(d),null
var f=void 0
try{if(0===(f=Kf(p)).alpha)continue}catch(e){if(e&&Lf.get("colorParse"))return null
throw e}if("inline"!==p.getPropertyValue("display")&&!Xv(d,u))return t.push(d),Lf.set("bgColor","elmPartiallyObscured"),null
if(t.push(d),1===f.alpha)break}l=Hv(e,s).map(Gv).concat(l)
var h=function(e,t){var r=[]
if(!t){var o=a.documentElement,i=a.body,s=n.getComputedStyle(o),u=n.getComputedStyle(i),l=Kf(s),c=Kf(u),d=0!==c.alpha&&Xv(i,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&r.unshift({color:c,blendMode:Zv(u.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&r.unshift({color:l,blendMode:Zv(s.getPropertyValue("mix-blend-mode"))})}return r}(e,s.includes(a.body))
if((i=l).unshift.apply(i,L(h)),0===l.length)return new Gf(255,255,255,1)
var m=l.reduce(function(e,t){return _v(t.color,e.color instanceof Gf?e.color:e,t.blendMode)})
return _v(m.color instanceof Gf?m.color:m,new Gf(255,255,255,1))}(e,t,r)
return o._cache.getBackgroundColor={bgColor:s,bgElms:t,incompleteData:Lf.get("bgColor")},s}function Xv(e,t){t=Array.isArray(t)?t:[t]
var r=e.getBoundingClientRect(),a=r.right,o=r.bottom,i=n.getComputedStyle(e),s=i.getPropertyValue("overflow"),u=parseInt(i.getPropertyValue("padding-left"),10),l=parseInt(i.getPropertyValue("padding-right"),10),c=parseInt(i.getPropertyValue("padding-top"),10),d=parseInt(i.getPropertyValue("padding-bottom"),10)
return(["scroll","auto"].includes(s)||e instanceof n.HTMLHtmlElement)&&(a=r.left+e.scrollWidth+u+l,o=r.top+e.scrollHeight+c+d),t.every(function(e){return e.top>=r.top&&e.bottom<=o&&e.left>=r.left&&e.right<=a})}function Zv(e){return e||void 0}var Jv=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=_v(t,e))
var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}
function eb(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.getComputedStyle(e),i=[function(){return function(e,t){var n=t.textStrokeEmMin,r=void 0===n?0:n,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),i=a/parseFloat(o)
if(isNaN(i)||i<r)return null
var s=e.getPropertyValue("-webkit-text-stroke-color")
return(new Gf).parseString(s)}(o,a)},function(){return function(e){return(new Gf).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}(o)},function(){return $v(e,{minRatio:0})}],s=[]
try{for(var u=0,l=i;u<l.length;u++){var c=(0,l[u])()
if(c&&(s=s.concat(c),1===c.alpha))break}}catch(e){if(e&&Lf.get("colorParse"))return null
throw e}var d=s.reduce(function(e,t){return _v(e,t)})
if(null!=r||(r=Yv(e,[])),null===r){var p=Lf.get("bgColor")
return Lf.set("fgColor",p),null}var f=Hv(e)
return _v(function(e,t,n){for(;t;){var r
if(1===t.opacity&&t.ancestor)t=t.ancestor
else{e.alpha*=t.opacity
var a=(null===(r=t.ancestor)||void 0===r?void 0:r.descendants)||n
1!==t.opacity&&(a=a.slice(0,a.indexOf(t)))
var o=a.map(Gv)
if(o.length){var i=o.reduce(function(e,t){return _v(t.color,e.color instanceof Gf?e.color:e)},{color:new Gf(0,0,0,0),blendMode:"normal"})
e=_v(e,i),t=t.ancestor}else t=t.ancestor}}return e}(d,tb(f,e),f),new Gf(255,255,255,1))}function tb(e,t){var n,r=te(e)
try{for(r.s();!(n=r.n()).done;){var a,o=n.value
if((null===(a=o.vNode)||void 0===a?void 0:a.actualNode)===t)return o
var i=tb(o.descendants,t)
if(i)return i}}catch(e){r.e(e)}finally{r.f()}}var nb=function(e,t,n,r){var a=Jv(e,t),o=r&&Math.ceil(72*n)/96<14||!r&&Math.ceil(72*n)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},rb={}
pe(rb,{isAriaCombobox:function(){return qp},isAriaListbox:function(){return Bp},isAriaRange:function(){return zp},isAriaTextbox:function(){return jp},isDisabled:function(){return ob},isNativeSelect:function(){return Ip},isNativeTextbox:function(){return Pp}})
var ab=["fieldset","button","select","input","textarea"],ob=function e(t){var n=t._isDisabled
if("boolean"==typeof n)return n
var r=t.props.nodeName,a=oc(t,"aria-disabled").value
return n=!(!ab.includes(r)||!t.hasAttr("disabled"))||(a?"true"===a:!!t.parent&&e(t.parent)),t._isDisabled=n,n}
function ib(e,t){if(!e||!t)return!1
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t)
return n.length===r.length&&n.every(function(n){var r=e[n],a=t[n]
return o(r)===o(a)&&("object"===o(r)||"object"===o(a)?ib(r,a):r===a)})}function sb(e){var t=xp(e),n=t&&t.includes("heading"),r=oc(e,"aria-level").value,a=parseInt(r,10),o=K(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return n?o&&!r?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function ub(e,t){var n,r=null===(n=t.data)||void 0===n?void 0:n.headingOrder,a=cb(t.node.ancestry,1)
if(!r)return e
var o=r.map(function(e){return function(e,t){return q({},e,{ancestry:t.concat(e.ancestry)})}(e,a)}),i=function(e,t){for(;t.length;){var n=lb(e,t)
if(-1!==n)return n
t=cb(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,L(o)):e.splice.apply(e,[i,0].concat(L(o))),e}function lb(e,t){return e.findIndex(function(e){return ym(e.ancestry,t)})}function cb(e,t){return e.slice(0,e.length-t)}function db(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return n.top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right}function pb(e){return e.getComputedStylePropertyValue("pointer-events")}function fb(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function hb(e,t){return _l(e,t)&&!Td(t)}function mb(e){return e.map(function(e){return e.actualNode})}function gb(e){return Math.round(10*e)/10}function vb(e,t,n){var r=n.validRoles,a=void 0===r?[]:r,o=n.validNodeNames,i=void 0===o?[]:o,s=e.props,u=s.nodeName,l=s.nodeType,c=s.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!Rp(e))return!1
var p=Bd(e),f=xp(e)
return p?!a.includes(p)&&d+"[role=".concat(f,"]"):!i.includes(u)&&!a.includes(f)&&d+u}function bb(e){return"div"===e.props.nodeName&&null===Bd(e)}function yb(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map(function(e){return{vChild:e,nested:t}})}function wb(e){return""!==(e||"").trim()}function Db(e){var t=rf(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return Wd(t)}function Eb(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach(function(e){"widget"===Rf(e)&&kd(e)?t.push(e):t.push.apply(t,L(Eb(e)))}),t}function xb(e){var t=Fm(e.attr("tabindex"))
return null!==t&&t<0}function Ab(e){if(Td(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some(function(e){return Ab(e)})}var Fb=["block","list-item","table","flex","grid","inline-block"]
function Cb(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==Fb.indexOf(t)||"table-"===t.substr(0,6)}function kb(e,t){var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}var Tb=["block","list-item","table","flex","grid","inline-block"]
function Rb(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==Tb.indexOf(t)||"table-"===t.substr(0,6)}var Nb=Ls(function(e,t){var r=n.getComputedStyle(e,t),a=function(e,t){return r.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Kf(r).alpha&&a("background-image","none"))return 0
var o=_b(r.getPropertyValue("width")),i=_b(r.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value})
function _b(e){var t=K(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),n=t[1],r=void 0===n?"":n,a=t[2],o=void 0===a?"":a
return{value:parseFloat(r),unit:o.toLowerCase()}}var Sb={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Ob={alert:!0,alertdialog:!0,application:!0,article:!0,banner:!1,complementary:!0,contentinfo:!0,dialog:!0,form:!0,log:!0,main:!0,navigation:!0,region:!0,search:!1,status:!0,tabpanel:!0}
function Mb(e,t,n,r){var a=Bd(e)
if(n||(n=av(a)),!n)return null
for(var o=n.includes("group"),i=r?e:e.parent;i;){var s=xp(i,{noPresentational:!0})
if(s){if("group"!==s||!o)return n.includes(s)?null:n
t.includes(a)&&n.push(a),n=n.filter(function(e){return"group"!==e}),i=i.parent}else i=i.parent}return n}function Pb(e){var t=e.vNode
return 3===t.props.nodeType?t.props.nodeValue.trim().length>0:Df(t,!1,!0)}var Ib=Ls(function(e){if(e){var t=xp(e,{noPresentational:!0,chromium:!0})
return t?Rf(t):Ib(e.parent)}})
function jb(e){var t,n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).invalidTableRowAttrs,a=arguments.length>2?arguments[2]:void 0,o=null!==(t=null==r||null===(n=r.filter)||void 0===n?void 0:n.call(r,function(e){return a.hasAttr(e)}))&&void 0!==t?t:[]
if(0===o.length)return!0
var i=function(e){if(e.parent)return Pu(e,'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]')}(a),s=i&&xp(i)
if(!s||"treegrid"===s)return!0
var u="row".concat(o.length>1?"Plural":"Singular")
return this.data({messageKey:u,invalidAttrs:o,ownerRole:s}),!1}function Bb(e,t,n){var r,a=n.props,o=a.nodeName,i=a.type,s=(r=n.attr("aria-checked"))?"true"===(r=r.toLowerCase())?r:"false":""
if("input"!==o||"radio"!==i||!s)return!0
var u=n.props.checked?"true":"false"
return s===u||(this.data({messageKey:"radio",checkState:u}),!1)}function qb(e,t,n){var r,a=n.props,o=a.nodeName,i=a.type,s=(r=n.attr("aria-checked"))?(r=r.toLowerCase(),["mixed","true"].includes(r)?r:"false"):""
if("input"!==o||"checkbox"!==i||!s)return!0
var u,l=(u=n).props.indeterminate?"mixed":u.props.checked?"true":"false"
return s===l||(this.data({messageKey:"checkbox",checkState:l}),!1)}var Lb={row:jb,checkbox:qb,radio:Bb}
function zb(e,t,n){return"aria-required"===e&&"false"===t||!("aria-multiline"!==e||"false"!==t||!n.hasAttr("contenteditable"))}var Vb=function(e,t){try{return"svg"===t.props.nodeName||!!Pu(t,"svg")}catch(e){return!1}},$b=[function(e,t){return Ub(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!Vb(0,t)},function(e,t){return kd(t)},function(e,t){return Td(t)||!Hb(t)},function(e){return!Sf(e,{noLengthCompare:!0,includeInlineBlock:!0})}]
function Ub(e){return"widget"===Rf(e)}var Hb=Ls(function e(t){return!(null==t||!t.parent)&&(!(!Ub(t.parent)||!Td(t.parent))||e(t.parent))}),Gb=function(e,t){var n=Bd(t)
return!(n&&!["none","presentation"].includes(n)&&!(Jl[n]||{}).accessibleNameRequired&&!kd(t))}
function Wb(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.childNodes.length),0===n.getClientRects().length}var Kb=function(e,t,n){return n.initiator},Qb={emoji:!0,nonBmp:!1,punctuations:!0},Yb={"abstractrole-evaluate":function(e,t,n){var r=hh(n.attr("role")).filter(function(e){return"abstract"===Rf(e)})
return r.length>0&&(this.data(r),!0)},"accesskeys-after":function(e){var t={}
return e.filter(function(e){if(!e.data)return!1
var n=e.data.toUpperCase()
return t[n]?(t[n].relatedNodes.push(e.relatedNodes[0]),!1):(t[n]=e,e.relatedNodes=[],!0)}).map(function(e){return e.result=!!e.relatedNodes.length,e})},"accesskeys-evaluate":function(e,t,n){return Dc(n)||(this.data(n.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,n){if(["presentation","none"].includes(xp(n)))return!1
var r=n.attr("alt")
return"string"==typeof r&&/^\s+$/.test(r)},"aria-allowed-attr-elm-evaluate":function(e,t,n){var r=vp(n)
if(!r.allowedAriaAttrs)return!0
if(Bd(n))return!0
var a,o=r.allowedAriaAttrs,i=Ld(),s=[],u=te(n.attrNames)
try{for(u.s();!(a=u.n()).done;){var l=a.value
i.includes(l)&&!o.includes(l)&&s.push(l)}}catch(e){u.e(e)}finally{u.f()}if(!s.length)return!0
var c=s.length>1?"plural":"singular"
return this.data({messageKey:c,nodeName:n.props.nodeName,values:s.map(function(e){return e+'="'+n.attr(e)+'"'}).join(", ")}),!1},"aria-allowed-attr-evaluate":function(e,t,n){var r=[],a=xp(n),o=Ig(a)
Array.isArray(t[a])&&(o=Rm(t[a].concat(o)))
var i,s=te(n.attrNames)
try{for(s.s();!(i=s.n()).done;){var u=i.value
!sv(u)||o.includes(u)||zb(u,n.attr(u),n)||r.push(u)}}catch(e){s.e(e)}finally{s.f()}return!r.length||(this.data(r.map(function(e){return e+'="'+n.attr(e)+'"'})),!(a||gm(n)||kd(n))&&void 0)},"aria-allowed-attr-matches":function(e,t){var n=/^aria-/,r=t.attrNames
if(r.length)for(var a=0,o=r.length;a<o;a++)if(n.test(r[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.allowImplicit,a=void 0===r||r,o=t.ignoredTags,i=void 0===o?[]:o,s=n.props.nodeName
if(i.map(function(e){return e.toLowerCase()}).includes(s))return!0
var u=$g(n,a)
if(u.length){if(this.data(u),!Rp(n))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==Bd(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,n){return"true"===oc(n,"aria-busy").value},"aria-conditional-attr-evaluate":function(e,t,n){var r=xp(n)
return!Lb[r]||Lb[r].call(this,e,t,n)},"aria-conditional-checkbox-attr-evaluate":qb,"aria-conditional-radio-attr-evaluate":Bb,"aria-conditional-row-attr-evaluate":jb,"aria-errormessage-evaluate":function(e,t,n){t=Array.isArray(t)?t:[]
var r=oc(n,"aria-errormessage").value,a=Od(n,"aria-errormessage"),o=oc(n,"aria-invalid").value
return!Od(n,"aria-invalid")||"false"===o||-1!==t.indexOf(r)||!a||(this.data(hh(r)),function(e){if(""===e.trim())return nc.ariaAttrs["aria-errormessage"].allowEmpty
var t,r=hh(e)
if(r.length>1)return this.data({messageKey:"unsupported",values:r}),!1
try{t=Nd(n,"aria-errormessage")[0]}catch(e){return void this.data({messageKey:"idrefs",values:r})}if(t){var a
if(!Rp(t))return this.data({messageKey:"hidden",values:r}),!1
var o=hh(null!==(a=oc(n,"aria-describedby").value)&&void 0!==a?a:"")
return"alert"===Bd(t)||"assertive"===oc(t,"aria-live").value||"polite"===oc(t,"aria-live").value||r.some(function(e){return o.includes(e)})}}.call(this,r))},"aria-has-attr-matches":function(e,t){var n=/^aria-/
return t.attrNames.some(function(e){return n.test(e)})},"aria-hidden-body-evaluate":function(e,t,n){return"true"!==oc(n,"aria-hidden").value},"aria-hidden-focus-matches":function(e,t){for(var n=t.parent;n;){if("true"===oc(n,"aria-hidden").value)return!1
n=n.parent}return!0},"aria-label-evaluate":function(e,t,n){return!!Wd(Pd(n))},"aria-labelledby-evaluate":function(e,t,n){try{return!!Wd(Md(n))}catch(e){return}},"aria-level-evaluate":function(e,t,n){var r=oc(n,"aria-level").value
if(!(parseInt(r,10)>6))return!0},"aria-no-deprecated-attr-evaluate":function(e,t,n){var r=n.attrNames.filter(function(e){var t
return null===(t=nc.ariaAttrs[e])||void 0===t?void 0:t.deprecated})
if(!r.length)return!0
this.data(r)},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=n.props.nodeName,o=xp(n,{fallback:!0}),i=function(e,t,n){var r=Bd(e,{fallback:!0})
if(r){var a=nc.ariaRoles[r]
return(null==a?void 0:a.prohibitedAttrs)||[]}if(n.includes(t)||"widget"===Ib(e)||Bl(t))return[]
var o=vp(e)
return!nc.htmlElms[t]||o.namingProhibited?["aria-label","aria-labelledby"]:[]}(n,a,r).filter(function(e){return!!n.attrNames.includes(e)&&""!==Wd(n.attr(e))})
if(0===i.length)return!1
var s=function(e,t){if(!e.actualNode||!t.includes("aria-labelledby"))return null
if(t.filter(function(e){return"aria-label"!==e&&"aria-labelledby"!==e}).length)return null
var n=t.includes("aria-label"),r=Nd(e,"aria-labelledby").filter(Boolean)
return 0===r.length?n?null:"unresolvedLabel":r.every(function(e){return Rp(e)})?n&&""===Wd(Md(e))?null:t.length>1?"visibleLabelPlural":"visibleLabelSingular":null}(n,i)
if(s)this.data({role:o,nodeName:a,messageKey:s,prohibited:i})
else{var u=null!==o?"hasRole":"noRole"
u+=i.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:u,prohibited:i})
var l=Wp(n,{subtreeDescendant:!0})
if(""===Wd(l))return!0}},"aria-required-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=Bd(n),a=n.attrNames,o=rv(r)
if(Array.isArray(t[r])&&(o=Rm(t[r],o)),!r||!a.length||!o.length)return!0
if(function(e,t){return"separator"===t&&!kd(e)}(n,r)||function(e,t){return"combobox"===t&&"false"===oc(e,"aria-expanded").value}(n,r))return!0
if("slider"===r&&oc(n,"aria-valuetext").value)return!0
var i=vp(n),s=o.filter(function(e){return!oc(n,e).value&&!function(e,t){var n
return void 0!==(null===(n=e.implicitAttrs)||void 0===n?void 0:n[t])}(i,e)})
return!s.length||(this.data(s),!1)},"aria-required-children-evaluate":function(e,t,n){var r=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=Bd(n,{dpub:!0}),o=ov(a)
if(null===o)return!0
var i=function(e,t){for(var n,r=[],a=kp(e),o=function(){if(3===n.props.nodeType&&r.push({vNode:n,role:null}),1!==n.props.nodeType||!Rp(n))return 1
var e=xp(n,{noPresentational:!0}),o=function(e){return Ld().find(function(t){return e.hasAttr(t)})}(n),i=!!o||kd(n)
if(!e&&!i||["group","rowgroup"].includes(e)&&t.some(function(t){return t===e}))a.push.apply(a,L(n.children))
else if(e||i){var s=o||(n.hasAttr("tabindex")?"tabindex":void 0)
r.push({role:e,attr:s,vNode:n})}};n=a.shift();)o()
return r}(n,o),s=i.filter(function(e){var t=e.role
return 1===e.vNode.props.nodeType&&!o.includes(t)})
if(s.length){this.relatedNodes(s.map(function(e){return e.vNode}))
var u="true"===oc(n,"aria-busy").value?"aria-busy-fail":"unallowed"
return this.data({messageKey:u,values:s.map(function(e){return function(e,t){var n=e.props,r=n.nodeName
if(3===n.nodeType)return"#text"
var a=Bd(e,{dpub:!0})
return a?"[role=".concat(a,"]"):t?r+"[".concat(t,"]"):r}(e.vNode,e.attr)}).filter(function(e,t,n){return n.indexOf(e)===t}).join(", ")}),!1}return!!function(e,t){return t.some(function(t){var n=t.role
return n&&e.includes(n)})}(o,i)||("true"===oc(n,"aria-busy").value?(this.data({messageKey:"aria-busy"}),!0):(this.data(o),!(!r.includes(a)||i.some(Pb))&&void 0))},"aria-required-children-matches":function(e,t){var n=Bd(t,{dpub:!0})
return!!ov(n)},"aria-required-parent-evaluate":function(e,t,n){var r=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=Mb(n,r)
if(!a)return!0
var o=function(e){for(var t=[],n=null;e;){if(e.getAttribute("id")){var r=xa(e.getAttribute("id"));(n=$l(e).querySelector("[aria-owns~=".concat(r,"]")))&&t.push(n)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,s=o.length;i<s;i++)if(!(a=Mb(pu(o[i]),r,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var n=Bd(t)
return!!av(n)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=xp(arguments.length>2?arguments[2]:void 0)
return!!(t.supportedRoles||[]).includes(n)||!(!n||"presentation"===n||"none"===n)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,n){var r=n.attrNames.filter(function(t){var n=nc.ariaAttrs[t]
if(!sv(t))return!1
var r=n.unsupported
return"object"!==o(r)?!!r:!gp(e,r.exceptions)})
return!!r.length&&(this.data(r),!0)},"aria-valid-attr-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r=[],a=/^aria-/
return n.attrNames.forEach(function(e){-1===t.indexOf(e)&&a.test(e)&&!sv(e)&&r.push(e)}),!r.length||(this.data(r),!1)},"aria-valid-attr-value-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r="",a="",o=[],s=/^aria-/,u=["aria-errormessage"],l={"aria-controls":function(){var e,t=!["false",null].includes(null!==(e=oc(n,"aria-haspopup").value)&&void 0!==e?e:null)
return t&&(r='aria-controls="'.concat(oc(n,"aria-controls").value,'"'),a="controlsWithinPopup"),"false"!==oc(n,"aria-expanded").value&&"false"!==oc(n,"aria-selected").value&&!1===t},"aria-current":function(e){e||(r='aria-current="'.concat(oc(n,"aria-current").value,'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==oc(n,"aria-expanded").value},"aria-describedby":function(e){e||(r='aria-describedby="'.concat(oc(n,"aria-describedby").value,'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(r='aria-labelledby="'.concat(oc(n,"aria-labelledby").value,'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return n.attrNames.forEach(function(e){if(!u.includes(e)&&!t.includes(e)&&s.test(e)){var i,c=n.attr(e)
try{i=iv(n,e)}catch(t){return r="".concat(e,'="').concat(c,'"'),void(a="idrefs")}l[e]&&!l[e](i)||i||(""!==c||function(e){var t
return"string"===(null===(t=nc.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(r=e,a="empty"))}}),o.length?(this.data(o),!1):!r||void this.data({messageKey:a,needsReview:r})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!n.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var r=n.attr(t.attribute)
return!!Wd(r)||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,n){if("input"!==n.props.nodeName)return!0
var r=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":r,"cc-exp":["text","search","month","tel"],"cc-exp-month":r,"cc-exp-year":r,"cc-csc":r,"transaction-amount":r,"bday-day":r,"bday-month":r,"bday-year":r,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach(function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])})
var s=n.attr("autocomplete").split(/\s+/g).map(function(e){return e.toLowerCase()}),u=s[s.length-1]
if(of.stateTerms.includes(u))return!0
var l=i[u],c=n.hasAttr("type")?Wd(n.attr("type")).toLowerCase():"text"
return c=rg().includes(c)?c:"text",void 0===l?"text"===c:l.includes(c)},"autocomplete-matches":function(e,t){var n=t.attr("autocomplete")
if(!n||""===Wd(n))return!1
var r=t.props.nodeName
if(!1===["textarea","input","select"].includes(r))return!1
var a=t.attr("aria-readonly")||"false"
if(t.hasAttr("readonly")||"true"===a.toLowerCase())return!1
if("input"===r&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var o=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===o.toLowerCase())return!1
var i=Bd(t),s=Fm(t.attr("tabindex"))
if(s<0&&t.hasAttr("role")){var u=nc.ariaRoles[i]
if(void 0===u||"widget"!==u.type)return!1}return!(s<0&&t.actualNode&&!Oc(t)&&!Rp(t))},"autocomplete-valid-evaluate":function(e,t,n){var r=n.attr("autocomplete")||""
return sf(r,t)},"avoid-inline-spacing-evaluate":function(e,t){var n=t.cssProperties.filter(function(t){if("important"===e.style.getPropertyPriority(t))return t})
return!(n.length>0&&(this.data(n),1))},"braille-label-equivalent-evaluate":function(e,t,n){var r
if(!(null!==(r=oc(n,"aria-braillelabel").value)&&void 0!==r?r:"").trim())return!0
try{return""!==Wd(tf(n))}catch(e){return}},"braille-roledescription-equivalent-evaluate":function(e,t,n){var r,a,o=null!==(r=oc(n,"aria-brailleroledescription").value)&&void 0!==r?r:""
if(""===Wd(o))return!0
var i=null!==(a=oc(n,"aria-roledescription").value)&&void 0!==a?a:null
return"string"!=typeof i?(this.data({messageKey:"noRoleDescription"}),!1):""!==Wd(i)||(this.data({messageKey:"emptyRoleDescription"}),!1)},"bypass-matches":function(e,t,n){return!Kb(0,0,n)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,n){return!Vm(n,"track").some(function(e){return"captions"===(e.attr("kind")||"").toLowerCase()})&&void 0},"caption-faked-evaluate":function(e){var t=Vd(e),n=t[0]
return t.length<=1||n.length<=1||e.rows.length<=1||n.reduce(function(e,t,r){return e||t!==n[r+1]&&void 0!==n[r+1]},!1)},"color-contrast-evaluate":function(e,t,r){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,s=t.boldValue,u=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!Oc(e))return this.data({messageKey:"hidden"}),!0
var f=Op(r,!1,!0)
if(a&&function(e){var t={nonBmp:!0},n=_p(e,t),r=""===Wd(rf(e,t))
return n&&r}(f))this.data({messageKey:"nonBmp"})
else{var h=n.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),g=h.getPropertyValue("font-weight"),v=parseFloat(g)>=s||"bold"===g,b=Math.ceil(72*m)/96,y=v&&b<u||!v&&b<l?c.normal:c.large,w=y.expected,D=y.minThreshold,E=y.maxThreshold,x=function(e,t){var n=t.pseudoSizeThreshold,r=void 0===n?.25:n,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*r
do{if(Nb(e.actualNode,":before")+Nb(e.actualNode,":after")>i)return e}while(e=e.parent)}}(r,{ignorePseudo:i,pseudoSizeThreshold:p})
if(x)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:v?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:w+":1"}),void this.relatedNodes(x.actualNode)
var A=$v(e,{minRatio:.001,maxRatio:d})
if(null!==A){var F=[],C=Yv(e,F,d),k=eb(e,!1,C,t),T=null,R=null,N=null
if(0===A.length)T=Jv(C,k)
else if(k&&C){N=[].concat(L(A),[C]).reduce(Ov)
var _=Jv(C,k),S=Jv(C,N),O=Jv(N,k);(T=Math.max(_,S,O))!==_&&(R=S>O?"shadowOnBgColor":"fgOnShadowColor")}var M=T>w
if("number"==typeof D&&("number"!=typeof T||T<D)||"number"==typeof E&&("number"!=typeof T||T>E))return this.data({contrastRatio:T}),!0
var P,I,j=Math.floor(100*T)/100
null===C?Lf.get("colorParse")?(P="colorParse",I=Lf.get("colorParse")):P=Lf.get("bgColor"):M||(P=R),null===k&&Lf.get("colorParse")&&(P="colorParse",I=Lf.get("colorParse"))
var B=1===j,q=1===f.length
return B?P=Lf.set("bgColor","equalRatio"):M||!q||o||(P="shortTextContent"),this.data({fgColor:k?k.toHexString():void 0,bgColor:C?C.toHexString():void 0,contrastRatio:j,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:v?"bold":"normal",messageKey:P,expectedContrastRatio:w+":1",shadowColor:N?N.toHexString():void 0,colorParse:I}),null===k||null===C||B||q&&!o&&!M?(P=null,Lf.clear(),void this.relatedNodes(F)):(M||this.relatedNodes(F),M)}this.data({messageKey:"complexTextShadows"})}},"color-contrast-matches":function(e,t){var r=t.props,o=r.nodeName,i=r.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(ob(t)||dd(t))return!1
if(["input","select","textarea"].includes(o)){var s=n.getComputedStyle(e),u=parseInt(s.getPropertyValue("text-indent"),10)
if(u){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+u,right:l.right+u},!ch(l,e))return!1}return!0}var c=Hl(t,"label")
if("label"===o||c){var d=c||e,p=c?pu(c):t
if(d.htmlFor){var f=$l(d).getElementById(d.htmlFor),h=f&&pu(f)
if(h&&ob(h))return!1}var m=Vm(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&ob(m))return!1}for(var g=[],v=t;v;){if(v.props.id){var b=qg(v).filter(function(e){return hh(e.getAttribute("aria-labelledby")||"").includes(v.props.id)}).map(function(e){return pu(e)})
g.push.apply(g,L(b))}v=v.parent}if(g.length>0&&g.every(ob))return!1
if(!function(e){var t=Op(e,!1,!0)
return""!==t&&""!==rf(t,Qb)&&e.children.some(function(e){return"#text"===e.props.nodeName&&!Sp(e)})}(t))return!1
if(!parseFloat(t.getComputedStylePropertyValue("font-size")))return!1
for(var y=a.createRange(),w=t.children,D=0;D<w.length;D++){var E=w[D]
3===E.actualNode.nodeType&&""!==Wd(E.actualNode.nodeValue)&&y.selectNodeContents(E.actualNode)}var x=Array.from(y.getClientRects()),A=Ql(t)
return x.some(function(t){var n=ch(t,e)
if(!A.length)return n
var r=A.some(function(e){return Wl(t,e.boundingClientRect)})
return n&&r})},"css-orientation-lock-evaluate":function(e,t,n,r){var a=(r||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,s=void 0===i?0:i
if(o&&o.length){for(var u=!1,l=[],c=o.reduce(function(e,t){var n=t.sheet,r=t.root,a=t.shadowId||"topDocument"
if(e[a]||(e[a]={root:r,rules:[]}),!n||!n.cssRules)return e
var o=Array.from(n.cssRules)
return e[a].rules=e[a].rules.concat(o),e},{}),d=function(){var e=f[p],t=c[e],n=t.root,r=t.rules.filter(h)
if(!r.length)return 1
r.forEach(function(e){var t=e.cssRules
Array.from(t).forEach(function(e){var t=function(e){var t=e.selectorText,n=e.style
if(!t||n.length<=0)return!1
var r=n.transform||n.webkitTransform||n.msTransform||!1
if(!r&&!n.rotate)return!1
var a=function(e){if(!e)return 0
var t=e.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)
if(!t)return 0
var n=K(t,3)
return m(n[1],n[2])}(r),o=a+m("rotate",n.rotate)
return!!o&&(o=Math.abs(o),!(Math.abs(o-180)%180<=s)&&Math.abs(o-90)%90<=s)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var r=Array.from(n.querySelectorAll(e.selectorText))||[]
l=l.concat(r)}u=u||t})})},p=0,f=Object.keys(c);p<f.length;p++)d()
return!u||(l.length&&this.relatedNodes(l),!1)}function h(e){var t=e.type,n=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(n)||/orientation:\s*portrait/i.test(n))}function m(e,t){switch(e){case"rotate":case"rotateZ":return g(t)
case"rotate3d":var n=K(t.split(",").map(function(e){return e.trim()}),4),r=n[2],a=n[3]
if(0===parseInt(r))return
return g(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var n=K(t,2),r=n[0],a=n[1]
return v(Math.atan2(parseFloat(a),parseFloat(r)))}var o=parseFloat(t[8]),i=Math.asin(o),s=Math.cos(i)
return v(Math.acos(parseFloat(t[0])/s))}(t)
default:return 0}}function g(e){var t=K(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(!t)return 0
var n,r,a=parseFloat(e.replace(t,""))
switch(t){case"rad":return v(a)
case"grad":return r=a,(r%=400)<0&&(r+=400),Math.round(r/400*360)
case"turn":return n=a,Math.round(360/(1/n))
default:return parseInt(a)}}function v(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(_g(e)){var t=Vd(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return _g(e)},"deprecatedrole-evaluate":function(e,t,n){var r=xp(n,{dpub:!0,fallback:!0}),a=nc.ariaRoles[r]
return!(null==a||!a.deprecated||(this.data(r),0))},"dlitem-evaluate":function(e){var t=Ac(e),n=t.nodeName.toUpperCase(),r=Bd(t)
return"DIV"===n&&["presentation","none",null].includes(r)&&(n=(t=Ac(t)).nodeName.toUpperCase(),r=Bd(t)),"DL"===n&&!(r&&!["presentation","none","list"].includes(r))},"doc-has-title-evaluate":function(){var e=a.title
return!!Wd(e)},"duplicate-id-active-matches":function(e,t){var n=t.attr("id").trim(),r='*[id="'.concat(xa(n),'"]'),a=Array.from($l(e).querySelectorAll(r))
return!Jg(e)&&a.some(kd)},"duplicate-id-after":function(e){var t=[]
return e.filter(function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)})},"duplicate-id-aria-matches":function(e){return Jg(e)},"duplicate-id-evaluate":function(e,t,n){var r=n.attr("id").trim()
if(!r)return!0
var a=$l(e),o=Array.from(a.querySelectorAll('[id="'.concat(xa(r),'"]'))).filter(function(t){return t!==e})
return o.length&&this.relatedNodes(o),this.data(r),0===o.length},"duplicate-id-misc-matches":function(e,t){var n=t.attr("id").trim(),r='*[id="'.concat(xa(n),'"]'),a=Array.from($l(e).querySelectorAll(r))
return!Jg(e)&&a.every(function(e){return!kd(e)})},"duplicate-img-label-evaluate":function(e,t,n){if(["none","presentation"].includes(xp(n)))return!1
var r=Pu(n,t.parentSelector)
if(!r)return!1
var a=Op(r,!0).toLowerCase()
return""!==a&&a===tf(n).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,n){var r=this
if(!n.attr("id"))return!1
if(n.actualNode){var a=$l(n.actualNode),o=xa(n.attr("id")),i=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(i),!i.length)return!1
try{return i.some(function(e){if(Oc(e)){var t=Wd(Kp(e,{inControlContext:!0,startNode:n}))
return r.data({explicitLabel:t}),!!t}return!0})}catch(e){return}}},"fallbackrole-evaluate":function(e,t,n){var r=hh(n.attr("role"))
return!(r.length<=1)&&(!function(e,t){return!bp(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(n,r)||void 0)},"focusable-content-evaluate":function(e,t,n){var r=n.tabbableElements
return!!r&&r.filter(function(e){return e!==n}).length>0},"focusable-disabled-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter(function(e){return r.includes(e.props.nodeName)})
return this.relatedNodes(o.map(function(e){return e.actualNode})),!(0!==o.length&&!Pf())||!!o.every(function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t})&&void 0},"focusable-element-evaluate":function(e,t,n){return!(!n.hasAttr("contenteditable")||!function e(t){var r=t.attr("contenteditable")
if("true"===r||""===r)return!0
if("false"===r)return!1
var a=Pu(n.parent,"[contenteditable]")
return!!a&&e(a)}(n))||Td(n)},"focusable-modal-open-evaluate":function(e,t,n){var r=n.tabbableElements.map(function(e){return e.actualNode})
return!r||!r.length||!Pf()||void this.relatedNodes(r)},"focusable-no-name-evaluate":function(e,t,n){if(!Td(n))return!1
try{return!tf(n)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter(function(e){return!r.includes(e.props.nodeName)})
return this.relatedNodes(o.map(function(e){return e.actualNode})),!(0!==o.length&&!Pf())||!!o.every(function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t})&&void 0},"frame-focusable-content-evaluate":function(e,t,n){if(n.children)try{return!n.children.some(function(e){return Ab(e)})}catch(e){return}},"frame-focusable-content-matches":function(e,t,n){var r,a
return!n.initiator&&!n.focusable&&(null===(r=n.size)||void 0===r?void 0:r.width)*(null===(a=n.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter(function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var n=e.node.ancestry.flat(1/0).join(" > ")
return t[n]=e,!0}var r=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[r]&&(t[r].result=!0),!1})},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e,t){var n=t.attr("title")
return!!Wd(n)},"has-alt-evaluate":function(e,t,n){var r=n.props.nodeName
return!!["img","input","area"].includes(r)&&n.hasAttr("alt")},"has-descendant-after":function(e){return e.some(function(e){return!0===e.result})&&e.forEach(function(e){e.result=!0}),e},"has-descendant-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&Pf())return!0
var r=_m(n,t.selector,function(e){return Rp(e)})
return this.relatedNodes(r.map(function(e){return e.actualNode})),r.length>0},"has-global-aria-attribute-evaluate":function(e,t,n){var r=Ld().filter(function(e){return n.hasAttr(e)})
return this.data(r),r.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==bp(t,{chromium:!0})},"has-lang-evaluate":function(e,t,n){var r=void 0!==a&&zs(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&wb(n.attr("xml:lang"))&&!wb(n.attr("lang"))&&!r?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some(function(e){return wb(n.attr(e))})||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,n){try{return""!==Wd(Wp(n))}catch(e){return}},"has-widget-role-evaluate":function(e,t,n){var r=Bd(n)
if(null===r)return!1
var a=Rf(r)
return"widget"===a||"composite"===a},"heading-matches":function(e,t){return"heading"===xp(t)},"heading-order-after":function(e){var t=function(e){return(e=L(e)).sort(function(e,t){var n=e.node,r=t.node
return n.ancestry.length-r.ancestry.length}),e.reduce(ub,[]).filter(function(e){return-1!==e.level})}(e)
return e.forEach(function(e){e.result=function(e,t){var n,r,a,o,i=lb(t,e.node.ancestry),s=null!==(n=null===(r=t[i])||void 0===r?void 0:r.level)&&void 0!==n?n:-1,u=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==s?s-u<=1:void 0)}(e,t)}),e},"heading-order-evaluate":function(){var e=du.get("headingOrder")
if(e)return!0
var t=_m(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",Rp)
return e=t.map(function(e){return{ancestry:[iu(e.actualNode)],level:sb(e)}}),this.data({headingOrder:e}),du.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,n){var r=cf(n),a=n.attr("title")
return!!r&&(a||(a="",Od(n,"aria-describedby")&&(a=Nd(n,"aria-describedby").map(function(e){return e?tf(e):""}).join(""))),Wd(a)===Wd(r))},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Df(r)){var a=n.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=Ac(e),i=o&&n.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,n){if(n.hasAttr("id")){if(!n.actualNode)return
var r=$l(e),a=xa(n.attr("id")),o=r.querySelector('label[for="'.concat(a,'"]'))
if(o&&!Rp(o)){var i
try{i=tf(n).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!Vb(0,t)},"html5-scope-evaluate":function(e){return!Tf(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter(function(e){return void 0!==e.result}),n=[],r={},a=function(e){var a,o=t[e],i=o.data,s=i.name,u=i.urlProps
if(r[s])return 1
var l=t.filter(function(t,n){return t.data.name===s&&n!==e}),c=l.every(function(e){return ib(e.data.urlProps,u)})
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,L(l.map(function(e){return e.relatedNodes[0]}))),r[s]=l,n.push(o)},o=0;o<t.length;o++)a(o)
return n},"identical-links-same-purpose-evaluate":function(e,t,n){var r=Sd.accessibleTextVirtual(n),a=Sd.sanitize(Sd.removeUnicode(r,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:zl.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!tf(t))return!1
var n=xp(e)
return!n||"link"===n},"implicit-evaluate":function(e,t,n){try{var r=Pu(n,"label")
if(r){var a=Wd(tf(r,{inControlContext:!0,startNode:n}))
return r.actualNode&&this.relatedNodes([r.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.minValue,i=t.maxValue,s=t.normalValue,u=void 0===s?0:s,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(r)||c&&!If(e))return!0
var d={}
"number"==typeof o&&(d.minValue=o),"number"==typeof i&&(d.maxValue=i)
var p=e.style.getPropertyValue(r)
if(["inherit","unset","revert","revert-layer"].includes(p))return this.data(q({value:p},d)),!0
var f=function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.normalValue,i=n.getComputedStyle(e),s=i.getPropertyValue(r)
if("normal"===s)return o
var u=parseFloat(s)
if(a)return u
var l=parseFloat(i.getPropertyValue("font-size")),c=Math.round(u/l*100)/100
return isNaN(c)?s:c}(e,{absoluteValues:a,cssProperty:r,normalValue:u})
return this.data(q({value:f},d)),"number"==typeof f?("number"!=typeof o||f>=o)&&("number"!=typeof i||f<=i):void 0},"inserted-into-focus-order-matches":function(e){return Af(e)},"internal-link-present-evaluate":function(e,t,n){return Vm(n,"a[href]").some(function(e){return/^#[^/!]/.test(e.attr("href"))})},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=[],a=[]
if(n.children){for(var o=yb(n.children);o.length;){var i,s=o.shift(),u=s.vChild,l=s.nested
if(t.divGroups&&!l&&bb(u)){if(!u.children)return
var c=yb(u.children,!0)
o.push.apply(o,L(c))}else{var d=vb(u,l,t)
d&&(a.includes(d)||a.push(d),1===(null==u||null===(i=u.actualNode)||void 0===i?void 0:i.nodeType)&&r.push(u.actualNode))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(r),!0)}},"invalidrole-evaluate":function(e,t,n){var r=hh(n.attr("role"))
return!!r.every(function(e){return!jd(e.toLowerCase(),{allowAbstract:!0})})&&(this.data(r),!0)},"is-element-focusable-evaluate":function(e,t,n){return kd(n)},"is-initiator-matches":Kb,"is-on-screen-evaluate":function(e){return Oc(e)},"is-visible-matches":function(e){return Oc(e)},"is-visible-on-screen-matches":function(e,t){return Oc(t)},"label-content-name-mismatch-evaluate":function(e,t,n){var r,a,o,i,s=null==t?void 0:t.pixelThreshold,u=null!==(r=null==t?void 0:t.occurrenceThreshold)&&void 0!==r?r:null==t?void 0:t.occuranceThreshold,l=Kp(e).toLowerCase(),c=Op(n,!1,!1,{ignoreIconLigature:!0,pixelThreshold:s,occurrenceThreshold:u}).toLowerCase()
return!c||(af(l)<1||af(c)<1?void 0:(a=c,o=Db(l),i=Db(a),!(!o||!i)&&o.includes(i)))},"label-content-name-mismatch-matches":function(e,t){var n=xp(e)
return!!(n&&Ug("widget").includes(n)&&Gg().includes(n)&&(Wd(Pd(t))||Wd(Md(e)))&&Wd(Op(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var n=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(n)},"landmark-has-body-context-matches":function(e,t){return t.hasAttr("role")||!Hl(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=Ug("landmark"),n=Ac(e),r=xp(e)
for(this.data({role:r});n;){var a=Bd(n)
if(a||"FORM"===n.nodeName.toUpperCase()||(a=bp(n)),a&&t.includes(a)&&("main"!==a||"complementary"!==r))return!1
n=Ac(n)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter(function(e){var n=t.find(function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText})
return n?(n.result=!1,n.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)})},"landmark-is-unique-evaluate":function(e,t,n){var r=xp(e),a=tf(n)
return a=a?a.toLowerCase():null,this.data({role:r,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){return"landmark"===Rf(t)&&Rp(t)},"layout-table-matches":function(e){return!_g(e)&&!kd(e)},"link-in-text-block-evaluate":function(e,t){var n=t.requiredContrastRatio,r=t.allowSameColor
if(Rb(e))return!1
for(var a=Ac(e);a&&1===a.nodeType&&!Rb(a);)a=Ac(a)
if(a){this.relatedNodes([a])
var o=eb(e),i=eb(a),s=Yv(e),u=Yv(a),l=o&&i?kb(o,i):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=n)return!0
var c=s&&u?kb(s,u):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=n)return!0
if(!c){var d,p=null!==(d=Lf.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void Lf.clear()}if(l)return!(!r||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:n,nodeBackgroundColor:s?s.toHexString():void 0,parentBackgroundColor:u?u.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:n,nodeColor:o?o.toHexString():void 0,parentColor:i?i.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=Wd(e.innerText),n=Bd(e)
return(!n||"link"===n)&&!!t&&!!Oc(e)&&Sf(e)},"link-in-text-block-style-evaluate":function(e){if(Cb(e))return!1
for(var t=Ac(e);t&&1===t.nodeType&&!Cb(t);)t=Ac(t)
if(t){if(this.relatedNodes([t]),Cv(e,t))return!0
if(!function(e){for(var t=0,r=["before","after"];t<r.length;t++){var a=r[t]
if("none"!==n.getComputedStyle(e,":".concat(a)).getPropertyValue("content"))return!0}return!1}(e))return!1
this.data({messageKey:"pseudoContent"})}},"listitem-evaluate":function(e,t,n){var r=n.parent
if(r){var a=Bd(r),o=xp(r)
return!!["presentation","none","list"].includes(o)||(a&&jd(a)&&this.data({messageKey:"roleNotValid"}),!1)}},"matches-definition-evaluate":function(e,t,n){return gp(n,t.matcher)},"meta-refresh-evaluate":function(e,t,n){var r=t||{},a=r.minDelay,o=r.maxDelay,i=K((n.attr("content")||"").trim().split(wv),1)[0]
if(!i.match(Dv))return!0
var s=parseFloat(i)
return this.data({redirectDelay:s}),"number"==typeof a&&s<=t.minDelay||"number"==typeof o&&s>t.maxDelay},"meta-viewport-scale-evaluate":function(e,t,n){var r=t||{},a=r.scaleMinimum,o=void 0===a?2:a,i=r.lowerBound,s=void 0!==i&&i,u=n.attr("content")||""
if(!u)return!0
var l=u.split(/[;,]/).reduce(function(e,t){var n=t.trim()
if(!n)return e
var r=K(n.split("="),2),a=r[0],o=r[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),s=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===s&&(s=1),"maximum-scale"===i&&parseFloat(s)<0||(e[i]=s),e},{})
if(s&&l["maximum-scale"]&&parseFloat(l["maximum-scale"])<s)return!0
if(!s&&"no"===l["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(l["user-scalable"])
return!s&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e,t,n){var r=xa(n.attr("id")),a=e.parentNode,o=$l(e)
o=o.documentElement||o
var i=Array.from(o.querySelectorAll('label[for="'.concat(r,'"]')))
for(i.length&&(i=i.filter(function(e){return!Dc(e)}));a;)"LABEL"===a.nodeName.toUpperCase()&&-1===i.indexOf(a)&&i.push(a),a=a.parentNode
if(this.relatedNodes(i),i.length>1){var s=i.filter(function(e){return Rp(e)})
if(s.length>1)return
return!Nd(e,"aria-labelledby").some(function(e){return(null==e?void 0:e.actualNode)===s[0]})&&void 0}return!1},"nested-interactive-matches":function(e,t){var n=xp(t)
return!!n&&!!nc.ariaRoles[n].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){var n=e.hasAttribute("controls")
if(e.hasAttribute("loop"))return n
if(e.duration){var r=t.allowedDuration,a=void 0===r?3:r
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return K(t,2)[1].split(",").map(function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),n=0,r=1;t.length>0;)n+=r*parseInt(t.pop(),10),r*=60
return parseFloat(n)}(e):parseFloat(e)})}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=a||!!n}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":Gb,"no-focusable-content-evaluate":function(e,t,n){if(n.children)try{var r=Eb(n)
if(!r.length)return!0
var a=r.filter(xb)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(r),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,n){var r,a,o=xp(n,{noImplicit:!0})
this.data(o)
try{r=Wd(Qp(n)).toLowerCase(),a=Wd(tf(n)).toLowerCase()}catch(e){return}return!(!a&&!r)&&!((a||!r)&&a.includes(r))&&void 0},"no-naming-method-matches":function(e,t){var n=vp(t).namingMethods
return!(n&&0!==n.length||"combobox"===Bd(t)&&Vm(t,'input:not([type="hidden"])').length||ev(t,{popupRoles:["listbox"]}))},"no-negative-tabindex-matches":function(e,t){var n=Fm(t.attr("tabindex"))
return null===n||n>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,n){var r=n.props.nodeName,a=(n.attr("type")||"").toLowerCase(),o=n.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==r||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[Gb,Wb].every(function(n){return n(e,t)})},"only-dlitems-evaluate":function(e,t,n){var r=["definition","term","list"],a=n.children.reduce(function(e,t){var n=t.actualNode
return"DIV"===n.nodeName.toUpperCase()&&null===xp(n)?e.concat(t.children):e.concat(t)},[]).reduce(function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
if(1===n.nodeType&&Rp(n)){var o=Bd(n);("DT"!==a&&"DD"!==a||o)&&(r.includes(o)||e.badNodes.push(n))}else 3===n.nodeType&&""!==n.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e},{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,n){var r=!1,a=!1,o=!0,i=[],s=[],u=[]
return n.children.forEach(function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&Rp(t)){o=!1
var n="LI"===t.nodeName.toUpperCase(),l=xp(e),c="listitem"===l
n||c||i.push(t),n&&!c&&(s.push(t),u.includes(l)||u.push(l)),c&&(a=!0)}}else r=!0}),r||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(s),this.data({messageKey:"roleNotValid",roles:u.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,n){var r=Array.from(e.parentNode.children),a=r.indexOf(e),o=(t=t||{}).margins||[],i=r.slice(a+1).find(function(e){return"P"===e.nodeName.toUpperCase()}),s=r.slice(0,a).reverse().find(function(e){return"P"===e.nodeName.toUpperCase()}),u=bv(e),l=i?bv(i):null,c=s?bv(s):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!l||!yv(u,l,o))return!0
var m=Hl(n,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!yv(u,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),n=e.textContent.trim()
return!(0===n.length||(n.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter(function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()}).length},"page-no-duplicate-after":function(e){return e.filter(function(e){return"ignored"!==e.data})},"page-no-duplicate-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var r="page-no-duplicate;"+t.selector
if(!du.get(r)){du.set(r,!0)
var a=_m(i._tree[0],t.selector,function(e){return Rp(e)})
return"string"==typeof t.nativeScopeFilter&&(a=a.filter(function(e){return e.hasAttr("role")||!Hl(e,t.nativeScopeFilter)})),"string"==typeof t.role&&(a=a.filter(function(e){return xp(e)===t.role})),this.relatedNodes(a.filter(function(e){return e!==n}).map(function(e){return e.actualNode})),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==bp(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,n){var r=Bd(n)
if(["presentation","none"].includes(r)&&["iframe","frame"].includes(n.props.nodeName)&&n.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:n.props.nodeName}),!1
var a=xp(n)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(r))return!1
var o,i=Ld().some(function(e){return n.hasAttr(e)}),s=kd(n)
return o=i&&!s?"globalAria":!i&&s?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter(function(e){return e.data.isIframe})
return e.forEach(function(e){if(!e.result&&1!==e.node.ancestry.length){var n,r=e.node.ancestry.slice(0,-1),a=te(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
if(ym(r,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}}),t.forEach(function(e){e.result||(e.result=!0)}),e},"region-evaluate":function(e,t,n){return this.data({isIframe:["iframe","frame"].includes(n.props.nodeName)}),!du.get("regionlessNodes",function(){return function(e){return gv(i._tree[0],e).map(function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e}).filter(function(e,t,n){return n.indexOf(e)===t})}(t)}).includes(n)},"same-caption-summary-evaluate":function(e,t,n){if(void 0!==n.children){var r=n.attr("summary"),a=n.children.find(fv),o=!!a&&Wd(Wp(a))
return!(!o||!r)&&Wd(r).toLowerCase()===Wd(o).toLowerCase()}},"scope-value-evaluate":function(e,t,n){var r=n.attr("scope").toLowerCase()
return-1!==t.values.indexOf(r)},"scrollable-region-focusable-matches":function(e,t){return void 0!==Zh(e,13)&&!1===ev(t)&&(r=(n=t).boundingClientRect,Vm(n,"*").some(function(e){if(!Df(e,!0,!0))return!1
var t,n=[]
return wf(e)?(t=n).push.apply(t,L(function(e){var t=a.createRange()
return t.selectNodeContents(e.actualNode),Array.from(t.getClientRects())}(e))):n=[e.boundingClientRect],n.some(function(e){return e.left<r.left||e.right>r.right||e.top<r.top||e.bottom>r.bottom})}))
var n,r},"skip-link-evaluate":function(e){var t=yd(e,"href")
return!!t&&(Rp(t)||void 0)},"skip-link-matches":function(e){return Yf(e)&&_c(e)},"structured-dlitems-evaluate":function(e,t,n){var r=n.children
if(!r||!r.length)return!1
for(var a,o=!1,i=!1,s=0;s<r.length;s++){if("DT"===(a=r[s].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"summary-interactive-matches":function(e,t){var n,r,a,o=t.parent
return!("details"!==o.props.nodeName||(a=null===(r=(n=t).actualNode)||void 0===r?void 0:r.parentElement)&&a!==n.parent.actualNode)&&o.children.find(function(e){return"summary"===e.props.nodeName})===t},"svg-namespace-matches":Vb,"svg-non-empty-title-evaluate":function(e,t,n){if(n.children){var r=n.children.find(function(e){return"title"===e.props.nodeName})
if(!r)return this.data({messageKey:"noTitle"}),!1
try{if(""===Wp(r,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,n){var r=Fm(n.attr("tabindex"))
return null===r||r<=0},"table-or-grid-role-matches":function(e,t){var n=xp(t)
return["treegrid","grid","table"].includes(n)},"target-offset-evaluate":function(e,t,n){var r=(null==t?void 0:t.minOffset)||24
if(zc(10*r,n.boundingClientRect))return this.data({messageKey:"large",minOffset:r}),!0
var a,o=[],i=r,s=te(ld(n,r))
try{for(s.s();!(a=s.n()).done;){var u=a.value
if("widget"===Rf(u)&&kd(u)){var l=null
try{l=Vc(n,u,r/2)}catch(e){if(e.message.startsWith("splitRects"))return void this.data({messageKey:"tooManyRects",closestOffset:0,minOffset:r})
throw e}null!==l&&(.05+(l=2*gb(l))>=r||(i=Math.min(i,l),o.push(u)))}}}catch(e){s.e(e)}finally{s.f()}return 0===o.length?(this.data({closestOffset:i,minOffset:r}),!0):(this.relatedNodes(o.map(function(e){return e.actualNode})),o.some(Td)?(this.data({closestOffset:i,minOffset:r}),!Td(n)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:i,minOffset:r}))},"target-size-evaluate":function(e,t,n){var r=(null==t?void 0:t.minSize)||24,a=n.boundingClientRect
if(zc(10*r,a))return this.data({messageKey:"large",minSize:r}),!0
var o=zc.bind(null,r),i=ld(n),s=function(e,t){return t.filter(function(t){return!db(t,e)&&hb(e,t)})}(n,i),u=function(e,t){var n,r=[],a=[],o=te(t)
try{for(o.s();!(n=o.n()).done;){var i=n.value
!hb(e,i)&&Hc(e,i)&&"none"!==pb(i)&&(db(e,i)?r.push(i):a.push(i))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:r,partialObscuringElms:a}}(n,i),l=u.fullyObscuringElms,c=u.partialObscuringElms
if(s.length&&(l.length||!o(a)))return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(mb(s))
if(l.length)return this.relatedNodes(mb(l)),this.data({messageKey:"obscured"}),!0
var d=!Td(n)&&void 0
if(!o(a))return this.data(q({minSize:r},fb(a))),d
var p=c.filter(function(e){return"widget"===Rf(e)&&kd(e)})
if(!p.length)return this.data(q({minSize:r},fb(a))),!0
var f=function(e,t,n){var r,a=e.boundingClientRect,o=t.map(function(e){return"inline"===e.getComputedStylePropertyValue("display")?e.clientRects:e.boundingClientRect}).flat(1/0)
try{r=Gc(a,o)}catch(e){return null}return function(e,t){return e.reduce(function(e,n){var r=zc(t,e)
return r!==zc(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n})}(r,n)}(n,p,r)
if(f){if(!o(f)){if(s.length)return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(mb(s))
var h=p.every(Td),m="partiallyObscured".concat(h?"":"NonTabbable")
return this.data(q({messageKey:m,minSize:r},fb(f))),this.relatedNodes(mb(p)),h?d:void 0}return this.data(q({minSize:r},fb(f||a))),this.relatedNodes(mb(p)),!0}this.data({minSize:r,messageKey:"tooManyRects"})},"td-has-header-evaluate":function(e){var t=[],n=kg(e),r=Vd(e)
return n.forEach(function(e){Ef(e)&&Ng(e)&&!nv(e)&&(Rg(e,r).some(function(e){return null!==e&&!!Ef(e)})||t.push(e))}),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],n={},r=0;r<e.rows.length;r++)for(var a=e.rows[r],o=0;o<a.cells.length;o++){var i=a.cells[o]
t.push(i)
var s=i.getAttribute("id")
s&&(n[s]=xp(i))}var u=_(_(_(_({},dv,new Set),lv,new Set),cv,new Set),pv,new Set)
t.forEach(function(e){if(e.hasAttribute("headers")&&Rp(e)){var t=e.getAttribute("headers").trim()
if(t){var r=e.getAttribute("id")
hh(t).forEach(function(t){r&&t===r?u[dv].add(e):n[t]?["columnheader","rowheader"].includes(n[t])||u[cv].add(e):u[lv].add(e)})}else u[pv].add(e)}})
var l,c=te(uv)
try{for(c.s();!(l=c.n()).done;){var d=l.value
if(u[d].size>0){if(this.relatedNodes(L(u[d])),d===pv)return
return this.data({messageKey:d}),!1}}}catch(e){c.e(e)}finally{c.f()}return!0},"th-has-data-cells-evaluate":function(e){var t=kg(e),n=this,r=[]
t.forEach(function(e){var t=e.getAttribute("headers")
t&&(r=r.concat(t.split(/\s+/)))
var n=e.getAttribute("aria-labelledby")
n&&(r=r.concat(n.split(/\s+/)))})
var a=t.filter(function(e){return""!==Wd(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(Bd(e)))}),o=Vd(e),i=!0
return a.forEach(function(e){if(!e.getAttribute("id")||!r.includes(e.getAttribute("id"))){var t=$d(e,o),a=!1
Hd(e)&&(a=Mg("down",t,o).find(function(t){return!Hd(t)&&Rg(t,o).includes(e)})),!a&&Gd(e)&&(a=Mg("right",t,o).find(function(t){return!Gd(t)&&Rg(t,o).includes(e)})),a||n.relatedNodes(e),i=i&&a}}),!!i||void 0},"title-only-evaluate":function(e,t,n){var r=cf(n),a=Fp(n),o=oc(n,"aria-describedby").value
return!(r||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach(function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0}),e.forEach(function(e){e.result=!!t[e.data]}),e},"unique-frame-title-evaluate":function(e,t,n){var r=Wd(n.attr("title")).toLowerCase()
return this.data(r),!0},"unsupportedrole-evaluate":function(e,t,n){var r=xp(n,{dpub:!0,fallback:!0}),a=Id(r)
return a&&this.data(r),a},"valid-lang-evaluate":function(e,t,n){var r=[]
return t.attributes.forEach(function(e){var a=n.attr(e)
if("string"==typeof a){var o=Fh(a),i=t.value?!t.value.map(Fh).includes(o):!ig(o);(""!==o&&i||""!==a&&!Wd(a))&&r.push(e+'="'+n.attr(e)+'"')}}),!(!r.length||"html"!==n.props.nodeName&&!xf(n)||(this.data(r),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var n=Bd(e)
return n&&(Ob[n]||t.roles.includes(n))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Sb[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return $b.every(function(n){return n(e,t)})},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,n){return Fh(n.attr("lang"))===Fh(n.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e,t){var n=Fh(t.attr("lang")),r=Fh(t.attr("xml:lang"))
return ig(n)&&ig(r)}},Xb=Yb,Zb=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function Jb(e){if("string"==typeof e){if(Xb[e])return Xb[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function ey(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function ty(e){e&&(this.id=e.id,this.configure(e))}ty.prototype.enabled=!0,ty.prototype.run=function(e,t,n,r,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var s,u=new Zb(this),l=bu(u,t,r,a)
try{s=this.evaluate.call(l,e.actualNode,i,e,n)}catch(t){return e&&e.actualNode&&(t.errorNode=Fl.toSpec(e)),void a(t)}l.isAsync||(u.result=s,r(u))}else r(null)},ty.prototype.runSync=function(e,t,n){var r=(t=t||{}).enabled
if(!(void 0===r?this.enabled:r))return null
var a,o=this.getOptions(t.options),i=new Zb(this),s=bu(i,t)
s.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(s,e.actualNode,o,e,n)}catch(t){throw e&&e.actualNode&&(t.errorNode=Fl.toSpec(e)),t}return i.result=a,i},ty.prototype.configure=function(e){var t=this
e.evaluate&&!Xb[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=ey(e.options):this.options=e.options),["evaluate","after"].filter(function(t){return e.hasOwnProperty(t)}).forEach(function(n){return t[n]=Jb(e[n])})},ty.prototype.getOptions=function(e){return this._internalCheck?Sl(this.options,ey(e||{})):e||this.options}
var ny=ty,ry=function(e){this.id=e.id,this.result=aa.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function ay(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(Da(aa.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=Jb(e.matches))}function oy(e){if(e.length){var t=!1,n={}
return e.forEach(function(e){var r=e.results.filter(function(e){return e})
n[e.type]=r,r.length&&(t=!0)}),t?n:null}}ay.prototype.matches=function(){return!0},ay.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="mark_gather_start_"+this.id,r="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&km.mark(n)
var i=Wm(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&km.mark(a),i=i.filter(function(e){return Rp(e)}),t.performanceTimer&&(km.mark(o),km.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&(km.mark(r),km.measure("rule_"+this.id+"#gather",n,r)),i},ay.prototype.runChecks=function(e,t,n,r,a,o){var i=this,s=Lu()
this[e].forEach(function(e){var a=i._audit.checks[e.id||e],o=Ph(a,i.id,n)
s.defer(function(e,n){a.run(t,o,r,e,function(e){n(new Xm({ruleId:i.id,method:"".concat(a.id,"#evaluate"),errorNode:new vu(t),error:e}))})})}),s.then(function(t){t=t.filter(function(e){return e}),a({type:e,results:t})}).catch(o)},ay.prototype.runChecksSync=function(e,t,n,r){var a=this,o=[]
return this[e].forEach(function(e){var i=a._audit.checks[e.id||e],s=Ph(i,a.id,n)
o.push(i.runSync(t,s,r))}),{type:e,results:o=o.filter(function(e){return e})}},ay.prototype.run=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
n.performanceTimer&&this._trackPerformance()
var o,i=Lu(),s=new ry(this)
try{o=this.gatherAndMatchNodes(e,n)}catch(e){return void a(e)}n.performanceTimer&&this._logGatherPerformance(o),o.forEach(function(r){i.defer(function(a,o){var i=Lu();["any","all","none"].forEach(function(a){i.defer(function(o,i){t.runChecks(a,r,n,e,o,i)})}),i.then(function(e){var n=oy(e)
n&&(n.node=new vu(r),s.nodes.push(n),t.reviewOnFail&&(["any","all"].forEach(function(e){n[e].forEach(function(e){!1===e.result&&(e.result=void 0)})}),n.none.forEach(function(e){!0===e.result&&(e.result=void 0)}))),a()}).catch(function(e){return o(e)})})}),i.then(function(){n.performanceTimer&&t._logRulePerformance(),setTimeout(function(){r(s)},0)}).catch(function(e){n.performanceTimer&&t._logRulePerformance(),a(e)})},ay.prototype.runSync=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
n.performanceTimer&&this._trackPerformance()
var r=new ry(this),a=this.gatherAndMatchNodes(e,n)
return n.performanceTimer&&this._logGatherPerformance(a),a.forEach(function(a){var o=[];["any","all","none"].forEach(function(r){o.push(t.runChecksSync(r,a,n,e))})
var i=oy(o)
i&&(i.node=a.actualNode?new vu(a):null,r.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach(function(e){i[e].forEach(function(e){!1===e.result&&(e.result=void 0)})}),i.none.forEach(function(e){!0===e.result&&(e.result=void 0)})))}),n.performanceTimer&&this._logRulePerformance(),r},ay.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},ay.prototype._logGatherPerformance=function(e){oa("gather for ".concat(this.id," (").concat(e.length," nodes): ").concat(km.timeElapsed(),"ms")),km.mark(this._markChecksStart)},ay.prototype._logRulePerformance=function(){km.mark(this._markChecksEnd),km.mark(this._markEnd),km.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),km.measure("rule_"+this.id,this._markStart,this._markEnd)},ay.prototype.gatherAndMatchNodes=function(e,t){var n=this,r="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&km.mark(r),o=o.filter(function(t){try{return n.matches(t.actualNode,t,e)}catch(e){throw new Xm({ruleId:n.id,method:"#matches",errorNode:new vu(t),error:e})}}),t.performanceTimer&&(km.mark(a),km.measure("rule_"+this.id+"#matches",r,a)),o},ay.prototype.after=function(e,t){var n,r=this
return Cl(n=this).map(function(e){var t=n._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null}).filter(Boolean).forEach(function(n){var a,o,i,s,u=(a=e.nodes,o=n.id,i=[],a.forEach(function(e){Cl(e).forEach(function(t){t.id===o&&(t.node=e.node,i.push(t))})}),i),l=Ph(n,r.id,t)
try{s=n.after(u,l.options)}catch(t){var c
throw new Xm({ruleId:r.id,method:"".concat(n.id,"#after"),errorNode:null===(c=e.nodes)||void 0===c||null===(c=c[0])||void 0===c?void 0:c.node,error:t})}r.reviewOnFail&&s.forEach(function(e){var t=(r.any.includes(e.id)||r.all.includes(e.id))&&!1===e.result,n=r.none.includes(e.id)&&!0===e.result;(t||n)&&(e.result=void 0)}),u.forEach(function(e){delete e.node,-1===s.indexOf(e)&&(e.filtered=!0)})}),e.nodes=function(e){var t=["any","all","none"],n=e.nodes.filter(function(e){var n=0
return t.forEach(function(t){e[t]=e[t].filter(function(e){return!0!==e.filtered}),n+=e[t].length}),n>0})
return e.pageLevel&&n.length&&(n=[n.reduce(function(e,n){if(e)return t.forEach(function(t){e[t].push.apply(e[t],n[t])}),e})]),n}(e),e},ay.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=Jb(e.matches)),e.impact&&(Da(aa.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var iy=/\{\{.+?\}\}/g,sy=J(function e(t){X(this,e),this.lang="en",this.defaultConfig=t,this.standards=nc,this._init(),this._defaultLocale=null},[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),n=0;n<t.length;n++){var r=t[n],a=this.data.checks[r].messages,o=a.pass,i=a.fail,s=a.incomplete
e.checks[r]={pass:o,fail:i,incomplete:s}}for(var u=Object.keys(this.data.rules),l=0;l<u.length;l++){var c=u[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var g=h[m],v=this.data.failureSummaries[g].failureMessage
e.failureSummaries[g]={failureMessage:v}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.checks[r])throw new Error('Locale provided for unknown check: "'.concat(r,'"'))
this.data.checks[r]=dy(this.data.checks[r],e[r])}}},{key:"_applyRuleLocale",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.rules[r])throw new Error('Locale provided for unknown rule: "'.concat(r,'"'))
this.data.rules[r]=py(this.data.rules[r],e[r])}}},{key:"_applyFailureSummaries",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.failureSummaries[r])throw new Error('Locale provided for unknown failureMessage: "'.concat(r,'"'))
this.data.failureSummaries[r]=fy(this.data.failureSummaries[r],e[r])}}},{key:"applyLocale",value:function(e){this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=hy(this.data.incompleteFallbackMessage,e.incompleteFallbackMessage)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=ly()
this.allowedOrigins=[]
var n,r=te(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
if(a===aa.allOrigins)return void(this.allowedOrigins=["*"])
a!==aa.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){r.e(e)}finally{r.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=yu(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var n=ly()
t.allowedOrigins=n?[n]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=q({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental","deprecated"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,cy(e.rules,this,"addRule"),cy(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new ay(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter(function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]}).forEach(function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())})),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new ny(e)}},{key:"run",value:function(e,t,n,r){var a=this
sg(t),vu.setRunOptions(t)
var o=Lu()
o.defer(xg.loadElementInternals()),o.then(function(){i._selectCache=[]
var o=function(e,t,n){return e.reduce(function(e,r){return Um(r,t,n)?r.preload?(e.later.push(r),e):(e.now.push(r),e):e},{now:[],later:[]})}(a.rules,e,t),s=o.now,u=o.later,l=Lu()
s.forEach(function(n){l.defer(my(n,e,t))})
var c=Lu()
u.length&&c.defer(function(e){jm(t).then(function(t){return e(t)}).catch(function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)})})
var d=Lu()
d.defer(l),d.defer(c),d.then(function(a){var o=a.pop()
if(o&&o.length){var s=o[0]
s&&(e=q({},e,s))}var l=a[0]
if(!u.length)return i._selectCache=void 0,void n(l.filter(function(e){return!!e}))
var c=Lu()
u.forEach(function(n){var r=my(n,e,t)
c.defer(r)}),c.then(function(e){i._selectCache=void 0,n(l.concat(e).filter(function(e){return!!e}))}).catch(r)}).catch(r)}).catch(r)}},{key:"after",value:function(e,t){var n=this.rules
return e.map(function(e){if(e.error)return e
var r=kl(n,"id",e.id)
if(!r)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
try{return r.after(e,t)}catch(e){if(t.debug)throw e
return gy(r,e)}})}},{key:"getRule",value:function(e){return this.rules.find(function(t){return t.id===e})}},{key:"setBranding",value:function(e){"string"==typeof e&&(this.application=e),e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(i.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach(function(r){e.data.rules[r.id]||(e.data.rules[r.id]={})
var a=e.data.rules[r.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===vy(t,r.id,n))&&(a.helpUrl=vy(e,r.id,n))})}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),uy=sy
function ly(){return n.origin&&"null"!==n.origin?n.origin:n.location&&n.location.origin&&"null"!==n.location.origin?n.location.origin:void 0}function cy(e,t,n){var r,a
for(r=0,a=e.length;r<a;r++)t[n](e[r])}var dy=function(e,t){var n=t.pass,r=t.fail
return"string"==typeof n&&iy.test(n)&&(n=ja.default.compile(n)),"string"==typeof r&&iy.test(r)&&(r=ja.default.compile(r)),q({},e,{messages:{pass:n||e.messages.pass,fail:r||e.messages.fail,incomplete:"object"===o(e.messages.incomplete)?q({},e.messages.incomplete,t.incomplete):t.incomplete}})},py=function(e,t){var n=t.help,r=t.description
return"string"==typeof n&&iy.test(n)&&(n=ja.default.compile(n)),"string"==typeof r&&iy.test(r)&&(r=ja.default.compile(r)),q({},e,{help:n||e.help,description:r||e.description})},fy=function(e,t){var n=t.failureMessage
return"string"==typeof n&&iy.test(n)&&(n=ja.default.compile(n)),q({},e,{failureMessage:n||e.failureMessage})},hy=function(e,t){return"string"==typeof t&&iy.test(t)&&(t=ja.default.compile(t)),t||e}
function my(e,t,n){return n.performanceTimer&&km.mark("mark_rule_start_"+e.id),function(r,a){e.run(t,n,function(e){return r(e)},function(t){n.debug?a(t):r(gy(e,t))})}}function gy(e,t){var n=t.errorNode,r=Qm(t),o=[{id:"error-occurred",result:void 0,data:r,relatedNodes:[]}],i=n||new vu(a.documentElement)
return Object.assign(new ry(e),{error:r,result:aa.CANTTELL,nodes:[{any:[],all:[],none:o,node:i}]})}function vy(e,t,n){var r=e.brand,a=e.application,o=e.lang
return aa.helpUrlBase+r+"/"+(n||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}function by(e){var t=n&&"Node"in n&&"NodeList"in n,r=!!a
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(du.set("globalDocumentSet",!0),a=e.ownerDocument),t||(du.set("globalWindowSet",!0),n=a.defaultView)}}var yy=function(){du.get("globalDocumentSet")&&(du.set("globalDocumentSet",!1),a=null),du.get("globalWindowSet")&&(du.set("globalWindowSet",!1),n=null),i._memoizedFns.forEach(function(e){return e.clear()}),du.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0}
function wy(e,t,n,r){try{e=new Kh(e),i._tree=e.flatTree,i._selectorData=Xs(e.flatTree)}catch(e){return yy(),r(e)}var a=Lu(),o=i._audit
t.performanceTimer&&km.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer(function(n,r){Nl(e,t,"rules",null,n,r)}),a.defer(function(n,r){o.run(e,t,n,r)}),a.then(function(a){try{t.performanceTimer&&km.auditEnd()
var i=Rl(a.map(function(e){return{results:e}}))
e.initiator&&(t.performanceTimer&&km.mark("auditAfterStart"),i=o.after(i,t),t.performanceTimer&&(km.mark("auditAfterEnd"),km.measure("audit.after","auditAfterStart","auditAfterEnd"),km.logMeasures("audit.after")),i.forEach(Lm),i=i.map(ga))
try{n(i,yy)}catch(e){yy(),oa(e)}}catch(e){yy(),r(e)}}).catch(function(e){yy(),r(e)})}function Dy(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach(function(e){i._audit.registerCommand(e)})}function Ey(e){var t,n,r,s=K(e,3),u=s[0],l=s[1],c=s[2],d=new TypeError("axe.run arguments are invalid")
if(!cm(u)){if(void 0!==c)throw d
c=l,l=u,u=a}if("object"!==o(l)){if(void 0!==c)throw d
c=l,l={}}if("function"!=typeof c&&void 0!==c)throw d
return(l=yu(l)).reporter=null!==(t=null!==(n=l.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",{context:u,options:l,callback:c}}n.top!==n&&(bl.subscribe("axe.start",function(e,t,n){var r=n,o=function(e){e instanceof Error==0&&(e=new Error(e)),n(e)},s=e&&e.context||{}
s.hasOwnProperty("include")&&!s.include.length&&(s.include=[a])
var u=e&&e.options||{}
switch(e.command){case"rules":return wy(s,u,function(e,t){e=Fl.mapRawResults(e),r(e),t()},o)
case"cleanup-plugin":return mg(r,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,n)}}),bl.subscribe("axe.ping",function(e,t,n){n({axe:!0})})),Dy.prototype.run=function(){return this._run.apply(this,arguments)},Dy.prototype.collect=function(){return this._collect.apply(this,arguments)},Dy.prototype.cleanup=function(e){var t=i.utils.queue(),n=this
Object.keys(this._registry).forEach(function(e){t.defer(function(t){n._registry[e].cleanup(t)})}),t.then(e)},Dy.prototype.add=function(e){this._registry[e.id]=e}
var xy=function(){}
function Ay(e){var t=e.frames,n=e.frameSpec
return n?t.map(function(e){return Fl.mergeSpecs(e,n)}):t}var Fy=function(e,t,n){if("function"==typeof t&&(n=t,t={}),!e||!Array.isArray(e))return n(e)
n(e.map(function(e){for(var t=q({},e),n=0,r=["passes","violations","incomplete","inapplicable"];n<r.length;n++){var a=r[n]
t[a]=Fl.mapRawNodeResults(t[a])}return t}))},Cy={base:{Audit:uy,CheckResult:Zb,Check:ny,Context:Kh,RuleResult:ry,Rule:ay,metadataFunctionMap:Xb},public:{reporters:gg,external:xg},helpers:{failureSummary:Ch,incompleteFallbackMessage:kh,processAggregate:Rh},utils:{setDefaultFrameMessenger:gl,cacheNodeSelectors:wh,getNodesMatchingExpression:gh,convertSelector:Su},commons:{dom:{nativelyHidden:lc,displayHidden:cc,visibilityHidden:dc,contentVisibiltyHidden:pc,ariaHidden:fc,opacityHidden:hc,scrollHidden:mc,overflowHidden:gc,clipHidden:vc,areaHidden:bc,detailsHidden:yc}}}
i._thisWillBeDeletedDoNotUse=Cy,i.constants=aa,i.log=oa,i._setLogger=function(e){ra=e},i.AbstractVirtualNode=sa,i.SerialVirtualNode=hg,i.VirtualNode=fh,i._cache=du,i.imports=Na,i.cleanup=mg,i.configure=function(e){var t=i._audit
if(!t)throw new Error("No audit configured")
if(e.axeVersion||e.ver){var n=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(n))throw new Error("Invalid configured version ".concat(n))
var r=K(n.split("-"),2),a=r[0],o=r[1],s=K(a.split(".").map(Number),3),u=s[0],l=s[1],c=s[2],d=K(i.version.split("-"),2),p=d[0],f=d[1],h=K(p.split(".").map(Number),3),m=h[0],g=h[1],v=h[2]
if(u!==m||g<l||g===l&&v<c||u===m&&l===g&&c===v&&o&&o!==f)throw new Error("Configured version ".concat(n," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||vg(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach(function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)})}var b=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach(function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
b.push(e.id),t.addRule(e)})}e.disableOtherRules&&t.rules.forEach(function(e){!1===b.includes(e.id)&&(e.enabled=!1)})
var y,w={brand:t.brand,application:t.application,lang:t.lang}
if(void 0!==e.branding&&t.setBranding(e.branding),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),t._constructHelpUrls(w),e.standards&&(y=e.standards,Object.keys(tc).forEach(function(e){y[e]&&(tc[e]=Sl(tc[e],y[e]))})),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(aa.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.externalAPIs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.elementInternalsTimeout,n=e.getElementInternals
yg(t)?(Da("number"==typeof t,"elementInternalsTimeout must be a number"),fg=t):null===t&&(fg=1e3),yg(n)?(Da("function"==typeof n,"getElementInternals must be a function that returns a Promise"),pg=n):null===n&&(pg=null)},i.frameMessenger=function(e){bl.updateMessenger(e)},i.getRules=function(e){e=e||[]
var t=i._audit,n=t.rules,r=t.data,a=t.tagExclude,o=e.length?n.filter(function(t){return!!e.filter(function(e){return-1!==t.tags.indexOf(e)}).length}):n,s=r.rules||{}
return o.map(function(e){var t=s[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds,enabled:e.enabled&&!e.tags.some(function(e){return a.includes(e)})}})},i._load=function(e){i._audit=new uy(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new Dy(e)},i.hasReporter=vg,i.getReporter=bg,i.addReporter=function(e,t,n){gg[e]=t,n&&(dg=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(tc).forEach(function(e){tc[e]=ec[e]})},i.resetLocale=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e._resetLocale()},i._runRules=wy,i.runVirtualRule=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
n.reporter=n.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof sa||(t=new hg(t))
var r=Yh(e)
if(!r)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(r=Object.create(r,{excludeHidden:{value:!1}})).runSync(a,n)
Lm(o),ga(o)
var s=ya([o])
return s.violations.forEach(function(e){return e.nodes.forEach(function(e){e.failureSummary=Ch(e)})}),q({},Ih(),s,{toolOptions:n})},i.run=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
by(t[0])
var r=Ey(t),a=r.context,o=r.options,s=r.callback,u=void 0===s?xy:s,l=function(e){var t,n,r
return"function"==typeof Promise&&e===xy?t=new Promise(function(e,t){n=t,r=e}):(r=function(t){return e(null,t)},n=function(t){return e(t)}),{thenable:t,reject:n,resolve:r}}(u),c=l.thenable,d=l.resolve,p=l.reject
try{Da(i._audit,"No audit configured"),Da(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return function(e,t){if("function"!=typeof t||t===xy)throw e
t(e.message)}(e,u)}return i._running=!0,o.performanceTimer&&km.start(),i._runRules(a,o,function(e,t){var n=function(e){i._running=!1,t()
try{p(e)}catch(e){i.log(e)}}
try{o.performanceTimer&&km.mark("reporterStart"),function(e,t,n,r){var a=bg(t.reporter)(e,t,n,r)
void 0!==a&&n(a)}(e,o,function(e){o.performanceTimer&&(km.mark("reporterEnd"),km.measure("reporter","reporterStart","reporterEnd"),km.logMeasures("reporter"),km.end()),i._running=!1,t()
try{d(e)}catch(e){i.log(e)}},n)}catch(e){n(e)}},function(e){o.performanceTimer&&km.end(),i._running=!1,u(e),p(e)}),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return e&&"object"===o(e.documentElement)&&"object"===o(e.defaultView)&&(e=e.documentElement),by(e),i._tree=Dh(e),i._selectorData=Xs(i._tree),i._tree[0]},i.teardown=yy,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=Ey(t),a=r.options,o=r.context
Da(i._audit,"Axe is not configured. Audit is missing."),Da(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var s=new Kh(o,i._tree)
return i._tree=s.flatTree,i._selectorData=Xs(s.flatTree),i._running=!0,a.elementRef=!1,new Promise(function(e,t){a.performanceTimer&&km.auditStart(),i._audit.run(s,a,e,t)}).then(function(e){a.performanceTimer&&km.auditEnd(),e=Fl.mapRawResults(e)
var t,n=s.frames.map(function(e){var t=e.node
return Fl.toSpec(t)})
return s.initiator&&(t=Ih()),i._running=!1,yy(),{results:e,frames:n,environmentData:t}}).catch(function(e){return i._running=!1,yy(),Promise.reject(e)})},i.finishRun=function(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=yu(a)
var o=(e.find(function(e){return e.environmentData})||{}).environmentData
sg(a),a.reporter=null!==(t=null!==(n=a.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",function(e){var t,n=[],r=te(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,o=n.shift()
if(a){a.frameSpec=null!=o?o:null
var i=Ay(a)
n.unshift.apply(n,L(i))}}}catch(e){r.e(e)}finally{r.f()}}(e)
var s=Rl(e)
return(s=i._audit.after(s,a)).forEach(Lm),function(e,t){return new Promise(function(n,r){bg(t.reporter)(e,t,n,r)})}(s=s.map(ga),q({environmentData:o},a))},i.commons=Ev,i.utils=ua,i.addReporter("na",function(e,t,n){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=O(r,D)
n(q({},Ih(a),{toolOptions:o},Rh(e,t)))}),i.addReporter("no-passes",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=O(r,E)
t.resultTypes=["violations"]
var i=Rh(e,t).violations
n(q({},Ih(a),{toolOptions:o,violations:i}))}),i.addReporter("rawEnv",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=O(r,x)
Fy(e,o,function(e){var t=Ih(a)
n({raw:e,env:t})})}),i.addReporter("raw",Fy),i.addReporter("v1",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=O(r,A),i=Rh(e,t),s=function(e){e.nodes.forEach(function(e){e.failureSummary=Ch(e)})}
i.incomplete.forEach(s),i.violations.forEach(s),n(q({},Ih(a),{toolOptions:o},i))}),i.addReporter("v2",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=O(r,F),i=Rh(e,t)
n(q({},Ih(a),{toolOptions:o},i))},!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensure every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensure <area> elements of image maps have alternative text",help:"Active <area> elements must have alternative text"},"aria-allowed-attr":{description:"Ensure an element's role supports its ARIA attributes",help:"Elements must only use supported ARIA attributes"},"aria-allowed-role":{description:"Ensure role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-braille-equivalent":{description:"Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",help:"aria-braille attributes must have a non-braille equivalent"},"aria-command-name":{description:"Ensure every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-conditional-attr":{description:"Ensure ARIA attributes are used as described in the specification of the element's role",help:"ARIA attributes must be used as specified for the element's role"},"aria-deprecated-role":{description:"Ensure elements do not use deprecated roles",help:"Deprecated ARIA roles must not be used"},"aria-dialog-name":{description:"Ensure every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:'Ensure aria-hidden="true" is not present on the document body.',help:'aria-hidden="true" must not be present on the document body'},"aria-hidden-focus":{description:"Ensure aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensure every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensure every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensure every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-prohibited-attr":{description:"Ensure ARIA attributes are not prohibited for an element's role",help:"Elements must only use permitted ARIA attributes"},"aria-required-attr":{description:"Ensure elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensure elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensure elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensure all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-tab-name":{description:"Ensure every ARIA tab node has an accessible name",help:"ARIA tab nodes must have an accessible name"},"aria-text":{description:'Ensure role="text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensure every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensure every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensure every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensure all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensure attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensure <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensure <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensure buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",help:"Elements must meet enhanced color contrast ratio thresholds"},"color-contrast":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",help:"Elements must meet minimum color contrast ratio thresholds"},"css-orientation-lock":{description:"Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensure <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensure <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensure each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensure every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensure every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensure every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensure headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensure table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensure elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensure form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensure <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensure <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensure <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensure the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Inform users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensure every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensure the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensure <img> elements have alternative text or a role of none or presentation",help:"Images must have alternative text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensure input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensure <input type="image"> elements have alternative text',help:"Image buttons must have alternative text"},"label-content-name-mismatch":{description:"Ensure that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensure every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensure the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensure the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensure the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensure the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensure the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensure the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensure the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensure the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{description:"Ensure landmarks are unique",help:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensure links have discernible text",help:"Links must have discernible text"},list:{description:"Ensure that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensure <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensure <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensure <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensure <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensure <object> elements have alternative text",help:"<object> elements must have alternative text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Ensure elements marked as presentational do not have global ARIA or tabindex so that all screen readers ignore them",help:"Elements marked as presentational should be consistently ignored"},region:{description:"Ensure all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:'Ensure [role="img"] and [role="image"] elements have alternative text',help:'[role="img"] and [role="image"] elements must have alternative text'},"scope-attr-valid":{description:"Ensure the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard in Safari",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensure select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensure that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"summary-name":{description:"Ensure summary elements have discernible text",help:"Summary elements must have discernible text"},"svg-img-alt":{description:"Ensure <svg> elements with an img, image, graphics-document or graphics-symbol role have accessible text",help:"<svg> elements with an img or image role must have alternative text"},tabindex:{description:"Ensure tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"Tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch targets have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other <th> elements in that table",help:"Table cell headers attributes must refer to other <th> elements in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensure lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensure <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr-elm":{messages:{pass:"ARIA attributes are allowed for this element",fail:{singular:"ARIA attribute is not allowed on ${data.nodeName} elements: ${data.values}",plural:"ARIA attributes are not allowed on ${data.nodeName} elements: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element uses aria-busy="true" while showing a loader'}},"aria-conditional-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{checkbox:'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',radio:'Remove aria-checked, or set it to "${data.checkState}" to match the real radio state',rowSingular:"This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",rowPlural:"These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",unsupported:"Multiple IDs in aria-errormessage is not widely supported in assistive technologies",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"Ensure aria-errormessage value `${data.values}` references an existing element",plural:"Ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"Unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-no-deprecated-attr":{impact:"minor",messages:{pass:"No deprecated ARIA attributes are used",incomplete:{singular:"The attribute is deprecated and should not be used: ${data.values}",plural:"The attributes are deprecated and should not be used: ${data.values}"}}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute.",visibleLabelSingular:"${data.prohibited} attribute is not well supported, but the elements referenced by aria-labelledby are visible in the page. Verify the label is not necessary.",visibleLabelPlural:"${data.prohibited} attributes are not well supported, but the elements referenced by aria-labelledby are visible in the page. Verify the labels are not necessary.",unresolvedLabel:"${data.prohibited} attribute is not well supported, and does not reference an existing element. Verify the label is not necessary."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:{default:"Required ARIA children are present","aria-busy":"Element has an aria-busy attribute, so it is allowed to omit required children"},fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed: ${data.values}","aria-busy-fail":'Element has children which are not allowed: ${data.values}; Having aria-busy="true" does not allow children with roles that are not allowed'},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}",controlsWithinPopup:"Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},"braille-label-equivalent":{impact:"serious",messages:{pass:"aria-braillelabel is used on an element with accessible text",fail:"aria-braillelabel is used on an element with no accessible text",incomplete:"Unable to compute accessible text"}},"braille-roledescription-equivalent":{impact:"serious",messages:{pass:"aria-brailleroledescription is used on an element with aria-roledescription",fail:{noRoleDescription:"aria-brailleroledescription is used on an element with no aria-roledescription",emptyRoleDescription:"aria-brailleroledescription is used on an element with an empty aria-roledescription"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"serious",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element",colorParse:"Could not parse color string ${data.colorParse}"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",complexTextShadows:"Element's contrast could not be determined because it uses complex text shadows",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element",colorParse:"Could not parse color string ${data.colorParse}"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",incomplete:{default:"Check if the link needs styling to distinguish it from nearby text",pseudoContent:"Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"},fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"The autocomplete value is on an appropriate element",fail:"The autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted",incomplete:"the autocomplete attribute has a non-standard value. Check whether any standard value could be used instead."}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"serious",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"serious",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:'Focusable content should have tabindex="-1" or be removed from the DOM'}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Element has an explicit <label>",fail:"Element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Element has an implicit (wrapped) <label>",fail:"Element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped) <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item parent element has a role that is not role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions are available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:{default:"Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",large:"Target far exceeds the minimum size of ${data.minOffset}px."},fail:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",incomplete:{default:"Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",nonTabbableNeighbor:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable",large:"Target far exceeds the minimum size of ${data.minSize}px."},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"Ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},"error-occurred":{messages:{pass:"",incomplete:"Axe encountered an error; test the page for this type of problem manually"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other header cells in the table",incomplete:"The headers attribute is empty",fail:{"cell-header-not-in-table":"The headers attribute is not exclusively used to refer to other header cells in the table","cell-header-not-th":"The headers attribute must refer to header cells, not data cells","header-refs-self":"The element with headers attribute refers to itself"}}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",impact:"serious",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",impact:"critical",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT","RGAAv4","RGAA-1.1.2"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",impact:"critical",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["5c01ea"],all:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"},"aria-allowed-attr-elm","aria-no-deprecated-attr"],any:[],none:["aria-unsupported-attr"]},{id:"aria-allowed-role",impact:"minor",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-braille-equivalent",reviewOnFail:!0,impact:"serious",selector:"[aria-brailleroledescription], [aria-braillelabel]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:["braille-roledescription-equivalent","braille-label-equivalent"],any:[],none:[]},{id:"aria-command-name",impact:"serious",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-11.9.1"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-conditional-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["5c01ea"],all:[{options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-conditional-attr"}],any:[],none:[]},{id:"aria-deprecated-role",impact:"minor",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["674b10"],all:[],any:[],none:["deprecatedrole"]},{id:"aria-dialog-name",impact:"serious",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",impact:"critical",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag131","wcag412","EN-301-549","EN-9.1.3.1","EN-9.4.1.2","RGAAv4","RGAA-10.8.1"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",impact:"serious",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-10.8.1"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",impact:"serious",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-11.1.1"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",impact:"serious",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1","RGAAv4","RGAA-11.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",impact:"serious",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1","RGAAv4","RGAA-11.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-prohibited-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["5c01ea"],all:[],any:[],none:[{options:{elementsAllowedAriaLabel:["applet"]},id:"aria-prohibited-attr"}]},{id:"aria-required-attr",impact:"critical",selector:"[role]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",impact:"critical",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-9.3.1"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",impact:"critical",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-9.3.1"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",impact:"serious",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","deprecated"],enabled:!1,all:[],any:[{options:{supportedRoles:["button","img","image","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",impact:"critical",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole"]},{id:"aria-tab-name",impact:"serious",selector:'[role="tab"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-7.1.1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-text",impact:"serious",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",impact:"serious",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-7.1.1"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",impact:"serious",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",impact:"serious",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",impact:"critical",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","EN-301-549","EN-9.1.2.1","section508","section508.22.a","deprecated"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",impact:"serious",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","EN-301-549","EN-9.1.3.5","ACT","RGAAv4","RGAA-11.13.1"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null","xoff","xon"],ignoredValues:["text","pronouns","gender","message","content"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",impact:"serious",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","EN-301-549","EN-9.1.4.12","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",impact:"serious",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j","TTv5","TT2.b","EN-301-549","EN-9.2.2.2","RGAAv4","RGAA-13.8.1"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",impact:"critical",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-11.9.1"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"bypass",impact:"serious",selector:"html:not(html *)",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o","TTv5","TT9.a","EN-301-549","EN-9.2.4.1","RGAAv4","RGAA-12.7.1"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","TTv5","TT13.c","EN-301-549","EN-9.1.4.3","ACT","RGAAv4","RGAA-3.2.1"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",impact:"serious",selector:"html:not(html *)",tags:["cat.structure","wcag134","wcag21aa","EN-301-549","EN-9.1.3.4","RGAAv4","RGAA-13.9.1","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",impact:"serious",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-9.3.3"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",impact:"serious",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-9.3.3"],all:[],any:["dlitem"],none:[]},{id:"document-title",impact:"serious",selector:"html:not(html *)",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","TTv5","TT12.a","EN-301-549","EN-9.2.4.2","ACT","RGAAv4","RGAA-8.5.1"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",impact:"serious",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",impact:"critical",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-8.2.1"],reviewOnFail:!0,actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",impact:"minor",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",impact:"minor",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",impact:"minor",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",impact:"minor",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","RGAAv4","RGAA-12.8.1","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",impact:"moderate",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332","TTv5","TT5.c","EN-301-549","EN-9.3.3.2","RGAAv4","RGAA-11.2.1"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",impact:"serious",selector:"html:not(html *)",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","RGAAv4","RGAA-7.3.2"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",impact:"critical",selector:"html:not(html *), frame, iframe",tags:["cat.structure","best-practice","review-item"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",impact:"serious",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag2a","wcag412","TTv5","TT12.d","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-2.2.1"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",impact:"serious",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i","TTv5","TT12.d","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-2.1.1"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",impact:"moderate",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",impact:"minor",selector:"*",excludeHidden:!1,tags:["cat.structure","best-practice","experimental","review-item"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",impact:"serious",selector:"html:not(html *)",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT","RGAAv4","RGAA-8.3.1"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",impact:"serious",selector:'html[lang]:not([lang=""]):not(html *), html[xml\\:lang]:not([xml\\:lang=""]):not(html *)',tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT","RGAAv4","RGAA-8.4.1"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",impact:"moderate",selector:"html[lang][xml\\:lang]:not(html *)",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","EN-301-549","EN-9.3.1.1","ACT","RGAAv4","RGAA-8.3.1"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",impact:"minor",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",impact:"critical",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","TT7.b","EN-301-549","EN-9.1.1.1","ACT","RGAAv4","RGAA-1.1.1"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",impact:"minor",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",impact:"critical",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-11.9.1"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"input-image-alt",impact:"critical",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","EN-9.4.1.2","ACT","RGAAv4","RGAA-1.1.3"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label"],none:[]},{id:"label-content-name-mismatch",impact:"serious",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","EN-301-549","EN-9.2.5.3","RGAAv4","RGAA-6.1.5","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",impact:"serious",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",impact:"critical",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-11.1.1"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["hidden-explicit-label"]},{id:"landmark-banner-is-top-level",impact:"moderate",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",impact:"moderate",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice","deprecated"],enabled:!1,all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",impact:"moderate",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",role:"banner"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",impact:"moderate",selector:"html:not(html *)",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",impact:"moderate",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",impact:"serious",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141","TTv5","TT13.a","EN-301-549","EN-9.1.4.1","RGAAv4","RGAA-10.6.1"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",impact:"serious",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT","RGAAv4","RGAA-6.2.1"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",impact:"serious",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-9.3.1"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",impact:"serious",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-9.3.1"],all:[],any:["listitem"],none:[]},{id:"marquee",impact:"serious",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222","TTv5","TT2.b","EN-301-549","EN-9.2.2.2","RGAAv4","RGAA-13.8.1"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",impact:"minor",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",impact:"critical",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","TTv5","TT8.a","EN-301-549","EN-9.2.2.1","RGAAv4","RGAA-13.1.2"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",impact:"minor",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",impact:"moderate",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","EN-301-549","EN-9.1.4.4","ACT","RGAAv4","RGAA-10.4.2"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",impact:"serious",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","RGAAv4","RGAA-7.1.1"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",impact:"moderate",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","TTv5","TT2.a","EN-301-549","EN-9.1.4.2","ACT","RGAAv4","RGAA-4.10.1"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",impact:"serious",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","EN-301-549","EN-9.1.1.1","RGAAv4","RGAA-1.1.6"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",impact:"serious",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-9.1.3","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",impact:"moderate",selector:"html:not(html *)",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",impact:"minor",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",impact:"moderate",selector:"body *",tags:["cat.keyboard","best-practice","RGAAv4","RGAA-9.2.1"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",impact:"serious",selector:":is([role='img'], [role='image']):not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT","RGAAv4","RGAA-1.1.1"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",impact:"moderate",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",impact:"serious",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211","wcag213","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","EN-9.2.1.3","RGAAv4","RGAA-7.3.2"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",impact:"critical",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT","RGAAv4","RGAA-11.1.1"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["hidden-explicit-label"]},{id:"server-side-image-map",impact:"minor",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","RGAAv4","RGAA-1.1.4"],all:[],any:[],none:["exists"]},{id:"skip-link",impact:"moderate",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice","RGAAv4","RGAA-12.7.1"],all:[],any:["skip-link"],none:[]},{id:"summary-name",impact:"serious",selector:"summary",matches:"summary-interactive-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"svg-img-alt",impact:"serious",selector:":is([role='img'], [role='image']), [role='graphics-symbol'], svg[role='graphics-document']",matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT","RGAAv4","RGAA-1.1.5"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",impact:"serious",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",impact:"minor",selector:"table",tags:["cat.tables","best-practice","RGAAv4","RGAA-5.2.1"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-5.4.1"],all:["caption-faked"],any:[],none:[]},{id:"target-size",impact:"serious",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["cat.sensory-and-visual-cues","wcag22aa","wcag258"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",impact:"critical",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-5.7.4"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",impact:"serious",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-5.7.4"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1","RGAAv4","RGAA-5.7.1"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",impact:"serious",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","TTv5","TT11.b","EN-301-549","EN-9.3.1.2","ACT","RGAAv4","RGAA-8.8.1"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",impact:"critical",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a","TTv5","TT17.a","EN-301-549","EN-9.1.2.2","RGAAv4","RGAA-4.3.1"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr-elm",evaluate:"aria-allowed-attr-elm-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate",deprecated:!0},{id:"aria-conditional-attr",evaluate:"aria-conditional-attr-evaluate",options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-no-deprecated-attr",evaluate:"aria-no-deprecated-attr-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","image","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"braille-label-equivalent",evaluate:"braille-label-equivalent-evaluate"},{id:"braille-roledescription-equivalent",evaluate:"braille-roledescription-equivalent-evaluate"},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null","xoff","xon"],ignoredValues:["text","pronouns","gender","message","content"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",role:"banner"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate"},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"error-occurred",evaluate:"exists-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},747(e,t,n){var r
e=n.nmd(e),function(){"use strict"
function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,i,s=[],u=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
u=!1}else for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);u=!0);}catch(e){l=!0,a=e}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return s}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){if(e){if("string"==typeof e)return a(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}var f=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==b)return b
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),h=f.console,m=f.setTimeout,g=f.clearTimeout,v=f.process,b=f.window,y=b&&b.document,w=b&&b.navigator,D=function(){var e="qunit-test-string"
try{return f.sessionStorage.setItem(e,e),f.sessionStorage.removeItem(e),f.sessionStorage}catch(e){return}}(),E="function"==typeof f.Map&&"function"==typeof f.Map.prototype.keys&&"function"==typeof f.Symbol&&"symbol"===d(f.Symbol.iterator)?f.Map:function(e){var t=this,n=Object.create(null),r=Object.prototype.hasOwnProperty
this.has=function(e){return r.call(n,e)},this.get=function(e){return n[e]},this.set=function(e,t){return r.call(n,e)||this.size++,n[e]=t,this},this.delete=function(e){r.call(n,e)&&(delete n[e],this.size--)},this.forEach=function(e){for(var t in n)e(n[t],t)},this.keys=function(){return Object.keys(n)},this.clear=function(){n=Object.create(null),this.size=0},this.size=0,e&&e.forEach(function(e,n){t.set(n,e)})},x="function"==typeof f.Set&&"function"==typeof f.Set.prototype.values?f.Set:function(e){var t=Object.create(null)
return Array.isArray(e)&&e.forEach(function(e){t[e]=!0}),{add:function(e){t[e]=!0},has:function(e){return e in t},get size(){return Object.keys(t).length}}},A=Object.prototype.toString,F=Object.prototype.hasOwnProperty,C={now:b&&b.performance&&b.performance.now?b.performance.now.bind(b.performance):Date.now}
function k(e,t){return e.filter(function(e){return-1===t.indexOf(e)})}var T=Array.prototype.includes?function(e,t){return t.includes(e)}:function(e,t){return-1!==t.indexOf(e)}
function R(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&O("array",e)?[]:{}
for(var r in e)if(F.call(e,r)){var a=e[r]
n[r]=a===Object(a)?R(a,t):a}return n}function N(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)F.call(t,r)&&F.call(e,r)&&(n[r]=N(e[r],t[r]))
return n}function _(e,t,n){for(var r in t)F.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function S(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=A.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return d(e)}}function O(e,t){return S(t)===e}function M(e,t){for(var n=e+""+t,r=0,a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function P(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}function I(e){return e?(""+e).replace(/['"<>&]/g,function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}}):""}var j=new x(["boolean","number","string"]),B=[]
function q(e,t){return e===t}function L(e,t){return e===t||e.valueOf()===t.valueOf()}function z(e){var t=Object.getPrototypeOf(e)
return t&&null!==t.constructor?e.constructor:Object}function V(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var $={undefined:q,null:q,boolean:L,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:L,symbol:q,date:L,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&V(e)===V(t)},function:q,array:function(e,t){if(e.length!==t.length)return!1
for(var n=0;n<e.length;n++)if(!H(e[n],t[n]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach(function(e){if(n){var r=!1
t.forEach(function(t){if(!r){var n=B
B=[],H(t,e)&&(r=!0),B=n}}),r||(n=!1)}}),n},map:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach(function(e,r){if(n){var a=!1
t.forEach(function(t,n){if(!a){var o=B
B=[],$.array([t,n],[e,r])&&(a=!0),B=o}}),a||(n=!1)}}),n}},U={undefined:q,null:q,boolean:q,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:q,symbol:q,function:q,object:function(e,t){if(B.some(function(n){return n.a===e&&n.b===t}))return!0
B.push({a:e,b:t})
var n=S(e),r=S(t)
if("object"!==n||"object"!==r)return n===r&&$[n](e,t)
if(!1===function(e,t){return z(e)===z(t)}(e,t))return!1
var a=[],o=[]
for(var i in e)if(a.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof t[i]||e[i].toString()!==t[i].toString())&&!H(e[i],t[i]))return!1
for(var s in t)o.push(s)
return $.array(a.sort(),o.sort())}}
function H(e,t){if(e===t)return!0
var n=d(e),r=d(t)
return n!==r?("object"===n&&j.has(S(e))?e.valueOf():e)===("object"===r&&j.has(S(t))?t.valueOf():t):U[n](e,t)}function G(e,t){var n=H(e,t)
return B=[],n}function W(e,t){if(2===arguments.length)return e===t||G(e,t)
for(var n=arguments.length-1;n>0;){if(!G(arguments[n-1],arguments[n]))return!1
n--}return!0}var K={altertitle:!0,collapse:!0,countStepsAsOne:!1,failOnZeroTests:!0,filter:void 0,ignoreUnhandledRejections:!1,testFilter:null,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,reporters:{},requireExpects:!1,scrolltop:!0,storage:D,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},pq:null,_event_listeners:Object.create(null),_event_memory:{},_deprecated_timeout_shown:!1,_deprecated_countEachStep_shown:!1,blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}}
function Q(e,t){("boolean"==typeof e||"string"==typeof e&&""!==e)&&(K[t]=!0===e||"true"===e)}function Y(e,t){("number"==typeof e||"string"==typeof e&&/^[0-9]+$/.test(e))&&(K[t]=+e)}function X(e,t){"string"==typeof e&&""!==e&&(K[t]=e)}function Z(e,t){"string"==typeof e&&""!==e&&(K[t]=[e])}function J(e){Q(e.qunit_config_altertitle,"altertitle"),Q(e.qunit_config_autostart,"autostart"),Q(e.qunit_config_collapse,"collapse"),Q(e.qunit_config_failonzerotests,"failOnZeroTests"),X(e.qunit_config_filter,"filter"),X(e.qunit_config_fixture,"fixture"),Q(e.qunit_config_hidepassed,"hidepassed"),Y(e.qunit_config_maxdepth,"maxDepth"),X(e.qunit_config_module,"module"),Z(e.qunit_config_moduleid,"moduleId"),Q(e.qunit_config_noglobals,"noglobals"),Q(e.qunit_config_notrycatch,"notrycatch"),Q(e.qunit_config_reorder,"reorder"),Q(e.qunit_config_requireexpects,"requireExpects"),Q(e.qunit_config_scrolltop,"scrolltop"),function(e){("boolean"==typeof e||"string"==typeof e&&""!==e)&&(K.seed=e)}(e.qunit_config_seed),Z(e.qunit_config_testid,"testId"),Y(e.qunit_config_testtimeout,"testTimeout")
var t={qunit_config_reporters_console:"console",qunit_config_reporters_tap:"tap"}
for(var n in t){var r=e[n]
if("boolean"==typeof r||"string"==typeof r&&""!==r){var a=t[n]
K.reporters[a]=!0===r||"true"===r||"1"===r}}}v&&"env"in v&&J(v.env),J(f)
var ee=f&&f.QUnit&&!f.QUnit.version&&f.QUnit.config
ee&&_(K,ee),K.modules.push(K.currentModule),"true"!==K.seed&&!0!==K.seed||(K.seed=(Math.random().toString(36)+"0000000000").slice(2,12))
var te=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),a=o.indent(1)
return t.join&&(t=t.join(","+r+a)),t?[e,a+t,o.indent()+n].join(r):e+n}function r(e,t){if(o.maxDepth&&o.depth>o.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,a=new Array(r);r--;)a[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",a,"]")}var a=/^function (\w+)/,o={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var a=this.parsers[t],o=d(a)
if("function"===o){n.push(e)
var i=a.call(this,e,n)
return n.pop(),i}return"string"===o?a:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":O("regexp",e)?"regexp":O("date",e)?"date":O("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===A.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":d(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:K.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(a.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var a=[]
for(var i in e)a.push(i)
var s=["message","name"]
for(var u in s){var l=s[u]
l in e&&!T(l,a)&&a.push(l)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
r.push(o.parse(d,"key")+": "+o.parse(p,void 0,t))}return o.down(),n("{",r,"}")},node:function(e){var t=o.HTML?"&lt;":"<",n=o.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),a=t+r,i=e.attributes
if(i)for(var s=0;s<i.length;s++){var u=i[s].nodeValue
u&&"inherit"!==u&&(a+=" "+i[s].nodeName+"="+o.parse(u,"attribute"))}return a+=n,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),ne={warn:h?Function.prototype.bind.call(h.warn||h.log,h):function(){}},re=s(function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)},[{key:"start",value:function(e){return e&&(this._startTime=C.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map(function(e){return e.start()}),childSuites:this.childSuites.map(function(e){return e.start()}),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){return e&&(this._endTime=C.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map(function(e){return e.end()}),childSuites:this.childSuites.map(function(e){return e.end()}),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce(function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e},e),this.childSuites.reduce(function(e,t){return t.getTestCounts(e)},e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,a=e.todo
return n?"failed":r===t?"skipped":a===t?"todo":"passed"}}]),ae=[],oe=new re
function ie(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function se(e,t){return function(n){K.currentModule!==e&&ne.warn("The `"+t+"` hook was called inside the wrong module (`"+K.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function ue(e,t,n){"function"==typeof t&&(n=t,t=void 0)
var r=function(e,t,n){var r=ae.length?ae.slice(-1)[0]:null,a=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:oe,i=null!==r&&r.skip||n.skip,s=null!==r&&r.todo||n.todo,u={}
r&&_(u,r.testEnvironment),_(u,t)
var l={name:a,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:u,tests:[],moduleId:M(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new re(e,o),stats:null,skip:i,todo:!i&&s,ignored:n.ignored||!1}
return r&&r.childModules.push(l),K.modules.push(l),l}(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}),a=r.testEnvironment,o=r.hooks
ie(o,a,"before"),ie(o,a,"beforeEach"),ie(o,a,"afterEach"),ie(o,a,"after")
var i={before:se(r,"before"),beforeEach:se(r,"beforeEach"),afterEach:se(r,"afterEach"),after:se(r,"after")},s=K.currentModule
if(K.currentModule=r,"function"==typeof n){ae.push(r)
try{var u=n.call(r.testEnvironment,i)
u&&"function"==typeof u.then&&ne.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{ae.pop(),K.currentModule=r.parentModule||s}}}function le(e){for(var t=null,n=e.suiteReport;n;){n.tests.length=0
var r=n.childSuites.indexOf(t);-1===r?n.childSuites.length=0:(n.childSuites.splice(0,r),n.childSuites.splice(1)),n===oe?n=null:(t=n,n=(e=e.parentModule)&&e.suiteReport||oe)}}var ce=!1
function de(e,t,n){var r,a=ce&&(r=K.modules.filter(function(e){return!e.ignored}).map(function(e){return e.moduleId}),!ae.some(function(e){return r.includes(e.moduleId)}))
ue(e,t,n,{ignored:a})}de.only=function(){ce||(K.modules.length=0,K.queue.length=0,le(K.currentModule),K.currentModule.ignored=!0),ce=!0,ue.apply(void 0,arguments)},de.skip=function(e,t,n){ce||ue(e,t,n,{skip:!0})},de.if=function(e,t,n,r){ce||ue(e,n,r,{skip:!t})},de.todo=function(e,t,n){ce||ue(e,t,n,{todo:!0})}
var pe=function(){var e=new Error
if(!e.stack)try{throw e}catch(t){e=t}return(e.stack||"").replace(/^error$\n/im,"").split("\n")[0].replace(/(:\d+)+\)?/g,"").replace(/.+[/\\]/,"")}()
function fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.split("\n"),a=[]
n&&-1!==n.indexOf(r[0])&&a.push(r.shift())
for(var o=!0,i=0;i<r.length;i++){var s=r[i],u=pe&&-1!==s.indexOf(pe)||-1!==s.indexOf("node:internal/")||s.match(/^\s+at .+\(internal[^)]*\)$/)||s.match(/^\s+at .+\([a-z]+\.js[:\d]*\)$/)
u||(o=!1),o||a.push(u?t(s):s)}return a.join("\n")}function he(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),pe){for(var r=[],a=t;a<n.length&&-1===n[a].indexOf(pe);a++)r.push(n[a])
if(r.length)return r.join("\n")}return n[t]}}function me(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return he(t,e)}var ge=function(){function e(t){o(this,e),this.test=t}return s(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,K.timeout&&(g(K.timeout),K.timeout=null,K.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.stepsCount+=this.test.steps.length,this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){if(void 0===e)e=1
else if("number"!=typeof e)throw new TypeError("async takes number as an input")
var t=e
return this.test.internalStop(t)}},{key:"closeTo",value:function(e,t,n,r){if("number"!=typeof n)throw new TypeError("closeTo() requires a delta argument")
this.pushResult({result:Math.abs(e-t)<=n,actual:e,expected:t,message:r||"value should be within ".concat(n," inclusive")})}},{key:"push",value:function(t,n,r,a,o){return(this instanceof e?this:K.current.assert).pushResult({result:t,actual:n,expected:r,message:a,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||K.current
if(!r)throw new Error("assertion outside test context, in "+me(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(te.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(te.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){this.pushResult({result:t==e,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){this.pushResult({result:t!=e,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=R(e),t=R(t),this.pushResult({result:W(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=R(e),t=R(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=N(e,t),t=R(t,!1),this.pushResult({result:W(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=N(e,t),t=R(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:W(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!W(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var a=u(ve(n,r,"throws"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||K.current
if("function"==typeof t){var i,s=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=u(be(i,n,r),3)
s=l[0],n=l[1],r=l[2]}return o.assert.pushResult({result:s,actual:i&&P(i),expected:n,message:r}),i}o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,n,r){var a=u(ve(n,r,"rejects"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||K.current,i=t&&t.then
if("function"==typeof i){var s=this.async()
return i.call(t,function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),s()},function(e){var t,a=u(be(e,n,r),3)
return t=a[0],n=a[1],r=a[2],o.assert.pushResult({result:t,actual:e&&P(e),expected:n,message:r}),s(),e})}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}])}()
function ve(e,t,n){var r=S(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function be(e,t,n){var r=!1,a=S(t)
if(t){if("regexp"===a)r=t.test(P(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===a)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=P(t)
else if("function"===a)try{r=!0===t.call({},e),t=null}catch(e){t=P(e)}}else r=!0
return[r,t,n]}ge.prototype.raises=ge.prototype.throws
var ye=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"],we=["error","runEnd"]
function De(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var n=K._event_listeners[e],r=n?l(n):[],a=0;a<r.length;a++)r[a](t)
T(e,we)&&(K._event_memory[e]=t)}var Ee="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function xe(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ae={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==Ee)return Ee
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
if(o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(a)
return i(this,new c(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor
return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},o.all=function(e){return new o(function(t,n){if(!r(e))return n(new TypeError("Promise.all accepts an array"))
var a=Array.prototype.slice.call(e)
if(0===a.length)return t([])
var o=a.length
function i(e,r){try{if(r&&("object"===d(r)||"function"==typeof r)){var s=r.then
if("function"==typeof s)return void s.call(r,function(t){i(e,t)},n)}a[e]=r,0===--o&&t(a)}catch(e){n(e)}}for(var s=0;s<a.length;s++)i(s,a[s])})},o.allSettled=function(e){return new this(function(t,n){if(!e||void 0===e.length)return n(new TypeError(d(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var a=r.length
function o(e,n){if(n&&("object"===d(n)||"function"==typeof n)){var i=n.then
if("function"==typeof i)return void i.call(n,function(t){o(e,t)},function(n){r[e]={status:"rejected",reason:n},0===--a&&t(r)})}r[e]={status:"fulfilled",value:n},0===--a&&t(r)}for(var i=0;i<r.length;i++)o(i,r[i])})},o.resolve=function(e){return e&&"object"===d(e)&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"))
for(var a=0,i=e.length;a<i;a++)o.resolve(e[a]).then(t,n)})},"function"==typeof setImmediate){var n=setImmediate
o._immediateFn=function(e){n(e)}}else o._immediateFn=function(e){t(e,0)}
o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},Ae.exports=o}else Ae.exports=e.Promise
function r(e){return Boolean(e&&void 0!==e.length)}function a(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function i(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void u(t.promise,e)}s(t.promise,r)}else(1===e._state?s:u)(t.promise,e._value)})):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===d(t)||"function"==typeof t)){var n=t.then
if(t instanceof o)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void p((r=n,a=t,function(){r.apply(a,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,a}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)})
for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1
try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return
n=!0,u(t,e)}}}()
var Fe=Ae.exports
function Ce(e,t){var n=K.callbacks[e]
if("log"!==e){var r=Fe.resolve()
return n.forEach(function(e){r=r.then(function(){return Fe.resolve(e(t))})}),r}n.map(function(e){return e(t)})}var ke=s(function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)},[{key:"start",value:function(e){return e&&(this._startTime=C.now()),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){return e&&(this._endTime=C.now()),_(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter(function(e){return!e.passed})}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map(function(e){return delete e.actual,delete e.expected,e})}}])
function Te(e){if(this.expected=null,this.assertions=[],this.module=K.currentModule,this.steps=[],this.stepsCount=0,this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new E,this.nextPauseId=1,this.stackOffset=3,_(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),K.pq.finished)ne.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=M(this.module.name,this.testName),++Te.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new ke(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new ge(this)}}function Re(){if(!K.current)throw new Error("pushFailure() assertion outside test context, in "+me(2))
var e=K.current
return e.pushFailure.apply(e,arguments)}function Ne(){if(K.pollution=[],K.noglobals)for(var e in f)if(F.call(f,e)){if(/^qunit-test-output/.test(e))continue
K.pollution.push(e)}}Te.count=0,Te.prototype={get stack(){return he(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t),r=Fe.resolve()
return n.forEach(function(e){r=r.then(function(){return e.stats={all:0,bad:0,started:C.now()},De("suiteStart",e.suiteReport.start(!0)),Ce("moduleStart",{name:e.name,tests:e.tests})})}),r.then(function(){return K.current=e,e.testEnvironment=_({},t.testEnvironment),e.started=C.now(),De("testStart",e.testReport.start(!0)),Ce("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then(function(){K.pollution||Ne()})})},run:function(){if(K.current=this,K.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,he(e,0)),Ne(),K.blocking&&Be(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&Re("Test did not finish synchronously even though assert.timeout( 0 ) was used.",me(2))}},after:function(){!function(){var e=K.pollution
Ne()
var t=k(K.pollution,e)
t.length>0&&Re("Introduced global variable(s): "+t.join(", "))
var n=k(e,K.pollution)
n.length>0&&Re("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(K.current=n,K.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+P(e),he(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,a=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Le(e).filter(function(e){return!e.skip}).length-1}(n)||!(K.queue.length>0||K.pq.taskCount()>2))if(K.current=r,K.notrycatch)a()
else try{a()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),he(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&K.globalHooks[e])for(var r=0;r<K.globalHooks[e].length;r++)t.push(n.queueGlobalHook(K.globalHooks[e][r],e))}(this),function n(r,a){if(a.parentModule&&n(r,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(r.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(K.current=this,m&&(g(this.timeout),K.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}K._deprecated_countEachStep_shown||K.countStepsAsOne||null===this.expected||!this.stepsCount||(K._deprecated_countEachStep_shown=!0,K.requireExpects?ne.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. You can enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/"):ne.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. Omit assert.expect() from tests that use assert.step(), or enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/"))
var t=K.countStepsAsOne?this.assertions.length-this.stepsCount:this.assertions.length
K.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==t&&this.stepsCount&&this.expected===this.assertions.length-this.stepsCount&&!K.countStepsAsOne?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run\nIt looks like you might prefer to enable QUnit.config.countStepsAsOne, which will become the default in QUnit 3.0. https://qunitjs.com/api/assert/expect/",this.stack):null!==this.expected&&this.expected!==t&&this.stepsCount&&this.expected===this.assertions.length&&K.countStepsAsOne?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run\nRemember that with QUnit.config.countStepsAsOne and in QUnit 3.0, steps no longer count as separate assertions. https://qunitjs.com/api/assert/expect/",this.stack):null!==this.expected&&this.expected!==t?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run",this.stack):null!==this.expected||t||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var n=this.module,r=n.name,a=this.testName,o=!!this.skip,i=!!this.todo,s=0,u=K.storage
this.runtime=Math.round(C.now()-this.started),K.stats.all+=this.assertions.length,K.stats.testCount+=1,n.stats.all+=this.assertions.length
for(var c=0;c<this.assertions.length;c++)this.assertions[c].result||(s++,K.stats.bad++,n.stats.bad++)
o?Ve(n):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(n),u&&(s?u.setItem("qunit-test-"+r+"-"+a,s):u.removeItem("qunit-test-"+r+"-"+a)),De("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var d=this
return Ce("testDone",{name:a,module:r,skipped:o,todo:i,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:o?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return d.stack}}).then(function(){if(ze(n)){for(var e=[n],t=n.parentModule;t&&ze(t);)e.push(t),t=t.parentModule
var r=Fe.resolve()
return e.forEach(function(e){r=r.then(function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,l(n.childModules))}return De("suiteEnd",e.suiteReport.end(!0)),Ce("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(C.now()-e.stats.started)})}(e)})}),r}}).then(function(){K.current=void 0})},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=_({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=K.storage&&+K.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=K.reorder&&!!t
this.previousFailure=!!t,K.pq.add(function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])},n)}else Ve(this.module)},pushResult:function(e){if(this!==K.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(C.now()-this.started),todo:!!this.todo}
if(F.call(e,"expected")&&(r.expected=e.expected),!e.result){var a=e.source||me()
a&&(r.source=a)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t){if(!(this instanceof Te))throw new Error("pushFailure() assertion outside test context, was "+me(2))
this.pushResult({result:!1,message:e||"error",source:t})},logAssertion:function(e){Ce("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),De("assertion",t)},internalResetTimeout:function(e){g(K.timeout),K.timeout=m(K.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
K.blocking=!0
var t,n=this,r=this.nextPauseId++,a={cancelled:!1,remaining:e}
return n.pauses.set(r,a),m&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof K.testTimeout&&(t=K.testTimeout),"number"==typeof t&&t>0?(K.timeoutHandler=function(e){return function(){K.timeout=null,a.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),me(2)),Be(n)}},g(K.timeout),K.timeout=m(K.timeoutHandler(t),t)):(g(K.timeout),K.timeout=m(function(){K.timeout=null,K._deprecated_timeout_shown||(K._deprecated_timeout_shown=!0,ne.warn('Test "'.concat(n.testName,'" took longer than 3000ms, but no timeout was set. Set QUnit.config.testTimeout or call assert.timeout() to avoid a timeout in QUnit 3. https://qunitjs.com/api/config/testTimeout/')))},3e3))),function(){if(!a.cancelled){if(void 0===K.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(K.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
a.remaining--,0===a.remaining&&n.pauses.delete(r),qe(n)}}},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"==typeof r){var a=n.internalStop(),o=function(){a()}
K.notrycatch?r.call(e,o):r.call(e,o,function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,he(e,0)),Ne(),Be(n)})}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,n){return!n||!n.length||T(t.moduleId,n)||t.parentModule&&e(t.parentModule,n)}(this.module,K.moduleId))return!1
if(K.testId&&K.testId.length&&!T(this.testId,K.testId))return!1
var e=K.module&&K.module.toLowerCase()
if(!function e(t,n){return!n||(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule,n)}(this.module,e))return!1
var t=K.filter
if(t){var n=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),r=this.module.name+": "+this.testName
if(n){if(!this.regexFilter(!!n[1],n[2],n[3],r))return!1}else if(!this.stringFilter(t,r))return!1}if("function"==typeof K.testFilter){var a={testId:this.testId,testName:this.testName,module:this.module.name,skip:!!this.skip}
try{return!!K.testFilter(a)}catch(e){return ne.warn("Error in QUnit.config.testFilter callback: ",e),!1}}return!0},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var _e=!1
function Se(e){_e||K.currentModule.ignored||new Te(e).queue()}function Oe(e){K.currentModule.ignored||(_e||(K.queue.length=0,le(K.currentModule),_e=!0),new Te(e).queue())}function Me(e,t){Se({testName:e,callback:t})}function Pe(e,t){return"".concat(e," [").concat(t,"]")}var Ie=/[\x00-\x1F\x7F\xA0]/
function je(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n],a=d(r),o=n
if("string"===a&&r.length<=40&&!Ie.test(r)&&!/\s*\d+: /.test(r))o=r
else if("string"===a||"number"===a||"boolean"===a||"undefined"===a||null===r){var i=String(r)
Ie.test(i)||(o=n+": "+(i.length<=30?i:i.slice(0,29)+"…"))}t(r,o)}else{if("object"!==d(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(d(e)," instead."))
for(var s in e)t(e[s],s)}}function Be(e){e.pauses.forEach(function(e){e.cancelled=!0}),e.pauses.clear(),qe(e)}function qe(e){e.pauses.size>0||(m?(g(K.timeout),K.timeout=m(function(){e.pauses.size>0||(g(K.timeout),K.timeout=null,K.blocking=!1,K.pq.advance())})):(K.blocking=!1,K.pq.advance()))}function Le(e){for(var t=[].concat(e.tests),n=l(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,l(r.childModules))}return t}function ze(e){return e.testsRun+e.testsIgnored===Le(e).length}function Ve(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}_(Me,{todo:function(e,t){Se({testName:e,callback:t,todo:!0})},skip:function(e){Se({testName:e,skip:!0})},if:function(e,t,n){Se({testName:e,callback:n,skip:!t})},only:function(e,t){Oe({testName:e,callback:t})},each:function(e,t,n){je(t,function(t,r){Se({testName:Pe(e,r),callback:n,withData:!0,stackOffset:5,data:t})})}}),Me.todo.each=function(e,t,n){je(t,function(t,r){Se({testName:Pe(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})})},Me.skip.each=function(e,t){je(t,function(t,n){Se({testName:Pe(e,n),stackOffset:5,skip:!0})})},Me.if.each=function(e,t,n,r){je(n,function(n,a){Se({testName:Pe(e,a),callback:r,withData:!0,stackOffset:5,skip:!t,data:t?n:void 0})})},Me.only.each=function(e,t,n){je(t,function(t,r){Oe({testName:Pe(e,r),callback:n,withData:!0,stackOffset:5,data:t})})}
var $e,Ue,He,Ge,We=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return s(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}])}(),Ke=b&&void 0!==b.performance&&"function"==typeof b.performance.mark&&"function"==typeof b.performance.measure?b.performance:void 0,Qe={measure:Ke?function(e,t,n){try{Ke.measure(e,t,n)}catch(e){ne.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:Ke?Ke.mark.bind(Ke):function(){}},Ye=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.perf=n.perf||Qe,t.on("runStart",this.onRunStart.bind(this)),t.on("runEnd",this.onRunEnd.bind(this)),t.on("suiteStart",this.onSuiteStart.bind(this)),t.on("suiteEnd",this.onSuiteEnd.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this))}return s(e,[{key:"onRunStart",value:function(){this.perf.mark("qunit_suite_0_start")}},{key:"onSuiteStart",value:function(e){var t=e.fullName.length
this.perf.mark("qunit_suite_".concat(t,"_start"))}},{key:"onSuiteEnd",value:function(e){var t=e.fullName.length,n=e.fullName.join(" – ")
this.perf.mark("qunit_suite_".concat(t,"_end")),this.perf.measure("QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}},{key:"onTestStart",value:function(){this.perf.mark("qunit_test_start")}},{key:"onTestEnd",value:function(e){this.perf.mark("qunit_test_end")
var t=e.fullName.join(" – ")
this.perf.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}},{key:"onRunEnd",value:function(){this.perf.mark("qunit_suite_0_end"),this.perf.measure("QUnit Test Run","qunit_suite_0_start","qunit_suite_0_end")}}],[{key:"init",value:function(t,n){return new e(t,n)}}])}(),Xe=!0
if("undefined"!=typeof process){var Ze=process.env||{}
$e=Ze.FORCE_COLOR,Ue=Ze.NODE_DISABLE_COLORS,He=Ze.NO_COLOR,Ge=Ze.TERM,Xe=process.stdout&&process.stdout.isTTY}var Je={enabled:!Ue&&null==He&&"dumb"!==Ge&&(null!=$e&&"0"!==$e||Xe),reset:tt(0,0),bold:tt(1,22),dim:tt(2,22),italic:tt(3,23),underline:tt(4,24),inverse:tt(7,27),hidden:tt(8,28),strikethrough:tt(9,29),black:tt(30,39),red:tt(31,39),green:tt(32,39),yellow:tt(33,39),blue:tt(34,39),magenta:tt(35,39),cyan:tt(36,39),white:tt(37,39),gray:tt(90,39),grey:tt(90,39),bgBlack:tt(40,49),bgRed:tt(41,49),bgGreen:tt(42,49),bgYellow:tt(43,49),bgBlue:tt(44,49),bgMagenta:tt(45,49),bgCyan:tt(46,49),bgWhite:tt(47,49)}
function et(e,t){for(var n,r=0,a="",o="";r<e.length;r++)a+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return a+t+o}function tt(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Je.enabled?et(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Je.reset.bind(r),r.bold=Je.bold.bind(r),r.dim=Je.dim.bind(r),r.italic=Je.italic.bind(r),r.underline=Je.underline.bind(r),r.inverse=Je.inverse.bind(r),r.hidden=Je.hidden.bind(r),r.strikethrough=Je.strikethrough.bind(r),r.black=Je.black.bind(r),r.red=Je.red.bind(r),r.green=Je.green.bind(r),r.yellow=Je.yellow.bind(r),r.blue=Je.blue.bind(r),r.magenta=Je.magenta.bind(r),r.cyan=Je.cyan.bind(r),r.white=Je.white.bind(r),r.gray=Je.gray.bind(r),r.grey=Je.grey.bind(r),r.bgBlack=Je.bgBlack.bind(r),r.bgRed=Je.bgRed.bind(r),r.bgGreen=Je.bgGreen.bind(r),r.bgYellow=Je.bgYellow.bind(r),r.bgBlue=Je.bgBlue.bind(r),r.bgMagenta=Je.bgMagenta.bind(r),r.bgCyan=Je.bgCyan.bind(r),r.bgWhite=Je.bgWhite.bind(r),r):Je.enabled?et([n],t+""):t+""
var r}}function nt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n|:#]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var n=new Array(2*t+1).join(" "),r=e.match(/\n+$/)
return 1===(r?r[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map(function(e){return n+e}).join("\n"):"|+\n"+e.split("\n").map(function(e){return n+e}).join("\n")}return e}var a=new Array(t+1).join(" ")
return JSON.stringify(rt(e),null,2).split("\n").map(function(e,t){return 0===t?e:a+e}).join("\n")}function rt(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":n.push(e),t=e.map(function(e){return rt(e,n)}),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach(function(r){t[r]=rt(e[r],n)}),n.pop()
break
default:t=e}return t}var at=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.started=!1,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return s(e,[{key:"onRunStart",value:function(e){this.started||(this.log("TAP version 13"),this.started=!0)}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.onRunStart(),this.testCount=this.testCount+1,this.log("not ok ".concat(this.testCount," ").concat(Je.red("global failure"))),this.logError(e)),this.log("Bail out! "+P(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log("ok ".concat(this.testCount," ").concat(Je.yellow(e.fullName.join(" > "))," # SKIP")):"todo"===e.status?(this.log("not ok ".concat(this.testCount," ").concat(Je.cyan(e.fullName.join(" > "))," # TODO")),e.errors.forEach(function(e){return t.logAssertion(e,"todo")})):(this.log("not ok ".concat(this.testCount," ").concat(Je.red(e.fullName.join(" > ")))),e.errors.forEach(function(e){return t.logAssertion(e)}))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log("# ".concat(Je.yellow("skip ".concat(e.testCounts.skipped)))),this.log("# ".concat(Je.cyan("todo ".concat(e.testCounts.todo)))),this.log("# ".concat(Je.red("fail ".concat(e.testCounts.failed))))}},{key:"logAssertion",value:function(e,t){var n="  ---"
if(n+="\n  message: ".concat(nt(e.message||"failed")),n+="\n  severity: ".concat(nt(t||"failed")),(void 0!==e.expected||void 0!==e.actual)&&(n+="\n  actual  : ".concat(nt(e.actual)),n+="\n  expected: ".concat(nt(e.expected))),e.stack){var r=fe(e.stack,Je.grey)
r.length&&(n+="\n  stack: ".concat(nt(r+"\n")))}n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
if(t+="\n  message: ".concat(nt(P(e))),t+="\n  severity: ".concat(nt("failed")),e&&e.stack){var n=fe(e.stack,Je.grey,e.toString())
n.length&&(t+="\n  stack: ".concat(nt(n+"\n")))}t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}])}(),ot={console:We,perf:Ye,tap:at}
function it(e){return function(t){K.globalHooks[e]||(K.globalHooks[e]=[]),K.globalHooks[e].push(t)}}var st={beforeEach:it("beforeEach"),afterEach:it("afterEach")},ut=s(function e(t){o(this,e),this.test=t,this.priorityCount=0,this.unitSampler=null,this.taskQueue=[],this.finished=!1},[{key:"advance",value:function(){this.advanceTaskQueue(),this.taskQueue.length||K.blocking||K.current||this.advanceTestQueue()}},{key:"advanceTaskQueue",value:function(){var e=C.now()
K.depth=(K.depth||0)+1,this.processTaskQueue(e),K.depth--}},{key:"processTaskQueue",value:function(e){var t=this
if(this.taskQueue.length&&!K.blocking){var n=C.now()-e
if(!m||K.updateRate<=0||n<K.updateRate){var r=this.taskQueue.shift()
Fe.resolve(r()).then(function(){t.taskQueue.length?t.processTaskQueue(e):t.advance()})}else m(function(){t.advance()})}}},{key:"advanceTestQueue",value:function(){if(K.blocking||K.queue.length||0!==K.depth){var e=K.queue.shift()
this.addToTaskQueue(e()),this.priorityCount>0&&this.priorityCount--,this.advance()}else this.done()}},{key:"addToTaskQueue",value:function(e){var t;(t=this.taskQueue).push.apply(t,l(e))}},{key:"taskCount",value:function(){return this.taskQueue.length}},{key:"add",value:function(e,t){if(t)K.queue.splice(this.priorityCount++,0,e)
else if(K.seed){this.unitSampler||(this.unitSampler=(r=K.seed,a=parseInt(M(r),16)||-1,function(){return a^=a<<13,a^=a>>>17,(a^=a<<5)<0&&(a+=4294967296),a/4294967296}))
var n=Math.floor(this.unitSampler()*(K.queue.length-this.priorityCount+1))
K.queue.splice(this.priorityCount+n,0,e)}else K.queue.push(e)
var r,a}},{key:"done",value:function(){var e
if(0===K.stats.testCount&&!0===K.failOnZeroTests)return e=K.filter&&K.filter.length?new Error('No tests matched the filter "'.concat(K.filter,'".')):K.module&&K.module.length?new Error('No tests matched the module "'.concat(K.module,'".')):K.moduleId&&K.moduleId.length?new Error('No tests matched the moduleId "'.concat(K.moduleId,'".')):K.testId&&K.testId.length?new Error('No tests matched the testId "'.concat(K.testId,'".')):new Error("No tests were run."),this.test("global failure",_(function(t){t.pushResult({result:!1,message:e.message,source:e.stack})},{validTest:!0})),void this.advance()
var t=K.storage,n=Math.round(C.now()-K.started),r=K.stats.all-K.stats.bad
this.finished=!0,De("runEnd",oe.end(!0)),Ce("done",{passed:r,failed:K.stats.bad,total:K.stats.all,runtime:n}).then(function(){if(t&&0===K.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}})}}])
function lt(e){K.current?K.current.assert.pushResult({result:!1,message:"global failure: ".concat(P(e)),source:e&&e.stack||me(2)}):(oe.globalFailureCount++,K.stats.bad++,K.stats.all++,De("error",e))}function ct(){}var dt=-1,pt=Object.prototype.hasOwnProperty
ct.prototype.DiffMain=function(e,t,n){var r=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===n&&(n=!0)
var a=this.diffCommonPrefix(e,t),o=e.substring(0,a)
e=e.substring(a),t=t.substring(a),a=this.diffCommonSuffix(e,t)
var i=e.substring(e.length-a)
e=e.substring(0,e.length-a),t=t.substring(0,t.length-a)
var s=this.diffCompute(e,t,n,r)
return o&&s.unshift([0,o]),i&&s.push([0,i]),this.diffCleanupMerge(s),s},ct.prototype.diffCleanupEfficiency=function(e){var t,n,r,a,o,i,s,u,l
for(t=!1,n=[],r=0,a=null,o=0,i=!1,s=!1,u=!1,l=!1;o<e.length;)0===e[o][0]?(e[o][1].length<4&&(u||l)?(n[r++]=o,i=u,s=l,a=e[o][1]):(r=0,a=null),u=l=!1):(e[o][0]===dt?l=!0:u=!0,a&&(i&&s&&u&&l||a.length<2&&i+s+u+l===3)&&(e.splice(n[r-1],0,[dt,a]),e[n[r-1]+1][0]=1,r--,a=null,i&&s?(u=l=!0,r=0):(o=--r>0?n[r-1]:-1,u=l=!1),t=!0)),o++
t&&this.diffCleanupMerge(e)},ct.prototype.diffPrettyHtml=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n][0],a=e[n][1]
switch(r){case 1:t[n]="<ins>"+I(a)+"</ins>"
break
case dt:t[n]="<del>"+I(a)+"</del>"
break
case 0:t[n]="<span>"+I(a)+"</span>"}}return t.join("")},ct.prototype.diffCommonPrefix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(o,n)===t.substring(o,n)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},ct.prototype.diffCommonSuffix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},ct.prototype.diffCompute=function(e,t,n,r){var a,o,i,s,u,l,c,d,p,f,h,m
return e?t?(o=e.length>t.length?e:t,i=e.length>t.length?t:e,-1!==(s=o.indexOf(i))?(a=[[1,o.substring(0,s)],[0,i],[1,o.substring(s+i.length)]],e.length>t.length&&(a[0][0]=a[2][0]=dt),a):1===i.length?[[dt,e],[1,t]]:(u=this.diffHalfMatch(e,t))?(l=u[0],d=u[1],c=u[2],p=u[3],f=u[4],h=this.DiffMain(l,c,n,r),m=this.DiffMain(d,p,n,r),h.concat([[0,f]],m)):n&&e.length>100&&t.length>100?this.diffLineMode(e,t,r):this.diffBisect(e,t,r)):[[dt,e]]:[[1,t]]},ct.prototype.diffHalfMatch=function(e,t){var n,r,a,o,i,s,u,l,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function p(e,t,n){var r,o,i,s,u,l,c,d,p
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(r,o+1));)s=a.diffCommonPrefix(e.substring(n),t.substring(o)),u=a.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),i.length<u+s&&(i=t.substring(o-u,o)+t.substring(o,o+s),l=e.substring(0,n-u),c=e.substring(n+s),d=t.substring(0,o-u),p=t.substring(o+s))
return 2*i.length>=e.length?[l,c,d,p,i]:null}return a=this,l=p(n,r,Math.ceil(n.length/4)),c=p(n,r,Math.ceil(n.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],u=d[1],s=d[2],i=d[3]):(s=d[0],i=d[1],o=d[2],u=d[3]),[o,u,s,i,d[4]]):null},ct.prototype.diffLineMode=function(e,t,n){var r,a,o,i,s,u,l,c,d
for(e=(r=this.diffLinesToChars(e,t)).chars1,t=r.chars2,o=r.lineArray,a=this.DiffMain(e,t,!1,n),this.diffCharsToLines(a,o),this.diffCleanupSemantic(a),a.push([0,""]),i=0,u=0,s=0,c="",l="";i<a.length;){switch(a[i][0]){case 1:s++,l+=a[i][1]
break
case dt:u++,c+=a[i][1]
break
case 0:if(u>=1&&s>=1){for(a.splice(i-u-s,u+s),i=i-u-s,d=(r=this.DiffMain(c,l,!1,n)).length-1;d>=0;d--)a.splice(i,0,r[d])
i+=r.length}s=0,u=0,c="",l=""}i++}return a.pop(),a},ct.prototype.diffBisect=function(e,t,n){var r,a,o,i,s,u,l,c,d,p,f,h,m,g,v,b,y,w,D,E,x,A,F
for(r=e.length,a=t.length,i=o=Math.ceil((r+a)/2),s=2*o,u=new Array(s),l=new Array(s),c=0;c<s;c++)u[c]=-1,l[c]=-1
for(u[i+1]=0,l[i+1]=0,p=(d=r-a)%2!=0,f=0,h=0,m=0,g=0,x=0;x<o&&!(Date.now()>n);x++){for(A=-x+f;A<=x-h;A+=2){for(b=i+A,D=(y=A===-x||A!==x&&u[b-1]<u[b+1]?u[b+1]:u[b-1]+1)-A;y<r&&D<a&&e.charAt(y)===t.charAt(D);)y++,D++
if(u[b]=y,y>r)h+=2
else if(D>a)f+=2
else if(p&&(v=i+d-A)>=0&&v<s&&-1!==l[v]&&y>=(w=r-l[v]))return this.diffBisectSplit(e,t,y,D,n)}for(F=-x+m;F<=x-g;F+=2){for(v=i+F,E=(w=F===-x||F!==x&&l[v-1]<l[v+1]?l[v+1]:l[v-1]+1)-F;w<r&&E<a&&e.charAt(r-w-1)===t.charAt(a-E-1);)w++,E++
if(l[v]=w,w>r)g+=2
else if(E>a)m+=2
else if(!p&&(b=i+d-F)>=0&&b<s&&-1!==u[b]&&(D=i+(y=u[b])-b,y>=(w=r-w)))return this.diffBisectSplit(e,t,y,D,n)}}return[[dt,e],[1,t]]},ct.prototype.diffBisectSplit=function(e,t,n,r,a){var o,i,s,u,l,c
return o=e.substring(0,n),s=t.substring(0,r),i=e.substring(n),u=t.substring(r),l=this.DiffMain(o,s,!1,a),c=this.DiffMain(i,u,!1,a),l.concat(c)},ct.prototype.diffCleanupSemantic=function(e){for(var t,n,r,a,o=!1,i=[],s=0,u=null,l=0,c=0,d=0,p=0,f=0;l<e.length;)0===e[l][0]?(i[s++]=l,c=p,d=f,p=0,f=0,u=e[l][1]):(1===e[l][0]?p+=e[l][1].length:f+=e[l][1].length,u&&u.length<=Math.max(c,d)&&u.length<=Math.max(p,f)&&(e.splice(i[s-1],0,[dt,u]),e[i[s-1]+1][0]=1,s--,l=--s>0?i[s-1]:-1,c=0,d=0,p=0,f=0,u=null,o=!0)),l++
for(o&&this.diffCleanupMerge(e),l=1;l<e.length;)e[l-1][0]===dt&&1===e[l][0]&&(t=e[l-1][1],n=e[l][1],(r=this.diffCommonOverlap(t,n))>=(a=this.diffCommonOverlap(n,t))?(r>=t.length/2||r>=n.length/2)&&(e.splice(l,0,[0,n.substring(0,r)]),e[l-1][1]=t.substring(0,t.length-r),e[l+1][1]=n.substring(r),l++):(a>=t.length/2||a>=n.length/2)&&(e.splice(l,0,[0,t.substring(0,a)]),e[l-1][0]=1,e[l-1][1]=n.substring(0,n.length-a),e[l+1][0]=dt,e[l+1][1]=t.substring(a),l++),l++),l++},ct.prototype.diffCommonOverlap=function(e,t){var n=e.length,r=t.length
if(0===n||0===r)return 0
n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n))
var a=Math.min(n,r)
if(e===t)return a
for(var o=0,i=1;;){var s=e.substring(a-i),u=t.indexOf(s)
if(-1===u)return o
i+=u,0!==u&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},ct.prototype.diffLinesToChars=function(e,t){var n=[],r={}
function a(e){for(var t="",a=0,o=-1,i=n.length;o<e.length-1;){-1===(o=e.indexOf("\n",a))&&(o=e.length-1)
var s=e.substring(a,o+1)
a=o+1,pt.call(r,s)?t+=String.fromCharCode(r[s]):(t+=String.fromCharCode(i),r[s]=i,n[i++]=s)}return t}return n[0]="",{chars1:a(e),chars2:a(t),lineArray:n}},ct.prototype.diffCharsToLines=function(e,t){for(var n=0;n<e.length;n++){for(var r=e[n][1],a=[],o=0;o<r.length;o++)a[o]=t[r.charCodeAt(o)]
e[n][1]=a.join("")}},ct.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var t=0,n=0,r=0,a="",o="";t<e.length;)switch(e[t][0]){case 1:r++,o+=e[t][1],t++
break
case dt:n++,a+=e[t][1],t++
break
case 0:if(n+r>1){if(0!==n&&0!==r){var i=this.diffCommonPrefix(o,a)
0!==i&&(t-n-r>0&&0===e[t-n-r-1][0]?e[t-n-r-1][1]+=o.substring(0,i):(e.splice(0,0,[0,o.substring(0,i)]),t++),o=o.substring(i),a=a.substring(i)),0!==(i=this.diffCommonSuffix(o,a))&&(e[t][1]=o.substring(o.length-i)+e[t][1],o=o.substring(0,o.length-i),a=a.substring(0,a.length-i))}0===n?e.splice(t-r,n+r,[1,o]):0===r?e.splice(t-n,n+r,[dt,a]):e.splice(t-n-r,n+r,[dt,a],[1,o]),t=t-n-r+(n?1:0)+(r?1:0)+1}else 0!==t&&0===e[t-1][0]?(e[t-1][1]+=e[t][1],e.splice(t,1)):t++
r=0,n=0,a="",o=""}""===e[e.length-1][1]&&e.pop()
var s=!1
for(t=1;t<e.length-1;){if(0===e[t-1][0]&&0===e[t+1][0]){var u=e[t][1]
u.substring(u.length-e[t-1][1].length)===e[t-1][1]?(e[t][1]=e[t-1][1]+e[t][1].substring(0,e[t][1].length-e[t-1][1].length),e[t+1][1]=e[t-1][1]+e[t+1][1],e.splice(t-1,1),s=!0):u.substring(0,e[t+1][1].length)===e[t+1][1]&&(e[t-1][1]+=e[t+1][1],e[t][1]=e[t][1].substring(e[t+1][1].length)+e[t+1][1],e.splice(t+1,1),s=!0)}t++}s&&this.diffCleanupMerge(e)}
var ft={}
K.currentModule.suiteReport=oe,K.pq=new ut(Me)
var ht=!1,mt=!1
function gt(){mt=!0,m?m(function(){bt()}):bt()}function vt(){K.blocking=!1,K.pq.advance()}function bt(){if(K.started)vt()
else{K.reporters.console&&ot.console.init(ft),K.reporters.tap&&ot.tap.init(ft),K.started=C.now(),""===K.modules[0].name&&0===K.modules[0].tests.length&&K.modules.shift()
for(var e=[],t=0;t<K.modules.length;t++)""!==K.modules[t].name&&e.push({name:K.modules[t].name,moduleId:K.modules[t].moduleId,tests:K.modules[t].tests})
De("runStart",oe.start(!0)),Ce("begin",{totalTests:Te.count,modules:e}).then(vt)}}ft.isLocal=b&&b.location&&"file:"===b.location.protocol,ft.version="2.26.0",_(ft,{config:K,diff:function(e,t){var n,r
return r=(n=new ct).DiffMain(e,t),n.diffCleanupEfficiency(r),n.diffPrettyHtml(r)},dump:te,equiv:W,reporters:ot,hooks:st,is:O,objectType:S,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!T(e,ye)){var n=ye.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
var r=K._event_listeners[e]||(K._event_listeners[e]=[])
T(t,r)||(r.push(t),void 0!==K._event_memory[e]&&t(K._event_memory[e]))},onError:function(e){if(ne.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),K.current&&K.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,lt(t),!1},onUncaughtException:lt,pushFailure:Re,assert:ge.prototype,module:de,test:Me,todo:Me.todo,skip:Me.skip,only:Me.only,start:function(e){if(K.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=ht
if(ht=!0,mt)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(K.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!K.pageLoaded)return K.autostart=!0,void(y||ft.autostart())
gt()},onUnhandledRejection:function(e){ne.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),lt(e)},extend:function(){ne.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return _.apply(this,t)},load:function(){ne.warn("QUnit.load is deprecated and will be removed in QUnit 3.0. https://qunitjs.com/api/QUnit/load/"),ft.autostart()},autostart:function(){K.pageLoaded=!0,_(K,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),mt||(K.blocking=!1,K.autostart&&gt())},stack:function(e){return me(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
K.callbacks[e].push(t)}}for(var r=0;r<t.length;r++){var a=t[r]
void 0===K.callbacks[a]&&(K.callbacks[a]=[]),e[a]=n(a)}}(ft),function(a){if(b&&y){if(b.QUnit&&b.QUnit.version)throw new Error("QUnit has already been defined.")
b.QUnit=a}e&&e.exports&&(e.exports=a,e.exports.QUnit=a),t&&(t.QUnit=a),void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r),a.config.autostart=!1}(ft),function(){if(b&&y){var e=ft.config,t=Object.prototype.hasOwnProperty
ft.begin(function(){if(!t.call(e,"fixture")){var n=y.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}}),ft.testStart(function(){if(null!=e.fixture){var t=y.getElementById("qunit-fixture")
if("string"===d(e.fixture)){var n=y.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}})}}(),function(){var e=void 0!==b&&b.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),a=r.length,o=0;o<a;o++)if(r[o]){var i=r[o].split("="),s=n(i[0]),u=1===i.length||n(i.slice(1).join("="))
t[s]=s in t?[].concat(t[s],u):u}return t}()
ft.urlParams=t,ft.config.filter=t.filter,/^[0-9]+$/.test(t.maxDepth)&&(ft.config.maxDepth=ft.dump.maxDepth=+t.maxDepth),ft.config.module=t.module,ft.config.moduleId=[].concat(t.moduleId||[]),ft.config.testId=[].concat(t.testId||[]),"true"===t.seed||!0===t.seed?ft.config.seed=(Math.random().toString(36)+"0000000000").slice(2,12):t.seed&&(ft.config.seed=t.seed),ft.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),ft.begin(function(){for(var e=ft.config.urlConfig,n=0;n<e.length;n++){var r=ft.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===ft.config[r]&&(ft.config[r]=t[r])}})}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var yt={exports:{}}
!function(e){var t,n
t=Ee,n=function(){var e=void 0!==xe&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,n){return e[t]=n,this},this.clear=function(){e=Object.create(null)}},n=new t,r=new t,a=[]
a.total=0
var o=[],i=[]
function s(){n.clear(),r.clear(),o=[],i=[]}function u(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var a=r.score
a>t&&(t=a)}}return-9007199254740991===t?null:t}function l(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var a=r.length,o=-1;e&&++o<a;)e=e[r[o]]
return e}function c(e){return"object"===d(e)}var p=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],a=1;a<t;){var o=a+1
n=a,o<t&&e[o].score<e[a].score&&(n=o),e[n-1>>1]=e[n],a=1+(n<<1)}for(var i=n-1>>1;n>0&&r.score<e[i].score;i=(n=i)-1>>1)e[n]=e[i]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var a=r-1>>1;r>0&&n.score<e[a].score;a=(r=a)-1>>1)e[r]=e[a]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},f=p()
return function t(d){var h={single:function(e,t,n){return"farzher"==e?{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6]}:e?(c(e)||(e=h.getPreparedSearch(e)),t?(c(t)||(t=h.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if("farzher"==e)return[{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:t?t[0]:null}]
if(!e)return a
var r=(e=h.prepareSearch(e))[0],o=n&&n.threshold||d&&d.threshold||-9007199254740991,i=n&&n.limit||d&&d.limit||9007199254740991,s=(n&&void 0!==n.allowTypo?n.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo,p=0,m=0,g=t.length
if(n&&n.keys)for(var v=n.scoreFn||u,b=n.keys,y=b.length,w=g-1;w>=0;--w){for(var D=t[w],E=new Array(y),x=y-1;x>=0;--x)(C=l(D,F=b[x]))?(c(C)||(C=h.getPrepared(C)),E[x]=s(e,C,r)):E[x]=null
E.obj=D
var A=v(E)
null!==A&&(A<o||(E.score=A,p<i?(f.add(E),++p):(++m,A>f.peek().score&&f.replaceTop(E))))}else if(n&&n.key){var F=n.key
for(w=g-1;w>=0;--w)(C=l(D=t[w],F))&&(c(C)||(C=h.getPrepared(C)),null!==(k=s(e,C,r))&&(k.score<o||(k={target:k.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:k.score,indexes:k.indexes,obj:D},p<i?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}else for(w=g-1;w>=0;--w){var C,k;(C=t[w])&&(c(C)||(C=h.getPrepared(C)),null!==(k=s(e,C,r))&&(k.score<o||(p<i?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}if(0===p)return a
var T=new Array(p)
for(w=p-1;w>=0;--w)T[w]=f.poll()
return T.total=p+m,T},goAsync:function(t,n,r){var o=!1,i=new Promise(function(i,s){if("farzher"==t)return i([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return i(a)
var f=(t=h.prepareSearch(t))[0],m=p(),g=n.length-1,v=r&&r.threshold||d&&d.threshold||-9007199254740991,b=r&&r.limit||d&&d.limit||9007199254740991,y=(r&&void 0!==r.allowTypo?r.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo,w=0,D=0
function E(){if(o)return s("canceled")
var d=Date.now()
if(r&&r.keys)for(var p=r.scoreFn||u,x=r.keys,A=x.length;g>=0;--g){if(g%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(E):setTimeout(E))
for(var F=n[g],C=new Array(A),k=A-1;k>=0;--k)(N=l(F,R=x[k]))?(c(N)||(N=h.getPrepared(N)),C[k]=y(t,N,f)):C[k]=null
C.obj=F
var T=p(C)
null!==T&&(T<v||(C.score=T,w<b?(m.add(C),++w):(++D,T>m.peek().score&&m.replaceTop(C))))}else if(r&&r.key)for(var R=r.key;g>=0;--g){if(g%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(E):setTimeout(E));(N=l(F=n[g],R))&&(c(N)||(N=h.getPrepared(N)),null!==(_=y(t,N,f))&&(_.score<v||(_={target:_.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:_.score,indexes:_.indexes,obj:F},w<b?(m.add(_),++w):(++D,_.score>m.peek().score&&m.replaceTop(_)))))}else for(;g>=0;--g){if(g%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(E):setTimeout(E))
var N,_;(N=n[g])&&(c(N)||(N=h.getPrepared(N)),null!==(_=y(t,N,f))&&(_.score<v||(w<b?(m.add(_),++w):(++D,_.score>m.peek().score&&m.replaceTop(_)))))}if(0===w)return i(a)
for(var S=new Array(w),O=w-1;O>=0;--O)S[O]=m.poll()
S.total=w+D,i(S)}e?setImmediate(E):E()})
return i.cancel=function(){o=!0},i},highlight:function(e,t,n){if("function"==typeof t)return h.highlightCallback(e,t)
if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",a=0,o=!1,i=e.target,s=i.length,u=e.indexes,l=0;l<s;++l){var c=i[l]
if(u[a]===l){if(o||(o=!0,r+=t),++a===u.length){r+=c+n+i.substr(l+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},highlightCallback:function(e,t){if(null===e)return null
for(var n=e.target,r=n.length,a=e.indexes,o="",i=0,s=0,u=!1,l=(e=[],0);l<r;++l){var c=n[l]
if(a[s]===l){if(++s,u||(u=!0,e.push(o),o=""),s===a.length){o+=c,e.push(t(o,i++)),o="",e.push(n.substr(l+1))
break}}else u&&(u=!1,e.push(t(o,i++)),o="")
o+=c}return e},prepare:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:h.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSearch:function(e){return e||(e=""),h.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return h.prepare(e)
var t=n.get(e)
return void 0!==t||(t=h.prepare(e),n.set(e,t)),t},getPreparedSearch:function(e){if(e.length>999)return h.prepareSearch(e)
var t=r.get(e)
return void 0!==t||(t=h.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,s=r.length,u=0,l=0,c=0,d=0;;){if(n===r[l]){if(o[d++]=l,++u===a)break
n=e[0===c?u:c===u?u+1:c===u-1?u-1:u]}if(++l>=s)for(;;){if(u<=1)return null
if(0===c){if(n===e[--u])continue
c=u}else{if(1===c)return null
if((n=e[1+(u=--c)])===e[u])continue}l=o[(d=u)-1]+1
break}}u=0
var p=0,f=!1,m=0,g=t._nextBeginningIndexes
null===g&&(g=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target))
var v=l=0===o[0]?0:g[o[0]-1]
if(l!==s)for(;;)if(l>=s){if(u<=0){if(++p>a-2)break
if(e[p]===e[p+1])continue
l=v
continue}--u,l=g[i[--m]]}else if(e[0===p?u:p===u?u+1:p===u-1?u-1:u]===r[l]){if(i[m++]=l,++u===a){f=!0
break}++l}else l=g[l]
if(f)var b=i,y=m
else b=o,y=d
for(var w=0,D=-1,E=0;E<a;++E)D!==(l=b[E])-1&&(w-=l),D=l
for(f?0!==p&&(w+=-20):(w*=1e3,0!==c&&(w+=-20)),w-=s-a,t.score=w,t.indexes=new Array(y),E=y-1;E>=0;--E)t.indexes[E]=b[E]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,s=r.length,u=0,l=0,c=0;;){if(n===r[l]){if(o[c++]=l,++u===a)break
n=e[u]}if(++l>=s)return null}u=0
var d=!1,p=0,f=t._nextBeginningIndexes
if(null===f&&(f=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target)),(l=0===o[0]?0:f[o[0]-1])!==s)for(;;)if(l>=s){if(u<=0)break;--u,l=f[i[--p]]}else if(e[u]===r[l]){if(i[p++]=l,++u===a){d=!0
break}++l}else l=f[l]
if(d)var m=i,g=p
else m=o,g=c
for(var v=0,b=-1,y=0;y<a;++y)b!==(l=m[y])-1&&(v-=l),b=l
for(d||(v*=1e3),v-=s-a,t.score=v,t.indexes=new Array(g),y=g-1;y>=0;--y)t.indexes[y]=m[y]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),a=0;a<t;++a)n[a]=r.charCodeAt(a)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,a=!1,o=!1,i=0;i<t;++i){var s=e.charCodeAt(i),u=s>=65&&s<=90,l=u||s>=97&&s<=122||s>=48&&s<=57,c=u&&!a||!o||!l
a=u,o=l,c&&(n[r++]=i)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=h.prepareBeginningIndexes(e),r=[],a=n[0],o=0,i=0;i<t;++i)a>i?r[i]=a:(a=n[++o],r[i]=void 0===a?t:a)
return r},cleanup:s,new:t}
return h}()},e.exports?e.exports=n():t.fuzzysort=n()}(yt)
var wt=yt.exports,Dt={failedTests:[],defined:0,completed:0}
!function(){if(b&&y){ft.reporters.perf.init(ft)
var e=ft.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,a=k({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
ft.on("runStart",function(e){Dt.defined=e.testCounts.total}),ft.begin(function(t){!function(t){var n,i,s,u,c,h,m,D,k=x("qunit")
k&&(k.setAttribute("role","main"),k.innerHTML="<h1 id='qunit-header'>"+I(y.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(n=ft.config.testId)||n.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+I(n.join(", "))+" <a id='qunit-clearFilter' href='"+I(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=x("qunit-header"))&&(i.innerHTML="<a href='"+I(a)+"'>"+i.innerHTML+"</a> "),(s=x("qunit-banner"))&&(s.className=""),m=x("qunit-tests"),(D=x("qunit-testresult"))&&D.parentNode.removeChild(D),m&&(m.innerHTML="",(D=y.createElement("p")).id="qunit-testresult",D.className="result",m.parentNode.insertBefore(D,m),D.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=x("qunit-testresult-controls")),c&&c.appendChild(((h=y.createElement("button")).id="qunit-abort-tests-button",h.innerHTML="Abort",d(h,"click",A),h)),(u=x("qunit-userAgent"))&&(u.innerHTML="",u.appendChild(y.createTextNode("QUnit "+ft.version+"; "+w.userAgent))),function(t){var n,a,i,s,u,c=x("qunit-testrunner-toolbar")
if(c){c.appendChild(((u=y.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,a="",o=0;o<n.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var s=I(i.id),u=I(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+s+"' title='"+u+"'>"+I(i.label)+": <select id='qunit-urlconfig-"+s+"' name='"+s+"' title='"+u+"'><option></option>",Array.isArray(i.value))for(var l=0;l<i.value.length;l++)a+="<option value='"+(s=I(i.value[l]))+"'"+(e[i.id]===i.value[l]?(t=!0)&&" selected='selected'":"")+">"+s+"</option>"
else for(var c in i.value)r.call(i.value,c)&&(a+="<option value='"+I(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+I(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(s=I(e[i.id]))+"' selected='selected' disabled='disabled'>"+s+"</option>"),a+="</select></label>"}else a+="<label for='qunit-urlconfig-"+s+"' title='"+u+"'><input id='qunit-urlconfig-"+s+"' name='"+s+"' type='checkbox'"+(i.value?" value='"+I(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+u+"' />"+I(i.label)+"</label>"}return a}(),g(u,"qunit-url-config"),f(u.getElementsByTagName("input"),"change",C),f(u.getElementsByTagName("select"),"change",C),u))
var h=y.createElement("span")
h.id="qunit-toolbar-filters",h.appendChild((n=y.createElement("form"),a=y.createElement("label"),i=y.createElement("input"),s=y.createElement("button"),g(n,"qunit-filter"),a.innerHTML="Filter: ",i.type="text",i.value=e.filter||"",i.name="filter",i.id="qunit-filter-input",s.innerHTML="Go",a.appendChild(i),n.appendChild(a),n.appendChild(y.createTextNode(" ")),n.appendChild(s),d(n,"submit",F),n)),h.appendChild(function(t){var n=null
if(o={options:t.modules.slice(),selectedMap:new E,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(n.keys()).sort().join(",")}},e.moduleId.length)for(var r=0;r<t.modules.length;r++){var a=t.modules[r];-1!==e.moduleId.indexOf(a.moduleId)&&o.selectedMap.set(a.moduleId,a.name)}n=new E(o.selectedMap)
var i=y.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",d(i,"input",C),d(i,"input",A),d(i,"focus",A),d(i,"click",A)
var s=y.createElement("label")
s.htmlFor="qunit-modulefilter-search",s.textContent="Module:"
var u=y.createElement("span")
u.id="qunit-modulefilter-search-container",u.appendChild(i)
var c=y.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",d(c,"click",T)
var f=y.createElement("button")
f.textContent="Reset",f.type="reset",f.title="Restore the previous module selection"
var h=y.createElement("button")
h.textContent="Select none",h.type="button",h.title="Clear the current module selection",d(h,"click",function(){o.selectedMap.clear(),k(),C()})
var m=y.createElement("span")
m.id="qunit-modulefilter-actions",m.appendChild(c),m.appendChild(f),n.size&&m.appendChild(h)
var g=y.createElement("ul")
g.id="qunit-modulefilter-dropdown-list"
var w=y.createElement("div")
w.id="qunit-modulefilter-dropdown",w.style.display="none",w.appendChild(m),w.appendChild(g),d(w,"change",k),u.appendChild(w),k()
var D,x=y.createElement("form")
function A(){function e(t){var n=x.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&i.focus(),w.style.display="none",p(y,"click",e),p(y,"keydown",e),i.value="",C())}"none"===w.style.display&&(C(),w.style.display="block",d(y,"click",e),d(y,"keydown",e))}function C(){b.clearTimeout(D),D=b.setTimeout(function(){g.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach(function(e,n){t+=R(n,e,!0)})
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=R(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map(function(e){return{obj:e}}):wt.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)})}function k(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),v(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=n,i.title="Type to search through and reduce the list.",f.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return x.id="qunit-modulefilter",x.appendChild(s),x.appendChild(y.createTextNode(" ")),x.appendChild(u),d(x,"submit",F),d(x,"reset",function(){o.selectedMap=new E(n),k(),C()}),x}(t))
var m=y.createElement("div")
m.className="clearfix",c.appendChild(h),c.appendChild(m)}}(t)}(t)}),ft.on("runEnd",function(t){var n,r,a,o=x("qunit-banner"),i=x("qunit-tests"),s=x("qunit-abort-tests-button"),u=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",u,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",S(Dt.failedTests)].join("")
if(s&&s.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(n=i.children[c]).className&&"running"!==n.className||(n.className="aborted",a=n.getElementsByTagName("ol")[0],(r=y.createElement("li")).className="fail",r.innerHTML="Test aborted.",a.appendChild(r))}!o||s&&!1!==s.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),s&&s.parentNode.removeChild(s),i&&(x("qunit-testresult-display").innerHTML=l),e.altertitle&&y.title&&(y.title=["failed"===t.status?"✖":"✔",y.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&b.scrollTo&&b.scrollTo(0,0)}),ft.testStart(function(e){var t,n
N(e.name,e.testId,e.module),(t=x("qunit-testresult-display"))&&(g(t,"running"),n=ft.config.reorder&&e.previousFailure,t.innerHTML=[M(Dt),n?"Rerunning previously failed test: <br />":"Running: ",O(e.name,e.module),S(Dt.failedTests)].join(""))}),ft.log(function(e){var t=x("qunit-test-output-"+e.testId)
if(t){var n,r,a,o=I(e.message)||(e.result?"okay":"failed")
o="<span class='test-message'>"+o+"</span>",o+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var i=!1
e.result||void 0===e.expected&&void 0===e.actual?!e.result&&e.source&&(o+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr></table>"):(n=e.negative?"NOT "+ft.dump.parse(e.expected):ft.dump.parse(e.expected),r=ft.dump.parse(e.actual),o+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+I(n)+"</pre></td></tr>",r!==n?(o+="<tr class='test-actual'><th>Result: </th><td><pre>"+I(r)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(i=!0,a=((a=e.actual-e.expected)>0?"+":"")+a):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(i=j(a=ft.diff(n,r)).length!==j(n).length+j(r).length),i&&(o+="<tr class='test-diff'><th>Diff: </th><td><pre>"+a+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?o+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+ft.dump.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+I(k({maxDepth:0}))+"'>Rerun without max depth</a>.</p></td></tr>":o+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(o+="<tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr>"),o+="</table>")
var s=t.getElementsByTagName("ol")[0],u=y.createElement("li")
u.className=e.result?"pass":"fail",u.innerHTML=o,s.appendChild(u)}}),ft.testDone(function(r){var a=x("qunit-tests"),o=x("qunit-test-output-"+r.testId)
if(a&&o){var i
D(o,"running"),i=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var s=o.getElementsByTagName("ol")[0],u=r.passed,l=r.failed,c=r.failed>0?r.todo:!r.todo
c?g(s,"qunit-collapsed"):(Dt.failedTests.push(r.testId),e.collapse&&(n?g(s,"qunit-collapsed"):n=!0))
var p=o.firstChild,f=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+u+"</b>, ":""
if(p.innerHTML+=" <b class='counts'>("+f+r.assertions.length+")</b>",Dt.completed++,r.skipped){o.className="skipped"
var h=y.createElement("em")
h.className="qunit-skipped-label",h.innerHTML="skipped",o.insertBefore(h,p)}else{if(d(p,"click",function(){v(s,"qunit-collapsed")}),o.className=c?"pass":"fail",r.todo){var m=y.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,p)}var b=y.createElement("span")
b.className="runtime",b.innerHTML=r.runtime+" ms",o.insertBefore(b,s)}if(r.source){var w=y.createElement("p")
w.innerHTML="<strong>Source: </strong>"+I(r.source),g(w,"qunit-source"),c&&g(w,"qunit-collapsed"),d(p,"click",function(){v(w,"qunit-collapsed")}),o.appendChild(w)}e.hidepassed&&("passed"===i||r.skipped)&&(t.push(o),a.removeChild(o))}}),ft.on("error",function(e){var t=N("global failure")
if(t){var n=I(P(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],a=y.createElement("li")
a.className="fail",a.innerHTML=n,r.appendChild(a),t.className="fail"}})
var i,s=(i=b.phantom)&&i.version&&i.version.major>0
s&&h.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),s||"complete"!==y.readyState?d(b,"load",ft.autostart):ft.autostart()
var u=b.onerror
b.onerror=function(t,n,r,a,o){var i=!1
if(u){for(var s=arguments.length,l=new Array(s>5?s-5:0),c=5;c<s;c++)l[c-5]=arguments[c]
i=u.call.apply(u,[this,t,n,r,a,o].concat(l))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&n&&r&&(d.stack="".concat(n,":").concat(r)),ft.onUncaughtException(d)}return i},b.addEventListener("unhandledrejection",function(e){ft.config.ignoreUnhandledRejections||ft.onUncaughtException(e.reason)})}function c(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function d(e,t,n){e.addEventListener(t,n,!1)}function p(e,t,n){e.removeEventListener(t,n,!1)}function f(e,t,n){for(var r=e.length;r--;)d(e[r],t,n)}function m(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function g(e,t){m(e,t)||(e.className+=(e.className?" ":"")+t)}function v(e,t,n){n||void 0===n&&!m(e,t)?g(e,t):D(e,t)}function D(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=c(n)}function x(e){return y.getElementById&&y.getElementById(e)}function A(){var e=x("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),ft.config.queue.length=0,!1}function F(e){var t=x("qunit-filter-input")
return t.value=c(t.value),T(),e&&e.preventDefault&&e.preventDefault(),!1}function C(){var n,r=this,a={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,a[r.name]=n
var o=k(a)
if("hidepassed"===r.name&&"replaceState"in b.history){ft.urlParams[r.name]=n,e[r.name]=n||!1
var i=x("qunit-tests")
if(i)if(r.checked){for(var s=i.children.length,u=i.children,l=0;l<s;l++){var c=u[l],d=c?c.className:"",p=d.indexOf("pass")>-1,f=d.indexOf("skipped")>-1;(p||f)&&t.push(c)}for(var h=0;h<t.length;h++)i.removeChild(t[h])}else{for(var m=0;m<t.length;m++)i.appendChild(t[m])
t.length=0}b.history.replaceState(null,"",o)}else b.location=o}function k(e){var t="?",n=b.location
for(var a in e=_(_({},ft.urlParams),e))if(r.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function T(){var e=x("qunit-filter-input").value
b.location=k({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function R(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+I(e)+'"'+(n?' checked="checked"':"")+" />"+I(t)+"</label></li>"}function N(e,t,n){var r=x("qunit-tests")
if(r){var a=y.createElement("strong")
a.className="qunit-test-name",a.innerHTML=O(e,n)
var o=y.createElement("li")
if(o.appendChild(a),void 0!==t){var i=y.createElement("a")
i.innerHTML="Rerun",i.href=k({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var s=y.createElement("ol")
return s.className="qunit-assert-list",o.appendChild(s),r.appendChild(o),o}}function S(e){return 0===e.length?"":["<br /><a href='"+I(k({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function O(e,t){var n=""
return t&&(n="<span class='module-name'>"+I(t)+"</span>: "),n+"<span class='test-name'>"+I(e)+"</span>"}function M(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function j(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}()}()},6994(e,t,n){"use strict"
function r(e){return Boolean("object"==typeof e&&e&&"__dom_element_descriptor_is_descriptor__"in e)}function a(e){return function(){const e=window
return e.domElementDescriptorsRegistry=e.domElementDescriptorsRegistry||new WeakMap,e.domElementDescriptorsRegistry}().get(e)||null}function o(e){let t=r(e)?a(e):e
if(!t)return null
if(void 0!==t.element)return t.element
for(let n of t.elements||[])return n
return null}function i(e){let t=r(e)?a(e):e
if(!t)return[]
if(t.elements)return Array.from(t.elements)
{let e=t.element
return e?[e]:[]}}n.d(t,{Mt:()=>i,Ob:()=>a,lH:()=>o,ol:()=>r})}}])
