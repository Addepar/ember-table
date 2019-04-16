import Component from '@ember/component';
import layout from './template';

import { readOnly } from '@ember/object/computed';

/**
  The table header cell resize handle component. This component renders an area to grab to resize a column.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} as |h|>
      <h.row as |r|>
        <r.cell as |columnValue columnMeta|>
          {{columnValue.name}}

          <EmberTh::ResizeHandle @columnMeta={{columnMeta}} />
        </r.cell>
      </h.row>
    </t.head>

    <t.body @rows={{rows}} />
  </EmberTable>
  ```
*/

export default Component.extend({
  layout,
  tagName: '',

  /**
    The API object passed in by the table header cell
    @argument
    @required
    @type('object')
  */
  columnMeta: null,

  isResizable: readOnly('columnMeta.isResizable'),
});
