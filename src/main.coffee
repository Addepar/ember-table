require 'build/src/templates'

## Used for bundling files together using neuter
Ember.Table = Ember.Namespace.create()
Ember.Table.VERSION = '0.4.0'

Ember.libraries?.register 'Ember Table', Ember.Table.VERSION

# Dependencies
require 'dependencies/ember-addepar-mixins/resize_handler'
require 'dependencies/ember-addepar-mixins/style_bindings'

# Utils
require 'build/src/utils/jquery_fix'
require 'build/src/utils/lazy_container_view'
require 'build/src/utils/utils'

# Ember-Table
require 'build/src/column'
require 'build/src/row'
require 'build/src/views'
require 'build/src/component'
