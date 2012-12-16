window.App = Ember.Application.create()

randomWalk = (numSteps) ->
  lastValue = 0
  [0...numSteps].map ->
    lastValue = lastValue + d3.random.normal()()

App.SparkCellView = Ember.Table.TableCell.extend
  heightBinding: 'controller.rowHeight'
  sparkContent: Ember.computed ->
    randomWalk(100)
  .property()
  didInsertElement: ->
    @renderD3View()
  onWidthDidChange: Ember.observer ->
    @$('svg').remove()
    @renderD3View()
  , 'width'
  renderD3View: ->
    data  = @get 'sparkContent'
    h     = @get 'height'
    w     = @get 'width'
    p     = 2
    min   = _.min data
    max   = _.max data
    len   = data.length
    fill  = d3.scale.category10()
    xscale= d3.scale.linear().domain([0, len]).range([p, w - p])
    yscale= d3.scale.linear().domain([min, max]).range([h - p, p])
    line  = d3.svg.line().x((d, i) -> xscale(i)).y((d) -> yscale(d))
    svg   = d3.select("##{@get('elementId')}")
              .append('svg:svg').attr('height', h).attr('width', w);
    g = svg.append('svg:g')
    g.append('svg:path')
     .attr('d', line(data))
     .attr('stroke', (d) -> fill(Math.round(Math.random()) * 10))
     .attr('fill', 'none')

App.SimpleTableController = Ember.Table.TableController.extend
  hasHeader: yes
  hasFooter: no
  numRows: 1000
  rowHeight: 30

  columns: Ember.computed ->
    column1 = Ember.Table.ColumnDefinition.create
      index: 0
      headerCellName: 'Name'
      getCellContent: (row) -> row['key']
    column2 = Ember.Table.ColumnDefinition.create
      index: 0
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