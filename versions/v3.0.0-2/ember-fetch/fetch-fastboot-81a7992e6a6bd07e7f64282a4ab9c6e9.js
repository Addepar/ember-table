define("fetch",["exports"],function(e){var t=/^https?:\/\//,r=/^\/\//,o=FastBoot.require("abortcontroller-polyfill/dist/cjs-ponyfill"),n=FastBoot.require("node-fetch")
function s(e){if(null===e)throw new Error("Trying to fetch with relative url but ember-fetch hasn't finished loading FastBootInfo, see details at https://github.com/ember-cli/ember-fetch#relative-url")
const t="undefined:"===e.protocol?"http:":e.protocol
return[e.get("host"),t]}function f(e){if(r.test(e)){let[t]=s(i)
e=t+e}else if(!t.test(e)){let[t,r]=s(i)
e=r+"//"+t+e}return e}var i=null
e.default=function(e,t){return e&&e.href?e.url=f(e.href):"string"==typeof e&&(e=f(e)),n(e,t)},e.setupFastboot=function(e){i=e},e.Request=class extends n.Request{constructor(e,t){"string"==typeof e?e=f(e):e&&e.href&&(e=f(e.href)),super(e,t)}},e.Headers=n.Headers,e.Response=n.Response,e.AbortController=o.AbortController}),define("fetch/ajax",["exports"],function(){throw new Error("You included `fetch/ajax` but it was renamed to `ember-fetch/ajax`")})
