import EmberTBody from '../ember-tbody/component';
import { A as emberA } from '@ember/array';

import { computed } from '@ember/object';

import layout from './template';

/**
  The table footer component. This component manages any footer rows which may
  be attached to the table, and has the same API as EmberTBody. It does not
  provide occlusion, because the number of footer rows is expected to be
  relatively small.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} />
    <t.body @rows={{rows}} />

    <t.foot @rows={{footerRows}} as |f|>
      <f.row>
    </t.foot>
  </EmberTable>
  ```

  @yield {object} f - the API object yielded by the table footer
  @yield {Component} f.row - The table row component

  @yield {object} f.rowValue - The value for the currently yielded row
  @yield {object} f.rowMeta - The meta for the currently yielded row
*/
export default EmberTBody.extend({
  layout,
  tagName: 'tfoot',

  wrappedRowArray: computed('wrappedRows.[]', function() {
    let wrappedRows = this.get('wrappedRows');
    let wrappedRowsLength = wrappedRows.get('length');

    let arr = [];

    for (let i = 0; i < wrappedRowsLength; i++) {
      arr.push(wrappedRows.objectAt(i));
    }

    return emberA(arr);
  }),
});
