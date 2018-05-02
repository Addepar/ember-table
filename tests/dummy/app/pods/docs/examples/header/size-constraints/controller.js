import Controller from '@ember/controller';

import { computed } from '@ember-decorators/object';
import { generateRows } from '../../../../../utils/generators';

export default class SizeConstraintsController extends Controller {
  @computed
  get rows() {
    return generateRows(100);
  }

  widthConstraint = 'eq-container';
  fillMode = 'equal-column';

  // BEGIN-SNIPPET docs-example-header-size-constraints.js
  @computed
  get columns() {
    return [
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
    ];
  }
  // END-SNIPPET
}
