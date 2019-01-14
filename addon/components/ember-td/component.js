import BaseTableCell from '../-private/base-table-cell';

import { action, computed } from '@ember-decorators/object';
import { alias, reads } from '@ember-decorators/object/computed';
import { tagName } from '@ember-decorators/component';

import layout from './template';
import { defaultTo } from '../../-private/default-to';
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
  /**
    The API object passed in by the table row
  */
  @defaultTo
  api;

  /**
    Action sent when the user clicks this element
  */
  @defaultTo
  onClick;

  /**
    Action sent when the user double clicks this element
  */
  @defaultTo
  onDoubleClick;

  @computed('api') // only watch `api` due to a bug in Ember
  get unwrappedApi() {
    return this.get('api.api') || this.get('api');
  }

  @alias('unwrappedApi.cellValue')
  cellValue;

  @reads('unwrappedApi.cellMeta')
  cellMeta;

  @reads('unwrappedApi.columnValue')
  columnValue;

  @reads('unwrappedApi.columnMeta')
  columnMeta;

  @reads('unwrappedApi.rowValue')
  rowValue;

  @reads('unwrappedApi.rowMeta')
  rowMeta;

  @reads('unwrappedApi.rowSelectionMode')
  rowSelectionMode;

  @reads('unwrappedApi.checkboxSelectionMode')
  checkboxSelectionMode;

  @reads('rowMeta.canCollapse')
  canCollapse;

  init() {
    super.init(...arguments);

    this.layout = layout;
  }

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
