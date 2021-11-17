import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, setProperties, computed, defineProperty } from '@ember/object';
import { alias } from '@ember/object/computed';
import { A as emberA } from '@ember/array';

import { notifyPropertyChange } from '../../-private/utils/ember';
import { objectAt } from '../../-private/utils/array';
import { observer } from '../../-private/utils/observer';

const CellWrapper = EmberObject.extend({
  /* eslint-disable-next-line ember/no-observers, ember-best-practices/no-observers */
  columnValueValuePathDidChange: observer('columnValue.valuePath', function() {
    let columnValuePath = get(this, 'columnValue.valuePath');
    let cellValue = columnValuePath ? alias(`rowValue.${columnValuePath}`) : null;

    defineProperty(this, 'cellValue', cellValue);
    notifyPropertyChange(this, 'cellValue');
  }),

  cellMeta: computed('rowMeta', 'columnValue', function() {
    let rowMeta = get(this, 'rowMeta');
    let columnValue = get(this, 'columnValue');

    if (!rowMeta._cellMetaCache.has(columnValue)) {
      rowMeta._cellMetaCache.set(columnValue, EmberObject.create());
    }

    return rowMeta._cellMetaCache.get(columnValue);
  }),
});

const layout = hbs`{{yield this.api}}`;

export default Component.extend({
  layout,
  tagName: '',

  canSelect: undefined,
  checkboxSelectionMode: undefined,
  columnMetaCache: undefined,
  columns: undefined,
  rowMetaCache: undefined,
  rowSelectionMode: undefined,
  rowToggleMode: undefined,
  rowValue: undefined,
  rowsCount: undefined,

  init() {
    this._super(...arguments);

    this._cells = emberA([]);
  },

  destroy() {
    this._cells.forEach(cell => cell.destroy());

    this._super(...arguments);
  },

  api: computed(
    'rowValue',
    'rowMeta',
    'cells',
    'canSelect',
    'rowSelectionMode',
    'rowToggleMode',
    'rowsCount',
    function() {
      let rowValue = this.get('rowValue');
      let rowMeta = this.get('rowMeta');
      let cells = this.get('cells');
      let canSelect = this.get('canSelect');
      let rowSelectionMode = canSelect ? this.get('rowSelectionMode') : 'none';
      let rowToggleMode = this.get('rowToggleMode');
      let rowsCount = this.get('rowsCount');

      return { rowValue, rowMeta, cells, rowSelectionMode, rowToggleMode, rowsCount };
    }
  ),

  rowMeta: computed('rowValue', function() {
    let rowValue = this.get('rowValue');
    let rowMetaCache = this.get('rowMetaCache');

    return rowMetaCache.get(rowValue);
  }),

  cells: computed(
    'rowValue',
    'rowMeta',
    'columns.[]',
    'canSelect',
    'checkboxSelectionMode',
    'rowSelectionMode',
    function() {
      let columns = this.get('columns');
      let numColumns = get(columns, 'length');

      let rowValue = this.get('rowValue');
      let rowMeta = this.get('rowMeta');
      let rowsCount = this.get('rowsCount');
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

        // eslint-disable-next-line ember/no-side-effects, ember-best-practices/no-side-effect-cp
        setProperties(cell, {
          checkboxSelectionMode,
          columnMeta,
          columnValue,
          rowMeta,
          rowSelectionMode,
          rowValue,
          rowsCount,
        });
      });

      return _cells;
    }
  ),
});
