import layout from '../templates/components/ember-table';
import EmberTable from './ember-table';
import { action } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';

export default class TreeTable extends EmberTable {
  layout = layout;

  @argument
  @required
  @type('object')
  tree;

  @readOnly('tree') rows;

  @action
  onRowToggled(row) {
    let tree = this.get('tree');

    if (row.collapse) {
      tree.expand(row);
    } else {
      tree.collapse(row);
    }
  }
}
