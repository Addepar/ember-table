/* globals define */
import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import EmberRouter from '@ember/routing/router';

import { lte } from 'ember-compatibility-helpers';

// Including ember-cli-addon-docs breaks certain versions of Ember when testing
// but they also break if we remove it. This defines a stub router which should
// prevent breakage.
if (lte('2.5.0')) {
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
