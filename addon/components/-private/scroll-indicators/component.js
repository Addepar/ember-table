/* global ResizeSensor */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { bind } from '@ember/runloop';
import { isEmpty } from '@ember/utils';
import { addObserver } from 'ember-table/-private/utils/observer';
import layout from './template';

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

      return style.join('');
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
    this._onScroll = this._updateIndicatorShow.bind(this);
    this._getScrollElement().addEventListener('scroll', this._onScroll);
    this._scrollElement = this._getScrollElement();
    this._resizeSensor = new ResizeSensor(this._scrollElement, bind(this, this._setRects));
  },

  _getScrollElement() {
    return document.getElementById(this.get('tableScrollId'));
  },

  _removeListeners() {
    this._getScrollElement().removeEventListener('scroll', this._onScroll);
    this._resizeSensor.detach(this._scrollElement);
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
