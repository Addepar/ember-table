App.SparkLineTableCellView = Ember.Table.TableCell.extend({
  template: Ember.Handlebars.compile(""),
  heightBinding: 'controller.rowHeight',
  onContentOrSizeDidChange: Ember.observer(function() {
    this.$('svg').remove();
    return this.renderD3View();
  }, 'row', 'width'),
  didInsertElement: function() {
    return this.renderD3View();
  },
  renderD3View: function() {
    var data, fill, g, h, len, line, max, min, p, svg, w, xscale, yscale;
    data = this.get('row.timeseries');
    if (!data) {
      return;
    }
    h = this.get('height');
    w = this.get('width');
    p = 2;
    min = Math.min.apply(null, data);
    max = Math.max.apply(null, data);
    len = data.length;
    fill = d3.scale.category10();
    xscale = d3.scale.linear().domain([0, len]).range([p, w - p]);
    yscale = d3.scale.linear().domain([min, max]).range([h - p, p]);
    line = d3.svg.line().x(function(d, i) {
      return xscale(i);
    }).y(function(d) {
      return yscale(d);
    });
    svg = d3.select("#" + (this.get('elementId'))).append('svg:svg').attr('height', h).attr('width', w);
    g = svg.append('svg:g');
    return g.append('svg:path').attr('d', line(data)).attr('stroke', function(d) {
      return fill(Math.round(Math.random()) * 10);
    }).attr('fill', 'none');
  }
});
