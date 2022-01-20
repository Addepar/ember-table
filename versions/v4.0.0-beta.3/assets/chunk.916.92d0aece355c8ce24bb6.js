/*! For license information please see chunk.916.92d0aece355c8ce24bb6.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[916],{916:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
var i,o="function"==typeof o?o:function(){var e=Object.create(null),t=Object.prototype.hasOwnProperty
this.get=function(t){return e[t]},this.set=function(n,r){return t.call(e,n)||this.size++,e[n]=r,this},this.delete=function(n){t.call(e,n)&&(delete e[n],this.size--)},this.forEach=function(t){for(var n in e)t(e[n],n)},this.clear=function(){e=Object.create(null),this.size=0},this.size=0}
function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,i,o=[],s=!0,a=!1
try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||f(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||f(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){if(e){if("string"==typeof e)return h(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}!function(e){if("object"===("undefined"==typeof globalThis?"undefined":s(globalThis)))i=globalThis
else{var t=function(){i=this||self,delete e.prototype._T_}
this?t():(e.defineProperty(e.prototype,"_T_",{configurable:!0,get:t}),_T_)}}(Object)
var p=i,g=p.window,m=p.self,v=p.console,b=p.setTimeout,y=p.clearTimeout,k=g&&g.document,w=g&&g.navigator,x=function(){var e="qunit-test-string"
try{return p.sessionStorage.setItem(e,e),p.sessionStorage.removeItem(e),p.sessionStorage}catch(e){return}}(),E={warn:v?Function.prototype.bind.call(v.warn||v.log,v):function(){}},T=Object.prototype.toString,C=Object.prototype.hasOwnProperty,N=Date.now||function(){return(new Date).getTime()},S=g&&void 0!==g.performance&&"function"==typeof g.performance.mark&&"function"==typeof g.performance.measure?g.performance:void 0,j={now:S?S.now.bind(S):N,measure:S?function(e,t,n){try{S.measure(e,t,n)}catch(e){E.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:S?S.mark.bind(S):function(){}}
function q(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var i=0;i<t.length;i++)if(n[r]===t[i]){n.splice(r,1),r--
break}return n}function M(e,t){return-1!==t.indexOf(e)}function I(e){var t=A("array",e)?[]:{}
for(var n in e)if(C.call(e,n)){var r=e[n]
t[n]=r===Object(r)?I(r):r}return t}function R(e,t,n){for(var r in t)C.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function _(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=T.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return s(e)}}function A(e,t){return _(t)===e}function O(e,t){for(var n=e+""+t,r=0,i=0;i<n.length;i++)r=(r<<5)-r+n.charCodeAt(i),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function L(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var U=function(){var e=[],t=Object.getPrototypeOf||function(e){return e.__proto__}
function n(e,t){return"object"===s(e)&&(e=e.valueOf()),"object"===s(t)&&(t=t.valueOf()),e===t}function r(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}function i(t,n){return t===n||(-1===["object","array","map","set"].indexOf(_(t))?a(t,n):(e.every((function(e){return e.a!==t||e.b!==n}))&&e.push({a:t,b:n}),!0))}var o={string:n,boolean:n,number:n,null:n,undefined:n,symbol:n,date:n,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&r(e)===r(t)},function:function(){return!1},array:function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;r<n;r++)if(!i(e[r],t[r]))return!1
return!0},set:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t){if(r){var i=!1
n.forEach((function(n){if(!i){var r=e
u(n,t)&&(i=!0),e=r}})),i||(r=!1)}})),r},map:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t,i){if(r){var o=!1
n.forEach((function(n,r){if(!o){var s=e
u([n,r],[t,i])&&(o=!0),e=s}})),o||(r=!1)}})),r},object:function(e,n){if(!1===function(e,n){var r=t(e),i=t(n)
return e.constructor===n.constructor||(r&&null===r.constructor&&(r=null),i&&null===i.constructor&&(i=null),null===r&&i===Object.prototype||null===i&&r===Object.prototype)}(e,n))return!1
var r=[],o=[]
for(var s in e)if(r.push(s),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[s]||"function"!=typeof n[s]||e[s].toString()!==n[s].toString())&&!i(e[s],n[s]))return!1
for(var u in n)o.push(u)
return a(r.sort(),o.sort())}}
function a(e,t){var n=_(e)
return _(t)===n&&o[n](e,t)}function u(t,n){if(arguments.length<2)return!0
e=[{a:t,b:n}]
for(var r=0;r<e.length;r++){var i=e[r]
if(i.a!==i.b&&!a(i.a,i.b))return!1}return 2===arguments.length||u.apply(this,[].slice.call(arguments,1))}return function(){var t=u.apply(void 0,arguments)
return e.length=0,t}}(),P={queue:[],stats:{all:0,bad:0,testCount:0},blocking:!0,failOnZeroTests:!0,reorder:!0,altertitle:!0,collapse:!0,scrolltop:!0,maxDepth:5,requireExpects:!1,urlConfig:[],modules:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},callbacks:{},storage:x},D=g&&g.QUnit&&g.QUnit.config
g&&g.QUnit&&!g.QUnit.version&&R(P,D),P.modules.push(P.currentModule)
var F=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),i=o.indent(1)
return t.join&&(t=t.join(","+r+i)),t?[e,i+t,o.indent()+n].join(r):e+n}function r(e,t){if(o.maxDepth&&o.depth>o.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,i=new Array(r);r--;)i[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",i,"]")}var i=/^function (\w+)/,o={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var i=this.parsers[t],o=s(i)
if("function"===o){n.push(e)
var a=i.call(this,e,n)
return n.pop(),a}return"string"===o?i:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":A("regexp",e)?"regexp":A("date",e)?"date":A("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===T.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":s(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:P.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(i.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var i=[]
for(var s in e)i.push(s)
var a=["message","name"]
for(var u in a){var l=a[u]
l in e&&!M(l,i)&&i.push(l)}i.sort()
for(var c=0;c<i.length;c++){var d=i[c],f=e[d]
r.push(o.parse(d,"key")+": "+o.parse(f,void 0,t))}return o.down(),n("{",r,"}")},node:function(e){var t=o.HTML?"&lt;":"<",n=o.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),i=t+r,s=e.attributes
if(s)for(var a=0,u=s.length;a<u;a++){var l=s[a].nodeValue
l&&"inherit"!==l&&(i+=" "+s[a].nodeName+"="+o.parse(l,"attribute"))}return i+=n,3!==e.nodeType&&4!==e.nodeType||(i+=e.nodeValue),i+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),B=function(){function e(t,n){a(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return l(e,[{key:"start",value:function(e){if(e){this._startTime=j.now()
var t=this.fullName.length
j.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=j.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
j.mark("qunit_suite_".concat(t,"_end")),j.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,i=e.todo
return n?"failed":r===t?"skipped":i===t?"todo":"passed"}}]),e}(),H=[]
function Q(e,t,n){var r=H.length?H.slice(-1)[0]:null,i=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:$e,s=null!==r&&r.skip||n.skip,a=null!==r&&r.todo||n.todo,u={name:i,parentModule:r,tests:[],moduleId:O(i),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new B(e,o),skip:s,todo:!s&&a,ignored:n.ignored||!1},l={}
return r&&(r.childModules.push(u),R(l,r.testEnvironment)),R(l,t),u.testEnvironment=l,P.modules.push(u),u}function z(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"===_(t)&&(n=t,t=void 0)
var i=Q(e,t,r),o=i.testEnvironment,s=i.hooks={}
c(s,o,"before"),c(s,o,"beforeEach"),c(s,o,"afterEach"),c(s,o,"after")
var a={before:d(i,"before"),beforeEach:d(i,"beforeEach"),afterEach:d(i,"afterEach"),after:d(i,"after")},u=P.currentModule
if(P.currentModule=i,"function"===_(n)){H.push(i)
try{var l=n.call(i.testEnvironment,a)
null!=l&&"function"===_(l.then)&&E.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{H.pop(),P.currentModule=i.parentModule||u}}function c(e,t,n){var r=t[n]
e[n]="function"==typeof r?[r]:[],delete t[n]}function d(e,t){return function(n){P.currentModule!==e&&E.warn("The `"+t+"` hook was called inside the wrong module (`"+P.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}}var $=!1
function G(e,t,n){var r,i=$&&(r=P.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!H.some((function(e){return r.includes(e.moduleId)})))
z(e,t,n,{ignored:i})}G.only=function(){$||(P.modules.length=0,P.queue.length=0,P.currentModule.ignored=!0),$=!0,z.apply(void 0,arguments)},G.skip=function(e,t,n){$||z(e,t,n,{skip:!0})},G.todo=function(e,t,n){$||z(e,t,n,{todo:!0})}
var Y=Object.create(null),W=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function J(e,t){if("string"!==_(e))throw new TypeError("eventName must be a string when emitting an event")
for(var n=Y[e],r=n?d(n):[],i=0;i<r.length;i++)r[i](t)}var V="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Z={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==V)return V
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r)
return o(this,new c(e,t,n)),n},i.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},i.all=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var i=Array.prototype.slice.call(e)
if(0===i.length)return t([])
var o=i.length
function a(e,n){try{if(n&&("object"===s(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){a(e,t)}),r)}i[e]=n,0==--o&&t(i)}catch(e){r(e)}}for(var u=0;u<i.length;u++)a(u,i[u])}))},i.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(s(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var i=r.length
function o(e,n){if(n&&("object"===s(n)||"function"==typeof n)){var a=n.then
if("function"==typeof a)return void a.call(n,(function(t){o(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--i&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--i&&t(r)}for(var a=0;a<r.length;a++)o(a,r[a])}))},i.resolve=function(e){return e&&"object"===s(e)&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var o=0,s=e.length;o<s;o++)i.resolve(e[o]).then(t,r)}))},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},Z.exports=i}else Z.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function o(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void u(t.promise,e)}a(t.promise,r)}else(1===e._state?a:u)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===s(t)||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,o}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1
try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return
n=!0,u(t,e)}}}()
var K=Z.exports
function X(e,t){var n=P.callbacks[e]
if("log"!==e)return n.reduce((function(e,n){return e.then((function(){return K.resolve(n(t))}))}),K.resolve([]))
n.map((function(e){return e(t)}))}var ee=(ne(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,"")
function te(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),ee){for(var r=[],i=t;i<n.length&&-1===n[i].indexOf(ee);i++)r.push(n[i])
if(r.length)return r.join("\n")}return n[t]}}function ne(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return te(t,e)}var re,ie=0,oe=[]
function se(){var e,t
e=N(),P.depth=(P.depth||0)+1,ae(e),P.depth--,oe.length||P.blocking||P.current||(P.blocking||P.queue.length||0!==P.depth?(t=P.queue.shift()(),oe.push.apply(oe,d(t)),ie>0&&ie--,se()):function(){var e
if(0===P.stats.testCount&&!0===P.failOnZeroTests)return e=P.filter&&P.filter.length?new Error('No tests matched the filter "'.concat(P.filter,'".')):P.module&&P.module.length?new Error('No tests matched the module "'.concat(P.module,'".')):P.moduleId&&P.moduleId.length?new Error('No tests matched the moduleId "'.concat(P.moduleId,'".')):P.testId&&P.testId.length?new Error('No tests matched the testId "'.concat(P.testId,'".')):new Error("No tests were run."),me("global failure",R((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void se()
var t=P.storage,n=N()-P.started,r=P.stats.all-P.stats.bad
ue.finished=!0,J("runEnd",$e.end(!0)),X("done",{passed:r,failed:P.stats.bad,total:P.stats.all,runtime:n}).then((function(){if(t&&0===P.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function ae(e){if(oe.length&&!P.blocking){var t=N()-e
if(!b||P.updateRate<=0||t<P.updateRate){var n=oe.shift()
K.resolve(n()).then((function(){oe.length?ae(e):se()}))}else b(se)}}var ue={finished:!1,add:function(e,t,n){if(t)P.queue.splice(ie++,0,e)
else if(n){re||(re=function(e){var t=parseInt(O(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(re()*(P.queue.length-ie+1))
P.queue.splice(ie+r,0,e)}else P.queue.push(e)},advance:se,taskCount:function(){return oe.length}},le=function(){function e(t,n,r){a(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return l(e,[{key:"start",value:function(e){return e&&(this._startTime=j.now(),j.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=j.now(),j)){j.mark("qunit_test_end")
var t=this.fullName.join(" – ")
j.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return R(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function ce(e){if(this.expected=null,this.assertions=[],this.module=P.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new o,this.nextPauseId=1,R(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),ue.finished)E.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}++ce.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new le(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()})
for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=O(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new Ce(this)}}function de(){if(!P.current)throw new Error("pushFailure() assertion outside test context, in "+ne(2))
var e=P.current
return e.pushFailure.apply(e,arguments)}function fe(){if(P.pollution=[],P.noglobals)for(var e in p)if(C.call(p,e)){if(/^qunit-test-output/.test(e))continue
P.pollution.push(e)}}ce.count=0,ce.prototype={get stack(){return te(this.errorForStack,2)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t)
return n.reduce((function(e,t){return e.then((function(){return t.stats={all:0,bad:0,started:N()},J("suiteStart",t.suiteReport.start(!0)),X("moduleStart",{name:t.name,tests:t.tests})}))}),K.resolve([])).then((function(){return P.current=e,e.testEnvironment=R({},t.testEnvironment),e.started=N(),J("testStart",e.testReport.start(!0)),X("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){P.pollution||fe()}))}))},run:function(){if(P.current=this,this.callbackStarted=N(),P.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(e.message||e),te(e,0)),fe(),P.blocking&&ke(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&de("Test did not finish synchronously even though assert.timeout( 0 ) was used.",ne(2))}},after:function(){!function(){var e=P.pollution
fe()
var t=q(P.pollution,e)
t.length>0&&de("Introduced global variable(s): "+t.join(", "))
var n=q(e,P.pollution)
n.length>0&&de("Deleted global variable(s): "+n.join(", "))}()},queueHook:function(e,t,n){var r=this,i=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===xe(e).filter((function(e){return!e.skip})).length-1}(n)||!(P.queue.length>0||ue.taskCount()>2))if(P.current=r,P.notrycatch)i()
else try{i()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),te(e,0))}}},hooks:function(e){var t=[]
return this.skip||function n(r,i){if(i.parentModule&&n(r,i.parentModule),i.hooks[e].length)for(var o=0;o<i.hooks[e].length;o++)t.push(r.queueHook(i.hooks[e][o],e,i))}(this,this.module),t},finish:function(){if(P.current=this,this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}P.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,i=!!this.skip,o=!!this.todo,s=0,a=P.storage
this.runtime=N()-this.started,P.stats.all+=this.assertions.length,P.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var u=0;u<this.assertions.length;u++)this.assertions[u].result||(s++,P.stats.bad++,t.stats.bad++)
i?Te(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),a&&(s?a.setItem("qunit-test-"+n+"-"+r,s):a.removeItem("qunit-test-"+n+"-"+r)),J("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var l=this
return X("testDone",{name:r,module:n,skipped:i,todo:o,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:i?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return l.stack}}).then((function(){if(Ee(t)){for(var e=[t],n=t.parentModule;n&&Ee(n);)e.push(n),n=n.parentModule
return e.reduce((function(e,t){return e.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,d(n.childModules))}return J("suiteEnd",e.suiteReport.end(!0)),X("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:N()-e.stats.started})}(t)}))}),K.resolve([]))}})).then((function(){P.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=R({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=P.storage&&+P.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=P.reorder&&!!t
this.previousFailure=!!t,ue.add((function(){return[function(){return e.before()}].concat(d(e.hooks("before")),[function(){e.preserveTestEnvironment()}],d(e.hooks("beforeEach")),[function(){e.run()}],d(e.hooks("afterEach").reverse()),d(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,P.seed)}else Te(this.module)},pushResult:function(e){if(this!==P.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:N()-this.started,todo:!!this.todo}
if(C.call(e,"expected")&&(r.expected=e.expected),!e.result){var i=e.source||ne()
i&&(r.source=i)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof ce))throw new Error("pushFailure() assertion outside test context, was "+ne(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){X("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),J("assertion",t)},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"===_(r)){var i=ye(n),o=function(){i()}
P.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,te(e,0)),fe(),ke(n)}))}}},valid:function(){var e=P.filter,t=/^(!?)\/([\w\W]*)\/(i?$)/.exec(e),n=P.module&&P.module.toLowerCase(),r=this.module.name+": "+this.testName
return!(!this.callback||!this.callback.validTest)||!(P.moduleId&&P.moduleId.length>0&&!function e(t){return M(t.moduleId,P.moduleId)||t.parentModule&&e(t.parentModule)}(this.module))&&!(P.testId&&P.testId.length>0&&!M(this.testId,P.testId))&&!(n&&!function e(t){return(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule)}(this.module))&&(!e||(t?this.regexFilter(!!t[1],t[2],t[3],r):this.stringFilter(e,r)))},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var he=!1
function pe(e){he||P.currentModule.ignored||new ce(e).queue()}function ge(e){P.currentModule.ignored||(he||(P.queue.length=0,he=!0),new ce(e).queue())}function me(e,t){pe({testName:e,callback:t})}function ve(e,t){return"".concat(e," [").concat(t,"]")}function be(e,t){if(Array.isArray(e))e.forEach(t)
else{if("object"!==s(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(s(e)," instead."))
Object.keys(e).forEach((function(n){t(e[n],n)}))}}function ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
P.blocking=!0
var n,r=e.nextPauseId++,i={cancelled:!1,remaining:t}
function o(){if(!i.cancelled){if(void 0===P.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(P.current!==e)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
if(i.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(e.testName," [async #").concat(r,"]"))
i.remaining--,0===i.remaining&&e.pauses.delete(r),we(e)}}return e.pauses.set(r,i),b&&("number"==typeof e.timeout?n=e.timeout:"number"==typeof P.testTimeout&&(n=P.testTimeout),"number"==typeof n&&n>0&&(P.timeoutHandler=function(t){return function(){P.timeout=null,i.cancelled=!0,e.pauses.delete(r),e.pushFailure("Test took longer than ".concat(t,"ms; test timed out."),ne(2)),we(e)}},y(P.timeout),P.timeout=b(P.timeoutHandler(n),n))),o}function ke(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),we(e)}function we(e){e.pauses.size>0||(b?(y(P.timeout),P.timeout=b((function(){e.pauses.size>0||(y(P.timeout),P.timeout=null,Ve())}))):Ve())}function xe(e){for(var t=[].concat(e.tests),n=d(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,d(r.childModules))}return t}function Ee(e){return e.testsRun+e.testsIgnored===xe(e).length}function Te(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}R(me,{todo:function(e,t){pe({testName:e,callback:t,todo:!0})},skip:function(e){pe({testName:e,skip:!0})},only:function(e,t){ge({testName:e,callback:t})},each:function(e,t,n){be(t,(function(t,r){pe({testName:ve(e,r),callback:n,withData:!0,data:t})}))}}),me.todo.each=function(e,t,n){be(t,(function(t,r){pe({testName:ve(e,r),callback:n,todo:!0,withData:!0,data:t})}))},me.skip.each=function(e,t){be(t,(function(t,n){pe({testName:ve(e,n),skip:!0})}))},me.only.each=function(e,t,n){be(t,(function(t,r){ge({testName:ve(e,r),callback:n,withData:!0,data:t})}))}
var Ce=function(){function e(t){a(this,e),this.test=t}return l(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
var t
this.test.timeout=e,P.timeout&&(y(P.timeout),P.timeout=null,P.timeoutHandler&&this.test.timeout>0&&(t=this.test.timeout,y(P.timeout),P.timeout=b(P.timeoutHandler(t),t)))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),"undefined"===_(e)||""===e?t="You must provide a message to assert.step":"string"!==_(e)&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return ye(this.test,t)}},{key:"push",value:function(t,n,r,i,o){return E.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:P.current.assert).pushResult({result:t,actual:n,expected:r,message:i,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||P.current
if(!r)throw new Error("assertion outside test context, in "+ne(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(F.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(F.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){var r=t==e
this.pushResult({result:r,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){var r=t!=e
this.pushResult({result:r,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=I(e),t=I(t),this.pushResult({result:U(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=I(e),t=I(t),this.pushResult({result:!U(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:U(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!U(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var i=c(Ne(n,r,"throws"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||P.current
if("function"===_(t)){var s,a=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){s=e}if(o.ignoreGlobalErrors=!1,s){var u=c(Se(s,n,r),3)
a=u[0],n=u[1],r=u[2]}o.assert.pushResult({result:a,actual:s&&L(s),expected:n,message:r})}else{var l='The value provided to `assert.throws` in "'+o.testName+'" was not a function.'
o.assert.pushResult({result:!1,actual:t,message:l})}}},{key:"rejects",value:function(t,n,r){var i=c(Ne(n,r,"rejects"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||P.current,s=t&&t.then
if("function"===_(s)){var a=this.async()
return s.call(t,(function(){var e='The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.'
o.assert.pushResult({result:!1,message:e,actual:t}),a()}),(function(e){var t,i=c(Se(e,n,r),3)
t=i[0],n=i[1],r=i[2],o.assert.pushResult({result:t,actual:e&&L(e),expected:n,message:r}),a()}))}var u='The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.'
o.assert.pushResult({result:!1,message:u,actual:t})}}]),e}()
function Ne(e,t,n){var r=_(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function Se(e,t,n){var r=!1,i=_(t)
if(t){if("regexp"===i)r=t.test(L(e)),t=String(t)
else if("function"===i&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===i)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=L(t)
else if("function"===i)try{r=!0===t.call({},e),t=null}catch(e){t=L(e)}}else r=!0
return[r,t,n]}Ce.prototype.raises=Ce.prototype.throws
var je,qe,Me,Ie,Re=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a(this,e),this.log=n.log||Function.prototype.bind.call(v.log,v),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return l(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),_e=!0
if("undefined"!=typeof process){var Ae=process.env
je=Ae.FORCE_COLOR,qe=Ae.NODE_DISABLE_COLORS,Me=Ae.NO_COLOR,Ie=Ae.TERM,_e=process.stdout&&process.stdout.isTTY}var Oe={enabled:!qe&&null==Me&&"dumb"!==Ie&&(null!=je&&"0"!==je||_e),reset:Ue(0,0),bold:Ue(1,22),dim:Ue(2,22),italic:Ue(3,23),underline:Ue(4,24),inverse:Ue(7,27),hidden:Ue(8,28),strikethrough:Ue(9,29),black:Ue(30,39),red:Ue(31,39),green:Ue(32,39),yellow:Ue(33,39),blue:Ue(34,39),magenta:Ue(35,39),cyan:Ue(36,39),white:Ue(37,39),gray:Ue(90,39),grey:Ue(90,39),bgBlack:Ue(40,49),bgRed:Ue(41,49),bgGreen:Ue(42,49),bgYellow:Ue(43,49),bgBlue:Ue(44,49),bgMagenta:Ue(45,49),bgCyan:Ue(46,49),bgWhite:Ue(47,49)}
function Le(e,t){for(var n,r=0,i="",o="";r<e.length;r++)i+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return i+t+o}function Ue(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Oe.enabled?Le(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Oe.reset.bind(r),r.bold=Oe.bold.bind(r),r.dim=Oe.dim.bind(r),r.italic=Oe.italic.bind(r),r.underline=Oe.underline.bind(r),r.inverse=Oe.inverse.bind(r),r.hidden=Oe.hidden.bind(r),r.strikethrough=Oe.strikethrough.bind(r),r.black=Oe.black.bind(r),r.red=Oe.red.bind(r),r.green=Oe.green.bind(r),r.yellow=Oe.yellow.bind(r),r.blue=Oe.blue.bind(r),r.magenta=Oe.magenta.bind(r),r.cyan=Oe.cyan.bind(r),r.white=Oe.white.bind(r),r.gray=Oe.gray.bind(r),r.grey=Oe.grey.bind(r),r.bgBlack=Oe.bgBlack.bind(r),r.bgRed=Oe.bgRed.bind(r),r.bgGreen=Oe.bgGreen.bind(r),r.bgYellow=Oe.bgYellow.bind(r),r.bgBlue=Oe.bgBlue.bind(r),r.bgMagenta=Oe.bgMagenta.bind(r),r.bgCyan=Oe.bgCyan.bind(r),r.bgWhite=Oe.bgWhite.bind(r),r):Oe.enabled?Le([n],t+""):t+""
var r}}var Pe=Object.prototype.hasOwnProperty
function De(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){var n=/['"\\/[{}\]\r\n]/,r=/[-?:,[\]{}#&*!|=>'"%@`]/,i=/(^\s|\s$)/,o=/^[\d._-]+$/,s=/^(true|false|y|n|yes|no|on|off)$/i
if(""===e||n.test(e)||r.test(e[0])||i.test(e)||o.test(e)||s.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var a=new Array(t+1).join(" "),u=e.match(/\n+$/),l=u?u[0].length:0
if(1===l){var c=e.replace(/\n$/,"").split("\n").map((function(e){return a+e}))
return"|\n"+c.join("\n")}var d=e.split("\n").map((function(e){return a+e}))
return"|+\n"+d.join("\n")}return e}return JSON.stringify(Fe(e),null,2)}function Fe(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
var r=Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()
switch(r){case"array":n.push(e),t=e.map((function(e){return Fe(e,n)})),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach((function(r){t[r]=Fe(e[r],n)})),n.pop()
break
default:t=e}return t}var Be=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a(this,e),this.log=n.log||Function.prototype.bind.call(v.log,v),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return l(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Oe.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+L(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Oe.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Oe.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Oe.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Oe.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Oe.cyan("# todo ".concat(e.testCounts.todo))),this.log(Oe.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(De(e.message||"failed")),n+="\n  severity: ".concat(De(t||"failed")),Pe.call(e,"actual")&&(n+="\n  actual  : ".concat(De(e.actual))),Pe.call(e,"expected")&&(n+="\n  expected: ".concat(De(e.expected))),e.stack&&(n+="\n  stack: ".concat(De(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(De(L(e))),t+="\n  severity: ".concat(De("failed")),e&&e.stack&&(t+="\n  stack: ".concat(De(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),He={console:Re,tap:Be}
function Qe(e){P.current?P.current.assert.pushResult({result:!1,message:"global failure: ".concat(L(e)),source:e&&e.stack||ne(2)}):($e.globalFailureCount++,P.stats.bad++,P.stats.all++,J("error",e))}var ze={},$e=new B
P.currentModule.suiteReport=$e
var Ge=!1,Ye=!1
function We(){Ye=!0,b?b((function(){Ve()})):Ve()}function Je(){P.blocking=!1,ue.advance()}function Ve(){if(P.started)Je()
else{P.started=N(),""===P.modules[0].name&&0===P.modules[0].tests.length&&P.modules.shift()
for(var e=P.modules.length,t=[],n=0;n<e;n++)t.push({name:P.modules[n].name,tests:P.modules[n].tests})
J("runStart",$e.start(!0)),X("begin",{totalTests:ce.count,modules:t}).then(Je)}}ze.isLocal=g&&g.location&&"file:"===g.location.protocol,ze.version="2.17.2",R(ze,{config:P,dump:F,equiv:U,reporters:He,is:A,objectType:_,on:function(e,t){if("string"!==_(e))throw new TypeError("eventName must be a string when registering a listener")
if(!M(e,W)){var n=W.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!==_(t))throw new TypeError("callback must be a function when registering a listener")
Y[e]||(Y[e]=[]),M(t,Y[e])||Y[e].push(t)},onError:function(e){if(E.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),P.current&&P.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,Qe(t),!1},onUncaughtException:Qe,pushFailure:de,assert:Ce.prototype,module:G,test:me,todo:me.todo,skip:me.skip,only:me.only,start:function(e){if(P.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=Ge
if(Ge=!0,Ye)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(P.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!P.pageLoaded)return P.autostart=!0,void(k||ze.load())
We()},onUnhandledRejection:function(e){E.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Qe(e)},extend:function(){E.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return R.apply(this,t)},load:function(){P.pageLoaded=!0,R(P,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),Ye||(P.blocking=!1,P.autostart&&We())},stack:function(e){return ne(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!==_(t))throw new Error("QUnit logging methods require a callback function as their first parameters.")
P.callbacks[e].push(t)}}for(var r=0,i=t.length;r<i;r++){var o=t[r]
"undefined"===_(P.callbacks[o])&&(P.callbacks[o]=[]),e[o]=n(o)}}(ze),function(i){var o=!1
if(g&&k){if(g.QUnit&&g.QUnit.version)throw new Error("QUnit has already been defined.")
g.QUnit=i,o=!0}e&&e.exports&&(e.exports=i,e.exports.QUnit=i,o=!0),t&&(t.QUnit=i,o=!0),void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r),i.config.autostart=!1,o=!0,m&&m.WorkerGlobalScope&&m instanceof m.WorkerGlobalScope&&(m.QUnit=i,o=!0),o||(p.QUnit=i)}(ze),function(){if(g&&k){var e=ze.config,t=Object.prototype.hasOwnProperty
ze.begin((function(){if(!t.call(e,"fixture")){var n=k.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),ze.testStart((function(){if(null!=e.fixture){var t=k.getElementById("qunit-fixture")
if("string"===s(e.fixture)){var n=k.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==g&&g.location
if(e){var t=function(){var t,r,i,o,s=Object.create(null),a=e.search.slice(1).split("&"),u=a.length
for(t=0;t<u;t++)a[t]&&(i=n((r=a[t].split("="))[0]),o=1===r.length||n(r.slice(1).join("=")),s[i]=i in s?[].concat(s[i],o):o)
return s}()
ze.urlParams=t,ze.config.moduleId=[].concat(t.moduleId||[]),ze.config.testId=[].concat(t.testId||[]),ze.config.module=t.module,ze.config.filter=t.filter,!0===t.seed?ze.config.seed=Math.random().toString(36).slice(2):t.seed&&(ze.config.seed=t.seed),ze.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),ze.begin((function(){var e,n,r=ze.config.urlConfig
for(e=0;e<r.length;e++)"string"!=typeof(n=ze.config.urlConfig[e])&&(n=n.id),void 0===ze.config[n]&&(ze.config[n]=t[n])}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var Ze={exports:{}}
!function(e){var t,n
t=V,n=function(){var e="undefined"==typeof window,t=new o,n=new o,r=[]
r.total=0
var i=[],a=[]
function u(){t.clear(),n.clear(),i=[],a=[]}function l(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var i=r.score
i>t&&(t=i)}}return-9007199254740991===t?null:t}function c(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var i=r.length,o=-1;e&&++o<i;)e=e[r[o]]
return e}function d(e){return"object"===s(e)}var f=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],i=1;i<t;){var o=i+1
n=i,o<t&&e[o].score<e[i].score&&(n=o),e[n-1>>1]=e[n],i=1+(n<<1)}for(var s=n-1>>1;n>0&&r.score<e[s].score;s=(n=s)-1>>1)e[n]=e[s]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var i=r-1>>1;r>0&&n.score<e[i].score;i=(r=i)-1>>1)e[r]=e[i]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},h=f()
return function o(s){var p={single:function(e,t,n){return e?(d(e)||(e=p.getPreparedSearch(e)),t?(d(t)||(t=p.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!s||void 0===s.allowTypo||s.allowTypo)?p.algorithm:p.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if(!e)return r
var i=(e=p.prepareSearch(e))[0],o=n&&n.threshold||s&&s.threshold||-9007199254740991,a=n&&n.limit||s&&s.limit||9007199254740991,u=(n&&void 0!==n.allowTypo?n.allowTypo:!s||void 0===s.allowTypo||s.allowTypo)?p.algorithm:p.algorithmNoTypo,f=0,g=0,m=t.length
if(n&&n.keys)for(var v=n.scoreFn||l,b=n.keys,y=b.length,k=m-1;k>=0;--k){for(var w=t[k],x=new Array(y),E=y-1;E>=0;--E)(N=c(w,C=b[E]))?(d(N)||(N=p.getPrepared(N)),x[E]=u(e,N,i)):x[E]=null
x.obj=w
var T=v(x)
null!==T&&(T<o||(x.score=T,f<a?(h.add(x),++f):(++g,T>h.peek().score&&h.replaceTop(x))))}else if(n&&n.key){var C=n.key
for(k=m-1;k>=0;--k)(N=c(w=t[k],C))&&(d(N)||(N=p.getPrepared(N)),null!==(S=u(e,N,i))&&(S.score<o||(S={target:S.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:S.score,indexes:S.indexes,obj:w},f<a?(h.add(S),++f):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}else for(k=m-1;k>=0;--k){var N,S;(N=t[k])&&(d(N)||(N=p.getPrepared(N)),null!==(S=u(e,N,i))&&(S.score<o||(f<a?(h.add(S),++f):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}if(0===f)return r
var j=new Array(f)
for(k=f-1;k>=0;--k)j[k]=h.poll()
return j.total=f+g,j},goAsync:function(t,n,i){var o=!1,a=new Promise((function(a,u){if(!t)return a(r)
var h=(t=p.prepareSearch(t))[0],g=f(),m=n.length-1,v=i&&i.threshold||s&&s.threshold||-9007199254740991,b=i&&i.limit||s&&s.limit||9007199254740991,y=(i&&void 0!==i.allowTypo?i.allowTypo:!s||void 0===s.allowTypo||s.allowTypo)?p.algorithm:p.algorithmNoTypo,k=0,w=0
function x(){if(o)return u("canceled")
var s=Date.now()
if(i&&i.keys)for(var f=i.scoreFn||l,E=i.keys,T=E.length;m>=0;--m){for(var C=n[m],N=new Array(T),S=T-1;S>=0;--S)(M=c(C,q=E[S]))?(d(M)||(M=p.getPrepared(M)),N[S]=y(t,M,h)):N[S]=null
N.obj=C
var j=f(N)
if(null!==j&&!(j<v)&&(N.score=j,k<b?(g.add(N),++k):(++w,j>g.peek().score&&g.replaceTop(N)),m%1e3==0&&Date.now()-s>=10))return void(e?setImmediate(x):setTimeout(x))}else if(i&&i.key){for(var q=i.key;m>=0;--m)if((M=c(C=n[m],q))&&(d(M)||(M=p.getPrepared(M)),null!==(I=y(t,M,h))&&!(I.score<v)&&(I={target:I.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:I.score,indexes:I.indexes,obj:C},k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)),m%1e3==0&&Date.now()-s>=10)))return void(e?setImmediate(x):setTimeout(x))}else for(;m>=0;--m){var M,I
if((M=n[m])&&(d(M)||(M=p.getPrepared(M)),null!==(I=y(t,M,h))&&!(I.score<v)&&(k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)),m%1e3==0&&Date.now()-s>=10)))return void(e?setImmediate(x):setTimeout(x))}if(0===k)return a(r)
for(var R=new Array(k),_=k-1;_>=0;--_)R[_]=g.poll()
R.total=k+w,a(R)}e?setImmediate(x):x()}))
return a.cancel=function(){o=!0},a},highlight:function(e,t,n){if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",i=0,o=!1,s=e.target,a=s.length,u=e.indexes,l=0;l<a;++l){var c=s[l]
if(u[i]===l){if(o||(o=!0,r+=t),++i===u.length){r+=c+n+s.substr(l+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},prepare:function(e){if(e)return{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){if(e)return{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:p.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}},prepareSearch:function(e){if(e)return p.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return p.prepare(e)
var n=t.get(e)
return void 0!==n||(n=p.prepare(e),t.set(e,n)),n},getPreparedSearch:function(e){if(e.length>999)return p.prepareSearch(e)
var t=n.get(e)
return void 0!==t||(t=p.prepareSearch(e),n.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,s=r.length,u=0,l=0,c=0,d=0;;){if(n===r[l]){if(i[d++]=l,++u===o)break
n=e[0===c?u:c===u?u+1:c===u-1?u-1:u]}if(++l>=s)for(;;){if(u<=1)return null
if(0===c){if(n===e[--u])continue
c=u}else{if(1===c)return null
if((n=e[1+(u=--c)])===e[u])continue}l=i[(d=u)-1]+1
break}}u=0
var f=0,h=!1,g=0,m=t._nextBeginningIndexes
null===m&&(m=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target))
var v=l=0===i[0]?0:m[i[0]-1]
if(l!==s)for(;;)if(l>=s){if(u<=0){if(++f>o-2)break
if(e[f]===e[f+1])continue
l=v
continue}--u,l=m[a[--g]]}else if(e[0===f?u:f===u?u+1:f===u-1?u-1:u]===r[l]){if(a[g++]=l,++u===o){h=!0
break}++l}else l=m[l]
if(h)var b=a,y=g
else b=i,y=d
for(var k=0,w=-1,x=0;x<o;++x)w!==(l=b[x])-1&&(k-=l),w=l
for(h?0!==f&&(k+=-20):(k*=1e3,0!==c&&(k+=-20)),k-=s-o,t.score=k,t.indexes=new Array(y),x=y-1;x>=0;--x)t.indexes[x]=b[x]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,o=e.length,s=r.length,u=0,l=0,c=0;;){if(n===r[l]){if(i[c++]=l,++u===o)break
n=e[u]}if(++l>=s)return null}u=0
var d=!1,f=0,h=t._nextBeginningIndexes
if(null===h&&(h=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target)),(l=0===i[0]?0:h[i[0]-1])!==s)for(;;)if(l>=s){if(u<=0)break;--u,l=h[a[--f]]}else if(e[u]===r[l]){if(a[f++]=l,++u===o){d=!0
break}++l}else l=h[l]
if(d)var g=a,m=f
else g=i,m=c
for(var v=0,b=-1,y=0;y<o;++y)b!==(l=g[y])-1&&(v-=l),b=l
for(d||(v*=1e3),v-=s-o,t.score=v,t.indexes=new Array(m),y=m-1;y>=0;--y)t.indexes[y]=g[y]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),i=0;i<t;++i)n[i]=r.charCodeAt(i)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,i=!1,o=!1,s=0;s<t;++s){var a=e.charCodeAt(s),u=a>=65&&a<=90,l=u||a>=97&&a<=122||a>=48&&a<=57,c=u&&!i||!o||!l
i=u,o=l,c&&(n[r++]=s)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=p.prepareBeginningIndexes(e),r=[],i=n[0],o=0,s=0;s<t;++s)i>s?r[s]=i:(i=n[++o],r[s]=void 0===i?t:i)
return r},cleanup:u,new:o}
return p}()},e.exports?e.exports=n():t.fuzzysort=n()}(Ze)
var Ke=Ze.exports,Xe={failedTests:[],defined:0,completed:0}
function et(e){return e?(e+="").replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(g&&k){var e=ze.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,i=C({filter:void 0,module:void 0,moduleId:void 0,testId:void 0})
ze.on("runStart",(function(e){Xe.defined=e.testCounts.total})),ze.begin((function(){var t,n,o,s,a,u,f,h,v,C,j;(u=y("qunit"))&&(u.setAttribute("role","main"),u.innerHTML="<h1 id='qunit-header'>"+et(k.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(t=ze.config.testId)||t.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+et(t.join(", "))+" <a id='qunit-clearFilter' href='"+et(i)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(n=y("qunit-header"))&&(n.innerHTML="<a href='"+et(i)+"'>"+n.innerHTML+"</a> "),(o=y("qunit-banner"))&&(o.className=""),C=y("qunit-tests"),(j=y("qunit-testresult"))&&j.parentNode.removeChild(j),C&&(C.innerHTML="",(j=k.createElement("p")).id="qunit-testresult",j.className="result",C.parentNode.insertBefore(j,C),j.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',h=y("qunit-testresult-controls")),h&&h.appendChild(((v=k.createElement("button")).id="qunit-abort-tests-button",v.innerHTML="Abort",l(v,"click",x),v)),(s=y("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(k.createTextNode("QUnit "+ze.version+"; "+w.userAgent))),(a=y("qunit-testrunner-toolbar"))&&(a.appendChild(((f=k.createElement("span")).innerHTML=function(){var t,n,i,o,s,a=!1,u=e.urlConfig,l=""
for(t=0;t<u.length;t++)if("string"==typeof(i=e.urlConfig[t])&&(i={id:i,label:i}),o=et(i.id),s=et(i.tooltip),i.value&&"string"!=typeof i.value){if(l+="<label for='qunit-urlconfig-"+o+"' title='"+s+"'>"+i.label+": </label><select id='qunit-urlconfig-"+o+"' name='"+o+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(n=0;n<i.value.length;n++)l+="<option value='"+(o=et(i.value[n]))+"'"+(e[i.id]===i.value[n]?(a=!0)&&" selected='selected'":"")+">"+o+"</option>"
else for(n in i.value)r.call(i.value,n)&&(l+="<option value='"+et(n)+"'"+(e[i.id]===n?(a=!0)&&" selected='selected'":"")+">"+et(i.value[n])+"</option>")
e[i.id]&&!a&&(l+="<option value='"+(o=et(e[i.id]))+"' selected='selected' disabled='disabled'>"+o+"</option>"),l+="</select>"}else l+="<label for='qunit-urlconfig-"+o+"' title='"+s+"'><input id='qunit-urlconfig-"+o+"' name='"+o+"' type='checkbox'"+(i.value?" value='"+et(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+et(i.label)+"</label>"
return l}(),p(f,"qunit-url-config"),d(f.getElementsByTagName("input"),"change",T),d(f.getElementsByTagName("select"),"change",T),f)),a.appendChild(function(){var t,n,r,i,o=k.createElement("span")
return o.id="qunit-toolbar-filters",o.appendChild((t=k.createElement("form"),n=k.createElement("label"),r=k.createElement("input"),i=k.createElement("button"),p(t,"qunit-filter"),n.innerHTML="Filter: ",r.type="text",r.value=e.filter||"",r.name="filter",r.id="qunit-filter-input",i.innerHTML="Go",n.appendChild(r),t.appendChild(n),t.appendChild(k.createTextNode(" ")),t.appendChild(i),l(t,"submit",E),t)),o.appendChild(function(){var t,n,r,i=k.createElement("form"),o=k.createElement("label"),s=k.createElement("input"),a=k.createElement("div"),u=k.createElement("span"),d=k.createElement("button"),f=k.createElement("button"),h=k.createElement("label"),p=k.createElement("input"),v=k.createElement("ul"),y=!1
function w(){function e(t){var n=i.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&s.focus(),a.style.display="none",c(k,"click",e),c(k,"keydown",e),s.value="",x())}"none"===a.style.display&&(a.style.display="block",l(k,"click",e),l(k,"keydown",e))}function x(){g.clearTimeout(r),r=g.setTimeout((function(){var t,n=""===(t=s.value.toLowerCase())?e.modules:Ke.go(t,e.modules,{key:"namePrepared",threshold:-1e4}).map((function(e){return e.obj}))
v.innerHTML=S(n)}),200)}function T(e){var r,i,o=e&&e.target||p,a=v.getElementsByTagName("input"),u=[]
for(m(o.parentNode,"checked",o.checked),y=!1,o.checked&&o!==p&&(p.checked=!1,b(p.parentNode,"checked")),r=0;r<a.length;r++)i=a[r],e?o===p&&o.checked&&(i.checked=!1,b(i.parentNode,"checked")):m(i.parentNode,"checked",i.checked),y=y||i.checked!==i.defaultChecked,i.checked&&u.push(i.parentNode.textContent)
t.style.display=n.style.display=y?"":"none",s.placeholder=u.join(", ")||p.parentNode.textContent,s.title="Type to filter list. Current selection:\n"+(u.join("\n")||p.parentNode.textContent)}return s.id="qunit-modulefilter-search",s.autocomplete="off",l(s,"input",x),l(s,"input",w),l(s,"focus",w),l(s,"click",w),e.modules.forEach((function(e){return e.namePrepared=Ke.prepare(e.name)})),o.id="qunit-modulefilter-search-container",o.innerHTML="Module: ",o.appendChild(s),d.textContent="Apply",d.style.display="none",f.textContent="Reset",f.type="reset",f.style.display="none",p.type="checkbox",p.checked=0===e.moduleId.length,h.className="clickable",e.moduleId.length&&(h.className="checked"),h.appendChild(p),h.appendChild(k.createTextNode("All modules")),u.id="qunit-modulefilter-actions",u.appendChild(d),u.appendChild(f),u.appendChild(h),t=u.firstChild,n=t.nextSibling,l(t,"click",N),v.id="qunit-modulefilter-dropdown-list",v.innerHTML=S(e.modules),a.id="qunit-modulefilter-dropdown",a.style.display="none",a.appendChild(u),a.appendChild(v),l(a,"change",T),T(),i.id="qunit-modulefilter",i.appendChild(o),i.appendChild(a),l(i,"submit",E),l(i,"reset",(function(){g.setTimeout(T)})),i}()),o}()),a.appendChild(k.createElement("div")).className="clearfix")})),ze.on("runEnd",(function(t){var n,r,i,o=y("qunit-banner"),s=y("qunit-tests"),a=y("qunit-abort-tests-button"),u=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",u,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",q(Xe.failedTests)].join("")
if(a&&a.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<s.children.length;c++)""!==(n=s.children[c]).className&&"running"!==n.className||(n.className="aborted",i=n.getElementsByTagName("ol")[0],(r=k.createElement("li")).className="fail",r.innerHTML="Test aborted.",i.appendChild(r))}!o||a&&!1!==a.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),a&&a.parentNode.removeChild(a),s&&(y("qunit-testresult-display").innerHTML=l),e.altertitle&&k.title&&(k.title=["failed"===t.status?"✖":"✔",k.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&g.scrollTo&&g.scrollTo(0,0)})),ze.testStart((function(e){var t,n
j(e.name,e.testId,e.module),(t=y("qunit-testresult-display"))&&(p(t,"running"),n=ze.config.reorder&&e.previousFailure,t.innerHTML=[I(Xe),n?"Rerunning previously failed test: <br />":"Running: ",M(e.name,e.module),q(Xe.failedTests)].join(""))})),ze.log((function(e){var t,n,i,o,s,a,u=!1,l=y("qunit-test-output-"+e.testId)
l&&(i="<span class='test-message'>"+(i=et(e.message)||(e.result?"okay":"failed"))+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>",!e.result&&r.call(e,"expected")?(o=e.negative?"NOT "+ze.dump.parse(e.expected):ze.dump.parse(e.expected),s=ze.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+et(o)+"</pre></td></tr>",s!==o?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+et(s)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(u=!0,a=((a=e.actual-e.expected)>0?"+":"")+a):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(u=_(a=ze.diff(o,s)).length!==_(o).length+_(s).length),u&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+a+"</pre></td></tr>")):-1!==o.indexOf("[object Array]")||-1!==o.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+ze.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+et(C({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+et(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+et(e.source)+"</pre></td></tr></table>"),t=l.getElementsByTagName("ol")[0],(n=k.createElement("li")).className=e.result?"pass":"fail",n.innerHTML=i,t.appendChild(n))})),ze.testDone((function(r){var i,o,s,a,u,c,d,f,h,g=y("qunit-tests"),v=y("qunit-test-output-"+r.testId)
if(g&&v){b(v,"running"),a=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed",s=v.getElementsByTagName("ol")[0],u=r.passed,c=r.failed
var w=r.failed>0?r.todo:!r.todo
if(w?p(s,"qunit-collapsed"):(Xe.failedTests.push(r.testId),e.collapse&&(n?p(s,"qunit-collapsed"):n=!0)),d=c?"<b class='failed'>"+c+"</b>, <b class='passed'>"+u+"</b>, ":"",(i=v.firstChild).innerHTML+=" <b class='counts'>("+d+r.assertions.length+")</b>",Xe.completed++,r.skipped)v.className="skipped",(f=k.createElement("em")).className="qunit-skipped-label",f.innerHTML="skipped",v.insertBefore(f,i)
else{if(l(i,"click",(function(){m(s,"qunit-collapsed")})),v.className=w?"pass":"fail",r.todo){var x=k.createElement("em")
x.className="qunit-todo-label",x.innerHTML="todo",v.className+=" todo",v.insertBefore(x,i)}(o=k.createElement("span")).className="runtime",o.innerHTML=r.runtime+" ms",v.insertBefore(o,s)}r.source&&((h=k.createElement("p")).innerHTML="<strong>Source: </strong>"+et(r.source),p(h,"qunit-source"),w&&p(h,"qunit-collapsed"),l(i,"click",(function(){m(h,"qunit-collapsed")})),v.appendChild(h)),e.hidepassed&&("passed"===a||r.skipped)&&(t.push(v),g.removeChild(v))}})),ze.on("error",(function(e){var t=j("global failure")
if(t){var n=et(L(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+et(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],i=k.createElement("li")
i.className="fail",i.innerHTML=n,r.appendChild(i),t.className="fail"}}))
var o,s=(o=g.phantom)&&o.version&&o.version.major>0
s&&v.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),s||"complete"!==k.readyState?l(g,"load",ze.load):ze.load()
var a=g.onerror
g.onerror=function(t,n,r,i,o){var s=!1
if(a){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
s=a.call.apply(a,[this,t,n,r,i,o].concat(l))}if(!0!==s){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&n&&r&&(d.stack="".concat(n,":").concat(r)),ze.onUncaughtException(d)}return s},g.addEventListener("unhandledrejection",(function(e){ze.onUncaughtException(e.reason)}))}function u(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function l(e,t,n){e.addEventListener(t,n,!1)}function c(e,t,n){e.removeEventListener(t,n,!1)}function d(e,t,n){for(var r=e.length;r--;)l(e[r],t,n)}function h(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function p(e,t){h(e,t)||(e.className+=(e.className?" ":"")+t)}function m(e,t,n){n||void 0===n&&!h(e,t)?p(e,t):b(e,t)}function b(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=u(n)}function y(e){return k.getElementById&&k.getElementById(e)}function x(){var e=y("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),ze.config.queue.length=0,!1}function E(e){var t=y("qunit-filter-input")
return t.value=u(t.value),N(),e&&e.preventDefault&&e.preventDefault(),!1}function T(){var n,r,i,o=this,s={}
if(r="selectedIndex"in o?o.options[o.selectedIndex].value||void 0:o.checked?o.defaultValue||!0:void 0,s[o.name]=r,n=C(s),"hidepassed"===o.name&&"replaceState"in g.history){if(ze.urlParams[o.name]=r,e[o.name]=r||!1,i=y("qunit-tests")){var a=i.children.length,u=i.children
if(o.checked){for(var l=0;l<a;l++){var c=u[l],d=c?c.className:"",h=d.indexOf("pass")>-1,p=d.indexOf("skipped")>-1;(h||p)&&t.push(c)}var m,v=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=f(e))){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(t)
try{for(v.s();!(m=v.n()).done;){var b=m.value
i.removeChild(b)}}catch(e){v.e(e)}finally{v.f()}}else for(;null!=(c=t.pop());)i.appendChild(c)}g.history.replaceState(null,"",n)}else g.location=n}function C(e){var t,n,i,o="?",s=g.location
for(t in e=R(R({},ze.urlParams),e))if(r.call(e,t)&&void 0!==e[t])for(n=[].concat(e[t]),i=0;i<n.length;i++)o+=encodeURIComponent(t),!0!==n[i]&&(o+="="+encodeURIComponent(n[i])),o+="&"
return s.protocol+"//"+s.host+s.pathname+o.slice(0,-1)}function N(){var e,t=[],n=y("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),r=y("qunit-filter-input").value
for(e=0;e<n.length;e++)n[e].checked&&t.push(n[e].value)
g.location=C({filter:""===r?void 0:r,moduleId:0===t.length?void 0:t,module:void 0,testId:void 0})}function S(t){var n,r,i=""
for(n=0;n<t.length;n++)""!==t[n].name&&(i+="<li><label class='clickable"+((r=e.moduleId.indexOf(t[n].moduleId)>-1)?" checked":"")+"'><input type='checkbox' value='"+t[n].moduleId+"'"+(r?" checked='checked'":"")+" />"+et(t[n].name)+"</label></li>")
return i}function j(e,t,n){var r,i,o,s,a=y("qunit-tests")
if(a)return(r=k.createElement("strong")).innerHTML=M(e,n),(o=k.createElement("li")).appendChild(r),void 0!==t&&((i=k.createElement("a")).innerHTML="Rerun",i.href=C({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)),(s=k.createElement("ol")).className="qunit-assert-list",o.appendChild(s),a.appendChild(o),o}function q(e){return 0===e.length?"":["<br /><a href='"+et(C({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function M(e,t){var n=""
return t&&(n="<span class='module-name'>"+et(t)+"</span>: "),n+"<span class='test-name'>"+et(e)+"</span>"}function I(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function _(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),ze.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r,i,o,s,a,u
if(r=(new Date).getTime()+1e3,null===e||null===t)throw new Error("Null input. (DiffMain)")
return e===t?e?[[0,e]]:[]:(void 0===n&&(n=!0),i=n,o=this.diffCommonPrefix(e,t),s=e.substring(0,o),e=e.substring(o),t=t.substring(o),o=this.diffCommonSuffix(e,t),a=e.substring(e.length-o),e=e.substring(0,e.length-o),t=t.substring(0,t.length-o),u=this.diffCompute(e,t,i,r),s&&u.unshift([0,s]),a&&u.push([0,a]),this.diffCleanupMerge(u),u)},e.prototype.diffCleanupEfficiency=function(e){var n,r,i,o,s,a,u,l,c
for(n=!1,r=[],i=0,o=null,s=0,a=!1,u=!1,l=!1,c=!1;s<e.length;)0===e[s][0]?(e[s][1].length<4&&(l||c)?(r[i++]=s,a=l,u=c,o=e[s][1]):(i=0,o=null),l=c=!1):(e[s][0]===t?c=!0:l=!0,o&&(a&&u&&l&&c||o.length<2&&a+u+l+c===3)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,o=null,a&&u?(l=c=!0,i=0):(s=--i>0?r[i-1]:-1,l=c=!1),n=!0)),s++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){var n,r,i,o=[]
for(i=0;i<e.length;i++)switch(n=e[i][0],r=e[i][1],n){case 1:o[i]="<ins>"+et(r)+"</ins>"
break
case t:o[i]="<del>"+et(r)+"</del>"
break
case 0:o[i]="<span>"+et(r)+"</span>"}return o.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(o,n)===t.substring(o,n)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCompute=function(e,n,r,i){var o,s,a,u,l,c,d,f,h,p,g,m
return e?n?(s=e.length>n.length?e:n,a=e.length>n.length?n:e,-1!==(u=s.indexOf(a))?(o=[[1,s.substring(0,u)],[0,a],[1,s.substring(u+a.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===a.length?[[t,e],[1,n]]:(l=this.diffHalfMatch(e,n))?(c=l[0],f=l[1],d=l[2],h=l[3],p=l[4],g=this.DiffMain(c,d,r,i),m=this.DiffMain(f,h,r,i),g.concat([[0,p]],m)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,i):this.diffBisect(e,n,i)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,i,o,s,a,u,l,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function f(e,t,n){var r,o,s,a,u,l,c,d,f
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,s="";-1!==(o=t.indexOf(r,o+1));)a=i.diffCommonPrefix(e.substring(n),t.substring(o)),u=i.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),s.length<u+a&&(s=t.substring(o-u,o)+t.substring(o,o+a),l=e.substring(0,n-u),c=e.substring(n+a),d=t.substring(0,o-u),f=t.substring(o+a))
return 2*s.length>=e.length?[l,c,d,f,s]:null}return i=this,l=f(n,r,Math.ceil(n.length/4)),c=f(n,r,Math.ceil(n.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],u=d[1],a=d[2],s=d[3]):(a=d[0],s=d[1],o=d[2],u=d[3]),[o,u,a,s,d[4]]):null},e.prototype.diffLineMode=function(e,n,r){var i,o,s,a,u,l,c,d,f
for(e=(i=this.diffLinesToChars(e,n)).chars1,n=i.chars2,s=i.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,s),this.diffCleanupSemantic(o),o.push([0,""]),a=0,l=0,u=0,d="",c="";a<o.length;){switch(o[a][0]){case 1:u++,c+=o[a][1]
break
case t:l++,d+=o[a][1]
break
case 0:if(l>=1&&u>=1){for(o.splice(a-l-u,l+u),a=a-l-u,f=(i=this.DiffMain(d,c,!1,r)).length-1;f>=0;f--)o.splice(a,0,i[f])
a+=i.length}u=0,l=0,d="",c=""}a++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var i,o,s,a,u,l,c,d,f,h,p,g,m,v,b,y,k,w,x,E,T,C,N
for(i=e.length,o=n.length,a=s=Math.ceil((i+o)/2),u=2*s,l=new Array(u),c=new Array(u),d=0;d<u;d++)l[d]=-1,c[d]=-1
for(l[a+1]=0,c[a+1]=0,h=(f=i-o)%2!=0,p=0,g=0,m=0,v=0,T=0;T<s&&!((new Date).getTime()>r);T++){for(C=-T+p;C<=T-g;C+=2){for(y=a+C,x=(k=C===-T||C!==T&&l[y-1]<l[y+1]?l[y+1]:l[y-1]+1)-C;k<i&&x<o&&e.charAt(k)===n.charAt(x);)k++,x++
if(l[y]=k,k>i)g+=2
else if(x>o)p+=2
else if(h&&(b=a+f-C)>=0&&b<u&&-1!==c[b]&&k>=(w=i-c[b]))return this.diffBisectSplit(e,n,k,x,r)}for(N=-T+m;N<=T-v;N+=2){for(b=a+N,E=(w=N===-T||N!==T&&c[b-1]<c[b+1]?c[b+1]:c[b-1]+1)-N;w<i&&E<o&&e.charAt(i-w-1)===n.charAt(o-E-1);)w++,E++
if(c[b]=w,w>i)v+=2
else if(E>o)m+=2
else if(!h&&(y=a+f-N)>=0&&y<u&&-1!==l[y]&&(x=a+(k=l[y])-y,k>=(w=i-w)))return this.diffBisectSplit(e,n,k,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,i){var o,s,a,u,l,c
return o=e.substring(0,n),a=t.substring(0,r),s=e.substring(n),u=t.substring(r),l=this.DiffMain(o,a,!1,i),c=this.DiffMain(s,u,!1,i),l.concat(c)},e.prototype.diffCleanupSemantic=function(e){var n,r,i,o,s,a,u,l,c,d,f,h,p
for(n=!1,r=[],i=0,o=null,s=0,l=0,c=0,a=0,u=0;s<e.length;)0===e[s][0]?(r[i++]=s,l=a,c=u,a=0,u=0,o=e[s][1]):(1===e[s][0]?a+=e[s][1].length:u+=e[s][1].length,o&&o.length<=Math.max(l,c)&&o.length<=Math.max(a,u)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,s=--i>0?r[i-1]:-1,l=0,c=0,a=0,u=0,o=null,n=!0)),s++
for(n&&this.diffCleanupMerge(e),s=1;s<e.length;)e[s-1][0]===t&&1===e[s][0]&&(d=e[s-1][1],f=e[s][1],(h=this.diffCommonOverlap(d,f))>=(p=this.diffCommonOverlap(f,d))?(h>=d.length/2||h>=f.length/2)&&(e.splice(s,0,[0,f.substring(0,h)]),e[s-1][1]=d.substring(0,d.length-h),e[s+1][1]=f.substring(h),s++):(p>=d.length/2||p>=f.length/2)&&(e.splice(s,0,[0,d.substring(0,p)]),e[s-1][0]=1,e[s-1][1]=f.substring(0,f.length-p),e[s+1][0]=t,e[s+1][1]=d.substring(p),s++),s++),s++},e.prototype.diffCommonOverlap=function(e,t){var n,r,i,o,s,a,u
if(n=e.length,r=t.length,0===n||0===r)return 0
if(n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n)),i=Math.min(n,r),e===t)return i
for(o=0,s=1;;){if(a=e.substring(i-s),-1===(u=t.indexOf(a)))return o
s+=u,0!==u&&e.substring(i-s)!==t.substring(0,s)||(o=s,s++)}},e.prototype.diffLinesToChars=function(e,t){var r,i
function o(e){var t,o,s,a,u
for(t="",o=0,s=-1,a=r.length;s<e.length-1;)-1===(s=e.indexOf("\n",o))&&(s=e.length-1),u=e.substring(o,s+1),o=s+1,n.call(i,u)?t+=String.fromCharCode(i[u]):(t+=String.fromCharCode(a),i[u]=a,r[a++]=u)
return t}return i={},(r=[])[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){var n,r,i,o
for(n=0;n<e.length;n++){for(r=e[n][1],i=[],o=0;o<r.length;o++)i[o]=t[r.charCodeAt(o)]
e[n][1]=i.join("")}},e.prototype.diffCleanupMerge=function(e){var n,r,i,o,s,a,u,l
for(e.push([0,""]),n=0,r=0,i=0,s="",o="";n<e.length;)switch(e[n][0]){case 1:i++,o+=e[n][1],n++
break
case t:r++,s+=e[n][1],n++
break
case 0:r+i>1?(0!==r&&0!==i&&(0!==(a=this.diffCommonPrefix(o,s))&&(n-r-i>0&&0===e[n-r-i-1][0]?e[n-r-i-1][1]+=o.substring(0,a):(e.splice(0,0,[0,o.substring(0,a)]),n++),o=o.substring(a),s=s.substring(a)),0!==(a=this.diffCommonSuffix(o,s))&&(e[n][1]=o.substring(o.length-a)+e[n][1],o=o.substring(0,o.length-a),s=s.substring(0,s.length-a))),0===r?e.splice(n-i,r+i,[1,o]):0===i?e.splice(n-r,r+i,[t,s]):e.splice(n-r-i,r+i,[t,s],[1,o]),n=n-r-i+(r?1:0)+(i?1:0)+1):0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,i=0,r=0,s="",o=""}for(""===e[e.length-1][1]&&e.pop(),u=!1,n=1;n<e.length-1;)0===e[n-1][0]&&0===e[n+1][0]&&((l=e[n][1]).substring(l.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),u=!0):l.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),u=!0)),n++
u&&this.diffCleanupMerge(e)},function(t,n){var r,i
return i=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(i),r.diffPrettyHtml(i)}}()}()}}])
