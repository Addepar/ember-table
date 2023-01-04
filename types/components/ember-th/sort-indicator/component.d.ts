import Component from '@ember/component';

export interface SortIndicatorSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: unknown;
  };
}

export default class SortIndicatorComponent extends Component<SortIndicatorSignature> {}
