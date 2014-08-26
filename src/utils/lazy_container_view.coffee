Ember.LazyContainerView =
Ember.ContainerView.extend Ember.AddeparMixins.StyleBindingsMixin,
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
    view = this
    # We are getting the class from a string e.g. "Ember.Table.Row"
    itemViewClass = @get('itemViewClass')
    if typeof itemViewClass is 'string'
      if /[A-Z]+/.exec itemViewClass
        # Global var lookup - 'App.MessagePreviewView'
        itemViewClass = Ember.get Ember.lookup, itemViewClass
      else
        # Ember CLI Style lookup - 'message/preview'
        itemViewClass = @container.lookupFactory "view:#{itemViewClass}"

    newNumViews = @get 'numChildViews'
    return unless itemViewClass and newNumViews
    oldNumViews = @get('length')
    numViewsToInsert = newNumViews - oldNumViews
    # if newNumViews < oldNumViews we need to remove some views
    if numViewsToInsert < 0
      viewsToRemove = this.slice(newNumViews, oldNumViews)
      this.removeObjects viewsToRemove
    # if oldNumViews < newNumViews we need to add more views
    else if numViewsToInsert > 0
      viewsToAdd = [0...numViewsToInsert].map ->
        view.createChildView(itemViewClass)
      this.pushObjects viewsToAdd
  , 'numChildViews', 'itemViewClass'

  # TODO(Peter): Consider making this a computed... binding logic will go
  # into the LazyItemMixin
  viewportDidChange: Ember.observer ->
    content   = @get('content') or []
    clength   = content.get('length')
    numShownViews  = Math.min this.get('length'), clength
    startIndex = @get 'startIndex'
    # this is a necessary check otherwise we are trying to access an object
    # that doesn't exists
    if startIndex + numShownViews >= clength
      startIndex = clength - numShownViews
    if startIndex < 0 then startIndex = 0
    this.forEach (childView, i) ->
      # for all views that we are not using... just remove content
      # this makes them invisble
      if i >= numShownViews
        childView = this.objectAt(i)
        childView.set 'content', null
        return
      itemIndex = startIndex + i
      childView = this.objectAt(itemIndex % numShownViews)
      item = content.objectAt(itemIndex)
      if item isnt childView.get('content')
        childView.teardownContent()
        childView.set 'itemIndex', itemIndex
        childView.set 'content', item
        childView.prepareContent()
    , this
  , 'content.length', 'length', 'startIndex'

###*
 * Lazy Item View
 * @class
 * @alias Ember.LazyItemView
 ###
Ember.LazyItemView = Ember.View.extend Ember.AddeparMixins.StyleBindingsMixin,
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
