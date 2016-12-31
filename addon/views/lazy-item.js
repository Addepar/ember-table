import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.View.extend(StyleBindingsMixin, {
  itemIndex: null,
  prepareContent() {},
  teardownContent() {},
  rowHeightBinding: 'parentView.rowHeight',
  styleBindings: ['width', 'top', 'display'],

  top: Ember.computed(function() {
    return this.get('itemIndex') * this.get('rowHeight');
  }).property('itemIndex', 'rowHeight'),

  // TODO(azirbel): Add explicit else case
  display: Ember.computed(function() {
    if (!this.get('content')) {
      return 'none';
    }
  }).property('content')
});
