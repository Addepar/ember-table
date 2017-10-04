import { classNames } from 'ember-decorators/component';
import Component from '@ember/component';

@classNames('custom-header')
export default class CustomHeader extends Component {
  click() {
    this.sendAction('onHeaderEvent', {
      eventName: 'click',
      column: this.get('column')
    });
  }
}
