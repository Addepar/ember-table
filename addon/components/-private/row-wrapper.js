import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, set } from '@ember/object';
import { A as emberA } from '@ember/array';

import { tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';

import { computed } from '@ember-decorators/object';

import { objectAt } from '../../-private/utils/array';
import { dynamicAlias } from '../../-private/utils/computed';

import { guidFor } from '@ember/object/internals';

class CellWrapper extends EmberObject {
  @dynamicAlias('rowValue', 'columnValue.valuePath')
  cellValue;

  @computed('rowValue', 'columnValue')
  get cellMeta() {
    let row = get(this, 'rowValue');
    let rowId = guidFor(row);
    let columnId = guidFor(get(this, 'columnValue'));
    let cellMetaCache = get(this, 'cellMetaCache');

    let cellId = `${rowId}:${columnId}`;

    if (!cellMetaCache.has(cellId)) {
      cellMetaCache.set(cellId, EmberObject.create());
    }

    return cellMetaCache.get(cellId);
  }
}

@tagName('')
export default class RowWrapper extends Component {
  layout = hbs`
    {{yield api}}
  `;

  @argument rowValue;
  @argument columns;

  @argument cellMetaCache;
  @argument columnMetaCache;
  @argument rowMetaCache;

  @argument canSelect;
  @argument rowSelectionMode;
  @argument checkboxSelectionMode;

  _cells = emberA([]);

  destroy() {
    this._cells.forEach(cell => cell.destroy());

    super.destroy(...arguments);
  }

  @computed('rowValue', 'rowMeta', 'cells', 'canSelect', 'rowSelectionMode')
  get api() {
    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');
    let cells = this.get('cells');
    let canSelect = this.get('canSelect');
    let rowSelectionMode = canSelect ? this.get('rowSelectionMode') : 'none';

    return { rowValue, rowMeta, cells, rowSelectionMode };
  }

  @computed('rowValue')
  get rowMeta() {
    let rowValue = this.get('rowValue');
    let rowMetaCache = this.get('rowMetaCache');

    return rowMetaCache.get(rowValue);
  }

  @computed(
    'rowValue',
    'rowMeta',
    'columns.[]',
    'canSelect',
    'checkboxSelectionMode',
    'rowSelectionMode'
  )
  get cells() {
    let cellMetaCache = this.get('cellMetaCache');

    let columns = this.get('columns');
    let numColumns = get(columns, 'length');

    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');
    let canSelect = this.get('canSelect');
    let checkboxSelectionMode = canSelect ? this.get('checkboxSelectionMode') : 'none';
    let rowSelectionMode = canSelect ? this.get('rowSelectionMode') : 'none';

    let { _cells } = this;

    if (numColumns !== _cells.length) {
      while (_cells.length < numColumns) {
        let cell = CellWrapper.create({
          cellMetaCache,
        });

        _cells.pushObject(cell);
      }

      while (_cells.length > numColumns) {
        let cell = _cells.popObject();
        cell.destroy();
      }
    }

    _cells.forEach((cell, i) => {
      let columnValue = objectAt(columns, i);
      let columnMeta = this.get('columnMetaCache').get(columnValue);

      set(cell, 'checkboxSelectionMode', checkboxSelectionMode);
      set(cell, 'rowSelectionMode', rowSelectionMode);

      set(cell, 'columnValue', columnValue);
      set(cell, 'columnMeta', columnMeta);

      set(cell, 'rowValue', rowValue);
      set(cell, 'rowMeta', rowMeta);
    });

    return _cells;
  }
}
