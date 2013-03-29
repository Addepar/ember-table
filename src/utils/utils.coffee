Ember.MultiItemViewCollectionView = Ember.CollectionView.extend
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
  didInsertElement: ->
    @_super()
    @$().bind 'scroll', (event) =>
      Ember.run this, @onScroll, event
  willDestroyElement: ->
    @$()?.unbind 'scroll'
    @_super()
