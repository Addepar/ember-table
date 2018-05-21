import Component from '@ember/component';

import { tagName } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import CollapseTree, { SELECT_MODE } from '../../-private/collapse-tree';

import layout from './template';
import { assert } from '@ember/debug';

@tagName('tbody')
export default class EmberTBody extends Component {
  layout = layout;

  @argument
  @required
  @type('object')
  api;

  @readOnly('api.columnTree.leaves') columns;
  @readOnly('api.columnTree.columnMetaCache') columnMetaCache;

  /**
    Sets which row selection behavior to follow. Possible values are 'none' (clicking on a row
    does nothing), 'single' (clicking on a row selects it and deselects other rows), and 'multiple'
    (multiple rows can be selected through ctrl/cmd-click or shift-click).
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  selectMode = SELECT_MODE.MULTIPLE;

  /**
    The currently list of currently selected rows
  */
  @argument({ defaultIfUndefined: true })
  @type(Array)
  selectedRows = [];

  /**
    An action that triggers when the row selection of the table changes

    @param {Array} selectedRows - The new set of selected rows
  */
  @argument
  @type(optional(Action))
  onSelect = null;

  /**
    Estimated height for each row. This number is used to decide how many rows will be rendered at
    initial rendering.
  */
  @argument({ defaultIfUndefined: true })
  @type('number')
  estimateRowHeight = 30;

  /**
    A flag that controls if all rows have same static height or not. By default it is set to false
    and row height is dependent on its internal content. If it is set to true, all rows have the
    same height equivalent to estimateRowHeight.
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  staticHeight = false;

  @argument({ defaultIfUndefined: true })
  @type('boolean')
  enableTree = true;

  @argument({ defaultIfUndefined: true })
  @type('boolean')
  enableCollapse = true;

  /**
   * The row items that the table should display
   */
  @argument({ defaultIfUndefined: true })
  @type('object')
  rows = [];

  /**
    The map that contains cell meta information for this table. Is meant to be
    unique to this table, which is why it is created here. In order to prevent
    memory leaks, we need to be able to clean the cache manually when the table
    is destroyed or updated, which is why we use a Map instead of WeakMap
  */
  cellMetaCache = new Map();

  /**
    The map that contains row meta information for this table.
  */
  rowMetaCache = new Map();

  collapseTree = CollapseTree.create({
    sendAction: this.sendAction.bind(this),
    rowMetaCache: this.rowMetaCache,
  });

  constructor() {
    super(...arguments);

    this._updateCollapseTree();

    this.addObserver('enableCollapse', this._updateCollapseTree);
    this.addObserver('enableTree', this._updateCollapseTree);
    this.addObserver('selectedRows', this._updateCollapseTree);
    this.addObserver('selectMode', this._updateCollapseTree);
    this.addObserver('onSelect', this._updateCollapseTree);

    assert(
      'You must create an {{ember-thead}} with columns before creating an {{ember-tbody}}',
      !!this.get('api.columnTree')
    );
  }

  _updateCollapseTree() {
    let onSelect = this.get('onSelect');

    this.collapseTree.set('enableCollapse', this.get('enableCollapse'));
    this.collapseTree.set('enableTree', this.get('enableTree'));
    this.collapseTree.set('selectedRows', this.get('selectedRows'));
    this.collapseTree.set('selectMode', onSelect ? this.get('selectMode') : 'none');
  }

  willDestroy() {
    this._cleanCaches();

    this.collapseTree.destroy();
  }

  @computed('rows')
  get wrappedRows() {
    this._cleanCaches();

    let rows = this.get('rows');

    this.collapseTree.set('rows', rows);

    return this.collapseTree;
  }

  _cleanCaches() {
    this.cellMetaCache.clear();

    for (let [row, meta] of this.rowMetaCache.entries()) {
      meta.destroy();
      this.rowMetaCache.delete(row);
    }
  }
}
