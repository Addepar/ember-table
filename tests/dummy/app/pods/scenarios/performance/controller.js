import Controller from '@ember/controller';

import { action, computed } from '@ember-decorators/object';
import { generateRows, generateColumns } from '../../../utils/generators';

export default class BasicController extends Controller {
  @computed
  get rows() {
    let rows = generateRows(10, 3, (row, key) => `${row.id}${key}`);

    rows[0].children[0].children[0].children = generateRows(10, 1, (row, key) => `${row.id}${key}`);

    return rows;
  }

  @computed
  get columns() {
    let columns = generateColumns(20);

    columns[0].width = 300;

    return columns;
  }

  @action
  onSelect(selection) {
    this.set('selection', selection);
  }

  @action
  onUpdateSorts(sorts) {
    this.set('sorts', sorts);
  }
}
