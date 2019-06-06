import { collection } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';

export default {
  scope: 'tfoot',

  /**
    Returns the number of rows in the footer.
  */
  get rowCount() {
    return Number(findElement(this).getAttribute('data-test-row-count'));
  },

  footers: collection({
    scope: 'td',
  }),

  rows: collection({
    scope: 'tr',

    cells: collection({
      scope: 'td',
    }),
  }),
};
