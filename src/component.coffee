Ember.Table.EmberTableComponent =
Ember.Component.extend Ember.AddeparMixins.StyleBindingsMixin,
Ember.AddeparMixins.ResizeHandlerMixin,
  layoutName: 'components/ember-table'
  classNames: ['ember-table-tables-container']
  classNameBindings: ['enableContentSelection:ember-table-content-selectable']

  # ---------------------------------------------------------------------------
  # API - Inputs
  # ---------------------------------------------------------------------------

  # Values which are bound to the table's style attr. See
  # `Ember.StyleBindingsMixin` documentation for more details.
  styleBindings: ['height']

  # An array of row objects. Usually a hash where the keys are column names and
  # the values are the rows's values. However, could be any object, since each
  # column can define a function to return the column value given the row
  # object. See `Ember.Table.ColumnDefinition.getCellContent`.
  content: null

  # An array of column definitions: see `Ember.Table.ColumnDefinition`. Allows
  # each column to have its own configuration.
  columns: null

  # The number of fixed columns on the left side of the table. Fixed columns
  # are always visible, even when the table is scrolled horizontally.
  numFixedColumns: 0

  # The number of footer rows in the table. Footer rows appear at the bottom of
  # the table and are always visible.
  # TODO(new-api): Rename to `numFooterRows`
  numFooterRow: 0

  # The row height in pixels. A consistent row height is necessary to calculate
  # which rows are being shown, to enable lazy rendering.
  # TODO: Currently must be kept in sync with the LESS file.
  rowHeight: 30

  # The minimum header height in pixels. Headers will grow in height if given
  # more content than they can display.
  # TODO: Currently must be kept in sync with the LESS file.
  minHeaderHeight: 30

  # The footer height in pixels.
  # TODO: Currently must be kept in sync with the LESS file.
  footerHeight: 30

  # Enables or disables the header block.
  hasHeader: yes

  # Enables or disables the footer block.
  # TODO(new-api): Control this via `numFooterRows` and remove from API
  hasFooter: yes

  enableColumnReorder: yes

  # Allow users to select the content of table cells.
  enableContentSelection: no

  # Sets which column resizing behavior to use. Possible values are
  # <code>'standard'</code> (resizing a column pushes or pulls all other
  # columns) and <code>'fluid'</code> (resizing a column steals width from
  # neighboring columns).
  columnMode: 'standard'

  # Sets which row selection behavior to follow. Possible values are 'none'
  # (clicking on a row does nothing), 'single' (clicking on a row selects it
  # and deselects other rows), and 'multiple' (multiple rows can be selected
  # through ctrl/cmd-click or shift-click).
  selectionMode: 'single'

  # ---------------------------------------------------------------------------
  # API - Outputs
  # ---------------------------------------------------------------------------

  # An array of the rows currently selected. If `selectionMode` is set to
  # 'single', the array will contain either one or zero elements.
  selection: Ember.computed (key, val) ->
    selectionMode = @get 'selectionMode'
    if arguments.length > 1 and val
      @get('persistedSelection').clear()
      @get('rangeSelection').clear()
      switch selectionMode
        when 'single'
          @get('persistedSelection').addObject val
        when 'multiple'
          @get('persistedSelection').addObjects val
    selection = @get('persistedSelection').copy().addObjects(@get('rangeSelection'))
    switch selectionMode
      when 'none' then null
      when 'single' then (selection[0] or null)
      when 'multiple' then selection
  .property 'persistedSelection.[]', 'rangeSelection.[]', 'selectionMode'

  # ---------------------------------------------------------------------------
  # Internal properties
  # ---------------------------------------------------------------------------

  # Special flag used by child views to look up this component using
  # nearestWithProperty()
  isEmberTable: yes

  columnsFillTable: yes

  init: ->
    @_super()
    if !$.ui then throw 'Missing dependency: jquery-ui'
    if !$().mousewheel then throw 'Missing dependency: jquery-mousewheel'
    if !$().antiscroll then throw 'Missing dependency: antiscroll.js'
    @prepareTableColumns()

  # TODO: Document
  actions:
    addColumn: Ember.K
    sortByColumn: Ember.K

  height: Ember.computed.alias '_tablesContainerHeight'

  # TODO(new-api): eliminate view alias
  # specify the view class to use for rendering the table rows
  tableRowView: 'Ember.Table.TableRow'
  tableRowViewClass: Ember.computed.alias 'tableRowView'

  onColumnSort: (column, newIndex) ->
    # Fixed columns are not affected by column reordering
    numFixedColumns = @get 'fixedColumns.length'
    columns = @get 'columns'
    columns.removeObject column
    columns.insertAt (numFixedColumns + newIndex), column
    @prepareTableColumns()

  # An array of Ember.Table.Row computed based on `content`
  bodyContent: Ember.computed ->
    Ember.Table.RowArrayController.create
      target: this
      parentController: this
      container: @get('container')
      itemController: Ember.Table.Row
      content: @get('content')
  .property 'content'

  # An array of Ember.Table.Row
  footerContent: Ember.computed (key, value) ->
    if value then value else Ember.A()
  .property()

  fixedColumns: Ember.computed ->
    columns = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns.slice(0, numFixedColumns) or []
  .property 'columns.@each', 'numFixedColumns'

  tableColumns: Ember.computed ->
    columns = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns.slice(numFixedColumns, columns.get('length')) or []
  .property 'columns.@each', 'numFixedColumns'

  prepareTableColumns: ->
    columns = @get('columns') or Ember.A()
    columns.setEach 'controller', this
    for col, i in columns
      col.set('nextResizableColumn', @getNextResizableColumn(columns, i))

  getNextResizableColumn: (columns, index) ->
    while index < columns.length
      index += 1
      column = columns.objectAt(index)
      return column if column?.get('isResizable')
    null

  # ---------------------------------------------------------------------------
  # View concerns
  # ---------------------------------------------------------------------------

  didInsertElement: ->
    @_super()
    @set '_tableScrollTop', 0
    @elementSizeDidChange()
    @doForceFillColumns()

  onResizeEnd: ->
    # we need to put this on the run loop, because resize event came from
    # window. Otherwise, we get this warning when used in tests. You have
    # turned on testing mode, which disabled the run-loop's autorun. You
    # will need to wrap any code with asynchronous side-effects in an
    # Ember.run
    if @tableWidthNowTooSmall()
      @set 'columnsFillTable', yes
    Ember.run this, @elementSizeDidChange

  elementSizeDidChange: ->
    return unless (@get('_state') or @get('state')) is 'inDOM'
    @set '_width', @$().parent().outerWidth()
    @set '_height', @$().parent().outerHeight()
    # we need to wait for the table to be fully rendered before antiscroll can
    # be used
    Ember.run.next this, @updateLayout

  tableWidthNowTooSmall: ->
    return false unless (@get('_state') or @get('state')) is 'inDOM'
    oldTableWidth = @get '_width'
    newTableWidth = @$().parent().outerWidth()
    # TODO(azirbel): This should be 'columns', I believe. Fix separately.
    totalColumnWidth = @_getTotalWidth @get('tableColumns')
    return (oldTableWidth > totalColumnWidth) and (newTableWidth < totalColumnWidth)

  expandResizeableColumnsToFillTable: ->
    totalWidth = @get '_width'
    fixedColumnsWidth = @get '_fixedColumnsWidth'
    # TODO(azirbel): This should be 'columns', I believe. Fix separately.
    tableColumns = @get 'tableColumns'
    unresizableColumns = tableColumns.filterProperty('canAutoResize', no)
    unresizableWidth = @_getTotalWidth unresizableColumns
    totalResizableWidth = totalWidth - unresizableWidth

  updateLayout: ->
    # updating antiscroll
    return unless (@get('_state') or @get('state')) is 'inDOM'
    this.$('.antiscroll-wrap').antiscroll().data('antiscroll').rebuild();
    @doForceFillColumns() if @get 'columnsFillTable'

  # Iteratively adjusts column widths to adjust to a changed table width.
  # Attempts to scale columns proportionally. However, if a column hits a min
  # or max width after scaling proportionally, we need to respect that setting.
  # In that case, keep iterating until all column widths are set to the best
  # they can be. Note that this may fail to arrive at the table width if the
  # resizable columns are all restricted by min/max widths.
  doForceFillColumns: ->
    allColumns = @get('columns')
    columnsToResize = allColumns.filterProperty('canAutoResize')
    unresizableColumns = allColumns.filterProperty('canAutoResize', no)
    availableWidth = @get('_width') - @_getTotalWidth(unresizableColumns)
    doNextLoop = yes
    while doNextLoop
      # doNextLoop will be true if any column fails to resize to its expected
      # proportional size (which can happen due to min/max width).
      # nextColumnsToResize will contain all the columns which have not been
      # trimmed to a min/max width. This loop is guaranteed to terminate,
      # because doNextLoop will only by true if nextColumnsToResize loses a
      # column from the current iteration.
      doNextLoop = no
      nextColumnsToResize = []
      totalResizableWidth = @_getTotalWidth columnsToResize
      columnsToResize.forEach (column) =>
        newWidth = Math.floor(
          (column.get('width') / totalResizableWidth) * availableWidth)
        if newWidth < column.get('minWidth')
          doNextLoop = yes
          column.set 'width', column.get('minWidth')
          availableWidth -= column.get 'width'
        else if newWidth > column.get('maxWidth')
          doNextLoop = yes
          column.set 'width', column.get('maxWidth')
          availableWidth -= column.get 'width'
        else
          column.set 'width', newWidth
          nextColumnsToResize.pushObject(column)
      columnsToResize = nextColumnsToResize

  onBodyContentLengthDidChange: Ember.observer ->
    Ember.run.next this, -> Ember.run.once this, @updateLayout
  , 'bodyContent.length'

  # ---------------------------------------------------------------------------
  # Private variables
  # ---------------------------------------------------------------------------

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

  # Actual width of the fixed columns
  _fixedColumnsWidth: Ember.computed ->
    @_getTotalWidth @get('fixedColumns')
  .property 'fixedColumns.@each.width'

  # Actual width of the (non-fixed) columns
  _tableColumnsWidth: Ember.computed ->
    # Hack: We add 3px padding to the right of the table content so that we can
    # reorder into the last column.
    contentWidth = @_getTotalWidth(@get('tableColumns')) + 3
    availableWidth = @get('_width') - @get('_fixedColumnsWidth')
    if contentWidth > availableWidth then contentWidth else availableWidth
  .property 'tableColumns.@each.width', '_width', '_fixedColumnsWidth'

  _rowWidth: Ember.computed ->
    columnsWidth = @get '_tableColumnsWidth'
    nonFixedTableWidth = @get('_tableContainerWidth') - @get('_fixedColumnsWidth')
    return nonFixedTableWidth if columnsWidth < nonFixedTableWidth
    columnsWidth
  .property '_fixedColumnsWidth', '_tableColumnsWidth', '_tableContainerWidth'

  # Dynamic header height that adjusts according to the header content height
  _headerHeight: Ember.computed ->
    minHeight = @get('minHeaderHeight')
    contentHeaderHeight = @get('_contentHeaderHeight')
    if contentHeaderHeight < minHeight then minHeight else contentHeaderHeight
  .property('_contentHeaderHeight', 'minHeaderHeight')

  # Dynamic footer height that adjusts according to the footer content height
  _footerHeight: Ember.computed ->
    if @get('hasFooter') then @get('footerHeight') else 0
  .property('footerHeight', 'hasFooter')

  _bodyHeight: Ember.computed ->
    bodyHeight = @get '_tablesContainerHeight'
    bodyHeight -= @get('_headerHeight') if @get('hasHeader')
    bodyHeight -= @get('footerHeight') if @get('hasFooter')
    bodyHeight
  .property('_tablesContainerHeight', '_hasHorizontalScrollbar', '_headerHeight',
            'footerHeight', 'hasHeader', 'hasFooter')

  _tableBlockWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth')
  .property '_width', '_fixedColumnsWidth'

  _fixedBlockWidthBinding: '_fixedColumnsWidth'

  _tableContentHeight: Ember.computed ->
    @get('rowHeight') * @get('bodyContent.length')
  .property 'rowHeight', 'bodyContent.length'

  _tableContainerWidth: Ember.computed ->
    @get('_width')
  .property '_width'

  _scrollContainerWidth: Ember.computed ->
    @get('_width') - @get('_fixedColumnsWidth')
  .property '_width', '_fixedColumnsWidth'

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
  .property('bodyContent.length', '_numItemsShowing', 'rowHeight',
            '_tableScrollTop')

  _getTotalWidth: (columns, columnWidthPath = 'width') ->
    return 0 unless columns
    widths = columns.getEach(columnWidthPath) or []
    widths.reduce ((total, w) -> total + w), 0

  # ---------------------------------------------------------------------------
  # Selection
  # TODO: Make private or reorganize into a new section
  # ---------------------------------------------------------------------------

  lastSelected: null

  isSelected: (row) ->
    switch @get('selectionMode')
      when 'none' then no
      when 'single' then @get('selection') is row.get('content')
      when 'multiple' then @get('selection').contains row.get('content')

  setSelected: (row, val) ->
    @persistSelection()
    item = row.get 'content'
    if val
      @get('persistedSelection').addObject item
    else
      @get('persistedSelection').removeObject item

  # items that were selected directly or as part of a previous
  # range selection (shift-click)
  persistedSelection: Ember.computed -> Ember.A()

  # items that are part of the currently editable range selection
  rangeSelection: Ember.computed -> Ember.A()

  # TODO: Handle click event in the row view
  click: (event) ->
    row = @getRowForEvent event
    item = row?.get 'content'
    return unless item
    switch @get('selectionMode')
      when 'none'
        return
      when 'single'
        @get('persistedSelection').clear()
        @get('persistedSelection').addObject item
      when 'multiple'
        if event.shiftKey
          @get('rangeSelection').clear()

          lastIndex = @rowIndex(@get('lastSelected'))
          # If the last selected row is no longer in the table, use the
          # first row in the table
          lastIndex = 0 if lastIndex is -1

          curIndex  = @rowIndex(@getRowForEvent(event))

          minIndex  = Math.min(lastIndex, curIndex)
          maxIndex  = Math.max(lastIndex, curIndex)

          @get('rangeSelection').addObjects(
            @get('bodyContent').slice(minIndex, maxIndex + 1).mapBy('content'))
        else
          if !event.ctrlKey && !event.metaKey
            @get('persistedSelection').clear()
            @get('rangeSelection').clear()
          else
            @persistSelection()
          if @get('persistedSelection').contains item
            @get('persistedSelection').removeObject item
          else
            @get('persistedSelection').addObject item
          @set('lastSelected', row)

  findRow: (content) ->
    for row in @get('bodyContent')
      if row.get('content') is content
        return row

  rowIndex: (row) ->
    @get('bodyContent')?.indexOf(row)

  persistSelection: ->
    @get('persistedSelection').addObjects(@get('rangeSelection'))
    @get('rangeSelection').clear()

  getRowForEvent: (event) ->
    $rowView = $(event.target).parents('.ember-table-table-row')
    view = Ember.View.views[$rowView.attr('id')]
    view.get 'row' if view

Ember.Handlebars.helper('table-component', Ember.Table.EmberTableComponent)
