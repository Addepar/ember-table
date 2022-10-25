import Component from '@ember/component';

export interface ResizeHandleSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: any;
  };
}

type ResizeHandleArgs = ResizeHandleSignature['Args'];
export default interface ResizeHandleComponent extends ResizeHandleArgs {}

export default class ResizeHandleComponent extends Component<ResizeHandleSignature> {}
