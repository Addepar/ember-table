import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
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

  scrollElement: null,
  showLeft: true,
  showRight: false,

  columnTree: readOnly('api.columnTree'),
  enableScrollIndicators: readOnly('api.enableScrollIndicators'),
  tableScrollId: readOnly('api.tableId'),

  _addScrollListener() {
    this._boundOnScroll = this._onScroll.bind(this);
    this.get('scrollElement').addEventListener('scroll', this._boundOnScroll);
  },

  _removeScrollListener() {
    this.get('scrollElement').removeEventListener('scroll', this._boundOnScroll);
  },

  _onScroll(e) {
    this._updateIndicatorShow(e.target);
  },

  _updateIndicatorShow(scrollElement) {
    let scrollRect = scrollElement.getBoundingClientRect();
    let tableRect = scrollElement.querySelector('table').getBoundingClientRect();
    let xDiff = scrollRect.x - tableRect.x;
    let widthDiff = tableRect.width - scrollRect.width;
    this.set('showLeft', xDiff !== 0);
    this.set('showRight', xDiff !== widthDiff);
  },

  _updateScrollListener() {
    if (this.get('enableScrollIndicators')) {
      this._addScrollListener();
    } else {
      this._removeScrollListener();
    }
  },

  init() {
    this._super(...arguments);
    let scrollElement = document.getElementById(this.get('tableScrollId'));
    this.set('scrollElement', scrollElement);
    this._updateIndicatorShow(scrollElement);
    if (this.get('enableScrollIndicators')) {
      this._addScrollListener();
    }
    addObserver(this, 'enableScrollIndicators', this._updateScrollListener);
  },

  willDestroy() {
    if (this.get('enableScrollIndicators')) {
      this._removeScrollListener();
    }
  },
});
