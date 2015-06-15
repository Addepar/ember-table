import Ember from 'ember';
import StyleBindingsMixin from 'ember-table/mixins/style-bindings';

export default Ember.View.extend(StyleBindingsMixin, {
  templateName: 'expanded-content',
  styleBindings: ['width', 'height'],
  classNames: 'ember-table-expanded-content'
});
