import Component from '@ember/component';
import layout from './template';

import { readOnly } from '@ember/object/computed';

/**
  The table header cell sort indicator component. This component renders the state of the sort on the column (ascending/descending/none).

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} as |h|>
      <h.row as |r|>
        <r.cell as |columnValue columnMeta|>
          {{columnValue.name}}

          <EmberTh::SortIndicator @columnMeta={{columnMeta}} />
        </r.cell>
      </h.row>
    </t.head>

    <t.body @rows={{this.rows}} />
  </EmberTable>
  ```
  @yield {object} columnMeta - The meta object associated with this column
  @class <EmberTh::SortIndicator />
*/

export default Component.extend({
  layout,
  tagName: '',

  /**
    The API object passed in by the table header cell
    @argument columnMeta
    @required
    @type object
  */
  columnMeta: null,

  isSortable: readOnly('columnMeta.isSortable'),

  isSorted: readOnly('columnMeta.isSorted'),

  isSortedAsc: readOnly('columnMeta.isSortedAsc'),

  isMultiSorted: readOnly('columnMeta.isMultiSorted'),

  sortIndex: readOnly('columnMeta.sortIndex'),
});
