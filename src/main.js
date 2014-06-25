var _ref;

require('build/src/templates');


/*
Used for bundling files together using neuter
 */

Ember.Table = Ember.Namespace.create();

Ember.Table.VERSION = '0.2.0';

if ((_ref = Ember.libraries) != null) {
  _ref.register('Ember Table', Ember.Table.VERSION);
}


/*
Dependencies
 */

require('dependencies/ember-addepar-mixins/resize_handler');

require('dependencies/ember-addepar-mixins/style_bindings');


/*
Utils
 */

require('src/utils/jquery_fix');

require('src/utils/lazy_container_view');

require('src/utils/utils');


/*
Ember-Table
 */

require('src/column');

require('src/views');

require('src/component');
