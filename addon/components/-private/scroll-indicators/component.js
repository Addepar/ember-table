/* global ResizeSensor */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { bind, scheduleOnce } from '@ember/runloop';
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
    'tableHeight',
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
        let tableHeight = this.get('tableHeight');
        let height = isNone(tableHeight) ? overflowHeight : Math.min(overflowHeight, tableHeight);
        style.push(`height:${height}px;`);
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
    'overflowHeight',
    'overflowWidth',
    'tableWidth',
    'headerHeight',
    'scrollbarHeight',
    'visibleFooterHeight',
    'footerRatio',
    function() {
      let style = [];
      let offset = 0;

      // top/bottom offset
      if (location === 'top') {
        let headerHeight = this.get('headerHeight') || 0;
        offset += headerHeight;
      }

      if (location === 'bottom') {
        let visibleFooterHeight = this.get('visibleFooterHeight') || 0;
        let scrollbarHeight = this.get('scrollbarHeight') || 0;
        let footerRatio = this.get('footerRatio');

        // when footer occupies > 50% of the overflow height, we are now
        // scrolling the footer rows, so indicator should jump to table bottom
        if (footerRatio <= 0.5) {
          offset += visibleFooterHeight;
        }

        offset += scrollbarHeight;
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
  tableHeight: null,
  tableWidth: null,
  headerHeight: null,
  visibleFooterHeight: null,
  footerRatio: null,

  columnTree: readOnly('api.columnTree'),
  containerWidthAdjustment: readOnly('api.columnTree.containerWidthAdjustment'),
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

  init() {
    this._super(...arguments);

    // common callback for event listeners; the `bind` appears redundant, but is
    // required by the test suite
    this._updateIndicators = bind(this, () => {
      scheduleOnce('actions', this, this.updateIndicators);
    });
  },

  _addListeners() {
    this._isListening = true;

    // cache static elements for performance
    this._scrollElement = document.getElementById(this.get('tableScrollId'));
    this._tableElement = this._scrollElement.querySelector('table');
    this._headerElement = this._tableElement.querySelector('thead');

    this._scrollElement.addEventListener('scroll', this._updateIndicators);
    this._tableResizeSensor = new ResizeSensor(this._tableElement, this._updateIndicators);
    this._addFooterListeners();
  },

  _removeListeners() {
    this._isListening = false;

    this._scrollElement.removeEventListener('scroll', this._updateIndicators);
    this._tableResizeSensor.detach();
    this._removeFooterListeners();
  },

  // footer can appear/disappear dynamically, so this listener needs to be
  // added/removed occasionally
  _addFooterListeners() {
    let footerElement = this._tableElement.querySelector('tfoot');

    if (!footerElement) {
      return;
    }

    if (!this._footerResizeSensor) {
      // triggers when entire footer changes size
      this._footerResizeSensor = new ResizeSensor(footerElement, this._updateIndicators);
    }

    if (!this._footerMutationObserver) {
      // triggers when individual footer cells are updated by sticky polyfill
      this._footerMutationObserver = new MutationObserver(this._updateIndicators);
      this._footerMutationObserver.observe(footerElement, {
        subtree: true,
        attributes: true,
        attributesFilter: ['style'],
        childList: true,
      });
    }
  },

  _removeFooterListeners() {
    if (this._footerResizeSensor) {
      this._footerResizeSensor.detach();
      this._footerResizeSensor = null;
    }

    if (this._footerMutationObserver) {
      this._footerMutationObserver.disconnect();
      this._footerMutationObserver = null;
    }
  },

  /**
    Recomputes table geometry and triggers update of scroll indicator positions
    and dimensions.
  */
  updateIndicators() {
    let el = this._scrollElement;
    let table = this._tableElement;
    let header = this._headerElement;

    let scrollLeft = el.scrollLeft;
    let scrollRight = el.scrollWidth - el.clientWidth - scrollLeft;
    let scrollTop = el.scrollTop;
    let scrollBottom = el.scrollHeight - el.clientHeight - scrollTop;

    let scrollbarWidth = el.offsetWidth - el.clientWidth;
    let scrollbarHeight = el.offsetHeight - el.clientHeight;

    let overflowHeight = el.clientHeight;
    let overflowWidth = el.clientWidth;
    let tableWidth = table ? table.offsetWidth : null;
    let tableHeight = table ? table.offsetHeight : null;
    let headerHeight = header ? header.offsetHeight : null;

    // part of the footer can be obscured until the table is scrolled to the
    // bottom; see `addon/-private/sticky/table-sticky-polyfill.js`
    let visibleFooterHeight = 0;
    let footerCell = table.querySelector('tfoot td');
    if (footerCell) {
      this._addFooterListeners();

      let footerCellY = footerCell.getBoundingClientRect().y;
      let overflowRect = el.getBoundingClientRect();
      let scale = el.offsetHeight / overflowRect.height;

      visibleFooterHeight = Math.min(
        el.clientHeight - scale * (footerCellY - overflowRect.y),
        el.clientHeight
      );

      // can be negative if sticky footers don't work in browser (e.g. Safari)
      visibleFooterHeight = Math.max(visibleFooterHeight, 0);
    } else {
      this._removeFooterListeners();
    }

    let footerRatio;
    if (overflowHeight > 0) {
      footerRatio = visibleFooterHeight / el.offsetHeight;
    }

    this.setProperties({
      scrollLeft,
      scrollRight,
      scrollTop,
      scrollBottom,

      scrollbarHeight,
      scrollbarWidth,

      overflowHeight,
      overflowWidth,
      tableHeight,
      tableWidth,
      headerHeight,

      visibleFooterHeight,
      footerRatio,
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
