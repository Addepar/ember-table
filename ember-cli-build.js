'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-babel': {
      includePolyfill: false,
    },
    babel: {
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-optional-catch-binding',
      ],
    },
    'ember-faker': {
      /* Always enable for dummy app because the docs examples use faker */
      enabled: true,
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  let { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
