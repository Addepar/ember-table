import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

import EmberObject, { get, setProperties, computed } from '@ember/object';
import { A as emberA } from '@ember/array';

import { objectAt } from '../../-private/utils/array';
import { dynamicAlias } from '../../-private/utils/computed';

const CellWrapper = EmberObject.extend({
  cellValue: dynamicAlias('rowValue', 'columnValue.valuePath'),

  cellMeta: computed('rowMeta', 'columnValue', function() {
    let rowMeta = get(this, 'rowMeta');
    let columnValue = get(this, 'columnValue');

    if (!rowMeta._cellMetaCache.has(columnValue)) {
      rowMeta._cellMetaCache.set(columnValue, EmberObject.create());
    }

    return rowMeta._cellMetaCache.get(columnValue);
  }),
});

const layout = hbs`{{yield api}}`;

export default Component.extend({
  layout,
  tagName: '',

  canSelect: undefined,
  checkboxSelectionMode: undefined,
  columnMetaCache: undefined,
  columns: undefined,
  rowMetaCache: undefined,
  rowSelectionMode: undefined,
  rowValue: undefined,

  init() {
    this._super(...arguments);

    this._cells = emberA([]);
  },

  destroy() {
    this._cells.forEach(cell => cell.destroy());

    this._super(...arguments);
  },

  api: computed('rowValue', 'rowMeta', 'cells', 'canSelect', 'rowSelectionMode', function() {
    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');
    let cells = this.get('cells');
    let canSelect = this.get('canSelect');
    let rowSelectionMode = canSelect ? this.get('rowSelectionMode') : 'none';

    return { rowValue, rowMeta, cells, rowSelectionMode };
  }),

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
        });
      });

      return _cells;
    }
  ),
});
