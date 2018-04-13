import Component from '@ember/component';

import { tagName } from '@ember-decorators/component';
import { computed } from '@ember-decorators/object';
import { readOnly } from '@ember-decorators/object/computed';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type, optional } from '@ember-decorators/argument/type';
import { Action } from '@ember-decorators/argument/types';

import CollapseTree from '../../-private/collapse-tree';

import layout from './template';

const SELECT_MODE = {
  SINGLE: 'single',
  MULTIPLE: 'multiple'
};

@tagName('tbody')
export default class EmberTBody extends Component {
  layout = layout;

  @argument
  @required
  @type('object')
  api;

  @readOnly('api.columns') columns;

  /**
    Sets which row selection behavior to follow. Possible values are 'none' (clicking on a row
    does nothing), 'single' (clicking on a row selects it and deselects other rows), and 'multiple'
    (multiple rows can be selected through ctrl/cmd-click or shift-click).
  */
  @argument({ defaultIfUndefined: true })
  @type('string')
  selectMode = SELECT_MODE.MULTIPLE;

  /**
    The currently list of currently selected rows
  */
  @argument({ defaultIfUndefined: true })
  @type(Array)
  selectedRows = [];

  /**
    An action that triggers when the row selection of the table changes

    @param {Array} selectedRows - The new set of selected rows
  */
  @argument
  @type(optional(Action))
  onSelect = null;

  /**
    Estimated height for each row. This number is used to decide how many rows will be rendered at
    initial rendering.
  */
  @argument({ defaultIfUndefined: true })
  @type('number')
  estimateRowHeight = 20;

  /**
    A flag that controls if all rows have same static height or not. By default it is set to false
    and row height is dependent on its internal content. If it is set to true, all rows have the
    same height equivalent to estimateRowHeight.
  */
  @argument({ defaultIfUndefined: true })
  @type('boolean')
  staticHeight = false;

  /**
   * The row items that the table should display
   */
  @argument
  @type(optional('object'))
  rows;

  @argument
  @type(optional('object'))
  tree;

  @computed('rows', 'tree')
  get wrappedRows() {
    let rows = this.get('rows') || this.get('tree');

    return CollapseTree.create({ tree: rows ? rows : [] });
  }

  /**
    The index of the last item that was selected, used for range selection
  */
  _lastSelectedIndex = 0;

  selectRow = (rowIndex, { toggle, range }) => {
    let rows = this.get('wrappedRows');
    let row = rows.objectAt(rowIndex).value;
    let selectMode = this.get('selectMode');

    if (selectMode === SELECT_MODE.SINGLE) {
      this.sendAction('onSelect', [row]);
      return;
    }

    let selectedRows;

    if (toggle) {
      // Create a new array to ensure we trigger property changes
      selectedRows = this.get('selectedRows').slice();
      let index = selectedRows.indexOf(row);

      if (index > -1) {
        selectedRows.splice(index, 1);
      } else {
        selectedRows.push(row);
      }
    } else if (range) {
      // Use a set to avoid item duplication
      let rowSet = new Set(this.get('selectedRows'));

      let { _lastSelectedIndex } = this;

      let minIndex = Math.min(_lastSelectedIndex, rowIndex);
      let maxIndex = Math.max(_lastSelectedIndex, rowIndex);

      for (let i = minIndex; i <= maxIndex; i++) {
        rowSet.add(rows.objectAt(i).value);
      }

      selectedRows = Array.from(rowSet);
    } else {
      selectedRows = [row];
    }

    this._lastSelectedIndex = rowIndex;

    this.sendAction('onSelect', selectedRows);
  };

  toggleRowCollapse = (index) => {
    let tree = this.get('wrappedRows');
    let node = tree.objectAt(index);

    if (node.toggleCollapse) {
      node.toggleCollapse();
    }
  };
}
