App.EmberTableSparklineController = Ember.Controller.extend({
  numRows: 100,
  columns: Ember.computed(function() {
    var close, high, low, name, open, spark;
    name = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Name',
      getCellContent: function(row) {
        return 'Asset ' + row.get('name');
      }
    });
    open = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    spark = Ember.Table.ColumnDefinition.create({
      columnWidth: 200,
      headerCellName: 'Sparkline',
      tableCellViewClass: 'App.SparkLineTableCellView',
      contentPath: 'timeseries'
    });
    close = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    low = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    high = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    return [name, open, spark, close, low, high];
  }),
  content: Ember.computed(function() {
    var randomWalk, _i, _ref, _results;
    randomWalk = function(numSteps) {
      var lastValue, _i, _results;
      lastValue = 0;
      return (function() {
        _results = [];
        for (var _i = 0; 0 <= numSteps ? _i < numSteps : _i > numSteps; 0 <= numSteps ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this).map(function() {
        lastValue = lastValue + d3.random.normal()();
        return lastValue;
      });
    };
    return (function() {
      _results = [];
      for (var _i = 0, _ref = this.get('numRows'); 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(num, index) {
      var data;
      data = randomWalk(100);
      return {
        name: index,
        timeseries: data,
        open: data[0],
        close: data[99],
        low: Math.min.apply(null, data),
        high: Math.max.apply(null, data)
      };
    });
  }).property('numRows')
});
