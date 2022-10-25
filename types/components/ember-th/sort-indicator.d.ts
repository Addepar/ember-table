import Component from '@ember/component';

export interface SortIndicatorSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: any;
  };
}

type SortIndicatorArgs = SortIndicatorSignature['Args'];
export default interface SortIndicatorComponent extends SortIndicatorArgs {}

export default class SortIndicatorComponent extends Component<SortIndicatorSignature> {}
