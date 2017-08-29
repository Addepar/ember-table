import EmberObject from '@ember/object';
import { property } from './class';

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
   * Indicates if the column is a fixed column or not. With current implementation, only 1 single
   * left most column can be a fixed column. Later version of Ember table could change
   * implementation to support multiple fixed columns.
   */
  @property isFixed = false;

  /**
   * Custom component passed in by user.
   */
  @property headerComponent = null;

  /**
   * Default header component if user does not define any custom header.
   */
  @property _headerComponent = 'ember-table-header';

  /**
   * Indicates if this column can be resized or not. It's true by default.
   */
  @property isResizable = true;

  /**
   * Indicates if this column can be reordered or not. It's true by default.
   */
  @property isReorderable = true;

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
