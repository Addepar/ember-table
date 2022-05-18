import PageObject, {
  alias,
  triggerable,
  collection,
  hasClass,
  property,
} from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';

import { click } from '@ember/test-helpers';

/**
 * Page object for single table `td` cell; also used by the footer page object
 * to represent footer cells.
 */
export const BodyCell = PageObject.extend({
  scope: 'td',

  doubleClick: triggerable('dblclick'),

  isFirstColumn: hasClass('is-first-column'),
  isLastColumn: hasClass('is-last-column'),
  isSlack: hasClass('is-slack'),
});

export default PageObject.extend({
  scope: 'tbody',

  /**
    Returns the height of the entire tbody element.
  */
  get height() {
    return findElement(this).offsetHeight;
  },

  /**
    Returns the number of rows in the body.
  */
  get rowCount() {
    let element = findElement(this);
    if (!element.hasAttribute('data-test-row-count')) {
      throw new Error(
        'data-test-row-count attribute not found on the Ember Table tbody. Perhaps you need to run setupForTest? See https://github.com/Addepar/ember-table/blob/master/README.md'
      );
    }
    return Number(element.getAttribute('data-test-row-count'));
  },

  /**
    List of rows in table body. Each of property/function in this collections is the property/func
    of a single row selected by using calling rows.objectAt(index).
  */
  rows: collection({
    scope: 'tr',

    /**
      List of all cells for the selected row.
    */
    cells: collection('td:not([data-test-ember-table-slack])', BodyCell),

    /**
      Slack cell from this row, if present.
    */
    slackCell: BodyCell.extend({
      scope: 'td[data-test-ember-table-slack]',
    }),

    /**
      Returns the height of selected row.
    */
    get height() {
      return findElement(this).offsetHeight;
    },

    checkbox: {
      scope: '[data-test-select-row]',
      isChecked: property('checked'),

      async clickWith(options) {
        await click(findElement(this), options);
      },
    },

    checkboxContainer: {
      scope: '[data-test-select-row-container]',

      isHidden: hasClass('et-speech-only'),
    },

    toggleSelect: alias('checkbox.click'),

    collapse: {
      scope: '[data-test-collapse-row]',
      isCollapsed: property('checked'),
    },

    toggleCollapse: alias('collapse.click'),

    isSelected: hasClass('is-selected'),

    /**
      Helper function to click with options like the meta key and ctrl key set

      @param {Object} options - click event options
    */
    async clickWith(options) {
      await click(findElement(this), options);
    },

    doubleClick: triggerable('dblclick'),
  }),

  /**
    A shortcut to return cell page object specified by row & column indexes.
  */
  getCell(rowIndex, columnIndex) {
    return this.rows.objectAt(rowIndex).cells.objectAt(columnIndex);
  },
});
