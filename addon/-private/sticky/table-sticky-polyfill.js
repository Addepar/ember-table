/* global ResizeSensor */
/* eslint-disable ember/no-observers */

const TABLE_POLYFILL_MAP = new WeakMap();

class TableStickyPolyfill {
  constructor(element) {
    this.element = element;
    this.maxStickyProportion = 0.5;

    this.element.style.position = 'static';
    this.side = element.tagName === 'THEAD' ? 'top' : 'bottom';

    this.setupRaf = requestAnimationFrame(this.repositionStickyElements);

    this.setupResizeSensors();
    this.setupRowMutationObservers();

    this.mutationObserver = new MutationObserver(() => {
      this.teardownResizeSensors();
      this.teardownRowMutationObservers();

      this.setupResizeSensors();
      this.setupRowMutationObservers();

      this.repositionStickyElements();
    });

    this.mutationObserver.observe(this.element, { childList: true });
  }

  destroy() {
    this.element.style.position = 'sticky';

    cancelAnimationFrame(this.setupRaf);

    this.teardownResizeSensors();
    this.teardownRowMutationObservers();

    this.mutationObserver.disconnect();
  }

  setupRowMutationObservers = () => {
    let rows = Array.from(this.element.children);

    this.rowMutationObservers = rows.map(row => {
      let observer = new MutationObserver(this.repositionStickyElements);

      observer.observe(row, { childList: true });

      return observer;
    });
  };

  teardownRowMutationObservers = () => {
    this.rowMutationObservers.forEach(observer => observer.disconnect());
  };

  setupResizeSensors = () => {
    let rows = Array.from(this.element.children);
    let firstCells = rows.map(r => r.firstElementChild);

    this.resizeSensors = firstCells.map(cell => {
      let sensor = new ResizeSensor(cell, this.repositionStickyElements);

      return [cell, sensor];
    });
  };

  teardownResizeSensors = () => {
    this.resizeSensors.forEach(([cell, sensor]) => sensor.detach(cell));
  };

