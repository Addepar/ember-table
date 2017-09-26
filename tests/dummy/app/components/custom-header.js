import Component from '@ember/component';

export default class CustomHeader extends Component {
  click() {
    this.sendAction('onHeaderEvent', {
      eventName: 'headerClicked',
      columnIndex: this.get('columnIndex')
    });
  }
}
