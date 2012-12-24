Ember.Table.RowSelectionMixin = Ember.Mixin.create

  # we need to set tabindex so that div responds to key events
  attributeBindings: 'tabindex'
  tabindex: -1
  selection: null

  KEY_EVENTS:
    37: 'leftArrowPressed'
    38: 'upArrowPressed'
    39: 'rightArrowPressed'
    40: 'downArrowPressed'

  mouseDown: (event) ->
    row   = @getRowForEvent event
    index = @getRowIndexFast row
    @setSelectionIndex index

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
    content = @get 'content'
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
    selection = @get 'selection'
    selection.set 'selected', no if selection
    row = @get('content').objectAt index
    row.set 'selected', yes
    @set 'selection', row
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
    @$().scrollTop scrollTop
    @set 'scrollTop', scrollTop

###
Ember.Table.RowMultiSelectionMixin = Ember.Mixin.create
  # selection has to be a set
  selection:  Ember.computed ->
    selection = Ember.A()
    selection.addArrayObserver(this)
    selection
  .property()

  selectionRange: Ember.computed ->
    content   = @get 'content'
    selection = @get 'selection'
    indices   = _.map selection, (item) -> content.indexOf item
    [_.min(indices), _.max(indices)]
  .property 'content', 'selection.@each'

  mouseDown: (event) ->
    if event.ctrlKey or event.metaKey
      @mouseCtrlSelection(event)
    else if event.shiftKey
      @mouseShiftSelection(event)
    else
      @mouseSelection(event)

  mouseSelection: (event) ->
    row = @getRowForEvent event
    selection = @get 'selection'
    return unless row and selection
    selection.clear()
    selection.pushObject row

  mouseCtrlSelection: (event) ->
    row = @getRowForEvent event
    selection = @get 'selection'
    return unless row and selection
    if selection.contains row
      selection.removeObject row
    else
      selection.pushObject row

  mouseShiftSelection: (event) ->
    @expandSelection event

  # collapse all selection
  leftArrowPressed: (event) ->
    event.preventDefault()
    rows = @get('selection') or []
    rows.forEach (row) -> row.set 'isCollapsed', yes

  # expand all selection
  rightArrowPressed: (event) ->
    event.preventDefault()
    rows = @get('selection') or []
    rows.forEach (row) -> row.set 'isCollapsed', no

  upArrowPressed: (event) ->
    event.preventDefault()
    content   = @get 'content'
    selection = @get 'selection'
    return unless content and selection
    [startIndex, endIndex] = @get 'selectionRange'
    return if startIndex - 1 < 0
    startIndex = startIndex - 1
    selection.clear()
    if event.shiftKey
      selection.pushObjects content.slice(startIndex, endIndex)
    else if event.ctrlKey or event.metaKey
      selection.pushObject content.objectAt(0)
    else
      selection.pushObject content.objectAt(startIndex)
    @scrollRowTopRow()

  downArrowPressed: (event) ->
    event.preventDefault()
    content = @get 'content'
    selection   = @get 'selection'
    return unless content and selection
    [startIndex, endIndex] = @get 'selectionRange'
    return if endIndex >= content.get('length')
    selection.clear()
    if event.shiftKey
      selection.pushObjects content.slice(startIndex, endIndex + 1)
    else if event.ctrlKey or event.metaKey
      row = content.objectAt(content.get('length')-1)
      selection.pushObject row
    else
      selection.pushObject content.objectAt(endIndex)
    @scrollToBottomRow()

  arrayWillChange: (array, idx, removedCnt, addedCnt) ->
    removedObjects = array.slice(idx, idx + removedCnt)
    removedObjects.forEach (row) -> row.set 'selected', no

  arrayDidChange: (array, idx, removedCnt, addedCnt) ->
    addedObjects = array.slice(idx, idx + addedCnt)
    addedObjects.forEach (row) ->   row.set 'selected', yes

  getRowForEvent: (event) ->
    $rowView = $(event.target).parents('.table-row')
    view     = Ember.View.views[$rowView.attr('id')]
    view.get 'row' if view

  expandSelection: (event) ->
    content   = @get 'content'
    selection = @get 'selection'
    row = @getRowForEvent event
    return unless content and selection and row
    rowIndex = content.indexOf(row)
    [startIndex, endIndex] = @get 'selectionRange'
    if rowIndex < startIndex
      startIndex = rowIndex
    else
      endIndex = rowIndex + 1
    newSelection = content.slice(startIndex, endIndex)
    selection.clear()
    selection.pushObjects newSelection
###