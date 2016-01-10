// BEGIN-SNIPPET ajax-controller
import Ember from 'ember';
import ColumnDefinition from 'ember-table/models/column-definition';
import AjaxTableLazyDataSource from '../components/ajax-table/lazy-data-source';

export default Ember.Controller.extend({
  tableColumns: Ember.computed(function() {
    var avatar = ColumnDefinition.create({
      savedWidth: 80,
      headerCellName: 'avatar',
      tableCellViewClass: 'ajax-table/ajax-cell',
      contentPath: 'avatar'
    });
    var columnNames = ['login', 'type', 'createdAt'];
    var columns = columnNames.map(function(key) {
      return ColumnDefinition.create({
        savedWidth: 150,
        headerCellName: key.w(),
        contentPath: key
      });
    });
    columns.unshift(avatar);
    return columns;
  }),

  tableContent: Ember.computed(function() {
    return AjaxTableLazyDataSource.create({
      content: new Array(100)
    });
  })
});
// END-SNIPPET
