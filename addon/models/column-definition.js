import Ember from 'ember';

export default Ember.Object.extend({
  // ---------------------------------------------------------------------------
  // API - Inputs
  // ---------------------------------------------------------------------------

  // Name of the column, to be displayed in the header.
  // TODO(new-api): Change to `columnName`
  headerCellName: undefined,

  // Path of the content for this cell. If the row object is a hash of keys
  // and values to specify data for each column, `contentPath` corresponds to
  // the key.
  contentPath: undefined,

  // Minimum column width. Affects both manual resizing and automatic resizing.
  minWidth: 25,

  // Maximum column width. Affects both manual resizing and automatic resizing.
  maxWidth: undefined,

  // The initial column width in pixels. Updated whenever the column (not
  // window) is resized. Can be persisted.
  savedWidth: 150,

  // Whether the column can be manually resized.
  isResizable: true,

  // Whether the column can be rearranged with other columns. Only matters if
  // the table's `enableColumnReorder` property is set to true (the default).
  // TODO(new-api): Rename to `isReorderable`
  isSortable: true,

  // Alignment of the text in the cell. Possible values are "left", "center",
  // and "right".
  textAlign: 'text-align-right',

  // Whether the column can automatically resize to fill space in the table.
  canAutoResize: false,

  // TODO(new-api): Remove `headerCellViewClass`
  // Override to specify a custom view to use for the header cell.
  headerCellView: 'header-cell',
  headerCellViewClass: Ember.computed.alias('headerCellView'),

  // TODO(new-api): Remove `tableCellViewClass`
  // Override to specify a custom view to use for table cells.
  tableCellView: 'table-cell',
  tableCellViewClass: Ember.computed.alias('tableCellView'),

  // Override to customize how the column gets data from each row object.
  // Given a row, should return a formatted cell value, e.g. $20,000,000.
  getCellContent: function(row) {
    var path = this.get('contentPath');
    Ember.assert("You must either provide a contentPath or override " +
                 "getCellContent in your column definition", path != null);
    return Ember.get(row, path);
  },

  // Override to maintain a consistent path to update cell values.
  // Recommended to make this a function which takes (row, value) and updates
  // the row value.
  setCellContent: Ember.K,

  // ---------------------------------------------------------------------------
  // Internal properties
  // ---------------------------------------------------------------------------

  // In most cases, should be set by the table and not overridden externally.
  // Instead, use savedWidth and minWidth/maxWidth along with resize behavior.
  width: Ember.computed.oneWay('savedWidth'),

  // Not part of the official API, but can be overridden if you need custom
  // behavior (e.g. persistence) when the column is resized, and `savedWidth`
  // doesn't solve your problem.
  resize: function(width) {
    this.set('savedWidth', width);
    this.set('width', width);
  },

  // Set when the table is initialized. Used to resize columns by stealing
  // width from the next column to the right.
  nextColumn: null,
  prevColumn: null,

  isAtMinWidth: Ember.computed(function() {
    return this.get('width') === this.get('minWidth');
  }).property('width', 'minWidth'),

  isAtMaxWidth: Ember.computed(function() {
    return this.get('width') === this.get('maxWidth');
  }).property('width', 'maxWidth')
});
