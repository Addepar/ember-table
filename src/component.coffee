Ember.Table.EmberTableComponent =
Ember.Component.extend Ember.AddeparMixins.StyleBindingsMixin,
Ember.AddeparMixins.ResizeHandlerMixin,
  layoutName: 'components/ember-table'
  classNames:        ['ember-table-tables-container']
  classNameBindings: ['enableContentSelection:ember-table-content-selectable']

  # ---------------------------------------------------------------------------
  # API - Inputs
  # ---------------------------------------------------------------------------

  # Values which are bound to the table's style attr. See
  # `Ember.StyleBindingsMixin` documentation for more details.
  styleBindings:     ['height']
  
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
  # TODO(new-api): Default to no
  hasFooter: yes

  # If true, columns with `canAutoResize=true` (the default setting) will
  # attempt to fill the width of the table when possible. After a column is
  # manually resized, any other columns with `canAutoResize=true` will
  # distribute the change in width between them. Once manually resized, a
  # column will no longer automatically resize.
  forceFillColumns: no

  # Allow the columns to be rearranged by drag-and-drop. Only columns with
  # `isSortable=true` (the default setting) will be affected.
  enableColumnReorder: yes

  # Allow users to select the content of table cells.
  enableContentSelection: no

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
    if arguments.length > 1 and val
      if @get('selectionMode') is 'single'
        @get('persistedSelection').clear()
        @get('persistedSelection').add(@findRow val)
      else
        @get('persistedSelection').clear()
        for content in val
          @get('persistedSelection').add(@findRow content)
      @get('rangeSelection').clear()
    if @get('selectionMode') is 'single'
      return @get('_selection')?[0]?.get('content')
    else
      return @get('_selection').toArray().map (row) -> row.get('content')
  .property '_selection.[]', 'selectionMode'

  # ---------------------------------------------------------------------------
  # Internal properties
  # ---------------------------------------------------------------------------

  init: ->
    @_super()
    if !$.ui then throw 'Missing dependency: jquery-ui'
    if !$().mousewheel then throw 'Missing dependency: jquery-mousewheel'
    if !$().antiscroll then throw 'Missing dependency: antiscroll.js'

  # TODO: Document
  actions:
    addColumn: Ember.K
    sortByColumn: Ember.K

  height: Ember.computed.alias '_tablesContainerHeight'

  # TODO(new-api): eliminate view alias
  # specify the view class to use for rendering the table rows
  tableRowView:      'Ember.Table.TableRow'
  tableRowViewClass: Ember.computed.alias 'tableRowView'

  onColumnSort: (column, newIndex) ->
    columns  = @get 'tableColumns'
    columns.removeObject column
    columns.insertAt newIndex, column

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
    columns         = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns = columns.slice(0, numFixedColumns) or []
    @prepareTableColumns(columns)
    columns
  .property 'columns.@each', 'numFixedColumns'

  tableColumns: Ember.computed ->
    columns         = @get 'columns'
    return Ember.A() unless columns
    numFixedColumns = @get('numFixedColumns') or 0
    columns = columns.slice(numFixedColumns, columns.get('length')) or []
    @prepareTableColumns(columns)
    columns
  .property 'columns.@each', 'numFixedColumns'

  prepareTableColumns: (columns) ->
    columns.setEach 'controller', this

  # ---------------------------------------------------------------------------
  # View concerns
  # ---------------------------------------------------------------------------

  didInsertElement: ->
    @_super()
    @set '_tableScrollTop', 0
    @elementSizeDidChange()

  onResizeEnd: ->
    # we need to put this on the run loop, because resize event came from
    # window. Otherwise, we get this warning when used in tests. You have
    # turned on testing mode, which disabled the run-loop's autorun. You
    # will need to wrap any code with asynchronous side-effects in an
    # Ember.run
    Ember.run this, @elementSizeDidChange

  elementSizeDidChange: ->
    return unless (@get('_state') or @get('state')) is 'inDOM'
    @set '_width', @$().parent().outerWidth()
    @set '_height', @$().parent().outerHeight()
    # we need to wait for the table to be fully rendered before antiscroll can
    # be used
    Ember.run.next this, @updateLayout

  updateLayout: ->
    # updating antiscroll
    return unless (@get('_state') or @get('state')) is 'inDOM'
    this.$('.antiscroll-wrap').antiscroll().data('antiscroll').rebuild();
    @doForceFillColumns() if @get('forceFillColumns')

  doForceFillColumns: ->
    # Expand the columns if there's extra space
    totalWidth = @get '_width'
    fixedColumnsWidth = @get '_fixedColumnsWidth'
    tableColumns = @get 'tableColumns'
    contentWidth = @_getTotalWidth tableColumns
    availableContentWidth = totalWidth - fixedColumnsWidth
    remainingWidth = availableContentWidth - contentWidth
    columnsToResize = tableColumns.filterProperty('canAutoResize')
    additionWidthPerColumn = Math.floor(remainingWidth / columnsToResize.length)
    columnsToResize.forEach (column) ->
      columnWidth = column.get('columnWidth') + additionWidthPerColumn
      column.set 'columnWidth', columnWidth

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
  .property 'fixedColumns.@each.columnWidth'

  # Actual width of the (non-fixed) columns
  _tableColumnsWidth: Ember.computed ->
    # Hack: We add 3px padding to the right of the table content so that we can
    # reorder into the last column.
    contentWidth = (@_getTotalWidth @get('tableColumns')) + 3
    availableWidth = @get('_width') - @get('_fixedColumnsWidth')
    if contentWidth > availableWidth then contentWidth else availableWidth
  .property 'tableColumns.@each.columnWidth', '_width', '_fixedColumnsWidth'

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

  _getTotalWidth: (columns, columnWidthPath = 'columnWidth') ->
    return 0 unless columns
    widths = columns.getEach(columnWidthPath) or []
    widths.reduce ((total, w) -> total + w), 0

  # ---------------------------------------------------------------------------
  # Selection
  # TODO: Make private or reorganize into a new section
  # ---------------------------------------------------------------------------

  isSelected: (row) ->
    @get('_selection').contains row

  setSelected: (row, val) ->
    @persistSelection()
    if val
      @get('persistedSelection').add row
    else
      @get('persistedSelection').remove row

  # rows that were selected directly or as part of a previous
  # range selection (shift-click)
  persistedSelection: Ember.computed -> new Ember.Set()

  # rows that are part of the currently editable range selection
  rangeSelection: Ember.computed -> new Ember.Set()

  _selection: Ember.computed ->
    @get('persistedSelection').copy().addEach(@get('rangeSelection'))
  .property 'persistedSelection.[]', 'rangeSelection.[]'

  click: (event) ->
    row = @getRowForEvent event
    return unless row
    return if @get('selectionMode') is 'none'
    if @get('selectionMode') is 'single'
      @get('persistedSelection').clear()
      @get('persistedSelection').add row
    else
      if event.shiftKey
        @get('rangeSelection').clear()

        lastIndex = @rowIndex(@get('lastSelected'))
        curIndex  = @rowIndex(@getRowForEvent(event))

        minIndex  = Math.min(lastIndex, curIndex)
        maxIndex  = Math.max(lastIndex, curIndex)

        @get('rangeSelection').addObjects @get('bodyContent').slice(minIndex, maxIndex + 1)
      else
        if !event.ctrlKey && !event.metaKey
          @get('persistedSelection').clear()
          @get('rangeSelection').clear()
        else
          @persistSelection()
        if @get('persistedSelection').contains row
          @get('persistedSelection').remove row
        else
          @get('persistedSelection').add row
        @set('lastSelected', row)

  findRow: (content) ->
    for row in @get('bodyContent')
      if row.get('content') is content
        return row

  rowIndex: (row) ->
    @get('bodyContent')?.indexOf(row)

  persistSelection: () ->
    @get('persistedSelection').addEach(@get('rangeSelection'))
    @get('rangeSelection').clear()

  getRowForEvent: (event) ->
    $rowView = $(event.target).parents('.ember-table-table-row')
    view     = Ember.View.views[$rowView.attr('id')]
    view.get 'row' if view

Ember.Handlebars.helper('table-component', Ember.Table.EmberTableComponent)
