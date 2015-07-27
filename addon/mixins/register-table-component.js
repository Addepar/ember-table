// Gives views access to the table component. With the current architecture,
// this is necessary because views need access to the component's properties
// (like height and columnMode) and may even need to call component functions
// (trigger refresh layout).
//
// It is possible to override this behavior by passing your own tableComponent
// to the views instead.
import Ember from 'ember';

export default Ember.Mixin.create({
  tableComponent: null,

  init: function() {
    if (!this.get('tableComponent')) {
      this.set('tableComponent', this.nearestWithProperty('isEmberTable'));
    }
    return this._super();
  }
});
