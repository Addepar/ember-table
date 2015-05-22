import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: null,
  content: null,

  rowContent: Ember.computed(function() {
    return [];
  }).property(),

  controllerAt: function(idx, object) {
    var subControllers = this.get('_subControllers');
    var subController = subControllers[idx];
    if (subController) {
      return subController;
    }
    subController = this.get('itemController').create({
      target: this,
      parentController: this.get('parentController') || this,
      content: object
    });
    subControllers[idx] = subController;
    return subController;
  }
});
