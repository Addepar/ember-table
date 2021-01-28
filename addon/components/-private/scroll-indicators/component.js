/* global ResizeSensor */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { bind } from '@ember/runloop';
import { capitalize } from '@ember/string';
import { htmlSafe } from '@ember/template';
import { isEmpty, isNone } from '@ember/utils';
import { addObserver } from 'ember-table/-private/utils/observer';
import layout from './template';

/**
   Computed property macro that builds the CSS styles (position, height)
   for each horizontal scroll indicator element.

   @param {string} side - which side we are computing styles for: `left` or `right`
 */
const horizontalIndicatorStyle = side => {
  return computed(
    `columnTree.${side}FixedNodes.@each.width`,
    'overflowHeight',
    'scrollbarWidth',
    function() {
      let style = [];

      // left/right position
      let offset = 0;

      let fixedNodes = this.get(`columnTree.${side}FixedNodes`);
      if (!isEmpty(fixedNodes)) {
        let fixedWidth = fixedNodes.reduce((acc, node) => acc + node.get('width'), 0);
        offset += fixedWidth;
      }

      if (side === 'right') {
        let scrollbarWidth = this.get('scrollbarWidth') || 0;
        offset += scrollbarWidth;
      }

      style.push(`${side}:${offset}px;`);

      // height
      let overflowHeight = this.get('overflowHeight');
      if (!isNone(overflowHeight)) {
        style.push(`height:${overflowHeight}px;`);
      }

      return htmlSafe(style.join(''));
    }
  );
};

/**
   Computed property macro that builds the CSS styles (position, width)
   for each vertical scroll indicator element.

   @param {string} location - which location we are computing styles for: `top` or `bottom`
 */
const verticalIndicatorStyle = location => {
  return computed(
    `columnTree.${location}FixedNodes.@each.width`,
    'overflowWidth',
    'tableWidth',
    'headerHeight',
    'footerHeight',
    'footerBottom',
    'footerScrollTop',
    'scrollbarHeight',
    function() {
      let style = [];
      let offset = 0;

      // top/bottom offset
      if (location === 'top') {
        let headerHeight = this.get('headerHeight') || 0;
        offset += headerHeight;
      }

      if (location === 'bottom') {
        let footerHeight = this.get('footerHeight') || 0;
        let footerBottom = this.get('footerBottom') || 0;
        let footerScrollTop = this.get('footerScrollTop') || 0;
        let scrollbarHeight = this.get('scrollbarHeight') || 0;
        offset += footerHeight + footerBottom + footerScrollTop + scrollbarHeight;
      }

      style.push(`${location}:${offset}px;`);

      // width
      let tableWidth = this.get('tableWidth');
      if (!isNone(tableWidth)) {
        let overflowWidth = this.get('overflowWidth');
        let width = Math.min(tableWidth, overflowWidth);
        style.push(`width:${width}px;`);
      }

      return htmlSafe(style.join(''));
    }
  );
};

/**
   Computed property macro that builds a boolean to determine whether or not
   to show a scroll indicator in the given position.

   @param {string} location - `left`, `right`, `top`, or `bottom`
 */
const showIndicator = location => {
  let scrollProp = `scroll${capitalize(location)}`;
  return computed('enabledIndicators', scrollProp, function() {
    return this.get('enabledIndicators').includes(location) && this.get(scrollProp) > 0;
  });
};

