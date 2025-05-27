import Controller from '@ember/controller';
import { A as emberA } from '@ember/array';
import { get, set, action } from '@ember/object';

import { generateRows } from 'dummy/utils/generators';
import { computed } from '@ember/object';

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  // BEGIN-SNIPPET docs-example-fixed-columns.js
  columns: computed(function() {
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
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-out-of-order-fixed-columns.js
  outOfOrderFixedColumns: computed(function() {
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
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-dynamic-fixed-columns.js
  dynamicFixedColumns: computed(function() {
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
  }),
  // END-SNIPPET

  toggleFixed: action(function(column) {
    if (column.isFixed) {
      set(column, 'isFixed', false);
    } else {
      set(column, 'isFixed', 'left');
    }
  }),
});
