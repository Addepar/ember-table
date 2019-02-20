/* global ResizeSensor */
/* eslint-disable ember/no-observers */

const TABLE_POLYFILL_MAP = new WeakMap();

class TableStickyPolyfill {
  constructor(element) {
    this.element = element;

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

  repositionStickyElements = () => {
    let table = this.element.parentNode;
    let scale = table.offsetHeight / table.getBoundingClientRect().height;

    let rows = Array.from(this.element.children);
    let orderedRows = this.side === 'top' ? rows : rows.reverse();

    let offset = 0;

    let heights = orderedRows.map(r => r.getBoundingClientRect().height * scale);

    for (let i = 0; i < orderedRows.length; i++) {
      let row = orderedRows[i];
      let height = heights[i];

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
