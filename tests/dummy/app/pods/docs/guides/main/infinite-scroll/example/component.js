import Component from '@ember/component';
import { computed } from '@ember/object';
import { task, timeout } from 'ember-concurrency';
import { A } from '@ember/array';

export default Component.extend({
  // BEGIN-SNIPPET docs-example-infinite-scroll.js
  // count of records loaded so far
  offset: 0,

  // count of records per "page"
  limit: 20,

  // substitute total count of records from API response meta data
  maxRows: 100,

  // center spinner horizontally in scroll viewport
  centerSpinner: true,

  canLoadMore: computed('offset', 'maxRows', function() {
    return this.get('offset') < this.get('maxRows');
  }),

  columns: computed(function() {
    return [
      { name: 'ID', valuePath: 'id', width: 180 },
      { name: 'A', valuePath: 'a', width: 180 },
      { name: 'B', valuePath: 'b', width: 180 },
      { name: 'C', valuePath: 'c', width: 180 },
    ];
  }),

  rows: computed(function() {
    return A();
  }),

  didInsertElement() {
    this._super(...arguments);
    this.get('loadMore').perform();
  },

  // ember-concurrency task
  loadMore: task(function*() {
    let offset = this.get('offset');
    let limit = this.get('limit');

    if (!this.get('canLoadMore')) {
      return;
    }

    // substitute paginated API request
    yield timeout(1000);

    let newRows = [];
    for (let i = 0; i < limit; i++) {
      newRows.push({ id: offset + i + 1, a: 'A', b: 'B', c: 'C' });
    }

    this.get('rows').pushObjects(newRows);
    this.set('offset', offset + limit);
  }).drop(),

  // END-SNIPPET
});
