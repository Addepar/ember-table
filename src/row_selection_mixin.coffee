Ember.Table.RowSelectionMixin = Ember.Mixin.create

  KEY_EVENTS:
    37: 'leftArrowPressed'
    38: 'upArrowPressed'
    39: 'rightArrowPressed'
    40: 'downArrowPressed'

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

  didInsertElement: ->
    @_super()
    @$().attr('tabindex', -1)

  keyDown: (event) ->
    map   = @get 'KEY_EVENTS'
    method = map[event.keyCode]
    @get(method)?.apply(this, arguments) if method

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
    removedObjects.forEach (row) -> row.set 'isSelected', no

  arrayDidChange: (array, idx, removedCnt, addedCnt) ->
    addedObjects = array.slice(idx, idx + addedCnt)
    addedObjects.forEach (row) ->   row.set 'isSelected', yes

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
