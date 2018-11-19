import Component from '@ember/component';

import { tagName } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { bool, readOnly, or } from '@ember-decorators/object/computed';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import CollapseTree, { SELECT_MODE } from '../../-private/collapse-tree';

import layout from './template';
import { assert } from '@ember/debug';

/**
  The table body component. This component manages the main bulk of the rows of
  the table, provided occlusion for them and managing their behavior. It yields
  a template for each row, and an API that contains a row component, the row
  value, and the meta object for the row.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} />

    <t.body @rows={{rows}} as |b|>
      <b.row>
    </t.body>
  </EmberTable>
  ```

  @yield {object} b - the API object yielded by the table body
  @yield {Component} b.row - The table row component

  @yield {object} b.rowValue - The value for the currently yielded row
  @yield {object} b.rowMeta - The meta for the currently yielded row
*/
@tagName('tbody')
export default class EmberTBody extends Component {
  /**
    The API object passed in by the table
  */
  @argument
  @required
  @type('object')
  api;

  @or('api.api', 'api')
  unwrappedApi;

  @readOnly('unwrappedApi.columnTree.leaves')
  columns;

  @readOnly('unwrappedApi.columnTree.columnMetaCache')
  columnMetaCache;

  /**
    Sets which row selection behavior to follow. Possible values are 'none'
    (clicking on a row does nothing), 'single' (clicking on a row selects it and
    deselects other rows), and 'multiple' (multiple rows can be selected through
    ctrl/cmd-click or shift-click).
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  checkboxSelectionMode = SELECT_MODE.MULTIPLE;

  /**
    Sets which checkbox selection behavior to follow. Possible values are 'none'
    (clicking on a row does nothing), 'single' (clicking on a row selects it and
    deselects other rows), and 'multiple' (multiple rows can be selected through
    ctrl/cmd-click or shift-click).
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  rowSelectionMode = SELECT_MODE.MULTIPLE;

  /**
    When true, this option causes selecting all of a node's children to also
    select the node itself.
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  selectingChildrenSelectsParent = true;

  /**
    The currently selected rows. Can either be an array or and individual row.
  */
  @argument({ defaultIfUndefined: true })
  @type(optional('object'))
  selection = null;

  /**
    An action that triggers when the row selection of the table changes.

    @param {object} selection - The new selection
  */
  @argument
  @type(optional(Action))
  onSelect = null;

  /**
    Estimated height for each row. This number is used to decide how many rows
    will be rendered at initial rendering.
  */
  @argument({ defaultIfUndefined: true })
  @type('number')
  estimateRowHeight = 30;

  /**
    A flag that controls if all rows have same static height or not. By default
    it is set to false and row height is dependent on its internal content. If
    it is set to true, all rows have the same height equivalent to
    estimateRowHeight.
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  staticHeight = false;

  /**
    The number of extra rows to render on either side of the table's viewport
  */
  @argument({ defaultIfUndefined: true })
  @type('number')
  bufferSize = 20;

  /**
    A flag that tells the table to render all of its rows at once.
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  renderAll = false;

  /**
    An action that is triggered when the table reaches the first row.
  */
  @argument
  @type(optional(Action))
  firstReached = null;

  /**
    An action that is triggered when the table reaches the last row.
  */
  @argument
  @type(optional(Action))
  lastReached = null;

  /**
    An action that is triggered when the first visible row of the table changes.
  */
  @argument
  @type(optional(Action))
  firstVisibleChanged = null;

  /**
    An action that is triggered when the last visible row of the table changes.
  */
  @argument
  @type(optional(Action))
  lastVisibleChanged = null;

  /**
    Boolean flag that enables tree behavior if items have a `children` property
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  enableTree = true;

  /**
    Boolean flag that enables collapsing tree nodes
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  enableCollapse = true;

  /**
    The row items that the table should display
  */
  @argument({ defaultIfUndefined: true })
  @type('object')
  rows = [];

  /**
    This key is the property used by the collection to determine whether an
    array mutation is an append, prepend, or complete replacement. It is also
    the key that is passed to the actions, and can be used to restore scroll
    position with `idForFirstItem`. This is passed through to the
    vertical-collection.
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  key = '@identity';

  /**
    The property is passed through to the vertical-collection. If set, upon initialization
    the scroll position will be set such that the item
    with the provided id is at the top left on screen.
    If the item with id cannot be found, scrollTop is set to 0.
  */
  @argument({ defaultIfUndefined: true })
  @type(optional('string'))
  idForFirstItem = null;

  /**
    A selector string that will select the element from
    which to calculate the viewable height.
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  containerSelector = '';

  /**
    Whether or not the table can select, is true if an `onSelect` action was
    passed to the table.
  */
  @bool('onSelect')
  canSelect;

  init() {
    super.init(...arguments);

    this.layout = layout;

    /**
      The map that contains row meta information for this table.
    */
    this.rowMetaCache = new Map();

    /**
      A data structure that the table uses wrapping the `rows` object. It flattens
      the tree structure of the nodes and allows us to treat it as a flat list of
      items. This is much more convenient for most table operations in general.
    */
    this.collapseTree = CollapseTree.create({
      sendAction: this.sendAction.bind(this),
    });

    this._updateCollapseTree();

    this.addObserver('unwrappedApi.sorts', this._updateCollapseTree);
    this.addObserver('unwrappedApi.sortFunction', this._updateCollapseTree);
    this.addObserver('unwrappedApi.compareFunction', this._updateCollapseTree);

    this.addObserver('enableCollapse', this._updateCollapseTree);
    this.addObserver('enableTree', this._updateCollapseTree);
    this.addObserver('selection', this._updateCollapseTree);
    this.addObserver('selectingChildrenSelectsParent', this._updateCollapseTree);
    this.addObserver('onSelect', this._updateCollapseTree);

    assert(
      'You must create an {{ember-thead}} with columns before creating an {{ember-tbody}}',
      !!this.get('unwrappedApi.columnTree')
    );
  }

  _updateCollapseTree() {
    this.collapseTree.set('sorts', this.get('unwrappedApi.sorts'));
    this.collapseTree.set('sortFunction', this.get('unwrappedApi.sortFunction'));
    this.collapseTree.set('compareFunction', this.get('unwrappedApi.compareFunction'));

    this.collapseTree.set('enableCollapse', this.get('enableCollapse'));
    this.collapseTree.set('enableTree', this.get('enableTree'));
    this.collapseTree.set('selection', this.get('selection'));
    this.collapseTree.set(
      'selectingChildrenSelectsParent',
      this.get('selectingChildrenSelectsParent')
    );
  }

  willDestroy() {
    for (let [row, meta] of this.rowMetaCache.entries()) {
      meta.destroy();
      this.rowMetaCache.delete(row);
    }

    this.collapseTree.destroy();
  }

  /**
    Computed property which updates the CollapseTree and erases caches. This is
    a computed for 1.11 compatibility, otherwise it would make sense to use
    lifecycle hooks instead.
  */
  @computed('rows')
  get wrappedRows() {
    let rows = this.get('rows');

    this.collapseTree.set('rowMetaCache', this.rowMetaCache);
    this.collapseTree.set('rows', rows);

    return this.collapseTree;
  }

  /**
    Computed property which calculates container selector for vertical collection.
    It can be a custom selector provided directly to {{ember-tbody}}.
    If not, it will be equal to parent {{ember-table}} `id`.
  */
  @computed('containerSelector', 'unwrappedApi.tableId')
  get _containerSelector() {
    return this.get('containerSelector') || `#${this.get('unwrappedApi.tableId')}`;
  }
}