  /**
     Repositions all the `td`|`th` inside each `tr` of the `tfoot`|`thead`.
     The `td` and `th` cells must be sticky due to existing Chrome and Edge bugs
     that don't apply the sticky to the footer/header:
       * Chrome bug: https://bugs.chromium.org/p/chromium/issues/detail?id=702927
       * Edge bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/16765952/
       * More details at: https://caniuse.com/#search=fixed

     Calculates the table's scale and scrollable height and, working top-down for header or bottom-up for footer,
     sets the cells for each row to be `position:sticky` with a calculated `top` or `bottom` offset so that they
     appear correctly fixed in the table.
     The calculation takes into account the height of each row as it goes, adjusting the next row's top|bottom offset
     accordingly.

     For example, assuming the following table with 2 thead and 2 tfoot rows:
       * There will be 2 TableStickyPolyfills created, one for the thead, one for the tfoot
       * For the thead TableStickyPolifyill, its `repositionStickyElements` will
         start at row 0, setting each of its `th` cells' `top` value to `0px`, then
         add row 0's height (25px) to its current offset and move on to row 1,
         where it will set each of that row's `th` cells' `top` to the current
         offset of `25px`.
       * For the tfoot TableStickyPolyfill, its `repositionStickyElements` will
         start at the bottom-most row, row 1, and set each of its `td` cells'
         `bottom` value to `0px`, then add row 1's height (20px) to its current
         offset and move on to the next row, row 0, where it will set each of that
         row's `td` cells' `bottom` to the current offset of `20px`.

   +--------------------------------------------+
   |+------------------------------------------+|
   ||thead                                     ||
   ||+----------------------------------------+||
   |||row 0 (height: 25px)  top: 0px          |||
   ||+----------------------------------------+||
   ||+----------------------------------------+||
   |||row 1                 top: 25px         |||
   ||+----------------------------------------+||
   |+------------------------------------------+|
   |                                            |
   |           ....   tbody  ....               |
   |                                            |
   |+------------------------------------------+|
   ||tfoot                                     ||
   ||+----------------------------------------+||
   |||row 0                     bottom: 20px  |||
   ||+----------------------------------------+||
   ||+----------------------------------------+||
   |||row 1  (height: 20px)     bottom: 0px   |||
   ||+----------------------------------------+||
   |+------------------------------------------+|
   +--------------------------------------------+

   If a table has enough header|footer rows, they cumulatively add up to greater than the
   table's height. In this case, the standard calculation of `stick`ing each
   row to its calculated offset from the top|bottom will cause the
   header|footer rows to stick over *all* of the scrollable body rows,
   preventing them (as well as possibly some header|footer rows) from being
   seen.

   To account for this potential situation, the repositioning sets a maximum percentage height
   for the header|footer of 50%. If the rows take up greater than that percentage of the table's
   height, all of the overflowing rows are positioned using a negative offset so that they
   will be visible when scrolling to the top|bottom of the table for thead|tfoot overflow rows, respectively.

   For example, the following table has footer rows totaling 75px, but the table's height
   is only 120px. The footer rows take up more than 50% of the table, so the bottom-most
   footer row (2) is positioned at (tableHeight - footerHeight = 75 - 120) -45px, the next
   footer row (1) is positioned at (-45 + 30) -15px, and the top-most footer row (0)
   is at (-15 + 20) 5px.

   The effect is that the top row (0) will be fully visible, row 1 will be partially visible,
   and row 2 will be hidden until the table is scrolled all the way to the bottom.

  +-----------------------------------+          ------------^---
  |table                              |                      |Table height: 120px
  |                                   |                      |
  |                                   |                      |
  |                                   |                      |
  |                                   |                      |
  |                                   |                      |
  |+--------------------------------+ | ^---                 |
  ||tfoot                           | | |                    |
  ||+------------------------------+| | |tfoot height        |
  |||row 0 (20px)     bottom:   5px|| | |20+25+30 = 75px     |
  |||                              || | |                    |
  |||                              || | |                    |
  ||+------------------------------+| | |                    |
  ||+------------------------------+| | |                    |
  |||row 1 (25px)     bottom: -15px|| | |                    |
  |||                              || | |                    |
  +-----------------------------------+ |        ------------v---
   |+                              +|   |
   |+------------------------------+|   |
   ||row 2 (30px)     bottom: -45px||   |
   ||                              ||   |
   |+------------------------------+|   |
   |                                |   |
   +--------------------------------+   v---
   */
  repositionStickyElements = () => {
    let table = this.element.parentNode;
    let scale = table.offsetHeight / table.getBoundingClientRect().height;
    let containerHeight = table.parentNode.offsetHeight;

    // exclude ResizeSensor divs
    let rows = Array.from(this.element.querySelectorAll('tr'));
    let offset = 0;
    let heights = rows.map(r => r.getBoundingClientRect().height * scale);

    let totalHeight = heights.reduce((sum, h) => (sum += h), 0);
    let maxHeight = containerHeight * this.maxStickyProportion;
    if (totalHeight > maxHeight) {
      offset = maxHeight - totalHeight;
    }

    for (let i = 0; i < rows.length; i++) {
      // Work top-down (index order) for 'top', bottom-up (reverse index
      // order) for 'bottom' rows
      let index = this.side === 'top' ? i : rows.length - 1 - i;
      let row = rows[index];
      let height = heights[index];

      for (let child of row.children) {
        child.style.position = '-webkit-sticky';
        child.style.position = 'sticky';
        child.style[this.side] = `${offset}px`;
      }

      offset += height;
    }
  };
}

export function setupTableStickyPolyfill(element) {
  TABLE_POLYFILL_MAP.set(element, new TableStickyPolyfill(element));
}

export function teardownTableStickyPolyfill(element) {
  TABLE_POLYFILL_MAP.get(element).destroy();
  TABLE_POLYFILL_MAP.delete(element);
}
