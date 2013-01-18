window.App = Ember.Application.create()

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  tableController: Ember.computed ->
    Ember.get('App.TableHorizonExample.TableController').create()
  .property()
