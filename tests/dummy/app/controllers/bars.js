// BEGIN-SNIPPET bars-controller
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
        tableCellViewClass: 'bar-table/bar-cell',
        contentPath: 'value' + (index + 1)
      });
    });
    columns.unshift(firstColumn);
    return columns;
  }),

  tableContent: Ember.computed(function() {
    var content = [];
    for (var i = 0; i < 100; i++) {
      content.pushObject({
        key: i,
        value1: Math.random() * 80 + 10,
        value2: Math.random() * 80 + 10,
        value3: Math.random() * 80 + 10,
        value4: Math.random() * 80 + 10,
        value5: Math.random() * 80 + 10
      });
    }
    return content;
  })
});
// END-SNIPPET
