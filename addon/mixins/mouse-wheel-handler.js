import Ember from 'ember';

export default Ember.Mixin.create({
  onMouseWheel: Ember.K,

  didRender: function() {
    var _this = this;
    this._super();
    this.$().bind('mousewheel', function(event, delta, deltaX, deltaY) {
      Ember.run(_this, _this.onMouseWheel, event, delta, deltaX, deltaY);
    });
  },

  willDestroyElement: function() {
    var $elem = this.$();
    if ($elem) {
      $elem.unbind('mousewheel');
    }
    this._super();
  }
});
