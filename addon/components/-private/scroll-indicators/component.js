/* global ResizeSensor */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { bind } from '@ember/runloop';
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
  return computed(`columnTree.${side}FixedNodes.@each.width`, 'overflowHeight', function() {
    let style = [];

    // left/right position
    let fixedNodes = this.get(`columnTree.${side}FixedNodes`);
    if (!isEmpty(fixedNodes)) {
      let fixedWidth = fixedNodes.reduce((acc, node) => acc + node.get('width'), 0);
      style.push(`${side}:${fixedWidth}px;`);
    }

    // height
    let overflowHeight = this.get('overflowHeight');
    if (!isNone(overflowHeight)) {
      style.push(`height:${overflowHeight}px;`);
    }

    return htmlSafe(style.join(''));
  });
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
    function() {
      let style = [];

      // top
      if (location === 'top') {
        let headerHeight = this.get('headerHeight');
        if (!isNone(headerHeight)) {
          style.push(`top:${headerHeight}px;`);
        }
      }

      // bottom
      if (location === 'bottom') {
        let footerHeight = this.get('footerHeight');
        if (!isNone(footerHeight)) {
          style.push(`bottom:${footerHeight}px;`);
        }
      }

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

  showLeft: false,
  showRight: false,
  showTop: false,
  showBottom: false,

  overflowHeight: null,
  overflowWidth: null,
  tableWidth: null,
  headerHeight: null,
  footerHeight: null,

  columnTree: readOnly('api.columnTree'),
  enableScrollIndicators: readOnly('api.enableScrollIndicators'),
  tableScrollId: readOnly('api.tableId'),

  leftStyle: horizontalIndicatorStyle('left'),
  rightStyle: horizontalIndicatorStyle('right'),
  topStyle: verticalIndicatorStyle('top'),
  bottomStyle: verticalIndicatorStyle('bottom'),

  _addListeners() {
    this._scrollElement = this._getScrollElement();
    this._onScroll = bind(this, this._updateIndicators);
    this._scrollElement.addEventListener('scroll', this._onScroll);
    this._tableElement = this._scrollElement.querySelector('table');
    this._resizeSensor = new ResizeSensor(this._tableElement, bind(this, this._updateIndicators));
  },

  _getScrollElement() {
    return document.getElementById(this.get('tableScrollId'));
  },

  _removeListeners() {
    if (this._scrollElement) {
      this._scrollElement.removeEventListener('scroll', this._onScroll);
    }
    if (this._resizeSensor) {
      this._resizeSensor.detach(this._tableElement);
    }
  },

  _updateIndicators() {
    let el = this._scrollElement;
    let table = el.querySelector('table');
    let header = el.querySelector('thead');
    let footer = el.querySelector('tfoot');

    let showLeft = el.scrollLeft > 0;
    let showRight = el.scrollLeft + el.offsetWidth < el.scrollWidth;
    let showTop = el.scrollTop > 0;
    let showBottom = el.scrollTop + el.offsetHeight < el.scrollHeight;

    let overflowHeight = el.offsetHeight;
    let overflowWidth = el.offsetWidth;
    let tableWidth = table.offsetWidth;
    let headerHeight = header?.offsetHeight;
    let footerHeight = footer?.offsetHeight;

    this.setProperties({
      showLeft,
      showRight,
      showTop,
      showBottom,
      overflowHeight,
      overflowWidth,
      tableWidth,
      headerHeight,
      footerHeight,
    });
  },

  _updateListeners() {
    if (this.get('enableScrollIndicators')) {
      this._addListeners();
    } else {
      this._removeListeners();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    if (this.get('enableScrollIndicators')) {
      this._addListeners();
      this._updateIndicators();
    }
    addObserver(this, 'enableScrollIndicators', this._updateListeners);
  },

  willDestroy() {
    if (this.get('enableScrollIndicators')) {
      this._removeListeners();
    }
  },
});
