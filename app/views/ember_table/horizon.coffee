App.HorizonTableCellView = Ember.Table.TableCell.extend
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
