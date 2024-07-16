/*! For license information please see chunk.997.6bb451b26c284cf82cc1.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[997],{1707:function(e,t){!function t(r){var n=r,a=r.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
function u(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.9.1","function"==typeof define&&define.amd&&define("axe-core",[],(function(){return i})),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof r.getComputedStyle&&(r.axe=i),u.prototype=Object.create(Error.prototype),u.prototype.constructor=u
var s=["node"],l=["relatedNodes"],c=["node"],d=["variant"],p=["matches"],f=["chromium"],h=["noImplicit"],m=["noPresentational"],D=["precision","format","inGamut"],g=["space"],v=["algorithm"],b=["method"],y=["maxDeltaE","deltaEMethod","steps","maxSteps"],F=["node"],w=["environmentData"],E=["environmentData"],C=["environmentData"],x=["environmentData"],A=["environmentData"]
function k(e,t,r){return t=T(t),function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(e,N()?Reflect.construct(t,r||[],T(e).constructor):t.apply(e,r))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function B(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function _(e,t,r){O(e,t),t.set(e,r)}function S(e,t){O(e,t),t.add(e)}function O(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function M(e,t){return e.get(P(e,t))}function I(e,t,r){return e.set(P(e,t),r),r}function P(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r
throw new TypeError("Private element is not present on this object")}function j(e,t){if(null==e)return{}
var r,n,a=function(e,t){if(null==e)return{}
var r,n,a={},o=Object.keys(e)
for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r])
return a}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function q(e){return function(e){if(Array.isArray(e))return X(e)}(e)||L(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(this,arguments)}function V(e,t){return U(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,u=[],s=!0,l=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
s=!1}else for(;!(s=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||K(e,t)||H()}function H(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function U(e){if(Array.isArray(e))return e}function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Y(n.key),n)}}function W(e,t,r){return t&&G(e.prototype,t),r&&G(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e){var t=function(e,t){if("object"!=o(e)||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=o(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==o(t)?t:t+""}function Q(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=K(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function K(e,t){if(e){if("string"==typeof e)return X(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}function X(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(e,t,T,O,G,X,Z,J,ee,te){var re=Object.create,ne=Object.defineProperty,ae=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty,ie=Object.getOwnPropertyNames,ue=Object.getOwnPropertyDescriptor,se=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},le=function(e,t){for(var r in t)ne(e,r,{get:t[r],enumerable:!0})},ce=function(e){return function(e,t,r){if(t&&"object"===o(t)||"function"==typeof t){var n,a=Q(ie(t))
try{var i=function(){var a=n.value
oe.call(e,a)||"default"===a||ne(e,a,{get:function(){return t[a]},enumerable:!(r=ue(t,a))||r.enumerable})}
for(a.s();!(n=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}return e}((t=ne(null!=e?re(ae(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),ne(t,"__esModule",{value:!0})),e)
var t},de=function(e,t,r){return function(e,t,r){t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r}(e,"symbol"!==o(t)?t+"":t,r),r},pe=se((function(e,t){"use strict"
t.exports=function(){}})),fe=se((function(e,t){"use strict"
var r=pe()()
t.exports=function(e){return e!==r&&null!==e}})),he=se((function(e,t){"use strict"
var r=fe(),n=Array.prototype.forEach,a=Object.create
t.exports=function(e){var t=a(null)
return n.call(arguments,(function(e){r(e)&&function(e,t){var r
for(r in e)t[r]=e[r]}(Object(e),t)})),t}})),me=se((function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}})),De=se((function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}})),ge=se((function(e,t){"use strict"
t.exports=me()()?Math.sign:De()})),ve=se((function(e,t){"use strict"
var r=ge(),n=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?r(e)*a(n(e)):e}})),be=se((function(e,t){"use strict"
var r=ve(),n=Math.max
t.exports=function(e){return n(0,r(e))}})),ye=se((function(e,t){"use strict"
var r=be()
t.exports=function(e,t,n){var a
return isNaN(e)?(a=t)>=0?n&&a?a-1:a:1:!1!==e&&r(e)}})),Fe=se((function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}})),we=se((function(e,t){"use strict"
var r=fe()
t.exports=function(e){if(!r(e))throw new TypeError("Cannot use null or undefined")
return e}})),Ee=se((function(e,t){"use strict"
var r=Fe(),n=we(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,u=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(s,l){var c,d=arguments[2],p=arguments[3]
return s=Object(n(s)),r(l),c=i(s),p&&c.sort("function"==typeof p?a.call(p,s):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,(function(e,r){return u.call(s,e)?o.call(l,d,s[e],e,s,r):t}))}}})),Ce=se((function(e,t){"use strict"
t.exports=Ee()("forEach")})),xe=se((function(){})),Ae=se((function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}})),ke=se((function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}})),Ne=se((function(e,t){"use strict"
var r=fe(),n=Object.keys
t.exports=function(e){return n(r(e)?Object(e):e)}})),Te=se((function(e,t){"use strict"
t.exports=ke()()?Object.keys:Ne()})),Be=se((function(e,t){"use strict"
var r=Te(),n=we(),a=Math.max
t.exports=function(e,t){var o,i,u,s=a(arguments.length,2)
for(e=Object(n(e)),u=function(r){try{e[r]=t[r]}catch(e){o||(o=e)}},i=1;i<s;++i)r(t=arguments[i]).forEach(u)
if(void 0!==o)throw o
return e}})),Re=se((function(e,t){"use strict"
t.exports=Ae()()?Object.assign:Be()})),_e=se((function(e,t){"use strict"
var r=fe(),n={function:!0,object:!0}
t.exports=function(e){return r(e)&&n[o(e)]||!1}})),Se=se((function(e,t){"use strict"
var r=Re(),n=_e(),a=fe(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),u=arguments[1],s=arguments[2]
return a(s)||n(u)&&(s=u,u=null),a(s)&&r(i,s),a(u)&&(i.code=u),o&&o(i,t.exports),i}})),Oe=se((function(e,t){"use strict"
var r=we(),n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var u,s=Object(r(t))
if(e=Object(r(e)),o(s).forEach((function(r){try{n(e,r,a(t,r))}catch(e){u=e}})),"function"==typeof i&&i(s).forEach((function(r){try{n(e,r,a(t,r))}catch(e){u=e}})),void 0!==u)throw u
return e}})),Me=se((function(e,t){"use strict"
var r,n,a,o,i,u=be(),s=function(e,t){return t}
try{Object.defineProperty(s,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===s.length?(r={configurable:!0,writable:!1,enumerable:!1},n=Object.defineProperty,t.exports=function(e,t){return t=u(t),e.length===t?e:(r.value=t,n(e,"length",r))}):(o=Oe(),i=[],a=function(e){var t,r=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++r).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var r
if(t=u(t),e.length===t)return e
r=a(t)(e)
try{o(r,e)}catch(e){}return r})})),Ie=se((function(e,t){"use strict"
t.exports=function(e){return null!=e}})),Pe=se((function(e,t){"use strict"
var r=Ie(),n={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!r(e)&&hasOwnProperty.call(n,o(e))}})),je=se((function(e,t){"use strict"
var r=Pe()
t.exports=function(e){if(!r(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}})),qe=se((function(e,t){"use strict"
var r=je()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!r(e)}})),Le=se((function(e,t){"use strict"
var r=qe(),n=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!r(e)&&!n.test(a.call(e))}})),ze=se((function(e,t){"use strict"
var r="razdwatrzy"
t.exports=function(){return"function"==typeof r.contains&&!0===r.contains("dwa")&&!1===r.contains("foo")}})),Ve=se((function(e,t){"use strict"
var r=String.prototype.indexOf
t.exports=function(e){return r.call(this,e,arguments[1])>-1}})),He=se((function(e,t){"use strict"
t.exports=ze()()?String.prototype.contains:Ve()})),Ue=se((function(e,t){"use strict"
var r=Ie(),n=Le(),a=Re(),o=he(),i=He(),u=t.exports=function(e,t){var n,u,s,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],r(e)?(n=i.call(e,"c"),u=i.call(e,"e"),s=i.call(e,"w")):(n=s=!0,u=!1),c={value:t,configurable:n,enumerable:u,writable:s},l?a(o(l),c):c}
u.gs=function(e,t,u){var s,l,c,d
return"string"!=typeof e?(c=u,u=t,t=e,e=null):c=arguments[3],r(t)?n(t)?r(u)?n(u)||(c=u,u=void 0):u=void 0:(c=t,t=u=void 0):t=void 0,r(e)?(s=i.call(e,"c"),l=i.call(e,"e")):(s=!0,l=!1),d={get:t,set:u,configurable:s,enumerable:l},c?a(o(c),d):d}})),$e=se((function(e,t){"use strict"
var r,n,a,i,u,s,l,c=Ue(),d=Fe(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,D=Object.defineProperties,g=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0}
n=function(e,t){var n,o
return d(t),o=this,r.call(this,e,n=function(){a.call(o,e,n),p.call(t,this,arguments)}),n.__eeOnceListener__=t,this},a=function(e,t){var r,n,a,i
if(d(t),!g.call(this,"__ee__"))return this
if(!(r=this.__ee__)[e])return this
if(n=r[e],"object"===o(n))for(i=0;a=n[i];++i)a!==t&&a.__eeOnceListener__!==t||(2===n.length?r[e]=n[i?0:1]:n.splice(i,1))
else n!==t&&n.__eeOnceListener__!==t||delete r[e]
return this},i=function(e){var t,r,n,a,i
if(g.call(this,"__ee__")&&(a=this.__ee__[e]))if("object"===o(a)){for(r=arguments.length,i=new Array(r-1),t=1;t<r;++t)i[t-1]=arguments[t]
for(a=a.slice(),t=0;n=a[t];++t)p.call(n,this,i)}else switch(arguments.length){case 1:f.call(a,this)
break
case 2:f.call(a,this,arguments[1])
break
case 3:f.call(a,this,arguments[1],arguments[2])
break
default:for(r=arguments.length,i=new Array(r-1),t=1;t<r;++t)i[t-1]=arguments[t]
p.call(a,this,i)}},u={on:r=function(e,t){var r
return d(t),g.call(this,"__ee__")?r=this.__ee__:(r=v.value=h(null),m(this,"__ee__",v),v.value=null),r[e]?"object"===o(r[e])?r[e].push(t):r[e]=[r[e],t]:r[e]=t,this},once:n,off:a,emit:i},s={on:c(r),once:c(n),off:c(a),emit:c(i)},l=D({},s),t.exports=e=function(e){return null==e?h(l):D(Object(e),s)},e.methods=u})),Ge=se((function(e,t){"use strict"
t.exports=function(){var e,t,r=Array.from
return"function"==typeof r&&(t=r(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}})),We=se((function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}})),Ye=se((function(e,t){var n=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===r?"undefined":o(r))&&r)return r
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return n()}try{return __global__||n()}finally{delete Object.prototype.__global__}}()})),Qe=se((function(e,t){"use strict"
t.exports=We()()?globalThis:Ye()})),Ke=se((function(e,t){"use strict"
var r=Qe(),n={object:!0,symbol:!0}
t.exports=function(){var e,t=r.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!n[o(t.iterator)]&&!!n[o(t.toPrimitive)]&&!!n[o(t.toStringTag)]}})),Xe=se((function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}})),Ze=se((function(e,t){"use strict"
var r=Xe()
t.exports=function(e){if(!r(e))throw new TypeError(e+" is not a symbol")
return e}})),Je=se((function(e,t){"use strict"
var r=Ue(),n=Object.create,a=Object.defineProperty,o=Object.prototype,i=n(null)
t.exports=function(e){for(var t,n,u=0;i[e+(u||"")];)++u
return i[e+=u||""]=!0,a(o,t="@@"+e,r.gs(null,(function(e){n||(n=!0,a(this,t,r(e)),n=!1)}))),t}})),et=se((function(e,t){"use strict"
var r=Ue(),n=Qe().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:r("",n&&n.hasInstance||e("hasInstance")),isConcatSpreadable:r("",n&&n.isConcatSpreadable||e("isConcatSpreadable")),iterator:r("",n&&n.iterator||e("iterator")),match:r("",n&&n.match||e("match")),replace:r("",n&&n.replace||e("replace")),search:r("",n&&n.search||e("search")),species:r("",n&&n.species||e("species")),split:r("",n&&n.split||e("split")),toPrimitive:r("",n&&n.toPrimitive||e("toPrimitive")),toStringTag:r("",n&&n.toStringTag||e("toStringTag")),unscopables:r("",n&&n.unscopables||e("unscopables"))})}})),tt=se((function(e,t){"use strict"
var r=Ue(),n=Ze(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:r((function(t){return a[t]?a[t]:a[t]=e(String(t))})),keyFor:r((function(e){var t
for(t in n(e),a)if(a[t]===e)return t}))})}})),rt=se((function(e,t){"use strict"
var r,n,a,i=Ue(),u=Ze(),s=Qe().Symbol,l=Je(),c=et(),d=tt(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof s)try{String(s()),a=!0}catch(e){}else s=null
n=function(e){if(this instanceof n)throw new TypeError("Symbol is not a constructor")
return r(e)},t.exports=r=function e(t){var r
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?s(t):(r=p(n.prototype),t=void 0===t?"":String(t),f(r,{__description__:i("",t),__name__:i("",l(t))}))},c(r),d(r),f(n.prototype,{constructor:i(r),toString:i("",(function(){return this.__name__}))}),f(r.prototype,{toString:i((function(){return"Symbol ("+u(this).__description__+")"})),valueOf:i((function(){return u(this)}))}),h(r.prototype,r.toPrimitive,i("",(function(){var e=u(this)
return"symbol"===o(e)?e:e.toString()}))),h(r.prototype,r.toStringTag,i("c","Symbol")),h(n.prototype,r.toStringTag,i("c",r.prototype[r.toStringTag])),h(n.prototype,r.toPrimitive,i("c",r.prototype[r.toPrimitive]))})),nt=se((function(e,t){"use strict"
t.exports=Ke()()?Qe().Symbol:rt()})),at=se((function(e,t){"use strict"
var r=Object.prototype.toString,n=r.call(function(){return arguments}())
t.exports=function(e){return r.call(e)===n}})),ot=se((function(e,t){"use strict"
var r=Object.prototype.toString,n=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&n(r.call(e))}})),it=se((function(e,t){"use strict"
var r=Object.prototype.toString,n=r.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||r.call(e)===n)||!1}})),ut=se((function(e,t){"use strict"
var r=nt().iterator,n=at(),a=ot(),o=be(),i=Fe(),u=we(),s=fe(),l=it(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,D,g,v,b,y,F,w,E=arguments[1],C=arguments[2]
if(e=Object(u(e)),s(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(n(e))return 1!==(g=e.length)?Array.apply(null,e):((D=new Array(1))[0]=e[0],D)
if(c(e)){for(D=new Array(g=e.length),h=0;h<g;++h)D[h]=e[h]
return D}}D=[]}if(!c(e))if(void 0!==(F=e[r])){for(b=i(F).call(e),t&&(D=new t),y=b.next(),h=0;!y.done;)w=E?d.call(E,C,y.value,h):y.value,t?(p.value=w,f(D,h,p)):D[h]=w,y=b.next(),++h
g=h}else if(l(e)){for(g=e.length,t&&(D=new t),h=0,m=0;h<g;++h)w=e[h],h+1<g&&(v=w.charCodeAt(0))>=55296&&v<=56319&&(w+=e[++h]),w=E?d.call(E,C,w,m):w,t?(p.value=w,f(D,m,p)):D[m]=w,++m
g=m}if(void 0===g)for(g=o(e.length),t&&(D=new t(g)),h=0;h<g;++h)w=E?d.call(E,C,e[h],h):e[h],t?(p.value=w,f(D,h,p)):D[h]=w
return t&&(p.value=null,D.length=g),D}})),st=se((function(e,t){"use strict"
t.exports=Ge()()?Array.from:ut()})),lt=se((function(e,t){"use strict"
var r=st(),n=Array.isArray
t.exports=function(e){return n(e)?e:r(e)}})),ct=se((function(e,t){"use strict"
var r,n=lt(),a=fe(),o=Fe(),i=Array.prototype.slice
r=function(e){return this.map((function(t,r){return t?t(e[r]):e[r]})).concat(i.call(e,this.length))},t.exports=function(e){return(e=n(e)).forEach((function(e){a(e)&&o(e)})),r.bind(e)}})),dt=se((function(e,t){"use strict"
var r=Fe()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:r(e.get)},void 0!==e.set?(t.set=r(e.set),e.delete&&(t.delete=r(e.delete)),e.clear&&(t.clear=r(e.clear)),t):(t.set=t.get,t))}})),pt=se((function(e,t){"use strict"
var r=Se(),n=Me(),a=Ue(),o=$e().methods,i=ct(),u=dt(),s=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var h,m,D,g,v,b,y,F,w,E,C,x,A,k,N,T=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(E=u(o.normalizer),D=E.get,g=E.set,v=E.delete,b=E.clear),null!=o.resolvers&&(N=i(o.resolvers)),k=D?n((function(t){var n,a,o=arguments
if(N&&(o=N(o)),null!==(n=D(o))&&hasOwnProperty.call(T,n))return C&&h.emit("get",n,o,this),T[n]
if(a=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),null===n){if(null!==(n=D(o)))throw r("Circular invocation","CIRCULAR_INVOCATION")
n=g(o)}else if(hasOwnProperty.call(T,n))throw r("Circular invocation","CIRCULAR_INVOCATION")
return T[n]=a,x&&h.emit("set",n,null,a),a}),m):0===t?function(){var t
if(hasOwnProperty.call(T,"data"))return C&&h.emit("get","data",arguments,this),T.data
if(t=arguments.length?s.call(e,this,arguments):l.call(e,this),hasOwnProperty.call(T,"data"))throw r("Circular invocation","CIRCULAR_INVOCATION")
return T.data=t,x&&h.emit("set","data",null,t),t}:function(t){var n,a,o=arguments
if(N&&(o=N(arguments)),a=String(o[0]),hasOwnProperty.call(T,a))return C&&h.emit("get",a,o,this),T[a]
if(n=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),hasOwnProperty.call(T,a))throw r("Circular invocation","CIRCULAR_INVOCATION")
return T[a]=n,x&&h.emit("set",a,null,n),n},h={original:e,memoized:k,profileName:o.profileName,get:function(e){return N&&(e=N(e)),D?D(e):String(e[0])},has:function(e){return hasOwnProperty.call(T,e)},delete:function(e){var t
hasOwnProperty.call(T,e)&&(v&&v(e),t=T[e],delete T[e],A&&h.emit("delete",e,t))},clear:function(){var e=T
b&&b(),T=c(null),h.emit("clear",e)},on:function(e,t){return"get"===e?C=!0:"set"===e?x=!0:"delete"===e&&(A=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=h.original}},y=D?n((function(e){var t,r=arguments
N&&(r=N(r)),null!==(t=D(r))&&h.delete(t)}),m):0===t?function(){return h.delete("data")}:function(e){return N&&(e=N(arguments)[0]),h.delete(e)},F=n((function(){var e,r=arguments
return 0===t?T.data:(N&&(r=N(r)),e=D?D(r):String(r[0]),T[e])})),w=n((function(){var e,r=arguments
return 0===t?h.has("data"):(N&&(r=N(r)),null!==(e=D?D(r):String(r[0]))&&h.has(e))})),d(k,{__memoized__:a(!0),delete:a(y),clear:a(h.clear),_get:a(F),_has:a(w)}),h}})),ft=se((function(e,t){"use strict"
var r=Fe(),n=Ce(),a=xe(),o=pt(),i=ye()
t.exports=function e(t){var u,s,l
if(r(t),(u=Object(arguments[1])).async&&u.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!u.force?t:(s=i(u.length,t.length,u.async&&a.async),l=o(t,s,u),n(a,(function(e,t){u[t]&&e(u[t],l,u)})),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}})),ht=se((function(e,t){"use strict"
t.exports=function(e){var t,r,n=e.length
if(!n)return""
for(t=String(e[r=0]);--n;)t+=""+e[++r]
return t}})),mt=se((function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var r=String(t[0]),n=0,a=e;--a;)r+=""+t[++n]
return r}:function(){return""}}})),Dt=se((function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}})),gt=se((function(e,t){"use strict"
t.exports=function(e){return e!=e}})),vt=se((function(e,t){"use strict"
t.exports=Dt()()?Number.isNaN:gt()})),bt=se((function(e,t){"use strict"
var r=vt(),n=be(),a=we(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,u=Math.abs,s=Math.floor
t.exports=function(e){var t,l,c,d
if(!r(e))return o.apply(this,arguments)
for(l=n(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?s(c):n(this.length)-s(u(c));t<l;++t)if(i.call(this,t)&&(d=this[t],r(d)))return t
return-1}})),yt=se((function(e,t){"use strict"
var r=bt(),n=Object.create
t.exports=function(){var e=0,t=[],a=n(null)
return{get:function(e){var n,a=0,o=t,i=e.length
if(0===i)return o[i]||null
if(o=o[i]){for(;a<i-1;){if(-1===(n=r.call(o[0],e[a])))return null
o=o[1][n],++a}return-1===(n=r.call(o[0],e[a]))?null:o[1][n]||null}return null},set:function(n){var o,i=0,u=t,s=n.length
if(0===s)u[s]=++e
else{for(u[s]||(u[s]=[[],[]]),u=u[s];i<s-1;)-1===(o=r.call(u[0],n[i]))&&(o=u[0].push(n[i])-1,u[1].push([[],[]])),u=u[1][o],++i;-1===(o=r.call(u[0],n[i]))&&(o=u[0].push(n[i])-1),u[1][o]=++e}return a[e]=n,e},delete:function(e){var n,o=0,i=t,u=a[e],s=u.length,l=[]
if(0===s)delete i[s]
else if(i=i[s]){for(;o<s-1;){if(-1===(n=r.call(i[0],u[o])))return
l.push(i,n),i=i[1][n],++o}if(-1===(n=r.call(i[0],u[o])))return
for(e=i[1][n],i[0].splice(n,1),i[1].splice(n,1);!i[0].length&&l.length;)n=l.pop(),(i=l.pop())[0].splice(n,1),i[1].splice(n,1)}delete a[e]},clear:function(){t=[],a=n(null)}}}})),Ft=se((function(e,t){"use strict"
var r=bt()
t.exports=function(){var e=0,t=[],n=[]
return{get:function(e){var a=r.call(t,e[0])
return-1===a?null:n[a]},set:function(r){return t.push(r[0]),n.push(++e),e},delete:function(e){var a=r.call(n,e);-1!==a&&(t.splice(a,1),n.splice(a,1))},clear:function(){t=[],n=[]}}}})),wt=se((function(e,t){"use strict"
var r=bt(),n=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=n(null)
return{get:function(t){for(var n,o=0,i=a;o<e-1;){if(-1===(n=r.call(i[0],t[o])))return null
i=i[1][n],++o}return-1===(n=r.call(i[0],t[o]))?null:i[1][n]||null},set:function(n){for(var i,u=0,s=a;u<e-1;)-1===(i=r.call(s[0],n[u]))&&(i=s[0].push(n[u])-1,s[1].push([[],[]])),s=s[1][i],++u
return-1===(i=r.call(s[0],n[u]))&&(i=s[0].push(n[u])-1),s[1][i]=++t,o[t]=n,t},delete:function(t){for(var n,i=0,u=a,s=[],l=o[t];i<e-1;){if(-1===(n=r.call(u[0],l[i])))return
s.push(u,n),u=u[1][n],++i}if(-1!==(n=r.call(u[0],l[i]))){for(t=u[1][n],u[0].splice(n,1),u[1].splice(n,1);!u[0].length&&s.length;)n=s.pop(),(u=s.pop())[0].splice(n,1),u[1].splice(n,1)
delete o[t]}},clear:function(){a=[[],[]],o=n(null)}}}})),Et=se((function(e,t){"use strict"
var r=Fe(),n=Ce(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return r(t),n(e,(function(e,r,n,u){o[r]=a.call(t,i,e,r,n,u)})),o}})),Ct=se((function(e,t){"use strict"
var r=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e},n=function(e){var t,n,o=a.createTextNode(""),i=0
return new e((function(){var e
if(t)n&&(t=n.concat(t))
else{if(!n)return
t=n}if(n=t,t=null,"function"==typeof n)return e=n,n=null,void e()
for(o.data=i=++i%2;n;)e=n.shift(),n.length||(n=null),e()})).observe(o,{characterData:!0}),function(e){r(e),t?"function"==typeof t?t=[t,e]:t.push(e):(t=e,o.data=i=++i%2)}}
t.exports=function(){if("object"===("undefined"==typeof process?"undefined":o(process))&&process&&"function"==typeof process.nextTick)return process.nextTick
if("function"==typeof queueMicrotask)return function(e){queueMicrotask(r(e))}
if("object"===(void 0===a?"undefined":o(a))&&a){if("function"==typeof MutationObserver)return n(MutationObserver)
if("function"==typeof WebKitMutationObserver)return n(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(r(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(r(e),0)}:null}()})),xt=se((function(){"use strict"
var e=st(),t=Et(),r=Oe(),n=Me(),a=Ct(),o=Array.prototype.slice,i=Function.prototype.apply,u=Object.create
xe().async=function(s,l){var c,d,p,f=u(null),h=u(null),m=l.memoized,D=l.original
l.memoized=n((function(e){var t=arguments,r=t[t.length-1]
return"function"==typeof r&&(c=r,t=o.call(t,0,-1)),m.apply(d=this,p=t)}),m)
try{r(l.memoized,m)}catch(e){}l.on("get",(function(e){var t,r,n
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,r=d,n=p,c=d=p=null,a((function(){var a
hasOwnProperty.call(h,e)?(a=h[e],l.emit("getasync",e,n,r),i.call(t,a.context,a.args)):(c=t,d=r,p=n,m.apply(r,n))}))}})),l.original=function(){var t,r,n,o
return c?(t=e(arguments),r=function t(r){var n,u,s=t.id
if(null!=s){if(delete t.id,n=f[s],delete f[s],n)return u=e(arguments),l.has(s)&&(r?l.delete(s):(h[s]={context:this,args:u},l.emit("setasync",s,"function"==typeof n?1:n.length))),"function"==typeof n?o=i.call(n,this,u):n.forEach((function(e){o=i.call(e,this,u)}),this),o}else a(i.bind(t,this,arguments))},n=c,c=d=p=null,t.push(r),o=i.call(D,this,t),r.cb=n,c=r,o):i.call(D,this,arguments)},l.on("set",(function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)})),l.on("delete",(function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],l.emit("deleteasync",e,o.call(t.args,1)))})),l.on("clear",(function(){var e=h
h=u(null),l.emit("clearasync",t(e,(function(e){return o.call(e.args,1)})))}))}})),At=se((function(e,t){"use strict"
var r=Array.prototype.forEach,n=Object.create
t.exports=function(e){var t=n(null)
return r.call(arguments,(function(e){t[e]=!0})),t}})),kt=se((function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}})),Nt=se((function(e,t){"use strict"
var r=kt()
t.exports=function(e){try{return e&&r(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}})),Tt=se((function(e,t){"use strict"
var r=we(),n=Nt()
t.exports=function(e){return n(r(e))}})),Bt=se((function(e,t){"use strict"
var r=kt()
t.exports=function(e){try{return e&&r(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}})),Rt=se((function(e,t){"use strict"
var r=Bt(),n=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=r(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(n,(function(e){return JSON.stringify(e).slice(1,-1)}))}})),_t=se((function(e,t){function r(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=r,t.exports.default=r})),St=se((function(){"use strict"
var e=Et(),t=At(),r=Tt(),n=Rt(),a=_t(),o=Ct(),i=Object.create,u=t("then","then:finally","done","done:finally")
xe().promise=function(t,s){var l=i(null),c=i(null),d=i(null)
if(!0===t)t=null
else if(t=r(t),!u[t])throw new TypeError("'"+n(t)+"' is not valid promise mode")
s.on("set",(function(e,r,n){var i=!1
if(!a(n))return c[e]=n,void s.emit("setasync",e,1)
l[e]=1,d[e]=n
var u=function(t){var r=l[e]
if(i)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
r&&(delete l[e],c[e]=t,s.emit("setasync",e,r))},p=function(){i=!0,l[e]&&(delete l[e],delete d[e],s.delete(e))},f=t
if(f||(f="then"),"then"===f){var h=function(){o(p)}
"function"==typeof(n=n.then((function(e){o(u.bind(this,e))}),h)).finally&&n.finally(h)}else if("done"===f){if("function"!=typeof n.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
n.done(u,p)}else if("done:finally"===f){if("function"!=typeof n.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof n.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
n.done(u),n.finally(p)}})),s.on("get",(function(e,t,r){var n
if(l[e])++l[e]
else{n=d[e]
var i=function(){s.emit("getasync",e,t,r)}
a(n)?"function"==typeof n.done?n.done(i):n.then((function(){o(i)})):i()}})),s.on("delete",(function(e){if(delete d[e],l[e])delete l[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],s.emit("deleteasync",e,[t])}})),s.on("clear",(function(){var t=c
c=i(null),l=i(null),d=i(null),s.emit("clearasync",e(t,(function(e){return[e]})))}))}})),Ot=se((function(){"use strict"
var e=Fe(),t=Ce(),r=xe(),n=Function.prototype.apply
r.dispose=function(a,o,i){var u
if(e(a),i.async&&r.async||i.promise&&r.promise)return o.on("deleteasync",u=function(e,t){n.call(a,null,t)}),void o.on("clearasync",(function(e){t(e,(function(e,t){u(t,e)}))}))
o.on("delete",u=function(e,t){a(t)}),o.on("clear",(function(e){t(e,(function(e,t){u(t,e)}))}))}})),Mt=se((function(e,t){"use strict"
t.exports=2147483647})),It=se((function(e,t){"use strict"
var r=be(),n=Mt()
t.exports=function(e){if((e=r(e))>n)throw new TypeError(e+" exceeds maximum possible timeout")
return e}})),Pt=se((function(){"use strict"
var e=st(),t=Ce(),r=Ct(),n=_t(),a=It(),o=xe(),i=Function.prototype,u=Math.max,s=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,h,m,D;(c=a(c))&&(f=l(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,(function(e){f[e]=setTimeout((function(){d.delete(e)}),c),"function"==typeof f[e].unref&&f[e].unref(),D&&(D[e]&&"nextTick"!==D[e]&&clearTimeout(D[e]),D[e]=setTimeout((function(){delete D[e]}),m),"function"==typeof D[e].unref&&D[e].unref())})),d.on("delete"+h,(function(e){clearTimeout(f[e]),delete f[e],D&&("nextTick"!==D[e]&&clearTimeout(D[e]),delete D[e])})),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:u(s(Number(p.preFetch),1),0))&&(D={},m=(1-m)*c,d.on("get"+h,(function(t,a,o){D[t]||(D[t]="nextTick",r((function(){var r
"nextTick"===D[t]&&(delete D[t],d.delete(t),p.async&&(a=e(a)).push(i),r=d.memoized.apply(o,a),p.promise&&n(r)&&("function"==typeof r.done?r.done(i,i):r.then(i,i)))})))}))),d.on("clear"+h,(function(){t(f,(function(e){clearTimeout(e)})),f={},D&&(t(D,(function(e){"nextTick"!==e&&clearTimeout(e)})),D={})})))}})),jt=se((function(e,t){"use strict"
var r=be(),n=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,u=n(null),s=n(null),l=0
return e=r(e),{hit:function(r){var n=s[r],c=++l
if(u[c]=r,s[r]=c,!n){if(++o<=e)return
return r=u[i],t(r),r}if(delete u[n],i===n)for(;!a.call(u,++i););},delete:t=function(e){var t=s[e]
if(t&&(delete u[t],delete s[e],--o,i===t)){if(!o)return l=0,void(i=1)
for(;!a.call(u,++i););}},clear:function(){o=0,i=1,u=n(null),s=n(null),l=0}}}})),qt=se((function(){"use strict"
var e=be(),t=jt(),r=xe()
r.max=function(n,a,o){var i,u,s;(n=e(n))&&(u=t(n),i=o.async&&r.async||o.promise&&r.promise?"async":"",a.on("set"+i,s=function(e){void 0!==(e=u.hit(e))&&a.delete(e)}),a.on("get"+i,s),a.on("delete"+i,u.delete),a.on("clear"+i,u.clear))}})),Lt=se((function(){"use strict"
var e=Ue(),t=xe(),r=Object.create,n=Object.defineProperties
t.refCounter=function(a,o,i){var u,s
u=r(null),s=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+s,(function(e,t){u[e]=t||1})),o.on("get"+s,(function(e){++u[e]})),o.on("delete"+s,(function(e){delete u[e]})),o.on("clear"+s,(function(){u={}})),n(o.memoized,{deleteRef:e((function(){var e=o.get(arguments)
return null===e?null:u[e]?! --u[e]&&(o.delete(e),!0):null})),getRefCount:e((function(){var e=o.get(arguments)
return null===e?0:u[e]?u[e]:0}))})}})),zt=se((function(e,t){"use strict"
var r=he(),n=ye(),a=ft()
t.exports=function(e){var t,o=r(arguments[1])
return o.normalizer||0!==(t=o.length=n(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=ht():t>1&&(o.normalizer=mt()(t)):o.normalizer=!1===t?yt()():1===t?Ft()():wt()(t)),o.async&&xt(),o.promise&&St(),o.dispose&&Ot(),o.maxAge&&Pt(),o.max&&qt(),o.refCounter&&Lt(),a(e,o)}})),Vt=se((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var r=t.length,n="",a=0;a<r;){var o=t.charAt(a)
if(e.identSpecialChars[o])n+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")n+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var u=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&u))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&u)+65536}n+="\\"+i.toString(16)+" "}a++}return n},e.escapeStr=function(t){for(var r,n=t.length,a="",o=0;o<n;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(r=e.strReplacementsRev[i])&&(i=r),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}})),Ht=se((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Vt()
e.parseCssSelector=function(e,r,n,a,o,i){var u=e.length,s=""
function l(n,a){var o=""
for(r++,s=e.charAt(r);r<u;){if(s===n)return r++,o
if("\\"===s){r++
var i=void 0
if((s=e.charAt(r))===n)o+=n
else if(void 0!==(i=a[s]))o+=i
else{if(t.isHex(s)){var l=s
for(r++,s=e.charAt(r);t.isHex(s);)l+=s,r++,s=e.charAt(r)
" "===s&&(r++,s=e.charAt(r)),o+=String.fromCharCode(parseInt(l,16))
continue}o+=s}}else o+=s
r++,s=e.charAt(r)}return o}function c(){var n=""
for(s=e.charAt(r);r<u;){if(t.isIdent(s))n+=s
else{if("\\"!==s)return n
if(++r>=u)throw Error("Expected symbol but end of file reached.")
if(s=e.charAt(r),t.identSpecialChars[s])n+=s
else{if(t.isHex(s)){var a=s
for(r++,s=e.charAt(r);t.isHex(s);)a+=s,r++,s=e.charAt(r)
" "===s&&(r++,s=e.charAt(r)),n+=String.fromCharCode(parseInt(a,16))
continue}n+=s}}r++,s=e.charAt(r)}return n}function d(){s=e.charAt(r)
for(var t=!1;" "===s||"\t"===s||"\n"===s||"\r"===s||"\f"===s;)t=!0,r++,s=e.charAt(r)
return t}function p(){var t=f()
if(!t)return null
var n=t
for(s=e.charAt(r);","===s;){if(r++,d(),"selectors"!==n.type&&(n={type:"selectors",selectors:[t]}),!(t=f()))throw Error('Rule expected after ",".')
n.selectors.push(t)}return n}function f(){d()
var t={type:"ruleSet"},n=h()
if(!n)return null
for(var a=t;n&&(n.type="rule",a.rule=n,a=n,d(),s=e.charAt(r),!(r>=u||","===s||")"===s));)if(o[s]){var i=s
if(r++,d(),!(n=h()))throw Error('Rule expected after "'+i+'".')
n.nestingOperator=i}else(n=h())&&(n.nestingOperator=null)
return t}function h(){for(var o=null;r<u;)if("*"===(s=e.charAt(r)))r++,(o=o||{}).tagName="*"
else if(t.isIdentStart(s)||"\\"===s)(o=o||{}).tagName=c()
else if("."===s)r++,((o=o||{}).classNames=o.classNames||[]).push(c())
else if("#"===s)r++,(o=o||{}).id=c()
else if("["===s){r++,d()
var f={name:c()}
if(d(),"]"===s)r++
else{var h=""
if(a[s]&&(h=s,r++,s=e.charAt(r)),r>=u)throw Error('Expected "=" but end of file reached.')
if("="!==s)throw Error('Expected "=" but "'+s+'" found.')
f.operator=h+"=",r++,d()
var m=""
if(f.valueType="string",'"'===s)m=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)m=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===s)r++,m=c(),f.valueType="substitute"
else{for(;r<u&&"]"!==s;)m+=s,r++,s=e.charAt(r)
m=m.trim()}if(d(),r>=u)throw Error('Expected "]" but end of file reached.')
if("]"!==s)throw Error('Expected "]" but "'+s+'" found.')
r++,f.value=m}((o=o||{}).attrs=o.attrs||[]).push(f)}else{if(":"!==s)break
r++
var D=c(),g={name:D}
if("("===s){r++
var v=""
if(d(),"selector"===n[D])g.valueType="selector",v=p()
else{if(g.valueType=n[D]||"string",'"'===s)v=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)v=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===s)r++,v=c(),g.valueType="substitute"
else{for(;r<u&&")"!==s;)v+=s,r++,s=e.charAt(r)
v=v.trim()}d()}if(r>=u)throw Error('Expected ")" but end of file reached.')
if(")"!==s)throw Error('Expected ")" but "'+s+'" found.')
r++,g.value=v}((o=o||{}).pseudos=o.pseudos||[]).push(g)}return o}return function(){var t=p()
if(r<u)throw Error('Rule expected but "'+e.charAt(r)+'" found.')
return t}()}})),Ut=se((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Vt()
e.renderEntity=function e(r){var n=""
switch(r.type){case"ruleSet":for(var a=r.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
n=o.join(" ")
break
case"selectors":n=r.selectors.map(e).join(", ")
break
case"rule":r.tagName&&(n="*"===r.tagName?"*":t.escapeIdentifier(r.tagName)),r.id&&(n+="#"+t.escapeIdentifier(r.id)),r.classNames&&(n+=r.classNames.map((function(e){return"."+t.escapeIdentifier(e)})).join("")),r.attrs&&(n+=r.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"})).join("")),r.pseudos&&(n+=r.pseudos.map((function(r){return r.valueType?"selector"===r.valueType?":"+t.escapeIdentifier(r.name)+"("+e(r.value)+")":"substitute"===r.valueType?":"+t.escapeIdentifier(r.name)+"($"+r.value+")":"numeric"===r.valueType?":"+t.escapeIdentifier(r.name)+"("+r.value+")":":"+t.escapeIdentifier(r.name)+"("+t.escapeIdentifier(r.value)+")":":"+t.escapeIdentifier(r.name)})).join(""))
break
default:throw Error('Unknown entity type: "'+r.type+'".')}return n}})),$t=se((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ht(),r=Ut(),n=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.pseudos[a]="selector"}return this},e.prototype.unregisterSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.pseudos[a]}return this},e.prototype.registerNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.pseudos[a]="numeric"}return this},e.prototype.unregisterNumericPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.pseudos[a]}return this},e.prototype.registerNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.ruleNestingOperators[a]=!0}return this},e.prototype.unregisterNestingOperators=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.ruleNestingOperators[a]}return this},e.prototype.registerAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
this.attrEqualityMods[a]=!0}return this},e.prototype.unregisterAttrEqualityMods=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r=0,n=e;r<n.length;r++){var a=n[r]
delete this.attrEqualityMods[a]}return this},e.prototype.enableSubstitutes=function(){return this.substitutesEnabled=!0,this},e.prototype.disableSubstitutes=function(){return this.substitutesEnabled=!1,this},e.prototype.parse=function(e){return t.parseCssSelector(e,0,this.pseudos,this.attrEqualityMods,this.ruleNestingOperators,this.substitutesEnabled)},e.prototype.render=function(e){return r.renderEntity(e).trim()},e}()
e.CssSelectorParser=n})),Gt=se((function(e,t){var i,u
i=e,u=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,u=void 0,s=void 0,l=function(e,t){D[i]=e,D[i+1]=t,2===(i+=2)&&(s?s(g):w())},c=void 0!==r?r:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(g,1)}}var D=new Array(1e3)
function g(){for(var e=0;e<i;e+=2)(0,D[e])(D[e+1]),D[e]=void 0,D[e+1]=void 0
i=0}var v,b,y,F,w=void 0
function E(e,t){var r=this,n=new this.constructor(A)
void 0===n[x]&&q(n)
var a=r._state
if(a){var o=arguments[a-1]
l((function(){return P(a,n,o,r._result)}))}else M(r,n,e,t)
return n}function C(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(A)
return R(t,e),t}f?w=function(){return process.nextTick(g)}:p?(b=0,y=new p(g),F=a.createTextNode(""),y.observe(F,{characterData:!0}),w=function(){F.data=b=++b%2}):h?((v=new MessageChannel).port1.onmessage=g,w=function(){return v.port2.postMessage(0)}):w=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(u=e.runOnLoop||e.runOnContext)?function(){u(g)}:m()}catch(e){return m()}}():m()
var x=Math.random().toString(36).substring(2)
function A(){}var k=void 0,N=1,T=2
function B(t,r,n){r.constructor===t.constructor&&n===E&&r.constructor.resolve===C?function(e,t){t._state===N?S(e,t._result):t._state===T?O(e,t._result):M(t,void 0,(function(t){return R(e,t)}),(function(t){return O(e,t)}))}(t,r):void 0===n?S(t,r):e(n)?function(e,t,r){l((function(e){var n=!1,a=function(r,a,o,i){try{r.call(a,(function(r){n||(n=!0,t!==r?R(e,r):S(e,r))}),(function(t){n||(n=!0,O(e,t))}))}catch(e){return e}}(r,t,0,0,e._label)
!n&&a&&(n=!0,O(e,a))}),e)}(t,r,n):S(t,r)}function R(e,t){if(e===t)O(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(n=t),null===n||"object"!==a&&"function"!==a)S(e,t)
else{var r=void 0
try{r=t.then}catch(t){return void O(e,t)}B(e,t,r)}var n,a}function _(e){e._onerror&&e._onerror(e._result),I(e)}function S(e,t){e._state===k&&(e._result=t,e._state=N,0!==e._subscribers.length&&l(I,e))}function O(e,t){e._state===k&&(e._state=T,e._result=t,l(_,e))}function M(e,t,r,n){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+N]=r,a[o+T]=n,0===o&&e._state&&l(I,e)}function I(e){var t=e._subscribers,r=e._state
if(0!==t.length){for(var n=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)n=t[i],a=t[i+r],n?P(r,n,a,o):a(o)
e._subscribers.length=0}}function P(t,r,n,a){var o=e(n),i=void 0,u=void 0,s=!0
if(o){try{i=n(a)}catch(e){s=!1,u=e}if(r===i)return void O(r,new TypeError("A promises callback cannot return that same promise."))}else i=a
r._state!==k||(o&&s?R(r,i):!1===s?O(r,u):t===N?S(r,i):t===T&&O(r,i))}var j=0
function q(e){e[x]=j++,e._state=void 0,e._result=void 0,e._subscribers=[]}var L=function(){function e(e,r){this._instanceConstructor=e,this.promise=new e(A),this.promise[x]||q(this.promise),t(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&S(this.promise,this._result))):O(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve
if(n===C){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===E&&e._state!==k)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(r===z){var u=new r(A)
i?O(u,o):B(u,e,a),this._willSettleAt(u,t)}else this._willSettleAt(new r((function(t){return t(e)})),t)}else this._willSettleAt(n(e),t)},e.prototype._settledAt=function(e,t,r){var n=this.promise
n._state===k&&(this._remaining--,e===T?O(n,r):this._result[t]=r),0===this._remaining&&S(n,this._result)},e.prototype._willSettleAt=function(e,t){var r=this
M(e,void 0,(function(e){return r._settledAt(N,t,e)}),(function(e){return r._settledAt(T,t,e)}))},e}(),z=function(){function t(e){this[x]=j++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){R(e,t)}),(function(t){O(e,t)}))}catch(t){O(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var r=this,n=r.constructor
return e(t)?r.then((function(e){return n.resolve(t()).then((function(){return e}))}),(function(e){return n.resolve(t()).then((function(){throw e}))})):r.then(t,t)},t}()
return z.prototype.then=E,z.all=function(e){return new L(this,e).promise},z.race=function(e){var r=this
return t(e)?new r((function(t,n){for(var a=e.length,o=0;o<a;o++)r.resolve(e[o]).then(t,n)})):new r((function(e,t){return t(new TypeError("You must pass an array to race."))}))},z.resolve=C,z.reject=function(e){var t=new this(A)
return O(t,e),t},z._setScheduler=function(e){s=e},z._setAsap=function(e){l=e},z._asap=l,z.polyfill=function(){var e=void 0
if(void 0!==n)e=n
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var r=null
try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=z},z.Promise=z,z},"object"===o(e)&&void 0!==t?t.exports=u():"function"==typeof define&&define.amd?define(u):i.ES6Promise=u()})),Wt=se((function(e){var t,r,n=(t=Object.prototype.toString,r=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return r.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return 0|e},ToUint32:function(e){return e>>>0}}),a=Math.LN2,i=Math.abs,u=Math.floor,s=Math.log,l=Math.min,c=Math.pow,d=Math.round
function p(e,t,r){return e<t?t:e>r?r:e}var f,h=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,r=[]
for(t in e)n.HasOwnProperty(e,t)&&r.push(t)
return r}
function m(e){if(h&&f){var t,r=h(e)
for(t=0;t<r.length;t+=1)f(e,r[t],{value:e[r[t]],writable:!1,enumerable:!1,configurable:!1})}}function D(e,t){var r=32-t
return e<<r>>r}function g(e,t){var r=32-t
return e<<r>>>r}function v(e){return[255&e]}function b(e){return D(e[0],8)}function y(e){return[255&e]}function F(e){return g(e[0],8)}function w(e){return[(e=d(Number(e)))<0?0:e>255?255:255&e]}function E(e){return[e>>8&255,255&e]}function C(e){return D(e[0]<<8|e[1],16)}function x(e){return[e>>8&255,255&e]}function A(e){return g(e[0]<<8|e[1],16)}function k(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function N(e){return D(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function T(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function B(e){return g(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e,t,r){var n,o,d,p,f,h,m,D=(1<<t-1)-1
function g(e){var t=u(e),r=e-t
return r<.5?t:r>.5||t%2?t+1:t}for(e!=e?(o=(1<<t)-1,d=c(2,r-1),n=0):e===1/0||e===-1/0?(o=(1<<t)-1,d=0,n=e<0?1:0):0===e?(o=0,d=0,n=1/e==-1/0?1:0):(n=e<0,(e=i(e))>=c(2,1-D)?(o=l(u(s(e)/a),1023),(d=g(e/c(2,o)*c(2,r)))/c(2,r)>=2&&(o+=1,d=1),o>D?(o=(1<<t)-1,d=0):(o+=D,d-=c(2,r))):(o=0,d=g(e/c(2,1-D-r)))),f=[],p=r;p;p-=1)f.push(d%2?1:0),d=u(d/2)
for(p=t;p;p-=1)f.push(o%2?1:0),o=u(o/2)
for(f.push(n?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function _(e,t,r){var n,a,o,i,u,s,l,d,p=[]
for(n=e.length;n;n-=1)for(o=e[n-1],a=8;a;a-=1)p.push(o%2?1:0),o>>=1
return p.reverse(),i=p.join(""),u=(1<<t-1)-1,s=parseInt(i.substring(0,1),2)?-1:1,l=parseInt(i.substring(1,1+t),2),d=parseInt(i.substring(1+t),2),l===(1<<t)-1?0===d?s*(1/0):NaN:l>0?s*c(2,l-u)*(1+d/c(2,r)):0!==d?s*c(2,-(u-1))*(d/c(2,r)):s<0?-0:0}function S(e){return _(e,11,52)}function O(e){return R(e,11,52)}function M(e){return _(e,8,23)}function I(e){return R(e,8,23)}f=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,r){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
return n.HasProperty(r,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(e,t,r.get),n.HasProperty(r,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(e,t,r.set),n.HasProperty(r,"value")&&(e[t]=r.value),e},function(){function t(e){if((e=n.ToInt32(e))<0)throw new RangeError("ArrayBuffer size is not a small enough positive integer")
var t
for(this.byteLength=e,this._bytes=[],this._bytes.length=e,t=0;t<this.byteLength;t+=1)this._bytes[t]=0
m(this)}function r(){}function a(e,a,i){var u
return u=function(e,r,a){var i,s,l,c
if(arguments.length&&"number"!=typeof arguments[0])if("object"===o(arguments[0])&&arguments[0].constructor===u)for(i=arguments[0],this.length=i.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)this._setter(l,i._getter(l))
else if("object"!==o(arguments[0])||arguments[0]instanceof t||"ArrayBuffer"===n.Class(arguments[0])){if("object"!==o(arguments[0])||!(arguments[0]instanceof t||"ArrayBuffer"===n.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)")
if(this.buffer=e,this.byteOffset=n.ToUint32(r),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.")
if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size")
this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=n.ToUint32(a),this.byteLength=this.length*this.BYTES_PER_ELEMENT
if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(s=arguments[0],this.length=n.ToUint32(s.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)c=s[l],this._setter(l,Number(c))
else{if(this.length=n.ToInt32(arguments[0]),a<0)throw new RangeError("ArrayBufferView size is not a small enough positive integer")
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=u,m(this),function(e){if(f){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)r(t)}function r(t){f(e,t,{get:function(){return e._getter(t)},set:function(r){e._setter(t,r)},enumerable:!0,configurable:!1})}}(this)},u.prototype=new r,u.prototype.BYTES_PER_ELEMENT=e,u.prototype._pack=a,u.prototype._unpack=i,u.BYTES_PER_ELEMENT=e,u.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
if(!((e=n.ToUint32(e))>=this.length)){for(var t=[],r=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;r<this.BYTES_PER_ELEMENT;r+=1,a+=1)t.push(this.buffer._bytes[a])
return this._unpack(t)}},u.prototype.get=u.prototype._getter,u.prototype._setter=function(e,t){if(arguments.length<2)throw new SyntaxError("Not enough arguments")
if((e=n.ToUint32(e))<this.length){var r,a,o=this._pack(t)
for(r=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;r<this.BYTES_PER_ELEMENT;r+=1,a+=1)this.buffer._bytes[a]=o[r]}},u.prototype.set=function(e,t){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
var r,a,i,u,s,l,c,d,p,f
if("object"===o(arguments[0])&&arguments[0].constructor===this.constructor){if(r=arguments[0],(i=n.ToUint32(arguments[1]))+r.length>this.length)throw new RangeError("Offset plus length of array is out of range")
if(d=this.byteOffset+i*this.BYTES_PER_ELEMENT,p=r.length*this.BYTES_PER_ELEMENT,r.buffer===this.buffer){for(f=[],s=0,l=r.byteOffset;s<p;s+=1,l+=1)f[s]=r.buffer._bytes[l]
for(s=0,c=d;s<p;s+=1,c+=1)this.buffer._bytes[c]=f[s]}else for(s=0,l=r.byteOffset,c=d;s<p;s+=1,l+=1,c+=1)this.buffer._bytes[c]=r.buffer._bytes[l]}else{if("object"!==o(arguments[0])||void 0===arguments[0].length)throw new TypeError("Unexpected argument type(s)")
if(a=arguments[0],u=n.ToUint32(a.length),(i=n.ToUint32(arguments[1]))+u>this.length)throw new RangeError("Offset plus length of array is out of range")
for(s=0;s<u;s+=1)l=a[s],this._setter(i+s,Number(l))}},u.prototype.subarray=function(e,t){e=n.ToInt32(e),t=n.ToInt32(t),arguments.length<1&&(e=0),arguments.length<2&&(t=this.length),e<0&&(e=this.length+e),t<0&&(t=this.length+t),e=p(e,0,this.length)
var r=(t=p(t,0,this.length))-e
return r<0&&(r=0),new this.constructor(this.buffer,this.byteOffset+e*this.BYTES_PER_ELEMENT,r)},u}e.ArrayBuffer=e.ArrayBuffer||t
var i=a(1,v,b),u=a(1,y,F),s=a(1,w,F),l=a(2,E,C),c=a(2,x,A),d=a(4,k,N),h=a(4,T,B),D=a(4,I,M),g=a(8,O,S)
e.Int8Array=e.Int8Array||i,e.Uint8Array=e.Uint8Array||u,e.Uint8ClampedArray=e.Uint8ClampedArray||s,e.Int16Array=e.Int16Array||l,e.Uint16Array=e.Uint16Array||c,e.Int32Array=e.Int32Array||d,e.Uint32Array=e.Uint32Array||h,e.Float32Array=e.Float32Array||D,e.Float64Array=e.Float64Array||g}(),function(){function t(e,t){return n.IsCallable(e.get)?e.get(t):e[t]}var r,a=(r=new e.Uint16Array([4660]),18===t(new e.Uint8Array(r.buffer),0))
function o(t,r,a){if(0===arguments.length)t=new e.ArrayBuffer(0)
else if(!(t instanceof e.ArrayBuffer||"ArrayBuffer"===n.Class(t)))throw new TypeError("TypeError")
if(this.buffer=t||new e.ArrayBuffer(0),this.byteOffset=n.ToUint32(r),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:n.ToUint32(a),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
m(this)}function i(r){return function(o,i){if((o=n.ToUint32(o))+r.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
o+=this.byteOffset
var u,s=new e.Uint8Array(this.buffer,o,r.BYTES_PER_ELEMENT),l=[]
for(u=0;u<r.BYTES_PER_ELEMENT;u+=1)l.push(t(s,u))
return Boolean(i)===Boolean(a)&&l.reverse(),t(new r(new e.Uint8Array(l).buffer),0)}}function u(r){return function(o,i,u){if((o=n.ToUint32(o))+r.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
var s,l=new r([i]),c=new e.Uint8Array(l.buffer),d=[]
for(s=0;s<r.BYTES_PER_ELEMENT;s+=1)d.push(t(c,s))
Boolean(u)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,r.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=i(e.Uint8Array),o.prototype.getInt8=i(e.Int8Array),o.prototype.getUint16=i(e.Uint16Array),o.prototype.getInt16=i(e.Int16Array),o.prototype.getUint32=i(e.Uint32Array),o.prototype.getInt32=i(e.Int32Array),o.prototype.getFloat32=i(e.Float32Array),o.prototype.getFloat64=i(e.Float64Array),o.prototype.setUint8=u(e.Uint8Array),o.prototype.setInt8=u(e.Int8Array),o.prototype.setUint16=u(e.Uint16Array),o.prototype.setInt16=u(e.Int16Array),o.prototype.setUint32=u(e.Uint32Array),o.prototype.setInt32=u(e.Int32Array),o.prototype.setFloat32=u(e.Float32Array),o.prototype.setFloat64=u(e.Float64Array),e.DataView=e.DataView||o}()})),Yt=se((function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),n=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(n(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,r){if(!a(e)||!t.call(e,"_id"))throw new TypeError(r+" method called on incompatible receiver "+o(e))}function i(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(r(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))})),n(e.prototype,"get",(function(e){if(r(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(r(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(r(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==r?r:void 0!==n?n:e)})),Qt=se((function(e,t){"use strict"
var a=function(e){return e&&e.Math===Math&&e}
t.exports=a("object"==("undefined"==typeof globalThis?"undefined":o(globalThis))&&globalThis)||a("object"==(void 0===r?"undefined":o(r))&&r)||a("object"==("undefined"==typeof self?"undefined":o(self))&&self)||a("object"==(void 0===n?"undefined":o(n))&&n)||function(){return this}()||e||Function("return this")()})),Kt=se((function(e,t){"use strict"
t.exports=function(e){try{return!!e()}catch(e){return!0}}})),Xt=se((function(e,t){"use strict"
var r=Kt()
t.exports=!r((function(){var e=function(){}.bind()
return"function"!=typeof e||e.hasOwnProperty("prototype")}))})),Zt=se((function(e,t){"use strict"
var r=Xt(),n=Function.prototype,a=n.apply,i=n.call
t.exports="object"==("undefined"==typeof Reflect?"undefined":o(Reflect))&&Reflect.apply||(r?i.bind(a):function(){return i.apply(a,arguments)})})),Jt=se((function(e,t){"use strict"
var r=Xt(),n=Function.prototype,a=n.call,o=r&&n.bind.bind(a,a)
t.exports=r?o:function(e){return function(){return a.apply(e,arguments)}}})),er=se((function(e,t){"use strict"
var r=Jt(),n=r({}.toString),a=r("".slice)
t.exports=function(e){return a(n(e),8,-1)}})),tr=se((function(e,t){"use strict"
var r=er(),n=Jt()
t.exports=function(e){if("Function"===r(e))return n(e)}})),rr=se((function(e,t){"use strict"
var r="object"==(void 0===a?"undefined":o(a))&&a.all,n=void 0===r&&void 0!==r
t.exports={all:r,IS_HTMLDDA:n}})),nr=se((function(e,t){"use strict"
var r=rr(),n=r.all
t.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===n}:function(e){return"function"==typeof e}})),ar=se((function(e,t){"use strict"
var r=Kt()
t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))})),or=se((function(e,t){"use strict"
var r=Xt(),n=Function.prototype.call
t.exports=r?n.bind(n):function(){return n.apply(n,arguments)}})),ir=se((function(e){"use strict"
var t={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,n=r&&!t.call({1:2},1)
e.f=n?function(e){var t=r(this,e)
return!!t&&t.enumerable}:t})),ur=se((function(e,t){"use strict"
t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}})),sr=se((function(e,t){"use strict"
var r=Jt(),n=Kt(),a=er(),o=Object,i=r("".split)
t.exports=n((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===a(e)?i(e,""):o(e)}:o})),lr=se((function(e,t){"use strict"
t.exports=function(e){return null==e}})),cr=se((function(e,t){"use strict"
var r=lr(),n=TypeError
t.exports=function(e){if(r(e))throw new n("Can't call method on "+e)
return e}})),dr=se((function(e,t){"use strict"
var r=sr(),n=cr()
t.exports=function(e){return r(n(e))}})),pr=se((function(e,t){"use strict"
var r=nr(),n=rr(),a=n.all
t.exports=n.IS_HTMLDDA?function(e){return"object"==o(e)?null!==e:r(e)||e===a}:function(e){return"object"==o(e)?null!==e:r(e)}})),fr=se((function(e,t){"use strict"
t.exports={}})),hr=se((function(e,t){"use strict"
var r=fr(),n=Qt(),a=nr(),o=function(e){return a(e)?e:void 0}
t.exports=function(e,t){return arguments.length<2?o(r[e])||o(n[e]):r[e]&&r[e][t]||n[e]&&n[e][t]}})),mr=se((function(e,t){"use strict"
var r=Jt()
t.exports=r({}.isPrototypeOf)})),Dr=se((function(e,t){"use strict"
t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""})),gr=se((function(e,t){"use strict"
var r,n,a=Qt(),o=Dr(),i=a.process,u=a.Deno,s=i&&i.versions||u&&u.version,l=s&&s.v8
l&&(n=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(n=+r[1]),t.exports=n})),vr=se((function(e,t){"use strict"
var r=gr(),n=Kt(),a=Qt().String
t.exports=!!Object.getOwnPropertySymbols&&!n((function(){var e=Symbol("symbol detection")
return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))})),br=se((function(e,t){"use strict"
var r=vr()
t.exports=r&&!Symbol.sham&&"symbol"==o(Symbol.iterator)})),yr=se((function(e,t){"use strict"
var r=hr(),n=nr(),a=mr(),i=br(),u=Object
t.exports=i?function(e){return"symbol"==o(e)}:function(e){var t=r("Symbol")
return n(t)&&a(t.prototype,u(e))}})),Fr=se((function(e,t){"use strict"
var r=String
t.exports=function(e){try{return r(e)}catch(e){return"Object"}}})),wr=se((function(e,t){"use strict"
var r=nr(),n=Fr(),a=TypeError
t.exports=function(e){if(r(e))return e
throw new a(n(e)+" is not a function")}})),Er=se((function(e,t){"use strict"
var r=wr(),n=lr()
t.exports=function(e,t){var a=e[t]
return n(a)?void 0:r(a)}})),Cr=se((function(e,t){"use strict"
var r=or(),n=nr(),a=pr(),o=TypeError
t.exports=function(e,t){var i,u
if("string"===t&&n(i=e.toString)&&!a(u=r(i,e)))return u
if(n(i=e.valueOf)&&!a(u=r(i,e)))return u
if("string"!==t&&n(i=e.toString)&&!a(u=r(i,e)))return u
throw new o("Can't convert object to primitive value")}})),xr=se((function(e,t){"use strict"
t.exports=!0})),Ar=se((function(e,t){"use strict"
var r=Qt(),n=Object.defineProperty
t.exports=function(e,t){try{n(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}})),kr=se((function(e,t){"use strict"
var r=Qt(),n=Ar(),a="__core-js_shared__",o=r[a]||n(a,{})
t.exports=o})),Nr=se((function(e,t){"use strict"
var r=xr(),n=kr();(t.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})})),Tr=se((function(e,t){"use strict"
var r=cr(),n=Object
t.exports=function(e){return n(r(e))}})),Br=se((function(e,t){"use strict"
var r=Jt(),n=Tr(),a=r({}.hasOwnProperty)
t.exports=Object.hasOwn||function(e,t){return a(n(e),t)}})),Rr=se((function(e,t){"use strict"
var r=Jt(),n=0,a=Math.random(),o=r(1..toString)
t.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++n+a,36)}})),_r=se((function(e,t){"use strict"
var r=Qt(),n=Nr(),a=Br(),o=Rr(),i=vr(),u=br(),s=r.Symbol,l=n("wks"),c=u?s.for||s:s&&s.withoutSetter||o
t.exports=function(e){return a(l,e)||(l[e]=i&&a(s,e)?s[e]:c("Symbol."+e)),l[e]}})),Sr=se((function(e,t){"use strict"
var r=or(),n=pr(),a=yr(),o=Er(),i=Cr(),u=_r(),s=TypeError,l=u("toPrimitive")
t.exports=function(e,t){if(!n(e)||a(e))return e
var u,c=o(e,l)
if(c){if(void 0===t&&(t="default"),u=r(c,e,t),!n(u)||a(u))return u
throw new s("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}})),Or=se((function(e,t){"use strict"
var r=Sr(),n=yr()
t.exports=function(e){var t=r(e,"string")
return n(t)?t:t+""}})),Mr=se((function(e,t){"use strict"
var r=Qt(),n=pr(),a=r.document,o=n(a)&&n(a.createElement)
t.exports=function(e){return o?a.createElement(e):{}}})),Ir=se((function(e,t){"use strict"
var r=ar(),n=Kt(),a=Mr()
t.exports=!r&&!n((function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))})),Pr=se((function(e){"use strict"
var t=ar(),r=or(),n=ir(),a=ur(),o=dr(),i=Or(),u=Br(),s=Ir(),l=Object.getOwnPropertyDescriptor
e.f=t?l:function(e,t){if(e=o(e),t=i(t),s)try{return l(e,t)}catch(e){}if(u(e,t))return a(!r(n.f,e,t),e[t])}})),jr=se((function(e,t){"use strict"
var r=Kt(),n=nr(),a=/#|\.prototype\./,o=function(e,t){var a=u[i(e)]
return a===l||a!==s&&(n(t)?r(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},u=o.data={},s=o.NATIVE="N",l=o.POLYFILL="P"
t.exports=o})),qr=se((function(e,t){"use strict"
var r=tr(),n=wr(),a=Xt(),o=r(r.bind)
t.exports=function(e,t){return n(e),void 0===t?e:a?o(e,t):function(){return e.apply(t,arguments)}}})),Lr=se((function(e,t){"use strict"
var r=ar(),n=Kt()
t.exports=r&&n((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))})),zr=se((function(e,t){"use strict"
var r=pr(),n=String,a=TypeError
t.exports=function(e){if(r(e))return e
throw new a(n(e)+" is not an object")}})),Vr=se((function(e){"use strict"
var t=ar(),r=Ir(),n=Lr(),a=zr(),o=Or(),i=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",c="configurable",d="writable"
e.f=t?n?function(e,t,r){if(a(e),t=o(t),a(r),"function"==typeof e&&"prototype"===t&&"value"in r&&d in r&&!r[d]){var n=s(e,t)
n&&n[d]&&(e[t]=r.value,r={configurable:c in r?r[c]:n[c],enumerable:l in r?r[l]:n[l],writable:!1})}return u(e,t,r)}:u:function(e,t,n){if(a(e),t=o(t),a(n),r)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw new i("Accessors not supported")
return"value"in n&&(e[t]=n.value),e}})),Hr=se((function(e,t){"use strict"
var r=ar(),n=Vr(),a=ur()
t.exports=r?function(e,t,r){return n.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}})),Ur=se((function(e,t){"use strict"
var r=Qt(),n=Zt(),a=tr(),i=nr(),u=Pr().f,s=jr(),l=fr(),c=qr(),d=Hr(),p=Br(),f=function(e){var t=function t(r,a,o){if(this instanceof t){switch(arguments.length){case 0:return new e
case 1:return new e(r)
case 2:return new e(r,a)}return new e(r,a,o)}return n(e,this,arguments)}
return t.prototype=e.prototype,t}
t.exports=function(e,t){var n,h,m,D,g,v,b,y,F,w=e.target,E=e.global,C=e.stat,x=e.proto,A=E?r:C?r[w]:(r[w]||{}).prototype,k=E?l:l[w]||d(l,w,{})[w],N=k.prototype
for(D in t)h=!(n=s(E?D:w+(C?".":"#")+D,e.forced))&&A&&p(A,D),v=k[D],h&&(b=e.dontCallGetSet?(F=u(A,D))&&F.value:A[D]),g=h&&b?b:t[D],h&&o(v)==o(g)||(y=e.bind&&h?c(g,r):e.wrap&&h?f(g):x&&i(g)?a(g):g,(e.sham||g&&g.sham||v&&v.sham)&&d(y,"sham",!0),d(k,D,y),x&&(p(l,m=w+"Prototype")||d(l,m,{}),d(l[m],D,g),e.real&&N&&(n||!N[D])&&d(N,D,g)))}})),$r=se((function(){"use strict"
Ur()({target:"Object",stat:!0},{hasOwn:Br()})})),Gr=se((function(e,t){"use strict"
$r()
var r=fr()
t.exports=r.Object.hasOwn})),Wr=se((function(e,t){"use strict"
var r=Gr()
t.exports=r})),Yr=se((function(e,t){"use strict"
var r=Wr()
t.exports=r})),Qr=se((function(e,t){"use strict"
var r=Nr(),n=Rr(),a=r("keys")
t.exports=function(e){return a[e]||(a[e]=n(e))}})),Kr=se((function(e,t){"use strict"
var r=Kt()
t.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))})),Xr=se((function(e,t){"use strict"
var r=Br(),n=nr(),a=Tr(),o=Qr(),i=Kr(),u=o("IE_PROTO"),s=Object,l=s.prototype
t.exports=i?s.getPrototypeOf:function(e){var t=a(e)
if(r(t,u))return t[u]
var o=t.constructor
return n(o)&&t instanceof o?o.prototype:t instanceof s?l:null}})),Zr=se((function(e,t){"use strict"
var r=Math.ceil,n=Math.floor
t.exports=Math.trunc||function(e){var t=+e
return(t>0?n:r)(t)}})),Jr=se((function(e,t){"use strict"
var r=Zr()
t.exports=function(e){var t=+e
return t!=t||0===t?0:r(t)}})),en=se((function(e,t){"use strict"
var r=Jr(),n=Math.max,a=Math.min
t.exports=function(e,t){var o=r(e)
return o<0?n(o+t,0):a(o,t)}})),tn=se((function(e,t){"use strict"
var r=Jr(),n=Math.min
t.exports=function(e){return e>0?n(r(e),9007199254740991):0}})),rn=se((function(e,t){"use strict"
var r=tn()
t.exports=function(e){return r(e.length)}})),nn=se((function(e,t){"use strict"
var r=dr(),n=en(),a=rn(),o=function(e){return function(t,o,i){var u,s=r(t),l=a(s),c=n(i,l)
if(e&&o!=o){for(;l>c;)if((u=s[c++])!=u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===o)return e||c||0
return!e&&-1}}
t.exports={includes:o(!0),indexOf:o(!1)}})),an=se((function(e,t){"use strict"
t.exports={}})),on=se((function(e,t){"use strict"
var r=Jt(),n=Br(),a=dr(),o=nn().indexOf,i=an(),u=r([].push)
t.exports=function(e,t){var r,s=a(e),l=0,c=[]
for(r in s)!n(i,r)&&n(s,r)&&u(c,r)
for(;t.length>l;)n(s,r=t[l++])&&(~o(c,r)||u(c,r))
return c}})),un=se((function(e,t){"use strict"
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]})),sn=se((function(e,t){"use strict"
var r=on(),n=un()
t.exports=Object.keys||function(e){return r(e,n)}})),ln=se((function(e,t){"use strict"
var r=ar(),n=Kt(),a=Jt(),o=Xr(),i=sn(),u=dr(),s=a(ir().f),l=a([].push),c=r&&n((function(){var e=Object.create(null)
return e[2]=2,!s(e,2)})),d=function(e){return function(t){for(var n,a=u(t),d=i(a),p=c&&null===o(a),f=d.length,h=0,m=[];f>h;)n=d[h++],r&&!(p?n in a:s(a,n))||l(m,e?[n,a[n]]:a[n])
return m}}
t.exports={entries:d(!0),values:d(!1)}})),cn=se((function(){"use strict"
var e=Ur(),t=ln().values
e({target:"Object",stat:!0},{values:function(e){return t(e)}})})),dn=se((function(e,t){"use strict"
cn()
var r=fr()
t.exports=r.Object.values})),pn=se((function(e,t){"use strict"
var r=dn()
t.exports=r})),fn=se((function(e,t){"use strict"
var r=pn()
t.exports=r})),hn=se((function(e,t){"use strict"
var r={}
r[_r()("toStringTag")]="z",t.exports="[object z]"===String(r)})),mn=se((function(e,t){"use strict"
var r=hn(),n=nr(),a=er(),o=_r()("toStringTag"),i=Object,u="Arguments"===a(function(){return arguments}())
t.exports=r?a:function(e){var t,r,s
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=i(e),o))?r:u?a(t):"Object"===(s=a(t))&&n(t.callee)?"Arguments":s}})),Dn=se((function(e,t){"use strict"
var r=mn(),n=String
t.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string")
return n(e)}})),gn=se((function(e,t){"use strict"
var r=Jt(),n=Jr(),a=Dn(),o=cr(),i=r("".charAt),u=r("".charCodeAt),s=r("".slice),l=function(e){return function(t,r){var l,c,d=a(o(t)),p=n(r),f=d.length
return p<0||p>=f?e?"":void 0:(l=u(d,p))<55296||l>56319||p+1===f||(c=u(d,p+1))<56320||c>57343?e?i(d,p):l:e?s(d,p,p+2):c-56320+(l-55296<<10)+65536}}
t.exports={codeAt:l(!1),charAt:l(!0)}})),vn=se((function(e,t){"use strict"
var r=Qt(),n=nr(),a=r.WeakMap
t.exports=n(a)&&/native code/.test(String(a))})),bn=se((function(e,t){"use strict"
var r,n,a,o,i,u=vn(),s=Qt(),l=pr(),c=Hr(),d=Br(),p=kr(),f=Qr(),h=an(),m="Object already initialized",D=s.TypeError,g=s.WeakMap
u||p.state?((o=p.state||(p.state=new g)).get=o.get,o.has=o.has,o.set=o.set,r=function(e,t){if(o.has(e))throw new D(m)
return t.facade=e,o.set(e,t),t},n=function(e){return o.get(e)||{}},a=function(e){return o.has(e)}):(h[i=f("state")]=!0,r=function(e,t){if(d(e,i))throw new D(m)
return t.facade=e,c(e,i,t),t},n=function(e){return d(e,i)?e[i]:{}},a=function(e){return d(e,i)}),t.exports={set:r,get:n,has:a,enforce:function(e){return a(e)?n(e):r(e,{})},getterFor:function(e){return function(t){var r
if(!l(t)||(r=n(t)).type!==e)throw new D("Incompatible receiver, "+e+" required")
return r}}}})),yn=se((function(e,t){"use strict"
var r=ar(),n=Br(),a=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,i=n(a,"name"),u=i&&"something"===function(){}.name,s=i&&(!r||r&&o(a,"name").configurable)
t.exports={EXISTS:i,PROPER:u,CONFIGURABLE:s}})),Fn=se((function(e){"use strict"
var t=ar(),r=Lr(),n=Vr(),a=zr(),o=dr(),i=sn()
e.f=t&&!r?Object.defineProperties:function(e,t){a(e)
for(var r,u=o(t),s=i(t),l=s.length,c=0;l>c;)n.f(e,r=s[c++],u[r])
return e}})),wn=se((function(e,t){"use strict"
var r=hr()
t.exports=r("document","documentElement")})),En=se((function(e,t){"use strict"
var r,n=zr(),o=Fn(),i=un(),u=an(),s=wn(),l=Mr(),c=Qr(),d="prototype",p="script",f=c("IE_PROTO"),h=function(){},m=function(e){return"<"+p+">"+e+"</"+p+">"},D=function(e){e.write(m("")),e.close()
var t=e.parentWindow.Object
return e=null,t},g=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}var e,t,n
g=void 0!==a?a.domain&&r?D(r):(t=l("iframe"),n="java"+p+":",t.style.display="none",s.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F):D(r)
for(var o=i.length;o--;)delete g[d][i[o]]
return g()}
u[f]=!0,t.exports=Object.create||function(e,t){var r
return null!==e?(h[d]=n(e),r=new h,h[d]=null,r[f]=e):r=g(),void 0===t?r:o.f(r,t)}})),Cn=se((function(e,t){"use strict"
var r=Hr()
t.exports=function(e,t,n,a){return a&&a.enumerable?e[t]=n:r(e,t,n),e}})),xn=se((function(e,t){"use strict"
var r,n,a,o=Kt(),i=nr(),u=pr(),s=En(),l=Xr(),c=Cn(),d=_r(),p=xr(),f=d("iterator"),h=!1;[].keys&&("next"in(a=[].keys())?(n=l(l(a)))!==Object.prototype&&(r=n):h=!0),!u(r)||o((function(){var e={}
return r[f].call(e)!==e}))?r={}:p&&(r=s(r)),i(r[f])||c(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}})),An=se((function(e,t){"use strict"
var r=hn(),n=mn()
t.exports=r?{}.toString:function(){return"[object "+n(this)+"]"}})),kn=se((function(e,t){"use strict"
var r=hn(),n=Vr().f,a=Hr(),o=Br(),i=An(),u=_r()("toStringTag")
t.exports=function(e,t,s,l){if(e){var c=s?e:e.prototype
o(c,u)||n(c,u,{configurable:!0,value:t}),l&&!r&&a(c,"toString",i)}}})),Nn=se((function(e,t){"use strict"
t.exports={}})),Tn=se((function(e,t){"use strict"
var r=xn().IteratorPrototype,n=En(),a=ur(),o=kn(),i=Nn(),u=function(){return this}
t.exports=function(e,t,s,l){var c=t+" Iterator"
return e.prototype=n(r,{next:a(+!l,s)}),o(e,c,!1,!0),i[c]=u,e}})),Bn=se((function(e,t){"use strict"
var r=Jt(),n=wr()
t.exports=function(e,t,a){try{return r(n(Object.getOwnPropertyDescriptor(e,t)[a]))}catch(e){}}})),Rn=se((function(e,t){"use strict"
var r=nr(),n=String,a=TypeError
t.exports=function(e){if("object"==o(e)||r(e))return e
throw new a("Can't set "+n(e)+" as a prototype")}})),_n=se((function(e,t){"use strict"
var r=Bn(),n=zr(),a=Rn()
t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,o={}
try{(e=r(Object.prototype,"__proto__","set"))(o,[]),t=o instanceof Array}catch(e){}return function(r,o){return n(r),a(o),t?e(r,o):r.__proto__=o,r}}():void 0)})),Sn=se((function(e,t){"use strict"
var r=Ur(),n=or(),a=xr(),o=yn(),i=nr(),u=Tn(),s=Xr(),l=_n(),c=kn(),d=Hr(),p=Cn(),f=_r(),h=Nn(),m=xn(),D=o.PROPER,g=o.CONFIGURABLE,v=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,y=f("iterator"),F="keys",w="values",E="entries",C=function(){return this}
t.exports=function(e,t,o,f,m,x,A){u(o,t,f)
var k,N,T,B=function(e){if(e===m&&M)return M
if(!b&&e&&e in S)return S[e]
switch(e){case F:case w:case E:return function(){return new o(this,e)}}return function(){return new o(this)}},R=t+" Iterator",_=!1,S=e.prototype,O=S[y]||S["@@iterator"]||m&&S[m],M=!b&&O||B(m),I="Array"===t&&S.entries||O
if(I&&(k=s(I.call(new e)))!==Object.prototype&&k.next&&(a||s(k)===v||(l?l(k,v):i(k[y])||p(k,y,C)),c(k,R,!0,!0),a&&(h[R]=C)),D&&m===w&&O&&O.name!==w&&(!a&&g?d(S,"name",w):(_=!0,M=function(){return n(O,this)})),m)if(N={values:B(w),keys:x?M:B(F),entries:B(E)},A)for(T in N)(b||_||!(T in S))&&p(S,T,N[T])
else r({target:t,proto:!0,forced:b||_},N)
return a&&!A||S[y]===M||p(S,y,M,{name:m}),h[t]=M,N}})),On=se((function(e,t){"use strict"
t.exports=function(e,t){return{value:e,done:t}}})),Mn=se((function(){"use strict"
var e=gn().charAt,t=Dn(),r=bn(),n=Sn(),a=On(),o="String Iterator",i=r.set,u=r.getterFor(o)
n(String,"String",(function(e){i(this,{type:o,string:t(e),index:0})}),(function(){var t,r=u(this),n=r.string,o=r.index
return o>=n.length?a(void 0,!0):(t=e(n,o),r.index+=t.length,a(t,!1))}))})),In=se((function(e,t){"use strict"
var r=or(),n=zr(),a=Er()
t.exports=function(e,t,o){var i,u
n(e)
try{if(!(i=a(e,"return"))){if("throw"===t)throw o
return o}i=r(i,e)}catch(e){u=!0,i=e}if("throw"===t)throw o
if(u)throw i
return n(i),o}})),Pn=se((function(e,t){"use strict"
var r=zr(),n=In()
t.exports=function(e,t,a,o){try{return o?t(r(a)[0],a[1]):t(a)}catch(t){n(e,"throw",t)}}})),jn=se((function(e,t){"use strict"
var r=_r(),n=Nn(),a=r("iterator"),o=Array.prototype
t.exports=function(e){return void 0!==e&&(n.Array===e||o[a]===e)}})),qn=se((function(e,t){"use strict"
var r=Jt(),n=nr(),a=kr(),o=r(Function.toString)
n(a.inspectSource)||(a.inspectSource=function(e){return o(e)}),t.exports=a.inspectSource})),Ln=se((function(e,t){"use strict"
var r=Jt(),n=Kt(),a=nr(),o=mn(),i=hr(),u=qn(),s=function(){},l=[],c=i("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=r(d.exec),f=!d.test(s),h=function(e){if(!a(e))return!1
try{return c(s,l,e),!0}catch(e){return!1}},m=function(e){if(!a(e))return!1
switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return f||!!p(d,u(e))}catch(e){return!0}}
m.sham=!0,t.exports=!c||n((function(){var e
return h(h.call)||!h(Object)||!h((function(){e=!0}))||e}))?m:h})),zn=se((function(e,t){"use strict"
var r=Or(),n=Vr(),a=ur()
t.exports=function(e,t,o){var i=r(t)
i in e?n.f(e,i,a(0,o)):e[i]=o}})),Vn=se((function(e,t){"use strict"
var r=mn(),n=Er(),a=lr(),o=Nn(),i=_r()("iterator")
t.exports=function(e){if(!a(e))return n(e,i)||n(e,"@@iterator")||o[r(e)]}})),Hn=se((function(e,t){"use strict"
var r=or(),n=wr(),a=zr(),o=Fr(),i=Vn(),u=TypeError
t.exports=function(e,t){var s=arguments.length<2?i(e):t
if(n(s))return a(r(s,e))
throw new u(o(e)+" is not iterable")}})),Un=se((function(e,t){"use strict"
var r=qr(),n=or(),a=Tr(),o=Pn(),i=jn(),u=Ln(),s=rn(),l=zn(),c=Hn(),d=Vn(),p=Array
t.exports=function(e){var t=a(e),f=u(this),h=arguments.length,m=h>1?arguments[1]:void 0,D=void 0!==m
D&&(m=r(m,h>2?arguments[2]:void 0))
var g,v,b,y,F,w,E=d(t),C=0
if(!E||this===p&&i(E))for(g=s(t),v=f?new this(g):p(g);g>C;C++)w=D?m(t[C],C):t[C],l(v,C,w)
else for(F=(y=c(t,E)).next,v=f?new this:[];!(b=n(F,y)).done;C++)w=D?o(y,m,[b.value,C],!0):b.value,l(v,C,w)
return v.length=C,v}})),$n=se((function(e,t){"use strict"
var r,n,a=_r()("iterator"),o=!1
try{r=0,(n={next:function(){return{done:!!r++}},return:function(){o=!0}})[a]=function(){return this},Array.from(n,(function(){throw 2}))}catch(e){}t.exports=function(e,t){try{if(!t&&!o)return!1}catch(e){return!1}var r=!1
try{var n={}
n[a]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r}})),Gn=se((function(){"use strict"
var e=Ur(),t=Un()
e({target:"Array",stat:!0,forced:!$n()((function(e){Array.from(e)}))},{from:t})})),Wn=se((function(e,t){"use strict"
Mn(),Gn()
var r=fr()
t.exports=r.Array.from})),Yn=se((function(e,t){"use strict"
var r=Wn()
t.exports=r})),Qn=se((function(e,t){"use strict"
var r=Yn()
t.exports=r})),Kn=se((function(e,t){!function(){"use strict"
var e={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":o(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){r.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==r)return r
if(void 0!==n)return n
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),e.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},r=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(r,(function(e){return t[e]||e})):""}},void 0!==t&&t.exports?t.exports=e:"function"==typeof define&&define.amd?define((function(){return e})):globalThis.doT=e
var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},i=/$^/
function u(e,t,r){return("string"==typeof t?t:t.toString()).replace(e.define||i,(function(t,n,a,o){return 0===n.indexOf("def.")&&(n=n.substring(4)),n in r||(":"===a?(e.defineParams&&o.replace(e.defineParams,(function(e,t,a){r[n]={arg:t,text:a}})),n in r||(r[n]=o)):new Function("def","def['"+n+"']="+o)(r)),""})).replace(e.use||i,(function(t,n){e.useParams&&(n=n.replace(e.useParams,(function(e,t,n,a){if(r[n]&&r[n].arg&&a){var o=(n+":"+a).replace(/'|\\/g,"_")
return r.__exp=r.__exp||{},r.__exp[o]=r[n].text.replace(new RegExp("(^|[^\\w$])"+r[n].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}})))
var a=new Function("def","return "+n)(r)
return a?u(e,a,r):a}))}function s(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}e.template=function(t,r,n){var o,l,c=(r=r||e.templateSettings).append?a.append:a.split,d=0,p=r.use||r.define?u(r,t,n||{}):t
p=("var out='"+(r.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(r.interpolate||i,(function(e,t){return c.start+s(t)+c.end})).replace(r.encode||i,(function(e,t){return o=!0,c.startencode+s(t)+c.end})).replace(r.conditional||i,(function(e,t,r){return t?r?"';}else if("+s(r)+"){out+='":"';}else{out+='":r?"';if("+s(r)+"){out+='":"';}out+='"})).replace(r.iterate||i,(function(e,t,r,n){return t?(d+=1,l=n||"i"+d,t=s(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+r+","+l+"=-1,l"+d+"=arr"+d+".length-1;while("+l+"<l"+d+"){"+r+"=arr"+d+"["+l+"+=1];out+='"):"';} } out+='"})).replace(r.evaluate||i,(function(e,t){return"';"+s(t)+"out+='"}))+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),o&&(r.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=e.encodeHTMLSource(r.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+e.encodeHTMLSource.toString()+"("+(r.doNotSkipEncoded||"")+"));"+p)
try{return new Function(r.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,r){return e.template(t,null,r)}}()})),Xn={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach((function(e){var t=e.name,r=e.value,n=e.priority,a=e.group
Xn[t]=r,Xn[t+"_PRIO"]=n,Xn[t+"_GROUP"]=a,Xn.results[n]=r,Xn.resultGroups[n]=a,Xn.resultGroupMap[r]=a})),Object.freeze(Xn.results),Object.freeze(Xn.resultGroups),Object.freeze(Xn.resultGroupMap),Object.freeze(Xn)
var Zn=Xn,Jn=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},ea=/[\t\r\n\f]/g,ta=W((function e(){$(this,e),this.parent=void 0}),[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var r=" "+e+" "
return(" "+t+" ").replace(ea," ").indexOf(r)>=0}}]),ra={}
le(ra,{DqElement:function(){return Ja},aggregate:function(){return na},aggregateChecks:function(){return la},aggregateNodeResults:function(){return da},aggregateResult:function(){return fa},areStylesSet:function(){return ha},assert:function(){return ma},checkHelper:function(){return eo},clone:function(){return to},closest:function(){return vo},collectResultsFromFrames:function(){return fi},contains:function(){return hi},convertSelector:function(){return mo},cssParser:function(){return ao},deepMerge:function(){return mi},escapeSelector:function(){return ga},extendMetaData:function(){return Di},filterHtmlAttrs:function(){return lm},finalizeRuleResult:function(){return ca},findBy:function(){return ci},getAllChecks:function(){return li},getAncestry:function(){return Ua},getBaseLang:function(){return Qf},getCheckMessage:function(){return ah},getCheckOption:function(){return oh},getEnvironmentData:function(){return ih},getFlattenedTree:function(){return Gf},getFrameContexts:function(){return Ch},getFriendlyUriEnd:function(){return Fa},getNodeAttributes:function(){return wa},getNodeFromTree:function(){return Ka},getPreloadConfig:function(){return nm},getRootNode:function(){return yi},getRule:function(){return xh},getScroll:function(){return kh},getScrollState:function(){return Th},getSelector:function(){return Va},getSelectorData:function(){return Ia},getShadowSelector:function(){return ka},getStandards:function(){return Bh},getStyleSheetFactory:function(){return _h},getXpath:function(){return Ga},injectStyle:function(){return Sh},isHidden:function(){return Oh},isHtmlElement:function(){return Mh},isNodeInContext:function(){return Ih},isShadowRoot:function(){return vi},isValidLang:function(){return Fm},isXHTML:function(){return Aa},matchAncestry:function(){return jh},matches:function(){return oo},matchesExpression:function(){return go},matchesSelector:function(){return Ea},memoize:function(){return xa},mergeResults:function(){return pi},nodeLookup:function(){return Lh},nodeSerializer:function(){return si},nodeSorter:function(){return qh},parseCrossOriginStylesheet:function(){return Hh},parseSameOriginStylesheet:function(){return zh},parseStylesheet:function(){return Vh},performanceTimer:function(){return $h},pollyfillElementsFromPoint:function(){return Gh},preload:function(){return tm},preloadCssom:function(){return Kh},preloadMedia:function(){return em},processMessage:function(){return nh},publishMetaData:function(){return am},querySelectorAll:function(){return im},querySelectorAllFilter:function(){return Qh},queue:function(){return xo},respondable:function(){return ti},ruleShouldRun:function(){return sm},select:function(){return dm},sendCommandToFrame:function(){return ni},setScrollState:function(){return fm},shadowSelect:function(){return hm},shadowSelectAll:function(){return Dm},shouldPreload:function(){return rm},toArray:function(){return Da},tokenList:function(){return qf},uniqueArray:function(){return Wh},uuid:function(){return qo},validInputTypes:function(){return vm},validLangs:function(){return ym}})
var na=function(e,t,r){t=t.slice(),r&&t.push(r)
var n=t.map((function(t){return e.indexOf(t)})).sort()
return e[n.pop()]},aa=Zn.CANTTELL_PRIO,oa=Zn.FAIL_PRIO,ia=[]
ia[Zn.PASS_PRIO]=!0,ia[Zn.CANTTELL_PRIO]=null,ia[Zn.FAIL_PRIO]=!1
var ua=["any","all","none"]
function sa(e,t){return ua.reduce((function(r,n){return r[n]=(e[n]||[]).map((function(e){return t(e,n)})),r}),{})}var la=function(e){var t=Object.assign({},e)
sa(t,(function(e,t){var r=void 0===e.result?-1:ia.indexOf(e.result)
e.priority=-1!==r?r:Zn.CANTTELL_PRIO,"none"===t&&(e.priority===Zn.PASS_PRIO?e.priority=Zn.FAIL_PRIO:e.priority===Zn.FAIL_PRIO&&(e.priority=Zn.PASS_PRIO))}))
var r={all:t.all.reduce((function(e,t){return Math.max(e,t.priority)}),0),none:t.none.reduce((function(e,t){return Math.max(e,t.priority)}),0),any:t.any.reduce((function(e,t){return Math.min(e,t.priority)}),4)%4}
t.priority=Math.max(r.all,r.none,r.any)
var n=[]
return ua.forEach((function(e){t[e]=t[e].filter((function(n){return n.priority===t.priority&&n.priority===r[e]})),t[e].forEach((function(e){return n.push(e.impact)}))})),[aa,oa].includes(t.priority)?t.impact=na(Zn.impact,n):t.impact=null,sa(t,(function(e){delete e.result,delete e.priority})),t.result=Zn.results[t.priority],delete t.priority,t}
function ca(e){var t=i._audit.rules.find((function(t){return t.id===e.id}))
return t&&t.impact&&e.nodes.forEach((function(e){["any","all","none"].forEach((function(r){(e[r]||[]).forEach((function(e){e.impact=t.impact}))}))})),Object.assign(e,da(e.nodes)),delete e.nodes,e}var da=function(e){var t={}
if((e=e.map((function(e){if(e.any&&e.all&&e.none)return la(e)
if(Array.isArray(e.node))return ca(e)
throw new TypeError("Invalid Result type")})))&&e.length){var r=e.map((function(e){return e.result}))
t.result=na(Zn.results,r,t.result)}else t.result="inapplicable"
Zn.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){var r=Zn.resultGroupMap[e.result]
t[r].push(e)}))
var n=Zn.FAIL_GROUP
if(0===t[n].length&&(n=Zn.CANTTELL_GROUP),t[n].length>0){var a=t[n].map((function(e){return e.impact}))
t.impact=na(Zn.impact,a)||null}else t.impact=null
return t}
function pa(e,t,r){var n=Object.assign({},t)
n.nodes=(n[r]||[]).concat(),Zn.resultGroups.forEach((function(e){delete n[e]})),e[r].push(n)}var fa=function(e){var t={}
return Zn.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){e.error?pa(t,e,Zn.CANTTELL_GROUP):e.result===Zn.NA?pa(t,e,Zn.NA_GROUP):Zn.resultGroups.forEach((function(r){Array.isArray(e[r])&&e[r].length>0&&pa(t,e,r)}))})),t},ha=function e(t,n,a){var o=r.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<n.length;++i){var u=n[i]
if(o.getPropertyValue(u.property)===u.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,n,a)},ma=function(e,t){if(!e)throw new Error(t)},Da=function(e){return Array.prototype.slice.call(e)},ga=function(e){for(var t,r=String(e),n=r.length,a=-1,o="",i=r.charCodeAt(0);++a<n;)0!=(t=r.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==n&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+r.charAt(a):r.charAt(a):o+="�"
return o}
function va(e,t){return[e.substring(0,t),e.substring(t)]}function ba(e){return e.replace(/\s+$/,"")}var ya,Fa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var r=t.currentDomain,n=t.maxLength,a=void 0===n?25:n,o=function(e){var t=e,r="",n="",a="",o="",i=""
if(e.includes("#")){var u=V(va(e,e.indexOf("#")),2)
e=u[0],i=u[1]}if(e.includes("?")){var s=V(va(e,e.indexOf("?")),2)
e=s[0],o=s[1]}if(e.includes("://")){var l=V(e.split("://"),2)
r=l[0]
var c=V(va(e=l[1],e.indexOf("/")),2)
n=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=V(va(e=e.substr(2),e.indexOf("/")),2)
n=d[0],e=d[1]}if("www."===n.substr(0,4)&&(n=n.substr(4)),n&&n.includes(":")){var p=V(va(n,n.indexOf(":")),2)
n=p[0],a=p[1]}return{original:t,protocol:r,domain:n,port:a,path:e,query:o,hash:i}}(e),i=o.path,u=o.domain,s=o.hash,l=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(s)return l&&(l+s).length<=a?ba(l+s):l.length<2&&s.length>2&&s.length<=a?ba(s):void 0
if(u&&u.length<a&&i.length<=1)return ba(u+i)
if(i==="/"+l&&u&&r&&u!==r&&(u+i).length<=a)return ba(u+i)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}(l)?ba(l):void 0}},wa=function(e){return e.attributes instanceof r.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},Ea=function(e,t){return ya&&e[ya]||(ya=function(e){var t,r,n=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=n.length
for(t=0;t<a;t++)if(e[r=n[t]])return r}(e)),!!e[ya]&&e[ya](t)},Ca=ce(zt())
i._memoizedFns=[]
var xa=function(e){var t=(0,Ca.default)(e)
return i._memoizedFns.push(t),t},Aa=xa((function(e){return!(null==e||!e.createElement)&&"A"===e.createElement("A").localName}))
function ka(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var n=t.getRootNode&&t.getRootNode()||a
if(11!==n.nodeType)return e(t,r,n)
for(var o=[];11===n.nodeType;){if(!n.host)return""
o.unshift({elm:t,doc:n}),n=(t=n.host).getRootNode()}return o.unshift({elm:t,doc:n}),o.map((function(t){return e(t.elm,r,t.doc)}))}var Na=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow","xmlns"],Ta=31,Ba=/([\\"])/g,Ra=/(\r\n|\r|\n)/g
function _a(e){return e.replace(Ba,"\\$1").replace(Ra,"\\a ")}function Sa(e,t){var r,n=t.name
if(-1!==n.indexOf("href")||-1!==n.indexOf("src")){var a=Fa(e.getAttribute(n))
r=a?ga(t.name)+'$="'+_a(a)+'"':ga(t.name)+'="'+_a(e.getAttribute(n))+'"'}else r=ga(n)+'="'+_a(t.value)+'"'
return r}function Oa(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Ma(e){return!Na.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<Ta)}function Ia(e){for(var t={classes:{},tags:{},attributes:{}},r=(e=Array.isArray(e)?e:[e]).slice(),n=[],a=function(){var e=r.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach((function(e){var r=ga(e)
t.classes[r]?t.classes[r]++:t.classes[r]=1})),a.hasAttributes()&&Array.from(wa(a)).filter(Ma).forEach((function(e){var r=Sa(a,e)
r&&(t.attributes[r]?t.attributes[r]++:t.attributes[r]=1)}))}for(e.children.length&&(n.push(r),r=e.children.slice());!r.length&&n.length;)r=n.pop()};r.length;)a()
return t}function Pa(e,t){var r=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return r.find((function(r){return r!==e&&Ea(r,t)}))?":nth-child("+(1+r.indexOf(e))+")":""}function ja(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,r="#"+ga(e.getAttribute("id")||"")
return r.match(/player_uid_/)||1!==t.querySelectorAll(r).length?void 0:r}}function qa(e){var t=Aa(a)
return ga(t?e.localName:e.nodeName.toLowerCase())}function La(e,t){var r,n="",a=function(e,t){var r=[],n=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach((function(t){var o=ga(t)
n[o]<a[e.nodeName]&&r.push({name:o,count:n[o],species:"class"})})),r.sort(Oa)}(e,t),o=function(e,t){var r=[],n=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(wa(e)).filter(Ma).forEach((function(t){var o=Sa(e,t)
o&&n[o]<a[e.nodeName]&&r.push({name:o,count:n[o],species:"attribute"})})),r.sort(Oa)}(e,t)
return a.length&&1===a[0].count?r=[a[0]]:o.length&&1===o[0].count?(r=[o[0]],n=qa(e)):((r=a.concat(o)).sort(Oa),(r=r.slice(0,3)).some((function(e){return"class"===e.species}))?r.sort((function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1})):n=qa(e)),n+r.reduce((function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e}),"")}function za(e,t,r){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var n,a,o=t.toRoot,u=void 0!==o&&o
do{var s=ja(e)
s||(s=La(e,i._selectorData),s+=Pa(e,s)),n=n?s+" > "+n:s,a=a?a.filter((function(e){return Ea(e,n)})):Array.from(r.querySelectorAll(n)),e=e.parentElement}while((a.length>1||u)&&e&&11!==e.nodeType)
return 1===a.length?n:-1!==n.indexOf(" > ")?":root"+n.substring(n.indexOf(" > ")):":root"}function Va(e,t){return ka(za,e,t)}function Ha(e){var t=e.nodeName.toLowerCase(),r=e.parentElement
if(!r)return t
var n=""
if("head"!==t&&"body"!==t&&r.children.length>1){var a=Array.prototype.indexOf.call(r.children,e)+1
n=":nth-child(".concat(a,")")}return Ha(r)+" > "+t+n}function Ua(e,t){return ka(Ha,e,t)}function $a(e,t){var r,n
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=$a(e.parentNode,t)),e.previousSibling){n=1,r=e.previousSibling
do{1===r.nodeType&&r.nodeName===e.nodeName&&n++,r=r.previousSibling}while(r)
1===n&&(n=null)}else if(e.nextSibling){r=e.nextSibling
do{1===r.nodeType&&r.nodeName===e.nodeName?(n=1,r=null):(n=null,r=r.previousSibling)}while(r)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&ga(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),n>1&&(a.count=n),t.push(a)}return t}var Ga=function(e){return $a(e).reduce((function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")}),"")},Wa={},Ya={set:function(e,t){!function(e){ma("string"==typeof e,"key must be a string, "+o(e)+" given"),ma(""!==e,"key must not be empty")}(e),Wa[e]=t},get:function(e,t){if(function(e){ma("function"==typeof e||void 0===e,"creator must be a function or undefined, "+o(e)+" given")}(t),e in Wa)return Wa[e]
if("function"==typeof t){var r=t()
return ma(void 0!==r,"Cache creator function should not return undefined"),this.set(e,r),Wa[e]}},clear:function(){Wa={}}},Qa=Ya,Ka=function(e,t){var r=t||e
return Qa.get("nodeMap")?Qa.get("nodeMap").get(r):null},Xa="DqElm.RunOptions"
function Za(e){var t,n,a,o,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
u||(u=null!==(a=Qa.get(Xa))&&void 0!==a?a:{}),this.spec=s,e instanceof ta?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=Ka(e)),this.fromFrame=(null===(t=this.spec.selector)||void 0===t?void 0:t.length)>1,this._includeElementInJson=u.elementRef,u.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(n=this._virtualNode)||void 0===n?void 0:n.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(o=this.spec.source)&&void 0!==o?o:function(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof r.XMLSerializer||(t=(new r.XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var r=e.indexOf(">")
e=e.substring(0,r+1)}return e}(t||"")}(this._element))}Za.prototype={get selector(){return this.spec.selector||[Va(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[Ua(this.element)]},get xpath(){return this.spec.xpath||[Ga(this.element)]},get element(){return this._element},toJSON:function(){var e={selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes,fromFrame:this.fromFrame}
return this._includeElementInJson&&(e.element=this._element),e}},Za.fromFrame=function(e,t,r){var n=Za.mergeSpecs(e,r)
return new Za(r.element,t,n)},Za.mergeSpecs=function(e,t){return z({},e,{selector:[].concat(q(t.selector),q(e.selector)),ancestry:[].concat(q(t.ancestry),q(e.ancestry)),xpath:[].concat(q(t.xpath),q(e.xpath)),nodeIndexes:[].concat(q(t.nodeIndexes),q(e.nodeIndexes)),fromFrame:!0})},Za.setRunOptions=function(e){var t=e.elementRef,r=e.absolutePaths
Qa.set(Xa,{elementRef:t,absolutePaths:r})}
var Ja=Za,eo=function(e,t,n,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,n(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(t){r.Node&&(t=t instanceof r.Node||t instanceof ta?[t]:Da(t),e.relatedNodes=[],t.forEach((function(t){if(t instanceof ta&&(t=t.actualNode),t instanceof r.Node){var n=new Ja(t)
e.relatedNodes.push(n)}})))}}}
function to(e){return ro(e,new Map)}function ro(e,t){var n,a
if(null===e||"object"!==o(e))return e
if(null!==(n=r)&&void 0!==n&&n.Node&&e instanceof r.Node||null!==(a=r)&&void 0!==a&&a.HTMLCollection&&e instanceof r.HTMLCollection||"nodeName"in e&&"nodeType"in e&&"ownerDocument"in e)return e
if(t.has(e))return t.get(e)
if(Array.isArray(e)){var i=[]
return t.set(e,i),e.forEach((function(e){i.push(ro(e,t))})),i}var u={}
for(var s in t.set(e,u),e)u[s]=ro(e[s],t)
return u}var no=new(ce($t()).CssSelectorParser)
no.registerSelectorPseudos("not"),no.registerSelectorPseudos("is"),no.registerNestingOperators(">"),no.registerAttrEqualityMods("^","$","*","~")
var ao=no
function oo(e,t){return mo(t).some((function(t){return go(e,t)}))}function io(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every((function(t){return e.hasClass(t.value)}))}(e,t)&&function(e,t){return!t.attributes||t.attributes.every((function(t){var r=e.attr(t.key)
return null!==r&&t.test(r)}))}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(r=e,!((n=t).pseudos&&!n.pseudos.every((function(e){if("not"===e.name)return!e.expressions.some((function(e){return go(r,e)}))
if("is"===e.name)return e.expressions.some((function(e){return go(r,e)}))
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")}))))
var r,n}var uo,so=(uo=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(uo,"\\")}),lo=/\\/g
function co(e){if(e)return e.map((function(e){var t,r,n=e.name.replace(lo,""),a=(e.value||"").replace(lo,"")
switch(e.operator){case"^=":r=new RegExp("^"+so(a))
break
case"$=":r=new RegExp(so(a)+"$")
break
case"~=":r=new RegExp("(^|\\s)"+so(a)+"(\\s|$)")
break
case"|=":r=new RegExp("^"+so(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&r.test(e)}),{key:n,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}}))}function po(e){if(e)return e.map((function(e){return{value:e=e.replace(lo,""),regexp:new RegExp("(^|\\s)"+so(e)+"(\\s|$)")}}))}function fo(e){if(e)return e.map((function(e){var t
return["is","not"].includes(e.name)&&(t=ho(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}}))}function ho(e){return e.map((function(e){for(var t=[],r=e.rule;r;)t.push({tag:r.tagName?r.tagName.toLowerCase():"*",combinator:r.nestingOperator?r.nestingOperator:" ",id:r.id,attributes:co(r.attrs),classes:po(r.classNames),pseudos:fo(r.pseudos)}),r=r.rule
return t}))}function mo(e){var t=ao.parse(e)
return ho(t=t.selectors?t.selectors:[t])}function Do(e,t,r,n){if(!e)return!1
for(var a=Array.isArray(t)?t[r]:t,o=io(e,a);!o&&n&&e.parent;)o=io(e=e.parent,a)
if(r>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&Do(e.parent,t,r-1," "===a.combinator)}return o}function go(e,t,r){return Do(e,t,t.length-1,r)}var vo=function(e,t){for(;e;){if(oo(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function bo(){}function yo(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Fo,wo,Eo,Co,xo=function(){var e,t=[],r=0,n=0,a=bo,i=!1,u=function(t){e=t,setTimeout((function(){null!=e&&Jn("Uncaught error (of queue)",e)}),1)},s=u
function l(e){return function(r){t[e]=r,(n-=1)||a===bo||(i=!0,a(t))}}function c(e){return a=bo,s(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var u=a
a=function(e,t){u.then(e).catch(t)}}if(yo(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++n,function(){for(var e=t.length;r<e;r++){var n=t[r]
try{n.call(null,l(r),c)}catch(e){c(e)}}}(),d}},then:function(r){if(yo(r),a!==bo)throw new Error("queue `then` already set")
return e||(a=r,n||(i=!0,a(t))),d},catch:function(t){if(yo(t),s!==u)throw new Error("queue `catch` already set")
return e?(t(e),e=null):s=t,d},abort:c}
return d},Ao=r.crypto||r.msCrypto
!wo&&Ao&&Ao.getRandomValues&&(Eo=new Uint8Array(16),wo=function(){return Ao.getRandomValues(Eo),Eo}),wo||(Co=new Array(16),wo=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),Co[t]=e>>>((3&t)<<3)&255
return Co})
for(var ko="function"==typeof r.Buffer?r.Buffer:Array,No=[],To={},Bo=0;Bo<256;Bo++)No[Bo]=(Bo+256).toString(16).substr(1),To[No[Bo]]=Bo
function Ro(e,t){var r=t||0,n=No
return n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]}var _o=wo(),So=[1|_o[0],_o[1],_o[2],_o[3],_o[4],_o[5]],Oo=16383&(_o[6]<<8|_o[7]),Mo=0,Io=0
function Po(e,t,r){var n=t&&r||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Oo,i=null!=e.msecs?e.msecs:(new Date).getTime(),u=null!=e.nsecs?e.nsecs:Io+1,s=i-Mo+(u-Io)/1e4
if(s<0&&null==e.clockseq&&(o=o+1&16383),(s<0||i>Mo)&&null==e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
Mo=i,Io=u,Oo=o
var l=(1e4*(268435455&(i+=122192928e5))+u)%4294967296
a[n++]=l>>>24&255,a[n++]=l>>>16&255,a[n++]=l>>>8&255,a[n++]=255&l
var c=i/4294967296*1e4&268435455
a[n++]=c>>>8&255,a[n++]=255&c,a[n++]=c>>>24&15|16,a[n++]=c>>>16&255,a[n++]=o>>>8|128,a[n++]=255&o
for(var d=e.node||So,p=0;p<6;p++)a[n+p]=d[p]
return t||Ro(a)}function jo(e,t,r){var n=t&&r||0
"string"==typeof e&&(t="binary"==e?new ko(16):null,e=null)
var a=(e=e||{}).random||(e.rng||wo)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[n+o]=a[o]
return t||Ro(a)}(Fo=jo).v1=Po,Fo.v4=jo,Fo.parse=function(e,t,r){var n=t&&r||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[n+a++]=To[e])}));a<16;)t[n+a++]=0
return t},Fo.unparse=Ro,Fo.BufferClass=ko,i._uuid=Po()
var qo=jo,Lo=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function zo(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}function Vo(e){Uo(e),ma(r.parent===e,"Source of the response must be the parent window.")}function Ho(e){Uo(e),ma(e.parent===r,"Respondable target must be a frame in the current window")}function Uo(e){ma(r!==e,"Messages can not be sent to the same window.")}var $o={},Go=[]
function Wo(){var e="".concat(jo(),":").concat(jo())
return Go.includes(e)?Wo():(Go.push(e),e)}function Yo(e,t,r,n){if(r?Vo(e):Ho(e),t.message instanceof Error&&!r)return i.log(t.message),!1
var a=function(e){var t=e.topic,r=e.channelId,n=e.message,a={channelId:r,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:zo()}
return n instanceof Error?a.error={name:n.name,message:n.message,stack:n.stack}:a.payload=n,JSON.stringify(a)}(z({messageId:Wo()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||("function"==typeof n&&function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
ma(!$o[e],"A replyHandler already exists for this message channel."),$o[e]={replyHandler:t,sendToParent:r}}(t.channelId,n,r),o.forEach((function(t){try{e.postMessage(a,t)}catch(r){if(r instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw r}})),0))}function Qo(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(n,a,o){Yo(e,{channelId:t,message:n,keepalive:a},r,o)}}var Ko,Xo,Zo={open:function(e){if("function"==typeof r.addEventListener){var t=function(t){(function(e,t){var n,a=e.origin,u=e.data,s=e.source
try{var l=function(e){var t,n,a,i,u
try{t=JSON.parse(e)}catch(e){return}if(null!==(s=t)&&"object"===o(s)&&"string"==typeof s.channelId&&s.source===zo()){var s,l=t,c=l.topic,d=l.channelId,p=l.messageId,f=l.keepalive
return{topic:c,message:"object"===o(t.error)?(n=t.error,a=n.message||"Unknown error occurred",i=Lo.includes(n.name)?n.name:"Error",u=r[i]||Error,n.stack&&(a+="\n"+n.stack.replace(n.message,"")),new u(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(u)||{},c=l.channelId,d=l.message,p=l.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(n=p,Go.includes(n)||(Go.push(n),0)))return
if(d instanceof Error&&s.parent!==r)return i.log(d),!1
try{if(l.topic){var f=Qo(s,c)
Vo(s),t(l,f)}else!function(e,t){var r=t.channelId,n=t.message,a=t.keepalive,o=function(e){return $o[e]}(r)||{},u=o.replyHandler,s=o.sendToParent
if(u){s?Vo(e):Ho(e)
var l=Qo(e,r,s)
!a&&r&&function(e){delete $o[e]}(r)
try{u(n,a,l)}catch(e){i.log(e),l(e,a)}}}(s,l)}catch(e){!function(e,t,n){if(!e.parent!==r)return i.log(t)
try{Yo(e,{topic:null,channelId:n,message:t,messageId:Wo(),keepalive:!0},!0)}catch(e){return i.log(e)}}(s,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return r.addEventListener("message",t,!1),function(){r.removeEventListener("message",t,!1)}}},post:function(e,t,n){return"function"==typeof r.addEventListener&&Yo(e,t,!1,n)}}
function Jo(e){e.updateMessenger(Zo)}var ei={}
function ti(e,t,r,n,a){var o={topic:t,message:r,channelId:"".concat(jo(),":").concat(jo()),keepalive:n}
return Xo(e,o,a)}function ri(e,t){var r=e.topic,n=e.message,a=e.keepalive,o=ei[r]
if(o)try{o(n,a,t)}catch(e){i.log(e),t(e,a)}}function ni(e,t,r,n){var a,o,i=e.contentWindow,u=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return Jn("Frame does not have a content window",e),void r(null)
if(0!==u){var s=setTimeout((function(){s=setTimeout((function(){t.debug?n(oi("No response from frame",e)):r(null)}),0)}),u)
ti(i,"axe.ping",null,void 0,(function(){clearTimeout(s),ai(e,t,r,n)}))}else ai(e,t,r,n)}function ai(e,t,r,n){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,u=e.contentWindow,s=setTimeout((function(){n(oi("Axe in frame timed out",e))}),i)
ti(u,"axe.start",t,void 0,(function(e){clearTimeout(s),e instanceof Error==0?r(e):n(e)}))}function oi(e,t){var r
return i._tree&&(r=Va(t)),new Error(e+": "+(r||t))}ti.updateMessenger=function(e){var t=e.open,r=e.post
ma("function"==typeof t,"open callback must be a function"),ma("function"==typeof r,"post callback must be a function"),Ko&&Ko()
var n=t(ri)
n?(ma("function"==typeof n,"open callback must return a cleanup function"),Ko=n):Ko=null,Xo=r},ti.subscribe=function(e,t){ma("function"==typeof t,"Subscriber callback must be a function"),ma(!ei[e],"Topic ".concat(e," is already registered to.")),ei[e]=t},ti.isInFrame=function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:r).frameElement},Jo(ti)
var ii=null,ui={update:function(e){ma("object"===o(e),"serializer must be an object"),ii=e},toSpec:function(e){return ui.dqElmToSpec(new Ja(e))},dqElmToSpec:function(e,t){var r
return e instanceof Ja==0?e:(t&&(e=function(e,t){var r=e.fromFrame,n=t.ancestry,a=t.xpath,o=!1!==t.selectors||r
return(e=new Ja(e.element,t,{source:e.source,nodeIndexes:e.nodeIndexes,selector:o?e.selector:[":root"],ancestry:n?e.ancestry:[":root"],xpath:a?e.xpath:"/"})).fromFrame=r,e}(e,t)),"function"==typeof(null===(r=ii)||void 0===r?void 0:r.toSpec)?ii.toSpec(e):e.toJSON())},mergeSpecs:function(e,t){var r
return"function"==typeof(null===(r=ii)||void 0===r?void 0:r.mergeSpecs)?ii.mergeSpecs(e,t):Ja.mergeSpecs(e,t)},mapRawResults:function(e){return e.map((function(e){return z({},e,{nodes:ui.mapRawNodeResults(e.nodes)})}))},mapRawNodeResults:function(e){return null==e?void 0:e.map((function(e){var t=e.node,r=j(e,s)
r.node=ui.dqElmToSpec(t)
for(var n=0,a=["any","all","none"];n<a.length;n++){var o=a[n]
r[o]=r[o].map((function(e){var t=e.relatedNodes,r=j(e,l)
return r.relatedNodes=t.map(ui.dqElmToSpec),r}))}return r}))}},si=ui,li=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},ci=function(e,t,r){if(Array.isArray(e))return e.find((function(e){return null!==e&&"object"===o(e)&&Object.hasOwn(e,t)&&e[t]===r}))}
function di(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),n=0;n<r;n++){var a=null==e?void 0:e[n],o=null==t?void 0:t[n]
if("number"!=typeof a||isNaN(a))return 0===n?1:-1
if("number"!=typeof o||isNaN(o))return 0===n?-1:1
if(a!==o)return a-o}return 0}var pi=function(e,t){var r=[]
return e.forEach((function(e){var t,n=(t=e)&&t.results?Array.isArray(t.results)?t.results.length?t.results:null:[t.results]:null
if(n&&n.length){var a=function(e){return e.frameElement?si.toSpec(e.frameElement):e.frameSpec?e.frameSpec:null}(e)
n.forEach((function(e){e.nodes&&a&&function(e,t,r){e.forEach((function(e){e.node=si.mergeSpecs(e.node,r),li(e).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return si.mergeSpecs(e,r)}))}))}))}(e.nodes,0,a)
var t=ci(r,"id",e.id)
t?e.nodes.length&&function(e,t){for(var r=t[0].node,n=0;n<e.length;n++){var a=e[n].node,o=di(a.nodeIndexes,r.nodeIndexes)
if(o>0||0===o&&r.selector.length<a.selector.length)return void e.splice.apply(e,[n,0].concat(q(t)))}e.push.apply(e,q(t))}(t.nodes,e.nodes):r.push(e)}))}})),r.forEach((function(e){e.nodes&&e.nodes.sort((function(e,t){return di(e.node.nodeIndexes,t.node.nodeIndexes)}))})),r}
function fi(e,t,r,n,a,o){t=z({},t,{elementRef:!1})
var i=xo()
e.frames.forEach((function(e){var a=e.node,o=j(e,c)
i.defer((function(e,i){ni(a,{options:t,command:r,parameter:n,context:o},(function(t){return e(t?{results:t,frameElement:a}:null)}),i)}))})),i.then((function(e){a(pi(e,t))})).catch(o)}function hi(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var mi=function e(){for(var t={},r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return n.forEach((function(r){if(r&&"object"===o(r)&&!Array.isArray(r))for(var n=0,a=Object.keys(r);n<a.length;n++){var i=a[n]
!t.hasOwnProperty(i)||"object"!==o(r[i])||Array.isArray(t[i])?t[i]=r[i]:t[i]=e(t[i],r[i])}})),t},Di=function(e,t){Object.assign(e,t),Object.keys(t).filter((function(e){return"function"==typeof t[e]})).forEach((function(r){e[r]=null
try{e[r]=t[r](e)}catch(e){}}))},gi=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],vi=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(gi.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},bi={}
le(bi,{createGrid:function(){return vu},findElmsInContext:function(){return wi},findNearbyElms:function(){return ku},findUp:function(){return Ci},findUpVirtual:function(){return Ei},focusDisabled:function(){return Ou},getComposedParent:function(){return $i},getElementByReference:function(){return ju},getElementCoordinates:function(){return Wi},getElementStack:function(){return Hu},getModalDialog:function(){return Tu},getOverflowHiddenAncestors:function(){return ki},getRootNode:function(){return Fi},getScrollOffset:function(){return Gi},getTabbableElements:function(){return Uu},getTargetRects:function(){return Yu},getTargetSize:function(){return Qu},getTextElementStack:function(){return _l},getViewportSize:function(){return Yi},getVisibleChildTextRects:function(){return Bl},hasContent:function(){return jl},hasContentVirtual:function(){return Pl},hasLangText:function(){return ql},idrefs:function(){return Xu},insertedIntoFocusOrder:function(){return Ll},isCurrentPageLink:function(){return Pu},isFocusable:function(){return Gu},isHTML5:function(){return Ul},isHiddenForEveryone:function(){return Vi},isHiddenWithCSS:function(){return Hl},isInTabOrder:function(){return Wu},isInTextBlock:function(){return Ql},isInert:function(){return Bu},isModalOpen:function(){return Kl},isMultiline:function(){return Xl},isNativelyFocusable:function(){return $u},isNode:function(){return Zl},isOffscreen:function(){return Qi},isOpaque:function(){return yf},isSkipLink:function(){return Ff},isVisible:function(){return xf},isVisibleOnScreen:function(){return Xi},isVisibleToScreenReaders:function(){return Gs},isVisualContent:function(){return Ol},reduceToElementsBelowFloating:function(){return Af},shadowElementsFromPoint:function(){return Bf},urlPropsFromAttribute:function(){return Of},visuallyContains:function(){return kf},visuallyOverlaps:function(){return Mf},visuallySort:function(){return qu}})
var yi=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},Fi=yi,wi=function(e){var t,r=e.context,n=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,u=ga(n)
return t=9===r.nodeType||11===r.nodeType?r:Fi(r),Array.from(t.querySelectorAll(i+"["+a+"="+u+"]"))},Ei=function(e,t){var r
if(r=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(r=r.assignedSlot?r.assignedSlot:r.parentNode)&&11===r.nodeType&&(r=r.host)}while(r&&!Ea(r,t)&&r!==a.documentElement)
return r&&Ea(r,t)?r:null},Ci=function(e,t){return Ei(Ka(e),t)}
function xi(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var Ai=xa((function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(Ai(e.parent))):t})),ki=Ai,Ni=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Ti=/(\w+)\((\d+)/
function Bi(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function Ri(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function _i(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function Si(e){return!!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function Oi(e){return"true"===e.attr("aria-hidden")}function Mi(e){return"0"===e.getComputedStylePropertyValue("opacity")}function Ii(e){var t=kh(e.actualNode),r=parseInt(e.getComputedStylePropertyValue("height")),n=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===r||0===n)}function Pi(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=e.getComputedStylePropertyValue("position")
if("fixed"===t)return!1
var r=ki(e)
if(!r.length)return!1
var n=e.boundingClientRect
return r.some((function(r){if("absolute"===t&&!function(e,t){for(var r=e.parent;r&&r!==t;){if(["relative","sticky"].includes(r.getComputedStylePropertyValue("position")))return!0
r=r.parent}return!1}(e,r)&&"static"===r.getComputedStylePropertyValue("position"))return!1
var a=r.boundingClientRect
return a.width<2||a.height<2||!xi(n,a)}))}function ji(e){var t=e.getComputedStylePropertyValue("clip").match(Ni),r=e.getComputedStylePropertyValue("clip-path").match(Ti)
if(t&&5===t.length){var n=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(n))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(r){var a=r[1],o=parseInt(r[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function qi(e,t){var r=vo(e,"map")
if(!r)return!0
var n=r.attr("name")
if(!n)return!0
var a=yi(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=im(i._tree,'img[usemap="#'.concat(ga(n),'"]'))
return!o||!o.length||o.some((function(e){return!t(e)}))}function Li(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find((function(e){return"summary"===e.props.nodeName}))!==e)&&!e.parent.hasAttr("open")}var zi=[Ri,_i,Si,Li]
function Vi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.skipAncestors,n=t.isAncestor,a=void 0!==n&&n
return e=Lh(e).vNode,r?Hi(e,a):Ui(e,a)}var Hi=xa((function(e,t){return!(!Bi(e)&&(!e.actualNode||!zi.some((function(r){return r(e,{isAncestor:t})}))&&e.actualNode.isConnected))})),Ui=xa((function(e,t){return!!Hi(e,t)||!!e.parent&&Ui(e.parent,!0)})),$i=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var r=t.parentNode
if(1===r.nodeType)return r
if(r.host)return r.host}return null},Gi=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,r=e.body
return{left:t&&t.scrollLeft||r&&r.scrollLeft||0,top:t&&t.scrollTop||r&&r.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},Wi=function(e){var t=Gi(a),r=t.left,n=t.top,o=e.getBoundingClientRect()
return{top:o.top+n,right:o.right+r,bottom:o.bottom+n,left:o.left+r,width:o.right-o.left,height:o.bottom-o.top}},Yi=function(e){var t=e.document,r=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(r)return{width:r.clientWidth,height:r.clientHeight}
var n=t.body
return{width:n.clientWidth,height:n.clientHeight}},Qi=function(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=Lh(e).domNode
if(t){var n,o=a.documentElement,i=r.getComputedStyle(t),u=r.getComputedStyle(a.body||o).getPropertyValue("direction"),s=Wi(t)
if(s.bottom<0&&(function(e,t){for(e=$i(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=$i(e)}return!0}(t,s.bottom)||"absolute"===i.position))return!0
if(0===s.left&&0===s.right)return!1
if("ltr"===u){if(s.right<=0)return!0}else if(n=Math.max(o.scrollWidth,Yi(r).width),s.left>=n)return!0
return!1}},Ki=[Mi,Ii,Pi,ji,Qi]
function Xi(e){return e=Lh(e).vNode,Zi(e)}var Zi=xa((function(e,t){return e.actualNode&&"area"===e.props.nodeName?!qi(e,Zi):!Vi(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!Ki.some((function(r){return r(e,{isAncestor:t})})))&&(!e.parent||Zi(e.parent,!0))}))
function Ji(e,t){var n=Math.min(e.top,t.top),a=Math.max(e.right,t.right),o=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left)
return new r.DOMRect(i,n,a-i,o-n)}function eu(e,t){var r=e.x,n=e.y,a=t.top,o=t.right,i=t.bottom,u=t.left
return n>=a&&r<=o&&n<=i&&r>=u}var tu={}
function ru(e,t){var n=Math.max(e.left,t.left),a=Math.min(e.right,t.right),o=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom)
return n>=a||o>=i?null:new r.DOMRect(n,o,a-n,i-o)}function nu(e){var t=e.left,n=e.top,a=e.width,o=e.height
return new r.DOMPoint(t+a/2,n+o/2)}le(tu,{getBoundingRect:function(){return Ji},getIntersectionRect:function(){return ru},getOffset:function(){return iu},getRectCenter:function(){return nu},hasVisualOverlap:function(){return lu},isPointInRect:function(){return eu},rectHasMinimumSize:function(){return ou},rectsOverlap:function(){return xi},splitRects:function(){return cu}})
var au=.05
function ou(e,t){var r=t.width,n=t.height
return r+au>=e&&n+au>=e}function iu(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n=Yu(e),a=Yu(t)
if(!n.length||!a.length)return null
var o,i=nu(n.reduce(Ji)),u=1/0,s=Q(a)
try{for(s.s();!(o=s.n()).done;){var l=o.value
if(eu(i,l))return 0
var c=su(i,uu(i,l))
u=Math.min(u,c)}}catch(e){s.e(e)}finally{s.f()}if(ou(2*r,Qu(t)))return u
var d=su(i,nu(a.reduce(Ji)))-r
return Math.max(0,Math.min(u,d))}function uu(e,t){return{x:e.x<t.left?t.left:e.x>t.right?t.right:e.x,y:e.y<t.top?t.top:e.y>t.bottom?t.bottom:e.y}}function su(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function lu(e,t){var r=e.boundingClientRect,n=t.boundingClientRect
return!(r.left>=n.right||r.right<=n.left||r.top>=n.bottom||r.bottom<=n.top)&&qu(e,t)>0}function cu(e,t){var r,n=[e],a=Q(t)
try{var o=function(){var e=r.value
if((n=n.reduce((function(t,r){return t.concat(function(e,t){var r,n,a=e.top,o=e.left,i=e.bottom,u=e.right,s=a<t.bottom&&i>t.top,l=o<t.right&&u>t.left,c=[]
if(du(t.top,a,i)&&l&&c.push({top:a,left:o,bottom:t.top,right:u}),du(t.right,o,u)&&s&&c.push({top:a,left:t.right,bottom:i,right:u}),du(t.bottom,a,i)&&l&&c.push({top:t.bottom,right:u,bottom:i,left:o}),du(t.left,o,u)&&s&&c.push({top:a,left:o,bottom:i,right:t.left}),0===c.length){if(n=t,(r=e).top>=n.top&&r.left>=n.left&&r.bottom<=n.bottom&&r.right<=n.right)return[]
c.push(e)}return c.map(pu)}(r,e))}),[])).length>4e3)throw new Error("splitRects: Too many rects")}
for(a.s();!(r=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return n}var du=function(e,t,r){return e>t&&e<r}
function pu(e){return new r.DOMRect(e.left,e.top,e.right-e.left,e.bottom-e.top)}var fu=0,hu=.1,mu=.2,Du=.3,gu=0
function vu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(Qa.get("gridCreated")&&!n)return Zn.gridSize
if(Qa.set("gridCreated",!0),!n){var o,u=Ka(a.documentElement)
if(u||(u=new jf(a.documentElement)),gu=0,u._stackingOrder=[wu(fu,gu++,null)],null!==(o=t)&&void 0!==o||(t=new xu),Cu(t,u),kh(u.actualNode)){var s=new xu(u)
u._subGrid=s}}for(var l=a.createTreeWalker(e,r.NodeFilter.SHOW_ELEMENT,null,!1),c=n?l.nextNode():l.currentNode;c;){var d=Ka(c)
d&&d.parent?n=d.parent:c.assignedSlot?n=Ka(c.assignedSlot):c.parentElement?n=Ka(c.parentElement):c.parentNode&&Ka(c.parentNode)&&(n=Ka(c.parentNode)),d||(d=new i.VirtualNode(c,n)),d._stackingOrder=Fu(d,n,gu++)
var p=Eu(d,n),f=p?p._subGrid:t
if(kh(d.actualNode)){var h=new xu(d)
d._subGrid=h}var m=d.boundingClientRect
0!==m.width&&0!==m.height&&Xi(c)&&Cu(f,d),vi(c)&&vu(c.shadowRoot,f,d),c=l.nextNode()}return Zn.gridSize}function bu(e,t){var r=e.getComputedStylePropertyValue("position"),n=e.getComputedStylePropertyValue("z-index")
if("fixed"===r||"sticky"===r)return!0
if("auto"!==n&&"static"!==r)return!0
if("1"!==e.getComputedStylePropertyValue("opacity"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-transform")||e.getComputedStylePropertyValue("-ms-transform")||e.getComputedStylePropertyValue("transform")||"none"))return!0
var a=e.getComputedStylePropertyValue("mix-blend-mode")
if(a&&"normal"!==a)return!0
var o=e.getComputedStylePropertyValue("filter")
if(o&&"none"!==o)return!0
var i=e.getComputedStylePropertyValue("perspective")
if(i&&"none"!==i)return!0
var u=e.getComputedStylePropertyValue("clip-path")
if(u&&"none"!==u)return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask")||e.getComputedStylePropertyValue("mask")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-image")||e.getComputedStylePropertyValue("mask-image")||"none"))return!0
if("none"!==(e.getComputedStylePropertyValue("-webkit-mask-border")||e.getComputedStylePropertyValue("mask-border")||"none"))return!0
if("isolate"===e.getComputedStylePropertyValue("isolation"))return!0
var s=e.getComputedStylePropertyValue("will-change")
if("transform"===s||"opacity"===s)return!0
if("touch"===e.getComputedStylePropertyValue("-webkit-overflow-scrolling"))return!0
var l=e.getComputedStylePropertyValue("contain")
return!!["layout","paint","strict","content"].includes(l)||!("auto"===n||!yu(t))}function yu(e){if(!e)return!1
var t=e.getComputedStylePropertyValue("display")
return["flex","inline-flex","grid","inline-grid"].includes(t)}function Fu(e,t,r){var n=t._stackingOrder.slice()
if(bu(e,t)){var a=n.findIndex((function(e){var t=e.stackLevel
return[fu,mu,Du].includes(t)}));-1!==a&&n.splice(a,n.length-a)}var o=function(e,t){var r=function(e,t){return"static"!==e.getComputedStylePropertyValue("position")||yu(t)?e.getComputedStylePropertyValue("z-index"):"auto"}(e,t)
return["auto","0"].includes(r)?"static"!==e.getComputedStylePropertyValue("position")?Du:"none"!==e.getComputedStylePropertyValue("float")?mu:bu(e,t)?hu:null:parseInt(r)}(e,t)
return null!==o&&n.push(wu(o,r,e)),n}function wu(e,t,r){return{stackLevel:e,treeOrder:t,vNode:r}}function Eu(e,t){for(var r=null,n=[e];t;){if(kh(t.actualNode)){r=t
break}if(t._scrollRegionParent){r=t._scrollRegionParent
break}n.push(t),t=Ka(t.actualNode.parentElement||t.actualNode.parentNode)}return n.forEach((function(e){return e._scrollRegionParent=r})),r}function Cu(e,t){var r=ki(t)
t.clientRects.forEach((function(n){var a,o=r.reduce((function(e,t){return e&&ru(e,t.boundingClientRect)}),n)
if(o){null!==(a=t._grid)&&void 0!==a||(t._grid=e)
var i=e.getGridPositionOfRect(o)
e.loopGridPosition(i,(function(e){e.includes(t)||e.push(t)}))}}))}var xu=W((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
$(this,e),this.container=t,this.cells=[]}),[{key:"toGridIndex",value:function(e){return Math.floor(e/Zn.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,r,n=e.x,a=e.y
ma(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),i=this.toGridIndex(n)
ma(eu({y:o,x:i},this.boundaries),"Element midpoint exceeds the grid bounds")
var u=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(r=u[i-u._negativeIndex])&&void 0!==r?r:[]}},{key:"loopGridPosition",value:function(e,t){var r=e,n=r.left,a=r.right,o=r.top,i=r.bottom
this.boundaries&&(e=Ji(this.boundaries,e)),this.boundaries=e,Au(this.cells,o,i,(function(e,r){Au(e,n,a,(function(e,n){t(e,{row:r,col:n})}))}))}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,n=e.right,a=e.bottom,o=e.left,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-i),n=this.toGridIndex(n+i-1),a=this.toGridIndex(a+i-1),o=this.toGridIndex(o-i),new r.DOMRect(o,t,n-o,a-t)}}])
function Au(e,t,r,n){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var i=t-e._negativeIndex,u=r-e._negativeIndex,s=i;s<=u;s++){var l,c
null!==(c=e[l=s])&&void 0!==c||(e[l]=[]),n(e[s],s+e._negativeIndex)}}function ku(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(vu(),null===(t=e._grid)||void 0===t||null===(t=t.cells)||void 0===t||!t.length)return[]
var n=e.boundingClientRect,a=e._grid,o=Nu(e),i=a.getGridPositionOfRect(n,r),u=[]
return a.loopGridPosition(i,(function(t){var r,n=Q(t)
try{for(n.s();!(r=n.n()).done;){var a=r.value
a&&a!==e&&!u.includes(a)&&o===Nu(a)&&u.push(a)}}catch(e){n.e(e)}finally{n.f()}})),u}var Nu=xa((function(e){return!!e&&("fixed"===e.getComputedStylePropertyValue("position")||Nu(e.parent))})),Tu=xa((function(){var e
if(!i._tree)return null
var t=Qh(i._tree[0],"dialog[open]",(function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left+1,t.top+1).includes(e.actualNode)&&Xi(e)}))
return t.length?t.find((function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left-10,t.top-10).includes(e.actualNode)}))||(null!==(e=t.find((function(e){var t,n=null!==(t=function(e){vu()
var t=i._tree[0]._grid,n=new r.DOMRect(0,0,r.innerWidth,r.innerHeight)
if(t)for(var a=0;a<t.cells.length;a++){var o=t.cells[a]
if(o)for(var u=0;u<o.length;u++){var s=o[u]
if(s)for(var l=0;l<s.length;l++){var c=s[l],d=ru(c.boundingClientRect,n)
if("html"!==c.props.nodeName&&c!==e&&"none"!==c.getComputedStylePropertyValue("pointer-events")&&d)return{vNode:c,rect:d}}}}}(e))&&void 0!==t?t:{},o=n.vNode,u=n.rect
return!!o&&!a.elementsFromPoint(u.left+1,u.top+1).includes(o.actualNode)})))&&void 0!==e?e:null):null}))
function Bu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.skipAncestors,n=t.isAncestor
return r?Ru(e,n):_u(e,n)}var Ru=xa((function(e,t){if(e.hasAttr("inert"))return!0
if(!t&&e.actualNode){var r=Tu()
if(r&&!hi(r,e))return!0}return!1})),_u=xa((function(e,t){return!!Ru(e,t)||!!e.parent&&_u(e.parent,!0)})),Su=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],Ou=function(e){var t,r=Lh(e).vNode
if(t=r.props.nodeName,Su.includes(t)&&r.hasAttr("disabled")||Bu(r))return!0
for(var n=r.parent,a=[],o=!1;n&&n.shadowId===r.shadowId&&!o&&(a.push(n),"legend"!==n.props.nodeName);){if(void 0!==n._inDisabledFieldset){o=n._inDisabledFieldset
break}"fieldset"===n.props.nodeName&&n.hasAttr("disabled")&&(o=!0),n=n.parent}return a.forEach((function(e){return e._inDisabledFieldset=o})),!!o||"area"!==r.props.nodeName&&!!r.actualNode&&Vi(r)},Mu=/^\/\#/,Iu=/^#[!/]/
function Pu(e){var t,n=e.getAttribute("href")
if(!n||"#"===n)return!1
if(Mu.test(n))return!0
var a=e.hash,o=e.protocol,i=e.hostname,u=e.port,s=e.pathname
if(Iu.test(a))return!1
if("#"===n.charAt(0))return!0
if("string"!=typeof(null===(t=r.location)||void 0===t?void 0:t.origin)||-1===r.location.origin.indexOf("://"))return null
var l,c=r.location.origin+r.location.pathname
return l=i?"".concat(o,"//").concat(i).concat(u?":".concat(u):""):r.location.origin,(l+=s?("/"!==s[0]?"/":"")+s:r.location.pathname)===c}var ju=function(e,t){var r=e.getAttribute(t)
if(!r)return null
if("href"===t&&!Pu(e))return null;-1!==r.indexOf("#")&&(r=decodeURIComponent(r.substr(r.indexOf("#")+1)))
var n=a.getElementById(r)
return n||((n=a.getElementsByName(r)).length?n[0]:null)}
function qu(e,t){vu()
for(var n=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<n;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a].stackLevel>e._stackingOrder[a].stackLevel)return 1
if(t._stackingOrder[a].stackLevel<e._stackingOrder[a].stackLevel)return-1
if(t._stackingOrder[a].treeOrder!==e._stackingOrder[a].treeOrder)return t._stackingOrder[a].treeOrder-e._stackingOrder[a].treeOrder}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var u=[];o;)u.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!u.find((function(e){return e.root===i.getRootNode()}));)i=i.getRootNode().host
if((o=u.find((function(e){return e.root===i.getRootNode()})).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var s=r.Node,l=s.DOCUMENT_POSITION_FOLLOWING,c=s.DOCUMENT_POSITION_CONTAINS,d=s.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&l?1:-1,h=p&c||p&d,m=Lu(e),D=Lu(t)
return m===D||h?f:D-m}function Lu(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:zu(e)?1:0}function zu(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=zu(e.parent)
return e._isFloated=t,t}function Vu(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=nu(t),o=e.getCellFromPoint(n)||[],i=Math.floor(n.x),u=Math.floor(n.y),s=o.filter((function(e){return e.clientRects.some((function(e){var t=e.left,r=e.top
return i<Math.floor(t+e.width)&&i>=Math.floor(t)&&u<Math.floor(r+e.height)&&u>=Math.floor(r)}))})),l=e.container
return l&&(s=Vu(l._grid,l.boundingClientRect,!0).concat(s)),r||(s=s.sort(qu).map((function(e){return e.actualNode})).concat(a.documentElement).filter((function(e,t,r){return r.indexOf(e)===t}))),s}var Hu=function(e){vu()
var t=Ka(e),r=t._grid
return r?Vu(r,t.boundingClientRect):[]},Uu=function(e){return im(e,"*").filter((function(e){var t=e.isFocusable,r=e.actualNode.getAttribute("tabindex")
return(r=r&&!isNaN(parseInt(r,10))?parseInt(r):null)?t&&r>=0:t}))},$u=function(e){var t=Lh(e).vNode
if(!t||Ou(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!im(t,"summary").length}return!1}
function Gu(e){var t=Lh(e).vNode
if(1!==t.props.nodeType)return!1
if(Ou(t))return!1
if($u(t))return!0
var r=t.attr("tabindex")
return!(!r||isNaN(parseInt(r,10)))}function Wu(e){var t=Lh(e).vNode
return 1===t.props.nodeType&&!(parseInt(t.attr("tabindex",10))<=-1)&&Gu(t)}var Yu=xa((function(e){var t=e.boundingClientRect,r=ku(e).filter((function(t){return lu(e,t)&&"none"!==t.getComputedStylePropertyValue("pointer-events")&&!function(e,t){return hi(e,t)&&!Wu(t)}(e,t)}))
return r.length?cu(t,r.map((function(e){return e.boundingClientRect}))):[t]})),Qu=xa((function(e,t){return function(e,t){return e.reduce((function(e,r){var n=ou(t,e)
return n!==ou(t,r)?n?e:r:e.width*e.height>r.width*r.height?e:r}))}(Yu(e),t)})),Ku={}
le(Ku,{accessibleText:function(){return Zu},accessibleTextVirtual:function(){return vl},autocomplete:function(){return wl},formControlValue:function(){return il},formControlValueMethods:function(){return al},hasUnicode:function(){return Dl},isHumanInterpretable:function(){return Fl},isIconLigature:function(){return gl},isValidAutocomplete:function(){return El},label:function(){return kl},labelText:function(){return ll},labelVirtual:function(){return Al},nativeElementType:function(){return Nl},nativeTextAlternative:function(){return hl},nativeTextMethods:function(){return fl},removeUnicode:function(){return yl},sanitize:function(){return Ds},subtreeText:function(){return sl},titleText:function(){return Vs},unsupported:function(){return $s},visible:function(){return xl},visibleTextNodes:function(){return Tl},visibleVirtual:function(){return Ys}})
var Xu=function(e,t){e=e.actualNode||e
try{var r=Fi(e),n=[],a=e.getAttribute(t)
if(a){a=qf(a)
for(var o=0;o<a.length;o++)n.push(r.getElementById(a[o]))}return n}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},Zu=function(e,t){return vl(Ka(e),t)},Ju=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Lh(e).vNode
return 1!==(null==r?void 0:r.props.nodeType)||1!==r.props.nodeType||t.inLabelledByContext||t.inControlContext||!r.attr("aria-labelledby")?"":Xu(r,"aria-labelledby").filter((function(e){return e})).reduce((function(e,n){var a=Zu(n,z({inLabelledByContext:!0,startNode:t.startNode||r},t))
return e?"".concat(e," ").concat(a):a}),"")}
function es(e){var t=Lh(e).vNode
return 1!==(null==t?void 0:t.props.nodeType)?"":t.attr("aria-label")||""}var ts={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-braillelabel":{type:"string",allowEmpty:!0,global:!0},"aria-brailleroledescription":{type:"string",allowEmpty:!0,global:!0},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-description":{type:"string",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string",allowEmpty:!0}},rs={alert:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-expanded","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",deprecated:!0,allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-required","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-readonly","aria-required"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},ns={ariaAttrs:ts,ariaRoles:z({},rs,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-glossary","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","gridcell","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","separator","slider","switch","tab","treeitem"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","menuitem","menuitemcheckbox","menuitemradio","meter","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},search:{contentTypes:["flow"],allowedRoles:["form","group","none","presentation","region","search"]},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},as=z({},ns),os=as,is=function(e){var t=os.ariaRoles[e]
return!!t&&!!t.unsupported},us=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.allowAbstract,n=t.flagUnsupported,a=void 0!==n&&n,o=os.ariaRoles[e],i=is(e)
return!(!o||a&&i||!r&&"abstract"===o.type)},ss=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.fallback,n=t.abstracts,a=t.dpub
if(1!==(e=e instanceof ta?e:Ka(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase()
return(r?qf(o):[o]).find((function(e){return!(!a&&"doc-"===e.substr(0,4))&&us(e,{allowAbstract:n})}))||null},ls=function(e){return Object.keys(os.htmlElms).filter((function(t){var r=os.htmlElms[t]
return r.contentTypes?r.contentTypes.includes(e):!!r.variant&&!(!r.variant.default||!r.variant.default.contentTypes)&&r.variant.default.contentTypes.includes(e)}))},cs=function(){return Qa.get("globalAriaAttrs",(function(){return Object.keys(os.ariaAttrs).filter((function(e){return os.ariaAttrs[e].global}))}))},ds=xa((function(e){for(var t=[],r=e.rows,n=0,a=r.length;n<a;n++){var o=r[n].cells
t[n]=t[n]||[]
for(var i=0,u=0,s=o.length;u<s;u++)for(var l=0;l<o[u].colSpan;l++){for(var c=o[u].getAttribute("rowspan"),d=0===parseInt(c)||0===o[u].rowspan?r.length:o[u].rowSpan,p=0;p<d;p++){for(t[n+p]=t[n+p]||[];t[n+p][i];)i++
t[n+p][i]=o[u]}i++}}return t})),ps=xa((function(e,t){var r,n
for(t||(t=ds(Ci(e,"table"))),r=0;r<t.length;r++)if(t[r]&&-1!==(n=t[r].indexOf(e)))return{x:n,y:r}}))
function fs(e){var t=Lh(e),r=t.vNode,n=t.domNode,a=r.attr("scope"),o=r.attr("role")
if(!["td","th"].includes(r.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===o)return"col"
if("rowheader"===o)return"row"
if("col"===a||"row"===a)return a
if("th"!==r.props.nodeName)return!1
if(!r.actualNode)return"auto"
var i=ds(Ci(n,"table")),u=ps(n,i)
return i[u.y].every((function(e){return"TH"===e.nodeName.toUpperCase()}))?"col":i.map((function(e){return e[u.x]})).every((function(e){return e&&"TH"===e.nodeName.toUpperCase()}))?"row":"auto"}var hs=function(e){return-1!==["col","auto"].indexOf(fs(e))},ms=function(e){return["row","auto"].includes(fs(e))},Ds=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},gs=function(){return Qa.get("sectioningElementSelector",(function(){return ls("sectioning").map((function(e){return"".concat(e,":not([role])")})).join(", ")+" , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]"}))}
function vs(e){var t=Ds(Ju(e)),r=Ds(es(e))
return!(!t&&!r)}var bs={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:"complementary",body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return vo(e,gs())?null:"contentinfo"},form:function(e){return vs(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return vo(e,gs())?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),r=cs().find((function(t){return e.hasAttr(t)}))
return!t||r||Gu(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var r=Xu(e.actualNode,"list").filter((function(e){return!!e}))[0]
t=r&&"datalist"===r.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",meter:"meter",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",search:"search",section:function(e){return vs(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=vo(e,"table"),r=ss(t)
return["grid","treegrid"].includes(r)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return hs(e)?"columnheader":ms(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},ys=function(e,t){var r=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===r)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var n=t.substring(1,t.length-1)
return new RegExp(n).test(e)}}return t===e},Fs=function(e,t){return ys(!!vl(e),t)},ws=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every((function(r){return ys(e(r),t[r])}))},Es=function(e,t){return e=Lh(e).vNode,ws((function(t){return e.attr(t)}),t)}
function Cs(e,t){return!!t(e)}var xs=function(e,t){return ys(ss(e),t)},As=function(e,t){return ys(Ms(e),t)},ks=function(e,t){return e=Lh(e).vNode,ys(e.props.nodeName,t)},Ns=function(e,t){return e=Lh(e).vNode,ws((function(t){return e.props[t]}),t)},Ts=function(e,t){return ys(Ls(e),t)},Bs={hasAccessibleName:Fs,attributes:Es,condition:Cs,explicitRole:xs,implicitRole:As,nodeName:ks,properties:Ns,semanticRole:Ts},Rs=function e(t,r){return t=Lh(t).vNode,Array.isArray(r)?r.some((function(r){return e(t,r)})):"string"==typeof r?oo(t,r):Object.keys(r).every((function(e){if(!Bs[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var n=Bs[e],a=r[e]
return n(t,a)}))},_s=function(e,t){return Rs(e,t)}
_s.hasAccessibleName=Fs,_s.attributes=Es,_s.condition=Cs,_s.explicitRole=xs,_s.fromDefinition=Rs,_s.fromFunction=ws,_s.fromPrimative=ys,_s.implicitRole=As,_s.nodeName=ks,_s.properties=Ns,_s.semanticRole=Ts
var Ss=_s,Os=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noMatchAccessibleName,r=void 0!==t&&t,n=os.htmlElms[e.props.nodeName]
if(!n)return{}
if(!n.variant)return n
var a=n.variant,o=j(n,d)
for(var i in a)if(a.hasOwnProperty(i)&&"default"!==i){for(var u=a[i],s=u.matches,l=j(u,p),c=Array.isArray(s)?s:[s],f=0;f<c.length&&r;f++)if(c[f].hasOwnProperty("hasAccessibleName"))return n
if(Ss(e,s))for(var h in l)l.hasOwnProperty(h)&&(o[h]=l[h])}for(var m in a.default)a.default.hasOwnProperty(m)&&void 0===o[m]&&(o[m]=a.default[m])
return o},Ms=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).chromium,r=e instanceof ta?e:Ka(e)
if(e=r.actualNode,!r)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var n=r.props.nodeName,a=bs[n]
return!a&&t?Os(r).chromiumRole||null:"function"==typeof a?a(r):a||null},Is={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function Ps(e,t){var r=Is[e.props.nodeName]
if(!r)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!r.includes(e.parent.props.nodeName))return null
var n=ss(e.parent,t)
return["none","presentation"].includes(n)&&!qs(e.parent)?n:n?null:Ps(e.parent,t)}function js(e,t){var r=t.chromium,n=j(t,f),a=Ms(e,{chromium:r})
return a?Ps(e,n)||a:null}function qs(e){return cs().some((function(t){return e.hasAttr(t)}))||Gu(e)}var Ls=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noPresentational,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noImplicit,n=j(t,h),a=Lh(e).vNode
if(1!==a.props.nodeType)return null
var o=ss(a,n)
return o?["presentation","none"].includes(o)&&qs(a)?r?null:js(a,n):o:r?null:js(a,n)}(e,j(t,m))
return r&&["presentation","none"].includes(n)?null:n},zs=["iframe"],Vs=function(e){var t=Lh(e).vNode
return 1===t.props.nodeType&&e.hasAttr("title")?!_s(t,zs)&&["none","presentation"].includes(Ls(t))?"":t.attr("title"):""},Hs=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).strict
if(1!==(e=e instanceof ta?e:Ka(e)).props.nodeType)return!1
var r=Ls(e),n=os.ariaRoles[r]
return!(!n||!n.nameFromContent)||!t&&(!n||["presentation","none"].includes(r))},Us=function(e){var t=e.actualNode,r=e.children
if(!r)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var n=Xu(t,"aria-owns").filter((function(e){return!!e})).map((function(e){return i.utils.getNodeFromTree(e)}))
return[].concat(q(r),q(n))}return q(r)},$s={accessibleNameFromFieldValue:["progressbar"]}
function Gs(e){return e=Lh(e).vNode,Ws(e)}var Ws=xa((function(e,t){return!Oi(e)&&!Bu(e,{skipAncestors:!0,isAncestor:t})&&(e.actualNode&&"area"===e.props.nodeName?!qi(e,Ws):!Vi(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||Ws(e.parent,!0)))})),Ys=function e(t,r,n){var a=Lh(t).vNode,o=r?Gs:Xi,i=!t.actualNode||t.actualNode&&o(t),u=a.children.map((function(t){var a=t.props,o=a.nodeType,u=a.nodeValue
if(3===o){if(u&&i)return u}else if(!n)return e(t,r)})).join("")
return Ds(u)},Qs=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],Ks=function(e){var t=(e=e instanceof ta?e:Ka(e)).props.nodeName
return"textarea"===t||"input"===t&&!Qs.includes((e.attr("type")||"").toLowerCase())},Xs=function(e){return"select"===(e=e instanceof ta?e:Ka(e)).props.nodeName},Zs=function(e){return"textbox"===ss(e)},Js=function(e){return"listbox"===ss(e)},el=function(e){return"combobox"===ss(e)},tl=["progressbar","scrollbar","slider","spinbutton"],rl=function(e){var t=ss(e)
return tl.includes(t)},nl=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],al={nativeTextboxValue:function(e){var t=Lh(e).vNode
return Ks(t)&&t.props.value||""},nativeSelectValue:function(e){var t=Lh(e).vNode
if(!Xs(t))return""
var r=im(t,"option"),n=r.filter((function(e){return e.props.selected}))
return n.length||n.push(r[0]),n.map((function(e){return Ys(e)})).join(" ")||""},ariaTextboxValue:function(e){var t=Lh(e),r=t.vNode,n=t.domNode
return Zs(r)?!n||n&&!Vi(n)?Ys(r,!0):n.textContent:""},ariaListboxValue:ol,ariaComboboxValue:function(e,t){var r=Lh(e).vNode
if(!el(r))return""
var n=Us(r).filter((function(e){return"listbox"===Ls(e)}))[0]
return n?ol(n,t):""},ariaRangeValue:function(e){var t=Lh(e).vNode
if(!rl(t)||!t.hasAttr("aria-valuenow"))return""
var r=+t.attr("aria-valuenow")
return isNaN(r)?"0":String(r)}}
function ol(e,t){var r=Lh(e).vNode
if(!Js(r))return""
var n=Us(r).filter((function(e){return"option"===Ls(e)&&"true"===e.attr("aria-selected")}))
return 0===n.length?"":vl(n[0],t)}var il=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.actualNode,n=$s.accessibleNameFromFieldValue||[],a=Ls(e)
if(t.startNode===e||!nl.includes(a)||n.includes(a))return""
var o=Object.keys(al).map((function(e){return al[e]})).reduce((function(r,n){return r||n(e,t)}),"")
return t.debug&&Jn(o||"{empty-value}",r,t),o},ul=ls("phrasing").concat(["#text"]),sl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=vl.alreadyProcessed
t.startNode=t.startNode||e
var n=t,a=n.strict,o=n.inControlContext,i=n.inLabelledByContext,u=Ls(e),s=Os(e,{noMatchAccessibleName:!0}).contentTypes
return r(e,t)||1!==e.props.nodeType||null!=s&&s.includes("embedded")||nl.includes(u)?"":t.subtreeDescendant||t.inLabelledByContext||Hs(e,{strict:a})?(a||(t=z({subtreeDescendant:!o&&!i},t)),Us(e).reduce((function(e,r){return function(e,t,r){var n=t.props.nodeName,a=vl(t,r)
return a?(ul.includes(n)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}(e,r,t)}),"")):""},ll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=vl.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||r(e,t))return""
t.startNode||(t.startNode=e)
var n,a=z({inControlContext:!0},t),o=function(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return wi({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}(e),i=vo(e,"label")
return i?(n=[].concat(q(o),[i.actualNode])).sort(qh):n=o,n.map((function(e){return Zu(e,a)})).filter((function(e){return""!==e})).join(" ")},cl={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function dl(e,t){return t.attr(e)||""}function pl(e,t,r){var n=t.actualNode,a=[e=e.toLowerCase(),n.nodeName.toLowerCase()].join(","),o=n.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?Zu(o,r):""}var fl={valueText:function(e){return e.actualNode.value||""},buttonDefaultText:function(e){var t=e.actualNode
return cl[t.type]||""},tableCaptionText:pl.bind(null,"caption"),figureText:pl.bind(null,"figcaption"),svgTitleText:pl.bind(null,"title"),fieldsetLegendText:pl.bind(null,"legend"),altText:dl.bind(null,"alt"),tableSummaryText:dl.bind(null,"summary"),titleText:Vs,subtreeText:sl,labelText:ll,singleSpace:function(){return" "},placeholderText:dl.bind(null,"placeholder")}
function hl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(Ls(e)))return""
var n=function(e){return(Os(e,{noMatchAccessibleName:!0}).namingMethods||[]).map((function(e){return fl[e]}))}(e),a=n.reduce((function(r,n){return r||n(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",r,t),a}var ml=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},Dl=function(e,t){var r=t.emoji,n=t.nonBmp,a=t.punctuations,o=!1
return r&&(o||(o=/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(e))),n&&(o||(o=/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e)||/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g.test(e))),a&&(o||(o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e))),o}
function gl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!Ds(o)||Dl(o,{emoji:!0,nonBmp:!0}))return!1
var i=Qa.get("canvasContext",(function(){return a.createElement("canvas").getContext("2d",{willReadFrequently:!0})})),u=i.canvas,s=Qa.get("fonts",(function(){return{}})),l=r.getComputedStyle(e.parent.actualNode).getPropertyValue("font-family")
s[l]||(s[l]={occurrences:0,numLigatures:0})
var c=s[l]
if(c.occurrences>=n){if(c.numLigatures/c.occurrences==1)return!0
if(0===c.numLigatures)return!1}c.occurrences++
var d=30,p="".concat(d,"px ").concat(l)
i.font=p
var f=o.charAt(0),h=i.measureText(f).width
if(0===h)return c.numLigatures++,!0
if(h<30){var m=30/h
h*=m,p="".concat(d*=m,"px ").concat(l)}u.width=h,u.height=d,i.font=p,i.textAlign="left",i.textBaseline="top",i.fillText(f,0,0)
var D=new Uint32Array(i.getImageData(0,0,h,d).data.buffer)
if(!D.some((function(e){return e})))return c.numLigatures++,!0
i.clearRect(0,0,h,d),i.fillText(o,0,0)
var g=new Uint32Array(i.getImageData(0,0,h,d).data.buffer),v=D.reduce((function(e,t,r){return 0===t&&0===g[r]||0!==t&&0!==g[r]?e:++e}),0),b=o.split("").reduce((function(e,t){return e+i.measureText(t).width}),0),y=i.measureText(o).width
return v/D.length>=t&&1-y/b>=t&&(c.numLigatures++,!0)}function vl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=function(e,t){return t.startNode||(t=z({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=z({includeHidden:!Gs(e)},t)),t}(e,t),function(e,t){return!!e&&1===e.props.nodeType&&!t.includeHidden&&!Gs(e)}(e,t))return""
if(function(e,t){var r,n=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(r=t.occurrenceThreshold)&&void 0!==r?r:t.occuranceThreshold
return!(3!==e.props.nodeType||!n)&&gl(e,a,o)}(e,t))return""
var r=[Ju,es,hl,il,sl,bl,Vs].reduce((function(r,n){return t.startNode===e&&(r=Ds(r)),""!==r?r:n(e,t)}),"")
return t.debug&&i.log(r||"{empty-value}",e.actualNode,t),r}function bl(e){return 3!==e.props.nodeType?"":e.props.nodeValue}vl.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var yl=function(e,t){var r=t.emoji,n=t.nonBmp,a=t.punctuations
return r&&(e=e.replace(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,"")),n&&(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"").replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"").replace(/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},Fl=function(e){return function(e){return 0===Ds(e).length}(e)||function(e){return 1===e.length&&e.match(/\D/)}(e)||function(e){return["aa","abc"].includes(e.toLowerCase())}(e)||function(e){var t=yl(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return!Ds(t)}(e)?0:1},wl={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},El=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.looseTyped,n=void 0!==r&&r,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,u=void 0===i?[]:i,s=t.qualifiers,l=void 0===s?[]:s,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p
if(e=e.toLowerCase().trim(),(o=o.concat(wl.stateTerms)).includes(e)||""===e)return!0
l=l.concat(wl.qualifiers),u=u.concat(wl.locations),d=d.concat(wl.standaloneTerms),f=f.concat(wl.qualifiedTerms)
var h=e.split(/\s+/g)
if("webauthn"===h[h.length-1]&&(h.pop(),0===h.length))return!1
if(!n&&(h[0].length>8&&"section-"===h[0].substr(0,8)&&h.shift(),u.includes(h[0])&&h.shift(),l.includes(h[0])&&(h.shift(),d=[]),1!==h.length))return!1
var m=h[h.length-1]
return d.includes(m)||f.includes(m)},Cl=function(e){var t
return e.attr("aria-labelledby")&&(t=Xu(e.actualNode,"aria-labelledby").map((function(e){var t=Ka(e)
return t?Ys(t):""})).join(" ").trim())||(t=e.attr("aria-label"))&&(t=Ds(t))?t:null},xl=function(e,t,r){return e=Ka(e),Ys(e,t,r)},Al=function(e){var t,r
if(r=Cl(e))return r
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var n=ga(e.attr("id"))
if(r=(t=Fi(e.actualNode).querySelector('label[for="'+n+'"]'))&&xl(t,!0))return r}return(r=(t=vo(e,"label"))&&Ys(t,!0))||null},kl=function(e){return e=Ka(e),Al(e)},Nl=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],Tl=function e(t){var r=Xi(t),n=[]
return t.children.forEach((function(t){3===t.actualNode.nodeType?r&&n.push(t):n=n.concat(e(t))})),n},Bl=xa((function(e){var t=Ka(e),r=t.boundingClientRect,n=[],o=ki(t)
return e.childNodes.forEach((function(e){if(3===e.nodeType&&""!==Ds(e.nodeValue)){var t=function(e){var t=a.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some((function(e){return!eu(nu(e),t)}))})(t,r)||n.push.apply(n,q(Rl(t,o)))}})),n.length?n:Rl([r],o)}))
function Rl(e,t){var r=[]
return e.forEach((function(e){if(!(e.width<1||e.height<1)){var n=t.reduce((function(e,t){return e&&ru(e,t.boundingClientRect)}),e)
n&&r.push(n)}})),r}var _l=function(e){vu()
var t=Ka(e)._grid
return t?Bl(e).map((function(e){return Vu(t,e)})):[]},Sl=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],Ol=function(e){var t=Lh(e).vNode,r=i.commons.aria.getExplicitRole(t)
if(r)return-1!==Sl.indexOf(r)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},Ml=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function Il(e){return!Ml.includes(e.props.nodeName)&&e.children.some((function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()}))}var Pl=function e(t,r,n){return Il(t)||Ol(t.actualNode)||!n&&!!Cl(t)||!r&&t.children.some((function(t){return 1===t.actualNode.nodeType&&e(t)}))},jl=function(e,t,r){return e=Ka(e),Pl(e,t,r)}
function ql(e){return!(void 0!==e.children&&!Il(e))||(1===e.props.nodeType&&Ol(e)?!!i.commons.text.accessibleTextVirtual(e):e.children.some((function(e){return!e.attr("lang")&&ql(e)&&!Vi(e)})))}var Ll=function(e){return parseInt(e.getAttribute("tabindex"),10)>-1&&Gu(e)&&!$u(e)}
function zl(e,t){var r=Lh(e),n=r.vNode,a=r.domNode
return n?(void 0===n._isHiddenWithCSS&&(n._isHiddenWithCSS=Vl(a,t)),n._isHiddenWithCSS):Vl(a,t)}function Vl(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var n=r.getComputedStyle(e,null)
if(!n)throw new Error("Style does not exist for the given element.")
if("none"===n.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=n.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=$i(e)
return!(!i||a.includes(o))&&zl(i,o)}var Hl=zl,Ul=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId},$l=function(e){var t;(e instanceof ta||null!==(t=r)&&void 0!==t&&t.Node&&e instanceof r.Node)&&(e=i.commons.aria.getRole(e))
var n=os.ariaRoles[e]
return(null==n?void 0:n.type)||null}
function Gl(e,t){!1!==t(e.actualNode)&&e.children.forEach((function(e){return Gl(e,t)}))}var Wl=["block","list-item","table","flex","grid","inline-block"]
function Yl(e){var t=r.getComputedStyle(e).getPropertyValue("display")
return Wl.includes(t)||"table-"===t.substr(0,6)}var Ql=function(e,t){if(Yl(e))return!1
var r=function(e){for(var t=$i(e);t&&!Yl(t);)t=$i(t)
return Ka(t)}(e),n="",a="",o=0
return Gl(r,(function(t){if(2===o)return!1
if(3===t.nodeType&&(n+=t.nodeValue),1===t.nodeType){var r=(t.nodeName||"").toUpperCase()
if(t===e&&(o=1),["BR","HR"].includes(r))0===o?(n="",a=""):o=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("widget"===$l(t))return a+=t.textContent,!1}}})),n=Ds(n),null!=t&&t.noLengthCompare?0!==n.length:(a=Ds(a),n.length>a.length)},Kl=function(e){var t=(e=e||{}).modalPercent||.75
if(Qa.get("isModalOpen"))return Qa.get("isModalOpen")
if(Qh(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",Xi).length)return Qa.set("isModalOpen",!0),!0
for(var n,o=Yi(r),u=o.width*t,s=o.height*t,l=(o.width-u)/2,c=(o.height-s)/2,d=[{x:l,y:c},{x:o.width-l,y:c},{x:o.width/2,y:o.height/2},{x:l,y:o.height-c},{x:o.width-l,y:o.height-c}].map((function(e){return Array.from(a.elementsFromPoint(e.x,e.y))})),p=function(){var e=d[f].find((function(e){var t=r.getComputedStyle(e)
return parseInt(t.width,10)>=u&&parseInt(t.height,10)>=s&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)}))
if(e&&d.every((function(t){return t.includes(e)})))return Qa.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++)if(n=p())return n.v
Qa.set("isModalOpen",void 0)}
function Xl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=e.ownerDocument.createRange()
r.setStart(e,0),r.setEnd(e,e.childNodes.length)
var n,a=0,o=0,i=Q(r.getClientRects())
try{for(i.s();!(n=i.n()).done;){var u=n.value
if(!(u.height<=t))if(a>u.top+t)a=Math.max(a,u.bottom)
else{if(0!==o)return!0
a=u.bottom,o++}}}catch(e){i.e(e)}finally{i.f()}return!1}var Zl=function(e){return e instanceof r.Node},Jl="color.incompleteData",ec={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
var r=Qa.get(Jl,(function(){return{}}))
return t&&(r[e]=t),r[e]},get:function(e){var t=Qa.get(Jl)
return null==t?void 0:t[e]},clear:function(){Qa.set(Jl,{})}},tc=ec,rc=function(e,t){var n=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(n))return tc.set("bgColor","imgNode"),!0
var a=(t=t||r.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
tc.set("bgColor",i?"bgGradient":"bgImage")}return o},nc={}
le(nc,{ArrayFrom:function(){return pf.default},Colorjs:function(){return of},CssSelectorParser:function(){return lc.CssSelectorParser},doT:function(){return cc.default},emojiRegexText:function(){return ml},memoize:function(){return dc.default}})
var ac=ce(Gt()),oc=ce(Wt()),ic=(ce(Yt()),ce(Yr())),uc=ce(fn()),sc=ce(Qn())
"hasOwn"in Object||(Object.hasOwn=ic.default),"values"in Object||(Object.values=uc.default),"Promise"in r||ac.default.polyfill(),"Uint32Array"in r||(r.Uint32Array=oc.Uint32Array),r.Uint32Array&&("some"in r.Uint32Array.prototype||Object.defineProperty(r.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in r.Uint32Array.prototype||Object.defineProperty(r.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce})),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),r=1;r<arguments.length;r++){var n=arguments[r]
if(null!=n)for(var a in n)n.hasOwnProperty(a)&&(t[a]=n[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,r=Object(this),n=r.length>>>0,a=arguments[1],o=0;o<n;o++)if(t=r[o],e.call(a,t,o,r))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var r,n=Object(this),a=n.length>>>0,o=0;o<a;o++)if(r=n[o],e.call(t,r,o,n))return o
return-1}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),r=parseInt(t.length,10)||0
if(0===r)return!1
var n,a,o=parseInt(arguments[1],10)||0
for(o>=0?n=o:(n=r+o)<0&&(n=0);n<r;){if(e===(a=t[n])||e!=e&&a!=a)return!0
n++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),r=t.length>>>0,n=arguments.length>=2?arguments[1]:void 0,a=0;a<r;a++)if(a in t&&e.call(n,t[a],a,t))return!0
return!1}}),Array.from||(Array.from=sc.default),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(r,n){return Array.isArray(n)?r.push.apply(r,e.call(n,t-1)):r.push(n),r}),[]):Array.prototype.slice.call(this)},writable:!0}),r.Node&&!("isConnected"in r.Node.prototype)&&Object.defineProperty(r.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var lc=ce($t()),cc=ce(Kn()),dc=ce(zt())
function pc(e,t){var r=e.length
Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map((function(e){return[e]})))
var n=t[0].length,a=t[0].map((function(e,r){return t.map((function(e){return e[r]}))})),o=e.map((function(e){return a.map((function(t){var r=0
if(!Array.isArray(e)){var n,a=Q(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
r+=e*o}}catch(e){a.e(e)}finally{a.f()}return r}for(var i=0;i<e.length;i++)r+=e[i]*(t[i]||0)
return r}))}))
return 1===r&&(o=o[0]),1===n?o.map((function(e){return e[0]})):o}function fc(e){return"string"===hc(e)}function hc(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function mc(e,t){e=+e,t=+t
var r=(Math.floor(e)+"").length
if(t>r)return+e.toFixed(t-r)
var n=Math.pow(10,r-t)
return Math.round(e/n)*n}function Dc(e){if(e){e=e.trim()
var t=/^-?[\d.]+$/,r=e.match(/^([a-z]+)\((.+?)\)$/i)
if(r){var n=[]
return r[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(function(e,r){/%$/.test(r)?(r=new Number(r.slice(0,-1)/100)).type="<percentage>":/deg$/.test(r)?((r=new Number(+r.slice(0,-3))).type="<angle>",r.unit="deg"):t.test(r)&&((r=new Number(r)).type="<number>"),e.startsWith("/")&&((r=r instanceof Number?r:new Number(r)).alpha=!0),n.push(r)})),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:n}}}}function gc(e){return e[e.length-1]}function vc(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function bc(e,t,r){return(r-e)/(t-e)}function yc(e,t,r){return vc(t[0],t[1],bc(e[0],e[1],r))}function Fc(e){return e.map((function(e){return e.split("|").map((function(e){var t=(e=e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/)
if(t){var r=new String(t[1])
return r.range=[+t[2],+t[3]],r}return e}))}))}var wc=Object.freeze({__proto__:null,isString:fc,type:hc,toPrecision:mc,parseFunction:Dc,last:gc,interpolate:vc,interpolateInv:bc,mapRange:yc,parseCoordGrammar:Fc,multiplyMatrices:pc}),Ec=W((function e(){$(this,e)}),[{key:"add",value:function(e,t,r){if("string"==typeof arguments[0])(Array.isArray(e)?e:[e]).forEach((function(e){this[e]=this[e]||[],t&&this[e][r?"unshift":"push"](t)}),this)
else for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1])}},{key:"run",value:function(e,t){this[e]=this[e]||[],this[e].forEach((function(e){e.call(t&&t.context?t.context:t,t)}))}}]),Cc=new Ec,xc={gamut_mapping:"lch.c",precision:5,deltaE:"76"},Ac={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]}
function kc(e){return Array.isArray(e)?e:Ac[e]}function Nc(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(e=kc(e),t=kc(t),!e||!t)throw new TypeError("Missing white point to convert ".concat(e?"":"from").concat(e||t?"":"/").concat(t?"":"to"))
if(e===t)return r
var a={W1:e,W2:t,XYZ:r,options:n}
if(Cc.run("chromatic-adaptation-start",a),a.M||(a.W1===Ac.D65&&a.W2===Ac.D50?a.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:a.W1===Ac.D50&&a.W2===Ac.D65&&(a.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),Cc.run("chromatic-adaptation-end",a),a.M)return pc(a.M,a.XYZ)
throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var Tc=(e=new WeakSet,t=new WeakMap,function(){function r(n){var a,o,i,u,s,l,c
$(this,r),S(this,e),_(this,t,void 0),this.id=n.id,this.name=n.name,this.base=n.base?r.get(n.base):null,this.aliases=n.aliases,this.base&&(this.fromBase=n.fromBase,this.toBase=n.toBase)
var d=null!==(a=n.coords)&&void 0!==a?a:this.base.coords
this.coords=d
var p=null!==(o=null!==(i=n.white)&&void 0!==i?i:this.base.white)&&void 0!==o?o:"D65"
for(var f in this.white=kc(p),this.formats=null!==(u=n.formats)&&void 0!==u?u:{},this.formats){var h=this.formats[f]
h.type||(h.type="function"),h.name||(h.name=f)}!n.cssId||null!==(s=this.formats.functions)&&void 0!==s&&s.color?null===(l=this.formats)||void 0===l||!l.color||null!==(c=this.formats)&&void 0!==c&&c.color.id||(this.formats.color.id=this.id):(this.formats.color={id:n.cssId},Object.defineProperty(this,"cssId",{value:n.cssId})),this.referred=n.referred,I(t,this,P(e,this,Rc).call(this).reverse()),Cc.run("colorspace-init-end",this)}return W(r,[{key:"inGamut",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).epsilon,r=void 0===t?75e-6:t
if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r})
var n=Object.values(this.coords)
return e.every((function(e,t){var a=n[t]
if("angle"!==a.type&&a.range){if(Number.isNaN(e))return!0
var o=V(a.range,2),i=o[0],u=o[1]
return(void 0===i||e>=i-r)&&(void 0===u||e<=u+r)}return!0}))}},{key:"cssId",get:function(){var e
return(null===(e=this.formats.functions)||void 0===e||null===(e=e.color)||void 0===e?void 0:e.id)||this.id}},{key:"isPolar",get:function(){for(var e in this.coords)if("angle"===this.coords[e].type)return!0
return!1}},{key:"getFormat",value:function(t){return"object"===o(t)?t=P(e,this,Bc).call(this,t):(r="default"===t?Object.values(this.formats)[0]:this.formats[t])?r=P(e,this,Bc).call(this,r):null
var r}},{key:"to",value:function(e,n){if(1===arguments.length){var a=[e.space,e.coords]
e=a[0],n=a[1]}if(this===(e=r.get(e)))return n
n=n.map((function(e){return Number.isNaN(e)?0:e}))
for(var o,i,u=M(t,this),s=M(t,e),l=0;l<u.length&&u[l]===s[l];l++)o=u[l],i=l
if(!o)throw new Error("Cannot convert between color spaces ".concat(this," and ").concat(e,": no connection space was found"))
for(var c=u.length-1;c>i;c--)n=u[c].toBase(n)
for(var d=i+1;d<s.length;d++)n=s[d].fromBase(n)
return n}},{key:"from",value:function(e,t){if(1===arguments.length){var n=[e.space,e.coords]
e=n[0],t=n[1]}return(e=r.get(e)).to(this,t)}},{key:"toString",value:function(){return"".concat(this.name," (").concat(this.id,")")}},{key:"getMinCoords",value:function(){var e=[]
for(var t in this.coords){var r,n=this.coords[t],a=n.range||n.refRange
e.push(null!==(r=null==a?void 0:a.min)&&void 0!==r?r:0)}return e}}],[{key:"all",get:function(){return q(new Set(Object.values(r.registry)))}},{key:"register",value:function(e,t){if(1===arguments.length&&(e=(t=arguments[0]).id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error("Duplicate color space registration: '".concat(e,"'"))
if(this.registry[e]=t,1===arguments.length&&t.aliases){var r,n=Q(t.aliases)
try{for(n.s();!(r=n.n()).done;){var a=r.value
this.register(a,t)}}catch(e){n.e(e)}finally{n.f()}}return t}},{key:"get",value:function(e){if(!e||e instanceof r)return e
if("string"===hc(e)){var t=r.registry[e.toLowerCase()]
if(!t)throw new TypeError('No color space found with id = "'.concat(e,'"'))
return t}for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o]
if(a.length)return r.get.apply(r,a)
throw new TypeError("".concat(e," is not a valid color space"))}},{key:"resolveCoord",value:function(e,t){var n,a,o=hc(e)
if("string"===o)if(e.includes(".")){var i=V(e.split("."),2)
n=i[0],a=i[1]}else n=void 0,a=e
else if(Array.isArray(e)){var u=V(e,2)
n=u[0],a=u[1]}else n=e.space,a=e.coordId
if((n=r.get(n))||(n=t),!n)throw new TypeError("Cannot resolve coordinate reference ".concat(e,": No color space specified and relative references are not allowed here"))
if("number"===(o=hc(a))||"string"===o&&a>=0){var s=Object.entries(n.coords)[a]
if(s)return z({space:n,id:s[0],index:a},s[1])}n=r.get(n)
var l=a.toLowerCase(),c=0
for(var d in n.coords){var p,f=n.coords[d]
if(d.toLowerCase()===l||(null===(p=f.name)||void 0===p?void 0:p.toLowerCase())===l)return z({space:n,id:d,index:c},f)
c++}throw new TypeError('No "'.concat(a,'" coordinate found in ').concat(n.name,". Its coordinates are: ").concat(Object.keys(n.coords).join(", ")))}}])}())
function Bc(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Fc(e.coords)
var t=Object.entries(this.coords).map((function(t,r){var n=V(t,2),a=(n[0],n[1]),o=e.coordGrammar[r][0],i=a.range||a.refRange,u=o.range,s=""
return"<percentage>"==o?(u=[0,100],s="%"):"<angle>"==o&&(s="deg"),{fromRange:i,toRange:u,suffix:s}}))
e.serializeCoords=function(e,r){return e.map((function(e,n){var a=t[n],o=a.fromRange,i=a.toRange,u=a.suffix
return o&&i&&(e=yc(o,i,e)),e=mc(e,r),u&&(e+=u),e}))}}return e}function Rc(){for(var e=[this],t=this;t=t.base;)e.push(t)
return e}var _c=Tc
de(_c,"registry",{}),de(_c,"DEFAULT_FORMAT",{type:"functions",name:"color"})
var Sc=new _c({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Oc=function(e){function t(e){var r,n,a,o
return $(this,t),e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Sc),e.toXYZ_M&&e.fromXYZ_M&&(null!==(a=e.toBase)&&void 0!==a||(e.toBase=function(t){var r=pc(e.toXYZ_M,t)
return n.white!==n.base.white&&(r=Nc(n.white,n.base.white,r)),r}),null!==(o=e.fromBase)&&void 0!==o||(e.fromBase=function(t){return t=Nc(n.base.white,n.white,t),pc(e.fromXYZ_M,t)})),null!==(r=e.referred)&&void 0!==r||(e.referred="display"),n=k(this,t,[e])}return B(t,e),W(t)}(_c)
function Mc(e){var t,r={str:null===(t=String(e))||void 0===t?void 0:t.trim()}
if(Cc.run("parse-start",r),r.color)return r.color
if(r.parsed=Dc(r.str),r.parsed){var n=r.parsed.name
if("color"===n){var a,o=r.parsed.args.shift(),i=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1,u=Q(_c.all)
try{var s,l=function(){var e,t=a.value,n=t.getFormat("color")
if(n&&(o===n.id||null!==(e=n.ids)&&void 0!==e&&e.includes(o))){var u=Object.keys(t.coords).length,s=Array(u).fill(0)
return s.forEach((function(e,t){return s[t]=r.parsed.args[t]||0})),{v:{spaceId:t.id,coords:s,alpha:i}}}}
for(u.s();!(a=u.n()).done;)if(s=l())return s.v}catch(e){u.e(e)}finally{u.f()}var c=""
if(o in _c.registry){var d,p=null===(d=_c.registry[o].formats)||void 0===d||null===(d=d.functions)||void 0===d||null===(d=d.color)||void 0===d?void 0:d.id
p&&(c="Did you mean color(".concat(p,")?"))}throw new TypeError("Cannot parse color(".concat(o,"). ")+(c||"Missing a plugin?"))}var f,h=Q(_c.all)
try{var m,D=function(){var e=f.value,t=e.getFormat(n)
if(t&&"function"===t.type){var a=1;(t.lastAlpha||gc(r.parsed.args).alpha)&&(a=r.parsed.args.pop())
var o=r.parsed.args
return t.coordGrammar&&Object.entries(e.coords).forEach((function(e,r){var a,i=V(e,2),u=i[0],s=i[1],l=t.coordGrammar[r],c=null===(a=o[r])||void 0===a?void 0:a.type
if(!(l=l.find((function(e){return e==c})))){var d=s.name||u
throw new TypeError("".concat(c," not allowed for ").concat(d," in ").concat(n,"()"))}var p=l.range
"<percentage>"===c&&(p||(p=[0,1]))
var f=s.range||s.refRange
p&&f&&(o[r]=yc(p,f,o[r]))})),{v:{spaceId:e.id,coords:o,alpha:a}}}}
for(h.s();!(f=h.n()).done;)if(m=D())return m.v}catch(e){h.e(e)}finally{h.f()}}else{var g,v=Q(_c.all)
try{for(v.s();!(g=v.n()).done;){var b=g.value
for(var y in b.formats){var F=b.formats[y]
if("custom"===F.type&&(!F.test||F.test(r.str))){var w,E=F.parse(r.str)
if(E)return null!==(w=E.alpha)&&void 0!==w||(E.alpha=1),E}}}}catch(e){v.e(e)}finally{v.f()}}throw new TypeError("Could not parse ".concat(e," as a color. Missing a plugin?"))}function Ic(e){if(!e)throw new TypeError("Empty color reference")
fc(e)&&(e=Mc(e))
var t=e.space||e.spaceId
return t instanceof _c||(e.space=_c.get(t)),void 0===e.alpha&&(e.alpha=1),e}function Pc(e,t){return(t=_c.get(t)).from(e)}function jc(e,t){var r=_c.resolveCoord(t,e.space),n=r.space,a=r.index
return Pc(e,n)[a]}function qc(e,t,r){return t=_c.get(t),e.coords=t.to(e.space,r),e}function Lc(e,t,r){if(e=Ic(e),2===arguments.length&&"object"===hc(arguments[1])){var n=arguments[1]
for(var a in n)Lc(e,a,n[a])}else{"function"==typeof r&&(r=r(jc(e,t)))
var o=_c.resolveCoord(t,e.space),i=o.space,u=o.index,s=Pc(e,i)
s[u]=r,qc(e,i,s)}return e}var zc=new _c({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Sc,fromBase:function(e){return Nc(Sc.white,"D50",e)},toBase:function(e){return Nc("D50",Sc.white,e)},formats:{color:{}}}),Vc=216/24389,Hc=24/116,Uc=24389/27,$c=Ac.D50,Gc=new _c({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:$c,base:zc,fromBase:function(e){var t=e.map((function(e,t){return e/$c[t]})).map((function(e){return e>Vc?Math.cbrt(e):(Uc*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Hc?Math.pow(t[0],3):(116*t[0]-16)/Uc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Uc,t[2]>Hc?Math.pow(t[2],3):(116*t[2]-16)/Uc].map((function(e,t){return e*$c[t]}))},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}})
function Wc(e){return(e%360+360)%360}var Yc=new _c({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Gc,fromBase:function(e){var t,r=V(e,3),n=r[0],a=r[1],o=r[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Wc(t)]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2]
return n<0&&(n=0),isNaN(a)&&(a=0),[r,n*Math.cos(a*Math.PI/180),n*Math.sin(a*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),Qc=Math.pow(25,7),Kc=Math.PI,Xc=180/Kc,Zc=Kc/180
function Jc(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.kL,a=void 0===n?1:n,o=r.kC,i=void 0===o?1:o,u=r.kH,s=void 0===u?1:u,l=V(Gc.from(e),3),c=l[0],d=l[1],p=l[2],f=Yc.from(Gc,[c,d,p])[1],h=V(Gc.from(t),3),m=h[0],D=h[1],g=h[2],v=Yc.from(Gc,[m,D,g])[1]
f<0&&(f=0),v<0&&(v=0)
var b=(f+v)/2,y=Math.pow(b,7),F=.5*(1-Math.sqrt(y/(y+Qc))),w=(1+F)*d,E=(1+F)*D,C=Math.sqrt(Math.pow(w,2)+Math.pow(p,2)),x=Math.sqrt(Math.pow(E,2)+Math.pow(g,2)),A=0===w&&0===p?0:Math.atan2(p,w),k=0===E&&0===g?0:Math.atan2(g,E)
A<0&&(A+=2*Kc),k<0&&(k+=2*Kc)
var N,T=m-c,B=x-C,R=(k*=Xc)-(A*=Xc),_=A+k,S=Math.abs(R)
C*x==0?N=0:S<=180?N=R:R>180?N=R-360:R<-180?N=R+360:console.log("the unthinkable has happened")
var O,M=2*Math.sqrt(x*C)*Math.sin(N*Zc/2),I=(c+m)/2,P=(C+x)/2,j=Math.pow(P,7)
O=C*x==0?_:S<=180?_/2:_<360?(_+360)/2:(_-360)/2
var q=Math.pow(I-50,2),L=1+.015*q/Math.sqrt(20+q),z=1+.045*P,H=1
H-=.17*Math.cos((O-30)*Zc),H+=.24*Math.cos(2*O*Zc),H+=.32*Math.cos((3*O+6)*Zc)
var U=1+.015*P*(H-=.2*Math.cos((4*O-63)*Zc)),$=30*Math.exp(-1*Math.pow((O-275)/25,2)),G=2*Math.sqrt(j/(j+Qc)),W=-1*Math.sin(2*$*Zc)*G,Y=Math.pow(T/(a*L),2)
return Y+=Math.pow(B/(i*z),2),Y+=Math.pow(M/(s*U),2),Y+=W*(B/(i*z))*(M/(s*U)),Math.sqrt(Y)}var ed=75e-6
function td(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.space,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).epsilon,n=void 0===r?ed:r
e=Ic(e),t=_c.get(t)
var a=e.coords
return t!==e.space&&(a=t.from(e)),t.inGamut(a,{epsilon:n})}function rd(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function nd(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.method,n=void 0===r?xc.gamut_mapping:r,a=t.space,o=void 0===a?e.space:a
if(fc(arguments[1])&&(o=arguments[1]),td(e,o=_c.get(o),{epsilon:0}))return e
var i=ad(e,o)
if("clip"!==n&&!td(e,o)){var u=nd(rd(i),{method:"clip",space:o})
if(Jc(e,u)>2){for(var s=_c.resolveCoord(n),l=s.space,c=s.id,d=ad(i,l),p=(s.range||s.refRange)[0],f=jc(d,c);f-p>.01;){var h=rd(d)
Jc(d,h=nd(h,{space:o,method:"clip"}))-2<.01?p=jc(d,c):f=jc(d,c),Lc(d,c,(p+f)/2)}i=ad(d,o)}else i=u}if("clip"===n||!td(i,o,{epsilon:0})){var m=Object.values(o.coords).map((function(e){return e.range||[]}))
i.coords=i.coords.map((function(e,t){var r=V(m[t],2),n=r[0],a=r[1]
return void 0!==n&&(e=Math.max(n,e)),void 0!==a&&(e=Math.min(e,a)),e}))}return o!==e.space&&(i=ad(i,e.space)),e.coords=i.coords,e}function ad(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).inGamut
e=Ic(e)
var n=(t=_c.get(t)).from(e),a={space:t,coords:n,alpha:e.alpha}
return r&&(a=nd(a)),a}function od(e){var t,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.precision,i=void 0===o?xc.precision:o,u=a.format,s=void 0===u?"default":u,l=a.inGamut,c=void 0===l||l,d=j(a,D),p=s
s=null!==(t=null!==(r=(e=Ic(e)).space.getFormat(s))&&void 0!==r?r:e.space.getFormat("default"))&&void 0!==t?t:_c.DEFAULT_FORMAT,c||(c=s.toGamut)
var f=e.coords
if(f=f.map((function(e){return e||0})),c&&!td(e)&&(f=nd(rd(e),!0===c?void 0:c).coords),"custom"===s.type){if(d.precision=i,!s.serialize)throw new TypeError("format ".concat(p," can only be used to parse colors, not for serialization"))
n=s.serialize(f,e.alpha,d)}else{var h=s.name||"color"
s.serializeCoords?f=s.serializeCoords(f,i):null!==i&&(f=f.map((function(e){return mc(e,i)})))
var m=q(f)
if("color"===h){var g,v=s.id||(null===(g=s.ids)||void 0===g?void 0:g[0])||e.space.id
m.unshift(v)}var b=e.alpha
null!==i&&(b=mc(b,i))
var y=e.alpha<1&&!s.noAlpha?"".concat(s.commas?",":" /"," ").concat(b):""
n="".concat(h,"(").concat(m.join(s.commas?", ":" ")).concat(y,")")}return n}nd.returns="color",ad.returns="color"
var id=new Oc({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],formats:{color:{}}}),ud=1.09929682680944,sd=.018053968510807,ld=new Oc({id:"rec2020",name:"REC.2020",base:id,toBase:function(e){return e.map((function(e){return e<4.5*sd?e/4.5:Math.pow((e+ud-1)/ud,1/.45)}))},fromBase:function(e){return e.map((function(e){return e>=sd?ud*Math.pow(e,.45)-(ud-1):4.5*e}))},formats:{color:{}}}),cd=new Oc({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),dd=new Oc({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ_M:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],formats:{color:{}}}),pd={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[.6,50/255,.8],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,.6],lightslategrey:[119/255,136/255,.6],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[.4,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,.8],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[.4,.2,.6],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},fd=Array(3).fill("<percentage> | <number>[0, 255]"),hd=Array(3).fill("<number>[0, 255]"),md=new Oc({id:"srgb",name:"sRGB",base:dd,fromBase:function(e){return e.map((function(e){var t=e<0?-1:1,r=e*t
return r>.0031308?t*(1.055*Math.pow(r,1/2.4)-.055):12.92*e}))},toBase:function(e){return e.map((function(e){var t=e<0?-1:1,r=e*t
return r<.04045?e/12.92:t*Math.pow((r+.055)/1.055,2.4)}))},formats:{rgb:{coords:fd},rgb_number:{name:"rgb",commas:!0,coords:hd,noAlpha:!0},color:{},rgba:{coords:fd,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:hd},hex:{type:"custom",toGamut:!0,test:function(e){return/^#([a-f0-9]{3,4}){1,2}$/i.test(e)},parse:function(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"))
var t=[]
return e.replace(/[a-f0-9]{2}/gi,(function(e){t.push(parseInt(e,16)/255)})),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).collapse,n=void 0===r||r
t<1&&e.push(t),e=e.map((function(e){return Math.round(255*e)}))
var a=n&&e.every((function(e){return e%17==0}))
return"#"+e.map((function(e){return a?(e/17).toString(16):e.toString(16).padStart(2,"0")})).join("")}},keyword:{type:"custom",test:function(e){return/^[a-z]+$/i.test(e)},parse:function(e){var t={spaceId:"srgb",coords:null,alpha:1}
if("transparent"===(e=e.toLowerCase())?(t.coords=pd.black,t.alpha=0):t.coords=pd[e],t.coords)return t}}}}),Dd=new Oc({id:"p3",name:"P3",base:cd,fromBase:md.fromBase,toBase:md.toBase,formats:{color:{id:"display-p3"}}})
if(xc.display_space=md,"undefined"!=typeof CSS&&CSS.supports)for(var gd=0,vd=[Gc,ld,Dd];gd<vd.length;gd++){var bd=vd[gd],yd=bd.getMinCoords(),Fd=od({space:bd,coords:yd,alpha:1})
if(CSS.supports("color",Fd)){xc.display_space=bd
break}}function wd(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.space,n=void 0===r?xc.display_space:r,a=j(t,g),o=od(e,a)
if("undefined"==typeof CSS||CSS.supports("color",o)||!xc.display_space)(o=new String(o)).color=e
else{var i=ad(e,n);(o=new String(od(i,a))).color=i}return o}function Ed(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lab",n=(r=_c.get(r)).from(e),a=r.from(t)
return Math.sqrt(n.reduce((function(e,t,r){var n=a[r]
return isNaN(t)||isNaN(n)?e:e+Math.pow(n-t,2)}),0))}function Cd(e){return jc(e,[Sc,"y"])}function xd(e,t){Lc(e,[Sc,"y"],t)}var Ad=Object.freeze({__proto__:null,getLuminance:Cd,setLuminance:xd,register:function(e){Object.defineProperty(e.prototype,"luminance",{get:function(){return Cd(this)},set:function(e){xd(this,e)}})}})
function kd(e){return e>=.022?e:e+Math.pow(.022-e,1.414)}function Nd(e){var t=e<0?-1:1,r=Math.abs(e)
return t*Math.pow(r,2.4)}var Td=216/24389,Bd=24/116,Rd=24389/27,_d=Ac.D65,Sd=new _c({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:_d,base:Sc,fromBase:function(e){var t=e.map((function(e,t){return e/_d[t]})).map((function(e){return e>Td?Math.cbrt(e):(Rd*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Bd?Math.pow(t[0],3):(116*t[0]-16)/Rd,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Rd,t[2]>Bd?Math.pow(t[2],3):(116*t[2]-16)/Rd].map((function(e,t){return e*_d[t]}))},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}}),Od=.5*Math.pow(5,.5)+.5,Md=Object.freeze({__proto__:null,contrastWCAG21:function(e,t){e=Ic(e),t=Ic(t)
var r=Math.max(Cd(e),0),n=Math.max(Cd(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}return(r+.05)/(n+.05)},contrastAPCA:function(e,t){var r,n,a,o
t=Ic(t),e=Ic(e)
var i=V((t=ad(t,"srgb")).coords,3)
n=i[0],a=i[1],o=i[2]
var u=.2126729*Nd(n)+.7151522*Nd(a)+.072175*Nd(o),s=V((e=ad(e,"srgb")).coords,3)
n=s[0],a=s[1],o=s[2]
var l=.2126729*Nd(n)+.7151522*Nd(a)+.072175*Nd(o),c=kd(u),d=kd(l),p=d>c
return r=Math.abs(d-c)<5e-4?0:p?1.14*(Math.pow(d,.56)-Math.pow(c,.57)):1.14*(Math.pow(d,.65)-Math.pow(c,.62)),100*(Math.abs(r)<.1?0:r>0?r-.027:r+.027)},contrastMichelson:function(e,t){e=Ic(e),t=Ic(t)
var r=Math.max(Cd(e),0),n=Math.max(Cd(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}var o=r+n
return 0===o?0:(r-n)/o},contrastWeber:function(e,t){e=Ic(e),t=Ic(t)
var r=Math.max(Cd(e),0),n=Math.max(Cd(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}return 0===n?5e4:(r-n)/n},contrastLstar:function(e,t){e=Ic(e),t=Ic(t)
var r=jc(e,[Gc,"l"]),n=jc(t,[Gc,"l"])
return Math.abs(r-n)},contrastDeltaPhi:function(e,t){e=Ic(e),t=Ic(t)
var r=jc(e,[Sd,"l"]),n=jc(t,[Sd,"l"]),a=Math.abs(Math.pow(r,Od)-Math.pow(n,Od)),o=Math.pow(a,1/Od)*Math.SQRT2-40
return o<7.5?0:o}})
function Id(e){var t=V(Pc(e,Sc),3),r=t[0],n=t[1],a=r+15*n+3*t[2]
return[4*r/a,9*n/a]}function Pd(e){var t=V(Pc(e,Sc),3),r=t[0],n=t[1],a=r+n+t[2]
return[r/a,n/a]}var jd=Object.freeze({__proto__:null,uv:Id,xy:Pd,register:function(e){Object.defineProperty(e.prototype,"uv",{get:function(){return Id(this)}}),Object.defineProperty(e.prototype,"xy",{get:function(){return Pd(this)}})}}),qd=Math.PI/180,Ld=new _c({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Sc,fromBase:function(e){return e.map((function(e){return Math.max(203*e,0)}))},toBase:function(e){return e.map((function(e){return Math.max(e/203,0)}))}}),zd=1.15,Vd=.66,Hd=2610/Math.pow(2,14),Ud=Math.pow(2,14)/2610,$d=3424/Math.pow(2,12),Gd=2413/Math.pow(2,7),Wd=2392/Math.pow(2,7),Yd=1.7*2523/Math.pow(2,5),Qd=Math.pow(2,5)/(1.7*2523),Kd=-.56,Xd=16295499532821565e-27,Zd=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Jd=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],ep=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],tp=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],rp=new _c({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Ld,fromBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=pc(Zd,[zd*r-(zd-1)*a,Vd*n-(Vd-1)*r,a]).map((function(e){var t=$d+Gd*Math.pow(e/1e4,Hd),r=1+Wd*Math.pow(e/1e4,Hd)
return Math.pow(t/r,Yd)})),i=V(pc(ep,o),3),u=i[0],s=i[1],l=i[2]
return[(1+Kd)*u/(1+Kd*u)-Xd,s,l]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=pc(tp,[(r+Xd)/(1+Kd-Kd*(r+Xd)),n,a]).map((function(e){var t=$d-Math.pow(e,Qd),r=Wd*Math.pow(e,Qd)-Gd
return 1e4*Math.pow(t/r,Ud)})),i=V(pc(Jd,o),3),u=i[0],s=i[1],l=i[2],c=(u+(zd-1)*l)/zd
return[c,(s+(Vd-1)*c)/Vd,l]},formats:{color:{}}}),np=new _c({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:rp,fromBase:function(e){var t,r=V(e,3),n=r[0],a=r[1],o=r[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Wc(t)]},toBase:function(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}}),ap=.8359375,op=2413/128,ip=18.6875,up=2610/16384,sp=16384/2610,lp=32/2523,cp=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],dp=[[.5,.5,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],pp=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],fp=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]],hp=new _c({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Ld,fromBase:function(e){return t=pc(cp,e).map((function(e){var t=ap+op*Math.pow(e/1e4,up),r=1+ip*Math.pow(e/1e4,up)
return Math.pow(t/r,78.84375)})),pc(dp,t)
var t},toBase:function(e){var t=function(e){return pc(pp,e).map((function(e){var t=Math.max(Math.pow(e,lp)-ap,0),r=op-ip*Math.pow(e,lp)
return 1e4*Math.pow(t/r,sp)}))}(e)
return pc(fp,t)},formats:{color:{}}}),mp=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Dp=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],gp=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],vp=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],bp=new _c({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Sc,fromBase:function(e){var t=pc(mp,e).map((function(e){return Math.cbrt(e)}))
return pc(gp,t)},toBase:function(e){var t=pc(vp,e).map((function(e){return Math.pow(e,3)}))
return pc(Dp,t)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}}),yp=Object.freeze({__proto__:null,deltaE76:function(e,t){return Ed(e,t,"lab")},deltaECMC:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.l,a=void 0===n?2:n,o=r.c,i=void 0===o?1:o,u=V(Gc.from(e),3),s=u[0],l=u[1],c=u[2],d=V(Yc.from(Gc,[s,l,c]),3),p=d[1],f=d[2],h=V(Gc.from(t),3),m=h[0],D=h[1],g=h[2],v=Yc.from(Gc,[m,D,g])[1]
p<0&&(p=0),v<0&&(v=0)
var b=s-m,y=p-v,F=l-D,w=c-g,E=Math.pow(F,2)+Math.pow(w,2)-Math.pow(y,2),C=.511
s>=16&&(C=.040975*s/(1+.01765*s))
var x,A=.0638*p/(1+.0131*p)+.638
Number.isNaN(f)&&(f=0),x=f>=164&&f<=345?.56+Math.abs(.2*Math.cos((f+168)*qd)):.36+Math.abs(.4*Math.cos((f+35)*qd))
var k=Math.pow(p,4),N=Math.sqrt(k/(k+1900)),T=A*(N*x+1-N),B=Math.pow(b/(a*C),2)
return B+=Math.pow(y/(i*A),2),B+=E/Math.pow(T,2),Math.sqrt(B)},deltaE2000:Jc,deltaEJz:function(e,t){var r=V(np.from(e),3),n=r[0],a=r[1],o=r[2],i=V(np.from(t),3),u=i[0],s=i[1],l=i[2],c=n-u,d=a-s
Number.isNaN(o)&&Number.isNaN(l)?(o=0,l=0):Number.isNaN(o)?o=l:Number.isNaN(l)&&(l=o)
var p=o-l,f=2*Math.sqrt(a*s)*Math.sin(p/2*(Math.PI/180))
return Math.sqrt(Math.pow(c,2)+Math.pow(d,2)+Math.pow(f,2))},deltaEITP:function(e,t){var r=V(hp.from(e),3),n=r[0],a=r[1],o=r[2],i=V(hp.from(t),3),u=i[0],s=i[1],l=i[2]
return 720*Math.sqrt(Math.pow(n-u,2)+.25*Math.pow(a-s,2)+Math.pow(o-l,2))},deltaEOK:function(e,t){var r=V(bp.from(e),3),n=r[0],a=r[1],o=r[2],i=V(bp.from(t),3),u=n-i[0],s=a-i[1],l=o-i[2]
return Math.sqrt(Math.pow(u,2)+Math.pow(s,2)+Math.pow(l,2))}})
function Fp(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
fc(r)&&(r={method:r})
var n=r,a=n.method,o=void 0===a?xc.deltaE:a,i=j(n,b)
for(var u in e=Ic(e),t=Ic(t),yp)if("deltae"+o.toLowerCase()===u.toLowerCase())return yp[u](e,t,i)
throw new TypeError("Unknown deltaE method: ".concat(o))}var wp=Object.freeze({__proto__:null,lighten:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Lc(e,[_c.get("oklch","lch"),"l"],(function(e){return e*(1+t)}))},darken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Lc(e,[_c.get("oklch","lch"),"l"],(function(e){return e*(1-t)}))}})
function Ep(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[Ic(e),Ic(t)]
if(e=a[0],t=a[1],"object"===hc(r)){var o=[.5,r]
r=o[0],n=o[1]}var i=n
return xp(e,t,{space:i.space,outputSpace:i.outputSpace,premultiplied:i.premultiplied})(r)}function Cp(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Ap(e)){n=t
var a=V((r=e).rangeArgs.colors,2)
e=a[0],t=a[1]}var o=n,i=o.maxDeltaE,u=o.deltaEMethod,s=o.steps,l=void 0===s?2:s,c=o.maxSteps,d=void 0===c?1e3:c,p=j(o,y)
if(!r){var f=[Ic(e),Ic(t)]
r=xp(e=f[0],t=f[1],p)}var h=Fp(e,t),m=i>0?Math.max(l,Math.ceil(h/i)+1):l,D=[]
if(void 0!==d&&(m=Math.min(m,d)),1===m)D=[{p:.5,color:r(.5)}]
else{var g=1/(m-1)
D=Array.from({length:m},(function(e,t){var n=t*g
return{p:n,color:r(n)}}))}if(i>0)for(var v=D.reduce((function(e,t,r){if(0===r)return 0
var n=Fp(t.color,D[r-1].color,u)
return Math.max(e,n)}),0);v>i;){v=0
for(var b=1;b<D.length&&D.length<d;b++){var F=D[b-1],w=D[b],E=(w.p+F.p)/2,C=r(E)
v=Math.max(v,Fp(C,F.color),Fp(C,w.color)),D.splice(b,0,{p:E,color:r(E)}),b++}}return D=D.map((function(e){return e.color}))}function xp(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Ap(e)){var n=e,a=t
return xp.apply(void 0,q(n.rangeArgs.colors).concat([z({},n.rangeArgs.options,a)]))}var o=r.space,i=r.outputSpace,u=r.progression,s=r.premultiplied
e=Ic(e),t=Ic(t),e=rd(e),t=rd(t)
var l={colors:[e,t],options:r}
if(o=o?_c.get(o):_c.registry[xc.interpolationSpace]||e.space,i=i?_c.get(i):o,e=ad(e,o),t=ad(t,o),e=nd(e),t=nd(t),o.coords.h&&"angle"===o.coords.h.type){var c=r.hue=r.hue||"shorter",d=[o,"h"],p=[jc(e,d),jc(t,d)],f=p[0],h=p[1],m=function(e,t){if("raw"===e)return t
var r=V(t.map(Wc),2),n=r[0],a=r[1],o=a-n
return"increasing"===e?o<0&&(a+=360):"decreasing"===e?o>0&&(n+=360):"longer"===e?-180<o&&o<180&&(o>0?a+=360:n+=360):"shorter"===e&&(o>180?n+=360:o<-180&&(a+=360)),[n,a]}(c,[f,h]),D=V(m,2)
f=D[0],h=D[1],Lc(e,d,f),Lc(t,d,h)}return s&&(e.coords=e.coords.map((function(t){return t*e.alpha})),t.coords=t.coords.map((function(e){return e*t.alpha}))),Object.assign((function(r){r=u?u(r):r
var n=e.coords.map((function(e,n){return vc(e,t.coords[n],r)})),a=vc(e.alpha,t.alpha,r),l={space:o,coords:n,alpha:a}
return s&&(l.coords=l.coords.map((function(e){return e/a}))),i!==o&&(l=ad(l,i)),l}),{rangeArgs:l})}function Ap(e){return"function"===hc(e)&&!!e.rangeArgs}xc.interpolationSpace="lab"
var kp=Object.freeze({__proto__:null,mix:Ep,steps:Cp,range:xp,isRange:Ap,register:function(e){e.defineFunction("mix",Ep,{returns:"color"}),e.defineFunction("range",xp,{returns:"function<color>"}),e.defineFunction("steps",Cp,{returns:"array<color>"})}}),Np=new _c({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:md,fromBase:function(e){var t=Math.max.apply(Math,q(e)),r=Math.min.apply(Math,q(e)),n=V(e,3),a=n[0],o=n[1],i=n[2],u=NaN,s=0,l=(r+t)/2,c=t-r
if(0!==c){switch(s=0===l||1===l?0:(t-l)/Math.min(l,1-l),t){case a:u=(o-i)/c+(o<i?6:0)
break
case o:u=(i-a)/c+2
break
case i:u=(a-o)/c+4}u*=60}return[u,100*s,100*l]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2]
function o(e){var t=(e+r/30)%12,o=n*Math.min(a,1-a)
return a-o*Math.max(-1,Math.min(t-3,9-t,1))}return(r%=360)<0&&(r+=360),n/=100,a/=100,[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Tp=new _c({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Np,fromBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=(a/=100)+(n/=100)*Math.min(a,1-a)
return[r,0===o?0:200*(1-a/o),100*o]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=(a/=100)*(1-(n/=100)/2)
return[r,0===o||1===o?0:(a-o)/Math.min(o,1-o)*100,100*o]},formats:{color:{toGamut:!0}}}),Bp=new _c({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Tp,fromBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2]
return[r,a*(100-n)/100,100-a]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=(n/=100)+(a/=100)
if(o>=1)return[r,0,n/o*100]
var i=1-a
return[r,100*(0===i?0:1-n/i),100*i]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}}),Rp=new Oc({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),_p=new Oc({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Rp,toBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),563/256)*Math.sign(e)}))},fromBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),256/563)*Math.sign(e)}))},formats:{color:{id:"a98-rgb"}}}),Sp=new Oc({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:zc,toXYZ_M:[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],fromXYZ_M:[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]]}),Op=1/512,Mp=new Oc({id:"prophoto",name:"ProPhoto",base:Sp,toBase:function(e){return e.map((function(e){return e<.03125?e/16:Math.pow(e,1.8)}))},fromBase:function(e){return e.map((function(e){return e>=Op?Math.pow(e,1/1.8):16*e}))},formats:{color:{id:"prophoto-rgb"}}}),Ip=new _c({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:bp,fromBase:function(e){var t,r=V(e,3),n=r[0],a=r[1],o=r[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Wc(t)]},toBase:function(e){var t,r,n=V(e,3),a=n[0],o=n[1],i=n[2]
return isNaN(i)?(t=0,r=0):(t=o*Math.cos(i*Math.PI/180),r=o*Math.sin(i*Math.PI/180)),[a,t,r]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),Pp=2610/Math.pow(2,14),jp=Math.pow(2,14)/2610,qp=2523/Math.pow(2,5),Lp=Math.pow(2,5)/2523,zp=3424/Math.pow(2,12),Vp=2413/Math.pow(2,7),Hp=2392/Math.pow(2,7),Up=new Oc({id:"rec2100pq",name:"REC.2100-PQ",base:id,toBase:function(e){return e.map((function(e){return 1e4*Math.pow(Math.max(Math.pow(e,Lp)-zp,0)/(Vp-Hp*Math.pow(e,Lp)),jp)/203}))},fromBase:function(e){return e.map((function(e){var t=Math.max(203*e/1e4,0),r=zp+Vp*Math.pow(t,Pp),n=1+Hp*Math.pow(t,Pp)
return Math.pow(r/n,qp)}))},formats:{color:{id:"rec2100-pq"}}}),$p=.17883277,Gp=.28466892,Wp=.55991073,Yp=3.7743,Qp=new Oc({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:id,toBase:function(e){return e.map((function(e){return e<=.5?Math.pow(e,2)/3*Yp:Math.exp((e-Wp)/$p+Gp)/12*Yp}))},fromBase:function(e){return e.map((function(e){return(e/=Yp)<=1/12?Math.sqrt(3*e):$p*Math.log(12*e-Gp)+Wp}))},formats:{color:{id:"rec2100-hlg"}}}),Kp={}
function Xp(e){var t=e.id
e.toCone_M,e.fromCone_M,Kp[t]=arguments[0]}function Zp(e,t){var r=Kp[arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Bradford"],n=V(pc(r.toCone_M,e),3),a=n[0],o=n[1],i=n[2],u=V(pc(r.toCone_M,t),3),s=pc([[u[0]/a,0,0],[0,u[1]/o,0],[0,0,u[2]/i]],r.toCone_M)
return pc(r.fromCone_M,s)}Cc.add("chromatic-adaptation-start",(function(e){e.options.method&&(e.M=Zp(e.W1,e.W2,e.options.method))})),Cc.add("chromatic-adaptation-end",(function(e){e.M||(e.M=Zp(e.W1,e.W2,e.options.method))})),Xp({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]}),Xp({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]}),Xp({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]}),Xp({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]}),Object.assign(Ac,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Ac.ACES=[.32168/.33767,1,.34065/.33767]
var Jp=new Oc({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Ac.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],formats:{color:{}}}),ef=Math.pow(2,-16),tf=-.35828683,rf=(Math.log2(65504)+9.72)/17.52,nf=new Oc({id:"acescc",name:"ACEScc",coords:{r:{range:[tf,rf],name:"Red"},g:{range:[tf,rf],name:"Green"},b:{range:[tf,rf],name:"Blue"}},referred:"scene",base:Jp,toBase:function(e){return e.map((function(e){return e<=-.3013698630136986?2*(Math.pow(2,17.52*e-9.72)-ef):e<rf?Math.pow(2,17.52*e-9.72):65504}))},fromBase:function(e){return e.map((function(e){return e<=0?(Math.log2(ef)+9.72)/17.52:e<ef?(Math.log2(ef+.5*e)+9.72)/17.52:(Math.log2(e)+9.72)/17.52}))},formats:{color:{}}}),af=Object.freeze({__proto__:null,XYZ_D65:Sc,XYZ_D50:zc,XYZ_ABS_D65:Ld,Lab_D65:Sd,Lab:Gc,LCH:Yc,sRGB_Linear:dd,sRGB:md,HSL:Np,HWB:Bp,HSV:Tp,P3_Linear:cd,P3:Dd,A98RGB_Linear:Rp,A98RGB:_p,ProPhoto_Linear:Sp,ProPhoto:Mp,REC_2020_Linear:id,REC_2020:ld,OKLab:bp,OKLCH:Ip,Jzazbz:rp,JzCzHz:np,ICTCP:hp,REC_2100_PQ:Up,REC_2100_HLG:Qp,ACEScg:Jp,ACEScc:nf}),of=(T=new WeakMap,function(){function e(){var t,r,n,a,o=this
$(this,e),_(this,T,void 0)
for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s]
1===u.length&&(t=Ic(u[0])),t?(r=t.space||t.spaceId,n=t.coords,a=t.alpha):(r=u[0],n=u[1],a=u[2]),I(T,this,_c.get(r)),this.coords=n?n.slice():[0,0,0],this.alpha=a<1?a:1
for(var l=0;l<this.coords.length;l++)"NaN"===this.coords[l]&&(this.coords[l]=NaN)
var c=function(e){Object.defineProperty(o,e,{get:function(){return o.get(e)},set:function(t){return o.set(e,t)}})}
for(var d in M(T,this).coords)c(d)}return W(e,[{key:"space",get:function(){return M(T,this)}},{key:"spaceId",get:function(){return M(T,this).id}},{key:"clone",value:function(){return new e(this.space,this.coords,this.alpha)}},{key:"toJSON",value:function(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}},{key:"display",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
var a=wd.apply(void 0,[this].concat(r))
return a.color=new e(a.color),a}}],[{key:"get",value:function(t){if(t instanceof e)return t
for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a]
return function(e,t,r){if(N())return Reflect.construct.apply(null,arguments)
var n=[null]
n.push.apply(n,t)
var a=new(e.bind.apply(e,n))
return r&&R(a,r.prototype),a}(e,[t].concat(n))}},{key:"defineFunction",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,a=n.instance,o=void 0===a||a,i=n.returns,u=function(){var t=r.apply(void 0,arguments)
if("color"===i)t=e.get(t)
else if("function<color>"===i){var n=t
t=function(){var t=n.apply(void 0,arguments)
return e.get(t)},Object.assign(t,n)}else"array<color>"===i&&(t=t.map((function(t){return e.get(t)})))
return t}
t in e||(e[t]=u),o&&(e.prototype[t]=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return u.apply(void 0,[this].concat(t))})}},{key:"defineFunctions",value:function(t){for(var r in t)e.defineFunction(r,t[r],t[r])}},{key:"extend",value:function(t){if(t.register)t.register(e)
else for(var r in t)e.defineFunction(r,t[r])}}])}())
of.defineFunctions({get:jc,getAll:Pc,set:Lc,setAll:qc,to:ad,equals:function(e,t){return e=Ic(e),t=Ic(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((function(e,r){return e===t.coords[r]}))},inGamut:td,toGamut:nd,distance:Ed,toString:od}),Object.assign(of,{util:wc,hooks:Cc,WHITES:Ac,Space:_c,spaces:_c.registry,parse:Mc,defaults:xc})
for(var uf=0,sf=Object.keys(af);uf<sf.length;uf++){var lf=sf[uf]
_c.register(af[lf])}for(var cf in _c.registry)df(cf,_c.registry[cf])
function df(e,t){Object.keys(t.coords),Object.values(t.coords).map((function(e){return e.name}))
var r=e.replace(/-/g,"_")
Object.defineProperty(of.prototype,r,{get:function(){var r=this,n=this.getAll(e)
return"undefined"==typeof Proxy?n:new Proxy(n,{has:function(e,r){try{return _c.resolveCoord([t,r]),!0}catch(e){}return Reflect.has(e,r)},get:function(e,r,n){if(r&&"symbol"!==o(r)&&!(r in e)){var a=_c.resolveCoord([t,r]).index
if(a>=0)return e[a]}return Reflect.get(e,r,n)},set:function(n,a,i,u){if(a&&"symbol"!==o(a)&&!(a in n)||a>=0){var s=_c.resolveCoord([t,a]).index
if(s>=0)return n[s]=i,r.setAll(e,n),!0}return Reflect.set(n,a,i,u)}})},set:function(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}Cc.add("colorspace-init-end",(function(e){var t
df(e.id,e),null===(t=e.aliases)||void 0===t||t.forEach((function(t){df(t,e)}))})),of.extend(yp),of.extend({deltaE:Fp}),of.extend(wp),of.extend({contrast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
fc(r)&&(r={algorithm:r})
var n=r,a=n.algorithm,o=j(n,v)
if(!a){var i=Object.keys(Md).map((function(e){return e.replace(/^contrast/,"")})).join(", ")
throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(i))}for(var u in e=Ic(e),t=Ic(t),Md)if("contrast"+a.toLowerCase()===u.toLowerCase())return Md[u](e,t,o)
throw new TypeError("Unknown contrast algorithm: ".concat(a))}}),of.extend(jd),of.extend(Ad),of.extend(kp),of.extend(Md)
var pf=ce(Qn())
cc.default.templateSettings.strip=!1
var ff=/^#[0-9a-f]{3,8}$/i,hf=/hsl\(\s*([-\d.]+)(rad|turn)/,mf=(O=new WeakMap,G=new WeakMap,X=new WeakMap,Z=new WeakMap,J=new WeakMap,ee=new WeakMap,te=new WeakSet,function(){function e(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
if($(this,e),S(this,te),_(this,O,void 0),_(this,G,void 0),_(this,X,void 0),_(this,Z,void 0),_(this,J,void 0),_(this,ee,void 0),t instanceof e){var o=t.r,i=t.g,u=t.b
return this.r=o,this.g=i,this.b=u,void(this.alpha=t.alpha)}this.red=t,this.green=r,this.blue=n,this.alpha=a}return W(e,[{key:"r",get:function(){return M(O,this)},set:function(e){I(O,this,e),I(Z,this,Math.round(255*vf(e,0,1)))}},{key:"g",get:function(){return M(G,this)},set:function(e){I(G,this,e),I(J,this,Math.round(255*vf(e,0,1)))}},{key:"b",get:function(){return M(X,this)},set:function(e){I(X,this,e),I(ee,this,Math.round(255*vf(e,0,1)))}},{key:"red",get:function(){return M(Z,this)},set:function(e){I(O,this,e/255),I(Z,this,vf(e,0,255))}},{key:"green",get:function(){return M(J,this)},set:function(e){I(G,this,e/255),I(J,this,vf(e,0,255))}},{key:"blue",get:function(){return M(ee,this)},set:function(e){I(X,this,e/255),I(ee,this,vf(e,0,255))}},{key:"toHexString",value:function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),r=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?r:"0"+r)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}},{key:"parseString",value:function(e){e=e.replace(hf,(function(e,t,r){var n=t+r
switch(r){case"rad":return e.replace(n,180*t/Math.PI)
case"turn":return e.replace(n,360*t)}}))
try{var t
"Prototype"in r&&"Version"in r.Prototype&&(t=Array.from,Array.from=pf.default)
var n=new of(e).to("srgb")
t&&(Array.from=t,t=null),this.r=n.r,this.g=n.g,this.b=n.b,this.alpha=+n.alpha}catch(t){throw new Error('Unable to parse color "'.concat(e,'"'))}return this}},{key:"parseRgbString",value:function(e){this.parseString(e)}},{key:"parseHexString",value:function(e){e.match(ff)&&![6,8].includes(e.length)&&this.parseString(e)}},{key:"parseColorFnString",value:function(e){this.parseString(e)}},{key:"getRelativeLuminance",value:function(){var e=this.r,t=this.g,r=this.b
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))}},{key:"getLuminosity",value:function(){return.3*this.r+.59*this.g+.11*this.b}},{key:"setLuminosity",value:function(e){var t=e-this.getLuminosity()
return P(te,this,Df).call(this,t).clip()}},{key:"getSaturation",value:function(){return Math.max(this.r,this.g,this.b)-Math.min(this.r,this.g,this.b)}},{key:"setSaturation",value:function(t){var r=new e(this),n=V([{name:"r",value:r.r},{name:"g",value:r.g},{name:"b",value:r.b}].sort((function(e,t){return e.value-t.value})),3),a=n[0],o=n[1],i=n[2]
return i.value>a.value?(o.value=(o.value-a.value)*t/(i.value-a.value),i.value=t):o.value=i.value=0,a.value=0,r[i.name]=i.value,r[a.name]=a.value,r[o.name]=o.value,r}},{key:"clip",value:function(){var t=new e(this),r=t.getLuminosity(),n=Math.min(t.r,t.g,t.b),a=Math.max(t.r,t.g,t.b)
return n<0&&(t.r=r+(t.r-r)*r/(r-n),t.g=r+(t.g-r)*r/(r-n),t.b=r+(t.b-r)*r/(r-n)),a>1&&(t.r=r+(t.r-r)*(1-r)/(a-r),t.g=r+(t.g-r)*(1-r)/(a-r),t.b=r+(t.b-r)*(1-r)/(a-r)),t}}])}())
function Df(e){var t=new mf(this)
return t.r+=e,t.g+=e,t.b+=e,t}var gf=mf
function vf(e,t,r){return Math.min(Math.max(t,e),r)}var bf=function(e){var t=new gf
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var r=e.getPropertyValue("opacity")
t.alpha=t.alpha*r}return t},yf=function(e){var t=r.getComputedStyle(e)
return rc(e,t)||1===bf(t).alpha}
function Ff(e){if(!e.href)return!1
var t=Qa.get("firstPageLink",wf)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function wf(){return(r.location.origin?im(i._tree,'a[href]:not([href^="javascript:"])').find((function(e){return!Pu(e.actualNode)})):im(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var Ef=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Cf=/(\w+)\((\d+)/,xf=function e(t,n,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var u=t instanceof ta?t:Ka(t)
t=u?u.actualNode:t
var s="_isVisible"+(n?"ScreenReader":""),l=null!==(o=r.Node)&&void 0!==o?o:{},c=l.DOCUMENT_NODE,d=l.DOCUMENT_FRAGMENT_NODE,p=u?u.props.nodeType:t.nodeType,f=u?u.props.nodeName:t.nodeName.toLowerCase()
if(u&&void 0!==u[s])return u[s]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),n&&"true"===(u?u.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=u.parent,m=!0
return h&&(m=e(h,n,!0)),u&&(u[s]=m),m}var D=r.getComputedStyle(t,null)
if(null===D)return!1
if("area"===f)return function(t,r,n){var a=Ci(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var u=Fi(t)
if(!u||9!==u.nodeType)return!1
var s=im(i._tree,'img[usemap="#'.concat(ga(o),'"]'))
return!(!s||!s.length)&&s.some((function(t){return e(t.actualNode,r,n)}))}(t,n,a)
if("none"===D.getPropertyValue("display"))return!1
var g=parseInt(D.getPropertyValue("height")),v=parseInt(D.getPropertyValue("width")),b=kh(t),y=b&&0===g,F=b&&0===v,w="absolute"===D.getPropertyValue("position")&&(g<2||v<2)&&"hidden"===D.getPropertyValue("overflow")
if(!n&&(function(e){var t=e.getPropertyValue("clip").match(Ef),r=e.getPropertyValue("clip-path").match(Cf)
if(t&&5===t.length){var n=e.getPropertyValue("position")
if(["fixed","absolute"].includes(n))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(r){var a=r[1],o=parseInt(r[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(D)||"0"===D.getPropertyValue("opacity")||y||F||w))return!1
if(!a&&("hidden"===D.getPropertyValue("visibility")||!n&&Qi(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,n,!0)),u&&(u[s]=C),C},Af=function(e,t){for(var n=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var u=e[i]
u===t&&(o=!0)
var s=r.getComputedStyle(u)
o||-1===n.indexOf(s.position)?a.push(u):a=[]}return a}
function kf(e,t){var r=Nf(t)
do{var n=Nf(e)
if(n===r||n===t)return Tf(e,t)
e=n}while(e)
return!1}function Nf(e){for(var t=Ka(e).parent;t;){if(kh(t.actualNode))return t.actualNode
t=t.parent}}function Tf(e,t){var n=r.getComputedStyle(t),a=n.getPropertyValue("overflow")
if("inline"===n.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),u={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof r.HTMLHtmlElement)&&(u.width=t.scrollWidth,u.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===n.getPropertyValue("white-space")&&(o[0]=u),o.some((function(e){return!(Math.ceil(e.left)<Math.floor(u.left)||Math.ceil(e.top)<Math.floor(u.top)||Math.floor(e.left+e.width)>Math.ceil(u.left+u.width)||Math.floor(e.top+e.height)>Math.ceil(u.top+u.height))}))}var Bf=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(n.elementsFromPoint(t,r)||[]).filter((function(e){return Fi(e)===n})).reduce((function(n,a){if(vi(a)){var i=e(t,r,a.shadowRoot,o+1);(n=n.concat(i)).length&&kf(n[0],a)&&n.push(a)}else n.push(a)
return n}),[])}
function Rf(e){var t={}
if(!e||!e.length)return t
var r=e.substring(1).split("&")
if(!r||!r.length)return t
for(var n=0;n<r.length;n++){var a=V(r[n].split("="),2),o=a[0],i=a[1],u=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(u)}return t}function _f(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===V(t,1)[0]?"":e:""}var Sf,Of=function(e,t){if(e.hasAttribute(t)){var r=e.nodeName.toUpperCase(),n=e;["A","AREA"].includes(r)&&!e.ownerSVGElement||((n=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(n.protocol)?n.protocol.replace(/s:$/,":"):n.protocol,u=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(n.pathname)?n.pathname:"/".concat(n.pathname)),s=u.pathname,l=u.filename
return{protocol:i,hostname:n.hostname,port:(o=n.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(s)?s:"".concat(s,"/"),search:Rf(n.search),hash:_f(n.hash),filename:l}}},Mf=function(e,t){var n=t.getBoundingClientRect(),a=n.top,o=n.left,i=a-t.scrollTop,u=a-t.scrollTop+t.scrollHeight,s=o-t.scrollLeft,l=o-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>n.right||e.top>u&&e.top>n.bottom||e.right<s&&e.right<n.left||e.bottom<i&&e.bottom<n.top)return!1
var c=r.getComputedStyle(t)
return!(e.left>n.right||e.top>n.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof r.HTMLBodyElement||t instanceof r.HTMLHtmlElement},If=0,Pf=function(e){function t(e,r,n){var a
if($(this,t),(a=k(this,t)).shadowId=n,a.children=[],a.actualNode=e,a.parent=r,r||(If=0),a.nodeIndex=If++,a._isHidden=null,a._cache={},a._isXHTML=Aa(e.ownerDocument),"input"===e.nodeName.toLowerCase()){var o=e.getAttribute("type")
o=a._isXHTML?o:(o||"").toLowerCase(),vm().includes(o)||(o="text"),a._type=o}return Qa.get("nodeMap")&&Qa.get("nodeMap").set(e,a),a}return B(t,e),W(t,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,r=e.nodeName,n=e.id,a=e.nodeValue
this._cache.props={nodeType:t,nodeName:this._isXHTML?r:r.toLowerCase(),id:n,type:this._type,nodeValue:a},1===t&&(this._cache.props.multiple=this.actualNode.multiple,this._cache.props.value=this.actualNode.value,this._cache.props.selected=this.actualNode.selected,this._cache.props.checked=this.actualNode.checked,this._cache.props.indeterminate=this.actualNode.indeterminate)}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof r.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map((function(e){return e.name}))),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=r.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=Gu(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=Uu(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter((function(e){return e.width>0}))),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}])}(ta),jf=Pf,qf=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},Lf=" [idsMap]"
function zf(e,t,r){var n=e[0]._selectorMap
if(n){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some((function(e){return Vf(e)})))return
var i=new Set
t.forEach((function(e){var t,r=function(e,t,r){var n=e[e.length-1],a=null,o=e.length>1||!!n.pseudos||!!n.classes
if(Vf(n))a=t["*"]
else{if(n.id){var i
if(!t[Lf]||!Object.hasOwn(t[Lf],n.id)||null===(i=t[Lf][n.id])||void 0===i||!i.length)return
a=t[Lf][n.id].filter((function(e){return e.shadowId===r}))}if(n.tag&&"*"!==n.tag){var u
if(null===(u=t[n.tag])||void 0===u||!u.length)return
var s=t[n.tag]
a=a?Hf(s,a):s}if(n.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?Hf(c,a):c}if(n.attributes)for(var d=0;d<n.attributes.length;d++){var p,f=n.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var h=t["[".concat(f.key,"]")]
a=a?Hf(h,a):h}}return{nodes:a,isComplexSelector:o}}(e,n,a)
null==r||null===(t=r.nodes)||void 0===t||t.forEach((function(t){r.isComplexSelector&&!go(t,e)||i.add(t)}))}))
var u=[]
return i.forEach((function(e){return u.push(e)})),r&&(u=u.filter(r)),u.sort((function(e,t){return e.nodeIndex-t.nodeIndex}))}}function Vf(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function Hf(e,t){return e.filter((function(e){return t.includes(e)}))}function Uf(e,t,r){Object.hasOwn(r,e)||(r[e]=[]),r[e].push(t)}function $f(e,t){1===e.props.nodeType&&(Uf(e.props.nodeName,e,t),Uf("*",e,t),e.attrNames.forEach((function(r){"id"===r&&(t[Lf]=t[Lf]||{},qf(e.attr(r)).forEach((function(r){Uf(r,e,t[Lf])}))),Uf("[".concat(r,"]"),e,t)})))}function Gf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
Sf=!1
var r={}
Qa.set("nodeMap",new WeakMap),Qa.set("selectorMap",r)
var n=Yf(e,t,null)
return n[0]._selectorMap=r,n[0]._hasShadowRoot=Sf,n}function Wf(e,t,r){var n=new jf(e,t,r)
return $f(n,Qa.get("selectorMap")),n}function Yf(e,t,n){var a,o,i
function u(e,r,n){var a=Yf(r,t,n)
return a&&(e=e.concat(a)),e}return e.documentElement&&(e=e.documentElement),i=e.nodeName.toLowerCase(),vi(e)?(Sf=!0,a=Wf(e,n,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):"content"===i&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce((function(e,t){return u(e,t,n)}),[]):"slot"===i&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),r.getComputedStyle(e),o.reduce((function(e,t){return u(e,t,n)}),[])):1===e.nodeType?(a=Wf(e,n,t),o=Array.from(e.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):3===e.nodeType?[Wf(e,n)]:void 0}var Qf=function(e){return e?e.trim().split("-")[0].toLowerCase():""},Kf=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map((function(e){if(t[e].length){var r=i._audit.data.failureSummaries[e]
return r&&"function"==typeof r.failureMessage?r.failureMessage(t[e].map((function(e){return e.message||""}))):void 0}})).filter((function(e){return void 0!==e})).join("\n\n")}
function Xf(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var Zf=Zn.resultGroups
function Jf(e,t){var r=i.utils.aggregateResult(e)
return Zf.forEach((function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(r[e]||[]).forEach((function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])})),r[e]=(r[e]||[]).map((function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map((function(e){if("object"===o(e.node)){var r=eh(e.node,t)
Object.assign(e,r)}return delete e.result,delete e.node,function(e,t){["any","all","none"].forEach((function(r){Array.isArray(e[r])&&e[r].filter((function(e){return Array.isArray(e.relatedNodes)})).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return eh(e,t)}))}))}))}(e,t),e}))),Zf.forEach((function(t){return delete e[t]})),delete e.pageLevel,delete e.result,e}))})),r}function eh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
e=si.dqElmToSpec(e,t)
var r,n,a,o,u,s={}
return i._audit.noHtml?s.html=null:s.html=null!==(r=e.source)&&void 0!==r?r:"Undefined",t.elementRef&&!e.fromFrame&&(s.element=null!==(n=e.element)&&void 0!==n?n:null),(!1!==t.selectors||e.fromFrame)&&(s.target=null!==(a=e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(s.ancestry=null!==(o=e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(s.xpath=null!==(u=e.xpath)&&void 0!==u?u:["/"]),s}var th=/\$\{\s?data\s?\}/g
function rh(e,t){if("string"==typeof t)return e.replace(th,t)
for(var r in t)if(t.hasOwnProperty(r)){var n=new RegExp("\\${\\s?data\\."+r+"\\s?}","g"),a=void 0===t[r]?"":String(t[r])
e=e.replace(n,a)}return e}var nh=function e(t,r){if(t){if(Array.isArray(r))return r.values=r.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?rh(1===r.length?t.singular:t.plural,r):rh(t,r)
if("string"==typeof t)return rh(t,r)
if("string"==typeof r)return rh(t[r],r)
var n=t.default||Xf()
return r&&r.messageKey&&t[r.messageKey]&&(n=t[r.messageKey]),e(n,r)}},ah=function(e,t,r){var n=i._audit.data.checks[e]
if(!n)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!n.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return nh(n.messages[t],r)},oh=function(e,t,r){var n=((r.rules&&r.rules[t]||{}).checks||{})[e.id],a=(r.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),n&&(n.hasOwnProperty("enabled")&&(o=n.enabled),n.hasOwnProperty("options")&&(i=n.options)),{enabled:o,options:i,absolutePaths:r.absolutePaths}}
function ih(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r
return t&&"object"===o(t)?t:"object"!==o(n)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:uh(n),timestamp:(new Date).toISOString(),url:null===(e=n.location)||void 0===e?void 0:e.href}}function uh(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,r=e.navigator,n=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},u=i.angle,s=i.type
return{userAgent:r.userAgent,windowWidth:a,windowHeight:n,orientationAngle:u,orientationType:s}}function sh(e,t){var r=t.focusable,n=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:r&&lh(e),size:ch(e),page:n}}function lh(e){var t=e.getAttribute("tabindex")
if(!t)return!0
var r=parseInt(t,10)
return isNaN(r)||r>=0}function ch(e){var t=parseInt(e.getAttribute("width"),10),r=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(r)){var n=e.getBoundingClientRect()
t=isNaN(t)?n.width:t,r=isNaN(r)?n.height:r}return{width:t,height:r}}function dh(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[]
vh(t)||(t=[t])
for(var a=0;a<t.length;a++){var o=(e=t[a])instanceof r.Node?e:"string"==typeof e?[e]:(hh(e)?(function(e){bh(Array.isArray(e.fromFrames),"fromFrames property must be an array"),bh(e.fromFrames.every((function(e){return!yh(e,"fromFrames")})),"Invalid context; fromFrames selector must be appended, rather than nested"),bh(!yh(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):mh(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,r=[],n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a=t.value
if(mh(a)&&(Dh(a),a=a.fromShadowDom),"string"!=typeof a&&!gh(a))return
r.push(a)}}catch(e){n.e(e)}finally{n.f()}return r}}(e))
o&&n.push(o)}return n}function ph(e){return["include","exclude"].some((function(t){return yh(e,t)&&fh(e[t])}))}function fh(e){return"string"==typeof e||e instanceof r.Node||hh(e)||mh(e)||vh(e)}function hh(e){return yh(e,"fromFrames")}function mh(e){return yh(e,"fromShadowDom")}function Dh(e){bh(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),bh(e.fromShadowDom.every((function(e){return!yh(e,"fromFrames")})),"shadow selector must be inside fromFrame instead"),bh(e.fromShadowDom.every((function(e){return!yh(e,"fromShadowDom")})),"fromShadowDom selector must be appended, rather than nested")}function gh(e){return Array.isArray(e)&&e.every((function(e){return"string"==typeof e}))}function vh(e){return e&&"object"===o(e)&&"number"==typeof e.length&&e instanceof r.Node==0}function bh(e,t){ma(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function yh(e,t){return!(!e||"object"!==o(e))&&Object.prototype.hasOwnProperty.call(e,t)}function Fh(e,t){for(var n=[],a=0,o=e[t].length;a<o;a++){var i=e[t][a]
if(i instanceof r.Node)i.documentElement instanceof r.Node?n.push(e.flatTree[0]):n.push(Ka(i))
else if(i&&i.length)if(i.length>1)wh(e,t,i)
else{var u=Dm(i[0])
n.push.apply(n,q(u.map((function(e){return Ka(e)}))))}}return n.filter((function(e){return e}))}function wh(e,t,r){e.frames=e.frames||[],Dm(r.shift()).forEach((function(n){var a=e.frames.find((function(e){return e.node===n}))
a||(a=sh(n,e),e.frames.push(a)),a[t].push(r)}))}function Eh(e,t){var n,i,u,s,l,c=this
e=to(e),this.frames=[],this.page="boolean"==typeof(null===(n=e)||void 0===n?void 0:n.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(u=e)||void 0===u?void 0:u.focusable)||e.focusable,this.size="object"===o(null===(s=e)||void 0===s?void 0:s.size)?e.size:{},e=function(e){if(ph(e)){var t=" must be used inside include or exclude. It should not be on the same object."
bh(!yh(e,"fromFrames"),"fromFrames"+t),bh(!yh(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!fh(e))return{include:[a],exclude:[]}
e={include:e,exclude:[]}}var r=dh(e.include)
return 0===r.length&&r.push(a),{include:r,exclude:dh(e.exclude)}}(e),this.flatTree=null!=t?t:Gf(function(e){for(var t=e.include,n=e.exclude,o=Array.from(t).concat(Array.from(n)),i=0;i<o.length;i++){var u=o[i]
if(u instanceof r.Element)return u.ownerDocument.documentElement
if(u instanceof r.Document)return u.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=Fh(this,"include"),this.exclude=Fh(this,"exclude"),dm("frame, iframe",this).forEach((function(e){Ih(e,c)&&function(e,t){Gs(t)&&!ci(e.frames,"node",t)&&e.frames.push(sh(t,e))}(c,e.actualNode)})),void 0===this.page&&(this.page=1===(l=this.include).length&&l[0].actualNode===a.documentElement,this.frames.forEach((function(e){e.page=c.page}))),function(e){if(0===e.include.length&&0===e.frames.length){var t=ti.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(qh)}function Ch(e){return!1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iframes?[]:new Eh(e).frames.map((function(e){var t=e.node,r=j(e,F)
return r.initiator=!1,{frameSelector:Ua(t),frameContext:r}}))}function xh(e){var t=i._audit.rules.find((function(t){return t.id===e}))
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}function Ah(e,t){var r=e.getPropertyValue(t)
return["scroll","auto"].includes(r)}var kh=xa((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(n||a){var o=r.getComputedStyle(e),i=Ah(o,"overflow-x"),u=Ah(o,"overflow-y")
return n&&i||a&&u?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}}))
function Nh(e){return Array.from(e.children||e.childNodes||[]).reduce((function(e,t){var r=kh(t)
return r&&e.push(r),e.concat(Nh(t))}),[])}var Th=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=e.document.documentElement
return[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}].concat(Nh(a.body))}
function Bh(){return to(os)}var Rh,_h=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var r=t.data,n=t.isCrossOrigin,a=void 0!==n&&n,o=t.shadowId,i=t.root,u=t.priority,s=t.isLink,l=void 0!==s&&s,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(r.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(r))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:u}}},Sh=function(e){if(Rh&&Rh.parentNode)return void 0===Rh.styleSheet?Rh.appendChild(a.createTextNode(e)):Rh.styleSheet.cssText+=e,Rh
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(Rh=a.createElement("style")).type="text/css",void 0===Rh.styleSheet?Rh.appendChild(a.createTextNode(e)):Rh.styleSheet.cssText=e,t.appendChild(Rh),Rh}},Oh=function e(t,n){var a=Ka(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=r.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!n&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},Mh=function(e){var t,r,n=null!==(t=null===(r=e.props)||void 0===r?void 0:r.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!os.htmlElms[n]}
function Ih(e,t){var r=t.include,n=void 0===r?[]:r,a=t.exclude,o=void 0===a?[]:a,i=n.filter((function(t){return hi(t,e)}))
if(0===i.length)return!1
var u=o.filter((function(t){return hi(t,e)}))
if(0===u.length)return!0
var s=Ph(i)
return hi(Ph(u),s)}function Ph(e){var t,r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a=r.value
t&&hi(a,t)||(t=a)}}catch(e){n.e(e)}finally{n.f()}return t}function jh(e,t){return e.length===t.length&&e.every((function(e,r){var n=t[r]
return Array.isArray(e)?e.length===n.length&&e.every((function(e,t){return n[t]===e})):e===n}))}var qh=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1}
function Lh(e){return e instanceof ta?{vNode:e,domNode:e.actualNode}:{vNode:Ka(e),domNode:e}}var zh=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter((function(e){return 3===e.type}))
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:r,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var u=i.filter((function(e){return e.href})).map((function(e){return e.href})).filter((function(e){return!n.includes(e)})).map((function(e,a){var o=[].concat(q(r),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return Hh(e,t,o,n,i)})),s=o.filter((function(e){return 3!==e.type}))
return s.length?(u.push(Promise.resolve(t.convertDataToStylesheet({data:s.map((function(e){return e.cssText})).join(),isCrossOrigin:a,priority:r,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(u)):Promise.all(u)},Vh=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
return function(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}(e)?zh(e,t,r,n,a):Hh(e.href,t,r,n,!0)},Hh=function(e,t,n,a,o){return a.push(e),new Promise((function(t,n){var a=new r.XMLHttpRequest
a.open("GET",e),a.timeout=Zn.preload.timeout,a.addEventListener("error",n),a.addEventListener("timeout",n),a.addEventListener("loadend",(function(e){if(e.loaded&&a.responseText)return t(a.responseText)
n(a.responseText)})),a.send()})).then((function(e){var r=t.convertDataToStylesheet({data:e,isCrossOrigin:o,priority:n,root:t.rootNode,shadowId:t.shadowId})
return Vh(r.sheet,t,n,a,r.isCrossOrigin)}))},Uh=function(){function e(){if(r.performance&&r.performance)return r.performance.now()}var t=null,n=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){r.performance&&void 0!==r.performance.mark&&r.performance.mark(e)},measure:function(e,t,n){r.performance&&void 0!==r.performance.measure&&r.performance.measure(e,t,n)},logMeasures:function(e){function t(e){Jn("Measure "+e.name+" took "+e.duration+"ms")}if(r.performance&&void 0!==r.performance.getEntriesByType)for(var n=r.performance.getEntriesByName("mark_axe_start")[0],a=r.performance.getEntriesByType("measure").filter((function(e){return e.startTime>=n.startTime})),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-n},reset:function(){t||(t=e()),n=e()}}}(),$h=Uh
function Gh(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),r=t?"pointer-events":"visibility",n=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,u,s,l=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===l.indexOf(i);)l.push(i),c.push({value:i.style.getPropertyValue(r),priority:i.style.getPropertyPriority(r)}),i.style.setProperty(r,n,"important")
for(l.indexOf(a.documentElement)<l.length-1&&(l.splice(l.indexOf(a.documentElement),1),l.push(a.documentElement)),u=c.length;s=c[--u];)l[u].style.setProperty(r,s.value?s.value:"",s.priority)
return a.head.removeChild(o),l}}"function"==typeof r.addEventListener&&(a.elementsFromPoint=Gh())
var Wh=function(e,t){return e.concat(t).filter((function(e,t,r){return r.indexOf(e)===t}))}
function Yh(e,t,r,n,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=r,o.parentShadowId=n,o}var Qh=function(e,t,r){e=Array.isArray(e)?e:[e]
var n=mo(t)
return zf(e,n,r)||function(e,t,r){for(var n=Qa.get("qsa.recycledLocalVariables",(function(){return[]})),a=[],o=Yh(Array.isArray(e)?e:[e],t,null,e[0].shadowId,n.pop()),i=[];o.vNodesIndex<o.vNodes.length;){for(var u,s,l=o.vNodes[o.vNodesIndex++],c=null,d=null,p=((null===(u=o.anyLevel)||void 0===u?void 0:u.length)||0)+((null===(s=o.thisLevel)||void 0===s?void 0:s.length)||0),f=!1,h=0;h<p;h++){var m,D,g,v=h<((null===(m=o.anyLevel)||void 0===m?void 0:m.length)||0)?o.anyLevel[h]:o.thisLevel[h-((null===(D=o.anyLevel)||void 0===D?void 0:D.length)||0)]
if((!v[0].id||l.shadowId===o.parentShadowId)&&go(l,v[0]))if(1===v.length)f||r&&!r(l)||(i.push(l),f=!0)
else{var b=v.slice(1)
if(!1===[" ",">"].includes(b[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+v[1].combinator)
">"===b[0].combinator?(c=c||[]).push(b):(d=d||[]).push(b)}v[0].id&&l.shadowId!==o.parentShadowId||null===(g=o.anyLevel)||void 0===g||!g.includes(v)||(d=d||[]).push(v)}for(l.children&&l.children.length&&(a.push(o),o=Yh(l.children,d,c,l.shadowId,n.pop()));o.vNodesIndex===o.vNodes.length&&a.length;)n.push(o),o=a.pop()}return i}(e,n,r)},Kh=function(e){var t=e.treeRoot,r=function(e){var t=[],r=Qh(e,"*",(function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)})).map((function(e){return{shadowId:e.shadowId,rootNode:yi(e.actualNode)}}))
return Wh(r,[])}(void 0===t?i._tree[0]:t)
if(!r.length)return Promise.resolve()
var n=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var r=[]
return e.forEach((function(e,n){var a=e.rootNode,o=e.shadowId,i=function(e,t,r){var n
return n=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(Zh).reduce((function(r,n){var a=n.nodeName.toUpperCase(),o="STYLE"===a?n.textContent:n,i=t({data:o,isLink:"LINK"===a,root:e})
return i.sheet&&r.push(i.sheet),r}),[])}(e,r):function(e){return Array.from(e.styleSheets).filter((function(e){return!!e.media&&Jh(e.media.mediaText)}))}(e),function(e){var t=[]
return e.filter((function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)}))}(n)}(a,o,t)
if(!i)return Promise.all(r)
var u=n+1,s={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:u},l=[],c=Promise.all(i.map((function(e,t){return Vh(e,s,[u,t],l)})))
r.push(c)})),Promise.all(r)}(r,_h(n)).then((function(e){return Xh(e)}))}
function Xh(e){return e.reduce((function(e,t){return Array.isArray(t)?e.concat(Xh(t)):e.concat(t)}),[])}function Zh(e){var t=e.nodeName.toUpperCase(),r=e.getAttribute("href"),n=e.getAttribute("rel"),a="LINK"===t&&r&&n&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&Jh(e.media)}function Jh(e){return!e||!e.toUpperCase().includes("PRINT")}var em=function(e){var t=e.treeRoot,r=void 0===t?i._tree[0]:t,n=Qh(r,"video, audio",(function(e){var t=e.actualNode
return t.hasAttribute("src")?!!t.getAttribute("src"):!(Array.from(t.getElementsByTagName("source")).filter((function(e){return!!e.getAttribute("src")})).length<=0)}))
return Promise.all(n.map((function(e){var t,r=e.actualNode
return t=r,new Promise((function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",(function r(){t.removeEventListener("loadedmetadata",r),e(t)}))}))})))}
function tm(e){var t={cssom:Kh,media:em}
return rm(e)?new Promise((function(r,n){var a=nm(e),o=a.assets,i=a.timeout,u=setTimeout((function(){return n(new Error("Preload assets timed out."))}),i)
Promise.all(o.map((function(r){return t[r](e).then((function(e){return function(e,t,r){return(t=Y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},r,e)}))}))).then((function(e){var t=e.reduce((function(e,t){return z({},e,t)}),{})
clearTimeout(u),r(t)})).catch((function(e){clearTimeout(u),n(e)}))})):Promise.resolve()}function rm(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function nm(e){var t=Zn.preload,r=t.assets,n=t.timeout,a={assets:r,timeout:n}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every((function(e){return r.includes(e.toLowerCase())})))throw new Error("Requested assets, not supported. Supported assets are: ".concat(r.join(", "),"."))
return a.assets=Wh(e.preload.assets.map((function(e){return e.toLowerCase()})),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}function am(e){var t=i._audit.data.checks||{},r=i._audit.data.rules||{},n=ci(i._audit.rules,"id",e.id)||{}
e.tags=to(n.tags||[])
var a=om(t,!0,n),o=om(t,!1,n)
e.nodes.forEach((function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)})),Di(e,to(r[e.id]||{}))}function om(e,t,r){return function(n){var a=e[n.id]||{},i=a.messages||{},u=Object.assign({},a)
delete u.messages,r.reviewOnFail||void 0!==n.result?u.message=n.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(n.data)||(u.message=function(e,t){function r(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:Xf()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:r(t)
try{var n=t.incomplete[e.missingData[0].reason]
if(!n)throw new Error
return n}catch(n){return"string"==typeof e.missingData?t.incomplete[e.missingData]:r(t)}}(n.data,i)),u.message||(u.message=i.incomplete)),"function"!=typeof u.message&&(u.message=nh(u.message,n.data)),Di(n,u)}}var im=function(e,t){return Qh(e,t)}
function um(e,t){var r,n,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(r=t.include||[],r=Array.isArray(r)?r:[r],n=t.exclude||[],n=(n=Array.isArray(n)?n:[n]).concat(a.filter((function(e){return-1===r.indexOf(e)})))):(r=Array.isArray(t)?t:[t],n=a.filter((function(e){return-1===r.indexOf(e)}))),!!(r.some((function(t){return-1!==e.tags.indexOf(t)}))||0===r.length&&!1!==e.enabled)&&n.every((function(t){return-1===e.tags.indexOf(t)}))}var sm=function(e,t,r){var n=r.runOnly||{},a=(r.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===n.type?-1!==n.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===n.type&&n.values?um(e,n.values):um(e,[]))}
function lm(e,t){if(!t)return e
var r=e.cloneNode(!1),n=wa(r)
if(1===r.nodeType){var a=r.outerHTML
r=Qa.get(a,(function(){return cm(r,n,e,t)}))}else r=cm(r,n,e,t)
return Array.from(e.childNodes).forEach((function(e){r.appendChild(lm(e,t))})),r}function cm(e,t,r,n){return t?(e=a.createElement(e.nodeName),Array.from(t).forEach((function(t){(function(e,t,r){return void 0!==r[t]&&(!0===r[t]||Ea(e,r[t]))})(r,t.name,n)||e.setAttribute(t.name,t.value)})),e):e}function dm(e,t){var r,n=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var u=i._selectCache[a]
if(u.selector===e)return u.result}for(var s=t.include.reduce((function(e,t){return e.length&&hi(e[e.length-1],t)||e.push(t),e}),[]),l=function(e){return e.exclude&&0!==e.exclude.length?function(t){return Ih(t,e)}:null}(t),c=0;c<s.length;c++)r=s[c],n=pm(n,Qh(r,e,l))
return i._selectCache&&i._selectCache.push({selector:e,result:n}),n}function pm(e,t){if(0===e.length)return t
if(e.length<t.length){var r=e
e=t,t=r}for(var n=0,a=t.length;n<a;n++)e.includes(t[n])||e.push(t[n])
return e}var fm=function(e){e.forEach((function(e){return function(e,t,n){if(e===r)return e.scroll(n,t)
e.scrollTop=t,e.scrollLeft=n}(e.elm,e.top,e.left)}))}
function hm(e){return mm(Array.isArray(e)?q(e):[e],a)}function mm(e,t){var r=e.shift(),n=r?t.querySelector(r):null
return 0===e.length?n:null!=n&&n.shadowRoot?mm(e,n.shadowRoot):null}function Dm(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=Array.isArray(e)?q(e):[e]
return 0===e.length?[]:gm(r,t)}function gm(e,t){var r,n=U(r=e)||L(r)||K(r)||H(),a=n[0],o=n.slice(1),i=t.querySelectorAll(a)
if(0===o.length)return Array.from(i)
var u,s=[],l=Q(i)
try{for(l.s();!(u=l.n()).done;){var c=u.value
null!=c&&c.shadowRoot&&s.push.apply(s,q(gm(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return s}var vm=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},bm=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function ym(e){e=Array.isArray(e)?e:bm
var t=[]
return e.forEach((function(e,r){var n=String.fromCharCode(r+96).replace("`","")
Array.isArray(e)?t=t.concat(ym(e).map((function(e){return n+e}))):t.push(n)})),t}var Fm=function(e){for(var t=bm;e.length<3;)e+="`"
for(var r=0;r<=e.length-1;r++)if(!(t=t[e.charCodeAt(r)-96]))return!1
return!0},wm=function(e){function t(e){var r,n,a,i
return $(this,t),(r=k(this,t))._props=function(e){var t,r,n,a=null!==(t=e.nodeName)&&void 0!==t?t:Cm[e.nodeType],o=null!==(r=null!==(n=e.nodeType)&&void 0!==n?n:Em[e.nodeName])&&void 0!==r?r:1
ma("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),ma("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),vm().includes(i)||(i="text"))
var u=z({},e,{nodeType:o,nodeName:a})
return i&&(u.type=i),delete u.attributes,Object.freeze(u)}(e),r._attrs=(n=e.attributes,a=void 0===n?{}:n,i={htmlFor:"for",className:"class"},Object.keys(a).reduce((function(e,t){var r=a[t]
return ma("object"!==o(r)||null===r,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==r&&(e[i[t]||t]=null!==r?String(r):null),e}),{})),r}return B(t,e),W(t,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}])}(ta),Em={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},Cm={}
Object.keys(Em).forEach((function(e){Cm[Em[e]]=e}))
var xm,Am=wm,km=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var r=i.utils.queue(),n=[]
Object.keys(i.plugins).forEach((function(e){r.defer((function(t){var r=function(e){n.push(e),t()}
try{i.plugins[e].cleanup(t,r)}catch(e){r(e)}}))}))
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach((function(e){r.defer((function(t,r){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,r)}))})),r.then((function(r){0===n.length?e(r):t(n)})).catch(t)},Nm={}
function Tm(e){return Nm.hasOwnProperty(e)}function Bm(e){return"string"==typeof e&&Nm[e]?Nm[e]:"function"==typeof e?e:xm}var Rm={}
le(Rm,{getAllCells:function(){return _m},getCellPosition:function(){return ps},getHeaders:function(){return Om},getScope:function(){return fs},isColumnHeader:function(){return hs},isDataCell:function(){return Mm},isDataTable:function(){return Im},isHeader:function(){return Pm},isRowHeader:function(){return ms},toArray:function(){return ds},toGrid:function(){return ds},traverse:function(){return qm}})
var _m=function(e){var t,r,n,a,o=[]
for(t=0,n=e.rows.length;t<n;t++)for(r=0,a=e.rows[t].cells.length;r<a;r++)o.push(e.rows[t].cells[r])
return o}
function Sm(e,t,r){for(var n,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?ms:hs,u=r[t.y][t.x],s=u.colSpan-1,l=u.getAttribute("rowspan"),c=(0===parseInt(l)||0===u.rowspan?r.length:u.rowSpan)-1,d=t.y+c,p=t.x+s,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],D=d;D>=f&&!n;D--)for(var g=p;g>=h;g--){var v=r[D]?r[D][g]:void 0
if(v){var b=i.utils.getNodeFromTree(v)
if(b[a]){n=b[a]
break}m.push(v)}}return n=(n||[]).concat(m.filter(o)),m.forEach((function(e){i.utils.getNodeFromTree(e)[a]=n})),n}var Om=function(e,t){if(e.getAttribute("headers")){var r=Xu(e,"headers")
if(r.filter((function(e){return e})).length)return r}t||(t=ds(Ci(e,"table")))
var n=ps(e,t),a=Sm("row",n,t),o=Sm("col",n,t)
return[].concat(a,o).reverse()},Mm=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return us(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},Im=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!Gu(e))return!1
if("true"===e.getAttribute("contenteditable")||Ci(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===$l(t))return!0
if("0"===e.getAttribute("datatable"))return!1
if(e.getAttribute("summary"))return!0
if(e.tHead||e.tFoot||e.caption)return!0
for(var n=0,a=e.children.length;n<a;n++)if("COLGROUP"===e.children[n].nodeName.toUpperCase())return!0
for(var o,i,u=0,s=e.rows.length,l=!1,c=0;c<s;c++)for(var d=0,p=(o=e.rows[c]).cells.length;d<p;d++){if("TH"===(i=o.cells[d]).nodeName.toUpperCase())return!0
if(l||i.offsetWidth===i.clientWidth&&i.offsetHeight===i.clientHeight||(l=!0),i.getAttribute("scope")||i.getAttribute("headers")||i.getAttribute("abbr"))return!0
if(["columnheader","rowheader"].includes((i.getAttribute("role")||"").toLowerCase()))return!0
if(1===i.children.length&&"ABBR"===i.children[0].nodeName.toUpperCase())return!0
u++}if(e.getElementsByTagName("table").length)return!1
if(s<2)return!1
var f,h,m=e.rows[Math.ceil(s/2)]
if(1===m.cells.length&&1===m.cells[0].colSpan)return!1
if(m.cells.length>=5)return!0
if(l)return!0
for(c=0;c<s;c++){if(o=e.rows[c],f&&f!==r.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=r.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==r.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=r.getComputedStyle(o).getPropertyValue("background-image")}return s>=20||!(Wi(e).width>.95*Yi(r).width)&&!(u<10)&&!e.querySelector("object, embed, iframe, applet")},Pm=function(e){if(hs(e)||ms(e))return!0
if(e.getAttribute("id")){var t=ga(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function jm(e,t,r,n){var a,o=r[t.y]?r[t.y][t.x]:void 0
return o?"function"==typeof n&&!0===(a=n(o,t,r))?[o]:((a=jm(e,{x:t.x+e.x,y:t.y+e.y},r,n)).unshift(o),a):[]}var qm=function(e,t,r,n){if(Array.isArray(t)&&(n=r,r=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return jm(e,{x:t.x+e.x,y:t.y+e.y},r,n)},Lm={}
le(Lm,{allowedAttr:function(){return zm},arialabelText:function(){return es},arialabelledbyText:function(){return Ju},getAccessibleRefs:function(){return Um},getElementUnallowedRoles:function(){return Ym},getExplicitRole:function(){return ss},getImplicitRole:function(){return Ms},getOwnedVirtual:function(){return Us},getRole:function(){return Ls},getRoleType:function(){return $l},getRolesByType:function(){return Km},getRolesWithNameFromContents:function(){return Zm},implicitNodes:function(){return nD},implicitRole:function(){return Ms},isAccessibleRef:function(){return aD},isAriaRoleAllowedOnElement:function(){return $m},isComboboxPopup:function(){return oD},isUnsupportedRole:function(){return is},isValidRole:function(){return us},label:function(){return uD},labelVirtual:function(){return Cl},lookupTable:function(){return rD},namedFromContents:function(){return Hs},requiredAttr:function(){return sD},requiredContext:function(){return lD},requiredOwned:function(){return cD},validateAttr:function(){return pD},validateAttrValue:function(){return dD}})
var zm=function(e){var t=os.ariaRoles[e],r=q(cs())
return t?(t.allowedAttrs&&r.push.apply(r,q(t.allowedAttrs)),t.requiredAttrs&&r.push.apply(r,q(t.requiredAttrs)),r):r},Vm=/^idrefs?$/
function Hm(e,t,r){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var n=e.getAttribute("for")
t.has(n)?t.get(n).push(e):t.set(n,[e])}for(var a=0;a<r.length;++a){var o=r[a],i=Ds(e.getAttribute(o)||"")
if(i){var u,s=Q(qf(i))
try{for(s.s();!(u=s.n()).done;){var l=u.value
t.has(l)?t.get(l).push(e):t.set(l,[e])}}catch(e){s.e(e)}finally{s.f()}}}}for(var c=0;c<e.childNodes.length;c++)1===e.childNodes[c].nodeType&&Hm(e.childNodes[c],t,r)}var Um=function(e){var t
e=e.actualNode||e
var r=Fi(e)
r=r.documentElement||r
var n=Qa.get("idRefsByRoot",(function(){return new Map})),a=n.get(r)
return a||(a=new Map,n.set(r,a),Hm(r,a,Object.keys(os.ariaAttrs).filter((function(e){var t=os.ariaAttrs[e].type
return Vm.test(t)})))),null!==(t=a.get(e.id))&&void 0!==t?t:[]},$m=function(e,t){var r=e instanceof ta?e:Ka(e),n=Ms(r),a=Os(r)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==n&&!!a.allowedRoles},Gm=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],Wm={header:"banner",footer:"contentinfo"},Ym=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=Lh(e).vNode
if(!Mh(r))return[]
var n=r.props.nodeName,a=Ms(r)||Wm[n]
return function(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var r=qf(e.attr("role").toLowerCase())
t=t.concat(r)}return t.filter((function(e){return us(e)}))}(r).filter((function(e){return!function(e,t,r,n){return!(!r||e!==n)||(!Gm.includes(e)||$l(e)===n)&&$m(t,e)}(e,r,t,a)}))},Qm=function(e){return Object.keys(os.ariaRoles).filter((function(t){return os.ariaRoles[t].type===e}))},Km=function(e){return Qm(e)},Xm=function(){return Qa.get("ariaRolesNameFromContent",(function(){return Object.keys(os.ariaRoles).filter((function(e){return os.ariaRoles[e].nameFromContent}))}))},Zm=function(){return Xm()},Jm=function(e){return null===e},eD=function(e){return null!==e},tD={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
tD.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:eD}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:eD}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:eD}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:eD}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:eD}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:eD}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:eD}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:eD}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:eD}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:eD}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:eD}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:eD}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:eD}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:eD}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},tD.implicitHtmlRole=bs,tD.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:eD}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:eD}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],tD.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:Jm}},{nodeName:"img",attributes:{alt:Jm}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],tD.evaluateRoleForElement={A:function(e){var t=e.node,r=e.out
return"http://www.w3.org/2000/svg"===t.namespaceURI||!t.href.length||r},AREA:function(e){return!e.node.href},BUTTON:function(e){var t=e.node,r=e.role,n=e.out
return"menu"===t.getAttribute("type")?"menuitem"===r:n},IMG:function(e){var t=e.node,r=e.role,n=e.out
switch(t.alt){case null:return n
case"":return"presentation"===r||"none"===r
default:return"presentation"!==r&&"none"!==r}},INPUT:function(e){var t=e.node,r=e.role,n=e.out
switch(t.type){case"button":case"image":return n
case"checkbox":return!("button"!==r||!t.hasAttribute("aria-pressed"))||n
case"radio":return"menuitemradio"===r
case"text":return"combobox"===r||"searchbox"===r||"spinbutton"===r
case"tel":return"combobox"===r||"spinbutton"===r
case"url":case"search":case"email":return"combobox"===r
default:return!1}},LI:function(e){var t=e.node,r=e.out
return!i.utils.matchesSelector(t,"ol li, ul li")||r},MENU:function(e){return"context"!==e.node.getAttribute("type")},OPTION:function(e){var t=e.node
return!i.utils.matchesSelector(t,"select > option, datalist > option, optgroup > option")},SELECT:function(e){var t=e.node,r=e.role
return!t.multiple&&t.size<=1&&"menu"===r},SVG:function(e){var t=e.node,r=e.out
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||r}},tD.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var rD=tD,nD=function(e){var t=null,r=rD.role[e]
return r&&r.implicit&&(t=to(r.implicit)),t},aD=function(e){return!!Um(e).length}
function oD(e){var t,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).popupRoles,n=Ls(e)
if(null!==(t=r)&&void 0!==t||(r=ts["aria-haspopup"].values),!r.includes(n))return!1
var a=function(e){for(;e=e.parent;)if(null!==Ls(e,{noPresentational:!0}))return e
return null}(e)
if(iD(a))return!0
var o=e.props.id
if(!o)return!1
if(!e.actualNode)throw new Error("Unable to determine combobox popup without an actualNode")
var i=yi(e.actualNode).querySelectorAll('[aria-owns~="'.concat(o,'"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(o,'"][role~="combobox"]:not(select)'))
return Array.from(i).some(iD)}var iD=function(e){return e&&"combobox"===Ls(e)},uD=function(e){return e=Ka(e),Cl(e)},sD=function(e){var t=os.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?q(t.requiredAttrs):[]},lD=function(e){var t=os.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?q(t.requiredContext):null},cD=function(e){var t=os.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?q(t.requiredOwned):null},dD=function(e,t){var r,n,a=(e=e instanceof ta?e:Ka(e)).attr(t),o=os.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(n=qf(a)).reduce((function(e,t){return e&&o.values.includes(t)}),0!==n.length)
case"idref":try{var i=Fi(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return Xu(e,t).some((function(e){return!!e}))
case"string":return""!==a.trim()
case"decimal":return!(!(r=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!r[1]&&!r[2])
case"int":var u=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=u}},pD=function(e){return!!os.ariaAttrs[e]}
function fD(e){return"caption"===e.props.nodeName}var hD={}
le(hD,{getAriaRolesByType:function(){return Qm},getAriaRolesSupportingNameFromContent:function(){return Xm},getElementSpec:function(){return Os},getElementsByContentType:function(){return ls},getGlobalAriaAttrs:function(){return cs},implicitHtmlRoles:function(){return bs}})
var mD=["alert","log","status"]
function DD(e,t){var r=e.actualNode
if("button"===Ls(e)||function(e,t){var r=e.actualNode,n=Ls(e),a=(r.getAttribute("aria-live")||"").toLowerCase().trim(),o=Qm("landmark")
return!!(["assertive","polite"].includes(a)||mD.includes(n)||o.includes(n)||t.regionMatcher&&Ss(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Ff(e.actualNode)&&ju(e.actualNode,"href")||!Gs(r)){for(var n=e;n;)n._hasRegionDescendant=!0,n=n.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return r!==a.body&&jl(r,!0)&&!function(e){return["none","presentation"].includes(Ls(e))&&!Il(e)}(e)?[e]:e.children.filter((function(e){return 1===e.actualNode.nodeType})).map((function(e){return DD(e,t)})).reduce((function(e,t){return e.concat(t)}),[])}function gD(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function vD(e){var t=r.getComputedStyle(function(e){for(var t=e,r=e.textContent.trim(),n=r;n===r&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,n=e.children[a].textContent.trim()}while(""===n&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:gD(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function bD(e,t,r){return r.reduce((function(r,n){return r||(!n.size||e.fontSize/n.size>t.fontSize)&&(!n.weight||e.fontWeight-n.weight>t.fontWeight)&&(!n.italic||e.isItalic&&!t.isItalic)}),!1)}var yD=/[;,\s]/,FD=/^[0-9.]+$/,wD={}
le(wD,{aria:function(){return Lm},color:function(){return ED},dom:function(){return bi},forms:function(){return ng},matches:function(){return Ss},math:function(){return tu},standards:function(){return hD},table:function(){return Rm},text:function(){return Ku},utils:function(){return ra}})
var ED={}
le(ED,{Color:function(){return gf},centerPointOfRect:function(){return CD},elementHasImage:function(){return rc},elementIsDistinct:function(){return AD},filteredRectStack:function(){return ND},flattenColors:function(){return RD},flattenShadowColors:function(){return SD},getBackgroundColor:function(){return KD},getBackgroundStack:function(){return OD},getContrast:function(){return JD},getForegroundColor:function(){return eg},getOwnBackgroundColor:function(){return bf},getRectStack:function(){return kD},getStackingContext:function(){return $D},getStrokeColorsFromShadows:function(){return LD},getTextShadowColors:function(){return HD},hasValidContrastRatio:function(){return rg},incompleteData:function(){return tc},parseTextShadows:function(){return VD},stackingContextToColor:function(){return GD}})
var CD=function(e){if(!(e.left>r.innerWidth||e.top>r.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),r.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),r.innerHeight-1)}}
function xD(e){return e.getPropertyValue("font-family").split(/[,;]/g).map((function(e){return e.trim().toLowerCase()}))}var AD=function(e,t){var n=r.getComputedStyle(e)
if("none"!==n.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce((function(e,t){var r=new gf
return r.parseString(n.getPropertyValue(t+"-color")),e||"none"!==n.getPropertyValue(t+"-style")&&parseFloat(n.getPropertyValue(t+"-width"))>0&&0!==r.alpha}),!1))return!0
var a=r.getComputedStyle(t)
if(xD(n)[0]!==xD(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce((function(e,t){return e||n.getPropertyValue(t)!==a.getPropertyValue(t)}),!1),i=n.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},kD=function(e){var t=Hu(e),r=_l(e)
return!r||r.length<=1?[t]:r.some((function(e){return void 0===e}))?null:(r.splice(0,0,t),r)},ND=function(e){var t=kD(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var r,n=t.shift()
return t.forEach((function(a,o){if(0!==o){var i=t[o-1],u=t[o]
r=i.every((function(e,t){return e===u[t]}))||n.includes(e)}})),r?t[0]:(tc.set("bgColor","elmPartiallyObscuring"),null)}return tc.set("bgColor","outsideViewport"),null},TD=["hue","saturation","color","luminosity"],BD={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t},hue:function(e,t){return t.setSaturation(e.getSaturation()).setLuminosity(e.getLuminosity())},saturation:function(e,t){return e.setSaturation(t.getSaturation()).setLuminosity(e.getLuminosity())},color:function(e,t){return t.setLuminosity(e.getLuminosity())},luminosity:function(e,t){return e.setLuminosity(t.getLuminosity())}}
function RD(e,t){var r,n=function(e,t,r){if(TD.includes(r))return BD[r](e,t)
var n=new gf
return["r","g","b"].forEach((function(a){n[a]=BD[r](e[a],t[a])})),n}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal"),a=_D(e.red,e.alpha,t.red,t.alpha,255*n.r),o=_D(e.green,e.alpha,t.green,t.alpha,255*n.g),i=_D(e.blue,e.alpha,t.blue,t.alpha,255*n.b),u=(r=e.alpha+t.alpha*(1-e.alpha),Math.min(Math.max(0,r),1))
if(0===u)return new gf(a,o,i,u)
var s=Math.round(a/u),l=Math.round(o/u),c=Math.round(i/u)
return new gf(s,l,c,u)}function _D(e,t,r,n,a){return t*(1-n)*e+t*n*a+(1-t)*n*r}function SD(e,t){var r=e.alpha,n=(1-r)*t.red+r*e.red,a=(1-r)*t.green+r*e.green,o=(1-r)*t.blue+r*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new gf(n,a,o,i)}function OD(e){for(var t=_l(e).map((function(t){return function(e){var t=e.indexOf(a.body),n=e,o=bf(r.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!rc(a.documentElement)){t>1&&(n.splice(t,1),n.push(a.body))
var i=n.indexOf(a.documentElement)
i>0&&(n.splice(i,1),n.push(a.documentElement))}return n}(t=Af(t,e))})),n=0;n<t.length;n++){var o=t[n]
if(o[0]!==e)return tc.set("bgColor","bgOverlap"),null
if(0!==n&&!MD(o,t[0]))return tc.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function MD(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var r=0;r<e.length;++r)if(e[r]!==t[r])return!1
return!0}var ID=.54,PD=.5,jD=1.5,qD=["top","right","bottom","left"]
function LD(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreEdgeCount,r=void 0!==t&&t,n=function(e){var t,r={},n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a,o=t.value,i=o.colorStr,u=o.pixels
null!==(a=r[i])&&void 0!==a||(r[i]={top:[],right:[],bottom:[],left:[]})
var s=r[i],l=V(u,2),c=l[0],d=l[1]
c>PD?s.right.push(c):-c>PD&&s.left.push(-c),d>PD?s.bottom.push(d):-d>PD&&s.top.push(-d)}}catch(e){n.e(e)}finally{n.f()}return r}(e),a=Object.entries(n).map((function(e){var t=V(e,2),r=t[0],n=t[1],a=qD.filter((function(e){return 0!==n[e].length})).length
return{colorStr:r,sides:n,edgeCount:a}}))
return!r&&a.some((function(e){var t=e.edgeCount
return t>1&&t<4}))?null:a.map(zD).filter((function(e){return null!==e}))}function zD(e){var t=e.colorStr,r=e.sides
if(4!==e.edgeCount)return null
var n=new gf
n.parseString(t)
var a=0,o=!0
return qD.forEach((function(e){a+=r[e].length/4,o&&(o=r[e].every((function(e){return e>jD})))})),o||(n.alpha=1-Math.pow(ID,a)),n}function VD(e){var t={pixels:[]},r=e.trim(),n=[t]
if(!r)return[]
for(;r;){var a=r.match(/^[a-z]+(\([^)]+\))?/i)||r.match(/^#[0-9a-f]+/i),o=r.match(/^([0-9.-]+)px/i)||r.match(/^(0)/)
if(a)ma(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),r=r.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){ma(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),r=r.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==r[0])throw new Error("Unable to process text-shadows: ".concat(r))
ma(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},n.push(t),r=r.substr(1).trim()}}return n.forEach((function(e){var t=e.pixels
2===t.length&&t.push(0)})),n}function HD(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.minRatio,a=t.maxRatio,o=t.ignoreEdgeCount,i=[],u=r.getComputedStyle(e),s=u.getPropertyValue("text-shadow")
if("none"===s)return i
var l=u.getPropertyValue("font-size"),c=parseInt(l)
ma(!1===isNaN(c),"Unable to determine font-size value ".concat(l))
var d,p=[],f=Q(VD(s))
try{for(f.s();!(d=f.n()).done;){var h=d.value,m=h.colorStr||u.getPropertyValue("color"),D=V(h.pixels,3),g=D[0],v=D[1],b=D[2],y=void 0===b?0:b
if(!(a&&y>=c*a))if(n&&y<c*n)p.push({colorStr:m,pixels:h.pixels})
else{if(p.length>0){var F=LD(p,{ignoreEdgeCount:o})
if(null===F)return null
i.push.apply(i,q(F)),p.splice(0,p.length)}var w=UD({colorStr:m,offsetX:g,offsetY:v,blurRadius:y,fontSize:c})
i.push(w)}}}catch(e){f.e(e)}finally{f.f()}if(p.length>0){var E=LD(p,{ignoreEdgeCount:o})
if(null===E)return null
i.push.apply(i,q(E))}return i}function UD(e){var t=e.colorStr,r=e.offsetX,n=e.offsetY,a=e.blurRadius,o=e.fontSize
if(r>a||n>a)return new gf(0,0,0,0)
var i=new gf
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}function $D(e,t){var r,n=Ka(e)
if(n._stackingContext)return n._stackingContext
var a=[],o=new Map
return(t=null!==(r=t)&&void 0!==r?r:OD(e)).forEach((function(e){var t,r=Ka(e),n=function(e){var t=new gf
return t.parseString(e.getComputedStylePropertyValue("background-color")),t}(r),i=r._stackingOrder.filter((function(e){return!!e.vNode}))
i.forEach((function(e,t){var r,n=e.vNode,u=null===(r=i[t-1])||void 0===r?void 0:r.vNode,s=QD(o,n,u)
0!==t||o.get(n)||a.unshift(s),o.set(n,s)}))
var u=null===(t=i[i.length-1])||void 0===t?void 0:t.vNode,s=QD(o,r,u)
i.length||a.unshift(s),s.bgColor=n})),n._stackingContext=a,a}function GD(e){var t
if(null===(t=e.descendants)||void 0===t||!t.length){var r=e.bgColor
return r.alpha*=e.opacity,{color:r,blendMode:e.blendMode}}var n=RD(e.descendants.reduce(WD,YD()),e.bgColor,e.descendants[0].blendMode)
return n.alpha*=e.opacity,{color:n,blendMode:e.blendMode}}function WD(e,t){var r
return r=e instanceof gf?e:GD(e).color,RD(GD(t).color,r,t.blendMode)}function YD(e,t){var r,n
return{vNode:e,ancestor:t,opacity:parseFloat(null!==(r=null==e?void 0:e.getComputedStylePropertyValue("opacity"))&&void 0!==r?r:1),bgColor:new gf(0,0,0,0),blendMode:(n=null==e?void 0:e.getComputedStylePropertyValue("mix-blend-mode"),n||void 0),descendants:[]}}function QD(e,t,r){var n,a=e.get(r),o=null!==(n=e.get(t))&&void 0!==n?n:YD(t,a)
return a&&r!==t&&!a.descendants.includes(o)&&a.descendants.unshift(o),o}function KD(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,o=Ka(e),i=o._cache.getBackgroundColor
if(i)return t.push.apply(t,q(i.bgElms)),tc.set("bgColor",i.incompleteData),i.bgColor
var u=function(e,t,n){var o,i,u=OD(e)
if(!u)return null
var s=Bl(e),l=null!==(o=HD(e,{minRatio:n,ignoreEdgeCount:!0}))&&void 0!==o?o:[]
l.length&&(l=[{color:l.reduce(SD)}])
for(var c=0;c<u.length;c++){var d=u[c],p=r.getComputedStyle(d)
if(rc(d,p))return t.push(d),null
var f=bf(p)
if(0!==f.alpha){if("inline"!==p.getPropertyValue("display")&&!XD(d,s))return t.push(d),tc.set("bgColor","elmPartiallyObscured"),null
if(t.push(d),1===f.alpha)break}}l=$D(e,u).map(GD).concat(l)
var h=function(e,t){var n=[]
if(!t){var o=a.documentElement,i=a.body,u=r.getComputedStyle(o),s=r.getComputedStyle(i),l=bf(u),c=bf(s),d=0!==c.alpha&&XD(i,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&n.unshift({color:c,blendMode:ZD(s.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&n.unshift({color:l,blendMode:ZD(u.getPropertyValue("mix-blend-mode"))})}return n}(e,u.includes(a.body))
if((i=l).unshift.apply(i,q(h)),0===l.length)return new gf(255,255,255,1)
var m=l.reduce((function(e,t){return RD(t.color,e.color instanceof gf?e.color:e,t.blendMode)}))
return RD(m.color instanceof gf?m.color:m,new gf(255,255,255,1))}(e,t,n)
return o._cache.getBackgroundColor={bgColor:u,bgElms:t,incompleteData:tc.get("bgColor")},u}function XD(e,t){t=Array.isArray(t)?t:[t]
var n=e.getBoundingClientRect(),a=n.right,o=n.bottom,i=r.getComputedStyle(e).getPropertyValue("overflow")
return(["scroll","auto"].includes(i)||e instanceof r.HTMLHtmlElement)&&(a=n.left+e.scrollWidth,o=n.top+e.scrollHeight),t.every((function(e){return e.top>=n.top&&e.bottom<=o&&e.left>=n.left&&e.right<=a}))}function ZD(e){return e||void 0}var JD=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=RD(t,e))
var r=e.getRelativeLuminance(),n=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}
function eg(e,t,n){for(var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.getComputedStyle(e),u=[function(){return function(e,t){var r=t.textStrokeEmMin,n=void 0===r?0:r,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),i=a/parseFloat(o)
if(isNaN(i)||i<n)return null
var u=e.getPropertyValue("-webkit-text-stroke-color")
return(new gf).parseString(u)}(i,o)},function(){return function(e){return(new gf).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}(i)},function(){return HD(e,{minRatio:0})}],s=[],l=0,c=u;l<c.length;l++){var d=(0,c[l])()
if(d&&(s=s.concat(d),1===d.alpha))break}var p=s.reduce((function(e,t){return RD(e,t)}))
if(null!==(a=n)&&void 0!==a||(n=KD(e,[])),null===n){var f=tc.get("bgColor")
return tc.set("fgColor",f),null}var h=$D(e)
return RD(function(e,t,r){for(;t;){var n
if(1===t.opacity&&t.ancestor)t=t.ancestor
else{e.alpha*=t.opacity
var a=(null===(n=t.ancestor)||void 0===n?void 0:n.descendants)||r
1!==t.opacity&&(a=a.slice(0,a.indexOf(t)))
var o=a.map(GD)
if(o.length){var i=o.reduce((function(e,t){return RD(t.color,e.color instanceof gf?e.color:e)}),{color:new gf(0,0,0,0),blendMode:"normal"})
e=RD(e,i),t=t.ancestor}else t=t.ancestor}}return e}(p,tg(h,e),h),new gf(255,255,255,1))}function tg(e,t){var r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a,o=r.value
if((null===(a=o.vNode)||void 0===a?void 0:a.actualNode)===t)return o
var i=tg(o.descendants,t)
if(i)return i}}catch(e){n.e(e)}finally{n.f()}}var rg=function(e,t,r,n){var a=JD(e,t),o=n&&Math.ceil(72*r)/96<14||!n&&Math.ceil(72*r)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},ng={}
le(ng,{isAriaCombobox:function(){return el},isAriaListbox:function(){return Js},isAriaRange:function(){return rl},isAriaTextbox:function(){return Zs},isDisabled:function(){return og},isNativeSelect:function(){return Xs},isNativeTextbox:function(){return Ks}})
var ag=["fieldset","button","select","input","textarea"],og=function e(t){var r=t._isDisabled
if("boolean"==typeof r)return r
var n=t.props.nodeName,a=t.attr("aria-disabled")
return r=!(!ag.includes(n)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=r,r}
function ig(e,t){if(!e||!t)return!1
var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t)
return r.length===n.length&&r.every((function(r){var n=e[r],a=t[r]
return o(n)===o(a)&&("object"===o(n)||"object"===o(a)?ig(n,a):n===a)}))}function ug(e){var t=Ls(e),r=t&&t.includes("heading"),n=e.attr("aria-level"),a=parseInt(n,10),o=V(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return r?o&&!n?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function sg(e,t){var r,n=null===(r=t.data)||void 0===r?void 0:r.headingOrder,a=cg(t.node.ancestry,1)
if(!n)return e
var o=n.map((function(e){return function(e,t){return z({},e,{ancestry:t.concat(e.ancestry)})}(e,a)})),i=function(e,t){for(;t.length;){var r=lg(e,t)
if(-1!==r)return r
t=cg(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,q(o)):e.splice.apply(e,[i,0].concat(q(o))),e}function lg(e,t){return e.findIndex((function(e){return jh(e.ancestry,t)}))}function cg(e,t){return e.slice(0,e.length-t)}function dg(e,t){var r=e.boundingClientRect,n=t.boundingClientRect
return r.top>=n.top&&r.left>=n.left&&r.bottom<=n.bottom&&r.right<=n.right}function pg(e){return e.getComputedStylePropertyValue("pointer-events")}function fg(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function hg(e,t){return hi(e,t)&&!Wu(t)}function mg(e){return e.map((function(e){return e.actualNode}))}function Dg(e,t,r){var n=r.validRoles,a=void 0===n?[]:n,o=r.validNodeNames,i=void 0===o?[]:o,u=e.props,s=u.nodeName,l=u.nodeType,c=u.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!Gs(e))return!1
var p=ss(e)
return p?!a.includes(p)&&d+"[role=".concat(p,"]"):!i.includes(s)&&d+s}function gg(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map((function(e){return{vChild:e,nested:t}}))}function vg(e){return""!==(e||"").trim()}function bg(e){var t=yl(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return Ds(t)}function yg(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach((function(e){"widget"===$l(e)&&Gu(e)?t.push(e):t.push.apply(t,q(yg(e)))})),t}function Fg(e){var t=parseInt(e.attr("tabindex"),10)
return!isNaN(t)&&t<0}function wg(e){if(Wu(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some((function(e){return wg(e)}))}var Eg=["block","list-item","table","flex","grid","inline-block"]
function Cg(e){var t=r.getComputedStyle(e).getPropertyValue("display")
return-1!==Eg.indexOf(t)||"table-"===t.substr(0,6)}function xg(e,t){var r=e.getRelativeLuminance(),n=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}var Ag=["block","list-item","table","flex","grid","inline-block"]
function kg(e){var t=r.getComputedStyle(e).getPropertyValue("display")
return-1!==Ag.indexOf(t)||"table-"===t.substr(0,6)}var Ng=xa((function(e,t){var n=r.getComputedStyle(e,t),a=function(e,t){return n.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===bf(n).alpha&&a("background-image","none"))return 0
var o=Tg(n.getPropertyValue("width")),i=Tg(n.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value}))
function Tg(e){var t=V(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),r=t[1],n=void 0===r?"":r,a=t[2],o=void 0===a?"":a
return{value:parseFloat(n),unit:o.toLowerCase()}}var Bg={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Rg={alert:!0,alertdialog:!0,application:!0,article:!0,banner:!1,complementary:!0,contentinfo:!0,dialog:!0,form:!0,log:!0,main:!0,navigation:!0,region:!0,search:!1,status:!0}
function _g(e,t,r,n){var a=ss(e)
if(r||(r=lD(a)),!r)return null
for(var o=r.includes("group"),i=n?e:e.parent;i;){var u=Ls(i,{noPresentational:!0})
if(u){if("group"!==u||!o)return r.includes(u)?null:r
t.includes(a)&&r.push(a),r=r.filter((function(e){return"group"!==e})),i=i.parent}else i=i.parent}return r}function Sg(e){var t=e.vNode
return 3===t.props.nodeType?t.props.nodeValue.trim().length>0:Pl(t,!1,!0)}function Og(e){var t,r,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).invalidTableRowAttrs,a=arguments.length>2?arguments[2]:void 0,o=null!==(t=null==n||null===(r=n.filter)||void 0===r?void 0:r.call(n,(function(e){return a.hasAttr(e)})))&&void 0!==t?t:[]
if(0===o.length)return!0
var i=function(e){if(e.parent)return vo(e,'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]')}(a),u=i&&Ls(i)
if(!u||"treegrid"===u)return!0
var s="row".concat(o.length>1?"Plural":"Singular")
return this.data({messageKey:s,invalidAttrs:o,ownerRole:u}),!1}function Mg(e,t,r){var n,a=r.props,o=a.nodeName,i=a.type,u=(n=r.attr("aria-checked"))?(n=n.toLowerCase(),["mixed","true"].includes(n)?n:"false"):""
if("input"!==o||"checkbox"!==i||!u)return!0
var s,l=(s=r).props.indeterminate?"mixed":s.props.checked?"true":"false"
return u===l||(this.data({messageKey:"checkbox",checkState:l}),!1)}var Ig={row:Og,checkbox:Mg},Pg=function(e,t){try{return"svg"===t.props.nodeName||!!vo(t,"svg")}catch(e){return!1}},jg=[function(e,t){return qg(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!Pg(0,t)},function(e,t){return Gu(t)},function(e,t){return Wu(t)||!Lg(t)},function(e){return!Ql(e,{noLengthCompare:!0})}]
function qg(e){return"widget"===$l(e)}var Lg=xa((function e(t){return!(null==t||!t.parent)&&(!(!qg(t.parent)||!Wu(t.parent))||e(t.parent))})),zg=function(e,t){var r=ss(t)
return!(r&&!["none","presentation"].includes(r)&&!(rs[r]||{}).accessibleNameRequired&&!Gu(t))}
function Vg(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var r=e.ownerDocument.createRange()
return r.setStart(e,0),r.setEnd(e,e.childNodes.length),0===r.getClientRects().length}var Hg=["article","aside","main","nav","section"].join(","),Ug=function(e,t,r){return r.initiator},$g={emoji:!0,nonBmp:!1,punctuations:!0}
function Gg(e){return!e||"true"!==e.getAttribute("aria-hidden")&&Gg($i(e))}var Wg={"abstractrole-evaluate":function(e,t,r){var n=qf(r.attr("role")).filter((function(e){return"abstract"===$l(e)}))
return n.length>0&&(this.data(n),!0)},"accesskeys-after":function(e){var t={}
return e.filter((function(e){if(!e.data)return!1
var r=e.data.toUpperCase()
return t[r]?(t[r].relatedNodes.push(e.relatedNodes[0]),!1):(t[r]=e,e.relatedNodes=[],!0)})).map((function(e){return e.result=!!e.relatedNodes.length,e}))},"accesskeys-evaluate":function(e,t,r){return Vi(r)||(this.data(r.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,r){var n=r.attr("alt")
return"string"==typeof n&&/^\s+$/.test(n)},"aria-allowed-attr-evaluate":function(e,t,r){var n=[],a=Ls(r),o=zm(a)
Array.isArray(t[a])&&(o=Wh(t[a].concat(o)))
var i,u=Q(r.attrNames)
try{for(u.s();!(i=u.n()).done;){var s=i.value
pD(s)&&!o.includes(s)&&n.push(s)}}catch(e){u.e(e)}finally{u.f()}return!n.length||(this.data(n.map((function(e){return e+'="'+r.attr(e)+'"'}))),!(a||Mh(r)||Gu(r))&&void 0)},"aria-allowed-attr-matches":function(e,t){var r=/^aria-/,n=t.attrNames
if(n.length)for(var a=0,o=n.length;a<o;a++)if(r.test(n[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=t.allowImplicit,a=void 0===n||n,o=t.ignoredTags,i=void 0===o?[]:o,u=r.props.nodeName
if(i.map((function(e){return e.toLowerCase()})).includes(u))return!0
var s=Ym(r,a)
if(s.length){if(this.data(s),!Gs(r))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==ss(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,r){return"true"===r.attr("aria-busy")},"aria-conditional-attr-evaluate":function(e,t,r){var n=Ls(r)
return!Ig[n]||Ig[n].call(this,e,t,r)},"aria-conditional-checkbox-attr-evaluate":Mg,"aria-conditional-row-attr-evaluate":Og,"aria-errormessage-evaluate":function(e,t,r){t=Array.isArray(t)?t:[]
var n=r.attr("aria-errormessage"),a=r.hasAttr("aria-errormessage"),o=r.attr("aria-invalid")
return!r.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(n)||!a||(this.data(qf(n)),function(e){if(""===e.trim())return os.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&Xu(r,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:qf(e)})}return t?Gs(t)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||qf(r.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:qf(e)}),!1):void 0}.call(this,n))},"aria-has-attr-matches":function(e,t){var r=/^aria-/
return t.attrNames.some((function(e){return r.test(e)}))},"aria-hidden-body-evaluate":function(e,t,r){return"true"!==r.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return Gg($i(e))},"aria-label-evaluate":function(e,t,r){return!!Ds(es(r))},"aria-labelledby-evaluate":function(e,t,r){try{return!!Ds(Ju(r))}catch(e){return}},"aria-level-evaluate":function(e,t,r){var n=r.attr("aria-level")
if(!(parseInt(n,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=r.props.nodeName,o=Ls(r,{chromium:!0}),i=function(e,t,r){var n=os.ariaRoles[e]
return n?n.prohibitedAttrs||[]:e||r.includes(t)?[]:["aria-label","aria-labelledby"]}(o,a,n).filter((function(e){return!!r.attrNames.includes(e)&&""!==Ds(r.attr(e))}))
if(0===i.length)return!1
var u=r.hasAttr("role")?"hasRole":"noRole"
u+=i.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:u,prohibited:i})
var s=sl(r,{subtreeDescendant:!0})
return""===Ds(s)||void 0},"aria-required-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=ss(r),a=r.attrNames,o=sD(n)
if(Array.isArray(t[n])&&(o=Wh(t[n],o)),!n||!a.length||!o.length)return!0
if(function(e,t){return"separator"===t&&!Gu(e)}(r,n)||function(e,t){return"combobox"===t&&"false"===e.attr("aria-expanded")}(r,n))return!0
var i=Os(r),u=o.filter((function(e){return!r.attr(e)&&!function(e,t){var r
return void 0!==(null===(r=e.implicitAttrs)||void 0===r?void 0:r[t])}(i,e)}))
return!u.length||(this.data(u),!1)},"aria-required-children-evaluate":function(e,t,r){var n=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=ss(r,{dpub:!0}),o=cD(a)
if(null===o)return!0
var i=function(e,t){for(var r,n=[],a=Us(e),o=function(){if(3===r.props.nodeType&&n.push({vNode:r,role:null}),1!==r.props.nodeType||!Gs(r))return 1
var e=Ls(r,{noPresentational:!0}),o=function(e){return cs().find((function(t){return e.hasAttr(t)}))}(r),i=!!o||Gu(r)
if(!e&&!i||["group","rowgroup"].includes(e)&&t.some((function(t){return t===e})))a.push.apply(a,q(r.children))
else if(e||i){var u=o||"tabindex"
n.push({role:e,attr:u,vNode:r})}};r=a.shift();)o()
return n}(r,o),u=i.filter((function(e){var t=e.role
return 1===e.vNode.props.nodeType&&!o.includes(t)}))
return u.length?(this.relatedNodes(u.map((function(e){return e.vNode}))),this.data({messageKey:"unallowed",values:u.map((function(e){return function(e,t){var r=e.props,n=r.nodeName
if(3===r.nodeType)return"#text"
var a=ss(e,{dpub:!0})
return a?"[role=".concat(a,"]"):t?n+"[".concat(t,"]"):n}(e.vNode,e.attr)})).filter((function(e,t,r){return r.indexOf(e)===t})).join(", ")}),!1):!!function(e,t){return t.some((function(t){var r=t.role
return r&&e.includes(r)}))}(o,i)||("true"===r.attr("aria-busy")?(this.data({messageKey:"aria-busy"}),!0):(this.data(o),!(!n.includes(a)||i.some(Sg))&&void 0))},"aria-required-children-matches":function(e,t){var r=ss(t,{dpub:!0})
return!!cD(r)},"aria-required-parent-evaluate":function(e,t,r){var n=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=_g(r,n)
if(!a)return!0
var o=function(e){for(var t=[],r=null;e;){if(e.getAttribute("id")){var n=ga(e.getAttribute("id"));(r=Fi(e).querySelector("[aria-owns~=".concat(n,"]")))&&t.push(r)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,u=o.length;i<u;i++)if(!(a=_g(Ka(o[i]),n,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var r=ss(t)
return!!lD(r)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Ls(arguments.length>2?arguments[2]:void 0)
return!!(t.supportedRoles||[]).includes(r)||!(!r||"presentation"===r||"none"===r)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,r){var n=r.attrNames.filter((function(t){var r=os.ariaAttrs[t]
if(!pD(t))return!1
var n=r.unsupported
return"object"!==o(n)?!!n:!Ss(e,n.exceptions)}))
return!!n.length&&(this.data(n),!0)},"aria-valid-attr-evaluate":function(e,t,r){t=Array.isArray(t.value)?t.value:[]
var n=[],a=/^aria-/
return r.attrNames.forEach((function(e){-1===t.indexOf(e)&&a.test(e)&&!pD(e)&&n.push(e)})),!n.length||(this.data(n),!1)},"aria-valid-attr-value-evaluate":function(e,t,r){t=Array.isArray(t.value)?t.value:[]
var n="",a="",o=[],u=/^aria-/,s=["aria-errormessage"],l={"aria-controls":function(){var e=!1===["false",null].includes(r.attr("aria-haspopup"))
return e&&(n='aria-controls="'.concat(r.attr("aria-controls"),'"'),a="controlsWithinPopup"),"false"!==r.attr("aria-expanded")&&"false"!==r.attr("aria-selected")&&!1===e},"aria-current":function(e){e||(n='aria-current="'.concat(r.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==r.attr("aria-expanded")},"aria-describedby":function(e){e||(n='aria-describedby="'.concat(r.attr("aria-describedby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(n='aria-labelledby="'.concat(r.attr("aria-labelledby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return r.attrNames.forEach((function(e){if(!s.includes(e)&&!t.includes(e)&&u.test(e)){var i,c=r.attr(e)
try{i=dD(r,e)}catch(t){return n="".concat(e,'="').concat(c,'"'),void(a="idrefs")}l[e]&&!l[e](i)||i||(""!==c||function(e){var t
return"string"===(null===(t=os.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(n=e,a="empty"))}})),o.length?(this.data(o),!1):!n||void this.data({messageKey:a,needsReview:n})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!r.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var n=r.attr(t.attribute)
return!!Ds(n)||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,r){if("input"!==r.props.nodeName)return!0
var n=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":n,"cc-exp":["text","search","month","tel"],"cc-exp-month":n,"cc-exp-year":n,"cc-csc":n,"transaction-amount":n,"bday-day":n,"bday-month":n,"bday-year":n,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach((function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])}))
var u=r.attr("autocomplete").split(/\s+/g).map((function(e){return e.toLowerCase()})),s=u[u.length-1]
if(wl.stateTerms.includes(s))return!0
var l=i[s],c=r.hasAttr("type")?Ds(r.attr("type")).toLowerCase():"text"
return c=vm().includes(c)?c:"text",void 0===l?"text"===c:l.includes(c)},"autocomplete-matches":function(e,t){var r=t.attr("autocomplete")
if(!r||""===Ds(r))return!1
var n=t.props.nodeName
if(!1===["textarea","input","select"].includes(n))return!1
if("input"===n&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=t.attr("tabindex")
if("-1"===i&&o){var u=os.ariaRoles[o]
if(void 0===u||"widget"!==u.type)return!1}return!("-1"===i&&t.actualNode&&!Xi(t)&&!Gs(t))},"autocomplete-valid-evaluate":function(e,t,r){var n=r.attr("autocomplete")||""
return El(n,t)},"avoid-inline-spacing-evaluate":function(e,t){var r=t.cssProperties.filter((function(t){if("important"===e.style.getPropertyPriority(t))return t}))
return!(r.length>0&&(this.data(r),1))},"braille-label-equivalent-evaluate":function(e,t,r){var n
if(!(null!==(n=r.attr("aria-braillelabel"))&&void 0!==n?n:"").trim())return!0
try{return""!==Ds(vl(r))}catch(e){return}},"braille-roledescription-equivalent-evaluate":function(e,t,r){var n,a=null!==(n=r.attr("aria-brailleroledescription"))&&void 0!==n?n:""
if(""===Ds(a))return!0
var o=r.attr("aria-roledescription")
return"string"!=typeof o?(this.data({messageKey:"noRoleDescription"}),!1):""!==Ds(o)||(this.data({messageKey:"emptyRoleDescription"}),!1)},"bypass-matches":function(e,t,r){return!Ug(0,0,r)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,r){return!im(r,"track").some((function(e){return"captions"===(e.attr("kind")||"").toLowerCase()}))&&void 0},"caption-faked-evaluate":function(e){var t=ds(e),r=t[0]
return t.length<=1||r.length<=1||e.rows.length<=1||r.reduce((function(e,t,n){return e||t!==r[n+1]&&void 0!==r[n+1]}),!1)},"color-contrast-evaluate":function(e,t,n){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,u=t.boldValue,s=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!Xi(e))return this.data({messageKey:"hidden"}),!0
var f=Ys(n,!1,!0)
if(a&&function(e){var t={nonBmp:!0},r=Dl(e,t),n=""===Ds(yl(e,t))
return r&&n}(f))this.data({messageKey:"nonBmp"})
else{var h=r.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),D=h.getPropertyValue("font-weight"),g=parseFloat(D)>=u||"bold"===D,v=Math.ceil(72*m)/96,b=g&&v<s||!g&&v<l?c.normal:c.large,y=b.expected,F=b.minThreshold,w=b.maxThreshold,E=function(e,t){var r=t.pseudoSizeThreshold,n=void 0===r?.25:r,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*n
do{if(Ng(e.actualNode,":before")+Ng(e.actualNode,":after")>i)return e}while(e=e.parent)}}(n,{ignorePseudo:i,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:y+":1"}),void this.relatedNodes(E.actualNode)
var C=HD(e,{minRatio:.001,maxRatio:d})
if(null!==C){var x=[],A=KD(e,x,d),k=eg(e,!1,A,t),N=null,T=null,B=null
if(0===C.length)N=JD(A,k)
else if(k&&A){B=[].concat(q(C),[A]).reduce(SD)
var R=JD(A,k),_=JD(A,B),S=JD(B,k);(N=Math.max(R,_,S))!==R&&(T=_>S?"shadowOnBgColor":"fgOnShadowColor")}var O=N>y
if("number"==typeof F&&("number"!=typeof N||N<F)||"number"==typeof w&&("number"!=typeof N||N>w))return this.data({contrastRatio:N}),!0
var M,I=Math.floor(100*N)/100
null===A?M=tc.get("bgColor"):O||(M=T)
var P=1===I,j=1===f.length
return P?M=tc.set("bgColor","equalRatio"):O||!j||o||(M="shortTextContent"),this.data({fgColor:k?k.toHexString():void 0,bgColor:A?A.toHexString():void 0,contrastRatio:I,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:M,expectedContrastRatio:y+":1",shadowColor:B?B.toHexString():void 0}),null===k||null===A||P||j&&!o&&!O?(M=null,tc.clear(),void this.relatedNodes(x)):(O||this.relatedNodes(x),O)}this.data({messageKey:"complexTextShadows"})}},"color-contrast-matches":function(e,t){var n=t.props,o=n.nodeName,i=n.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(og(t)||Bu(t))return!1
if(["input","select","textarea"].includes(o)){var u=r.getComputedStyle(e),s=parseInt(u.getPropertyValue("text-indent"),10)
if(s){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+s,right:l.right+s},!Mf(l,e))return!1}return!0}var c=Ei(t,"label")
if("label"===o||c){var d=c||e,p=c?Ka(c):t
if(d.htmlFor){var f=Fi(d).getElementById(d.htmlFor),h=f&&Ka(f)
if(h&&og(h))return!1}var m=im(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&og(m))return!1}for(var D=[],g=t;g;){if(g.props.id){var v=Um(g).filter((function(e){return qf(e.getAttribute("aria-labelledby")||"").includes(g.props.id)})).map((function(e){return Ka(e)}))
D.push.apply(D,q(v))}g=g.parent}if(D.length>0&&D.every(og))return!1
if(!function(e){var t=Ys(e,!1,!0)
return""!==t&&""!==yl(t,$g)&&e.children.some((function(e){return"#text"===e.props.nodeName&&!gl(e)}))}(t))return!1
for(var b=a.createRange(),y=t.children,F=0;F<y.length;F++){var w=y[F]
3===w.actualNode.nodeType&&""!==Ds(w.actualNode.nodeValue)&&b.selectNodeContents(w.actualNode)}var E=Array.from(b.getClientRects()),C=ki(t)
return E.some((function(t){var r=Mf(t,e)
if(!C.length)return r
var n=C.some((function(e){return xi(t,e.boundingClientRect)}))
return r&&n}))},"css-orientation-lock-evaluate":function(e,t,r,n){var a=(n||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,u=void 0===i?0:i
if(o&&o.length){for(var s=!1,l=[],c=o.reduce((function(e,t){var r=t.sheet,n=t.root,a=t.shadowId||"topDocument"
if(e[a]||(e[a]={root:n,rules:[]}),!r||!r.cssRules)return e
var o=Array.from(r.cssRules)
return e[a].rules=e[a].rules.concat(o),e}),{}),d=function(){var e=f[p],t=c[e],r=t.root,n=t.rules.filter(h)
if(!n.length)return 1
n.forEach((function(e){var t=e.cssRules
Array.from(t).forEach((function(e){var t=function(e){var t=e.selectorText,r=e.style
if(!t||r.length<=0)return!1
var n=r.transform||r.webkitTransform||r.msTransform||!1
if(!n&&!r.rotate)return!1
var a=function(e){if(!e)return 0
var t=e.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)
if(!t)return 0
var r=V(t,3)
return m(r[1],r[2])}(n),o=a+m("rotate",r.rotate)
return!!o&&(o=Math.abs(o),!(Math.abs(o-180)%180<=u)&&Math.abs(o-90)%90<=u)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var n=Array.from(r.querySelectorAll(e.selectorText))||[]
l=l.concat(n)}s=s||t}))}))},p=0,f=Object.keys(c);p<f.length;p++)d()
return!s||(l.length&&this.relatedNodes(l),!1)}function h(e){var t=e.type,r=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(r)||/orientation:\s*portrait/i.test(r))}function m(e,t){switch(e){case"rotate":case"rotateZ":return D(t)
case"rotate3d":var r=V(t.split(",").map((function(e){return e.trim()})),4),n=r[2],a=r[3]
if(0===parseInt(n))return
return D(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var r=V(t,2),n=r[0],a=r[1]
return g(Math.atan2(parseFloat(a),parseFloat(n)))}var o=parseFloat(t[8]),i=Math.asin(o),u=Math.cos(i)
return g(Math.acos(parseFloat(t[0])/u))}(t)
default:return 0}}function D(e){var t=V(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(!t)return 0
var r,n,a=parseFloat(e.replace(t,""))
switch(t){case"rad":return g(a)
case"grad":return n=a,(n%=400)<0&&(n+=400),Math.round(n/400*360)
case"turn":return r=a,Math.round(360/(1/r))
default:return parseInt(a)}}function g(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(Im(e)){var t=ds(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return Im(e)},"deprecatedrole-evaluate":function(e,t,r){var n=Ls(r,{dpub:!0,fallback:!0}),a=os.ariaRoles[n]
return!(null==a||!a.deprecated||(this.data(n),0))},"dlitem-evaluate":function(e){var t=$i(e),r=t.nodeName.toUpperCase(),n=ss(t)
return"DIV"===r&&["presentation","none",null].includes(n)&&(r=(t=$i(t)).nodeName.toUpperCase(),n=ss(t)),"DL"===r&&!(n&&!["presentation","none","list"].includes(n))},"doc-has-title-evaluate":function(){var e=a.title
return!!Ds(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),r='*[id="'.concat(ga(t),'"]'),n=Array.from(Fi(e).querySelectorAll(r))
return!aD(e)&&n.some(Gu)},"duplicate-id-after":function(e){var t=[]
return e.filter((function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)}))},"duplicate-id-aria-matches":function(e){return aD(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var r=Fi(e),n=Array.from(r.querySelectorAll('[id="'.concat(ga(t),'"]'))).filter((function(t){return t!==e}))
return n.length&&this.relatedNodes(n),this.data(t),0===n.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),r='*[id="'.concat(ga(t),'"]'),n=Array.from(Fi(e).querySelectorAll(r))
return!aD(e)&&n.every((function(e){return!Gu(e)}))},"duplicate-img-label-evaluate":function(e,t,r){if(["none","presentation"].includes(Ls(r)))return!1
var n=vo(r,t.parentSelector)
if(!n)return!1
var a=Ys(n,!0).toLowerCase()
return""!==a&&a===vl(r).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,r){var n=this
if(!r.attr("id"))return!1
if(r.actualNode){var a=Fi(r.actualNode),o=ga(r.attr("id")),i=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(i),!i.length)return!1
try{return i.some((function(e){if(Xi(e)){var t=Ds(Zu(e,{inControlContext:!0,startNode:r}))
return n.data({explicitLabel:t}),!!t}return!0}))}catch(e){return}}},"fallbackrole-evaluate":function(e,t,r){var n=qf(r.attr("role"))
return!(n.length<=1)&&(!function(e,t){return!Ms(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(r,n)||void 0)},"focusable-content-evaluate":function(e,t,r){var n=r.tabbableElements
return!!n&&n.filter((function(e){return e!==r})).length>0},"focusable-disabled-evaluate":function(e,t,r){var n=["button","fieldset","input","select","textarea"],a=r.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return n.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!Kl())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),r=parseInt(e.getComputedStylePropertyValue("width")),n=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===r||0===n)&&"none"===t}))&&void 0},"focusable-element-evaluate":function(e,t,r){return!(!r.hasAttr("contenteditable")||!function e(t){var n=t.attr("contenteditable")
if("true"===n||""===n)return!0
if("false"===n)return!1
var a=vo(r.parent,"[contenteditable]")
return!!a&&e(a)}(r))||Wu(r)},"focusable-modal-open-evaluate":function(e,t,r){var n=r.tabbableElements.map((function(e){return e.actualNode}))
return!n||!n.length||!Kl()||void this.relatedNodes(n)},"focusable-no-name-evaluate":function(e,t,r){var n=r.attr("tabindex")
if(!(Gu(r)&&n>-1))return!1
try{return!vl(r)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,r){var n=["button","fieldset","input","select","textarea"],a=r.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return!n.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!Kl())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),r=parseInt(e.getComputedStylePropertyValue("width")),n=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===r||0===n)&&"none"===t}))&&void 0},"frame-focusable-content-evaluate":function(e,t,r){if(r.children)try{return!r.children.some((function(e){return wg(e)}))}catch(e){return}},"frame-focusable-content-matches":function(e,t,r){var n,a
return!r.initiator&&!r.focusable&&(null===(n=r.size)||void 0===n?void 0:n.width)*(null===(a=r.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter((function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var r=e.node.ancestry.flat(1/0).join(" > ")
return t[r]=e,!0}var n=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[n]&&(t[n].result=!0),!1}))},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!Ds(t)},"has-alt-evaluate":function(e,t,r){var n=r.props.nodeName
return!!["img","input","area"].includes(n)&&r.hasAttr("alt")},"has-descendant-after":function(e){return e.some((function(e){return!0===e.result}))&&e.forEach((function(e){e.result=!0})),e},"has-descendant-evaluate":function(e,t,r){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&Kl())return!0
var n=Qh(r,t.selector,(function(e){return Gs(e)}))
return this.relatedNodes(n.map((function(e){return e.actualNode}))),n.length>0},"has-global-aria-attribute-evaluate":function(e,t,r){var n=cs().filter((function(e){return r.hasAttr(e)}))
return this.data(n),n.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==Ms(t,{chromium:!0})},"has-lang-evaluate":function(e,t,r){var n=void 0!==a&&Aa(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&vg(r.attr("xml:lang"))&&!vg(r.attr("lang"))&&!n?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some((function(e){return vg(r.attr(e))}))||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,r){try{return""!==Ds(sl(r))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var r=$l(t)
return"widget"===r||"composite"===r},"heading-matches":function(e,t){return"heading"===Ls(t)},"heading-order-after":function(e){var t=function(e){return(e=q(e)).sort((function(e,t){var r=e.node,n=t.node
return r.ancestry.length-n.ancestry.length})),e.reduce(sg,[]).filter((function(e){return-1!==e.level}))}(e)
return e.forEach((function(e){e.result=function(e,t){var r,n,a,o,i=lg(t,e.node.ancestry),u=null!==(r=null===(n=t[i])||void 0===n?void 0:n.level)&&void 0!==r?r:-1,s=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==u?u-s<=1:void 0)}(e,t)})),e},"heading-order-evaluate":function(){var e=Qa.get("headingOrder")
if(e)return!0
var t=Qh(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",Gs)
return e=t.map((function(e){return{ancestry:[Ua(e.actualNode)],level:ug(e)}})),this.data({headingOrder:e}),Qa.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,r){var n=Al(r),a=e.getAttribute("title")
return!!n&&(a||(a="",e.getAttribute("aria-describedby")&&(a=Xu(e,"aria-describedby").map((function(e){return e?Zu(e):""})).join(""))),Ds(a)===Ds(n))},"hidden-content-evaluate":function(e,t,n){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Pl(n)){var a=r.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=$i(e),i=o&&r.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,r){if(r.hasAttr("id")){if(!r.actualNode)return
var n=Fi(e),a=ga(e.getAttribute("id")),o=n.querySelector('label[for="'.concat(a,'"]'))
if(o&&!Gs(o)){var i
try{i=vl(r).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!Pg(0,t)},"html5-scope-evaluate":function(e){return!Ul(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter((function(e){return void 0!==e.result})),r=[],n={},a=function(e){var a,o=t[e],i=o.data,u=i.name,s=i.urlProps
if(n[u])return 1
var l=t.filter((function(t,r){return t.data.name===u&&r!==e})),c=l.every((function(e){return ig(e.data.urlProps,s)}))
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,q(l.map((function(e){return e.relatedNodes[0]})))),n[u]=l,r.push(o)},o=0;o<t.length;o++)a(o)
return r},"identical-links-same-purpose-evaluate":function(e,t,r){var n=Ku.accessibleTextVirtual(r),a=Ku.sanitize(Ku.removeUnicode(n,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:bi.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!vl(t))return!1
var r=Ls(e)
return!r||"link"===r},"implicit-evaluate":function(e,t,r){try{var n=vo(r,"label")
if(n){var a=Ds(vl(n,{inControlContext:!0,startNode:r}))
return n.actualNode&&this.relatedNodes([n.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var n=t.cssProperty,a=t.absoluteValues,o=t.minValue,i=t.maxValue,u=t.normalValue,s=void 0===u?0:u,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(n)||c&&!Xl(e))return!0
var d={}
"number"==typeof o&&(d.minValue=o),"number"==typeof i&&(d.maxValue=i)
var p=e.style.getPropertyValue(n)
if(["inherit","unset","revert","revert-layer"].includes(p))return this.data(z({value:p},d)),!0
var f=function(e,t){var n=t.cssProperty,a=t.absoluteValues,o=t.normalValue,i=r.getComputedStyle(e),u=i.getPropertyValue(n)
if("normal"===u)return o
var s=parseFloat(u)
if(a)return s
var l=parseFloat(i.getPropertyValue("font-size")),c=Math.round(s/l*100)/100
return isNaN(c)?u:c}(e,{absoluteValues:a,cssProperty:n,normalValue:s})
return this.data(z({value:f},d)),"number"==typeof f?("number"!=typeof o||f>=o)&&("number"!=typeof i||f<=i):void 0},"inserted-into-focus-order-matches":function(e){return Ll(e)},"internal-link-present-evaluate":function(e,t,r){return im(r,"a[href]").some((function(e){return/^#[^/!]/.test(e.attr("href"))}))},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=[],a=[]
if(r.children){for(var o,i=gg(r.children);i.length;){var u,s=i.shift(),l=s.vChild,c=s.nested
if(!t.divGroups||c||"div"!==(o=l).props.nodeName||null!==ss(o)){var d=Dg(l,c,t)
d&&(a.includes(d)||a.push(d),1===(null==l||null===(u=l.actualNode)||void 0===u?void 0:u.nodeType)&&n.push(l.actualNode))}else{if(!l.children)return
var p=gg(l.children,!0)
i.push.apply(i,q(p))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(n),!0)}},"invalidrole-evaluate":function(e,t,r){var n=qf(r.attr("role"))
return!!n.every((function(e){return!us(e.toLowerCase(),{allowAbstract:!0})}))&&(this.data(n),!0)},"is-element-focusable-evaluate":function(e,t,r){return Gu(r)},"is-initiator-matches":Ug,"is-on-screen-evaluate":function(e){return Xi(e)},"is-visible-matches":function(e){return Xi(e)},"is-visible-on-screen-matches":function(e,t){return Xi(t)},"label-content-name-mismatch-evaluate":function(e,t,r){var n,a,o,i,u=null==t?void 0:t.pixelThreshold,s=null!==(n=null==t?void 0:t.occurrenceThreshold)&&void 0!==n?n:null==t?void 0:t.occuranceThreshold,l=Zu(e).toLowerCase(),c=Ds(sl(r,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:u,occurrenceThreshold:s})).toLowerCase()
return!c||(Fl(l)<1||Fl(c)<1?void 0:(a=c,o=bg(l),i=bg(a),!(!o||!i)&&o.includes(i)))},"label-content-name-mismatch-matches":function(e,t){var r=Ls(e)
return!!(r&&Qm("widget").includes(r)&&Xm().includes(r)&&(Ds(es(t))||Ds(Ju(e)))&&Ds(Ys(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var r=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(r)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!Ei(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=Qm("landmark"),r=$i(e),n=Ls(e)
for(this.data({role:n});r;){var a=r.getAttribute("role")
if(a||"FORM"===r.nodeName.toUpperCase()||(a=Ms(r)),a&&t.includes(a)&&("main"!==a||"complementary"!==n))return!1
r=$i(r)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter((function(e){var r=t.find((function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText}))
return r?(r.result=!1,r.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)}))},"landmark-is-unique-evaluate":function(e,t,r){var n=Ls(e),a=vl(r)
return a=a?a.toLowerCase():null,this.data({role:n,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){return function(e){var t=Qm("landmark"),r=Ls(e)
if(!r)return!1
var n=e.props.nodeName
return"header"===n||"footer"===n?!vo(e,Hg):"section"===n||"form"===n?!!vl(e):t.indexOf(r)>=0||"region"===r}(t)&&Gs(t)},"layout-table-matches":function(e){return!Im(e)&&!Gu(e)},"link-in-text-block-evaluate":function(e,t){var r=t.requiredContrastRatio,n=t.allowSameColor
if(kg(e))return!1
for(var a=$i(e);a&&1===a.nodeType&&!kg(a);)a=$i(a)
if(a){this.relatedNodes([a])
var o=eg(e),i=eg(a),u=KD(e),s=KD(a),l=o&&i?xg(o,i):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=r)return!0
var c=u&&s?xg(u,s):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=r)return!0
if(!c){var d,p=null!==(d=tc.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void tc.clear()}if(l)return!(!n||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:r,nodeBackgroundColor:u?u.toHexString():void 0,parentBackgroundColor:s?s.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:r,nodeColor:o?o.toHexString():void 0,parentColor:i?i.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=Ds(e.innerText),r=e.getAttribute("role")
return(!r||"link"===r)&&!!t&&!!Xi(e)&&Ql(e)},"link-in-text-block-style-evaluate":function(e){if(Cg(e))return!1
for(var t=$i(e);t&&1===t.nodeType&&!Cg(t);)t=$i(t)
if(t){if(this.relatedNodes([t]),AD(e,t))return!0
if(!function(e){for(var t=0,n=["before","after"];t<n.length;t++){var a=n[t]
if("none"!==r.getComputedStyle(e,":".concat(a)).getPropertyValue("content"))return!0}return!1}(e))return!1
this.data({messageKey:"pseudoContent"})}},"listitem-evaluate":function(e,t,r){var n=r.parent
if(n){var a=n.props.nodeName,o=ss(n)
return!!["presentation","none","list"].includes(o)||(o&&us(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,r){return Ss(r,t.matcher)},"meta-refresh-evaluate":function(e,t,r){var n=t||{},a=n.minDelay,o=n.maxDelay,i=V((r.attr("content")||"").trim().split(yD),1)[0]
if(!i.match(FD))return!0
var u=parseFloat(i)
return this.data({redirectDelay:u}),"number"==typeof a&&u<=t.minDelay||"number"==typeof o&&u>t.maxDelay},"meta-viewport-scale-evaluate":function(e,t,r){var n=t||{},a=n.scaleMinimum,o=void 0===a?2:a,i=n.lowerBound,u=void 0!==i&&i,s=r.attr("content")||""
if(!s)return!0
var l=s.split(/[;,]/).reduce((function(e,t){var r=t.trim()
if(!r)return e
var n=V(r.split("="),2),a=n[0],o=n[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),u=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===u&&(u=1),"maximum-scale"===i&&parseFloat(u)<0||(e[i]=u),e}),{})
if(u&&l["maximum-scale"]&&parseFloat(l["maximum-scale"])<u)return!0
if(!u&&"no"===l["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(l["user-scalable"])
return!u&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=ga(e.getAttribute("id")),r=e.parentNode,n=Fi(e)
n=n.documentElement||n
var a=Array.from(n.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter((function(e){return!Vi(e)})));r;)"LABEL"===r.nodeName.toUpperCase()&&-1===a.indexOf(r)&&a.push(r),r=r.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter((function(e){return Gs(e)}))
if(o.length>1)return
return!Xu(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var r=Ls(t)
return!!r&&!!os.ariaRoles[r].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){if(e.duration){var r=t.allowedDuration,n=void 0===r?3:r
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return V(t,2)[1].split(",").map((function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),r=0,n=1;t.length>0;)r+=n*parseInt(t.pop(),10),n*=60
return parseFloat(r)}(e):parseFloat(e)}))}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=n&&!e.hasAttribute("loop")||!!e.hasAttribute("controls")}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":zg,"no-focusable-content-evaluate":function(e,t,r){if(r.children)try{var n=yg(r)
if(!n.length)return!0
var a=n.filter(Fg)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(n),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,r){var n,a,o=Ls(r,{noImplicit:!0})
this.data(o)
try{n=Ds(ll(r)).toLowerCase(),a=Ds(vl(r)).toLowerCase()}catch(e){return}return!(!a&&!n)&&!((a||!n)&&a.includes(n))&&void 0},"no-naming-method-matches":function(e,t){var r=Os(t).namingMethods
return!(r&&0!==r.length||"combobox"===ss(t)&&im(t,'input:not([type="hidden"])').length||oD(t,{popupRoles:["listbox"]}))},"no-negative-tabindex-matches":function(e,t){var r=parseInt(t.attr("tabindex"),10)
return isNaN(r)||r>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,r){var n=r.props.nodeName,a=(r.attr("type")||"").toLowerCase(),o=r.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==n||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[zg,Vg].every((function(r){return r(e,t)}))},"only-dlitems-evaluate":function(e,t,r){var n=["definition","term","list"],a=r.children.reduce((function(e,t){var r=t.actualNode
return"DIV"===r.nodeName.toUpperCase()&&null===Ls(r)?e.concat(t.children):e.concat(t)}),[]).reduce((function(e,t){var r=t.actualNode,a=r.nodeName.toUpperCase()
if(1===r.nodeType&&Gs(r)){var o=ss(r);("DT"!==a&&"DD"!==a||o)&&(n.includes(o)||e.badNodes.push(r))}else 3===r.nodeType&&""!==r.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e}),{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,r){var n=!1,a=!1,o=!0,i=[],u=[],s=[]
return r.children.forEach((function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&Gs(t)){o=!1
var r="LI"===t.nodeName.toUpperCase(),l=Ls(e),c="listitem"===l
r||c||i.push(t),r&&!c&&(u.push(t),s.includes(l)||s.push(l)),c&&(a=!0)}}else n=!0})),n||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(u),this.data({messageKey:"roleNotValid",roles:s.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,r){var n=Array.from(e.parentNode.children),a=n.indexOf(e),o=(t=t||{}).margins||[],i=n.slice(a+1).find((function(e){return"P"===e.nodeName.toUpperCase()})),u=n.slice(0,a).reverse().find((function(e){return"P"===e.nodeName.toUpperCase()})),s=vD(e),l=i?vD(i):null,c=u?vD(u):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!l||!bD(s,l,o))return!0
var m=Ei(r,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!bD(s,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),r=e.textContent.trim()
return!(0===r.length||(r.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter((function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()})).length},"page-no-duplicate-after":function(e){return e.filter((function(e){return"ignored"!==e.data}))},"page-no-duplicate-evaluate":function(e,t,r){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var n="page-no-duplicate;"+t.selector
if(!Qa.get(n)){Qa.set(n,!0)
var a=Qh(i._tree[0],t.selector,(function(e){return Gs(e)}))
return"string"==typeof t.nativeScopeFilter&&(a=a.filter((function(e){return e.actualNode.hasAttribute("role")||!Ei(e,t.nativeScopeFilter)}))),"string"==typeof t.role&&(a=a.filter((function(e){return Ls(e)===t.role}))),this.relatedNodes(a.filter((function(e){return e!==r})).map((function(e){return e.actualNode}))),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==Ms(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,r){var n=ss(r)
if(["presentation","none"].includes(n)&&["iframe","frame"].includes(r.props.nodeName)&&r.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:r.props.nodeName}),!1
var a=Ls(r)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(n))return!1
var o,i=cs().some((function(e){return r.hasAttr(e)})),u=Gu(r)
return o=i&&!u?"globalAria":!i&&u?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter((function(e){return e.data.isIframe}))
return e.forEach((function(e){if(!e.result&&1!==e.node.ancestry.length){var r,n=e.node.ancestry.slice(0,-1),a=Q(t)
try{for(a.s();!(r=a.n()).done;){var o=r.value
if(jh(n,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}})),t.forEach((function(e){e.result||(e.result=!0)})),e},"region-evaluate":function(e,t,r){return this.data({isIframe:["iframe","frame"].includes(r.props.nodeName)}),!Qa.get("regionlessNodes",(function(){return function(e){return DD(i._tree[0],e).map((function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e})).filter((function(e,t,r){return r.indexOf(e)===t}))}(t)})).includes(r)},"same-caption-summary-evaluate":function(e,t,r){if(void 0!==r.children){var n=r.attr("summary"),a=r.children.find(fD),o=!!a&&Ds(sl(a))
return!(!o||!n)&&Ds(n).toLowerCase()===Ds(o).toLowerCase()}},"scope-value-evaluate":function(e,t){var r=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(r)},"scrollable-region-focusable-matches":function(e,t){return void 0!==kh(e,13)&&!1===oD(t)&&im(t,"*").some((function(e){return Pl(e,!0,!0)}))},"skip-link-evaluate":function(e){var t=ju(e,"href")
return!!t&&(Gs(t)||void 0)},"skip-link-matches":function(e){return Ff(e)&&Qi(e)},"structured-dlitems-evaluate":function(e,t,r){var n=r.children
if(!n||!n.length)return!1
for(var a,o=!1,i=!1,u=0;u<n.length;u++){if("DT"===(a=n[u].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"svg-namespace-matches":Pg,"svg-non-empty-title-evaluate":function(e,t,r){if(r.children){var n=r.children.find((function(e){return"title"===e.props.nodeName}))
if(!n)return this.data({messageKey:"noTitle"}),!1
try{if(""===sl(n,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,r){var n=parseInt(r.attr("tabindex"),10)
return!!isNaN(n)||n<=0},"table-or-grid-role-matches":function(e,t){var r=Ls(t)
return["treegrid","grid","table"].includes(r)},"target-offset-evaluate":function(e,t,r){var n=(null==t?void 0:t.minOffset)||24
if(ou(10*n,r.boundingClientRect))return this.data({messageKey:"large",minOffset:n}),!0
var a,o,i=[],u=n,s=Q(ku(r,n))
try{for(s.s();!(a=s.n()).done;){var l=a.value
if("widget"===$l(l)&&Gu(l)){var c=null
try{c=iu(r,l,n/2)}catch(e){if(e.message.startsWith("splitRects"))return void this.data({messageKey:"tooManyRects",closestOffset:0,minOffset:n})
throw e}null!==c&&(.05+(c=2*(o=c,Math.round(10*o)/10))>=n||(u=Math.min(u,c),i.push(l)))}}}catch(e){s.e(e)}finally{s.f()}return 0===i.length?(this.data({closestOffset:u,minOffset:n}),!0):(this.relatedNodes(i.map((function(e){return e.actualNode}))),i.some(Wu)?(this.data({closestOffset:u,minOffset:n}),!Wu(r)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:u,minOffset:n}))},"target-size-evaluate":function(e,t,r){var n=(null==t?void 0:t.minSize)||24,a=r.boundingClientRect
if(ou(10*n,a))return this.data({messageKey:"large",minSize:n}),!0
var o=ou.bind(null,n),i=ku(r),u=function(e,t){return t.filter((function(t){return!dg(t,e)&&hg(e,t)}))}(r,i),s=function(e,t){var r,n=[],a=[],o=Q(t)
try{for(o.s();!(r=o.n()).done;){var i=r.value
!hg(e,i)&&lu(e,i)&&"none"!==pg(i)&&(dg(e,i)?n.push(i):a.push(i))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:n,partialObscuringElms:a}}(r,i),l=s.fullyObscuringElms,c=s.partialObscuringElms
if(u.length&&(l.length||!o(a)))return this.data({minSize:n,messageKey:"contentOverflow"}),void this.relatedNodes(mg(u))
if(l.length)return this.relatedNodes(mg(l)),this.data({messageKey:"obscured"}),!0
var d=!Wu(r)&&void 0
if(!o(a))return this.data(z({minSize:n},fg(a))),d
var p=c.filter((function(e){return"widget"===$l(e)&&Gu(e)}))
if(!p.length)return this.data(z({minSize:n},fg(a))),!0
var f=function(e,t){var r,n=e.boundingClientRect,a=t.map((function(e){return e.boundingClientRect}))
try{r=cu(n,a)}catch(e){return null}return function(e,t){return e.reduce((function(e,r){var n=ou(t,e)
return n!==ou(t,r)?n?e:r:e.width*e.height>r.width*r.height?e:r}))}(r)}(r,p)
if(f){if(!o(f)){if(u.length)return this.data({minSize:n,messageKey:"contentOverflow"}),void this.relatedNodes(mg(u))
var h=p.every(Wu),m="partiallyObscured".concat(h?"":"NonTabbable")
return this.data(z({messageKey:m,minSize:n},fg(f))),this.relatedNodes(mg(p)),h?d:void 0}return this.data(z({minSize:n},fg(f||a))),this.relatedNodes(mg(p)),!0}this.data({minSize:n,messageKey:"tooManyRects"})},"td-has-header-evaluate":function(e){var t=[],r=_m(e),n=ds(e)
return r.forEach((function(e){jl(e)&&Mm(e)&&!uD(e)&&(Om(e,n).some((function(e){return null!==e&&!!jl(e)}))||t.push(e))})),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],r=[],n=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var u=t.filter((function(e){return e.getAttribute("id")})).map((function(e){return e.getAttribute("id")}))
return t.forEach((function(e){var t=!1,a=!1
if(e.hasAttribute("headers")&&Gs(e)){var o=e.getAttribute("headers").trim()
if(!o)return r.push(e)
var i=qf(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some((function(e){return!u.includes(e)})),(t||a)&&n.push(e))}})),n.length>0?(this.relatedNodes(n),!1):!r.length||void this.relatedNodes(r)},"th-has-data-cells-evaluate":function(e){var t=_m(e),r=this,n=[]
t.forEach((function(e){var t=e.getAttribute("headers")
t&&(n=n.concat(t.split(/\s+/)))
var r=e.getAttribute("aria-labelledby")
r&&(n=n.concat(r.split(/\s+/)))}))
var a=t.filter((function(e){return""!==Ds(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))})),o=ds(e),i=!0
return a.forEach((function(e){if(!e.getAttribute("id")||!n.includes(e.getAttribute("id"))){var t=ps(e,o),a=!1
hs(e)&&(a=qm("down",t,o).find((function(t){return!hs(t)&&Om(t,o).includes(e)}))),!a&&ms(e)&&(a=qm("right",t,o).find((function(t){return!ms(t)&&Om(t,o).includes(e)}))),a||r.relatedNodes(e),i=i&&a}})),!!i||void 0},"title-only-evaluate":function(e,t,r){var n=Al(r),a=Vs(r),o=r.attr("aria-describedby")
return!(n||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach((function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0})),e.forEach((function(e){e.result=!!t[e.data]})),e},"unique-frame-title-evaluate":function(e,t,r){var n=Ds(r.attr("title")).toLowerCase()
return this.data(n),!0},"unsupportedrole-evaluate":function(e,t,r){var n=Ls(r,{dpub:!0,fallback:!0}),a=is(n)
return a&&this.data(n),a},"valid-lang-evaluate":function(e,t,r){var n=[]
return t.attributes.forEach((function(e){var a=r.attr(e)
if("string"==typeof a){var o=Qf(a),i=t.value?!t.value.map(Qf).includes(o):!Fm(o);(""!==o&&i||""!==a&&!Ds(a))&&n.push(e+'="'+r.attr(e)+'"')}})),!(!n.length||"html"!==r.props.nodeName&&!ql(r)||(this.data(n),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var r=ss(e)
return r&&(Rg[r]||t.roles.includes(r))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Bg[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return jg.every((function(r){return r(e,t)}))},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,r){return Qf(r.attr("lang"))===Qf(r.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=Qf(e.getAttribute("lang")),r=Qf(e.getAttribute("xml:lang"))
return Fm(t)&&Fm(r)}},Yg=Wg,Qg=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function Kg(e){if("string"==typeof e){if(Yg[e])return Yg[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function Xg(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function Zg(e){e&&(this.id=e.id,this.configure(e))}Zg.prototype.enabled=!0,Zg.prototype.run=function(e,t,r,n,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var u,s=new Qg(this),l=eo(s,t,n,a)
try{u=this.evaluate.call(l,e.actualNode,i,e,r)}catch(t){return e&&e.actualNode&&(t.errorNode=si.toSpec(e)),void a(t)}l.isAsync||(s.result=u,n(s))}else n(null)},Zg.prototype.runSync=function(e,t,r){var n=(t=t||{}).enabled
if(!(void 0===n?this.enabled:n))return null
var a,o=this.getOptions(t.options),i=new Qg(this),u=eo(i,t)
u.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(u,e.actualNode,o,e,r)}catch(t){throw e&&e.actualNode&&(t.errorNode=si.toSpec(e)),t}return i.result=a,i},Zg.prototype.configure=function(e){var t=this
e.evaluate&&!Yg[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=Xg(e.options):this.options=e.options),["evaluate","after"].filter((function(t){return e.hasOwnProperty(t)})).forEach((function(r){return t[r]=Kg(e[r])}))},Zg.prototype.getOptions=function(e){return this._internalCheck?mi(this.options,Xg(e||{})):e||this.options}
var Jg=Zg,ev=function(e){this.id=e.id,this.result=Zn.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function tv(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(ma(Zn.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=Kg(e.matches))}function rv(e){if(e.length){var t=!1,r={}
return e.forEach((function(e){var n=e.results.filter((function(e){return e}))
r[e.type]=n,n.length&&(t=!0)})),t?r:null}}tv.prototype.matches=function(){return!0},tv.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="mark_gather_start_"+this.id,n="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&$h.mark(r)
var i=dm(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&$h.mark(a),i=i.filter((function(e){return Gs(e)})),t.performanceTimer&&($h.mark(o),$h.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&($h.mark(n),$h.measure("rule_"+this.id+"#gather",r,n)),i},tv.prototype.runChecks=function(e,t,r,n,a,o){var i=this,u=xo()
this[e].forEach((function(e){var a=i._audit.checks[e.id||e],o=oh(a,i.id,r)
u.defer((function(e,r){a.run(t,o,n,e,r)}))})),u.then((function(t){t=t.filter((function(e){return e})),a({type:e,results:t})})).catch(o)},tv.prototype.runChecksSync=function(e,t,r,n){var a=this,o=[]
return this[e].forEach((function(e){var i=a._audit.checks[e.id||e],u=oh(i,a.id,r)
o.push(i.runSync(t,u,n))})),{type:e,results:o=o.filter((function(e){return e}))}},tv.prototype.run=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
r.performanceTimer&&this._trackPerformance()
var o,i=xo(),s=new ev(this)
try{o=this.gatherAndMatchNodes(e,r)}catch(e){return void a(new u({cause:e,ruleId:this.id}))}r.performanceTimer&&this._logGatherPerformance(o),o.forEach((function(n){i.defer((function(a,o){var i=xo();["any","all","none"].forEach((function(a){i.defer((function(o,i){t.runChecks(a,n,r,e,o,i)}))})),i.then((function(e){var r=rv(e)
r&&(r.node=new Ja(n),s.nodes.push(r),t.reviewOnFail&&(["any","all"].forEach((function(e){r[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),r.none.forEach((function(e){!0===e.result&&(e.result=void 0)})))),a()})).catch((function(e){return o(e)}))}))})),i.defer((function(e){return setTimeout(e,0)})),r.performanceTimer&&this._logRulePerformance(),i.then((function(){return n(s)})).catch((function(e){return a(e)}))},tv.prototype.runSync=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
r.performanceTimer&&this._trackPerformance()
var n,a=new ev(this)
try{n=this.gatherAndMatchNodes(e,r)}catch(e){throw new u({cause:e,ruleId:this.id})}return r.performanceTimer&&this._logGatherPerformance(n),n.forEach((function(n){var o=[];["any","all","none"].forEach((function(a){o.push(t.runChecksSync(a,n,r,e))}))
var i=rv(o)
i&&(i.node=n.actualNode?new Ja(n):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach((function(e){i[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),i.none.forEach((function(e){!0===e.result&&(e.result=void 0)}))))})),r.performanceTimer&&this._logRulePerformance(),a},tv.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},tv.prototype._logGatherPerformance=function(e){Jn("gather (",e.length,"):",$h.timeElapsed()+"ms"),$h.mark(this._markChecksStart)},tv.prototype._logRulePerformance=function(){$h.mark(this._markChecksEnd),$h.mark(this._markEnd),$h.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),$h.measure("rule_"+this.id,this._markStart,this._markEnd)},tv.prototype.gatherAndMatchNodes=function(e,t){var r=this,n="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&$h.mark(n),o=o.filter((function(t){return r.matches(t.actualNode,t,e)})),t.performanceTimer&&($h.mark(a),$h.measure("rule_"+this.id+"#matches",n,a)),o},tv.prototype.after=function(e,t){var r,n=this,a=li(r=this).map((function(e){var t=r._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null})).filter(Boolean),o=this.id
return a.forEach((function(r){var a,i,u,s=(a=e.nodes,i=r.id,u=[],a.forEach((function(e){li(e).forEach((function(t){t.id===i&&(t.node=e.node,u.push(t))}))})),u),l=oh(r,o,t),c=r.after(s,l.options)
n.reviewOnFail&&c.forEach((function(e){var t=(n.any.includes(e.id)||n.all.includes(e.id))&&!1===e.result,r=n.none.includes(e.id)&&!0===e.result;(t||r)&&(e.result=void 0)})),s.forEach((function(e){delete e.node,-1===c.indexOf(e)&&(e.filtered=!0)}))})),e.nodes=function(e){var t=["any","all","none"],r=e.nodes.filter((function(e){var r=0
return t.forEach((function(t){e[t]=e[t].filter((function(e){return!0!==e.filtered})),r+=e[t].length})),r>0}))
return e.pageLevel&&r.length&&(r=[r.reduce((function(e,r){if(e)return t.forEach((function(t){e[t].push.apply(e[t],r[t])})),e}))]),r}(e),e},tv.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=Kg(e.matches)),e.impact&&(ma(Zn.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var nv=ce(Kn()),av=/\{\{.+?\}\}/g,ov=W((function e(t){$(this,e),this.lang="en",this.defaultConfig=t,this.standards=os,this._init(),this._defaultLocale=null}),[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),r=0;r<t.length;r++){var n=t[r],a=this.data.checks[n].messages,o=a.pass,i=a.fail,u=a.incomplete
e.checks[n]={pass:o,fail:i,incomplete:u}}for(var s=Object.keys(this.data.rules),l=0;l<s.length;l++){var c=s[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var D=h[m],g=this.data.failureSummaries[D].failureMessage
e.failureSummaries[D]={failureMessage:g}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.checks[n])throw new Error('Locale provided for unknown check: "'.concat(n,'"'))
this.data.checks[n]=lv(this.data.checks[n],e[n])}}},{key:"_applyRuleLocale",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.rules[n])throw new Error('Locale provided for unknown rule: "'.concat(n,'"'))
this.data.rules[n]=cv(this.data.rules[n],e[n])}}},{key:"_applyFailureSummaries",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.failureSummaries[n])throw new Error('Locale provided for unknown failureMessage: "'.concat(n,'"'))
this.data.failureSummaries[n]=dv(this.data.failureSummaries[n],e[n])}}},{key:"applyLocale",value:function(e){this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=pv(this.data.incompleteFallbackMessage,e.incompleteFallbackMessage)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=uv()
this.allowedOrigins=[]
var r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a=r.value
if(a===Zn.allOrigins)return void(this.allowedOrigins=["*"])
a!==Zn.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){n.e(e)}finally{n.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=to(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var r=uv()
t.allowedOrigins=r?[r]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=z({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,sv(e.rules,this,"addRule"),sv(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new tv(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter((function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]})).forEach((function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())}))),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new Jg(e)}},{key:"run",value:function(e,t,r,n){this.normalizeOptions(t),Ja.setRunOptions(t),i._selectCache=[]
var a=function(e,t,r){return e.reduce((function(e,n){return sm(n,t,r)?n.preload?(e.later.push(n),e):(e.now.push(n),e):e}),{now:[],later:[]})}(this.rules,e,t),o=a.now,u=a.later,s=xo()
o.forEach((function(r){s.defer(fv(r,e,t))}))
var l=xo()
u.length&&l.defer((function(e){tm(t).then((function(t){return e(t)})).catch((function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)}))}))
var c=xo()
c.defer(s),c.defer(l),c.then((function(a){var o=a.pop()
if(o&&o.length){var s=o[0]
s&&(e=z({},e,s))}var l=a[0]
if(!u.length)return i._selectCache=void 0,void r(l.filter((function(e){return!!e})))
var c=xo()
u.forEach((function(r){var n=fv(r,e,t)
c.defer(n)})),c.then((function(e){i._selectCache=void 0,r(l.concat(e).filter((function(e){return!!e})))})).catch(n)})).catch(n)}},{key:"after",value:function(e,t){var r=this.rules
return e.map((function(e){var n=ci(r,"id",e.id)
if(!n)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
return n.after(e,t)}))}},{key:"getRule",value:function(e){return this.rules.find((function(t){return t.id===e}))}},{key:"normalizeOptions",value:function(e){var t=[],r=[]
if(this.rules.forEach((function(e){r.push(e.id),e.tags.forEach((function(e){t.includes(e)||t.push(e)}))})),["object","string"].includes(o(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var n=e.runOnly.find((function(e){return t.includes(e)})),a=e.runOnly.find((function(e){return r.includes(e)}))
if(n&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var u=e.runOnly
if(u.value&&!u.values&&(u.values=u.value,delete u.value),!Array.isArray(u.values)||0===u.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(u.type))u.type="rule",u.values.forEach((function(e){if(!r.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")}))
else{if(!["tag","tags",void 0].includes(u.type))throw new Error("Unknown runOnly type '".concat(u.type,"'"))
u.type="tag"
var s=u.values.filter((function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)}))
0!==s.length&&i.log("Could not find tags `"+s.join("`, `")+"`")}}return"object"===o(e.rules)&&Object.keys(e.rules).forEach((function(e){if(!r.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")})),e}},{key:"setBranding",value:function(e){var t={brand:this.brand,application:this.application}
"string"==typeof e&&(this.application=e),e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application),this._constructHelpUrls(t)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=(i.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach((function(n){e.data.rules[n.id]||(e.data.rules[n.id]={})
var a=e.data.rules[n.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===hv(t,n.id,r))&&(a.helpUrl=hv(e,n.id,r))}))}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),iv=ov
function uv(){return r.origin&&"null"!==r.origin?r.origin:r.location&&r.location.origin&&"null"!==r.location.origin?r.location.origin:void 0}function sv(e,t,r){var n,a
for(n=0,a=e.length;n<a;n++)t[r](e[n])}var lv=function(e,t){var r=t.pass,n=t.fail
return"string"==typeof r&&av.test(r)&&(r=nv.default.compile(r)),"string"==typeof n&&av.test(n)&&(n=nv.default.compile(n)),z({},e,{messages:{pass:r||e.messages.pass,fail:n||e.messages.fail,incomplete:"object"===o(e.messages.incomplete)?z({},e.messages.incomplete,t.incomplete):t.incomplete}})},cv=function(e,t){var r=t.help,n=t.description
return"string"==typeof r&&av.test(r)&&(r=nv.default.compile(r)),"string"==typeof n&&av.test(n)&&(n=nv.default.compile(n)),z({},e,{help:r||e.help,description:n||e.description})},dv=function(e,t){var r=t.failureMessage
return"string"==typeof r&&av.test(r)&&(r=nv.default.compile(r)),z({},e,{failureMessage:r||e.failureMessage})},pv=function(e,t){return"string"==typeof t&&av.test(t)&&(t=nv.default.compile(t)),t||e}
function fv(e,t,r){return r.performanceTimer&&$h.mark("mark_rule_start_"+e.id),function(n,a){e.run(t,r,(function(e){n(e)}),(function(t){if(r.debug)a(t)
else{var o=Object.assign(new ev(e),{result:Zn.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
n(o)}}))}}function hv(e,t,r){var n=e.brand,a=e.application,o=e.lang
return Zn.helpUrlBase+n+"/"+(r||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}function mv(e){var t=r&&"Node"in r&&"NodeList"in r,n=!!a
if(!t||!n){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
n||(Qa.set("globalDocumentSet",!0),a=e.ownerDocument),t||(Qa.set("globalWindowSet",!0),r=a.defaultView)}}var Dv=function(){Qa.get("globalDocumentSet")&&(Qa.set("globalDocumentSet",!1),a=null),Qa.get("globalWindowSet")&&(Qa.set("globalWindowSet",!1),r=null),i._memoizedFns.forEach((function(e){return e.clear()})),Qa.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0}
function gv(e,t,r,n){try{e=new Eh(e),i._tree=e.flatTree,i._selectorData=Ia(e.flatTree)}catch(e){return Dv(),n(e)}var a=xo(),o=i._audit
t.performanceTimer&&$h.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer((function(r,n){fi(e,t,"rules",null,r,n)})),a.defer((function(r,n){o.run(e,t,r,n)})),a.then((function(a){try{t.performanceTimer&&$h.auditEnd()
var i=pi(a.map((function(e){return{results:e}})))
e.initiator&&((i=o.after(i,t)).forEach(am),i=i.map(ca))
try{r(i,Dv)}catch(e){Dv(),Jn(e)}}catch(e){Dv(),n(e)}})).catch((function(e){Dv(),n(e)}))}function vv(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach((function(e){i._audit.registerCommand(e)}))}function bv(e){var t,r,n,u,s=V(e,3),l=s[0],c=s[1],d=s[2],p=new TypeError("axe.run arguments are invalid")
if(!ph(u=l)&&!fh(u)){if(void 0!==d)throw p
d=c,c=l,l=a}if("object"!==o(c)){if(void 0!==d)throw p
d=c,c={}}if("function"!=typeof d&&void 0!==d)throw p
return(c=to(c)).reporter=null!==(t=null!==(r=c.reporter)&&void 0!==r?r:null===(n=i._audit)||void 0===n?void 0:n.reporter)&&void 0!==t?t:"v1",{context:l,options:c,callback:d}}r.top!==r&&(ti.subscribe("axe.start",(function(e,t,r){var n=r,o=function(e){e instanceof Error==0&&(e=new Error(e)),r(e)},u=e&&e.context||{}
u.hasOwnProperty("include")&&!u.include.length&&(u.include=[a])
var s=e&&e.options||{}
switch(e.command){case"rules":return gv(u,s,(function(e,t){e=si.mapRawResults(e),n(e),t()}),o)
case"cleanup-plugin":return km(n,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,r)}})),ti.subscribe("axe.ping",(function(e,t,r){r({axe:!0})}))),vv.prototype.run=function(){return this._run.apply(this,arguments)},vv.prototype.collect=function(){return this._collect.apply(this,arguments)},vv.prototype.cleanup=function(e){var t=i.utils.queue(),r=this
Object.keys(this._registry).forEach((function(e){t.defer((function(t){r._registry[e].cleanup(t)}))})),t.then(e)},vv.prototype.add=function(e){this._registry[e.id]=e}
var yv=function(){}
function Fv(e){var t=e.frames,r=e.frameSpec
return r?t.map((function(e){return si.mergeSpecs(e,r)})):t}var wv=function(e,t,r){if("function"==typeof t&&(r=t,t={}),!e||!Array.isArray(e))return r(e)
r(e.map((function(e){for(var t=z({},e),r=0,n=["passes","violations","incomplete","inapplicable"];r<n.length;r++){var a=n[r]
t[a]=si.mapRawNodeResults(t[a])}return t})))},Ev={base:{Audit:iv,CheckResult:Qg,Check:Jg,Context:Eh,RuleResult:ev,Rule:tv,metadataFunctionMap:Yg},public:{reporters:Nm},helpers:{failureSummary:Kf,incompleteFallbackMessage:Xf,processAggregate:Jf},utils:{setDefaultFrameMessenger:Jo,cacheNodeSelectors:$f,getNodesMatchingExpression:zf,convertSelector:mo},commons:{dom:{nativelyHidden:Bi,displayHidden:Ri,visibilityHidden:_i,contentVisibiltyHidden:Si,ariaHidden:Oi,opacityHidden:Mi,scrollHidden:Ii,overflowHidden:Pi,clipHidden:ji,areaHidden:qi,detailsHidden:Li}}}
i._thisWillBeDeletedDoNotUse=Ev,i.constants=Zn,i.log=Jn,i.AbstractVirtualNode=ta,i.SerialVirtualNode=Am,i.VirtualNode=jf,i._cache=Qa,i.imports=nc,i.cleanup=km,i.configure=function(e){var t
if(!(t=i._audit))throw new Error("No audit configured")
if(e.axeVersion||e.ver){var r=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(r))throw new Error("Invalid configured version ".concat(r))
var n=V(r.split("-"),2),a=n[0],o=n[1],u=V(a.split(".").map(Number),3),s=u[0],l=u[1],c=u[2],d=V(i.version.split("-"),2),p=d[0],f=d[1],h=V(p.split(".").map(Number),3),m=h[0],D=h[1],g=h[2]
if(s!==m||D<l||D===l&&g<c||s===m&&l===D&&c===g&&o&&o!==f)throw new Error("Configured version ".concat(r," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||Tm(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach((function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)}))}var v,b=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach((function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
b.push(e.id),t.addRule(e)}))}if(e.disableOtherRules&&t.rules.forEach((function(e){!1===b.includes(e.id)&&(e.enabled=!1)})),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(v=e.standards,Object.keys(as).forEach((function(e){v[e]&&(as[e]=mi(as[e],v[e]))}))),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(Zn.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){ti.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter((function(t){return!!e.filter((function(e){return-1!==t.tags.indexOf(e)})).length})):i._audit.rules,r=i._audit.data.rules||{}
return t.map((function(e){var t=r[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds}}))},i._load=function(e){i._audit=new iv(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new vv(e)},i.hasReporter=Tm,i.getReporter=Bm,i.addReporter=function(e,t,r){Nm[e]=t,r&&(xm=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(as).forEach((function(e){as[e]=ns[e]}))},i._runRules=gv,i.runVirtualRule=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
r.reporter=r.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof ta||(t=new Am(t))
var n=xh(e)
if(!n)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(n=Object.create(n,{excludeHidden:{value:!1}})).runSync(a,r)
am(o),ca(o)
var u=fa([o])
return u.violations.forEach((function(e){return e.nodes.forEach((function(e){e.failureSummary=Kf(e)}))})),z({},ih(),u,{toolOptions:r})},i.run=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
mv(t[0])
var n=bv(t),a=n.context,o=n.options,u=n.callback,s=void 0===u?yv:u,l=function(e){var t,r,n
return"function"==typeof Promise&&e===yv?t=new Promise((function(e,t){r=t,n=e})):(n=function(t){return e(null,t)},r=function(t){return e(t)}),{thenable:t,reject:r,resolve:n}}(s),c=l.thenable,d=l.resolve,p=l.reject
try{ma(i._audit,"No audit configured"),ma(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return function(e,t){if("function"!=typeof t||t===yv)throw e
t(e.message)}(e,s)}return i._running=!0,o.performanceTimer&&i.utils.performanceTimer.start(),i._runRules(a,o,(function(e,t){var r=function(e){i._running=!1,t()
try{p(e)}catch(e){i.log(e)}}
o.performanceTimer&&i.utils.performanceTimer.end()
try{!function(e,t,r,n){var a=Bm(t.reporter)(e,t,r,n)
void 0!==a&&r(a)}(e,o,(function(e){i._running=!1,t()
try{d(e)}catch(e){i.log(e)}}),r)}catch(e){r(e)}}),(function(e){o.performanceTimer&&i.utils.performanceTimer.end(),i._running=!1,s(e),p(e)})),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return e&&"object"===o(e.documentElement)&&"object"===o(e.defaultView)&&(e=e.documentElement),mv(e),i._tree=Gf(e),i._selectorData=Ia(i._tree),i._tree[0]},i.teardown=Dv,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
var n=bv(t),a=n.options,o=n.context
ma(i._audit,"Axe is not configured. Audit is missing."),ma(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var u=new Eh(o,i._tree)
return i._tree=u.flatTree,i._selectorData=Ia(u.flatTree),i._running=!0,a.elementRef=!1,new Promise((function(e,t){i._audit.run(u,a,e,t)})).then((function(e){e=si.mapRawResults(e)
var t,r=u.frames.map((function(e){var t=e.node
return si.toSpec(t)}))
return u.initiator&&(t=ih()),i._running=!1,Dv(),{results:e,frames:r,environmentData:t}})).catch((function(e){return i._running=!1,Dv(),Promise.reject(e)}))},i.finishRun=function(e){var t,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=to(a)
var o=(e.find((function(e){return e.environmentData}))||{}).environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(r=a.reporter)&&void 0!==r?r:null===(n=i._audit)||void 0===n?void 0:n.reporter)&&void 0!==t?t:"v1",function(e){var t,r=[],n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a=t.value,o=r.shift()
if(a){a.frameSpec=null!=o?o:null
var i=Fv(a)
r.unshift.apply(r,q(i))}}}catch(e){n.e(e)}finally{n.f()}}(e)
var u=pi(e)
return(u=i._audit.after(u,a)).forEach(am),function(e,t){return new Promise((function(r,n){Bm(t.reporter)(e,t,r,n)}))}(u=u.map(ca),z({environmentData:o},a))},i.commons=wD,i.utils=ra,i.addReporter("na",(function(e,t,r){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,w)
r(z({},ih(a),{toolOptions:o},Jf(e,t)))})),i.addReporter("no-passes",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,E)
t.resultTypes=["violations"]
var i=Jf(e,t).violations
r(z({},ih(a),{toolOptions:o,violations:i}))})),i.addReporter("rawEnv",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,C)
wv(e,o,(function(e){var t=ih(a)
r({raw:e,env:t})}))})),i.addReporter("raw",wv),i.addReporter("v1",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,x),i=Jf(e,t),u=function(e){e.nodes.forEach((function(e){e.failureSummary=Kf(e)}))}
i.incomplete.forEach(u),i.violations.forEach(u),r(z({},ih(a),{toolOptions:o},i))})),i.addReporter("v2",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,A),i=Jf(e,t)
r(z({},ih(a),{toolOptions:o},i))}),!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensures every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensures <area> elements of image maps have alternate text",help:"Active <area> elements must have alternate text"},"aria-allowed-attr":{description:"Ensures an element's role supports its ARIA attributes",help:"Elements must only use supported ARIA attributes"},"aria-allowed-role":{description:"Ensures role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-braille-equivalent":{description:"Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",help:"aria-braille attributes must have a non-braille equivalent"},"aria-command-name":{description:"Ensures every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-conditional-attr":{description:"Ensures ARIA attributes are used as described in the specification of the element's role",help:"ARIA attributes must be used as specified for the element's role"},"aria-deprecated-role":{description:"Ensures elements do not use deprecated roles",help:"Deprecated ARIA roles must not be used"},"aria-dialog-name":{description:"Ensures every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:'Ensures aria-hidden="true" is not present on the document body.',help:'aria-hidden="true" must not be present on the document body'},"aria-hidden-focus":{description:"Ensures aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensures every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensures every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensures every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-prohibited-attr":{description:"Ensures ARIA attributes are not prohibited for an element's role",help:"Elements must only use permitted ARIA attributes"},"aria-required-attr":{description:"Ensures elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensures elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensures elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensures all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensures role="text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensures every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensures every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensures every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensures all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensures attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensures <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensures <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensures buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",help:"Elements must meet enhanced color contrast ratio thresholds"},"color-contrast":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",help:"Elements must meet minimum color contrast ratio thresholds"},"css-orientation-lock":{description:"Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensures <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensures <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensures each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensures every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensures every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensures every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensures headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensures table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensures elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensures form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensures <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensures <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensures <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensures the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensures every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensures the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensures <img> elements have alternate text or a role of none or presentation",help:"Images must have alternate text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensures input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensures <input type="image"> elements have alternate text',help:"Image buttons must have alternate text"},"label-content-name-mismatch":{description:"Ensures that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensures every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensures the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensures the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensures the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensures the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensures the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensures the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensures the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensures the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{help:"Ensures landmarks are unique",description:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensures links have discernible text",help:"Links must have discernible text"},list:{description:"Ensures that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensures <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensures <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensures <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensures <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensures <object> elements have alternate text",help:"<object> elements must have alternate text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",help:"Ensure elements marked as presentational are consistently ignored"},region:{description:"Ensures all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:'Ensures [role="img"] elements have alternate text',help:'[role="img"] elements must have an alternative text'},"scope-attr-valid":{description:"Ensures the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensures select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensures that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"svg-img-alt":{description:"Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensures tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch target have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensures lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensures <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element uses aria-busy="true" while showing a loader'}},"aria-conditional-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{checkbox:'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',rowSingular:"This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",rowPlural:"These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"ensure aria-errormessage value `${data.values}` references an existing element",plural:"ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:{default:"Required ARIA children are present","aria-busy":"Element has an aria-busy attribute, so it is allowed to omit required children"},fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}",controlsWithinPopup:"Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},"braille-label-equivalent":{impact:"serious",messages:{pass:"aria-braillelabel is used on an element with accessible text",fail:"aria-braillelabel is used on an element with no accessible text",incomplete:"Unable to compute accessible text"}},"braille-roledescription-equivalent":{impact:"serious",messages:{pass:"aria-brailleroledescription is used on an element with aria-roledescription",fail:{noRoleDescription:"aria-brailleroledescription is used on an element with no aria-roledescription",emptyRoleDescription:"aria-brailleroledescription is used on an element with an empty aria-roledescription"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"serious",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",complexTextShadows:"Element's contrast could not be determined because it uses complex text shadows",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",incomplete:{default:"Check if the link needs styling to distinguish it from nearby text",pseudoContent:"Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"},fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"the autocomplete value is on an appropriate element",fail:"the autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted"}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"serious",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"serious",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:'Focusable content should have tabindex="-1" or be removed from the DOM'}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Form element has an explicit <label>",fail:"Form element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Form element has an implicit (wrapped) <label>",fail:"Form element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped} <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item parent element has a role that is not role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions is available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:{default:"Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",large:"Target far exceeds the minimum size of ${data.minOffset}px."},fail:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",incomplete:{default:"Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",nonTabbableNeighbor:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable",large:"Target far exceeds the minimum size of ${data.minSize}px."},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",r=e
if(r)for(var n=-1,a=r.length-1;n<a;)t+="\n  "+r[n+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",r=e
if(r)for(var n=-1,a=r.length-1;n<a;)t+="\n  "+r[n+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",impact:"serious",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",impact:"critical",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",impact:"critical",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],any:[],none:["aria-unsupported-attr"]},{id:"aria-allowed-role",impact:"minor",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-braille-equivalent",reviewOnFail:!0,impact:"serious",selector:"[aria-brailleroledescription], [aria-braillelabel]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:["braille-roledescription-equivalent","braille-label-equivalent"],any:[],none:[]},{id:"aria-command-name",impact:"serious",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-conditional-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-conditional-attr"}],any:[],none:[]},{id:"aria-deprecated-role",impact:"minor",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["deprecatedrole"]},{id:"aria-dialog-name",impact:"serious",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",impact:"critical",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag131","wcag412","EN-301-549","EN-9.1.3.1","EN-9.4.1.2"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",impact:"serious",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",impact:"serious",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",impact:"serious",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",impact:"serious",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-prohibited-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[],any:[],none:[{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-required-attr",impact:"critical",selector:"[role]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",impact:"critical",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",impact:"critical",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",impact:"serious",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","deprecated"],enabled:!1,all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",impact:"critical",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole"]},{id:"aria-text",impact:"serious",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",impact:"serious",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",impact:"serious",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",impact:"serious",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",impact:"critical",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","EN-301-549","EN-9.1.2.1","section508","section508.22.a","deprecated"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",impact:"serious",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","EN-301-549","EN-9.1.3.5","ACT"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",impact:"serious",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","EN-301-549","EN-9.1.4.12","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",impact:"serious",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",impact:"critical",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"bypass",impact:"serious",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o","TTv5","TT9.a","EN-301-549","EN-9.2.4.1"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","TTv5","TT13.c","EN-301-549","EN-9.1.4.3","ACT"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",impact:"serious",selector:"html",tags:["cat.structure","wcag134","wcag21aa","EN-301-549","EN-9.1.3.4","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",impact:"serious",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",impact:"serious",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["dlitem"],none:[]},{id:"document-title",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","TTv5","TT12.a","EN-301-549","EN-9.2.4.2","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",impact:"serious",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",impact:"critical",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],reviewOnFail:!0,actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",impact:"minor",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",impact:"minor",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",impact:"minor",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",impact:"minor",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",impact:"moderate",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332","TTv5","TT5.c","EN-301-549","EN-9.3.3.2"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",impact:"serious",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",impact:"critical",selector:"html, frame, iframe",tags:["cat.structure","best-practice","review-item"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",impact:"serious",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag2a","wcag412","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",impact:"serious",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",impact:"moderate",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",impact:"minor",selector:"*",excludeHidden:!1,tags:["cat.structure","best-practice","experimental","review-item"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",impact:"serious",selector:'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",impact:"moderate",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","EN-301-549","EN-9.3.1.1","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",impact:"minor",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",impact:"critical",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","TT7.b","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",impact:"minor",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",impact:"critical",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"input-image-alt",impact:"critical",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","EN-9.4.1.2","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"label-content-name-mismatch",impact:"serious",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","EN-301-549","EN-9.2.5.3","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",impact:"serious",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",impact:"critical",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["hidden-explicit-label"]},{id:"landmark-banner-is-top-level",impact:"moderate",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",impact:"moderate",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",impact:"moderate",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",role:"banner"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",impact:"moderate",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",impact:"serious",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141","TTv5","TT13.a","EN-301-549","EN-9.1.4.1"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",impact:"serious",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",impact:"serious",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",impact:"serious",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["listitem"],none:[]},{id:"marquee",impact:"serious",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",impact:"minor",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",impact:"critical",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","TTv5","TT8.a","EN-301-549","EN-9.2.2.1"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",impact:"minor",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",impact:"critical",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","EN-301-549","EN-9.1.4.4","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",impact:"serious",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",impact:"moderate",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","TTv5","TT2.a","EN-301-549","EN-9.1.4.2","ACT"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",impact:"serious",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","EN-301-549","EN-9.1.1.1"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",impact:"serious",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",impact:"minor",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",impact:"moderate",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",impact:"serious",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",impact:"moderate",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",impact:"serious",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211","wcag213","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","EN-9.2.1.3"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",impact:"critical",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["hidden-explicit-label"]},{id:"server-side-image-map",impact:"minor",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],all:[],any:[],none:["exists"]},{id:"skip-link",impact:"moderate",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"svg-img-alt",impact:"serious",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",impact:"serious",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",impact:"minor",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","EN-301-549","EN-9.1.3.1"],all:["caption-faked"],any:[],none:[]},{id:"target-size",impact:"serious",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["cat.sensory-and-visual-cues","wcag22aa","wcag258"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",impact:"critical",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",impact:"serious",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",impact:"serious",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","TTv5","TT11.b","EN-301-549","EN-9.3.1.2","ACT"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",impact:"critical",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a","TTv5","TT17.a","EN-301-549","EN-9.1.2.2"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate",deprecated:!0},{id:"aria-conditional-attr",evaluate:"aria-conditional-attr-evaluate",options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"braille-label-equivalent",evaluate:"braille-label-equivalent-evaluate"},{id:"braille-roledescription-equivalent",evaluate:"braille-roledescription-equivalent-evaluate"},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",role:"banner"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate"},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},747:(e,t,r)=>{var n
e=r.nmd(e),function(){"use strict"
function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function u(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,u=[],s=!0,l=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
s=!1}else for(;!(s=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=function(e,t){if("object"!=typeof e||!e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){if(e){if("string"==typeof e)return a(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}var f=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==v)return v
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),h=f.console,m=f.setTimeout,D=f.clearTimeout,g=f.process,v=f.window,b=v&&v.document,y=v&&v.navigator,F=function(){var e="qunit-test-string"
try{return f.sessionStorage.setItem(e,e),f.sessionStorage.removeItem(e),f.sessionStorage}catch(e){return}}(),w="function"==typeof f.Map&&"function"==typeof f.Map.prototype.keys&&"function"==typeof f.Symbol&&"symbol"===d(f.Symbol.iterator)?f.Map:function(e){var t=this,r=Object.create(null),n=Object.prototype.hasOwnProperty
this.has=function(e){return n.call(r,e)},this.get=function(e){return r[e]},this.set=function(e,t){return n.call(r,e)||this.size++,r[e]=t,this},this.delete=function(e){n.call(r,e)&&(delete r[e],this.size--)},this.forEach=function(e){for(var t in r)e(r[t],t)},this.keys=function(){return Object.keys(r)},this.clear=function(){r=Object.create(null),this.size=0},this.size=0,e&&e.forEach((function(e,r){t.set(r,e)}))},E="function"==typeof f.Set&&"function"==typeof f.Set.prototype.values?f.Set:function(e){var t=Object.create(null)
return Array.isArray(e)&&e.forEach((function(e){t[e]=!0})),{add:function(e){t[e]=!0},has:function(e){return e in t},get size(){return Object.keys(t).length}}},C=Object.prototype.toString,x=Object.prototype.hasOwnProperty,A={now:v&&v.performance&&v.performance.now?v.performance.now.bind(v.performance):Date.now}
function k(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}var N=Array.prototype.includes?function(e,t){return t.includes(e)}:function(e,t){return-1!==t.indexOf(e)}
function T(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t&&S("array",e)?[]:{}
for(var n in e)if(x.call(e,n)){var a=e[n]
r[n]=a===Object(a)?T(a,t):a}return r}function B(e,t){if(e!==Object(e))return e
var r={}
for(var n in t)x.call(t,n)&&x.call(e,n)&&(r[n]=B(e[n],t[n]))
return r}function R(e,t,r){for(var n in t)x.call(t,n)&&(void 0===t[n]?delete e[n]:r&&void 0!==e[n]||(e[n]=t[n]))
return e}function _(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=C.call(e).match(/^\[object\s(.*)\]$/),r=t&&t[1]
switch(r){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return r.toLowerCase()
default:return d(e)}}function S(e,t){return _(t)===e}function O(e,t){for(var r=e+""+t,n=0,a=0;a<r.length;a++)n=(n<<5)-n+r.charCodeAt(a),n|=0
var o=(4294967296+n).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function M(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}function I(e){return e?(""+e).replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}var P=new E(["boolean","number","string"]),j=[]
function q(e,t){return e===t}function L(e,t){return e===t||e.valueOf()===t.valueOf()}function z(e){var t=Object.getPrototypeOf(e)
return t&&null!==t.constructor?e.constructor:Object}function V(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var H={undefined:q,null:q,boolean:L,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:L,symbol:q,date:L,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&V(e)===V(t)},function:q,array:function(e,t){if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++)if(!$(e[r],t[r]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var r=!0
return e.forEach((function(e){if(r){var n=!1
t.forEach((function(t){if(!n){var r=j
j=[],$(t,e)&&(n=!0),j=r}})),n||(r=!1)}})),r},map:function(e,t){if(e.size!==t.size)return!1
var r=!0
return e.forEach((function(e,n){if(r){var a=!1
t.forEach((function(t,r){if(!a){var o=j
j=[],H.array([t,r],[e,n])&&(a=!0),j=o}})),a||(r=!1)}})),r}},U={undefined:q,null:q,boolean:q,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:q,symbol:q,function:q,object:function(e,t){if(j.some((function(r){return r.a===e&&r.b===t})))return!0
j.push({a:e,b:t})
var r=_(e),n=_(t)
if("object"!==r||"object"!==n)return r===n&&H[r](e,t)
if(!1===function(e,t){return z(e)===z(t)}(e,t))return!1
var a=[],o=[]
for(var i in e)if(a.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof t[i]||e[i].toString()!==t[i].toString())&&!$(e[i],t[i]))return!1
for(var u in t)o.push(u)
return H.array(a.sort(),o.sort())}}
function $(e,t){if(e===t)return!0
var r=d(e),n=d(t)
return r!==n?("object"===r&&P.has(_(e))?e.valueOf():e)===("object"===n&&P.has(_(t))?t.valueOf():t):U[r](e,t)}function G(e,t){var r=$(e,t)
return j=[],r}function W(e,t){if(2===arguments.length)return e===t||G(e,t)
for(var r=arguments.length-1;r>0;){if(!G(arguments[r-1],arguments[r]))return!1
r--}return!0}var Y={altertitle:!0,collapse:!0,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,requireExpects:!1,scrolltop:!0,storage:F,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},pq:null,_deprecated_timeout_shown:!1,blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}}
function Q(e,t){("boolean"==typeof e||"string"==typeof e&&""!==e)&&(Y[t]=!0===e||"true"===e)}function K(e,t){("number"==typeof e||"string"==typeof e&&/^[0-9]+$/.test(e))&&(Y[t]=+e)}function X(e,t){"string"==typeof e&&""!==e&&(Y[t]=e)}function Z(e,t){"string"==typeof e&&""!==e&&(Y[t]=[e])}function J(e){Q(e.qunit_config_altertitle,"altertitle"),Q(e.qunit_config_autostart,"autostart"),Q(e.qunit_config_collapse,"collapse"),Q(e.qunit_config_failonzerotests,"failOnZeroTests"),X(e.qunit_config_filter,"filter"),X(e.qunit_config_fixture,"fixture"),Q(e.qunit_config_hidepassed,"hidepassed"),K(e.qunit_config_maxdepth,"maxDepth"),X(e.qunit_config_module,"module"),Z(e.qunit_config_moduleid,"moduleId"),Q(e.qunit_config_noglobals,"noglobals"),Q(e.qunit_config_notrycatch,"notrycatch"),Q(e.qunit_config_reorder,"reorder"),Q(e.qunit_config_requireexpects,"requireExpects"),Q(e.qunit_config_scrolltop,"scrolltop"),X(e.qunit_config_seed,"seed"),Z(e.qunit_config_testid,"testId"),K(e.qunit_config_testtimeout,"testTimeout")}g&&"env"in g&&J(g.env),J(f)
var ee=f&&f.QUnit&&!f.QUnit.version&&f.QUnit.config
ee&&R(Y,ee),Y.modules.push(Y.currentModule)
var te=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function r(e,t,r){var n=o.separator(),a=o.indent(1)
return t.join&&(t=t.join(","+n+a)),t?[e,a+t,o.indent()+r].join(n):e+r}function n(e,t){if(o.maxDepth&&o.depth>o.maxDepth)return"[object Array]"
this.up()
for(var n=e.length,a=new Array(n);n--;)a[n]=this.parse(e[n],void 0,t)
return this.down(),r("[",a,"]")}var a=/^function (\w+)/,o={parse:function(e,t,r){var n=(r=r||[]).indexOf(e)
if(-1!==n)return"recursion(".concat(n-r.length,")")
t=t||this.typeOf(e)
var a=this.parsers[t],o=d(a)
if("function"===o){r.push(e)
var i=a.call(this,e,r)
return r.pop(),i}return"string"===o?a:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":S("regexp",e)?"regexp":S("date",e)?"date":S("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===C.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":d(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:r,depth:1,maxDepth:Y.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",n="name"in e?e.name:(a.exec(e)||[])[1]
return n&&(t+=" "+n),r(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:n,nodelist:n,arguments:n,object:function(e,t){var n=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var a=[]
for(var i in e)a.push(i)
var u=["message","name"]
for(var s in u){var l=u[s]
l in e&&!N(l,a)&&a.push(l)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
n.push(o.parse(d,"key")+": "+o.parse(p,void 0,t))}return o.down(),r("{",n,"}")},node:function(e){var t=o.HTML?"&lt;":"<",r=o.HTML?"&gt;":">",n=e.nodeName.toLowerCase(),a=t+n,i=e.attributes
if(i)for(var u=0;u<i.length;u++){var s=i[u].nodeValue
s&&"inherit"!==s&&(a+=" "+i[u].nodeName+"="+o.parse(s,"attribute"))}return a+=r,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+n+r},functionArgs:function(e){var t=e.length
if(!t)return""
for(var r=new Array(t);t--;)r[t]=String.fromCharCode(97+t)
return" "+r.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),re={warn:h?Function.prototype.bind.call(h.warn||h.log,h):function(){}},ne=u((function e(t,r){o(this,e),this.name=t,this.fullName=r?r.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],r&&r.pushChildSuite(this)}),[{key:"start",value:function(e){return e&&(this._startTime=A.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){return e&&(this._endTime=A.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,r=e.failed,n=e.skipped,a=e.todo
return r?"failed":n===t?"skipped":a===t?"todo":"passed"}}]),ae=[],oe=new ne
function ie(e,t,r){var n=t[r]
"function"==typeof n&&e[r].push(n),delete t[r]}function ue(e,t){return function(r){Y.currentModule!==e&&re.warn("The `"+t+"` hook was called inside the wrong module (`"+Y.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(r)}}function se(e,t,r){"function"==typeof t&&(r=t,t=void 0)
var n=function(e,t,r){var n=ae.length?ae.slice(-1)[0]:null,a=null!==n?[n.name,e].join(" > "):e,o=n?n.suiteReport:oe,i=null!==n&&n.skip||r.skip,u=null!==n&&n.todo||r.todo,s={}
n&&R(s,n.testEnvironment),R(s,t)
var l={name:a,parentModule:n,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:s,tests:[],moduleId:O(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new ne(e,o),stats:null,skip:i,todo:!i&&u,ignored:r.ignored||!1}
return n&&n.childModules.push(l),Y.modules.push(l),l}(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}),a=n.testEnvironment,o=n.hooks
ie(o,a,"before"),ie(o,a,"beforeEach"),ie(o,a,"afterEach"),ie(o,a,"after")
var i={before:ue(n,"before"),beforeEach:ue(n,"beforeEach"),afterEach:ue(n,"afterEach"),after:ue(n,"after")},u=Y.currentModule
if(Y.currentModule=n,"function"==typeof r){ae.push(n)
try{var s=r.call(n.testEnvironment,i)
s&&"function"==typeof s.then&&re.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{ae.pop(),Y.currentModule=n.parentModule||u}}}var le=!1
function ce(e,t,r){var n,a=le&&(n=Y.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!ae.some((function(e){return n.includes(e.moduleId)})))
se(e,t,r,{ignored:a})}ce.only=function(){le||(Y.modules.length=0,Y.queue.length=0,Y.currentModule.ignored=!0),le=!0,se.apply(void 0,arguments)},ce.skip=function(e,t,r){le||se(e,t,r,{skip:!0})},ce.todo=function(e,t,r){le||se(e,t,r,{todo:!0})}
var de=(fe(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+[/\\]/,"")
function pe(e,t){if(t=void 0===t?4:t,e&&e.stack){var r=e.stack.split("\n")
if(/^error$/i.test(r[0])&&r.shift(),de){for(var n=[],a=t;a<r.length&&-1===r[a].indexOf(de);a++)n.push(r[a])
if(n.length)return n.join("\n")}return r[t]}}function fe(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return pe(t,e)}var he=function(){function e(t){o(this,e),this.test=t}return u(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,Y.timeout&&(D(Y.timeout),Y.timeout=null,Y.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,r=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",r=!1),this.pushResult({result:r,message:t})}},{key:"verifySteps",value:function(e,t){var r=this.test.steps.slice()
this.deepEqual(r,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){if(void 0===e)e=1
else if("number"!=typeof e)throw new TypeError("async takes number as an input")
var t=e
return this.test.internalStop(t)}},{key:"closeTo",value:function(e,t,r,n){if("number"!=typeof r)throw new TypeError("closeTo() requires a delta argument")
this.pushResult({result:Math.abs(e-t)<=r,actual:e,expected:t,message:n||"value should be within ".concat(r," inclusive")})}},{key:"push",value:function(t,r,n,a,o){return re.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead. https://qunitjs.com/api/assert/pushResult"),(this instanceof e?this:Y.current.assert).pushResult({result:t,actual:r,expected:n,message:a,negative:o})}},{key:"pushResult",value:function(t){var r=this,n=r instanceof e&&r.test||Y.current
if(!n)throw new Error("assertion outside test context, in "+fe(2))
return r instanceof e||(r=n.assert),r.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(te.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(te.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,r){this.pushResult({result:t==e,actual:e,expected:t,message:r})}},{key:"notEqual",value:function(e,t,r){this.pushResult({result:t!=e,actual:e,expected:t,message:r,negative:!0})}},{key:"propEqual",value:function(e,t,r){e=T(e),t=T(t),this.pushResult({result:W(e,t),actual:e,expected:t,message:r})}},{key:"notPropEqual",value:function(e,t,r){e=T(e),t=T(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:r,negative:!0})}},{key:"propContains",value:function(e,t,r){e=B(e,t),t=T(t,!1),this.pushResult({result:W(e,t),actual:e,expected:t,message:r})}},{key:"notPropContains",value:function(e,t,r){e=B(e,t),t=T(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:r,negative:!0})}},{key:"deepEqual",value:function(e,t,r){this.pushResult({result:W(e,t),actual:e,expected:t,message:r})}},{key:"notDeepEqual",value:function(e,t,r){this.pushResult({result:!W(e,t),actual:e,expected:t,message:r,negative:!0})}},{key:"strictEqual",value:function(e,t,r){this.pushResult({result:t===e,actual:e,expected:t,message:r})}},{key:"notStrictEqual",value:function(e,t,r){this.pushResult({result:t!==e,actual:e,expected:t,message:r,negative:!0})}},{key:"throws",value:function(t,r,n){var a=s(me(r,n,"throws"),2)
r=a[0],n=a[1]
var o=this instanceof e&&this.test||Y.current
if("function"==typeof t){var i,u=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=s(De(i,r,n),3)
u=l[0],r=l[1],n=l[2]}o.assert.pushResult({result:u,actual:i&&M(i),expected:r,message:n})}else o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,r,n){var a=s(me(r,n,"rejects"),2)
r=a[0],n=a[1]
var o=this instanceof e&&this.test||Y.current,i=t&&t.then
if("function"==typeof i){var u=this.async()
return i.call(t,(function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),u()}),(function(e){var t,a=s(De(e,r,n),3)
t=a[0],r=a[1],n=a[2],o.assert.pushResult({result:t,actual:e&&M(e),expected:r,message:n}),u()}))}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}])}()
function me(e,t,r){var n=_(e)
if("string"===n){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+r+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==n&&"function"!==n&&"object"!==n)throw new Error("Invalid expected value type ("+n+") provided to assert."+r+".")
return[e,t]}function De(e,t,r){var n=!1,a=_(t)
if(t){if("regexp"===a)n=t.test(M(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)n=!0
else if("object"===a)n=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=M(t)
else if("function"===a)try{n=!0===t.call({},e),t=null}catch(e){t=M(e)}}else n=!0
return[n,t,r]}he.prototype.raises=he.prototype.throws
var ge=Object.create(null),ve=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function be(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var r=ge[e],n=r?l(r):[],a=0;a<n.length;a++)n[a](t)}var ye="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function Fe(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var we={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==ye)return ye
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
if(o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var r=new this.constructor(a)
return i(this,new c(e,t,r)),r},o.prototype.finally=function(e){var t=this.constructor
return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){return t.reject(r)}))}))},o.all=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var a=Array.prototype.slice.call(e)
if(0===a.length)return t([])
var o=a.length
function i(e,n){try{if(n&&("object"===d(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){i(e,t)}),r)}a[e]=n,0==--o&&t(a)}catch(e){r(e)}}for(var u=0;u<a.length;u++)i(u,a[u])}))},o.allSettled=function(e){return new this((function(t,r){if(!e||void 0===e.length)return r(new TypeError(d(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var n=Array.prototype.slice.call(e)
if(0===n.length)return t([])
var a=n.length
function o(e,r){if(r&&("object"===d(r)||"function"==typeof r)){var i=r.then
if("function"==typeof i)return void i.call(r,(function(t){o(e,t)}),(function(r){n[e]={status:"rejected",reason:r},0==--a&&t(n)}))}n[e]={status:"fulfilled",value:r},0==--a&&t(n)}for(var i=0;i<n.length;i++)o(i,n[i])}))},o.resolve=function(e){return e&&"object"===d(e)&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,r){r(e)}))},o.race=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var a=0,i=e.length;a<i;a++)o.resolve(e[a]).then(t,r)}))},"function"==typeof setImmediate){var r=setImmediate
o._immediateFn=function(e){r(e)}}else o._immediateFn=function(e){t(e,0)}
o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},we.exports=o}else we.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function a(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function i(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn((function(){var r=1===e._state?t.onFulfilled:t.onRejected
if(null!==r){var n
try{n=r(e._value)}catch(e){return void s(t.promise,e)}u(t.promise,n)}else(1===e._state?u:s)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===d(t)||"function"==typeof t)){var r=t.then
if(t instanceof o)return e._state=3,e._value=t,void l(e)
if("function"==typeof r)return void p((n=r,a=t,function(){n.apply(a,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}var n,a}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}))
for(var t=0,r=e._deferreds.length;t<r;t++)i(e,e._deferreds[t])
e._deferreds=null}function c(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function p(e,t){var r=!1
try{e((function(e){r||(r=!0,u(t,e))}),(function(e){r||(r=!0,s(t,e))}))}catch(e){if(r)return
r=!0,s(t,e)}}}()
var Ee=we.exports
function Ce(e,t){var r=Y.callbacks[e]
if("log"!==e){var n=Ee.resolve()
return r.forEach((function(e){n=n.then((function(){return Ee.resolve(e(t))}))})),n}r.map((function(e){return e(t)}))}var xe=u((function e(t,r,n){o(this,e),this.name=t,this.suiteName=r.name,this.fullName=r.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!n.skip,this.todo=!!n.todo,this.valid=n.valid,this._startTime=0,this._endTime=0,r.pushTest(this)}),[{key:"start",value:function(e){return e&&(this._startTime=A.now()),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){return e&&(this._endTime=A.now()),R(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}])
function Ae(e){if(this.expected=null,this.assertions=[],this.module=Y.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new w,this.nextPauseId=1,this.stackOffset=3,R(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),Y.pq.finished)re.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var r=0,n=this.module.tests;r<n.length;r++)this.module.tests[r].name===this.testName&&(this.testName+=" ")
this.testId=O(this.module.name,this.testName),++Ae.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new xe(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new he(this)}}function ke(){if(!Y.current)throw new Error("pushFailure() assertion outside test context, in "+fe(2))
var e=Y.current
return e.pushFailure.apply(e,arguments)}function Ne(){if(Y.pollution=[],Y.noglobals)for(var e in f)if(x.call(f,e)){if(/^qunit-test-output/.test(e))continue
Y.pollution.push(e)}}Ae.count=0,Ae.prototype={get stack(){return pe(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,r=function(e){for(var t=e,r=[];t&&0===t.testsRun;)r.push(t),t=t.parentModule
return r.reverse()}(t),n=Ee.resolve()
return r.forEach((function(e){n=n.then((function(){return e.stats={all:0,bad:0,started:A.now()},be("suiteStart",e.suiteReport.start(!0)),Ce("moduleStart",{name:e.name,tests:e.tests})}))})),n.then((function(){return Y.current=e,e.testEnvironment=R({},t.testEnvironment),e.started=A.now(),be("testStart",e.testReport.start(!0)),Ce("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){Y.pollution||Ne()}))}))},run:function(){if(Y.current=this,Y.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,pe(e,0)),Ne(),Y.blocking&&Me(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&ke("Test did not finish synchronously even though assert.timeout( 0 ) was used.",fe(2))}},after:function(){!function(){var e=Y.pollution
Ne()
var t=k(Y.pollution,e)
t.length>0&&ke("Introduced global variable(s): "+t.join(", "))
var r=k(e,Y.pollution)
r.length>0&&ke("Deleted global variable(s): "+r.join(", "))}()},queueGlobalHook:function(e,t){var r=this
return function(){var n
if(Y.current=r,Y.notrycatch)n=e.call(r.testEnvironment,r.assert)
else try{n=e.call(r.testEnvironment,r.assert)}catch(e){return void r.pushFailure("Global "+t+" failed on "+r.testName+": "+M(e),pe(e,0))}r.resolvePromise(n,t)}},queueHook:function(e,t,r){var n=this,a=function(){var r=e.call(n.testEnvironment,n.assert)
n.resolvePromise(r,t)}
return function(){if("before"===t){if(0!==r.testsRun)return
n.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Pe(e).filter((function(e){return!e.skip})).length-1}(r)||!(Y.queue.length>0||Y.pq.taskCount()>2))if(Y.current=n,Y.notrycatch)a()
else try{a()}catch(e){n.pushFailure(t+" failed on "+n.testName+": "+(e.message||e),pe(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(r){if(("beforeEach"===e||"afterEach"===e)&&Y.globalHooks[e])for(var n=0;n<Y.globalHooks[e].length;n++)t.push(r.queueGlobalHook(Y.globalHooks[e][n],e))}(this),function r(n,a){if(a.parentModule&&r(n,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(n.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(Y.current=this,m&&(D(this.timeout),Y.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}Y.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,r=t.name,n=this.testName,a=!!this.skip,o=!!this.todo,i=0,u=Y.storage
this.runtime=Math.round(A.now()-this.started),Y.stats.all+=this.assertions.length,Y.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var s=0;s<this.assertions.length;s++)this.assertions[s].result||(i++,Y.stats.bad++,t.stats.bad++)
a?qe(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),u&&(i?u.setItem("qunit-test-"+r+"-"+n,i):u.removeItem("qunit-test-"+r+"-"+n)),be("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var c=this
return Ce("testDone",{name:n,module:r,skipped:a,todo:o,failed:i,passed:this.assertions.length-i,total:this.assertions.length,runtime:a?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return c.stack}}).then((function(){if(je(t)){for(var e=[t],r=t.parentModule;r&&je(r);)e.push(r),r=r.parentModule
var n=Ee.resolve()
return e.forEach((function(e){n=n.then((function(){return function(e){for(var t=[e];t.length;){var r=t.shift()
r.hooks={},t.push.apply(t,l(r.childModules))}return be("suiteEnd",e.suiteReport.end(!0)),Ce("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(A.now()-e.stats.started)})}(e)}))})),n}})).then((function(){Y.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=R({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=Y.storage&&+Y.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),r=Y.reorder&&!!t
this.previousFailure=!!t,Y.pq.add((function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),r)}else qe(this.module)},pushResult:function(e){if(this!==Y.current){var t=e&&e.message||"",r=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+r+"\n> Message: "+t+"\n")}var n={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(A.now()-this.started),todo:!!this.todo}
if(x.call(e,"expected")&&(n.expected=e.expected),!e.result){var a=e.source||fe()
a&&(n.source=a)}this.logAssertion(n),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,r){if(!(this instanceof Ae))throw new Error("pushFailure() assertion outside test context, was "+fe(2))
this.pushResult({result:!1,message:e||"error",actual:r||null,source:t})},logAssertion:function(e){Ce("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),be("assertion",t)},internalResetTimeout:function(e){D(Y.timeout),Y.timeout=m(Y.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
Y.blocking=!0
var t,r=this,n=this.nextPauseId++,a={cancelled:!1,remaining:e}
return r.pauses.set(n,a),m&&("number"==typeof r.timeout?t=r.timeout:"number"==typeof Y.testTimeout&&(t=Y.testTimeout),"number"==typeof t&&t>0?(Y.timeoutHandler=function(e){return function(){Y.timeout=null,a.cancelled=!0,r.pauses.delete(n),r.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),fe(2)),Me(r)}},D(Y.timeout),Y.timeout=m(Y.timeoutHandler(t),t)):(D(Y.timeout),Y.timeout=m((function(){Y.timeout=null,Y._deprecated_timeout_shown||(Y._deprecated_timeout_shown=!0,re.warn('Test "'.concat(r.testName,'" took longer than 3000ms, but no timeout was set. Set QUnit.config.testTimeout or call assert.timeout() to avoid a timeout in QUnit 3. https://qunitjs.com/api/config/testTimeout/')))}),3e3))),function(){if(!a.cancelled){if(void 0===Y.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(r.testName," [async #").concat(n,"]"))
if(Y.current!==r)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(r.testName," [async #").concat(n,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(r.testName," [async #").concat(n,"]"))
a.remaining--,0===a.remaining&&r.pauses.delete(n),Ie(r)}}},resolvePromise:function(e,t){if(null!=e){var r=this,n=e.then
if("function"==typeof n){var a=r.internalStop(),o=function(){a()}
Y.notrycatch?n.call(e,o):n.call(e,o,(function(e){var n="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+r.testName+'": '+(e&&e.message||e)
r.pushFailure(n,pe(e,0)),Ne(),Me(r)}))}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,r){return!r||!r.length||N(t.moduleId,r)||t.parentModule&&e(t.parentModule,r)}(this.module,Y.moduleId))return!1
if(Y.testId&&Y.testId.length&&!N(this.testId,Y.testId))return!1
var e=Y.module&&Y.module.toLowerCase()
if(!function e(t,r){return!r||(t.name?t.name.toLowerCase():null)===r||!!t.parentModule&&e(t.parentModule,r)}(this.module,e))return!1
var t=Y.filter
if(!t)return!0
var r=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),n=this.module.name+": "+this.testName
return r?this.regexFilter(!!r[1],r[2],r[3],n):this.stringFilter(t,n)},regexFilter:function(e,t,r,n){return new RegExp(t,r).test(n)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var r="!"!==e.charAt(0)
return r||(e=e.slice(1)),-1!==t.indexOf(e)?r:!r}}
var Te=!1
function Be(e){Te||Y.currentModule.ignored||new Ae(e).queue()}function Re(e){Y.currentModule.ignored||(Te||(Y.queue.length=0,Te=!0),new Ae(e).queue())}function _e(e,t){Be({testName:e,callback:t})}function Se(e,t){return"".concat(e," [").concat(t,"]")}function Oe(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++)t(e[r],r)
else{if("object"!==d(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(d(e)," instead."))
for(var n in e)t(e[n],n)}}function Me(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Ie(e)}function Ie(e){e.pauses.size>0||(m?(D(Y.timeout),Y.timeout=m((function(){e.pauses.size>0||(D(Y.timeout),Y.timeout=null,Y.blocking=!1,Y.pq.advance())}))):(Y.blocking=!1,Y.pq.advance()))}function Pe(e){for(var t=[].concat(e.tests),r=l(e.childModules);r.length;){var n=r.shift()
t.push.apply(t,n.tests),r.push.apply(r,l(n.childModules))}return t}function je(e){return e.testsRun+e.testsIgnored===Pe(e).length}function qe(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}R(_e,{todo:function(e,t){Be({testName:e,callback:t,todo:!0})},skip:function(e){Be({testName:e,skip:!0})},only:function(e,t){Re({testName:e,callback:t})},each:function(e,t,r){Oe(t,(function(t,n){Be({testName:Se(e,n),callback:r,withData:!0,stackOffset:5,data:t})}))}}),_e.todo.each=function(e,t,r){Oe(t,(function(t,n){Be({testName:Se(e,n),callback:r,todo:!0,withData:!0,stackOffset:5,data:t})}))},_e.skip.each=function(e,t){Oe(t,(function(t,r){Be({testName:Se(e,r),stackOffset:5,skip:!0})}))},_e.only.each=function(e,t,r){Oe(t,(function(t,n){Re({testName:Se(e,n),callback:r,withData:!0,stackOffset:5,data:t})}))}
var Le,ze,Ve,He,Ue=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=r.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,r){return new e(t,r)}}])}(),$e=v&&void 0!==v.performance&&"function"==typeof v.performance.mark&&"function"==typeof v.performance.measure?v.performance:void 0,Ge={measure:$e?function(e,t,r){try{$e.measure(e,t,r)}catch(e){re.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:$e?$e.mark.bind($e):function(){}},We=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.perf=r.perf||Ge,t.on("runStart",this.onRunStart.bind(this)),t.on("runEnd",this.onRunEnd.bind(this)),t.on("suiteStart",this.onSuiteStart.bind(this)),t.on("suiteEnd",this.onSuiteEnd.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(){this.perf.mark("qunit_suite_0_start")}},{key:"onSuiteStart",value:function(e){var t=e.fullName.length
this.perf.mark("qunit_suite_".concat(t,"_start"))}},{key:"onSuiteEnd",value:function(e){var t=e.fullName.length,r=e.fullName.join(" – ")
this.perf.mark("qunit_suite_".concat(t,"_end")),this.perf.measure("QUnit Test Suite: ".concat(r),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}},{key:"onTestStart",value:function(){this.perf.mark("qunit_test_start")}},{key:"onTestEnd",value:function(e){this.perf.mark("qunit_test_end")
var t=e.fullName.join(" – ")
this.perf.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}},{key:"onRunEnd",value:function(){this.perf.mark("qunit_suite_0_end"),this.perf.measure("QUnit Test Run","qunit_suite_0_start","qunit_suite_0_end")}}],[{key:"init",value:function(t,r){return new e(t,r)}}])}(),Ye=!0
if("undefined"!=typeof process){var Qe=process.env||{}
Le=Qe.FORCE_COLOR,ze=Qe.NODE_DISABLE_COLORS,Ve=Qe.NO_COLOR,He=Qe.TERM,Ye=process.stdout&&process.stdout.isTTY}var Ke={enabled:!ze&&null==Ve&&"dumb"!==He&&(null!=Le&&"0"!==Le||Ye),reset:Ze(0,0),bold:Ze(1,22),dim:Ze(2,22),italic:Ze(3,23),underline:Ze(4,24),inverse:Ze(7,27),hidden:Ze(8,28),strikethrough:Ze(9,29),black:Ze(30,39),red:Ze(31,39),green:Ze(32,39),yellow:Ze(33,39),blue:Ze(34,39),magenta:Ze(35,39),cyan:Ze(36,39),white:Ze(37,39),gray:Ze(90,39),grey:Ze(90,39),bgBlack:Ze(40,49),bgRed:Ze(41,49),bgGreen:Ze(42,49),bgYellow:Ze(43,49),bgBlue:Ze(44,49),bgMagenta:Ze(45,49),bgCyan:Ze(46,49),bgWhite:Ze(47,49)}
function Xe(e,t){for(var r,n=0,a="",o="";n<e.length;n++)a+=(r=e[n]).open,o+=r.close,~t.indexOf(r.close)&&(t=t.replace(r.rgx,r.close+r.open))
return a+t+o}function Ze(e,t){var r={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(r)),void 0===t?this:Ke.enabled?Xe(this.keys,t+""):t+""):void 0===t?((n={has:[e],keys:[r]}).reset=Ke.reset.bind(n),n.bold=Ke.bold.bind(n),n.dim=Ke.dim.bind(n),n.italic=Ke.italic.bind(n),n.underline=Ke.underline.bind(n),n.inverse=Ke.inverse.bind(n),n.hidden=Ke.hidden.bind(n),n.strikethrough=Ke.strikethrough.bind(n),n.black=Ke.black.bind(n),n.red=Ke.red.bind(n),n.green=Ke.green.bind(n),n.yellow=Ke.yellow.bind(n),n.blue=Ke.blue.bind(n),n.magenta=Ke.magenta.bind(n),n.cyan=Ke.cyan.bind(n),n.white=Ke.white.bind(n),n.gray=Ke.gray.bind(n),n.grey=Ke.grey.bind(n),n.bgBlack=Ke.bgBlack.bind(n),n.bgRed=Ke.bgRed.bind(n),n.bgGreen=Ke.bgGreen.bind(n),n.bgYellow=Ke.bgYellow.bind(n),n.bgBlue=Ke.bgBlue.bind(n),n.bgMagenta=Ke.bgMagenta.bind(n),n.bgCyan=Ke.bgCyan.bind(n),n.bgWhite=Ke.bgWhite.bind(n),n):Ke.enabled?Xe([r],t+""):t+""
var n}}var Je=Object.prototype.hasOwnProperty
function et(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var r=new Array(t+1).join(" "),n=e.match(/\n+$/)
return 1===(n?n[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map((function(e){return r+e})).join("\n"):"|+\n"+e.split("\n").map((function(e){return r+e})).join("\n")}return e}return JSON.stringify(tt(e),null,2)}function tt(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==r.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":r.push(e),t=e.map((function(e){return tt(e,r)})),r.pop()
break
case"object":r.push(e),t={},Object.keys(e).forEach((function(n){t[n]=tt(e[n],r)})),r.pop()
break
default:t=e}return t}var rt=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=r.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Ke.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+M(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Ke.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Ke.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Ke.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Ke.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Ke.cyan("# todo ".concat(e.testCounts.todo))),this.log(Ke.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var r="  ---"
r+="\n  message: ".concat(et(e.message||"failed")),r+="\n  severity: ".concat(et(t||"failed")),Je.call(e,"actual")&&(r+="\n  actual  : ".concat(et(e.actual))),Je.call(e,"expected")&&(r+="\n  expected: ".concat(et(e.expected))),e.stack&&(r+="\n  stack: ".concat(et(e.stack+"\n"))),r+="\n  ...",this.log(r)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(et(M(e))),t+="\n  severity: ".concat(et("failed")),e&&e.stack&&(t+="\n  stack: ".concat(et(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,r){return new e(t,r)}}])}(),nt={console:Ue,perf:We,tap:rt}
function at(e){return function(t){Y.globalHooks[e]||(Y.globalHooks[e]=[]),Y.globalHooks[e].push(t)}}var ot={beforeEach:at("beforeEach"),afterEach:at("afterEach")},it=u((function e(t){o(this,e),this.test=t,this.priorityCount=0,this.unitSampler=null,this.taskQueue=[],this.finished=!1}),[{key:"advance",value:function(){this.advanceTaskQueue(),this.taskQueue.length||Y.blocking||Y.current||this.advanceTestQueue()}},{key:"advanceTaskQueue",value:function(){var e=A.now()
Y.depth=(Y.depth||0)+1,this.processTaskQueue(e),Y.depth--}},{key:"processTaskQueue",value:function(e){var t=this
if(this.taskQueue.length&&!Y.blocking){var r=A.now()-e
if(!m||Y.updateRate<=0||r<Y.updateRate){var n=this.taskQueue.shift()
Ee.resolve(n()).then((function(){t.taskQueue.length?t.processTaskQueue(e):t.advance()}))}else m((function(){t.advance()}))}}},{key:"advanceTestQueue",value:function(){if(Y.blocking||Y.queue.length||0!==Y.depth){var e=Y.queue.shift()
this.addToTaskQueue(e()),this.priorityCount>0&&this.priorityCount--,this.advance()}else this.done()}},{key:"addToTaskQueue",value:function(e){var t;(t=this.taskQueue).push.apply(t,l(e))}},{key:"taskCount",value:function(){return this.taskQueue.length}},{key:"add",value:function(e,t){if(t)Y.queue.splice(this.priorityCount++,0,e)
else if(Y.seed){this.unitSampler||(this.unitSampler=(n=Y.seed,a=parseInt(O(n),16)||-1,function(){return a^=a<<13,a^=a>>>17,(a^=a<<5)<0&&(a+=4294967296),a/4294967296}))
var r=Math.floor(this.unitSampler()*(Y.queue.length-this.priorityCount+1))
Y.queue.splice(this.priorityCount+r,0,e)}else Y.queue.push(e)
var n,a}},{key:"done",value:function(){var e
if(0===Y.stats.testCount&&!0===Y.failOnZeroTests)return e=Y.filter&&Y.filter.length?new Error('No tests matched the filter "'.concat(Y.filter,'".')):Y.module&&Y.module.length?new Error('No tests matched the module "'.concat(Y.module,'".')):Y.moduleId&&Y.moduleId.length?new Error('No tests matched the moduleId "'.concat(Y.moduleId,'".')):Y.testId&&Y.testId.length?new Error('No tests matched the testId "'.concat(Y.testId,'".')):new Error("No tests were run."),this.test("global failure",R((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void this.advance()
var t=Y.storage,r=Math.round(A.now()-Y.started),n=Y.stats.all-Y.stats.bad
this.finished=!0,be("runEnd",oe.end(!0)),Ce("done",{passed:n,failed:Y.stats.bad,total:Y.stats.all,runtime:r}).then((function(){if(t&&0===Y.stats.bad)for(var e=t.length-1;e>=0;e--){var r=t.key(e)
0===r.indexOf("qunit-test-")&&t.removeItem(r)}}))}}])
function ut(e){Y.current?Y.current.assert.pushResult({result:!1,message:"global failure: ".concat(M(e)),source:e&&e.stack||fe(2)}):(oe.globalFailureCount++,Y.stats.bad++,Y.stats.all++,be("error",e))}function st(){}var lt=-1,ct=Object.prototype.hasOwnProperty
st.prototype.DiffMain=function(e,t,r){var n=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===r&&(r=!0)
var a=this.diffCommonPrefix(e,t),o=e.substring(0,a)
e=e.substring(a),t=t.substring(a),a=this.diffCommonSuffix(e,t)
var i=e.substring(e.length-a)
e=e.substring(0,e.length-a),t=t.substring(0,t.length-a)
var u=this.diffCompute(e,t,r,n)
return o&&u.unshift([0,o]),i&&u.push([0,i]),this.diffCleanupMerge(u),u},st.prototype.diffCleanupEfficiency=function(e){var t,r,n,a,o,i,u,s,l
for(t=!1,r=[],n=0,a=null,o=0,i=!1,u=!1,s=!1,l=!1;o<e.length;)0===e[o][0]?(e[o][1].length<4&&(s||l)?(r[n++]=o,i=s,u=l,a=e[o][1]):(n=0,a=null),s=l=!1):(e[o][0]===lt?l=!0:s=!0,a&&(i&&u&&s&&l||a.length<2&&i+u+s+l===3)&&(e.splice(r[n-1],0,[lt,a]),e[r[n-1]+1][0]=1,n--,a=null,i&&u?(s=l=!0,n=0):(o=--n>0?r[n-1]:-1,s=l=!1),t=!0)),o++
t&&this.diffCleanupMerge(e)},st.prototype.diffPrettyHtml=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r][0],a=e[r][1]
switch(n){case 1:t[r]="<ins>"+I(a)+"</ins>"
break
case lt:t[r]="<del>"+I(a)+"</del>"
break
case 0:t[r]="<span>"+I(a)+"</span>"}}return t.join("")},st.prototype.diffCommonPrefix=function(e,t){var r,n,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,r=n=Math.min(e.length,t.length),o=0;a<r;)e.substring(o,r)===t.substring(o,r)?o=a=r:n=r,r=Math.floor((n-a)/2+a)
return r},st.prototype.diffCommonSuffix=function(e,t){var r,n,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,r=n=Math.min(e.length,t.length),o=0;a<r;)e.substring(e.length-r,e.length-o)===t.substring(t.length-r,t.length-o)?o=a=r:n=r,r=Math.floor((n-a)/2+a)
return r},st.prototype.diffCompute=function(e,t,r,n){var a,o,i,u,s,l,c,d,p,f,h,m
return e?t?(o=e.length>t.length?e:t,i=e.length>t.length?t:e,-1!==(u=o.indexOf(i))?(a=[[1,o.substring(0,u)],[0,i],[1,o.substring(u+i.length)]],e.length>t.length&&(a[0][0]=a[2][0]=lt),a):1===i.length?[[lt,e],[1,t]]:(s=this.diffHalfMatch(e,t))?(l=s[0],d=s[1],c=s[2],p=s[3],f=s[4],h=this.DiffMain(l,c,r,n),m=this.DiffMain(d,p,r,n),h.concat([[0,f]],m)):r&&e.length>100&&t.length>100?this.diffLineMode(e,t,n):this.diffBisect(e,t,n)):[[lt,e]]:[[1,t]]},st.prototype.diffHalfMatch=function(e,t){var r,n,a,o,i,u,s,l,c,d
if(r=e.length>t.length?e:t,n=e.length>t.length?t:e,r.length<4||2*n.length<r.length)return null
function p(e,t,r){var n,o,i,u,s,l,c,d,p
for(n=e.substring(r,r+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(n,o+1));)u=a.diffCommonPrefix(e.substring(r),t.substring(o)),s=a.diffCommonSuffix(e.substring(0,r),t.substring(0,o)),i.length<s+u&&(i=t.substring(o-s,o)+t.substring(o,o+u),l=e.substring(0,r-s),c=e.substring(r+u),d=t.substring(0,o-s),p=t.substring(o+u))
return 2*i.length>=e.length?[l,c,d,p,i]:null}return a=this,l=p(r,n,Math.ceil(r.length/4)),c=p(r,n,Math.ceil(r.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],s=d[1],u=d[2],i=d[3]):(u=d[0],i=d[1],o=d[2],s=d[3]),[o,s,u,i,d[4]]):null},st.prototype.diffLineMode=function(e,t,r){var n,a,o,i,u,s,l,c,d
for(e=(n=this.diffLinesToChars(e,t)).chars1,t=n.chars2,o=n.lineArray,a=this.DiffMain(e,t,!1,r),this.diffCharsToLines(a,o),this.diffCleanupSemantic(a),a.push([0,""]),i=0,s=0,u=0,c="",l="";i<a.length;){switch(a[i][0]){case 1:u++,l+=a[i][1]
break
case lt:s++,c+=a[i][1]
break
case 0:if(s>=1&&u>=1){for(a.splice(i-s-u,s+u),i=i-s-u,d=(n=this.DiffMain(c,l,!1,r)).length-1;d>=0;d--)a.splice(i,0,n[d])
i+=n.length}u=0,s=0,c="",l=""}i++}return a.pop(),a},st.prototype.diffBisect=function(e,t,r){var n,a,o,i,u,s,l,c,d,p,f,h,m,D,g,v,b,y,F,w,E,C,x
for(n=e.length,a=t.length,i=o=Math.ceil((n+a)/2),u=2*o,s=new Array(u),l=new Array(u),c=0;c<u;c++)s[c]=-1,l[c]=-1
for(s[i+1]=0,l[i+1]=0,p=(d=n-a)%2!=0,f=0,h=0,m=0,D=0,E=0;E<o&&!(Date.now()>r);E++){for(C=-E+f;C<=E-h;C+=2){for(v=i+C,F=(b=C===-E||C!==E&&s[v-1]<s[v+1]?s[v+1]:s[v-1]+1)-C;b<n&&F<a&&e.charAt(b)===t.charAt(F);)b++,F++
if(s[v]=b,b>n)h+=2
else if(F>a)f+=2
else if(p&&(g=i+d-C)>=0&&g<u&&-1!==l[g]&&b>=(y=n-l[g]))return this.diffBisectSplit(e,t,b,F,r)}for(x=-E+m;x<=E-D;x+=2){for(g=i+x,w=(y=x===-E||x!==E&&l[g-1]<l[g+1]?l[g+1]:l[g-1]+1)-x;y<n&&w<a&&e.charAt(n-y-1)===t.charAt(a-w-1);)y++,w++
if(l[g]=y,y>n)D+=2
else if(w>a)m+=2
else if(!p&&(v=i+d-x)>=0&&v<u&&-1!==s[v]&&(F=i+(b=s[v])-v,b>=(y=n-y)))return this.diffBisectSplit(e,t,b,F,r)}}return[[lt,e],[1,t]]},st.prototype.diffBisectSplit=function(e,t,r,n,a){var o,i,u,s,l,c
return o=e.substring(0,r),u=t.substring(0,n),i=e.substring(r),s=t.substring(n),l=this.DiffMain(o,u,!1,a),c=this.DiffMain(i,s,!1,a),l.concat(c)},st.prototype.diffCleanupSemantic=function(e){for(var t,r,n,a,o=!1,i=[],u=0,s=null,l=0,c=0,d=0,p=0,f=0;l<e.length;)0===e[l][0]?(i[u++]=l,c=p,d=f,p=0,f=0,s=e[l][1]):(1===e[l][0]?p+=e[l][1].length:f+=e[l][1].length,s&&s.length<=Math.max(c,d)&&s.length<=Math.max(p,f)&&(e.splice(i[u-1],0,[lt,s]),e[i[u-1]+1][0]=1,u--,l=--u>0?i[u-1]:-1,c=0,d=0,p=0,f=0,s=null,o=!0)),l++
for(o&&this.diffCleanupMerge(e),l=1;l<e.length;)e[l-1][0]===lt&&1===e[l][0]&&(t=e[l-1][1],r=e[l][1],(n=this.diffCommonOverlap(t,r))>=(a=this.diffCommonOverlap(r,t))?(n>=t.length/2||n>=r.length/2)&&(e.splice(l,0,[0,r.substring(0,n)]),e[l-1][1]=t.substring(0,t.length-n),e[l+1][1]=r.substring(n),l++):(a>=t.length/2||a>=r.length/2)&&(e.splice(l,0,[0,t.substring(0,a)]),e[l-1][0]=1,e[l-1][1]=r.substring(0,r.length-a),e[l+1][0]=lt,e[l+1][1]=t.substring(a),l++),l++),l++},st.prototype.diffCommonOverlap=function(e,t){var r=e.length,n=t.length
if(0===r||0===n)return 0
r>n?e=e.substring(r-n):r<n&&(t=t.substring(0,r))
var a=Math.min(r,n)
if(e===t)return a
for(var o=0,i=1;;){var u=e.substring(a-i),s=t.indexOf(u)
if(-1===s)return o
i+=s,0!==s&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},st.prototype.diffLinesToChars=function(e,t){var r=[],n={}
function a(e){for(var t="",a=0,o=-1,i=r.length;o<e.length-1;){-1===(o=e.indexOf("\n",a))&&(o=e.length-1)
var u=e.substring(a,o+1)
a=o+1,ct.call(n,u)?t+=String.fromCharCode(n[u]):(t+=String.fromCharCode(i),n[u]=i,r[i++]=u)}return t}return r[0]="",{chars1:a(e),chars2:a(t),lineArray:r}},st.prototype.diffCharsToLines=function(e,t){for(var r=0;r<e.length;r++){for(var n=e[r][1],a=[],o=0;o<n.length;o++)a[o]=t[n.charCodeAt(o)]
e[r][1]=a.join("")}},st.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var t=0,r=0,n=0,a="",o="";t<e.length;)switch(e[t][0]){case 1:n++,o+=e[t][1],t++
break
case lt:r++,a+=e[t][1],t++
break
case 0:if(r+n>1){if(0!==r&&0!==n){var i=this.diffCommonPrefix(o,a)
0!==i&&(t-r-n>0&&0===e[t-r-n-1][0]?e[t-r-n-1][1]+=o.substring(0,i):(e.splice(0,0,[0,o.substring(0,i)]),t++),o=o.substring(i),a=a.substring(i)),0!==(i=this.diffCommonSuffix(o,a))&&(e[t][1]=o.substring(o.length-i)+e[t][1],o=o.substring(0,o.length-i),a=a.substring(0,a.length-i))}0===r?e.splice(t-n,r+n,[1,o]):0===n?e.splice(t-r,r+n,[lt,a]):e.splice(t-r-n,r+n,[lt,a],[1,o]),t=t-r-n+(r?1:0)+(n?1:0)+1}else 0!==t&&0===e[t-1][0]?(e[t-1][1]+=e[t][1],e.splice(t,1)):t++
n=0,r=0,a="",o=""}""===e[e.length-1][1]&&e.pop()
var u=!1
for(t=1;t<e.length-1;){if(0===e[t-1][0]&&0===e[t+1][0]){var s=e[t][1]
s.substring(s.length-e[t-1][1].length)===e[t-1][1]?(e[t][1]=e[t-1][1]+e[t][1].substring(0,e[t][1].length-e[t-1][1].length),e[t+1][1]=e[t-1][1]+e[t+1][1],e.splice(t-1,1),u=!0):s.substring(0,e[t+1][1].length)===e[t+1][1]&&(e[t-1][1]+=e[t+1][1],e[t][1]=e[t][1].substring(e[t+1][1].length)+e[t+1][1],e.splice(t+1,1),u=!0)}t++}u&&this.diffCleanupMerge(e)}
var dt={}
Y.currentModule.suiteReport=oe,Y.pq=new it(_e)
var pt=!1,ft=!1
function ht(){ft=!0,m?m((function(){Dt()})):Dt()}function mt(){Y.blocking=!1,Y.pq.advance()}function Dt(){if(Y.started)mt()
else{Y.started=A.now(),""===Y.modules[0].name&&0===Y.modules[0].tests.length&&Y.modules.shift()
for(var e=[],t=0;t<Y.modules.length;t++)""!==Y.modules[t].name&&e.push({name:Y.modules[t].name,moduleId:Y.modules[t].moduleId,tests:Y.modules[t].tests})
be("runStart",oe.start(!0)),Ce("begin",{totalTests:Ae.count,modules:e}).then(mt)}}dt.isLocal=v&&v.location&&"file:"===v.location.protocol,dt.version="2.21.0",R(dt,{config:Y,diff:function(e,t){var r,n
return n=(r=new st).DiffMain(e,t),r.diffCleanupEfficiency(n),r.diffPrettyHtml(n)},dump:te,equiv:W,reporters:nt,hooks:ot,is:S,objectType:_,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!N(e,ve)){var r=ve.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(r,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
ge[e]||(ge[e]=[]),N(t,ge[e])||ge[e].push(t)},onError:function(e){if(re.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Y.current&&Y.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,ut(t),!1},onUncaughtException:ut,pushFailure:ke,assert:he.prototype,module:ce,test:_e,todo:_e.todo,skip:_e.skip,only:_e.only,start:function(e){if(Y.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=pt
if(pt=!0,ft)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(Y.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!Y.pageLoaded)return Y.autostart=!0,void(b||dt.autostart())
ht()},onUnhandledRejection:function(e){re.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),ut(e)},extend:function(){re.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return R.apply(this,t)},load:function(){re.warn("QUnit.load is deprecated and will be removed in QUnit 3.0. https://qunitjs.com/api/QUnit/load/"),dt.autostart()},autostart:function(){Y.pageLoaded=!0,R(Y,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),ft||(Y.blocking=!1,Y.autostart&&ht())},stack:function(e){return fe(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function r(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
Y.callbacks[e].push(t)}}for(var n=0;n<t.length;n++){var a=t[n]
void 0===Y.callbacks[a]&&(Y.callbacks[a]=[]),e[a]=r(a)}}(dt),function(a){if(v&&b){if(v.QUnit&&v.QUnit.version)throw new Error("QUnit has already been defined.")
v.QUnit=a}e&&e.exports&&(e.exports=a,e.exports.QUnit=a),t&&(t.QUnit=a),void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n),a.config.autostart=!1}(dt),function(){if(v&&b){var e=dt.config,t=Object.prototype.hasOwnProperty
dt.begin((function(){if(!t.call(e,"fixture")){var r=b.getElementById("qunit-fixture")
r&&(e.fixture=r.cloneNode(!0))}})),dt.testStart((function(){if(null!=e.fixture){var t=b.getElementById("qunit-fixture")
if("string"===d(e.fixture)){var r=b.createElement("div")
r.setAttribute("id","qunit-fixture"),r.innerHTML=e.fixture,t.parentNode.replaceChild(r,t)}else{var n=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(n,t)}}}))}}(),function(){var e=void 0!==v&&v.location
if(e){var t=function(){for(var t=Object.create(null),n=e.search.slice(1).split("&"),a=n.length,o=0;o<a;o++)if(n[o]){var i=n[o].split("="),u=r(i[0]),s=1===i.length||r(i.slice(1).join("="))
t[u]=u in t?[].concat(t[u],s):s}return t}()
dt.urlParams=t,dt.config.filter=t.filter,dt.config.module=t.module,dt.config.moduleId=[].concat(t.moduleId||[]),dt.config.testId=[].concat(t.testId||[]),!0===t.seed?dt.config.seed=Math.random().toString(36).slice(2):t.seed&&(dt.config.seed=t.seed),dt.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),dt.begin((function(){for(var e=dt.config.urlConfig,r=0;r<e.length;r++){var n=dt.config.urlConfig[r]
"string"!=typeof n&&(n=n.id),void 0===dt.config[n]&&(dt.config[n]=t[n])}}))}function r(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var gt={exports:{}}
!function(e){var t,r
t=ye,r=function(){var e=void 0!==Fe&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,r){return e[t]=r,this},this.clear=function(){e=Object.create(null)}},r=new t,n=new t,a=[]
a.total=0
var o=[],i=[]
function u(){r.clear(),n.clear(),o=[],i=[]}function s(e){for(var t=-9007199254740991,r=e.length-1;r>=0;--r){var n=e[r]
if(null!==n){var a=n.score
a>t&&(t=a)}}return-9007199254740991===t?null:t}function l(e,t){var r=e[t]
if(void 0!==r)return r
var n=t
Array.isArray(t)||(n=t.split("."))
for(var a=n.length,o=-1;e&&++o<a;)e=e[n[o]]
return e}function c(e){return"object"===d(e)}var p=function(){var e=[],t=0,r={}
function n(){for(var r=0,n=e[r],a=1;a<t;){var o=a+1
r=a,o<t&&e[o].score<e[a].score&&(r=o),e[r-1>>1]=e[r],a=1+(r<<1)}for(var i=r-1>>1;r>0&&n.score<e[i].score;i=(r=i)-1>>1)e[r]=e[i]
e[r]=n}return r.add=function(r){var n=t
e[t++]=r
for(var a=n-1>>1;n>0&&r.score<e[a].score;a=(n=a)-1>>1)e[n]=e[a]
e[n]=r},r.poll=function(){if(0!==t){var r=e[0]
return e[0]=e[--t],n(),r}},r.peek=function(r){if(0!==t)return e[0]},r.replaceTop=function(t){e[0]=t,n()},r},f=p()
return function t(d){var h={single:function(e,t,r){return"farzher"==e?{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6]}:e?(c(e)||(e=h.getPreparedSearch(e)),t?(c(t)||(t=h.getPrepared(t)),((r&&void 0!==r.allowTypo?r.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,r){if("farzher"==e)return[{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:t?t[0]:null}]
if(!e)return a
var n=(e=h.prepareSearch(e))[0],o=r&&r.threshold||d&&d.threshold||-9007199254740991,i=r&&r.limit||d&&d.limit||9007199254740991,u=(r&&void 0!==r.allowTypo?r.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo,p=0,m=0,D=t.length
if(r&&r.keys)for(var g=r.scoreFn||s,v=r.keys,b=v.length,y=D-1;y>=0;--y){for(var F=t[y],w=new Array(b),E=b-1;E>=0;--E)(A=l(F,x=v[E]))?(c(A)||(A=h.getPrepared(A)),w[E]=u(e,A,n)):w[E]=null
w.obj=F
var C=g(w)
null!==C&&(C<o||(w.score=C,p<i?(f.add(w),++p):(++m,C>f.peek().score&&f.replaceTop(w))))}else if(r&&r.key){var x=r.key
for(y=D-1;y>=0;--y)(A=l(F=t[y],x))&&(c(A)||(A=h.getPrepared(A)),null!==(k=u(e,A,n))&&(k.score<o||(k={target:k.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:k.score,indexes:k.indexes,obj:F},p<i?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}else for(y=D-1;y>=0;--y){var A,k;(A=t[y])&&(c(A)||(A=h.getPrepared(A)),null!==(k=u(e,A,n))&&(k.score<o||(p<i?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}if(0===p)return a
var N=new Array(p)
for(y=p-1;y>=0;--y)N[y]=f.poll()
return N.total=p+m,N},goAsync:function(t,r,n){var o=!1,i=new Promise((function(i,u){if("farzher"==t)return i([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:r?r[0]:null}])
if(!t)return i(a)
var f=(t=h.prepareSearch(t))[0],m=p(),D=r.length-1,g=n&&n.threshold||d&&d.threshold||-9007199254740991,v=n&&n.limit||d&&d.limit||9007199254740991,b=(n&&void 0!==n.allowTypo?n.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo,y=0,F=0
function w(){if(o)return u("canceled")
var d=Date.now()
if(n&&n.keys)for(var p=n.scoreFn||s,E=n.keys,C=E.length;D>=0;--D){if(D%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(w):setTimeout(w))
for(var x=r[D],A=new Array(C),k=C-1;k>=0;--k)(B=l(x,T=E[k]))?(c(B)||(B=h.getPrepared(B)),A[k]=b(t,B,f)):A[k]=null
A.obj=x
var N=p(A)
null!==N&&(N<g||(A.score=N,y<v?(m.add(A),++y):(++F,N>m.peek().score&&m.replaceTop(A))))}else if(n&&n.key)for(var T=n.key;D>=0;--D){if(D%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(w):setTimeout(w));(B=l(x=r[D],T))&&(c(B)||(B=h.getPrepared(B)),null!==(R=b(t,B,f))&&(R.score<g||(R={target:R.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:R.score,indexes:R.indexes,obj:x},y<v?(m.add(R),++y):(++F,R.score>m.peek().score&&m.replaceTop(R)))))}else for(;D>=0;--D){if(D%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(w):setTimeout(w))
var B,R;(B=r[D])&&(c(B)||(B=h.getPrepared(B)),null!==(R=b(t,B,f))&&(R.score<g||(y<v?(m.add(R),++y):(++F,R.score>m.peek().score&&m.replaceTop(R)))))}if(0===y)return i(a)
for(var _=new Array(y),S=y-1;S>=0;--S)_[S]=m.poll()
_.total=y+F,i(_)}e?setImmediate(w):w()}))
return i.cancel=function(){o=!0},i},highlight:function(e,t,r){if("function"==typeof t)return h.highlightCallback(e,t)
if(null===e)return null
void 0===t&&(t="<b>"),void 0===r&&(r="</b>")
for(var n="",a=0,o=!1,i=e.target,u=i.length,s=e.indexes,l=0;l<u;++l){var c=i[l]
if(s[a]===l){if(o||(o=!0,n+=t),++a===s.length){n+=c+r+i.substr(l+1)
break}}else o&&(o=!1,n+=r)
n+=c}return n},highlightCallback:function(e,t){if(null===e)return null
for(var r=e.target,n=r.length,a=e.indexes,o="",i=0,u=0,s=!1,l=(e=[],0);l<n;++l){var c=r[l]
if(a[u]===l){if(++u,s||(s=!0,e.push(o),o=""),u===a.length){o+=c,e.push(t(o,i++)),o="",e.push(r.substr(l+1))
break}}else s&&(s=!1,e.push(t(o,i++)),o="")
o+=c}return e},prepare:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:h.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSearch:function(e){return e||(e=""),h.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return h.prepare(e)
var t=r.get(e)
return void 0!==t||(t=h.prepare(e),r.set(e,t)),t},getPreparedSearch:function(e){if(e.length>999)return h.prepareSearch(e)
var t=n.get(e)
return void 0!==t||(t=h.prepareSearch(e),n.set(e,t)),t},algorithm:function(e,t,r){for(var n=t._targetLowerCodes,a=e.length,u=n.length,s=0,l=0,c=0,d=0;;){if(r===n[l]){if(o[d++]=l,++s===a)break
r=e[0===c?s:c===s?s+1:c===s-1?s-1:s]}if(++l>=u)for(;;){if(s<=1)return null
if(0===c){if(r===e[--s])continue
c=s}else{if(1===c)return null
if((r=e[1+(s=--c)])===e[s])continue}l=o[(d=s)-1]+1
break}}s=0
var p=0,f=!1,m=0,D=t._nextBeginningIndexes
null===D&&(D=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target))
var g=l=0===o[0]?0:D[o[0]-1]
if(l!==u)for(;;)if(l>=u){if(s<=0){if(++p>a-2)break
if(e[p]===e[p+1])continue
l=g
continue}--s,l=D[i[--m]]}else if(e[0===p?s:p===s?s+1:p===s-1?s-1:s]===n[l]){if(i[m++]=l,++s===a){f=!0
break}++l}else l=D[l]
if(f)var v=i,b=m
else v=o,b=d
for(var y=0,F=-1,w=0;w<a;++w)F!==(l=v[w])-1&&(y-=l),F=l
for(f?0!==p&&(y+=-20):(y*=1e3,0!==c&&(y+=-20)),y-=u-a,t.score=y,t.indexes=new Array(b),w=b-1;w>=0;--w)t.indexes[w]=v[w]
return t},algorithmNoTypo:function(e,t,r){for(var n=t._targetLowerCodes,a=e.length,u=n.length,s=0,l=0,c=0;;){if(r===n[l]){if(o[c++]=l,++s===a)break
r=e[s]}if(++l>=u)return null}s=0
var d=!1,p=0,f=t._nextBeginningIndexes
if(null===f&&(f=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target)),(l=0===o[0]?0:f[o[0]-1])!==u)for(;;)if(l>=u){if(s<=0)break;--s,l=f[i[--p]]}else if(e[s]===n[l]){if(i[p++]=l,++s===a){d=!0
break}++l}else l=f[l]
if(d)var m=i,D=p
else m=o,D=c
for(var g=0,v=-1,b=0;b<a;++b)v!==(l=m[b])-1&&(g-=l),v=l
for(d||(g*=1e3),g-=u-a,t.score=g,t.indexes=new Array(D),b=D-1;b>=0;--b)t.indexes[b]=m[b]
return t},prepareLowerCodes:function(e){for(var t=e.length,r=[],n=e.toLowerCase(),a=0;a<t;++a)r[a]=n.charCodeAt(a)
return r},prepareBeginningIndexes:function(e){for(var t=e.length,r=[],n=0,a=!1,o=!1,i=0;i<t;++i){var u=e.charCodeAt(i),s=u>=65&&u<=90,l=s||u>=97&&u<=122||u>=48&&u<=57,c=s&&!a||!o||!l
a=s,o=l,c&&(r[n++]=i)}return r},prepareNextBeginningIndexes:function(e){for(var t=e.length,r=h.prepareBeginningIndexes(e),n=[],a=r[0],o=0,i=0;i<t;++i)a>i?n[i]=a:(a=r[++o],n[i]=void 0===a?t:a)
return n},cleanup:u,new:t}
return h}()},e.exports?e.exports=r():t.fuzzysort=r()}(gt)
var vt=gt.exports,bt={failedTests:[],defined:0,completed:0}
!function(){if(v&&b){dt.reporters.perf.init(dt)
var e=dt.config,t=[],r=!1,n=Object.prototype.hasOwnProperty,a=N({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
dt.on("runStart",(function(e){bt.defined=e.testCounts.total})),dt.begin((function(t){!function(t){var r,i,u,s,c,p,h,D,E=C("qunit")
E&&(E.setAttribute("role","main"),E.innerHTML="<h1 id='qunit-header'>"+I(b.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(r=dt.config.testId)||r.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+I(r.join(", "))+" <a id='qunit-clearFilter' href='"+I(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=C("qunit-header"))&&(i.innerHTML="<a href='"+I(a)+"'>"+i.innerHTML+"</a> "),(u=C("qunit-banner"))&&(u.className=""),h=C("qunit-tests"),(D=C("qunit-testresult"))&&D.parentNode.removeChild(D),h&&(h.innerHTML="",(D=b.createElement("p")).id="qunit-testresult",D.className="result",h.parentNode.insertBefore(D,h),D.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=C("qunit-testresult-controls")),c&&c.appendChild(((p=b.createElement("button")).id="qunit-abort-tests-button",p.innerHTML="Abort",d(p,"click",x),p)),(s=C("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(b.createTextNode("QUnit "+dt.version+"; "+y.userAgent))),function(t){var r,a,i,u,s,c=C("qunit-testrunner-toolbar")
if(c){c.appendChild(((s=b.createElement("span")).innerHTML=function(){for(var t=!1,r=e.urlConfig,a="",o=0;o<r.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var u=I(i.id),s=I(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'>"+i.label+": </label><select id='qunit-urlconfig-"+u+"' name='"+u+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(var l=0;l<i.value.length;l++)a+="<option value='"+(u=I(i.value[l]))+"'"+(e[i.id]===i.value[l]?(t=!0)&&" selected='selected'":"")+">"+u+"</option>"
else for(var c in i.value)n.call(i.value,c)&&(a+="<option value='"+I(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+I(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(u=I(e[i.id]))+"' selected='selected' disabled='disabled'>"+u+"</option>"),a+="</select>"}else a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'><input id='qunit-urlconfig-"+u+"' name='"+u+"' type='checkbox'"+(i.value?" value='"+I(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+I(i.label)+"</label>"}return a}(),g(s,"qunit-url-config"),m(s.getElementsByTagName("input"),"change",k),m(s.getElementsByTagName("select"),"change",k),s))
var p=b.createElement("span")
p.id="qunit-toolbar-filters",p.appendChild((r=b.createElement("form"),a=b.createElement("label"),i=b.createElement("input"),u=b.createElement("button"),g(r,"qunit-filter"),a.innerHTML="Filter: ",i.type="text",i.value=e.filter||"",i.name="filter",i.id="qunit-filter-input",u.innerHTML="Go",a.appendChild(i),r.appendChild(a),r.appendChild(b.createTextNode(" ")),r.appendChild(u),d(r,"submit",A),r)),p.appendChild(function(t){var r=null
if(o={options:t.modules.slice(),selectedMap:new w,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(r.keys()).sort().join(",")}},e.moduleId.length)for(var n=0;n<t.modules.length;n++){var a=t.modules[n];-1!==e.moduleId.indexOf(a.moduleId)&&o.selectedMap.set(a.moduleId,a.name)}r=new w(o.selectedMap)
var i=b.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",d(i,"input",x),d(i,"input",C),d(i,"focus",C),d(i,"click",C)
var u=b.createElement("label")
u.htmlFor="qunit-modulefilter-search",u.textContent="Module:"
var s=b.createElement("span")
s.id="qunit-modulefilter-search-container",s.appendChild(i)
var c=b.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",d(c,"click",T)
var p=b.createElement("button")
p.textContent="Reset",p.type="reset",p.title="Restore the previous module selection"
var h=b.createElement("button")
h.textContent="Select none",h.type="button",h.title="Clear the current module selection",d(h,"click",(function(){o.selectedMap.clear(),k(),x()}))
var m=b.createElement("span")
m.id="qunit-modulefilter-actions",m.appendChild(c),m.appendChild(p),r.size&&m.appendChild(h)
var D=b.createElement("ul")
D.id="qunit-modulefilter-dropdown-list"
var g=b.createElement("div")
g.id="qunit-modulefilter-dropdown",g.style.display="none",g.appendChild(m),g.appendChild(D),d(g,"change",k),s.appendChild(g),k()
var y,E=b.createElement("form")
function C(){function e(t){var r=E.contains(t.target)
27!==t.keyCode&&r||(27===t.keyCode&&r&&i.focus(),g.style.display="none",f(b,"click",e),f(b,"keydown",e),i.value="",x())}"none"===g.style.display&&(x(),g.style.display="block",d(b,"click",e),d(b,"keydown",e))}function x(){v.clearTimeout(y),y=v.setTimeout((function(){D.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach((function(e,r){t+=B(r,e,!0)}))
for(var r=0;r<e.length;r++){var n=e[r].obj
o.selectedMap.has(n.moduleId)||(t+=B(n.moduleId,n.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):vt.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)}))}function k(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),F(t.parentNode,"checked",t.checked))
var r=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=r,i.title="Type to search through and reduce the list.",p.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(u),E.appendChild(b.createTextNode(" ")),E.appendChild(s),d(E,"submit",A),d(E,"reset",(function(){o.selectedMap=new w(r),k(),x()})),E}(t))
var h=b.createElement("div")
h.className="clearfix",c.appendChild(p),c.appendChild(h)}}(t)}(t)})),dt.on("runEnd",(function(t){var r,n,a,o=C("qunit-banner"),i=C("qunit-tests"),u=C("qunit-abort-tests-button"),s=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",s,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",S(bt.failedTests)].join("")
if(u&&u.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(r=i.children[c]).className&&"running"!==r.className||(r.className="aborted",a=r.getElementsByTagName("ol")[0],(n=b.createElement("li")).className="fail",n.innerHTML="Test aborted.",a.appendChild(n))}!o||u&&!1!==u.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),u&&u.parentNode.removeChild(u),i&&(C("qunit-testresult-display").innerHTML=l),e.altertitle&&b.title&&(b.title=["failed"===t.status?"✖":"✔",b.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&v.scrollTo&&v.scrollTo(0,0)})),dt.testStart((function(e){var t,r
_(e.name,e.testId,e.module),(t=C("qunit-testresult-display"))&&(g(t,"running"),r=dt.config.reorder&&e.previousFailure,t.innerHTML=[P(bt),r?"Rerunning previously failed test: <br />":"Running: ",O(e.name,e.module),S(bt.failedTests)].join(""))})),dt.log((function(e){var t=C("qunit-test-output-"+e.testId)
if(t){var r,a,o,i=I(e.message)||(e.result?"okay":"failed")
i="<span class='test-message'>"+i+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var u=!1
!e.result&&n.call(e,"expected")?(r=e.negative?"NOT "+dt.dump.parse(e.expected):dt.dump.parse(e.expected),a=dt.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+I(r)+"</pre></td></tr>",a!==r?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+I(a)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(u=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(u=j(o=dt.diff(r,a)).length!==j(r).length+j(a).length),u&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==r.indexOf("[object Array]")||-1!==r.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+dt.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+I(N({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr></table>")
var s=t.getElementsByTagName("ol")[0],l=b.createElement("li")
l.className=e.result?"pass":"fail",l.innerHTML=i,s.appendChild(l)}})),dt.testDone((function(n){var a=C("qunit-tests"),o=C("qunit-test-output-"+n.testId)
if(a&&o){var i
E(o,"running"),i=n.failed>0?"failed":n.todo?"todo":n.skipped?"skipped":"passed"
var u=o.getElementsByTagName("ol")[0],s=n.passed,l=n.failed,c=n.failed>0?n.todo:!n.todo
c?g(u,"qunit-collapsed"):(bt.failedTests.push(n.testId),e.collapse&&(r?g(u,"qunit-collapsed"):r=!0))
var p=o.firstChild,f=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+s+"</b>, ":""
if(p.innerHTML+=" <b class='counts'>("+f+n.assertions.length+")</b>",bt.completed++,n.skipped){o.className="skipped"
var h=b.createElement("em")
h.className="qunit-skipped-label",h.innerHTML="skipped",o.insertBefore(h,p)}else{if(d(p,"click",(function(){F(u,"qunit-collapsed")})),o.className=c?"pass":"fail",n.todo){var m=b.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,p)}var D=b.createElement("span")
D.className="runtime",D.innerHTML=n.runtime+" ms",o.insertBefore(D,u)}if(n.source){var v=b.createElement("p")
v.innerHTML="<strong>Source: </strong>"+I(n.source),g(v,"qunit-source"),c&&g(v,"qunit-collapsed"),d(p,"click",(function(){F(v,"qunit-collapsed")})),o.appendChild(v)}e.hidepassed&&("passed"===i||n.skipped)&&(t.push(o),a.removeChild(o))}})),dt.on("error",(function(e){var t=_("global failure")
if(t){var r=I(M(e))
r="<span class='test-message'>"+r+"</span>",e&&e.stack&&(r+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.stack)+"</pre></td></tr></table>")
var n=t.getElementsByTagName("ol")[0],a=b.createElement("li")
a.className="fail",a.innerHTML=r,n.appendChild(a),t.className="fail"}}))
var i,u=(i=v.phantom)&&i.version&&i.version.major>0
u&&h.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),u||"complete"!==b.readyState?d(v,"load",dt.autostart):dt.autostart()
var s=v.onerror
v.onerror=function(t,r,n,a,o){var i=!1
if(s){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
i=s.call.apply(s,[this,t,r,n,a,o].concat(l))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&r&&n&&(d.stack="".concat(r,":").concat(n)),dt.onUncaughtException(d)}return i},v.addEventListener("unhandledrejection",(function(e){dt.onUncaughtException(e.reason)}))}function c(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function d(e,t,r){e.addEventListener(t,r,!1)}function f(e,t,r){e.removeEventListener(t,r,!1)}function m(e,t,r){for(var n=e.length;n--;)d(e[n],t,r)}function D(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function g(e,t){D(e,t)||(e.className+=(e.className?" ":"")+t)}function F(e,t,r){r||void 0===r&&!D(e,t)?g(e,t):E(e,t)}function E(e,t){for(var r=" "+e.className+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ")
e.className=c(r)}function C(e){return b.getElementById&&b.getElementById(e)}function x(){var e=C("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),dt.config.queue.length=0,!1}function A(e){var t=C("qunit-filter-input")
return t.value=c(t.value),T(),e&&e.preventDefault&&e.preventDefault(),!1}function k(){var r,n=this,a={}
r="selectedIndex"in n?n.options[n.selectedIndex].value||void 0:n.checked?n.defaultValue||!0:void 0,a[n.name]=r
var o=N(a)
if("hidepassed"===n.name&&"replaceState"in v.history){dt.urlParams[n.name]=r,e[n.name]=r||!1
var i=C("qunit-tests")
if(i){var u=i.children.length,s=i.children
if(n.checked){for(var l=0;l<u;l++){var c=s[l],d=c?c.className:"",f=d.indexOf("pass")>-1,h=d.indexOf("skipped")>-1;(f||h)&&t.push(c)}var m,D=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=p(e))){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}(t)
try{for(D.s();!(m=D.n()).done;){var g=m.value
i.removeChild(g)}}catch(e){D.e(e)}finally{D.f()}}else for(var b;null!=(b=t.pop());)i.appendChild(b)}v.history.replaceState(null,"",o)}else v.location=o}function N(e){var t="?",r=v.location
for(var a in e=R(R({},dt.urlParams),e))if(n.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return r.protocol+"//"+r.host+r.pathname+t.slice(0,-1)}function T(){var e=C("qunit-filter-input").value
v.location=N({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function B(e,t,r){return'<li><label class="clickable'+(r?" checked":"")+'"><input type="checkbox" value="'+I(e)+'"'+(r?' checked="checked"':"")+" />"+I(t)+"</label></li>"}function _(e,t,r){var n=C("qunit-tests")
if(n){var a=b.createElement("strong")
a.innerHTML=O(e,r)
var o=b.createElement("li")
if(o.appendChild(a),void 0!==t){var i=b.createElement("a")
i.innerHTML="Rerun",i.href=N({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var u=b.createElement("ol")
return u.className="qunit-assert-list",o.appendChild(u),n.appendChild(o),o}}function S(e){return 0===e.length?"":["<br /><a href='"+I(N({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function O(e,t){var r=""
return t&&(r="<span class='module-name'>"+I(t)+"</span>: "),r+"<span class='test-name'>"+I(e)+"</span>"}function P(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function j(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}()}()}}])
