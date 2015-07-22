import Ember from 'ember';

Ember.Test.registerHelper('rowText', function rowText(app, rowIndex=0){
  let cells = app.$(`.ember-table-table-row:eq(${rowIndex}) .ember-table-cell`);
  return cells.map(function(){
    return $(this).text().trim();
  }).toArray();
});

export function inner() {
  return $('.antiscroll-inner');
}

export function rightBlock() {
  return $('.ember-table-table-scrollable-wrapper .ember-table-right-table-block');
}

export function showScrollbarsWhenNecessary(callback) {
  // enter mouse into table to cause scrollbars to show
  $('.antiscroll-wrap').mouseenter();
}

export function horizontalScrollShown() {
  return $('.antiscroll-scrollbar-horizontal.antiscroll-scrollbar-shown').length > 0;
}

export function verticalScrollShown() {
  return $('.antiscroll-scrollbar-vertical.antiscroll-scrollbar-shown').length > 0;
}

export function getComponent($el) {
  const id = $el.attr('id');
  return Ember.View.views[id];
}
