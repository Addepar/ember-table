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

  @computed
  get headerActions() {
    return [
      {
        name: 'foo',
        text: 'Foo',
      },
      {
        name: 'bar',
        text: 'Bar',
      },
      {
        isDivider: true,
      },
      {
        name: 'baz',
        text: 'Baz',
        subActions: [
          {
            name: 'sub foo',
            text: 'Sub Foo',
          },
          {
            name: 'sub bar',
            text: 'Sub Bar',
          },
        ],
      },
    ];
  }

  @action
  onSelect(selectedRows) {
    this.set('selectedRows', selectedRows);
  }

  @action
  onUpdateSorts(sorts) {
    this.set('sorts', sorts);
  }

  @action
  onHeaderAction(action, args) {
    // eslint-disable-next-line
    console.log(action, args);
  }
}
