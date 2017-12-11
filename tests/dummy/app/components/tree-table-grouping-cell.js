import { property } from '../utils/class';
import { computed } from 'ember-decorators/object';
import { htmlSafe } from '@ember/string';
import Component from '@ember/component';
import layout from '../templates/components/tree-table-grouping-cell';

export default class TreeTableGroupingCell extends Component {
  @property layout = layout;
  @property attributeBindings = ['style:style'];

  @computed('cell.row.value')
  get style() {
    let rowNode = this.get('cell.row.value');
    return htmlSafe(`padding-left: ${rowNode.depth * 20}px;`);
  }
}
