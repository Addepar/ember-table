import Component from '@ember/component';
import layout from './template';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';
import { tagName } from '@ember-decorators/component';
import { readOnly } from '@ember-decorators/object/computed';

/**
  The table header cell sort indicator component. This component renders the state of the sort on the column (ascending/descending/none).

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} as |h|>
      <h.row as |r|>
        <r.cell as |columnValue columnMeta|>
          {{columnValue.name}}

          <EmberTh::SortIndicator @columnMeta={{columnMeta}} />
        </r.cell>
      </h.row>
    </t.head>

    <t.body @rows={{rows}} />
  </EmberTable>
  ```
  @yield {object} columnMeta - The meta object associated with this column
*/

@tagName('')
export default class EmberThSortIndicator extends Component {
  layout = layout;

  /**
    The API object passed in by the table header cell
  */
  @argument
  @required
  @type('object')
  columnMeta;

  @readOnly('columnMeta.isSortable')
  isSortable;

  @readOnly('columnMeta.isSorted')
  isSorted;

  @readOnly('columnMeta.isSortedAsc')
  isSortedAsc;

  @readOnly('columnMeta.isMultiSorted')
  isMultiSorted;

  @readOnly('columnMeta.sortIndex')
  sortIndex;
}
