import Component from '@ember/component';
import { ComponentLike, WithBoundArgs } from '@glint/template';
import EmberTbodyComponent from './ember-tbody';
import EmberTfootComponent from './ember-tfoot';
import EmberTheadComponent from './ember-thead';
import EmberTableLoadingMoreComponent from './ember-table-loading-more';

export type TableMeta<M> = { [P in keyof M]: M[P] };

type HeaderCellComponent = ComponentLike<{
  Args: {
    columnMeta: any;
    columnValue: any;
    tableMeta: any;
  };
  Blocks: {
    default: [];
  };
}>;

type BodyCellComponent = ComponentLike<{
  Args: {
    cellMeta: any;
    cellValue: any;
    columnMeta: any;
    columnValue: any;
    rowMeta: any;
    rowValue: any;
    tableMeta: any;
  };
  Blocks: {
    default: [];
  };
}>;

type FooterCellComponent = BodyCellComponent;

export interface Column {
  [key: string]: unknown;
  cellComponent?: BodyCellComponent;
  footerComponent?: FooterCellComponent;
  footerValuePath?: string;
  headerComponent?: HeaderCellComponent;
  isSortable?: boolean;
  maxWidth?: number;
  minWidth?: number;
  name?: string;
  subcolumns?: Column[];
  textAlign?: string;
  valuePath?: string;
  width?: number;
}

export interface ColumnMeta {
  readonly columnSpan: number;
  readonly index: number;
  readonly isFixed: boolean;
  readonly isLeaf: boolean;
  readonly isMultiSorted: boolean;
  readonly isReorderable: boolean;
  readonly isResizable: boolean;
  readonly isSortable: boolean;
  readonly isSorted: boolean;
  readonly isSortedAsc: boolean;
  readonly offsetLeft: number;
  readonly offsetRight: number;
  readonly rowSpan: number;
  readonly sortIndex: number;
  readonly width: number;
}

export interface TableApi {
  columns: Column[];
  columnTree: any;
  registerColumnTree: (columnTree: any) => void;
  tableId: string;
}
export interface EmberTableSignature {
  Element: HTMLDivElement;
  Args: Record<string, unknown>;
  Blocks: {
    default: [
      {
        api: any;
        body: WithBoundArgs<typeof EmberTbodyComponent, 'api'>;
        foot: WithBoundArgs<typeof EmberTfootComponent, 'api'>;
        head: WithBoundArgs<typeof EmberTheadComponent, 'api'>;
        loadingMore: WithBoundArgs<typeof EmberTableLoadingMoreComponent, 'api'>;
      }
    ];
  };
}

export default class EmberTableComponent<T extends EmberTableSignature> extends Component<T> {
  elementId: string;
  api: TableApi;
}
