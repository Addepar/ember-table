import hbs from 'htmlbars-inline-precompile';
import { A as emberA } from '@ember/array';
import EmberObject from '@ember/object';

export function generateRows(rowCount, columnCount) {
  const arr = emberA();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < rowCount; i++) {
    const row = EmberObject.create({
      'id': `Row ${i}`
    });
    for (let j = 0; j < columnCount - 1; j++) {
      row.set(alphabet[j % 26], alphabet[j % 26]);
    }
    arr.pushObject(row);
  }

  return arr;
}

export function generateColumns(columnCount) {
  const arr = emberA();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const columnWidth = 180;

  arr.pushObject(EmberObject.create({
    columnName: 'Column id',
    valuePath: 'id',
    isFixedColumn: true,
    width: columnWidth
  }));

  for (let j = 0; j < columnCount - 1; j++) {
    arr.pushObject(EmberObject.create({
      columnName: `Col ${alphabet[j % 26]}`,
      valuePath: alphabet[j % 26],
      width: columnWidth
    }));
  }

  return arr;
}

export const simpleTable = hbs`
  <div style="height: 500px;">
    {{#ember-table-2
      columns=tableColumns
      rows=tableRows
      as |cell|
    }}
      {{cell.value}}
    {{/ember-table-2}}
  </div>
`;

// Table with fixed column, column resizing, column grouping enabled
export const fullTable = hbs`
  <div style="height: 500px;">
    {{#ember-table-2
      enableColumnResize=true
      enableColumnReorder=true
      hasFixedColumn=true
      columns=tableColumns
      rows=tableRows
      as |cell|
    }}
      {{cell.value}}
    {{/ember-table-2}}
  </div>
`;
