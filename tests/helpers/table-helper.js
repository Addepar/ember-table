import {
  find
} from 'ember-native-dom-helpers';

import {
  pressElement,
  moveMouse,
  releasePress
} from './drag-helper';

export async function moveTableColumn(columnIndex, deltaPosition) {
  let header = find(`.et-thead tr th:nth-child(${columnIndex})`);
  let box = header.getBoundingClientRect();
  let width = header.offsetLeft;
  let startX = (box.right + box.left) / 2;
  let deltaX = deltaPosition * width;

  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);
  await releasePress(header, startX + deltaX, header.clientHeight / 2);
}

export async function resizeColumn(columnIndex, deltaX) {
  let header = getHeaderElement(columnIndex);
  let box = header.getBoundingClientRect();
  let startX = box.right - 5;
  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);
}

export function getHeaderElement(headerIndex) {
  return find(`.et-thead tr th:nth-child(${headerIndex})`);
}
