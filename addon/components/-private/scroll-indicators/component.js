/* global ResizeSensor */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { bind } from '@ember/runloop';
import { htmlSafe } from '@ember/template';
import { isEmpty } from '@ember/utils';
import { addObserver } from 'ember-table/-private/utils/observer';
import layout from './template';

/**
   Computed property macro that builds the CSS styles (position, height)
   for each scroll indicator element.

   @param {string} side - which side we are computing styles for: `left` or `right`
 */
const indicatorStyle = side => {
  return computed(
    `columnTree.${side}FixedNodes.@each.width`,
    'scrollRect',
    'tableRect',
    function() {
      let style = [];

      // left/right position
      let fixedNodes = this.get(`columnTree.${side}FixedNodes`);
      if (!isEmpty(fixedNodes)) {
        let fixedWidth = fixedNodes.reduce((acc, node) => acc + node.get('width'), 0);
        style.push(`${side}:${fixedWidth}px;`);
      }

      // height
      let scrollRect = this.get('scrollRect');
      let tableRect = this.get('tableRect');
      if (scrollRect && tableRect) {
        style.push(`height:${Math.min(scrollRect.height, tableRect.height)}px;`);
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

  showLeft: true,
  showRight: false,

  columnTree: readOnly('api.columnTree'),
  enableScrollIndicators: readOnly('api.enableScrollIndicators'),
  tableScrollId: readOnly('api.tableId'),

  leftStyle: indicatorStyle('left'),
  rightStyle: indicatorStyle('right'),

  _addListeners() {
    this._scrollElement = this._getScrollElement();
    this._onScroll = bind(this, this._updateIndicatorShow);
    this._scrollElement.addEventListener('scroll', this._onScroll);
    this._tableElement = this._scrollElement.querySelector('table');
    this._resizeSensor = new ResizeSensor(
      this._tableElement,
      bind(this, this._updateIndicatorShow)
    );
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

  _setRects() {
    let scrollElement = this._getScrollElement();
    let scrollRect = scrollElement.getBoundingClientRect();
    let tableRect = scrollElement.querySelector('table').getBoundingClientRect();
    this.set('scrollRect', scrollRect);
    this.set('tableRect', tableRect);
  },

  _updateIndicatorShow() {
    this._setRects();
    let scrollRect = this.get('scrollRect');
    let tableRect = this.get('tableRect');
    let xDiff = scrollRect.x - tableRect.x;
    let widthDiff = tableRect.width - scrollRect.width;
    this.set('showLeft', xDiff !== 0);
    this.set('showRight', widthDiff > 0 && xDiff !== widthDiff);
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
    this._updateIndicatorShow();
    if (this.get('enableScrollIndicators')) {
      this._addListeners();
    }
    addObserver(this, 'enableScrollIndicators', this._updateListeners);
  },

  willDestroy() {
    if (this.get('enableScrollIndicators')) {
      this._removeListeners();
    }
  },
});
