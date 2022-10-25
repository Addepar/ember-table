import Component from '@ember/component';

export interface EmberTableLoadingMoreSignature {
  Element: HTMLDivElement;
  Args: {
    api: any;
    canLoadMore?: boolean;
    center?: boolean;
    isLoading?: boolean;
  };
}

export default class EmberTableLoadingMoreComponent extends Component<EmberTableLoadingMoreSignature> {}
