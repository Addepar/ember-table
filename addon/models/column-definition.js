import EmberObject from '@ember/object';

export default class ColumnDefinition extends EmberObject {
  /**
   * Name of the column.
   */
  name = '';

  /**
   * Path of the content for this cell. If the row object is a hash of keys and values to specify
   * data for each column, `contentPath` corresponds to the key.
   */
  valuePath = '';

  /**
   * Indicates if this column can be resized or not. It's false by default.
   */
  isResizable = false;

  /**
   * Current width of the column.
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
