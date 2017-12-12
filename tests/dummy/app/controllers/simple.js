import Controller from '@ember/controller';
import ColumnDefinition from '../models/column-definition';
import { computed } from 'ember-decorators/object';
import { A as emberA } from '@ember/array';

const COLUMN_COUNT = 4;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default class SimpleController extends Controller {
  @computed
  get rows() {
    let rows = emberA();
    for (let i = 0; i < 1000; i++) {
      let obj = {};
      for (let j = 0; j < COLUMN_COUNT; j++) {
        obj[ALPHABET[j % 26]] = ALPHABET[j % 26];
      }
      rows.pushObject(obj);
    }

    return rows;
  }

  @computed
  get columns() {
    let columns = emberA();
    let columnWidth = 180;

    for (let j = 0; j < COLUMN_COUNT; j++) {
      columns.pushObject(ColumnDefinition.create({
        columnName: `Col ${ALPHABET[j % 26]}`,
        valuePath: ALPHABET[j % 26],
        width: columnWidth,
        isResizable: true,
        isReorderable: true
      }));
    }

    return columns;
  }
}
