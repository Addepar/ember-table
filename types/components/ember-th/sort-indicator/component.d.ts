import Component from '@ember/component';
import { TableColumnMeta } from 'ember-table';

export interface SortIndicatorSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: TableColumnMeta;
  };
}

export default class SortIndicatorComponent extends Component<SortIndicatorSignature> {}
