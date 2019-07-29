import Controller from '@ember/controller';
import { A as emberA } from '@ember/array';
import { get, set } from '@ember/object';

import { action, computed } from '@ember-decorators/object';
import { generateRows } from '../../../../../utils/generators';

export default class FixedColumnsController extends Controller {
  @computed
  get rows() {
    return generateRows(100);
  }

  // BEGIN-SNIPPET docs-example-fixed-columns.js
  @computed
  get columns() {
    return [
      { name: 'A', valuePath: 'A', isFixed: 'left' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
      { name: 'E', valuePath: 'E' },
      { name: 'F', valuePath: 'F' },
      { name: 'G', valuePath: 'G' },
      { name: 'H', valuePath: 'H' },
      { name: 'I', valuePath: 'I' },
      { name: 'J', valuePath: 'J' },
      { name: 'K', valuePath: 'K', isFixed: 'right' },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-out-of-order-fixed-columns.js
  @computed
  get outOfOrderFixedColumns() {
    return [
      { name: 'A', valuePath: 'A', isFixed: 'right' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D', isFixed: 'left' },
      { name: 'E', valuePath: 'E' },
      { name: 'F', valuePath: 'F' },
      { name: 'G', valuePath: 'G' },
      { name: 'H', valuePath: 'H', isFixed: 'right' },
      { name: 'I', valuePath: 'I' },
      { name: 'J', valuePath: 'J' },
      { name: 'K', valuePath: 'K', isFixed: 'left' },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-dynamic-fixed-columns.js
  @computed
  get dynamicFixedColumns() {
    return emberA([
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
      { name: 'E', valuePath: 'E' },
      { name: 'F', valuePath: 'F' },
      { name: 'G', valuePath: 'G' },
      { name: 'H', valuePath: 'H' },
      { name: 'I', valuePath: 'I' },
      { name: 'J', valuePath: 'J' },
      { name: 'K', valuePath: 'K' },
    ]);
  }

  @action
  toggleFixed(column) {
    if (get(column, 'isFixed')) {
      set(column, 'isFixed', false);
    } else {
      set(column, 'isFixed', 'left');
    }
  }
  // END-SNIPPET
}
