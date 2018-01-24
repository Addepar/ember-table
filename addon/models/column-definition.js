import EmberObject from '@ember/object';

export default class ColumnDefinition extends EmberObject {
  /**
   * Name of the column.
   */
  columnName = '';

  /**
   * Path of the content for this cell. If the row object is a hash of keys and values to specify
   * data for each column, `contentPath` corresponds to the key.
   */
  valuePath = '';

  /**
   * Custom header component passed in by user.
   */
  headerComponent = null;

  /**
   * Custom cell component passed in by user.
   */
  cellComponent = null;

  /**
   * Indicates if this column can be resized or not. It's false by default.
   */
  isResizable = false;

  /**
   * Indicates if this column can be reordered or not. It's false by default.
   */
  isReorderable = false;

  /**
   * Current width of the table.
   */
  width = 150;

  /**
   * Minimum column width. Affects both manual resizing and automatic resizing.
   */
  minWidth = 25;

  /**
   * Maximum column width. Affects both manual resizing and automatic resizing.
   */
  maxWidth = undefined;
}
