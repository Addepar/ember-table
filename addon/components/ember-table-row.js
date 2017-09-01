import { get } from '@ember/object';
import Component from '@ember/component';
import { action, computed } from 'ember-decorators/object';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-row';

const DEFAULT_FIXED_CELL_BACKGROUND = 'et2-fixed-table-cell-background';

export default class EmberTableRow extends Component {
  @property layout = layout;
  @property tagName = 'tr';
  @property classNames = ['et2-table-row'];
  @property _cells = null;
  @property classNameBindings = ['isHovered:et2-table-cell-mouse-over']

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

  /**
   * Sets background cell color programmatically because for fixed column, the fixed view is
   * positioned absolute above table row and override row color when mouse hovers/ selects row.
   * We have to programatically updates fixed cell background color.
   */
  @computed('isHovered')
  get fixedCellBackgroundClass() {
    if (this.get('isHovered')) {
      return 'et2-table-cell-mouse-over';
    }

    return DEFAULT_FIXED_CELL_BACKGROUND;
  }

  mouseEnter() {
    this.set('isHovered', true);
  }

  mouseLeave() {
    this.set('isHovered', false);
  }

  @action
  onCellEvent(args) {
    this.sendAction('onCellEvent', args);
  }
}
