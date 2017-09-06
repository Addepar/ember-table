import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { action, computed } from 'ember-decorators/object';
import { get } from '@ember/object';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-cell';

export default class EmberTableCell extends Component {
  @property layout = layout;
  @property tagName = 'td';
  @property attributeBindings = ['style:style'];
  @property classNameBindings = [':et2-table-cell']

  @computed('columnIndex', 'numFixedColumns')
  get isFixed() {
    const numFixedColumns = this.get('numFixedColumns');
    return this.get('columnIndex') === 0 && Number.isInteger(numFixedColumns)
      && numFixedColumns !== 0;
  }

  @computed('row', 'column.valuePath')
  get value() {
    const row = this.get('row');
    const valuePath = this.get('column.valuePath');

    return get(row, valuePath);
  }

  @computed('column.width')
  get style() {
    return htmlSafe(`width: ${this.get('column.width')}px; min-width: ${this.get('column.width')}px; max-width: ${this.get('column.width')}px;`);
  }

  @computed('isFixed', 'isHovered', 'isSelected')
  get fixedCellClass() {
    if (this.get('isFixed') === false) {
      return '';
    }

    let backgroundClass = 'et2-fixed-table-cell-background';
    if (this.get('isHovered')) {
      backgroundClass = 'et2-table-cell-mouse-over';
    }
    // Selected row takes precedence over mouse over.
    if (this.get('isSelected')) {
      backgroundClass = 'et2-table-cell-selected';
    }
    return `et2-fixed-table-cell ${backgroundClass}`;
  }

  @action
  onCellEvent(args) {
    this.sendAction('onCellEvent', args);
  }
}
