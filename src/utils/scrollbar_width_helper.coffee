(($) ->
  $.getScrollbarWidth = ->
    scrollbarWidth = 0
    unless scrollbarWidth
      if $.browser.msie
        # Hack - Hardcoded it
        scrollbarWidth = 16
      else
        $div = $("<div />").css(
          width: 100
          height: 100
          overflow: "auto"
          position: "absolute"
          top: -1000
          left: -1000
        ).prependTo("body").append("<div />").find("div").css(
          width: "100%"
          height: 200
        )
        scrollbarWidth = 100 - $div.width()
        $div.parent().remove()
    scrollbarWidth
) jQuery