/* global ResizeSensor */
import Component from '@ember/component';
import { bind } from '@ember/runloop';
import { A as emberA } from '@ember/array';
import defaultTo from '../../-private/utils/default-to';
import { addObserver } from '../../-private/utils/observer';
import { computed, get } from '@ember/object';
import { notEmpty, or, readOnly } from '@ember/object/computed';

import { gte } from 'ember-compatibility-helpers';

import { closest } from '../../-private/utils/element';
import { sortMultiple, compareValues } from '../../-private/utils/sort';
import { scheduleOnce } from '@ember/runloop';

import ColumnTree, { RESIZE_MODE, FILL_MODE, WIDTH_CONSTRAINT } from '../../-private/column-tree';

import layout from './template';

/**
  The table header component. This component manages and receives the column
  definitions for the table, and yields for each row of headers that exists
  (in the case of subcolumns).

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} as |h|>

    </t.head>

    <t.body @rows={{rows}} />
  </EmberTable>
  ```

  @yield {object} head - the API object yielded by the table header
  @yield {Component} head.row - The table row component
  @class {{ember-thead}}
  @public
*/

export default Component.extend({
  layout,
  tagName: 'thead',

  /**
    The API object passed in by the table

    @argument api
    @required
    @type object
  */
  api: null,

  unwrappedApi: or('api.api', 'api'),

  /**
    The column definitions for the table

    @argument columns
    @required
    @type array? ([])
  */
  columns: defaultTo(() => []),

  /**
    An ordered array of the sorts applied to the table
    @argument sorts
    @type array? ([])
  */
  sorts: defaultTo(() => []),

  /**
    An optional sort. If not specified, defaults to <sortMultiple>, which
    sorts by each `sort` in `sorts`, in order.
    @argument sortFunction
    @type function? (<sortMultiple>)
  */
  sortFunction: defaultTo(() => sortMultiple),

  /**
    An ordered array of the sorts applied to the table
    @argument compareFunction
    @type function? (<compareValues>)
  */
  compareFunction: defaultTo(() => compareValues),

  /**
    Flag that allows to sort empty values after non empty ones
    @argument sortEmptyLast
    @type boolean? (false)
  */
  sortEmptyLast: defaultTo(false),

  /**
    Flag that toggles reordering in the table
    @argument enableReorder
    @type boolean? (true)
  */
  enableReorder: defaultTo(true),

  /**
    Flag that toggles resizing in the table
    @argument enableResize
    @type boolean? (true)
  */
  enableResize: defaultTo(true),

  /**
    Sets which column resizing behavior to use. Possible values are `standard`
    (resizing a column pushes or pulls all other columns) and `fluid` (resizing a
    column subtracts width from neighboring columns).
    @argument resizeMode
    @type string? ('standard')
  */
  resizeMode: defaultTo(RESIZE_MODE.STANDARD),

  /**
    A configuration that controls how columns shrink (or extend) when total column width does not
    match table width. Behavior of column modification is as follows:

    * "equal-column": extra space is distributed equally among all columns
    * "first-column": extra space is added into the first column.
    * "last-column": extra space is added into the last column.
    * "nth-column": extra space is added into the column defined by `fillColumnIndex`.

    @argument fillMode
    @type string? ('equal-column')
  */
  fillMode: defaultTo(FILL_MODE.EQUAL_COLUMN),

  /**
    A configuration that controls which column shrinks (or extends) when `fillMode` is
    'nth-column'. This is zero indexed.

    @argument fillColumnIndex
    @type number?
  */
  fillColumnIndex: null,

  /**
    Sets a constraint on the table's size, such that it must be greater than, less
    than, or equal to the size of the containing element.
    Valid values:
      * 'none'
      * 'eq-container'
      * 'gte-container'
      * 'lte-container'

    @argument widthConstraint
    @type string? ('none')
  */
  widthConstraint: defaultTo(WIDTH_CONSTRAINT.NONE),

  /**
    A numeric adjustment to be applied to the constraint on the table's size.

    @argument containerWidthAdjustment
    @type number?
  */
  containerWidthAdjustment: null,

  /**
    An action that is sent when sorts is updated
    @argument onHeaderAction
    @type Action?
  */
  onHeaderAction: null,

  /**
    An action that is sent when sorts is updated
    @argument onUpdateSorts
    @type Action?
  */
  onUpdateSorts: null,

  /**
    An action that is sent when columns are reordered
    @argument onReorder
    @type Action?
  */
  onReorder: null,

  /**
    An action that is sent when columns are resized
    @argument onResize
    @type Action?
  */
  onResize: null,

  'data-test-row-count': readOnly('wrappedRows.length'),

  init() {
    this._super(...arguments);

    /**
     * A sensor object that sends events to this table component when table size changes. When table
     * is resized, table width & height are updated and other computed properties depending on them
     * also get updated.
     */
    this._tableResizeSensor = null;

    /**
      The map that contains column meta information for this table. Is meant to be
      unique to this table, which is why it is created here. In order to prevent
      memory leaks, we need to be able to clean the cache manually when the table
      is destroyed or updated, which is why we use a Map instead of WeakMap
    */
    this.columnMetaCache = new Map();

    this.columnTree = ColumnTree.create({
      sendAction: this._callAction.bind(this),
      columnMetaCache: this.columnMetaCache,
      containerWidthAdjustment: this.containerWidthAdjustment,
    });

    this._updateApi();
    this._updateColumnTree();

    addObserver(this, 'sorts', this._updateApi);
    addObserver(this, 'sortFunction', this._updateApi);
    addObserver(this, 'reorderFunction', this._updateApi);

    addObserver(this, 'sorts', this._updateColumnTree);
    addObserver(this, 'columns.[]', this._onColumnsChange);
    addObserver(this, 'fillMode', this._updateColumnTree);
    addObserver(this, 'fillColumnIndex', this._updateColumnTree);
    addObserver(this, 'resizeMode', this._updateColumnTree);
    addObserver(this, 'widthConstraint', this._updateColumnTree);

    addObserver(this, 'enableSort', this._updateColumnTree);
    addObserver(this, 'enableResize', this._updateColumnTree);
    addObserver(this, 'enableReorder', this._updateColumnTree);
  },

  _callAction() {
    if (gte('1.13.0')) {
      let arrayArguments = Array.prototype.slice.call(arguments);
      let actionName = arrayArguments.shift();

      if (get(this, actionName)) {
        get(this, actionName)(...arrayArguments);
      }
    } else {
      this.sendAction(...arguments);
    }
  },

  _updateApi() {
    this.set('unwrappedApi.columnTree', this.columnTree);
    this.set('unwrappedApi.sorts', this.get('sorts'));
    this.set('unwrappedApi.sortFunction', this.get('sortFunction'));
    this.set('unwrappedApi.compareFunction', this.get('compareFunction'));
    this.set('unwrappedApi.sortEmptyLast', this.get('sortEmptyLast'));
  },

  _updateColumnTree() {
    this.columnTree.set('sorts', this.get('sorts'));
    this.columnTree.set('columns', this.get('columns'));
    this.columnTree.set('fillMode', this.get('fillMode'));
    this.columnTree.set('fillColumnIndex', this.get('fillColumnIndex'));
    this.columnTree.set('resizeMode', this.get('resizeMode'));
    this.columnTree.set('widthConstraint', this.get('widthConstraint'));

    this.columnTree.set('enableSort', this.get('enableSort'));
    this.columnTree.set('enableResize', this.get('enableResize'));
    this.columnTree.set('enableReorder', this.get('enableReorder'));
  },

  _onColumnsChange() {
    if (this.get('columns.length') === 0) {
      return;
    }
    this._updateColumnTree();
    scheduleOnce('actions', this, this.fillupHandler);
  },

  didInsertElement() {
    this._super(...arguments);

    this._container = closest(this.element, '.ember-table');

    this.columnTree.registerContainer(this._container);

    this._tableResizeSensor = new ResizeSensor(this._container, bind(this, this.fillupHandler));
  },

  willDestroyElement() {
    this._tableResizeSensor.detach(this._container);

    this.columnTree.destroy();

    // Clean the column meta cache
    for (let [column, meta] of this.columnMetaCache.entries()) {
      meta.destroy();
      this.columnMetaCache.delete(column);
    }

    this._super(...arguments);
  },

  enableSort: notEmpty('onUpdateSorts'),

  wrappedRows: computed(
    'columnTree.rows.[]',
    'sorts.[]',
    'headerActions.[]',
    'fillMode',
    'fillColumnIndex',
    function() {
      let rows = this.get('columnTree.rows');
      let sorts = this.get('sorts');
      let columnMetaCache = this.get('columnMetaCache');

      return emberA(
        rows.map(row => {
          let cells = emberA(
            row.map(columnValue => {
              let columnMeta = columnMetaCache.get(columnValue);

              return {
                columnValue,
                columnMeta,
                sorts,
                sendUpdateSort: this.sendUpdateSort.bind(this),
              };
            })
          );

          return { cells, isHeader: true };
        })
      );
    }
  ),

  sendUpdateSort(newSorts) {
    if (gte('1.13.0')) {
      if (get(this, 'onUpdateSorts')) {
        get(this, 'onUpdateSorts')(newSorts);
      }
    } else {
      this.sendAction('onUpdateSorts', newSorts);
    }
  },

  fillupHandler() {
    if (this.isDestroying) {
      return;
    }

    this.get('columnTree').ensureWidthConstraint();
  },
});
