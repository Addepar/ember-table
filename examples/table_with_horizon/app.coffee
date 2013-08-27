window.App = Ember.Application.create()

App.TableHorizonExample = Ember.Namespace.create()

App.TableHorizonExample.HorizonTableCellView = Ember.Table.TableCell.extend
  template: Ember.Handlebars.compile("")
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
    height = @get('height')
    data   = @get('horizonContent')
    chart = d3.horizon()
      .width(width)
      .height(height)
      .bands(2)
      .mode("mirror")
      .interpolate("basis");
    svg = d3.select('#' + @get('elementId')).append("svg")
      .attr("width", width)
      .attr("height", height)
    svg.data([data]).call(chart)

App.ApplicationView = Ember.View.extend
  classNames: 'ember-app'
  templateName: 'application'

App.ApplicationController = Ember.Controller.extend
  numRows:      100

  columns: Ember.computed ->
    name = Ember.Table.ColumnDefinition.create
      columnWidth: 100
      headerCellName: 'Name'
      getCellContent: (row) -> 'Horizon ' + row['name']
    horizon = Ember.Table.ColumnDefinition.create
      columnWidth: 600
      headerCellName: 'Horizon'
      tableCellViewClass: 'App.TableHorizonExample.HorizonTableCellView'
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
