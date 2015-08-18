// BEGIN-SNIPPET horizon-table-cell
import Ember from 'ember';
import TableCell from 'ember-table/components/table-cell';
import d3HorizonUtils from '../utils/horizon';

export default TableCell.extend({
  layoutName: 'components/empty-cell',

  horizonContent: Ember.computed(function() {
    var normal = d3.random.normal(1.5, 3);
    var content = [];
    for (var i = 0; i < 100; i++) {
      content.pushObject([i, normal()]);
    }
    return content;
  }).property(),

  onWidthDidChange: Ember.observer('width', function() {
    this.$('svg').remove();
    this.renderD3View();
  }),

  didRender: function() {
    this.onWidthDidChange();
    // TODO(azirbel): Add _this.super()
  },

  renderD3View: function() {
    var chart, data, height, svg, width;
    width = this.get('width');
    height = this.$().height();
    data = this.get('horizonContent');
    chart = d3HorizonUtils.d3Horizon().width(width).height(height).bands(2).mode('mirror').interpolate('basis');
    svg = d3.select('#' + this.get('elementId')).append('svg').attr('width', width).attr('height', height);
    svg.data([data]).call(chart);
  }
});
// END-SNIPPET
