import { collection, count } from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';
import { getter } from 'ember-cli-page-object/macros';

import {
  pressElement,
  moveMouse,
  releasePress
} from './drag-helper';

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
    width: getter(function() {
      return findElement(this).offsetWidth;
    }),

    /**
     * Retrieves selected header cell height.
     */
    height: getter(function() {
      return findElement(this).offsetHeight;
    }),

    async resize(deltaX) {
      let header = findElement(this);
      let box = header.getBoundingClientRect();
      let startX = box.right - 5;
      await pressElement(header, startX, header.clientHeight / 2);
      await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
      await moveMouse(header, startX + deltaX, header.clientHeight / 2);
    }
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
};
