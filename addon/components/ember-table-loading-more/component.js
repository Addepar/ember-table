/* global ResizeSensor */
import Component from '@ember/component';
import { or, readOnly } from '@ember/object/computed';
import { next, schedule, scheduleOnce } from '@ember/runloop';

/**
  Renders a custom loading indicator beneath the table body. Can be used to
  implement an infinite scroll pattern. Provides optional centering to keep the
  user-provided block centered horizontally in the scroll viewport.

  ```hbs
  <EmberTable as |t|>
    <t.head @columns={{this.columns}} />
    <t.body @rows={{this.rows}} />

    <t.loadingMore
      @isLoading={{this.isLoadingMore}}
      @canLoadMore={{this.canLoadMore}}
      @center={{true}}>

      {{!-- custom spinner --}}
      <img class="spinner" src="spinner.gif"/>
    </t.loadingMore>
  </EmberTable>
  ```

  @class {{ember-table-loading-more}}
  @public
*/
export default Component.extend({
  classNames: ['ember-table-loading-more'],

  'data-test-ember-table-loading-more': true,

  unwrappedApi: or('api.api', 'api'),
  scrollElement: readOnly('unwrappedApi.columnTree.container'),

  /**
   * Boolean flag specifying if additional rows are being loaded. If true,
   * indicator block will be visible below the table body.
   *
   * @argument isLoading
   * @type boolean
   */
  isLoading: false,

  /**
   * Boolean flag specifying if there are more rows yet to load. If false, the
   * indicator block will be removed from the DOM.
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

  init() {
    this._super(...arguments);
    this._updateTransform = () => scheduleOnce('afterRender', this, 'updateTransform');
  },

  didReceiveAttrs() {
    this._super(...arguments);

    // no observers here, no sir.
    let canLoadMore = this.get('canLoadMore');
    if (canLoadMore !== this._canLoadMore) {
      scheduleOnce('afterRender', this, 'canLoadMoreChanged');
      this._canLoadMore = canLoadMore;
    }

    let isLoading = this.get('isLoading');
    if (isLoading !== this._isLoading) {
      scheduleOnce('afterRender', this, 'isLoadingChanged');
      this._isLoading = isLoading;
    }

    let center = this.get('center');
    if (center !== this._center) {
      scheduleOnce('afterRender', this, 'centerChanged');
      this._center = center;
    }
  },

  didInsertElement() {
    this._super(...arguments);

    this.canLoadMoreChanged();
    this.isLoadingChanged();
    this.centerChanged();
  },

  canLoadMoreChanged() {
    if (!this.element) {
      return;
    }

    if (this.get('canLoadMore')) {
      this.element.style.display = '';
    } else {
      // Delay removal to minimize impact on scroll position. Usually any new
      // rows have been rendered by now, but sometimes they are not, and
      // removing this element from the DOM will cause a small scrollback.
      next(() => schedule('afterRender', () => (this.element.style.display = 'none')));
    }
  },

  isLoadingChanged() {
    if (!this.element) {
      return;
    }

    this.element.style.visibility = this.get('isLoading') ? '' : 'hidden';
  },

  centerChanged() {
    let scrollElement = this.get('scrollElement');
    if (!scrollElement) {
      return;
    }

    if (this.get('center')) {
      scrollElement.addEventListener('scroll', this._updateTransform);
      this._scrollElementResizeSensor = new ResizeSensor(scrollElement, this._updateTransform);
    } else {
      this.get('scrollElement').removeEventListener('scroll', this._updateTransform);
      this._scrollElementResizeSensor.detach();
    }

    this.updateTransform();
  },

  updateTransform() {
    let scrollElement = this.get('scrollElement');
    if (!scrollElement || !this.element || this.isDestroying) {
      return;
    }

    let leftOffset = Math.round(
      scrollElement.scrollLeft + (scrollElement.clientWidth - this.element.clientWidth) / 2
    );
    this.element.style.transform = this.get('center') ? `translateX(${leftOffset}px)` : '';
  },
});
