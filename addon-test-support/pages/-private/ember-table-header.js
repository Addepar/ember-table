import PageObject, { alias, collection, hasClass, triggerable } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import { click } from 'ember-native-dom-helpers';

import { mouseDown, mouseMove, mouseUp } from '../../helpers/mouse';
import { getScale } from '../../helpers/element';

export const SortPage = PageObject.extend({
  indicator: {
    scope: '[data-test-sort-indicator]',
    isAscending: hasClass('is-ascending'),
    isDescending: hasClass('is-descending'),
  },
  toggle: {
    scope: '[data-test-sort-toggle]',
  },
});

export const ResizePage = PageObject.extend({
  scope: '[data-test-resize-handle]',
});

const Header = PageObject.extend({
  get text() {
    return findElement(this)
      .innerText.replace(/\s+/g, ' ')
      .trim();
  },

  /**
   * Retrieves selected header cell width.
   */
  get width() {
    return findElement(this).offsetWidth;
  },

  /**
   * Retrieves selected header cell height.
   */
  get height() {
    return findElement(this).offsetHeight;
  },

  get isLeaf() {
    return findElement(this).dataset.testLeafHeader;
  },

  isFixedLeft: hasClass('is-fixed-left'),
  isFixedRight: hasClass('is-fixed-right'),

  contextMenu: triggerable('contextmenu'),

  /**
   * Resizes this column by dragging right border several pixels.
   */
  async resize(targetSize) {
    let resizeHandle = findElement(this, '.et-header-resize-area');

    if (!resizeHandle) {
      return;
    }

    let box = resizeHandle.getBoundingClientRect();
    let startX = (box.right + box.left) / 2;
    let deltaX = (targetSize - this.width) / getScale(resizeHandle);

    if (this.isFixedRight) {
      deltaX = -deltaX;
    }

    await mouseDown(resizeHandle, startX, resizeHandle.clientHeight / 2);
    await mouseMove(resizeHandle, startX + 20, resizeHandle.clientHeight / 2);
    await mouseMove(resizeHandle, startX + deltaX, resizeHandle.clientHeight / 2);
    await mouseUp(resizeHandle, startX + deltaX, resizeHandle.clientHeight / 2);
  },

  /**
   * Moves this header to left (or right).
   *
   * @params deltaPosition Indicates how many index this column should move. This is a positive
   *    number if the column is moved to its right and negative if it's moved to its left.
   */
  async reorderBy(deltaPosition) {
    let header = findElement(this);
    let targetElement = header;

    while (deltaPosition !== 0) {
      if (deltaPosition < 0) {
        deltaPosition++;
        targetElement = targetElement.previousElementSibling
          ? targetElement.previousElementSibling
          : targetElement;
      } else {
        deltaPosition--;
        targetElement = targetElement.nextElementSibling
          ? targetElement.nextElementSibling
          : targetElement;
      }
    }

    let headerBox = header.getBoundingClientRect();
    let targetBox = targetElement.getBoundingClientRect();
    let deltaX = targetBox.left - headerBox.left;
    let startX = (headerBox.right + headerBox.left) / 2;

    await mouseDown(header, startX - 20, header.clientHeight / 2);
    await mouseMove(header, startX, header.clientHeight / 2);
    await mouseMove(header, startX + deltaX, header.clientHeight / 2);
    await mouseUp(header, startX + deltaX, header.clientHeight / 2);
  },

  /**
    Helper function to click with options like the meta key and ctrl key set

    @param {Object} options - click event options
  */
  async clickWith(options) {
    await click(findElement(this), options);
  },

  isSortable: hasClass('is-sortable'),

  sort: SortPage,
  sortIndicator: alias('sort.indicator'),
  sortToggle: alias('sort.toggle'),

  resizeHandle: ResizePage,
});

export default {
  scope: 'thead',

  /**
   * List of columns in the header.
   */
  headers: collection('th', Header),

  rows: collection({
    scope: 'tr',
  }),
};
