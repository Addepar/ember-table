import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import {
  setupTableStickyPolyfill,
  teardownTableStickyPolyfill,
} from '../../-private/sticky/table-sticky-polyfill';

import layout from './template';
import defaultTo from '../../-private/utils/default-to';

/**
  The primary Ember Table component. This component represents the root of the
  table, and manages high level state of all of its subcomponents. It does not
  have any arguments or actions itself - instead, all of those concerns are
  delegated to its children, who communicate to each other via the API.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{columns}} />
    <t.body @rows={{rows}} />
    <t.foot @rows={{footerRows}} />
  </EmberTable>
  ```

  @yield {object} table - the API object yielded by the table
  @yield {Component} table.head - The table header component
  @yield {Component} table.body - The table body component
  @yield {Component} table.foot - The table footer component
  @class {{ember-table}}
  @public
*/
export default Component.extend({
  layout,
  classNames: ['ember-table'],

  'data-test-ember-table': true,

  checkboxComponent: defaultTo('-ember-table-private/simple-checkbox'),
  toggleComponent: defaultTo('-ember-table-private/simple-checkbox'),

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
      checkboxComponent: this.checkboxComponent,
      toggleComponent: this.toggleComponent,
    };
  }),

  registerColumnTree(columnTree) {
    this.set('api.columnTree', columnTree);
  },
});
