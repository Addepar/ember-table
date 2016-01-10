import Ember from 'ember';
export default Ember.TextField.extend({
    type: null,
    value: null,
    didRender: function() {
      this.$().focus();
      // TODO(azirbel): Call this._super()
    },
    focusOut: function() {
      this.sendAction('focusOut');
    }
});