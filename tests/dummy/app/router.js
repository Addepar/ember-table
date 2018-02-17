import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('simple');
  this.route('demo');
  this.route('docs', function() {
    this.route('installation');
    this.route('quickstart');
    this.route('examples', function() {
      this.route('basic-table');
    });

    this.route('api', function() {
      this.route('class', { path: '/:class_id' });
    });
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
