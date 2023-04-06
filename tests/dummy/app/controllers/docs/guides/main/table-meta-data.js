import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { generateRows } from 'dummy/utils/generators';

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  columns: computed(function() {
    return [
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
      { name: 'E', valuePath: 'E' },
      { name: 'F', valuePath: 'F' },
      { name: 'G', valuePath: 'G' },
    ];
  }),
});
