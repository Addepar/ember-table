App.SparkLineTableCellView = Ember.Table.TableCell.extend
  template: Ember.Handlebars.compile("")
  heightBinding: 'controller.rowHeight'

  onContentOrSizeDidChange: Ember.observer ->
    @$('svg').remove()
    @renderD3View()
  , 'row', 'width'

  didInsertElement: -> @renderD3View()

  renderD3View: ->
    data  = @get 'row.timeseries'
    return unless data
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
