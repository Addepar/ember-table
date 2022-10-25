import Component from '@ember/component';

export interface ResizeHandleSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: any;
  };
}

export default class ResizeHandleComponent extends Component<ResizeHandleSignature> {}
