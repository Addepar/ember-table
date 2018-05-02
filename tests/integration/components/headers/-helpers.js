import { find } from 'ember-native-dom-helpers';
import { mouseDown, mouseMove, mouseUp } from 'ember-table/test-support/helpers/mouse';
import { getScale } from 'ember-table/test-support/helpers/element';

export async function waitFrames(numFrames) {
  for (let i = 0; i < numFrames; i++) {
    await new Promise(resolve => requestAnimationFrame(resolve));
  }
}

export async function scrollToEdge(targetElement, edgeOffset, direction, shouldWait) {
  let targetElementRight = targetElement.getBoundingClientRect().right;
  let container = find('.ember-table');
  let scale = getScale(container);
  let edge;

  if (direction === 'right') {
    await mouseDown(targetElement, targetElementRight - 30, 0);
    await mouseMove(targetElement, targetElementRight - 20, 0);
    await mouseMove(targetElement, targetElementRight - 10, 0);

    edge = container.getBoundingClientRect().right - edgeOffset / scale;
  } else {
    await mouseDown(targetElement, targetElementRight - 10, 0);
    await mouseMove(targetElement, targetElementRight - 20, 0);
    await mouseMove(targetElement, targetElementRight - 30, 0);

    edge = container.getBoundingClientRect().left + edgeOffset / scale;
  }

  if (shouldWait) {
    await mouseMove(targetElement, edge, 0);
  } else {
    mouseMove(targetElement, edge, 0);

    await waitFrames(20);
  }

  await mouseUp(targetElement);
}

export async function resizeToLeftEdge(column, edgeOffset = 0) {
  let target = column.querySelector('.et-header-resize-area');

  await scrollToEdge(target, edgeOffset, 'left', true);
}

export async function resizeToRightEdge(column, edgeOffset = 0) {
  let target = column.querySelector('.et-header-resize-area');

  await scrollToEdge(target, edgeOffset, 'right', false);
}

export async function reorderToLeftEdge(column, edgeOffset = 0) {
  await scrollToEdge(column, edgeOffset, 'left', true);
}

export async function reorderToRightEdge(column, edgeOffset = 0) {
  await scrollToEdge(column, edgeOffset, 'right', true);
}
