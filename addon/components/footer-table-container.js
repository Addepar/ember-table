import Ember from 'ember';
import TableContainer from 'ember-table/mixins/table-container';
import ShowHorizontalScrollMixin from 'ember-table/mixins/show-horizontal-scroll';
import MouseWheelHandlerMixin from 'ember-table/mixins/mouse-wheel-handler';
import TouchMoveHandlerMixin from 'ember-table/mixins/touch-move-handler';

export default Ember.Component.extend( TableContainer,
MouseWheelHandlerMixin, TouchMoveHandlerMixin, ShowHorizontalScrollMixin, {

  classNames: ['ember-table-table-container',
    'ember-table-fixed-table-container',
    'ember-table-footer-container'],
  styleBindings: 'top',
  height: Ember.computed.alias('footerHeight'),
  width: Ember.computed.alias('tableContainerWidth'),
  scrollLeft: null,
  footerHeight: null,
  tableContainerWidth:null,
  headerHeight: null,
  tableContentHeight: null,
  bodyHeight: null,

  top: Ember.computed(function() {
    var headerHeight = this.get('headerHeight');
    var contentHeight = this.get('tableContentHeight') +
        headerHeight;
    var bodyHeight = this.get('bodyHeight') + headerHeight;
    if (contentHeight < bodyHeight) {
      return contentHeight;
    } else {
      return bodyHeight;
    }
  }).property('bodyHeight', 'headerHeight', 'tableContentHeight'),

  onMouseWheel: function(event, delta, deltaX) {
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() +
        deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  },

  onTouchMove: function(event, deltaX) {
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() +
        deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  }
});
