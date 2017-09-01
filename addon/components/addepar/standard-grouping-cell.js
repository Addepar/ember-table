import layout from '../../templates/components/addepar/standard-grouping-cell';
import Component from '@ember/component';
import { property } from '../../utils/class';

export default class StandardGroupingCell extends Component {
  @property layout = layout;

  click() {
    if (this.get('cell.columnIndex') === 0) {
      this.sendAction('onCellEvent', {
        eventName: '_toggleRow',
        data: this.get('cell.row')
      });
    }
  }
}
