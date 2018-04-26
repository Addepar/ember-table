import { collection } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';

import { pressElement, moveMouse, releasePress } from './drag-helper';

export default {
  scope: 'thead',

  /**
   * List of columns in the header.
   */
  columns: collection({
    scope: 'tr:eq(0) th',

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

    /**
     * Resizes this column by dragging right border several pixels.
     */
    async resize(deltaX) {
      let header = findElement(this);
      let box = header.getBoundingClientRect();
      let startX = box.right - 5;

      await this._moveByPixel(header, startX, deltaX);
    },

    /**
     * Moves this header to left (or right).
     *
     * @params deltaPosition Indicates how many index this column should move. Tthis is a positive
     *    number if the column is moved to its right and negative if it's moved to its left.
     */
    async moveByIndex(deltaPosition) {
      let header = findElement(this);
      let box = header.getBoundingClientRect();
      let width = header.offsetLeft;
      let deltaX = deltaPosition * width;
      let startX = (box.right + box.left) / 2;

      await this._moveByPixel(header, startX, deltaX);
    },

    /**
     * Moves this header to left (or right) by a certain pixel.
     *
     * @params deltaPosition Indicates how many pixels this column should move. Tthis is a positive
     *    number if the column is moved to its right and negative if it's moved to its left.
     */
    async moveByPixel(deltaX) {
      let header = findElement(this);
      let box = header.getBoundingClientRect();
      let startX = (box.right + box.left) / 2;

      await this._moveByPixel(header, startX, deltaX);
    },

    async _moveByPixel(header, startX, deltaX) {
      await pressElement(header, startX, header.clientHeight / 2);
      await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
      await moveMouse(header, startX + deltaX, header.clientHeight / 2);
      await releasePress(header, startX + deltaX, header.clientHeight / 2);
    },
  }),

  subcolumns: collection({
    scope: 'tr:eq(1) th',
  }),

  rows: collection({
    scope: 'tr',
  }),
};
