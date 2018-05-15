import Controller from '@ember/controller';

import { computed } from '@ember-decorators/object';
import { generateRows } from '../../../../../utils/generators';

export default class ColumnsController extends Controller {
  @computed
  get rows() {
    return generateRows(100);
  }

  // BEGIN-SNIPPET docs-example-columns.js
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
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-columns-with-components.js
  @computed
  get columnsWithComponents() {
    return [
      { heading: 'A', valuePath: 'A', component: 'custom-header', color: 'text-navy' },
      { heading: 'B', valuePath: 'B', component: 'custom-header', color: 'text-blue' },
      { heading: 'C', valuePath: 'C', component: 'custom-header', color: 'text-aqua' },
      { heading: 'D', valuePath: 'D', component: 'custom-header', color: 'text-teal' },
      { heading: 'E', valuePath: 'E', component: 'custom-header', color: 'text-orange' },
      { heading: 'F', valuePath: 'F', component: 'custom-header', color: 'text-red' },
      { heading: 'G', valuePath: 'G', component: 'custom-header', color: 'text-maroon' },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-columns-with-widths.js
  @computed
  get columnsWithWidths() {
    return [
      { name: 'A', valuePath: 'A', width: 100 },
      { name: 'B', valuePath: 'B', width: 100 },
      { name: 'C', valuePath: 'C', width: 100 },
      { name: 'D', valuePath: 'D', width: 100 },
      { name: 'E', valuePath: 'E', width: 100 },
      { name: 'F', valuePath: 'F', width: 100 },
      { name: 'G', valuePath: 'G', width: 100 },
    ];
  }
  // END-SNIPPET

  // BEGIN-SNIPPET docs-example-column-resize-reorder.js
  resizeEnabled = false;
  reorderEnabled = false;
  resizeModeFluid = false;
  // END-SNIPPET
}
