import { getOuterClientRect, getInnerClientRect } from './element.ts';

interface Bounds {
  leftBound: number;
  rightBound: number;
}

function createElement(mainClass: string, dimensions: Record<'top' | 'left' | 'width', number>): HTMLDivElement {
  let element = document.createElement('div');

  element.classList.add(mainClass);

  for (let key of Object.keys(dimensions) as (keyof typeof dimensions)[]) {
    element.style[key] = `${dimensions[key]}px`;
  }

  return element;
}

class ReorderIndicator {
  container: HTMLElement;
  element: HTMLElement;
  bounds: Bounds;
  child: Node | undefined;
  originLeft: number;
  indicatorElement: HTMLDivElement;
  private _left: number;

  constructor(
    container: HTMLElement,
    scale: number,
    element: HTMLElement,
    bounds: Bounds,
    mainClass: string,
    child?: Node
  ) {
    this.container = container;
    this.element = element;
    this.bounds = bounds;
    this.child = child;

    let scrollTop = this.container.scrollTop;
    let scrollLeft = this.container.scrollLeft;

    let { top: containerTop, left: containerLeft } = getInnerClientRect(this.container, scale);

    let { top: elementTop, left: elementLeft, width: elementWidth } = getOuterClientRect(
      this.element
    );

    let top = (elementTop - containerTop) * scale + scrollTop;
    let left = (elementLeft - containerLeft) * scale + scrollLeft;
    let width = elementWidth * scale;

    this.originLeft = left;
    this.indicatorElement = createElement(mainClass, { top, left, width });

    if (child) {
      this.indicatorElement.appendChild(child);
    }

    this.container.appendChild(this.indicatorElement);
    this._left = left;
  }

  destroy() {
    this.container.removeChild(this.indicatorElement);
  }

  set width(newWidth: number) {
    this.indicatorElement.style.width = `${newWidth}px`;
  }

  get left(): number {
    return this._left;
  }

  set left(newLeft: number) {
    let { leftBound, rightBound } = this.bounds;

    let width = this.indicatorElement.offsetWidth;

    if (newLeft < leftBound) {
      newLeft = leftBound;
    } else if (newLeft + width > rightBound) {
      newLeft = rightBound - width;
    }

    if (newLeft < this.originLeft) {
      this.indicatorElement.classList.remove('et-reorder-direction-right');
      this.indicatorElement.classList.add('et-reorder-direction-left');
    } else {
      this.indicatorElement.classList.remove('et-reorder-direction-left');
      this.indicatorElement.classList.add('et-reorder-direction-right');
    }

    this.indicatorElement.style.left = `${newLeft}px`;
    this._left = newLeft;
  }
}

export class MainIndicator extends ReorderIndicator {
  constructor(container: HTMLElement, scale: number, element: HTMLElement, bounds: Bounds) {
    let child = element.cloneNode(true);

    super(container, scale, element, bounds, 'et-reorder-main-indicator', child);
  }
}

export class DropIndicator extends ReorderIndicator {
  constructor(container: HTMLElement, scale: number, element: HTMLElement, bounds: Bounds) {
    super(container, scale, element, bounds, 'et-reorder-drop-indicator');
  }
}
