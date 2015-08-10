/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon({
  snippetSearchPaths: ['tests/dummy/app']
});

app.import(app.bowerDirectory + '/d3/d3.js');

module.exports = app.toTree();
