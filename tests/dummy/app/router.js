import config from './config/environment';
import EmberRouter from '@ember/routing/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('demo');
  this.route('simple');
  this.route('custom-component');
  this.route('custom-header-cell');
  this.route('addepar');
});

export default Router;
