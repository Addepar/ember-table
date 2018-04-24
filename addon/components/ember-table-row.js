import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
import { className, classNames, tagName } from '@ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

import layout from '../templates/components/ember-table-row';

@tagName('tr')
@classNames('et-tr')
export default class EmberTableRow extends Component {
  layout = layout;

  /**
   * Component that for table cell. This outer cell is a <td> component that wraps outside the
   * rendered cell view.
   */
  _outerCellComponent = 'ember-table-cell';

  @argument
  @required
  @type('object')
  row;

  @readOnly('row.rowValue') rowValue;
  @readOnly('row.rowValue.meta.index') rowIndex;

  @className
  @readOnly('row.rowValue.meta.isSelected')
  isSelected;

  @readOnly('row.api') api;

  @readOnly('row.cells') cells;
  @readOnly('api.numFixedColumns') numFixedColumns;

  constructor() {
    super(...arguments);
  }

  click(event) {
    let api = this.get('api');
    let rowIndex = this.get('rowIndex');
    let rowValue = this.get('rowValue');

    api.selectRow(rowIndex, {
      toggle: event.ctrlKey || event.metaKey,
      range: event.shiftKey
    });

    this.sendAction('onClick', event, rowIndex, rowValue);
  }

  doubleClick(event) {
    this.sendAction('onDoubleClick', event, this.get('rowIndex'), this.get('rowValue'));
  }

  @action
  toggleRowSelection() {
    let api = this.get('api');
    let rowIndex = this.get('rowIndex');

    api.selectRow(rowIndex, { toggle: true });
  }
}
