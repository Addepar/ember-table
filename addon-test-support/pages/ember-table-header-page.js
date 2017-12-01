import PageObject, { collection, count } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import { getter } from 'ember-cli-page-object/macros';

export default PageObject.extend({
  scope: 'thead',

  /**
   * List of columns in the header.
   */
  columns: collection({
    scope: 'tr:eq(0) th',

    /**
     * Retrieves selected header cell width.
     */
    width: getter(function() {
      return findElement(this).offsetWidth;
    }),

    /**
     * Retrieves selected header cell height.
     */
    height: getter(function() {
      return findElement(this).offsetHeight;
    }),
  }),

  /**
   * Returns the number of columns in header.
   */
  columnCount: count('tr:eq(0) th'),

  /**
   * Returns header width.
   */
  width: getter(function() {
    return findElement(this).offsetWidth;
  })
});
