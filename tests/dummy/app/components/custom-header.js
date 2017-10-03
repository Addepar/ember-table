import EmberTableHeader from '../components/ember-table-header';
import { property } from '../utils/class';
import { classNames } from 'ember-decorators/component';
import Component from '@ember/component';

export default class CustomHeader extends Component {
  click() {
    this.sendAction('onHeaderEvent', {
      eventName: 'click'
    });
  }
}
