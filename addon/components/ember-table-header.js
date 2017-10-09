/* global Hammer */
import EmberTableBaseCell from './ember-table-base-cell';

import { property } from '../utils/class';
import { action, computed } from 'ember-decorators/object';

import layout from '../templates/components/ember-table-header';

const PRESS_OFFSET_THRESHOLD = 10;
const COLUMN_STATIC = 0;
const COLUMN_RESIZE = 1;
const COLUMN_REORDERING = 2;

export default class EmberTableHeader extends EmberTableBaseCell {
  @property layout = layout;
  @property tagName = 'th';
  @property classNameBindings = ['isFixed::et-th']

  @property fixedColumnWidth = 0;

  /**
   * X position where user first touches on the header.
   */
  @property _firstTouchX = -1;

  /**
   * X position where user last touches this component.
   */
  @property _touchX = -1;

  /**
   * A variable used for column resizing & ordering. When user press mouse at a point that's close
   * to column boundary (using some threshold), this variable set whether it's the left or right
   * column.
   */
  @property _columnState = COLUMN_STATIC;

  /**
   * Indicates if this column can be reordered or not. It's false by default.
   */
  @computed('column.isResizable')
  get enableColumnResize() {
    return this.get('column.isResizable');
  }

  @computed('column.isReorderable', 'isFixed')
  get enableColumnReorder() {
    return this.get('column.isReorderable') && !this.get('isFixed');
  }

  /**
   * An object that listens to touch/ press/ drag events.
   */
  @property _hammer = null;

  didInsertElement() {
    super.didInsertElement(...arguments);

    const hammer = new Hammer(this.element);

    hammer.add(new Hammer.Press({ time: 10 }));

    hammer.on('press', (ev) => {
      const box = this.element.getBoundingClientRect();
      if (this.get('enableColumnResize')) {
        if (box.right - ev.pointers[0].clientX < PRESS_OFFSET_THRESHOLD) {
          this._columnState = COLUMN_RESIZE;
        }
      }

      this._firstTouchX = ev.pointers[0].clientX;
      this._touchX = ev.pointers[0].clientX;
    });

    hammer.on('tap', () => {
      this._columnState = COLUMN_STATIC;
    });

    hammer.on('panmove', (ev) => {
      const columnIndex = this.get('columnIndex');
      const enableColumnResize = this.get('enableColumnResize');
      const enableColumnReorder = this.get('enableColumnReorder');
      const fixedColumnWidth = this.get('fixedColumnWidth');

      const {
        _columnState,
        _firstTouchX,
        _touchX
      } = this;

      const [{ clientX }] = ev.pointers;
      if (enableColumnResize && _columnState == COLUMN_RESIZE) {
        this.sendAction('onColumnResized', columnIndex, clientX - _touchX);
        this._touchX = clientX;
        return;
      }

      // Column reordering
      if (enableColumnReorder) {
        // First fixed column cannot be moved.
        if (fixedColumnWidth > 0 && columnIndex == 0) {
          return;
        }

        const box = this.element.getBoundingClientRect();
        this.sendAction('onColumnReorder', columnIndex, box, clientX - _firstTouchX);

        this._columnState = COLUMN_REORDERING;
      }
    });

    hammer.on('panend', (ev) => {
      const columnIndex = this.get('columnIndex');

      const {
        _columnState,
        _firstTouchX,
        _touchX
      } = this;

      const [{ clientX }] = ev.pointers;

      switch (_columnState) {
        case COLUMN_REORDERING:
          this.sendAction('onColumnReorderEnds', columnIndex, clientX - _firstTouchX);
          break;

        case COLUMN_RESIZE:
          this.sendAction('onColumnResizeEnded', columnIndex, clientX - _touchX);
          break;
      }

      this._columnState = COLUMN_STATIC;
    });

    this._hammer = hammer;
  }

  willDestroyElement() {
    const hammer = this._hammer;

    hammer.off('press');
    hammer.off('panmove');
    hammer.off('panend');

    super.willDestroyElement(...arguments);
  }

  @action
  onHeaderEvent(data) {
    this.sendAction('onHeaderEvent', data);
  }
}
