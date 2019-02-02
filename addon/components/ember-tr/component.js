import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
import { className, classNames, tagName } from '@ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

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
    <t.head @columns={{columns}} as |h|>
      <h.row as |r|>
        <r.cell>
      </h.row>
    </t.head>

    <t.body @rows={{rows}} as |b|>
      <b.row as |r|>
        <r.cell>
      </b.row>
    </t.body>
  </EmberTable>
  ```

  @yield {object} r - the API object yielded by the table row
  @yield {Component} r.cell - The table cell contextual component

  @yield {any} r.cellValue - The value for the currently yielded cell
  @yield {object} r.cellMeta - The meta for the currently yielded cell

  @yield {object} r.columnValue - The value for the currently yielded column
  @yield {object} r.columnMeta - The meta for the currently yielded column

  @yield {object} r.rowValue - The value for the currently yielded row
  @yield {object} r.rowMeta - The meta for the currently yielded row
*/
@tagName('tr')
@classNames('et-tr')
export default class EmberTr extends Component {
  /**
    The API object passed in by the table body, header, or footer
  */
  @argument
  @required
  @type('object')
  api;

  /**
    Action sent when the user clicks this element
  */
  @argument
  @type(optional(Action))
  onClick;

  /**
    Action sent when the user double clicks this element
  */
  @argument
  @type(optional(Action))
  onDoubleClick;

  @argument
  @type(optional(Action))
  onContextMenu;

  @readOnly('api.rowValue')
  rowValue;

  @readOnly('api.rowMeta')
  rowMeta;

  @readOnly('api.cells')
  cells;

  @readOnly('api.rowSelectionMode')
  rowSelectionMode;

  @readOnly('api.isHeader')
  isHeader;

  @className
  @readOnly('rowMeta.isSelected')
  isSelected;

  @className
  @readOnly('rowMeta.isGroupSelected')
  isGroupSelected;

  init() {
    super.init(...arguments);

    this.layout = layout;
  }

  @className
  @computed('rowSelectionMode')
  get isSelectable() {
    let rowSelectionMode = this.get('rowSelectionMode');

    return rowSelectionMode === SELECT_MODE.MULTIPLE || rowSelectionMode === SELECT_MODE.SINGLE;
  }

  click(event) {
    let rowSelectionMode = this.get('rowSelectionMode');
    let inputParent = closest(event.target, 'input, button, label, a, select');

    if (!inputParent) {
      let rowMeta = this.get('rowMeta');

      if (rowMeta && rowSelectionMode === SELECT_MODE.MULTIPLE) {
        let toggle = event.ctrlKey || event.metaKey;
        let range = event.shiftKey;

        rowMeta.select({ toggle, range });
      } else if (rowMeta && rowSelectionMode === SELECT_MODE.SINGLE) {
        rowMeta.select({ single: true });
      }
    }

    this.sendEventAction('onClick', event);
  }

  doubleClick(event) {
    this.sendEventAction('onDoubleClick', event);
  }

  contextMenu(event) {
    this.sendEventAction('onContextMenu', event);
  }

  sendEventAction(action, event) {
    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

    this.sendAction(action, {
      event,

      rowValue,
      rowMeta,
    });
  }
}
