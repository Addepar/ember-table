Ember.Table = Ember.Namespace.create()

###*
 * Column Definition
 * @class
 * @alias Ember.Table.ColumnDefinition
 ###
Ember.Table.ColumnDefinition = Ember.Object.extend
  headerCellName:       null

  ###*
  * Resize
  * @memberof Ember.Table.ColumnDefinition
  * @instance
  * @argument {number} pxWidth Width
  * @argument {number} tableWidth Table Width
  ###
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

  ###*
  * Convert Columns to Width
  * @memberof Ember.Table.ColumnDefinition
  * @method
  * @instance
  * @private
  ###
  _convertColumnToWidth: Ember.beforeObserver ->
    return unless @get("controller.fluidTable")
    tableWidth = @get( "controller._tableContainerWidth" )
    @set("columnWidth", @get("columnWidth")/tableWidth*100 + "%") if tableWidth
  , "controller._tableContainerWidth"

  ###*
  * Resize to Table
  * @memberof Ember.Table.ColumnDefinition
  * @method
  * @instance
  * @private
  ###
  _resizeToTable: Ember.observer ->
    @resize()
  , "controller._tableContainerWidth"

  ###*
  * Column Width
  * @memberof Ember.Table.ColumnDefinition
  * @member {Integer} columnWidth
  * @todo Default column width should be shared with LESS file
  ###
  columnWidth: 150
  headerCellViewClass:  'Ember.Table.HeaderCell'
  tableCellViewClass:   'Ember.Table.TableCell'

  ###*
  * Get Cell Content - This gives a formatted value e.g. $20,000,000
  * @memberof Ember.Table.ColumnDefinition
  * @instance
  * @argument row {Ember.Table.Row}
  * @todo More detailed doc needed!
  ###
  getCellContent: (row) ->
    path = @get 'contentPath'
    Ember.assert "You must either provide a contentPath or override " +
      "getCellContent in your column definition", path?
    Ember.get row, path

  ###*
  * Set Cell Content
  * @memberof Ember.Table.ColumnDefinition
  * @instance
  ###
  setCellContent: Ember.K

###*
 * Table Row
 * @class
 * @alias Ember.Table.Row
 ###
Ember.Table.Row = Ember.ObjectProxy.extend
  ###*
  * Content of the row
  * @memberof Ember.Table.Row
  * @member content
  * @instance
  ###
  content: null

  ###*
  * Is Hovering?
  * @memberof Ember.Table.Row
  * @member {Boolean} isHovering
  * @instance
  ###
  isHovering: no

  ###*
  * Is Selected?
  * @memberof Ember.Table.Row
  * @member {Boolean} isSelected
  * @instance
  ###
  isSelected: no

  ###*
  * Is Showing?
  * @memberof Ember.Table.Row
  * @member {Boolean} isShowing
  * @instance
  ###
  isShowing:  yes

  ###*
  * Is Active?
  * @memberof Ember.Table.Row
  * @member {Boolean} isActive
  * @instance
  ###
  isActive:   no

###*
* Table Row Array Proxy
* @class
* @alias Ember.Table.RowArrayProxy
###
Ember.Table.RowArrayProxy = Ember.ArrayProxy.extend
  tableRowClass: null
  content: null
  rowContent: Ember.computed(-> Ember.A()).property()

  ###*
  * Get Object At Index
  * @memberof Ember.Table.RowArrayProxy
  * @instance
  * @argument idx {Integer} Index of the object
  ###
  objectAt: (idx) ->
    row = @get('rowContent')[idx]
    return row if row
    tableRowClass = @get 'tableRowClass'
    item  = @get('content').objectAt(idx)
    row   = tableRowClass.create content: item
    @get('rowContent')[idx] = row
    row

  ###*
  * Content changed callback
  * @memberof Ember.Table.RowArrayProxy
  * @instance
  * @argument idx {Integer} Index of the object
  * @argument removed {Integer} Number of rows removed
  * @argument added {Integer} Number of rows added
  ###
  arrayContentDidChange: (idx, removed, added) ->
    added = 0 if added < 0
    removed = 0 if removed < 0
    @get('rowContent').replace(idx, removed, new Array(added))
    @_super.apply(this, arguments)


