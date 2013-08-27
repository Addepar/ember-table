###*
* Table Component
* @class
* @alias Ember.Table.EmberTableComponent
###
Ember.Table.EmberTableComponent =
Ember.Component.extend Ember.StyleBindingsMixin, Ember.ResizeHandler,
  templateName:   'components/ember-table'
  classNames:     ['ember-table-tables-container']
  styleBindings:  ['height']
  height:         Ember.computed.alias '_tablesContainerHeight'

  # Array of Ember.Table.ColumnDefinition
  columns: null
  # The number of frozen column on the left table
  numFixedColumns: 0
  # The number of footer rows
  numFooterRow: 0
  # The height per row. We need to know this for the lazy rendering.
  # TODO: The following three variables should be shared with LESS file
  rowHeight: 30
  minHeaderHeight: 30
  footerHeight: 30
  hasHeader: yes
  hasFooter: yes
  forceFillColumns: no
  enableColumnReorder: yes

  # specify the view class to use for rendering the table rows
  # TODO(Peter): This probably should go in the view...
  tableRowViewClass: 'Ember.Table.TableRow'

  prepareTableColumns: Ember.K

  actions:
    addColumn: Ember.K
    sortByColumn: Ember.K

  didInsertElement: ->
    @_super()
    @set '_tableScrollTop', 0
    @elementSizeDidChange()

  onBodyContentLengthDidChange: Ember.observer ->
    Ember.run.next this, -> Ember.run.once this, @updateLayout
  , 'bodyContent.length'

  ###*
  * On resize end callback
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  ###
  onResizeEnd: ->
    # we need to put this on the run loop, because resize event came from
    # window. Otherwise, we get this warning when used in tests. You have
    # turned on testing mode, which disabled the run-loop's autorun. You
    # will need to wrap any code with asynchronous side-effects in an
    # Ember.run
    Ember.run this, @elementSizeDidChange

  ###*
  * Element size did change callback
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  ###
  elementSizeDidChange: ->
    return unless @get('state') is 'inDOM'
    @set '_width', @$().parent().outerWidth()
    @set '_height', @$().parent().outerHeight()
    # we need to wait for the table to be fully rendered before antiscroll can
    # be used
    Ember.run.next this, @updateLayout

  updateLayout: ->
    # updating antiscroll
    return unless @get('state') is 'inDOM'
    this.$('.antiscroll-wrap').antiscroll()
    @doForceFillColumns() if @get('forceFillColumns')

  doForceFillColumns: ->
    # Expand the columns if there's extra space
    totalWidth = @get '_width'
    fixedColumnsWidth = @get '_fixedColumnsWidth'
    tableColumns = @get 'tableColumns'
    defaultContentWidth = @_getTotalWidth tableColumns, 'defaultColumnWidth'
    availableContentWidth = totalWidth - fixedColumnsWidth
    if defaultContentWidth < availableContentWidth
      remainingWidth = availableContentWidth - defaultContentWidth
      numColumnToDistributeWidth = tableColumns.filterProperty('canAutoResize').length
      additionWidthPerColumn = Math.floor(remainingWidth / numColumnToDistributeWidth)
      tableColumns.forEach (column) ->
        if column.get('canAutoResize')
          columnWidth = column.get('defaultColumnWidth') + additionWidthPerColumn
          column.set 'columnWidth', columnWidth

  onColumnSort: (column, newIndex) ->
    columns  = @get 'tableColumns'
    columns.removeObject column
    columns.insertAt newIndex, column

  ###*
  * Table Body Content - Array of Ember.Table.Row
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  ###
  bodyContent: Ember.computed ->
    Ember.Table.RowArrayProxy.create
      target: this
      tableRowClass: Ember.Table.Row
      content: @get('content')
  .property 'content'

  ###*
  * Table Footer Content - Array of Ember.Table.Row
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  ###
  footerContent: Ember.computed (key, value) ->
    if value then value else Ember.A()
  .property()

  ###*
  * Table Fixed Columns
  * @memberof Ember.Table.EmberTableComponent
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
  * @memberof Ember.Table.EmberTableComponent
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

  ##############################################################################
  # private variables
  ##############################################################################
  _tableScrollTop:  0
  _tableScrollLeft: 0

  _width: null
  _height: null
  _contentHeaderHeight: null

  _hasVerticalScrollbar: Ember.computed ->
    height = @get('_height')
    contentHeight = @get('_tableContentHeight') +
      @get('_headerHeight') + @get('_footerHeight')
    if height < contentHeight then yes else no
  .property '_height', '_tableContentHeight', '_headerHeight', '_footerHeight'

  _hasHorizontalScrollbar: Ember.computed ->
    contentWidth = @get('_tableColumnsWidth')
    tableWidth = @get('_width') - @get('_fixedColumnsWidth')
    if contentWidth > tableWidth then yes else no
  .property '_tableColumnsWidth', '_width', '_fixedColumnsWidth'

  # tables-container height adjusts to the content height
  _tablesContainerHeight: Ember.computed ->
    height = @get('_height')
    contentHeight = @get('_tableContentHeight') +
      @get('_headerHeight') + @get('_footerHeight')
    if contentHeight < height then contentHeight else height
  .property('_height', '_tableContentHeight', '_headerHeight', '_footerHeight')

  ###*
  * Actual width of the fixed columns (frozen columns)
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _fixedColumnsWidth: Ember.computed ->
    @_getTotalWidth @get('fixedColumns')
  .property 'fixedColumns.@each.columnWidth'

  ###*
  * Actual width of the table columns (non-frozen columns)
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _tableColumnsWidth: Ember.computed ->
    # Hack: We add 3px padding to the right of the table content so that we can
    # reorder into the last column.
    contentWidth = (@_getTotalWidth @get('tableColumns')) + 3
    availableWidth = @get('_width') - @get('_fixedColumnsWidth')
    if contentWidth > availableWidth then contentWidth else availableWidth
  .property 'tableColumns.@each.columnWidth', '_width', '_fixedColumnsWidth'

  ###*
  * Computed Row Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _rowWidth: Ember.computed ->
    columnsWidth = @get '_tableColumnsWidth'
    nonFixedTableWidth = @get('_tableContainerWidth') - @get('_fixedColumnsWidth')
    return nonFixedTableWidth if columnsWidth < nonFixedTableWidth
    columnsWidth
  .property '_fixedColumnsWidth', '_tableColumnsWidth', '_tableContainerWidth'

  # Dynamic Header Height that adjusts according to the header content height
  _headerHeight: Ember.computed ->
    minHeight = @get('minHeaderHeight')
    contentHeaderHeight = @get('_contentHeaderHeight')
    if contentHeaderHeight < minHeight then minHeight else contentHeaderHeight
  .property('_contentHeaderHeight', 'minHeaderHeight')

  # Dynamic Header Height that adjusts according to the header content height
  _footerHeight: Ember.computed ->
    if @get('hasFooter') then @get('footerHeight') else 0
  .property('footerHeight', 'hasFooter')

  ###*
  * Computed Body Height
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _bodyHeight: Ember.computed ->
    bodyHeight = @get '_tablesContainerHeight'
    bodyHeight -= @get('_headerHeight') if @get('hasHeader')
    bodyHeight -= @get('footerHeight') if @get('hasFooter')
    bodyHeight
  .property('_tablesContainerHeight', '_hasHorizontalScrollbar', '_headerHeight',
            'footerHeight', 'hasHeader', 'hasFooter')

  ###*
  * Computed Table Block Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _tableBlockWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth')
  .property '_width', '_fixedColumnsWidth'

  _fixedBlockWidthBinding: '_fixedColumnsWidth'

  ###*
  * Computed Table Content Height
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _tableContentHeight: Ember.computed ->
    @get('rowHeight') * @get('bodyContent.length')
  .property 'rowHeight', 'bodyContent.length'

  ###*
  * Table Container Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _tableContainerWidth: Ember.computed ->
    @get('_width')
  .property '_width'

  ###*
  * Computed Scroll Container Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _scrollContainerWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth')
  .property '_width', '_fixedColumnsWidth'

  ###*
  * Computed number of items showing
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  ###
  _numItemsShowing: Ember.computed ->
    Math.floor @get('_bodyHeight') / @get('rowHeight')
  .property '_bodyHeight', 'rowHeight'

  ###*
  * Computed Start Index
  * @memberof Ember.Table.EmberTableComponent
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
  .property('bodyContent.length', '_numItemsShowing', 'rowHeight',
            '_tableScrollTop')

  ###*
  * Get Total Width
  * @memberof Ember.Table.EmberTableComponent
  * @instance
  * @private
  * @argument columns Columns to calculate width for
  ###
  _getTotalWidth: (columns, columnWidthPath = 'columnWidth') ->
    return 0 unless columns
    widths = columns.getEach(columnWidthPath) or []
    widths.reduce ((total, w) -> total + w), 0
