// BEGIN-SNIPPET removable-columns-controller
import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';
import {randomNumber, randomDate} from '../utils/random';

export default Ember.Controller.extend({
  queryParams: ['removed'],
  removed: [],
  withoutRemovedColumns: Ember.computed(
    'removed.[]',
    'tableColumns.[]',
    function(){
      let removed = this.get('removed');
      return this.get('tableColumns').filter(function(column){
        return !removed.contains(column.get('headerCellName'));
      });
  }),
  tableColumns: Ember.computed(function() {
    var dateColumn = ColumnDefinition.create({
      savedWidth: 150,
      textAlign: 'text-align-left',
      headerCellName: 'Date',
      getCellContent: function(row) {
        return row.get('date').toDateString();
      }
    });
    var openColumn = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Open',
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var highColumn = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'High',
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    var lowColumn = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Low',
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var closeColumn = ColumnDefinition.create({
      savedWidth: 100,
      headerCellName: 'Close',
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }),
  tableContent: Ember.computed(function() {
    var content = [];
    var date;
    for (var i = 0; i < 100; i++) {
      date = randomDate(new Date(2000, 1, 5), new Date(2012, 2, 2));
      content.pushObject({
        date: date,
        open: randomNumber(100) - 50,
        high: randomNumber(100) - 50,
        low: randomNumber(100) - 50,
        close: randomNumber(100) - 50,
        volume: randomNumber(100) * 1000000
      });
    }
    return content;
  }),
  actions: {
    toggleColumn(headerCellName) {
      let removed = this.get('removed');
      if (removed.contains(headerCellName)) {
        removed.removeObject(headerCellName);
      } else {
        removed.pushObject(headerCellName);
      }
    }
  }
});
// END-SNIPPET
