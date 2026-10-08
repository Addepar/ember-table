---
order: 5
---

# Infinite Scroll

Infinite scroll is a common UI pattern where additional table rows are loaded as the user scrolls toward the bottom of the table. Ember Table does not provide infinite scrolling out of the box, but it has all the parts required to build an infinite scrolling table.

```gjs preview
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { on } from '@ember/modifier';
import { EmberTable } from 'ember-table';

export default class InfiniteScroll extends Component {
  // count of records per "page"
  limit = 20;

  // substitute total count of records from API response meta data
  maxRows = 100;

  // center spinner horizontally in scroll viewport
  @tracked centerSpinner = true;

  @tracked rows = [];
  @tracked isLoading = false;

  columns = [
    { name: 'ID', valuePath: 'id', width: 180 },
    { name: 'A', valuePath: 'a', width: 180 },
    { name: 'B', valuePath: 'b', width: 180 },
    { name: 'C', valuePath: 'c', width: 180 },
  ];

  constructor() {
    super(...arguments);
    this.loadMore();
  }

  get canLoadMore() {
    return this.rows.length < this.maxRows;
  }

  @action toggleCentering() {
    this.centerSpinner = !this.centerSpinner;
  }

  @action async loadMore() {
    // `@lastReached` fires while the table renders, so wait for that render
    // to finish before changing tracked state.
    await Promise.resolve();

    if (this.isDestroying || this.isLoading || !this.canLoadMore) {
      return;
    }

    this.isLoading = true;

    // substitute paginated API request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (this.isDestroying) {
      return;
    }

    let offset = this.rows.length;
    let newRows = Array.from({ length: this.limit }, (_, i) => ({
      id: offset + i + 1,
      a: 'A',
      b: 'B',
      c: 'C',
    }));

    this.rows = [...this.rows, ...newRows];
    this.isLoading = false;
  }

  <template>
    <div class="demo-options">
      <label>
        <input type="checkbox" checked={{this.centerSpinner}} {{on "click" this.toggleCentering}} />
        Enable Centering
      </label>
    </div>

    <div class="demo-container table-fixes">
      <EmberTable as |t|>
        <t.head @columns={{this.columns}} />

        <t.body @rows={{this.rows}} @lastReached={{this.loadMore}} />

        <t.loadingMore
          @isLoading={{this.isLoading}}
          @canLoadMore={{this.canLoadMore}}
          @center={{this.centerSpinner}}
        >
          {{! supply your own spinner here }}
          <img class="spinner" src="/assets/images/spinner.gif" alt="Loading" />
        </t.loadingMore>
      </EmberTable>
    </div>
  </template>
}
```

Ember Table does not provide a built-in spinner. You must specify your own by passing a block to `<t.loadingMore>` like in the example above. `<t.loadingMore>` is the `EmberTableLoadingMore` component (exported from `ember-table`); it accepts `@isLoading`, `@canLoadMore`, and `@center`.
