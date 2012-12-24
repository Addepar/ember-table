# TODO(Peter): Deprecating this. We are moving to Ebryn's ListView in the near
# future
Ember.LazyContainerView = Ember.ContainerView.extend Ember.StyleBindingsMixin,
  classNames:     'lazy-list-container'
  styleBindings:  ['height']
  content:        null
  itemViewClass:  null
  rowHeight:      null
  scrollTop:      null
  startIndex:     null

  init: ->
    @_super()
    @onNumItemsInViewportDidChange()

  height: Ember.computed ->
    @get('content.length') * @get('rowHeight')
  .property 'content.length', 'rowHeight'

  # TODO(Peter): refactor this. shouldn't hardcode to depend on parent
  numItemsInViewport: Ember.computed ->
    @get('parentView.numItemsShowing') + 1
  .property 'parentView.numItemsShowing'

  onNumItemsInViewportDidChange: Ember.observer ->
    # We are getting the class from a string e.g. "Ember.Table.Row"
    itemViewClass = Ember.get @get('itemViewClass')
    newNumViews = @get('numItemsInViewport')
    return unless itemViewClass and newNumViews
    childViews = @get 'childViews'
    oldNumViews = @get('childViews.length')
    numViewsToInsert = newNumViews - oldNumViews
    # if newNumViews < oldNumViews we need to remove some views
    if numViewsToInsert < 0
      viewsToRemove = childViews.slice(newNumViews, oldNumViews)
      childViews.removeObjects viewsToRemove
    # if oldNumViews < newNumViews we need to add more views
    else if numViewsToInsert > 0
      viewsToAdd = [0...numViewsToInsert].map ->
        itemViewClass.create()
      childViews.pushObjects viewsToAdd
  , 'numItemsInViewport', 'itemViewClass'

  # TODO(Peter): Consider making this a computed... binding logic will go
  # into the LazyItemMixin
  viewportDidChange: Ember.observer ->
    content   = @get 'content'
    views     = @get 'childViews'
    startIndex = @get 'startIndex'
    numShownViews  = Math.min @get('childViews.length'), @get('content.length')
    numChildViews = @get 'childViews.length'
    [0...numShownViews].forEach (i) =>
      itemIndex = startIndex + i
      childView = views.objectAt(itemIndex % numShownViews)
      item = @get('content').objectAt(itemIndex)
      if item isnt childView.get('content')
        childView.teardownContent()
        childView.set 'itemIndex', itemIndex
        childView.set 'content', item
        childView.prepareContent()
    # for all views that we are not using... just remove content
    # this makes them invisble
    [numShownViews...numChildViews].forEach (i) =>
      childView = views.objectAt(i)
      childView.set 'content', null
  , 'numItemsInViewport', 'content', 'startIndex'

# TODO(Peter): Deprecating this. We are moving to Ebryn's ListViewItem in
# the near future
Ember.LazyItemView = Ember.View.extend Ember.StyleBindingsMixin,
  itemIndex: null
  prepareContent: Ember.K
  teardownContent: Ember.K
  rowHeightBinding: 'parentView.rowHeight'
  styleBindings: ['width', 'top', 'display']

  top: Ember.computed ->
    @get('itemIndex') * @get('rowHeight')
  .property 'itemIndex', 'rowHeight'

  display: Ember.computed ->
    'none' if not @get('content')
  .property 'content'
