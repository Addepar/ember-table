import Component from '@ember/component';
import layout from './template';

import { argument } from '@ember-decorators/argument';
import { required } from '@ember-decorators/argument/validation';
import { type } from '@ember-decorators/argument/type';
import { tagName } from '@ember-decorators/component';
import { readOnly } from '@ember-decorators/object/computed';

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

@tagName('')
export default class EmberThResizeHandle extends Component {
  layout = layout;

  /**
    The API object passed in by the table header cell
  */
  @argument
  @required
  @type('object')
  columnMeta;

  @readOnly('columnMeta.isResizable')
  isResizable;
}
