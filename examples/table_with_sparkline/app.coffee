window.App = Ember.Application.create()

App.TableSparklineExample = Ember.Namespace.create()

randomWalk = (numSteps) ->
  lastValue = 0
  [0...numSteps].map ->
    lastValue = lastValue + d3.random.normal()()

App.TableSparklineExample.SparkCellView = Ember.Table.TableCell.extend
  template: Ember.Handlebars.compile("")
  heightBinding: 'controller.rowHeight'

  sparkContent: Ember.computed ->
    randomWalk(100)
  .property()

  onWidthDidChange: Ember.observer ->
    @$('svg').remove()
    @renderD3View()
  , 'width'

  didInsertElement: ->
    @renderD3View()

  renderD3View: ->
    data  = @get 'sparkContent'
    h     = @get 'height'
    w     = @get 'width'
    p     = 2
    min   = Math.min.apply(null, data)
    max   = Math.max.apply(null, data)
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

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  numRows:      100
  columns: Ember.computed ->
    name = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Name'
      getCellContent: (row) -> 'Asset ' + row['name']
    open = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Open'
      getCellContent: (row) -> row['open'].toFixed(2)
    spark = Ember.Table.ColumnDefinition.create
      columnWidth: 200
      headerCellName: 'Sparkline'
      tableCellViewClass: 'App.TableSparklineExample.SparkCellView'
      getCellContent: Ember.K
    close = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Close'
      getCellContent: (row) -> row['close'].toFixed(2)
    low = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Low'
      getCellContent: (row) -> row['low'].toFixed(2)
    high = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'High'
      getCellContent: (row) -> row['high'].toFixed(2)
    [name, open, spark, close, low, high]
  .property()

  content: Ember.computed ->
    [0...@get('numRows')].map (num, index) ->
      data = randomWalk(100)
      name: index
      timeseries: data
      open:  data[0]
      close: data[99]
      low:   Math.min.apply(null, data)
      high:  Math.max.apply(null, data)
   .property 'numRows'
