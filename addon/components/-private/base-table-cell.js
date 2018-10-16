import Component from '@ember/component';
import { equal, bool } from '@ember/object/computed';
import { observer } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  // Provided by subclasses
  columnMeta: null,

  classNameBindings: [
    'isFirstColumn',
    'isFixedLeft',
    'isFixedRight',
    'hasWidth',
    'hasMinWidth',
    'hasMaxWidth',
  ],

  isFirstColumn: equal('columnMeta.index', 0),
  isFixedLeft: equal('columnMeta.isFixed', 'left'),
  isFixedRight: equal('columnMeta.isFixed', 'right'),
  hasWidth: bool('columnMeta.width'),
  hasMinWidth: bool('columnMeta.minWidth'),
  hasMaxWidth: bool('columnMeta.maxWidth'),

  // eslint-disable-next-line
  scheduleUpdateStyles: observer(
    'columnMeta.{width,offsetLeft,offsetRight}',
    'isFixedLeft',
    'isFixedRight',

    function() {
      scheduleOnce('actions', this, 'updateStyles');
    }
  ),

  updateStyles() {
    if (typeof FastBoot === 'undefined' && this.element) {
      let width = `${this.get('columnMeta.width')}px`;
      let minWidth = `${this.get('columnMeta.minWidth')}px`;
      let maxWidth = `${this.get('columnMeta.maxWidth')}px`;

      this.element.style.width = width;
      this.element.style.minWidth = minWidth;
      this.element.style.maxWidth = maxWidth;

      if (this.get('isFixedLeft')) {
        this.element.style.left = `${Math.round(this.get('columnMeta.offsetLeft'))}px`;
      } else if (this.get('isFixedRight')) {
        this.element.style.right = `${Math.round(this.get('columnMeta.offsetRight'))}px`;
      }
    }
  },

  didInsertElement() {
    this._super(...arguments);
    this.updateStyles();
  },
});
