import EmberTableRow from '../components/ember-table-row';
import { property } from '../utils/class';

export default class CustomRow extends EmberTableRow {
  @property classNames = ['et-tr', 'custom-row'];
}
