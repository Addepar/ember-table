import Component from '@ember/component';

export interface ResizeHandleSignature {
    Args: {
        columnMeta: any;
    };

    Element: HTMLTableCellElement;
}

type ResizeHandleArgs = ResizeHandleSignature['Args'];
export default interface ResizeHandleComponent extends ResizeHandleArgs {}

export default class ResizeHandleComponent extends Component<ResizeHandleSignature> {}
