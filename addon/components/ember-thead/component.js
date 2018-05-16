/* global ResizeSensor */
import Component from '@ember/component';
import { bind } from '@ember/runloop';
import { A as emberA } from '@ember/array';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';
import { computed } from '@ember-decorators/object';
import { tagName } from '@ember-decorators/component';

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

  @argument({ defaultIfUndefined: true })
  @type('boolean')
  enableReorder = true;

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
    An action passed in the column reordering event
  */
  @argument
  @type(optional(Action))
  onReorder = null;

  /**
    An action passed in the column resizing event
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

  columnMetaCache = new WeakMap();

  @computed('columnTree.rows.[]', 'enableReorder', 'enableResize', 'fillMode')
  get wrappedRows() {
    let rows = this.get('columnTree.rows');
    let columnMetaCache = this.get('columnMetaCache');
    let enableReorder = this.get('enableReorder');
    let enableResize = this.get('enableResize');

    return emberA(
      rows.map(row =>
        emberA(
          row.map(columnValue => {
            let columnMeta = columnMetaCache.get(columnValue);

            return {
              columnValue,
              columnMeta,
              enableReorder,
              enableResize,
            };
          })
        )
      )
    );
  }

  constructor() {
    super(...arguments);

    this.columnTree = ColumnTree.create({ component: this, columnMetaCache: this.columnMetaCache });
    this.get('api').registerColumnTree(this.columnTree);
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

    super.willDestroyElement(...arguments);
  }

  fillupHandler = () => {
    if (this.isDestroying) {
      return;
    }

    this.get('columnTree').ensureWidthConstraint();
  };
}
