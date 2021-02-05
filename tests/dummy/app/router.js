import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('quickstart');
    this.route('why-ember-table');

    this.route('guides', function() {
      this.route('main', function() {
        this.route('basic-table');
        this.route('table-customization');
        this.route('table-meta-data');
        this.route('styling-the-table');
        this.route('legacy-usage');
      });

      this.route('header', function() {
        this.route('columns');
        this.route('subcolumns');
        this.route('fixed-columns');
        this.route('size-constraints');
        this.route('sorting');
        this.route('scroll-indicators');
      });

      this.route('body', function() {
        this.route('rows-and-trees');
        this.route('row-selection');
        this.route('occlusion');
      });
    });

    this.route('testing', function() {
      this.route('test-page');
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
