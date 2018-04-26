import { classNames } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import Component from '@ember/component';

@classNames('custom-header')
export default class CustomHeader extends Component {
  @argument column;
  @argument columnIndex;
  @argument onHeaderEvent;

  click() {
    this.sendAction('onHeaderEvent', {
      eventName: 'click',
      column: this.get('column'),
    });
  }
}
