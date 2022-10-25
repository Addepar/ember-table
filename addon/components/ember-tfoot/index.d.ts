import Component from '@ember/component';
import { WithBoundArgs } from '@glint/template';
import EmberTdComponent from 'ember-table/components/ember-td';
import EmberTrComponent from 'ember-table/components/ember-tr';

export interface EmberTfootSignature {
    Args: {
        tableClasses?: string;
        api: any;
        rows: any[];
    };
    Blocks: {
        default: [
            {
                cells: EmberTdComponent[];
                isHeader: boolean;
                rowsCount: number;
                row: WithBoundArgs<typeof EmberTrComponent, 'api'>;
            }
        ];
    };

    Element: HTMLDivElement;
}

export default class EmberTfootComponent<
    T extends EmberTfootSignature
> extends Component<T> {}
