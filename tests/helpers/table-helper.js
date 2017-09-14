import {
  find
} from 'ember-native-dom-helpers';

import {
  pressElement,
  moveMouse,
  releasePress
} from './drag-helper';

export async function moveTableColumn(columnIndex, deltaPosition) {
  const header = find(`.et-thead tr th:nth-child(${columnIndex})`);
  const box = header.getBoundingClientRect();
  const width = header.offsetLeft;
  const startX = (box.right + box.left) / 2;
  const deltaX = deltaPosition * width;

  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);
  await releasePress(header, startX + deltaX, header.clientHeight / 2);
}

export async function resizeColumn(columnIndex, deltaX) {
  const header = getHeaderElement(columnIndex);
  const box = header.getBoundingClientRect();
  const startX = box.right - 5;
  await pressElement(header, startX, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX / 2, header.clientHeight / 2);
  await moveMouse(header, startX + deltaX, header.clientHeight / 2);
}

export function getHeaderElement(headerIndex) {
  return find(`.et-thead tr th:nth-child(${headerIndex})`);
}
