import Component from '@ember/component';

import { action } from '@ember-decorators/object';
import { tagName, classNames } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';

import layout from './template';

@tagName('button')
@classNames('et-header-actions')
export default class EmberThDropdown extends Component {
  layout = layout;

  @argument dropdownActions;

  @argument onDropdownAction;

  @action
  sendDropdownAction(close, ...args) {
    this.sendAction('onDropdownAction', ...args);

    close();
  }
}
