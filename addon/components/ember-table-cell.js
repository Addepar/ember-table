import EmberTableBaseCell from './ember-table-base-cell';

import { className } from '@ember-decorators/component';
import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import layout from '../templates/components/ember-table-cell';

export default class EmberTableCell extends EmberTableBaseCell {
  layout = layout;

  @className('', 'et-td') isFixed;

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

}
