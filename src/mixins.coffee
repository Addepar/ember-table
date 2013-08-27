################################################################################
# Fluid Column Definition
################################################################################
Ember.Table.FluidColumnMixin = Ember.Mixin.create
  isResizable: Ember.computed ->
    if @get('_nextColumn') then yes else no
  .property '_nextColumn'

  resize: (pxWidth, tableWidth)->
    newMaxWidth = null
    tableWidth = tableWidth || @get("controller._tableContainerWidth")

    unless @get("controller.fluidTable")
      @set("columnWidth", pxWidth) if pxWidth
      return null
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
    return unless @get("controller.fluidTable")
    tableWidth = @get( "controller._tableContainerWidth" )
    @set("columnWidth", @get("columnWidth")/tableWidth*100 + "%") if tableWidth
  , "controller._tableContainerWidth"

  _resizeToTable: Ember.observer ->
    @resize()
  , "controller._tableContainerWidth"

################################################################################
# Fluid Table Controller Mixin
################################################################################
Ember.Table.FluidTableControllerMixin = Ember.Mixin.create
  # actual width of the table columns (non-frozen columns)
  _tableColumnsWidth: Ember.computed ->
    return "100%" if @get "fluidTable"
    @_getTotalWidth @get('tableColumns')
  .property 'tableColumns.@each.columnWidth', "fluidTable"

  prepareTableColumns: Ember.observer (tableColumns)->
    # Some maintenance on the columns for percent resizing
    columns = if Ember.isArray(tableColumns) then tableColumns else @get("tableColumns")
    for col, i in columns
      col.set("_nextColumn", columns.objectAt(i + 1))
      col.set("controller", this)
  , "tableColumns.@each", "tableColumns"
