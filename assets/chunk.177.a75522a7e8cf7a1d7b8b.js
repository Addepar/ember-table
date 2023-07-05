/*! For license information please see chunk.177.a75522a7e8cf7a1d7b8b.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[177],{126:function(e,t){!function t(n){var r=n,a=n.document
function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}var i=i||{}
function u(e){this.name="SupportError",this.cause=e.cause,this.message="`".concat(e.cause,"` - feature unsupported in your environment."),e.ruleId&&(this.ruleId=e.ruleId,this.message+=" Skipping ".concat(this.ruleId," rule.")),this.stack=(new Error).stack}i.version="4.7.2","function"==typeof define&&define.amd&&define("axe-core",[],(function(){return i})),"object"===(void 0===e?"undefined":o(e))&&e.exports&&"function"==typeof t.toString&&(i.source="("+t.toString()+')(typeof window === "object" ? window : this);',e.exports=i),"function"==typeof n.getComputedStyle&&(n.axe=i),u.prototype=Object.create(Error.prototype),u.prototype.constructor=u
var s=["node"],l=["variant"],c=["matches"],d=["chromium"],p=["noImplicit"],f=["noPresentational"],h=["precision","format","inGamut"],m=["space"],D=["algorithm"],g=["method"],v=["maxDeltaE","deltaEMethod","steps","maxSteps"],b=["node"],y=["nodes"],F=["node"],w=["relatedNodes"],E=["environmentData"],C=["environmentData"],x=["node"],A=["environmentData"],k=["environmentData"],T=["environmentData"]
function N(e,t,n){return N=O()?Reflect.construct.bind():function(e,t,n){var r=[null]
r.push.apply(r,t)
var a=new(Function.bind.apply(e,r))
return n&&R(a,n.prototype),a},N.apply(null,arguments)}function B(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function _(e){var t=O()
return function(){var n,r=M(e)
if(t){var a=M(this).constructor
n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments)
return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return S(e)}(this,n)}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}function I(e,t,n){j(e,t),t.set(e,n)}function P(e,t){j(e,t),t.add(e)}function j(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function q(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,V(e,t,"get"))}function L(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return n}function z(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=n}}(e,V(e,t,"set"),n),n}function V(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance")
return t.get(e)}function H(e,t){if(null==e)return{}
var n,r,a=function(e,t){if(null==e)return{}
var n,r,a={},o=Object.keys(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n])
return a}(e,t)
if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e)
for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e){return function(e){if(Array.isArray(e))return ne(e)}(e)||$(e)||te(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function W(e,t){return K(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o,i,u=[],s=!0,l=!1
try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return
s=!1}else for(;!(s=(r=o.call(n)).done)&&(u.push(r.value),u.length!==t);s=!0);}catch(e){l=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw a}}return u}}(e,t)||te(e,t)||Y()}function Y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function K(e){if(Array.isArray(e))return e}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J(r.key),r)}}function Z(e,t,n){return t&&X(e.prototype,t),n&&X(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function J(e){var t=function(e,t){if("object"!==o(e)||null===e)return e
var n=e[Symbol.toPrimitive]
if(void 0!==n){var r=n.call(e,"string")
if("object"!==o(r))return r
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"===o(t)?t:String(t)}function ee(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=te(e))||t&&e&&"number"==typeof e.length){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}function te(e,t){if(e){if("string"==typeof e)return ne(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}function ne(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}!function(){var e,t,R,O,M=Object.create,j=Object.defineProperty,V=Object.getPrototypeOf,X=Object.prototype.hasOwnProperty,ne=Object.getOwnPropertyNames,re=Object.getOwnPropertyDescriptor,ae=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},oe=function(e,t){for(var n in t)j(e,n,{get:t[n],enumerable:!0})},ie=function(e){return function(e,t,n){if(t&&"object"===o(t)||"function"==typeof t){var r,a=ee(ne(t))
try{var i=function(){var a=r.value
X.call(e,a)||"default"===a||j(e,a,{get:function(){return t[a]},enumerable:!(n=re(t,a))||n.enumerable})}
for(a.s();!(r=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}return e}((t=j(null!=e?M(V(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0}),j(t,"__esModule",{value:!0})),e)
var t},ue=function(e,t,n){return function(e,t,n){t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==o(t)?t+"":t,n),n},se=ae((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0}),e.isIdentStart=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||"-"===e||"_"===e},e.isIdent=function(e){return e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||"-"===e||"_"===e},e.isHex=function(e){return e>="a"&&e<="f"||e>="A"&&e<="F"||e>="0"&&e<="9"},e.escapeIdentifier=function(t){for(var n=t.length,r="",a=0;a<n;){var o=t.charAt(a)
if(e.identSpecialChars[o])r+="\\"+o
else if("_"===o||"-"===o||o>="A"&&o<="Z"||o>="a"&&o<="z"||0!==a&&o>="0"&&o<="9")r+=o
else{var i=o.charCodeAt(0)
if(55296==(63488&i)){var u=t.charCodeAt(a++)
if(55296!=(64512&i)||56320!=(64512&u))throw Error("UCS-2(decode): illegal sequence")
i=((1023&i)<<10)+(1023&u)+65536}r+="\\"+i.toString(16)+" "}a++}return r},e.escapeStr=function(t){for(var n,r=t.length,a="",o=0;o<r;){var i=t.charAt(o)
'"'===i?i='\\"':"\\"===i?i="\\\\":void 0!==(n=e.strReplacementsRev[i])&&(i=n),a+=i,o++}return'"'+a+'"'},e.identSpecialChars={"!":!0,'"':!0,"#":!0,$:!0,"%":!0,"&":!0,"'":!0,"(":!0,")":!0,"*":!0,"+":!0,",":!0,".":!0,"/":!0,";":!0,"<":!0,"=":!0,">":!0,"?":!0,"@":!0,"[":!0,"\\":!0,"]":!0,"^":!0,"`":!0,"{":!0,"|":!0,"}":!0,"~":!0},e.strReplacementsRev={"\n":"\\n","\r":"\\r","\t":"\\t","\f":"\\f","\v":"\\v"},e.singleQuoteEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\","'":"'"},e.doubleQuotesEscapeChars={n:"\n",r:"\r",t:"\t",f:"\f","\\":"\\",'"':'"'}})),le=ae((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=se()
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
return t}()}})),ce=ae((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=se()
e.renderEntity=function e(n){var r=""
switch(n.type){case"ruleSet":for(var a=n.rule,o=[];a;)a.nestingOperator&&o.push(a.nestingOperator),o.push(e(a)),a=a.rule
r=o.join(" ")
break
case"selectors":r=n.selectors.map(e).join(", ")
break
case"rule":n.tagName&&(r="*"===n.tagName?"*":t.escapeIdentifier(n.tagName)),n.id&&(r+="#"+t.escapeIdentifier(n.id)),n.classNames&&(r+=n.classNames.map((function(e){return"."+t.escapeIdentifier(e)})).join("")),n.attrs&&(r+=n.attrs.map((function(e){return"operator"in e?"substitute"===e.valueType?"["+t.escapeIdentifier(e.name)+e.operator+"$"+e.value+"]":"["+t.escapeIdentifier(e.name)+e.operator+t.escapeStr(e.value)+"]":"["+t.escapeIdentifier(e.name)+"]"})).join("")),n.pseudos&&(r+=n.pseudos.map((function(n){return n.valueType?"selector"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+e(n.value)+")":"substitute"===n.valueType?":"+t.escapeIdentifier(n.name)+"($"+n.value+")":"numeric"===n.valueType?":"+t.escapeIdentifier(n.name)+"("+n.value+")":":"+t.escapeIdentifier(n.name)+"("+t.escapeIdentifier(n.value)+")":":"+t.escapeIdentifier(n.name)})).join(""))
break
default:throw Error('Unknown entity type: "'+n.type+'".')}return r}})),de=ae((function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var t=le(),n=ce(),r=function(){function e(){this.pseudos={},this.attrEqualityMods={},this.ruleNestingOperators={},this.substitutesEnabled=!1}return e.prototype.registerSelectorPseudos=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
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
e.CssSelectorParser=r})),pe=ae((function(e,t){"use strict"
t.exports=function(){}})),fe=ae((function(e,t){"use strict"
var n=pe()()
t.exports=function(e){return e!==n&&null!==e}})),he=ae((function(e,t){"use strict"
var n=fe(),r=Array.prototype.forEach,a=Object.create
t.exports=function(e){var t=a(null)
return r.call(arguments,(function(e){n(e)&&function(e,t){var n
for(n in e)t[n]=e[n]}(Object(e),t)})),t}})),me=ae((function(e,t){"use strict"
t.exports=function(){var e=Math.sign
return"function"==typeof e&&1===e(10)&&-1===e(-20)}})),De=ae((function(e,t){"use strict"
t.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}})),ge=ae((function(e,t){"use strict"
t.exports=me()()?Math.sign:De()})),ve=ae((function(e,t){"use strict"
var n=ge(),r=Math.abs,a=Math.floor
t.exports=function(e){return isNaN(e)?0:0!==(e=Number(e))&&isFinite(e)?n(e)*a(r(e)):e}})),be=ae((function(e,t){"use strict"
var n=ve(),r=Math.max
t.exports=function(e){return r(0,n(e))}})),ye=ae((function(e,t){"use strict"
var n=be()
t.exports=function(e,t,r){var a
return isNaN(e)?(a=t)>=0?r&&a?a-1:a:1:!1!==e&&n(e)}})),Fe=ae((function(e,t){"use strict"
t.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e}})),we=ae((function(e,t){"use strict"
var n=fe()
t.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined")
return e}})),Ee=ae((function(e,t){"use strict"
var n=Fe(),r=we(),a=Function.prototype.bind,o=Function.prototype.call,i=Object.keys,u=Object.prototype.propertyIsEnumerable
t.exports=function(e,t){return function(s,l){var c,d=arguments[2],p=arguments[3]
return s=Object(r(s)),n(l),c=i(s),p&&c.sort("function"==typeof p?a.call(p,s):void 0),"function"!=typeof e&&(e=c[e]),o.call(e,c,(function(e,n){return u.call(s,e)?o.call(l,d,s[e],e,s,n):t}))}}})),Ce=ae((function(e,t){"use strict"
t.exports=Ee()("forEach")})),xe=ae((function(){})),Ae=ae((function(e,t){"use strict"
t.exports=function(){var e,t=Object.assign
return"function"==typeof t&&(t(e={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}})),ke=ae((function(e,t){"use strict"
t.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}})),Te=ae((function(e,t){"use strict"
var n=fe(),r=Object.keys
t.exports=function(e){return r(n(e)?Object(e):e)}})),Ne=ae((function(e,t){"use strict"
t.exports=ke()()?Object.keys:Te()})),Be=ae((function(e,t){"use strict"
var n=Ne(),r=we(),a=Math.max
t.exports=function(e,t){var o,i,u,s=a(arguments.length,2)
for(e=Object(r(e)),u=function(n){try{e[n]=t[n]}catch(e){o||(o=e)}},i=1;i<s;++i)n(t=arguments[i]).forEach(u)
if(void 0!==o)throw o
return e}})),Re=ae((function(e,t){"use strict"
t.exports=Ae()()?Object.assign:Be()})),_e=ae((function(e,t){"use strict"
var n=fe(),r={function:!0,object:!0}
t.exports=function(e){return n(e)&&r[o(e)]||!1}})),Se=ae((function(e,t){"use strict"
var n=Re(),r=_e(),a=fe(),o=Error.captureStackTrace
t.exports=function(e){var i=new Error(e),u=arguments[1],s=arguments[2]
return a(s)||r(u)&&(s=u,u=null),a(s)&&n(i,s),a(u)&&(i.code=u),o&&o(i,t.exports),i}})),Oe=ae((function(e,t){"use strict"
var n=we(),r=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols
t.exports=function(e,t){var u,s=Object(n(t))
if(e=Object(n(e)),o(s).forEach((function(n){try{r(e,n,a(t,n))}catch(e){u=e}})),"function"==typeof i&&i(s).forEach((function(n){try{r(e,n,a(t,n))}catch(e){u=e}})),void 0!==u)throw u
return e}})),Me=ae((function(e,t){"use strict"
var n,r,a,o,i,u=be(),s=function(e,t){return t}
try{Object.defineProperty(s,"length",{configurable:!0,writable:!1,enumerable:!1,value:1})}catch(e){}1===s.length?(n={configurable:!0,writable:!1,enumerable:!1},r=Object.defineProperty,t.exports=function(e,t){return t=u(t),e.length===t?e:(n.value=t,r(e,"length",n))}):(o=Oe(),i=[],a=function(e){var t,n=0
if(i[e])return i[e]
for(t=[];e--;)t.push("a"+(++n).toString(36))
return new Function("fn","return function ("+t.join(", ")+") { return fn.apply(this, arguments); };")},t.exports=function(e,t){var n
if(t=u(t),e.length===t)return e
n=a(t)(e)
try{o(n,e)}catch(e){}return n})})),Ie=ae((function(e,t){"use strict"
t.exports=function(e){return null!=e}})),Pe=ae((function(e,t){"use strict"
var n=Ie(),r={object:!0,function:!0,undefined:!0}
t.exports=function(e){return!!n(e)&&hasOwnProperty.call(r,o(e))}})),je=ae((function(e,t){"use strict"
var n=Pe()
t.exports=function(e){if(!n(e))return!1
try{return!!e.constructor&&e.constructor.prototype===e}catch(e){return!1}}})),qe=ae((function(e,t){"use strict"
var n=je()
t.exports=function(e){if("function"!=typeof e)return!1
if(!hasOwnProperty.call(e,"length"))return!1
try{if("number"!=typeof e.length)return!1
if("function"!=typeof e.call)return!1
if("function"!=typeof e.apply)return!1}catch(e){return!1}return!n(e)}})),Le=ae((function(e,t){"use strict"
var n=qe(),r=/^\s*class[\s{/}]/,a=Function.prototype.toString
t.exports=function(e){return!!n(e)&&!r.test(a.call(e))}})),ze=ae((function(e,t){"use strict"
var n="razdwatrzy"
t.exports=function(){return"function"==typeof n.contains&&!0===n.contains("dwa")&&!1===n.contains("foo")}})),Ve=ae((function(e,t){"use strict"
var n=String.prototype.indexOf
t.exports=function(e){return n.call(this,e,arguments[1])>-1}})),He=ae((function(e,t){"use strict"
t.exports=ze()()?String.prototype.contains:Ve()})),Ue=ae((function(e,t){"use strict"
var n=Ie(),r=Le(),a=Re(),o=he(),i=He(),u=t.exports=function(e,t){var r,u,s,l,c
return arguments.length<2||"string"!=typeof e?(l=t,t=e,e=null):l=arguments[2],n(e)?(r=i.call(e,"c"),u=i.call(e,"e"),s=i.call(e,"w")):(r=s=!0,u=!1),c={value:t,configurable:r,enumerable:u,writable:s},l?a(o(l),c):c}
u.gs=function(e,t,u){var s,l,c,d
return"string"!=typeof e?(c=u,u=t,t=e,e=null):c=arguments[3],n(t)?r(t)?n(u)?r(u)||(c=u,u=void 0):u=void 0:(c=t,t=u=void 0):t=void 0,n(e)?(s=i.call(e,"c"),l=i.call(e,"e")):(s=!0,l=!1),d={get:t,set:u,configurable:s,enumerable:l},c?a(o(c),d):d}})),$e=ae((function(e,t){"use strict"
var n,r,a,i,u,s,l,c=Ue(),d=Fe(),p=Function.prototype.apply,f=Function.prototype.call,h=Object.create,m=Object.defineProperty,D=Object.defineProperties,g=Object.prototype.hasOwnProperty,v={configurable:!0,enumerable:!1,writable:!0}
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
return d(t),g.call(this,"__ee__")?n=this.__ee__:(n=v.value=h(null),m(this,"__ee__",v),v.value=null),n[e]?"object"===o(n[e])?n[e].push(t):n[e]=[n[e],t]:n[e]=t,this},once:r,off:a,emit:i},s={on:c(n),once:c(r),off:c(a),emit:c(i)},l=D({},s),t.exports=e=function(e){return null==e?h(l):D(Object(e),s)},e.methods=u})),Ge=ae((function(e,t){"use strict"
t.exports=function(){var e,t,n=Array.from
return"function"==typeof n&&(t=n(e=["raz","dwa"]),Boolean(t&&t!==e&&"dwa"===t[1]))}})),We=ae((function(e,t){"use strict"
t.exports=function(){return"object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&!!globalThis&&globalThis.Array===Array}})),Ye=ae((function(e,t){var r=function(){if("object"===("undefined"==typeof self?"undefined":o(self))&&self)return self
if("object"===(void 0===n?"undefined":o(n))&&n)return n
throw new Error("Unable to resolve global `this`")}
t.exports=function(){if(this)return this
try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return r()}try{return __global__||r()}finally{delete Object.prototype.__global__}}()})),Ke=ae((function(e,t){"use strict"
t.exports=We()()?globalThis:Ye()})),Qe=ae((function(e,t){"use strict"
var n=Ke(),r={object:!0,symbol:!0}
t.exports=function(){var e,t=n.Symbol
if("function"!=typeof t)return!1
e=t("test symbol")
try{String(e)}catch(e){return!1}return!!r[o(t.iterator)]&&!!r[o(t.toPrimitive)]&&!!r[o(t.toStringTag)]}})),Xe=ae((function(e,t){"use strict"
t.exports=function(e){return!!e&&("symbol"===o(e)||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}})),Ze=ae((function(e,t){"use strict"
var n=Xe()
t.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol")
return e}})),Je=ae((function(e,t){"use strict"
var n=Ue(),r=Object.create,a=Object.defineProperty,o=Object.prototype,i=r(null)
t.exports=function(e){for(var t,r,u=0;i[e+(u||"")];)++u
return i[e+=u||""]=!0,a(o,t="@@"+e,n.gs(null,(function(e){r||(r=!0,a(this,t,n(e)),r=!1)}))),t}})),et=ae((function(e,t){"use strict"
var n=Ue(),r=Ke().Symbol
t.exports=function(e){return Object.defineProperties(e,{hasInstance:n("",r&&r.hasInstance||e("hasInstance")),isConcatSpreadable:n("",r&&r.isConcatSpreadable||e("isConcatSpreadable")),iterator:n("",r&&r.iterator||e("iterator")),match:n("",r&&r.match||e("match")),replace:n("",r&&r.replace||e("replace")),search:n("",r&&r.search||e("search")),species:n("",r&&r.species||e("species")),split:n("",r&&r.split||e("split")),toPrimitive:n("",r&&r.toPrimitive||e("toPrimitive")),toStringTag:n("",r&&r.toStringTag||e("toStringTag")),unscopables:n("",r&&r.unscopables||e("unscopables"))})}})),tt=ae((function(e,t){"use strict"
var n=Ue(),r=Ze(),a=Object.create(null)
t.exports=function(e){return Object.defineProperties(e,{for:n((function(t){return a[t]?a[t]:a[t]=e(String(t))})),keyFor:n((function(e){var t
for(t in r(e),a)if(a[t]===e)return t}))})}})),nt=ae((function(e,t){"use strict"
var n,r,a,i=Ue(),u=Ze(),s=Ke().Symbol,l=Je(),c=et(),d=tt(),p=Object.create,f=Object.defineProperties,h=Object.defineProperty
if("function"==typeof s)try{String(s()),a=!0}catch(e){}else s=null
r=function(e){if(this instanceof r)throw new TypeError("Symbol is not a constructor")
return n(e)},t.exports=n=function e(t){var n
if(this instanceof e)throw new TypeError("Symbol is not a constructor")
return a?s(t):(n=p(r.prototype),t=void 0===t?"":String(t),f(n,{__description__:i("",t),__name__:i("",l(t))}))},c(n),d(n),f(r.prototype,{constructor:i(n),toString:i("",(function(){return this.__name__}))}),f(n.prototype,{toString:i((function(){return"Symbol ("+u(this).__description__+")"})),valueOf:i((function(){return u(this)}))}),h(n.prototype,n.toPrimitive,i("",(function(){var e=u(this)
return"symbol"===o(e)?e:e.toString()}))),h(n.prototype,n.toStringTag,i("c","Symbol")),h(r.prototype,n.toStringTag,i("c",n.prototype[n.toStringTag])),h(r.prototype,n.toPrimitive,i("c",n.prototype[n.toPrimitive]))})),rt=ae((function(e,t){"use strict"
t.exports=Qe()()?Ke().Symbol:nt()})),at=ae((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call(function(){return arguments}())
t.exports=function(e){return n.call(e)===r}})),ot=ae((function(e,t){"use strict"
var n=Object.prototype.toString,r=RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/)
t.exports=function(e){return"function"==typeof e&&r(n.call(e))}})),it=ae((function(e,t){"use strict"
var n=Object.prototype.toString,r=n.call("")
t.exports=function(e){return"string"==typeof e||e&&"object"===o(e)&&(e instanceof String||n.call(e)===r)||!1}})),ut=ae((function(e,t){"use strict"
var n=rt().iterator,r=at(),a=ot(),o=be(),i=Fe(),u=we(),s=fe(),l=it(),c=Array.isArray,d=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},f=Object.defineProperty
t.exports=function(e){var t,h,m,D,g,v,b,y,F,w,E=arguments[1],C=arguments[2]
if(e=Object(u(e)),s(E)&&i(E),this&&this!==Array&&a(this))t=this
else{if(!E){if(r(e))return 1!==(g=e.length)?Array.apply(null,e):((D=new Array(1))[0]=e[0],D)
if(c(e)){for(D=new Array(g=e.length),h=0;h<g;++h)D[h]=e[h]
return D}}D=[]}if(!c(e))if(void 0!==(F=e[n])){for(b=i(F).call(e),t&&(D=new t),y=b.next(),h=0;!y.done;)w=E?d.call(E,C,y.value,h):y.value,t?(p.value=w,f(D,h,p)):D[h]=w,y=b.next(),++h
g=h}else if(l(e)){for(g=e.length,t&&(D=new t),h=0,m=0;h<g;++h)w=e[h],h+1<g&&(v=w.charCodeAt(0))>=55296&&v<=56319&&(w+=e[++h]),w=E?d.call(E,C,w,m):w,t?(p.value=w,f(D,m,p)):D[m]=w,++m
g=m}if(void 0===g)for(g=o(e.length),t&&(D=new t(g)),h=0;h<g;++h)w=E?d.call(E,C,e[h],h):e[h],t?(p.value=w,f(D,h,p)):D[h]=w
return t&&(p.value=null,D.length=g),D}})),st=ae((function(e,t){"use strict"
t.exports=Ge()()?Array.from:ut()})),lt=ae((function(e,t){"use strict"
var n=st(),r=Array.isArray
t.exports=function(e){return r(e)?e:n(e)}})),ct=ae((function(e,t){"use strict"
var n,r=lt(),a=fe(),o=Fe(),i=Array.prototype.slice
n=function(e){return this.map((function(t,n){return t?t(e[n]):e[n]})).concat(i.call(e,this.length))},t.exports=function(e){return(e=r(e)).forEach((function(e){a(e)&&o(e)})),n.bind(e)}})),dt=ae((function(e,t){"use strict"
var n=Fe()
t.exports=function(e){var t
return"function"==typeof e?{set:e,get:e}:(t={get:n(e.get)},void 0!==e.set?(t.set=n(e.set),e.delete&&(t.delete=n(e.delete)),e.clear&&(t.clear=n(e.clear)),t):(t.set=t.get,t))}})),pt=ae((function(e,t){"use strict"
var n=Se(),r=Me(),a=Ue(),o=$e().methods,i=ct(),u=dt(),s=Function.prototype.apply,l=Function.prototype.call,c=Object.create,d=Object.defineProperties,p=o.on,f=o.emit
t.exports=function(e,t,o){var h,m,D,g,v,b,y,F,w,E,C,x,A,k,T,N=c(null)
return m=!1!==t?t:isNaN(e.length)?1:e.length,o.normalizer&&(E=u(o.normalizer),D=E.get,g=E.set,v=E.delete,b=E.clear),null!=o.resolvers&&(T=i(o.resolvers)),k=D?r((function(t){var r,a,o=arguments
if(T&&(o=T(o)),null!==(r=D(o))&&hasOwnProperty.call(N,r))return C&&h.emit("get",r,o,this),N[r]
if(a=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),null===r){if(null!==(r=D(o)))throw n("Circular invocation","CIRCULAR_INVOCATION")
r=g(o)}else if(hasOwnProperty.call(N,r))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[r]=a,x&&h.emit("set",r,null,a),a}),m):0===t?function(){var t
if(hasOwnProperty.call(N,"data"))return C&&h.emit("get","data",arguments,this),N.data
if(t=arguments.length?s.call(e,this,arguments):l.call(e,this),hasOwnProperty.call(N,"data"))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N.data=t,x&&h.emit("set","data",null,t),t}:function(t){var r,a,o=arguments
if(T&&(o=T(arguments)),a=String(o[0]),hasOwnProperty.call(N,a))return C&&h.emit("get",a,o,this),N[a]
if(r=1===o.length?l.call(e,this,o[0]):s.call(e,this,o),hasOwnProperty.call(N,a))throw n("Circular invocation","CIRCULAR_INVOCATION")
return N[a]=r,x&&h.emit("set",a,null,r),r},h={original:e,memoized:k,profileName:o.profileName,get:function(e){return T&&(e=T(e)),D?D(e):String(e[0])},has:function(e){return hasOwnProperty.call(N,e)},delete:function(e){var t
hasOwnProperty.call(N,e)&&(v&&v(e),t=N[e],delete N[e],A&&h.emit("delete",e,t))},clear:function(){var e=N
b&&b(),N=c(null),h.emit("clear",e)},on:function(e,t){return"get"===e?C=!0:"set"===e?x=!0:"delete"===e&&(A=!0),p.call(this,e,t)},emit:f,updateEnv:function(){e=h.original}},y=D?r((function(e){var t,n=arguments
T&&(n=T(n)),null!==(t=D(n))&&h.delete(t)}),m):0===t?function(){return h.delete("data")}:function(e){return T&&(e=T(arguments)[0]),h.delete(e)},F=r((function(){var e,n=arguments
return 0===t?N.data:(T&&(n=T(n)),e=D?D(n):String(n[0]),N[e])})),w=r((function(){var e,n=arguments
return 0===t?h.has("data"):(T&&(n=T(n)),null!==(e=D?D(n):String(n[0]))&&h.has(e))})),d(k,{__memoized__:a(!0),delete:a(y),clear:a(h.clear),_get:a(F),_has:a(w)}),h}})),ft=ae((function(e,t){"use strict"
var n=Fe(),r=Ce(),a=xe(),o=pt(),i=ye()
t.exports=function e(t){var u,s,l
if(n(t),(u=Object(arguments[1])).async&&u.promise)throw new Error("Options 'async' and 'promise' cannot be used together")
return hasOwnProperty.call(t,"__memoized__")&&!u.force?t:(s=i(u.length,t.length,u.async&&a.async),l=o(t,s,u),r(a,(function(e,t){u[t]&&e(u[t],l,u)})),e.__profiler__&&e.__profiler__(l),l.updateEnv(),l.memoized)}})),ht=ae((function(e,t){"use strict"
t.exports=function(e){var t,n,r=e.length
if(!r)return""
for(t=String(e[n=0]);--r;)t+=""+e[++n]
return t}})),mt=ae((function(e,t){"use strict"
t.exports=function(e){return e?function(t){for(var n=String(t[0]),r=0,a=e;--a;)n+=""+t[++r]
return n}:function(){return""}}})),Dt=ae((function(e,t){"use strict"
t.exports=function(){var e=Number.isNaN
return"function"==typeof e&&!e({})&&e(NaN)&&!e(34)}})),gt=ae((function(e,t){"use strict"
t.exports=function(e){return e!=e}})),vt=ae((function(e,t){"use strict"
t.exports=Dt()()?Number.isNaN:gt()})),bt=ae((function(e,t){"use strict"
var n=vt(),r=be(),a=we(),o=Array.prototype.indexOf,i=Object.prototype.hasOwnProperty,u=Math.abs,s=Math.floor
t.exports=function(e){var t,l,c,d
if(!n(e))return o.apply(this,arguments)
for(l=r(a(this).length),c=arguments[1],t=c=isNaN(c)?0:c>=0?s(c):r(this.length)-s(u(c));t<l;++t)if(i.call(this,t)&&(d=this[t],n(d)))return t
return-1}})),yt=ae((function(e,t){"use strict"
var n=bt(),r=Object.create
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
for(e=i[1][r],i[0].splice(r,1),i[1].splice(r,1);!i[0].length&&l.length;)r=l.pop(),(i=l.pop())[0].splice(r,1),i[1].splice(r,1)}delete a[e]},clear:function(){t=[],a=r(null)}}}})),Ft=ae((function(e,t){"use strict"
var n=bt()
t.exports=function(){var e=0,t=[],r=[]
return{get:function(e){var a=n.call(t,e[0])
return-1===a?null:r[a]},set:function(n){return t.push(n[0]),r.push(++e),e},delete:function(e){var a=n.call(r,e);-1!==a&&(t.splice(a,1),r.splice(a,1))},clear:function(){t=[],r=[]}}}})),wt=ae((function(e,t){"use strict"
var n=bt(),r=Object.create
t.exports=function(e){var t=0,a=[[],[]],o=r(null)
return{get:function(t){for(var r,o=0,i=a;o<e-1;){if(-1===(r=n.call(i[0],t[o])))return null
i=i[1][r],++o}return-1===(r=n.call(i[0],t[o]))?null:i[1][r]||null},set:function(r){for(var i,u=0,s=a;u<e-1;)-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1,s[1].push([[],[]])),s=s[1][i],++u
return-1===(i=n.call(s[0],r[u]))&&(i=s[0].push(r[u])-1),s[1][i]=++t,o[t]=r,t},delete:function(t){for(var r,i=0,u=a,s=[],l=o[t];i<e-1;){if(-1===(r=n.call(u[0],l[i])))return
s.push(u,r),u=u[1][r],++i}if(-1!==(r=n.call(u[0],l[i]))){for(t=u[1][r],u[0].splice(r,1),u[1].splice(r,1);!u[0].length&&s.length;)r=s.pop(),(u=s.pop())[0].splice(r,1),u[1].splice(r,1)
delete o[t]}},clear:function(){a=[[],[]],o=r(null)}}}})),Et=ae((function(e,t){"use strict"
var n=Fe(),r=Ce(),a=Function.prototype.call
t.exports=function(e,t){var o={},i=arguments[2]
return n(t),r(e,(function(e,n,r,u){o[n]=a.call(t,i,e,n,r,u)})),o}})),Ct=ae((function(e,t){"use strict"
var n=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function")
return e},r=function(e){var t,r,o=a.createTextNode(""),i=0
return new e((function(){var e
if(t)r&&(t=r.concat(t))
else{if(!r)return
t=r}if(r=t,t=null,"function"==typeof r)return e=r,r=null,void e()
for(o.data=i=++i%2;r;)e=r.shift(),r.length||(r=null),e()})).observe(o,{characterData:!0}),function(e){n(e),t?"function"==typeof t?t=[t,e]:t.push(e):(t=e,o.data=i=++i%2)}}
t.exports=function(){if("object"===("undefined"==typeof process?"undefined":o(process))&&process&&"function"==typeof process.nextTick)return process.nextTick
if("function"==typeof queueMicrotask)return function(e){queueMicrotask(n(e))}
if("object"===(void 0===a?"undefined":o(a))&&a){if("function"==typeof MutationObserver)return r(MutationObserver)
if("function"==typeof WebKitMutationObserver)return r(WebKitMutationObserver)}return"function"==typeof setImmediate?function(e){setImmediate(n(e))}:"function"==typeof setTimeout||"object"===("undefined"==typeof setTimeout?"undefined":o(setTimeout))?function(e){setTimeout(n(e),0)}:null}()})),xt=ae((function(){"use strict"
var e=st(),t=Et(),n=Oe(),r=Me(),a=Ct(),o=Array.prototype.slice,i=Function.prototype.apply,u=Object.create
xe().async=function(s,l){var c,d,p,f=u(null),h=u(null),m=l.memoized,D=l.original
l.memoized=r((function(e){var t=arguments,n=t[t.length-1]
return"function"==typeof n&&(c=n,t=o.call(t,0,-1)),m.apply(d=this,p=t)}),m)
try{n(l.memoized,m)}catch(e){}l.on("get",(function(e){var t,n,r
if(c){if(f[e])return"function"==typeof f[e]?f[e]=[f[e],c]:f[e].push(c),void(c=null)
t=c,n=d,r=p,c=d=p=null,a((function(){var a
hasOwnProperty.call(h,e)?(a=h[e],l.emit("getasync",e,r,n),i.call(t,a.context,a.args)):(c=t,d=n,p=r,m.apply(n,r))}))}})),l.original=function(){var t,n,r,o
return c?(t=e(arguments),n=function t(n){var r,u,s=t.id
if(null!=s){if(delete t.id,r=f[s],delete f[s],r)return u=e(arguments),l.has(s)&&(n?l.delete(s):(h[s]={context:this,args:u},l.emit("setasync",s,"function"==typeof r?1:r.length))),"function"==typeof r?o=i.call(r,this,u):r.forEach((function(e){o=i.call(e,this,u)}),this),o}else a(i.bind(t,this,arguments))},r=c,c=d=p=null,t.push(n),o=i.call(D,this,t),n.cb=r,c=n,o):i.call(D,this,arguments)},l.on("set",(function(e){c?(f[e]?"function"==typeof f[e]?f[e]=[f[e],c.cb]:f[e].push(c.cb):f[e]=c.cb,delete c.cb,c.id=e,c=null):l.delete(e)})),l.on("delete",(function(e){var t
hasOwnProperty.call(f,e)||h[e]&&(t=h[e],delete h[e],l.emit("deleteasync",e,o.call(t.args,1)))})),l.on("clear",(function(){var e=h
h=u(null),l.emit("clearasync",t(e,(function(e){return o.call(e.args,1)})))}))}})),At=ae((function(e,t){"use strict"
var n=Array.prototype.forEach,r=Object.create
t.exports=function(e){var t=r(null)
return n.call(arguments,(function(e){t[e]=!0})),t}})),kt=ae((function(e,t){"use strict"
t.exports=function(e){return"function"==typeof e}})),Tt=ae((function(e,t){"use strict"
var n=kt()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){throw new TypeError("Passed argument cannot be stringifed")}}})),Nt=ae((function(e,t){"use strict"
var n=we(),r=Tt()
t.exports=function(e){return r(n(e))}})),Bt=ae((function(e,t){"use strict"
var n=kt()
t.exports=function(e){try{return e&&n(e.toString)?e.toString():String(e)}catch(e){return"<Non-coercible to string value>"}}})),Rt=ae((function(e,t){"use strict"
var n=Bt(),r=/[\n\r\u2028\u2029]/g
t.exports=function(e){var t=n(e)
return t.length>100&&(t=t.slice(0,99)+"…"),t.replace(r,(function(e){return JSON.stringify(e).slice(1,-1)}))}})),_t=ae((function(e,t){function n(e){return!!e&&("object"===o(e)||"function"==typeof e)&&"function"==typeof e.then}t.exports=n,t.exports.default=n})),St=ae((function(){"use strict"
var e=Et(),t=At(),n=Nt(),r=Rt(),a=_t(),o=Ct(),i=Object.create,u=t("then","then:finally","done","done:finally")
xe().promise=function(t,s){var l=i(null),c=i(null),d=i(null)
if(!0===t)t=null
else if(t=n(t),!u[t])throw new TypeError("'"+r(t)+"' is not valid promise mode")
s.on("set",(function(e,n,r){var i=!1
if(!a(r))return c[e]=r,void s.emit("setasync",e,1)
l[e]=1,d[e]=r
var u=function(t){var n=l[e]
if(i)throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.")
n&&(delete l[e],c[e]=t,s.emit("setasync",e,n))},p=function(){i=!0,l[e]&&(delete l[e],delete d[e],s.delete(e))},f=t
if(f||(f="then"),"then"===f){var h=function(){o(p)}
"function"==typeof(r=r.then((function(e){o(u.bind(this,e))}),h)).finally&&r.finally(h)}else if("done"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode")
r.done(u,p)}else if("done:finally"===f){if("function"!=typeof r.done)throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode")
if("function"!=typeof r.finally)throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode")
r.done(u),r.finally(p)}})),s.on("get",(function(e,t,n){var r
if(l[e])++l[e]
else{r=d[e]
var i=function(){s.emit("getasync",e,t,n)}
a(r)?"function"==typeof r.done?r.done(i):r.then((function(){o(i)})):i()}})),s.on("delete",(function(e){if(delete d[e],l[e])delete l[e]
else if(hasOwnProperty.call(c,e)){var t=c[e]
delete c[e],s.emit("deleteasync",e,[t])}})),s.on("clear",(function(){var t=c
c=i(null),l=i(null),d=i(null),s.emit("clearasync",e(t,(function(e){return[e]})))}))}})),Ot=ae((function(){"use strict"
var e=Fe(),t=Ce(),n=xe(),r=Function.prototype.apply
n.dispose=function(a,o,i){var u
if(e(a),i.async&&n.async||i.promise&&n.promise)return o.on("deleteasync",u=function(e,t){r.call(a,null,t)}),void o.on("clearasync",(function(e){t(e,(function(e,t){u(t,e)}))}))
o.on("delete",u=function(e,t){a(t)}),o.on("clear",(function(e){t(e,(function(e,t){u(t,e)}))}))}})),Mt=ae((function(e,t){"use strict"
t.exports=2147483647})),It=ae((function(e,t){"use strict"
var n=be(),r=Mt()
t.exports=function(e){if((e=n(e))>r)throw new TypeError(e+" exceeds maximum possible timeout")
return e}})),Pt=ae((function(){"use strict"
var e=st(),t=Ce(),n=Ct(),r=_t(),a=It(),o=xe(),i=Function.prototype,u=Math.max,s=Math.min,l=Object.create
o.maxAge=function(c,d,p){var f,h,m,D;(c=a(c))&&(f=l(null),h=p.async&&o.async||p.promise&&o.promise?"async":"",d.on("set"+h,(function(e){f[e]=setTimeout((function(){d.delete(e)}),c),"function"==typeof f[e].unref&&f[e].unref(),D&&(D[e]&&"nextTick"!==D[e]&&clearTimeout(D[e]),D[e]=setTimeout((function(){delete D[e]}),m),"function"==typeof D[e].unref&&D[e].unref())})),d.on("delete"+h,(function(e){clearTimeout(f[e]),delete f[e],D&&("nextTick"!==D[e]&&clearTimeout(D[e]),delete D[e])})),p.preFetch&&(m=!0===p.preFetch||isNaN(p.preFetch)?.333:u(s(Number(p.preFetch),1),0))&&(D={},m=(1-m)*c,d.on("get"+h,(function(t,a,o){D[t]||(D[t]="nextTick",n((function(){var n
"nextTick"===D[t]&&(delete D[t],d.delete(t),p.async&&(a=e(a)).push(i),n=d.memoized.apply(o,a),p.promise&&r(n)&&("function"==typeof n.done?n.done(i,i):n.then(i,i)))})))}))),d.on("clear"+h,(function(){t(f,(function(e){clearTimeout(e)})),f={},D&&(t(D,(function(e){"nextTick"!==e&&clearTimeout(e)})),D={})})))}})),jt=ae((function(e,t){"use strict"
var n=be(),r=Object.create,a=Object.prototype.hasOwnProperty
t.exports=function(e){var t,o=0,i=1,u=r(null),s=r(null),l=0
return e=n(e),{hit:function(n){var r=s[n],c=++l
if(u[c]=n,s[n]=c,!r){if(++o<=e)return
return n=u[i],t(n),n}if(delete u[r],i===r)for(;!a.call(u,++i););},delete:t=function(e){var t=s[e]
if(t&&(delete u[t],delete s[e],--o,i===t)){if(!o)return l=0,void(i=1)
for(;!a.call(u,++i););}},clear:function(){o=0,i=1,u=r(null),s=r(null),l=0}}}})),qt=ae((function(){"use strict"
var e=be(),t=jt(),n=xe()
n.max=function(r,a,o){var i,u,s;(r=e(r))&&(u=t(r),i=o.async&&n.async||o.promise&&n.promise?"async":"",a.on("set"+i,s=function(e){void 0!==(e=u.hit(e))&&a.delete(e)}),a.on("get"+i,s),a.on("delete"+i,u.delete),a.on("clear"+i,u.clear))}})),Lt=ae((function(){"use strict"
var e=Ue(),t=xe(),n=Object.create,r=Object.defineProperties
t.refCounter=function(a,o,i){var u,s
u=n(null),s=i.async&&t.async||i.promise&&t.promise?"async":"",o.on("set"+s,(function(e,t){u[e]=t||1})),o.on("get"+s,(function(e){++u[e]})),o.on("delete"+s,(function(e){delete u[e]})),o.on("clear"+s,(function(){u={}})),r(o.memoized,{deleteRef:e((function(){var e=o.get(arguments)
return null===e?null:u[e]?!--u[e]&&(o.delete(e),!0):null})),getRefCount:e((function(){var e=o.get(arguments)
return null===e?0:u[e]?u[e]:0}))})}})),zt=ae((function(e,t){"use strict"
var n=he(),r=ye(),a=ft()
t.exports=function(e){var t,o=n(arguments[1])
return o.normalizer||0!==(t=o.length=r(o.length,e.length,o.async))&&(o.primitive?!1===t?o.normalizer=ht():t>1&&(o.normalizer=mt()(t)):o.normalizer=!1===t?yt()():1===t?Ft()():wt()(t)),o.async&&xt(),o.promise&&St(),o.dispose&&Ot(),o.maxAge&&Pt(),o.max&&qt(),o.refCounter&&Lt(),a(e,o)}})),Vt=ae((function(e,t){!function(){"use strict"
var e={name:"doT",version:"1.1.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1,doNotSkipEncoded:!1},template:void 0,compile:void 0,log:!0}
!function(){if("object"!==("undefined"==typeof globalThis?"undefined":o(globalThis)))try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch(e){n.globalThis=function(){if("undefined"!=typeof self)return self
if(void 0!==n)return n
if(void 0!==r)return r
if(void 0!==this)return this
throw new Error("Unable to locate global `this`")}()}}(),e.encodeHTMLSource=function(e){var t={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},n=e?/[&<>"'\/]/g:/&(?!#?\w+;)|<|>|"|'|\//g
return function(e){return e?e.toString().replace(n,(function(e){return t[e]||e})):""}},void 0!==t&&t.exports?t.exports=e:"function"==typeof define&&define.amd?define((function(){return e})):globalThis.doT=e
var a={append:{start:"'+(",end:")+'",startencode:"'+encodeHTML("},split:{start:"';out+=(",end:");out+='",startencode:"';out+=encodeHTML("}},i=/$^/
function u(e,t,n){return("string"==typeof t?t:t.toString()).replace(e.define||i,(function(t,r,a,o){return 0===r.indexOf("def.")&&(r=r.substring(4)),r in n||(":"===a?(e.defineParams&&o.replace(e.defineParams,(function(e,t,a){n[r]={arg:t,text:a}})),r in n||(n[r]=o)):new Function("def","def['"+r+"']="+o)(n)),""})).replace(e.use||i,(function(t,r){e.useParams&&(r=r.replace(e.useParams,(function(e,t,r,a){if(n[r]&&n[r].arg&&a){var o=(r+":"+a).replace(/'|\\/g,"_")
return n.__exp=n.__exp||{},n.__exp[o]=n[r].text.replace(new RegExp("(^|[^\\w$])"+n[r].arg+"([^\\w$])","g"),"$1"+a+"$2"),t+"def.__exp['"+o+"']"}})))
var a=new Function("def","return "+r)(n)
return a?u(e,a,n):a}))}function s(e){return e.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}e.template=function(t,n,r){var o,l,c=(n=n||e.templateSettings).append?a.append:a.split,d=0,p=n.use||n.define?u(n,t,r||{}):t
p=("var out='"+(n.strip?p.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):p).replace(/'|\\/g,"\\$&").replace(n.interpolate||i,(function(e,t){return c.start+s(t)+c.end})).replace(n.encode||i,(function(e,t){return o=!0,c.startencode+s(t)+c.end})).replace(n.conditional||i,(function(e,t,n){return t?n?"';}else if("+s(n)+"){out+='":"';}else{out+='":n?"';if("+s(n)+"){out+='":"';}out+='"})).replace(n.iterate||i,(function(e,t,n,r){return t?(d+=1,l=r||"i"+d,t=s(t),"';var arr"+d+"="+t+";if(arr"+d+"){var "+n+","+l+"=-1,l"+d+"=arr"+d+".length-1;while("+l+"<l"+d+"){"+n+"=arr"+d+"["+l+"+=1];out+='"):"';} } out+='"})).replace(n.evaluate||i,(function(e,t){return"';"+s(t)+"out+='"}))+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,""),o&&(n.selfcontained||!globalThis||globalThis._encodeHTML||(globalThis._encodeHTML=e.encodeHTMLSource(n.doNotSkipEncoded)),p="var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : ("+e.encodeHTMLSource.toString()+"("+(n.doNotSkipEncoded||"")+"));"+p)
try{return new Function(n.varname,p)}catch(e){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+p),e}},e.compile=function(t,n){return e.template(t,null,n)}}()})),Ht=ae((function(e,t){var i,u
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
l((function(){return P(a,r,o,n._result)}))}else M(n,r,e,t)
return r}function C(e){if(e&&"object"===o(e)&&e.constructor===this)return e
var t=new this(A)
return R(t,e),t}f?w=function(){return process.nextTick(g)}:p?(b=0,y=new p(g),F=a.createTextNode(""),y.observe(F,{characterData:!0}),w=function(){F.data=b=++b%2}):h?((v=new MessageChannel).port1.onmessage=g,w=function(){return v.port2.postMessage(0)}):w=void 0===c?function(){try{var e=Function("return this")().require("vertx")
return void 0!==(u=e.runOnLoop||e.runOnContext)?function(){u(g)}:m()}catch(e){return m()}}():m()
var x=Math.random().toString(36).substring(2)
function A(){}var k=void 0,T=1,N=2
function B(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===C?function(e,t){t._state===T?S(e,t._result):t._state===N?O(e,t._result):M(t,void 0,(function(t){return R(e,t)}),(function(t){return O(e,t)}))}(t,n):void 0===r?S(t,n):e(r)?function(e,t,n){l((function(e){var r=!1,a=function(n,a,o,i){try{n.call(a,(function(n){r||(r=!0,t!==n?R(e,n):S(e,n))}),(function(t){r||(r=!0,O(e,t))}))}catch(e){return e}}(n,t,0,0,e._label)
!r&&a&&(r=!0,O(e,a))}),e)}(t,n,r):S(t,n)}function R(e,t){if(e===t)O(e,new TypeError("You cannot resolve a promise with itself"))
else if(a=o(r=t),null===r||"object"!==a&&"function"!==a)S(e,t)
else{var n=void 0
try{n=t.then}catch(t){return void O(e,t)}B(e,t,n)}var r,a}function _(e){e._onerror&&e._onerror(e._result),I(e)}function S(e,t){e._state===k&&(e._result=t,e._state=T,0!==e._subscribers.length&&l(I,e))}function O(e,t){e._state===k&&(e._state=N,e._result=t,l(_,e))}function M(e,t,n,r){var a=e._subscribers,o=a.length
e._onerror=null,a[o]=t,a[o+T]=n,a[o+N]=r,0===o&&e._state&&l(I,e)}function I(e){var t=e._subscribers,n=e._state
if(0!==t.length){for(var r=void 0,a=void 0,o=e._result,i=0;i<t.length;i+=3)r=t[i],a=t[i+n],r?P(n,r,a,o):a(o)
e._subscribers.length=0}}function P(t,n,r,a){var o=e(r),i=void 0,u=void 0,s=!0
if(o){try{i=r(a)}catch(e){s=!1,u=e}if(n===i)return void O(n,new TypeError("A promises callback cannot return that same promise."))}else i=a
n._state!==k||(o&&s?R(n,i):!1===s?O(n,u):t===T?S(n,i):t===N&&O(n,i))}var j=0
function q(e){e[x]=j++,e._state=void 0,e._result=void 0,e._subscribers=[]}var L=function(){function e(e,n){this._instanceConstructor=e,this.promise=new e(A),this.promise[x]||q(this.promise),t(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&S(this.promise,this._result))):O(this.promise,new Error("Array Methods must be provided an Array"))}return e.prototype._enumerate=function(e){for(var t=0;this._state===k&&t<e.length;t++)this._eachEntry(e[t],t)},e.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,r=n.resolve
if(r===C){var a=void 0,o=void 0,i=!1
try{a=e.then}catch(e){i=!0,o=e}if(a===E&&e._state!==k)this._settledAt(e._state,t,e._result)
else if("function"!=typeof a)this._remaining--,this._result[t]=e
else if(n===z){var u=new n(A)
i?O(u,o):B(u,e,a),this._willSettleAt(u,t)}else this._willSettleAt(new n((function(t){return t(e)})),t)}else this._willSettleAt(r(e),t)},e.prototype._settledAt=function(e,t,n){var r=this.promise
r._state===k&&(this._remaining--,e===N?O(r,n):this._result[t]=n),0===this._remaining&&S(r,this._result)},e.prototype._willSettleAt=function(e,t){var n=this
M(e,void 0,(function(e){return n._settledAt(T,t,e)}),(function(e){return n._settledAt(N,t,e)}))},e}(),z=function(){function t(e){this[x]=j++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(e,t){try{t((function(t){R(e,t)}),(function(t){O(e,t)}))}catch(t){O(e,t)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.finally=function(t){var n=this,r=n.constructor
return e(t)?n.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))})):n.then(t,t)},t}()
return z.prototype.then=E,z.all=function(e){return new L(this,e).promise},z.race=function(e){var n=this
return t(e)?new n((function(t,r){for(var a=e.length,o=0;o<a;o++)n.resolve(e[o]).then(t,r)})):new n((function(e,t){return t(new TypeError("You must pass an array to race."))}))},z.resolve=C,z.reject=function(e){var t=new this(A)
return O(t,e),t},z._setScheduler=function(e){s=e},z._setAsap=function(e){l=e},z._asap=l,z.polyfill=function(){var e=void 0
if(void 0!==r)e=r
else if("undefined"!=typeof self)e=self
else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise
if(t){var n=null
try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=z},z.Promise=z,z},"object"===o(e)&&void 0!==t?t.exports=u():"function"==typeof define&&define.amd?define(u):i.ES6Promise=u()})),Ut=ae((function(e){var t,n,r=(t=Object.prototype.toString,n=Object.prototype.hasOwnProperty,{Class:function(e){return t.call(e).replace(/^\[object *|\]$/g,"")},HasProperty:function(e,t){return t in e},HasOwnProperty:function(e,t){return n.call(e,t)},IsCallable:function(e){return"function"==typeof e},ToInt32:function(e){return e>>0},ToUint32:function(e){return e>>>0}}),a=Math.LN2,i=Math.abs,u=Math.floor,s=Math.log,l=Math.min,c=Math.pow,d=Math.round
function p(e,t,n){return e<t?t:e>n?n:e}var f,h=Object.getOwnPropertyNames||function(e){if(e!==Object(e))throw new TypeError("Object.getOwnPropertyNames called on non-object")
var t,n=[]
for(t in e)r.HasOwnProperty(e,t)&&n.push(t)
return n}
function m(e){if(h&&f){var t,n=h(e)
for(t=0;t<n.length;t+=1)f(e,n[t],{value:e[n[t]],writable:!1,enumerable:!1,configurable:!1})}}function D(e,t){var n=32-t
return e<<n>>n}function g(e,t){var n=32-t
return e<<n>>>n}function v(e){return[255&e]}function b(e){return D(e[0],8)}function y(e){return[255&e]}function F(e){return g(e[0],8)}function w(e){return[(e=d(Number(e)))<0?0:e>255?255:255&e]}function E(e){return[e>>8&255,255&e]}function C(e){return D(e[0]<<8|e[1],16)}function x(e){return[e>>8&255,255&e]}function A(e){return g(e[0]<<8|e[1],16)}function k(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function T(e){return D(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function N(e){return[e>>24&255,e>>16&255,e>>8&255,255&e]}function B(e){return g(e[0]<<24|e[1]<<16|e[2]<<8|e[3],32)}function R(e,t,n){var r,o,d,p,f,h,m,D=(1<<t-1)-1
function g(e){var t=u(e),n=e-t
return n<.5?t:n>.5||t%2?t+1:t}for(e!=e?(o=(1<<t)-1,d=c(2,n-1),r=0):e===1/0||e===-1/0?(o=(1<<t)-1,d=0,r=e<0?1:0):0===e?(o=0,d=0,r=1/e==-1/0?1:0):(r=e<0,(e=i(e))>=c(2,1-D)?(o=l(u(s(e)/a),1023),(d=g(e/c(2,o)*c(2,n)))/c(2,n)>=2&&(o+=1,d=1),o>D?(o=(1<<t)-1,d=0):(o+=D,d-=c(2,n))):(o=0,d=g(e/c(2,1-D-n)))),f=[],p=n;p;p-=1)f.push(d%2?1:0),d=u(d/2)
for(p=t;p;p-=1)f.push(o%2?1:0),o=u(o/2)
for(f.push(r?1:0),f.reverse(),h=f.join(""),m=[];h.length;)m.push(parseInt(h.substring(0,8),2)),h=h.substring(8)
return m}function _(e,t,n){var r,a,o,i,u,s,l,d,p=[]
for(r=e.length;r;r-=1)for(o=e[r-1],a=8;a;a-=1)p.push(o%2?1:0),o>>=1
return p.reverse(),i=p.join(""),u=(1<<t-1)-1,s=parseInt(i.substring(0,1),2)?-1:1,l=parseInt(i.substring(1,1+t),2),d=parseInt(i.substring(1+t),2),l===(1<<t)-1?0===d?s*(1/0):NaN:l>0?s*c(2,l-u)*(1+d/c(2,n)):0!==d?s*c(2,-(u-1))*(d/c(2,n)):s<0?-0:0}function S(e){return _(e,11,52)}function O(e){return R(e,11,52)}function M(e){return _(e,8,23)}function I(e){return R(e,8,23)}f=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(e){return!1}}()?Object.defineProperty:function(e,t,n){if(!e===Object(e))throw new TypeError("Object.defineProperty called on non-object")
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
var i=a(1,v,b),u=a(1,y,F),s=a(1,w,F),l=a(2,E,C),c=a(2,x,A),d=a(4,k,T),h=a(4,N,B),D=a(4,I,M),g=a(8,O,S)
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
Boolean(u)===Boolean(a)&&d.reverse(),new e.Uint8Array(this.buffer,o,n.BYTES_PER_ELEMENT).set(d)}}o.prototype.getUint8=i(e.Uint8Array),o.prototype.getInt8=i(e.Int8Array),o.prototype.getUint16=i(e.Uint16Array),o.prototype.getInt16=i(e.Int16Array),o.prototype.getUint32=i(e.Uint32Array),o.prototype.getInt32=i(e.Int32Array),o.prototype.getFloat32=i(e.Float32Array),o.prototype.getFloat64=i(e.Float64Array),o.prototype.setUint8=u(e.Uint8Array),o.prototype.setInt8=u(e.Int8Array),o.prototype.setUint16=u(e.Uint16Array),o.prototype.setInt16=u(e.Int16Array),o.prototype.setUint32=u(e.Uint32Array),o.prototype.setInt32=u(e.Int32Array),o.prototype.setFloat32=u(e.Float32Array),o.prototype.setFloat64=u(e.Float64Array),e.DataView=e.DataView||o}()})),$t=ae((function(e){!function(e){"use strict"
if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=Object.defineProperty&&function(){try{return 1===Object.defineProperty({},"x",{value:1}).x}catch(e){}}(),r=function(e,t,r){n?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:r}):e[t]=r}
e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'")
if(r(this,"_id","_WeakMap_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function n(e,n){if(!a(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+o(e))}function i(){return Math.random().toString().substring(2)}return r(e.prototype,"delete",(function(e){if(n(this,"delete"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e||(delete e[this._id],0))})),r(e.prototype,"get",(function(e){if(n(this,"get"),a(e)){var t=e[this._id]
return t&&t[0]===e?t[1]:void 0}})),r(e.prototype,"has",(function(e){if(n(this,"has"),!a(e))return!1
var t=e[this._id]
return!(!t||t[0]!==e)})),r(e.prototype,"set",(function(e,t){if(n(this,"set"),!a(e))throw new TypeError("Invalid value used as weak map key")
var o=e[this._id]
return o&&o[0]===e?(o[1]=t,this):(r(e,this._id,[e,t]),this)})),r(e,"_polyfill",!0),e}()}function a(e){return Object(e)===e}}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:void 0!==n?n:void 0!==r?r:e)})),Gt={helpUrlBase:"https://dequeuniversity.com/rules/",gridSize:200,results:[],resultGroups:[],resultGroupMap:{},impact:Object.freeze(["minor","moderate","serious","critical"]),preload:Object.freeze({assets:["cssom","media"],timeout:1e4}),allOrigins:"<unsafe_all_origins>",sameOrigin:"<same_origin>"};[{name:"NA",value:"inapplicable",priority:0,group:"inapplicable"},{name:"PASS",value:"passed",priority:1,group:"passes"},{name:"CANTTELL",value:"cantTell",priority:2,group:"incomplete"},{name:"FAIL",value:"failed",priority:3,group:"violations"}].forEach((function(e){var t=e.name,n=e.value,r=e.priority,a=e.group
Gt[t]=n,Gt[t+"_PRIO"]=r,Gt[t+"_GROUP"]=a,Gt.results[r]=n,Gt.resultGroups[r]=a,Gt.resultGroupMap[n]=a})),Object.freeze(Gt.results),Object.freeze(Gt.resultGroups),Object.freeze(Gt.resultGroupMap),Object.freeze(Gt)
var Wt=Gt,Yt=function(){"object"===("undefined"==typeof console?"undefined":o(console))&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},Kt=/[\t\r\n\f]/g,Qt=function(){function e(){Q(this,e),this.parent=void 0}return Z(e,[{key:"props",get:function(){throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties')}},{key:"attrNames",get:function(){throw new Error('VirtualNode class must have an "attrNames" property')}},{key:"attr",value:function(){throw new Error('VirtualNode class must have an "attr" function')}},{key:"hasAttr",value:function(){throw new Error('VirtualNode class must have a "hasAttr" function')}},{key:"hasClass",value:function(e){var t=this.attr("class")
if(!t)return!1
var n=" "+e+" "
return(" "+t+" ").replace(Kt," ").indexOf(n)>=0}}]),e}(),Xt={}
oe(Xt,{DqElement:function(){return Wn},aggregate:function(){return Zt},aggregateChecks:function(){return an},aggregateNodeResults:function(){return un},aggregateResult:function(){return ln},areStylesSet:function(){return cn},assert:function(){return dn},checkHelper:function(){return Yn},clone:function(){return Kn},closest:function(){return cr},collectResultsFromFrames:function(){return na},contains:function(){return ra},convertSelector:function(){return ir},cssParser:function(){return Xn},deepMerge:function(){return aa},escapeSelector:function(){return fn},extendMetaData:function(){return oa},filterHtmlAttrs:function(){return Hp},finalizeRuleResult:function(){return on},findBy:function(){return Jr},getAllChecks:function(){return Zr},getAncestry:function(){return qn},getBaseLang:function(){return xd},getCheckMessage:function(){return Sd},getCheckOption:function(){return Od},getEnvironmentData:function(){return Md},getFlattenedTree:function(){return Cd},getFrameContexts:function(){return Jd},getFriendlyUriEnd:function(){return vn},getNodeAttributes:function(){return bn},getNodeFromTree:function(){return $n},getPreloadConfig:function(){return Ip},getRootNode:function(){return la},getRule:function(){return ep},getScroll:function(){return tp},getScrollState:function(){return ap},getSelector:function(){return Pn},getSelectorData:function(){return Rn},getShadowSelector:function(){return wn},getStandards:function(){return op},getStyleSheetFactory:function(){return up},getXpath:function(){return zn},injectStyle:function(){return sp},isHidden:function(){return lp},isHtmlElement:function(){return cp},isNodeInContext:function(){return dp},isShadowRoot:function(){return ua},isValidLang:function(){return tf},isXHTML:function(){return Fn},matchAncestry:function(){return fp},matches:function(){return lr},matchesExpression:function(){return sr},matchesSelector:function(){return yn},memoize:function(){return ma},mergeResults:function(){return ta},nodeLookup:function(){return mp},nodeSorter:function(){return hp},parseCrossOriginStylesheet:function(){return wp},parseSameOriginStylesheet:function(){return yp},parseStylesheet:function(){return Fp},performanceTimer:function(){return Cp},pollyfillElementsFromPoint:function(){return xp},preload:function(){return Pp},preloadCssom:function(){return Bp},preloadMedia:function(){return Op},processMessage:function(){return _d},publishMetaData:function(){return qp},querySelectorAll:function(){return Lp},querySelectorAllFilter:function(){return Np},queue:function(){return gr},respondable:function(){return Wr},ruleShouldRun:function(){return Vp},select:function(){return $p},sendCommandToFrame:function(){return Kr},setScrollState:function(){return Wp},shadowSelect:function(){return Yp},shadowSelectAll:function(){return Qp},shouldPreload:function(){return Mp},toArray:function(){return pn},tokenList:function(){return md},uniqueArray:function(){return Ap},uuid:function(){return Rr},validInputTypes:function(){return Zp},validLangs:function(){return ef}})
var Zt=function(e,t,n){t=t.slice(),n&&t.push(n)
var r=t.map((function(t){return e.indexOf(t)})).sort()
return e[r.pop()]},Jt=Wt.CANTTELL_PRIO,en=Wt.FAIL_PRIO,tn=[]
tn[Wt.PASS_PRIO]=!0,tn[Wt.CANTTELL_PRIO]=null,tn[Wt.FAIL_PRIO]=!1
var nn=["any","all","none"]
function rn(e,t){return nn.reduce((function(n,r){return n[r]=(e[r]||[]).map((function(e){return t(e,r)})),n}),{})}var an=function(e){var t=Object.assign({},e)
rn(t,(function(e,t){var n=void 0===e.result?-1:tn.indexOf(e.result)
e.priority=-1!==n?n:Wt.CANTTELL_PRIO,"none"===t&&(e.priority===Wt.PASS_PRIO?e.priority=Wt.FAIL_PRIO:e.priority===Wt.FAIL_PRIO&&(e.priority=Wt.PASS_PRIO))}))
var n={all:t.all.reduce((function(e,t){return Math.max(e,t.priority)}),0),none:t.none.reduce((function(e,t){return Math.max(e,t.priority)}),0),any:t.any.reduce((function(e,t){return Math.min(e,t.priority)}),4)%4}
t.priority=Math.max(n.all,n.none,n.any)
var r=[]
return nn.forEach((function(e){t[e]=t[e].filter((function(r){return r.priority===t.priority&&r.priority===n[e]})),t[e].forEach((function(e){return r.push(e.impact)}))})),[Jt,en].includes(t.priority)?t.impact=Zt(Wt.impact,r):t.impact=null,rn(t,(function(e){delete e.result,delete e.priority})),t.result=Wt.results[t.priority],delete t.priority,t},on=function(e){var t=i._audit.rules.find((function(t){return t.id===e.id}))
return t&&t.impact&&e.nodes.forEach((function(e){["any","all","none"].forEach((function(n){(e[n]||[]).forEach((function(e){e.impact=t.impact}))}))})),Object.assign(e,un(e.nodes)),delete e.nodes,e},un=function(e){var t={}
if((e=e.map((function(e){if(e.any&&e.all&&e.none)return an(e)
if(Array.isArray(e.node))return on(e)
throw new TypeError("Invalid Result type")})))&&e.length){var n=e.map((function(e){return e.result}))
t.result=Zt(Wt.results,n,t.result)}else t.result="inapplicable"
Wt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){var n=Wt.resultGroupMap[e.result]
t[n].push(e)}))
var r=Wt.FAIL_GROUP
if(0===t[r].length&&(r=Wt.CANTTELL_GROUP),t[r].length>0){var a=t[r].map((function(e){return e.impact}))
t.impact=Zt(Wt.impact,a)||null}else t.impact=null
return t}
function sn(e,t,n){var r=Object.assign({},t)
r.nodes=(r[n]||[]).concat(),Wt.resultGroups.forEach((function(e){delete r[e]})),e[n].push(r)}var ln=function(e){var t={}
return Wt.resultGroups.forEach((function(e){return t[e]=[]})),e.forEach((function(e){e.error?sn(t,e,Wt.CANTTELL_GROUP):e.result===Wt.NA?sn(t,e,Wt.NA_GROUP):Wt.resultGroups.forEach((function(n){Array.isArray(e[n])&&e[n].length>0&&sn(t,e,n)}))})),t},cn=function e(t,r,a){var o=n.getComputedStyle(t,null)
if(!o)return!1
for(var i=0;i<r.length;++i){var u=r[i]
if(o.getPropertyValue(u.property)===u.value)return!0}return!(!t.parentNode||t.nodeName.toUpperCase()===a.toUpperCase())&&e(t.parentNode,r,a)},dn=function(e,t){if(!e)throw new Error(t)},pn=function(e){return Array.prototype.slice.call(e)},fn=function(e){for(var t,n=String(e),r=n.length,a=-1,o="",i=n.charCodeAt(0);++a<r;)0!=(t=n.charCodeAt(a))?o+=t>=1&&t<=31||127==t||0==a&&t>=48&&t<=57||1==a&&t>=48&&t<=57&&45==i?"\\"+t.toString(16)+" ":0==a&&1==r&&45==t||!(t>=128||45==t||95==t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122)?"\\"+n.charAt(a):n.charAt(a):o+="�"
return o}
function hn(e,t){return[e.substring(0,t),e.substring(t)]}function mn(e){return e.replace(/\s+$/,"")}var Dn,gn,vn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!(e.length<=1||"data:"===e.substr(0,5)||"javascript:"===e.substr(0,11)||e.includes("?"))){var n=t.currentDomain,r=t.maxLength,a=void 0===r?25:r,o=function(e){var t=e,n="",r="",a="",o="",i=""
if(e.includes("#")){var u=W(hn(e,e.indexOf("#")),2)
e=u[0],i=u[1]}if(e.includes("?")){var s=W(hn(e,e.indexOf("?")),2)
e=s[0],o=s[1]}if(e.includes("://")){var l=W(e.split("://"),2)
n=l[0]
var c=W(hn(e=l[1],e.indexOf("/")),2)
r=c[0],e=c[1]}else if("//"===e.substr(0,2)){var d=W(hn(e=e.substr(2),e.indexOf("/")),2)
r=d[0],e=d[1]}if("www."===r.substr(0,4)&&(r=r.substr(4)),r&&r.includes(":")){var p=W(hn(r,r.indexOf(":")),2)
r=p[0],a=p[1]}return{original:t,protocol:n,domain:r,port:a,path:e,query:o,hash:i}}(e),i=o.path,u=o.domain,s=o.hash,l=i.substr(i.substr(0,i.length-2).lastIndexOf("/")+1)
if(s)return l&&(l+s).length<=a?mn(l+s):l.length<2&&s.length>2&&s.length<=a?mn(s):void 0
if(u&&u.length<a&&i.length<=1)return mn(u+i)
if(i==="/"+l&&u&&n&&u!==n&&(u+i).length<=a)return mn(u+i)
var c=l.lastIndexOf(".")
return(-1===c||c>1)&&(-1!==c||l.length>2)&&l.length<=a&&!l.match(/index(\.[a-zA-Z]{2-4})?/)&&!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return 0!==e.length&&(e.match(/[0-9]/g)||"").length>=e.length/2}(l)?mn(l):void 0}},bn=function(e){return e.attributes instanceof n.NamedNodeMap?e.attributes:e.cloneNode(!1).attributes},yn=function(e,t){return Dn&&e[Dn]||(Dn=function(e){var t,n,r=["matches","matchesSelector","mozMatchesSelector","webkitMatchesSelector","msMatchesSelector"],a=r.length
for(t=0;t<a;t++)if(e[n=r[t]])return n}(e)),!!e[Dn]&&e[Dn](t)},Fn=function(e){return!!e.createElement&&"A"===e.createElement("A").localName},wn=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t)return""
var r=t.getRootNode&&t.getRootNode()||a
if(11!==r.nodeType)return e(t,n,r)
for(var o=[];11===r.nodeType;){if(!r.host)return""
o.unshift({elm:t,doc:r}),r=(t=r.host).getRootNode()}return o.unshift({elm:t,doc:r}),o.map((function(t){var r=t.elm,a=t.doc
return e(r,n,a)}))},En=["class","style","id","selected","checked","disabled","tabindex","aria-checked","aria-selected","aria-invalid","aria-activedescendant","aria-busy","aria-disabled","aria-expanded","aria-grabbed","aria-pressed","aria-valuenow"],Cn=31,xn=/([\\"])/g,An=/(\r\n|\r|\n)/g
function kn(e){return e.replace(xn,"\\$1").replace(An,"\\a ")}function Tn(e,t){var n,r=t.name
if(-1!==r.indexOf("href")||-1!==r.indexOf("src")){var a=vn(e.getAttribute(r))
n=a?fn(t.name)+'$="'+kn(a)+'"':fn(t.name)+'="'+kn(e.getAttribute(r))+'"'}else n=fn(r)+'="'+kn(t.value)+'"'
return n}function Nn(e,t){return e.count<t.count?-1:e.count===t.count?0:1}function Bn(e){return!En.includes(e.name)&&-1===e.name.indexOf(":")&&(!e.value||e.value.length<Cn)}function Rn(e){for(var t={classes:{},tags:{},attributes:{}},n=(e=Array.isArray(e)?e:[e]).slice(),r=[],a=function(){var e=n.pop(),a=e.actualNode
if(a.querySelectorAll){var o=a.nodeName
t.tags[o]?t.tags[o]++:t.tags[o]=1,a.classList&&Array.from(a.classList).forEach((function(e){var n=fn(e)
t.classes[n]?t.classes[n]++:t.classes[n]=1})),a.hasAttributes()&&Array.from(bn(a)).filter(Bn).forEach((function(e){var n=Tn(a,e)
n&&(t.attributes[n]?t.attributes[n]++:t.attributes[n]=1)}))}for(e.children.length&&(r.push(n),n=e.children.slice());!n.length&&r.length;)n=r.pop()};n.length;)a()
return t}function _n(e,t){var n=e.parentNode&&Array.from(e.parentNode.children||"")||[]
return n.find((function(n){return n!==e&&yn(n,t)}))?":nth-child("+(1+n.indexOf(e))+")":""}function Sn(e){if(e.getAttribute("id")){var t=e.getRootNode&&e.getRootNode()||a,n="#"+fn(e.getAttribute("id")||"")
return n.match(/player_uid_/)||1!==t.querySelectorAll(n).length?void 0:n}}function On(e){return void 0===gn&&(gn=Fn(a)),fn(gn?e.localName:e.nodeName.toLowerCase())}function Mn(e,t){var n,r="",a=function(e,t){var n=[],r=t.classes,a=t.tags
return e.classList&&Array.from(e.classList).forEach((function(t){var o=fn(t)
r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"class"})})),n.sort(Nn)}(e,t),o=function(e,t){var n=[],r=t.attributes,a=t.tags
return e.hasAttributes()&&Array.from(bn(e)).filter(Bn).forEach((function(t){var o=Tn(e,t)
o&&r[o]<a[e.nodeName]&&n.push({name:o,count:r[o],species:"attribute"})})),n.sort(Nn)}(e,t)
return a.length&&1===a[0].count?n=[a[0]]:o.length&&1===o[0].count?(n=[o[0]],r=On(e)):((n=a.concat(o)).sort(Nn),(n=n.slice(0,3)).some((function(e){return"class"===e.species}))?n.sort((function(e,t){return e.species!==t.species&&"class"===e.species?-1:e.species===t.species?0:1})):r=On(e)),r+n.reduce((function(e,t){switch(t.species){case"class":return e+"."+t.name
case"attribute":return e+"["+t.name+"]"}return e}),"")}function In(e,t,n){if(!i._selectorData)throw new Error("Expect axe._selectorData to be set up")
var r,a,o=t.toRoot,u=void 0!==o&&o
do{var s=Sn(e)
s||(s=Mn(e,i._selectorData),s+=_n(e,s)),r=r?s+" > "+r:s,a=a?a.filter((function(e){return yn(e,r)})):Array.from(n.querySelectorAll(r)),e=e.parentElement}while((a.length>1||u)&&e&&11!==e.nodeType)
return 1===a.length?r:-1!==r.indexOf(" > ")?":root"+r.substring(r.indexOf(" > ")):":root"}function Pn(e,t){return wn(In,e,t)}function jn(e){var t=e.nodeName.toLowerCase(),n=e.parentElement
if(!n)return t
var r=""
if("head"!==t&&"body"!==t&&n.children.length>1){var a=Array.prototype.indexOf.call(n.children,e)+1
r=":nth-child(".concat(a,")")}return jn(n)+" > "+t+r}function qn(e,t){return wn(jn,e,t)}function Ln(e,t){var n,r
if(!e)return[]
if(!t&&9===e.nodeType)return[{str:"html"}]
if(t=t||[],e.parentNode&&e.parentNode!==e&&(t=Ln(e.parentNode,t)),e.previousSibling){r=1,n=e.previousSibling
do{1===n.nodeType&&n.nodeName===e.nodeName&&r++,n=n.previousSibling}while(n)
1===r&&(r=null)}else if(e.nextSibling){n=e.nextSibling
do{1===n.nodeType&&n.nodeName===e.nodeName?(r=1,n=null):(r=null,n=n.previousSibling)}while(n)}if(1===e.nodeType){var a={}
a.str=e.nodeName.toLowerCase()
var o=e.getAttribute&&fn(e.getAttribute("id"))
o&&1===e.ownerDocument.querySelectorAll("#"+o).length&&(a.id=e.getAttribute("id")),r>1&&(a.count=r),t.push(a)}return t}var zn=function(e){return Ln(e).reduce((function(e,t){return t.id?"/".concat(t.str,"[@id='").concat(t.id,"']"):e+"/".concat(t.str)+(t.count>0?"[".concat(t.count,"]"):"")}),"")},Vn={},Hn={set:function(e,t){!function(e){dn("string"==typeof e,"key must be a string, "+o(e)+" given"),dn(""!==e,"key must not be empty")}(e),Vn[e]=t},get:function(e,t){if(function(e){dn("function"==typeof e||void 0===e,"creator must be a function or undefined, "+o(e)+" given")}(t),e in Vn)return Vn[e]
if("function"==typeof t){var n=t()
return dn(void 0!==n,"Cache creator function should not return undefined"),this.set(e,n),Vn[e]}},clear:function(){Vn={}}},Un=Hn,$n=function(e,t){var n=t||e
return Un.get("nodeMap")?Un.get("nodeMap").get(n):null}
function Gn(e){var t,r,a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
this.spec=u,e instanceof Qt?(this._virtualNode=e,this._element=e.actualNode):(this._element=e,this._virtualNode=$n(e)),this.fromFrame=(null===(t=this.spec.selector)||void 0===t?void 0:t.length)>1,o.absolutePaths&&(this._options={toRoot:!0}),this.nodeIndexes=[],Array.isArray(this.spec.nodeIndexes)?this.nodeIndexes=this.spec.nodeIndexes:"number"==typeof(null===(r=this._virtualNode)||void 0===r?void 0:r.nodeIndex)&&(this.nodeIndexes=[this._virtualNode.nodeIndex]),this.source=null,i._audit.noHtml||(this.source=null!==(a=this.spec.source)&&void 0!==a?a:function(e){if(null==e||!e.outerHTML)return""
var t=e.outerHTML
return t||"function"!=typeof n.XMLSerializer||(t=(new n.XMLSerializer).serializeToString(e)),function(e,t){if(t=t||300,e.length>t){var n=e.indexOf(">")
e=e.substring(0,n+1)}return e}(t||"")}(this._element))}Gn.prototype={get selector(){return this.spec.selector||[Pn(this.element,this._options)]},get ancestry(){return this.spec.ancestry||[qn(this.element)]},get xpath(){return this.spec.xpath||[zn(this.element)]},get element(){return this._element},toJSON:function(){return{selector:this.selector,source:this.source,xpath:this.xpath,ancestry:this.ancestry,nodeIndexes:this.nodeIndexes}}},Gn.fromFrame=function(e,t,n){var r=Gn.mergeSpecs(e,n)
return new Gn(n.element,t,r)},Gn.mergeSpecs=function(e,t){return G({},e,{selector:[].concat(U(t.selector),U(e.selector)),ancestry:[].concat(U(t.ancestry),U(e.ancestry)),xpath:[].concat(U(t.xpath),U(e.xpath)),nodeIndexes:[].concat(U(t.nodeIndexes),U(e.nodeIndexes))})}
var Wn=Gn,Yn=function(e,t,r,a){return{isAsync:!1,async:function(){return this.isAsync=!0,function(t){t instanceof Error==0?(e.result=t,r(e)):a(t)}},data:function(t){e.data=t},relatedNodes:function(r){n.Node&&(r=r instanceof n.Node||r instanceof Qt?[r]:pn(r),e.relatedNodes=[],r.forEach((function(r){if(r instanceof Qt&&(r=r.actualNode),r instanceof n.Node){var a=new Wn(r,t)
e.relatedNodes.push(a)}})))}}},Kn=function e(t){var r,a,i,u,s=t
if(null!==(r=n)&&void 0!==r&&r.Node&&t instanceof n.Node||null!==(a=n)&&void 0!==a&&a.HTMLCollection&&t instanceof n.HTMLCollection)return t
if(null!==t&&"object"===o(t))if(Array.isArray(t))for(s=[],i=0,u=t.length;i<u;i++)s[i]=e(t[i])
else for(i in s={},t)s[i]=e(t[i])
return s},Qn=new(ie(de()).CssSelectorParser)
Qn.registerSelectorPseudos("not"),Qn.registerSelectorPseudos("is"),Qn.registerNestingOperators(">"),Qn.registerAttrEqualityMods("^","$","*","~")
var Xn=Qn
function Zn(e,t){return function(e,t){return 1===e.props.nodeType&&("*"===t.tag||e.props.nodeName===t.tag)}(e,t)&&function(e,t){return!t.classes||t.classes.every((function(t){return e.hasClass(t.value)}))}(e,t)&&function(e,t){return!t.attributes||t.attributes.every((function(t){var n=e.attr(t.key)
return null!==n&&t.test(n)}))}(e,t)&&function(e,t){return!t.id||e.props.id===t.id}(e,t)&&(n=e,!((r=t).pseudos&&!r.pseudos.every((function(e){if("not"===e.name)return!e.expressions.some((function(e){return sr(n,e)}))
if("is"===e.name)return e.expressions.some((function(e){return sr(n,e)}))
throw new Error("the pseudo selector "+e.name+" has not yet been implemented")}))))
var n,r}var Jn,er=(Jn=/(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g,function(e){return e.replace(Jn,"\\")}),tr=/\\/g
function nr(e){if(e)return e.map((function(e){var t,n,r=e.name.replace(tr,""),a=(e.value||"").replace(tr,"")
switch(e.operator){case"^=":n=new RegExp("^"+er(a))
break
case"$=":n=new RegExp(er(a)+"$")
break
case"~=":n=new RegExp("(^|\\s)"+er(a)+"(\\s|$)")
break
case"|=":n=new RegExp("^"+er(a)+"(-|$)")
break
case"=":t=function(e){return a===e}
break
case"*=":t=function(e){return e&&e.includes(a)}
break
case"!=":t=function(e){return a!==e}
break
default:t=function(e){return null!==e}}return""===a&&/^[*$^]=$/.test(e.operator)&&(t=function(){return!1}),t||(t=function(e){return e&&n.test(e)}),{key:r,value:a,type:void 0===e.value?"attrExist":"attrValue",test:t}}))}function rr(e){if(e)return e.map((function(e){return{value:e=e.replace(tr,""),regexp:new RegExp("(^|\\s)"+er(e)+"(\\s|$)")}}))}function ar(e){if(e)return e.map((function(e){var t
return["is","not"].includes(e.name)&&(t=or(t=(t=e.value).selectors?t.selectors:[t])),{name:e.name,expressions:t,value:e.value}}))}function or(e){return e.map((function(e){for(var t=[],n=e.rule;n;)t.push({tag:n.tagName?n.tagName.toLowerCase():"*",combinator:n.nestingOperator?n.nestingOperator:" ",id:n.id,attributes:nr(n.attrs),classes:rr(n.classNames),pseudos:ar(n.pseudos)}),n=n.rule
return t}))}function ir(e){var t=Xn.parse(e)
return or(t=t.selectors?t.selectors:[t])}function ur(e,t,n,r){if(!e)return!1
for(var a=Array.isArray(t)?t[n]:t,o=Zn(e,a);!o&&r&&e.parent;)o=Zn(e=e.parent,a)
if(n>0){if(!1===[" ",">"].includes(a.combinator))throw new Error("axe.utils.matchesExpression does not support the combinator: "+a.combinator)
o=o&&ur(e.parent,t,n-1," "===a.combinator)}return o}function sr(e,t,n){return ur(e,t,t.length-1,n)}var lr=function(e,t){return ir(t).some((function(t){return sr(e,t)}))},cr=function(e,t){for(;e;){if(lr(e,t))return e
if(void 0===e.parent)throw new TypeError("Cannot resolve parent for non-DOM nodes")
e=e.parent}return null}
function dr(){}function pr(e){if("function"!=typeof e)throw new TypeError("Queue methods require functions as arguments")}var fr,hr,mr,Dr,gr=function(){var e,t=[],n=0,r=0,a=dr,i=!1,u=function(t){e=t,setTimeout((function(){null!=e&&Yt("Uncaught error (of queue)",e)}),1)},s=u
function l(e){return function(n){t[e]=n,(r-=1)||a===dr||(i=!0,a(t))}}function c(e){return a=dr,s(e),t}var d={defer:function(a){if("object"===o(a)&&a.then&&a.catch){var u=a
a=function(e,t){u.then(e).catch(t)}}if(pr(a),void 0===e){if(i)throw new Error("Queue already completed")
return t.push(a),++r,function(){for(var e=t.length;n<e;n++){var r=t[n]
try{r.call(null,l(n),c)}catch(e){c(e)}}}(),d}},then:function(n){if(pr(n),a!==dr)throw new Error("queue `then` already set")
return e||(a=n,r||(i=!0,a(t))),d},catch:function(t){if(pr(t),s!==u)throw new Error("queue `catch` already set")
return e?(t(e),e=null):s=t,d},abort:c}
return d},vr=n.crypto||n.msCrypto
!hr&&vr&&vr.getRandomValues&&(mr=new Uint8Array(16),hr=function(){return vr.getRandomValues(mr),mr}),hr||(Dr=new Array(16),hr=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),Dr[t]=e>>>((3&t)<<3)&255
return Dr})
for(var br="function"==typeof n.Buffer?n.Buffer:Array,yr=[],Fr={},wr=0;wr<256;wr++)yr[wr]=(wr+256).toString(16).substr(1),Fr[yr[wr]]=wr
function Er(e,t){var n=t||0,r=yr
return r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+"-"+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]+r[e[n++]]}var Cr=hr(),xr=[1|Cr[0],Cr[1],Cr[2],Cr[3],Cr[4],Cr[5]],Ar=16383&(Cr[6]<<8|Cr[7]),kr=0,Tr=0
function Nr(e,t,n){var r=t&&n||0,a=t||[],o=null!=(e=e||{}).clockseq?e.clockseq:Ar,i=null!=e.msecs?e.msecs:(new Date).getTime(),u=null!=e.nsecs?e.nsecs:Tr+1,s=i-kr+(u-Tr)/1e4
if(s<0&&null==e.clockseq&&(o=o+1&16383),(s<0||i>kr)&&null==e.nsecs&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
kr=i,Tr=u,Ar=o
var l=(1e4*(268435455&(i+=122192928e5))+u)%4294967296
a[r++]=l>>>24&255,a[r++]=l>>>16&255,a[r++]=l>>>8&255,a[r++]=255&l
var c=i/4294967296*1e4&268435455
a[r++]=c>>>8&255,a[r++]=255&c,a[r++]=c>>>24&15|16,a[r++]=c>>>16&255,a[r++]=o>>>8|128,a[r++]=255&o
for(var d=e.node||xr,p=0;p<6;p++)a[r+p]=d[p]
return t||Er(a)}function Br(e,t,n){var r=t&&n||0
"string"==typeof e&&(t="binary"==e?new br(16):null,e=null)
var a=(e=e||{}).random||(e.rng||hr)()
if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var o=0;o<16;o++)t[r+o]=a[o]
return t||Er(a)}(fr=Br).v1=Nr,fr.v4=Br,fr.parse=function(e,t,n){var r=t&&n||0,a=0
for(t=t||[],e.toLowerCase().replace(/[0-9a-f]{2}/g,(function(e){a<16&&(t[r+a++]=Fr[e])}));a<16;)t[r+a++]=0
return t},fr.unparse=Er,fr.BufferClass=br,i._uuid=Nr()
var Rr=Br,_r=Object.freeze(["EvalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
function Sr(){var e="axeAPI",t=""
return void 0!==i&&i._audit&&i._audit.application&&(e=i._audit.application),void 0!==i&&(t=i.version),e+"."+t}function Or(e){Ir(e),dn(n.parent===e,"Source of the response must be the parent window.")}function Mr(e){Ir(e),dn(e.parent===n,"Respondable target must be a frame in the current window")}function Ir(e){dn(n!==e,"Messages can not be sent to the same window.")}var Pr={},jr=[]
function qr(){var e="".concat(Br(),":").concat(Br())
return jr.includes(e)?qr():(jr.push(e),e)}function Lr(e,t,n,r){if("function"==typeof r&&function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
dn(!Pr[e],"A replyHandler already exists for this message channel."),Pr[e]={replyHandler:t,sendToParent:n}}(t.channelId,r,n),n?Or(e):Mr(e),t.message instanceof Error&&!n)return i.log(t.message),!1
var a=function(e){var t=e.topic,n=e.channelId,r=e.message,a={channelId:n,topic:t,messageId:e.messageId,keepalive:!!e.keepalive,source:Sr()}
return r instanceof Error?a.error={name:r.name,message:r.message,stack:r.stack}:a.payload=r,JSON.stringify(a)}(G({messageId:qr()},t)),o=i._audit.allowedOrigins
return!(!o||!o.length||(o.forEach((function(t){try{e.postMessage(a,t)}catch(n){if(n instanceof e.DOMException)throw new Error('allowedOrigins value "'.concat(t,'" is not a valid origin'))
throw n}})),0))}function zr(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
return function(r,a,o){Lr(e,{channelId:t,message:r,keepalive:a},n,o)}}var Vr,Hr,Ur={open:function(e){if("function"==typeof n.addEventListener){var t=function(t){(function(e,t){var r,a=e.origin,u=e.data,s=e.source
try{var l=function(e){var t,r,a,i,u
try{t=JSON.parse(e)}catch(e){return}if(null!==(s=t)&&"object"===o(s)&&"string"==typeof s.channelId&&s.source===Sr()){var s,l=t,c=l.topic,d=l.channelId,p=l.messageId,f=l.keepalive
return{topic:c,message:"object"===o(t.error)?(r=t.error,a=r.message||"Unknown error occurred",i=_r.includes(r.name)?r.name:"Error",u=n[i]||Error,r.stack&&(a+="\n"+r.stack.replace(r.message,"")),new u(a)):t.payload,messageId:p,channelId:d,keepalive:!!f}}}(u)||{},c=l.channelId,d=l.message,p=l.messageId
if(!function(e){var t=i._audit.allowedOrigins
return t&&t.includes("*")||t.includes(e)}(a)||(r=p,jr.includes(r)||(jr.push(r),0)))return
if(d instanceof Error&&s.parent!==n)return i.log(d),!1
try{if(l.topic){var f=zr(s,c)
Or(s),t(l,f)}else!function(e,t){var n=t.channelId,r=t.message,a=t.keepalive,o=function(e){return Pr[e]}(n)||{},u=o.replyHandler,s=o.sendToParent
if(u){s?Or(e):Mr(e)
var l=zr(e,n,s)
!a&&n&&function(e){delete Pr[e]}(n)
try{u(r,a,l)}catch(e){i.log(e),l(e,a)}}}(s,l)}catch(e){!function(e,t,r){if(!e.parent!==n)return i.log(t)
try{Lr(e,{topic:null,channelId:r,message:t,messageId:qr(),keepalive:!0},!0)}catch(e){return i.log(e)}}(s,e,c)}}catch(e){return i.log(e),!1}})(t,e)}
return n.addEventListener("message",t,!1),function(){n.removeEventListener("message",t,!1)}}},post:function(e,t,r){return"function"==typeof n.addEventListener&&Lr(e,t,!1,r)}}
function $r(e){e.updateMessenger(Ur)}var Gr={}
function Wr(e,t,n,r,a){var o={topic:t,message:n,channelId:"".concat(Br(),":").concat(Br()),keepalive:r}
return Hr(e,o,a)}function Yr(e,t){var n=e.topic,r=e.message,a=e.keepalive,o=Gr[n]
if(o)try{o(r,a,t)}catch(e){i.log(e),t(e,a)}}function Kr(e,t,n,r){var a,o,i=e.contentWindow,u=null!==(a=null===(o=t.options)||void 0===o?void 0:o.pingWaitTime)&&void 0!==a?a:500
if(!i)return Yt("Frame does not have a content window",e),void n(null)
if(0!==u){var s=setTimeout((function(){s=setTimeout((function(){t.debug?r(Xr("No response from frame",e)):n(null)}),0)}),u)
Wr(i,"axe.ping",null,void 0,(function(){clearTimeout(s),Qr(e,t,n,r)}))}else Qr(e,t,n,r)}function Qr(e,t,n,r){var a,o,i=null!==(a=null===(o=t.options)||void 0===o?void 0:o.frameWaitTime)&&void 0!==a?a:6e4,u=e.contentWindow,s=setTimeout((function(){r(Xr("Axe in frame timed out",e))}),i)
Wr(u,"axe.start",t,void 0,(function(e){clearTimeout(s),e instanceof Error==0?n(e):r(e)}))}function Xr(e,t){var n
return i._tree&&(n=Pn(t)),new Error(e+": "+(n||t))}Wr.updateMessenger=function(e){var t=e.open,n=e.post
dn("function"==typeof t,"open callback must be a function"),dn("function"==typeof n,"post callback must be a function"),Vr&&Vr()
var r=t(Yr)
r?(dn("function"==typeof r,"open callback must return a cleanup function"),Vr=r):Vr=null,Hr=n},Wr.subscribe=function(e,t){dn("function"==typeof t,"Subscriber callback must be a function"),dn(!Gr[e],"Topic ".concat(e," is already registered to.")),Gr[e]=t},Wr.isInFrame=function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n).frameElement},$r(Wr)
var Zr=function(e){return[].concat(e.any||[]).concat(e.all||[]).concat(e.none||[])},Jr=function(e,t,n){if(Array.isArray(e))return e.find((function(e){return"object"===o(e)&&e[t]===n}))}
function ea(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Math.max(null==e?void 0:e.length,null==t?void 0:t.length),r=0;r<n;r++){var a=null==e?void 0:e[r],o=null==t?void 0:t[r]
if("number"!=typeof a||isNaN(a))return 0===r?1:-1
if("number"!=typeof o||isNaN(o))return 0===r?-1:1
if(a!==o)return a-o}return 0}var ta=function(e,t){var n=[]
return e.forEach((function(e){var r,a=(r=e)&&r.results?Array.isArray(r.results)?r.results.length?r.results:null:[r.results]:null
if(a&&a.length){var o=function(e,t){return e.frameElement?new Wn(e.frameElement,t):e.frameSpec?e.frameSpec:null}(e,t)
a.forEach((function(e){e.nodes&&o&&function(e,t,n){e.forEach((function(e){e.node=Wn.fromFrame(e.node,t,n),Zr(e).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){return Wn.fromFrame(e,t,n)}))}))}))}(e.nodes,t,o)
var r=Jr(n,"id",e.id)
r?e.nodes.length&&function(e,t){for(var n=t[0].node,r=0;r<e.length;r++){var a=e[r].node,o=ea(a.nodeIndexes,n.nodeIndexes)
if(o>0||0===o&&n.selector.length<a.selector.length)return void e.splice.apply(e,[r,0].concat(U(t)))}e.push.apply(e,U(t))}(r.nodes,e.nodes):n.push(e)}))}})),n.forEach((function(e){e.nodes&&e.nodes.sort((function(e,t){return ea(e.node.nodeIndexes,t.node.nodeIndexes)}))})),n}
function na(e,t,n,r,a,o){var i=gr()
e.frames.forEach((function(e){var a=e.node,o=H(e,s)
i.defer((function(e,i){Kr(a,{options:t,command:n,parameter:r,context:o},(function(t){return e(t?{results:t,frameElement:a}:null)}),i)}))})),i.then((function(e){a(ta(e,t))})).catch(o)}function ra(e,t){if(!e.shadowId&&!t.shadowId&&e.actualNode&&"function"==typeof e.actualNode.contains)return e.actualNode.contains(t.actualNode)
do{if(e===t)return!0
if(t.nodeIndex<e.nodeIndex)return!1
t=t.parent}while(t)
return!1}var aa=function e(){for(var t={},n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return r.forEach((function(n){if(n&&"object"===o(n)&&!Array.isArray(n))for(var r=0,a=Object.keys(n);r<a.length;r++){var i=a[r]
!t.hasOwnProperty(i)||"object"!==o(n[i])||Array.isArray(t[i])?t[i]=n[i]:t[i]=e(t[i],n[i])}})),t},oa=function(e,t){Object.assign(e,t),Object.keys(t).filter((function(e){return"function"==typeof t[e]})).forEach((function(n){e[n]=null
try{e[n]=t[n](e)}catch(e){}}))},ia=["article","aside","blockquote","body","div","footer","h1","h2","h3","h4","h5","h6","header","main","nav","p","section","span"],ua=function(e){if(e.shadowRoot){var t=e.nodeName.toLowerCase()
if(ia.includes(t)||/^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(t))return!0}return!1},sa={}
oe(sa,{createGrid:function(){return Xa},findElmsInContext:function(){return da},findNearbyElms:function(){return oo},findUp:function(){return fa},findUpVirtual:function(){return pa},focusDisabled:function(){return ho},getComposedParent:function(){return Ia},getElementByReference:function(){return vo},getElementCoordinates:function(){return ja},getElementStack:function(){return Bo},getModalDialog:function(){return so},getOverflowHiddenAncestors:function(){return va},getRootNode:function(){return ca},getScrollOffset:function(){return Pa},getTabbableElements:function(){return Ro},getTextElementStack:function(){return Du},getViewportSize:function(){return qa},getVisibleChildTextRects:function(){return mu},hasContent:function(){return wu},hasContentVirtual:function(){return Fu},hasLangText:function(){return Eu},idrefs:function(){return So},insertedIntoFocusOrder:function(){return Cu},isCurrentPageLink:function(){return go},isFocusable:function(){return ei},isHTML5:function(){return Tu},isHiddenForEveryone:function(){return Sa},isHiddenWithCSS:function(){return ku},isInTabOrder:function(){return Nu},isInTextBlock:function(){return Ou},isInert:function(){return lo},isModalOpen:function(){return Mu},isMultiline:function(){return Iu},isNativelyFocusable:function(){return Jo},isNode:function(){return Pu},isOffscreen:function(){return La},isOpaque:function(){return Kc},isSkipLink:function(){return Qc},isVisible:function(){return ed},isVisibleOnScreen:function(){return Va},isVisibleToScreenReaders:function(){return ji},isVisualContent:function(){return vu},reduceToElementsBelowFloating:function(){return td},shadowElementsFromPoint:function(){return od},urlPropsFromAttribute:function(){return cd},visuallyContains:function(){return nd},visuallyOverlaps:function(){return dd},visuallySort:function(){return bo}})
var la=function(e){var t=e.getRootNode&&e.getRootNode()||a
return t===e&&(t=a),t},ca=la,da=function(e){var t,n=e.context,r=e.value,a=e.attr,o=e.elm,i=void 0===o?"":o,u=fn(r)
return t=9===n.nodeType||11===n.nodeType?n:ca(n),Array.from(t.querySelectorAll(i+"["+a+"="+u+"]"))},pa=function(e,t){var n
if(n=e.actualNode,!e.shadowId&&"function"==typeof e.actualNode.closest)return e.actualNode.closest(t)||null
do{(n=n.assignedSlot?n.assignedSlot:n.parentNode)&&11===n.nodeType&&(n=n.host)}while(n&&!yn(n,t)&&n!==a.documentElement)
return n&&yn(n,t)?n:null},fa=function(e,t){return pa($n(e),t)},ha=ie(zt())
i._memoizedFns=[]
var ma=function(e){var t=(0,ha.default)(e)
return i._memoizedFns.push(t),t}
function Da(e,t){return(0|e.left)<(0|t.right)&&(0|e.right)>(0|t.left)&&(0|e.top)<(0|t.bottom)&&(0|e.bottom)>(0|t.top)}var ga=ma((function(e){var t=[]
return e?("hidden"===e.getComputedStylePropertyValue("overflow")&&t.push(e),t.concat(ga(e.parent))):t})),va=ga,ba=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,ya=/(\w+)\((\d+)/
function Fa(e){return["style","script","noscript","template"].includes(e.props.nodeName)}function wa(e){return"area"!==e.props.nodeName&&"none"===e.getComputedStylePropertyValue("display")}function Ea(e){return!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&["hidden","collapse"].includes(e.getComputedStylePropertyValue("visibility"))}function Ca(e){return!!(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor&&"hidden"===e.getComputedStylePropertyValue("content-visibility")}function xa(e){return"true"===e.attr("aria-hidden")}function Aa(e){return"0"===e.getComputedStylePropertyValue("opacity")}function ka(e){var t=tp(e.actualNode),n=parseInt(e.getComputedStylePropertyValue("height")),r=parseInt(e.getComputedStylePropertyValue("width"))
return!!t&&(0===n||0===r)}function Ta(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=e.boundingClientRect,n=va(e)
return!!n.length&&n.some((function(e){var n=e.boundingClientRect
return n.width<2||n.height<2||!Da(t,n)}))}function Na(e){var t=e.getComputedStylePropertyValue("clip").match(ba),n=e.getComputedStylePropertyValue("clip-path").match(ya)
if(t&&5===t.length){var r=e.getComputedStylePropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}function Ba(e,t){var n=cr(e,"map")
if(!n)return!0
var r=n.attr("name")
if(!r)return!0
var a=la(e.actualNode)
if(!a||9!==a.nodeType)return!0
var o=Lp(i._tree,'img[usemap="#'.concat(fn(r),'"]'))
return!o||!o.length||o.some((function(e){return!t(e)}))}function Ra(e){var t
return"details"===(null===(t=e.parent)||void 0===t?void 0:t.props.nodeName)&&("summary"!==e.props.nodeName||e.parent.children.find((function(e){return"summary"===e.props.nodeName}))!==e)&&!e.parent.hasAttr("open")}var _a=[wa,Ea,Ca,Ra]
function Sa(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor,a=void 0!==r&&r
return e=mp(e).vNode,n?Oa(e,a):Ma(e,a)}var Oa=ma((function(e,t){return!(!Fa(e)&&(!e.actualNode||!_a.some((function(n){return n(e,{isAncestor:t})}))&&e.actualNode.isConnected))})),Ma=ma((function(e,t){return!!Oa(e,t)||!!e.parent&&Ma(e.parent,!0)})),Ia=function e(t){if(t.assignedSlot)return e(t.assignedSlot)
if(t.parentNode){var n=t.parentNode
if(1===n.nodeType)return n
if(n.host)return n.host}return null},Pa=function(e){if(!e.nodeType&&e.document&&(e=e.document),9===e.nodeType){var t=e.documentElement,n=e.body
return{left:t&&t.scrollLeft||n&&n.scrollLeft||0,top:t&&t.scrollTop||n&&n.scrollTop||0}}return{left:e.scrollLeft,top:e.scrollTop}},ja=function(e){var t=Pa(a),n=t.left,r=t.top,o=e.getBoundingClientRect()
return{top:o.top+r,right:o.right+n,bottom:o.bottom+r,left:o.left+n,width:o.right-o.left,height:o.bottom-o.top}},qa=function(e){var t=e.document,n=t.documentElement
if(e.innerWidth)return{width:e.innerWidth,height:e.innerHeight}
if(n)return{width:n.clientWidth,height:n.clientHeight}
var r=t.body
return{width:r.clientWidth,height:r.clientHeight}},La=function(e){if((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isAncestor)return!1
var t=mp(e).domNode
if(t){var r,o=a.documentElement,i=n.getComputedStyle(t),u=n.getComputedStyle(a.body||o).getPropertyValue("direction"),s=ja(t)
if(s.bottom<0&&(function(e,t){for(e=Ia(e);e&&"html"!==e.nodeName.toLowerCase();){if(e.scrollTop&&(t+=e.scrollTop)>=0)return!1
e=Ia(e)}return!0}(t,s.bottom)||"absolute"===i.position))return!0
if(0===s.left&&0===s.right)return!1
if("ltr"===u){if(s.right<=0)return!0}else if(r=Math.max(o.scrollWidth,qa(n).width),s.left>=r)return!0
return!1}},za=[Aa,ka,Ta,Na,La]
function Va(e){return e=mp(e).vNode,Ha(e)}var Ha=ma((function(e,t){return e.actualNode&&"area"===e.props.nodeName?!Ba(e,Ha):!Sa(e,{skipAncestors:!0,isAncestor:t})&&(!e.actualNode||!za.some((function(n){return n(e,{isAncestor:t})})))&&(!e.parent||Ha(e.parent,!0))}))
function Ua(e,t){var r=Math.min(e.top,t.top),a=Math.max(e.right,t.right),o=Math.max(e.bottom,t.bottom),i=Math.min(e.left,t.left)
return new n.DOMRect(i,r,a-i,o-r)}function $a(e,t){var n=e.x,r=e.y,a=t.top,o=t.right,i=t.bottom,u=t.left
return r>=a&&n<=o&&r<=i&&n>=u}var Ga=0,Wa=.1,Ya=.2,Ka=.3,Qa=0
function Xa(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.body,t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
if(Un.get("gridCreated")&&!r)return Wt.gridSize
if(Un.set("gridCreated",!0),!r){var o,u=$n(a.documentElement)
if(u||(u=new hd(a.documentElement)),Qa=0,u._stackingOrder=[eo(Ga,null)],null!==(o=t)&&void 0!==o||(t=new ro),no(t,u),tp(u.actualNode)){var s=new ro(u)
u._subGrid=s}}for(var l=a.createTreeWalker(e,n.NodeFilter.SHOW_ELEMENT,null,!1),c=r?l.nextNode():l.currentNode;c;){var d=$n(c)
d&&d.parent?r=d.parent:c.assignedSlot?r=$n(c.assignedSlot):c.parentElement?r=$n(c.parentElement):c.parentNode&&$n(c.parentNode)&&(r=$n(c.parentNode)),d||(d=new i.VirtualNode(c,r)),d._stackingOrder=Ja(d,r,Qa++)
var p=to(d,r),f=p?p._subGrid:t
if(tp(d.actualNode)){var h=new ro(d)
d._subGrid=h}var m=d.boundingClientRect
0!==m.width&&0!==m.height&&Va(c)&&no(f,d),ua(c)&&Xa(c.shadowRoot,f,d),c=l.nextNode()}return Wt.gridSize}function Za(e){if(!e)return!1
var t=e.getComputedStylePropertyValue("display")
return["flex","inline-flex","grid","inline-grid"].includes(t)}function Ja(e,t,n){var r=t._stackingOrder.slice()
if(!function(e,t){var n=e.getComputedStylePropertyValue("position"),r=e.getComputedStylePropertyValue("z-index")
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
return!!["layout","paint","strict","content"].includes(l)||!("auto"===r||!Za(t))}(e,t))return"static"!==e.getComputedStylePropertyValue("position")?r.push(eo(Ka,e)):"none"!==e.getComputedStylePropertyValue("float")&&r.push(eo(Ya,e)),r
var a=r.findIndex((function(e){var t=e.value
return[Ga,Ya,Ka].includes(t)}));-1!==a&&r.splice(a,r.length-a)
var o=function(e,t){return"static"!==e.getComputedStylePropertyValue("position")||Za(t)?e.getComputedStylePropertyValue("z-index"):"auto"}(e,t)
if(!["auto","0"].includes(o))return r.push(eo(parseInt(o),e)),r
for(var i=n.toString();i.length<10;)i="0"+i
return r.push(eo(parseFloat("".concat(Wa).concat(i)),e)),r}function eo(e,t){return{value:e,vNode:t}}function to(e,t){for(var n=null,r=[e];t;){if(tp(t.actualNode)){n=t
break}if(t._scrollRegionParent){n=t._scrollRegionParent
break}r.push(t),t=$n(t.actualNode.parentElement||t.actualNode.parentNode)}return r.forEach((function(e){return e._scrollRegionParent=n})),n}function no(e,t){t.clientRects.forEach((function(n){var r
null!==(r=t._grid)&&void 0!==r||(t._grid=e)
var a=e.getGridPositionOfRect(n)
e.loopGridPosition(a,(function(e){e.includes(t)||e.push(t)}))}))}var ro=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
Q(this,e),this.container=t,this.cells=[]}return Z(e,[{key:"toGridIndex",value:function(e){return Math.floor(e/Wt.gridSize)}},{key:"getCellFromPoint",value:function(e){var t,n,r=e.x,a=e.y
dn(this.boundaries,"Grid does not have cells added")
var o=this.toGridIndex(a),i=this.toGridIndex(r)
dn($a({y:o,x:i},this.boundaries),"Element midpoint exceeds the grid bounds")
var u=null!==(t=this.cells[o-this.cells._negativeIndex])&&void 0!==t?t:[]
return null!==(n=u[i-u._negativeIndex])&&void 0!==n?n:[]}},{key:"loopGridPosition",value:function(e,t){var n=e,r=n.left,a=n.right,o=n.top,i=n.bottom
this.boundaries&&(e=Ua(this.boundaries,e)),this.boundaries=e,ao(this.cells,o,i,(function(e,n){ao(e,r,a,(function(e,r){t(e,{row:n,col:r})}))}))}},{key:"getGridPositionOfRect",value:function(e){var t=e.top,r=e.right,a=e.bottom,o=e.left,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return t=this.toGridIndex(t-i),r=this.toGridIndex(r+i-1),a=this.toGridIndex(a+i-1),o=this.toGridIndex(o-i),new n.DOMRect(o,t,r-o,a-t)}}]),e}()
function ao(e,t,n,r){var a
if(null!==(a=e._negativeIndex)&&void 0!==a||(e._negativeIndex=0),t<e._negativeIndex){for(var o=0;o<e._negativeIndex-t;o++)e.splice(0,0,[])
e._negativeIndex=t}for(var i=t-e._negativeIndex,u=n-e._negativeIndex,s=i;s<=u;s++){var l,c
null!==(c=e[l=s])&&void 0!==c||(e[l]=[]),r(e[s],s+e._negativeIndex)}}function oo(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(Xa(),null===(t=e._grid)||void 0===t||null===(n=t.cells)||void 0===n||!n.length)return[]
var a=e.boundingClientRect,o=e._grid,i=io(e),u=o.getGridPositionOfRect(a,r),s=[]
return o.loopGridPosition(u,(function(t){var n,r=ee(t)
try{for(r.s();!(n=r.n()).done;){var a=n.value
a&&a!==e&&!s.includes(a)&&i===io(a)&&s.push(a)}}catch(e){r.e(e)}finally{r.f()}})),s}var io=ma((function(e){return!!e&&("fixed"===e.getComputedStylePropertyValue("position")||io(e.parent))}))
function uo(e,t){var r=Math.max(e.left,t.left),a=Math.min(e.right,t.right),o=Math.max(e.top,t.top),i=Math.min(e.bottom,t.bottom)
return r>=a||o>=i?null:new n.DOMRect(r,o,a-r,i-o)}var so=ma((function(){var e
if(!i._tree)return null
var t=Np(i._tree[0],"dialog[open]",(function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left+1,t.top+1).includes(e.actualNode)&&Va(e)}))
return t.length?t.find((function(e){var t=e.boundingClientRect
return a.elementsFromPoint(t.left-10,t.top-10).includes(e.actualNode)}))||(null!==(e=t.find((function(e){var t,r=null!==(t=function(e){Xa()
var t=i._tree[0]._grid,r=new n.DOMRect(0,0,n.innerWidth,n.innerHeight)
if(t)for(var a=0;a<t.cells.length;a++){var o=t.cells[a]
if(o)for(var u=0;u<o.length;u++){var s=o[u]
if(s)for(var l=0;l<s.length;l++){var c=s[l],d=uo(c.boundingClientRect,r)
if("html"!==c.props.nodeName&&c!==e&&"none"!==c.getComputedStylePropertyValue("pointer-events")&&d)return{vNode:c,rect:d}}}}}(e))&&void 0!==t?t:{},o=r.vNode,u=r.rect
return!!o&&!a.elementsFromPoint(u.left+1,u.top+1).includes(o.actualNode)})))&&void 0!==e?e:null):null}))
function lo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.skipAncestors,r=t.isAncestor
return n?co(e,r):po(e,r)}var co=ma((function(e,t){if(e.hasAttr("inert"))return!0
if(!t&&e.actualNode){var n=so()
if(n&&!ra(n,e))return!0}return!1})),po=ma((function(e,t){return!!co(e,t)||!!e.parent&&po(e.parent,!0)})),fo=["button","command","fieldset","keygen","optgroup","option","select","textarea","input"],ho=function(e){var t,n=mp(e).vNode
if(t=n.props.nodeName,fo.includes(t)&&n.hasAttr("disabled")||lo(n))return!0
for(var r=n.parent,a=[],o=!1;r&&r.shadowId===n.shadowId&&!o&&(a.push(r),"legend"!==r.props.nodeName);){if(void 0!==r._inDisabledFieldset){o=r._inDisabledFieldset
break}"fieldset"===r.props.nodeName&&r.hasAttr("disabled")&&(o=!0),r=r.parent}return a.forEach((function(e){return e._inDisabledFieldset=o})),!!o||"area"!==n.props.nodeName&&!!n.actualNode&&Sa(n)},mo=/^\/\#/,Do=/^#[!/]/
function go(e){var t,r=e.getAttribute("href")
if(!r||"#"===r)return!1
if(mo.test(r))return!0
var a=e.hash,o=e.protocol,i=e.hostname,u=e.port,s=e.pathname
if(Do.test(a))return!1
if("#"===r.charAt(0))return!0
if("string"!=typeof(null===(t=n.location)||void 0===t?void 0:t.origin)||-1===n.location.origin.indexOf("://"))return null
var l,c=n.location.origin+n.location.pathname
return l=i?"".concat(o,"//").concat(i).concat(u?":".concat(u):""):n.location.origin,(l+=s?("/"!==s[0]?"/":"")+s:n.location.pathname)===c}var vo=function(e,t){var n=e.getAttribute(t)
if(!n)return null
if("href"===t&&!go(e))return null;-1!==n.indexOf("#")&&(n=decodeURIComponent(n.substr(n.indexOf("#")+1)))
var r=a.getElementById(n)
return r||((r=a.getElementsByName(n)).length?r[0]:null)}
function bo(e,t){Xa()
for(var r=Math.max(e._stackingOrder.length,t._stackingOrder.length),a=0;a<r;a++){if(void 0===t._stackingOrder[a])return-1
if(void 0===e._stackingOrder[a])return 1
if(t._stackingOrder[a].value>e._stackingOrder[a].value)return 1
if(t._stackingOrder[a].value<e._stackingOrder[a].value)return-1}var o=e.actualNode,i=t.actualNode
if(o.getRootNode&&o.getRootNode()!==i.getRootNode()){for(var u=[];o;)u.push({root:o.getRootNode(),node:o}),o=o.getRootNode().host
for(;i&&!u.find((function(e){return e.root===i.getRootNode()}));)i=i.getRootNode().host
if((o=u.find((function(e){return e.root===i.getRootNode()})).node)===i)return e.actualNode.getRootNode()!==o.getRootNode()?-1:1}var s=n.Node,l=s.DOCUMENT_POSITION_FOLLOWING,c=s.DOCUMENT_POSITION_CONTAINS,d=s.DOCUMENT_POSITION_CONTAINED_BY,p=o.compareDocumentPosition(i),f=p&l?1:-1,h=p&c||p&d,m=yo(e),D=yo(t)
return m===D||h?f:D-m}function yo(e){return-1!==e.getComputedStylePropertyValue("display").indexOf("inline")?2:Fo(e)?1:0}function Fo(e){if(!e)return!1
if(void 0!==e._isFloated)return e._isFloated
if("none"!==e.getComputedStylePropertyValue("float"))return e._isFloated=!0,!0
var t=Fo(e.parent)
return e._isFloated=t,t}var wo={}
function Eo(e,t){var n=e.boundingClientRect,r=t.boundingClientRect,a=function(e,t){var n={}
return[["x","left","right","width"],["y","top","bottom","height"]].forEach((function(r){var a=W(r,4),o=a[0],i=a[1],u=a[2],s=a[3]
if(t[i]<e[i]&&t[u]>e[u])n[o]=e[i]+e[s]/2
else{var l=t[i]+t[s]/2,c=Math.abs(l-e[i]),d=Math.abs(l-e[u])
n[o]=c>=d?e[i]:e[u]}})),n}(n,r)
return function(e,t){var n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y)
return n&&r?Math.sqrt(Math.pow(n,2)+Math.pow(r,2)):n||r}(a,function(e,t,n){var r=e.x,a=e.y
if(function(e,t){var n=e.x,r=e.y
return r>=t.top&&n<=t.right&&r<=t.bottom&&n>=t.left}({x:r,y:a},n)){var o=function(e,t,n){var r,a,o=e.x,i=e.y
return o===t.left&&t.right<n.right?r=t.right:o===t.right&&t.left>n.left&&(r=t.left),i===t.top&&t.bottom<n.bottom?a=t.bottom:i===t.bottom&&t.top>n.top&&(a=t.top),r||a?a?r&&Math.abs(o-r)<Math.abs(i-a)?{x:r,y:i}:{x:o,y:a}:{x:r,y:i}:null}({x:r,y:a},t,n)
if(null!==o)return o
n=t}var i=n,u=i.top,s=i.right,l=i.bottom,c=i.left,d=r>=c&&r<=s,p=a>=u&&a<=l,f=Math.abs(c-r)<Math.abs(s-r)?c:s,h=Math.abs(u-a)<Math.abs(l-a)?u:l
return!d&&p?{x:f,y:a}:d&&!p?{x:r,y:h}:d||p?Math.abs(r-f)<Math.abs(a-h)?{x:f,y:a}:{x:r,y:h}:{x:f,y:h}}(a,n,r))}function Co(e){var t=e.left,r=e.top,a=e.width,o=e.height
return new n.DOMPoint(t+a/2,r+o/2)}function xo(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return!(n.left>=r.right||n.right<=r.left||n.top>=r.bottom||n.bottom<=r.top)&&bo(e,t)>0}function Ao(e,t){var n,r=[e],a=ee(t)
try{var o=function(){var e=n.value
r=r.reduce((function(t,n){return t.concat(function(e,t){var n=e.top,r=e.left,a=e.bottom,o=e.right,i=n<t.bottom&&a>t.top,u=r<t.right&&o>t.left,s=[]
return ko(t.top,n,a)&&u&&s.push({top:n,left:r,bottom:t.top,right:o}),ko(t.right,r,o)&&i&&s.push({top:n,left:t.right,bottom:a,right:o}),ko(t.bottom,n,a)&&u&&s.push({top:t.bottom,right:o,bottom:a,left:r}),ko(t.left,r,o)&&i&&s.push({top:n,left:r,bottom:a,right:t.left}),0===s.length&&s.push(e),s.map(To)}(n,e))}),[])}
for(a.s();!(n=a.n()).done;)o()}catch(e){a.e(e)}finally{a.f()}return r}oe(wo,{getBoundingRect:function(){return Ua},getIntersectionRect:function(){return uo},getOffset:function(){return Eo},getRectCenter:function(){return Co},hasVisualOverlap:function(){return xo},isPointInRect:function(){return $a},rectsOverlap:function(){return Da},splitRects:function(){return Ao}})
var ko=function(e,t,n){return e>t&&e<n}
function To(e){return G({},e,{x:e.left,y:e.top,height:e.bottom-e.top,width:e.right-e.left})}function No(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Co(t),o=e.getCellFromPoint(r)||[],i=Math.floor(r.x),u=Math.floor(r.y),s=o.filter((function(e){return e.clientRects.some((function(e){var t=e.left,n=e.top
return i<Math.floor(t+e.width)&&i>=Math.floor(t)&&u<Math.floor(n+e.height)&&u>=Math.floor(n)}))})),l=e.container
return l&&(s=No(l._grid,l.boundingClientRect,!0).concat(s)),n||(s=s.sort(bo).map((function(e){return e.actualNode})).concat(a.documentElement).filter((function(e,t,n){return n.indexOf(e)===t}))),s}var Bo=function(e){Xa()
var t=$n(e),n=t._grid
return n?No(n,t.boundingClientRect):[]},Ro=function(e){return Lp(e,"*").filter((function(e){var t=e.isFocusable,n=e.actualNode.getAttribute("tabindex")
return(n=n&&!isNaN(parseInt(n,10))?parseInt(n):null)?t&&n>=0:t}))},_o={}
oe(_o,{accessibleText:function(){return Oo},accessibleTextVirtual:function(){return au},autocomplete:function(){return uu},formControlValue:function(){return Zi},formControlValueMethods:function(){return Qi},hasUnicode:function(){return eu},isHumanInterpretable:function(){return iu},isIconLigature:function(){return tu},isValidAutocomplete:function(){return su},label:function(){return pu},labelText:function(){return Ri},labelVirtual:function(){return du},nativeElementType:function(){return fu},nativeTextAlternative:function(){return Ii},nativeTextMethods:function(){return Mi},removeUnicode:function(){return ou},sanitize:function(){return Zo},subtreeText:function(){return Bi},titleText:function(){return Ai},unsupported:function(){return Pi},visible:function(){return cu},visibleTextNodes:function(){return hu},visibleVirtual:function(){return Li}})
var So=function(e,t){e=e.actualNode||e
try{var n=ca(e),r=[],a=e.getAttribute(t)
if(a){a=md(a)
for(var o=0;o<a.length;o++)r.push(n.getElementById(a[o]))}return r}catch(e){throw new TypeError("Cannot resolve id references for non-DOM nodes")}},Oo=function(e,t){var n=$n(e)
return au(n,t)},Mo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=mp(e).vNode
return 1!==(null==n?void 0:n.props.nodeType)||1!==n.props.nodeType||t.inLabelledByContext||t.inControlContext||!n.attr("aria-labelledby")?"":So(n,"aria-labelledby").filter((function(e){return e})).reduce((function(e,r){var a=Oo(r,G({inLabelledByContext:!0,startNode:t.startNode||n},t))
return e?"".concat(e," ").concat(a):a}),"")}
function Io(e){var t=mp(e).vNode
return 1!==(null==t?void 0:t.props.nodeType)?"":t.attr("aria-label")||""}var Po={"aria-activedescendant":{type:"idref",allowEmpty:!0},"aria-atomic":{type:"boolean",global:!0},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"]},"aria-braillelabel":{type:"string",global:!0},"aria-brailleroledescription":{type:"string",global:!0},"aria-busy":{type:"boolean",global:!0},"aria-checked":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-colcount":{type:"int",minValue:-1},"aria-colindex":{type:"int",minValue:1},"aria-colspan":{type:"int",minValue:1},"aria-controls":{type:"idrefs",allowEmpty:!0,global:!0},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],global:!0},"aria-describedby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-description":{type:"string",allowEmpty:!0,global:!0},"aria-details":{type:"idref",allowEmpty:!0,global:!0},"aria-disabled":{type:"boolean",global:!0},"aria-dropeffect":{type:"nmtokens",values:["copy","execute","link","move","none","popup"],global:!0},"aria-errormessage":{type:"idref",allowEmpty:!0,global:!0},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"]},"aria-flowto":{type:"idrefs",allowEmpty:!0,global:!0},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],global:!0},"aria-hidden":{type:"nmtoken",values:["true","false","undefined"],global:!0},"aria-invalid":{type:"nmtoken",values:["grammar","false","spelling","true"],global:!0},"aria-keyshortcuts":{type:"string",allowEmpty:!0,global:!0},"aria-label":{type:"string",allowEmpty:!0,global:!0},"aria-labelledby":{type:"idrefs",allowEmpty:!0,global:!0},"aria-level":{type:"int",minValue:1},"aria-live":{type:"nmtoken",values:["assertive","off","polite"],global:!0},"aria-modal":{type:"boolean"},"aria-multiline":{type:"boolean"},"aria-multiselectable":{type:"boolean"},"aria-orientation":{type:"nmtoken",values:["horizontal","undefined","vertical"]},"aria-owns":{type:"idrefs",allowEmpty:!0,global:!0},"aria-placeholder":{type:"string",allowEmpty:!0},"aria-posinset":{type:"int",minValue:1},"aria-pressed":{type:"nmtoken",values:["false","mixed","true","undefined"]},"aria-readonly":{type:"boolean"},"aria-relevant":{type:"nmtokens",values:["additions","all","removals","text"],global:!0},"aria-required":{type:"boolean"},"aria-roledescription":{type:"string",allowEmpty:!0,global:!0},"aria-rowcount":{type:"int",minValue:-1},"aria-rowindex":{type:"int",minValue:1},"aria-rowspan":{type:"int",minValue:0},"aria-selected":{type:"nmtoken",values:["false","true","undefined"]},"aria-setsize":{type:"int",minValue:-1},"aria-sort":{type:"nmtoken",values:["ascending","descending","none","other"]},"aria-valuemax":{type:"decimal"},"aria-valuemin":{type:"decimal"},"aria-valuenow":{type:"decimal"},"aria-valuetext":{type:"string"}},jo={alert:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},alertdialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["alert","dialog"],accessibleNameRequired:!0},application:{type:"landmark",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["structure"],accessibleNameRequired:!0},article:{type:"structure",allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["document"]},banner:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},blockquote:{type:"structure",superclassRole:["section"]},button:{type:"widget",allowedAttrs:["aria-expanded","aria-pressed"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},caption:{type:"structure",requiredContext:["figure","table","grid","treegrid"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},cell:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-expanded"],superclassRole:["section"],nameFromContent:!0},checkbox:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},code:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},columnheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},combobox:{type:"widget",requiredAttrs:["aria-expanded","aria-controls"],allowedAttrs:["aria-owns","aria-autocomplete","aria-readonly","aria-required","aria-activedescendant","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},command:{type:"abstract",superclassRole:["widget"]},complementary:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},composite:{type:"abstract",superclassRole:["widget"]},contentinfo:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},comment:{type:"structure",allowedAttrs:["aria-level","aria-posinset","aria-setsize"],superclassRole:["article"]},definition:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},deletion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},dialog:{type:"widget",allowedAttrs:["aria-expanded","aria-modal"],superclassRole:["window"],accessibleNameRequired:!0},directory:{type:"structure",deprecated:!0,allowedAttrs:["aria-expanded"],superclassRole:["list"],nameFromContent:!0},document:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["structure"]},emphasis:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},feed:{type:"structure",requiredOwned:["article"],allowedAttrs:["aria-expanded"],superclassRole:["list"]},figure:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},form:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},grid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-level","aria-multiselectable","aria-readonly","aria-activedescendant","aria-colcount","aria-expanded","aria-rowcount"],superclassRole:["composite","table"],accessibleNameRequired:!1},gridcell:{type:"widget",requiredContext:["row"],allowedAttrs:["aria-readonly","aria-required","aria-selected","aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan"],superclassRole:["cell","widget"],nameFromContent:!0},group:{type:"structure",allowedAttrs:["aria-activedescendant","aria-expanded"],superclassRole:["section"]},heading:{type:"structure",requiredAttrs:["aria-level"],allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},img:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!0,childrenPresentational:!0},input:{type:"abstract",superclassRole:["widget"]},insertion:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},landmark:{type:"abstract",superclassRole:["section"]},link:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},list:{type:"structure",requiredOwned:["listitem"],allowedAttrs:["aria-expanded"],superclassRole:["section"]},listbox:{type:"widget",requiredOwned:["group","option"],allowedAttrs:["aria-multiselectable","aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!0},listitem:{type:"structure",requiredContext:["list"],allowedAttrs:["aria-level","aria-posinset","aria-setsize","aria-expanded"],superclassRole:["section"],nameFromContent:!0},log:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},main:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},marquee:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},math:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],childrenPresentational:!0},menu:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"]},menubar:{type:"composite",requiredOwned:["group","menuitemradio","menuitem","menuitemcheckbox","menu","separator"],allowedAttrs:["aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["menu"]},menuitem:{type:"widget",requiredContext:["menu","menubar","group"],allowedAttrs:["aria-posinset","aria-setsize","aria-expanded"],superclassRole:["command"],accessibleNameRequired:!0,nameFromContent:!0},menuitemcheckbox:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["checkbox","menuitem"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},menuitemradio:{type:"widget",requiredContext:["menu","menubar","group"],requiredAttrs:["aria-checked"],allowedAttrs:["aria-expanded","aria-posinset","aria-readonly","aria-setsize"],superclassRole:["menuitemcheckbox","radio"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},meter:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},mark:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},navigation:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},none:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},note:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"]},option:{type:"widget",requiredContext:["group","listbox"],allowedAttrs:["aria-selected","aria-checked","aria-posinset","aria-setsize"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},paragraph:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},presentation:{type:"structure",superclassRole:["structure"],prohibitedAttrs:["aria-label","aria-labelledby"]},progressbar:{type:"widget",allowedAttrs:["aria-expanded","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"],superclassRole:["range"],accessibleNameRequired:!0,childrenPresentational:!0},radio:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-posinset","aria-setsize","aria-required"],superclassRole:["input"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},radiogroup:{type:"composite",allowedAttrs:["aria-readonly","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},range:{type:"abstract",superclassRole:["widget"]},region:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"],accessibleNameRequired:!1},roletype:{type:"abstract",superclassRole:[]},row:{type:"structure",requiredContext:["grid","rowgroup","table","treegrid"],requiredOwned:["cell","columnheader","gridcell","rowheader"],allowedAttrs:["aria-colindex","aria-level","aria-rowindex","aria-selected","aria-activedescendant","aria-expanded","aria-posinset","aria-setsize"],superclassRole:["group","widget"],nameFromContent:!0},rowgroup:{type:"structure",requiredContext:["grid","table","treegrid"],requiredOwned:["row"],superclassRole:["structure"],nameFromContent:!0},rowheader:{type:"structure",requiredContext:["row"],allowedAttrs:["aria-sort","aria-colindex","aria-colspan","aria-expanded","aria-readonly","aria-required","aria-rowindex","aria-rowspan","aria-selected"],superclassRole:["cell","gridcell","sectionhead"],accessibleNameRequired:!1,nameFromContent:!0},scrollbar:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-controls","aria-orientation","aria-valuemax","aria-valuemin","aria-valuetext"],superclassRole:["range"],childrenPresentational:!0},search:{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},searchbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["textbox"],accessibleNameRequired:!0},section:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},sectionhead:{type:"abstract",superclassRole:["structure"],nameFromContent:!0},select:{type:"abstract",superclassRole:["composite","group"]},separator:{type:"structure",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-valuetext"],superclassRole:["structure","widget"],childrenPresentational:!0},slider:{type:"widget",requiredAttrs:["aria-valuenow"],allowedAttrs:["aria-valuemax","aria-valuemin","aria-orientation","aria-readonly","aria-required","aria-valuetext"],superclassRole:["input","range"],accessibleNameRequired:!0,childrenPresentational:!0},spinbutton:{type:"widget",allowedAttrs:["aria-valuemax","aria-valuemin","aria-readonly","aria-required","aria-activedescendant","aria-valuetext","aria-valuenow"],superclassRole:["composite","input","range"],accessibleNameRequired:!0},status:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"]},strong:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},structure:{type:"abstract",superclassRole:["roletype"]},subscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},superscript:{type:"structure",superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},switch:{type:"widget",requiredAttrs:["aria-checked"],allowedAttrs:["aria-readonly","aria-required"],superclassRole:["checkbox"],accessibleNameRequired:!0,nameFromContent:!0,childrenPresentational:!0},suggestion:{type:"structure",requiredOwned:["insertion","deletion"],superclassRole:["section"],prohibitedAttrs:["aria-label","aria-labelledby"]},tab:{type:"widget",requiredContext:["tablist"],allowedAttrs:["aria-posinset","aria-selected","aria-setsize","aria-expanded"],superclassRole:["sectionhead","widget"],nameFromContent:!0,childrenPresentational:!0},table:{type:"structure",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-colcount","aria-rowcount","aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1,nameFromContent:!0},tablist:{type:"composite",requiredOwned:["tab"],allowedAttrs:["aria-level","aria-multiselectable","aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["composite"]},tabpanel:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["section"],accessibleNameRequired:!1},term:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},text:{type:"structure",superclassRole:["section"],nameFromContent:!0},textbox:{type:"widget",allowedAttrs:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-placeholder","aria-readonly","aria-required"],superclassRole:["input"],accessibleNameRequired:!0},time:{type:"structure",superclassRole:["section"]},timer:{type:"widget",allowedAttrs:["aria-expanded"],superclassRole:["status"]},toolbar:{type:"structure",allowedAttrs:["aria-orientation","aria-activedescendant","aria-expanded"],superclassRole:["group"],accessibleNameRequired:!0},tooltip:{type:"structure",allowedAttrs:["aria-expanded"],superclassRole:["section"],nameFromContent:!0},tree:{type:"composite",requiredOwned:["group","treeitem"],allowedAttrs:["aria-multiselectable","aria-required","aria-activedescendant","aria-expanded","aria-orientation"],superclassRole:["select"],accessibleNameRequired:!1},treegrid:{type:"composite",requiredOwned:["rowgroup","row"],allowedAttrs:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-readonly","aria-required","aria-rowcount"],superclassRole:["grid","tree"],accessibleNameRequired:!1},treeitem:{type:"widget",requiredContext:["group","tree"],allowedAttrs:["aria-checked","aria-expanded","aria-level","aria-posinset","aria-selected","aria-setsize"],superclassRole:["listitem","option"],accessibleNameRequired:!0,nameFromContent:!0},widget:{type:"abstract",superclassRole:["roletype"]},window:{type:"abstract",superclassRole:["roletype"]}},qo={ariaAttrs:Po,ariaRoles:G({},jo,{"doc-abstract":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-acknowledgments":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-afterword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-appendix":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-backlink":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-biblioentry":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-bibliography":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-biblioref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-chapter":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-colophon":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-conclusion":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-cover":{type:"img",allowedAttrs:["aria-expanded"],superclassRole:["img"]},"doc-credit":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-credits":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-dedication":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-endnote":{type:"listitem",allowedAttrs:["aria-expanded","aria-level","aria-posinset","aria-setsize"],superclassRole:["listitem"],deprecated:!0},"doc-endnotes":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-epigraph":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-epilogue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-errata":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-example":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-footnote":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-foreword":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossary":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-glossref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-index":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-introduction":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-noteref":{type:"link",allowedAttrs:["aria-expanded"],nameFromContent:!0,superclassRole:["link"]},"doc-notice":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-pagebreak":{type:"separator",allowedAttrs:["aria-expanded","aria-orientation"],superclassRole:["separator"],childrenPresentational:!0},"doc-pagelist":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]},"doc-part":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-preface":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-prologue":{type:"landmark",allowedAttrs:["aria-expanded"],superclassRole:["landmark"]},"doc-pullquote":{type:"none",superclassRole:["none"]},"doc-qna":{type:"section",allowedAttrs:["aria-expanded"],superclassRole:["section"]},"doc-subtitle":{type:"sectionhead",allowedAttrs:["aria-expanded"],superclassRole:["sectionhead"]},"doc-tip":{type:"note",allowedAttrs:["aria-expanded"],superclassRole:["note"]},"doc-toc":{type:"navigation",allowedAttrs:["aria-expanded"],superclassRole:["navigation"]}},{"graphics-document":{type:"structure",superclassRole:["document"],accessibleNameRequired:!0},"graphics-object":{type:"structure",superclassRole:["group"],nameFromContent:!0},"graphics-symbol":{type:"structure",superclassRole:["img"],accessibleNameRequired:!0,childrenPresentational:!0}}),htmlElms:{a:{variant:{href:{matches:"[href]",contentTypes:["interactive","phrasing","flow"],allowedRoles:["button","checkbox","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab","treeitem","doc-backlink","doc-biblioref","doc-glossref","doc-noteref"],namingMethods:["subtreeText"]},default:{contentTypes:["phrasing","flow"],allowedRoles:!0}}},abbr:{contentTypes:["phrasing","flow"],allowedRoles:!0},address:{contentTypes:["flow"],allowedRoles:!0},area:{variant:{href:{matches:"[href]",allowedRoles:!1},default:{allowedRoles:["button","link"]}},contentTypes:["phrasing","flow"],namingMethods:["altText"]},article:{contentTypes:["sectioning","flow"],allowedRoles:["feed","presentation","none","document","application","main","region"],shadowRoot:!0},aside:{contentTypes:["sectioning","flow"],allowedRoles:["feed","note","presentation","none","region","search","doc-dedication","doc-example","doc-footnote","doc-pullquote","doc-tip"]},audio:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"Audio"},b:{contentTypes:["phrasing","flow"],allowedRoles:!0},base:{allowedRoles:!1,noAriaAttrs:!0},bdi:{contentTypes:["phrasing","flow"],allowedRoles:!0},bdo:{contentTypes:["phrasing","flow"],allowedRoles:!0},blockquote:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},body:{allowedRoles:!1,shadowRoot:!0},br:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"],namingMethods:["titleText","singleSpace"]},button:{contentTypes:["interactive","phrasing","flow"],allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"],namingMethods:["subtreeText"]},canvas:{allowedRoles:!0,contentTypes:["embedded","phrasing","flow"],chromiumRole:"Canvas"},caption:{allowedRoles:!1},cite:{contentTypes:["phrasing","flow"],allowedRoles:!0},code:{contentTypes:["phrasing","flow"],allowedRoles:!0},col:{allowedRoles:!1,noAriaAttrs:!0},colgroup:{allowedRoles:!1,noAriaAttrs:!0},data:{contentTypes:["phrasing","flow"],allowedRoles:!0},datalist:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0,implicitAttrs:{"aria-multiselectable":"false"}},dd:{allowedRoles:!1},del:{contentTypes:["phrasing","flow"],allowedRoles:!0},dfn:{contentTypes:["phrasing","flow"],allowedRoles:!0},details:{contentTypes:["interactive","flow"],allowedRoles:!1},dialog:{contentTypes:["flow"],allowedRoles:["alertdialog"]},div:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},dl:{contentTypes:["flow"],allowedRoles:["group","list","presentation","none"],chromiumRole:"DescriptionList"},dt:{allowedRoles:["listitem"]},em:{contentTypes:["phrasing","flow"],allowedRoles:!0},embed:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","presentation","none"],chromiumRole:"EmbeddedObject"},fieldset:{contentTypes:["flow"],allowedRoles:["none","presentation","radiogroup"],namingMethods:["fieldsetLegendText"]},figcaption:{allowedRoles:["group","none","presentation"]},figure:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["figureText","titleText"]},footer:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},form:{contentTypes:["flow"],allowedRoles:["search","none","presentation"]},h1:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"1"}},h2:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"2"}},h3:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"3"}},h4:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"4"}},h5:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"5"}},h6:{contentTypes:["heading","flow"],allowedRoles:["none","presentation","tab","doc-subtitle"],shadowRoot:!0,implicitAttrs:{"aria-level":"6"}},head:{allowedRoles:!1,noAriaAttrs:!0},header:{contentTypes:["flow"],allowedRoles:["group","none","presentation","doc-footnote"],shadowRoot:!0},hgroup:{contentTypes:["heading","flow"],allowedRoles:!0},hr:{contentTypes:["flow"],allowedRoles:["none","presentation","doc-pagebreak"],namingMethods:["titleText","singleSpace"]},html:{allowedRoles:!1,noAriaAttrs:!0},i:{contentTypes:["phrasing","flow"],allowedRoles:!0},iframe:{contentTypes:["interactive","embedded","phrasing","flow"],allowedRoles:["application","document","img","none","presentation"],chromiumRole:"Iframe"},img:{variant:{nonEmptyAlt:{matches:[{attributes:{alt:"/.+/"}},{hasAccessibleName:!0}],allowedRoles:["button","checkbox","link","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","separator","slider","switch","tab","treeitem","doc-cover"]},usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","flow"]},default:{allowedRoles:["presentation","none"],contentTypes:["embedded","flow"]}},namingMethods:["altText"]},input:{variant:{button:{matches:{properties:{type:"button"}},allowedRoles:["checkbox","combobox","link","menuitem","menuitemcheckbox","menuitemradio","option","radio","switch","tab"]},buttonType:{matches:{properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},checkboxPressed:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":"/.*/"}},allowedRoles:["button","menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},checkbox:{matches:{properties:{type:"checkbox"},attributes:{"aria-pressed":null}},allowedRoles:["menuitemcheckbox","option","switch"],implicitAttrs:{"aria-checked":"false"}},noRoles:{matches:{properties:{type:["color","date","datetime-local","file","month","number","password","range","reset","submit","time","week"]}},allowedRoles:!1},hidden:{matches:{properties:{type:"hidden"}},contentTypes:["flow"],allowedRoles:!1,noAriaAttrs:!0},image:{matches:{properties:{type:"image"}},allowedRoles:["link","menuitem","menuitemcheckbox","menuitemradio","radio","switch"],namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},radio:{matches:{properties:{type:"radio"}},allowedRoles:["menuitemradio"],implicitAttrs:{"aria-checked":"false"}},textWithList:{matches:{properties:{type:"text"},attributes:{list:"/.*/"}},allowedRoles:!1},default:{contentTypes:["interactive","flow"],allowedRoles:["combobox","searchbox","spinbutton"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText","placeholderText"]}}},ins:{contentTypes:["phrasing","flow"],allowedRoles:!0},kbd:{contentTypes:["phrasing","flow"],allowedRoles:!0},label:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,chromiumRole:"Label"},legend:{allowedRoles:!1},li:{allowedRoles:["menuitem","menuitemcheckbox","menuitemradio","option","none","presentation","radio","separator","tab","treeitem","doc-biblioentry","doc-endnote"],implicitAttrs:{"aria-setsize":"1","aria-posinset":"1"}},link:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},main:{contentTypes:["flow"],allowedRoles:!1,shadowRoot:!0},map:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},math:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!1},mark:{contentTypes:["phrasing","flow"],allowedRoles:!0},menu:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},meta:{variant:{itemprop:{matches:"[itemprop]",contentTypes:["phrasing","flow"]}},allowedRoles:!1,noAriaAttrs:!0},meter:{contentTypes:["phrasing","flow"],allowedRoles:!1,chromiumRole:"progressbar"},nav:{contentTypes:["sectioning","flow"],allowedRoles:["doc-index","doc-pagelist","doc-toc","menu","menubar","none","presentation","tablist"],shadowRoot:!0},noscript:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},object:{variant:{usemap:{matches:"[usemap]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application","document","img"],chromiumRole:"PluginObject"},ol:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},optgroup:{allowedRoles:!1},option:{allowedRoles:!1,implicitAttrs:{"aria-selected":"false"}},output:{contentTypes:["phrasing","flow"],allowedRoles:!0,namingMethods:["subtreeText"]},p:{contentTypes:["flow"],allowedRoles:!0,shadowRoot:!0},param:{allowedRoles:!1,noAriaAttrs:!0},picture:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},pre:{contentTypes:["flow"],allowedRoles:!0},progress:{contentTypes:["phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuemax":"100","aria-valuemin":"0","aria-valuenow":"0"}},q:{contentTypes:["phrasing","flow"],allowedRoles:!0},rp:{allowedRoles:!0},rt:{allowedRoles:!0},ruby:{contentTypes:["phrasing","flow"],allowedRoles:!0},s:{contentTypes:["phrasing","flow"],allowedRoles:!0},samp:{contentTypes:["phrasing","flow"],allowedRoles:!0},script:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},section:{contentTypes:["sectioning","flow"],allowedRoles:["alert","alertdialog","application","banner","complementary","contentinfo","dialog","document","feed","group","log","main","marquee","navigation","none","note","presentation","search","status","tabpanel","doc-abstract","doc-acknowledgments","doc-afterword","doc-appendix","doc-bibliography","doc-chapter","doc-colophon","doc-conclusion","doc-credit","doc-credits","doc-dedication","doc-endnotes","doc-epigraph","doc-epilogue","doc-errata","doc-example","doc-foreword","doc-glossary","doc-index","doc-introduction","doc-notice","doc-pagelist","doc-part","doc-preface","doc-prologue","doc-pullquote","doc-qna","doc-toc"],shadowRoot:!0},select:{variant:{combobox:{matches:{attributes:{multiple:null,size:[null,"1"]}},allowedRoles:["menu"]},default:{allowedRoles:!1}},contentTypes:["interactive","phrasing","flow"],implicitAttrs:{"aria-valuenow":""},namingMethods:["labelText"]},slot:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},small:{contentTypes:["phrasing","flow"],allowedRoles:!0},source:{allowedRoles:!1,noAriaAttrs:!0},span:{contentTypes:["phrasing","flow"],allowedRoles:!0,shadowRoot:!0},strong:{contentTypes:["phrasing","flow"],allowedRoles:!0},style:{allowedRoles:!1,noAriaAttrs:!0},svg:{contentTypes:["embedded","phrasing","flow"],allowedRoles:!0,chromiumRole:"SVGRoot",namingMethods:["svgTitleText"]},sub:{contentTypes:["phrasing","flow"],allowedRoles:!0},summary:{allowedRoles:!1,namingMethods:["subtreeText"]},sup:{contentTypes:["phrasing","flow"],allowedRoles:!0},table:{contentTypes:["flow"],allowedRoles:!0,namingMethods:["tableCaptionText","tableSummaryText"]},tbody:{allowedRoles:!0},template:{contentTypes:["phrasing","flow"],allowedRoles:!1,noAriaAttrs:!0},textarea:{contentTypes:["interactive","phrasing","flow"],allowedRoles:!1,implicitAttrs:{"aria-valuenow":"","aria-multiline":"true"},namingMethods:["labelText","placeholderText"]},tfoot:{allowedRoles:!0},thead:{allowedRoles:!0},time:{contentTypes:["phrasing","flow"],allowedRoles:!0},title:{allowedRoles:!1,noAriaAttrs:!0},td:{allowedRoles:!0},th:{allowedRoles:!0},tr:{allowedRoles:!0},track:{allowedRoles:!1,noAriaAttrs:!0},u:{contentTypes:["phrasing","flow"],allowedRoles:!0},ul:{contentTypes:["flow"],allowedRoles:["directory","group","listbox","menu","menubar","none","presentation","radiogroup","tablist","toolbar","tree"]},var:{contentTypes:["phrasing","flow"],allowedRoles:!0},video:{variant:{controls:{matches:"[controls]",contentTypes:["interactive","embedded","phrasing","flow"]},default:{contentTypes:["embedded","phrasing","flow"]}},allowedRoles:["application"],chromiumRole:"video"},wbr:{contentTypes:["phrasing","flow"],allowedRoles:["presentation","none"]}},cssColors:{aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},Lo=G({},qo),zo=Lo,Vo=function(e){var t=zo.ariaRoles[e]
return!!t&&!!t.unsupported},Ho=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.allowAbstract,r=t.flagUnsupported,a=void 0!==r&&r,o=zo.ariaRoles[e],i=Vo(e)
return!(!o||a&&i||!n&&"abstract"===o.type)},Uo=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fallback,r=t.abstracts,a=t.dpub
if(1!==(e=e instanceof Qt?e:$n(e)).props.nodeType)return null
var o=(e.attr("role")||"").trim().toLowerCase()
return(n?md(o):[o]).find((function(e){return!(!a&&"doc-"===e.substr(0,4))&&Ho(e,{allowAbstract:r})}))||null},$o=function(e){return Object.keys(zo.htmlElms).filter((function(t){var n=zo.htmlElms[t]
return n.contentTypes?n.contentTypes.includes(e):!!n.variant&&!(!n.variant.default||!n.variant.default.contentTypes)&&n.variant.default.contentTypes.includes(e)}))},Go=function(){return Un.get("globalAriaAttrs",(function(){return Object.keys(zo.ariaAttrs).filter((function(e){return zo.ariaAttrs[e].global}))}))},Wo=ma((function(e){for(var t=[],n=e.rows,r=0,a=n.length;r<a;r++){var o=n[r].cells
t[r]=t[r]||[]
for(var i=0,u=0,s=o.length;u<s;u++)for(var l=0;l<o[u].colSpan;l++){for(var c=o[u].getAttribute("rowspan"),d=0===parseInt(c)||0===o[u].rowspan?n.length:o[u].rowSpan,p=0;p<d;p++){for(t[r+p]=t[r+p]||[];t[r+p][i];)i++
t[r+p][i]=o[u]}i++}}return t})),Yo=ma((function(e,t){var n,r
for(t||(t=Wo(fa(e,"table"))),n=0;n<t.length;n++)if(t[n]&&-1!==(r=t[n].indexOf(e)))return{x:r,y:n}})),Ko=function(e){var t=mp(e),n=t.vNode,r=t.domNode,a=n.attr("scope"),o=n.attr("role")
if(!["td","th"].includes(n.props.nodeName))throw new TypeError("Expected TD or TH element")
if("columnheader"===o)return"col"
if("rowheader"===o)return"row"
if("col"===a||"row"===a)return a
if("th"!==n.props.nodeName)return!1
if(!n.actualNode)return"auto"
var i=Wo(fa(r,"table")),u=Yo(r,i)
return i[u.y].reduce((function(e,t){return e&&"TH"===t.nodeName.toUpperCase()}),!0)?"col":i.map((function(e){return e[u.x]})).reduce((function(e,t){return e&&t&&"TH"===t.nodeName.toUpperCase()}),!0)?"row":"auto"},Qo=function(e){return-1!==["col","auto"].indexOf(Ko(e))},Xo=function(e){return["row","auto"].includes(Ko(e))},Zo=function(e){return e?e.replace(/\r\n/g,"\n").replace(/\u00A0/g," ").replace(/[\s]{2,}/g," ").trim():""},Jo=function(e){var t=mp(e).vNode
if(!t||ho(t))return!1
switch(t.props.nodeName){case"a":case"area":if(t.hasAttr("href"))return!0
break
case"input":return"hidden"!==t.props.type
case"textarea":case"select":case"summary":case"button":return!0
case"details":return!Lp(t,"summary").length}return!1}
function ei(e){var t=mp(e).vNode
if(1!==t.props.nodeType)return!1
if(ho(t))return!1
if(Jo(t))return!0
var n=t.attr("tabindex")
return!(!n||isNaN(parseInt(n,10)))}var ti=$o("sectioning").map((function(e){return"".concat(e,":not([role])")})).join(", ")+" , main:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]"
function ni(e){var t=Zo(Mo(e)),n=Zo(Io(e))
return!(!t&&!n)}var ri={a:function(e){return e.hasAttr("href")?"link":null},area:function(e){return e.hasAttr("href")?"link":null},article:"article",aside:"complementary",body:"document",button:"button",datalist:"listbox",dd:"definition",dfn:"term",details:"group",dialog:"dialog",dt:"term",fieldset:"group",figure:"figure",footer:function(e){return cr(e,ti)?null:"contentinfo"},form:function(e){return ni(e)?"form":null},h1:"heading",h2:"heading",h3:"heading",h4:"heading",h5:"heading",h6:"heading",header:function(e){return cr(e,ti)?null:"banner"},hr:"separator",img:function(e){var t=e.hasAttr("alt")&&!e.attr("alt"),n=Go().find((function(t){return e.hasAttr(t)}))
return!t||n||ei(e)?"img":"presentation"},input:function(e){var t
if(e.hasAttr("list")){var n=So(e.actualNode,"list").filter((function(e){return!!e}))[0]
t=n&&"datalist"===n.nodeName.toLowerCase()}switch(e.props.type){case"checkbox":return"checkbox"
case"number":return"spinbutton"
case"radio":return"radio"
case"range":return"slider"
case"search":return t?"combobox":"searchbox"
case"button":case"image":case"reset":case"submit":return"button"
case"text":case"tel":case"url":case"email":case"":return t?"combobox":"textbox"
default:return"textbox"}},li:"listitem",main:"main",math:"math",menu:"list",nav:"navigation",ol:"list",optgroup:"group",option:"option",output:"status",progress:"progressbar",section:function(e){return ni(e)?"region":null},select:function(e){return e.hasAttr("multiple")||parseInt(e.attr("size"))>1?"listbox":"combobox"},summary:"button",table:"table",tbody:"rowgroup",td:function(e){var t=cr(e,"table"),n=Uo(t)
return["grid","treegrid"].includes(n)?"gridcell":"cell"},textarea:"textbox",tfoot:"rowgroup",th:function(e){return Qo(e)?"columnheader":Xo(e)?"rowheader":void 0},thead:"rowgroup",tr:"row",ul:"list"},ai=function(e,t){var n=o(t)
if(Array.isArray(t)&&void 0!==e)return t.includes(e)
if("function"===n)return!!t(e)
if(null!=e){if(t instanceof RegExp)return t.test(e)
if(/^\/.*\/$/.test(t)){var r=t.substring(1,t.length-1)
return new RegExp(r).test(e)}}return t===e},oi=function(e,t){return ai(!!au(e),t)},ii=function(e,t){if("object"!==o(t)||Array.isArray(t)||t instanceof RegExp)throw new Error("Expect matcher to be an object")
return Object.keys(t).every((function(n){return ai(e(n),t[n])}))},ui=function(e,t){return e=mp(e).vNode,ii((function(t){return e.attr(t)}),t)},si=function(e,t){return!!t(e)},li=function(e,t){return ai(Uo(e),t)},ci=function(e,t){return ai(bi(e),t)},di=function(e,t){return e=mp(e).vNode,ai(e.props.nodeName,t)},pi=function(e,t){return e=mp(e).vNode,ii((function(t){return e.props[t]}),t)},fi=function(e,t){return ai(Ci(e),t)},hi={hasAccessibleName:oi,attributes:ui,condition:si,explicitRole:li,implicitRole:ci,nodeName:di,properties:pi,semanticRole:fi},mi=function e(t,n){return t=mp(t).vNode,Array.isArray(n)?n.some((function(n){return e(t,n)})):"string"==typeof n?lr(t,n):Object.keys(n).every((function(e){if(!hi[e])throw new Error('Unknown matcher type "'.concat(e,'"'))
var r=hi[e],a=n[e]
return r(t,a)}))},Di=function(e,t){return mi(e,t)}
Di.hasAccessibleName=oi,Di.attributes=ui,Di.condition=si,Di.explicitRole=li,Di.fromDefinition=mi,Di.fromFunction=ii,Di.fromPrimative=ai,Di.implicitRole=ci,Di.nodeName=di,Di.properties=pi,Di.semanticRole=fi
var gi=Di,vi=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).noMatchAccessibleName,n=void 0!==t&&t,r=zo.htmlElms[e.props.nodeName]
if(!r)return{}
if(!r.variant)return r
var a=r.variant,o=H(r,l)
for(var i in a)if(a.hasOwnProperty(i)&&"default"!==i){for(var u=a[i],s=u.matches,d=H(u,c),p=Array.isArray(s)?s:[s],f=0;f<p.length&&n;f++)if(p[f].hasOwnProperty("hasAccessibleName"))return r
if(gi(e,s))for(var h in d)d.hasOwnProperty(h)&&(o[h]=d[h])}for(var m in a.default)a.default.hasOwnProperty(m)&&void 0===o[m]&&(o[m]=a.default[m])
return o},bi=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).chromium,n=e instanceof Qt?e:$n(e)
if(e=n.actualNode,!n)throw new ReferenceError("Cannot get implicit role of a node outside the current scope.")
var r=n.props.nodeName,a=ri[r]
return!a&&t?vi(n).chromiumRole||null:"function"==typeof a?a(n):a||null},yi={td:["tr"],th:["tr"],tr:["thead","tbody","tfoot","table"],thead:["table"],tbody:["table"],tfoot:["table"],li:["ol","ul"],dt:["dl","div"],dd:["dl","div"],div:["dl"]}
function Fi(e,t){var n=yi[e.props.nodeName]
if(!n)return null
if(!e.parent){if(!e.actualNode)return null
throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.")}if(!n.includes(e.parent.props.nodeName))return null
var r=Uo(e.parent,t)
return["none","presentation"].includes(r)&&!Ei(e.parent)?r:r?null:Fi(e.parent,t)}function wi(e,t){var n=t.chromium,r=H(t,d),a=bi(e,{chromium:n})
return a?Fi(e,r)||a:null}function Ei(e){return Go().some((function(t){return e.hasAttr(t)}))||ei(e)}var Ci=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noPresentational,r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noImplicit,r=H(t,p),a=mp(e).vNode
if(1!==a.props.nodeType)return null
var o=Uo(a,r)
return o?["presentation","none"].includes(o)&&Ei(a)?n?null:wi(a,r):o:n?null:wi(a,r)}(e,H(t,f))
return n&&["presentation","none"].includes(r)?null:r},xi=["iframe"],Ai=function(e){var t=mp(e).vNode
return 1===t.props.nodeType&&e.hasAttr("title")?!Di(t,xi)&&["none","presentation"].includes(Ci(t))?"":t.attr("title"):""},ki=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).strict
if(1!==(e=e instanceof Qt?e:$n(e)).props.nodeType)return!1
var n=Ci(e),r=zo.ariaRoles[n]
return!(!r||!r.nameFromContent)||!t&&(!r||["presentation","none"].includes(n))},Ti=function(e){var t=e.actualNode,n=e.children
if(!n)throw new Error("getOwnedVirtual requires a virtual node")
if(e.hasAttr("aria-owns")){var r=So(t,"aria-owns").filter((function(e){return!!e})).map((function(e){return i.utils.getNodeFromTree(e)}))
return[].concat(U(n),U(r))}return U(n)},Ni=$o("phrasing").concat(["#text"]),Bi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=au.alreadyProcessed
t.startNode=t.startNode||e
var r=t,a=r.strict,o=r.inControlContext,i=r.inLabelledByContext,u=vi(e,{noMatchAccessibleName:!0}).contentTypes
return n(e,t)||1!==e.props.nodeType||null!=u&&u.includes("embedded")?"":ki(e,{strict:a})||t.subtreeDescendant?(a||(t=G({subtreeDescendant:!o&&!i},t)),Ti(e).reduce((function(e,n){return function(e,t,n){var r=t.props.nodeName,a=au(t,n)
return a?(Ni.includes(r)||(" "!==a[0]&&(a+=" "),e&&" "!==e[e.length-1]&&(a=" "+a)),e+a):e}(e,n,t)}),"")):""},Ri=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=au.alreadyProcessed
if(t.inControlContext||t.inLabelledByContext||n(e,t))return""
t.startNode||(t.startNode=e)
var r,a=G({inControlContext:!0},t),o=function(e){if(!e.attr("id"))return[]
if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
return da({elm:"label",attr:"for",value:e.attr("id"),context:e.actualNode})}(e),i=cr(e,"label")
return i?(r=[].concat(U(o),[i.actualNode])).sort(hp):r=o,r.map((function(e){return Oo(e,a)})).filter((function(e){return""!==e})).join(" ")},_i={submit:"Submit",image:"Submit",reset:"Reset",button:""}
function Si(e,t){return t.attr(e)||""}function Oi(e,t,n){var r=t.actualNode,a=[e=e.toLowerCase(),r.nodeName.toLowerCase()].join(","),o=r.querySelector(a)
return o&&o.nodeName.toLowerCase()===e?Oo(o,n):""}var Mi={valueText:function(e){return e.actualNode.value||""},buttonDefaultText:function(e){var t=e.actualNode
return _i[t.type]||""},tableCaptionText:Oi.bind(null,"caption"),figureText:Oi.bind(null,"figcaption"),svgTitleText:Oi.bind(null,"title"),fieldsetLegendText:Oi.bind(null,"legend"),altText:Si.bind(null,"alt"),tableSummaryText:Si.bind(null,"summary"),titleText:Ai,subtreeText:Bi,labelText:Ri,singleSpace:function(){return" "},placeholderText:Si.bind(null,"placeholder")},Ii=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode
if(1!==e.props.nodeType||["presentation","none"].includes(Ci(e)))return""
var r=function(e){return(vi(e,{noMatchAccessibleName:!0}).namingMethods||[]).map((function(e){return Mi[e]}))}(e).reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&i.log(r||"{empty-value}",n,t),r},Pi={accessibleNameFromFieldValue:["combobox","listbox","progressbar"]}
function ji(e){return e=mp(e).vNode,qi(e)}var qi=ma((function(e,t){return!xa(e)&&!lo(e,{skipAncestors:!0,isAncestor:t})&&(e.actualNode&&"area"===e.props.nodeName?!Ba(e,qi):!Sa(e,{skipAncestors:!0,isAncestor:t})&&(!e.parent||qi(e.parent,!0)))})),Li=function e(t,n,r){var a=mp(t).vNode,o=n?ji:Va,i=!t.actualNode||t.actualNode&&o(t),u=a.children.map((function(t){var a=t.props,o=a.nodeType,u=a.nodeValue
if(3===o){if(u&&i)return u}else if(!r)return e(t,n)})).join("")
return Zo(u)},zi=["button","checkbox","color","file","hidden","image","password","radio","reset","submit"],Vi=function(e){var t=(e=e instanceof Qt?e:$n(e)).props.nodeName
return"textarea"===t||"input"===t&&!zi.includes((e.attr("type")||"").toLowerCase())},Hi=function(e){return"select"===(e=e instanceof Qt?e:$n(e)).props.nodeName},Ui=function(e){return"textbox"===Uo(e)},$i=function(e){return"listbox"===Uo(e)},Gi=function(e){return"combobox"===Uo(e)},Wi=["progressbar","scrollbar","slider","spinbutton"],Yi=function(e){var t=Uo(e)
return Wi.includes(t)},Ki=["textbox","progressbar","scrollbar","slider","spinbutton","combobox","listbox"],Qi={nativeTextboxValue:function(e){var t=mp(e).vNode
return Vi(t)&&t.props.value||""},nativeSelectValue:function(e){var t=mp(e).vNode
if(!Hi(t))return""
var n=Lp(t,"option"),r=n.filter((function(e){return e.props.selected}))
return r.length||r.push(n[0]),r.map((function(e){return Li(e)})).join(" ")||""},ariaTextboxValue:function(e){var t=mp(e),n=t.vNode,r=t.domNode
return Ui(n)?!r||r&&!Sa(r)?Li(n,!0):r.textContent:""},ariaListboxValue:Xi,ariaComboboxValue:function(e,t){var n=mp(e).vNode
if(!Gi(n))return""
var r=Ti(n).filter((function(e){return"listbox"===Ci(e)}))[0]
return r?Xi(r,t):""},ariaRangeValue:function(e){var t=mp(e).vNode
if(!Yi(t)||!t.hasAttr("aria-valuenow"))return""
var n=+t.attr("aria-valuenow")
return isNaN(n)?"0":String(n)}}
function Xi(e,t){var n=mp(e).vNode
if(!$i(n))return""
var r=Ti(n).filter((function(e){return"option"===Ci(e)&&"true"===e.attr("aria-selected")}))
return 0===r.length?"":au(r[0],t)}var Zi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.actualNode,r=Pi.accessibleNameFromFieldValue||[],a=Ci(e)
if(t.startNode===e||!Ki.includes(a)||r.includes(a))return""
var o=Object.keys(Qi).map((function(e){return Qi[e]})).reduce((function(n,r){return n||r(e,t)}),"")
return t.debug&&Yt(o||"{empty-value}",n,t),o},Ji=function(){return/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g},eu=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n?/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g.test(e):r?/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g.test(e)||/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g.test(e):!!a&&/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g.test(e)},tu=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,o=e.actualNode.nodeValue.trim()
if(!Zo(o)||eu(o,{emoji:!0,nonBmp:!0}))return!1
var i=Un.get("canvasContext",(function(){return a.createElement("canvas").getContext("2d",{willReadFrequently:!0})})),u=i.canvas
Un.get("fonts")||Un.set("fonts",{})
var s=Un.get("fonts"),l=n.getComputedStyle(e.parent.actualNode).getPropertyValue("font-family")
s[l]||(s[l]={occurrences:0,numLigatures:0})
var c=s[l]
if(c.occurrences>=r){if(c.numLigatures/c.occurrences==1)return!0
if(0===c.numLigatures)return!1}c.occurrences++
var d=30,p="".concat(d,"px ").concat(l)
i.font=p
var f=o.charAt(0),h=i.measureText(f).width
if(h<30){var m=30/h
h*=m,p="".concat(d*=m,"px ").concat(l)}u.width=h,u.height=d,i.font=p,i.textAlign="left",i.textBaseline="top",i.fillText(f,0,0)
var D=new Uint32Array(i.getImageData(0,0,h,d).data.buffer)
if(!D.some((function(e){return e})))return c.numLigatures++,!0
i.clearRect(0,0,h,d),i.fillText(o,0,0)
var g=new Uint32Array(i.getImageData(0,0,h,d).data.buffer),v=D.reduce((function(e,t,n){return 0===t&&0===g[n]||0!==t&&0!==g[n]?e:++e}),0),b=o.split("").reduce((function(e,t){return e+i.measureText(t).width}),0),y=i.measureText(o).width
return v/D.length>=t&&1-y/b>=t&&(c.numLigatures++,!0)}
function nu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(t=function(e,t){return t.startNode||(t=G({startNode:e},t)),1===e.props.nodeType&&t.inLabelledByContext&&void 0===t.includeHidden&&(t=G({includeHidden:!ji(e)},t)),t}(e,t),function(e,t){return!!e&&1===e.props.nodeType&&!t.includeHidden&&!ji(e)}(e,t))return""
if(function(e,t){var n,r=t.ignoreIconLigature,a=t.pixelThreshold,o=null!==(n=t.occurrenceThreshold)&&void 0!==n?n:t.occuranceThreshold
return!(3!==e.props.nodeType||!r)&&tu(e,a,o)}(e,t))return""
var n=[Mo,Io,Ii,Zi,Bi,ru,Ai].reduce((function(n,r){return t.startNode===e&&(n=Zo(n)),""!==n?n:r(e,t)}),"")
return t.debug&&i.log(n||"{empty-value}",e.actualNode,t),n}function ru(e){return 3!==e.props.nodeType?"":e.props.nodeValue}nu.alreadyProcessed=function(e,t){return t.processed=t.processed||[],!!t.processed.includes(e)||(t.processed.push(e),!1)}
var au=nu,ou=function(e,t){var n=t.emoji,r=t.nonBmp,a=t.punctuations
return n&&(e=e.replace(/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC3\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC08\uDC26](?:\u200D\u2B1B)?|[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF-\uDDB3\uDDBC\uDDBD]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,"")),r&&(e=(e=e.replace(/[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g,"")).replace(/[\uDB80-\uDBBF][\uDC00-\uDFFF]/g,"")),a&&(e=e.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g,"")),e},iu=function(e){if(!e.length)return 0
if(["x","i"].includes(e))return 0
var t=ou(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return Zo(t)?1:0},uu={stateTerms:["on","off"],standaloneTerms:["name","honorific-prefix","given-name","additional-name","family-name","honorific-suffix","nickname","username","new-password","current-password","organization-title","organization","street-address","address-line1","address-line2","address-line3","address-level4","address-level3","address-level2","address-level1","country","country-name","postal-code","cc-name","cc-given-name","cc-additional-name","cc-family-name","cc-number","cc-exp","cc-exp-month","cc-exp-year","cc-csc","cc-type","transaction-currency","transaction-amount","language","bday","bday-day","bday-month","bday-year","sex","url","photo","one-time-code"],qualifiers:["home","work","mobile","fax","pager"],qualifiedTerms:["tel","tel-country-code","tel-national","tel-area-code","tel-local","tel-local-prefix","tel-local-suffix","tel-extension","email","impp"],locations:["billing","shipping"]},su=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.looseTyped,r=void 0!==n&&n,a=t.stateTerms,o=void 0===a?[]:a,i=t.locations,u=void 0===i?[]:i,s=t.qualifiers,l=void 0===s?[]:s,c=t.standaloneTerms,d=void 0===c?[]:c,p=t.qualifiedTerms,f=void 0===p?[]:p
if(e=e.toLowerCase().trim(),(o=o.concat(uu.stateTerms)).includes(e)||""===e)return!0
l=l.concat(uu.qualifiers),u=u.concat(uu.locations),d=d.concat(uu.standaloneTerms),f=f.concat(uu.qualifiedTerms)
var h=e.split(/\s+/g)
if("webauthn"===h[h.length-1]&&(h.pop(),0===h.length))return!1
if(!r&&(h[0].length>8&&"section-"===h[0].substr(0,8)&&h.shift(),u.includes(h[0])&&h.shift(),l.includes(h[0])&&(h.shift(),d=[]),1!==h.length))return!1
var m=h[h.length-1]
return d.includes(m)||f.includes(m)},lu=function(e){var t
return e.attr("aria-labelledby")&&(t=So(e.actualNode,"aria-labelledby").map((function(e){var t=$n(e)
return t?Li(t):""})).join(" ").trim())||(t=e.attr("aria-label"))&&(t=Zo(t))?t:null},cu=function(e,t,n){return e=$n(e),Li(e,t,n)},du=function(e){var t,n
if(n=lu(e))return n
if(e.attr("id")){if(!e.actualNode)throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes")
var r=fn(e.attr("id"))
if(n=(t=ca(e.actualNode).querySelector('label[for="'+r+'"]'))&&cu(t,!0))return n}return(n=(t=cr(e,"label"))&&Li(t,!0))||null},pu=function(e){return e=$n(e),du(e)},fu=[{matches:[{nodeName:"textarea"},{nodeName:"input",properties:{type:["text","password","search","tel","email","url"]}}],namingMethods:"labelText"},{matches:{nodeName:"input",properties:{type:["button","submit","reset"]}},namingMethods:["valueText","titleText","buttonDefaultText"]},{matches:{nodeName:"input",properties:{type:"image"}},namingMethods:["altText","valueText","labelText","titleText","buttonDefaultText"]},{matches:"button",namingMethods:"subtreeText"},{matches:"fieldset",namingMethods:"fieldsetLegendText"},{matches:"OUTPUT",namingMethods:"subtreeText"},{matches:[{nodeName:"select"},{nodeName:"input",properties:{type:/^(?!text|password|search|tel|email|url|button|submit|reset)/}}],namingMethods:"labelText"},{matches:"summary",namingMethods:"subtreeText"},{matches:"figure",namingMethods:["figureText","titleText"]},{matches:"img",namingMethods:"altText"},{matches:"table",namingMethods:["tableCaptionText","tableSummaryText"]},{matches:["hr","br"],namingMethods:["titleText","singleSpace"]}],hu=function e(t){var n=Va(t),r=[]
return t.children.forEach((function(t){3===t.actualNode.nodeType?n&&r.push(t):r=r.concat(e(t))})),r},mu=ma((function(e){var t=$n(e),n=t.boundingClientRect,r=[],o=va(t)
return e.childNodes.forEach((function(e){if(3===e.nodeType&&""!==Zo(e.nodeValue)){var t=function(e){var t=a.createRange()
return t.selectNodeContents(e),Array.from(t.getClientRects())}(e);(function(e,t){return e.some((function(e){return!$a(Co(e),t)}))})(t,n)||r.push.apply(r,U(function(e,t){var n=[]
return e.forEach((function(e){if(!(e.width<1||e.height<1)){var r=t.reduce((function(e,t){return e&&uo(e,t.boundingClientRect)}),e)
r&&n.push(r)}})),n}(t,o)))}})),r.length?r:[n]})),Du=function(e){Xa()
var t=$n(e)._grid
return t?mu(e).map((function(e){return No(t,e)})):[]},gu=["checkbox","img","meter","progressbar","scrollbar","radio","slider","spinbutton","textbox"],vu=function(e){var t=mp(e).vNode,n=i.commons.aria.getExplicitRole(t)
if(n)return-1!==gu.indexOf(n)
switch(t.props.nodeName){case"img":case"iframe":case"object":case"video":case"audio":case"canvas":case"svg":case"math":case"button":case"select":case"textarea":case"keygen":case"progress":case"meter":return!0
case"input":return"hidden"!==t.props.type
default:return!1}},bu=["head","title","template","script","style","iframe","object","video","audio","noscript"]
function yu(e){return!bu.includes(e.props.nodeName)&&e.children.some((function(e){var t=e.props
return 3===t.nodeType&&t.nodeValue.trim()}))}var Fu=function e(t,n,r){return yu(t)||vu(t.actualNode)||!r&&!!lu(t)||!n&&t.children.some((function(t){return 1===t.actualNode.nodeType&&e(t)}))},wu=function(e,t,n){return e=$n(e),Fu(e,t,n)}
function Eu(e){return!(void 0!==e.children&&!yu(e))||(1===e.props.nodeType&&vu(e)?!!i.commons.text.accessibleTextVirtual(e):e.children.some((function(e){return!e.attr("lang")&&Eu(e)&&!Sa(e)})))}var Cu=function(e){return parseInt(e.getAttribute("tabindex"),10)>-1&&ei(e)&&!Jo(e)}
function xu(e,t){var n=mp(e),r=n.vNode,a=n.domNode
return r?(void 0===r._isHiddenWithCSS&&(r._isHiddenWithCSS=Au(a,t)),r._isHiddenWithCSS):Au(a,t)}function Au(e,t){if(9===e.nodeType)return!1
if(11===e.nodeType&&(e=e.host),["STYLE","SCRIPT"].includes(e.nodeName.toUpperCase()))return!1
var r=n.getComputedStyle(e,null)
if(!r)throw new Error("Style does not exist for the given element.")
if("none"===r.getPropertyValue("display"))return!0
var a=["hidden","collapse"],o=r.getPropertyValue("visibility")
if(a.includes(o)&&!t)return!0
if(a.includes(o)&&t&&a.includes(t))return!0
var i=Ia(e)
return!(!i||a.includes(o))&&xu(i,o)}var ku=xu,Tu=function(e){var t=e.doctype
return null!==t&&"html"===t.name&&!t.publicId&&!t.systemId}
function Nu(e){var t=mp(e).vNode
return 1===t.props.nodeType&&!(parseInt(t.attr("tabindex",10))<=-1)&&ei(t)}var Bu=function(e){var t;(e instanceof Qt||null!==(t=n)&&void 0!==t&&t.Node&&e instanceof n.Node)&&(e=i.commons.aria.getRole(e))
var r=zo.ariaRoles[e]
return(null==r?void 0:r.type)||null}
function Ru(e,t){!1!==t(e.actualNode)&&e.children.forEach((function(e){return Ru(e,t)}))}var _u=["block","list-item","table","flex","grid","inline-block"]
function Su(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return _u.includes(t)||"table-"===t.substr(0,6)}var Ou=function(e,t){if(Su(e))return!1
var n=function(e){for(var t=Ia(e);t&&!Su(t);)t=Ia(t)
return $n(t)}(e),r="",a="",o=0
return Ru(n,(function(t){if(2===o)return!1
if(3===t.nodeType&&(r+=t.nodeValue),1===t.nodeType){var n=(t.nodeName||"").toUpperCase()
if(t===e&&(o=1),["BR","HR"].includes(n))0===o?(r="",a=""):o=2
else{if("none"===t.style.display||"hidden"===t.style.overflow||!["",null,"none"].includes(t.style.float)||!["",null,"relative"].includes(t.style.position))return!1
if("widget"===Bu(t))return a+=t.textContent,!1}}})),r=Zo(r),null!=t&&t.noLengthCompare?0!==r.length:(a=Zo(a),r.length>a.length)},Mu=function(e){var t=(e=e||{}).modalPercent||.75
if(Un.get("isModalOpen"))return Un.get("isModalOpen")
if(Np(i._tree[0],"dialog, [role=dialog], [aria-modal=true]",Va).length)return Un.set("isModalOpen",!0),!0
for(var r=qa(n),u=r.width*t,s=r.height*t,l=(r.width-u)/2,c=(r.height-s)/2,d=[{x:l,y:c},{x:r.width-l,y:c},{x:r.width/2,y:r.height/2},{x:l,y:r.height-c},{x:r.width-l,y:r.height-c}].map((function(e){return Array.from(a.elementsFromPoint(e.x,e.y))})),p=function(e){var t=d[e].find((function(e){var t=n.getComputedStyle(e)
return parseInt(t.width,10)>=u&&parseInt(t.height,10)>=s&&"none"!==t.getPropertyValue("pointer-events")&&("absolute"===t.position||"fixed"===t.position)}))
if(t&&d.every((function(e){return e.includes(t)})))return Un.set("isModalOpen",!0),{v:!0}},f=0;f<d.length;f++){var h=p(f)
if("object"===o(h))return h.v}Un.set("isModalOpen",void 0)}
function Iu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=e.ownerDocument.createRange()
n.setStart(e,0),n.setEnd(e,e.childNodes.length)
var r,a=0,o=0,i=ee(n.getClientRects())
try{for(i.s();!(r=i.n()).done;){var u=r.value
if(!(u.height<=t))if(a>u.top+t)a=Math.max(a,u.bottom)
else{if(0!==o)return!0
a=u.bottom,o++}}}catch(e){i.e(e)}finally{i.f()}return!1}var Pu=function(e){return e instanceof n.Node},ju={},qu={set:function(e,t){if("string"!=typeof e)throw new Error("Incomplete data: key must be a string")
return t&&(ju[e]=t),ju[e]},get:function(e){return ju[e]},clear:function(){ju={}}},Lu=qu,zu=function(e,t){var r=e.nodeName.toUpperCase()
if(["IMG","CANVAS","OBJECT","IFRAME","VIDEO","SVG"].includes(r))return Lu.set("bgColor","imgNode"),!0
var a=(t=t||n.getComputedStyle(e)).getPropertyValue("background-image"),o="none"!==a
if(o){var i=/gradient/.test(a)
Lu.set("bgColor",i?"bgGradient":"bgImage")}return o},Vu={}
oe(Vu,{Colorjs:function(){return Mc},CssSelectorParser:function(){return Hu.CssSelectorParser},doT:function(){return Uu.default},emojiRegexText:function(){return Ji},memoize:function(){return $u.default}})
var Hu=ie(de()),Uu=ie(Vt()),$u=ie(zt())
function Gu(e,t){var n=e.length
Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map((function(e){return[e]})))
var r=t[0].length,a=t[0].map((function(e,n){return t.map((function(e){return e[n]}))})),o=e.map((function(e){return a.map((function(t){var n=0
if(!Array.isArray(e)){var r,a=ee(t)
try{for(a.s();!(r=a.n()).done;){var o=r.value
n+=e*o}}catch(e){a.e(e)}finally{a.f()}return n}for(var i=0;i<e.length;i++)n+=e[i]*(t[i]||0)
return n}))}))
return 1===n&&(o=o[0]),1===r?o.map((function(e){return e[0]})):o}function Wu(e){return"string"===Yu(e)}function Yu(e){return(Object.prototype.toString.call(e).match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function Ku(e,t){e=+e,t=+t
var n=(Math.floor(e)+"").length
if(t>n)return+e.toFixed(t-n)
var r=Math.pow(10,n-t)
return Math.round(e/r)*r}function Qu(e){if(e){e=e.trim()
var t=/^-?[\d.]+$/,n=e.match(/^([a-z]+)\((.+?)\)$/i)
if(n){var r=[]
return n[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g,(function(e,n){/%$/.test(n)?(n=new Number(n.slice(0,-1)/100)).type="<percentage>":/deg$/.test(n)?((n=new Number(+n.slice(0,-3))).type="<angle>",n.unit="deg"):t.test(n)&&((n=new Number(n)).type="<number>"),e.startsWith("/")&&((n=n instanceof Number?n:new Number(n)).alpha=!0),r.push(n)})),{name:n[1].toLowerCase(),rawName:n[1],rawArgs:n[2],args:r}}}}function Xu(e){return e[e.length-1]}function Zu(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function Ju(e,t,n){return(n-e)/(t-e)}function es(e,t,n){return Zu(t[0],t[1],Ju(e[0],e[1],n))}function ts(e){return e.map((function(e){return e.split("|").map((function(e){var t=(e=e.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/)
if(t){var n=new String(t[1])
return n.range=[+t[2],+t[3]],n}return e}))}))}var ns=Object.freeze({__proto__:null,isString:Wu,type:Yu,toPrecision:Ku,parseFunction:Qu,last:Xu,interpolate:Zu,interpolateInv:Ju,mapRange:es,parseCoordGrammar:ts,multiplyMatrices:Gu}),rs=function(){function e(){Q(this,e)}return Z(e,[{key:"add",value:function(e,t,n){if("string"==typeof arguments[0])(Array.isArray(e)?e:[e]).forEach((function(e){this[e]=this[e]||[],t&&this[e][n?"unshift":"push"](t)}),this)
else for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1])}},{key:"run",value:function(e,t){this[e]=this[e]||[],this[e].forEach((function(e){e.call(t&&t.context?t.context:t,t)}))}}]),e}(),as=new rs,os={gamut_mapping:"lch.c",precision:5,deltaE:"76"},is={D50:[.3457/.3585,1,.2958/.3585],D65:[.3127/.329,1,.3583/.329]}
function us(e){return Array.isArray(e)?e:is[e]}function ss(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
if(e=us(e),t=us(t),!e||!t)throw new TypeError("Missing white point to convert ".concat(e?"":"from").concat(e||t?"":"/").concat(t?"":"to"))
if(e===t)return n
var a={W1:e,W2:t,XYZ:n,options:r}
if(as.run("chromatic-adaptation-start",a),a.M||(a.W1===is.D65&&a.W2===is.D50?a.M=[[1.0479298208405488,.022946793341019088,-.05019222954313557],[.029627815688159344,.990434484573249,-.01707382502938514],[-.009243058152591178,.015055144896577895,.7518742899580008]]:a.W1===is.D50&&a.W2===is.D65&&(a.M=[[.9554734527042182,-.023098536874261423,.0632593086610217],[-.028369706963208136,1.0099954580058226,.021041398966943008],[.012314001688319899,-.020507696433477912,1.3303659366080753]])),as.run("chromatic-adaptation-end",a),a.M)return Gu(a.M,a.XYZ)
throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}var ls=(e=new WeakSet,t=new WeakMap,R=new WeakSet,function(){function n(r){var a,o,i,u,s,l,c
Q(this,n),P(this,R),P(this,e),I(this,t,{writable:!0,value:void 0}),this.id=r.id,this.name=r.name,this.base=r.base?n.get(r.base):null,this.aliases=r.aliases,this.base&&(this.fromBase=r.fromBase,this.toBase=r.toBase)
var d=null!==(a=r.coords)&&void 0!==a?a:this.base.coords
this.coords=d
var p=null!==(o=null!==(i=r.white)&&void 0!==i?i:this.base.white)&&void 0!==o?o:"D65"
for(var f in this.white=us(p),this.formats=null!==(u=r.formats)&&void 0!==u?u:{},this.formats){var h=this.formats[f]
h.type||(h.type="function"),h.name||(h.name=f)}!r.cssId||null!==(s=this.formats.functions)&&void 0!==s&&s.color?null===(l=this.formats)||void 0===l||!l.color||null!==(c=this.formats)&&void 0!==c&&c.color.id||(this.formats.color.id=this.id):(this.formats.color={id:r.cssId},Object.defineProperty(this,"cssId",{value:r.cssId})),this.referred=r.referred,z(this,t,L(this,R,ds).call(this).reverse()),as.run("colorspace-init-end",this)}return Z(n,[{key:"inGamut",value:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).epsilon,n=void 0===t?75e-6:t
if(this.isPolar)return e=this.toBase(e),this.base.inGamut(e,{epsilon:n})
var r=Object.values(this.coords)
return e.every((function(e,t){var a=r[t]
if("angle"!==a.type&&a.range){if(Number.isNaN(e))return!0
var o=W(a.range,2),i=o[0],u=o[1]
return(void 0===i||e>=i-n)&&(void 0===u||e<=u+n)}return!0}))}},{key:"cssId",get:function(){var e,t
return(null===(e=this.formats.functions)||void 0===e||null===(t=e.color)||void 0===t?void 0:t.id)||this.id}},{key:"isPolar",get:function(){for(var e in this.coords)if("angle"===this.coords[e].type)return!0
return!1}},{key:"getFormat",value:function(t){return"object"===o(t)?t=L(this,e,cs).call(this,t):(n="default"===t?Object.values(this.formats)[0]:this.formats[t])?n=L(this,e,cs).call(this,n):null
var n}},{key:"to",value:function(e,r){if(1===arguments.length){var a=[e.space,e.coords]
e=a[0],r=a[1]}if(this===(e=n.get(e)))return r
r=r.map((function(e){return Number.isNaN(e)?0:e}))
for(var o,i,u=q(this,t),s=q(e,t),l=0;l<u.length&&u[l]===s[l];l++)o=u[l],i=l
if(!o)throw new Error("Cannot convert between color spaces ".concat(this," and ").concat(e,": no connection space was found"))
for(var c=u.length-1;c>i;c--)r=u[c].toBase(r)
for(var d=i+1;d<s.length;d++)r=s[d].fromBase(r)
return r}},{key:"from",value:function(e,t){if(1===arguments.length){var r=[e.space,e.coords]
e=r[0],t=r[1]}return(e=n.get(e)).to(this,t)}},{key:"toString",value:function(){return"".concat(this.name," (").concat(this.id,")")}},{key:"getMinCoords",value:function(){var e=[]
for(var t in this.coords){var n,r=this.coords[t],a=r.range||r.refRange
e.push(null!==(n=null==a?void 0:a.min)&&void 0!==n?n:0)}return e}}],[{key:"all",get:function(){return U(new Set(Object.values(n.registry)))}},{key:"register",value:function(e,t){if(1===arguments.length&&(e=(t=arguments[0]).id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error("Duplicate color space registration: '".concat(e,"'"))
if(this.registry[e]=t,1===arguments.length&&t.aliases){var n,r=ee(t.aliases)
try{for(r.s();!(n=r.n()).done;){var a=n.value
this.register(a,t)}}catch(e){r.e(e)}finally{r.f()}}return t}},{key:"get",value:function(e){if(!e||e instanceof n)return e
if("string"===Yu(e)){var t=n.registry[e.toLowerCase()]
if(!t)throw new TypeError('No color space found with id = "'.concat(e,'"'))
return t}for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o]
if(a.length)return n.get.apply(n,a)
throw new TypeError("".concat(e," is not a valid color space"))}},{key:"resolveCoord",value:function(e,t){var r,a,o=Yu(e)
if("string"===o)if(e.includes(".")){var i=W(e.split("."),2)
r=i[0],a=i[1]}else r=void 0,a=e
else if(Array.isArray(e)){var u=W(e,2)
r=u[0],a=u[1]}else r=e.space,a=e.coordId
if((r=n.get(r))||(r=t),!r)throw new TypeError("Cannot resolve coordinate reference ".concat(e,": No color space specified and relative references are not allowed here"))
if("number"===(o=Yu(a))||"string"===o&&a>=0){var s=Object.entries(r.coords)[a]
if(s)return G({space:r,id:s[0],index:a},s[1])}r=n.get(r)
var l=a.toLowerCase(),c=0
for(var d in r.coords){var p,f=r.coords[d]
if(d.toLowerCase()===l||(null===(p=f.name)||void 0===p?void 0:p.toLowerCase())===l)return G({space:r,id:d,index:c},f)
c++}throw new TypeError('No "'.concat(a,'" coordinate found in ').concat(r.name,". Its coordinates are: ").concat(Object.keys(r.coords).join(", ")))}}]),n}())
function cs(e){if(e.coords&&!e.coordGrammar){e.type||(e.type="function"),e.name||(e.name="color"),e.coordGrammar=ts(e.coords)
var t=Object.entries(this.coords).map((function(t,n){var r=W(t,2),a=(r[0],r[1]),o=e.coordGrammar[n][0],i=a.range||a.refRange,u=o.range,s=""
return"<percentage>"==o?(u=[0,100],s="%"):"<angle>"==o&&(s="deg"),{fromRange:i,toRange:u,suffix:s}}))
e.serializeCoords=function(e,n){return e.map((function(e,r){var a=t[r],o=a.fromRange,i=a.toRange,u=a.suffix
return o&&i&&(e=es(o,i,e)),e=Ku(e,n),u&&(e+=u),e}))}}return e}function ds(){for(var e=[this],t=this;t=t.base;)e.push(t)
return e}var ps=ls
ue(ps,"registry",{}),ue(ps,"DEFAULT_FORMAT",{type:"functions",name:"color"})
var fs=new ps({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),hs=function(e){B(n,e)
var t=_(n)
function n(e){var r,a,o,i
return Q(this,n),e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=fs),e.toXYZ_M&&e.fromXYZ_M&&(null!==(o=e.toBase)&&void 0!==o||(e.toBase=function(t){var n=Gu(e.toXYZ_M,t)
return a.white!==a.base.white&&(n=ss(a.white,a.base.white,n)),n}),null!==(i=e.fromBase)&&void 0!==i||(e.fromBase=function(t){return t=ss(a.base.white,a.white,t),Gu(e.fromXYZ_M,t)})),null!==(r=e.referred)&&void 0!==r||(e.referred="display"),a=t.call(this,e)}return Z(n)}(ps)
function ms(e){var t,n={str:null===(t=String(e))||void 0===t?void 0:t.trim()}
if(as.run("parse-start",n),n.color)return n.color
if(n.parsed=Qu(n.str),n.parsed){var r=function(){var e=n.parsed.name
if("color"===e){var t,r=n.parsed.args.shift(),a=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1,i=ee(ps.all)
try{for(i.s();!(t=i.n()).done;){var u,s=t.value,l=s.getFormat("color")
if(l&&(r===l.id||null!==(u=l.ids)&&void 0!==u&&u.includes(r))){var c=function(){var e=Object.keys(s.coords).length,t=Array(e).fill(0)
return t.forEach((function(e,r){return t[r]=n.parsed.args[r]||0})),{v:{v:{spaceId:s.id,coords:t,alpha:a}}}}()
if("object"===o(c))return c.v}}}catch(e){i.e(e)}finally{i.f()}var d=""
if(r in ps.registry){var p,f,h,m=null===(p=ps.registry[r].formats)||void 0===p||null===(f=p.functions)||void 0===f||null===(h=f.color)||void 0===h?void 0:h.id
m&&(d="Did you mean color(".concat(m,")?"))}throw new TypeError("Cannot parse color(".concat(r,"). ")+(d||"Missing a plugin?"))}var D,g=ee(ps.all)
try{var v=function(){var t=D.value,r=t.getFormat(e)
if(r&&"function"===r.type){var a=1;(r.lastAlpha||Xu(n.parsed.args).alpha)&&(a=n.parsed.args.pop())
var o=n.parsed.args
return r.coordGrammar&&Object.entries(t.coords).forEach((function(t,n){var a,i=W(t,2),u=i[0],s=i[1],l=r.coordGrammar[n],c=null===(a=o[n])||void 0===a?void 0:a.type
if(!(l=l.find((function(e){return e==c})))){var d=s.name||u
throw new TypeError("".concat(c," not allowed for ").concat(d," in ").concat(e,"()"))}var p=l.range
"<percentage>"===c&&(p||(p=[0,1]))
var f=s.range||s.refRange
p&&f&&(o[n]=es(p,f,o[n]))})),{v:{v:{spaceId:t.id,coords:o,alpha:a}}}}}
for(g.s();!(D=g.n()).done;){var b=v()
if("object"===o(b))return b.v}}catch(e){g.e(e)}finally{g.f()}}()
if("object"===o(r))return r.v}else{var a,i=ee(ps.all)
try{for(i.s();!(a=i.n()).done;){var u=a.value
for(var s in u.formats){var l=u.formats[s]
if("custom"===l.type&&(!l.test||l.test(n.str))){var c,d=l.parse(n.str)
if(d)return null!==(c=d.alpha)&&void 0!==c||(d.alpha=1),d}}}}catch(e){i.e(e)}finally{i.f()}}throw new TypeError("Could not parse ".concat(e," as a color. Missing a plugin?"))}function Ds(e){if(!e)throw new TypeError("Empty color reference")
Wu(e)&&(e=ms(e))
var t=e.space||e.spaceId
return t instanceof ps||(e.space=ps.get(t)),void 0===e.alpha&&(e.alpha=1),e}function gs(e,t){return(t=ps.get(t)).from(e)}function vs(e,t){var n=ps.resolveCoord(t,e.space),r=n.space,a=n.index
return gs(e,r)[a]}function bs(e,t,n){return t=ps.get(t),e.coords=t.to(e.space,n),e}function ys(e,t,n){if(e=Ds(e),2===arguments.length&&"object"===Yu(arguments[1])){var r=arguments[1]
for(var a in r)ys(e,a,r[a])}else{"function"==typeof n&&(n=n(vs(e,t)))
var o=ps.resolveCoord(t,e.space),i=o.space,u=o.index,s=gs(e,i)
s[u]=n,bs(e,i,s)}return e}var Fs=new ps({id:"xyz-d50",name:"XYZ D50",white:"D50",base:fs,fromBase:function(e){return ss(fs.white,"D50",e)},toBase:function(e){return ss("D50",fs.white,e)},formats:{color:{}}}),ws=24/116,Es=24389/27,Cs=is.D50,xs=new ps({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Cs,base:Fs,fromBase:function(e){var t=e.map((function(e,t){return e/Cs[t]})).map((function(e){return e>.008856451679035631?Math.cbrt(e):(Es*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>ws?Math.pow(t[0],3):(116*t[0]-16)/Es,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/Es,t[2]>ws?Math.pow(t[2],3):(116*t[2]-16)/Es].map((function(e,t){return e*Cs[t]}))},formats:{lab:{coords:["<number> | <percentage>","<number>","<number>"]}}})
function As(e){return(e%360+360)%360}var ks=new ps({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:xs,fromBase:function(e){var t,n=W(e,3),r=n[0],a=n[1],o=n[2]
return t=Math.abs(a)<.02&&Math.abs(o)<.02?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),As(t)]},toBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2]
return r<0&&(r=0),isNaN(a)&&(a=0),[n,r*Math.cos(a*Math.PI/180),r*Math.sin(a*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),Ts=Math.pow(25,7),Ns=Math.PI,Bs=180/Ns,Rs=Ns/180
function _s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.kL,a=void 0===r?1:r,o=n.kC,i=void 0===o?1:o,u=n.kH,s=void 0===u?1:u,l=W(xs.from(e),3),c=l[0],d=l[1],p=l[2],f=ks.from(xs,[c,d,p])[1],h=W(xs.from(t),3),m=h[0],D=h[1],g=h[2],v=ks.from(xs,[m,D,g])[1]
f<0&&(f=0),v<0&&(v=0)
var b=(f+v)/2,y=Math.pow(b,7),F=.5*(1-Math.sqrt(y/(y+Ts))),w=(1+F)*d,E=(1+F)*D,C=Math.sqrt(Math.pow(w,2)+Math.pow(p,2)),x=Math.sqrt(Math.pow(E,2)+Math.pow(g,2)),A=0===w&&0===p?0:Math.atan2(p,w),k=0===E&&0===g?0:Math.atan2(g,E)
A<0&&(A+=2*Ns),k<0&&(k+=2*Ns)
var T,N=m-c,B=x-C,R=(k*=Bs)-(A*=Bs),_=A+k,S=Math.abs(R)
C*x==0?T=0:S<=180?T=R:R>180?T=R-360:R<-180?T=R+360:console.log("the unthinkable has happened")
var O,M=2*Math.sqrt(x*C)*Math.sin(T*Rs/2),I=(c+m)/2,P=(C+x)/2,j=Math.pow(P,7)
O=C*x==0?_:S<=180?_/2:_<360?(_+360)/2:(_-360)/2
var q=Math.pow(I-50,2),L=1+.015*q/Math.sqrt(20+q),z=1+.045*P,V=1
V-=.17*Math.cos((O-30)*Rs),V+=.24*Math.cos(2*O*Rs),V+=.32*Math.cos((3*O+6)*Rs)
var H=1+.015*P*(V-=.2*Math.cos((4*O-63)*Rs)),U=30*Math.exp(-1*Math.pow((O-275)/25,2)),$=2*Math.sqrt(j/(j+Ts)),G=-1*Math.sin(2*U*Rs)*$,Y=Math.pow(N/(a*L),2)
return Y+=Math.pow(B/(i*z),2),Y+=Math.pow(M/(s*H),2),Y+=G*(B/(i*z))*(M/(s*H)),Math.sqrt(Y)}var Ss=75e-6
function Os(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.space,n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).epsilon,r=void 0===n?Ss:n
e=Ds(e),t=ps.get(t)
var a=e.coords
return t!==e.space&&(a=t.from(e)),t.inGamut(a,{epsilon:r})}function Ms(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Is(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.method,r=void 0===n?os.gamut_mapping:n,a=t.space,o=void 0===a?e.space:a
if(Wu(arguments[1])&&(o=arguments[1]),Os(e,o=ps.get(o),{epsilon:0}))return e
var i=Ps(e,o)
if("clip"!==r&&!Os(e,o)){var u=Is(Ms(i),{method:"clip",space:o})
if(_s(e,u)>2){for(var s=ps.resolveCoord(r),l=s.space,c=s.id,d=Ps(i,l),p=(s.range||s.refRange)[0],f=vs(d,c);f-p>.01;){var h=Ms(d)
_s(d,h=Is(h,{space:o,method:"clip"}))-2<.01?p=vs(d,c):f=vs(d,c),ys(d,c,(p+f)/2)}i=Ps(d,o)}else i=u}if("clip"===r||!Os(i,o,{epsilon:0})){var m=Object.values(o.coords).map((function(e){return e.range||[]}))
i.coords=i.coords.map((function(e,t){var n=W(m[t],2),r=n[0],a=n[1]
return void 0!==r&&(e=Math.max(r,e)),void 0!==a&&(e=Math.min(e,a)),e}))}return o!==e.space&&(i=Ps(i,e.space)),e.coords=i.coords,e}function Ps(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).inGamut
e=Ds(e)
var r=(t=ps.get(t)).from(e),a={space:t,coords:r,alpha:e.alpha}
return n&&(a=Is(a)),a}function js(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a.precision,i=void 0===o?os.precision:o,u=a.format,s=void 0===u?"default":u,l=a.inGamut,c=void 0===l||l,d=H(a,h),p=s
s=null!==(t=null!==(n=(e=Ds(e)).space.getFormat(s))&&void 0!==n?n:e.space.getFormat("default"))&&void 0!==t?t:ps.DEFAULT_FORMAT,c||(c=s.toGamut)
var f=e.coords
if(f=f.map((function(e){return e||0})),c&&!Os(e)&&(f=Is(Ms(e),!0===c?void 0:c).coords),"custom"===s.type){if(d.precision=i,!s.serialize)throw new TypeError("format ".concat(p," can only be used to parse colors, not for serialization"))
r=s.serialize(f,e.alpha,d)}else{var m=s.name||"color"
s.serializeCoords?f=s.serializeCoords(f,i):null!==i&&(f=f.map((function(e){return Ku(e,i)})))
var D=U(f)
if("color"===m){var g,v=s.id||(null===(g=s.ids)||void 0===g?void 0:g[0])||e.space.id
D.unshift(v)}var b=e.alpha
null!==i&&(b=Ku(b,i))
var y=e.alpha<1&&!s.noAlpha?"".concat(s.commas?",":" /"," ").concat(b):""
r="".concat(m,"(").concat(D.join(s.commas?", ":" ")).concat(y,")")}return r}Is.returns="color",Ps.returns="color"
var qs=new hs({id:"rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],fromXYZ_M:[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],formats:{color:{}}}),Ls=1.09929682680944,zs=.018053968510807,Vs=new hs({id:"rec2020",name:"REC.2020",base:qs,toBase:function(e){return e.map((function(e){return e<4.5*zs?e/4.5:Math.pow((e+Ls-1)/Ls,1/.45)}))},fromBase:function(e){return e.map((function(e){return e>=zs?Ls*Math.pow(e,.45)-(Ls-1):4.5*e}))},formats:{color:{}}}),Hs=new hs({id:"p3-linear",name:"Linear P3",white:"D65",toXYZ_M:[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],fromXYZ_M:[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]]}),Us=new hs({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],fromXYZ_M:[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],formats:{color:{}}}),$s={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[.6,50/255,.8],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,.6],lightslategrey:[119/255,136/255,.6],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[.4,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,.8],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[.4,.2,.6],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Gs=Array(3).fill("<percentage> | <number>[0, 255]"),Ws=Array(3).fill("<number>[0, 255]"),Ys=new hs({id:"srgb",name:"sRGB",base:Us,fromBase:function(e){return e.map((function(e){var t=e<0?-1:1,n=e*t
return n>.0031308?t*(1.055*Math.pow(n,1/2.4)-.055):12.92*e}))},toBase:function(e){return e.map((function(e){var t=e<0?-1:1,n=e*t
return n<.04045?e/12.92:t*Math.pow((n+.055)/1.055,2.4)}))},formats:{rgb:{coords:Gs},rgb_number:{name:"rgb",commas:!0,coords:Ws,noAlpha:!0},color:{},rgba:{coords:Gs,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ws},hex:{type:"custom",toGamut:!0,test:function(e){return/^#([a-f0-9]{3,4}){1,2}$/i.test(e)},parse:function(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"))
var t=[]
return e.replace(/[a-f0-9]{2}/gi,(function(e){t.push(parseInt(e,16)/255)})),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:function(e,t){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).collapse,r=void 0===n||n
t<1&&e.push(t),e=e.map((function(e){return Math.round(255*e)}))
var a=r&&e.every((function(e){return e%17==0}))
return"#"+e.map((function(e){return a?(e/17).toString(16):e.toString(16).padStart(2,"0")})).join("")}},keyword:{type:"custom",test:function(e){return/^[a-z]+$/i.test(e)},parse:function(e){var t={spaceId:"srgb",coords:null,alpha:1}
if("transparent"===(e=e.toLowerCase())?(t.coords=$s.black,t.alpha=0):t.coords=$s[e],t.coords)return t}}}}),Ks=new hs({id:"p3",name:"P3",base:Hs,fromBase:Ys.fromBase,toBase:Ys.toBase,formats:{color:{id:"display-p3"}}})
if(os.display_space=Ys,"undefined"!=typeof CSS&&CSS.supports)for(var Qs=0,Xs=[xs,Vs,Ks];Qs<Xs.length;Qs++){var Zs=Xs[Qs],Js=Zs.getMinCoords(),el=js({space:Zs,coords:Js,alpha:1})
if(CSS.supports("color",el)){os.display_space=Zs
break}}function tl(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.space,r=void 0===n?os.display_space:n,a=H(t,m),o=js(e,a)
if("undefined"==typeof CSS||CSS.supports("color",o)||!os.display_space)(o=new String(o)).color=e
else{var i=Ps(e,r);(o=new String(js(i,a))).color=i}return o}function nl(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"lab",r=(n=ps.get(n)).from(e),a=n.from(t)
return Math.sqrt(r.reduce((function(e,t,n){var r=a[n]
return isNaN(t)||isNaN(r)?e:e+Math.pow(r-t,2)}),0))}function rl(e){return vs(e,[fs,"y"])}function al(e,t){ys(e,[fs,"y"],t)}var ol=Object.freeze({__proto__:null,getLuminance:rl,setLuminance:al,register:function(e){Object.defineProperty(e.prototype,"luminance",{get:function(){return rl(this)},set:function(e){al(this,e)}})}})
function il(e){return e>=.022?e:e+Math.pow(.022-e,1.414)}function ul(e){var t=e<0?-1:1,n=Math.abs(e)
return t*Math.pow(n,2.4)}var sl=24/116,ll=24389/27,cl=is.D65,dl=new ps({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"L"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:cl,base:fs,fromBase:function(e){var t=e.map((function(e,t){return e/cl[t]})).map((function(e){return e>.008856451679035631?Math.cbrt(e):(ll*e+16)/116}))
return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase:function(e){var t=[]
return t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200,[t[0]>sl?Math.pow(t[0],3):(116*t[0]-16)/ll,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ll,t[2]>sl?Math.pow(t[2],3):(116*t[2]-16)/ll].map((function(e,t){return e*cl[t]}))},formats:{"lab-d65":{coords:["<number> | <percentage>","<number>","<number>"]}}}),pl=.5*Math.pow(5,.5)+.5,fl=Object.freeze({__proto__:null,contrastWCAG21:function(e,t){e=Ds(e),t=Ds(t)
var n=Math.max(rl(e),0),r=Math.max(rl(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return(n+.05)/(r+.05)},contrastAPCA:function(e,t){var n,r,a,o
t=Ds(t),e=Ds(e)
var i=W((t=Ps(t,"srgb")).coords,3)
r=i[0],a=i[1],o=i[2]
var u=.2126729*ul(r)+.7151522*ul(a)+.072175*ul(o),s=W((e=Ps(e,"srgb")).coords,3)
r=s[0],a=s[1],o=s[2]
var l=.2126729*ul(r)+.7151522*ul(a)+.072175*ul(o),c=il(u),d=il(l),p=d>c
return n=Math.abs(d-c)<5e-4?0:p?1.14*(Math.pow(d,.56)-Math.pow(c,.57)):1.14*(Math.pow(d,.65)-Math.pow(c,.62)),100*(Math.abs(n)<.1?0:n>0?n-.027:n+.027)},contrastMichelson:function(e,t){e=Ds(e),t=Ds(t)
var n=Math.max(rl(e),0),r=Math.max(rl(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}var o=n+r
return 0===o?0:(n-r)/o},contrastWeber:function(e,t){e=Ds(e),t=Ds(t)
var n=Math.max(rl(e),0),r=Math.max(rl(t),0)
if(r>n){var a=[r,n]
n=a[0],r=a[1]}return 0===r?5e4:(n-r)/r},contrastLstar:function(e,t){e=Ds(e),t=Ds(t)
var n=vs(e,[xs,"l"]),r=vs(t,[xs,"l"])
return Math.abs(n-r)},contrastDeltaPhi:function(e,t){e=Ds(e),t=Ds(t)
var n=vs(e,[dl,"l"]),r=vs(t,[dl,"l"]),a=Math.abs(Math.pow(n,pl)-Math.pow(r,pl)),o=Math.pow(a,1/pl)*Math.SQRT2-40
return o<7.5?0:o}})
function hl(e){var t=W(gs(e,fs),3),n=t[0],r=t[1],a=n+15*r+3*t[2]
return[4*n/a,9*r/a]}function ml(e){var t=W(gs(e,fs),3),n=t[0],r=t[1],a=n+r+t[2]
return[n/a,r/a]}var Dl=Object.freeze({__proto__:null,uv:hl,xy:ml,register:function(e){Object.defineProperty(e.prototype,"uv",{get:function(){return hl(this)}}),Object.defineProperty(e.prototype,"xy",{get:function(){return ml(this)}})}}),gl=Math.PI/180,vl=new ps({id:"xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:fs,fromBase:function(e){return e.map((function(e){return Math.max(203*e,0)}))},toBase:function(e){return e.map((function(e){return Math.max(e/203,0)}))}}),bl=1.15,yl=.66,Fl=2610/Math.pow(2,14),wl=Math.pow(2,14)/2610,El=3424/Math.pow(2,12),Cl=2413/Math.pow(2,7),xl=2392/Math.pow(2,7),Al=1.7*2523/Math.pow(2,5),kl=Math.pow(2,5)/(1.7*2523),Tl=-.56,Nl=16295499532821565e-27,Bl=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Rl=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],_l=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Sl=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],Ol=new ps({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:vl,fromBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2],o=Gu(Bl,[bl*n-(bl-1)*a,yl*r-(yl-1)*n,a]).map((function(e){var t=El+Cl*Math.pow(e/1e4,Fl),n=1+xl*Math.pow(e/1e4,Fl)
return Math.pow(t/n,Al)})),i=W(Gu(_l,o),3),u=i[0],s=i[1],l=i[2]
return[(1+Tl)*u/(1+Tl*u)-Nl,s,l]},toBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2],o=Gu(Sl,[(n+Nl)/(1+Tl-Tl*(n+Nl)),r,a]).map((function(e){var t=El-Math.pow(e,kl),n=xl*Math.pow(e,kl)-Cl
return 1e4*Math.pow(t/n,wl)})),i=W(Gu(Rl,o),3),u=i[0],s=i[1],l=i[2],c=(u+(bl-1)*l)/bl
return[c,(s+(yl-1)*c)/yl,l]},formats:{color:{}}}),Ml=new ps({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:Ol,fromBase:function(e){var t,n=W(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),As(t)]},toBase:function(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]},formats:{color:{}}}),Il=.8359375,Pl=2413/128,jl=18.6875,ql=2610/16384,Ll=32/2523,zl=[[.3592,.6976,-.0358],[-.1922,1.1004,.0755],[.007,.0749,.8434]],Vl=[[.5,.5,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],Hl=[[.9999888965628402,.008605050147287059,.11103437159861648],[1.00001110343716,-.008605050147287059,-.11103437159861648],[1.0000320633910054,.56004913547279,-.3206339100541203]],Ul=[[2.0701800566956137,-1.326456876103021,.20661600684785517],[.3649882500326575,.6804673628522352,-.04542175307585323],[-.04959554223893211,-.04942116118675749,1.1879959417328034]],$l=new ps({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:vl,fromBase:function(e){return t=Gu(zl,e).map((function(e){var t=Il+Pl*Math.pow(e/1e4,ql),n=1+jl*Math.pow(e/1e4,ql)
return Math.pow(t/n,78.84375)})),Gu(Vl,t)
var t},toBase:function(e){var t=function(e){return Gu(Hl,e).map((function(e){var t=Math.max(Math.pow(e,Ll)-Il,0),n=Pl-jl*Math.pow(e,Ll)
return 1e4*Math.pow(t/n,6.277394636015326)}))}(e)
return Gu(Ul,t)},formats:{color:{}}}),Gl=[[.8190224432164319,.3619062562801221,-.12887378261216414],[.0329836671980271,.9292868468965546,.03614466816999844],[.048177199566046255,.26423952494422764,.6335478258136937]],Wl=[[1.2268798733741557,-.5578149965554813,.28139105017721583],[-.04057576262431372,1.1122868293970594,-.07171106666151701],[-.07637294974672142,-.4214933239627914,1.5869240244272418]],Yl=[[.2104542553,.793617785,-.0040720468],[1.9779984951,-2.428592205,.4505937099],[.0259040371,.7827717662,-.808675766]],Kl=[[.9999999984505198,.39633779217376786,.2158037580607588],[1.0000000088817609,-.10556134232365635,-.06385417477170591],[1.0000000546724108,-.08948418209496575,-1.2914855378640917]],Ql=new ps({id:"oklab",name:"OKLab",coords:{l:{refRange:[0,1],name:"L"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:fs,fromBase:function(e){var t=Gu(Gl,e).map((function(e){return Math.cbrt(e)}))
return Gu(Yl,t)},toBase:function(e){var t=Gu(Kl,e).map((function(e){return Math.pow(e,3)}))
return Gu(Wl,t)},formats:{oklab:{coords:["<number> | <percentage>","<number>","<number>"]}}}),Xl=Object.freeze({__proto__:null,deltaE76:function(e,t){return nl(e,t,"lab")},deltaECMC:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.l,a=void 0===r?2:r,o=n.c,i=void 0===o?1:o,u=W(xs.from(e),3),s=u[0],l=u[1],c=u[2],d=W(ks.from(xs,[s,l,c]),3),p=d[1],f=d[2],h=W(xs.from(t),3),m=h[0],D=h[1],g=h[2],v=ks.from(xs,[m,D,g])[1]
p<0&&(p=0),v<0&&(v=0)
var b=s-m,y=p-v,F=l-D,w=c-g,E=Math.pow(F,2)+Math.pow(w,2)-Math.pow(y,2),C=.511
s>=16&&(C=.040975*s/(1+.01765*s))
var x,A=.0638*p/(1+.0131*p)+.638
Number.isNaN(f)&&(f=0),x=f>=164&&f<=345?.56+Math.abs(.2*Math.cos((f+168)*gl)):.36+Math.abs(.4*Math.cos((f+35)*gl))
var k=Math.pow(p,4),T=Math.sqrt(k/(k+1900)),N=A*(T*x+1-T),B=Math.pow(b/(a*C),2)
return B+=Math.pow(y/(i*A),2),B+=E/Math.pow(N,2),Math.sqrt(B)},deltaE2000:_s,deltaEJz:function(e,t){var n=W(Ml.from(e),3),r=n[0],a=n[1],o=n[2],i=W(Ml.from(t),3),u=i[0],s=i[1],l=i[2],c=r-u,d=a-s
Number.isNaN(o)&&Number.isNaN(l)?(o=0,l=0):Number.isNaN(o)?o=l:Number.isNaN(l)&&(l=o)
var p=o-l,f=2*Math.sqrt(a*s)*Math.sin(p/2*(Math.PI/180))
return Math.sqrt(Math.pow(c,2)+Math.pow(d,2)+Math.pow(f,2))},deltaEITP:function(e,t){var n=W($l.from(e),3),r=n[0],a=n[1],o=n[2],i=W($l.from(t),3),u=i[0],s=i[1],l=i[2]
return 720*Math.sqrt(Math.pow(r-u,2)+.25*Math.pow(a-s,2)+Math.pow(o-l,2))},deltaEOK:function(e,t){var n=W(Ql.from(e),3),r=n[0],a=n[1],o=n[2],i=W(Ql.from(t),3),u=r-i[0],s=a-i[1],l=o-i[2]
return Math.sqrt(Math.pow(u,2)+Math.pow(s,2)+Math.pow(l,2))}})
function Zl(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Wu(n)&&(n={method:n})
var r=n,a=r.method,o=void 0===a?os.deltaE:a,i=H(r,g)
for(var u in e=Ds(e),t=Ds(t),Xl)if("deltae"+o.toLowerCase()===u.toLowerCase())return Xl[u](e,t,i)
throw new TypeError("Unknown deltaE method: ".concat(o))}var Jl=Object.freeze({__proto__:null,lighten:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return ys(e,[ps.get("oklch","lch"),"l"],(function(e){return e*(1+t)}))},darken:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.25
return ys(e,[ps.get("oklch","lch"),"l"],(function(e){return e*(1-t)}))}})
function ec(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=[Ds(e),Ds(t)]
if(e=a[0],t=a[1],"object"===Yu(n)){var o=[.5,n]
n=o[0],r=o[1]}var i=r
return nc(e,t,{space:i.space,outputSpace:i.outputSpace,premultiplied:i.premultiplied})(n)}function tc(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(rc(e)){r=t
var a=W((n=e).rangeArgs.colors,2)
e=a[0],t=a[1]}var o=r,i=o.maxDeltaE,u=o.deltaEMethod,s=o.steps,l=void 0===s?2:s,c=o.maxSteps,d=void 0===c?1e3:c,p=H(o,v)
if(!n){var f=[Ds(e),Ds(t)]
n=nc(e=f[0],t=f[1],p)}var h=Zl(e,t),m=i>0?Math.max(l,Math.ceil(h/i)+1):l,D=[]
if(void 0!==d&&(m=Math.min(m,d)),1===m)D=[{p:.5,color:n(.5)}]
else{var g=1/(m-1)
D=Array.from({length:m},(function(e,t){var r=t*g
return{p:r,color:n(r)}}))}if(i>0)for(var b=D.reduce((function(e,t,n){if(0===n)return 0
var r=Zl(t.color,D[n-1].color,u)
return Math.max(e,r)}),0);b>i;){b=0
for(var y=1;y<D.length&&D.length<d;y++){var F=D[y-1],w=D[y],E=(w.p+F.p)/2,C=n(E)
b=Math.max(b,Zl(C,F.color),Zl(C,w.color)),D.splice(y,0,{p:E,color:n(E)}),y++}}return D=D.map((function(e){return e.color}))}function nc(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(rc(e)){var r=e,a=t
return nc.apply(void 0,U(r.rangeArgs.colors).concat([G({},r.rangeArgs.options,a)]))}var o=n.space,i=n.outputSpace,u=n.progression,s=n.premultiplied
e=Ds(e),t=Ds(t),e=Ms(e),t=Ms(t)
var l={colors:[e,t],options:n}
if(o=o?ps.get(o):ps.registry[os.interpolationSpace]||e.space,i=i?ps.get(i):o,e=Ps(e,o),t=Ps(t,o),e=Is(e),t=Is(t),o.coords.h&&"angle"===o.coords.h.type){var c=n.hue=n.hue||"shorter",d=[o,"h"],p=[vs(e,d),vs(t,d)],f=p[0],h=p[1],m=function(e,t){if("raw"===e)return t
var n=W(t.map(As),2),r=n[0],a=n[1],o=a-r
return"increasing"===e?o<0&&(a+=360):"decreasing"===e?o>0&&(r+=360):"longer"===e?-180<o&&o<180&&(o>0?a+=360:r+=360):"shorter"===e&&(o>180?r+=360:o<-180&&(a+=360)),[r,a]}(c,[f,h]),D=W(m,2)
f=D[0],h=D[1],ys(e,d,f),ys(t,d,h)}return s&&(e.coords=e.coords.map((function(t){return t*e.alpha})),t.coords=t.coords.map((function(e){return e*t.alpha}))),Object.assign((function(n){n=u?u(n):n
var r=e.coords.map((function(e,r){return Zu(e,t.coords[r],n)})),a=Zu(e.alpha,t.alpha,n),l={space:o,coords:r,alpha:a}
return s&&(l.coords=l.coords.map((function(e){return e/a}))),i!==o&&(l=Ps(l,i)),l}),{rangeArgs:l})}function rc(e){return"function"===Yu(e)&&!!e.rangeArgs}os.interpolationSpace="lab"
var ac=Object.freeze({__proto__:null,mix:ec,steps:tc,range:nc,isRange:rc,register:function(e){e.defineFunction("mix",ec,{returns:"color"}),e.defineFunction("range",nc,{returns:"function<color>"}),e.defineFunction("steps",tc,{returns:"array<color>"})}}),oc=new ps({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Ys,fromBase:function(e){var t=Math.max.apply(Math,U(e)),n=Math.min.apply(Math,U(e)),r=W(e,3),a=r[0],o=r[1],i=r[2],u=NaN,s=0,l=(n+t)/2,c=t-n
if(0!==c){switch(s=0===l||1===l?0:(t-l)/Math.min(l,1-l),t){case a:u=(o-i)/c+(o<i?6:0)
break
case o:u=(i-a)/c+2
break
case i:u=(a-o)/c+4}u*=60}return[u,100*s,100*l]},toBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2]
function o(e){var t=(e+n/30)%12,o=r*Math.min(a,1-a)
return a-o*Math.max(-1,Math.min(t-3,9-t,1))}return(n%=360)<0&&(n+=360),r/=100,a/=100,[o(0),o(8),o(4)]},formats:{hsl:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),ic=new ps({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:oc,fromBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)+(r/=100)*Math.min(a,1-a)
return[n,0===o?0:200*(1-a/o),100*o]},toBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2],o=(a/=100)*(1-(r/=100)/2)
return[n,0===o||1===o?0:(a-o)/Math.min(o,1-o)*100,100*o]},formats:{color:{toGamut:!0}}}),uc=new ps({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:ic,fromBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2]
return[n,a*(100-r)/100,100-a]},toBase:function(e){var t=W(e,3),n=t[0],r=t[1],a=t[2],o=(r/=100)+(a/=100)
if(o>=1)return[n,0,r/o*100]
var i=1-a
return[n,100*(0===i?0:1-r/i),100*i]},formats:{hwb:{toGamut:!0,coords:["<number> | <angle>","<percentage>","<percentage>"]}}}),sc=new hs({id:"a98rgb-linear",name:"Linear Adobe® 98 RGB compatible",white:"D65",toXYZ_M:[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],fromXYZ_M:[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]]}),lc=new hs({id:"a98rgb",name:"Adobe® 98 RGB compatible",base:sc,toBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),563/256)*Math.sign(e)}))},fromBase:function(e){return e.map((function(e){return Math.pow(Math.abs(e),256/563)*Math.sign(e)}))},formats:{color:{id:"a98-rgb"}}}),cc=new hs({id:"prophoto-linear",name:"Linear ProPhoto",white:"D50",base:Fs,toXYZ_M:[[.7977604896723027,.13518583717574031,.0313493495815248],[.2880711282292934,.7118432178101014,8565396060525902e-20],[0,0,.8251046025104601]],fromXYZ_M:[[1.3457989731028281,-.25558010007997534,-.05110628506753401],[-.5446224939028347,1.5082327413132781,.02053603239147973],[0,0,1.2119675456389454]]}),dc=new hs({id:"prophoto",name:"ProPhoto",base:cc,toBase:function(e){return e.map((function(e){return e<.03125?e/16:Math.pow(e,1.8)}))},fromBase:function(e){return e.map((function(e){return e>=.001953125?Math.pow(e,1/1.8):16*e}))},formats:{color:{id:"prophoto-rgb"}}}),pc=new ps({id:"oklch",name:"OKLCh",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:Ql,fromBase:function(e){var t,n=W(e,3),r=n[0],a=n[1],o=n[2],i=2e-4
return t=Math.abs(a)<i&&Math.abs(o)<i?NaN:180*Math.atan2(o,a)/Math.PI,[r,Math.sqrt(Math.pow(a,2)+Math.pow(o,2)),As(t)]},toBase:function(e){var t,n,r=W(e,3),a=r[0],o=r[1],i=r[2]
return isNaN(i)?(t=0,n=0):(t=o*Math.cos(i*Math.PI/180),n=o*Math.sin(i*Math.PI/180)),[a,t,n]},formats:{oklch:{coords:["<number> | <percentage>","<number>","<number> | <angle>"]}}}),fc=2610/Math.pow(2,14),hc=Math.pow(2,14)/2610,mc=2523/Math.pow(2,5),Dc=Math.pow(2,5)/2523,gc=3424/Math.pow(2,12),vc=2413/Math.pow(2,7),bc=2392/Math.pow(2,7),yc=new hs({id:"rec2100pq",name:"REC.2100-PQ",base:qs,toBase:function(e){return e.map((function(e){return 1e4*Math.pow(Math.max(Math.pow(e,Dc)-gc,0)/(vc-bc*Math.pow(e,Dc)),hc)/203}))},fromBase:function(e){return e.map((function(e){var t=Math.max(203*e/1e4,0),n=gc+vc*Math.pow(t,fc),r=1+bc*Math.pow(t,fc)
return Math.pow(n/r,mc)}))},formats:{color:{id:"rec2100-pq"}}}),Fc=.17883277,wc=.28466892,Ec=.55991073,Cc=3.7743,xc=new hs({id:"rec2100hlg",cssid:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:qs,toBase:function(e){return e.map((function(e){return e<=.5?Math.pow(e,2)/3*Cc:Math.exp((e-Ec)/Fc+wc)/12*Cc}))},fromBase:function(e){return e.map((function(e){return(e/=Cc)<=1/12?Math.sqrt(3*e):Fc*Math.log(12*e-wc)+Ec}))},formats:{color:{id:"rec2100-hlg"}}}),Ac={}
function kc(e){var t=e.id
e.toCone_M,e.fromCone_M,Ac[t]=arguments[0]}function Tc(e,t){var n=Ac[arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Bradford"],r=W(Gu(n.toCone_M,e),3),a=r[0],o=r[1],i=r[2],u=W(Gu(n.toCone_M,t),3),s=Gu([[u[0]/a,0,0],[0,u[1]/o,0],[0,0,u[2]/i]],n.toCone_M)
return Gu(n.fromCone_M,s)}as.add("chromatic-adaptation-start",(function(e){e.options.method&&(e.M=Tc(e.W1,e.W2,e.options.method))})),as.add("chromatic-adaptation-end",(function(e){e.M||(e.M=Tc(e.W1,e.W2,e.options.method))})),kc({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599364,-1.1293816,.2198974],[.3611914,.6388125,-64e-7],[0,0,1.0890636]]}),kc({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929,-.1470543,.1599627],[.4323053,.5183603,.0492912],[-.0085287,.0400428,.9684867]]}),kc({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238,-.278869,.1827452],[.454369,.4735332,.0720978],[-.0096276,-.005698,1.0153256]]}),kc({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.011254630531685,.1491867754444518],[.3875265432361372,.6214474419314753,-.008973985167612518],[-.01584149884933386,-.03412293802851557,1.04996443687785]]}),Object.assign(is,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),is.ACES=[.32168/.33767,1,.34065/.33767]
var Nc=new hs({id:"acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:is.ACES,toXYZ_M:[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],fromXYZ_M:[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],formats:{color:{}}}),Bc=Math.pow(2,-16),Rc=-.35828683,_c=(Math.log2(65504)+9.72)/17.52,Sc=new hs({id:"acescc",name:"ACEScc",coords:{r:{range:[Rc,_c],name:"Red"},g:{range:[Rc,_c],name:"Green"},b:{range:[Rc,_c],name:"Blue"}},referred:"scene",base:Nc,toBase:function(e){return e.map((function(e){return e<=-.3013698630136986?2*(Math.pow(2,17.52*e-9.72)-Bc):e<_c?Math.pow(2,17.52*e-9.72):65504}))},fromBase:function(e){return e.map((function(e){return e<=0?(Math.log2(Bc)+9.72)/17.52:e<Bc?(Math.log2(Bc+.5*e)+9.72)/17.52:(Math.log2(e)+9.72)/17.52}))},formats:{color:{}}}),Oc=Object.freeze({__proto__:null,XYZ_D65:fs,XYZ_D50:Fs,XYZ_ABS_D65:vl,Lab_D65:dl,Lab:xs,LCH:ks,sRGB_Linear:Us,sRGB:Ys,HSL:oc,HWB:uc,HSV:ic,P3_Linear:Hs,P3:Ks,A98RGB_Linear:sc,A98RGB:lc,ProPhoto_Linear:cc,ProPhoto:dc,REC_2020_Linear:qs,REC_2020:Vs,OKLab:Ql,OKLCH:pc,Jzazbz:Ol,JzCzHz:Ml,ICTCP:$l,REC_2100_PQ:yc,REC_2100_HLG:xc,ACEScg:Nc,ACEScc:Sc}),Mc=(O=new WeakMap,function(){function e(){var t,n,r,a,o=this
Q(this,e),I(this,O,{writable:!0,value:void 0})
for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s]
1===u.length&&(t=Ds(u[0])),t?(n=t.space||t.spaceId,r=t.coords,a=t.alpha):(n=u[0],r=u[1],a=u[2]),z(this,O,ps.get(n)),this.coords=r?r.slice():[0,0,0],this.alpha=a<1?a:1
for(var l=0;l<this.coords.length;l++)"NaN"===this.coords[l]&&(this.coords[l]=NaN)
var c=function(e){Object.defineProperty(o,e,{get:function(){return o.get(e)},set:function(t){return o.set(e,t)}})}
for(var d in q(this,O).coords)c(d)}return Z(e,[{key:"space",get:function(){return q(this,O)}},{key:"spaceId",get:function(){return q(this,O).id}},{key:"clone",value:function(){return new e(this.space,this.coords,this.alpha)}},{key:"toJSON",value:function(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}},{key:"display",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
var a=tl.apply(void 0,[this].concat(n))
return a.color=new e(a.color),a}}],[{key:"get",value:function(t){if(t instanceof e)return t
for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a]
return N(e,[t].concat(r))}},{key:"defineFunction",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,a=r.instance,o=void 0===a||a,i=r.returns,u=function(){var t=n.apply(void 0,arguments)
if("color"===i)t=e.get(t)
else if("function<color>"===i){var r=t
t=function(){var t=r.apply(void 0,arguments)
return e.get(t)},Object.assign(t,r)}else"array<color>"===i&&(t=t.map((function(t){return e.get(t)})))
return t}
t in e||(e[t]=u),o&&(e.prototype[t]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return u.apply(void 0,[this].concat(t))})}},{key:"defineFunctions",value:function(t){for(var n in t)e.defineFunction(n,t[n],t[n])}},{key:"extend",value:function(t){if(t.register)t.register(e)
else for(var n in t)e.defineFunction(n,t[n])}}]),e}())
Mc.defineFunctions({get:vs,getAll:gs,set:ys,setAll:bs,to:Ps,equals:function(e,t){return e=Ds(e),t=Ds(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((function(e,n){return e===t.coords[n]}))},inGamut:Os,toGamut:Is,distance:nl,toString:js}),Object.assign(Mc,{util:ns,hooks:as,WHITES:is,Space:ps,spaces:ps.registry,parse:ms,defaults:os})
for(var Ic=0,Pc=Object.keys(Oc);Ic<Pc.length;Ic++){var jc=Pc[Ic]
ps.register(Oc[jc])}for(var qc in ps.registry)Lc(qc,ps.registry[qc])
function Lc(e,t){Object.keys(t.coords),Object.values(t.coords).map((function(e){return e.name}))
var n=e.replace(/-/g,"_")
Object.defineProperty(Mc.prototype,n,{get:function(){var n=this,r=this.getAll(e)
return"undefined"==typeof Proxy?r:new Proxy(r,{has:function(e,n){try{return ps.resolveCoord([t,n]),!0}catch(e){}return Reflect.has(e,n)},get:function(e,n,r){if(n&&"symbol"!==o(n)&&!(n in e)){var a=ps.resolveCoord([t,n]).index
if(a>=0)return e[a]}return Reflect.get(e,n,r)},set:function(r,a,i,u){if(a&&"symbol"!==o(a)&&!(a in r)||a>=0){var s=ps.resolveCoord([t,a]).index
if(s>=0)return r[s]=i,n.setAll(e,r),!0}return Reflect.set(r,a,i,u)}})},set:function(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}as.add("colorspace-init-end",(function(e){var t
Lc(e.id,e),null===(t=e.aliases)||void 0===t||t.forEach((function(t){Lc(t,e)}))})),Mc.extend(Xl),Mc.extend({deltaE:Zl}),Mc.extend(Jl),Mc.extend({contrast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
Wu(n)&&(n={algorithm:n})
var r=n,a=r.algorithm,o=H(r,D)
if(!a){var i=Object.keys(fl).map((function(e){return e.replace(/^contrast/,"")})).join(", ")
throw new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(i))}for(var u in e=Ds(e),t=Ds(t),fl)if("contrast"+a.toLowerCase()===u.toLowerCase())return fl[u](e,t,o)
throw new TypeError("Unknown contrast algorithm: ".concat(a))}}),Mc.extend(Dl),Mc.extend(ol),Mc.extend(ac),Mc.extend(fl)
var zc=ie(Ht()),Vc=ie(Ut())
ie($t()),Uu.default.templateSettings.strip=!1,"Promise"in n||zc.default.polyfill(),"Uint32Array"in n||(n.Uint32Array=Vc.Uint32Array),n.Uint32Array&&("some"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"some",{value:Array.prototype.some}),"reduce"in n.Uint32Array.prototype||Object.defineProperty(n.Uint32Array.prototype,"reduce",{value:Array.prototype.reduce}))
var Hc=/^#[0-9a-f]{3,8}$/i,Uc=/hsl\(\s*([\d.]+)(rad|turn)/,$c=function(){function e(t,n,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1
Q(this,e),this.red=t,this.green=n,this.blue=r,this.alpha=a}return Z(e,[{key:"toHexString",value:function(){var e=Math.round(this.red).toString(16),t=Math.round(this.green).toString(16),n=Math.round(this.blue).toString(16)
return"#"+(this.red>15.5?e:"0"+e)+(this.green>15.5?t:"0"+t)+(this.blue>15.5?n:"0"+n)}},{key:"toJSON",value:function(){return{red:this.red,green:this.green,blue:this.blue,alpha:this.alpha}}},{key:"parseString",value:function(e){e=e.replace(Uc,(function(e,t,n){var r=t+n
switch(n){case"rad":return e.replace(r,180*t/Math.PI)
case"turn":return e.replace(r,360*t)}}))
try{var t=new Mc(e).to("srgb")
this.red=Math.round(255*Wc(t.r,0,1)),this.green=Math.round(255*Wc(t.g,0,1)),this.blue=Math.round(255*Wc(t.b,0,1)),this.alpha=+t.alpha}catch(t){throw new Error('Unable to parse color "'.concat(e,'"'))}return this}},{key:"parseRgbString",value:function(e){this.parseString(e)}},{key:"parseHexString",value:function(e){e.match(Hc)&&![6,8].includes(e.length)&&this.parseString(e)}},{key:"parseColorFnString",value:function(e){this.parseString(e)}},{key:"getRelativeLuminance",value:function(){var e=this.red/255,t=this.green/255,n=this.blue/255
return.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))}}]),e}(),Gc=$c
function Wc(e,t,n){return Math.min(Math.max(t,e),n)}var Yc=function(e){var t=new Gc
if(t.parseString(e.getPropertyValue("background-color")),0!==t.alpha){var n=e.getPropertyValue("opacity")
t.alpha=t.alpha*n}return t},Kc=function(e){var t=n.getComputedStyle(e)
return zu(e,t)||1===Yc(t).alpha}
function Qc(e){if(!e.href)return!1
var t=Un.get("firstPageLink",Xc)
return!t||e.compareDocumentPosition(t.actualNode)===e.DOCUMENT_POSITION_FOLLOWING}function Xc(){return(n.location.origin?Lp(i._tree,'a[href]:not([href^="javascript:"])').find((function(e){return!go(e.actualNode)})):Lp(i._tree,'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0])||null}var Zc=/rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/,Jc=/(\w+)\((\d+)/,ed=function e(t,r,a){var o
if(!t)throw new TypeError("Cannot determine if element is visible for non-DOM nodes")
var u=t instanceof Qt?t:$n(t)
t=u?u.actualNode:t
var s="_isVisible"+(r?"ScreenReader":""),l=null!==(o=n.Node)&&void 0!==o?o:{},c=l.DOCUMENT_NODE,d=l.DOCUMENT_FRAGMENT_NODE,p=u?u.props.nodeType:t.nodeType,f=u?u.props.nodeName:t.nodeName.toLowerCase()
if(u&&void 0!==u[s])return u[s]
if(p===c)return!0
if(["style","script","noscript","template"].includes(f))return!1
if(t&&p===d&&(t=t.host),r&&"true"===(u?u.attr("aria-hidden"):t.getAttribute("aria-hidden")))return!1
if(!t){var h=u.parent,m=!0
return h&&(m=e(h,r,!0)),u&&(u[s]=m),m}var D=n.getComputedStyle(t,null)
if(null===D)return!1
if("area"===f)return function(t,n,r){var a=fa(t,"map")
if(!a)return!1
var o=a.getAttribute("name")
if(!o)return!1
var u=ca(t)
if(!u||9!==u.nodeType)return!1
var s=Lp(i._tree,'img[usemap="#'.concat(fn(o),'"]'))
return!(!s||!s.length)&&s.some((function(t){return e(t.actualNode,n,r)}))}(t,r,a)
if("none"===D.getPropertyValue("display"))return!1
var g=parseInt(D.getPropertyValue("height")),v=parseInt(D.getPropertyValue("width")),b=tp(t),y=b&&0===g,F=b&&0===v,w="absolute"===D.getPropertyValue("position")&&(g<2||v<2)&&"hidden"===D.getPropertyValue("overflow")
if(!r&&(function(e){var t=e.getPropertyValue("clip").match(Zc),n=e.getPropertyValue("clip-path").match(Jc)
if(t&&5===t.length){var r=e.getPropertyValue("position")
if(["fixed","absolute"].includes(r))return t[3]-t[1]<=0&&t[2]-t[4]<=0}if(n){var a=n[1],o=parseInt(n[2],10)
switch(a){case"inset":return o>=50
case"circle":return 0===o}}return!1}(D)||"0"===D.getPropertyValue("opacity")||y||F||w))return!1
if(!a&&("hidden"===D.getPropertyValue("visibility")||!r&&La(t)))return!1
var E=t.assignedSlot?t.assignedSlot:t.parentNode,C=!1
return E&&(C=e(E,r,!0)),u&&(u[s]=C),C},td=function(e,t){for(var r=["fixed","sticky"],a=[],o=!1,i=0;i<e.length;++i){var u=e[i]
u===t&&(o=!0)
var s=n.getComputedStyle(u)
o||-1===r.indexOf(s.position)?a.push(u):a=[]}return a}
function nd(e,t){var n=rd(t)
do{var r=rd(e)
if(r===n||r===t)return ad(e,t)
e=r}while(e)
return!1}function rd(e){for(var t=$n(e).parent;t;){if(tp(t.actualNode))return t.actualNode
t=t.parent}}function ad(e,t){var r=n.getComputedStyle(t),a=r.getPropertyValue("overflow")
if("inline"===r.getPropertyValue("display"))return!0
var o=Array.from(e.getClientRects()),i=t.getBoundingClientRect(),u={left:i.left,top:i.top,width:i.width,height:i.height}
return(["scroll","auto"].includes(a)||t instanceof n.HTMLHtmlElement)&&(u.width=t.scrollWidth,u.height=t.scrollHeight),1===o.length&&"hidden"===a&&"nowrap"===r.getPropertyValue("white-space")&&(o[0]=u),o.some((function(e){return!(Math.ceil(e.left)<Math.floor(u.left)||Math.ceil(e.top)<Math.floor(u.top)||Math.floor(e.left+e.width)>Math.ceil(u.left+u.width)||Math.floor(e.top+e.height)>Math.ceil(u.top+u.height))}))}var od=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(o>999)throw new Error("Infinite loop detected")
return Array.from(r.elementsFromPoint(t,n)||[]).filter((function(e){return ca(e)===r})).reduce((function(r,a){if(ua(a)){var i=e(t,n,a.shadowRoot,o+1);(r=r.concat(i)).length&&nd(r[0],a)&&r.push(a)}else r.push(a)
return r}),[])}
function id(e){var t={}
if(!e||!e.length)return t
var n=e.substring(1).split("&")
if(!n||!n.length)return t
for(var r=0;r<n.length;r++){var a=W(n[r].split("="),2),o=a[0],i=a[1],u=void 0===i?"":i
t[decodeURIComponent(o)]=decodeURIComponent(u)}return t}function ud(e){if(!e)return""
var t=e.match(/#!?\/?/g)
return t?"#"===W(t,1)[0]?"":e:""}var sd,ld,cd=function(e,t){if(e.hasAttribute(t)){var n=e.nodeName.toUpperCase(),r=e;["A","AREA"].includes(n)&&!e.ownerSVGElement||((r=a.createElement("a")).href=e.getAttribute(t))
var o,i=["https:","ftps:"].includes(r.protocol)?r.protocol.replace(/s:$/,":"):r.protocol,u=function(e){var t=e.split("/").pop()
return t&&-1!==t.indexOf(".")?{pathname:e.replace(t,""),filename:/index./.test(t)?"":t}:{pathname:e,filename:""}}(/^\//.test(r.pathname)?r.pathname:"/".concat(r.pathname)),s=u.pathname,l=u.filename
return{protocol:i,hostname:r.hostname,port:(o=r.port,["443","80"].includes(o)?"":o),pathname:/\/$/.test(s)?s:"".concat(s,"/"),search:id(r.search),hash:ud(r.hash),filename:l}}},dd=function(e,t){var r=t.getBoundingClientRect(),a=r.top,o=r.left,i=a-t.scrollTop,u=a-t.scrollTop+t.scrollHeight,s=o-t.scrollLeft,l=o-t.scrollLeft+t.scrollWidth
if(e.left>l&&e.left>r.right||e.top>u&&e.top>r.bottom||e.right<s&&e.right<r.left||e.bottom<i&&e.bottom<r.top)return!1
var c=n.getComputedStyle(t)
return!(e.left>r.right||e.top>r.bottom)||"scroll"===c.overflow||"auto"===c.overflow||t instanceof n.HTMLBodyElement||t instanceof n.HTMLHtmlElement},pd=0,fd=function(e){B(r,e)
var t=_(r)
function r(e,n,a){var o
if(Q(this,r),(o=t.call(this)).shadowId=a,o.children=[],o.actualNode=e,o.parent=n,n||(pd=0),o.nodeIndex=pd++,o._isHidden=null,o._cache={},void 0===sd&&(sd=Fn(e.ownerDocument)),o._isXHTML=sd,"input"===e.nodeName.toLowerCase()){var i=e.getAttribute("type")
i=o._isXHTML?i:(i||"").toLowerCase(),Zp().includes(i)||(i="text"),o._type=i}return Un.get("nodeMap")&&Un.get("nodeMap").set(e,S(o)),o}return Z(r,[{key:"props",get:function(){if(!this._cache.hasOwnProperty("props")){var e=this.actualNode,t=e.nodeType,n=e.nodeName,r=e.id,a=e.multiple,o=e.nodeValue,i=e.value,u=e.selected,s=e.checked,l=e.indeterminate
this._cache.props={nodeType:t,nodeName:this._isXHTML?n:n.toLowerCase(),id:r,type:this._type,multiple:a,nodeValue:o,value:i,selected:u,checked:s,indeterminate:l}}return this._cache.props}},{key:"attr",value:function(e){return"function"!=typeof this.actualNode.getAttribute?null:this.actualNode.getAttribute(e)}},{key:"hasAttr",value:function(e){return"function"==typeof this.actualNode.hasAttribute&&this.actualNode.hasAttribute(e)}},{key:"attrNames",get:function(){var e
return this._cache.hasOwnProperty("attrNames")||(e=this.actualNode.attributes instanceof n.NamedNodeMap?this.actualNode.attributes:this.actualNode.cloneNode(!1).attributes,this._cache.attrNames=Array.from(e).map((function(e){return e.name}))),this._cache.attrNames}},{key:"getComputedStylePropertyValue",value:function(e){var t="computedStyle_"+e
return this._cache.hasOwnProperty(t)||(this._cache.hasOwnProperty("computedStyle")||(this._cache.computedStyle=n.getComputedStyle(this.actualNode)),this._cache[t]=this._cache.computedStyle.getPropertyValue(e)),this._cache[t]}},{key:"isFocusable",get:function(){return this._cache.hasOwnProperty("isFocusable")||(this._cache.isFocusable=ei(this.actualNode)),this._cache.isFocusable}},{key:"tabbableElements",get:function(){return this._cache.hasOwnProperty("tabbableElements")||(this._cache.tabbableElements=Ro(this)),this._cache.tabbableElements}},{key:"clientRects",get:function(){return this._cache.hasOwnProperty("clientRects")||(this._cache.clientRects=Array.from(this.actualNode.getClientRects()).filter((function(e){return e.width>0}))),this._cache.clientRects}},{key:"boundingClientRect",get:function(){return this._cache.hasOwnProperty("boundingClientRect")||(this._cache.boundingClientRect=this.actualNode.getBoundingClientRect()),this._cache.boundingClientRect}}]),r}(Qt),hd=fd,md=function(e){return(e||"").trim().replace(/\s{2,}/g," ").split(" ")},Dd=" [idsMap]"
function gd(e,t,n){var r=e[0]._selectorMap
if(r){for(var a=e[0].shadowId,o=0;o<t.length;o++)if(t[o].length>1&&t[o].some((function(e){return vd(e)})))return
var i=new Set
t.forEach((function(e){var t,n=function(e,t,n){var r=e[e.length-1],a=null,o=e.length>1||!!r.pseudos||!!r.classes
if(vd(r))a=t["*"]
else{if(r.id){var i
if(!t[Dd]||null===(i=t[Dd][r.id])||void 0===i||!i.length)return
a=t[Dd][r.id].filter((function(e){return e.shadowId===n}))}if(r.tag&&"*"!==r.tag){var u
if(null===(u=t[r.tag])||void 0===u||!u.length)return
var s=t[r.tag]
a=a?bd(s,a):s}if(r.classes){var l
if(null===(l=t["[class]"])||void 0===l||!l.length)return
var c=t["[class]"]
a=a?bd(c,a):c}if(r.attributes)for(var d=0;d<r.attributes.length;d++){var p,f=r.attributes[d]
if("attrValue"===f.type&&(o=!0),null===(p=t["[".concat(f.key,"]")])||void 0===p||!p.length)return
var h=t["[".concat(f.key,"]")]
a=a?bd(h,a):h}}return{nodes:a,isComplexSelector:o}}(e,r,a)
null==n||null===(t=n.nodes)||void 0===t||t.forEach((function(t){n.isComplexSelector&&!sr(t,e)||i.add(t)}))}))
var u=[]
return i.forEach((function(e){return u.push(e)})),n&&(u=u.filter(n)),u.sort((function(e,t){return e.nodeIndex-t.nodeIndex}))}}function vd(e){return"*"===e.tag&&!e.attributes&&!e.id&&!e.classes}function bd(e,t){return e.filter((function(e){return t.includes(e)}))}function yd(e,t,n){n[e]=n[e]||[],n[e].push(t)}function Fd(e,t){1===e.props.nodeType&&(yd(e.props.nodeName,e,t),yd("*",e,t),e.attrNames.forEach((function(n){"id"===n&&(t[Dd]=t[Dd]||{},md(e.attr(n)).forEach((function(n){yd(n,e,t[Dd])}))),yd("[".concat(n,"]"),e,t)})))}function wd(e,t,n){var r=new hd(e,t,n)
return Fd(r,Un.get("selectorMap")),r}function Ed(e,t,r){var a,o,i
function u(e,n,r){var a=Ed(n,t,r)
return a&&(e=e.concat(a)),e}return e.documentElement&&(e=e.documentElement),i=e.nodeName.toLowerCase(),ua(e)?(ld=!0,a=wd(e,r,t),t="a"+Math.random().toString().substring(2),o=Array.from(e.shadowRoot.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):"content"===i&&"function"==typeof e.getDistributedNodes?(o=Array.from(e.getDistributedNodes())).reduce((function(e,t){return u(e,t,r)}),[]):"slot"===i&&"function"==typeof e.assignedNodes?((o=Array.from(e.assignedNodes())).length||(o=function(e){var t=[]
for(e=e.firstChild;e;)t.push(e),e=e.nextSibling
return t}(e)),n.getComputedStyle(e),o.reduce((function(e,t){return u(e,t,r)}),[])):1===e.nodeType?(a=wd(e,r,t),o=Array.from(e.childNodes),a.children=o.reduce((function(e,t){return u(e,t,a)}),[]),[a]):3===e.nodeType?[wd(e,r)]:void 0}var Cd=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.documentElement,t=arguments.length>1?arguments[1]:void 0
ld=!1
var n={}
Un.set("nodeMap",new WeakMap),Un.set("selectorMap",n)
var r=Ed(e,t,null)
return r[0]._selectorMap=n,r[0]._hasShadowRoot=ld,r},xd=function(e){return e?e.trim().split("-")[0].toLowerCase():""},Ad=function(e){var t={}
return t.none=e.none.concat(e.all),t.any=e.any,Object.keys(t).map((function(e){if(t[e].length){var n=i._audit.data.failureSummaries[e]
return n&&"function"==typeof n.failureMessage?n.failureMessage(t[e].map((function(e){return e.message||""}))):void 0}})).filter((function(e){return void 0!==e})).join("\n\n")}
function kd(){var e=i._audit.data.incompleteFallbackMessage
return"function"==typeof e&&(e=e()),"string"!=typeof e?"":e}var Td=Wt.resultGroups,Nd=function(e,t){var n=i.utils.aggregateResult(e)
return Td.forEach((function(e){t.resultTypes&&!t.resultTypes.includes(e)&&(n[e]||[]).forEach((function(e){Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=[e.nodes[0]])})),n[e]=(n[e]||[]).map((function(e){return e=Object.assign({},e),Array.isArray(e.nodes)&&e.nodes.length>0&&(e.nodes=e.nodes.map((function(e){return"object"===o(e.node)&&(e.html=e.node.source,t.elementRef&&!e.node.fromFrame&&(e.element=e.node.element),(!1!==t.selectors||e.node.fromFrame)&&(e.target=e.node.selector),t.ancestry&&(e.ancestry=e.node.ancestry),t.xpath&&(e.xpath=e.node.xpath)),delete e.result,delete e.node,function(e,t){["any","all","none"].forEach((function(n){Array.isArray(e[n])&&e[n].filter((function(e){return Array.isArray(e.relatedNodes)})).forEach((function(e){e.relatedNodes=e.relatedNodes.map((function(e){var n,r,a,o,i,u={html:null!==(n=null==e?void 0:e.source)&&void 0!==n?n:"Undefined"}
return!t.elementRef||null!=e&&e.fromFrame||(u.element=null!==(r=null==e?void 0:e.element)&&void 0!==r?r:null),(!1!==t.selectors||null!=e&&e.fromFrame)&&(u.target=null!==(a=null==e?void 0:e.selector)&&void 0!==a?a:[":root"]),t.ancestry&&(u.ancestry=null!==(o=null==e?void 0:e.ancestry)&&void 0!==o?o:[":root"]),t.xpath&&(u.xpath=null!==(i=null==e?void 0:e.xpath)&&void 0!==i?i:["/"]),u}))}))}))}(e,t),e}))),Td.forEach((function(t){return delete e[t]})),delete e.pageLevel,delete e.result,e}))})),n},Bd=/\$\{\s?data\s?\}/g
function Rd(e,t){if("string"==typeof t)return e.replace(Bd,t)
for(var n in t)if(t.hasOwnProperty(n)){var r=new RegExp("\\${\\s?data\\."+n+"\\s?}","g"),a=void 0===t[n]?"":String(t[n])
e=e.replace(r,a)}return e}var _d=function e(t,n){if(t){if(Array.isArray(n))return n.values=n.join(", "),"string"==typeof t.singular&&"string"==typeof t.plural?Rd(1===n.length?t.singular:t.plural,n):Rd(t,n)
if("string"==typeof t)return Rd(t,n)
if("string"==typeof n)return Rd(t[n],n)
var r=t.default||kd()
return n&&n.messageKey&&t[n.messageKey]&&(r=t[n.messageKey]),e(r,n)}},Sd=function(e,t,n){var r=i._audit.data.checks[e]
if(!r)throw new Error("Cannot get message for unknown check: ".concat(e,"."))
if(!r.messages[t])throw new Error('Check "'.concat(e,'"" does not have a "').concat(t,'" message.'))
return _d(r.messages[t],n)},Od=function(e,t,n){var r=((n.rules&&n.rules[t]||{}).checks||{})[e.id],a=(n.checks||{})[e.id],o=e.enabled,i=e.options
return a&&(a.hasOwnProperty("enabled")&&(o=a.enabled),a.hasOwnProperty("options")&&(i=a.options)),r&&(r.hasOwnProperty("enabled")&&(o=r.enabled),r.hasOwnProperty("options")&&(i=r.options)),{enabled:o,options:i,absolutePaths:n.absolutePaths}}
function Md(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n
return t&&"object"===o(t)?t:"object"!==o(r)?{}:{testEngine:{name:"axe-core",version:i.version},testRunner:{name:i._audit.brand},testEnvironment:Id(r),timestamp:(new Date).toISOString(),url:null===(e=r.location)||void 0===e?void 0:e.href}}function Id(e){if(!e.navigator||"object"!==o(e.navigator))return{}
var t,n=e.navigator,r=e.innerHeight,a=e.innerWidth,i=(t=e.screen).orientation||t.msOrientation||t.mozOrientation||{},u=i.angle,s=i.type
return{userAgent:n.userAgent,windowWidth:a,windowHeight:r,orientationAngle:u,orientationType:s}}function Pd(e,t){var n=t.focusable,r=t.page
return{node:e,include:[],exclude:[],initiator:!1,focusable:n&&jd(e),size:qd(e),page:r}}function jd(e){var t=e.getAttribute("tabindex")
if(!t)return!0
var n=parseInt(t,10)
return isNaN(n)||n>=0}function qd(e){var t=parseInt(e.getAttribute("width"),10),n=parseInt(e.getAttribute("height"),10)
if(isNaN(t)||isNaN(n)){var r=e.getBoundingClientRect()
t=isNaN(t)?r.width:t,n=isNaN(n)?r.height:n}return{width:t,height:n}}function Ld(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[]
Wd(t)||(t=[t])
for(var a=0;a<t.length;a++){var o=(e=t[a])instanceof n.Node?e:"string"==typeof e?[e]:(Hd(e)?(function(e){Yd(Array.isArray(e.fromFrames),"fromFrames property must be an array"),Yd(e.fromFrames.every((function(e){return!Kd(e,"fromFrames")})),"Invalid context; fromFrames selector must be appended, rather than nested"),Yd(!Kd(e,"fromShadowDom"),"fromFrames and fromShadowDom cannot be used on the same object")}(e),e=e.fromFrames):Ud(e)&&(e=[e]),function(e){if(Array.isArray(e)){var t,n=[],r=ee(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value
if(Ud(a)&&($d(a),a=a.fromShadowDom),"string"!=typeof a&&!Gd(a))return
n.push(a)}}catch(e){r.e(e)}finally{r.f()}return n}}(e))
o&&r.push(o)}return r}function zd(e){return["include","exclude"].some((function(t){return Kd(e,t)&&Vd(e[t])}))}function Vd(e){return"string"==typeof e||e instanceof n.Node||Hd(e)||Ud(e)||Wd(e)}function Hd(e){return Kd(e,"fromFrames")}function Ud(e){return Kd(e,"fromShadowDom")}function $d(e){Yd(Array.isArray(e.fromShadowDom),"fromShadowDom property must be an array"),Yd(e.fromShadowDom.every((function(e){return!Kd(e,"fromFrames")})),"shadow selector must be inside fromFrame instead"),Yd(e.fromShadowDom.every((function(e){return!Kd(e,"fromShadowDom")})),"fromShadowDom selector must be appended, rather than nested")}function Gd(e){return Array.isArray(e)&&e.every((function(e){return"string"==typeof e}))}function Wd(e){return e&&"object"===o(e)&&"number"==typeof e.length&&e instanceof n.Node==0}function Yd(e,t){dn(e,"Invalid context; ".concat(t,"\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"))}function Kd(e,t){return!(!e||"object"!==o(e))&&Object.prototype.hasOwnProperty.call(e,t)}function Qd(e,t){for(var r=[],a=0,o=e[t].length;a<o;a++){var i=e[t][a]
if(i instanceof n.Node)i.documentElement instanceof n.Node?r.push(e.flatTree[0]):r.push($n(i))
else if(i&&i.length)if(i.length>1)Xd(e,t,i)
else{var u=Qp(i[0])
r.push.apply(r,U(u.map((function(e){return $n(e)}))))}}return r.filter((function(e){return e}))}function Xd(e,t,n){e.frames=e.frames||[],Qp(n.shift()).forEach((function(r){var a=e.frames.find((function(e){return e.node===r}))
a||(a=Pd(r,e),e.frames.push(a)),a[t].push(n)}))}function Zd(e,t){var r,i,u,s,l,c=this
e=Kn(e),this.frames=[],this.page="boolean"==typeof(null===(r=e)||void 0===r?void 0:r.page)?e.page:void 0,this.initiator="boolean"!=typeof(null===(i=e)||void 0===i?void 0:i.initiator)||e.initiator,this.focusable="boolean"!=typeof(null===(u=e)||void 0===u?void 0:u.focusable)||e.focusable,this.size="object"===o(null===(s=e)||void 0===s?void 0:s.size)?e.size:{},e=function(e){if(zd(e)){var t=" must be used inside include or exclude. It should not be on the same object."
Yd(!Kd(e,"fromFrames"),"fromFrames"+t),Yd(!Kd(e,"fromShadowDom"),"fromShadowDom"+t)}else{if(!Vd(e))return{include:[a],exclude:[]}
e={include:e,exclude:[]}}var n=Ld(e.include)
return 0===n.length&&n.push(a),{include:n,exclude:Ld(e.exclude)}}(e),this.flatTree=null!=t?t:Cd(function(e){for(var t=e.include,r=e.exclude,o=Array.from(t).concat(Array.from(r)),i=0;i<o.length;i++){var u=o[i]
if(u instanceof n.Element)return u.ownerDocument.documentElement
if(u instanceof n.Document)return u.documentElement}return a.documentElement}(e)),this.exclude=e.exclude,this.include=e.include,this.include=Qd(this,"include"),this.exclude=Qd(this,"exclude"),$p("frame, iframe",this).forEach((function(e){dp(e,c)&&function(e,t){ji(t)&&!Jr(e.frames,"node",t)&&e.frames.push(Pd(t,e))}(c,e.actualNode)})),void 0===this.page&&(this.page=1===(l=this.include).length&&l[0].actualNode===a.documentElement,this.frames.forEach((function(e){e.page=c.page}))),function(e){if(0===e.include.length&&0===e.frames.length){var t=Wr.isInFrame()?"frame":"page"
throw new Error("No elements found for include in "+t+" Context")}}(this),Array.isArray(this.include)||(this.include=Array.from(this.include)),this.include.sort(hp)}function Jd(e){return!1===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).iframes?[]:new Zd(e).frames.map((function(e){var t=e.node,n=H(e,b)
return n.initiator=!1,{frameSelector:qn(t),frameContext:n}}))}var ep=function(e){var t=i._audit.rules.find((function(t){return t.id===e}))
if(!t)throw new Error("Cannot find rule by id: ".concat(e))
return t}
function tp(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=e.scrollWidth>e.clientWidth+t,a=e.scrollHeight>e.clientHeight+t
if(r||a){var o=n.getComputedStyle(e),i=np(o,"overflow-x"),u=np(o,"overflow-y")
return r&&i||a&&u?{elm:e,top:e.scrollTop,left:e.scrollLeft}:void 0}}function np(e,t){var n=e.getPropertyValue(t)
return["scroll","auto"].includes(n)}function rp(e){return Array.from(e.children||e.childNodes||[]).reduce((function(e,t){var n=tp(t)
return n&&e.push(n),e.concat(rp(t))}),[])}var ap=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=e.document.documentElement
return[void 0!==e.pageXOffset?{elm:e,top:e.pageYOffset,left:e.pageXOffset}:{elm:t,top:t.scrollTop,left:t.scrollLeft}].concat(rp(a.body))}
function op(){return Kn(zo)}var ip,up=function(e){if(!e)throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument")
return function(t){var n=t.data,r=t.isCrossOrigin,a=void 0!==r&&r,o=t.shadowId,i=t.root,u=t.priority,s=t.isLink,l=void 0!==s&&s,c=e.createElement("style")
if(l){var d=e.createTextNode('@import "'.concat(n.href,'"'))
c.appendChild(d)}else c.appendChild(e.createTextNode(n))
return e.head.appendChild(c),{sheet:c.sheet,isCrossOrigin:a,shadowId:o,root:i,priority:u}}},sp=function(e){if(ip&&ip.parentNode)return void 0===ip.styleSheet?ip.appendChild(a.createTextNode(e)):ip.styleSheet.cssText+=e,ip
if(e){var t=a.head||a.getElementsByTagName("head")[0]
return(ip=a.createElement("style")).type="text/css",void 0===ip.styleSheet?ip.appendChild(a.createTextNode(e)):ip.styleSheet.cssText=e,t.appendChild(ip),ip}},lp=function e(t,r){var a=$n(t)
if(9===t.nodeType)return!1
if(11===t.nodeType&&(t=t.host),a&&null!==a._isHidden)return a._isHidden
var o=n.getComputedStyle(t,null)
if(!o||!t.parentNode||"none"===o.getPropertyValue("display")||!r&&"hidden"===o.getPropertyValue("visibility")||"true"===t.getAttribute("aria-hidden"))return!0
var i=e(t.assignedSlot?t.assignedSlot:t.parentNode,!0)
return a&&(a._isHidden=i),i},cp=function(e){var t,n,r=null!==(t=null===(n=e.props)||void 0===n?void 0:n.nodeName)&&void 0!==t?t:e.nodeName.toLowerCase()
return"http://www.w3.org/2000/svg"!==e.namespaceURI&&!!zo.htmlElms[r]}
function dp(e,t){var n=t.include,r=void 0===n?[]:n,a=t.exclude,o=void 0===a?[]:a,i=r.filter((function(t){return ra(t,e)}))
if(0===i.length)return!1
var u=o.filter((function(t){return ra(t,e)}))
if(0===u.length)return!0
var s=pp(i)
return ra(pp(u),s)}function pp(e){var t,n,r=ee(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
t&&ra(a,t)||(t=a)}}catch(e){r.e(e)}finally{r.f()}return t}var fp=function(e,t){return e.length===t.length&&e.every((function(e,n){var r=t[n]
return Array.isArray(e)?e.length===r.length&&e.every((function(e,t){return r[t]===e})):e===r}))},hp=function(e,t){return(e=e.actualNode||e)===(t=t.actualNode||t)?0:4&e.compareDocumentPosition(t)?-1:1}
function mp(e){return e instanceof Qt?{vNode:e,domNode:e.actualNode}:{vNode:$n(e),domNode:e}}var Dp,gp,vp,bp,yp=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=Array.from(e.cssRules)
if(!o)return Promise.resolve()
var i=o.filter((function(e){return 3===e.type}))
if(!i.length)return Promise.resolve({isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId,sheet:e})
var u=i.filter((function(e){return e.href})).map((function(e){return e.href})).filter((function(e){return!r.includes(e)})).map((function(e,a){var o=[].concat(U(n),[a]),i=/^https?:\/\/|^\/\//i.test(e)
return wp(e,t,o,r,i)})),s=o.filter((function(e){return 3!==e.type}))
return s.length?(u.push(Promise.resolve(t.convertDataToStylesheet({data:s.map((function(e){return e.cssText})).join(),isCrossOrigin:a,priority:n,root:t.rootNode,shadowId:t.shadowId}))),Promise.all(u)):Promise.all(u)},Fp=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]
return function(e){try{return!(!e.cssRules&&e.href)}catch(e){return!1}}(e)?yp(e,t,n,r,a):wp(e.href,t,n,r,!0)},wp=function(e,t,r,a,o){return a.push(e),new Promise((function(t,r){var a=new n.XMLHttpRequest
a.open("GET",e),a.timeout=Wt.preload.timeout,a.addEventListener("error",r),a.addEventListener("timeout",r),a.addEventListener("loadend",(function(e){if(e.loaded&&a.responseText)return t(a.responseText)
r(a.responseText)})),a.send()})).then((function(e){var n=t.convertDataToStylesheet({data:e,isCrossOrigin:o,priority:r,root:t.rootNode,shadowId:t.shadowId})
return Fp(n.sheet,t,r,a,n.isCrossOrigin)}))},Ep=function(){function e(){if(n.performance&&n.performance)return n.performance.now()}var t=null,r=e()
return{start:function(){this.mark("mark_axe_start")},end:function(){this.mark("mark_axe_end"),this.measure("axe","mark_axe_start","mark_axe_end"),this.logMeasures("axe")},auditStart:function(){this.mark("mark_audit_start")},auditEnd:function(){this.mark("mark_audit_end"),this.measure("audit_start_to_end","mark_audit_start","mark_audit_end"),this.logMeasures()},mark:function(e){n.performance&&void 0!==n.performance.mark&&n.performance.mark(e)},measure:function(e,t,r){n.performance&&void 0!==n.performance.measure&&n.performance.measure(e,t,r)},logMeasures:function(e){function t(e){Yt("Measure "+e.name+" took "+e.duration+"ms")}if(n.performance&&void 0!==n.performance.getEntriesByType)for(var r=n.performance.getEntriesByName("mark_axe_start")[0],a=n.performance.getEntriesByType("measure").filter((function(e){return e.startTime>=r.startTime})),o=0;o<a.length;++o){var i=a[o]
if(i.name===e)return void t(i)
t(i)}},timeElapsed:function(){return e()-r},reset:function(){t||(t=e()),r=e()}}}(),Cp=Ep
function xp(){if(a.elementsFromPoint)return a.elementsFromPoint
if(a.msElementsFromPoint)return a.msElementsFromPoint
var e,t=((e=a.createElement("x")).style.cssText="pointer-events:auto","auto"===e.style.pointerEvents),n=t?"pointer-events":"visibility",r=t?"none":"hidden",o=a.createElement("style")
return o.innerHTML=t?"* { pointer-events: all }":"* { visibility: visible }",function(e,t){var i,u,s,l=[],c=[]
for(a.head.appendChild(o);(i=a.elementFromPoint(e,t))&&-1===l.indexOf(i);)l.push(i),c.push({value:i.style.getPropertyValue(n),priority:i.style.getPropertyPriority(n)}),i.style.setProperty(n,r,"important")
for(l.indexOf(a.documentElement)<l.length-1&&(l.splice(l.indexOf(a.documentElement),1),l.push(a.documentElement)),u=c.length;s=c[--u];)l[u].style.setProperty(n,s.value?s.value:"",s.priority)
return a.head.removeChild(o),l}}"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object")
for(var t=Object(e),n=1;n<arguments.length;n++){var r=arguments[n]
if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(t[a]=r[a])}return t}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var t,n=Object(this),r=n.length>>>0,a=arguments[1],o=0;o<r;o++)if(t=n[o],e.call(a,t,o,n))return t}}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(e,t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
if("function"!=typeof e)throw new TypeError("predicate must be a function")
for(var n,r=Object(this),a=r.length>>>0,o=0;o<a;o++)if(n=r[o],e.call(t,n,o,r))return o
return-1}}),"function"==typeof n.addEventListener&&(a.elementsFromPoint=xp()),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e){var t=Object(this),n=parseInt(t.length,10)||0
if(0===n)return!1
var r,a,o=parseInt(arguments[1],10)||0
for(o>=0?r=o:(r=n+o)<0&&(r=0);r<n;){if(e===(a=t[r])||e!=e&&a!=a)return!0
r++}return!1}}),Array.prototype.some||Object.defineProperty(Array.prototype,"some",{value:function(e){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined")
if("function"!=typeof e)throw new TypeError
for(var t=Object(this),n=t.length>>>0,r=arguments.length>=2?arguments[1]:void 0,a=0;a<n;a++)if(a in t&&e.call(r,t[a],a,t))return!0
return!1}}),Array.from||Object.defineProperty(Array,"from",{value:(Dp=Object.prototype.toString,gp=function(e){return"function"==typeof e||"[object Function]"===Dp.call(e)},vp=Math.pow(2,53)-1,bp=function(e){var t=function(e){var t=Number(e)
return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e)
return Math.min(Math.max(t,0),vp)},function(e){var t=Object(e)
if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined")
var n,r=arguments.length>1?arguments[1]:void 0
if(void 0!==r){if(!gp(r))throw new TypeError("Array.from: when provided, the second argument must be a function")
arguments.length>2&&(n=arguments[2])}for(var a,o=bp(t.length),i=gp(this)?Object(new this(o)):new Array(o),u=0;u<o;)a=t[u],i[u]=r?void 0===n?r(a,u):r.call(n,a,u):a,u+=1
return i.length=o,i})}),String.prototype.includes||(String.prototype.includes=function(e,t){return"number"!=typeof t&&(t=0),!(t+e.length>this.length)&&-1!==this.indexOf(e,t)}),Array.prototype.flat||Object.defineProperty(Array.prototype,"flat",{configurable:!0,value:function e(){var t=isNaN(arguments[0])?1:Number(arguments[0])
return t?Array.prototype.reduce.call(this,(function(n,r){return Array.isArray(r)?n.push.apply(n,e.call(r,t-1)):n.push(r),n}),[]):Array.prototype.slice.call(this)},writable:!0}),n.Node&&!("isConnected"in n.Node.prototype)&&Object.defineProperty(n.Node.prototype,"isConnected",{get:function(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})
var Ap=function(e,t){return e.concat(t).filter((function(e,t,n){return n.indexOf(e)===t}))}
function kp(e,t,n,r,a){var o=a||{}
return o.vNodes=e,o.vNodesIndex=0,o.anyLevel=t,o.thisLevel=n,o.parentShadowId=r,o}var Tp=[],Np=function(e,t,n){e=Array.isArray(e)?e:[e]
var r=ir(t)
return gd(e,r,n)||function(e,t,n){for(var r=[],a=kp(Array.isArray(e)?e:[e],t,null,e[0].shadowId,Tp.pop()),o=[];a.vNodesIndex<a.vNodes.length;){for(var i,u,s=a.vNodes[a.vNodesIndex++],l=null,c=null,d=((null===(i=a.anyLevel)||void 0===i?void 0:i.length)||0)+((null===(u=a.thisLevel)||void 0===u?void 0:u.length)||0),p=!1,f=0;f<d;f++){var h,m,D,g=f<((null===(h=a.anyLevel)||void 0===h?void 0:h.length)||0)?a.anyLevel[f]:a.thisLevel[f-((null===(m=a.anyLevel)||void 0===m?void 0:m.length)||0)]
if((!g[0].id||s.shadowId===a.parentShadowId)&&sr(s,g[0]))if(1===g.length)p||n&&!n(s)||(o.push(s),p=!0)
else{var v=g.slice(1)
if(!1===[" ",">"].includes(v[0].combinator))throw new Error("axe.utils.querySelectorAll does not support the combinator: "+g[1].combinator)
">"===v[0].combinator?(l=l||[]).push(v):(c=c||[]).push(v)}g[0].id&&s.shadowId!==a.parentShadowId||null===(D=a.anyLevel)||void 0===D||!D.includes(g)||(c=c||[]).push(g)}for(s.children&&s.children.length&&(r.push(a),a=kp(s.children,c,l,s.shadowId,Tp.pop()));a.vNodesIndex===a.vNodes.length&&r.length;)Tp.push(a),a=r.pop()}return o}(e,r,n)},Bp=function(e){var t=e.treeRoot,n=function(e){var t=[],n=Np(e,"*",(function(e){return!t.includes(e.shadowId)&&(t.push(e.shadowId),!0)})).map((function(e){return{shadowId:e.shadowId,rootNode:la(e.actualNode)}}))
return Ap(n,[])}(void 0===t?i._tree[0]:t)
if(!n.length)return Promise.resolve()
var r=a.implementation.createHTMLDocument("Dynamic document for loading cssom")
return function(e,t){var n=[]
return e.forEach((function(e,r){var a=e.rootNode,o=e.shadowId,i=function(e,t,n){var r
return r=11===e.nodeType&&t?function(e,t){return Array.from(e.children).filter(_p).reduce((function(n,r){var a=r.nodeName.toUpperCase(),o="STYLE"===a?r.textContent:r,i=t({data:o,isLink:"LINK"===a,root:e})
return n.push(i.sheet),n}),[])}(e,n):function(e){return Array.from(e.styleSheets).filter((function(e){return!!e.media&&Sp(e.media.mediaText)}))}(e),function(e){var t=[]
return e.filter((function(e){return!e.href||!t.includes(e.href)&&(t.push(e.href),!0)}))}(r)}(a,o,t)
if(!i)return Promise.all(n)
var u=r+1,s={rootNode:a,shadowId:o,convertDataToStylesheet:t,rootIndex:u},l=[],c=Promise.all(i.map((function(e,t){return Fp(e,s,[u,t],l)})))
n.push(c)})),Promise.all(n)}(n,up(r)).then((function(e){return Rp(e)}))}
function Rp(e){return e.reduce((function(e,t){return Array.isArray(t)?e.concat(Rp(t)):e.concat(t)}),[])}function _p(e){var t=e.nodeName.toUpperCase(),n=e.getAttribute("href"),r=e.getAttribute("rel"),a="LINK"===t&&n&&r&&e.rel.toUpperCase().includes("STYLESHEET")
return"STYLE"===t||a&&Sp(e.media)}function Sp(e){return!e||!e.toUpperCase().includes("PRINT")}var Op=function(e){var t=e.treeRoot,n=void 0===t?i._tree[0]:t,r=Np(n,"video, audio",(function(e){var t=e.actualNode
return t.hasAttribute("src")?!!t.getAttribute("src"):!(Array.from(t.getElementsByTagName("source")).filter((function(e){return!!e.getAttribute("src")})).length<=0)}))
return Promise.all(r.map((function(e){var t,n=e.actualNode
return t=n,new Promise((function(e){t.readyState>0&&e(t),t.addEventListener("loadedmetadata",(function n(){t.removeEventListener("loadedmetadata",n),e(t)}))}))})))}
function Mp(e){return!e||void 0===e.preload||null===e.preload||("boolean"==typeof e.preload?e.preload:(t=e.preload,"object"===o(t)&&Array.isArray(t.assets)))
var t}function Ip(e){var t=Wt.preload,n=t.assets,r=t.timeout,a={assets:n,timeout:r}
if(!e.preload)return a
if("boolean"==typeof e.preload)return a
if(!e.preload.assets.every((function(e){return n.includes(e.toLowerCase())})))throw new Error("Requested assets, not supported. Supported assets are: ".concat(n.join(", "),"."))
return a.assets=Ap(e.preload.assets.map((function(e){return e.toLowerCase()})),[]),e.preload.timeout&&"number"==typeof e.preload.timeout&&!isNaN(e.preload.timeout)&&(a.timeout=e.preload.timeout),a}var Pp=function(e){var t={cssom:Bp,media:Op}
return Mp(e)?new Promise((function(n,r){var a=Ip(e),o=a.assets,i=a.timeout,u=setTimeout((function(){return r(new Error("Preload assets timed out."))}),i)
Promise.all(o.map((function(n){return t[n](e).then((function(e){return function(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e)}))}))).then((function(e){var t=e.reduce((function(e,t){return G({},e,t)}),{})
clearTimeout(u),n(t)})).catch((function(e){clearTimeout(u),r(e)}))})):Promise.resolve()}
function jp(e,t,n){return function(r){var a=e[r.id]||{},i=a.messages||{},u=Object.assign({},a)
delete u.messages,n.reviewOnFail||void 0!==r.result?u.message=r.result===t?i.pass:i.fail:("object"!==o(i.incomplete)||Array.isArray(r.data)||(u.message=function(e,t){function n(e){return e.incomplete&&e.incomplete.default?e.incomplete.default:kd()}if(!e||!e.missingData)return e&&e.messageKey?t.incomplete[e.messageKey]:n(t)
try{var r=t.incomplete[e.missingData[0].reason]
if(!r)throw new Error
return r}catch(r){return"string"==typeof e.missingData?t.incomplete[e.missingData]:n(t)}}(r.data,i)),u.message||(u.message=i.incomplete)),"function"!=typeof u.message&&(u.message=_d(u.message,r.data)),oa(r,u)}}var qp=function(e){var t=i._audit.data.checks||{},n=i._audit.data.rules||{},r=Jr(i._audit.rules,"id",e.id)||{}
e.tags=Kn(r.tags||[])
var a=jp(t,!0,r),o=jp(t,!1,r)
e.nodes.forEach((function(e){e.any.forEach(a),e.all.forEach(a),e.none.forEach(o)})),oa(e,Kn(n[e.id]||{}))},Lp=function(e,t){return Np(e,t)}
function zp(e,t){var n,r,a=i._audit&&i._audit.tagExclude?i._audit.tagExclude:[]
return t.hasOwnProperty("include")||t.hasOwnProperty("exclude")?(n=t.include||[],n=Array.isArray(n)?n:[n],r=t.exclude||[],r=(r=Array.isArray(r)?r:[r]).concat(a.filter((function(e){return-1===n.indexOf(e)})))):(n=Array.isArray(t)?t:[t],r=a.filter((function(e){return-1===n.indexOf(e)}))),!!(n.some((function(t){return-1!==e.tags.indexOf(t)}))||0===n.length&&!1!==e.enabled)&&r.every((function(t){return-1===e.tags.indexOf(t)}))}var Vp=function(e,t,n){var r=n.runOnly||{},a=(n.rules||{})[e.id]
return!(e.pageLevel&&!t.page)&&("rule"===r.type?-1!==r.values.indexOf(e.id):a&&"boolean"==typeof a.enabled?a.enabled:"tag"===r.type&&r.values?zp(e,r.values):zp(e,[]))}
function Hp(e,t){if(!t)return e
var n=e.cloneNode(!1),r=bn(n)
if(1===n.nodeType){var a=n.outerHTML
n=Un.get(a,(function(){return Up(n,r,e,t)}))}else n=Up(n,r,e,t)
return Array.from(e.childNodes).forEach((function(e){n.appendChild(Hp(e,t))})),n}function Up(e,t,n,r){return t?(e=a.createElement(e.nodeName),Array.from(t).forEach((function(t){(function(e,t,n){return void 0!==n[t]&&(!0===n[t]||yn(e,n[t]))})(n,t.name,r)||e.setAttribute(t.name,t.value)})),e):e}function $p(e,t){var n,r=[]
if(i._selectCache)for(var a=0,o=i._selectCache.length;a<o;a++){var u=i._selectCache[a]
if(u.selector===e)return u.result}for(var s=t.include.reduce((function(e,t){return e.length&&ra(e[e.length-1],t)||e.push(t),e}),[]),l=function(e){return e.exclude&&0!==e.exclude.length?function(t){return dp(t,e)}:null}(t),c=0;c<s.length;c++)n=s[c],r=Gp(r,Np(n,e,l))
return i._selectCache&&i._selectCache.push({selector:e,result:r}),r}function Gp(e,t){if(0===e.length)return t
if(e.length<t.length){var n=e
e=t,t=n}for(var r=0,a=t.length;r<a;r++)e.includes(t[r])||e.push(t[r])
return e}var Wp=function(e){e.forEach((function(e){return function(e,t,r){if(e===n)return e.scroll(r,t)
e.scrollTop=t,e.scrollLeft=r}(e.elm,e.top,e.left)}))}
function Yp(e){return Kp(Array.isArray(e)?U(e):[e],a)}function Kp(e,t){var n=e.shift(),r=n?t.querySelector(n):null
return 0===e.length?r:null!=r&&r.shadowRoot?Kp(e,r.shadowRoot):null}function Qp(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Array.isArray(e)?U(e):[e]
return 0===e.length?[]:Xp(n,t)}function Xp(e,t){var n,r=K(n=e)||$(n)||te(n)||Y(),a=r[0],o=r.slice(1),i=t.querySelectorAll(a)
if(0===o.length)return Array.from(i)
var u,s=[],l=ee(i)
try{for(l.s();!(u=l.n()).done;){var c=u.value
null!=c&&c.shadowRoot&&s.push.apply(s,U(Xp(o,c.shadowRoot)))}}catch(e){l.e(e)}finally{l.f()}return s}var Zp=function(){return["hidden","text","search","tel","url","email","password","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]},Jp=[,[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,,,,,1,1,1,1,,,1,1,1,,1,,1,,1,1],[1,1,1,,1,1,,1,1,1,,1,,,1,1,1,,,1,1,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,,,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1],[,1,,,,,,1,,1,,,,,1,,1,,,,1,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,,,1,,,,,1,1,1,,1,,1,,1,,,,,,1],[1,,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,,1,,1,,,,,1,,1,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,,1,1,1,,1,,1,1,1,,,1,1,1,1,1,1,1,1],[,,1,,,1,,1,,,,1,1,1,,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1,1,1,1,1,,,1,1,1],[1,1,1,1,1,,,1,,,1,,,1,1,1,,,,,1,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1],[,1,,1,1,1,,1,1,,1,,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,,,1,1,1,,,1,1,,,,,,1,1],[1,1,1,,,,,1,,,,1,1,,1,,,,,,1,,,,,1],[,1,,,1,,,1,,,,,,1],[,1,,1,,,,1,,,,1],[1,,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,,1,,,1,1,1,1],[,1,1,1,1,1,,,1,,,1,,1,1,,1,,1,,,,,1,,1],[,1,,,,1,,,1,1,,1,,1,1,1,1,,1,1,,,1,,,1],[,1,1,,,,,,1,,,,1,1,1,1,,1,1,1,1,1,1,,1,1,1],[,1,,1,1,1,,,1,1,1,1,1,1,,1,,,,,1,1,,1,,1],[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,1,1],[,1,1,1,,,,1,1,1,,1,1,,,1,1,,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,,1,,,,,1,1,1,,,1,,1,,,1,1],[,,,,1,,,,,,,,,,,,,,,,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,,1,1,1,,1,1,,,,1,1,1,1,1,,,1,1,1,,,,,1],[1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,1,,,,,,,1],[,1,1,,1,1,,1,,,,,,,,,,,,,1],,[1,1,1,,,,,,,,,,,,,1],[,,,,,,,,1,,,1,,,1,1,,,,,1]],[,[1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,,1,1,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,,1],[,,,1,,,,,,,,,,,,,,,1],[,1,,,1,1,,1,,1,1,,,,1,1,,,1,1,,,,1],[1,,,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,,,,1],,[,1,1,1,1,1,,1,1,1,,1,1,,1,1,,,1,1,1,1,,1,1,,1],[,1,,,1,,,1,,1,,,1,1,1,1,,,1,1,,1,1,1,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,,,1,1,1,1,1,1,1,,,1,,,1,,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,,,,1],[,,,,,,,1,,,,1,,1,1],[,1,1,1,1,1,1,1,,,,1,1,1,1,1,,,1,1,,1,1,1,1,1],[,1,,,1,1,,1,,1,1,1,,,1,1,,,1,,1,1,1,1,,1],[,1,1,1,,1,1,,1,1,,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1],[,,,,,,,,,,,,,,,,1],,[,1,1,1,1,1,,1,1,1,,,1,,1,1,,1,1,1,1,1,,1,,1],[,,1,,,1,,,1,1,,,1,,1,1,,1],[,1,1,,1,,,,1,1,,1,,1,1,1,1,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1],[,1,,,,,,,,,,1,1,,,,,,1,1,,1,,1,,1,1],,[,1,1,,1,,,1,,1,,,,1,1,1,,,,,,1,,,,1],[1,1,,,1,1,,1,,,,,1,,1]],[,[,1],[,,,1,,,,1,,,,1,,,,1,,,1,,,1],[,,,,,,,,,,,,,,,,,,1,1,,,,,,1],,[1,,,,,1],[,1,,,,1,,,,1],[,1,,,,,,,,,,,1,,,1,,,,,,,,,1,1],[,,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,1,,1],[,1],[,1,,1,,1,,1,,1,,1,1,1,,1,1,,1,,,,,,,1],[1,,,,,1,,,1,1,,1,,1,,1,1,,,,,1,,,1],[,1,1,,,1,,1,,1,,1,,1,1,1,1,,,1,,1,,1,1,1],[1,1,1,1,1,,1,,1,,,,1,1,1,1,,1,1,,,1,1,1,1],[1,,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],,[,1,,,,,,1,1,1,,1,,,,1,,,1,1,1,,,1],[1,,,,,1,,1,1,1,,1,1,1,1,1,,1,,1,,1,,,1,1],[1,,1,1,,,,,1,,,,,,1,1,,,1,1,1,1,,,1,,1],[1,,,,,,,,,,,,,,,,,1],[,,,,,1,,,1,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,,,1],[,1,,,,1]],[,[1,1,1,,1,,1,1,1,1,1,1,1,1,1,,1,,1,,1,1,,,1,1,1],[,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],,[,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1],,[1,1,,,,1,1,,,,,,1,,,,1,,1,,1,1,,1],[1],[,,,,,,,,,,,1,,,,,,,,,,,1],[,1,,,,,,,1,1,,,1,,1,,,,1,,,,,,,1],[,,,,,,,,,,,,,,,,1,,,,,1],[,,1,,,,,1,,1],[1,,,,1,,,,,1,,,,1,1,,,,1,1,,,,,1],[,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[1,,,1,1,,,,,,,1,,1,,1,1,1,1,1,1],[,,,,,1,,,,,,,1,,,,,,,1],,[,,1,1,1,1,1,,1,1,1,,,1,1,,,1,1,,1,1,1,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,,,,1],,[1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[,,,1,1,1,1,,,,,,1,,1,,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,,1],[,1,1,1,1,,1,1,1,1,1,1,1,1,,,,1,,1,,,1,1,1,1,1],[,,,,,,,,,,,1,,,,,,,,,1,,,,1],[,1,1,,1,1,,1,,,,1,1,,1,1,,,1,,1,1,,1],[,1,,1,,1,,,1,,,1,1,,1,1,,,1,1,1],[,1,1,1,1,1,,1,1,,,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,,,,,,,,,1,,1,,1,1,,,,1,,,1],[,1,,,1,1,,,,,,,,,1,1,1,,,,,1],[1,,,1,1,,,,1,1,1,1,1,,,1,,,1,,,1,,1,,1],[,1,1,,1,1,,1,1,,,,1,1,1,,,1,1,,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,,,,1,,,,,,,,,1],[,1,,,,,,,,1,,,,,1,,,,1,,,1],[,1,1,1,1,,,1,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1],[,,,,,1,,1,,,,,1,1,1,1,1,,,1,,,,1],[,1,,,,,,,,1,,,,,,,,,,,,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,1,,,,1,,1,1,1,1,1,,1,1,,,,,,1],[,1,1,1,1,1,1,1,,1,1,,,1,1,,,,1,,1,1,,1,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,1,1,,1,,,1,1,1,1,,,1,,,,,,,1],[,1,,,,,,,,1,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1],[,1,1,,,,,,,,,,,,1,1,,,,,,1],[,1,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,,,,,1],[1,1,,,1,,,1,1,1,,,,1],,[,,,,,,,,,,,,,1,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,1,,,,,,,1],[1,1,1,,1,,1,1,1,1,1,1,1,1,,1,,,1,,1,,,1,1],[,,,,,,,,,1],[,1,,,,1,,,,,,1,,,1,,,,,1],[,1,1,,1,1,,,,,,,,,,,,,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,1,1,1,,,,1,1,,,,1,,1],[1,1,1,1,1,1,,,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,,1,1],[,,,,,,,,,,,,,,,1,,,,1],,[1,1,,1,,1,,,,,,1,,1,,1,1,,1,,1,1,,1,1,,1],[,,1,,,,,,1,,,,1,,1,,,,,1],[1,,,,,,,,,1,,,,,,1,,,,1,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,,1,,,,,,1,,,1,,,,,,,,1],[,1,,1,,,,,,,,,,,,1],,[1,1,,,,,,,,,,,,,,,,,,,,,,1,1],[1]],[,[1,,,,,,,,,1,,,,,1,,1,,1],[,1,1,,1,1,,1,1,1,,,1,1,1,,,,1,,,1,,,,1],[,1,,,,,,,1,,,,1,,,,,,1],[1,1,1,1,1,1,,,,1,,,,,,,,,1,1,1,1],[1],[,1,1,,,1,1,,,,,1,,1,,,,,,,,1,,,,1],[1,,1,,,1,,1,,,,,1,1,1,1,,,,1,,,,1],[,,1,,,,,,,1,,,,,,,1,,,,,,,1],[1,,,,,,,,,,,,,,1,,,,1],[,,,1,,1,,,,,1,,,,1,1,,,,1],[1,,,,,1,,,,1,,1,1,,,1,1,,1,1,1,,1,1,1,,1],[,1,1,,,,,1,,1,,1,1,1,,1,1,,,1,,1,1,1],[,1,,,,1,,,,1,,,1,,1,1,,,1,1,,,,,,1],[1,,1,1,,1,,1,1,,1,,1,1,1,1,1,,,1,1,,,,,,1],[1,,,,,,,,,,,,,,,,,,1,,,1,,1],[,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,,1,,1],[,1,,,,1,,,1,1,,1,,,1,1,,,1,,,1,,,1,1],[1,1,,1,1,1,,1,1,1,,1,,1,1,1,,,1,,1,1],[1,,1,1,1,1,,,,1,,1,1,1,,1,,,1,1,1,,1,1,1,1,1],[1,,,,,,,,,,,,,1],[,,1,,,,,,,,,,,,,,,,,,,,1],[1,,,,,,,,,,,1,,1,,1,,,,1],[,,,1,,,,,,,,,1],[,1,,,,,,,,,,,,,,1,,,,,,,,,1],[,,,,,,,,1,1,,,,,,,,,1,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,,,1,1,1],[,,,,,1,,,,1,1,1,,,1,1,,,1,,1,1,,1],[,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,1,,,,,,,,,,,,,1],[,,1,,,1,,1,1,1,,1,1,,1,,,,1,,1,1],,[,,1,,,1,,,,,,1,,,,1],[,,,,,,,,,1,,,,,,,,,,1],[1,1,1,1,1,1,,1,1,1,,,1,1,,1,,1,,,1,1,1,,,1],[,,,,,1,,,,,,,,,,,,,1],[,1,,,,,,,,,,,,1,,1,1,,1,,,1],[,,,,,1,,,,,,,,,,,,,,1],[,1,1,1,1,,,,,1,,,1,,1,,,,1,1,,,,1,1],[,1,,,1,,,1,,1,1,,1,,,,,,,1],[,,1,,1,,,1,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,,,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,,,,,,,,,,1,,1,1],[,,,,,,,,,,,,1],,[,1,1,1,1,,,,1,1,,1,1,1,1,1,1,,1,1,1,1,,1,,1],[1,,,,1,,,,,,,,,,1],[1,,,,,,,,,1],,[,1,,,,1,,,,,,,,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,,,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,,1,1,1,1],[1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,,1,,,,1,1,,,1,1,,1],[,1,1,,1,,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,1],[1,1,1,,,,,1,1,1,,1,1,1,1,,,1,1,,1,1,,,,,1],[,1,,,,,,,1,1,,,1,1,1,,1,,,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,,,1,,,,1,,,1,,,,1,,,,,,,1,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1],[1,1,1,,1,,,1,1,1,1,,1,1,1,1,,,,1,,1,,1,,,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,,1,1,,,,,,,,,1],,[,1,,1,,1,,1,,1,,1,1,1,1,1,,,1,,1,,1,,,,1],[,1,,,1,1,,1,1,1,,,1,1,1,1,1,,1,1,1,,1,,,1],[1,,,1,,,,1,1,1,,,,,1,1,,,,1,,1],[1,1,,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,,1,,1,,,,,,,,1,,1],[,1,,,,1,,1,1,,,,1,1,,1,,,,1,1,1,,1],,[,1,,,,,,1,,,,,,,1],[,,,,,,,,1,,,,1,,1,,,,,,,,,,,,1]],[,[,1,1,,1,1,1,1,,1,1,1,,1,1,,1,1,,1,1,1,1,1,1,,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,,,1,,,,,,,,1,,,,,,1,,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,1,1,1,,1,1,1,1,,,1,1,1,1,,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,,1,,1,,1,,1,1,1,1,1,1,1,,1,1,,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1],[,1,1,,,,,1,1,1,,,1,,1,1,,,,1,,1,,,1,1],[,,,,,,,1,,,,1,1,1,1,1,,1,,,,,,,,1],[1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,,1,,1,1,,,1,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,1,1,,1,,1,1,1,,1,,1,1,,1,1,,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,,,,,,1,,,,,1,,1],[,1,1,1,,1,,1,,1,,,,1,,1,,,1,,,,,,1,1],[,1,,,1,1,,1,,1,,1,1,1,1,1,,1,1,,,1,,,1],[1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,,,1,,1,,1,,,,,,1,,1,,,,1,1]],[,[,1,,1,,,,,,,,,,,,,,,1,,,,1],[,,,,,,,,,1,,1,1,1,,1,,,1,,1,1],[1,1,,,,,,,1,,,,,,,1,,,,,,1],[,1,,,,,,,,,,1,,,,,,,,,1,1],,[,,,,,,,,,,,,,,,1,,,,1,,1],[,,1,1,,1,,1,,,,,,,,1,,,,,,1],[,,,,,,,,,,,,,,,,,,,,1,1],[,1,,,,,,,,,,,,,1],[1,,1,1,,,,1,,,,,,,,,1,,,1,,,1,1],[,1,1,,1,1,,1,1,1,1,1,1,1,1,1,,,1,1,,1,1,,1],[,1,,,1,1,,,,,,1,,1,,1,,,1,,1,1],[1,1,1,1,,1,,1,,1,,1,1,,1,1,1,1,1,,1,1,1,1,1],[,1,1,,,1,,1,,1,1,1,,,1,1,1,,1,1,1,1,,1,1],[,,,,1,,,1,,,,,,,1,,,,1,1],[,1,,,,,,,,,,1,,1,,1,,,,,1,,,,,1],,[1,1,,1,,1,,1,1,,,,,,1,1,,,1,1,1,1,1,1,1,1,1],[1,1,,1,,,,,,1,,,,,,1,1,,,,1,1,,,1],[,1,1,,1,1,,,,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,,,1,,,,1,,,,1,1],[,,,,1],[,,,,,,,,,1,,,1],,[,,1,,1,,,,,,,,,1,,,,,,,,,,,,1],[,,,,,,,,,,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,1,1,1,1,,,1,1,1,1,1,,1,1,1,1,1,,,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,,,,,1],[,1,,1,,,,,,1,,,,,1,1,,,,,1,1],[,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,,1,,,1,,1,1,1],[,1,,,,1,,,,,,,1],[,1,,,1,,,1,,1,,1,1,,1,,,,,1,,1,,,,1,1],[,1,,,1,,,1,1,1,,1,1,1,1,1,,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1],[,,,,,,,,,,,,,,,,,,,,1],[,1,1,1,,,,1,1,,,,,,1,1,1,,1,1,1,1],[1,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1],[,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,1,1,1,1,1,1,1,,1,,1,1,1,1,1,,1,1,,1,1,1,1,1],[,1,,,,1,,,,1,,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,1,,,,,,,,1,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1],[1,1,,1,1,1,,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,,,,,,,1,1,,,,,1,1,1,1,1,,1,1,1,1,,1],[,1,1,1,1,1,1,1,,1,1,1,,1,,1,1,1,1,,1,1,,1,1,1,1],,[,1,1,,,,,1,,1,,,,1,1,1,,,1,,,,,1],[,,,,,,,,,,,,,1],[,,,,,1,,,,,,,,1,1,,,,,1,,1,,,1,1],[,,,,,,,,,,,,,,1]],[,[,1],,,,,,,,,,,,,,,,,,,,[1,1,1,1,1,,1,1,1,1,,1,1,1,1,,1,1,1,1,,,1,1,1,1,1],[,1,,1,,1,,,1,1,1,,1,1,1,1,1,,,1,,,,1,,1,1],[,1,,1,,1,,,1,,,,,1,,,,,,1,1],[,1,,1,,,,,1,,,,1,,1,1,1,1,1,1,1,1,,1],[,1,,,,,,,,,,,,,,,1]],[,[,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,,,,,,,,,1,1,,,,1],[,,,,,,1],[,,1],[,1,1,,,1,,1,,1,1,,1,1,1,,,,1,1,1,,,,,1],,[,1,,,,1,,,,,,1,,,1,,,,1,1,,1],[,,,,,,,1,,,,,,,,,1],[,1,,,,1,1,,,,,,1,1,1,,,,1,,1,1],[,,,,,,,1,,1,,,,,,,,,,1],[,1,1,,,,,,1,1,,,,1,,,,,,,1,,,1],,[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,,1,,,1,,,,,1,,1,,1,,1,,,,,1],[1,1,1,1,1,1,1,1,,,,,1,1,,1,1,,1,,,1,,1],[,,,,,,,,,,,,,,1,,,,,,1],,[,,,,,,,,,1,,,,,,1,,,,,1],[,,1,,,,,,,1,,,1,1],[,,,1,,,,,1,,,,,1,,,,,,1,,,,1],[1,,1,1,,1,1,1,1,1,,1,,,,1,1,1,,,1,1,,,,1,1],,[1,1,,,,,,,,,,1,,1,,1,,,1],[,,,,1,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,1,,,,,1,,1],[,,,,,,,,1]],[,[1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,,1,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,,1,,,1,,,,,,,,1,,,,,,1,,,,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,1,,,,1,1,1,1,1,1,,1,1,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,,1,1,1,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1],[1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,,1,1,1,1,,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,,,,,,,1,,1,1,,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1],[1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,,1,,1,,1,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1],[1,1,1,1,,1,,,,,,1,,1,,,,,1,1,,,,,1],[1,,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,1,1,,1,,1,,,,1,1,1,1,1,,,1,1,,1,,1],[,1,1,1,1,,,,,1,,1,1,1,1,1,,,1,1,,,,1,1,1],[,1,1,1,1,1,,1,,,,,1,,1,,1,,,1,,,1,1,,1]],[,[1,1,1,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1,,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,,,,,1,,,,,1,1,,,1,,1],[1,1,1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,,1,1,1,1,,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1],[1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,,,,1,,1,1,,1,1,1,1,1,,,1,,1,,1],[1,1,1,,1,1,1,1,,,,1,1,1,1,,1,1,1,1,1,1,1,1,1,,1],[1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,,1,1,1,1,1,1,1,1,1,,1,1,,1,1,1,1,1,,1,1,1,1,1,1],[,1,,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1],[,,1,,,,,,,,,,1,1,1,1,1,1,1,,1,1,,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,1,1,1,1,1],[,1,,,1,1,,,,,,1,1,1,1,1,,,,1,1,1,,1,1,1],[1,1,1,1,1,1,1,1,1,,,,1,1,1,1,1,1,1,,1,1,,1,1,1],[,1,1,1,,1,,1,1,1,1,,,1,1,1,,1,1,1,1,1,,,1,1],[1,1,,,,1,,,1,1,1,,1,,1,,1,,1,1,1,1,1,,1,,1],[,1,,,,,,,1,,1,,1,1,1,1,,,,,,,,,1]],[,[,,,,,,,,,,,,,1,1,,,,1],[,1,,,,,,,,1,,,1,,,,,,1,,,1,,,,1],,[,1,,,,1,,1,,1,1,,1,1,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1],[,,,,,,,,,1],[1,1,1,,,1,,,,,,,,,1,1,,,,,,,,,,1],[,1,,,,,,,,,,,,,1],[,,,,,,,,,,,,,,,,,,,1,,,1],[,,,,,,,,,1],[1,1,,,,,,1,1,1,,1,1,,,,1,1,,1,,1,1,1,,1],[,1,1,1,,1,1,,,1,,1,1,1,1,,,,,,,1,,1],[,1,1,1,1,,,1,,1,,,,1,1,1,1,,1,1,,1],[,1,,,1,1,,1,,,,1,,1,1,,1,,1,,,1,,,1,,1],[,,,,,,,,,,,1],[,,,,,,,,,1,,,,,,,,,,,,,1],,[1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,,1,1,1,1,1,1,1],[,1,,,,,,,1,1,,1,,,,,1,,,1,,1],[,1,,,,1,,,1,,,,,,,,1,,1,,,1],[,,,,,,,,,,,,,1,1,,,,1,,,1],[,,,,,1,,,1,,,,1],[,1],,[,1],[1,,,,,,,,,,,,,,1,,,,,1]],[,[,1,,,,1,1,1,1,1,1,,1,1,1,1,1,,1,1,,1,1,,,1],[,,1,,,,,,,,,1],,,[1,,,1,1,,,,,,,,1,1,,1,1,,1],,[,,,,,,,,,,,,,,,,,,1,,1],,[1,,,1,1,,1,1,,,,,1,,1,,,,,1,1,,1],,[,1,,,,,,,,1,1,1,1,1,,1,1,,,,1,1],[,,,,,,,,,,,,,,,,1,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,,1,1,1,1,1,1],[,,,,,,,,,,,1,,1,,,1],[1,,,,,,,,,,,,,,,,,,1,,1],,,[,1,,,,,,,,,,,,,,1,,,,1,1],[,,,,,,,,,1,,,1,,,,,,,,,,1],[,,,,,,,,,,,,,,,1],[,,,,,,,,,,,,,1,1,,,,,,1],,[,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,,1,1,,1,1,1,1,1,1,,,1,1,1,1,1,,1,1],[,1,,,,,,,,1],[,,,,1,,,1,,,1,1,,,,,,,,,,1,,,,1],[,1,,1,1,,,1,1,1,,,,1,1,1,1,,1,1,1,1,,1],[,,,,,,,1],[,1,1,,,,,1,,1,,,,,,1,,,,,,1,,1,,1],[,1,,,,,,1,,,,1,,,,,,,,,,1],[,,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1,1,1,1,,1],[,1,,,,,,,,1],[,1,1,,1,,,,,,,,1,,,,,,1,,,1,,1,,1],[,1,,1,,1,,1,1,1,,1,1,1,,1,,,1,1,,1,1,1,1,1],[,1,1,1,1,1,,,1,1,,,,1,1,1,,,,1,1,,,1,1],[,,1,1,1,1,,1,,1,,1,,1,1,1,1,,,,,1,,1,,1],[1,1,1,1,1,1,1,1,,1,,1,,1,1,1,,,1,1,,,,1,,1],[,,,1],,[,1,1,,1,,,1,1,1,,1,1,1,1,1,1,,1,1,,1,1,1,1,1,1],[,1,,,,,,1,,1,,1,,,,,,,1,1,,1,1],[,,,,,,1,,1,1,,1,,1,,,,,,,,,,1],[,1,1,,1,,,,1,,,,1,1,1,,,,1,,1,1,1,,1,1],,[,1,1,,,,,,,,,,,,,1,,,1,,,,,1],[,1,,,,,,,,,,,,,,,,,,,,,,1],[,1,1,,,,,,,1,,,,1,,,,,1,,,,,,,1]],[,[,1,1,1,1,1,,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1],[,1,1,1,1,1,,1,,1,1,,,1,1,1,1,,1,,,,,1,1,1],[,,1,1,,1,,1,1,,,,1,1,1,1,,,1,,1,1,1,1,,1],[,1,,1,,,,,,,,1,,1,,1,,,,,,,,,,1],[,,1,,1,,,1,,,,,1,1,,,1,,1,1,1,1],[,1],[,1,1,,1,,1,1,,1,,,1,1,1,,,,1,,,1,,1],[1,1,,1,1,1,,,,,,,,,,,,,1,,1,1,1],[,1,1,,,,,,,1,,,1,,1,,1,,1,1,,,1,,,1],[,,1,,,,,,,,,,,,,,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,1,1,1,,1,,1,,,,,1,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,,,1,1,1,,1,,1,1,1,,,1,1,1,1,,,,1,1],[,,,1,1,,,1,,1,,1,,1,1,1,1,,1,,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,1,,1,1,,1,,1,,,,1,1,,,1,1,,1,1,,1],[,1,1,1,1,1,,,1,1,1,,1,1,1,1,1,1,1,1,,1,1,,,1],[,1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],[,1,1,,1,,,1,,,1,,1,1,1,1,1,,1,,1,1],[,,,,,1,,,,1,,,,,1,1,,,,1],[,1,,1,1,1,,1,,,1,1,1,,,1,,,1,,1,,,1],[,,1,,,,,,,,,1,,1,,,,,1,,1],[,1,1,,,,,,,,1,1,1,,,,,,,,1,,,,,1],[,,,,,,,,1,,,,,1,,,1]],[,[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,1,,1,1,,,1,1,1,1,1,1,1,1,,,,,,,,,1,1],[,,,,,,,,1,,,,1,,1,,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,1,,1,,1,,,,1,1,,1,,1,,,,1,1,1,1,1,,,1],,[,1,,,,,,,,1,,,1,1,,,1,,1,1,,1,,1],[,1,,,1,,,,,,,,1,,,,,,,1],[1,1,,,,,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,,1,1,1],,[,1,,,,,,1,,1,,1,1,1,1,1,,,1,,1,1,,,,1],[,1,1,,,1,,1,,1,,,1,1,1,1,,,1,,,1,,,,1],[,1,1,1,1,1,,1,1,1,,1,1,1,1,1,1,1,1,1,1,,,,1,,1],[,1,,,1,1,,1,1,,,1,1,,1,1,,1,,1,,1],[1,,1,,,,,1,,1,,1,1,1,1,,,,,1,1,,,,1,1],[,1,1,,,,,1,1,,,1,,1,1,1,1,,,,,,,,,,1],,[,1,1,,,1,,,,1,,1,1,1,1,1,,,,1,,,,1,,1],[,,,1,1,,,1,,,,,1,,1,1,1,,1,1,,,,,,1],[,1,,,,,,,,,,,1,,,,1,,,,,,,1,,1],[,1,1,1,1,1,1,1,,1,1,1,1,1,1,,1,1,1,,1,1,,1,1,1,1],[,1,,,,,,,,,,,,,,,,,,,1],[,1,,,,,,1,,,,,1,,1,,,1,1,,1,1,,1],[,1,,,,,,1,,,,,1,1,,,,,,,,1,,,,1],[,,,,,,,,,,,,,,,,,,1,,,1,,,,,1],[,,,,,,,1,,,,1]],[,[1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,1,,1,,,,,,,1,,,,,,,,1,,,1],[,1,,,,,,,1],[,,,,,,,,,,1],[,1,,,,,,1,1,,,,,,1],,[,1,1,,,,,,1,,,,,1,1,,,,1],[1,,1,,1,,,,,1,,,,,1,,,,,,,,,1,1],[,1,1,,,,,,,,,1,1,1,1,,,,1,,,,,1,,,1],,[,1,1,,1,,,1,1,,,1,,,1,1,1,,1,,1,1,1,,,,1],[,,,,,1,,,,,1,,,1,1,,,1,,1,,,,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,1,,,1,1,,1,,,,1,,,,,,,,1],[,,,1,,,,,1,,,,,1,,1,,1,1,1],[,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[,,,,,1],[,1,,,,,,1,,,,,,,1,1,1,,,1],[,1,,,,,,,,,,1,1,1,,,,,1,,,1],[,,,,,1,,1,,,,,1,1,1,,1,1,,1,1,1,,,1,1],[1,1,,,,,,,1,,,,,1,1,,,,,,,,,,,1],,[,1],[,,,,,,,,,,,,,,,,,,,,,,,,1],[,,1,,,,,1,,,1,,,,1,,1],[,1,,,,,,,,,1]]]
function ef(e){e=Array.isArray(e)?e:Jp
var t=[]
return e.forEach((function(e,n){var r=String.fromCharCode(n+96).replace("`","")
Array.isArray(e)?t=t.concat(ef(e).map((function(e){return r+e}))):t.push(r)})),t}var tf=function(e){for(var t=Jp;e.length<3;)e+="`"
for(var n=0;n<=e.length-1;n++)if(!(t=t[e.charCodeAt(n)-96]))return!1
return!0},nf=function(e){B(n,e)
var t=_(n)
function n(e){var r,a,i,u
return Q(this,n),(r=t.call(this))._props=function(e){var t,n,r,a=null!==(t=e.nodeName)&&void 0!==t?t:af[e.nodeType],o=null!==(n=null!==(r=e.nodeType)&&void 0!==r?r:rf[e.nodeName])&&void 0!==n?n:1
dn("number"==typeof o,"nodeType has to be a number, got '".concat(o,"'")),dn("string"==typeof a,"nodeName has to be a string, got '".concat(a,"'"))
var i=null
"input"===(a=a.toLowerCase())&&(i=(e.type||e.attributes&&e.attributes.type||"").toLowerCase(),Zp().includes(i)||(i="text"))
var u=G({},e,{nodeType:o,nodeName:a})
return i&&(u.type=i),delete u.attributes,Object.freeze(u)}(e),r._attrs=(a=e.attributes,i=void 0===a?{}:a,u={htmlFor:"for",className:"class"},Object.keys(i).reduce((function(e,t){var n=i[t]
return dn("object"!==o(n)||null===n,"expects attributes not to be an object, '".concat(t,"' was")),void 0!==n&&(e[u[t]||t]=null!==n?String(n):null),e}),{})),r}return Z(n,[{key:"props",get:function(){return this._props}},{key:"attr",value:function(e){var t
return null!==(t=this._attrs[e])&&void 0!==t?t:null}},{key:"hasAttr",value:function(e){return void 0!==this._attrs[e]}},{key:"attrNames",get:function(){return Object.keys(this._attrs)}}]),n}(Qt),rf={"#cdata-section":2,"#text":3,"#comment":8,"#document":9,"#document-fragment":11},af={}
Object.keys(rf).forEach((function(e){af[rf[e]]=e}))
var of,uf=nf,sf=function(e,t){if(e=e||function(){},t=t||i.log,!i._audit)throw new Error("No audit configured")
var n=i.utils.queue(),r=[]
Object.keys(i.plugins).forEach((function(e){n.defer((function(t){var n=function(e){r.push(e),t()}
try{i.plugins[e].cleanup(t,n)}catch(e){n(e)}}))}))
var o=i.utils.getFlattenedTree(a.body)
i.utils.querySelectorAll(o,"iframe, frame").forEach((function(e){n.defer((function(t,n){return i.utils.sendCommandToFrame(e.actualNode,{command:"cleanup-plugin"},t,n)}))})),n.then((function(n){0===r.length?e(n):t(r)})).catch(t)},lf={}
function cf(e){return lf.hasOwnProperty(e)}function df(e){return"string"==typeof e&&lf[e]?lf[e]:"function"==typeof e?e:of}var pf={}
oe(pf,{allowedAttr:function(){return ff},arialabelText:function(){return Io},arialabelledbyText:function(){return Mo},getAccessibleRefs:function(){return Df},getElementUnallowedRoles:function(){return yf},getExplicitRole:function(){return Uo},getImplicitRole:function(){return bi},getOwnedVirtual:function(){return Ti},getRole:function(){return Ci},getRoleType:function(){return Bu},getRolesByType:function(){return wf},getRolesWithNameFromContents:function(){return Cf},implicitNodes:function(){return Nf},implicitRole:function(){return bi},isAccessibleRef:function(){return Bf},isAriaRoleAllowedOnElement:function(){return gf},isComboboxPopup:function(){return Rf},isUnsupportedRole:function(){return Vo},isValidRole:function(){return Ho},label:function(){return Sf},labelVirtual:function(){return lu},lookupTable:function(){return Tf},namedFromContents:function(){return ki},requiredAttr:function(){return Of},requiredContext:function(){return Mf},requiredOwned:function(){return If},validateAttr:function(){return jf},validateAttrValue:function(){return Pf}})
var ff=function(e){var t=zo.ariaRoles[e],n=U(Go())
return t?(t.allowedAttrs&&n.push.apply(n,U(t.allowedAttrs)),t.requiredAttrs&&n.push.apply(n,U(t.requiredAttrs)),n):n},hf=/^idrefs?$/
function mf(e,t,n){if(e.hasAttribute){if("LABEL"===e.nodeName.toUpperCase()&&e.hasAttribute("for")){var r=e.getAttribute("for")
t[r]=t[r]||[],t[r].push(e)}for(var a=0;a<n.length;++a){var o=n[a],i=Zo(e.getAttribute(o)||"")
if(i)for(var u=md(i),s=0;s<u.length;++s)t[u[s]]=t[u[s]]||[],t[u[s]].push(e)}}for(var l=0;l<e.childNodes.length;l++)1===e.childNodes[l].nodeType&&mf(e.childNodes[l],t,n)}var Df=function(e){e=e.actualNode||e
var t=ca(e)
t=t.documentElement||t
var n=Un.get("idRefsByRoot",(function(){return new WeakMap})),r=n.get(t)
return r||(r={},n.set(t,r),mf(t,r,Object.keys(zo.ariaAttrs).filter((function(e){var t=zo.ariaAttrs[e].type
return hf.test(t)})))),r[e.id]||[]},gf=function(e,t){var n=e instanceof Qt?e:$n(e),r=bi(n),a=vi(n)
return Array.isArray(a.allowedRoles)?a.allowedRoles.includes(t):t!==r&&!!a.allowedRoles},vf=["doc-backlink","doc-biblioentry","doc-biblioref","doc-cover","doc-endnote","doc-glossref","doc-noteref"],bf={header:"banner",footer:"contentinfo"},yf=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=mp(e).vNode
if(!cp(n))return[]
var r=n.props.nodeName,a=bi(n)||bf[r]
return function(e){var t=[]
if(!e)return t
if(e.hasAttr("role")){var n=md(e.attr("role").toLowerCase())
t=t.concat(n)}return t.filter((function(e){return Ho(e)}))}(n).filter((function(e){return!function(e,t,n,r){return!(!n||e!==r)||(!vf.includes(e)||Bu(e)===r)&&gf(t,e)}(e,n,t,a)}))},Ff=function(e){return Object.keys(zo.ariaRoles).filter((function(t){return zo.ariaRoles[t].type===e}))},wf=function(e){return Ff(e)},Ef=function(){return Un.get("ariaRolesNameFromContent",(function(){return Object.keys(zo.ariaRoles).filter((function(e){return zo.ariaRoles[e].nameFromContent}))}))},Cf=function(){return Ef()},xf=function(e){return null===e},Af=function(e){return null!==e},kf={attributes:{"aria-activedescendant":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-atomic":{type:"boolean",values:["true","false"],unsupported:!1},"aria-autocomplete":{type:"nmtoken",values:["inline","list","both","none"],unsupported:!1},"aria-busy":{type:"boolean",values:["true","false"],unsupported:!1},"aria-checked":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-colcount":{type:"int",unsupported:!1},"aria-colindex":{type:"int",unsupported:!1},"aria-colspan":{type:"int",unsupported:!1},"aria-controls":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-current":{type:"nmtoken",allowEmpty:!0,values:["page","step","location","date","time","true","false"],unsupported:!1},"aria-describedby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-describedat":{unsupported:!0,unstandardized:!0},"aria-details":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-disabled":{type:"boolean",values:["true","false"],unsupported:!1},"aria-dropeffect":{type:"nmtokens",values:["copy","move","reference","execute","popup","none"],unsupported:!1},"aria-errormessage":{type:"idref",allowEmpty:!0,unsupported:!1},"aria-expanded":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-flowto":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-grabbed":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-haspopup":{type:"nmtoken",allowEmpty:!0,values:["true","false","menu","listbox","tree","grid","dialog"],unsupported:!1},"aria-hidden":{type:"boolean",values:["true","false"],unsupported:!1},"aria-invalid":{type:"nmtoken",allowEmpty:!0,values:["true","false","spelling","grammar"],unsupported:!1},"aria-keyshortcuts":{type:"string",allowEmpty:!0,unsupported:!1},"aria-label":{type:"string",allowEmpty:!0,unsupported:!1},"aria-labelledby":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-level":{type:"int",unsupported:!1},"aria-live":{type:"nmtoken",values:["off","polite","assertive"],unsupported:!1},"aria-modal":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiline":{type:"boolean",values:["true","false"],unsupported:!1},"aria-multiselectable":{type:"boolean",values:["true","false"],unsupported:!1},"aria-orientation":{type:"nmtoken",values:["horizontal","vertical"],unsupported:!1},"aria-owns":{type:"idrefs",allowEmpty:!0,unsupported:!1},"aria-placeholder":{type:"string",allowEmpty:!0,unsupported:!1},"aria-posinset":{type:"int",unsupported:!1},"aria-pressed":{type:"nmtoken",values:["true","false","mixed","undefined"],unsupported:!1},"aria-readonly":{type:"boolean",values:["true","false"],unsupported:!1},"aria-relevant":{type:"nmtokens",values:["additions","removals","text","all"],unsupported:!1},"aria-required":{type:"boolean",values:["true","false"],unsupported:!1},"aria-roledescription":{type:"string",allowEmpty:!0,unsupported:!1},"aria-rowcount":{type:"int",unsupported:!1},"aria-rowindex":{type:"int",unsupported:!1},"aria-rowspan":{type:"int",unsupported:!1},"aria-selected":{type:"nmtoken",values:["true","false","undefined"],unsupported:!1},"aria-setsize":{type:"int",unsupported:!1},"aria-sort":{type:"nmtoken",values:["ascending","descending","other","none"],unsupported:!1},"aria-valuemax":{type:"decimal",unsupported:!1},"aria-valuemin":{type:"decimal",unsupported:!1},"aria-valuenow":{type:"decimal",unsupported:!1},"aria-valuetext":{type:"string",unsupported:!1}},globalAttributes:["aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-dropeffect","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"]}
kf.role={alert:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},alertdialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["dialog","section"]},application:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage","aria-activedescendant"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","audio","embed","iframe","object","section","svg","video"]},article:{type:"structure",attributes:{allowed:["aria-expanded","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["article"],unsupported:!1},banner:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["header"],unsupported:!1,allowedElements:["section"]},button:{type:"widget",attributes:{allowed:["aria-expanded","aria-pressed","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["button",'input[type="button"]','input[type="image"]','input[type="reset"]','input[type="submit"]',"summary"],unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Af}}]},cell:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-rowindex","aria-rowspan","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},checkbox:{type:"widget",attributes:{allowed:["aria-checked","aria-required","aria-readonly","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="checkbox"]'],unsupported:!1,allowedElements:["button"]},columnheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},combobox:{type:"composite",attributes:{allowed:["aria-autocomplete","aria-required","aria-activedescendant","aria-orientation","aria-errormessage"],required:["aria-expanded"]},owned:{all:["listbox","tree","grid","dialog","textbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:"input",properties:{type:["text","search","tel","url","email"]}}]},command:{nameFrom:["author"],type:"abstract",unsupported:!1},complementary:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["aside"],unsupported:!1,allowedElements:["section"]},composite:{nameFrom:["author"],type:"abstract",unsupported:!1},contentinfo:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["footer"],unsupported:!1,allowedElements:["section"]},definition:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dd","dfn"],unsupported:!1},dialog:{type:"widget",attributes:{allowed:["aria-expanded","aria-modal","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["dialog"],unsupported:!1,allowedElements:["section"]},directory:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["ol","ul"]},document:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["body"],unsupported:!1,allowedElements:["article","embed","iframe","object","section","svg"]},"doc-abstract":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-acknowledgments":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-afterword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-appendix":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-backlink":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Af}}]},"doc-biblioentry":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author"],context:["doc-bibliography"],unsupported:!1,allowedElements:["li"]},"doc-bibliography":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-biblioentry"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-biblioref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Af}}]},"doc-chapter":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-colophon":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-conclusion":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-cover":{type:"img",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-credit":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-credits":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-dedication":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-endnote":{type:"listitem",attributes:{allowed:["aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,namefrom:["author"],context:["doc-endnotes"],unsupported:!1,allowedElements:["li"]},"doc-endnotes":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["doc-endnote"]},namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-epigraph":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1},"doc-epilogue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-errata":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-example":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-footnote":{type:"section",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","footer","header"]},"doc-foreword":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-glossary":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:["term","definition"],namefrom:["author"],context:null,unsupported:!1,allowedElements:["dl"]},"doc-glossref":{type:"link",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Af}}]},"doc-index":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-introduction":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-noteref":{type:"link",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author","contents"],context:null,unsupported:!1,allowedElements:[{nodeName:"a",attributes:{href:Af}}]},"doc-notice":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pagebreak":{type:"separator",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["hr"]},"doc-pagelist":{type:"navigation",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},"doc-part":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-preface":{type:"landmark",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-prologue":{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-pullquote":{type:"none",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside","section"]},"doc-qna":{type:"section",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},"doc-subtitle":{type:"sectionhead",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["h1","h2","h3","h4","h5","h6"]}},"doc-tip":{type:"note",attributes:{allowed:["aria-expanded"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},"doc-toc":{type:"navigation",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,namefrom:["author"],context:null,unsupported:!1,allowedElements:["nav","section"]},feed:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{one:["article"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["article","aside","section"]},figure:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["figure"],unsupported:!1},form:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["form"],unsupported:!1},grid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-colcount","aria-level","aria-multiselectable","aria-readonly","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,implicit:["table"],unsupported:!1},gridcell:{type:"widget",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-selected","aria-readonly","aria-required","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["td","th"],unsupported:!1},group:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["details","optgroup"],unsupported:!1,allowedElements:["dl","figcaption","fieldset","figure","footer","header","ol","ul"]},heading:{type:"structure",attributes:{required:["aria-level"],allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["h1","h2","h3","h4","h5","h6"],unsupported:!1},img:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["img"],unsupported:!1,allowedElements:["embed","iframe","object","svg"]},input:{nameFrom:["author"],type:"abstract",unsupported:!1},landmark:{nameFrom:["author"],type:"abstract",unsupported:!1},link:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["a[href]","area[href]"],unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["image","button"]}}]},list:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:{all:["listitem"]},nameFrom:["author"],context:null,implicit:["ol","ul","dl"],unsupported:!1},listbox:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-readonly","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["option"]},nameFrom:["author"],context:null,implicit:["select"],unsupported:!1,allowedElements:["ol","ul"]},listitem:{type:"structure",attributes:{allowed:["aria-level","aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["list"],implicit:["li","dt"],unsupported:!1},log:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},main:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["main"],unsupported:!1,allowedElements:["article","section"]},marquee:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},math:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["math"],unsupported:!1},menu:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,implicit:['menu[type="context"]'],unsupported:!1,allowedElements:["ol","ul"]},menubar:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:{one:["menuitem","menuitemradio","menuitemcheckbox"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},menuitem:{type:"widget",attributes:{allowed:["aria-posinset","aria-setsize","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="command"]'],unsupported:!1,allowedElements:["button","li",{nodeName:"iput",properties:{type:["image","button"]}},{nodeName:"a",attributes:{href:Af}}]},menuitemcheckbox:{type:"widget",attributes:{allowed:["aria-checked","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="checkbox"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Af}}]},menuitemradio:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["menu","menubar"],implicit:['menuitem[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button","radio"]}},{nodeName:"a",attributes:{href:Af}}]},navigation:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["nav"],unsupported:!1,allowedElements:["section"]},none:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Af}}]},note:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["aside"]},option:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-checked","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["listbox"],implicit:["option"],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["checkbox","button"]}},{nodeName:"a",attributes:{href:Af}}]},presentation:{type:"structure",attributes:null,owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:[{nodeName:["article","aside","dl","embed","figcaption","fieldset","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hr","iframe","li","ol","section","ul"]},{nodeName:"img",attributes:{alt:Af}}]},progressbar:{type:"widget",attributes:{allowed:["aria-valuetext","aria-valuenow","aria-valuemax","aria-valuemin","aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["progress"],unsupported:!1},radio:{type:"widget",attributes:{allowed:["aria-selected","aria-posinset","aria-setsize","aria-required","aria-errormessage","aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,implicit:['input[type="radio"]'],unsupported:!1,allowedElements:[{nodeName:["button","li"]},{nodeName:"input",properties:{type:["image","button"]}}]},radiogroup:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-required","aria-expanded","aria-readonly","aria-errormessage","aria-orientation"]},owned:{all:["radio"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["ol","ul","fieldset"]}},range:{nameFrom:["author"],type:"abstract",unsupported:!1},region:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["section[aria-label]","section[aria-labelledby]","section[title]"],unsupported:!1,allowedElements:{nodeName:["article","aside"]}},roletype:{type:"abstract",unsupported:!1},row:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-colindex","aria-expanded","aria-level","aria-selected","aria-rowindex","aria-errormessage"]},owned:{one:["cell","columnheader","rowheader","gridcell"]},nameFrom:["author","contents"],context:["rowgroup","grid","treegrid","table"],implicit:["tr"],unsupported:!1},rowgroup:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-errormessage"]},owned:{all:["row"]},nameFrom:["author","contents"],context:["grid","table","treegrid"],implicit:["tbody","thead","tfoot"],unsupported:!1},rowheader:{type:"structure",attributes:{allowed:["aria-colindex","aria-colspan","aria-expanded","aria-rowindex","aria-rowspan","aria-required","aria-readonly","aria-selected","aria-sort","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["row"],implicit:["th"],unsupported:!1},scrollbar:{type:"widget",attributes:{required:["aria-controls","aria-valuenow"],allowed:["aria-valuetext","aria-orientation","aria-errormessage","aria-valuemax","aria-valuemin"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},search:{type:"landmark",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:{nodeName:["aside","form","section"]}},searchbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="search"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:"text"}}},section:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},sectionhead:{nameFrom:["author","contents"],type:"abstract",unsupported:!1},select:{nameFrom:["author"],type:"abstract",unsupported:!1},separator:{type:"structure",attributes:{allowed:["aria-expanded","aria-orientation","aria-valuenow","aria-valuemax","aria-valuemin","aria-valuetext","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["hr"],unsupported:!1,allowedElements:["li"]},slider:{type:"widget",attributes:{allowed:["aria-valuetext","aria-orientation","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="range"]'],unsupported:!1},spinbutton:{type:"widget",attributes:{allowed:["aria-valuetext","aria-required","aria-readonly","aria-errormessage","aria-valuemax","aria-valuemin"],required:["aria-valuenow"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="number"]'],unsupported:!1,allowedElements:{nodeName:"input",properties:{type:["text","tel"]}}},status:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:["output"],unsupported:!1,allowedElements:["section"]},structure:{type:"abstract",unsupported:!1},switch:{type:"widget",attributes:{allowed:["aria-errormessage"],required:["aria-checked"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1,allowedElements:["button",{nodeName:"input",properties:{type:["checkbox","image","button"]}},{nodeName:"a",attributes:{href:Af}}]},tab:{type:"widget",attributes:{allowed:["aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["tablist"],unsupported:!1,allowedElements:[{nodeName:["button","h1","h2","h3","h4","h5","h6","li"]},{nodeName:"input",properties:{type:"button"}},{nodeName:"a",attributes:{href:Af}}]},table:{type:"structure",attributes:{allowed:["aria-colcount","aria-rowcount","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author","contents"],context:null,implicit:["table"],unsupported:!1},tablist:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-level","aria-multiselectable","aria-orientation","aria-errormessage"]},owned:{all:["tab"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},tabpanel:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1,allowedElements:["section"]},term:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,implicit:["dt"],unsupported:!1},textbox:{type:"widget",attributes:{allowed:["aria-activedescendant","aria-autocomplete","aria-multiline","aria-readonly","aria-required","aria-placeholder","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['input[type="text"]','input[type="email"]','input[type="password"]','input[type="tel"]','input[type="url"]',"input:not([type])","textarea"],unsupported:!1},timer:{type:"widget",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,unsupported:!1},toolbar:{type:"structure",attributes:{allowed:["aria-activedescendant","aria-expanded","aria-orientation","aria-errormessage"]},owned:null,nameFrom:["author"],context:null,implicit:['menu[type="toolbar"]'],unsupported:!1,allowedElements:["ol","ul"]},tooltip:{type:"structure",attributes:{allowed:["aria-expanded","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:null,unsupported:!1},tree:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-multiselectable","aria-required","aria-expanded","aria-orientation","aria-errormessage"]},owned:{all:["treeitem"]},nameFrom:["author"],context:null,unsupported:!1,allowedElements:["ol","ul"]},treegrid:{type:"composite",attributes:{allowed:["aria-activedescendant","aria-colcount","aria-expanded","aria-level","aria-multiselectable","aria-readonly","aria-required","aria-rowcount","aria-orientation","aria-errormessage"]},owned:{one:["rowgroup","row"]},nameFrom:["author"],context:null,unsupported:!1},treeitem:{type:"widget",attributes:{allowed:["aria-checked","aria-selected","aria-expanded","aria-level","aria-posinset","aria-setsize","aria-errormessage"]},owned:null,nameFrom:["author","contents"],context:["group","tree"],unsupported:!1,allowedElements:["li",{nodeName:"a",attributes:{href:Af}}]},widget:{type:"abstract",unsupported:!1},window:{nameFrom:["author"],type:"abstract",unsupported:!1}},kf.implicitHtmlRole=ri,kf.elementsAllowedNoRole=[{nodeName:["base","body","caption","col","colgroup","datalist","dd","details","dt","head","html","keygen","label","legend","main","map","math","meta","meter","noscript","optgroup","param","picture","progress","script","source","style","template","textarea","title","track"]},{nodeName:"area",attributes:{href:Af}},{nodeName:"input",properties:{type:["color","data","datatime","file","hidden","month","number","password","range","reset","submit","time","week"]}},{nodeName:"link",attributes:{href:Af}},{nodeName:"menu",attributes:{type:"context"}},{nodeName:"menuitem",attributes:{type:["command","checkbox","radio"]}},{nodeName:"select",condition:function(e){return e instanceof i.AbstractVirtualNode||(e=i.utils.getNodeFromTree(e)),Number(e.attr("size"))>1},properties:{multiple:!0}},{nodeName:["clippath","cursor","defs","desc","feblend","fecolormatrix","fecomponenttransfer","fecomposite","feconvolvematrix","fediffuselighting","fedisplacementmap","fedistantlight","fedropshadow","feflood","fefunca","fefuncb","fefuncg","fefuncr","fegaussianblur","feimage","femerge","femergenode","femorphology","feoffset","fepointlight","fespecularlighting","fespotlight","fetile","feturbulence","filter","hatch","hatchpath","lineargradient","marker","mask","meshgradient","meshpatch","meshrow","metadata","mpath","pattern","radialgradient","solidcolor","stop","switch","view"]}],kf.elementsAllowedAnyRole=[{nodeName:"a",attributes:{href:xf}},{nodeName:"img",attributes:{alt:xf}},{nodeName:["abbr","address","canvas","div","p","pre","blockquote","ins","del","output","span","table","tbody","thead","tfoot","td","em","strong","small","s","cite","q","dfn","abbr","time","code","var","samp","kbd","sub","sup","i","b","u","mark","ruby","rt","rp","bdi","bdo","br","wbr","th","tr"]}],kf.evaluateRoleForElement={A:function(e){var t=e.node,n=e.out
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
return!(!t.parentNode||"http://www.w3.org/2000/svg"!==t.parentNode.namespaceURI)||n}},kf.rolesOfType={widget:["button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","tree","treeitem"]}
var Tf=kf,Nf=function(e){var t=null,n=Tf.role[e]
return n&&n.implicit&&(t=Kn(n.implicit)),t},Bf=function(e){return!!Df(e).length}
function Rf(e){var t,n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).popupRoles,r=Ci(e)
if(null!==(t=n)&&void 0!==t||(n=Po["aria-haspopup"].values),!n.includes(r))return!1
var a=function(e){for(;e=e.parent;)if(null!==Ci(e,{noPresentational:!0}))return e
return null}(e)
if(_f(a))return!0
var o=e.props.id
if(!o)return!1
if(!e.actualNode)throw new Error("Unable to determine combobox popup without an actualNode")
var i=la(e.actualNode).querySelectorAll('[aria-owns~="'.concat(o,'"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(o,'"][role~="combobox"]:not(select)'))
return Array.from(i).some(_f)}var _f=function(e){return e&&"combobox"===Ci(e)},Sf=function(e){return e=$n(e),lu(e)},Of=function(e){var t=zo.ariaRoles[e]
return t&&Array.isArray(t.requiredAttrs)?U(t.requiredAttrs):[]},Mf=function(e){var t=zo.ariaRoles[e]
return t&&Array.isArray(t.requiredContext)?U(t.requiredContext):null},If=function(e){var t=zo.ariaRoles[e]
return t&&Array.isArray(t.requiredOwned)?U(t.requiredOwned):null},Pf=function(e,t){var n,r,a=(e=e instanceof Qt?e:$n(e)).attr(t),o=zo.ariaAttrs[t]
if(!o)return!0
if(o.allowEmpty&&(!a||""===a.trim()))return!0
switch(o.type){case"boolean":return["true","false"].includes(a.toLowerCase())
case"nmtoken":return"string"==typeof a&&o.values.includes(a.toLowerCase())
case"nmtokens":return(r=md(a)).reduce((function(e,t){return e&&o.values.includes(t)}),0!==r.length)
case"idref":try{var i=ca(e.actualNode)
return!(!a||!i.getElementById(a))}catch(e){throw new TypeError("Cannot resolve id references for partial DOM")}case"idrefs":return So(e,t).some((function(e){return!!e}))
case"string":return""!==a.trim()
case"decimal":return!(!(n=a.match(/^[-+]?([0-9]*)\.?([0-9]*)$/))||!n[1]&&!n[2])
case"int":var u=void 0!==o.minValue?o.minValue:-1/0
return/^[-+]?[0-9]+$/.test(a)&&parseInt(a)>=u}},jf=function(e){return!!zo.ariaAttrs[e]}
function qf(e,t,n){var r,a=n.props,o=a.nodeName,i=a.type,u=(r=n.attr("aria-checked"))?(r=r.toLowerCase(),["mixed","true"].includes(r)?r:"false"):""
if("input"!==o||"checkbox"!==i||!u)return!0
var s,l=(s=n).props.indeterminate?"mixed":s.props.checked?"true":"false"
return u===l||(this.data({messageKey:"checkbox",checkState:l}),!1)}function Lf(e){var t,n,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).invalidTableRowAttrs,a=arguments.length>2?arguments[2]:void 0,o=null!==(t=null==r||null===(n=r.filter)||void 0===n?void 0:n.call(r,(function(e){return a.hasAttr(e)})))&&void 0!==t?t:[]
if(0===o.length)return!0
var i=function(e){if(e.parent)return cr(e,'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]')}(a),u=i&&Ci(i)
if(!u||"treegrid"===u)return!0
var s="row".concat(o.length>1?"Plural":"Singular")
return this.data({messageKey:s,invalidAttrs:o,ownerRole:u}),!1}var zf={row:Lf,checkbox:qf},Vf={}
function Hf(e){return 3===e.props.nodeType?e.props.nodeValue.trim().length>0:Fu(e,!1,!0)}function Uf(e,t,n,r){var a=Uo(e)
if(n||(n=Mf(a)),!n)return null
for(var o=n.includes("group"),i=r?e:e.parent;i;){var u=Ci(i,{noPresentational:!0})
if(u){if("group"!==u||!o)return n.includes(u)?null:n
t.includes(a)&&n.push(a),n=n.filter((function(e){return"group"!==e})),i=i.parent}else i=i.parent}return n}oe(Vf,{getAriaRolesByType:function(){return Ff},getAriaRolesSupportingNameFromContent:function(){return Ef},getElementSpec:function(){return vi},getElementsByContentType:function(){return $o},getGlobalAriaAttrs:function(){return Go},implicitHtmlRoles:function(){return ri}})
var $f={ARTICLE:!0,ASIDE:!0,NAV:!0,SECTION:!0},Gf={application:!0,article:!0,banner:!1,complementary:!0,contentinfo:!0,form:!0,main:!0,navigation:!0,region:!0,search:!1},Wf={}
oe(Wf,{Color:function(){return Gc},centerPointOfRect:function(){return Yf},elementHasImage:function(){return zu},elementIsDistinct:function(){return Qf},filteredRectStack:function(){return Zf},flattenColors:function(){return th},flattenShadowColors:function(){return nh},getBackgroundColor:function(){return dh},getBackgroundStack:function(){return rh},getContrast:function(){return hh},getForegroundColor:function(){return mh},getOwnBackgroundColor:function(){return Yc},getRectStack:function(){return Xf},getStackingContext:function(){return ih},getTextShadowColors:function(){return oh},hasValidContrastRatio:function(){return gh},incompleteData:function(){return Lu},stackingContextToColor:function(){return uh}})
var Yf=function(e){if(!(e.left>n.innerWidth||e.top>n.innerHeight))return{x:Math.min(Math.ceil(e.left+e.width/2),n.innerWidth-1),y:Math.min(Math.ceil(e.top+e.height/2),n.innerHeight-1)}}
function Kf(e){return e.getPropertyValue("font-family").split(/[,;]/g).map((function(e){return e.trim().toLowerCase()}))}var Qf=function(e,t){var r=n.getComputedStyle(e)
if("none"!==r.getPropertyValue("background-image"))return!0
if(["border-bottom","border-top","outline"].reduce((function(e,t){var n=new Gc
return n.parseString(r.getPropertyValue(t+"-color")),e||"none"!==r.getPropertyValue(t+"-style")&&parseFloat(r.getPropertyValue(t+"-width"))>0&&0!==n.alpha}),!1))return!0
var a=n.getComputedStyle(t)
if(Kf(r)[0]!==Kf(a)[0])return!0
var o=["text-decoration-line","text-decoration-style","font-weight","font-style","font-size"].reduce((function(e,t){return e||r.getPropertyValue(t)!==a.getPropertyValue(t)}),!1),i=r.getPropertyValue("text-decoration")
return i.split(" ").length<3&&(o=o||i!==a.getPropertyValue("text-decoration")),o},Xf=function(e){var t=Bo(e),n=Du(e)
return!n||n.length<=1?[t]:n.some((function(e){return void 0===e}))?null:(n.splice(0,0,t),n)},Zf=function(e){var t=Xf(e)
if(t&&1===t.length)return t[0]
if(t&&t.length>1){var n,r=t.shift()
return t.forEach((function(a,o){if(0!==o){var i=t[o-1],u=t[o]
n=i.every((function(e,t){return e===u[t]}))||r.includes(e)}})),n?t[0]:(Lu.set("bgColor","elmPartiallyObscuring"),null)}return Lu.set("bgColor","outsideViewport"),null},Jf={normal:function(e,t){return t},multiply:function(e,t){return t*e},screen:function(e,t){return e+t-e*t},overlay:function(e,t){return this["hard-light"](t,e)},darken:function(e,t){return Math.min(e,t)},lighten:function(e,t){return Math.max(e,t)},"color-dodge":function(e,t){return 0===e?0:1===t?1:Math.min(1,e/(1-t))},"color-burn":function(e,t){return 1===e?1:0===t?0:1-Math.min(1,(1-e)/t)},"hard-light":function(e,t){return t<=.5?this.multiply(e,2*t):this.screen(e,2*t-1)},"soft-light":function(e,t){return t<=.5?e-(1-2*t)*e*(1-e):e+(2*t-1)*((e<=.25?((16*e-12)*e+4)*e:Math.sqrt(e))-e)},difference:function(e,t){return Math.abs(e-t)},exclusion:function(e,t){return e+t-2*e*t}}
function eh(e,t,n,r,a){return t*(1-r)*e+t*r*Jf[a](n/255,e/255)*255+(1-t)*r*n}var th=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal",a=eh(e.red,e.alpha,t.red,t.alpha,r),o=eh(e.green,e.alpha,t.green,t.alpha,r),i=eh(e.blue,e.alpha,t.blue,t.alpha,r),u=(n=e.alpha+t.alpha*(1-e.alpha),Math.min(Math.max(0,n),1))
if(0===u)return new Gc(a,o,i,u)
var s=Math.round(a/u),l=Math.round(o/u),c=Math.round(i/u)
return new Gc(s,l,c,u)}
function nh(e,t){var n=e.alpha,r=(1-n)*t.red+n*e.red,a=(1-n)*t.green+n*e.green,o=(1-n)*t.blue+n*e.blue,i=e.alpha+t.alpha*(1-e.alpha)
return new Gc(r,a,o,i)}function rh(e){for(var t=Du(e).map((function(t){return function(e){var t=e.indexOf(a.body),r=e,o=Yc(n.getComputedStyle(a.documentElement))
if(t>1&&0===o.alpha&&!zu(a.documentElement)){t>1&&(r.splice(t,1),r.push(a.body))
var i=r.indexOf(a.documentElement)
i>0&&(r.splice(i,1),r.push(a.documentElement))}return r}(t=td(t,e))})),r=0;r<t.length;r++){var o=t[r]
if(o[0]!==e)return Lu.set("bgColor","bgOverlap"),null
if(0!==r&&!ah(o,t[0]))return Lu.set("bgColor","elmPartiallyObscuring"),null}return t[0]||null}function ah(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e.length!==t.length)return!1
for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1
return!0}var oh=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.minRatio,a=t.maxRatio,o=n.getComputedStyle(e),i=o.getPropertyValue("text-shadow")
if("none"===i)return[]
var u=o.getPropertyValue("font-size"),s=parseInt(u)
dn(!1===isNaN(s),"Unable to determine font-size value ".concat(u))
var l=[],c=function(e){var t={pixels:[]},n=e.trim(),r=[t]
if(!n)return[]
for(;n;){var a=n.match(/^rgba?\([0-9,.\s]+\)/i)||n.match(/^[a-z]+/i)||n.match(/^#[0-9a-f]+/i),o=n.match(/^([0-9.-]+)px/i)||n.match(/^(0)/)
if(a)dn(!t.colorStr,"Multiple colors identified in text-shadow: ".concat(e)),n=n.replace(a[0],"").trim(),t.colorStr=a[0]
else if(o){dn(t.pixels.length<3,"Too many pixel units in text-shadow: ".concat(e)),n=n.replace(o[0],"").trim()
var i=parseFloat(("."===o[1][0]?"0":"")+o[1])
t.pixels.push(i)}else{if(","!==n[0])throw new Error("Unable to process text-shadows: ".concat(e))
dn(t.pixels.length>=2,"Missing pixel value in text-shadow: ".concat(e)),t={pixels:[]},r.push(t),n=n.substr(1).trim()}}return r}(i)
return c.forEach((function(e){var t=e.colorStr,n=e.pixels
t=t||o.getPropertyValue("color")
var i=W(n,3),u=i[0],c=i[1],d=i[2],p=void 0===d?0:d
if((!r||p>=s*r)&&(!a||p<s*a)){var f=function(e){var t=e.colorStr,n=e.blurRadius,r=e.fontSize
if(e.offsetX>n||e.offsetY>n)return new Gc(0,0,0,0)
var a=new Gc
return a.parseString(t),a.alpha*=function(e,t){return 0===e?1:.185/(e/t+.4)}(n,r),a}({colorStr:t,offsetY:u,offsetX:c,blurRadius:p,fontSize:s})
l.push(f)}})),l}
function ih(e,t){var n,r=$n(e)
if(r._stackingContext)return r._stackingContext
var a=[],o=new Map
return(t=null!==(n=t)&&void 0!==n?n:rh(e)).forEach((function(e){var t,n=$n(e),r=function(e){var t=new Gc
return t.parseString(e.getComputedStylePropertyValue("background-color")),t}(n),i=n._stackingOrder.filter((function(e){return!!e.vNode}))
i.forEach((function(e,t){var n,r=e.vNode,u=null===(n=i[t-1])||void 0===n?void 0:n.vNode,s=ch(o,r,u)
0!==t||o.get(r)||a.unshift(s),o.set(r,s)}))
var u=null===(t=i[i.length-1])||void 0===t?void 0:t.vNode,s=ch(o,n,u)
i.length||a.unshift(s),s.bgColor=r})),r._stackingContext=a,a}function uh(e){var t
if(null===(t=e.descendants)||void 0===t||!t.length){var n=e.bgColor
return n.alpha*=e.opacity,{color:n,blendMode:e.blendMode}}var r=e.descendants.reduce(sh,lh()),a=th(r,e.bgColor,e.descendants[0].blendMode)
return a.alpha*=e.opacity,{color:a,blendMode:e.blendMode}}function sh(e,t){var n
n=e instanceof Gc?e:uh(e).color
var r=uh(t).color
return th(r,n,t.blendMode)}function lh(e,t){var n,r
return{vNode:e,ancestor:t,opacity:parseFloat(null!==(n=null==e?void 0:e.getComputedStylePropertyValue("opacity"))&&void 0!==n?n:1),bgColor:new Gc(0,0,0,0),blendMode:(r=null==e?void 0:e.getComputedStylePropertyValue("mix-blend-mode"),r||void 0),descendants:[]}}function ch(e,t,n){var r,a=e.get(n),o=null!==(r=e.get(t))&&void 0!==r?r:lh(t,a)
return a&&n!==t&&!a.descendants.includes(o)&&a.descendants.unshift(o),o}function dh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.1,o=$n(e),i=o._cache.getBackgroundColor
if(i)return t.push.apply(t,U(i.bgElms)),Lu.set("bgColor",i.incompleteData),i.bgColor
var u=function(e,t,r){var o,i=rh(e)
if(!i)return null
var u=mu(e),s=oh(e,{minRatio:r})
s.length&&(s=[{color:s.reduce(nh)}])
for(var l=0;l<i.length;l++){var c=i[l],d=n.getComputedStyle(c)
if(zu(c,d))return t.push(c),null
var p=Yc(d)
if(0!==p.alpha){if("inline"!==d.getPropertyValue("display")&&!ph(c,u))return t.push(c),Lu.set("bgColor","elmPartiallyObscured"),null
if(t.push(c),1===p.alpha)break}}s=ih(e,i).map(uh).concat(s)
var f=function(e,t){var r=[]
if(!t){var o=a.documentElement,i=a.body,u=n.getComputedStyle(o),s=n.getComputedStyle(i),l=Yc(u),c=Yc(s),d=0!==c.alpha&&ph(i,e.getBoundingClientRect());(0!==c.alpha&&0===l.alpha||d&&1!==c.alpha)&&r.unshift({color:c,blendMode:fh(s.getPropertyValue("mix-blend-mode"))}),0!==l.alpha&&(!d||d&&1!==c.alpha)&&r.unshift({color:l,blendMode:fh(u.getPropertyValue("mix-blend-mode"))})}return r}(e,i.includes(a.body))
if((o=s).unshift.apply(o,U(f)),0===s.length)return new Gc(255,255,255,1)
var h=s.reduce((function(e,t){return th(t.color,e.color instanceof Gc?e.color:e,t.blendMode)}))
return th(h.color instanceof Gc?h.color:h,new Gc(255,255,255,1))}(e,t,r)
return o._cache.getBackgroundColor={bgColor:u,bgElms:t,incompleteData:Lu.get("bgColor")},u}function ph(e,t){t=Array.isArray(t)?t:[t]
var r=e.getBoundingClientRect(),a=r.right,o=r.bottom,i=n.getComputedStyle(e).getPropertyValue("overflow")
return(["scroll","auto"].includes(i)||e instanceof n.HTMLHtmlElement)&&(a=r.left+e.scrollWidth,o=r.top+e.scrollHeight),t.every((function(e){return e.top>=r.top&&e.bottom<=o&&e.left>=r.left&&e.right<=a}))}function fh(e){return e||void 0}var hh=function(e,t){if(!t||!e)return null
t.alpha<1&&(t=th(t,e))
var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}
function mh(e,t,r){for(var a,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.getComputedStyle(e),u=[function(){return function(e,t){var n=t.textStrokeEmMin,r=void 0===n?0:n,a=parseFloat(e.getPropertyValue("-webkit-text-stroke-width"))
if(0===a)return null
var o=e.getPropertyValue("font-size"),i=a/parseFloat(o)
if(isNaN(i)||i<r)return null
var u=e.getPropertyValue("-webkit-text-stroke-color")
return(new Gc).parseString(u)}(i,o)},function(){return function(e){return(new Gc).parseString(e.getPropertyValue("-webkit-text-fill-color")||e.getPropertyValue("color"))}(i)},function(){return oh(e,{minRatio:0})}],s=[],l=0,c=u;l<c.length;l++){var d=(0,c[l])()
if(d&&(s=s.concat(d),1===d.alpha))break}var p=s.reduce((function(e,t){return th(e,t)}))
if(null!==(a=r)&&void 0!==a||(r=dh(e,[])),null===r){var f=Lu.get("bgColor")
return Lu.set("fgColor",f),null}var h=ih(e),m=Dh(h,e)
return th(function(e,t,n){for(;t;){var r
if(1===t.opacity&&t.ancestor)t=t.ancestor
else{e.alpha*=t.opacity
var a=(null===(r=t.ancestor)||void 0===r?void 0:r.descendants)||n
1!==t.opacity&&(a=a.slice(0,a.indexOf(t)))
var o=a.map(uh)
if(o.length){var i=o.reduce((function(e,t){return th(t.color,e.color instanceof Gc?e.color:e)}),{color:new Gc(0,0,0,0),blendMode:"normal"})
e=th(e,i),t=t.ancestor}else t=t.ancestor}}return e}(p,m,h),new Gc(255,255,255,1))}function Dh(e,t){var n,r=ee(e)
try{for(r.s();!(n=r.n()).done;){var a,o=n.value
if((null===(a=o.vNode)||void 0===a?void 0:a.actualNode)===t)return o
var i=Dh(o.descendants,t)
if(i)return i}}catch(e){r.e(e)}finally{r.f()}}var gh=function(e,t,n,r){var a=hh(e,t),o=r&&Math.ceil(72*n)/96<14||!r&&Math.ceil(72*n)/96<18?4.5:3
return{isValid:a>o,contrastRatio:a,expectedContrastRatio:o}},vh=ma((function(e,t){var r=n.getComputedStyle(e,t),a=function(e,t){return r.getPropertyValue(e)===t}
if(a("content","none")||a("display","none")||a("visibility","hidden")||!1===a("position","absolute"))return 0
if(0===Yc(r).alpha&&a("background-image","none"))return 0
var o=bh(r.getPropertyValue("width")),i=bh(r.getPropertyValue("height"))
return"px"!==o.unit||"px"!==i.unit?0===o.value||0===i.value?0:1/0:o.value*i.value}))
function bh(e){var t=W(e.match(/^([0-9.]+)([a-z]+)$/i)||[],3),n=t[1],r=void 0===n?"":n,a=t[2],o=void 0===a?"":a
return{value:parseFloat(r),unit:o.toLowerCase()}}function yh(e,t){var n=e.getRelativeLuminance(),r=t.getRelativeLuminance()
return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}var Fh=["block","list-item","table","flex","grid","inline-block"]
function wh(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==Fh.indexOf(t)||"table-"===t.substr(0,6)}var Eh=["block","list-item","table","flex","grid","inline-block"]
function Ch(e){var t=n.getComputedStyle(e).getPropertyValue("display")
return-1!==Eh.indexOf(t)||"table-"===t.substr(0,6)}function xh(e){if(Nu(e))return!0
if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return!1}return e.children.some((function(e){return xh(e)}))}function Ah(e){if(!e.children){if(1===e.props.nodeType)throw new Error("Cannot determine children")
return[]}var t=[]
return e.children.forEach((function(e){"widget"===Bu(e)&&ei(e)?t.push(e):t.push.apply(t,U(Ah(e)))})),t}function kh(e){var t=parseInt(e.attr("tabindex"),10)
return!isNaN(t)&&t<0}function Th(e,t){var n=Nh(t),r=Nh(e)
return!(!n||!r)&&n.includes(r)}function Nh(e){var t=ou(e,{emoji:!0,nonBmp:!0,punctuations:!0})
return Zo(t)}function Bh(e){return""!==(e||"").trim()}function Rh(e,t,n){var r=n.validRoles,a=void 0===r?[]:r,o=n.validNodeNames,i=void 0===o?[]:o,u=e.props,s=u.nodeName,l=u.nodeType,c=u.nodeValue,d=t?"div > ":""
if(3===l&&""!==c.trim())return d+"#text"
if(1!==l||!ji(e))return!1
var p=Uo(e)
return p?!a.includes(p)&&d+"[role=".concat(p,"]"):!i.includes(s)&&d+s}function _h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
return e.map((function(e){return{vChild:e,nested:t}}))}function Sh(e,t){var n=e.boundingClientRect,r=t.boundingClientRect
return n.top>=r.top&&n.left>=r.left&&n.bottom<=r.bottom&&n.right<=r.right}function Oh(e){return e.getComputedStylePropertyValue("pointer-events")}function Mh(e){return{width:Math.round(10*e.width)/10,height:Math.round(10*e.height)/10}}function Ih(e,t){return e.actualNode.contains(t.actualNode)&&!Nu(t)}function Ph(e,t){var n=t.width,r=t.height
return n+.05>=e&&r+.05>=e}function jh(e){return e.map((function(e){return e.actualNode}))}function qh(e,t){var n,r=null===(n=t.data)||void 0===n?void 0:n.headingOrder,a=zh(t.node.ancestry,1)
if(!r)return e
var o=r.map((function(e){return function(e,t){return G({},e,{ancestry:t.concat(e.ancestry)})}(e,a)})),i=function(e,t){for(;t.length;){var n=Lh(e,t)
if(-1!==n)return n
t=zh(t,1)}return-1}(e,a)
return-1===i?e.push.apply(e,U(o)):e.splice.apply(e,[i,0].concat(U(o))),e}function Lh(e,t){return e.findIndex((function(e){return fp(e.ancestry,t)}))}function zh(e,t){return e.slice(0,e.length-t)}function Vh(e){var t=Ci(e),n=t&&t.includes("heading"),r=e.attr("aria-level"),a=parseInt(r,10),o=W(e.props.nodeName.match(/h(\d)/)||[],2)[1]
return n?o&&!r?parseInt(o,10):isNaN(a)||a<1?o?parseInt(o,10):2:a||-1:-1}function Hh(e,t){if(!e||!t)return!1
var n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t)
return n.length===r.length&&n.every((function(n){var r=e[n],a=t[n]
return o(r)===o(a)&&("object"===o(r)||"object"===o(a)?Hh(r,a):r===a)}))}var Uh={}
oe(Uh,{aria:function(){return pf},color:function(){return Wf},dom:function(){return sa},forms:function(){return $h},matches:function(){return gi},math:function(){return wo},standards:function(){return Vf},table:function(){return Yh},text:function(){return _o},utils:function(){return Xt}})
var $h={}
oe($h,{isAriaCombobox:function(){return Gi},isAriaListbox:function(){return $i},isAriaRange:function(){return Yi},isAriaTextbox:function(){return Ui},isDisabled:function(){return Wh},isNativeSelect:function(){return Hi},isNativeTextbox:function(){return Vi}})
var Gh=["fieldset","button","select","input","textarea"],Wh=function e(t){var n=t._isDisabled
if("boolean"==typeof n)return n
var r=t.props.nodeName,a=t.attr("aria-disabled")
return n=!(!Gh.includes(r)||!t.hasAttr("disabled"))||(a?"true"===a.toLowerCase():!!t.parent&&e(t.parent)),t._isDisabled=n,n},Yh={}
oe(Yh,{getAllCells:function(){return Kh},getCellPosition:function(){return Yo},getHeaders:function(){return Xh},getScope:function(){return Ko},isColumnHeader:function(){return Qo},isDataCell:function(){return Zh},isDataTable:function(){return Jh},isHeader:function(){return em},isRowHeader:function(){return Xo},toArray:function(){return Wo},toGrid:function(){return Wo},traverse:function(){return nm}})
var Kh=function(e){var t,n,r,a,o=[]
for(t=0,r=e.rows.length;t<r;t++)for(n=0,a=e.rows[t].cells.length;n<a;n++)o.push(e.rows[t].cells[n])
return o}
function Qh(e,t,n){for(var r,a="row"===e?"_rowHeaders":"_colHeaders",o="row"===e?Xo:Qo,u=n[t.y][t.x],s=u.colSpan-1,l=u.getAttribute("rowspan"),c=(0===parseInt(l)||0===u.rowspan?n.length:u.rowSpan)-1,d=t.y+c,p=t.x+s,f="row"===e?t.y:0,h="row"===e?0:t.x,m=[],D=d;D>=f&&!r;D--)for(var g=p;g>=h;g--){var v=n[D]?n[D][g]:void 0
if(v){var b=i.utils.getNodeFromTree(v)
if(b[a]){r=b[a]
break}m.push(v)}}return r=(r||[]).concat(m.filter(o)),m.forEach((function(e){i.utils.getNodeFromTree(e)[a]=r})),r}var Xh=function(e,t){if(e.getAttribute("headers")){var n=So(e,"headers")
if(n.filter((function(e){return e})).length)return n}t||(t=Wo(fa(e,"table")))
var r=Yo(e,t),a=Qh("row",r,t),o=Qh("col",r,t)
return[].concat(a,o).reverse()},Zh=function(e){if(!e.children.length&&!e.textContent.trim())return!1
var t=e.getAttribute("role")
return Ho(t)?["cell","gridcell"].includes(t):"TD"===e.nodeName.toUpperCase()},Jh=function(e){var t=(e.getAttribute("role")||"").toLowerCase()
if(("presentation"===t||"none"===t)&&!ei(e))return!1
if("true"===e.getAttribute("contenteditable")||fa(e,'[contenteditable="true"]'))return!0
if("grid"===t||"treegrid"===t||"table"===t)return!0
if("landmark"===Bu(t))return!0
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
for(c=0;c<s;c++){if(o=e.rows[c],f&&f!==n.getComputedStyle(o).getPropertyValue("background-color"))return!0
if(f=n.getComputedStyle(o).getPropertyValue("background-color"),h&&h!==n.getComputedStyle(o).getPropertyValue("background-image"))return!0
h=n.getComputedStyle(o).getPropertyValue("background-image")}return s>=20||!(ja(e).width>.95*qa(n).width)&&!(u<10)&&!e.querySelector("object, embed, iframe, applet")},em=function(e){if(Qo(e)||Xo(e))return!0
if(e.getAttribute("id")){var t=fn(e.getAttribute("id"))
return!!a.querySelector('[headers~="'.concat(t,'"]'))}return!1}
function tm(e,t,n,r){var a,o=n[t.y]?n[t.y][t.x]:void 0
return o?"function"==typeof r&&!0===(a=r(o,t,n))?[o]:((a=tm(e,{x:t.x+e.x,y:t.y+e.y},n,r)).unshift(o),a):[]}var nm=function(e,t,n,r){if(Array.isArray(t)&&(r=n,n=t,t={x:0,y:0}),"string"==typeof e)switch(e){case"left":e={x:-1,y:0}
break
case"up":e={x:0,y:-1}
break
case"right":e={x:1,y:0}
break
case"down":e={x:0,y:1}}return tm(e,{x:t.x+e.x,y:t.y+e.y},n,r)},rm=/[;,\s]/,am=/^[0-9.]+$/
function om(e){switch(e){case"lighter":return 100
case"normal":return 400
case"bold":return 700
case"bolder":return 900}return e=parseInt(e),isNaN(e)?400:e}function im(e){var t=n.getComputedStyle(function(e){for(var t=e,n=e.textContent.trim(),r=n;r===n&&void 0!==t;){var a=-1
if(0===(e=t).children.length)return e
do{a++,r=e.children[a].textContent.trim()}while(""===r&&a+1<e.children.length)
t=e.children[a]}return e}(e))
return{fontWeight:om(t.getPropertyValue("font-weight")),fontSize:parseInt(t.getPropertyValue("font-size")),isItalic:"italic"===t.getPropertyValue("font-style")}}function um(e,t,n){return n.reduce((function(n,r){return n||(!r.size||e.fontSize/r.size>t.fontSize)&&(!r.weight||e.fontWeight-r.weight>t.fontWeight)&&(!r.italic||e.isItalic&&!t.isItalic)}),!1)}var sm=Ff("landmark"),lm=["alert","log","status"]
function cm(e,t){var n=e.actualNode
if("button"===Ci(e)||function(e,t){var n=e.actualNode,r=Ci(e),a=(n.getAttribute("aria-live")||"").toLowerCase().trim()
return!!(["assertive","polite"].includes(a)||lm.includes(r)||sm.includes(r)||t.regionMatcher&&gi(e,t.regionMatcher))}(e,t)||["iframe","frame"].includes(e.props.nodeName)||Qc(e.actualNode)&&vo(e.actualNode,"href")||!ji(n)){for(var r=e;r;)r._hasRegionDescendant=!0,r=r.parent
return["iframe","frame"].includes(e.props.nodeName)?[e]:[]}return n!==a.body&&wu(n,!0)?[e]:e.children.filter((function(e){return 1===e.actualNode.nodeType})).map((function(e){return cm(e,t)})).reduce((function(e,t){return e.concat(t)}),[])}function dm(e){return"caption"===e.props.nodeName}function pm(e){return!e||"true"!==e.getAttribute("aria-hidden")&&pm(Ia(e))}var fm=function(e,t,n){return n.initiator},hm={emoji:!0,nonBmp:!1,punctuations:!0},mm=function(e,t){try{return"svg"===t.props.nodeName||!!cr(t,"svg")}catch(e){return!1}},Dm=function(e,t){var n=Uo(t)
return!(n&&!["none","presentation"].includes(n)&&!(jo[n]||{}).accessibleNameRequired&&!ei(t))}
function gm(e){var t
if(null==e||null===(t=e.ownerDocument)||void 0===t||!t.createRange)return!0
var n=e.ownerDocument.createRange()
return n.setStart(e,0),n.setEnd(e,e.childNodes.length),0===n.getClientRects().length}var vm=[function(e,t){return bm(t)},function(e,t){return function(e){return"area"!==e.props.nodeName}(t)},function(e,t){return!mm(0,t)},function(e,t){return ei(t)},function(e,t){return Nu(t)||!ym(t)},function(e){return!Ou(e,{noLengthCompare:!0})}]
function bm(e){return"widget"===Bu(e)}var ym=ma((function e(t){return!(null==t||!t.parent)&&(!(!bm(t.parent)||!Nu(t.parent))||e(t.parent))})),Fm={"abstractrole-evaluate":function(e,t,n){var r=md(n.attr("role")).filter((function(e){return"abstract"===Bu(e)}))
return r.length>0&&(this.data(r),!0)},"accesskeys-after":function(e){var t={}
return e.filter((function(e){if(!e.data)return!1
var n=e.data.toUpperCase()
return t[n]?(t[n].relatedNodes.push(e.relatedNodes[0]),!1):(t[n]=e,e.relatedNodes=[],!0)})).map((function(e){return e.result=!!e.relatedNodes.length,e}))},"accesskeys-evaluate":function(e,t,n){return Sa(n)||(this.data(n.attr("accesskey")),this.relatedNodes([e])),!0},"alt-space-value-evaluate":function(e,t,n){var r=n.attr("alt")
return"string"==typeof r&&/^\s+$/.test(r)},"aria-allowed-attr-evaluate":function(e,t,n){var r=[],a=Ci(n),o=ff(a)
Array.isArray(t[a])&&(o=Ap(t[a].concat(o)))
var i,u=ee(n.attrNames)
try{for(u.s();!(i=u.n()).done;){var s=i.value
jf(s)&&!o.includes(s)&&r.push(s)}}catch(e){u.e(e)}finally{u.f()}return!r.length||(this.data(r.map((function(e){return e+'="'+n.attr(e)+'"'}))),!(a||cp(n)||ei(n))&&void 0)},"aria-allowed-attr-matches":function(e,t){var n=/^aria-/,r=t.attrNames
if(r.length)for(var a=0,o=r.length;a<o;a++)if(n.test(r[a]))return!0
return!1},"aria-allowed-role-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=t.allowImplicit,a=void 0===r||r,o=t.ignoredTags,i=void 0===o?[]:o,u=n.props.nodeName
if(i.map((function(e){return e.toLowerCase()})).includes(u))return!0
var s=yf(n,a)
if(s.length){if(this.data(s),!ji(n))return
return!1}return!0},"aria-allowed-role-matches":function(e,t){return null!==Uo(t,{dpub:!0,fallback:!0})},"aria-busy-evaluate":function(e,t,n){return"true"===n.attr("aria-busy")},"aria-conditional-attr-evaluate":function(e,t,n){var r=Ci(n)
return!zf[r]||zf[r].call(this,e,t,n)},"aria-conditional-checkbox-attr-evaluate":qf,"aria-conditional-row-attr-evaluate":Lf,"aria-errormessage-evaluate":function(e,t,n){t=Array.isArray(t)?t:[]
var r=n.attr("aria-errormessage"),a=n.hasAttr("aria-errormessage"),o=n.attr("aria-invalid")
return!n.hasAttr("aria-invalid")||"false"===o||-1!==t.indexOf(r)||!a||(this.data(md(r)),function(e){if(""===e.trim())return zo.ariaAttrs["aria-errormessage"].allowEmpty
var t
try{t=e&&So(n,"aria-errormessage")[0]}catch(t){return void this.data({messageKey:"idrefs",values:md(e)})}return t?ji(t)?"alert"===t.getAttribute("role")||"assertive"===t.getAttribute("aria-live")||"polite"===t.getAttribute("aria-live")||md(n.attr("aria-describedby")).indexOf(e)>-1:(this.data({messageKey:"hidden",values:md(e)}),!1):void 0}.call(this,r))},"aria-has-attr-matches":function(e,t){var n=/^aria-/
return t.attrNames.some((function(e){return n.test(e)}))},"aria-hidden-body-evaluate":function(e,t,n){return"true"!==n.attr("aria-hidden")},"aria-hidden-focus-matches":function(e){return pm(Ia(e))},"aria-label-evaluate":function(e,t,n){return!!Zo(Io(n))},"aria-labelledby-evaluate":function(e,t,n){try{return!!Zo(Mo(n))}catch(e){return}},"aria-level-evaluate":function(e,t,n){var r=n.attr("aria-level")
if(!(parseInt(r,10)>6))return!0},"aria-prohibited-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=(null==t?void 0:t.elementsAllowedAriaLabel)||[],a=n.props.nodeName,o=Ci(n,{chromium:!0}),i=function(e,t,n){var r=zo.ariaRoles[e]
return r?r.prohibitedAttrs||[]:e||n.includes(t)?[]:["aria-label","aria-labelledby"]}(o,a,r).filter((function(e){return!!n.attrNames.includes(e)&&""!==Zo(n.attr(e))}))
if(0===i.length)return!1
var u=n.hasAttr("role")?"hasRole":"noRole"
u+=i.length>1?"Plural":"Singular",this.data({role:o,nodeName:a,messageKey:u,prohibited:i})
var s=Bi(n,{subtreeDescendant:!0})
return""===Zo(s)||void 0},"aria-required-attr-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=Uo(n),a=n.attrNames,o=Of(r)
if(Array.isArray(t[r])&&(o=Ap(t[r],o)),!r||!a.length||!o.length)return!0
if(function(e,t){return"separator"===t&&!ei(e)}(n,r)||function(e,t){return"combobox"===t&&"false"===e.attr("aria-expanded")}(n,r))return!0
var i=vi(n),u=o.filter((function(e){return!n.attr(e)&&!function(e,t){var n
return void 0!==(null===(n=e.implicitAttrs)||void 0===n?void 0:n[t])}(i,e)}))
return!u.length||(this.data(u),!1)},"aria-required-children-evaluate":function(e,t,n){var r=t&&Array.isArray(t.reviewEmpty)?t.reviewEmpty:[],a=Uo(n,{dpub:!0}),i=If(a)
if(null===i)return!0
var u=function(e,t){for(var n=[],r=Ti(e).filter((function(e){return 1!==e.props.nodeType||ji(e)})),a=function(e){var a=r[e]
if(1!==a.props.nodeType)return"continue"
var o,i=Ci(a,{noPresentational:!0}),u=(o=a,Go().find((function(e){return o.hasAttr(e)}))),s=!!u||ei(a)
!i&&!s||["group","rowgroup"].includes(i)&&t.some((function(e){return e===i}))?r.push.apply(r,U(a.children)):(i||s)&&n.push({role:i,attr:u||"tabindex",ownedElement:a})},o=0;o<r.length;o++)a(o)
return{ownedRoles:n,ownedElements:r}}(n,i),s=u.ownedRoles,l=u.ownedElements,c=s.filter((function(e){var t=e.role
return!i.includes(t)}))
if(c.length)return this.relatedNodes(c.map((function(e){return e.ownedElement}))),this.data({messageKey:"unallowed",values:c.map((function(e){return function(e,t){var n=e.props,r=n.nodeName
if(3===n.nodeType)return"#text"
var a=Uo(e,{dpub:!0})
return a?"[role=".concat(a,"]"):t?r+"[".concat(t,"]"):r}(e.ownedElement,e.attr)})).filter((function(e,t,n){return n.indexOf(e)===t})).join(", ")}),!1
var d=function(e,t,n,r){for(var a=function(e){var t=r[e].role
if(n.includes(t))return n=n.filter((function(e){return e!==t})),{v:null}},i=0;i<r.length;i++){var u=a(i)
if("object"===o(u))return u.v}return n.length?n:null}(0,0,i,s)
return!d||(this.data(d),!(!r.includes(a)||l.some(Hf))&&void 0)},"aria-required-children-matches":function(e,t){var n=Uo(t,{dpub:!0})
return!!If(n)},"aria-required-parent-evaluate":function(e,t,n){var r=t&&Array.isArray(t.ownGroupRoles)?t.ownGroupRoles:[],a=Uf(n,r)
if(!a)return!0
var o=function(e){for(var t=[],n=null;e;){if(e.getAttribute("id")){var r=fn(e.getAttribute("id"));(n=ca(e).querySelector("[aria-owns~=".concat(r,"]")))&&t.push(n)}e=e.parentElement}return t.length?t:null}(e)
if(o)for(var i=0,u=o.length;i<u;i++)if(!(a=Uf($n(o[i]),r,a,!0)))return!0
return this.data(a),!1},"aria-required-parent-matches":function(e,t){var n=Uo(t)
return!!Mf(n)},"aria-roledescription-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Ci(arguments.length>2?arguments[2]:void 0)
return!!(t.supportedRoles||[]).includes(n)||!(!n||"presentation"===n||"none"===n)&&void 0},"aria-unsupported-attr-evaluate":function(e,t,n){var r=n.attrNames.filter((function(t){var n=zo.ariaAttrs[t]
if(!jf(t))return!1
var r=n.unsupported
return"object"!==o(r)?!!r:!gi(e,r.exceptions)}))
return!!r.length&&(this.data(r),!0)},"aria-valid-attr-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r=[],a=/^aria-/
return n.attrNames.forEach((function(e){-1===t.indexOf(e)&&a.test(e)&&!jf(e)&&r.push(e)})),!r.length||(this.data(r),!1)},"aria-valid-attr-value-evaluate":function(e,t,n){t=Array.isArray(t.value)?t.value:[]
var r="",a="",o=[],u=/^aria-/,s=["aria-errormessage"],l={"aria-controls":function(){return"false"!==n.attr("aria-expanded")&&"false"!==n.attr("aria-selected")},"aria-current":function(e){e||(r='aria-current="'.concat(n.attr("aria-current"),'"'),a="ariaCurrent")},"aria-owns":function(){return"false"!==n.attr("aria-expanded")},"aria-describedby":function(e){e||(r='aria-describedby="'.concat(n.attr("aria-describedby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")},"aria-labelledby":function(e){e||(r='aria-labelledby="'.concat(n.attr("aria-labelledby"),'"'),a=i._tree&&i._tree[0]._hasShadowRoot?"noIdShadow":"noId")}}
return n.attrNames.forEach((function(e){if(!s.includes(e)&&!t.includes(e)&&u.test(e)){var i,c=n.attr(e)
try{i=Pf(n,e)}catch(t){return r="".concat(e,'="').concat(c,'"'),void(a="idrefs")}l[e]&&!l[e](i)||i||(""!==c||function(e){var t
return"string"===(null===(t=zo.ariaAttrs[e])||void 0===t?void 0:t.type)}(e)?o.push("".concat(e,'="').concat(c,'"')):(r=e,a="empty"))}})),o.length?(this.data(o),!1):!r||void this.data({messageKey:a,needsReview:r})},"attr-non-space-content-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0
if(!t.attribute||"string"!=typeof t.attribute)throw new TypeError("attr-non-space-content requires options.attribute to be a string")
if(!n.hasAttr(t.attribute))return this.data({messageKey:"noAttr"}),!1
var r=n.attr(t.attribute)
return!!Zo(r)||(this.data({messageKey:"emptyAttr"}),!1)},"autocomplete-appropriate-evaluate":function(e,t,n){if("input"!==n.props.nodeName)return!0
var r=["text","search","number","tel"],a=["text","search","url"],i={bday:["text","search","date"],email:["text","search","email"],username:["text","search","email"],"street-address":["text"],tel:["text","search","tel"],"tel-country-code":["text","search","tel"],"tel-national":["text","search","tel"],"tel-area-code":["text","search","tel"],"tel-local":["text","search","tel"],"tel-local-prefix":["text","search","tel"],"tel-local-suffix":["text","search","tel"],"tel-extension":["text","search","tel"],"cc-number":r,"cc-exp":["text","search","month","tel"],"cc-exp-month":r,"cc-exp-year":r,"cc-csc":r,"transaction-amount":r,"bday-day":r,"bday-month":r,"bday-year":r,"new-password":["text","search","password"],"current-password":["text","search","password"],url:a,photo:a,impp:a}
"object"===o(t)&&Object.keys(t).forEach((function(e){i[e]||(i[e]=[]),i[e]=i[e].concat(t[e])}))
var u=n.attr("autocomplete").split(/\s+/g).map((function(e){return e.toLowerCase()})),s=u[u.length-1]
if(uu.stateTerms.includes(s))return!0
var l=i[s],c=n.hasAttr("type")?Zo(n.attr("type")).toLowerCase():"text"
return c=Zp().includes(c)?c:"text",void 0===l?"text"===c:l.includes(c)},"autocomplete-matches":function(e,t){var n=t.attr("autocomplete")
if(!n||""===Zo(n))return!1
var r=t.props.nodeName
if(!1===["textarea","input","select"].includes(r))return!1
if("input"===r&&["submit","reset","button","hidden"].includes(t.props.type))return!1
var a=t.attr("aria-disabled")||"false"
if(t.hasAttr("disabled")||"true"===a.toLowerCase())return!1
var o=t.attr("role"),i=t.attr("tabindex")
if("-1"===i&&o){var u=zo.ariaRoles[o]
if(void 0===u||"widget"!==u.type)return!1}return!("-1"===i&&t.actualNode&&!Va(t)&&!ji(t))},"autocomplete-valid-evaluate":function(e,t,n){var r=n.attr("autocomplete")||""
return su(r,t)},"avoid-inline-spacing-evaluate":function(e,t){var n=t.cssProperties.filter((function(t){if("important"===e.style.getPropertyPriority(t))return t}))
return!(n.length>0&&(this.data(n),1))},"bypass-matches":function(e,t,n){return!fm(0,0,n)||!!e.querySelector("a[href]")},"caption-evaluate":function(e,t,n){return!Lp(n,"track").some((function(e){return"captions"===(e.attr("kind")||"").toLowerCase()}))&&void 0},"caption-faked-evaluate":function(e){var t=Wo(e),n=t[0]
return t.length<=1||n.length<=1||e.rows.length<=1||n.reduce((function(e,t,r){return e||t!==n[r+1]&&void 0!==n[r+1]}),!1)},"color-contrast-evaluate":function(e,t,r){var a=t.ignoreUnicode,o=t.ignoreLength,i=t.ignorePseudo,u=t.boldValue,s=t.boldTextPt,l=t.largeTextPt,c=t.contrastRatio,d=t.shadowOutlineEmMax,p=t.pseudoSizeThreshold
if(!Va(e))return this.data({messageKey:"hidden"}),!0
var f=Li(r,!1,!0)
if(!a||!function(e){var t={nonBmp:!0},n=eu(e,t),r=""===Zo(ou(e,t))
return n&&r}(f)){var h=n.getComputedStyle(e),m=parseFloat(h.getPropertyValue("font-size")),D=h.getPropertyValue("font-weight"),g=parseFloat(D)>=u||"bold"===D,v=Math.ceil(72*m)/96,b=g&&v<s||!g&&v<l?c.normal:c.large,y=b.expected,F=b.minThreshold,w=b.maxThreshold,E=function(e,t){var n=t.pseudoSizeThreshold,r=void 0===n?.25:n,a=t.ignorePseudo
if(void 0===a||!a){var o=e.boundingClientRect,i=o.width*o.height*r
do{if(vh(e.actualNode,":before")+vh(e.actualNode,":after")>i)return e}while(e=e.parent)}}(r,{ignorePseudo:i,pseudoSizeThreshold:p})
if(E)return this.data({fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:"pseudoContent",expectedContrastRatio:y+":1"}),void this.relatedNodes(E.actualNode)
var C=[],x=dh(e,C,d),A=mh(e,!1,x,t),k=oh(e,{minRatio:.001,maxRatio:d}),T=null,N=null,B=null
if(0===k.length)T=hh(x,A)
else if(A&&x){B=[].concat(U(k),[x]).reduce(nh)
var R=hh(x,A),_=hh(x,B),S=hh(B,A);(T=Math.max(R,_,S))!==R&&(N=_>S?"shadowOnBgColor":"fgOnShadowColor")}var O=T>y
if("number"==typeof F&&("number"!=typeof T||T<F)||"number"==typeof w&&("number"!=typeof T||T>w))return this.data({contrastRatio:T}),!0
var M,I=Math.floor(100*T)/100
null===x?M=Lu.get("bgColor"):O||(M=N)
var P=1===I,j=1===f.length
return P?M=Lu.set("bgColor","equalRatio"):O||!j||o||(M="shortTextContent"),this.data({fgColor:A?A.toHexString():void 0,bgColor:x?x.toHexString():void 0,contrastRatio:I,fontSize:"".concat((72*m/96).toFixed(1),"pt (").concat(m,"px)"),fontWeight:g?"bold":"normal",messageKey:M,expectedContrastRatio:y+":1",shadowColor:B?B.toHexString():void 0}),null===A||null===x||P||j&&!o&&!O?(M=null,Lu.clear(),void this.relatedNodes(C)):(O||this.relatedNodes(C),O)}this.data({messageKey:"nonBmp"})},"color-contrast-matches":function(e,t){var r=t.props,o=r.nodeName,i=r.type
if("option"===o)return!1
if("select"===o&&!e.options.length)return!1
if("input"===o&&["hidden","range","color","checkbox","radio","image"].includes(i))return!1
if(Wh(t)||lo(t))return!1
if(["input","select","textarea"].includes(o)){var u=n.getComputedStyle(e),s=parseInt(u.getPropertyValue("text-indent"),10)
if(s){var l=e.getBoundingClientRect()
if(l={top:l.top,bottom:l.bottom,left:l.left+s,right:l.right+s},!dd(l,e))return!1}return!0}var c=pa(t,"label")
if("label"===o||c){var d=c||e,p=c?$n(c):t
if(d.htmlFor){var f=ca(d).getElementById(d.htmlFor),h=f&&$n(f)
if(h&&Wh(h))return!1}var m=Lp(p,'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0]
if(m&&Wh(m))return!1}for(var D=[],g=t;g;){if(g.props.id){var v=Df(g).filter((function(e){return md(e.getAttribute("aria-labelledby")||"").includes(g.props.id)})).map((function(e){return $n(e)}))
D.push.apply(D,U(v))}g=g.parent}if(D.length>0&&D.every(Wh))return!1
if(!function(e){var t=Li(e,!1,!0)
return""!==t&&""!==ou(t,hm)&&e.children.some((function(e){return"#text"===e.props.nodeName&&!tu(e)}))}(t))return!1
for(var b=a.createRange(),y=t.children,F=0;F<y.length;F++){var w=y[F]
3===w.actualNode.nodeType&&""!==Zo(w.actualNode.nodeValue)&&b.selectNodeContents(w.actualNode)}for(var E=b.getClientRects(),C=0;C<E.length;C++)if(dd(E[C],e))return!0
return!1},"css-orientation-lock-evaluate":function(e,t,n,r){var a=(r||{}).cssom,o=void 0===a?void 0:a,i=(t||{}).degreeThreshold,u=void 0===i?0:i
if(o&&o.length){for(var s=!1,l=[],c=o.reduce((function(e,t){var n=t.sheet,r=t.root,a=t.shadowId||"topDocument"
if(e[a]||(e[a]={root:r,rules:[]}),!n||!n.cssRules)return e
var o=Array.from(n.cssRules)
return e[a].rules=e[a].rules.concat(o),e}),{}),d=function(){var e=f[p],t=c[e],n=t.root,r=t.rules.filter(h)
if(!r.length)return"continue"
r.forEach((function(e){var t=e.cssRules
Array.from(t).forEach((function(e){var t=function(e){var t=e.selectorText,n=e.style
if(!t||n.length<=0)return!1
var r=n.transform||n.webkitTransform||n.msTransform||!1
if(!r&&!n.rotate)return!1
var a=function(e){if(!e)return 0
var t=e.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)
if(!t)return 0
var n=W(t,3)
return m(n[1],n[2])}(r),o=a+m("rotate",n.rotate)
return!!o&&(o=Math.abs(o),!(Math.abs(o-180)%180<=u)&&Math.abs(o-90)%90<=u)}(e)
if(t&&"HTML"!==e.selectorText.toUpperCase()){var r=Array.from(n.querySelectorAll(e.selectorText))||[]
l=l.concat(r)}s=s||t}))}))},p=0,f=Object.keys(c);p<f.length;p++)d()
return!s||(l.length&&this.relatedNodes(l),!1)}function h(e){var t=e.type,n=e.cssText
return 4===t&&(/orientation:\s*landscape/i.test(n)||/orientation:\s*portrait/i.test(n))}function m(e,t){switch(e){case"rotate":case"rotateZ":return D(t)
case"rotate3d":var n=W(t.split(",").map((function(e){return e.trim()})),4),r=n[2],a=n[3]
if(0===parseInt(r))return
return D(a)
case"matrix":case"matrix3d":return function(e){var t=e.split(",")
if(t.length<=6){var n=W(t,2),r=n[0],a=n[1]
return g(Math.atan2(parseFloat(a),parseFloat(r)))}var o=parseFloat(t[8]),i=Math.asin(o),u=Math.cos(i)
return g(Math.acos(parseFloat(t[0])/u))}(t)
default:return 0}}function D(e){var t=W(e.match(/(deg|grad|rad|turn)/)||[],1)[0]
if(!t)return 0
var n,r,a=parseFloat(e.replace(t,""))
switch(t){case"rad":return g(a)
case"grad":return r=a,(r%=400)<0&&(r+=400),Math.round(r/400*360)
case"turn":return n=a,Math.round(360/(1/n))
default:return parseInt(a)}}function g(e){return Math.round(e*(180/Math.PI))}},"data-table-large-matches":function(e){if(Jh(e)){var t=Wo(e)
return t.length>=3&&t[0].length>=3&&t[1].length>=3&&t[2].length>=3}return!1},"data-table-matches":function(e){return Jh(e)},"deprecatedrole-evaluate":function(e,t,n){var r=Ci(n,{dpub:!0,fallback:!0}),a=zo.ariaRoles[r]
return!(null==a||!a.deprecated||(this.data(r),0))},"dlitem-evaluate":function(e){var t=Ia(e),n=t.nodeName.toUpperCase(),r=Uo(t)
return"DIV"===n&&["presentation","none",null].includes(r)&&(n=(t=Ia(t)).nodeName.toUpperCase(),r=Uo(t)),"DL"===n&&!(r&&!["presentation","none","list"].includes(r))},"doc-has-title-evaluate":function(){var e=a.title
return!!Zo(e)},"duplicate-id-active-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(fn(t),'"]'),r=Array.from(ca(e).querySelectorAll(n))
return!Bf(e)&&r.some(ei)},"duplicate-id-after":function(e){var t=[]
return e.filter((function(e){return-1===t.indexOf(e.data)&&(t.push(e.data),!0)}))},"duplicate-id-aria-matches":function(e){return Bf(e)},"duplicate-id-evaluate":function(e){var t=e.getAttribute("id").trim()
if(!t)return!0
var n=ca(e),r=Array.from(n.querySelectorAll('[id="'.concat(fn(t),'"]'))).filter((function(t){return t!==e}))
return r.length&&this.relatedNodes(r),this.data(t),0===r.length},"duplicate-id-misc-matches":function(e){var t=e.getAttribute("id").trim(),n='*[id="'.concat(fn(t),'"]'),r=Array.from(ca(e).querySelectorAll(n))
return!Bf(e)&&r.every((function(e){return!ei(e)}))},"duplicate-img-label-evaluate":function(e,t,n){if(["none","presentation"].includes(Ci(n)))return!1
var r=cr(n,t.parentSelector)
if(!r)return!1
var a=Li(r,!0).toLowerCase()
return""!==a&&a===au(n).toLowerCase()},"exists-evaluate":function(){},"explicit-evaluate":function(e,t,n){var r=this
if(!n.attr("id"))return!1
if(n.actualNode){var a=ca(n.actualNode),o=fn(n.attr("id")),i=Array.from(a.querySelectorAll('label[for="'.concat(o,'"]')))
if(this.relatedNodes(i),!i.length)return!1
try{return i.some((function(e){if(Va(e)){var t=Zo(Oo(e,{inControlContext:!0,startNode:n}))
return r.data({explicitLabel:t}),!!t}return!0}))}catch(e){return}}},"fallbackrole-evaluate":function(e,t,n){var r=md(n.attr("role"))
return!(r.length<=1)&&(!function(e,t){return!bi(e)&&2===t.length&&t.includes("none")&&t.includes("presentation")}(n,r)||void 0)},"focusable-content-evaluate":function(e,t,n){var r=n.tabbableElements
return!!r&&r.filter((function(e){return e!==n})).length>0},"focusable-disabled-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return r.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!Mu())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t}))&&void 0},"focusable-element-evaluate":function(e,t,n){return!(!n.hasAttr("contenteditable")||!function e(t){var r=t.attr("contenteditable")
if("true"===r||""===r)return!0
if("false"===r)return!1
var a=cr(n.parent,"[contenteditable]")
return!!a&&e(a)}(n))||Nu(n)},"focusable-modal-open-evaluate":function(e,t,n){var r=n.tabbableElements.map((function(e){return e.actualNode}))
return!r||!r.length||!Mu()||void this.relatedNodes(r)},"focusable-no-name-evaluate":function(e,t,n){var r=n.attr("tabindex")
if(!(ei(n)&&r>-1))return!1
try{return!au(n)}catch(e){return}},"focusable-not-tabbable-evaluate":function(e,t,n){var r=["button","fieldset","input","select","textarea"],a=n.tabbableElements
if(!a||!a.length)return!0
var o=a.filter((function(e){return!r.includes(e.props.nodeName)}))
return this.relatedNodes(o.map((function(e){return e.actualNode}))),!(0!==o.length&&!Mu())||!!o.every((function(e){var t=e.getComputedStylePropertyValue("pointer-events"),n=parseInt(e.getComputedStylePropertyValue("width")),r=parseInt(e.getComputedStylePropertyValue("height"))
return e.actualNode.onfocus||(0===n||0===r)&&"none"===t}))&&void 0},"frame-focusable-content-evaluate":function(e,t,n){if(n.children)try{return!n.children.some((function(e){return xh(e)}))}catch(e){return}},"frame-focusable-content-matches":function(e,t,n){var r,a
return!n.initiator&&!n.focusable&&(null===(r=n.size)||void 0===r?void 0:r.width)*(null===(a=n.size)||void 0===a?void 0:a.height)>1},"frame-tested-after":function(e){var t={}
return e.filter((function(e){if("html"!==e.node.ancestry[e.node.ancestry.length-1]){var n=e.node.ancestry.flat(1/0).join(" > ")
return t[n]=e,!0}var r=e.node.ancestry.slice(0,e.node.ancestry.length-1).flat(1/0).join(" > ")
return t[r]&&(t[r].result=!0),!1}))},"frame-tested-evaluate":function(e,t){return!t.isViolation&&void 0},"frame-title-has-text-matches":function(e){var t=e.getAttribute("title")
return!!Zo(t)},"has-alt-evaluate":function(e,t,n){var r=n.props.nodeName
return!!["img","input","area"].includes(r)&&n.hasAttr("alt")},"has-descendant-after":function(e){return e.some((function(e){return!0===e.result}))&&e.forEach((function(e){e.result=!0})),e},"has-descendant-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("has-descendant requires options.selector to be a string")
if(t.passForModal&&Mu())return!0
var r=Np(n,t.selector,(function(e){return ji(e)}))
return this.relatedNodes(r.map((function(e){return e.actualNode}))),r.length>0},"has-global-aria-attribute-evaluate":function(e,t,n){var r=Go().filter((function(e){return n.hasAttr(e)}))
return this.data(r),r.length>0},"has-implicit-chromium-role-matches":function(e,t){return null!==bi(t,{chromium:!0})},"has-lang-evaluate":function(e,t,n){var r=void 0!==a&&Fn(a)
return t.attributes.includes("xml:lang")&&t.attributes.includes("lang")&&Bh(n.attr("xml:lang"))&&!Bh(n.attr("lang"))&&!r?(this.data({messageKey:"noXHTML"}),!1):!!t.attributes.some((function(e){return Bh(n.attr(e))}))||(this.data({messageKey:"noLang"}),!1)},"has-text-content-evaluate":function(e,t,n){try{return""!==Zo(Bi(n))}catch(e){return}},"has-widget-role-evaluate":function(e){var t=e.getAttribute("role")
if(null===t)return!1
var n=Bu(t)
return"widget"===n||"composite"===n},"heading-matches":function(e,t){return"heading"===Ci(t)},"heading-order-after":function(e){var t=function(e){return(e=U(e)).sort((function(e,t){var n=e.node,r=t.node
return n.ancestry.length-r.ancestry.length})),e.reduce(qh,[]).filter((function(e){return-1!==e.level}))}(e)
return e.forEach((function(e){e.result=function(e,t){var n,r,a,o,i=Lh(t,e.node.ancestry),u=null!==(n=null===(r=t[i])||void 0===r?void 0:r.level)&&void 0!==n?n:-1,s=null!==(a=null===(o=t[i-1])||void 0===o?void 0:o.level)&&void 0!==a?a:-1
return 0===i||(-1!==u?u-s<=1:void 0)}(e,t)})),e},"heading-order-evaluate":function(){var e=Un.get("headingOrder")
if(e)return!0
var t=Np(i._tree[0],"h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame",ji)
return e=t.map((function(e){return{ancestry:[qn(e.actualNode)],level:Vh(e)}})),this.data({headingOrder:e}),Un.set("headingOrder",t),!0},"help-same-as-label-evaluate":function(e,t,n){var r=du(n),a=e.getAttribute("title")
return!!r&&(a||(a="",e.getAttribute("aria-describedby")&&(a=So(e,"aria-describedby").map((function(e){return e?Oo(e):""})).join(""))),Zo(a)===Zo(r))},"hidden-content-evaluate":function(e,t,r){if(!["SCRIPT","HEAD","TITLE","NOSCRIPT","STYLE","TEMPLATE"].includes(e.nodeName.toUpperCase())&&Fu(r)){var a=n.getComputedStyle(e)
if("none"===a.getPropertyValue("display"))return
if("hidden"===a.getPropertyValue("visibility")){var o=Ia(e),i=o&&n.getComputedStyle(o)
if(!i||"hidden"!==i.getPropertyValue("visibility"))return}}return!0},"hidden-explicit-label-evaluate":function(e,t,n){if(n.hasAttr("id")){if(!n.actualNode)return
var r=ca(e),a=fn(e.getAttribute("id")),o=r.querySelector('label[for="'.concat(a,'"]'))
if(o&&!ji(o)){var i
try{i=au(n).trim()}catch(e){return}return""===i}}return!1},"html-namespace-matches":function(e,t){return!mm(0,t)},"html5-scope-evaluate":function(e){return!Tu(a)||"TH"===e.nodeName.toUpperCase()},"identical-links-same-purpose-after":function(e){if(e.length<2)return e
for(var t=e.filter((function(e){return void 0!==e.result})),n=[],r={},a=function(e){var a,o=t[e],i=o.data,u=i.name,s=i.urlProps
if(r[u])return"continue"
var l=t.filter((function(t,n){return t.data.name===u&&n!==e})),c=l.every((function(e){return Hh(e.data.urlProps,s)}))
l.length&&!c&&(o.result=void 0),o.relatedNodes=[],(a=o.relatedNodes).push.apply(a,U(l.map((function(e){return e.relatedNodes[0]})))),r[u]=l,n.push(o)},o=0;o<t.length;o++)a(o)
return n},"identical-links-same-purpose-evaluate":function(e,t,n){var r=_o.accessibleTextVirtual(n),a=_o.sanitize(_o.removeUnicode(r,{emoji:!0,nonBmp:!0,punctuations:!0})).toLowerCase()
if(a){var o={name:a,urlProps:sa.urlPropsFromAttribute(e,"href")}
return this.data(o),this.relatedNodes([e]),!0}},"identical-links-same-purpose-matches":function(e,t){if(!au(t))return!1
var n=Ci(e)
return!n||"link"===n},"implicit-evaluate":function(e,t,n){try{var r=cr(n,"label")
if(r){var a=Zo(au(r,{inControlContext:!0,startNode:n}))
return r.actualNode&&this.relatedNodes([r.actualNode]),this.data({implicitLabel:a}),!!a}return!1}catch(e){return}},"inline-style-property-evaluate":function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.minValue,i=t.maxValue,u=t.normalValue,s=void 0===u?0:u,l=t.noImportant,c=t.multiLineOnly
if(!l&&"important"!==e.style.getPropertyPriority(r)||c&&!Iu(e))return!0
var d={}
"number"==typeof o&&(d.minValue=o),"number"==typeof i&&(d.maxValue=i)
var p=e.style.getPropertyValue(r)
if(["inherit","unset","revert","revert-layer"].includes(p))return this.data(G({value:p},d)),!0
var f=function(e,t){var r=t.cssProperty,a=t.absoluteValues,o=t.normalValue,i=n.getComputedStyle(e),u=i.getPropertyValue(r)
if("normal"===u)return o
var s=parseFloat(u)
if(a)return s
var l=parseFloat(i.getPropertyValue("font-size")),c=Math.round(s/l*100)/100
return isNaN(c)?u:c}(e,{absoluteValues:a,cssProperty:r,normalValue:s})
return this.data(G({value:f},d)),"number"==typeof f?("number"!=typeof o||f>=o)&&("number"!=typeof i||f<=i):void 0},"inserted-into-focus-order-matches":function(e){return Cu(e)},"internal-link-present-evaluate":function(e,t,n){return Lp(n,"a[href]").some((function(e){return/^#[^/!]/.test(e.attr("href"))}))},"invalid-children-evaluate":function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=[],a=[]
if(n.children){for(var o,i=_h(n.children);i.length;){var u,s=i.shift(),l=s.vChild,c=s.nested
if(!t.divGroups||c||"div"!==(o=l).props.nodeName||null!==Uo(o)){var d=Rh(l,c,t)
d&&(a.includes(d)||a.push(d),1===(null==l||null===(u=l.actualNode)||void 0===u?void 0:u.nodeType)&&r.push(l.actualNode))}else{if(!l.children)return
var p=_h(l.children,!0)
i.push.apply(i,U(p))}}return 0!==a.length&&(this.data({values:a.join(", ")}),this.relatedNodes(r),!0)}},"invalidrole-evaluate":function(e,t,n){var r=md(n.attr("role"))
return!!r.every((function(e){return!Ho(e,{allowAbstract:!0})}))&&(this.data(r),!0)},"is-element-focusable-evaluate":function(e,t,n){return ei(n)},"is-initiator-matches":fm,"is-on-screen-evaluate":function(e){return Va(e)},"is-visible-matches":function(e){return Va(e)},"is-visible-on-screen-matches":function(e,t){return Va(t)},"label-content-name-mismatch-evaluate":function(e,t,n){var r,a=null==t?void 0:t.pixelThreshold,o=null!==(r=null==t?void 0:t.occurrenceThreshold)&&void 0!==r?r:null==t?void 0:t.occuranceThreshold,i=Oo(e).toLowerCase()
if(!(iu(i)<1)){var u=Zo(Bi(n,{subtreeDescendant:!0,ignoreIconLigature:!0,pixelThreshold:a,occurrenceThreshold:o})).toLowerCase()
return!u||(iu(u)<1?!!Th(u,i)||void 0:Th(u,i))}},"label-content-name-mismatch-matches":function(e,t){var n=Ci(e)
return!!(n&&Ff("widget").includes(n)&&Ef().includes(n)&&(Zo(Io(t))||Zo(Mo(e)))&&Zo(Li(t)))},"label-matches":function(e,t){if("input"!==t.props.nodeName||!1===t.hasAttr("type"))return!0
var n=t.attr("type").toLowerCase()
return!1===["hidden","image","button","submit","reset"].includes(n)},"landmark-has-body-context-matches":function(e,t){return e.hasAttribute("role")||!pa(t,"article, aside, main, nav, section")},"landmark-is-top-level-evaluate":function(e){var t=Ff("landmark"),n=Ia(e),r=Ci(e)
for(this.data({role:r});n;){var a=n.getAttribute("role")
if(a||"FORM"===n.nodeName.toUpperCase()||(a=bi(n)),a&&t.includes(a)&&("main"!==a||"complementary"!==r))return!1
n=Ia(n)}return!0},"landmark-is-unique-after":function(e){var t=[]
return e.filter((function(e){var n=t.find((function(t){return e.data.role===t.data.role&&e.data.accessibleText===t.data.accessibleText}))
return n?(n.result=!1,n.relatedNodes.push(e.relatedNodes[0]),!1):(t.push(e),e.relatedNodes=[],!0)}))},"landmark-is-unique-evaluate":function(e,t,n){var r=Ci(e),a=au(n)
return a=a?a.toLowerCase():null,this.data({role:r,accessibleText:a}),this.relatedNodes([e]),!0},"landmark-unique-matches":function(e,t){var n=["article","aside","main","nav","section"].join(",")
return function(e){var t=e.actualNode,r=Ff("landmark"),a=Ci(t)
if(!a)return!1
var o=t.nodeName.toUpperCase()
return"HEADER"===o||"FOOTER"===o?!cr(e,n):"SECTION"===o||"FORM"===o?!!au(e):r.indexOf(a)>=0||"region"===a}(t)&&ji(e)},"layout-table-matches":function(e){return!Jh(e)&&!ei(e)},"link-in-text-block-evaluate":function(e,t){var n=t.requiredContrastRatio,r=t.allowSameColor
if(wh(e))return!1
for(var a=Ia(e);a&&1===a.nodeType&&!wh(a);)a=Ia(a)
if(a){this.relatedNodes([a])
var o=mh(e),i=mh(a),u=dh(e),s=dh(a),l=o&&i?yh(o,i):void 0
if(l&&(l=Math.floor(100*l)/100),l&&l>=n)return!0
var c=u&&s?yh(u,s):void 0
if(c&&(c=Math.floor(100*c)/100),c&&c>=n)return!0
if(!c){var d,p=null!==(d=Lu.get("bgColor"))&&void 0!==d?d:"bgContrast"
return this.data({messageKey:p}),void Lu.clear()}if(l)return!(!r||1!==l||1!==c)||(1===l&&c>1?(this.data({messageKey:"bgContrast",contrastRatio:c,requiredContrastRatio:n,nodeBackgroundColor:u?u.toHexString():void 0,parentBackgroundColor:s?s.toHexString():void 0}),!1):(this.data({messageKey:"fgContrast",contrastRatio:l,requiredContrastRatio:n,nodeColor:o?o.toHexString():void 0,parentColor:i?i.toHexString():void 0}),!1))}},"link-in-text-block-matches":function(e){var t=Zo(e.innerText),n=e.getAttribute("role")
return(!n||"link"===n)&&!!t&&!!Va(e)&&Ou(e)},"link-in-text-block-style-evaluate":function(e){if(Ch(e))return!1
for(var t=Ia(e);t&&1===t.nodeType&&!Ch(t);)t=Ia(t)
if(t){if(this.relatedNodes([t]),Qf(e,t))return!0
if(!function(e){for(var t=0,r=["before","after"];t<r.length;t++){var a=r[t]
if("none"!==n.getComputedStyle(e,":".concat(a)).getPropertyValue("content"))return!0}return!1}(e))return!1
this.data({messageKey:"pseudoContent"})}},"listitem-evaluate":function(e,t,n){var r=n.parent
if(r){var a=r.props.nodeName,o=Uo(r)
return!!["presentation","none","list"].includes(o)||(o&&Ho(o)?(this.data({messageKey:"roleNotValid"}),!1):["ul","ol","menu"].includes(a))}},"matches-definition-evaluate":function(e,t,n){return gi(n,t.matcher)},"meta-refresh-evaluate":function(e,t,n){var r=t||{},a=r.minDelay,o=r.maxDelay,i=W((n.attr("content")||"").trim().split(rm),1)[0]
if(!i.match(am))return!0
var u=parseFloat(i)
return this.data({redirectDelay:u}),"number"==typeof a&&u<=t.minDelay||"number"==typeof o&&u>t.maxDelay},"meta-viewport-scale-evaluate":function(e,t,n){var r=t||{},a=r.scaleMinimum,o=void 0===a?2:a,i=r.lowerBound,u=void 0!==i&&i,s=n.attr("content")||""
if(!s)return!0
var l=s.split(/[;,]/).reduce((function(e,t){var n=t.trim()
if(!n)return e
var r=W(n.split("="),2),a=r[0],o=r[1]
if(!a||!o)return e
var i=a.toLowerCase().trim(),u=o.toLowerCase().trim()
return"maximum-scale"===i&&"yes"===u&&(u=1),"maximum-scale"===i&&parseFloat(u)<0||(e[i]=u),e}),{})
if(u&&l["maximum-scale"]&&parseFloat(l["maximum-scale"])<u)return!0
if(!u&&"no"===l["user-scalable"])return this.data("user-scalable=no"),!1
var c=parseFloat(l["user-scalable"])
return!u&&l["user-scalable"]&&(c||0===c)&&c>-1&&c<1?(this.data("user-scalable"),!1):!(l["maximum-scale"]&&parseFloat(l["maximum-scale"])<o&&(this.data("maximum-scale"),1))},"multiple-label-evaluate":function(e){var t=fn(e.getAttribute("id")),n=e.parentNode,r=ca(e)
r=r.documentElement||r
var a=Array.from(r.querySelectorAll('label[for="'.concat(t,'"]')))
for(a.length&&(a=a.filter((function(e){return!Sa(e)})));n;)"LABEL"===n.nodeName.toUpperCase()&&-1===a.indexOf(n)&&a.push(n),n=n.parentNode
if(this.relatedNodes(a),a.length>1){var o=a.filter((function(e){return ji(e)}))
if(o.length>1)return
return!So(e,"aria-labelledby").includes(o[0])&&void 0}return!1},"nested-interactive-matches":function(e,t){var n=Ci(t)
return!!n&&!!zo.ariaRoles[n].childrenPresentational},"no-autoplay-audio-evaluate":function(e,t){if(e.duration){var n=t.allowedDuration,r=void 0===n?3:n
return function(e){if(!e.currentSrc)return 0
var t=function(e){var t=e.match(/#t=(.*)/)
if(t)return W(t,2)[1].split(",").map((function(e){return/:/.test(e)?function(e){for(var t=e.split(":"),n=0,r=1;t.length>0;)n+=r*parseInt(t.pop(),10),r*=60
return parseFloat(n)}(e):parseFloat(e)}))}(e.currentSrc)
return t?1===t.length?Math.abs(e.duration-t[0]):Math.abs(t[1]-t[0]):Math.abs(e.duration-(e.currentTime||0))}(e)<=r&&!e.hasAttribute("loop")||!!e.hasAttribute("controls")}console.warn("axe.utils.preloadMedia did not load metadata")},"no-autoplay-audio-matches":function(e){return!!e.currentSrc&&!e.hasAttribute("paused")&&!e.hasAttribute("muted")},"no-empty-role-matches":function(e,t){return!!t.hasAttr("role")&&!!t.attr("role").trim()},"no-explicit-name-required-matches":Dm,"no-focusable-content-evaluate":function(e,t,n){if(n.children)try{var r=Ah(n)
if(!r.length)return!0
var a=r.filter(kh)
return a.length>0?(this.data({messageKey:"notHidden"}),this.relatedNodes(a)):this.relatedNodes(r),!1}catch(e){return}},"no-implicit-explicit-label-evaluate":function(e,t,n){var r,a,o=Ci(n,{noImplicit:!0})
this.data(o)
try{r=Zo(Ri(n)).toLowerCase(),a=Zo(au(n)).toLowerCase()}catch(e){return}return!(!a&&!r)&&!((a||!r)&&a.includes(r))&&void 0},"no-naming-method-matches":function(e,t){var n=vi(t).namingMethods
return!(n&&0!==n.length||"combobox"===Uo(t)&&Lp(t,'input:not([type="hidden"])').length||Rf(t,{popupRoles:["listbox"]}))},"no-negative-tabindex-matches":function(e,t){var n=parseInt(t.attr("tabindex"),10)
return isNaN(n)||n>=0},"no-role-matches":function(e,t){return!t.attr("role")},"non-empty-if-present-evaluate":function(e,t,n){var r=n.props.nodeName,a=(n.attr("type")||"").toLowerCase(),o=n.attr("value")
return o&&this.data({messageKey:"has-label"}),!("input"!==r||!["submit","reset"].includes(a))&&null===o},"not-html-matches":function(e,t){return"html"!==t.props.nodeName},"object-is-loaded-matches":function(e,t){return[Dm,gm].every((function(n){return n(e,t)}))},"only-dlitems-evaluate":function(e,t,n){var r=["definition","term","list"],a=n.children.reduce((function(e,t){var n=t.actualNode
return"DIV"===n.nodeName.toUpperCase()&&null===Ci(n)?e.concat(t.children):e.concat(t)}),[]).reduce((function(e,t){var n=t.actualNode,a=n.nodeName.toUpperCase()
if(1===n.nodeType&&ji(n)){var o=Uo(n);("DT"!==a&&"DD"!==a||o)&&(r.includes(o)||e.badNodes.push(n))}else 3===n.nodeType&&""!==n.nodeValue.trim()&&(e.hasNonEmptyTextNode=!0)
return e}),{badNodes:[],hasNonEmptyTextNode:!1})
return a.badNodes.length&&this.relatedNodes(a.badNodes),!!a.badNodes.length||a.hasNonEmptyTextNode},"only-listitems-evaluate":function(e,t,n){var r=!1,a=!1,o=!0,i=[],u=[],s=[]
return n.children.forEach((function(e){var t=e.actualNode
if(3!==t.nodeType||""===t.nodeValue.trim()){if(1===t.nodeType&&ji(t)){o=!1
var n="LI"===t.nodeName.toUpperCase(),l=Ci(e),c="listitem"===l
n||c||i.push(t),n&&!c&&(u.push(t),s.includes(l)||s.push(l)),c&&(a=!0)}}else r=!0})),r||i.length?(this.relatedNodes(i),!0):!o&&!a&&(this.relatedNodes(u),this.data({messageKey:"roleNotValid",roles:s.join(", ")}),!0)},"p-as-heading-evaluate":function(e,t,n){var r=Array.from(e.parentNode.children),a=r.indexOf(e),o=(t=t||{}).margins||[],i=r.slice(a+1).find((function(e){return"P"===e.nodeName.toUpperCase()})),u=r.slice(0,a).reverse().find((function(e){return"P"===e.nodeName.toUpperCase()})),s=im(e),l=i?im(i):null,c=u?im(u):null,d=t.passLength,p=t.failLength,f=e.textContent.trim().length,h=null==i?void 0:i.textContent.trim().length
if(f>h*d)return!0
if(!l||!um(s,l,o))return!0
var m=pa(n,"blockquote")
return!!(m&&"BLOCKQUOTE"===m.nodeName.toUpperCase()||c&&!um(s,c,o)||f>h*p)&&void 0},"p-as-heading-matches":function(e){var t=Array.from(e.parentNode.childNodes),n=e.textContent.trim()
return!(0===n.length||(n.match(/[.!?:;](?![.!?:;])/g)||[]).length>=2)&&0!==t.slice(t.indexOf(e)+1).filter((function(e){return"P"===e.nodeName.toUpperCase()&&""!==e.textContent.trim()})).length},"page-no-duplicate-after":function(e){return e.filter((function(e){return"ignored"!==e.data}))},"page-no-duplicate-evaluate":function(e,t,n){if(!t||!t.selector||"string"!=typeof t.selector)throw new TypeError("page-no-duplicate requires options.selector to be a string")
var r="page-no-duplicate;"+t.selector
if(!Un.get(r)){Un.set(r,!0)
var a=Np(i._tree[0],t.selector,(function(e){return ji(e)}))
return"string"==typeof t.nativeScopeFilter&&(a=a.filter((function(e){return e.actualNode.hasAttribute("role")||!pa(e,t.nativeScopeFilter)}))),this.relatedNodes(a.filter((function(e){return e!==n})).map((function(e){return e.actualNode}))),a.length<=1}this.data("ignored")},"presentation-role-conflict-matches":function(e,t){return null!==bi(t,{chromiumRoles:!0})},"presentational-role-evaluate":function(e,t,n){var r=Uo(n)
if(["presentation","none"].includes(r)&&["iframe","frame"].includes(n.props.nodeName)&&n.hasAttr("title"))return this.data({messageKey:"iframe",nodeName:n.props.nodeName}),!1
var a=Ci(n)
if(["presentation","none"].includes(a))return this.data({role:a}),!0
if(!["presentation","none"].includes(r))return!1
var o,i=Go().some((function(e){return n.hasAttr(e)})),u=ei(n)
return o=i&&!u?"globalAria":!i&&u?"focusable":"both",this.data({messageKey:o,role:a}),!1},"region-after":function(e){var t=e.filter((function(e){return e.data.isIframe}))
return e.forEach((function(e){if(!e.result&&1!==e.node.ancestry.length){var n,r=e.node.ancestry.slice(0,-1),a=ee(t)
try{for(a.s();!(n=a.n()).done;){var o=n.value
if(fp(r,o.node.ancestry)){e.result=o.result
break}}}catch(e){a.e(e)}finally{a.f()}}})),t.forEach((function(e){e.result||(e.result=!0)})),e},"region-evaluate":function(e,t,n){return this.data({isIframe:["iframe","frame"].includes(n.props.nodeName)}),!Un.get("regionlessNodes",(function(){return function(e){return cm(i._tree[0],e).map((function(e){for(;e.parent&&!e.parent._hasRegionDescendant&&e.parent.actualNode!==a.body;)e=e.parent
return e})).filter((function(e,t,n){return n.indexOf(e)===t}))}(t)})).includes(n)},"same-caption-summary-evaluate":function(e,t,n){if(void 0!==n.children){var r=n.attr("summary"),a=n.children.find(dm),o=!!a&&Zo(Bi(a))
return!(!o||!r)&&Zo(r).toLowerCase()===Zo(o).toLowerCase()}},"scope-value-evaluate":function(e,t){var n=e.getAttribute("scope").toLowerCase()
return-1!==t.values.indexOf(n)},"scrollable-region-focusable-matches":function(e,t){return void 0!==tp(e,13)&&!1===Rf(t)&&Lp(t,"*").some((function(e){return Fu(e,!0,!0)}))},"skip-link-evaluate":function(e){var t=vo(e,"href")
return!!t&&(ji(t)||void 0)},"skip-link-matches":function(e){return Qc(e)&&La(e)},"structured-dlitems-evaluate":function(e,t,n){var r=n.children
if(!r||!r.length)return!1
for(var a,o=!1,i=!1,u=0;u<r.length;u++){if("DT"===(a=r[u].props.nodeName.toUpperCase())&&(o=!0),o&&"DD"===a)return!1
"DD"===a&&(i=!0)}return o||i},"svg-namespace-matches":mm,"svg-non-empty-title-evaluate":function(e,t,n){if(n.children){var r=n.children.find((function(e){return"title"===e.props.nodeName}))
if(!r)return this.data({messageKey:"noTitle"}),!1
try{if(""===Bi(r,{includeHidden:!0}).trim())return this.data({messageKey:"emptyTitle"}),!1}catch(e){return}return!0}},"tabindex-evaluate":function(e,t,n){var r=parseInt(n.attr("tabindex"),10)
return!!isNaN(r)||r<=0},"table-or-grid-role-matches":function(e,t){var n=Ci(t)
return["treegrid","grid","table"].includes(n)},"target-offset-evaluate":function(e,t,n){var r,a,o=(null==t?void 0:t.minOffset)||24,i=[],u=o,s=ee(oo(n,o))
try{for(s.s();!(r=s.n()).done;){var l=r.value
if("widget"===Bu(l)&&ei(l)){var c=(a=Eo(n,l),Math.round(10*a)/10)
c+.05>=o||(u=Math.min(u,c),i.push(l))}}}catch(e){s.e(e)}finally{s.f()}return 0===i.length?(this.data({closestOffset:u,minOffset:o}),!0):(this.relatedNodes(i.map((function(e){return e.actualNode}))),i.some(Nu)?(this.data({closestOffset:u,minOffset:o}),!Nu(n)&&void 0):void this.data({messageKey:"nonTabbableNeighbor",closestOffset:u,minOffset:o}))},"target-size-evaluate":function(e,t,n){var r=(null==t?void 0:t.minSize)||24,a=n.boundingClientRect,o=Ph.bind(null,r),i=oo(n),u=function(e,t){return t.filter((function(t){return!Sh(t,e)&&Ih(e,t)}))}(n,i),s=function(e,t){var n,r=[],a=[],o=ee(t)
try{for(o.s();!(n=o.n()).done;){var i=n.value
!Ih(e,i)&&xo(e,i)&&"none"!==Oh(i)&&(Sh(e,i)?r.push(i):a.push(i))}}catch(e){o.e(e)}finally{o.f()}return{fullyObscuringElms:r,partialObscuringElms:a}}(n,i),l=s.fullyObscuringElms,c=s.partialObscuringElms
if(l.length&&!u.length)return this.relatedNodes(jh(l)),this.data({messageKey:"obscured"}),!0
var d=!Nu(n)&&void 0
if(!o(a)&&!u.length)return this.data(G({minSize:r},Mh(a))),d
var p=c.filter((function(e){return"widget"===Bu(e)&&ei(e)})),f=function(e,t){var n=e.boundingClientRect
return 0===t.length?null:function(e,t){return e.reduce((function(e,n){var r=Ph(t,e)
return r!==Ph(t,n)?r?e:n:e.width*e.height>n.width*n.height?e:n}))}(Ao(n,t.map((function(e){return e.boundingClientRect}))))}(n,p)
if(u.length&&(l.length||!o(f||a)))return this.data({minSize:r,messageKey:"contentOverflow"}),void this.relatedNodes(jh(u))
if(0!==p.length&&!o(f)){var h=p.every(Nu),m="partiallyObscured".concat(h?"":"NonTabbable")
return this.data(G({messageKey:m,minSize:r},Mh(f))),this.relatedNodes(jh(p)),h?d:void 0}return this.data(G({minSize:r},Mh(f||a))),this.relatedNodes(jh(p)),!0},"td-has-header-evaluate":function(e){var t=[],n=Kh(e),r=Wo(e)
return n.forEach((function(e){wu(e)&&Zh(e)&&!Sf(e)&&(Xh(e,r).some((function(e){return null!==e&&!!wu(e)}))||t.push(e))})),!t.length||(this.relatedNodes(t),!1)},"td-headers-attr-evaluate":function(e){for(var t=[],n=[],r=[],a=0;a<e.rows.length;a++)for(var o=e.rows[a],i=0;i<o.cells.length;i++)t.push(o.cells[i])
var u=t.reduce((function(e,t){return t.getAttribute("id")&&e.push(t.getAttribute("id")),e}),[])
return t.forEach((function(e){var t=!1,a=!1
if(e.hasAttribute("headers")&&ji(e)){var o=e.getAttribute("headers").trim()
if(!o)return n.push(e)
var i=md(o)
0!==i.length&&(e.getAttribute("id")&&(t=-1!==i.indexOf(e.getAttribute("id").trim())),a=i.some((function(e){return!u.includes(e)})),(t||a)&&r.push(e))}})),r.length>0?(this.relatedNodes(r),!1):!n.length||void this.relatedNodes(n)},"th-has-data-cells-evaluate":function(e){var t=Kh(e),n=this,r=[]
t.forEach((function(e){var t=e.getAttribute("headers")
t&&(r=r.concat(t.split(/\s+/)))
var n=e.getAttribute("aria-labelledby")
n&&(r=r.concat(n.split(/\s+/)))}))
var a=t.filter((function(e){return""!==Zo(e.textContent)&&("TH"===e.nodeName.toUpperCase()||-1!==["rowheader","columnheader"].indexOf(e.getAttribute("role")))})),o=Wo(e),i=!0
return a.forEach((function(e){if(!e.getAttribute("id")||!r.includes(e.getAttribute("id"))){var t=Yo(e,o),a=!1
Qo(e)&&(a=nm("down",t,o).find((function(t){return!Qo(t)&&Xh(t,o).includes(e)}))),!a&&Xo(e)&&(a=nm("right",t,o).find((function(t){return!Xo(t)&&Xh(t,o).includes(e)}))),a||n.relatedNodes(e),i=i&&a}})),!!i||void 0},"title-only-evaluate":function(e,t,n){var r=du(n),a=Ai(n),o=n.attr("aria-describedby")
return!(r||!a&&!o)},"unique-frame-title-after":function(e){var t={}
return e.forEach((function(e){t[e.data]=void 0!==t[e.data]?++t[e.data]:0})),e.forEach((function(e){e.result=!!t[e.data]})),e},"unique-frame-title-evaluate":function(e,t,n){var r=Zo(n.attr("title")).toLowerCase()
return this.data(r),!0},"unsupportedrole-evaluate":function(e,t,n){var r=Ci(n,{dpub:!0,fallback:!0}),a=Vo(r)
return a&&this.data(r),a},"valid-lang-evaluate":function(e,t,n){var r=[]
return t.attributes.forEach((function(e){var a=n.attr(e)
if("string"==typeof a){var o=xd(a),i=t.value?!t.value.map(xd).includes(o):!tf(o);(""!==o&&i||""!==a&&!Zo(a))&&r.push(e+'="'+n.attr(e)+'"')}})),!(!r.length||"html"!==n.props.nodeName&&!Eu(n)||(this.data(r),0))},"valid-scrollable-semantics-evaluate":function(e,t){return function(e,t){var n=Uo(e)
return n&&(Gf[n]||t.roles.includes(n))||!1}(e,t)||function(e){var t=e.nodeName.toUpperCase()
return $f[t]||!1}(e)},"widget-not-inline-matches":function(e,t){return vm.every((function(n){return n(e,t)}))},"window-is-top-matches":function(e){return e.ownerDocument.defaultView.self===e.ownerDocument.defaultView.top},"xml-lang-mismatch-evaluate":function(e,t,n){return xd(n.attr("lang"))===xd(n.attr("xml:lang"))},"xml-lang-mismatch-matches":function(e){var t=xd(e.getAttribute("lang")),n=xd(e.getAttribute("xml:lang"))
return tf(t)&&tf(n)}},wm=Fm,Em=function(e){this.id=e.id,this.data=null,this.relatedNodes=[],this.result=null}
function Cm(e){if("string"==typeof e){if(wm[e])return wm[e]
if(/^\s*function[\s\w]*\(/.test(e))return new Function("return "+e+";")()
throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e))}return e}function xm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return(Array.isArray(e)||"object"!==o(e))&&(e={value:e}),e}function Am(e){e&&(this.id=e.id,this.configure(e))}Am.prototype.enabled=!0,Am.prototype.run=function(e,t,n,r,a){var o=(t=t||{}).hasOwnProperty("enabled")?t.enabled:this.enabled,i=this.getOptions(t.options)
if(o){var u,s=new Em(this),l=Yn(s,t,r,a)
try{u=this.evaluate.call(l,e.actualNode,i,e,n)}catch(t){return e&&e.actualNode&&(t.errorNode=new Wn(e).toJSON()),void a(t)}l.isAsync||(s.result=u,r(s))}else r(null)},Am.prototype.runSync=function(e,t,n){var r=(t=t||{}).enabled
if(!(void 0===r?this.enabled:r))return null
var a,o=this.getOptions(t.options),i=new Em(this),u=Yn(i,t)
u.async=function(){throw new Error("Cannot run async check while in a synchronous run")}
try{a=this.evaluate.call(u,e.actualNode,o,e,n)}catch(t){throw e&&e.actualNode&&(t.errorNode=new Wn(e).toJSON()),t}return i.result=a,i},Am.prototype.configure=function(e){var t=this
e.evaluate&&!wm[e.evaluate]||(this._internalCheck=!0),e.hasOwnProperty("enabled")&&(this.enabled=e.enabled),e.hasOwnProperty("options")&&(this._internalCheck?this.options=xm(e.options):this.options=e.options),["evaluate","after"].filter((function(t){return e.hasOwnProperty(t)})).forEach((function(n){return t[n]=Cm(e[n])}))},Am.prototype.getOptions=function(e){return this._internalCheck?aa(this.options,xm(e||{})):e||this.options}
var km=Am,Tm=function(e){this.id=e.id,this.result=Wt.NA,this.pageLevel=e.pageLevel,this.impact=null,this.nodes=[]}
function Nm(e,t){this._audit=t,this.id=e.id,this.selector=e.selector||"*",e.impact&&(dn(Wt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact),this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden,this.enabled="boolean"!=typeof e.enabled||e.enabled,this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel,this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail,this.any=e.any||[],this.all=e.all||[],this.none=e.none||[],this.tags=e.tags||[],this.preload=!!e.preload,this.actIds=e.actIds,e.matches&&(this.matches=Cm(e.matches))}function Bm(e){if(e.length){var t=!1,n={}
return e.forEach((function(e){var r=e.results.filter((function(e){return e}))
n[e.type]=r,r.length&&(t=!0)})),t?n:null}}Nm.prototype.matches=function(){return!0},Nm.prototype.gather=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="mark_gather_start_"+this.id,r="mark_gather_end_"+this.id,a="mark_isVisibleToScreenReaders_start_"+this.id,o="mark_isVisibleToScreenReaders_end_"+this.id
t.performanceTimer&&Cp.mark(n)
var i=$p(this.selector,e)
return this.excludeHidden&&(t.performanceTimer&&Cp.mark(a),i=i.filter((function(e){return ji(e)})),t.performanceTimer&&(Cp.mark(o),Cp.measure("rule_"+this.id+"#gather_axe.utils.isVisibleToScreenReaders",a,o))),t.performanceTimer&&(Cp.mark(r),Cp.measure("rule_"+this.id+"#gather",n,r)),i},Nm.prototype.runChecks=function(e,t,n,r,a,o){var i=this,u=gr()
this[e].forEach((function(e){var a=i._audit.checks[e.id||e],o=Od(a,i.id,n)
u.defer((function(e,n){a.run(t,o,r,e,n)}))})),u.then((function(t){t=t.filter((function(e){return e})),a({type:e,results:t})})).catch(o)},Nm.prototype.runChecksSync=function(e,t,n,r){var a=this,o=[]
return this[e].forEach((function(e){var i=a._audit.checks[e.id||e],u=Od(i,a.id,n)
o.push(i.runSync(t,u,r))})),{type:e,results:o=o.filter((function(e){return e}))}},Nm.prototype.run=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0
n.performanceTimer&&this._trackPerformance()
var o,i=gr(),s=new Tm(this)
try{o=this.gatherAndMatchNodes(e,n)}catch(e){return void a(new u({cause:e,ruleId:this.id}))}n.performanceTimer&&this._logGatherPerformance(o),o.forEach((function(r){i.defer((function(a,o){var i=gr();["any","all","none"].forEach((function(a){i.defer((function(o,i){t.runChecks(a,r,n,e,o,i)}))})),i.then((function(e){var o=Bm(e)
o&&(o.node=new Wn(r,n),s.nodes.push(o),t.reviewOnFail&&(["any","all"].forEach((function(e){o[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),o.none.forEach((function(e){!0===e.result&&(e.result=void 0)})))),a()})).catch((function(e){return o(e)}))}))})),i.defer((function(e){return setTimeout(e,0)})),n.performanceTimer&&this._logRulePerformance(),i.then((function(){return r(s)})).catch((function(e){return a(e)}))},Nm.prototype.runSync=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
n.performanceTimer&&this._trackPerformance()
var r,a=new Tm(this)
try{r=this.gatherAndMatchNodes(e,n)}catch(e){throw new u({cause:e,ruleId:this.id})}return n.performanceTimer&&this._logGatherPerformance(r),r.forEach((function(r){var o=[];["any","all","none"].forEach((function(a){o.push(t.runChecksSync(a,r,n,e))}))
var i=Bm(o)
i&&(i.node=r.actualNode?new Wn(r,n):null,a.nodes.push(i),t.reviewOnFail&&(["any","all"].forEach((function(e){i[e].forEach((function(e){!1===e.result&&(e.result=void 0)}))})),i.none.forEach((function(e){!0===e.result&&(e.result=void 0)}))))})),n.performanceTimer&&this._logRulePerformance(),a},Nm.prototype._trackPerformance=function(){this._markStart="mark_rule_start_"+this.id,this._markEnd="mark_rule_end_"+this.id,this._markChecksStart="mark_runchecks_start_"+this.id,this._markChecksEnd="mark_runchecks_end_"+this.id},Nm.prototype._logGatherPerformance=function(e){Yt("gather (",e.length,"):",Cp.timeElapsed()+"ms"),Cp.mark(this._markChecksStart)},Nm.prototype._logRulePerformance=function(){Cp.mark(this._markChecksEnd),Cp.mark(this._markEnd),Cp.measure("runchecks_"+this.id,this._markChecksStart,this._markChecksEnd),Cp.measure("rule_"+this.id,this._markStart,this._markEnd)},Nm.prototype.gatherAndMatchNodes=function(e,t){var n=this,r="mark_matches_start_"+this.id,a="mark_matches_end_"+this.id,o=this.gather(e,t)
return t.performanceTimer&&Cp.mark(r),o=o.filter((function(t){return n.matches(t.actualNode,t,e)})),t.performanceTimer&&(Cp.mark(a),Cp.measure("rule_"+this.id+"#matches",r,a)),o},Nm.prototype.after=function(e,t){var n,r=this,a=Zr(n=this).map((function(e){var t=n._audit.checks[e.id||e]
return t&&"function"==typeof t.after?t:null})).filter(Boolean),o=this.id
return a.forEach((function(n){var a,i,u,s=(a=e.nodes,i=n.id,u=[],a.forEach((function(e){Zr(e).forEach((function(t){t.id===i&&(t.node=e.node,u.push(t))}))})),u),l=Od(n,o,t),c=n.after(s,l)
r.reviewOnFail&&c.forEach((function(e){var t=(r.any.includes(e.id)||r.all.includes(e.id))&&!1===e.result,n=r.none.includes(e.id)&&!0===e.result;(t||n)&&(e.result=void 0)})),s.forEach((function(e){delete e.node,-1===c.indexOf(e)&&(e.filtered=!0)}))})),e.nodes=function(e){var t=["any","all","none"],n=e.nodes.filter((function(e){var n=0
return t.forEach((function(t){e[t]=e[t].filter((function(e){return!0!==e.filtered})),n+=e[t].length})),n>0}))
return e.pageLevel&&n.length&&(n=[n.reduce((function(e,n){if(e)return t.forEach((function(t){e[t].push.apply(e[t],n[t])})),e}))]),n}(e),e},Nm.prototype.configure=function(e){e.hasOwnProperty("selector")&&(this.selector=e.selector),e.hasOwnProperty("excludeHidden")&&(this.excludeHidden="boolean"!=typeof e.excludeHidden||e.excludeHidden),e.hasOwnProperty("enabled")&&(this.enabled="boolean"!=typeof e.enabled||e.enabled),e.hasOwnProperty("pageLevel")&&(this.pageLevel="boolean"==typeof e.pageLevel&&e.pageLevel),e.hasOwnProperty("reviewOnFail")&&(this.reviewOnFail="boolean"==typeof e.reviewOnFail&&e.reviewOnFail),e.hasOwnProperty("any")&&(this.any=e.any),e.hasOwnProperty("all")&&(this.all=e.all),e.hasOwnProperty("none")&&(this.none=e.none),e.hasOwnProperty("tags")&&(this.tags=e.tags),e.hasOwnProperty("actIds")&&(this.actIds=e.actIds),e.hasOwnProperty("matches")&&(this.matches=Cm(e.matches)),e.impact&&(dn(Wt.impact.includes(e.impact),"Impact ".concat(e.impact," is not a valid impact")),this.impact=e.impact)}
var Rm=Nm,_m=ie(Vt()),Sm=/\{\{.+?\}\}/g
function Om(){return n.origin&&"null"!==n.origin?n.origin:n.location&&n.location.origin&&"null"!==n.location.origin?n.location.origin:void 0}function Mm(e,t,n){var r,a
for(r=0,a=e.length;r<a;r++)t[n](e[r])}var Im=function(){function e(t){Q(this,e),this.lang="en",this.defaultConfig=t,this.standards=zo,this._init(),this._defaultLocale=null}return Z(e,[{key:"_setDefaultLocale",value:function(){if(!this._defaultLocale){for(var e={checks:{},rules:{},failureSummaries:{},incompleteFallbackMessage:"",lang:this.lang},t=Object.keys(this.data.checks),n=0;n<t.length;n++){var r=t[n],a=this.data.checks[r].messages,o=a.pass,i=a.fail,u=a.incomplete
e.checks[r]={pass:o,fail:i,incomplete:u}}for(var s=Object.keys(this.data.rules),l=0;l<s.length;l++){var c=s[l],d=this.data.rules[c],p=d.description,f=d.help
e.rules[c]={description:p,help:f}}for(var h=Object.keys(this.data.failureSummaries),m=0;m<h.length;m++){var D=h[m],g=this.data.failureSummaries[D].failureMessage
e.failureSummaries[D]={failureMessage:g}}e.incompleteFallbackMessage=this.data.incompleteFallbackMessage,this._defaultLocale=e}}},{key:"_resetLocale",value:function(){var e=this._defaultLocale
e&&this.applyLocale(e)}},{key:"_applyCheckLocale",value:function(e){for(var t,n,r,a,i=Object.keys(e),u=0;u<i.length;u++){var s=i[u]
if(!this.data.checks[s])throw new Error('Locale provided for unknown check: "'.concat(s,'"'))
this.data.checks[s]=(t=this.data.checks[s],r=void 0,a=void 0,r=(n=e[s]).pass,a=n.fail,"string"==typeof r&&Sm.test(r)&&(r=_m.default.compile(r)),"string"==typeof a&&Sm.test(a)&&(a=_m.default.compile(a)),G({},t,{messages:{pass:r||t.messages.pass,fail:a||t.messages.fail,incomplete:"object"===o(t.messages.incomplete)?G({},t.messages.incomplete,n.incomplete):n.incomplete}}))}}},{key:"_applyRuleLocale",value:function(e){for(var t,n,r,a,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i]
if(!this.data.rules[u])throw new Error('Locale provided for unknown rule: "'.concat(u,'"'))
this.data.rules[u]=(t=this.data.rules[u],r=void 0,a=void 0,r=(n=e[u]).help,a=n.description,"string"==typeof r&&Sm.test(r)&&(r=_m.default.compile(r)),"string"==typeof a&&Sm.test(a)&&(a=_m.default.compile(a)),G({},t,{help:r||t.help,description:a||t.description}))}}},{key:"_applyFailureSummaries",value:function(e){for(var t,n,r=Object.keys(e),a=0;a<r.length;a++){var o=r[a]
if(!this.data.failureSummaries[o])throw new Error('Locale provided for unknown failureMessage: "'.concat(o,'"'))
this.data.failureSummaries[o]=(t=this.data.failureSummaries[o],n=void 0,"string"==typeof(n=e[o].failureMessage)&&Sm.test(n)&&(n=_m.default.compile(n)),G({},t,{failureMessage:n||t.failureMessage}))}}},{key:"applyLocale",value:function(e){var t,n
this._setDefaultLocale(),e.checks&&this._applyCheckLocale(e.checks),e.rules&&this._applyRuleLocale(e.rules),e.failureSummaries&&this._applyFailureSummaries(e.failureSummaries,"failureSummaries"),e.incompleteFallbackMessage&&(this.data.incompleteFallbackMessage=(t=this.data.incompleteFallbackMessage,"string"==typeof(n=e.incompleteFallbackMessage)&&Sm.test(n)&&(n=_m.default.compile(n)),n||t)),e.lang&&(this.lang=e.lang)}},{key:"setAllowedOrigins",value:function(e){var t=Om()
this.allowedOrigins=[]
var n,r=ee(e)
try{for(r.s();!(n=r.n()).done;){var a=n.value
if(a===Wt.allOrigins)return void(this.allowedOrigins=["*"])
a!==Wt.sameOrigin?this.allowedOrigins.push(a):t&&this.allowedOrigins.push(t)}}catch(e){r.e(e)}finally{r.f()}}},{key:"_init",value:function(){var e=function(e){var t
if(e?(t=Kn(e)).commons=e.commons:t={},t.reporter=t.reporter||null,t.noHtml=t.noHtml||!1,!t.allowedOrigins){var n=Om()
t.allowedOrigins=n?[n]:[]}return t.rules=t.rules||[],t.checks=t.checks||[],t.data=G({checks:{},rules:{}},t.data),t}(this.defaultConfig)
this.lang=e.lang||"en",this.reporter=e.reporter,this.commands={},this.rules=[],this.checks={},this.brand="axe",this.application="axeAPI",this.tagExclude=["experimental"],this.noHtml=e.noHtml,this.allowedOrigins=e.allowedOrigins,Mm(e.rules,this,"addRule"),Mm(e.checks,this,"addCheck"),this.data={},this.data.checks=e.data&&e.data.checks||{},this.data.rules=e.data&&e.data.rules||{},this.data.failureSummaries=e.data&&e.data.failureSummaries||{},this.data.incompleteFallbackMessage=e.data&&e.data.incompleteFallbackMessage||"",this._constructHelpUrls()}},{key:"registerCommand",value:function(e){this.commands[e.id]=e.callback}},{key:"addRule",value:function(e){e.metadata&&(this.data.rules[e.id]=e.metadata)
var t=this.getRule(e.id)
t?t.configure(e):this.rules.push(new Rm(e,this))}},{key:"addCheck",value:function(e){var t=e.metadata
"object"===o(t)&&(this.data.checks[e.id]=t,"object"===o(t.messages)&&Object.keys(t.messages).filter((function(e){return t.messages.hasOwnProperty(e)&&"string"==typeof t.messages[e]})).forEach((function(e){0===t.messages[e].indexOf("function")&&(t.messages[e]=new Function("return "+t.messages[e]+";")())}))),this.checks[e.id]?this.checks[e.id].configure(e):this.checks[e.id]=new km(e)}},{key:"run",value:function(e,t,n,r){this.normalizeOptions(t),i._selectCache=[]
var a=function(e,t,n){return e.reduce((function(e,r){return Vp(r,t,n)?r.preload?(e.later.push(r),e):(e.now.push(r),e):e}),{now:[],later:[]})}(this.rules,e,t),o=a.now,u=a.later,s=gr()
o.forEach((function(n){s.defer(Pm(n,e,t))}))
var l=gr()
u.length&&l.defer((function(e){Pp(t).then((function(t){return e(t)})).catch((function(t){console.warn("Couldn't load preload assets: ",t),e(void 0)}))}))
var c=gr()
c.defer(s),c.defer(l),c.then((function(a){var o=a.pop()
if(o&&o.length){var s=o[0]
s&&(e=G({},e,s))}var l=a[0]
if(!u.length)return i._selectCache=void 0,void n(l.filter((function(e){return!!e})))
var c=gr()
u.forEach((function(n){var r=Pm(n,e,t)
c.defer(r)})),c.then((function(e){i._selectCache=void 0,n(l.concat(e).filter((function(e){return!!e})))})).catch(r)})).catch(r)}},{key:"after",value:function(e,t){var n=this.rules
return e.map((function(e){var r=Jr(n,"id",e.id)
if(!r)throw new Error("Result for unknown rule. You may be running mismatch axe-core versions")
return r.after(e,t)}))}},{key:"getRule",value:function(e){return this.rules.find((function(t){return t.id===e}))}},{key:"normalizeOptions",value:function(e){var t=[],n=[]
if(this.rules.forEach((function(e){n.push(e.id),e.tags.forEach((function(e){t.includes(e)||t.push(e)}))})),["object","string"].includes(o(e.runOnly))){if("string"==typeof e.runOnly&&(e.runOnly=[e.runOnly]),Array.isArray(e.runOnly)){var r=e.runOnly.find((function(e){return t.includes(e)})),a=e.runOnly.find((function(e){return n.includes(e)}))
if(r&&a)throw new Error("runOnly cannot be both rules and tags")
e.runOnly=a?{type:"rule",values:e.runOnly}:{type:"tag",values:e.runOnly}}var u=e.runOnly
if(u.value&&!u.values&&(u.values=u.value,delete u.value),!Array.isArray(u.values)||0===u.values.length)throw new Error("runOnly.values must be a non-empty array")
if(["rule","rules"].includes(u.type))u.type="rule",u.values.forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.runOnly")}))
else{if(!["tag","tags",void 0].includes(u.type))throw new Error("Unknown runOnly type '".concat(u.type,"'"))
u.type="tag"
var s=u.values.filter((function(e){return!t.includes(e)&&!/wcag2[1-3]a{1,3}/.test(e)}))
0!==s.length&&i.log("Could not find tags `"+s.join("`, `")+"`")}}return"object"===o(e.rules)&&Object.keys(e.rules).forEach((function(e){if(!n.includes(e))throw new Error("unknown rule `"+e+"` in options.rules")})),e}},{key:"setBranding",value:function(e){var t={brand:this.brand,application:this.application}
"string"==typeof e&&(this.application=e),e&&e.hasOwnProperty("brand")&&e.brand&&"string"==typeof e.brand&&(this.brand=e.brand),e&&e.hasOwnProperty("application")&&e.application&&"string"==typeof e.application&&(this.application=e.application),this._constructHelpUrls(t)}},{key:"_constructHelpUrls",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=(i.version.match(/^[1-9][0-9]*\.[0-9]+/)||["x.y"])[0]
this.rules.forEach((function(r){e.data.rules[r.id]||(e.data.rules[r.id]={})
var a=e.data.rules[r.id];("string"!=typeof a.helpUrl||t&&a.helpUrl===jm(t,r.id,n))&&(a.helpUrl=jm(e,r.id,n))}))}},{key:"resetRulesAndChecks",value:function(){this._init(),this._resetLocale()}}]),e}()
function Pm(e,t,n){return n.performanceTimer&&Cp.mark("mark_rule_start_"+e.id),function(r,a){e.run(t,n,(function(e){r(e)}),(function(t){if(n.debug)a(t)
else{var o=Object.assign(new Tm(e),{result:Wt.CANTTELL,description:"An error occured while running this rule",message:t.message,stack:t.stack,error:t,errorNode:t.errorNode})
r(o)}}))}}function jm(e,t,n){var r=e.brand,a=e.application,o=e.lang
return Wt.helpUrlBase+r+"/"+(n||i.version.substring(0,i.version.lastIndexOf(".")))+"/"+t+"?application="+encodeURIComponent(a)+(o&&"en"!==o?"&lang="+encodeURIComponent(o):"")}var qm=Im
function Lm(){Un.get("globalDocumentSet")&&(Un.set("globalDocumentSet",!1),a=null),Un.get("globalWindowSet")&&(Un.set("globalWindowSet",!1),n=null)}var zm=function(){Lm(),i._memoizedFns.forEach((function(e){return e.clear()})),Un.clear(),i._tree=void 0,i._selectorData=void 0,i._selectCache=void 0},Vm=function(e,t,n,r){try{e=new Zd(e),i._tree=e.flatTree,i._selectorData=Rn(e.flatTree)}catch(e){return zm(),r(e)}var a=gr(),o=i._audit
t.performanceTimer&&Cp.auditStart(),e.frames.length&&!1!==t.iframes&&a.defer((function(n,r){na(e,t,"rules",null,n,r)})),a.defer((function(n,r){o.run(e,t,n,r)})),a.then((function(a){try{t.performanceTimer&&Cp.auditEnd()
var i=ta(a.map((function(e){return{results:e}})))
e.initiator&&((i=o.after(i,t)).forEach(qp),i=i.map(on))
try{n(i,zm)}catch(e){zm(),Yt(e)}}catch(e){zm(),r(e)}})).catch((function(e){zm(),r(e)}))}
function Hm(e){this._run=e.run,this._collect=e.collect,this._registry={},e.commands.forEach((function(e){i._audit.registerCommand(e)}))}function Um(e){var t,n,r,u,s=W(e,3),l=s[0],c=s[1],d=s[2],p=new TypeError("axe.run arguments are invalid")
if(!zd(u=l)&&!Vd(u)){if(void 0!==d)throw p
d=c,c=l,l=a}if("object"!==o(c)){if(void 0!==d)throw p
d=c,c={}}if("function"!=typeof d&&void 0!==d)throw p
return(c=Kn(c)).reporter=null!==(t=null!==(n=c.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",{context:l,options:c,callback:d}}n.top!==n&&(Wr.subscribe("axe.start",(function(e,t,n){var r=n,o=function(e){e instanceof Error==0&&(e=new Error(e)),n(e)},u=e&&e.context||{}
u.hasOwnProperty("include")&&!u.include.length&&(u.include=[a])
var s=e&&e.options||{}
switch(e.command){case"rules":return Vm(u,s,(function(e,t){r(e),t()}),o)
case"cleanup-plugin":return sf(r,o)
default:if(i._audit&&i._audit.commands&&i._audit.commands[e.command])return i._audit.commands[e.command](e,n)}})),Wr.subscribe("axe.ping",(function(e,t,n){n({axe:!0})}))),Hm.prototype.run=function(){return this._run.apply(this,arguments)},Hm.prototype.collect=function(){return this._collect.apply(this,arguments)},Hm.prototype.cleanup=function(e){var t=i.utils.queue(),n=this
Object.keys(this._registry).forEach((function(e){t.defer((function(t){n._registry[e].cleanup(t)}))})),t.then(e)},Hm.prototype.add=function(e){this._registry[e.id]=e}
var $m=function(){}
function Gm(e){var t=e.node,n=H(e,F)
n.node=t.toJSON()
for(var r=0,a=["any","all","none"];r<a.length;r++){var o=a[r]
n[o]=n[o].map((function(e){var t=e.relatedNodes
return G({},H(e,w),{relatedNodes:t.map((function(e){return e.toJSON()}))})}))}return n}function Wm(e){var t=e.frames,n=e.frameSpec
return n?t.map((function(e){return Wn.mergeSpecs(e,n)})):t}var Ym=function(e,t,n){if("function"==typeof t&&(n=t,t={}),!e||!Array.isArray(e))return n(e)
n(e.map((function(e){for(var t=G({},e),n=0,r=["passes","violations","incomplete","inapplicable"];n<r.length;n++){var a=r[n]
t[a]&&Array.isArray(t[a])&&(t[a]=t[a].map((function(e){var t,n=e.node,r=H(e,x)
return G({node:n="function"==typeof(null===(t=n)||void 0===t?void 0:t.toJSON)?n.toJSON():n},r)})))}return t})))},Km={base:{Audit:qm,CheckResult:Em,Check:km,Context:Zd,RuleResult:Tm,Rule:Rm,metadataFunctionMap:wm},public:{reporters:lf},helpers:{failureSummary:Ad,incompleteFallbackMessage:kd,processAggregate:Nd},utils:{setDefaultFrameMessenger:$r,cacheNodeSelectors:Fd,getNodesMatchingExpression:gd,convertSelector:ir},commons:{dom:{nativelyHidden:Fa,displayHidden:wa,visibilityHidden:Ea,contentVisibiltyHidden:Ca,ariaHidden:xa,opacityHidden:Aa,scrollHidden:ka,overflowHidden:Ta,clipHidden:Na,areaHidden:Ba,detailsHidden:Ra}}}
i._thisWillBeDeletedDoNotUse=Km,i.constants=Wt,i.log=Yt,i.AbstractVirtualNode=Qt,i.SerialVirtualNode=uf,i.VirtualNode=hd,i._cache=Un,i.imports=Vu,i.cleanup=sf,i.configure=function(e){var t
if(!(t=i._audit))throw new Error("No audit configured")
if(e.axeVersion||e.ver){var n=e.axeVersion||e.ver
if(!/^\d+\.\d+\.\d+(-canary)?/.test(n))throw new Error("Invalid configured version ".concat(n))
var r=W(n.split("-"),2),a=r[0],o=r[1],u=W(a.split(".").map(Number),3),s=u[0],l=u[1],c=u[2],d=W(i.version.split("-"),2),p=d[0],f=d[1],h=W(p.split(".").map(Number),3),m=h[0],D=h[1],g=h[2]
if(s!==m||D<l||D===l&&g<c||s===m&&l===D&&c===g&&o&&o!==f)throw new Error("Configured version ".concat(n," is not compatible with current axe version ").concat(i.version))}if(e.reporter&&("function"==typeof e.reporter||cf(e.reporter))&&(t.reporter=e.reporter),e.checks){if(!Array.isArray(e.checks))throw new TypeError("Checks property must be an array")
e.checks.forEach((function(e){if(!e.id)throw new TypeError("Configured check ".concat(JSON.stringify(e)," is invalid. Checks must be an object with at least an id property"))
t.addCheck(e)}))}var v,b=[]
if(e.rules){if(!Array.isArray(e.rules))throw new TypeError("Rules property must be an array")
e.rules.forEach((function(e){if(!e.id)throw new TypeError("Configured rule ".concat(JSON.stringify(e)," is invalid. Rules must be an object with at least an id property"))
b.push(e.id),t.addRule(e)}))}if(e.disableOtherRules&&t.rules.forEach((function(e){!1===b.includes(e.id)&&(e.enabled=!1)})),void 0!==e.branding?t.setBranding(e.branding):t._constructHelpUrls(),e.tagExclude&&(t.tagExclude=e.tagExclude),e.locale&&t.applyLocale(e.locale),e.standards&&(v=e.standards,Object.keys(Lo).forEach((function(e){v[e]&&(Lo[e]=aa(Lo[e],v[e]))}))),e.noHtml&&(t.noHtml=!0),e.allowedOrigins){if(!Array.isArray(e.allowedOrigins))throw new TypeError("Allowed origins property must be an array")
if(e.allowedOrigins.includes("*"))throw new Error('"*" is not allowed. Use "'.concat(Wt.allOrigins,'" instead'))
t.setAllowedOrigins(e.allowedOrigins)}},i.frameMessenger=function(e){Wr.updateMessenger(e)},i.getRules=function(e){var t=(e=e||[]).length?i._audit.rules.filter((function(t){return!!e.filter((function(e){return-1!==t.tags.indexOf(e)})).length})):i._audit.rules,n=i._audit.data.rules||{}
return t.map((function(e){var t=n[e.id]||{}
return{ruleId:e.id,description:t.description,help:t.help,helpUrl:t.helpUrl,tags:e.tags,actIds:e.actIds}}))},i._load=function(e){i._audit=new qm(e)},i.plugins={},i.registerPlugin=function(e){i.plugins[e.id]=new Hm(e)},i.hasReporter=cf,i.getReporter=df,i.addReporter=function(e,t,n){lf[e]=t,n&&(of=t)},i.reset=function(){var e=i._audit
if(!e)throw new Error("No audit configured")
e.resetRulesAndChecks(),Object.keys(Lo).forEach((function(e){Lo[e]=qo[e]}))},i._runRules=Vm,i.runVirtualRule=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
n.reporter=n.reporter||i._audit.reporter||"v1",i._selectorData={},t instanceof Qt||(t=new uf(t))
var r=ep(e)
if(!r)throw new Error("unknown rule `"+e+"`")
var a={initiator:!0,include:[t],exclude:[],frames:[],page:!1,focusable:!0,size:{},flatTree:[]},o=(r=Object.create(r,{excludeHidden:{value:!1}})).runSync(a,n)
qp(o),on(o)
var u=ln([o])
return u.violations.forEach((function(e){return e.nodes.forEach((function(e){e.failureSummary=Ad(e)}))})),G({},Md(),u,{toolOptions:n})},i.run=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
!function(e){var t=n&&"Node"in n&&"NodeList"in n,r=!!a
if(!t||!r){if(!e||!e.ownerDocument)throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.')
r||(Un.set("globalDocumentSet",!0),a=e.ownerDocument),t||(Un.set("globalWindowSet",!0),n=a.defaultView)}}(t[0])
var o=Um(t),u=o.context,s=o.options,l=o.callback,c=void 0===l?$m:l,d=function(e){var t,n,r
return"function"==typeof Promise&&e===$m?t=new Promise((function(e,t){n=t,r=e})):r=n=$m,{thenable:t,reject:n,resolve:r}}(c),p=d.thenable,f=d.resolve,h=d.reject
try{dn(i._audit,"No audit configured"),dn(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")}catch(e){return function(e,t){if(Lm(),"function"!=typeof t||t===$m)throw e
t(e.message)}(e,c)}return i._running=!0,s.performanceTimer&&i.utils.performanceTimer.start(),i._runRules(u,s,(function(e,t){s.performanceTimer&&i.utils.performanceTimer.end()
try{!function(e,t,n){var r=df(t.reporter)(e,t,n)
void 0!==r&&n(r)}(e,s,(function(e){i._running=!1,t()
try{c(null,e)}catch(e){i.log(e)}f(e)}))}catch(e){i._running=!1,t(),c(e),h(e)}}),(function(e){s.performanceTimer&&i.utils.performanceTimer.end(),i._running=!1,Lm(),c(e),h(e)})),p},i.setup=function(e){if(i._tree)throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.")
return i._tree=Cd(e),i._selectorData=Rn(i._tree),i._tree[0]},i.teardown=zm,i.runPartial=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
var r=Um(t),a=r.options,o=r.context
dn(i._audit,"Axe is not configured. Audit is missing."),dn(!i._running,"Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.")
var u=new Zd(o,i._tree)
return i._tree=u.flatTree,i._selectorData=Rn(u.flatTree),i._running=!0,new Promise((function(e,t){i._audit.run(u,a,e,t)})).then((function(e){e=e.map((function(e){var t=e.nodes,n=H(e,y)
return G({nodes:t.map(Gm)},n)}))
var t,n=u.frames.map((function(e){var t=e.node
return new Wn(t,a).toJSON()}))
return u.initiator&&(t=Md()),i._running=!1,zm(),{results:e,frames:n,environmentData:t}})).catch((function(e){return i._running=!1,zm(),Promise.reject(e)}))},i.finishRun=function(e){var t,n,r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
a=Kn(a)
var o=(e.find((function(e){return e.environmentData}))||{}).environmentData
i._audit.normalizeOptions(a),a.reporter=null!==(t=null!==(n=a.reporter)&&void 0!==n?n:null===(r=i._audit)||void 0===r?void 0:r.reporter)&&void 0!==t?t:"v1",function(e){var t,n=[],r=ee(e)
try{for(r.s();!(t=r.n()).done;){var a=t.value,o=n.shift()
if(a){a.frameSpec=null!=o?o:null
var i=Wm(a)
n.unshift.apply(n,U(i))}}}catch(e){r.e(e)}finally{r.f()}}(e)
var u=ta(e)
return(u=i._audit.after(u,a)).forEach(qp),function(e,t){return new Promise((function(n){df(t.reporter)(e,t,n)}))}(u=u.map(on),G({environmentData:o},a))},i.commons=Uh,i.utils=Xt,i.addReporter("na",(function(e,t,n){console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'),"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=H(r,E)
n(G({},Md(a),{toolOptions:o},Nd(e,t)))})),i.addReporter("no-passes",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=H(r,C)
t.resultTypes=["violations"]
var i=Nd(e,t).violations
n(G({},Md(a),{toolOptions:o,violations:i}))})),i.addReporter("rawEnv",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=H(r,A)
Ym(e,o,(function(e){var t=Md(a)
n({raw:e,env:t})}))})),i.addReporter("raw",Ym),i.addReporter("v1",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=H(r,k),i=Nd(e,t),u=function(e){e.nodes.forEach((function(e){e.failureSummary=Ad(e)}))}
i.incomplete.forEach(u),i.violations.forEach(u),n(G({},Md(a),{toolOptions:o},i))})),i.addReporter("v2",(function(e,t,n){"function"==typeof t&&(n=t,t={})
var r=t,a=r.environmentData,o=H(r,T),i=Nd(e,t)
n(G({},Md(a),{toolOptions:o},i))}),!0)}(),i._load({lang:"en",data:{rules:{accesskeys:{description:"Ensures every accesskey attribute value is unique",help:"accesskey attribute value should be unique"},"area-alt":{description:"Ensures <area> elements of image maps have alternate text",help:"Active <area> elements must have alternate text"},"aria-allowed-attr":{description:"Ensures ARIA attributes are allowed for an element's role",help:"Elements must only use allowed ARIA attributes"},"aria-allowed-role":{description:"Ensures role attribute has an appropriate value for the element",help:"ARIA role should be appropriate for the element"},"aria-command-name":{description:"Ensures every ARIA button, link and menuitem has an accessible name",help:"ARIA commands must have an accessible name"},"aria-dialog-name":{description:"Ensures every ARIA dialog and alertdialog node has an accessible name",help:"ARIA dialog and alertdialog nodes should have an accessible name"},"aria-hidden-body":{description:"Ensures aria-hidden='true' is not present on the document body.",help:"aria-hidden='true' must not be present on the document body"},"aria-hidden-focus":{description:"Ensures aria-hidden elements are not focusable nor contain focusable elements",help:"ARIA hidden element must not be focusable or contain focusable elements"},"aria-input-field-name":{description:"Ensures every ARIA input field has an accessible name",help:"ARIA input fields must have an accessible name"},"aria-meter-name":{description:"Ensures every ARIA meter node has an accessible name",help:"ARIA meter nodes must have an accessible name"},"aria-progressbar-name":{description:"Ensures every ARIA progressbar node has an accessible name",help:"ARIA progressbar nodes must have an accessible name"},"aria-required-attr":{description:"Ensures elements with ARIA roles have all required ARIA attributes",help:"Required ARIA attributes must be provided"},"aria-required-children":{description:"Ensures elements with an ARIA role that require child roles contain them",help:"Certain ARIA roles must contain particular children"},"aria-required-parent":{description:"Ensures elements with an ARIA role that require parent roles are contained by them",help:"Certain ARIA roles must be contained by particular parents"},"aria-roledescription":{description:"Ensure aria-roledescription is only used on elements with an implicit or explicit role",help:"aria-roledescription must be on elements with a semantic role"},"aria-roles":{description:"Ensures all elements with a role attribute use a valid value",help:"ARIA roles used must conform to valid values"},"aria-text":{description:'Ensures "role=text" is used on elements with no focusable descendants',help:'"role=text" should have no focusable descendants'},"aria-toggle-field-name":{description:"Ensures every ARIA toggle field has an accessible name",help:"ARIA toggle fields must have an accessible name"},"aria-tooltip-name":{description:"Ensures every ARIA tooltip node has an accessible name",help:"ARIA tooltip nodes must have an accessible name"},"aria-treeitem-name":{description:"Ensures every ARIA treeitem node has an accessible name",help:"ARIA treeitem nodes should have an accessible name"},"aria-valid-attr-value":{description:"Ensures all ARIA attributes have valid values",help:"ARIA attributes must conform to valid values"},"aria-valid-attr":{description:"Ensures attributes that begin with aria- are valid ARIA attributes",help:"ARIA attributes must conform to valid names"},"audio-caption":{description:"Ensures <audio> elements have captions",help:"<audio> elements must have a captions track"},"autocomplete-valid":{description:"Ensure the autocomplete attribute is correct and suitable for the form field",help:"autocomplete attribute must be used correctly"},"avoid-inline-spacing":{description:"Ensure that text spacing set through style attributes can be adjusted with custom stylesheets",help:"Inline text spacing must be adjustable with custom stylesheets"},blink:{description:"Ensures <blink> elements are not used",help:"<blink> elements are deprecated and must not be used"},"button-name":{description:"Ensures buttons have discernible text",help:"Buttons must have discernible text"},bypass:{description:"Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",help:"Page must have means to bypass repeated blocks"},"color-contrast-enhanced":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds",help:"Elements must meet enhanced color contrast ratio thresholds"},"color-contrast":{description:"Ensures the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",help:"Elements must meet minimum color contrast ratio thresholds"},"css-orientation-lock":{description:"Ensures content is not locked to any specific display orientation, and the content is operable in all display orientations",help:"CSS Media queries must not lock display orientation"},"definition-list":{description:"Ensures <dl> elements are structured correctly",help:"<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements"},dlitem:{description:"Ensures <dt> and <dd> elements are contained by a <dl>",help:"<dt> and <dd> elements must be contained by a <dl>"},"document-title":{description:"Ensures each HTML document contains a non-empty <title> element",help:"Documents must have <title> element to aid in navigation"},"duplicate-id-active":{description:"Ensures every id attribute value of active elements is unique",help:"IDs of active elements must be unique"},"duplicate-id-aria":{description:"Ensures every id attribute value used in ARIA and in labels is unique",help:"IDs used in ARIA and labels must be unique"},"duplicate-id":{description:"Ensures every id attribute value is unique",help:"id attribute value must be unique"},"empty-heading":{description:"Ensures headings have discernible text",help:"Headings should not be empty"},"empty-table-header":{description:"Ensures table headers have discernible text",help:"Table header text should not be empty"},"focus-order-semantics":{description:"Ensures elements in the focus order have a role appropriate for interactive content",help:"Elements in the focus order should have an appropriate role"},"form-field-multiple-labels":{description:"Ensures form field does not have multiple label elements",help:"Form field must not have multiple label elements"},"frame-focusable-content":{description:"Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1",help:"Frames with focusable content must not have tabindex=-1"},"frame-tested":{description:"Ensures <iframe> and <frame> elements contain the axe-core script",help:"Frames should be tested with axe-core"},"frame-title-unique":{description:"Ensures <iframe> and <frame> elements contain a unique title attribute",help:"Frames must have a unique title attribute"},"frame-title":{description:"Ensures <iframe> and <frame> elements have an accessible name",help:"Frames must have an accessible name"},"heading-order":{description:"Ensures the order of headings is semantically correct",help:"Heading levels should only increase by one"},"hidden-content":{description:"Informs users about hidden content.",help:"Hidden content on the page should be analyzed"},"html-has-lang":{description:"Ensures every HTML document has a lang attribute",help:"<html> element must have a lang attribute"},"html-lang-valid":{description:"Ensures the lang attribute of the <html> element has a valid value",help:"<html> element must have a valid value for the lang attribute"},"html-xml-lang-mismatch":{description:"Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",help:"HTML elements with lang and xml:lang must have the same base language"},"identical-links-same-purpose":{description:"Ensure that links with the same accessible name serve a similar purpose",help:"Links with the same name must have a similar purpose"},"image-alt":{description:"Ensures <img> elements have alternate text or a role of none or presentation",help:"Images must have alternate text"},"image-redundant-alt":{description:"Ensure image alternative is not repeated as text",help:"Alternative text of images should not be repeated as text"},"input-button-name":{description:"Ensures input buttons have discernible text",help:"Input buttons must have discernible text"},"input-image-alt":{description:'Ensures <input type="image"> elements have alternate text',help:"Image buttons must have alternate text"},"label-content-name-mismatch":{description:"Ensures that elements labelled through their content must have their visible text as part of their accessible name",help:"Elements must have their visible text as part of their accessible name"},"label-title-only":{description:"Ensures that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes",help:"Form elements should have a visible label"},label:{description:"Ensures every form element has a label",help:"Form elements must have labels"},"landmark-banner-is-top-level":{description:"Ensures the banner landmark is at top level",help:"Banner landmark should not be contained in another landmark"},"landmark-complementary-is-top-level":{description:"Ensures the complementary landmark or aside is at top level",help:"Aside should not be contained in another landmark"},"landmark-contentinfo-is-top-level":{description:"Ensures the contentinfo landmark is at top level",help:"Contentinfo landmark should not be contained in another landmark"},"landmark-main-is-top-level":{description:"Ensures the main landmark is at top level",help:"Main landmark should not be contained in another landmark"},"landmark-no-duplicate-banner":{description:"Ensures the document has at most one banner landmark",help:"Document should not have more than one banner landmark"},"landmark-no-duplicate-contentinfo":{description:"Ensures the document has at most one contentinfo landmark",help:"Document should not have more than one contentinfo landmark"},"landmark-no-duplicate-main":{description:"Ensures the document has at most one main landmark",help:"Document should not have more than one main landmark"},"landmark-one-main":{description:"Ensures the document has a main landmark",help:"Document should have one main landmark"},"landmark-unique":{help:"Ensures landmarks are unique",description:"Landmarks should have a unique role or role/label/title (i.e. accessible name) combination"},"link-in-text-block":{description:"Ensure links are distinguished from surrounding text in a way that does not rely on color",help:"Links must be distinguishable without relying on color"},"link-name":{description:"Ensures links have discernible text",help:"Links must have discernible text"},list:{description:"Ensures that lists are structured correctly",help:"<ul> and <ol> must only directly contain <li>, <script> or <template> elements"},listitem:{description:"Ensures <li> elements are used semantically",help:"<li> elements must be contained in a <ul> or <ol>"},marquee:{description:"Ensures <marquee> elements are not used",help:"<marquee> elements are deprecated and must not be used"},"meta-refresh-no-exceptions":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh must not be used"},"meta-refresh":{description:'Ensures <meta http-equiv="refresh"> is not used for delayed refresh',help:"Delayed refresh under 20 hours must not be used"},"meta-viewport-large":{description:'Ensures <meta name="viewport"> can scale a significant amount',help:"Users should be able to zoom and scale the text up to 500%"},"meta-viewport":{description:'Ensures <meta name="viewport"> does not disable text scaling and zooming',help:"Zooming and scaling must not be disabled"},"nested-interactive":{description:"Ensures interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies",help:"Interactive controls must not be nested"},"no-autoplay-audio":{description:"Ensures <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio",help:"<video> or <audio> elements must not play automatically"},"object-alt":{description:"Ensures <object> elements have alternate text",help:"<object> elements must have alternate text"},"p-as-heading":{description:"Ensure bold, italic text and font-size is not used to style <p> elements as a heading",help:"Styled <p> elements must not be used as headings"},"page-has-heading-one":{description:"Ensure that the page, or at least one of its frames contains a level-one heading",help:"Page should contain a level-one heading"},"presentation-role-conflict":{description:"Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them",help:"Ensure elements marked as presentational are consistently ignored"},region:{description:"Ensures all page content is contained by landmarks",help:"All page content should be contained by landmarks"},"role-img-alt":{description:"Ensures [role='img'] elements have alternate text",help:"[role='img'] elements must have an alternative text"},"scope-attr-valid":{description:"Ensures the scope attribute is used correctly on tables",help:"scope attribute should be used correctly"},"scrollable-region-focusable":{description:"Ensure elements that have scrollable content are accessible by keyboard",help:"Scrollable region must have keyboard access"},"select-name":{description:"Ensures select element has an accessible name",help:"Select element must have an accessible name"},"server-side-image-map":{description:"Ensures that server-side image maps are not used",help:"Server-side image maps must not be used"},"skip-link":{description:"Ensure all skip links have a focusable target",help:"The skip-link target should exist and be focusable"},"svg-img-alt":{description:"Ensures <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text",help:"<svg> elements with an img role must have an alternative text"},tabindex:{description:"Ensures tabindex attribute values are not greater than 0",help:"Elements should not have tabindex greater than zero"},"table-duplicate-name":{description:"Ensure the <caption> element does not contain the same text as the summary attribute",help:"tables should not have the same summary and caption"},"table-fake-caption":{description:"Ensure that tables with a caption use the <caption> element.",help:"Data or header cells must not be used to give caption to a data table."},"target-size":{description:"Ensure touch target have sufficient size and space",help:"All touch targets must be 24px large, or leave sufficient space"},"td-has-header":{description:"Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers",help:"Non-empty <td> elements in larger <table> must have an associated table header"},"td-headers-attr":{description:"Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table",help:"Table cells that use the headers attribute must only refer to cells in the same table"},"th-has-data-cells":{description:"Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe",help:"Table headers in a data table must refer to data cells"},"valid-lang":{description:"Ensures lang attributes have valid values",help:"lang attribute must have a valid value"},"video-caption":{description:"Ensures <video> elements have captions",help:"<video> elements must have captions"}},checks:{abstractrole:{impact:"serious",messages:{pass:"Abstract roles are not used",fail:{singular:"Abstract role cannot be directly used: ${data.values}",plural:"Abstract roles cannot be directly used: ${data.values}"}}},"aria-allowed-attr":{impact:"critical",messages:{pass:"ARIA attributes are used correctly for the defined role",fail:{singular:"ARIA attribute is not allowed: ${data.values}",plural:"ARIA attributes are not allowed: ${data.values}"},incomplete:"Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}"}},"aria-allowed-role":{impact:"minor",messages:{pass:"ARIA role is allowed for given element",fail:{singular:"ARIA role ${data.values} is not allowed for given element",plural:"ARIA roles ${data.values} are not allowed for given element"},incomplete:{singular:"ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element",plural:"ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element"}}},"aria-busy":{impact:"serious",messages:{pass:"Element has an aria-busy attribute",fail:'Element uses aria-busy="true" while showing a loader'}},"aria-conditional-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{checkbox:'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state',rowSingular:"This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}",rowPlural:"These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}"}}},"aria-errormessage":{impact:"critical",messages:{pass:"aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique",fail:{singular:"aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",plural:"aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)",hidden:"aria-errormessage value `${data.values}` cannot reference a hidden element"},incomplete:{singular:"ensure aria-errormessage value `${data.values}` references an existing element",plural:"ensure aria-errormessage values `${data.values}` reference existing elements",idrefs:"unable to determine if aria-errormessage element exists on the page: ${data.values}"}}},"aria-hidden-body":{impact:"critical",messages:{pass:"No aria-hidden attribute is present on document body",fail:"aria-hidden=true should not be present on the document body"}},"aria-level":{impact:"serious",messages:{pass:"aria-level values are valid",incomplete:"aria-level values greater than 6 are not supported in all screenreader and browser combinations"}},"aria-prohibited-attr":{impact:"serious",messages:{pass:"ARIA attribute is allowed",fail:{hasRolePlural:'${data.prohibited} attributes cannot be used with role "${data.role}".',hasRoleSingular:'${data.prohibited} attribute cannot be used with role "${data.role}".',noRolePlural:"${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.",noRoleSingular:"${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute."},incomplete:{hasRoleSingular:'${data.prohibited} attribute is not well supported with role "${data.role}".',hasRolePlural:'${data.prohibited} attributes are not well supported with role "${data.role}".',noRoleSingular:"${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.",noRolePlural:"${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute."}}},"aria-required-attr":{impact:"critical",messages:{pass:"All required ARIA attributes are present",fail:{singular:"Required ARIA attribute not present: ${data.values}",plural:"Required ARIA attributes not present: ${data.values}"}}},"aria-required-children":{impact:"critical",messages:{pass:"Required ARIA children are present",fail:{singular:"Required ARIA child role not present: ${data.values}",plural:"Required ARIA children role not present: ${data.values}",unallowed:"Element has children which are not allowed: ${data.values}"},incomplete:{singular:"Expecting ARIA child role to be added: ${data.values}",plural:"Expecting ARIA children role to be added: ${data.values}"}}},"aria-required-parent":{impact:"critical",messages:{pass:"Required ARIA parent role present",fail:{singular:"Required ARIA parent role not present: ${data.values}",plural:"Required ARIA parents role not present: ${data.values}"}}},"aria-roledescription":{impact:"serious",messages:{pass:"aria-roledescription used on a supported semantic role",incomplete:"Check that the aria-roledescription is announced by supported screen readers",fail:"Give the element a role that supports aria-roledescription"}},"aria-unsupported-attr":{impact:"critical",messages:{pass:"ARIA attribute is supported",fail:"ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}"}},"aria-valid-attr-value":{impact:"critical",messages:{pass:"ARIA attribute values are valid",fail:{singular:"Invalid ARIA attribute value: ${data.values}",plural:"Invalid ARIA attribute values: ${data.values}"},incomplete:{noId:"ARIA attribute element ID does not exist on the page: ${data.needsReview}",noIdShadow:"ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}",ariaCurrent:'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}',idrefs:"Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}",empty:"ARIA attribute value is ignored while empty: ${data.needsReview}"}}},"aria-valid-attr":{impact:"critical",messages:{pass:"ARIA attribute name is valid",fail:{singular:"Invalid ARIA attribute name: ${data.values}",plural:"Invalid ARIA attribute names: ${data.values}"}}},deprecatedrole:{impact:"minor",messages:{pass:"ARIA role is not deprecated",fail:"The role used is deprecated: ${data}"}},fallbackrole:{impact:"serious",messages:{pass:"Only one role value used",fail:"Use only one role value, since fallback roles are not supported in older browsers",incomplete:"Use only role 'presentation' or 'none' since they are synonymous."}},"has-global-aria-attribute":{impact:"minor",messages:{pass:{singular:"Element has global ARIA attribute: ${data.values}",plural:"Element has global ARIA attributes: ${data.values}"},fail:"Element does not have global ARIA attribute"}},"has-widget-role":{impact:"minor",messages:{pass:"Element has a widget role.",fail:"Element does not have a widget role."}},invalidrole:{impact:"critical",messages:{pass:"ARIA role is valid",fail:{singular:"Role must be one of the valid ARIA roles: ${data.values}",plural:"Roles must be one of the valid ARIA roles: ${data.values}"}}},"is-element-focusable":{impact:"minor",messages:{pass:"Element is focusable.",fail:"Element is not focusable."}},"no-implicit-explicit-label":{impact:"moderate",messages:{pass:"There is no mismatch between a <label> and accessible name",incomplete:"Check that the <label> does not need be part of the ARIA ${data} field's name"}},unsupportedrole:{impact:"critical",messages:{pass:"ARIA role is supported",fail:"The role used is not widely supported in screen readers and assistive technologies: ${data}"}},"valid-scrollable-semantics":{impact:"minor",messages:{pass:"Element has valid semantics for an element in the focus order.",fail:"Element has invalid semantics for an element in the focus order."}},"color-contrast-enhanced":{impact:"serious",messages:{pass:"Element has sufficient color contrast of ${data.contrastRatio}",fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"color-contrast":{impact:"serious",messages:{pass:{default:"Element has sufficient color contrast of ${data.contrastRatio}",hidden:"Element is hidden"},fail:{default:"Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",fgOnShadowColor:"Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}",shadowOnBgColor:"Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}"},incomplete:{default:"Unable to determine contrast ratio",bgImage:"Element's background color could not be determined due to a background image",bgGradient:"Element's background color could not be determined due to a background gradient",imgNode:"Element's background color could not be determined because element contains an image node",bgOverlap:"Element's background color could not be determined because it is overlapped by another element",fgAlpha:"Element's foreground color could not be determined because of alpha transparency",elmPartiallyObscured:"Element's background color could not be determined because it's partially obscured by another element",elmPartiallyObscuring:"Element's background color could not be determined because it partially overlaps other elements",outsideViewport:"Element's background color could not be determined because it's outside the viewport",equalRatio:"Element has a 1:1 contrast ratio with the background",shortTextContent:"Element content is too short to determine if it is actual text content",nonBmp:"Element content contains only non-text characters",pseudoContent:"Element's background color could not be determined due to a pseudo element"}}},"link-in-text-block-style":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text by visual styling",incomplete:{default:"Check if the link needs styling to distinguish it from nearby text",pseudoContent:"Check if the link's pseudo style is sufficient to distinguish it from the surrounding text"},fail:"The link has no styling (such as underline) to distinguish it from the surrounding text"}},"link-in-text-block":{impact:"serious",messages:{pass:"Links can be distinguished from surrounding text in some way other than by color",fail:{fgContrast:"The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})",bgContrast:"The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})"},incomplete:{default:"Element's foreground contrast ratio could not be determined",bgContrast:"Element's background contrast ratio could not be determined",bgImage:"Element's contrast ratio could not be determined due to a background image",bgGradient:"Element's contrast ratio could not be determined due to a background gradient",imgNode:"Element's contrast ratio could not be determined because element contains an image node",bgOverlap:"Element's contrast ratio could not be determined because of element overlap"}}},"autocomplete-appropriate":{impact:"serious",messages:{pass:"the autocomplete value is on an appropriate element",fail:"the autocomplete value is inappropriate for this type of input"}},"autocomplete-valid":{impact:"serious",messages:{pass:"the autocomplete attribute is correctly formatted",fail:"the autocomplete attribute is incorrectly formatted"}},accesskeys:{impact:"serious",messages:{pass:"Accesskey attribute value is unique",fail:"Document has multiple elements with the same accesskey"}},"focusable-content":{impact:"serious",messages:{pass:"Element contains focusable elements",fail:"Element should have focusable content"}},"focusable-disabled":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should be disabled or be removed from the DOM"}},"focusable-element":{impact:"serious",messages:{pass:"Element is focusable",fail:"Element should be focusable"}},"focusable-modal-open":{impact:"serious",messages:{pass:"No focusable elements while a modal is open",incomplete:"Check that focusable elements are not tabbable in the current state"}},"focusable-no-name":{impact:"serious",messages:{pass:"Element is not in tab order or has accessible text",fail:"Element is in tab order and does not have accessible text",incomplete:"Unable to determine if element has an accessible name"}},"focusable-not-tabbable":{impact:"serious",messages:{pass:"No focusable elements contained within element",incomplete:"Check if the focusable elements immediately move the focus indicator",fail:"Focusable content should have tabindex='-1' or be removed from the DOM"}},"frame-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:"Element has focusable descendants",incomplete:"Could not determine if element has descendants"}},"landmark-is-top-level":{impact:"moderate",messages:{pass:"The ${data.role} landmark is at the top level.",fail:"The ${data.role} landmark is contained in another landmark."}},"no-focusable-content":{impact:"serious",messages:{pass:"Element does not have focusable descendants",fail:{default:"Element has focusable descendants",notHidden:"Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with 'aria-hidden=true')"},incomplete:"Could not determine if element has descendants"}},"page-has-heading-one":{impact:"moderate",messages:{pass:"Page has at least one level-one heading",fail:"Page must have a level-one heading"}},"page-has-main":{impact:"moderate",messages:{pass:"Document has at least one main landmark",fail:"Document does not have a main landmark"}},"page-no-duplicate-banner":{impact:"moderate",messages:{pass:"Document does not have more than one banner landmark",fail:"Document has more than one banner landmark"}},"page-no-duplicate-contentinfo":{impact:"moderate",messages:{pass:"Document does not have more than one contentinfo landmark",fail:"Document has more than one contentinfo landmark"}},"page-no-duplicate-main":{impact:"moderate",messages:{pass:"Document does not have more than one main landmark",fail:"Document has more than one main landmark"}},tabindex:{impact:"serious",messages:{pass:"Element does not have a tabindex greater than 0",fail:"Element has a tabindex greater than 0"}},"alt-space-value":{impact:"critical",messages:{pass:"Element has a valid alt attribute value",fail:"Element has an alt attribute containing only a space character, which is not ignored by all screen readers"}},"duplicate-img-label":{impact:"minor",messages:{pass:"Element does not duplicate existing text in <img> alt text",fail:"Element contains <img> element with alt text that duplicates existing text"}},"explicit-label":{impact:"critical",messages:{pass:"Form element has an explicit <label>",fail:"Form element does not have an explicit <label>",incomplete:"Unable to determine if form element has an explicit <label>"}},"help-same-as-label":{impact:"minor",messages:{pass:"Help text (title or aria-describedby) does not duplicate label text",fail:"Help text (title or aria-describedby) text is the same as the label text"}},"hidden-explicit-label":{impact:"critical",messages:{pass:"Form element has a visible explicit <label>",fail:"Form element has explicit <label> that is hidden",incomplete:"Unable to determine if form element has explicit <label> that is hidden"}},"implicit-label":{impact:"critical",messages:{pass:"Form element has an implicit (wrapped) <label>",fail:"Form element does not have an implicit (wrapped) <label>",incomplete:"Unable to determine if form element has an implicit (wrapped} <label>"}},"label-content-name-mismatch":{impact:"serious",messages:{pass:"Element contains visible text as part of it's accessible name",fail:"Text inside the element is not included in the accessible name"}},"multiple-label":{impact:"moderate",messages:{pass:"Form field does not have multiple label elements",incomplete:"Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information."}},"title-only":{impact:"serious",messages:{pass:"Form element does not solely use title attribute for its label",fail:"Only title used to generate label for form element"}},"landmark-is-unique":{impact:"moderate",messages:{pass:"Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",fail:"The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable"}},"has-lang":{impact:"serious",messages:{pass:"The <html> element has a lang attribute",fail:{noXHTML:"The xml:lang attribute is not valid on HTML pages, use the lang attribute.",noLang:"The <html> element does not have a lang attribute"}}},"valid-lang":{impact:"serious",messages:{pass:"Value of lang attribute is included in the list of valid languages",fail:"Value of lang attribute not included in the list of valid languages"}},"xml-lang-mismatch":{impact:"moderate",messages:{pass:"Lang and xml:lang attributes have the same base language",fail:"Lang and xml:lang attributes do not have the same base language"}},dlitem:{impact:"serious",messages:{pass:"Description list item has a <dl> parent element",fail:"Description list item does not have a <dl> parent element"}},listitem:{impact:"serious",messages:{pass:'List item has a <ul>, <ol> or role="list" parent element',fail:{default:"List item does not have a <ul>, <ol> parent element",roleNotValid:'List item does not have a <ul>, <ol> parent element without a role, or a role="list"'}}},"only-dlitems":{impact:"serious",messages:{pass:"dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements",fail:"dl element has direct children that are not allowed: ${data.values}"}},"only-listitems":{impact:"serious",messages:{pass:"List element only has direct children that are allowed inside <li> elements",fail:"List element has direct children that are not allowed: ${data.values}"}},"structured-dlitems":{impact:"serious",messages:{pass:"When not empty, element has both <dt> and <dd> elements",fail:"When not empty, element does not have at least one <dt> element followed by at least one <dd> element"}},caption:{impact:"critical",messages:{pass:"The multimedia element has a captions track",incomplete:"Check that captions is available for the element"}},"frame-tested":{impact:"critical",messages:{pass:"The iframe was tested with axe-core",fail:"The iframe could not be tested with axe-core",incomplete:"The iframe still has to be tested with axe-core"}},"no-autoplay-audio":{impact:"moderate",messages:{pass:"<video> or <audio> does not output audio for more than allowed duration or has controls mechanism",fail:"<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism",incomplete:"Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism"}},"css-orientation-lock":{impact:"serious",messages:{pass:"Display is operable, and orientation lock does not exist",fail:"CSS Orientation lock is applied, and makes display inoperable",incomplete:"CSS Orientation lock cannot be determined"}},"meta-viewport-large":{impact:"minor",messages:{pass:"<meta> tag does not prevent significant zooming on mobile devices",fail:"<meta> tag limits zooming on mobile devices"}},"meta-viewport":{impact:"critical",messages:{pass:"<meta> tag does not disable zooming on mobile devices",fail:"${data} on <meta> tag disables zooming on mobile devices"}},"target-offset":{impact:"serious",messages:{pass:"Target has sufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",fail:"Target has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px)",incomplete:{default:"Element with negative tabindex has insufficient offset from its closest neighbor (${data.closestOffset}px should be at least ${data.minOffset}px). Is this a target?",nonTabbableNeighbor:"Target has insufficient offset from a neighbor with negative tabindex (${data.closestOffset}px should be at least ${data.minOffset}px). Is the neighbor a target?"}}},"target-size":{impact:"serious",messages:{pass:{default:"Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",obscured:"Control is ignored because it is fully obscured and thus not clickable"},fail:{default:"Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)",partiallyObscured:"Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)"},incomplete:{default:"Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",contentOverflow:"Element size could not be accurately determined due to overflow content",partiallyObscured:"Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?",partiallyObscuredNonTabbable:"Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?"}}},"header-present":{impact:"serious",messages:{pass:"Page has a heading",fail:"Page does not have a heading"}},"heading-order":{impact:"moderate",messages:{pass:"Heading order valid",fail:"Heading order invalid",incomplete:"Unable to determine previous heading"}},"identical-links-same-purpose":{impact:"minor",messages:{pass:"There are no other links with the same name, that go to a different URL",incomplete:"Check that links have the same purpose, or are intentionally ambiguous."}},"internal-link-present":{impact:"serious",messages:{pass:"Valid skip link found",fail:"No valid skip link found"}},landmark:{impact:"serious",messages:{pass:"Page has a landmark region",fail:"Page does not have a landmark region"}},"meta-refresh-no-exceptions":{impact:"minor",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page"}},"meta-refresh":{impact:"critical",messages:{pass:"<meta> tag does not immediately refresh the page",fail:"<meta> tag forces timed refresh of page (less than 20 hours)"}},"p-as-heading":{impact:"serious",messages:{pass:"<p> elements are not styled as headings",fail:"Heading elements should be used instead of styled <p> elements",incomplete:"Unable to determine if <p> elements are styled as headings"}},region:{impact:"moderate",messages:{pass:"All page content is contained by landmarks",fail:"Some page content is not contained by landmarks"}},"skip-link":{impact:"moderate",messages:{pass:"Skip link target exists",incomplete:"Skip link target should become visible on activation",fail:"No skip link target"}},"unique-frame-title":{impact:"serious",messages:{pass:"Element's title attribute is unique",fail:"Element's title attribute is not unique"}},"duplicate-id-active":{impact:"serious",messages:{pass:"Document has no active elements that share the same id attribute",fail:"Document has active elements with the same id attribute: ${data}"}},"duplicate-id-aria":{impact:"critical",messages:{pass:"Document has no elements referenced with ARIA or labels that share the same id attribute",fail:"Document has multiple elements referenced with ARIA with the same id attribute: ${data}"}},"duplicate-id":{impact:"minor",messages:{pass:"Document has no static elements that share the same id attribute",fail:"Document has multiple static elements with the same id attribute: ${data}"}},"aria-label":{impact:"serious",messages:{pass:"aria-label attribute exists and is not empty",fail:"aria-label attribute does not exist or is empty"}},"aria-labelledby":{impact:"serious",messages:{pass:"aria-labelledby attribute exists and references elements that are visible to screen readers",fail:"aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",incomplete:"ensure aria-labelledby references an existing element"}},"avoid-inline-spacing":{impact:"serious",messages:{pass:"No inline styles with '!important' that affect text spacing has been specified",fail:{singular:"Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers",plural:"Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers"}}},"button-has-visible-text":{impact:"critical",messages:{pass:"Element has inner text that is visible to screen readers",fail:"Element does not have inner text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"doc-has-title":{impact:"serious",messages:{pass:"Document has a non-empty <title> element",fail:"Document does not have a non-empty <title> element"}},exists:{impact:"minor",messages:{pass:"Element does not exist",incomplete:"Element exists"}},"has-alt":{impact:"critical",messages:{pass:"Element has an alt attribute",fail:"Element does not have an alt attribute"}},"has-visible-text":{impact:"minor",messages:{pass:"Element has text that is visible to screen readers",fail:"Element does not have text that is visible to screen readers",incomplete:"Unable to determine if element has children"}},"important-letter-spacing":{impact:"serious",messages:{pass:"Letter-spacing in the style attribute is not set to !important, or meets the minimum",fail:"letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-line-height":{impact:"serious",messages:{pass:"line-height in the style attribute is not set to !important, or meets the minimum",fail:"line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"important-word-spacing":{impact:"serious",messages:{pass:"word-spacing in the style attribute is not set to !important, or meets the minimum",fail:"word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)"}},"is-on-screen":{impact:"serious",messages:{pass:"Element is not visible",fail:"Element is visible"}},"non-empty-alt":{impact:"critical",messages:{pass:"Element has a non-empty alt attribute",fail:{noAttr:"Element has no alt attribute",emptyAttr:"Element has an empty alt attribute"}}},"non-empty-if-present":{impact:"critical",messages:{pass:{default:"Element does not have a value attribute","has-label":"Element has a non-empty value attribute"},fail:"Element has a value attribute and the value attribute is empty"}},"non-empty-placeholder":{impact:"serious",messages:{pass:"Element has a placeholder attribute",fail:{noAttr:"Element has no placeholder attribute",emptyAttr:"Element has an empty placeholder attribute"}}},"non-empty-title":{impact:"serious",messages:{pass:"Element has a title attribute",fail:{noAttr:"Element has no title attribute",emptyAttr:"Element has an empty title attribute"}}},"non-empty-value":{impact:"critical",messages:{pass:"Element has a non-empty value attribute",fail:{noAttr:"Element has no value attribute",emptyAttr:"Element has an empty value attribute"}}},"presentational-role":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="${data.role}"',fail:{default:'Element\'s default semantics were not overridden with role="none" or role="presentation"',globalAria:"Element's role is not presentational because it has a global ARIA attribute",focusable:"Element's role is not presentational because it is focusable",both:"Element's role is not presentational because it has a global ARIA attribute and is focusable",iframe:'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers'}}},"role-none":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="none"',fail:'Element\'s default semantics were not overridden with role="none"'}},"role-presentation":{impact:"minor",messages:{pass:'Element\'s default semantics were overriden with role="presentation"',fail:'Element\'s default semantics were not overridden with role="presentation"'}},"svg-non-empty-title":{impact:"serious",messages:{pass:"Element has a child that is a title",fail:{noTitle:"Element has no child that is a title",emptyTitle:"Element child title is empty"},incomplete:"Unable to determine element has a child that is a title"}},"caption-faked":{impact:"serious",messages:{pass:"The first row of a table is not used as a caption",fail:"The first child of the table should be a caption instead of a table cell"}},"html5-scope":{impact:"moderate",messages:{pass:"Scope attribute is only used on table header elements (<th>)",fail:"In HTML 5, scope attributes may only be used on table header elements (<th>)"}},"same-caption-summary":{impact:"minor",messages:{pass:"Content of summary attribute and <caption> are not duplicated",fail:"Content of summary attribute and <caption> element are identical",incomplete:"Unable to determine if <table> element has a caption"}},"scope-value":{impact:"critical",messages:{pass:"Scope attribute is used correctly",fail:"The value of the scope attribute may only be 'row' or 'col'"}},"td-has-header":{impact:"critical",messages:{pass:"All non-empty data cells have table headers",fail:"Some non-empty data cells do not have table headers"}},"td-headers-attr":{impact:"serious",messages:{pass:"The headers attribute is exclusively used to refer to other cells in the table",incomplete:"The headers attribute is empty",fail:"The headers attribute is not exclusively used to refer to other cells in the table"}},"th-has-data-cells":{impact:"serious",messages:{pass:"All table header cells refer to data cells",fail:"Not all table header cells refer to data cells",incomplete:"Table data cells are missing or empty"}},"hidden-content":{impact:"minor",messages:{pass:"All content on the page has been analyzed.",fail:"There were problems analyzing the content on this page.",incomplete:"There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it."}}},failureSummaries:{any:{failureMessage:function(e){var t="Fix any of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}},none:{failureMessage:function(e){var t="Fix all of the following:",n=e
if(n)for(var r=-1,a=n.length-1;r<a;)t+="\n  "+n[r+=1].split("\n").join("\n  ")
return t}}},incompleteFallbackMessage:"axe couldn't tell the reason. Time to break out the element inspector!"},rules:[{id:"accesskeys",selector:"[accesskey]",excludeHidden:!1,tags:["cat.keyboard","best-practice"],all:[],any:[],none:["accesskeys"]},{id:"area-alt",selector:"map area[href]",excludeHidden:!1,tags:["cat.text-alternatives","wcag2a","wcag244","wcag412","section508","section508.22.a","ACT","TTv5","TT6.a"],actIds:["c487ae"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-allowed-attr",matches:"aria-allowed-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5c01ea"],all:[{options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-allowed-attr"},{options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]},id:"aria-conditional-attr"}],any:[],none:["aria-unsupported-attr",{options:{elementsAllowedAriaLabel:["applet","input"]},id:"aria-prohibited-attr"}]},{id:"aria-allowed-role",excludeHidden:!1,selector:"[role]",matches:"aria-allowed-role-matches",tags:["cat.aria","best-practice"],all:[],any:[{options:{allowImplicit:!0,ignoredTags:[]},id:"aria-allowed-role"}],none:[]},{id:"aria-command-name",selector:'[role="link"], [role="button"], [role="menuitem"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT","TTv5","TT6.a"],actIds:["97a4e1"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-dialog-name",selector:'[role="dialog"], [role="alertdialog"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-hidden-body",selector:"body",excludeHidden:!1,matches:"is-initiator-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["aria-hidden-body"],none:[]},{id:"aria-hidden-focus",selector:'[aria-hidden="true"]',matches:"aria-hidden-focus-matches",excludeHidden:!1,tags:["cat.name-role-value","wcag2a","wcag412","TTv5","TT6.a"],actIds:["6cfa84"],all:["focusable-modal-open","focusable-disabled","focusable-not-tabbable"],any:[],none:[]},{id:"aria-input-field-name",selector:'[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT","TTv5","TT5.c"],actIds:["e086e5"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-meter-name",selector:'[role="meter"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-progressbar-name",selector:'[role="progressbar"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag111"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-required-attr",selector:"[role]",tags:["cat.aria","wcag2a","wcag412"],actIds:["4e8ab6"],all:[],any:["aria-required-attr"],none:[]},{id:"aria-required-children",selector:"[role]",matches:"aria-required-children-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["bc4a75","ff89c9"],all:[],any:[{options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]},id:"aria-required-children"},"aria-busy"],none:[]},{id:"aria-required-parent",selector:"[role]",matches:"aria-required-parent-matches",tags:["cat.aria","wcag2a","wcag131"],actIds:["ff89c9"],all:[],any:[{options:{ownGroupRoles:["listitem","treeitem"]},id:"aria-required-parent"}],none:[]},{id:"aria-roledescription",selector:"[aria-roledescription]",tags:["cat.aria","wcag2a","wcag412","deprecated"],enabled:!1,all:[],any:[{options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]},id:"aria-roledescription"}],none:[]},{id:"aria-roles",selector:"[role]",matches:"no-empty-role-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["674b10"],all:[],any:[],none:["invalidrole","abstractrole","unsupportedrole","deprecatedrole"]},{id:"aria-text",selector:"[role=text]",tags:["cat.aria","best-practice"],all:[],any:["no-focusable-content"],none:[]},{id:"aria-toggle-field-name",selector:'[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412","ACT","TTv5","TT5.c"],actIds:["e086e5"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["no-implicit-explicit-label"]},{id:"aria-tooltip-name",selector:'[role="tooltip"]',matches:"no-naming-method-matches",tags:["cat.aria","wcag2a","wcag412"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-treeitem-name",selector:'[role="treeitem"]',matches:"no-naming-method-matches",tags:["cat.aria","best-practice"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"aria-valid-attr-value",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["6a7281"],all:[{options:[],id:"aria-valid-attr-value"},"aria-errormessage","aria-level"],any:[],none:[]},{id:"aria-valid-attr",matches:"aria-has-attr-matches",tags:["cat.aria","wcag2a","wcag412"],actIds:["5f99a7"],all:[],any:[{options:[],id:"aria-valid-attr"}],none:[]},{id:"audio-caption",selector:"audio",enabled:!1,excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag121","section508","section508.22.a","deprecated"],actIds:["2eb176","afb423"],all:[],any:[],none:["caption"]},{id:"autocomplete-valid",matches:"autocomplete-matches",tags:["cat.forms","wcag21aa","wcag135","ACT"],actIds:["73f2c2"],all:[{options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]},id:"autocomplete-valid"}],any:[],none:[]},{id:"avoid-inline-spacing",selector:"[style]",matches:"is-visible-on-screen-matches",tags:["cat.structure","wcag21aa","wcag1412","ACT"],actIds:["24afc2","9e45ec","78fd32"],all:[{options:{cssProperty:"letter-spacing",minValue:.12},id:"important-letter-spacing"},{options:{cssProperty:"word-spacing",minValue:.16},id:"important-word-spacing"},{options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1},id:"important-line-height"}],any:[],none:[]},{id:"blink",selector:"blink",excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag222","section508","section508.22.j","TTv5","TT2.b"],all:[],any:[],none:["is-on-screen"]},{id:"button-name",selector:"button",matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","ACT","TTv5","TT6.a"],actIds:["97a4e1","m6b1q3"],all:[],any:["button-has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"bypass",selector:"html",pageLevel:!0,matches:"bypass-matches",reviewOnFail:!0,tags:["cat.keyboard","wcag2a","wcag241","section508","section508.22.o","TTv5","TT9.a"],actIds:["cf77f2","047fe0","b40fd1","3e12e1","ye5d6e"],all:[],any:["internal-link-present",{options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"},id:"header-present"},{options:{selector:"main, [role=main]"},id:"landmark"}],none:[]},{id:"color-contrast-enhanced",matches:"color-contrast-matches",excludeHidden:!1,enabled:!1,tags:["cat.color","wcag2aaa","wcag146","ACT"],actIds:["09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03},id:"color-contrast-enhanced"}],none:[]},{id:"color-contrast",matches:"color-contrast-matches",excludeHidden:!1,tags:["cat.color","wcag2aa","wcag143","ACT","TTv5","TT13.c"],actIds:["afw4f7","09o5cg"],all:[],any:[{options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03},id:"color-contrast"}],none:[]},{id:"css-orientation-lock",selector:"html",tags:["cat.structure","wcag134","wcag21aa","experimental"],actIds:["b33eff"],all:[{options:{degreeThreshold:2},id:"css-orientation-lock"}],any:[],none:[],preload:!0},{id:"definition-list",selector:"dl",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:["structured-dlitems",{options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0},id:"only-dlitems"}]},{id:"dlitem",selector:"dd, dt",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["dlitem"],none:[]},{id:"document-title",selector:"html",matches:"is-initiator-matches",tags:["cat.text-alternatives","wcag2a","wcag242","ACT","TTv5","TT12.a"],actIds:["2779a5"],all:[],any:["doc-has-title"],none:[]},{id:"duplicate-id-active",selector:"[id]",matches:"duplicate-id-active-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id-active"],none:[]},{id:"duplicate-id-aria",selector:"[id]",matches:"duplicate-id-aria-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id-aria"],none:[]},{id:"duplicate-id",selector:"[id]",matches:"duplicate-id-misc-matches",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag411"],actIds:["3ea0c8"],all:[],any:["duplicate-id"],none:[]},{id:"empty-heading",selector:'h1, h2, h3, h4, h5, h6, [role="heading"]',matches:"heading-matches",tags:["cat.name-role-value","best-practice"],actIds:["ffd0e9"],impact:"minor",all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"empty-table-header",selector:'th:not([role]), [role="rowheader"], [role="columnheader"]',tags:["cat.name-role-value","best-practice"],all:[],any:["has-visible-text"],none:[]},{id:"focus-order-semantics",selector:"div, h1, h2, h3, h4, h5, h6, [role=heading], p, span",matches:"inserted-into-focus-order-matches",tags:["cat.keyboard","best-practice","experimental"],all:[],any:[{options:[],id:"has-widget-role"},{options:{roles:["tooltip"]},id:"valid-scrollable-semantics"}],none:[]},{id:"form-field-multiple-labels",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag332","TTv5","TT5.c"],all:[],any:[],none:["multiple-label"]},{id:"frame-focusable-content",selector:"html",matches:"frame-focusable-content-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a"],actIds:["akn7bn"],all:[],any:["frame-focusable-content"],none:[]},{id:"frame-tested",selector:"html, frame, iframe",tags:["cat.structure","review-item","best-practice"],all:[{options:{isViolation:!1},id:"frame-tested"}],any:[],none:[]},{id:"frame-title-unique",selector:"frame[title], iframe[title]",matches:"frame-title-has-text-matches",tags:["cat.text-alternatives","wcag412","wcag2a","TTv5","TT12.d"],actIds:["4b1c6c"],all:[],any:[],none:["unique-frame-title"],reviewOnFail:!0},{id:"frame-title",selector:"frame, iframe",matches:"no-negative-tabindex-matches",tags:["cat.text-alternatives","wcag2a","wcag412","section508","section508.22.i","TTv5","TT12.d"],actIds:["cae760"],all:[],any:[{options:{attribute:"title"},id:"non-empty-title"},"aria-label","aria-labelledby","presentational-role"],none:[]},{id:"heading-order",selector:"h1, h2, h3, h4, h5, h6, [role=heading]",matches:"heading-matches",tags:["cat.semantics","best-practice"],all:[],any:["heading-order"],none:[]},{id:"hidden-content",selector:"*",excludeHidden:!1,tags:["cat.structure","experimental","review-item","best-practice"],all:[],any:["hidden-content"],none:[]},{id:"html-has-lang",selector:"html",matches:"is-initiator-matches",tags:["cat.language","wcag2a","wcag311","ACT","TTv5","TT11.a"],actIds:["b5c3f8"],all:[],any:[{options:{attributes:["lang","xml:lang"]},id:"has-lang"}],none:[]},{id:"html-lang-valid",selector:'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])',tags:["cat.language","wcag2a","wcag311","ACT","TTv5","TT11.a"],actIds:["bf051a"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"html-xml-lang-mismatch",selector:"html[lang][xml\\:lang]",matches:"xml-lang-mismatch-matches",tags:["cat.language","wcag2a","wcag311","ACT"],actIds:["5b7ae0"],all:["xml-lang-mismatch"],any:[],none:[]},{id:"identical-links-same-purpose",selector:'a[href], area[href], [role="link"]',excludeHidden:!1,enabled:!1,matches:"identical-links-same-purpose-matches",tags:["cat.semantics","wcag2aaa","wcag249"],actIds:["b20e66"],all:["identical-links-same-purpose"],any:[],none:[]},{id:"image-alt",selector:"img",matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT","TTv5","TT7.a","TT7.b"],actIds:["23a2a8"],all:[],any:["has-alt","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["alt-space-value"]},{id:"image-redundant-alt",selector:"img",tags:["cat.text-alternatives","best-practice"],all:[],any:[],none:[{options:{parentSelector:"button, [role=button], a[href], p, li, td, th"},id:"duplicate-img-label"}]},{id:"input-button-name",selector:'input[type="button"], input[type="submit"], input[type="reset"]',matches:"no-explicit-name-required-matches",tags:["cat.name-role-value","wcag2a","wcag412","section508","section508.22.a","ACT","TTv5","TT5.c"],actIds:["97a4e1"],all:[],any:["non-empty-if-present",{options:{attribute:"value"},id:"non-empty-value"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"input-image-alt",selector:'input[type="image"]',matches:"no-explicit-name-required-matches",tags:["cat.text-alternatives","wcag2a","wcag111","wcag412","section508","section508.22.a","ACT","TTv5","TT7.a"],actIds:["59796f"],all:[],any:[{options:{attribute:"alt"},id:"non-empty-alt"},"aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"label-content-name-mismatch",matches:"label-content-name-mismatch-matches",tags:["cat.semantics","wcag21a","wcag253","experimental"],actIds:["2ee8b8"],all:[],any:[{options:{pixelThreshold:.1,occurrenceThreshold:3},id:"label-content-name-mismatch"}],none:[]},{id:"label-title-only",selector:"input, select, textarea",matches:"label-matches",tags:["cat.forms","best-practice"],all:[],any:[],none:["title-only"]},{id:"label",selector:"input, textarea",matches:"label-matches",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","ACT","TTv5","TT5.c"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},{options:{attribute:"placeholder"},id:"non-empty-placeholder"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"landmark-banner-is-top-level",selector:"header:not([role]), [role=banner]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-complementary-is-top-level",selector:"aside:not([role]), [role=complementary]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-contentinfo-is-top-level",selector:"footer:not([role]), [role=contentinfo]",matches:"landmark-has-body-context-matches",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-main-is-top-level",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:["landmark-is-top-level"],none:[]},{id:"landmark-no-duplicate-banner",selector:"header:not([role]), [role=banner]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-banner"}],none:[]},{id:"landmark-no-duplicate-contentinfo",selector:"footer:not([role]), [role=contentinfo]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"},id:"page-no-duplicate-contentinfo"}],none:[]},{id:"landmark-no-duplicate-main",selector:"main:not([role]), [role=main]",tags:["cat.semantics","best-practice"],all:[],any:[{options:{selector:"main:not([role]), [role='main']"},id:"page-no-duplicate-main"}],none:[]},{id:"landmark-one-main",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"main:not([role]), [role='main']",passForModal:!0},id:"page-has-main"}],any:[],none:[]},{id:"landmark-unique",selector:"[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section",tags:["cat.semantics","best-practice"],matches:"landmark-unique-matches",all:[],any:["landmark-is-unique"],none:[]},{id:"link-in-text-block",selector:"a[href], [role=link]",matches:"link-in-text-block-matches",excludeHidden:!1,tags:["cat.color","wcag2a","wcag141","TTv5","TT13.a"],all:[],any:[{options:{requiredContrastRatio:3,allowSameColor:!0},id:"link-in-text-block"},"link-in-text-block-style"],none:[]},{id:"link-name",selector:"a[href]",tags:["cat.name-role-value","wcag2a","wcag412","wcag244","section508","section508.22.a","ACT","TTv5","TT6.a"],actIds:["c487ae"],all:[],any:["has-visible-text","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:["focusable-no-name"]},{id:"list",selector:"ul, ol",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:[],none:[{options:{validRoles:["listitem"],validNodeNames:["li"]},id:"only-listitems"}]},{id:"listitem",selector:"li",matches:"no-role-matches",tags:["cat.structure","wcag2a","wcag131"],all:[],any:["listitem"],none:[]},{id:"marquee",selector:"marquee",excludeHidden:!1,tags:["cat.parsing","wcag2a","wcag222","TTv5","TT2.b"],all:[],any:[],none:["is-on-screen"]},{id:"meta-refresh-no-exceptions",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,enabled:!1,tags:["cat.time-and-media","wcag2aaa","wcag224","wcag325"],actIds:["bisz58"],all:[],any:[{options:{minDelay:72e3,maxDelay:!1},id:"meta-refresh-no-exceptions"}],none:[]},{id:"meta-refresh",selector:'meta[http-equiv="refresh"][content]',excludeHidden:!1,tags:["cat.time-and-media","wcag2a","wcag221","TTv5","TT8.a"],actIds:["bc659a","bisz58"],all:[],any:[{options:{minDelay:0,maxDelay:72e3},id:"meta-refresh"}],none:[]},{id:"meta-viewport-large",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","best-practice"],all:[],any:[{options:{scaleMinimum:5,lowerBound:2},id:"meta-viewport-large"}],none:[]},{id:"meta-viewport",selector:'meta[name="viewport"]',matches:"is-initiator-matches",excludeHidden:!1,tags:["cat.sensory-and-visual-cues","wcag2aa","wcag144","ACT"],actIds:["b4f0c3"],all:[],any:[{options:{scaleMinimum:2},id:"meta-viewport"}],none:[]},{id:"nested-interactive",matches:"nested-interactive-matches",tags:["cat.keyboard","wcag2a","wcag412","TTv5","TT6.a"],actIds:["307n5z"],all:[],any:["no-focusable-content"],none:[]},{id:"no-autoplay-audio",excludeHidden:!1,selector:"audio[autoplay], video[autoplay]",matches:"no-autoplay-audio-matches",reviewOnFail:!0,tags:["cat.time-and-media","wcag2a","wcag142","ACT","TTv5","TT2.a"],actIds:["80f0bf"],preload:!0,all:[{options:{allowedDuration:3},id:"no-autoplay-audio"}],any:[],none:[]},{id:"object-alt",selector:"object[data]",matches:"object-is-loaded-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a"],actIds:["8fc3b6"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:[]},{id:"p-as-heading",selector:"p",matches:"p-as-heading-matches",tags:["cat.semantics","wcag2a","wcag131","experimental"],all:[{options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5},id:"p-as-heading"}],any:[],none:[]},{id:"page-has-heading-one",selector:"html",tags:["cat.semantics","best-practice"],all:[{options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0},id:"page-has-heading-one"}],any:[],none:[]},{id:"presentation-role-conflict",selector:'img[alt=\'\'], [role="none"], [role="presentation"]',matches:"has-implicit-chromium-role-matches",tags:["cat.aria","best-practice","ACT"],actIds:["46ca7f"],all:[],any:[],none:["is-element-focusable","has-global-aria-attribute"]},{id:"region",selector:"body *",tags:["cat.keyboard","best-practice"],all:[],any:[{options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"},id:"region"}],none:[]},{id:"role-img-alt",selector:"[role='img']:not(img, area, input, object)",matches:"html-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT","TTv5","TT7.a"],actIds:["23a2a8"],all:[],any:["aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"scope-attr-valid",selector:"td[scope], th[scope]",tags:["cat.tables","best-practice"],all:["html5-scope",{options:{values:["row","col","rowgroup","colgroup"]},id:"scope-value"}],any:[],none:[]},{id:"scrollable-region-focusable",selector:"*:not(select,textarea)",matches:"scrollable-region-focusable-matches",tags:["cat.keyboard","wcag2a","wcag211","TTv5","TT4.a"],actIds:["0ssw9k"],all:[],any:["focusable-content","focusable-element"],none:[]},{id:"select-name",selector:"select",tags:["cat.forms","wcag2a","wcag412","section508","section508.22.n","ACT","TTv5","TT5.c"],actIds:["e086e5"],all:[],any:["implicit-label","explicit-label","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"},"presentational-role"],none:["help-same-as-label","hidden-explicit-label"]},{id:"server-side-image-map",selector:"img[ismap]",tags:["cat.text-alternatives","wcag2a","wcag211","section508","section508.22.f","TTv5","TT4.a"],all:[],any:[],none:["exists"]},{id:"skip-link",selector:'a[href^="#"], a[href^="/#"]',matches:"skip-link-matches",tags:["cat.keyboard","best-practice"],all:[],any:["skip-link"],none:[]},{id:"svg-img-alt",selector:'[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]',matches:"svg-namespace-matches",tags:["cat.text-alternatives","wcag2a","wcag111","section508","section508.22.a","ACT","TTv5","TT7.a"],actIds:["7d6734"],all:[],any:["svg-non-empty-title","aria-label","aria-labelledby",{options:{attribute:"title"},id:"non-empty-title"}],none:[]},{id:"tabindex",selector:"[tabindex]",tags:["cat.keyboard","best-practice"],all:[],any:["tabindex"],none:[]},{id:"table-duplicate-name",selector:"table",tags:["cat.tables","best-practice"],all:[],any:[],none:["same-caption-summary"]},{id:"table-fake-caption",selector:"table",matches:"data-table-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g"],all:["caption-faked"],any:[],none:[]},{id:"target-size",selector:"*",enabled:!1,matches:"widget-not-inline-matches",tags:["wcag22aa","wcag258","cat.sensory-and-visual-cues"],all:[],any:[{options:{minSize:24},id:"target-size"},{options:{minOffset:24},id:"target-offset"}],none:[]},{id:"td-has-header",selector:"table",matches:"data-table-large-matches",tags:["cat.tables","experimental","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b"],all:["td-has-header"],any:[],none:[]},{id:"td-headers-attr",selector:"table",matches:"table-or-grid-role-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","TT14.b"],actIds:["a25f45"],all:["td-headers-attr"],any:[],none:[]},{id:"th-has-data-cells",selector:"table",matches:"data-table-matches",tags:["cat.tables","wcag2a","wcag131","section508","section508.22.g","TTv5","14.b"],actIds:["d0f69e"],all:["th-has-data-cells"],any:[],none:[]},{id:"valid-lang",selector:"[lang]:not(html), [xml\\:lang]:not(html)",tags:["cat.language","wcag2aa","wcag312","ACT","TTv5","TT11.b"],actIds:["de46e4"],all:[],any:[],none:[{options:{attributes:["lang","xml:lang"]},id:"valid-lang"}]},{id:"video-caption",selector:"video",tags:["cat.text-alternatives","wcag2a","wcag122","section508","section508.22.a","TTv5","TT17.a"],actIds:["eac66b"],all:[],any:[],none:["caption"]}],checks:[{id:"abstractrole",evaluate:"abstractrole-evaluate"},{id:"aria-allowed-attr",evaluate:"aria-allowed-attr-evaluate",options:{validTreeRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-allowed-role",evaluate:"aria-allowed-role-evaluate",options:{allowImplicit:!0,ignoredTags:[]}},{id:"aria-busy",evaluate:"aria-busy-evaluate"},{id:"aria-conditional-attr",evaluate:"aria-conditional-attr-evaluate",options:{invalidTableRowAttrs:["aria-posinset","aria-setsize","aria-expanded","aria-level"]}},{id:"aria-errormessage",evaluate:"aria-errormessage-evaluate"},{id:"aria-hidden-body",evaluate:"aria-hidden-body-evaluate"},{id:"aria-level",evaluate:"aria-level-evaluate"},{id:"aria-prohibited-attr",evaluate:"aria-prohibited-attr-evaluate",options:{elementsAllowedAriaLabel:["applet","input"]}},{id:"aria-required-attr",evaluate:"aria-required-attr-evaluate"},{id:"aria-required-children",evaluate:"aria-required-children-evaluate",options:{reviewEmpty:["doc-bibliography","doc-endnotes","grid","list","listbox","menu","menubar","table","tablist","tree","treegrid","rowgroup"]}},{id:"aria-required-parent",evaluate:"aria-required-parent-evaluate",options:{ownGroupRoles:["listitem","treeitem"]}},{id:"aria-roledescription",evaluate:"aria-roledescription-evaluate",options:{supportedRoles:["button","img","checkbox","radio","combobox","menuitemcheckbox","menuitemradio"]}},{id:"aria-unsupported-attr",evaluate:"aria-unsupported-attr-evaluate"},{id:"aria-valid-attr-value",evaluate:"aria-valid-attr-value-evaluate",options:[]},{id:"aria-valid-attr",evaluate:"aria-valid-attr-evaluate",options:[]},{id:"deprecatedrole",evaluate:"deprecatedrole-evaluate"},{id:"fallbackrole",evaluate:"fallbackrole-evaluate"},{id:"has-global-aria-attribute",evaluate:"has-global-aria-attribute-evaluate"},{id:"has-widget-role",evaluate:"has-widget-role-evaluate",options:[]},{id:"invalidrole",evaluate:"invalidrole-evaluate"},{id:"is-element-focusable",evaluate:"is-element-focusable-evaluate"},{id:"no-implicit-explicit-label",evaluate:"no-implicit-explicit-label-evaluate"},{id:"unsupportedrole",evaluate:"unsupportedrole-evaluate"},{id:"valid-scrollable-semantics",evaluate:"valid-scrollable-semantics-evaluate",options:{roles:["tooltip"]}},{id:"color-contrast-enhanced",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:7,minThreshold:4.5},large:{expected:4.5,minThreshold:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.1,textStrokeEmMin:.03}},{id:"color-contrast",evaluate:"color-contrast-evaluate",options:{ignoreUnicode:!0,ignoreLength:!1,ignorePseudo:!1,boldValue:700,boldTextPt:14,largeTextPt:18,contrastRatio:{normal:{expected:4.5},large:{expected:3}},pseudoSizeThreshold:.25,shadowOutlineEmMax:.2,textStrokeEmMin:.03}},{id:"link-in-text-block-style",evaluate:"link-in-text-block-style-evaluate"},{id:"link-in-text-block",evaluate:"link-in-text-block-evaluate",options:{requiredContrastRatio:3,allowSameColor:!0}},{id:"autocomplete-appropriate",evaluate:"autocomplete-appropriate-evaluate",deprecated:!0},{id:"autocomplete-valid",evaluate:"autocomplete-valid-evaluate",options:{stateTerms:["none","false","true","disabled","enabled","undefined","null"]}},{id:"accesskeys",evaluate:"accesskeys-evaluate",after:"accesskeys-after"},{id:"focusable-content",evaluate:"focusable-content-evaluate"},{id:"focusable-disabled",evaluate:"focusable-disabled-evaluate"},{id:"focusable-element",evaluate:"focusable-element-evaluate"},{id:"focusable-modal-open",evaluate:"focusable-modal-open-evaluate"},{id:"focusable-no-name",evaluate:"focusable-no-name-evaluate"},{id:"focusable-not-tabbable",evaluate:"focusable-not-tabbable-evaluate"},{id:"frame-focusable-content",evaluate:"frame-focusable-content-evaluate"},{id:"landmark-is-top-level",evaluate:"landmark-is-top-level-evaluate"},{id:"no-focusable-content",evaluate:"no-focusable-content-evaluate"},{id:"page-has-heading-one",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]",passForModal:!0}},{id:"page-has-main",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:"main:not([role]), [role='main']",passForModal:!0}},{id:"page-no-duplicate-banner",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"header:not([role]), [role=banner]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-contentinfo",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"footer:not([role]), [role=contentinfo]",nativeScopeFilter:"article, aside, main, nav, section"}},{id:"page-no-duplicate-main",evaluate:"page-no-duplicate-evaluate",after:"page-no-duplicate-after",options:{selector:"main:not([role]), [role='main']"}},{id:"tabindex",evaluate:"tabindex-evaluate"},{id:"alt-space-value",evaluate:"alt-space-value-evaluate"},{id:"duplicate-img-label",evaluate:"duplicate-img-label-evaluate",options:{parentSelector:"button, [role=button], a[href], p, li, td, th"}},{id:"explicit-label",evaluate:"explicit-evaluate"},{id:"help-same-as-label",evaluate:"help-same-as-label-evaluate",enabled:!1},{id:"hidden-explicit-label",evaluate:"hidden-explicit-label-evaluate"},{id:"implicit-label",evaluate:"implicit-evaluate"},{id:"label-content-name-mismatch",evaluate:"label-content-name-mismatch-evaluate",options:{pixelThreshold:.1,occurrenceThreshold:3}},{id:"multiple-label",evaluate:"multiple-label-evaluate"},{id:"title-only",evaluate:"title-only-evaluate"},{id:"landmark-is-unique",evaluate:"landmark-is-unique-evaluate",after:"landmark-is-unique-after"},{id:"has-lang",evaluate:"has-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"valid-lang",evaluate:"valid-lang-evaluate",options:{attributes:["lang","xml:lang"]}},{id:"xml-lang-mismatch",evaluate:"xml-lang-mismatch-evaluate"},{id:"dlitem",evaluate:"dlitem-evaluate"},{id:"listitem",evaluate:"listitem-evaluate"},{id:"only-dlitems",evaluate:"invalid-children-evaluate",options:{validRoles:["definition","term","listitem"],validNodeNames:["dt","dd"],divGroups:!0}},{id:"only-listitems",evaluate:"invalid-children-evaluate",options:{validRoles:["listitem"],validNodeNames:["li"]}},{id:"structured-dlitems",evaluate:"structured-dlitems-evaluate"},{id:"caption",evaluate:"caption-evaluate"},{id:"frame-tested",evaluate:"frame-tested-evaluate",after:"frame-tested-after",options:{isViolation:!1}},{id:"no-autoplay-audio",evaluate:"no-autoplay-audio-evaluate",options:{allowedDuration:3}},{id:"css-orientation-lock",evaluate:"css-orientation-lock-evaluate",options:{degreeThreshold:2}},{id:"meta-viewport-large",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:5,lowerBound:2}},{id:"meta-viewport",evaluate:"meta-viewport-scale-evaluate",options:{scaleMinimum:2}},{id:"target-offset",evaluate:"target-offset-evaluate",options:{minOffset:24}},{id:"target-size",evaluate:"target-size-evaluate",options:{minSize:24}},{id:"header-present",evaluate:"has-descendant-evaluate",after:"has-descendant-after",options:{selector:":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]"}},{id:"heading-order",evaluate:"heading-order-evaluate",after:"heading-order-after"},{id:"identical-links-same-purpose",evaluate:"identical-links-same-purpose-evaluate",after:"identical-links-same-purpose-after"},{id:"internal-link-present",evaluate:"internal-link-present-evaluate"},{id:"landmark",evaluate:"has-descendant-evaluate",options:{selector:"main, [role=main]"}},{id:"meta-refresh-no-exceptions",evaluate:"meta-refresh-evaluate",options:{minDelay:72e3,maxDelay:!1}},{id:"meta-refresh",evaluate:"meta-refresh-evaluate",options:{minDelay:0,maxDelay:72e3}},{id:"p-as-heading",evaluate:"p-as-heading-evaluate",options:{margins:[{weight:150,italic:!0},{weight:150,size:1.15},{italic:!0,size:1.15},{size:1.4}],passLength:1,failLength:.5}},{id:"region",evaluate:"region-evaluate",after:"region-after",options:{regionMatcher:"dialog, [role=dialog], [role=alertdialog], svg"}},{id:"skip-link",evaluate:"skip-link-evaluate"},{id:"unique-frame-title",evaluate:"unique-frame-title-evaluate",after:"unique-frame-title-after"},{id:"duplicate-id-active",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id-aria",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"duplicate-id",evaluate:"duplicate-id-evaluate",after:"duplicate-id-after"},{id:"aria-label",evaluate:"aria-label-evaluate"},{id:"aria-labelledby",evaluate:"aria-labelledby-evaluate"},{id:"avoid-inline-spacing",evaluate:"avoid-inline-spacing-evaluate",options:{cssProperties:["line-height","letter-spacing","word-spacing"]}},{id:"button-has-visible-text",evaluate:"has-text-content-evaluate"},{id:"doc-has-title",evaluate:"doc-has-title-evaluate"},{id:"exists",evaluate:"exists-evaluate"},{id:"has-alt",evaluate:"has-alt-evaluate"},{id:"has-visible-text",evaluate:"has-text-content-evaluate"},{id:"important-letter-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"letter-spacing",minValue:.12}},{id:"important-line-height",evaluate:"inline-style-property-evaluate",options:{multiLineOnly:!0,cssProperty:"line-height",minValue:1.5,normalValue:1}},{id:"important-word-spacing",evaluate:"inline-style-property-evaluate",options:{cssProperty:"word-spacing",minValue:.16}},{id:"is-on-screen",evaluate:"is-on-screen-evaluate"},{id:"non-empty-alt",evaluate:"attr-non-space-content-evaluate",options:{attribute:"alt"}},{id:"non-empty-if-present",evaluate:"non-empty-if-present-evaluate"},{id:"non-empty-placeholder",evaluate:"attr-non-space-content-evaluate",options:{attribute:"placeholder"}},{id:"non-empty-title",evaluate:"attr-non-space-content-evaluate",options:{attribute:"title"}},{id:"non-empty-value",evaluate:"attr-non-space-content-evaluate",options:{attribute:"value"}},{id:"presentational-role",evaluate:"presentational-role-evaluate"},{id:"role-none",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"none"}}}},{id:"role-presentation",evaluate:"matches-definition-evaluate",deprecated:!0,options:{matcher:{attributes:{role:"presentation"}}}},{id:"svg-non-empty-title",evaluate:"svg-non-empty-title-evaluate"},{id:"caption-faked",evaluate:"caption-faked-evaluate"},{id:"html5-scope",evaluate:"html5-scope-evaluate"},{id:"same-caption-summary",evaluate:"same-caption-summary-evaluate"},{id:"scope-value",evaluate:"scope-value-evaluate",options:{values:["row","col","rowgroup","colgroup"]}},{id:"td-has-header",evaluate:"td-has-header-evaluate"},{id:"td-headers-attr",evaluate:"td-headers-attr-evaluate"},{id:"th-has-data-cells",evaluate:"th-has-data-cells-evaluate"},{id:"hidden-content",evaluate:"hidden-content-evaluate"}]})}("object"==typeof window?window:this)},916:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,a,o=[],i=!0,u=!1
try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw a}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return d(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}var p=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==f)return f
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),f=p.window,h=p.console,m=p.setTimeout,D=p.clearTimeout,g=f&&f.document,v=f&&f.navigator,b=function(){var e="qunit-test-string"
try{return p.sessionStorage.setItem(e,e),p.sessionStorage.removeItem(e),p.sessionStorage}catch(e){return}}(),y="function"==typeof p.Map&&"function"==typeof p.Map.prototype.keys&&"function"==typeof p.Symbol&&"symbol"===a(p.Symbol.iterator)?p.Map:function(e){var t=this,n=Object.create(null),r=Object.prototype.hasOwnProperty
this.has=function(e){return r.call(n,e)},this.get=function(e){return n[e]},this.set=function(e,t){return r.call(n,e)||this.size++,n[e]=t,this},this.delete=function(e){r.call(n,e)&&(delete n[e],this.size--)},this.forEach=function(e){for(var t in n)e(n[t],t)},this.keys=function(){return Object.keys(n)},this.clear=function(){n=Object.create(null),this.size=0},this.size=0,e&&e.forEach((function(e,n){t.set(n,e)}))},F="function"==typeof p.Set&&"function"==typeof p.Set.prototype.values?p.Set:function(e){var t=Object.create(null)
return Array.isArray(e)&&e.forEach((function(e){t[e]=!0})),{add:function(e){t[e]=!0},has:function(e){return e in t},get size(){return Object.keys(t).length}}},w={warn:h?Function.prototype.bind.call(h.warn||h.log,h):function(){}},E=Object.prototype.toString,C=Object.prototype.hasOwnProperty,x=f&&void 0!==f.performance&&"function"==typeof f.performance.mark&&"function"==typeof f.performance.measure?f.performance:void 0,A={now:x?x.now.bind(x):Date.now,measure:x?function(e,t,n){try{x.measure(e,t,n)}catch(e){w.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:x?x.mark.bind(x):function(){}}
function k(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function T(e,t){return-1!==t.indexOf(e)}function N(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&S("array",e)?[]:{}
for(var r in e)if(C.call(e,r)){var a=e[r]
n[r]=a===Object(a)?N(a,t):a}return n}function B(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)C.call(t,r)&&C.call(e,r)&&(n[r]=B(e[r],t[r]))
return n}function R(e,t,n){for(var r in t)C.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function _(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=E.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return a(e)}}function S(e,t){return _(t)===e}function O(e,t){for(var n=e+""+t,r=0,a=0;a<n.length;a++)r=(r<<5)-r+n.charCodeAt(a),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function M(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var I=new F(["boolean","number","string"]),P=[]
function j(e,t){return e===t}function q(e,t){return e===t||e.valueOf()===t.valueOf()}function L(e){var t=Object.getPrototypeOf(e)
return t&&null!==t.constructor?e.constructor:Object}function z(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var V={undefined:j,null:j,boolean:q,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:q,symbol:j,date:q,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&z(e)===z(t)},function:j,array:function(e,t){if(e.length!==t.length)return!1
for(var n=0;n<e.length;n++)if(!U(e[n],t[n]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e){if(n){var r=!1
t.forEach((function(t){if(!r){var n=P
P=[],U(t,e)&&(r=!0),P=n}})),r||(n=!1)}})),n},map:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e,r){if(n){var a=!1
t.forEach((function(t,n){if(!a){var o=P
P=[],V.array([t,n],[e,r])&&(a=!0),P=o}})),a||(n=!1)}})),n}},H={undefined:j,null:j,boolean:j,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:j,symbol:j,function:j,object:function(e,t){if(P.some((function(n){return n.a===e&&n.b===t})))return!0
P.push({a:e,b:t})
var n=_(e),r=_(t)
if("object"!==n||"object"!==r)return n===r&&V[n](e,t)
if(!1===function(e,t){return L(e)===L(t)}(e,t))return!1
var a=[],o=[]
for(var i in e)if(a.push(i),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[i]||"function"!=typeof t[i]||e[i].toString()!==t[i].toString())&&!U(e[i],t[i]))return!1
for(var u in t)o.push(u)
return V.array(a.sort(),o.sort())}}
function U(e,t){if(e===t)return!0
var n=a(e),r=a(t)
return n!==r?("object"===n&&I.has(_(e))?e.valueOf():e)===("object"===r&&I.has(_(t))?t.valueOf():t):H[n](e,t)}function $(e,t){var n=U(e,t)
return P=[],n}function G(e,t){if(2===arguments.length)return e===t||$(e,t)
for(var n=arguments.length-1;n>0;){if(!$(arguments[n-1],arguments[n]))return!1
n--}return!0}var W={altertitle:!0,collapse:!0,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,requireExpects:!1,scrolltop:!0,storage:b,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}},Y=p&&p.QUnit&&!p.QUnit.version&&p.QUnit.config
Y&&R(W,Y),W.modules.push(W.currentModule)
var K=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=i.separator(),a=i.indent(1)
return t.join&&(t=t.join(","+r+a)),t?[e,a+t,i.indent()+n].join(r):e+n}function r(e,t){if(i.maxDepth&&i.depth>i.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,a=new Array(r);r--;)a[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",a,"]")}var o=/^function (\w+)/,i={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var o=this.parsers[t],i=a(o)
if("function"===i){n.push(e)
var u=o.call(this,e,n)
return n.pop(),u}return"string"===i?o:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":S("regexp",e)?"regexp":S("date",e)?"date":S("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===E.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":a(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:W.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(o.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",i.parse(e,"functionArgs"),"){"].join(""),i.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(i.maxDepth&&i.depth>i.maxDepth)return"[object Object]"
i.up()
var a=[]
for(var o in e)a.push(o)
var u=["message","name"]
for(var s in u){var l=u[s]
l in e&&!T(l,a)&&a.push(l)}a.sort()
for(var c=0;c<a.length;c++){var d=a[c],p=e[d]
r.push(i.parse(d,"key")+": "+i.parse(p,void 0,t))}return i.down(),n("{",r,"}")},node:function(e){var t=i.HTML?"&lt;":"<",n=i.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),a=t+r,o=e.attributes
if(o)for(var u=0;u<o.length;u++){var s=o[u].nodeValue
s&&"inherit"!==s&&(a+=" "+o[u].nodeName+"="+i.parse(s,"attribute"))}return a+=n,3!==e.nodeType&&4!==e.nodeType||(a+=e.nodeValue),a+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return i}(),Q=function(){function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return u(e,[{key:"start",value:function(e){if(e){this._startTime=A.now()
var t=this.fullName.length
A.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=A.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
A.mark("qunit_suite_".concat(t,"_end")),A.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,a=e.todo
return n?"failed":r===t?"skipped":a===t?"todo":"passed"}}]),e}(),X=[],Z=new Q
function J(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function ee(e,t){return function(n){W.currentModule!==e&&w.warn("The `"+t+"` hook was called inside the wrong module (`"+W.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function te(e,t,n){"function"==typeof t&&(n=t,t=void 0)
var r=function(e,t,n){var r=X.length?X.slice(-1)[0]:null,a=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:Z,i=null!==r&&r.skip||n.skip,u=null!==r&&r.todo||n.todo,s={}
r&&R(s,r.testEnvironment),R(s,t)
var l={name:a,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:s,tests:[],moduleId:O(a),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new Q(e,o),stats:null,skip:i,todo:!i&&u,ignored:n.ignored||!1}
return r&&r.childModules.push(l),W.modules.push(l),l}(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}),a=r.testEnvironment,o=r.hooks
J(o,a,"before"),J(o,a,"beforeEach"),J(o,a,"afterEach"),J(o,a,"after")
var i={before:ee(r,"before"),beforeEach:ee(r,"beforeEach"),afterEach:ee(r,"afterEach"),after:ee(r,"after")},u=W.currentModule
if(W.currentModule=r,"function"==typeof n){X.push(r)
try{var s=n.call(r.testEnvironment,i)
s&&"function"==typeof s.then&&w.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{X.pop(),W.currentModule=r.parentModule||u}}}var ne=!1
function re(e,t,n){var r,a=ne&&(r=W.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!X.some((function(e){return r.includes(e.moduleId)})))
te(e,t,n,{ignored:a})}re.only=function(){ne||(W.modules.length=0,W.queue.length=0,W.currentModule.ignored=!0),ne=!0,te.apply(void 0,arguments)},re.skip=function(e,t,n){ne||te(e,t,n,{skip:!0})},re.todo=function(e,t,n){ne||te(e,t,n,{todo:!0})}
var ae=(ie(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+[/\\]/,"")
function oe(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),ae){for(var r=[],a=t;a<n.length&&-1===n[a].indexOf(ae);a++)r.push(n[a])
if(r.length)return r.join("\n")}return n[t]}}function ie(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return oe(t,e)}var ue=function(){function e(t){o(this,e),this.test=t}return u(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,W.timeout&&(D(W.timeout),W.timeout=null,W.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return this.test.internalStop(t)}},{key:"push",value:function(t,n,r,a,o){return w.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:W.current.assert).pushResult({result:t,actual:n,expected:r,message:a,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||W.current
if(!r)throw new Error("assertion outside test context, in "+ie(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(K.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(K.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){this.pushResult({result:t==e,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){this.pushResult({result:t!=e,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=B(e,t),t=N(t,!1),this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=B(e,t),t=N(t),this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var a=s(se(n,r,"throws"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||W.current
if("function"==typeof t){var i,u=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){i=e}if(o.ignoreGlobalErrors=!1,i){var l=s(le(i,n,r),3)
u=l[0],n=l[1],r=l[2]}o.assert.pushResult({result:u,actual:i&&M(i),expected:n,message:r})}else o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,n,r){var a=s(se(n,r,"rejects"),2)
n=a[0],r=a[1]
var o=this instanceof e&&this.test||W.current,i=t&&t.then
if("function"==typeof i){var u=this.async()
return i.call(t,(function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),u()}),(function(e){var t,a=s(le(e,n,r),3)
t=a[0],n=a[1],r=a[2],o.assert.pushResult({result:t,actual:e&&M(e),expected:n,message:r}),u()}))}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}]),e}()
function se(e,t,n){var r=_(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function le(e,t,n){var r=!1,a=_(t)
if(t){if("regexp"===a)r=t.test(M(e)),t=String(t)
else if("function"===a&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===a)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=M(t)
else if("function"===a)try{r=!0===t.call({},e),t=null}catch(e){t=M(e)}}else r=!0
return[r,t,n]}ue.prototype.raises=ue.prototype.throws
var ce=Object.create(null),de=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function pe(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var n=ce[e],r=n?l(n):[],a=0;a<r.length;a++)r[a](t)}var fe="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function he(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var me={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==fe)return fe
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r)
return i(this,new c(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},o.all=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var o=Array.prototype.slice.call(e)
if(0===o.length)return t([])
var i=o.length
function u(e,n){try{if(n&&("object"===a(n)||"function"==typeof n)){var s=n.then
if("function"==typeof s)return void s.call(n,(function(t){u(e,t)}),r)}o[e]=n,0==--i&&t(o)}catch(e){r(e)}}for(var s=0;s<o.length;s++)u(s,o[s])}))},o.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(a(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var o=r.length
function i(e,n){if(n&&("object"===a(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var u=0;u<r.length;u++)i(u,r[u])}))},o.resolve=function(e){return e&&"object"===a(e)&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var a=0,i=e.length;a<i;a++)o.resolve(e[a]).then(t,r)}))},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},me.exports=o}else me.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function i(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void s(t.promise,e)}u(t.promise,r)}else(1===e._state?u:s)(t.promise,e._value)}))):e._deferreds.push(t)}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===a(t)||"function"==typeof t)){var n=t.then
if(t instanceof o)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void d((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){s(e,t)}var r,i}function s(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)i(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1
try{e((function(e){n||(n=!0,u(t,e))}),(function(e){n||(n=!0,s(t,e))}))}catch(e){if(n)return
n=!0,s(t,e)}}}()
var De=me.exports
function ge(e,t){var n=W.callbacks[e]
if("log"!==e){var r=De.resolve()
return n.forEach((function(e){r=r.then((function(){return De.resolve(e(t))}))})),r}n.map((function(e){return e(t)}))}var ve,be=0,ye=[]
function Fe(){var e,t
e=A.now(),W.depth=(W.depth||0)+1,we(e),W.depth--,ye.length||W.blocking||W.current||(W.blocking||W.queue.length||0!==W.depth?(t=W.queue.shift()(),ye.push.apply(ye,l(t)),be>0&&be--,Fe()):function(){var e
if(0===W.stats.testCount&&!0===W.failOnZeroTests)return e=W.filter&&W.filter.length?new Error('No tests matched the filter "'.concat(W.filter,'".')):W.module&&W.module.length?new Error('No tests matched the module "'.concat(W.module,'".')):W.moduleId&&W.moduleId.length?new Error('No tests matched the moduleId "'.concat(W.moduleId,'".')):W.testId&&W.testId.length?new Error('No tests matched the testId "'.concat(W.testId,'".')):new Error("No tests were run."),Re("global failure",R((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void Fe()
var t=W.storage,n=Math.round(A.now()-W.started),r=W.stats.all-W.stats.bad
Ee.finished=!0,pe("runEnd",Z.end(!0)),ge("done",{passed:r,failed:W.stats.bad,total:W.stats.all,runtime:n}).then((function(){if(t&&0===W.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function we(e){if(ye.length&&!W.blocking){var t=A.now()-e
if(!m||W.updateRate<=0||t<W.updateRate){var n=ye.shift()
De.resolve(n()).then((function(){ye.length?we(e):Fe()}))}else m(Fe)}}var Ee={finished:!1,add:function(e,t,n){if(t)W.queue.splice(be++,0,e)
else if(n){ve||(ve=function(e){var t=parseInt(O(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(ve()*(W.queue.length-be+1))
W.queue.splice(be+r,0,e)}else W.queue.push(e)},advance:Fe,taskCount:function(){return ye.length}},Ce=function(){function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return u(e,[{key:"start",value:function(e){return e&&(this._startTime=A.now(),A.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=A.now(),A)){A.mark("qunit_test_end")
var t=this.fullName.join(" – ")
A.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return R(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function xe(e){if(this.expected=null,this.assertions=[],this.module=W.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new y,this.nextPauseId=1,this.stackOffset=3,R(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),Ee.finished)w.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=O(this.module.name,this.testName),++xe.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new Ce(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new ue(this)}}function Ae(){if(!W.current)throw new Error("pushFailure() assertion outside test context, in "+ie(2))
var e=W.current
return e.pushFailure.apply(e,arguments)}function ke(){if(W.pollution=[],W.noglobals)for(var e in p)if(C.call(p,e)){if(/^qunit-test-output/.test(e))continue
W.pollution.push(e)}}xe.count=0,xe.prototype={get stack(){return oe(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t),r=De.resolve()
return n.forEach((function(e){r=r.then((function(){return e.stats={all:0,bad:0,started:A.now()},pe("suiteStart",e.suiteReport.start(!0)),ge("moduleStart",{name:e.name,tests:e.tests})}))})),r.then((function(){return W.current=e,e.testEnvironment=R({},t.testEnvironment),e.started=A.now(),pe("testStart",e.testReport.start(!0)),ge("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){W.pollution||ke()}))}))},run:function(){if(W.current=this,W.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,oe(e,0)),ke(),W.blocking&&Oe(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&Ae("Test did not finish synchronously even though assert.timeout( 0 ) was used.",ie(2))}},after:function(){!function(){var e=W.pollution
ke()
var t=k(W.pollution,e)
t.length>0&&Ae("Introduced global variable(s): "+t.join(", "))
var n=k(e,W.pollution)
n.length>0&&Ae("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(W.current=n,W.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+M(e),oe(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,a=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Ie(e).filter((function(e){return!e.skip})).length-1}(n)||!(W.queue.length>0||Ee.taskCount()>2))if(W.current=r,W.notrycatch)a()
else try{a()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),oe(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&W.globalHooks[e])for(var r=0;r<W.globalHooks[e].length;r++)t.push(n.queueGlobalHook(W.globalHooks[e][r],e))}(this),function n(r,a){if(a.parentModule&&n(r,a.parentModule),a.hooks[e].length)for(var o=0;o<a.hooks[e].length;o++)t.push(r.queueHook(a.hooks[e][o],e,a))}(this,this.module)),t},finish:function(){if(W.current=this,m&&(D(this.timeout),W.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}W.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,a=!!this.skip,o=!!this.todo,i=0,u=W.storage
this.runtime=Math.round(A.now()-this.started),W.stats.all+=this.assertions.length,W.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var s=0;s<this.assertions.length;s++)this.assertions[s].result||(i++,W.stats.bad++,t.stats.bad++)
a?je(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),u&&(i?u.setItem("qunit-test-"+n+"-"+r,i):u.removeItem("qunit-test-"+n+"-"+r)),pe("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var c=this
return ge("testDone",{name:r,module:n,skipped:a,todo:o,failed:i,passed:this.assertions.length-i,total:this.assertions.length,runtime:a?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return c.stack}}).then((function(){if(Pe(t)){for(var e=[t],n=t.parentModule;n&&Pe(n);)e.push(n),n=n.parentModule
var r=De.resolve()
return e.forEach((function(e){r=r.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,l(n.childModules))}return pe("suiteEnd",e.suiteReport.end(!0)),ge("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(A.now()-e.stats.started)})}(e)}))})),r}})).then((function(){W.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=R({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=W.storage&&+W.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=W.reorder&&!!t
this.previousFailure=!!t,Ee.add((function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,W.seed)}else je(this.module)},pushResult:function(e){if(this!==W.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(A.now()-this.started),todo:!!this.todo}
if(C.call(e,"expected")&&(r.expected=e.expected),!e.result){var a=e.source||ie()
a&&(r.source=a)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof xe))throw new Error("pushFailure() assertion outside test context, was "+ie(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){ge("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),pe("assertion",t)},internalResetTimeout:function(e){D(W.timeout),W.timeout=m(W.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
W.blocking=!0
var t,n=this,r=this.nextPauseId++,a={cancelled:!1,remaining:e}
return n.pauses.set(r,a),m&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof W.testTimeout&&(t=W.testTimeout),"number"==typeof t&&t>0&&(W.timeoutHandler=function(e){return function(){W.timeout=null,a.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),ie(2)),Me(n)}},D(W.timeout),W.timeout=m(W.timeoutHandler(t),t))),function(){if(!a.cancelled){if(void 0===W.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(W.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(a.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
a.remaining--,0===a.remaining&&n.pauses.delete(r),Me(n)}}},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"==typeof r){var a=n.internalStop(),o=function(){a()}
W.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,oe(e,0)),ke(),Oe(n)}))}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,n){return!n||!n.length||T(t.moduleId,n)||t.parentModule&&e(t.parentModule,n)}(this.module,W.moduleId))return!1
if(W.testId&&W.testId.length&&!T(this.testId,W.testId))return!1
var e=W.module&&W.module.toLowerCase()
if(!function e(t,n){return!n||(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule,n)}(this.module,e))return!1
var t=W.filter
if(!t)return!0
var n=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),r=this.module.name+": "+this.testName
return n?this.regexFilter(!!n[1],n[2],n[3],r):this.stringFilter(t,r)},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var Te=!1
function Ne(e){Te||W.currentModule.ignored||new xe(e).queue()}function Be(e){W.currentModule.ignored||(Te||(W.queue.length=0,Te=!0),new xe(e).queue())}function Re(e,t){Ne({testName:e,callback:t})}function _e(e,t){return"".concat(e," [").concat(t,"]")}function Se(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n)
else{if("object"!==a(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(a(e)," instead."))
for(var r in e)t(e[r],r)}}function Oe(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Me(e)}function Me(e){e.pauses.size>0||(m?(D(W.timeout),W.timeout=m((function(){e.pauses.size>0||(D(W.timeout),W.timeout=null,W.blocking=!1,Ee.advance())}))):(W.blocking=!1,Ee.advance()))}function Ie(e){for(var t=[].concat(e.tests),n=l(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,l(r.childModules))}return t}function Pe(e){return e.testsRun+e.testsIgnored===Ie(e).length}function je(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}R(Re,{todo:function(e,t){Ne({testName:e,callback:t,todo:!0})},skip:function(e){Ne({testName:e,skip:!0})},only:function(e,t){Be({testName:e,callback:t})},each:function(e,t,n){Se(t,(function(t,r){Ne({testName:_e(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}}),Re.todo.each=function(e,t,n){Se(t,(function(t,r){Ne({testName:_e(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})}))},Re.skip.each=function(e,t){Se(t,(function(t,n){Ne({testName:_e(e,n),stackOffset:5,skip:!0})}))},Re.only.each=function(e,t,n){Se(t,(function(t,r){Be({testName:_e(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}
var qe,Le,ze,Ve,He=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Ue=!0
if("undefined"!=typeof process){var $e=process.env||{}
qe=$e.FORCE_COLOR,Le=$e.NODE_DISABLE_COLORS,ze=$e.NO_COLOR,Ve=$e.TERM,Ue=process.stdout&&process.stdout.isTTY}var Ge={enabled:!Le&&null==ze&&"dumb"!==Ve&&(null!=qe&&"0"!==qe||Ue),reset:Ye(0,0),bold:Ye(1,22),dim:Ye(2,22),italic:Ye(3,23),underline:Ye(4,24),inverse:Ye(7,27),hidden:Ye(8,28),strikethrough:Ye(9,29),black:Ye(30,39),red:Ye(31,39),green:Ye(32,39),yellow:Ye(33,39),blue:Ye(34,39),magenta:Ye(35,39),cyan:Ye(36,39),white:Ye(37,39),gray:Ye(90,39),grey:Ye(90,39),bgBlack:Ye(40,49),bgRed:Ye(41,49),bgGreen:Ye(42,49),bgYellow:Ye(43,49),bgBlue:Ye(44,49),bgMagenta:Ye(45,49),bgCyan:Ye(46,49),bgWhite:Ye(47,49)}
function We(e,t){for(var n,r=0,a="",o="";r<e.length;r++)a+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return a+t+o}function Ye(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Ge.enabled?We(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Ge.reset.bind(r),r.bold=Ge.bold.bind(r),r.dim=Ge.dim.bind(r),r.italic=Ge.italic.bind(r),r.underline=Ge.underline.bind(r),r.inverse=Ge.inverse.bind(r),r.hidden=Ge.hidden.bind(r),r.strikethrough=Ge.strikethrough.bind(r),r.black=Ge.black.bind(r),r.red=Ge.red.bind(r),r.green=Ge.green.bind(r),r.yellow=Ge.yellow.bind(r),r.blue=Ge.blue.bind(r),r.magenta=Ge.magenta.bind(r),r.cyan=Ge.cyan.bind(r),r.white=Ge.white.bind(r),r.gray=Ge.gray.bind(r),r.grey=Ge.grey.bind(r),r.bgBlack=Ge.bgBlack.bind(r),r.bgRed=Ge.bgRed.bind(r),r.bgGreen=Ge.bgGreen.bind(r),r.bgYellow=Ge.bgYellow.bind(r),r.bgBlue=Ge.bgBlue.bind(r),r.bgMagenta=Ge.bgMagenta.bind(r),r.bgCyan=Ge.bgCyan.bind(r),r.bgWhite=Ge.bgWhite.bind(r),r):Ge.enabled?We([n],t+""):t+""
var r}}var Ke=Object.prototype.hasOwnProperty
function Qe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var n=new Array(t+1).join(" "),r=e.match(/\n+$/)
return 1===(r?r[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map((function(e){return n+e})).join("\n"):"|+\n"+e.split("\n").map((function(e){return n+e})).join("\n")}return e}return JSON.stringify(Xe(e),null,2)}function Xe(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":n.push(e),t=e.map((function(e){return Xe(e,n)})),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach((function(r){t[r]=Xe(e[r],n)})),n.pop()
break
default:t=e}return t}var Ze=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(h.log,h),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return u(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Ge.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+M(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Ge.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Ge.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Ge.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Ge.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Ge.cyan("# todo ".concat(e.testCounts.todo))),this.log(Ge.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(Qe(e.message||"failed")),n+="\n  severity: ".concat(Qe(t||"failed")),Ke.call(e,"actual")&&(n+="\n  actual  : ".concat(Qe(e.actual))),Ke.call(e,"expected")&&(n+="\n  expected: ".concat(Qe(e.expected))),e.stack&&(n+="\n  stack: ".concat(Qe(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(Qe(M(e))),t+="\n  severity: ".concat(Qe("failed")),e&&e.stack&&(t+="\n  stack: ".concat(Qe(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Je={console:He,tap:Ze}
function et(e){return function(t){W.globalHooks[e]||(W.globalHooks[e]=[]),W.globalHooks[e].push(t)}}var tt={beforeEach:et("beforeEach"),afterEach:et("afterEach")}
function nt(e){W.current?W.current.assert.pushResult({result:!1,message:"global failure: ".concat(M(e)),source:e&&e.stack||ie(2)}):(Z.globalFailureCount++,W.stats.bad++,W.stats.all++,pe("error",e))}var rt={}
W.currentModule.suiteReport=Z
var at=!1,ot=!1
function it(){ot=!0,m?m((function(){st()})):st()}function ut(){W.blocking=!1,Ee.advance()}function st(){if(W.started)ut()
else{W.started=A.now(),""===W.modules[0].name&&0===W.modules[0].tests.length&&W.modules.shift()
for(var e=[],t=0;t<W.modules.length;t++)""!==W.modules[t].name&&e.push({name:W.modules[t].name,moduleId:W.modules[t].moduleId,tests:W.modules[t].tests})
pe("runStart",Z.start(!0)),ge("begin",{totalTests:xe.count,modules:e}).then(ut)}}rt.isLocal=f&&f.location&&"file:"===f.location.protocol,rt.version="2.19.4",R(rt,{config:W,dump:K,equiv:G,reporters:Je,hooks:tt,is:S,objectType:_,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!T(e,de)){var n=de.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
ce[e]||(ce[e]=[]),T(t,ce[e])||ce[e].push(t)},onError:function(e){if(w.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),W.current&&W.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,nt(t),!1},onUncaughtException:nt,pushFailure:Ae,assert:ue.prototype,module:re,test:Re,todo:Re.todo,skip:Re.skip,only:Re.only,start:function(e){if(W.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=at
if(at=!0,ot)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(W.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!W.pageLoaded)return W.autostart=!0,void(g||rt.load())
it()},onUnhandledRejection:function(e){w.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),nt(e)},extend:function(){w.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return R.apply(this,t)},load:function(){W.pageLoaded=!0,R(W,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),ot||(W.blocking=!1,W.autostart&&it())},stack:function(e){return ie(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
W.callbacks[e].push(t)}}for(var r=0;r<t.length;r++){var a=t[r]
void 0===W.callbacks[a]&&(W.callbacks[a]=[]),e[a]=n(a)}}(rt),function(a){if(f&&g){if(f.QUnit&&f.QUnit.version)throw new Error("QUnit has already been defined.")
f.QUnit=a}e&&e.exports&&(e.exports=a,e.exports.QUnit=a),t&&(t.QUnit=a),void 0===(r=function(){return a}.call(t,n,t,e))||(e.exports=r),a.config.autostart=!1}(rt),function(){if(f&&g){var e=rt.config,t=Object.prototype.hasOwnProperty
rt.begin((function(){if(!t.call(e,"fixture")){var n=g.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),rt.testStart((function(){if(null!=e.fixture){var t=g.getElementById("qunit-fixture")
if("string"===a(e.fixture)){var n=g.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==f&&f.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),a=r.length,o=0;o<a;o++)if(r[o]){var i=r[o].split("="),u=n(i[0]),s=1===i.length||n(i.slice(1).join("="))
t[u]=u in t?[].concat(t[u],s):s}return t}()
rt.urlParams=t,rt.config.filter=t.filter,rt.config.module=t.module,rt.config.moduleId=[].concat(t.moduleId||[]),rt.config.testId=[].concat(t.testId||[]),!0===t.seed?rt.config.seed=Math.random().toString(36).slice(2):t.seed&&(rt.config.seed=t.seed),rt.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),rt.begin((function(){for(var e=rt.config.urlConfig,n=0;n<e.length;n++){var r=rt.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===rt.config[r]&&(rt.config[r]=t[r])}}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var lt={exports:{}}
!function(e){var t,n
t=fe,n=function(){var e=void 0!==he&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,n){return e[t]=n,this},this.clear=function(){e=Object.create(null)}},n=new t,r=new t,o=[]
o.total=0
var i=[],u=[]
function s(){n.clear(),r.clear(),i=[],u=[]}function l(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var a=r.score
a>t&&(t=a)}}return-9007199254740991===t?null:t}function c(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var a=r.length,o=-1;e&&++o<a;)e=e[r[o]]
return e}function d(e){return"object"===a(e)}var p=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],a=1;a<t;){var o=a+1
n=a,o<t&&e[o].score<e[a].score&&(n=o),e[n-1>>1]=e[n],a=1+(n<<1)}for(var i=n-1>>1;n>0&&r.score<e[i].score;i=(n=i)-1>>1)e[n]=e[i]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var a=r-1>>1;r>0&&n.score<e[a].score;a=(r=a)-1>>1)e[r]=e[a]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},f=p()
return function t(a){var h={single:function(e,t,n){return"farzher"==e?{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6]}:e?(d(e)||(e=h.getPreparedSearch(e)),t?(d(t)||(t=h.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if("farzher"==e)return[{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:t?t[0]:null}]
if(!e)return o
var r=(e=h.prepareSearch(e))[0],i=n&&n.threshold||a&&a.threshold||-9007199254740991,u=n&&n.limit||a&&a.limit||9007199254740991,s=(n&&void 0!==n.allowTypo?n.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo,p=0,m=0,D=t.length
if(n&&n.keys)for(var g=n.scoreFn||l,v=n.keys,b=v.length,y=D-1;y>=0;--y){for(var F=t[y],w=new Array(b),E=b-1;E>=0;--E)(A=c(F,x=v[E]))?(d(A)||(A=h.getPrepared(A)),w[E]=s(e,A,r)):w[E]=null
w.obj=F
var C=g(w)
null!==C&&(C<i||(w.score=C,p<u?(f.add(w),++p):(++m,C>f.peek().score&&f.replaceTop(w))))}else if(n&&n.key){var x=n.key
for(y=D-1;y>=0;--y)(A=c(F=t[y],x))&&(d(A)||(A=h.getPrepared(A)),null!==(k=s(e,A,r))&&(k.score<i||(k={target:k.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:k.score,indexes:k.indexes,obj:F},p<u?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}else for(y=D-1;y>=0;--y){var A,k;(A=t[y])&&(d(A)||(A=h.getPrepared(A)),null!==(k=s(e,A,r))&&(k.score<i||(p<u?(f.add(k),++p):(++m,k.score>f.peek().score&&f.replaceTop(k)))))}if(0===p)return o
var T=new Array(p)
for(y=p-1;y>=0;--y)T[y]=f.poll()
return T.total=p+m,T},goAsync:function(t,n,r){var i=!1,u=new Promise((function(u,s){if("farzher"==t)return u([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return u(o)
var f=(t=h.prepareSearch(t))[0],m=p(),D=n.length-1,g=r&&r.threshold||a&&a.threshold||-9007199254740991,v=r&&r.limit||a&&a.limit||9007199254740991,b=(r&&void 0!==r.allowTypo?r.allowTypo:!a||void 0===a.allowTypo||a.allowTypo)?h.algorithm:h.algorithmNoTypo,y=0,F=0
function w(){if(i)return s("canceled")
var a=Date.now()
if(r&&r.keys)for(var p=r.scoreFn||l,E=r.keys,C=E.length;D>=0;--D){if(D%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(w):setTimeout(w))
for(var x=n[D],A=new Array(C),k=C-1;k>=0;--k)(B=c(x,N=E[k]))?(d(B)||(B=h.getPrepared(B)),A[k]=b(t,B,f)):A[k]=null
A.obj=x
var T=p(A)
null!==T&&(T<g||(A.score=T,y<v?(m.add(A),++y):(++F,T>m.peek().score&&m.replaceTop(A))))}else if(r&&r.key)for(var N=r.key;D>=0;--D){if(D%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(w):setTimeout(w));(B=c(x=n[D],N))&&(d(B)||(B=h.getPrepared(B)),null!==(R=b(t,B,f))&&(R.score<g||(R={target:R.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:R.score,indexes:R.indexes,obj:x},y<v?(m.add(R),++y):(++F,R.score>m.peek().score&&m.replaceTop(R)))))}else for(;D>=0;--D){if(D%1e3==0&&Date.now()-a>=10)return void(e?setImmediate(w):setTimeout(w))
var B,R;(B=n[D])&&(d(B)||(B=h.getPrepared(B)),null!==(R=b(t,B,f))&&(R.score<g||(y<v?(m.add(R),++y):(++F,R.score>m.peek().score&&m.replaceTop(R)))))}if(0===y)return u(o)
for(var _=new Array(y),S=y-1;S>=0;--S)_[S]=m.poll()
_.total=y+F,u(_)}e?setImmediate(w):w()}))
return u.cancel=function(){i=!0},u},highlight:function(e,t,n){if("function"==typeof t)return h.highlightCallback(e,t)
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
return void 0!==t||(t=h.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,o=r.length,s=0,l=0,c=0,d=0;;){if(n===r[l]){if(i[d++]=l,++s===a)break
n=e[0===c?s:c===s?s+1:c===s-1?s-1:s]}if(++l>=o)for(;;){if(s<=1)return null
if(0===c){if(n===e[--s])continue
c=s}else{if(1===c)return null
if((n=e[1+(s=--c)])===e[s])continue}l=i[(d=s)-1]+1
break}}s=0
var p=0,f=!1,m=0,D=t._nextBeginningIndexes
null===D&&(D=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target))
var g=l=0===i[0]?0:D[i[0]-1]
if(l!==o)for(;;)if(l>=o){if(s<=0){if(++p>a-2)break
if(e[p]===e[p+1])continue
l=g
continue}--s,l=D[u[--m]]}else if(e[0===p?s:p===s?s+1:p===s-1?s-1:s]===r[l]){if(u[m++]=l,++s===a){f=!0
break}++l}else l=D[l]
if(f)var v=u,b=m
else v=i,b=d
for(var y=0,F=-1,w=0;w<a;++w)F!==(l=v[w])-1&&(y-=l),F=l
for(f?0!==p&&(y+=-20):(y*=1e3,0!==c&&(y+=-20)),y-=o-a,t.score=y,t.indexes=new Array(b),w=b-1;w>=0;--w)t.indexes[w]=v[w]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,a=e.length,o=r.length,s=0,l=0,c=0;;){if(n===r[l]){if(i[c++]=l,++s===a)break
n=e[s]}if(++l>=o)return null}s=0
var d=!1,p=0,f=t._nextBeginningIndexes
if(null===f&&(f=t._nextBeginningIndexes=h.prepareNextBeginningIndexes(t.target)),(l=0===i[0]?0:f[i[0]-1])!==o)for(;;)if(l>=o){if(s<=0)break;--s,l=f[u[--p]]}else if(e[s]===r[l]){if(u[p++]=l,++s===a){d=!0
break}++l}else l=f[l]
if(d)var m=u,D=p
else m=i,D=c
for(var g=0,v=-1,b=0;b<a;++b)v!==(l=m[b])-1&&(g-=l),v=l
for(d||(g*=1e3),g-=o-a,t.score=g,t.indexes=new Array(D),b=D-1;b>=0;--b)t.indexes[b]=m[b]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),a=0;a<t;++a)n[a]=r.charCodeAt(a)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,a=!1,o=!1,i=0;i<t;++i){var u=e.charCodeAt(i),s=u>=65&&u<=90,l=s||u>=97&&u<=122||u>=48&&u<=57,c=s&&!a||!o||!l
a=s,o=l,c&&(n[r++]=i)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=h.prepareBeginningIndexes(e),r=[],a=n[0],o=0,i=0;i<t;++i)a>i?r[i]=a:(a=n[++o],r[i]=void 0===a?t:a)
return r},cleanup:s,new:t}
return h}()},e.exports?e.exports=n():t.fuzzysort=n()}(lt)
var ct=lt.exports,dt={failedTests:[],defined:0,completed:0}
function pt(e){return e?(""+e).replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(f&&g){var e=rt.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,a=T({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
rt.on("runStart",(function(e){dt.defined=e.testCounts.total})),rt.begin((function(t){!function(t){var n,i,u,s,c,d,h,b,E=C("qunit")
E&&(E.setAttribute("role","main"),E.innerHTML="<h1 id='qunit-header'>"+pt(g.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(n=rt.config.testId)||n.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+pt(n.join(", "))+" <a id='qunit-clearFilter' href='"+pt(a)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(i=C("qunit-header"))&&(i.innerHTML="<a href='"+pt(a)+"'>"+i.innerHTML+"</a> "),(u=C("qunit-banner"))&&(u.className=""),h=C("qunit-tests"),(b=C("qunit-testresult"))&&b.parentNode.removeChild(b),h&&(h.innerHTML="",(b=g.createElement("p")).id="qunit-testresult",b.className="result",h.parentNode.insertBefore(b,h),b.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=C("qunit-testresult-controls")),c&&c.appendChild(((d=g.createElement("button")).id="qunit-abort-tests-button",d.innerHTML="Abort",p(d,"click",x),d)),(s=C("qunit-userAgent"))&&(s.innerHTML="",s.appendChild(g.createTextNode("QUnit "+rt.version+"; "+v.userAgent))),function(t){var n,a,i,u,s,c=C("qunit-testrunner-toolbar")
if(c){c.appendChild(((s=g.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,a="",o=0;o<n.length;o++){var i=e.urlConfig[o]
"string"==typeof i&&(i={id:i,label:i})
var u=pt(i.id),s=pt(i.tooltip)
if(i.value&&"string"!=typeof i.value){if(a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'>"+i.label+": </label><select id='qunit-urlconfig-"+u+"' name='"+u+"' title='"+s+"'><option></option>",Array.isArray(i.value))for(var l=0;l<i.value.length;l++)a+="<option value='"+(u=pt(i.value[l]))+"'"+(e[i.id]===i.value[l]?(t=!0)&&" selected='selected'":"")+">"+u+"</option>"
else for(var c in i.value)r.call(i.value,c)&&(a+="<option value='"+pt(c)+"'"+(e[i.id]===c?(t=!0)&&" selected='selected'":"")+">"+pt(i.value[c])+"</option>")
e[i.id]&&!t&&(a+="<option value='"+(u=pt(e[i.id]))+"' selected='selected' disabled='disabled'>"+u+"</option>"),a+="</select>"}else a+="<label for='qunit-urlconfig-"+u+"' title='"+s+"'><input id='qunit-urlconfig-"+u+"' name='"+u+"' type='checkbox'"+(i.value?" value='"+pt(i.value)+"'":"")+(e[i.id]?" checked='checked'":"")+" title='"+s+"' />"+pt(i.label)+"</label>"}return a}(),F(s,"qunit-url-config"),D(s.getElementsByTagName("input"),"change",k),D(s.getElementsByTagName("select"),"change",k),s))
var d=g.createElement("span")
d.id="qunit-toolbar-filters",d.appendChild((n=g.createElement("form"),a=g.createElement("label"),i=g.createElement("input"),u=g.createElement("button"),F(n,"qunit-filter"),a.innerHTML="Filter: ",i.type="text",i.value=e.filter||"",i.name="filter",i.id="qunit-filter-input",u.innerHTML="Go",a.appendChild(i),n.appendChild(a),n.appendChild(g.createTextNode(" ")),n.appendChild(u),p(n,"submit",A),n)),d.appendChild(function(t){var n=null
if(o={options:t.modules.slice(),selectedMap:new y,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(n.keys()).sort().join(",")}},e.moduleId.length)for(var r=0;r<t.modules.length;r++){var a=t.modules[r];-1!==e.moduleId.indexOf(a.moduleId)&&o.selectedMap.set(a.moduleId,a.name)}n=new y(o.selectedMap)
var i=g.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",p(i,"input",x),p(i,"input",C),p(i,"focus",C),p(i,"click",C)
var u=g.createElement("label")
u.htmlFor="qunit-modulefilter-search",u.textContent="Module:"
var s=g.createElement("span")
s.id="qunit-modulefilter-search-container",s.appendChild(i)
var c=g.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",p(c,"click",N)
var d=g.createElement("button")
d.textContent="Reset",d.type="reset",d.title="Restore the previous module selection"
var h=g.createElement("button")
h.textContent="Select none",h.type="button",h.title="Clear the current module selection",p(h,"click",(function(){o.selectedMap.clear(),k(),x()}))
var D=g.createElement("span")
D.id="qunit-modulefilter-actions",D.appendChild(c),D.appendChild(d),n.size&&D.appendChild(h)
var v=g.createElement("ul")
v.id="qunit-modulefilter-dropdown-list"
var b=g.createElement("div")
b.id="qunit-modulefilter-dropdown",b.style.display="none",b.appendChild(D),b.appendChild(v),p(b,"change",k),s.appendChild(b),k()
var F,E=g.createElement("form")
function C(){function e(t){var n=E.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&i.focus(),b.style.display="none",m(g,"click",e),m(g,"keydown",e),i.value="",x())}"none"===b.style.display&&(x(),b.style.display="block",p(g,"click",e),p(g,"keydown",e))}function x(){f.clearTimeout(F),F=f.setTimeout((function(){v.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach((function(e,n){t+=B(n,e,!0)}))
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=B(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):ct.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)}))}function k(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),w(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=n,i.title="Type to search through and reduce the list.",d.disabled=!o.isDirty(),h.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(u),E.appendChild(g.createTextNode(" ")),E.appendChild(s),p(E,"submit",A),p(E,"reset",(function(){o.selectedMap=new y(n),k(),x()})),E}(t))
var h=g.createElement("div")
h.className="clearfix",c.appendChild(d),c.appendChild(h)}}(t)}(t)})),rt.on("runEnd",(function(t){var n,r,a,o=C("qunit-banner"),i=C("qunit-tests"),u=C("qunit-abort-tests-button"),s=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",s,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",S(dt.failedTests)].join("")
if(u&&u.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<i.children.length;c++)""!==(n=i.children[c]).className&&"running"!==n.className||(n.className="aborted",a=n.getElementsByTagName("ol")[0],(r=g.createElement("li")).className="fail",r.innerHTML="Test aborted.",a.appendChild(r))}!o||u&&!1!==u.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),u&&u.parentNode.removeChild(u),i&&(C("qunit-testresult-display").innerHTML=l),e.altertitle&&g.title&&(g.title=["failed"===t.status?"✖":"✔",g.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&f.scrollTo&&f.scrollTo(0,0)})),rt.testStart((function(e){var t,n
_(e.name,e.testId,e.module),(t=C("qunit-testresult-display"))&&(F(t,"running"),n=rt.config.reorder&&e.previousFailure,t.innerHTML=[I(dt),n?"Rerunning previously failed test: <br />":"Running: ",O(e.name,e.module),S(dt.failedTests)].join(""))})),rt.log((function(e){var t=C("qunit-test-output-"+e.testId)
if(t){var n,a,o,i=pt(e.message)||(e.result?"okay":"failed")
i="<span class='test-message'>"+i+"</span>",i+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var u=!1
!e.result&&r.call(e,"expected")?(n=e.negative?"NOT "+rt.dump.parse(e.expected):rt.dump.parse(e.expected),a=rt.dump.parse(e.actual),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+pt(n)+"</pre></td></tr>",a!==n?(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+pt(a)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(u=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(u=P(o=rt.diff(n,a)).length!==P(n).length+P(a).length),u&&(i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+rt.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+pt(T({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":i+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(i+="<tr class='test-source'><th>Source: </th><td><pre>"+pt(e.source)+"</pre></td></tr>"),i+="</table>"):!e.result&&e.source&&(i+="<table><tr class='test-source'><th>Source: </th><td><pre>"+pt(e.source)+"</pre></td></tr></table>")
var s=t.getElementsByTagName("ol")[0],l=g.createElement("li")
l.className=e.result?"pass":"fail",l.innerHTML=i,s.appendChild(l)}})),rt.testDone((function(r){var a=C("qunit-tests"),o=C("qunit-test-output-"+r.testId)
if(a&&o){var i
E(o,"running"),i=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var u=o.getElementsByTagName("ol")[0],s=r.passed,l=r.failed,c=r.failed>0?r.todo:!r.todo
c?F(u,"qunit-collapsed"):(dt.failedTests.push(r.testId),e.collapse&&(n?F(u,"qunit-collapsed"):n=!0))
var d=o.firstChild,f=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+s+"</b>, ":""
if(d.innerHTML+=" <b class='counts'>("+f+r.assertions.length+")</b>",dt.completed++,r.skipped){o.className="skipped"
var h=g.createElement("em")
h.className="qunit-skipped-label",h.innerHTML="skipped",o.insertBefore(h,d)}else{if(p(d,"click",(function(){w(u,"qunit-collapsed")})),o.className=c?"pass":"fail",r.todo){var m=g.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,d)}var D=g.createElement("span")
D.className="runtime",D.innerHTML=r.runtime+" ms",o.insertBefore(D,u)}if(r.source){var v=g.createElement("p")
v.innerHTML="<strong>Source: </strong>"+pt(r.source),F(v,"qunit-source"),c&&F(v,"qunit-collapsed"),p(d,"click",(function(){w(v,"qunit-collapsed")})),o.appendChild(v)}e.hidepassed&&("passed"===i||r.skipped)&&(t.push(o),a.removeChild(o))}})),rt.on("error",(function(e){var t=_("global failure")
if(t){var n=pt(M(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+pt(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],a=g.createElement("li")
a.className="fail",a.innerHTML=n,r.appendChild(a),t.className="fail"}}))
var i,u=(i=f.phantom)&&i.version&&i.version.major>0
u&&h.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),u||"complete"!==g.readyState?p(f,"load",rt.load):rt.load()
var s=f.onerror
f.onerror=function(t,n,r,a,o){var i=!1
if(s){for(var u=arguments.length,l=new Array(u>5?u-5:0),c=5;c<u;c++)l[c-5]=arguments[c]
i=s.call.apply(s,[this,t,n,r,a,o].concat(l))}if(!0!==i){if(e.current&&e.current.ignoreGlobalErrors)return!0
var d=o||new Error(t)
!d.stack&&n&&r&&(d.stack="".concat(n,":").concat(r)),rt.onUncaughtException(d)}return i},f.addEventListener("unhandledrejection",(function(e){rt.onUncaughtException(e.reason)}))}function d(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function p(e,t,n){e.addEventListener(t,n,!1)}function m(e,t,n){e.removeEventListener(t,n,!1)}function D(e,t,n){for(var r=e.length;r--;)p(e[r],t,n)}function b(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function F(e,t){b(e,t)||(e.className+=(e.className?" ":"")+t)}function w(e,t,n){n||void 0===n&&!b(e,t)?F(e,t):E(e,t)}function E(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=d(n)}function C(e){return g.getElementById&&g.getElementById(e)}function x(){var e=C("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),rt.config.queue.length=0,!1}function A(e){var t=C("qunit-filter-input")
return t.value=d(t.value),N(),e&&e.preventDefault&&e.preventDefault(),!1}function k(){var n,r=this,a={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,a[r.name]=n
var o=T(a)
if("hidepassed"===r.name&&"replaceState"in f.history){rt.urlParams[r.name]=n,e[r.name]=n||!1
var i=C("qunit-tests")
if(i){var u=i.children.length,s=i.children
if(r.checked){for(var l=0;l<u;l++){var d=s[l],p=d?d.className:"",h=p.indexOf("pass")>-1,m=p.indexOf("skipped")>-1;(h||m)&&t.push(d)}var D,g=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=c(e))){n&&(e=n)
var r=0,a=function(){}
return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw o}}}}(t)
try{for(g.s();!(D=g.n()).done;){var v=D.value
i.removeChild(v)}}catch(e){g.e(e)}finally{g.f()}}else for(var b;null!=(b=t.pop());)i.appendChild(b)}f.history.replaceState(null,"",o)}else f.location=o}function T(e){var t="?",n=f.location
for(var a in e=R(R({},rt.urlParams),e))if(r.call(e,a)&&void 0!==e[a])for(var o=[].concat(e[a]),i=0;i<o.length;i++)t+=encodeURIComponent(a),!0!==o[i]&&(t+="="+encodeURIComponent(o[i])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function N(){var e=C("qunit-filter-input").value
f.location=T({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function B(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+pt(e)+'"'+(n?' checked="checked"':"")+" />"+pt(t)+"</label></li>"}function _(e,t,n){var r=C("qunit-tests")
if(r){var a=g.createElement("strong")
a.innerHTML=O(e,n)
var o=g.createElement("li")
if(o.appendChild(a),void 0!==t){var i=g.createElement("a")
i.innerHTML="Rerun",i.href=T({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(i)}var u=g.createElement("ol")
return u.className="qunit-assert-list",o.appendChild(u),r.appendChild(o),o}}function S(e){return 0===e.length?"":["<br /><a href='"+pt(T({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function O(e,t){var n=""
return t&&(n="<span class='module-name'>"+pt(t)+"</span>: "),n+"<span class='test-name'>"+pt(e)+"</span>"}function I(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function P(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),rt.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===n&&(n=!0)
var a=this.diffCommonPrefix(e,t),o=e.substring(0,a)
e=e.substring(a),t=t.substring(a),a=this.diffCommonSuffix(e,t)
var i=e.substring(e.length-a)
e=e.substring(0,e.length-a),t=t.substring(0,t.length-a)
var u=this.diffCompute(e,t,n,r)
return o&&u.unshift([0,o]),i&&u.push([0,i]),this.diffCleanupMerge(u),u},e.prototype.diffCleanupEfficiency=function(e){var n,r,a,o,i,u,s,l,c
for(n=!1,r=[],a=0,o=null,i=0,u=!1,s=!1,l=!1,c=!1;i<e.length;)0===e[i][0]?(e[i][1].length<4&&(l||c)?(r[a++]=i,u=l,s=c,o=e[i][1]):(a=0,o=null),l=c=!1):(e[i][0]===t?c=!0:l=!0,o&&(u&&s&&l&&c||o.length<2&&u+s+l+c===3)&&(e.splice(r[a-1],0,[t,o]),e[r[a-1]+1][0]=1,a--,o=null,u&&s?(l=c=!0,a=0):(i=--a>0?r[a-1]:-1,l=c=!1),n=!0)),i++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){for(var n=[],r=0;r<e.length;r++){var a=e[r][0],o=e[r][1]
switch(a){case 1:n[r]="<ins>"+pt(o)+"</ins>"
break
case t:n[r]="<del>"+pt(o)+"</del>"
break
case 0:n[r]="<span>"+pt(o)+"</span>"}}return n.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(o,n)===t.substring(o,n)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,a,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(a=0,n=r=Math.min(e.length,t.length),o=0;a<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=a=n:r=n,n=Math.floor((r-a)/2+a)
return n},e.prototype.diffCompute=function(e,n,r,a){var o,i,u,s,l,c,d,p,f,h,m,D
return e?n?(i=e.length>n.length?e:n,u=e.length>n.length?n:e,-1!==(s=i.indexOf(u))?(o=[[1,i.substring(0,s)],[0,u],[1,i.substring(s+u.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===u.length?[[t,e],[1,n]]:(l=this.diffHalfMatch(e,n))?(c=l[0],p=l[1],d=l[2],f=l[3],h=l[4],m=this.DiffMain(c,d,r,a),D=this.DiffMain(p,f,r,a),m.concat([[0,h]],D)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,a):this.diffBisect(e,n,a)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,a,o,i,u,s,l,c,d
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function p(e,t,n){var r,o,i,u,s,l,c,d,p
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,i="";-1!==(o=t.indexOf(r,o+1));)u=a.diffCommonPrefix(e.substring(n),t.substring(o)),s=a.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),i.length<s+u&&(i=t.substring(o-s,o)+t.substring(o,o+u),l=e.substring(0,n-s),c=e.substring(n+u),d=t.substring(0,o-s),p=t.substring(o+u))
return 2*i.length>=e.length?[l,c,d,p,i]:null}return a=this,l=p(n,r,Math.ceil(n.length/4)),c=p(n,r,Math.ceil(n.length/2)),l||c?(d=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=d[0],s=d[1],u=d[2],i=d[3]):(u=d[0],i=d[1],o=d[2],s=d[3]),[o,s,u,i,d[4]]):null},e.prototype.diffLineMode=function(e,n,r){var a,o,i,u,s,l,c,d,p
for(e=(a=this.diffLinesToChars(e,n)).chars1,n=a.chars2,i=a.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,i),this.diffCleanupSemantic(o),o.push([0,""]),u=0,l=0,s=0,d="",c="";u<o.length;){switch(o[u][0]){case 1:s++,c+=o[u][1]
break
case t:l++,d+=o[u][1]
break
case 0:if(l>=1&&s>=1){for(o.splice(u-l-s,l+s),u=u-l-s,p=(a=this.DiffMain(d,c,!1,r)).length-1;p>=0;p--)o.splice(u,0,a[p])
u+=a.length}s=0,l=0,d="",c=""}u++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var a,o,i,u,s,l,c,d,p,f,h,m,D,g,v,b,y,F,w,E,C,x,A
for(a=e.length,o=n.length,u=i=Math.ceil((a+o)/2),s=2*i,l=new Array(s),c=new Array(s),d=0;d<s;d++)l[d]=-1,c[d]=-1
for(l[u+1]=0,c[u+1]=0,f=(p=a-o)%2!=0,h=0,m=0,D=0,g=0,C=0;C<i&&!(Date.now()>r);C++){for(x=-C+h;x<=C-m;x+=2){for(b=u+x,w=(y=x===-C||x!==C&&l[b-1]<l[b+1]?l[b+1]:l[b-1]+1)-x;y<a&&w<o&&e.charAt(y)===n.charAt(w);)y++,w++
if(l[b]=y,y>a)m+=2
else if(w>o)h+=2
else if(f&&(v=u+p-x)>=0&&v<s&&-1!==c[v]&&y>=(F=a-c[v]))return this.diffBisectSplit(e,n,y,w,r)}for(A=-C+D;A<=C-g;A+=2){for(v=u+A,E=(F=A===-C||A!==C&&c[v-1]<c[v+1]?c[v+1]:c[v-1]+1)-A;F<a&&E<o&&e.charAt(a-F-1)===n.charAt(o-E-1);)F++,E++
if(c[v]=F,F>a)g+=2
else if(E>o)D+=2
else if(!f&&(b=u+p-A)>=0&&b<s&&-1!==l[b]&&(w=u+(y=l[b])-b,y>=(F=a-F)))return this.diffBisectSplit(e,n,y,w,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,a){var o,i,u,s,l,c
return o=e.substring(0,n),u=t.substring(0,r),i=e.substring(n),s=t.substring(r),l=this.DiffMain(o,u,!1,a),c=this.DiffMain(i,s,!1,a),l.concat(c)},e.prototype.diffCleanupSemantic=function(e){for(var n,r,a,o,i=!1,u=[],s=0,l=null,c=0,d=0,p=0,f=0,h=0;c<e.length;)0===e[c][0]?(u[s++]=c,d=f,p=h,f=0,h=0,l=e[c][1]):(1===e[c][0]?f+=e[c][1].length:h+=e[c][1].length,l&&l.length<=Math.max(d,p)&&l.length<=Math.max(f,h)&&(e.splice(u[s-1],0,[t,l]),e[u[s-1]+1][0]=1,s--,c=--s>0?u[s-1]:-1,d=0,p=0,f=0,h=0,l=null,i=!0)),c++
for(i&&this.diffCleanupMerge(e),c=1;c<e.length;)e[c-1][0]===t&&1===e[c][0]&&(n=e[c-1][1],r=e[c][1],(a=this.diffCommonOverlap(n,r))>=(o=this.diffCommonOverlap(r,n))?(a>=n.length/2||a>=r.length/2)&&(e.splice(c,0,[0,r.substring(0,a)]),e[c-1][1]=n.substring(0,n.length-a),e[c+1][1]=r.substring(a),c++):(o>=n.length/2||o>=r.length/2)&&(e.splice(c,0,[0,n.substring(0,o)]),e[c-1][0]=1,e[c-1][1]=r.substring(0,r.length-o),e[c+1][0]=t,e[c+1][1]=n.substring(o),c++),c++),c++},e.prototype.diffCommonOverlap=function(e,t){var n=e.length,r=t.length
if(0===n||0===r)return 0
n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n))
var a=Math.min(n,r)
if(e===t)return a
for(var o=0,i=1;;){var u=e.substring(a-i),s=t.indexOf(u)
if(-1===s)return o
i+=s,0!==s&&e.substring(a-i)!==t.substring(0,i)||(o=i,i++)}},e.prototype.diffLinesToChars=function(e,t){var r=[],a={}
function o(e){for(var t="",o=0,i=-1,u=r.length;i<e.length-1;){-1===(i=e.indexOf("\n",o))&&(i=e.length-1)
var s=e.substring(o,i+1)
o=i+1,n.call(a,s)?t+=String.fromCharCode(a[s]):(t+=String.fromCharCode(u),a[s]=u,r[u++]=s)}return t}return r[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){for(var n=0;n<e.length;n++){for(var r=e[n][1],a=[],o=0;o<r.length;o++)a[o]=t[r.charCodeAt(o)]
e[n][1]=a.join("")}},e.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var n=0,r=0,a=0,o="",i="";n<e.length;)switch(e[n][0]){case 1:a++,i+=e[n][1],n++
break
case t:r++,o+=e[n][1],n++
break
case 0:if(r+a>1){if(0!==r&&0!==a){var u=this.diffCommonPrefix(i,o)
0!==u&&(n-r-a>0&&0===e[n-r-a-1][0]?e[n-r-a-1][1]+=i.substring(0,u):(e.splice(0,0,[0,i.substring(0,u)]),n++),i=i.substring(u),o=o.substring(u)),0!==(u=this.diffCommonSuffix(i,o))&&(e[n][1]=i.substring(i.length-u)+e[n][1],i=i.substring(0,i.length-u),o=o.substring(0,o.length-u))}0===r?e.splice(n-a,r+a,[1,i]):0===a?e.splice(n-r,r+a,[t,o]):e.splice(n-r-a,r+a,[t,o],[1,i]),n=n-r-a+(r?1:0)+(a?1:0)+1}else 0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++
a=0,r=0,o="",i=""}""===e[e.length-1][1]&&e.pop()
var s=!1
for(n=1;n<e.length-1;){if(0===e[n-1][0]&&0===e[n+1][0]){var l=e[n][1]
l.substring(l.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),s=!0):l.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),s=!0)}n++}s&&this.diffCleanupMerge(e)},function(t,n){var r,a
return a=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(a),r.diffPrettyHtml(a)}}()}()}}])
