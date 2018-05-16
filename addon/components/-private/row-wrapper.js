import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, set } from '@ember/object';
import { A as emberA } from '@ember/array';

import { tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';

import { computed } from '@ember-decorators/object';

import { getOrCreate } from '../../-private/meta-cache';
import CellProxy from '../../-private/cell-proxy';
import { objectAt } from '../../-private/utils/array';

class TableRowMeta extends EmberObject {}

class CellWrapper extends EmberObject {
  _cellMeta = CellProxy.create();

  @computed('rowValue', 'columnValue.valuePath')
  get cellValue() {
    let row = get(this, 'rowValue');
    let valuePath = get(this, 'columnValue.valuePath');

    return get(row, valuePath);
  }

  @computed('rowValue', 'columnValue.valuePath')
  get cellMeta() {
    let { _cellMeta } = this;
    let row = get(this, 'rowValue');
    let valuePath = get(this, 'columnValue.valuePath');
    let cellMetaCache = get(this, 'cellMetaCache');

    set(_cellMeta, 'row', row);
    set(_cellMeta, 'valuePath', valuePath);
    set(_cellMeta, 'cellMetaCache', cellMetaCache);

    return _cellMeta;
  }
}

@tagName('')
export default class RowWrapper extends Component {
  layout = hbs`
    {{yield rowValue rowMeta cells}}
  `;

  @argument rowValue;
  @argument rowParents;
  @argument rowIsCollapsed;
  @argument rowIndex;

  @argument columns;

  @argument selectedRows;
  @argument selectMode;
  @argument onSelect;
  @argument selectRow;
  @argument toggleRowCollapse;

  @argument cellMetaCache;
  @argument columnMetaCache;
  @argument rowMetaCache;

  _cells = emberA([]);

  @computed('rowValue', 'rowParents', 'rowIsCollapsed', 'selectedRows.[]')
  get rowMeta() {
    let rowValue = this.get('rowValue');
    let rowParents = this.get('rowParents');
    let rowIsCollapsed = this.get('rowIsCollapsed');

    let rowMetaCache = this.get('rowMetaCache');
    let rowMeta = getOrCreate(rowValue, rowMetaCache, TableRowMeta);

    let rowIndex = this.get('rowIndex');

    let selectedRows = this.get('selectedRows');
    let isSelected =
      selectedRows.includes(rowValue) || rowParents.some(row => selectedRows.includes(row));

    set(rowMeta, 'depth', rowParents.length);
    set(rowMeta, 'isSelected', isSelected);

    set(rowMeta, 'index', rowIndex);
    set(rowMeta, 'isCollapsed', rowIsCollapsed);

    return rowMeta;
  }

  @computed('rowValue', 'rowMeta', 'columns.[]')
  get cells() {
    let cellMetaCache = this.get('cellMetaCache');
    let selectRow = this.get('selectRow');
    let toggleRowCollapse = this.get('toggleRowCollapse');
    let selectMode = this.get('onSelect') ? this.get('selectMode') : 'none';

    let columns = this.get('columns');
    let numColumns = get(columns, 'length');

    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

    let { _cells } = this;

    if (numColumns !== _cells.length) {
      while (_cells.length < numColumns) {
        let cell = CellWrapper.create({
          cellMetaCache,
          selectMode,
          selectRow,
          toggleRowCollapse,
        });

        _cells.pushObject(cell);
      }

      while (_cells.length > numColumns) {
        _cells.popObject();
      }
    }

    _cells.forEach((cell, i) => {
      let columnValue = objectAt(columns, i);
      let columnMeta = this.get('columnMetaCache').get(columnValue);

      set(cell, 'columnValue', columnValue);
      set(cell, 'columnMeta', columnMeta);

      set(cell, 'rowValue', rowValue);
      set(cell, 'rowMeta', rowMeta);
    });

    return _cells;
  }
}
