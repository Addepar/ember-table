import { classNames } from 'ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import Component from '@ember/component';

@classNames('custom-footer')
export default class CustomFooter extends Component {
  @argument column;
  @argument columnIndex;
  @argument rowValue;
  @argument rowIndex;
  @argument onFooterEvent;

  click() {
    this.sendAction('onFooterEvent', {
      eventName: 'click',
      column: this.get('column')
    });
  }
}
