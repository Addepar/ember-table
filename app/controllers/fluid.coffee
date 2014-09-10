App.FluidTableHeaderTreeCell = Ember.Table.HeaderCell.extend
  onColumnStartResize: ->
    next = $(@$().next())
    minWidth = @get('column.minWidth') or 20
    maxWidth = @$().width() + next.width() - minWidth
    @$().resizable( "option", "maxWidth", maxWidth )
    return

App.FluidColumnDefinition = Ember.Table.ColumnDefinition.extend
  isResizable: Ember.computed ->
    if @get('_nextColumn') then yes else no
  .property '_nextColumn'

  headerCellView: 'App.FluidTableHeaderTreeCell'
  resize: (pxWidth, tableWidth)->
    newMaxWidth = null
    tableWidth = tableWidth || @get("controller._tableContainerWidth")
    return unless tableWidth

    percent = (val)->
      if "string" is typeof val
        +(val.replace("%", ""))
      else
        val * 100 / tableWidth

    # either from a tabel resize or a column resize
    oldWidth = percent(@get("columnWidth"))
    newWidth = if 'number' is typeof pxWidth then percent(pxWidth) else oldWidth

    # calculate the pixel change for
    nextCol = @get("_nextColumn")
    if nextCol
      # calculate new and old percent width
      diff = oldWidth - newWidth + percent(nextCol.get("columnWidth"))
      nextCol.set "columnWidth", diff/100*tableWidth
      newMaxWidth = (newWidth + diff)/100*tableWidth - 100

    @set "columnWidth", newWidth/100*tableWidth
    @notifyPropertyChange("columnWidth")
    newMaxWidth

  _convertColumnToWidth: Ember.beforeObserver ->
    tableWidth = @get( "controller._tableContainerWidth" )
    @set("columnWidth", @get("columnWidth")/tableWidth*100 + "%") if tableWidth
  , "controller._tableContainerWidth"

  _resizeToTable: Ember.observer ->
    @resize()
  , "controller._tableContainerWidth"

App.FluidTable = Ember.Table.EmberTableComponent.extend
  # actual width of the table columns (non-frozen columns)
  _tableColumnsWidth: "100%"

  prepareTableColumns: (columns) ->
    @_super(columns)
    # Some maintenance on the columns for percent resizing
    for col, i in columns
      col.set("_nextColumn", columns.objectAt(i + 1))

App.EmberTableFluidController = Ember.Controller.extend
  numRows: 100

  columns: Ember.computed ->
    dateColumn = App.FluidColumnDefinition.create
      columnWidth: "40"
      headerCellName: 'Date'
      getCellContent: (row) -> row.get('date').toDateString();
    openColumn = App.FluidColumnDefinition.create
      columnWidth: "15"
      headerCellName: 'Open'
      getCellContent: (row) -> row.get('open').toFixed(2)
    highColumn = App.FluidColumnDefinition.create
      columnWidth: "15"
      headerCellName: 'High'
      getCellContent: (row) -> row.get('high').toFixed(2)
    lowColumn = App.FluidColumnDefinition.create
      columnWidth: "15"
      headerCellName: 'Low'
      getCellContent: (row) -> row.get('low').toFixed(2)
    closeColumn = App.FluidColumnDefinition.create
      columnWidth: "15"
      headerCellName: 'Close'
      getCellContent: (row) -> row.get('close').toFixed(2)
    [dateColumn, openColumn, highColumn, lowColumn, closeColumn]

  content: Ember.computed ->
    [0...@get('numRows')].map (index) ->
      date = new Date()
      date.setDate(date.getDate() + index)
      date:  date
      open:  Math.random() * 100 - 50
      high:  Math.random() * 100 - 50
      low:   Math.random() * 100 - 50
      close: Math.random() * 100 - 50
      volume: Math.random() * 1000000
  .property 'numRows'
