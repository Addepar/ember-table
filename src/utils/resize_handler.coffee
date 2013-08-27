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

  endResize: Ember.computed ->
    (event) ->
      return if @isDestroyed
      @set 'resizing', no
      @onResizeEnd?(event)

  # Browser only allows us to listen to windows resize. This function let us
  # resizeStart and resizeEnd event
  handleWindowResize: (event) ->
    # This is important, because we want to ignoring bubbling resize events
    return unless event.target is window
    if not @get 'resizing'
      @set 'resizing', yes
      @onResizeStart?(event)
    @onResize?(event)
    Ember.run.debounce this, @get('endResize'), event, @get('resizeEndDelay')

  # =====
  # Setup/teardown event handlers
  # =====

  didInsertElement: ->
    @_super()
    @_setupDocumentHandlers()

  willDestroyElement: ->
    @_removeDocumentHandlers()
    @_super()

  # Because jQuery.off will unbind all event handlers using a function that
  # is proxied using jQuery.proxy(), resize events are namespaced with the
  # id of the Ember view. See http://api.jquery.com/off/

  _setupDocumentHandlers: ->
    return if @_resizeHandler
    @_resizeHandler = jQuery.proxy(@get('handleWindowResize'), @)
    jQuery(window).on "resize.#{this.elementId}", @_resizeHandler

  _removeDocumentHandlers: ->
    jQuery(window).off "resize.#{this.elementId}", @_resizeHandler
    @_resizeHandler = null
