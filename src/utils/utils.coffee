###*
 * Multi Item View Collection View
 * @class
 * @alias Ember.Table.MultiItemViewCollectionView
 ###
Ember.MultiItemViewCollectionView =
Ember.CollectionView.extend Ember.AddeparMixins.StyleBindingsMixin,
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

###*
* Table Row Array Proxy
* @class
* @alias Ember.Table.RowArrayProxy
###
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

# A mixin to enable soring in ember tables by clicking on the header of columns
# The user can define a compare values method for each column to determine how the values are sorted
Ember.Table.SimpleSortMixin = Ember.Mixin.create
  sortColumn: null
  descending: false

  performSort: (->
    sortColumn = @get('sortColumn')
    return unless sortColumn?
    content = @get('content')
    descending = @get('descending')
    newContent = content.sort (a,b) ->
        if descending
            sortColumn.compareCellValues b, a
        else
            sortColumn.compareCellValues a, b
    newContent = newContent.slice 0
    @set('content', newContent)
    return
  ).observes('sortColumn', 'descending')

  actions:
    sortByColumn : (column) ->
        if column is @get('sortColumn')
            @toggleProperty('descending')
        else if column.get 'isSortable'
            @setProperties({'sortColumn': column, 'descending' : false})
        return

