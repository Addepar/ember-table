import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Controller.extend({
  tableColumns: Ember.computed(function() {
    var colors = ['blue', 'teal', 'green', 'yellow', 'orange'];
    var firstColumn = ColumnDefinition.create({
      savedWidth: 50,
      headerCellName: 'Name',
      contentPath: 'key'
    });
    var columns = colors.map(function(color, index) {
      return ColumnDefinition.create({
        color: color,
        headerCellName: 'Bar',
        tableCellViewClass: 'bar-table-cell',
        contentPath: 'value' + (index + 1)
      });
    });
    columns.unshift(firstColumn);
    return columns;
  }),

  tableContent: Ember.computed(function() {
    return _.range(100).map(function(index) {
      return {
        key: index,
        value1: Math.random() * 80 + 10,
        value2: Math.random() * 80 + 10,
        value3: Math.random() * 80 + 10,
        value4: Math.random() * 80 + 10,
        value5: Math.random() * 80 + 10
      };
    });
  })
});
