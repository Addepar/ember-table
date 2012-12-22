window.App = Ember.Application.create()

# https://api.github.com/repos/emberjs/ember.js/events?page=1&per_page=100
App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  tableController : Ember.computed ->
    Ember.get('App.TableAjaxExample.TableController').create()
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()