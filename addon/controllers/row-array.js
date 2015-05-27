import Ember from 'ember';

export default Ember.ArrayController.extend({
  itemController: null,
  content: null,
  lastItem: null,

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

    // Keep track of the last row. Because we only use last row status to apply
    // CSS styles, we only need to know which row is the last row when the row
    // is loaded/scrolled into view. At that time, we update the `lastItem`
    // property. This avoids the problem where the last row's data is always
    // loaded (e.g. in the AJAX table). See issue #165.
    if (this._isLastItem(idx)) {
      this.set('lastItem', subController);
    }
    return subController;
  },

  _isLastItem: function(idx) {
    return this.get('content').length - 1 === idx;
  }
});
