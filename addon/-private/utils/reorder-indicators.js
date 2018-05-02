import { getScale, getOuterClientRect, getInnerClientRect } from './element';

const DROP_INDICATOR_WIDTH = 5;

function createElement(mainClass, dimensions) {
  let element = document.createElement('div');

  element.classList.add(mainClass);

  for (let key in dimensions) {
    element.style[key] = `${dimensions[key]}px`;
  }

  return element;
}

class ReorderIndicator {
  constructor(container, element, bounds, mainClass, width) {
    this.container = container;
    this.element = element;
    this.bounds = bounds;
    this.width = width;
    this.scale = getScale(container);

    let scrollTop = this.container.scrollTop;
    let scrollLeft = this.container.scrollLeft;

    let { height: containerHeight, top: containerTop, left: containerLeft } = getInnerClientRect(
      this.container
    );

    let { top: elementTop, left: elementLeft } = getOuterClientRect(this.element);

    let top = (elementTop - containerTop) * this.scale + scrollTop;
    let left = (elementLeft - containerLeft) * this.scale + scrollLeft;
    let height = (containerHeight - (containerTop - elementTop)) * this.scale;

    this.indicatorElement = createElement(mainClass, {
      width,
      height,
      top,
      left,
    });

    this.container.appendChild(this.indicatorElement);
    this._left = left;
  }

  destroy() {
    this.container.removeChild(this.indicatorElement);
  }

  get left() {
    return this._left;
  }

  set left(newLeft) {
    let { leftBound, rightBound } = this.bounds;

    if (newLeft < leftBound) {
      newLeft = leftBound;
    } else if (newLeft + this.width > rightBound) {
      newLeft = rightBound - this.width;
    }

    this.indicatorElement.style.left = `${newLeft}px`;
    this._left = newLeft;
  }
}

export class MainIndicator extends ReorderIndicator {
  constructor(container, element, bounds) {
    let width = getOuterClientRect(element).width * getScale(element);

    super(container, element, bounds, 'et-reorder-main-indicator', width);
  }
}

export class DropIndicator extends ReorderIndicator {
  constructor(container, element, bounds) {
    super(container, element, bounds, 'et-reorder-drop-indicator', DROP_INDICATOR_WIDTH);
  }
}
