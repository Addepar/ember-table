import PageObject, { alias, collection, hasClass, triggerable } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import { click, triggerKeyEvent } from '@ember/test-helpers';

import { mouseDown, mouseMove, mouseUp } from '../../helpers/mouse';
import { getScale } from '../../helpers/element';

function computedStyleInPixels(target, property) {
  let stringValue = window.getComputedStyle(target)[property];
  let numberValue = Number(stringValue.substring(0, stringValue.length - 2));
  if (isNaN(numberValue)) {
    throw new Error(
      `computedStyleInPixels failed to convert the computed style property of '${property}' into a Number. Value was '${stringValue}'`
    );
  }
  return numberValue;
}

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
   *
   * offsetWidth returns a rounded integer, and so can
   * result in unreliable tests.
   *
   * @returns {number}
   */
  get width() {
    return findElement(this).offsetWidth;
  },

  /**
   * Retrieves selected header cell height.
   *
   * offsetHeight returns a rounded integer, and so can
   * result in unreliable tests.
   *
   * @returns {number}
   */
  get height() {
    return findElement(this).offsetHeight;
  },

  /**
   * Retrieves selected header cell logical width.
   *
   * @returns {number}
   */
  get logicalWidth() {
    return computedStyleInPixels(findElement(this), 'width');
  },

  /**
   * Retrieves the rendered width of the selected header cell.
   *
   * @returns {number}
   */
  get renderedWidth() {
    return findElement(this).getBoundingClientRect().width;
  },

  get isLeaf() {
    return findElement(this).dataset.testLeafHeader;
  },

  get isRendered() {
    return findElement(this).style.display !== 'none';
  },

  isFixedLeft: hasClass('is-fixed-left'),
  isFixedRight: hasClass('is-fixed-right'),

  isFirstColumn: hasClass('is-first-column'),
  isLastColumn: hasClass('is-last-column'),
  isSlack: hasClass('is-slack'),

  contextMenu: triggerable('contextmenu'),

  /**
   * Resize the table header. This API isn't clear about if a logical
   * or rendered size is being passed. It defers to the more explicit
   * logicalResize which should probably be preferred in future use.
   */
  async resize(targetSize) {
    await this.logicalResize(targetSize);
  },

  async logicalResize(targetSize) {
    let renderedTargetSize =
      targetSize / getScale(document.getElementById('ember-testing-container').firstElementChild);
    await this.renderedResize(renderedTargetSize);
  },

  /**
   * Resizes this column by dragging right border several pixels,
   * unless the column is fixed right in quick case it drags left.
   */
  async renderedResize(targetSize) {
    let resizeHandle = findElement(this, '[data-test-resize-handle]');

    if (!resizeHandle) {
      return;
    }

    let box = resizeHandle.getBoundingClientRect();
    let startX = (box.right + box.left) / 2;
    let y = box.top + (box.bottom - box.top) / 2;
    let deltaX = targetSize - this.renderedWidth;

    if (this.isFixedRight) {
      deltaX = -deltaX;
    }

    let finalX = startX + deltaX;

    await mouseDown(resizeHandle, startX, y);

    /**
     * Below a certain number of steps, Hammer (the gesture library
     * which recognizes panning) will not pick up the pointermove
     * events emitted by `mouseMove` before the gestrure completes.
     *
     * 5 seems a reasonable number.
     */
    let current = startX;
    for (let steps = 5; steps > 0; steps--) {
      await mouseMove(resizeHandle, current, y);
      current = current + (finalX - current) / steps;
    }
    await mouseMove(resizeHandle, finalX, y);
    await mouseUp(resizeHandle, finalX, y);
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

  async enterKeyup() {
    await triggerKeyEvent(findElement(this), 'keyup', 'Enter');
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
   * Selects all non-slack `th` header elements from all header rows.
   */
  headers: collection('th:not([data-test-ember-table-slack])', Header),

  /**
   * Selects all slack `th` header elements from all header rows.
   */
  slackHeaders: collection('th[data-test-ember-table-slack]', Header),

  /**
    Returns the height of the entire thead element.
  */
  get height() {
    return findElement(this).offsetHeight;
  },

  /**
    Returns the number of rows in the header.
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

  rows: collection({
    scope: 'tr',

    headers: collection('th:not([data-test-ember-table-slack])', Header),

    slackHeader: Header.extend({
      scope: 'th[data-test-ember-table-slack]',
    }),
  }),
};
