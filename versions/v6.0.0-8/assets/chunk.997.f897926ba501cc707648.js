/*! For license information please see chunk.997.f897926ba501cc707648.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[997],{747:(e,t,r)=>{var n
e=r.nmd(e),function(){"use strict"
function a(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function u(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,u=[],s=!0,l=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
s=!1}else for(;!(s=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||p(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||p(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=typeof r)return r
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
return t&&null!==t.constructor?e.constructor:Object}function V(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var U={undefined:q,null:q,boolean:L,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:L,symbol:q,date:L,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&V(e)===V(t)},function:q,array:function(e,t){if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++)if(!$(e[r],t[r]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var r=!0
return e.forEach((function(e){if(r){var n=!1
t.forEach((function(t){if(!n){var r=j
j=[],$(t,e)&&(n=!0),j=r}})),n||(r=!1)}})),r},map:function(e,t){if(e.size!==t.size)return!1
var r=!0
return e.forEach((function(e,n){if(r){var a=!1
t.forEach((function(t,r){if(!a){var o=j
j=[],U.array([t,r],[e,n])&&(a=!0),j=o}})),a||(r=!1)}})),r}},H={undefined:q,null:q,boolean:q,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:q,symbol:q,function:q,object:function(e,t){if(j.some((function(r){return r.a===e&&r.b===t})))return!0
j.push({a:e,b:t})
var r=_(e),n=_(t)
if("object"!==r||"object"!==n)return r===n&&U[r](e,t)
if(!1===function(e,t){return z(e)===z(t)}(e,t))return!1
var a=[],o=[]
for(var i in e)if(a.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof t[i]||e[i].toString()!==t[i].toString())&&!$(e[i],t[i]))return!1
for(var u in t)o.push(u)
return U.array(a.sort(),o.sort())}}
function $(e,t){if(e===t)return!0
var r=d(e),n=d(t)
return r!==n?("object"===r&&P.has(_(e))?e.valueOf():e)===("object"===n&&P.has(_(t))?t.valueOf():t):H[r](e,t)}function G(e,t){var r=$(e,t)
return j=[],r}function W(e,t){if(2===arguments.length)return e===t||G(e,t)
for(var r=arguments.length-1;r>0;){if(!G(arguments[r-1],arguments[r]))return!1
r--}return!0}var Y={altertitle:!0,collapse:!0,countStepsAsOne:!1,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,reporters:{},requireExpects:!1,scrolltop:!0,storage:F,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},pq:null,_event_listeners:Object.create(null),_event_memory:{},_deprecated_timeout_shown:!1,_deprecated_countEachStep_shown:!1,blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}}
function Q(e,t){("boolean"==typeof e||"string"==typeof e&&""!==e)&&(Y[t]=!0===e||"true"===e)}function K(e,t){("number"==typeof e||"string"==typeof e&&/^[0-9]+$/.test(e))&&(Y[t]=+e)}function X(e,t){"string"==typeof e&&""!==e&&(Y[t]=e)}function Z(e,t){"string"==typeof e&&""!==e&&(Y[t]=[e])}function J(e){Q(e.qunit_config_altertitle,"altertitle"),Q(e.qunit_config_autostart,"autostart"),Q(e.qunit_config_collapse,"collapse"),Q(e.qunit_config_failonzerotests,"failOnZeroTests"),X(e.qunit_config_filter,"filter"),X(e.qunit_config_fixture,"fixture"),Q(e.qunit_config_hidepassed,"hidepassed"),K(e.qunit_config_maxdepth,"maxDepth"),X(e.qunit_config_module,"module"),Z(e.qunit_config_moduleid,"moduleId"),Q(e.qunit_config_noglobals,"noglobals"),Q(e.qunit_config_notrycatch,"notrycatch"),Q(e.qunit_config_reorder,"reorder"),Q(e.qunit_config_requireexpects,"requireExpects"),Q(e.qunit_config_scrolltop,"scrolltop"),function(e){("boolean"==typeof e||"string"==typeof e&&""!==e)&&(Y.seed=e)}(e.qunit_config_seed),Z(e.qunit_config_testid,"testId"),K(e.qunit_config_testtimeout,"testTimeout")
var t={qunit_config_reporters_console:"console",qunit_config_reporters_tap:"tap"}
for(var r in t){var n=e[r]
if("boolean"==typeof n||"string"==typeof n&&""!==n){var a=t[r]
Y.reporters[a]=!0===n||"true"===n||"1"===n}}}g&&"env"in g&&J(g.env),J(f)
var ee=f&&f.QUnit&&!f.QUnit.version&&f.QUnit.config
ee&&R(Y,ee),Y.modules.push(Y.currentModule),"true"!==Y.seed&&!0!==Y.seed||(Y.seed=(Math.random().toString(36)+"0000000000").slice(2,12))
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
se(e,t,r,{ignored:a})}ce.only=function(){le||(Y.modules.length=0,Y.queue.length=0,Y.currentModule.ignored=!0),le=!0,se.apply(void 0,arguments)},ce.skip=function(e,t,r){le||se(e,t,r,{skip:!0})},ce.if=function(e,t,r,n){le||se(e,r,n,{skip:!t})},ce.todo=function(e,t,r){le||se(e,t,r,{todo:!0})}
var de=function(){var e=new Error
if(!e.stack)try{throw e}catch(t){e=t}return(e.stack||"").replace(/^error$\n/im,"").split("\n")[0].replace(/(:\d+)+\)?/g,"").replace(/.+[/\\]/,"")}()
function pe(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e.split("\n"),a=[]
r&&-1!==r.indexOf(n[0])&&a.push(n.shift())
for(var o=!0,i=0;i<n.length;i++){var u=n[i],s=de&&-1!==u.indexOf(de)||-1!==u.indexOf("node:internal/")||u.match(/^\s+at .+\(internal[^)]*\)$/)||u.match(/^\s+at .+\([a-z]+\.js[:\d]*\)$/)
s||(o=!1),o||a.push(s?t(u):u)}return a.join("\n")}function fe(e,t){if(t=void 0===t?4:t,e&&e.stack){var r=e.stack.split("\n")
if(/^error$/i.test(r[0])&&r.shift(),de){for(var n=[],a=t;a<r.length&&-1===r[a].indexOf(de);a++)n.push(r[a])
if(n.length)return n.join("\n")}return r[t]}}function he(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return fe(t,e)}var me=function(){function e(t){o(this,e),this.test=t}return u(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,Y.timeout&&(D(Y.timeout),Y.timeout=null,Y.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,r=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",r=!1),this.pushResult({result:r,message:t})}},{key:"verifySteps",value:function(e,t){var r=this.test.steps.slice()
this.deepEqual(r,e,t),this.test.stepsCount+=this.test.steps.length,this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){if(void 0===e)e=1
else if("number"!=typeof e)throw new TypeError("async takes number as an input")
var t=e
return this.test.internalStop(t)}},{key:"closeTo",value:function(e,t,r,n){if("number"!=typeof r)throw new TypeError("closeTo() requires a delta argument")
this.pushResult({result:Math.abs(e-t)<=r,actual:e,expected:t,message:n||"value should be within ".concat(r," inclusive")})}},{key:"push",value:function(t,r,n,a,o){return(this instanceof e?this:Y.current.assert).pushResult({result:t,actual:r,expected:n,message:a,negative:o})}},{key:"pushResult",value:function(t){var r=this,n=r instanceof e&&r.test||Y.current
if(!n)throw new Error("assertion outside test context, in "+he(2))
return r instanceof e||(r=n.assert),r.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(te.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(te.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,r){this.pushResult({result:t==e,actual:e,expected:t,message:r})}},{key:"notEqual",value:function(e,t,r){this.pushResult({result:t!=e,actual:e,expected:t,message:r,negative:!0})}},{key:"propEqual",value:function(e,t,r){e=T(e),t=T(t),this.pushResult({result:W(e,t),actual:e,expected:t,message:r})}},{key:"notPropEqual",value:function(e,t,r){e=T(e),t=T(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:r,negative:!0})}},{key:"propContains",value:function(e,t,r){e=B(e,t),t=T(t,!1),this.pushResult({result:W(e,t),actual:e,expected:t,message:r})}},{key:"notPropContains",value:function(e,t,r){e=B(e,t),t=T(t),this.pushResult({result:!W(e,t),actual:e,expected:t,message:r,negative:!0})}},{key:"deepEqual",value:function(e,t,r){this.pushResult({result:W(e,t),actual:e,expected:t,message:r})}},{key:"notDeepEqual",value:function(e,t,r){this.pushResult({result:!W(e,t),actual:e,expected:t,message:r,negative:!0})}},{key:"strictEqual",value:function(e,t,r){this.pushResult({result:t===e,actual:e,expected:t,message:r})}},{key:"notStrictEqual",value:function(e,t,r){this.pushResult({result:t!==e,actual:e,expected:t,message:r,negative:!0})}},{key:"throws",value:function(t,r,n){var a=s(De(r,n,"throws"),2)
r=a[0],n=a[1]
var o=this instanceof e&&this.test||Y.current
if("function"==typeof t){var i,u=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=s(ge(i,r,n),3)
u=l[0],r=l[1],n=l[2]}o.assert.pushResult({result:u,actual:i&&M(i),expected:r,message:n})}else o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,r,n){var a=s(De(r,n,"rejects"),2)
r=a[0],n=a[1]
var o=this instanceof e&&this.test||Y.current,i=t&&t.then
if("function"==typeof i){var u=this.async()
return i.call(t,(function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),u()}),(function(e){var t,a=s(ge(e,r,n),3)
t=a[0],r=a[1],n=a[2],o.assert.pushResult({result:t,actual:e&&M(e),expected:r,message:n}),u()}))}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}])}()
function De(e,t,r){var n=_(e)
if("string"===n){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+r+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==n&&"function"!==n&&"object"!==n)throw new Error("Invalid expected value type ("+n+") provided to assert."+r+".")
return[e,t]}function ge(e,t,r){var n=!1,a=_(t)
if(t){if("regexp"===a)n=t.test(M(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)n=!0
else if("object"===a)n=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=M(t)
else if("function"===a)try{n=!0===t.call({},e),t=null}catch(e){t=M(e)}}else n=!0
return[n,t,r]}me.prototype.raises=me.prototype.throws
var ve=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"],be=["error","runEnd"]
function ye(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var r=Y._event_listeners[e],n=r?l(r):[],a=0;a<n.length;a++)n[a](t)
N(e,be)&&(Y._event_memory[e]=t)}var Fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function we(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ee={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==Fe)return Fe
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
o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},Ee.exports=o}else Ee.exports=e.Promise
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
var Ce=Ee.exports
function xe(e,t){var r=Y.callbacks[e]
if("log"!==e){var n=Ce.resolve()
return r.forEach((function(e){n=n.then((function(){return Ce.resolve(e(t))}))})),n}r.map((function(e){return e(t)}))}var Ae=u((function e(t,r,n){o(this,e),this.name=t,this.suiteName=r.name,this.fullName=r.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!n.skip,this.todo=!!n.todo,this.valid=n.valid,this._startTime=0,this._endTime=0,r.pushTest(this)}),[{key:"start",value:function(e){return e&&(this._startTime=A.now()),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){return e&&(this._endTime=A.now()),R(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}])
function ke(e){if(this.expected=null,this.assertions=[],this.module=Y.currentModule,this.steps=[],this.stepsCount=0,this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new w,this.nextPauseId=1,this.stackOffset=3,R(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),Y.pq.finished)re.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var r=0,n=this.module.tests;r<n.length;r++)this.module.tests[r].name===this.testName&&(this.testName+=" ")
this.testId=O(this.module.name,this.testName),++ke.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new Ae(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new me(this)}}function Ne(){if(!Y.current)throw new Error("pushFailure() assertion outside test context, in "+he(2))
var e=Y.current
return e.pushFailure.apply(e,arguments)}function Te(){if(Y.pollution=[],Y.noglobals)for(var e in f)if(x.call(f,e)){if(/^qunit-test-output/.test(e))continue
Y.pollution.push(e)}}ke.count=0,ke.prototype={get stack(){return fe(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,r=function(e){for(var t=e,r=[];t&&0===t.testsRun;)r.push(t),t=t.parentModule
return r.reverse()}(t),n=Ce.resolve()
return r.forEach((function(e){n=n.then((function(){return e.stats={all:0,bad:0,started:A.now()},ye("suiteStart",e.suiteReport.start(!0)),xe("moduleStart",{name:e.name,tests:e.tests})}))})),n.then((function(){return Y.current=e,e.testEnvironment=R({},t.testEnvironment),e.started=A.now(),ye("testStart",e.testReport.start(!0)),xe("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){Y.pollution||Te()}))}))},run:function(){if(Y.current=this,Y.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,fe(e,0)),Te(),Y.blocking&&Pe(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&Ne("Test did not finish synchronously even though assert.timeout( 0 ) was used.",he(2))}},after:function(){!function(){var e=Y.pollution
Te()
var t=k(Y.pollution,e)
t.length>0&&Ne("Introduced global variable(s): "+t.join(", "))
var r=k(e,Y.pollution)
r.length>0&&Ne("Deleted global variable(s): "+r.join(", "))}()},queueGlobalHook:function(e,t){var r=this
return function(){var n
if(Y.current=r,Y.notrycatch)n=e.call(r.testEnvironment,r.assert)
else try{n=e.call(r.testEnvironment,r.assert)}catch(e){return void r.pushFailure("Global "+t+" failed on "+r.testName+": "+M(e),fe(e,0))}r.resolvePromise(n,t)}},queueHook:function(e,t,r){var n=this,a=function(){var r=e.call(n.testEnvironment,n.assert)
n.resolvePromise(r,t)}
return function(){if("before"===t){if(0!==r.testsRun)return
n.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===qe(e).filter((function(e){return!e.skip})).length-1}(r)||!(Y.queue.length>0||Y.pq.taskCount()>2))if(Y.current=n,Y.notrycatch)a()
else try{a()}catch(e){n.pushFailure(t+" failed on "+n.testName+": "+(e.message||e),fe(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(r){if(("beforeEach"===e||"afterEach"===e)&&Y.globalHooks[e])for(var n=0;n<Y.globalHooks[e].length;n++)t.push(r.queueGlobalHook(Y.globalHooks[e][n],e))}(this),function r(n,a){if(a.parentModule&&r(n,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(n.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(Y.current=this,m&&(D(this.timeout),Y.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}Y._deprecated_countEachStep_shown||Y.countStepsAsOne||null===this.expected||!this.stepsCount||(Y._deprecated_countEachStep_shown=!0,Y.requireExpects?re.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. You can enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/"):re.warn("Counting each assert.step() for assert.expect() is changing in QUnit 3.0. Omit assert.expect() from tests that use assert.step(), or enable QUnit.config.countStepsAsOne to prepare for the upgrade. https://qunitjs.com/api/assert/expect/"))
var t=Y.countStepsAsOne?this.assertions.length-this.stepsCount:this.assertions.length
Y.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==t&&this.stepsCount&&this.expected===this.assertions.length-this.stepsCount&&!Y.countStepsAsOne?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run\nIt looks like you might prefer to enable QUnit.config.countStepsAsOne, which will become the default in QUnit 3.0. https://qunitjs.com/api/assert/expect/",this.stack):null!==this.expected&&this.expected!==t&&this.stepsCount&&this.expected===this.assertions.length&&Y.countStepsAsOne?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run\nRemember that with QUnit.config.countStepsAsOne and in QUnit 3.0, steps no longer count as separate assertions. https://qunitjs.com/api/assert/expect/",this.stack):null!==this.expected&&this.expected!==t?this.pushFailure("Expected "+this.expected+" assertions, but "+t+" were run",this.stack):null!==this.expected||t||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var r=this.module,n=r.name,a=this.testName,o=!!this.skip,i=!!this.todo,u=0,s=Y.storage
this.runtime=Math.round(A.now()-this.started),Y.stats.all+=this.assertions.length,Y.stats.testCount+=1,r.stats.all+=this.assertions.length
for(var c=0;c<this.assertions.length;c++)this.assertions[c].result||(u++,Y.stats.bad++,r.stats.bad++)
o?ze(r):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(r),s&&(u?s.setItem("qunit-test-"+n+"-"+a,u):s.removeItem("qunit-test-"+n+"-"+a)),ye("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var d=this
return xe("testDone",{name:a,module:n,skipped:o,todo:i,failed:u,passed:this.assertions.length-u,total:this.assertions.length,runtime:o?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return d.stack}}).then((function(){if(Le(r)){for(var e=[r],t=r.parentModule;t&&Le(t);)e.push(t),t=t.parentModule
var n=Ce.resolve()
return e.forEach((function(e){n=n.then((function(){return function(e){for(var t=[e];t.length;){var r=t.shift()
r.hooks={},t.push.apply(t,l(r.childModules))}return ye("suiteEnd",e.suiteReport.end(!0)),xe("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(A.now()-e.stats.started)})}(e)}))})),n}})).then((function(){Y.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=R({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=Y.storage&&+Y.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),r=Y.reorder&&!!t
this.previousFailure=!!t,Y.pq.add((function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),r)}else ze(this.module)},pushResult:function(e){if(this!==Y.current){var t=e&&e.message||"",r=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+r+"\n> Message: "+t+"\n")}var n={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(A.now()-this.started),todo:!!this.todo}
if(x.call(e,"expected")&&(n.expected=e.expected),!e.result){var a=e.source||he()
a&&(n.source=a)}this.logAssertion(n),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t){if(!(this instanceof ke))throw new Error("pushFailure() assertion outside test context, was "+he(2))
this.pushResult({result:!1,message:e||"error",source:t})},logAssertion:function(e){xe("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),ye("assertion",t)},internalResetTimeout:function(e){D(Y.timeout),Y.timeout=m(Y.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
Y.blocking=!0
var t,r=this,n=this.nextPauseId++,a={cancelled:!1,remaining:e}
return r.pauses.set(n,a),m&&("number"==typeof r.timeout?t=r.timeout:"number"==typeof Y.testTimeout&&(t=Y.testTimeout),"number"==typeof t&&t>0?(Y.timeoutHandler=function(e){return function(){Y.timeout=null,a.cancelled=!0,r.pauses.delete(n),r.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),he(2)),Pe(r)}},D(Y.timeout),Y.timeout=m(Y.timeoutHandler(t),t)):(D(Y.timeout),Y.timeout=m((function(){Y.timeout=null,Y._deprecated_timeout_shown||(Y._deprecated_timeout_shown=!0,re.warn('Test "'.concat(r.testName,'" took longer than 3000ms, but no timeout was set. Set QUnit.config.testTimeout or call assert.timeout() to avoid a timeout in QUnit 3. https://qunitjs.com/api/config/testTimeout/')))}),3e3))),function(){if(!a.cancelled){if(void 0===Y.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(r.testName," [async #").concat(n,"]"))
if(Y.current!==r)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(r.testName," [async #").concat(n,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(r.testName," [async #").concat(n,"]"))
a.remaining--,0===a.remaining&&r.pauses.delete(n),je(r)}}},resolvePromise:function(e,t){if(null!=e){var r=this,n=e.then
if("function"==typeof n){var a=r.internalStop(),o=function(){a()}
Y.notrycatch?n.call(e,o):n.call(e,o,(function(e){var n="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+r.testName+'": '+(e&&e.message||e)
r.pushFailure(n,fe(e,0)),Te(),Pe(r)}))}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
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
var Be=!1
function Re(e){Be||Y.currentModule.ignored||new ke(e).queue()}function _e(e){Y.currentModule.ignored||(Be||(Y.queue.length=0,Be=!0),new ke(e).queue())}function Se(e,t){Re({testName:e,callback:t})}function Oe(e,t){return"".concat(e," [").concat(t,"]")}var Me=/[\x00-\x1F\x7F\xA0]/
function Ie(e,t){if(Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r],a=d(n),o=r
if("string"===a&&n.length<=40&&!Me.test(n)&&!/\s*\d+: /.test(n))o=n
else if("string"===a||"number"===a||"boolean"===a||"undefined"===a||null===n){var i=String(n)
Me.test(i)||(o=r+": "+(i.length<=30?i:i.slice(0,29)+"…"))}t(n,o)}else{if("object"!==d(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(d(e)," instead."))
for(var u in e)t(e[u],u)}}function Pe(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),je(e)}function je(e){e.pauses.size>0||(m?(D(Y.timeout),Y.timeout=m((function(){e.pauses.size>0||(D(Y.timeout),Y.timeout=null,Y.blocking=!1,Y.pq.advance())}))):(Y.blocking=!1,Y.pq.advance()))}function qe(e){for(var t=[].concat(e.tests),r=l(e.childModules);r.length;){var n=r.shift()
t.push.apply(t,n.tests),r.push.apply(r,l(n.childModules))}return t}function Le(e){return e.testsRun+e.testsIgnored===qe(e).length}function ze(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}R(Se,{todo:function(e,t){Re({testName:e,callback:t,todo:!0})},skip:function(e){Re({testName:e,skip:!0})},if:function(e,t,r){Re({testName:e,callback:r,skip:!t})},only:function(e,t){_e({testName:e,callback:t})},each:function(e,t,r){Ie(t,(function(t,n){Re({testName:Oe(e,n),callback:r,withData:!0,stackOffset:5,data:t})}))}}),Se.todo.each=function(e,t,r){Ie(t,(function(t,n){Re({testName:Oe(e,n),callback:r,todo:!0,withData:!0,stackOffset:5,data:t})}))},Se.skip.each=function(e,t){Ie(t,(function(t,r){Re({testName:Oe(e,r),stackOffset:5,skip:!0})}))},Se.if.each=function(e,t,r,n){Ie(r,(function(r,a){Re({testName:Oe(e,a),callback:n,withData:!0,stackOffset:5,skip:!t,data:t?r:void 0})}))},Se.only.each=function(e,t,r){Ie(t,(function(t,n){_e({testName:Oe(e,n),callback:r,withData:!0,stackOffset:5,data:t})}))}
var Ve,Ue,He,$e,Ge=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=r.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,r){return new e(t,r)}}])}(),We=v&&void 0!==v.performance&&"function"==typeof v.performance.mark&&"function"==typeof v.performance.measure?v.performance:void 0,Ye={measure:We?function(e,t,r){try{We.measure(e,t,r)}catch(e){re.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:We?We.mark.bind(We):function(){}},Qe=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.perf=r.perf||Ye,t.on("runStart",this.onRunStart.bind(this)),t.on("runEnd",this.onRunEnd.bind(this)),t.on("suiteStart",this.onSuiteStart.bind(this)),t.on("suiteEnd",this.onSuiteEnd.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(){this.perf.mark("qunit_suite_0_start")}},{key:"onSuiteStart",value:function(e){var t=e.fullName.length
this.perf.mark("qunit_suite_".concat(t,"_start"))}},{key:"onSuiteEnd",value:function(e){var t=e.fullName.length,r=e.fullName.join(" – ")
this.perf.mark("qunit_suite_".concat(t,"_end")),this.perf.measure("QUnit Test Suite: ".concat(r),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}},{key:"onTestStart",value:function(){this.perf.mark("qunit_test_start")}},{key:"onTestEnd",value:function(e){this.perf.mark("qunit_test_end")
var t=e.fullName.join(" – ")
this.perf.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}},{key:"onRunEnd",value:function(){this.perf.mark("qunit_suite_0_end"),this.perf.measure("QUnit Test Run","qunit_suite_0_start","qunit_suite_0_end")}}],[{key:"init",value:function(t,r){return new e(t,r)}}])}(),Ke=!0
if("undefined"!=typeof process){var Xe=process.env||{}
Ve=Xe.FORCE_COLOR,Ue=Xe.NODE_DISABLE_COLORS,He=Xe.NO_COLOR,$e=Xe.TERM,Ke=process.stdout&&process.stdout.isTTY}var Ze={enabled:!Ue&&null==He&&"dumb"!==$e&&(null!=Ve&&"0"!==Ve||Ke),reset:et(0,0),bold:et(1,22),dim:et(2,22),italic:et(3,23),underline:et(4,24),inverse:et(7,27),hidden:et(8,28),strikethrough:et(9,29),black:et(30,39),red:et(31,39),green:et(32,39),yellow:et(33,39),blue:et(34,39),magenta:et(35,39),cyan:et(36,39),white:et(37,39),gray:et(90,39),grey:et(90,39),bgBlack:et(40,49),bgRed:et(41,49),bgGreen:et(42,49),bgYellow:et(43,49),bgBlue:et(44,49),bgMagenta:et(45,49),bgCyan:et(46,49),bgWhite:et(47,49)}
function Je(e,t){for(var r,n=0,a="",o="";n<e.length;n++)a+=(r=e[n]).open,o+=r.close,~t.indexOf(r.close)&&(t=t.replace(r.rgx,r.close+r.open))
return a+t+o}function et(e,t){var r={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(r)),void 0===t?this:Ze.enabled?Je(this.keys,t+""):t+""):void 0===t?((n={has:[e],keys:[r]}).reset=Ze.reset.bind(n),n.bold=Ze.bold.bind(n),n.dim=Ze.dim.bind(n),n.italic=Ze.italic.bind(n),n.underline=Ze.underline.bind(n),n.inverse=Ze.inverse.bind(n),n.hidden=Ze.hidden.bind(n),n.strikethrough=Ze.strikethrough.bind(n),n.black=Ze.black.bind(n),n.red=Ze.red.bind(n),n.green=Ze.green.bind(n),n.yellow=Ze.yellow.bind(n),n.blue=Ze.blue.bind(n),n.magenta=Ze.magenta.bind(n),n.cyan=Ze.cyan.bind(n),n.white=Ze.white.bind(n),n.gray=Ze.gray.bind(n),n.grey=Ze.grey.bind(n),n.bgBlack=Ze.bgBlack.bind(n),n.bgRed=Ze.bgRed.bind(n),n.bgGreen=Ze.bgGreen.bind(n),n.bgYellow=Ze.bgYellow.bind(n),n.bgBlue=Ze.bgBlue.bind(n),n.bgMagenta=Ze.bgMagenta.bind(n),n.bgCyan=Ze.bgCyan.bind(n),n.bgWhite=Ze.bgWhite.bind(n),n):Ze.enabled?Je([r],t+""):t+""
var n}}function tt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var r=new Array(2*t+1).join(" "),n=e.match(/\n+$/)
return 1===(n?n[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map((function(e){return r+e})).join("\n"):"|+\n"+e.split("\n").map((function(e){return r+e})).join("\n")}return e}var a=new Array(t+1).join(" ")
return JSON.stringify(rt(e),null,2).split("\n").map((function(e,t){return 0===t?e:a+e})).join("\n")}function rt(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==r.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":r.push(e),t=e.map((function(e){return rt(e,r)})),r.pop()
break
case"object":r.push(e),t={},Object.keys(e).forEach((function(n){t[n]=rt(e[n],r)})),r.pop()
break
default:t=e}return t}var nt=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=r.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.started=!1,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(e){this.started||(this.log("TAP version 13"),this.started=!0)}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.onRunStart(),this.testCount=this.testCount+1,this.log("not ok ".concat(this.testCount," ").concat(Ze.red("global failure"))),this.logError(e)),this.log("Bail out! "+M(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log("ok ".concat(this.testCount," ").concat(Ze.yellow(e.fullName.join(" > "))," # SKIP")):"todo"===e.status?(this.log("not ok ".concat(this.testCount," ").concat(Ze.cyan(e.fullName.join(" > "))," # TODO")),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log("not ok ".concat(this.testCount," ").concat(Ze.red(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log("# ".concat(Ze.yellow("skip ".concat(e.testCounts.skipped)))),this.log("# ".concat(Ze.cyan("todo ".concat(e.testCounts.todo)))),this.log("# ".concat(Ze.red("fail ".concat(e.testCounts.failed))))}},{key:"logAssertion",value:function(e,t){var r="  ---"
if(r+="\n  message: ".concat(tt(e.message||"failed")),r+="\n  severity: ".concat(tt(t||"failed")),(void 0!==e.expected||void 0!==e.actual)&&(r+="\n  actual  : ".concat(tt(e.actual)),r+="\n  expected: ".concat(tt(e.expected))),e.stack){var n=pe(e.stack,Ze.grey)
n.length&&(r+="\n  stack: ".concat(tt(n+"\n")))}r+="\n  ...",this.log(r)}},{key:"logError",value:function(e){var t="  ---"
if(t+="\n  message: ".concat(tt(M(e))),t+="\n  severity: ".concat(tt("failed")),e&&e.stack){var r=pe(e.stack,Ze.grey,e.toString())
r.length&&(t+="\n  stack: ".concat(tt(r+"\n")))}t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,r){return new e(t,r)}}])}(),at={console:Ge,perf:Qe,tap:nt}
function ot(e){return function(t){Y.globalHooks[e]||(Y.globalHooks[e]=[]),Y.globalHooks[e].push(t)}}var it={beforeEach:ot("beforeEach"),afterEach:ot("afterEach")},ut=u((function e(t){o(this,e),this.test=t,this.priorityCount=0,this.unitSampler=null,this.taskQueue=[],this.finished=!1}),[{key:"advance",value:function(){this.advanceTaskQueue(),this.taskQueue.length||Y.blocking||Y.current||this.advanceTestQueue()}},{key:"advanceTaskQueue",value:function(){var e=A.now()
Y.depth=(Y.depth||0)+1,this.processTaskQueue(e),Y.depth--}},{key:"processTaskQueue",value:function(e){var t=this
if(this.taskQueue.length&&!Y.blocking){var r=A.now()-e
if(!m||Y.updateRate<=0||r<Y.updateRate){var n=this.taskQueue.shift()
Ce.resolve(n()).then((function(){t.taskQueue.length?t.processTaskQueue(e):t.advance()}))}else m((function(){t.advance()}))}}},{key:"advanceTestQueue",value:function(){if(Y.blocking||Y.queue.length||0!==Y.depth){var e=Y.queue.shift()
this.addToTaskQueue(e()),this.priorityCount>0&&this.priorityCount--,this.advance()}else this.done()}},{key:"addToTaskQueue",value:function(e){var t;(t=this.taskQueue).push.apply(t,l(e))}},{key:"taskCount",value:function(){return this.taskQueue.length}},{key:"add",value:function(e,t){if(t)Y.queue.splice(this.priorityCount++,0,e)
else if(Y.seed){this.unitSampler||(this.unitSampler=(n=Y.seed,a=parseInt(O(n),16)||-1,function(){return a^=a<<13,a^=a>>>17,(a^=a<<5)<0&&(a+=4294967296),a/4294967296}))
var r=Math.floor(this.unitSampler()*(Y.queue.length-this.priorityCount+1))
Y.queue.splice(this.priorityCount+r,0,e)}else Y.queue.push(e)
var n,a}},{key:"done",value:function(){var e
if(0===Y.stats.testCount&&!0===Y.failOnZeroTests)return e=Y.filter&&Y.filter.length?new Error('No tests matched the filter "'.concat(Y.filter,'".')):Y.module&&Y.module.length?new Error('No tests matched the module "'.concat(Y.module,'".')):Y.moduleId&&Y.moduleId.length?new Error('No tests matched the moduleId "'.concat(Y.moduleId,'".')):Y.testId&&Y.testId.length?new Error('No tests matched the testId "'.concat(Y.testId,'".')):new Error("No tests were run."),this.test("global failure",R((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void this.advance()
var t=Y.storage,r=Math.round(A.now()-Y.started),n=Y.stats.all-Y.stats.bad
this.finished=!0,ye("runEnd",oe.end(!0)),xe("done",{passed:n,failed:Y.stats.bad,total:Y.stats.all,runtime:r}).then((function(){if(t&&0===Y.stats.bad)for(var e=t.length-1;e>=0;e--){var r=t.key(e)
0===r.indexOf("qunit-test-")&&t.removeItem(r)}}))}}])
function st(e){Y.current?Y.current.assert.pushResult({result:!1,message:"global failure: ".concat(M(e)),source:e&&e.stack||he(2)}):(oe.globalFailureCount++,Y.stats.bad++,Y.stats.all++,ye("error",e))}function lt(){}var ct=-1,dt=Object.prototype.hasOwnProperty
lt.prototype.DiffMain=function(e,t,r){var n=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===r&&(r=!0)
var a=this.diffCommonPrefix(e,t),o=e.substring(0,a)
e=e.substring(a),t=t.substring(a),a=this.diffCommonSuffix(e,t)
var i=e.substring(e.length-a)
e=e.substring(0,e.length-a),t=t.substring(0,t.length-a)
var u=this.diffCompute(e,t,r,n)
return o&&u.unshift([0,o]),i&&u.push([0,i]),this.diffCleanupMerge(u),u},lt.prototype.diffCleanupEfficiency=function(e){var t,r,n,a,o,i,u,s,l
for(t=!1,r=[],n=0,a=null,o=0,i=!1,u=!1,s=!1,l=!1;o<e.length;)0===e[o][0]?(e[o][1].length<4&&(s||l)?(r[n++]=o,i=s,u=l,a=e[o][1]):(n=0,a=null),s=l=!1):(e[o][0]===ct?l=!0:s=!0,a&&(i&&u&&s&&l||a.length<2&&i+u+s+l===3)&&(e.splice(r[n-1],0,[ct,a]),e[r[n-1]+1][0]=1,n--,a=null,i&&u?(s=l=!0,n=0):(o=--n>0?r[n-1]:-1,s=l=!1),t=!0)),o++
t&&this.diffCleanupMerge(e)},lt.prototype.diffPrettyHtml=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r][0],a=e[r][1]
switch(n){case 1:t[r]="<ins>"+I(a)+"</ins>"
break
case ct:t[r]="<del>"+I(a)+"</del>"
break
case 0:t[r]="<span>"+I(a)+"</span>"}}return t.join("")},lt.prototype.diffCommonPrefix=function(e,t){var r,n,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,r=n=Math.min(e.length,t.length),o=0;a<r;)e.substring(o,r)===t.substring(o,r)?o=a=r:n=r,r=Math.floor((n-a)/2+a)
return r},lt.prototype.diffCommonSuffix=function(e,t){var r,n,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,r=n=Math.min(e.length,t.length),o=0;a<r;)e.substring(e.length-r,e.length-o)===t.substring(t.length-r,t.length-o)?o=a=r:n=r,r=Math.floor((n-a)/2+a)
return r},lt.prototype.diffCompute=function(e,t,r,n){var a,o,i,u,s,l,c,d,p,f,h,m
return e?t?(o=e.length>t.length?e:t,i=e.length>t.length?t:e,-1!==(u=o.indexOf(i))?(a=[[1,o.substring(0,u)],[0,i],[1,o.substring(u+i.length)]],e.length>t.length&&(a[0][0]=a[2][0]=ct),a):1===i.length?[[ct,e],[1,t]]:(s=this.diffHalfMatch(e,t))?(l=s[0],d=s[1],c=s[2],p=s[3],f=s[4],h=this.DiffMain(l,c,r,n),m=this.DiffMain(d,p,r,n),h.concat([[0,f]],m)):r&&e.length>100&&t.length>100?this.diffLineMode(e,t,n):this.diffBisect(e,t,n)):[[ct,e]]:[[1,t]]},lt.prototype.diffHalfMatch=function(e,t){var r,n,a,o,i,u,s,l,c,d
if(r=e.length>t.length?e:t,n=e.length>t.length?t:e,r.length<4||2*n.length<r.length)return null
function p(e,t,r){var n,o,i,u,s,l,c,d,p
for(n=e.substring(r,r+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(n,o+1));)u=a.diffCommonPrefix(e.substring(r),t.substring(o)),s=a.diffCommonSuffix(e.substring(0,r),t.substring(0,o)),i.length<s+u&&(i=t.substring(o-s,o)+t.substring(o,o+u),l=e.substring(0,r-s),c=e.substring(r+u),d=t.substring(0,o-s),p=t.substring(o+u))
return 2*i.length>=e.length?[l,c,d,p,i]:null}return a=this,l=p(r,n,Math.ceil(r.length/4)),c=p(r,n,Math.ceil(r.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],s=d[1],u=d[2],i=d[3]):(u=d[0],i=d[1],o=d[2],s=d[3]),[o,s,u,i,d[4]]):null},lt.prototype.diffLineMode=function(e,t,r){var n,a,o,i,u,s,l,c,d
for(e=(n=this.diffLinesToChars(e,t)).chars1,t=n.chars2,o=n.lineArray,a=this.DiffMain(e,t,!1,r),this.diffCharsToLines(a,o),this.diffCleanupSemantic(a),a.push([0,""]),i=0,s=0,u=0,c="",l="";i<a.length;){switch(a[i][0]){case 1:u++,l+=a[i][1]
break
case ct:s++,c+=a[i][1]
break
case 0:if(s>=1&&u>=1){for(a.splice(i-s-u,s+u),i=i-s-u,d=(n=this.DiffMain(c,l,!1,r)).length-1;d>=0;d--)a.splice(i,0,n[d])
i+=n.length}u=0,s=0,c="",l=""}i++}return a.pop(),a},lt.prototype.diffBisect=function(e,t,r){var n,a,o,i,u,s,l,c,d,p,f,h,m,D,g,v,b,y,F,w,E,C,x
for(n=e.length,a=t.length,i=o=Math.ceil((n+a)/2),u=2*o,s=new Array(u),l=new Array(u),c=0;c<u;c++)s[c]=-1,l[c]=-1
for(s[i+1]=0,l[i+1]=0,p=(d=n-a)%2!=0,f=0,h=0,m=0,D=0,E=0;E<o&&!(Date.now()>r);E++){for(C=-E+f;C<=E-h;C+=2){for(v=i+C,F=(b=C===-E||C!==E&&s[v-1]<s[v+1]?s[v+1]:s[v-1]+1)-C;b<n&&F<a&&e.charAt(b)===t.charAt(F);)b++,F++
if(s[v]=b,b>n)h+=2
else if(F>a)f+=2
else if(p&&(g=i+d-C)>=0&&g<u&&-1!==l[g]&&b>=(y=n-l[g]))return this.diffBisectSplit(e,t,b,F,r)}for(x=-E+m;x<=E-D;x+=2){for(g=i+x,w=(y=x===-E||x!==E&&l[g-1]<l[g+1]?l[g+1]:l[g-1]+1)-x;y<n&&w<a&&e.charAt(n-y-1)===t.charAt(a-w-1);)y++,w++
if(l[g]=y,y>n)D+=2
else if(w>a)m+=2
else if(!p&&(v=i+d-x)>=0&&v<u&&-1!==s[v]&&(F=i+(b=s[v])-v,b>=(y=n-y)))return this.diffBisectSplit(e,t,b,F,r)}}return[[ct,e],[1,t]]},lt.prototype.diffBisectSplit=function(e,t,r,n,a){var o,i,u,s,l,c
return o=e.substring(0,r),u=t.substring(0,n),i=e.substring(r),s=t.substring(n),l=this.DiffMain(o,u,!1,a),c=this.DiffMain(i,s,!1,a),l.concat(c)},lt.prototype.diffCleanupSemantic=function(e){for(var t,r,n,a,o=!1,i=[],u=0,s=null,l=0,c=0,d=0,p=0,f=0;l<e.length;)0===e[l][0]?(i[u++]=l,c=p,d=f,p=0,f=0,s=e[l][1]):(1===e[l][0]?p+=e[l][1].length:f+=e[l][1].length,s&&s.length<=Math.max(c,d)&&s.length<=Math.max(p,f)&&(e.splice(i[u-1],0,[ct,s]),e[i[u-1]+1][0]=1,u--,l=--u>0?i[u-1]:-1,c=0,d=0,p=0,f=0,s=null,o=!0)),l++
for(o&&this.diffCleanupMerge(e),l=1;l<e.length;)e[l-1][0]===ct&&1===e[l][0]&&(t=e[l-1][1],r=e[l][1],(n=this.diffCommonOverlap(t,r))>=(a=this.diffCommonOverlap(r,t))?(n>=t.length/2||n>=r.length/2)&&(e.splice(l,0,[0,r.substring(0,n)]),e[l-1][1]=t.substring(0,t.length-n),e[l+1][1]=r.substring(n),l++):(a>=t.length/2||a>=r.length/2)&&(e.splice(l,0,[0,t.substring(0,a)]),e[l-1][0]=1,e[l-1][1]=r.substring(0,r.length-a),e[l+1][0]=ct,e[l+1][1]=t.substring(a),l++),l++),l++},lt.prototype.diffCommonOverlap=function(e,t){var r=e.length,n=t.length
if(0===r||0===n)return 0
r>n?e=e.substring(r-n):r<n&&(t=t.substring(0,r))
var a=Math.min(r,n)
if(e===t)return a
for(var o=0,i=1;;){var u=e.substring(a-i),s=t.indexOf(u)
if(-1===s)return o
i+=s,0!==s&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},lt.prototype.diffLinesToChars=function(e,t){var r=[],n={}
function a(e){for(var t="",a=0,o=-1,i=r.length;o<e.length-1;){-1===(o=e.indexOf("\n",a))&&(o=e.length-1)
var u=e.substring(a,o+1)
a=o+1,dt.call(n,u)?t+=String.fromCharCode(n[u]):(t+=String.fromCharCode(i),n[u]=i,r[i++]=u)}return t}return r[0]="",{chars1:a(e),chars2:a(t),lineArray:r}},lt.prototype.diffCharsToLines=function(e,t){for(var r=0;r<e.length;r++){for(var n=e[r][1],a=[],o=0;o<n.length;o++)a[o]=t[n.charCodeAt(o)]
e[r][1]=a.join("")}},lt.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var t=0,r=0,n=0,a="",o="";t<e.length;)switch(e[t][0]){case 1:n++,o+=e[t][1],t++
break
case ct:r++,a+=e[t][1],t++
break
case 0:if(r+n>1){if(0!==r&&0!==n){var i=this.diffCommonPrefix(o,a)
0!==i&&(t-r-n>0&&0===e[t-r-n-1][0]?e[t-r-n-1][1]+=o.substring(0,i):(e.splice(0,0,[0,o.substring(0,i)]),t++),o=o.substring(i),a=a.substring(i)),0!==(i=this.diffCommonSuffix(o,a))&&(e[t][1]=o.substring(o.length-i)+e[t][1],o=o.substring(0,o.length-i),a=a.substring(0,a.length-i))}0===r?e.splice(t-n,r+n,[1,o]):0===n?e.splice(t-r,r+n,[ct,a]):e.splice(t-r-n,r+n,[ct,a],[1,o]),t=t-r-n+(r?1:0)+(n?1:0)+1}else 0!==t&&0===e[t-1][0]?(e[t-1][1]+=e[t][1],e.splice(t,1)):t++
n=0,r=0,a="",o=""}""===e[e.length-1][1]&&e.pop()
var u=!1
for(t=1;t<e.length-1;){if(0===e[t-1][0]&&0===e[t+1][0]){var s=e[t][1]
s.substring(s.length-e[t-1][1].length)===e[t-1][1]?(e[t][1]=e[t-1][1]+e[t][1].substring(0,e[t][1].length-e[t-1][1].length),e[t+1][1]=e[t-1][1]+e[t+1][1],e.splice(t-1,1),u=!0):s.substring(0,e[t+1][1].length)===e[t+1][1]&&(e[t-1][1]+=e[t+1][1],e[t][1]=e[t][1].substring(e[t+1][1].length)+e[t+1][1],e.splice(t+1,1),u=!0)}t++}u&&this.diffCleanupMerge(e)}
var pt={}
Y.currentModule.suiteReport=oe,Y.pq=new ut(Se)
var ft=!1,ht=!1
function mt(){ht=!0,m?m((function(){gt()})):gt()}function Dt(){Y.blocking=!1,Y.pq.advance()}function gt(){if(Y.started)Dt()
else{Y.reporters.console&&at.console.init(pt),Y.reporters.tap&&at.tap.init(pt),Y.started=A.now(),""===Y.modules[0].name&&0===Y.modules[0].tests.length&&Y.modules.shift()
for(var e=[],t=0;t<Y.modules.length;t++)""!==Y.modules[t].name&&e.push({name:Y.modules[t].name,moduleId:Y.modules[t].moduleId,tests:Y.modules[t].tests})
ye("runStart",oe.start(!0)),xe("begin",{totalTests:ke.count,modules:e}).then(Dt)}}pt.isLocal=v&&v.location&&"file:"===v.location.protocol,pt.version="2.24.1",R(pt,{config:Y,diff:function(e,t){var r,n
return n=(r=new lt).DiffMain(e,t),r.diffCleanupEfficiency(n),r.diffPrettyHtml(n)},dump:te,equiv:W,reporters:at,hooks:it,is:S,objectType:_,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!N(e,ve)){var r=ve.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(r,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
var n=Y._event_listeners[e]||(Y._event_listeners[e]=[])
N(t,n)||(n.push(t),void 0!==Y._event_memory[e]&&t(Y._event_memory[e]))},onError:function(e){if(re.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Y.current&&Y.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,st(t),!1},onUncaughtException:st,pushFailure:Ne,assert:me.prototype,module:ce,test:Se,todo:Se.todo,skip:Se.skip,only:Se.only,start:function(e){if(Y.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=ft
if(ft=!0,ht)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(Y.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!Y.pageLoaded)return Y.autostart=!0,void(b||pt.autostart())
mt()},onUnhandledRejection:function(e){re.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),st(e)},extend:function(){re.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return R.apply(this,t)},load:function(){re.warn("QUnit.load is deprecated and will be removed in QUnit 3.0. https://qunitjs.com/api/QUnit/load/"),pt.autostart()},autostart:function(){Y.pageLoaded=!0,R(Y,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),ht||(Y.blocking=!1,Y.autostart&&mt())},stack:function(e){return he(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function r(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
Y.callbacks[e].push(t)}}for(var n=0;n<t.length;n++){var a=t[n]
void 0===Y.callbacks[a]&&(Y.callbacks[a]=[]),e[a]=r(a)}}(pt),function(a){if(v&&b){if(v.QUnit&&v.QUnit.version)throw new Error("QUnit has already been defined.")
v.QUnit=a}e&&e.exports&&(e.exports=a,e.exports.QUnit=a),t&&(t.QUnit=a),void 0===(n=function(){return a}.call(t,r,t,e))||(e.exports=n),a.config.autostart=!1}(pt),function(){if(v&&b){var e=pt.config,t=Object.prototype.hasOwnProperty
pt.begin((function(){if(!t.call(e,"fixture")){var r=b.getElementById("qunit-fixture")
r&&(e.fixture=r.cloneNode(!0))}})),pt.testStart((function(){if(null!=e.fixture){var t=b.getElementById("qunit-fixture")
if("string"===d(e.fixture)){var r=b.createElement("div")
r.setAttribute("id","qunit-fixture"),r.innerHTML=e.fixture,t.parentNode.replaceChild(r,t)}else{var n=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(n,t)}}}))}}(),function(){var e=void 0!==v&&v.location
if(e){var t=function(){for(var t=Object.create(null),n=e.search.slice(1).split("&"),a=n.length,o=0;o<a;o++)if(n[o]){var i=n[o].split("="),u=r(i[0]),s=1===i.length||r(i.slice(1).join("="))
t[u]=u in t?[].concat(t[u],s):s}return t}()
pt.urlParams=t,pt.config.filter=t.filter,/^[0-9]+$/.test(t.maxDepth)&&(pt.config.maxDepth=pt.dump.maxDepth=+t.maxDepth),pt.config.module=t.module,pt.config.moduleId=[].concat(t.moduleId||[]),pt.config.testId=[].concat(t.testId||[]),"true"===t.seed||!0===t.seed?pt.config.seed=(Math.random().toString(36)+"0000000000").slice(2,12):t.seed&&(pt.config.seed=t.seed),pt.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),pt.begin((function(){for(var e=pt.config.urlConfig,r=0;r<e.length;r++){var n=pt.config.urlConfig[r]
"string"!=typeof n&&(n=n.id),void 0===pt.config[n]&&(pt.config[n]=t[n])}}))}function r(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var vt={exports:{}}
!function(e){var t,r
t=Fe,r=function(){var e=void 0!==we&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
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
return h}()},e.exports?e.exports=r():t.fuzzysort=r()}(vt)
var bt=vt.exports,yt={failedTests:[],defined:0,completed:0}
!function(){if(v&&b){pt.reporters.perf.init(pt)
var e=pt.config,t=[],r=!1,n=Object.prototype.hasOwnProperty,a=k({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
pt.on("runStart",(function(e){yt.defined=e.testCounts.total})),pt.begin((function(t){!function(t){var r,i,u,s,c,h,m,F,k=E("qunit")
k&&(k.setAttribute("role","main"),k.innerHTML="<h1 id='qunit-header'>"+I(b.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(r=pt.config.testId)||r.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+I(r.join(", "))+" <a id='qunit-clearFilter' href='"+I(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=E("qunit-header"))&&(i.innerHTML="<a href='"+I(a)+"'>"+i.innerHTML+"</a> "),(u=E("qunit-banner"))&&(u.className=""),m=E("qunit-tests"),(F=E("qunit-testresult"))&&F.parentNode.removeChild(F),m&&(m.innerHTML="",(F=b.createElement("p")).id="qunit-testresult",F.className="result",m.parentNode.insertBefore(F,m),F.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=E("qunit-testresult-controls")),c&&c.appendChild(((h=b.createElement("button")).id="qunit-abort-tests-button",h.innerHTML="Abort",d(h,"click",C),h)),(s=E("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(b.createTextNode("QUnit "+pt.version+"; "+y.userAgent))),function(t){var r,a,i,u,s,c=E("qunit-testrunner-toolbar")
if(c){c.appendChild(((s=b.createElement("span")).innerHTML=function(){for(var t=!1,r=e.urlConfig,a="",o=0;o<r.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var u=I(i.id),s=I(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'>"+I(i.label)+": <select id='qunit-urlconfig-"+u+"' name='"+u+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(var l=0;l<i.value.length;l++)a+="<option value='"+(u=I(i.value[l]))+"'"+(e[i.id]===i.value[l]?(t=!0)&&" selected='selected'":"")+">"+u+"</option>"
else for(var c in i.value)n.call(i.value,c)&&(a+="<option value='"+I(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+I(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(u=I(e[i.id]))+"' selected='selected' disabled='disabled'>"+u+"</option>"),a+="</select></label>"}else a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'><input id='qunit-urlconfig-"+u+"' name='"+u+"' type='checkbox'"+(i.value?" value='"+I(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+I(i.label)+"</label>"}return a}(),D(s,"qunit-url-config"),f(s.getElementsByTagName("input"),"change",A),f(s.getElementsByTagName("select"),"change",A),s))
var h=b.createElement("span")
h.id="qunit-toolbar-filters",h.appendChild((r=b.createElement("form"),a=b.createElement("label"),i=b.createElement("input"),u=b.createElement("button"),D(r,"qunit-filter"),a.innerHTML="Filter: ",i.type="text",i.value=e.filter||"",i.name="filter",i.id="qunit-filter-input",u.innerHTML="Go",a.appendChild(i),r.appendChild(a),r.appendChild(b.createTextNode(" ")),r.appendChild(u),d(r,"submit",x),r)),h.appendChild(function(t){var r=null
if(o={options:t.modules.slice(),selectedMap:new w,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(r.keys()).sort().join(",")}},e.moduleId.length)for(var n=0;n<t.modules.length;n++){var a=t.modules[n];-1!==e.moduleId.indexOf(a.moduleId)&&o.selectedMap.set(a.moduleId,a.name)}r=new w(o.selectedMap)
var i=b.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",d(i,"input",A),d(i,"input",C),d(i,"focus",C),d(i,"click",C)
var u=b.createElement("label")
u.htmlFor="qunit-modulefilter-search",u.textContent="Module:"
var s=b.createElement("span")
s.id="qunit-modulefilter-search-container",s.appendChild(i)
var c=b.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",d(c,"click",N)
var f=b.createElement("button")
f.textContent="Reset",f.type="reset",f.title="Restore the previous module selection"
var h=b.createElement("button")
h.textContent="Select none",h.type="button",h.title="Clear the current module selection",d(h,"click",(function(){o.selectedMap.clear(),k(),A()}))
var m=b.createElement("span")
m.id="qunit-modulefilter-actions",m.appendChild(c),m.appendChild(f),r.size&&m.appendChild(h)
var D=b.createElement("ul")
D.id="qunit-modulefilter-dropdown-list"
var y=b.createElement("div")
y.id="qunit-modulefilter-dropdown",y.style.display="none",y.appendChild(m),y.appendChild(D),d(y,"change",k),s.appendChild(y),k()
var F,E=b.createElement("form")
function C(){function e(t){var r=E.contains(t.target)
27!==t.keyCode&&r||(27===t.keyCode&&r&&i.focus(),y.style.display="none",p(b,"click",e),p(b,"keydown",e),i.value="",A())}"none"===y.style.display&&(A(),y.style.display="block",d(b,"click",e),d(b,"keydown",e))}function A(){v.clearTimeout(F),F=v.setTimeout((function(){D.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach((function(e,r){t+=T(r,e,!0)}))
for(var r=0;r<e.length;r++){var n=e[r].obj
o.selectedMap.has(n.moduleId)||(t+=T(n.moduleId,n.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):bt.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)}))}function k(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),g(t.parentNode,"checked",t.checked))
var r=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=r,i.title="Type to search through and reduce the list.",f.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(u),E.appendChild(b.createTextNode(" ")),E.appendChild(s),d(E,"submit",x),d(E,"reset",(function(){o.selectedMap=new w(r),k(),A()})),E}(t))
var m=b.createElement("div")
m.className="clearfix",c.appendChild(h),c.appendChild(m)}}(t)}(t)})),pt.on("runEnd",(function(t){var r,n,a,o=E("qunit-banner"),i=E("qunit-tests"),u=E("qunit-abort-tests-button"),s=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",s,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",_(yt.failedTests)].join("")
if(u&&u.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(r=i.children[c]).className&&"running"!==r.className||(r.className="aborted",a=r.getElementsByTagName("ol")[0],(n=b.createElement("li")).className="fail",n.innerHTML="Test aborted.",a.appendChild(n))}!o||u&&!1!==u.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),u&&u.parentNode.removeChild(u),i&&(E("qunit-testresult-display").innerHTML=l),e.altertitle&&b.title&&(b.title=["failed"===t.status?"✖":"✔",b.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&v.scrollTo&&v.scrollTo(0,0)})),pt.testStart((function(e){var t,r
B(e.name,e.testId,e.module),(t=E("qunit-testresult-display"))&&(D(t,"running"),r=pt.config.reorder&&e.previousFailure,t.innerHTML=[O(yt),r?"Rerunning previously failed test: <br />":"Running: ",S(e.name,e.module),_(yt.failedTests)].join(""))})),pt.log((function(e){var t=E("qunit-test-output-"+e.testId)
if(t){var r,n,a,o=I(e.message)||(e.result?"okay":"failed")
o="<span class='test-message'>"+o+"</span>",o+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var i=!1
e.result||void 0===e.expected&&void 0===e.actual?!e.result&&e.source&&(o+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr></table>"):(r=e.negative?"NOT "+pt.dump.parse(e.expected):pt.dump.parse(e.expected),n=pt.dump.parse(e.actual),o+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+I(r)+"</pre></td></tr>",n!==r?(o+="<tr class='test-actual'><th>Result: </th><td><pre>"+I(n)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(i=!0,a=((a=e.actual-e.expected)>0?"+":"")+a):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(i=P(a=pt.diff(r,n)).length!==P(r).length+P(n).length),i&&(o+="<tr class='test-diff'><th>Diff: </th><td><pre>"+a+"</pre></td></tr>")):-1!==r.indexOf("[object Array]")||-1!==r.indexOf("[object Object]")?o+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+pt.dump.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+I(k({maxDepth:0}))+"'>Rerun without max depth</a>.</p></td></tr>":o+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(o+="<tr class='test-source'><th>Source: </th><td><pre>"+I(e.source)+"</pre></td></tr>"),o+="</table>")
var u=t.getElementsByTagName("ol")[0],s=b.createElement("li")
s.className=e.result?"pass":"fail",s.innerHTML=o,u.appendChild(s)}})),pt.testDone((function(n){var a=E("qunit-tests"),o=E("qunit-test-output-"+n.testId)
if(a&&o){var i
F(o,"running"),i=n.failed>0?"failed":n.todo?"todo":n.skipped?"skipped":"passed"
var u=o.getElementsByTagName("ol")[0],s=n.passed,l=n.failed,c=n.failed>0?n.todo:!n.todo
c?D(u,"qunit-collapsed"):(yt.failedTests.push(n.testId),e.collapse&&(r?D(u,"qunit-collapsed"):r=!0))
var p=o.firstChild,f=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+s+"</b>, ":""
if(p.innerHTML+=" <b class='counts'>("+f+n.assertions.length+")</b>",yt.completed++,n.skipped){o.className="skipped"
var h=b.createElement("em")
h.className="qunit-skipped-label",h.innerHTML="skipped",o.insertBefore(h,p)}else{if(d(p,"click",(function(){g(u,"qunit-collapsed")})),o.className=c?"pass":"fail",n.todo){var m=b.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,p)}var v=b.createElement("span")
v.className="runtime",v.innerHTML=n.runtime+" ms",o.insertBefore(v,u)}if(n.source){var y=b.createElement("p")
y.innerHTML="<strong>Source: </strong>"+I(n.source),D(y,"qunit-source"),c&&D(y,"qunit-collapsed"),d(p,"click",(function(){g(y,"qunit-collapsed")})),o.appendChild(y)}e.hidepassed&&("passed"===i||n.skipped)&&(t.push(o),a.removeChild(o))}})),pt.on("error",(function(e){var t=B("global failure")
if(t){var r=I(M(e))
r="<span class='test-message'>"+r+"</span>",e&&e.stack&&(r+="<table><tr class='test-source'><th>Source: </th><td><pre>"+I(e.stack)+"</pre></td></tr></table>")
var n=t.getElementsByTagName("ol")[0],a=b.createElement("li")
a.className="fail",a.innerHTML=r,n.appendChild(a),t.className="fail"}}))
var i,u=(i=v.phantom)&&i.version&&i.version.major>0
u&&h.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),u||"complete"!==b.readyState?d(v,"load",pt.autostart):pt.autostart()
var s=v.onerror
v.onerror=function(t,r,n,a,o){var i=!1
if(s){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
i=s.call.apply(s,[this,t,r,n,a,o].concat(l))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&r&&n&&(d.stack="".concat(r,":").concat(n)),pt.onUncaughtException(d)}return i},v.addEventListener("unhandledrejection",(function(e){pt.onUncaughtException(e.reason)}))}function c(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function d(e,t,r){e.addEventListener(t,r,!1)}function p(e,t,r){e.removeEventListener(t,r,!1)}function f(e,t,r){for(var n=e.length;n--;)d(e[n],t,r)}function m(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function D(e,t){m(e,t)||(e.className+=(e.className?" ":"")+t)}function g(e,t,r){r||void 0===r&&!m(e,t)?D(e,t):F(e,t)}function F(e,t){for(var r=" "+e.className+" ";r.indexOf(" "+t+" ")>=0;)r=r.replace(" "+t+" "," ")
e.className=c(r)}function E(e){return b.getElementById&&b.getElementById(e)}function C(){var e=E("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),pt.config.queue.length=0,!1}function x(e){var t=E("qunit-filter-input")
return t.value=c(t.value),N(),e&&e.preventDefault&&e.preventDefault(),!1}function A(){var r,n=this,a={}
r="selectedIndex"in n?n.options[n.selectedIndex].value||void 0:n.checked?n.defaultValue||!0:void 0,a[n.name]=r
var o=k(a)
if("hidepassed"===n.name&&"replaceState"in v.history){pt.urlParams[n.name]=r,e[n.name]=r||!1
var i=E("qunit-tests")
if(i)if(n.checked){for(var u=i.children.length,s=i.children,l=0;l<u;l++){var c=s[l],d=c?c.className:"",p=d.indexOf("pass")>-1,f=d.indexOf("skipped")>-1;(p||f)&&t.push(c)}for(var h=0;h<t.length;h++)i.removeChild(t[h])}else{for(var m=0;m<t.length;m++)i.appendChild(t[m])
t.length=0}v.history.replaceState(null,"",o)}else v.location=o}function k(e){var t="?",r=v.location
for(var a in e=R(R({},pt.urlParams),e))if(n.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return r.protocol+"//"+r.host+r.pathname+t.slice(0,-1)}function N(){var e=E("qunit-filter-input").value
v.location=k({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function T(e,t,r){return'<li><label class="clickable'+(r?" checked":"")+'"><input type="checkbox" value="'+I(e)+'"'+(r?' checked="checked"':"")+" />"+I(t)+"</label></li>"}function B(e,t,r){var n=E("qunit-tests")
if(n){var a=b.createElement("strong")
a.className="qunit-test-name",a.innerHTML=S(e,r)
var o=b.createElement("li")
if(o.appendChild(a),void 0!==t){var i=b.createElement("a")
i.innerHTML="Rerun",i.href=k({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var u=b.createElement("ol")
return u.className="qunit-assert-list",o.appendChild(u),n.appendChild(o),o}}function _(e){return 0===e.length?"":["<br /><a href='"+I(k({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function S(e,t){var r=""
return t&&(r="<span class='module-name'>"+I(t)+"</span>: "),r+"<span class='test-name'>"+I(e)+"</span>"}function O(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function P(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}()}()},1707:function(e,t){!function t(r){var n=r,a=r.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
function u(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.10.3","function"==typeof define&&define.amd&&define("axe-core",[],(function(){return i})),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof r.getComputedStyle&&(r.axe=i),u.prototype=Object.create(Error.prototype),u.prototype.constructor=u
var s=["node"],l=["relatedNodes"],c=["node"],d=["variant"],p=["matches"],f=["chromium"],h=["noImplicit"],m=["noPresentational"],D=["precision","format","inGamut"],g=["space"],v=["algorithm"],b=["method"],y=["maxDeltaE","deltaEMethod","steps","maxSteps"],F=["node"],w=["environmentData"],E=["environmentData"],C=["environmentData"],x=["environmentData"],A=["environmentData"]
function k(e,t,r){return t=T(t),function(e,t){if(t&&("object"==o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}(e,N()?Reflect.construct(t,r||[],T(e).constructor):t.apply(e,r))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function B(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function _(e,t,r){O(e,t),t.set(e,r)}function S(e,t){O(e,t),t.add(e)}function O(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function M(e,t){return e.get(P(e,t))}function I(e,t,r){return e.set(P(e,t),r),r}function P(e,t,r){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:r
throw new TypeError("Private element is not present on this object")}function j(e,t){if(null==e)return{}
var r,n,a=function(e,t){if(null==e)return{}
var r={}
for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue
r[n]=e[n]}return r}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(n=0;n<o.length;n++)r=o[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function q(e){return function(e){if(Array.isArray(e))return X(e)}(e)||L(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(null,arguments)}function V(e,t){return H(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=r){var n,a,o,i,u=[],s=!0,l=!1
try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return
s=!1}else for(;!(s=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||K(e,t)||U()}function U(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function H(e){if(Array.isArray(e))return e}function $(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Y(n.key),n)}}function W(e,t,r){return t&&G(e.prototype,t),r&&G(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e){var t=function(e){if("object"!=o(e)||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var r=t.call(e,"string")
if("object"!=o(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==o(t)?t:t+""}function Q(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!r){if(Array.isArray(e)||(r=K(e))||t&&e&&"number"==typeof e.length){r&&(e=r)
var n=0,a=function(){}
return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){r=r.call(e)},n:function(){var e=r.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function K(e,t){if(e){if("string"==typeof e)return X(e,t)
var r={}.toString.call(e).slice(8,-1)
return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?X(e,t):void 0}}function X(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=Array(t);r<t;r++)n[r]=e[r]
return n}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(e,t,T,O,G,X,Z,J,ee,te,re){var ne=Object.create,ae=Object.defineProperty,oe=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,ue=Object.getOwnPropertyNames,se=Object.getOwnPropertyDescriptor,le=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},ce=function(e,t){for(var r in t)ae(e,r,{get:t[r],enumerable:!0})},de=function(e){return function(e,t,r){if(t&&"object"===o(t)||"function"==typeof t){var n,a=Q(ue(t))
try{var i=function(){var a=n.value
ie.call(e,a)||"default"===a||ae(e,a,{get:function(){return t[a]},enumerable:!(r=se(t,a))||r.enumerable})}
for(a.s();!(n=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}return e}((t=ae(null!=e?ne(oe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),ae(t,"__esModule",{value:!0})),e)
var t},pe=function(e,t,r){return function(e,t,r){t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r}(e,"symbol"!==o(t)?t+"":t,r),r},fe=le((function(e,t){"use strict"
t.exports=function(){}})),he=le((function(e,t){"use strict"
var r=fe()()
t.exports=function(e){return e!==r&&null!==e}})),me=le((function(e,t){"use strict"
var r=he(),n=Array.prototype.forEach,a=Object.create
t.exports=function(e){var t=a(null)
return n.call(arguments,(function(e){r(e)&&function(e,t){var r
for(r in e)t[r]=e[r]}(Object(e),t)})),t}})),De=le((function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}})),ge=le((function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}})),ve=le((function(e,t){"use strict"
t.exports=De()()?Math.sign:ge()})),be=le((function(e,t){"use strict"
var r=ve(),n=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?r(e)*a(n(e)):e}})),ye=le((function(e,t){"use strict"
var r=be(),n=Math.max
t.exports=function(e){return n(0,r(e))}})),Fe=le((function(e,t){"use strict"
var r=ye()
t.exports=function(e,t,n){var a
return isNaN(e)?(a=t)>=0?n&&a?a-1:a:1:!1!==e&&r(e)}})),we=le((function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}})),Ee=le((function(e,t){"use strict"
var r=he()
t.exports=function(e){if(!r(e))throw new TypeError("Cannot use null or undefined")
return e}})),Ce=le((function(e,t){"use strict"
var r=we(),n=Ee(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,u=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(s,l){var c,d=arguments[2],p=arguments[3]
return s=Object(n(s)),r(l),c=i(s),p&&c.sort("function"==typeof p?a.call(p,s):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,(function(e,r){return u.call(s,e)?o.call(l,d,s[e],e,s,r):t}))}}})),xe=le((function(e,t){"use strict"
t.exports=Ce()("forEach")})),Ae=le((function(){})),ke=le((function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}})),Ne=le((function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}})),Te=le((function(e,t){"use strict"
var r=he(),n=Object.keys
t.exports=function(e){return n(r(e)?Object(e):e)}})),Be=le((function(e,t){"use strict"
t.exports=Ne()()?Object.keys:Te()})),Re=le((function(e,t){"use strict"
var r=Be(),n=Ee(),a=Math.max
t.exports=function(e,t){var o,i,u,s=a(arguments.length,2)
for(e=Object(n(e)),u=function(r){try{e[r]=t[r]}catch(e){o||(o=e)}},i=1;i<s;++i)r(t=arguments[i]).forEach(u)
if(void 0!==o)throw o
return e}})),_e=le((function(e,t){"use strict"
t.exports=ke()()?Object.assign:Re()})),Se=le((function(e,t){"use strict"
var r=he(),n={function:!0,object:!0}
t.exports=function(e){return r(e)&&n[o(e)]||!1}})),Oe=le((function(e,t){"use strict"
var r=_e(),n=Se(),a=he(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),u=arguments[1],s=arguments[2]
return a(s)||n(u)&&(s=u,u=null),a(s)&&r(i,s),a(u)&&(i.code=u),o&&o(i,t.exports),i}})),Me=le((function(e,t){"use strict"
var r=Ee(),n=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var u,s=Object(r(t))
if(e=Object(r(e)),o(s).forEach((function(r){try{n(e,r,a(t,r))}catch(e){u=e}})),"function"==typeof i&&i(s).forEach((function(r){try{n(e,r,a(t,r))}catch(e){u=e}})),void 0!==u)throw u
return e}})),Ie=le((function(e,t){"use strict"
var r,n,a,o,i,u=ye(),s=function(e,t){return t}
try{Object.defineProperty(s,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===s.length?(r={configurable:!0,writable:!1,enumerable:!1},n=Object.defineProperty,t.exports=function(e,t){return t=u(t),e.length===t?e:(r.value=t,n(e,"length",r))}):(o=Me(),i=[],a=function(e){var t,r=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++r).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var r
if(t=u(t),e.length===t)return e
r=a(t)(e)
try{o(r,e)}catch(e){}return r})})),Pe=le((function(e,t){"use strict"
t.exports=function(e){return null!=e}})),je=le((function(e,t){"use strict"
var r=Pe(),n={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!r(e)&&hasOwnProperty.call(n,o(e))}})),qe=le((function(e,t){"use strict"
var r=je()
t.exports=function(e){if(!r(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}})),Le=le((function(e,t){"use strict"
var r=qe()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!r(e)}})),ze=le((function(e,t){"use strict"
var r=Le(),n=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!r(e)&&!n.test(a.call(e))}})),Ve=le((function(e,t){"use strict"
var r="razdwatrzy"
t.exports=function(){return"function"==typeof r.contains&&!0===r.contains("dwa")&&!1===r.contains("foo")}})),Ue=le((function(e,t){"use strict"
var r=String.prototype.indexOf
t.exports=function(e){return r.call(this,e,arguments[1])>-1}})),He=le((function(e,t){"use strict"
t.exports=Ve()()?String.prototype.contains:Ue()})),$e=le((function(e,t){"use strict"
var r=Pe(),n=ze(),a=_e(),o=me(),i=He(),u=t.exports=function(e,t){var n,u,s,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],r(e)?(n=i.call(e,"c"),u=i.call(e,"e"),s=i.call(e,"w")):(n=s=!0,u=!1),c={value:t,configurable:n,enumerable:u,writable:s},l?a(o(l),c):c}
u.gs=function(e,t,u){var s,l,c,d
return"string"!=typeof e?(c=u,u=t,t=e,e=null):c=arguments[3],r(t)?n(t)?r(u)?n(u)||(c=u,u=void 0):u=void 0:(c=t,t=u=void 0):t=void 0,r(e)?(s=i.call(e,"c"),l=i.call(e,"e")):(s=!0,l=!1),d={get:t,set:u,configurable:s,enumerable:l},c?a(o(c),d):d}})),Ge=le((function(e,t){"use strict"
var r,n,a,i,u,s,l,c=$e(),d=we(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,D=Object.defineProperties,g=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0}
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
return d(t),g.call(this,"__ee__")?r=this.__ee__:(r=v.value=h(null),m(this,"__ee__",v),v.value=null),r[e]?"object"===o(r[e])?r[e].push(t):r[e]=[r[e],t]:r[e]=t,this},once:n,off:a,emit:i},s={on:c(r),once:c(n),off:c(a),emit:c(i)},l=D({},s),t.exports=e=function(e){return null==e?h(l):D(Object(e),s)},e.methods=u})),We=le((function(e,t){"use strict"
t.exports=function(){var e,t,r=Array.from
return"function"==typeof r&&(t=r(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}})),Ye=le((function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}})),Qe=le((function(e,t){var n=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===r?"undefined":o(r))&&r)return r
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return n()}try{return __global__||n()}finally{delete Object.prototype.__global__}}()})),Ke=le((function(e,t){"use strict"
t.exports=Ye()()?globalThis:Qe()})),Xe=le((function(e,t){"use strict"
var r=Ke(),n={object:!0,symbol:!0}
t.exports=function(){var e,t=r.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!n[o(t.iterator)]&&!!n[o(t.toPrimitive)]&&!!n[o(t.toStringTag)]}})),Ze=le((function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}})),Je=le((function(e,t){"use strict"
var r=Ze()
t.exports=function(e){if(!r(e))throw new TypeError(e+" is not a symbol")
return e}})),et=le((function(e,t){"use strict"
var r=$e(),n=Object.create,a=Object.defineProperty,o=Object.prototype,i=n(null)
t.exports=function(e){for(var t,n,u=0;i[e+(u||"")];)++u
return i[e+=u||""]=!0,a(o,t="@@"+e,r.gs(null,(function(e){n||(n=!0,a(this,t,r(e)),n=!1)}))),t}})),tt=le((function(e,t){"use strict"
var r=$e(),n=Ke().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:r("",n&&n.hasInstance||e("hasInstance")),isConcatSpreadable:r("",n&&n.isConcatSpreadable||e("isConcatSpreadable")),iterator:r("",n&&n.iterator||e("iterator")),match:r("",n&&n.match||e("match")),replace:r("",n&&n.replace||e("replace")),search:r("",n&&n.search||e("search")),species:r("",n&&n.species||e("species")),split:r("",n&&n.split||e("split")),toPrimitive:r("",n&&n.toPrimitive||e("toPrimitive")),toStringTag:r("",n&&n.toStringTag||e("toStringTag")),unscopables:r("",n&&n.unscopables||e("unscopables"))})}})),rt=le((function(e,t){"use strict"
var r=$e(),n=Je(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:r((function(t){return a[t]?a[t]:a[t]=e(String(t))})),keyFor:r((function(e){var t
for(t in n(e),a)if(a[t]===e)return t}))})}})),nt=le((function(e,t){"use strict"
var r,n,a,i=$e(),u=Je(),s=Ke().Symbol,l=et(),c=tt(),d=rt(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof s)try{String(s()),a=!0}catch(e){}else s=null
n=function(e){if(this instanceof n)throw new TypeError("Symbol is not a constructor")
return r(e)},t.exports=r=function e(t){var r
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?s(t):(r=p(n.prototype),t=void 0===t?"":String(t),f(r,{__description__:i("",t),__name__:i("",l(t))}))},c(r),d(r),f(n.prototype,{constructor:i(r),toString:i("",(function(){return this.__name__}))}),f(r.prototype,{toString:i((function(){return"Symbol ("+u(this).__description__+")"})),valueOf:i((function(){return u(this)}))}),h(r.prototype,r.toPrimitive,i("",(function(){var e=u(this)
return"symbol"===o(e)?e:e.toString()}))),h(r.prototype,r.toStringTag,i("c","Symbol")),h(n.prototype,r.toStringTag,i("c",r.prototype[r.toStringTag])),h(n.prototype,r.toPrimitive,i("c",r.prototype[r.toPrimitive]))})),at=le((function(e,t){"use strict"
t.exports=Xe()()?Ke().Symbol:nt()})),ot=le((function(e,t){"use strict"
var r=Object.prototype.toString,n=r.call(function(){return arguments}())
t.exports=function(e){return r.call(e)===n}})),it=le((function(e,t){"use strict"
var r=Object.prototype.toString,n=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&n(r.call(e))}})),ut=le((function(e,t){"use strict"
var r=Object.prototype.toString,n=r.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||r.call(e)===n)||!1}})),st=le((function(e,t){"use strict"
var r=at().iterator,n=ot(),a=it(),o=ye(),i=we(),u=Ee(),s=he(),l=ut(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,D,g,v,b,y,F,w,E=arguments[1],C=arguments[2]
if(e=Object(u(e)),s(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(n(e))return 1!==(g=e.length)?Array.apply(null,e):((D=new Array(1))[0]=e[0],D)
if(c(e)){for(D=new Array(g=e.length),h=0;h<g;++h)D[h]=e[h]
return D}}D=[]}if(!c(e))if(void 0!==(F=e[r])){for(b=i(F).call(e),t&&(D=new t),y=b.next(),h=0;!y.done;)w=E?d.call(E,C,y.value,h):y.value,t?(p.value=w,f(D,h,p)):D[h]=w,y=b.next(),++h
g=h}else if(l(e)){for(g=e.length,t&&(D=new t),h=0,m=0;h<g;++h)w=e[h],h+1<g&&(v=w.charCodeAt(0))>=55296&&v<=56319&&(w+=e[++h]),w=E?d.call(E,C,w,m):w,t?(p.value=w,f(D,m,p)):D[m]=w,++m
g=m}if(void 0===g)for(g=o(e.length),t&&(D=new t(g)),h=0;h<g;++h)w=E?d.call(E,C,e[h],h):e[h],t?(p.value=w,f(D,h,p)):D[h]=w
return t&&(p.value=null,D.length=g),D}})),lt=le((function(e,t){"use strict"
t.exports=We()()?Array.from:st()})),ct=le((function(e,t){"use strict"
var r=lt(),n=Array.isArray
t.exports=function(e){return n(e)?e:r(e)}})),dt=le((function(e,t){"use strict"
var r,n=ct(),a=he(),o=we(),i=Array.prototype.slice
r=function(e){return this.map((function(t,r){return t?t(e[r]):e[r]})).concat(i.call(e,this.length))},t.exports=function(e){return(e=n(e)).forEach((function(e){a(e)&&o(e)})),r.bind(e)}})),pt=le((function(e,t){"use strict"
var r=we()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:r(e.get)},void 0!==e.set?(t.set=r(e.set),e.delete&&(t.delete=r(e.delete)),e.clear&&(t.clear=r(e.clear)),t):(t.set=t.get,t))}})),ft=le((function(e,t){"use strict"
var r=Oe(),n=Ie(),a=$e(),o=Ge().methods,i=dt(),u=pt(),s=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
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
return 0===t?h.has("data"):(N&&(r=N(r)),null!==(e=D?D(r):String(r[0]))&&h.has(e))})),d(k,{__memoized__:a(!0),delete:a(y),clear:a(h.clear),_get:a(F),_has:a(w)}),h}})),ht=le((function(e,t){"use strict"
var r=we(),n=xe(),a=Ae(),o=ft(),i=Fe()
t.exports=function e(t){var u,s,l
if(r(t),(u=Object(arguments[1])).async&&u.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!u.force?t:(s=i(u.length,t.length,u.async&&a.async),l=o(t,s,u),n(a,(function(e,t){u[t]&&e(u[t],l,u)})),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}})),mt=le((function(e,t){"use strict"
t.exports=function(e){var t,r,n=e.length
if(!n)return""
for(t=String(e[r=0]);--n;)t+=""+e[++r]
return t}})),Dt=le((function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var r=String(t[0]),n=0,a=e;--a;)r+=""+t[++n]
return r}:function(){return""}}})),gt=le((function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}})),vt=le((function(e,t){"use strict"
t.exports=function(e){return e!=e}})),bt=le((function(e,t){"use strict"
t.exports=gt()()?Number.isNaN:vt()})),yt=le((function(e,t){"use strict"
var r=bt(),n=ye(),a=Ee(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,u=Math.abs,s=Math.floor
t.exports=function(e){var t,l,c,d
if(!r(e))return o.apply(this,arguments)
for(l=n(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?s(c):n(this.length)-s(u(c));t<l;++t)if(i.call(this,t)&&(d=this[t],r(d)))return t
return-1}})),Ft=le((function(e,t){"use strict"
var r=yt(),n=Object.create
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
for(e=i[1][n],i[0].splice(n,1),i[1].splice(n,1);!i[0].length&&l.length;)n=l.pop(),(i=l.pop())[0].splice(n,1),i[1].splice(n,1)}delete a[e]},clear:function(){t=[],a=n(null)}}}})),wt=le((function(e,t){"use strict"
var r=yt()
t.exports=function(){var e=0,t=[],n=[]
return{get:function(e){var a=r.call(t,e[0])
return-1===a?null:n[a]},set:function(r){return t.push(r[0]),n.push(++e),e},delete:function(e){var a=r.call(n,e);-1!==a&&(t.splice(a,1),n.splice(a,1))},clear:function(){t=[],n=[]}}}})),Et=le((function(e,t){"use strict"
var r=yt(),n=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=n(null)
return{get:function(t){for(var n,o=0,i=a;o<e-1;){if(-1===(n=r.call(i[0],t[o])))return null
i=i[1][n],++o}return-1===(n=r.call(i[0],t[o]))?null:i[1][n]||null},set:function(n){for(var i,u=0,s=a;u<e-1;)-1===(i=r.call(s[0],n[u]))&&(i=s[0].push(n[u])-1,s[1].push([[],[]])),s=s[1][i],++u
return-1===(i=r.call(s[0],n[u]))&&(i=s[0].push(n[u])-1),s[1][i]=++t,o[t]=n,t},delete:function(t){for(var n,i=0,u=a,s=[],l=o[t];i<e-1;){if(-1===(n=r.call(u[0],l[i])))return
s.push(u,n),u=u[1][n],++i}if(-1!==(n=r.call(u[0],l[i]))){for(t=u[1][n],u[0].splice(n,1),u[1].splice(n,1);!u[0].length&&s.length;)n=s.pop(),(u=s.pop())[0].splice(n,1),u[1].splice(n,1)
delete o[t]}},clear:function(){a=[[],[]],o=n(null)}}}})),Ct=le((function(e,t){"use strict"
var r=we(),n=xe(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return r(t),n(e,(function(e,r,n,u){o[r]=a.call(t,i,e,r,n,u)})),o}})),xt=le((function(e,t){"use strict"
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
if("function"==typeof WebKitMutationObserver)return n(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(r(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(r(e),0)}:null}()})),At=le((function(){"use strict"
var e=lt(),t=Ct(),r=Me(),n=Ie(),a=xt(),o=Array.prototype.slice,i=Function.prototype.apply,u=Object.create
Ae().async=function(s,l){var c,d,p,f=u(null),h=u(null),m=l.memoized,D=l.original
l.memoized=n((function(e){var t=arguments,r=t[t.length-1]
return"function"==typeof r&&(c=r,t=o.call(t,0,-1)),m.apply(d=this,p=t)}),m)
try{r(l.memoized,m)}catch(e){}l.on("get",(function(e){var t,r,n
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,r=d,n=p,c=d=p=null,a((function(){var a
hasOwnProperty.call(h,e)?(a=h[e],l.emit("getasync",e,n,r),i.call(t,a.context,a.args)):(c=t,d=r,p=n,m.apply(r,n))}))}})),l.original=function(){var t,r,n,o
return c?(t=e(arguments),r=function t(r){var n,u,s=t.id
if(null!=s){if(delete t.id,n=f[s],delete f[s],n)return u=e(arguments),l.has(s)&&(r?l.delete(s):(h[s]={context:this,args:u},l.emit("setasync",s,"function"==typeof n?1:n.length))),"function"==typeof n?o=i.call(n,this,u):n.forEach((function(e){o=i.call(e,this,u)}),this),o}else a(i.bind(t,this,arguments))},n=c,c=d=p=null,t.push(r),o=i.call(D,this,t),r.cb=n,c=r,o):i.call(D,this,arguments)},l.on("set",(function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)})),l.on("delete",(function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],l.emit("deleteasync",e,o.call(t.args,1)))})),l.on("clear",(function(){var e=h
h=u(null),l.emit("clearasync",t(e,(function(e){return o.call(e.args,1)})))}))}})),kt=le((function(e,t){"use strict"
var r=Array.prototype.forEach,n=Object.create
t.exports=function(e){var t=n(null)
return r.call(arguments,(function(e){t[e]=!0})),t}})),Nt=le((function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}})),Tt=le((function(e,t){"use strict"
var r=Nt()
t.exports=function(e){try{return e&&r(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}})),Bt=le((function(e,t){"use strict"
var r=Ee(),n=Tt()
t.exports=function(e){return n(r(e))}})),Rt=le((function(e,t){"use strict"
var r=Nt()
t.exports=function(e){try{return e&&r(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}})),_t=le((function(e,t){"use strict"
var r=Rt(),n=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=r(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(n,(function(e){return JSON.stringify(e).slice(1,-1)}))}})),St=le((function(e,t){function r(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=r,t.exports.default=r})),Ot=le((function(){"use strict"
var e=Ct(),t=kt(),r=Bt(),n=_t(),a=St(),o=xt(),i=Object.create,u=t("then","then:finally","done","done:finally")
Ae().promise=function(t,s){var l=i(null),c=i(null),d=i(null)
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
c=i(null),l=i(null),d=i(null),s.emit("clearasync",e(t,(function(e){return[e]})))}))}})),Mt=le((function(){"use strict"
var e=we(),t=xe(),r=Ae(),n=Function.prototype.apply
r.dispose=function(a,o,i){var u
if(e(a),i.async&&r.async||i.promise&&r.promise)return o.on("deleteasync",u=function(e,t){n.call(a,null,t)}),void o.on("clearasync",(function(e){t(e,(function(e,t){u(t,e)}))}))
o.on("delete",u=function(e,t){a(t)}),o.on("clear",(function(e){t(e,(function(e,t){u(t,e)}))}))}})),It=le((function(e,t){"use strict"
t.exports=2147483647})),Pt=le((function(e,t){"use strict"
var r=ye(),n=It()
t.exports=function(e){if((e=r(e))>n)throw new TypeError(e+" exceeds maximum possible timeout")
return e}})),jt=le((function(){"use strict"
var e=lt(),t=xe(),r=xt(),n=St(),a=Pt(),o=Ae(),i=Function.prototype,u=Math.max,s=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,h,m,D;(c=a(c))&&(f=l(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,(function(e){f[e]=setTimeout((function(){d.delete(e)}),c),"function"==typeof f[e].unref&&f[e].unref(),D&&(D[e]&&"nextTick"!==D[e]&&clearTimeout(D[e]),D[e]=setTimeout((function(){delete D[e]}),m),"function"==typeof D[e].unref&&D[e].unref())})),d.on("delete"+h,(function(e){clearTimeout(f[e]),delete f[e],D&&("nextTick"!==D[e]&&clearTimeout(D[e]),delete D[e])})),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:u(s(Number(p.preFetch),1),0))&&(D={},m=(1-m)*c,d.on("get"+h,(function(t,a,o){D[t]||(D[t]="nextTick",r((function(){var r
"nextTick"===D[t]&&(delete D[t],d.delete(t),p.async&&(a=e(a)).push(i),r=d.memoized.apply(o,a),p.promise&&n(r)&&("function"==typeof r.done?r.done(i,i):r.then(i,i)))})))}))),d.on("clear"+h,(function(){t(f,(function(e){clearTimeout(e)})),f={},D&&(t(D,(function(e){"nextTick"!==e&&clearTimeout(e)})),D={})})))}})),qt=le((function(e,t){"use strict"
var r=ye(),n=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,u=n(null),s=n(null),l=0
return e=r(e),{hit:function(r){var n=s[r],c=++l
if(u[c]=r,s[r]=c,!n){if(++o<=e)return
return r=u[i],t(r),r}if(delete u[n],i===n)for(;!a.call(u,++i););},delete:t=function(e){var t=s[e]
if(t&&(delete u[t],delete s[e],--o,i===t)){if(!o)return l=0,void(i=1)
for(;!a.call(u,++i););}},clear:function(){o=0,i=1,u=n(null),s=n(null),l=0}}}})),Lt=le((function(){"use strict"
var e=ye(),t=qt(),r=Ae()
r.max=function(n,a,o){var i,u,s;(n=e(n))&&(u=t(n),i=o.async&&r.async||o.promise&&r.promise?"async":"",a.on("set"+i,s=function(e){void 0!==(e=u.hit(e))&&a.delete(e)}),a.on("get"+i,s),a.on("delete"+i,u.delete),a.on("clear"+i,u.clear))}})),zt=le((function(){"use strict"
var e=$e(),t=Ae(),r=Object.create,n=Object.defineProperties
t.refCounter=function(a,o,i){var u,s
u=r(null),s=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+s,(function(e,t){u[e]=t||1})),o.on("get"+s,(function(e){++u[e]})),o.on("delete"+s,(function(e){delete u[e]})),o.on("clear"+s,(function(){u={}})),n(o.memoized,{deleteRef:e((function(){var e=o.get(arguments)
return null===e?null:u[e]?! --u[e]&&(o.delete(e),!0):null})),getRefCount:e((function(){var e=o.get(arguments)
return null===e?0:u[e]?u[e]:0}))})}})),Vt=le((function(e,t){"use strict"
var r=me(),n=Fe(),a=ht()
t.exports=function(e){var t,o=r(arguments[1])
return o.normalizer||0!==(t=o.length=n(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=mt():t>1&&(o.normalizer=Dt()(t)):o.normalizer=!1===t?Ft()():1===t?wt()():Et()(t)),o.async&&At(),o.promise&&Ot(),o.dispose&&Mt(),o.maxAge&&jt(),o.max&&Lt(),o.refCounter&&zt(),a(e,o)}})),Ut=le((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var r=t.length,n="",a=0;a<r;){var o=t.charAt(a)
if(e.identSpecialChars[o])n+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")n+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var u=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&u))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&u)+65536}n+="\\"+i.toString(16)+" "}a++}return n},e.escapeStr=function(t){for(var r,n=t.length,a="",o=0;o<n;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(r=e.strReplacementsRev[i])&&(i=r),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}})),Ht=le((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ut()
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
return t}()}})),$t=le((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ut()
e.renderEntity=function e(r){var n=""
switch(r.type){case"ruleSet":for(var a=r.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
n=o.join(" ")
break
case"selectors":n=r.selectors.map(e).join(", ")
break
case"rule":r.tagName&&(n="*"===r.tagName?"*":t.escapeIdentifier(r.tagName)),r.id&&(n+="#"+t.escapeIdentifier(r.id)),r.classNames&&(n+=r.classNames.map((function(e){return"."+t.escapeIdentifier(e)})).join("")),r.attrs&&(n+=r.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"})).join("")),r.pseudos&&(n+=r.pseudos.map((function(r){return r.valueType?"selector"===r.valueType?":"+t.escapeIdentifier(r.name)+"("+e(r.value)+")":"substitute"===r.valueType?":"+t.escapeIdentifier(r.name)+"($"+r.value+")":"numeric"===r.valueType?":"+t.escapeIdentifier(r.name)+"("+r.value+")":":"+t.escapeIdentifier(r.name)+"("+t.escapeIdentifier(r.value)+")":":"+t.escapeIdentifier(r.name)})).join(""))
break
default:throw Error('Unknown entity type: "'+r.type+'".')}return n}})),Gt=le((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=Ht(),r=$t(),n=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
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
e.CssSelectorParser=n})),Wt=le((function(e,t){var i,u
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
function B(t,r,n){r.constructor===t.constructor&&n===E&&r.constructor.resolve===C?function(e,t){t._state===N?S(e,t._result):t._state===T?O(e,t._result):M(t,void 0,(function(t){return R(e,t)}),(function(t){return O(e,t)}))}(t,r):void 0===n?S(t,r):e(n)?function(e,t,r){l((function(e){var n=!1,a=function(r,a){try{r.call(a,(function(r){n||(n=!0,t!==r?R(e,r):S(e,r))}),(function(t){n||(n=!0,O(e,t))}))}catch(e){return e}}(r,t,e._label)
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
try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=z},z.Promise=z,z},"object"===o(e)&&void 0!==t?t.exports=u():"function"==typeof define&&define.amd?define(u):i.ES6Promise=u()})),Yt=le((function(e){var t,r,n=(t=Object.prototype.toString,r=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return r.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return 0|e},ToUint32:function(e){return e>>>0}}),a=Math.LN2,i=Math.abs,u=Math.floor,s=Math.log,l=Math.min,c=Math.pow,d=Math.round
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
Boolean(u)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,r.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=i(e.Uint8Array),o.prototype.getInt8=i(e.Int8Array),o.prototype.getUint16=i(e.Uint16Array),o.prototype.getInt16=i(e.Int16Array),o.prototype.getUint32=i(e.Uint32Array),o.prototype.getInt32=i(e.Int32Array),o.prototype.getFloat32=i(e.Float32Array),o.prototype.getFloat64=i(e.Float64Array),o.prototype.setUint8=u(e.Uint8Array),o.prototype.setInt8=u(e.Int8Array),o.prototype.setUint16=u(e.Uint16Array),o.prototype.setInt16=u(e.Int16Array),o.prototype.setUint32=u(e.Uint32Array),o.prototype.setInt32=u(e.Int32Array),o.prototype.setFloat32=u(e.Float32Array),o.prototype.setFloat64=u(e.Float64Array),e.DataView=e.DataView||o}()})),Qt=le((function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,r=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),n=function(e,t,n){r?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(n(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,r){if(!a(e)||!t.call(e,"_id"))throw new TypeError(r+" method called on incompatible receiver "+o(e))}function i(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(r(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))})),n(e.prototype,"get",(function(e){if(r(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(r(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(r(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==r?r:void 0!==n?n:e)})),Kt=le((function(e,t){"use strict"
var a=function(e){return e&&e.Math===Math&&e}
t.exports=a("object"==("undefined"==typeof globalThis?"undefined":o(globalThis))&&globalThis)||a("object"==(void 0===r?"undefined":o(r))&&r)||a("object"==("undefined"==typeof self?"undefined":o(self))&&self)||a("object"==(void 0===n?"undefined":o(n))&&n)||function(){return this}()||e||Function("return this")()})),Xt=le((function(e,t){"use strict"
t.exports=function(e){try{return!!e()}catch(e){return!0}}})),Zt=le((function(e,t){"use strict"
var r=Xt()
t.exports=!r((function(){var e=function(){}.bind()
return"function"!=typeof e||e.hasOwnProperty("prototype")}))})),Jt=le((function(e,t){"use strict"
var r=Zt(),n=Function.prototype,a=n.apply,i=n.call
t.exports="object"==("undefined"==typeof Reflect?"undefined":o(Reflect))&&Reflect.apply||(r?i.bind(a):function(){return i.apply(a,arguments)})})),er=le((function(e,t){"use strict"
var r=Zt(),n=Function.prototype,a=n.call,o=r&&n.bind.bind(a,a)
t.exports=r?o:function(e){return function(){return a.apply(e,arguments)}}})),tr=le((function(e,t){"use strict"
var r=er(),n=r({}.toString),a=r("".slice)
t.exports=function(e){return a(n(e),8,-1)}})),rr=le((function(e,t){"use strict"
var r=tr(),n=er()
t.exports=function(e){if("Function"===r(e))return n(e)}})),nr=le((function(e,t){"use strict"
var r="object"==(void 0===a?"undefined":o(a))&&a.all,n=void 0===r&&void 0!==r
t.exports={all:r,IS_HTMLDDA:n}})),ar=le((function(e,t){"use strict"
var r=nr(),n=r.all
t.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===n}:function(e){return"function"==typeof e}})),or=le((function(e,t){"use strict"
var r=Xt()
t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))})),ir=le((function(e,t){"use strict"
var r=Zt(),n=Function.prototype.call
t.exports=r?n.bind(n):function(){return n.apply(n,arguments)}})),ur=le((function(e){"use strict"
var t={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,n=r&&!t.call({1:2},1)
e.f=n?function(e){var t=r(this,e)
return!!t&&t.enumerable}:t})),sr=le((function(e,t){"use strict"
t.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}})),lr=le((function(e,t){"use strict"
var r=er(),n=Xt(),a=tr(),o=Object,i=r("".split)
t.exports=n((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===a(e)?i(e,""):o(e)}:o})),cr=le((function(e,t){"use strict"
t.exports=function(e){return null==e}})),dr=le((function(e,t){"use strict"
var r=cr(),n=TypeError
t.exports=function(e){if(r(e))throw new n("Can't call method on "+e)
return e}})),pr=le((function(e,t){"use strict"
var r=lr(),n=dr()
t.exports=function(e){return r(n(e))}})),fr=le((function(e,t){"use strict"
var r=ar(),n=nr(),a=n.all
t.exports=n.IS_HTMLDDA?function(e){return"object"==o(e)?null!==e:r(e)||e===a}:function(e){return"object"==o(e)?null!==e:r(e)}})),hr=le((function(e,t){"use strict"
t.exports={}})),mr=le((function(e,t){"use strict"
var r=hr(),n=Kt(),a=ar(),o=function(e){return a(e)?e:void 0}
t.exports=function(e,t){return arguments.length<2?o(r[e])||o(n[e]):r[e]&&r[e][t]||n[e]&&n[e][t]}})),Dr=le((function(e,t){"use strict"
var r=er()
t.exports=r({}.isPrototypeOf)})),gr=le((function(e,t){"use strict"
t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""})),vr=le((function(e,t){"use strict"
var r,n,a=Kt(),o=gr(),i=a.process,u=a.Deno,s=i&&i.versions||u&&u.version,l=s&&s.v8
l&&(n=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&o&&(!(r=o.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/))&&(n=+r[1]),t.exports=n})),br=le((function(e,t){"use strict"
var r=vr(),n=Xt(),a=Kt().String
t.exports=!!Object.getOwnPropertySymbols&&!n((function(){var e=Symbol("symbol detection")
return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))})),yr=le((function(e,t){"use strict"
var r=br()
t.exports=r&&!Symbol.sham&&"symbol"==o(Symbol.iterator)})),Fr=le((function(e,t){"use strict"
var r=mr(),n=ar(),a=Dr(),i=yr(),u=Object
t.exports=i?function(e){return"symbol"==o(e)}:function(e){var t=r("Symbol")
return n(t)&&a(t.prototype,u(e))}})),wr=le((function(e,t){"use strict"
var r=String
t.exports=function(e){try{return r(e)}catch(e){return"Object"}}})),Er=le((function(e,t){"use strict"
var r=ar(),n=wr(),a=TypeError
t.exports=function(e){if(r(e))return e
throw new a(n(e)+" is not a function")}})),Cr=le((function(e,t){"use strict"
var r=Er(),n=cr()
t.exports=function(e,t){var a=e[t]
return n(a)?void 0:r(a)}})),xr=le((function(e,t){"use strict"
var r=ir(),n=ar(),a=fr(),o=TypeError
t.exports=function(e,t){var i,u
if("string"===t&&n(i=e.toString)&&!a(u=r(i,e)))return u
if(n(i=e.valueOf)&&!a(u=r(i,e)))return u
if("string"!==t&&n(i=e.toString)&&!a(u=r(i,e)))return u
throw new o("Can't convert object to primitive value")}})),Ar=le((function(e,t){"use strict"
t.exports=!0})),kr=le((function(e,t){"use strict"
var r=Kt(),n=Object.defineProperty
t.exports=function(e,t){try{n(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}})),Nr=le((function(e,t){"use strict"
var r=Kt(),n=kr(),a="__core-js_shared__",o=r[a]||n(a,{})
t.exports=o})),Tr=le((function(e,t){"use strict"
var r=Ar(),n=Nr();(t.exports=function(e,t){return n[e]||(n[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})})),Br=le((function(e,t){"use strict"
var r=dr(),n=Object
t.exports=function(e){return n(r(e))}})),Rr=le((function(e,t){"use strict"
var r=er(),n=Br(),a=r({}.hasOwnProperty)
t.exports=Object.hasOwn||function(e,t){return a(n(e),t)}})),_r=le((function(e,t){"use strict"
var r=er(),n=0,a=Math.random(),o=r(1..toString)
t.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++n+a,36)}})),Sr=le((function(e,t){"use strict"
var r=Kt(),n=Tr(),a=Rr(),o=_r(),i=br(),u=yr(),s=r.Symbol,l=n("wks"),c=u?s.for||s:s&&s.withoutSetter||o
t.exports=function(e){return a(l,e)||(l[e]=i&&a(s,e)?s[e]:c("Symbol."+e)),l[e]}})),Or=le((function(e,t){"use strict"
var r=ir(),n=fr(),a=Fr(),o=Cr(),i=xr(),u=Sr(),s=TypeError,l=u("toPrimitive")
t.exports=function(e,t){if(!n(e)||a(e))return e
var u,c=o(e,l)
if(c){if(void 0===t&&(t="default"),u=r(c,e,t),!n(u)||a(u))return u
throw new s("Can't convert object to primitive value")}return void 0===t&&(t="number"),i(e,t)}})),Mr=le((function(e,t){"use strict"
var r=Or(),n=Fr()
t.exports=function(e){var t=r(e,"string")
return n(t)?t:t+""}})),Ir=le((function(e,t){"use strict"
var r=Kt(),n=fr(),a=r.document,o=n(a)&&n(a.createElement)
t.exports=function(e){return o?a.createElement(e):{}}})),Pr=le((function(e,t){"use strict"
var r=or(),n=Xt(),a=Ir()
t.exports=!r&&!n((function(){return 7!==Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))})),jr=le((function(e){"use strict"
var t=or(),r=ir(),n=ur(),a=sr(),o=pr(),i=Mr(),u=Rr(),s=Pr(),l=Object.getOwnPropertyDescriptor
e.f=t?l:function(e,t){if(e=o(e),t=i(t),s)try{return l(e,t)}catch(e){}if(u(e,t))return a(!r(n.f,e,t),e[t])}})),qr=le((function(e,t){"use strict"
var r=Xt(),n=ar(),a=/#|\.prototype\./,o=function(e,t){var a=u[i(e)]
return a===l||a!==s&&(n(t)?r(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},u=o.data={},s=o.NATIVE="N",l=o.POLYFILL="P"
t.exports=o})),Lr=le((function(e,t){"use strict"
var r=rr(),n=Er(),a=Zt(),o=r(r.bind)
t.exports=function(e,t){return n(e),void 0===t?e:a?o(e,t):function(){return e.apply(t,arguments)}}})),zr=le((function(e,t){"use strict"
var r=or(),n=Xt()
t.exports=r&&n((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))})),Vr=le((function(e,t){"use strict"
var r=fr(),n=String,a=TypeError
t.exports=function(e){if(r(e))return e
throw new a(n(e)+" is not an object")}})),Ur=le((function(e){"use strict"
var t=or(),r=Pr(),n=zr(),a=Vr(),o=Mr(),i=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",c="configurable",d="writable"
e.f=t?n?function(e,t,r){if(a(e),t=o(t),a(r),"function"==typeof e&&"prototype"===t&&"value"in r&&d in r&&!r[d]){var n=s(e,t)
n&&n[d]&&(e[t]=r.value,r={configurable:c in r?r[c]:n[c],enumerable:l in r?r[l]:n[l],writable:!1})}return u(e,t,r)}:u:function(e,t,n){if(a(e),t=o(t),a(n),r)try{return u(e,t,n)}catch(e){}if("get"in n||"set"in n)throw new i("Accessors not supported")
return"value"in n&&(e[t]=n.value),e}})),Hr=le((function(e,t){"use strict"
var r=or(),n=Ur(),a=sr()
t.exports=r?function(e,t,r){return n.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}})),$r=le((function(e,t){"use strict"
var r=Kt(),n=Jt(),a=rr(),i=ar(),u=jr().f,s=qr(),l=hr(),c=Lr(),d=Hr(),p=Rr(),f=function(e){var t=function(r,a,o){if(this instanceof t){switch(arguments.length){case 0:return new e
case 1:return new e(r)
case 2:return new e(r,a)}return new e(r,a,o)}return n(e,this,arguments)}
return t.prototype=e.prototype,t}
t.exports=function(e,t){var n,h,m,D,g,v,b,y,F,w=e.target,E=e.global,C=e.stat,x=e.proto,A=E?r:C?r[w]:(r[w]||{}).prototype,k=E?l:l[w]||d(l,w,{})[w],N=k.prototype
for(D in t)h=!(n=s(E?D:w+(C?".":"#")+D,e.forced))&&A&&p(A,D),v=k[D],h&&(b=e.dontCallGetSet?(F=u(A,D))&&F.value:A[D]),g=h&&b?b:t[D],h&&o(v)==o(g)||(y=e.bind&&h?c(g,r):e.wrap&&h?f(g):x&&i(g)?a(g):g,(e.sham||g&&g.sham||v&&v.sham)&&d(y,"sham",!0),d(k,D,y),x&&(p(l,m=w+"Prototype")||d(l,m,{}),d(l[m],D,g),e.real&&N&&(n||!N[D])&&d(N,D,g)))}})),Gr=le((function(){"use strict"
$r()({target:"Object",stat:!0},{hasOwn:Rr()})})),Wr=le((function(e,t){"use strict"
Gr()
var r=hr()
t.exports=r.Object.hasOwn})),Yr=le((function(e,t){"use strict"
var r=Wr()
t.exports=r})),Qr=le((function(e,t){"use strict"
var r=Yr()
t.exports=r})),Kr=le((function(e,t){"use strict"
var r=Tr(),n=_r(),a=r("keys")
t.exports=function(e){return a[e]||(a[e]=n(e))}})),Xr=le((function(e,t){"use strict"
var r=Xt()
t.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))})),Zr=le((function(e,t){"use strict"
var r=Rr(),n=ar(),a=Br(),o=Kr(),i=Xr(),u=o("IE_PROTO"),s=Object,l=s.prototype
t.exports=i?s.getPrototypeOf:function(e){var t=a(e)
if(r(t,u))return t[u]
var o=t.constructor
return n(o)&&t instanceof o?o.prototype:t instanceof s?l:null}})),Jr=le((function(e,t){"use strict"
var r=Math.ceil,n=Math.floor
t.exports=Math.trunc||function(e){var t=+e
return(t>0?n:r)(t)}})),en=le((function(e,t){"use strict"
var r=Jr()
t.exports=function(e){var t=+e
return t!=t||0===t?0:r(t)}})),tn=le((function(e,t){"use strict"
var r=en(),n=Math.max,a=Math.min
t.exports=function(e,t){var o=r(e)
return o<0?n(o+t,0):a(o,t)}})),rn=le((function(e,t){"use strict"
var r=en(),n=Math.min
t.exports=function(e){return e>0?n(r(e),9007199254740991):0}})),nn=le((function(e,t){"use strict"
var r=rn()
t.exports=function(e){return r(e.length)}})),an=le((function(e,t){"use strict"
var r=pr(),n=tn(),a=nn(),o=function(e){return function(t,o,i){var u,s=r(t),l=a(s),c=n(i,l)
if(e&&o!=o){for(;l>c;)if((u=s[c++])!=u)return!0}else for(;l>c;c++)if((e||c in s)&&s[c]===o)return e||c||0
return!e&&-1}}
t.exports={includes:o(!0),indexOf:o(!1)}})),on=le((function(e,t){"use strict"
t.exports={}})),un=le((function(e,t){"use strict"
var r=er(),n=Rr(),a=pr(),o=an().indexOf,i=on(),u=r([].push)
t.exports=function(e,t){var r,s=a(e),l=0,c=[]
for(r in s)!n(i,r)&&n(s,r)&&u(c,r)
for(;t.length>l;)n(s,r=t[l++])&&(~o(c,r)||u(c,r))
return c}})),sn=le((function(e,t){"use strict"
t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]})),ln=le((function(e,t){"use strict"
var r=un(),n=sn()
t.exports=Object.keys||function(e){return r(e,n)}})),cn=le((function(e,t){"use strict"
var r=or(),n=Xt(),a=er(),o=Zr(),i=ln(),u=pr(),s=a(ur().f),l=a([].push),c=r&&n((function(){var e=Object.create(null)
return e[2]=2,!s(e,2)})),d=function(e){return function(t){for(var n,a=u(t),d=i(a),p=c&&null===o(a),f=d.length,h=0,m=[];f>h;)n=d[h++],r&&!(p?n in a:s(a,n))||l(m,e?[n,a[n]]:a[n])
return m}}
t.exports={entries:d(!0),values:d(!1)}})),dn=le((function(){"use strict"
var e=$r(),t=cn().values
e({target:"Object",stat:!0},{values:function(e){return t(e)}})})),pn=le((function(e,t){"use strict"
dn()
var r=hr()
t.exports=r.Object.values})),fn=le((function(e,t){"use strict"
var r=pn()
t.exports=r})),hn=le((function(e,t){"use strict"
var r=fn()
t.exports=r})),mn=le((function(e,t){"use strict"
var r={}
r[Sr()("toStringTag")]="z",t.exports="[object z]"===String(r)})),Dn=le((function(e,t){"use strict"
var r=mn(),n=ar(),a=tr(),o=Sr()("toStringTag"),i=Object,u="Arguments"===a(function(){return arguments}())
t.exports=r?a:function(e){var t,r,s
return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(e){}}(t=i(e),o))?r:u?a(t):"Object"===(s=a(t))&&n(t.callee)?"Arguments":s}})),gn=le((function(e,t){"use strict"
var r=Dn(),n=String
t.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string")
return n(e)}})),vn=le((function(e,t){"use strict"
var r=er(),n=en(),a=gn(),o=dr(),i=r("".charAt),u=r("".charCodeAt),s=r("".slice),l=function(e){return function(t,r){var l,c,d=a(o(t)),p=n(r),f=d.length
return p<0||p>=f?e?"":void 0:(l=u(d,p))<55296||l>56319||p+1===f||(c=u(d,p+1))<56320||c>57343?e?i(d,p):l:e?s(d,p,p+2):c-56320+(l-55296<<10)+65536}}
t.exports={codeAt:l(!1),charAt:l(!0)}})),bn=le((function(e,t){"use strict"
var r=Kt(),n=ar(),a=r.WeakMap
t.exports=n(a)&&/native code/.test(String(a))})),yn=le((function(e,t){"use strict"
var r,n,a,o,i,u=bn(),s=Kt(),l=fr(),c=Hr(),d=Rr(),p=Nr(),f=Kr(),h=on(),m="Object already initialized",D=s.TypeError,g=s.WeakMap
u||p.state?((o=p.state||(p.state=new g)).get=o.get,o.has=o.has,o.set=o.set,r=function(e,t){if(o.has(e))throw new D(m)
return t.facade=e,o.set(e,t),t},n=function(e){return o.get(e)||{}},a=function(e){return o.has(e)}):(h[i=f("state")]=!0,r=function(e,t){if(d(e,i))throw new D(m)
return t.facade=e,c(e,i,t),t},n=function(e){return d(e,i)?e[i]:{}},a=function(e){return d(e,i)}),t.exports={set:r,get:n,has:a,enforce:function(e){return a(e)?n(e):r(e,{})},getterFor:function(e){return function(t){var r
if(!l(t)||(r=n(t)).type!==e)throw new D("Incompatible receiver, "+e+" required")
return r}}}})),Fn=le((function(e,t){"use strict"
var r=or(),n=Rr(),a=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,i=n(a,"name"),u=i&&"something"===function(){}.name,s=i&&(!r||r&&o(a,"name").configurable)
t.exports={EXISTS:i,PROPER:u,CONFIGURABLE:s}})),wn=le((function(e){"use strict"
var t=or(),r=zr(),n=Ur(),a=Vr(),o=pr(),i=ln()
e.f=t&&!r?Object.defineProperties:function(e,t){a(e)
for(var r,u=o(t),s=i(t),l=s.length,c=0;l>c;)n.f(e,r=s[c++],u[r])
return e}})),En=le((function(e,t){"use strict"
var r=mr()
t.exports=r("document","documentElement")})),Cn=le((function(e,t){"use strict"
var r,n=Vr(),o=wn(),i=sn(),u=on(),s=En(),l=Ir(),c=Kr(),d="prototype",p="script",f=c("IE_PROTO"),h=function(){},m=function(e){return"<"+p+">"+e+"</"+p+">"},D=function(e){e.write(m("")),e.close()
var t=e.parentWindow.Object
return e=null,t},g=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}var e,t,n
g=void 0!==a?a.domain&&r?D(r):(t=l("iframe"),n="java"+p+":",t.style.display="none",s.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F):D(r)
for(var o=i.length;o--;)delete g[d][i[o]]
return g()}
u[f]=!0,t.exports=Object.create||function(e,t){var r
return null!==e?(h[d]=n(e),r=new h,h[d]=null,r[f]=e):r=g(),void 0===t?r:o.f(r,t)}})),xn=le((function(e,t){"use strict"
var r=Hr()
t.exports=function(e,t,n,a){return a&&a.enumerable?e[t]=n:r(e,t,n),e}})),An=le((function(e,t){"use strict"
var r,n,a,o=Xt(),i=ar(),u=fr(),s=Cn(),l=Zr(),c=xn(),d=Sr(),p=Ar(),f=d("iterator"),h=!1;[].keys&&("next"in(a=[].keys())?(n=l(l(a)))!==Object.prototype&&(r=n):h=!0),!u(r)||o((function(){var e={}
return r[f].call(e)!==e}))?r={}:p&&(r=s(r)),i(r[f])||c(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:h}})),kn=le((function(e,t){"use strict"
var r=mn(),n=Dn()
t.exports=r?{}.toString:function(){return"[object "+n(this)+"]"}})),Nn=le((function(e,t){"use strict"
var r=mn(),n=Ur().f,a=Hr(),o=Rr(),i=kn(),u=Sr()("toStringTag")
t.exports=function(e,t,s,l){if(e){var c=s?e:e.prototype
o(c,u)||n(c,u,{configurable:!0,value:t}),l&&!r&&a(c,"toString",i)}}})),Tn=le((function(e,t){"use strict"
t.exports={}})),Bn=le((function(e,t){"use strict"
var r=An().IteratorPrototype,n=Cn(),a=sr(),o=Nn(),i=Tn(),u=function(){return this}
t.exports=function(e,t,s,l){var c=t+" Iterator"
return e.prototype=n(r,{next:a(+!l,s)}),o(e,c,!1,!0),i[c]=u,e}})),Rn=le((function(e,t){"use strict"
var r=er(),n=Er()
t.exports=function(e,t,a){try{return r(n(Object.getOwnPropertyDescriptor(e,t)[a]))}catch(e){}}})),_n=le((function(e,t){"use strict"
var r=ar(),n=String,a=TypeError
t.exports=function(e){if("object"==o(e)||r(e))return e
throw new a("Can't set "+n(e)+" as a prototype")}})),Sn=le((function(e,t){"use strict"
var r=Rn(),n=Vr(),a=_n()
t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,o={}
try{(e=r(Object.prototype,"__proto__","set"))(o,[]),t=o instanceof Array}catch(e){}return function(r,o){return n(r),a(o),t?e(r,o):r.__proto__=o,r}}():void 0)})),On=le((function(e,t){"use strict"
var r=$r(),n=ir(),a=Ar(),o=Fn(),i=ar(),u=Bn(),s=Zr(),l=Sn(),c=Nn(),d=Hr(),p=xn(),f=Sr(),h=Tn(),m=An(),D=o.PROPER,g=o.CONFIGURABLE,v=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,y=f("iterator"),F="keys",w="values",E="entries",C=function(){return this}
t.exports=function(e,t,o,f,m,x,A){u(o,t,f)
var k,N,T,B=function(e){if(e===m&&M)return M
if(!b&&e&&e in S)return S[e]
switch(e){case F:case w:case E:return function(){return new o(this,e)}}return function(){return new o(this)}},R=t+" Iterator",_=!1,S=e.prototype,O=S[y]||S["@@iterator"]||m&&S[m],M=!b&&O||B(m),I="Array"===t&&S.entries||O
if(I&&(k=s(I.call(new e)))!==Object.prototype&&k.next&&(a||s(k)===v||(l?l(k,v):i(k[y])||p(k,y,C)),c(k,R,!0,!0),a&&(h[R]=C)),D&&m===w&&O&&O.name!==w&&(!a&&g?d(S,"name",w):(_=!0,M=function(){return n(O,this)})),m)if(N={values:B(w),keys:x?M:B(F),entries:B(E)},A)for(T in N)(b||_||!(T in S))&&p(S,T,N[T])
else r({target:t,proto:!0,forced:b||_},N)
return a&&!A||S[y]===M||p(S,y,M,{name:m}),h[t]=M,N}})),Mn=le((function(e,t){"use strict"
t.exports=function(e,t){return{value:e,done:t}}})),In=le((function(){"use strict"
var e=vn().charAt,t=gn(),r=yn(),n=On(),a=Mn(),o="String Iterator",i=r.set,u=r.getterFor(o)
n(String,"String",(function(e){i(this,{type:o,string:t(e),index:0})}),(function(){var t,r=u(this),n=r.string,o=r.index
return o>=n.length?a(void 0,!0):(t=e(n,o),r.index+=t.length,a(t,!1))}))})),Pn=le((function(e,t){"use strict"
var r=ir(),n=Vr(),a=Cr()
t.exports=function(e,t,o){var i,u
n(e)
try{if(!(i=a(e,"return"))){if("throw"===t)throw o
return o}i=r(i,e)}catch(e){u=!0,i=e}if("throw"===t)throw o
if(u)throw i
return n(i),o}})),jn=le((function(e,t){"use strict"
var r=Vr(),n=Pn()
t.exports=function(e,t,a,o){try{return o?t(r(a)[0],a[1]):t(a)}catch(t){n(e,"throw",t)}}})),qn=le((function(e,t){"use strict"
var r=Sr(),n=Tn(),a=r("iterator"),o=Array.prototype
t.exports=function(e){return void 0!==e&&(n.Array===e||o[a]===e)}})),Ln=le((function(e,t){"use strict"
var r=er(),n=ar(),a=Nr(),o=r(Function.toString)
n(a.inspectSource)||(a.inspectSource=function(e){return o(e)}),t.exports=a.inspectSource})),zn=le((function(e,t){"use strict"
var r=er(),n=Xt(),a=ar(),o=Dn(),i=mr(),u=Ln(),s=function(){},l=[],c=i("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=r(d.exec),f=!d.test(s),h=function(e){if(!a(e))return!1
try{return c(s,l,e),!0}catch(e){return!1}},m=function(e){if(!a(e))return!1
switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return f||!!p(d,u(e))}catch(e){return!0}}
m.sham=!0,t.exports=!c||n((function(){var e
return h(h.call)||!h(Object)||!h((function(){e=!0}))||e}))?m:h})),Vn=le((function(e,t){"use strict"
var r=Mr(),n=Ur(),a=sr()
t.exports=function(e,t,o){var i=r(t)
i in e?n.f(e,i,a(0,o)):e[i]=o}})),Un=le((function(e,t){"use strict"
var r=Dn(),n=Cr(),a=cr(),o=Tn(),i=Sr()("iterator")
t.exports=function(e){if(!a(e))return n(e,i)||n(e,"@@iterator")||o[r(e)]}})),Hn=le((function(e,t){"use strict"
var r=ir(),n=Er(),a=Vr(),o=wr(),i=Un(),u=TypeError
t.exports=function(e,t){var s=arguments.length<2?i(e):t
if(n(s))return a(r(s,e))
throw new u(o(e)+" is not iterable")}})),$n=le((function(e,t){"use strict"
var r=Lr(),n=ir(),a=Br(),o=jn(),i=qn(),u=zn(),s=nn(),l=Vn(),c=Hn(),d=Un(),p=Array
t.exports=function(e){var t=a(e),f=u(this),h=arguments.length,m=h>1?arguments[1]:void 0,D=void 0!==m
D&&(m=r(m,h>2?arguments[2]:void 0))
var g,v,b,y,F,w,E=d(t),C=0
if(!E||this===p&&i(E))for(g=s(t),v=f?new this(g):p(g);g>C;C++)w=D?m(t[C],C):t[C],l(v,C,w)
else for(F=(y=c(t,E)).next,v=f?new this:[];!(b=n(F,y)).done;C++)w=D?o(y,m,[b.value,C],!0):b.value,l(v,C,w)
return v.length=C,v}})),Gn=le((function(e,t){"use strict"
var r,n,a=Sr()("iterator"),o=!1
try{r=0,(n={next:function(){return{done:!!r++}},return:function(){o=!0}})[a]=function(){return this},Array.from(n,(function(){throw 2}))}catch(e){}t.exports=function(e,t){try{if(!t&&!o)return!1}catch(e){return!1}var r=!1
try{var n={}
n[a]=function(){return{next:function(){return{done:r=!0}}}},e(n)}catch(e){}return r}})),Wn=le((function(){"use strict"
var e=$r(),t=$n()
e({target:"Array",stat:!0,forced:!Gn()((function(e){Array.from(e)}))},{from:t})})),Yn=le((function(e,t){"use strict"
In(),Wn()
var r=hr()
t.exports=r.Array.from})),Qn=le((function(e,t){"use strict"
var r=Yn()
t.exports=r})),Kn=le((function(e,t){"use strict"
var r=Qn()
t.exports=r})),Xn=le((function(e,t){!function(){"use strict"
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
try{return new Function(r.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,r){return e.template(t,null,r)}}()})),Zn={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,selectorSimilarFilterLimit:700,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach((function(e){var t=e.name,r=e.value,n=e.priority,a=e.group
Zn[t]=r,Zn[t+"_PRIO"]=n,Zn[t+"_GROUP"]=a,Zn.results[n]=r,Zn.resultGroups[n]=a,Zn.resultGroupMap[r]=a})),Object.freeze(Zn.results),Object.freeze(Zn.resultGroups),Object.freeze(Zn.resultGroupMap),Object.freeze(Zn)
var Jn=Zn,ea=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},ta=/[\t\r\n\f]/g,ra=W((function e(){$(this,e),this.parent=void 0}),[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var r=" "+e+" "
return(" "+t+" ").replace(ta," ").indexOf(r)>=0}}]),na={}
ce(na,{DqElement:function(){return to},aggregate:function(){return aa},aggregateChecks:function(){return ca},aggregateNodeResults:function(){return pa},aggregateResult:function(){return ha},areStylesSet:function(){return ma},assert:function(){return Da},checkHelper:function(){return ro},clone:function(){return no},closest:function(){return yo},collectResultsFromFrames:function(){return mi},contains:function(){return Di},convertSelector:function(){return go},cssParser:function(){return io},deepMerge:function(){return gi},escapeSelector:function(){return va},extendMetaData:function(){return vi},filterHtmlAttrs:function(){return pm},finalizeRuleResult:function(){return da},findBy:function(){return pi},getAllChecks:function(){return di},getAncestry:function(){return Ga},getBaseLang:function(){return Xf},getCheckMessage:function(){return ih},getCheckOption:function(){return uh},getEnvironmentData:function(){return sh},getFlattenedTree:function(){return Yf},getFrameContexts:function(){return yh},getFriendlyUriEnd:function(){return wa},getNodeAttributes:function(){return Ea},getNodeFromTree:function(){return Za},getPreloadConfig:function(){return im},getRootNode:function(){return wi},getRule:function(){return Fh},getScroll:function(){return Eh},getScrollState:function(){return xh},getSelector:function(){return Ua},getSelectorData:function(){return Pa},getShadowSelector:function(){return Na},getStandards:function(){return Ah},getStyleSheetFactory:function(){return Nh},getXpath:function(){return Ya},injectStyle:function(){return Th},isArrayLike:function(){return Bh},isContextObject:function(){return Sh},isContextProp:function(){return Oh},isContextSpec:function(){return _h},isHidden:function(){return Ph},isHtmlElement:function(){return jh},isLabelledFramesSelector:function(){return Mh},isLabelledShadowDomSelector:function(){return Ih},isNodeInContext:function(){return qh},isShadowRoot:function(){return yi},isValidLang:function(){return Cm},isXHTML:function(){return ka},matchAncestry:function(){return zh},matches:function(){return uo},matchesExpression:function(){return bo},matchesSelector:function(){return Ca},memoize:function(){return Aa},mergeResults:function(){return hi},nodeLookup:function(){return Uh},nodeSerializer:function(){return ci},nodeSorter:function(){return Vh},objectHasOwn:function(){return Rh},parseCrossOriginStylesheet:function(){return Gh},parseSameOriginStylesheet:function(){return Hh},parseStylesheet:function(){return $h},parseTabindex:function(){return Wh},performanceTimer:function(){return Yh},pollyfillElementsFromPoint:function(){return Qh},preload:function(){return am},preloadCssom:function(){return Jh},preloadMedia:function(){return nm},processMessage:function(){return oh},publishMetaData:function(){return um},querySelectorAll:function(){return lm},querySelectorAllFilter:function(){return Zh},queue:function(){return xo},respondable:function(){return ni},ruleShouldRun:function(){return dm},select:function(){return hm},sendCommandToFrame:function(){return oi},setScrollState:function(){return Dm},shadowSelect:function(){return gm},shadowSelectAll:function(){return bm},shouldPreload:function(){return om},toArray:function(){return ga},tokenList:function(){return zf},uniqueArray:function(){return Kh},uuid:function(){return zo},validInputTypes:function(){return Fm},validLangs:function(){return Em}})
var aa=function(e,t,r){t=t.slice(),r&&t.push(r)
var n=t.map((function(t){return e.indexOf(t)})).sort()
return e[n.pop()]},oa=Jn.CANTTELL_PRIO,ia=Jn.FAIL_PRIO,ua=[]
ua[Jn.PASS_PRIO]=!0,ua[Jn.CANTTELL_PRIO]=null,ua[Jn.FAIL_PRIO]=!1
var sa=["any","all","none"]
function la(e,t){return sa.reduce((function(r,n){return r[n]=(e[n]||[]).map((function(e){return t(e,n)})),r}),{})}var ca=function(e){var t=Object.assign({},e)
la(t,(function(e,t){var r=void 0===e.result?-1:ua.indexOf(e.result)
e.priority=-1!==r?r:Jn.CANTTELL_PRIO,"none"===t&&(e.priority===Jn.PASS_PRIO?e.priority=Jn.FAIL_PRIO:e.priority===Jn.FAIL_PRIO&&(e.priority=Jn.PASS_PRIO))}))
var r={all:t.all.reduce((function(e,t){return Math.max(e,t.priority)}),0),none:t.none.reduce((function(e,t){return Math.max(e,t.priority)}),0),any:t.any.reduce((function(e,t){return Math.min(e,t.priority)}),4)%4}
t.priority=Math.max(r.all,r.none,r.any)
var n=[]
return sa.forEach((function(e){t[e]=t[e].filter((function(n){return n.priority===t.priority&&n.priority===r[e]})),t[e].forEach((function(e){return n.push(e.impact)}))})),[oa,ia].includes(t.priority)?t.impact=aa(Jn.impact,n):t.impact=null,la(t,(function(e){delete e.result,delete e.priority})),t.result=Jn.results[t.priority],delete t.priority,t}
function da(e){var t=i._audit.rules.find((function(t){return t.id===e.id}))
return t&&t.impact&&e.nodes.forEach((function(e){["any","all","none"].forEach((function(r){(e[r]||[]).forEach((function(e){e.impact=t.impact}))}))})),Object.assign(e,pa(e.nodes)),delete e.nodes,e}var pa=function(e){var t={}
if((e=e.map((function(e){if(e.any&&e.all&&e.none)return ca(e)
if(Array.isArray(e.node))return da(e)
throw new TypeError("Invalid Result type")})))&&e.length){var r=e.map((function(e){return e.result}))
t.result=aa(Jn.results,r,t.result)}else t.result="inapplicable"
Jn.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){var r=Jn.resultGroupMap[e.result]
t[r].push(e)}))
var n=Jn.FAIL_GROUP
if(0===t[n].length&&(n=Jn.CANTTELL_GROUP),t[n].length>0){var a=t[n].map((function(e){return e.impact}))
t.impact=aa(Jn.impact,a)||null}else t.impact=null
return t}
function fa(e,t,r){var n=Object.assign({},t)
n.nodes=(n[r]||[]).concat(),Jn.resultGroups.forEach((function(e){delete n[e]})),e[r].push(n)}var ha=function(e){var t={}
return Jn.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){e.error?fa(t,e,Jn.CANTTELL_GROUP):e.result===Jn.NA?fa(t,e,Jn.NA_GROUP):Jn.resultGroups.forEach((function(r){Array.isArray(e[r])&&e[r].length>0&&fa(t,e,r)}))})),t},ma=function e(t,n,a){var o=r.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<n.length;++i){var u=n[i]
if(o.getPropertyValue(u.property)===u.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,n,a)},Da=function(e,t){if(!e)throw new Error(t)},ga=function(e){return Array.prototype.slice.call(e)},va=function(e){for(var t,r=String(e),n=r.length,a=-1,o="",i=r.charCodeAt(0);++a<n;)0!=(t=r.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==n&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+r.charAt(a):r.charAt(a):o+="�"
return o}
function ba(e,t){return[e.substring(0,t),e.substring(t)]}function ya(e){return e.replace(/\s+$/,"")}var Fa,wa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var r=t.currentDomain,n=t.maxLength,a=void 0===n?25:n,o=function(e){var t=e,r="",n="",a="",o="",i=""
if(e.includes("#")){var u=V(ba(e,e.indexOf("#")),2)
e=u[0],i=u[1]}if(e.includes("?")){var s=V(ba(e,e.indexOf("?")),2)
e=s[0],o=s[1]}if(e.includes("://")){var l=V(e.split("://"),2)
r=l[0]
var c=V(ba(e=l[1],e.indexOf("/")),2)
n=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=V(ba(e=e.substr(2),e.indexOf("/")),2)
n=d[0],e=d[1]}if("www."===n.substr(0,4)&&(n=n.substr(4)),n&&n.includes(":")){var p=V(ba(n,n.indexOf(":")),2)
n=p[0],a=p[1]}return{original:t,protocol:r,domain:n,port:a,path:e,query:o,hash:i}}(e),i=o.path,u=o.domain,s=o.hash,l=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(s)return l&&(l+s).length<=a?ya(l+s):l.length<2&&s.length>2&&s.length<=a?ya(s):void 0
if(u&&u.length<a&&i.length<=1)return ya(u+i)
if(i==="/"+l&&u&&r&&u!==r&&(u+i).length<=a)return ya(u+i)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}(l)?ya(l):void 0}},Ea=function(e){return e.attributes instanceof r.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},Ca=function(e,t){return Fa&&e[Fa]||(Fa=function(e){var t,r,n=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=n.length
for(t=0;t<a;t++)if(e[r=n[t]])return r}(e)),!!e[Fa]&&e[Fa](t)},xa=de(Vt())
i._memoizedFns=[]
var Aa=function(e){var t=(0,xa.default)(e)
return i._memoizedFns.push(t),t},ka=Aa((function(e){return!(null==e||!e.createElement)&&"A"===e.createElement("A").localName}))
function Na(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var n=t.getRootNode&&t.getRootNode()||a
if(11!==n.nodeType)return e(t,r,n)
for(var o=[];11===n.nodeType;){if(!n.host)return""
o.unshift({elm:t,doc:n}),n=(t=n.host).getRootNode()}return o.unshift({elm:t,doc:n}),o.map((function(t){return e(t.elm,r,t.doc)}))}var Ta=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow","xmlns"],Ba=31,Ra=/([\\"])/g,_a=/(\r\n|\r|\n)/g
function Sa(e){return e.replace(Ra,"\\$1").replace(_a,"\\a ")}function Oa(e,t){var r,n=t.name
if(-1!==n.indexOf("href")||-1!==n.indexOf("src")){var a=wa(e.getAttribute(n))
r=a?va(t.name)+'$="'+Sa(a)+'"':va(t.name)+'="'+Sa(e.getAttribute(n))+'"'}else r=va(n)+'="'+Sa(t.value)+'"'
return r}function Ma(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Ia(e){return!Ta.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<Ba)}function Pa(e){for(var t={classes:{},tags:{},attributes:{}},r=(e=Array.isArray(e)?e:[e]).slice(),n=[],a=function(){var e=r.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach((function(e){var r=va(e)
t.classes[r]?t.classes[r]++:t.classes[r]=1})),a.hasAttributes()&&Array.from(Ea(a)).filter(Ia).forEach((function(e){var r=Oa(a,e)
r&&(t.attributes[r]?t.attributes[r]++:t.attributes[r]=1)}))}for(e.children.length&&(n.push(r),r=e.children.slice());!r.length&&n.length;)r=n.pop()};r.length;)a()
return t}function ja(e,t){var r=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return r.find((function(r){return r!==e&&Ca(r,t)}))?":nth-child("+(1+r.indexOf(e))+")":""}function qa(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,r="#"+va(e.getAttribute("id")||"")
return r.match(/player_uid_/)||1!==t.querySelectorAll(r).length?void 0:r}}function La(e){var t=ka(a)
return va(t?e.localName:e.nodeName.toLowerCase())}function za(e,t){var r,n="",a=function(e,t){var r=[],n=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach((function(t){var o=va(t)
n[o]<a[e.nodeName]&&r.push({name:o,count:n[o],species:"class"})})),r.sort(Ma)}(e,t),o=function(e,t){var r=[],n=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(Ea(e)).filter(Ia).forEach((function(t){var o=Oa(e,t)
o&&n[o]<a[e.nodeName]&&r.push({name:o,count:n[o],species:"attribute"})})),r.sort(Ma)}(e,t)
return a.length&&1===a[0].count?r=[a[0]]:o.length&&1===o[0].count?(r=[o[0]],n=La(e)):((r=a.concat(o)).sort(Ma),(r=r.slice(0,3)).some((function(e){return"class"===e.species}))?r.sort((function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1})):n=La(e)),n+r.reduce((function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e}),"")}function Va(e,t,r){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var n,a,o=t.toRoot,u=void 0!==o&&o
do{var s=qa(e)
s||(s=za(e,i._selectorData),s+=ja(e,s)),n=n?s+" > "+n:s,a=!a||a.length>Jn.selectorSimilarFilterLimit?Ha(r,n):a.filter((function(e){return Ca(e,n)})),e=e.parentElement}while((a.length>1||u)&&e&&11!==e.nodeType)
return 1===a.length?n:-1!==n.indexOf(" > ")?":root"+n.substring(n.indexOf(" > ")):":root"}var Ua=Aa((function(e,t){return Na(Va,e,t)})),Ha=Aa((function(e,t){return Array.from(e.querySelectorAll(t))}))
function $a(e){var t=e.nodeName.toLowerCase(),r=e.parentElement,n=e.parentNode,a=""
if("head"!==t&&"body"!==t&&(null==n?void 0:n.children.length)>1){var o=Array.prototype.indexOf.call(n.children,e)+1
a=":nth-child(".concat(o,")")}return r?$a(r)+" > "+t+a:t+a}function Ga(e,t){return Na($a,e,t)}function Wa(e,t){var r,n
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=Wa(e.parentNode,t)),e.previousSibling){n=1,r=e.previousSibling
do{1===r.nodeType&&r.nodeName===e.nodeName&&n++,r=r.previousSibling}while(r)
1===n&&(n=null)}else if(e.nextSibling){r=e.nextSibling
do{1===r.nodeType&&r.nodeName===e.nodeName?(n=1,r=null):(n=null,r=r.previousSibling)}while(r)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&va(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),n>1&&(a.count=n),t.push(a)}return t}var Ya=function(e){return Wa(e).reduce((function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")}),"")},Qa={},Ka={set:function(e,t){!function(e){Da("string"==typeof e,"key must be a string, "+o(e)+" given"),Da(""!==e,"key must not be empty")}(e),Qa[e]=t},get:function(e,t){if(function(e){Da("function"==typeof e||void 0===e,"creator must be a function or undefined, "+o(e)+" given")}(t),e in Qa)return Qa[e]
if("function"==typeof t){var r=t()
return Da(void 0!==r,"Cache creator function should not return undefined"),this.set(e,r),Qa[e]}},clear:function(){Qa={}}},Xa=Ka,Za=function(e,t){var r=t||e
return Xa.get("nodeMap")?Xa.get("nodeMap").get(r):null},Ja="DqElm.RunOptions",eo=Aa((function(e,t,n){var a,o,u,s,l,c
return null!==(a=t)&&void 0!==a||(t=null),null!==(o=n)&&void 0!==o||(n={}),t||(t=null!==(l=Xa.get(Ja))&&void 0!==l?l:{}),this.spec=n,e instanceof ra?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=Za(e)),this.fromFrame=(null===(u=this.spec.selector)||void 0===u?void 0:u.length)>1,this._includeElementInJson=t.elementRef,t.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(s=this._virtualNode)||void 0===s?void 0:s.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(c=this.spec.source)&&void 0!==c?c:function(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof r.XMLSerializer||(t=(new r.XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var r=e.indexOf(">")
e=e.substring(0,r+1)}return e}(t||"")}(this._element)),this}))
eo.prototype={get selector(){return this.spec.selector||[Ua(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[Ga(this.element)]},get xpath(){return this.spec.xpath||[Ya(this.element)]},get element(){return this._element},toJSON:function(){var e={selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes,fromFrame:this.fromFrame}
return this._includeElementInJson&&(e.element=this._element),e}},eo.fromFrame=function(e,t,r){var n=eo.mergeSpecs(e,r)
return new eo(r.element,t,n)},eo.mergeSpecs=function(e,t){return z({},e,{selector:[].concat(q(t.selector),q(e.selector)),ancestry:[].concat(q(t.ancestry),q(e.ancestry)),xpath:[].concat(q(t.xpath),q(e.xpath)),nodeIndexes:[].concat(q(t.nodeIndexes),q(e.nodeIndexes)),fromFrame:!0})},eo.setRunOptions=function(e){var t=e.elementRef,r=e.absolutePaths
Xa.set(Ja,{elementRef:t,absolutePaths:r})}
var to=eo,ro=function(e,t,n,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,n(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(t){r.Node&&(t=t instanceof r.Node||t instanceof ra?[t]:ga(t),e.relatedNodes=[],t.forEach((function(t){if(t instanceof ra&&(t=t.actualNode),t instanceof r.Node){var n=new to(t)
e.relatedNodes.push(n)}})))}}}
function no(e){return ao(e,new Map)}function ao(e,t){var n,a
if(null===e||"object"!==o(e))return e
if(null!==(n=r)&&void 0!==n&&n.Node&&e instanceof r.Node||null!==(a=r)&&void 0!==a&&a.HTMLCollection&&e instanceof r.HTMLCollection||"nodeName"in e&&"nodeType"in e&&"ownerDocument"in e)return e
if(t.has(e))return t.get(e)
if(Array.isArray(e)){var i=[]
return t.set(e,i),e.forEach((function(e){i.push(ao(e,t))})),i}var u={}
for(var s in t.set(e,u),e)u[s]=ao(e[s],t)
return u}var oo=new(de(Gt()).CssSelectorParser)
oo.registerSelectorPseudos("not"),oo.registerSelectorPseudos("is"),oo.registerNestingOperators(">"),oo.registerAttrEqualityMods("^","$","*","~")
var io=oo
function uo(e,t){return go(t).some((function(t){return bo(e,t)}))}function so(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every((function(t){return e.hasClass(t.value)}))}(e,t)&&function(e,t){return!t.attributes||t.attributes.every((function(t){var r=e.attr(t.key)
return null!==r&&t.test(r)}))}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(r=e,!((n=t).pseudos&&!n.pseudos.every((function(e){if("not"===e.name)return!e.expressions.some((function(e){return bo(r,e)}))
if("is"===e.name)return e.expressions.some((function(e){return bo(r,e)}))
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")}))))
var r,n}var lo,co=(lo=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(lo,"\\")}),po=/\\/g
function fo(e){if(e)return e.map((function(e){var t,r,n=e.name.replace(po,""),a=(e.value||"").replace(po,"")
switch(e.operator){case"^=":r=new RegExp("^"+co(a))
break
case"$=":r=new RegExp(co(a)+"$")
break
case"~=":r=new RegExp("(^|\\s)"+co(a)+"(\\s|$)")
break
case"|=":r=new RegExp("^"+co(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&r.test(e)}),{key:n,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}}))}function ho(e){if(e)return e.map((function(e){return{value:e=e.replace(po,""),regexp:new RegExp("(^|\\s)"+co(e)+"(\\s|$)")}}))}function mo(e){if(e)return e.map((function(e){var t
return["is","not"].includes(e.name)&&(t=Do(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}}))}function Do(e){return e.map((function(e){for(var t=[],r=e.rule;r;)t.push({tag:r.tagName?r.tagName.toLowerCase():"*",combinator:r.nestingOperator?r.nestingOperator:" ",id:r.id,attributes:fo(r.attrs),classes:ho(r.classNames),pseudos:mo(r.pseudos)}),r=r.rule
return t}))}function go(e){var t=io.parse(e)
return Do(t=t.selectors?t.selectors:[t])}function vo(e,t,r,n){if(!e)return!1
for(var a=Array.isArray(t)?t[r]:t,o=so(e,a);!o&&n&&e.parent;)o=so(e=e.parent,a)
if(r>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&vo(e.parent,t,r-1," "===a.combinator)}return o}function bo(e,t,r){return vo(e,t,t.length-1,r)}var yo=function(e,t){for(;e;){if(uo(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function Fo(){}function wo(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var Eo,Co,xo=function(){var e,t=[],r=0,n=0,a=Fo,i=!1,u=function(t){e=t,setTimeout((function(){null!=e&&ea("Uncaught error (of queue)",e)}),1)},s=u
function l(e){return function(r){t[e]=r,(n-=1)||a===Fo||(i=!0,a(t))}}function c(e){return a=Fo,s(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var u=a
a=function(e,t){u.then(e).catch(t)}}if(wo(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++n,function(){for(var e=t.length;r<e;r++){var n=t[r]
try{n.call(null,l(r),c)}catch(e){c(e)}}}(),d}},then:function(r){if(wo(r),a!==Fo)throw new Error("queue `then` already set")
return e||(a=r,n||(i=!0,a(t))),d},catch:function(t){if(wo(t),s!==u)throw new Error("queue `catch` already set")
return e?(t(e),e=null):s=t,d},abort:c}
return d},Ao=r.crypto||r.msCrypto
if(!Co&&Ao&&Ao.getRandomValues){var ko=new Uint8Array(16)
Co=function(){return Ao.getRandomValues(ko),ko}}if(!Co){var No=new Array(16)
Co=function(){for(var e,t=0;t<16;t++)3&t||(e=4294967296*Math.random()),No[t]=e>>>((3&t)<<3)&255
return No}}for(var To="function"==typeof r.Buffer?r.Buffer:Array,Bo=[],Ro={},_o=0;_o<256;_o++)Bo[_o]=(_o+256).toString(16).substr(1),Ro[Bo[_o]]=_o
function So(e,t){var r=t||0,n=Bo
return n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+"-"+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]+n[e[r++]]}var Oo=Co(),Mo=[1|Oo[0],Oo[1],Oo[2],Oo[3],Oo[4],Oo[5]],Io=16383&(Oo[6]<<8|Oo[7]),Po=0,jo=0
function qo(e,t,r){var n=t&&r||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Io,i=null!=e.msecs?e.msecs:(new Date).getTime(),u=null!=e.nsecs?e.nsecs:jo+1,s=i-Po+(u-jo)/1e4
if(s<0&&null==e.clockseq&&(o=o+1&16383),(s<0||i>Po)&&null==e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
Po=i,jo=u,Io=o
var l=(1e4*(268435455&(i+=122192928e5))+u)%4294967296
a[n++]=l>>>24&255,a[n++]=l>>>16&255,a[n++]=l>>>8&255,a[n++]=255&l
var c=i/4294967296*1e4&268435455
a[n++]=c>>>8&255,a[n++]=255&c,a[n++]=c>>>24&15|16,a[n++]=c>>>16&255,a[n++]=o>>>8|128,a[n++]=255&o
for(var d=e.node||Mo,p=0;p<6;p++)a[n+p]=d[p]
return t||So(a)}function Lo(e,t,r){var n=t&&r||0
"string"==typeof e&&(t="binary"==e?new To(16):null,e=null)
var a=(e=e||{}).random||(e.rng||Co)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[n+o]=a[o]
return t||So(a)}(Eo=Lo).v1=qo,Eo.v4=Lo,Eo.parse=function(e,t,r){var n=t&&r||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[n+a++]=Ro[e])}));a<16;)t[n+a++]=0
return t},Eo.unparse=So,Eo.BufferClass=To,i._uuid=qo()
var zo=Lo,Vo=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function Uo(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}function Ho(e){Go(e),Da(r.parent===e,"Source of the response must be the parent window.")}function $o(e){Go(e),Da(e.parent===r,"Respondable target must be a frame in the current window")}function Go(e){Da(r!==e,"Messages can not be sent to the same window.")}var Wo={},Yo=[]
function Qo(){var e="".concat(Lo(),":").concat(Lo())
return Yo.includes(e)?Qo():(Yo.push(e),e)}function Ko(e,t,r,n){if(r?Ho(e):$o(e),t.message instanceof Error&&!r)return i.log(t.message),!1
var a=function(e){var t=e.topic,r=e.channelId,n=e.message,a={channelId:r,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:Uo()}
return n instanceof Error?a.error={name:n.name,message:n.message,stack:n.stack}:a.payload=n,JSON.stringify(a)}(z({messageId:Qo()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||("function"==typeof n&&function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
Da(!Wo[e],"A replyHandler already exists for this message channel."),Wo[e]={replyHandler:t,sendToParent:r}}(t.channelId,n,r),o.forEach((function(t){try{e.postMessage(a,t)}catch(r){if(r instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw r}})),0))}function Xo(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(n,a,o){Ko(e,{channelId:t,message:n,keepalive:a},r,o)}}var Zo,Jo,ei={open:function(e){if("function"==typeof r.addEventListener){var t=function(t){(function(e,t){var n,a=e.origin,u=e.data,s=e.source
try{var l=function(e){var t,n,a,i,u
try{t=JSON.parse(e)}catch(e){return}if(null!==(s=t)&&"object"===o(s)&&"string"==typeof s.channelId&&s.source===Uo()){var s,l=t,c=l.topic,d=l.channelId,p=l.messageId,f=l.keepalive
return{topic:c,message:"object"===o(t.error)?(n=t.error,a=n.message||"Unknown error occurred",i=Vo.includes(n.name)?n.name:"Error",u=r[i]||Error,n.stack&&(a+="\n"+n.stack.replace(n.message,"")),new u(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(u)||{},c=l.channelId,d=l.message,p=l.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(n=p,Yo.includes(n)||(Yo.push(n),0)))return
if(d instanceof Error&&s.parent!==r)return i.log(d),!1
try{if(l.topic){var f=Xo(s,c)
Ho(s),t(l,f)}else!function(e,t){var r=t.channelId,n=t.message,a=t.keepalive,o=function(e){return Wo[e]}(r)||{},u=o.replyHandler,s=o.sendToParent
if(u){s?Ho(e):$o(e)
var l=Xo(e,r,s)
!a&&r&&function(e){delete Wo[e]}(r)
try{u(n,a,l)}catch(e){i.log(e),l(e,a)}}}(s,l)}catch(e){!function(e,t,n){if(!e.parent!==r)return i.log(t)
try{Ko(e,{topic:null,channelId:n,message:t,messageId:Qo(),keepalive:!0},!0)}catch(e){return i.log(e)}}(s,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return r.addEventListener("message",t,!1),function(){r.removeEventListener("message",t,!1)}}},post:function(e,t,n){return"function"==typeof r.addEventListener&&Ko(e,t,!1,n)}}
function ti(e){e.updateMessenger(ei)}var ri={}
function ni(e,t,r,n,a){var o={topic:t,message:r,channelId:"".concat(Lo(),":").concat(Lo()),keepalive:n}
return Jo(e,o,a)}function ai(e,t){var r=e.topic,n=e.message,a=e.keepalive,o=ri[r]
if(o)try{o(n,a,t)}catch(e){i.log(e),t(e,a)}}function oi(e,t,r,n){var a,o,i=e.contentWindow,u=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return ea("Frame does not have a content window",e),void r(null)
if(0!==u){var s=setTimeout((function(){s=setTimeout((function(){t.debug?n(ui("No response from frame",e)):r(null)}),0)}),u)
ni(i,"axe.ping",null,void 0,(function(){clearTimeout(s),ii(e,t,r,n)}))}else ii(e,t,r,n)}function ii(e,t,r,n){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,u=e.contentWindow,s=setTimeout((function(){n(ui("Axe in frame timed out",e))}),i)
ni(u,"axe.start",t,void 0,(function(e){clearTimeout(s),e instanceof Error==0?r(e):n(e)}))}function ui(e,t){var r
return i._tree&&(r=Ua(t)),new Error(e+": "+(r||t))}ni.updateMessenger=function(e){var t=e.open,r=e.post
Da("function"==typeof t,"open callback must be a function"),Da("function"==typeof r,"post callback must be a function"),Zo&&Zo()
var n=t(ai)
n?(Da("function"==typeof n,"open callback must return a cleanup function"),Zo=n):Zo=null,Jo=r},ni.subscribe=function(e,t){Da("function"==typeof t,"Subscriber callback must be a function"),Da(!ri[e],"Topic ".concat(e," is already registered to.")),ri[e]=t},ni.isInFrame=function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:r).frameElement},ti(ni)
var si=null,li={update:function(e){Da("object"===o(e),"serializer must be an object"),si=e},toSpec:function(e){return li.dqElmToSpec(new to(e))},dqElmToSpec:function(e,t){var r
return e instanceof to==0?e:(t&&(e=function(e,t){var r=e.fromFrame,n=t.ancestry,a=t.xpath,o=!1!==t.selectors||r
return(e=new to(e.element,t,{source:e.source,nodeIndexes:e.nodeIndexes,selector:o?e.selector:[":root"],ancestry:n?e.ancestry:[":root"],xpath:a?e.xpath:"/"})).fromFrame=r,e}(e,t)),"function"==typeof(null===(r=si)||void 0===r?void 0:r.toSpec)?si.toSpec(e):e.toJSON())},mergeSpecs:function(e,t){var r
return"function"==typeof(null===(r=si)||void 0===r?void 0:r.mergeSpecs)?si.mergeSpecs(e,t):to.mergeSpecs(e,t)},mapRawResults:function(e){return e.map((function(e){return z({},e,{nodes:li.mapRawNodeResults(e.nodes)})}))},mapRawNodeResults:function(e){return null==e?void 0:e.map((function(e){var t=e.node,r=j(e,s)
r.node=li.dqElmToSpec(t)
for(var n=0,a=["any","all","none"];n<a.length;n++){var o=a[n]
r[o]=r[o].map((function(e){var t=e.relatedNodes,r=j(e,l)
return r.relatedNodes=t.map(li.dqElmToSpec),r}))}return r}))}},ci=li,di=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},pi=function(e,t,r){if(Array.isArray(e))return e.find((function(e){return null!==e&&"object"===o(e)&&Object.hasOwn(e,t)&&e[t]===r}))}
function fi(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),n=0;n<r;n++){var a=null==e?void 0:e[n],o=null==t?void 0:t[n]
if("number"!=typeof a||isNaN(a))return 0===n?1:-1
if("number"!=typeof o||isNaN(o))return 0===n?-1:1
if(a!==o)return a-o}return 0}var hi=function(e,t){var r=[]
return e.forEach((function(e){var t,n=(t=e)&&t.results?Array.isArray(t.results)?t.results.length?t.results:null:[t.results]:null
if(n&&n.length){var a=function(e){return e.frameElement?ci.toSpec(e.frameElement):e.frameSpec?e.frameSpec:null}(e)
n.forEach((function(e){e.nodes&&a&&function(e,t,r){e.forEach((function(e){e.node=ci.mergeSpecs(e.node,r),di(e).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return ci.mergeSpecs(e,r)}))}))}))}(e.nodes,0,a)
var t=pi(r,"id",e.id)
t?e.nodes.length&&function(e,t){for(var r,n=t[0].node,a=0;a<e.length;a++){var o=fi((r=e[a].node).nodeIndexes,n.nodeIndexes)
if(o>0||0===o&&n.selector.length<r.selector.length)return void e.splice.apply(e,[a,0].concat(q(t)))}e.push.apply(e,q(t))}(t.nodes,e.nodes):r.push(e)}))}})),r.forEach((function(e){e.nodes&&e.nodes.sort((function(e,t){return fi(e.node.nodeIndexes,t.node.nodeIndexes)}))})),r}
function mi(e,t,r,n,a,o){t=z({},t,{elementRef:!1})
var i=xo()
e.frames.forEach((function(e){var a=e.node,o=j(e,c)
i.defer((function(e,i){oi(a,{options:t,command:r,parameter:n,context:o},(function(t){return e(t?{results:t,frameElement:a}:null)}),i)}))})),i.then((function(e){a(hi(e,t))})).catch(o)}function Di(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var gi=function e(){for(var t={},r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a]
return n.forEach((function(r){if(r&&"object"===o(r)&&!Array.isArray(r))for(var n=0,a=Object.keys(r);n<a.length;n++){var i=a[n]
!t.hasOwnProperty(i)||"object"!==o(r[i])||Array.isArray(t[i])?t[i]=r[i]:t[i]=e(t[i],r[i])}})),t},vi=function(e,t){Object.assign(e,t),Object.keys(t).filter((function(e){return"function"==typeof t[e]})).forEach((function(r){e[r]=null
try{e[r]=t[r](e)}catch(e){}}))},bi=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],yi=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(bi.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},Fi={}
ce(Fi,{createGrid:function(){return yu},findElmsInContext:function(){return Ci},findNearbyElms:function(){return Tu},findUp:function(){return Ai},findUpVirtual:function(){return xi},focusDisabled:function(){return Iu},getComposedParent:function(){return Wi},getElementByReference:function(){return Lu},getElementCoordinates:function(){return Qi},getElementStack:function(){return $u},getModalDialog:function(){return Ru},getOverflowHiddenAncestors:function(){return Ti},getRootNode:function(){return Ei},getScrollOffset:function(){return Yi},getTabbableElements:function(){return Gu},getTargetRects:function(){return Ku},getTargetSize:function(){return Xu},getTextElementStack:function(){return Ml},getViewportSize:function(){return Ki},getVisibleChildTextRects:function(){return Sl},hasContent:function(){return zl},hasContentVirtual:function(){return Ll},hasLangText:function(){return Vl},idrefs:function(){return Ju},insertedIntoFocusOrder:function(){return Ul},isCurrentPageLink:function(){return qu},isFocusable:function(){return Yu},isHTML5:function(){return Wl},isHiddenForEveryone:function(){return Hi},isHiddenWithCSS:function(){return Gl},isInTabOrder:function(){return Qu},isInTextBlock:function(){return Zl},isInert:function(){return _u},isModalOpen:function(){return Jl},isMultiline:function(){return ec},isNativelyFocusable:function(){return Wu},isNode:function(){return tc},isOffscreen:function(){return Xi},isOpaque:function(){return wf},isSkipLink:function(){return Ef},isVisible:function(){return kf},isVisibleOnScreen:function(){return Ji},isVisibleToScreenReaders:function(){return Qs},isVisualContent:function(){return Pl},reduceToElementsBelowFloating:function(){return Nf},shadowElementsFromPoint:function(){return _f},urlPropsFromAttribute:function(){return If},visuallyContains:function(){return Tf},visuallyOverlaps:function(){return Pf},visuallySort:function(){return zu}})
var wi=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},Ei=wi,Ci=function(e){var t,r=e.context,n=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,u=va(n)
return t=9===r.nodeType||11===r.nodeType?r:Ei(r),Array.from(t.querySelectorAll(i+"["+a+"="+u+"]"))},xi=function(e,t){var r
if(r=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(r=r.assignedSlot?r.assignedSlot:r.parentNode)&&11===r.nodeType&&(r=r.host)}while(r&&!Ca(r,t)&&r!==a.documentElement)
return r&&Ca(r,t)?r:null},Ai=function(e,t){return xi(Za(e),t)}
function ki(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var Ni=Aa((function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(Ni(e.parent))):t})),Ti=Ni,Bi=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Ri=/(\w+)\((\d+)/
function _i(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function Si(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function Oi(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function Mi(e){return!!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function Ii(e){return"true"===e.attr("aria-hidden")}function Pi(e){return"0"===e.getComputedStylePropertyValue("opacity")}function ji(e){var t=Eh(e.actualNode),r=parseInt(e.getComputedStylePropertyValue("height")),n=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===r||0===n)}function qi(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=e.getComputedStylePropertyValue("position")
if("fixed"===t)return!1
var r=Ti(e)
if(!r.length)return!1
var n=e.boundingClientRect
return r.some((function(r){if("absolute"===t&&!function(e,t){for(var r=e.parent;r&&r!==t;){if(["relative","sticky"].includes(r.getComputedStylePropertyValue("position")))return!0
r=r.parent}return!1}(e,r)&&"static"===r.getComputedStylePropertyValue("position"))return!1
var a=r.boundingClientRect
return a.width<2||a.height<2||!ki(n,a)}))}function Li(e){var t=e.getComputedStylePropertyValue("clip").match(Bi),r=e.getComputedStylePropertyValue("clip-path").match(Ri)
if(t&&5===t.length){var n=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(n))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(r){var a=r[1],o=parseInt(r[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function zi(e,t){var r=yo(e,"map")
if(!r)return!0
var n=r.attr("name")
if(!n)return!0
var a=wi(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=lm(i._tree,'img[usemap="#'.concat(va(n),'"]'))
return!o||!o.length||o.some((function(e){return!t(e)}))}function Vi(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find((function(e){return"summary"===e.props.nodeName}))!==e)&&!e.parent.hasAttr("open")}var Ui=[Si,Oi,Mi,Vi]
function Hi(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.skipAncestors,n=t.isAncestor,a=void 0!==n&&n
return e=Uh(e).vNode,r?$i(e,a):Gi(e,a)}var $i=Aa((function(e,t){return!(!_i(e)&&(!e.actualNode||!Ui.some((function(r){return r(e,{isAncestor:t})}))&&e.actualNode.isConnected))})),Gi=Aa((function(e,t){return!!$i(e,t)||!!e.parent&&Gi(e.parent,!0)})),Wi=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var r=t.parentNode
if(1===r.nodeType)return r
if(r.host)return r.host}return null},Yi=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,r=e.body
return{left:t&&t.scrollLeft||r&&r.scrollLeft||0,top:t&&t.scrollTop||r&&r.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},Qi=function(e){var t=Yi(a),r=t.left,n=t.top,o=e.getBoundingClientRect()
return{top:o.top+n,right:o.right+r,bottom:o.bottom+n,left:o.left+r,width:o.right-o.left,height:o.bottom-o.top}},Ki=function(e){var t=e.document,r=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(r)return{width:r.clientWidth,height:r.clientHeight}
var n=t.body
return{width:n.clientWidth,height:n.clientHeight}},Xi=function(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=Uh(e).domNode
if(t){var n,o=a.documentElement,i=r.getComputedStyle(t),u=r.getComputedStyle(a.body||o).getPropertyValue("direction"),s=Qi(t)
if(s.bottom<0&&(function(e,t){for(e=Wi(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Wi(e)}return!0}(t,s.bottom)||"absolute"===i.position))return!0
if(0===s.left&&0===s.right)return!1
if("ltr"===u){if(s.right<=0)return!0}else if(n=Math.max(o.scrollWidth,Ki(r).width),s.left>=n)return!0
return!1}},Zi=[Pi,ji,qi,Li,Xi]
function Ji(e){return e=Uh(e).vNode,eu(e)}var eu=Aa((function(e,t){return e.actualNode&&"area"===e.props.nodeName?!zi(e,eu):!Hi(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!Zi.some((function(r){return r(e,{isAncestor:t})})))&&(!e.parent||eu(e.parent,!0))}))
function tu(e,t){var n=Math.min(e.top,t.top),a=Math.max(e.right,t.right),o=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left)
return new r.DOMRect(i,n,a-i,o-n)}function ru(e,t){var r=e.x,n=e.y,a=t.top,o=t.right,i=t.bottom,u=t.left
return n>=a&&r<=o&&n<=i&&r>=u}var nu={}
function au(e,t){var n=Math.max(e.left,t.left),a=Math.min(e.right,t.right),o=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom)
return n>=a||o>=i?null:new r.DOMRect(n,o,a-n,i-o)}function ou(e){var t=e.left,n=e.top,a=e.width,o=e.height
return new r.DOMPoint(t+a/2,n+o/2)}ce(nu,{getBoundingRect:function(){return tu},getIntersectionRect:function(){return au},getOffset:function(){return su},getRectCenter:function(){return ou},hasVisualOverlap:function(){return du},isPointInRect:function(){return ru},rectHasMinimumSize:function(){return uu},rectsOverlap:function(){return ki},splitRects:function(){return pu}})
var iu=.05
function uu(e,t){var r=t.width,n=t.height
return r+iu>=e&&n+iu>=e}function su(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n=Ku(e),a=Ku(t)
if(!n.length||!a.length)return null
var o,i=ou(n.reduce(tu)),u=1/0,s=Q(a)
try{for(s.s();!(o=s.n()).done;){var l=o.value
if(ru(i,l))return 0
var c=cu(i,lu(i,l))
u=Math.min(u,c)}}catch(e){s.e(e)}finally{s.f()}if(uu(2*r,Xu(t)))return u
var d=cu(i,ou(a.reduce(tu)))-r
return Math.max(0,Math.min(u,d))}function lu(e,t){return{x:e.x<t.left?t.left:e.x>t.right?t.right:e.x,y:e.y<t.top?t.top:e.y>t.bottom?t.bottom:e.y}}function cu(e,t){return Math.hypot(e.x-t.x,e.y-t.y)}function du(e,t){var r=e.boundingClientRect,n=t.boundingClientRect
return!(r.left>=n.right||r.right<=n.left||r.top>=n.bottom||r.bottom<=n.top)&&zu(e,t)>0}function pu(e,t){var r,n=[e],a=Q(t)
try{var o=function(){var e=r.value
if((n=n.reduce((function(t,r){return t.concat(function(e,t){var r,n,a=e.top,o=e.left,i=e.bottom,u=e.right,s=a<t.bottom&&i>t.top,l=o<t.right&&u>t.left,c=[]
if(fu(t.top,a,i)&&l&&c.push({top:a,left:o,bottom:t.top,right:u}),fu(t.right,o,u)&&s&&c.push({top:a,left:t.right,bottom:i,right:u}),fu(t.bottom,a,i)&&l&&c.push({top:t.bottom,right:u,bottom:i,left:o}),fu(t.left,o,u)&&s&&c.push({top:a,left:o,bottom:i,right:t.left}),0===c.length){if(n=t,(r=e).top>=n.top&&r.left>=n.left&&r.bottom<=n.bottom&&r.right<=n.right)return[]
c.push(e)}return c.map(hu)}(r,e))}),[])).length>4e3)throw new Error("splitRects: Too many rects")}
for(a.s();!(r=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return n}var fu=function(e,t,r){return e>t&&e<r}
function hu(e){return new r.DOMRect(e.left,e.top,e.right-e.left,e.bottom-e.top)}var mu=0,Du=.1,gu=.2,vu=.3,bu=0
function yu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(Xa.get("gridCreated")&&!n)return Jn.gridSize
if(Xa.set("gridCreated",!0),!n){var o,u=Za(a.documentElement)
if(u||(u=new Lf(a.documentElement)),bu=0,u._stackingOrder=[Cu(mu,bu++,null)],null!==(o=t)&&void 0!==o||(t=new ku),Au(t,u),Eh(u.actualNode)){var s=new ku(u)
u._subGrid=s}}for(var l=a.createTreeWalker(e,r.NodeFilter.SHOW_ELEMENT,null,!1),c=n?l.nextNode():l.currentNode;c;){var d=Za(c)
d&&d.parent?n=d.parent:c.assignedSlot?n=Za(c.assignedSlot):c.parentElement?n=Za(c.parentElement):c.parentNode&&Za(c.parentNode)&&(n=Za(c.parentNode)),d||(d=new i.VirtualNode(c,n)),d._stackingOrder=Eu(d,n,bu++)
var p=xu(d,n),f=p?p._subGrid:t
if(Eh(d.actualNode)){var h=new ku(d)
d._subGrid=h}var m=d.boundingClientRect
0!==m.width&&0!==m.height&&Ji(c)&&Au(f,d),yi(c)&&yu(c.shadowRoot,f,d),c=l.nextNode()}return Jn.gridSize}function Fu(e,t){var r=e.getComputedStylePropertyValue("position"),n=e.getComputedStylePropertyValue("z-index")
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
return!!["layout","paint","strict","content"].includes(l)||!("auto"===n||!wu(t))}function wu(e){if(!e)return!1
var t=e.getComputedStylePropertyValue("display")
return["flex","inline-flex","grid","inline-grid"].includes(t)}function Eu(e,t,r){var n=t._stackingOrder.slice()
if(Fu(e,t)){var a=n.findIndex((function(e){var t=e.stackLevel
return[mu,gu,vu].includes(t)}));-1!==a&&n.splice(a,n.length-a)}var o=function(e,t){var r=function(e,t){return"static"!==e.getComputedStylePropertyValue("position")||wu(t)?e.getComputedStylePropertyValue("z-index"):"auto"}(e,t)
return["auto","0"].includes(r)?"static"!==e.getComputedStylePropertyValue("position")?vu:"none"!==e.getComputedStylePropertyValue("float")?gu:Fu(e,t)?Du:null:parseInt(r)}(e,t)
return null!==o&&n.push(Cu(o,r,e)),n}function Cu(e,t,r){return{stackLevel:e,treeOrder:t,vNode:r}}function xu(e,t){for(var r=null,n=[e];t;){if(Eh(t.actualNode)){r=t
break}if(t._scrollRegionParent){r=t._scrollRegionParent
break}n.push(t),t=Za(t.actualNode.parentElement||t.actualNode.parentNode)}return n.forEach((function(e){return e._scrollRegionParent=r})),r}function Au(e,t){var r=Ti(t)
t.clientRects.forEach((function(n){var a,o=r.reduce((function(e,t){return e&&au(e,t.boundingClientRect)}),n)
if(o){null!==(a=t._grid)&&void 0!==a||(t._grid=e)
var i=e.getGridPositionOfRect(o)
e.loopGridPosition(i,(function(e){e.includes(t)||e.push(t)}))}}))}var ku=W((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
$(this,e),this.container=t,this.cells=[]}),[{key:"toGridIndex",value:function(e){return Math.floor(e/Jn.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,r,n=e.x,a=e.y
Da(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),i=this.toGridIndex(n)
Da(ru({y:o,x:i},this.boundaries),"Element midpoint exceeds the grid bounds")
var u=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(r=u[i-u._negativeIndex])&&void 0!==r?r:[]}},{key:"loopGridPosition",value:function(e,t){var r=e,n=r.left,a=r.right,o=r.top,i=r.bottom
this.boundaries&&(e=tu(this.boundaries,e)),this.boundaries=e,Nu(this.cells,o,i,(function(e,r){Nu(e,n,a,(function(e,n){t(e,{row:r,col:n})}))}))}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,n=e.right,a=e.bottom,o=e.left,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-i),n=this.toGridIndex(n+i-1),a=this.toGridIndex(a+i-1),o=this.toGridIndex(o-i),new r.DOMRect(o,t,n-o,a-t)}}])
function Nu(e,t,r,n){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var i=t-e._negativeIndex,u=r-e._negativeIndex,s=i;s<=u;s++){var l,c
null!==(c=e[l=s])&&void 0!==c||(e[l]=[]),n(e[s],s+e._negativeIndex)}}function Tu(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(yu(),null===(t=e._grid)||void 0===t||null===(t=t.cells)||void 0===t||!t.length)return[]
var n=e.boundingClientRect,a=e._grid,o=Bu(e),i=a.getGridPositionOfRect(n,r),u=[]
return a.loopGridPosition(i,(function(t){var r,n=Q(t)
try{for(n.s();!(r=n.n()).done;){var a=r.value
a&&a!==e&&!u.includes(a)&&o===Bu(a)&&u.push(a)}}catch(e){n.e(e)}finally{n.f()}})),u}var Bu=Aa((function(e){return!!e&&("fixed"===e.getComputedStylePropertyValue("position")||Bu(e.parent))})),Ru=Aa((function(){var e
if(!i._tree)return null
var t=Zh(i._tree[0],"dialog[open]",(function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left+1,t.top+1).includes(e.actualNode)&&Ji(e)}))
return t.length?t.find((function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left-10,t.top-10).includes(e.actualNode)}))||(null!==(e=t.find((function(e){var t,n=null!==(t=function(e){yu()
var t=i._tree[0]._grid,n=new r.DOMRect(0,0,r.innerWidth,r.innerHeight)
if(t)for(var a=0;a<t.cells.length;a++){var o=t.cells[a]
if(o)for(var u=0;u<o.length;u++){var s=o[u]
if(s)for(var l=0;l<s.length;l++){var c=s[l],d=au(c.boundingClientRect,n)
if("html"!==c.props.nodeName&&c!==e&&"none"!==c.getComputedStylePropertyValue("pointer-events")&&d)return{vNode:c,rect:d}}}}}(e))&&void 0!==t?t:{},o=n.vNode,u=n.rect
return!!o&&!a.elementsFromPoint(u.left+1,u.top+1).includes(o.actualNode)})))&&void 0!==e?e:null):null}))
function _u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.skipAncestors,n=t.isAncestor
return r?Su(e,n):Ou(e,n)}var Su=Aa((function(e,t){if(e.hasAttr("inert"))return!0
if(!t&&e.actualNode){var r=Ru()
if(r&&!Di(r,e))return!0}return!1})),Ou=Aa((function(e,t){return!!Su(e,t)||!!e.parent&&Ou(e.parent,!0)})),Mu=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],Iu=function(e){var t,r=Uh(e).vNode
if(t=r.props.nodeName,Mu.includes(t)&&r.hasAttr("disabled")||_u(r))return!0
for(var n=r.parent,a=[],o=!1;n&&n.shadowId===r.shadowId&&!o&&(a.push(n),"legend"!==n.props.nodeName);){if(void 0!==n._inDisabledFieldset){o=n._inDisabledFieldset
break}"fieldset"===n.props.nodeName&&n.hasAttr("disabled")&&(o=!0),n=n.parent}return a.forEach((function(e){return e._inDisabledFieldset=o})),!!o||"area"!==r.props.nodeName&&!!r.actualNode&&Hi(r)},Pu=/^\/\#/,ju=/^#[!/]/
function qu(e){var t,n=e.getAttribute("href")
if(!n||"#"===n)return!1
if(Pu.test(n))return!0
var a=e.hash,o=e.protocol,i=e.hostname,u=e.port,s=e.pathname
if(ju.test(a))return!1
if("#"===n.charAt(0))return!0
if("string"!=typeof(null===(t=r.location)||void 0===t?void 0:t.origin)||-1===r.location.origin.indexOf("://"))return null
var l,c=r.location.origin+r.location.pathname
return l=i?"".concat(o,"//").concat(i).concat(u?":".concat(u):""):r.location.origin,(l+=s?("/"!==s[0]?"/":"")+s:r.location.pathname)===c}var Lu=function(e,t){var r=e.getAttribute(t)
if(!r)return null
if("href"===t&&!qu(e))return null;-1!==r.indexOf("#")&&(r=decodeURIComponent(r.substr(r.indexOf("#")+1)))
var n=a.getElementById(r)
return n||((n=a.getElementsByName(r)).length?n[0]:null)}
function zu(e,t){yu()
for(var n=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<n;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a].stackLevel>e._stackingOrder[a].stackLevel)return 1
if(t._stackingOrder[a].stackLevel<e._stackingOrder[a].stackLevel)return-1
if(t._stackingOrder[a].treeOrder!==e._stackingOrder[a].treeOrder)return t._stackingOrder[a].treeOrder-e._stackingOrder[a].treeOrder}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var u=[];o;)u.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!u.find((function(e){return e.root===i.getRootNode()}));)i=i.getRootNode().host
if((o=u.find((function(e){return e.root===i.getRootNode()})).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var s=r.Node,l=s.DOCUMENT_POSITION_FOLLOWING,c=s.DOCUMENT_POSITION_CONTAINS,d=s.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&l?1:-1,h=p&c||p&d,m=Vu(e),D=Vu(t)
return m===D||h?f:D-m}function Vu(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:Uu(e)?1:0}function Uu(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=Uu(e.parent)
return e._isFloated=t,t}function Hu(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=ou(t),o=e.getCellFromPoint(n)||[],i=Math.floor(n.x),u=Math.floor(n.y),s=o.filter((function(e){return e.clientRects.some((function(e){var t=e.left,r=e.top
return i<Math.floor(t+e.width)&&i>=Math.floor(t)&&u<Math.floor(r+e.height)&&u>=Math.floor(r)}))})),l=e.container
return l&&(s=Hu(l._grid,l.boundingClientRect,!0).concat(s)),r||(s=s.sort(zu).map((function(e){return e.actualNode})).concat(a.documentElement).filter((function(e,t,r){return r.indexOf(e)===t}))),s}var $u=function(e){yu()
var t=Za(e),r=t._grid
return r?Hu(r,t.boundingClientRect):[]},Gu=function(e){return lm(e,"*").filter((function(e){var t=e.isFocusable,r=Wh(e.actualNode.getAttribute("tabindex"))
return null!==r?t&&r>=0:t}))},Wu=function(e){var t=Uh(e).vNode
if(!t||Iu(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!lm(t,"summary").length}return!1}
function Yu(e){var t=Uh(e).vNode
return!(1!==t.props.nodeType||Iu(t)||!Wu(t)&&null===Wh(t.attr("tabindex")))}function Qu(e){var t=Uh(e).vNode
return 1===t.props.nodeType&&!(Wh(t.attr("tabindex"))<=-1)&&Yu(t)}var Ku=Aa((function(e){var t=e.boundingClientRect,r=Tu(e).filter((function(t){return du(e,t)&&"none"!==t.getComputedStylePropertyValue("pointer-events")&&!function(e,t){return Di(e,t)&&!Qu(t)}(e,t)}))
return r.length?pu(t,r.map((function(e){return e.boundingClientRect}))):[t]})),Xu=Aa((function(e,t){return function(e,t){return e.reduce((function(e,r){var n=uu(t,e)
return n!==uu(t,r)?n?e:r:e.width*e.height>r.width*r.height?e:r}))}(Ku(e),t)})),Zu={}
ce(Zu,{accessibleText:function(){return es},accessibleTextVirtual:function(){return Fl},autocomplete:function(){return xl},formControlValue:function(){return ll},formControlValueMethods:function(){return ul},hasUnicode:function(){return bl},isHumanInterpretable:function(){return Cl},isIconLigature:function(){return yl},isValidAutocomplete:function(){return Al},label:function(){return Bl},labelText:function(){return pl},labelVirtual:function(){return Tl},nativeElementType:function(){return Rl},nativeTextAlternative:function(){return gl},nativeTextMethods:function(){return Dl},removeUnicode:function(){return El},sanitize:function(){return vs},subtreeText:function(){return dl},titleText:function(){return $s},unsupported:function(){return Ys},visible:function(){return Nl},visibleTextNodes:function(){return _l},visibleVirtual:function(){return Xs}})
var Ju=function(e,t){e=e.actualNode||e
try{var r=Ei(e),n=[],a=e.getAttribute(t)
if(a){a=zf(a)
for(var o=0;o<a.length;o++)n.push(r.getElementById(a[o]))}return n}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},es=function(e,t){return Fl(Za(e),t)},ts=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Uh(e).vNode
return 1!==(null==r?void 0:r.props.nodeType)||1!==r.props.nodeType||t.inLabelledByContext||t.inControlContext||!r.attr("aria-labelledby")?"":Ju(r,"aria-labelledby").filter((function(e){return e})).reduce((function(e,n){var a=es(n,z({inLabelledByContext:!0,startNode:t.startNode||r},t))
return e?"".concat(e," ").concat(a):a}),"")}
function rs(e){var t=Uh(e).vNode
return 1!==(null==t?void 0:t.props.nodeType)?"":t.attr("aria-label")||""}var ns={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-braillelabel":{type:"string",allowEmpty:!0,global:!0},"aria-brailleroledescription":{type:"string",allowEmpty:!0,global:!0},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-description":{type:"string",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string",allowEmpty:!0}},as={alert:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-expanded","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"window",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",deprecated:!0,allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-required","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-readonly","aria-required"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},os={ariaAttrs:ns,ariaRoles:z({},as,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-glossary","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","gridcell","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","separator","slider","switch","tab","treeitem"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["form","search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","math","menuitem","menuitemcheckbox","menuitemradio","meter","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},search:{contentTypes:["flow"],allowedRoles:["form","group","none","presentation","region","search"]},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},is=z({},os),us=is,ss=function(e){var t=us.ariaRoles[e]
return!!t&&!!t.unsupported},ls=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.allowAbstract,n=t.flagUnsupported,a=void 0!==n&&n,o=us.ariaRoles[e],i=ss(e)
return!(!o||a&&i||!r&&"abstract"===o.type)},cs=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.fallback,n=t.abstracts,a=t.dpub
if(1!==(e=e instanceof ra?e:Za(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase()
return(r?zf(o):[o]).find((function(e){return!(!a&&"doc-"===e.substr(0,4))&&ls(e,{allowAbstract:n})}))||null},ds=function(e){return Object.keys(us.htmlElms).filter((function(t){var r=us.htmlElms[t]
return r.contentTypes?r.contentTypes.includes(e):!!r.variant&&!(!r.variant.default||!r.variant.default.contentTypes)&&r.variant.default.contentTypes.includes(e)}))},ps=function(){return Xa.get("globalAriaAttrs",(function(){return Object.keys(us.ariaAttrs).filter((function(e){return us.ariaAttrs[e].global}))}))},fs=Aa((function(e){for(var t=[],r=e.rows,n=0,a=r.length;n<a;n++){var o=r[n].cells
t[n]=t[n]||[]
for(var i=0,u=0,s=o.length;u<s;u++)for(var l=0;l<o[u].colSpan;l++){for(var c=o[u].getAttribute("rowspan"),d=0===parseInt(c)||0===o[u].rowspan?r.length:o[u].rowSpan,p=0;p<d;p++){for(t[n+p]=t[n+p]||[];t[n+p][i];)i++
t[n+p][i]=o[u]}i++}}return t})),hs=Aa((function(e,t){var r,n
for(t||(t=fs(Ai(e,"table"))),r=0;r<t.length;r++)if(t[r]&&-1!==(n=t[r].indexOf(e)))return{x:n,y:r}}))
function ms(e){var t=Uh(e),r=t.vNode,n=t.domNode,a=r.attr("scope"),o=r.attr("role")
if(!["td","th"].includes(r.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===o)return"col"
if("rowheader"===o)return"row"
if("col"===a||"row"===a)return a
if("th"!==r.props.nodeName)return!1
if(!r.actualNode)return"auto"
var i=fs(Ai(n,"table")),u=hs(n,i)
return i[u.y].every((function(e){return"TH"===e.nodeName.toUpperCase()}))?"col":i.map((function(e){return e[u.x]})).every((function(e){return e&&"TH"===e.nodeName.toUpperCase()}))?"row":"auto"}var Ds=function(e){return-1!==["col","auto"].indexOf(ms(e))},gs=function(e){return["row","auto"].includes(ms(e))},vs=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},bs=function(){return Xa.get("sectioningContentSelector",(function(){return ds("sectioning").map((function(e){return"".concat(e,":not([role])")})).join(", ")+" , [role=article], [role=complementary], [role=navigation], [role=region]"}))},ys=function(){return Xa.get("sectioningContentPlusMainSelector",(function(){return bs()+" , main:not([role]), [role=main]"}))}
function Fs(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).checkTitle,r=void 0!==t&&t
return!!(vs(ts(e))||vs(rs(e))||r&&1===(null==e?void 0:e.props.nodeType)&&vs(e.attr("title")))}var ws={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:function(e){return yo(e.parent,bs())&&!Fs(e,{checkTitle:!0})?null:"complementary"},body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return yo(e,ys())?null:"contentinfo"},form:function(e){return Fs(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return yo(e,ys())?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),r=ps().find((function(t){return e.hasAttr(t)}))
return!t||r||Yu(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var r=Ju(e.actualNode,"list").filter((function(e){return!!e}))[0]
t=r&&"datalist"===r.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",meter:"meter",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",search:"search",section:function(e){return Fs(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=yo(e,"table"),r=cs(t)
return["grid","treegrid"].includes(r)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return Ds(e)?"columnheader":gs(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},Es=function(e,t){var r=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===r)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var n=t.substring(1,t.length-1)
return new RegExp(n).test(e)}}return t===e},Cs=function(e,t){return Es(!!Fl(e),t)},xs=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every((function(r){return Es(e(r),t[r])}))},As=function(e,t){return e=Uh(e).vNode,xs((function(t){return e.attr(t)}),t)}
function ks(e,t){return!!t(e)}var Ns=function(e,t){return Es(cs(e),t)},Ts=function(e,t){return Es(js(e),t)},Bs=function(e,t){return e=Uh(e).vNode,Es(e.props.nodeName,t)},Rs=function(e,t){return e=Uh(e).vNode,xs((function(t){return e.props[t]}),t)},_s=function(e,t){return Es(Us(e),t)},Ss={hasAccessibleName:Cs,attributes:As,condition:ks,explicitRole:Ns,implicitRole:Ts,nodeName:Bs,properties:Rs,semanticRole:_s},Os=function e(t,r){return t=Uh(t).vNode,Array.isArray(r)?r.some((function(r){return e(t,r)})):"string"==typeof r?uo(t,r):Object.keys(r).every((function(e){if(!Ss[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var n=Ss[e],a=r[e]
return n(t,a)}))},Ms=function(e,t){return Os(e,t)}
Ms.hasAccessibleName=Cs,Ms.attributes=As,Ms.condition=ks,Ms.explicitRole=Ns,Ms.fromDefinition=Os,Ms.fromFunction=xs,Ms.fromPrimative=Es,Ms.implicitRole=Ts,Ms.nodeName=Bs,Ms.properties=Rs,Ms.semanticRole=_s
var Is=Ms,Ps=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noMatchAccessibleName,r=void 0!==t&&t,n=us.htmlElms[e.props.nodeName]
if(!n)return{}
if(!n.variant)return n
var a=n.variant,o=j(n,d)
for(var i in a)if(a.hasOwnProperty(i)&&"default"!==i){for(var u=a[i],s=u.matches,l=j(u,p),c=Array.isArray(s)?s:[s],f=0;f<c.length&&r;f++)if(c[f].hasOwnProperty("hasAccessibleName"))return n
if(Is(e,s))for(var h in l)l.hasOwnProperty(h)&&(o[h]=l[h])}for(var m in a.default)a.default.hasOwnProperty(m)&&void 0===o[m]&&(o[m]=a.default[m])
return o},js=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).chromium,r=e instanceof ra?e:Za(e)
if(e=r.actualNode,!r)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var n=r.props.nodeName,a=ws[n]
return!a&&t?Ps(r).chromiumRole||null:"function"==typeof a?a(r):a||null},qs={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function Ls(e,t){var r=qs[e.props.nodeName]
if(!r)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!r.includes(e.parent.props.nodeName))return null
var n=cs(e.parent,t)
return["none","presentation"].includes(n)&&!Vs(e.parent)?n:n?null:Ls(e.parent,t)}function zs(e,t){var r=t.chromium,n=j(t,f),a=js(e,{chromium:r})
return a?Ls(e,n)||a:null}function Vs(e){return ps().some((function(t){return e.hasAttr(t)}))||Yu(e)}var Us=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noPresentational,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.noImplicit,n=j(t,h),a=Uh(e).vNode
if(1!==a.props.nodeType)return null
var o=cs(a,n)
return o?["presentation","none"].includes(o)&&Vs(a)?r?null:zs(a,n):o:r?null:zs(a,n)}(e,j(t,m))
return r&&["presentation","none"].includes(n)?null:n},Hs=["iframe"],$s=function(e){var t=Uh(e).vNode
return 1===t.props.nodeType&&e.hasAttr("title")?!Ms(t,Hs)&&["none","presentation"].includes(Us(t))?"":t.attr("title"):""},Gs=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).strict
if(1!==(e=e instanceof ra?e:Za(e)).props.nodeType)return!1
var r=Us(e),n=us.ariaRoles[r]
return!(!n||!n.nameFromContent)||!t&&(!n||["presentation","none"].includes(r))},Ws=function(e){var t=e.actualNode,r=e.children
if(!r)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var n=Ju(t,"aria-owns").filter((function(e){return!!e})).map((function(e){return i.utils.getNodeFromTree(e)}))
return[].concat(q(r),q(n))}return q(r)},Ys={accessibleNameFromFieldValue:["progressbar"]}
function Qs(e){return e=Uh(e).vNode,Ks(e)}var Ks=Aa((function(e,t){return!Ii(e)&&!_u(e,{skipAncestors:!0,isAncestor:t})&&(e.actualNode&&"area"===e.props.nodeName?!zi(e,Ks):!Hi(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||Ks(e.parent,!0)))})),Xs=function e(t,r,n){var a=Uh(t).vNode,o=r?Qs:Ji,i=!t.actualNode||t.actualNode&&o(t),u=a.children.map((function(t){var a=t.props,o=a.nodeType,u=a.nodeValue
if(3===o){if(u&&i)return u}else if(!n)return e(t,r)})).join("")
return vs(u)},Zs=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],Js=function(e){var t=(e=e instanceof ra?e:Za(e)).props.nodeName
return"textarea"===t||"input"===t&&!Zs.includes((e.attr("type")||"").toLowerCase())},el=function(e){return"select"===(e=e instanceof ra?e:Za(e)).props.nodeName},tl=function(e){return"textbox"===cs(e)},rl=function(e){return"listbox"===cs(e)},nl=function(e){return"combobox"===cs(e)},al=["progressbar","scrollbar","slider","spinbutton"],ol=function(e){var t=cs(e)
return al.includes(t)},il=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],ul={nativeTextboxValue:function(e){var t=Uh(e).vNode
return Js(t)&&t.props.value||""},nativeSelectValue:function(e){var t=Uh(e).vNode
if(!el(t))return""
var r=lm(t,"option"),n=r.filter((function(e){return e.props.selected}))
return n.length||n.push(r[0]),n.map((function(e){return Xs(e)})).join(" ")||""},ariaTextboxValue:function(e){var t=Uh(e),r=t.vNode,n=t.domNode
return tl(r)?!n||n&&!Hi(n)?Xs(r,!0):n.textContent:""},ariaListboxValue:sl,ariaComboboxValue:function(e,t){var r=Uh(e).vNode
if(!nl(r))return""
var n=Ws(r).filter((function(e){return"listbox"===Us(e)}))[0]
return n?sl(n,t):""},ariaRangeValue:function(e){var t=Uh(e).vNode
if(!ol(t)||!t.hasAttr("aria-valuenow"))return""
var r=+t.attr("aria-valuenow")
return isNaN(r)?"0":String(r)}}
function sl(e,t){var r=Uh(e).vNode
if(!rl(r))return""
var n=Ws(r).filter((function(e){return"option"===Us(e)&&"true"===e.attr("aria-selected")}))
return 0===n.length?"":Fl(n[0],t)}var ll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.actualNode,n=Ys.accessibleNameFromFieldValue||[],a=Us(e)
if(t.startNode===e||!il.includes(a)||n.includes(a))return""
var o=Object.keys(ul).map((function(e){return ul[e]})).reduce((function(r,n){return r||n(e,t)}),"")
return t.debug&&ea(o||"{empty-value}",r,t),o},cl=ds("phrasing").concat(["#text"]),dl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Fl.alreadyProcessed
t.startNode=t.startNode||e
var n=t,a=n.strict,o=n.inControlContext,i=n.inLabelledByContext,u=Us(e),s=Ps(e,{noMatchAccessibleName:!0}).contentTypes
return r(e,t)||1!==e.props.nodeType||null!=s&&s.includes("embedded")||il.includes(u)?"":t.subtreeDescendant||t.inLabelledByContext||Gs(e,{strict:a})?(a||(t=z({subtreeDescendant:!o&&!i},t)),Ws(e).reduce((function(e,r){return function(e,t,r){var n=t.props.nodeName,a=Fl(t,r)
return a?(cl.includes(n)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}(e,r,t)}),"")):""},pl=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Fl.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||r(e,t))return""
t.startNode||(t.startNode=e)
var n,a=z({inControlContext:!0},t),o=function(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return Ci({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}(e),i=yo(e,"label")
return i?(n=[].concat(q(o),[i.actualNode])).sort(Vh):n=o,n.map((function(e){return es(e,a)})).filter((function(e){return""!==e})).join(" ")},fl={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function hl(e,t){return t.attr(e)||""}function ml(e,t,r){var n=t.actualNode,a=[e=e.toLowerCase(),n.nodeName.toLowerCase()].join(","),o=n.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?es(o,r):""}var Dl={valueText:function(e){return e.props.value||""},buttonDefaultText:function(e){return fl[e.props.type]||""},tableCaptionText:ml.bind(null,"caption"),figureText:ml.bind(null,"figcaption"),svgTitleText:ml.bind(null,"title"),fieldsetLegendText:ml.bind(null,"legend"),altText:hl.bind(null,"alt"),tableSummaryText:hl.bind(null,"summary"),titleText:$s,subtreeText:dl,labelText:pl,singleSpace:function(){return" "},placeholderText:hl.bind(null,"placeholder")}
function gl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(Us(e)))return""
var n=function(e){return(Ps(e,{noMatchAccessibleName:!0}).namingMethods||[]).map((function(e){return Dl[e]}))}(e),a=n.reduce((function(r,n){return r||n(e,t)}),"")
return t.debug&&i.log(a||"{empty-value}",r,t),a}var vl=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},bl=function(e,t){var r=t.emoji,n=t.nonBmp,a=t.punctuations,o=!1
return r&&(o||(o=/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(e))),n&&(o||(o=/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e)||/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g.test(e))),a&&(o||(o=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e))),o}
function yl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!vs(o)||bl(o,{emoji:!0,nonBmp:!0}))return!1
var i=Xa.get("canvasContext",(function(){return a.createElement("canvas").getContext("2d",{willReadFrequently:!0})})),u=i.canvas,s=Xa.get("fonts",(function(){return{}})),l=r.getComputedStyle(e.parent.actualNode).getPropertyValue("font-family")
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
return v/D.length>=t&&1-y/b>=t&&(c.numLigatures++,!0)}function Fl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=function(e,t){return t.startNode||(t=z({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=z({includeHidden:!Qs(e)},t)),t}(e,t),function(e,t){return!!e&&1===e.props.nodeType&&!t.includeHidden&&!Qs(e)}(e,t))return""
if(function(e,t){var r,n=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(r=t.occurrenceThreshold)&&void 0!==r?r:t.occuranceThreshold
return!(3!==e.props.nodeType||!n)&&yl(e,a,o)}(e,t))return""
var r=[ts,rs,gl,ll,dl,wl,$s].reduce((function(r,n){return t.startNode===e&&(r=vs(r)),""!==r?r:n(e,t)}),"")
return t.debug&&i.log(r||"{empty-value}",e.actualNode,t),r}function wl(e){return 3!==e.props.nodeType?"":e.props.nodeValue}Fl.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var El=function(e,t){var r=t.emoji,n=t.nonBmp,a=t.punctuations
return r&&(e=e.replace(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,"")),n&&(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"").replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"").replace(/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},Cl=function(e){return function(e){return 0===vs(e).length}(e)||function(e){return 1===e.length&&e.match(/\D/)}(e)||function(e){return["aa","abc"].includes(e.toLowerCase())}(e)||function(e){var t=El(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return!vs(t)}(e)?0:1},xl={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},Al=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.looseTyped,n=void 0!==r&&r,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,u=void 0===i?[]:i,s=t.qualifiers,l=void 0===s?[]:s,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p,h=t.ignoredValues,m=void 0===h?[]:h
if(e=e.toLowerCase().trim(),(o=o.concat(xl.stateTerms)).includes(e)||""===e)return!0
l=l.concat(xl.qualifiers),u=u.concat(xl.locations),d=d.concat(xl.standaloneTerms),f=f.concat(xl.qualifiedTerms)
var D=e.split(/\s+/g)
if("webauthn"===D[D.length-1]&&(D.pop(),0===D.length))return!1
if(!n&&(D[0].length>8&&"section-"===D[0].substr(0,8)&&D.shift(),u.includes(D[0])&&D.shift(),l.includes(D[0])&&(D.shift(),d=[]),1!==D.length))return!1
var g=D[D.length-1]
return m.includes(g)?void 0:d.includes(g)||f.includes(g)},kl=function(e){var t
return e.attr("aria-labelledby")&&(t=Ju(e.actualNode,"aria-labelledby").map((function(e){var t=Za(e)
return t?Xs(t):""})).join(" ").trim())||(t=e.attr("aria-label"))&&(t=vs(t))?t:null},Nl=function(e,t,r){return e=Za(e),Xs(e,t,r)},Tl=function(e){var t,r
if(r=kl(e))return r
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var n=va(e.attr("id"))
if(r=(t=Ei(e.actualNode).querySelector('label[for="'+n+'"]'))&&Nl(t,!0))return r}return(r=(t=yo(e,"label"))&&Xs(t,!0))||null},Bl=function(e){return e=Za(e),Tl(e)},Rl=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],_l=function e(t){var r=Ji(t),n=[]
return t.children.forEach((function(t){3===t.actualNode.nodeType?r&&n.push(t):n=n.concat(e(t))})),n},Sl=Aa((function(e){var t=Za(e),r=t.boundingClientRect,n=[],o=Ti(t)
return e.childNodes.forEach((function(e){if(3===e.nodeType&&""!==vs(e.nodeValue)){var t=function(e){var t=a.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some((function(e){return!ru(ou(e),t)}))})(t,r)||n.push.apply(n,q(Ol(t,o)))}})),n.length?n:Ol([r],o)}))
function Ol(e,t){var r=[]
return e.forEach((function(e){if(!(e.width<1||e.height<1)){var n=t.reduce((function(e,t){return e&&au(e,t.boundingClientRect)}),e)
n&&r.push(n)}})),r}var Ml=function(e){yu()
var t=Za(e)._grid
return t?Sl(e).map((function(e){return Hu(t,e)})):[]},Il=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],Pl=function(e){var t=Uh(e).vNode,r=i.commons.aria.getExplicitRole(t)
if(r)return-1!==Il.indexOf(r)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},jl=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function ql(e){return!jl.includes(e.props.nodeName)&&e.children.some((function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()}))}var Ll=function e(t,r,n){return ql(t)||Pl(t.actualNode)||!n&&!!kl(t)||!r&&t.children.some((function(t){return 1===t.actualNode.nodeType&&e(t)}))},zl=function(e,t,r){return e=Za(e),Ll(e,t,r)}
function Vl(e){return!(void 0!==e.children&&!ql(e))||(1===e.props.nodeType&&Pl(e)?!!i.commons.text.accessibleTextVirtual(e):e.children.some((function(e){return!e.attr("lang")&&Vl(e)&&!Hi(e)})))}var Ul=function(e){return Wh(e.getAttribute("tabindex"))>-1&&Yu(e)&&!Wu(e)}
function Hl(e,t){var r=Uh(e),n=r.vNode,a=r.domNode
return n?(void 0===n._isHiddenWithCSS&&(n._isHiddenWithCSS=$l(a,t)),n._isHiddenWithCSS):$l(a,t)}function $l(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var n=r.getComputedStyle(e,null)
if(!n)throw new Error("Style does not exist for the given element.")
if("none"===n.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=n.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=Wi(e)
return!(!i||a.includes(o))&&Hl(i,o)}var Gl=Hl,Wl=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId},Yl=function(e){var t;(e instanceof ra||null!==(t=r)&&void 0!==t&&t.Node&&e instanceof r.Node)&&(e=i.commons.aria.getRole(e))
var n=us.ariaRoles[e]
return(null==n?void 0:n.type)||null}
function Ql(e,t){!1!==t(e.actualNode)&&e.children.forEach((function(e){return Ql(e,t)}))}var Kl=["block","list-item","table","flex","grid","inline-block"]
function Xl(e){var t=r.getComputedStyle(e).getPropertyValue("display")
return Kl.includes(t)||"table-"===t.substr(0,6)}var Zl=function(e,t){if(Xl(e))return!1
var r=function(e){for(var t=Wi(e);t&&!Xl(t);)t=Wi(t)
return Za(t)}(e),n="",a="",o=0
return Ql(r,(function(t){if(2===o)return!1
if(3===t.nodeType&&(n+=t.nodeValue),1===t.nodeType){var r=(t.nodeName||"").toUpperCase()
if(t===e&&(o=1),["BR","HR"].includes(r))0===o?(n="",a=""):o=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("widget"===Yl(t))return a+=t.textContent,!1}}})),n=vs(n),null!=t&&t.noLengthCompare?0!==n.length:(a=vs(a),n.length>a.length)},Jl=function(e){var t=(e=e||{}).modalPercent||.75
if(Xa.get("isModalOpen"))return Xa.get("isModalOpen")
if(Zh(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",Ji).length)return Xa.set("isModalOpen",!0),!0
for(var n,o=Ki(r),u=o.width*t,s=o.height*t,l=(o.width-u)/2,c=(o.height-s)/2,d=[{x:l,y:c},{x:o.width-l,y:c},{x:o.width/2,y:o.height/2},{x:l,y:o.height-c},{x:o.width-l,y:o.height-c}].map((function(e){return Array.from(a.elementsFromPoint(e.x,e.y))})),p=function(){var e=d[f].find((function(e){var t=r.getComputedStyle(e)
return parseInt(t.width,10)>=u&&parseInt(t.height,10)>=s&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)}))
if(e&&d.every((function(t){return t.includes(e)})))return Xa.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++)if(n=p())return n.v
Xa.set("isModalOpen",void 0)}
function ec(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=e.ownerDocument.createRange()
r.setStart(e,0),r.setEnd(e,e.childNodes.length)
var n,a=0,o=0,i=Q(r.getClientRects())
try{for(i.s();!(n=i.n()).done;){var u=n.value
if(!(u.height<=t))if(a>u.top+t)a=Math.max(a,u.bottom)
else{if(0!==o)return!0
a=u.bottom,o++}}}catch(e){i.e(e)}finally{i.f()}return!1}var tc=function(e){return e instanceof r.Node},rc="color.incompleteData",nc={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
var r=Xa.get(rc,(function(){return{}}))
return t&&(r[e]=t),r[e]},get:function(e){var t=Xa.get(rc)
return null==t?void 0:t[e]},clear:function(){Xa.set(rc,{})}},ac=nc,oc=function(e,t){var n=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(n))return ac.set("bgColor","imgNode"),!0
var a=(t=t||r.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
ac.set("bgColor",i?"bgGradient":"bgImage")}return o},ic={}
ce(ic,{ArrayFrom:function(){return hf.default},Colorjs:function(){return sf},CssSelectorParser:function(){return pc.CssSelectorParser},doT:function(){return fc.default},emojiRegexText:function(){return vl},memoize:function(){return hc.default}})
var uc=de(Wt()),sc=de(Yt()),lc=(de(Qt()),de(Qr())),cc=de(hn()),dc=de(Kn())
"hasOwn"in Object||(Object.hasOwn=lc.default),"values"in Object||(Object.values=cc.default),"Promise"in r||uc.default.polyfill(),"Uint32Array"in r||(r.Uint32Array=sc.Uint32Array),r.Uint32Array&&("some"in r.Uint32Array.prototype||Object.defineProperty(r.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in r.Uint32Array.prototype||Object.defineProperty(r.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce})),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
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
return!1}}),Array.from||(Array.from=dc.default),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(r,n){return Array.isArray(n)?r.push.apply(r,e.call(n,t-1)):r.push(n),r}),[]):Array.prototype.slice.call(this)},writable:!0}),r.Node&&!("isConnected"in r.Node.prototype)&&Object.defineProperty(r.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var pc=de(Gt()),fc=de(Xn()),hc=de(Vt())
function mc(e,t){var r=e.length
Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map((function(e){return[e]})))
var n=t[0].length,a=t[0].map((function(e,r){return t.map((function(e){return e[r]}))})),o=e.map((function(e){return a.map((function(t){var r=0
if(!Array.isArray(e)){var n,a=Q(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
r+=e*o}}catch(e){a.e(e)}finally{a.f()}return r}for(var i=0;i<e.length;i++)r+=e[i]*(t[i]||0)
return r}))}))
return 1===r&&(o=o[0]),1===n?o.map((function(e){return e[0]})):o}function Dc(e){return"string"===gc(e)}function gc(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function vc(e,t){e=+e,t=+t
var r=(Math.floor(e)+"").length
if(t>r)return+e.toFixed(t-r)
var n=Math.pow(10,r-t)
return Math.round(e/n)*n}function bc(e){if(e){e=e.trim()
var t=/^-?[\d.]+$/,r=e.match(/^([a-z]+)\((.+?)\)$/i)
if(r){var n=[]
return r[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(function(e,r){/%$/.test(r)?(r=new Number(r.slice(0,-1)/100)).type="<percentage>":/deg$/.test(r)?((r=new Number(+r.slice(0,-3))).type="<angle>",r.unit="deg"):t.test(r)&&((r=new Number(r)).type="<number>"),e.startsWith("/")&&((r=r instanceof Number?r:new Number(r)).alpha=!0),n.push(r)})),{name:r[1].toLowerCase(),rawName:r[1],rawArgs:r[2],args:n}}}}function yc(e){return e[e.length-1]}function Fc(e,t,r){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*r}function wc(e,t,r){return(r-e)/(t-e)}function Ec(e,t,r){return Fc(t[0],t[1],wc(e[0],e[1],r))}function Cc(e){return e.map((function(e){return e.split("|").map((function(e){var t=(e=e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/)
if(t){var r=new String(t[1])
return r.range=[+t[2],+t[3]],r}return e}))}))}var xc=Object.freeze({__proto__:null,isString:Dc,type:gc,toPrecision:vc,parseFunction:bc,last:yc,interpolate:Fc,interpolateInv:wc,mapRange:Ec,parseCoordGrammar:Cc,multiplyMatrices:mc}),Ac=W((function e(){$(this,e)}),[{key:"add",value:function(e,t,r){if("string"==typeof arguments[0])(Array.isArray(e)?e:[e]).forEach((function(e){this[e]=this[e]||[],t&&this[e][r?"unshift":"push"](t)}),this)
else for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1])}},{key:"run",value:function(e,t){this[e]=this[e]||[],this[e].forEach((function(e){e.call(t&&t.context?t.context:t,t)}))}}]),kc=new Ac,Nc={gamut_mapping:"lch.c",precision:5,deltaE:"76"},Tc={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]}
function Bc(e){return Array.isArray(e)?e:Tc[e]}function Rc(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(e=Bc(e),t=Bc(t),!e||!t)throw new TypeError("Missing white point to convert ".concat(e?"":"from").concat(e||t?"":"/").concat(t?"":"to"))
if(e===t)return r
var a={W1:e,W2:t,XYZ:r,options:n}
if(kc.run("chromatic-adaptation-start",a),a.M||(a.W1===Tc.D65&&a.W2===Tc.D50?a.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:a.W1===Tc.D50&&a.W2===Tc.D65&&(a.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),kc.run("chromatic-adaptation-end",a),a.M)return mc(a.M,a.XYZ)
throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var _c=(e=new WeakSet,t=new WeakMap,W((function r(n){var a,o,i,u,s,l,c
$(this,r),S(this,e),_(this,t,void 0),this.id=n.id,this.name=n.name,this.base=n.base?_c.get(n.base):null,this.aliases=n.aliases,this.base&&(this.fromBase=n.fromBase,this.toBase=n.toBase)
var d=null!==(a=n.coords)&&void 0!==a?a:this.base.coords
this.coords=d
var p=null!==(o=null!==(i=n.white)&&void 0!==i?i:this.base.white)&&void 0!==o?o:"D65"
for(var f in this.white=Bc(p),this.formats=null!==(u=n.formats)&&void 0!==u?u:{},this.formats){var h=this.formats[f]
h.type||(h.type="function"),h.name||(h.name=f)}!n.cssId||null!==(s=this.formats.functions)&&void 0!==s&&s.color?null===(l=this.formats)||void 0===l||!l.color||null!==(c=this.formats)&&void 0!==c&&c.color.id||(this.formats.color.id=this.id):(this.formats.color={id:n.cssId},Object.defineProperty(this,"cssId",{value:n.cssId})),this.referred=n.referred,I(t,this,P(e,this,Oc).call(this).reverse()),kc.run("colorspace-init-end",this)}),[{key:"inGamut",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).epsilon,r=void 0===t?75e-6:t
if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:r})
var n=Object.values(this.coords)
return e.every((function(e,t){var a=n[t]
if("angle"!==a.type&&a.range){if(Number.isNaN(e))return!0
var o=V(a.range,2),i=o[0],u=o[1]
return(void 0===i||e>=i-r)&&(void 0===u||e<=u+r)}return!0}))}},{key:"cssId",get:function(){var e
return(null===(e=this.formats.functions)||void 0===e||null===(e=e.color)||void 0===e?void 0:e.id)||this.id}},{key:"isPolar",get:function(){for(var e in this.coords)if("angle"===this.coords[e].type)return!0
return!1}},{key:"getFormat",value:function(t){return"object"===o(t)?t=P(e,this,Sc).call(this,t):(r="default"===t?Object.values(this.formats)[0]:this.formats[t])?r=P(e,this,Sc).call(this,r):null
var r}},{key:"to",value:function(e,r){if(1===arguments.length){var n=[e.space,e.coords]
e=n[0],r=n[1]}if(this===(e=_c.get(e)))return r
r=r.map((function(e){return Number.isNaN(e)?0:e}))
for(var a,o,i=M(t,this),u=M(t,e),s=0;s<i.length&&i[s]===u[s];s++)a=i[s],o=s
if(!a)throw new Error("Cannot convert between color spaces ".concat(this," and ").concat(e,": no connection space was found"))
for(var l=i.length-1;l>o;l--)r=i[l].toBase(r)
for(var c=o+1;c<u.length;c++)r=u[c].fromBase(r)
return r}},{key:"from",value:function(e,t){if(1===arguments.length){var r=[e.space,e.coords]
e=r[0],t=r[1]}return(e=_c.get(e)).to(this,t)}},{key:"toString",value:function(){return"".concat(this.name," (").concat(this.id,")")}},{key:"getMinCoords",value:function(){var e=[]
for(var t in this.coords){var r,n=this.coords[t],a=n.range||n.refRange
e.push(null!==(r=null==a?void 0:a.min)&&void 0!==r?r:0)}return e}}],[{key:"all",get:function(){return q(new Set(Object.values(_c.registry)))}},{key:"register",value:function(e,t){if(1===arguments.length&&(e=(t=arguments[0]).id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error("Duplicate color space registration: '".concat(e,"'"))
if(this.registry[e]=t,1===arguments.length&&t.aliases){var r,n=Q(t.aliases)
try{for(n.s();!(r=n.n()).done;){var a=r.value
this.register(a,t)}}catch(e){n.e(e)}finally{n.f()}}return t}},{key:"get",value:function(e){if(!e||e instanceof _c)return e
if("string"===gc(e)){var t=_c.registry[e.toLowerCase()]
if(!t)throw new TypeError('No color space found with id = "'.concat(e,'"'))
return t}for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a]
if(n.length)return _c.get.apply(_c,n)
throw new TypeError("".concat(e," is not a valid color space"))}},{key:"resolveCoord",value:function(e,t){var r,n,a=gc(e)
if("string"===a)if(e.includes(".")){var o=V(e.split("."),2)
r=o[0],n=o[1]}else r=void 0,n=e
else if(Array.isArray(e)){var i=V(e,2)
r=i[0],n=i[1]}else r=e.space,n=e.coordId
if((r=_c.get(r))||(r=t),!r)throw new TypeError("Cannot resolve coordinate reference ".concat(e,": No color space specified and relative references are not allowed here"))
if("number"===(a=gc(n))||"string"===a&&n>=0){var u=Object.entries(r.coords)[n]
if(u)return z({space:r,id:u[0],index:n},u[1])}r=_c.get(r)
var s=n.toLowerCase(),l=0
for(var c in r.coords){var d,p=r.coords[c]
if(c.toLowerCase()===s||(null===(d=p.name)||void 0===d?void 0:d.toLowerCase())===s)return z({space:r,id:c,index:l},p)
l++}throw new TypeError('No "'.concat(n,'" coordinate found in ').concat(r.name,". Its coordinates are: ").concat(Object.keys(r.coords).join(", ")))}}]))
function Sc(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=Cc(e.coords)
var t=Object.entries(this.coords).map((function(t,r){var n=V(t,2),a=(n[0],n[1]),o=e.coordGrammar[r][0],i=a.range||a.refRange,u=o.range,s=""
return"<percentage>"==o?(u=[0,100],s="%"):"<angle>"==o&&(s="deg"),{fromRange:i,toRange:u,suffix:s}}))
e.serializeCoords=function(e,r){return e.map((function(e,n){var a=t[n],o=a.fromRange,i=a.toRange,u=a.suffix
return o&&i&&(e=Ec(o,i,e)),e=vc(e,r),u&&(e+=u),e}))}}return e}function Oc(){for(var e=[this],t=this;t=t.base;)e.push(t)
return e}var Mc=_c
pe(Mc,"registry",{}),pe(Mc,"DEFAULT_FORMAT",{type:"functions",name:"color"})
var Ic=new Mc({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),Pc=function(e){function t(e){var r,n,a,o
return $(this,t),e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=Ic),e.toXYZ_M&&e.fromXYZ_M&&(null!==(a=e.toBase)&&void 0!==a||(e.toBase=function(t){var r=mc(e.toXYZ_M,t)
return n.white!==n.base.white&&(r=Rc(n.white,n.base.white,r)),r}),null!==(o=e.fromBase)&&void 0!==o||(e.fromBase=function(t){return t=Rc(n.base.white,n.white,t),mc(e.fromXYZ_M,t)})),null!==(r=e.referred)&&void 0!==r||(e.referred="display"),n=k(this,t,[e])}return B(t,e),W(t)}(Mc)
function jc(e){var t,r={str:null===(t=String(e))||void 0===t?void 0:t.trim()}
if(kc.run("parse-start",r),r.color)return r.color
if(r.parsed=bc(r.str),r.parsed){var n=r.parsed.name
if("color"===n){var a,o=r.parsed.args.shift(),i=r.parsed.rawArgs.indexOf("/")>0?r.parsed.args.pop():1,u=Q(Mc.all)
try{var s,l=function(){var e,t=a.value,n=t.getFormat("color")
if(n&&(o===n.id||null!==(e=n.ids)&&void 0!==e&&e.includes(o))){var u=Object.keys(t.coords).length,s=Array(u).fill(0)
return s.forEach((function(e,t){return s[t]=r.parsed.args[t]||0})),{v:{spaceId:t.id,coords:s,alpha:i}}}}
for(u.s();!(a=u.n()).done;)if(s=l())return s.v}catch(e){u.e(e)}finally{u.f()}var c=""
if(o in Mc.registry){var d,p=null===(d=Mc.registry[o].formats)||void 0===d||null===(d=d.functions)||void 0===d||null===(d=d.color)||void 0===d?void 0:d.id
p&&(c="Did you mean color(".concat(p,")?"))}throw new TypeError("Cannot parse color(".concat(o,"). ")+(c||"Missing a plugin?"))}var f,h=Q(Mc.all)
try{var m,D=function(){var e=f.value,t=e.getFormat(n)
if(t&&"function"===t.type){var a=1;(t.lastAlpha||yc(r.parsed.args).alpha)&&(a=r.parsed.args.pop())
var o=r.parsed.args
return t.coordGrammar&&Object.entries(e.coords).forEach((function(e,r){var a,i=V(e,2),u=i[0],s=i[1],l=t.coordGrammar[r],c=null===(a=o[r])||void 0===a?void 0:a.type
if(!(l=l.find((function(e){return e==c})))){var d=s.name||u
throw new TypeError("".concat(c," not allowed for ").concat(d," in ").concat(n,"()"))}var p=l.range
"<percentage>"===c&&(p||(p=[0,1]))
var f=s.range||s.refRange
p&&f&&(o[r]=Ec(p,f,o[r]))})),{v:{spaceId:e.id,coords:o,alpha:a}}}}
for(h.s();!(f=h.n()).done;)if(m=D())return m.v}catch(e){h.e(e)}finally{h.f()}}else{var g,v=Q(Mc.all)
try{for(v.s();!(g=v.n()).done;){var b=g.value
for(var y in b.formats){var F=b.formats[y]
if("custom"===F.type&&(!F.test||F.test(r.str))){var w,E=F.parse(r.str)
if(E)return null!==(w=E.alpha)&&void 0!==w||(E.alpha=1),E}}}}catch(e){v.e(e)}finally{v.f()}}throw new TypeError("Could not parse ".concat(e," as a color. Missing a plugin?"))}function qc(e){if(!e)throw new TypeError("Empty color reference")
Dc(e)&&(e=jc(e))
var t=e.space||e.spaceId
return t instanceof Mc||(e.space=Mc.get(t)),void 0===e.alpha&&(e.alpha=1),e}function Lc(e,t){return(t=Mc.get(t)).from(e)}function zc(e,t){var r=Mc.resolveCoord(t,e.space),n=r.space,a=r.index
return Lc(e,n)[a]}function Vc(e,t,r){return t=Mc.get(t),e.coords=t.to(e.space,r),e}function Uc(e,t,r){if(e=qc(e),2===arguments.length&&"object"===gc(arguments[1])){var n=arguments[1]
for(var a in n)Uc(e,a,n[a])}else{"function"==typeof r&&(r=r(zc(e,t)))
var o=Mc.resolveCoord(t,e.space),i=o.space,u=o.index,s=Lc(e,i)
s[u]=r,Vc(e,i,s)}return e}var Hc=new Mc({id:"xyz-d50",name:"XYZ D50",white:"D50",base:Ic,fromBase:function(e){return Rc(Ic.white,"D50",e)},toBase:function(e){return Rc("D50",Ic.white,e)},formats:{color:{}}}),$c=216/24389,Gc=24/116,Wc=24389/27,Yc=Tc.D50,Qc=new Mc({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Yc,base:Hc,fromBase:function(e){var t=e.map((function(e,t){return e/Yc[t]})).map((function(e){return e>$c?Math.cbrt(e):(Wc*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>Gc?Math.pow(t[0],3):(116*t[0]-16)/Wc,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Wc,t[2]>Gc?Math.pow(t[2],3):(116*t[2]-16)/Wc].map((function(e,t){return e*Yc[t]}))},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}})
function Kc(e){return(e%360+360)%360}var Xc=new Mc({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Qc,fromBase:function(e){var t,r=V(e,3),n=r[0],a=r[1],o=r[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Kc(t)]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2]
return n<0&&(n=0),isNaN(a)&&(a=0),[r,n*Math.cos(a*Math.PI/180),n*Math.sin(a*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),Zc=Math.pow(25,7),Jc=Math.PI,ed=180/Jc,td=Jc/180
function rd(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.kL,a=void 0===n?1:n,o=r.kC,i=void 0===o?1:o,u=r.kH,s=void 0===u?1:u,l=V(Qc.from(e),3),c=l[0],d=l[1],p=l[2],f=Xc.from(Qc,[c,d,p])[1],h=V(Qc.from(t),3),m=h[0],D=h[1],g=h[2],v=Xc.from(Qc,[m,D,g])[1]
f<0&&(f=0),v<0&&(v=0)
var b=(f+v)/2,y=Math.pow(b,7),F=.5*(1-Math.sqrt(y/(y+Zc))),w=(1+F)*d,E=(1+F)*D,C=Math.sqrt(Math.pow(w,2)+Math.pow(p,2)),x=Math.sqrt(Math.pow(E,2)+Math.pow(g,2)),A=0===w&&0===p?0:Math.atan2(p,w),k=0===E&&0===g?0:Math.atan2(g,E)
A<0&&(A+=2*Jc),k<0&&(k+=2*Jc)
var N,T=m-c,B=x-C,R=(k*=ed)-(A*=ed),_=A+k,S=Math.abs(R)
C*x==0?N=0:S<=180?N=R:R>180?N=R-360:R<-180?N=R+360:console.log("the unthinkable has happened")
var O,M=2*Math.sqrt(x*C)*Math.sin(N*td/2),I=(c+m)/2,P=(C+x)/2,j=Math.pow(P,7)
O=C*x==0?_:S<=180?_/2:_<360?(_+360)/2:(_-360)/2
var q=Math.pow(I-50,2),L=1+.015*q/Math.sqrt(20+q),z=1+.045*P,U=1
U-=.17*Math.cos((O-30)*td),U+=.24*Math.cos(2*O*td),U+=.32*Math.cos((3*O+6)*td)
var H=1+.015*P*(U-=.2*Math.cos((4*O-63)*td)),$=30*Math.exp(-1*Math.pow((O-275)/25,2)),G=2*Math.sqrt(j/(j+Zc)),W=-1*Math.sin(2*$*td)*G,Y=Math.pow(T/(a*L),2)
return Y+=Math.pow(B/(i*z),2),Y+=Math.pow(M/(s*H),2),Y+=W*(B/(i*z))*(M/(s*H)),Math.sqrt(Y)}function nd(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.space,r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).epsilon,n=void 0===r?75e-6:r
e=qc(e),t=Mc.get(t)
var a=e.coords
return t!==e.space&&(a=t.from(e)),t.inGamut(a,{epsilon:n})}function ad(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function od(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.method,n=void 0===r?Nc.gamut_mapping:r,a=t.space,o=void 0===a?e.space:a
if(Dc(arguments[1])&&(o=arguments[1]),nd(e,o=Mc.get(o),{epsilon:0}))return e
var i=id(e,o)
if("clip"!==n&&!nd(e,o)){var u=od(ad(i),{method:"clip",space:o})
if(rd(e,u)>2){for(var s=Mc.resolveCoord(n),l=s.space,c=s.id,d=id(i,l),p=(s.range||s.refRange)[0],f=zc(d,c);f-p>.01;){var h=ad(d)
rd(d,h=od(h,{space:o,method:"clip"}))-2<.01?p=zc(d,c):f=zc(d,c),Uc(d,c,(p+f)/2)}i=id(d,o)}else i=u}if("clip"===n||!nd(i,o,{epsilon:0})){var m=Object.values(o.coords).map((function(e){return e.range||[]}))
i.coords=i.coords.map((function(e,t){var r=V(m[t],2),n=r[0],a=r[1]
return void 0!==n&&(e=Math.max(n,e)),void 0!==a&&(e=Math.min(e,a)),e}))}return o!==e.space&&(i=id(i,e.space)),e.coords=i.coords,e}function id(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).inGamut
e=qc(e)
var n=(t=Mc.get(t)).from(e),a={space:t,coords:n,alpha:e.alpha}
return r&&(a=od(a)),a}function ud(e){var t,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.precision,i=void 0===o?Nc.precision:o,u=a.format,s=void 0===u?"default":u,l=a.inGamut,c=void 0===l||l,d=j(a,D),p=s
s=null!==(t=null!==(r=(e=qc(e)).space.getFormat(s))&&void 0!==r?r:e.space.getFormat("default"))&&void 0!==t?t:Mc.DEFAULT_FORMAT,c||(c=s.toGamut)
var f=e.coords
if(f=f.map((function(e){return e||0})),c&&!nd(e)&&(f=od(ad(e),!0===c?void 0:c).coords),"custom"===s.type){if(d.precision=i,!s.serialize)throw new TypeError("format ".concat(p," can only be used to parse colors, not for serialization"))
n=s.serialize(f,e.alpha,d)}else{var h=s.name||"color"
s.serializeCoords?f=s.serializeCoords(f,i):null!==i&&(f=f.map((function(e){return vc(e,i)})))
var m=q(f)
if("color"===h){var g,v=s.id||(null===(g=s.ids)||void 0===g?void 0:g[0])||e.space.id
m.unshift(v)}var b=e.alpha
null!==i&&(b=vc(b,i))
var y=e.alpha<1&&!s.noAlpha?"".concat(s.commas?",":" /"," ").concat(b):""
n="".concat(h,"(").concat(m.join(s.commas?", ":" ")).concat(y,")")}return n}od.returns="color",id.returns="color"
var sd=new Pc({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],formats:{color:{}}}),ld=1.09929682680944,cd=.018053968510807,dd=new Pc({id:"rec2020",name:"REC.2020",base:sd,toBase:function(e){return e.map((function(e){return e<4.5*cd?e/4.5:Math.pow((e+ld-1)/ld,1/.45)}))},fromBase:function(e){return e.map((function(e){return e>=cd?ld*Math.pow(e,.45)-(ld-1):4.5*e}))},formats:{color:{}}}),pd=new Pc({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),fd=new Pc({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ_M:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],formats:{color:{}}}),hd={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[.6,50/255,.8],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,.6],lightslategrey:[119/255,136/255,.6],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[.4,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,.8],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[.4,.2,.6],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},md=Array(3).fill("<percentage> | <number>[0, 255]"),Dd=Array(3).fill("<number>[0, 255]"),gd=new Pc({id:"srgb",name:"sRGB",base:fd,fromBase:function(e){return e.map((function(e){var t=e<0?-1:1,r=e*t
return r>.0031308?t*(1.055*Math.pow(r,1/2.4)-.055):12.92*e}))},toBase:function(e){return e.map((function(e){var t=e<0?-1:1,r=e*t
return r<.04045?e/12.92:t*Math.pow((r+.055)/1.055,2.4)}))},formats:{rgb:{coords:md},rgb_number:{name:"rgb",commas:!0,coords:Dd,noAlpha:!0},color:{},rgba:{coords:md,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Dd},hex:{type:"custom",toGamut:!0,test:function(e){return/^#([a-f0-9]{3,4}){1,2}$/i.test(e)},parse:function(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"))
var t=[]
return e.replace(/[a-f0-9]{2}/gi,(function(e){t.push(parseInt(e,16)/255)})),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:function(e,t){var r=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).collapse,n=void 0===r||r
t<1&&e.push(t),e=e.map((function(e){return Math.round(255*e)}))
var a=n&&e.every((function(e){return e%17==0}))
return"#"+e.map((function(e){return a?(e/17).toString(16):e.toString(16).padStart(2,"0")})).join("")}},keyword:{type:"custom",test:function(e){return/^[a-z]+$/i.test(e)},parse:function(e){var t={spaceId:"srgb",coords:null,alpha:1}
if("transparent"===(e=e.toLowerCase())?(t.coords=hd.black,t.alpha=0):t.coords=hd[e],t.coords)return t}}}}),vd=new Pc({id:"p3",name:"P3",base:pd,fromBase:gd.fromBase,toBase:gd.toBase,formats:{color:{id:"display-p3"}}})
if(Nc.display_space=gd,"undefined"!=typeof CSS&&null!==(T=CSS)&&void 0!==T&&T.supports)for(var bd=0,yd=[Qc,dd,vd];bd<yd.length;bd++){var Fd=yd[bd],wd=Fd.getMinCoords(),Ed=ud({space:Fd,coords:wd,alpha:1})
if(CSS.supports("color",Ed)){Nc.display_space=Fd
break}}function Cd(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.space,a=void 0===n?Nc.display_space:n,o=j(r,g),i=ud(e,o)
if("undefined"==typeof CSS||null!==(t=CSS)&&void 0!==t&&t.supports("color",i)||!Nc.display_space)(i=new String(i)).color=e
else{var u=id(e,a);(i=new String(ud(u,o))).color=u}return i}function xd(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lab",n=(r=Mc.get(r)).from(e),a=r.from(t)
return Math.sqrt(n.reduce((function(e,t,r){var n=a[r]
return isNaN(t)||isNaN(n)?e:e+Math.pow(n-t,2)}),0))}function Ad(e){return zc(e,[Ic,"y"])}function kd(e,t){Uc(e,[Ic,"y"],t)}var Nd=Object.freeze({__proto__:null,getLuminance:Ad,setLuminance:kd,register:function(e){Object.defineProperty(e.prototype,"luminance",{get:function(){return Ad(this)},set:function(e){kd(this,e)}})}})
function Td(e){return e>=.022?e:e+Math.pow(.022-e,1.414)}function Bd(e){var t=e<0?-1:1,r=Math.abs(e)
return t*Math.pow(r,2.4)}var Rd=216/24389,_d=24/116,Sd=24389/27,Od=Tc.D65,Md=new Mc({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Od,base:Ic,fromBase:function(e){var t=e.map((function(e,t){return e/Od[t]})).map((function(e){return e>Rd?Math.cbrt(e):(Sd*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>_d?Math.pow(t[0],3):(116*t[0]-16)/Sd,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Sd,t[2]>_d?Math.pow(t[2],3):(116*t[2]-16)/Sd].map((function(e,t){return e*Od[t]}))},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}}),Id=.5*Math.pow(5,.5)+.5,Pd=Object.freeze({__proto__:null,contrastWCAG21:function(e,t){e=qc(e),t=qc(t)
var r=Math.max(Ad(e),0),n=Math.max(Ad(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}return(r+.05)/(n+.05)},contrastAPCA:function(e,t){var r,n,a,o
t=qc(t),e=qc(e)
var i=V((t=id(t,"srgb")).coords,3)
n=i[0],a=i[1],o=i[2]
var u=.2126729*Bd(n)+.7151522*Bd(a)+.072175*Bd(o),s=V((e=id(e,"srgb")).coords,3)
n=s[0],a=s[1],o=s[2]
var l=.2126729*Bd(n)+.7151522*Bd(a)+.072175*Bd(o),c=Td(u),d=Td(l),p=d>c
return r=Math.abs(d-c)<5e-4?0:p?1.14*(Math.pow(d,.56)-Math.pow(c,.57)):1.14*(Math.pow(d,.65)-Math.pow(c,.62)),100*(Math.abs(r)<.1?0:r>0?r-.027:r+.027)},contrastMichelson:function(e,t){e=qc(e),t=qc(t)
var r=Math.max(Ad(e),0),n=Math.max(Ad(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}var o=r+n
return 0===o?0:(r-n)/o},contrastWeber:function(e,t){e=qc(e),t=qc(t)
var r=Math.max(Ad(e),0),n=Math.max(Ad(t),0)
if(n>r){var a=[n,r]
r=a[0],n=a[1]}return 0===n?5e4:(r-n)/n},contrastLstar:function(e,t){e=qc(e),t=qc(t)
var r=zc(e,[Qc,"l"]),n=zc(t,[Qc,"l"])
return Math.abs(r-n)},contrastDeltaPhi:function(e,t){e=qc(e),t=qc(t)
var r=zc(e,[Md,"l"]),n=zc(t,[Md,"l"]),a=Math.abs(Math.pow(r,Id)-Math.pow(n,Id)),o=Math.pow(a,1/Id)*Math.SQRT2-40
return o<7.5?0:o}})
function jd(e){var t=V(Lc(e,Ic),3),r=t[0],n=t[1],a=r+15*n+3*t[2]
return[4*r/a,9*n/a]}function qd(e){var t=V(Lc(e,Ic),3),r=t[0],n=t[1],a=r+n+t[2]
return[r/a,n/a]}var Ld=Object.freeze({__proto__:null,uv:jd,xy:qd,register:function(e){Object.defineProperty(e.prototype,"uv",{get:function(){return jd(this)}}),Object.defineProperty(e.prototype,"xy",{get:function(){return qd(this)}})}}),zd=Math.PI/180,Vd=new Mc({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:Ic,fromBase:function(e){return e.map((function(e){return Math.max(203*e,0)}))},toBase:function(e){return e.map((function(e){return Math.max(e/203,0)}))}}),Ud=1.15,Hd=.66,$d=2610/Math.pow(2,14),Gd=Math.pow(2,14)/2610,Wd=3424/Math.pow(2,12),Yd=2413/Math.pow(2,7),Qd=2392/Math.pow(2,7),Kd=1.7*2523/Math.pow(2,5),Xd=Math.pow(2,5)/(1.7*2523),Zd=-.56,Jd=16295499532821565e-27,ep=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],tp=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],rp=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],np=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],ap=new Mc({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:Vd,fromBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=mc(ep,[Ud*r-(Ud-1)*a,Hd*n-(Hd-1)*r,a]).map((function(e){var t=Wd+Yd*Math.pow(e/1e4,$d),r=1+Qd*Math.pow(e/1e4,$d)
return Math.pow(t/r,Kd)})),i=V(mc(rp,o),3),u=i[0],s=i[1],l=i[2]
return[(1+Zd)*u/(1+Zd*u)-Jd,s,l]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=mc(np,[(r+Jd)/(1+Zd-Zd*(r+Jd)),n,a]).map((function(e){var t=Wd-Math.pow(e,Xd),r=Qd*Math.pow(e,Xd)-Yd
return 1e4*Math.pow(t/r,Gd)})),i=V(mc(tp,o),3),u=i[0],s=i[1],l=i[2],c=(u+(Ud-1)*l)/Ud
return[c,(s+(Hd-1)*c)/Hd,l]},formats:{color:{}}}),op=new Mc({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:ap,fromBase:function(e){var t,r=V(e,3),n=r[0],a=r[1],o=r[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Kc(t)]},toBase:function(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}}),ip=.8359375,up=2413/128,sp=18.6875,lp=2610/16384,cp=16384/2610,dp=32/2523,pp=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],fp=[[.5,.5,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],hp=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],mp=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]],Dp=new Mc({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:Vd,fromBase:function(e){return t=mc(pp,e).map((function(e){var t=ip+up*Math.pow(e/1e4,lp),r=1+sp*Math.pow(e/1e4,lp)
return Math.pow(t/r,78.84375)})),mc(fp,t)
var t},toBase:function(e){var t=function(e){return mc(hp,e).map((function(e){var t=Math.max(Math.pow(e,dp)-ip,0),r=up-sp*Math.pow(e,dp)
return 1e4*Math.pow(t/r,cp)}))}(e)
return mc(mp,t)},formats:{color:{}}}),gp=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],vp=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],bp=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],yp=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],Fp=new Mc({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:Ic,fromBase:function(e){var t=mc(gp,e).map((function(e){return Math.cbrt(e)}))
return mc(bp,t)},toBase:function(e){var t=mc(yp,e).map((function(e){return Math.pow(e,3)}))
return mc(vp,t)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}}),wp=Object.freeze({__proto__:null,deltaE76:function(e,t){return xd(e,t,"lab")},deltaECMC:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.l,a=void 0===n?2:n,o=r.c,i=void 0===o?1:o,u=V(Qc.from(e),3),s=u[0],l=u[1],c=u[2],d=V(Xc.from(Qc,[s,l,c]),3),p=d[1],f=d[2],h=V(Qc.from(t),3),m=h[0],D=h[1],g=h[2],v=Xc.from(Qc,[m,D,g])[1]
p<0&&(p=0),v<0&&(v=0)
var b=s-m,y=p-v,F=l-D,w=c-g,E=Math.pow(F,2)+Math.pow(w,2)-Math.pow(y,2),C=.511
s>=16&&(C=.040975*s/(1+.01765*s))
var x,A=.0638*p/(1+.0131*p)+.638
Number.isNaN(f)&&(f=0),x=f>=164&&f<=345?.56+Math.abs(.2*Math.cos((f+168)*zd)):.36+Math.abs(.4*Math.cos((f+35)*zd))
var k=Math.pow(p,4),N=Math.sqrt(k/(k+1900)),T=A*(N*x+1-N),B=Math.pow(b/(a*C),2)
return B+=Math.pow(y/(i*A),2),B+=E/Math.pow(T,2),Math.sqrt(B)},deltaE2000:rd,deltaEJz:function(e,t){var r=V(op.from(e),3),n=r[0],a=r[1],o=r[2],i=V(op.from(t),3),u=i[0],s=i[1],l=i[2],c=n-u,d=a-s
Number.isNaN(o)&&Number.isNaN(l)?(o=0,l=0):Number.isNaN(o)?o=l:Number.isNaN(l)&&(l=o)
var p=o-l,f=2*Math.sqrt(a*s)*Math.sin(p/2*(Math.PI/180))
return Math.sqrt(Math.pow(c,2)+Math.pow(d,2)+Math.pow(f,2))},deltaEITP:function(e,t){var r=V(Dp.from(e),3),n=r[0],a=r[1],o=r[2],i=V(Dp.from(t),3),u=i[0],s=i[1],l=i[2]
return 720*Math.sqrt(Math.pow(n-u,2)+.25*Math.pow(a-s,2)+Math.pow(o-l,2))},deltaEOK:function(e,t){var r=V(Fp.from(e),3),n=r[0],a=r[1],o=r[2],i=V(Fp.from(t),3),u=n-i[0],s=a-i[1],l=o-i[2]
return Math.sqrt(Math.pow(u,2)+Math.pow(s,2)+Math.pow(l,2))}})
function Ep(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Dc(r)&&(r={method:r})
var n=r,a=n.method,o=void 0===a?Nc.deltaE:a,i=j(n,b)
for(var u in e=qc(e),t=qc(t),wp)if("deltae"+o.toLowerCase()===u.toLowerCase())return wp[u](e,t,i)
throw new TypeError("Unknown deltaE method: ".concat(o))}var Cp=Object.freeze({__proto__:null,lighten:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Uc(e,[Mc.get("oklch","lch"),"l"],(function(e){return e*(1+t)}))},darken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return Uc(e,[Mc.get("oklch","lch"),"l"],(function(e){return e*(1-t)}))}})
function xp(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[qc(e),qc(t)]
if(e=a[0],t=a[1],"object"===gc(r)){var o=[.5,r]
r=o[0],n=o[1]}var i=n
return kp(e,t,{space:i.space,outputSpace:i.outputSpace,premultiplied:i.premultiplied})(r)}function Ap(e,t){var r,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Np(e)){n=t
var a=V((r=e).rangeArgs.colors,2)
e=a[0],t=a[1]}var o=n,i=o.maxDeltaE,u=o.deltaEMethod,s=o.steps,l=void 0===s?2:s,c=o.maxSteps,d=void 0===c?1e3:c,p=j(o,y)
if(!r){var f=[qc(e),qc(t)]
r=kp(e=f[0],t=f[1],p)}var h=Ep(e,t),m=i>0?Math.max(l,Math.ceil(h/i)+1):l,D=[]
if(void 0!==d&&(m=Math.min(m,d)),1===m)D=[{p:.5,color:r(.5)}]
else{var g=1/(m-1)
D=Array.from({length:m},(function(e,t){var n=t*g
return{p:n,color:r(n)}}))}if(i>0)for(var v=D.reduce((function(e,t,r){if(0===r)return 0
var n=Ep(t.color,D[r-1].color,u)
return Math.max(e,n)}),0);v>i;){v=0
for(var b=1;b<D.length&&D.length<d;b++){var F=D[b-1],w=D[b],E=(w.p+F.p)/2,C=r(E)
v=Math.max(v,Ep(C,F.color),Ep(C,w.color)),D.splice(b,0,{p:E,color:r(E)}),b++}}return D=D.map((function(e){return e.color}))}function kp(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(Np(e)){var n=e,a=t
return kp.apply(void 0,q(n.rangeArgs.colors).concat([z({},n.rangeArgs.options,a)]))}var o=r.space,i=r.outputSpace,u=r.progression,s=r.premultiplied
e=qc(e),t=qc(t),e=ad(e),t=ad(t)
var l={colors:[e,t],options:r}
if(o=o?Mc.get(o):Mc.registry[Nc.interpolationSpace]||e.space,i=i?Mc.get(i):o,e=id(e,o),t=id(t,o),e=od(e),t=od(t),o.coords.h&&"angle"===o.coords.h.type){var c=r.hue=r.hue||"shorter",d=[o,"h"],p=[zc(e,d),zc(t,d)],f=p[0],h=p[1],m=function(e,t){if("raw"===e)return t
var r=V(t.map(Kc),2),n=r[0],a=r[1],o=a-n
return"increasing"===e?o<0&&(a+=360):"decreasing"===e?o>0&&(n+=360):"longer"===e?-180<o&&o<180&&(o>0?a+=360:n+=360):"shorter"===e&&(o>180?n+=360:o<-180&&(a+=360)),[n,a]}(c,[f,h]),D=V(m,2)
f=D[0],h=D[1],Uc(e,d,f),Uc(t,d,h)}return s&&(e.coords=e.coords.map((function(t){return t*e.alpha})),t.coords=t.coords.map((function(e){return e*t.alpha}))),Object.assign((function(r){r=u?u(r):r
var n=e.coords.map((function(e,n){return Fc(e,t.coords[n],r)})),a=Fc(e.alpha,t.alpha,r),l={space:o,coords:n,alpha:a}
return s&&(l.coords=l.coords.map((function(e){return e/a}))),i!==o&&(l=id(l,i)),l}),{rangeArgs:l})}function Np(e){return"function"===gc(e)&&!!e.rangeArgs}Nc.interpolationSpace="lab"
var Tp=Object.freeze({__proto__:null,mix:xp,steps:Ap,range:kp,isRange:Np,register:function(e){e.defineFunction("mix",xp,{returns:"color"}),e.defineFunction("range",kp,{returns:"function<color>"}),e.defineFunction("steps",Ap,{returns:"array<color>"})}}),Bp=new Mc({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:gd,fromBase:function(e){var t=Math.max.apply(Math,q(e)),r=Math.min.apply(Math,q(e)),n=V(e,3),a=n[0],o=n[1],i=n[2],u=NaN,s=0,l=(r+t)/2,c=t-r
if(0!==c){switch(s=0===l||1===l?0:(t-l)/Math.min(l,1-l),t){case a:u=(o-i)/c+(o<i?6:0)
break
case o:u=(i-a)/c+2
break
case i:u=(a-o)/c+4}u*=60}return[u,100*s,100*l]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2]
function o(e){var t=(e+r/30)%12,o=n*Math.min(a,1-a)
return a-o*Math.max(-1,Math.min(t-3,9-t,1))}return(r%=360)<0&&(r+=360),n/=100,a/=100,[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),Rp=new Mc({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:Bp,fromBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=(a/=100)+(n/=100)*Math.min(a,1-a)
return[r,0===o?0:200*(1-a/o),100*o]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=(a/=100)*(1-(n/=100)/2)
return[r,0===o||1===o?0:(a-o)/Math.min(o,1-o)*100,100*o]},formats:{color:{toGamut:!0}}}),_p=new Mc({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:Rp,fromBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2]
return[r,a*(100-n)/100,100-a]},toBase:function(e){var t=V(e,3),r=t[0],n=t[1],a=t[2],o=(n/=100)+(a/=100)
if(o>=1)return[r,0,n/o*100]
var i=1-a
return[r,100*(0===i?0:1-n/i),100*i]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}}),Sp=new Pc({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),Op=new Pc({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:Sp,toBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),563/256)*Math.sign(e)}))},fromBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),256/563)*Math.sign(e)}))},formats:{color:{id:"a98-rgb"}}}),Mp=new Pc({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Hc,toXYZ_M:[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],fromXYZ_M:[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]]}),Ip=1/512,Pp=new Pc({id:"prophoto",name:"ProPhoto",base:Mp,toBase:function(e){return e.map((function(e){return e<.03125?e/16:Math.pow(e,1.8)}))},fromBase:function(e){return e.map((function(e){return e>=Ip?Math.pow(e,1/1.8):16*e}))},formats:{color:{id:"prophoto-rgb"}}}),jp=new Mc({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Fp,fromBase:function(e){var t,r=V(e,3),n=r[0],a=r[1],o=r[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[n,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),Kc(t)]},toBase:function(e){var t,r,n=V(e,3),a=n[0],o=n[1],i=n[2]
return isNaN(i)?(t=0,r=0):(t=o*Math.cos(i*Math.PI/180),r=o*Math.sin(i*Math.PI/180)),[a,t,r]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),qp=2610/Math.pow(2,14),Lp=Math.pow(2,14)/2610,zp=2523/Math.pow(2,5),Vp=Math.pow(2,5)/2523,Up=3424/Math.pow(2,12),Hp=2413/Math.pow(2,7),$p=2392/Math.pow(2,7),Gp=new Pc({id:"rec2100pq",name:"REC.2100-PQ",base:sd,toBase:function(e){return e.map((function(e){return 1e4*Math.pow(Math.max(Math.pow(e,Vp)-Up,0)/(Hp-$p*Math.pow(e,Vp)),Lp)/203}))},fromBase:function(e){return e.map((function(e){var t=Math.max(203*e/1e4,0),r=Up+Hp*Math.pow(t,qp),n=1+$p*Math.pow(t,qp)
return Math.pow(r/n,zp)}))},formats:{color:{id:"rec2100-pq"}}}),Wp=.17883277,Yp=.28466892,Qp=.55991073,Kp=3.7743,Xp=new Pc({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:sd,toBase:function(e){return e.map((function(e){return e<=.5?Math.pow(e,2)/3*Kp:Math.exp((e-Qp)/Wp+Yp)/12*Kp}))},fromBase:function(e){return e.map((function(e){return(e/=Kp)<=1/12?Math.sqrt(3*e):Wp*Math.log(12*e-Yp)+Qp}))},formats:{color:{id:"rec2100-hlg"}}}),Zp={}
function Jp(e){var t=e.id
e.toCone_M,e.fromCone_M,Zp[t]=arguments[0]}function ef(e,t){var r=Zp[arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Bradford"],n=V(mc(r.toCone_M,e),3),a=n[0],o=n[1],i=n[2],u=V(mc(r.toCone_M,t),3),s=mc([[u[0]/a,0,0],[0,u[1]/o,0],[0,0,u[2]/i]],r.toCone_M)
return mc(r.fromCone_M,s)}kc.add("chromatic-adaptation-start",(function(e){e.options.method&&(e.M=ef(e.W1,e.W2,e.options.method))})),kc.add("chromatic-adaptation-end",(function(e){e.M||(e.M=ef(e.W1,e.W2,e.options.method))})),Jp({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]}),Jp({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]}),Jp({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]}),Jp({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]}),Object.assign(Tc,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),Tc.ACES=[.32168/.33767,1,.34065/.33767]
var tf=new Pc({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:Tc.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],formats:{color:{}}}),rf=Math.pow(2,-16),nf=-.35828683,af=(Math.log2(65504)+9.72)/17.52,of=new Pc({id:"acescc",name:"ACEScc",coords:{r:{range:[nf,af],name:"Red"},g:{range:[nf,af],name:"Green"},b:{range:[nf,af],name:"Blue"}},referred:"scene",base:tf,toBase:function(e){return e.map((function(e){return e<=-.3013698630136986?2*(Math.pow(2,17.52*e-9.72)-rf):e<af?Math.pow(2,17.52*e-9.72):65504}))},fromBase:function(e){return e.map((function(e){return e<=0?(Math.log2(rf)+9.72)/17.52:e<rf?(Math.log2(rf+.5*e)+9.72)/17.52:(Math.log2(e)+9.72)/17.52}))},formats:{color:{}}}),uf=Object.freeze({__proto__:null,XYZ_D65:Ic,XYZ_D50:Hc,XYZ_ABS_D65:Vd,Lab_D65:Md,Lab:Qc,LCH:Xc,sRGB_Linear:fd,sRGB:gd,HSL:Bp,HWB:_p,HSV:Rp,P3_Linear:pd,P3:vd,A98RGB_Linear:Sp,A98RGB:Op,ProPhoto_Linear:Mp,ProPhoto:Pp,REC_2020_Linear:sd,REC_2020:dd,OKLab:Fp,OKLCH:jp,Jzazbz:ap,JzCzHz:op,ICTCP:Dp,REC_2100_PQ:Gp,REC_2100_HLG:Xp,ACEScg:tf,ACEScc:of}),sf=(O=new WeakMap,W((function e(){var t,r,n,a,o=this
$(this,e),_(this,O,void 0)
for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s]
1===u.length&&(t=qc(u[0])),t?(r=t.space||t.spaceId,n=t.coords,a=t.alpha):(r=u[0],n=u[1],a=u[2]),I(O,this,Mc.get(r)),this.coords=n?n.slice():[0,0,0],this.alpha=a<1?a:1
for(var l=0;l<this.coords.length;l++)"NaN"===this.coords[l]&&(this.coords[l]=NaN)
var c=function(e){Object.defineProperty(o,e,{get:function(){return o.get(e)},set:function(t){return o.set(e,t)}})}
for(var d in M(O,this).coords)c(d)}),[{key:"space",get:function(){return M(O,this)}},{key:"spaceId",get:function(){return M(O,this).id}},{key:"clone",value:function(){return new sf(this.space,this.coords,this.alpha)}},{key:"toJSON",value:function(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}},{key:"display",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
var n=Cd.apply(void 0,[this].concat(t))
return n.color=new sf(n.color),n}}],[{key:"get",value:function(e){if(e instanceof sf)return e
for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return function(e,t,r){if(N())return Reflect.construct.apply(null,arguments)
var n=[null]
n.push.apply(n,t)
var a=new(e.bind.apply(e,n))
return r&&R(a,r.prototype),a}(sf,[e].concat(r))}},{key:"defineFunction",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,n=r.instance,a=void 0===n||n,o=r.returns,i=function(){var e=t.apply(void 0,arguments)
if("color"===o)e=sf.get(e)
else if("function<color>"===o){var r=e
e=function(){var e=r.apply(void 0,arguments)
return sf.get(e)},Object.assign(e,r)}else"array<color>"===o&&(e=e.map((function(e){return sf.get(e)})))
return e}
e in sf||(sf[e]=i),a&&(sf.prototype[e]=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return i.apply(void 0,[this].concat(t))})}},{key:"defineFunctions",value:function(e){for(var t in e)sf.defineFunction(t,e[t],e[t])}},{key:"extend",value:function(e){if(e.register)e.register(sf)
else for(var t in e)sf.defineFunction(t,e[t])}}]))
sf.defineFunctions({get:zc,getAll:Lc,set:Uc,setAll:Vc,to:id,equals:function(e,t){return e=qc(e),t=qc(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((function(e,r){return e===t.coords[r]}))},inGamut:nd,toGamut:od,distance:xd,toString:ud}),Object.assign(sf,{util:xc,hooks:kc,WHITES:Tc,Space:Mc,spaces:Mc.registry,parse:jc,defaults:Nc})
for(var lf=0,cf=Object.keys(uf);lf<cf.length;lf++){var df=cf[lf]
Mc.register(uf[df])}for(var pf in Mc.registry)ff(pf,Mc.registry[pf])
function ff(e,t){Object.keys(t.coords),Object.values(t.coords).map((function(e){return e.name}))
var r=e.replace(/-/g,"_")
Object.defineProperty(sf.prototype,r,{get:function(){var r=this,n=this.getAll(e)
return"undefined"==typeof Proxy?n:new Proxy(n,{has:function(e,r){try{return Mc.resolveCoord([t,r]),!0}catch(e){}return Reflect.has(e,r)},get:function(e,r,n){if(r&&"symbol"!==o(r)&&!(r in e)){var a=Mc.resolveCoord([t,r]).index
if(a>=0)return e[a]}return Reflect.get(e,r,n)},set:function(n,a,i,u){if(a&&"symbol"!==o(a)&&!(a in n)||a>=0){var s=Mc.resolveCoord([t,a]).index
if(s>=0)return n[s]=i,r.setAll(e,n),!0}return Reflect.set(n,a,i,u)}})},set:function(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}kc.add("colorspace-init-end",(function(e){var t
ff(e.id,e),null===(t=e.aliases)||void 0===t||t.forEach((function(t){ff(t,e)}))})),sf.extend(wp),sf.extend({deltaE:Ep}),sf.extend(Cp),sf.extend({contrast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Dc(r)&&(r={algorithm:r})
var n=r,a=n.algorithm,o=j(n,v)
if(!a){var i=Object.keys(Pd).map((function(e){return e.replace(/^contrast/,"")})).join(", ")
throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(i))}for(var u in e=qc(e),t=qc(t),Pd)if("contrast"+a.toLowerCase()===u.toLowerCase())return Pd[u](e,t,o)
throw new TypeError("Unknown contrast algorithm: ".concat(a))}}),sf.extend(Ld),sf.extend(Nd),sf.extend(Tp),sf.extend(Pd)
var hf=de(Kn())
fc.default.templateSettings.strip=!1
var mf=/^#[0-9a-f]{3,8}$/i,Df=/hsl\(\s*([-\d.]+)(rad|turn)/,gf=(G=new WeakMap,X=new WeakMap,Z=new WeakMap,J=new WeakMap,ee=new WeakMap,te=new WeakMap,re=new WeakSet,W((function e(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
if($(this,e),S(this,re),_(this,G,void 0),_(this,X,void 0),_(this,Z,void 0),_(this,J,void 0),_(this,ee,void 0),_(this,te,void 0),t instanceof gf){var o=t.r,i=t.g,u=t.b
return this.r=o,this.g=i,this.b=u,void(this.alpha=t.alpha)}this.red=t,this.green=r,this.blue=n,this.alpha=a}),[{key:"r",get:function(){return M(G,this)},set:function(e){I(G,this,e),I(J,this,Math.round(255*yf(e,0,1)))}},{key:"g",get:function(){return M(X,this)},set:function(e){I(X,this,e),I(ee,this,Math.round(255*yf(e,0,1)))}},{key:"b",get:function(){return M(Z,this)},set:function(e){I(Z,this,e),I(te,this,Math.round(255*yf(e,0,1)))}},{key:"red",get:function(){return M(J,this)},set:function(e){I(G,this,e/255),I(J,this,yf(e,0,255))}},{key:"green",get:function(){return M(ee,this)},set:function(e){I(X,this,e/255),I(ee,this,yf(e,0,255))}},{key:"blue",get:function(){return M(te,this)},set:function(e){I(Z,this,e/255),I(te,this,yf(e,0,255))}},{key:"toHexString",value:function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),r=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?r:"0"+r)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}},{key:"parseString",value:function(e){e=e.replace(Df,(function(e,t,r){var n=t+r
switch(r){case"rad":return e.replace(n,180*t/Math.PI)
case"turn":return e.replace(n,360*t)}}))
try{var t
"Prototype"in r&&"Version"in r.Prototype&&(t=Array.from,Array.from=hf.default)
var n=new sf(e).to("srgb")
t&&(Array.from=t,t=null),this.r=n.r,this.g=n.g,this.b=n.b,this.alpha=+n.alpha}catch(t){throw new Error('Unable to parse color "'.concat(e,'"'))}return this}},{key:"parseRgbString",value:function(e){this.parseString(e)}},{key:"parseHexString",value:function(e){e.match(mf)&&![6,8].includes(e.length)&&this.parseString(e)}},{key:"parseColorFnString",value:function(e){this.parseString(e)}},{key:"getRelativeLuminance",value:function(){var e=this.r,t=this.g,r=this.b
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))}},{key:"getLuminosity",value:function(){return.3*this.r+.59*this.g+.11*this.b}},{key:"setLuminosity",value:function(e){var t=e-this.getLuminosity()
return P(re,this,vf).call(this,t).clip()}},{key:"getSaturation",value:function(){return Math.max(this.r,this.g,this.b)-Math.min(this.r,this.g,this.b)}},{key:"setSaturation",value:function(e){var t=new gf(this),r=V([{name:"r",value:t.r},{name:"g",value:t.g},{name:"b",value:t.b}].sort((function(e,t){return e.value-t.value})),3),n=r[0],a=r[1],o=r[2]
return o.value>n.value?(a.value=(a.value-n.value)*e/(o.value-n.value),o.value=e):a.value=o.value=0,n.value=0,t[o.name]=o.value,t[n.name]=n.value,t[a.name]=a.value,t}},{key:"clip",value:function(){var e=new gf(this),t=e.getLuminosity(),r=Math.min(e.r,e.g,e.b),n=Math.max(e.r,e.g,e.b)
return r<0&&(e.r=t+(e.r-t)*t/(t-r),e.g=t+(e.g-t)*t/(t-r),e.b=t+(e.b-t)*t/(t-r)),n>1&&(e.r=t+(e.r-t)*(1-t)/(n-t),e.g=t+(e.g-t)*(1-t)/(n-t),e.b=t+(e.b-t)*(1-t)/(n-t)),e}}]))
function vf(e){var t=new gf(this)
return t.r+=e,t.g+=e,t.b+=e,t}var bf=gf
function yf(e,t,r){return Math.min(Math.max(t,e),r)}var Ff=function(e){var t=new bf
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var r=e.getPropertyValue("opacity")
t.alpha=t.alpha*r}return t},wf=function(e){var t=r.getComputedStyle(e)
return oc(e,t)||1===Ff(t).alpha}
function Ef(e){if(!e.href)return!1
var t=Xa.get("firstPageLink",Cf)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function Cf(){return(r.location.origin?lm(i._tree,'a[href]:not([href^="javascript:"])').find((function(e){return!qu(e.actualNode)})):lm(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var xf=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Af=/(\w+)\((\d+)/,kf=function e(t,n,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var u=t instanceof ra?t:Za(t)
t=u?u.actualNode:t
var s="_isVisible"+(n?"ScreenReader":""),l=null!==(o=r.Node)&&void 0!==o?o:{},c=l.DOCUMENT_NODE,d=l.DOCUMENT_FRAGMENT_NODE,p=u?u.props.nodeType:t.nodeType,f=u?u.props.nodeName:t.nodeName.toLowerCase()
if(u&&void 0!==u[s])return u[s]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),n&&"true"===(u?u.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=u.parent,m=!0
return h&&(m=e(h,n,!0)),u&&(u[s]=m),m}var D=r.getComputedStyle(t,null)
if(null===D)return!1
if("area"===f)return function(t,r,n){var a=Ai(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var u=Ei(t)
if(!u||9!==u.nodeType)return!1
var s=lm(i._tree,'img[usemap="#'.concat(va(o),'"]'))
return!(!s||!s.length)&&s.some((function(t){return e(t.actualNode,r,n)}))}(t,n,a)
if("none"===D.getPropertyValue("display"))return!1
var g=parseInt(D.getPropertyValue("height")),v=parseInt(D.getPropertyValue("width")),b=Eh(t),y=b&&0===g,F=b&&0===v,w="absolute"===D.getPropertyValue("position")&&(g<2||v<2)&&"hidden"===D.getPropertyValue("overflow")
if(!n&&(function(e){var t=e.getPropertyValue("clip").match(xf),r=e.getPropertyValue("clip-path").match(Af)
if(t&&5===t.length){var n=e.getPropertyValue("position")
if(["fixed","absolute"].includes(n))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(r){var a=r[1],o=parseInt(r[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(D)||"0"===D.getPropertyValue("opacity")||y||F||w))return!1
if(!a&&("hidden"===D.getPropertyValue("visibility")||!n&&Xi(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,n,!0)),u&&(u[s]=C),C},Nf=function(e,t){for(var n=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var u=e[i]
u===t&&(o=!0)
var s=r.getComputedStyle(u)
o||-1===n.indexOf(s.position)?a.push(u):a=[]}return a}
function Tf(e,t){var r=Bf(t)
do{var n=Bf(e)
if(n===r||n===t)return Rf(e,t)
e=n}while(e)
return!1}function Bf(e){for(var t=Za(e).parent;t;){if(Eh(t.actualNode))return t.actualNode
t=t.parent}}function Rf(e,t){var n=r.getComputedStyle(t),a=n.getPropertyValue("overflow")
if("inline"===n.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),u={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof r.HTMLHtmlElement)&&(u.width=t.scrollWidth,u.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===n.getPropertyValue("white-space")&&(o[0]=u),o.some((function(e){return!(Math.ceil(e.left)<Math.floor(u.left)||Math.ceil(e.top)<Math.floor(u.top)||Math.floor(e.left+e.width)>Math.ceil(u.left+u.width)||Math.floor(e.top+e.height)>Math.ceil(u.top+u.height))}))}var _f=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(n.elementsFromPoint(t,r)||[]).filter((function(e){return Ei(e)===n})).reduce((function(n,a){if(yi(a)){var i=e(t,r,a.shadowRoot,o+1);(n=n.concat(i)).length&&Tf(n[0],a)&&n.push(a)}else n.push(a)
return n}),[])}
function Sf(e){var t={}
if(!e||!e.length)return t
var r=e.substring(1).split("&")
if(!r||!r.length)return t
for(var n=0;n<r.length;n++){var a=V(r[n].split("="),2),o=a[0],i=a[1],u=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(u)}return t}function Of(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===V(t,1)[0]?"":e:""}var Mf,If=function(e,t){if(e.hasAttribute(t)){var r=e.nodeName.toUpperCase(),n=e;["A","AREA"].includes(r)&&!e.ownerSVGElement||((n=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(n.protocol)?n.protocol.replace(/s:$/,":"):n.protocol,u=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(n.pathname)?n.pathname:"/".concat(n.pathname)),s=u.pathname,l=u.filename
return{protocol:i,hostname:n.hostname,port:(o=n.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(s)?s:"".concat(s,"/"),search:Sf(n.search),hash:Of(n.hash),filename:l}}},Pf=function(e,t){var n=t.getBoundingClientRect(),a=n.top,o=n.left,i=a-t.scrollTop,u=a-t.scrollTop+t.scrollHeight,s=o-t.scrollLeft,l=o-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>n.right||e.top>u&&e.top>n.bottom||e.right<s&&e.right<n.left||e.bottom<i&&e.bottom<n.top)return!1
var c=r.getComputedStyle(t)
return!(e.left>n.right||e.top>n.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof r.HTMLBodyElement||t instanceof r.HTMLHtmlElement},jf=0,qf=function(e){function t(e,r,n){var a
if($(this,t),(a=k(this,t)).shadowId=n,a.children=[],a.actualNode=e,a.parent=r,r||(jf=0),a.nodeIndex=jf++,a._isHidden=null,a._cache={},a._isXHTML=ka(e.ownerDocument),"input"===e.nodeName.toLowerCase()){var o=e.getAttribute("type")
o=a._isXHTML?o:(o||"").toLowerCase(),Fm().includes(o)||(o="text"),a._type=o}return Xa.get("nodeMap")&&Xa.get("nodeMap").set(e,a),a}return B(t,e),W(t,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,r=e.nodeName,n=e.id,a=e.nodeValue
this._cache.props={nodeType:t,nodeName:this._isXHTML?r:r.toLowerCase(),id:n,type:this._type,nodeValue:a},1===t&&(this._cache.props.multiple=this.actualNode.multiple,this._cache.props.value=this.actualNode.value,this._cache.props.selected=this.actualNode.selected,this._cache.props.checked=this.actualNode.checked,this._cache.props.indeterminate=this.actualNode.indeterminate)}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof r.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map((function(e){return e.name}))),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=r.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=Yu(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=Gu(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter((function(e){return e.width>0}))),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}])}(ra),Lf=qf,zf=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},Vf=" [idsMap]"
function Uf(e,t,r){var n=e[0]._selectorMap
if(n){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some((function(e){return Hf(e)})))return
var i=new Set
t.forEach((function(e){var t,r=function(e,t,r){var n=e[e.length-1],a=null,o=e.length>1||!!n.pseudos||!!n.classes
if(Hf(n))a=t["*"]
else{if(n.id){var i
if(!t[Vf]||!Object.hasOwn(t[Vf],n.id)||null===(i=t[Vf][n.id])||void 0===i||!i.length)return
a=t[Vf][n.id].filter((function(e){return e.shadowId===r}))}if(n.tag&&"*"!==n.tag){var u
if(null===(u=t[n.tag])||void 0===u||!u.length)return
var s=t[n.tag]
a=a?$f(s,a):s}if(n.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?$f(c,a):c}if(n.attributes)for(var d=0;d<n.attributes.length;d++){var p,f=n.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var h=t["[".concat(f.key,"]")]
a=a?$f(h,a):h}}return{nodes:a,isComplexSelector:o}}(e,n,a)
null==r||null===(t=r.nodes)||void 0===t||t.forEach((function(t){r.isComplexSelector&&!bo(t,e)||i.add(t)}))}))
var u=[]
return i.forEach((function(e){return u.push(e)})),r&&(u=u.filter(r)),u.sort((function(e,t){return e.nodeIndex-t.nodeIndex}))}}function Hf(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function $f(e,t){return e.filter((function(e){return t.includes(e)}))}function Gf(e,t,r){Object.hasOwn(r,e)||(r[e]=[]),r[e].push(t)}function Wf(e,t){1===e.props.nodeType&&(Gf(e.props.nodeName,e,t),Gf("*",e,t),e.attrNames.forEach((function(r){"id"===r&&(t[Vf]=t[Vf]||{},zf(e.attr(r)).forEach((function(r){Gf(r,e,t[Vf])}))),Gf("[".concat(r,"]"),e,t)})))}function Yf(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
Mf=!1
var r={}
Xa.set("nodeMap",new WeakMap),Xa.set("selectorMap",r)
var n=Kf(e,t,null)
return n[0]._selectorMap=r,n[0]._hasShadowRoot=Mf,n}function Qf(e,t,r){var n=new Lf(e,t,r)
return Wf(n,Xa.get("selectorMap")),n}function Kf(e,t,n){var a,o
function i(e,r,n){var a=Kf(r,t,n)
return a&&(e=e.concat(a)),e}e.documentElement&&(e=e.documentElement)
var u=e.nodeName.toLowerCase()
return yi(e)?(Mf=!0,a=Qf(e,n,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce((function(e,t){return i(e,t,a)}),[]),[a]):"content"===u&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce((function(e,t){return i(e,t,n)}),[]):"slot"===u&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),r.getComputedStyle(e),o.reduce((function(e,t){return i(e,t,n)}),[])):1===e.nodeType?(a=Qf(e,n,t),o=Array.from(e.childNodes),a.children=o.reduce((function(e,t){return i(e,t,a)}),[]),[a]):3===e.nodeType?[Qf(e,n)]:void 0}var Xf=function(e){return e?e.trim().split("-")[0].toLowerCase():""},Zf=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map((function(e){if(t[e].length){var r=i._audit.data.failureSummaries[e]
return r&&"function"==typeof r.failureMessage?r.failureMessage(t[e].map((function(e){return e.message||""}))):void 0}})).filter((function(e){return void 0!==e})).join("\n\n")}
function Jf(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var eh=Jn.resultGroups
function th(e,t){var r=i.utils.aggregateResult(e)
return eh.forEach((function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(r[e]||[]).forEach((function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])})),r[e]=(r[e]||[]).map((function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map((function(e){if("object"===o(e.node)){var r=rh(e.node,t)
Object.assign(e,r)}return delete e.result,delete e.node,function(e,t){["any","all","none"].forEach((function(r){Array.isArray(e[r])&&e[r].filter((function(e){return Array.isArray(e.relatedNodes)})).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return rh(e,t)}))}))}))}(e,t),e}))),eh.forEach((function(t){return delete e[t]})),delete e.pageLevel,delete e.result,e}))})),r}function rh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
e=ci.dqElmToSpec(e,t)
var r,n,a,o,u,s={}
return i._audit.noHtml?s.html=null:s.html=null!==(r=e.source)&&void 0!==r?r:"Undefined",t.elementRef&&!e.fromFrame&&(s.element=null!==(n=e.element)&&void 0!==n?n:null),(!1!==t.selectors||e.fromFrame)&&(s.target=null!==(a=e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(s.ancestry=null!==(o=e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(s.xpath=null!==(u=e.xpath)&&void 0!==u?u:["/"]),s}var nh=/\$\{\s?data\s?\}/g
function ah(e,t){if("string"==typeof t)return e.replace(nh,t)
for(var r in t)if(t.hasOwnProperty(r)){var n=new RegExp("\\${\\s?data\\."+r+"\\s?}","g"),a=void 0===t[r]?"":String(t[r])
e=e.replace(n,a)}return e}var oh=function e(t,r){if(t){if(Array.isArray(r))return r.values=r.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?ah(1===r.length?t.singular:t.plural,r):ah(t,r)
if("string"==typeof t)return ah(t,r)
if("string"==typeof r)return ah(t[r],r)
var n=t.default||Jf()
return r&&r.messageKey&&t[r.messageKey]&&(n=t[r.messageKey]),e(n,r)}},ih=function(e,t,r){var n=i._audit.data.checks[e]
if(!n)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!n.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return oh(n.messages[t],r)},uh=function(e,t,r){var n=((r.rules&&r.rules[t]||{}).checks||{})[e.id],a=(r.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),n&&(n.hasOwnProperty("enabled")&&(o=n.enabled),n.hasOwnProperty("options")&&(i=n.options)),{enabled:o,options:i,absolutePaths:r.absolutePaths}}
function sh(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r
return t&&"object"===o(t)?t:"object"!==o(n)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:lh(n),timestamp:(new Date).toISOString(),url:null===(e=n.location)||void 0===e?void 0:e.href}}function lh(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,r=e.navigator,n=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},u=i.angle,s=i.type
return{userAgent:r.userAgent,windowWidth:a,windowHeight:n,orientationAngle:u,orientationType:s}}function ch(e,t){var r=t.focusable,n=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:r&&dh(e),size:ph(e),page:n}}function dh(e){var t=Wh(e.getAttribute("tabindex"))
return null===t||t>=0}function ph(e){var t=parseInt(e.getAttribute("width"),10),r=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(r)){var n=e.getBoundingClientRect()
t=isNaN(t)?n.width:t,r=isNaN(r)?n.height:r}return{width:t,height:r}}function fh(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=[]
Bh(t)||(t=[t])
for(var a=0;a<t.length;a++){var o=(e=t[a])instanceof r.Node?e:"string"==typeof e?[e]:(Mh(e)?(function(e){Dh(Array.isArray(e.fromFrames),"fromFrames property must be an array"),Dh(e.fromFrames.every((function(e){return!Rh(e,"fromFrames")})),"Invalid context; fromFrames selector must be appended, rather than nested"),Dh(!Rh(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):Ih(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,r=[],n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a=t.value
if(Ih(a)&&(hh(a),a=a.fromShadowDom),"string"!=typeof a&&!mh(a))return
r.push(a)}}catch(e){n.e(e)}finally{n.f()}return r}}(e))
o&&n.push(o)}return n}function hh(e){Dh(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),Dh(e.fromShadowDom.every((function(e){return!Rh(e,"fromFrames")})),"shadow selector must be inside fromFrame instead"),Dh(e.fromShadowDom.every((function(e){return!Rh(e,"fromShadowDom")})),"fromShadowDom selector must be appended, rather than nested")}function mh(e){return Array.isArray(e)&&e.every((function(e){return"string"==typeof e}))}function Dh(e,t){Da(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function gh(e,t){for(var n=[],a=0,o=e[t].length;a<o;a++){var i=e[t][a]
if(i instanceof r.Node)i.documentElement instanceof r.Node?n.push(e.flatTree[0]):n.push(Za(i))
else if(i&&i.length)if(i.length>1)vh(e,t,i)
else{var u=bm(i[0])
n.push.apply(n,q(u.map((function(e){return Za(e)}))))}}return n.filter((function(e){return e}))}function vh(e,t,r){e.frames=e.frames||[],bm(r.shift()).forEach((function(n){var a=e.frames.find((function(e){return e.node===n}))
a||(a=ch(n,e),e.frames.push(a)),a[t].push(r)}))}function bh(e,t){var n,i,u,s,l,c=this
e=no(e),this.frames=[],this.page="boolean"==typeof(null===(n=e)||void 0===n?void 0:n.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(u=e)||void 0===u?void 0:u.focusable)||e.focusable,this.size="object"===o(null===(s=e)||void 0===s?void 0:s.size)?e.size:{},e=function(e){if(Sh(e)){var t=" must be used inside include or exclude. It should not be on the same object."
Dh(!Rh(e,"fromFrames"),"fromFrames"+t),Dh(!Rh(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!Oh(e))return{include:[a],exclude:[]}
e={include:e,exclude:[]}}var r=fh(e.include)
return 0===r.length&&r.push(a),{include:r,exclude:fh(e.exclude)}}(e),this.flatTree=null!=t?t:Yf(function(e){for(var t=e.include,n=e.exclude,o=Array.from(t).concat(Array.from(n)),i=0;i<o.length;i++){var u=o[i]
if(u instanceof r.Element)return u.ownerDocument.documentElement
if(u instanceof r.Document)return u.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=gh(this,"include"),this.exclude=gh(this,"exclude"),hm("frame, iframe",this).forEach((function(e){qh(e,c)&&function(e,t){Qs(t)&&!pi(e.frames,"node",t)&&e.frames.push(ch(t,e))}(c,e.actualNode)})),void 0===this.page&&(this.page=1===(l=this.include).length&&l[0].actualNode===a.documentElement,this.frames.forEach((function(e){e.page=c.page}))),function(e){if(0===e.include.length&&0===e.frames.length){var t=ni.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(Vh)}function yh(e){return!1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iframes?[]:new bh(e).frames.map((function(e){var t=e.node,r=j(e,F)
return r.initiator=!1,{frameSelector:Ga(t),frameContext:r}}))}function Fh(e){var t=i._audit.rules.find((function(t){return t.id===e}))
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}function wh(e,t){var r=e.getPropertyValue(t)
return["scroll","auto"].includes(r)}var Eh=Aa((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(n||a){var o=r.getComputedStyle(e),i=wh(o,"overflow-x"),u=wh(o,"overflow-y")
return n&&i||a&&u?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}}))
function Ch(e){return Array.from(e.children||e.childNodes||[]).reduce((function(e,t){var r=Eh(t)
return r&&e.push(r),e.concat(Ch(t))}),[])}var xh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=e.document.documentElement
return[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}].concat(Ch(a.body))}
function Ah(){return no(us)}var kh,Nh=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var r=t.data,n=t.isCrossOrigin,a=void 0!==n&&n,o=t.shadowId,i=t.root,u=t.priority,s=t.isLink,l=void 0!==s&&s,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(r.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(r))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:u}}},Th=function(e){if(kh&&kh.parentNode)return void 0===kh.styleSheet?kh.appendChild(a.createTextNode(e)):kh.styleSheet.cssText+=e,kh
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(kh=a.createElement("style")).type="text/css",void 0===kh.styleSheet?kh.appendChild(a.createTextNode(e)):kh.styleSheet.cssText=e,t.appendChild(kh),kh}}
function Bh(e){return!!e&&"object"===o(e)&&"number"==typeof e.length&&e instanceof r.Node==0}function Rh(e,t){return!(!e||"object"!==o(e))&&Object.prototype.hasOwnProperty.call(e,t)}function _h(e){return Sh(e)||Oh(e)}function Sh(e){return["include","exclude"].some((function(t){return Rh(e,t)&&Oh(e[t])}))}function Oh(e){return"string"==typeof e||e instanceof r.Node||Mh(e)||Ih(e)||Bh(e)}function Mh(e){return Rh(e,"fromFrames")}function Ih(e){return Rh(e,"fromShadowDom")}var Ph=function e(t,n){var a=Za(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=r.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!n&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},jh=function(e){var t,r,n=null!==(t=null===(r=e.props)||void 0===r?void 0:r.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!us.htmlElms[n]}
function qh(e,t){var r=t.include,n=void 0===r?[]:r,a=t.exclude,o=void 0===a?[]:a,i=n.filter((function(t){return Di(t,e)}))
if(0===i.length)return!1
var u=o.filter((function(t){return Di(t,e)}))
if(0===u.length)return!0
var s=Lh(i)
return Di(Lh(u),s)}function Lh(e){var t,r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a=r.value
t&&Di(a,t)||(t=a)}}catch(e){n.e(e)}finally{n.f()}return t}function zh(e,t){return e.length===t.length&&e.every((function(e,r){var n=t[r]
return Array.isArray(e)?e.length===n.length&&e.every((function(e,t){return n[t]===e})):e===n}))}var Vh=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1}
function Uh(e){return e instanceof ra?{vNode:e,domNode:e.actualNode}:{vNode:Za(e),domNode:e}}var Hh=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter((function(e){return 3===e.type}))
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:r,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var u=i.filter((function(e){return e.href})).map((function(e){return e.href})).filter((function(e){return!n.includes(e)})).map((function(e,a){var o=[].concat(q(r),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return Gh(e,t,o,n,i)})),s=o.filter((function(e){return 3!==e.type}))
return s.length?(u.push(Promise.resolve(t.convertDataToStylesheet({data:s.map((function(e){return e.cssText})).join(),isCrossOrigin:a,priority:r,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(u)):Promise.all(u)},$h=function(e,t,r,n){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
return function(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}(e)?Hh(e,t,r,n,a):Gh(e.href,t,r,n,!0)},Gh=function(e,t,n,a,o){return a.push(e),new Promise((function(t,n){var a=new r.XMLHttpRequest
a.open("GET",e),a.timeout=Jn.preload.timeout,a.addEventListener("error",n),a.addEventListener("timeout",n),a.addEventListener("loadend",(function(e){if(e.loaded&&a.responseText)return t(a.responseText)
n(a.responseText)})),a.send()})).then((function(e){var r=t.convertDataToStylesheet({data:e,isCrossOrigin:o,priority:n,root:t.rootNode,shadowId:t.shadowId})
return $h(r.sheet,t,n,a,r.isCrossOrigin)}))},Wh=function(e){if("string"!=typeof e)return null
var t=e.trim().match(/^([-+]?\d+)/)
return t?Number(t[1]):null},Yh=function(){function e(){if(r.performance&&r.performance)return r.performance.now()}var t=null,n=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){r.performance&&void 0!==r.performance.mark&&r.performance.mark(e)},measure:function(e,t,n){r.performance&&void 0!==r.performance.measure&&r.performance.measure(e,t,n)},logMeasures:function(e){function t(e){ea("Measure "+e.name+" took "+e.duration+"ms")}if(r.performance&&void 0!==r.performance.getEntriesByType)for(var n=r.performance.getEntriesByName("mark_axe_start")[0],a=r.performance.getEntriesByType("measure").filter((function(e){return e.startTime>=n.startTime})),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-n},reset:function(){t||(t=e()),n=e()}}}()
function Qh(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),r=t?"pointer-events":"visibility",n=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,u,s,l=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===l.indexOf(i);)l.push(i),c.push({value:i.style.getPropertyValue(r),priority:i.style.getPropertyPriority(r)}),i.style.setProperty(r,n,"important")
for(l.indexOf(a.documentElement)<l.length-1&&(l.splice(l.indexOf(a.documentElement),1),l.push(a.documentElement)),u=c.length;s=c[--u];)l[u].style.setProperty(r,s.value?s.value:"",s.priority)
return a.head.removeChild(o),l}}"function"==typeof r.addEventListener&&(a.elementsFromPoint=Qh())
var Kh=function(e,t){return e.concat(t).filter((function(e,t,r){return r.indexOf(e)===t}))}
function Xh(e,t,r,n,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=r,o.parentShadowId=n,o}var Zh=function(e,t,r){e=Array.isArray(e)?e:[e]
var n=go(t)
return Uf(e,n,r)||function(e,t,r){for(var n=Xa.get("qsa.recycledLocalVariables",(function(){return[]})),a=[],o=Xh(Array.isArray(e)?e:[e],t,null,e[0].shadowId,n.pop()),i=[];o.vNodesIndex<o.vNodes.length;){for(var u,s,l=o.vNodes[o.vNodesIndex++],c=null,d=null,p=((null===(u=o.anyLevel)||void 0===u?void 0:u.length)||0)+((null===(s=o.thisLevel)||void 0===s?void 0:s.length)||0),f=!1,h=0;h<p;h++){var m,D,g,v=h<((null===(m=o.anyLevel)||void 0===m?void 0:m.length)||0)?o.anyLevel[h]:o.thisLevel[h-((null===(D=o.anyLevel)||void 0===D?void 0:D.length)||0)]
if((!v[0].id||l.shadowId===o.parentShadowId)&&bo(l,v[0]))if(1===v.length)f||r&&!r(l)||(i.push(l),f=!0)
else{var b=v.slice(1)
if(!1===[" ",">"].includes(b[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+v[1].combinator)
">"===b[0].combinator?(c=c||[]).push(b):(d=d||[]).push(b)}v[0].id&&l.shadowId!==o.parentShadowId||null===(g=o.anyLevel)||void 0===g||!g.includes(v)||(d=d||[]).push(v)}for(l.children&&l.children.length&&(a.push(o),o=Xh(l.children,d,c,l.shadowId,n.pop()));o.vNodesIndex===o.vNodes.length&&a.length;)n.push(o),o=a.pop()}return i}(e,n,r)},Jh=function(e){var t=e.treeRoot,r=function(e){var t=[],r=Zh(e,"*",(function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)})).map((function(e){return{shadowId:e.shadowId,rootNode:wi(e.actualNode)}}))
return Kh(r,[])}(void 0===t?i._tree[0]:t)
if(!r.length)return Promise.resolve()
var n=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var r=[]
return e.forEach((function(e,n){var a=e.rootNode,o=e.shadowId,i=function(e,t,r){var n
return n=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(tm).reduce((function(r,n){var a=n.nodeName.toUpperCase(),o="STYLE"===a?n.textContent:n,i=t({data:o,isLink:"LINK"===a,root:e})
return i.sheet&&r.push(i.sheet),r}),[])}(e,r):function(e){return Array.from(e.styleSheets).filter((function(e){return!!e.media&&rm(e.media.mediaText)}))}(e),function(e){var t=[]
return e.filter((function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)}))}(n)}(a,o,t)
if(!i)return Promise.all(r)
var u=n+1,s={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:u},l=[],c=Promise.all(i.map((function(e,t){return $h(e,s,[u,t],l)})))
r.push(c)})),Promise.all(r)}(r,Nh(n)).then((function(e){return em(e)}))}
function em(e){return e.reduce((function(e,t){return Array.isArray(t)?e.concat(em(t)):e.concat(t)}),[])}function tm(e){var t=e.nodeName.toUpperCase(),r=e.getAttribute("href"),n=e.getAttribute("rel"),a="LINK"===t&&r&&n&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&rm(e.media)}function rm(e){return!e||!e.toUpperCase().includes("PRINT")}var nm=function(e){var t=e.treeRoot,r=void 0===t?i._tree[0]:t,n=Zh(r,"video[autoplay], audio[autoplay]",(function(e){var t=e.actualNode
return!("none"===t.preload&&0===t.readyState&&t.networkState!==t.NETWORK_LOADING||t.hasAttribute("paused")||t.hasAttribute("muted")||(t.hasAttribute("src")?!t.getAttribute("src"):Array.from(t.getElementsByTagName("source")).filter((function(e){return!!e.getAttribute("src")})).length<=0))}))
return Promise.all(n.map((function(e){var t,r=e.actualNode
return t=r,new Promise((function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",(function r(){t.removeEventListener("loadedmetadata",r),e(t)}))}))})))}
function am(e){var t={cssom:Jh,media:nm}
return om(e)?new Promise((function(r,n){var a=im(e),o=a.assets,i=a.timeout,u=setTimeout((function(){return n(new Error("Preload assets timed out."))}),i)
Promise.all(o.map((function(r){return t[r](e).then((function(e){return t={},a=e,(n=Y(n=r))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t
var t,n,a}))}))).then((function(e){var t=e.reduce((function(e,t){return z({},e,t)}),{})
clearTimeout(u),r(t)})).catch((function(e){clearTimeout(u),n(e)}))})):Promise.resolve()}function om(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function im(e){var t=Jn.preload,r=t.assets,n=t.timeout,a={assets:r,timeout:n}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every((function(e){return r.includes(e.toLowerCase())})))throw new Error("Requested assets, not supported. Supported assets are: ".concat(r.join(", "),"."))
return a.assets=Kh(e.preload.assets.map((function(e){return e.toLowerCase()})),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}function um(e){var t=i._audit.data.checks||{},r=i._audit.data.rules||{},n=pi(i._audit.rules,"id",e.id)||{}
e.tags=no(n.tags||[])
var a=sm(t,!0,n),o=sm(t,!1,n)
e.nodes.forEach((function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)})),vi(e,no(r[e.id]||{}))}function sm(e,t,r){return function(n){var a=e[n.id]||{},i=a.messages||{},u=Object.assign({},a)
delete u.messages,r.reviewOnFail||void 0!==n.result?u.message=n.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(n.data)||(u.message=function(e,t){function r(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:Jf()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:r(t)
try{var n=t.incomplete[e.missingData[0].reason]
if(!n)throw new Error
return n}catch(n){return"string"==typeof e.missingData?t.incomplete[e.missingData]:r(t)}}(n.data,i)),u.message||(u.message=i.incomplete)),"function"!=typeof u.message&&(u.message=oh(u.message,n.data)),vi(n,u)}}var lm=function(e,t){return Zh(e,t)}
function cm(e,t){var r,n,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(r=t.include||[],r=Array.isArray(r)?r:[r],n=t.exclude||[],n=(n=Array.isArray(n)?n:[n]).concat(a.filter((function(e){return-1===r.indexOf(e)})))):(r=Array.isArray(t)?t:[t],n=a.filter((function(e){return-1===r.indexOf(e)}))),!!(r.some((function(t){return-1!==e.tags.indexOf(t)}))||0===r.length&&!1!==e.enabled)&&n.every((function(t){return-1===e.tags.indexOf(t)}))}var dm=function(e,t,r){var n=r.runOnly||{},a=(r.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===n.type?-1!==n.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===n.type&&n.values?cm(e,n.values):cm(e,[]))}
function pm(e,t){if(!t)return e
var r=e.cloneNode(!1),n=Ea(r)
if(1===r.nodeType){var a=r.outerHTML
r=Xa.get(a,(function(){return fm(r,n,e,t)}))}else r=fm(r,n,e,t)
return Array.from(e.childNodes).forEach((function(e){r.appendChild(pm(e,t))})),r}function fm(e,t,r,n){return t?(e=a.createElement(e.nodeName),Array.from(t).forEach((function(t){(function(e,t,r){return void 0!==r[t]&&(!0===r[t]||Ca(e,r[t]))})(r,t.name,n)||e.setAttribute(t.name,t.value)})),e):e}function hm(e,t){var r,n=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var u=i._selectCache[a]
if(u.selector===e)return u.result}for(var s=t.include.reduce((function(e,t){return e.length&&Di(e[e.length-1],t)||e.push(t),e}),[]),l=function(e){return e.exclude&&0!==e.exclude.length?function(t){return qh(t,e)}:null}(t),c=0;c<s.length;c++)r=s[c],n=mm(n,Zh(r,e,l))
return i._selectCache&&i._selectCache.push({selector:e,result:n}),n}function mm(e,t){if(0===e.length)return t
if(e.length<t.length){var r=e
e=t,t=r}for(var n=0,a=t.length;n<a;n++)e.includes(t[n])||e.push(t[n])
return e}var Dm=function(e){e.forEach((function(e){return function(e,t,n){if(e===r)return e.scroll(n,t)
e.scrollTop=t,e.scrollLeft=n}(e.elm,e.top,e.left)}))}
function gm(e){return vm(Array.isArray(e)?q(e):[e],a)}function vm(e,t){var r=e.shift(),n=r?t.querySelector(r):null
return 0===e.length?n:null!=n&&n.shadowRoot?vm(e,n.shadowRoot):null}function bm(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r=Array.isArray(e)?q(e):[e]
return 0===e.length?[]:ym(r,t)}function ym(e,t){var r,n=H(r=e)||L(r)||K(r)||U(),a=n[0],o=n.slice(1),i=t.querySelectorAll(a)
if(0===o.length)return Array.from(i)
var u,s=[],l=Q(i)
try{for(l.s();!(u=l.n()).done;){var c=u.value
null!=c&&c.shadowRoot&&s.push.apply(s,q(ym(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return s}var Fm=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},wm=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function Em(e){e=Array.isArray(e)?e:wm
var t=[]
return e.forEach((function(e,r){var n=String.fromCharCode(r+96).replace("`","")
Array.isArray(e)?t=t.concat(Em(e).map((function(e){return n+e}))):t.push(n)})),t}var Cm=function(e){for(var t=wm;e.length<3;)e+="`"
for(var r=0;r<=e.length-1;r++)if(!(t=t[e.charCodeAt(r)-96]))return!1
return!0},xm=function(e){function t(e){var r,n,a,i
return $(this,t),(r=k(this,t))._props=function(e){var t,r,n,a=null!==(t=e.nodeName)&&void 0!==t?t:km[e.nodeType],o=null!==(r=null!==(n=e.nodeType)&&void 0!==n?n:Am[e.nodeName])&&void 0!==r?r:1
Da("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),Da("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),Fm().includes(i)||(i="text"))
var u=z({},e,{nodeType:o,nodeName:a})
return i&&(u.type=i),delete u.attributes,Object.freeze(u)}(e),r._attrs=(n=e.attributes,a=void 0===n?{}:n,i={htmlFor:"for",className:"class"},Object.keys(a).reduce((function(e,t){var r=a[t]
return Da("object"!==o(r)||null===r,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==r&&(e[i[t]||t]=null!==r?String(r):null),e}),{})),r}return B(t,e),W(t,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}])}(ra),Am={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},km={}
Object.keys(Am).forEach((function(e){km[Am[e]]=e}))
var Nm,Tm=xm,Bm=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var r=i.utils.queue(),n=[]
Object.keys(i.plugins).forEach((function(e){r.defer((function(t){var r=function(e){n.push(e),t()}
try{i.plugins[e].cleanup(t,r)}catch(e){r(e)}}))}))
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach((function(e){r.defer((function(t,r){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,r)}))})),r.then((function(r){0===n.length?e(r):t(n)})).catch(t)},Rm={}
function _m(e){return Rm.hasOwnProperty(e)}function Sm(e){return"string"==typeof e&&Rm[e]?Rm[e]:"function"==typeof e?e:Nm}var Om={}
ce(Om,{getAllCells:function(){return Mm},getCellPosition:function(){return hs},getHeaders:function(){return Pm},getScope:function(){return ms},isColumnHeader:function(){return Ds},isDataCell:function(){return jm},isDataTable:function(){return qm},isHeader:function(){return Lm},isRowHeader:function(){return gs},toArray:function(){return fs},toGrid:function(){return fs},traverse:function(){return Vm}})
var Mm=function(e){var t,r,n,a,o=[]
for(t=0,n=e.rows.length;t<n;t++)for(r=0,a=e.rows[t].cells.length;r<a;r++)o.push(e.rows[t].cells[r])
return o}
function Im(e,t,r){for(var n,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?gs:Ds,u=r[t.y][t.x],s=u.colSpan-1,l=u.getAttribute("rowspan"),c=(0===parseInt(l)||0===u.rowspan?r.length:u.rowSpan)-1,d=t.y+c,p=t.x+s,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],D=d;D>=f&&!n;D--)for(var g=p;g>=h;g--){var v=r[D]?r[D][g]:void 0
if(v){var b=i.utils.getNodeFromTree(v)
if(b[a]){n=b[a]
break}m.push(v)}}return n=(n||[]).concat(m.filter(o)),m.forEach((function(e){i.utils.getNodeFromTree(e)[a]=n})),n}var Pm=function(e,t){if(e.getAttribute("headers")){var r=Ju(e,"headers")
if(r.filter((function(e){return e})).length)return r}t||(t=fs(Ai(e,"table")))
var n=hs(e,t),a=Im("row",n,t),o=Im("col",n,t)
return[].concat(a,o).reverse()},jm=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return ls(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},qm=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!Yu(e))return!1
if("true"===e.getAttribute("contenteditable")||Ai(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===Yl(t))return!0
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
for(var D=0;D<s;D++){if(o=e.rows[D],f&&f!==r.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=r.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==r.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=r.getComputedStyle(o).getPropertyValue("background-image")}return s>=20||!(Qi(e).width>.95*Ki(r).width)&&!(u<10)&&!e.querySelector("object, embed, iframe, applet")},Lm=function(e){if(Ds(e)||gs(e))return!0
if(e.getAttribute("id")){var t=va(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function zm(e,t,r,n){var a,o=r[t.y]?r[t.y][t.x]:void 0
return o?"function"==typeof n&&!0===(a=n(o,t,r))?[o]:((a=zm(e,{x:t.x+e.x,y:t.y+e.y},r,n)).unshift(o),a):[]}var Vm=function(e,t,r,n){if(Array.isArray(t)&&(n=r,r=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return zm(e,{x:t.x+e.x,y:t.y+e.y},r,n)},Um={}
ce(Um,{allowedAttr:function(){return Hm},arialabelText:function(){return rs},arialabelledbyText:function(){return ts},getAccessibleRefs:function(){return Wm},getElementUnallowedRoles:function(){return Xm},getExplicitRole:function(){return cs},getImplicitRole:function(){return js},getOwnedVirtual:function(){return Ws},getRole:function(){return Us},getRoleType:function(){return Yl},getRolesByType:function(){return Jm},getRolesWithNameFromContents:function(){return tD},implicitNodes:function(){return iD},implicitRole:function(){return js},isAccessibleRef:function(){return uD},isAriaRoleAllowedOnElement:function(){return Ym},isComboboxPopup:function(){return sD},isUnsupportedRole:function(){return ss},isValidRole:function(){return ls},label:function(){return cD},labelVirtual:function(){return kl},lookupTable:function(){return oD},namedFromContents:function(){return Gs},requiredAttr:function(){return dD},requiredContext:function(){return pD},requiredOwned:function(){return fD},validateAttr:function(){return mD},validateAttrValue:function(){return hD}})
var Hm=function(e){var t=us.ariaRoles[e],r=q(ps())
return t?(t.allowedAttrs&&r.push.apply(r,q(t.allowedAttrs)),t.requiredAttrs&&r.push.apply(r,q(t.requiredAttrs)),r):r},$m=/^idrefs?$/
function Gm(e,t,r){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var n=e.getAttribute("for")
t.has(n)?t.get(n).push(e):t.set(n,[e])}for(var a=0;a<r.length;++a){var o=r[a],i=vs(e.getAttribute(o)||"")
if(i){var u,s=Q(zf(i))
try{for(s.s();!(u=s.n()).done;){var l=u.value
t.has(l)?t.get(l).push(e):t.set(l,[e])}}catch(e){s.e(e)}finally{s.f()}}}}for(var c=0;c<e.childNodes.length;c++)1===e.childNodes[c].nodeType&&Gm(e.childNodes[c],t,r)}var Wm=function(e){var t
e=e.actualNode||e
var r=Ei(e)
r=r.documentElement||r
var n=Xa.get("idRefsByRoot",(function(){return new Map})),a=n.get(r)
return a||(a=new Map,n.set(r,a),Gm(r,a,Object.keys(us.ariaAttrs).filter((function(e){var t=us.ariaAttrs[e].type
return $m.test(t)})))),null!==(t=a.get(e.id))&&void 0!==t?t:[]},Ym=function(e,t){var r=e instanceof ra?e:Za(e),n=js(r),a=Ps(r)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==n&&!!a.allowedRoles},Qm=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],Km={header:"banner",footer:"contentinfo"},Xm=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=Uh(e).vNode
if(!jh(r))return[]
var n=r.props.nodeName,a=js(r)||Km[n]
return function(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var r=zf(e.attr("role").toLowerCase())
t=t.concat(r)}return t.filter((function(e){return ls(e)}))}(r).filter((function(e){return!function(e,t,r,n){return!(!r||e!==n)||(!Qm.includes(e)||Yl(e)===n)&&Ym(t,e)}(e,r,t,a)}))},Zm=function(e){return Object.keys(us.ariaRoles).filter((function(t){return us.ariaRoles[t].type===e}))},Jm=function(e){return Zm(e)},eD=function(){return Xa.get("ariaRolesNameFromContent",(function(){return Object.keys(us.ariaRoles).filter((function(e){return us.ariaRoles[e].nameFromContent}))}))},tD=function(){return eD()},rD=function(e){return null===e},nD=function(e){return null!==e},aD={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
aD.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:nD}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:nD}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:nD}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:nD}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:nD}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:nD}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:nD}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:nD}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:nD}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:nD}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:nD}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:nD}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:nD}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:nD}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},aD.implicitHtmlRole=ws,aD.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:nD}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:nD}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],aD.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:rD}},{nodeName:"img",attributes:{alt:rD}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],aD.evaluateRoleForElement={A:function(e){var t=e.node,r=e.out
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
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||r}},aD.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var oD=aD,iD=function(e){var t=null,r=oD.role[e]
return r&&r.implicit&&(t=no(r.implicit)),t},uD=function(e){return!!Wm(e).length}
function sD(e){var t,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).popupRoles,n=Us(e)
if(null!==(t=r)&&void 0!==t||(r=ns["aria-haspopup"].values),!r.includes(n))return!1
var a=function(e){for(;e=e.parent;)if(null!==Us(e,{noPresentational:!0}))return e
return null}(e)
if(lD(a))return!0
var o=e.props.id
if(!o)return!1
if(!e.actualNode)throw new Error("Unable to determine combobox popup without an actualNode")
var i=wi(e.actualNode).querySelectorAll('[aria-owns~="'.concat(o,'"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(o,'"][role~="combobox"]:not(select)'))
return Array.from(i).some(lD)}var lD=function(e){return e&&"combobox"===Us(e)},cD=function(e){return e=Za(e),kl(e)},dD=function(e){var t=us.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?q(t.requiredAttrs):[]},pD=function(e){var t=us.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?q(t.requiredContext):null},fD=function(e){var t=us.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?q(t.requiredOwned):null},hD=function(e,t){var r,n,a=(e=e instanceof ra?e:Za(e)).attr(t),o=us.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(n=zf(a)).reduce((function(e,t){return e&&o.values.includes(t)}),0!==n.length)
case"idref":try{var i=Ei(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return Ju(e,t).some((function(e){return!!e}))
case"string":return""!==a.trim()
case"decimal":return!(!(r=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!r[1]&&!r[2])
case"int":var u=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=u}},mD=function(e){return!!us.ariaAttrs[e]}
function DD(e){return"caption"===e.props.nodeName}var gD={}
ce(gD,{getAriaRolesByType:function(){return Zm},getAriaRolesSupportingNameFromContent:function(){return eD},getElementSpec:function(){return Ps},getElementsByContentType:function(){return ds},getGlobalAriaAttrs:function(){return ps},implicitHtmlRoles:function(){return ws}})
var vD=["alert","log","status"]
function bD(e,t){var r=e.actualNode
if("button"===Us(e)||function(e,t){var r=e.actualNode,n=Us(e),a=(r.getAttribute("aria-live")||"").toLowerCase().trim(),o=Zm("landmark")
return!!(["assertive","polite"].includes(a)||vD.includes(n)||o.includes(n)||t.regionMatcher&&Is(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Ef(e.actualNode)&&Lu(e.actualNode,"href")||!Qs(r)){for(var n=e;n;)n._hasRegionDescendant=!0,n=n.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return r!==a.body&&zl(r,!0)&&!function(e){return["none","presentation"].includes(Us(e))&&!ql(e)}(e)?[e]:e.children.filter((function(e){return 1===e.actualNode.nodeType})).map((function(e){return bD(e,t)})).reduce((function(e,t){return e.concat(t)}),[])}function yD(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function FD(e){var t=r.getComputedStyle(function(e){for(var t=e,r=e.textContent.trim(),n=r;n===r&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,n=e.children[a].textContent.trim()}while(""===n&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:yD(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function wD(e,t,r){return r.reduce((function(r,n){return r||(!n.size||e.fontSize/n.size>t.fontSize)&&(!n.weight||e.fontWeight-n.weight>t.fontWeight)&&(!n.italic||e.isItalic&&!t.isItalic)}),!1)}var ED=/[;,\s]/,CD=/^[0-9.]+$/,xD={}
ce(xD,{aria:function(){return Um},color:function(){return AD},dom:function(){return Fi},forms:function(){return ig},matches:function(){return Is},math:function(){return nu},standards:function(){return gD},table:function(){return Om},text:function(){return Zu},utils:function(){return na}})
var AD={}
ce(AD,{Color:function(){return bf},centerPointOfRect:function(){return kD},elementHasImage:function(){return oc},elementIsDistinct:function(){return TD},filteredRectStack:function(){return RD},flattenColors:function(){return OD},flattenShadowColors:function(){return ID},getBackgroundColor:function(){return JD},getBackgroundStack:function(){return PD},getContrast:function(){return rg},getForegroundColor:function(){return ng},getOwnBackgroundColor:function(){return Ff},getRectStack:function(){return BD},getStackingContext:function(){return YD},getStrokeColorsFromShadows:function(){return UD},getTextShadowColors:function(){return GD},hasValidContrastRatio:function(){return og},incompleteData:function(){return ac},parseTextShadows:function(){return $D},stackingContextToColor:function(){return QD}})
var kD=function(e){if(!(e.left>r.innerWidth||e.top>r.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),r.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),r.innerHeight-1)}}
function ND(e){return e.getPropertyValue("font-family").split(/[,;]/g).map((function(e){return e.trim().toLowerCase()}))}var TD=function(e,t){var n=r.getComputedStyle(e)
if("none"!==n.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce((function(e,t){var r=new bf
return r.parseString(n.getPropertyValue(t+"-color")),e||"none"!==n.getPropertyValue(t+"-style")&&parseFloat(n.getPropertyValue(t+"-width"))>0&&0!==r.alpha}),!1))return!0
var a=r.getComputedStyle(t)
if(ND(n)[0]!==ND(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce((function(e,t){return e||n.getPropertyValue(t)!==a.getPropertyValue(t)}),!1),i=n.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},BD=function(e){var t=$u(e),r=Ml(e)
return!r||r.length<=1?[t]:r.some((function(e){return void 0===e}))?null:(r.splice(0,0,t),r)},RD=function(e){var t=BD(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var r,n=t.shift()
return t.forEach((function(a,o){if(0!==o){var i=t[o-1],u=t[o]
r=i.every((function(e,t){return e===u[t]}))||n.includes(e)}})),r?t[0]:(ac.set("bgColor","elmPartiallyObscuring"),null)}return ac.set("bgColor","outsideViewport"),null},_D=["hue","saturation","color","luminosity"],SD={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t},hue:function(e,t){return t.setSaturation(e.getSaturation()).setLuminosity(e.getLuminosity())},saturation:function(e,t){return e.setSaturation(t.getSaturation()).setLuminosity(e.getLuminosity())},color:function(e,t){return t.setLuminosity(e.getLuminosity())},luminosity:function(e,t){return e.setLuminosity(t.getLuminosity())}}
function OD(e,t){var r,n=function(e,t,r){if(_D.includes(r))return SD[r](e,t)
var n=new bf
return["r","g","b"].forEach((function(a){n[a]=SD[r](e[a],t[a])})),n}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal"),a=MD(e.red,e.alpha,t.red,t.alpha,255*n.r),o=MD(e.green,e.alpha,t.green,t.alpha,255*n.g),i=MD(e.blue,e.alpha,t.blue,t.alpha,255*n.b),u=(r=e.alpha+t.alpha*(1-e.alpha),Math.min(Math.max(0,r),1))
if(0===u)return new bf(a,o,i,u)
var s=Math.round(a/u),l=Math.round(o/u),c=Math.round(i/u)
return new bf(s,l,c,u)}function MD(e,t,r,n,a){return t*(1-n)*e+t*n*a+(1-t)*n*r}function ID(e,t){var r=e.alpha,n=(1-r)*t.red+r*e.red,a=(1-r)*t.green+r*e.green,o=(1-r)*t.blue+r*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new bf(n,a,o,i)}function PD(e){for(var t=Ml(e).map((function(t){return function(e){var t=e.indexOf(a.body),n=e,o=Ff(r.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!oc(a.documentElement)){t>1&&(n.splice(t,1),n.push(a.body))
var i=n.indexOf(a.documentElement)
i>0&&(n.splice(i,1),n.push(a.documentElement))}return n}(t=Nf(t,e))})),n=0;n<t.length;n++){var o=t[n]
if(o[0]!==e)return ac.set("bgColor","bgOverlap"),null
if(0!==n&&!jD(o,t[0]))return ac.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function jD(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var r=0;r<e.length;++r)if(e[r]!==t[r])return!1
return!0}var qD=.54,LD=.5,zD=1.5,VD=["top","right","bottom","left"]
function UD(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).ignoreEdgeCount,r=void 0!==t&&t,n=function(e){var t,r={},n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a,o=t.value,i=o.colorStr,u=o.pixels
null!==(a=r[i])&&void 0!==a||(r[i]={top:[],right:[],bottom:[],left:[]})
var s=r[i],l=V(u,2),c=l[0],d=l[1]
c>LD?s.right.push(c):-c>LD&&s.left.push(-c),d>LD?s.bottom.push(d):-d>LD&&s.top.push(-d)}}catch(e){n.e(e)}finally{n.f()}return r}(e),a=Object.entries(n).map((function(e){var t=V(e,2),r=t[0],n=t[1],a=VD.filter((function(e){return 0!==n[e].length})).length
return{colorStr:r,sides:n,edgeCount:a}}))
return!r&&a.some((function(e){var t=e.edgeCount
return t>1&&t<4}))?null:a.map(HD).filter((function(e){return null!==e}))}function HD(e){var t=e.colorStr,r=e.sides
if(4!==e.edgeCount)return null
var n=new bf
n.parseString(t)
var a=0,o=!0
return VD.forEach((function(e){a+=r[e].length/4,o&&(o=r[e].every((function(e){return e>zD})))})),o||(n.alpha=1-Math.pow(qD,a)),n}function $D(e){var t={pixels:[]},r=e.trim(),n=[t]
if(!r)return[]
for(;r;){var a=r.match(/^[a-z]+(\([^)]+\))?/i)||r.match(/^#[0-9a-f]+/i),o=r.match(/^([0-9.-]+)px/i)||r.match(/^(0)/)
if(a)Da(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),r=r.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){Da(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),r=r.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==r[0])throw new Error("Unable to process text-shadows: ".concat(r))
Da(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},n.push(t),r=r.substr(1).trim()}}return n.forEach((function(e){var t=e.pixels
2===t.length&&t.push(0)})),n}function GD(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.minRatio,a=t.maxRatio,o=t.ignoreEdgeCount,i=[],u=r.getComputedStyle(e),s=u.getPropertyValue("text-shadow")
if("none"===s)return i
var l=u.getPropertyValue("font-size"),c=parseInt(l)
Da(!1===isNaN(c),"Unable to determine font-size value ".concat(l))
var d,p=[],f=Q($D(s))
try{for(f.s();!(d=f.n()).done;){var h=d.value,m=h.colorStr||u.getPropertyValue("color"),D=V(h.pixels,3),g=D[0],v=D[1],b=D[2],y=void 0===b?0:b
if(!(a&&y>=c*a))if(n&&y<c*n)p.push({colorStr:m,pixels:h.pixels})
else{if(p.length>0){var F=UD(p,{ignoreEdgeCount:o})
if(null===F)return null
i.push.apply(i,q(F)),p.splice(0,p.length)}var w=WD({colorStr:m,offsetX:g,offsetY:v,blurRadius:y,fontSize:c})
i.push(w)}}}catch(e){f.e(e)}finally{f.f()}if(p.length>0){var E=UD(p,{ignoreEdgeCount:o})
if(null===E)return null
i.push.apply(i,q(E))}return i}function WD(e){var t=e.colorStr,r=e.offsetX,n=e.offsetY,a=e.blurRadius,o=e.fontSize
if(r>a||n>a)return new bf(0,0,0,0)
var i=new bf
return i.parseString(t),i.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(a,o),i}function YD(e,t){var r,n=Za(e)
if(n._stackingContext)return n._stackingContext
var a=[],o=new Map
return(t=null!==(r=t)&&void 0!==r?r:PD(e)).forEach((function(e){var t,r=Za(e),n=function(e){var t=new bf
return t.parseString(e.getComputedStylePropertyValue("background-color")),t}(r),i=r._stackingOrder.filter((function(e){return!!e.vNode}))
i.forEach((function(e,t){var r,n=e.vNode,u=null===(r=i[t-1])||void 0===r?void 0:r.vNode,s=ZD(o,n,u)
0!==t||o.get(n)||a.unshift(s),o.set(n,s)}))
var u=null===(t=i[i.length-1])||void 0===t?void 0:t.vNode,s=ZD(o,r,u)
i.length||a.unshift(s),s.bgColor=n})),n._stackingContext=a,a}function QD(e){var t
if(null===(t=e.descendants)||void 0===t||!t.length){var r=e.bgColor
return r.alpha*=e.opacity,{color:r,blendMode:e.blendMode}}var n=OD(e.descendants.reduce(KD,XD()),e.bgColor,e.descendants[0].blendMode)
return n.alpha*=e.opacity,{color:n,blendMode:e.blendMode}}function KD(e,t){var r
return r=e instanceof bf?e:QD(e).color,OD(QD(t).color,r,t.blendMode)}function XD(e,t){var r,n
return{vNode:e,ancestor:t,opacity:parseFloat(null!==(r=null==e?void 0:e.getComputedStylePropertyValue("opacity"))&&void 0!==r?r:1),bgColor:new bf(0,0,0,0),blendMode:(n=null==e?void 0:e.getComputedStylePropertyValue("mix-blend-mode"),n||void 0),descendants:[]}}function ZD(e,t,r){var n,a=e.get(r),o=null!==(n=e.get(t))&&void 0!==n?n:XD(t,a)
return a&&r!==t&&!a.descendants.includes(o)&&a.descendants.unshift(o),o}function JD(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,o=Za(e),i=o._cache.getBackgroundColor
if(i)return t.push.apply(t,q(i.bgElms)),ac.set("bgColor",i.incompleteData),i.bgColor
var u=function(e,t,n){var o,i,u=PD(e)
if(!u)return null
var s=Sl(e),l=null!==(o=GD(e,{minRatio:n,ignoreEdgeCount:!0}))&&void 0!==o?o:[]
l.length&&(l=[{color:l.reduce(ID)}])
for(var c=0;c<u.length;c++){var d=u[c],p=r.getComputedStyle(d)
if(oc(d,p))return t.push(d),null
var f=Ff(p)
if(0!==f.alpha){if("inline"!==p.getPropertyValue("display")&&!eg(d,s))return t.push(d),ac.set("bgColor","elmPartiallyObscured"),null
if(t.push(d),1===f.alpha)break}}l=YD(e,u).map(QD).concat(l)
var h=function(e,t){var n=[]
if(!t){var o=a.documentElement,i=a.body,u=r.getComputedStyle(o),s=r.getComputedStyle(i),l=Ff(u),c=Ff(s),d=0!==c.alpha&&eg(i,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&n.unshift({color:c,blendMode:tg(s.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&n.unshift({color:l,blendMode:tg(u.getPropertyValue("mix-blend-mode"))})}return n}(e,u.includes(a.body))
if((i=l).unshift.apply(i,q(h)),0===l.length)return new bf(255,255,255,1)
var m=l.reduce((function(e,t){return OD(t.color,e.color instanceof bf?e.color:e,t.blendMode)}))
return OD(m.color instanceof bf?m.color:m,new bf(255,255,255,1))}(e,t,n)
return o._cache.getBackgroundColor={bgColor:u,bgElms:t,incompleteData:ac.get("bgColor")},u}function eg(e,t){t=Array.isArray(t)?t:[t]
var n=e.getBoundingClientRect(),a=n.right,o=n.bottom,i=r.getComputedStyle(e).getPropertyValue("overflow")
return(["scroll","auto"].includes(i)||e instanceof r.HTMLHtmlElement)&&(a=n.left+e.scrollWidth,o=n.top+e.scrollHeight),t.every((function(e){return e.top>=n.top&&e.bottom<=o&&e.left>=n.left&&e.right<=a}))}function tg(e){return e||void 0}var rg=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=OD(t,e))
var r=e.getRelativeLuminance(),n=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}
function ng(e,t,n){for(var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.getComputedStyle(e),u=[function(){return function(e,t){var r=t.textStrokeEmMin,n=void 0===r?0:r,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),i=a/parseFloat(o)
if(isNaN(i)||i<n)return null
var u=e.getPropertyValue("-webkit-text-stroke-color")
return(new bf).parseString(u)}(i,o)},function(){return function(e){return(new bf).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}(i)},function(){return GD(e,{minRatio:0})}],s=[],l=0,c=u;l<c.length;l++){var d=(0,c[l])()
if(d&&(s=s.concat(d),1===d.alpha))break}var p=s.reduce((function(e,t){return OD(e,t)}))
if(null!==(a=n)&&void 0!==a||(n=JD(e,[])),null===n){var f=ac.get("bgColor")
return ac.set("fgColor",f),null}var h=YD(e)
return OD(function(e,t,r){for(;t;){var n
if(1===t.opacity&&t.ancestor)t=t.ancestor
else{e.alpha*=t.opacity
var a=(null===(n=t.ancestor)||void 0===n?void 0:n.descendants)||r
1!==t.opacity&&(a=a.slice(0,a.indexOf(t)))
var o=a.map(QD)
if(o.length){var i=o.reduce((function(e,t){return OD(t.color,e.color instanceof bf?e.color:e)}),{color:new bf(0,0,0,0),blendMode:"normal"})
e=OD(e,i),t=t.ancestor}else t=t.ancestor}}return e}(p,ag(h,e),h),new bf(255,255,255,1))}function ag(e,t){var r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a,o=r.value
if((null===(a=o.vNode)||void 0===a?void 0:a.actualNode)===t)return o
var i=ag(o.descendants,t)
if(i)return i}}catch(e){n.e(e)}finally{n.f()}}var og=function(e,t,r,n){var a=rg(e,t),o=n&&Math.ceil(72*r)/96<14||!n&&Math.ceil(72*r)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},ig={}
ce(ig,{isAriaCombobox:function(){return nl},isAriaListbox:function(){return rl},isAriaRange:function(){return ol},isAriaTextbox:function(){return tl},isDisabled:function(){return sg},isNativeSelect:function(){return el},isNativeTextbox:function(){return Js}})
var ug=["fieldset","button","select","input","textarea"],sg=function e(t){var r=t._isDisabled
if("boolean"==typeof r)return r
var n=t.props.nodeName,a=t.attr("aria-disabled")
return r=!(!ug.includes(n)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=r,r}
function lg(e,t){if(!e||!t)return!1
var r=Object.getOwnPropertyNames(e),n=Object.getOwnPropertyNames(t)
return r.length===n.length&&r.every((function(r){var n=e[r],a=t[r]
return o(n)===o(a)&&("object"===o(n)||"object"===o(a)?lg(n,a):n===a)}))}function cg(e){var t=Us(e),r=t&&t.includes("heading"),n=e.attr("aria-level"),a=parseInt(n,10),o=V(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return r?o&&!n?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function dg(e,t){var r,n=null===(r=t.data)||void 0===r?void 0:r.headingOrder,a=fg(t.node.ancestry,1)
if(!n)return e
var o=n.map((function(e){return function(e,t){return z({},e,{ancestry:t.concat(e.ancestry)})}(e,a)})),i=function(e,t){for(;t.length;){var r=pg(e,t)
if(-1!==r)return r
t=fg(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,q(o)):e.splice.apply(e,[i,0].concat(q(o))),e}function pg(e,t){return e.findIndex((function(e){return zh(e.ancestry,t)}))}function fg(e,t){return e.slice(0,e.length-t)}function hg(e,t){var r=e.boundingClientRect,n=t.boundingClientRect
return r.top>=n.top&&r.left>=n.left&&r.bottom<=n.bottom&&r.right<=n.right}function mg(e){return e.getComputedStylePropertyValue("pointer-events")}function Dg(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function gg(e,t){return Di(e,t)&&!Qu(t)}function vg(e){return e.map((function(e){return e.actualNode}))}function bg(e,t,r){var n=r.validRoles,a=void 0===n?[]:n,o=r.validNodeNames,i=void 0===o?[]:o,u=e.props,s=u.nodeName,l=u.nodeType,c=u.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!Qs(e))return!1
var p=cs(e)
return p?!a.includes(p)&&d+"[role=".concat(p,"]"):!i.includes(s)&&d+s}function yg(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map((function(e){return{vChild:e,nested:t}}))}function Fg(e){return""!==(e||"").trim()}function wg(e){var t=El(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return vs(t)}function Eg(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach((function(e){"widget"===Yl(e)&&Yu(e)?t.push(e):t.push.apply(t,q(Eg(e)))})),t}function Cg(e){var t=Wh(e.attr("tabindex"))
return null!==t&&t<0}function xg(e){if(Qu(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some((function(e){return xg(e)}))}var Ag=["block","list-item","table","flex","grid","inline-block"]
function kg(e){var t=r.getComputedStyle(e).getPropertyValue("display")
return-1!==Ag.indexOf(t)||"table-"===t.substr(0,6)}function Ng(e,t){var r=e.getRelativeLuminance(),n=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}var Tg=["block","list-item","table","flex","grid","inline-block"]
function Bg(e){var t=r.getComputedStyle(e).getPropertyValue("display")
return-1!==Tg.indexOf(t)||"table-"===t.substr(0,6)}var Rg=Aa((function(e,t){var n=r.getComputedStyle(e,t),a=function(e,t){return n.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Ff(n).alpha&&a("background-image","none"))return 0
var o=_g(n.getPropertyValue("width")),i=_g(n.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value}))
function _g(e){var t=V(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),r=t[1],n=void 0===r?"":r,a=t[2],o=void 0===a?"":a
return{value:parseFloat(n),unit:o.toLowerCase()}}var Sg={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Og={alert:!0,alertdialog:!0,application:!0,article:!0,banner:!1,complementary:!0,contentinfo:!0,dialog:!0,form:!0,log:!0,main:!0,navigation:!0,region:!0,search:!1,status:!0,tabpanel:!0}
function Mg(e,t,r,n){var a=cs(e)
if(r||(r=pD(a)),!r)return null
for(var o=r.includes("group"),i=n?e:e.parent;i;){var u=Us(i,{noPresentational:!0})
if(u){if("group"!==u||!o)return r.includes(u)?null:r
t.includes(a)&&r.push(a),r=r.filter((function(e){return"group"!==e})),i=i.parent}else i=i.parent}return r}function Ig(e){var t=e.vNode
return 3===t.props.nodeType?t.props.nodeValue.trim().length>0:Ll(t,!1,!0)}var Pg=Aa((function(e){if(e){var t=Us(e,{noPresentational:!0,chromium:!0})
return t?Yl(t):Pg(e.parent)}}))
function jg(e){var t,r,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).invalidTableRowAttrs,a=arguments.length>2?arguments[2]:void 0,o=null!==(t=null==n||null===(r=n.filter)||void 0===r?void 0:r.call(n,(function(e){return a.hasAttr(e)})))&&void 0!==t?t:[]
if(0===o.length)return!0
var i=function(e){if(e.parent)return yo(e,'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]')}(a),u=i&&Us(i)
if(!u||"treegrid"===u)return!0
var s="row".concat(o.length>1?"Plural":"Singular")
return this.data({messageKey:s,invalidAttrs:o,ownerRole:u}),!1}function qg(e,t,r){var n,a=r.props,o=a.nodeName,i=a.type,u=(n=r.attr("aria-checked"))?(n=n.toLowerCase(),["mixed","true"].includes(n)?n:"false"):""
if("input"!==o||"checkbox"!==i||!u)return!0
var s,l=(s=r).props.indeterminate?"mixed":s.props.checked?"true":"false"
return u===l||(this.data({messageKey:"checkbox",checkState:l}),!1)}var Lg={row:jg,checkbox:qg}
function zg(e,t,r){return"aria-required"===e&&"false"===t||!("aria-multiline"!==e||"false"!==t||!r.hasAttr("contenteditable"))}var Vg=function(e,t){try{return"svg"===t.props.nodeName||!!yo(t,"svg")}catch(e){return!1}},Ug=[function(e,t){return Hg(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!Vg(0,t)},function(e,t){return Yu(t)},function(e,t){return Qu(t)||!$g(t)},function(e){return!Zl(e,{noLengthCompare:!0})}]
function Hg(e){return"widget"===Yl(e)}var $g=Aa((function e(t){return!(null==t||!t.parent)&&(!(!Hg(t.parent)||!Qu(t.parent))||e(t.parent))})),Gg=function(e,t){var r=cs(t)
return!(r&&!["none","presentation"].includes(r)&&!(as[r]||{}).accessibleNameRequired&&!Yu(t))}
function Wg(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var r=e.ownerDocument.createRange()
return r.setStart(e,0),r.setEnd(e,e.childNodes.length),0===r.getClientRects().length}var Yg=function(e,t,r){return r.initiator},Qg={emoji:!0,nonBmp:!1,punctuations:!0}
function Kg(e){return!e||"true"!==e.getAttribute("aria-hidden")&&Kg(Wi(e))}var Xg={"abstractrole-evaluate":function(e,t,r){var n=zf(r.attr("role")).filter((function(e){return"abstract"===Yl(e)}))
return n.length>0&&(this.data(n),!0)},"accesskeys-after":function(e){var t={}
return e.filter((function(e){if(!e.data)return!1
var r=e.data.toUpperCase()
return t[r]?(t[r].relatedNodes.push(e.relatedNodes[0]),!1):(t[r]=e,e.relatedNodes=[],!0)})).map((function(e){return e.result=!!e.relatedNodes.length,e}))},"accesskeys-evaluate":function(e,t,r){return Hi(r)||(this.data(r.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,r){var n=r.attr("alt")
return"string"==typeof n&&/^\s+$/.test(n)},"aria-allowed-attr-evaluate":function(e,t,r){var n=[],a=Us(r),o=Hm(a)
Array.isArray(t[a])&&(o=Kh(t[a].concat(o)))
var i,u=Q(r.attrNames)
try{for(u.s();!(i=u.n()).done;){var s=i.value
!mD(s)||o.includes(s)||zg(s,r.attr(s),r)||n.push(s)}}catch(e){u.e(e)}finally{u.f()}return!n.length||(this.data(n.map((function(e){return e+'="'+r.attr(e)+'"'}))),!(a||jh(r)||Yu(r))&&void 0)},"aria-allowed-attr-matches":function(e,t){var r=/^aria-/,n=t.attrNames
if(n.length)for(var a=0,o=n.length;a<o;a++)if(r.test(n[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=t.allowImplicit,a=void 0===n||n,o=t.ignoredTags,i=void 0===o?[]:o,u=r.props.nodeName
if(i.map((function(e){return e.toLowerCase()})).includes(u))return!0
var s=Xm(r,a)
if(s.length){if(this.data(s),!Qs(r))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==cs(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,r){return"true"===r.attr("aria-busy")},"aria-conditional-attr-evaluate":function(e,t,r){var n=Us(r)
return!Lg[n]||Lg[n].call(this,e,t,r)},"aria-conditional-checkbox-attr-evaluate":qg,"aria-conditional-row-attr-evaluate":jg,"aria-errormessage-evaluate":function(e,t,r){t=Array.isArray(t)?t:[]
var n=r.attr("aria-errormessage"),a=r.hasAttr("aria-errormessage"),o=r.attr("aria-invalid")
return!r.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(n)||!a||(this.data(zf(n)),function(e){if(""===e.trim())return us.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&Ju(r,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:zf(e)})}return t?Qs(t)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||zf(r.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:zf(e)}),!1):void 0}.call(this,n))},"aria-has-attr-matches":function(e,t){var r=/^aria-/
return t.attrNames.some((function(e){return r.test(e)}))},"aria-hidden-body-evaluate":function(e,t,r){return"true"!==r.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return Kg(Wi(e))},"aria-label-evaluate":function(e,t,r){return!!vs(rs(r))},"aria-labelledby-evaluate":function(e,t,r){try{return!!vs(ts(r))}catch(e){return}},"aria-level-evaluate":function(e,t,r){var n=r.attr("aria-level")
if(!(parseInt(n,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=r.props.nodeName,o=Us(r,{chromium:!0}),i=function(e,t,r,n){var a=us.ariaRoles[t]
return a?a.prohibitedAttrs||[]:t||n.includes(r)||"widget"===Pg(e)?[]:["aria-label","aria-labelledby"]}(r,o,a,n).filter((function(e){return!!r.attrNames.includes(e)&&""!==vs(r.attr(e))}))
if(0===i.length)return!1
var u=r.hasAttr("role")?"hasRole":"noRole"
u+=i.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:u,prohibited:i})
var s=dl(r,{subtreeDescendant:!0})
return""===vs(s)||void 0},"aria-required-attr-evaluate":function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=cs(n),o=n.attrNames,i=dD(a)
if(Array.isArray(r[a])&&(i=Kh(r[a],i)),!a||!o.length||!i.length)return!0
if(function(e,t){return"separator"===t&&!Yu(e)}(n,a)||function(e,t){return"combobox"===t&&"false"===e.attr("aria-expanded")}(n,a))return!0
if("slider"===a&&null!==(t=n.attr("aria-valuetext"))&&void 0!==t&&t.trim())return!0
var u=Ps(n),s=i.filter((function(e){return!n.attr(e)&&!function(e,t){var r
return void 0!==(null===(r=e.implicitAttrs)||void 0===r?void 0:r[t])}(u,e)}))
return!s.length||(this.data(s),!1)},"aria-required-children-evaluate":function(e,t,r){var n=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=cs(r,{dpub:!0}),o=fD(a)
if(null===o)return!0
var i=function(e,t){for(var r,n=[],a=Ws(e),o=function(){if(3===r.props.nodeType&&n.push({vNode:r,role:null}),1!==r.props.nodeType||!Qs(r))return 1
var e=Us(r,{noPresentational:!0}),o=function(e){return ps().find((function(t){return e.hasAttr(t)}))}(r),i=!!o||Yu(r)
if(!e&&!i||["group","rowgroup"].includes(e)&&t.some((function(t){return t===e})))a.push.apply(a,q(r.children))
else if(e||i){var u=o||"tabindex"
n.push({role:e,attr:u,vNode:r})}};r=a.shift();)o()
return n}(r,o),u=i.filter((function(e){var t=e.role
return 1===e.vNode.props.nodeType&&!o.includes(t)}))
return u.length?(this.relatedNodes(u.map((function(e){return e.vNode}))),this.data({messageKey:"unallowed",values:u.map((function(e){return function(e,t){var r=e.props,n=r.nodeName
if(3===r.nodeType)return"#text"
var a=cs(e,{dpub:!0})
return a?"[role=".concat(a,"]"):t?n+"[".concat(t,"]"):n}(e.vNode,e.attr)})).filter((function(e,t,r){return r.indexOf(e)===t})).join(", ")}),!1):!!function(e,t){return t.some((function(t){var r=t.role
return r&&e.includes(r)}))}(o,i)||("true"===r.attr("aria-busy")?(this.data({messageKey:"aria-busy"}),!0):(this.data(o),!(!n.includes(a)||i.some(Ig))&&void 0))},"aria-required-children-matches":function(e,t){var r=cs(t,{dpub:!0})
return!!fD(r)},"aria-required-parent-evaluate":function(e,t,r){var n=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=Mg(r,n)
if(!a)return!0
var o=function(e){for(var t=[],r=null;e;){if(e.getAttribute("id")){var n=va(e.getAttribute("id"));(r=Ei(e).querySelector("[aria-owns~=".concat(n,"]")))&&t.push(r)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,u=o.length;i<u;i++)if(!(a=Mg(Za(o[i]),n,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var r=cs(t)
return!!pD(r)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=Us(arguments.length>2?arguments[2]:void 0)
return!!(t.supportedRoles||[]).includes(r)||!(!r||"presentation"===r||"none"===r)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,r){var n=r.attrNames.filter((function(t){var r=us.ariaAttrs[t]
if(!mD(t))return!1
var n=r.unsupported
return"object"!==o(n)?!!n:!Is(e,n.exceptions)}))
return!!n.length&&(this.data(n),!0)},"aria-valid-attr-evaluate":function(e,t,r){t=Array.isArray(t.value)?t.value:[]
var n=[],a=/^aria-/
return r.attrNames.forEach((function(e){-1===t.indexOf(e)&&a.test(e)&&!mD(e)&&n.push(e)})),!n.length||(this.data(n),!1)},"aria-valid-attr-value-evaluate":function(e,t,r){t=Array.isArray(t.value)?t.value:[]
var n="",a="",o=[],u=/^aria-/,s=["aria-errormessage"],l={"aria-controls":function(){var e=!1===["false",null].includes(r.attr("aria-haspopup"))
return e&&(n='aria-controls="'.concat(r.attr("aria-controls"),'"'),a="controlsWithinPopup"),"false"!==r.attr("aria-expanded")&&"false"!==r.attr("aria-selected")&&!1===e},"aria-current":function(e){e||(n='aria-current="'.concat(r.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==r.attr("aria-expanded")},"aria-describedby":function(e){e||(n='aria-describedby="'.concat(r.attr("aria-describedby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(n='aria-labelledby="'.concat(r.attr("aria-labelledby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return r.attrNames.forEach((function(e){if(!s.includes(e)&&!t.includes(e)&&u.test(e)){var i,c=r.attr(e)
try{i=hD(r,e)}catch(t){return n="".concat(e,'="').concat(c,'"'),void(a="idrefs")}l[e]&&!l[e](i)||i||(""!==c||function(e){var t
return"string"===(null===(t=us.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(n=e,a="empty"))}})),o.length?(this.data(o),!1):!n||void this.data({messageKey:a,needsReview:n})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!r.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var n=r.attr(t.attribute)
return!!vs(n)||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,r){if("input"!==r.props.nodeName)return!0
var n=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":n,"cc-exp":["text","search","month","tel"],"cc-exp-month":n,"cc-exp-year":n,"cc-csc":n,"transaction-amount":n,"bday-day":n,"bday-month":n,"bday-year":n,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach((function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])}))
var u=r.attr("autocomplete").split(/\s+/g).map((function(e){return e.toLowerCase()})),s=u[u.length-1]
if(xl.stateTerms.includes(s))return!0
var l=i[s],c=r.hasAttr("type")?vs(r.attr("type")).toLowerCase():"text"
return c=Fm().includes(c)?c:"text",void 0===l?"text"===c:l.includes(c)},"autocomplete-matches":function(e,t){var r=t.attr("autocomplete")
if(!r||""===vs(r))return!1
var n=t.props.nodeName
if(!1===["textarea","input","select"].includes(n))return!1
if("input"===n&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=Wh(t.attr("tabindex"))
if(i<0&&o){var u=us.ariaRoles[o]
if(void 0===u||"widget"!==u.type)return!1}return!(i<0&&t.actualNode&&!Ji(t)&&!Qs(t))},"autocomplete-valid-evaluate":function(e,t,r){var n=r.attr("autocomplete")||""
return Al(n,t)},"avoid-inline-spacing-evaluate":function(e,t){var r=t.cssProperties.filter((function(t){if("important"===e.style.getPropertyPriority(t))return t}))
return!(r.length>0&&(this.data(r),1))},"braille-label-equivalent-evaluate":function(e,t,r){var n
if(!(null!==(n=r.attr("aria-braillelabel"))&&void 0!==n?n:"").trim())return!0
try{return""!==vs(Fl(r))}catch(e){return}},"braille-roledescription-equivalent-evaluate":function(e,t,r){var n,a=null!==(n=r.attr("aria-brailleroledescription"))&&void 0!==n?n:""
if(""===vs(a))return!0
var o=r.attr("aria-roledescription")
return"string"!=typeof o?(this.data({messageKey:"noRoleDescription"}),!1):""!==vs(o)||(this.data({messageKey:"emptyRoleDescription"}),!1)},"bypass-matches":function(e,t,r){return!Yg(0,0,r)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,r){return!lm(r,"track").some((function(e){return"captions"===(e.attr("kind")||"").toLowerCase()}))&&void 0},"caption-faked-evaluate":function(e){var t=fs(e),r=t[0]
return t.length<=1||r.length<=1||e.rows.length<=1||r.reduce((function(e,t,n){return e||t!==r[n+1]&&void 0!==r[n+1]}),!1)},"color-contrast-evaluate":function(e,t,n){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,u=t.boldValue,s=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!Ji(e))return this.data({messageKey:"hidden"}),!0
var f=Xs(n,!1,!0)
if(a&&function(e){var t={nonBmp:!0},r=bl(e,t),n=""===vs(El(e,t))
return r&&n}(f))this.data({messageKey:"nonBmp"})
else{var h=r.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),D=h.getPropertyValue("font-weight"),g=parseFloat(D)>=u||"bold"===D,v=Math.ceil(72*m)/96,b=g&&v<s||!g&&v<l?c.normal:c.large,y=b.expected,F=b.minThreshold,w=b.maxThreshold,E=function(e,t){var r=t.pseudoSizeThreshold,n=void 0===r?.25:r,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*n
do{if(Rg(e.actualNode,":before")+Rg(e.actualNode,":after")>i)return e}while(e=e.parent)}}(n,{ignorePseudo:i,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:y+":1"}),void this.relatedNodes(E.actualNode)
var C=GD(e,{minRatio:.001,maxRatio:d})
if(null!==C){var x=[],A=JD(e,x,d),k=ng(e,!1,A,t),N=null,T=null,B=null
if(0===C.length)N=rg(A,k)
else if(k&&A){B=[].concat(q(C),[A]).reduce(ID)
var R=rg(A,k),_=rg(A,B),S=rg(B,k);(N=Math.max(R,_,S))!==R&&(T=_>S?"shadowOnBgColor":"fgOnShadowColor")}var O=N>y
if("number"==typeof F&&("number"!=typeof N||N<F)||"number"==typeof w&&("number"!=typeof N||N>w))return this.data({contrastRatio:N}),!0
var M,I=Math.floor(100*N)/100
null===A?M=ac.get("bgColor"):O||(M=T)
var P=1===I,j=1===f.length
return P?M=ac.set("bgColor","equalRatio"):O||!j||o||(M="shortTextContent"),this.data({fgColor:k?k.toHexString():void 0,bgColor:A?A.toHexString():void 0,contrastRatio:I,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:M,expectedContrastRatio:y+":1",shadowColor:B?B.toHexString():void 0}),null===k||null===A||P||j&&!o&&!O?(M=null,ac.clear(),void this.relatedNodes(x)):(O||this.relatedNodes(x),O)}this.data({messageKey:"complexTextShadows"})}},"color-contrast-matches":function(e,t){var n=t.props,o=n.nodeName,i=n.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(sg(t)||_u(t))return!1
if(["input","select","textarea"].includes(o)){var u=r.getComputedStyle(e),s=parseInt(u.getPropertyValue("text-indent"),10)
if(s){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+s,right:l.right+s},!Pf(l,e))return!1}return!0}var c=xi(t,"label")
if("label"===o||c){var d=c||e,p=c?Za(c):t
if(d.htmlFor){var f=Ei(d).getElementById(d.htmlFor),h=f&&Za(f)
if(h&&sg(h))return!1}var m=lm(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&sg(m))return!1}for(var D=[],g=t;g;){if(g.props.id){var v=Wm(g).filter((function(e){return zf(e.getAttribute("aria-labelledby")||"").includes(g.props.id)})).map((function(e){return Za(e)}))
D.push.apply(D,q(v))}g=g.parent}if(D.length>0&&D.every(sg))return!1
if(!function(e){var t=Xs(e,!1,!0)
return""!==t&&""!==El(t,Qg)&&e.children.some((function(e){return"#text"===e.props.nodeName&&!yl(e)}))}(t))return!1
for(var b=a.createRange(),y=t.children,F=0;F<y.length;F++){var w=y[F]
3===w.actualNode.nodeType&&""!==vs(w.actualNode.nodeValue)&&b.selectNodeContents(w.actualNode)}var E=Array.from(b.getClientRects()),C=Ti(t)
return E.some((function(t){var r=Pf(t,e)
if(!C.length)return r
var n=C.some((function(e){return ki(t,e.boundingClientRect)}))
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
default:return parseInt(a)}}function g(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(qm(e)){var t=fs(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return qm(e)},"deprecatedrole-evaluate":function(e,t,r){var n=Us(r,{dpub:!0,fallback:!0}),a=us.ariaRoles[n]
return!(null==a||!a.deprecated||(this.data(n),0))},"dlitem-evaluate":function(e){var t=Wi(e),r=t.nodeName.toUpperCase(),n=cs(t)
return"DIV"===r&&["presentation","none",null].includes(n)&&(r=(t=Wi(t)).nodeName.toUpperCase(),n=cs(t)),"DL"===r&&!(n&&!["presentation","none","list"].includes(n))},"doc-has-title-evaluate":function(){var e=a.title
return!!vs(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),r='*[id="'.concat(va(t),'"]'),n=Array.from(Ei(e).querySelectorAll(r))
return!uD(e)&&n.some(Yu)},"duplicate-id-after":function(e){var t=[]
return e.filter((function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)}))},"duplicate-id-aria-matches":function(e){return uD(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var r=Ei(e),n=Array.from(r.querySelectorAll('[id="'.concat(va(t),'"]'))).filter((function(t){return t!==e}))
return n.length&&this.relatedNodes(n),this.data(t),0===n.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),r='*[id="'.concat(va(t),'"]'),n=Array.from(Ei(e).querySelectorAll(r))
return!uD(e)&&n.every((function(e){return!Yu(e)}))},"duplicate-img-label-evaluate":function(e,t,r){if(["none","presentation"].includes(Us(r)))return!1
var n=yo(r,t.parentSelector)
if(!n)return!1
var a=Xs(n,!0).toLowerCase()
return""!==a&&a===Fl(r).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,r){var n=this
if(!r.attr("id"))return!1
if(r.actualNode){var a=Ei(r.actualNode),o=va(r.attr("id")),i=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(i),!i.length)return!1
try{return i.some((function(e){if(Ji(e)){var t=vs(es(e,{inControlContext:!0,startNode:r}))
return n.data({explicitLabel:t}),!!t}return!0}))}catch(e){return}}},"fallbackrole-evaluate":function(e,t,r){var n=zf(r.attr("role"))
return!(n.length<=1)&&(!function(e,t){return!js(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(r,n)||void 0)},"focusable-content-evaluate":function(e,t,r){var n=r.tabbableElements
return!!n&&n.filter((function(e){return e!==r})).length>0},"focusable-disabled-evaluate":function(e,t,r){var n=["button","fieldset","input","select","textarea"],a=r.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return n.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!Jl())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),r=parseInt(e.getComputedStylePropertyValue("width")),n=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===r||0===n)&&"none"===t}))&&void 0},"focusable-element-evaluate":function(e,t,r){return!(!r.hasAttr("contenteditable")||!function e(t){var n=t.attr("contenteditable")
if("true"===n||""===n)return!0
if("false"===n)return!1
var a=yo(r.parent,"[contenteditable]")
return!!a&&e(a)}(r))||Qu(r)},"focusable-modal-open-evaluate":function(e,t,r){var n=r.tabbableElements.map((function(e){return e.actualNode}))
return!n||!n.length||!Jl()||void this.relatedNodes(n)},"focusable-no-name-evaluate":function(e,t,r){if(!Qu(r))return!1
try{return!Fl(r)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,r){var n=["button","fieldset","input","select","textarea"],a=r.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return!n.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!Jl())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),r=parseInt(e.getComputedStylePropertyValue("width")),n=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===r||0===n)&&"none"===t}))&&void 0},"frame-focusable-content-evaluate":function(e,t,r){if(r.children)try{return!r.children.some((function(e){return xg(e)}))}catch(e){return}},"frame-focusable-content-matches":function(e,t,r){var n,a
return!r.initiator&&!r.focusable&&(null===(n=r.size)||void 0===n?void 0:n.width)*(null===(a=r.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter((function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var r=e.node.ancestry.flat(1/0).join(" > ")
return t[r]=e,!0}var n=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[n]&&(t[n].result=!0),!1}))},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!vs(t)},"has-alt-evaluate":function(e,t,r){var n=r.props.nodeName
return!!["img","input","area"].includes(n)&&r.hasAttr("alt")},"has-descendant-after":function(e){return e.some((function(e){return!0===e.result}))&&e.forEach((function(e){e.result=!0})),e},"has-descendant-evaluate":function(e,t,r){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&Jl())return!0
var n=Zh(r,t.selector,(function(e){return Qs(e)}))
return this.relatedNodes(n.map((function(e){return e.actualNode}))),n.length>0},"has-global-aria-attribute-evaluate":function(e,t,r){var n=ps().filter((function(e){return r.hasAttr(e)}))
return this.data(n),n.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==js(t,{chromium:!0})},"has-lang-evaluate":function(e,t,r){var n=void 0!==a&&ka(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&Fg(r.attr("xml:lang"))&&!Fg(r.attr("lang"))&&!n?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some((function(e){return Fg(r.attr(e))}))||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,r){try{return""!==vs(dl(r))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var r=Yl(t)
return"widget"===r||"composite"===r},"heading-matches":function(e,t){return"heading"===Us(t)},"heading-order-after":function(e){var t=function(e){return(e=q(e)).sort((function(e,t){var r=e.node,n=t.node
return r.ancestry.length-n.ancestry.length})),e.reduce(dg,[]).filter((function(e){return-1!==e.level}))}(e)
return e.forEach((function(e){e.result=function(e,t){var r,n,a,o,i=pg(t,e.node.ancestry),u=null!==(r=null===(n=t[i])||void 0===n?void 0:n.level)&&void 0!==r?r:-1,s=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==u?u-s<=1:void 0)}(e,t)})),e},"heading-order-evaluate":function(){var e=Xa.get("headingOrder")
if(e)return!0
var t=Zh(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",Qs)
return e=t.map((function(e){return{ancestry:[Ga(e.actualNode)],level:cg(e)}})),this.data({headingOrder:e}),Xa.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,r){var n=Tl(r),a=e.getAttribute("title")
return!!n&&(a||(a="",e.getAttribute("aria-describedby")&&(a=Ju(e,"aria-describedby").map((function(e){return e?es(e):""})).join(""))),vs(a)===vs(n))},"hidden-content-evaluate":function(e,t,n){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Ll(n)){var a=r.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=Wi(e),i=o&&r.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,r){if(r.hasAttr("id")){if(!r.actualNode)return
var n=Ei(e),a=va(e.getAttribute("id")),o=n.querySelector('label[for="'.concat(a,'"]'))
if(o&&!Qs(o)){var i
try{i=Fl(r).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!Vg(0,t)},"html5-scope-evaluate":function(e){return!Wl(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter((function(e){return void 0!==e.result})),r=[],n={},a=function(e){var a,o=t[e],i=o.data,u=i.name,s=i.urlProps
if(n[u])return 1
var l=t.filter((function(t,r){return t.data.name===u&&r!==e})),c=l.every((function(e){return lg(e.data.urlProps,s)}))
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,q(l.map((function(e){return e.relatedNodes[0]})))),n[u]=l,r.push(o)},o=0;o<t.length;o++)a(o)
return r},"identical-links-same-purpose-evaluate":function(e,t,r){var n=Zu.accessibleTextVirtual(r),a=Zu.sanitize(Zu.removeUnicode(n,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:Fi.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!Fl(t))return!1
var r=Us(e)
return!r||"link"===r},"implicit-evaluate":function(e,t,r){try{var n=yo(r,"label")
if(n){var a=vs(Fl(n,{inControlContext:!0,startNode:r}))
return n.actualNode&&this.relatedNodes([n.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var n=t.cssProperty,a=t.absoluteValues,o=t.minValue,i=t.maxValue,u=t.normalValue,s=void 0===u?0:u,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(n)||c&&!ec(e))return!0
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
return this.data(z({value:f},d)),"number"==typeof f?("number"!=typeof o||f>=o)&&("number"!=typeof i||f<=i):void 0},"inserted-into-focus-order-matches":function(e){return Ul(e)},"internal-link-present-evaluate":function(e,t,r){return lm(r,"a[href]").some((function(e){return/^#[^/!]/.test(e.attr("href"))}))},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,n=[],a=[]
if(r.children){for(var o,i=yg(r.children);i.length;){var u,s=i.shift(),l=s.vChild,c=s.nested
if(!t.divGroups||c||"div"!==(o=l).props.nodeName||null!==cs(o)){var d=bg(l,c,t)
d&&(a.includes(d)||a.push(d),1===(null==l||null===(u=l.actualNode)||void 0===u?void 0:u.nodeType)&&n.push(l.actualNode))}else{if(!l.children)return
var p=yg(l.children,!0)
i.push.apply(i,q(p))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(n),!0)}},"invalidrole-evaluate":function(e,t,r){var n=zf(r.attr("role"))
return!!n.every((function(e){return!ls(e.toLowerCase(),{allowAbstract:!0})}))&&(this.data(n),!0)},"is-element-focusable-evaluate":function(e,t,r){return Yu(r)},"is-initiator-matches":Yg,"is-on-screen-evaluate":function(e){return Ji(e)},"is-visible-matches":function(e){return Ji(e)},"is-visible-on-screen-matches":function(e,t){return Ji(t)},"label-content-name-mismatch-evaluate":function(e,t,r){var n,a,o,i,u=null==t?void 0:t.pixelThreshold,s=null!==(n=null==t?void 0:t.occurrenceThreshold)&&void 0!==n?n:null==t?void 0:t.occuranceThreshold,l=es(e).toLowerCase(),c=vs(dl(r,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:u,occurrenceThreshold:s})).toLowerCase()
return!c||(Cl(l)<1||Cl(c)<1?void 0:(a=c,o=wg(l),i=wg(a),!(!o||!i)&&o.includes(i)))},"label-content-name-mismatch-matches":function(e,t){var r=Us(e)
return!!(r&&Zm("widget").includes(r)&&eD().includes(r)&&(vs(rs(t))||vs(ts(e)))&&vs(Xs(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var r=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(r)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!xi(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=Zm("landmark"),r=Wi(e),n=Us(e)
for(this.data({role:n});r;){var a=r.getAttribute("role")
if(a||"FORM"===r.nodeName.toUpperCase()||(a=js(r)),a&&t.includes(a)&&("main"!==a||"complementary"!==n))return!1
r=Wi(r)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter((function(e){var r=t.find((function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText}))
return r?(r.result=!1,r.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)}))},"landmark-is-unique-evaluate":function(e,t,r){var n=Us(e),a=Fl(r)
return a=a?a.toLowerCase():null,this.data({role:n,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){return function(e){var t=Zm("landmark"),r=Us(e)
if(!r)return!1
var n=e.props.nodeName
return"section"===n||"form"===n?!!Fl(e):t.indexOf(r)>=0||"region"===r}(t)&&Qs(t)},"layout-table-matches":function(e){return!qm(e)&&!Yu(e)},"link-in-text-block-evaluate":function(e,t){var r=t.requiredContrastRatio,n=t.allowSameColor
if(Bg(e))return!1
for(var a=Wi(e);a&&1===a.nodeType&&!Bg(a);)a=Wi(a)
if(a){this.relatedNodes([a])
var o=ng(e),i=ng(a),u=JD(e),s=JD(a),l=o&&i?Ng(o,i):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=r)return!0
var c=u&&s?Ng(u,s):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=r)return!0
if(!c){var d,p=null!==(d=ac.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void ac.clear()}if(l)return!(!n||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:r,nodeBackgroundColor:u?u.toHexString():void 0,parentBackgroundColor:s?s.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:r,nodeColor:o?o.toHexString():void 0,parentColor:i?i.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=vs(e.innerText),r=e.getAttribute("role")
return(!r||"link"===r)&&!!t&&!!Ji(e)&&Zl(e)},"link-in-text-block-style-evaluate":function(e){if(kg(e))return!1
for(var t=Wi(e);t&&1===t.nodeType&&!kg(t);)t=Wi(t)
if(t){if(this.relatedNodes([t]),TD(e,t))return!0
if(!function(e){for(var t=0,n=["before","after"];t<n.length;t++){var a=n[t]
if("none"!==r.getComputedStyle(e,":".concat(a)).getPropertyValue("content"))return!0}return!1}(e))return!1
this.data({messageKey:"pseudoContent"})}},"listitem-evaluate":function(e,t,r){var n=r.parent
if(n){var a=n.props.nodeName,o=cs(n)
return!!["presentation","none","list"].includes(o)||(o&&ls(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,r){return Is(r,t.matcher)},"meta-refresh-evaluate":function(e,t,r){var n=t||{},a=n.minDelay,o=n.maxDelay,i=V((r.attr("content")||"").trim().split(ED),1)[0]
if(!i.match(CD))return!0
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
return!u&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=va(e.getAttribute("id")),r=e.parentNode,n=Ei(e)
n=n.documentElement||n
var a=Array.from(n.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter((function(e){return!Hi(e)})));r;)"LABEL"===r.nodeName.toUpperCase()&&-1===a.indexOf(r)&&a.push(r),r=r.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter((function(e){return Qs(e)}))
if(o.length>1)return
return!Ju(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var r=Us(t)
return!!r&&!!us.ariaRoles[r].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){var r=e.hasAttribute("controls")
if(e.hasAttribute("loop"))return r
if(e.duration){var n=t.allowedDuration,a=void 0===n?3:n
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return V(t,2)[1].split(",").map((function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),r=0,n=1;t.length>0;)r+=n*parseInt(t.pop(),10),n*=60
return parseFloat(r)}(e):parseFloat(e)}))}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=a||!!r}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":Gg,"no-focusable-content-evaluate":function(e,t,r){if(r.children)try{var n=Eg(r)
if(!n.length)return!0
var a=n.filter(Cg)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(n),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,r){var n,a,o=Us(r,{noImplicit:!0})
this.data(o)
try{n=vs(pl(r)).toLowerCase(),a=vs(Fl(r)).toLowerCase()}catch(e){return}return!(!a&&!n)&&!((a||!n)&&a.includes(n))&&void 0},"no-naming-method-matches":function(e,t){var r=Ps(t).namingMethods
return!(r&&0!==r.length||"combobox"===cs(t)&&lm(t,'input:not([type="hidden"])').length||sD(t,{popupRoles:["listbox"]}))},"no-negative-tabindex-matches":function(e,t){var r=Wh(t.attr("tabindex"))
return null===r||r>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,r){var n=r.props.nodeName,a=(r.attr("type")||"").toLowerCase(),o=r.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==n||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[Gg,Wg].every((function(r){return r(e,t)}))},"only-dlitems-evaluate":function(e,t,r){var n=["definition","term","list"],a=r.children.reduce((function(e,t){var r=t.actualNode
return"DIV"===r.nodeName.toUpperCase()&&null===Us(r)?e.concat(t.children):e.concat(t)}),[]).reduce((function(e,t){var r=t.actualNode,a=r.nodeName.toUpperCase()
if(1===r.nodeType&&Qs(r)){var o=cs(r);("DT"!==a&&"DD"!==a||o)&&(n.includes(o)||e.badNodes.push(r))}else 3===r.nodeType&&""!==r.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e}),{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,r){var n=!1,a=!1,o=!0,i=[],u=[],s=[]
return r.children.forEach((function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&Qs(t)){o=!1
var r="LI"===t.nodeName.toUpperCase(),l=Us(e),c="listitem"===l
r||c||i.push(t),r&&!c&&(u.push(t),s.includes(l)||s.push(l)),c&&(a=!0)}}else n=!0})),n||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(u),this.data({messageKey:"roleNotValid",roles:s.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,r){var n=Array.from(e.parentNode.children),a=n.indexOf(e),o=(t=t||{}).margins||[],i=n.slice(a+1).find((function(e){return"P"===e.nodeName.toUpperCase()})),u=n.slice(0,a).reverse().find((function(e){return"P"===e.nodeName.toUpperCase()})),s=FD(e),l=i?FD(i):null,c=u?FD(u):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!l||!wD(s,l,o))return!0
var m=xi(r,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!wD(s,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),r=e.textContent.trim()
return!(0===r.length||(r.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter((function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()})).length},"page-no-duplicate-after":function(e){return e.filter((function(e){return"ignored"!==e.data}))},"page-no-duplicate-evaluate":function(e,t,r){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var n="page-no-duplicate;"+t.selector
if(!Xa.get(n)){Xa.set(n,!0)
var a=Zh(i._tree[0],t.selector,(function(e){return Qs(e)}))
return"string"==typeof t.nativeScopeFilter&&(a=a.filter((function(e){return e.actualNode.hasAttribute("role")||!xi(e,t.nativeScopeFilter)}))),"string"==typeof t.role&&(a=a.filter((function(e){return Us(e)===t.role}))),this.relatedNodes(a.filter((function(e){return e!==r})).map((function(e){return e.actualNode}))),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==js(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,r){var n=cs(r)
if(["presentation","none"].includes(n)&&["iframe","frame"].includes(r.props.nodeName)&&r.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:r.props.nodeName}),!1
var a=Us(r)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(n))return!1
var o,i=ps().some((function(e){return r.hasAttr(e)})),u=Yu(r)
return o=i&&!u?"globalAria":!i&&u?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter((function(e){return e.data.isIframe}))
return e.forEach((function(e){if(!e.result&&1!==e.node.ancestry.length){var r,n=e.node.ancestry.slice(0,-1),a=Q(t)
try{for(a.s();!(r=a.n()).done;){var o=r.value
if(zh(n,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}})),t.forEach((function(e){e.result||(e.result=!0)})),e},"region-evaluate":function(e,t,r){return this.data({isIframe:["iframe","frame"].includes(r.props.nodeName)}),!Xa.get("regionlessNodes",(function(){return function(e){return bD(i._tree[0],e).map((function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e})).filter((function(e,t,r){return r.indexOf(e)===t}))}(t)})).includes(r)},"same-caption-summary-evaluate":function(e,t,r){if(void 0!==r.children){var n=r.attr("summary"),a=r.children.find(DD),o=!!a&&vs(dl(a))
return!(!o||!n)&&vs(n).toLowerCase()===vs(o).toLowerCase()}},"scope-value-evaluate":function(e,t){var r=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(r)},"scrollable-region-focusable-matches":function(e,t){return void 0!==Eh(e,13)&&!1===sD(t)&&lm(t,"*").some((function(e){return Ll(e,!0,!0)}))},"skip-link-evaluate":function(e){var t=Lu(e,"href")
return!!t&&(Qs(t)||void 0)},"skip-link-matches":function(e){return Ef(e)&&Xi(e)},"structured-dlitems-evaluate":function(e,t,r){var n=r.children
if(!n||!n.length)return!1
for(var a,o=!1,i=!1,u=0;u<n.length;u++){if("DT"===(a=n[u].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"summary-interactive-matches":function(e,t){var r,n,a,o=t.parent
return!("details"!==o.props.nodeName||(a=null===(n=(r=t).actualNode)||void 0===n?void 0:n.parentElement)&&a!==r.parent.actualNode)&&o.children.find((function(e){return"summary"===e.props.nodeName}))===t},"svg-namespace-matches":Vg,"svg-non-empty-title-evaluate":function(e,t,r){if(r.children){var n=r.children.find((function(e){return"title"===e.props.nodeName}))
if(!n)return this.data({messageKey:"noTitle"}),!1
try{if(""===dl(n,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,r){var n=Wh(r.attr("tabindex"))
return null===n||n<=0},"table-or-grid-role-matches":function(e,t){var r=Us(t)
return["treegrid","grid","table"].includes(r)},"target-offset-evaluate":function(e,t,r){var n=(null==t?void 0:t.minOffset)||24
if(uu(10*n,r.boundingClientRect))return this.data({messageKey:"large",minOffset:n}),!0
var a,o,i=[],u=n,s=Q(Tu(r,n))
try{for(s.s();!(a=s.n()).done;){var l=a.value
if("widget"===Yl(l)&&Yu(l)){var c=null
try{c=su(r,l,n/2)}catch(e){if(e.message.startsWith("splitRects"))return void this.data({messageKey:"tooManyRects",closestOffset:0,minOffset:n})
throw e}null!==c&&(.05+(c=2*(o=c,Math.round(10*o)/10))>=n||(u=Math.min(u,c),i.push(l)))}}}catch(e){s.e(e)}finally{s.f()}return 0===i.length?(this.data({closestOffset:u,minOffset:n}),!0):(this.relatedNodes(i.map((function(e){return e.actualNode}))),i.some(Qu)?(this.data({closestOffset:u,minOffset:n}),!Qu(r)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:u,minOffset:n}))},"target-size-evaluate":function(e,t,r){var n=(null==t?void 0:t.minSize)||24,a=r.boundingClientRect
if(uu(10*n,a))return this.data({messageKey:"large",minSize:n}),!0
var o=uu.bind(null,n),i=Tu(r),u=function(e,t){return t.filter((function(t){return!hg(t,e)&&gg(e,t)}))}(r,i),s=function(e,t){var r,n=[],a=[],o=Q(t)
try{for(o.s();!(r=o.n()).done;){var i=r.value
!gg(e,i)&&du(e,i)&&"none"!==mg(i)&&(hg(e,i)?n.push(i):a.push(i))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:n,partialObscuringElms:a}}(r,i),l=s.fullyObscuringElms,c=s.partialObscuringElms
if(u.length&&(l.length||!o(a)))return this.data({minSize:n,messageKey:"contentOverflow"}),void this.relatedNodes(vg(u))
if(l.length)return this.relatedNodes(vg(l)),this.data({messageKey:"obscured"}),!0
var d=!Qu(r)&&void 0
if(!o(a))return this.data(z({minSize:n},Dg(a))),d
var p=c.filter((function(e){return"widget"===Yl(e)&&Yu(e)}))
if(!p.length)return this.data(z({minSize:n},Dg(a))),!0
var f=function(e,t){var r,n=e.boundingClientRect,a=t.map((function(e){return e.boundingClientRect}))
try{r=pu(n,a)}catch(e){return null}return function(e,t){return e.reduce((function(e,r){var n=uu(t,e)
return n!==uu(t,r)?n?e:r:e.width*e.height>r.width*r.height?e:r}))}(r)}(r,p)
if(f){if(!o(f)){if(u.length)return this.data({minSize:n,messageKey:"contentOverflow"}),void this.relatedNodes(vg(u))
var h=p.every(Qu),m="partiallyObscured".concat(h?"":"NonTabbable")
return this.data(z({messageKey:m,minSize:n},Dg(f))),this.relatedNodes(vg(p)),h?d:void 0}return this.data(z({minSize:n},Dg(f||a))),this.relatedNodes(vg(p)),!0}this.data({minSize:n,messageKey:"tooManyRects"})},"td-has-header-evaluate":function(e){var t=[],r=Mm(e),n=fs(e)
return r.forEach((function(e){zl(e)&&jm(e)&&!cD(e)&&(Pm(e,n).some((function(e){return null!==e&&!!zl(e)}))||t.push(e))})),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],r=[],n=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var u=t.filter((function(e){return e.getAttribute("id")})).map((function(e){return e.getAttribute("id")}))
return t.forEach((function(e){var t=!1,a=!1
if(e.hasAttribute("headers")&&Qs(e)){var o=e.getAttribute("headers").trim()
if(!o)return r.push(e)
var i=zf(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some((function(e){return!u.includes(e)})),(t||a)&&n.push(e))}})),n.length>0?(this.relatedNodes(n),!1):!r.length||void this.relatedNodes(r)},"th-has-data-cells-evaluate":function(e){var t=Mm(e),r=this,n=[]
t.forEach((function(e){var t=e.getAttribute("headers")
t&&(n=n.concat(t.split(/\s+/)))
var r=e.getAttribute("aria-labelledby")
r&&(n=n.concat(r.split(/\s+/)))}))
var a=t.filter((function(e){return""!==vs(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))})),o=fs(e),i=!0
return a.forEach((function(e){if(!e.getAttribute("id")||!n.includes(e.getAttribute("id"))){var t=hs(e,o),a=!1
Ds(e)&&(a=Vm("down",t,o).find((function(t){return!Ds(t)&&Pm(t,o).includes(e)}))),!a&&gs(e)&&(a=Vm("right",t,o).find((function(t){return!gs(t)&&Pm(t,o).includes(e)}))),a||r.relatedNodes(e),i=i&&a}})),!!i||void 0},"title-only-evaluate":function(e,t,r){var n=Tl(r),a=$s(r),o=r.attr("aria-describedby")
return!(n||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach((function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0})),e.forEach((function(e){e.result=!!t[e.data]})),e},"unique-frame-title-evaluate":function(e,t,r){var n=vs(r.attr("title")).toLowerCase()
return this.data(n),!0},"unsupportedrole-evaluate":function(e,t,r){var n=Us(r,{dpub:!0,fallback:!0}),a=ss(n)
return a&&this.data(n),a},"valid-lang-evaluate":function(e,t,r){var n=[]
return t.attributes.forEach((function(e){var a=r.attr(e)
if("string"==typeof a){var o=Xf(a),i=t.value?!t.value.map(Xf).includes(o):!Cm(o);(""!==o&&i||""!==a&&!vs(a))&&n.push(e+'="'+r.attr(e)+'"')}})),!(!n.length||"html"!==r.props.nodeName&&!Vl(r)||(this.data(n),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var r=cs(e)
return r&&(Og[r]||t.roles.includes(r))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return Sg[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return Ug.every((function(r){return r(e,t)}))},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,r){return Xf(r.attr("lang"))===Xf(r.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=Xf(e.getAttribute("lang")),r=Xf(e.getAttribute("xml:lang"))
return Cm(t)&&Cm(r)}},Zg=Xg,Jg=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function ev(e){if("string"==typeof e){if(Zg[e])return Zg[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function tv(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function rv(e){e&&(this.id=e.id,this.configure(e))}rv.prototype.enabled=!0,rv.prototype.run=function(e,t,r,n,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var u,s=new Jg(this),l=ro(s,t,n,a)
try{u=this.evaluate.call(l,e.actualNode,i,e,r)}catch(t){return e&&e.actualNode&&(t.errorNode=ci.toSpec(e)),void a(t)}l.isAsync||(s.result=u,n(s))}else n(null)},rv.prototype.runSync=function(e,t,r){var n=(t=t||{}).enabled
if(!(void 0===n?this.enabled:n))return null
var a,o=this.getOptions(t.options),i=new Jg(this),u=ro(i,t)
u.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(u,e.actualNode,o,e,r)}catch(t){throw e&&e.actualNode&&(t.errorNode=ci.toSpec(e)),t}return i.result=a,i},rv.prototype.configure=function(e){var t=this
e.evaluate&&!Zg[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=tv(e.options):this.options=e.options),["evaluate","after"].filter((function(t){return e.hasOwnProperty(t)})).forEach((function(r){return t[r]=ev(e[r])}))},rv.prototype.getOptions=function(e){return this._internalCheck?gi(this.options,tv(e||{})):e||this.options}
var nv=rv,av=function(e){this.id=e.id,this.result=Jn.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function ov(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(Da(Jn.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=ev(e.matches))}function iv(e){if(e.length){var t=!1,r={}
return e.forEach((function(e){var n=e.results.filter((function(e){return e}))
r[e.type]=n,n.length&&(t=!0)})),t?r:null}}ov.prototype.matches=function(){return!0},ov.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r="mark_gather_start_"+this.id,n="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&Yh.mark(r)
var i=hm(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&Yh.mark(a),i=i.filter((function(e){return Qs(e)})),t.performanceTimer&&(Yh.mark(o),Yh.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&(Yh.mark(n),Yh.measure("rule_"+this.id+"#gather",r,n)),i},ov.prototype.runChecks=function(e,t,r,n,a,o){var i=this,u=xo()
this[e].forEach((function(e){var a=i._audit.checks[e.id||e],o=uh(a,i.id,r)
u.defer((function(e,r){a.run(t,o,n,e,r)}))})),u.then((function(t){t=t.filter((function(e){return e})),a({type:e,results:t})})).catch(o)},ov.prototype.runChecksSync=function(e,t,r,n){var a=this,o=[]
return this[e].forEach((function(e){var i=a._audit.checks[e.id||e],u=uh(i,a.id,r)
o.push(i.runSync(t,u,n))})),{type:e,results:o=o.filter((function(e){return e}))}},ov.prototype.run=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
r.performanceTimer&&this._trackPerformance()
var o,i=xo(),s=new av(this)
try{o=this.gatherAndMatchNodes(e,r)}catch(e){return void a(new u({cause:e,ruleId:this.id}))}r.performanceTimer&&this._logGatherPerformance(o),o.forEach((function(n){i.defer((function(a,o){var i=xo();["any","all","none"].forEach((function(a){i.defer((function(o,i){t.runChecks(a,n,r,e,o,i)}))})),i.then((function(e){var r=iv(e)
r&&(r.node=new to(n),s.nodes.push(r),t.reviewOnFail&&(["any","all"].forEach((function(e){r[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),r.none.forEach((function(e){!0===e.result&&(e.result=void 0)})))),a()})).catch((function(e){return o(e)}))}))})),i.then((function(){r.performanceTimer&&t._logRulePerformance(),setTimeout((function(){n(s)}),0)})).catch((function(e){r.performanceTimer&&t._logRulePerformance(),a(e)}))},ov.prototype.runSync=function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
r.performanceTimer&&this._trackPerformance()
var n,a=new av(this)
try{n=this.gatherAndMatchNodes(e,r)}catch(e){throw new u({cause:e,ruleId:this.id})}return r.performanceTimer&&this._logGatherPerformance(n),n.forEach((function(n){var o=[];["any","all","none"].forEach((function(a){o.push(t.runChecksSync(a,n,r,e))}))
var i=iv(o)
i&&(i.node=n.actualNode?new to(n):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach((function(e){i[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),i.none.forEach((function(e){!0===e.result&&(e.result=void 0)}))))})),r.performanceTimer&&this._logRulePerformance(),a},ov.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},ov.prototype._logGatherPerformance=function(e){ea("gather (",e.length,"):",Yh.timeElapsed()+"ms"),Yh.mark(this._markChecksStart)},ov.prototype._logRulePerformance=function(){Yh.mark(this._markChecksEnd),Yh.mark(this._markEnd),Yh.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),Yh.measure("rule_"+this.id,this._markStart,this._markEnd)},ov.prototype.gatherAndMatchNodes=function(e,t){var r=this,n="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&Yh.mark(n),o=o.filter((function(t){return r.matches(t.actualNode,t,e)})),t.performanceTimer&&(Yh.mark(a),Yh.measure("rule_"+this.id+"#matches",n,a)),o},ov.prototype.after=function(e,t){var r,n=this,a=di(r=this).map((function(e){var t=r._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null})).filter(Boolean),o=this.id
return a.forEach((function(r){var a,i,u,s=(a=e.nodes,i=r.id,u=[],a.forEach((function(e){di(e).forEach((function(t){t.id===i&&(t.node=e.node,u.push(t))}))})),u),l=uh(r,o,t),c=r.after(s,l.options)
n.reviewOnFail&&c.forEach((function(e){var t=(n.any.includes(e.id)||n.all.includes(e.id))&&!1===e.result,r=n.none.includes(e.id)&&!0===e.result;(t||r)&&(e.result=void 0)})),s.forEach((function(e){delete e.node,-1===c.indexOf(e)&&(e.filtered=!0)}))})),e.nodes=function(e){var t=["any","all","none"],r=e.nodes.filter((function(e){var r=0
return t.forEach((function(t){e[t]=e[t].filter((function(e){return!0!==e.filtered})),r+=e[t].length})),r>0}))
return e.pageLevel&&r.length&&(r=[r.reduce((function(e,r){if(e)return t.forEach((function(t){e[t].push.apply(e[t],r[t])})),e}))]),r}(e),e},ov.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=ev(e.matches)),e.impact&&(Da(Jn.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var uv=de(Xn()),sv=/\{\{.+?\}\}/g,lv=W((function e(t){$(this,e),this.lang="en",this.defaultConfig=t,this.standards=us,this._init(),this._defaultLocale=null}),[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),r=0;r<t.length;r++){var n=t[r],a=this.data.checks[n].messages,o=a.pass,i=a.fail,u=a.incomplete
e.checks[n]={pass:o,fail:i,incomplete:u}}for(var s=Object.keys(this.data.rules),l=0;l<s.length;l++){var c=s[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var D=h[m],g=this.data.failureSummaries[D].failureMessage
e.failureSummaries[D]={failureMessage:g}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.checks[n])throw new Error('Locale provided for unknown check: "'.concat(n,'"'))
this.data.checks[n]=fv(this.data.checks[n],e[n])}}},{key:"_applyRuleLocale",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.rules[n])throw new Error('Locale provided for unknown rule: "'.concat(n,'"'))
this.data.rules[n]=hv(this.data.rules[n],e[n])}}},{key:"_applyFailureSummaries",value:function(e){for(var t=Object.keys(e),r=0;r<t.length;r++){var n=t[r]
if(!this.data.failureSummaries[n])throw new Error('Locale provided for unknown failureMessage: "'.concat(n,'"'))
this.data.failureSummaries[n]=mv(this.data.failureSummaries[n],e[n])}}},{key:"applyLocale",value:function(e){this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=Dv(this.data.incompleteFallbackMessage,e.incompleteFallbackMessage)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=dv()
this.allowedOrigins=[]
var r,n=Q(e)
try{for(n.s();!(r=n.n()).done;){var a=r.value
if(a===Jn.allOrigins)return void(this.allowedOrigins=["*"])
a!==Jn.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){n.e(e)}finally{n.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=no(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var r=dv()
t.allowedOrigins=r?[r]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=z({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental","deprecated"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,pv(e.rules,this,"addRule"),pv(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new ov(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter((function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]})).forEach((function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())}))),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new nv(e)}},{key:"run",value:function(e,t,r,n){this.normalizeOptions(t),to.setRunOptions(t),i._selectCache=[]
var a=function(e,t,r){return e.reduce((function(e,n){return dm(n,t,r)?n.preload?(e.later.push(n),e):(e.now.push(n),e):e}),{now:[],later:[]})}(this.rules,e,t),o=a.now,u=a.later,s=xo()
o.forEach((function(r){s.defer(gv(r,e,t))}))
var l=xo()
u.length&&l.defer((function(e){am(t).then((function(t){return e(t)})).catch((function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)}))}))
var c=xo()
c.defer(s),c.defer(l),c.then((function(a){var o=a.pop()
if(o&&o.length){var s=o[0]
s&&(e=z({},e,s))}var l=a[0]
if(!u.length)return i._selectCache=void 0,void r(l.filter((function(e){return!!e})))
var c=xo()
u.forEach((function(r){var n=gv(r,e,t)
c.defer(n)})),c.then((function(e){i._selectCache=void 0,r(l.concat(e).filter((function(e){return!!e})))})).catch(n)})).catch(n)}},{key:"after",value:function(e,t){var r=this.rules
return e.map((function(e){var n=pi(r,"id",e.id)
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
var a=e.data.rules[n.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===vv(t,n.id,r))&&(a.helpUrl=vv(e,n.id,r))}))}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),cv=lv
function dv(){return r.origin&&"null"!==r.origin?r.origin:r.location&&r.location.origin&&"null"!==r.location.origin?r.location.origin:void 0}function pv(e,t,r){var n,a
for(n=0,a=e.length;n<a;n++)t[r](e[n])}var fv=function(e,t){var r=t.pass,n=t.fail
return"string"==typeof r&&sv.test(r)&&(r=uv.default.compile(r)),"string"==typeof n&&sv.test(n)&&(n=uv.default.compile(n)),z({},e,{messages:{pass:r||e.messages.pass,fail:n||e.messages.fail,incomplete:"object"===o(e.messages.incomplete)?z({},e.messages.incomplete,t.incomplete):t.incomplete}})},hv=function(e,t){var r=t.help,n=t.description
return"string"==typeof r&&sv.test(r)&&(r=uv.default.compile(r)),"string"==typeof n&&sv.test(n)&&(n=uv.default.compile(n)),z({},e,{help:r||e.help,description:n||e.description})},mv=function(e,t){var r=t.failureMessage
return"string"==typeof r&&sv.test(r)&&(r=uv.default.compile(r)),z({},e,{failureMessage:r||e.failureMessage})},Dv=function(e,t){return"string"==typeof t&&sv.test(t)&&(t=uv.default.compile(t)),t||e}
function gv(e,t,r){return r.performanceTimer&&Yh.mark("mark_rule_start_"+e.id),function(n,a){e.run(t,r,(function(e){n(e)}),(function(t){if(r.debug)a(t)
else{var o=Object.assign(new av(e),{result:Jn.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
n(o)}}))}}function vv(e,t,r){var n=e.brand,a=e.application,o=e.lang
return Jn.helpUrlBase+n+"/"+(r||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}function bv(e){var t=r&&"Node"in r&&"NodeList"in r,n=!!a
if(!t||!n){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
n||(Xa.set("globalDocumentSet",!0),a=e.ownerDocument),t||(Xa.set("globalWindowSet",!0),r=a.defaultView)}}var yv=function(){Xa.get("globalDocumentSet")&&(Xa.set("globalDocumentSet",!1),a=null),Xa.get("globalWindowSet")&&(Xa.set("globalWindowSet",!1),r=null),i._memoizedFns.forEach((function(e){return e.clear()})),Xa.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0}
function Fv(e,t,r,n){try{e=new bh(e),i._tree=e.flatTree,i._selectorData=Pa(e.flatTree)}catch(e){return yv(),n(e)}var a=xo(),o=i._audit
t.performanceTimer&&Yh.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer((function(r,n){mi(e,t,"rules",null,r,n)})),a.defer((function(r,n){o.run(e,t,r,n)})),a.then((function(a){try{t.performanceTimer&&Yh.auditEnd()
var i=hi(a.map((function(e){return{results:e}})))
e.initiator&&(t.performanceTimer&&Yh.mark("auditAfterStart"),i=o.after(i,t),t.performanceTimer&&(Yh.mark("auditAfterEnd"),Yh.measure("audit.after","auditAfterStart","auditAfterEnd"),Yh.logMeasures("audit.after")),i.forEach(um),i=i.map(da))
try{r(i,yv)}catch(e){yv(),ea(e)}}catch(e){yv(),n(e)}})).catch((function(e){yv(),n(e)}))}function wv(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach((function(e){i._audit.registerCommand(e)}))}function Ev(e){var t,r,n,u=V(e,3),s=u[0],l=u[1],c=u[2],d=new TypeError("axe.run arguments are invalid")
if(!_h(s)){if(void 0!==c)throw d
c=l,l=s,s=a}if("object"!==o(l)){if(void 0!==c)throw d
c=l,l={}}if("function"!=typeof c&&void 0!==c)throw d
return(l=no(l)).reporter=null!==(t=null!==(r=l.reporter)&&void 0!==r?r:null===(n=i._audit)||void 0===n?void 0:n.reporter)&&void 0!==t?t:"v1",{context:s,options:l,callback:c}}r.top!==r&&(ni.subscribe("axe.start",(function(e,t,r){var n=r,o=function(e){e instanceof Error==0&&(e=new Error(e)),r(e)},u=e&&e.context||{}
u.hasOwnProperty("include")&&!u.include.length&&(u.include=[a])
var s=e&&e.options||{}
switch(e.command){case"rules":return Fv(u,s,(function(e,t){e=ci.mapRawResults(e),n(e),t()}),o)
case"cleanup-plugin":return Bm(n,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,r)}})),ni.subscribe("axe.ping",(function(e,t,r){r({axe:!0})}))),wv.prototype.run=function(){return this._run.apply(this,arguments)},wv.prototype.collect=function(){return this._collect.apply(this,arguments)},wv.prototype.cleanup=function(e){var t=i.utils.queue(),r=this
Object.keys(this._registry).forEach((function(e){t.defer((function(t){r._registry[e].cleanup(t)}))})),t.then(e)},wv.prototype.add=function(e){this._registry[e.id]=e}
var Cv=function(){}
function xv(e){var t=e.frames,r=e.frameSpec
return r?t.map((function(e){return ci.mergeSpecs(e,r)})):t}var Av=function(e,t,r){if("function"==typeof t&&(r=t,t={}),!e||!Array.isArray(e))return r(e)
r(e.map((function(e){for(var t=z({},e),r=0,n=["passes","violations","incomplete","inapplicable"];r<n.length;r++){var a=n[r]
t[a]=ci.mapRawNodeResults(t[a])}return t})))},kv={base:{Audit:cv,CheckResult:Jg,Check:nv,Context:bh,RuleResult:av,Rule:ov,metadataFunctionMap:Zg},public:{reporters:Rm},helpers:{failureSummary:Zf,incompleteFallbackMessage:Jf,processAggregate:th},utils:{setDefaultFrameMessenger:ti,cacheNodeSelectors:Wf,getNodesMatchingExpression:Uf,convertSelector:go},commons:{dom:{nativelyHidden:_i,displayHidden:Si,visibilityHidden:Oi,contentVisibiltyHidden:Mi,ariaHidden:Ii,opacityHidden:Pi,scrollHidden:ji,overflowHidden:qi,clipHidden:Li,areaHidden:zi,detailsHidden:Vi}}}
i._thisWillBeDeletedDoNotUse=kv,i.constants=Jn,i.log=ea,i.AbstractVirtualNode=ra,i.SerialVirtualNode=Tm,i.VirtualNode=Lf,i._cache=Xa,i.imports=ic,i.cleanup=Bm,i.configure=function(e){var t=i._audit
if(!t)throw new Error("No audit configured")
if(e.axeVersion||e.ver){var r=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(r))throw new Error("Invalid configured version ".concat(r))
var n=V(r.split("-"),2),a=n[0],o=n[1],u=V(a.split(".").map(Number),3),s=u[0],l=u[1],c=u[2],d=V(i.version.split("-"),2),p=d[0],f=d[1],h=V(p.split(".").map(Number),3),m=h[0],D=h[1],g=h[2]
if(s!==m||D<l||D===l&&g<c||s===m&&l===D&&c===g&&o&&o!==f)throw new Error("Configured version ".concat(r," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||_m(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach((function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)}))}var v,b=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach((function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
b.push(e.id),t.addRule(e)}))}if(e.disableOtherRules&&t.rules.forEach((function(e){!1===b.includes(e.id)&&(e.enabled=!1)})),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(v=e.standards,Object.keys(is).forEach((function(e){v[e]&&(is[e]=gi(is[e],v[e]))}))),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(Jn.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){ni.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter((function(t){return!!e.filter((function(e){return-1!==t.tags.indexOf(e)})).length})):i._audit.rules,r=i._audit.data.rules||{}
return t.map((function(e){var t=r[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds}}))},i._load=function(e){i._audit=new cv(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new wv(e)},i.hasReporter=_m,i.getReporter=Sm,i.addReporter=function(e,t,r){Rm[e]=t,r&&(Nm=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(is).forEach((function(e){is[e]=os[e]}))},i._runRules=Fv,i.runVirtualRule=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
r.reporter=r.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof ra||(t=new Tm(t))
var n=Fh(e)
if(!n)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(n=Object.create(n,{excludeHidden:{value:!1}})).runSync(a,r)
um(o),da(o)
var u=ha([o])
return u.violations.forEach((function(e){return e.nodes.forEach((function(e){e.failureSummary=Zf(e)}))})),z({},sh(),u,{toolOptions:r})},i.run=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
bv(t[0])
var n=Ev(t),a=n.context,o=n.options,u=n.callback,s=void 0===u?Cv:u,l=function(e){var t,r,n
return"function"==typeof Promise&&e===Cv?t=new Promise((function(e,t){r=t,n=e})):(n=function(t){return e(null,t)},r=function(t){return e(t)}),{thenable:t,reject:r,resolve:n}}(s),c=l.thenable,d=l.resolve,p=l.reject
try{Da(i._audit,"No audit configured"),Da(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return function(e,t){if("function"!=typeof t||t===Cv)throw e
t(e.message)}(e,s)}return i._running=!0,o.performanceTimer&&Yh.start(),i._runRules(a,o,(function(e,t){var r=function(e){i._running=!1,t()
try{p(e)}catch(e){i.log(e)}}
try{o.performanceTimer&&Yh.mark("reporterStart"),function(e,t,r,n){var a=Sm(t.reporter)(e,t,r,n)
void 0!==a&&r(a)}(e,o,(function(e){o.performanceTimer&&(Yh.mark("reporterEnd"),Yh.measure("reporter","reporterStart","reporterEnd"),Yh.logMeasures("reporter"),Yh.end()),i._running=!1,t()
try{d(e)}catch(e){i.log(e)}}),r)}catch(e){r(e)}}),(function(e){o.performanceTimer&&Yh.end(),i._running=!1,s(e),p(e)})),c},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return e&&"object"===o(e.documentElement)&&"object"===o(e.defaultView)&&(e=e.documentElement),bv(e),i._tree=Yf(e),i._selectorData=Pa(i._tree),i._tree[0]},i.teardown=yv,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
var n=Ev(t),a=n.options,o=n.context
Da(i._audit,"Axe is not configured. Audit is missing."),Da(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var u=new bh(o,i._tree)
return i._tree=u.flatTree,i._selectorData=Pa(u.flatTree),i._running=!0,a.elementRef=!1,new Promise((function(e,t){i._audit.run(u,a,e,t)})).then((function(e){e=ci.mapRawResults(e)
var t,r=u.frames.map((function(e){var t=e.node
return ci.toSpec(t)}))
return u.initiator&&(t=sh()),i._running=!1,yv(),{results:e,frames:r,environmentData:t}})).catch((function(e){return i._running=!1,yv(),Promise.reject(e)}))},i.finishRun=function(e){var t,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=no(a)
var o=(e.find((function(e){return e.environmentData}))||{}).environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(r=a.reporter)&&void 0!==r?r:null===(n=i._audit)||void 0===n?void 0:n.reporter)&&void 0!==t?t:"v1",function(e){var t,r=[],n=Q(e)
try{for(n.s();!(t=n.n()).done;){var a=t.value,o=r.shift()
if(a){a.frameSpec=null!=o?o:null
var i=xv(a)
r.unshift.apply(r,q(i))}}}catch(e){n.e(e)}finally{n.f()}}(e)
var u=hi(e)
return(u=i._audit.after(u,a)).forEach(um),function(e,t){return new Promise((function(r,n){Sm(t.reporter)(e,t,r,n)}))}(u=u.map(da),z({environmentData:o},a))},i.commons=xD,i.utils=na,i.addReporter("na",(function(e,t,r){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,w)
r(z({},sh(a),{toolOptions:o},th(e,t)))})),i.addReporter("no-passes",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,E)
t.resultTypes=["violations"]
var i=th(e,t).violations
r(z({},sh(a),{toolOptions:o,violations:i}))})),i.addReporter("rawEnv",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,C)
Av(e,o,(function(e){var t=sh(a)
r({raw:e,env:t})}))})),i.addReporter("raw",Av),i.addReporter("v1",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,x),i=th(e,t),u=function(e){e.nodes.forEach((function(e){e.failureSummary=Zf(e)}))}
i.incomplete.forEach(u),i.violations.forEach(u),r(z({},sh(a),{toolOptions:o},i))})),i.addReporter("v2",(function(e,t,r){"function"==typeof t&&(r=t,t={})
var n=t,a=n.environmentData,o=j(n,A),i=th(e,t)
r(z({},sh(a),{toolOptions:o},i))}),!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensure every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensure <area> elements of image maps have alternative text",help:"Active <area> elements must have alternative text"},"aria-allowed-attr":{description:"Ensure an element's role supports its ARIA attributes",help:"Elements must only use supported ARIA attributes"},"aria-allowed-role":{description:"Ensure role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-braille-equivalent":{description:"Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent",help:"aria-braille attributes must have a non-braille equivalent"},"aria-command-name":{description:"Ensure every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-conditional-attr":{description:"Ensure ARIA attributes are used as described in the specification of the element's role",help:"ARIA attributes must be used as specified for the element's role"},"aria-deprecated-role":{description:"Ensure elements do not use deprecated roles",help:"Deprecated ARIA roles must not be used"},"aria-dialog-name":{description:"Ensure every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:'Ensure aria-hidden="true" is not present on the document body.',help:'aria-hidden="true" must not be present on the document body'},"aria-hidden-focus":{description:"Ensure aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensure every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensure every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensure every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-prohibited-attr":{description:"Ensure ARIA attributes are not prohibited for an element's role",help:"Elements must only use permitted ARIA attributes"},"aria-required-attr":{description:"Ensure elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensure elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensure elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensure all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensure role="text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensure every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensure every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensure every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensure all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensure attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensure <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensure <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensure buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",help:"Elements must meet enhanced color contrast ratio thresholds"},"color-contrast":{description:"Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",help:"Elements must meet minimum color contrast ratio thresholds"},"css-orientation-lock":{description:"Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensure <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensure <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensure each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensure every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensure every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensure every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensure headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensure table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensure elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensure form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensure <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensure <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensure <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensure the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensure every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensure the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensure <img> elements have alternative text or a role of none or presentation",help:"Images must have alternative text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensure input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensure <input type="image"> elements have alternative text',help:"Image buttons must have alternative text"},"label-content-name-mismatch":{description:"Ensure that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensure every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensure the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensure the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensure the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensure the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensure the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensure the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensure the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensure the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{description:"Ensure landmarks are unique",help:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensure links have discernible text",help:"Links must have discernible text"},list:{description:"Ensure that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensure <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensure <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensure <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensure <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensure <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensure <object> elements have alternative text",help:"<object> elements must have alternative text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",help:"Ensure elements marked as presentational are consistently ignored"},region:{description:"Ensure all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:'Ensure [role="img"] elements have alternative text',help:'[role="img"] elements must have an alternative text'},"scope-attr-valid":{description:"Ensure the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensure select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensure that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"summary-name":{description:"Ensure summary elements have discernible text",help:"Summary elements must have discernible text"},"svg-img-alt":{description:"Ensure <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensure tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"Tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch targets have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensure lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensure <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element uses aria-busy="true" while showing a loader'}},"aria-conditional-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{checkbox:'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',rowSingular:"This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",rowPlural:"These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"Ensure aria-errormessage value `${data.values}` references an existing element",plural:"Ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"Unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:{default:"Required ARIA children are present","aria-busy":"Element has an aria-busy attribute, so it is allowed to omit required children"},fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}",controlsWithinPopup:"Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},"braille-label-equivalent":{impact:"serious",messages:{pass:"aria-braillelabel is used on an element with accessible text",fail:"aria-braillelabel is used on an element with no accessible text",incomplete:"Unable to compute accessible text"}},"braille-roledescription-equivalent":{impact:"serious",messages:{pass:"aria-brailleroledescription is used on an element with aria-roledescription",fail:{noRoleDescription:"aria-brailleroledescription is used on an element with no aria-roledescription",emptyRoleDescription:"aria-brailleroledescription is used on an element with an empty aria-roledescription"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"serious",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",complexTextShadows:"Element's contrast could not be determined because it uses complex text shadows",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",incomplete:{default:"Check if the link needs styling to distinguish it from nearby text",pseudoContent:"Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"},fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"The autocomplete value is on an appropriate element",fail:"The autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted",incomplete:"the autocomplete attribute has a non-standard value. Check whether any standard value could be used instead."}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"serious",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"serious",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:'Focusable content should have tabindex="-1" or be removed from the DOM'}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")'},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Element has an explicit <label>",fail:"Element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Element has an implicit (wrapped) <label>",fail:"Element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped) <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item parent element has a role that is not role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions are available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:{default:"Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.",large:"Target far exceeds the minimum size of ${data.minOffset}px."},fail:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.",incomplete:{default:"Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?",nonTabbableNeighbor:"Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable",large:"Target far exceeds the minimum size of ${data.minSize}px."},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?",tooManyRects:"Could not get the target size because there are too many overlapping elements"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"Ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overridden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",r=e
if(r)for(var n=-1,a=r.length-1;n<a;)t+="\n  "+r[n+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",r=e
if(r)for(var n=-1,a=r.length-1;n<a;)t+="\n  "+r[n+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",impact:"serious",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",impact:"critical",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",impact:"critical",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"}],any:[],none:["aria-unsupported-attr"]},{id:"aria-allowed-role",impact:"minor",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-braille-equivalent",reviewOnFail:!0,impact:"serious",selector:"[aria-brailleroledescription], [aria-braillelabel]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:["braille-roledescription-equivalent","braille-label-equivalent"],any:[],none:[]},{id:"aria-command-name",impact:"serious",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-conditional-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[{options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-conditional-attr"}],any:[],none:[]},{id:"aria-deprecated-role",impact:"minor",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["deprecatedrole"]},{id:"aria-dialog-name",impact:"serious",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",impact:"critical",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag131","wcag412","EN-301-549","EN-9.1.3.1","EN-9.4.1.2"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",impact:"serious",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",impact:"serious",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",impact:"serious",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",impact:"serious",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111","EN-301-549","EN-9.1.1.1"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-prohibited-attr",impact:"serious",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5c01ea"],all:[],any:[],none:[{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-required-attr",impact:"critical",selector:"[role]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",impact:"critical",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"}],none:[]},{id:"aria-required-parent",impact:"critical",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",impact:"serious",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2","deprecated"],enabled:!1,all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",impact:"critical",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole"]},{id:"aria-text",impact:"serious",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",impact:"serious",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",impact:"serious",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",impact:"serious",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",impact:"critical",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",impact:"critical",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","EN-301-549","EN-9.1.2.1","section508","section508.22.a","deprecated"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",impact:"serious",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","EN-301-549","EN-9.1.3.5","ACT"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"],ignoredValues:["text","pronouns","gender","message","content"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",impact:"serious",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","EN-301-549","EN-9.1.4.12","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",impact:"serious",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",impact:"critical",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"bypass",impact:"serious",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o","TTv5","TT9.a","EN-301-549","EN-9.2.4.1"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",impact:"serious",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","TTv5","TT13.c","EN-301-549","EN-9.1.4.3","ACT"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",impact:"serious",selector:"html",tags:["cat.structure","wcag134","wcag21aa","EN-301-549","EN-9.1.3.4","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",impact:"serious",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",impact:"serious",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["dlitem"],none:[]},{id:"document-title",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","TTv5","TT12.a","EN-301-549","EN-9.2.4.2","ACT"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",impact:"serious",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",impact:"critical",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag412","EN-301-549","EN-9.4.1.2"],reviewOnFail:!0,actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",impact:"minor",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a-obsolete","wcag411","deprecated"],enabled:!1,actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",impact:"minor",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",impact:"minor",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",impact:"minor",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",impact:"moderate",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332","TTv5","TT5.c","EN-301-549","EN-9.3.3.2"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",impact:"serious",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",impact:"critical",selector:"html, frame, iframe",tags:["cat.structure","best-practice","review-item"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",impact:"serious",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag2a","wcag412","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",impact:"serious",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i","TTv5","TT12.d","EN-301-549","EN-9.4.1.2"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",impact:"moderate",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",impact:"minor",selector:"*",excludeHidden:!1,tags:["cat.structure","best-practice","experimental","review-item"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",impact:"serious",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",impact:"serious",selector:'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',tags:["cat.language","wcag2a","wcag311","TTv5","TT11.a","EN-301-549","EN-9.3.1.1","ACT"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",impact:"moderate",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","EN-301-549","EN-9.3.1.1","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",impact:"minor",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",impact:"critical",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","TT7.b","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",impact:"minor",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",impact:"critical",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label","presentational-role"],none:[]},{id:"input-image-alt",impact:"critical",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","EN-9.4.1.2","ACT"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"implicit-label","explicit-label"],none:[]},{id:"label-content-name-mismatch",impact:"serious",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","EN-301-549","EN-9.2.5.3","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",impact:"serious",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",impact:"critical",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["hidden-explicit-label"]},{id:"landmark-banner-is-top-level",impact:"moderate",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",impact:"moderate",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",impact:"moderate",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",role:"banner"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",impact:"moderate",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",impact:"moderate",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",impact:"moderate",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",impact:"serious",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141","TTv5","TT13.a","EN-301-549","EN-9.1.4.1"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",impact:"serious",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag244","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.2.4.4","EN-9.4.1.2","ACT"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",impact:"serious",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",impact:"serious",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131","EN-301-549","EN-9.1.3.1"],all:[],any:["listitem"],none:[]},{id:"marquee",impact:"serious",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222","TTv5","TT2.b","EN-301-549","EN-9.2.2.2"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",impact:"minor",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",impact:"critical",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","TTv5","TT8.a","EN-301-549","EN-9.2.2.1"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",impact:"minor",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",impact:"critical",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","EN-301-549","EN-9.1.4.4","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",impact:"serious",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",impact:"moderate",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","TTv5","TT2.a","EN-301-549","EN-9.1.4.2","ACT"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",impact:"serious",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","EN-301-549","EN-9.1.1.1"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",impact:"serious",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","EN-301-549","EN-9.1.3.1","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",impact:"moderate",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",impact:"minor",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",impact:"moderate",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",impact:"serious",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",impact:"moderate",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",impact:"serious",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211","wcag213","TTv5","TT4.a","EN-301-549","EN-9.2.1.1","EN-9.2.1.3"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",impact:"critical",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","TTv5","TT5.c","EN-301-549","EN-9.4.1.2","ACT"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["hidden-explicit-label"]},{id:"server-side-image-map",impact:"minor",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f","TTv5","TT4.a","EN-301-549","EN-9.2.1.1"],all:[],any:[],none:["exists"]},{id:"skip-link",impact:"moderate",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"summary-name",impact:"serious",selector:"summary",matches:"summary-interactive-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","TTv5","TT6.a","EN-301-549","EN-9.4.1.2"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"svg-img-alt",impact:"serious",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","TTv5","TT7.a","EN-301-549","EN-9.1.1.1","ACT"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",impact:"serious",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",impact:"minor",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","EN-301-549","EN-9.1.3.1"],all:["caption-faked"],any:[],none:[]},{id:"target-size",impact:"serious",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["cat.sensory-and-visual-cues","wcag22aa","wcag258"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",impact:"critical",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",impact:"serious",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",impact:"serious",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b","EN-301-549","EN-9.1.3.1"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",impact:"serious",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","TTv5","TT11.b","EN-301-549","EN-9.3.1.2","ACT"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",impact:"critical",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a","TTv5","TT17.a","EN-301-549","EN-9.1.2.2"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate",deprecated:!0},{id:"aria-conditional-attr",evaluate:"aria-conditional-attr-evaluate",options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"braille-label-equivalent",evaluate:"braille-label-equivalent-evaluate"},{id:"braille-roledescription-equivalent",evaluate:"braille-roledescription-equivalent-evaluate"},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"],ignoredValues:["text","pronouns","gender","message","content"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",role:"banner"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",role:"contentinfo"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate"},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)}}])
