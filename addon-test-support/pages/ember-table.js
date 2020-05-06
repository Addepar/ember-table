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
  scope: '[data-test-ember-table]',

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
   * Gets the width of overflow scrollbar-y in pixels
   */
  get scrollbarWidth() {
    let scrollContainer = findElement(this, '[data-test-ember-table-overflow]');
    return scrollContainer.offsetWidth - scrollContainer.clientWidth;
  },

  /**
   * Returns the table container width.
   */
  get containerWidth() {
    return findElement(this).offsetWidth;
  },

  /**
   * Returns the specified scroll indicator element
   */
  scrollIndicator(side = 'right') {
    return findElement(this, `[data-test-ember-table-scroll-indicator="${side}"]`);
  },

  /**
   * Returns whether the specified scroll indicator is currently visible
   */
  isScrollIndicatorRendered(side = 'right') {
    return !!this.scrollIndicator(side);
  },

  /**
   * Selects a row in the body
   *
   * @param {number} index
   */
  async selectRow(index) {
    await this.body.rows.objectAt(index).click();
  },

  /**
   * Toggles a row in the body
   *
   * @param {number} index
   */
  async toggleRow(index) {
    await this.body.rows.objectAt(index).clickWith({ metaKey: true });
  },

  /**
   * Selects a range of rows in the body with simple click first
   *
   * @param {number} beginIndex
   * @param {number} endIndex
   */
  async selectRangeFromClick(beginIndex, endIndex) {
    await this.body.rows.objectAt(beginIndex).click();
    await this.body.rows.objectAt(endIndex).clickWith({ shiftKey: true });
  },

  /**
   * Selects a range of rows in the body with shift+click first
   *
   * @param {number} beginIndex
   * @param {number} endIndex
   */
  async selectRangeFromShiftClick(beginIndex, endIndex) {
    await this.body.rows.objectAt(beginIndex).clickWith({ shiftKey: true });
    await this.body.rows.objectAt(endIndex).clickWith({ shiftKey: true });
  },
});
