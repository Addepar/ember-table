
/*
Ember-Table Dependencies
 */
require('lib/bootstrap/bootstrap');

require('lib/antiscroll/antiscroll');

require('dependencies/ember-addepar-mixins/resize_handler');

require('dependencies/ember-addepar-mixins/style_bindings');

require('dist/ember-table');


/*
Editable Table Example dependency
 */

require('dependencies/date');


/*
Editable Horizon and Sparkline dependency
 */

require('lib/d3/d3');

require('dependencies/horizon');

window.App = Ember.Application.create({
  LOG_TRANSITIONS: true
});


/*
Data
 */

require('app/data/data');


/*
Controllers
 */

require('app/controllers/ajax');

require('app/controllers/bars');

require('app/controllers/dynamic_bars');

require('app/controllers/editable');

require('app/controllers/financial');

require('app/controllers/fluid');

require('app/controllers/horizon');

require('app/controllers/overview');

require('app/controllers/simple');

require('app/controllers/sparkline');

require('app/controllers/treetable');


/*
Views
 */

require('app/views/mixins');

require('app/views/ember_table');

require('app/views/ember_table/ajax');

require('app/views/ember_table/bars');

require('app/views/ember_table/editable');

require('app/views/ember_table/financial');

require('app/views/ember_table/horizon');

require('app/views/ember_table/sparkline');

require('app/views/ember_table/treetable');


/*
Router
 */

require('app/router');


/*
App
 */

require('app/main');


/*
Compiled Handlebars templates
 */

require('app/templates');


/*
set google code prettifier options
 */

window['PR_SHOULD_USE_CONTINUATION'] = false;
