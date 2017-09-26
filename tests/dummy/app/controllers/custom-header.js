import Controller from '@ember/controller';
import { computed, action } from 'ember-decorators/object';
import { property } from '../utils/class';
import ColumnDefinition from '../models/column-definition';

const COLUMN_COUNT = 3;
export default class CustomHeaderController extends Controller {
  @property sortedRows = null;
  @property sortTypes = null;

  init() {
    super.init(...arguments);

    this.set('sortedRows', this.get('rows'));
    const sortTypes = [];
    for (let j = 0; j < COLUMN_COUNT; j++) {
      sortTypes.push('none');
    }
    this.set('sortTypes', sortTypes);
  }

  @computed
  rows() {
    const rows = [];
    for (let i = 0; i < 100; i++) {
      const obj = {};
      for (let j = 0; j < COLUMN_COUNT; j++) {
        obj[`col${j}`] = Math.floor(Math.random() * 500);
      }
      rows.push(obj);
    }
    return rows;
  }

  @computed
  columns() {
    const columns = [];
    for (let j = 0; j < COLUMN_COUNT; j++) {
      columns.push(ColumnDefinition.create({
        headerComponent: 'custom-header',
        columnName: `Column ${j}`,
        valuePath: `col${j}`,
        width: 180
      }));
    }
    return columns;
  }

  @action
  onHeaderEvent(eventObj) {
    // Sort event.
    const sortedRows = this.get('sortedRows');
    const columns = this.get('columns');
    const { valuePath } = columns[eventObj.columnIndex];
    const sortTypes = this.get('sortTypes');
    let sortType = sortTypes[eventObj.columnIndex];

    if (sortType === 'none' || sortType === 'descending') {
      sortType = 'ascending';
    } else {
      sortType = 'descending';
    }
    sortTypes[eventObj.columnIndex] = sortType;

    // Sort rows
    sortedRows.sort((obj1, obj2) => {
      if (sortType === 'ascending') {
        return obj1[valuePath] - obj2[valuePath];
      }
      return obj2[valuePath] - obj1[valuePath];
    });
    const newRows = [];
    newRows.push(...sortedRows);
    this.set('sortedRows', newRows);
  }
}
