window.App = Ember.Application.create()

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  numRows: 100
  content: Ember.computed ->
    content = [0...@get('numRows')].map (idx) ->
      date = new Date();
      date.setDate(date.getDate() + idx)
      index: idx
      date:  date
      open:  Math.random() * 100 - 50
      high:  Math.random() * 100 - 50
      low:   Math.random() * 100 - 50
      close: Math.random() * 100 - 50
      volume: Math.random() * 1000000
  .property 'numRows'

  splitTableController: Ember.computed ->
    App.TableSplitExample.SplitTableController.create
      bodyContent: @get 'content'
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()