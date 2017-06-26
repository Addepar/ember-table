import Ember from 'ember';

export default Ember.Route.extend({
  someVal: 1,

  model() {
    return [1, 2]
  },

  setupController(controller, model) {
    this._super(...arguments);

    console.log('controller = ' + controller)
    // controller.set('model', model)
  }
});
