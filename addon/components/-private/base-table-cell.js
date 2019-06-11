import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import { observer, computed } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  // Provided by subclasses
  columnMeta: null,
  columnValue: null,

  classNameBindings: ['isFirstColumn', 'isFixedLeft', 'isFixedRight', 'textAlign'],

  isFirstColumn: equal('columnMeta.index', 0),
  isFixedLeft: equal('columnMeta.isFixed', 'left'),
  isFixedRight: equal('columnMeta.isFixed', 'right'),

  /**
   Indicates the text alignment of this cell
  */
  textAlign: computed('columnValue.textAlign', function() {
    let textAlign = this.get('columnValue.textAlign');

    if (['left', 'center', 'right'].includes(textAlign)) {
      return `ember-table__text-align-${textAlign}`;
    }

    return null;
  }),

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
