import layout from '../templates/components/ember-table-2';
import EmberTable2 from './ember-table-2';
import { property } from '../utils/class';
import { action } from 'ember-decorators/object';
import { readOnly } from '@ember/object/computed';

export default class TreeTable extends EmberTable2 {
  @property layout = layout;

  @property rows = readOnly('tree');

  @action
  onRowToggled(row) {
    const { tree } = this;

    if (row.collapse) {
      tree.expand(row);
    } else {
      tree.collapseNode(row);
    }
  }
}
