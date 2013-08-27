Ember.Table = Ember.Namespace.create()

################################################################################
# Column Definition
################################################################################
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
  isSortable:  yes
  # text align left | center | right
  textAlign: 'text-align-right'
  canAutoResize: yes

  # The view class we want to use for the header
  headerCellViewClass:  'Ember.Table.HeaderCell'
  # The view class we want to use for the table cells
  tableCellViewClass:   'Ember.Table.TableCell'

  resize: (width) ->
    @set 'columnWidth', width

  # An imperative way to get the content. E.g. you need to do it in some obscure
  # way and contentPath just wouldn't cut it
  getCellContent: (row) ->
    path = @get 'contentPath'
    Ember.assert "You must either provide a contentPath or override " +
      "getCellContent in your column definition", path?
    Ember.get row, path

  setCellContent: Ember.K

################################################################################
# Table Row
################################################################################
# TODO(Peter): Deprecate this once we move to ember list-view
Ember.Table.Row = Ember.ObjectProxy.extend
  content:  null
  isHovering: no
  isSelected: no
  isShowing:  yes
  isActive:   no

# TODO(Peter): Deprecate this once we move to ember list-view
Ember.Table.RowArrayProxy = Ember.ArrayProxy.extend
  tableRowClass: null
  content: null
  rowContent: Ember.computed( -> []).property()
  objectAt: (idx) ->
    return unless 0 <= idx < @get('content.length')
    row = @get('rowContent')[idx]
    return row if row
    tableRowClass = @get 'tableRowClass'
    item  = @get('content').objectAt(idx)
    row   = tableRowClass.create content: item, target: @get 'target'
    @get('rowContent')[idx] = row
    row
