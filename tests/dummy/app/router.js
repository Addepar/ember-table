import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('docs', function() {
    this.route('introduction');
    this.route('quickstart');

    this.route('examples', function() {
      this.route('basic-table');

      this.route('header', function() {
        this.route('columns');
        this.route('subcolumns');
        this.route('fixed-columns');
        this.route('size-constraints');
        this.route('sorting');
        this.route('actions');
      });

      this.route('body', function() {
        this.route('rows-and-trees');
        this.route('row-selection');
        this.route('occlusion');
      });
    });

    this.route('api', function() {
      this.route('class', { path: '/:class_id' });
    });
  });

  this.route('scenarios', function() {
    this.route('simple');
    this.route('performance');
    this.route('blank');
  });

  this.route('not-found', { path: '/*path' });
});

export default Router;
