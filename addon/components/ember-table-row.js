import { get } from '@ember/object';
import Component from '@ember/component';
import { computed } from 'ember-decorators/object';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-row';
import EmberTableComponent from './ember-table-2';
import { assert } from "@ember/debug"

export default class EmberTableRow extends Component {
  @property layout = layout;
  @property tagName = 'tr';
  @property classNames = ['et2-table-row'];
  @property _cells = null;
  @property classNameBindings = ['isHovered:et2-table-cell-mouse-over', 'isSelected:et2-table-cell-selected']
  @property selected = false;

  @property _table = false;

  init() {
    super.init(...arguments);
    this._cells = [];

    this._table = this.nearestOfType(EmberTableComponent);

    this.cellProxyClass = this._table.cellProxyClass;
    this.cellCache = this._table.cellCache;
    this.numFixedColumns = this._table.numFixedColumns;
    this.targetObjet = this._table.targetObject;
    this.columns = this._table.columns;
  }

  @computed('columns.[]')
  cells() {
    const _rowComponent = this;
    const _cache = this.get('cellCache');
    const columns = this.get('columns');
    const numColumns = get(columns, 'length');

    const { _cells } = this;

    if (numColumns !== _cells.length) {
      while (_cells.length < numColumns) {
        _cells.push(this.cellProxyClass.create({ _cache, _rowComponent }));
      }

      while (_cells.length > numColumns) {
        _cells.pop();
      }
    }

    for (let i = 0; i < numColumns; i++) {
      const cell = _cells[i];
      const column = columns.objectAt !== undefined ? columns.objectAt(i) : columns[i];

      cell.set('column', column);
      cell.set('columnIndex', i);
    }

    return _cells;
  }

  @computed('_table.selectedRows.[]', 'row')
  get isSelected() {
    return this.get('_table.selectedRows').indexOf(this.get('row')) >= 0;
  }

  click(event) {
    this._table.send('onRowClicked', event, this.get('rowIndex'));
  }

  mouseEnter() {
    this.set('isHovered', true);
  }

  mouseLeave() {
    this.set('isHovered', false);
  }
}
