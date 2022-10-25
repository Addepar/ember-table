import Component from '@ember/component';

export interface SortIndicatorSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: any;
  };
}

export default class SortIndicatorComponent extends Component<SortIndicatorSignature> {}
