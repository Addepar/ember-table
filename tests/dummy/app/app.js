import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Application from '@ember/application';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
