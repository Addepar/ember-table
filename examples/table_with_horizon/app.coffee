window.App = Ember.Application.create()

App.SparkCellView = Ember.Table.TableCell.extend
  heightBinding: 'controller.rowHeight'
  horizonContent: Ember.computed ->
    normal = d3.random.normal(1.5, 3)
    [0...100].map (i) -> [i, normal()]
  .property()
  onWidthDidChange: Ember.observer ->
    @$('svg').remove()
    @renderD3View()
  , 'width'
  didInsertElement: ->
    @onWidthDidChange()
  renderD3View: ->
    width  = @get 'width'
    height = @get('height') - 5
    data   = @get('horizonContent')
    chart = d3.horizon()
      .width(width)
      .height(height)
      .bands(2)
      .mode("mirror")
      .interpolate("basis");
    svg = d3.select("##{@get('elementId')}").append("svg")
      .attr("width", width)
      .attr("height", height)
    svg.data([data]).call(chart)

App.SimpleTableController = Ember.Table.TableController.extend
  hasHeader: yes
  hasFooter: no
  numRows: 1000
  rowHeight: 50

  columns: Ember.computed ->
    column1 = Ember.Table.ColumnDefinition.create
      index: 0
      columnWidth: 50
      headerCellName: 'Name'
      getCellContent: (row) -> row['key']
    column2 = Ember.Table.ColumnDefinition.create
      index: 0
      columnWidth: 450
      headerCellName: 'Bar'
      tableCellViewClass: 'App.SparkCellView'
      getCellContent: (row) -> row['value']
    [column1, column2]
  .property()

  content: Ember.computed ->
    [0...@get('numRows')].map (idx) -> key: idx
  .property 'numRows'

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  tableController: Ember.computed ->
    App.SimpleTableController.create()
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()