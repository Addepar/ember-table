import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo');
  this.route('simple');
  this.route('custom-component');
  this.route('custom-header');
  this.route('custom-footer');
  this.route('addepar');
  this.route('subcolumns');
});

export default Router;
