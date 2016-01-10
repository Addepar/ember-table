import Ember from 'ember';

export default Ember.ObjectProxy.extend({
  content: null,
  tableComponent: null,

  isShowing: true,
  isHovered: false,

  isSelected: Ember.computed('tableComponent.selection.[]', {
    set: function(key, val) {
      this.get('tableComponent').setSelected(this, val);
      return this.get('tableComponent').isSelected(this);
    },
    get: function() {
    	return this.get('tableComponent').isSelected(this);
    }
  })
});
