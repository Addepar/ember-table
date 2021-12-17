/* global ResizeSensor */
import Component from '@ember/component';
import { computed } from '@ember/object';
import { or, readOnly } from '@ember/object/computed';

/**
  Renders a custom loading indicator beneath the table body. Can be used to
  implement an infinite scroll pattern. Provides optional centering to keep the user-provided block centered horizontally in the scroll viewport.

  ```hbs
  <EmberTableLoadingMore
    @isLoading={{this.isLoading}}
    @canLoadMore={{this.canLoadMore}}
    @center={{true}}>

    {{!-- custom spinner --}}
    <img class="spinner" src="/assets/images/spinner.gif"/>
  </EmberTableLoadingMore>
  ```

  @class {{ember-table-loading-more}}
  @public
*/
export default Component.extend({
  attributeBindings: ['style'],
  classNames: ['ember-table-loading-more'],

  'data-test-ember-table-loading-more': true,

  unwrappedApi: or('api.api', 'api'),
  scrollElement: readOnly('unwrappedApi.columnTree.container'),

  /**
   * Boolean flag specifying if additional rows are being loaded. If true,
   * indicator block will be shown at bottom of table body.
   *
   * @argument isLoading
   * @type boolean
   */
  isLoading: false,

  /**
   * Boolean flag specifying if there are more rows yet to load. If false, the
   * indicator block will be completely removed from the DOM.
   *
   * @argument canLoadMore
   * @type boolean
   */
  canLoadMore: true,

  /**
   * Boolean flag specifying if the indicator block should be centered
   * horizontally in the scroll viewport.
   *
   * @argument center
   * @type boolean
   */
  center: true,

  _leftOffset: 0,

  style: computed('canLoadMore', 'isLoading', 'center', '_leftOffset', function() {
    if (!this.get('canLoadMore')) {
      // remove indicator from DOM so end of table has no extra whitespace
      return 'display: none !important;';
    }

    if (!this.get('isLoading')) {
      // hide indicator but don't remove it; preserves scroll position
      return 'visibility: hidden !important';
    }

    if (this.get('center')) {
      return `transform: translateX(${this.get('_leftOffset')}px);`;
    }
  }),

  init() {
    this._super(...arguments);
    this._recomputeLeftOffset = this.recomputeLeftOffset.bind(this);
  },

  didInsertElement() {
    this._super(...arguments);

    let scrollElement = this.get('scrollElement');
    scrollElement.addEventListener('scroll', this._recomputeLeftOffset);
    this._resizeSensor = new ResizeSensor(scrollElement, this._recomputeLeftOffset);
  },

  willDestroyElement() {
    this.get('scrollElement').removeEventListener('scroll', this._recomputeLeftOffset);
    this._resizeSensor.detach();

    this._super(...arguments);
  },

  /**
   * Horizontally re-centers the spinner with respect to the scrolling viewport.
   * Ensures that no matter how wide the scrollable content of the table is, the
   * spinner will remain centered in the user's view.
   */
  recomputeLeftOffset() {
    let scrollElement = this.get('scrollElement');
    if (!scrollElement || !this.element) {
      return;
    }

    let _leftOffset = Math.round(
      scrollElement.scrollLeft + (scrollElement.clientWidth - this.element.clientWidth) / 2
    );
    this.set('_leftOffset', _leftOffset);
  },
});
