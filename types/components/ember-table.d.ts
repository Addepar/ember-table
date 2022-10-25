import Component from '@ember/component';
import { ComponentLike, WithBoundArgs } from '@glint/template';
import EmberTbodyComponent from './ember-tbody';
import EmberTfootComponent from './ember-tfoot';
import EmberTheadComponent from './ember-thead';
import EmberTableLoadingMoreComponent from './ember-table-loading-more';

export type TableMeta<M> = { [P in keyof M]: M[P] };

type HeaderCellComponent = ComponentLike<{
  Args: {
    columnValue: any;
    columnMeta: any;
    tableMeta: any;
  };
  Blocks: {
    default: [];
  };
}>;

type BodyCellComponent = ComponentLike<{
  Args: {
    cellValue: any;
    columnValue: any;
    rowValue: any;
    cellMeta: any;
    columnMeta: any;
    rowMeta: any;
    tableMeta: any;
  };
  Blocks: {
    default: [];
  };
}>;

type FooterCellComponent = BodyCellComponent;

export interface Column {
  [key: string]: unknown;
  valuePath?: string;
  name?: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  textAlign?: string;
  isSortable?: boolean;
  EmberTheadComponent?: HeaderCellComponent;
  cellComponent?: BodyCellComponent;
  EmberTfootComponent?: FooterCellComponent;
  subcolumns?: Column[];
  footerValuePath?: string;
}

export interface ColumnMeta {
  readonly isLeaf: boolean;
  readonly isFixed: boolean;
  readonly isReorderable: boolean;
  readonly isResizable: boolean;
  readonly isSortable: boolean;
  readonly offsetLeft: number;
  readonly offsetRight: number;
  readonly width: number;
  readonly columnSpan: number;
  readonly rowSpan: number;
  readonly index: number;
  readonly isMultiSorted: boolean;
  readonly isSorted: boolean;
  readonly isSortedAsc: boolean;
  readonly sortIndex: number;
}

export interface TableApi {
  columns: Column[];
  registerColumnTree: (columnTree: any) => void;
  columnTree: any;
  tableId: string;
}
export interface EmberTableSignature {
  Element: HTMLDivElement;
  Args: Record<string, unknown>;
  Blocks: {
    default: [
      {
        api: any;
        head: WithBoundArgs<typeof EmberTheadComponent, 'api'>;
        body: WithBoundArgs<typeof EmberTbodyComponent, 'api'>;
        foot: WithBoundArgs<typeof EmberTfootComponent, 'api'>;
        loadingMore: WithBoundArgs<typeof EmberTableLoadingMoreComponent, 'api'>;
      }
    ];
  };
}

type EmberTableArgs = EmberTableSignature['Args'];
export default interface EmberTableComponent<T> extends EmberTableArgs {}

export default class EmberTableComponent<T extends EmberTableSignature> extends Component<T> {
  elementId: string;
  api: TableApi;
}
