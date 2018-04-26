import Component from '@ember/component';
import { readOnly } from '@ember-decorators/object/computed';
import { className, classNames, tagName } from '@ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

import layout from './template';

@tagName('tr')
@classNames('et-tr')
export default class EmberTableRow extends Component {
  layout = layout;

  @argument
  @required
  @type('object')
  api;

  @readOnly('api.rowValue') row;
  @readOnly('api.cells') cells;

  @className
  @readOnly('row.meta.isSelected')
  isSelected;

  click(event) {
    let api = this.get('api');
    let row = this.get('row');
    let rowIndex = this.get('row.meta.index');

    if (api && api.selectRow) {
      api.selectRow(rowIndex, {
        toggle: event.ctrlKey || event.metaKey,
        range: event.shiftKey,
      });
    }

    this.sendAction('onClick', event, rowIndex, row);
  }

  doubleClick(event) {
    this.sendAction('onDoubleClick', event, this.get('rowIndex'), this.get('rowValue'));
  }
}
