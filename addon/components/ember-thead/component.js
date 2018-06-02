/* global ResizeSensor */
import Component from '@ember/component';
import { bind } from '@ember/runloop';
import { A as emberA } from '@ember/array';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';
import { computed } from '@ember-decorators/object';
import { notEmpty } from '@ember-decorators/object/computed';
import { tagName } from '@ember-decorators/component';

import { sortMultiple, compareValues } from '../../-private/utils/sort';

import ColumnTree, { RESIZE_MODE, FILL_MODE, WIDTH_CONSTRAINT } from '../../-private/column-tree';

import layout from './template';

@tagName('thead')
export default class EmberTHead extends Component {
  layout = layout;

  /**
    The API object passed in by the table
  */
  @argument
  @required
  @type('object')
  api;

  /**
    The column definitions for the table
  */
  @argument
  @required
  @type(Array)
  columns;

  /**
    An ordered array of the sorts applied to the table
  */
  @argument({ defaultIfUndefined: true })
  @type(Array)
  sorts = [];

  /**
    An optional sort
  */
  @argument({ defaultIfUndefined: true })
  @type(Function)
  sortFunction = sortMultiple;

  /**
    An ordered array of the sorts applied to the table
  */
  @argument({ defaultIfUndefined: true })
  @type(Function)
  compareFunction = compareValues;

  /**
    Flag that toggles reordering in the table
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  enableReorder = true;

  /**
    Flag that toggles resizing in the table
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  enableResize = true;

  /**
    Sets which column resizing behavior to use. Possible values are `standard`
    (resizing a column pushes or pulls all other columns) and `fluid` (resizing a
    column subtracts width from neighboring columns).
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  resizeMode = RESIZE_MODE.STANDARD;

  /**
    A configuration that controls how columns shrink (or extend) when total column width does not
    match table width. Behavior of column modification is as follow:

    * "equal-column": extra space is distributed equally among all columns
    * "first-column": extra space is added into the first column.
    * "last-column": extra space is added into the last column.
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  fillMode = FILL_MODE.EQUAL_COLUMN;

  /**
    Sets a constraint on the table's size, such that it must be greater than, less
    than, or equal to the size of the containing element.
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  widthConstraint = WIDTH_CONSTRAINT.NONE;

  /**
    An action that is sent when sorts is updated
  */
  @argument
  @type(optional(Action))
  onHeaderAction = null;

  /**
    An action that is sent when sorts is updated
  */
  @argument
  @type(optional(Action))
  onUpdateSorts = null;

  /**
    An action that is sent when columns are reordered
  */
  @argument
  @type(optional(Action))
  onReorder = null;

  /**
    An action that is sent when columns are resized
  */
  @argument
  @type(optional(Action))
  onResize = null;

  /**
   * A sensor object that sends events to this table component when table size changes. When table
   * is resized, table width & height are updated and other computed properties depending on them
   * also get updated.
   */
  _tableResizeSensor = null;

  /**
    The map that contains column meta information for this table. Is meant to be
    unique to this table, which is why it is created here. In order to prevent
    memory leaks, we need to be able to clean the cache manually when the table
    is destroyed or updated, which is why we use a Map instead of WeakMap
  */
  columnMetaCache = new Map();

  columnTree = ColumnTree.create({
    sendAction: this.sendAction.bind(this),
    columnMetaCache: this.columnMetaCache,
  });

  @computed('api.api')
  get unwrappedApi() {
    return this.get('api.api') || this.get('api');
  }

  constructor() {
    super(...arguments);

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
  }

  _updateApi() {
    this.set('unwrappedApi.columnTree', this.columnTree);
    this.set('unwrappedApi.isSortable', this.get('isSortable'));
    this.set('unwrappedApi.sorts', this.get('sorts'));
    this.set('unwrappedApi.sortFunction', this.get('sortFunction'));
    this.set('unwrappedApi.compareFunction', this.get('compareFunction'));
  }

  _updateColumnTree() {
    this.columnTree.set('sorts', this.get('sorts'));
    this.columnTree.set('columns', this.get('columns'));
    this.columnTree.set('fillMode', this.get('fillMode'));
    this.columnTree.set('resizeMode', this.get('resizeMode'));
    this.columnTree.set('widthConstraint', this.get('widthConstraint'));
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    this._container = this.element.closest('.ember-table');

    this.columnTree.registerContainer(this._container);

    this._tableResizeSensor = new ResizeSensor(this._container, bind(this.fillupHandler));
  }

  willDestroyElement() {
    this._tableResizeSensor.detach(this._container);

    this.columnTree.destroy();

    // Clean the column meta cache
    for (let [column, meta] of this.columnMetaCache.entries()) {
      meta.destroy();
      this.columnMetaCache.delete(column);
    }

    super.willDestroyElement(...arguments);
  }

  @notEmpty('onUpdateSorts') isSortable;

  @computed(
    'columnTree.rows.[]',
    'sorts.[]',
    'headerActions.[]',
    'enableReorder',
    'enableResize',
    'fillMode'
  )
  get wrappedRows() {
    let rows = this.get('columnTree.rows');
    let sorts = this.get('sorts');
    let isSortable = this.get('isSortable');
    let columnMetaCache = this.get('columnMetaCache');
    let enableReorder = this.get('enableReorder');
    let enableResize = this.get('enableResize');

    return emberA(
      rows.map(row => {
        let cells = emberA(
          row.map(columnValue => {
            let columnMeta = columnMetaCache.get(columnValue);

            return {
              columnValue,
              columnMeta,
              enableReorder,
              enableResize,
              sorts,
              isSortable,
              sendUpdateSort: this.sendUpdateSort,
            };
          })
        );

        return { cells, isHeader: true };
      })
    );
  }

  sendUpdateSort = newSorts => {
    this.sendAction('onUpdateSorts', newSorts);
  };

  fillupHandler = () => {
    if (this.isDestroying) {
      return;
    }

    this.get('columnTree').ensureWidthConstraint();
  };
}
