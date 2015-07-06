import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('overview');
  this.route('documentation');
  this.route('migration-guides');

  this.route('simple');
  this.route('ajax');
  this.route('bars');
  this.route('dynamic-bars');
  this.route('financial');
  this.route('editable');
  this.route('sparkline');
  this.route('horizon');
  this.route('configurable-columns');
  this.route('removable-columns');

  this.route('community-examples');

  this.route('license');
});

export default Router;
