/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    snippetSearchPaths: ['tests/dummy/app']
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import(app.bowerDirectory + '/d3/d3.js');

  // requestAnimationFrame polyfill for CI with Phantomjs
  // source https://gist.github.com/paulirish/1579671
  app.import('vendor/raf.js', { type: 'test' });

  return app.toTree();
};
