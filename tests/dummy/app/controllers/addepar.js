import Controller from '@ember/controller';
import { computed } from '@ember/object';
import ColumnDefinition from 'ember-table/models/column-definition';

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

  createHeader(name, valuePath) {
    return ColumnDefinition.create({
      columnName: name,
      valuePath
    });
  },

  columns: computed(function() {
    let arr = [];

    arr.push(this.createHeader('Data', 'date'));
    arr.push(this.createHeader('Open', 'open'));
    arr.push(this.createHeader('High', 'high'));
    arr.push(this.createHeader('Low', 'low'));

    return arr;
  })
});
