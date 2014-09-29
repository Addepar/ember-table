Ember.Table.ColumnDefinition = Ember.Object.extend

  # ---------------------------------------------------------------------------
  # API - Inputs
  # ---------------------------------------------------------------------------

  # Name of the column, to be displayed in the header.
  # TODO(new-api): Change to `columnName`
  headerCellName: undefined

  # Path of the content for this cell. If the row object is a hash of keys
  # and values to specify data for each column, `contentPath` corresponds to
  # the key.
  contentPath: undefined

  # Minimum column width. Affects both manual resizing and automatic resizing
  # (in `forceFillColumns` mode).
  minWidth: undefined

  # Maximum column width. Affects both manual resizing and automatic resizing
  # (in `forceFillColumns` mode).
  maxWidth: undefined

  # Default column width. Specifies the initial width of the column; if the
  # column is later resized automatically, it will be proportional to this.
  defaultColumnWidth: 150

  # Whether the column can be manually resized.
  isResizable:  yes

  # Whether the column can be rearranged with other columns. Only matters if
  # the table's `enableColumnReorder` property is set to true (the default).
  isSortable:  yes

  # Alignment of the text in the cell. Possible values are "left", "center",
  # and "right".
  textAlign: 'text-align-right'

  # Whether the column can automatically resize to fill space in the table.
  # Only matters if the table is in `forceFillColumns` mode.
  canAutoResize: yes

  # TODO(new-api): Remove `headerCellViewClass`
  # Override to specify a custom view to use for the header cell.
  headerCellView:       'Ember.Table.HeaderCell'
  headerCellViewClass:  Ember.computed.alias 'headerCellView'

  # TODO(new-api): Remove `tableCellViewClass`
  # Override to specify a custom view to use for table cells.
  tableCellView:        'Ember.Table.TableCell'
  tableCellViewClass:   Ember.computed.alias 'tableCellView'

  # Override to customize how the column gets data from each row object.
  # Given a row, should return a formatted cell value, e.g. $20,000,000.
  getCellContent: (row) ->
    path = @get 'contentPath'
    Ember.assert "You must either provide a contentPath or override " +
      "getCellContent in your column definition", path?
    Ember.get row, path

  # Override to maintain a consistent path to update cell values.
  # Recommended to make this a function which takes (row, value) and updates
  # the row value.
  setCellContent: Ember.K

  # ---------------------------------------------------------------------------
  # Internal properties
  # ---------------------------------------------------------------------------

  # Internal: width of the column.
  # TODO: Rename to `width`
  columnWidth:  Ember.computed.oneWay 'defaultColumnWidth'

  resize: (width) -> @set 'columnWidth', width
