import Ember from 'ember';

export default Ember.ObjectProxy.extend({
  content: null,

  isShowing: true,
  isHovered: false,

  isSelected: Ember.computed('parentController.selection.[]', {
    get: function() {
      return this.get('parentController').isSelected(this);
    },
    set: function(key, val) {
      this.get('parentController').setSelected(this, val);
      return this.get('parentController').isSelected(this);
    }
  })
});
