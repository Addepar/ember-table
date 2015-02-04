Ember.MultiItemViewCollectionView =
Ember.CollectionView.extend Ember.AddeparMixins.StyleBindingsMixin,
  styleBindings:  'width'
  itemViewClassField: null
  createChildView: (view, attrs) ->
    itemViewClassField = @get 'itemViewClassField'
    itemViewClass = attrs.content.get(itemViewClassField)
    if typeof itemViewClass is 'string'
      if /[A-Z]+/.exec itemViewClass
        # Global var lookup - 'App.MessagePreviewView'
        itemViewClass = Ember.get Ember.lookup, itemViewClass
      else
        # Ember CLI Style lookup - 'message/preview'
        itemViewClass = @container.lookupFactory "view:#{itemViewClass}"

    @_super(itemViewClass, attrs)

Ember.MouseWheelHandlerMixin = Ember.Mixin.create
  onMouseWheel: Ember.K
  didInsertElement: ->
    @_super()
    @$().bind 'mousewheel', (event, delta, deltaX, deltaY) =>
      Ember.run this, @onMouseWheel, event, delta, deltaX, deltaY
  willDestroyElement: ->
    @$()?.unbind 'mousewheel'
    @_super()

Ember.ScrollHandlerMixin = Ember.Mixin.create
  onScroll: Ember.K
  scrollElementSelector: ''
  didInsertElement: ->
    @_super()
    @$(@get('scrollElementSelector')).bind 'scroll', (event) =>
      Ember.run this, @onScroll, event
  willDestroyElement: ->
    @$(@get('scrollElementSelector'))?.unbind 'scroll'
    @_super()

Ember.TouchMoveHandlerMixin = Ember.Mixin.create
  onTouchMove: Ember.K
  didInsertElement: ->
    @_super()
    startX = startY = 0

    @$().bind 'touchstart', (event) ->
      startX = event.originalEvent.targetTouches[0].pageX
      startY = event.originalEvent.targetTouches[0].pageY
      return

    @$().bind 'touchmove', (event) =>
      newX = event.originalEvent.targetTouches[0].pageX
      newY = event.originalEvent.targetTouches[0].pageY
      deltaX = -(newX - startX)
      deltaY = -(newY - startY)
      Ember.run this, @onTouchMove, event, deltaX, deltaY
      startX = newX
      startY = newY
      return

  willDestroyElement: ->
    @$().unbind 'touchstart'
    @$().unbind 'touchmove'
    @_super()

Ember.Table.RowArrayController = Ember.ArrayController.extend
  itemController: null
  content: null
  rowContent: Ember.computed( -> []).property()

  controllerAt: (idx, object, controllerClass) ->
    container = @get 'container'
    subControllers = @get '_subControllers'
    subController = subControllers[idx]

    return subController if subController
    subController = @get('itemController').create
      target: this
      parentController: @get('parentController') or this
      content: object
    subControllers[idx] = subController;
    return subController;

# HACK: We want the horizontal scroll to show on mouse enter and leave.
Ember.Table.ShowHorizontalScrollMixin = Ember.Mixin.create
  mouseEnter: (event) ->
    $tablesContainer = $(event.target).parents('.ember-table-tables-container')
    $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal')
    $horizontalScroll.addClass('antiscroll-scrollbar-shown')

  mouseLeave: (event) ->
    $tablesContainer = $(event.target).parents('.ember-table-tables-container')
    $horizontalScroll = $tablesContainer.find('.antiscroll-scrollbar-horizontal')
    $horizontalScroll.removeClass('antiscroll-scrollbar-shown')

# Gives views access to the table component. With the current architecture,
# this is necessary because views need access to the component's properties
# (like height and columnMode) and may even need to call component functions
# (trigger refresh layout).
#
# It is possible to override this behavior by passing your own tableComponent
# to the views instead.
Ember.Table.RegisterTableComponentMixin = Ember.Mixin.create
  tableComponent: null

  init: ->
    unless @get('tableComponent')
      @set('tableComponent', @nearestWithProperty('isEmberTable'))
    @_super()
