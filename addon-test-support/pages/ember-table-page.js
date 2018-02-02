import PageObject, { alias } from 'ember-classy-page-object';
import EmberTableBodyPage from './-private/ember-table-body-page';
import EmberTableFooterPage from './-private/ember-table-footer-page';
import EmberTableHeaderPage from './-private/ember-table-header-page';


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
  }
});
