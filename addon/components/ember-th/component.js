/* global Hammer */
import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

import { computed } from '@ember-decorators/object';
import { readOnly, equal } from '@ember-decorators/object/computed';
import { attribute, className, tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

import layout from './template';

const COLUMN_RESIZE = 0;
const COLUMN_REORDERING = 1;

@tagName('th')
export default class EmberTh extends Component {
  layout = layout;

  @argument
  @required
  @type(Object)
  api;

  @readOnly('api.columnValue') columnValue;
  @readOnly('api.columnMeta') columnMeta;

  /**
   * A variable used for column resizing & ordering. When user press mouse at a point that's close
   * to column boundary (using some threshold), this variable set whether it's the left or right
   * column.
   */
  _columnState = null;

  /**
   * An object that listens to touch/ press/ drag events.
   */
  _hammer = null;

  @className
  @equal('columnMeta.isFixed', 'left')
  isFixedLeft;

  @className
  @equal('columnMeta.isFixed', 'right')
  isFixedRight;

  /**
   * Indicates if this column can be resized.
   */
  @readOnly('api.enableResize') resizeEnabled;

  @readOnly('api.enableReorder') reorderEnabled;

  @attribute
  @computed('columnMeta.{width,offsetLeft,offsetRight}', 'isFixed')
  get style() {
    let width = this.get('columnMeta.width');

    let style = `width: ${width}px; min-width: ${width}px; max-width: ${width}px;`;

    if (this.get('isFixedLeft')) {
      style += `left: ${this.get('columnMeta.offsetLeft')}px;`;
    } else if (this.get('isFixedRight')) {
      style += `right: ${this.get('columnMeta.offsetRight')}px;`;
    }

    if (this.element) {
      // Keep any styling added by the Sticky polyfill
      style += `position: ${this.element.style.position};`;
      style += `top: ${this.element.style.top};`;
    }

    return htmlSafe(style);
  }

  @attribute('colspan')
  @readOnly('columnMeta.columnSpan')
  columnSpan;

  @attribute('rowspan')
  @readOnly('columnMeta.rowSpan')
  rowSpan;

  didInsertElement() {
    super.didInsertElement(...arguments);

    this.get('columnMeta').registerElement(this.element);

    let hammer = new Hammer(this.element);

    hammer.add(new Hammer.Press({ time: 0 }));

    hammer.on('press', this.pressHandler);
    hammer.on('panstart', this.panStartHandler);
    hammer.on('panmove', this.panMoveHandler);
    hammer.on('panend', this.panEndHandler);

    this._hammer = hammer;
  }

  willDestroyElement() {
    let hammer = this._hammer;

    hammer.off('press');
    hammer.off('panstart');
    hammer.off('panmove');
    hammer.off('panend');

    super.willDestroyElement(...arguments);
  }

  pressHandler = ev => {
    let resizeEnabled = this.get('resizeEnabled');
    let reorderEnabled = this.get('reorderEnabled');

    let [{ clientX, target }] = ev.pointers;

    if (resizeEnabled && target.classList.contains('et-header-resize-area')) {
      this._columnState = COLUMN_RESIZE;
      this.get('columnMeta').startResize(clientX);
    } else if (reorderEnabled) {
      this._columnState = COLUMN_REORDERING;
    }
  };

  panStartHandler = ev => {
    let [{ clientX }] = ev.pointers;

    if (this._columnState === COLUMN_REORDERING) {
      this.get('columnMeta').startReorder(clientX);
    }
  };

  panMoveHandler = ev => {
    let [{ clientX }] = ev.pointers;

    if (this._columnState === COLUMN_RESIZE) {
      this.get('columnMeta').updateResize(clientX);
      this._prevClientX = clientX;
    } else if (this._columnState === COLUMN_REORDERING) {
      this.get('columnMeta').updateReorder(clientX);
      this._columnState = COLUMN_REORDERING;
    }
  };

  panEndHandler = () => {
    if (this._columnState === COLUMN_RESIZE) {
      this.get('columnMeta').endResize();
    } else if (this._columnState === COLUMN_REORDERING) {
      this.get('columnMeta').endReorder();
    }
  };
}
