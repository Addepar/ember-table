App.EmberTableEditableController = Ember.Controller.extend({
  numRows: 100,
  columns: Ember.computed(function() {
    var columnNames, columns, dateColumn, ratingColumn;
    columnNames = ['open', 'close'];
    dateColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Date',
      tableCellViewClass: 'App.DatePickerTableCell',
      getCellContent: function(row) {
        return row.get('date').toString('yyyy-MM-dd');
      },
      setCellContent: function(row, value) {
        return row.set('date', value);
      }
    });
    ratingColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 150,
      headerCellName: 'Analyst Rating',
      tableCellViewClass: 'App.RatingTableCell',
      contentPath: 'rating',
      setCellContent: function(row, value) {
        return row.set('rating', value);
      }
    });
    columns = columnNames.map(function(key, index) {
      var name;
      name = key.charAt(0).toUpperCase() + key.slice(1);
      return Ember.Table.ColumnDefinition.create({
        columnWidth: 100,
        headerCellName: name,
        tableCellViewClass: 'App.EditableTableCell',
        getCellContent: function(row) {
          return row.get(key).toFixed(2);
        },
        setCellContent: function(row, value) {
          return row.set(key, +value);
        }
      });
    });
    columns.unshift(ratingColumn);
    columns.unshift(dateColumn);
    return columns;
  }).property(),
  content: Ember.computed(function() {
    var _i, _ref, _results;
    return (function() {
      _results = [];
      for (var _i = 0, _ref = this.get('numRows'); 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(num, idx) {
      return {
        index: idx,
        date: Date.now().add({
          days: idx
        }),
        open: Math.random() * 100 - 50,
        close: Math.random() * 100 - 50,
        rating: Math.round(Math.random() * 4)
      };
    });
  }).property('numRows')
});
