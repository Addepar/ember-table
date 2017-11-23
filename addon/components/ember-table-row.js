import { get } from '@ember/object';
import Component from '@ember/component';
import { computed } from 'ember-decorators/object';
import { classNames } from 'ember-decorators/component';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-row';
import { A as emberA } from '@ember/array';
import { readOnly } from '@ember/object/computed';
import { isNone } from '@ember/utils';

@classNames('et-tr')
export default class EmberTableRow extends Component {
  @property layout = layout;
  @property tagName = 'tr';

  @property _cells = null;
  @property classNameBindings = ['isSelected'];
  @property attributeBindings = ['style:style'];

  /**
   * Component that for table cell. This outer cell is a <td> component that wraps outside the
   * rendered cell view.
   */
  @property _outerCellComponent = 'ember-table-cell';
  @property _cells = null;

  @property selected = false;

  @property columns = readOnly('row.api.columns');
  @property cellProxyClass = readOnly('row.api.cellProxyClass');
  @property cellCache = readOnly('row.api.cellCache');
  @property numFixedColumns = readOnly('row.api.numFixedColumns');
  @property selectedRows = readOnly('row.api.selectedRows');

  @property rowValue = readOnly('row.value');
  @property rowIndex = readOnly('row.index');

  init() {
    super.init(...arguments);
    this._cells = emberA();
  }

  @computed('columns.[]')
  cells() {
    let _rowComponent = this;
    let _cache = this.get('cellCache');
    let columns = this.get('columns');
    let numColumns = get(columns, 'length');

    let { _cells } = this;

    if (numColumns !== _cells.length) {
      while (_cells.length < numColumns) {
        _cells.push(this.get('cellProxyClass').create({ _cache, _rowComponent }));
      }

      while (_cells.length > numColumns) {
        _cells.pop();
      }
    }

    for (let i = 0; i < numColumns; i++) {
      let cell = _cells[i];
      let column = columns.objectAt !== undefined ? columns.objectAt(i) : columns[i];

      cell.set('column', column);
      cell.set('columnIndex', i);
      cell.set('row', this.get('row'));
      cell.set('targetTable', this.get('row.api.targetObject'));
    }

    return _cells;
  }

  @computed('selectedRows.[]', 'rowValue')
  get isSelected() {
    return this.get('selectedRows').indexOf(this.get('rowValue')) >= 0;
  }

  @computed('row.api.staticRowHeight')
  style() {
    let staticRowHeight = this.get('row.api.staticRowHeight');
    if (!isNone(staticRowHeight)) {
      return `height: ${staticRowHeight}px;`;
    }
    return '';
  }

  click(event) {
    let tableObject = this.get('row.api.targetObject');
    tableObject.send('onRowClicked', event, this.get('rowIndex'));

    this.sendAction('onClick', event, this.get('rowIndex'), this.get('rowValue'));
  }

  doubleClick(event) {
    this.sendAction('onDoubleClick', event, this.get('rowIndex'), this.get('rowValue'));
  }
}
