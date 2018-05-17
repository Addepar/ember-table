import Controller from '@ember/controller';
import { computed } from '@ember-decorators/object';

export default class SimpleController extends Controller {
  // BEGIN-SNIPPET docs-example-row-selection.js
  @computed
  get columns() {
    return [
      { name: 'A', valuePath: 'A', width: 180 },
      { name: 'B', valuePath: 'B', width: 180 },
      { name: 'C', valuePath: 'C', width: 180 },
      { name: 'D', valuePath: 'D', width: 180 },
    ];
  }

  @computed
  get rows() {
    return [
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
      { A: 'A', B: 'B', C: 'C', D: 'D' },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-selected-rows.js
  constructor() {
    super(...arguments);

    let [rowWithChildren] = this.get('rowWithChildren');

    this.preselectedRows = [rowWithChildren];
  }

  @computed
  get rowWithChildren() {
    return [
      {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',

        children: [
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
        ],
      },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-selection-modes.js
  @computed
  get rowsWithChildren() {
    return [
      {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',

        children: [
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
        ],
      },
      {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',

        children: [
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
        ],
      },
      {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D',

        children: [
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
          { A: 'A', B: 'B', C: 'C', D: 'D' },
        ],
      },
    ];
  }
  // END-SNIPPET
}
