/* global ResizeSensor */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { bind } from '@ember/runloop';
import { htmlSafe } from '@ember/template';
import { isEmpty } from '@ember/utils';
import { addObserver } from 'ember-table/-private/utils/observer';
import layout from './template';
import { getScale } from 'ember-table/-private/utils/element';

const indicatorStyle = side => {
  return computed(
    `columnTree.${side}FixedNodes.@each.width`,
    'scrollRect',
    'tableRect',
    function() {
      let style = [];

      // left/right position
      let fixedNodes = this.get(`columnTree.${side}FixedNodes`);
      let scrollbarOffsets = { left: 0, right: this.get('scrollbarOffset') };
      if (!isEmpty(fixedNodes)) {
        let fixedWidth = fixedNodes.reduce((acc, node) => acc + node.get('width'), 0);
        style.push(`${side}:${fixedWidth + scrollbarOffsets[side]}px;`);
      } else {
        style.push(`${side}:${scrollbarOffsets[side]}px;`);
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
    this._onScroll = this._updateIndicatorShow.bind(this);
    this._scrollElement.addEventListener('scroll', this._onScroll);
    this._tableElement = this._getScrollElement().querySelector('table');
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
    let tableScale = 1 / getScale(scrollElement);
    let scrollbarOffset = (scrollElement.offsetWidth - scrollElement.clientWidth) * tableScale;
    this.set('scale', tableScale);
    this.set('scrollRect', scrollRect);
    this.set('tableRect', tableRect);
    this.set('scrollbarOffset', scrollbarOffset);
  },

  _updateIndicatorShow() {
    this._setRects();
    let scrollRect = this.get('scrollRect');
    let tableRect = this.get('tableRect');
    let scrollbarOffset = this.get('scrollbarOffset');

    let xDiff = scrollRect.x - tableRect.x;
    let widthDiff = tableRect.width - scrollRect.width;
    this.set('showLeft', xDiff !== 0);
    this.set('showRight', widthDiff > 0 && xDiff - scrollbarOffset !== widthDiff);
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
