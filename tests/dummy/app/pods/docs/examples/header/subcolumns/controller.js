import Controller from '@ember/controller';
import { A as emberA } from '@ember/array';

import { computed } from '@ember-decorators/object';

import { generateRows, generateColumn } from '../../../../../utils/generators';

const COLUMN_COUNT = 4;

export default class SubcolumnsController extends Controller {
  @computed
  get rows() {
    return generateRows(100);
  }

  // BEGIN-SNIPPET docs-example-subcolumns.js
  @computed
  get simpleColumns() {
    return [
      {
        name: 'A',
        subcolumns: [
          { name: 'A A', valuePath: 'A A' },
          { name: 'A B', valuePath: 'A B' },
          { name: 'A C', valuePath: 'A C' },
        ],
      },
      {
        name: 'B',
        subcolumns: [
          { name: 'B A', valuePath: 'B A' },
          { name: 'B B', valuePath: 'B B' },
          { name: 'B C', valuePath: 'B C' },
        ],
      },
      {
        name: 'C',
        subcolumns: [
          { name: 'C A', valuePath: 'C A' },
          { name: 'C B', valuePath: 'C B' },
          { name: 'C C', valuePath: 'C C' },
        ],
      },
    ];
  }
  // END-SNIPPET

  @computed
  get complexColumns() {
    let columns = emberA();

    for (let i = 0; i < COLUMN_COUNT; i++) {
      let column = generateColumn(i, { subcolumns: [] });

      if (Math.random() > 0.5) {
        for (let j = 0; j < COLUMN_COUNT - 1; j++) {
          let subcolumn = generateColumn([i, j], { subcolumns: [] });

          if (Math.random() > 0.5) {
            for (let k = 0; k < COLUMN_COUNT - 2; k++) {
              subcolumn.subcolumns.push(generateColumn([i, j, k]));
            }
          }

          column.subcolumns.push(subcolumn);
        }
      }

      columns.pushObject(column);
    }

    return columns;
  }
}
