/* global ResizeSensor */

/**
  These functions polyfill our usage of position: sticky; in IE11. They are not a general
  position: sticky; polyfill, and should not be used as such.
*/

export const IS_IE = window.navigator.userAgent.match(/MSIE|Trident\/7.0/);

function positionStickyElements(component) {
  let thead = component._header;
  let tfoot = component._footer;

  let leftColumn = component.element.querySelectorAll('tr > *:first-child');

  let scrollLeft = component.element.scrollLeft;
  let scrollTop = component.element.scrollTop;

  thead.style.position = 'absolute';
  tfoot.style.position = 'absolute';

  thead.style.transform = `translateY(${scrollTop}px)`;
  tfoot.style.transform = `translateY(${scrollTop}px)`;

  component._fakeHeaderRow.style.height = `${thead.offsetHeight}px`;
  component._fakeFooterRow.style.height = `${tfoot.offsetHeight}px`;

  for (let cell of leftColumn) {
    cell.style.transform = `translateX(${scrollLeft}px)`;
  }

}

export function setupStickyPolyfill(component) {
  component._table = component.element.querySelector('table');
  component._header = component.element.querySelector('thead');
  component._footer = component.element.querySelector('tfoot');

  if (component._header) {
    component._fakeHeader = document.createElement('thead');
    component._fakeHeaderRow = document.createElement('tr');
    component._fakeHeader.insertBefore(component._fakeHeaderRow, null);

    component._table.insertBefore(component._fakeHeader, component._table.firstChild);
  }

  if (component._footer) {
    component._fakeFooter = document.createElement('tfoot');
    component._fakeFooterRow = document.createElement('tr');
    component._fakeFooter.insertBefore(component._fakeFooterRow, null);

    component._table.insertBefore(component._fakeFooter, null);
  }

  component._repositionHandler = positionStickyElements.bind(null, component);

  component.element.addEventListener('scroll', component._repositionHandler);

  component._mainResizeSensor = new ResizeSensor(
    component.element,
    component._repositionHandler
  );

  component._headerResizeSensor = new ResizeSensor(
    component._header,
    component._repositionHandler
  );

  component._footerResizeSensor = new ResizeSensor(
    component._footer,
    component._repositionHandler
  );

  positionStickyElements(component);
}

export function teardownStickyPolyfill(component) {
  component.element.removeEventListener('scroll', component._repositionHandler);

  component._mainResizeSensor.detach(component.element);
  component._headerResizeSensor.detach(component.element);
  component._footerResizeSensor.detach(component.element);
}
