import Ember from 'ember';

export default Ember.Mixin.create({
  onScroll: Ember.K,
  scrollElementSelector: '',

  didRender: function() {
    var _this = this;
    this._super();
    this.$(this.get('scrollElementSelector')).bind('scroll', function(event) {
      Ember.run(_this, _this.onScroll, event);
    });
  },

  willDestroyElement: function() {
    var $scrollElementSelector = this.$(this.get('scrollElementSelector'));
    if ($scrollElementSelector) {
      $scrollElementSelector.unbind('scroll');
    }
    this._super();
  }
});
