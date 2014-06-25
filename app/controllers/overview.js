App.EmberTableOverviewController = Ember.Controller.extend({
  data: Ember.computed(function() {
    return App.data.treedata;
  })
});
