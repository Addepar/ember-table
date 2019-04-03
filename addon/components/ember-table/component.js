import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

import { argument } from '@ember-decorators/argument';
import { type, optional } from '@ember-decorators/argument/type';
import { computed } from '@ember-decorators/object';
import { attribute, className, classNames } from '@ember-decorators/component';
import { service } from '@ember-decorators/service';

import { WIDTH_CONSTRAINT } from '../../-private/column-tree';
import {
  setupLegacyStickyPolyfill,
  teardownLegacyStickyPolyfill,
} from '../../-private/sticky/legacy-sticky-polyfill';
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
    <t.head @columns={{columns}} />
    <t.body @rows={{rows}} />
    <t.foot @rows={{footerRows}} />
  </EmberTable>
  ```

  @yield {object} t - the API object yielded by the table
  @yield {Component} t.head - The table header component
  @yield {Component} t.body - The table body component
  @yield {Component} t.foot - The table footer component
*/
@classNames('ember-table')
export default class EmberTable extends Component {
  @service
  userAgent;

  @attribute('data-test-ember-table')
  dataTestEmberTable = true;

  /**
    Sets a constraint on the table's size, such that it must be greater than, less
    than, or equal to the size of the containing element.
  */
  @argument({ defaultIfUndefined: true })
  @type(optional('string'))
  widthConstraint = WIDTH_CONSTRAINT.NONE;

  @className('et-eq-container')
  @computed('widthConstraint')
  get isEqContainerWidth() {
    return this.get('widthConstraint') === WIDTH_CONSTRAINT.EQ_CONTAINER;
  }

  init() {
    super.init(...arguments);

    this.layout = layout;
  }

  didInsertElement() {
    super.didInsertElement(...arguments);

    let browser = this.get('userAgent.browser');

    if (browser.isIE) {
      setupLegacyStickyPolyfill(this.element);
    } else {
      let thead = this.element.querySelector('thead');
      let tfoot = this.element.querySelector('tfoot');

      if (thead) {
        setupTableStickyPolyfill(thead);
      }
      if (tfoot) {
        setupTableStickyPolyfill(tfoot);
      }
    }
  }

  willDestroyElement() {
    let browser = this.get('userAgent.browser');

    if (browser.isIE) {
      teardownLegacyStickyPolyfill(this.element);
    } else {
      let thead = this.element.querySelector('thead');
      let tfoot = this.element.querySelector('tfoot');

      if (thead) {
        teardownTableStickyPolyfill(this.element.querySelector('thead'));
      }

      if (tfoot) {
        teardownTableStickyPolyfill(this.element.querySelector('tfoot'));
      }
    }

    super.willDestroyElement(...arguments);
  }

  @computed('tableWidth')
  get tableStyle() {
    return htmlSafe(`width: ${this.get('tableWidth')}px;`);
  }

  @computed
  get api() {
    return {
      columns: null,
      registerColumnTree: this.registerColumnTree,
      tableId: this.elementId,
      widthConstraint: this.get('widthConstraint'),
    };
  }

  registerColumnTree = columnTree => {
    this.set('api.columnTree', columnTree);
  };
}
