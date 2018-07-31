import BaseTableCell from '../-private/base-table-cell';

import { action, computed } from '@ember-decorators/object';
import { alias, readOnly } from '@ember-decorators/object/computed';
import { tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

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
*/
@tagName('td')
export default class EmberTd extends BaseTableCell {
  layout = layout;

  /**
    The API object passed in by the table row
  */
  @argument
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

  @computed('api.api')
  get unwrappedApi() {
    return this.get('api.api') || this.get('api');
  }

  @alias('unwrappedApi.cellValue')
  cellValue;

  @readOnly('unwrappedApi.cellMeta')
  cellMeta;

  @readOnly('unwrappedApi.columnValue')
  columnValue;

  @readOnly('unwrappedApi.columnMeta')
  columnMeta;

  @readOnly('unwrappedApi.rowValue')
  rowValue;

  @readOnly('unwrappedApi.rowMeta')
  rowMeta;

  @readOnly('unwrappedApi.rowSelectionMode')
  rowSelectionMode;

  @readOnly('unwrappedApi.checkboxSelectionMode')
  checkboxSelectionMode;

  @readOnly('rowMeta.canCollapse')
  canCollapse;

  @computed('rowMeta.depth')
  get depthClass() {
    return `depth-${this.get('rowMeta.depth')}`;
  }

  @computed('shouldShowCheckbox', 'rowSelectionMode')
  get canSelect() {
    let rowSelectionMode = this.get('rowSelectionMode');
    let shouldShowCheckbox = this.get('shouldShowCheckbox');

    return (
      shouldShowCheckbox ||
      rowSelectionMode === SELECT_MODE.MULTIPLE ||
      rowSelectionMode === SELECT_MODE.SINGLE
    );
  }

  @computed('checkboxSelectionMode')
  get shouldShowCheckbox() {
    let checkboxSelectionMode = this.get('checkboxSelectionMode');

    return (
      checkboxSelectionMode === SELECT_MODE.MULTIPLE || checkboxSelectionMode === SELECT_MODE.SINGLE
    );
  }

  @action
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
  }

  @action
  onCollapseToggled() {
    let rowMeta = this.get('rowMeta');

    rowMeta.toggleCollapse();

    this.sendFullAction('onCollapse');
  }

  click(event) {
    this.sendFullAction('onClick', { event });
  }

  doubleClick(event) {
    this.sendFullAction('onDoubleClick', { event });
  }

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

    this.sendAction(action, values);
  }
}
