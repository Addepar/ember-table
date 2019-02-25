import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, set } from '@ember/object';
import { A as emberA } from '@ember/array';

import { tagName } from '@ember-decorators/component';
import { defaultTo } from '../../-private/default-to';

import { computed } from '@ember-decorators/object';

import { objectAt } from '../../-private/utils/array';
import { dynamicAlias } from '../../-private/utils/computed';

class CellWrapper extends EmberObject {
  @dynamicAlias('rowValue', 'columnValue.valuePath')
  cellValue;

  @computed('rowMeta', 'columnValue')
  get cellMeta() {
    let rowMeta = get(this, 'rowMeta');
    let columnValue = get(this, 'columnValue');

    if (!rowMeta._cellMetaCache.has(columnValue)) {
      rowMeta._cellMetaCache.set(columnValue, EmberObject.create());
    }

    return rowMeta._cellMetaCache.get(columnValue);
  }
}

const layout = hbs`{{yield api}}`;

@tagName('')
export default class RowWrapper extends Component {
//   @defaultTo
//   rowValue;

//   @defaultTo
//   columns;

//   @defaultTo
//   columnMetaCache;

//   @defaultTo
//   rowMetaCache;

//   @defaultTo
//   canSelect;

//   @defaultTo
//   rowSelectionMode;

//   @defaultTo
//   checkboxSelectionMode;

  init() {
	super.init(...arguments);
	console.log(layout)

    this.layout = layout;
    this._cells = emberA([]);
  }

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
        _cells.pushObject(CellWrapper.create());
      }

      while (_cells.length > numColumns) {
        _cells.popObject().destroy();
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
