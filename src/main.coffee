## Used for bundling files together using neuter

Ember.Table = Ember.Namespace.create()
Ember.Table.VERSION = '0.0.2'

Ember.libraries?.register 'Ember Table', Ember.Table.VERSION


require './utils/jquery_fix'
require './utils/scrollbar_width_helper'
require './utils/resize_handler'
require './utils/style_bindings'
require './utils/lazy_container_view'
require './utils/utils'
require './controllers'
require './row_selection_mixin'
require './views'
require './ember-table-templates.js'