export default Component.extend({
  layout,
  tagName: '',

  /**
    The API object passed in by the table

    @argument api
    @required
    @type object
  */
  api: null,

  scrollLeft: null,
  scrollRight: null,
  scrollTop: null,
  scrollBottom: null,

  scrollbarWidth: null,
  scrollbarHeight: null,

  overflowHeight: null,
  overflowWidth: null,
  tableWidth: null,
  headerHeight: null,
  footerHeight: null,
  footerBottom: null,
  footerScrollTop: null,

  columnTree: readOnly('api.columnTree'),
  scrollIndicators: readOnly('api.scrollIndicators'),
  tableScrollId: readOnly('api.tableId'),

  showLeft: showIndicator('left'),
  showRight: showIndicator('right'),
  showTop: showIndicator('top'),
  showBottom: showIndicator('bottom'),

  leftStyle: horizontalIndicatorStyle('left'),
  rightStyle: horizontalIndicatorStyle('right'),
  topStyle: verticalIndicatorStyle('top'),
  bottomStyle: verticalIndicatorStyle('bottom'),

  enabledIndicators: computed('scrollIndicators', function() {
    switch (this.get('scrollIndicators')) {
      case true:
      case 'all':
        return ['left', 'right', 'top', 'bottom'];
      case 'horizontal':
        return ['left', 'right'];
      case 'vertical':
        return ['top', 'bottom'];
      case false:
      case 'none':
      default:
        return [];
    }
  }),

  _addListeners() {
    this._isListening = true;

    // cache static elements for performance
    this._scrollElement = document.getElementById(this.get('tableScrollId'));
    this._tableElement = this._scrollElement.querySelector('table');
    this._headerElement = this._tableElement.querySelector('thead');

    this._onScroll = bind(this, this._updateIndicators);
    this._scrollElement.addEventListener('scroll', this._onScroll);
    this._resizeSensor = new ResizeSensor(this._tableElement, bind(this, this._updateIndicators));
  },

  _removeListeners() {
    this._isListening = false;
    this._scrollElement.removeEventListener('scroll', this._onScroll);
    this._resizeSensor.detach();
  },

  _updateIndicators() {
    let el = this._scrollElement;
    let table = this._tableElement;
    let header = this._headerElement;

    // could appear/disappear over lifetime of component
    let footer = table.querySelector('tfoot');

    let scrollLeft = el.scrollLeft;
    let scrollRight = el.scrollWidth - el.clientWidth - scrollLeft;
    let scrollTop = el.scrollTop;
    let scrollBottom = el.scrollHeight - el.clientHeight - scrollTop;

    let scrollbarWidth = el.offsetWidth - el.clientWidth;
    let scrollbarHeight = el.offsetHeight - el.clientHeight;

    let overflowHeight = el.clientHeight;
    let overflowWidth = el.clientWidth;
    let tableWidth = table ? table.clientWidth : null;
    let headerHeight = header ? header.offsetHeight : null;
    let footerHeight = footer ? footer.offsetHeight : null;

    // calculate minimum `bottom` style for sticky footer cells; can be negative
    // see `repositionStickyElements()` in `table-sticky-polyfill.js`
    let footerBottom = 0;

    if (footer) {
      let footerCell = footer.querySelector('tr:last-child > td');
      if (footerCell) {
        let bottom = parseInt(footerCell.style.bottom, 10);
        footerBottom = isNaN(bottom) ? 0 : bottom;
      }
    }

    // calculate how far into the footer we have scrolled
    let footerScrollTop = Math.max(-Math.min(footerBottom, 0) - scrollBottom, 0);

    this.setProperties({
      scrollLeft,
      scrollRight,
      scrollTop,
      scrollBottom,

      scrollbarHeight,
      scrollbarWidth,

      overflowHeight,
      overflowWidth,
      tableWidth,
      headerHeight,
      footerHeight,
      footerBottom,
      footerScrollTop,
    });
  },

  _updateListeners() {
    let hasIndicators = !isEmpty(this.get('enabledIndicators'));

    if (hasIndicators && !this._isListening) {
      this._addListeners();
      this._updateIndicators();
    } else if (!hasIndicators && this._isListening) {
      this._removeListeners();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this._updateListeners();
    addObserver(this, 'enabledIndicators', this._updateListeners);
  },

  willDestroy() {
    if (this._isListening) {
      this._removeListeners();
    }
  },
});
