import BaseTableCell from '../-private/base-table-cell';

import { computed } from '@ember/object';
import { alias, readOnly } from '@ember/object/computed';

import layout from './template';
import { SELECT_MODE } from '../../-private/collapse-tree';

let setupSimpleCheckboxForTest = false;
export function setSimpleCheckboxForTest(bool) {
  setupSimpleCheckboxForTest = bool;
}

/**
 The table cell component. This component manages cell level concerns, yields
 the cell value, column value, row value, and all of their associated meta
 objects.

 ```hbs
 <EmberTable as |t|>
 <t.head @columns={{this.columns}} />

 <t.body @rows={{this.rows}} as |b|>
 <b.row as |r|>
 <r.cell as |cellValue columnValue rowValue cellMeta columnMeta rowMeta|>

 </r.cell>
 </b.row>
 </t.body>
 </EmberTable>
 ```

 @yield {any} cellValue - The value of the cell
 @yield {object} columnValue - The column definition
 @yield {object} rowValue - The row definition

 @yield {object} cellMeta - The meta object associated with the cell
 @yield {object} columnMeta - The meta object associated with the column
 @yield {object} rowMeta - The meta object associated with the row
 @class <EmberTd />
 @public
 */
export default BaseTableCell.extend({
  layout,
  tagName: 'td',

  init() {
    this._super(...arguments);

    if (setupSimpleCheckboxForTest) {
      this.set('isTesting', true);
    }
  },
  /**
   The API object passed in by the table row
   @argument api
   @required
   @type object
  */
  api: null,

  /**
   Action sent when the user clicks this element
   @argument onClick
   @type Action?
  */
  onClick: null,

  /**
   Action sent when the user double clicks this element
   @argument onDoubleClick
   @type Action?
  */
  onDoubleClick: null,

  // only watch `api` due to a bug in Ember
  unwrappedApi: computed('api', function() {
    return this.get('api.api') || this.get('api');
  }),

  cellValue: alias('unwrappedApi.cellValue'),

  cellMeta: readOnly('unwrappedApi.cellMeta'),

  columnValue: readOnly('unwrappedApi.columnValue'),

  columnMeta: readOnly('unwrappedApi.columnMeta'),

  rowValue: readOnly('unwrappedApi.rowValue'),

  rowMeta: readOnly('unwrappedApi.rowMeta'),

  rowsCount: readOnly('unwrappedApi.rowsCount'),

  rowSelectionMode: readOnly('unwrappedApi.rowSelectionMode'),

  checkboxSelectionMode: readOnly('unwrappedApi.checkboxSelectionMode'),

  canCollapse: readOnly('rowMeta.canCollapse'),

  depthClass: computed('rowMeta.depth', function() {
    return `depth-${this.get('rowMeta.depth')}`;
  }),

  canSelect: computed('shouldShowCheckbox', 'rowSelectionMode', function() {
    let rowSelectionMode = this.get('rowSelectionMode');
    let shouldShowCheckbox = this.get('shouldShowCheckbox');

    return (
      shouldShowCheckbox ||
      rowSelectionMode === SELECT_MODE.MULTIPLE ||
      rowSelectionMode === SELECT_MODE.SINGLE
    );
  }),

  shouldShowCheckbox: computed('checkboxSelectionMode', function() {
    let checkboxSelectionMode = this.get('checkboxSelectionMode');

    return (
      checkboxSelectionMode === SELECT_MODE.MULTIPLE || checkboxSelectionMode === SELECT_MODE.SINGLE
    );
  }),

  actions: {
    onSelectionToggled(event) {
      let rowMeta = this.get('rowMeta');
      let checkboxSelectionMode = this.get('checkboxSelectionMode') || this.get('rowSelectionMode');

      if (rowMeta && checkboxSelectionMode === SELECT_MODE.MULTIPLE) {
        let toggle = true;
        let range = event.shiftKey;

        rowMeta.select({ toggle, range });
      } else if (rowMeta && checkboxSelectionMode === SELECT_MODE.SINGLE) {
        rowMeta.select();
      }

      this.sendFullAction('onSelect');
    },

    onCollapseToggled() {
      let rowMeta = this.get('rowMeta');

      rowMeta.toggleCollapse();

      this.sendFullAction('onCollapse');
    },
  },

  click(event) {
    this.sendFullAction('onClick', { event });
  },

  doubleClick(event) {
    this.sendFullAction('onDoubleClick', { event });
  },

  sendFullAction(action, values = {}) {
    // If the action doesn't exist, it's not being used. Do nothing
    if (!this.get(action)) {
      return;
    }

    let cellValue = this.get('cellValue');
    let cellMeta = this.get('cellMeta');

    let columnValue = this.get('columnValue');
    let columnMeta = this.get('columnMeta');

    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

    Object.assign(values, {
      cellValue,
      cellMeta,

      columnValue,
      columnMeta,

      rowValue,
      rowMeta,
    });

    let closureAction = this[action];
    closureAction?.(values);
  },
});
