import { A as emberA } from '@ember/array';
import { toBase26 } from './base-26';
import faker from 'faker';

export function getRandomInt(max, min) {
  return faker.random.number({ min, max });
}

function identity(row, key) {
  return key;
}

export class DummyRow {
  constructor(id, format = identity) {
    this.id = id;
    this.format = format;

    // Set these so that they are not picked up by `unknownProperty` below
    this.disableCollapse = null;
    this.children = null;
  }

  unknownProperty(key) {
    return this.format(this, key);
  }
}

export function generateRow(id, format) {
  return new DummyRow(id, format);
}

export function generateRows(rowCount, depth, format, idPrefix = '') {
  let arr = [];

  for (let i = 0; i < rowCount; i++) {
    let id = idPrefix + i;
    let row = generateRow(id, format);

    if (depth > 1) {
      row.children = generateRows(rowCount, depth - 1, format, id);
    }

    arr.push(row);
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
