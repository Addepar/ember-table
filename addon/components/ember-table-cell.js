import EmberTableBaseCell from './ember-table-base-cell';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-cell';

export default class EmberTableCell extends EmberTableBaseCell {
  @property layout = layout;
  @property classNameBindings = ['isFixed::et-td'];
}
