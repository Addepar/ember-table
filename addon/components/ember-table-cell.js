import EmberTableBaseCell from './ember-table-base-cell';
import { readOnly } from 'ember-decorators/object';
import { alias } from 'ember-decorators/object/computed';
import { className } from 'ember-decorators/component';

import layout from '../templates/components/ember-table-cell';

export default class EmberTableCell extends EmberTableBaseCell {
  layout = layout;

  // We have to alias because the class name changes per base cell type
  @className('', 'et-td')
  @readOnly @alias('isFixed') _isFixed;

}
