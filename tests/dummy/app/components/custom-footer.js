import Component from '@ember/component';
import { get } from '@ember/object';

import { computed } from '@ember-decorators/object';
import { classNames } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';

@classNames('custom-footer')
export default class CustomFooter extends Component {
  @argument column;
  @argument columnIndex;
  @argument rowValue;
  @argument rowIndex;
  @argument onCustomFooterEvent;

  @computed('column.valuePath', 'rowValue')
  get footerValue() {
    let valuePath = this.get('column.valuePath');
    let rowValue = this.get('rowValue');

    return get(rowValue, valuePath);
  }

  click() {
    this.sendAction('onCustomFooterEvent', {
      eventName: 'click',
      column: this.get('column'),
    });
  }
}
