import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import { observer } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  // Provided by subclasses
  columnMeta: null,

  classNameBindings: ['isFirstColumn', 'isFixedLeft', 'isFixedRight'],

  isFirstColumn: equal('columnMeta.index', 0),
  isFixedLeft: equal('columnMeta.isFixed', 'left'),
  isFixedRight: equal('columnMeta.isFixed', 'right'),

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

      this.element.style.width = width;
      this.element.style.minWidth = width;
      this.element.style.maxWidth = width;

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
