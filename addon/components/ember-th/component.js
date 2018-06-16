/* global Hammer */
import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { next } from '@ember/runloop';

import { action, computed } from '@ember-decorators/object';
import { readOnly, equal, and } from '@ember-decorators/object/computed';
import { attribute, className, tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

import { closest } from '../../-private/utils/element';

import layout from './template';
import { get } from '@ember/object';

const COLUMN_INACTIVE = 0;
const COLUMN_RESIZING = 1;
const COLUMN_REORDERING = 2;

/**
  The table header cell component. This component manages header cell level
  concerns, and yields the column value and column meta data objects.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} as |h|>
      <h.row as |r|>
        <r.cell as |columnValue columnMeta|>

        </r.cell>
      </h.row>
    </t.head>

    <t.body @rows={{rows}} />
  </EmberTable>
  ```
  @yield {object} columnValue - The column definition
  @yield {object} columnMeta - The meta object associated with this column
*/
@tagName('th')
export default class EmberTh extends Component {
  layout = layout;

  /**
    The API object passed in by the table row
  */
  @argument
  @required
  @type('object')
  api;

  @readOnly('api.columnValue') columnValue;
  @readOnly('api.columnMeta') columnMeta;

  /**
    Indicates if this column can be resized.
  */
  @className('is-resizable')
  @readOnly('api.enableResize')
  resizeEnabled;

  /**
    Indicates if this column can be reordered.
  */
  @className('is-reorderable')
  @readOnly('api.enableReorder')
  reorderEnabled;

  /**
    Any sorts applied to the table.
  */
  @readOnly('api.sorts') sorts;

  /**
    Whether or not the column is sortable. Is true IFF the column is a leaf node
    onUpdateSorts is set on the thead.
  */
  @className
  @and('api.isSortable', 'columnMeta.isLeaf')
  isSortable;

  @readOnly('columnMeta.sortIndex') sortIndex;
  @readOnly('columnMeta.isSorted') isSorted;
  @readOnly('columnMeta.isMultiSorted') isMultiSorted;
  @readOnly('columnMeta.isSortedAsc') isSortedAsc;

  @equal('columnMeta.index', 0)
  isFirstColumn;

  @className
  @equal('columnMeta.isFixed', 'left')
  isFixedLeft;

  @className
  @equal('columnMeta.isFixed', 'right')
  isFixedRight;

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

    if (typeof FastBoot === 'undefined' && this.element) {
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

  /**
    A variable used for column resizing & ordering. When user press mouse at a point that's close
    to column boundary (using some threshold), this variable set whether it's the left or right
    column.
  */
  _columnState = COLUMN_INACTIVE;

  /**
    An object that listens to touch/ press/ drag events.
  */
  _hammer = null;

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

    hammer.destroy();

    super.willDestroyElement(...arguments);
  }

  @action
  sendDropdownAction(...args) {
    this.sendAction('onDropdownAction', ...args);
  }

  click(event) {
    let isSortable = this.get('isSortable');
    let inputParent = closest(event.target, 'button:not(.et-sort-toggle), input, label, a, select');

    if (this._columnState === COLUMN_INACTIVE && !inputParent && isSortable) {
      let toggle = event.ctrlKey || event.metaKey;

      this.updateSort({ toggle });
    }
  }

  keyUp(event) {
    let isSortable = this.get('isSortable');
    let inputParent = closest(event.target, 'button:not(.et-sort-toggle), input, label, a, select');

    if (
      this._columnState === COLUMN_INACTIVE &&
      !inputParent &&
      event.key === 'Enter' &&
      isSortable
    ) {
      this.updateSort();
    }
  }

  updateSort({ toggle }) {
    let valuePath = this.get('columnValue.valuePath');
    let sorts = this.get('sorts');

    let existingSorting = sorts.find(s => get(s, 'valuePath') === valuePath);
    let newSortings = toggle ? sorts.filter(s => get(s, 'valuePath') !== valuePath) : [];

    if (!existingSorting) {
      newSortings.push({ valuePath, isAscending: false });
    } else if (existingSorting.isAscending === false) {
      newSortings.push({ valuePath, isAscending: true });
    }

    this.get('api').sendUpdateSort(newSortings);
  }

  pressHandler = event => {
    let [{ clientX, target }] = event.pointers;

    this._originalClientX = clientX;
    this._originalTargetWasResize = target.classList.contains('et-header-resize-area');
  };

  panStartHandler = event => {
    let resizeEnabled = this.get('resizeEnabled');
    let reorderEnabled = this.get('reorderEnabled');

    let [{ clientX }] = event.pointers;

    if (resizeEnabled && this._originalTargetWasResize) {
      this._columnState = COLUMN_RESIZING;

      this.get('columnMeta').startResize(this._originalClientX);
    } else if (reorderEnabled) {
      this._columnState = COLUMN_REORDERING;

      this.get('columnMeta').startReorder(clientX);
    }
  };

  panMoveHandler = event => {
    let [{ clientX }] = event.pointers;

    if (this._columnState === COLUMN_RESIZING) {
      this.get('columnMeta').updateResize(clientX);
      this._prevClientX = clientX;
    } else if (this._columnState === COLUMN_REORDERING) {
      this.get('columnMeta').updateReorder(clientX);
      this._columnState = COLUMN_REORDERING;
    }
  };

  panEndHandler = () => {
    if (this._columnState === COLUMN_RESIZING) {
      this.get('columnMeta').endResize();
    } else if (this._columnState === COLUMN_REORDERING) {
      this.get('columnMeta').endReorder();
    }

    next(() => (this._columnState = COLUMN_INACTIVE));
  };
}
