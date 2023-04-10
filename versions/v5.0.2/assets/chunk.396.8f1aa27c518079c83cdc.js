/*! For license information please see chunk.396.8f1aa27c518079c83cdc.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[396],{348:(e,t,n)=>{"use strict"
function r(e){return e&&e.isDescriptor?"descriptor":null===e?"null":typeof e}function i(e,t,n,i){var o={configurable:!0,enumerable:!0}
"undefined"!==r(i)?o.get=i:(o.writable=!1,o.value=n),Object.defineProperty(e,t,o)}function o(e,t){delete e.__parentTreeNode,t&&Object.defineProperty(e,"__parentTreeNode",{value:t,configurable:!0,enumerable:!1})}function s(e,t){this.blueprint=e,this.builders=t}n.d(t,{Z:()=>u}),s.prototype={builderFor:function(e){return this.builders[r(e)]||this.builders.default},build:function(e){var t,n={}
return this.processNode({root:this.blueprint},n),o(t=n.root,e),t},processNode:function(e,t,n){var i=Object.keys(e),s=this
return i.forEach((function(n){var i,o,u,l=e[n]
i=s.builderFor(l),o=a[r(l)]||a.default,(u=i(t,n,l,o))&&s.processNode(u[1],u[0],t)})),o(t,n),t}}
const a={descriptor:function(e,t,n){"function"==typeof n.setup&&n.setup(e,t),n.value?i(e,t,n.value):i(e,t,void 0,(function(){return n.get.call(this,t)}))},object:function(e,t,n){var r,o,s={}
return i(e,t,s),r=s,o=t,Object.defineProperty(r,"__meta",{value:{key:o,type:"node"},configurable:!1,enumerable:!1}),[s,n]},default:function(e,t,n){i(e,t,n)}},u={defineProperty:i,create:function(e,t){var n=function(){for(var e,t=arguments[0],n=Array.prototype.slice.call(arguments,1),r=0;r<n.length;r++)if(e=n[r])for(var i in e)void 0!==e[i]&&(t[i]=e[i])
return t}({},a,(t=t||{}).builder)
return new s(e,n).build(t.parent)},parent:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__parentTreeNode}(e)},meta:function(e){return function(e){if("object"==typeof e&&null!==e)return e.__meta}(e)}}},993:function(e){var t
t=function(){return function(){var e={686:function(e,t,n){"use strict"
n.d(t,{default:function(){return x}})
var r=n(279),i=n.n(r),o=n(370),s=n.n(o),a=n(817),u=n.n(a)
function l(e){try{return document.execCommand(e)}catch(e){return!1}}var c=function(e){var t=u()(e)
return l("cut"),t},f=function(e,t){var n=function(e){var t="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea")
n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[t?"right":"left"]="-9999px"
var r=window.pageYOffset||document.documentElement.scrollTop
return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=e,n}(e)
t.container.appendChild(n)
var r=u()(n)
return l("copy"),n.remove(),r},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n=""
return"string"==typeof e?n=f(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?n=f(e.value,t):(n=u()(e),l("copy")),n}
function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function y(e,t){var n="data-clipboard-".concat(e)
if(t.hasAttribute(n))return t.getAttribute(n)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(u,e)
var t,n,r,i,o,a=(i=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(i)
if(o){var n=v(this).constructor
e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments)
return function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}(this,e)})
function u(e,t){var n
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=a.call(this)).resolveOptions(t),n.listenClick(e),n}return t=u,n=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this
this.listener=s()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy",r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,n=void 0===t?"copy":t,r=e.container,i=e.target,o=e.text
if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"')
if(void 0!==i){if(!i||"object"!==p(i)||1!==i.nodeType)throw new Error('Invalid "target" value, use a valid Element')
if("copy"===n&&i.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute')
if("cut"===n&&(i.hasAttribute("readonly")||i.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?h(o,{container:r}):i?"cut"===n?c(i):h(i,{container:r}):void 0}({action:n,container:this.container,target:this.target(t),text:this.text(t)})
this.emit(r?"success":"error",{action:n,text:r,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return y("action",e)}},{key:"defaultTarget",value:function(e){var t=y("target",e)
if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return y("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],r=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body}
return h(e,t)}},{key:"cut",value:function(e){return c(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported
return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}],n&&g(t.prototype,n),r&&g(t,r),u}(i()),x=b},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype
t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e
e=e.parentNode}}},438:function(e,t,n){var r=n(828)
function i(e,t,n,r,i){var s=o.apply(this,arguments)
return e.addEventListener(n,s,i),{destroy:function(){e.removeEventListener(n,s,i)}}}function o(e,t,n,i){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&i.call(e,n)}}e.exports=function(e,t,n,r,o){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return i(e,t,n,r,o)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e)
return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var r=n(879),i=n(438)
e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments")
if(!r.string(t))throw new TypeError("Second argument must be a String")
if(!r.fn(n))throw new TypeError("Third argument must be a Function")
if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n)
if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n)
if(r.string(e))return function(e,t,n){return i(document.body,e,t,n)}(e,t,n)
throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t
if("SELECT"===e.nodeName)e.focus(),t=e.value
else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly")
n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus()
var r=window.getSelection(),i=document.createRange()
i.selectNodeContents(e),r.removeAllRanges(),r.addRange(i),t=r.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var r=this.e||(this.e={})
return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this
function i(){r.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,i=n.length;r<i;r++)n[r].fn.apply(n[r].ctx,t)
return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],i=[]
if(r&&t)for(var o=0,s=r.length;o<s;o++)r[o].fn!==t&&r[o].fn._!==t&&i.push(r[o])
return i.length?n[e]=i:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={}
function n(r){if(t[r])return t[r].exports
var i=t[r]={exports:{}}
return e[r](i,i.exports,n),i.exports}return n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e}
return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(686)}().default},e.exports=t()},800:(e,t,n)=>{"use strict"
n.d(t,{CP:()=>s,VS:()=>a,u4:()=>o})
var r=n(348),i=n(554)
const o="Element not found."
function s(e,t,n){const r=(0,i.KM)(e,t.selector,t)
a(e,t.pageObjectKey,n,{selector:r})}function a(e,t,n){let i,{selector:o}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=[t],a=n instanceof Error?n.message:n.toString()
for(i=e;i;i=r.Z.parent(i))s.unshift(r.Z.meta(i).key)
s[0]="page",s.length>0&&(a+=`\n\nPageObject: '${s.join(".")}'`),"string"==typeof o&&o.trim().length>0&&(a=`${a}\n  Selector: '${o}'`)
const u=new Error(a)
throw n instanceof Error&&"stack"in n&&(u.stack=n.stack),console.error(u.message),u}},304:(e,t,n)=>{"use strict"
n.d(t,{U:()=>s,y:()=>o})
var r=n(348),i=n(554)
function o(e){return!(0,i.yj)(e)._chainedTree}function s(e){if(o(e))return e
let t,n=[]
for(t=e;t;t=r.Z.parent(t))n.unshift(r.Z.meta(t).key)
return n.shift(),t=(0,i.yj)(e)._chainedTree,n.forEach((e=>{t=function(e,t){let n
if(n=/\[(\d+)\]$/.exec(t)){let[r,i]=n
return e[t.slice(0,-r.length)].objectAt(parseInt(i,10))}return e[t]}(t,e)})),t}},964:(e,t,n)=>{"use strict"
n.d(t,{X3:()=>u,Yv:()=>l,bl:()=>a,cw:()=>c})
var r=n(554),i=n(385),o=n(800)
function s(e,t){return t.testContainer||(0,r.wK)(e,"testContainer")||(0,i.u)().testContainer}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),a=s(e,n),u=(0,r.$)(i,a).toArray()
return(0,r.fP)(u,i),0===u.length&&(0,o.VS)(e,n.pageObjectKey,o.u4,{selector:i}),u[0]}function u(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),o=s(e,n)
return(0,r.$)(i,o).toArray()}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),a=s(e,n)
let u=(0,r.$)(i,a)
return(0,r.fP)(u,i,n.multiple),0===u.length&&(0,o.VS)(e,n.pageObjectKey,o.u4,{selector:i}),u}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const i=(0,r.KM)(e,t,n),o=s(e,n)
let a=(0,r.$)(i,o)
return(0,r.fP)(a,i,n.multiple),a}n(348),n(823),n(550)},554:(e,t,n)=>{"use strict"
n.d(t,{$:()=>i,KM:()=>l,wK:()=>h,Rs:()=>f,yj:()=>c,fP:()=>u})
var r=n(348)
let i
if(window.jQuery)i=window.jQuery
else{const e=(o=n(339),o?.__esModule?o:{default:o})
i=e.default}var o
function s(e){return void 0!==e}class a{constructor(e,t,n,r){this.targetNode=e,this.targetScope=t||"",this.targetSelector=n||"",this.targetFilters=r}toString(){let e,t
if(e=this.targetFilters.resetScope?this.targetScope:this.calculateScope(this.targetNode,this.targetScope),`${e} ${this.targetSelector}`.indexOf(",")>-1)throw new Error("Usage of comma separated selectors is not supported. Please make sure your selector targets a single selector.")
t=this.calculateFilters(this.targetFilters)
let n=`${e} ${this.targetSelector}${t}`.trim()
return n.length||(n=":first"),n}calculateFilters(){let e=[]
return this.targetFilters.visible&&e.push(":visible"),this.targetFilters.contains&&e.push(`:contains("${this.targetFilters.contains}")`),"number"==typeof this.targetFilters.at?e.push(`:eq(${this.targetFilters.at})`):this.targetFilters.last&&e.push(":last"),e.join("")}calculateScope(e,t){let n=this.getScopes(e)
return n.reverse(),n.push(t),n.join(" ").trim()}getScopes(e){let t=[]
return e.scope&&t.push(e.scope),!e.resetScope&&r.Z.parent(e)&&(t=t.concat(this.calculateScope(r.Z.parent(e)))),t}}function u(e,t,n){if(e.length>1&&!n)throw new Error(`"${t}" matched more than one element. If you want to select many elements, use collections instead.`)}function l(e,t,n){return new a(e,n.scope,t,n).toString()}function c(e){let t=r.Z.parent(e),n=e
for(;t;)n=t,t=r.Z.parent(t)
return n}function f(e){let t=function(e,t){let n=e,i=[]
for(;s(n);)s(n[t])&&i.push(n[t]),n=r.Z.parent(n)
return i}(e,"scope")
return t.reverse().join(" ")}function h(e,t){if(s(e[t]))return e[t]
let n=r.Z.parent(e)
return s(n)?h(n,t):void 0}},385:(e,t,n)=>{"use strict"
n.d(t,{u:()=>o})
var r=n(823)
let i
function o(){return i||new r.Z}n(550)},823:(e,t,n)=>{"use strict"
n.d(t,{Z:()=>o})
var r=n(550)
class i{get testContainer(){throw new Error("`testContainer` is not implemented for the adapter")}visit(){throw new Error("`visit` is not implemented for the adapter")}click(){throw new Error("`click` is not implemented for the adapter")}fillIn(){throw new Error("`fillIn` is not implemented for the adapter")}triggerEvent(){throw new Error("`triggerEvent` is not implemented for the adapter")}focus(){throw new Error("`focus` is not implemented for the adapter")}blur(){throw new Error("`blur` is not implemented for the adapter")}}class o extends i{get testContainer(){return(0,r.getRootElement)()}visit(e){return(0,r.visit)(e)}click(e){return(0,r.click)(e)}fillIn(e,t){return(0,r.fillIn)(e,t)}triggerEvent(e,t,n){if(void 0!==n.key||void 0!==n.keyCode){const i=n.key||n.keyCode
return(0,r.triggerKeyEvent)(e,t,i,n)}return(0,r.triggerEvent)(e,t,n)}focus(e){return(0,r.focus)(e)}blur(e){return(0,r.blur)(e)}}},490:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{buildSelector:()=>i.KM,findElement:()=>r.cw,findElementWithAssert:()=>r.Yv,findMany:()=>r.X3,findOne:()=>r.bl,fullScope:()=>i.Rs})
var r=n(964),i=n(554)
n(385),n(823),n(550),n(800),n(348)},621:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{attribute:()=>Oe,blurrable:()=>ce,buildSelector:()=>a.KM,clickOnText:()=>he,clickable:()=>fe,collection:()=>Ce,contains:()=>pe,count:()=>Ae,create:()=>Te,default:()=>Me,fillable:()=>de,findElement:()=>ue.cw,findElementWithAssert:()=>ue.Yv,focusable:()=>ge,hasClass:()=>je,isHidden:()=>me,isPresent:()=>ve,isVisible:()=>ye,notHasClass:()=>Re,property:()=>Le,selectable:()=>De,text:()=>xe,triggerable:()=>Pe,value:()=>_e,visitable:()=>Ie})
var r=n(348)
function i(e){if(e&&"object"==typeof e){let t=r.Z.meta(e)
return Boolean(t&&t.__poDef__)}return!1}function o(e){if(i(e))return r.Z.meta(e).__poDef__
throw new Error("cannot get the page object definition from a node that is not a page object")}var s=n(800),a=n(554),u=n(358)
function l(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}var c={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var n=l(this),r=n[e]
r||(r=n[e]=[]),-1===r.indexOf(t)&&r.push(t)},off:function(e,t){var n=l(this)
if(t){var r=n[e],i=r.indexOf(t);-1!==i&&r.splice(i,1)}else n[e]=[]},trigger:function(e,t,n){var r=l(this)[e]
if(r)for(var i=0;i<r.length;i++)(0,r[i])(t,n)}},f={instrument:!1}
c.mixin(f)
var h=[]
function p(e,t,n){1===h.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:n&&n._id,label:t._label,timeStamp:Date.now(),error:f["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<h.length;e++){var t=h[e],n=t.payload
n.guid=n.key+n.id,n.childGuid=n.key+n.childId,n.error&&(n.stack=n.error.stack),f.trigger(t.name,t.payload)}h.length=0}),50)}function d(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var n=new this(g,t)
return S(n,e),n}function g(){}var m=void 0,v=1,y=2,b={error:null}
function x(e){try{return e.then}catch(e){return b.error=e,b}}var w=void 0
function _(){try{var e=w
return w=null,e.apply(this,arguments)}catch(e){return b.error=e,b}}function E(e){return w=e,_}function k(e,t,n){if(t.constructor===e.constructor&&n===R&&e.constructor.resolve===d)!function(e,t){t._state===v?O(e,t._result):t._state===y?(t._onError=null,A(e,t._result)):C(t,void 0,(function(n){t===n?O(e,n):S(e,n)}),(function(t){return A(e,t)}))}(e,t)
else if(n===b){var r=b.error
b.error=null,A(e,r)}else"function"==typeof n?function(e,t,n){f.async((function(e){var r=!1,i=E(n).call(t,(function(n){r||(r=!0,t===n?O(e,n):S(e,n))}),(function(t){r||(r=!0,A(e,t))}),"Settle: "+(e._label||" unknown promise"))
if(!r&&i===b){r=!0
var o=b.error
b.error=null,A(e,o)}}),e)}(e,t,n):O(e,t)}function S(e,t){var n,r
e===t?O(e,t):(r=typeof(n=t),null===n||"object"!==r&&"function"!==r?O(e,t):k(e,t,x(t)))}function T(e){e._onError&&e._onError(e._result),N(e)}function O(e,t){e._state===m&&(e._result=t,e._state=v,0===e._subscribers.length?f.instrument&&p("fulfilled",e):f.async(N,e))}function A(e,t){e._state===m&&(e._state=y,e._result=t,f.async(T,e))}function C(e,t,n,r){var i=e._subscribers,o=i.length
e._onError=null,i[o]=t,i[o+v]=n,i[o+y]=r,0===o&&e._state&&f.async(N,e)}function N(e){var t=e._subscribers,n=e._state
if(f.instrument&&p(n===v?"fulfilled":"rejected",e),0!==t.length){for(var r=void 0,i=void 0,o=e._result,s=0;s<t.length;s+=3)r=t[s],i=t[s+n],r?j(n,r,i,o):i(o)
e._subscribers.length=0}}function j(e,t,n,r){var i,o="function"==typeof n
if(i=o?E(n)(r):r,t._state!==m);else if(i===t)A(t,new TypeError("A promises callback cannot return that same promise."))
else if(i===b){var s=b.error
b.error=null,A(t,s)}else o?S(t,i):e===v?O(t,i):e===y&&A(t,i)}function R(e,t,n){var r=this,i=r._state
if(i===v&&!e||i===y&&!t)return f.instrument&&p("chained",r,r),r
r._onError=null
var o=new r.constructor(g,n),s=r._result
if(f.instrument&&p("chained",r,o),i===m)C(r,o,e,t)
else{var a=i===v?e:t
f.async((function(){return j(i,o,a,s)}))}return o}var L=function(){function e(e,t,n,r){this._instanceConstructor=e,this.promise=new e(g,r),this._abortOnReject=n,this._isUsingOwnPromise=e===M,this._isUsingOwnResolve=e.resolve===d,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var n=t.length||0
this.length=n,this._remaining=n,this._result=new Array(n),this._enumerate(t)},e.prototype._enumerate=function(e){for(var t=this.length,n=this.promise,r=0;n._state===m&&r<t;r++)this._eachEntry(e[r],r,!0)
this._checkFullfillment()},e.prototype._checkFullfillment=function(){if(0===this._remaining){var e=this._result
O(this.promise,e),this._result=null}},e.prototype._settleMaybeThenable=function(e,t,n){var r=this._instanceConstructor
if(this._isUsingOwnResolve){var i=x(e)
if(i===R&&e._state!==m)e._onError=null,this._settledAt(e._state,t,e._result,n)
else if("function"!=typeof i)this._settledAt(v,t,e,n)
else if(this._isUsingOwnPromise){var o=new r(g)
k(o,e,i),this._willSettleAt(o,t,n)}else this._willSettleAt(new r((function(t){return t(e)})),t,n)}else this._willSettleAt(r.resolve(e),t,n)},e.prototype._eachEntry=function(e,t,n){null!==e&&"object"==typeof e?this._settleMaybeThenable(e,t,n):this._setResultAt(v,t,e,n)},e.prototype._settledAt=function(e,t,n,r){var i=this.promise
i._state===m&&(this._abortOnReject&&e===y?A(i,n):(this._setResultAt(e,t,n,r),this._checkFullfillment()))},e.prototype._setResultAt=function(e,t,n,r){this._remaining--,this._result[t]=n},e.prototype._willSettleAt=function(e,t,n){var r=this
C(e,void 0,(function(e){return r._settledAt(v,t,e,n)}),(function(e){return r._settledAt(y,t,e,n)}))},e}()
function P(e,t,n){this._remaining--,this._result[t]=e===v?{state:"fulfilled",value:n}:{state:"rejected",reason:n}}var I="rsvp_"+Date.now()+"-",D=0,M=function(){function e(t,n){this._id=D++,this._label=n,this._state=void 0,this._result=void 0,this._subscribers=[],f.instrument&&p("created",this),g!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var n=!1
try{t((function(t){n||(n=!0,S(e,t))}),(function(t){n||(n=!0,A(e,t))}))}catch(t){A(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
f.after((function(){t._onError&&f.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var n=this,r=n.constructor
return"function"==typeof e?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}()
M.cast=d,M.all=function(e,t){return Array.isArray(e)?new L(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},M.race=function(e,t){var n=new this(g,t)
if(!Array.isArray(e))return A(n,new TypeError("Promise.race must be called with an array")),n
for(var r=0;n._state===m&&r<e.length;r++)C(this.resolve(e[r]),void 0,(function(e){return S(n,e)}),(function(e){return A(n,e)}))
return n},M.resolve=d,M.reject=function(e,t){var n=new this(g,t)
return A(n,e),n},M.prototype._guidKey=I,M.prototype.then=R,function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(L).prototype._setResultAt=P,function(e){function t(t,n,r){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!1,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(function(e){function t(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,r,i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t)},t.prototype._enumerate=function(e){var t=Object.keys(e),n=t.length,r=this.promise
this._remaining=n
for(var i=void 0,o=void 0,s=0;r._state===m&&s<n;s++)o=e[i=t[s]],this._eachEntry(o,i,!0)
this._checkFullfillment()},t}(L)).prototype._setResultAt=P
var $=function(e){function t(t,n,r,i){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,n,!0,i,r))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t,n,r,i){var o=t.length||0
this.length=o,this._remaining=o,this._result=new Array(o),this._mapFn=i,this._enumerate(t)},t.prototype._setResultAt=function(e,t,n,r){if(r){var i=E(this._mapFn)(n,t)
i===b?this._settledAt(y,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,this._result[t]=n},t}(L),B={}
!function(e){function t(){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)})(t,e),t.prototype._checkFullfillment=function(){if(0===this._remaining&&null!==this._result){var e=this._result.filter((function(e){return e!==B}))
O(this.promise,e),this._result=null}},t.prototype._setResultAt=function(e,t,n,r){if(r){this._result[t]=n
var i=E(this._mapFn)(n,t)
i===b?this._settledAt(y,t,i.error,!1):this._eachEntry(i,t,!1)}else this._remaining--,n||(this._result[t]=B)}}($)
var z=0,F=void 0,q="undefined"!=typeof window?window:void 0,H=q||{},Q=H.MutationObserver||H.WebKitMutationObserver,U="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),W="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function V(){return function(){return setTimeout(K,1)}}var Z=new Array(1e3)
function K(){for(var e=0;e<z;e+=2)(0,Z[e])(Z[e+1]),Z[e]=void 0,Z[e+1]=void 0
z=0}var X,G,Y,J,ee,te,ne=void 0
function re(){f.on.apply(f,arguments)}if(U?(ee=process.nextTick,te=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(te)&&"0"===te[1]&&"10"===te[2]&&(ee=setImmediate),ne=function(){return ee(K)}):Q?(G=0,Y=new Q(K),J=document.createTextNode(""),Y.observe(J,{characterData:!0}),ne=function(){return J.data=G=++G%2}):W?((X=new MessageChannel).port1.onmessage=K,ne=function(){return X.port2.postMessage(0)}):ne=void 0===q?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(F=e.runOnLoop||e.runOnContext)?function(){F(K)}:V()}catch(e){return V()}}():V(),f.async=function(e,t){Z[z]=e,Z[z+1]=t,2===(z+=2)&&ne()},f.after=function(e){return setTimeout(e,0)},"undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var ie=window.__PROMISE_INSTRUMENTATION__
for(var oe in function(e,t){if(2!==arguments.length)return f[e]
f[e]=t}("instrument",!0),ie)ie.hasOwnProperty(oe)&&re(oe,ie[oe])}var se=n(304)
function ae(e,t){return(0,u.Y)((function(n){return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
return({options:e,cb:t}=function(e,t,n,r){const i=`${e}(${r.length?`"${r.map((e=>String(e))).join('", "')}"`:""})`
return"function"==typeof t?(n=t,t={pageObjectKey:i}):t={...t,pageObjectKey:i},{options:t,cb:n}}(n,e,t,i)),function(e,t){const n=(0,a.yj)(e)
return(0,se.y)(e)?(n._promise=function(e,t){return M.resolve(e,void 0)}(n._promise).then((()=>t())),e):(n._chainedTree._promise=t(),(0,se.U)(e))}(this,(()=>{try{const n=t.bind(this)(...i)
return Promise.resolve(n).catch((t=>{(0,s.CP)(this,e,t)}))}catch(t){(0,s.CP)(this,e,t)}}))}}))}var ue=n(964),le=n(385)
function ce(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return ae({...t,selector:e},(function(){const n=(0,ue.bl)(this,e,t)
return(0,le.u)().blur(n)}))}function fe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return ae({...t,selector:e},(function(){const n=(0,ue.bl)(this,e,t)
return(0,le.u)().click(n)}))}function he(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return ae({...t,selector:e},(function(n){const r={...t,contains:n,last:!0},i=`${e||""} *`,o=(0,ue.X3)(this,i,r).length?i:e,s=(0,ue.bl)(this,o,r)
return(0,le.u)().click(s)}))}function pe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(n){return function(r){let i={pageObjectKey:`${n}("${r}")`,...t}
return(0,a.$)((0,ue.bl)(this,e,i)).text().indexOf(r)>-1}}))}function de(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return ae({...t,selector:e},(function(n,r){let i
void 0===r?r=n:i=n
let o=e
if(i&&(o=function(e,t,n,r){return["input","textarea","select","[contenteditable]"].map((e=>[`${e}[data-test="${r}"]`,`${e}[aria-label="${r}"]`,`${e}[placeholder="${r}"]`,`${e}[name="${r}"]`,`${e}#${r}`])).reduce(((e,t)=>e.concat(t)),[]).find((r=>(0,ue.X3)(e,`${t} ${r}`,n)[0]))}(this,e,t,i),!o))throw new Error(`Can not find element by clue: "${i}".`)
const s=(0,ue.bl)(this,o,t)
return(0,le.u)().fillIn(s,r)}))}function ge(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},selector:e}
return ae(t,(function(){const n=(0,ue.bl)(this,e,t)
return(0,le.u)().focus(n)}))}function me(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(n){let r={pageObjectKey:n,...t},i=(0,ue.X3)(this,e,r)
return(0,a.fP)(i,e),0===i.length||(0,a.$)(i[0]).is(":hidden")}))}function ve(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(n){let r={pageObjectKey:n,...t},i=(0,ue.X3)(this,e,r)
return(0,a.fP)(i,e),1===i.length}))}function ye(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(n){let r={pageObjectKey:n,...t},i=(0,ue.X3)(this,e,r)
return(0,a.fP)(i,e,r.multiple),1===i.length&&(0,a.$)(i[0]).is(":visible")}))}function be(e){return e}function xe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(n){let r={pageObjectKey:n,...t}
return(!1===r.normalize?be:we)((0,a.$)((0,ue.bl)(this,e,r)).text())}))}function we(e){return e.trim().replace(/\n/g," ").replace(/\s\s*/g," ")}function _e(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(n){let r={pageObjectKey:n,...t}
const i=(0,ue.bl)(this,e,r)
return i.hasAttribute("contenteditable")?(0,a.$)(i).html():(0,a.$)(i).val()}))}const Ee={isDescriptor:!0,value(){const e=(0,a.yj)(this)
return(e._chainedTree||e)._promise.then(...arguments)}},ke={as:function(e){return e(this),this},blur:ce(),click:fe(),clickOn:he(),contains:pe(),fillIn:de(),focus:ge(),isHidden:me(),isPresent:ve(),isVisible:ye(),select:de(),text:xe(),then:Ee,value:_e()}
function Se(e,t,n,s){let a
i(n)?a=o(n):(Object.getOwnPropertyNames(n).forEach((e=>{const{get:t,value:r}=Object.getOwnPropertyDescriptor(n,e)
if("function"==typeof t)Object.defineProperty(n,e,{value:(0,u.Y)(t)})
else if("string"==typeof r&&!["scope","testContainer"].includes(e))throw new Error(`string values are not supported in page object definitions\n\nKey: "${e}"`)})),a=n)
let l={...a}
l._chainedTree&&delete l._chainedTree,n={...ke,...a}
const[c,f]=s(e,t,n,s)
return function(e,t){r.Z.meta(e).__poDef__=t}(c,l),[c,f]}function Te(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if("string"==typeof e)throw new Error("Definition can not be a string")
var n,s
if(e=i(e)?{...o(e)}:(n={},s=e,Object.getOwnPropertyNames(s).forEach((e=>{const t=Object.getOwnPropertyDescriptor(s,e)
Object.defineProperty(n,e,t)})),n),e.context)throw new Error('"context" key is not allowed to be passed at definition root.')
let a={object:Se},l=r.Z.create(e,{builder:a,...t})
e._chainedTree=(0,u.Y)((function(){return l}))
let c={object:Se}
return r.Z.create(e,{builder:c,...t})}function Oe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(r){let i={pageObjectKey:r,...n}
return(0,a.$)((0,ue.bl)(this,t,i)).attr(e)}))}function Ae(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,u.Y)((function(n){let r={pageObjectKey:n,...t}
return(0,ue.X3)(this,e,r).length}))}function Ce(e,t){if("string"!=typeof e)throw new Error("collection requires `scope` as the first argument")
i(t)&&(t=o(t))
let n={isDescriptor:!0,setup(r,i){var o
n.value=(o=new Ne(e,t,r,i),window.Proxy?new window.Proxy(o,{get:function(e,t){if("number"==typeof t||"string"==typeof t){let n=parseInt(t,10)
if(!isNaN(n))return e.objectAt(n)}return e[t]}}):o)}}
return n}n(823),n(550)
class Ne{constructor(e,t,n,r){this.scope=e,this.definition=t||{},this.parent=n,this.key=r,this._itemCounter=Te({count:Ae(e,{resetScope:this.definition.resetScope,testContainer:this.definition.testContainer})},{parent:n}),this._items=[]}get length(){return this._itemCounter.count}objectAt(e){let{key:t}=this
if(void 0===this._items[e]){let{scope:n,definition:i,parent:o}=this,s=(0,a.KM)({},n,{at:e}),u={...i}
u.scope=s
let l=Te(u,{parent:o})
r.Z.meta(l).key=`${t}[${e}]`,this._items[e]=l}return this._items[e]}filter(){return this.toArray().filter(...arguments)}filterBy(e,t){return this.toArray().filter((n=>void 0!==t?n[e]===t:Boolean(n[e])))}forEach(){return this.toArray().forEach(...arguments)}map(){return this.toArray().map(...arguments)}mapBy(e){return this.toArray().map((t=>t[e]))}findOneBy(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=this.filterBy(...t)
return this._assertFoundElements(r,...t),r[0]}findOne(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
const r=this.filter(...t)
return this._assertFoundElements(r,...t),r[0]}_assertFoundElements(e){const t=1==(arguments.length<=1?0:arguments.length-1)?"condition":`${arguments.length<=1?void 0:arguments[1]}: "${arguments.length<=2?void 0:arguments[2]}"`
e.length>1&&(0,s.VS)(this.parent,this.key,`${e.length} elements found by ${t}, but expected 1`),0===e.length&&(0,s.VS)(this.parent,this.key,`cannot find element by ${t}`)}toArray(){let{length:e}=this,t=[]
for(let n=0;n<e;n++)t.push(this.objectAt(n))
return t}}function je(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(r){let i={pageObjectKey:r,...n}
return(0,ue.bl)(this,t,i).classList.contains(e)}))}function Re(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(r){let i={pageObjectKey:r,...n}
return!(0,ue.bl)(this,t,i).classList.contains(e)}))}function Le(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
return(0,u.Y)((function(r){let i={pageObjectKey:r,...n}
return(0,a.$)((0,ue.bl)(this,t,i)).prop(e)}))}function Pe(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
const{eventProperties:r}=n
return ae({...n,selector:t},(function(){const i={...r,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},o=(0,ue.bl)(this,t,n)
return(0,le.u)().triggerEvent(o,e,i)}))}function Ie(e){return ae((function(){let t={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}},n=function(e,t){return e.split("/").map((function(e){let n=e.match(/^:(.+)$/)
if(n){let[,e]=n,r=t[e]
if(void 0===r)throw new Error(`Missing parameter for '${e}'`)
return delete t[e],encodeURIComponent(r)}return e})).join("/")}(e,t)
return n=function(e,t){return Object.keys(t).length&&(e+=`?${a.$.param(t)}`),e}(n,t),(0,le.u)().visit(n).catch((()=>{throw new Error(`Failed to visit URL '${n}'`)}))}))}"undefined"!=typeof Symbol&&Symbol.iterator&&(Ne.prototype[Symbol.iterator]=function(){let e=0,t=this.toArray()
return{next:()=>({done:e>=t.length,value:t[e++]})}})
const De=de
var Me={attribute:Oe,blurrable:ce,clickOnText:he,clickable:fe,collection:Ce,contains:pe,count:Ae,create:Te,fillable:de,focusable:ge,hasClass:je,isHidden:me,isPresent:ve,isVisible:ye,notHasClass:Re,property:Le,selectable:de,text:xe,value:_e,visitable:Ie,triggerable:Pe}},358:(e,t,n)=>{"use strict"
n.d(t,{Y:()=>o})
var r=n(800)
n(348),n(554)
const i="Argument passed to `getter` must be a function."
function o(e){return{isDescriptor:!0,get(t){return"function"!=typeof e&&(0,r.VS)(this,t,i),e.call(this,t)}}}},75:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{alias:()=>a,getter:()=>r.Y})
var r=n(358),i=n(800),o=n(304)
n(348),n(554)
const s="PageObject does not contain aliased property"
function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return(0,r.Y)((function(n){try{const n=function(e,t){const n=t.split(".")
let r,i=e
for(;n.length>0;){const e=n.shift()
if(null===i||"object"!=typeof i||!Object.prototype.hasOwnProperty.call(i,e))throw new Error(`${s} \`${t}\`.`)
n.length?i=i[e]:r=i[e]}return"function"==typeof r?r.bind(i):r}(this,e)
return"function"==typeof n&&t.chainable?function(){return n(...arguments),(0,o.U)(this)}:n}catch(e){(0,i.VS)(this,n,e)}}))}},34:e=>{function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n]
"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var n=t,r=t
n.default=r
class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function o(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e){const t=Object.create(null)
for(const o in e)t[o]=e[o]
for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
return r.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const a=e=>!!e.kind
class u{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=o(e)}openNode(e){if(!a(e))return
let t=e.kind
e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){a(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class l{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{l._collapse(e)})))}}class c extends l{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new u(this,this.options).value()}finalize(){return!0}}function f(e){return e?"string"==typeof e?e:e.source:null}const h=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,p="[a-zA-Z]\\w*",d="[a-zA-Z_]\\w*",g="\\b\\d+(\\.\\d+)?",m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",v="\\b(0b[01]+)",y={begin:"\\\\[\\s\\S]",relevance:0},b={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y]},x={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y]},w={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},_=function(e,t){const n=s({className:"comment",begin:e,end:t,contains:[]},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})
return n.contains.push(w),n.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),n},E=_("//","$"),k=_("/\\*","\\*/"),S=_("#","$"),T={className:"number",begin:g,relevance:0},O={className:"number",begin:m,relevance:0},A={className:"number",begin:v,relevance:0},C={className:"number",begin:g+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},N={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,contains:[y]}]}]},j={className:"title",begin:p,relevance:0},R={className:"title",begin:d,relevance:0},L={begin:"\\.\\s*"+d,relevance:0}
var P=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:p,UNDERSCORE_IDENT_RE:d,NUMBER_RE:g,C_NUMBER_RE:m,BINARY_NUMBER_RE:v,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t=/^#![ ]*\//
return e.binary&&(e.begin=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.map((e=>f(e))).join("")}(t,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:y,APOS_STRING_MODE:b,QUOTE_STRING_MODE:x,PHRASAL_WORDS_MODE:w,COMMENT:_,C_LINE_COMMENT_MODE:E,C_BLOCK_COMMENT_MODE:k,HASH_COMMENT_MODE:S,NUMBER_MODE:T,C_NUMBER_MODE:O,BINARY_NUMBER_MODE:A,CSS_NUMBER_MODE:C,REGEXP_MODE:N,TITLE_MODE:j,UNDERSCORE_TITLE_MODE:R,METHOD_GUARD:L,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}})
function I(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function D(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=I,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function M(e,t){Array.isArray(e.illegal)&&(e.illegal=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return"("+t.map((e=>f(e))).join("|")+")"}(...e.illegal))}function $(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match")
e.begin=e.match,delete e.match}}function B(e,t){void 0===e.relevance&&(e.relevance=1)}const z=["of","and","for","in","not","or","if","then","parent","list","value"],F="keyword"
function q(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F
const r={}
return"string"==typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((function(n){Object.assign(r,q(e[n],t,n))})),r
function i(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|")
r[n[0]]=[e,H(n[0],n[1])]}))}}function H(e,t){return t?Number(t):function(e){return z.includes(e.toLowerCase())}(e)?0:1}function Q(e,t){let{plugins:n}=t
function r(t,n){return new RegExp(f(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class i{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null)
const e=this.regexes.map((e=>e[1]))
this.matcherRe=r(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"|",n=0
return e.map((e=>{n+=1
const t=n
let r=f(e),i=""
for(;r.length>0;){const e=h.exec(r)
if(!e){i+=r
break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex
const t=this.matcherRe.exec(e)
if(!t)return null
const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),r=this.matchIndexes[n]
return t.splice(0,n),Object.assign(t,r)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e]
const t=new i
return this.rules.slice(e).forEach((e=>{let[n,r]=e
return t.addRule(n,r)})),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex)
t.lastIndex=this.lastIndex
let n=t.exec(e)
if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0)
t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
return e.classNameAliases=s(e.classNameAliases||{}),function t(n,i){const a=n
if(n.isCompiled)return a;[$].forEach((e=>e(n,i))),e.compilerExtensions.forEach((e=>e(n,i))),n.__beforeBegin=null,[D,M,B].forEach((e=>e(n,i))),n.isCompiled=!0
let u=null
if("object"==typeof n.keywords&&(u=n.keywords.$pattern,delete n.keywords.$pattern),n.keywords&&(n.keywords=q(n.keywords,e.case_insensitive)),n.lexemes&&u)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
return u=u||n.lexemes||/\w+/,a.keywordPatternRe=r(u,!0),i&&(n.begin||(n.begin=/\B|\b/),a.beginRe=r(n.begin),n.endSameAsBegin&&(n.end=n.begin),n.end||n.endsWithParent||(n.end=/\B|\b/),n.end&&(a.endRe=r(n.end)),a.terminatorEnd=f(n.end)||"",n.endsWithParent&&i.terminatorEnd&&(a.terminatorEnd+=(n.end?"|":"")+i.terminatorEnd)),n.illegal&&(a.illegalRe=r(n.illegal)),n.contains||(n.contains=[]),n.contains=[].concat(...n.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return s(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:U(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?n:e)}))),n.contains.forEach((function(e){t(e,a)})),n.starts&&t(n.starts,i),a.matcher=function(e){const t=new o
return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(a),a}(e)}function U(e){return!!e&&(e.endsWithParent||U(e.starts))}function W(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,o(this.code)
let t={}
return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e))
var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}}
return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const V={"after:highlightElement":e=>{let{el:t,result:n,text:r}=e
const i=K(t)
if(!i.length)return
const s=document.createElement("div")
s.innerHTML=n.value,n.value=function(e,t,n){let r=0,i=""
const s=[]
function a(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function u(e){i+="<"+Z(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+o(e.value)+'"'})).join("")+">"}function l(e){i+="</"+Z(e)+">"}function c(e){("start"===e.event?u:l)(e.node)}for(;e.length||t.length;){let t=a()
if(i+=o(n.substring(r,t[0].offset)),r=t[0].offset,t===e){s.reverse().forEach(l)
do{c(t.splice(0,1)[0]),t=a()}while(t===e&&t.length&&t[0].offset===r)
s.reverse().forEach(u)}else"start"===t[0].event?s.push(t[0].node):s.pop(),c(t.splice(0,1)[0])}return i+o(n.substr(r))}(i,K(s),r)}}
function Z(e){return e.nodeName.toLowerCase()}function K(e){const t=[]
return function e(n,r){for(let i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:r,node:i}),r=e(i,r),Z(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:i}))
return r}(e,0),t}const X={},G=e=>{console.error(e)},Y=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
console.log(`WARN: ${e}`,...n)},J=(e,t)=>{X[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),X[`${e}/${t}`]=!0)},ee=o,te=s,ne=Symbol("nomatch")
var re=function(e){const t=Object.create(null),r=Object.create(null),o=[]
let s=!0
const a=/(^(<[^>]+>|\t|)+|\n)/gm,u="Could not find the language '{}', did you forget to load/include a language module?",l={disableAutodetect:!0,name:"Plain text",contains:[]}
let f={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:c}
function h(e){return f.noHighlightRe.test(e)}function p(e,t,n,r){let i="",o=""
"object"==typeof t?(i=e,n=t.ignoreIllegals,o=t.language,r=void 0):(J("10.7.0","highlight(lang, code, ...args) has been deprecated."),J("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,i=t)
const s={code:i,language:o}
T("before:highlight",s)
const a=s.result?s.result:d(s.language,s.code,n,r)
return a.code=s.code,T("after:highlight",a),a}function d(e,n,r,a){function l(e,t){const n=b.case_insensitive?t[0].toLowerCase():t[0]
return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function c(){null!=_.subLanguage?function(){if(""===T)return
let e=null
if("string"==typeof _.subLanguage){if(!t[_.subLanguage])return void S.addText(T)
e=d(_.subLanguage,T,!0,k[_.subLanguage]),k[_.subLanguage]=e.top}else e=g(T,_.subLanguage.length?_.subLanguage:null)
_.relevance>0&&(O+=e.relevance),S.addSublanguage(e.emitter,e.language)}():function(){if(!_.keywords)return void S.addText(T)
let e=0
_.keywordPatternRe.lastIndex=0
let t=_.keywordPatternRe.exec(T),n=""
for(;t;){n+=T.substring(e,t.index)
const r=l(_,t)
if(r){const[e,i]=r
if(S.addText(n),n="",O+=i,e.startsWith("_"))n+=t[0]
else{const n=b.classNameAliases[e]||e
S.addKeyword(t[0],n)}}else n+=t[0]
e=_.keywordPatternRe.lastIndex,t=_.keywordPatternRe.exec(T)}n+=T.substr(e),S.addText(n)}(),T=""}function h(e){return e.className&&S.openNode(b.classNameAliases[e.className]||e.className),_=Object.create(e,{parent:{value:_}}),_}function p(e,t,n){let r=function(e,t){const n=e&&e.exec(t)
return n&&0===n.index}(e.endRe,n)
if(r){if(e["on:end"]){const n=new i(e)
e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent
return e}}if(e.endsWithParent)return p(e.parent,t,n)}function m(e){return 0===_.matcher.regexIndex?(T+=e[0],1):(N=!0,0)}let v={}
function y(t,o){const a=o&&o[0]
if(T+=t,null==a)return c(),0
if("begin"===v.type&&"end"===o.type&&v.index===o.index&&""===a){if(T+=n.slice(o.index,o.index+1),!s){const t=new Error("0 width match regex")
throw t.languageName=e,t.badRule=v.rule,t}return 1}if(v=o,"begin"===o.type)return function(e){const t=e[0],n=e.rule,r=new i(n),o=[n.__beforeBegin,n["on:begin"]]
for(const i of o)if(i&&(i(e,r),r.isMatchIgnored))return m(t)
return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?T+=t:(n.excludeBegin&&(T+=t),c(),n.returnBegin||n.excludeBegin||(T=t)),h(n),n.returnBegin?0:t.length}(o)
if("illegal"===o.type&&!r){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(_.className||"<unnamed>")+'"')
throw e.mode=_,e}if("end"===o.type){const e=function(e){const t=e[0],r=n.substr(e.index),i=p(_,e,r)
if(!i)return ne
const o=_
o.skip?T+=t:(o.returnEnd||o.excludeEnd||(T+=t),c(),o.excludeEnd&&(T=t))
do{_.className&&S.closeNode(),_.skip||_.subLanguage||(O+=_.relevance),_=_.parent}while(_!==i.parent)
return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),h(i.starts)),o.returnEnd?0:t.length}(o)
if(e!==ne)return e}if("illegal"===o.type&&""===a)return 1
if(C>1e5&&C>3*o.index)throw new Error("potential infinite loop, way more iterations than matches")
return T+=a,a.length}const b=E(e)
if(!b)throw G(u.replace("{}",e)),new Error('Unknown language: "'+e+'"')
const x=Q(b,{plugins:o})
let w="",_=a||x
const k={},S=new f.__emitter(f)
!function(){const e=[]
for(let t=_;t!==b;t=t.parent)t.className&&e.unshift(t.className)
e.forEach((e=>S.openNode(e)))}()
let T="",O=0,A=0,C=0,N=!1
try{for(_.matcher.considerAll();;){C++,N?N=!1:_.matcher.considerAll(),_.matcher.lastIndex=A
const e=_.matcher.exec(n)
if(!e)break
const t=y(n.substring(A,e.index),e)
A=e.index+t}return y(n.substr(A)),S.closeAllNodes(),S.finalize(),w=S.toHTML(),{relevance:Math.floor(O),value:w,language:e,illegal:!1,emitter:S,top:_}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:n.slice(A-100,A+100),mode:t.mode},sofar:w,relevance:0,value:ee(n),emitter:S}
if(s)return{illegal:!1,relevance:0,value:ee(n),emitter:S,language:e,top:_,errorRaised:t}
throw t}}function g(e,n){n=n||f.languages||Object.keys(t)
const r=function(e){const t={relevance:0,emitter:new f.__emitter(f),value:ee(e),illegal:!1,top:l}
return t.emitter.addText(e),t}(e),i=n.filter(E).filter(S).map((t=>d(t,e,!1)))
i.unshift(r)
const o=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance
if(e.language&&t.language){if(E(e.language).supersetOf===t.language)return 1
if(E(t.language).supersetOf===e.language)return-1}return 0})),[s,a]=o,u=s
return u.second_best=a,u}const m={"before:highlightElement":e=>{let{el:t}=e
f.useBR&&(t.innerHTML=t.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":e=>{let{result:t}=e
f.useBR&&(t.value=t.value.replace(/\n/g,"<br>"))}},v=/^(<[^>]+>|\t)+/gm,y={"after:highlightElement":e=>{let{result:t}=e
f.tabReplace&&(t.value=t.value.replace(v,(e=>e.replace(/\t/g,f.tabReplace))))}}
function b(e){let t=null
const n=function(e){let t=e.className+" "
t+=e.parentNode?e.parentNode.className:""
const n=f.languageDetectRe.exec(t)
if(n){const t=E(n[1])
return t||(Y(u.replace("{}",n[1])),Y("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>h(e)||E(e)))}(e)
if(h(n))return
T("before:highlightElement",{el:e,language:n}),t=e
const i=t.textContent,o=n?p(i,{language:n,ignoreIllegals:!0}):g(i)
T("after:highlightElement",{el:e,result:o,text:i}),e.innerHTML=o.value,function(e,t,n){const i=t?r[t]:n
e.classList.add("hljs"),i&&e.classList.add(i)}(e,n,o.language),e.result={language:o.language,re:o.relevance,relavance:o.relevance},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.relevance,relavance:o.second_best.relevance})}const x=()=>{x.called||(x.called=!0,J("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(b))}
let w=!1
function _(){"loading"!==document.readyState?document.querySelectorAll("pre code").forEach(b):w=!0}function E(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function k(e,t){let{languageName:n}=t
"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=n}))}function S(e){const t=E(e)
return t&&!t.disableAutodetect}function T(e,t){const n=e
o.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){w&&_()}),!1),Object.assign(e,{highlight:p,highlightAuto:g,highlightAll:_,fixMarkup:function(e){return J("10.2.0","fixMarkup will be removed entirely in v11.0"),J("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,f.tabReplace||f.useBR?t.replace(a,(e=>"\n"===e?f.useBR?"<br>":e:f.tabReplace?e.replace(/\t/g,f.tabReplace):e)):t
var t},highlightElement:b,highlightBlock:function(e){return J("10.7.0","highlightBlock will be removed entirely in v12.0"),J("10.7.0","Please use highlightElement now."),b(e)},configure:function(e){e.useBR&&(J("10.3.0","'useBR' will be removed entirely in v11.0"),J("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),f=te(f,e)},initHighlighting:x,initHighlightingOnLoad:function(){J("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),w=!0},registerLanguage:function(n,r){let i=null
try{i=r(e)}catch(e){if(G("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw e
G(e),i=l}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&k(i.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e]
for(const t of Object.keys(r))r[t]===e&&delete r[t]},listLanguages:function(){return Object.keys(t)},getLanguage:E,registerAliases:k,requireLanguage:function(e){J("10.4.0","requireLanguage will be removed entirely in v11."),J("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844")
const t=E(e)
if(t)return t
throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:S,inherit:te,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),o.push(e)},vuePlugin:W(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.7.3"
for(const i in P)"object"==typeof P[i]&&n(P[i])
return Object.assign(e,P),e.addPlugin(m),e.addPlugin(V),e.addPlugin(y),e}({})
e.exports=re},568:e=>{const t=["a","abbr","address","article","aside","audio","b","blockquote","body","button","canvas","caption","cite","code","dd","del","details","dfn","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","html","i","iframe","img","input","ins","kbd","label","legend","li","main","mark","menu","nav","object","ol","p","q","quote","samp","section","span","strong","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","ul","var","video"],n=["any-hover","any-pointer","aspect-ratio","color","color-gamut","color-index","device-aspect-ratio","device-height","device-width","display-mode","forced-colors","grid","height","hover","inverted-colors","monochrome","orientation","overflow-block","overflow-inline","pointer","prefers-color-scheme","prefers-contrast","prefers-reduced-motion","prefers-reduced-transparency","resolution","scan","scripting","update","width","min-width","max-width","min-height","max-height"],r=["active","any-link","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder-shown","read-only","read-write","required","right","root","scope","target","target-within","user-invalid","valid","visited","where"],i=["after","backdrop","before","cue","cue-region","first-letter","first-line","grammar-error","marker","part","placeholder","selection","slotted","spelling-error"],o=["align-content","align-items","align-self","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","auto","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","clip-path","color","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","cursor","direction","display","empty-cells","filter","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","font","font-display","font-family","font-feature-settings","font-kerning","font-language-override","font-size","font-size-adjust","font-smoothing","font-stretch","font-style","font-variant","font-variant-ligatures","font-variation-settings","font-weight","height","hyphens","icon","image-orientation","image-rendering","image-resolution","ime-mode","inherit","initial","justify-content","left","letter-spacing","line-height","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","mask","max-height","max-width","min-height","min-width","nav-down","nav-index","nav-left","nav-right","nav-up","none","normal","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page-break-after","page-break-before","page-break-inside","perspective","perspective-origin","pointer-events","position","quotes","resize","right","src","tab-size","table-layout","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-indent","text-overflow","text-rendering","text-shadow","text-transform","text-underline-position","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"].reverse()
e.exports=function(e){const s=(e=>({IMPORTANT:{className:"meta",begin:"!important"},HEXCOLOR:{className:"number",begin:"#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})"},ATTRIBUTE_SELECTOR_MODE:{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}}))(e),a=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]
return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,keywords:{keyframePosition:"from to"},classNameAliases:{keyframePosition:"selector-tag"},contains:[e.C_BLOCK_COMMENT_MODE,{begin:/-(webkit|moz|ms|o)-(?=[a-z])/},e.CSS_NUMBER_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/,relevance:0},{className:"selector-class",begin:"\\.[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},s.ATTRIBUTE_SELECTOR_MODE,{className:"selector-pseudo",variants:[{begin:":("+r.join("|")+")"},{begin:"::("+i.join("|")+")"}]},{className:"attribute",begin:"\\b("+o.join("|")+")\\b"},{begin:":",end:"[;}]",contains:[s.HEXCOLOR,s.IMPORTANT,e.CSS_NUMBER_MODE,...a,{begin:/(url|data-uri)\(/,end:/\)/,relevance:0,keywords:{built_in:"url data-uri"},contains:[{className:"string",begin:/[^)]/,endsWithParent:!0,excludeEnd:!0}]},{className:"built_in",begin:/[\w-]+(?=\()/}]},{begin:(u=/@/,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.map((e=>function(e){return e?"string"==typeof e?e:e.source:null}(e))).join("")}("(?=",u,")")),end:"[{;]",relevance:0,illegal:/:/,contains:[{className:"keyword",begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:{$pattern:/[a-z-]+/,keyword:"and or not only",attribute:n.join(" ")},contains:[{begin:/[a-z-]+(?=:)/,className:"attribute"},...a,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"\\b("+t.join("|")+")\\b"}]}
var u}},926:e=>{e.exports=function(e){return{name:"Diff",aliases:["patch"],contains:[{className:"meta",relevance:10,variants:[{begin:/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/},{begin:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{begin:/^--- +\d+,\d+ +----$/}]},{className:"comment",variants:[{begin:/Index: /,end:/$/},{begin:/^index/,end:/$/},{begin:/={3,}/,end:/$/},{begin:/^-{3}/,end:/$/},{begin:/^\*{3} /,end:/$/},{begin:/^\+{3}/,end:/$/},{begin:/^\*{15}$/},{begin:/^diff --git/,end:/$/}]},{className:"addition",begin:/^\+/,end:/$/},{className:"deletion",begin:/^-/,end:/$/},{className:"addition",begin:/^!/,end:/$/}]}}},106:e=>{function t(e){return e?"string"==typeof e?e:e.source:null}function n(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
return n.map((e=>t(e))).join("")}e.exports=function(e){const r={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},i=/\[\]|\[[^\]]+\]/,o=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,s=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
return"("+n.map((e=>t(e))).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,i,o),a=n(n("(",/\.|\.\/|\//,")?"),s,(g=n(/(\.|\/)/,s),n("(",g,")*"))),u=n("(",i,"|",o,")(?==)"),l={begin:a,lexemes:/[\w.\/]+/},c=e.inherit(l,{keywords:{literal:["true","false","undefined","null"]}}),f={begin:/\(/,end:/\)/},h={className:"attr",begin:u,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,c,f]}}},p={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},h,c,f],returnEnd:!0},d=e.inherit(l,{className:"name",keywords:r,starts:e.inherit(p,{end:/\)/})})
var g
f.contains=[d]
const m=e.inherit(l,{keywords:r,className:"name",starts:e.inherit(p,{end:/\}\}/})}),v=e.inherit(l,{keywords:r,className:"name"}),y=e.inherit(l,{className:"name",keywords:r,starts:e.inherit(p,{end:/\}\}/})})
return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[m],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[v]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[m]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[v]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[y]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[y]}]}}},882:e=>{function t(e){return e?"string"==typeof e?e:e.source:null}function n(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
return n.map((e=>t(e))).join("")}e.exports=function(e){const r=function(e){const r={"builtin-name":["action","bindattr","collection","component","concat","debugger","each","each-in","get","hash","if","in","input","link-to","loc","log","lookup","mut","outlet","partial","query-params","render","template","textarea","unbound","unless","view","with","yield"]},i=/\[\]|\[[^\]]+\]/,o=/[^\s!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]+/,s=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
return"("+n.map((e=>t(e))).join("|")+")"}(/""|"[^"]+"/,/''|'[^']+'/,i,o),a=n(n("(",/\.|\.\/|\//,")?"),s,(u=n(/(\.|\/)/,s),n("(",u,")*")))
var u
const l=n("(",i,"|",o,")(?==)"),c={begin:a,lexemes:/[\w.\/]+/},f=e.inherit(c,{keywords:{literal:["true","false","undefined","null"]}}),h={begin:/\(/,end:/\)/},p={className:"attr",begin:l,relevance:0,starts:{begin:/=/,end:/=/,starts:{contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,f,h]}}},d={contains:[e.NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:/as\s+\|/,keywords:{keyword:"as"},end:/\|/,contains:[{begin:/\w+/}]},p,f,h],returnEnd:!0},g=e.inherit(c,{className:"name",keywords:r,starts:e.inherit(d,{end:/\)/})})
h.contains=[g]
const m=e.inherit(c,{keywords:r,className:"name",starts:e.inherit(d,{end:/\}\}/})}),v=e.inherit(c,{keywords:r,className:"name"}),y=e.inherit(c,{className:"name",keywords:r,starts:e.inherit(d,{end:/\}\}/})})
return{name:"Handlebars",aliases:["hbs","html.hbs","html.handlebars","htmlbars"],case_insensitive:!0,subLanguage:"xml",contains:[{begin:/\\\{\{/,skip:!0},{begin:/\\\\(?=\{\{)/,skip:!0},e.COMMENT(/\{\{!--/,/--\}\}/),e.COMMENT(/\{\{!/,/\}\}/),{className:"template-tag",begin:/\{\{\{\{(?!\/)/,end:/\}\}\}\}/,contains:[m],starts:{end:/\{\{\{\{\//,returnEnd:!0,subLanguage:"xml"}},{className:"template-tag",begin:/\{\{\{\{\//,end:/\}\}\}\}/,contains:[v]},{className:"template-tag",begin:/\{\{#/,end:/\}\}/,contains:[m]},{className:"template-tag",begin:/\{\{(?=else\}\})/,end:/\}\}/,keywords:"else"},{className:"template-tag",begin:/\{\{(?=else if)/,end:/\}\}/,keywords:"else if"},{className:"template-tag",begin:/\{\{\//,end:/\}\}/,contains:[v]},{className:"template-variable",begin:/\{\{\{/,end:/\}\}\}/,contains:[y]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,contains:[y]}]}}(e)
return r.name="HTMLbars",e.getLanguage("handlebars")&&(r.disableAutodetect=!0),r}},920:e=>{const t="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],i=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function o(e){return s("(?=",e,")")}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.map((e=>{return(t=e)?"string"==typeof t?t:t.source:null
var t})).join("")}e.exports=function(e){const a=t,u={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const n=e[0].length+e.index,r=e.input[n]
"<"!==r?">"===r&&(((e,t)=>{let{after:n}=t
const r="</"+e[0].slice(1)
return-1!==e.input.indexOf(r,n)})(e,{after:n})||t.ignoreMatch()):t.ignoreMatch()}},l={$pattern:t,keyword:n,literal:r,built_in:i},c="[0-9](_?[0-9])*",f=`\\.(${c})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${h})((${f})|\\.)?|(${f}))[eE][+-]?(${c})\\b`},{begin:`\\b(${h})\\b((${f})\\b|\\.)?|(${f})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,d],subLanguage:"css"}},v={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,d]},y={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},b=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,m,v,p,e.REGEXP_MODE]
d.contains=b.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(b)})
const x=[].concat(y,d.contains),w=x.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(x)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w}
return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,m,v,y,p,{begin:s(/[{,\n]\s*/,o(s(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,a+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:a+o("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[y,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:u.begin,"on:begin":u.isTrulyOpeningTag,end:u.end}],subLanguage:"xml",contains:[{begin:u.begin,end:u.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,contains:["self",e.inherit(e.TITLE_MODE,{begin:a}),_],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[_,e.inherit(e.TITLE_MODE,{begin:a})]},{variants:[{begin:"\\."+a},{begin:"\\$"+a}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:a}),"self",_]},{begin:"(get|set)\\s+(?="+a+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:a}),{begin:/\(\)/},_]},{begin:/\$[(.]/}]}}},681:e=>{e.exports=function(e){const t={literal:"true false null"},n=[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],r=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],i={end:",",endsWithParent:!0,excludeEnd:!0,contains:r,keywords:t},o={begin:/\{/,end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(i,{begin:/:/})].concat(n),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[e.inherit(i)],illegal:"\\S"}
return r.push(o,s),n.forEach((function(e){r.push(e)})),{name:"JSON",contains:r,keywords:t,illegal:"\\S"}}},2:e=>{e.exports=function(e){return{name:"Shell Session",aliases:["console"],contains:[{className:"meta",begin:/^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,starts:{end:/[^\\](?=\s*$)/,subLanguage:"bash"}}]}}},732:e=>{const t="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],i=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function o(e){return s("(?=",e,")")}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.map((e=>{return(t=e)?"string"==typeof t?t:t.source:null
var t})).join("")}e.exports=function(e){const a=t,u={$pattern:t,keyword:n.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]),literal:r,built_in:i.concat(["any","void","number","boolean","string","object","never","enum"])},l={className:"meta",begin:"@"+a},c=(e,t,n)=>{const r=e.contains.findIndex((e=>e.label===t))
if(-1===r)throw new Error("can not find mode to replace")
e.contains.splice(r,1,n)},f=function(e){const a=t,u={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,t)=>{const n=e[0].length+e.index,r=e.input[n]
"<"!==r?">"===r&&(((e,t)=>{let{after:n}=t
const r="</"+e[0].slice(1)
return-1!==e.input.indexOf(r,n)})(e,{after:n})||t.ignoreMatch()):t.ignoreMatch()}},l={$pattern:t,keyword:n,literal:r,built_in:i},c="[0-9](_?[0-9])*",f=`\\.(${c})`,h="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",p={className:"number",variants:[{begin:`(\\b(${h})((${f})|\\.)?|(${f}))[eE][+-]?(${c})\\b`},{begin:`\\b(${h})\\b((${f})\\b|\\.)?|(${f})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},d={className:"subst",begin:"\\$\\{",end:"\\}",keywords:l,contains:[]},g={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,d],subLanguage:"xml"}},m={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,d],subLanguage:"css"}},v={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,d]},y={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},b=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,m,v,p,e.REGEXP_MODE]
d.contains=b.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(b)})
const x=[].concat(y,d.contains),w=x.concat([{begin:/\(/,end:/\)/,keywords:l,contains:["self"].concat(x)}]),_={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w}
return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:w},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,g,m,v,y,p,{begin:s(/[{,\n]\s*/,o(s(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,a+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:a+o("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[y,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:w}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:u.begin,"on:begin":u.isTrulyOpeningTag,end:u.end}],subLanguage:"xml",contains:[{begin:u.begin,end:u.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,contains:["self",e.inherit(e.TITLE_MODE,{begin:a}),_],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[_,e.inherit(e.TITLE_MODE,{begin:a})]},{variants:[{begin:"\\."+a},{begin:"\\$"+a}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:a}),"self",_]},{begin:"(get|set)\\s+(?="+a+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:a}),{begin:/\(\)/},_]},{begin:/\$[(.]/}]}}(e)
return Object.assign(f.keywords,u),f.exports.PARAMS_CONTAINS.push(l),f.contains=f.contains.concat([l,{beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:"interface extends"}]),c(f,"shebang",e.SHEBANG()),c(f,"use_strict",{className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/}),f.contains.find((e=>"function"===e.className)).relevance=0,Object.assign(f,{name:"TypeScript",aliases:["ts","tsx"]}),f}},680:e=>{function t(e){return e?"string"==typeof e?e:e.source:null}function n(e){return r("(?=",e,")")}function r(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
return n.map((e=>t(e))).join("")}function i(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
return"("+n.map((e=>t(e))).join("|")+")"}e.exports=function(e){const t=r(/[A-Z_]/,r("(",/[A-Z0-9_.-]*:/,")?"),/[A-Z0-9_.-]*/),o={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},s={begin:/\s/,contains:[{className:"meta-keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=e.inherit(s,{begin:/\(/,end:/\)/}),u=e.inherit(e.APOS_STRING_MODE,{className:"meta-string"}),l=e.inherit(e.QUOTE_STRING_MODE,{className:"meta-string"}),c={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:/[A-Za-z0-9._:-]+/,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[o]},{begin:/'/,end:/'/,contains:[o]},{begin:/[^\s"'=<>`]+/}]}]}]}
return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[s,l,u,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[s,a,l,u]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},o,{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[c],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[c],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:r(/</,n(r(t,i(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:c}]},{className:"tag",begin:r(/<\//,n(r(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}},339:function(e,t){var n
!function(t,n){"use strict"
"object"==typeof e.exports?e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return n(e)}:n(t)}("undefined"!=typeof window?window:this,(function(r,i){"use strict"
var o=[],s=Object.getPrototypeOf,a=o.slice,u=o.flat?function(e){return o.flat.call(e)}:function(e){return o.concat.apply([],e)},l=o.push,c=o.indexOf,f={},h=f.toString,p=f.hasOwnProperty,d=p.toString,g=d.call(Object),m={},v=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},y=function(e){return null!=e&&e===e.window},b=r.document,x={type:!0,src:!0,nonce:!0,noModule:!0}
function w(e,t,n){var r,i,o=(n=n||b).createElement("script")
if(o.text=e,t)for(r in x)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i)
n.head.appendChild(o).parentNode.removeChild(o)}function _(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[h.call(e)]||"object":typeof e}var E="3.6.4",k=function(e,t){return new k.fn.init(e,t)}
function S(e){var t=!!e&&"length"in e&&e.length,n=_(e)
return!v(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}k.fn=k.prototype={jquery:E,constructor:k,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e)
return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(e){return this.pushStack(k.map(this,(function(t,n){return e.call(t,n,t)})))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(k.grep(this,(function(e,t){return(t+1)%2})))},odd:function(){return this.pushStack(k.grep(this,(function(e,t){return t%2})))},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:o.sort,splice:o.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1
for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||v(s)||(s={}),a===u&&(s=this,a--);a<u;a++)if(null!=(e=arguments[a]))for(t in e)r=e[t],"__proto__"!==t&&s!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=s[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,s[t]=k.extend(l,o,r)):void 0!==r&&(s[t]=r))
return s},k.extend({expando:"jQuery"+(E+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n
return!(!e||"[object Object]"!==h.call(e)||(t=s(e))&&("function"!=typeof(n=p.call(t,"constructor")&&t.constructor)||d.call(n)!==g))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},globalEval:function(e,t,n){w(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0
if(S(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},makeArray:function(e,t){var n=t||[]
return null!=e&&(S(Object(e))?k.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:c.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;i<o;i++)!t(e[i],i)!==s&&r.push(e[i])
return r},map:function(e,t,n){var r,i,o=0,s=[]
if(S(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i)
else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i)
return u(s)},guid:1,support:m}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=o[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),(function(e,t){f["[object "+t+"]"]=t.toLowerCase()}))
var T=function(e){var t,n,r,i,o,s,a,u,l,c,f,h,p,d,g,m,v,y,b,x="sizzle"+1*new Date,w=e.document,_=0,E=0,k=ue(),S=ue(),T=ue(),O=ue(),A=function(e,t){return e===t&&(f=!0),0},C={}.hasOwnProperty,N=[],j=N.pop,R=N.push,L=N.push,P=N.slice,I=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n
return-1},D="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",$="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",B="\\["+M+"*("+$+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+$+"))|)"+M+"*\\]",z=":("+$+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+B+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),q=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),H=new RegExp("^"+M+"*,"+M+"*"),Q=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),W=new RegExp(z),V=new RegExp("^"+$+"$"),Z={ID:new RegExp("^#("+$+")"),CLASS:new RegExp("^\\.("+$+")"),TAG:new RegExp("^("+$+"|[*])"),ATTR:new RegExp("^"+B),PSEUDO:new RegExp("^"+z),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+D+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},K=/HTML$/i,X=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536
return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){h()},se=xe((function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()}),{dir:"parentNode",next:"legend"})
try{L.apply(N=P.call(w.childNodes),w.childNodes),N[w.childNodes.length].nodeType}catch(e){L={apply:N.length?function(e,t){R.apply(e,P.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ae(e,t,r,i){var o,a,l,c,f,d,v,y=t&&t.ownerDocument,w=t?t.nodeType:9
if(r=r||[],"string"!=typeof e||!e||1!==w&&9!==w&&11!==w)return r
if(!i&&(h(t),t=t||p,g)){if(11!==w&&(f=J.exec(e)))if(o=f[1]){if(9===w){if(!(l=t.getElementById(o)))return r
if(l.id===o)return r.push(l),r}else if(y&&(l=y.getElementById(o))&&b(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r
if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!O[e+" "]&&(!m||!m.test(e))&&(1!==w||"object"!==t.nodeName.toLowerCase())){if(v=e,y=t,1===w&&(U.test(e)||Q.test(e))){for((y=ee.test(e)&&ve(t.parentNode)||t)===t&&n.scope||((c=t.getAttribute("id"))?c=c.replace(re,ie):t.setAttribute("id",c=x)),a=(d=s(e)).length;a--;)d[a]=(c?"#"+c:":scope")+" "+be(d[a])
v=d.join(",")}try{return L.apply(r,y.querySelectorAll(v)),r}catch(t){O(e,!0)}finally{c===x&&t.removeAttribute("id")}}}return u(e.replace(q,"$1"),t,r,i)}function ue(){var e=[]
return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function le(e){return e[x]=!0,e}function ce(e){var t=p.createElement("fieldset")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split("|"),i=n.length;i--;)r.attrHandle[n[i]]=t}function he(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function pe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function de(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function ge(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function me(e){return le((function(t){return t=+t,le((function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))}))}))}function ve(e){return e&&void 0!==e.getElementsByTagName&&e}for(t in n=ae.support={},o=ae.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement
return!K.test(t||n&&n.nodeName||"HTML")},h=ae.setDocument=function(e){var t,i,s=e?e.ownerDocument||e:w
return s!=p&&9===s.nodeType&&s.documentElement?(d=(p=s).documentElement,g=!o(p),w!=p&&(i=p.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",oe,!1):i.attachEvent&&i.attachEvent("onunload",oe)),n.scope=ce((function(e){return d.appendChild(e).appendChild(p.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length})),n.cssHas=ce((function(){try{return p.querySelector(":has(*,:jqfake)"),!1}catch(e){return!0}})),n.attributes=ce((function(e){return e.className="i",!e.getAttribute("className")})),n.getElementsByTagName=ce((function(e){return e.appendChild(p.createComment("")),!e.getElementsByTagName("*").length})),n.getElementsByClassName=Y.test(p.getElementsByClassName),n.getById=ce((function(e){return d.appendChild(e).id=x,!p.getElementsByName||!p.getElementsByName(x).length})),n.getById?(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n=t.getElementById(e)
return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(te,ne)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}},r.find.ID=function(e,t){if(void 0!==t.getElementById&&g){var n,r,i,o=t.getElementById(e)
if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o]
for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],m=[],(n.qsa=Y.test(p.querySelectorAll))&&(ce((function(e){var t
d.appendChild(e).innerHTML="<a id='"+x+"'></a><select id='"+x+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&m.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||m.push("\\["+M+"*(?:value|"+D+")"),e.querySelectorAll("[id~="+x+"-]").length||m.push("~="),(t=p.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||m.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||m.push(":checked"),e.querySelectorAll("a#"+x+"+*").length||m.push(".#.+[+~]"),e.querySelectorAll("\\\f"),m.push("[\\r\\n\\f]")})),ce((function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
var t=p.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&m.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&m.push(":enabled",":disabled"),d.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&m.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),m.push(",.*:")}))),(n.matchesSelector=Y.test(y=d.matches||d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ce((function(e){n.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),v.push("!=",z)})),n.cssHas||m.push(":has"),m=m.length&&new RegExp(m.join("|")),v=v.length&&new RegExp(v.join("|")),t=Y.test(d.compareDocumentPosition),b=t||Y.test(d.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},A=t?function(e,t){if(e===t)return f=!0,0
var r=!e.compareDocumentPosition-!t.compareDocumentPosition
return r||(1&(r=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e==p||e.ownerDocument==w&&b(w,e)?-1:t==p||t.ownerDocument==w&&b(w,t)?1:c?I(c,e)-I(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],a=[t]
if(!i||!o)return e==p?-1:t==p?1:i?-1:o?1:c?I(c,e)-I(c,t):0
if(i===o)return he(e,t)
for(n=e;n=n.parentNode;)s.unshift(n)
for(n=t;n=n.parentNode;)a.unshift(n)
for(;s[r]===a[r];)r++
return r?he(s[r],a[r]):s[r]==w?-1:a[r]==w?1:0},p):p},ae.matches=function(e,t){return ae(e,null,null,t)},ae.matchesSelector=function(e,t){if(h(e),n.matchesSelector&&g&&!O[t+" "]&&(!v||!v.test(t))&&(!m||!m.test(t)))try{var r=y.call(e,t)
if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){O(t,!0)}return ae(t,p,null,[e]).length>0},ae.contains=function(e,t){return(e.ownerDocument||e)!=p&&h(e),b(e,t)},ae.attr=function(e,t){(e.ownerDocument||e)!=p&&h(e)
var i=r.attrHandle[t.toLowerCase()],o=i&&C.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0
return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ae.escape=function(e){return(e+"").replace(re,ie)},ae.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ae.uniqueSort=function(e){var t,r=[],i=0,o=0
if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(A),f){for(;t=e[o++];)t===e[o]&&(i=r.push(o))
for(;i--;)e.splice(r[i],1)}return c=null,e},i=ae.getText=function(e){var t,n="",r=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t)
return n},r=ae.selectors={cacheLength:50,createPseudo:le,match:Z,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ae.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ae.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return Z.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&W.test(n)&&(t=s(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=k[e+" "]
return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&k(e,(function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=ae.attr(r,e)
return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(F," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,h,p,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a,b=!1
if(m){if(o){for(;g;){for(h=t;h=h[g];)if(a?h.nodeName.toLowerCase()===v:1===h.nodeType)return!1
d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&y){for(b=(p=(l=(c=(f=(h=m)[x]||(h[x]={}))[h.uniqueID]||(f[h.uniqueID]={}))[e]||[])[0]===_&&l[1])&&l[2],h=p&&m.childNodes[p];h=++p&&h&&h[g]||(b=p=0)||d.pop();)if(1===h.nodeType&&++b&&h===t){c[e]=[_,p,b]
break}}else if(y&&(b=p=(l=(c=(f=(h=t)[x]||(h[x]={}))[h.uniqueID]||(f[h.uniqueID]={}))[e]||[])[0]===_&&l[1]),!1===b)for(;(h=++p&&h&&h[g]||(b=p=0)||d.pop())&&((a?h.nodeName.toLowerCase()!==v:1!==h.nodeType)||!++b||(y&&((c=(f=h[x]||(h[x]={}))[h.uniqueID]||(f[h.uniqueID]={}))[e]=[_,b]),h!==t)););return(b-=i)===r||b%r==0&&b/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ae.error("unsupported pseudo: "+e)
return i[x]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?le((function(e,n){for(var r,o=i(e,t),s=o.length;s--;)e[r=I(e,o[s])]=!(n[r]=o[s])})):function(e){return i(e,0,n)}):i}},pseudos:{not:le((function(e){var t=[],n=[],r=a(e.replace(q,"$1"))
return r[x]?le((function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))})):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}})),has:le((function(e){return function(t){return ae(e,t).length>0}})),contains:le((function(e){return e=e.replace(te,ne),function(t){return(t.textContent||i(t)).indexOf(e)>-1}})),lang:le((function(e){return V.test(e||"")||ae.error("unsupported lang: "+e),e=e.replace(te,ne).toLowerCase(),function(t){var n
do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}})),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return X.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:me((function(){return[0]})),last:me((function(e,t){return[t-1]})),eq:me((function(e,t,n){return[n<0?n+t:n]})),even:me((function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e})),odd:me((function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e})),lt:me((function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r)
return e})),gt:me((function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r)
return e}))}},r.pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=pe(t)
for(t in{submit:!0,reset:!0})r.pseudos[t]=de(t)
function ye(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value
return r}function xe(e,t,n){var r=t.dir,i=t.next,o=i||r,s=n&&"parentNode"===o,a=E++
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||s)return e(t,n,i)
return!1}:function(t,n,u){var l,c,f,h=[_,a]
if(u){for(;t=t[r];)if((1===t.nodeType||s)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||s)if(c=(f=t[x]||(t[x]={}))[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t
else{if((l=c[o])&&l[0]===_&&l[1]===a)return h[2]=l[2]
if(c[o]=h,h[2]=e(t,n,u))return!0}return!1}}function we(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function _e(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;a<u;a++)(o=e[a])&&(n&&!n(o,r,i)||(s.push(o),l&&t.push(a)))
return s}function Ee(e,t,n,r,i,o){return r&&!r[x]&&(r=Ee(r)),i&&!i[x]&&(i=Ee(i,o)),le((function(o,s,a,u){var l,c,f,h=[],p=[],d=s.length,g=o||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ae(e,t[r],n)
return n}(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:_e(g,h,e,a,u),v=n?i||(o?e:d||r)?[]:s:m
if(n&&n(m,v,a,u),r)for(l=_e(v,p),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(v[p[c]]=!(m[p[c]]=f))
if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f)
i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?I(o,f):h[c])>-1&&(o[l]=!(s[l]=f))}}else v=_e(v===s?v.splice(d,v.length):v),i?i(null,s,v,u):L.apply(s,v)}))}function ke(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],a=s||r.relative[" "],u=s?1:0,c=xe((function(e){return e===t}),a,!0),f=xe((function(e){return I(t,e)>-1}),a,!0),h=[function(e,n,r){var i=!s&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r))
return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])h=[xe(we(h),n)]
else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[x]){for(i=++u;i<o&&!r.relative[e[i].type];i++);return Ee(u>1&&we(h),u>1&&be(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(q,"$1"),n,u<i&&ke(e.slice(u,i)),i<o&&ke(e=e.slice(i)),i<o&&be(e))}h.push(n)}return we(h)}return ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,s=ae.tokenize=function(e,t){var n,i,o,s,a,u,l,c=S[e+" "]
if(c)return t?0:c.slice(0)
for(a=e,u=[],l=r.preFilter;a;){for(s in n&&!(i=H.exec(a))||(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=Q.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(q," ")}),a=a.slice(n.length)),r.filter)!(i=Z[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length))
if(!n)break}return t?a.length:a?ae.error(e):S(e,u).slice(0)},a=ae.compile=function(e,t){var n,i=[],o=[],a=T[e+" "]
if(!a){for(t||(t=s(e)),n=t.length;n--;)(a=ke(t[n]))[x]?i.push(a):o.push(a)
a=T(e,function(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,a,u,c){var f,d,m,v=0,y="0",b=o&&[],x=[],w=l,E=o||i&&r.find.TAG("*",c),k=_+=null==w?1:Math.random()||.1,S=E.length
for(c&&(l=s==p||s||c);y!==S&&null!=(f=E[y]);y++){if(i&&f){for(d=0,s||f.ownerDocument==p||(h(f),a=!g);m=e[d++];)if(m(f,s||p,a)){u.push(f)
break}c&&(_=k)}n&&((f=!m&&f)&&v--,o&&b.push(f))}if(v+=y,n&&y!==v){for(d=0;m=t[d++];)m(b,x,s,a)
if(o){if(v>0)for(;y--;)b[y]||x[y]||(x[y]=j.call(u))
x=_e(x)}L.apply(u,x),c&&!o&&x.length>0&&v+t.length>1&&ae.uniqueSort(u)}return c&&(_=k,l=w),b}
return n?le(o):o}(o,i)),a.selector=e}return a},u=ae.select=function(e,t,n,i){var o,u,l,c,f,h="function"==typeof e&&e,p=!i&&s(e=h.selector||e)
if(n=n||[],1===p.length){if((u=p[0]=p[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(te,ne),t)||[])[0]))return n
h&&(t=t.parentNode),e=e.slice(u.shift().value.length)}for(o=Z.needsContext.test(e)?0:u.length;o--&&(l=u[o],!r.relative[c=l.type]);)if((f=r.find[c])&&(i=f(l.matches[0].replace(te,ne),ee.test(u[0].type)&&ve(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&be(u)))return L.apply(n,i),n
break}}return(h||a(e,p))(i,t,!g,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},n.sortStable=x.split("").sort(A).join("")===x,n.detectDuplicates=!!f,h(),n.sortDetached=ce((function(e){return 1&e.compareDocumentPosition(p.createElement("fieldset"))})),ce((function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")}))||fe("type|href|height|width",(function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)})),n.attributes&&ce((function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}))||fe("value",(function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue})),ce((function(e){return null==e.getAttribute("disabled")}))||fe(D,(function(e,t,n){var r
if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null})),ae}(r)
k.find=T,k.expr=T.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=T.uniqueSort,k.text=T.getText,k.isXMLDoc=T.isXML,k.contains=T.contains,k.escapeSelector=T.escape
var O=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&k(e).is(n))break
r.push(e)}return r},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},C=k.expr.match.needsContext
function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var j=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
function R(e,t,n){return v(t)?k.grep(e,(function(e,r){return!!t.call(e,r,e)!==n})):t.nodeType?k.grep(e,(function(e){return e===t!==n})):"string"!=typeof t?k.grep(e,(function(e){return c.call(t,e)>-1!==n})):k.filter(t,e,n)}k.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,(function(e){return 1===e.nodeType})))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this
if("string"!=typeof e)return this.pushStack(k(e).filter((function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0})))
for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n)
return r>1?k.uniqueSort(n):n},filter:function(e){return this.pushStack(R(this,e||[],!1))},not:function(e){return this.pushStack(R(this,e||[],!0))},is:function(e){return!!R(this,"string"==typeof e&&C.test(e)?k(e):e||[],!1).length}})
var L,P=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||L,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:P.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:b,!0)),j.test(r[1])&&k.isPlainObject(t))for(r in t)v(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(i=b.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):v(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,L=k(b)
var I=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0}
function M(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length
return this.filter((function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0}))},closest:function(e,t){var n,r=0,i=this.length,o=[],s="string"!=typeof e&&k(e)
if(!C.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?c.call(k(e),this[0]):c.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return O(e,"parentNode")},parentsUntil:function(e,t,n){return O(e,"parentNode",n)},next:function(e){return M(e,"nextSibling")},prev:function(e){return M(e,"previousSibling")},nextAll:function(e){return O(e,"nextSibling")},prevAll:function(e){return O(e,"previousSibling")},nextUntil:function(e,t,n){return O(e,"nextSibling",n)},prevUntil:function(e,t,n){return O(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return null!=e.contentDocument&&s(e.contentDocument)?e.contentDocument:(N(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},(function(e,t){k.fn[e]=function(n,r){var i=k.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=k.filter(r,i)),this.length>1&&(D[e]||k.uniqueSort(i),I.test(e)&&i.reverse()),this.pushStack(i)}}))
var $=/[^\x20\t\r\n\f]+/g
function B(e){return e}function z(e){throw e}function F(e,t,n,r){var i
try{e&&v(i=e.promise)?i.call(e).done(t).fail(n):e&&v(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return k.each(e.match($)||[],(function(e,n){t[n]=!0})),t}(e):k.extend({},e)
var t,n,r,i,o=[],s=[],a=-1,u=function(){for(i=i||e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){k.each(n,(function(n,r){v(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==_(r)&&t(r)}))}(arguments),n&&!t&&u()),this},remove:function(){return k.each(arguments,(function(e,t){for(var n;(n=k.inArray(t,o,n))>-1;)o.splice(n,1),n<=a&&a--})),this},has:function(e){return e?k.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},k.extend({Deferred:function(e){var t=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
return k.Deferred((function(n){k.each(t,(function(t,r){var i=v(e[r[4]])&&e[r[4]]
o[r[1]]((function(){var e=i&&i.apply(this,arguments)
e&&v(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)}))})),e=null})).promise()},then:function(e,n,i){var o=0
function s(e,t,n,i){return function(){var a=this,u=arguments,l=function(){var r,l
if(!(e<o)){if((r=n.apply(a,u))===t.promise())throw new TypeError("Thenable self-resolution")
l=r&&("object"==typeof r||"function"==typeof r)&&r.then,v(l)?i?l.call(r,s(o,t,B,i),s(o,t,z,i)):(o++,l.call(r,s(o,t,B,i),s(o,t,z,i),s(o,t,B,t.notifyWith))):(n!==B&&(a=void 0,u=[r]),(i||t.resolveWith)(a,u))}},c=i?l:function(){try{l()}catch(r){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(r,c.stackTrace),e+1>=o&&(n!==z&&(a=void 0,u=[r]),t.rejectWith(a,u))}}
e?c():(k.Deferred.getStackHook&&(c.stackTrace=k.Deferred.getStackHook()),r.setTimeout(c))}}return k.Deferred((function(r){t[0][3].add(s(0,r,v(i)?i:B,r.notifyWith)),t[1][3].add(s(0,r,v(e)?e:B)),t[2][3].add(s(0,r,v(n)?n:z))})).promise()},promise:function(e){return null!=e?k.extend(e,i):i}},o={}
return k.each(t,(function(e,r){var s=r[2],a=r[5]
i[r[1]]=s.add,a&&s.add((function(){n=a}),t[3-e][2].disable,t[3-e][3].disable,t[0][2].lock,t[0][3].lock),s.add(r[3].fire),o[r[0]]=function(){return o[r[0]+"With"](this===o?void 0:this,arguments),this},o[r[0]+"With"]=s.fireWith})),i.promise(o),e&&e.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=a.call(arguments),o=k.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?a.call(arguments):n,--t||o.resolveWith(r,i)}}
if(t<=1&&(F(e,o.done(s(n)).resolve,o.reject,!t),"pending"===o.state()||v(i[n]&&i[n].then)))return o.then()
for(;n--;)F(i[n],s(n),o.reject)
return o.promise()}})
var q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
k.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&q.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){r.setTimeout((function(){throw e}))}
var H=k.Deferred()
function Q(){b.removeEventListener("DOMContentLoaded",Q),r.removeEventListener("load",Q),k.ready()}k.fn.ready=function(e){return H.then(e).catch((function(e){k.readyException(e)})),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0,!0!==e&&--k.readyWait>0||H.resolveWith(b,[k]))}}),k.ready.then=H.then,"complete"===b.readyState||"loading"!==b.readyState&&!b.documentElement.doScroll?r.setTimeout(k.ready):(b.addEventListener("DOMContentLoaded",Q),r.addEventListener("load",Q))
var U=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n
if("object"===_(n))for(a in i=!0,n)U(e,t,a,n[a],!0,o,s)
else if(void 0!==r&&(i=!0,v(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;a<u;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)))
return i?e:l?t.call(e):u?t(e[0],n):o},W=/^-ms-/,V=/-([a-z])/g
function Z(e,t){return t.toUpperCase()}function K(e){return e.replace(W,"ms-").replace(V,Z)}var X=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
function G(){this.expando=k.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando]
return t||(t={},X(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[K(t)]=n
else for(r in t)i[K(r)]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][K(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(K):(t=K(t))in r?[t]:t.match($)||[]).length
for(;n--;)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!k.isEmptyObject(t)}}
var Y=new G,J=new G,ee=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,te=/[A-Z]/g
function ne(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(te,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=function(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ee.test(e)?JSON.parse(e):e)}(n)}catch(e){}J.set(e,t,n)}else n=void 0
return n}k.extend({hasData:function(e){return J.hasData(e)||Y.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),k.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes
if(void 0===e){if(this.length&&(i=J.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(r=s[n].name).indexOf("data-")&&(r=K(r.slice(5)),ne(o,r,i[r]))
Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each((function(){J.set(this,e)})):U(this,(function(t){var n
if(o&&void 0===t)return void 0!==(n=J.get(o,e))||void 0!==(n=ne(o,e))?n:void 0
this.each((function(){J.set(this,e,t)}))}),null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each((function(){J.remove(this,e)}))}}),k.extend({queue:function(e,t,n){var r
if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,(function(){k.dequeue(e,t)}),o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return Y.get(e,n)||Y.access(e,n,{empty:k.Callbacks("once memory").add((function(){Y.remove(e,[t+"queue",n])}))})}}),k.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?k.queue(this[0],e):void 0===t?this:this.each((function(){var n=k.queue(this,e,t)
k._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&k.dequeue(this,e)}))},dequeue:function(e){return this.each((function(){k.dequeue(this,e)}))},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=Y.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],se=b.documentElement,ae=function(e){return k.contains(e.ownerDocument,e)},ue={composed:!0}
se.getRootNode&&(ae=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ue)===e.ownerDocument})
var le=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ae(e)&&"none"===k.css(e,"display")}
function ce(e,t,n,r){var i,o,s=20,a=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=a(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ie.exec(k.css(e,t))
if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;s--;)k.style(e,t,c+l),(1-o)*(1-(o=a()/u||.5))<=0&&(s=0),c/=o
c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var fe={}
function he(e){var t,n=e.ownerDocument,r=e.nodeName,i=fe[r]
return i||(t=n.body.appendChild(n.createElement(r)),i=k.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),fe[r]=i,i)}function pe(e,t){for(var n,r,i=[],o=0,s=e.length;o<s;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=Y.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&le(r)&&(i[o]=he(r))):"none"!==n&&(i[o]="none",Y.set(r,"display",n)))
for(o=0;o<s;o++)null!=i[o]&&(e[o].style.display=i[o])
return e}k.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each((function(){le(this)?k(this).show():k(this).hide()}))}})
var de,ge,me=/^(?:checkbox|radio)$/i,ve=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ye=/^$|^module$|\/(?:java|ecma)script/i
de=b.createDocumentFragment().appendChild(b.createElement("div")),(ge=b.createElement("input")).setAttribute("type","radio"),ge.setAttribute("checked","checked"),ge.setAttribute("name","t"),de.appendChild(ge),m.checkClone=de.cloneNode(!0).cloneNode(!0).lastChild.checked,de.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!de.cloneNode(!0).lastChild.defaultValue,de.innerHTML="<option></option>",m.option=!!de.lastChild
var be={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
function xe(e,t){var n
return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?k.merge([e],n):n}function we(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,m.option||(be.optgroup=be.option=[1,"<select multiple='multiple'>","</select>"])
var _e=/<|&#?\w+;/
function Ee(e,t,n,r,i){for(var o,s,a,u,l,c,f=t.createDocumentFragment(),h=[],p=0,d=e.length;p<d;p++)if((o=e[p])||0===o)if("object"===_(o))k.merge(h,o.nodeType?[o]:o)
else if(_e.test(o)){for(s=s||f.appendChild(t.createElement("div")),a=(ve.exec(o)||["",""])[1].toLowerCase(),u=be[a]||be._default,s.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];c--;)s=s.lastChild
k.merge(h,s.childNodes),(s=f.firstChild).textContent=""}else h.push(t.createTextNode(o))
for(f.textContent="",p=0;o=h[p++];)if(r&&k.inArray(o,r)>-1)i&&i.push(o)
else if(l=ae(o),s=xe(f.appendChild(o),"script"),l&&we(s),n)for(c=0;o=s[c++];)ye.test(o.type||"")&&n.push(o)
return f}var ke=/^([^.]*)(?:\.(.+)|)/
function Se(){return!0}function Te(){return!1}function Oe(e,t){return e===function(){try{return b.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var s,a
if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,a,n,r,t[a],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te
else if(!i)return e
return 1===o&&(s=i,i=function(e){return k().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=k.guid++)),e.each((function(){k.event.add(this,t,i,r,n)}))}function Ce(e,t,n){n?(Y.set(e,t,!1),k.event.add(e,t,{namespace:!1,handler:function(e){var r,i,o=Y.get(this,t)
if(1&e.isTrigger&&this[t]){if(o.length)(k.event.special[t]||{}).delegateType&&e.stopPropagation()
else if(o=a.call(arguments),Y.set(this,t,o),r=n(this,t),this[t](),o!==(i=Y.get(this,t))||r?Y.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i&&i.value}else o.length&&(Y.set(this,t,{value:k.event.trigger(k.extend(o[0],k.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,t)&&k.event.add(e,t,Se)}k.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,h,p,d,g,m=Y.get(e)
if(X(e))for(n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(se,i),n.guid||(n.guid=k.guid++),(u=m.events)||(u=m.events=Object.create(null)),(s=m.handle)||(s=m.handle=function(t){return void 0!==k&&k.event.triggered!==t.type?k.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match($)||[""]).length;l--;)p=g=(a=ke.exec(t[l])||[])[1],d=(a[2]||"").split(".").sort(),p&&(f=k.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=k.event.special[p]||{},c=k.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:d.join(".")},o),(h=u[p])||((h=u[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,d,s)||e.addEventListener&&e.addEventListener(p,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?h.splice(h.delegateCount++,0,c):h.push(c),k.event.global[p]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,h,p,d,g,m=Y.hasData(e)&&Y.get(e)
if(m&&(u=m.events)){for(l=(t=(t||"").match($)||[""]).length;l--;)if(p=g=(a=ke.exec(t[l])||[])[1],d=(a[2]||"").split(".").sort(),p){for(f=k.event.special[p]||{},h=u[p=(r?f.delegateType:f.bindType)||p]||[],a=a[2]&&new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=h.length;o--;)c=h[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(h.splice(o,1),c.selector&&h.delegateCount--,f.remove&&f.remove.call(e,c))
s&&!h.length&&(f.teardown&&!1!==f.teardown.call(e,d,m.handle)||k.removeEvent(e,p,m.handle),delete u[p])}else for(p in u)k.event.remove(e,p+t[l],n,r,!0)
k.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,s,a=new Array(arguments.length),u=k.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=k.event.special[u.type]||{}
for(a[0]=u,t=1;t<arguments.length;t++)a[t]=arguments[t]
if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(s=k.event.handlers.call(this,u,l),t=0;(i=s[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,s,a=[],u=t.delegateCount,l=e.target
if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],s={},n=0;n<u;n++)void 0===s[i=(r=t[n]).selector+" "]&&(s[i]=r.needsContext?k(i,this).index(l)>-1:k.find(i,this,null,[l]).length),s[i]&&o.push(r)
o.length&&a.push({elem:l,handlers:o})}return l=this,u<t.length&&a.push({elem:l,handlers:t.slice(u)}),a},addProp:function(e,t){Object.defineProperty(k.Event.prototype,e,{enumerable:!0,configurable:!0,get:v(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e
return me.test(t.type)&&t.click&&N(t,"input")&&Ce(t,"click",Se),!1},trigger:function(e){var t=this||e
return me.test(t.type)&&t.click&&N(t,"input")&&Ce(t,"click"),!0},_default:function(e){var t=e.target
return me.test(t.type)&&t.click&&N(t,"input")&&Y.get(t,"click")||N(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Se:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=Se,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=Se,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=Se,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},(function(e,t){k.event.special[e]={setup:function(){return Ce(this,e,Oe),!1},trigger:function(){return Ce(this,e),!0},_default:function(t){return Y.get(t.target,e)},delegateType:t}})),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},(function(e,t){k.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj
return r&&(r===this||k.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}})),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each((function(){k.event.remove(this,e,n,t)}))}})
var Ne=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,Re=/^\s*<!\[CDATA\[|\]\]>\s*$/g
function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ie(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function De(e,t){var n,r,i,o,s,a
if(1===t.nodeType){if(Y.hasData(e)&&(a=Y.get(e).events))for(i in Y.remove(t,"handle events"),a)for(n=0,r=a[i].length;n<r;n++)k.event.add(t,i,a[i][n])
J.hasData(e)&&(o=J.access(e),s=k.extend({},o),J.set(t,s))}}function Me(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&me.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function $e(e,t,n,r){t=u(t)
var i,o,s,a,l,c,f=0,h=e.length,p=h-1,d=t[0],g=v(d)
if(g||h>1&&"string"==typeof d&&!m.checkClone&&je.test(d))return e.each((function(i){var o=e.eq(i)
g&&(t[0]=d.call(this,i,o.html())),$e(o,t,n,r)}))
if(h&&(o=(i=Ee(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=(s=k.map(xe(i,"script"),Pe)).length;f<h;f++)l=i,f!==p&&(l=k.clone(l,!0,!0),a&&k.merge(s,xe(l,"script"))),n.call(e[f],l,f)
if(a)for(c=s[s.length-1].ownerDocument,k.map(s,Ie),f=0;f<a;f++)l=s[f],ye.test(l.type||"")&&!Y.access(l,"globalEval")&&k.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?k._evalUrl&&!l.noModule&&k._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):w(l.textContent.replace(Re,""),l,c))}return e}function Be(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(xe(r)),r.parentNode&&(n&&ae(r)&&we(xe(r,"script")),r.parentNode.removeChild(r))
return e}k.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=ae(e)
if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(s=xe(a),r=0,i=(o=xe(e)).length;r<i;r++)Me(o[r],s[r])
if(t)if(n)for(o=o||xe(e),s=s||xe(a),r=0,i=o.length;r<i;r++)De(o[r],s[r])
else De(e,a)
return(s=xe(a,"script")).length>0&&we(s,!u&&xe(e,"script")),a},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(X(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle)
n[Y.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return U(this,(function(e){return void 0===e?k.text(this):this.empty().each((function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)}))}),null,e,arguments.length)},append:function(){return $e(this,arguments,(function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)}))},prepend:function(){return $e(this,arguments,(function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e)
t.insertBefore(e,t.firstChild)}}))},before:function(){return $e(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this)}))},after:function(){return $e(this,arguments,(function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)}))},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(xe(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map((function(){return k.clone(this,e,t)}))},html:function(e){return U(this,(function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Ne.test(e)&&!be[(ve.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e)
try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(xe(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)}),null,e,arguments.length)},replaceWith:function(){var e=[]
return $e(this,arguments,(function(t){var n=this.parentNode
k.inArray(this,e)<0&&(k.cleanData(xe(this)),n&&n.replaceChild(t,this))}),e)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},(function(e,t){k.fn[e]=function(e){for(var n,r=[],i=k(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),k(i[s])[t](n),l.apply(r,n.get())
return this.pushStack(r)}}))
var ze=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),Fe=/^--/,qe=function(e){var t=e.ownerDocument.defaultView
return t&&t.opener||(t=r),t.getComputedStyle(e)},He=function(e,t,n){var r,i,o={}
for(i in t)o[i]=e.style[i],e.style[i]=t[i]
for(i in r=n.call(e),t)e.style[i]=o[i]
return r},Qe=new RegExp(oe.join("|"),"i"),Ue="[\\x20\\t\\r\\n\\f]",We=new RegExp("^"+Ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ue+"+$","g")
function Ve(e,t,n){var r,i,o,s,a=Fe.test(t),u=e.style
return(n=n||qe(e))&&(s=n.getPropertyValue(t)||n[t],a&&s&&(s=s.replace(We,"$1")||void 0),""!==s||ae(e)||(s=k.style(e,t)),!m.pixelBoxStyles()&&ze.test(s)&&Qe.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=s,s=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==s?s+"":s}function Ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments)
delete this.get}}}!function(){function e(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",se.appendChild(l).appendChild(c)
var e=r.getComputedStyle(c)
n="1%"!==e.top,u=12===t(e.marginLeft),c.style.right="60%",s=36===t(e.right),i=36===t(e.width),c.style.position="absolute",o=12===t(c.offsetWidth/3),se.removeChild(l),c=null}}function t(e){return Math.round(parseFloat(e))}var n,i,o,s,a,u,l=b.createElement("div"),c=b.createElement("div")
c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===c.style.backgroundClip,k.extend(m,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),s},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),u},scrollboxSize:function(){return e(),o},reliableTrDimensions:function(){var e,t,n,i
return null==a&&(e=b.createElement("table"),t=b.createElement("tr"),n=b.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",se.appendChild(e).appendChild(t).appendChild(n),i=r.getComputedStyle(t),a=parseInt(i.height,10)+parseInt(i.borderTopWidth,10)+parseInt(i.borderBottomWidth,10)===t.offsetHeight,se.removeChild(e)),a}}))}()
var Ke=["Webkit","Moz","ms"],Xe=b.createElement("div").style,Ge={}
function Ye(e){return k.cssProps[e]||Ge[e]||(e in Xe?e:Ge[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Ke.length;n--;)if((e=Ke[n]+t)in Xe)return e}(e)||e)}var Je=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"}
function nt(e,t,n){var r=ie.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function rt(e,t,n,r,i,o){var s="width"===t?1:0,a=0,u=0
if(n===(r?"border":"content"))return 0
for(;s<4;s+=2)"margin"===n&&(u+=k.css(e,n+oe[s],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+oe[s],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+oe[s]+"Width",!0,i))):(u+=k.css(e,"padding"+oe[s],!0,i),"padding"!==n?u+=k.css(e,"border"+oe[s]+"Width",!0,i):a+=k.css(e,"border"+oe[s]+"Width",!0,i))
return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-a-.5))||0),u}function it(e,t,n){var r=qe(e),i=(!m.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,s=Ve(e,t,r),a="offset"+t[0].toUpperCase()+t.slice(1)
if(ze.test(s)){if(!n)return s
s="auto"}return(!m.boxSizingReliable()&&i||!m.reliableTrDimensions()&&N(e,"tr")||"auto"===s||!parseFloat(s)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+rt(e,t,n||(i?"border":"content"),o,r,s)+"px"}function ot(e,t,n,r,i){return new ot.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ve(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=K(t),u=Fe.test(t),l=e.style
if(u||(t=Ye(a)),s=k.cssHooks[t]||k.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:l[t]
"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ce(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[a]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,s,a=K(t)
return Fe.test(t)||(t=Ye(a)),(s=k.cssHooks[t]||k.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=Ve(e,t,r)),"normal"===i&&t in tt&&(i=tt[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],(function(e,t){k.cssHooks[t]={get:function(e,n,r){if(n)return!Je.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?it(e,t,r):He(e,et,(function(){return it(e,t,r)}))},set:function(e,n,r){var i,o=qe(e),s=!m.scrollboxSize()&&"absolute"===o.position,a=(s||r)&&"border-box"===k.css(e,"boxSizing",!1,o),u=r?rt(e,t,r,a,o):0
return a&&s&&(u-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-rt(e,t,"border",!1,o)-.5)),u&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=k.css(e,t)),nt(0,n,u)}}})),k.cssHooks.marginLeft=Ze(m.reliableMarginLeft,(function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-He(e,{marginLeft:0},(function(){return e.getBoundingClientRect().left})))+"px"})),k.each({margin:"",padding:"",border:"Width"},(function(e,t){k.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0]
return i}},"margin"!==e&&(k.cssHooks[e+t].set=nt)})),k.fn.extend({css:function(e,t){return U(this,(function(e,t,n){var r,i,o={},s=0
if(Array.isArray(t)){for(r=qe(e),i=t.length;s<i;s++)o[t[s]]=k.css(e,t[s],!1,r)
return o}return void 0!==n?k.style(e,t,n):k.css(e,t)}),e,t,arguments.length>1)}}),k.Tween=ot,ot.prototype={constructor:ot,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=ot.propHooks[this.prop]
return e&&e.get?e.get(this):ot.propHooks._default.get(this)},run:function(e){var t,n=ot.propHooks[this.prop]
return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ye(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=ot.prototype.init,k.fx.step={}
var st,at,ut=/^(?:toggle|show|hide)$/,lt=/queueHooks$/
function ct(){at&&(!1===b.hidden&&r.requestAnimationFrame?r.requestAnimationFrame(ct):r.setTimeout(ct,k.fx.interval),k.fx.tick())}function ft(){return r.setTimeout((function(){st=void 0})),st=Date.now()}function ht(e,t){var n,r=0,i={height:e}
for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,s=i.length;o<s;o++)if(r=i[o].call(n,t,e))return r}function dt(e,t,n){var r,i,o=0,s=dt.prefilters.length,a=k.Deferred().always((function(){delete u.elem})),u=function(){if(i)return!1
for(var t=st||ft(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;o<s;o++)l.tweens[o].run(r)
return a.notifyWith(e,[l,r,n]),r<1&&s?n:(s||a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:k.extend({},t),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},n),originalProperties:t,originalOptions:n,startTime:st||ft(),duration:n.duration,tweens:[],createTween:function(t,n){var r=k.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;n<r;n++)l.tweens[n].run(1)
return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,i,o,s
for(n in e)if(i=t[r=K(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=k.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,l.opts.specialEasing);o<s;o++)if(r=dt.prefilters[o].call(l,e,c,l.opts))return v(r.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r
return k.map(c,pt,l),v(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return ce(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){v(e)?(t=e,e=["*"]):e=e.match($)
for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,u,l,c,f="width"in t||"height"in t,h=this,p={},d=e.style,g=e.nodeType&&le(e),m=Y.get(e,"fxshow")
for(r in n.queue||(null==(s=k._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,h.always((function(){h.always((function(){s.unqueued--,k.queue(e,"fx").length||s.empty.fire()}))}))),t)if(i=t[r],ut.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue
g=!0}p[r]=m&&m[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(p))for(r in f&&1===e.nodeType&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],null==(l=m&&m.display)&&(l=Y.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(pe([e],!0),l=e.style.display||l,c=k.css(e,"display"),pe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(h.done((function(){d.display=l})),null==l&&(c=d.display,l="none"===c?"":c)),d.display="inline-block")),n.overflow&&(d.overflow="hidden",h.always((function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}))),u=!1,p)u||(m?"hidden"in m&&(g=m.hidden):m=Y.access(e,"fxshow",{display:l}),o&&(m.hidden=!g),g&&pe([e],!0),h.done((function(){for(r in g||pe([e]),Y.remove(e,"fxshow"),p)k.style(e,r,p[r])}))),u=pt(g?m[r]:0,r,h),r in m||(m[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||v(e)&&e,duration:e,easing:n&&t||t&&!v(t)&&t}
return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){v(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(le).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=k.isEmptyObject(e),o=k.speed(t,n,r),s=function(){var t=dt(this,k.extend({},e),o);(i||Y.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each((function(){var t=!0,i=null!=e&&e+"queueHooks",o=k.timers,s=Y.get(this)
if(i)s[i]&&s[i].stop&&r(s[i])
else for(i in s)s[i]&&s[i].stop&&lt.test(i)&&r(s[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
!t&&n||k.dequeue(this,e)}))},finish:function(e){return!1!==e&&(e=e||"fx"),this.each((function(){var t,n=Y.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=k.timers,s=r?r.length:0
for(n.finish=!0,k.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<s;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish}))}}),k.each(["toggle","show","hide"],(function(e,t){var n=k.fn[t]
k.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ht(t,!0),e,r,i)}})),k.each({slideDown:ht("show"),slideUp:ht("hide"),slideToggle:ht("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},(function(e,t){k.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}})),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers
for(st=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||k.fx.stop(),st=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){at||(at=!0,ct())},k.fx.stop=function(){at=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(e,t){return e=k.fx&&k.fx.speeds[e]||e,t=t||"fx",this.queue(t,(function(t,n){var i=r.setTimeout(t,e)
n.stop=function(){r.clearTimeout(i)}}))},function(){var e=b.createElement("input"),t=b.createElement("select").appendChild(b.createElement("option"))
e.type="checkbox",m.checkOn=""!==e.value,m.optSelected=t.selected,(e=b.createElement("input")).value="t",e.type="radio",m.radioValue="t"===e.value}()
var gt,mt=k.expr.attrHandle
k.fn.extend({attr:function(e,t){return U(this,k.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each((function(){k.removeAttr(this,e)}))}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?gt:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&N(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match($)
if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),gt={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),(function(e,t){var n=mt[t]||k.find.attr
mt[t]=function(e,t,r){var i,o,s=t.toLowerCase()
return r||(o=mt[s],mt[s]=i,i=null!=n(e,t,r)?s:null,mt[s]=o),i}}))
var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i
function bt(e){return(e.match($)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function wt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match($)||[]}k.fn.extend({prop:function(e,t){return U(this,k.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each((function(){delete this[k.propFix[e]||e]}))}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex")
return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],(function(){k.propFix[this.toLowerCase()]=this})),k.fn.extend({addClass:function(e){var t,n,r,i,o,s
return v(e)?this.each((function(t){k(this).addClass(e.call(this,t,xt(this)))})):(t=wt(e)).length?this.each((function(){if(r=xt(this),n=1===this.nodeType&&" "+bt(r)+" "){for(o=0;o<t.length;o++)i=t[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ")
s=bt(n),r!==s&&this.setAttribute("class",s)}})):this},removeClass:function(e){var t,n,r,i,o,s
return v(e)?this.each((function(t){k(this).removeClass(e.call(this,t,xt(this)))})):arguments.length?(t=wt(e)).length?this.each((function(){if(r=xt(this),n=1===this.nodeType&&" "+bt(r)+" "){for(o=0;o<t.length;o++)for(i=t[o];n.indexOf(" "+i+" ")>-1;)n=n.replace(" "+i+" "," ")
s=bt(n),r!==s&&this.setAttribute("class",s)}})):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o,s=typeof e,a="string"===s||Array.isArray(e)
return v(e)?this.each((function(n){k(this).toggleClass(e.call(this,n,xt(this),t),t)})):"boolean"==typeof t&&a?t?this.addClass(e):this.removeClass(e):(n=wt(e),this.each((function(){if(a)for(o=k(this),i=0;i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r)
else void 0!==e&&"boolean"!==s||((r=xt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===e?"":Y.get(this,"__className__")||""))})))},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+bt(xt(n))+" ").indexOf(t)>-1)return!0
return!1}})
var _t=/\r/g
k.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=v(e),this.each((function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,k(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=k.map(i,(function(e){return null==e?"":e+""}))),(t=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))}))):i?(t=k.valHooks[i.type]||k.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(_t,""):null==n?"":n:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value")
return null!=t?t:bt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],u=s?o+1:i.length
for(r=o<0?u:s?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=k(n).val(),s)return t
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=k.makeArray(t),s=i.length;s--;)((r=i[s]).selected=k.inArray(k.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],(function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=k.inArray(k(e).val(),t)>-1}},m.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})),m.focusin="onfocusin"in r
var Et=/^(?:focusinfocus|focusoutblur)$/,kt=function(e){e.stopPropagation()}
k.extend(k.event,{trigger:function(e,t,n,i){var o,s,a,u,l,c,f,h,d=[n||b],g=p.call(e,"type")?e.type:e,m=p.call(e,"namespace")?e.namespace.split("."):[]
if(s=h=a=n=n||b,3!==n.nodeType&&8!==n.nodeType&&!Et.test(g+k.event.triggered)&&(g.indexOf(".")>-1&&(m=g.split("."),g=m.shift(),m.sort()),l=g.indexOf(":")<0&&"on"+g,(e=e[k.expando]?e:new k.Event(g,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=m.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),f=k.event.special[g]||{},i||!f.trigger||!1!==f.trigger.apply(n,t))){if(!i&&!f.noBubble&&!y(n)){for(u=f.delegateType||g,Et.test(u+g)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s
a===(n.ownerDocument||b)&&d.push(a.defaultView||a.parentWindow||r)}for(o=0;(s=d[o++])&&!e.isPropagationStopped();)h=s,e.type=o>1?u:f.bindType||g,(c=(Y.get(s,"events")||Object.create(null))[e.type]&&Y.get(s,"handle"))&&c.apply(s,t),(c=l&&s[l])&&c.apply&&X(s)&&(e.result=c.apply(s,t),!1===e.result&&e.preventDefault())
return e.type=g,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),t)||!X(n)||l&&v(n[g])&&!y(n)&&((a=n[l])&&(n[l]=null),k.event.triggered=g,e.isPropagationStopped()&&h.addEventListener(g,kt),n[g](),e.isPropagationStopped()&&h.removeEventListener(g,kt),k.event.triggered=void 0,a&&(n[l]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0})
k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each((function(){k.event.trigger(e,t,this)}))},triggerHandler:function(e,t){var n=this[0]
if(n)return k.event.trigger(e,t,n,!0)}}),m.focusin||k.each({focus:"focusin",blur:"focusout"},(function(e,t){var n=function(e){k.event.simulate(t,e.target,k.event.fix(e))}
k.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=Y.access(r,t)
i||r.addEventListener(e,n,!0),Y.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=Y.access(r,t)-1
i?Y.access(r,t,i):(r.removeEventListener(e,n,!0),Y.remove(r,t))}}}))
var St=r.location,Tt={guid:Date.now()},Ot=/\?/
k.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{t=(new r.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||k.error("Invalid XML: "+(n?k.map(n.childNodes,(function(e){return e.textContent})).join("\n"):e)),t}
var At=/\[\]$/,Ct=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i
function Rt(e,t,n,r){var i
if(Array.isArray(t))k.each(t,(function(t,i){n||At.test(e)?r(e,i):Rt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)}))
else if(n||"object"!==_(t))r(e,t)
else for(i in t)Rt(e+"["+i+"]",t[i],n,r)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=v(t)?t():t
r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
if(null==e)return""
if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,(function(){i(this.name,this.value)}))
else for(n in e)Rt(n,e[n],t,i)
return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map((function(){var e=k.prop(this,"elements")
return e?k.makeArray(e):this})).filter((function(){var e=this.type
return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!me.test(e))})).map((function(e,t){var n=k(this).val()
return null==n?null:Array.isArray(n)?k.map(n,(function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}})):{name:t.name,value:n.replace(Ct,"\r\n")}})).get()}})
var Lt=/%20/g,Pt=/#.*$/,It=/([?&])_=[^&]*/,Dt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Mt=/^(?:GET|HEAD)$/,$t=/^\/\//,Bt={},zt={},Ft="*/".concat("*"),qt=b.createElement("a")
function Ht(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match($)||[]
if(v(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Qt(e,t,n,r){var i={},o=e===zt
function s(a){var u
return i[a]=!0,k.each(e[a]||[],(function(e,a){var l=a(t,n,r)
return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),s(l),!1)})),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function Ut(e,t){var n,r,i=k.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&k.extend(!0,e,r),e}qt.href=St.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:St.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ft,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ut(Ut(e,k.ajaxSettings),t):Ut(k.ajaxSettings,e)},ajaxPrefilter:Ht(Bt),ajaxTransport:Ht(zt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{}
var n,i,o,s,a,u,l,c,f,h,p=k.ajaxSetup({},t),d=p.context||p,g=p.context&&(d.nodeType||d.jquery)?k(d):k.event,m=k.Deferred(),v=k.Callbacks("once memory"),y=p.statusCode||{},x={},w={},_="canceled",E={readyState:0,getResponseHeader:function(e){var t
if(l){if(!s)for(s={};t=Dt.exec(o);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2])
t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==l&&(p.mimeType=e),this},statusCode:function(e){var t
if(e)if(l)E.always(e[E.status])
else for(t in e)y[t]=[y[t],e[t]]
return this},abort:function(e){var t=e||_
return n&&n.abort(t),S(0,t),this}}
if(m.promise(E),p.url=((e||p.url||St.href)+"").replace($t,St.protocol+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=(p.dataType||"*").toLowerCase().match($)||[""],null==p.crossDomain){u=b.createElement("a")
try{u.href=p.url,u.href=u.href,p.crossDomain=qt.protocol+"//"+qt.host!=u.protocol+"//"+u.host}catch(e){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=k.param(p.data,p.traditional)),Qt(Bt,p,t,E),l)return E
for(f in(c=k.event&&p.global)&&0==k.active++&&k.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Mt.test(p.type),i=p.url.replace(Pt,""),p.hasContent?p.data&&p.processData&&0===(p.contentType||"").indexOf("application/x-www-form-urlencoded")&&(p.data=p.data.replace(Lt,"+")):(h=p.url.slice(i.length),p.data&&(p.processData||"string"==typeof p.data)&&(i+=(Ot.test(i)?"&":"?")+p.data,delete p.data),!1===p.cache&&(i=i.replace(It,"$1"),h=(Ot.test(i)?"&":"?")+"_="+Tt.guid+++h),p.url=i+h),p.ifModified&&(k.lastModified[i]&&E.setRequestHeader("If-Modified-Since",k.lastModified[i]),k.etag[i]&&E.setRequestHeader("If-None-Match",k.etag[i])),(p.data&&p.hasContent&&!1!==p.contentType||t.contentType)&&E.setRequestHeader("Content-Type",p.contentType),E.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Ft+"; q=0.01":""):p.accepts["*"]),p.headers)E.setRequestHeader(f,p.headers[f])
if(p.beforeSend&&(!1===p.beforeSend.call(d,E,p)||l))return E.abort()
if(_="abort",v.add(p.complete),E.done(p.success),E.fail(p.error),n=Qt(zt,p,t,E)){if(E.readyState=1,c&&g.trigger("ajaxSend",[E,p]),l)return E
p.async&&p.timeout>0&&(a=r.setTimeout((function(){E.abort("timeout")}),p.timeout))
try{l=!1,n.send(x,S)}catch(e){if(l)throw e
S(-1,e)}}else S(-1,"No Transport")
function S(e,t,s,u){var f,h,b,x,w,_=t
l||(l=!0,a&&r.clearTimeout(a),n=void 0,o=u||"",E.readyState=e>0?4:0,f=e>=200&&e<300||304===e,s&&(x=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}s||(s=i)}o=o||s}if(o)return o!==u[0]&&u.unshift(o),n[o]}(p,E,s)),!f&&k.inArray("script",p.dataTypes)>-1&&k.inArray("json",p.dataTypes)<0&&(p.converters["text script"]=function(){}),x=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice()
if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]))
break}if(!0!==s)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(p,x,E,f),f?(p.ifModified&&((w=E.getResponseHeader("Last-Modified"))&&(k.lastModified[i]=w),(w=E.getResponseHeader("etag"))&&(k.etag[i]=w)),204===e||"HEAD"===p.type?_="nocontent":304===e?_="notmodified":(_=x.state,h=x.data,f=!(b=x.error))):(b=_,!e&&_||(_="error",e<0&&(e=0))),E.status=e,E.statusText=(t||_)+"",f?m.resolveWith(d,[h,_,E]):m.rejectWith(d,[E,_,b]),E.statusCode(y),y=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[E,p,f?h:b]),v.fireWith(d,[E,_]),c&&(g.trigger("ajaxComplete",[E,p]),--k.active||k.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],(function(e,t){k[t]=function(e,n,r,i){return v(n)&&(i=i||r,r=n,n=void 0),k.ajax(k.extend({url:e,type:t,dataType:i,data:n,success:r},k.isPlainObject(e)&&e))}})),k.ajaxPrefilter((function(e){var t
for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")})),k._evalUrl=function(e,t,n){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t,n)}})},k.fn.extend({wrapAll:function(e){var t
return this[0]&&(v(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map((function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e})).append(this)),this},wrapInner:function(e){return v(e)?this.each((function(t){k(this).wrapInner(e.call(this,t))})):this.each((function(){var t=k(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)}))},wrap:function(e){var t=v(e)
return this.each((function(n){k(this).wrapAll(t?e.call(this,n):e)}))},unwrap:function(e){return this.parent(e).not("body").each((function(){k(this).replaceWith(this.childNodes)})),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch(e){}}
var Wt={0:200,1223:204},Vt=k.ajaxSettings.xhr()
m.cors=!!Vt&&"withCredentials"in Vt,m.ajax=Vt=!!Vt,k.ajaxTransport((function(e){var t,n
if(m.cors||Vt&&!e.crossDomain)return{send:function(i,o){var s,a=e.xhr()
if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(s in e.xhrFields)a[s]=e.xhrFields[s]
for(s in e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)a.setRequestHeader(s,i[s])
t=function(e){return function(){t&&(t=n=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?o(0,"error"):o(a.status,a.statusText):o(Wt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=t(),n=a.onerror=a.ontimeout=t("error"),void 0!==a.onabort?a.onabort=n:a.onreadystatechange=function(){4===a.readyState&&r.setTimeout((function(){t&&n()}))},t=t("abort")
try{a.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}})),k.ajaxPrefilter((function(e){e.crossDomain&&(e.contents.script=!1)})),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",(function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")})),k.ajaxTransport("script",(function(e){var t,n
if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=k("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),b.head.appendChild(t[0])},abort:function(){n&&n()}}}))
var Zt,Kt=[],Xt=/(=)\?(?=&|$)|\?\?/
k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Kt.pop()||k.expando+"_"+Tt.guid++
return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",(function(e,t,n){var i,o,s,a=!1!==e.jsonp&&(Xt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Xt.test(e.data)&&"data")
if(a||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=v(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Xt,"$1"+i):!1!==e.jsonp&&(e.url+=(Ot.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return s||k.error(i+" was not called"),s[0]},e.dataTypes[0]="json",o=r[i],r[i]=function(){s=arguments},n.always((function(){void 0===o?k(r).removeProp(i):r[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Kt.push(i)),s&&v(o)&&o(s[0]),s=o=void 0})),"script"})),m.createHTMLDocument=((Zt=b.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Zt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((r=(t=b.implementation.createHTMLDocument("")).createElement("base")).href=b.location.href,t.head.appendChild(r)):t=b),o=!n&&[],(i=j.exec(e))?[t.createElement(i[1])]:(i=Ee([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)))
var r,i,o},k.fn.load=function(e,t,n){var r,i,o,s=this,a=e.indexOf(" ")
return a>-1&&(r=bt(e.slice(a)),e=e.slice(0,a)),v(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done((function(e){o=arguments,s.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)})).always(n&&function(e,t){s.each((function(){n.apply(this,o||[e.responseText,t,e])}))}),this},k.expr.pseudos.animated=function(e){return k.grep(k.timers,(function(t){return e===t.elem})).length},k.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=k.css(e,"position"),c=k(e),f={}
"static"===l&&(e.style.position="relative"),a=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),v(t)&&(t=t.call(e,n,k.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each((function(t){k.offset.setOffset(this,e,t)}))
var t,n,r=this[0]
return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0}
if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect()
else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position");)e=e.parentNode
e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map((function(){for(var e=this.offsetParent;e&&"static"===k.css(e,"position");)e=e.offsetParent
return e||se}))}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},(function(e,t){var n="pageYOffset"===t
k.fn[e]=function(r){return U(this,(function(e,r,i){var o
if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r]
o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i}),e,r,arguments.length)}})),k.each(["top","left"],(function(e,t){k.cssHooks[t]=Ze(m.pixelPosition,(function(e,n){if(n)return n=Ve(e,t),ze.test(n)?k(e).position()[t]+"px":n}))})),k.each({Height:"height",Width:"width"},(function(e,t){k.each({padding:"inner"+e,content:t,"":"outer"+e},(function(n,r){k.fn[r]=function(i,o){var s=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===o?"margin":"border")
return U(this,(function(t,n,i){var o
return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?k.css(t,n,a):k.style(t,n,i,a)}),t,s?i:void 0,s)}}))})),k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],(function(e,t){k.fn[t]=function(e){return this.on(t,e)}})),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),(function(e,t){k.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}))
var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
k.proxy=function(e,t){var n,r,i
if("string"==typeof t&&(n=e[t],t=e,e=n),v(e))return r=a.call(arguments,2),i=function(){return e.apply(t||this,r.concat(a.call(arguments)))},i.guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=N,k.isFunction=v,k.isWindow=y,k.camelCase=K,k.type=_,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e)
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},k.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},void 0===(n=function(){return k}.apply(t,[]))||(e.exports=n)
var Yt=r.jQuery,Jt=r.$
return k.noConflict=function(e){return r.$===k&&(r.$=Jt),e&&r.jQuery===k&&(r.jQuery=Yt),k},void 0===i&&(r.jQuery=r.$=k),k}))},77:function(e,t,n){var r
e=n.nmd(e),function(){var i,o="Expected a function",s="__lodash_hash_undefined__",a="__lodash_placeholder__",u=32,l=128,c=1/0,f=9007199254740991,h=NaN,p=4294967295,d=[["ary",l],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",u],["partialRight",64],["rearg",256]],g="[object Arguments]",m="[object Array]",v="[object Boolean]",y="[object Date]",b="[object Error]",x="[object Function]",w="[object GeneratorFunction]",_="[object Map]",E="[object Number]",k="[object Object]",S="[object Promise]",T="[object RegExp]",O="[object Set]",A="[object String]",C="[object Symbol]",N="[object WeakMap]",j="[object ArrayBuffer]",R="[object DataView]",L="[object Float32Array]",P="[object Float64Array]",I="[object Int8Array]",D="[object Int16Array]",M="[object Int32Array]",$="[object Uint8Array]",B="[object Uint8ClampedArray]",z="[object Uint16Array]",F="[object Uint32Array]",q=/\b__p \+= '';/g,H=/\b(__p \+=) '' \+/g,Q=/(__e\(.*?\)|\b__t\)) \+\n'';/g,U=/&(?:amp|lt|gt|quot|#39);/g,W=/[&<>"']/g,V=RegExp(U.source),Z=RegExp(W.source),K=/<%-([\s\S]+?)%>/g,X=/<%([\s\S]+?)%>/g,G=/<%=([\s\S]+?)%>/g,Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/,ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,te=/[\\^$.*+?()[\]{}|]/g,ne=RegExp(te.source),re=/^\s+/,ie=/\s/,oe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,se=/\{\n\/\* \[wrapped with (.+)\] \*/,ae=/,? & /,ue=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,le=/[()=,{}\[\]\/\s]/,ce=/\\(\\)?/g,fe=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,he=/\w*$/,pe=/^[-+]0x[0-9a-f]+$/i,de=/^0b[01]+$/i,ge=/^\[object .+?Constructor\]$/,me=/^0o[0-7]+$/i,ve=/^(?:0|[1-9]\d*)$/,ye=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,be=/($^)/,xe=/['\n\r\u2028\u2029\\]/g,we="\\ud800-\\udfff",_e="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Ee="\\u2700-\\u27bf",ke="a-z\\xdf-\\xf6\\xf8-\\xff",Se="A-Z\\xc0-\\xd6\\xd8-\\xde",Te="\\ufe0e\\ufe0f",Oe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ae="["+we+"]",Ce="["+Oe+"]",Ne="["+_e+"]",je="\\d+",Re="["+Ee+"]",Le="["+ke+"]",Pe="[^"+we+Oe+je+Ee+ke+Se+"]",Ie="\\ud83c[\\udffb-\\udfff]",De="[^"+we+"]",Me="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",Be="["+Se+"]",ze="\\u200d",Fe="(?:"+Le+"|"+Pe+")",qe="(?:"+Be+"|"+Pe+")",He="(?:['’](?:d|ll|m|re|s|t|ve))?",Qe="(?:['’](?:D|LL|M|RE|S|T|VE))?",Ue="(?:"+Ne+"|"+Ie+")?",We="["+Te+"]?",Ve=We+Ue+"(?:"+ze+"(?:"+[De,Me,$e].join("|")+")"+We+Ue+")*",Ze="(?:"+[Re,Me,$e].join("|")+")"+Ve,Ke="(?:"+[De+Ne+"?",Ne,Me,$e,Ae].join("|")+")",Xe=RegExp("['’]","g"),Ge=RegExp(Ne,"g"),Ye=RegExp(Ie+"(?="+Ie+")|"+Ke+Ve,"g"),Je=RegExp([Be+"?"+Le+"+"+He+"(?="+[Ce,Be,"$"].join("|")+")",qe+"+"+Qe+"(?="+[Ce,Be+Fe,"$"].join("|")+")",Be+"?"+Fe+"+"+He,Be+"+"+Qe,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",je,Ze].join("|"),"g"),et=RegExp("["+ze+we+_e+Te+"]"),tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,nt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],rt=-1,it={}
it[L]=it[P]=it[I]=it[D]=it[M]=it[$]=it[B]=it[z]=it[F]=!0,it[g]=it[m]=it[j]=it[v]=it[R]=it[y]=it[b]=it[x]=it[_]=it[E]=it[k]=it[T]=it[O]=it[A]=it[N]=!1
var ot={}
ot[g]=ot[m]=ot[j]=ot[R]=ot[v]=ot[y]=ot[L]=ot[P]=ot[I]=ot[D]=ot[M]=ot[_]=ot[E]=ot[k]=ot[T]=ot[O]=ot[A]=ot[C]=ot[$]=ot[B]=ot[z]=ot[F]=!0,ot[b]=ot[x]=ot[N]=!1
var st={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},at=parseFloat,ut=parseInt,lt="object"==typeof global&&global&&global.Object===Object&&global,ct="object"==typeof self&&self&&self.Object===Object&&self,ft=lt||ct||Function("return this")(),ht=t&&!t.nodeType&&t,pt=ht&&e&&!e.nodeType&&e,dt=pt&&pt.exports===ht,gt=dt&&lt.process,mt=function(){try{return pt&&pt.require&&pt.require("util").types||gt&&gt.binding&&gt.binding("util")}catch(e){}}(),vt=mt&&mt.isArrayBuffer,yt=mt&&mt.isDate,bt=mt&&mt.isMap,xt=mt&&mt.isRegExp,wt=mt&&mt.isSet,_t=mt&&mt.isTypedArray
function Et(e,t,n){switch(n.length){case 0:return e.call(t)
case 1:return e.call(t,n[0])
case 2:return e.call(t,n[0],n[1])
case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function kt(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var s=e[i]
t(r,s,n(s),e)}return r}function St(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Tt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Ot(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1
return!0}function At(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var s=e[n]
t(s,n,e)&&(o[i++]=s)}return o}function Ct(e,t){return!(null==e||!e.length)&&Bt(e,t,0)>-1}function Nt(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0
return!1}function jt(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e)
return i}function Rt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n]
return e}function Lt(e,t,n,r){var i=-1,o=null==e?0:e.length
for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e)
return n}function Pt(e,t,n,r){var i=null==e?0:e.length
for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e)
return n}function It(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0
return!1}var Dt=Ht("length")
function Mt(e,t,n){var r
return n(e,(function(e,n,i){if(t(e,n,i))return r=n,!1})),r}function $t(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o
return-1}function Bt(e,t,n){return t==t?function(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r
return-1}(e,t,n):$t(e,Ft,n)}function zt(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i
return-1}function Ft(e){return e!=e}function qt(e,t){var n=null==e?0:e.length
return n?Wt(e,t)/n:h}function Ht(e){return function(t){return null==t?i:t[e]}}function Qt(e){return function(t){return null==e?i:e[t]}}function Ut(e,t,n,r,i){return i(e,(function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)})),n}function Wt(e,t){for(var n,r=-1,o=e.length;++r<o;){var s=t(e[r])
s!==i&&(n=n===i?s:n+s)}return n}function Vt(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n)
return r}function Zt(e){return e?e.slice(0,fn(e)+1).replace(re,""):e}function Kt(e){return function(t){return e(t)}}function Xt(e,t){return jt(t,(function(t){return e[t]}))}function Gt(e,t){return e.has(t)}function Yt(e,t){for(var n=-1,r=e.length;++n<r&&Bt(t,e[n],0)>-1;);return n}function Jt(e,t){for(var n=e.length;n--&&Bt(t,e[n],0)>-1;);return n}var en=Qt({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),tn=Qt({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})
function nn(e){return"\\"+st[e]}function rn(e){return et.test(e)}function on(e){var t=-1,n=Array(e.size)
return e.forEach((function(e,r){n[++t]=[r,e]})),n}function sn(e,t){return function(n){return e(t(n))}}function an(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n]
s!==t&&s!==a||(e[n]=a,o[i++]=n)}return o}function un(e){var t=-1,n=Array(e.size)
return e.forEach((function(e){n[++t]=e})),n}function ln(e){return rn(e)?function(e){for(var t=Ye.lastIndex=0;Ye.test(e);)++t
return t}(e):Dt(e)}function cn(e){return rn(e)?function(e){return e.match(Ye)||[]}(e):function(e){return e.split("")}(e)}function fn(e){for(var t=e.length;t--&&ie.test(e.charAt(t)););return t}var hn=Qt({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),pn=function e(t){var n,r=(t=null==t?ft:pn.defaults(ft.Object(),t,pn.pick(ft,nt))).Array,ie=t.Date,we=t.Error,_e=t.Function,Ee=t.Math,ke=t.Object,Se=t.RegExp,Te=t.String,Oe=t.TypeError,Ae=r.prototype,Ce=_e.prototype,Ne=ke.prototype,je=t["__core-js_shared__"],Re=Ce.toString,Le=Ne.hasOwnProperty,Pe=0,Ie=(n=/[^.]+$/.exec(je&&je.keys&&je.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",De=Ne.toString,Me=Re.call(ke),$e=ft._,Be=Se("^"+Re.call(Le).replace(te,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ze=dt?t.Buffer:i,Fe=t.Symbol,qe=t.Uint8Array,He=ze?ze.allocUnsafe:i,Qe=sn(ke.getPrototypeOf,ke),Ue=ke.create,We=Ne.propertyIsEnumerable,Ve=Ae.splice,Ze=Fe?Fe.isConcatSpreadable:i,Ke=Fe?Fe.iterator:i,Ye=Fe?Fe.toStringTag:i,et=function(){try{var e=ao(ke,"defineProperty")
return e({},"",{}),e}catch(e){}}(),st=t.clearTimeout!==ft.clearTimeout&&t.clearTimeout,lt=ie&&ie.now!==ft.Date.now&&ie.now,ct=t.setTimeout!==ft.setTimeout&&t.setTimeout,ht=Ee.ceil,pt=Ee.floor,gt=ke.getOwnPropertySymbols,mt=ze?ze.isBuffer:i,Dt=t.isFinite,Qt=Ae.join,dn=sn(ke.keys,ke),gn=Ee.max,mn=Ee.min,vn=ie.now,yn=t.parseInt,bn=Ee.random,xn=Ae.reverse,wn=ao(t,"DataView"),_n=ao(t,"Map"),En=ao(t,"Promise"),kn=ao(t,"Set"),Sn=ao(t,"WeakMap"),Tn=ao(ke,"create"),On=Sn&&new Sn,An={},Cn=Do(wn),Nn=Do(_n),jn=Do(En),Rn=Do(kn),Ln=Do(Sn),Pn=Fe?Fe.prototype:i,In=Pn?Pn.valueOf:i,Dn=Pn?Pn.toString:i
function Mn(e){if(Js(e)&&!qs(e)&&!(e instanceof Fn)){if(e instanceof zn)return e
if(Le.call(e,"__wrapped__"))return Mo(e)}return new zn(e)}var $n=function(){function e(){}return function(t){if(!Ys(t))return{}
if(Ue)return Ue(t)
e.prototype=t
var n=new e
return e.prototype=i,n}}()
function Bn(){}function zn(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function Fn(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=p,this.__views__=[]}function qn(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}function Hn(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}function Qn(e){var t=-1,n=null==e?0:e.length
for(this.clear();++t<n;){var r=e[t]
this.set(r[0],r[1])}}function Un(e){var t=-1,n=null==e?0:e.length
for(this.__data__=new Qn;++t<n;)this.add(e[t])}function Wn(e){var t=this.__data__=new Hn(e)
this.size=t.size}function Vn(e,t){var n=qs(e),r=!n&&Fs(e),i=!n&&!r&&Ws(e),o=!n&&!r&&!i&&aa(e),s=n||r||i||o,a=s?Vt(e.length,Te):[],u=a.length
for(var l in e)!t&&!Le.call(e,l)||s&&("length"==l||i&&("offset"==l||"parent"==l)||o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||go(l,u))||a.push(l)
return a}function Zn(e){var t=e.length
return t?e[Qr(0,t-1)]:i}function Kn(e,t){return jo(Si(e),ir(t,0,e.length))}function Xn(e){return jo(Si(e))}function Gn(e,t,n){(n!==i&&!$s(e[t],n)||n===i&&!(t in e))&&nr(e,t,n)}function Yn(e,t,n){var r=e[t]
Le.call(e,t)&&$s(r,n)&&(n!==i||t in e)||nr(e,t,n)}function Jn(e,t){for(var n=e.length;n--;)if($s(e[n][0],t))return n
return-1}function er(e,t,n,r){return lr(e,(function(e,i,o){t(r,e,n(e),o)})),r}function tr(e,t){return e&&Ti(t,Ca(t),e)}function nr(e,t,n){"__proto__"==t&&et?et(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function rr(e,t){for(var n=-1,o=t.length,s=r(o),a=null==e;++n<o;)s[n]=a?i:ka(e,t[n])
return s}function ir(e,t,n){return e==e&&(n!==i&&(e=e<=n?e:n),t!==i&&(e=e>=t?e:t)),e}function or(e,t,n,r,o,s){var a,u=1&t,l=2&t,c=4&t
if(n&&(a=o?n(e,r,o,s):n(e)),a!==i)return a
if(!Ys(e))return e
var f=qs(e)
if(f){if(a=function(e){var t=e.length,n=new e.constructor(t)
return t&&"string"==typeof e[0]&&Le.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(e),!u)return Si(e,a)}else{var h=co(e),p=h==x||h==w
if(Ws(e))return bi(e,u)
if(h==k||h==g||p&&!o){if(a=l||p?{}:ho(e),!u)return l?function(e,t){return Ti(e,lo(e),t)}(e,function(e,t){return e&&Ti(t,Na(t),e)}(a,e)):function(e,t){return Ti(e,uo(e),t)}(e,tr(a,e))}else{if(!ot[h])return o?e:{}
a=function(e,t,n){var r,i=e.constructor
switch(t){case j:return xi(e)
case v:case y:return new i(+e)
case R:return function(e,t){var n=t?xi(e.buffer):e.buffer
return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n)
case L:case P:case I:case D:case M:case $:case B:case z:case F:return wi(e,n)
case _:return new i
case E:case A:return new i(e)
case T:return function(e){var t=new e.constructor(e.source,he.exec(e))
return t.lastIndex=e.lastIndex,t}(e)
case O:return new i
case C:return r=e,In?ke(In.call(r)):{}}}(e,h,u)}}s||(s=new Wn)
var d=s.get(e)
if(d)return d
s.set(e,a),ia(e)?e.forEach((function(r){a.add(or(r,t,n,r,e,s))})):ea(e)&&e.forEach((function(r,i){a.set(i,or(r,t,n,i,e,s))}))
var m=f?i:(c?l?eo:Ji:l?Na:Ca)(e)
return St(m||e,(function(r,i){m&&(r=e[i=r]),Yn(a,i,or(r,t,n,i,e,s))})),a}function sr(e,t,n){var r=n.length
if(null==e)return!r
for(e=ke(e);r--;){var o=n[r],s=t[o],a=e[o]
if(a===i&&!(o in e)||!s(a))return!1}return!0}function ar(e,t,n){if("function"!=typeof e)throw new Oe(o)
return Oo((function(){e.apply(i,n)}),t)}function ur(e,t,n,r){var i=-1,o=Ct,s=!0,a=e.length,u=[],l=t.length
if(!a)return u
n&&(t=jt(t,Kt(n))),r?(o=Nt,s=!1):t.length>=200&&(o=Gt,s=!1,t=new Un(t))
e:for(;++i<a;){var c=e[i],f=null==n?c:n(c)
if(c=r||0!==c?c:0,s&&f==f){for(var h=l;h--;)if(t[h]===f)continue e
u.push(c)}else o(t,f,r)||u.push(c)}return u}Mn.templateSettings={escape:K,evaluate:X,interpolate:G,variable:"",imports:{_:Mn}},Mn.prototype=Bn.prototype,Mn.prototype.constructor=Mn,zn.prototype=$n(Bn.prototype),zn.prototype.constructor=zn,Fn.prototype=$n(Bn.prototype),Fn.prototype.constructor=Fn,qn.prototype.clear=function(){this.__data__=Tn?Tn(null):{},this.size=0},qn.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e]
return this.size-=t?1:0,t},qn.prototype.get=function(e){var t=this.__data__
if(Tn){var n=t[e]
return n===s?i:n}return Le.call(t,e)?t[e]:i},qn.prototype.has=function(e){var t=this.__data__
return Tn?t[e]!==i:Le.call(t,e)},qn.prototype.set=function(e,t){var n=this.__data__
return this.size+=this.has(e)?0:1,n[e]=Tn&&t===i?s:t,this},Hn.prototype.clear=function(){this.__data__=[],this.size=0},Hn.prototype.delete=function(e){var t=this.__data__,n=Jn(t,e)
return!(n<0||(n==t.length-1?t.pop():Ve.call(t,n,1),--this.size,0))},Hn.prototype.get=function(e){var t=this.__data__,n=Jn(t,e)
return n<0?i:t[n][1]},Hn.prototype.has=function(e){return Jn(this.__data__,e)>-1},Hn.prototype.set=function(e,t){var n=this.__data__,r=Jn(n,e)
return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Qn.prototype.clear=function(){this.size=0,this.__data__={hash:new qn,map:new(_n||Hn),string:new qn}},Qn.prototype.delete=function(e){var t=oo(this,e).delete(e)
return this.size-=t?1:0,t},Qn.prototype.get=function(e){return oo(this,e).get(e)},Qn.prototype.has=function(e){return oo(this,e).has(e)},Qn.prototype.set=function(e,t){var n=oo(this,e),r=n.size
return n.set(e,t),this.size+=n.size==r?0:1,this},Un.prototype.add=Un.prototype.push=function(e){return this.__data__.set(e,s),this},Un.prototype.has=function(e){return this.__data__.has(e)},Wn.prototype.clear=function(){this.__data__=new Hn,this.size=0},Wn.prototype.delete=function(e){var t=this.__data__,n=t.delete(e)
return this.size=t.size,n},Wn.prototype.get=function(e){return this.__data__.get(e)},Wn.prototype.has=function(e){return this.__data__.has(e)},Wn.prototype.set=function(e,t){var n=this.__data__
if(n instanceof Hn){var r=n.__data__
if(!_n||r.length<199)return r.push([e,t]),this.size=++n.size,this
n=this.__data__=new Qn(r)}return n.set(e,t),this.size=n.size,this}
var lr=Ci(vr),cr=Ci(yr,!0)
function fr(e,t){var n=!0
return lr(e,(function(e,r,i){return n=!!t(e,r,i)})),n}function hr(e,t,n){for(var r=-1,o=e.length;++r<o;){var s=e[r],a=t(s)
if(null!=a&&(u===i?a==a&&!sa(a):n(a,u)))var u=a,l=s}return l}function pr(e,t){var n=[]
return lr(e,(function(e,r,i){t(e,r,i)&&n.push(e)})),n}function dr(e,t,n,r,i){var o=-1,s=e.length
for(n||(n=po),i||(i=[]);++o<s;){var a=e[o]
t>0&&n(a)?t>1?dr(a,t-1,n,r,i):Rt(i,a):r||(i[i.length]=a)}return i}var gr=Ni(),mr=Ni(!0)
function vr(e,t){return e&&gr(e,t,Ca)}function yr(e,t){return e&&mr(e,t,Ca)}function br(e,t){return At(t,(function(t){return Ks(e[t])}))}function xr(e,t){for(var n=0,r=(t=gi(t,e)).length;null!=e&&n<r;)e=e[Io(t[n++])]
return n&&n==r?e:i}function wr(e,t,n){var r=t(e)
return qs(e)?r:Rt(r,n(e))}function _r(e){return null==e?e===i?"[object Undefined]":"[object Null]":Ye&&Ye in ke(e)?function(e){var t=Le.call(e,Ye),n=e[Ye]
try{e[Ye]=i
var r=!0}catch(e){}var o=De.call(e)
return r&&(t?e[Ye]=n:delete e[Ye]),o}(e):function(e){return De.call(e)}(e)}function Er(e,t){return e>t}function kr(e,t){return null!=e&&Le.call(e,t)}function Sr(e,t){return null!=e&&t in ke(e)}function Tr(e,t,n){for(var o=n?Nt:Ct,s=e[0].length,a=e.length,u=a,l=r(a),c=1/0,f=[];u--;){var h=e[u]
u&&t&&(h=jt(h,Kt(t))),c=mn(h.length,c),l[u]=!n&&(t||s>=120&&h.length>=120)?new Un(u&&h):i}h=e[0]
var p=-1,d=l[0]
e:for(;++p<s&&f.length<c;){var g=h[p],m=t?t(g):g
if(g=n||0!==g?g:0,!(d?Gt(d,m):o(f,m,n))){for(u=a;--u;){var v=l[u]
if(!(v?Gt(v,m):o(e[u],m,n)))continue e}d&&d.push(m),f.push(g)}}return f}function Or(e,t,n){var r=null==(e=ko(e,t=gi(t,e)))?e:e[Io(Zo(t))]
return null==r?i:Et(r,e,n)}function Ar(e){return Js(e)&&_r(e)==g}function Cr(e,t,n,r,o){return e===t||(null==e||null==t||!Js(e)&&!Js(t)?e!=e&&t!=t:function(e,t,n,r,o,s){var a=qs(e),u=qs(t),l=a?m:co(e),c=u?m:co(t),f=(l=l==g?k:l)==k,h=(c=c==g?k:c)==k,p=l==c
if(p&&Ws(e)){if(!Ws(t))return!1
a=!0,f=!1}if(p&&!f)return s||(s=new Wn),a||aa(e)?Gi(e,t,n,r,o,s):function(e,t,n,r,i,o,s){switch(n){case R:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1
e=e.buffer,t=t.buffer
case j:return!(e.byteLength!=t.byteLength||!o(new qe(e),new qe(t)))
case v:case y:case E:return $s(+e,+t)
case b:return e.name==t.name&&e.message==t.message
case T:case A:return e==t+""
case _:var a=on
case O:var u=1&r
if(a||(a=un),e.size!=t.size&&!u)return!1
var l=s.get(e)
if(l)return l==t
r|=2,s.set(e,t)
var c=Gi(a(e),a(t),r,i,o,s)
return s.delete(e),c
case C:if(In)return In.call(e)==In.call(t)}return!1}(e,t,l,n,r,o,s)
if(!(1&n)){var d=f&&Le.call(e,"__wrapped__"),x=h&&Le.call(t,"__wrapped__")
if(d||x){var w=d?e.value():e,S=x?t.value():t
return s||(s=new Wn),o(w,S,n,r,s)}}return!!p&&(s||(s=new Wn),function(e,t,n,r,o,s){var a=1&n,u=Ji(e),l=u.length
if(l!=Ji(t).length&&!a)return!1
for(var c=l;c--;){var f=u[c]
if(!(a?f in t:Le.call(t,f)))return!1}var h=s.get(e),p=s.get(t)
if(h&&p)return h==t&&p==e
var d=!0
s.set(e,t),s.set(t,e)
for(var g=a;++c<l;){var m=e[f=u[c]],v=t[f]
if(r)var y=a?r(v,m,f,t,e,s):r(m,v,f,e,t,s)
if(!(y===i?m===v||o(m,v,n,r,s):y)){d=!1
break}g||(g="constructor"==f)}if(d&&!g){var b=e.constructor,x=t.constructor
b==x||!("constructor"in e)||!("constructor"in t)||"function"==typeof b&&b instanceof b&&"function"==typeof x&&x instanceof x||(d=!1)}return s.delete(e),s.delete(t),d}(e,t,n,r,o,s))}(e,t,n,r,Cr,o))}function Nr(e,t,n,r){var o=n.length,s=o,a=!r
if(null==e)return!s
for(e=ke(e);o--;){var u=n[o]
if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++o<s;){var l=(u=n[o])[0],c=e[l],f=u[1]
if(a&&u[2]){if(c===i&&!(l in e))return!1}else{var h=new Wn
if(r)var p=r(c,f,l,e,t,h)
if(!(p===i?Cr(f,c,3,r,h):p))return!1}}return!0}function jr(e){return!(!Ys(e)||(t=e,Ie&&Ie in t))&&(Ks(e)?Be:ge).test(Do(e))
var t}function Rr(e){return"function"==typeof e?e:null==e?tu:"object"==typeof e?qs(e)?Mr(e[0],e[1]):Dr(e):cu(e)}function Lr(e){if(!xo(e))return dn(e)
var t=[]
for(var n in ke(e))Le.call(e,n)&&"constructor"!=n&&t.push(n)
return t}function Pr(e,t){return e<t}function Ir(e,t){var n=-1,i=Qs(e)?r(e.length):[]
return lr(e,(function(e,r,o){i[++n]=t(e,r,o)})),i}function Dr(e){var t=so(e)
return 1==t.length&&t[0][2]?_o(t[0][0],t[0][1]):function(n){return n===e||Nr(n,e,t)}}function Mr(e,t){return vo(e)&&wo(t)?_o(Io(e),t):function(n){var r=ka(n,e)
return r===i&&r===t?Sa(n,e):Cr(t,r,3)}}function $r(e,t,n,r,o){e!==t&&gr(t,(function(s,a){if(o||(o=new Wn),Ys(s))!function(e,t,n,r,o,s,a){var u=So(e,n),l=So(t,n),c=a.get(l)
if(c)Gn(e,n,c)
else{var f=s?s(u,l,n+"",e,t,a):i,h=f===i
if(h){var p=qs(l),d=!p&&Ws(l),g=!p&&!d&&aa(l)
f=l,p||d||g?qs(u)?f=u:Us(u)?f=Si(u):d?(h=!1,f=bi(l,!0)):g?(h=!1,f=wi(l,!0)):f=[]:na(l)||Fs(l)?(f=u,Fs(u)?f=ga(u):Ys(u)&&!Ks(u)||(f=ho(l))):h=!1}h&&(a.set(l,f),o(f,l,r,s,a),a.delete(l)),Gn(e,n,f)}}(e,t,a,n,$r,r,o)
else{var u=r?r(So(e,a),s,a+"",e,t,o):i
u===i&&(u=s),Gn(e,a,u)}}),Na)}function Br(e,t){var n=e.length
if(n)return go(t+=t<0?n:0,n)?e[t]:i}function zr(e,t,n){t=t.length?jt(t,(function(e){return qs(e)?function(t){return xr(t,1===e.length?e[0]:e)}:e})):[tu]
var r=-1
t=jt(t,Kt(io()))
var i=Ir(e,(function(e,n,i){var o=jt(t,(function(t){return t(e)}))
return{criteria:o,index:++r,value:e}}))
return function(e,t){var r=e.length
for(e.sort((function(e,t){return function(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,s=i.length,a=n.length;++r<s;){var u=_i(i[r],o[r])
if(u)return r>=a?u:u*("desc"==n[r]?-1:1)}return e.index-t.index}(e,t,n)}));r--;)e[r]=e[r].value
return e}(i)}function Fr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var s=t[r],a=xr(e,s)
n(a,s)&&Kr(o,gi(s,e),a)}return o}function qr(e,t,n,r){var i=r?zt:Bt,o=-1,s=t.length,a=e
for(e===t&&(t=Si(t)),n&&(a=jt(e,Kt(n)));++o<s;)for(var u=0,l=t[o],c=n?n(l):l;(u=i(a,c,u,r))>-1;)a!==e&&Ve.call(a,u,1),Ve.call(e,u,1)
return e}function Hr(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n]
if(n==r||i!==o){var o=i
go(i)?Ve.call(e,i,1):ai(e,i)}}return e}function Qr(e,t){return e+pt(bn()*(t-e+1))}function Ur(e,t){var n=""
if(!e||t<1||t>f)return n
do{t%2&&(n+=e),(t=pt(t/2))&&(e+=e)}while(t)
return n}function Wr(e,t){return Ao(Eo(e,t,tu),e+"")}function Vr(e){return Zn($a(e))}function Zr(e,t){var n=$a(e)
return jo(n,ir(t,0,n.length))}function Kr(e,t,n,r){if(!Ys(e))return e
for(var o=-1,s=(t=gi(t,e)).length,a=s-1,u=e;null!=u&&++o<s;){var l=Io(t[o]),c=n
if("__proto__"===l||"constructor"===l||"prototype"===l)return e
if(o!=a){var f=u[l];(c=r?r(f,l,u):i)===i&&(c=Ys(f)?f:go(t[o+1])?[]:{})}Yn(u,l,c),u=u[l]}return e}var Xr=On?function(e,t){return On.set(e,t),e}:tu,Gr=et?function(e,t){return et(e,"toString",{configurable:!0,enumerable:!1,value:Ya(t),writable:!0})}:tu
function Yr(e){return jo($a(e))}function Jr(e,t,n){var i=-1,o=e.length
t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0
for(var s=r(o);++i<o;)s[i]=e[i+t]
return s}function ei(e,t){var n
return lr(e,(function(e,r,i){return!(n=t(e,r,i))})),!!n}function ti(e,t,n){var r=0,i=null==e?r:e.length
if("number"==typeof t&&t==t&&i<=2147483647){for(;r<i;){var o=r+i>>>1,s=e[o]
null!==s&&!sa(s)&&(n?s<=t:s<t)?r=o+1:i=o}return i}return ni(e,t,tu,n)}function ni(e,t,n,r){var o=0,s=null==e?0:e.length
if(0===s)return 0
for(var a=(t=n(t))!=t,u=null===t,l=sa(t),c=t===i;o<s;){var f=pt((o+s)/2),h=n(e[f]),p=h!==i,d=null===h,g=h==h,m=sa(h)
if(a)var v=r||g
else v=c?g&&(r||p):u?g&&p&&(r||!d):l?g&&p&&!d&&(r||!m):!d&&!m&&(r?h<=t:h<t)
v?o=f+1:s=f}return mn(s,4294967294)}function ri(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var s=e[n],a=t?t(s):s
if(!n||!$s(a,u)){var u=a
o[i++]=0===s?0:s}}return o}function ii(e){return"number"==typeof e?e:sa(e)?h:+e}function oi(e){if("string"==typeof e)return e
if(qs(e))return jt(e,oi)+""
if(sa(e))return Dn?Dn.call(e):""
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function si(e,t,n){var r=-1,i=Ct,o=e.length,s=!0,a=[],u=a
if(n)s=!1,i=Nt
else if(o>=200){var l=t?null:Ui(e)
if(l)return un(l)
s=!1,i=Gt,u=new Un}else u=t?[]:a
e:for(;++r<o;){var c=e[r],f=t?t(c):c
if(c=n||0!==c?c:0,s&&f==f){for(var h=u.length;h--;)if(u[h]===f)continue e
t&&u.push(f),a.push(c)}else i(u,f,n)||(u!==a&&u.push(f),a.push(c))}return a}function ai(e,t){return null==(e=ko(e,t=gi(t,e)))||delete e[Io(Zo(t))]}function ui(e,t,n,r){return Kr(e,t,n(xr(e,t)),r)}function li(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?Jr(e,r?0:o,r?o+1:i):Jr(e,r?o+1:0,r?i:o)}function ci(e,t){var n=e
return n instanceof Fn&&(n=n.value()),Lt(t,(function(e,t){return t.func.apply(t.thisArg,Rt([e],t.args))}),n)}function fi(e,t,n){var i=e.length
if(i<2)return i?si(e[0]):[]
for(var o=-1,s=r(i);++o<i;)for(var a=e[o],u=-1;++u<i;)u!=o&&(s[o]=ur(s[o]||a,e[u],t,n))
return si(dr(s,1),t,n)}function hi(e,t,n){for(var r=-1,o=e.length,s=t.length,a={};++r<o;){var u=r<s?t[r]:i
n(a,e[r],u)}return a}function pi(e){return Us(e)?e:[]}function di(e){return"function"==typeof e?e:tu}function gi(e,t){return qs(e)?e:vo(e,t)?[e]:Po(ma(e))}var mi=Wr
function vi(e,t,n){var r=e.length
return n=n===i?r:n,!t&&n>=r?e:Jr(e,t,n)}var yi=st||function(e){return ft.clearTimeout(e)}
function bi(e,t){if(t)return e.slice()
var n=e.length,r=He?He(n):new e.constructor(n)
return e.copy(r),r}function xi(e){var t=new e.constructor(e.byteLength)
return new qe(t).set(new qe(e)),t}function wi(e,t){var n=t?xi(e.buffer):e.buffer
return new e.constructor(n,e.byteOffset,e.length)}function _i(e,t){if(e!==t){var n=e!==i,r=null===e,o=e==e,s=sa(e),a=t!==i,u=null===t,l=t==t,c=sa(t)
if(!u&&!c&&!s&&e>t||s&&a&&l&&!u&&!c||r&&a&&l||!n&&l||!o)return 1
if(!r&&!s&&!c&&e<t||c&&n&&o&&!r&&!s||u&&n&&o||!a&&o||!l)return-1}return 0}function Ei(e,t,n,i){for(var o=-1,s=e.length,a=n.length,u=-1,l=t.length,c=gn(s-a,0),f=r(l+c),h=!i;++u<l;)f[u]=t[u]
for(;++o<a;)(h||o<s)&&(f[n[o]]=e[o])
for(;c--;)f[u++]=e[o++]
return f}function ki(e,t,n,i){for(var o=-1,s=e.length,a=-1,u=n.length,l=-1,c=t.length,f=gn(s-u,0),h=r(f+c),p=!i;++o<f;)h[o]=e[o]
for(var d=o;++l<c;)h[d+l]=t[l]
for(;++a<u;)(p||o<s)&&(h[d+n[a]]=e[o++])
return h}function Si(e,t){var n=-1,i=e.length
for(t||(t=r(i));++n<i;)t[n]=e[n]
return t}function Ti(e,t,n,r){var o=!n
n||(n={})
for(var s=-1,a=t.length;++s<a;){var u=t[s],l=r?r(n[u],e[u],u,n,e):i
l===i&&(l=e[u]),o?nr(n,u,l):Yn(n,u,l)}return n}function Oi(e,t){return function(n,r){var i=qs(n)?kt:er,o=t?t():{}
return i(n,e,io(r,2),o)}}function Ai(e){return Wr((function(t,n){var r=-1,o=n.length,s=o>1?n[o-1]:i,a=o>2?n[2]:i
for(s=e.length>3&&"function"==typeof s?(o--,s):i,a&&mo(n[0],n[1],a)&&(s=o<3?i:s,o=1),t=ke(t);++r<o;){var u=n[r]
u&&e(t,u,r,s)}return t}))}function Ci(e,t){return function(n,r){if(null==n)return n
if(!Qs(n))return e(n,r)
for(var i=n.length,o=t?i:-1,s=ke(n);(t?o--:++o<i)&&!1!==r(s[o],o,s););return n}}function Ni(e){return function(t,n,r){for(var i=-1,o=ke(t),s=r(t),a=s.length;a--;){var u=s[e?a:++i]
if(!1===n(o[u],u,o))break}return t}}function ji(e){return function(t){var n=rn(t=ma(t))?cn(t):i,r=n?n[0]:t.charAt(0),o=n?vi(n,1).join(""):t.slice(1)
return r[e]()+o}}function Ri(e){return function(t){return Lt(Ka(Fa(t).replace(Xe,"")),e,"")}}function Li(e){return function(){var t=arguments
switch(t.length){case 0:return new e
case 1:return new e(t[0])
case 2:return new e(t[0],t[1])
case 3:return new e(t[0],t[1],t[2])
case 4:return new e(t[0],t[1],t[2],t[3])
case 5:return new e(t[0],t[1],t[2],t[3],t[4])
case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5])
case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=$n(e.prototype),r=e.apply(n,t)
return Ys(r)?r:n}}function Pi(e){return function(t,n,r){var o=ke(t)
if(!Qs(t)){var s=io(n,3)
t=Ca(t),n=function(e){return s(o[e],e,o)}}var a=e(t,n,r)
return a>-1?o[s?t[a]:a]:i}}function Ii(e){return Yi((function(t){var n=t.length,r=n,s=zn.prototype.thru
for(e&&t.reverse();r--;){var a=t[r]
if("function"!=typeof a)throw new Oe(o)
if(s&&!u&&"wrapper"==no(a))var u=new zn([],!0)}for(r=u?r:n;++r<n;){var l=no(a=t[r]),c="wrapper"==l?to(a):i
u=c&&yo(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?u[no(c[0])].apply(u,c[3]):1==a.length&&yo(a)?u[l]():u.thru(a)}return function(){var e=arguments,r=e[0]
if(u&&1==e.length&&qs(r))return u.plant(r).value()
for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o)
return o}}))}function Di(e,t,n,o,s,a,u,c,f,h){var p=t&l,d=1&t,g=2&t,m=24&t,v=512&t,y=g?i:Li(e)
return function l(){for(var b=arguments.length,x=r(b),w=b;w--;)x[w]=arguments[w]
if(m)var _=ro(l),E=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r
return r}(x,_)
if(o&&(x=Ei(x,o,s,m)),a&&(x=ki(x,a,u,m)),b-=E,m&&b<h){var k=an(x,_)
return Hi(e,t,Di,l.placeholder,n,x,k,c,f,h-b)}var S=d?n:this,T=g?S[e]:e
return b=x.length,c?x=function(e,t){for(var n=e.length,r=mn(t.length,n),o=Si(e);r--;){var s=t[r]
e[r]=go(s,n)?o[s]:i}return e}(x,c):v&&b>1&&x.reverse(),p&&f<b&&(x.length=f),this&&this!==ft&&this instanceof l&&(T=y||Li(T)),T.apply(S,x)}}function Mi(e,t){return function(n,r){return function(e,t,n,r){return vr(e,(function(e,i,o){t(r,n(e),i,o)})),r}(n,e,t(r),{})}}function $i(e,t){return function(n,r){var o
if(n===i&&r===i)return t
if(n!==i&&(o=n),r!==i){if(o===i)return r
"string"==typeof n||"string"==typeof r?(n=oi(n),r=oi(r)):(n=ii(n),r=ii(r)),o=e(n,r)}return o}}function Bi(e){return Yi((function(t){return t=jt(t,Kt(io())),Wr((function(n){var r=this
return e(t,(function(e){return Et(e,r,n)}))}))}))}function zi(e,t){var n=(t=t===i?" ":oi(t)).length
if(n<2)return n?Ur(t,e):t
var r=Ur(t,ht(e/ln(t)))
return rn(t)?vi(cn(r),0,e).join(""):r.slice(0,e)}function Fi(e){return function(t,n,o){return o&&"number"!=typeof o&&mo(t,n,o)&&(n=o=i),t=fa(t),n===i?(n=t,t=0):n=fa(n),function(e,t,n,i){for(var o=-1,s=gn(ht((t-e)/(n||1)),0),a=r(s);s--;)a[i?s:++o]=e,e+=n
return a}(t,n,o=o===i?t<n?1:-1:fa(o),e)}}function qi(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=da(t),n=da(n)),e(t,n)}}function Hi(e,t,n,r,o,s,a,l,c,f){var h=8&t
t|=h?u:64,4&(t&=~(h?64:u))||(t&=-4)
var p=[e,t,o,h?s:i,h?a:i,h?i:s,h?i:a,l,c,f],d=n.apply(i,p)
return yo(e)&&To(d,p),d.placeholder=r,Co(d,e,t)}function Qi(e){var t=Ee[e]
return function(e,n){if(e=da(e),(n=null==n?0:mn(ha(n),292))&&Dt(e)){var r=(ma(e)+"e").split("e")
return+((r=(ma(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var Ui=kn&&1/un(new kn([,-0]))[1]==c?function(e){return new kn(e)}:su
function Wi(e){return function(t){var n=co(t)
return n==_?on(t):n==O?function(e){var t=-1,n=Array(e.size)
return e.forEach((function(e){n[++t]=[e,e]})),n}(t):function(e,t){return jt(t,(function(t){return[t,e[t]]}))}(t,e(t))}}function Vi(e,t,n,s,c,f,h,p){var d=2&t
if(!d&&"function"!=typeof e)throw new Oe(o)
var g=s?s.length:0
if(g||(t&=-97,s=c=i),h=h===i?h:gn(ha(h),0),p=p===i?p:ha(p),g-=c?c.length:0,64&t){var m=s,v=c
s=c=i}var y=d?i:to(e),b=[e,t,n,s,c,m,v,f,h,p]
if(y&&function(e,t){var n=e[1],r=t[1],i=n|r,o=i<131,s=r==l&&8==n||r==l&&256==n&&e[7].length<=t[8]||384==r&&t[7].length<=t[8]&&8==n
if(!o&&!s)return e
1&r&&(e[2]=t[2],i|=1&n?0:4)
var u=t[3]
if(u){var c=e[3]
e[3]=c?Ei(c,u,t[4]):u,e[4]=c?an(e[3],a):t[4]}(u=t[5])&&(c=e[5],e[5]=c?ki(c,u,t[6]):u,e[6]=c?an(e[5],a):t[6]),(u=t[7])&&(e[7]=u),r&l&&(e[8]=null==e[8]?t[8]:mn(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i}(b,y),e=b[0],t=b[1],n=b[2],s=b[3],c=b[4],!(p=b[9]=b[9]===i?d?0:e.length:gn(b[9]-g,0))&&24&t&&(t&=-25),t&&1!=t)x=8==t||16==t?function(e,t,n){var o=Li(e)
return function s(){for(var a=arguments.length,u=r(a),l=a,c=ro(s);l--;)u[l]=arguments[l]
var f=a<3&&u[0]!==c&&u[a-1]!==c?[]:an(u,c)
return(a-=f.length)<n?Hi(e,t,Di,s.placeholder,i,u,f,i,i,n-a):Et(this&&this!==ft&&this instanceof s?o:e,this,u)}}(e,t,p):t!=u&&33!=t||c.length?Di.apply(i,b):function(e,t,n,i){var o=1&t,s=Li(e)
return function t(){for(var a=-1,u=arguments.length,l=-1,c=i.length,f=r(c+u),h=this&&this!==ft&&this instanceof t?s:e;++l<c;)f[l]=i[l]
for(;u--;)f[l++]=arguments[++a]
return Et(h,o?n:this,f)}}(e,t,n,s)
else var x=function(e,t,n){var r=1&t,i=Li(e)
return function t(){return(this&&this!==ft&&this instanceof t?i:e).apply(r?n:this,arguments)}}(e,t,n)
return Co((y?Xr:To)(x,b),e,t)}function Zi(e,t,n,r){return e===i||$s(e,Ne[n])&&!Le.call(r,n)?t:e}function Ki(e,t,n,r,o,s){return Ys(e)&&Ys(t)&&(s.set(t,e),$r(e,t,i,Ki,s),s.delete(t)),e}function Xi(e){return na(e)?i:e}function Gi(e,t,n,r,o,s){var a=1&n,u=e.length,l=t.length
if(u!=l&&!(a&&l>u))return!1
var c=s.get(e),f=s.get(t)
if(c&&f)return c==t&&f==e
var h=-1,p=!0,d=2&n?new Un:i
for(s.set(e,t),s.set(t,e);++h<u;){var g=e[h],m=t[h]
if(r)var v=a?r(m,g,h,t,e,s):r(g,m,h,e,t,s)
if(v!==i){if(v)continue
p=!1
break}if(d){if(!It(t,(function(e,t){if(!Gt(d,t)&&(g===e||o(g,e,n,r,s)))return d.push(t)}))){p=!1
break}}else if(g!==m&&!o(g,m,n,r,s)){p=!1
break}}return s.delete(e),s.delete(t),p}function Yi(e){return Ao(Eo(e,i,Ho),e+"")}function Ji(e){return wr(e,Ca,uo)}function eo(e){return wr(e,Na,lo)}var to=On?function(e){return On.get(e)}:su
function no(e){for(var t=e.name+"",n=An[t],r=Le.call(An,t)?n.length:0;r--;){var i=n[r],o=i.func
if(null==o||o==e)return i.name}return t}function ro(e){return(Le.call(Mn,"placeholder")?Mn:e).placeholder}function io(){var e=Mn.iteratee||nu
return e=e===nu?Rr:e,arguments.length?e(arguments[0],arguments[1]):e}function oo(e,t){var n,r,i=e.__data__
return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof t?"string":"hash"]:i.map}function so(e){for(var t=Ca(e),n=t.length;n--;){var r=t[n],i=e[r]
t[n]=[r,i,wo(i)]}return t}function ao(e,t){var n=function(e,t){return null==e?i:e[t]}(e,t)
return jr(n)?n:i}var uo=gt?function(e){return null==e?[]:(e=ke(e),At(gt(e),(function(t){return We.call(e,t)})))}:pu,lo=gt?function(e){for(var t=[];e;)Rt(t,uo(e)),e=Qe(e)
return t}:pu,co=_r
function fo(e,t,n){for(var r=-1,i=(t=gi(t,e)).length,o=!1;++r<i;){var s=Io(t[r])
if(!(o=null!=e&&n(e,s)))break
e=e[s]}return o||++r!=i?o:!!(i=null==e?0:e.length)&&Gs(i)&&go(s,i)&&(qs(e)||Fs(e))}function ho(e){return"function"!=typeof e.constructor||xo(e)?{}:$n(Qe(e))}function po(e){return qs(e)||Fs(e)||!!(Ze&&e&&e[Ze])}function go(e,t){var n=typeof e
return!!(t=null==t?f:t)&&("number"==n||"symbol"!=n&&ve.test(e))&&e>-1&&e%1==0&&e<t}function mo(e,t,n){if(!Ys(n))return!1
var r=typeof t
return!!("number"==r?Qs(n)&&go(t,n.length):"string"==r&&t in n)&&$s(n[t],e)}function vo(e,t){if(qs(e))return!1
var n=typeof e
return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!sa(e))||J.test(e)||!Y.test(e)||null!=t&&e in ke(t)}function yo(e){var t=no(e),n=Mn[t]
if("function"!=typeof n||!(t in Fn.prototype))return!1
if(e===n)return!0
var r=to(n)
return!!r&&e===r[0]}(wn&&co(new wn(new ArrayBuffer(1)))!=R||_n&&co(new _n)!=_||En&&co(En.resolve())!=S||kn&&co(new kn)!=O||Sn&&co(new Sn)!=N)&&(co=function(e){var t=_r(e),n=t==k?e.constructor:i,r=n?Do(n):""
if(r)switch(r){case Cn:return R
case Nn:return _
case jn:return S
case Rn:return O
case Ln:return N}return t})
var bo=je?Ks:du
function xo(e){var t=e&&e.constructor
return e===("function"==typeof t&&t.prototype||Ne)}function wo(e){return e==e&&!Ys(e)}function _o(e,t){return function(n){return null!=n&&n[e]===t&&(t!==i||e in ke(n))}}function Eo(e,t,n){return t=gn(t===i?e.length-1:t,0),function(){for(var i=arguments,o=-1,s=gn(i.length-t,0),a=r(s);++o<s;)a[o]=i[t+o]
o=-1
for(var u=r(t+1);++o<t;)u[o]=i[o]
return u[t]=n(a),Et(e,this,u)}}function ko(e,t){return t.length<2?e:xr(e,Jr(t,0,-1))}function So(e,t){if(("constructor"!==t||"function"!=typeof e[t])&&"__proto__"!=t)return e[t]}var To=No(Xr),Oo=ct||function(e,t){return ft.setTimeout(e,t)},Ao=No(Gr)
function Co(e,t,n){var r=t+""
return Ao(e,function(e,t){var n=t.length
if(!n)return e
var r=n-1
return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(oe,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return St(d,(function(n){var r="_."+n[0]
t&n[1]&&!Ct(e,r)&&e.push(r)})),e.sort()}(function(e){var t=e.match(se)
return t?t[1].split(ae):[]}(r),n)))}function No(e){var t=0,n=0
return function(){var r=vn(),o=16-(r-n)
if(n=r,o>0){if(++t>=800)return arguments[0]}else t=0
return e.apply(i,arguments)}}function jo(e,t){var n=-1,r=e.length,o=r-1
for(t=t===i?r:t;++n<t;){var s=Qr(n,o),a=e[s]
e[s]=e[n],e[n]=a}return e.length=t,e}var Ro,Lo,Po=(Ro=Rs((function(e){var t=[]
return 46===e.charCodeAt(0)&&t.push(""),e.replace(ee,(function(e,n,r,i){t.push(r?i.replace(ce,"$1"):n||e)})),t}),(function(e){return 500===Lo.size&&Lo.clear(),e})),Lo=Ro.cache,Ro)
function Io(e){if("string"==typeof e||sa(e))return e
var t=e+""
return"0"==t&&1/e==-1/0?"-0":t}function Do(e){if(null!=e){try{return Re.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Mo(e){if(e instanceof Fn)return e.clone()
var t=new zn(e.__wrapped__,e.__chain__)
return t.__actions__=Si(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var $o=Wr((function(e,t){return Us(e)?ur(e,dr(t,1,Us,!0)):[]})),Bo=Wr((function(e,t){var n=Zo(t)
return Us(n)&&(n=i),Us(e)?ur(e,dr(t,1,Us,!0),io(n,2)):[]})),zo=Wr((function(e,t){var n=Zo(t)
return Us(n)&&(n=i),Us(e)?ur(e,dr(t,1,Us,!0),i,n):[]}))
function Fo(e,t,n){var r=null==e?0:e.length
if(!r)return-1
var i=null==n?0:ha(n)
return i<0&&(i=gn(r+i,0)),$t(e,io(t,3),i)}function qo(e,t,n){var r=null==e?0:e.length
if(!r)return-1
var o=r-1
return n!==i&&(o=ha(n),o=n<0?gn(r+o,0):mn(o,r-1)),$t(e,io(t,3),o,!0)}function Ho(e){return null!=e&&e.length?dr(e,1):[]}function Qo(e){return e&&e.length?e[0]:i}var Uo=Wr((function(e){var t=jt(e,pi)
return t.length&&t[0]===e[0]?Tr(t):[]})),Wo=Wr((function(e){var t=Zo(e),n=jt(e,pi)
return t===Zo(n)?t=i:n.pop(),n.length&&n[0]===e[0]?Tr(n,io(t,2)):[]})),Vo=Wr((function(e){var t=Zo(e),n=jt(e,pi)
return(t="function"==typeof t?t:i)&&n.pop(),n.length&&n[0]===e[0]?Tr(n,i,t):[]}))
function Zo(e){var t=null==e?0:e.length
return t?e[t-1]:i}var Ko=Wr(Xo)
function Xo(e,t){return e&&e.length&&t&&t.length?qr(e,t):e}var Go=Yi((function(e,t){var n=null==e?0:e.length,r=rr(e,t)
return Hr(e,jt(t,(function(e){return go(e,n)?+e:e})).sort(_i)),r}))
function Yo(e){return null==e?e:xn.call(e)}var Jo=Wr((function(e){return si(dr(e,1,Us,!0))})),es=Wr((function(e){var t=Zo(e)
return Us(t)&&(t=i),si(dr(e,1,Us,!0),io(t,2))})),ts=Wr((function(e){var t=Zo(e)
return t="function"==typeof t?t:i,si(dr(e,1,Us,!0),i,t)}))
function ns(e){if(!e||!e.length)return[]
var t=0
return e=At(e,(function(e){if(Us(e))return t=gn(e.length,t),!0})),Vt(t,(function(t){return jt(e,Ht(t))}))}function rs(e,t){if(!e||!e.length)return[]
var n=ns(e)
return null==t?n:jt(n,(function(e){return Et(t,i,e)}))}var is=Wr((function(e,t){return Us(e)?ur(e,t):[]})),os=Wr((function(e){return fi(At(e,Us))})),ss=Wr((function(e){var t=Zo(e)
return Us(t)&&(t=i),fi(At(e,Us),io(t,2))})),as=Wr((function(e){var t=Zo(e)
return t="function"==typeof t?t:i,fi(At(e,Us),i,t)})),us=Wr(ns),ls=Wr((function(e){var t=e.length,n=t>1?e[t-1]:i
return n="function"==typeof n?(e.pop(),n):i,rs(e,n)}))
function cs(e){var t=Mn(e)
return t.__chain__=!0,t}function fs(e,t){return t(e)}var hs=Yi((function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,o=function(t){return rr(t,e)}
return!(t>1||this.__actions__.length)&&r instanceof Fn&&go(n)?((r=r.slice(n,+n+(t?1:0))).__actions__.push({func:fs,args:[o],thisArg:i}),new zn(r,this.__chain__).thru((function(e){return t&&!e.length&&e.push(i),e}))):this.thru(o)})),ps=Oi((function(e,t,n){Le.call(e,n)?++e[n]:nr(e,n,1)})),ds=Pi(Fo),gs=Pi(qo)
function ms(e,t){return(qs(e)?St:lr)(e,io(t,3))}function vs(e,t){return(qs(e)?Tt:cr)(e,io(t,3))}var ys=Oi((function(e,t,n){Le.call(e,n)?e[n].push(t):nr(e,n,[t])})),bs=Wr((function(e,t,n){var i=-1,o="function"==typeof t,s=Qs(e)?r(e.length):[]
return lr(e,(function(e){s[++i]=o?Et(t,e,n):Or(e,t,n)})),s})),xs=Oi((function(e,t,n){nr(e,n,t)}))
function ws(e,t){return(qs(e)?jt:Ir)(e,io(t,3))}var _s=Oi((function(e,t,n){e[n?0:1].push(t)}),(function(){return[[],[]]})),Es=Wr((function(e,t){if(null==e)return[]
var n=t.length
return n>1&&mo(e,t[0],t[1])?t=[]:n>2&&mo(t[0],t[1],t[2])&&(t=[t[0]]),zr(e,dr(t,1),[])})),ks=lt||function(){return ft.Date.now()}
function Ss(e,t,n){return t=n?i:t,t=e&&null==t?e.length:t,Vi(e,l,i,i,i,i,t)}function Ts(e,t){var n
if("function"!=typeof t)throw new Oe(o)
return e=ha(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=i),n}}var Os=Wr((function(e,t,n){var r=1
if(n.length){var i=an(n,ro(Os))
r|=u}return Vi(e,r,t,n,i)})),As=Wr((function(e,t,n){var r=3
if(n.length){var i=an(n,ro(As))
r|=u}return Vi(t,r,e,n,i)}))
function Cs(e,t,n){var r,s,a,u,l,c,f=0,h=!1,p=!1,d=!0
if("function"!=typeof e)throw new Oe(o)
function g(t){var n=r,o=s
return r=s=i,f=t,u=e.apply(o,n)}function m(e){var n=e-c
return c===i||n>=t||n<0||p&&e-f>=a}function v(){var e=ks()
if(m(e))return y(e)
l=Oo(v,function(e){var n=t-(e-c)
return p?mn(n,a-(e-f)):n}(e))}function y(e){return l=i,d&&r?g(e):(r=s=i,u)}function b(){var e=ks(),n=m(e)
if(r=arguments,s=this,c=e,n){if(l===i)return function(e){return f=e,l=Oo(v,t),h?g(e):u}(c)
if(p)return yi(l),l=Oo(v,t),g(c)}return l===i&&(l=Oo(v,t)),u}return t=da(t)||0,Ys(n)&&(h=!!n.leading,a=(p="maxWait"in n)?gn(da(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),b.cancel=function(){l!==i&&yi(l),f=0,r=c=s=l=i},b.flush=function(){return l===i?u:y(ks())},b}var Ns=Wr((function(e,t){return ar(e,1,t)})),js=Wr((function(e,t,n){return ar(e,da(t)||0,n)}))
function Rs(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new Oe(o)
var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache
if(o.has(i))return o.get(i)
var s=e.apply(this,r)
return n.cache=o.set(i,s)||o,s}
return n.cache=new(Rs.Cache||Qn),n}function Ls(e){if("function"!=typeof e)throw new Oe(o)
return function(){var t=arguments
switch(t.length){case 0:return!e.call(this)
case 1:return!e.call(this,t[0])
case 2:return!e.call(this,t[0],t[1])
case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}Rs.Cache=Qn
var Ps=mi((function(e,t){var n=(t=1==t.length&&qs(t[0])?jt(t[0],Kt(io())):jt(dr(t,1),Kt(io()))).length
return Wr((function(r){for(var i=-1,o=mn(r.length,n);++i<o;)r[i]=t[i].call(this,r[i])
return Et(e,this,r)}))})),Is=Wr((function(e,t){var n=an(t,ro(Is))
return Vi(e,u,i,t,n)})),Ds=Wr((function(e,t){var n=an(t,ro(Ds))
return Vi(e,64,i,t,n)})),Ms=Yi((function(e,t){return Vi(e,256,i,i,i,t)}))
function $s(e,t){return e===t||e!=e&&t!=t}var Bs=qi(Er),zs=qi((function(e,t){return e>=t})),Fs=Ar(function(){return arguments}())?Ar:function(e){return Js(e)&&Le.call(e,"callee")&&!We.call(e,"callee")},qs=r.isArray,Hs=vt?Kt(vt):function(e){return Js(e)&&_r(e)==j}
function Qs(e){return null!=e&&Gs(e.length)&&!Ks(e)}function Us(e){return Js(e)&&Qs(e)}var Ws=mt||du,Vs=yt?Kt(yt):function(e){return Js(e)&&_r(e)==y}
function Zs(e){if(!Js(e))return!1
var t=_r(e)
return t==b||"[object DOMException]"==t||"string"==typeof e.message&&"string"==typeof e.name&&!na(e)}function Ks(e){if(!Ys(e))return!1
var t=_r(e)
return t==x||t==w||"[object AsyncFunction]"==t||"[object Proxy]"==t}function Xs(e){return"number"==typeof e&&e==ha(e)}function Gs(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=f}function Ys(e){var t=typeof e
return null!=e&&("object"==t||"function"==t)}function Js(e){return null!=e&&"object"==typeof e}var ea=bt?Kt(bt):function(e){return Js(e)&&co(e)==_}
function ta(e){return"number"==typeof e||Js(e)&&_r(e)==E}function na(e){if(!Js(e)||_r(e)!=k)return!1
var t=Qe(e)
if(null===t)return!0
var n=Le.call(t,"constructor")&&t.constructor
return"function"==typeof n&&n instanceof n&&Re.call(n)==Me}var ra=xt?Kt(xt):function(e){return Js(e)&&_r(e)==T},ia=wt?Kt(wt):function(e){return Js(e)&&co(e)==O}
function oa(e){return"string"==typeof e||!qs(e)&&Js(e)&&_r(e)==A}function sa(e){return"symbol"==typeof e||Js(e)&&_r(e)==C}var aa=_t?Kt(_t):function(e){return Js(e)&&Gs(e.length)&&!!it[_r(e)]},ua=qi(Pr),la=qi((function(e,t){return e<=t}))
function ca(e){if(!e)return[]
if(Qs(e))return oa(e)?cn(e):Si(e)
if(Ke&&e[Ke])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value)
return n}(e[Ke]())
var t=co(e)
return(t==_?on:t==O?un:$a)(e)}function fa(e){return e?(e=da(e))===c||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}function ha(e){var t=fa(e),n=t%1
return t==t?n?t-n:t:0}function pa(e){return e?ir(ha(e),0,p):0}function da(e){if("number"==typeof e)return e
if(sa(e))return h
if(Ys(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=Ys(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=Zt(e)
var n=de.test(e)
return n||me.test(e)?ut(e.slice(2),n?2:8):pe.test(e)?h:+e}function ga(e){return Ti(e,Na(e))}function ma(e){return null==e?"":oi(e)}var va=Ai((function(e,t){if(xo(t)||Qs(t))Ti(t,Ca(t),e)
else for(var n in t)Le.call(t,n)&&Yn(e,n,t[n])})),ya=Ai((function(e,t){Ti(t,Na(t),e)})),ba=Ai((function(e,t,n,r){Ti(t,Na(t),e,r)})),xa=Ai((function(e,t,n,r){Ti(t,Ca(t),e,r)})),wa=Yi(rr),_a=Wr((function(e,t){e=ke(e)
var n=-1,r=t.length,o=r>2?t[2]:i
for(o&&mo(t[0],t[1],o)&&(r=1);++n<r;)for(var s=t[n],a=Na(s),u=-1,l=a.length;++u<l;){var c=a[u],f=e[c];(f===i||$s(f,Ne[c])&&!Le.call(e,c))&&(e[c]=s[c])}return e})),Ea=Wr((function(e){return e.push(i,Ki),Et(Ra,i,e)}))
function ka(e,t,n){var r=null==e?i:xr(e,t)
return r===i?n:r}function Sa(e,t){return null!=e&&fo(e,t,Sr)}var Ta=Mi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),e[t]=n}),Ya(tu)),Oa=Mi((function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=De.call(t)),Le.call(e,t)?e[t].push(n):e[t]=[n]}),io),Aa=Wr(Or)
function Ca(e){return Qs(e)?Vn(e):Lr(e)}function Na(e){return Qs(e)?Vn(e,!0):function(e){if(!Ys(e))return function(e){var t=[]
if(null!=e)for(var n in ke(e))t.push(n)
return t}(e)
var t=xo(e),n=[]
for(var r in e)("constructor"!=r||!t&&Le.call(e,r))&&n.push(r)
return n}(e)}var ja=Ai((function(e,t,n){$r(e,t,n)})),Ra=Ai((function(e,t,n,r){$r(e,t,n,r)})),La=Yi((function(e,t){var n={}
if(null==e)return n
var r=!1
t=jt(t,(function(t){return t=gi(t,e),r||(r=t.length>1),t})),Ti(e,eo(e),n),r&&(n=or(n,7,Xi))
for(var i=t.length;i--;)ai(n,t[i])
return n})),Pa=Yi((function(e,t){return null==e?{}:function(e,t){return Fr(e,t,(function(t,n){return Sa(e,n)}))}(e,t)}))
function Ia(e,t){if(null==e)return{}
var n=jt(eo(e),(function(e){return[e]}))
return t=io(t),Fr(e,n,(function(e,n){return t(e,n[0])}))}var Da=Wi(Ca),Ma=Wi(Na)
function $a(e){return null==e?[]:Xt(e,Ca(e))}var Ba=Ri((function(e,t,n){return t=t.toLowerCase(),e+(n?za(t):t)}))
function za(e){return Za(ma(e).toLowerCase())}function Fa(e){return(e=ma(e))&&e.replace(ye,en).replace(Ge,"")}var qa=Ri((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()})),Ha=Ri((function(e,t,n){return e+(n?" ":"")+t.toLowerCase()})),Qa=ji("toLowerCase"),Ua=Ri((function(e,t,n){return e+(n?"_":"")+t.toLowerCase()})),Wa=Ri((function(e,t,n){return e+(n?" ":"")+Za(t)})),Va=Ri((function(e,t,n){return e+(n?" ":"")+t.toUpperCase()})),Za=ji("toUpperCase")
function Ka(e,t,n){return e=ma(e),(t=n?i:t)===i?function(e){return tt.test(e)}(e)?function(e){return e.match(Je)||[]}(e):function(e){return e.match(ue)||[]}(e):e.match(t)||[]}var Xa=Wr((function(e,t){try{return Et(e,i,t)}catch(e){return Zs(e)?e:new we(e)}})),Ga=Yi((function(e,t){return St(t,(function(t){t=Io(t),nr(e,t,Os(e[t],e))})),e}))
function Ya(e){return function(){return e}}var Ja=Ii(),eu=Ii(!0)
function tu(e){return e}function nu(e){return Rr("function"==typeof e?e:or(e,1))}var ru=Wr((function(e,t){return function(n){return Or(n,e,t)}})),iu=Wr((function(e,t){return function(n){return Or(e,n,t)}}))
function ou(e,t,n){var r=Ca(t),i=br(t,r)
null!=n||Ys(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=br(t,Ca(t)))
var o=!(Ys(n)&&"chain"in n&&!n.chain),s=Ks(e)
return St(i,(function(n){var r=t[n]
e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__
if(o||t){var n=e(this.__wrapped__)
return(n.__actions__=Si(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,Rt([this.value()],arguments))})})),e}function su(){}var au=Bi(jt),uu=Bi(Ot),lu=Bi(It)
function cu(e){return vo(e)?Ht(Io(e)):function(e){return function(t){return xr(t,e)}}(e)}var fu=Fi(),hu=Fi(!0)
function pu(){return[]}function du(){return!1}var gu,mu=$i((function(e,t){return e+t}),0),vu=Qi("ceil"),yu=$i((function(e,t){return e/t}),1),bu=Qi("floor"),xu=$i((function(e,t){return e*t}),1),wu=Qi("round"),_u=$i((function(e,t){return e-t}),0)
return Mn.after=function(e,t){if("function"!=typeof t)throw new Oe(o)
return e=ha(e),function(){if(--e<1)return t.apply(this,arguments)}},Mn.ary=Ss,Mn.assign=va,Mn.assignIn=ya,Mn.assignInWith=ba,Mn.assignWith=xa,Mn.at=wa,Mn.before=Ts,Mn.bind=Os,Mn.bindAll=Ga,Mn.bindKey=As,Mn.castArray=function(){if(!arguments.length)return[]
var e=arguments[0]
return qs(e)?e:[e]},Mn.chain=cs,Mn.chunk=function(e,t,n){t=(n?mo(e,t,n):t===i)?1:gn(ha(t),0)
var o=null==e?0:e.length
if(!o||t<1)return[]
for(var s=0,a=0,u=r(ht(o/t));s<o;)u[a++]=Jr(e,s,s+=t)
return u},Mn.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t]
o&&(i[r++]=o)}return i},Mn.concat=function(){var e=arguments.length
if(!e)return[]
for(var t=r(e-1),n=arguments[0],i=e;i--;)t[i-1]=arguments[i]
return Rt(qs(n)?Si(n):[n],dr(t,1))},Mn.cond=function(e){var t=null==e?0:e.length,n=io()
return e=t?jt(e,(function(e){if("function"!=typeof e[1])throw new Oe(o)
return[n(e[0]),e[1]]})):[],Wr((function(n){for(var r=-1;++r<t;){var i=e[r]
if(Et(i[0],this,n))return Et(i[1],this,n)}}))},Mn.conforms=function(e){return function(e){var t=Ca(e)
return function(n){return sr(n,e,t)}}(or(e,1))},Mn.constant=Ya,Mn.countBy=ps,Mn.create=function(e,t){var n=$n(e)
return null==t?n:tr(n,t)},Mn.curry=function e(t,n,r){var o=Vi(t,8,i,i,i,i,i,n=r?i:n)
return o.placeholder=e.placeholder,o},Mn.curryRight=function e(t,n,r){var o=Vi(t,16,i,i,i,i,i,n=r?i:n)
return o.placeholder=e.placeholder,o},Mn.debounce=Cs,Mn.defaults=_a,Mn.defaultsDeep=Ea,Mn.defer=Ns,Mn.delay=js,Mn.difference=$o,Mn.differenceBy=Bo,Mn.differenceWith=zo,Mn.drop=function(e,t,n){var r=null==e?0:e.length
return r?Jr(e,(t=n||t===i?1:ha(t))<0?0:t,r):[]},Mn.dropRight=function(e,t,n){var r=null==e?0:e.length
return r?Jr(e,0,(t=r-(t=n||t===i?1:ha(t)))<0?0:t):[]},Mn.dropRightWhile=function(e,t){return e&&e.length?li(e,io(t,3),!0,!0):[]},Mn.dropWhile=function(e,t){return e&&e.length?li(e,io(t,3),!0):[]},Mn.fill=function(e,t,n,r){var o=null==e?0:e.length
return o?(n&&"number"!=typeof n&&mo(e,t,n)&&(n=0,r=o),function(e,t,n,r){var o=e.length
for((n=ha(n))<0&&(n=-n>o?0:o+n),(r=r===i||r>o?o:ha(r))<0&&(r+=o),r=n>r?0:pa(r);n<r;)e[n++]=t
return e}(e,t,n,r)):[]},Mn.filter=function(e,t){return(qs(e)?At:pr)(e,io(t,3))},Mn.flatMap=function(e,t){return dr(ws(e,t),1)},Mn.flatMapDeep=function(e,t){return dr(ws(e,t),c)},Mn.flatMapDepth=function(e,t,n){return n=n===i?1:ha(n),dr(ws(e,t),n)},Mn.flatten=Ho,Mn.flattenDeep=function(e){return null!=e&&e.length?dr(e,c):[]},Mn.flattenDepth=function(e,t){return null!=e&&e.length?dr(e,t=t===i?1:ha(t)):[]},Mn.flip=function(e){return Vi(e,512)},Mn.flow=Ja,Mn.flowRight=eu,Mn.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t]
r[i[0]]=i[1]}return r},Mn.functions=function(e){return null==e?[]:br(e,Ca(e))},Mn.functionsIn=function(e){return null==e?[]:br(e,Na(e))},Mn.groupBy=ys,Mn.initial=function(e){return null!=e&&e.length?Jr(e,0,-1):[]},Mn.intersection=Uo,Mn.intersectionBy=Wo,Mn.intersectionWith=Vo,Mn.invert=Ta,Mn.invertBy=Oa,Mn.invokeMap=bs,Mn.iteratee=nu,Mn.keyBy=xs,Mn.keys=Ca,Mn.keysIn=Na,Mn.map=ws,Mn.mapKeys=function(e,t){var n={}
return t=io(t,3),vr(e,(function(e,r,i){nr(n,t(e,r,i),e)})),n},Mn.mapValues=function(e,t){var n={}
return t=io(t,3),vr(e,(function(e,r,i){nr(n,r,t(e,r,i))})),n},Mn.matches=function(e){return Dr(or(e,1))},Mn.matchesProperty=function(e,t){return Mr(e,or(t,1))},Mn.memoize=Rs,Mn.merge=ja,Mn.mergeWith=Ra,Mn.method=ru,Mn.methodOf=iu,Mn.mixin=ou,Mn.negate=Ls,Mn.nthArg=function(e){return e=ha(e),Wr((function(t){return Br(t,e)}))},Mn.omit=La,Mn.omitBy=function(e,t){return Ia(e,Ls(io(t)))},Mn.once=function(e){return Ts(2,e)},Mn.orderBy=function(e,t,n,r){return null==e?[]:(qs(t)||(t=null==t?[]:[t]),qs(n=r?i:n)||(n=null==n?[]:[n]),zr(e,t,n))},Mn.over=au,Mn.overArgs=Ps,Mn.overEvery=uu,Mn.overSome=lu,Mn.partial=Is,Mn.partialRight=Ds,Mn.partition=_s,Mn.pick=Pa,Mn.pickBy=Ia,Mn.property=cu,Mn.propertyOf=function(e){return function(t){return null==e?i:xr(e,t)}},Mn.pull=Ko,Mn.pullAll=Xo,Mn.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?qr(e,t,io(n,2)):e},Mn.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?qr(e,t,i,n):e},Mn.pullAt=Go,Mn.range=fu,Mn.rangeRight=hu,Mn.rearg=Ms,Mn.reject=function(e,t){return(qs(e)?At:pr)(e,Ls(io(t,3)))},Mn.remove=function(e,t){var n=[]
if(!e||!e.length)return n
var r=-1,i=[],o=e.length
for(t=io(t,3);++r<o;){var s=e[r]
t(s,r,e)&&(n.push(s),i.push(r))}return Hr(e,i),n},Mn.rest=function(e,t){if("function"!=typeof e)throw new Oe(o)
return Wr(e,t=t===i?t:ha(t))},Mn.reverse=Yo,Mn.sampleSize=function(e,t,n){return t=(n?mo(e,t,n):t===i)?1:ha(t),(qs(e)?Kn:Zr)(e,t)},Mn.set=function(e,t,n){return null==e?e:Kr(e,t,n)},Mn.setWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:Kr(e,t,n,r)},Mn.shuffle=function(e){return(qs(e)?Xn:Yr)(e)},Mn.slice=function(e,t,n){var r=null==e?0:e.length
return r?(n&&"number"!=typeof n&&mo(e,t,n)?(t=0,n=r):(t=null==t?0:ha(t),n=n===i?r:ha(n)),Jr(e,t,n)):[]},Mn.sortBy=Es,Mn.sortedUniq=function(e){return e&&e.length?ri(e):[]},Mn.sortedUniqBy=function(e,t){return e&&e.length?ri(e,io(t,2)):[]},Mn.split=function(e,t,n){return n&&"number"!=typeof n&&mo(e,t,n)&&(t=n=i),(n=n===i?p:n>>>0)?(e=ma(e))&&("string"==typeof t||null!=t&&!ra(t))&&!(t=oi(t))&&rn(e)?vi(cn(e),0,n):e.split(t,n):[]},Mn.spread=function(e,t){if("function"!=typeof e)throw new Oe(o)
return t=null==t?0:gn(ha(t),0),Wr((function(n){var r=n[t],i=vi(n,0,t)
return r&&Rt(i,r),Et(e,this,i)}))},Mn.tail=function(e){var t=null==e?0:e.length
return t?Jr(e,1,t):[]},Mn.take=function(e,t,n){return e&&e.length?Jr(e,0,(t=n||t===i?1:ha(t))<0?0:t):[]},Mn.takeRight=function(e,t,n){var r=null==e?0:e.length
return r?Jr(e,(t=r-(t=n||t===i?1:ha(t)))<0?0:t,r):[]},Mn.takeRightWhile=function(e,t){return e&&e.length?li(e,io(t,3),!1,!0):[]},Mn.takeWhile=function(e,t){return e&&e.length?li(e,io(t,3)):[]},Mn.tap=function(e,t){return t(e),e},Mn.throttle=function(e,t,n){var r=!0,i=!0
if("function"!=typeof e)throw new Oe(o)
return Ys(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Cs(e,t,{leading:r,maxWait:t,trailing:i})},Mn.thru=fs,Mn.toArray=ca,Mn.toPairs=Da,Mn.toPairsIn=Ma,Mn.toPath=function(e){return qs(e)?jt(e,Io):sa(e)?[e]:Si(Po(ma(e)))},Mn.toPlainObject=ga,Mn.transform=function(e,t,n){var r=qs(e),i=r||Ws(e)||aa(e)
if(t=io(t,4),null==n){var o=e&&e.constructor
n=i?r?new o:[]:Ys(e)&&Ks(o)?$n(Qe(e)):{}}return(i?St:vr)(e,(function(e,r,i){return t(n,e,r,i)})),n},Mn.unary=function(e){return Ss(e,1)},Mn.union=Jo,Mn.unionBy=es,Mn.unionWith=ts,Mn.uniq=function(e){return e&&e.length?si(e):[]},Mn.uniqBy=function(e,t){return e&&e.length?si(e,io(t,2)):[]},Mn.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?si(e,i,t):[]},Mn.unset=function(e,t){return null==e||ai(e,t)},Mn.unzip=ns,Mn.unzipWith=rs,Mn.update=function(e,t,n){return null==e?e:ui(e,t,di(n))},Mn.updateWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:ui(e,t,di(n),r)},Mn.values=$a,Mn.valuesIn=function(e){return null==e?[]:Xt(e,Na(e))},Mn.without=is,Mn.words=Ka,Mn.wrap=function(e,t){return Is(di(t),e)},Mn.xor=os,Mn.xorBy=ss,Mn.xorWith=as,Mn.zip=us,Mn.zipObject=function(e,t){return hi(e||[],t||[],Yn)},Mn.zipObjectDeep=function(e,t){return hi(e||[],t||[],Kr)},Mn.zipWith=ls,Mn.entries=Da,Mn.entriesIn=Ma,Mn.extend=ya,Mn.extendWith=ba,ou(Mn,Mn),Mn.add=mu,Mn.attempt=Xa,Mn.camelCase=Ba,Mn.capitalize=za,Mn.ceil=vu,Mn.clamp=function(e,t,n){return n===i&&(n=t,t=i),n!==i&&(n=(n=da(n))==n?n:0),t!==i&&(t=(t=da(t))==t?t:0),ir(da(e),t,n)},Mn.clone=function(e){return or(e,4)},Mn.cloneDeep=function(e){return or(e,5)},Mn.cloneDeepWith=function(e,t){return or(e,5,t="function"==typeof t?t:i)},Mn.cloneWith=function(e,t){return or(e,4,t="function"==typeof t?t:i)},Mn.conformsTo=function(e,t){return null==t||sr(e,t,Ca(t))},Mn.deburr=Fa,Mn.defaultTo=function(e,t){return null==e||e!=e?t:e},Mn.divide=yu,Mn.endsWith=function(e,t,n){e=ma(e),t=oi(t)
var r=e.length,o=n=n===i?r:ir(ha(n),0,r)
return(n-=t.length)>=0&&e.slice(n,o)==t},Mn.eq=$s,Mn.escape=function(e){return(e=ma(e))&&Z.test(e)?e.replace(W,tn):e},Mn.escapeRegExp=function(e){return(e=ma(e))&&ne.test(e)?e.replace(te,"\\$&"):e},Mn.every=function(e,t,n){var r=qs(e)?Ot:fr
return n&&mo(e,t,n)&&(t=i),r(e,io(t,3))},Mn.find=ds,Mn.findIndex=Fo,Mn.findKey=function(e,t){return Mt(e,io(t,3),vr)},Mn.findLast=gs,Mn.findLastIndex=qo,Mn.findLastKey=function(e,t){return Mt(e,io(t,3),yr)},Mn.floor=bu,Mn.forEach=ms,Mn.forEachRight=vs,Mn.forIn=function(e,t){return null==e?e:gr(e,io(t,3),Na)},Mn.forInRight=function(e,t){return null==e?e:mr(e,io(t,3),Na)},Mn.forOwn=function(e,t){return e&&vr(e,io(t,3))},Mn.forOwnRight=function(e,t){return e&&yr(e,io(t,3))},Mn.get=ka,Mn.gt=Bs,Mn.gte=zs,Mn.has=function(e,t){return null!=e&&fo(e,t,kr)},Mn.hasIn=Sa,Mn.head=Qo,Mn.identity=tu,Mn.includes=function(e,t,n,r){e=Qs(e)?e:$a(e),n=n&&!r?ha(n):0
var i=e.length
return n<0&&(n=gn(i+n,0)),oa(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Bt(e,t,n)>-1},Mn.indexOf=function(e,t,n){var r=null==e?0:e.length
if(!r)return-1
var i=null==n?0:ha(n)
return i<0&&(i=gn(r+i,0)),Bt(e,t,i)},Mn.inRange=function(e,t,n){return t=fa(t),n===i?(n=t,t=0):n=fa(n),function(e,t,n){return e>=mn(t,n)&&e<gn(t,n)}(e=da(e),t,n)},Mn.invoke=Aa,Mn.isArguments=Fs,Mn.isArray=qs,Mn.isArrayBuffer=Hs,Mn.isArrayLike=Qs,Mn.isArrayLikeObject=Us,Mn.isBoolean=function(e){return!0===e||!1===e||Js(e)&&_r(e)==v},Mn.isBuffer=Ws,Mn.isDate=Vs,Mn.isElement=function(e){return Js(e)&&1===e.nodeType&&!na(e)},Mn.isEmpty=function(e){if(null==e)return!0
if(Qs(e)&&(qs(e)||"string"==typeof e||"function"==typeof e.splice||Ws(e)||aa(e)||Fs(e)))return!e.length
var t=co(e)
if(t==_||t==O)return!e.size
if(xo(e))return!Lr(e).length
for(var n in e)if(Le.call(e,n))return!1
return!0},Mn.isEqual=function(e,t){return Cr(e,t)},Mn.isEqualWith=function(e,t,n){var r=(n="function"==typeof n?n:i)?n(e,t):i
return r===i?Cr(e,t,i,n):!!r},Mn.isError=Zs,Mn.isFinite=function(e){return"number"==typeof e&&Dt(e)},Mn.isFunction=Ks,Mn.isInteger=Xs,Mn.isLength=Gs,Mn.isMap=ea,Mn.isMatch=function(e,t){return e===t||Nr(e,t,so(t))},Mn.isMatchWith=function(e,t,n){return n="function"==typeof n?n:i,Nr(e,t,so(t),n)},Mn.isNaN=function(e){return ta(e)&&e!=+e},Mn.isNative=function(e){if(bo(e))throw new we("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.")
return jr(e)},Mn.isNil=function(e){return null==e},Mn.isNull=function(e){return null===e},Mn.isNumber=ta,Mn.isObject=Ys,Mn.isObjectLike=Js,Mn.isPlainObject=na,Mn.isRegExp=ra,Mn.isSafeInteger=function(e){return Xs(e)&&e>=-9007199254740991&&e<=f},Mn.isSet=ia,Mn.isString=oa,Mn.isSymbol=sa,Mn.isTypedArray=aa,Mn.isUndefined=function(e){return e===i},Mn.isWeakMap=function(e){return Js(e)&&co(e)==N},Mn.isWeakSet=function(e){return Js(e)&&"[object WeakSet]"==_r(e)},Mn.join=function(e,t){return null==e?"":Qt.call(e,t)},Mn.kebabCase=qa,Mn.last=Zo,Mn.lastIndexOf=function(e,t,n){var r=null==e?0:e.length
if(!r)return-1
var o=r
return n!==i&&(o=(o=ha(n))<0?gn(r+o,0):mn(o,r-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r
return r}(e,t,o):$t(e,Ft,o,!0)},Mn.lowerCase=Ha,Mn.lowerFirst=Qa,Mn.lt=ua,Mn.lte=la,Mn.max=function(e){return e&&e.length?hr(e,tu,Er):i},Mn.maxBy=function(e,t){return e&&e.length?hr(e,io(t,2),Er):i},Mn.mean=function(e){return qt(e,tu)},Mn.meanBy=function(e,t){return qt(e,io(t,2))},Mn.min=function(e){return e&&e.length?hr(e,tu,Pr):i},Mn.minBy=function(e,t){return e&&e.length?hr(e,io(t,2),Pr):i},Mn.stubArray=pu,Mn.stubFalse=du,Mn.stubObject=function(){return{}},Mn.stubString=function(){return""},Mn.stubTrue=function(){return!0},Mn.multiply=xu,Mn.nth=function(e,t){return e&&e.length?Br(e,ha(t)):i},Mn.noConflict=function(){return ft._===this&&(ft._=$e),this},Mn.noop=su,Mn.now=ks,Mn.pad=function(e,t,n){e=ma(e)
var r=(t=ha(t))?ln(e):0
if(!t||r>=t)return e
var i=(t-r)/2
return zi(pt(i),n)+e+zi(ht(i),n)},Mn.padEnd=function(e,t,n){e=ma(e)
var r=(t=ha(t))?ln(e):0
return t&&r<t?e+zi(t-r,n):e},Mn.padStart=function(e,t,n){e=ma(e)
var r=(t=ha(t))?ln(e):0
return t&&r<t?zi(t-r,n)+e:e},Mn.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),yn(ma(e).replace(re,""),t||0)},Mn.random=function(e,t,n){if(n&&"boolean"!=typeof n&&mo(e,t,n)&&(t=n=i),n===i&&("boolean"==typeof t?(n=t,t=i):"boolean"==typeof e&&(n=e,e=i)),e===i&&t===i?(e=0,t=1):(e=fa(e),t===i?(t=e,e=0):t=fa(t)),e>t){var r=e
e=t,t=r}if(n||e%1||t%1){var o=bn()
return mn(e+o*(t-e+at("1e-"+((o+"").length-1))),t)}return Qr(e,t)},Mn.reduce=function(e,t,n){var r=qs(e)?Lt:Ut,i=arguments.length<3
return r(e,io(t,4),n,i,lr)},Mn.reduceRight=function(e,t,n){var r=qs(e)?Pt:Ut,i=arguments.length<3
return r(e,io(t,4),n,i,cr)},Mn.repeat=function(e,t,n){return t=(n?mo(e,t,n):t===i)?1:ha(t),Ur(ma(e),t)},Mn.replace=function(){var e=arguments,t=ma(e[0])
return e.length<3?t:t.replace(e[1],e[2])},Mn.result=function(e,t,n){var r=-1,o=(t=gi(t,e)).length
for(o||(o=1,e=i);++r<o;){var s=null==e?i:e[Io(t[r])]
s===i&&(r=o,s=n),e=Ks(s)?s.call(e):s}return e},Mn.round=wu,Mn.runInContext=e,Mn.sample=function(e){return(qs(e)?Zn:Vr)(e)},Mn.size=function(e){if(null==e)return 0
if(Qs(e))return oa(e)?ln(e):e.length
var t=co(e)
return t==_||t==O?e.size:Lr(e).length},Mn.snakeCase=Ua,Mn.some=function(e,t,n){var r=qs(e)?It:ei
return n&&mo(e,t,n)&&(t=i),r(e,io(t,3))},Mn.sortedIndex=function(e,t){return ti(e,t)},Mn.sortedIndexBy=function(e,t,n){return ni(e,t,io(n,2))},Mn.sortedIndexOf=function(e,t){var n=null==e?0:e.length
if(n){var r=ti(e,t)
if(r<n&&$s(e[r],t))return r}return-1},Mn.sortedLastIndex=function(e,t){return ti(e,t,!0)},Mn.sortedLastIndexBy=function(e,t,n){return ni(e,t,io(n,2),!0)},Mn.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=ti(e,t,!0)-1
if($s(e[n],t))return n}return-1},Mn.startCase=Wa,Mn.startsWith=function(e,t,n){return e=ma(e),n=null==n?0:ir(ha(n),0,e.length),t=oi(t),e.slice(n,n+t.length)==t},Mn.subtract=_u,Mn.sum=function(e){return e&&e.length?Wt(e,tu):0},Mn.sumBy=function(e,t){return e&&e.length?Wt(e,io(t,2)):0},Mn.template=function(e,t,n){var r=Mn.templateSettings
n&&mo(e,t,n)&&(t=i),e=ma(e),t=ba({},t,r,Zi)
var o,s,a=ba({},t.imports,r.imports,Zi),u=Ca(a),l=Xt(a,u),c=0,f=t.interpolate||be,h="__p += '",p=Se((t.escape||be).source+"|"+f.source+"|"+(f===G?fe:be).source+"|"+(t.evaluate||be).source+"|$","g"),d="//# sourceURL="+(Le.call(t,"sourceURL")?(t.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++rt+"]")+"\n"
e.replace(p,(function(t,n,r,i,a,u){return r||(r=i),h+=e.slice(c,u).replace(xe,nn),n&&(o=!0,h+="' +\n__e("+n+") +\n'"),a&&(s=!0,h+="';\n"+a+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+t.length,t})),h+="';\n"
var g=Le.call(t,"variable")&&t.variable
if(g){if(le.test(g))throw new we("Invalid `variable` option passed into `_.template`")}else h="with (obj) {\n"+h+"\n}\n"
h=(s?h.replace(q,""):h).replace(H,"$1").replace(Q,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}"
var m=Xa((function(){return _e(u,d+"return "+h).apply(i,l)}))
if(m.source=h,Zs(m))throw m
return m},Mn.times=function(e,t){if((e=ha(e))<1||e>f)return[]
var n=p,r=mn(e,p)
t=io(t),e-=p
for(var i=Vt(r,t);++n<e;)t(n)
return i},Mn.toFinite=fa,Mn.toInteger=ha,Mn.toLength=pa,Mn.toLower=function(e){return ma(e).toLowerCase()},Mn.toNumber=da,Mn.toSafeInteger=function(e){return e?ir(ha(e),-9007199254740991,f):0===e?e:0},Mn.toString=ma,Mn.toUpper=function(e){return ma(e).toUpperCase()},Mn.trim=function(e,t,n){if((e=ma(e))&&(n||t===i))return Zt(e)
if(!e||!(t=oi(t)))return e
var r=cn(e),o=cn(t)
return vi(r,Yt(r,o),Jt(r,o)+1).join("")},Mn.trimEnd=function(e,t,n){if((e=ma(e))&&(n||t===i))return e.slice(0,fn(e)+1)
if(!e||!(t=oi(t)))return e
var r=cn(e)
return vi(r,0,Jt(r,cn(t))+1).join("")},Mn.trimStart=function(e,t,n){if((e=ma(e))&&(n||t===i))return e.replace(re,"")
if(!e||!(t=oi(t)))return e
var r=cn(e)
return vi(r,Yt(r,cn(t))).join("")},Mn.truncate=function(e,t){var n=30,r="..."
if(Ys(t)){var o="separator"in t?t.separator:o
n="length"in t?ha(t.length):n,r="omission"in t?oi(t.omission):r}var s=(e=ma(e)).length
if(rn(e)){var a=cn(e)
s=a.length}if(n>=s)return e
var u=n-ln(r)
if(u<1)return r
var l=a?vi(a,0,u).join(""):e.slice(0,u)
if(o===i)return l+r
if(a&&(u+=l.length-u),ra(o)){if(e.slice(u).search(o)){var c,f=l
for(o.global||(o=Se(o.source,ma(he.exec(o))+"g")),o.lastIndex=0;c=o.exec(f);)var h=c.index
l=l.slice(0,h===i?u:h)}}else if(e.indexOf(oi(o),u)!=u){var p=l.lastIndexOf(o)
p>-1&&(l=l.slice(0,p))}return l+r},Mn.unescape=function(e){return(e=ma(e))&&V.test(e)?e.replace(U,hn):e},Mn.uniqueId=function(e){var t=++Pe
return ma(e)+t},Mn.upperCase=Va,Mn.upperFirst=Za,Mn.each=ms,Mn.eachRight=vs,Mn.first=Qo,ou(Mn,(gu={},vr(Mn,(function(e,t){Le.call(Mn.prototype,t)||(gu[t]=e)})),gu),{chain:!1}),Mn.VERSION="4.17.21",St(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(e){Mn[e].placeholder=Mn})),St(["drop","take"],(function(e,t){Fn.prototype[e]=function(n){n=n===i?1:gn(ha(n),0)
var r=this.__filtered__&&!t?new Fn(this):this.clone()
return r.__filtered__?r.__takeCount__=mn(n,r.__takeCount__):r.__views__.push({size:mn(n,p),type:e+(r.__dir__<0?"Right":"")}),r},Fn.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}})),St(["filter","map","takeWhile"],(function(e,t){var n=t+1,r=1==n||3==n
Fn.prototype[e]=function(e){var t=this.clone()
return t.__iteratees__.push({iteratee:io(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}})),St(["head","last"],(function(e,t){var n="take"+(t?"Right":"")
Fn.prototype[e]=function(){return this[n](1).value()[0]}})),St(["initial","tail"],(function(e,t){var n="drop"+(t?"":"Right")
Fn.prototype[e]=function(){return this.__filtered__?new Fn(this):this[n](1)}})),Fn.prototype.compact=function(){return this.filter(tu)},Fn.prototype.find=function(e){return this.filter(e).head()},Fn.prototype.findLast=function(e){return this.reverse().find(e)},Fn.prototype.invokeMap=Wr((function(e,t){return"function"==typeof e?new Fn(this):this.map((function(n){return Or(n,e,t)}))})),Fn.prototype.reject=function(e){return this.filter(Ls(io(e)))},Fn.prototype.slice=function(e,t){e=ha(e)
var n=this
return n.__filtered__&&(e>0||t<0)?new Fn(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==i&&(n=(t=ha(t))<0?n.dropRight(-t):n.take(t-e)),n)},Fn.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},Fn.prototype.toArray=function(){return this.take(p)},vr(Fn.prototype,(function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),o=Mn[r?"take"+("last"==t?"Right":""):t],s=r||/^find/.test(t)
o&&(Mn.prototype[t]=function(){var t=this.__wrapped__,a=r?[1]:arguments,u=t instanceof Fn,l=a[0],c=u||qs(t),f=function(e){var t=o.apply(Mn,Rt([e],a))
return r&&h?t[0]:t}
c&&n&&"function"==typeof l&&1!=l.length&&(u=c=!1)
var h=this.__chain__,p=!!this.__actions__.length,d=s&&!h,g=u&&!p
if(!s&&c){t=g?t:new Fn(this)
var m=e.apply(t,a)
return m.__actions__.push({func:fs,args:[f],thisArg:i}),new zn(m,h)}return d&&g?e.apply(this,a):(m=this.thru(f),d?r?m.value()[0]:m.value():m)})})),St(["pop","push","shift","sort","splice","unshift"],(function(e){var t=Ae[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e)
Mn.prototype[e]=function(){var e=arguments
if(r&&!this.__chain__){var i=this.value()
return t.apply(qs(i)?i:[],e)}return this[n]((function(n){return t.apply(qs(n)?n:[],e)}))}})),vr(Fn.prototype,(function(e,t){var n=Mn[t]
if(n){var r=n.name+""
Le.call(An,r)||(An[r]=[]),An[r].push({name:t,func:n})}})),An[Di(i,2).name]=[{name:"wrapper",func:i}],Fn.prototype.clone=function(){var e=new Fn(this.__wrapped__)
return e.__actions__=Si(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Si(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Si(this.__views__),e},Fn.prototype.reverse=function(){if(this.__filtered__){var e=new Fn(this)
e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1
return e},Fn.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=qs(e),r=t<0,i=n?e.length:0,o=function(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],s=o.size
switch(o.type){case"drop":e+=s
break
case"dropRight":t-=s
break
case"take":t=mn(t,e+s)
break
case"takeRight":e=gn(e,t-s)}}return{start:e,end:t}}(0,i,this.__views__),s=o.start,a=o.end,u=a-s,l=r?a:s-1,c=this.__iteratees__,f=c.length,h=0,p=mn(u,this.__takeCount__)
if(!n||!r&&i==u&&p==u)return ci(e,this.__actions__)
var d=[]
e:for(;u--&&h<p;){for(var g=-1,m=e[l+=t];++g<f;){var v=c[g],y=v.iteratee,b=v.type,x=y(m)
if(2==b)m=x
else if(!x){if(1==b)continue e
break e}}d[h++]=m}return d},Mn.prototype.at=hs,Mn.prototype.chain=function(){return cs(this)},Mn.prototype.commit=function(){return new zn(this.value(),this.__chain__)},Mn.prototype.next=function(){this.__values__===i&&(this.__values__=ca(this.value()))
var e=this.__index__>=this.__values__.length
return{done:e,value:e?i:this.__values__[this.__index__++]}},Mn.prototype.plant=function(e){for(var t,n=this;n instanceof Bn;){var r=Mo(n)
r.__index__=0,r.__values__=i,t?o.__wrapped__=r:t=r
var o=r
n=n.__wrapped__}return o.__wrapped__=e,t},Mn.prototype.reverse=function(){var e=this.__wrapped__
if(e instanceof Fn){var t=e
return this.__actions__.length&&(t=new Fn(this)),(t=t.reverse()).__actions__.push({func:fs,args:[Yo],thisArg:i}),new zn(t,this.__chain__)}return this.thru(Yo)},Mn.prototype.toJSON=Mn.prototype.valueOf=Mn.prototype.value=function(){return ci(this.__wrapped__,this.__actions__)},Mn.prototype.first=Mn.prototype.head,Ke&&(Mn.prototype[Ke]=function(){return this}),Mn}()
ft._=pn,(r=function(){return pn}.call(t,n,t,e))===i||(e.exports=r)}.call(this)},347:(e,t,n)=>{var r,i
!function(){var o,s,a,u,l,c,f,h,p,d,g,m,v,y,b,x,w,_,E,k,S,T,O,A,C,N,j,R,L,P=function(e){var t=new P.Builder
return t.pipeline.add(P.trimmer,P.stopWordFilter,P.stemmer),t.searchPipeline.add(P.stemmer),e.call(t,t),t.build()}
P.version="2.3.9",P.utils={},P.utils.warn=function(e){return function(t){e.console&&console.warn&&console.warn(t)}}(this),P.utils.asString=function(e){return null==e?"":e.toString()},P.utils.clone=function(e){if(null==e)return e
for(var t=Object.create(null),n=Object.keys(e),r=0;r<n.length;r++){var i=n[r],o=e[i]
if(Array.isArray(o))t[i]=o.slice()
else{if("string"!=typeof o&&"number"!=typeof o&&"boolean"!=typeof o)throw new TypeError("clone is not deep and does not support nested objects")
t[i]=o}}return t},P.FieldRef=function(e,t,n){this.docRef=e,this.fieldName=t,this._stringValue=n},P.FieldRef.joiner="/",P.FieldRef.fromString=function(e){var t=e.indexOf(P.FieldRef.joiner)
if(-1===t)throw"malformed field ref string"
var n=e.slice(0,t),r=e.slice(t+1)
return new P.FieldRef(r,n,e)},P.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+P.FieldRef.joiner+this.docRef),this._stringValue},P.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length
for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},P.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},P.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},P.Set.prototype.contains=function(e){return!!this.elements[e]},P.Set.prototype.intersect=function(e){var t,n,r,i=[]
if(e===P.Set.complete)return this
if(e===P.Set.empty)return e
this.length<e.length?(t=this,n=e):(t=e,n=this),r=Object.keys(t.elements)
for(var o=0;o<r.length;o++){var s=r[o]
s in n.elements&&i.push(s)}return new P.Set(i)},P.Set.prototype.union=function(e){return e===P.Set.complete?P.Set.complete:e===P.Set.empty?this:new P.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},P.idf=function(e,t){var n=0
for(var r in e)"_index"!=r&&(n+=Object.keys(e[r]).length)
var i=(t-n+.5)/(n+.5)
return Math.log(1+Math.abs(i))},P.Token=function(e,t){this.str=e||"",this.metadata=t||{}},P.Token.prototype.toString=function(){return this.str},P.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},P.Token.prototype.clone=function(e){return e=e||function(e){return e},new P.Token(e(this.str,this.metadata),this.metadata)},P.tokenizer=function(e,t){if(null==e||null==e)return[]
if(Array.isArray(e))return e.map((function(e){return new P.Token(P.utils.asString(e).toLowerCase(),P.utils.clone(t))}))
for(var n=e.toString().toLowerCase(),r=n.length,i=[],o=0,s=0;o<=r;o++){var a=o-s
if(n.charAt(o).match(P.tokenizer.separator)||o==r){if(a>0){var u=P.utils.clone(t)||{}
u.position=[s,a],u.index=i.length,i.push(new P.Token(n.slice(s,o),u))}s=o+1}}return i},P.tokenizer.separator=/[\s\-]+/,P.Pipeline=function(){this._stack=[]},P.Pipeline.registeredFunctions=Object.create(null),P.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&P.utils.warn("Overwriting existing registered function: "+t),e.label=t,P.Pipeline.registeredFunctions[e.label]=e},P.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||P.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",e)},P.Pipeline.load=function(e){var t=new P.Pipeline
return e.forEach((function(e){var n=P.Pipeline.registeredFunctions[e]
if(!n)throw new Error("Cannot load unregistered function: "+e)
t.add(n)})),t},P.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach((function(e){P.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},P.Pipeline.prototype.after=function(e,t){P.Pipeline.warnIfFunctionNotRegistered(t)
var n=this._stack.indexOf(e)
if(-1==n)throw new Error("Cannot find existingFn")
n+=1,this._stack.splice(n,0,t)},P.Pipeline.prototype.before=function(e,t){P.Pipeline.warnIfFunctionNotRegistered(t)
var n=this._stack.indexOf(e)
if(-1==n)throw new Error("Cannot find existingFn")
this._stack.splice(n,0,t)},P.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},P.Pipeline.prototype.run=function(e){for(var t=this._stack.length,n=0;n<t;n++){for(var r=this._stack[n],i=[],o=0;o<e.length;o++){var s=r(e[o],o,e)
if(null!=s&&""!==s)if(Array.isArray(s))for(var a=0;a<s.length;a++)i.push(s[a])
else i.push(s)}e=i}return e},P.Pipeline.prototype.runString=function(e,t){var n=new P.Token(e,t)
return this.run([n]).map((function(e){return e.toString()}))},P.Pipeline.prototype.reset=function(){this._stack=[]},P.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return P.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},P.Vector=function(e){this._magnitude=0,this.elements=e||[]},P.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0
for(var t=0,n=this.elements.length/2,r=n-t,i=Math.floor(r/2),o=this.elements[2*i];r>1&&(o<e&&(t=i),o>e&&(n=i),o!=e);)r=n-t,i=t+Math.floor(r/2),o=this.elements[2*i]
return o==e||o>e?2*i:o<e?2*(i+1):void 0},P.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},P.Vector.prototype.upsert=function(e,t,n){this._magnitude=0
var r=this.positionForIndex(e)
this.elements[r]==e?this.elements[r+1]=n(this.elements[r+1],t):this.elements.splice(r,0,e,t)},P.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude
for(var e=0,t=this.elements.length,n=1;n<t;n+=2){var r=this.elements[n]
e+=r*r}return this._magnitude=Math.sqrt(e)},P.Vector.prototype.dot=function(e){for(var t=0,n=this.elements,r=e.elements,i=n.length,o=r.length,s=0,a=0,u=0,l=0;u<i&&l<o;)(s=n[u])<(a=r[l])?u+=2:s>a?l+=2:s==a&&(t+=n[u+1]*r[l+1],u+=2,l+=2)
return t},P.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},P.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,n=0;t<this.elements.length;t+=2,n++)e[n]=this.elements[t]
return e},P.Vector.prototype.toJSON=function(){return this.elements},P.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},s={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},c="^("+(u="[^aeiou][^aeiouy]*")+")?"+(l=(a="[aeiouy]")+"[aeiou]*")+u+"("+l+")?$",f="^("+u+")?"+l+u+l+u,h="^("+u+")?"+a,p=new RegExp("^("+u+")?"+l+u),d=new RegExp(f),g=new RegExp(c),m=new RegExp(h),v=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,b=/^(.+?)eed$/,x=/^(.+?)(ed|ing)$/,w=/.$/,_=/(at|bl|iz)$/,E=new RegExp("([^aeiouylsz])\\1$"),k=new RegExp("^"+u+a+"[^aeiouwxy]$"),S=/^(.+?[^aeiou])y$/,T=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,O=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,A=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,C=/^(.+?)(s|t)(ion)$/,N=/^(.+?)e$/,j=/ll$/,R=new RegExp("^"+u+a+"[^aeiouwxy]$"),L=function(e){var t,n,r,i,a,u,l
if(e.length<3)return e
if("y"==(r=e.substr(0,1))&&(e=r.toUpperCase()+e.substr(1)),a=y,(i=v).test(e)?e=e.replace(i,"$1$2"):a.test(e)&&(e=e.replace(a,"$1$2")),a=x,(i=b).test(e)){var c=i.exec(e);(i=p).test(c[1])&&(i=w,e=e.replace(i,""))}else a.test(e)&&(t=(c=a.exec(e))[1],(a=m).test(t)&&(u=E,l=k,(a=_).test(e=t)?e+="e":u.test(e)?(i=w,e=e.replace(i,"")):l.test(e)&&(e+="e")))
return(i=S).test(e)&&(e=(t=(c=i.exec(e))[1])+"i"),(i=T).test(e)&&(t=(c=i.exec(e))[1],n=c[2],(i=p).test(t)&&(e=t+o[n])),(i=O).test(e)&&(t=(c=i.exec(e))[1],n=c[2],(i=p).test(t)&&(e=t+s[n])),a=C,(i=A).test(e)?(t=(c=i.exec(e))[1],(i=d).test(t)&&(e=t)):a.test(e)&&(t=(c=a.exec(e))[1]+c[2],(a=d).test(t)&&(e=t)),(i=N).test(e)&&(t=(c=i.exec(e))[1],a=g,u=R,((i=d).test(t)||a.test(t)&&!u.test(t))&&(e=t)),a=d,(i=j).test(e)&&a.test(e)&&(i=w,e=e.replace(i,"")),"y"==r&&(e=r.toLowerCase()+e.substr(1)),e},function(e){return e.update(L)}),P.Pipeline.registerFunction(P.stemmer,"stemmer"),P.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{})
return function(e){if(e&&t[e.toString()]!==e.toString())return e}},P.stopWordFilter=P.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),P.Pipeline.registerFunction(P.stopWordFilter,"stopWordFilter"),P.trimmer=function(e){return e.update((function(e){return e.replace(/^\W+/,"").replace(/\W+$/,"")}))},P.Pipeline.registerFunction(P.trimmer,"trimmer"),P.TokenSet=function(){this.final=!1,this.edges={},this.id=P.TokenSet._nextId,P.TokenSet._nextId+=1},P.TokenSet._nextId=1,P.TokenSet.fromArray=function(e){for(var t=new P.TokenSet.Builder,n=0,r=e.length;n<r;n++)t.insert(e[n])
return t.finish(),t.root},P.TokenSet.fromClause=function(e){return"editDistance"in e?P.TokenSet.fromFuzzyString(e.term,e.editDistance):P.TokenSet.fromString(e.term)},P.TokenSet.fromFuzzyString=function(e,t){for(var n=new P.TokenSet,r=[{node:n,editsRemaining:t,str:e}];r.length;){var i=r.pop()
if(i.str.length>0){var o,s=i.str.charAt(0)
s in i.node.edges?o=i.node.edges[s]:(o=new P.TokenSet,i.node.edges[s]=o),1==i.str.length&&(o.final=!0),r.push({node:o,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"]
else a=new P.TokenSet,i.node.edges["*"]=a
if(0==i.str.length&&(a.final=!0),r.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&r.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"]
else u=new P.TokenSet,i.node.edges["*"]=u
1==i.str.length&&(u.final=!0),r.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),f=i.str.charAt(1)
f in i.node.edges?l=i.node.edges[f]:(l=new P.TokenSet,i.node.edges[f]=l),1==i.str.length&&(l.final=!0),r.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return n},P.TokenSet.fromString=function(e){for(var t=new P.TokenSet,n=t,r=0,i=e.length;r<i;r++){var o=e[r],s=r==i-1
if("*"==o)t.edges[o]=t,t.final=s
else{var a=new P.TokenSet
a.final=s,t.edges[o]=a,t=a}}return n},P.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var n=t.pop(),r=Object.keys(n.node.edges),i=r.length
n.node.final&&(n.prefix.charAt(0),e.push(n.prefix))
for(var o=0;o<i;o++){var s=r[o]
t.push({prefix:n.prefix.concat(s),node:n.node.edges[s]})}}return e},P.TokenSet.prototype.toString=function(){if(this._str)return this._str
for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),n=t.length,r=0;r<n;r++){var i=t[r]
e=e+i+this.edges[i].id}return e},P.TokenSet.prototype.intersect=function(e){for(var t=new P.TokenSet,n=void 0,r=[{qNode:e,output:t,node:this}];r.length;){n=r.pop()
for(var i=Object.keys(n.qNode.edges),o=i.length,s=Object.keys(n.node.edges),a=s.length,u=0;u<o;u++)for(var l=i[u],c=0;c<a;c++){var f=s[c]
if(f==l||"*"==l){var h=n.node.edges[f],p=n.qNode.edges[l],d=h.final&&p.final,g=void 0
f in n.output.edges?(g=n.output.edges[f]).final=g.final||d:((g=new P.TokenSet).final=d,n.output.edges[f]=g),r.push({qNode:p,output:g,node:h})}}}return t},P.TokenSet.Builder=function(){this.previousWord="",this.root=new P.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},P.TokenSet.Builder.prototype.insert=function(e){var t,n=0
if(e<this.previousWord)throw new Error("Out of order word insertion")
for(var r=0;r<e.length&&r<this.previousWord.length&&e[r]==this.previousWord[r];r++)n++
for(this.minimize(n),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,r=n;r<e.length;r++){var i=new P.TokenSet,o=e[r]
t.edges[o]=i,this.uncheckedNodes.push({parent:t,char:o,child:i}),t=i}t.final=!0,this.previousWord=e},P.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},P.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var n=this.uncheckedNodes[t],r=n.child.toString()
r in this.minimizedNodes?n.parent.edges[n.char]=this.minimizedNodes[r]:(n.child._str=r,this.minimizedNodes[r]=n.child),this.uncheckedNodes.pop()}},P.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},P.Index.prototype.search=function(e){return this.query((function(t){new P.QueryParser(e,t).parse()}))},P.Index.prototype.query=function(e){for(var t=new P.Query(this.fields),n=Object.create(null),r=Object.create(null),i=Object.create(null),o=Object.create(null),s=Object.create(null),a=0;a<this.fields.length;a++)r[this.fields[a]]=new P.Vector
for(e.call(t,t),a=0;a<t.clauses.length;a++){var u,l=t.clauses[a],c=P.Set.empty
u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term]
for(var f=0;f<u.length;f++){var h=u[f]
l.term=h
var p=P.TokenSet.fromClause(l),d=this.tokenSet.intersect(p).toArray()
if(0===d.length&&l.presence===P.Query.presence.REQUIRED){for(var g=0;g<l.fields.length;g++)o[j=l.fields[g]]=P.Set.empty
break}for(var m=0;m<d.length;m++){var v=d[m],y=this.invertedIndex[v],b=y._index
for(g=0;g<l.fields.length;g++){var x=y[j=l.fields[g]],w=Object.keys(x),_=v+"/"+j,E=new P.Set(w)
if(l.presence==P.Query.presence.REQUIRED&&(c=c.union(E),void 0===o[j]&&(o[j]=P.Set.complete)),l.presence!=P.Query.presence.PROHIBITED){if(r[j].upsert(b,l.boost,(function(e,t){return e+t})),!i[_]){for(var k=0;k<w.length;k++){var S,T=w[k],O=new P.FieldRef(T,j),A=x[T]
void 0===(S=n[O])?n[O]=new P.MatchData(v,j,A):S.add(v,j,A)}i[_]=!0}}else void 0===s[j]&&(s[j]=P.Set.empty),s[j]=s[j].union(E)}}}if(l.presence===P.Query.presence.REQUIRED)for(g=0;g<l.fields.length;g++)o[j=l.fields[g]]=o[j].intersect(c)}var C=P.Set.complete,N=P.Set.empty
for(a=0;a<this.fields.length;a++){var j
o[j=this.fields[a]]&&(C=C.intersect(o[j])),s[j]&&(N=N.union(s[j]))}var R=Object.keys(n),L=[],I=Object.create(null)
if(t.isNegated())for(R=Object.keys(this.fieldVectors),a=0;a<R.length;a++){O=R[a]
var D=P.FieldRef.fromString(O)
n[O]=new P.MatchData}for(a=0;a<R.length;a++){var M=(D=P.FieldRef.fromString(R[a])).docRef
if(C.contains(M)&&!N.contains(M)){var $,B=this.fieldVectors[D],z=r[D.fieldName].similarity(B)
if(void 0!==($=I[M]))$.score+=z,$.matchData.combine(n[D])
else{var F={ref:M,score:z,matchData:n[D]}
I[M]=F,L.push(F)}}}return L.sort((function(e,t){return t.score-e.score}))},P.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this)
return{version:P.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},P.Index.load=function(e){var t={},n={},r=e.fieldVectors,i=Object.create(null),o=e.invertedIndex,s=new P.TokenSet.Builder,a=P.Pipeline.load(e.pipeline)
e.version!=P.version&&P.utils.warn("Version mismatch when loading serialised index. Current version of lunr '"+P.version+"' does not match serialized index '"+e.version+"'")
for(var u=0;u<r.length;u++){var l=(f=r[u])[0],c=f[1]
n[l]=new P.Vector(c)}for(u=0;u<o.length;u++){var f,h=(f=o[u])[0],p=f[1]
s.insert(h),i[h]=p}return s.finish(),t.fields=e.fields,t.fieldVectors=n,t.invertedIndex=i,t.tokenSet=s.root,t.pipeline=a,new P.Index(t)},P.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=P.tokenizer,this.pipeline=new P.Pipeline,this.searchPipeline=new P.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},P.Builder.prototype.ref=function(e){this._ref=e},P.Builder.prototype.field=function(e,t){if(/\//.test(e))throw new RangeError("Field '"+e+"' contains illegal character '/'")
this._fields[e]=t||{}},P.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},P.Builder.prototype.k1=function(e){this._k1=e},P.Builder.prototype.add=function(e,t){var n=e[this._ref],r=Object.keys(this._fields)
this._documents[n]=t||{},this.documentCount+=1
for(var i=0;i<r.length;i++){var o=r[i],s=this._fields[o].extractor,a=s?s(e):e[o],u=this.tokenizer(a,{fields:[o]}),l=this.pipeline.run(u),c=new P.FieldRef(n,o),f=Object.create(null)
this.fieldTermFrequencies[c]=f,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length
for(var h=0;h<l.length;h++){var p=l[h]
if(null==f[p]&&(f[p]=0),f[p]+=1,null==this.invertedIndex[p]){var d=Object.create(null)
d._index=this.termIndex,this.termIndex+=1
for(var g=0;g<r.length;g++)d[r[g]]=Object.create(null)
this.invertedIndex[p]=d}null==this.invertedIndex[p][o][n]&&(this.invertedIndex[p][o][n]=Object.create(null))
for(var m=0;m<this.metadataWhitelist.length;m++){var v=this.metadataWhitelist[m],y=p.metadata[v]
null==this.invertedIndex[p][o][n][v]&&(this.invertedIndex[p][o][n][v]=[]),this.invertedIndex[p][o][n][v].push(y)}}}},P.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,n={},r={},i=0;i<t;i++){var o=P.FieldRef.fromString(e[i]),s=o.fieldName
r[s]||(r[s]=0),r[s]+=1,n[s]||(n[s]=0),n[s]+=this.fieldLengths[o]}var a=Object.keys(this._fields)
for(i=0;i<a.length;i++){var u=a[i]
n[u]=n[u]/r[u]}this.averageFieldLength=n},P.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),n=t.length,r=Object.create(null),i=0;i<n;i++){for(var o=P.FieldRef.fromString(t[i]),s=o.fieldName,a=this.fieldLengths[o],u=new P.Vector,l=this.fieldTermFrequencies[o],c=Object.keys(l),f=c.length,h=this._fields[s].boost||1,p=this._documents[o.docRef].boost||1,d=0;d<f;d++){var g,m,v,y=c[d],b=l[y],x=this.invertedIndex[y]._index
void 0===r[y]?(g=P.idf(this.invertedIndex[y],this.documentCount),r[y]=g):g=r[y],m=g*((this._k1+1)*b)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[s]))+b),m*=h,m*=p,v=Math.round(1e3*m)/1e3,u.insert(x,v)}e[o]=u}this.fieldVectors=e},P.Builder.prototype.createTokenSet=function(){this.tokenSet=P.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},P.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new P.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},P.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1)
t.unshift(this),e.apply(this,t)},P.MatchData=function(e,t,n){for(var r=Object.create(null),i=Object.keys(n||{}),o=0;o<i.length;o++){var s=i[o]
r[s]=n[s].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=r)},P.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),n=0;n<t.length;n++){var r=t[n],i=Object.keys(e.metadata[r])
null==this.metadata[r]&&(this.metadata[r]=Object.create(null))
for(var o=0;o<i.length;o++){var s=i[o],a=Object.keys(e.metadata[r][s])
null==this.metadata[r][s]&&(this.metadata[r][s]=Object.create(null))
for(var u=0;u<a.length;u++){var l=a[u]
null==this.metadata[r][s][l]?this.metadata[r][s][l]=e.metadata[r][s][l]:this.metadata[r][s][l]=this.metadata[r][s][l].concat(e.metadata[r][s][l])}}}},P.MatchData.prototype.add=function(e,t,n){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=n)
if(t in this.metadata[e])for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i]
o in this.metadata[e][t]?this.metadata[e][t][o]=this.metadata[e][t][o].concat(n[o]):this.metadata[e][t][o]=n[o]}else this.metadata[e][t]=n},P.Query=function(e){this.clauses=[],this.allFields=e},P.Query.wildcard=new String("*"),P.Query.wildcard.NONE=0,P.Query.wildcard.LEADING=1,P.Query.wildcard.TRAILING=2,P.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},P.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=P.Query.wildcard.NONE),e.wildcard&P.Query.wildcard.LEADING&&e.term.charAt(0)!=P.Query.wildcard&&(e.term="*"+e.term),e.wildcard&P.Query.wildcard.TRAILING&&e.term.slice(-1)!=P.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=P.Query.presence.OPTIONAL),this.clauses.push(e),this},P.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=P.Query.presence.PROHIBITED)return!1
return!0},P.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,P.utils.clone(t))}),this),this
var n=t||{}
return n.term=e.toString(),this.clause(n),this},P.QueryParseError=function(e,t,n){this.name="QueryParseError",this.message=e,this.start=t,this.end=n},P.QueryParseError.prototype=new Error,P.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},P.QueryLexer.prototype.run=function(){for(var e=P.QueryLexer.lexText;e;)e=e(this)},P.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,n=this.pos,r=0;r<this.escapeCharPositions.length;r++)n=this.escapeCharPositions[r],e.push(this.str.slice(t,n)),t=n+1
return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},P.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},P.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},P.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return P.QueryLexer.EOS
var e=this.str.charAt(this.pos)
return this.pos+=1,e},P.QueryLexer.prototype.width=function(){return this.pos-this.start},P.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},P.QueryLexer.prototype.backup=function(){this.pos-=1},P.QueryLexer.prototype.acceptDigitRun=function(){var e,t
do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58)
e!=P.QueryLexer.EOS&&this.backup()},P.QueryLexer.prototype.more=function(){return this.pos<this.length},P.QueryLexer.EOS="EOS",P.QueryLexer.FIELD="FIELD",P.QueryLexer.TERM="TERM",P.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",P.QueryLexer.BOOST="BOOST",P.QueryLexer.PRESENCE="PRESENCE",P.QueryLexer.lexField=function(e){return e.backup(),e.emit(P.QueryLexer.FIELD),e.ignore(),P.QueryLexer.lexText},P.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(P.QueryLexer.TERM)),e.ignore(),e.more())return P.QueryLexer.lexText},P.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(P.QueryLexer.EDIT_DISTANCE),P.QueryLexer.lexText},P.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(P.QueryLexer.BOOST),P.QueryLexer.lexText},P.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(P.QueryLexer.TERM)},P.QueryLexer.termSeparator=P.tokenizer.separator,P.QueryLexer.lexText=function(e){for(;;){var t=e.next()
if(t==P.QueryLexer.EOS)return P.QueryLexer.lexEOS
if(92!=t.charCodeAt(0)){if(":"==t)return P.QueryLexer.lexField
if("~"==t)return e.backup(),e.width()>0&&e.emit(P.QueryLexer.TERM),P.QueryLexer.lexEditDistance
if("^"==t)return e.backup(),e.width()>0&&e.emit(P.QueryLexer.TERM),P.QueryLexer.lexBoost
if("+"==t&&1===e.width())return e.emit(P.QueryLexer.PRESENCE),P.QueryLexer.lexText
if("-"==t&&1===e.width())return e.emit(P.QueryLexer.PRESENCE),P.QueryLexer.lexText
if(t.match(P.QueryLexer.termSeparator))return P.QueryLexer.lexTerm}else e.escapeCharacter()}},P.QueryParser=function(e,t){this.lexer=new P.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},P.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes
for(var e=P.QueryParser.parseClause;e;)e=e(this)
return this.query},P.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},P.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme()
return this.lexemeIdx+=1,e},P.QueryParser.prototype.nextClause=function(){var e=this.currentClause
this.query.clause(e),this.currentClause={}},P.QueryParser.parseClause=function(e){var t=e.peekLexeme()
if(null!=t)switch(t.type){case P.QueryLexer.PRESENCE:return P.QueryParser.parsePresence
case P.QueryLexer.FIELD:return P.QueryParser.parseField
case P.QueryLexer.TERM:return P.QueryParser.parseTerm
default:var n="expected either a field or a term, found "+t.type
throw t.str.length>=1&&(n+=" with value '"+t.str+"'"),new P.QueryParseError(n,t.start,t.end)}},P.QueryParser.parsePresence=function(e){var t=e.consumeLexeme()
if(null!=t){switch(t.str){case"-":e.currentClause.presence=P.Query.presence.PROHIBITED
break
case"+":e.currentClause.presence=P.Query.presence.REQUIRED
break
default:var n="unrecognised presence operator'"+t.str+"'"
throw new P.QueryParseError(n,t.start,t.end)}var r=e.peekLexeme()
if(null==r)throw n="expecting term or field, found nothing",new P.QueryParseError(n,t.start,t.end)
switch(r.type){case P.QueryLexer.FIELD:return P.QueryParser.parseField
case P.QueryLexer.TERM:return P.QueryParser.parseTerm
default:throw n="expecting term or field, found '"+r.type+"'",new P.QueryParseError(n,r.start,r.end)}}},P.QueryParser.parseField=function(e){var t=e.consumeLexeme()
if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var n=e.query.allFields.map((function(e){return"'"+e+"'"})).join(", "),r="unrecognised field '"+t.str+"', possible fields: "+n
throw new P.QueryParseError(r,t.start,t.end)}e.currentClause.fields=[t.str]
var i=e.peekLexeme()
if(null==i)throw r="expecting term, found nothing",new P.QueryParseError(r,t.start,t.end)
if(i.type===P.QueryLexer.TERM)return P.QueryParser.parseTerm
throw r="expecting term, found '"+i.type+"'",new P.QueryParseError(r,i.start,i.end)}},P.QueryParser.parseTerm=function(e){var t=e.consumeLexeme()
if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1)
var n=e.peekLexeme()
if(null!=n)switch(n.type){case P.QueryLexer.TERM:return e.nextClause(),P.QueryParser.parseTerm
case P.QueryLexer.FIELD:return e.nextClause(),P.QueryParser.parseField
case P.QueryLexer.EDIT_DISTANCE:return P.QueryParser.parseEditDistance
case P.QueryLexer.BOOST:return P.QueryParser.parseBoost
case P.QueryLexer.PRESENCE:return e.nextClause(),P.QueryParser.parsePresence
default:var r="Unexpected lexeme type '"+n.type+"'"
throw new P.QueryParseError(r,n.start,n.end)}else e.nextClause()}},P.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme()
if(null!=t){var n=parseInt(t.str,10)
if(isNaN(n)){var r="edit distance must be numeric"
throw new P.QueryParseError(r,t.start,t.end)}e.currentClause.editDistance=n
var i=e.peekLexeme()
if(null!=i)switch(i.type){case P.QueryLexer.TERM:return e.nextClause(),P.QueryParser.parseTerm
case P.QueryLexer.FIELD:return e.nextClause(),P.QueryParser.parseField
case P.QueryLexer.EDIT_DISTANCE:return P.QueryParser.parseEditDistance
case P.QueryLexer.BOOST:return P.QueryParser.parseBoost
case P.QueryLexer.PRESENCE:return e.nextClause(),P.QueryParser.parsePresence
default:throw r="Unexpected lexeme type '"+i.type+"'",new P.QueryParseError(r,i.start,i.end)}else e.nextClause()}},P.QueryParser.parseBoost=function(e){var t=e.consumeLexeme()
if(null!=t){var n=parseInt(t.str,10)
if(isNaN(n)){var r="boost must be numeric"
throw new P.QueryParseError(r,t.start,t.end)}e.currentClause.boost=n
var i=e.peekLexeme()
if(null!=i)switch(i.type){case P.QueryLexer.TERM:return e.nextClause(),P.QueryParser.parseTerm
case P.QueryLexer.FIELD:return e.nextClause(),P.QueryParser.parseField
case P.QueryLexer.EDIT_DISTANCE:return P.QueryParser.parseEditDistance
case P.QueryLexer.BOOST:return P.QueryParser.parseBoost
case P.QueryLexer.PRESENCE:return e.nextClause(),P.QueryParser.parsePresence
default:throw r="Unexpected lexeme type '"+i.type+"'",new P.QueryParseError(r,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(r=function(){return P})?r.call(t,n,t,e):r)||(e.exports=i)}()},290:(e,t,n)=>{const r=n(30),{defaults:i}=n(350),{inline:o}=n(228),{findClosingBracket:s,escape:a}=n(610)
e.exports=class e{constructor(e,t){if(this.options=t||i,this.links=e,this.rules=o.normal,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.")
this.options.pedantic?this.rules=o.pedantic:this.options.gfm&&(this.options.breaks?this.rules=o.breaks:this.rules=o.gfm)}static get rules(){return o}static output(t,n,r){return new e(n,r).output(t)}output(t){let n,r,i,o,u,l,c=""
for(;t;)if(u=this.rules.escape.exec(t))t=t.substring(u[0].length),c+=a(u[1])
else if(u=this.rules.tag.exec(t))!this.inLink&&/^<a /i.test(u[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(u[0])&&(this.inLink=!1),!this.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(u[0])?this.inRawBlock=!0:this.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(u[0])&&(this.inRawBlock=!1),t=t.substring(u[0].length),c+=this.renderer.html(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(u[0]):a(u[0]):u[0])
else if(u=this.rules.link.exec(t)){const r=s(u[2],"()")
if(r>-1){const e=(0===u[0].indexOf("!")?5:4)+u[1].length+r
u[2]=u[2].substring(0,r),u[0]=u[0].substring(0,e).trim(),u[3]=""}t=t.substring(u[0].length),this.inLink=!0,i=u[2],this.options.pedantic?(n=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i),n?(i=n[1],o=n[3]):o=""):o=u[3]?u[3].slice(1,-1):"",i=i.trim().replace(/^<([\s\S]*)>$/,"$1"),c+=this.outputLink(u,{href:e.escapes(i),title:e.escapes(o)}),this.inLink=!1}else if((u=this.rules.reflink.exec(t))||(u=this.rules.nolink.exec(t))){if(t=t.substring(u[0].length),n=(u[2]||u[1]).replace(/\s+/g," "),n=this.links[n.toLowerCase()],!n||!n.href){c+=u[0].charAt(0),t=u[0].substring(1)+t
continue}this.inLink=!0,c+=this.outputLink(u,n),this.inLink=!1}else if(u=this.rules.strong.exec(t))t=t.substring(u[0].length),c+=this.renderer.strong(this.output(u[4]||u[3]||u[2]||u[1]))
else if(u=this.rules.em.exec(t))t=t.substring(u[0].length),c+=this.renderer.em(this.output(u[6]||u[5]||u[4]||u[3]||u[2]||u[1]))
else if(u=this.rules.code.exec(t))t=t.substring(u[0].length),c+=this.renderer.codespan(a(u[2].trim(),!0))
else if(u=this.rules.br.exec(t))t=t.substring(u[0].length),c+=this.renderer.br()
else if(u=this.rules.del.exec(t))t=t.substring(u[0].length),c+=this.renderer.del(this.output(u[1]))
else if(u=this.rules.autolink.exec(t))t=t.substring(u[0].length),"@"===u[2]?(r=a(this.mangle(u[1])),i="mailto:"+r):(r=a(u[1]),i=r),c+=this.renderer.link(i,null,r)
else if(this.inLink||!(u=this.rules.url.exec(t))){if(u=this.rules.text.exec(t))t=t.substring(u[0].length),this.inRawBlock?c+=this.renderer.text(this.options.sanitize?this.options.sanitizer?this.options.sanitizer(u[0]):a(u[0]):u[0]):c+=this.renderer.text(a(this.smartypants(u[0])))
else if(t)throw new Error("Infinite loop on byte: "+t.charCodeAt(0))}else{if("@"===u[2])r=a(u[0]),i="mailto:"+r
else{do{l=u[0],u[0]=this.rules._backpedal.exec(u[0])[0]}while(l!==u[0])
r=a(u[0]),i="www."===u[1]?"http://"+r:r}t=t.substring(u[0].length),c+=this.renderer.link(i,null,r)}return c}static escapes(t){return t?t.replace(e.rules._escapes,"$1"):t}outputLink(e,t){const n=t.href,r=t.title?a(t.title):null
return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,a(e[1]))}smartypants(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e}mangle(e){if(!this.options.mangle)return e
const t=e.length
let n,r="",i=0
for(;i<t;i++)n=e.charCodeAt(i),Math.random()>.5&&(n="x"+n.toString(16)),r+="&#"+n+";"
return r}}},975:(e,t,n)=>{const{defaults:r}=n(350),{block:i}=n(228),{rtrim:o,splitCells:s,escape:a}=n(610)
e.exports=class e{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||r,this.rules=i.normal,this.options.pedantic?this.rules=i.pedantic:this.options.gfm&&(this.rules=i.gfm)}static get rules(){return i}static lex(t,n){return new e(n).lex(t)}lex(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.token(e,!0)}token(e,t){let n,r,u,l,c,f,h,p,d,g,m,v,y,b,x,w
for(e=e.replace(/^ +$/gm,"");e;)if((u=this.rules.newline.exec(e))&&(e=e.substring(u[0].length),u[0].length>1&&this.tokens.push({type:"space"})),u=this.rules.code.exec(e)){const t=this.tokens[this.tokens.length-1]
e=e.substring(u[0].length),t&&"paragraph"===t.type?t.text+="\n"+u[0].trimRight():(u=u[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",codeBlockStyle:"indented",text:this.options.pedantic?u:o(u,"\n")}))}else if(u=this.rules.fences.exec(e))e=e.substring(u[0].length),this.tokens.push({type:"code",lang:u[2]?u[2].trim():u[2],text:u[3]||""})
else if(u=this.rules.heading.exec(e))e=e.substring(u[0].length),this.tokens.push({type:"heading",depth:u[1].length,text:u[2]})
else if((u=this.rules.nptable.exec(e))&&(f={type:"table",header:s(u[1].replace(/^ *| *\| *$/g,"")),align:u[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:u[3]?u[3].replace(/\n$/,"").split("\n"):[]},f.header.length===f.align.length)){for(e=e.substring(u[0].length),m=0;m<f.align.length;m++)/^ *-+: *$/.test(f.align[m])?f.align[m]="right":/^ *:-+: *$/.test(f.align[m])?f.align[m]="center":/^ *:-+ *$/.test(f.align[m])?f.align[m]="left":f.align[m]=null
for(m=0;m<f.cells.length;m++)f.cells[m]=s(f.cells[m],f.header.length)
this.tokens.push(f)}else if(u=this.rules.hr.exec(e))e=e.substring(u[0].length),this.tokens.push({type:"hr"})
else if(u=this.rules.blockquote.exec(e))e=e.substring(u[0].length),this.tokens.push({type:"blockquote_start"}),u=u[0].replace(/^ *> ?/gm,""),this.token(u,t),this.tokens.push({type:"blockquote_end"})
else if(u=this.rules.list.exec(e)){for(e=e.substring(u[0].length),l=u[2],b=l.length>1,h={type:"list_start",ordered:b,start:b?+l:"",loose:!1},this.tokens.push(h),u=u[0].match(this.rules.item),p=[],n=!1,y=u.length,m=0;m<y;m++)f=u[m],g=f.length,f=f.replace(/^ *([*+-]|\d+\.) */,""),~f.indexOf("\n ")&&(g-=f.length,f=this.options.pedantic?f.replace(/^ {1,4}/gm,""):f.replace(new RegExp("^ {1,"+g+"}","gm"),"")),m!==y-1&&(c=i.bullet.exec(u[m+1])[0],(l.length>1?1===c.length:c.length>1||this.options.smartLists&&c!==l)&&(e=u.slice(m+1).join("\n")+e,m=y-1)),r=n||/\n\n(?!\s*$)/.test(f),m!==y-1&&(n="\n"===f.charAt(f.length-1),r||(r=n)),r&&(h.loose=!0),x=/^\[[ xX]\] /.test(f),w=void 0,x&&(w=" "!==f[1],f=f.replace(/^\[[ xX]\] +/,"")),d={type:"list_item_start",task:x,checked:w,loose:r},p.push(d),this.tokens.push(d),this.token(f,!1),this.tokens.push({type:"list_item_end"})
if(h.loose)for(y=p.length,m=0;m<y;m++)p[m].loose=!0
this.tokens.push({type:"list_end"})}else if(u=this.rules.html.exec(e))e=e.substring(u[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===u[1]||"script"===u[1]||"style"===u[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(u[0]):a(u[0]):u[0]})
else if(t&&(u=this.rules.def.exec(e)))e=e.substring(u[0].length),u[3]&&(u[3]=u[3].substring(1,u[3].length-1)),v=u[1].toLowerCase().replace(/\s+/g," "),this.tokens.links[v]||(this.tokens.links[v]={href:u[2],title:u[3]})
else if((u=this.rules.table.exec(e))&&(f={type:"table",header:s(u[1].replace(/^ *| *\| *$/g,"")),align:u[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:u[3]?u[3].replace(/\n$/,"").split("\n"):[]},f.header.length===f.align.length)){for(e=e.substring(u[0].length),m=0;m<f.align.length;m++)/^ *-+: *$/.test(f.align[m])?f.align[m]="right":/^ *:-+: *$/.test(f.align[m])?f.align[m]="center":/^ *:-+ *$/.test(f.align[m])?f.align[m]="left":f.align[m]=null
for(m=0;m<f.cells.length;m++)f.cells[m]=s(f.cells[m].replace(/^ *\| *| *\| *$/g,""),f.header.length)
this.tokens.push(f)}else if(u=this.rules.lheading.exec(e))e=e.substring(u[0].length),this.tokens.push({type:"heading",depth:"="===u[2].charAt(0)?1:2,text:u[1]})
else if(t&&(u=this.rules.paragraph.exec(e)))e=e.substring(u[0].length),this.tokens.push({type:"paragraph",text:"\n"===u[1].charAt(u[1].length-1)?u[1].slice(0,-1):u[1]})
else if(u=this.rules.text.exec(e))e=e.substring(u[0].length),this.tokens.push({type:"text",text:u[0]})
else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))
return this.tokens}}},263:(e,t,n)=>{const r=n(30),i=n(951),o=n(290),s=n(226),{defaults:a}=n(350),{merge:u,unescape:l}=n(610)
e.exports=class e{constructor(e){this.tokens=[],this.token=null,this.options=e||a,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options,this.slugger=new i}static parse(t,n){return new e(n).parse(t)}parse(e){this.inline=new o(e.links,this.options),this.inlineText=new o(e.links,u({},this.options,{renderer:new s})),this.tokens=e.reverse()
let t=""
for(;this.next();)t+=this.tok()
return t}next(){return this.token=this.tokens.pop(),this.token}peek(){return this.tokens[this.tokens.length-1]||0}parseText(){let e=this.token.text
for(;"text"===this.peek().type;)e+="\n"+this.next().text
return this.inline.output(e)}tok(){let e=""
switch(this.token.type){case"space":return""
case"hr":return this.renderer.hr()
case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,l(this.inlineText.output(this.token.text)),this.slugger)
case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)
case"table":{let t,n,r,i,o=""
for(r="",t=0;t<this.token.header.length;t++)r+=this.renderer.tablecell(this.inline.output(this.token.header[t]),{header:!0,align:this.token.align[t]})
for(o+=this.renderer.tablerow(r),t=0;t<this.token.cells.length;t++){for(n=this.token.cells[t],r="",i=0;i<n.length;i++)r+=this.renderer.tablecell(this.inline.output(n[i]),{header:!1,align:this.token.align[i]})
e+=this.renderer.tablerow(r)}return this.renderer.table(o,e)}case"blockquote_start":for(e="";"blockquote_end"!==this.next().type;)e+=this.tok()
return this.renderer.blockquote(e)
case"list_start":{e=""
const t=this.token.ordered,n=this.token.start
for(;"list_end"!==this.next().type;)e+=this.tok()
return this.renderer.list(e,t,n)}case"list_item_start":{e=""
const t=this.token.loose,n=this.token.checked,r=this.token.task
if(this.token.task)if(t)if("text"===this.peek().type){const e=this.peek()
e.text=this.renderer.checkbox(n)+" "+e.text}else this.tokens.push({type:"text",text:this.renderer.checkbox(n)})
else e+=this.renderer.checkbox(n)
for(;"list_item_end"!==this.next().type;)e+=t||"text"!==this.token.type?this.tok():this.parseText()
return this.renderer.listitem(e,r,n)}case"html":return this.renderer.html(this.token.text)
case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text))
case"text":return this.renderer.paragraph(this.parseText())
default:{const e='Token with "'+this.token.type+'" type was not found.'
if(!this.options.silent)throw new Error(e)
console.log(e)}}}}},30:(e,t,n)=>{const{defaults:r}=n(350),{cleanUrl:i,escape:o}=n(610)
e.exports=class{constructor(e){this.options=e||r}code(e,t,n){const r=(t||"").match(/\S*/)[0]
if(this.options.highlight){const t=this.options.highlight(e,r)
null!=t&&t!==e&&(n=!0,e=t)}return r?'<pre><code class="'+this.options.langPrefix+o(r,!0)+'">'+(n?e:o(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:o(e,!0))+"</code></pre>"}blockquote(e){return"<blockquote>\n"+e+"</blockquote>\n"}html(e){return e}heading(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,n){const r=t?"ol":"ul"
return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"}listitem(e){return"<li>"+e+"</li>\n"}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+"</p>\n"}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return"<tr>\n"+e+"</tr>\n"}tablecell(e,t){const n=t.header?"th":"td"
return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,n){if(null===(e=i(this.options.sanitize,this.options.baseUrl,e)))return n
let r='<a href="'+o(e)+'"'
return t&&(r+=' title="'+t+'"'),r+=">"+n+"</a>",r}image(e,t,n){if(null===(e=i(this.options.sanitize,this.options.baseUrl,e)))return n
let r='<img src="'+e+'" alt="'+n+'"'
return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">",r}text(e){return e}}},951:e=>{e.exports=class{constructor(){this.seen={}}slug(e){let t=e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")
if(this.seen.hasOwnProperty(t)){const e=t
do{this.seen[e]++,t=e+"-"+this.seen[e]}while(this.seen.hasOwnProperty(t))}return this.seen[t]=0,t}}},226:e=>{e.exports=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}}},350:e=>{e.exports={defaults:{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1},getDefaults:function(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,xhtml:!1}},changeDefaults:function(t){e.exports.defaults=t}}},610:e=>{const t=/[&<>"']/,n=/[&<>"']/g,r=/[<>"']|&(?!#?\w+;)/,i=/[<>"']|&(?!#?\w+;)/g,o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},s=e=>o[e],a=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi
function u(e){return e.replace(a,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const l=/(^|[^\[])\^/g,c=/[^\w:]/g,f=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i,h={},p=/^[^:]+:\/*[^/]*$/,d=/^([^:]+:)[\s\S]*$/,g=/^([^:]+:\/*[^/]*)[\s\S]*$/
function m(e,t){h[" "+e]||(p.test(e)?h[" "+e]=e+"/":h[" "+e]=v(e,"/",!0))
const n=-1===(e=h[" "+e]).indexOf(":")
return"//"===t.substring(0,2)?n?t:e.replace(d,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(g,"$1")+t:e+t}function v(e,t,n){const r=e.length
if(0===r)return""
let i=0
for(;i<r;){const o=e.charAt(r-i-1)
if(o!==t||n){if(o===t||!n)break
i++}else i++}return e.substr(0,r-i)}e.exports={escape:function(e,o){if(o){if(t.test(e))return e.replace(n,s)}else if(r.test(e))return e.replace(i,s)
return e},unescape:u,edit:function(e,t){e=e.source||e,t=t||""
const n={replace:(t,r)=>(r=(r=r.source||r).replace(l,"$1"),e=e.replace(t,r),n),getRegex:()=>new RegExp(e,t)}
return n},cleanUrl:function(e,t,n){if(e){let t
try{t=decodeURIComponent(u(n)).replace(c,"").toLowerCase()}catch(e){return null}if(0===t.indexOf("javascript:")||0===t.indexOf("vbscript:")||0===t.indexOf("data:"))return null}t&&!f.test(n)&&(n=m(t,n))
try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},resolveUrl:m,noopTest:{exec:function(){}},merge:function(e){let t,n,r=1
for(;r<arguments.length;r++)for(n in t=arguments[r],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])
return e},splitCells:function(e,t){const n=e.replace(/\|/g,((e,t,n)=>{let r=!1,i=t
for(;--i>=0&&"\\"===n[i];)r=!r
return r?"|":" |"})).split(/ \|/)
let r=0
if(n.length>t)n.splice(t)
else for(;n.length<t;)n.push("")
for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|")
return n},rtrim:v,findClosingBracket:function(e,t){if(-1===e.indexOf(t[1]))return-1
const n=e.length
let r=0,i=0
for(;i<n;i++)if("\\"===e[i])i++
else if(e[i]===t[0])r++
else if(e[i]===t[1]&&(r--,r<0))return i
return-1},checkSanitizeDeprecation:function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}}},9:(e,t,n)=>{const r=n(975),i=n(263),o=n(30),s=n(226),a=n(290),u=n(951),{merge:l,checkSanitizeDeprecation:c,escape:f}=n(610),{getDefaults:h,changeDefaults:p,defaults:d}=n(350)
function g(e,t,n){if(null==e)throw new Error("marked(): input parameter is undefined or null")
if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected")
if(n||"function"==typeof t){n||(n=t,t=null),t=l({},g.defaults,t||{}),c(t)
const o=t.highlight
let s,a,u=0
try{s=r.lex(e,t)}catch(e){return n(e)}a=s.length
const f=function(e){if(e)return t.highlight=o,n(e)
let r
try{r=i.parse(s,t)}catch(t){e=t}return t.highlight=o,e?n(e):n(null,r)}
if(!o||o.length<3)return f()
if(delete t.highlight,!a)return f()
for(;u<s.length;u++)!function(e){"code"!==e.type?--a||f():o(e.text,e.lang,(function(t,n){return t?f(t):null==n||n===e.text?--a||f():(e.text=n,e.escaped=!0,void(--a||f()))}))}(s[u])}else try{return t=l({},g.defaults,t||{}),c(t),i.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||g.defaults).silent)return"<p>An error occurred:</p><pre>"+f(e.message+"",!0)+"</pre>"
throw e}}g.options=g.setOptions=function(e){return l(g.defaults,e),p(g.defaults),g},g.getDefaults=h,g.defaults=d,g.Parser=i,g.parser=i.parse,g.Renderer=o,g.TextRenderer=s,g.Lexer=r,g.lexer=r.lex,g.InlineLexer=a,g.inlineLexer=a.output,g.Slugger=u,g.parse=g,e.exports=g},228:(e,t,n)=>{const{noopTest:r,edit:i,merge:o}=n(610),s={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:r,table:r,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/}
s.def=i(s.def).replace("label",s._label).replace("title",s._title).getRegex(),s.bullet=/(?:[*+-]|\d{1,9}\.)/,s.item=/^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/,s.item=i(s.item,"gm").replace(/bull/g,s.bullet).getRegex(),s.list=i(s.list).replace(/bull/g,s.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+s.def.source+")").getRegex(),s._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",s._comment=/<!--(?!-?>)[\s\S]*?-->/,s.html=i(s.html,"i").replace("comment",s._comment).replace("tag",s._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),s.paragraph=i(s._paragraph).replace("hr",s.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",s._tag).getRegex(),s.blockquote=i(s.blockquote).replace("paragraph",s.paragraph).getRegex(),s.normal=o({},s),s.gfm=o({},s.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n *([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n *\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),s.gfm.nptable=i(s.gfm.nptable).replace("hr",s.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",s._tag).getRegex(),s.gfm.table=i(s.gfm.table).replace("hr",s.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",s._tag).getRegex(),s.pedantic=o({},s.normal,{html:i("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",s._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,fences:r,paragraph:i(s.normal._paragraph).replace("hr",s.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",s.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()})
const a={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:r,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,strong:/^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,em:/^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:r,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,_punctuation:"!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"}
a.em=i(a.em).replace(/punctuation/g,a._punctuation).getRegex(),a._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,a._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,a.autolink=i(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex(),a._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,a.tag=i(a.tag).replace("comment",s._comment).replace("attribute",a._attribute).getRegex(),a._label=/(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,a._href=/<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/,a._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,a.link=i(a.link).replace("label",a._label).replace("href",a._href).replace("title",a._title).getRegex(),a.reflink=i(a.reflink).replace("label",a._label).getRegex(),a.normal=o({},a),a.pedantic=o({},a.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,link:i(/^!?\[(label)\]\((.*?)\)/).replace("label",a._label).getRegex(),reflink:i(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",a._label).getRegex()}),a.gfm=o({},a.normal,{escape:i(a.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~+(?=\S)([\s\S]*?\S)~+/,text:/^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),a.gfm.url=i(a.gfm.url,"i").replace("email",a.gfm._extended_email).getRegex(),a.breaks=o({},a.gfm,{br:i(a.br).replace("{2,}","*").getRegex(),text:i(a.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()}),e.exports={block:s,inline:a}},158:function(e,t){var n,r
n=function(){"use strict"
var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=void 0
void 0===n&&(n={modules:[]})
var r=null
function i(e){var t=e.getBoundingClientRect(),n={}
for(var r in t)n[r]=t[r]
try{if(e.ownerDocument!==document){var o=e.ownerDocument.defaultView.frameElement
if(o){var s=i(o)
n.top+=s.top,n.bottom+=s.top,n.left+=s.left,n.right+=s.left}}}catch(e){}return n}function o(e){var t=(getComputedStyle(e)||{}).position,n=[]
if("fixed"===t)return[e]
for(var r=e;(r=r.parentNode)&&r&&1===r.nodeType;){var i=void 0
try{i=getComputedStyle(r)}catch(e){}if(null==i)return n.push(r),n
var o=i,s=o.overflow,a=o.overflowX,u=o.overflowY;/(auto|scroll|overlay)/.test(s+u+a)&&("absolute"!==t||["relative","absolute","fixed"].indexOf(i.position)>=0)&&n.push(r)}return n.push(e.ownerDocument.body),e.ownerDocument!==document&&n.push(e.ownerDocument.defaultView),n}var s,a=(s=0,function(){return++s}),u={},l=function(){var e=r
e&&document.body.contains(e)||((e=document.createElement("div")).setAttribute("data-tether-id",a()),g(e.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(e),r=e)
var t=e.getAttribute("data-tether-id")
return void 0===u[t]&&(u[t]=i(e),E((function(){delete u[t]}))),u[t]}
function c(){r&&document.body.removeChild(r),r=null}function f(e){var t=void 0
e===document?(t=document,e=document.documentElement):t=e.ownerDocument
var n=t.documentElement,r=i(e),o=l()
return r.top-=o.top,r.left-=o.left,void 0===r.width&&(r.width=document.body.scrollWidth-r.left-r.right),void 0===r.height&&(r.height=document.body.scrollHeight-r.top-r.bottom),r.top=r.top-n.clientTop,r.left=r.left-n.clientLeft,r.right=t.body.clientWidth-r.width-r.left,r.bottom=t.body.clientHeight-r.height-r.top,r}function h(e){return e.offsetParent||document.documentElement}var p=null
function d(){if(p)return p
var e=document.createElement("div")
e.style.width="100%",e.style.height="200px"
var t=document.createElement("div")
g(t.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t)
var n=e.offsetWidth
t.style.overflow="scroll"
var r=e.offsetWidth
n===r&&(r=t.clientWidth),document.body.removeChild(t)
var i=n-r
return p={width:i,height:i}}function g(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=[]
return Array.prototype.push.apply(t,arguments),t.slice(1).forEach((function(t){if(t)for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])})),e}function m(e,t){if(void 0!==e.classList)t.split(" ").forEach((function(t){t.trim()&&e.classList.remove(t)}))
else{var n=new RegExp("(^| )"+t.split(" ").join("|")+"( |$)","gi"),r=b(e).replace(n," ")
x(e,r)}}function v(e,t){if(void 0!==e.classList)t.split(" ").forEach((function(t){t.trim()&&e.classList.add(t)}))
else{m(e,t)
var n=b(e)+" "+t
x(e,n)}}function y(e,t){if(void 0!==e.classList)return e.classList.contains(t)
var n=b(e)
return new RegExp("(^| )"+t+"( |$)","gi").test(n)}function b(e){return e.className instanceof e.ownerDocument.defaultView.SVGAnimatedString?e.className.baseVal:e.className}function x(e,t){e.setAttribute("class",t)}function w(e,t,n){n.forEach((function(n){-1===t.indexOf(n)&&y(e,n)&&m(e,n)})),t.forEach((function(t){y(e,t)||v(e,t)}))}var _=[],E=function(e){_.push(e)},k=function(){for(var e=void 0;e=_.pop();)e()},S=function(){function n(){t(this,n)}return e(n,[{key:"on",value:function(e,t,n){var r=!(arguments.length<=3||void 0===arguments[3])&&arguments[3]
void 0===this.bindings&&(this.bindings={}),void 0===this.bindings[e]&&(this.bindings[e]=[]),this.bindings[e].push({handler:t,ctx:n,once:r})}},{key:"once",value:function(e,t,n){this.on(e,t,n,!0)}},{key:"off",value:function(e,t){if(void 0!==this.bindings&&void 0!==this.bindings[e])if(void 0===t)delete this.bindings[e]
else for(var n=0;n<this.bindings[e].length;)this.bindings[e][n].handler===t?this.bindings[e].splice(n,1):++n}},{key:"trigger",value:function(e){if(void 0!==this.bindings&&this.bindings[e]){for(var t=0,n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i]
for(;t<this.bindings[e].length;){var o=this.bindings[e][t],s=o.handler,a=o.ctx,u=o.once,l=a
void 0===l&&(l=this),s.apply(l,r),u?this.bindings[e].splice(t,1):++t}}}}]),n}()
n.Utils={getActualBoundingClientRect:i,getScrollParents:o,getBounds:f,getOffsetParent:h,extend:g,addClass:v,removeClass:m,hasClass:y,updateClasses:w,defer:E,flush:k,uniqueId:a,Evented:S,getScrollBarSize:d,removeUtilElements:c}
var T=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0
try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=(e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),function(e,t,n){for(var r=!0;r;){var i=e,o=t,s=n
r=!1,null===i&&(i=Function.prototype)
var a=Object.getOwnPropertyDescriptor(i,o)
if(void 0!==a){if("value"in a)return a.value
var u=a.get
if(void 0===u)return
return u.call(s)}var l=Object.getPrototypeOf(i)
if(null===l)return
e=l,t=o,n=s,r=!0,a=l=void 0}})
function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}if(void 0===n)throw new Error("You must include the utils.js file before tether.js")
var o=(Z=n.Utils).getScrollParents,h=(f=Z.getBounds,Z.getOffsetParent),v=(g=Z.extend,Z.addClass),m=Z.removeClass,d=(w=Z.updateClasses,E=Z.defer,k=Z.flush,Z.getScrollBarSize),c=Z.removeUtilElements
function A(e,t){var n=arguments.length<=2||void 0===arguments[2]?1:arguments[2]
return e+n>=t&&t>=e-n}var C,N,j,R,L=function(){if("undefined"==typeof document)return""
for(var e=document.createElement("div"),t=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],n=0;n<t.length;++n){var r=t[n]
if(void 0!==e.style[r])return r}}(),P=[],I=function(){P.forEach((function(e){e.position(!1)})),k()}
function D(){return"object"==typeof performance&&"function"==typeof performance.now?performance.now():+new Date}C=null,N=null,j=null,R=function e(){if(void 0!==N&&N>16)return N=Math.min(N-16,250),void(j=setTimeout(e,250))
void 0!==C&&D()-C<10||(null!=j&&(clearTimeout(j),j=null),C=D(),I(),N=D()-C)},"undefined"!=typeof window&&void 0!==window.addEventListener&&["resize","scroll","touchmove"].forEach((function(e){window.addEventListener(e,R)}))
var M={center:"center",left:"right",right:"left"},$={middle:"middle",top:"bottom",bottom:"top"},B={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},z=function(e){var t=e.left,n=e.top
return void 0!==B[e.left]&&(t=B[e.left]),void 0!==B[e.top]&&(n=B[e.top]),{left:t,top:n}}
function F(){for(var e={top:0,left:0},t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r]
return n.forEach((function(t){var n=t.top,r=t.left
"string"==typeof n&&(n=parseFloat(n,10)),"string"==typeof r&&(r=parseFloat(r,10)),e.top+=n,e.left+=r})),e}function q(e,t){return"string"==typeof e.left&&-1!==e.left.indexOf("%")&&(e.left=parseFloat(e.left,10)/100*t.width),"string"==typeof e.top&&-1!==e.top.indexOf("%")&&(e.top=parseFloat(e.top,10)/100*t.height),e}var H=function(e){var t=e.split(" "),n=T(t,2)
return{top:n[0],left:n[1]}},Q=H,U=function(r){function i(e){var r=this
t(this,i),O(Object.getPrototypeOf(i.prototype),"constructor",this).call(this),this.position=this.position.bind(this),P.push(this),this.history=[],this.setOptions(e,!1),n.modules.forEach((function(e){void 0!==e.initialize&&e.initialize.call(r)})),this.position()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,r),e(i,[{key:"getClass",value:function(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=this.options.classes
return void 0!==t&&t[e]?this.options.classes[e]:this.options.classPrefix?this.options.classPrefix+"-"+e:e}},{key:"setOptions",value:function(e){var t=this,n=arguments.length<=1||void 0===arguments[1]||arguments[1]
this.options=g({offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"},e)
var r=this.options,i=r.element,s=r.target,a=r.targetModifier
if(this.element=i,this.target=s,this.targetModifier=a,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach((function(e){if(void 0===t[e])throw new Error("Tether Error: Both element and target must be defined")
void 0!==t[e].jquery?t[e]=t[e][0]:"string"==typeof t[e]&&(t[e]=document.querySelector(t[e]))})),v(this.element,this.getClass("element")),!1!==this.options.addTargetClasses&&v(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment")
this.targetAttachment=Q(this.options.targetAttachment),this.attachment=Q(this.options.attachment),this.offset=H(this.options.offset),this.targetOffset=H(this.options.targetOffset),void 0!==this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=o(this.target),!1!==this.options.enabled&&this.enable(n)}},{key:"getTargetBounds",value:function(){if(void 0===this.targetModifier)return f(this.target)
if("visible"===this.targetModifier)return this.target===document.body?{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth}:((o={height:(e=f(this.target)).height,width:e.width,top:e.top,left:e.left}).height=Math.min(o.height,e.height-(pageYOffset-e.top)),o.height=Math.min(o.height,e.height-(e.top+e.height-(pageYOffset+innerHeight))),o.height=Math.min(innerHeight,o.height),o.height-=2,o.width=Math.min(o.width,e.width-(pageXOffset-e.left)),o.width=Math.min(o.width,e.width-(e.left+e.width-(pageXOffset+innerWidth))),o.width=Math.min(innerWidth,o.width),o.width-=2,o.top<pageYOffset&&(o.top=pageYOffset),o.left<pageXOffset&&(o.left=pageXOffset),o)
if("scroll-handle"===this.targetModifier){var e=void 0,t=this.target
t===document.body?(t=document.documentElement,e={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):e=f(t)
var n=getComputedStyle(t),r=0;(t.scrollWidth>t.clientWidth||[n.overflow,n.overflowX].indexOf("scroll")>=0||this.target!==document.body)&&(r=15)
var i=e.height-parseFloat(n.borderTopWidth)-parseFloat(n.borderBottomWidth)-r,o={width:15,height:.975*i*(i/t.scrollHeight),left:e.left+e.width-parseFloat(n.borderLeftWidth)-15},s=0
i<408&&this.target===document.body&&(s=-11e-5*Math.pow(i,2)-.00727*i+22.58),this.target!==document.body&&(o.height=Math.max(o.height,24))
var a=this.target.scrollTop/(t.scrollHeight-i)
return o.top=a*(i-o.height-s)+e.top+parseFloat(n.borderTopWidth),this.target===document.body&&(o.height=Math.max(o.height,24)),o}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(e,t){return void 0===this._cache&&(this._cache={}),void 0===this._cache[e]&&(this._cache[e]=t.call(this)),this._cache[e]}},{key:"enable",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0]
!1!==this.options.addTargetClasses&&v(this.target,this.getClass("enabled")),v(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach((function(t){t!==e.target.ownerDocument&&t.addEventListener("scroll",e.position)})),t&&this.position()}},{key:"disable",value:function(){var e=this
m(this.target,this.getClass("enabled")),m(this.element,this.getClass("enabled")),this.enabled=!1,void 0!==this.scrollParents&&this.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.position)}))}},{key:"destroy",value:function(){var e=this
this.disable(),P.forEach((function(t,n){t===e&&P.splice(n,1)})),0===P.length&&c()}},{key:"updateAttachClasses",value:function(e,t){var n=this
e=e||this.attachment,t=t||this.targetAttachment,void 0!==this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),void 0===this._addAttachClasses&&(this._addAttachClasses=[])
var r=this._addAttachClasses
e.top&&r.push(this.getClass("element-attached")+"-"+e.top),e.left&&r.push(this.getClass("element-attached")+"-"+e.left),t.top&&r.push(this.getClass("target-attached")+"-"+t.top),t.left&&r.push(this.getClass("target-attached")+"-"+t.left)
var i=[];["left","top","bottom","right","middle","center"].forEach((function(e){i.push(n.getClass("element-attached")+"-"+e),i.push(n.getClass("target-attached")+"-"+e)})),E((function(){void 0!==n._addAttachClasses&&(w(n.element,n._addAttachClasses,i),!1!==n.options.addTargetClasses&&w(n.target,n._addAttachClasses,i),delete n._addAttachClasses)}))}},{key:"position",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0]
if(this.enabled){this.clearCache()
var r=function(e,t){var n=e.left,r=e.top
return"auto"===n&&(n=M[t.left]),"auto"===r&&(r=$[t.top]),{left:n,top:r}}(this.targetAttachment,this.attachment)
this.updateAttachClasses(this.attachment,r)
var i=this.cache("element-bounds",(function(){return f(e.element)})),o=i.width,s=i.height
if(0===o&&0===s&&void 0!==this.lastSize){var a=this.lastSize
o=a.width,s=a.height}else this.lastSize={width:o,height:s}
var u=this.cache("target-bounds",(function(){return e.getTargetBounds()})),l=u,c=q(z(this.attachment),{width:o,height:s}),p=q(z(r),l),g=q(this.offset,{width:o,height:s}),m=q(this.targetOffset,l)
c=F(c,g),p=F(p,m)
for(var v=u.left+p.left-c.left,y=u.top+p.top-c.top,b=0;b<n.modules.length;++b){var x=n.modules[b].position.call(this,{left:v,top:y,targetAttachment:r,targetPos:u,elementPos:i,offset:c,targetOffset:p,manualOffset:g,manualTargetOffset:m,scrollbarSize:S,attachment:this.attachment})
if(!1===x)return!1
void 0!==x&&"object"==typeof x&&(y=x.top,v=x.left)}var w={page:{top:y,left:v},viewport:{top:y-pageYOffset,bottom:pageYOffset-y-s+innerHeight,left:v-pageXOffset,right:pageXOffset-v-o+innerWidth}},_=this.target.ownerDocument,E=_.defaultView,S=void 0
return E.innerHeight>_.documentElement.clientHeight&&(S=this.cache("scrollbar-size",d),w.viewport.bottom-=S.height),E.innerWidth>_.documentElement.clientWidth&&(S=this.cache("scrollbar-size",d),w.viewport.right-=S.width),-1!==["","static"].indexOf(_.body.style.position)&&-1!==["","static"].indexOf(_.body.parentElement.style.position)||(w.page.bottom=_.body.scrollHeight-y-s,w.page.right=_.body.scrollWidth-v-o),void 0!==this.options.optimizations&&!1!==this.options.optimizations.moveElement&&void 0===this.targetModifier&&function(){var t=e.cache("target-offsetparent",(function(){return h(e.target)})),n=e.cache("target-offsetparent-bounds",(function(){return f(t)})),r=getComputedStyle(t),i=n,o={}
if(["Top","Left","Bottom","Right"].forEach((function(e){o[e.toLowerCase()]=parseFloat(r["border"+e+"Width"])})),n.right=_.body.scrollWidth-n.left-i.width+o.right,n.bottom=_.body.scrollHeight-n.top-i.height+o.bottom,w.page.top>=n.top+o.top&&w.page.bottom>=n.bottom&&w.page.left>=n.left+o.left&&w.page.right>=n.right){var s=t.scrollTop,a=t.scrollLeft
w.offset={top:w.page.top-n.top+s-o.top,left:w.page.left-n.left+a-o.left}}}(),this.move(w),this.history.unshift(w),this.history.length>3&&this.history.pop(),t&&k(),!0}}},{key:"move",value:function(e){var t,n,r=this
if(void 0!==this.element.parentNode){var i={}
for(var o in e)for(var s in i[o]={},e[o]){for(var a=!1,u=0;u<this.history.length;++u){var l=this.history[u]
if(void 0!==l[o]&&!A(l[o][s],e[o][s])){a=!0
break}}a||(i[o][s]=!0)}var c={top:"",left:"",right:"",bottom:""},f=function(e,t){if(!1!==(void 0!==r.options.optimizations?r.options.optimizations.gpu:null)){var n=void 0,i=void 0
e.top?(c.top=0,n=t.top):(c.bottom=0,n=-t.bottom),e.left?(c.left=0,i=t.left):(c.right=0,i=-t.right),"number"==typeof window.devicePixelRatio&&devicePixelRatio%1==0&&(i=Math.round(i*devicePixelRatio)/devicePixelRatio,n=Math.round(n*devicePixelRatio)/devicePixelRatio),c[L]="translateX("+i+"px) translateY("+n+"px)","msTransform"!==L&&(c[L]+=" translateZ(0)")}else e.top?c.top=t.top+"px":c.bottom=t.bottom+"px",e.left?c.left=t.left+"px":c.right=t.right+"px"},p=!1
if((i.page.top||i.page.bottom)&&(i.page.left||i.page.right)?(c.position="absolute",f(i.page,e.page)):(i.viewport.top||i.viewport.bottom)&&(i.viewport.left||i.viewport.right)?(c.position="fixed",f(i.viewport,e.viewport)):void 0!==i.offset&&i.offset.top&&i.offset.left?function(){c.position="absolute"
var t=r.cache("target-offsetparent",(function(){return h(r.target)}))
h(r.element)!==t&&E((function(){r.element.parentNode.removeChild(r.element),t.appendChild(r.element)})),f(i.offset,e.offset),p=!0}():(c.position="absolute",f({top:!0,left:!0},e.page)),!p)if(this.options.bodyElement)this.element.parentNode!==this.options.bodyElement&&this.options.bodyElement.appendChild(this.element)
else{for(var d=!0,m=this.element.parentNode;m&&1===m.nodeType&&"BODY"!==m.tagName&&(void 0,((n=(t=m).ownerDocument).fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.msFullscreenElement)!==t);){if("static"!==getComputedStyle(m).position){d=!1
break}m=m.parentNode}d||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var v={},y=!1
for(var s in c){var b=c[s]
this.element.style[s]!==b&&(y=!0,v[s]=b)}y&&E((function(){g(r.element.style,v),r.trigger("repositioned")}))}}}]),i}(S)
U.modules=[],n.position=I
var W=g(U,n)
T=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0
try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},f=(Z=n.Utils).getBounds
var g=Z.extend,V=(w=Z.updateClasses,E=Z.defer,["left","top","right","bottom"])
n.modules.push({position:function(e){var t=this,n=e.top,r=e.left,i=e.targetAttachment
if(!this.options.constraints)return!0
var o=this.cache("element-bounds",(function(){return f(t.element)})),s=o.height,a=o.width
if(0===a&&0===s&&void 0!==this.lastSize){var u=this.lastSize
a=u.width,s=u.height}var l=this.cache("target-bounds",(function(){return t.getTargetBounds()})),c=l.height,h=l.width,p=[this.getClass("pinned"),this.getClass("out-of-bounds")]
this.options.constraints.forEach((function(e){var t=e.outOfBoundsClass,n=e.pinnedClass
t&&p.push(t),n&&p.push(n)})),p.forEach((function(e){["left","top","right","bottom"].forEach((function(t){p.push(e+"-"+t)}))}))
var d=[],m=g({},i),v=g({},this.attachment)
return this.options.constraints.forEach((function(e){var o=e.to,u=e.attachment,l=e.pin
void 0===u&&(u="")
var p=void 0,g=void 0
if(u.indexOf(" ")>=0){var y=u.split(" "),b=T(y,2)
g=b[0],p=b[1]}else p=g=u
var x=function(e,t){return"scrollParent"===t?t=e.scrollParents[0]:"window"===t&&(t=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),t===document&&(t=t.documentElement),void 0!==t.nodeType&&function(){var e=t,n=f(t),r=n,i=getComputedStyle(t)
if(t=[r.left,r.top,n.width+r.left,n.height+r.top],e.ownerDocument!==document){var o=e.ownerDocument.defaultView
t[0]+=o.pageXOffset,t[1]+=o.pageYOffset,t[2]+=o.pageXOffset,t[3]+=o.pageYOffset}V.forEach((function(e,n){"Top"===(e=e[0].toUpperCase()+e.substr(1))||"Left"===e?t[n]+=parseFloat(i["border"+e+"Width"]):t[n]-=parseFloat(i["border"+e+"Width"])}))}(),t}(t,o)
"target"!==g&&"both"!==g||(n<x[1]&&"top"===m.top&&(n+=c,m.top="bottom"),n+s>x[3]&&"bottom"===m.top&&(n-=c,m.top="top")),"together"===g&&("top"===m.top&&("bottom"===v.top&&n<x[1]?(n+=c,m.top="bottom",n+=s,v.top="top"):"top"===v.top&&n+s>x[3]&&n-(s-c)>=x[1]&&(n-=s-c,m.top="bottom",v.top="bottom")),"bottom"===m.top&&("top"===v.top&&n+s>x[3]?(n-=c,m.top="top",n-=s,v.top="bottom"):"bottom"===v.top&&n<x[1]&&n+(2*s-c)<=x[3]&&(n+=s-c,m.top="top",v.top="top")),"middle"===m.top&&(n+s>x[3]&&"top"===v.top?(n-=s,v.top="bottom"):n<x[1]&&"bottom"===v.top&&(n+=s,v.top="top"))),"target"!==p&&"both"!==p||(r<x[0]&&"left"===m.left&&(r+=h,m.left="right"),r+a>x[2]&&"right"===m.left&&(r-=h,m.left="left")),"together"===p&&(r<x[0]&&"left"===m.left?"right"===v.left?(r+=h,m.left="right",r+=a,v.left="left"):"left"===v.left&&(r+=h,m.left="right",r-=a,v.left="right"):r+a>x[2]&&"right"===m.left?"left"===v.left?(r-=h,m.left="left",r-=a,v.left="right"):"right"===v.left&&(r-=h,m.left="left",r+=a,v.left="left"):"center"===m.left&&(r+a>x[2]&&"left"===v.left?(r-=a,v.left="right"):r<x[0]&&"right"===v.left&&(r+=a,v.left="left"))),"element"!==g&&"both"!==g||(n<x[1]&&"bottom"===v.top&&(n+=s,v.top="top"),n+s>x[3]&&"top"===v.top&&(n-=s,v.top="bottom")),"element"!==p&&"both"!==p||(r<x[0]&&("right"===v.left?(r+=a,v.left="left"):"center"===v.left&&(r+=a/2,v.left="left")),r+a>x[2]&&("left"===v.left?(r-=a,v.left="right"):"center"===v.left&&(r-=a/2,v.left="right"))),"string"==typeof l?l=l.split(",").map((function(e){return e.trim()})):!0===l&&(l=["top","left","right","bottom"]),l=l||[]
var w,_,E=[],k=[]
n<x[1]&&(l.indexOf("top")>=0?(n=x[1],E.push("top")):k.push("top")),n+s>x[3]&&(l.indexOf("bottom")>=0?(n=x[3]-s,E.push("bottom")):k.push("bottom")),r<x[0]&&(l.indexOf("left")>=0?(r=x[0],E.push("left")):k.push("left")),r+a>x[2]&&(l.indexOf("right")>=0?(r=x[2]-a,E.push("right")):k.push("right")),E.length&&(w=void 0!==t.options.pinnedClass?t.options.pinnedClass:t.getClass("pinned"),d.push(w),E.forEach((function(e){d.push(w+"-"+e)}))),k.length&&(_=void 0!==t.options.outOfBoundsClass?t.options.outOfBoundsClass:t.getClass("out-of-bounds"),d.push(_),k.forEach((function(e){d.push(_+"-"+e)}))),(E.indexOf("left")>=0||E.indexOf("right")>=0)&&(v.left=m.left=!1),(E.indexOf("top")>=0||E.indexOf("bottom")>=0)&&(v.top=m.top=!1),m.top===i.top&&m.left===i.left&&v.top===t.attachment.top&&v.left===t.attachment.left||(t.updateAttachClasses(v,m),t.trigger("update",{attachment:v,targetAttachment:m}))})),E((function(){!1!==t.options.addTargetClasses&&w(t.target,d,p),w(t.element,d,p)})),{top:n,left:r}}})
var Z,f=(Z=n.Utils).getBounds,w=Z.updateClasses
return E=Z.defer,n.modules.push({position:function(e){var t=this,n=e.top,r=e.left,i=this.cache("element-bounds",(function(){return f(t.element)})),o=i.height,s=i.width,a=this.getTargetBounds(),u=n+o,l=r+s,c=[]
n<=a.bottom&&u>=a.top&&["left","right"].forEach((function(e){var t=a[e]
t!==r&&t!==l||c.push(e)})),r<=a.right&&l>=a.left&&["top","bottom"].forEach((function(e){var t=a[e]
t!==n&&t!==u||c.push(e)}))
var h=[],p=[]
return h.push(this.getClass("abutted")),["left","top","right","bottom"].forEach((function(e){h.push(t.getClass("abutted")+"-"+e)})),c.length&&p.push(this.getClass("abutted")),c.forEach((function(e){p.push(t.getClass("abutted")+"-"+e)})),E((function(){!1!==t.options.addTargetClasses&&w(t.target,p,h),w(t.element,p,h)})),!0}}),T=function(e,t){if(Array.isArray(e))return e
if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0
try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return n}(e,t)
throw new TypeError("Invalid attempt to destructure non-iterable instance")},n.modules.push({position:function(e){var t=e.top,n=e.left
if(this.options.shift){var r=this.options.shift
"function"==typeof this.options.shift&&(r=this.options.shift.call(this,{top:t,left:n}))
var i=void 0,o=void 0
if("string"==typeof r){(r=r.split(" "))[1]=r[1]||r[0]
var s=T(r,2)
i=s[0],o=s[1],i=parseFloat(i,10),o=parseFloat(o,10)}else i=r.top,o=r.left
return{top:t+=i,left:n+=o}}}}),W},void 0===(r=n.apply(t,[]))||(e.exports=r)}}])
