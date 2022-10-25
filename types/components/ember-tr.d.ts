import Component from '@ember/component';
import { WithBoundArgs } from '@glint/template';
import { Column, TableApi, TableMeta } from './ember-table';
import EmberTdComponent, { CellMeta } from './ember-td';

export interface RowClickEvent<R, TM> {
    event: MouseEvent;
    rowValue: R;
    rowMeta: RowMeta<R>;
    tableMeta?: TableMeta<TM>;
}

interface RowMetaSelect {
    toggle?: boolean;
    range?: boolean;
    single?: boolean;
}

export interface RowMeta<T> {
    //attributes
    readonly index: number;
    readonly canCollapse: boolean;
    readonly depth: number;
    readonly isCollapsed: boolean;
    readonly isGroupSelected: boolean;
    readonly isSelected: boolean;
    readonly first: T;
    readonly last: T;
    readonly next?: T | null;
    readonly prev?: T | null;

    //methods
    select(arg0: RowMetaSelect): void;
}

interface RowApi extends TableApi {
    cellValue: unknown;
    cellMeta: CellMeta;
    columnValue: Column;
    columnMeta: unknown;
    rowValue: unknown;
    rowMeta: RowMeta<unknown>;
    rowsCount: number;
    cell: WithBoundArgs<typeof EmberTdComponent, 'api'>;
}
export interface EmberTrSignature {
    Args: {
        tableClasses?: string;
        api: RowApi;
        /**
         * An action that is called when a row is clicked. Will be called with the row and the event.
         */
        onClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;

        /**
         * An action that is called when a row is double clicked. Will be called with the row and the event.
         *
         */
        onDoubleClick?: ((rowClickEvent: RowClickEvent<unknown, unknown>) => void) | undefined;
    };
    Blocks: {
        default: [
            {
                api: RowApi;
                cellValue: RowApi['cellValue'];
                cellMeta: RowApi['cellMeta'];
                columnValue: RowApi['columnValue'];
                columnMeta: RowApi['columnMeta'];
                rowValue: RowApi['rowValue'];
                rowMeta: RowApi['rowMeta'];
                rowsCount: RowApi['rowsCount'];
                cell: WithBoundArgs<typeof EmberTdComponent, 'api'>;
            }
        ];
    };
    Element: HTMLTableRowElement;
}

type EmberTrArgs = EmberTrSignature['Args'];
export default interface EmberTrComponent extends EmberTrArgs {}

export default class EmberTrComponent extends Component<EmberTrSignature> {}
