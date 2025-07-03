/*! For license information please see chunk.523.6fa31926b4e8359f0256.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[523,558],{28:(e,t,n)=>{"use strict"
n.d(t,{NZ:()=>o,d6:()=>s,dY:()=>a,kf:()=>i,zN:()=>u})
var r=n(7933)
const a=e=>Promise.resolve().then(e),o=setTimeout
function i(e){return!isNaN(parseFloat(e))&&isFinite(Number(e))}function u(e){const t=window.getComputedStyle(e)
return"none"!==t.display&&"hidden"!==t.visibility}function s(e){return!!(0,r.A)(e)&&e.disabled}},642:(e,t,n)=>{"use strict"
n.d(t,{A:()=>a})
var r=n(4951)
function a(e){return!(0,r.wz)(e)&&"SELECT"===e.tagName}},747:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,i,u=[],s=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
s=!1}else for(;!(s=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){if(e){if("string"==typeof e)return a(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}var f=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==v)return v
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),h=f.console,m=f.setTimeout,D=f.clearTimeout,g=f.process,v=f.window,b=v&&v.document,y=v&&v.navigator,F=function(){var e="qunit-test-string"
try{return f.sessionStorage.setItem(e,e),f.sessionStorage.removeItem(e),f.sessionStorage}catch(e){return}}(),w="function"==typeof f.Map&&"function"==typeof f.Map.prototype.keys&&"function"==typeof f.Symbol&&"symbol"===d(f.Symbol.iterator)?f.Map:function(e){var t=this,n=Object.create(null),r=Object.prototype.hasOwnProperty
this.has=function(e){return r.call(n,e)},this.get=function(e){return n[e]},this.set=function(e,t){return r.call(n,e)||this.size++,n[e]=t,this},this.delete=function(e){r.call(n,e)&&(delete n[e],this.size--)},this.forEach=function(e){for(var t in n)e(n[t],t)},this.keys=function(){return Object.keys(n)},this.clear=function(){n=Object.create(null),this.size=0},this.size=0,e&&e.forEach(function(e,n){t.set(n,e)})},E="function"==typeof f.Set&&"function"==typeof f.Set.prototype.values?f.Set:function(e){var t=Object.create(null)
return Array.isArray(e)&&e.forEach(function(e){t[e]=!0}),{add:function(e){t[e]=!0},has:function(e){return e in t},get size(){return Object.keys(t).length}}},C=Object.prototype.toString,x=Object.prototype.hasOwnProperty,A={now:v&&v.performance&&v.performance.now?v.performance.now.bind(v.performance):Date.now}
function k(e,t){return e.filter(function(e){return-1===t.indexOf(e)})}var T=Array.prototype.includes?function(e,t){return t.includes(e)}:function(e,t){return-1!==t.indexOf(e)}
function N(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&S("array",e)?[]:{}
for(var r in e)if(x.call(e,r)){var a=e[r]
n[r]=a===Object(a)?N(a,t):a}return n}function R(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)x.call(t,r)&&x.call(e,r)&&(n[r]=R(e[r],t[r]))
return n}function B(e,t,n){for(var r in t)x.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function _(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=C.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return d(e)}}function S(e,t){return _(t)===e}function O(e,t){for(var n=e+""+t,r=0,a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function M(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}function I(e){return e?(""+e).replace(/['"<>&]/g,function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}}):""}var P=new E(["boolean","number","string"]),j=[]
function q(e,t){return e===t}function L(e,t){return e===t||e.valueOf()===t.valueOf()}function z(e){var t=Object.getPrototypeOf(e)
return t&&null!==t.constructor?e.constructor:Object}function $(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var H={undefined:q,null:q,boolean:L,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:L,symbol:q,date:L,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&$(e)===$(t)},function:q,array:function(e,t){if(e.length!==t.length)return!1
for(var n=0;n<e.length;n++)if(!U(e[n],t[n]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach(function(e){if(n){var r=!1
t.forEach(function(t){if(!r){var n=j
j=[],U(t,e)&&(r=!0),j=n}}),r||(n=!1)}}),n},map:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach(function(e,r){if(n){var a=!1
t.forEach(function(t,n){if(!a){var o=j
j=[],H.array([t,n],[e,r])&&(a=!0),j=o}}),a||(n=!1)}}),n}},V={undefined:q,null:q,boolean:q,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:q,symbol:q,function:q,object:function(e,t){if(j.some(function(n){return n.a===e&&n.b===t}))return!0
j.push({a:e,b:t})
var n=_(e),r=_(t)
if("object"!==n||"object"!==r)return n===r&&H[n](e,t)
if(!1===function(e,t){return z(e)===z(t)}(e,t))return!1
var a=[],o=[]
for(var i in e)if(a.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof t[i]||e[i].toString()!==t[i].toString())&&!U(e[i],t[i]))return!1
for(var u in t)o.push(u)
return H.array(a.sort(),o.sort())}}
function U(e,t){if(e===t)return!0
var n=d(e),r=d(t)
return n!==r?("object"===n&&P.has(_(e))?e.valueOf():e)===("object"===r&&P.has(_(t))?t.valueOf():t):V[n](e,t)}function W(e,t){var n=U(e,t)
return j=[],n}function G(e,t){if(2===arguments.length)return e===t||W(e,t)
for(var n=arguments.length-1;n>0;){if(!W(arguments[n-1],arguments[n]))return!1
n--}return!0}var K={altertitle:!0,collapse:!0,countStepsAsOne:!1,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,reporters:{},requireExpects:!1,scrolltop:!0,storage:F,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},pq:null,_event_listeners:Object.create(null),_event_memory:{},_deprecated_timeout_shown:!1,_deprecated_countEachStep_shown:!1,blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}}
function Q(e,t){("boolean"==typeof e||"string"==typeof e&&""!==e)&&(K[t]=!0===e||"true"===e)}function Y(e,t){("number"==typeof e||"string"==typeof e&&/^[0-9]+$/.test(e))&&(K[t]=+e)}function X(e,t){"string"==typeof e&&""!==e&&(K[t]=e)}function Z(e,t){"string"==typeof e&&""!==e&&(K[t]=[e])}function J(e){Q(e.qunit_config_altertitle,"altertitle"),Q(e.qunit_config_autostart,"autostart"),Q(e.qunit_config_collapse,"collapse"),Q(e.qunit_config_failonzerotests,"failOnZeroTests"),X(e.qunit_config_filter,"filter"),X(e.qunit_config_fixture,"fixture"),Q(e.qunit_config_hidepassed,"hidepassed"),Y(e.qunit_config_maxdepth,"maxDepth"),X(e.qunit_config_module,"module"),Z(e.qunit_config_moduleid,"moduleId"),Q(e.qunit_config_noglobals,"noglobals"),Q(e.qunit_config_notrycatch,"notrycatch"),Q(e.qunit_config_reorder,"reorder"),Q(e.qunit_config_requireexpects,"requireExpects"),Q(e.qunit_config_scrolltop,"scrolltop"),function(e){("boolean"==typeof e||"string"==typeof e&&""!==e)&&(K.seed=e)}(e.qunit_config_seed),Z(e.qunit_config_testid,"testId"),Y(e.qunit_config_testtimeout,"testTimeout")
var t={qunit_config_reporters_console:"console",qunit_config_reporters_tap:"tap"}
for(var n in t){var r=e[n]
if("boolean"==typeof r||"string"==typeof r&&""!==r){var a=t[n]
K.reporters[a]=!0===r||"true"===r||"1"===r}}}g&&"env"in g&&J(g.env),J(f)
var ee=f&&f.QUnit&&!f.QUnit.version&&f.QUnit.config
ee&&B(K,ee),K.modules.push(K.currentModule),"true"!==K.seed&&!0!==K.seed||(K.seed=(Math.random().toString(36)+"0000000000").slice(2,12))
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
return t=null===e?"null":void 0===e?"undefined":S("regexp",e)?"regexp":S("date",e)?"date":S("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===C.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":d(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:K.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(a.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var a=[]
for(var i in e)a.push(i)
var u=["message","name"]
for(var s in u){var l=u[s]
l in e&&!T(l,a)&&a.push(l)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
r.push(o.parse(d,"key")+": "+o.parse(p,void 0,t))}return o.down(),n("{",r,"}")},node:function(e){var t=o.HTML?"&lt;":"<",n=o.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),a=t+r,i=e.attributes
if(i)for(var u=0;u<i.length;u++){var s=i[u].nodeValue
s&&"inherit"!==s&&(a+=" "+i[u].nodeName+"="+o.parse(s,"attribute"))}return a+=n,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),ne={warn:h?Function.prototype.bind.call(h.warn||h.log,h):function(){}},re=u(function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)},[{key:"start",value:function(e){return e&&(this._startTime=A.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map(function(e){return e.start()}),childSuites:this.childSuites.map(function(e){return e.start()}),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){return e&&(this._endTime=A.now()),{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map(function(e){return e.end()}),childSuites:this.childSuites.map(function(e){return e.end()}),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce(function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e},e),this.childSuites.reduce(function(e,t){return t.getTestCounts(e)},e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,a=e.todo
return n?"failed":r===t?"skipped":a===t?"todo":"passed"}}]),ae=[],oe=new re
function ie(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function ue(e,t){return function(n){K.currentModule!==e&&ne.warn("The `"+t+"` hook was called inside the wrong module (`"+K.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function se(e,t,n){"function"==typeof t&&(n=t,t=void 0)
var r=function(e,t,n){var r=ae.length?ae.slice(-1)[0]:null,a=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:oe,i=null!==r&&r.skip||n.skip,u=null!==r&&r.todo||n.todo,s={}
r&&B(s,r.testEnvironment),B(s,t)
var l={name:a,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:s,tests:[],moduleId:O(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new re(e,o),stats:null,skip:i,todo:!i&&u,ignored:n.ignored||!1}
return r&&r.childModules.push(l),K.modules.push(l),l}(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}),a=r.testEnvironment,o=r.hooks
ie(o,a,"before"),ie(o,a,"beforeEach"),ie(o,a,"afterEach"),ie(o,a,"after")
var i={before:ue(r,"before"),beforeEach:ue(r,"beforeEach"),afterEach:ue(r,"afterEach"),after:ue(r,"after")},u=K.currentModule
if(K.currentModule=r,"function"==typeof n){ae.push(r)
try{var s=n.call(r.testEnvironment,i)
s&&"function"==typeof s.then&&ne.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{ae.pop(),K.currentModule=r.parentModule||u}}}var le=!1
function ce(e,t,n){var r,a=le&&(r=K.modules.filter(function(e){return!e.ignored}).map(function(e){return e.moduleId}),!ae.some(function(e){return r.includes(e.moduleId)}))
se(e,t,n,{ignored:a})}ce.only=function(){le||(K.modules.length=0,K.queue.length=0,K.currentModule.ignored=!0),le=!0,se.apply(void 0,arguments)},ce.skip=function(e,t,n){le||se(e,t,n,{skip:!0})},ce.if=function(e,t,n,r){le||se(e,n,r,{skip:!t})},ce.todo=function(e,t,n){le||se(e,t,n,{todo:!0})}
var de=function(){var e=new Error
if(!e.stack)try{throw e}catch(t){e=t}return(e.stack||"").replace(/^error$\n/im,"").split("\n")[0].replace(/(:\d+)+\)?/g,"").replace(/.+[/\\]/,"")}()
function pe(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=e.split("\n"),a=[]
n&&-1!==n.indexOf(r[0])&&a.push(r.shift())
for(var o=!0,i=0;i<r.length;i++){var u=r[i],s=de&&-1!==u.indexOf(de)||-1!==u.indexOf("node:internal/")||u.match(/^\s+at .+\(internal[^)]*\)$/)||u.match(/^\s+at .+\([a-z]+\.js[:\d]*\)$/)
s||(o=!1),o||a.push(s?t(u):u)}return a.join("\n")}function fe(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),de){for(var r=[],a=t;a<n.length&&-1===n[a].indexOf(de);a++)r.push(n[a])
if(r.length)return r.join("\n")}return n[t]}}function he(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return fe(t,e)}var me=function(){function e(t){o(this,e),this.test=t}return u(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,K.timeout&&(D(K.timeout),K.timeout=null,K.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.stepsCount+=this.test.steps.length,this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){if(void 0===e)e=1
else if("number"!=typeof e)throw new TypeError("async takes number as an input")
var t=e
return this.test.internalStop(t)}},{key:"closeTo",value:function(e,t,n,r){if("number"!=typeof n)throw new TypeError("closeTo() requires a delta argument")
this.pushResult({result:Math.abs(e-t)<=n,actual:e,expected:t,message:r||"value should be within ".concat(n," inclusive")})}},{key:"push",value:function(t,n,r,a,o){return(this instanceof e?this:K.current.assert).pushResult({result:t,actual:n,expected:r,message:a,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||K.current
if(!r)throw new Error("assertion outside test context, in "+he(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(te.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(te.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){this.pushResult({result:t==e,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){this.pushResult({result:t!=e,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=R(e,t),t=N(t,!1),this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=R(e,t),t=N(t),this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var a=s(De(n,r,"throws"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||K.current
if("function"==typeof t){var i,u=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=s(ge(i,n,r),3)
u=l[0],n=l[1],r=l[2]}o.assert.pushResult({result:u,actual:i&&M(i),expected:n,message:r})}else o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,n,r){var a=s(De(n,r,"rejects"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||K.current,i=t&&t.then
if("function"==typeof i){var u=this.async()
return i.call(t,function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),u()},function(e){var t,a=s(ge(e,n,r),3)
t=a[0],n=a[1],r=a[2],o.assert.pushResult({result:t,actual:e&&M(e),expected:n,message:r}),u()})}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}])}()
function De(e,t,n){var r=_(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function ge(e,t,n){var r=!1,a=_(t)
if(t){if("regexp"===a)r=t.test(M(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===a)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=M(t)
else if("function"===a)try{r=!0===t.call({},e),t=null}catch(e){t=M(e)}}else r=!0
return[r,t,n]}me.prototype.raises=me.prototype.throws
var ve=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"],be=["error","runEnd"]
function ye(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var n=K._event_listeners[e],r=n?l(n):[],a=0;a<r.length;a++)r[a](t)
T(e,be)&&(K._event_memory[e]=t)}var Fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function we(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ee={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==Fe)return Fe
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
if(o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(a)
return i(this,new c(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor
return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},o.all=function(e){return new o(function(t,n){if(!r(e))return n(new TypeError("Promise.all accepts an array"))
var a=Array.prototype.slice.call(e)
if(0===a.length)return t([])
var o=a.length
function i(e,r){try{if(r&&("object"===d(r)||"function"==typeof r)){var u=r.then
if("function"==typeof u)return void u.call(r,function(t){i(e,t)},n)}a[e]=r,0===--o&&t(a)}catch(e){n(e)}}for(var u=0;u<a.length;u++)i(u,a[u])})},o.allSettled=function(e){return new this(function(t,n){if(!e||void 0===e.length)return n(new TypeError(d(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var a=r.length
function o(e,n){if(n&&("object"===d(n)||"function"==typeof n)){var i=n.then
if("function"==typeof i)return void i.call(n,function(t){o(e,t)},function(n){r[e]={status:"rejected",reason:n},0===--a&&t(r)})}r[e]={status:"fulfilled",value:n},0===--a&&t(r)}for(var i=0;i<r.length;i++)o(i,r[i])})},o.resolve=function(e){return e&&"object"===d(e)&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"))
for(var a=0,i=e.length;a<i;a++)o.resolve(e[a]).then(t,n)})},"function"==typeof setImmediate){var n=setImmediate
o._immediateFn=function(e){n(e)}}else o._immediateFn=function(e){t(e,0)}
o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},Ee.exports=o}else Ee.exports=e.Promise
function r(e){return Boolean(e&&void 0!==e.length)}function a(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],p(e,this)}function i(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void s(t.promise,e)}u(t.promise,r)}else(1===e._state?u:s)(t.promise,e._value)})):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===d(t)||"function"==typeof t)){var n=t.then
if(t instanceof o)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void p((r=n,a=t,function(){r.apply(a,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}var r,a}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)})
for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function p(e,t){var n=!1
try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return
n=!0,s(t,e)}}}()
var Ce=Ee.exports
function xe(e,t){var n=K.callbacks[e]
if("log"!==e){var r=Ce.resolve()
return n.forEach(function(e){r=r.then(function(){return Ce.resolve(e(t))})}),r}n.map(function(e){return e(t)})}var Ae=u(function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)},[{key:"start",value:function(e){return e&&(this._startTime=A.now()),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){return e&&(this._endTime=A.now()),B(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter(function(e){return!e.passed})}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map(function(e){return delete e.actual,delete e.expected,e})}}])
function ke(e){if(this.expected=null,this.assertions=[],this.module=K.currentModule,this.steps=[],this.stepsCount=0,this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new w,this.nextPauseId=1,this.stackOffset=3,B(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),K.pq.finished)ne.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=O(this.module.name,this.testName),++ke.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new Ae(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new me(this)}}function Te(){if(!K.current)throw new Error("pushFailure() assertion outside test context, in "+he(2))
var e=K.current
return e.pushFailure.apply(e,arguments)}function Ne(){if(K.pollution=[],K.noglobals)for(var e in f)if(x.call(f,e)){if(/^qunit-test-output/.test(e))continue
K.pollution.push(e)}}ke.count=0,ke.prototype={get stack(){return fe(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t),r=Ce.resolve()
return n.forEach(function(e){r=r.then(function(){return e.stats={all:0,bad:0,started:A.now()},ye("suiteStart",e.suiteReport.start(!0)),xe("moduleStart",{name:e.name,tests:e.tests})})}),r.then(function(){return K.current=e,e.testEnvironment=B({},t.testEnvironment),e.started=A.now(),ye("testStart",e.testReport.start(!0)),xe("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then(function(){K.pollution||Ne()})})},run:function(){if(K.current=this,K.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,fe(e,0)),Ne(),K.blocking&&Pe(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&Te("Test did not finish synchronously even though assert.timeout( 0 ) was used.",he(2))}},after:function(){!function(){var e=K.pollution
Ne()
var t=k(K.pollution,e)
t.length>0&&Te("Introduced global variable(s): "+t.join(", "))
var n=k(e,K.pollution)
n.length>0&&Te("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(K.current=n,K.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+M(e),fe(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,a=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===qe(e).filter(function(e){return!e.skip}).length-1}(n)||!(K.queue.length>0||K.pq.taskCount()>2))if(K.current=r,K.notrycatch)a()
else try{a()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),fe(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&K.globalHooks[e])for(var r=0;r<K.globalHooks[e].length;r++)t.push(n.queueGlobalHook(K.globalHooks[e][r],e))}(this),function n(r,a){if(a.parentModule&&n(r,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(r.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(K.current=this,m&&(D(this.timeout),K.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}K._deprecated_countEachStep_shown||K.countStepsAsOne||null===this.expected||!this.stepsCount||(K._deprecated_countEachStep_shown=!0,K.requireExpects?ne.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. You can enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/"):ne.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. Omit assert.expect() from tests that use assert.step(), or enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/"))
var t=K.countStepsAsOne?this.assertions.length-this.stepsCount:this.assertions.length
K.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==t&&this.stepsCount&&this.expected===this.assertions.length-this.stepsCount&&!K.countStepsAsOne?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run\nIt looks like you might prefer to enable QUnit.config.countStepsAsOne, which will become the default in QUnit 3.0. https://qunitjs.com/api/assert/expect/",this.stack):null!==this.expected&&this.expected!==t&&this.stepsCount&&this.expected===this.assertions.length&&K.countStepsAsOne?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run\nRemember that with QUnit.config.countStepsAsOne and in QUnit 3.0, steps no longer count as separate assertions. https://qunitjs.com/api/assert/expect/",this.stack):null!==this.expected&&this.expected!==t?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run",this.stack):null!==this.expected||t||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var n=this.module,r=n.name,a=this.testName,o=!!this.skip,i=!!this.todo,u=0,s=K.storage
this.runtime=Math.round(A.now()-this.started),K.stats.all+=this.assertions.length,K.stats.testCount+=1,n.stats.all+=this.assertions.length
for(var c=0;c<this.assertions.length;c++)this.assertions[c].result||(u++,K.stats.bad++,n.stats.bad++)
o?ze(n):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(n),s&&(u?s.setItem("qunit-test-"+r+"-"+a,u):s.removeItem("qunit-test-"+r+"-"+a)),ye("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var d=this
return xe("testDone",{name:a,module:r,skipped:o,todo:i,failed:u,passed:this.assertions.length-u,total:this.assertions.length,runtime:o?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return d.stack}}).then(function(){if(Le(n)){for(var e=[n],t=n.parentModule;t&&Le(t);)e.push(t),t=t.parentModule
var r=Ce.resolve()
return e.forEach(function(e){r=r.then(function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,l(n.childModules))}return ye("suiteEnd",e.suiteReport.end(!0)),xe("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(A.now()-e.stats.started)})}(e)})}),r}}).then(function(){K.current=void 0})},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=B({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=K.storage&&+K.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=K.reorder&&!!t
this.previousFailure=!!t,K.pq.add(function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])},n)}else ze(this.module)},pushResult:function(e){if(this!==K.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(A.now()-this.started),todo:!!this.todo}
if(x.call(e,"expected")&&(r.expected=e.expected),!e.result){var a=e.source||he()
a&&(r.source=a)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t){if(!(this instanceof ke))throw new Error("pushFailure() assertion outside test context, was "+he(2))
this.pushResult({result:!1,message:e||"error",source:t})},logAssertion:function(e){xe("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),ye("assertion",t)},internalResetTimeout:function(e){D(K.timeout),K.timeout=m(K.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
K.blocking=!0
var t,n=this,r=this.nextPauseId++,a={cancelled:!1,remaining:e}
return n.pauses.set(r,a),m&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof K.testTimeout&&(t=K.testTimeout),"number"==typeof t&&t>0?(K.timeoutHandler=function(e){return function(){K.timeout=null,a.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),he(2)),Pe(n)}},D(K.timeout),K.timeout=m(K.timeoutHandler(t),t)):(D(K.timeout),K.timeout=m(function(){K.timeout=null,K._deprecated_timeout_shown||(K._deprecated_timeout_shown=!0,ne.warn('Test "'.concat(n.testName,'" took longer than 3000ms, but no timeout was set. Set QUnit.config.testTimeout or call assert.timeout() to avoid a timeout in QUnit 3. https://qunitjs.com/api/config/testTimeout/')))},3e3))),function(){if(!a.cancelled){if(void 0===K.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(K.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
a.remaining--,0===a.remaining&&n.pauses.delete(r),je(n)}}},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"==typeof r){var a=n.internalStop(),o=function(){a()}
K.notrycatch?r.call(e,o):r.call(e,o,function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,fe(e,0)),Ne(),Pe(n)})}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,n){return!n||!n.length||T(t.moduleId,n)||t.parentModule&&e(t.parentModule,n)}(this.module,K.moduleId))return!1
if(K.testId&&K.testId.length&&!T(this.testId,K.testId))return!1
var e=K.module&&K.module.toLowerCase()
if(!function e(t,n){return!n||(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule,n)}(this.module,e))return!1
var t=K.filter
if(!t)return!0
var n=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),r=this.module.name+": "+this.testName
return n?this.regexFilter(!!n[1],n[2],n[3],r):this.stringFilter(t,r)},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var Re=!1
function Be(e){Re||K.currentModule.ignored||new ke(e).queue()}function _e(e){K.currentModule.ignored||(Re||(K.queue.length=0,Re=!0),new ke(e).queue())}function Se(e,t){Be({testName:e,callback:t})}function Oe(e,t){return"".concat(e," [").concat(t,"]")}var Me=/[\x00-\x1F\x7F\xA0]/
function Ie(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n],a=d(r),o=n
if("string"===a&&r.length<=40&&!Me.test(r)&&!/\s*\d+: /.test(r))o=r
else if("string"===a||"number"===a||"boolean"===a||"undefined"===a||null===r){var i=String(r)
Me.test(i)||(o=n+": "+(i.length<=30?i:i.slice(0,29)+"…"))}t(r,o)}else{if("object"!==d(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(d(e)," instead."))
for(var u in e)t(e[u],u)}}function Pe(e){e.pauses.forEach(function(e){e.cancelled=!0}),e.pauses.clear(),je(e)}function je(e){e.pauses.size>0||(m?(D(K.timeout),K.timeout=m(function(){e.pauses.size>0||(D(K.timeout),K.timeout=null,K.blocking=!1,K.pq.advance())})):(K.blocking=!1,K.pq.advance()))}function qe(e){for(var t=[].concat(e.tests),n=l(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,l(r.childModules))}return t}function Le(e){return e.testsRun+e.testsIgnored===qe(e).length}function ze(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}B(Se,{todo:function(e,t){Be({testName:e,callback:t,todo:!0})},skip:function(e){Be({testName:e,skip:!0})},if:function(e,t,n){Be({testName:e,callback:n,skip:!t})},only:function(e,t){_e({testName:e,callback:t})},each:function(e,t,n){Ie(t,function(t,r){Be({testName:Oe(e,r),callback:n,withData:!0,stackOffset:5,data:t})})}}),Se.todo.each=function(e,t,n){Ie(t,function(t,r){Be({testName:Oe(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})})},Se.skip.each=function(e,t){Ie(t,function(t,n){Be({testName:Oe(e,n),stackOffset:5,skip:!0})})},Se.if.each=function(e,t,n,r){Ie(n,function(n,a){Be({testName:Oe(e,a),callback:r,withData:!0,stackOffset:5,skip:!t,data:t?n:void 0})})},Se.only.each=function(e,t,n){Ie(t,function(t,r){_e({testName:Oe(e,r),callback:n,withData:!0,stackOffset:5,data:t})})}
var $e,He,Ve,Ue,We=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}])}(),Ge=v&&void 0!==v.performance&&"function"==typeof v.performance.mark&&"function"==typeof v.performance.measure?v.performance:void 0,Ke={measure:Ge?function(e,t,n){try{Ge.measure(e,t,n)}catch(e){ne.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:Ge?Ge.mark.bind(Ge):function(){}},Qe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.perf=n.perf||Ke,t.on("runStart",this.onRunStart.bind(this)),t.on("runEnd",this.onRunEnd.bind(this)),t.on("suiteStart",this.onSuiteStart.bind(this)),t.on("suiteEnd",this.onSuiteEnd.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(){this.perf.mark("qunit_suite_0_start")}},{key:"onSuiteStart",value:function(e){var t=e.fullName.length
this.perf.mark("qunit_suite_".concat(t,"_start"))}},{key:"onSuiteEnd",value:function(e){var t=e.fullName.length,n=e.fullName.join(" – ")
this.perf.mark("qunit_suite_".concat(t,"_end")),this.perf.measure("QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}},{key:"onTestStart",value:function(){this.perf.mark("qunit_test_start")}},{key:"onTestEnd",value:function(e){this.perf.mark("qunit_test_end")
var t=e.fullName.join(" – ")
this.perf.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}},{key:"onRunEnd",value:function(){this.perf.mark("qunit_suite_0_end"),this.perf.measure("QUnit Test Run","qunit_suite_0_start","qunit_suite_0_end")}}],[{key:"init",value:function(t,n){return new e(t,n)}}])}(),Ye=!0
if("undefined"!=typeof process){var Xe=process.env||{}
$e=Xe.FORCE_COLOR,He=Xe.NODE_DISABLE_COLORS,Ve=Xe.NO_COLOR,Ue=Xe.TERM,Ye=process.stdout&&process.stdout.isTTY}var Ze={enabled:!He&&null==Ve&&"dumb"!==Ue&&(null!=$e&&"0"!==$e||Ye),reset:et(0,0),bold:et(1,22),dim:et(2,22),italic:et(3,23),underline:et(4,24),inverse:et(7,27),hidden:et(8,28),strikethrough:et(9,29),black:et(30,39),red:et(31,39),green:et(32,39),yellow:et(33,39),blue:et(34,39),magenta:et(35,39),cyan:et(36,39),white:et(37,39),gray:et(90,39),grey:et(90,39),bgBlack:et(40,49),bgRed:et(41,49),bgGreen:et(42,49),bgYellow:et(43,49),bgBlue:et(44,49),bgMagenta:et(45,49),bgCyan:et(46,49),bgWhite:et(47,49)}
function Je(e,t){for(var n,r=0,a="",o="";r<e.length;r++)a+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return a+t+o}function et(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Ze.enabled?Je(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Ze.reset.bind(r),r.bold=Ze.bold.bind(r),r.dim=Ze.dim.bind(r),r.italic=Ze.italic.bind(r),r.underline=Ze.underline.bind(r),r.inverse=Ze.inverse.bind(r),r.hidden=Ze.hidden.bind(r),r.strikethrough=Ze.strikethrough.bind(r),r.black=Ze.black.bind(r),r.red=Ze.red.bind(r),r.green=Ze.green.bind(r),r.yellow=Ze.yellow.bind(r),r.blue=Ze.blue.bind(r),r.magenta=Ze.magenta.bind(r),r.cyan=Ze.cyan.bind(r),r.white=Ze.white.bind(r),r.gray=Ze.gray.bind(r),r.grey=Ze.grey.bind(r),r.bgBlack=Ze.bgBlack.bind(r),r.bgRed=Ze.bgRed.bind(r),r.bgGreen=Ze.bgGreen.bind(r),r.bgYellow=Ze.bgYellow.bind(r),r.bgBlue=Ze.bgBlue.bind(r),r.bgMagenta=Ze.bgMagenta.bind(r),r.bgCyan=Ze.bgCyan.bind(r),r.bgWhite=Ze.bgWhite.bind(r),r):Ze.enabled?Je([n],t+""):t+""
var r}}function tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var n=new Array(2*t+1).join(" "),r=e.match(/\n+$/)
return 1===(r?r[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map(function(e){return n+e}).join("\n"):"|+\n"+e.split("\n").map(function(e){return n+e}).join("\n")}return e}var a=new Array(t+1).join(" ")
return JSON.stringify(nt(e),null,2).split("\n").map(function(e,t){return 0===t?e:a+e}).join("\n")}function nt(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":n.push(e),t=e.map(function(e){return nt(e,n)}),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach(function(r){t[r]=nt(e[r],n)}),n.pop()
break
default:t=e}return t}var rt=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.started=!1,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(e){this.started||(this.log("TAP version 13"),this.started=!0)}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.onRunStart(),this.testCount=this.testCount+1,this.log("not ok ".concat(this.testCount," ").concat(Ze.red("global failure"))),this.logError(e)),this.log("Bail out! "+M(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log("ok ".concat(this.testCount," ").concat(Ze.yellow(e.fullName.join(" > "))," # SKIP")):"todo"===e.status?(this.log("not ok ".concat(this.testCount," ").concat(Ze.cyan(e.fullName.join(" > "))," # TODO")),e.errors.forEach(function(e){return t.logAssertion(e,"todo")})):(this.log("not ok ".concat(this.testCount," ").concat(Ze.red(e.fullName.join(" > ")))),e.errors.forEach(function(e){return t.logAssertion(e)}))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log("# ".concat(Ze.yellow("skip ".concat(e.testCounts.skipped)))),this.log("# ".concat(Ze.cyan("todo ".concat(e.testCounts.todo)))),this.log("# ".concat(Ze.red("fail ".concat(e.testCounts.failed))))}},{key:"logAssertion",value:function(e,t){var n="  ---"
if(n+="\n  message: ".concat(tt(e.message||"failed")),n+="\n  severity: ".concat(tt(t||"failed")),(void 0!==e.expected||void 0!==e.actual)&&(n+="\n  actual  : ".concat(tt(e.actual)),n+="\n  expected: ".concat(tt(e.expected))),e.stack){var r=pe(e.stack,Ze.grey)
r.length&&(n+="\n  stack: ".concat(tt(r+"\n")))}n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
if(t+="\n  message: ".concat(tt(M(e))),t+="\n  severity: ".concat(tt("failed")),e&&e.stack){var n=pe(e.stack,Ze.grey,e.toString())
n.length&&(t+="\n  stack: ".concat(tt(n+"\n")))}t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}])}(),at={console:We,perf:Qe,tap:rt}
function ot(e){return function(t){K.globalHooks[e]||(K.globalHooks[e]=[]),K.globalHooks[e].push(t)}}var it={beforeEach:ot("beforeEach"),afterEach:ot("afterEach")},ut=u(function e(t){o(this,e),this.test=t,this.priorityCount=0,this.unitSampler=null,this.taskQueue=[],this.finished=!1},[{key:"advance",value:function(){this.advanceTaskQueue(),this.taskQueue.length||K.blocking||K.current||this.advanceTestQueue()}},{key:"advanceTaskQueue",value:function(){var e=A.now()
K.depth=(K.depth||0)+1,this.processTaskQueue(e),K.depth--}},{key:"processTaskQueue",value:function(e){var t=this
if(this.taskQueue.length&&!K.blocking){var n=A.now()-e
if(!m||K.updateRate<=0||n<K.updateRate){var r=this.taskQueue.shift()
Ce.resolve(r()).then(function(){t.taskQueue.length?t.processTaskQueue(e):t.advance()})}else m(function(){t.advance()})}}},{key:"advanceTestQueue",value:function(){if(K.blocking||K.queue.length||0!==K.depth){var e=K.queue.shift()
this.addToTaskQueue(e()),this.priorityCount>0&&this.priorityCount--,this.advance()}else this.done()}},{key:"addToTaskQueue",value:function(e){var t;(t=this.taskQueue).push.apply(t,l(e))}},{key:"taskCount",value:function(){return this.taskQueue.length}},{key:"add",value:function(e,t){if(t)K.queue.splice(this.priorityCount++,0,e)
else if(K.seed){this.unitSampler||(this.unitSampler=(r=K.seed,a=parseInt(O(r),16)||-1,function(){return a^=a<<13,a^=a>>>17,(a^=a<<5)<0&&(a+=4294967296),a/4294967296}))
var n=Math.floor(this.unitSampler()*(K.queue.length-this.priorityCount+1))
K.queue.splice(this.priorityCount+n,0,e)}else K.queue.push(e)
var r,a}},{key:"done",value:function(){var e
if(0===K.stats.testCount&&!0===K.failOnZeroTests)return e=K.filter&&K.filter.length?new Error('No tests matched the filter "'.concat(K.filter,'".')):K.module&&K.module.length?new Error('No tests matched the module "'.concat(K.module,'".')):K.moduleId&&K.moduleId.length?new Error('No tests matched the moduleId "'.concat(K.moduleId,'".')):K.testId&&K.testId.length?new Error('No tests matched the testId "'.concat(K.testId,'".')):new Error("No tests were run."),this.test("global failure",B(function(t){t.pushResult({result:!1,message:e.message,source:e.stack})},{validTest:!0})),void this.advance()
var t=K.storage,n=Math.round(A.now()-K.started),r=K.stats.all-K.stats.bad
this.finished=!0,ye("runEnd",oe.end(!0)),xe("done",{passed:r,failed:K.stats.bad,total:K.stats.all,runtime:n}).then(function(){if(t&&0===K.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}})}}])
function st(e){K.current?K.current.assert.pushResult({result:!1,message:"global failure: ".concat(M(e)),source:e&&e.stack||he(2)}):(oe.globalFailureCount++,K.stats.bad++,K.stats.all++,ye("error",e))}function lt(){}var ct=-1,dt=Object.prototype.hasOwnProperty
lt.prototype.DiffMain=function(e,t,n){var r=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===n&&(n=!0)
var a=this.diffCommonPrefix(e,t),o=e.substring(0,a)
e=e.substring(a),t=t.substring(a),a=this.diffCommonSuffix(e,t)
var i=e.substring(e.length-a)
e=e.substring(0,e.length-a),t=t.substring(0,t.length-a)
var u=this.diffCompute(e,t,n,r)
return o&&u.unshift([0,o]),i&&u.push([0,i]),this.diffCleanupMerge(u),u},lt.prototype.diffCleanupEfficiency=function(e){var t,n,r,a,o,i,u,s,l
for(t=!1,n=[],r=0,a=null,o=0,i=!1,u=!1,s=!1,l=!1;o<e.length;)0===e[o][0]?(e[o][1].length<4&&(s||l)?(n[r++]=o,i=s,u=l,a=e[o][1]):(r=0,a=null),s=l=!1):(e[o][0]===ct?l=!0:s=!0,a&&(i&&u&&s&&l||a.length<2&&i+u+s+l===3)&&(e.splice(n[r-1],0,[ct,a]),e[n[r-1]+1][0]=1,r--,a=null,i&&u?(s=l=!0,r=0):(o=--r>0?n[r-1]:-1,s=l=!1),t=!0)),o++
t&&this.diffCleanupMerge(e)},lt.prototype.diffPrettyHtml=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n][0],a=e[n][1]
switch(r){case 1:t[n]="<ins>"+I(a)+"</ins>"
break
case ct:t[n]="<del>"+I(a)+"</del>"
break
case 0:t[n]="<span>"+I(a)+"</span>"}}return t.join("")},lt.prototype.diffCommonPrefix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(o,n)===t.substring(o,n)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},lt.prototype.diffCommonSuffix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},lt.prototype.diffCompute=function(e,t,n,r){var a,o,i,u,s,l,c,d,p,f,h,m
return e?t?(o=e.length>t.length?e:t,i=e.length>t.length?t:e,-1!==(u=o.indexOf(i))?(a=[[1,o.substring(0,u)],[0,i],[1,o.substring(u+i.length)]],e.length>t.length&&(a[0][0]=a[2][0]=ct),a):1===i.length?[[ct,e],[1,t]]:(s=this.diffHalfMatch(e,t))?(l=s[0],d=s[1],c=s[2],p=s[3],f=s[4],h=this.DiffMain(l,c,n,r),m=this.DiffMain(d,p,n,r),h.concat([[0,f]],m)):n&&e.length>100&&t.length>100?this.diffLineMode(e,t,r):this.diffBisect(e,t,r)):[[ct,e]]:[[1,t]]},lt.prototype.diffHalfMatch=function(e,t){var n,r,a,o,i,u,s,l,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function p(e,t,n){var r,o,i,u,s,l,c,d,p
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(r,o+1));)u=a.diffCommonPrefix(e.substring(n),t.substring(o)),s=a.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),i.length<s+u&&(i=t.substring(o-s,o)+t.substring(o,o+u),l=e.substring(0,n-s),c=e.substring(n+u),d=t.substring(0,o-s),p=t.substring(o+u))
return 2*i.length>=e.length?[l,c,d,p,i]:null}return a=this,l=p(n,r,Math.ceil(n.length/4)),c=p(n,r,Math.ceil(n.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],s=d[1],u=d[2],i=d[3]):(u=d[0],i=d[1],o=d[2],s=d[3]),[o,s,u,i,d[4]]):null},lt.prototype.diffLineMode=function(e,t,n){var r,a,o,i,u,s,l,c,d
for(e=(r=this.diffLinesToChars(e,t)).chars1,t=r.chars2,o=r.lineArray,a=this.DiffMain(e,t,!1,n),this.diffCharsToLines(a,o),this.diffCleanupSemantic(a),a.push([0,""]),i=0,s=0,u=0,c="",l="";i<a.length;){switch(a[i][0]){case 1:u++,l+=a[i][1]
break
case ct:s++,c+=a[i][1]
break
case 0:if(s>=1&&u>=1){for(a.splice(i-s-u,s+u),i=i-s-u,d=(r=this.DiffMain(c,l,!1,n)).length-1;d>=0;d--)a.splice(i,0,r[d])
i+=r.length}u=0,s=0,c="",l=""}i++}return a.pop(),a},lt.prototype.diffBisect=function(e,t,n){var r,a,o,i,u,s,l,c,d,p,f,h,m,D,g,v,b,y,F,w,E,C,x
for(r=e.length,a=t.length,i=o=Math.ceil((r+a)/2),u=2*o,s=new Array(u),l=new Array(u),c=0;c<u;c++)s[c]=-1,l[c]=-1
for(s[i+1]=0,l[i+1]=0,p=(d=r-a)%2!=0,f=0,h=0,m=0,D=0,E=0;E<o&&!(Date.now()>n);E++){for(C=-E+f;C<=E-h;C+=2){for(v=i+C,F=(b=C===-E||C!==E&&s[v-1]<s[v+1]?s[v+1]:s[v-1]+1)-C;b<r&&F<a&&e.charAt(b)===t.charAt(F);)b++,F++
if(s[v]=b,b>r)h+=2
else if(F>a)f+=2
else if(p&&(g=i+d-C)>=0&&g<u&&-1!==l[g]&&b>=(y=r-l[g]))return this.diffBisectSplit(e,t,b,F,n)}for(x=-E+m;x<=E-D;x+=2){for(g=i+x,w=(y=x===-E||x!==E&&l[g-1]<l[g+1]?l[g+1]:l[g-1]+1)-x;y<r&&w<a&&e.charAt(r-y-1)===t.charAt(a-w-1);)y++,w++
if(l[g]=y,y>r)D+=2
else if(w>a)m+=2
else if(!p&&(v=i+d-x)>=0&&v<u&&-1!==s[v]&&(F=i+(b=s[v])-v,b>=(y=r-y)))return this.diffBisectSplit(e,t,b,F,n)}}return[[ct,e],[1,t]]},lt.prototype.diffBisectSplit=function(e,t,n,r,a){var o,i,u,s,l,c
return o=e.substring(0,n),u=t.substring(0,r),i=e.substring(n),s=t.substring(r),l=this.DiffMain(o,u,!1,a),c=this.DiffMain(i,s,!1,a),l.concat(c)},lt.prototype.diffCleanupSemantic=function(e){for(var t,n,r,a,o=!1,i=[],u=0,s=null,l=0,c=0,d=0,p=0,f=0;l<e.length;)0===e[l][0]?(i[u++]=l,c=p,d=f,p=0,f=0,s=e[l][1]):(1===e[l][0]?p+=e[l][1].length:f+=e[l][1].length,s&&s.length<=Math.max(c,d)&&s.length<=Math.max(p,f)&&(e.splice(i[u-1],0,[ct,s]),e[i[u-1]+1][0]=1,u--,l=--u>0?i[u-1]:-1,c=0,d=0,p=0,f=0,s=null,o=!0)),l++
for(o&&this.diffCleanupMerge(e),l=1;l<e.length;)e[l-1][0]===ct&&1===e[l][0]&&(t=e[l-1][1],n=e[l][1],(r=this.diffCommonOverlap(t,n))>=(a=this.diffCommonOverlap(n,t))?(r>=t.length/2||r>=n.length/2)&&(e.splice(l,0,[0,n.substring(0,r)]),e[l-1][1]=t.substring(0,t.length-r),e[l+1][1]=n.substring(r),l++):(a>=t.length/2||a>=n.length/2)&&(e.splice(l,0,[0,t.substring(0,a)]),e[l-1][0]=1,e[l-1][1]=n.substring(0,n.length-a),e[l+1][0]=ct,e[l+1][1]=t.substring(a),l++),l++),l++},lt.prototype.diffCommonOverlap=function(e,t){var n=e.length,r=t.length
if(0===n||0===r)return 0
n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n))
var a=Math.min(n,r)
if(e===t)return a
for(var o=0,i=1;;){var u=e.substring(a-i),s=t.indexOf(u)
if(-1===s)return o
i+=s,0!==s&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},lt.prototype.diffLinesToChars=function(e,t){var n=[],r={}
function a(e){for(var t="",a=0,o=-1,i=n.length;o<e.length-1;){-1===(o=e.indexOf("\n",a))&&(o=e.length-1)
var u=e.substring(a,o+1)
a=o+1,dt.call(r,u)?t+=String.fromCharCode(r[u]):(t+=String.fromCharCode(i),r[u]=i,n[i++]=u)}return t}return n[0]="",{chars1:a(e),chars2:a(t),lineArray:n}},lt.prototype.diffCharsToLines=function(e,t){for(var n=0;n<e.length;n++){for(var r=e[n][1],a=[],o=0;o<r.length;o++)a[o]=t[r.charCodeAt(o)]
e[n][1]=a.join("")}},lt.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var t=0,n=0,r=0,a="",o="";t<e.length;)switch(e[t][0]){case 1:r++,o+=e[t][1],t++
break
case ct:n++,a+=e[t][1],t++
break
case 0:if(n+r>1){if(0!==n&&0!==r){var i=this.diffCommonPrefix(o,a)
0!==i&&(t-n-r>0&&0===e[t-n-r-1][0]?e[t-n-r-1][1]+=o.substring(0,i):(e.splice(0,0,[0,o.substring(0,i)]),t++),o=o.substring(i),a=a.substring(i)),0!==(i=this.diffCommonSuffix(o,a))&&(e[t][1]=o.substring(o.length-i)+e[t][1],o=o.substring(0,o.length-i),a=a.substring(0,a.length-i))}0===n?e.splice(t-r,n+r,[1,o]):0===r?e.splice(t-n,n+r,[ct,a]):e.splice(t-n-r,n+r,[ct,a],[1,o]),t=t-n-r+(n?1:0)+(r?1:0)+1}else 0!==t&&0===e[t-1][0]?(e[t-1][1]+=e[t][1],e.splice(t,1)):t++
r=0,n=0,a="",o=""}""===e[e.length-1][1]&&e.pop()
var u=!1
for(t=1;t<e.length-1;){if(0===e[t-1][0]&&0===e[t+1][0]){var s=e[t][1]
s.substring(s.length-e[t-1][1].length)===e[t-1][1]?(e[t][1]=e[t-1][1]+e[t][1].substring(0,e[t][1].length-e[t-1][1].length),e[t+1][1]=e[t-1][1]+e[t+1][1],e.splice(t-1,1),u=!0):s.substring(0,e[t+1][1].length)===e[t+1][1]&&(e[t-1][1]+=e[t+1][1],e[t][1]=e[t][1].substring(e[t+1][1].length)+e[t+1][1],e.splice(t+1,1),u=!0)}t++}u&&this.diffCleanupMerge(e)}
var pt={}
K.currentModule.suiteReport=oe,K.pq=new ut(Se)
var ft=!1,ht=!1
function mt(){ht=!0,m?m(function(){gt()}):gt()}function Dt(){K.blocking=!1,K.pq.advance()}function gt(){if(K.started)Dt()
else{K.reporters.console&&at.console.init(pt),K.reporters.tap&&at.tap.init(pt),K.started=A.now(),""===K.modules[0].name&&0===K.modules[0].tests.length&&K.modules.shift()
for(var e=[],t=0;t<K.modules.length;t++)""!==K.modules[t].name&&e.push({name:K.modules[t].name,moduleId:K.modules[t].moduleId,tests:K.modules[t].tests})
ye("runStart",oe.start(!0)),xe("begin",{totalTests:ke.count,modules:e}).then(Dt)}}pt.isLocal=v&&v.location&&"file:"===v.location.protocol,pt.version="2.24.1",B(pt,{config:K,diff:function(e,t){var n,r
return r=(n=new lt).DiffMain(e,t),n.diffCleanupEfficiency(r),n.diffPrettyHtml(r)},dump:te,equiv:G,reporters:at,hooks:it,is:S,objectType:_,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!T(e,ve)){var n=ve.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
var r=K._event_listeners[e]||(K._event_listeners[e]=[])
T(t,r)||(r.push(t),void 0!==K._event_memory[e]&&t(K._event_memory[e]))},onError:function(e){if(ne.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),K.current&&K.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,st(t),!1},onUncaughtException:st,pushFailure:Te,assert:me.prototype,module:ce,test:Se,todo:Se.todo,skip:Se.skip,only:Se.only,start:function(e){if(K.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=ft
if(ft=!0,ht)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(K.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!K.pageLoaded)return K.autostart=!0,void(b||pt.autostart())
mt()},onUnhandledRejection:function(e){ne.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),st(e)},extend:function(){ne.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return B.apply(this,t)},load:function(){ne.warn("QUnit.load is deprecated and will be removed in QUnit 3.0. https://qunitjs.com/api/QUnit/load/"),pt.autostart()},autostart:function(){K.pageLoaded=!0,B(K,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),ht||(K.blocking=!1,K.autostart&&mt())},stack:function(e){return he(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
K.callbacks[e].push(t)}}for(var r=0;r<t.length;r++){var a=t[r]
void 0===K.callbacks[a]&&(K.callbacks[a]=[]),e[a]=n(a)}}(pt),function(a){if(v&&b){if(v.QUnit&&v.QUnit.version)throw new Error("QUnit has already been defined.")
v.QUnit=a}e&&e.exports&&(e.exports=a,e.exports.QUnit=a),t&&(t.QUnit=a),void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r),a.config.autostart=!1}(pt),function(){if(v&&b){var e=pt.config,t=Object.prototype.hasOwnProperty
pt.begin(function(){if(!t.call(e,"fixture")){var n=b.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}}),pt.testStart(function(){if(null!=e.fixture){var t=b.getElementById("qunit-fixture")
if("string"===d(e.fixture)){var n=b.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}})}}(),function(){var e=void 0!==v&&v.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),a=r.length,o=0;o<a;o++)if(r[o]){var i=r[o].split("="),u=n(i[0]),s=1===i.length||n(i.slice(1).join("="))
t[u]=u in t?[].concat(t[u],s):s}return t}()
pt.urlParams=t,pt.config.filter=t.filter,/^[0-9]+$/.test(t.maxDepth)&&(pt.config.maxDepth=pt.dump.maxDepth=+t.maxDepth),pt.config.module=t.module,pt.config.moduleId=[].concat(t.moduleId||[]),pt.config.testId=[].concat(t.testId||[]),"true"===t.seed||!0===t.seed?pt.config.seed=(Math.random().toString(36)+"0000000000").slice(2,12):t.seed&&(pt.config.seed=t.seed),pt.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),pt.begin(function(){for(var e=pt.config.urlConfig,n=0;n<e.length;n++){var r=pt.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===pt.config[r]&&(pt.config[r]=t[r])}})}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var vt={exports:{}}
!function(e){var t,n
t=Fe,n=function(){var e=void 0!==we&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,n){return e[t]=n,this},this.clear=function(){e=Object.create(null)}},n=new t,r=new t,a=[]
a.total=0
var o=[],i=[]
function u(){n.clear(),r.clear(),o=[],i=[]}function s(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
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
var r=(e=h.prepareSearch(e))[0],o=n&&n.threshold||d&&d.threshold||-9007199254740991,i=n&&n.limit||d&&d.limit||9007199254740991,u=(n&&void 0!==n.allowTypo?n.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo,p=0,m=0,D=t.length
if(n&&n.keys)for(var g=n.scoreFn||s,v=n.keys,b=v.length,y=D-1;y>=0;--y){for(var F=t[y],w=new Array(b),E=b-1;E>=0;--E)(A=l(F,x=v[E]))?(c(A)||(A=h.getPrepared(A)),w[E]=u(e,A,r)):w[E]=null
w.obj=F
var C=g(w)
null!==C&&(C<o||(w.score=C,p<i?(f.add(w),++p):(++m,C>f.peek().score&&f.replaceTop(w))))}else if(n&&n.key){var x=n.key
for(y=D-1;y>=0;--y)(A=l(F=t[y],x))&&(c(A)||(A=h.getPrepared(A)),null!==(k=u(e,A,r))&&(k.score<o||(k={target:k.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:k.score,indexes:k.indexes,obj:F},p<i?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}else for(y=D-1;y>=0;--y){var A,k;(A=t[y])&&(c(A)||(A=h.getPrepared(A)),null!==(k=u(e,A,r))&&(k.score<o||(p<i?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}if(0===p)return a
var T=new Array(p)
for(y=p-1;y>=0;--y)T[y]=f.poll()
return T.total=p+m,T},goAsync:function(t,n,r){var o=!1,i=new Promise(function(i,u){if("farzher"==t)return i([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return i(a)
var f=(t=h.prepareSearch(t))[0],m=p(),D=n.length-1,g=r&&r.threshold||d&&d.threshold||-9007199254740991,v=r&&r.limit||d&&d.limit||9007199254740991,b=(r&&void 0!==r.allowTypo?r.allowTypo:!d||void 0===d.allowTypo||d.allowTypo)?h.algorithm:h.algorithmNoTypo,y=0,F=0
function w(){if(o)return u("canceled")
var d=Date.now()
if(r&&r.keys)for(var p=r.scoreFn||s,E=r.keys,C=E.length;D>=0;--D){if(D%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(w):setTimeout(w))
for(var x=n[D],A=new Array(C),k=C-1;k>=0;--k)(R=l(x,N=E[k]))?(c(R)||(R=h.getPrepared(R)),A[k]=b(t,R,f)):A[k]=null
A.obj=x
var T=p(A)
null!==T&&(T<g||(A.score=T,y<v?(m.add(A),++y):(++F,T>m.peek().score&&m.replaceTop(A))))}else if(r&&r.key)for(var N=r.key;D>=0;--D){if(D%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(w):setTimeout(w));(R=l(x=n[D],N))&&(c(R)||(R=h.getPrepared(R)),null!==(B=b(t,R,f))&&(B.score<g||(B={target:B.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:B.score,indexes:B.indexes,obj:x},y<v?(m.add(B),++y):(++F,B.score>m.peek().score&&m.replaceTop(B)))))}else for(;D>=0;--D){if(D%1e3==0&&Date.now()-d>=10)return void(e?setImmediate(w):setTimeout(w))
var R,B;(R=n[D])&&(c(R)||(R=h.getPrepared(R)),null!==(B=b(t,R,f))&&(B.score<g||(y<v?(m.add(B),++y):(++F,B.score>m.peek().score&&m.replaceTop(B)))))}if(0===y)return i(a)
for(var _=new Array(y),S=y-1;S>=0;--S)_[S]=m.poll()
_.total=y+F,i(_)}e?setImmediate(w):w()})
return i.cancel=function(){o=!0},i},highlight:function(e,t,n){if("function"==typeof t)return h.highlightCallback(e,t)
if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",a=0,o=!1,i=e.target,u=i.length,s=e.indexes,l=0;l<u;++l){var c=i[l]
if(s[a]===l){if(o||(o=!0,r+=t),++a===s.length){r+=c+n+i.substr(l+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},highlightCallback:function(e,t){if(null===e)return null
for(var n=e.target,r=n.length,a=e.indexes,o="",i=0,u=0,s=!1,l=(e=[],0);l<r;++l){var c=n[l]
if(a[u]===l){if(++u,s||(s=!0,e.push(o),o=""),u===a.length){o+=c,e.push(t(o,i++)),o="",e.push(n.substr(l+1))
break}}else s&&(s=!1,e.push(t(o,i++)),o="")
o+=c}return e},prepare:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){return e?{target:e,_targetLowerCodes:h.prepareLowerCodes(e),_nextBeginningIndexes:h.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSearch:function(e){return e||(e=""),h.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return h.prepare(e)
var t=n.get(e)
return void 0!==t||(t=h.prepare(e),n.set(e,t)),t},getPreparedSearch:function(e){if(e.length>999)return h.prepareSearch(e)
var t=r.get(e)
return void 0!==t||(t=h.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,u=r.length,s=0,l=0,c=0,d=0;;){if(n===r[l]){if(o[d++]=l,++s===a)break
n=e[0===c?s:c===s?s+1:c===s-1?s-1:s]}if(++l>=u)for(;;){if(s<=1)return null
if(0===c){if(n===e[--s])continue
c=s}else{if(1===c)return null
if((n=e[1+(s=--c)])===e[s])continue}l=o[(d=s)-1]+1
break}}s=0
var p=0,f=!1,m=0,D=t._nextBeginningIndexes
null===D&&(D=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target))
var g=l=0===o[0]?0:D[o[0]-1]
if(l!==u)for(;;)if(l>=u){if(s<=0){if(++p>a-2)break
if(e[p]===e[p+1])continue
l=g
continue}--s,l=D[i[--m]]}else if(e[0===p?s:p===s?s+1:p===s-1?s-1:s]===r[l]){if(i[m++]=l,++s===a){f=!0
break}++l}else l=D[l]
if(f)var v=i,b=m
else v=o,b=d
for(var y=0,F=-1,w=0;w<a;++w)F!==(l=v[w])-1&&(y-=l),F=l
for(f?0!==p&&(y+=-20):(y*=1e3,0!==c&&(y+=-20)),y-=u-a,t.score=y,t.indexes=new Array(b),w=b-1;w>=0;--w)t.indexes[w]=v[w]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,u=r.length,s=0,l=0,c=0;;){if(n===r[l]){if(o[c++]=l,++s===a)break
n=e[s]}if(++l>=u)return null}s=0
var d=!1,p=0,f=t._nextBeginningIndexes
if(null===f&&(f=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target)),(l=0===o[0]?0:f[o[0]-1])!==u)for(;;)if(l>=u){if(s<=0)break;--s,l=f[i[--p]]}else if(e[s]===r[l]){if(i[p++]=l,++s===a){d=!0
break}++l}else l=f[l]
if(d)var m=i,D=p
else m=o,D=c
for(var g=0,v=-1,b=0;b<a;++b)v!==(l=m[b])-1&&(g-=l),v=l
for(d||(g*=1e3),g-=u-a,t.score=g,t.indexes=new Array(D),b=D-1;b>=0;--b)t.indexes[b]=m[b]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),a=0;a<t;++a)n[a]=r.charCodeAt(a)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,a=!1,o=!1,i=0;i<t;++i){var u=e.charCodeAt(i),s=u>=65&&u<=90,l=s||u>=97&&u<=122||u>=48&&u<=57,c=s&&!a||!o||!l
a=s,o=l,c&&(n[r++]=i)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=h.prepareBeginningIndexes(e),r=[],a=n[0],o=0,i=0;i<t;++i)a>i?r[i]=a:(a=n[++o],r[i]=void 0===a?t:a)
return r},cleanup:u,new:t}
return h}()},e.exports?e.exports=n():t.fuzzysort=n()}(vt)
var bt=vt.exports,yt={failedTests:[],defined:0,completed:0}
!function(){if(v&&b){pt.reporters.perf.init(pt)
var e=pt.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,a=k({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
pt.on("runStart",function(e){yt.defined=e.testCounts.total}),pt.begin(function(t){!function(t){var n,i,u,s,c,h,m,F,k=E("qunit")
k&&(k.setAttribute("role","main"),k.innerHTML="<h1 id='qunit-header'>"+I(b.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(n=pt.config.testId)||n.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+I(n.join(", "))+" <a id='qunit-clearFilter' href='"+I(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=E("qunit-header"))&&(i.innerHTML="<a href='"+I(a)+"'>"+i.innerHTML+"</a> "),(u=E("qunit-banner"))&&(u.className=""),m=E("qunit-tests"),(F=E("qunit-testresult"))&&F.parentNode.removeChild(F),m&&(m.innerHTML="",(F=b.createElement("p")).id="qunit-testresult",F.className="result",m.parentNode.insertBefore(F,m),F.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=E("qunit-testresult-controls")),c&&c.appendChild(((h=b.createElement("button")).id="qunit-abort-tests-button",h.innerHTML="Abort",d(h,"click",C),h)),(s=E("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(b.createTextNode("QUnit "+pt.version+"; "+y.userAgent))),function(t){var n,a,i,u,s,c=E("qunit-testrunner-toolbar")
if(c){c.appendChild(((s=b.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,a="",o=0;o<n.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var u=I(i.id),s=I(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'>"+I(i.label)+": <select id='qunit-urlconfig-"+u+"' name='"+u+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(var l=0;l<i.value.length;l++)a+="<option value='"+(u=I(i.value[l]))+"'"+(e[i.id]===i.value[l]?(t=!0)&&" selected='selected'":"")+">"+u+"</option>"
else for(var c in i.value)r.call(i.value,c)&&(a+="<option value='"+I(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+I(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(u=I(e[i.id]))+"' selected='selected' disabled='disabled'>"+u+"</option>"),a+="</select></label>"}else a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'><input id='qunit-urlconfig-"+u+"' name='"+u+"' type='checkbox'"+(i.value?" value='"+I(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+I(i.label)+"</label>"}return a}(),D(s,"qunit-url-config"),f(s.getElementsByTagName("input"),"change",A),f(s.getElementsByTagName("select"),"change",A),s))
var h=b.createElement("span")
h.id="qunit-toolbar-filters",h.appendChild((n=b.createElement("form"),a=b.createElement("label"),i=b.createElement("input"),u=b.createElement("button"),D(n,"qunit-filter"),a.innerHTML="Filter: ",i.type="text",i.value=e.filter||"",i.name="filter",i.id="qunit-filter-input",u.innerHTML="Go",a.appendChild(i),n.appendChild(a),n.appendChild(b.createTextNode(" ")),n.appendChild(u),d(n,"submit",x),n)),h.appendChild(function(t){var n=null
if(o={options:t.modules.slice(),selectedMap:new w,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(n.keys()).sort().join(",")}},e.moduleId.length)for(var r=0;r<t.modules.length;r++){var a=t.modules[r];-1!==e.moduleId.indexOf(a.moduleId)&&o.selectedMap.set(a.moduleId,a.name)}n=new w(o.selectedMap)
var i=b.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",d(i,"input",A),d(i,"input",C),d(i,"focus",C),d(i,"click",C)
var u=b.createElement("label")
u.htmlFor="qunit-modulefilter-search",u.textContent="Module:"
var s=b.createElement("span")
s.id="qunit-modulefilter-search-container",s.appendChild(i)
var c=b.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",d(c,"click",T)
var f=b.createElement("button")
f.textContent="Reset",f.type="reset",f.title="Restore the previous module selection"
var h=b.createElement("button")
h.textContent="Select none",h.type="button",h.title="Clear the current module selection",d(h,"click",function(){o.selectedMap.clear(),k(),A()})
var m=b.createElement("span")
m.id="qunit-modulefilter-actions",m.appendChild(c),m.appendChild(f),n.size&&m.appendChild(h)
var D=b.createElement("ul")
D.id="qunit-modulefilter-dropdown-list"
var y=b.createElement("div")
y.id="qunit-modulefilter-dropdown",y.style.display="none",y.appendChild(m),y.appendChild(D),d(y,"change",k),s.appendChild(y),k()
var F,E=b.createElement("form")
function C(){function e(t){var n=E.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&i.focus(),y.style.display="none",p(b,"click",e),p(b,"keydown",e),i.value="",A())}"none"===y.style.display&&(A(),y.style.display="block",d(b,"click",e),d(b,"keydown",e))}function A(){v.clearTimeout(F),F=v.setTimeout(function(){D.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach(function(e,n){t+=N(n,e,!0)})
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=N(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map(function(e){return{obj:e}}):bt.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)})}function k(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),g(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=n,i.title="Type to search through and reduce the list.",f.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(u),E.appendChild(b.createTextNode(" ")),E.appendChild(s),d(E,"submit",x),d(E,"reset",function(){o.selectedMap=new w(n),k(),A()}),E}(t))
var m=b.createElement("div")
m.className="clearfix",c.appendChild(h),c.appendChild(m)}}(t)}(t)}),pt.on("runEnd",function(t){var n,r,a,o=E("qunit-banner"),i=E("qunit-tests"),u=E("qunit-abort-tests-button"),s=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",s,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",_(yt.failedTests)].join("")
if(u&&u.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(n=i.children[c]).className&&"running"!==n.className||(n.className="aborted",a=n.getElementsByTagName("ol")[0],(r=b.createElement("li")).className="fail",r.innerHTML="Test aborted.",a.appendChild(r))}!o||u&&!1!==u.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),u&&u.parentNode.removeChild(u),i&&(E("qunit-testresult-display").innerHTML=l),e.altertitle&&b.title&&(b.title=["failed"===t.status?"✖":"✔",b.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&v.scrollTo&&v.scrollTo(0,0)}),pt.testStart(function(e){var t,n
R(e.name,e.testId,e.module),(t=E("qunit-testresult-display"))&&(D(t,"running"),n=pt.config.reorder&&e.previousFailure,t.innerHTML=[O(yt),n?"Rerunning previously failed test: <br />":"Running: ",S(e.name,e.module),_(yt.failedTests)].join(""))}),pt.log(function(e){var t=E("qunit-test-output-"+e.testId)
if(t){var n,r,a,o=I(e.message)||(e.result?"okay":"failed")
o="<span class='test-message'>"+o+"</span>",o+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var i=!1
e.result||void 0===e.expected&&void 0===e.actual?!e.result&&e.source&&(o+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr></table>"):(n=e.negative?"NOT "+pt.dump.parse(e.expected):pt.dump.parse(e.expected),r=pt.dump.parse(e.actual),o+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+I(n)+"</pre></td></tr>",r!==n?(o+="<tr class='test-actual'><th>Result: </th><td><pre>"+I(r)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(i=!0,a=((a=e.actual-e.expected)>0?"+":"")+a):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(i=P(a=pt.diff(n,r)).length!==P(n).length+P(r).length),i&&(o+="<tr class='test-diff'><th>Diff: </th><td><pre>"+a+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?o+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+pt.dump.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+I(k({maxDepth:0}))+"'>Rerun without max depth</a>.</p></td></tr>":o+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(o+="<tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr>"),o+="</table>")
var u=t.getElementsByTagName("ol")[0],s=b.createElement("li")
s.className=e.result?"pass":"fail",s.innerHTML=o,u.appendChild(s)}}),pt.testDone(function(r){var a=E("qunit-tests"),o=E("qunit-test-output-"+r.testId)
if(a&&o){var i
F(o,"running"),i=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var u=o.getElementsByTagName("ol")[0],s=r.passed,l=r.failed,c=r.failed>0?r.todo:!r.todo
c?D(u,"qunit-collapsed"):(yt.failedTests.push(r.testId),e.collapse&&(n?D(u,"qunit-collapsed"):n=!0))
var p=o.firstChild,f=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+s+"</b>, ":""
if(p.innerHTML+=" <b class='counts'>("+f+r.assertions.length+")</b>",yt.completed++,r.skipped){o.className="skipped"
var h=b.createElement("em")
h.className="qunit-skipped-label",h.innerHTML="skipped",o.insertBefore(h,p)}else{if(d(p,"click",function(){g(u,"qunit-collapsed")}),o.className=c?"pass":"fail",r.todo){var m=b.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,p)}var v=b.createElement("span")
v.className="runtime",v.innerHTML=r.runtime+" ms",o.insertBefore(v,u)}if(r.source){var y=b.createElement("p")
y.innerHTML="<strong>Source: </strong>"+I(r.source),D(y,"qunit-source"),c&&D(y,"qunit-collapsed"),d(p,"click",function(){g(y,"qunit-collapsed")}),o.appendChild(y)}e.hidepassed&&("passed"===i||r.skipped)&&(t.push(o),a.removeChild(o))}}),pt.on("error",function(e){var t=R("global failure")
if(t){var n=I(M(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],a=b.createElement("li")
a.className="fail",a.innerHTML=n,r.appendChild(a),t.className="fail"}})
var i,u=(i=v.phantom)&&i.version&&i.version.major>0
u&&h.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),u||"complete"!==b.readyState?d(v,"load",pt.autostart):pt.autostart()
var s=v.onerror
v.onerror=function(t,n,r,a,o){var i=!1
if(s){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
i=s.call.apply(s,[this,t,n,r,a,o].concat(l))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&n&&r&&(d.stack="".concat(n,":").concat(r)),pt.onUncaughtException(d)}return i},v.addEventListener("unhandledrejection",function(e){pt.onUncaughtException(e.reason)})}function c(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function d(e,t,n){e.addEventListener(t,n,!1)}function p(e,t,n){e.removeEventListener(t,n,!1)}function f(e,t,n){for(var r=e.length;r--;)d(e[r],t,n)}function m(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function D(e,t){m(e,t)||(e.className+=(e.className?" ":"")+t)}function g(e,t,n){n||void 0===n&&!m(e,t)?D(e,t):F(e,t)}function F(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=c(n)}function E(e){return b.getElementById&&b.getElementById(e)}function C(){var e=E("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),pt.config.queue.length=0,!1}function x(e){var t=E("qunit-filter-input")
return t.value=c(t.value),T(),e&&e.preventDefault&&e.preventDefault(),!1}function A(){var n,r=this,a={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,a[r.name]=n
var o=k(a)
if("hidepassed"===r.name&&"replaceState"in v.history){pt.urlParams[r.name]=n,e[r.name]=n||!1
var i=E("qunit-tests")
if(i)if(r.checked){for(var u=i.children.length,s=i.children,l=0;l<u;l++){var c=s[l],d=c?c.className:"",p=d.indexOf("pass")>-1,f=d.indexOf("skipped")>-1;(p||f)&&t.push(c)}for(var h=0;h<t.length;h++)i.removeChild(t[h])}else{for(var m=0;m<t.length;m++)i.appendChild(t[m])
t.length=0}v.history.replaceState(null,"",o)}else v.location=o}function k(e){var t="?",n=v.location
for(var a in e=B(B({},pt.urlParams),e))if(r.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function T(){var e=E("qunit-filter-input").value
v.location=k({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function N(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+I(e)+'"'+(n?' checked="checked"':"")+" />"+I(t)+"</label></li>"}function R(e,t,n){var r=E("qunit-tests")
if(r){var a=b.createElement("strong")
a.className="qunit-test-name",a.innerHTML=S(e,n)
var o=b.createElement("li")
if(o.appendChild(a),void 0!==t){var i=b.createElement("a")
i.innerHTML="Rerun",i.href=k({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var u=b.createElement("ol")
return u.className="qunit-assert-list",o.appendChild(u),r.appendChild(o),o}}function _(e){return 0===e.length?"":["<br /><a href='"+I(k({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function S(e,t){var n=""
return t&&(n="<span class='module-name'>"+I(t)+"</span>: "),n+"<span class='test-name'>"+I(e)+"</span>"}function O(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function P(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}()}()},1707:function(e,t){!function t(n){var r=n,a=n.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
function u(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.10.3","function"==typeof define&&define.amd&&define("axe-core",[],function(){return i}),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof n.getComputedStyle&&(n.axe=i),u.prototype=Object.create(Error.prototype),u.prototype.constructor=u
var s=["node"],l=["relatedNodes"],c=["node"],d=["variant"],p=["matches"],f=["chromium"],h=["noImplicit"],m=["noPresentational"],D=["precision","format","inGamut"],g=["space"],v=["algorithm"],b=["method"],y=["maxDeltaE","deltaEMethod","steps","maxSteps"],F=["node"],w=["environmentData"],E=["environmentData"],C=["environmentData"],x=["environmentData"],A=["environmentData"]
function k(e,t,n){return t=N(t),function(e,t){if(t&&("object"==o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(e,T()?Reflect.construct(t,n||[],N(e).constructor):t.apply(e,n))}function T(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(T=function(){return!!e})()}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function R(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function _(e,t,n){O(e,t),t.set(e,n)}function S(e,t){O(e,t),t.add(e)}function O(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function M(e,t){return e.get(P(e,t))}function I(e,t,n){return e.set(P(e,t),n),n}function P(e,t,n){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:n
throw new TypeError("Private element is not present on this object")}function j(e,t){if(null==e)return{}
var n,r,a=function(e,t){if(null==e)return{}
var n={}
for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue
n[r]=e[r]}return n}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function q(e){return function(e){if(Array.isArray(e))return X(e)}(e)||L(e)||Y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(null,arguments)}function $(e,t){return V(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,i,u=[],s=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
s=!1}else for(;!(s=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||Y(e,t)||H()}function H(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function V(e){if(Array.isArray(e))return e}function U(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,K(r.key),r)}}function G(e,t,n){return t&&W(e.prototype,t),n&&W(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e){var t=function(e){if("object"!=o(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=o(n))return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==o(t)?t:t+""}function Q(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=Y(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function Y(e,t){if(e){if("string"==typeof e)return X(e,t)
var n={}.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}function X(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(e,t,N,O,W,X,Z,J,ee,te,ne){var re=Object.create,ae=Object.defineProperty,oe=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,ue=Object.getOwnPropertyNames,se=Object.getOwnPropertyDescriptor,le=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},ce=function(e,t){for(var n in t)ae(e,n,{get:t[n],enumerable:!0})},de=function(e){return function(e,t,n){if(t&&"object"===o(t)||"function"==typeof t){var r,a=Q(ue(t))
try{var i=function(){var a=r.value
ie.call(e,a)||"default"===a||ae(e,a,{get:function(){return t[a]},enumerable:!(n=se(t,a))||n.enumerable})}
for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}return e}((t=ae(null!=e?re(oe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),ae(t,"__esModule",{value:!0})),e)
var t},pe=function(e,t,n){return function(e,t,n){t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==o(t)?t+"":t,n),n},fe=le(function(e,t){"use strict"
t.exports=function(){}}),he=le(function(e,t){"use strict"
var n=fe()()
t.exports=function(e){return e!==n&&null!==e}}),me=le(function(e,t){"use strict"
var n=he(),r=Array.prototype.forEach,a=Object.create
t.exports=function(e){var t=a(null)
return r.call(arguments,function(e){n(e)&&function(e,t){var n
for(n in e)t[n]=e[n]}(Object(e),t)}),t}}),De=le(function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}}),ge=le(function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}}),ve=le(function(e,t){"use strict"
t.exports=De()()?Math.sign:ge()}),be=le(function(e,t){"use strict"
var n=ve(),r=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?n(e)*a(r(e)):e}}),ye=le(function(e,t){"use strict"
var n=be(),r=Math.max
t.exports=function(e){return r(0,n(e))}}),Fe=le(function(e,t){"use strict"
var n=ye()
t.exports=function(e,t,r){var a
return isNaN(e)?(a=t)>=0?r&&a?a-1:a:1:!1!==e&&n(e)}}),we=le(function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}}),Ee=le(function(e,t){"use strict"
var n=he()
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}}),Ce=le(function(e,t){"use strict"
var n=we(),r=Ee(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,u=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(s,l){var c,d=arguments[2],p=arguments[3]
return s=Object(r(s)),n(l),c=i(s),p&&c.sort("function"==typeof p?a.call(p,s):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,function(e,n){return u.call(s,e)?o.call(l,d,s[e],e,s,n):t})}}}),xe=le(function(e,t){"use strict"
t.exports=Ce()("forEach")}),Ae=le(function(){}),ke=le(function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}}),Te=le(function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}}),Ne=le(function(e,t){"use strict"
var n=he(),r=Object.keys
t.exports=function(e){return r(n(e)?Object(e):e)}}),Re=le(function(e,t){"use strict"
t.exports=Te()()?Object.keys:Ne()}),Be=le(function(e,t){"use strict"
var n=Re(),r=Ee(),a=Math.max
t.exports=function(e,t){var o,i,u,s=a(arguments.length,2)
for(e=Object(r(e)),u=function(n){try{e[n]=t[n]}catch(e){o||(o=e)}},i=1;i<s;++i)n(t=arguments[i]).forEach(u)
if(void 0!==o)throw o
return e}}),_e=le(function(e,t){"use strict"
t.exports=ke()()?Object.assign:Be()}),Se=le(function(e,t){"use strict"
var n=he(),r={function:!0,object:!0}
t.exports=function(e){return n(e)&&r[o(e)]||!1}}),Oe=le(function(e,t){"use strict"
var n=_e(),r=Se(),a=he(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),u=arguments[1],s=arguments[2]
return a(s)||r(u)&&(s=u,u=null),a(s)&&n(i,s),a(u)&&(i.code=u),o&&o(i,t.exports),i}}),Me=le(function(e,t){"use strict"
var n=Ee(),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var u,s=Object(n(t))
if(e=Object(n(e)),o(s).forEach(function(n){try{r(e,n,a(t,n))}catch(e){u=e}}),"function"==typeof i&&i(s).forEach(function(n){try{r(e,n,a(t,n))}catch(e){u=e}}),void 0!==u)throw u
return e}}),Ie=le(function(e,t){"use strict"
var n,r,a,o,i,u=ye(),s=function(e,t){return t}
try{Object.defineProperty(s,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===s.length?(n={configurable:!0,writable:!1,enumerable:!1},r=Object.defineProperty,t.exports=function(e,t){return t=u(t),e.length===t?e:(n.value=t,r(e,"length",n))}):(o=Me(),i=[],a=function(e){var t,n=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++n).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var n
if(t=u(t),e.length===t)return e
n=a(t)(e)
try{o(n,e)}catch(e){}return n})}),Pe=le(function(e,t){"use strict"
t.exports=function(e){return null!=e}}),je=le(function(e,t){"use strict"
var n=Pe(),r={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!n(e)&&hasOwnProperty.call(r,o(e))}}),qe=le(function(e,t){"use strict"
var n=je()
t.exports=function(e){if(!n(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}}),Le=le(function(e,t){"use strict"
var n=qe()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}}),ze=le(function(e,t){"use strict"
var n=Le(),r=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!n(e)&&!r.test(a.call(e))}}),$e=le(function(e,t){"use strict"
var n="razdwatrzy"
t.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}}),He=le(function(e,t){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}}),Ve=le(function(e,t){"use strict"
t.exports=$e()()?String.prototype.contains:He()}),Ue=le(function(e,t){"use strict"
var n=Pe(),r=ze(),a=_e(),o=me(),i=Ve(),u=t.exports=function(e,t){var r,u,s,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],n(e)?(r=i.call(e,"c"),u=i.call(e,"e"),s=i.call(e,"w")):(r=s=!0,u=!1),c={value:t,configurable:r,enumerable:u,writable:s},l?a(o(l),c):c}
u.gs=function(e,t,u){var s,l,c,d
return"string"!=typeof e?(c=u,u=t,t=e,e=null):c=arguments[3],n(t)?r(t)?n(u)?r(u)||(c=u,u=void 0):u=void 0:(c=t,t=u=void 0):t=void 0,n(e)?(s=i.call(e,"c"),l=i.call(e,"e")):(s=!0,l=!1),d={get:t,set:u,configurable:s,enumerable:l},c?a(o(c),d):d}}),We=le(function(e,t){"use strict"
var n,r,a,i,u,s,l,c=Ue(),d=we(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,D=Object.defineProperties,g=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0}
r=function(e,t){var r,o
return d(t),o=this,n.call(this,e,r=function(){a.call(o,e,r),p.call(t,this,arguments)}),r.__eeOnceListener__=t,this},a=function(e,t){var n,r,a,i
if(d(t),!g.call(this,"__ee__"))return this
if(!(n=this.__ee__)[e])return this
if(r=n[e],"object"===o(r))for(i=0;a=r[i];++i)a!==t&&a.__eeOnceListener__!==t||(2===r.length?n[e]=r[i?0:1]:r.splice(i,1))
else r!==t&&r.__eeOnceListener__!==t||delete n[e]
return this},i=function(e){var t,n,r,a,i
if(g.call(this,"__ee__")&&(a=this.__ee__[e]))if("object"===o(a)){for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
for(a=a.slice(),t=0;r=a[t];++t)p.call(r,this,i)}else switch(arguments.length){case 1:f.call(a,this)
break
case 2:f.call(a,this,arguments[1])
break
case 3:f.call(a,this,arguments[1],arguments[2])
break
default:for(n=arguments.length,i=new Array(n-1),t=1;t<n;++t)i[t-1]=arguments[t]
p.call(a,this,i)}},u={on:n=function(e,t){var n
return d(t),g.call(this,"__ee__")?n=this.__ee__:(n=v.value=h(null),m(this,"__ee__",v),v.value=null),n[e]?"object"===o(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:a,emit:i},s={on:c(n),once:c(r),off:c(a),emit:c(i)},l=D({},s),t.exports=e=function(e){return null==e?h(l):D(Object(e),s)},e.methods=u}),Ge=le(function(e,t){"use strict"
t.exports=function(){var e,t,n=Array.from
return"function"==typeof n&&(t=n(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}}),Ke=le(function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}}),Qe=le(function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===n?"undefined":o(n))&&n)return n
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()}),Ye=le(function(e,t){"use strict"
t.exports=Ke()()?globalThis:Qe()}),Xe=le(function(e,t){"use strict"
var n=Ye(),r={object:!0,symbol:!0}
t.exports=function(){var e,t=n.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!r[o(t.iterator)]&&!!r[o(t.toPrimitive)]&&!!r[o(t.toStringTag)]}}),Ze=le(function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}}),Je=le(function(e,t){"use strict"
var n=Ze()
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}}),et=le(function(e,t){"use strict"
var n=Ue(),r=Object.create,a=Object.defineProperty,o=Object.prototype,i=r(null)
t.exports=function(e){for(var t,r,u=0;i[e+(u||"")];)++u
return i[e+=u||""]=!0,a(o,t="@@"+e,n.gs(null,function(e){r||(r=!0,a(this,t,n(e)),r=!1)})),t}}),tt=le(function(e,t){"use strict"
var n=Ue(),r=Ye().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:n("",r&&r.hasInstance||e("hasInstance")),isConcatSpreadable:n("",r&&r.isConcatSpreadable||e("isConcatSpreadable")),iterator:n("",r&&r.iterator||e("iterator")),match:n("",r&&r.match||e("match")),replace:n("",r&&r.replace||e("replace")),search:n("",r&&r.search||e("search")),species:n("",r&&r.species||e("species")),split:n("",r&&r.split||e("split")),toPrimitive:n("",r&&r.toPrimitive||e("toPrimitive")),toStringTag:n("",r&&r.toStringTag||e("toStringTag")),unscopables:n("",r&&r.unscopables||e("unscopables"))})}}),nt=le(function(e,t){"use strict"
var n=Ue(),r=Je(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:n(function(t){return a[t]?a[t]:a[t]=e(String(t))}),keyFor:n(function(e){var t
for(t in r(e),a)if(a[t]===e)return t})})}}),rt=le(function(e,t){"use strict"
var n,r,a,i=Ue(),u=Je(),s=Ye().Symbol,l=et(),c=tt(),d=nt(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof s)try{String(s()),a=!0}catch(e){}else s=null
r=function(e){if(this instanceof r)throw new TypeError("Symbol is not a constructor")
return n(e)},t.exports=n=function e(t){var n
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?s(t):(n=p(r.prototype),t=void 0===t?"":String(t),f(n,{__description__:i("",t),__name__:i("",l(t))}))},c(n),d(n),f(r.prototype,{constructor:i(n),toString:i("",function(){return this.__name__})}),f(n.prototype,{toString:i(function(){return"Symbol ("+u(this).__description__+")"}),valueOf:i(function(){return u(this)})}),h(n.prototype,n.toPrimitive,i("",function(){var e=u(this)
return"symbol"===o(e)?e:e.toString()})),h(n.prototype,n.toStringTag,i("c","Symbol")),h(r.prototype,n.toStringTag,i("c",n.prototype[n.toStringTag])),h(r.prototype,n.toPrimitive,i("c",n.prototype[n.toPrimitive]))}),at=le(function(e,t){"use strict"
t.exports=Xe()()?Ye().Symbol:rt()}),ot=le(function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===r}}),it=le(function(e,t){"use strict"
var n=Object.prototype.toString,r=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&r(n.call(e))}}),ut=le(function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||n.call(e)===r)||!1}}),st=le(function(e,t){"use strict"
var n=at().iterator,r=ot(),a=it(),o=ye(),i=we(),u=Ee(),s=he(),l=ut(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,D,g,v,b,y,F,w,E=arguments[1],C=arguments[2]
if(e=Object(u(e)),s(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(r(e))return 1!==(g=e.length)?Array.apply(null,e):((D=new Array(1))[0]=e[0],D)
if(c(e)){for(D=new Array(g=e.length),h=0;h<g;++h)D[h]=e[h]
return D}}D=[]}if(!c(e))if(void 0!==(F=e[n])){for(b=i(F).call(e),t&&(D=new t),y=b.next(),h=0;!y.done;)w=E?d.call(E,C,y.value,h):y.value,t?(p.value=w,f(D,h,p)):D[h]=w,y=b.next(),++h
g=h}else if(l(e)){for(g=e.length,t&&(D=new t),h=0,m=0;h<g;++h)w=e[h],h+1<g&&(v=w.charCodeAt(0))>=55296&&v<=56319&&(w+=e[++h]),w=E?d.call(E,C,w,m):w,t?(p.value=w,f(D,m,p)):D[m]=w,++m
g=m}if(void 0===g)for(g=o(e.length),t&&(D=new t(g)),h=0;h<g;++h)w=E?d.call(E,C,e[h],h):e[h],t?(p.value=w,f(D,h,p)):D[h]=w
return t&&(p.value=null,D.length=g),D}}),lt=le(function(e,t){"use strict"
t.exports=Ge()()?Array.from:st()}),ct=le(function(e,t){"use strict"
var n=lt(),r=Array.isArray
t.exports=function(e){return r(e)?e:n(e)}}),dt=le(function(e,t){"use strict"
var n,r=ct(),a=he(),o=we(),i=Array.prototype.slice
n=function(e){return this.map(function(t,n){return t?t(e[n]):e[n]}).concat(i.call(e,this.length))},t.exports=function(e){return(e=r(e)).forEach(function(e){a(e)&&o(e)}),n.bind(e)}}),pt=le(function(e,t){"use strict"
var n=we()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:n(e.get)},void 0!==e.set?(t.set=n(e.set),e.delete&&(t.delete=n(e.delete)),e.clear&&(t.clear=n(e.clear)),t):(t.set=t.get,t))}}),ft=le(function(e,t){"use strict"
var n=Oe(),r=Ie(),a=Ue(),o=We().methods,i=dt(),u=pt(),s=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var h,m,D,g,v,b,y,F,w,E,C,x,A,k,T,N=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(E=u(o.normalizer),D=E.get,g=E.set,v=E.delete,b=E.clear),null!=o.resolvers&&(T=i(o.resolvers)),k=D?r(function(t){var r,a,o=arguments
if(T&&(o=T(o)),null!==(r=D(o))&&hasOwnProperty.call(N,r))return C&&h.emit("get",r,o,this),N[r]
if(a=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),null===r){if(null!==(r=D(o)))throw n("Circular invocation","CIRCULAR_INVOCATION")
r=g(o)}else if(hasOwnProperty.call(N,r))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[r]=a,x&&h.emit("set",r,null,a),a},m):0===t?function(){var t
if(hasOwnProperty.call(N,"data"))return C&&h.emit("get","data",arguments,this),N.data
if(t=arguments.length?s.call(e,this,arguments):l.call(e,this),hasOwnProperty.call(N,"data"))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N.data=t,x&&h.emit("set","data",null,t),t}:function(t){var r,a,o=arguments
if(T&&(o=T(arguments)),a=String(o[0]),hasOwnProperty.call(N,a))return C&&h.emit("get",a,o,this),N[a]
if(r=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),hasOwnProperty.call(N,a))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[a]=r,x&&h.emit("set",a,null,r),r},h={original:e,memoized:k,profileName:o.profileName,get:function(e){return T&&(e=T(e)),D?D(e):String(e[0])},has:function(e){return hasOwnProperty.call(N,e)},delete:function(e){var t
hasOwnProperty.call(N,e)&&(v&&v(e),t=N[e],delete N[e],A&&h.emit("delete",e,t))},clear:function(){var e=N
b&&b(),N=c(null),h.emit("clear",e)},on:function(e,t){return"get"===e?C=!0:"set"===e?x=!0:"delete"===e&&(A=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=h.original}},y=D?r(function(e){var t,n=arguments
T&&(n=T(n)),null!==(t=D(n))&&h.delete(t)},m):0===t?function(){return h.delete("data")}:function(e){return T&&(e=T(arguments)[0]),h.delete(e)},F=r(function(){var e,n=arguments
return 0===t?N.data:(T&&(n=T(n)),e=D?D(n):String(n[0]),N[e])}),w=r(function(){var e,n=arguments
return 0===t?h.has("data"):(T&&(n=T(n)),null!==(e=D?D(n):String(n[0]))&&h.has(e))}),d(k,{__memoized__:a(!0),delete:a(y),clear:a(h.clear),_get:a(F),_has:a(w)}),h}}),ht=le(function(e,t){"use strict"
var n=we(),r=xe(),a=Ae(),o=ft(),i=Fe()
t.exports=function e(t){var u,s,l
if(n(t),(u=Object(arguments[1])).async&&u.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!u.force?t:(s=i(u.length,t.length,u.async&&a.async),l=o(t,s,u),r(a,function(e,t){u[t]&&e(u[t],l,u)}),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}}),mt=le(function(e,t){"use strict"
t.exports=function(e){var t,n,r=e.length
if(!r)return""
for(t=String(e[n=0]);--r;)t+=""+e[++n]
return t}}),Dt=le(function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var n=String(t[0]),r=0,a=e;--a;)n+=""+t[++r]
return n}:function(){return""}}}),gt=le(function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}}),vt=le(function(e,t){"use strict"
t.exports=function(e){return e!=e}}),bt=le(function(e,t){"use strict"
t.exports=gt()()?Number.isNaN:vt()}),yt=le(function(e,t){"use strict"
var n=bt(),r=ye(),a=Ee(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,u=Math.abs,s=Math.floor
t.exports=function(e){var t,l,c,d
if(!n(e))return o.apply(this,arguments)
for(l=r(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?s(c):r(this.length)-s(u(c));t<l;++t)if(i.call(this,t)&&(d=this[t],n(d)))return t
return-1}}),Ft=le(function(e,t){"use strict"
var n=yt(),r=Object.create
t.exports=function(){var e=0,t=[],a=r(null)
return{get:function(e){var r,a=0,o=t,i=e.length
if(0===i)return o[i]||null
if(o=o[i]){for(;a<i-1;){if(-1===(r=n.call(o[0],e[a])))return null
o=o[1][r],++a}return-1===(r=n.call(o[0],e[a]))?null:o[1][r]||null}return null},set:function(r){var o,i=0,u=t,s=r.length
if(0===s)u[s]=++e
else{for(u[s]||(u[s]=[[],[]]),u=u[s];i<s-1;)-1===(o=n.call(u[0],r[i]))&&(o=u[0].push(r[i])-1,u[1].push([[],[]])),u=u[1][o],++i;-1===(o=n.call(u[0],r[i]))&&(o=u[0].push(r[i])-1),u[1][o]=++e}return a[e]=r,e},delete:function(e){var r,o=0,i=t,u=a[e],s=u.length,l=[]
if(0===s)delete i[s]
else if(i=i[s]){for(;o<s-1;){if(-1===(r=n.call(i[0],u[o])))return
l.push(i,r),i=i[1][r],++o}if(-1===(r=n.call(i[0],u[o])))return
for(e=i[1][r],i[0].splice(r,1),i[1].splice(r,1);!i[0].length&&l.length;)r=l.pop(),(i=l.pop())[0].splice(r,1),i[1].splice(r,1)}delete a[e]},clear:function(){t=[],a=r(null)}}}}),wt=le(function(e,t){"use strict"
var n=yt()
t.exports=function(){var e=0,t=[],r=[]
return{get:function(e){var a=n.call(t,e[0])
return-1===a?null:r[a]},set:function(n){return t.push(n[0]),r.push(++e),e},delete:function(e){var a=n.call(r,e);-1!==a&&(t.splice(a,1),r.splice(a,1))},clear:function(){t=[],r=[]}}}}),Et=le(function(e,t){"use strict"
var n=yt(),r=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=r(null)
return{get:function(t){for(var r,o=0,i=a;o<e-1;){if(-1===(r=n.call(i[0],t[o])))return null
i=i[1][r],++o}return-1===(r=n.call(i[0],t[o]))?null:i[1][r]||null},set:function(r){for(var i,u=0,s=a;u<e-1;)-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1,s[1].push([[],[]])),s=s[1][i],++u
return-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1),s[1][i]=++t,o[t]=r,t},delete:function(t){for(var r,i=0,u=a,s=[],l=o[t];i<e-1;){if(-1===(r=n.call(u[0],l[i])))return
s.push(u,r),u=u[1][r],++i}if(-1!==(r=n.call(u[0],l[i]))){for(t=u[1][r],u[0].splice(r,1),u[1].splice(r,1);!u[0].length&&s.length;)r=s.pop(),(u=s.pop())[0].splice(r,1),u[1].splice(r,1)
delete o[t]}},clear:function(){a=[[],[]],o=r(null)}}}}),Ct=le(function(e,t){"use strict"
var n=we(),r=xe(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return n(t),r(e,function(e,n,r,u){o[n]=a.call(t,i,e,n,r,u)}),o}}),xt=le(function(e,t){"use strict"
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
if("function"==typeof WebKitMutationObserver)return r(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(n(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(n(e),0)}:null}()}),At=le(function(){"use strict"
var e=lt(),t=Ct(),n=Me(),r=Ie(),a=xt(),o=Array.prototype.slice,i=Function.prototype.apply,u=Object.create
Ae().async=function(s,l){var c,d,p,f=u(null),h=u(null),m=l.memoized,D=l.original
l.memoized=r(function(e){var t=arguments,n=t[t.length-1]
return"function"==typeof n&&(c=n,t=o.call(t,0,-1)),m.apply(d=this,p=t)},m)
try{n(l.memoized,m)}catch(e){}l.on("get",function(e){var t,n,r
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,n=d,r=p,c=d=p=null,a(function(){var a
hasOwnProperty.call(h,e)?(a=h[e],l.emit("getasync",e,r,n),i.call(t,a.context,a.args)):(c=t,d=n,p=r,m.apply(n,r))})}}),l.original=function(){var t,n,r,o
return c?(t=e(arguments),n=function t(n){var r,u,s=t.id
if(null!=s){if(delete t.id,r=f[s],delete f[s],r)return u=e(arguments),l.has(s)&&(n?l.delete(s):(h[s]={context:this,args:u},l.emit("setasync",s,"function"==typeof r?1:r.length))),"function"==typeof r?o=i.call(r,this,u):r.forEach(function(e){o=i.call(e,this,u)},this),o}else a(i.bind(t,this,arguments))},r=c,c=d=p=null,t.push(n),o=i.call(D,this,t),n.cb=r,c=n,o):i.call(D,this,arguments)},l.on("set",function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)}),l.on("delete",function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],l.emit("deleteasync",e,o.call(t.args,1)))}),l.on("clear",function(){var e=h
h=u(null),l.emit("clearasync",t(e,function(e){return o.call(e.args,1)}))})}}),kt=le(function(e,t){"use strict"
var n=Array.prototype.forEach,r=Object.create
t.exports=function(e){var t=r(null)
return n.call(arguments,function(e){t[e]=!0}),t}}),Tt=le(function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}}),Nt=le(function(e,t){"use strict"
var n=Tt()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}}),Rt=le(function(e,t){"use strict"
var n=Ee(),r=Nt()
t.exports=function(e){return r(n(e))}}),Bt=le(function(e,t){"use strict"
var n=Tt()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}}),_t=le(function(e,t){"use strict"
var n=Bt(),r=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=n(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(r,function(e){return JSON.stringify(e).slice(1,-1)})}}),St=le(function(e,t){function n(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=n,t.exports.default=n}),Ot=le(function(){"use strict"
var e=Ct(),t=kt(),n=Rt(),r=_t(),a=St(),o=xt(),i=Object.create,u=t("then","then:finally","done","done:finally")
Ae().promise=function(t,s){var l=i(null),c=i(null),d=i(null)
if(!0===t)t=null
else if(t=n(t),!u[t])throw new TypeError("'"+r(t)+"' is not valid promise mode")
s.on("set",function(e,n,r){var i=!1
if(!a(r))return c[e]=r,void s.emit("setasync",e,1)
l[e]=1,d[e]=r
var u=function(t){var n=l[e]
if(i)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
n&&(delete l[e],c[e]=t,s.emit("setasync",e,n))},p=function(){i=!0,l[e]&&(delete l[e],delete d[e],s.delete(e))},f=t
if(f||(f="then"),"then"===f){var h=function(){o(p)}
"function"==typeof(r=r.then(function(e){o(u.bind(this,e))},h)).finally&&r.finally(h)}else if("done"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
r.done(u,p)}else if("done:finally"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof r.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
r.done(u),r.finally(p)}}),s.on("get",function(e,t,n){var r
if(l[e])++l[e]
else{r=d[e]
var i=function(){s.emit("getasync",e,t,n)}
a(r)?"function"==typeof r.done?r.done(i):r.then(function(){o(i)}):i()}}),s.on("delete",function(e){if(delete d[e],l[e])delete l[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],s.emit("deleteasync",e,[t])}}),s.on("clear",function(){var t=c
c=i(null),l=i(null),d=i(null),s.emit("clearasync",e(t,function(e){return[e]}))})}}),Mt=le(function(){"use strict"
var e=we(),t=xe(),n=Ae(),r=Function.prototype.apply
n.dispose=function(a,o,i){var u
if(e(a),i.async&&n.async||i.promise&&n.promise)return o.on("deleteasync",u=function(e,t){r.call(a,null,t)}),void o.on("clearasync",function(e){t(e,function(e,t){u(t,e)})})
o.on("delete",u=function(e,t){a(t)}),o.on("clear",function(e){t(e,function(e,t){u(t,e)})})}}),It=le(function(e,t){"use strict"
t.exports=2147483647}),Pt=le(function(e,t){"use strict"
var n=ye(),r=It()
t.exports=function(e){if((e=n(e))>r)throw new TypeError(e+" exceeds maximum possible timeout")
return e}}),jt=le(function(){"use strict"
var e=lt(),t=xe(),n=xt(),r=St(),a=Pt(),o=Ae(),i=Function.prototype,u=Math.max,s=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,h,m,D;(c=a(c))&&(f=l(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,function(e){f[e]=setTimeout(function(){d.delete(e)},c),"function"==typeof f[e].unref&&f[e].unref(),D&&(D[e]&&"nextTick"!==D[e]&&clearTimeout(D[e]),D[e]=setTimeout(function(){delete D[e]},m),"function"==typeof D[e].unref&&D[e].unref())}),d.on("delete"+h,function(e){clearTimeout(f[e]),delete f[e],D&&("nextTick"!==D[e]&&clearTimeout(D[e]),delete D[e])}),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:u(s(Number(p.preFetch),1),0))&&(D={},m=(1-m)*c,d.on("get"+h,function(t,a,o){D[t]||(D[t]="nextTick",n(function(){var n
"nextTick"===D[t]&&(delete D[t],d.delete(t),p.async&&(a=e(a)).push(i),n=d.memoized.apply(o,a),p.promise&&r(n)&&("function"==typeof n.done?n.done(i,i):n.then(i,i)))}))})),d.on("clear"+h,function(){t(f,function(e){clearTimeout(e)}),f={},D&&(t(D,function(e){"nextTick"!==e&&clearTimeout(e)}),D={})}))}}),qt=le(function(e,t){"use strict"
var n=ye(),r=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,u=r(null),s=r(null),l=0
return e=n(e),{hit:function(n){var r=s[n],c=++l
if(u[c]=n,s[n]=c,!r){if(++o<=e)return
return n=u[i],t(n),n}if(delete u[r],i===r)for(;!a.call(u,++i););},delete:t=function(e){var t=s[e]
if(t&&(delete u[t],delete s[e],--o,i===t)){if(!o)return l=0,void(i=1)
for(;!a.call(u,++i););}},clear:function(){o=0,i=1,u=r(null),s=r(null),l=0}}}}),Lt=le(function(){"use strict"
var e=ye(),t=qt(),n=Ae()
n.max=function(r,a,o){var i,u,s;(r=e(r))&&(u=t(r),i=o.async&&n.async||o.promise&&n.promise?"async":"",a.on("set"+i,s=function(e){void 0!==(e=u.hit(e))&&a.delete(e)}),a.on("get"+i,s),a.on("delete"+i,u.delete),a.on("clear"+i,u.clear))}}),zt=le(function(){"use strict"
var e=Ue(),t=Ae(),n=Object.create,r=Object.defineProperties
t.refCounter=function(a,o,i){var u,s
u=n(null),s=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+s,function(e,t){u[e]=t||1}),o.on("get"+s,function(e){++u[e]}),o.on("delete"+s,function(e){delete u[e]}),o.on("clear"+s,function(){u={}}),r(o.memoized,{deleteRef:e(function(){var e=o.get(arguments)
return null===e?null:u[e]?! --u[e]&&(o.delete(e),!0):null}),getRefCount:e(function(){var e=o.get(arguments)
return null===e?0:u[e]?u[e]:0})})}}),$t=le(function(e,t){"use strict"
var n=me(),r=Fe(),a=ht()
t.exports=function(e){var t,o=n(arguments[1])
return o.normalizer||0!==(t=o.length=r(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=mt():t>1&&(o.normalizer=Dt()(t)):o.normalizer=!1===t?Ft()():1===t?wt()():Et()(t)),o.async&&At(),o.promise&&Ot(),o.dispose&&Mt(),o.maxAge&&jt(),o.max&&Lt(),o.refCounter&&zt(),a(e,o)}}),Ht=le(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var n=t.length,r="",a=0;a<n;){var o=t.charAt(a)
if(e.identSpecialChars[o])r+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")r+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var u=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&u))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&u)+65536}r+="\\"+i.toString(16)+" "}a++}return r},e.escapeStr=function(t){for(var n,r=t.length,a="",o=0;o<r;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(n=e.strReplacementsRev[i])&&(i=n),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}}),Vt=le(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ht()
e.parseCssSelector=function(e,n,r,a,o,i){var u=e.length,s=""
function l(r,a){var o=""
for(n++,s=e.charAt(n);n<u;){if(s===r)return n++,o
if("\\"===s){n++
var i=void 0
if((s=e.charAt(n))===r)o+=r
else if(void 0!==(i=a[s]))o+=i
else{if(t.isHex(s)){var l=s
for(n++,s=e.charAt(n);t.isHex(s);)l+=s,n++,s=e.charAt(n)
" "===s&&(n++,s=e.charAt(n)),o+=String.fromCharCode(parseInt(l,16))
continue}o+=s}}else o+=s
n++,s=e.charAt(n)}return o}function c(){var r=""
for(s=e.charAt(n);n<u;){if(t.isIdent(s))r+=s
else{if("\\"!==s)return r
if(++n>=u)throw Error("Expected symbol but end of file reached.")
if(s=e.charAt(n),t.identSpecialChars[s])r+=s
else{if(t.isHex(s)){var a=s
for(n++,s=e.charAt(n);t.isHex(s);)a+=s,n++,s=e.charAt(n)
" "===s&&(n++,s=e.charAt(n)),r+=String.fromCharCode(parseInt(a,16))
continue}r+=s}}n++,s=e.charAt(n)}return r}function d(){s=e.charAt(n)
for(var t=!1;" "===s||"\t"===s||"\n"===s||"\r"===s||"\f"===s;)t=!0,n++,s=e.charAt(n)
return t}function p(){var t=f()
if(!t)return null
var r=t
for(s=e.charAt(n);","===s;){if(n++,d(),"selectors"!==r.type&&(r={type:"selectors",selectors:[t]}),!(t=f()))throw Error('Rule expected after ",".')
r.selectors.push(t)}return r}function f(){d()
var t={type:"ruleSet"},r=h()
if(!r)return null
for(var a=t;r&&(r.type="rule",a.rule=r,a=r,d(),s=e.charAt(n),!(n>=u||","===s||")"===s));)if(o[s]){var i=s
if(n++,d(),!(r=h()))throw Error('Rule expected after "'+i+'".')
r.nestingOperator=i}else(r=h())&&(r.nestingOperator=null)
return t}function h(){for(var o=null;n<u;)if("*"===(s=e.charAt(n)))n++,(o=o||{}).tagName="*"
else if(t.isIdentStart(s)||"\\"===s)(o=o||{}).tagName=c()
else if("."===s)n++,((o=o||{}).classNames=o.classNames||[]).push(c())
else if("#"===s)n++,(o=o||{}).id=c()
else if("["===s){n++,d()
var f={name:c()}
if(d(),"]"===s)n++
else{var h=""
if(a[s]&&(h=s,n++,s=e.charAt(n)),n>=u)throw Error('Expected "=" but end of file reached.')
if("="!==s)throw Error('Expected "=" but "'+s+'" found.')
f.operator=h+"=",n++,d()
var m=""
if(f.valueType="string",'"'===s)m=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)m=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===s)n++,m=c(),f.valueType="substitute"
else{for(;n<u&&"]"!==s;)m+=s,n++,s=e.charAt(n)
m=m.trim()}if(d(),n>=u)throw Error('Expected "]" but end of file reached.')
if("]"!==s)throw Error('Expected "]" but "'+s+'" found.')
n++,f.value=m}((o=o||{}).attrs=o.attrs||[]).push(f)}else{if(":"!==s)break
n++
var D=c(),g={name:D}
if("("===s){n++
var v=""
if(d(),"selector"===r[D])g.valueType="selector",v=p()
else{if(g.valueType=r[D]||"string",'"'===s)v=l('"',t.doubleQuotesEscapeChars)
else if("'"===s)v=l("'",t.singleQuoteEscapeChars)
else if(i&&"$"===s)n++,v=c(),g.valueType="substitute"
else{for(;n<u&&")"!==s;)v+=s,n++,s=e.charAt(n)
v=v.trim()}d()}if(n>=u)throw Error('Expected ")" but end of file reached.')
if(")"!==s)throw Error('Expected ")" but "'+s+'" found.')
n++,g.value=v}((o=o||{}).pseudos=o.pseudos||[]).push(g)}return o}return function(){var t=p()
if(n<u)throw Error('Rule expected but "'+e.charAt(n)+'" found.')
return t}()}}),Ut=le(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ht()
e.renderEntity=function e(n){var r=""
switch(n.type){case"ruleSet":for(var a=n.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
r=o.join(" ")
break
case"selectors":r=n.selectors.map(e).join(", ")
break
case"rule":n.tagName&&(r="*"===n.tagName?"*":t.escapeIdentifier(n.tagName)),n.id&&(r+="#"+t.escapeIdentifier(n.id)),n.classNames&&(r+=n.classNames.map(function(e){return"."+t.escapeIdentifier(e)}).join("")),n.attrs&&(r+=n.attrs.map(function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"}).join("")),n.pseudos&&(r+=n.pseudos.map(function(n){return n.valueType?"selector"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+e(n.value)+")":"substitute"===n.valueType?":"+t.escapeIdentifier(n.name)+"($"+n.value+")":"numeric"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+n.value+")":":"+t.escapeIdentifier(n.name)+"("+t.escapeIdentifier(n.value)+")":":"+t.escapeIdentifier(n.name)}).join(""))
break
default:throw Error('Unknown entity type: "'+n.type+'".')}return r}}),Wt=le(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Vt(),n=Ut(),r=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
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
e.CssSelectorParser=r}),Gt=le(function(e,t){var i,u
i=e,u=function(){"use strict"
function e(e){return"function"==typeof e}var t=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=0,u=void 0,s=void 0,l=function(e,t){D[i]=e,D[i+1]=t,2===(i+=2)&&(s?s(g):w())},c=void 0!==n?n:void 0,d=c||{},p=d.MutationObserver||d.WebKitMutationObserver,f="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function m(){var e=setTimeout
return function(){return e(g,1)}}var D=new Array(1e3)
function g(){for(var e=0;e<i;e+=2)(0,D[e])(D[e+1]),D[e]=void 0,D[e+1]=void 0
i=0}var v,b,y,F,w=void 0
function E(e,t){var n=this,r=new this.constructor(A)
void 0===r[x]&&q(r)
var a=n._state
if(a){var o=arguments[a-1]
l(function(){return P(a,r,o,n._result)})}else M(n,r,e,t)
return r}function C(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(A)
return B(t,e),t}f?w=function(){return process.nextTick(g)}:p?(b=0,y=new p(g),F=a.createTextNode(""),y.observe(F,{characterData:!0}),w=function(){F.data=b=++b%2}):h?((v=new MessageChannel).port1.onmessage=g,w=function(){return v.port2.postMessage(0)}):w=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(u=e.runOnLoop||e.runOnContext)?function(){u(g)}:m()}catch(e){return m()}}():m()
var x=Math.random().toString(36).substring(2)
function A(){}var k=void 0,T=1,N=2
function R(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===C?function(e,t){t._state===T?S(e,t._result):t._state===N?O(e,t._result):M(t,void 0,function(t){return B(e,t)},function(t){return O(e,t)})}(t,n):void 0===r?S(t,n):e(r)?function(e,t,n){l(function(e){var r=!1,a=function(n,a){try{n.call(a,function(n){r||(r=!0,t!==n?B(e,n):S(e,n))},function(t){r||(r=!0,O(e,t))})}catch(e){return e}}(n,t,e._label)
!r&&a&&(r=!0,O(e,a))},e)}(t,n,r):S(t,n)}function B(e,t){if(e===t)O(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(r=t),null===r||"object"!==a&&"function"!==a)S(e,t)
else{var n=void 0
try{n=t.then}catch(t){return void O(e,t)}R(e,t,n)}var r,a}function _(e){e._onerror&&e._onerror(e._result),I(e)}function S(e,t){e._state===k&&(e._result=t,e._state=T,0!==e._subscribers.length&&l(I,e))}function O(e,t){e._state===k&&(e._state=N,e._result=t,l(_,e))}function M(e,t,n,r){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+T]=n,a[o+N]=r,0===o&&e._state&&l(I,e)}function I(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?P(n,r,a,o):a(o)
e._subscribers.length=0}}function P(t,n,r,a){var o=e(r),i=void 0,u=void 0,s=!0
if(o){try{i=r(a)}catch(e){s=!1,u=e}if(n===i)return void O(n,new TypeError("A promises callback cannot return that same promise."))}else i=a
n._state!==k||(o&&s?B(n,i):!1===s?O(n,u):t===T?S(n,i):t===N&&O(n,i))}var j=0
function q(e){e[x]=j++,e._state=void 0,e._result=void 0,e._subscribers=[]}var L=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(A),this.promise[x]||q(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&S(this.promise,this._result))):O(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===C){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===E&&e._state!==k)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(n===z){var u=new n(A)
i?O(u,o):R(u,e,a),this._willSettleAt(u,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===k&&(this._remaining--,e===N?O(r,n):this._result[t]=n),0===this._remaining&&S(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
M(e,void 0,function(e){return n._settledAt(T,t,e)},function(e){return n._settledAt(N,t,e)})},e}(),z=function(){function t(e){this[x]=j++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t(function(t){B(e,t)},function(t){O(e,t)})}catch(t){O(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor
return e(t)?n.then(function(e){return r.resolve(t()).then(function(){return e})},function(e){return r.resolve(t()).then(function(){throw e})}):n.then(t,t)},t}()
return z.prototype.then=E,z.all=function(e){return new L(this,e).promise},z.race=function(e){var n=this
return t(e)?new n(function(t,r){for(var a=e.length,o=0;o<a;o++)n.resolve(e[o]).then(t,r)}):new n(function(e,t){return t(new TypeError("You must pass an array to race."))})},z.resolve=C,z.reject=function(e){var t=new this(A)
return O(t,e),t},z._setScheduler=function(e){s=e},z._setAsap=function(e){l=e},z._asap=l,z.polyfill=function(){var e=void 0
if(void 0!==r)e=r
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z},z.Promise=z,z},"object"===o(e)&&void 0!==t?t.exports=u():"function"==typeof define&&define.amd?define(u):i.ES6Promise=u()}),Kt=le(function(e){var t,n,r=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return 0|e},ToUint32:function(e){return e>>>0}}),a=Math.LN2,i=Math.abs,u=Math.floor,s=Math.log,l=Math.min,c=Math.pow,d=Math.round
function p(e,t,n){return e<t?t:e>n?n:e}var f,h=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,n=[]
for(t in e)r.HasOwnProperty(e,t)&&n.push(t)
return n}
function m(e){if(h&&f){var t,n=h(e)
for(t=0;t<n.length;t+=1)f(e,n[t],{value:e[n[t]],writable:!1,enumerable:!1,configurable:!1})}}function D(e,t){var n=32-t
return e<<n>>n}function g(e,t){var n=32-t
return e<<n>>>n}function v(e){return[255&e]}function b(e){return D(e[0],8)}function y(e){return[255&e]}function F(e){return g(e[0],8)}function w(e){return[(e=d(Number(e)))<0?0:e>255?255:255&e]}function E(e){return[e>>8&255,255&e]}function C(e){return D(e[0]<<8|e[1],16)}function x(e){return[e>>8&255,255&e]}function A(e){return g(e[0]<<8|e[1],16)}function k(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function T(e){return D(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function N(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function R(e){return g(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function B(e,t,n){var r,o,d,p,f,h,m,D=(1<<t-1)-1
function g(e){var t=u(e),n=e-t
return n<.5?t:n>.5||t%2?t+1:t}for(e!=e?(o=(1<<t)-1,d=c(2,n-1),r=0):e===1/0||e===-1/0?(o=(1<<t)-1,d=0,r=e<0?1:0):0===e?(o=0,d=0,r=1/e==-1/0?1:0):(r=e<0,(e=i(e))>=c(2,1-D)?(o=l(u(s(e)/a),1023),(d=g(e/c(2,o)*c(2,n)))/c(2,n)>=2&&(o+=1,d=1),o>D?(o=(1<<t)-1,d=0):(o+=D,d-=c(2,n))):(o=0,d=g(e/c(2,1-D-n)))),f=[],p=n;p;p-=1)f.push(d%2?1:0),d=u(d/2)
for(p=t;p;p-=1)f.push(o%2?1:0),o=u(o/2)
for(f.push(r?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function _(e,t,n){var r,a,o,i,u,s,l,d,p=[]
for(r=e.length;r;r-=1)for(o=e[r-1],a=8;a;a-=1)p.push(o%2?1:0),o>>=1
return p.reverse(),i=p.join(""),u=(1<<t-1)-1,s=parseInt(i.substring(0,1),2)?-1:1,l=parseInt(i.substring(1,1+t),2),d=parseInt(i.substring(1+t),2),l===(1<<t)-1?0===d?s*(1/0):NaN:l>0?s*c(2,l-u)*(1+d/c(2,n)):0!==d?s*c(2,-(u-1))*(d/c(2,n)):s<0?-0:0}function S(e){return _(e,11,52)}function O(e){return B(e,11,52)}function M(e){return _(e,8,23)}function I(e){return B(e,8,23)}f=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,n){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
return r.HasProperty(n,"get")&&Object.prototype.__defineGetter__&&Object.prototype.__defineGetter__.call(e,t,n.get),r.HasProperty(n,"set")&&Object.prototype.__defineSetter__&&Object.prototype.__defineSetter__.call(e,t,n.set),r.HasProperty(n,"value")&&(e[t]=n.value),e},function(){function t(e){if((e=r.ToInt32(e))<0)throw new RangeError("ArrayBuffer size is not a small enough positive integer")
var t
for(this.byteLength=e,this._bytes=[],this._bytes.length=e,t=0;t<this.byteLength;t+=1)this._bytes[t]=0
m(this)}function n(){}function a(e,a,i){var u
return u=function(e,n,a){var i,s,l,c
if(arguments.length&&"number"!=typeof arguments[0])if("object"===o(arguments[0])&&arguments[0].constructor===u)for(i=arguments[0],this.length=i.length,this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)this._setter(l,i._getter(l))
else if("object"!==o(arguments[0])||arguments[0]instanceof t||"ArrayBuffer"===r.Class(arguments[0])){if("object"!==o(arguments[0])||!(arguments[0]instanceof t||"ArrayBuffer"===r.Class(arguments[0])))throw new TypeError("Unexpected argument type(s)")
if(this.buffer=e,this.byteOffset=r.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteOffset%this.BYTES_PER_ELEMENT)throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.")
if(arguments.length<3){if(this.byteLength=this.buffer.byteLength-this.byteOffset,this.byteLength%this.BYTES_PER_ELEMENT)throw new RangeError("length of buffer minus byteOffset not a multiple of the element size")
this.length=this.byteLength/this.BYTES_PER_ELEMENT}else this.length=r.ToUint32(a),this.byteLength=this.length*this.BYTES_PER_ELEMENT
if(this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")}else for(s=arguments[0],this.length=r.ToUint32(s.length),this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0,l=0;l<this.length;l+=1)c=s[l],this._setter(l,Number(c))
else{if(this.length=r.ToInt32(arguments[0]),a<0)throw new RangeError("ArrayBufferView size is not a small enough positive integer")
this.byteLength=this.length*this.BYTES_PER_ELEMENT,this.buffer=new t(this.byteLength),this.byteOffset=0}this.constructor=u,m(this),function(e){if(f){if(e.length>1e5)throw new RangeError("Array too large for polyfill")
var t
for(t=0;t<e.length;t+=1)n(t)}function n(t){f(e,t,{get:function(){return e._getter(t)},set:function(n){e._setter(t,n)},enumerable:!0,configurable:!1})}}(this)},u.prototype=new n,u.prototype.BYTES_PER_ELEMENT=e,u.prototype._pack=a,u.prototype._unpack=i,u.BYTES_PER_ELEMENT=e,u.prototype._getter=function(e){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
if(!((e=r.ToUint32(e))>=this.length)){for(var t=[],n=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,a+=1)t.push(this.buffer._bytes[a])
return this._unpack(t)}},u.prototype.get=u.prototype._getter,u.prototype._setter=function(e,t){if(arguments.length<2)throw new SyntaxError("Not enough arguments")
if((e=r.ToUint32(e))<this.length){var n,a,o=this._pack(t)
for(n=0,a=this.byteOffset+e*this.BYTES_PER_ELEMENT;n<this.BYTES_PER_ELEMENT;n+=1,a+=1)this.buffer._bytes[a]=o[n]}},u.prototype.set=function(e,t){if(arguments.length<1)throw new SyntaxError("Not enough arguments")
var n,a,i,u,s,l,c,d,p,f
if("object"===o(arguments[0])&&arguments[0].constructor===this.constructor){if(n=arguments[0],(i=r.ToUint32(arguments[1]))+n.length>this.length)throw new RangeError("Offset plus length of array is out of range")
if(d=this.byteOffset+i*this.BYTES_PER_ELEMENT,p=n.length*this.BYTES_PER_ELEMENT,n.buffer===this.buffer){for(f=[],s=0,l=n.byteOffset;s<p;s+=1,l+=1)f[s]=n.buffer._bytes[l]
for(s=0,c=d;s<p;s+=1,c+=1)this.buffer._bytes[c]=f[s]}else for(s=0,l=n.byteOffset,c=d;s<p;s+=1,l+=1,c+=1)this.buffer._bytes[c]=n.buffer._bytes[l]}else{if("object"!==o(arguments[0])||void 0===arguments[0].length)throw new TypeError("Unexpected argument type(s)")
if(a=arguments[0],u=r.ToUint32(a.length),(i=r.ToUint32(arguments[1]))+u>this.length)throw new RangeError("Offset plus length of array is out of range")
for(s=0;s<u;s+=1)l=a[s],this._setter(i+s,Number(l))}},u.prototype.subarray=function(e,t){e=r.ToInt32(e),t=r.ToInt32(t),arguments.length<1&&(e=0),arguments.length<2&&(t=this.length),e<0&&(e=this.length+e),t<0&&(t=this.length+t),e=p(e,0,this.length)
var n=(t=p(t,0,this.length))-e
return n<0&&(n=0),new this.constructor(this.buffer,this.byteOffset+e*this.BYTES_PER_ELEMENT,n)},u}e.ArrayBuffer=e.ArrayBuffer||t
var i=a(1,v,b),u=a(1,y,F),s=a(1,w,F),l=a(2,E,C),c=a(2,x,A),d=a(4,k,T),h=a(4,N,R),D=a(4,I,M),g=a(8,O,S)
e.Int8Array=e.Int8Array||i,e.Uint8Array=e.Uint8Array||u,e.Uint8ClampedArray=e.Uint8ClampedArray||s,e.Int16Array=e.Int16Array||l,e.Uint16Array=e.Uint16Array||c,e.Int32Array=e.Int32Array||d,e.Uint32Array=e.Uint32Array||h,e.Float32Array=e.Float32Array||D,e.Float64Array=e.Float64Array||g}(),function(){function t(e,t){return r.IsCallable(e.get)?e.get(t):e[t]}var n,a=(n=new e.Uint16Array([4660]),18===t(new e.Uint8Array(n.buffer),0))
function o(t,n,a){if(0===arguments.length)t=new e.ArrayBuffer(0)
else if(!(t instanceof e.ArrayBuffer||"ArrayBuffer"===r.Class(t)))throw new TypeError("TypeError")
if(this.buffer=t||new e.ArrayBuffer(0),this.byteOffset=r.ToUint32(n),this.byteOffset>this.buffer.byteLength)throw new RangeError("byteOffset out of range")
if(this.byteLength=arguments.length<3?this.buffer.byteLength-this.byteOffset:r.ToUint32(a),this.byteOffset+this.byteLength>this.buffer.byteLength)throw new RangeError("byteOffset and length reference an area beyond the end of the buffer")
m(this)}function i(n){return function(o,i){if((o=r.ToUint32(o))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
o+=this.byteOffset
var u,s=new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT),l=[]
for(u=0;u<n.BYTES_PER_ELEMENT;u+=1)l.push(t(s,u))
return Boolean(i)===Boolean(a)&&l.reverse(),t(new n(new e.Uint8Array(l).buffer),0)}}function u(n){return function(o,i,u){if((o=r.ToUint32(o))+n.BYTES_PER_ELEMENT>this.byteLength)throw new RangeError("Array index out of range")
var s,l=new n([i]),c=new e.Uint8Array(l.buffer),d=[]
for(s=0;s<n.BYTES_PER_ELEMENT;s+=1)d.push(t(c,s))
Boolean(u)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=i(e.Uint8Array),o.prototype.getInt8=i(e.Int8Array),o.prototype.getUint16=i(e.Uint16Array),o.prototype.getInt16=i(e.Int16Array),o.prototype.getUint32=i(e.Uint32Array),o.prototype.getInt32=i(e.Int32Array),o.prototype.getFloat32=i(e.Float32Array),o.prototype.getFloat64=i(e.Float64Array),o.prototype.setUint8=u(e.Uint8Array),o.prototype.setInt8=u(e.Int8Array),o.prototype.setUint16=u(e.Uint16Array),o.prototype.setInt16=u(e.Int16Array),o.prototype.setUint32=u(e.Uint32Array),o.prototype.setInt32=u(e.Int32Array),o.prototype.setFloat32=u(e.Float32Array),o.prototype.setFloat64=u(e.Float64Array),e.DataView=e.DataView||o}()}),Qt=le(function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(r(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!a(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+o(e))}function i(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",function(e){if(n(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))}),r(e.prototype,"get",function(e){if(n(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}}),r(e.prototype,"has",function(e){if(n(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)}),r(e.prototype,"set",function(e,t){if(n(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)}),r(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==n?n:void 0!==r?r:e)}),Yt=le(function(e,t){"use strict"
var a=function(e){return e&&e.Math===Math&&e}
t.exports=a("object"==("undefined"==typeof globalThis?"undefined":o(globalThis))&&globalThis)||a("object"==(void 0===n?"undefined":o(n))&&n)||a("object"==("undefined"==typeof self?"undefined":o(self))&&self)||a("object"==(void 0===r?"undefined":o(r))&&r)||function(){return this}()||e||Function("return this")()}),Xt=le(function(e,t){"use strict"
t.exports=function(e){try{return!!e()}catch(e){return!0}}}),Zt=le(function(e,t){"use strict"
var n=Xt()
t.exports=!n(function(){var e=function(){}.bind()
return"function"!=typeof e||e.hasOwnProperty("prototype")})}),Jt=le(function(e,t){"use strict"
var n=Zt(),r=Function.prototype,a=r.apply,i=r.call
t.exports="object"==("undefined"==typeof Reflect?"undefined":o(Reflect))&&Reflect.apply||(n?i.bind(a):function(){return i.apply(a,arguments)})}),en=le(function(e,t){"use strict"
var n=Zt(),r=Function.prototype,a=r.call,o=n&&r.bind.bind(a,a)
t.exports=n?o:function(e){return function(){return a.apply(e,arguments)}}}),tn=le(function(e,t){"use strict"
var n=en(),r=n({}.toString),a=n("".slice)
t.exports=function(e){return a(r(e),8,-1)}}),nn=le(function(e,t){"use strict"
var n=tn(),r=en()
t.exports=function(e){if("Function"===n(e))return r(e)}}),rn=le(function(e,t){"use strict"
var n="object"==(void 0===a?"undefined":o(a))&&a.all,r=void 0===n&&void 0!==n
t.exports={all:n,IS_HTMLDDA:r}}),an=le(function(e,t){"use strict"
var n=rn(),r=n.all
t.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}}),on=le(function(e,t){"use strict"
var n=Xt()
t.exports=!n(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})}),un=le(function(e,t){"use strict"
var n=Zt(),r=Function.prototype.call
t.exports=n?r.bind(r):function(){return r.apply(r,arguments)}}),sn=le(function(e){"use strict"
var t={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,r=n&&!t.call({1:2},1)
e.f=r?function(e){var t=n(this,e)
return!!t&&t.enumerable}:t}),ln=le(function(e,t){"use strict"
t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}}),cn=le(function(e,t){"use strict"
var n=en(),r=Xt(),a=tn(),o=Object,i=n("".split)
t.exports=r(function(){return!o("z").propertyIsEnumerable(0)})?function(e){return"String"===a(e)?i(e,""):o(e)}:o}),dn=le(function(e,t){"use strict"
t.exports=function(e){return null==e}}),pn=le(function(e,t){"use strict"
var n=dn(),r=TypeError
t.exports=function(e){if(n(e))throw new r("Can't call method on "+e)
return e}}),fn=le(function(e,t){"use strict"
var n=cn(),r=pn()
t.exports=function(e){return n(r(e))}}),hn=le(function(e,t){"use strict"
var n=an(),r=rn(),a=r.all
t.exports=r.IS_HTMLDDA?function(e){return"object"==o(e)?null!==e:n(e)||e===a}:function(e){return"object"==o(e)?null!==e:n(e)}}),mn=le(function(e,t){"use strict"
t.exports={}}),Dn=le(function(e,t){"use strict"
var n=mn(),r=Yt(),a=an(),o=function(e){return a(e)?e:void 0}
t.exports=function(e,t){return arguments.length<2?o(n[e])||o(r[e]):n[e]&&n[e][t]||r[e]&&r[e][t]}}),gn=le(function(e,t){"use strict"
var n=en()
t.exports=n({}.isPrototypeOf)}),vn=le(function(e,t){"use strict"
t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""}),bn=le(function(e,t){"use strict"
var n,r,a=Yt(),o=vn(),i=a.process,u=a.Deno,s=i&&i.versions||u&&u.version,l=s&&s.v8
l&&(r=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!r&&o&&(!(n=o.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/))&&(r=+n[1]),t.exports=r}),yn=le(function(e,t){"use strict"
var n=bn(),r=Xt(),a=Yt().String
t.exports=!!Object.getOwnPropertySymbols&&!r(function(){var e=Symbol("symbol detection")
return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41})}),Fn=le(function(e,t){"use strict"
var n=yn()
t.exports=n&&!Symbol.sham&&"symbol"==o(Symbol.iterator)}),wn=le(function(e,t){"use strict"
var n=Dn(),r=an(),a=gn(),i=Fn(),u=Object
t.exports=i?function(e){return"symbol"==o(e)}:function(e){var t=n("Symbol")
return r(t)&&a(t.prototype,u(e))}}),En=le(function(e,t){"use strict"
var n=String
t.exports=function(e){try{return n(e)}catch(e){return"Object"}}}),Cn=le(function(e,t){"use strict"
var n=an(),r=En(),a=TypeError
t.exports=function(e){if(n(e))return e
throw new a(r(e)+" is not a function")}}),xn=le(function(e,t){"use strict"
var n=Cn(),r=dn()
t.exports=function(e,t){var a=e[t]
return r(a)?void 0:n(a)}}),An=le(function(e,t){"use strict"
var n=un(),r=an(),a=hn(),o=TypeError
t.exports=function(e,t){var i,u
if("string"===t&&r(i=e.toString)&&!a(u=n(i,e)))return u
if(r(i=e.valueOf)&&!a(u=n(i,e)))return u
if("string"!==t&&r(i=e.toString)&&!a(u=n(i,e)))return u
throw new o("Can't convert object to primitive value")}}),kn=le(function(e,t){"use strict"
t.exports=!0}),Tn=le(function(e,t){"use strict"
var n=Yt(),r=Object.defineProperty
t.exports=function(e,t){try{r(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}}),Nn=le(function(e,t){"use strict"
var n=Yt(),r=Tn(),a="__core-js_shared__",o=n[a]||r(a,{})
t.exports=o}),Rn=le(function(e,t){"use strict"
var n=kn(),r=Nn();(t.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})}),Bn=le(function(e,t){"use strict"
var n=pn(),r=Object
t.exports=function(e){return r(n(e))}}),_n=le(function(e,t){"use strict"
var n=en(),r=Bn(),a=n({}.hasOwnProperty)
t.exports=Object.hasOwn||function(e,t){return a(r(e),t)}}),Sn=le(function(e,t){"use strict"
var n=en(),r=0,a=Math.random(),o=n(1..toString)
t.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+a,36)}}),On=le(function(e,t){"use strict"
var n=Yt(),r=Rn(),a=_n(),o=Sn(),i=yn(),u=Fn(),s=n.Symbol,l=r("wks"),c=u?s.for||s:s&&s.withoutSetter||o
t.exports=function(e){return a(l,e)||(l[e]=i&&a(s,e)?s[e]:c("Symbol."+e)),l[e]}}),Mn=le(function(e,t){"use strict"
var n=un(),r=hn(),a=wn(),o=xn(),i=An(),u=On(),s=TypeError,l=u("toPrimitive")
t.exports=function(e,t){if(!r(e)||a(e))return e
var u,c=o(e,l)
if(c){if(void 0===t&&(t="default"),u=n(c,e,t),!r(u)||a(u))return u
throw new s("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}}),In=le(function(e,t){"use strict"
var n=Mn(),r=wn()
t.exports=function(e){var t=n(e,"string")
return r(t)?t:t+""}}),Pn=le(function(e,t){"use strict"
var n=Yt(),r=hn(),a=n.document,o=r(a)&&r(a.createElement)
t.exports=function(e){return o?a.createElement(e):{}}}),jn=le(function(e,t){"use strict"
var n=on(),r=Xt(),a=Pn()
t.exports=!n&&!r(function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a})}),qn=le(function(e){"use strict"
var t=on(),n=un(),r=sn(),a=ln(),o=fn(),i=In(),u=_n(),s=jn(),l=Object.getOwnPropertyDescriptor
e.f=t?l:function(e,t){if(e=o(e),t=i(t),s)try{return l(e,t)}catch(e){}if(u(e,t))return a(!n(r.f,e,t),e[t])}}),Ln=le(function(e,t){"use strict"
var n=Xt(),r=an(),a=/#|\.prototype\./,o=function(e,t){var a=u[i(e)]
return a===l||a!==s&&(r(t)?n(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},u=o.data={},s=o.NATIVE="N",l=o.POLYFILL="P"
t.exports=o}),zn=le(function(e,t){"use strict"
var n=nn(),r=Cn(),a=Zt(),o=n(n.bind)
t.exports=function(e,t){return r(e),void 0===t?e:a?o(e,t):function(){return e.apply(t,arguments)}}}),$n=le(function(e,t){"use strict"
var n=on(),r=Xt()
t.exports=n&&r(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})}),Hn=le(function(e,t){"use strict"
var n=hn(),r=String,a=TypeError
t.exports=function(e){if(n(e))return e
throw new a(r(e)+" is not an object")}}),Vn=le(function(e){"use strict"
var t=on(),n=jn(),r=$n(),a=Hn(),o=In(),i=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",c="configurable",d="writable"
e.f=t?r?function(e,t,n){if(a(e),t=o(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=s(e,t)
r&&r[d]&&(e[t]=n.value,n={configurable:c in n?n[c]:r[c],enumerable:l in n?n[l]:r[l],writable:!1})}return u(e,t,n)}:u:function(e,t,r){if(a(e),t=o(t),a(r),n)try{return u(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new i("Accessors not supported")
return"value"in r&&(e[t]=r.value),e}}),Un=le(function(e,t){"use strict"
var n=on(),r=Vn(),a=ln()
t.exports=n?function(e,t,n){return r.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}}),Wn=le(function(e,t){"use strict"
var n=Yt(),r=Jt(),a=nn(),i=an(),u=qn().f,s=Ln(),l=mn(),c=zn(),d=Un(),p=_n(),f=function(e){var t=function(n,a,o){if(this instanceof t){switch(arguments.length){case 0:return new e
case 1:return new e(n)
case 2:return new e(n,a)}return new e(n,a,o)}return r(e,this,arguments)}
return t.prototype=e.prototype,t}
t.exports=function(e,t){var r,h,m,D,g,v,b,y,F,w=e.target,E=e.global,C=e.stat,x=e.proto,A=E?n:C?n[w]:(n[w]||{}).prototype,k=E?l:l[w]||d(l,w,{})[w],T=k.prototype
for(D in t)h=!(r=s(E?D:w+(C?".":"#")+D,e.forced))&&A&&p(A,D),v=k[D],h&&(b=e.dontCallGetSet?(F=u(A,D))&&F.value:A[D]),g=h&&b?b:t[D],h&&o(v)==o(g)||(y=e.bind&&h?c(g,n):e.wrap&&h?f(g):x&&i(g)?a(g):g,(e.sham||g&&g.sham||v&&v.sham)&&d(y,"sham",!0),d(k,D,y),x&&(p(l,m=w+"Prototype")||d(l,m,{}),d(l[m],D,g),e.real&&T&&(r||!T[D])&&d(T,D,g)))}}),Gn=le(function(){"use strict"
Wn()({target:"Object",stat:!0},{hasOwn:_n()})}),Kn=le(function(e,t){"use strict"
Gn()
var n=mn()
t.exports=n.Object.hasOwn}),Qn=le(function(e,t){"use strict"
var n=Kn()
t.exports=n}),Yn=le(function(e,t){"use strict"
var n=Qn()
t.exports=n}),Xn=le(function(e,t){"use strict"
var n=Rn(),r=Sn(),a=n("keys")
t.exports=function(e){return a[e]||(a[e]=r(e))}}),Zn=le(function(e,t){"use strict"
var n=Xt()
t.exports=!n(function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})}),Jn=le(function(e,t){"use strict"
var n=_n(),r=an(),a=Bn(),o=Xn(),i=Zn(),u=o("IE_PROTO"),s=Object,l=s.prototype
t.exports=i?s.getPrototypeOf:function(e){var t=a(e)
if(n(t,u))return t[u]
var o=t.constructor
return r(o)&&t instanceof o?o.prototype:t instanceof s?l:null}}),er=le(function(e,t){"use strict"
var n=Math.ceil,r=Math.floor
t.exports=Math.trunc||function(e){var t=+e
return(t>0?r:n)(t)}}),tr=le(function(e,t){"use strict"
var n=er()
t.exports=function(e){var t=+e
return t!=t||0===t?0:n(t)}}),nr=le(function(e,t){"use strict"
var n=tr(),r=Math.max,a=Math.min
t.exports=function(e,t){var o=n(e)
return o<0?r(o+t,0):a(o,t)}}),rr=le(function(e,t){"use strict"
var n=tr(),r=Math.min
t.exports=function(e){return e>0?r(n(e),9007199254740991):0}}),ar=le(function(e,t){"use strict"
var n=rr()
t.exports=function(e){return n(e.length)}}),or=le(function(e,t){"use strict"
var n=fn(),r=nr(),a=ar(),o=function(e){return function(t,o,i){var u,s=n(t),l=a(s),c=r(i,l)
if(e&&o!=o){for(;l>c;)if((u=s[c++])!=u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===o)return e||c||0
return!e&&-1}}
t.exports={includes:o(!0),indexOf:o(!1)}}),ir=le(function(e,t){"use strict"
t.exports={}}),ur=le(function(e,t){"use strict"
var n=en(),r=_n(),a=fn(),o=or().indexOf,i=ir(),u=n([].push)
t.exports=function(e,t){var n,s=a(e),l=0,c=[]
for(n in s)!r(i,n)&&r(s,n)&&u(c,n)
for(;t.length>l;)r(s,n=t[l++])&&(~o(c,n)||u(c,n))
return c}}),sr=le(function(e,t){"use strict"
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]}),lr=le(function(e,t){"use strict"
var n=ur(),r=sr()
t.exports=Object.keys||function(e){return n(e,r)}}),cr=le(function(e,t){"use strict"
var n=on(),r=Xt(),a=en(),o=Jn(),i=lr(),u=fn(),s=a(sn().f),l=a([].push),c=n&&r(function(){var e=Object.create(null)
return e[2]=2,!s(e,2)}),d=function(e){return function(t){for(var r,a=u(t),d=i(a),p=c&&null===o(a),f=d.length,h=0,m=[];f>h;)r=d[h++],n&&!(p?r in a:s(a,r))||l(m,e?[r,a[r]]:a[r])
return m}}
t.exports={entries:d(!0),values:d(!1)}}),dr=le(function(){"use strict"
var e=Wn(),t=cr().values
e({target:"Object",stat:!0},{values:function(e){return t(e)}})}),pr=le(function(e,t){"use strict"
dr()
var n=mn()
t.exports=n.Object.values}),fr=le(function(e,t){"use strict"
var n=pr()
t.exports=n}),hr=le(function(e,t){"use strict"
var n=fr()
t.exports=n}),mr=le(function(e,t){"use strict"
var n={}
n[On()("toStringTag")]="z",t.exports="[object z]"===String(n)}),Dr=le(function(e,t){"use strict"
var n=mr(),r=an(),a=tn(),o=On()("toStringTag"),i=Object,u="Arguments"===a(function(){return arguments}())
t.exports=n?a:function(e){var t,n,s
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=i(e),o))?n:u?a(t):"Object"===(s=a(t))&&r(t.callee)?"Arguments":s}}),gr=le(function(e,t){"use strict"
var n=Dr(),r=String
t.exports=function(e){if("Symbol"===n(e))throw new TypeError("Cannot convert a Symbol value to a string")
return r(e)}}),vr=le(function(e,t){"use strict"
var n=en(),r=tr(),a=gr(),o=pn(),i=n("".charAt),u=n("".charCodeAt),s=n("".slice),l=function(e){return function(t,n){var l,c,d=a(o(t)),p=r(n),f=d.length
return p<0||p>=f?e?"":void 0:(l=u(d,p))<55296||l>56319||p+1===f||(c=u(d,p+1))<56320||c>57343?e?i(d,p):l:e?s(d,p,p+2):c-56320+(l-55296<<10)+65536}}
t.exports={codeAt:l(!1),charAt:l(!0)}}),br=le(function(e,t){"use strict"
var n=Yt(),r=an(),a=n.WeakMap
t.exports=r(a)&&/native code/.test(String(a))}),yr=le(function(e,t){"use strict"
var n,r,a,o,i,u=br(),s=Yt(),l=hn(),c=Un(),d=_n(),p=Nn(),f=Xn(),h=ir(),m="Object already initialized",D=s.TypeError,g=s.WeakMap
u||p.state?((o=p.state||(p.state=new g)).get=o.get,o.has=o.has,o.set=o.set,n=function(e,t){if(o.has(e))throw new D(m)
return t.facade=e,o.set(e,t),t},r=function(e){return o.get(e)||{}},a=function(e){return o.has(e)}):(h[i=f("state")]=!0,n=function(e,t){if(d(e,i))throw new D(m)
return t.facade=e,c(e,i,t),t},r=function(e){return d(e,i)?e[i]:{}},a=function(e){return d(e,i)}),t.exports={set:n,get:r,has:a,enforce:function(e){return a(e)?r(e):n(e,{})},getterFor:function(e){return function(t){var n
if(!l(t)||(n=r(t)).type!==e)throw new D("Incompatible receiver, "+e+" required")
return n}}}}),Fr=le(function(e,t){"use strict"
var n=on(),r=_n(),a=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,i=r(a,"name"),u=i&&"something"===function(){}.name,s=i&&(!n||n&&o(a,"name").configurable)
t.exports={EXISTS:i,PROPER:u,CONFIGURABLE:s}}),wr=le(function(e){"use strict"
var t=on(),n=$n(),r=Vn(),a=Hn(),o=fn(),i=lr()
e.f=t&&!n?Object.defineProperties:function(e,t){a(e)
for(var n,u=o(t),s=i(t),l=s.length,c=0;l>c;)r.f(e,n=s[c++],u[n])
return e}}),Er=le(function(e,t){"use strict"
var n=Dn()
t.exports=n("document","documentElement")}),Cr=le(function(e,t){"use strict"
var n,r=Hn(),o=wr(),i=sr(),u=ir(),s=Er(),l=Pn(),c=Xn(),d="prototype",p="script",f=c("IE_PROTO"),h=function(){},m=function(e){return"<"+p+">"+e+"</"+p+">"},D=function(e){e.write(m("")),e.close()
var t=e.parentWindow.Object
return e=null,t},g=function(){try{n=new ActiveXObject("htmlfile")}catch(e){}var e,t,r
g=void 0!==a?a.domain&&n?D(n):(t=l("iframe"),r="java"+p+":",t.style.display="none",s.appendChild(t),t.src=String(r),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F):D(n)
for(var o=i.length;o--;)delete g[d][i[o]]
return g()}
u[f]=!0,t.exports=Object.create||function(e,t){var n
return null!==e?(h[d]=r(e),n=new h,h[d]=null,n[f]=e):n=g(),void 0===t?n:o.f(n,t)}}),xr=le(function(e,t){"use strict"
var n=Un()
t.exports=function(e,t,r,a){return a&&a.enumerable?e[t]=r:n(e,t,r),e}}),Ar=le(function(e,t){"use strict"
var n,r,a,o=Xt(),i=an(),u=hn(),s=Cr(),l=Jn(),c=xr(),d=On(),p=kn(),f=d("iterator"),h=!1;[].keys&&("next"in(a=[].keys())?(r=l(l(a)))!==Object.prototype&&(n=r):h=!0),!u(n)||o(function(){var e={}
return n[f].call(e)!==e})?n={}:p&&(n=s(n)),i(n[f])||c(n,f,function(){return this}),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:h}}),kr=le(function(e,t){"use strict"
var n=mr(),r=Dr()
t.exports=n?{}.toString:function(){return"[object "+r(this)+"]"}}),Tr=le(function(e,t){"use strict"
var n=mr(),r=Vn().f,a=Un(),o=_n(),i=kr(),u=On()("toStringTag")
t.exports=function(e,t,s,l){if(e){var c=s?e:e.prototype
o(c,u)||r(c,u,{configurable:!0,value:t}),l&&!n&&a(c,"toString",i)}}}),Nr=le(function(e,t){"use strict"
t.exports={}}),Rr=le(function(e,t){"use strict"
var n=Ar().IteratorPrototype,r=Cr(),a=ln(),o=Tr(),i=Nr(),u=function(){return this}
t.exports=function(e,t,s,l){var c=t+" Iterator"
return e.prototype=r(n,{next:a(+!l,s)}),o(e,c,!1,!0),i[c]=u,e}}),Br=le(function(e,t){"use strict"
var n=en(),r=Cn()
t.exports=function(e,t,a){try{return n(r(Object.getOwnPropertyDescriptor(e,t)[a]))}catch(e){}}}),_r=le(function(e,t){"use strict"
var n=an(),r=String,a=TypeError
t.exports=function(e){if("object"==o(e)||n(e))return e
throw new a("Can't set "+r(e)+" as a prototype")}}),Sr=le(function(e,t){"use strict"
var n=Br(),r=Hn(),a=_r()
t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,o={}
try{(e=n(Object.prototype,"__proto__","set"))(o,[]),t=o instanceof Array}catch(e){}return function(n,o){return r(n),a(o),t?e(n,o):n.__proto__=o,n}}():void 0)}),Or=le(function(e,t){"use strict"
var n=Wn(),r=un(),a=kn(),o=Fr(),i=an(),u=Rr(),s=Jn(),l=Sr(),c=Tr(),d=Un(),p=xr(),f=On(),h=Nr(),m=Ar(),D=o.PROPER,g=o.CONFIGURABLE,v=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,y=f("iterator"),F="keys",w="values",E="entries",C=function(){return this}
t.exports=function(e,t,o,f,m,x,A){u(o,t,f)
var k,T,N,R=function(e){if(e===m&&M)return M
if(!b&&e&&e in S)return S[e]
switch(e){case F:case w:case E:return function(){return new o(this,e)}}return function(){return new o(this)}},B=t+" Iterator",_=!1,S=e.prototype,O=S[y]||S["@@iterator"]||m&&S[m],M=!b&&O||R(m),I="Array"===t&&S.entries||O
if(I&&(k=s(I.call(new e)))!==Object.prototype&&k.next&&(a||s(k)===v||(l?l(k,v):i(k[y])||p(k,y,C)),c(k,B,!0,!0),a&&(h[B]=C)),D&&m===w&&O&&O.name!==w&&(!a&&g?d(S,"name",w):(_=!0,M=function(){return r(O,this)})),m)if(T={values:R(w),keys:x?M:R(F),entries:R(E)},A)for(N in T)(b||_||!(N in S))&&p(S,N,T[N])
else n({target:t,proto:!0,forced:b||_},T)
return a&&!A||S[y]===M||p(S,y,M,{name:m}),h[t]=M,T}}),Mr=le(function(e,t){"use strict"
t.exports=function(e,t){return{value:e,done:t}}}),Ir=le(function(){"use strict"
var e=vr().charAt,t=gr(),n=yr(),r=Or(),a=Mr(),o="String Iterator",i=n.set,u=n.getterFor(o)
r(String,"String",function(e){i(this,{type:o,string:t(e),index:0})},function(){var t,n=u(this),r=n.string,o=n.index
return o>=r.length?a(void 0,!0):(t=e(r,o),n.index+=t.length,a(t,!1))})}),Pr=le(function(e,t){"use strict"
var n=un(),r=Hn(),a=xn()
t.exports=function(e,t,o){var i,u
r(e)
try{if(!(i=a(e,"return"))){if("throw"===t)throw o
return o}i=n(i,e)}catch(e){u=!0,i=e}if("throw"===t)throw o
if(u)throw i
return r(i),o}}),jr=le(function(e,t){"use strict"
var n=Hn(),r=Pr()
t.exports=function(e,t,a,o){try{return o?t(n(a)[0],a[1]):t(a)}catch(t){r(e,"throw",t)}}}),qr=le(function(e,t){"use strict"
var n=On(),r=Nr(),a=n("iterator"),o=Array.prototype
t.exports=function(e){return void 0!==e&&(r.Array===e||o[a]===e)}}),Lr=le(function(e,t){"use strict"
var n=en(),r=an(),a=Nn(),o=n(Function.toString)
r(a.inspectSource)||(a.inspectSource=function(e){return o(e)}),t.exports=a.inspectSource}),zr=le(function(e,t){"use strict"
var n=en(),r=Xt(),a=an(),o=Dr(),i=Dn(),u=Lr(),s=function(){},l=[],c=i("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=n(d.exec),f=!d.test(s),h=function(e){if(!a(e))return!1
try{return c(s,l,e),!0}catch(e){return!1}},m=function(e){if(!a(e))return!1
switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return f||!!p(d,u(e))}catch(e){return!0}}
m.sham=!0,t.exports=!c||r(function(){var e
return h(h.call)||!h(Object)||!h(function(){e=!0})||e})?m:h}),$r=le(function(e,t){"use strict"
var n=In(),r=Vn(),a=ln()
t.exports=function(e,t,o){var i=n(t)
i in e?r.f(e,i,a(0,o)):e[i]=o}}),Hr=le(function(e,t){"use strict"
var n=Dr(),r=xn(),a=dn(),o=Nr(),i=On()("iterator")
t.exports=function(e){if(!a(e))return r(e,i)||r(e,"@@iterator")||o[n(e)]}}),Vr=le(function(e,t){"use strict"
var n=un(),r=Cn(),a=Hn(),o=En(),i=Hr(),u=TypeError
t.exports=function(e,t){var s=arguments.length<2?i(e):t
if(r(s))return a(n(s,e))
throw new u(o(e)+" is not iterable")}}),Ur=le(function(e,t){"use strict"
var n=zn(),r=un(),a=Bn(),o=jr(),i=qr(),u=zr(),s=ar(),l=$r(),c=Vr(),d=Hr(),p=Array
t.exports=function(e){var t=a(e),f=u(this),h=arguments.length,m=h>1?arguments[1]:void 0,D=void 0!==m
D&&(m=n(m,h>2?arguments[2]:void 0))
var g,v,b,y,F,w,E=d(t),C=0
if(!E||this===p&&i(E))for(g=s(t),v=f?new this(g):p(g);g>C;C++)w=D?m(t[C],C):t[C],l(v,C,w)
else for(F=(y=c(t,E)).next,v=f?new this:[];!(b=r(F,y)).done;C++)w=D?o(y,m,[b.value,C],!0):b.value,l(v,C,w)
return v.length=C,v}}),Wr=le(function(e,t){"use strict"
var n,r,a=On()("iterator"),o=!1
try{n=0,(r={next:function(){return{done:!!n++}},return:function(){o=!0}})[a]=function(){return this},Array.from(r,function(){throw 2})}catch(e){}t.exports=function(e,t){try{if(!t&&!o)return!1}catch(e){return!1}var n=!1
try{var r={}
r[a]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}}),Gr=le(function(){"use strict"
var e=Wn(),t=Ur()
e({target:"Array",stat:!0,forced:!Wr()(function(e){Array.from(e)})},{from:t})}),Kr=le(function(e,t){"use strict"
Ir(),Gr()
var n=mn()
t.exports=n.Array.from}),Qr=le(function(e,t){"use strict"
var n=Kr()
t.exports=n}),Yr=le(function(e,t){"use strict"
var n=Qr()
t.exports=n}),Xr=le(function(e,t){!function(){"use strict"
var e={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":o(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){n.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==n)return n
if(void 0!==r)return r
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),e.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(n,function(e){return t[e]||e}):""}},void 0!==t&&t.exports?t.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):globalThis.doT=e
var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},i=/$^/
function u(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||i,function(t,r,a,o){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===a?(e.defineParams&&o.replace(e.defineParams,function(e,t,a){n[r]={arg:t,text:a}}),r in n||(n[r]=o)):new Function("def","def['"+r+"']="+o)(n)),""}).replace(e.use||i,function(t,r){e.useParams&&(r=r.replace(e.useParams,function(e,t,r,a){if(n[r]&&n[r].arg&&a){var o=(r+":"+a).replace(/'|\\/g,"_")
return n.__exp=n.__exp||{},n.__exp[o]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}}))
var a=new Function("def","return "+r)(n)
return a?u(e,a,n):a})}function s(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}e.template=function(t,n,r){var o,l,c=(n=n||e.templateSettings).append?a.append:a.split,d=0,p=n.use||n.define?u(n,t,r||{}):t
p=("var out='"+(n.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(n.interpolate||i,function(e,t){return c.start+s(t)+c.end}).replace(n.encode||i,function(e,t){return o=!0,c.startencode+s(t)+c.end}).replace(n.conditional||i,function(e,t,n){return t?n?"';}else if("+s(n)+"){out+='":"';}else{out+='":n?"';if("+s(n)+"){out+='":"';}out+='"}).replace(n.iterate||i,function(e,t,n,r){return t?(d+=1,l=r||"i"+d,t=s(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+n+","+l+"=-1,l"+d+"=arr"+d+".length-1;while("+l+"<l"+d+"){"+n+"=arr"+d+"["+l+"+=1];out+='"):"';} } out+='"}).replace(n.evaluate||i,function(e,t){return"';"+s(t)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),o&&(n.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=e.encodeHTMLSource(n.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+e.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+p)
try{return new Function(n.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,n){return e.template(t,null,n)}}()}),Zr={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,selectorSimilarFilterLimit:700,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach(function(e){var t=e.name,n=e.value,r=e.priority,a=e.group
Zr[t]=n,Zr[t+"_PRIO"]=r,Zr[t+"_GROUP"]=a,Zr.results[r]=n,Zr.resultGroups[r]=a,Zr.resultGroupMap[n]=a}),Object.freeze(Zr.results),Object.freeze(Zr.resultGroups),Object.freeze(Zr.resultGroupMap),Object.freeze(Zr)
var Jr=Zr,ea=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},ta=/[\t\r\n\f]/g,na=G(function e(){U(this,e),this.parent=void 0},[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var n=" "+e+" "
return(" "+t+" ").replace(ta," ").indexOf(n)>=0}}]),ra={}
ce(ra,{DqElement:function(){return to},aggregate:function(){return aa},aggregateChecks:function(){return ca},aggregateNodeResults:function(){return pa},aggregateResult:function(){return ha},areStylesSet:function(){return ma},assert:function(){return Da},checkHelper:function(){return no},clone:function(){return ro},closest:function(){return yo},collectResultsFromFrames:function(){return mi},contains:function(){return Di},convertSelector:function(){return go},cssParser:function(){return io},deepMerge:function(){return gi},escapeSelector:function(){return va},extendMetaData:function(){return vi},filterHtmlAttrs:function(){return fm},finalizeRuleResult:function(){return da},findBy:function(){return pi},getAllChecks:function(){return di},getAncestry:function(){return Wa},getBaseLang:function(){return Xf},getCheckMessage:function(){return ih},getCheckOption:function(){return uh},getEnvironmentData:function(){return sh},getFlattenedTree:function(){return Kf},getFrameContexts:function(){return Fh},getFriendlyUriEnd:function(){return wa},getNodeAttributes:function(){return Ea},getNodeFromTree:function(){return Za},getPreloadConfig:function(){return um},getRootNode:function(){return wi},getRule:function(){return wh},getScroll:function(){return Ch},getScrollState:function(){return Ah},getSelector:function(){return Ha},getSelectorData:function(){return Pa},getShadowSelector:function(){return Ta},getStandards:function(){return kh},getStyleSheetFactory:function(){return Nh},getXpath:function(){return Ka},injectStyle:function(){return Rh},isArrayLike:function(){return Bh},isContextObject:function(){return Oh},isContextProp:function(){return Mh},isContextSpec:function(){return Sh},isHidden:function(){return jh},isHtmlElement:function(){return qh},isLabelledFramesSelector:function(){return Ih},isLabelledShadowDomSelector:function(){return Ph},isNodeInContext:function(){return Lh},isShadowRoot:function(){return yi},isValidLang:function(){return xm},isXHTML:function(){return ka},matchAncestry:function(){return $h},matches:function(){return uo},matchesExpression:function(){return bo},matchesSelector:function(){return Ca},memoize:function(){return Aa},mergeResults:function(){return hi},nodeLookup:function(){return Vh},nodeSerializer:function(){return ci},nodeSorter:function(){return Hh},objectHasOwn:function(){return _h},parseCrossOriginStylesheet:function(){return Gh},parseSameOriginStylesheet:function(){return Uh},parseStylesheet:function(){return Wh},parseTabindex:function(){return Kh},performanceTimer:function(){return Qh},pollyfillElementsFromPoint:function(){return Yh},preload:function(){return om},preloadCssom:function(){return em},preloadMedia:function(){return am},processMessage:function(){return oh},publishMetaData:function(){return sm},querySelectorAll:function(){return cm},querySelectorAllFilter:function(){return Jh},queue:function(){return xo},respondable:function(){return ri},ruleShouldRun:function(){return pm},select:function(){return mm},sendCommandToFrame:function(){return oi},setScrollState:function(){return gm},shadowSelect:function(){return vm},shadowSelectAll:function(){return ym},shouldPreload:function(){return im},toArray:function(){return ga},tokenList:function(){return zf},uniqueArray:function(){return Xh},uuid:function(){return zo},validInputTypes:function(){return wm},validLangs:function(){return Cm}})
var aa=function(e,t,n){t=t.slice(),n&&t.push(n)
var r=t.map(function(t){return e.indexOf(t)}).sort()
return e[r.pop()]},oa=Jr.CANTTELL_PRIO,ia=Jr.FAIL_PRIO,ua=[]
ua[Jr.PASS_PRIO]=!0,ua[Jr.CANTTELL_PRIO]=null,ua[Jr.FAIL_PRIO]=!1
var sa=["any","all","none"]
function la(e,t){return sa.reduce(function(n,r){return n[r]=(e[r]||[]).map(function(e){return t(e,r)}),n},{})}var ca=function(e){var t=Object.assign({},e)
la(t,function(e,t){var n=void 0===e.result?-1:ua.indexOf(e.result)
e.priority=-1!==n?n:Jr.CANTTELL_PRIO,"none"===t&&(e.priority===Jr.PASS_PRIO?e.priority=Jr.FAIL_PRIO:e.priority===Jr.FAIL_PRIO&&(e.priority=Jr.PASS_PRIO))})
var n={all:t.all.reduce(function(e,t){return Math.max(e,t.priority)},0),none:t.none.reduce(function(e,t){return Math.max(e,t.priority)},0),any:t.any.reduce(function(e,t){return Math.min(e,t.priority)},4)%4}
t.priority=Math.max(n.all,n.none,n.any)
var r=[]
return sa.forEach(function(e){t[e]=t[e].filter(function(r){return r.priority===t.priority&&r.priority===n[e]}),t[e].forEach(function(e){return r.push(e.impact)})}),[oa,ia].includes(t.priority)?t.impact=aa(Jr.impact,r):t.impact=null,la(t,function(e){delete e.result,delete e.priority}),t.result=Jr.results[t.priority],delete t.priority,t}
function da(e){var t=i._audit.rules.find(function(t){return t.id===e.id})
return t&&t.impact&&e.nodes.forEach(function(e){["any","all","none"].forEach(function(n){(e[n]||[]).forEach(function(e){e.impact=t.impact})})}),Object.assign(e,pa(e.nodes)),delete e.nodes,e}var pa=function(e){var t={}
if((e=e.map(function(e){if(e.any&&e.all&&e.none)return ca(e)
if(Array.isArray(e.node))return da(e)
throw new TypeError("Invalid Result type")}))&&e.length){var n=e.map(function(e){return e.result})
t.result=aa(Jr.results,n,t.result)}else t.result="inapplicable"
Jr.resultGroups.forEach(function(e){return t[e]=[]}),e.forEach(function(e){var n=Jr.resultGroupMap[e.result]
t[n].push(e)})
var r=Jr.FAIL_GROUP
if(0===t[r].length&&(r=Jr.CANTTELL_GROUP),t[r].length>0){var a=t[r].map(function(e){return e.impact})
t.impact=aa(Jr.impact,a)||null}else t.impact=null
return t}
function fa(e,t,n){var r=Object.assign({},t)
r.nodes=(r[n]||[]).concat(),Jr.resultGroups.forEach(function(e){delete r[e]}),e[n].push(r)}var ha=function(e){var t={}
return Jr.resultGroups.forEach(function(e){return t[e]=[]}),e.forEach(function(e){e.error?fa(t,e,Jr.CANTTELL_GROUP):e.result===Jr.NA?fa(t,e,Jr.NA_GROUP):Jr.resultGroups.forEach(function(n){Array.isArray(e[n])&&e[n].length>0&&fa(t,e,n)})}),t},ma=function e(t,r,a){var o=n.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<r.length;++i){var u=r[i]
if(o.getPropertyValue(u.property)===u.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,r,a)},Da=function(e,t){if(!e)throw new Error(t)},ga=function(e){return Array.prototype.slice.call(e)},va=function(e){for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�"
return o}
function ba(e,t){return[e.substring(0,t),e.substring(t)]}function ya(e){return e.replace(/\s+$/,"")}var Fa,wa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var n=t.currentDomain,r=t.maxLength,a=void 0===r?25:r,o=function(e){var t=e,n="",r="",a="",o="",i=""
if(e.includes("#")){var u=$(ba(e,e.indexOf("#")),2)
e=u[0],i=u[1]}if(e.includes("?")){var s=$(ba(e,e.indexOf("?")),2)
e=s[0],o=s[1]}if(e.includes("://")){var l=$(e.split("://"),2)
n=l[0]
var c=$(ba(e=l[1],e.indexOf("/")),2)
r=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=$(ba(e=e.substr(2),e.indexOf("/")),2)
r=d[0],e=d[1]}if("www."===r.substr(0,4)&&(r=r.substr(4)),r&&r.includes(":")){var p=$(ba(r,r.indexOf(":")),2)
r=p[0],a=p[1]}return{original:t,protocol:n,domain:r,port:a,path:e,query:o,hash:i}}(e),i=o.path,u=o.domain,s=o.hash,l=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(s)return l&&(l+s).length<=a?ya(l+s):l.length<2&&s.length>2&&s.length<=a?ya(s):void 0
if(u&&u.length<a&&i.length<=1)return ya(u+i)
if(i==="/"+l&&u&&n&&u!==n&&(u+i).length<=a)return ya(u+i)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}(l)?ya(l):void 0}},Ea=function(e){return e.attributes instanceof n.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},Ca=function(e,t){return Fa&&e[Fa]||(Fa=function(e){var t,n,r=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=r.length
for(t=0;t<a;t++)if(e[n=r[t]])return n}(e)),!!e[Fa]&&e[Fa](t)},xa=de($t())
i._memoizedFns=[]
var Aa=function(e){var t=(0,xa.default)(e)
return i._memoizedFns.push(t),t},ka=Aa(function(e){return!(null==e||!e.createElement)&&"A"===e.createElement("A").localName})
function Ta(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var r=t.getRootNode&&t.getRootNode()||a
if(11!==r.nodeType)return e(t,n,r)
for(var o=[];11===r.nodeType;){if(!r.host)return""
o.unshift({elm:t,doc:r}),r=(t=r.host).getRootNode()}return o.unshift({elm:t,doc:r}),o.map(function(t){return e(t.elm,n,t.doc)})}var Na=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow","xmlns"],Ra=31,Ba=/([\\"])/g,_a=/(\r\n|\r|\n)/g
function Sa(e){return e.replace(Ba,"\\$1").replace(_a,"\\a ")}function Oa(e,t){var n,r=t.name
if(-1!==r.indexOf("href")||-1!==r.indexOf("src")){var a=wa(e.getAttribute(r))
n=a?va(t.name)+'$="'+Sa(a)+'"':va(t.name)+'="'+Sa(e.getAttribute(r))+'"'}else n=va(r)+'="'+Sa(t.value)+'"'
return n}function Ma(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Ia(e){return!Na.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<Ra)}function Pa(e){for(var t={classes:{},tags:{},attributes:{}},n=(e=Array.isArray(e)?e:[e]).slice(),r=[],a=function(){var e=n.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach(function(e){var n=va(e)
t.classes[n]?t.classes[n]++:t.classes[n]=1}),a.hasAttributes()&&Array.from(Ea(a)).filter(Ia).forEach(function(e){var n=Oa(a,e)
n&&(t.attributes[n]?t.attributes[n]++:t.attributes[n]=1)})}for(e.children.length&&(r.push(n),n=e.children.slice());!n.length&&r.length;)n=r.pop()};n.length;)a()
return t}function ja(e,t){var n=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return n.find(function(n){return n!==e&&Ca(n,t)})?":nth-child("+(1+n.indexOf(e))+")":""}function qa(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,n="#"+va(e.getAttribute("id")||"")
return n.match(/player_uid_/)||1!==t.querySelectorAll(n).length?void 0:n}}function La(e){var t=ka(a)
return va(t?e.localName:e.nodeName.toLowerCase())}function za(e,t){var n,r="",a=function(e,t){var n=[],r=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach(function(t){var o=va(t)
r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"class"})}),n.sort(Ma)}(e,t),o=function(e,t){var n=[],r=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(Ea(e)).filter(Ia).forEach(function(t){var o=Oa(e,t)
o&&r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"attribute"})}),n.sort(Ma)}(e,t)
return a.length&&1===a[0].count?n=[a[0]]:o.length&&1===o[0].count?(n=[o[0]],r=La(e)):((n=a.concat(o)).sort(Ma),(n=n.slice(0,3)).some(function(e){return"class"===e.species})?n.sort(function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1}):r=La(e)),r+n.reduce(function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e},"")}function $a(e,t,n){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var r,a,o=t.toRoot,u=void 0!==o&&o
do{var s=qa(e)
s||(s=za(e,i._selectorData),s+=ja(e,s)),r=r?s+" > "+r:s,a=!a||a.length>Jr.selectorSimilarFilterLimit?Va(n,r):a.filter(function(e){return Ca(e,r)}),e=e.parentElement}while((a.length>1||u)&&e&&11!==e.nodeType)
return 1===a.length?r:-1!==r.indexOf(" > ")?":root"+r.substring(r.indexOf(" > ")):":root"}var Ha=Aa(function(e,t){return Ta($a,e,t)}),Va=Aa(function(e,t){return Array.from(e.querySelectorAll(t))})
function Ua(e){var t=e.nodeName.toLowerCase(),n=e.parentElement,r=e.parentNode,a=""
if("head"!==t&&"body"!==t&&(null==r?void 0:r.children.length)>1){var o=Array.prototype.indexOf.call(r.children,e)+1
a=":nth-child(".concat(o,")")}return n?Ua(n)+" > "+t+a:t+a}function Wa(e,t){return Ta(Ua,e,t)}function Ga(e,t){var n,r
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=Ga(e.parentNode,t)),e.previousSibling){r=1,n=e.previousSibling
do{1===n.nodeType&&n.nodeName===e.nodeName&&r++,n=n.previousSibling}while(n)
1===r&&(r=null)}else if(e.nextSibling){n=e.nextSibling
do{1===n.nodeType&&n.nodeName===e.nodeName?(r=1,n=null):(r=null,n=n.previousSibling)}while(n)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&va(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),r>1&&(a.count=r),t.push(a)}return t}var Ka=function(e){return Ga(e).reduce(function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")},"")},Qa={},Ya={set:function(e,t){!function(e){Da("string"==typeof e,"key must be a string, "+o(e)+" given"),Da(""!==e,"key must not be empty")}(e),Qa[e]=t},get:function(e,t){if(function(e){Da("function"==typeof e||void 0===e,"creator must be a function or undefined, "+o(e)+" given")}(t),e in Qa)return Qa[e]
if("function"==typeof t){var n=t()
return Da(void 0!==n,"Cache creator function should not return undefined"),this.set(e,n),Qa[e]}},clear:function(){Qa={}}},Xa=Ya,Za=function(e,t){var n=t||e
return Xa.get("nodeMap")?Xa.get("nodeMap").get(n):null},Ja="DqElm.RunOptions",eo=Aa(function(e,t,r){var a,o,u,s,l,c
return null!==(a=t)&&void 0!==a||(t=null),null!==(o=r)&&void 0!==o||(r={}),t||(t=null!==(l=Xa.get(Ja))&&void 0!==l?l:{}),this.spec=r,e instanceof na?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=Za(e)),this.fromFrame=(null===(u=this.spec.selector)||void 0===u?void 0:u.length)>1,this._includeElementInJson=t.elementRef,t.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(s=this._virtualNode)||void 0===s?void 0:s.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(c=this.spec.source)&&void 0!==c?c:function(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof n.XMLSerializer||(t=(new n.XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var n=e.indexOf(">")
e=e.substring(0,n+1)}return e}(t||"")}(this._element)),this})
eo.prototype={get selector(){return this.spec.selector||[Ha(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[Wa(this.element)]},get xpath(){return this.spec.xpath||[Ka(this.element)]},get element(){return this._element},toJSON:function(){var e={selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes,fromFrame:this.fromFrame}
return this._includeElementInJson&&(e.element=this._element),e}},eo.fromFrame=function(e,t,n){var r=eo.mergeSpecs(e,n)
return new eo(n.element,t,r)},eo.mergeSpecs=function(e,t){return z({},e,{selector:[].concat(q(t.selector),q(e.selector)),ancestry:[].concat(q(t.ancestry),q(e.ancestry)),xpath:[].concat(q(t.xpath),q(e.xpath)),nodeIndexes:[].concat(q(t.nodeIndexes),q(e.nodeIndexes)),fromFrame:!0})},eo.setRunOptions=function(e){var t=e.elementRef,n=e.absolutePaths
Xa.set(Ja,{elementRef:t,absolutePaths:n})}
var to=eo,no=function(e,t,r,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(t){n.Node&&(t=t instanceof n.Node||t instanceof na?[t]:ga(t),e.relatedNodes=[],t.forEach(function(t){if(t instanceof na&&(t=t.actualNode),t instanceof n.Node){var r=new to(t)
e.relatedNodes.push(r)}}))}}}
function ro(e){return ao(e,new Map)}function ao(e,t){var r,a
if(null===e||"object"!==o(e))return e
if(null!==(r=n)&&void 0!==r&&r.Node&&e instanceof n.Node||null!==(a=n)&&void 0!==a&&a.HTMLCollection&&e instanceof n.HTMLCollection||"nodeName"in e&&"nodeType"in e&&"ownerDocument"in e)return e
if(t.has(e))return t.get(e)
if(Array.isArray(e)){var i=[]
return t.set(e,i),e.forEach(function(e){i.push(ao(e,t))}),i}var u={}
for(var s in t.set(e,u),e)u[s]=ao(e[s],t)
return u}var oo=new(de(Wt()).CssSelectorParser)
oo.registerSelectorPseudos("not"),oo.registerSelectorPseudos("is"),oo.registerNestingOperators(">"),oo.registerAttrEqualityMods("^","$","*","~")
var io=oo
function uo(e,t){return go(t).some(function(t){return bo(e,t)})}function so(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every(function(t){return e.hasClass(t.value)})}(e,t)&&function(e,t){return!t.attributes||t.attributes.every(function(t){var n=e.attr(t.key)
return null!==n&&t.test(n)})}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(n=e,!((r=t).pseudos&&!r.pseudos.every(function(e){if("not"===e.name)return!e.expressions.some(function(e){return bo(n,e)})
if("is"===e.name)return e.expressions.some(function(e){return bo(n,e)})
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")})))
var n,r}var lo,co=(lo=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(lo,"\\")}),po=/\\/g
function fo(e){if(e)return e.map(function(e){var t,n,r=e.name.replace(po,""),a=(e.value||"").replace(po,"")
switch(e.operator){case"^=":n=new RegExp("^"+co(a))
break
case"$=":n=new RegExp(co(a)+"$")
break
case"~=":n=new RegExp("(^|\\s)"+co(a)+"(\\s|$)")
break
case"|=":n=new RegExp("^"+co(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&n.test(e)}),{key:r,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}})}function ho(e){if(e)return e.map(function(e){return{value:e=e.replace(po,""),regexp:new RegExp("(^|\\s)"+co(e)+"(\\s|$)")}})}function mo(e){if(e)return e.map(function(e){var t
return["is","not"].includes(e.name)&&(t=Do(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}})}function Do(e){return e.map(function(e){for(var t=[],n=e.rule;n;)t.push({tag:n.tagName?n.tagName.toLowerCase():"*",combinator:n.nestingOperator?n.nestingOperator:" ",id:n.id,attributes:fo(n.attrs),classes:ho(n.classNames),pseudos:mo(n.pseudos)}),n=n.rule
return t})}function go(e){var t=io.parse(e)
return Do(t=t.selectors?t.selectors:[t])}function vo(e,t,n,r){if(!e)return!1
for(var a=Array.isArray(t)?t[n]:t,o=so(e,a);!o&&r&&e.parent;)o=so(e=e.parent,a)
if(n>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&vo(e.parent,t,n-1," "===a.combinator)}return o}function bo(e,t,n){return vo(e,t,t.length-1,n)}var yo=function(e,t){for(;e;){if(uo(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Fo(){}function wo(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Eo,Co,xo=function(){var e,t=[],n=0,r=0,a=Fo,i=!1,u=function(t){e=t,setTimeout(function(){null!=e&&ea("Uncaught error (of queue)",e)},1)},s=u
function l(e){return function(n){t[e]=n,(r-=1)||a===Fo||(i=!0,a(t))}}function c(e){return a=Fo,s(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var u=a
a=function(e,t){u.then(e).catch(t)}}if(wo(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++r,function(){for(var e=t.length;n<e;n++){var r=t[n]
try{r.call(null,l(n),c)}catch(e){c(e)}}}(),d}},then:function(n){if(wo(n),a!==Fo)throw new Error("queue `then` already set")
return e||(a=n,r||(i=!0,a(t))),d},catch:function(t){if(wo(t),s!==u)throw new Error("queue `catch` already set")
return e?(t(e),e=null):s=t,d},abort:c}
return d},Ao=n.crypto||n.msCrypto
if(!Co&&Ao&&Ao.getRandomValues){var ko=new Uint8Array(16)
Co=function(){return Ao.getRandomValues(ko),ko}}if(!Co){var To=new Array(16)
Co=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),To[t]=e>>>((3&t)<<3)&255
return To}}for(var No="function"==typeof n.Buffer?n.Buffer:Array,Ro=[],Bo={},_o=0;_o<256;_o++)Ro[_o]=(_o+256).toString(16).substr(1),Bo[Ro[_o]]=_o
function So(e,t){var n=t||0,r=Ro
return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var Oo=Co(),Mo=[1|Oo[0],Oo[1],Oo[2],Oo[3],Oo[4],Oo[5]],Io=16383&(Oo[6]<<8|Oo[7]),Po=0,jo=0
function qo(e,t,n){var r=t&&n||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Io,i=null!=e.msecs?e.msecs:(new Date).getTime(),u=null!=e.nsecs?e.nsecs:jo+1,s=i-Po+(u-jo)/1e4
if(s<0&&null==e.clockseq&&(o=o+1&16383),(s<0||i>Po)&&null==e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
Po=i,jo=u,Io=o
var l=(1e4*(268435455&(i+=122192928e5))+u)%4294967296
a[r++]=l>>>24&255,a[r++]=l>>>16&255,a[r++]=l>>>8&255,a[r++]=255&l
var c=i/4294967296*1e4&268435455
a[r++]=c>>>8&255,a[r++]=255&c,a[r++]=c>>>24&15|16,a[r++]=c>>>16&255,a[r++]=o>>>8|128,a[r++]=255&o
for(var d=e.node||Mo,p=0;p<6;p++)a[r+p]=d[p]
return t||So(a)}function Lo(e,t,n){var r=t&&n||0
"string"==typeof e&&(t="binary"==e?new No(16):null,e=null)
var a=(e=e||{}).random||(e.rng||Co)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[r+o]=a[o]
return t||So(a)}(Eo=Lo).v1=qo,Eo.v4=Lo,Eo.parse=function(e,t,n){var r=t&&n||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,function(e){a<16&&(t[r+a++]=Bo[e])});a<16;)t[r+a++]=0
return t},Eo.unparse=So,Eo.BufferClass=No,i._uuid=qo()
var zo=Lo,$o=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function Ho(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}function Vo(e){Wo(e),Da(n.parent===e,"Source of the response must be the parent window.")}function Uo(e){Wo(e),Da(e.parent===n,"Respondable target must be a frame in the current window")}function Wo(e){Da(n!==e,"Messages can not be sent to the same window.")}var Go={},Ko=[]
function Qo(){var e="".concat(Lo(),":").concat(Lo())
return Ko.includes(e)?Qo():(Ko.push(e),e)}function Yo(e,t,n,r){if(n?Vo(e):Uo(e),t.message instanceof Error&&!n)return i.log(t.message),!1
var a=function(e){var t=e.topic,n=e.channelId,r=e.message,a={channelId:n,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:Ho()}
return r instanceof Error?a.error={name:r.name,message:r.message,stack:r.stack}:a.payload=r,JSON.stringify(a)}(z({messageId:Qo()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||("function"==typeof r&&function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
Da(!Go[e],"A replyHandler already exists for this message channel."),Go[e]={replyHandler:t,sendToParent:n}}(t.channelId,r,n),o.forEach(function(t){try{e.postMessage(a,t)}catch(n){if(n instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw n}}),0))}function Xo(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(r,a,o){Yo(e,{channelId:t,message:r,keepalive:a},n,o)}}var Zo,Jo,ei={open:function(e){if("function"==typeof n.addEventListener){var t=function(t){(function(e,t){var r,a=e.origin,u=e.data,s=e.source
try{var l=function(e){var t,r,a,i,u
try{t=JSON.parse(e)}catch(e){return}if(null!==(s=t)&&"object"===o(s)&&"string"==typeof s.channelId&&s.source===Ho()){var s,l=t,c=l.topic,d=l.channelId,p=l.messageId,f=l.keepalive
return{topic:c,message:"object"===o(t.error)?(r=t.error,a=r.message||"Unknown error occurred",i=$o.includes(r.name)?r.name:"Error",u=n[i]||Error,r.stack&&(a+="\n"+r.stack.replace(r.message,"")),new u(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(u)||{},c=l.channelId,d=l.message,p=l.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(r=p,Ko.includes(r)||(Ko.push(r),0)))return
if(d instanceof Error&&s.parent!==n)return i.log(d),!1
try{if(l.topic){var f=Xo(s,c)
Vo(s),t(l,f)}else!function(e,t){var n=t.channelId,r=t.message,a=t.keepalive,o=function(e){return Go[e]}(n)||{},u=o.replyHandler,s=o.sendToParent
if(u){s?Vo(e):Uo(e)
var l=Xo(e,n,s)
!a&&n&&function(e){delete Go[e]}(n)
try{u(r,a,l)}catch(e){i.log(e),l(e,a)}}}(s,l)}catch(e){!function(e,t,r){if(!e.parent!==n)return i.log(t)
try{Yo(e,{topic:null,channelId:r,message:t,messageId:Qo(),keepalive:!0},!0)}catch(e){return i.log(e)}}(s,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return n.addEventListener("message",t,!1),function(){n.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof n.addEventListener&&Yo(e,t,!1,r)}}
function ti(e){e.updateMessenger(ei)}var ni={}
function ri(e,t,n,r,a){var o={topic:t,message:n,channelId:"".concat(Lo(),":").concat(Lo()),keepalive:r}
return Jo(e,o,a)}function ai(e,t){var n=e.topic,r=e.message,a=e.keepalive,o=ni[n]
if(o)try{o(r,a,t)}catch(e){i.log(e),t(e,a)}}function oi(e,t,n,r){var a,o,i=e.contentWindow,u=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return ea("Frame does not have a content window",e),void n(null)
if(0!==u){var s=setTimeout(function(){s=setTimeout(function(){t.debug?r(ui("No response from frame",e)):n(null)},0)},u)
ri(i,"axe.ping",null,void 0,function(){clearTimeout(s),ii(e,t,n,r)})}else ii(e,t,n,r)}function ii(e,t,n,r){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,u=e.contentWindow,s=setTimeout(function(){r(ui("Axe in frame timed out",e))},i)
ri(u,"axe.start",t,void 0,function(e){clearTimeout(s),e instanceof Error==0?n(e):r(e)})}function ui(e,t){var n
return i._tree&&(n=Ha(t)),new Error(e+": "+(n||t))}ri.updateMessenger=function(e){var t=e.open,n=e.post
Da("function"==typeof t,"open callback must be a function"),Da("function"==typeof n,"post callback must be a function"),Zo&&Zo()
var r=t(ai)
r?(Da("function"==typeof r,"open callback must return a cleanup function"),Zo=r):Zo=null,Jo=n},ri.subscribe=function(e,t){Da("function"==typeof t,"Subscriber callback must be a function"),Da(!ni[e],"Topic ".concat(e," is already registered to.")),ni[e]=t},ri.isInFrame=function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n).frameElement},ti(ri)
var si=null,li={update:function(e){Da("object"===o(e),"serializer must be an object"),si=e},toSpec:function(e){return li.dqElmToSpec(new to(e))},dqElmToSpec:function(e,t){var n
return e instanceof to==0?e:(t&&(e=function(e,t){var n=e.fromFrame,r=t.ancestry,a=t.xpath,o=!1!==t.selectors||n
return(e=new to(e.element,t,{source:e.source,nodeIndexes:e.nodeIndexes,selector:o?e.selector:[":root"],ancestry:r?e.ancestry:[":root"],xpath:a?e.xpath:"/"})).fromFrame=n,e}(e,t)),"function"==typeof(null===(n=si)||void 0===n?void 0:n.toSpec)?si.toSpec(e):e.toJSON())},mergeSpecs:function(e,t){var n
return"function"==typeof(null===(n=si)||void 0===n?void 0:n.mergeSpecs)?si.mergeSpecs(e,t):to.mergeSpecs(e,t)},mapRawResults:function(e){return e.map(function(e){return z({},e,{nodes:li.mapRawNodeResults(e.nodes)})})},mapRawNodeResults:function(e){return null==e?void 0:e.map(function(e){var t=e.node,n=j(e,s)
n.node=li.dqElmToSpec(t)
for(var r=0,a=["any","all","none"];r<a.length;r++){var o=a[r]
n[o]=n[o].map(function(e){var t=e.relatedNodes,n=j(e,l)
return n.relatedNodes=t.map(li.dqElmToSpec),n})}return n})}},ci=li,di=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},pi=function(e,t,n){if(Array.isArray(e))return e.find(function(e){return null!==e&&"object"===o(e)&&Object.hasOwn(e,t)&&e[t]===n})}
function fi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),r=0;r<n;r++){var a=null==e?void 0:e[r],o=null==t?void 0:t[r]
if("number"!=typeof a||isNaN(a))return 0===r?1:-1
if("number"!=typeof o||isNaN(o))return 0===r?-1:1
if(a!==o)return a-o}return 0}var hi=function(e,t){var n=[]
return e.forEach(function(e){var t,r=(t=e)&&t.results?Array.isArray(t.results)?t.results.length?t.results:null:[t.results]:null
if(r&&r.length){var a=function(e){return e.frameElement?ci.toSpec(e.frameElement):e.frameSpec?e.frameSpec:null}(e)
r.forEach(function(e){e.nodes&&a&&function(e,t,n){e.forEach(function(e){e.node=ci.mergeSpecs(e.node,n),di(e).forEach(function(e){e.relatedNodes=e.relatedNodes.map(function(e){return ci.mergeSpecs(e,n)})})})}(e.nodes,0,a)
var t=pi(n,"id",e.id)
t?e.nodes.length&&function(e,t){for(var n,r=t[0].node,a=0;a<e.length;a++){var o=fi((n=e[a].node).nodeIndexes,r.nodeIndexes)
if(o>0||0===o&&r.selector.length<n.selector.length)return void e.splice.apply(e,[a,0].concat(q(t)))}e.push.apply(e,q(t))}(t.nodes,e.nodes):n.push(e)})}}),n.forEach(function(e){e.nodes&&e.nodes.sort(function(e,t){return fi(e.node.nodeIndexes,t.node.nodeIndexes)})}),n}
function mi(e,t,n,r,a,o){t=z({},t,{elementRef:!1})
var i=xo()
e.frames.forEach(function(e){var a=e.node,o=j(e,c)
i.defer(function(e,i){oi(a,{options:t,command:n,parameter:r,context:o},function(t){return e(t?{results:t,frameElement:a}:null)},i)})}),i.then(function(e){a(hi(e,t))}).catch(o)}function Di(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var gi=function e(){for(var t={},n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return r.forEach(function(n){if(n&&"object"===o(n)&&!Array.isArray(n))for(var r=0,a=Object.keys(n);r<a.length;r++){var i=a[r]
!t.hasOwnProperty(i)||"object"!==o(n[i])||Array.isArray(t[i])?t[i]=n[i]:t[i]=e(t[i],n[i])}}),t},vi=function(e,t){Object.assign(e,t),Object.keys(t).filter(function(e){return"function"==typeof t[e]}).forEach(function(n){e[n]=null
try{e[n]=t[n](e)}catch(e){}})},bi=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],yi=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(bi.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},Fi={}
ce(Fi,{createGrid:function(){return yu},findElmsInContext:function(){return Ci},findNearbyElms:function(){return Nu},findUp:function(){return Ai},findUpVirtual:function(){return xi},focusDisabled:function(){return Iu},getComposedParent:function(){return Gi},getElementByReference:function(){return Lu},getElementCoordinates:function(){return Qi},getElementStack:function(){return Uu},getModalDialog:function(){return Bu},getOverflowHiddenAncestors:function(){return Ni},getRootNode:function(){return Ei},getScrollOffset:function(){return Ki},getTabbableElements:function(){return Wu},getTargetRects:function(){return Yu},getTargetSize:function(){return Xu},getTextElementStack:function(){return Ml},getViewportSize:function(){return Yi},getVisibleChildTextRects:function(){return Sl},hasContent:function(){return zl},hasContentVirtual:function(){return Ll},hasLangText:function(){return $l},idrefs:function(){return Ju},insertedIntoFocusOrder:function(){return Hl},isCurrentPageLink:function(){return qu},isFocusable:function(){return Ku},isHTML5:function(){return Gl},isHiddenForEveryone:function(){return Vi},isHiddenWithCSS:function(){return Wl},isInTabOrder:function(){return Qu},isInTextBlock:function(){return Zl},isInert:function(){return _u},isModalOpen:function(){return Jl},isMultiline:function(){return ec},isNativelyFocusable:function(){return Gu},isNode:function(){return tc},isOffscreen:function(){return Xi},isOpaque:function(){return wf},isSkipLink:function(){return Ef},isVisible:function(){return kf},isVisibleOnScreen:function(){return Ji},isVisibleToScreenReaders:function(){return Qs},isVisualContent:function(){return Pl},reduceToElementsBelowFloating:function(){return Tf},shadowElementsFromPoint:function(){return _f},urlPropsFromAttribute:function(){return If},visuallyContains:function(){return Nf},visuallyOverlaps:function(){return Pf},visuallySort:function(){return zu}})
var wi=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},Ei=wi,Ci=function(e){var t,n=e.context,r=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,u=va(r)
return t=9===n.nodeType||11===n.nodeType?n:Ei(n),Array.from(t.querySelectorAll(i+"["+a+"="+u+"]"))},xi=function(e,t){var n
if(n=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(n=n.assignedSlot?n.assignedSlot:n.parentNode)&&11===n.nodeType&&(n=n.host)}while(n&&!Ca(n,t)&&n!==a.documentElement)
return n&&Ca(n,t)?n:null},Ai=function(e,t){return xi(Za(e),t)}
function ki(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var Ti=Aa(function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(Ti(e.parent))):t}),Ni=Ti,Ri=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Bi=/(\w+)\((\d+)/
function _i(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function Si(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function Oi(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function Mi(e){return!!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function Ii(e){return"true"===e.attr("aria-hidden")}function Pi(e){return"0"===e.getComputedStylePropertyValue("opacity")}function ji(e){var t=Ch(e.actualNode),n=parseInt(e.getComputedStylePropertyValue("height")),r=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===n||0===r)}function qi(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=e.getComputedStylePropertyValue("position")
if("fixed"===t)return!1
var n=Ni(e)
if(!n.length)return!1
var r=e.boundingClientRect
return n.some(function(n){if("absolute"===t&&!function(e,t){for(var n=e.parent;n&&n!==t;){if(["relative","sticky"].includes(n.getComputedStylePropertyValue("position")))return!0
n=n.parent}return!1}(e,n)&&"static"===n.getComputedStylePropertyValue("position"))return!1
var a=n.boundingClientRect
return a.width<2||a.height<2||!ki(r,a)})}function Li(e){var t=e.getComputedStylePropertyValue("clip").match(Ri),n=e.getComputedStylePropertyValue("clip-path").match(Bi)
if(t&&5===t.length){var r=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function zi(e,t){var n=yo(e,"map")
if(!n)return!0
var r=n.attr("name")
if(!r)return!0
var a=wi(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=cm(i._tree,'img[usemap="#'.concat(va(r),'"]'))
return!o||!o.length||o.some(function(e){return!t(e)})}function $i(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find(function(e){return"summary"===e.props.nodeName})!==e)&&!e.parent.hasAttr("open")}var Hi=[Si,Oi,Mi,$i]
function Vi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor,a=void 0!==r&&r
return e=Vh(e).vNode,n?Ui(e,a):Wi(e,a)}var Ui=Aa(function(e,t){return!(!_i(e)&&(!e.actualNode||!Hi.some(function(n){return n(e,{isAncestor:t})})&&e.actualNode.isConnected))}),Wi=Aa(function(e,t){return!!Ui(e,t)||!!e.parent&&Wi(e.parent,!0)}),Gi=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var n=t.parentNode
if(1===n.nodeType)return n
if(n.host)return n.host}return null},Ki=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,n=e.body
return{left:t&&t.scrollLeft||n&&n.scrollLeft||0,top:t&&t.scrollTop||n&&n.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},Qi=function(e){var t=Ki(a),n=t.left,r=t.top,o=e.getBoundingClientRect()
return{top:o.top+r,right:o.right+n,bottom:o.bottom+r,left:o.left+n,width:o.right-o.left,height:o.bottom-o.top}},Yi=function(e){var t=e.document,n=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(n)return{width:n.clientWidth,height:n.clientHeight}
var r=t.body
return{width:r.clientWidth,height:r.clientHeight}},Xi=function(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=Vh(e).domNode
if(t){var r,o=a.documentElement,i=n.getComputedStyle(t),u=n.getComputedStyle(a.body||o).getPropertyValue("direction"),s=Qi(t)
if(s.bottom<0&&(function(e,t){for(e=Gi(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Gi(e)}return!0}(t,s.bottom)||"absolute"===i.position))return!0
if(0===s.left&&0===s.right)return!1
if("ltr"===u){if(s.right<=0)return!0}else if(r=Math.max(o.scrollWidth,Yi(n).width),s.left>=r)return!0
return!1}},Zi=[Pi,ji,qi,Li,Xi]
function Ji(e){return e=Vh(e).vNode,eu(e)}var eu=Aa(function(e,t){return e.actualNode&&"area"===e.props.nodeName?!zi(e,eu):!Vi(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!Zi.some(function(n){return n(e,{isAncestor:t})}))&&(!e.parent||eu(e.parent,!0))})
function tu(e,t){var r=Math.min(e.top,t.top),a=Math.max(e.right,t.right),o=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left)
return new n.DOMRect(i,r,a-i,o-r)}function nu(e,t){var n=e.x,r=e.y,a=t.top,o=t.right,i=t.bottom,u=t.left
return r>=a&&n<=o&&r<=i&&n>=u}var ru={}
function au(e,t){var r=Math.max(e.left,t.left),a=Math.min(e.right,t.right),o=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom)
return r>=a||o>=i?null:new n.DOMRect(r,o,a-r,i-o)}function ou(e){var t=e.left,r=e.top,a=e.width,o=e.height
return new n.DOMPoint(t+a/2,r+o/2)}ce(ru,{getBoundingRect:function(){return tu},getIntersectionRect:function(){return au},getOffset:function(){return su},getRectCenter:function(){return ou},hasVisualOverlap:function(){return du},isPointInRect:function(){return nu},rectHasMinimumSize:function(){return uu},rectsOverlap:function(){return ki},splitRects:function(){return pu}})
var iu=.05
function uu(e,t){var n=t.width,r=t.height
return n+iu>=e&&r+iu>=e}function su(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,r=Yu(e),a=Yu(t)
if(!r.length||!a.length)return null
var o,i=ou(r.reduce(tu)),u=1/0,s=Q(a)
try{for(s.s();!(o=s.n()).done;){var l=o.value
if(nu(i,l))return 0
var c=cu(i,lu(i,l))
u=Math.min(u,c)}}catch(e){s.e(e)}finally{s.f()}if(uu(2*n,Xu(t)))return u
var d=cu(i,ou(a.reduce(tu)))-n
return Math.max(0,Math.min(u,d))}function lu(e,t){return{x:e.x<t.left?t.left:e.x>t.right?t.right:e.x,y:e.y<t.top?t.top:e.y>t.bottom?t.bottom:e.y}}function cu(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function du(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return!(n.left>=r.right||n.right<=r.left||n.top>=r.bottom||n.bottom<=r.top)&&zu(e,t)>0}function pu(e,t){var n,r=[e],a=Q(t)
try{var o=function(){var e=n.value
if((r=r.reduce(function(t,n){return t.concat(function(e,t){var n,r,a=e.top,o=e.left,i=e.bottom,u=e.right,s=a<t.bottom&&i>t.top,l=o<t.right&&u>t.left,c=[]
if(fu(t.top,a,i)&&l&&c.push({top:a,left:o,bottom:t.top,right:u}),fu(t.right,o,u)&&s&&c.push({top:a,left:t.right,bottom:i,right:u}),fu(t.bottom,a,i)&&l&&c.push({top:t.bottom,right:u,bottom:i,left:o}),fu(t.left,o,u)&&s&&c.push({top:a,left:o,bottom:i,right:t.left}),0===c.length){if(r=t,(n=e).top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right)return[]
c.push(e)}return c.map(hu)}(n,e))},[])).length>4e3)throw new Error("splitRects: Too many rects")}
for(a.s();!(n=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return r}var fu=function(e,t,n){return e>t&&e<n}
function hu(e){return new n.DOMRect(e.left,e.top,e.right-e.left,e.bottom-e.top)}var mu=0,Du=.1,gu=.2,vu=.3,bu=0
function yu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(Xa.get("gridCreated")&&!r)return Jr.gridSize
if(Xa.set("gridCreated",!0),!r){var o,u=Za(a.documentElement)
if(u||(u=new Lf(a.documentElement)),bu=0,u._stackingOrder=[Cu(mu,bu++,null)],null!==(o=t)&&void 0!==o||(t=new ku),Au(t,u),Ch(u.actualNode)){var s=new ku(u)
u._subGrid=s}}for(var l=a.createTreeWalker(e,n.NodeFilter.SHOW_ELEMENT,null,!1),c=r?l.nextNode():l.currentNode;c;){var d=Za(c)
d&&d.parent?r=d.parent:c.assignedSlot?r=Za(c.assignedSlot):c.parentElement?r=Za(c.parentElement):c.parentNode&&Za(c.parentNode)&&(r=Za(c.parentNode)),d||(d=new i.VirtualNode(c,r)),d._stackingOrder=Eu(d,r,bu++)
var p=xu(d,r),f=p?p._subGrid:t
if(Ch(d.actualNode)){var h=new ku(d)
d._subGrid=h}var m=d.boundingClientRect
0!==m.width&&0!==m.height&&Ji(c)&&Au(f,d),yi(c)&&yu(c.shadowRoot,f,d),c=l.nextNode()}return Jr.gridSize}function Fu(e,t){var n=e.getComputedStylePropertyValue("position"),r=e.getComputedStylePropertyValue("z-index")
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
return!!["layout","paint","strict","content"].includes(l)||!("auto"===r||!wu(t))}function wu(e){if(!e)return!1
var t=e.getComputedStylePropertyValue("display")
return["flex","inline-flex","grid","inline-grid"].includes(t)}function Eu(e,t,n){var r=t._stackingOrder.slice()
if(Fu(e,t)){var a=r.findIndex(function(e){var t=e.stackLevel
return[mu,gu,vu].includes(t)});-1!==a&&r.splice(a,r.length-a)}var o=function(e,t){var n=function(e,t){return"static"!==e.getComputedStylePropertyValue("position")||wu(t)?e.getComputedStylePropertyValue("z-index"):"auto"}(e,t)
return["auto","0"].includes(n)?"static"!==e.getComputedStylePropertyValue("position")?vu:"none"!==e.getComputedStylePropertyValue("float")?gu:Fu(e,t)?Du:null:parseInt(n)}(e,t)
return null!==o&&r.push(Cu(o,n,e)),r}function Cu(e,t,n){return{stackLevel:e,treeOrder:t,vNode:n}}function xu(e,t){for(var n=null,r=[e];t;){if(Ch(t.actualNode)){n=t
break}if(t._scrollRegionParent){n=t._scrollRegionParent
break}r.push(t),t=Za(t.actualNode.parentElement||t.actualNode.parentNode)}return r.forEach(function(e){return e._scrollRegionParent=n}),n}function Au(e,t){var n=Ni(t)
t.clientRects.forEach(function(r){var a,o=n.reduce(function(e,t){return e&&au(e,t.boundingClientRect)},r)
if(o){null!==(a=t._grid)&&void 0!==a||(t._grid=e)
var i=e.getGridPositionOfRect(o)
e.loopGridPosition(i,function(e){e.includes(t)||e.push(t)})}})}var ku=G(function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
U(this,e),this.container=t,this.cells=[]},[{key:"toGridIndex",value:function(e){return Math.floor(e/Jr.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,n,r=e.x,a=e.y
Da(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),i=this.toGridIndex(r)
Da(nu({y:o,x:i},this.boundaries),"Element midpoint exceeds the grid bounds")
var u=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(n=u[i-u._negativeIndex])&&void 0!==n?n:[]}},{key:"loopGridPosition",value:function(e,t){var n=e,r=n.left,a=n.right,o=n.top,i=n.bottom
this.boundaries&&(e=tu(this.boundaries,e)),this.boundaries=e,Tu(this.cells,o,i,function(e,n){Tu(e,r,a,function(e,r){t(e,{row:n,col:r})})})}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,r=e.right,a=e.bottom,o=e.left,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-i),r=this.toGridIndex(r+i-1),a=this.toGridIndex(a+i-1),o=this.toGridIndex(o-i),new n.DOMRect(o,t,r-o,a-t)}}])
function Tu(e,t,n,r){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var i=t-e._negativeIndex,u=n-e._negativeIndex,s=i;s<=u;s++){var l,c
null!==(c=e[l=s])&&void 0!==c||(e[l]=[]),r(e[s],s+e._negativeIndex)}}function Nu(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(yu(),null===(t=e._grid)||void 0===t||null===(t=t.cells)||void 0===t||!t.length)return[]
var r=e.boundingClientRect,a=e._grid,o=Ru(e),i=a.getGridPositionOfRect(r,n),u=[]
return a.loopGridPosition(i,function(t){var n,r=Q(t)
try{for(r.s();!(n=r.n()).done;){var a=n.value
a&&a!==e&&!u.includes(a)&&o===Ru(a)&&u.push(a)}}catch(e){r.e(e)}finally{r.f()}}),u}var Ru=Aa(function(e){return!!e&&("fixed"===e.getComputedStylePropertyValue("position")||Ru(e.parent))}),Bu=Aa(function(){var e
if(!i._tree)return null
var t=Jh(i._tree[0],"dialog[open]",function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left+1,t.top+1).includes(e.actualNode)&&Ji(e)})
return t.length?t.find(function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left-10,t.top-10).includes(e.actualNode)})||(null!==(e=t.find(function(e){var t,r=null!==(t=function(e){yu()
var t=i._tree[0]._grid,r=new n.DOMRect(0,0,n.innerWidth,n.innerHeight)
if(t)for(var a=0;a<t.cells.length;a++){var o=t.cells[a]
if(o)for(var u=0;u<o.length;u++){var s=o[u]
if(s)for(var l=0;l<s.length;l++){var c=s[l],d=au(c.boundingClientRect,r)
if("html"!==c.props.nodeName&&c!==e&&"none"!==c.getComputedStylePropertyValue("pointer-events")&&d)return{vNode:c,rect:d}}}}}(e))&&void 0!==t?t:{},o=r.vNode,u=r.rect
return!!o&&!a.elementsFromPoint(u.left+1,u.top+1).includes(o.actualNode)}))&&void 0!==e?e:null):null})
function _u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor
return n?Su(e,r):Ou(e,r)}var Su=Aa(function(e,t){if(e.hasAttr("inert"))return!0
if(!t&&e.actualNode){var n=Bu()
if(n&&!Di(n,e))return!0}return!1}),Ou=Aa(function(e,t){return!!Su(e,t)||!!e.parent&&Ou(e.parent,!0)}),Mu=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],Iu=function(e){var t,n=Vh(e).vNode
if(t=n.props.nodeName,Mu.includes(t)&&n.hasAttr("disabled")||_u(n))return!0
for(var r=n.parent,a=[],o=!1;r&&r.shadowId===n.shadowId&&!o&&(a.push(r),"legend"!==r.props.nodeName);){if(void 0!==r._inDisabledFieldset){o=r._inDisabledFieldset
break}"fieldset"===r.props.nodeName&&r.hasAttr("disabled")&&(o=!0),r=r.parent}return a.forEach(function(e){return e._inDisabledFieldset=o}),!!o||"area"!==n.props.nodeName&&!!n.actualNode&&Vi(n)},Pu=/^\/\#/,ju=/^#[!/]/
function qu(e){var t,r=e.getAttribute("href")
if(!r||"#"===r)return!1
if(Pu.test(r))return!0
var a=e.hash,o=e.protocol,i=e.hostname,u=e.port,s=e.pathname
if(ju.test(a))return!1
if("#"===r.charAt(0))return!0
if("string"!=typeof(null===(t=n.location)||void 0===t?void 0:t.origin)||-1===n.location.origin.indexOf("://"))return null
var l,c=n.location.origin+n.location.pathname
return l=i?"".concat(o,"//").concat(i).concat(u?":".concat(u):""):n.location.origin,(l+=s?("/"!==s[0]?"/":"")+s:n.location.pathname)===c}var Lu=function(e,t){var n=e.getAttribute(t)
if(!n)return null
if("href"===t&&!qu(e))return null;-1!==n.indexOf("#")&&(n=decodeURIComponent(n.substr(n.indexOf("#")+1)))
var r=a.getElementById(n)
return r||((r=a.getElementsByName(n)).length?r[0]:null)}
function zu(e,t){yu()
for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<r;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a].stackLevel>e._stackingOrder[a].stackLevel)return 1
if(t._stackingOrder[a].stackLevel<e._stackingOrder[a].stackLevel)return-1
if(t._stackingOrder[a].treeOrder!==e._stackingOrder[a].treeOrder)return t._stackingOrder[a].treeOrder-e._stackingOrder[a].treeOrder}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var u=[];o;)u.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!u.find(function(e){return e.root===i.getRootNode()});)i=i.getRootNode().host
if((o=u.find(function(e){return e.root===i.getRootNode()}).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var s=n.Node,l=s.DOCUMENT_POSITION_FOLLOWING,c=s.DOCUMENT_POSITION_CONTAINS,d=s.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&l?1:-1,h=p&c||p&d,m=$u(e),D=$u(t)
return m===D||h?f:D-m}function $u(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:Hu(e)?1:0}function Hu(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=Hu(e.parent)
return e._isFloated=t,t}function Vu(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=ou(t),o=e.getCellFromPoint(r)||[],i=Math.floor(r.x),u=Math.floor(r.y),s=o.filter(function(e){return e.clientRects.some(function(e){var t=e.left,n=e.top
return i<Math.floor(t+e.width)&&i>=Math.floor(t)&&u<Math.floor(n+e.height)&&u>=Math.floor(n)})}),l=e.container
return l&&(s=Vu(l._grid,l.boundingClientRect,!0).concat(s)),n||(s=s.sort(zu).map(function(e){return e.actualNode}).concat(a.documentElement).filter(function(e,t,n){return n.indexOf(e)===t})),s}var Uu=function(e){yu()
var t=Za(e),n=t._grid
return n?Vu(n,t.boundingClientRect):[]},Wu=function(e){return cm(e,"*").filter(function(e){var t=e.isFocusable,n=Kh(e.actualNode.getAttribute("tabindex"))
return null!==n?t&&n>=0:t})},Gu=function(e){var t=Vh(e).vNode
if(!t||Iu(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!cm(t,"summary").length}return!1}
function Ku(e){var t=Vh(e).vNode
return!(1!==t.props.nodeType||Iu(t)||!Gu(t)&&null===Kh(t.attr("tabindex")))}function Qu(e){var t=Vh(e).vNode
return 1===t.props.nodeType&&!(Kh(t.attr("tabindex"))<=-1)&&Ku(t)}var Yu=Aa(function(e){var t=e.boundingClientRect,n=Nu(e).filter(function(t){return du(e,t)&&"none"!==t.getComputedStylePropertyValue("pointer-events")&&!function(e,t){return Di(e,t)&&!Qu(t)}(e,t)})
return n.length?pu(t,n.map(function(e){return e.boundingClientRect})):[t]}),Xu=Aa(function(e,t){return function(e,t){return e.reduce(function(e,n){var r=uu(t,e)
return r!==uu(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n})}(Yu(e),t)}),Zu={}
ce(Zu,{accessibleText:function(){return es},accessibleTextVirtual:function(){return Fl},autocomplete:function(){return xl},formControlValue:function(){return ll},formControlValueMethods:function(){return ul},hasUnicode:function(){return bl},isHumanInterpretable:function(){return Cl},isIconLigature:function(){return yl},isValidAutocomplete:function(){return Al},label:function(){return Rl},labelText:function(){return pl},labelVirtual:function(){return Nl},nativeElementType:function(){return Bl},nativeTextAlternative:function(){return gl},nativeTextMethods:function(){return Dl},removeUnicode:function(){return El},sanitize:function(){return vs},subtreeText:function(){return dl},titleText:function(){return Us},unsupported:function(){return Ks},visible:function(){return Tl},visibleTextNodes:function(){return _l},visibleVirtual:function(){return Xs}})
var Ju=function(e,t){e=e.actualNode||e
try{var n=Ei(e),r=[],a=e.getAttribute(t)
if(a){a=zf(a)
for(var o=0;o<a.length;o++)r.push(n.getElementById(a[o]))}return r}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},es=function(e,t){return Fl(Za(e),t)},ts=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Vh(e).vNode
return 1!==(null==n?void 0:n.props.nodeType)||1!==n.props.nodeType||t.inLabelledByContext||t.inControlContext||!n.attr("aria-labelledby")?"":Ju(n,"aria-labelledby").filter(function(e){return e}).reduce(function(e,r){var a=es(r,z({inLabelledByContext:!0,startNode:t.startNode||n},t))
return e?"".concat(e," ").concat(a):a},"")}
function ns(e){var t=Vh(e).vNode
return 1!==(null==t?void 0:t.props.nodeType)?"":t.attr("aria-label")||""}var rs={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-braillelabel":{type:"string",allowEmpty:!0,global:!0},"aria-brailleroledescription":{type:"string",allowEmpty:!0,global:!0},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-description":{type:"string",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string",allowEmpty:!0}},as={alert:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-expanded","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",deprecated:!0,allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-required","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-readonly","aria-required"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},os={ariaAttrs:rs,ariaRoles:z({},as,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-glossary","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","gridcell","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","separator","slider","switch","tab","treeitem"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["form","search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","math","menuitem","menuitemcheckbox","menuitemradio","meter","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},search:{contentTypes:["flow"],allowedRoles:["form","group","none","presentation","region","search"]},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},is=z({},os),us=is,ss=function(e){var t=us.ariaRoles[e]
return!!t&&!!t.unsupported},ls=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAbstract,r=t.flagUnsupported,a=void 0!==r&&r,o=us.ariaRoles[e],i=ss(e)
return!(!o||a&&i||!n&&"abstract"===o.type)},cs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fallback,r=t.abstracts,a=t.dpub
if(1!==(e=e instanceof na?e:Za(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase()
return(n?zf(o):[o]).find(function(e){return!(!a&&"doc-"===e.substr(0,4))&&ls(e,{allowAbstract:r})})||null},ds=function(e){return Object.keys(us.htmlElms).filter(function(t){var n=us.htmlElms[t]
return n.contentTypes?n.contentTypes.includes(e):!!n.variant&&!(!n.variant.default||!n.variant.default.contentTypes)&&n.variant.default.contentTypes.includes(e)})},ps=function(){return Xa.get("globalAriaAttrs",function(){return Object.keys(us.ariaAttrs).filter(function(e){return us.ariaAttrs[e].global})})},fs=Aa(function(e){for(var t=[],n=e.rows,r=0,a=n.length;r<a;r++){var o=n[r].cells
t[r]=t[r]||[]
for(var i=0,u=0,s=o.length;u<s;u++)for(var l=0;l<o[u].colSpan;l++){for(var c=o[u].getAttribute("rowspan"),d=0===parseInt(c)||0===o[u].rowspan?n.length:o[u].rowSpan,p=0;p<d;p++){for(t[r+p]=t[r+p]||[];t[r+p][i];)i++
t[r+p][i]=o[u]}i++}}return t}),hs=Aa(function(e,t){var n,r
for(t||(t=fs(Ai(e,"table"))),n=0;n<t.length;n++)if(t[n]&&-1!==(r=t[n].indexOf(e)))return{x:r,y:n}})
function ms(e){var t=Vh(e),n=t.vNode,r=t.domNode,a=n.attr("scope"),o=n.attr("role")
if(!["td","th"].includes(n.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===o)return"col"
if("rowheader"===o)return"row"
if("col"===a||"row"===a)return a
if("th"!==n.props.nodeName)return!1
if(!n.actualNode)return"auto"
var i=fs(Ai(r,"table")),u=hs(r,i)
return i[u.y].every(function(e){return"TH"===e.nodeName.toUpperCase()})?"col":i.map(function(e){return e[u.x]}).every(function(e){return e&&"TH"===e.nodeName.toUpperCase()})?"row":"auto"}var Ds=function(e){return-1!==["col","auto"].indexOf(ms(e))},gs=function(e){return["row","auto"].includes(ms(e))},vs=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},bs=function(){return Xa.get("sectioningContentSelector",function(){return ds("sectioning").map(function(e){return"".concat(e,":not([role])")}).join(", ")+" , [role=article], [role=complementary], [role=navigation], [role=region]"})},ys=function(){return Xa.get("sectioningContentPlusMainSelector",function(){return bs()+" , main:not([role]), [role=main]"})}
function Fs(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).checkTitle,n=void 0!==t&&t
return!!(vs(ts(e))||vs(ns(e))||n&&1===(null==e?void 0:e.props.nodeType)&&vs(e.attr("title")))}var ws={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:function(e){return yo(e.parent,bs())&&!Fs(e,{checkTitle:!0})?null:"complementary"},body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return yo(e,ys())?null:"contentinfo"},form:function(e){return Fs(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return yo(e,ys())?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),n=ps().find(function(t){return e.hasAttr(t)})
return!t||n||Ku(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var n=Ju(e.actualNode,"list").filter(function(e){return!!e})[0]
t=n&&"datalist"===n.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",meter:"meter",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",search:"search",section:function(e){return Fs(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=yo(e,"table"),n=cs(t)
return["grid","treegrid"].includes(n)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return Ds(e)?"columnheader":gs(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},Es=function(e,t){var n=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===n)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var r=t.substring(1,t.length-1)
return new RegExp(r).test(e)}}return t===e},Cs=function(e,t){return Es(!!Fl(e),t)},xs=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every(function(n){return Es(e(n),t[n])})},As=function(e,t){return e=Vh(e).vNode,xs(function(t){return e.attr(t)},t)}
function ks(e,t){return!!t(e)}var Ts=function(e,t){return Es(cs(e),t)},Ns=function(e,t){return Es(js(e),t)},Rs=function(e,t){return e=Vh(e).vNode,Es(e.props.nodeName,t)},Bs=function(e,t){return e=Vh(e).vNode,xs(function(t){return e.props[t]},t)},_s=function(e,t){return Es(Hs(e),t)},Ss={hasAccessibleName:Cs,attributes:As,condition:ks,explicitRole:Ts,implicitRole:Ns,nodeName:Rs,properties:Bs,semanticRole:_s},Os=function e(t,n){return t=Vh(t).vNode,Array.isArray(n)?n.some(function(n){return e(t,n)}):"string"==typeof n?uo(t,n):Object.keys(n).every(function(e){if(!Ss[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var r=Ss[e],a=n[e]
return r(t,a)})},Ms=function(e,t){return Os(e,t)}
Ms.hasAccessibleName=Cs,Ms.attributes=As,Ms.condition=ks,Ms.explicitRole=Ts,Ms.fromDefinition=Os,Ms.fromFunction=xs,Ms.fromPrimative=Es,Ms.implicitRole=Ns,Ms.nodeName=Rs,Ms.properties=Bs,Ms.semanticRole=_s
var Is=Ms,Ps=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noMatchAccessibleName,n=void 0!==t&&t,r=us.htmlElms[e.props.nodeName]
if(!r)return{}
if(!r.variant)return r
var a=r.variant,o=j(r,d)
for(var i in a)if(a.hasOwnProperty(i)&&"default"!==i){for(var u=a[i],s=u.matches,l=j(u,p),c=Array.isArray(s)?s:[s],f=0;f<c.length&&n;f++)if(c[f].hasOwnProperty("hasAccessibleName"))return r
if(Is(e,s))for(var h in l)l.hasOwnProperty(h)&&(o[h]=l[h])}for(var m in a.default)a.default.hasOwnProperty(m)&&void 0===o[m]&&(o[m]=a.default[m])
return o},js=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).chromium,n=e instanceof na?e:Za(e)
if(e=n.actualNode,!n)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var r=n.props.nodeName,a=ws[r]
return!a&&t?Ps(n).chromiumRole||null:"function"==typeof a?a(n):a||null},qs={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function Ls(e,t){var n=qs[e.props.nodeName]
if(!n)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!n.includes(e.parent.props.nodeName))return null
var r=cs(e.parent,t)
return["none","presentation"].includes(r)&&!$s(e.parent)?r:r?null:Ls(e.parent,t)}function zs(e,t){var n=t.chromium,r=j(t,f),a=js(e,{chromium:n})
return a?Ls(e,r)||a:null}function $s(e){return ps().some(function(t){return e.hasAttr(t)})||Ku(e)}var Hs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noPresentational,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noImplicit,r=j(t,h),a=Vh(e).vNode
if(1!==a.props.nodeType)return null
var o=cs(a,r)
return o?["presentation","none"].includes(o)&&$s(a)?n?null:zs(a,r):o:n?null:zs(a,r)}(e,j(t,m))
return n&&["presentation","none"].includes(r)?null:r},Vs=["iframe"],Us=function(e){var t=Vh(e).vNode
return 1===t.props.nodeType&&e.hasAttr("title")?!Ms(t,Vs)&&["none","presentation"].includes(Hs(t))?"":t.attr("title"):""},Ws=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).strict
if(1!==(e=e instanceof na?e:Za(e)).props.nodeType)return!1
var n=Hs(e),r=us.ariaRoles[n]
return!(!r||!r.nameFromContent)||!t&&(!r||["presentation","none"].includes(n))},Gs=function(e){var t=e.actualNode,n=e.children
if(!n)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var r=Ju(t,"aria-owns").filter(function(e){return!!e}).map(function(e){return i.utils.getNodeFromTree(e)})
return[].concat(q(n),q(r))}return q(n)},Ks={accessibleNameFromFieldValue:["progressbar"]}
function Qs(e){return e=Vh(e).vNode,Ys(e)}var Ys=Aa(function(e,t){return!Ii(e)&&!_u(e,{skipAncestors:!0,isAncestor:t})&&(e.actualNode&&"area"===e.props.nodeName?!zi(e,Ys):!Vi(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||Ys(e.parent,!0)))}),Xs=function e(t,n,r){var a=Vh(t).vNode,o=n?Qs:Ji,i=!t.actualNode||t.actualNode&&o(t),u=a.children.map(function(t){var a=t.props,o=a.nodeType,u=a.nodeValue
if(3===o){if(u&&i)return u}else if(!r)return e(t,n)}).join("")
return vs(u)},Zs=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],Js=function(e){var t=(e=e instanceof na?e:Za(e)).props.nodeName
return"textarea"===t||"input"===t&&!Zs.includes((e.attr("type")||"").toLowerCase())},el=function(e){return"select"===(e=e instanceof na?e:Za(e)).props.nodeName},tl=function(e){return"textbox"===cs(e)},nl=function(e){return"listbox"===cs(e)},rl=function(e){return"combobox"===cs(e)},al=["progressbar","scrollbar","slider","spinbutton"],ol=function(e){var t=cs(e)
return al.includes(t)},il=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],ul={nativeTextboxValue:function(e){var t=Vh(e).vNode
return Js(t)&&t.props.value||""},nativeSelectValue:function(e){var t=Vh(e).vNode
if(!el(t))return""
var n=cm(t,"option"),r=n.filter(function(e){return e.props.selected})
return r.length||r.push(n[0]),r.map(function(e){return Xs(e)}).join(" ")||""},ariaTextboxValue:function(e){var t=Vh(e),n=t.vNode,r=t.domNode
return tl(n)?!r||r&&!Vi(r)?Xs(n,!0):r.textContent:""},ariaListboxValue:sl,ariaComboboxValue:function(e,t){var n=Vh(e).vNode
if(!rl(n))return""
var r=Gs(n).filter(function(e){return"listbox"===Hs(e)})[0]
return r?sl(r,t):""},ariaRangeValue:function(e){var t=Vh(e).vNode
if(!ol(t)||!t.hasAttr("aria-valuenow"))return""
var n=+t.attr("aria-valuenow")
return isNaN(n)?"0":String(n)}}
function sl(e,t){var n=Vh(e).vNode
if(!nl(n))return""
var r=Gs(n).filter(function(e){return"option"===Hs(e)&&"true"===e.attr("aria-selected")})
return 0===r.length?"":Fl(r[0],t)}var ll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode,r=Ks.accessibleNameFromFieldValue||[],a=Hs(e)
if(t.startNode===e||!il.includes(a)||r.includes(a))return""
var o=Object.keys(ul).map(function(e){return ul[e]}).reduce(function(n,r){return n||r(e,t)},"")
return t.debug&&ea(o||"{empty-value}",n,t),o},cl=ds("phrasing").concat(["#text"]),dl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Fl.alreadyProcessed
t.startNode=t.startNode||e
var r=t,a=r.strict,o=r.inControlContext,i=r.inLabelledByContext,u=Hs(e),s=Ps(e,{noMatchAccessibleName:!0}).contentTypes
return n(e,t)||1!==e.props.nodeType||null!=s&&s.includes("embedded")||il.includes(u)?"":t.subtreeDescendant||t.inLabelledByContext||Ws(e,{strict:a})?(a||(t=z({subtreeDescendant:!o&&!i},t)),Gs(e).reduce(function(e,n){return function(e,t,n){var r=t.props.nodeName,a=Fl(t,n)
return a?(cl.includes(r)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}(e,n,t)},"")):""},pl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Fl.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||n(e,t))return""
t.startNode||(t.startNode=e)
var r,a=z({inControlContext:!0},t),o=function(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return Ci({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}(e),i=yo(e,"label")
return i?(r=[].concat(q(o),[i.actualNode])).sort(Hh):r=o,r.map(function(e){return es(e,a)}).filter(function(e){return""!==e}).join(" ")},fl={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function hl(e,t){return t.attr(e)||""}function ml(e,t,n){var r=t.actualNode,a=[e=e.toLowerCase(),r.nodeName.toLowerCase()].join(","),o=r.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?es(o,n):""}var Dl={valueText:function(e){return e.props.value||""},buttonDefaultText:function(e){return fl[e.props.type]||""},tableCaptionText:ml.bind(null,"caption"),figureText:ml.bind(null,"figcaption"),svgTitleText:ml.bind(null,"title"),fieldsetLegendText:ml.bind(null,"legend"),altText:hl.bind(null,"alt"),tableSummaryText:hl.bind(null,"summary"),titleText:Us,subtreeText:dl,labelText:pl,singleSpace:function(){return" "},placeholderText:hl.bind(null,"placeholder")}
function gl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(Hs(e)))return""
var r=function(e){return(Ps(e,{noMatchAccessibleName:!0}).namingMethods||[]).map(function(e){return Dl[e]})}(e),a=r.reduce(function(n,r){return n||r(e,t)},"")
return t.debug&&i.log(a||"{empty-value}",n,t),a}var vl=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},bl=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations,o=!1
return n&&(o||(o=/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(e))),r&&(o||(o=/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e)||/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g.test(e))),a&&(o||(o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e))),o}
function yl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!vs(o)||bl(o,{emoji:!0,nonBmp:!0}))return!1
var i=Xa.get("canvasContext",function(){return a.createElement("canvas").getContext("2d",{willReadFrequently:!0})}),u=i.canvas,s=Xa.get("fonts",function(){return{}}),l=n.getComputedStyle(e.parent.actualNode).getPropertyValue("font-family")
s[l]||(s[l]={occurrences:0,numLigatures:0})
var c=s[l]
if(c.occurrences>=r){if(c.numLigatures/c.occurrences===1)return!0
if(0===c.numLigatures)return!1}c.occurrences++
var d=30,p="".concat(d,"px ").concat(l)
i.font=p
var f=o.charAt(0),h=i.measureText(f).width
if(0===h)return c.numLigatures++,!0
if(h<30){var m=30/h
h*=m,p="".concat(d*=m,"px ").concat(l)}u.width=h,u.height=d,i.font=p,i.textAlign="left",i.textBaseline="top",i.fillText(f,0,0)
var D=new Uint32Array(i.getImageData(0,0,h,d).data.buffer)
if(!D.some(function(e){return e}))return c.numLigatures++,!0
i.clearRect(0,0,h,d),i.fillText(o,0,0)
var g=new Uint32Array(i.getImageData(0,0,h,d).data.buffer),v=D.reduce(function(e,t,n){return 0===t&&0===g[n]||0!==t&&0!==g[n]?e:++e},0),b=o.split("").reduce(function(e,t){return e+i.measureText(t).width},0),y=i.measureText(o).width
return v/D.length>=t&&1-y/b>=t&&(c.numLigatures++,!0)}function Fl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=function(e,t){return t.startNode||(t=z({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=z({includeHidden:!Qs(e)},t)),t}(e,t),function(e,t){return!!e&&1===e.props.nodeType&&!t.includeHidden&&!Qs(e)}(e,t))return""
if(function(e,t){var n,r=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(n=t.occurrenceThreshold)&&void 0!==n?n:t.occuranceThreshold
return!(3!==e.props.nodeType||!r)&&yl(e,a,o)}(e,t))return""
var n=[ts,ns,gl,ll,dl,wl,Us].reduce(function(n,r){return t.startNode===e&&(n=vs(n)),""!==n?n:r(e,t)},"")
return t.debug&&i.log(n||"{empty-value}",e.actualNode,t),n}function wl(e){return 3!==e.props.nodeType?"":e.props.nodeValue}Fl.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var El=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n&&(e=e.replace(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,"")),r&&(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"").replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"").replace(/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},Cl=function(e){return function(e){return 0===vs(e).length}(e)||function(e){return 1===e.length&&e.match(/\D/)}(e)||function(e){return["aa","abc"].includes(e.toLowerCase())}(e)||function(e){var t=El(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return!vs(t)}(e)?0:1},xl={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},Al=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.looseTyped,r=void 0!==n&&n,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,u=void 0===i?[]:i,s=t.qualifiers,l=void 0===s?[]:s,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p,h=t.ignoredValues,m=void 0===h?[]:h
if(e=e.toLowerCase().trim(),(o=o.concat(xl.stateTerms)).includes(e)||""===e)return!0
l=l.concat(xl.qualifiers),u=u.concat(xl.locations),d=d.concat(xl.standaloneTerms),f=f.concat(xl.qualifiedTerms)
var D=e.split(/\s+/g)
if("webauthn"===D[D.length-1]&&(D.pop(),0===D.length))return!1
if(!r&&(D[0].length>8&&"section-"===D[0].substr(0,8)&&D.shift(),u.includes(D[0])&&D.shift(),l.includes(D[0])&&(D.shift(),d=[]),1!==D.length))return!1
var g=D[D.length-1]
return m.includes(g)?void 0:d.includes(g)||f.includes(g)},kl=function(e){var t
return e.attr("aria-labelledby")&&(t=Ju(e.actualNode,"aria-labelledby").map(function(e){var t=Za(e)
return t?Xs(t):""}).join(" ").trim())||(t=e.attr("aria-label"))&&(t=vs(t))?t:null},Tl=function(e,t,n){return e=Za(e),Xs(e,t,n)},Nl=function(e){var t,n
if(n=kl(e))return n
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var r=va(e.attr("id"))
if(n=(t=Ei(e.actualNode).querySelector('label[for="'+r+'"]'))&&Tl(t,!0))return n}return(n=(t=yo(e,"label"))&&Xs(t,!0))||null},Rl=function(e){return e=Za(e),Nl(e)},Bl=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],_l=function e(t){var n=Ji(t),r=[]
return t.children.forEach(function(t){3===t.actualNode.nodeType?n&&r.push(t):r=r.concat(e(t))}),r},Sl=Aa(function(e){var t=Za(e),n=t.boundingClientRect,r=[],o=Ni(t)
return e.childNodes.forEach(function(e){if(3===e.nodeType&&""!==vs(e.nodeValue)){var t=function(e){var t=a.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some(function(e){return!nu(ou(e),t)})})(t,n)||r.push.apply(r,q(Ol(t,o)))}}),r.length?r:Ol([n],o)})
function Ol(e,t){var n=[]
return e.forEach(function(e){if(!(e.width<1||e.height<1)){var r=t.reduce(function(e,t){return e&&au(e,t.boundingClientRect)},e)
r&&n.push(r)}}),n}var Ml=function(e){yu()
var t=Za(e)._grid
return t?Sl(e).map(function(e){return Vu(t,e)}):[]},Il=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],Pl=function(e){var t=Vh(e).vNode,n=i.commons.aria.getExplicitRole(t)
if(n)return-1!==Il.indexOf(n)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},jl=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function ql(e){return!jl.includes(e.props.nodeName)&&e.children.some(function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()})}var Ll=function e(t,n,r){return ql(t)||Pl(t.actualNode)||!r&&!!kl(t)||!n&&t.children.some(function(t){return 1===t.actualNode.nodeType&&e(t)})},zl=function(e,t,n){return e=Za(e),Ll(e,t,n)}
function $l(e){return!(void 0!==e.children&&!ql(e))||(1===e.props.nodeType&&Pl(e)?!!i.commons.text.accessibleTextVirtual(e):e.children.some(function(e){return!e.attr("lang")&&$l(e)&&!Vi(e)}))}var Hl=function(e){return Kh(e.getAttribute("tabindex"))>-1&&Ku(e)&&!Gu(e)}
function Vl(e,t){var n=Vh(e),r=n.vNode,a=n.domNode
return r?(void 0===r._isHiddenWithCSS&&(r._isHiddenWithCSS=Ul(a,t)),r._isHiddenWithCSS):Ul(a,t)}function Ul(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=n.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=r.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=Gi(e)
return!(!i||a.includes(o))&&Vl(i,o)}var Wl=Vl,Gl=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId},Kl=function(e){var t;(e instanceof na||null!==(t=n)&&void 0!==t&&t.Node&&e instanceof n.Node)&&(e=i.commons.aria.getRole(e))
var r=us.ariaRoles[e]
return(null==r?void 0:r.type)||null}
function Ql(e,t){!1!==t(e.actualNode)&&e.children.forEach(function(e){return Ql(e,t)})}var Yl=["block","list-item","table","flex","grid","inline-block"]
function Xl(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return Yl.includes(t)||"table-"===t.substr(0,6)}var Zl=function(e,t){if(Xl(e))return!1
var n=function(e){for(var t=Gi(e);t&&!Xl(t);)t=Gi(t)
return Za(t)}(e),r="",a="",o=0
return Ql(n,function(t){if(2===o)return!1
if(3===t.nodeType&&(r+=t.nodeValue),1===t.nodeType){var n=(t.nodeName||"").toUpperCase()
if(t===e&&(o=1),["BR","HR"].includes(n))0===o?(r="",a=""):o=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("widget"===Kl(t))return a+=t.textContent,!1}}}),r=vs(r),null!=t&&t.noLengthCompare?0!==r.length:(a=vs(a),r.length>a.length)},Jl=function(e){var t=(e=e||{}).modalPercent||.75
if(Xa.get("isModalOpen"))return Xa.get("isModalOpen")
if(Jh(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",Ji).length)return Xa.set("isModalOpen",!0),!0
for(var r,o=Yi(n),u=o.width*t,s=o.height*t,l=(o.width-u)/2,c=(o.height-s)/2,d=[{x:l,y:c},{x:o.width-l,y:c},{x:o.width/2,y:o.height/2},{x:l,y:o.height-c},{x:o.width-l,y:o.height-c}].map(function(e){return Array.from(a.elementsFromPoint(e.x,e.y))}),p=function(){var e=d[f].find(function(e){var t=n.getComputedStyle(e)
return parseInt(t.width,10)>=u&&parseInt(t.height,10)>=s&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)})
if(e&&d.every(function(t){return t.includes(e)}))return Xa.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++)if(r=p())return r.v
Xa.set("isModalOpen",void 0)}
function ec(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.ownerDocument.createRange()
n.setStart(e,0),n.setEnd(e,e.childNodes.length)
var r,a=0,o=0,i=Q(n.getClientRects())
try{for(i.s();!(r=i.n()).done;){var u=r.value
if(!(u.height<=t))if(a>u.top+t)a=Math.max(a,u.bottom)
else{if(0!==o)return!0
a=u.bottom,o++}}}catch(e){i.e(e)}finally{i.f()}return!1}var tc=function(e){return e instanceof n.Node},nc="color.incompleteData",rc={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
var n=Xa.get(nc,function(){return{}})
return t&&(n[e]=t),n[e]},get:function(e){var t=Xa.get(nc)
return null==t?void 0:t[e]},clear:function(){Xa.set(nc,{})}},ac=rc,oc=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return ac.set("bgColor","imgNode"),!0
var a=(t=t||n.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
ac.set("bgColor",i?"bgGradient":"bgImage")}return o},ic={}
ce(ic,{ArrayFrom:function(){return hf.default},Colorjs:function(){return sf},CssSelectorParser:function(){return pc.CssSelectorParser},doT:function(){return fc.default},emojiRegexText:function(){return vl},memoize:function(){return hc.default}})
var uc=de(Gt()),sc=de(Kt()),lc=(de(Qt()),de(Yn())),cc=de(hr()),dc=de(Yr())
"hasOwn"in Object||(Object.hasOwn=lc.default),"values"in Object||(Object.values=cc.default),"Promise"in n||uc.default.polyfill(),"Uint32Array"in n||(n.Uint32Array=sc.Uint32Array),n.Uint32Array&&("some"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce})),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
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
return!1}}),Array.from||(Array.from=dc.default),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n},[]):Array.prototype.slice.call(this)},writable:!0}),n.Node&&!("isConnected"in n.Node.prototype)&&Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var pc=de(Wt()),fc=de(Xr()),hc=de($t())
function mc(e,t){var n=e.length
Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(function(e){return[e]}))
var r=t[0].length,a=t[0].map(function(e,n){return t.map(function(e){return e[n]})}),o=e.map(function(e){return a.map(function(t){var n=0
if(!Array.isArray(e)){var r,a=Q(t)
try{for(a.s();!(r=a.n()).done;){var o=r.value
n+=e*o}}catch(e){a.e(e)}finally{a.f()}return n}for(var i=0;i<e.length;i++)n+=e[i]*(t[i]||0)
return n})})
return 1===n&&(o=o[0]),1===r?o.map(function(e){return e[0]}):o}function Dc(e){return"string"===gc(e)}function gc(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function vc(e,t){e=+e,t=+t
var n=(Math.floor(e)+"").length
if(t>n)return+e.toFixed(t-n)
var r=Math.pow(10,n-t)
return Math.round(e/r)*r}function bc(e){if(e){e=e.trim()
var t=/^-?[\d.]+$/,n=e.match(/^([a-z]+)\((.+?)\)$/i)
if(n){var r=[]
return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,function(e,n){/%$/.test(n)?(n=new Number(n.slice(0,-1)/100)).type="<percentage>":/deg$/.test(n)?((n=new Number(+n.slice(0,-3))).type="<angle>",n.unit="deg"):t.test(n)&&((n=new Number(n)).type="<number>"),e.startsWith("/")&&((n=n instanceof Number?n:new Number(n)).alpha=!0),r.push(n)}),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:r}}}}function yc(e){return e[e.length-1]}function Fc(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function wc(e,t,n){return(n-e)/(t-e)}function Ec(e,t,n){return Fc(t[0],t[1],wc(e[0],e[1],n))}function Cc(e){return e.map(function(e){return e.split("|").map(function(e){var t=(e=e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/)
if(t){var n=new String(t[1])
return n.range=[+t[2],+t[3]],n}return e})})}var xc=Object.freeze({__proto__:null,isString:Dc,type:gc,toPrecision:vc,parseFunction:bc,last:yc,interpolate:Fc,interpolateInv:wc,mapRange:Ec,parseCoordGrammar:Cc,multiplyMatrices:mc}),Ac=G(function e(){U(this,e)},[{key:"add",value:function(e,t,n){if("string"==typeof arguments[0])(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?"unshift":"push"](t)},this)
else for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1])}},{key:"run",value:function(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}}]),kc=new Ac,Tc={gamut_mapping:"lch.c",precision:5,deltaE:"76"},Nc={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]}
function Rc(e){return Array.isArray(e)?e:Nc[e]}function Bc(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(e=Rc(e),t=Rc(t),!e||!t)throw new TypeError("Missing white point to convert ".concat(e?"":"from").concat(e||t?"":"/").concat(t?"":"to"))
if(e===t)return n
var a={W1:e,W2:t,XYZ:n,options:r}
if(kc.run("chromatic-adaptation-start",a),a.M||(a.W1===Nc.D65&&a.W2===Nc.D50?a.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:a.W1===Nc.D50&&a.W2===Nc.D65&&(a.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),kc.run("chromatic-adaptation-end",a),a.M)return mc(a.M,a.XYZ)
throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var _c=(e=new WeakSet,t=new WeakMap,G(function n(r){var a,o,i,u,s,l,c
U(this,n),S(this,e),_(this,t,void 0),this.id=r.id,this.name=r.name,this.base=r.base?_c.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase)
var d=null!==(a=r.coords)&&void 0!==a?a:this.base.coords
this.coords=d
var p=null!==(o=null!==(i=r.white)&&void 0!==i?i:this.base.white)&&void 0!==o?o:"D65"
for(var f in this.white=Rc(p),this.formats=null!==(u=r.formats)&&void 0!==u?u:{},this.formats){var h=this.formats[f]
h.type||(h.type="function"),h.name||(h.name=f)}!r.cssId||null!==(s=this.formats.functions)&&void 0!==s&&s.color?null===(l=this.formats)||void 0===l||!l.color||null!==(c=this.formats)&&void 0!==c&&c.color.id||(this.formats.color.id=this.id):(this.formats.color={id:r.cssId},Object.defineProperty(this,"cssId",{value:r.cssId})),this.referred=r.referred,I(t,this,P(e,this,Oc).call(this).reverse()),kc.run("colorspace-init-end",this)},[{key:"inGamut",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).epsilon,n=void 0===t?75e-6:t
if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:n})
var r=Object.values(this.coords)
return e.every(function(e,t){var a=r[t]
if("angle"!==a.type&&a.range){if(Number.isNaN(e))return!0
var o=$(a.range,2),i=o[0],u=o[1]
return(void 0===i||e>=i-n)&&(void 0===u||e<=u+n)}return!0})}},{key:"cssId",get:function(){var e
return(null===(e=this.formats.functions)||void 0===e||null===(e=e.color)||void 0===e?void 0:e.id)||this.id}},{key:"isPolar",get:function(){for(var e in this.coords)if("angle"===this.coords[e].type)return!0
return!1}},{key:"getFormat",value:function(t){return"object"===o(t)?t=P(e,this,Sc).call(this,t):(n="default"===t?Object.values(this.formats)[0]:this.formats[t])?n=P(e,this,Sc).call(this,n):null
var n}},{key:"to",value:function(e,n){if(1===arguments.length){var r=[e.space,e.coords]
e=r[0],n=r[1]}if(this===(e=_c.get(e)))return n
n=n.map(function(e){return Number.isNaN(e)?0:e})
for(var a,o,i=M(t,this),u=M(t,e),s=0;s<i.length&&i[s]===u[s];s++)a=i[s],o=s
if(!a)throw new Error("Cannot convert between color spaces ".concat(this," and ").concat(e,": no connection space was found"))
for(var l=i.length-1;l>o;l--)n=i[l].toBase(n)
for(var c=o+1;c<u.length;c++)n=u[c].fromBase(n)
return n}},{key:"from",value:function(e,t){if(1===arguments.length){var n=[e.space,e.coords]
e=n[0],t=n[1]}return(e=_c.get(e)).to(this,t)}},{key:"toString",value:function(){return"".concat(this.name," (").concat(this.id,")")}},{key:"getMinCoords",value:function(){var e=[]
for(var t in this.coords){var n,r=this.coords[t],a=r.range||r.refRange
e.push(null!==(n=null==a?void 0:a.min)&&void 0!==n?n:0)}return e}}],[{key:"all",get:function(){return q(new Set(Object.values(_c.registry)))}},{key:"register",value:function(e,t){if(1===arguments.length&&(e=(t=arguments[0]).id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error("Duplicate color space registration: '".concat(e,"'"))
if(this.registry[e]=t,1===arguments.length&&t.aliases){var n,r=Q(t.aliases)
try{for(r.s();!(n=r.n()).done;){var a=n.value
this.register(a,t)}}catch(e){r.e(e)}finally{r.f()}}return t}},{key:"get",value:function(e){if(!e||e instanceof _c)return e
if("string"===gc(e)){var t=_c.registry[e.toLowerCase()]
if(!t)throw new TypeError('No color space found with id = "'.concat(e,'"'))
return t}for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a]
if(r.length)return _c.get.apply(_c,r)
throw new TypeError("".concat(e," is not a valid color space"))}},{key:"resolveCoord",value:function(e,t){var n,r,a=gc(e)
if("string"===a)if(e.includes(".")){var o=$(e.split("."),2)
n=o[0],r=o[1]}else n=void 0,r=e
else if(Array.isArray(e)){var i=$(e,2)
n=i[0],r=i[1]}else n=e.space,r=e.coordId
if((n=_c.get(n))||(n=t),!n)throw new TypeError("Cannot resolve coordinate reference ".concat(e,": No color space specified and relative references are not allowed here"))
if("number"===(a=gc(r))||"string"===a&&r>=0){var u=Object.entries(n.coords)[r]
if(u)return z({space:n,id:u[0],index:r},u[1])}n=_c.get(n)
var s=r.toLowerCase(),l=0
for(var c in n.coords){var d,p=n.coords[c]
if(c.toLowerCase()===s||(null===(d=p.name)||void 0===d?void 0:d.toLowerCase())===s)return z({space:n,id:c,index:l},p)
l++}throw new TypeError('No "'.concat(r,'" coordinate found in ').concat(n.name,". Its coordinates are: ").concat(Object.keys(n.coords).join(", ")))}}]))
function Sc(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Cc(e.coords)
var t=Object.entries(this.coords).map(function(t,n){var r=$(t,2),a=(r[0],r[1]),o=e.coordGrammar[n][0],i=a.range||a.refRange,u=o.range,s=""
return"<percentage>"==o?(u=[0,100],s="%"):"<angle>"==o&&(s="deg"),{fromRange:i,toRange:u,suffix:s}})
e.serializeCoords=function(e,n){return e.map(function(e,r){var a=t[r],o=a.fromRange,i=a.toRange,u=a.suffix
return o&&i&&(e=Ec(o,i,e)),e=vc(e,n),u&&(e+=u),e})}}return e}function Oc(){for(var e=[this],t=this;t=t.base;)e.push(t)
return e}var Mc=_c
pe(Mc,"registry",{}),pe(Mc,"DEFAULT_FORMAT",{type:"functions",name:"color"})
var Ic=new Mc({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Pc=function(e){function t(e){var n,r,a,o
return U(this,t),e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Ic),e.toXYZ_M&&e.fromXYZ_M&&(null!==(a=e.toBase)&&void 0!==a||(e.toBase=function(t){var n=mc(e.toXYZ_M,t)
return r.white!==r.base.white&&(n=Bc(r.white,r.base.white,n)),n}),null!==(o=e.fromBase)&&void 0!==o||(e.fromBase=function(t){return t=Bc(r.base.white,r.white,t),mc(e.fromXYZ_M,t)})),null!==(n=e.referred)&&void 0!==n||(e.referred="display"),r=k(this,t,[e])}return R(t,e),G(t)}(Mc)
function jc(e){var t,n={str:null===(t=String(e))||void 0===t?void 0:t.trim()}
if(kc.run("parse-start",n),n.color)return n.color
if(n.parsed=bc(n.str),n.parsed){var r=n.parsed.name
if("color"===r){var a,o=n.parsed.args.shift(),i=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1,u=Q(Mc.all)
try{var s,l=function(){var e,t=a.value,r=t.getFormat("color")
if(r&&(o===r.id||null!==(e=r.ids)&&void 0!==e&&e.includes(o))){var u=Object.keys(t.coords).length,s=Array(u).fill(0)
return s.forEach(function(e,t){return s[t]=n.parsed.args[t]||0}),{v:{spaceId:t.id,coords:s,alpha:i}}}}
for(u.s();!(a=u.n()).done;)if(s=l())return s.v}catch(e){u.e(e)}finally{u.f()}var c=""
if(o in Mc.registry){var d,p=null===(d=Mc.registry[o].formats)||void 0===d||null===(d=d.functions)||void 0===d||null===(d=d.color)||void 0===d?void 0:d.id
p&&(c="Did you mean color(".concat(p,")?"))}throw new TypeError("Cannot parse color(".concat(o,"). ")+(c||"Missing a plugin?"))}var f,h=Q(Mc.all)
try{var m,D=function(){var e=f.value,t=e.getFormat(r)
if(t&&"function"===t.type){var a=1;(t.lastAlpha||yc(n.parsed.args).alpha)&&(a=n.parsed.args.pop())
var o=n.parsed.args
return t.coordGrammar&&Object.entries(e.coords).forEach(function(e,n){var a,i=$(e,2),u=i[0],s=i[1],l=t.coordGrammar[n],c=null===(a=o[n])||void 0===a?void 0:a.type
if(!(l=l.find(function(e){return e==c}))){var d=s.name||u
throw new TypeError("".concat(c," not allowed for ").concat(d," in ").concat(r,"()"))}var p=l.range
"<percentage>"===c&&(p||(p=[0,1]))
var f=s.range||s.refRange
p&&f&&(o[n]=Ec(p,f,o[n]))}),{v:{spaceId:e.id,coords:o,alpha:a}}}}
for(h.s();!(f=h.n()).done;)if(m=D())return m.v}catch(e){h.e(e)}finally{h.f()}}else{var g,v=Q(Mc.all)
try{for(v.s();!(g=v.n()).done;){var b=g.value
for(var y in b.formats){var F=b.formats[y]
if("custom"===F.type&&(!F.test||F.test(n.str))){var w,E=F.parse(n.str)
if(E)return null!==(w=E.alpha)&&void 0!==w||(E.alpha=1),E}}}}catch(e){v.e(e)}finally{v.f()}}throw new TypeError("Could not parse ".concat(e," as a color. Missing a plugin?"))}function qc(e){if(!e)throw new TypeError("Empty color reference")
Dc(e)&&(e=jc(e))
var t=e.space||e.spaceId
return t instanceof Mc||(e.space=Mc.get(t)),void 0===e.alpha&&(e.alpha=1),e}function Lc(e,t){return(t=Mc.get(t)).from(e)}function zc(e,t){var n=Mc.resolveCoord(t,e.space),r=n.space,a=n.index
return Lc(e,r)[a]}function $c(e,t,n){return t=Mc.get(t),e.coords=t.to(e.space,n),e}function Hc(e,t,n){if(e=qc(e),2===arguments.length&&"object"===gc(arguments[1])){var r=arguments[1]
for(var a in r)Hc(e,a,r[a])}else{"function"==typeof n&&(n=n(zc(e,t)))
var o=Mc.resolveCoord(t,e.space),i=o.space,u=o.index,s=Lc(e,i)
s[u]=n,$c(e,i,s)}return e}var Vc=new Mc({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ic,fromBase:function(e){return Bc(Ic.white,"D50",e)},toBase:function(e){return Bc("D50",Ic.white,e)},formats:{color:{}}}),Uc=216/24389,Wc=24/116,Gc=24389/27,Kc=Nc.D50,Qc=new Mc({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Kc,base:Vc,fromBase:function(e){var t=e.map(function(e,t){return e/Kc[t]}).map(function(e){return e>Uc?Math.cbrt(e):(Gc*e+16)/116})
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Wc?Math.pow(t[0],3):(116*t[0]-16)/Gc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Gc,t[2]>Wc?Math.pow(t[2],3):(116*t[2]-16)/Gc].map(function(e,t){return e*Kc[t]})},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}})
function Yc(e){return(e%360+360)%360}var Xc=new Mc({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qc,fromBase:function(e){var t,n=$(e,3),r=n[0],a=n[1],o=n[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Yc(t)]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
return r<0&&(r=0),isNaN(a)&&(a=0),[n,r*Math.cos(a*Math.PI/180),r*Math.sin(a*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),Zc=Math.pow(25,7),Jc=Math.PI,ed=180/Jc,td=Jc/180
function nd(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.kL,a=void 0===r?1:r,o=n.kC,i=void 0===o?1:o,u=n.kH,s=void 0===u?1:u,l=$(Qc.from(e),3),c=l[0],d=l[1],p=l[2],f=Xc.from(Qc,[c,d,p])[1],h=$(Qc.from(t),3),m=h[0],D=h[1],g=h[2],v=Xc.from(Qc,[m,D,g])[1]
f<0&&(f=0),v<0&&(v=0)
var b=(f+v)/2,y=Math.pow(b,7),F=.5*(1-Math.sqrt(y/(y+Zc))),w=(1+F)*d,E=(1+F)*D,C=Math.sqrt(Math.pow(w,2)+Math.pow(p,2)),x=Math.sqrt(Math.pow(E,2)+Math.pow(g,2)),A=0===w&&0===p?0:Math.atan2(p,w),k=0===E&&0===g?0:Math.atan2(g,E)
A<0&&(A+=2*Jc),k<0&&(k+=2*Jc)
var T,N=m-c,R=x-C,B=(k*=ed)-(A*=ed),_=A+k,S=Math.abs(B)
C*x===0?T=0:S<=180?T=B:B>180?T=B-360:B<-180?T=B+360:console.log("the unthinkable has happened")
var O,M=2*Math.sqrt(x*C)*Math.sin(T*td/2),I=(c+m)/2,P=(C+x)/2,j=Math.pow(P,7)
O=C*x===0?_:S<=180?_/2:_<360?(_+360)/2:(_-360)/2
var q=Math.pow(I-50,2),L=1+.015*q/Math.sqrt(20+q),z=1+.045*P,H=1
H-=.17*Math.cos((O-30)*td),H+=.24*Math.cos(2*O*td),H+=.32*Math.cos((3*O+6)*td)
var V=1+.015*P*(H-=.2*Math.cos((4*O-63)*td)),U=30*Math.exp(-1*Math.pow((O-275)/25,2)),W=2*Math.sqrt(j/(j+Zc)),G=-1*Math.sin(2*U*td)*W,K=Math.pow(N/(a*L),2)
return K+=Math.pow(R/(i*z),2),K+=Math.pow(M/(s*V),2),K+=G*(R/(i*z))*(M/(s*V)),Math.sqrt(K)}function rd(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.space,n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).epsilon,r=void 0===n?75e-6:n
e=qc(e),t=Mc.get(t)
var a=e.coords
return t!==e.space&&(a=t.from(e)),t.inGamut(a,{epsilon:r})}function ad(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function od(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,r=void 0===n?Tc.gamut_mapping:n,a=t.space,o=void 0===a?e.space:a
if(Dc(arguments[1])&&(o=arguments[1]),rd(e,o=Mc.get(o),{epsilon:0}))return e
var i=id(e,o)
if("clip"!==r&&!rd(e,o)){var u=od(ad(i),{method:"clip",space:o})
if(nd(e,u)>2){for(var s=Mc.resolveCoord(r),l=s.space,c=s.id,d=id(i,l),p=(s.range||s.refRange)[0],f=zc(d,c);f-p>.01;){var h=ad(d)
nd(d,h=od(h,{space:o,method:"clip"}))-2<.01?p=zc(d,c):f=zc(d,c),Hc(d,c,(p+f)/2)}i=id(d,o)}else i=u}if("clip"===r||!rd(i,o,{epsilon:0})){var m=Object.values(o.coords).map(function(e){return e.range||[]})
i.coords=i.coords.map(function(e,t){var n=$(m[t],2),r=n[0],a=n[1]
return void 0!==r&&(e=Math.max(r,e)),void 0!==a&&(e=Math.min(e,a)),e})}return o!==e.space&&(i=id(i,e.space)),e.coords=i.coords,e}function id(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).inGamut
e=qc(e)
var r=(t=Mc.get(t)).from(e),a={space:t,coords:r,alpha:e.alpha}
return n&&(a=od(a)),a}function ud(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.precision,i=void 0===o?Tc.precision:o,u=a.format,s=void 0===u?"default":u,l=a.inGamut,c=void 0===l||l,d=j(a,D),p=s
s=null!==(t=null!==(n=(e=qc(e)).space.getFormat(s))&&void 0!==n?n:e.space.getFormat("default"))&&void 0!==t?t:Mc.DEFAULT_FORMAT,c||(c=s.toGamut)
var f=e.coords
if(f=f.map(function(e){return e||0}),c&&!rd(e)&&(f=od(ad(e),!0===c?void 0:c).coords),"custom"===s.type){if(d.precision=i,!s.serialize)throw new TypeError("format ".concat(p," can only be used to parse colors, not for serialization"))
r=s.serialize(f,e.alpha,d)}else{var h=s.name||"color"
s.serializeCoords?f=s.serializeCoords(f,i):null!==i&&(f=f.map(function(e){return vc(e,i)}))
var m=q(f)
if("color"===h){var g,v=s.id||(null===(g=s.ids)||void 0===g?void 0:g[0])||e.space.id
m.unshift(v)}var b=e.alpha
null!==i&&(b=vc(b,i))
var y=e.alpha<1&&!s.noAlpha?"".concat(s.commas?",":" /"," ").concat(b):""
r="".concat(h,"(").concat(m.join(s.commas?", ":" ")).concat(y,")")}return r}od.returns="color",id.returns="color"
var sd=new Pc({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],formats:{color:{}}}),ld=1.09929682680944,cd=.018053968510807,dd=new Pc({id:"rec2020",name:"REC.2020",base:sd,toBase:function(e){return e.map(function(e){return e<4.5*cd?e/4.5:Math.pow((e+ld-1)/ld,1/.45)})},fromBase:function(e){return e.map(function(e){return e>=cd?ld*Math.pow(e,.45)-(ld-1):4.5*e})},formats:{color:{}}}),pd=new Pc({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),fd=new Pc({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ_M:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],formats:{color:{}}}),hd={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[.6,50/255,.8],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,.6],lightslategrey:[119/255,136/255,.6],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[.4,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,.8],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[.4,.2,.6],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},md=Array(3).fill("<percentage> | <number>[0, 255]"),Dd=Array(3).fill("<number>[0, 255]"),gd=new Pc({id:"srgb",name:"sRGB",base:fd,fromBase:function(e){return e.map(function(e){var t=e<0?-1:1,n=e*t
return n>.0031308?t*(1.055*Math.pow(n,1/2.4)-.055):12.92*e})},toBase:function(e){return e.map(function(e){var t=e<0?-1:1,n=e*t
return n<.04045?e/12.92:t*Math.pow((n+.055)/1.055,2.4)})},formats:{rgb:{coords:md},rgb_number:{name:"rgb",commas:!0,coords:Dd,noAlpha:!0},color:{},rgba:{coords:md,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Dd},hex:{type:"custom",toGamut:!0,test:function(e){return/^#([a-f0-9]{3,4}){1,2}$/i.test(e)},parse:function(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"))
var t=[]
return e.replace(/[a-f0-9]{2}/gi,function(e){t.push(parseInt(e,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).collapse,r=void 0===n||n
t<1&&e.push(t),e=e.map(function(e){return Math.round(255*e)})
var a=r&&e.every(function(e){return e%17==0})
return"#"+e.map(function(e){return a?(e/17).toString(16):e.toString(16).padStart(2,"0")}).join("")}},keyword:{type:"custom",test:function(e){return/^[a-z]+$/i.test(e)},parse:function(e){var t={spaceId:"srgb",coords:null,alpha:1}
if("transparent"===(e=e.toLowerCase())?(t.coords=hd.black,t.alpha=0):t.coords=hd[e],t.coords)return t}}}}),vd=new Pc({id:"p3",name:"P3",base:pd,fromBase:gd.fromBase,toBase:gd.toBase,formats:{color:{id:"display-p3"}}})
if(Tc.display_space=gd,"undefined"!=typeof CSS&&null!==(N=CSS)&&void 0!==N&&N.supports)for(var bd=0,yd=[Qc,dd,vd];bd<yd.length;bd++){var Fd=yd[bd],wd=Fd.getMinCoords(),Ed=ud({space:Fd,coords:wd,alpha:1})
if(CSS.supports("color",Ed)){Tc.display_space=Fd
break}}function Cd(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.space,a=void 0===r?Tc.display_space:r,o=j(n,g),i=ud(e,o)
if("undefined"==typeof CSS||null!==(t=CSS)&&void 0!==t&&t.supports("color",i)||!Tc.display_space)(i=new String(i)).color=e
else{var u=id(e,a);(i=new String(ud(u,o))).color=u}return i}function xd(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lab",r=(n=Mc.get(n)).from(e),a=n.from(t)
return Math.sqrt(r.reduce(function(e,t,n){var r=a[n]
return isNaN(t)||isNaN(r)?e:e+Math.pow(r-t,2)},0))}function Ad(e){return zc(e,[Ic,"y"])}function kd(e,t){Hc(e,[Ic,"y"],t)}var Td=Object.freeze({__proto__:null,getLuminance:Ad,setLuminance:kd,register:function(e){Object.defineProperty(e.prototype,"luminance",{get:function(){return Ad(this)},set:function(e){kd(this,e)}})}})
function Nd(e){return e>=.022?e:e+Math.pow(.022-e,1.414)}function Rd(e){var t=e<0?-1:1,n=Math.abs(e)
return t*Math.pow(n,2.4)}var Bd=216/24389,_d=24/116,Sd=24389/27,Od=Nc.D65,Md=new Mc({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Od,base:Ic,fromBase:function(e){var t=e.map(function(e,t){return e/Od[t]}).map(function(e){return e>Bd?Math.cbrt(e):(Sd*e+16)/116})
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_d?Math.pow(t[0],3):(116*t[0]-16)/Sd,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Sd,t[2]>_d?Math.pow(t[2],3):(116*t[2]-16)/Sd].map(function(e,t){return e*Od[t]})},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}}),Id=.5*Math.pow(5,.5)+.5,Pd=Object.freeze({__proto__:null,contrastWCAG21:function(e,t){e=qc(e),t=qc(t)
var n=Math.max(Ad(e),0),r=Math.max(Ad(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return(n+.05)/(r+.05)},contrastAPCA:function(e,t){var n,r,a,o
t=qc(t),e=qc(e)
var i=$((t=id(t,"srgb")).coords,3)
r=i[0],a=i[1],o=i[2]
var u=.2126729*Rd(r)+.7151522*Rd(a)+.072175*Rd(o),s=$((e=id(e,"srgb")).coords,3)
r=s[0],a=s[1],o=s[2]
var l=.2126729*Rd(r)+.7151522*Rd(a)+.072175*Rd(o),c=Nd(u),d=Nd(l),p=d>c
return n=Math.abs(d-c)<5e-4?0:p?1.14*(Math.pow(d,.56)-Math.pow(c,.57)):1.14*(Math.pow(d,.65)-Math.pow(c,.62)),100*(Math.abs(n)<.1?0:n>0?n-.027:n+.027)},contrastMichelson:function(e,t){e=qc(e),t=qc(t)
var n=Math.max(Ad(e),0),r=Math.max(Ad(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}var o=n+r
return 0===o?0:(n-r)/o},contrastWeber:function(e,t){e=qc(e),t=qc(t)
var n=Math.max(Ad(e),0),r=Math.max(Ad(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return 0===r?5e4:(n-r)/r},contrastLstar:function(e,t){e=qc(e),t=qc(t)
var n=zc(e,[Qc,"l"]),r=zc(t,[Qc,"l"])
return Math.abs(n-r)},contrastDeltaPhi:function(e,t){e=qc(e),t=qc(t)
var n=zc(e,[Md,"l"]),r=zc(t,[Md,"l"]),a=Math.abs(Math.pow(n,Id)-Math.pow(r,Id)),o=Math.pow(a,1/Id)*Math.SQRT2-40
return o<7.5?0:o}})
function jd(e){var t=$(Lc(e,Ic),3),n=t[0],r=t[1],a=n+15*r+3*t[2]
return[4*n/a,9*r/a]}function qd(e){var t=$(Lc(e,Ic),3),n=t[0],r=t[1],a=n+r+t[2]
return[n/a,r/a]}var Ld=Object.freeze({__proto__:null,uv:jd,xy:qd,register:function(e){Object.defineProperty(e.prototype,"uv",{get:function(){return jd(this)}}),Object.defineProperty(e.prototype,"xy",{get:function(){return qd(this)}})}}),zd=Math.PI/180,$d=new Mc({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ic,fromBase:function(e){return e.map(function(e){return Math.max(203*e,0)})},toBase:function(e){return e.map(function(e){return Math.max(e/203,0)})}}),Hd=1.15,Vd=.66,Ud=2610/Math.pow(2,14),Wd=Math.pow(2,14)/2610,Gd=3424/Math.pow(2,12),Kd=2413/Math.pow(2,7),Qd=2392/Math.pow(2,7),Yd=1.7*2523/Math.pow(2,5),Xd=Math.pow(2,5)/(1.7*2523),Zd=-.56,Jd=16295499532821565e-27,ep=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],tp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],np=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],rp=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],ap=new Mc({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:$d,fromBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=mc(ep,[Hd*n-(Hd-1)*a,Vd*r-(Vd-1)*n,a]).map(function(e){var t=Gd+Kd*Math.pow(e/1e4,Ud),n=1+Qd*Math.pow(e/1e4,Ud)
return Math.pow(t/n,Yd)}),i=$(mc(np,o),3),u=i[0],s=i[1],l=i[2]
return[(1+Zd)*u/(1+Zd*u)-Jd,s,l]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=mc(rp,[(n+Jd)/(1+Zd-Zd*(n+Jd)),r,a]).map(function(e){var t=Gd-Math.pow(e,Xd),n=Qd*Math.pow(e,Xd)-Kd
return 1e4*Math.pow(t/n,Wd)}),i=$(mc(tp,o),3),u=i[0],s=i[1],l=i[2],c=(u+(Hd-1)*l)/Hd
return[c,(s+(Vd-1)*c)/Vd,l]},formats:{color:{}}}),op=new Mc({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ap,fromBase:function(e){var t,n=$(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Yc(t)]},toBase:function(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}}),ip=.8359375,up=2413/128,sp=18.6875,lp=2610/16384,cp=16384/2610,dp=32/2523,pp=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],fp=[[.5,.5,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],hp=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],mp=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]],Dp=new Mc({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:$d,fromBase:function(e){return t=mc(pp,e).map(function(e){var t=ip+up*Math.pow(e/1e4,lp),n=1+sp*Math.pow(e/1e4,lp)
return Math.pow(t/n,78.84375)}),mc(fp,t)
var t},toBase:function(e){var t=function(e){return mc(hp,e).map(function(e){var t=Math.max(Math.pow(e,dp)-ip,0),n=up-sp*Math.pow(e,dp)
return 1e4*Math.pow(t/n,cp)})}(e)
return mc(mp,t)},formats:{color:{}}}),gp=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],vp=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],bp=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],yp=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],Fp=new Mc({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ic,fromBase:function(e){var t=mc(gp,e).map(function(e){return Math.cbrt(e)})
return mc(bp,t)},toBase:function(e){var t=mc(yp,e).map(function(e){return Math.pow(e,3)})
return mc(vp,t)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}}),wp=Object.freeze({__proto__:null,deltaE76:function(e,t){return xd(e,t,"lab")},deltaECMC:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.l,a=void 0===r?2:r,o=n.c,i=void 0===o?1:o,u=$(Qc.from(e),3),s=u[0],l=u[1],c=u[2],d=$(Xc.from(Qc,[s,l,c]),3),p=d[1],f=d[2],h=$(Qc.from(t),3),m=h[0],D=h[1],g=h[2],v=Xc.from(Qc,[m,D,g])[1]
p<0&&(p=0),v<0&&(v=0)
var b=s-m,y=p-v,F=l-D,w=c-g,E=Math.pow(F,2)+Math.pow(w,2)-Math.pow(y,2),C=.511
s>=16&&(C=.040975*s/(1+.01765*s))
var x,A=.0638*p/(1+.0131*p)+.638
Number.isNaN(f)&&(f=0),x=f>=164&&f<=345?.56+Math.abs(.2*Math.cos((f+168)*zd)):.36+Math.abs(.4*Math.cos((f+35)*zd))
var k=Math.pow(p,4),T=Math.sqrt(k/(k+1900)),N=A*(T*x+1-T),R=Math.pow(b/(a*C),2)
return R+=Math.pow(y/(i*A),2),R+=E/Math.pow(N,2),Math.sqrt(R)},deltaE2000:nd,deltaEJz:function(e,t){var n=$(op.from(e),3),r=n[0],a=n[1],o=n[2],i=$(op.from(t),3),u=i[0],s=i[1],l=i[2],c=r-u,d=a-s
Number.isNaN(o)&&Number.isNaN(l)?(o=0,l=0):Number.isNaN(o)?o=l:Number.isNaN(l)&&(l=o)
var p=o-l,f=2*Math.sqrt(a*s)*Math.sin(p/2*(Math.PI/180))
return Math.sqrt(Math.pow(c,2)+Math.pow(d,2)+Math.pow(f,2))},deltaEITP:function(e,t){var n=$(Dp.from(e),3),r=n[0],a=n[1],o=n[2],i=$(Dp.from(t),3),u=i[0],s=i[1],l=i[2]
return 720*Math.sqrt(Math.pow(r-u,2)+.25*Math.pow(a-s,2)+Math.pow(o-l,2))},deltaEOK:function(e,t){var n=$(Fp.from(e),3),r=n[0],a=n[1],o=n[2],i=$(Fp.from(t),3),u=r-i[0],s=a-i[1],l=o-i[2]
return Math.sqrt(Math.pow(u,2)+Math.pow(s,2)+Math.pow(l,2))}})
function Ep(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Dc(n)&&(n={method:n})
var r=n,a=r.method,o=void 0===a?Tc.deltaE:a,i=j(r,b)
for(var u in e=qc(e),t=qc(t),wp)if("deltae"+o.toLowerCase()===u.toLowerCase())return wp[u](e,t,i)
throw new TypeError("Unknown deltaE method: ".concat(o))}var Cp=Object.freeze({__proto__:null,lighten:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Hc(e,[Mc.get("oklch","lch"),"l"],function(e){return e*(1+t)})},darken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Hc(e,[Mc.get("oklch","lch"),"l"],function(e){return e*(1-t)})}})
function xp(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[qc(e),qc(t)]
if(e=a[0],t=a[1],"object"===gc(n)){var o=[.5,n]
n=o[0],r=o[1]}var i=r
return kp(e,t,{space:i.space,outputSpace:i.outputSpace,premultiplied:i.premultiplied})(n)}function Ap(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Tp(e)){r=t
var a=$((n=e).rangeArgs.colors,2)
e=a[0],t=a[1]}var o=r,i=o.maxDeltaE,u=o.deltaEMethod,s=o.steps,l=void 0===s?2:s,c=o.maxSteps,d=void 0===c?1e3:c,p=j(o,y)
if(!n){var f=[qc(e),qc(t)]
n=kp(e=f[0],t=f[1],p)}var h=Ep(e,t),m=i>0?Math.max(l,Math.ceil(h/i)+1):l,D=[]
if(void 0!==d&&(m=Math.min(m,d)),1===m)D=[{p:.5,color:n(.5)}]
else{var g=1/(m-1)
D=Array.from({length:m},function(e,t){var r=t*g
return{p:r,color:n(r)}})}if(i>0)for(var v=D.reduce(function(e,t,n){if(0===n)return 0
var r=Ep(t.color,D[n-1].color,u)
return Math.max(e,r)},0);v>i;){v=0
for(var b=1;b<D.length&&D.length<d;b++){var F=D[b-1],w=D[b],E=(w.p+F.p)/2,C=n(E)
v=Math.max(v,Ep(C,F.color),Ep(C,w.color)),D.splice(b,0,{p:E,color:n(E)}),b++}}return D=D.map(function(e){return e.color})}function kp(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Tp(e)){var r=e,a=t
return kp.apply(void 0,q(r.rangeArgs.colors).concat([z({},r.rangeArgs.options,a)]))}var o=n.space,i=n.outputSpace,u=n.progression,s=n.premultiplied
e=qc(e),t=qc(t),e=ad(e),t=ad(t)
var l={colors:[e,t],options:n}
if(o=o?Mc.get(o):Mc.registry[Tc.interpolationSpace]||e.space,i=i?Mc.get(i):o,e=id(e,o),t=id(t,o),e=od(e),t=od(t),o.coords.h&&"angle"===o.coords.h.type){var c=n.hue=n.hue||"shorter",d=[o,"h"],p=[zc(e,d),zc(t,d)],f=p[0],h=p[1],m=function(e,t){if("raw"===e)return t
var n=$(t.map(Yc),2),r=n[0],a=n[1],o=a-r
return"increasing"===e?o<0&&(a+=360):"decreasing"===e?o>0&&(r+=360):"longer"===e?-180<o&&o<180&&(o>0?a+=360:r+=360):"shorter"===e&&(o>180?r+=360:o<-180&&(a+=360)),[r,a]}(c,[f,h]),D=$(m,2)
f=D[0],h=D[1],Hc(e,d,f),Hc(t,d,h)}return s&&(e.coords=e.coords.map(function(t){return t*e.alpha}),t.coords=t.coords.map(function(e){return e*t.alpha})),Object.assign(function(n){n=u?u(n):n
var r=e.coords.map(function(e,r){return Fc(e,t.coords[r],n)}),a=Fc(e.alpha,t.alpha,n),l={space:o,coords:r,alpha:a}
return s&&(l.coords=l.coords.map(function(e){return e/a})),i!==o&&(l=id(l,i)),l},{rangeArgs:l})}function Tp(e){return"function"===gc(e)&&!!e.rangeArgs}Tc.interpolationSpace="lab"
var Np=Object.freeze({__proto__:null,mix:xp,steps:Ap,range:kp,isRange:Tp,register:function(e){e.defineFunction("mix",xp,{returns:"color"}),e.defineFunction("range",kp,{returns:"function<color>"}),e.defineFunction("steps",Ap,{returns:"array<color>"})}}),Rp=new Mc({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gd,fromBase:function(e){var t=Math.max.apply(Math,q(e)),n=Math.min.apply(Math,q(e)),r=$(e,3),a=r[0],o=r[1],i=r[2],u=NaN,s=0,l=(n+t)/2,c=t-n
if(0!==c){switch(s=0===l||1===l?0:(t-l)/Math.min(l,1-l),t){case a:u=(o-i)/c+(o<i?6:0)
break
case o:u=(i-a)/c+2
break
case i:u=(a-o)/c+4}u*=60}return[u,100*s,100*l]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
function o(e){var t=(e+n/30)%12,o=r*Math.min(a,1-a)
return a-o*Math.max(-1,Math.min(t-3,9-t,1))}return(n%=360)<0&&(n+=360),r/=100,a/=100,[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Bp=new Mc({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Rp,fromBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)+(r/=100)*Math.min(a,1-a)
return[n,0===o?0:200*(1-a/o),100*o]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)*(1-(r/=100)/2)
return[n,0===o||1===o?0:(a-o)/Math.min(o,1-o)*100,100*o]},formats:{color:{toGamut:!0}}}),_p=new Mc({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Bp,fromBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2]
return[n,a*(100-r)/100,100-a]},toBase:function(e){var t=$(e,3),n=t[0],r=t[1],a=t[2],o=(r/=100)+(a/=100)
if(o>=1)return[n,0,r/o*100]
var i=1-a
return[n,100*(0===i?0:1-r/i),100*i]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}}),Sp=new Pc({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Op=new Pc({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Sp,toBase:function(e){return e.map(function(e){return Math.pow(Math.abs(e),563/256)*Math.sign(e)})},fromBase:function(e){return e.map(function(e){return Math.pow(Math.abs(e),256/563)*Math.sign(e)})},formats:{color:{id:"a98-rgb"}}}),Mp=new Pc({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Vc,toXYZ_M:[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],fromXYZ_M:[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]]}),Ip=1/512,Pp=new Pc({id:"prophoto",name:"ProPhoto",base:Mp,toBase:function(e){return e.map(function(e){return e<.03125?e/16:Math.pow(e,1.8)})},fromBase:function(e){return e.map(function(e){return e>=Ip?Math.pow(e,1/1.8):16*e})},formats:{color:{id:"prophoto-rgb"}}}),jp=new Mc({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Fp,fromBase:function(e){var t,n=$(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Yc(t)]},toBase:function(e){var t,n,r=$(e,3),a=r[0],o=r[1],i=r[2]
return isNaN(i)?(t=0,n=0):(t=o*Math.cos(i*Math.PI/180),n=o*Math.sin(i*Math.PI/180)),[a,t,n]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),qp=2610/Math.pow(2,14),Lp=Math.pow(2,14)/2610,zp=2523/Math.pow(2,5),$p=Math.pow(2,5)/2523,Hp=3424/Math.pow(2,12),Vp=2413/Math.pow(2,7),Up=2392/Math.pow(2,7),Wp=new Pc({id:"rec2100pq",name:"REC.2100-PQ",base:sd,toBase:function(e){return e.map(function(e){return 1e4*Math.pow(Math.max(Math.pow(e,$p)-Hp,0)/(Vp-Up*Math.pow(e,$p)),Lp)/203})},fromBase:function(e){return e.map(function(e){var t=Math.max(203*e/1e4,0),n=Hp+Vp*Math.pow(t,qp),r=1+Up*Math.pow(t,qp)
return Math.pow(n/r,zp)})},formats:{color:{id:"rec2100-pq"}}}),Gp=.17883277,Kp=.28466892,Qp=.55991073,Yp=3.7743,Xp=new Pc({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:sd,toBase:function(e){return e.map(function(e){return e<=.5?Math.pow(e,2)/3*Yp:Math.exp((e-Qp)/Gp+Kp)/12*Yp})},fromBase:function(e){return e.map(function(e){return(e/=Yp)<=1/12?Math.sqrt(3*e):Gp*Math.log(12*e-Kp)+Qp})},formats:{color:{id:"rec2100-hlg"}}}),Zp={}
function Jp(e){var t=e.id
e.toCone_M,e.fromCone_M,Zp[t]=arguments[0]}function ef(e,t){var n=Zp[arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Bradford"],r=$(mc(n.toCone_M,e),3),a=r[0],o=r[1],i=r[2],u=$(mc(n.toCone_M,t),3),s=mc([[u[0]/a,0,0],[0,u[1]/o,0],[0,0,u[2]/i]],n.toCone_M)
return mc(n.fromCone_M,s)}kc.add("chromatic-adaptation-start",function(e){e.options.method&&(e.M=ef(e.W1,e.W2,e.options.method))}),kc.add("chromatic-adaptation-end",function(e){e.M||(e.M=ef(e.W1,e.W2,e.options.method))}),Jp({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]}),Jp({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]}),Jp({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]}),Jp({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]}),Object.assign(Nc,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Nc.ACES=[.32168/.33767,1,.34065/.33767]
var tf=new Pc({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Nc.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],formats:{color:{}}}),nf=Math.pow(2,-16),rf=-.35828683,af=(Math.log2(65504)+9.72)/17.52,of=new Pc({id:"acescc",name:"ACEScc",coords:{r:{range:[rf,af],name:"Red"},g:{range:[rf,af],name:"Green"},b:{range:[rf,af],name:"Blue"}},referred:"scene",base:tf,toBase:function(e){return e.map(function(e){return e<=-.3013698630136986?2*(Math.pow(2,17.52*e-9.72)-nf):e<af?Math.pow(2,17.52*e-9.72):65504})},fromBase:function(e){return e.map(function(e){return e<=0?(Math.log2(nf)+9.72)/17.52:e<nf?(Math.log2(nf+.5*e)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})},formats:{color:{}}}),uf=Object.freeze({__proto__:null,XYZ_D65:Ic,XYZ_D50:Vc,XYZ_ABS_D65:$d,Lab_D65:Md,Lab:Qc,LCH:Xc,sRGB_Linear:fd,sRGB:gd,HSL:Rp,HWB:_p,HSV:Bp,P3_Linear:pd,P3:vd,A98RGB_Linear:Sp,A98RGB:Op,ProPhoto_Linear:Mp,ProPhoto:Pp,REC_2020_Linear:sd,REC_2020:dd,OKLab:Fp,OKLCH:jp,Jzazbz:ap,JzCzHz:op,ICTCP:Dp,REC_2100_PQ:Wp,REC_2100_HLG:Xp,ACEScg:tf,ACEScc:of}),sf=(O=new WeakMap,G(function e(){var t,n,r,a,o=this
U(this,e),_(this,O,void 0)
for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s]
1===u.length&&(t=qc(u[0])),t?(n=t.space||t.spaceId,r=t.coords,a=t.alpha):(n=u[0],r=u[1],a=u[2]),I(O,this,Mc.get(n)),this.coords=r?r.slice():[0,0,0],this.alpha=a<1?a:1
for(var l=0;l<this.coords.length;l++)"NaN"===this.coords[l]&&(this.coords[l]=NaN)
var c=function(e){Object.defineProperty(o,e,{get:function(){return o.get(e)},set:function(t){return o.set(e,t)}})}
for(var d in M(O,this).coords)c(d)},[{key:"space",get:function(){return M(O,this)}},{key:"spaceId",get:function(){return M(O,this).id}},{key:"clone",value:function(){return new sf(this.space,this.coords,this.alpha)}},{key:"toJSON",value:function(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}},{key:"display",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=Cd.apply(void 0,[this].concat(t))
return r.color=new sf(r.color),r}}],[{key:"get",value:function(e){if(e instanceof sf)return e
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return function(e,t,n){if(T())return Reflect.construct.apply(null,arguments)
var r=[null]
r.push.apply(r,t)
var a=new(e.bind.apply(e,r))
return n&&B(a,n.prototype),a}(sf,[e].concat(n))}},{key:"defineFunction",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=n.instance,a=void 0===r||r,o=n.returns,i=function(){var e=t.apply(void 0,arguments)
if("color"===o)e=sf.get(e)
else if("function<color>"===o){var n=e
e=function(){var e=n.apply(void 0,arguments)
return sf.get(e)},Object.assign(e,n)}else"array<color>"===o&&(e=e.map(function(e){return sf.get(e)}))
return e}
e in sf||(sf[e]=i),a&&(sf.prototype[e]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return i.apply(void 0,[this].concat(t))})}},{key:"defineFunctions",value:function(e){for(var t in e)sf.defineFunction(t,e[t],e[t])}},{key:"extend",value:function(e){if(e.register)e.register(sf)
else for(var t in e)sf.defineFunction(t,e[t])}}]))
sf.defineFunctions({get:zc,getAll:Lc,set:Hc,setAll:$c,to:id,equals:function(e,t){return e=qc(e),t=qc(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every(function(e,n){return e===t.coords[n]})},inGamut:rd,toGamut:od,distance:xd,toString:ud}),Object.assign(sf,{util:xc,hooks:kc,WHITES:Nc,Space:Mc,spaces:Mc.registry,parse:jc,defaults:Tc})
for(var lf=0,cf=Object.keys(uf);lf<cf.length;lf++){var df=cf[lf]
Mc.register(uf[df])}for(var pf in Mc.registry)ff(pf,Mc.registry[pf])
function ff(e,t){Object.keys(t.coords),Object.values(t.coords).map(function(e){return e.name})
var n=e.replace(/-/g,"_")
Object.defineProperty(sf.prototype,n,{get:function(){var n=this,r=this.getAll(e)
return"undefined"==typeof Proxy?r:new Proxy(r,{has:function(e,n){try{return Mc.resolveCoord([t,n]),!0}catch(e){}return Reflect.has(e,n)},get:function(e,n,r){if(n&&"symbol"!==o(n)&&!(n in e)){var a=Mc.resolveCoord([t,n]).index
if(a>=0)return e[a]}return Reflect.get(e,n,r)},set:function(r,a,i,u){if(a&&"symbol"!==o(a)&&!(a in r)||a>=0){var s=Mc.resolveCoord([t,a]).index
if(s>=0)return r[s]=i,n.setAll(e,r),!0}return Reflect.set(r,a,i,u)}})},set:function(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}kc.add("colorspace-init-end",function(e){var t
ff(e.id,e),null===(t=e.aliases)||void 0===t||t.forEach(function(t){ff(t,e)})}),sf.extend(wp),sf.extend({deltaE:Ep}),sf.extend(Cp),sf.extend({contrast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Dc(n)&&(n={algorithm:n})
var r=n,a=r.algorithm,o=j(r,v)
if(!a){var i=Object.keys(Pd).map(function(e){return e.replace(/^contrast/,"")}).join(", ")
throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(i))}for(var u in e=qc(e),t=qc(t),Pd)if("contrast"+a.toLowerCase()===u.toLowerCase())return Pd[u](e,t,o)
throw new TypeError("Unknown contrast algorithm: ".concat(a))}}),sf.extend(Ld),sf.extend(Td),sf.extend(Np),sf.extend(Pd)
var hf=de(Yr())
fc.default.templateSettings.strip=!1
var mf=/^#[0-9a-f]{3,8}$/i,Df=/hsl\(\s*([-\d.]+)(rad|turn)/,gf=(W=new WeakMap,X=new WeakMap,Z=new WeakMap,J=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakSet,G(function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
if(U(this,e),S(this,ne),_(this,W,void 0),_(this,X,void 0),_(this,Z,void 0),_(this,J,void 0),_(this,ee,void 0),_(this,te,void 0),t instanceof gf){var o=t.r,i=t.g,u=t.b
return this.r=o,this.g=i,this.b=u,void(this.alpha=t.alpha)}this.red=t,this.green=n,this.blue=r,this.alpha=a},[{key:"r",get:function(){return M(W,this)},set:function(e){I(W,this,e),I(J,this,Math.round(255*yf(e,0,1)))}},{key:"g",get:function(){return M(X,this)},set:function(e){I(X,this,e),I(ee,this,Math.round(255*yf(e,0,1)))}},{key:"b",get:function(){return M(Z,this)},set:function(e){I(Z,this,e),I(te,this,Math.round(255*yf(e,0,1)))}},{key:"red",get:function(){return M(J,this)},set:function(e){I(W,this,e/255),I(J,this,yf(e,0,255))}},{key:"green",get:function(){return M(ee,this)},set:function(e){I(X,this,e/255),I(ee,this,yf(e,0,255))}},{key:"blue",get:function(){return M(te,this)},set:function(e){I(Z,this,e/255),I(te,this,yf(e,0,255))}},{key:"toHexString",value:function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?n:"0"+n)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}},{key:"parseString",value:function(e){e=e.replace(Df,function(e,t,n){var r=t+n
switch(n){case"rad":return e.replace(r,180*t/Math.PI)
case"turn":return e.replace(r,360*t)}})
try{var t
"Prototype"in n&&"Version"in n.Prototype&&(t=Array.from,Array.from=hf.default)
var r=new sf(e).to("srgb")
t&&(Array.from=t,t=null),this.r=r.r,this.g=r.g,this.b=r.b,this.alpha=+r.alpha}catch(t){throw new Error('Unable to parse color "'.concat(e,'"'))}return this}},{key:"parseRgbString",value:function(e){this.parseString(e)}},{key:"parseHexString",value:function(e){e.match(mf)&&![6,8].includes(e.length)&&this.parseString(e)}},{key:"parseColorFnString",value:function(e){this.parseString(e)}},{key:"getRelativeLuminance",value:function(){var e=this.r,t=this.g,n=this.b
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}},{key:"getLuminosity",value:function(){return.3*this.r+.59*this.g+.11*this.b}},{key:"setLuminosity",value:function(e){var t=e-this.getLuminosity()
return P(ne,this,vf).call(this,t).clip()}},{key:"getSaturation",value:function(){return Math.max(this.r,this.g,this.b)-Math.min(this.r,this.g,this.b)}},{key:"setSaturation",value:function(e){var t=new gf(this),n=$([{name:"r",value:t.r},{name:"g",value:t.g},{name:"b",value:t.b}].sort(function(e,t){return e.value-t.value}),3),r=n[0],a=n[1],o=n[2]
return o.value>r.value?(a.value=(a.value-r.value)*e/(o.value-r.value),o.value=e):a.value=o.value=0,r.value=0,t[o.name]=o.value,t[r.name]=r.value,t[a.name]=a.value,t}},{key:"clip",value:function(){var e=new gf(this),t=e.getLuminosity(),n=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b)
return n<0&&(e.r=t+(e.r-t)*t/(t-n),e.g=t+(e.g-t)*t/(t-n),e.b=t+(e.b-t)*t/(t-n)),r>1&&(e.r=t+(e.r-t)*(1-t)/(r-t),e.g=t+(e.g-t)*(1-t)/(r-t),e.b=t+(e.b-t)*(1-t)/(r-t)),e}}]))
function vf(e){var t=new gf(this)
return t.r+=e,t.g+=e,t.b+=e,t}var bf=gf
function yf(e,t,n){return Math.min(Math.max(t,e),n)}var Ff=function(e){var t=new bf
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var n=e.getPropertyValue("opacity")
t.alpha=t.alpha*n}return t},wf=function(e){var t=n.getComputedStyle(e)
return oc(e,t)||1===Ff(t).alpha}
function Ef(e){if(!e.href)return!1
var t=Xa.get("firstPageLink",Cf)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function Cf(){return(n.location.origin?cm(i._tree,'a[href]:not([href^="javascript:"])').find(function(e){return!qu(e.actualNode)}):cm(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var xf=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Af=/(\w+)\((\d+)/,kf=function e(t,r,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var u=t instanceof na?t:Za(t)
t=u?u.actualNode:t
var s="_isVisible"+(r?"ScreenReader":""),l=null!==(o=n.Node)&&void 0!==o?o:{},c=l.DOCUMENT_NODE,d=l.DOCUMENT_FRAGMENT_NODE,p=u?u.props.nodeType:t.nodeType,f=u?u.props.nodeName:t.nodeName.toLowerCase()
if(u&&void 0!==u[s])return u[s]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(u?u.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=u.parent,m=!0
return h&&(m=e(h,r,!0)),u&&(u[s]=m),m}var D=n.getComputedStyle(t,null)
if(null===D)return!1
if("area"===f)return function(t,n,r){var a=Ai(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var u=Ei(t)
if(!u||9!==u.nodeType)return!1
var s=cm(i._tree,'img[usemap="#'.concat(va(o),'"]'))
return!(!s||!s.length)&&s.some(function(t){return e(t.actualNode,n,r)})}(t,r,a)
if("none"===D.getPropertyValue("display"))return!1
var g=parseInt(D.getPropertyValue("height")),v=parseInt(D.getPropertyValue("width")),b=Ch(t),y=b&&0===g,F=b&&0===v,w="absolute"===D.getPropertyValue("position")&&(g<2||v<2)&&"hidden"===D.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(xf),n=e.getPropertyValue("clip-path").match(Af)
if(t&&5===t.length){var r=e.getPropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(D)||"0"===D.getPropertyValue("opacity")||y||F||w))return!1
if(!a&&("hidden"===D.getPropertyValue("visibility")||!r&&Xi(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,r,!0)),u&&(u[s]=C),C},Tf=function(e,t){for(var r=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var u=e[i]
u===t&&(o=!0)
var s=n.getComputedStyle(u)
o||-1===r.indexOf(s.position)?a.push(u):a=[]}return a}
function Nf(e,t){var n=Rf(t)
do{var r=Rf(e)
if(r===n||r===t)return Bf(e,t)
e=r}while(e)
return!1}function Rf(e){for(var t=Za(e).parent;t;){if(Ch(t.actualNode))return t.actualNode
t=t.parent}}function Bf(e,t){var r=n.getComputedStyle(t),a=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),u={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof n.HTMLHtmlElement)&&(u.width=t.scrollWidth,u.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===r.getPropertyValue("white-space")&&(o[0]=u),o.some(function(e){return!(Math.ceil(e.left)<Math.floor(u.left)||Math.ceil(e.top)<Math.floor(u.top)||Math.floor(e.left+e.width)>Math.ceil(u.left+u.width)||Math.floor(e.top+e.height)>Math.ceil(u.top+u.height))})}var _f=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(r.elementsFromPoint(t,n)||[]).filter(function(e){return Ei(e)===r}).reduce(function(r,a){if(yi(a)){var i=e(t,n,a.shadowRoot,o+1);(r=r.concat(i)).length&&Nf(r[0],a)&&r.push(a)}else r.push(a)
return r},[])}
function Sf(e){var t={}
if(!e||!e.length)return t
var n=e.substring(1).split("&")
if(!n||!n.length)return t
for(var r=0;r<n.length;r++){var a=$(n[r].split("="),2),o=a[0],i=a[1],u=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(u)}return t}function Of(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===$(t,1)[0]?"":e:""}var Mf,If=function(e,t){if(e.hasAttribute(t)){var n=e.nodeName.toUpperCase(),r=e;["A","AREA"].includes(n)&&!e.ownerSVGElement||((r=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(r.protocol)?r.protocol.replace(/s:$/,":"):r.protocol,u=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(r.pathname)?r.pathname:"/".concat(r.pathname)),s=u.pathname,l=u.filename
return{protocol:i,hostname:r.hostname,port:(o=r.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(s)?s:"".concat(s,"/"),search:Sf(r.search),hash:Of(r.hash),filename:l}}},Pf=function(e,t){var r=t.getBoundingClientRect(),a=r.top,o=r.left,i=a-t.scrollTop,u=a-t.scrollTop+t.scrollHeight,s=o-t.scrollLeft,l=o-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>r.right||e.top>u&&e.top>r.bottom||e.right<s&&e.right<r.left||e.bottom<i&&e.bottom<r.top)return!1
var c=n.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof n.HTMLBodyElement||t instanceof n.HTMLHtmlElement},jf=0,qf=function(e){function t(e,n,r){var a
if(U(this,t),(a=k(this,t)).shadowId=r,a.children=[],a.actualNode=e,a.parent=n,n||(jf=0),a.nodeIndex=jf++,a._isHidden=null,a._cache={},a._isXHTML=ka(e.ownerDocument),"input"===e.nodeName.toLowerCase()){var o=e.getAttribute("type")
o=a._isXHTML?o:(o||"").toLowerCase(),wm().includes(o)||(o="text"),a._type=o}return Xa.get("nodeMap")&&Xa.get("nodeMap").set(e,a),a}return R(t,e),G(t,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,n=e.nodeName,r=e.id,a=e.nodeValue
this._cache.props={nodeType:t,nodeName:this._isXHTML?n:n.toLowerCase(),id:r,type:this._type,nodeValue:a},1===t&&(this._cache.props.multiple=this.actualNode.multiple,this._cache.props.value=this.actualNode.value,this._cache.props.selected=this.actualNode.selected,this._cache.props.checked=this.actualNode.checked,this._cache.props.indeterminate=this.actualNode.indeterminate)}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof n.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map(function(e){return e.name})),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=n.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=Ku(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=Wu(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter(function(e){return e.width>0})),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}])}(na),Lf=qf,zf=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},$f=" [idsMap]"
function Hf(e,t,n){var r=e[0]._selectorMap
if(r){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some(function(e){return Vf(e)}))return
var i=new Set
t.forEach(function(e){var t,n=function(e,t,n){var r=e[e.length-1],a=null,o=e.length>1||!!r.pseudos||!!r.classes
if(Vf(r))a=t["*"]
else{if(r.id){var i
if(!t[$f]||!Object.hasOwn(t[$f],r.id)||null===(i=t[$f][r.id])||void 0===i||!i.length)return
a=t[$f][r.id].filter(function(e){return e.shadowId===n})}if(r.tag&&"*"!==r.tag){var u
if(null===(u=t[r.tag])||void 0===u||!u.length)return
var s=t[r.tag]
a=a?Uf(s,a):s}if(r.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?Uf(c,a):c}if(r.attributes)for(var d=0;d<r.attributes.length;d++){var p,f=r.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var h=t["[".concat(f.key,"]")]
a=a?Uf(h,a):h}}return{nodes:a,isComplexSelector:o}}(e,r,a)
null==n||null===(t=n.nodes)||void 0===t||t.forEach(function(t){n.isComplexSelector&&!bo(t,e)||i.add(t)})})
var u=[]
return i.forEach(function(e){return u.push(e)}),n&&(u=u.filter(n)),u.sort(function(e,t){return e.nodeIndex-t.nodeIndex})}}function Vf(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function Uf(e,t){return e.filter(function(e){return t.includes(e)})}function Wf(e,t,n){Object.hasOwn(n,e)||(n[e]=[]),n[e].push(t)}function Gf(e,t){1===e.props.nodeType&&(Wf(e.props.nodeName,e,t),Wf("*",e,t),e.attrNames.forEach(function(n){"id"===n&&(t[$f]=t[$f]||{},zf(e.attr(n)).forEach(function(n){Wf(n,e,t[$f])})),Wf("[".concat(n,"]"),e,t)}))}function Kf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
Mf=!1
var n={}
Xa.set("nodeMap",new WeakMap),Xa.set("selectorMap",n)
var r=Yf(e,t,null)
return r[0]._selectorMap=n,r[0]._hasShadowRoot=Mf,r}function Qf(e,t,n){var r=new Lf(e,t,n)
return Gf(r,Xa.get("selectorMap")),r}function Yf(e,t,r){var a,o
function i(e,n,r){var a=Yf(n,t,r)
return a&&(e=e.concat(a)),e}e.documentElement&&(e=e.documentElement)
var u=e.nodeName.toLowerCase()
return yi(e)?(Mf=!0,a=Qf(e,r,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce(function(e,t){return i(e,t,a)},[]),[a]):"content"===u&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce(function(e,t){return i(e,t,r)},[]):"slot"===u&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),n.getComputedStyle(e),o.reduce(function(e,t){return i(e,t,r)},[])):1===e.nodeType?(a=Qf(e,r,t),o=Array.from(e.childNodes),a.children=o.reduce(function(e,t){return i(e,t,a)},[]),[a]):3===e.nodeType?[Qf(e,r)]:void 0}var Xf=function(e){return e?e.trim().split("-")[0].toLowerCase():""},Zf=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map(function(e){if(t[e].length){var n=i._audit.data.failureSummaries[e]
return n&&"function"==typeof n.failureMessage?n.failureMessage(t[e].map(function(e){return e.message||""})):void 0}}).filter(function(e){return void 0!==e}).join("\n\n")}
function Jf(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var eh=Jr.resultGroups
function th(e,t){var n=i.utils.aggregateResult(e)
return eh.forEach(function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(n[e]||[]).forEach(function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])}),n[e]=(n[e]||[]).map(function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map(function(e){if("object"===o(e.node)){var n=nh(e.node,t)
Object.assign(e,n)}return delete e.result,delete e.node,function(e,t){["any","all","none"].forEach(function(n){Array.isArray(e[n])&&e[n].filter(function(e){return Array.isArray(e.relatedNodes)}).forEach(function(e){e.relatedNodes=e.relatedNodes.map(function(e){return nh(e,t)})})})}(e,t),e})),eh.forEach(function(t){return delete e[t]}),delete e.pageLevel,delete e.result,e})}),n}function nh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
e=ci.dqElmToSpec(e,t)
var n,r,a,o,u,s={}
return i._audit.noHtml?s.html=null:s.html=null!==(n=e.source)&&void 0!==n?n:"Undefined",t.elementRef&&!e.fromFrame&&(s.element=null!==(r=e.element)&&void 0!==r?r:null),(!1!==t.selectors||e.fromFrame)&&(s.target=null!==(a=e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(s.ancestry=null!==(o=e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(s.xpath=null!==(u=e.xpath)&&void 0!==u?u:["/"]),s}var rh=/\$\{\s?data\s?\}/g
function ah(e,t){if("string"==typeof t)return e.replace(rh,t)
for(var n in t)if(t.hasOwnProperty(n)){var r=new RegExp("\\${\\s?data\\."+n+"\\s?}","g"),a=void 0===t[n]?"":String(t[n])
e=e.replace(r,a)}return e}var oh=function e(t,n){if(t){if(Array.isArray(n))return n.values=n.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?ah(1===n.length?t.singular:t.plural,n):ah(t,n)
if("string"==typeof t)return ah(t,n)
if("string"==typeof n)return ah(t[n],n)
var r=t.default||Jf()
return n&&n.messageKey&&t[n.messageKey]&&(r=t[n.messageKey]),e(r,n)}},ih=function(e,t,n){var r=i._audit.data.checks[e]
if(!r)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!r.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return oh(r.messages[t],n)},uh=function(e,t,n){var r=((n.rules&&n.rules[t]||{}).checks||{})[e.id],a=(n.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),r&&(r.hasOwnProperty("enabled")&&(o=r.enabled),r.hasOwnProperty("options")&&(i=r.options)),{enabled:o,options:i,absolutePaths:n.absolutePaths}}
function sh(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n
return t&&"object"===o(t)?t:"object"!==o(r)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:lh(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function lh(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,n=e.navigator,r=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},u=i.angle,s=i.type
return{userAgent:n.userAgent,windowWidth:a,windowHeight:r,orientationAngle:u,orientationType:s}}function ch(e,t){var n=t.focusable,r=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:n&&dh(e),size:ph(e),page:r}}function dh(e){var t=Kh(e.getAttribute("tabindex"))
return null===t||t>=0}function ph(e){var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(n)){var r=e.getBoundingClientRect()
t=isNaN(t)?r.width:t,n=isNaN(n)?r.height:n}return{width:t,height:n}}function fh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[]
Bh(e)||(e=[e])
for(var n=0;n<e.length;n++){var r=hh(e[n])
r&&t.push(r)}return t}function hh(e){return e instanceof n.Node?e:"string"==typeof e?[e]:(Ih(e)?(function(e){gh(Array.isArray(e.fromFrames),"fromFrames property must be an array"),gh(e.fromFrames.every(function(e){return!_h(e,"fromFrames")}),"Invalid context; fromFrames selector must be appended, rather than nested"),gh(!_h(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):Ph(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,n=[],r=Q(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value
if(Ph(a)&&(mh(a),a=a.fromShadowDom),"string"!=typeof a&&!Dh(a))return
n.push(a)}}catch(e){r.e(e)}finally{r.f()}return n}}(e))}function mh(e){gh(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),gh(e.fromShadowDom.every(function(e){return!_h(e,"fromFrames")}),"shadow selector must be inside fromFrame instead"),gh(e.fromShadowDom.every(function(e){return!_h(e,"fromShadowDom")}),"fromShadowDom selector must be appended, rather than nested")}function Dh(e){return Array.isArray(e)&&e.every(function(e){return"string"==typeof e})}function gh(e,t){Da(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function vh(e,t){for(var r=[],a=0,o=e[t].length;a<o;a++){var i=e[t][a]
if(i instanceof n.Node)i.documentElement instanceof n.Node?r.push(e.flatTree[0]):r.push(Za(i))
else if(i&&i.length)if(i.length>1)bh(e,t,i)
else{var u=ym(i[0])
r.push.apply(r,q(u.map(function(e){return Za(e)})))}}return r.filter(function(e){return e})}function bh(e,t,n){e.frames=e.frames||[],ym(n.shift()).forEach(function(r){var a=e.frames.find(function(e){return e.node===r})
a||(a=ch(r,e),e.frames.push(a)),a[t].push(n)})}function yh(e,t){var r,i,u,s,l,c=this
e=ro(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(u=e)||void 0===u?void 0:u.focusable)||e.focusable,this.size="object"===o(null===(s=e)||void 0===s?void 0:s.size)?e.size:{},e=function(e){if(Oh(e)){var t=" must be used inside include or exclude. It should not be on the same object."
gh(!_h(e,"fromFrames"),"fromFrames"+t),gh(!_h(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!Mh(e))return{include:[a],exclude:[]}
e={include:e,exclude:[]}}var n=fh(e.include)
return 0===n.length&&n.push(a),{include:n,exclude:fh(e.exclude)}}(e),this.flatTree=null!=t?t:Kf(function(e){for(var t=e.include,r=e.exclude,o=Array.from(t).concat(Array.from(r)),i=0;i<o.length;i++){var u=o[i]
if(u instanceof n.Element)return u.ownerDocument.documentElement
if(u instanceof n.Document)return u.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=vh(this,"include"),this.exclude=vh(this,"exclude"),mm("frame, iframe",this).forEach(function(e){Lh(e,c)&&function(e,t){Qs(t)&&!pi(e.frames,"node",t)&&e.frames.push(ch(t,e))}(c,e.actualNode)}),void 0===this.page&&(this.page=1===(l=this.include).length&&l[0].actualNode===a.documentElement,this.frames.forEach(function(e){e.page=c.page})),function(e){if(0===e.include.length&&0===e.frames.length){var t=ri.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(Hh)}function Fh(e){return!1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iframes?[]:new yh(e).frames.map(function(e){var t=e.node,n=j(e,F)
return n.initiator=!1,{frameSelector:Wa(t),frameContext:n}})}function wh(e){var t=i._audit.rules.find(function(t){return t.id===e})
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}function Eh(e,t){var n=e.getPropertyValue(t)
return["scroll","auto"].includes(n)}var Ch=Aa(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(r||a){var o=n.getComputedStyle(e),i=Eh(o,"overflow-x"),u=Eh(o,"overflow-y")
return r&&i||a&&u?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}})
function xh(e){return Array.from(e.children||e.childNodes||[]).reduce(function(e,t){var n=Ch(t)
return n&&e.push(n),e.concat(xh(t))},[])}var Ah=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.document.documentElement
return[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}].concat(xh(a.body))}
function kh(){return ro(us)}var Th,Nh=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var n=t.data,r=t.isCrossOrigin,a=void 0!==r&&r,o=t.shadowId,i=t.root,u=t.priority,s=t.isLink,l=void 0!==s&&s,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(n.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(n))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:u}}},Rh=function(e){if(Th&&Th.parentNode)return void 0===Th.styleSheet?Th.appendChild(a.createTextNode(e)):Th.styleSheet.cssText+=e,Th
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(Th=a.createElement("style")).type="text/css",void 0===Th.styleSheet?Th.appendChild(a.createTextNode(e)):Th.styleSheet.cssText=e,t.appendChild(Th),Th}}
function Bh(e){return!!e&&"object"===o(e)&&"number"==typeof e.length&&e instanceof n.Node==0}function _h(e,t){return!(!e||"object"!==o(e))&&Object.prototype.hasOwnProperty.call(e,t)}function Sh(e){return Oh(e)||Mh(e)}function Oh(e){return["include","exclude"].some(function(t){return _h(e,t)&&Mh(e[t])})}function Mh(e){return"string"==typeof e||e instanceof n.Node||Ih(e)||Ph(e)||Bh(e)}function Ih(e){return _h(e,"fromFrames")}function Ph(e){return _h(e,"fromShadowDom")}var jh=function e(t,r){var a=Za(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=n.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!r&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},qh=function(e){var t,n,r=null!==(t=null===(n=e.props)||void 0===n?void 0:n.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!us.htmlElms[r]}
function Lh(e,t){var n=t.include,r=void 0===n?[]:n,a=t.exclude,o=void 0===a?[]:a,i=r.filter(function(t){return Di(t,e)})
if(0===i.length)return!1
var u=o.filter(function(t){return Di(t,e)})
if(0===u.length)return!0
var s=zh(i)
return Di(zh(u),s)}function zh(e){var t,n,r=Q(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
t&&Di(a,t)||(t=a)}}catch(e){r.e(e)}finally{r.f()}return t}function $h(e,t){return e.length===t.length&&e.every(function(e,n){var r=t[n]
return Array.isArray(e)?e.length===r.length&&e.every(function(e,t){return r[t]===e}):e===r})}var Hh=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1}
function Vh(e){return e instanceof na?{vNode:e,domNode:e.actualNode}:{vNode:Za(e),domNode:e}}var Uh=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter(function(e){return 3===e.type})
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var u=i.filter(function(e){return e.href}).map(function(e){return e.href}).filter(function(e){return!r.includes(e)}).map(function(e,a){var o=[].concat(q(n),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return Gh(e,t,o,r,i)}),s=o.filter(function(e){return 3!==e.type})
return s.length?(u.push(Promise.resolve(t.convertDataToStylesheet({data:s.map(function(e){return e.cssText}).join(),isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(u)):Promise.all(u)},Wh=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
return function(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}(e)?Uh(e,t,n,r,a):Gh(e.href,t,n,r,!0)},Gh=function(e,t,r,a,o){return a.push(e),new Promise(function(t,r){var a=new n.XMLHttpRequest
a.open("GET",e),a.timeout=Jr.preload.timeout,a.addEventListener("error",r),a.addEventListener("timeout",r),a.addEventListener("loadend",function(e){if(e.loaded&&a.responseText)return t(a.responseText)
r(a.responseText)}),a.send()}).then(function(e){var n=t.convertDataToStylesheet({data:e,isCrossOrigin:o,priority:r,root:t.rootNode,shadowId:t.shadowId})
return Wh(n.sheet,t,r,a,n.isCrossOrigin)})},Kh=function(e){if("string"!=typeof e)return null
var t=e.trim().match(/^([-+]?\d+)/)
return t?Number(t[1]):null},Qh=function(){function e(){if(n.performance&&n.performance)return n.performance.now()}var t=null,r=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){n.performance&&void 0!==n.performance.mark&&n.performance.mark(e)},measure:function(e,t,r){n.performance&&void 0!==n.performance.measure&&n.performance.measure(e,t,r)},logMeasures:function(e){function t(e){ea("Measure "+e.name+" took "+e.duration+"ms")}if(n.performance&&void 0!==n.performance.getEntriesByType)for(var r=n.performance.getEntriesByName("mark_axe_start")[0],a=n.performance.getEntriesByType("measure").filter(function(e){return e.startTime>=r.startTime}),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-r},reset:function(){t||(t=e()),r=e()}}}()
function Yh(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),n=t?"pointer-events":"visibility",r=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,u,s,l=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===l.indexOf(i);)l.push(i),c.push({value:i.style.getPropertyValue(n),priority:i.style.getPropertyPriority(n)}),i.style.setProperty(n,r,"important")
for(l.indexOf(a.documentElement)<l.length-1&&(l.splice(l.indexOf(a.documentElement),1),l.push(a.documentElement)),u=c.length;s=c[--u];)l[u].style.setProperty(n,s.value?s.value:"",s.priority)
return a.head.removeChild(o),l}}"function"==typeof n.addEventListener&&(a.elementsFromPoint=Yh())
var Xh=function(e,t){return e.concat(t).filter(function(e,t,n){return n.indexOf(e)===t})}
function Zh(e,t,n,r,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=n,o.parentShadowId=r,o}var Jh=function(e,t,n){e=Array.isArray(e)?e:[e]
var r=go(t)
return Hf(e,r,n)||function(e,t,n){for(var r=Xa.get("qsa.recycledLocalVariables",function(){return[]}),a=[],o=Zh(Array.isArray(e)?e:[e],t,null,e[0].shadowId,r.pop()),i=[];o.vNodesIndex<o.vNodes.length;){for(var u,s,l=o.vNodes[o.vNodesIndex++],c=null,d=null,p=((null===(u=o.anyLevel)||void 0===u?void 0:u.length)||0)+((null===(s=o.thisLevel)||void 0===s?void 0:s.length)||0),f=!1,h=0;h<p;h++){var m,D,g,v=h<((null===(m=o.anyLevel)||void 0===m?void 0:m.length)||0)?o.anyLevel[h]:o.thisLevel[h-((null===(D=o.anyLevel)||void 0===D?void 0:D.length)||0)]
if((!v[0].id||l.shadowId===o.parentShadowId)&&bo(l,v[0]))if(1===v.length)f||n&&!n(l)||(i.push(l),f=!0)
else{var b=v.slice(1)
if(!1===[" ",">"].includes(b[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+v[1].combinator)
">"===b[0].combinator?(c=c||[]).push(b):(d=d||[]).push(b)}v[0].id&&l.shadowId!==o.parentShadowId||null===(g=o.anyLevel)||void 0===g||!g.includes(v)||(d=d||[]).push(v)}for(l.children&&l.children.length&&(a.push(o),o=Zh(l.children,d,c,l.shadowId,r.pop()));o.vNodesIndex===o.vNodes.length&&a.length;)r.push(o),o=a.pop()}return i}(e,r,n)},em=function(e){var t=e.treeRoot,n=function(e){var t=[],n=Jh(e,"*",function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)}).map(function(e){return{shadowId:e.shadowId,rootNode:wi(e.actualNode)}})
return Xh(n,[])}(void 0===t?i._tree[0]:t)
if(!n.length)return Promise.resolve()
var r=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var n=[]
return e.forEach(function(e,r){var a=e.rootNode,o=e.shadowId,i=function(e,t,n){var r
return r=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(nm).reduce(function(n,r){var a=r.nodeName.toUpperCase(),o="STYLE"===a?r.textContent:r,i=t({data:o,isLink:"LINK"===a,root:e})
return i.sheet&&n.push(i.sheet),n},[])}(e,n):function(e){return Array.from(e.styleSheets).filter(function(e){return!!e.media&&rm(e.media.mediaText)})}(e),function(e){var t=[]
return e.filter(function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)})}(r)}(a,o,t)
if(!i)return Promise.all(n)
var u=r+1,s={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:u},l=[],c=Promise.all(i.map(function(e,t){return Wh(e,s,[u,t],l)}))
n.push(c)}),Promise.all(n)}(n,Nh(r)).then(function(e){return tm(e)})}
function tm(e){return e.reduce(function(e,t){return Array.isArray(t)?e.concat(tm(t)):e.concat(t)},[])}function nm(e){var t=e.nodeName.toUpperCase(),n=e.getAttribute("href"),r=e.getAttribute("rel"),a="LINK"===t&&n&&r&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&rm(e.media)}function rm(e){return!e||!e.toUpperCase().includes("PRINT")}var am=function(e){var t=e.treeRoot,n=void 0===t?i._tree[0]:t,r=Jh(n,"video[autoplay], audio[autoplay]",function(e){var t=e.actualNode
return!("none"===t.preload&&0===t.readyState&&t.networkState!==t.NETWORK_LOADING||t.hasAttribute("paused")||t.hasAttribute("muted")||(t.hasAttribute("src")?!t.getAttribute("src"):Array.from(t.getElementsByTagName("source")).filter(function(e){return!!e.getAttribute("src")}).length<=0))})
return Promise.all(r.map(function(e){var t,n=e.actualNode
return t=n,new Promise(function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",function n(){t.removeEventListener("loadedmetadata",n),e(t)})})}))}
function om(e){var t={cssom:em,media:am}
return im(e)?new Promise(function(n,r){var a=um(e),o=a.assets,i=a.timeout,u=setTimeout(function(){return r(new Error("Preload assets timed out."))},i)
Promise.all(o.map(function(n){return t[n](e).then(function(e){return t={},a=e,(r=K(r=n))in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t
var t,r,a})})).then(function(e){var t=e.reduce(function(e,t){return z({},e,t)},{})
clearTimeout(u),n(t)}).catch(function(e){clearTimeout(u),r(e)})}):Promise.resolve()}function im(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function um(e){var t=Jr.preload,n=t.assets,r=t.timeout,a={assets:n,timeout:r}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every(function(e){return n.includes(e.toLowerCase())}))throw new Error("Requested assets, not supported. Supported assets are: ".concat(n.join(", "),"."))
return a.assets=Xh(e.preload.assets.map(function(e){return e.toLowerCase()}),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}function sm(e){var t=i._audit.data.checks||{},n=i._audit.data.rules||{},r=pi(i._audit.rules,"id",e.id)||{}
e.tags=ro(r.tags||[])
var a=lm(t,!0,r),o=lm(t,!1,r)
e.nodes.forEach(function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)}),vi(e,ro(n[e.id]||{}))}function lm(e,t,n){return function(r){var a=e[r.id]||{},i=a.messages||{},u=Object.assign({},a)
delete u.messages,n.reviewOnFail||void 0!==r.result?u.message=r.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(r.data)||(u.message=function(e,t){function n(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:Jf()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:n(t)
try{var r=t.incomplete[e.missingData[0].reason]
if(!r)throw new Error
return r}catch(r){return"string"==typeof e.missingData?t.incomplete[e.missingData]:n(t)}}(r.data,i)),u.message||(u.message=i.incomplete)),"function"!=typeof u.message&&(u.message=oh(u.message,r.data)),vi(r,u)}}var cm=function(e,t){return Jh(e,t)}
function dm(e,t){var n,r,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(n=t.include||[],n=Array.isArray(n)?n:[n],r=t.exclude||[],r=(r=Array.isArray(r)?r:[r]).concat(a.filter(function(e){return-1===n.indexOf(e)}))):(n=Array.isArray(t)?t:[t],r=a.filter(function(e){return-1===n.indexOf(e)})),!!(n.some(function(t){return-1!==e.tags.indexOf(t)})||0===n.length&&!1!==e.enabled)&&r.every(function(t){return-1===e.tags.indexOf(t)})}var pm=function(e,t,n){var r=n.runOnly||{},a=(n.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===r.type?-1!==r.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===r.type&&r.values?dm(e,r.values):dm(e,[]))}
function fm(e,t){if(!t)return e
var n=e.cloneNode(!1),r=Ea(n)
if(1===n.nodeType){var a=n.outerHTML
n=Xa.get(a,function(){return hm(n,r,e,t)})}else n=hm(n,r,e,t)
return Array.from(e.childNodes).forEach(function(e){n.appendChild(fm(e,t))}),n}function hm(e,t,n,r){return t?(e=a.createElement(e.nodeName),Array.from(t).forEach(function(t){(function(e,t,n){return void 0!==n[t]&&(!0===n[t]||Ca(e,n[t]))})(n,t.name,r)||e.setAttribute(t.name,t.value)}),e):e}function mm(e,t){var n,r=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var u=i._selectCache[a]
if(u.selector===e)return u.result}for(var s=t.include.reduce(function(e,t){return e.length&&Di(e[e.length-1],t)||e.push(t),e},[]),l=function(e){return e.exclude&&0!==e.exclude.length?function(t){return Lh(t,e)}:null}(t),c=0;c<s.length;c++)n=s[c],r=Dm(r,Jh(n,e,l))
return i._selectCache&&i._selectCache.push({selector:e,result:r}),r}function Dm(e,t){if(0===e.length)return t
if(e.length<t.length){var n=e
e=t,t=n}for(var r=0,a=t.length;r<a;r++)e.includes(t[r])||e.push(t[r])
return e}var gm=function(e){e.forEach(function(e){return function(e,t,r){if(e===n)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)})}
function vm(e){return bm(Array.isArray(e)?q(e):[e],a)}function bm(e,t){var n=e.shift(),r=n?t.querySelector(n):null
return 0===e.length?r:null!=r&&r.shadowRoot?bm(e,r.shadowRoot):null}function ym(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Array.isArray(e)?q(e):[e]
return 0===e.length?[]:Fm(n,t)}function Fm(e,t){var n,r=V(n=e)||L(n)||Y(n)||H(),a=r[0],o=r.slice(1),i=t.querySelectorAll(a)
if(0===o.length)return Array.from(i)
var u,s=[],l=Q(i)
try{for(l.s();!(u=l.n()).done;){var c=u.value
null!=c&&c.shadowRoot&&s.push.apply(s,q(Fm(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return s}var wm=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},Em=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function Cm(e){e=Array.isArray(e)?e:Em
var t=[]
return e.forEach(function(e,n){var r=String.fromCharCode(n+96).replace("`","")
Array.isArray(e)?t=t.concat(Cm(e).map(function(e){return r+e})):t.push(r)}),t}var xm=function(e){for(var t=Em;e.length<3;)e+="`"
for(var n=0;n<=e.length-1;n++)if(!(t=t[e.charCodeAt(n)-96]))return!1
return!0},Am=function(e){function t(e){var n,r,a,i
return U(this,t),(n=k(this,t))._props=function(e){var t,n,r,a=null!==(t=e.nodeName)&&void 0!==t?t:Tm[e.nodeType],o=null!==(n=null!==(r=e.nodeType)&&void 0!==r?r:km[e.nodeName])&&void 0!==n?n:1
Da("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),Da("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),wm().includes(i)||(i="text"))
var u=z({},e,{nodeType:o,nodeName:a})
return i&&(u.type=i),delete u.attributes,Object.freeze(u)}(e),n._attrs=(r=e.attributes,a=void 0===r?{}:r,i={htmlFor:"for",className:"class"},Object.keys(a).reduce(function(e,t){var n=a[t]
return Da("object"!==o(n)||null===n,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==n&&(e[i[t]||t]=null!==n?String(n):null),e},{})),n}return R(t,e),G(t,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}])}(na),km={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},Tm={}
Object.keys(km).forEach(function(e){Tm[km[e]]=e})
var Nm,Rm=Am,Bm=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var n=i.utils.queue(),r=[]
Object.keys(i.plugins).forEach(function(e){n.defer(function(t){var n=function(e){r.push(e),t()}
try{i.plugins[e].cleanup(t,n)}catch(e){n(e)}})})
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach(function(e){n.defer(function(t,n){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,n)})}),n.then(function(n){0===r.length?e(n):t(r)}).catch(t)},_m={}
function Sm(e){return _m.hasOwnProperty(e)}function Om(e){return"string"==typeof e&&_m[e]?_m[e]:"function"==typeof e?e:Nm}var Mm={}
ce(Mm,{getAllCells:function(){return Im},getCellPosition:function(){return hs},getHeaders:function(){return jm},getScope:function(){return ms},isColumnHeader:function(){return Ds},isDataCell:function(){return qm},isDataTable:function(){return Lm},isHeader:function(){return zm},isRowHeader:function(){return gs},toArray:function(){return fs},toGrid:function(){return fs},traverse:function(){return Hm}})
var Im=function(e){var t,n,r,a,o=[]
for(t=0,r=e.rows.length;t<r;t++)for(n=0,a=e.rows[t].cells.length;n<a;n++)o.push(e.rows[t].cells[n])
return o}
function Pm(e,t,n){for(var r,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?gs:Ds,u=n[t.y][t.x],s=u.colSpan-1,l=u.getAttribute("rowspan"),c=(0===parseInt(l)||0===u.rowspan?n.length:u.rowSpan)-1,d=t.y+c,p=t.x+s,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],D=d;D>=f&&!r;D--)for(var g=p;g>=h;g--){var v=n[D]?n[D][g]:void 0
if(v){var b=i.utils.getNodeFromTree(v)
if(b[a]){r=b[a]
break}m.push(v)}}return r=(r||[]).concat(m.filter(o)),m.forEach(function(e){i.utils.getNodeFromTree(e)[a]=r}),r}var jm=function(e,t){if(e.getAttribute("headers")){var n=Ju(e,"headers")
if(n.filter(function(e){return e}).length)return n}t||(t=fs(Ai(e,"table")))
var r=hs(e,t),a=Pm("row",r,t),o=Pm("col",r,t)
return[].concat(a,o).reverse()},qm=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return ls(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},Lm=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!Ku(e))return!1
if("true"===e.getAttribute("contenteditable")||Ai(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===Kl(t))return!0
if("0"===e.getAttribute("datatable"))return!1
if(e.getAttribute("summary"))return!0
if(e.tHead||e.tFoot||e.caption)return!0
for(var r=0,a=e.children.length;r<a;r++)if("COLGROUP"===e.children[r].nodeName.toUpperCase())return!0
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
for(var D=0;D<s;D++){if(o=e.rows[D],f&&f!==n.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=n.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==n.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=n.getComputedStyle(o).getPropertyValue("background-image")}return s>=20||!(Qi(e).width>.95*Yi(n).width)&&!(u<10)&&!e.querySelector("object, embed, iframe, applet")},zm=function(e){if(Ds(e)||gs(e))return!0
if(e.getAttribute("id")){var t=va(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function $m(e,t,n,r){var a,o=n[t.y]?n[t.y][t.x]:void 0
return o?"function"==typeof r&&!0===(a=r(o,t,n))?[o]:((a=$m(e,{x:t.x+e.x,y:t.y+e.y},n,r)).unshift(o),a):[]}var Hm=function(e,t,n,r){if(Array.isArray(t)&&(r=n,n=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return $m(e,{x:t.x+e.x,y:t.y+e.y},n,r)},Vm={}
ce(Vm,{allowedAttr:function(){return Um},arialabelText:function(){return ns},arialabelledbyText:function(){return ts},getAccessibleRefs:function(){return Km},getElementUnallowedRoles:function(){return Zm},getExplicitRole:function(){return cs},getImplicitRole:function(){return js},getOwnedVirtual:function(){return Gs},getRole:function(){return Hs},getRoleType:function(){return Kl},getRolesByType:function(){return eD},getRolesWithNameFromContents:function(){return nD},implicitNodes:function(){return uD},implicitRole:function(){return js},isAccessibleRef:function(){return sD},isAriaRoleAllowedOnElement:function(){return Qm},isComboboxPopup:function(){return lD},isUnsupportedRole:function(){return ss},isValidRole:function(){return ls},label:function(){return dD},labelVirtual:function(){return kl},lookupTable:function(){return iD},namedFromContents:function(){return Ws},requiredAttr:function(){return pD},requiredContext:function(){return fD},requiredOwned:function(){return hD},validateAttr:function(){return DD},validateAttrValue:function(){return mD}})
var Um=function(e){var t=us.ariaRoles[e],n=q(ps())
return t?(t.allowedAttrs&&n.push.apply(n,q(t.allowedAttrs)),t.requiredAttrs&&n.push.apply(n,q(t.requiredAttrs)),n):n},Wm=/^idrefs?$/
function Gm(e,t,n){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var r=e.getAttribute("for")
t.has(r)?t.get(r).push(e):t.set(r,[e])}for(var a=0;a<n.length;++a){var o=n[a],i=vs(e.getAttribute(o)||"")
if(i){var u,s=Q(zf(i))
try{for(s.s();!(u=s.n()).done;){var l=u.value
t.has(l)?t.get(l).push(e):t.set(l,[e])}}catch(e){s.e(e)}finally{s.f()}}}}for(var c=0;c<e.childNodes.length;c++)1===e.childNodes[c].nodeType&&Gm(e.childNodes[c],t,n)}var Km=function(e){var t
e=e.actualNode||e
var n=Ei(e)
n=n.documentElement||n
var r=Xa.get("idRefsByRoot",function(){return new Map}),a=r.get(n)
return a||(a=new Map,r.set(n,a),Gm(n,a,Object.keys(us.ariaAttrs).filter(function(e){var t=us.ariaAttrs[e].type
return Wm.test(t)}))),null!==(t=a.get(e.id))&&void 0!==t?t:[]},Qm=function(e,t){var n=e instanceof na?e:Za(e),r=js(n),a=Ps(n)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==r&&!!a.allowedRoles},Ym=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],Xm={header:"banner",footer:"contentinfo"},Zm=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Vh(e).vNode
if(!qh(n))return[]
var r=n.props.nodeName,a=js(n)||Xm[r]
return function(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var n=zf(e.attr("role").toLowerCase())
t=t.concat(n)}return t.filter(function(e){return ls(e)})}(n).filter(function(e){return!function(e,t,n,r){return!(!n||e!==r)||(!Ym.includes(e)||Kl(e)===r)&&Qm(t,e)}(e,n,t,a)})},Jm=function(e){return Object.keys(us.ariaRoles).filter(function(t){return us.ariaRoles[t].type===e})},eD=function(e){return Jm(e)},tD=function(){return Xa.get("ariaRolesNameFromContent",function(){return Object.keys(us.ariaRoles).filter(function(e){return us.ariaRoles[e].nameFromContent})})},nD=function(){return tD()},rD=function(e){return null===e},aD=function(e){return null!==e},oD={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
oD.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:aD}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:aD}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:aD}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:aD}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:aD}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:aD}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:aD}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:aD}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:aD}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:aD}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:aD}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:aD}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:aD}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:aD}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},oD.implicitHtmlRole=ws,oD.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:aD}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:aD}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],oD.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:rD}},{nodeName:"img",attributes:{alt:rD}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],oD.evaluateRoleForElement={A:function(e){var t=e.node,n=e.out
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
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||n}},oD.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var iD=oD,uD=function(e){var t=null,n=iD.role[e]
return n&&n.implicit&&(t=ro(n.implicit)),t},sD=function(e){return!!Km(e).length}
function lD(e){var t,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).popupRoles,r=Hs(e)
if(null!==(t=n)&&void 0!==t||(n=rs["aria-haspopup"].values),!n.includes(r))return!1
var a=function(e){for(;e=e.parent;)if(null!==Hs(e,{noPresentational:!0}))return e
return null}(e)
if(cD(a))return!0
var o=e.props.id
if(!o)return!1
if(!e.actualNode)throw new Error("Unable to determine combobox popup without an actualNode")
var i=wi(e.actualNode).querySelectorAll('[aria-owns~="'.concat(o,'"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(o,'"][role~="combobox"]:not(select)'))
return Array.from(i).some(cD)}var cD=function(e){return e&&"combobox"===Hs(e)},dD=function(e){return e=Za(e),kl(e)},pD=function(e){var t=us.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?q(t.requiredAttrs):[]},fD=function(e){var t=us.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?q(t.requiredContext):null},hD=function(e){var t=us.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?q(t.requiredOwned):null},mD=function(e,t){var n,r,a=(e=e instanceof na?e:Za(e)).attr(t),o=us.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(r=zf(a)).reduce(function(e,t){return e&&o.values.includes(t)},0!==r.length)
case"idref":try{var i=Ei(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return Ju(e,t).some(function(e){return!!e})
case"string":return""!==a.trim()
case"decimal":return!(!(n=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!n[1]&&!n[2])
case"int":var u=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=u}},DD=function(e){return!!us.ariaAttrs[e]}
function gD(e){return"caption"===e.props.nodeName}var vD={}
ce(vD,{getAriaRolesByType:function(){return Jm},getAriaRolesSupportingNameFromContent:function(){return tD},getElementSpec:function(){return Ps},getElementsByContentType:function(){return ds},getGlobalAriaAttrs:function(){return ps},implicitHtmlRoles:function(){return ws}})
var bD=["alert","log","status"]
function yD(e,t){var n=e.actualNode
if("button"===Hs(e)||function(e,t){var n=e.actualNode,r=Hs(e),a=(n.getAttribute("aria-live")||"").toLowerCase().trim(),o=Jm("landmark")
return!!(["assertive","polite"].includes(a)||bD.includes(r)||o.includes(r)||t.regionMatcher&&Is(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Ef(e.actualNode)&&Lu(e.actualNode,"href")||!Qs(n)){for(var r=e;r;)r._hasRegionDescendant=!0,r=r.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return n!==a.body&&zl(n,!0)&&!function(e){return["none","presentation"].includes(Hs(e))&&!ql(e)}(e)?[e]:e.children.filter(function(e){return 1===e.actualNode.nodeType}).map(function(e){return yD(e,t)}).reduce(function(e,t){return e.concat(t)},[])}function FD(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function wD(e){var t=n.getComputedStyle(function(e){for(var t=e,n=e.textContent.trim(),r=n;r===n&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,r=e.children[a].textContent.trim()}while(""===r&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:FD(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function ED(e,t,n){return n.reduce(function(n,r){return n||(!r.size||e.fontSize/r.size>t.fontSize)&&(!r.weight||e.fontWeight-r.weight>t.fontWeight)&&(!r.italic||e.isItalic&&!t.isItalic)},!1)}var CD=/[;,\s]/,xD=/^[0-9.]+$/,AD={}
ce(AD,{aria:function(){return Vm},color:function(){return kD},dom:function(){return Fi},forms:function(){return ug},matches:function(){return Is},math:function(){return ru},standards:function(){return vD},table:function(){return Mm},text:function(){return Zu},utils:function(){return ra}})
var kD={}
ce(kD,{Color:function(){return bf},centerPointOfRect:function(){return TD},elementHasImage:function(){return oc},elementIsDistinct:function(){return RD},filteredRectStack:function(){return _D},flattenColors:function(){return MD},flattenShadowColors:function(){return PD},getBackgroundColor:function(){return eg},getBackgroundStack:function(){return jD},getContrast:function(){return rg},getForegroundColor:function(){return ag},getOwnBackgroundColor:function(){return Ff},getRectStack:function(){return BD},getStackingContext:function(){return QD},getStrokeColorsFromShadows:function(){return VD},getTextShadowColors:function(){return GD},hasValidContrastRatio:function(){return ig},incompleteData:function(){return ac},parseTextShadows:function(){return WD},stackingContextToColor:function(){return YD}})
var TD=function(e){if(!(e.left>n.innerWidth||e.top>n.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),n.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),n.innerHeight-1)}}
function ND(e){return e.getPropertyValue("font-family").split(/[,;]/g).map(function(e){return e.trim().toLowerCase()})}var RD=function(e,t){var r=n.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce(function(e,t){var n=new bf
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha},!1))return!0
var a=n.getComputedStyle(t)
if(ND(r)[0]!==ND(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce(function(e,t){return e||r.getPropertyValue(t)!==a.getPropertyValue(t)},!1),i=r.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},BD=function(e){var t=Uu(e),n=Ml(e)
return!n||n.length<=1?[t]:n.some(function(e){return void 0===e})?null:(n.splice(0,0,t),n)},_D=function(e){var t=BD(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var n,r=t.shift()
return t.forEach(function(a,o){if(0!==o){var i=t[o-1],u=t[o]
n=i.every(function(e,t){return e===u[t]})||r.includes(e)}}),n?t[0]:(ac.set("bgColor","elmPartiallyObscuring"),null)}return ac.set("bgColor","outsideViewport"),null},SD=["hue","saturation","color","luminosity"],OD={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t},hue:function(e,t){return t.setSaturation(e.getSaturation()).setLuminosity(e.getLuminosity())},saturation:function(e,t){return e.setSaturation(t.getSaturation()).setLuminosity(e.getLuminosity())},color:function(e,t){return t.setLuminosity(e.getLuminosity())},luminosity:function(e,t){return e.setLuminosity(t.getLuminosity())}}
function MD(e,t){var n,r=function(e,t,n){if(SD.includes(n))return OD[n](e,t)
var r=new bf
return["r","g","b"].forEach(function(a){r[a]=OD[n](e[a],t[a])}),r}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal"),a=ID(e.red,e.alpha,t.red,t.alpha,255*r.r),o=ID(e.green,e.alpha,t.green,t.alpha,255*r.g),i=ID(e.blue,e.alpha,t.blue,t.alpha,255*r.b),u=(n=e.alpha+t.alpha*(1-e.alpha),Math.min(Math.max(0,n),1))
if(0===u)return new bf(a,o,i,u)
var s=Math.round(a/u),l=Math.round(o/u),c=Math.round(i/u)
return new bf(s,l,c,u)}function ID(e,t,n,r,a){return t*(1-r)*e+t*r*a+(1-t)*r*n}function PD(e,t){var n=e.alpha,r=(1-n)*t.red+n*e.red,a=(1-n)*t.green+n*e.green,o=(1-n)*t.blue+n*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new bf(r,a,o,i)}function jD(e){for(var t=Ml(e).map(function(t){return function(e){var t=e.indexOf(a.body),r=e,o=Ff(n.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!oc(a.documentElement)){t>1&&(r.splice(t,1),r.push(a.body))
var i=r.indexOf(a.documentElement)
i>0&&(r.splice(i,1),r.push(a.documentElement))}return r}(t=Tf(t,e))}),r=0;r<t.length;r++){var o=t[r]
if(o[0]!==e)return ac.set("bgColor","bgOverlap"),null
if(0!==r&&!qD(o,t[0]))return ac.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function qD(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}var LD=.54,zD=.5,$D=1.5,HD=["top","right","bottom","left"]
function VD(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreEdgeCount,n=void 0!==t&&t,r=function(e){var t,n={},r=Q(e)
try{for(r.s();!(t=r.n()).done;){var a,o=t.value,i=o.colorStr,u=o.pixels
null!==(a=n[i])&&void 0!==a||(n[i]={top:[],right:[],bottom:[],left:[]})
var s=n[i],l=$(u,2),c=l[0],d=l[1]
c>zD?s.right.push(c):-c>zD&&s.left.push(-c),d>zD?s.bottom.push(d):-d>zD&&s.top.push(-d)}}catch(e){r.e(e)}finally{r.f()}return n}(e),a=Object.entries(r).map(function(e){var t=$(e,2),n=t[0],r=t[1],a=HD.filter(function(e){return 0!==r[e].length}).length
return{colorStr:n,sides:r,edgeCount:a}})
return!n&&a.some(function(e){var t=e.edgeCount
return t>1&&t<4})?null:a.map(UD).filter(function(e){return null!==e})}function UD(e){var t=e.colorStr,n=e.sides
if(4!==e.edgeCount)return null
var r=new bf
r.parseString(t)
var a=0,o=!0
return HD.forEach(function(e){a+=n[e].length/4,o&&(o=n[e].every(function(e){return e>$D}))}),o||(r.alpha=1-Math.pow(LD,a)),r}function WD(e){var t={pixels:[]},n=e.trim(),r=[t]
if(!n)return[]
for(;n;){var a=n.match(/^[a-z]+(\([^)]+\))?/i)||n.match(/^#[0-9a-f]+/i),o=n.match(/^([0-9.-]+)px/i)||n.match(/^(0)/)
if(a)Da(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),n=n.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){Da(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),n=n.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==n[0])throw new Error("Unable to process text-shadows: ".concat(n))
Da(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},r.push(t),n=n.substr(1).trim()}}return r.forEach(function(e){var t=e.pixels
2===t.length&&t.push(0)}),r}function GD(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,a=t.maxRatio,o=t.ignoreEdgeCount,i=[],u=n.getComputedStyle(e),s=u.getPropertyValue("text-shadow")
if("none"===s)return i
var l=u.getPropertyValue("font-size"),c=parseInt(l)
Da(!1===isNaN(c),"Unable to determine font-size value ".concat(l))
var d,p=[],f=Q(WD(s))
try{for(f.s();!(d=f.n()).done;){var h=d.value,m=h.colorStr||u.getPropertyValue("color"),D=$(h.pixels,3),g=D[0],v=D[1],b=D[2],y=void 0===b?0:b
if(!(a&&y>=c*a))if(r&&y<c*r)p.push({colorStr:m,pixels:h.pixels})
else{if(p.length>0){var F=VD(p,{ignoreEdgeCount:o})
if(null===F)return null
i.push.apply(i,q(F)),p.splice(0,p.length)}var w=KD({colorStr:m,offsetX:g,offsetY:v,blurRadius:y,fontSize:c})
i.push(w)}}}catch(e){f.e(e)}finally{f.f()}if(p.length>0){var E=VD(p,{ignoreEdgeCount:o})
if(null===E)return null
i.push.apply(i,q(E))}return i}function KD(e){var t=e.colorStr,n=e.offsetX,r=e.offsetY,a=e.blurRadius,o=e.fontSize
if(n>a||r>a)return new bf(0,0,0,0)
var i=new bf
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}function QD(e,t){var n,r=Za(e)
if(r._stackingContext)return r._stackingContext
var a=[],o=new Map
return(t=null!==(n=t)&&void 0!==n?n:jD(e)).forEach(function(e){var t,n=Za(e),r=function(e){var t=new bf
return t.parseString(e.getComputedStylePropertyValue("background-color")),t}(n),i=n._stackingOrder.filter(function(e){return!!e.vNode})
i.forEach(function(e,t){var n,r=e.vNode,u=null===(n=i[t-1])||void 0===n?void 0:n.vNode,s=JD(o,r,u)
0!==t||o.get(r)||a.unshift(s),o.set(r,s)})
var u=null===(t=i[i.length-1])||void 0===t?void 0:t.vNode,s=JD(o,n,u)
i.length||a.unshift(s),s.bgColor=r}),r._stackingContext=a,a}function YD(e){var t
if(null===(t=e.descendants)||void 0===t||!t.length){var n=e.bgColor
return n.alpha*=e.opacity,{color:n,blendMode:e.blendMode}}var r=MD(e.descendants.reduce(XD,ZD()),e.bgColor,e.descendants[0].blendMode)
return r.alpha*=e.opacity,{color:r,blendMode:e.blendMode}}function XD(e,t){var n
return n=e instanceof bf?e:YD(e).color,MD(YD(t).color,n,t.blendMode)}function ZD(e,t){var n,r
return{vNode:e,ancestor:t,opacity:parseFloat(null!==(n=null==e?void 0:e.getComputedStylePropertyValue("opacity"))&&void 0!==n?n:1),bgColor:new bf(0,0,0,0),blendMode:(r=null==e?void 0:e.getComputedStylePropertyValue("mix-blend-mode"),r||void 0),descendants:[]}}function JD(e,t,n){var r,a=e.get(n),o=null!==(r=e.get(t))&&void 0!==r?r:ZD(t,a)
return a&&n!==t&&!a.descendants.includes(o)&&a.descendants.unshift(o),o}function eg(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,o=Za(e),i=o._cache.getBackgroundColor
if(i)return t.push.apply(t,q(i.bgElms)),ac.set("bgColor",i.incompleteData),i.bgColor
var u=function(e,t,r){var o,i,u=jD(e)
if(!u)return null
var s=Sl(e),l=null!==(o=GD(e,{minRatio:r,ignoreEdgeCount:!0}))&&void 0!==o?o:[]
l.length&&(l=[{color:l.reduce(PD)}])
for(var c=0;c<u.length;c++){var d=u[c],p=n.getComputedStyle(d)
if(oc(d,p))return t.push(d),null
var f=Ff(p)
if(0!==f.alpha){if("inline"!==p.getPropertyValue("display")&&!tg(d,s))return t.push(d),ac.set("bgColor","elmPartiallyObscured"),null
if(t.push(d),1===f.alpha)break}}l=QD(e,u).map(YD).concat(l)
var h=function(e,t){var r=[]
if(!t){var o=a.documentElement,i=a.body,u=n.getComputedStyle(o),s=n.getComputedStyle(i),l=Ff(u),c=Ff(s),d=0!==c.alpha&&tg(i,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&r.unshift({color:c,blendMode:ng(s.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&r.unshift({color:l,blendMode:ng(u.getPropertyValue("mix-blend-mode"))})}return r}(e,u.includes(a.body))
if((i=l).unshift.apply(i,q(h)),0===l.length)return new bf(255,255,255,1)
var m=l.reduce(function(e,t){return MD(t.color,e.color instanceof bf?e.color:e,t.blendMode)})
return MD(m.color instanceof bf?m.color:m,new bf(255,255,255,1))}(e,t,r)
return o._cache.getBackgroundColor={bgColor:u,bgElms:t,incompleteData:ac.get("bgColor")},u}function tg(e,t){t=Array.isArray(t)?t:[t]
var r=e.getBoundingClientRect(),a=r.right,o=r.bottom,i=n.getComputedStyle(e).getPropertyValue("overflow")
return(["scroll","auto"].includes(i)||e instanceof n.HTMLHtmlElement)&&(a=r.left+e.scrollWidth,o=r.top+e.scrollHeight),t.every(function(e){return e.top>=r.top&&e.bottom<=o&&e.left>=r.left&&e.right<=a})}function ng(e){return e||void 0}var rg=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=MD(t,e))
var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}
function ag(e,t,r){for(var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.getComputedStyle(e),u=[function(){return function(e,t){var n=t.textStrokeEmMin,r=void 0===n?0:n,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),i=a/parseFloat(o)
if(isNaN(i)||i<r)return null
var u=e.getPropertyValue("-webkit-text-stroke-color")
return(new bf).parseString(u)}(i,o)},function(){return function(e){return(new bf).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}(i)},function(){return GD(e,{minRatio:0})}],s=[],l=0,c=u;l<c.length;l++){var d=(0,c[l])()
if(d&&(s=s.concat(d),1===d.alpha))break}var p=s.reduce(function(e,t){return MD(e,t)})
if(null!==(a=r)&&void 0!==a||(r=eg(e,[])),null===r){var f=ac.get("bgColor")
return ac.set("fgColor",f),null}var h=QD(e)
return MD(function(e,t,n){for(;t;){var r
if(1===t.opacity&&t.ancestor)t=t.ancestor
else{e.alpha*=t.opacity
var a=(null===(r=t.ancestor)||void 0===r?void 0:r.descendants)||n
1!==t.opacity&&(a=a.slice(0,a.indexOf(t)))
var o=a.map(YD)
if(o.length){var i=o.reduce(function(e,t){return MD(t.color,e.color instanceof bf?e.color:e)},{color:new bf(0,0,0,0),blendMode:"normal"})
e=MD(e,i),t=t.ancestor}else t=t.ancestor}}return e}(p,og(h,e),h),new bf(255,255,255,1))}function og(e,t){var n,r=Q(e)
try{for(r.s();!(n=r.n()).done;){var a,o=n.value
if((null===(a=o.vNode)||void 0===a?void 0:a.actualNode)===t)return o
var i=og(o.descendants,t)
if(i)return i}}catch(e){r.e(e)}finally{r.f()}}var ig=function(e,t,n,r){var a=rg(e,t),o=r&&Math.ceil(72*n)/96<14||!r&&Math.ceil(72*n)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},ug={}
ce(ug,{isAriaCombobox:function(){return rl},isAriaListbox:function(){return nl},isAriaRange:function(){return ol},isAriaTextbox:function(){return tl},isDisabled:function(){return lg},isNativeSelect:function(){return el},isNativeTextbox:function(){return Js}})
var sg=["fieldset","button","select","input","textarea"],lg=function e(t){var n=t._isDisabled
if("boolean"==typeof n)return n
var r=t.props.nodeName,a=t.attr("aria-disabled")
return n=!(!sg.includes(r)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=n,n}
function cg(e,t){if(!e||!t)return!1
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t)
return n.length===r.length&&n.every(function(n){var r=e[n],a=t[n]
return o(r)===o(a)&&("object"===o(r)||"object"===o(a)?cg(r,a):r===a)})}function dg(e){var t=Hs(e),n=t&&t.includes("heading"),r=e.attr("aria-level"),a=parseInt(r,10),o=$(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return n?o&&!r?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function pg(e,t){var n,r=null===(n=t.data)||void 0===n?void 0:n.headingOrder,a=hg(t.node.ancestry,1)
if(!r)return e
var o=r.map(function(e){return function(e,t){return z({},e,{ancestry:t.concat(e.ancestry)})}(e,a)}),i=function(e,t){for(;t.length;){var n=fg(e,t)
if(-1!==n)return n
t=hg(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,q(o)):e.splice.apply(e,[i,0].concat(q(o))),e}function fg(e,t){return e.findIndex(function(e){return $h(e.ancestry,t)})}function hg(e,t){return e.slice(0,e.length-t)}function mg(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return n.top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right}function Dg(e){return e.getComputedStylePropertyValue("pointer-events")}function gg(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function vg(e,t){return Di(e,t)&&!Qu(t)}function bg(e){return e.map(function(e){return e.actualNode})}function yg(e){return Math.round(10*e)/10}function Fg(e,t,n){var r=n.validRoles,a=void 0===r?[]:r,o=n.validNodeNames,i=void 0===o?[]:o,u=e.props,s=u.nodeName,l=u.nodeType,c=u.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!Qs(e))return!1
var p=cs(e)
return p?!a.includes(p)&&d+"[role=".concat(p,"]"):!i.includes(s)&&d+s}function wg(e){return"div"===e.props.nodeName&&null===cs(e)}function Eg(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map(function(e){return{vChild:e,nested:t}})}function Cg(e){return""!==(e||"").trim()}function xg(e){var t=El(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return vs(t)}function Ag(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach(function(e){"widget"===Kl(e)&&Ku(e)?t.push(e):t.push.apply(t,q(Ag(e)))}),t}function kg(e){var t=Kh(e.attr("tabindex"))
return null!==t&&t<0}function Tg(e){if(Qu(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some(function(e){return Tg(e)})}var Ng=["block","list-item","table","flex","grid","inline-block"]
function Rg(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==Ng.indexOf(t)||"table-"===t.substr(0,6)}function Bg(e,t){var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}var _g=["block","list-item","table","flex","grid","inline-block"]
function Sg(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==_g.indexOf(t)||"table-"===t.substr(0,6)}var Og=Aa(function(e,t){var r=n.getComputedStyle(e,t),a=function(e,t){return r.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Ff(r).alpha&&a("background-image","none"))return 0
var o=Mg(r.getPropertyValue("width")),i=Mg(r.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value})
function Mg(e){var t=$(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),n=t[1],r=void 0===n?"":n,a=t[2],o=void 0===a?"":a
return{value:parseFloat(r),unit:o.toLowerCase()}}var Ig={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Pg={alert:!0,alertdialog:!0,application:!0,article:!0,banner:!1,complementary:!0,contentinfo:!0,dialog:!0,form:!0,log:!0,main:!0,navigation:!0,region:!0,search:!1,status:!0,tabpanel:!0}
function jg(e,t,n,r){var a=cs(e)
if(n||(n=fD(a)),!n)return null
for(var o=n.includes("group"),i=r?e:e.parent;i;){var u=Hs(i,{noPresentational:!0})
if(u){if("group"!==u||!o)return n.includes(u)?null:n
t.includes(a)&&n.push(a),n=n.filter(function(e){return"group"!==e}),i=i.parent}else i=i.parent}return n}function qg(e){var t=e.vNode
return 3===t.props.nodeType?t.props.nodeValue.trim().length>0:Ll(t,!1,!0)}var Lg=Aa(function(e){if(e){var t=Hs(e,{noPresentational:!0,chromium:!0})
return t?Kl(t):Lg(e.parent)}})
function zg(e){var t,n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).invalidTableRowAttrs,a=arguments.length>2?arguments[2]:void 0,o=null!==(t=null==r||null===(n=r.filter)||void 0===n?void 0:n.call(r,function(e){return a.hasAttr(e)}))&&void 0!==t?t:[]
if(0===o.length)return!0
var i=function(e){if(e.parent)return yo(e,'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]')}(a),u=i&&Hs(i)
if(!u||"treegrid"===u)return!0
var s="row".concat(o.length>1?"Plural":"Singular")
return this.data({messageKey:s,invalidAttrs:o,ownerRole:u}),!1}function $g(e,t,n){var r,a=n.props,o=a.nodeName,i=a.type,u=(r=n.attr("aria-checked"))?(r=r.toLowerCase(),["mixed","true"].includes(r)?r:"false"):""
if("input"!==o||"checkbox"!==i||!u)return!0
var s,l=(s=n).props.indeterminate?"mixed":s.props.checked?"true":"false"
return u===l||(this.data({messageKey:"checkbox",checkState:l}),!1)}var Hg={row:zg,checkbox:$g}
function Vg(e,t,n){return"aria-required"===e&&"false"===t||!("aria-multiline"!==e||"false"!==t||!n.hasAttr("contenteditable"))}var Ug=function(e,t){try{return"svg"===t.props.nodeName||!!yo(t,"svg")}catch(e){return!1}},Wg=[function(e,t){return Gg(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!Ug(0,t)},function(e,t){return Ku(t)},function(e,t){return Qu(t)||!Kg(t)},function(e){return!Zl(e,{noLengthCompare:!0})}]
function Gg(e){return"widget"===Kl(e)}var Kg=Aa(function e(t){return!(null==t||!t.parent)&&(!(!Gg(t.parent)||!Qu(t.parent))||e(t.parent))}),Qg=function(e,t){var n=cs(t)
return!(n&&!["none","presentation"].includes(n)&&!(as[n]||{}).accessibleNameRequired&&!Ku(t))}
function Yg(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.childNodes.length),0===n.getClientRects().length}var Xg=function(e,t,n){return n.initiator},Zg={emoji:!0,nonBmp:!1,punctuations:!0}
function Jg(e){return!e||"true"!==e.getAttribute("aria-hidden")&&Jg(Gi(e))}var ev={"abstractrole-evaluate":function(e,t,n){var r=zf(n.attr("role")).filter(function(e){return"abstract"===Kl(e)})
return r.length>0&&(this.data(r),!0)},"accesskeys-after":function(e){var t={}
return e.filter(function(e){if(!e.data)return!1
var n=e.data.toUpperCase()
return t[n]?(t[n].relatedNodes.push(e.relatedNodes[0]),!1):(t[n]=e,e.relatedNodes=[],!0)}).map(function(e){return e.result=!!e.relatedNodes.length,e})},"accesskeys-evaluate":function(e,t,n){return Vi(n)||(this.data(n.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,n){var r=n.attr("alt")
return"string"==typeof r&&/^\s+$/.test(r)},"aria-allowed-attr-evaluate":function(e,t,n){var r=[],a=Hs(n),o=Um(a)
Array.isArray(t[a])&&(o=Xh(t[a].concat(o)))
var i,u=Q(n.attrNames)
try{for(u.s();!(i=u.n()).done;){var s=i.value
!DD(s)||o.includes(s)||Vg(s,n.attr(s),n)||r.push(s)}}catch(e){u.e(e)}finally{u.f()}return!r.length||(this.data(r.map(function(e){return e+'="'+n.attr(e)+'"'})),!(a||qh(n)||Ku(n))&&void 0)},"aria-allowed-attr-matches":function(e,t){var n=/^aria-/,r=t.attrNames
if(r.length)for(var a=0,o=r.length;a<o;a++)if(n.test(r[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.allowImplicit,a=void 0===r||r,o=t.ignoredTags,i=void 0===o?[]:o,u=n.props.nodeName
if(i.map(function(e){return e.toLowerCase()}).includes(u))return!0
var s=Zm(n,a)
if(s.length){if(this.data(s),!Qs(n))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==cs(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,n){return"true"===n.attr("aria-busy")},"aria-conditional-attr-evaluate":function(e,t,n){var r=Hs(n)
return!Hg[r]||Hg[r].call(this,e,t,n)},"aria-conditional-checkbox-attr-evaluate":$g,"aria-conditional-row-attr-evaluate":zg,"aria-errormessage-evaluate":function(e,t,n){t=Array.isArray(t)?t:[]
var r=n.attr("aria-errormessage"),a=n.hasAttr("aria-errormessage"),o=n.attr("aria-invalid")
return!n.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(r)||!a||(this.data(zf(r)),function(e){if(""===e.trim())return us.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&Ju(n,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:zf(e)})}return t?Qs(t)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||zf(n.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:zf(e)}),!1):void 0}.call(this,r))},"aria-has-attr-matches":function(e,t){var n=/^aria-/
return t.attrNames.some(function(e){return n.test(e)})},"aria-hidden-body-evaluate":function(e,t,n){return"true"!==n.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return Jg(Gi(e))},"aria-label-evaluate":function(e,t,n){return!!vs(ns(n))},"aria-labelledby-evaluate":function(e,t,n){try{return!!vs(ts(n))}catch(e){return}},"aria-level-evaluate":function(e,t,n){var r=n.attr("aria-level")
if(!(parseInt(r,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=n.props.nodeName,o=Hs(n,{chromium:!0}),i=function(e,t,n,r){var a=us.ariaRoles[t]
return a?a.prohibitedAttrs||[]:t||r.includes(n)||"widget"===Lg(e)?[]:["aria-label","aria-labelledby"]}(n,o,a,r).filter(function(e){return!!n.attrNames.includes(e)&&""!==vs(n.attr(e))})
if(0===i.length)return!1
var u=n.hasAttr("role")?"hasRole":"noRole"
u+=i.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:u,prohibited:i})
var s=dl(n,{subtreeDescendant:!0})
return""===vs(s)||void 0},"aria-required-attr-evaluate":function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=cs(r),o=r.attrNames,i=pD(a)
if(Array.isArray(n[a])&&(i=Xh(n[a],i)),!a||!o.length||!i.length)return!0
if(function(e,t){return"separator"===t&&!Ku(e)}(r,a)||function(e,t){return"combobox"===t&&"false"===e.attr("aria-expanded")}(r,a))return!0
if("slider"===a&&null!==(t=r.attr("aria-valuetext"))&&void 0!==t&&t.trim())return!0
var u=Ps(r),s=i.filter(function(e){return!r.attr(e)&&!function(e,t){var n
return void 0!==(null===(n=e.implicitAttrs)||void 0===n?void 0:n[t])}(u,e)})
return!s.length||(this.data(s),!1)},"aria-required-children-evaluate":function(e,t,n){var r=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=cs(n,{dpub:!0}),o=hD(a)
if(null===o)return!0
var i=function(e,t){for(var n,r=[],a=Gs(e),o=function(){if(3===n.props.nodeType&&r.push({vNode:n,role:null}),1!==n.props.nodeType||!Qs(n))return 1
var e=Hs(n,{noPresentational:!0}),o=function(e){return ps().find(function(t){return e.hasAttr(t)})}(n),i=!!o||Ku(n)
if(!e&&!i||["group","rowgroup"].includes(e)&&t.some(function(t){return t===e}))a.push.apply(a,q(n.children))
else if(e||i){var u=o||"tabindex"
r.push({role:e,attr:u,vNode:n})}};n=a.shift();)o()
return r}(n,o),u=i.filter(function(e){var t=e.role
return 1===e.vNode.props.nodeType&&!o.includes(t)})
return u.length?(this.relatedNodes(u.map(function(e){return e.vNode})),this.data({messageKey:"unallowed",values:u.map(function(e){return function(e,t){var n=e.props,r=n.nodeName
if(3===n.nodeType)return"#text"
var a=cs(e,{dpub:!0})
return a?"[role=".concat(a,"]"):t?r+"[".concat(t,"]"):r}(e.vNode,e.attr)}).filter(function(e,t,n){return n.indexOf(e)===t}).join(", ")}),!1):!!function(e,t){return t.some(function(t){var n=t.role
return n&&e.includes(n)})}(o,i)||("true"===n.attr("aria-busy")?(this.data({messageKey:"aria-busy"}),!0):(this.data(o),!(!r.includes(a)||i.some(qg))&&void 0))},"aria-required-children-matches":function(e,t){var n=cs(t,{dpub:!0})
return!!hD(n)},"aria-required-parent-evaluate":function(e,t,n){var r=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=jg(n,r)
if(!a)return!0
var o=function(e){for(var t=[],n=null;e;){if(e.getAttribute("id")){var r=va(e.getAttribute("id"));(n=Ei(e).querySelector("[aria-owns~=".concat(r,"]")))&&t.push(n)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,u=o.length;i<u;i++)if(!(a=jg(Za(o[i]),r,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var n=cs(t)
return!!fD(n)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Hs(arguments.length>2?arguments[2]:void 0)
return!!(t.supportedRoles||[]).includes(n)||!(!n||"presentation"===n||"none"===n)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,n){var r=n.attrNames.filter(function(t){var n=us.ariaAttrs[t]
if(!DD(t))return!1
var r=n.unsupported
return"object"!==o(r)?!!r:!Is(e,r.exceptions)})
return!!r.length&&(this.data(r),!0)},"aria-valid-attr-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r=[],a=/^aria-/
return n.attrNames.forEach(function(e){-1===t.indexOf(e)&&a.test(e)&&!DD(e)&&r.push(e)}),!r.length||(this.data(r),!1)},"aria-valid-attr-value-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r="",a="",o=[],u=/^aria-/,s=["aria-errormessage"],l={"aria-controls":function(){var e=!1===["false",null].includes(n.attr("aria-haspopup"))
return e&&(r='aria-controls="'.concat(n.attr("aria-controls"),'"'),a="controlsWithinPopup"),"false"!==n.attr("aria-expanded")&&"false"!==n.attr("aria-selected")&&!1===e},"aria-current":function(e){e||(r='aria-current="'.concat(n.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==n.attr("aria-expanded")},"aria-describedby":function(e){e||(r='aria-describedby="'.concat(n.attr("aria-describedby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(r='aria-labelledby="'.concat(n.attr("aria-labelledby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return n.attrNames.forEach(function(e){if(!s.includes(e)&&!t.includes(e)&&u.test(e)){var i,c=n.attr(e)
try{i=mD(n,e)}catch(t){return r="".concat(e,'="').concat(c,'"'),void(a="idrefs")}l[e]&&!l[e](i)||i||(""!==c||function(e){var t
return"string"===(null===(t=us.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(r=e,a="empty"))}}),o.length?(this.data(o),!1):!r||void this.data({messageKey:a,needsReview:r})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!n.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var r=n.attr(t.attribute)
return!!vs(r)||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,n){if("input"!==n.props.nodeName)return!0
var r=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":r,"cc-exp":["text","search","month","tel"],"cc-exp-month":r,"cc-exp-year":r,"cc-csc":r,"transaction-amount":r,"bday-day":r,"bday-month":r,"bday-year":r,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach(function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])})
var u=n.attr("autocomplete").split(/\s+/g).map(function(e){return e.toLowerCase()}),s=u[u.length-1]
if(xl.stateTerms.includes(s))return!0
var l=i[s],c=n.hasAttr("type")?vs(n.attr("type")).toLowerCase():"text"
return c=wm().includes(c)?c:"text",void 0===l?"text"===c:l.includes(c)},"autocomplete-matches":function(e,t){var n=t.attr("autocomplete")
if(!n||""===vs(n))return!1
var r=t.props.nodeName
if(!1===["textarea","input","select"].includes(r))return!1
if("input"===r&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=Kh(t.attr("tabindex"))
if(i<0&&o){var u=us.ariaRoles[o]
if(void 0===u||"widget"!==u.type)return!1}return!(i<0&&t.actualNode&&!Ji(t)&&!Qs(t))},"autocomplete-valid-evaluate":function(e,t,n){var r=n.attr("autocomplete")||""
return Al(r,t)},"avoid-inline-spacing-evaluate":function(e,t){var n=t.cssProperties.filter(function(t){if("important"===e.style.getPropertyPriority(t))return t})
return!(n.length>0&&(this.data(n),1))},"braille-label-equivalent-evaluate":function(e,t,n){var r
if(!(null!==(r=n.attr("aria-braillelabel"))&&void 0!==r?r:"").trim())return!0
try{return""!==vs(Fl(n))}catch(e){return}},"braille-roledescription-equivalent-evaluate":function(e,t,n){var r,a=null!==(r=n.attr("aria-brailleroledescription"))&&void 0!==r?r:""
if(""===vs(a))return!0
var o=n.attr("aria-roledescription")
return"string"!=typeof o?(this.data({messageKey:"noRoleDescription"}),!1):""!==vs(o)||(this.data({messageKey:"emptyRoleDescription"}),!1)},"bypass-matches":function(e,t,n){return!Xg(0,0,n)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,n){return!cm(n,"track").some(function(e){return"captions"===(e.attr("kind")||"").toLowerCase()})&&void 0},"caption-faked-evaluate":function(e){var t=fs(e),n=t[0]
return t.length<=1||n.length<=1||e.rows.length<=1||n.reduce(function(e,t,r){return e||t!==n[r+1]&&void 0!==n[r+1]},!1)},"color-contrast-evaluate":function(e,t,r){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,u=t.boldValue,s=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!Ji(e))return this.data({messageKey:"hidden"}),!0
var f=Xs(r,!1,!0)
if(a&&function(e){var t={nonBmp:!0},n=bl(e,t),r=""===vs(El(e,t))
return n&&r}(f))this.data({messageKey:"nonBmp"})
else{var h=n.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),D=h.getPropertyValue("font-weight"),g=parseFloat(D)>=u||"bold"===D,v=Math.ceil(72*m)/96,b=g&&v<s||!g&&v<l?c.normal:c.large,y=b.expected,F=b.minThreshold,w=b.maxThreshold,E=function(e,t){var n=t.pseudoSizeThreshold,r=void 0===n?.25:n,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*r
do{if(Og(e.actualNode,":before")+Og(e.actualNode,":after")>i)return e}while(e=e.parent)}}(r,{ignorePseudo:i,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:y+":1"}),void this.relatedNodes(E.actualNode)
var C=GD(e,{minRatio:.001,maxRatio:d})
if(null!==C){var x=[],A=eg(e,x,d),k=ag(e,!1,A,t),T=null,N=null,R=null
if(0===C.length)T=rg(A,k)
else if(k&&A){R=[].concat(q(C),[A]).reduce(PD)
var B=rg(A,k),_=rg(A,R),S=rg(R,k);(T=Math.max(B,_,S))!==B&&(N=_>S?"shadowOnBgColor":"fgOnShadowColor")}var O=T>y
if("number"==typeof F&&("number"!=typeof T||T<F)||"number"==typeof w&&("number"!=typeof T||T>w))return this.data({contrastRatio:T}),!0
var M,I=Math.floor(100*T)/100
null===A?M=ac.get("bgColor"):O||(M=N)
var P=1===I,j=1===f.length
return P?M=ac.set("bgColor","equalRatio"):O||!j||o||(M="shortTextContent"),this.data({fgColor:k?k.toHexString():void 0,bgColor:A?A.toHexString():void 0,contrastRatio:I,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:M,expectedContrastRatio:y+":1",shadowColor:R?R.toHexString():void 0}),null===k||null===A||P||j&&!o&&!O?(M=null,ac.clear(),void this.relatedNodes(x)):(O||this.relatedNodes(x),O)}this.data({messageKey:"complexTextShadows"})}},"color-contrast-matches":function(e,t){var r=t.props,o=r.nodeName,i=r.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(lg(t)||_u(t))return!1
if(["input","select","textarea"].includes(o)){var u=n.getComputedStyle(e),s=parseInt(u.getPropertyValue("text-indent"),10)
if(s){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+s,right:l.right+s},!Pf(l,e))return!1}return!0}var c=xi(t,"label")
if("label"===o||c){var d=c||e,p=c?Za(c):t
if(d.htmlFor){var f=Ei(d).getElementById(d.htmlFor),h=f&&Za(f)
if(h&&lg(h))return!1}var m=cm(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&lg(m))return!1}for(var D=[],g=t;g;){if(g.props.id){var v=Km(g).filter(function(e){return zf(e.getAttribute("aria-labelledby")||"").includes(g.props.id)}).map(function(e){return Za(e)})
D.push.apply(D,q(v))}g=g.parent}if(D.length>0&&D.every(lg))return!1
if(!function(e){var t=Xs(e,!1,!0)
return""!==t&&""!==El(t,Zg)&&e.children.some(function(e){return"#text"===e.props.nodeName&&!yl(e)})}(t))return!1
for(var b=a.createRange(),y=t.children,F=0;F<y.length;F++){var w=y[F]
3===w.actualNode.nodeType&&""!==vs(w.actualNode.nodeValue)&&b.selectNodeContents(w.actualNode)}var E=Array.from(b.getClientRects()),C=Ni(t)
return E.some(function(t){var n=Pf(t,e)
if(!C.length)return n
var r=C.some(function(e){return ki(t,e.boundingClientRect)})
return n&&r})},"css-orientation-lock-evaluate":function(e,t,n,r){var a=(r||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,u=void 0===i?0:i
if(o&&o.length){for(var s=!1,l=[],c=o.reduce(function(e,t){var n=t.sheet,r=t.root,a=t.shadowId||"topDocument"
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
var n=$(t,3)
return m(n[1],n[2])}(r),o=a+m("rotate",n.rotate)
return!!o&&(o=Math.abs(o),!(Math.abs(o-180)%180<=u)&&Math.abs(o-90)%90<=u)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var r=Array.from(n.querySelectorAll(e.selectorText))||[]
l=l.concat(r)}s=s||t})})},p=0,f=Object.keys(c);p<f.length;p++)d()
return!s||(l.length&&this.relatedNodes(l),!1)}function h(e){var t=e.type,n=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(n)||/orientation:\s*portrait/i.test(n))}function m(e,t){switch(e){case"rotate":case"rotateZ":return D(t)
case"rotate3d":var n=$(t.split(",").map(function(e){return e.trim()}),4),r=n[2],a=n[3]
if(0===parseInt(r))return
return D(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var n=$(t,2),r=n[0],a=n[1]
return g(Math.atan2(parseFloat(a),parseFloat(r)))}var o=parseFloat(t[8]),i=Math.asin(o),u=Math.cos(i)
return g(Math.acos(parseFloat(t[0])/u))}(t)
default:return 0}}function D(e){var t=$(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(!t)return 0
var n,r,a=parseFloat(e.replace(t,""))
switch(t){case"rad":return g(a)
case"grad":return r=a,(r%=400)<0&&(r+=400),Math.round(r/400*360)
case"turn":return n=a,Math.round(360/(1/n))
default:return parseInt(a)}}function g(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(Lm(e)){var t=fs(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return Lm(e)},"deprecatedrole-evaluate":function(e,t,n){var r=Hs(n,{dpub:!0,fallback:!0}),a=us.ariaRoles[r]
return!(null==a||!a.deprecated||(this.data(r),0))},"dlitem-evaluate":function(e){var t=Gi(e),n=t.nodeName.toUpperCase(),r=cs(t)
return"DIV"===n&&["presentation","none",null].includes(r)&&(n=(t=Gi(t)).nodeName.toUpperCase(),r=cs(t)),"DL"===n&&!(r&&!["presentation","none","list"].includes(r))},"doc-has-title-evaluate":function(){var e=a.title
return!!vs(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(va(t),'"]'),r=Array.from(Ei(e).querySelectorAll(n))
return!sD(e)&&r.some(Ku)},"duplicate-id-after":function(e){var t=[]
return e.filter(function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)})},"duplicate-id-aria-matches":function(e){return sD(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var n=Ei(e),r=Array.from(n.querySelectorAll('[id="'.concat(va(t),'"]'))).filter(function(t){return t!==e})
return r.length&&this.relatedNodes(r),this.data(t),0===r.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(va(t),'"]'),r=Array.from(Ei(e).querySelectorAll(n))
return!sD(e)&&r.every(function(e){return!Ku(e)})},"duplicate-img-label-evaluate":function(e,t,n){if(["none","presentation"].includes(Hs(n)))return!1
var r=yo(n,t.parentSelector)
if(!r)return!1
var a=Xs(r,!0).toLowerCase()
return""!==a&&a===Fl(n).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,n){var r=this
if(!n.attr("id"))return!1
if(n.actualNode){var a=Ei(n.actualNode),o=va(n.attr("id")),i=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(i),!i.length)return!1
try{return i.some(function(e){if(Ji(e)){var t=vs(es(e,{inControlContext:!0,startNode:n}))
return r.data({explicitLabel:t}),!!t}return!0})}catch(e){return}}},"fallbackrole-evaluate":function(e,t,n){var r=zf(n.attr("role"))
return!(r.length<=1)&&(!function(e,t){return!js(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(n,r)||void 0)},"focusable-content-evaluate":function(e,t,n){var r=n.tabbableElements
return!!r&&r.filter(function(e){return e!==n}).length>0},"focusable-disabled-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter(function(e){return r.includes(e.props.nodeName)})
return this.relatedNodes(o.map(function(e){return e.actualNode})),!(0!==o.length&&!Jl())||!!o.every(function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t})&&void 0},"focusable-element-evaluate":function(e,t,n){return!(!n.hasAttr("contenteditable")||!function e(t){var r=t.attr("contenteditable")
if("true"===r||""===r)return!0
if("false"===r)return!1
var a=yo(n.parent,"[contenteditable]")
return!!a&&e(a)}(n))||Qu(n)},"focusable-modal-open-evaluate":function(e,t,n){var r=n.tabbableElements.map(function(e){return e.actualNode})
return!r||!r.length||!Jl()||void this.relatedNodes(r)},"focusable-no-name-evaluate":function(e,t,n){if(!Qu(n))return!1
try{return!Fl(n)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter(function(e){return!r.includes(e.props.nodeName)})
return this.relatedNodes(o.map(function(e){return e.actualNode})),!(0!==o.length&&!Jl())||!!o.every(function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t})&&void 0},"frame-focusable-content-evaluate":function(e,t,n){if(n.children)try{return!n.children.some(function(e){return Tg(e)})}catch(e){return}},"frame-focusable-content-matches":function(e,t,n){var r,a
return!n.initiator&&!n.focusable&&(null===(r=n.size)||void 0===r?void 0:r.width)*(null===(a=n.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter(function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var n=e.node.ancestry.flat(1/0).join(" > ")
return t[n]=e,!0}var r=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[r]&&(t[r].result=!0),!1})},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!vs(t)},"has-alt-evaluate":function(e,t,n){var r=n.props.nodeName
return!!["img","input","area"].includes(r)&&n.hasAttr("alt")},"has-descendant-after":function(e){return e.some(function(e){return!0===e.result})&&e.forEach(function(e){e.result=!0}),e},"has-descendant-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&Jl())return!0
var r=Jh(n,t.selector,function(e){return Qs(e)})
return this.relatedNodes(r.map(function(e){return e.actualNode})),r.length>0},"has-global-aria-attribute-evaluate":function(e,t,n){var r=ps().filter(function(e){return n.hasAttr(e)})
return this.data(r),r.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==js(t,{chromium:!0})},"has-lang-evaluate":function(e,t,n){var r=void 0!==a&&ka(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&Cg(n.attr("xml:lang"))&&!Cg(n.attr("lang"))&&!r?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some(function(e){return Cg(n.attr(e))})||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,n){try{return""!==vs(dl(n))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var n=Kl(t)
return"widget"===n||"composite"===n},"heading-matches":function(e,t){return"heading"===Hs(t)},"heading-order-after":function(e){var t=function(e){return(e=q(e)).sort(function(e,t){var n=e.node,r=t.node
return n.ancestry.length-r.ancestry.length}),e.reduce(pg,[]).filter(function(e){return-1!==e.level})}(e)
return e.forEach(function(e){e.result=function(e,t){var n,r,a,o,i=fg(t,e.node.ancestry),u=null!==(n=null===(r=t[i])||void 0===r?void 0:r.level)&&void 0!==n?n:-1,s=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==u?u-s<=1:void 0)}(e,t)}),e},"heading-order-evaluate":function(){var e=Xa.get("headingOrder")
if(e)return!0
var t=Jh(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",Qs)
return e=t.map(function(e){return{ancestry:[Wa(e.actualNode)],level:dg(e)}}),this.data({headingOrder:e}),Xa.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,n){var r=Nl(n),a=e.getAttribute("title")
return!!r&&(a||(a="",e.getAttribute("aria-describedby")&&(a=Ju(e,"aria-describedby").map(function(e){return e?es(e):""}).join(""))),vs(a)===vs(r))},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Ll(r)){var a=n.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=Gi(e),i=o&&n.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,n){if(n.hasAttr("id")){if(!n.actualNode)return
var r=Ei(e),a=va(e.getAttribute("id")),o=r.querySelector('label[for="'.concat(a,'"]'))
if(o&&!Qs(o)){var i
try{i=Fl(n).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!Ug(0,t)},"html5-scope-evaluate":function(e){return!Gl(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter(function(e){return void 0!==e.result}),n=[],r={},a=function(e){var a,o=t[e],i=o.data,u=i.name,s=i.urlProps
if(r[u])return 1
var l=t.filter(function(t,n){return t.data.name===u&&n!==e}),c=l.every(function(e){return cg(e.data.urlProps,s)})
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,q(l.map(function(e){return e.relatedNodes[0]}))),r[u]=l,n.push(o)},o=0;o<t.length;o++)a(o)
return n},"identical-links-same-purpose-evaluate":function(e,t,n){var r=Zu.accessibleTextVirtual(n),a=Zu.sanitize(Zu.removeUnicode(r,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:Fi.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!Fl(t))return!1
var n=Hs(e)
return!n||"link"===n},"implicit-evaluate":function(e,t,n){try{var r=yo(n,"label")
if(r){var a=vs(Fl(r,{inControlContext:!0,startNode:n}))
return r.actualNode&&this.relatedNodes([r.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.minValue,i=t.maxValue,u=t.normalValue,s=void 0===u?0:u,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(r)||c&&!ec(e))return!0
var d={}
"number"==typeof o&&(d.minValue=o),"number"==typeof i&&(d.maxValue=i)
var p=e.style.getPropertyValue(r)
if(["inherit","unset","revert","revert-layer"].includes(p))return this.data(z({value:p},d)),!0
var f=function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.normalValue,i=n.getComputedStyle(e),u=i.getPropertyValue(r)
if("normal"===u)return o
var s=parseFloat(u)
if(a)return s
var l=parseFloat(i.getPropertyValue("font-size")),c=Math.round(s/l*100)/100
return isNaN(c)?u:c}(e,{absoluteValues:a,cssProperty:r,normalValue:s})
return this.data(z({value:f},d)),"number"==typeof f?("number"!=typeof o||f>=o)&&("number"!=typeof i||f<=i):void 0},"inserted-into-focus-order-matches":function(e){return Hl(e)},"internal-link-present-evaluate":function(e,t,n){return cm(n,"a[href]").some(function(e){return/^#[^/!]/.test(e.attr("href"))})},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=[],a=[]
if(n.children){for(var o=Eg(n.children);o.length;){var i,u=o.shift(),s=u.vChild,l=u.nested
if(t.divGroups&&!l&&wg(s)){if(!s.children)return
var c=Eg(s.children,!0)
o.push.apply(o,q(c))}else{var d=Fg(s,l,t)
d&&(a.includes(d)||a.push(d),1===(null==s||null===(i=s.actualNode)||void 0===i?void 0:i.nodeType)&&r.push(s.actualNode))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(r),!0)}},"invalidrole-evaluate":function(e,t,n){var r=zf(n.attr("role"))
return!!r.every(function(e){return!ls(e.toLowerCase(),{allowAbstract:!0})})&&(this.data(r),!0)},"is-element-focusable-evaluate":function(e,t,n){return Ku(n)},"is-initiator-matches":Xg,"is-on-screen-evaluate":function(e){return Ji(e)},"is-visible-matches":function(e){return Ji(e)},"is-visible-on-screen-matches":function(e,t){return Ji(t)},"label-content-name-mismatch-evaluate":function(e,t,n){var r,a,o,i,u=null==t?void 0:t.pixelThreshold,s=null!==(r=null==t?void 0:t.occurrenceThreshold)&&void 0!==r?r:null==t?void 0:t.occuranceThreshold,l=es(e).toLowerCase(),c=vs(dl(n,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:u,occurrenceThreshold:s})).toLowerCase()
return!c||(Cl(l)<1||Cl(c)<1?void 0:(a=c,o=xg(l),i=xg(a),!(!o||!i)&&o.includes(i)))},"label-content-name-mismatch-matches":function(e,t){var n=Hs(e)
return!!(n&&Jm("widget").includes(n)&&tD().includes(n)&&(vs(ns(t))||vs(ts(e)))&&vs(Xs(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var n=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(n)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!xi(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=Jm("landmark"),n=Gi(e),r=Hs(e)
for(this.data({role:r});n;){var a=n.getAttribute("role")
if(a||"FORM"===n.nodeName.toUpperCase()||(a=js(n)),a&&t.includes(a)&&("main"!==a||"complementary"!==r))return!1
n=Gi(n)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter(function(e){var n=t.find(function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText})
return n?(n.result=!1,n.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)})},"landmark-is-unique-evaluate":function(e,t,n){var r=Hs(e),a=Fl(n)
return a=a?a.toLowerCase():null,this.data({role:r,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){return function(e){var t=Jm("landmark"),n=Hs(e)
if(!n)return!1
var r=e.props.nodeName
return"section"===r||"form"===r?!!Fl(e):t.indexOf(n)>=0||"region"===n}(t)&&Qs(t)},"layout-table-matches":function(e){return!Lm(e)&&!Ku(e)},"link-in-text-block-evaluate":function(e,t){var n=t.requiredContrastRatio,r=t.allowSameColor
if(Sg(e))return!1
for(var a=Gi(e);a&&1===a.nodeType&&!Sg(a);)a=Gi(a)
if(a){this.relatedNodes([a])
var o=ag(e),i=ag(a),u=eg(e),s=eg(a),l=o&&i?Bg(o,i):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=n)return!0
var c=u&&s?Bg(u,s):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=n)return!0
if(!c){var d,p=null!==(d=ac.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void ac.clear()}if(l)return!(!r||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:n,nodeBackgroundColor:u?u.toHexString():void 0,parentBackgroundColor:s?s.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:n,nodeColor:o?o.toHexString():void 0,parentColor:i?i.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=vs(e.innerText),n=e.getAttribute("role")
return(!n||"link"===n)&&!!t&&!!Ji(e)&&Zl(e)},"link-in-text-block-style-evaluate":function(e){if(Rg(e))return!1
for(var t=Gi(e);t&&1===t.nodeType&&!Rg(t);)t=Gi(t)
if(t){if(this.relatedNodes([t]),RD(e,t))return!0
if(!function(e){for(var t=0,r=["before","after"];t<r.length;t++){var a=r[t]
if("none"!==n.getComputedStyle(e,":".concat(a)).getPropertyValue("content"))return!0}return!1}(e))return!1
this.data({messageKey:"pseudoContent"})}},"listitem-evaluate":function(e,t,n){var r=n.parent
if(r){var a=r.props.nodeName,o=cs(r)
return!!["presentation","none","list"].includes(o)||(o&&ls(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,n){return Is(n,t.matcher)},"meta-refresh-evaluate":function(e,t,n){var r=t||{},a=r.minDelay,o=r.maxDelay,i=$((n.attr("content")||"").trim().split(CD),1)[0]
if(!i.match(xD))return!0
var u=parseFloat(i)
return this.data({redirectDelay:u}),"number"==typeof a&&u<=t.minDelay||"number"==typeof o&&u>t.maxDelay},"meta-viewport-scale-evaluate":function(e,t,n){var r=t||{},a=r.scaleMinimum,o=void 0===a?2:a,i=r.lowerBound,u=void 0!==i&&i,s=n.attr("content")||""
if(!s)return!0
var l=s.split(/[;,]/).reduce(function(e,t){var n=t.trim()
if(!n)return e
var r=$(n.split("="),2),a=r[0],o=r[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),u=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===u&&(u=1),"maximum-scale"===i&&parseFloat(u)<0||(e[i]=u),e},{})
if(u&&l["maximum-scale"]&&parseFloat(l["maximum-scale"])<u)return!0
if(!u&&"no"===l["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(l["user-scalable"])
return!u&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=va(e.getAttribute("id")),n=e.parentNode,r=Ei(e)
r=r.documentElement||r
var a=Array.from(r.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter(function(e){return!Vi(e)}));n;)"LABEL"===n.nodeName.toUpperCase()&&-1===a.indexOf(n)&&a.push(n),n=n.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter(function(e){return Qs(e)})
if(o.length>1)return
return!Ju(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var n=Hs(t)
return!!n&&!!us.ariaRoles[n].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){var n=e.hasAttribute("controls")
if(e.hasAttribute("loop"))return n
if(e.duration){var r=t.allowedDuration,a=void 0===r?3:r
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return $(t,2)[1].split(",").map(function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),n=0,r=1;t.length>0;)n+=r*parseInt(t.pop(),10),r*=60
return parseFloat(n)}(e):parseFloat(e)})}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=a||!!n}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":Qg,"no-focusable-content-evaluate":function(e,t,n){if(n.children)try{var r=Ag(n)
if(!r.length)return!0
var a=r.filter(kg)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(r),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,n){var r,a,o=Hs(n,{noImplicit:!0})
this.data(o)
try{r=vs(pl(n)).toLowerCase(),a=vs(Fl(n)).toLowerCase()}catch(e){return}return!(!a&&!r)&&!((a||!r)&&a.includes(r))&&void 0},"no-naming-method-matches":function(e,t){var n=Ps(t).namingMethods
return!(n&&0!==n.length||"combobox"===cs(t)&&cm(t,'input:not([type="hidden"])').length||lD(t,{popupRoles:["listbox"]}))},"no-negative-tabindex-matches":function(e,t){var n=Kh(t.attr("tabindex"))
return null===n||n>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,n){var r=n.props.nodeName,a=(n.attr("type")||"").toLowerCase(),o=n.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==r||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[Qg,Yg].every(function(n){return n(e,t)})},"only-dlitems-evaluate":function(e,t,n){var r=["definition","term","list"],a=n.children.reduce(function(e,t){var n=t.actualNode
return"DIV"===n.nodeName.toUpperCase()&&null===Hs(n)?e.concat(t.children):e.concat(t)},[]).reduce(function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
if(1===n.nodeType&&Qs(n)){var o=cs(n);("DT"!==a&&"DD"!==a||o)&&(r.includes(o)||e.badNodes.push(n))}else 3===n.nodeType&&""!==n.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e},{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,n){var r=!1,a=!1,o=!0,i=[],u=[],s=[]
return n.children.forEach(function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&Qs(t)){o=!1
var n="LI"===t.nodeName.toUpperCase(),l=Hs(e),c="listitem"===l
n||c||i.push(t),n&&!c&&(u.push(t),s.includes(l)||s.push(l)),c&&(a=!0)}}else r=!0}),r||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(u),this.data({messageKey:"roleNotValid",roles:s.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,n){var r=Array.from(e.parentNode.children),a=r.indexOf(e),o=(t=t||{}).margins||[],i=r.slice(a+1).find(function(e){return"P"===e.nodeName.toUpperCase()}),u=r.slice(0,a).reverse().find(function(e){return"P"===e.nodeName.toUpperCase()}),s=wD(e),l=i?wD(i):null,c=u?wD(u):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!l||!ED(s,l,o))return!0
var m=xi(n,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!ED(s,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),n=e.textContent.trim()
return!(0===n.length||(n.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter(function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()}).length},"page-no-duplicate-after":function(e){return e.filter(function(e){return"ignored"!==e.data})},"page-no-duplicate-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var r="page-no-duplicate;"+t.selector
if(!Xa.get(r)){Xa.set(r,!0)
var a=Jh(i._tree[0],t.selector,function(e){return Qs(e)})
return"string"==typeof t.nativeScopeFilter&&(a=a.filter(function(e){return e.actualNode.hasAttribute("role")||!xi(e,t.nativeScopeFilter)})),"string"==typeof t.role&&(a=a.filter(function(e){return Hs(e)===t.role})),this.relatedNodes(a.filter(function(e){return e!==n}).map(function(e){return e.actualNode})),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==js(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,n){var r=cs(n)
if(["presentation","none"].includes(r)&&["iframe","frame"].includes(n.props.nodeName)&&n.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:n.props.nodeName}),!1
var a=Hs(n)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(r))return!1
var o,i=ps().some(function(e){return n.hasAttr(e)}),u=Ku(n)
return o=i&&!u?"globalAria":!i&&u?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter(function(e){return e.data.isIframe})
return e.forEach(function(e){if(!e.result&&1!==e.node.ancestry.length){var n,r=e.node.ancestry.slice(0,-1),a=Q(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
if($h(r,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}}),t.forEach(function(e){e.result||(e.result=!0)}),e},"region-evaluate":function(e,t,n){return this.data({isIframe:["iframe","frame"].includes(n.props.nodeName)}),!Xa.get("regionlessNodes",function(){return function(e){return yD(i._tree[0],e).map(function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e}).filter(function(e,t,n){return n.indexOf(e)===t})}(t)}).includes(n)},"same-caption-summary-evaluate":function(e,t,n){if(void 0!==n.children){var r=n.attr("summary"),a=n.children.find(gD),o=!!a&&vs(dl(a))
return!(!o||!r)&&vs(r).toLowerCase()===vs(o).toLowerCase()}},"scope-value-evaluate":function(e,t){var n=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(n)},"scrollable-region-focusable-matches":function(e,t){return void 0!==Ch(e,13)&&!1===lD(t)&&cm(t,"*").some(function(e){return Ll(e,!0,!0)})},"skip-link-evaluate":function(e){var t=Lu(e,"href")
return!!t&&(Qs(t)||void 0)},"skip-link-matches":function(e){return Ef(e)&&Xi(e)},"structured-dlitems-evaluate":function(e,t,n){var r=n.children
if(!r||!r.length)return!1
for(var a,o=!1,i=!1,u=0;u<r.length;u++){if("DT"===(a=r[u].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"summary-interactive-matches":function(e,t){var n,r,a,o=t.parent
return!("details"!==o.props.nodeName||(a=null===(r=(n=t).actualNode)||void 0===r?void 0:r.parentElement)&&a!==n.parent.actualNode)&&o.children.find(function(e){return"summary"===e.props.nodeName})===t},"svg-namespace-matches":Ug,"svg-non-empty-title-evaluate":function(e,t,n){if(n.children){var r=n.children.find(function(e){return"title"===e.props.nodeName})
if(!r)return this.data({messageKey:"noTitle"}),!1
try{if(""===dl(r,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,n){var r=Kh(n.attr("tabindex"))
return null===r||r<=0},"table-or-grid-role-matches":function(e,t){var n=Hs(t)
return["treegrid","grid","table"].includes(n)},"target-offset-evaluate":function(e,t,n){var r=(null==t?void 0:t.minOffset)||24
if(uu(10*r,n.boundingClientRect))return this.data({messageKey:"large",minOffset:r}),!0
var a,o=[],i=r,u=Q(Nu(n,r))
try{for(u.s();!(a=u.n()).done;){var s=a.value
if("widget"===Kl(s)&&Ku(s)){var l=null
try{l=su(n,s,r/2)}catch(e){if(e.message.startsWith("splitRects"))return void this.data({messageKey:"tooManyRects",closestOffset:0,minOffset:r})
throw e}null!==l&&(.05+(l=2*yg(l))>=r||(i=Math.min(i,l),o.push(s)))}}}catch(e){u.e(e)}finally{u.f()}return 0===o.length?(this.data({closestOffset:i,minOffset:r}),!0):(this.relatedNodes(o.map(function(e){return e.actualNode})),o.some(Qu)?(this.data({closestOffset:i,minOffset:r}),!Qu(n)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:i,minOffset:r}))},"target-size-evaluate":function(e,t,n){var r=(null==t?void 0:t.minSize)||24,a=n.boundingClientRect
if(uu(10*r,a))return this.data({messageKey:"large",minSize:r}),!0
var o=uu.bind(null,r),i=Nu(n),u=function(e,t){return t.filter(function(t){return!mg(t,e)&&vg(e,t)})}(n,i),s=function(e,t){var n,r=[],a=[],o=Q(t)
try{for(o.s();!(n=o.n()).done;){var i=n.value
!vg(e,i)&&du(e,i)&&"none"!==Dg(i)&&(mg(e,i)?r.push(i):a.push(i))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:r,partialObscuringElms:a}}(n,i),l=s.fullyObscuringElms,c=s.partialObscuringElms
if(u.length&&(l.length||!o(a)))return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(bg(u))
if(l.length)return this.relatedNodes(bg(l)),this.data({messageKey:"obscured"}),!0
var d=!Qu(n)&&void 0
if(!o(a))return this.data(z({minSize:r},gg(a))),d
var p=c.filter(function(e){return"widget"===Kl(e)&&Ku(e)})
if(!p.length)return this.data(z({minSize:r},gg(a))),!0
var f=function(e,t){var n,r=e.boundingClientRect,a=t.map(function(e){return e.boundingClientRect})
try{n=pu(r,a)}catch(e){return null}return function(e,t){return e.reduce(function(e,n){var r=uu(t,e)
return r!==uu(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n})}(n)}(n,p)
if(f){if(!o(f)){if(u.length)return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(bg(u))
var h=p.every(Qu),m="partiallyObscured".concat(h?"":"NonTabbable")
return this.data(z({messageKey:m,minSize:r},gg(f))),this.relatedNodes(bg(p)),h?d:void 0}return this.data(z({minSize:r},gg(f||a))),this.relatedNodes(bg(p)),!0}this.data({minSize:r,messageKey:"tooManyRects"})},"td-has-header-evaluate":function(e){var t=[],n=Im(e),r=fs(e)
return n.forEach(function(e){zl(e)&&qm(e)&&!dD(e)&&(jm(e,r).some(function(e){return null!==e&&!!zl(e)})||t.push(e))}),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],n=[],r=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var u=t.filter(function(e){return e.getAttribute("id")}).map(function(e){return e.getAttribute("id")})
return t.forEach(function(e){var t=!1,a=!1
if(e.hasAttribute("headers")&&Qs(e)){var o=e.getAttribute("headers").trim()
if(!o)return n.push(e)
var i=zf(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some(function(e){return!u.includes(e)}),(t||a)&&r.push(e))}}),r.length>0?(this.relatedNodes(r),!1):!n.length||void this.relatedNodes(n)},"th-has-data-cells-evaluate":function(e){var t=Im(e),n=this,r=[]
t.forEach(function(e){var t=e.getAttribute("headers")
t&&(r=r.concat(t.split(/\s+/)))
var n=e.getAttribute("aria-labelledby")
n&&(r=r.concat(n.split(/\s+/)))})
var a=t.filter(function(e){return""!==vs(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))}),o=fs(e),i=!0
return a.forEach(function(e){if(!e.getAttribute("id")||!r.includes(e.getAttribute("id"))){var t=hs(e,o),a=!1
Ds(e)&&(a=Hm("down",t,o).find(function(t){return!Ds(t)&&jm(t,o).includes(e)})),!a&&gs(e)&&(a=Hm("right",t,o).find(function(t){return!gs(t)&&jm(t,o).includes(e)})),a||n.relatedNodes(e),i=i&&a}}),!!i||void 0},"title-only-evaluate":function(e,t,n){var r=Nl(n),a=Us(n),o=n.attr("aria-describedby")
return!(r||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach(function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0}),e.forEach(function(e){e.result=!!t[e.data]}),e},"unique-frame-title-evaluate":function(e,t,n){var r=vs(n.attr("title")).toLowerCase()
return this.data(r),!0},"unsupportedrole-evaluate":function(e,t,n){var r=Hs(n,{dpub:!0,fallback:!0}),a=ss(r)
return a&&this.data(r),a},"valid-lang-evaluate":function(e,t,n){var r=[]
return t.attributes.forEach(function(e){var a=n.attr(e)
if("string"==typeof a){var o=Xf(a),i=t.value?!t.value.map(Xf).includes(o):!xm(o);(""!==o&&i||""!==a&&!vs(a))&&r.push(e+'="'+n.attr(e)+'"')}}),!(!r.length||"html"!==n.props.nodeName&&!$l(n)||(this.data(r),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var n=cs(e)
return n&&(Pg[n]||t.roles.includes(n))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Ig[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return Wg.every(function(n){return n(e,t)})},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,n){return Xf(n.attr("lang"))===Xf(n.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=Xf(e.getAttribute("lang")),n=Xf(e.getAttribute("xml:lang"))
return xm(t)&&xm(n)}},tv=ev,nv=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function rv(e){if("string"==typeof e){if(tv[e])return tv[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function av(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function ov(e){e&&(this.id=e.id,this.configure(e))}ov.prototype.enabled=!0,ov.prototype.run=function(e,t,n,r,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var u,s=new nv(this),l=no(s,t,r,a)
try{u=this.evaluate.call(l,e.actualNode,i,e,n)}catch(t){return e&&e.actualNode&&(t.errorNode=ci.toSpec(e)),void a(t)}l.isAsync||(s.result=u,r(s))}else r(null)},ov.prototype.runSync=function(e,t,n){var r=(t=t||{}).enabled
if(!(void 0===r?this.enabled:r))return null
var a,o=this.getOptions(t.options),i=new nv(this),u=no(i,t)
u.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(u,e.actualNode,o,e,n)}catch(t){throw e&&e.actualNode&&(t.errorNode=ci.toSpec(e)),t}return i.result=a,i},ov.prototype.configure=function(e){var t=this
e.evaluate&&!tv[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=av(e.options):this.options=e.options),["evaluate","after"].filter(function(t){return e.hasOwnProperty(t)}).forEach(function(n){return t[n]=rv(e[n])})},ov.prototype.getOptions=function(e){return this._internalCheck?gi(this.options,av(e||{})):e||this.options}
var iv=ov,uv=function(e){this.id=e.id,this.result=Jr.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function sv(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(Da(Jr.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=rv(e.matches))}function lv(e){if(e.length){var t=!1,n={}
return e.forEach(function(e){var r=e.results.filter(function(e){return e})
n[e.type]=r,r.length&&(t=!0)}),t?n:null}}sv.prototype.matches=function(){return!0},sv.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="mark_gather_start_"+this.id,r="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&Qh.mark(n)
var i=mm(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&Qh.mark(a),i=i.filter(function(e){return Qs(e)}),t.performanceTimer&&(Qh.mark(o),Qh.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&(Qh.mark(r),Qh.measure("rule_"+this.id+"#gather",n,r)),i},sv.prototype.runChecks=function(e,t,n,r,a,o){var i=this,u=xo()
this[e].forEach(function(e){var a=i._audit.checks[e.id||e],o=uh(a,i.id,n)
u.defer(function(e,n){a.run(t,o,r,e,n)})}),u.then(function(t){t=t.filter(function(e){return e}),a({type:e,results:t})}).catch(o)},sv.prototype.runChecksSync=function(e,t,n,r){var a=this,o=[]
return this[e].forEach(function(e){var i=a._audit.checks[e.id||e],u=uh(i,a.id,n)
o.push(i.runSync(t,u,r))}),{type:e,results:o=o.filter(function(e){return e})}},sv.prototype.run=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
n.performanceTimer&&this._trackPerformance()
var o,i=xo(),s=new uv(this)
try{o=this.gatherAndMatchNodes(e,n)}catch(e){return void a(new u({cause:e,ruleId:this.id}))}n.performanceTimer&&this._logGatherPerformance(o),o.forEach(function(r){i.defer(function(a,o){var i=xo();["any","all","none"].forEach(function(a){i.defer(function(o,i){t.runChecks(a,r,n,e,o,i)})}),i.then(function(e){var n=lv(e)
n&&(n.node=new to(r),s.nodes.push(n),t.reviewOnFail&&(["any","all"].forEach(function(e){n[e].forEach(function(e){!1===e.result&&(e.result=void 0)})}),n.none.forEach(function(e){!0===e.result&&(e.result=void 0)}))),a()}).catch(function(e){return o(e)})})}),i.then(function(){n.performanceTimer&&t._logRulePerformance(),setTimeout(function(){r(s)},0)}).catch(function(e){n.performanceTimer&&t._logRulePerformance(),a(e)})},sv.prototype.runSync=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
n.performanceTimer&&this._trackPerformance()
var r,a=new uv(this)
try{r=this.gatherAndMatchNodes(e,n)}catch(e){throw new u({cause:e,ruleId:this.id})}return n.performanceTimer&&this._logGatherPerformance(r),r.forEach(function(r){var o=[];["any","all","none"].forEach(function(a){o.push(t.runChecksSync(a,r,n,e))})
var i=lv(o)
i&&(i.node=r.actualNode?new to(r):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach(function(e){i[e].forEach(function(e){!1===e.result&&(e.result=void 0)})}),i.none.forEach(function(e){!0===e.result&&(e.result=void 0)})))}),n.performanceTimer&&this._logRulePerformance(),a},sv.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},sv.prototype._logGatherPerformance=function(e){ea("gather (",e.length,"):",Qh.timeElapsed()+"ms"),Qh.mark(this._markChecksStart)},sv.prototype._logRulePerformance=function(){Qh.mark(this._markChecksEnd),Qh.mark(this._markEnd),Qh.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),Qh.measure("rule_"+this.id,this._markStart,this._markEnd)},sv.prototype.gatherAndMatchNodes=function(e,t){var n=this,r="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&Qh.mark(r),o=o.filter(function(t){return n.matches(t.actualNode,t,e)}),t.performanceTimer&&(Qh.mark(a),Qh.measure("rule_"+this.id+"#matches",r,a)),o},sv.prototype.after=function(e,t){var n,r=this,a=di(n=this).map(function(e){var t=n._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null}).filter(Boolean),o=this.id
return a.forEach(function(n){var a,i,u,s=(a=e.nodes,i=n.id,u=[],a.forEach(function(e){di(e).forEach(function(t){t.id===i&&(t.node=e.node,u.push(t))})}),u),l=uh(n,o,t),c=n.after(s,l.options)
r.reviewOnFail&&c.forEach(function(e){var t=(r.any.includes(e.id)||r.all.includes(e.id))&&!1===e.result,n=r.none.includes(e.id)&&!0===e.result;(t||n)&&(e.result=void 0)}),s.forEach(function(e){delete e.node,-1===c.indexOf(e)&&(e.filtered=!0)})}),e.nodes=function(e){var t=["any","all","none"],n=e.nodes.filter(function(e){var n=0
return t.forEach(function(t){e[t]=e[t].filter(function(e){return!0!==e.filtered}),n+=e[t].length}),n>0})
return e.pageLevel&&n.length&&(n=[n.reduce(function(e,n){if(e)return t.forEach(function(t){e[t].push.apply(e[t],n[t])}),e})]),n}(e),e},sv.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=rv(e.matches)),e.impact&&(Da(Jr.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var cv=de(Xr()),dv=/\{\{.+?\}\}/g,pv=G(function e(t){U(this,e),this.lang="en",this.defaultConfig=t,this.standards=us,this._init(),this._defaultLocale=null},[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),n=0;n<t.length;n++){var r=t[n],a=this.data.checks[r].messages,o=a.pass,i=a.fail,u=a.incomplete
e.checks[r]={pass:o,fail:i,incomplete:u}}for(var s=Object.keys(this.data.rules),l=0;l<s.length;l++){var c=s[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var D=h[m],g=this.data.failureSummaries[D].failureMessage
e.failureSummaries[D]={failureMessage:g}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.checks[r])throw new Error('Locale provided for unknown check: "'.concat(r,'"'))
this.data.checks[r]=Dv(this.data.checks[r],e[r])}}},{key:"_applyRuleLocale",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.rules[r])throw new Error('Locale provided for unknown rule: "'.concat(r,'"'))
this.data.rules[r]=gv(this.data.rules[r],e[r])}}},{key:"_applyFailureSummaries",value:function(e){for(var t=Object.keys(e),n=0;n<t.length;n++){var r=t[n]
if(!this.data.failureSummaries[r])throw new Error('Locale provided for unknown failureMessage: "'.concat(r,'"'))
this.data.failureSummaries[r]=vv(this.data.failureSummaries[r],e[r])}}},{key:"applyLocale",value:function(e){this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=bv(this.data.incompleteFallbackMessage,e.incompleteFallbackMessage)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=hv()
this.allowedOrigins=[]
var n,r=Q(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
if(a===Jr.allOrigins)return void(this.allowedOrigins=["*"])
a!==Jr.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){r.e(e)}finally{r.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=ro(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var n=hv()
t.allowedOrigins=n?[n]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=z({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental","deprecated"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,mv(e.rules,this,"addRule"),mv(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new sv(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter(function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]}).forEach(function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())})),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new iv(e)}},{key:"run",value:function(e,t,n,r){this.normalizeOptions(t),to.setRunOptions(t),i._selectCache=[]
var a=function(e,t,n){return e.reduce(function(e,r){return pm(r,t,n)?r.preload?(e.later.push(r),e):(e.now.push(r),e):e},{now:[],later:[]})}(this.rules,e,t),o=a.now,u=a.later,s=xo()
o.forEach(function(n){s.defer(yv(n,e,t))})
var l=xo()
u.length&&l.defer(function(e){om(t).then(function(t){return e(t)}).catch(function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)})})
var c=xo()
c.defer(s),c.defer(l),c.then(function(a){var o=a.pop()
if(o&&o.length){var s=o[0]
s&&(e=z({},e,s))}var l=a[0]
if(!u.length)return i._selectCache=void 0,void n(l.filter(function(e){return!!e}))
var c=xo()
u.forEach(function(n){var r=yv(n,e,t)
c.defer(r)}),c.then(function(e){i._selectCache=void 0,n(l.concat(e).filter(function(e){return!!e}))}).catch(r)}).catch(r)}},{key:"after",value:function(e,t){var n=this.rules
return e.map(function(e){var r=pi(n,"id",e.id)
if(!r)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
return r.after(e,t)})}},{key:"getRule",value:function(e){return this.rules.find(function(t){return t.id===e})}},{key:"normalizeOptions",value:function(e){var t=[],n=[]
if(this.rules.forEach(function(e){n.push(e.id),e.tags.forEach(function(e){t.includes(e)||t.push(e)})}),["object","string"].includes(o(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var r=e.runOnly.find(function(e){return t.includes(e)}),a=e.runOnly.find(function(e){return n.includes(e)})
if(r&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var u=e.runOnly
if(u.value&&!u.values&&(u.values=u.value,delete u.value),!Array.isArray(u.values)||0===u.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(u.type))u.type="rule",u.values.forEach(function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")})
else{if(!["tag","tags",void 0].includes(u.type))throw new Error("Unknown runOnly type '".concat(u.type,"'"))
u.type="tag"
var s=u.values.filter(function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)})
0!==s.length&&i.log("Could not find tags `"+s.join("`, `")+"`")}}return"object"===o(e.rules)&&Object.keys(e.rules).forEach(function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")}),e}},{key:"setBranding",value:function(e){var t={brand:this.brand,application:this.application}
"string"==typeof e&&(this.application=e),e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application),this._constructHelpUrls(t)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(i.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach(function(r){e.data.rules[r.id]||(e.data.rules[r.id]={})
var a=e.data.rules[r.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===Fv(t,r.id,n))&&(a.helpUrl=Fv(e,r.id,n))})}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),fv=pv
function hv(){return n.origin&&"null"!==n.origin?n.origin:n.location&&n.location.origin&&"null"!==n.location.origin?n.location.origin:void 0}function mv(e,t,n){var r,a
for(r=0,a=e.length;r<a;r++)t[n](e[r])}var Dv=function(e,t){var n=t.pass,r=t.fail
return"string"==typeof n&&dv.test(n)&&(n=cv.default.compile(n)),"string"==typeof r&&dv.test(r)&&(r=cv.default.compile(r)),z({},e,{messages:{pass:n||e.messages.pass,fail:r||e.messages.fail,incomplete:"object"===o(e.messages.incomplete)?z({},e.messages.incomplete,t.incomplete):t.incomplete}})},gv=function(e,t){var n=t.help,r=t.description
return"string"==typeof n&&dv.test(n)&&(n=cv.default.compile(n)),"string"==typeof r&&dv.test(r)&&(r=cv.default.compile(r)),z({},e,{help:n||e.help,description:r||e.description})},vv=function(e,t){var n=t.failureMessage
return"string"==typeof n&&dv.test(n)&&(n=cv.default.compile(n)),z({},e,{failureMessage:n||e.failureMessage})},bv=function(e,t){return"string"==typeof t&&dv.test(t)&&(t=cv.default.compile(t)),t||e}
function yv(e,t,n){return n.performanceTimer&&Qh.mark("mark_rule_start_"+e.id),function(r,a){e.run(t,n,function(e){r(e)},function(t){if(n.debug)a(t)
else{var o=Object.assign(new uv(e),{result:Jr.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
r(o)}})}}function Fv(e,t,n){var r=e.brand,a=e.application,o=e.lang
return Jr.helpUrlBase+r+"/"+(n||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}function wv(e){var t=n&&"Node"in n&&"NodeList"in n,r=!!a
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(Xa.set("globalDocumentSet",!0),a=e.ownerDocument),t||(Xa.set("globalWindowSet",!0),n=a.defaultView)}}var Ev=function(){Xa.get("globalDocumentSet")&&(Xa.set("globalDocumentSet",!1),a=null),Xa.get("globalWindowSet")&&(Xa.set("globalWindowSet",!1),n=null),i._memoizedFns.forEach(function(e){return e.clear()}),Xa.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0}
function Cv(e,t,n,r){try{e=new yh(e),i._tree=e.flatTree,i._selectorData=Pa(e.flatTree)}catch(e){return Ev(),r(e)}var a=xo(),o=i._audit
t.performanceTimer&&Qh.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer(function(n,r){mi(e,t,"rules",null,n,r)}),a.defer(function(n,r){o.run(e,t,n,r)}),a.then(function(a){try{t.performanceTimer&&Qh.auditEnd()
var i=hi(a.map(function(e){return{results:e}}))
e.initiator&&(t.performanceTimer&&Qh.mark("auditAfterStart"),i=o.after(i,t),t.performanceTimer&&(Qh.mark("auditAfterEnd"),Qh.measure("audit.after","auditAfterStart","auditAfterEnd"),Qh.logMeasures("audit.after")),i.forEach(sm),i=i.map(da))
try{n(i,Ev)}catch(e){Ev(),ea(e)}}catch(e){Ev(),r(e)}}).catch(function(e){Ev(),r(e)})}function xv(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach(function(e){i._audit.registerCommand(e)})}function Av(e){var t,n,r,u=$(e,3),s=u[0],l=u[1],c=u[2],d=new TypeError("axe.run arguments are invalid")
if(!Sh(s)){if(void 0!==c)throw d
c=l,l=s,s=a}if("object"!==o(l)){if(void 0!==c)throw d
c=l,l={}}if("function"!=typeof c&&void 0!==c)throw d
return(l=ro(l)).reporter=null!==(t=null!==(n=l.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",{context:s,options:l,callback:c}}n.top!==n&&(ri.subscribe("axe.start",function(e,t,n){var r=n,o=function(e){e instanceof Error==0&&(e=new Error(e)),n(e)},u=e&&e.context||{}
u.hasOwnProperty("include")&&!u.include.length&&(u.include=[a])
var s=e&&e.options||{}
switch(e.command){case"rules":return Cv(u,s,function(e,t){e=ci.mapRawResults(e),r(e),t()},o)
case"cleanup-plugin":return Bm(r,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,n)}}),ri.subscribe("axe.ping",function(e,t,n){n({axe:!0})})),xv.prototype.run=function(){return this._run.apply(this,arguments)},xv.prototype.collect=function(){return this._collect.apply(this,arguments)},xv.prototype.cleanup=function(e){var t=i.utils.queue(),n=this
Object.keys(this._registry).forEach(function(e){t.defer(function(t){n._registry[e].cleanup(t)})}),t.then(e)},xv.prototype.add=function(e){this._registry[e.id]=e}
var kv=function(){}
function Tv(e){var t=e.frames,n=e.frameSpec
return n?t.map(function(e){return ci.mergeSpecs(e,n)}):t}var Nv=function(e,t,n){if("function"==typeof t&&(n=t,t={}),!e||!Array.isArray(e))return n(e)
n(e.map(function(e){for(var t=z({},e),n=0,r=["passes","violations","incomplete","inapplicable"];n<r.length;n++){var a=r[n]
t[a]=ci.mapRawNodeResults(t[a])}return t}))},Rv={base:{Audit:fv,CheckResult:nv,Check:iv,Context:yh,RuleResult:uv,Rule:sv,metadataFunctionMap:tv},public:{reporters:_m},helpers:{failureSummary:Zf,incompleteFallbackMessage:Jf,processAggregate:th},utils:{setDefaultFrameMessenger:ti,cacheNodeSelectors:Gf,getNodesMatchingExpression:Hf,convertSelector:go},commons:{dom:{nativelyHidden:_i,displayHidden:Si,visibilityHidden:Oi,contentVisibiltyHidden:Mi,ariaHidden:Ii,opacityHidden:Pi,scrollHidden:ji,overflowHidden:qi,clipHidden:Li,areaHidden:zi,detailsHidden:$i}}}
i._thisWillBeDeletedDoNotUse=Rv,i.constants=Jr,i.log=ea,i.AbstractVirtualNode=na,i.SerialVirtualNode=Rm,i.VirtualNode=Lf,i._cache=Xa,i.imports=ic,i.cleanup=Bm,i.configure=function(e){var t=i._audit
if(!t)throw new Error("No audit configured")
if(e.axeVersion||e.ver){var n=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(n))throw new Error("Invalid configured version ".concat(n))
var r=$(n.split("-"),2),a=r[0],o=r[1],u=$(a.split(".").map(Number),3),s=u[0],l=u[1],c=u[2],d=$(i.version.split("-"),2),p=d[0],f=d[1],h=$(p.split(".").map(Number),3),m=h[0],D=h[1],g=h[2]
if(s!==m||D<l||D===l&&g<c||s===m&&l===D&&c===g&&o&&o!==f)throw new Error("Configured version ".concat(n," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||Sm(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach(function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)})}var v,b=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach(function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
b.push(e.id),t.addRule(e)})}if(e.disableOtherRules&&t.rules.forEach(function(e){!1===b.includes(e.id)&&(e.enabled=!1)}),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(v=e.standards,Object.keys(is).forEach(function(e){v[e]&&(is[e]=gi(is[e],v[e]))})),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(Jr.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){ri.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter(function(t){return!!e.filter(function(e){return-1!==t.tags.indexOf(e)}).length}):i._audit.rules,n=i._audit.data.rules||{}
return t.map(function(e){var t=n[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds}})},i._load=function(e){i._audit=new fv(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new xv(e)},i.hasReporter=Sm,i.getReporter=Om,i.addReporter=function(e,t,n){_m[e]=t,n&&(Nm=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(is).forEach(function(e){is[e]=os[e]})},i._runRules=Cv,i.runVirtualRule=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
n.reporter=n.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof na||(t=new Rm(t))
var r=wh(e)
if(!r)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(r=Object.create(r,{excludeHidden:{value:!1}})).runSync(a,n)
sm(o),da(o)
var u=ha([o])
return u.violations.forEach(function(e){return e.nodes.forEach(function(e){e.failureSummary=Zf(e)})}),z({},sh(),u,{toolOptions:n})},i.run=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
wv(t[0])
var r=Av(t),a=r.context,o=r.options,u=r.callback,s=void 0===u?kv:u,l=function(e){var t,n,r
return"function"==typeof Promise&&e===kv?t=new Promise(function(e,t){n=t,r=e}):(r=function(t){return e(null,t)},n=function(t){return e(t)}),{thenable:t,reject:n,resolve:r}}(s),c=l.thenable,d=l.resolve,p=l.reject
try{Da(i._audit,"No audit configured"),Da(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return function(e,t){if("function"!=typeof t||t===kv)throw e
t(e.message)}(e,s)}return i._running=!0,o.performanceTimer&&Qh.start(),i._runRules(a,o,function(e,t){var n=function(e){i._running=!1,t()
try{p(e)}catch(e){i.log(e)}}
try{o.performanceTimer&&Qh.mark("reporterStart"),function(e,t,n,r){var a=Om(t.reporter)(e,t,n,r)
void 0!==a&&n(a)}(e,o,function(e){o.performanceTimer&&(Qh.mark("reporterEnd"),Qh.measure("reporter","reporterStart","reporterEnd"),Qh.logMeasures("reporter"),Qh.end()),i._running=!1,t()
try{d(e)}catch(e){i.log(e)}},n)}catch(e){n(e)}},function(e){o.performanceTimer&&Qh.end(),i._running=!1,s(e),p(e)}),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return e&&"object"===o(e.documentElement)&&"object"===o(e.defaultView)&&(e=e.documentElement),wv(e),i._tree=Kf(e),i._selectorData=Pa(i._tree),i._tree[0]},i.teardown=Ev,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=Av(t),a=r.options,o=r.context
Da(i._audit,"Axe is not configured. Audit is missing."),Da(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var u=new yh(o,i._tree)
return i._tree=u.flatTree,i._selectorData=Pa(u.flatTree),i._running=!0,a.elementRef=!1,new Promise(function(e,t){i._audit.run(u,a,e,t)}).then(function(e){e=ci.mapRawResults(e)
var t,n=u.frames.map(function(e){var t=e.node
return ci.toSpec(t)})
return u.initiator&&(t=sh()),i._running=!1,Ev(),{results:e,frames:n,environmentData:t}}).catch(function(e){return i._running=!1,Ev(),Promise.reject(e)})},i.finishRun=function(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=ro(a)
var o=(e.find(function(e){return e.environmentData})||{}).environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(n=a.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",function(e){var t,n=[],r=Q(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,o=n.shift()
if(a){a.frameSpec=null!=o?o:null
var i=Tv(a)
n.unshift.apply(n,q(i))}}}catch(e){r.e(e)}finally{r.f()}}(e)
var u=hi(e)
return(u=i._audit.after(u,a)).forEach(sm),function(e,t){return new Promise(function(n,r){Om(t.reporter)(e,t,n,r)})}(u=u.map(da),z({environmentData:o},a))},i.commons=AD,i.utils=ra,i.addReporter("na",function(e,t,n){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=j(r,w)
n(z({},sh(a),{toolOptions:o},th(e,t)))}),i.addReporter("no-passes",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=j(r,E)
t.resultTypes=["violations"]
var i=th(e,t).violations
n(z({},sh(a),{toolOptions:o,violations:i}))}),i.addReporter("rawEnv",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=j(r,C)
Nv(e,o,function(e){var t=sh(a)
n({raw:e,env:t})})}),i.addReporter("raw",Nv),i.addReporter("v1",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=j(r,x),i=th(e,t),u=function(e){e.nodes.forEach(function(e){e.failureSummary=Zf(e)})}
i.incomplete.forEach(u),i.violations.forEach(u),n(z({},sh(a),{toolOptions:o},i))}),i.addReporter("v2",function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=j(r,A),i=th(e,t)
n(z({},sh(a),{toolOptions:o},i))},!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensure every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensure <area> elements of image maps have alternative text",help:"Active <area> elements must have alternative text"},"aria-allowed-attr":{description:"Ensure an element's role supports its ARIA attributes",help:"Elements must only use supported ARIA attributes"},"aria-allowed-role":{description:"Ensure role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-braille-equivalent":{description:"Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",help:"aria-braille attributes must have a non-braille equivalent"},"aria-command-name":{description:"Ensure every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-conditional-attr":{description:"Ensure ARIA attributes are used as described in the specification of the element's role",help:"ARIA attributes must be used as specified for the element's role"},"aria-deprecated-role":{description:"Ensure elements do not use deprecated roles",help:"Deprecated ARIA roles must not be used"},"aria-dialog-name":{description:"Ensure every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:'Ensure aria-hidden="true" is not present on the document body.',help:'aria-hidden="true" must not be present on the document body'},"aria-hidden-focus":{description:"Ensure aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensure every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensure every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensure every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-prohibited-attr":{description:"Ensure ARIA attributes are not prohibited for an element's role",help:"Elements must only use permitted ARIA attributes"},"aria-required-attr":{description:"Ensure elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensure elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensure elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensure all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensure role="text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensure every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensure every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensure every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensure all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensure attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensure <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensure <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensure buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",help:"Elements must meet enhanced color contrast ratio thresholds"},"color-contrast":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",help:"Elements must meet minimum color contrast ratio thresholds"},"css-orientation-lock":{description:"Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensure <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensure <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensure each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensure every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensure every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensure every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensure headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensure table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensure elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensure form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensure <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensure <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensure <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensure the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensure every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensure the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensure <img> elements have alternative text or a role of none or presentation",help:"Images must have alternative text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensure input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensure <input type="image"> elements have alternative text',help:"Image buttons must have alternative text"},"label-content-name-mismatch":{description:"Ensure that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensure every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensure the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensure the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensure the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensure the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensure the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensure the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensure the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensure the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{description:"Ensure landmarks are unique",help:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensure links have discernible text",help:"Links must have discernible text"},list:{description:"Ensure that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensure <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensure <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensure <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensure <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensure <object> elements have alternative text",help:"<object> elements must have alternative text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",help:"Ensure elements marked as presentational are consistently ignored"},region:{description:"Ensure all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:'Ensure [role="img"] elements have alternative text',help:'[role="img"] elements must have an alternative text'},"scope-attr-valid":{description:"Ensure the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensure select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensure that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"summary-name":{description:"Ensure summary elements have discernible text",help:"Summary elements must have discernible text"},"svg-img-alt":{description:"Ensure <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensure tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"Tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch targets have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensure lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensure <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element uses aria-busy="true" while showing a loader'}},"aria-conditional-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{checkbox:'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',rowSingular:"This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",rowPlural:"These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"Ensure aria-errormessage value `${data.values}` references an existing element",plural:"Ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"Unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:{default:"Required ARIA children are present","aria-busy":"Element has an aria-busy attribute, so it is allowed to omit required children"},fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}",controlsWithinPopup:"Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},"braille-label-equivalent":{impact:"serious",messages:{pass:"aria-braillelabel is used on an element with accessible text",fail:"aria-braillelabel is used on an element with no accessible text",incomplete:"Unable to compute accessible text"}},"braille-roledescription-equivalent":{impact:"serious",messages:{pass:"aria-brailleroledescription is used on an element with aria-roledescription",fail:{noRoleDescription:"aria-brailleroledescription is used on an element with no aria-roledescription",emptyRoleDescription:"aria-brailleroledescription is used on an element with an empty aria-roledescription"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"serious",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",complexTextShadows:"Element's contrast could not be determined because it uses complex text shadows",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",incomplete:{default:"Check if the link needs styling to distinguish it from nearby text",pseudoContent:"Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"},fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"The autocomplete value is on an appropriate element",fail:"The autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted",incomplete:"the autocomplete attribute has a non-standard value. Check whether any standard value could be used instead."}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"serious",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"serious",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:'Focusable content should have tabindex="-1" or be removed from the DOM'}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Element has an explicit <label>",fail:"Element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Element has an implicit (wrapped) <label>",fail:"Element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped) <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item parent element has a role that is not role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions are available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:{default:"Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",large:"Target far exceeds the minimum size of ${data.minOffset}px."},fail:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",incomplete:{default:"Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",nonTabbableNeighbor:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable",large:"Target far exceeds the minimum size of ${data.minSize}px."},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"Ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",impact:"serious",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",impact:"critical",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",impact:"critical",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],any:[],none:["aria-unsupported-attr"]},{id:"aria-allowed-role",impact:"minor",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-braille-equivalent",reviewOnFail:!0,impact:"serious",selector:"[aria-brailleroledescription], [aria-braillelabel]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:["braille-roledescription-equivalent","braille-label-equivalent"],any:[],none:[]},{id:"aria-command-name",impact:"serious",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-conditional-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-conditional-attr"}],any:[],none:[]},{id:"aria-deprecated-role",impact:"minor",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["deprecatedrole"]},{id:"aria-dialog-name",impact:"serious",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",impact:"critical",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag131","wcag412","EN-301-549","EN-9.1.3.1","EN-9.4.1.2"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",impact:"serious",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",impact:"serious",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",impact:"serious",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",impact:"serious",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-prohibited-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[],any:[],none:[{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-required-attr",impact:"critical",selector:"[role]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",impact:"critical",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",impact:"critical",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",impact:"serious",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","deprecated"],enabled:!1,all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",impact:"critical",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole"]},{id:"aria-text",impact:"serious",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",impact:"serious",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",impact:"serious",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",impact:"serious",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",impact:"critical",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","EN-301-549","EN-9.1.2.1","section508","section508.22.a","deprecated"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",impact:"serious",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","EN-301-549","EN-9.1.3.5","ACT"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"],ignoredValues:["text","pronouns","gender","message","content"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",impact:"serious",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","EN-301-549","EN-9.1.4.12","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",impact:"serious",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",impact:"critical",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"bypass",impact:"serious",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o","TTv5","TT9.a","EN-301-549","EN-9.2.4.1"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","TTv5","TT13.c","EN-301-549","EN-9.1.4.3","ACT"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",impact:"serious",selector:"html",tags:["cat.structure","wcag134","wcag21aa","EN-301-549","EN-9.1.3.4","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",impact:"serious",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",impact:"serious",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["dlitem"],none:[]},{id:"document-title",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","TTv5","TT12.a","EN-301-549","EN-9.2.4.2","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",impact:"serious",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",impact:"critical",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],reviewOnFail:!0,actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",impact:"minor",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",impact:"minor",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",impact:"minor",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",impact:"minor",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",impact:"moderate",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332","TTv5","TT5.c","EN-301-549","EN-9.3.3.2"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",impact:"serious",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",impact:"critical",selector:"html, frame, iframe",tags:["cat.structure","best-practice","review-item"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",impact:"serious",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag2a","wcag412","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",impact:"serious",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",impact:"moderate",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",impact:"minor",selector:"*",excludeHidden:!1,tags:["cat.structure","best-practice","experimental","review-item"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",impact:"serious",selector:'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",impact:"moderate",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","EN-301-549","EN-9.3.1.1","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",impact:"minor",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",impact:"critical",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","TT7.b","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",impact:"minor",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",impact:"critical",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"input-image-alt",impact:"critical",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","EN-9.4.1.2","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label"],none:[]},{id:"label-content-name-mismatch",impact:"serious",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","EN-301-549","EN-9.2.5.3","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",impact:"serious",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",impact:"critical",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["hidden-explicit-label"]},{id:"landmark-banner-is-top-level",impact:"moderate",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",impact:"moderate",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",impact:"moderate",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",role:"banner"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",impact:"moderate",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",impact:"serious",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141","TTv5","TT13.a","EN-301-549","EN-9.1.4.1"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",impact:"serious",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",impact:"serious",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",impact:"serious",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["listitem"],none:[]},{id:"marquee",impact:"serious",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",impact:"minor",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",impact:"critical",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","TTv5","TT8.a","EN-301-549","EN-9.2.2.1"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",impact:"minor",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",impact:"critical",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","EN-301-549","EN-9.1.4.4","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",impact:"serious",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",impact:"moderate",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","TTv5","TT2.a","EN-301-549","EN-9.1.4.2","ACT"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",impact:"serious",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","EN-301-549","EN-9.1.1.1"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",impact:"serious",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",impact:"minor",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",impact:"moderate",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",impact:"serious",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",impact:"moderate",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",impact:"serious",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211","wcag213","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","EN-9.2.1.3"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",impact:"critical",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["hidden-explicit-label"]},{id:"server-side-image-map",impact:"minor",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],all:[],any:[],none:["exists"]},{id:"skip-link",impact:"moderate",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"summary-name",impact:"serious",selector:"summary",matches:"summary-interactive-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"svg-img-alt",impact:"serious",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",impact:"serious",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",impact:"minor",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","EN-301-549","EN-9.1.3.1"],all:["caption-faked"],any:[],none:[]},{id:"target-size",impact:"serious",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["cat.sensory-and-visual-cues","wcag22aa","wcag258"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",impact:"critical",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",impact:"serious",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",impact:"serious",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","TTv5","TT11.b","EN-301-549","EN-9.3.1.2","ACT"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",impact:"critical",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a","TTv5","TT17.a","EN-301-549","EN-9.1.2.2"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate",deprecated:!0},{id:"aria-conditional-attr",evaluate:"aria-conditional-attr-evaluate",options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"braille-label-equivalent",evaluate:"braille-label-equivalent-evaluate"},{id:"braille-roledescription-equivalent",evaluate:"braille-roledescription-equivalent-evaluate"},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"],ignoredValues:["text","pronouns","gender","message","content"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",role:"banner"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate"},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},5558:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{blur:()=>ht,clearRender:()=>Ve,click:()=>yt,currentRouteName:()=>te,currentURL:()=>re,doubleClick:()=>Ft,fillIn:()=>Mt,find:()=>zt,findAll:()=>$t,focus:()=>Dt,getApplication:()=>s,getContext:()=>be,getDebugInfo:()=>U,getDeprecations:()=>Ee,getDeprecationsDuringCallback:()=>Ce,getResolver:()=>r.v,getRootElement:()=>_e,getSettledState:()=>le,getTestMetadata:()=>R,getWarnings:()=>xe,getWarningsDuringCallback:()=>Ae,hasEmberVersion:()=>c,isSettled:()=>ce,pauseTest:()=>Fe,registerDebugInfoHelper:()=>$,registerHook:()=>j,render:()=>He,rerender:()=>Ge,resetOnerror:()=>he,resumeTest:()=>we,runHooks:()=>q,scrollTo:()=>Ut,select:()=>jt,setApplication:()=>u,setContext:()=>ve,setResolver:()=>r.V,settled:()=>de,setupApplicationContext:()=>ae,setupContext:()=>ke,setupOnerror:()=>fe,setupRenderingContext:()=>Ue,tab:()=>xt,tap:()=>At,teardownContext:()=>Ne,triggerEvent:()=>kt,triggerKeyEvent:()=>St,typeIn:()=>Ht,unsetContext:()=>ye,validateErrorHandler:()=>Ye,visit:()=>ee,waitFor:()=>Lt,waitUntil:()=>E.A})
var r=n(7934),a=n(2294),o=n.n(a)
let i
function u(e){if(i=e,!(0,r.v)()){const t=e.Resolver.create({namespace:e});(0,r.V)(t)}}function s(){return i}var l=n(5152)
function c(e,t){const n=l.VERSION.split("-")[0]?.split(".")
if(!n||!n[0]||!n[1])throw new Error("`Ember.VERSION` is not set.")
const r=parseInt(n[0],10),a=parseInt(n[1],10)
return r>e||r===e&&a>=t}var d=n(1223),p=n(4471),f=n.n(p),h=n(4540),m=n.n(h),D=n(9311),g=n(9132)
const v=f().extend(g.RegistryProxyMixin,g.ContainerProxyMixin,{_emberTestHelpersMockOwner:!0,unregister(e){this.__container__.reset(e),this.__registry__.unregister(e)}})
function b(e,t){if(e)return e.boot().then(e=>e.buildInstance().boot())
if(!t)throw new Error("You must set up the ember-test-helpers environment with either `setResolver` or `setApplication` before running any tests.")
const{owner:n}=function(e){const t=new(o())
t.Resolver={create:()=>e}
const n=o().buildRegistry(t),r=new D.Registry({fallback:n})
m().setupRegistry(r),r.normalizeFullName=n.normalizeFullName,r.makeToString=n.makeToString,r.describe=n.describe
const a=v.create({__registry__:r,__container__:null}),i=r.container({owner:a})
return a.__container__=i,function(e){const t=["register","unregister","resolve","normalize","typeInjection","injection","factoryInjection","factoryTypeInjection","has","options","optionsForType"]
for(let n=0,r=t.length;n<r;n++){const r=t[n]
if(r&&r in e){const t=r
e[t]=function(...n){return e._registry[t](...n)}}}}(i),{registry:r,container:i,owner:a}}(t)
return Promise.resolve(n)}var y=n(8234),F=n(2394),w=n(28),E=n(5884),C=n(1704),x=n(1603),A=n(3887)
function k(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class T{constructor(){k(this,"testName",void 0),k(this,"setupTypes",void 0),k(this,"usedHelpers",void 0),this.setupTypes=[],this.usedHelpers=[]}get isRendering(){return this.setupTypes.indexOf("setupRenderingContext")>-1&&this.usedHelpers.indexOf("render")>-1}get isApplication(){return this.setupTypes.indexOf("setupApplicationContext")>-1}}const N=new WeakMap
function R(e){return N.has(e)||N.set(e,new T),N.get(e)}var B=n(6251)
const _=new WeakMap
function S(e){if(!e)throw new TypeError(`[@ember/test-helpers] could not get deprecations for an invalid test context: '${e}'`)
let t=_.get(e)
return Array.isArray(t)||(t=[],_.set(e,t)),t}if("undefined"!=typeof URLSearchParams){const e=new URLSearchParams(document.location.search.substring(1)),t=e.get("disabledDeprecations"),n=e.get("debugDeprecations")
t&&(0,x.registerDeprecationHandler)((e,n,r)=>{n&&t.includes(n.id)||r.apply(null,[e,n])}),n&&(0,x.registerDeprecationHandler)((e,t,r)=>{t&&n.includes(t.id),r.apply(null,[e,t])})}const O=new WeakMap
function M(e){if(!e)throw new TypeError(`[@ember/test-helpers] could not get warnings for an invalid test context: '${e}'`)
let t=O.get(e)
return Array.isArray(t)||(t=[],O.set(e,t)),t}if("undefined"!=typeof URLSearchParams){const e=new URLSearchParams(document.location.search.substring(1)),t=e.get("disabledWarnings"),n=e.get("debugWarnings")
t&&(0,x.registerWarnHandler)((e,n,r)=>{n&&t.includes(n.id)||r.apply(null,[e,n])}),n&&(0,x.registerWarnHandler)((e,t,r)=>{t&&n.includes(t.id),r.apply(null,[e,t])})}const I=new Map
function P(e,t){return`${e}:${t}`}function j(e,t,n){const r=P(e,t)
let a=I.get(r)
return void 0===a&&(a=new Set,I.set(r,a)),a.add(n),{unregister(){a.delete(n)}}}function q(e,t,...n){const r=I.get(P(e,t))||new Set,a=[]
return r.forEach(e=>{const t=e(...n)
a.push(t)}),Promise.all(a).then(()=>{})}var L=n(2186)
const z=new Set
function $(e){z.add(e)}function H(e,t,n){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var n=t.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const V="Pending test waiters"
function U(){return!0===d._backburner.DEBUG&&"function"==typeof d._backburner.getDebugInfo?d._backburner.getDebugInfo():null}class W{constructor(e,t=U()){H(this,"_settledState",void 0),H(this,"_debugInfo",void 0),H(this,"_summaryInfo",void 0),this._settledState=e,this._debugInfo=t}get summary(){return this._summaryInfo||(this._summaryInfo={...this._settledState},this._debugInfo&&(this._summaryInfo.autorunStackTrace=this._debugInfo.autorun&&this._debugInfo.autorun.stack,this._summaryInfo.pendingTimersCount=this._debugInfo.timers.length,this._summaryInfo.hasPendingTimers=this._settledState.hasPendingTimers&&this._summaryInfo.pendingTimersCount>0,this._summaryInfo.pendingTimersStackTraces=this._debugInfo.timers.map(e=>e.stack),this._summaryInfo.pendingScheduledQueueItemCount=this._debugInfo.instanceStack.filter(G).reduce((e,t)=>(Object.values(t).forEach(t=>{e+=t?.length??0}),e),0),this._summaryInfo.pendingScheduledQueueItemStackTraces=this._debugInfo.instanceStack.filter(G).reduce((e,t)=>(Object.values(t).forEach(t=>{t?.forEach(t=>t.stack&&e.push(t.stack))}),e),[])),this._summaryInfo.hasPendingTestWaiters&&(this._summaryInfo.pendingTestWaiterInfo=(0,L.getPendingWaiterState)())),this._summaryInfo}toConsole(e=console){const t=this.summary
t.hasPendingRequests&&e.log("Pending AJAX requests"),t.hasPendingLegacyWaiters&&e.log(V),t.hasPendingTestWaiters&&(t.hasPendingLegacyWaiters||e.log(V),Object.keys(t.pendingTestWaiterInfo.waiters).forEach(n=>{const r=t.pendingTestWaiterInfo.waiters[n]
Array.isArray(r)?(e.group(n),r.forEach(t=>{e.log(`${t.label?t.label:"stack"}: ${t.stack}`)}),e.groupEnd()):e.log(n)})),(t.hasPendingTimers||t.pendingScheduledQueueItemCount>0)&&(e.group("Scheduled async"),t.pendingTimersStackTraces.forEach(t=>{e.log(t)}),t.pendingScheduledQueueItemStackTraces.forEach(t=>{e.log(t)}),e.groupEnd()),t.hasRunLoop&&0===t.pendingTimersCount&&0===t.pendingScheduledQueueItemCount&&(e.log("Scheduled autorun"),t.autorunStackTrace&&e.log(t.autorunStackTrace)),z.forEach(e=>{e.log()})}_formatCount(e,t){return`${e}: ${t}`}}function G(e){return null!=e}const K=c(3,6)
let Q=null
const Y=new WeakMap,X=new WeakMap
function Z(e){return me(e)}function J(){if(K)return Q
const e=be()
if(void 0===e)return null
const t=Y.get(e)
if(void 0===t)return null
const n=t._routerMicrolib||t.router
return void 0===n?null:!!n.activeTransition}function ee(e,t){const n=be()
if(!n||!Z(n))throw new Error("Cannot call `visit` without having first called `setupApplicationContext`.")
const{owner:r}=n
return R(n).usedHelpers.push("visit"),Promise.resolve().then(()=>q("visit","start",e,t)).then(()=>{const n=r.visit(e,t)
return function(){const e=be()
if(void 0===e||!me(e))throw new Error("Cannot setupRouterSettlednessTracking outside of a test context")
if(X.get(e))return
X.set(e,!0)
const{owner:t}=e
let n
if(K){const e=t.lookup("service:router");(0,x.assert)("router service is not set up correctly",!!e),n=e,n.on("routeWillChange",()=>Q=!0),n.on("routeDidChange",()=>Q=!1)}else{const r=t.lookup("router:main");(0,x.assert)("router:main is not available",!!r),n=r,Y.set(e,n)}const r=n.willDestroy
n.willDestroy=function(){return Q=null,r.call(this)}}(),n}).then(()=>{n.element=document.querySelector("#ember-testing")}).then(de).then(()=>q("visit","end",e,t))}function te(){const e=be()
if(!e||!Z(e))throw new Error("Cannot call `currentRouteName` without having first called `setupApplicationContext`.")
const t=e.owner.lookup("router:main").currentRouteName
return(0,x.assert)("currentRouteName should be a string","string"==typeof t),t}const ne=c(2,13)
function re(){const e=be()
if(!e||!Z(e))throw new Error("Cannot call `currentURL` without having first called `setupApplicationContext`.")
const t=e.owner.lookup("router:main")
if(ne){const e=t.currentURL
return null===e||(0,x.assert)("currentUrl should be a string, but was "+typeof e,"string"==typeof e),e}return t.location.getURL()}function ae(e){return R(e).setupTypes.push("setupApplicationContext"),Promise.resolve()}let oe
const ie=y.Test.checkWaiters
function ue(e,t){oe.push(t)}function se(e,t){(0,w.dY)(()=>{for(let e=0;e<oe.length;e++)t===oe[e]&&oe.splice(e,1)})}function le(){const e=d._backburner.hasTimers(),t=Boolean(d._backburner.currentInstance),n=ie(),r=(0,L.hasPendingWaiters)(),a=(void 0!==oe?oe.length:0)+(0,F.pendingRequests)(),o=a>0,i=!!t
return{hasPendingTimers:e,hasRunLoop:t,hasPendingWaiters:n||r,hasPendingRequests:o,hasPendingTransitions:J(),isRenderPending:i,pendingRequestCount:a,debugInfo:new W({hasPendingTimers:e,hasRunLoop:t,hasPendingLegacyWaiters:n,hasPendingTestWaiters:r,hasPendingRequests:o,isRenderPending:i})}}function ce(){const{hasPendingTimers:e,hasRunLoop:t,hasPendingRequests:n,hasPendingWaiters:r,hasPendingTransitions:a,isRenderPending:o}=le()
return!(e||t||n||r||a||o)}function de(){return(0,E.A)(ce,{timeout:1/0}).then(()=>{})}const pe=new Map
function fe(e){const t=be()
if(!t)throw new Error("Must setup test context before calling setupOnerror")
if(!pe.has(t))throw new Error("_cacheOriginalOnerror must be called before setupOnerror. Normally, this will happen as part of your test harness.")
"function"!=typeof e&&(e=pe.get(t)),(0,C.setOnerror)(e)}function he(){const e=be()
e&&pe.has(e)&&(0,C.setOnerror)(pe.get(e))}function me(e){const t=e
return"function"==typeof t.pauseTest&&"function"==typeof t.resumeTest}function De(e){return e&&e.Math===Math&&e}(0,x.registerDeprecationHandler)((e,t,n)=>{const r=be()
void 0!==r?(S(r).push({message:e,options:t}),n.apply(null,[e,t])):n.apply(null,[e,t])}),(0,x.registerWarnHandler)((e,t,n)=>{const r=be()
void 0!==r?(M(r).push({message:e,options:t}),n.apply(null,[e,t])):n.apply(null,[e,t])})
const ge=De("object"==typeof globalThis&&globalThis)||De("object"==typeof window&&window)||De("object"==typeof self&&self)||De("object"==typeof A.A&&A.A)
function ve(e){ge.__test_context__=e}function be(){return ge.__test_context__}function ye(){ge.__test_context__=void 0}function Fe(){const e=be()
if(!e||!me(e))throw new Error("Cannot call `pauseTest` without having first called `setupTest` or `setupRenderingTest`.")
return e.pauseTest()}function we(){const e=be()
if(!e||!me(e))throw new Error("Cannot call `resumeTest` without having first called `setupTest` or `setupRenderingTest`.")
e.resumeTest()}function Ee(){const e=be()
if(!e)throw new Error("[@ember/test-helpers] could not get deprecations if no test context is currently active")
return S(e)}function Ce(e){const t=be()
if(!t)throw new Error("[@ember/test-helpers] could not get deprecations if no test context is currently active")
return function(e,t){if(!e)throw new TypeError(`[@ember/test-helpers] could not get deprecations for an invalid test context: '${e}'`)
const n=S(e),r=n.length,a=t()
return(0,B.A)(a)?Promise.resolve(a).then(()=>n.slice(r)):n.slice(r)}(t,e)}function xe(){const e=be()
if(!e)throw new Error("[@ember/test-helpers] could not get warnings if no test context is currently active")
return M(e)}function Ae(e){const t=be()
if(!t)throw new Error("[@ember/test-helpers] could not get warnings if no test context is currently active")
return function(e,t){if(!e)throw new TypeError(`[@ember/test-helpers] could not get warnings for an invalid test context: '${e}'`)
const n=M(e),r=n.length,a=t()
return(0,B.A)(a)?Promise.resolve(a).then(()=>n.slice(r)):n.slice(r)}(t,e)}function ke(e,t={}){const n=e
return(0,x.setTesting)(!0),ve(n),R(n).setupTypes.push("setupContext"),d._backburner.DEBUG=!0,function(e){if(pe.has(e))throw new Error("_prepareOnerror should only be called once per-context")
pe.set(e,(0,C.getOnerror)())}(n),Promise.resolve().then(()=>{const e=s()
if(e)return e.boot().then(()=>{})}).then(()=>{const{resolver:e}=t
return e?b(null,e):b(s(),(0,r.v)())}).then(e=>{let t
return Object.defineProperty(n,"owner",{configurable:!0,enumerable:!0,value:e,writable:!1}),(0,a.setOwner)(n,e),Object.defineProperty(n,"set",{configurable:!0,enumerable:!0,value:(e,t)=>(0,d.run)(function(){return(0,p.set)(n,e,t)}),writable:!1}),Object.defineProperty(n,"setProperties",{configurable:!0,enumerable:!0,value:e=>(0,d.run)(function(){return(0,p.setProperties)(n,e)}),writable:!1}),Object.defineProperty(n,"get",{configurable:!0,enumerable:!0,value:e=>(0,p.get)(n,e),writable:!1}),Object.defineProperty(n,"getProperties",{configurable:!0,enumerable:!0,value:(...e)=>(0,p.getProperties)(n,e),writable:!1}),n.resumeTest=function(){(0,x.assert)("Testing has not been paused. There is nothing to resume.",!!t),t(),A.A.resumeTest=t=void 0},n.pauseTest=function(){return console.info("Testing paused. Use `resumeTest()` to continue."),new Promise(e=>{t=e,A.A.resumeTest=we})},oe=[],void 0!==globalThis.jQuery&&(globalThis.jQuery(document).on("ajaxSend",ue),globalThis.jQuery(document).on("ajaxComplete",se)),n})}var Te=n(1130)
function Ne(e,{waitForSettled:t=!0}={}){return Promise.resolve().then(()=>{!function(e){he(),pe.delete(e)}(e),oe=[],void 0!==globalThis.jQuery&&(globalThis.jQuery(document).off("ajaxSend",ue),globalThis.jQuery(document).off("ajaxComplete",se)),(0,x.setTesting)(!1),ye(),(0,Te.destroy)(e.owner)}).finally(()=>{if(t)return de()})}var Re=n(4334),Be=n(4951)
function _e(){const e=be()
if(!e||!me(e)||!e.owner)throw new Error("Must setup rendering context before attempting to interact with elements.")
const t=e.owner
let n
if(n=t&&void 0===t._emberTestHelpersMockOwner?t.rootElement:"#ember-testing",n instanceof Window&&(n=n.document),(0,Be.vq)(n)||(0,Be.wz)(n))return n
if("string"==typeof n){const e=document.querySelector(n)
if(e)return e
throw new Error(`Application.rootElement (${n}) not found`)}throw new Error("Application.rootElement must be an element or a selector string")}var Se=n(9095),Oe=n(1465)
const Me=(0,Oe.createTemplateFactory)({id:"0Sh/Hutl",block:'[[[46,[28,[37,1],null,null],null,null,null]],[],false,["component","-outlet"]]',moduleName:"/Users/matthew.beale/Code/ember-table/node_modules/@ember/test-helpers/dist/setup-rendering-context.js",isStrictMode:!1}),Ie=(0,Oe.createTemplateFactory)({id:"RLUwvfl1",block:"[[],[],false,[]]",moduleName:"/Users/matthew.beale/Code/ember-table/node_modules/@ember/test-helpers/dist/setup-rendering-context.js",isStrictMode:!1}),Pe=(0,Oe.createTemplateFactory)({id:"OrTUDA8n",block:'[[[8,[30,0,["ProvidedComponent"]],null,null,null]],[],false,[]]',moduleName:"/Users/matthew.beale/Code/ember-table/node_modules/@ember/test-helpers/dist/setup-rendering-context.js",isStrictMode:!1}),je=Symbol()
function qe(e){return me(e)&&je in e}function Le(e,t){const n=e.lookup(t)
return"function"==typeof n?n(e):n}let ze,$e=0
function He(e,t){let n=be()
if(!e)throw new Error("you must pass a template to `render()`")
return Promise.resolve().then(()=>q("render","start")).then(()=>{if(!n||!qe(n))throw new Error("Cannot call `render` without having first called `setupRenderingContext`.")
const{owner:r}=n
R(n).usedHelpers.push("render")
const a=r.lookup("-top-level-view:main"),o=function(e){let t=Le(e,"template:-outlet")
return t||(e.register("template:-outlet",Me),t=Le(e,"template:-outlet")),t}(r),i=t?.owner||r
var u
u=e,(0,Se.getInternalComponentManager)(u,!0)&&(n={ProvidedComponent:e},e=Pe),$e+=1
const s=`template:-undertest-${$e}`
i.register(s,e)
const l=Le(i,s),c={render:{owner:r,into:void 0,outlet:"main",name:"application",controller:void 0,ViewClass:void 0,template:o},outlets:{main:{render:{owner:i,into:void 0,outlet:"main",name:"index",controller:n,ViewClass:void 0,template:l,outlets:{}},outlets:{}}}}
return a.setOutletState(c),de()}).then(()=>q("render","end"))}function Ve(){const e=be()
if(!e||!qe(e))throw new Error("Cannot call `clearRender` without having first called `setupRenderingContext`.")
return He(Ie)}function Ue(e){R(e).setupTypes.push("setupRenderingContext")
const t=function(e){return e[je]=!0,e}(e)
return Promise.resolve().then(()=>{const{owner:e}=t
e._emberTestHelpersMockOwner&&(e.lookup("event_dispatcher:main")||Re.EventDispatcher.create()).setup({},"#ember-testing")
const n=e.factoryFor?e.factoryFor("view:-outlet"):e._lookupFactory("view:-outlet"),r=e.lookup("-environment:main"),a=e.lookup("template:-outlet"),o=n.create({template:a,environment:r})
return e.register("-top-level-view:main",{create:()=>o}),He(Ie).then(()=>((0,d.run)(o,"appendTo",_e()),de()))}).then(()=>(Object.defineProperty(t,"element",{configurable:!0,enumerable:!0,value:_e(),writable:!1}),t))}ze=(0,n(2458).A)(n(8935)).renderSettled
var We=ze
function Ge(){return We()}const Ke=Object.freeze({isValid:!0,message:null}),Qe=Object.freeze({isValid:!1,message:"error handler should have re-thrown the provided error"})
function Ye(e=(0,C.getOnerror)()){if(null==e)return Ke
const t=new Error("Error handler validation error!"),n=(0,x.isTesting)();(0,x.setTesting)(!0)
try{e(t)}catch(e){if(e===t)return Ke}finally{(0,x.setTesting)(n)}return Qe}var Xe=n(6994)
function Ze(e){if("string"==typeof e)return _e().querySelector(e)
if((0,Be.vq)(e)||(0,Be.wz)(e))return e
if(e instanceof Window)return e.document
{const t=(0,Xe.Ob)(e)
if(t)return(0,Xe.lH)(t)
throw new Error("Must use an element, selector string, or DOM element descriptor")}}function Je(e){return(0,Be.l6)(e)?e:Ze(e)}var et=n(4627),tt=n(4225)
j("fireEvent","start",e=>{(0,tt.R)("fireEvent",e)})
const nt=(()=>{try{return new MouseEvent("test"),!0}catch{return!1}})(),rt={bubbles:!0,cancelable:!0},at=(0,et.A)("keydown","keypress","keyup")
function ot(e){return at.indexOf(e)>-1}const it=(0,et.A)("click","mousedown","mouseup","dblclick","mouseenter","mouseleave","mousemove","mouseout","mouseover"),ut=(0,et.A)("change")
function st(e,t,n={}){return Promise.resolve().then(()=>q("fireEvent","start",e)).then(()=>q(`fireEvent:${t}`,"start",e)).then(()=>{if(!e)throw new Error("Must pass an element to `fireEvent`")
let r
if(ot(t))r=ct(t,n)
else if(function(e){return it.indexOf(e)>-1}(t)){let a
if(e instanceof Window&&e.document.documentElement)a=e.document.documentElement.getBoundingClientRect()
else if((0,Be.wz)(e))a=e.documentElement.getBoundingClientRect()
else{if(!(0,Be.vq)(e))return
a=e.getBoundingClientRect()}const o=a.left+1,i=a.top+1,u={screenX:o+5,screenY:i+95,clientX:o,clientY:i,...n}
r=function(e,t={}){let n
const r={view:window,...rt,...t}
if(nt)n=new MouseEvent(e,r)
else try{n=document.createEvent("MouseEvents"),n.initMouseEvent(e,r.bubbles,r.cancelable,window,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget)}catch{n=lt(e,t)}return n}(t,u)}else r=function(e){return ut.indexOf(e)>-1}(t)&&function(e){return e.files}(e)?function(e,t,n={}){const r=lt(e),a=n.files
if(Array.isArray(n))throw new Error("Please pass an object with a files array to `triggerEvent` instead of passing the `options` param as an array to.")
if(Array.isArray(a)){Object.defineProperty(a,"item",{value(e){return"number"==typeof e?this[e]:null},configurable:!0}),Object.defineProperty(t,"files",{value:a,configurable:!0})
const e=Object.getPrototypeOf(t),n=Object.getOwnPropertyDescriptor(e,"value")
Object.defineProperty(t,"value",{configurable:!0,get:()=>n.get.call(t),set(e){n.set.call(t,e),Object.defineProperty(t,"files",{configurable:!0,value:[]})}})}return Object.defineProperty(r,"target",{value:t}),r}(t,e,n):lt(t,n)
return e.dispatchEvent(r),r}).then(n=>q(`fireEvent:${t}`,"end",e).then(()=>n)).then(t=>q("fireEvent","end",e).then(()=>t))}function lt(e,t={}){const n=document.createEvent("Events"),r=void 0===t.bubbles||t.bubbles,a=void 0===t.cancelable||t.cancelable
delete t.bubbles,delete t.cancelable,n.initEvent(e,r,a)
for(const o in t)n[o]=t[o]
return n}function ct(e,t={}){const n={...rt,...t}
let r,a
try{return r=new KeyboardEvent(e,n),Object.defineProperty(r,"keyCode",{get:()=>parseInt(n.keyCode)}),Object.defineProperty(r,"which",{get:()=>parseInt(n.which)}),r}catch{}try{r=document.createEvent("KeyboardEvents"),a="initKeyboardEvent"}catch{}if(!r)try{r=document.createEvent("KeyEvents"),a="initKeyEvent"}catch{}return r&&a?r[a](e,n.bubbles,n.cancelable,window,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.keyCode,n.charCode):r=lt(e,t),r}var dt=n(1799),pt=n(4031)
function ft(e,t=null){if(!(0,dt.A)(e))throw new Error(`${e} is not focusable`)
const n=document.hasFocus&&!document.hasFocus(),r=null!==t
r||e.blur()
const a={relatedTarget:t}
return n||r?Promise.resolve().then(()=>st(e,"blur",{bubbles:!1,...a})).then(()=>st(e,"focusout",a)):Promise.resolve()}function ht(e=document.activeElement){return Promise.resolve().then(()=>q("blur","start",e)).then(()=>{const t=Ze(e)
if(!t){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`blur('${t}')\`.`)}return ft(t).then(()=>de())}).then(()=>q("blur","end",e))}function mt(e){return Promise.resolve().then(()=>{const t=function(e){if((0,Be.wz)(e))return null
let t=e
for(;t&&!(0,dt.A)(t);)t=t.parentElement
return t}(e),n=document.activeElement&&document.activeElement!==t&&(0,dt.A)(document.activeElement)?document.activeElement:null
return!t&&n?ft(n,null).then(()=>Promise.resolve({focusTarget:t,previousFocusedElement:n})):Promise.resolve({focusTarget:t,previousFocusedElement:n})}).then(({focusTarget:e,previousFocusedElement:t})=>{if(!e)throw new Error("There was a previously focused element")
const n=!document?.hasFocus()
return t&&n?ft(t,e).then(()=>Promise.resolve({focusTarget:e})):Promise.resolve({focusTarget:e})}).then(({focusTarget:e})=>{e.focus()
const t=document?.hasFocus()
return t?Promise.resolve():Promise.resolve().then(()=>st(e,"focus",{bubbles:!1})).then(()=>st(e,"focusin")).then(()=>de())}).catch(()=>{})}function Dt(e){return Promise.resolve().then(()=>q("focus","start",e)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `focus`.")
const t=Ze(e)
if(!t){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`focus('${t}')\`.`)}if(!(0,dt.A)(t))throw new Error(`${t} is not focusable`)
return mt(t).then(de)}).then(()=>q("focus","end",e))}j("blur","start",e=>{(0,tt.R)("blur",e)}),j("focus","start",e=>{(0,tt.R)("focus",e)})
var gt=n(7933)
j("click","start",e=>{(0,tt.R)("click",e)})
const vt={buttons:1,button:0}
function bt(e,t){return Promise.resolve().then(()=>st(e,"mousedown",t)).then(t=>(0,Be.l6)(e)||t?.defaultPrevented?Promise.resolve():mt(e)).then(()=>st(e,"mouseup",t)).then(()=>st(e,"click",t))}function yt(e,t={}){const n={...vt,...t}
return Promise.resolve().then(()=>q("click","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `click`.")
const t=Je(e)
if(!t){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`click('${t}')\`.`)}if((0,gt.A)(t)&&t.disabled)throw new Error(`Can not \`click\` disabled ${t}`)
return bt(t,n).then(de)}).then(()=>q("click","end",e,t))}function Ft(e,t={}){const n={...vt,...t}
return Promise.resolve().then(()=>q("doubleClick","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `doubleClick`.")
const t=Je(e)
if(!t){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`doubleClick('${t}')\`.`)}if((0,gt.A)(t)&&t.disabled)throw new Error(`Can not \`doubleClick\` disabled ${t}`)
return function(e,t){return Promise.resolve().then(()=>st(e,"mousedown",t)).then(t=>(0,Be.l6)(e)||t?.defaultPrevented?Promise.resolve():mt(e)).then(()=>st(e,"mouseup",t)).then(()=>st(e,"click",t)).then(()=>st(e,"mousedown",t)).then(()=>st(e,"mouseup",t)).then(()=>st(e,"click",t)).then(()=>st(e,"dblclick",t))}(t,n).then(de)}).then(()=>q("doubleClick","end",e,t))}j("doubleClick","start",e=>{(0,tt.R)("doubleClick",e)})
const wt="inert"in Element.prototype,Et=["CANVAS","VIDEO","PICTURE"]
function Ct(e){return e.activeElement||e.body}function xt({backwards:e=!1,unRestrainTabIndex:t=!1}={}){return Promise.resolve().then(()=>function(e,t){const n=_e()
let r,a;(0,Be.wz)(n)?(a=n.body,r=n):(a=n,r=n.ownerDocument)
const o={keyCode:9,which:9,key:"Tab",code:"Tab",shiftKey:e},i={keyboardEventOptions:o,ownerDocument:r,rootElement:a}
return Promise.resolve().then(()=>q("tab","start",i)).then(()=>Ct(r)).then(e=>q("tab","targetFound",e).then(()=>e)).then(t=>{const n=ct("keydown",o)
if(t.dispatchEvent(n)){t=Ct(r)
const n=function(e,t){const n=function(e=document.body){const{ownerDocument:t}=e
if(!t)throw new Error("Element must be in the DOM")
const n=Ct(t),r=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{if("AREA"!==e.tagName&&!1===(0,w.zN)(e))return NodeFilter.FILTER_REJECT
const t=e.parentNode
return t&&-1!==Et.indexOf(t.tagName)||wt&&e.inert||(0,w.d6)(e)?NodeFilter.FILTER_REJECT:e===n||e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}})
let a
const o=[]
for(;a=r.nextNode();)o.push(a)
return o}(e),r=function(e){return e.map((e,t)=>({index:t,element:e})).sort((e,t)=>e.element.tabIndex===t.element.tabIndex?e.index-t.index:0===e.element.tabIndex||0===t.element.tabIndex?t.element.tabIndex-e.element.tabIndex:e.element.tabIndex-t.element.tabIndex).map(e=>e.element)}(n),a=-1===t.tabIndex?n:r,o=a.indexOf(t)
return-1===o?{next:r[0],previous:r[r.length-1]}:{next:a[o+1],previous:a[o-1]}}(a,t)
if(n)return e&&n.previous?mt(n.previous):!e&&n.next?mt(n.next):ft(t)}return Promise.resolve()}).then(()=>{const e=Ct(r)
return st(e,"keyup",o).then(()=>e)}).then(e=>{if(!t&&e.tabIndex>0)throw new Error(`tabindex of greater than 0 is not allowed. Found tabindex=${e.tabIndex}`)}).then(()=>q("tab","end",i))}(e,t)).then(()=>de())}function At(e,t={}){return Promise.resolve().then(()=>q("tap","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `tap`.")
const n=Ze(e)
if(!n){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`tap('${t}')\`.`)}if((0,gt.A)(n)&&n.disabled)throw new Error(`Can not \`tap\` disabled ${n}`)
return st(n,"touchstart",t).then(e=>st(n,"touchend",t).then(t=>[e,t])).then(([e,r])=>e.defaultPrevented||r.defaultPrevented?Promise.resolve():bt(n,t)).then(de)}).then(()=>q("tap","end",e,t))}function kt(e,t,n){return Promise.resolve().then(()=>q("triggerEvent","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `triggerEvent`.")
if(!t)throw new Error("Must provide an `eventType` to `triggerEvent`")
const r=Je(e)
if(!r){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`triggerEvent('${t}', ...)\`.`)}if((0,gt.A)(r)&&r.disabled)throw new Error(`Can not \`triggerEvent\` on disabled ${r}`)
return st(r,t,n).then(de)}).then(()=>q("triggerEvent","end",e,t,n))}j("tab","start",e=>{(0,tt.R)("tab",e)}),j("tap","start",e=>{(0,tt.R)("tap",e)}),j("triggerEvent","start",(e,t)=>{(0,tt.R)("triggerEvent",e,t)}),j("triggerKeyEvent","start",(e,t,n)=>{(0,tt.R)("triggerKeyEvent",e,t,n)})
const Tt=Object.freeze({ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1}),Nt={8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Escape",32:" ",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",91:"Meta",93:"Meta",186:";",187:"=",188:",",189:"-",190:".",191:"/",219:"[",220:"\\",221:"]",222:"'"},Rt={48:")",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",186:":",187:"+",188:"<",189:"_",190:">",191:"?",219:"{",220:"|",221:"}",222:'"'}
function Bt(e,t){return e>64&&e<91?t.shiftKey?String.fromCharCode(e):String.fromCharCode(e).toLocaleLowerCase():t.shiftKey&&Rt[e]||Nt[e]}function _t(e,t,n,r=Tt){return Promise.resolve().then(()=>{let a
if("number"==typeof n)a={keyCode:n,which:n,key:Bt(n,r),...r}
else{if("string"!=typeof n||0===n.length)throw new Error("Must provide a `key` or `keyCode` to `triggerKeyEvent`")
{const e=n[0]
if(!e||e!==e.toUpperCase())throw new Error(`Must provide a \`key\` to \`triggerKeyEvent\` that starts with an uppercase character but you passed \`${n}\`.`)
if((0,w.kf)(n)&&n.length>1)throw new Error(`Must provide a numeric \`keyCode\` to \`triggerKeyEvent\` but you passed \`${n}\` as a string.`)
const t=function(e){const t=Object.keys(Nt),n=t.find(t=>Nt[Number(t)]===e)||t.find(t=>Nt[Number(t)]===e.toLowerCase())
return void 0!==n?parseInt(n):void 0}(n)
a={keyCode:t,which:t,key:n,...r}}}return st(e,t,a)})}function St(e,t,n,r=Tt){return Promise.resolve().then(()=>q("triggerKeyEvent","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `triggerKeyEvent`.")
const a=Ze(e)
if(!a){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`triggerKeyEvent('${t}')\`.`)}if(!t)throw new Error("Must provide an `eventType` to `triggerKeyEvent`")
if(!ot(t)){const e=at.join(", ")
throw new Error(`Must provide an \`eventType\` of ${e} to \`triggerKeyEvent\` but you passed \`${t}\`.`)}if((0,gt.A)(a)&&a.disabled)throw new Error(`Can not \`triggerKeyEvent\` on disabled ${a}`)
return _t(a,t,n,r).then(de)}).then(()=>q("triggerKeyEvent","end",e,t,n))}var Ot=n(4648)
function Mt(e,t){return Promise.resolve().then(()=>q("fillIn","start",e,t)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `fillIn`.")
const n=Ze(e)
if(!n){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`fillIn('${t}')\`.`)}if(null==t)throw new Error("Must provide `text` when calling `fillIn`.")
if((0,gt.A)(n)){if(n.disabled)throw new Error(`Can not \`fillIn\` disabled '${(0,pt.A)(e)}'.`)
if("readOnly"in n&&n.readOnly)throw new Error(`Can not \`fillIn\` readonly '${(0,pt.A)(e)}'.`)
return(0,Ot.A)(n,t,"fillIn"),mt(n).then(()=>(n.value=t,n))}if((0,Be.eJ)(n))return mt(n).then(()=>(n.innerHTML=t,n))
throw new Error("`fillIn` is only usable on form controls or contenteditable elements.")}).then(e=>st(e,"input").then(()=>st(e,"change")).then(de)).then(()=>q("fillIn","end",e,t))}j("fillIn","start",(e,t)=>{(0,tt.R)("fillIn",e,t)})
var It=n(642)
function Pt(e,t){return`${e} when calling \`select('${(0,pt.A)(t)}')\`.`}function jt(e,t,n=!1){return Promise.resolve().then(()=>q("select","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `select`.")
if(null==t)throw new Error("Must provide an `option` or `options` to select when calling `select`.")
const n=Ze(e)
if(!n)throw new Error(Pt("Element not found",e))
if(!(0,It.A)(n))throw new Error(Pt("Element is not a HTMLSelectElement",e))
if(n.disabled)throw new Error(Pt("Element is disabled",e))
if(t=Array.isArray(t)?t:[t],!n.multiple&&t.length>1)throw new Error(Pt("HTMLSelectElement `multiple` attribute is set to `false` but multiple options were passed",e))
return mt(n).then(()=>n)}).then(e=>{for(let r=0;r<e.options.length;r++){const a=e.options.item(r)
a&&(t.indexOf(a.value)>-1?a.selected=!0:n||(a.selected=!1))}return st(e,"input").then(()=>st(e,"change")).then(de)}).then(()=>q("select","end",e,t,n))}function qt(e){if("string"==typeof e)return _e().querySelectorAll(e)
{const t=(0,Xe.Ob)(e)
if(t)return(0,Xe.Mt)(t)
throw new Error("Must use a selector string or DOM element descriptor")}}function Lt(e,t={}){return Promise.resolve().then(()=>{if("string"!=typeof e&&!(0,Xe.Ob)(e))throw new Error("Must pass a selector or DOM element descriptor to `waitFor`.")
const{timeout:n=1e3,count:r=null}=t
let a,{timeoutMessage:o}=t
return o||(o=`waitFor timed out waiting for selector "${(0,pt.A)(e)}"`),a=null!==r?()=>{const t=Array.from(qt(e))
if(t.length===r)return t}:()=>Ze(e),(0,E.A)(a,{timeout:n,timeoutMessage:o})})}function zt(e){if(!e)throw new Error("Must pass a selector to `find`.")
if(arguments.length>1)throw new Error("The `find` test helper only takes a single argument.")
return Ze(e)}function $t(e){if(!e)throw new Error("Must pass a selector to `findAll`.")
if(arguments.length>1)throw new Error("The `findAll` test helper only takes a single argument.")
return Array.from(qt(e))}function Ht(e,t,n={}){return Promise.resolve().then(()=>q("typeIn","start",e,t,n)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `typeIn`.")
const r=Ze(e)
if(!r){const t=(0,pt.A)(e)
throw new Error(`Element not found when calling \`typeIn('${t}')\``)}if((0,Be.wz)(r)||!(0,gt.A)(r)&&!(0,Be.eJ)(r))throw new Error("`typeIn` is only usable on form controls or contenteditable elements.")
if(null==t)throw new Error("Must provide `text` when calling `typeIn`.")
if((0,gt.A)(r)){if(r.disabled)throw new Error(`Can not \`typeIn\` disabled '${(0,pt.A)(e)}'.`)
if("readOnly"in r&&r.readOnly)throw new Error(`Can not \`typeIn\` readonly '${(0,pt.A)(e)}'.`)}const{delay:a=50}=n
return mt(r).then(()=>function(e,t,n){const r=t.split("").map(t=>function(e,t){const n={shiftKey:t===t.toUpperCase()&&t!==t.toLowerCase()},r=t.toUpperCase()
return function(){return Promise.resolve().then(()=>_t(e,"keydown",r,n)).then(()=>_t(e,"keypress",r,n)).then(()=>{if((0,gt.A)(e)){const n=e.value+t;(0,Ot.A)(e,n,"typeIn"),e.value=n}else{const n=e.innerHTML+t
e.innerHTML=n}return st(e,"input")}).then(()=>_t(e,"keyup",r,n))}}(e,t))
return r.reduce((e,t)=>e.then(()=>function(e){return new Promise(t=>{setTimeout(t,e)})}(n)).then(t),Promise.resolve())}(r,t,a)).then(()=>st(r,"change")).then(de).then(()=>q("typeIn","end",e,t,n))})}function Vt(e,t){return`${e} when calling \`scrollTo('${(0,pt.A)(t)}')\`.`}function Ut(e,t,n){return Promise.resolve().then(()=>q("scrollTo","start",e)).then(()=>{if(!e)throw new Error("Must pass an element, selector, or descriptor to `scrollTo`.")
if(void 0===t||void 0===n)throw new Error("Must pass both x and y coordinates to `scrollTo`.")
const r=Ze(e)
if(!r)throw new Error(Vt("Element not found",e))
if(!(0,Be.vq)(r)){let t
throw t=(0,Be.wz)(r)?"Document":r.nodeType,new Error(Vt(`"target" must be an element, but was a ${t}`,e))}return r.scrollTop=n,r.scrollLeft=t,st(r,"scroll").then(de)}).then(()=>q("scrollTo","end",e))}j("typeIn","start",(e,t)=>{(0,tt.R)("typeIn",e,t)})},6198:(e,t,n)=>{"use strict"
n.r(t),n.d(t,{CI:()=>a,DEBUG:()=>r})
const r=!1,a=!1},6251:(e,t,n)=>{"use strict"
function r(e){return null!==e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}n.d(t,{A:()=>r})},6994:(e,t,n)=>{"use strict"
n.d(t,{Mt:()=>u,Ob:()=>o,lH:()=>i,ol:()=>a})
const r="__dom_element_descriptor_is_descriptor__"
function a(e){return Boolean("object"==typeof e&&e&&r in e)}function o(e){return function(){const e=window
return e.domElementDescriptorsRegistry=e.domElementDescriptorsRegistry||new WeakMap,e.domElementDescriptorsRegistry}().get(e)||null}function i(e){let t=a(e)?o(e):e
if(!t)return null
if(void 0!==t.element)return t.element
for(let n of t.elements||[])return n
return null}function u(e){let t=a(e)?o(e):e
if(!t)return[]
if(t.elements)return Array.from(t.elements)
{let e=t.element
return e?[e]:[]}}},7934:(e,t,n)=>{"use strict"
let r
function a(e){r=e}function o(){return r}n.d(t,{V:()=>a,v:()=>o})}}])
