import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';
import { className, classNames, tagName } from '@ember-decorators/component';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import { closest } from '../../-private/utils/element';

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

  @computed('api.api')
  get unwrappedApi() {
    return this.get('api.api') || this.get('api');
  }

  @readOnly('unwrappedApi.rowValue') rowValue;
  @readOnly('unwrappedApi.rowMeta') rowMeta;
  @readOnly('unwrappedApi.cells') cells;

  @className
  @readOnly('rowMeta.isSelected')
  isSelected;

  click(event) {
    let inputParent = closest(event.target, 'input, button, label, a, select');

    if (!inputParent) {
      let rowMeta = this.get('rowMeta');

      if (rowMeta) {
        let toggle = event.ctrlKey || event.metaKey;
        let range = event.shiftKey;

        rowMeta.select({ toggle, range });
      }
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
