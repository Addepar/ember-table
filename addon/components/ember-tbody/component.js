import Component from '@ember/component';

import { computed, observer } from '@ember/object';
import { bool, readOnly, or } from '@ember/object/computed';

import { SUPPORTS_INVERSE_BLOCK } from 'ember-compatibility-helpers';

import CollapseTree, { SELECT_MODE } from '../../-private/collapse-tree';
import defaultTo from '../../-private/utils/default-to';

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
export default Component.extend({
  layout,
  tagName: 'tbody',

  /**
    The API object passed in by the table

    @argument
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

    @argument
    @type string
  */
  checkboxSelectionMode: defaultTo(SELECT_MODE.MULTIPLE),

  /**
    Sets which checkbox selection behavior to follow. Possible values are 'none'
    (clicking on a row does nothing), 'single' (clicking on a row selects it and
    deselects other rows), and 'multiple' (multiple rows can be selected through
    ctrl/cmd-click or shift-click).

    @argument
    @type string
  */
  rowSelectionMode: defaultTo(SELECT_MODE.MULTIPLE),

  /**
    When true, this option causes selecting all of a node's children to also
    select the node itself.

    @argument
    @type boolean
  */
  selectingChildrenSelectsParent: defaultTo(true),

  /**
    The currently selected rows. Can either be an array or and individual row.

    @argument
    @type object?
  */
  selection: null,

  /**
    An action that triggers when the row selection of the table changes.

    @argument
    @type Action?
    @param {object} selection - The new selection
  */
  onSelect: null,

  /**
    Estimated height for each row. This number is used to decide how many rows
    will be rendered at initial rendering.

    @argument
    @type number
  */
  estimateRowHeight: defaultTo(30),

  /**
    A flag that controls if all rows have same static height or not. By default
    it is set to false and row height is dependent on its internal content. If
    it is set to true, all rows have the same height equivalent to
    estimateRowHeight.

    @argument
    @type boolean
  */
  staticHeight: defaultTo(false),

  /**
    The number of extra rows to render on either side of the table's viewport

    @argument
    @type number
  */
  bufferSize: defaultTo(1),

  /**
    A flag that tells the table to render all of its rows at once.

    @argument
    @type boolean
  */
  renderAll: defaultTo(false),

  /**
    An action that is triggered when the table reaches the first row.

    @argument
    @type Action?
  */
  firstReached: null,

  /**
    An action that is triggered when the table reaches the last row.

    @argument
    @type Action?
  */
  lastReached: null,

  /**
    An action that is triggered when the first visible row of the table changes.

    @argument
    @type Action?
  */
  firstVisibleChanged: null,

  /**
    An action that is triggered when the last visible row of the table changes.

    @argument
    @type Action?
  */
  lastVisibleChanged: null,

  /**
    Boolean flag that enables tree behavior if items have a `children` property

    @argument
    @type boolean
  */
  enableTree: defaultTo(true),

  /**
    Boolean flag that enables collapsing tree nodes

    @argument
    @type boolean
  */
  enableCollapse: defaultTo(true),

  /**
    The row items that the table should display

    @argument
    @type object
  */
  rows: defaultTo(() => []),

  /**
    This key is the property used by the collection to determine whether an
    array mutation is an append, prepend, or complete replacement. It is also
    the key that is passed to the actions, and can be used to restore scroll
    position with `idForFirstItem`. This is passed through to the
    vertical-collection.

    @argument
    @type string
  */
  key: defaultTo('@identity'),

  /**
    The property is passed through to the vertical-collection. If set, upon initialization
    the scroll position will be set such that the item
    with the provided id is at the top left on screen.
    If the item with id cannot be found, scrollTop is set to 0.

    @argument
    @type string?
  */
  idForFirstItem: null,

  /**
    A selector string that will select the element from
    which to calculate the viewable height.

    @argument
    @type string
  */
  containerSelector: defaultTo(''),

  /**
    Whether or not the table can select, is true if an `onSelect` action was
    passed to the table.
  */
  canSelect: bool('onSelect'),

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
      sendAction: this.sendAction.bind(this),
    });

    this._updateCollapseTree();

    assert(
      'You must create an {{ember-thead}} with columns before creating an {{ember-tbody}}',
      !!this.get('unwrappedApi.columnTree')
    );
  },

  // eslint-disable-next-line
  _updateCollapseTree: observer(
    'unwrappedApi.{sorts,sortFunction,compareFunction,sortEmptyLast}',
    'enableCollapse',
    'enableTree',
    'selection',
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

    this.collapseTree.destroy();
  },

  /**
    Computed property which updates the CollapseTree and erases caches. This is
    a computed for 1.11 compatibility, otherwise it would make sense to use
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
    It can be a custom selector provided directly to {{ember-tbody}}.
    If not, it will be equal to parent {{ember-table}} `id`.
  */
  _containerSelector: computed('containerSelector', 'unwrappedApi.tableId', function() {
    return this.get('containerSelector') || `#${this.get('unwrappedApi.tableId')}`;
  }),

  /**
   * Determines if the component can yield-to-inverse based on
   * the version compatability.
   */
  shouldYieldToInverse: SUPPORTS_INVERSE_BLOCK,
});
