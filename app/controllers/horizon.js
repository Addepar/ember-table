App.EmberTableHorizonController = Ember.Controller.extend({
  numRows: 100,
  columns: Ember.computed(function() {
    var horizon, name;
    name = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Name',
      getCellContent: function(row) {
        return 'Horizon ' + row.get('name');
      }
    });
    horizon = Ember.Table.ColumnDefinition.create({
      columnWidth: 600,
      headerCellName: 'Horizon',
      tableCellViewClass: 'App.HorizonTableCellView',
      getCellContent: Ember.K
    });
    return [name, horizon];
  }),
  content: Ember.computed(function() {
    var normal, _i, _ref, _results;
    normal = d3.random.normal(1.5, 3);
    return (function() {
      _results = [];
      for (var _i = 0, _ref = this.get('numRows'); 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(num, index) {
      var data, _i, _results;
      data = (function() {
        _results = [];
        for (_i = 0; _i < 100; _i++){ _results.push(_i); }
        return _results;
      }).apply(this).map(function(i) {
        return [i, normal()];
      });
      return {
        name: index,
        data: data
      };
    });
  }).property('numRows')
});
