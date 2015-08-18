// BEGIN-SNIPPET financial-table-tree-cell
import Ember from 'ember';
import TableCell from 'ember-table/components/table-cell';

export default TableCell.extend({
  classNames: 'ember-table-table-tree-cell',
  paddingStyle: Ember.computed(function() {
    return new Ember.Handlebars.SafeString('padding-left:' + (this.get('row.indentation')) + 'px;');
  }).property('row.indentation')
});
// END-SNIPPET
