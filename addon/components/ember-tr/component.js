import Component from '@ember/component';
import { computed } from '@ember/object';
import { readOnly } from '@ember/object/computed';

import { closest } from '../../-private/utils/element';

import layout from './template';
import { SELECT_MODE } from '../../-private/collapse-tree';

/**
  The table row component. This component manages row level concerns, and yields
  an API object that contains the cell component, the cell/column/row values,
  and the cell/column/row meta objects. It is used in both the header and the
  body, mirroring the structure of native HTML tables.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} as |h|>
      <h.row as |r|>
        <r.cell>
      </h.row>
    </t.head>

    <t.body @rows={{this.rows}} as |b|>
      <b.row as |r|>
        <r.cell>
      </b.row>
    </t.body>
  </EmberTable>
  ```

  @yield {object} row - the API object yielded by the table row
  @yield {Component} row.cell - The table cell contextual component

  @yield {any} row.cellValue - The value for the currently yielded cell
  @yield {object} row.cellMeta - The meta for the currently yielded cell

  @yield {object} row.columnValue - The value for the currently yielded column
  @yield {object} row.columnMeta - The meta for the currently yielded column

  @yield {object} row.rowValue - The value for the currently yielded row
  @yield {object} row.rowMeta - The meta for the currently yielded row

  @class <EmberTr />
  @public
*/
export default Component.extend({
  layout,
  tagName: 'tr',
  classNames: ['et-tr'],
  classNameBindings: ['isSelected', 'isGroupSelected', 'isSelectable'],

  /**
    The API object passed in by the table body, header, or footer
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

  rowValue: readOnly('api.rowValue'),

  rowMeta: readOnly('api.rowMeta'),

  cells: readOnly('api.cells'),

  rowSelectionMode: readOnly('api.rowSelectionMode'),

  rowToggleMode: readOnly('api.rowToggleMode'),

  isHeader: readOnly('api.isHeader'),

  isSelected: readOnly('rowMeta.isSelected'),

  isGroupSelected: readOnly('rowMeta.isGroupSelected'),

  isSelectable: computed('rowSelectionMode', function() {
    let rowSelectionMode = this.get('rowSelectionMode');

    return rowSelectionMode === SELECT_MODE.MULTIPLE || rowSelectionMode === SELECT_MODE.SINGLE;
  }),

  click(event) {
    let rowSelectionMode = this.get('rowSelectionMode');
    let inputParent = closest(event.target, 'input, button, label, a, select');

    if (!inputParent) {
      let rowMeta = this.get('rowMeta');

      if (rowMeta && rowSelectionMode === SELECT_MODE.MULTIPLE) {
        let toggle = event.ctrlKey || event.metaKey || this.get('rowToggleMode');
        let range = event.shiftKey;

        rowMeta.select({ toggle, range });
      } else if (rowMeta && rowSelectionMode === SELECT_MODE.SINGLE) {
        rowMeta.select({ single: true });
      }
    }

    this.sendEventAction('onClick', event);
  },

  doubleClick(event) {
    this.sendEventAction('onDoubleClick', event);
  },

  sendEventAction(action, event) {
    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

    let closureAction = this[action];

    closureAction?.({
      event,
      rowValue,
      rowMeta,
    });
  },
});
