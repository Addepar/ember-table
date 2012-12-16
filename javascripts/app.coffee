randomWalk = (numSteps) ->
  lastValue = 1
  [0...numSteps].map ->
    lastValue = lastValue + d3.random.normal()()

App.LazyDataSource = Ember.ArrayProxy.extend
  objectAt: (idx) ->
    row  = @get('content')[idx]
    return row if row
    date = new Date();
    date.setDate(date.getDate() + idx)
    row =
      index: idx
      date:  date
      open:  Math.random() * 100 - 50
      high:  Math.random() * 100 - 50
      low:   Math.random() * 100 - 50
      close: Math.random() * 100 - 50
      volume: Math.random() * 1000000
    @get('content')[idx] = row
    row

App.BarCell = Ember.Table.TableCell.extend
  templateName:     'bar-cell'
  classNameBindings:['column.color']
  barWidth: Ember.computed ->
    {column, row} = @getProperties 'column', 'row'
    return 0 unless column and row
    Math.round(+column.getCellContent(row.get('content')))
  .property 'column', 'row'
  histogramStyle: Ember.computed ->
    "width: #{@get('barWidth')}%;"
  .property 'barWidth'

App.SparkCellView = Ember.Table.TableCell.extend
  templateName: ''
  heightBinding: 'controller.rowHeight'
  didInsertElement: ->
    @renderD3View()
  onWidthDidChange: Ember.observer ->
    @$('svg').remove()
    @renderD3View()
  , 'width'
  renderD3View: ->
    data  = @get 'row.content.timeseries'
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

App.HorizonCellView = Ember.Table.TableCell.extend
  templateName: ''
  heightBinding: 'controller.rowHeight'
  didInsertElement: ->
    @renderD3View()
  onWidthDidChange: Ember.observer ->
    @$('svg').remove()
    @renderD3View()
  , 'width'
  renderD3View: ->
    data   = @get 'row.content.data'
    width  = @get 'width'
    height = @get('height')
    chart  = d3.horizon()
      .width(width)
      .height(height)
      .bands(2)
      .mode("mirror")
      .interpolate("basis");
    svg = d3.select("##{@get('elementId')}").append("svg")
      .attr("width", width)
      .attr("height", height)
    svg.data([data]).call(chart)

################################################################################
# Table Bars Example
################################################################################
App.BarsTableExample = Ember.Namespace.create()
App.BarsTableExample.TableController = Ember.Table.TableController.extend
  colors: ['blue', 'teal', 'green', 'yellow', 'orange']
  hasHeader:    yes
  hasFooter:    yes
  numFixedColumns: 1
  numRows:      1000
  rowHeight:    30
  headerHeight: 40
  footerHeight: 0

  columns: Ember.computed ->
    colors  = @get 'colors'
    column1 = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Name'
      getCellContent: (row) -> row['key']
    columns = [0...5].map (number) ->
      Ember.Table.ColumnDefinition.create
        color: colors[number]
        headerCellName: 'Bar'
        tableCellViewClass: 'App.BarCell'
        getCellContent: (row) -> row["value#{number}"]
    columns.unshift(column1)
    columns
  .property 'colors'

  content: Ember.computed ->
    [0...@get('numRows')].map (num, index) ->
      key: index
      value0: Math.random() * 80 + 10
      value1: Math.random() * 80 + 10
      value2: Math.random() * 80 + 10
      value3: Math.random() * 80 + 10
      value4: Math.random() * 80 + 10
   .property 'numRows'

