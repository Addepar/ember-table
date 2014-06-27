App.EmberTableEditableController = Ember.Controller.extend({
  numRows: 100,
  columns: function() {
    var columnNames = ['open', 'close'];
    var dateColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 100,
      headerCellName: 'Date',
      tableCellViewClass: 'App.DatePickerTableCell',
      getCellContent: function(row) {
        return row.get('date').toString('yyyy-MM-dd');
      },
      setCellContent: function(row, value) {
        row.set('date', value);
      }
    });
    var ratingColumn = Ember.Table.ColumnDefinition.create({
      columnWidth: 150,
      headerCellName: 'Analyst Rating',
      tableCellViewClass: 'App.RatingTableCell',
      contentPath: 'rating',
      setCellContent: function(row, value) {
        row.set('rating', value);
      }
    });
    var columns = columnNames.map(function(key, index) {
      var name = key.charAt(0).toUpperCase() + key.slice(1);
      return Ember.Table.ColumnDefinition.create({
        columnWidth: 100,
        headerCellName: name,
        tableCellViewClass: 'App.EditableTableCell',
        getCellContent: function(row) {
          return row.get(key).toFixed(2);
        },
        setCellContent: function(row, value) {
          row.set(key, +value);
        }
      });
    });
    columns.unshift(ratingColumn);
    columns.unshift(dateColumn);
    return columns;
  }.property(),
  content: function() {
    var numRows = this.get('numRows');
    return App.utils.range(0, numRows).map(function(num, idx) {
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
  }.property('numRows')
});
