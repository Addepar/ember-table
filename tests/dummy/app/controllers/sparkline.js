import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Controller.extend({
  tableColumns: Ember.computed(function() {
    var name = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Name',
      getCellContent: function(row) {
        return 'Asset ' + row.get('name');
      }
    });
    var open = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var spark = ColumnDefinition.create({
      savedWidth: 200,
      headerCellName: 'Sparkline',
      tableCellViewClass: 'sparkline-table-cell',
      contentPath: 'timeseries'
    });
    var close = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    var low = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var high = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    return [name, open, spark, close, low, high];
  }),

  tableContent: Ember.computed(function() {
    var randomWalk = function(numSteps) {
      var lastValue = 0;
      // TODO(azirbel): This doesn't seem like a map to me
      return _.range(numSteps).map(function() {
        lastValue = lastValue + d3.random.normal()();
        return lastValue;
      });
    };
    return _.range(100).map(function(index) {
      var data = randomWalk(100);
      return {
        name: index,
        timeseries: data,
        open: data[0],
        close: data[99],
        low: Math.min.apply(null, data),
        high: Math.max.apply(null, data)
      };
    });
  })
});
