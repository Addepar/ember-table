import EmberTableRow from './ember-table-row';

export default class TreeTableRow extends EmberTableRow {
  /**
   * @override
   */
  _outerCellComponent = 'tree-table-cell';

  toggleRowCollapse(index) {
    this.get('api').toggleRowCollapse(index);
  }
}
