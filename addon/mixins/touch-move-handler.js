import Ember from 'ember';

export default Ember.Mixin.create({
  onTouchMove: Ember.K,

  didRender: function() {
    var _this = this;
    var startX = 0;
    var startY = 0;

    this._super();

    this.$().bind('touchstart', function(event) {
      startX = event.originalEvent.targetTouches[0].pageX;
      startY = event.originalEvent.targetTouches[0].pageY;
    });

    this.$().bind('touchmove', function(event) {
      var newX = event.originalEvent.targetTouches[0].pageX;
      var newY = event.originalEvent.targetTouches[0].pageY;
      var deltaX = -(newX - startX);
      var deltaY = -(newY - startY);
      Ember.run(_this, _this.onTouchMove, event, deltaX, deltaY);
      startX = newX;
      startY = newY;
    });
  },

  willDestroyElement: function() {
    this.$().unbind('touchstart');
    this.$().unbind('touchmove');
    this._super();
  }
});
