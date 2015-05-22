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
    return _.range(100).map(function(index) {
      data = _.range(100).map(function(i) {
        return [i, normal()];
      });
      return {
        name: index,
        data: data
      };
    });
  })
});
