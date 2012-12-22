window.App = Ember.Application.create
  customEvents:
    blur:   'blur'

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  tableAjaxExampleController: Ember.computed ->
    Ember.get('App.TableAjaxExample.TableController').create()
  .property()

  tableBarExampleController: Ember.computed ->
    Ember.get('App.TableBarExample.TableController').create()
  .property()

  tableSparklineExampleController: Ember.computed ->
    Ember.get('App.TableSparklineExample.TableController').create()
  .property()

  tableHorizonExampleController: Ember.computed ->
    Ember.get('App.TableHorizonExample.TableController').create()
  .property()

  tableSimpleExampleController: Ember.computed ->
    Ember.get('App.TableSimpleExample.TableController').create()
  .property()

  tableEditableExampleController: Ember.computed ->
    Ember.get('App.TableEditableExample.TableController').create()
  .property()

  treeTableExampleController: Ember.computed ->
    controller = Ember.get('App.TreeTableExample.TableController').create()
    controller.set 'data', window.treedata
    controller
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()
