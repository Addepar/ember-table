import Component from '@ember/component';

export interface EmberThSignature<ColumnType> {
  Element: HTMLTableCellElement;
  Args: {
    /**
     * Action sent when the user clicks right this element.
     */
    onContextMenu?: ((event: Event) => void);
  };
  Blocks: {
    default: [
      columnMeta: unknown,
      columnValue: ColumnType,
    ];
  };
}

export default class EmberThComponent<ColumnType> extends Component<EmberThSignature<ColumnType>> {}
