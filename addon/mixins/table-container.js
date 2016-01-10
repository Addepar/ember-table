import Ember from 'ember';
import StyleBindingsMixin from './style-bindings';

export default Ember.Mixin.create(
StyleBindingsMixin, {
  classNames: ['ember-table-table-container'],
  styleBindings: ['height', 'width']
});
