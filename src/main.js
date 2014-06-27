// Used for bundling files together using neuter
require('build/src/templates');

Ember.Table = Ember.Namespace.create();

Ember.Table.VERSION = '0.2.0';
if (Ember.libraries != null) {
  Ember.libraries.register('Ember Table', Ember.Table.VERSION);
}

// Dependencies
require('dependencies/ember-addepar-mixins/resize_handler');
require('dependencies/ember-addepar-mixins/style_bindings');

// Utils
require('src/utils/jquery_fix');
require('src/utils/lazy_container_view');
require('src/utils/utils');

// Ember-Table
require('src/column');
require('src/views');
require('src/component');
