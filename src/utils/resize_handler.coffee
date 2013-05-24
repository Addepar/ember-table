# The resize handler will fire onWindowResize when the window resize ends
Ember.ResizeHandler = Ember.Mixin.create

  # Time in ms to debounce before triggering resizeEnd
  resizeEndDelay: 200
  resizing: no

  # This hook allows you to do any preparation to the view prior to any DOM
  # resize
  onResizeStart:  Ember.K
  # This hook allows you to clean up any sizing preparation
  onResizeEnd:    Ember.K
  # This hook allows you to listen to the window resizing
  onResize:       Ember.K

  # A debounced function to trigger the resizeEnd event. This is necessary
  # because we only want to fire resizeEnd if we have not received recent
  # resize event
  debounceResizeEnd: Ember.computed ->
    debounce (event) =>
      return if @isDestroyed
      @set 'resizing', no
      @onResizeEnd?(event)
    , @get('resizeEndDelay')
  .property('resizeEndDelay')

  didInsertElement: ->
    @_super()
    return if @_resizeHandler
    @_resizeHandler = (event) =>
      if not @get 'resizing'
        @set 'resizing', yes
        @onResizeStart?(event)
      @onResize?(event)
      @get('debounceResizeEnd')(event)
    $(window).resize @_resizeHandler

  willDestroyElement: ->
    $(window).unbind 'resize', @_resizeHandler
    delete @_resizeHandler
    @_super()

# Copied from underscore.js
debounce = (func, wait, immediate) ->
  timeout = result = null
  return ->
    context = this
    args = arguments
    later = ->
      timeout = null
      if !immediate
        result = func.apply(context, args)
    callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if callNow
      result = func.apply(context, args)
    return result
