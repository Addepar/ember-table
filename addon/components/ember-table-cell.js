import EmberTableBaseCell from './ember-table-base-cell';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';
import { get } from '@ember/object';

import layout from '../templates/components/ember-table-cell';

export default class EmberTableCell extends EmberTableBaseCell {
  layout = layout;

  /**
   * Whether or not the parent row is selected
   */
  @required
  @argument
  @type('boolean')
  rowSelected;

  /**
   * Action that triggers when the checkbox has been changed
   */
  @required
  @argument
  @type(Action)
  onChecked;

  click() {
    let rowValue = this.get('cell.row.value');
    let rowIndex = this.get('cell.row.index');
    let api = this.get('cell.row.api');

    if (this.get('columnIndex') === 0 && Array.isArray(get(rowValue, 'children'))) {
      api.toggleRowCollapse(rowIndex);
    }
  }
}
