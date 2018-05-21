import PageObject, { alias, collection, hasClass } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import { click } from 'ember-native-dom-helpers';

import AddeDropdownPage from '@addepar/pop-menu/test-support/pages/adde-dropdown';
import AddeSubDropdownPage from '@addepar/pop-menu/test-support/pages/adde-sub-dropdown';

import { mouseDown, mouseMove, mouseUp } from '../../helpers/mouse';
import { getScale } from '../../helpers/element';

const Header = PageObject.extend({
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

  /**
   * Resizes this column by dragging right border several pixels.
   */
  async resize(targetSize) {
    let resizeHandle = findElement(this, '.et-header-resize-area');
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
    let box = header.getBoundingClientRect();
    let deltaX = deltaPosition * box.width;
    let startX = (box.right + box.left) / 2;

    await mouseDown(header, startX - 20, header.clientHeight / 2);
    await mouseMove(header, startX, header.clientHeight / 2);
    await mouseMove(header, startX + deltaX, header.clientHeight / 2);
    await mouseUp(header, startX + deltaX, header.clientHeight / 2);
  },

  sortToggle: {
    scope: '[data-test-sort-toggle]',

    /**
      Helper function to click with options like the meta key and ctrl key set

      @param {Object} options - click event options
    */
    async clickWith(options) {
      await click(findElement(this), options);
    },
  },

  sortIndicator: {
    scope: '[data-test-sort-indicator]',
    isAscending: hasClass('ascending'),
    isDescending: hasClass('descending'),
  },

  actionDropdown: {
    scope: '[data-test-action-dropdown]',

    dropdown: AddeDropdownPage.extend({
      scope: '[data-test-action-dropdown-menu]',

      content: {
        items: collection({
          scope: 'li > button',

          subDropdown: AddeSubDropdownPage.extend({
            scope: '[data-test-action-sub-dropdown-menu]',

            content: {
              items: collection({
                scope: 'li > button',
              }),
            },
          }),

          subActions: alias('subDropdown.content.items'),
        }),
      },
    }),

    open: alias('dropdown.open'),
    close: alias('dropdown.close'),
    items: alias('dropdown.content.items'),
  },
});

export default {
  scope: 'thead',

  /**
   * List of columns in the header.
   */
  headers: collection(Header.scope('th')),

  rows: collection({
    scope: 'tr',
  }),
};
