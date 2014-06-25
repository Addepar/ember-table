
/*
 */

/*
Router
 */

/*
 */
App.Router.map(function() {
  this.route('license');
  return this.resource('emberTable', {
    path: '/ember-table'
  }, function() {
    this.route('overview');
    this.route('documentation');
    this.route('ajax');
    this.route('bars');
    this.route('dynamic-bars');
    this.route('editable');
    this.route('financial');
    this.route('fluid');
    this.route('horizon');
    this.route('simple');
    return this.route('sparkline');
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    return this.transitionTo('emberTable.overview');
  }
});

App.EmberTableIndexRoute = Ember.Route.extend({
  redirect: function() {
    return this.transitionTo('emberTable.overview');
  }
});
