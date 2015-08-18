// BEGIN-SNIPPET editable-controller
import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';

export default Ember.Controller.extend({
  tableColumns: Ember.computed(function() {
    var columnNames = ['open', 'close'];
    var dateColumn = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Date',
      tableCellViewClass: 'editable-table/date-picker-table-cell',
      getCellContent: function(row) {
        return row.get('date').toString('yyyy-MM-dd');
      },
      setCellContent: function(row, value) {
        return row.set('date', value);
      }
    });
    var ratingColumn = ColumnDefinition.create({
      savedWidth: 150,
      headerCellName: 'Analyst Rating',
      tableCellViewClass: 'editable-table/rating-table-cell',
      contentPath: 'rating',
      setCellContent: function(row, value) {
        return row.set('rating', value);
      }
    });
    var columns = columnNames.map(function(key) {
      var name;
      name = key.charAt(0).toUpperCase() + key.slice(1);
      return ColumnDefinition.create({
        savedWidth: 100,
        headerCellName: name,
        tableCellViewClass: 'editable-table/editable-table-cell',
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
  }),

  tableContent: Ember.computed(function() {
    var content = [];
    var date;
    for (var i = 0; i < 100; i++) {
      date = new Date();
      date.setDate(date.getDate() + i);
      content.pushObject({
        index: i,
        date: date,
        open: Math.random() * 100 - 50,
        close: Math.random() * 100 - 50,
        rating: Math.round(Math.random() * 4)
      });
    }
    return content;
  })
});
// END-SNIPPET
