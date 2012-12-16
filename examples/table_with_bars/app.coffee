window.App = Ember.Application.create()

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

App.SimpleTableController = Ember.Table.TableController.extend
  hasHeader:    yes
  hasFooter:    no
  numRows:      1000
  rowHeight:    30
  headerHeight: 50

  columns: Ember.computed ->
    colors  = ['blue', 'teal', 'green', 'yellow', 'orange']
    column1 = Ember.Table.ColumnDefinition.create
      columnWidth:    50
      headerCellName: 'Name'
      getCellContent: (row) -> row['key']
    columns = [1..5].map (number, index) ->
      Ember.Table.ColumnDefinition.create
        color: colors[index]
        headerCellName: 'Bar'
        tableCellViewClass: 'App.BarCell'
        getCellContent: (row) -> row["value#{number}"]
    columns.unshift(column1)
    columns
  .property()

  content: Ember.computed ->
    [0...@get('numRows')].map (num, index) ->
      key: index
      value1: Math.random() * 80 + 10
      value2: Math.random() * 80 + 10
      value3: Math.random() * 80 + 10
      value4: Math.random() * 80 + 10
      value5: Math.random() * 80 + 10
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