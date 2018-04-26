import Component from '@ember/component';
import { htmlSafe } from '@ember/string';

import { computed } from '@ember-decorators/object';
import { classNames } from '@ember-decorators/component';
import { service } from '@ember-decorators/service';

import {
  setupLegacyStickyPolyfill,
  teardownLegacyStickyPolyfill,
} from '../../-private/sticky/legacy-sticky-polyfill';
import {
  setupTableStickyPolyfill,
  teardownTableStickyPolyfill,
} from '../../-private/sticky/table-sticky-polyfill';

import layout from './template';

@classNames('ember-table')
export default class EmberTable extends Component {
  layout = layout;

  @service userAgent;

  didInsertElement() {
    super.didInsertElement(...arguments);

    let browser = this.get('userAgent.browser');

    if (browser.isIE) {
      setupLegacyStickyPolyfill(this.element);
    } else if (browser.isChrome || browser.isChromeHeadless || browser.isEdge) {
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
    } else if (browser.isChrome || browser.isChromeHeadless || browser.isEdge) {
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
      registerColumns: this.registerColumns,
    };
  }

  registerColumns = columns => {
    this.set('api.columns', columns);
  };
}
