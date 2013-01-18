Ember.Table = Ember.Namespace.create()

################################################################################
# Column Definition
################################################################################
Ember.Table.ColumnDefinition = Ember.Object.extend
  headerCellName:       null
  # TODO: Default column width should be shared with LESS file
  columnWidth:          150
  headerCellViewClass:  'Ember.Table.HeaderCell'
  tableCellViewClass:   'Ember.Table.TableCell'
  # This gives a formatted value e.g. $20,000,000
  getCellContent: Ember.required(Function)
  setCellContent: Ember.K

################################################################################
# Table Row
################################################################################
Ember.Table.Row = Ember.ObjectController.extend
  content:  null
  isHovering: no
  isSelected: no
  isShowing:  yes

Ember.Table.RowArrayProxy = Ember.ArrayProxy.extend
  tableRowClass: null
  content: null
  rowContent: Ember.computed( -> []).property()

  objectAt: (idx) ->
    row = @get('rowContent')[idx]
    return row if row
    tableRowClass = @get 'tableRowClass'
    item  = @get('content').objectAt(idx)
    if not item
      debugger
    row   = tableRowClass.create content: item
    @get('rowContent')[idx] = row
    row

################################################################################
# Frozen Table Controller
################################################################################
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

  tableRowClass: 'Ember.Table.Row'

  # Array of Ember.Table.Row
  bodyContent: Ember.computed ->
    tableRowClass = @get 'tableRowClass'
    if typeof tableRowClass is 'string'
      tableRowClass = Ember.get Ember.lookup, tableRowClass
    Ember.Table.RowArrayProxy.create
      tableRowClass: tableRowClass
      content: @get('content')
  .property 'content', 'tableRowClass'

  # Array of Ember.Table.Row
  footerContent: Ember.computed (key, value) ->
    if value then value else Ember.A()
  .property()

  fixedColumns: Ember.computed ->
    columns         = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns.slice(0, numFixedColumns)
  .property 'columns.@each', 'numFixedColumns'

  tableColumns: Ember.computed ->
    columns         = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns.slice(numFixedColumns, columns.get('length'))
  .property 'columns.@each', 'numFixedColumns'

  sortByColumn: Ember.K

  # private variables
  _tableScrollTop:  0
  _tableScrollLeft: 0

  _width: null
  _height: null
  _scrollbarSize: null

  # actual width of the fixed columns (frozen columns)
  _fixedColumnsWidth: Ember.computed ->
    @_getTotalWidth @get('fixedColumns')
  .property 'fixedColumns.@each.columnWidth'

  # actual width of the table columns (non-frozen columns)
  _tableColumnsWidth: Ember.computed ->
    @_getTotalWidth @get('tableColumns')
  .property 'tableColumns.@each.columnWidth'

  _rowWidth: Ember.computed ->
    columnsWidth = @get '_tableColumnsWidth'
    nonFixedTableWidth = @get('_tableContainerWidth') - @get('_fixedColumnsWidth')
    return nonFixedTableWidth if columnsWidth < nonFixedTableWidth
    columnsWidth
  .property '_fixedColumnsWidth', '_tableColumnsWidth', '_tableContainerWidth'

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

  _tableBlockWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth') - @get('_scrollbarSize')
  .property '_width', '_fixedColumnsWidth', '_scrollbarSize'

  _fixedBlockWidthBinding: '_fixedColumnsWidth'

  _tableContentHeight: Ember.computed ->
    @get('rowHeight') * @get('bodyContent.length')
  .property 'rowHeight', 'bodyContent.length'

  _tableContainerWidth: Ember.computed ->
    @get('_width') - @get('_scrollbarSize')
  .property '_width', '_scrollbarSize'

  _scrollContainerWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth') - @get('_scrollbarSize')
  .property '_width', '_fixedColumnsWidth', '_scrollbarSize'

  _scrollContainerHeight: Ember.computed ->
    containerHeight = @get('_height') - @get('headerHeight')
  .property('_height', 'headerHeight')

  _numItemsShowing: Ember.computed ->
    Math.floor @get('_bodyHeight') / @get('rowHeight')
  .property '_bodyHeight', 'rowHeight'

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

  _getTotalWidth: (columns) ->
    return 0 unless columns
    widths = columns.getEach('columnWidth') or []
    widths.reduce ((total, w) -> total + w), 0
