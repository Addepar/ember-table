// BEGIN-SNIPPET editable-table-cell
import Ember from 'ember';
import TableCell from 'ember-table/components/table-cell';

export default TableCell.extend({
  className: 'editable-table-cell',
  isEditing: false,
  type: 'text',

  onRowContentDidChange: Ember.observer('row.content', function() {
    this.set('isEditing', false);
  }),

  click: function(event) {
    this.set('isEditing', true);
    event.stopPropagation();
  },

  focusOut: function() {
    this.set('isEditing', false);
  }
});
// END-SNIPPET
