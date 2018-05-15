import Controller from '@ember/controller';

import { computed } from '@ember-decorators/object';
import { generateRows } from '../../../../../utils/generators';

export default class SimpleController extends Controller {
  @computed
  get rows() {
    return generateRows(100);
  }

  @computed
  get columns() {
    return [
      { name: 'A', valuePath: 'A' },
      { name: 'B', valuePath: 'B' },
      { name: 'C', valuePath: 'C' },
      { name: 'D', valuePath: 'D' },
      { name: 'E', valuePath: 'E' },
      { name: 'F', valuePath: 'F' },
      { name: 'G', valuePath: 'G' },
    ];
  }

  resizeCount = 0;
  reorderCount = 0;
}
