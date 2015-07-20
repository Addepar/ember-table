import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';
import {randomNumber, randomDate} from '../utils/random';

const {observer, $, View} = Ember;

export default Ember.Controller.extend({
  queryParams: ['rowCount', 'columnsFillTable'],
  isFullWidth: true,
  columnsFillTable: true,
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
      headerCellName: 'Open',
      canAutoResize: true,
      getCellContent: function(row) {
        return row.get('open').toFixed(2);
      }
    });
    var highColumn = ColumnDefinition.create({
      headerCellName: 'High',
      canAutoResize: true,
      getCellContent: function(row) {
        return row.get('high').toFixed(2);
      }
    });
    var lowColumn = ColumnDefinition.create({
      headerCellName: 'Low',
      canAutoResize: true,
      getCellContent: function(row) {
        return row.get('low').toFixed(2);
      }
    });
    var closeColumn = ColumnDefinition.create({
      headerCellName: 'Close',
      canAutoResize: true,
      getCellContent: function(row) {
        return row.get('close').toFixed(2);
      }
    });
    return [dateColumn, openColumn, highColumn, lowColumn, closeColumn];
  }),
  tableContent: Ember.computed('rowCount', function() {
    const rowCount = this.get('rowCount');
    var content = [];
    var date;
    for (var i = 0; i < rowCount; i++) {
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
  isFullWidthObserver: observer('isFullWidth', function(){
    const id = $('.ember-table-tables-container').attr('id');
    const component = View.views[id];
    Ember.run.scheduleOnce('afterRender', component, component.elementSizeDidChange);
  }),
  actions: {
    toggleWidth() {
      this.toggleProperty('isFullWidth');
    }
  }
});
