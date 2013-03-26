indexesOf = Ember.EnumerableUtils.indexesOf
# TODO(Peter): This entire thing needs to be refactored...
Ember.Table.RowSelectionMixin = Ember.Mixin.create
  # we need to set tabindex so that div responds to key events
  attributeBindings: 'tabindex'
  content:         Ember.computed.alias 'controller.bodyContent'
  rowHeight:       Ember.computed.alias 'controller.rowHeight'
  numItemsShowing: Ember.computed.alias 'controller._numItemsShowing'
  startIndex:      Ember.computed.alias 'controller._startIndex'
  scrollTop:       Ember.computed.alias 'controller._tableScrollTop'
  tabindex: -1

  KEY_EVENTS:
    37: 'leftArrowPressed'
    38: 'upArrowPressed'
    39: 'rightArrowPressed'
    40: 'downArrowPressed'

  _calculateSelectionIndices: (value) ->
    selection = @get 'selectionIndices'
    selection.clear()

    rows = @get('content')
    if rows
      content = rows.mapProperty('content')
      indices = indexesOf content, value
      indices = indices.filter((idx) -> idx > 0)
      selection.addObjects indices

  contentDidChange: Ember.observer ->
    @_calculateSelectionIndices(@get('selection'))
  , 'content.@each.content'

  selection: Ember.computed (key, value) ->
    rows      = @get('content') or []
    selection = @get 'selectionIndices'
    value     = value or []
    if arguments.length is 1 # getter
      value = selection.map (index) ->
        rows.objectAt(index).get('content')
    else # setter
      @_calculateSelectionIndices(value)
    value
  .property 'selectionIndices.[]'

  selectionIndices:  Ember.computed ->
    set = new Ember.Set()
    set.addEnumerableObserver this
    set
  .property()

  enumerableDidChange: Ember.K
  enumerableWillChange: (set, removing, adding) ->
    # we are clearing the set
    content = @get 'content'
    return unless content

    if 'number' is typeof removing
      set.forEach (index) ->
        row = content.objectAt(index)
        if row
          row.set 'isSelected', no
    else if removing
      removing.forEach (index) ->
        row = content.objectAt(index)
        if row
          row.set 'isSelected', no
    if adding and 'number' isnt typeof adding
      adding.forEach (index) ->
        row = content.objectAt(index)
        if row
          row.set 'isSelected', yes

  mouseDown: (event) ->
    index = @getIndexForEvent event
    sel   = @get 'selectionIndices'
    return sel.clear() if sel.contains(index) and sel.length is 1
    @setSelectionIndex index

  keyDown: (event) ->
    map   = @get 'KEY_EVENTS'
    method = map[event.keyCode]
    @get(method)?.apply(this, arguments) if method

  upArrowPressed: (event) ->
    event.preventDefault()
    sel = @get 'selectionIndices.lastObject'
    index = if event.ctrlKey or event.metaKey then 0 else sel - 1
    @setSelectionIndex index

  downArrowPressed: (event) ->
    event.preventDefault()
    sel   = @get 'selectionIndices.lastObject'
    clen  = @get 'content.length'
    index = if event.ctrlKey or event.metaKey then clen - 1 else sel + 1
    @setSelectionIndex index

  getIndexForEvent: (event) ->
    @getRowIndexFast @getRowForEvent(event)

  getRowForEvent: (event) ->
    $rowView = $(event.target).parents('.table-row')
    view     = Ember.View.views[$rowView.attr('id')]
    view.get 'row' if view

  # this is necessary, because if we do content.indexOf row, this will
  # implicitly causes us to evaluate the entire array proxy
  getRowIndexFast: (row) ->
    startIndex = @get 'startIndex'
    numRows    = @get('numItemsShowing') + 1
    sublist    = @get('content').slice(startIndex, startIndex + numRows)
    index      = sublist.indexOf row
    if index < 0 then index else index + startIndex

  setSelectionIndex: (index) ->
    return unless @ensureIndex index
    sel = @get 'selectionIndices'
    @get('selectionIndices').clear()
    @toggleSelectionIndex index

  toggleSelectionIndex: (index) ->
    return unless @ensureIndex index
    sel = @get 'selectionIndices'
    if sel.contains index then sel.remove index else sel.add index
    @ensureVisible index

  ensureIndex: (index) ->
    clen = @get 'content.length'
    index >= 0 and index < clen

  ensureVisible: (index) ->
    startIndex = @get 'startIndex'
    numRows    = @get 'numItemsShowing'
    endIndex   = startIndex + numRows
    if index < startIndex
      @scrollToRowIndex index
    else if index >= endIndex
      @scrollToRowIndex(index - numRows + 1)

  scrollToRowIndex: (index) ->
    rowHeight = @get 'rowHeight'
    scrollTop = index * rowHeight
    @set 'scrollTop', scrollTop

# Using MultiSelection for large data set might be slow for certain cases.
# TODO: Optimize this for large data set.
Ember.Table.RowMultiSelectionMixin =
Ember.Mixin.create Ember.Table.RowSelectionMixin,
  selectionRange: undefined

  enumerableDidChange: (set, removing, adding) ->
    if 'number' is typeof removing
      @set 'selectionRange', undefined
    else if removing
      @reduceSelectionRange removing
    if adding and 'number' isnt typeof adding
      @expandSelectionRange adding

  expandSelectionRange: (indices) ->
    range = @get 'selectionRange'
    [min, max] = [Math.min.apply(null, indices), Math.max.apply(null, indices)]
    range = min: min, max: max if not range
    range = min: Math.min(range.min, min), max: Math.max(range.max, max)
    @set 'selectionRange', range

  reduceSelectionRange: (indices) ->
    indices = @get('selectionIndices')
    [min, max] = [Math.min.apply(null, indices), Math.max.apply(null, indices)]
    range = min: min, max: max
    @set 'selectionRange', range

  mouseDown: (event) ->
    row   = @getRowForEvent event
    index = @getRowIndexFast row
    if event.ctrlKey or event.metaKey
      @toggleSelectionIndex index
    else if event.shiftKey
      range = @get 'selectionRange'
      @setSelectionRange range.min, index, index if range
    else
      @_super event

  upArrowPressed: (event) ->
    event.preventDefault()
    if event.shiftKey
      range = @get 'selectionRange'
      index = range.min - 1
      @setSelectionRange index, range.max, index if range
    else
      @_super event

  downArrowPressed: (event) ->
    event.preventDefault()
    if event.shiftKey
      range = @get 'selectionRange'
      index = range.max + 1
      @setSelectionRange range.min, index, index if range
    else
      @_super event

  setSelectionRange: (start, end, visibleIndex) ->
    return unless  @ensureIndex(start) and @ensureIndex(end)
    beg = if start < end then start else end
    end = if start < end then end else start
    sel   = @get 'selectionIndices'
    sel.clear()
    sel.addObjects [beg..end]
    @ensureVisible visibleIndex
