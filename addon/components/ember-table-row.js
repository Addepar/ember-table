import { get } from '@ember/object';
import Component from '@ember/component';
import { computed } from 'ember-decorators/object';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-row';

export default class EmberTableRow extends Component {
  @property layout = layout;
  @property tagName = 'tr';
  @property classNames = ['et2-table-row'];
  @property _cells = null;

  init() {
    super.init(...arguments);
    this._cells = [];
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
}
