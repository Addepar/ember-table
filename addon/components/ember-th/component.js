/* global Hammer */
import BaseTableCell from '../-private/base-table-cell';
import { next } from '@ember/runloop';

import { readOnly } from '@ember/object/computed';
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
    <t.head @columns={{this.columns}} as |h|>
      <h.row as |r|>
        <r.cell as |columnValue columnMeta|>

        </r.cell>
      </h.row>
    </t.head>

    <t.body @rows={{this.rows}} />
  </EmberTable>
  ```
  @yield {object} columnValue - The column definition
  @yield {object} columnMeta - The meta object associated with this column
  @class <EmberTh />
  @public
*/
export default BaseTableCell.extend({
  layout,
  tagName: 'th',
  attributeBindings: ['columnSpan:colspan', 'rowSpan:rowspan'],
  classNameBindings: ['isSortable', 'isResizable', 'isReorderable'],

  /**
    The API object passed in by the table row
    @argument api
    @required
    @type object
  */
  api: null,

  /**
    Action sent when the user clicks right this element
    @argument onContextMenu
    @type Action?
  */
  onContextMenu: null,

  columnValue: readOnly('api.columnValue'),

  columnMeta: readOnly('api.columnMeta'),

  rowMeta: readOnly('api.rowMeta'),

  /**
    Any sorts applied to the table.
  */
  sorts: readOnly('api.sorts'),

  /**
    Whether or not the column is sortable. Is true IFF the column is a leaf node
    onUpdateSorts is set on the thead.
  */
  isSortable: readOnly('columnMeta.isSortable'),

  /**
    Indicates if this column can be resized.
  */
  isResizable: readOnly('columnMeta.isResizable'),

  /**
   Indicates if this column can be reordered.
  */
  isReorderable: readOnly('columnMeta.isReorderable'),

  columnSpan: readOnly('columnMeta.columnSpan'),

  rowSpan: readOnly('columnMeta.rowSpan'),

  /**
    A variable used for column resizing & ordering. When user press mouse at a point that's close
    to column boundary (using some threshold), this variable set whether it's the left or right
    column.
  */
  _columnState: COLUMN_INACTIVE,

  /**
    An object that listens to touch/ press/ drag events.
  */
  _hammer: null,

  didInsertElement() {
    this._super(...arguments);

    this.get('columnMeta').registerElement(this.element);

    let hammer = new Hammer(this.element);

    hammer.add(new Hammer.Press({ time: 0 }));

    hammer.on('press', this.pressHandler.bind(this));
    hammer.on('panstart', this.panStartHandler.bind(this));
    hammer.on('panmove', this.panMoveHandler.bind(this));
    hammer.on('panend', this.panEndHandler.bind(this));

    this._hammer = hammer;
  },

  willDestroyElement() {
    let hammer = this._hammer;

    hammer.off('press');
    hammer.off('panstart');
    hammer.off('panmove');
    hammer.off('panend');

    hammer.destroy();

    this._super(...arguments);
  },

  actions: {
    sendDropdownAction(...args) {
      this.onDropdownAction?.(...args);
    },
  },

  click(event) {
    let isSortable = this.get('isSortable');
    let inputParent = closest(event.target, 'button:not(.et-sort-toggle), input, label, a, select');

    if (this._columnState === COLUMN_INACTIVE && !inputParent && isSortable) {
      let toggle = event.ctrlKey || event.metaKey;

      this.updateSort({ toggle });
    }
  },

  contextMenu(event) {
    this.onContextMenu?.(event);
    return false;
  },

  keyUp(event) {
    let isSortable = this.get('isSortable');
    let inputParent = closest(event.target, 'button:not(.et-sort-toggle), input, label, a, select');

    if (
      this._columnState === COLUMN_INACTIVE &&
      !inputParent &&
      event.key === 'Enter' &&
      isSortable
    ) {
      this.updateSort({ toggle: false });
    }
  },

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
  },

  pressHandler(event) {
    let [{ clientX, target }] = event.pointers;

    this._originalClientX = clientX;
    this._originalTargetWasResize = target.classList.contains('et-header-resize-area');
  },

  panStartHandler(event) {
    let isResizable = this.get('isResizable');
    let isReorderable = this.get('isReorderable');

    let [{ clientX }] = event.pointers;

    if (isResizable && this._originalTargetWasResize) {
      this._columnState = COLUMN_RESIZING;

      this.get('columnMeta').startResize(this._originalClientX);
    } else if (isReorderable) {
      this._columnState = COLUMN_REORDERING;

      this.get('columnMeta').startReorder(clientX);
    }
  },

  panMoveHandler(event) {
    let [{ clientX }] = event.pointers;

    if (this._columnState === COLUMN_RESIZING) {
      this.get('columnMeta').updateResize(clientX);
      this._prevClientX = clientX;
    } else if (this._columnState === COLUMN_REORDERING) {
      this.get('columnMeta').updateReorder(clientX);
      this._columnState = COLUMN_REORDERING;
    }
  },

  panEndHandler() {
    if (this._columnState === COLUMN_RESIZING) {
      this.get('columnMeta').endResize();
    } else if (this._columnState === COLUMN_REORDERING) {
      this.get('columnMeta').endReorder();
    }

    next(() => (this._columnState = COLUMN_INACTIVE));
  },
});