################################################################################
# Sparkline Example
################################################################################
App.SparklineTableExample = Ember.Namespace.create()
App.SparklineTableExample.TableController = Ember.Table.TableController.extend
  hasHeader:    yes
  hasFooter:    yes
  numFixedColumns: 1
  numRows:      1000
  rowHeight:    30
  headerHeight: 40
  footerHeight: 0

  columns: Ember.computed ->
    name = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Name'
      getCellContent: (row) -> 'Asset ' + row['name']
    open = Ember.Table.ColumnDefinition.create
      columnWidth: 75
      headerCellName: 'Open'
      getCellContent: (row) -> row['open'].toFixed(2)
    spark = Ember.Table.ColumnDefinition.create
      columnWidth: 200
      headerCellName: 'Sparkline'
      tableCellViewClass: 'App.SparkCellView'
      getCellContent: Ember.K
    close = Ember.Table.ColumnDefinition.create
      columnWidth: 75
      headerCellName: 'Close'
      getCellContent: (row) -> row['close'].toFixed(2)
    low = Ember.Table.ColumnDefinition.create
      columnWidth: 75
      headerCellName: 'Low'
      getCellContent: (row) -> row['low'].toFixed(2)
    high = Ember.Table.ColumnDefinition.create
      columnWidth: 75
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
      low:   _.min(data)
      high:  _.max(data)
   .property 'numRows'

################################################################################
# Sparkline Example
################################################################################
App.HorizonTableExample = Ember.Namespace.create()
App.HorizonTableExample.TableController = Ember.Table.TableController.extend
  hasHeader:    yes
  hasFooter:    yes
  numFixedColumns: 0
  numRows:      1000
  rowHeight:    35
  headerHeight: 40
  footerHeight: 0

  columns: Ember.computed ->
    name = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Name'
      getCellContent: (row) -> 'Horizon ' + row['name']
    horizon = Ember.Table.ColumnDefinition.create
      columnWidth: 400
      headerCellName: 'Horizon'
      tableCellViewClass: 'App.HorizonCellView'
      getCellContent: Ember.K
    [name, horizon]
  .property()

  content: Ember.computed ->
    normal = d3.random.normal(1.5, 3)
    [0...@get('numRows')].map (num, index) ->
      data = [0...100].map (i) -> [i, normal()]
      name: index
      data: data
   .property 'numRows'

################################################################################
# Simple Table Example
################################################################################
App.SimpleTableExample = Ember.Namespace.create()
App.SimpleTableExample.TableController = Ember.Table.TableController.extend
  hasHeader: yes
  hasFooter: yes
  numFixedColumns: 0
  numRows: 1000000
  rowHeight: 30
  headerHeight: 40
  footerHeight: 0

  columns: Ember.computed ->
    columnNames = ['open', 'high', 'low', 'close', 'volume']
    entryColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Entry'
      getCellContent: (row) -> row['index'];
    dateColumn = Ember.Table.ColumnDefinition.create
      columnWidth: 150
      headerCellName: 'Date'
      getCellContent: (row) -> row['date'].toDateString();
    columns= columnNames.map (key, index) ->
      name = key.charAt(0).toUpperCase() + key.slice(1)
      Ember.Table.ColumnDefinition.create
        columnWidth: 100
        headerCellName: name
        getCellContent: (row) -> row[key].toFixed(2)
    columns.unshift(dateColumn)
    columns.unshift(entryColumn)
    columns
  .property()

  content: Ember.computed ->
    App.LazyDataSource.create
      content: new Array(@get('numRows'))
  .property 'numRows'

################################################################################

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  barsTableExampleController: Ember.computed ->
    App.BarsTableExample.TableController.create()
  .property()

  sparklineTableExampleController: Ember.computed ->
    App.SparklineTableExample.TableController.create()
  .property()

  horizonTableExampleController: Ember.computed ->
    App.HorizonTableExample.TableController.create()
  .property()

  simpleTableExampleController: Ember.computed ->
    App.SimpleTableExample.TableController.create()
  .property()

  treeTableExampleController: Ember.computed ->
    controller = App.TreeTableExample.TreeTableController.create()
    controller.set 'data', window.sampledata
    controller
  .property()

App.Router = Ember.Router.extend
  root: Ember.Route.extend
    index: Ember.Route.extend
      route: '/'

App.initialize()