/* globals define, require */
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import EmberRouter from '@ember/routing/router';

// Including ember-cli-addon-docs breaks certain versions of Ember when testing
// but they also break if we remove it. This defines a stub router which should
// prevent breakage.
if (!require.entries['ember-cli-addon-docs/router']) {
  define('ember-cli-addon-docs/router', () => {
    return EmberRouter;
  });
}

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
});

loadInitializers(App, config.modulePrefix);

export default App;
