import { alias, collection, hasClass, property } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';

import { click } from 'ember-native-dom-helpers';

export default {
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
      scope: 'td',
    }),

    /**
     * Returns the height of selected row.
     */
    get height() {
      return findElement(this).offsetHeight;
    },

    checkbox: {
      scope: 'input[type="checkbox"]',
      isChecked: property('checked'),
    },

    toggle: alias('checkbox.click'),

    isSelected: hasClass('is-selected'),

    /**
     * Helper function to click with options like the meta key and ctrl key set
     *
     * @param {Object} options - click event options
     */
    async clickWith(options) {
      await click(findElement(this), options);
    },
  }),

  /**
   * A shortcut to return cell page object specified by row & column indexes.
   */
  getCell(rowIndex, columnIndex) {
    return this.rows.eq(rowIndex).cells.eq(columnIndex);
  },
};
