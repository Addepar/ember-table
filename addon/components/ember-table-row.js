import { get, set } from '@ember/object';
import Component from '@ember/component';
import { computed, readOnly } from 'ember-decorators/object';
import { alias } from 'ember-decorators/object/computed';
import { attribute, className, classNames, tagName } from 'ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

import layout from '../templates/components/ember-table-row';
import { A as emberA } from '@ember/array';
import { isNone } from '@ember/utils';

@tagName('tr')
@classNames('et-tr')
export default class EmberTableRow extends Component {
  layout = layout;

  /**
   * Component that for table cell. This outer cell is a <td> component that wraps outside the
   * rendered cell view.
   */
  _outerCellComponent = 'ember-table-cell';
  _cells = null;

  @argument
  @required
  @type('object')
  row;

  @readOnly @alias('row.api.columns') columns;
  @readOnly @alias('row.api.cellProxyClass') cellProxyClass;
  @readOnly @alias('row.api.cellCache') cellCache;
  @readOnly @alias('row.api.numFixedColumns') numFixedColumns;
  @readOnly @alias('row.api.selectedRows') selectedRows;

  @readOnly @alias('row.value') rowValue;
  @readOnly @alias('row.index') rowIndex;

  constructor() {
    super(...arguments);

    this._cells = emberA();
  }

  @computed('columns.[]')
  get cells() {
    let CellProxyClass = this.get('cellProxyClass');

    let _rowComponent = this;
    let _cache = this.get('cellCache');
    let columns = this.get('columns');
    let numColumns = get(columns, 'length');

    let { _cells } = this;

    if (numColumns !== _cells.length) {
      while (_cells.length < numColumns) {
        _cells.push(CellProxyClass.create({ _cache, _rowComponent }));
      }

      while (_cells.length > numColumns) {
        _cells.pop();
      }
    }

    for (let i = 0; i < numColumns; i++) {
      let cell = _cells[i];
      let column = columns.objectAt !== undefined ? columns.objectAt(i) : columns[i];

      set(cell, 'column', column);
      set(cell, 'columnIndex', i);
      set(cell, 'row', this.get('row'));
      set(cell, 'targetTable', this.get('row.api.targetObject'));
    }

    return _cells;
  }

  @className
  @computed('selectedRows.[]', 'rowValue')
  get isSelected() {
    return this.get('selectedRows').indexOf(this.get('rowValue')) >= 0;
  }

  @attribute
  @computed('row.api.staticRowHeight')
  get style() {
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
