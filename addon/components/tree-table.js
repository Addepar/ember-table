import layout from '../templates/components/ember-table';

import EmberTable from './ember-table';
import CollapseTree from '../-private/collapse-tree';

import { computed } from '@ember-decorators/object';
import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

export default class TreeTable extends EmberTable {
  layout = layout;

  /**
   * @override
   */
  _bodyComponent = 'tree-table-body';

  @argument
  @required
  @type('object')
  tree;

  @computed('tree')
  get rows() {
    return new CollapseTree(this.get('tree'));
  }

  @computed('_baseApi')
  get api() {
    let api = this.get('_baseApi');

    api.toggleRowCollapse = this.toggleRowCollapse;

    return api;
  }

  toggleRowCollapse = (index) => {
    let tree = this.get('rows');
    let node = tree.objectAt(index);

    if (node.toggleCollapse) {
      node.toggleCollapse();
    }
  };
}
