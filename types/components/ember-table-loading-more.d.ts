import Component from '@ember/component';

export interface EmberTableLoadingMoreSignature {
  Element: HTMLDivElement;
  Args: {
    api: any;
    isLoading?: boolean;
    canLoadMore?: boolean;
    center?: boolean;
  };
}

type EmberTableLoadingMoreArgs = EmberTableLoadingMoreSignature['Args'];
export default interface EmberTableLoadingMoreComponent extends EmberTableLoadingMoreArgs {}

export default class EmberTableLoadingMoreComponent extends Component<EmberTableLoadingMoreSignature> {}
