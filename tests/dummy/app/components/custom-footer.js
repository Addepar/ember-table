import { classNames } from 'ember-decorators/component';
import Component from '@ember/component';

@classNames('custom-footer')
export default class CustomFooter extends Component {
  click() {
    this.sendAction('onFooterEvent', {
      eventName: 'click',
      column: this.get('column')
    });
  }
}
