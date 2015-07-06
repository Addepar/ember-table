import Ember from 'ember';

Ember.Test.registerHelper('rowText', function rowText(app, rowIndex=0){
  let cells = app.$(`.ember-table-table-row:eq(${rowIndex}) .ember-table-cell`);
  return cells.map(function(){
    return $(this).text().trim();
  }).toArray();
});
