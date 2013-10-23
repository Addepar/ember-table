#
# Router
################################################################################

App.Router.map ->
  @route 'license'
  @resource 'emberTable', path: '/ember-table', ->
    @route 'overview'
    @route 'documentation'
    @route 'ajax'
    @route 'bars'
    @route 'dynamic-bars'
    @route 'editable'
    @route 'financial'
    @route 'fluid'
    @route 'horizon'
    @route 'simple'
    @route 'sparkline'

App.IndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo 'emberTable.overview'

App.EmberTableIndexRoute = Ember.Route.extend
  redirect: ->
    @transitionTo 'emberTable.overview'
