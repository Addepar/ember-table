import Controller from '@ember/controller';

import { computed } from '@ember/object';
import { generateRows } from '../../../../../utils/generators';

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  widthConstraint: 'eq-container',
  fillMode: 'equal-column',

  // BEGIN-SNIPPET docs-example-header-size-constraints.js
  columns: computed(function() {
    return [
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
    ];
  }),
  // END-SNIPPET
});
