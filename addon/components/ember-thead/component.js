/* global ResizeSensor */
import Component from '@ember/component';
import { bind } from '@ember/runloop';
import { A as emberA } from '@ember/array';
import defaultTo from '../../-private/utils/default-to';
import { computed } from '@ember/object';
import { notEmpty, or } from '@ember/object/computed';

import { closest } from '../../-private/utils/element';
import { sortMultiple, compareValues } from '../../-private/utils/sort';

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

  @yield {object} h - the API object yielded by the table header
  @yield {Component} h.row - The table row component
*/

export default Component.extend({
  layout,
  tagName: 'thead',

  /**
    The API object passed in by the table

    @argument
    @required
    @type object
  */
  api: null,

  unwrappedApi: or('api.api', 'api'),

  /**
    The column definitions for the table

    @argument
    @required
    @type(Array)
  */
  columns: defaultTo(() => []),

  /**
    An ordered array of the sorts applied to the table
    @argument({ defaultIfUndefined: true })
    @type(Array)
  */
  sorts: defaultTo(() => []),

  /**
    An optional sort
    @argument({ defaultIfUndefined: true })
    @type(optional(Function))
  */
  sortFunction: defaultTo(sortMultiple),

  /**
    An ordered array of the sorts applied to the table
    @argument({ defaultIfUndefined: true })
    @type(optional(Function))
  */
  compareFunction: defaultTo(compareValues),

  /**
    Flag that allows to sort empty values after non empty ones
    @argument({ defaultIfUndefined: false })
    @type(optional('boolean'))
  */
  sortEmptyLast: defaultTo(false),

  /**
    Flag that toggles reordering in the table
    @argument({ defaultIfUndefined: true })
    @type('boolean')
  */
  enableReorder: defaultTo(true),

  /**
    Flag that toggles resizing in the table
    @argument({ defaultIfUndefined: true })
    @type('boolean')
  */
  enableResize: defaultTo(true),

  /**
    Sets which column resizing behavior to use. Possible values are `standard`
    (resizing a column pushes or pulls all other columns) and `fluid` (resizing a
    column subtracts width from neighboring columns).
    @argument({ defaultIfUndefined: true })
    @type('string')
  */
  resizeMode: defaultTo(RESIZE_MODE.STANDARD),

  /**
    A configuration that controls how columns shrink (or extend) when total column width does not
    match table width. Behavior of column modification is as follow:

    * "equal-column": extra space is distributed equally among all columns
    * "first-column": extra space is added into the first column.
    * "last-column": extra space is added into the last column.

    @argument({ defaultIfUndefined: true })
    @type('string')
  */
  fillMode: defaultTo(FILL_MODE.EQUAL_COLUMN),

  /**
    Sets a constraint on the table's size, such that it must be greater than, less
    than, or equal to the size of the containing element.
    @argument({ defaultIfUndefined: true })
    @type('string')
  */
  widthConstraint: defaultTo(WIDTH_CONSTRAINT.NONE),

  /**
    A numeric adjustment to be applied to the constraint on the table's size.
    @argument
    @type(optional('number'))
  */
  containerWidthAdjustment: null,

  /**
    An action that is sent when sorts is updated
    @argument
    @type(optional(Action))
  */
  onHeaderAction: null,

  /**
    An action that is sent when sorts is updated
    @argument
    @type(optional(Action))
  */
  onUpdateSorts: null,

  /**
    An action that is sent when columns are reordered
    @argument
    @type(optional(Action))
  */
  onReorder: null,

  /**
    An action that is sent when columns are resized
    @argument
    @type(optional(Action))
  */
  onResize: null,

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
      sendAction: this.sendAction.bind(this),
      columnMetaCache: this.columnMetaCache,
      containerWidthAdjustment: this.containerWidthAdjustment,
    });

    this._updateApi();
    this._updateColumnTree();

    this.addObserver('sorts', this._updateApi);
    this.addObserver('sortFunction', this._updateApi);
    this.addObserver('reorderFunction', this._updateApi);

    this.addObserver('sorts', this._updateColumnTree);
    this.addObserver('columns', this._updateColumnTree);
    this.addObserver('fillMode', this._updateColumnTree);
    this.addObserver('resizeMode', this._updateColumnTree);
    this.addObserver('widthConstraint', this._updateColumnTree);

    this.addObserver('enableSort', this._updateColumnTree);
    this.addObserver('enableResize', this._updateColumnTree);
    this.addObserver('enableReorder', this._updateColumnTree);
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
    this.columnTree.set('resizeMode', this.get('resizeMode'));
    this.columnTree.set('widthConstraint', this.get('widthConstraint'));

    this.columnTree.set('enableSort', this.get('enableSort'));
    this.columnTree.set('enableResize', this.get('enableResize'));
    this.columnTree.set('enableReorder', this.get('enableReorder'));
  },

  didInsertElement() {
    this._super(...arguments);

    this._container = closest(this.element, '.ember-table');

    this.columnTree.registerContainer(this._container);

    this._tableResizeSensor = new ResizeSensor(
      this._container,
      bind(this.fillupHandler.bind(this))
    );
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
    this.sendAction('onUpdateSorts', newSorts);
  },

  fillupHandler() {
    if (this.isDestroying) {
      return;
    }

    this.get('columnTree').ensureWidthConstraint();
  },
});
