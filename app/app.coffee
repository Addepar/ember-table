# Ember-Table Dependencies
require 'vendor/bootstrap/dist/js/bootstrap'
require 'vendor/antiscroll/antiscroll'
require 'dependencies/ember-addepar-mixins/resize_handler'
require 'dependencies/ember-addepar-mixins/style_bindings'
require 'dist/ember-table'

# Editable Table Example dependency
require 'dependencies/date'

# Editable Horizon and Sparkline dependency
require 'vendor/d3/d3'
require 'dependencies/horizon'

window.App = Ember.Application.create
  LOG_TRANSITIONS: true

# Data
require 'build/app/data/data'

# Controllers
require 'build/app/controllers/overview'
require 'build/app/controllers/simple'
require 'build/app/controllers/ajax'
require 'build/app/controllers/bars'
require 'build/app/controllers/dynamic_bars'
require 'build/app/controllers/treetable'
require 'build/app/controllers/financial'
require 'build/app/controllers/editable'
require 'build/app/controllers/sparkline'
require 'build/app/controllers/horizon'
require 'build/app/controllers/configurable-columns'

# Views
require 'build/app/views/mixins'
require 'build/app/views/ember_table'
require 'build/app/views/ember_table/ajax'
require 'build/app/views/ember_table/bars'
require 'build/app/views/ember_table/financial'
require 'build/app/views/ember_table/treetable'
require 'build/app/views/ember_table/editable'
require 'build/app/views/ember_table/sparkline'
require 'build/app/views/ember_table/horizon'

# Router
require 'build/app/router'

# App
require 'build/app/main'

# Compiled Handlebars templates
require 'build/app/templates'

# set google code prettifier options
window['PR_SHOULD_USE_CONTINUATION'] = false;
