import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';
import RegisterTableComponentMixin from 'ember-table/mixins/register-table-component';

export default Ember.Component.extend(
StyleBindingsMixin, RegisterTableComponentMixin, {
  classNames: 'ember-table-column-sortable-indicator',
  classNameBindings: 'tableComponent._isShowingSortableIndicator:active',
  styleBindings: ['left', 'height'],
  left: Ember.computed.alias('tableComponent._sortableIndicatorLeft'),
  height: Ember.computed.alias('tableComponent._height')
});
