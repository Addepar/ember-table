import Route from '@ember/routing/route';
import { generateAlphabetColumns, generateAlphabetRows } from '../utils/data-generator';

export default class CustomHeader extends Route {
  setupController(controller) {
    const rows = generateAlphabetRows(4, 100);
    rows.forEach((row, index) => row.rowIndex = `Row ${index}`);
    controller.set('rows', rows);

    const groupColumns = [];
    const bodyColumns = generateAlphabetColumns(4);

    groupColumns.push({
      columnName: 'Row indexes',
      valuePath: 'rowIndex',
      width: 200
    });

    groupColumns.push({
      columnName: 'Group 1',
      subcolumns: bodyColumns.slice(0, 2),
      width: 300
    });
    groupColumns.push({
      columnName: 'Group 2',
      subcolumns: bodyColumns.slice(2, 4),
      width: 300
    });

    controller.set('columns', groupColumns);
  }
}
