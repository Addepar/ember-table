/* global ResizeSensor */

/**
  These functions polyfill our usage of position: sticky; in IE11. They are not a general
  position: sticky; polyfill, and should not be used as such.
*/

let LEGACY_POLYFILL_MAP = new WeakMap();

class LegacyStickyPolyfill {
  constructor(element) {
    this.element = element;
    this.table = element.querySelector('table');
    this.header = element.querySelector('thead');
    this.footer = element.querySelector('tfoot');

    element.addEventListener('scroll', this.positionStickyElements);

    this.mainResizeSensor = new ResizeSensor(
      this.element,
      this.positionStickyElements
    );

    if (this.header) {
      this.fakeHeader = document.createElement('thead');
      this.fakeHeaderRow = document.createElement('tr');
      this.fakeHeader.insertBefore(this.fakeHeaderRow, null);

      this.headerResizeSensor = new ResizeSensor(
        this.header,
        this.positionStickyElements
      );

      this.table.insertBefore(this.fakeHeader, this.table.firstChild);
    }

    if (this.footer) {
      this.fakeFooter = document.createElement('tfoot');
      this.fakeFooterRow = document.createElement('tr');
      this.fakeFooter.insertBefore(this.fakeFooterRow, null);

      this.footerResizeSensor = new ResizeSensor(
        this.footer,
        this.positionStickyElements
      );

      this.table.insertBefore(this.fakeFooter, null);
    }

    this.positionStickyElements();
  }

  destroy() {
    this.element.removeEventListener('scroll', this.positionStickyElements);

    this.mainResizeSensor.detach(this.element);

    if (this.header) {
      this.headerResizeSensor.detach(this.header);
      this.fakeHeader.parentNode.removeChild(this.fakeHeader);
    }

    if (this.footer) {
      this.footerResizeSensor.detach(this.footer);
      this.fakeFooter.parentNode.removeChild(this.fakeFooter);
    }
  }

  positionStickyElements = () => {
    let thead = this.header;
    let tfoot = this.footer;

    let leftColumn = this.element.querySelectorAll('tr > *:first-child');

    let scrollLeft = this.element.scrollLeft;
    let scrollTop = this.element.scrollTop;

    if (thead) {
      thead.style.position = 'absolute';
      thead.style.transform = `translateY(${scrollTop}px)`;
      this.fakeHeaderRow.style.height = `${thead.offsetHeight}px`;
    }

    if (tfoot) {
      tfoot.style.position = 'absolute';
      tfoot.style.transform = `translateY(${scrollTop}px)`;
      this.fakeFooterRow.style.height = `${tfoot.offsetHeight}px`;
    }

    for (let cell of leftColumn) {
      cell.style.transform = `translateX(${scrollLeft}px)`;
    }
  };
}

export function setupLegacyStickyPolyfill(element) {
  LEGACY_POLYFILL_MAP.set(element, new LegacyStickyPolyfill(element));
}

export function teardownLegacyStickyPolyfill(element) {
  LEGACY_POLYFILL_MAP.get(element).destroy();
  LEGACY_POLYFILL_MAP.delete(element);
}
