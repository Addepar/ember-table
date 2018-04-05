import EmberTableCell from './ember-table-cell';

export default class TreeTableCell extends EmberTableCell {
  click() {
    let rowValue = this.get('cell.row.value');
    let rowIndex = this.get('cell.row.index');
    let api = this.get('cell.row.api');

    if (this.get('columnIndex') === 0 && Array.isArray(rowValue.get('children'))) {
      api.toggleRowCollapse(rowIndex);
    }
  }
}
