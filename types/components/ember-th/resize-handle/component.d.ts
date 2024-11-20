import Component from '@ember/component';
import { TableColumnMeta } from 'ember-table';

export interface ResizeHandleSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: TableColumnMeta;
  };
}

export default class ResizeHandleComponent extends Component<ResizeHandleSignature> {}
