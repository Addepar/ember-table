import Component from '@ember/component';

export interface ResizeHandleSignature {
  Element: HTMLTableCellElement;
  Args: {
    columnMeta: unknown;
  };
}

export default class ResizeHandleComponent extends Component<ResizeHandleSignature> {}
