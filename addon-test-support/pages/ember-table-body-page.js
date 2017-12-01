import PageObject, { collection, hasClass } from 'ember-classy-page-object';
import { findAll } from 'ember-native-dom-helpers';
import { findElement } from 'ember-classy-page-object/extend';
import { getter } from 'ember-cli-page-object/macros';

export default PageObject.extend({
  scope: 'tbody',

  /**
   * List of rows in table body. Each of property/function in this collections is the property/func
   * of a single row selected by using calling rows.eq(index).
   */
  rows: collection({
    scope: 'tr',

    /**
     * List of all cells for the selected row.
     */
    cells: collection({
      scope: 'td'
    }),

    /**
     * Returns the height of selected row.
     */
    height: getter(function() {
      return findElement(this).offsetHeight;
    }),

    /**
     * Checks if the selected row contains a specific class.
     */
    containsClass(clazz) {
      return findElement(this).className.indexOf(clazz) >= 0;
    }
  }),

  /**
   * A shortcut to return cell page object specified by row & column indexes.
   */
  getCell(rowIndex, columnIndex) {
    return this.rows.eq(rowIndex).cells.eq(columnIndex);
  }
});
