import { A as emberA } from '@ember/array';
import { toBase26 } from './base-26';

function identity(row, key) {
  return key;
}

export class DummyRow {
  constructor(id, format = identity) {
    this.id = id;
    this.format = format;
  }

  unknownProperty(key) {
    return this.format(this, key);
  }
}

export function generateRow(id, format) {
  return new DummyRow(id, format);
}

export function generateRows(rowCount, format) {
  let arr = [];

  for (let i = 0; i < rowCount; i++) {
    arr.push(generateRow(i, format));
  }

  return emberA(arr);
}

export function generateColumn(id, options) {
  let formattedId = Array.isArray(id) ? id.map(toBase26).join(' ') : toBase26(id);

  return {
    name: formattedId,
    valuePath: formattedId,

    ...options,
  };
}

export function generateColumns(
  columnCount,
  {
    id = [],
    subcolumnCount = 0,
    fixedLeftCount = 0,
    fixedRightCount = 0,

    ...columnOptions
  } = {}
) {
  let columns = [];

  for (let i = 0; i < columnCount; i++) {
    let columnId = id.slice();

    columnId.push(i);

    let columnDefinition = generateColumn(columnId, columnOptions);

    if (subcolumnCount) {
      columnDefinition.subcolumns = generateColumns(subcolumnCount, {
        id: columnId,
        ...columnOptions,
      });
    }

    columns.push(columnDefinition);
  }

  for (let i = 0; i < fixedLeftCount; i++) {
    columns[i].isFixed = 'left';
  }

  for (let i = 0; i < fixedRightCount; i++) {
    columns[columnCount - i - 1].isFixed = 'right';
  }

  return emberA(columns);
}
