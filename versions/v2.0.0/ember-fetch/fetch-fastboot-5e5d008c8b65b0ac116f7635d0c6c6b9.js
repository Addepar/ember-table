define("fetch",["exports"],function(e){var t,o,r=/^https?:\/\//,s=/^\/\//,n=FastBoot.require("abortcontroller-polyfill/dist/cjs-ponyfill"),i=FastBoot.require("node-fetch")
function u(e,t,o){if(s.test(e))e=o+e
else if(!r.test(e)){if(!o)throw new Error("You are using using fetch with a path-relative URL, but host is missing from Fastboot request. Please set the hostWhitelist property in your environment.js.")
e=t+"//"+o+e}return e}e.default=function(e,r){return"object"==typeof e?e.url=u(e.url,o,t):e=u(e,o,t),i(e,r)},e.setupFastboot=function(e,r){o=e,t=r},e.Request=i.Request,e.Headers=i.Headers,e.Response=i.Response,e.AbortController=n.AbortController}),define("fetch/ajax",["exports"],function(){throw new Error("You included `fetch/ajax` but it was renamed to `ember-fetch/ajax`")})
