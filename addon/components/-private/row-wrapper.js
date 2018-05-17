import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, set } from '@ember/object';
import { A as emberA } from '@ember/array';

import { tagName } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';

import { computed } from '@ember-decorators/object';

import CellProxy from '../../-private/cell-proxy';
import { objectAt } from '../../-private/utils/array';

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

  destroy() {
    super.destroy(...arguments);

    this._cellMeta.destroy();
  }
}

@tagName('')
export default class RowWrapper extends Component {
  layout = hbs`
    {{yield rowValue rowMeta cells}}
  `;

  @argument rowValue;
  @argument columns;

  @argument cellMetaCache;
  @argument columnMetaCache;
  @argument rowMetaCache;

  _cells = emberA([]);

  destroy() {
    super.destroy(...arguments);

    this._cells.forEach(cell => cell.destroy());
  }

  @computed('rowValue')
  get rowMeta() {
    let rowValue = this.get('rowValue');
    let rowMetaCache = this.get('rowMetaCache');

    return rowMetaCache.get(rowValue);
  }

  @computed('rowValue', 'rowMeta', 'columns.[]')
  get cells() {
    let cellMetaCache = this.get('cellMetaCache');

    let columns = this.get('columns');
    let numColumns = get(columns, 'length');

    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

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

      set(cell, 'columnValue', columnValue);
      set(cell, 'columnMeta', columnMeta);

      set(cell, 'rowValue', rowValue);
      set(cell, 'rowMeta', rowMeta);
    });

    return _cells;
  }
}
