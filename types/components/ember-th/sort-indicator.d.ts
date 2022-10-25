import Component from '@ember/component';

export interface SortIndicatorSignature {
    Args: {
        columnMeta: any;
    };

    Element: HTMLTableCellElement;
}

type SortIndicatorArgs = SortIndicatorSignature['Args'];
export default interface SortIndicatorComponent extends SortIndicatorArgs {}

export default class SortIndicatorComponent extends Component<SortIndicatorSignature> {}
