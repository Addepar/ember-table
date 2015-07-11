/* jshint node: true */

var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');
// TODO(azirbel): This is deprecated
var pickFiles = require('broccoli-static-compiler');
// TODO(azirbel): Deprecated, remove and use es6modules
var compileES6 = require('broccoli-es6-concatenator');
var ES6Modules = require('broccoli-es6modules');
var es3Safe = require('broccoli-es3-safe-recast');
var HtmlbarsCompiler = require('ember-cli-htmlbars');
var less = require('broccoli-less-single');
var wrap = require('./wrap');
var globals = require('./globals');

var addonTree = pickFiles('addon', {
  srcDir: '/',
  destDir: 'ember-table'
});

// Compile templates
var templateTree = new HtmlbarsCompiler('app/templates', {
  isHtmlBars: true,

  // provide the templateCompiler that is paired with your Ember version
  templateCompiler: require('../bower_components/ember/ember-template-compiler')
});

templateTree = pickFiles(templateTree, {srcDir: '/', destDir: 'ember-table/templates'});

var sourceTree = mergeTrees([templateTree, addonTree], {overwrite: true});

// Does a few things:
//   - Generate global exports, like Ember.Table.EmberTableComponent
//   - Register all templates on Ember.TEMPLATES
//   - Register views and components with the container so they can be looked up
// Output goes into globals-output.js
var globalExports = globals(pickFiles(sourceTree, {srcDir: '/ember-table', destDir: '/'}));

// Require.js module loader
var loader = pickFiles('bower_components', {srcDir: '/loader.js', destDir: '/'});

var jsTree = mergeTrees([sourceTree, globalExports, loader]);

// Transpile modules
var compiled = compileES6(jsTree, {
  wrapInEval: false,
  loaderFile: 'loader.js',
  inputFiles: ['ember-table/**/*.js'],
  ignoredModules: ['ember'],
  outputFile: '/ember-table.js',
  legacyFilesToAppend: ['globals-output.js']
});

// Wrap in a function which is executed
compiled = wrap(compiled);

// Compile LESS
var lessTree = pickFiles('addon/styles', { srcDir: '/', destDir: '/' });
var lessMain = 'addon.less';
var lessOutput = 'ember-table.css';
lessTree = less(lessTree, lessMain, lessOutput);

module.exports = mergeTrees([es3Safe(compiled), lessTree]);
