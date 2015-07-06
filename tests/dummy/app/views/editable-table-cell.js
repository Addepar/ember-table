// BEGIN-SNIPPET editable-table-cell
import Ember from 'ember';
import TableCell from 'ember-table/views/table-cell';

export default TableCell.extend({
  className: 'editable-table-cell',
  templateName: 'editable-table/editable-table-cell',
  isEditing: false,
  type: 'text',

  innerTextField: Ember.TextField.extend({
    typeBinding: 'parentView.type',
    valueBinding: 'parentView.cellContent',
    didInsertElement: function() {
      this.$().focus();
      // TODO(azirbel): Call this._super()
    },
    focusOut: function() {
      this.set('parentView.isEditing', false);
    }
  }),

  onRowContentDidChange: Ember.observer(function() {
    this.set('isEditing', false);
  }, 'row.content'),

  click: function(event) {
    this.set('isEditing', true);
    event.stopPropagation();
  }
});
// END-SNIPPET
