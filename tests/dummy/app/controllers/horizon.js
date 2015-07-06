// BEGIN-SNIPPET horizon-controller
import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Controller.extend({
  tableColumns: Ember.computed(function() {
    var name = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Name',
      getCellContent: function(row) {
        return 'Horizon ' + row.get('name');
      }
    });
    var horizon = ColumnDefinition.create({
      savedWidth: 600,
      headerCellName: 'Horizon',
      tableCellViewClass: 'horizon-table-cell',
      getCellContent: Ember.K
    });
    return [name, horizon];
  }),

  tableContent: Ember.computed(function() {
    var normal = d3.random.normal(1.5, 3);
    var data;
    var content = [];
    for (var i = 0; i < 100; i++) {
      data = [];
      for (var j = 0; j < 100; j++) {
        data.push([j, normal()]);
      }
      content.pushObject({
        name: i,
        data: data
      });
    }
    return content;
  })
});
// END-SNIPPET
