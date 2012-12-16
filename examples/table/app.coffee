App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  tableController: Ember.computed ->
    controller = App.TreeTableExample.TreeTableController.create()
    controller.set 'data', window.sampledata
    controller
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()