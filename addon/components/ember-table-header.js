/* global Hammer */
import Ember from 'ember';
import { getHeaderCellStyle } from '../utils/fixed-column';
import layout from '../templates/components/ember-table-header';

const PRESS_OFFSET_THRESHOLD = 10;

const COLUMN_STATIC = 0;
const COLUMN_RESIZE = 1;
const COLUMN_REORDERING = 2;

export default Ember.Component.extend({
  layout,
  tagName: 'th',
  attributeBindings: ['style:style'],

  fixedColumnWidth: 0,

  /**
   * X position where user last touches this component.
   */
  touchX: -1,

  firstTouchX: -1,

  /**
   * A variable used for column resizing & ordering. When user press mouse at a point that's close
   * to column boundary (using some threshold), this variable set whether it's the left or right
   * column.
   */
  columnState: COLUMN_STATIC,

  /**
   * Indicates if this header column can be resized or not. It's false by default.
   */
  enableColumnResize: false,

  enableColumnReorder: false,

  hammer: null,

  didInsertElement() {
    this._super(...arguments);

    const hammer = new Hammer(this.element);
    this.set('hammer', hammer)

    hammer.add(new Hammer.Press({ time: 10 }));


    hammer.on('press', (ev) => {
      const box = this.element.getBoundingClientRect();
      if (this.get('enableColumnResize')) {
        if (box.right - ev.pointers[0].clientX < PRESS_OFFSET_THRESHOLD) {
          this.set('columnState', COLUMN_RESIZE);
        }
      }

      this.set('firstTouchX', ev.pointers[0].clientX)
      this.set('touchX', ev.pointers[0].clientX)
    })

    hammer.on('tap', (ev) => {
      this.set('columnState', COLUMN_STATIC);
    })

    hammer.on('panmove', (ev) => {
      const columnState = this.get('columnState');

      if (this.get('enableColumnResize') && columnState == COLUMN_RESIZE) {
        this.sendAction('onColumnResized', this.get('columnIndex'),
          ev.pointers[0].clientX - this.get('touchX'));
        this.set('touchX', ev.pointers[0].clientX);
        return;
      }

      // Column reordering
      if (this.get('enableColumnReorder')) {
        // First fixed column cannot be moved.
        const box = this.element.getBoundingClientRect();
        if (this.get('fixedColumnWidth') > 0 && this.get('columnIndex') == 0) {
          return;
        }

        this.sendAction('onColumnReorder', this.get('columnIndex'), box,
          ev.pointers[0].clientX - this.get('firstTouchX'));
        this.set('columnState', COLUMN_REORDERING);
      }
    })

    hammer.on('panend', (ev) => {
      const columnState = this.get('columnState');

      switch (columnState) {
        case COLUMN_REORDERING:
          this.sendAction('onColumnReorderEnds', this.get('columnIndex'),
            ev.pointers[0].clientX - this.get('firstTouchX'));
        break;

        case COLUMN_RESIZE:
          this.sendAction('onColumnResizeEnded', this.get('columnIndex'),
            ev.pointers[0].clientX - this.get('touchX'));
        break;
      }

      this.set('columnState', COLUMN_STATIC);
    })
  },

  willDestroyElement() {
    const hammer = this.get('hammer')

    hammer.off('press')
    hammer.off('panmove')
    hammer.off('panend')

    this._super(...arguments);
  },

  onTap() {
    this.sendAction('onHeaderClicked', this.get('columnIndex'))
  },

  style: Ember.computed('width', 'columnIndex', 'fixedColumnWidth', function() {
    return getHeaderCellStyle(this.get('width'), this.get('columnIndex'),
      this.get('fixedColumnWidth'));
  })
});
