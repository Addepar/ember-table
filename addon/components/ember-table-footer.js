import EmberTableCell from './ember-table-cell';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-footer';

export default class EmberTableFooter extends EmberTableCell {
  @property layout = layout;
  @property tagName = 'th';
}
