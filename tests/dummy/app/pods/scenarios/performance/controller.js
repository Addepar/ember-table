import Controller from '@ember/controller';

import { action, computed } from '@ember-decorators/object';
import { generateRows, generateColumns } from '../../../utils/generators';

export default class BasicController extends Controller {
  @computed
  get rows() {
    return generateRows(10, 3, (row, key) => `${row.id}${key}`);
  }

  @computed
  get columns() {
    return generateColumns(20);
  }

  @action
  onSelect(selectedRows) {
    this.set('selectedRows', selectedRows);
  }

  @action
  onUpdateSorts(sorts) {
    this.set('sorts', sorts);
  }
}
