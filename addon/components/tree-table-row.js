import { property } from '../utils/class';
import EmberTableRow from './ember-table-row';
import { readOnly } from '@ember/object/computed';

export default class TreeTableRow extends EmberTableRow {
  /**
   * @override
   */
  @property _outerCellComponent = 'tree-table-cell';

  /**
   * @override
   */
  @property rowValue = readOnly('row.value.value');
}
