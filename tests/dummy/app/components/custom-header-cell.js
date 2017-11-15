import { classNames } from 'ember-decorators/component';
import Component from '@ember/component';

@classNames('custom-header-cell')
export default class CustomHeaderCell extends Component {
  click() {
    this.sendAction('onHeaderEvent', {
      eventName: 'click',
      column: this.get('column')
    });
  }
}
