import PageObject, { alias } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';

import EmberTableBodyPage from './-private/ember-table-body';
import EmberTableFooterPage from './-private/ember-table-footer';
import EmberTableHeaderPage from './-private/ember-table-header';
import EmberTableLoadingMorePage from './-private/ember-table-loading-more';

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
   * Page object for "Loading More" component that renders beneath the body.
   */
  loadingMore: EmberTableLoadingMorePage,

  /**
   * Page object for table footer.
   */
  footer: EmberTableFooterPage,

  rows: alias('body.rows'),
  getCell: alias('body.getCell'),

  /**
   * Page object collection of header cells from all header rows.
   */
  headers: alias('header.headers'),

  /**
   * Page object collection of slack header cells from all header rows.
   */
  slackHeaders: alias('header.slackHeaders'),

  footers: alias('footer.footers'),

  /**
   * Returns the table width.
   *
   * offsetWidth returns a rounded integer, and so can
   * result in unreliable tests.
   *
   * @returns {number}
   */
  get width() {
    return findElement(this, 'table').offsetWidth;
  },

  /**
   * Returns the table container width.
   *
   * offsetWidth returns a rounded integer, and so can
   * result in unreliable tests.
   *
   * @returns {number}
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
   * Returns the scrollable overflow element
   */
  overflow() {
    return findElement(this, '[data-test-ember-table-overflow]');
  },

  /**
   * Returns the height of the horizontal scrollbar on the overflow element
   */
  horizontalScrollbarHeight() {
    let overflow = this.overflow();
    return overflow.offsetHeight - overflow.clientHeight;
  },

  /**
   * Returns the width of the vertical scrollbar on the overflow element
   */
  verticalScrollbarWidth() {
    let overflow = this.overflow();
    return overflow.offsetWidth - overflow.clientWidth;
  },

  /**
   * Returns the height of the visible portion of the footer
   */
  visibleFooterHeight() {
    let footerCells = findElement(this, 'tfoot td', { multiple: true });

    if (footerCells.length > 0) {
      let footerCellY = footerCells[0].getBoundingClientRect().y;

      let overflow = this.overflow();
      let overflowRect = overflow.getBoundingClientRect();
      let scale = overflow.offsetHeight / overflowRect.height;

      return Math.min(
        overflow.clientHeight - scale * (footerCellY - overflowRect.y),
        overflow.clientHeight
      );
    }

    return 0;
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
   * Selects a row in the body while holding shift key
   *
   * @param {number} index
   */
  async selectRowWithShiftClick(index) {
    await this.body.rows.objectAt(index).clickWith({ shiftKey: true });
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
