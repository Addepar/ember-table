import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { get } from '@ember/object';

import { action, computed } from '@ember-decorators/object';
import { tagName, attribute, className } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { type, optional } from '@ember-decorators/argument/type';

@tagName('td')
export default class EmberTableCell extends Component {
  @argument
  @type('any')
  rowValue;

  @argument
  @type(optional('number'))
  rowIndex;

  @argument
  @type('object')
  column;

  @argument
  @type(optional('number'))
  columnIndex;

  @argument
  @type(optional('number'))
  numFixedColumns = 0;

  @argument
  @type(optional('object'))
  cell;

  @className
  @computed('columnIndex', 'numFixedColumns')
  get isFixed() {
    let numFixedColumns = this.get('numFixedColumns');
    return this.get('columnIndex') === 0
      && Number.isInteger(numFixedColumns)
      && numFixedColumns !== 0;
  }

  @computed('row', 'column.valuePath')
  get value() {
    let row = this.get('row');
    let valuePath = this.get('column.valuePath');

    return get(row, valuePath);
  }

  @attribute
  @computed('column.width')
  get style() {
    let width = this.get('column.width');

    return htmlSafe(`width: ${width}px; min-width: ${width}px;`);
  }

  @computed('column.width', 'cellHeight')
  get fixedCellStyle() {
    let width = this.get('column.width');
    let height = this.get('cellHeight');

    return htmlSafe(`width: ${width}px; min-width: ${width}px; height: ${height}px;`);
  }

  @action
  onCellEvent(args) {
    this.sendAction('onCellEvent', args);
  }

  @action
  onChecked() {
    this.sendAction('onChecked');
  }

  @action
  onCheckboxClicked(event) {
    // Prevent the row from triggering any click events since this means that
    // the checkbox was clicked and we want to toggle via that
    event.stopPropagation();
  }
}
