#
# Router
################################################################################

App.Router.map ->
  @route 'license'
  @resource 'emberTable', path: '/ember-table', ->
    @route 'overview'
    @route 'documentation'
    @route 'migration-guides'
    @route 'simple'
    @route 'ajax'
    @route 'bars'
    @route 'dynamic-bars'
    @route 'financial'
    @route 'editable'
    @route 'sparkline'
    @route 'horizon'
    @route 'configurable-columns'
    @route 'community-examples'

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo 'emberTable.overview'

App.EmberTableIndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo 'emberTable.overview'

App.EmberTableOverviewRoute = Ember.Route.extend
  activate: ->
    controller = @controllerFor('emberTable')
    controller.set 'showLargeHero', yes

  deactivate: ->
    controller = @controllerFor('emberTable')
    controller.set 'showLargeHero', no
