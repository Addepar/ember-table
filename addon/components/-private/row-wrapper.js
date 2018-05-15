import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, set } from '@ember/object';
import { A as emberA } from '@ember/array';
import ObjectProxy from '@ember/object/proxy';

import { tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';

import { computed } from '@ember-decorators/object';

import { getOrCreate } from '../../-private/meta-cache';
import CellProxy from '../../utils/cell-proxy';

class TableRowMeta extends EmberObject {}

class TableRowProxy extends ObjectProxy {
  @computed('content')
  get meta() {
    return getOrCreate(this.get('content'), this.get('_cache'), TableRowMeta);
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

  @argument selectRow;

  @argument toggleRowCollapse;

  @argument onSelect;

  @argument selectMode;

  @argument metaCache;

  _cells = [];
  _proxy = TableRowProxy.create({ _cache: this.get('metaCache') });

  @computed('row', 'selectedRows.[]')
  get proxy() {
    let proxy = this._proxy;

    let { value: rowValue, parents, isCollapsed } = this.get('row');
    let rowIndex = this.get('rowIndex');

    proxy.set('content', rowValue);

    let meta = proxy.get('meta');

    let selectedRows = this.get('selectedRows');
    let isSelected =
      selectedRows.includes(rowValue) || parents.some(row => selectedRows.includes(row));

    set(meta, 'depth', parents.length);
    set(meta, 'isSelected', isSelected);

    set(meta, 'index', rowIndex);
    set(meta, 'isCollapsed', isCollapsed);

    return proxy;
  }

  @computed('row.value', 'columns.[]')
  get cells() {
    let row = this.get('proxy');
    let columns = this.get('columns');
    let numColumns = get(columns, 'length');
    let selectRow = this.get('selectRow');
    let toggleRowCollapse = this.get('toggleRowCollapse');
    let selectMode = this.get('onSelect') ? this.get('selectMode') : 'none';

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
          rowValue: row,
          selectMode,
          selectRow,
          toggleRowCollapse,
        };
      })
    );
  }
}
