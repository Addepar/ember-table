/* global ResizeSensor */
import Component from '@ember/component';
import { bind } from '@ember/runloop';
import { A as emberA } from '@ember/array';
import { assert } from '@ember/debug';
import defaultTo from '../../-private/utils/default-to';
import { addObserver } from '../../-private/utils/observer';
import EmberObject, { computed, get } from '@ember/object';
import { and, notEmpty, or } from '@ember/object/computed';
import { isPresent } from '@ember/utils';

import { closest } from '../../-private/utils/element';
import MetaCache from '../../-private/meta-cache';
import { sortMultiple, compareValues } from '../../-private/utils/sort';
import { scheduleOnce } from '@ember/runloop';

import ColumnTree, { RESIZE_MODE, FILL_MODE, WIDTH_CONSTRAINT } from '../../-private/column-tree';

import layout from './template';

let isTestingThead = false;
export function setupTHeadForTest(bool) {
  isTestingThead = bool;
}

/**
  The table header component. This component manages and receives the column
  definitions for the table, and yields for each row of headers that exists
  (in the case of subcolumns).

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} as |h|>

    </t.head>

    <t.body @rows={{this.rows}} />
  </EmberTable>
  ```

  @yield {object} head - the API object yielded by the table header
  @yield {Component} head.row - The table row component
  @class <EmberThead />
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
    Specifies the name of the property on the column objects that should be
    used as the key for caching column metadata. For example, if columns have
    a unique `id` property, the value could be set to `id`. If unspecified,
    the column object itself is used as a key.

    @argument columnKeyPath
    @type string?
  */
  columnKeyPath: null,

  /**
    An ordered array of the sorts applied to the table
    @argument sorts
    @type array? ([])
  */
  sorts: defaultTo(() => []),

  /**
    An optional sort. If not specified, defaults to `<sortMultiple>`, which
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
    Enables shadows at the edges of the table to show that the user can scroll
    to view more content. Possible string values are `all`, `horizontal`,
    `vertical`, and `none`. The boolean values `true` and `false` are aliased to `all` and `none`, respectively.
    @argument scrollIndicators
    @type boolean|string? (false)
  */
  scrollIndicators: defaultTo(false),

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
    Specifies how columns should be sized when the table is initialized. This only affects
    `eq-container-slack` and `gte-container-slack` width constraint modes. Permitted values are
    the same as `fillMode`.

    @argument initialFillMode
    @type string? ('none')
  */
  initialFillMode: defaultTo(FILL_MODE.NONE),

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

  attributeBindings: ['wrappedRowsCount:data-test-row-count'],
  wrappedRowsCount: and('isTesting', 'wrappedRows.length'),

  init() {
    this._super(...arguments);

    if (isTestingThead) {
      this.set('isTesting', true);
    }

    /**
     * A sensor object that sends events to this table component when table size changes. When table
     * is resized, table width & height are updated and other computed properties depending on them
     * also get updated.
     */
    this._tableResizeSensor = null;

    /**
      The map that contains column meta information for this table. Is meant to be
      unique to this table, which is why it is created here.
    */
    let columnKeyPath = this.get('columnKeyPath');
    this.columnMetaCache = new MetaCache({ keyPath: columnKeyPath });

    this.columnTree = ColumnTree.create({
      onReorder: this.onReorder?.bind(this),
      onResize: this.onResize?.bind(this),
      columnMetaCache: this.columnMetaCache,
      containerWidthAdjustment: this.containerWidthAdjustment,
    });

    /**
      The map that contains row meta information for this table header.
    */
    this.rowMetaCache = new Map();

    this._updateApi();
    this._validateUniqueColumnKeys();
    this._updateColumnTree();
    scheduleOnce('actions', this.columnTree, 'performInitialLayout');

    addObserver(this, 'scrollIndicators', this._updateApi);
    addObserver(this, 'reorderFunction', this._updateApi);
    addObserver(this, 'sorts', this._updateApi);
    addObserver(this, 'sortFunction', this._updateApi);

    addObserver(this, 'sorts', this._updateColumnTree);
    addObserver(this, 'columns.[]', this._onColumnsChange);
    addObserver(this, 'columnKeyPath', this._updateColumnMetaCache);
    addObserver(this, 'fillMode', this._updateColumnTree);
    addObserver(this, 'initialFillMode', this._updateColumnTree);
    addObserver(this, 'fillColumnIndex', this._updateColumnTree);
    addObserver(this, 'resizeMode', this._updateColumnTree);
    addObserver(this, 'widthConstraint', this._updateColumnTree);

    addObserver(this, 'enableSort', this._updateColumnTree);
    addObserver(this, 'enableResize', this._updateColumnTree);
    addObserver(this, 'enableReorder', this._updateColumnTree);
  },

  _updateApi() {
    this.set('unwrappedApi.columnTree', this.columnTree);
    this.set('unwrappedApi.compareFunction', this.get('compareFunction'));
    this.set('unwrappedApi.scrollIndicators', this.get('scrollIndicators'));
    this.set('unwrappedApi.sorts', this.get('sorts'));
    this.set('unwrappedApi.sortEmptyLast', this.get('sortEmptyLast'));
    this.set('unwrappedApi.sortFunction', this.get('sortFunction'));
  },

  _updateColumnTree() {
    this.columnTree.set('sorts', this.get('sorts'));
    this.columnTree.set('columns', this.get('columns'));
    this.columnTree.set('fillMode', this.get('fillMode'));
    this.columnTree.set('initialFillMode', this.get('initialFillMode'));
    this.columnTree.set('fillColumnIndex', this.get('fillColumnIndex'));
    this.columnTree.set('resizeMode', this.get('resizeMode'));
    this.columnTree.set('widthConstraint', this.get('widthConstraint'));

    this.columnTree.set('enableSort', this.get('enableSort'));
    this.columnTree.set('enableResize', this.get('enableResize'));
    this.columnTree.set('enableReorder', this.get('enableReorder'));
  },

  _updateColumnMetaCache() {
    this._validateUniqueColumnKeys();
    this.columnMetaCache.keyPath = this.get('columnKeyPath');
  },

  _onColumnsChange() {
    if (this.get('columns.length') === 0) {
      return;
    }
    this._validateUniqueColumnKeys();
    this._updateColumnTree();

    scheduleOnce('actions', this, this.fillupHandler);
  },

  _validateUniqueColumnKeys() {
    let columns = this.get('columns');
    let columnKeyPath = this.get('columnKeyPath');

    if (columns && columnKeyPath) {
      // traverse tree to collect column keys
      let keys = [];
      let queue = [...columns];
      while (queue.length > 0) {
        let column = queue.shift();
        keys.push(get(column, columnKeyPath));
        if (column.subcolumns) {
          queue.push(...column.subcolumns);
        }
      }

      let presentKeys = emberA(keys.filter(isPresent));

      // If a column has a falsey key, its meta data cannot be mapped to a
      // replacement column in the future. This is not necessarily a problem,
      // but it's reasonable to assume the consumer will want to avoid this
      // scenario if they have bothered to set `columnKeyPath` at all.
      assert(
        'if columnKeyPath is specified, every column must have a key',
        presentKeys.length === keys.length
      );

      // Duplicate non-blank keys are the real problem; the meta cache will map
      // two columns to the same meta object and havoc will ensue.
      assert(
        'if columnKeyPath is specified, no two columns can share the same key',
        presentKeys.uniq().length === presentKeys.length
      );
    }
  },

  didInsertElement() {
    this._super(...arguments);

    this._container = closest(this.element, '.ember-table-overflow');

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

    // Clean the row meta cache
    for (let [row, meta] of this.rowMetaCache.entries()) {
      meta.destroy();
      this.rowMetaCache.delete(row);
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
      let rowMetaCache = this.get('rowMetaCache');

      return emberA(
        rows.map((row, i) => {
          let rowMeta = rowMetaCache.get(row);

          if (!rowMeta) {
            rowMeta = EmberObject.create();
            rowMetaCache.set(row, rowMeta);
          }

          rowMeta.set('index', i);

          let cells = emberA(
            row.map(columnValue => {
              let columnMeta = columnMetaCache.get(columnValue);

              return {
                columnValue,
                columnMeta,
                rowMeta,
                sorts,
                sendUpdateSort: this.sendUpdateSort.bind(this),
              };
            })
          );

          return {
            cells,
            rowMeta,
            rowsCount: rows.length,
            isHeader: true,
          };
        })
      );
    }
  ),

  sendUpdateSort(newSorts) {
    this.onUpdateSorts?.(newSorts);
  },

  fillupHandler() {
    if (this.isDestroying) {
      return;
    }

    this.get('columnTree').ensureWidthConstraint();
  },
});
