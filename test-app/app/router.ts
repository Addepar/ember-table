import EmberRouter from '@ember/routing/router';
import { isTesting } from '@embroider/macros';
import { addDocfyRoutes } from '@docfy/ember';

export default class Router extends EmberRouter {
  location = isTesting() ? 'none' : 'history';
  rootURL = import.meta.env.BASE_URL;
}

Router.map(function () {
  addDocfyRoutes(this);

  this.route('scenarios', function () {
    this.route('simple');
    this.route('performance');
    this.route('blank');
  });

  this.route('not-found', { path: '/*path' });
});
