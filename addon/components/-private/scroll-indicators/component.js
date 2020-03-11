import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { addObserver } from 'ember-table/-private/utils/observer';
import layout from './template';

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

  leftStyle: computed('columnTree.leftFixedNodes.@each.width', function() {
    let leftFixedNodes = this.get('columnTree.leftFixedNodes');
    if (isEmpty(leftFixedNodes)) {
      return null;
    }
    let leftFixedWidth = leftFixedNodes.reduce((acc, node) => acc + node.get('width'), 0);
    return `left:${leftFixedWidth}px;`;
  }),

  rightStyle: computed('columnTree.rightFixedNodes.@each.width', function() {
    let rightFixedNodes = this.get('columnTree.rightFixedNodes');
    if (isEmpty(rightFixedNodes)) {
      return null;
    }
    let rightFixedWidth = rightFixedNodes.reduce((acc, node) => acc + node.get('width'), 0);
    return `right:${rightFixedWidth}px;`;
  }),

  _addScrollListener() {
    this._boundOnScroll = this._onScroll.bind(this);
    this._getScrollElement().addEventListener('scroll', this._boundOnScroll);
  },

  _getScrollElement() {
    return document.getElementById(this.get('tableScrollId'));
  },

  _removeScrollListener() {
    this._getScrollElement().removeEventListener('scroll', this._boundOnScroll);
  },

  _onScroll(e) {
    this._updateIndicatorShow(e.target);
  },

  _updateIndicatorShow() {
    let scrollElement = this._getScrollElement();
    let scrollRect = scrollElement.getBoundingClientRect();
    let tableRect = scrollElement.querySelector('table').getBoundingClientRect();
    let xDiff = scrollRect.x - tableRect.x;
    let widthDiff = tableRect.width - scrollRect.width;
    this.set('showLeft', xDiff !== 0);
    this.set('showRight', widthDiff > 0 && xDiff !== widthDiff);
  },

  _updateScrollListener() {
    if (this.get('enableScrollIndicators')) {
      this._addScrollListener();
    } else {
      this._removeScrollListener();
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this._updateIndicatorShow();
    if (this.get('enableScrollIndicators')) {
      this._addScrollListener();
    }
    addObserver(this, 'columnTree.root.width', this._updateIndicatorShow);
    addObserver(this, 'enableScrollIndicators', this._updateScrollListener);
  },

  willDestroy() {
    if (this.get('enableScrollIndicators')) {
      this._removeScrollListener();
    }
  },
});
