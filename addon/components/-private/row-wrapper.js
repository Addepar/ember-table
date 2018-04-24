import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, set } from '@ember/object';
import { A as emberA } from '@ember/array';
import ObjectProxy from '@ember/object/proxy';

import { tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';

import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';

import { metaCacheFor } from '../../-private/meta-cache';
import CellProxy from '../../utils/cell-proxy';

class TableRowMeta extends EmberObject {
  @readOnly('_parents.length') depth;

  @computed('_value', '_selectedRows.[]', '_parents.[]')
  get isSelected() {
    let selectedRows = get(this, '_selectedRows');
    return selectedRows.includes(this.get('_value')) || this.get('_parents').some((row) => selectedRows.includes(row));
  }
}

class TableRowProxy extends ObjectProxy {
  @computed('content')
  get meta() {
    return metaCacheFor(this.get('content'), TableRowMeta);
  }
}

@tagName('')
export default class RowWrapper extends Component {
  layout = hbs`
    {{yield proxy cells}}
  `;

  @argument row;

  @argument rowIndex;

  @argument selectedRows;

  @argument columns;

  _cells = [];
  _proxy = TableRowProxy.create();

  @computed('row', 'selectedRows.[]')
  get proxy() {
    let proxy = this._proxy;

    let { value: rowValue, parents, isCollapsed } = this.get('row');
    let rowIndex = this.get('rowIndex');

    proxy.set('content', rowValue);

    let meta = proxy.get('meta');

    set(meta, '_selectedRows', this.get('selectedRows'));
    set(meta, '_value', rowValue);
    set(meta, '_parents', parents);

    set(meta, 'index', rowIndex);
    set(meta, 'isCollapsed', isCollapsed);

    return proxy;
  }

  @computed('row.value', 'columns.[]')
  get cells() {
    let row = this.get('proxy');
    let columns = this.get('columns');
    let numColumns = get(columns, 'length');

    let { _cells } = this;

    if (numColumns !== _cells.length) {
      while (_cells.length < numColumns) {
        _cells.push(CellProxy.create());
      }

      while (_cells.length > numColumns) {
        _cells.pop();
      }
    }

    return emberA(
      columns.map((column, i) => {
        let valuePath = get(column, 'valuePath');

        let cell = _cells[i];
        set(cell, 'row', row);
        set(cell, 'valuePath', valuePath);

        return {
          value: get(row, valuePath),
          cellValue: cell,
          columnValue: column,
          rowValue: row
        };
      })
    );
  }
}
