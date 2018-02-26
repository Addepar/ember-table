import EmberTableRow from './ember-table-row';
import { readOnly } from '@ember-decorators/object/computed';

export default class TreeTableRow extends EmberTableRow {
  /**
   * @override
   */
  _outerCellComponent = 'tree-table-cell';

  /**
   * @override
   */
  @readOnly('row.value.value') rowValue;
}
