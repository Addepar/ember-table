###*
 * Multi Item View Collection View
 * @class
 * @alias Ember.Table.MultiItemViewCollectionView
 ###
Ember.MultiItemViewCollectionView =
Ember.CollectionView.extend Ember.StyleBindingsMixin,
  styleBindings:  'width'
  itemViewClassField: null
  createChildView: (view, attrs) ->
    itemViewClassField = @get 'itemViewClassField'
    itemViewClass = attrs.content.get(itemViewClassField)
    if typeof itemViewClass is 'string'
      itemViewClass = Ember.get Ember.lookup, itemViewClass
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

  willDestroy: ->
    @$()?.unbind 'touchmove'
    @_super()
