import Component from '@ember/component';
import { readOnly } from '@ember-decorators/object/computed';
import { className, classNames, tagName } from '@ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import layout from './template';

@tagName('tr')
@classNames('et-tr')
export default class EmberTableRow extends Component {
  layout = layout;

  @argument
  @required
  @type('object')
  api;

  @argument
  @type(optional(Action))
  onClick;

  @argument
  @type(optional(Action))
  onDoubleClick;

  @readOnly('api.rowValue') rowValue;
  @readOnly('api.rowMeta') rowMeta;
  @readOnly('api.cells') cells;

  @className
  @readOnly('rowMeta.isSelected')
  isSelected;

  click(event) {
    let rowMeta = this.get('rowMeta');

    if (rowMeta) {
      let toggle = event.ctrlKey || event.metaKey;
      let range = event.shiftKey;

      rowMeta.select({ toggle, range });
    }

    this.sendEventAction('onClick', event);
  }

  doubleClick(event) {
    this.sendEventAction('onDoubleClick', event);
  }

  sendEventAction(action, event) {
    let rowValue = this.get('rowValue');
    let rowMeta = this.get('rowMeta');

    this.sendAction(action, {
      event,

      rowValue,
      rowMeta,
    });
  }
}
