import { property } from '../utils/class';
import { get } from '@ember/object';
import EmberTableCell from './ember-table-cell';
import { computed } from 'ember-decorators/object';

export default class TreeTableCell extends EmberTableCell {
  click() {
    const rowNode = this.get('cell.row.value');
    if (this.get('columnIndex') === 0) {
      get(this, 'cell.targetTable').send('onRowToggled', rowNode);
    }
  }
}
