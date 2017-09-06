import { action } from 'ember-decorators/object';
import { property } from '../../utils/class';
import layout from '../../templates/components/addepar/standard-table';
import Component from '@ember/component';

// TODO(Billy): rename this to tree table.
export default class StandardTable extends Component {
  @property classNames = ['et2-outer-wrapper', 'standard-table'];
  @property layout = layout;

  /**
   * @override
   */
  @action
  onCellEvent(eventObj) {
    if (eventObj.eventName === '_toggleRow') {
      const tree = this.get('rows');
      const row = tree.getTreeNodeFromRowValue(eventObj.data);

      if (!row.collapse) {
        this.get('rows').collapseNode(row);
      } else {
        this.get('rows').expand(row);
      }
      return;
    }

    this.sendEvent(eventObj);
  }
}
