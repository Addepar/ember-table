(($) ->
  $.getScrollbarWidth = ->
    scrollbarWidth = 0
    unless scrollbarWidth
      # Thanks to http://chris-spittles.co.uk/?p=531
      $inner = jQuery('<div style="width: 100%; height:200px;">test</div>')
      $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner)
      inner = $inner[0]
      outer = $outer[0]

      jQuery('body').append(outer)
      width1 = inner.offsetWidth
      $outer.css('overflow', 'scroll')
      width2 = outer.clientWidth
      $outer.remove()

      scrollbarWidth = (width1 - width2)
    scrollbarWidth
) jQuery
