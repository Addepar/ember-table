###*
 * Column Definition
 * @class
 * @alias Ember.Table.ColumnDefinition
 ###
Ember.Table.ColumnDefinition = Ember.Object.extend
  # Name of the column
  # TODO(Peter): change it to columnName
  headerCellName:undefined
  # Path of the content for this cell. Given a row object, the content path
  # communicate what needs to be extracted from the row
  contentPath:   undefined
  # Min column width
  minWidth: undefined
  # Max column width
  maxWidth: undefined
  # column width
  defaultColumnWidth: 150
  # TODO(Peter): Rename it to width
  columnWidth:  Ember.computed.oneWay 'defaultColumnWidth'
  # wether the colum is resizable
  isResizable:  yes
  # wether the column is sortable
  isSortable:  no
  # text align left | center | right
  textAlign: 'text-align-right'
  canAutoResize: yes

  # The view class we want to use for the header
  headerCellViewClass:  'Ember.Table.HeaderCell'
  # The view class we want to use for the table cells
  tableCellViewClass:   'Ember.Table.TableCell'

  resize: (width) -> @set 'columnWidth', width

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
  * Compare Cell Values - Compare the value of two cells, used for sorting
  * @memberof Ember.Table.ColumnDefinition
  * @instance
  * @argument firstRow {Ember.Table.Row}
  * @argument secondRow {Ember.Table.Row}
  ###
  compareCellValues: (firstRow, secondRow) ->
    path = @get 'contentPath'
    Ember.assert "You must either provide a contentPath or override " +
      "compareCellValues in your column definition", path?
    if firstRow.get?  #Assuming both rows are either ember objects or both are not
        return firstRow.get path - secondRow.get path
    else
        return firstRow[path] - secondRow[path]

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
  * Is Selected?
  * @memberof Ember.Table.Row
  * @member {Boolean} isSelected
  * @instance
  ###
  isSelected: Ember.computed ->
    @get('parentController.selection') is @get('content')
  .property 'parentController.selection', 'content'

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
  * @member {Boolean} isHovered
  * @instance
  ###
  isHovered:   no

