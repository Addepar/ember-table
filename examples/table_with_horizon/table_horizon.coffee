App.TableHorizonExample = Ember.Namespace.create()

App.TableHorizonExample.HorizonTableCellView = Ember.Table.TableCell.extend
  templateName: null
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

App.TableHorizonExample.TableController = Ember.Table.TableController.extend
  hasHeader:    yes
  hasFooter:    no
  numFixedColumns: 0
  numRows:      100
  rowHeight:    35

  columns: Ember.computed ->
    name = @createColumn
      columnWidth: 100
      headerCellName: 'Name'
      getCellContent: (row) -> 'Horizon ' + row['name']
    horizon = @createColumn
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
