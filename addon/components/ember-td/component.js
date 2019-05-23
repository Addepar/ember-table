import BaseTableCell from '../-private/base-table-cell';
import { computed } from '@ember/object';
import layout from './template';
import { SELECT_MODE } from '../../-private/collapse-tree';

/**
 The table cell component. This component manages cell level concerns, yields
 the cell value, column value, row value, and all of their associated meta
 objects.

 ```hbs
 <EmberTable as |t|>
 <t.head @columns={{columns}} />

 <t.body @rows={{rows}} as |b|>
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
 @class {{ember-td}}
 @public
 */
export default BaseTableCell.extend({
  layout,
  tagName: 'td',

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

  depthClass: computed('unwrappedApi.rowMeta.depth', function() {
    return `depth-${this.get('unwrappedApi.rowMeta.depth')}`;
  }),

  canSelect: computed('shouldShowCheckbox', 'unwrappedApi.rowSelectionMode', function() {
    let unwrappedApi = this.get('unwrappedApi');
    let rowSelectionMode = unwrappedApi.get('rowSelectionMode');
    let shouldShowCheckbox = this.get('shouldShowCheckbox');

    return (
      shouldShowCheckbox ||
      rowSelectionMode === SELECT_MODE.MULTIPLE ||
      rowSelectionMode === SELECT_MODE.SINGLE
    );
  }),

  shouldShowCheckbox: computed('unwrappedApi.checkboxSelectionMode', function() {
    let unwrappedApi = this.get('unwrappedApi');
    let checkboxSelectionMode = unwrappedApi.get('checkboxSelectionMode');

    return (
      checkboxSelectionMode === SELECT_MODE.MULTIPLE || checkboxSelectionMode === SELECT_MODE.SINGLE
    );
  }),

  actions: {
    onSelectionToggled(event) {
      let unwrappedApi = this.get('unwrappedApi');
      let rowMeta = unwrappedApi.get('rowMeta');
      let checkboxSelectionMode =
        unwrappedApi.get('checkboxSelectionMode') || unwrappedApi.get('rowSelectionMode');

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
      let unwrappedApi = this.get('unwrappedApi');
      let rowMeta = unwrappedApi.get('rowMeta');

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

    let { unwrappedApi } = this;

    let cellValue = unwrappedApi.get('cellValue');
    let cellMeta = unwrappedApi.get('cellMeta');

    let columnValue = unwrappedApi.get('columnValue');
    let columnMeta = unwrappedApi.get('columnMeta');

    let rowValue = unwrappedApi.get('rowValue');
    let rowMeta = unwrappedApi.get('rowMeta');

    Object.assign(values, {
      cellValue,
      cellMeta,

      columnValue,
      columnMeta,

      rowValue,
      rowMeta,
    });

    this.sendAction(action, values);
  },
});
