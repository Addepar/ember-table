/* global Hammer */
import EmberTableBaseCell from './ember-table-base-cell';

import { property } from '../utils/class';
import { action, computed } from 'ember-decorators/object';
import { isNone } from '@ember/utils';
import { get } from '@ember/object';

import layout from '../templates/components/ember-table-header';

const PRESS_OFFSET_THRESHOLD = 10;
const COLUMN_STATIC = 0;
const COLUMN_RESIZE = 1;
const COLUMN_REORDERING = 2;

export default class EmberTableHeader extends EmberTableBaseCell {
  @property layout = layout;
  @property tagName = 'th';
  @property classNameBindings = ['isFixed::et-th'];
  @property attributeBindings = ['style:style', 'rowSpan:rowspan', 'columnSpan:colspan'];

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

  @computed('column.subcolumns.length')
  get columnSpan() {
    let subcolumnsLength = get(this, 'column.subcolumns.length');
    if (isNone(subcolumnsLength) || subcolumnsLength <= 1) {
      return 1;
    }

    return subcolumnsLength;
  }

  @computed('tableHasSubcolumns', 'column.subcolumns.length')
  get rowSpan() {
    if (this.get('tableHasSubcolumns') !== true) {
      return 1;
    }

    let subcolumnsLength = get(this, 'column.subcolumns.length');
    if (isNone(subcolumnsLength) || subcolumnsLength === 0) {
      return 2;
    }

    return 1;
  }

  /**
   * An object that listens to touch/ press/ drag events.
   */
  @property _hammer = null;

  didInsertElement() {
    super.didInsertElement(...arguments);

    let hammer = new Hammer(this.element);

    hammer.add(new Hammer.Press({ time: 10 }));

    hammer.on('press', (ev) => {
      let box = this.element.getBoundingClientRect();
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
      let columnIndex = this.get('columnIndex');
      let enableColumnResize = this.get('enableColumnResize');
      let enableColumnReorder = this.get('enableColumnReorder');
      let fixedColumnWidth = this.get('fixedColumnWidth');

      let {
        _columnState,
        _firstTouchX,
        _touchX
      } = this;

      let [{ clientX }] = ev.pointers;
      if (enableColumnResize && _columnState === COLUMN_RESIZE) {
        this.sendAction('onColumnResized', columnIndex, clientX - _touchX);
        this._touchX = clientX;
        return;
      }

      // Column reordering
      if (enableColumnReorder) {
        // First fixed column cannot be moved.
        if (fixedColumnWidth > 0 && columnIndex === 0) {
          return;
        }

        let box = this.element.getBoundingClientRect();
        this.sendAction('onColumnReorder', columnIndex, box, clientX - _firstTouchX);

        this._columnState = COLUMN_REORDERING;
      }
    });

    hammer.on('panend', (ev) => {
      let columnIndex = this.get('columnIndex');

      let {
        _columnState,
        _firstTouchX,
        _touchX
      } = this;

      let [{ clientX }] = ev.pointers;

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
    let hammer = this._hammer;

    hammer.off('press');
    hammer.off('panmove');
    hammer.off('panend');

    super.willDestroyElement(...arguments);
  }

  @action
  onHeaderEvent() {
    this.sendAction('onHeaderEvent', ...arguments);
  }
}
