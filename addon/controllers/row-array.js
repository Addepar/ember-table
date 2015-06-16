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
    if (this._isLastItem(idx)) {
      //set last row controller so that a table row can compare with this property to find if it is last row
      this.set('lastItem', subController);
    }
    return subController;
  },

  _isLastItem: function(idx) {
    return this.get('content').length - 1 === idx;
  }
});
