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
    @onNumChildViewsDidChange()

  height: Ember.computed ->
    @get('content.length') * @get('rowHeight')
  .property 'content.length', 'rowHeight'

  numChildViews: Ember.computed ->
    @get('numItemsShowing') + 2
  .property 'numItemsShowing'

  onNumChildViewsDidChange: Ember.observer ->
    # We are getting the class from a string e.g. "Ember.Table.Row"
    itemViewClass = Ember.get @get('itemViewClass')
    newNumViews = @get 'numChildViews'
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
  , 'numChildViews', 'itemViewClass'

  # TODO(Peter): Consider making this a computed... binding logic will go
  # into the LazyItemMixin
  viewportDidChange: Ember.observer ->
    content   = @get('content') or []
    views     = @get('childViews') or []
    clength   = content.get('length')
    numShownViews  = Math.min views.get('length'), clength
    startIndex = @get 'startIndex'
    # this is a necessary check otherwise we maybe trying to access an object
    # that doesn't exists
    if startIndex + numShownViews >= clength
      startIndex = clength - numShownViews
    if startIndex < 0 then 0 else startIndex
    views.forEach (childView, i) ->
      # for all views that we are not using, set content to null to make them
      # invisible
      if i >= numShownViews
        childView = views.objectAt(i)
        childView.set 'content', null
        return
      itemIndex = startIndex + i
      childView = views.objectAt(itemIndex % numShownViews)
      item = content.objectAt(itemIndex)
      if item isnt childView.get('content')
        childView.teardownContent()
        childView.set 'itemIndex', itemIndex
        childView.set 'content', item
        childView.prepareContent()
  , 'content.length', 'childViews.length', 'startIndex'

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
