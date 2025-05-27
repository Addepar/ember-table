import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { addObserver } from '@ember/object/observers'; // eslint-disable-line no-restricted-imports
import { generateRows } from 'dummy/utils/generators';

const defaultResizeMode = {
  'eq-container': 'fluid',
  'eq-container-slack': 'standard',
  'gte-container': 'standard',
  'gte-container-slack': 'standard',
  'lte-container': 'standard',
};

export default Controller.extend({
  rows: computed(function() {
    return generateRows(100);
  }),

  widthConstraint: 'eq-container',
  fillMode: 'equal-column',
  resizeMode: 'fluid',

  init() {
    this._super(...arguments);

    // eslint-disable-next-line ember/no-observers
    addObserver(this, 'widthConstraint', this.setDefaultResizeMode);
  },

  setDefaultResizeMode() {
    let widthConstraint = this.widthConstraint;
    let resizeMode = defaultResizeMode[widthConstraint];

    if (resizeMode) {
      this.set('resizeMode', resizeMode);
    }
  },

  // BEGIN-SNIPPET docs-example-header-size-constraints.js
  columns: computed(function() {
    return [
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
    ];
  }),
  // END-SNIPPET
});
