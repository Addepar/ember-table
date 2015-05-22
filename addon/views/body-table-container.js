import Ember from 'ember';
import TableContainer from 'ember-table/views/table-container';
import ShowHorizontalScrollMixin from 'ember-table/mixins/show-horizontal-scroll';
import RegisterTableComponentMixin from 'ember-table/mixins/register-table-component';
import MouseWheelHandlerMixin from 'ember-table/mixins/mouse-wheel-handler';
import TouchMoveHandlerMixin from 'ember-table/mixins/touch-move-handler';
import ScrollHandlerMixin from 'ember-table/mixins/scroll-handler';

export default TableContainer.extend(
MouseWheelHandlerMixin, TouchMoveHandlerMixin, ScrollHandlerMixin,
ShowHorizontalScrollMixin, RegisterTableComponentMixin, {
  templateName: 'body-table-container',
  classNames: ['ember-table-table-container',
      'ember-table-body-container',
      'antiscroll-wrap'],

  height: Ember.computed.alias('tableComponent._bodyHeight'),
  width: Ember.computed.alias('tableComponent._width'),
  scrollTop: Ember.computed.alias('tableComponent._tableScrollTop'),
  scrollLeft: Ember.computed.alias('tableComponent._tableScrollLeft'),
  scrollElementSelector: '.antiscroll-inner',

  onScroll: function(event) {
    this.set('scrollTop', event.target.scrollTop);
    return event.preventDefault();
  },

  // `event` here is a jQuery event
  onMouseWheel: function(event, delta, deltaX, deltaY) {
    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  },

  // `event` here is a jQuery event
  onTouchMove: function(event, deltaX, deltaY) {
    if (Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }
    var scrollLeft = this.$('.ember-table-right-table-block').scrollLeft() + deltaX;
    this.set('scrollLeft', scrollLeft);
    event.preventDefault();
  }
});
