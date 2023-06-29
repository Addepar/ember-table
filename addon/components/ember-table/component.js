import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import {
  setupTableStickyPolyfill,
  teardownTableStickyPolyfill,
} from '../../-private/sticky/table-sticky-polyfill';

import layout from './template';

/**
  The primary Ember Table component. This component represents the root of the
  table, and manages high level state of all of its subcomponents. It does not
  have any arguments or actions itself - instead, all of those concerns are
  delegated to its children, who communicate to each other via the API.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} />
    <t.body @rows={{this.rows}} />
    <t.foot @rows={{this.footerRows}} />
  </EmberTable>
  ```

  @yield {object} table - the API object yielded by the table
  @yield {Component} table.head - The table header component
  @yield {Component} table.body - The table body component
  @yield {Component} table.foot - The table footer component
  @class <EmberTable />
  @public
*/
export default Component.extend({
  layout,
  classNames: ['ember-table'],
  attributeBindings: ['dataTestEmberTable:data-test-ember-table'],
  dataTestEmberTable: true,

  didInsertElement() {
    this._super(...arguments);

    let thead = this.element.querySelector('thead');
    let tfoot = this.element.querySelector('tfoot');

    if (thead) {
      setupTableStickyPolyfill(thead);
    }
    if (tfoot) {
      setupTableStickyPolyfill(tfoot);
    }
  },

  willDestroyElement() {
    let thead = this.element.querySelector('thead');
    let tfoot = this.element.querySelector('tfoot');

    if (thead) {
      teardownTableStickyPolyfill(this.element.querySelector('thead'));
    }

    if (tfoot) {
      teardownTableStickyPolyfill(this.element.querySelector('tfoot'));
    }

    this._super(...arguments);
  },

  tableStyle: computed('tableWidth', function() {
    return htmlSafe(`width: ${this.get('tableWidth')}px;`);
  }),

  api: computed(function() {
    return {
      columns: null,
      registerColumnTree: this.registerColumnTree.bind(this),
      tableId: `${this.elementId}-overflow`,
    };
  }),

  registerColumnTree(columnTree) {
    this.set('api.columnTree', columnTree);
  },
});
