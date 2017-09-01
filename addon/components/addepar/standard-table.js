import EmberTable from '../ember-table-2';
import { action } from 'ember-decorators/object';

export default class StandardTable extends EmberTable {
  didInsertElement() {
    super.didInsertElement(...arguments);

    this.element.classList.add('standard-table');
  }

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

    this.sendCellEvent(eventObj);
  }
}
