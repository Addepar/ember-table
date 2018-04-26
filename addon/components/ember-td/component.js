import Component from '@ember/component';
import { htmlSafe } from '@ember/string';
import { get } from '@ember/object';

import { action, computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
import { tagName, attribute, className } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { type } from '@ember-decorators/argument/type';

import layout from './template';

@tagName('td')
export default class EmberTd extends Component {
  layout = layout;

  @argument
  @type('object')
  api;

  @readOnly('api.value') value;
  @readOnly('api.cellValue') cell;
  @readOnly('api.columnValue') column;
  @readOnly('api.rowValue') row;

  @className
  @readOnly('column.meta.isFixed')
  isFixed;

  @attribute
  @computed('column.width')
  get style() {
    let width = this.get('column.width');

    return htmlSafe(`width: ${width}px; min-width: ${width}px; max-width: ${width}px;`);
  }

  @computed('column.meta.index', '')
  get hasCheckbox() {
    return this.get('column.meta.index') === 0 && this.get('api.selectMode') === 'multiple';
  }

  @action
  onCheckboxToggled() {
    let api = this.get('api');
    let rowIndex = this.get('row.meta.index');

    api.selectRow(rowIndex, { toggle: true });

    this.sendAction('onChecked');
  }

  @action
  onCheckboxClicked(event) {
    // Prevent the row from triggering any click events since this means that
    // the checkbox was clicked and we want to toggle via that
    event.stopPropagation();
  }

  click() {
    let rowValue = this.get('row');
    let rowIndex = this.get('row.meta.index');
    let api = this.get('api');

    if (this.get('column.meta.index') === 0 && Array.isArray(get(rowValue, 'children'))) {
      api.toggleRowCollapse(rowIndex);
    }
  }
}
