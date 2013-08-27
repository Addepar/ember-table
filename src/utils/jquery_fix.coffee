###
jQuery.browser shim that makes HT working with jQuery 1.8+
###
unless jQuery.browser
  (->
    matched = undefined
    browser = undefined

    #
    #  * Copyright 2011, John Resig
    #  * Dual licensed under the MIT or GPL Version 2 licenses.
    #  * http://jquery.org/license
    #
    jQuery.uaMatch = (ua) ->
      ua = ua.toLowerCase()
      match = /(chrome)[ \/]([\w.]+)/.exec(ua) or /(webkit)[ \/]([\w.]+)/.exec(ua) or /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) or /(msie) ([\w.]+)/.exec(ua) or ua.indexOf("compatible") < 0 and /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) or []
      browser: match[1] or ""
      version: match[2] or "0"

    matched = jQuery.uaMatch(navigator.userAgent)
    browser = {}
    if matched.browser
      browser[matched.browser] = true
      browser.version = matched.version

    # Chrome is Webkit, but Webkit is also Safari.
    if browser.chrome
      browser.webkit = true
    else browser.safari = true  if browser.webkit
    res = jQuery.browser = browser
    return res
  )()