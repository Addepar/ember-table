import { getScale, getOuterClientRect, getInnerClientRect } from './element';

function createElement(mainClass, dimensions) {
  let element = document.createElement('div');

  element.classList.add(mainClass);

  for (let key in dimensions) {
    element.style[key] = `${dimensions[key]}px`;
  }

  return element;
}

class ReorderIndicator {
  constructor(container, element, bounds, mainClass, child) {
    this.container = container;
    this.element = element;
    this.bounds = bounds;
    this.child = child;
    this.scale = getScale(container);

    let scrollTop = this.container.scrollTop;
    let scrollLeft = this.container.scrollLeft;

    let { top: containerTop, left: containerLeft } = getInnerClientRect(this.container);

    let { top: elementTop, left: elementLeft, width: elementWidth } = getOuterClientRect(
      this.element
    );

    let top = (elementTop - containerTop) * this.scale + scrollTop;
    let left = (elementLeft - containerLeft) * this.scale + scrollLeft;
    let width = elementWidth * this.scale;

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

  set width(newWidth) {
    this.indicatorElement.style.width = `${newWidth}px`;
  }

  get left() {
    return this._left;
  }

  set left(newLeft) {
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
  constructor(container, element, bounds) {
    // let width = getOuterClientRect(element).width * getScale(element);
    let child = element.cloneNode(true);

    super(container, element, bounds, 'et-reorder-main-indicator', child);
  }
}

export class DropIndicator extends ReorderIndicator {
  constructor(container, element, bounds) {
    super(container, element, bounds, 'et-reorder-drop-indicator');
  }
}
