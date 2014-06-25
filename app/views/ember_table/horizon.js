App.HorizonTableCellView = Ember.Table.TableCell.extend({
  template: Ember.Handlebars.compile(""),
  heightBinding: 'controller.rowHeight',
  horizonContent: Ember.computed(function() {
    var normal, _i, _results;
    normal = d3.random.normal(1.5, 3);
    return (function() {
      _results = [];
      for (_i = 0; _i < 100; _i++){ _results.push(_i); }
      return _results;
    }).apply(this).map(function(i) {
      return [i, normal()];
    });
  }).property(),
  onWidthDidChange: Ember.observer(function() {
    this.$('svg').remove();
    return this.renderD3View();
  }, 'width'),
  didInsertElement: function() {
    return this.onWidthDidChange();
  },
  renderD3View: function() {
    var chart, data, height, svg, width;
    width = this.get('width');
    height = this.get('height');
    data = this.get('horizonContent');
    chart = d3.horizon().width(width).height(height).bands(2).mode("mirror").interpolate("basis");
    svg = d3.select('#' + this.get('elementId')).append("svg").attr("width", width).attr("height", height);
    return svg.data([data]).call(chart);
  }
});
