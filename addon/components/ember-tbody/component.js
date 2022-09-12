import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';
import { computed } from '@ember/object';
import { observer } from '../../-private/utils/observer';
import { bool, readOnly, or } from '@ember/object/computed';

import CollapseTree, { SELECT_MODE } from '../../-private/collapse-tree';
import defaultTo from '../../-private/utils/default-to';

import layout from './template';
import { assert } from '@ember/debug';

let setupRowCountForTest = false;
export function setSetupRowCountForTest(bool) {
  setupRowCountForTest = bool;
}

/**
  The table body component. This component manages the main bulk of the rows of
  the table, provided occlusion for them and managing their behavior. It yields
  a template for each row, and an API that contains a row component, the row
  value, and the meta object for the row.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} />

    <t.body @rows={{this.rows}} as |b|>
      <b.row>
    </t.body>
  </EmberTable>
  ```

  @yield {object} body - the API object yielded by the table body
  @yield {Component} body.row - The table row component

  @yield {object} body.rowValue - The value for the currently yielded row
  @yield {object} body.rowMeta - The meta for the currently yielded row
  @class <EmberTbody />
  @public
*/
export default Component.extend({
  layout,
  tagName: 'tbody',

  /**
    The API object passed in by the table

    @argument api
    @required
    @type object
  */
  api: null,

  unwrappedApi: or('api.api', 'api'),

  columns: readOnly('unwrappedApi.columnTree.leaves'),
  columnMetaCache: readOnly('unwrappedApi.columnTree.columnMetaCache'),

  /**
    Sets which row selection behavior to follow. Possible values are 'none'
    (clicking on a row does nothing), 'single' (clicking on a row selects it and
    deselects other rows), and 'multiple' (multiple rows can be selected through
    ctrl/cmd-click or shift-click).

    @argument checkboxSelectionMode
    @type string? ('multiple')
  */
  checkboxSelectionMode: defaultTo(SELECT_MODE.MULTIPLE),

  /**
    Sets which checkbox selection behavior to follow. Possible values are 'none'
    (clicking on a row does nothing), 'single' (clicking on a row selects it and
    deselects other rows), and 'multiple' (multiple rows can be selected through
    ctrl/cmd-click or shift-click).

    @argument rowSelectionMode
    @type string? ('multiple')
  */
  rowSelectionMode: defaultTo(SELECT_MODE.MULTIPLE),

  /**
    When true, this option enables the toggling of rows without using the ctrlKey or metaKey.

    @argument rowToggleMode
    @type boolean
  */
  rowToggleMode: defaultTo(false),

  /**
    When true, this option causes selecting all of a node's children to also
    select the node itself.

    @argument selectingChildrenSelectsParent
    @type boolean
  */
  selectingChildrenSelectsParent: defaultTo(true),

  /**
    The currently selected rows. Can either be an array or an individual row.

    @argument selection
    @type array|object|null
  */
  selection: null,

  /**
    A function that will override how selection is compared to row value.

    @argument selectionMatchFunction
    @type function?
  */
  selectionMatchFunction: null,

  /**
    An action that is called when the row selection of the table changes.
    Will be called with either an array or individual row, depending on the
    checkboxSelectionMode.

    @argument onSelect
    @type Action?
    @param {object} selection - The new selection
  */
  onSelect: null,

  /**
    Estimated height for each row. This number is used to decide how many rows
    will be rendered at initial rendering.

    @argument estimateRowHeight
    @type number? (30)
  */
  estimateRowHeight: defaultTo(30),

  /**
    A flag that controls if all rows have same static height or not. By default
    it is set to false and row height is dependent on its internal content. If
    it is set to true, all rows have the same height equivalent to
    estimateRowHeight.

    @argument staticHeight
    @type boolean? (false)
  */
  staticHeight: defaultTo(false),

  /**
    The number of extra rows to render on either side of the table's viewport

    @argument bufferSize
    @type number? (1)
  */
  bufferSize: defaultTo(1),

  /**
    A flag that tells the table to render all of its rows at once.

    @argument renderAll
    @type boolean? (false)
  */
  renderAll: defaultTo(false),

  /**
    An action that is triggered when the table reaches the first row.

    @argument firstReached
    @type Action?
  */
  firstReached: null,

  /**
    An action that is triggered when the table reaches the last row.

    @argument lastReached
    @type Action?
  */
  lastReached: null,

  /**
    An action that is triggered when the first visible row of the table changes.

    @argument firstVisibleChanged
    @type Action?
  */
  firstVisibleChanged: null,

  /**
    An action that is triggered when the last visible row of the table changes.

    @argument lastVisibleChanged
    @type Action?
  */
  lastVisibleChanged: null,

  /**
    Boolean flag that enables tree behavior if items have a `children` property

    @argument enableTree
    @type boolean? (true)
  */
  enableTree: defaultTo(true),

  /**
    Boolean flag that enables collapsing tree nodes

    @argument enableCollapse
    @type boolean? (true)
  */
  enableCollapse: defaultTo(true),

  /**
    The row items that the table should display

    @argument rows
    @type array? ([])
  */
  rows: defaultTo(() => []),

  /**
    This key is the property used by the collection to determine whether an
    array mutation is an append, prepend, or complete replacement. It is also
    the key that is passed to the actions, and can be used to restore scroll
    position with `idForFirstItem`. This is passed through to the
    vertical-collection.

    @argument key
    @type string? ('@identity')
  */
  key: defaultTo('@identity'),

  /**
    The property is passed through to the vertical-collection. If set, upon initialization
    the scroll position will be set such that the item
    with the provided id is at the top left on screen.
    If the item with id cannot be found, scrollTop is set to 0.

    @argument idForFirstItem
    @type string?
  */
  idForFirstItem: null,

  /**
    A selector string that will select the element from
    which to calculate the viewable height.

    @argument containerSelector
    @type string? (<tableId>)
  */
  containerSelector: defaultTo(''),

  /**
    Whether or not the table can select, is true if an `onSelect` action was
    passed to the table.
  */
  canSelect: bool('onSelect'),

  dataTestRowCount: null,

  attributeBindings: ['dataTestRowCount:data-test-row-count'],

  init() {
    this._super(...arguments);

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
      onSelect: this.onSelect?.bind(this),
    });

    this._updateCollapseTree();

    /*
     * Ember test selectors will remove data-test-row-count from the bindings,
     * so if it is missing there is no need to all the count.
     *
     * Even when ember-table is testing a production build, the you may want to
     * run tests which make assertions about row count. To implement that capability
     * reference a boolean variable controlled by the test helpers.
     */
    if (setupRowCountForTest) {
      this._isObservingDebugRowCount = true;
      let scheduleUpdate = (this._scheduleUpdate = () => {
        scheduleOnce('actions', this, this._updateDataTestRowCount);
      });
      this.collapseTree.addObserver('rows', scheduleUpdate);
      this.collapseTree.addObserver('[]', scheduleUpdate);
    }

    assert(
      'You must create an <EmberThead /> with columns before creating an <EmberTbody />',
      !!this.get('unwrappedApi.columnTree')
    );
  },

  _updateDataTestRowCount() {
    this.set('dataTestRowCount', this.get('collapseTree.length'));
  },

  // eslint-disable-next-line
  _updateCollapseTree: observer(
    'unwrappedApi.{sorts,sortFunction,compareFunction,sortEmptyLast}',
    'enableCollapse',
    'enableTree',
    'selection',
    'selectionMatchFunction',
    'selectingChildrenSelectsParent',
    'onSelect',

    function() {
      this.collapseTree.set('sorts', this.get('unwrappedApi.sorts'));
      this.collapseTree.set('sortFunction', this.get('unwrappedApi.sortFunction'));
      this.collapseTree.set('compareFunction', this.get('unwrappedApi.compareFunction'));
      this.collapseTree.set('sortEmptyLast', this.get('unwrappedApi.sortEmptyLast'));

      this.collapseTree.set('enableCollapse', this.get('enableCollapse'));
      this.collapseTree.set('enableTree', this.get('enableTree'));
      this.collapseTree.set('selection', this.get('selection'));
      this.collapseTree.set('selectionMatchFunction', this.get('selectionMatchFunction'));
      this.collapseTree.set(
        'selectingChildrenSelectsParent',
        this.get('selectingChildrenSelectsParent')
      );
    }
  ),

  willDestroy() {
    for (let [row, meta] of this.rowMetaCache.entries()) {
      meta.destroy();
      this.rowMetaCache.delete(row);
    }

    if (this._isObservingDebugRowCount) {
      this.collapseTree.removeObserver('rows', this._scheduleUpdate);
      this.collapseTree.removeObserver('[]', this._scheduleUpdate);
    }
    this.collapseTree.destroy();
  },

  /**
    Computed property which updates the CollapseTree and erases caches. This is
    a computed for 1.12 compatibility, otherwise it would make sense to use
    lifecycle hooks instead.
  */
  wrappedRows: computed('rows', function() {
    let rows = this.get('rows');

    this.collapseTree.set('rowMetaCache', this.rowMetaCache);
    this.collapseTree.set('rows', rows);

    return this.collapseTree;
  }),

  /**
    Computed property which calculates container selector for vertical collection.
    It can be a custom selector provided directly to <EmberTbody />.
    If not, it will be equal to parent <EmberTable /> `id`.
  */
  _containerSelector: computed('containerSelector', 'unwrappedApi.tableId', function() {
    return this.get('containerSelector') || `#${this.get('unwrappedApi.tableId')}`;
  }),
});
