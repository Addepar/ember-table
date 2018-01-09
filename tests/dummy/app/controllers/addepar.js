import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  rows: computed(function() {
    let arr = [];

    for (let i = 0; i < 20; i++) {
      arr.push({
        date: '123',
        open: '20',
        high: '100',
        low: '10'
      });
    }

    return arr;
  }),

  columns: [{
    columnName: 'Data',
    valuePath: 'date'
  }, {
    columnName: 'Open',
    valuePath: 'open'
  }, {
    columnName: 'High',
    valuePath: 'high'
  }, {
    columnName: 'Low',
    valuePath: 'low'
  }]
});
