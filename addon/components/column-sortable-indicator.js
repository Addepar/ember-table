import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.Component.extend(
StyleBindingsMixin, {
  classNames: 'ember-table-column-sortable-indicator',
  classNameBindings: 'isShowingSortableIndicator:active',
  styleBindings: ['left', 'height'],
  left: Ember.computed.alias('sortableIndicatorLeft'),
  height: Ember.computed.alias('tableHeight'),

  sortableIndicatorLeft: null,
  tableHeight: null,
  isShowingSortableIndicator: null
});
