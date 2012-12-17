window.App = Ember.Application.create
  customEvents:
    blur:   'blur'

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  tableController : Ember.computed ->
    Ember.get('App.TableEditableExample.TableController').create()
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()
