import Controller from '@ember/controller';

import { computed } from '@ember/object';
import { generateRows, generateColumns } from '../../../utils/generators';

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  columns: computed(function() {
    return generateColumns(7);
  }),
});
