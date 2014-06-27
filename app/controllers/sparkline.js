App.EmberTableSparklineController = Ember.Controller.extend({
  numRows: 100,
  columns: function() {
    var name = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Name',
      getCellContent: function(row) {
        return 'Asset ' + row.get('name');
      }
    });
    var open = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var spark = Ember.Table.ColumnDefinition.create({
      columnWidth: 200,
      headerCellName: 'Sparkline',
      tableCellViewClass: 'App.SparkLineTableCellView',
      contentPath: 'timeseries'
    });
    var close = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    var low = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var high = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    return [name, open, spark, close, low, high];
  }.property(),
  content: function() {
    var randomWalk = function(numSteps) {
      var lastValue = 0;
      return App.utils.range(0, numSteps).map(function() {
        return lastValue + d3.random.normal()();
      });
    };
    var numRows = this.get('numRows');
    return App.utils.range(0, numRows).map(function(num, index) {
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
  }.property('numRows')
});
