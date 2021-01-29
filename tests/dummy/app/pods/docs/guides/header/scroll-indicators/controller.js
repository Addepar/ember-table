import Controller from '@ember/controller';
import { computed } from '@ember/object';

import { generateRows } from '../../../../../utils/generators';

export default Controller.extend({
  // BEGIN-SNIPPET docs-example-scroll-indicators.js
  columns: computed(function() {
    return [
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
    ];
  }),
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-scroll-indicators-with-fixed.js
  columnsWithFixed: computed(function() {
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

  // BEGIN-SNIPPET docs-example-scroll-indicators-with-footer.js
  columnsWithFooter: computed(function() {
    return [
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
    ];
  }),
  // END-SNIPPET

  rows: computed(function() {
    return generateRows(100);
  }),

  footerRows: computed(function() {
    return generateRows(100, 1, (row, key) => {
      return String.fromCharCode(key.charCodeAt(0) + 7);
    });
  }),
});
