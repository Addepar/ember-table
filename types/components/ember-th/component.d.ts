import Component from '@ember/component';
import { TableColumnMeta } from 'ember-table';

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
      columnValue: ColumnType,
      columnMeta: TableColumnMeta,
    ];
  };
}

export default class EmberThComponent<ColumnType> extends Component<EmberThSignature<ColumnType>> {}
