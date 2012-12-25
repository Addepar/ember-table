Ember.Table.RowSelectionMixin = Ember.Mixin.create
  # we need to set tabindex so that div responds to key events
  attributeBindings: 'tabindex'
  contentBinding:         Ember.Binding.oneWay 'controller.bodyContent'
  rowHeightBinding:       Ember.Binding.oneWay 'controller.rowHeight'
  numItemsShowingBinding: Ember.Binding.oneWay 'controller._numItemsShowing'
  startIndexBinding:      Ember.Binding.oneWay 'controller._startIndex'
  scrollTopBinding:       'controller._tableScrollTop'
  # TODO(Peter): file github issue on emberjs. There is a bug with firstObject
  selectionBinding: 'selections.lastObject'
  tabindex: -1

  KEY_EVENTS:
    37: 'leftArrowPressed'
    38: 'upArrowPressed'
    39: 'rightArrowPressed'
    40: 'downArrowPressed'

  selections:  Ember.computed ->
    set = new Ember.Set()
    set.addEnumerableObserver this
    set
  .property()

  enumerableDidChange: Ember.K
  enumerableWillChange: (set, removing, adding) ->
    # we are clearing the set
    if 'number' is typeof removing
      (set.forEach (row) -> row.set 'selected', no)
    else if removing
      removing.forEach (row) -> row.set 'selected', no
    if adding and 'number' isnt typeof adding
      adding.forEach (row) -> row.set 'selected', yes

  mouseDown: (event) ->
    row   = @getRowForEvent event
    sel   = @get 'selections'
    return sel.clear() if sel.contains(row) and sel.length is 1
    @setSelectionIndex @getRowIndexFast(row)

  keyDown: (event) ->
    map   = @get 'KEY_EVENTS'
    method = map[event.keyCode]
    @get(method)?.apply(this, arguments) if method

  upArrowPressed: (event) ->
    event.preventDefault()
    index = @getPrevRowIndex @get('selection')
    @setSelectionIndex index

  downArrowPressed: (event) ->
    event.preventDefault()
    index = @getNextRowIndex @get('selection')
    @setSelectionIndex index

  getNextRowIndex: (row) ->
    clen    = @get 'content.length'
    index = @getRowIndexFast row
    if index + 1 < clen then index + 1 else index

  getPrevRowIndex: (row) ->
    index = @getRowIndexFast row
    if index > 0 then index - 1 else index

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
    return unless index >= 0
    sel = @get 'selections'
    @get('selections').clear()
    @toggleSelectionIndex index

  toggleSelectionIndex: (index) ->
    return unless index >= 0
    row = @get('content').objectAt index
    sel = @get 'selections'
    if sel.contains row then sel.remove row else sel.add row
    @ensureVisible index

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
    # TODO(Peter): This is hacky... fix it
    @$('.body-container').scrollTop scrollTop
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

  expandSelectionRange: (rows) ->
    range = @get 'selectionRange'
    [min, max] = @_getIndicesRange rows
    range = min: min, max: max if not range
    range = min: Math.min(range.min, min), max: Math.max(range.max, max)
    @set 'selectionRange', range

  reduceSelectionRange: (rows) ->
    range = @get 'selectionRange'
    [min, max] = @_getIndicesRange rows
    range = min: min, max: max if not range
    # TODO: This could be really slow if selections is huge
    if min is range.min or max is range.max
      range = @_getIndicesRange @get('selections')
    @set 'selectionRange', range

  mouseDown: (event) ->
    row   = @getRowForEvent event
    index = @getRowIndexFast row
    if event.ctrlKey or event.metaKey
      @toggleSelectionIndex index
    else if event.shiftKey
      @extendSelection index
    else
      @_super event

  upArrowPressed: (event) ->
    if event.ctrlKey or event.metaKey
      @setSelectionIndex 0
    else if event.shiftKey
      range = @get 'selectionRange'
      @extendSelection range.min - 1 if range
    else
      @_super event

  downArrowPressed: (event) ->
    if event.ctrlKey or event.metaKey
      @setSelectionIndex @get('content.length') - 1
    else if event.shiftKey
      range = @get 'selectionRange'
      @extendSelection range.max + 1 if range
    else
      @_super event

  extendSelection: (index) ->
    range   = @get 'selectionRange'
    content = @get 'content'
    clen    = @get 'content.length'
    return unless range or index < 0 or index >= clen
    start = Math.min range.min, index
    end   = Math.max range.max, index
    sel   = @get 'selections'
    sel.addObjects content.slice(start, end + 1)

  _getIndicesRange: (rows) ->
    content = @get 'content'
    indices = rows.map (item) -> content.indexOf item
    [_.min(indices), _.max(indices)]