###*
* Frozen Table Controller
* @class
* @alias Ember.Table.TableController
###
Ember.Table.TableController = Ember.Controller.extend
  # Array of Ember.Table.ColumnDefinition
  columns: null
  # The number of frozen column on the left table
  numFixedColumns: 0
  # The number of footer rows
  numFooterRow: 0
  # The height per row. We need to know this for the lazy rendering.
  # TODO: The following three variables should be shared with LESS file
  rowHeight: 30
  headerHeight: 50
  footerHeight: 30
  hasHeader: yes
  hasFooter: yes
  # specify the view class to use for rendering the table rows
  tableRowViewClass: 'Ember.Table.TableRow'

  # Set to yes to use % as column widths
  fluidTable: no

  ###*
  * Table Body Content - Array of Ember.Table.Row
  * @memberof Ember.Table.TableController
  * @instance
  ###
  bodyContent: Ember.computed ->
    Ember.Table.RowArrayProxy.create
      tableRowClass: Ember.Table.Row
      content: @get('content')
  .property 'content'

  ###*
  * Table Footer Content - Array of Ember.Table.Row
  * @memberof Ember.Table.TableController
  * @instance
  ###
  footerContent: Ember.computed (key, value) ->
    if value then value else Ember.A()
  .property()

  ###*
  * Table Fixed Columns
  * @memberof Ember.Table.TableController
  * @instance
  * @todo Much more doc needed
  ###
  fixedColumns: Ember.computed ->
    columns         = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns.slice(0, numFixedColumns)
  .property 'columns.@each', 'numFixedColumns'

  ###*
  * Table Columns
  * @memberof Ember.Table.TableController
  * @instance
  * @todo Much more doc needed
  ###
  tableColumns: Ember.computed ->
    columns         = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns = columns.slice(numFixedColumns, columns.get('length'))
    @prepareTableColumns(columns)
    columns
  .property 'columns.@each', 'numFixedColumns'

  ###*
  * Prepare Table Columns
  * @memberof Ember.Table.TableController
  * @instance
  ###
  prepareTableColumns: Ember.observer (tableColumns)->
    # Some maintenance on the columns for percent resizing
    columns = if Ember.isArray(tableColumns) then tableColumns else @get("tableColumns")
    for col, i in columns
      col.set("_nextColumn", columns.objectAt(i + 1))
      col.set("controller", this)
  , "tableColumns.@each", "tableColumns"

  sortByColumn: Ember.K

  # private variables
  _tableScrollTop:  0
  _tableScrollLeft: 0

  _width: null
  _height: null
  _scrollbarSize: null

  ###*
  * Actual width of the fixed columns (frozen columns)
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _fixedColumnsWidth: Ember.computed ->
    @_getTotalWidth @get('fixedColumns')
  .property 'fixedColumns.@each.columnWidth'

  ###*
  * Actual width of the table columns (non-frozen columns)
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _tableColumnsWidth: Ember.computed ->
    return "100%" if @get "fluidTable"
    @_getTotalWidth @get('tableColumns')
  .property 'tableColumns.@each.columnWidth', "fluidTable"

  ###*
  * Computed Row Width
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _rowWidth: Ember.computed ->
    columnsWidth = @get '_tableColumnsWidth'
    nonFixedTableWidth = @get('_tableContainerWidth') - @get('_fixedColumnsWidth')
    return nonFixedTableWidth if columnsWidth < nonFixedTableWidth
    columnsWidth
  .property '_fixedColumnsWidth', '_tableColumnsWidth', '_tableContainerWidth'

  ###*
  * Computed Body Height
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _bodyHeight: Ember.computed ->
    bodyHeight    = @get '_height'
    headerHeight  = @get 'headerHeight'
    footerHeight  = @get 'footerHeight'
    scrollbarSize = @get '_scrollbarSize'
    if @get('_tableColumnsWidth') > @get('_width') - @get('_fixedColumnsWidth')
      bodyHeight -= scrollbarSize
    bodyHeight -= headerHeight if @get('hasHeader')
    bodyHeight -= footerHeight if @get('hasFooter')
    bodyHeight
  .property('_height', 'headerHeight', 'footerHeight',
            '_scrollbarSize', 'hasHeader', 'hasFooter',
            '_tableColumnsWidth', '_width', '_fixedColumnsWidth')

  ###*
  * Computed Table Block Width
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _tableBlockWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth') - @get('_scrollbarSize')
  .property '_width', '_fixedColumnsWidth', '_scrollbarSize'

  _fixedBlockWidthBinding: '_fixedColumnsWidth'

  ###*
  * Computed Table Content Height
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _tableContentHeight: Ember.computed ->
    @get('rowHeight') * @get('bodyContent.length')
  .property 'rowHeight', 'bodyContent.length'

  ###*
  * Table Container Width
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _tableContainerWidth: Ember.computed ->
    @get('_width') - @get('_scrollbarSize')
  .property '_width', '_scrollbarSize'

  ###*
  * Computed Scroll Container Width
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _scrollContainerWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth') - @get('_scrollbarSize')
  .property '_width', '_fixedColumnsWidth', '_scrollbarSize'

  ###*
  * Computed Scroll Container Height
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _scrollContainerHeight: Ember.computed ->
    containerHeight = @get('_height') - @get('headerHeight')
    return containerHeight
  .property('_height', 'headerHeight')

  ###*
  * Computed number of items showing
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  ###
  _numItemsShowing: Ember.computed ->
    res = Math.floor @get('_bodyHeight') / @get('rowHeight')
    return res
  .property '_bodyHeight', 'rowHeight'

  ###*
  * Computed Start Index
  * @memberof Ember.Table.TableController
  * @instance
  * @raw
  ###
  _startIndex: Ember.computed ->
    numContent  = @get 'bodyContent.length'
    numViews    = @get '_numItemsShowing'
    rowHeight   = @get 'rowHeight'
    scrollTop   = @get '_tableScrollTop'
    index = Math.floor(scrollTop / rowHeight)
    # adjust start index so that end index doesn't exceed content length
    if index + numViews >= numContent
      index = numContent - numViews
    if index < 0 then 0 else index
  .property 'bodyContent.length', '_numItemsShowing', 'rowHeight', '_tableScrollTop'

  ###*
  * Get Total Width
  * @memberof Ember.Table.TableController
  * @instance
  * @private
  * @argument columns Columns to calculate width for
  ###
  _getTotalWidth: (columns) ->
    return 0 unless columns
    widths = columns.getEach('columnWidth') or []
    widths.reduce ((total, w) -> total + w), 0
