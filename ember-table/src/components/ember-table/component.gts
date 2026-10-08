import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { hash } from '@ember/helper';
import { didInsert, didUpdate, willDestroy } from '@ember/render-modifiers';
import type { WithBoundArgs } from '@glint/template';
import {
  setupTableStickyPolyfill,
  teardownTableStickyPolyfill,
} from '../../-private/sticky/table-sticky-polyfill.ts';
import ScrollIndicators, {
  ScrollIndicatorTracker,
} from '../-private/scroll-indicators/component.gts';
import EmberThead from '../ember-thead/component.gts';
import EmberTbody from '../ember-tbody/component.gts';
import EmberTfoot from '../ember-tfoot/component.gts';
import EmberTableLoadingMore from '../ember-table-loading-more/component.gts';
import TableApi from '../../-private/table-api.ts';
import type { EmberTableColumn, EmberTableRow } from '../../index.ts';
import '../../styles/addon.css';

export interface EmberTableSignature<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> {
  Element: HTMLDivElement;
  Args: {
    /** Classes to add to the element, alongside its own. */
    class?: string;
  };
  Blocks: {
    default: [
      {
        /** The table API. Pass it as `@api` when invoking the section components directly. */
        api: TableApi;
        /** `<EmberThead>` with `@api` set. */
        head: WithBoundArgs<typeof EmberThead<RowType, ColumnType>, 'api'>;
        /** `<EmberTbody>` with `@api` set. */
        body: WithBoundArgs<typeof EmberTbody<RowType, ColumnType>, 'api'>;
        /** `<EmberTfoot>` with `@api` set. */
        foot: WithBoundArgs<typeof EmberTfoot<RowType, ColumnType>, 'api'>;
        /** `<EmberTableLoadingMore>` with `@api` set. */
        loadingMore: WithBoundArgs<typeof EmberTableLoadingMore, 'api'>;
      },
    ];
  };
}

/**
 * The table. It renders a scrollable container with a `<table>` and yields the
 * section components: `head` for the header, `body` for the rows, `foot` for
 * footer rows and `loadingMore` for an infinite-scroll indicator.
 *
 * ```gjs
 * <EmberTable as |t|>
 *   <t.head @columns={{columns}} />
 *   <t.body @rows={{rows}} />
 * </EmberTable>
 * ```
 *
 * Pass a row type to type the rows and the values yielded for them:
 * `EmberTable<Person>`.
 */
export default class EmberTable<
  RowType extends EmberTableRow = EmberTableRow,
  ColumnType extends EmberTableColumn = EmberTableColumn,
> extends Component<EmberTableSignature<RowType, ColumnType>> {
  tableId = `${guidFor(this)}-overflow`;
  api = new TableApi(this.tableId);
  scrollIndicators = new ScrollIndicatorTracker(this.api);

  // The section components' generic parameters describe the table's rows and
  // columns to consumers; this is the one place the yielded hash is asserted.
  asTableYield = (value: object) =>
    value as EmberTableSignature<RowType, ColumnType>['Blocks']['default'][0];

  @action
  setup(element: HTMLElement) {
    for (let section of [element.querySelector('thead'), element.querySelector('tfoot')]) {
      if (section) {
        setupTableStickyPolyfill(section);
      }
    }
  }

  @action
  teardown(element: HTMLElement) {
    for (let section of [element.querySelector('thead'), element.querySelector('tfoot')]) {
      if (section) {
        teardownTableStickyPolyfill(section);
      }
    }
  }

  <template>
    <div
      ...attributes
      class="ember-table {{@class}}"
      data-test-ember-table
      {{didInsert this.setup}}
      {{willDestroy this.teardown}}
    >
      <div
        data-test-ember-table-overflow
        class="ember-table-overflow"
        id={{this.tableId}}
        {{didInsert this.scrollIndicators.attach}}
        {{didUpdate this.scrollIndicators.sync this.api.scrollIndicators}}
        {{willDestroy this.scrollIndicators.detach}}
      >
        <table>
          {{yield
            (this.asTableYield
              (hash
                api=this.api
                head=(component EmberThead api=this.api)
                body=(component EmberTbody api=this.api)
                foot=(component EmberTfoot api=this.api)
                loadingMore=(component EmberTableLoadingMore api=this.api)
              )
            )
          }}
        </table>
      </div>
      <ScrollIndicators @api={{this.api}} @tracker={{this.scrollIndicators}} />
    </div>
  </template>
}
