import EmberObject from '@ember/object';
import { property } from '../utils/class';

export default class ColumnDefinition extends EmberObject {
  /**
   * Name of the column.
   */
  @property columnName = '';

  /**
   * Path of the content for this cell. If the row object is a hash of keys and values to specify
   * data for each column, `contentPath` corresponds to the key.
   */
  @property valuePath = '';

  /**
   * Custom header component passed in by user.
   */
  @property headerComponent = null;

  /**
   * Custom cell component passed in by user.
   */
  @property cellComponent = null;

  /**
   * Indicates if this column can be resized or not. It's false by default.
   */
  @property isResizable = false;

  /**
   * Indicates if this column can be reordered or not. It's false by default.
   */
  @property isReorderable = false;

  /**
   * Current width of the table.
   */
  @property width = 150;

  /**
   * Minimum column width. Affects both manual resizing and automatic resizing.
   */
  @property minWidth = 25;

  /**
   * Maximum column width. Affects both manual resizing and automatic resizing.
   */
  @property maxWidth = undefined;
}
