App.HorizonTableCellView = Ember.Table.TableCell.extend({
  template: Ember.Handlebars.compile(""),
  heightBinding: 'controller.rowHeight',
  horizonContent: function() {
    var normal = d3.random.normal(1.5, 3);
    return App.utils.range(0, 100).map(function(i) {
      return [i, normal()];
    });
  }.property(),
  onWidthDidChange: function() {
    this.$('svg').remove();
    this.renderD3View();
  }.observes('width').on('didInsertElement'),
  renderD3View: function() {
    var width = this.get('width');
    var height = this.get('height');
    var data = this.get('horizonContent');
    var chart = d3.horizon().width(width).height(height).bands(2).mode("mirror").interpolate("basis");
    var svg = d3.select('#' + this.get('elementId')).append("svg").attr("width", width).attr("height", height);
    svg.data([data]).call(chart);
  }
});
