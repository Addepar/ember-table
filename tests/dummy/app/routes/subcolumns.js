import Route from '@ember/routing/route';
import { generateAlphabetColumns, generateAlphabetRows } from '../utils/data-generator';

export default class CustomHeader extends Route {
  setupController(controller) {
    const rows = generateAlphabetRows(10, 100);
    rows.forEach((row, index) => row.rowIndex = `Row ${index}`);
    controller.set('rows', rows);

    const groupColumns = [];
    const bodyColumns = generateAlphabetColumns(10);

    groupColumns.push({
      columnName: 'Row indexes',
      valuePath: 'rowIndex',
      width: 200,
      minWidth: 200
    });

    for (let i = 0; i < 5; i++) {
      groupColumns.push({
        columnName: `Group ${i * 2 + 1}`,
        subcolumns: bodyColumns.slice(i * 2, i * 2 + 2),
        width: 300
      });
    }

    controller.set('columns', groupColumns);
  }
}
