import PageObject, { alias } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';

import EmberTableBodyPage from './-private/ember-table-body';
import EmberTableFooterPage from './-private/ember-table-footer';
import EmberTableHeaderPage from './-private/ember-table-header';

/**
 * Ember Table page object. Use this page object and its nested header/body object to retrieve table
 * data and manipulate table in test.
 */
export default PageObject.extend({
  /**
   * Page object for table header.
   */
  header: EmberTableHeaderPage,

  /**
   * Page object for table body.
   */
  body: EmberTableBodyPage,

  /**
   * Page object for table footer.
   */
  footer: EmberTableFooterPage,

  rows: alias('body.rows'),
  getCell: alias('body.getCell'),

  headers: alias('header.headers'),
  footers: alias('footer.footers'),

  /**
   * Returns the table width.
   */
  get width() {
    return findElement(this, 'table').offsetWidth;
  },

  /**
   * Returns the table container width.
   */
  get containerWidth() {
    return findElement(this).offsetWidth;
  },

  /**
   * Selects a row in the body
   *
   * @param {number} index
   */
  async selectRow(index) {
    await this.body.rows.eq(index).click();
  },

  /**
   * Toggles a row in the body
   *
   * @param {number} index
   */
  async toggleRow(index) {
    await this.body.rows.eq(index).clickWith({ metaKey: true });
  },

  /**
   * Selects a range of rows in the body
   *
   * @param {number} beginIndex
   * @param {number} endIndex
   */
  async selectRange(beginIndex, endIndex) {
    await this.body.rows.eq(beginIndex).click();
    await this.body.rows.eq(endIndex).clickWith({ shiftKey: true });
  },
});
