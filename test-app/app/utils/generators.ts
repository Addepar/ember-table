import { A as emberA } from '@ember/array';
import type { EmberTableColumn } from 'ember-table';
import { toBase26 } from './base-26';

const DEFAULT_USE_EMBER_ARRAY = true;
let useEmberArray = DEFAULT_USE_EMBER_ARRAY;

export function configureTableGeneration({ useEmberArray: _useEmberArray }: { useEmberArray: boolean }) {
  useEmberArray = _useEmberArray;
}

export function resetTableGenerationConfig() {
  useEmberArray = DEFAULT_USE_EMBER_ARRAY;
}

export function getRandomInt(max: number, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export type RowFormat = (row: DummyRow, key: string) => unknown;

function identity(row: DummyRow, key: string) {
  return key;
}

export class DummyRow {
  id: string | number;
  format: RowFormat;
  disableCollapse: boolean | null;
  children: DummyRow[] | null;

  constructor(id: string | number, format: RowFormat = identity) {
    this.id = id;
    this.format = format;

    // Set these so that they are not picked up by `unknownProperty` below
    this.disableCollapse = null;
    this.children = null;
  }

  unknownProperty(key: string) {
    return this.format(this, key);
  }
}

export function generateRow(id: string | number, format?: RowFormat) {
  return new DummyRow(id, format);
}

export function generateRows(
  rowCount: number,
  depth?: number,
  format?: RowFormat,
  idPrefix = ''
): DummyRow[] {
  let arr: DummyRow[] = [];

  for (let i = 0; i < rowCount; i++) {
    let id = idPrefix + i;
    let row = generateRow(id, format);

    if (depth !== undefined && depth > 1) {
      row.children = generateRows(rowCount, depth - 1, format, id);
    }

    arr.push(row);
  }

  return useEmberArray ? emberA(arr) : arr;
}

export interface GeneratedColumn extends EmberTableColumn {
  name: string;
  valuePath: string;
  subcolumns?: GeneratedColumn[];
  [option: string]: unknown;
}

export interface ColumnGenerationOptions {
  id?: number[];
  subcolumnCount?: number;
  fixedLeftCount?: number;
  fixedRightCount?: number;
  [option: string]: unknown;
}

export function generateColumn(id: number | number[], options?: object): GeneratedColumn {
  let formattedId = Array.isArray(id) ? id.map(toBase26).join(' ') : toBase26(id);

  return {
    name: formattedId,
    valuePath: formattedId,

    ...options,
  };
}

export function generateColumns(
  columnCount: number,
  {
    id = [],
    subcolumnCount = 0,
    fixedLeftCount = 0,
    fixedRightCount = 0,

    ...columnOptions
  }: ColumnGenerationOptions = {}
): GeneratedColumn[] {
  let columns: GeneratedColumn[] = [];

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
    columns[i]!.isFixed = 'left';
  }

  for (let i = 0; i < fixedRightCount; i++) {
    columns[columnCount - i - 1]!.isFixed = 'right';
  }

  return useEmberArray ? emberA(columns) : columns;
}
