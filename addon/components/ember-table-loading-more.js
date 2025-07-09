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

  @class <EmberTableLoadingMore />
  @public
*/
export default Component.extend({
  classNames: ['ember-table-loading-more'],

  attributeBindings: ['dataTestEmberTableLoadingMore:data-test-ember-table-loading-more'],
  dataTestEmberTableLoadingMore: true,

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

    // ignore the first run of `didReceiveAttrs` before element exists
    if (!this.element) {
      return;
    }

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

  willDestroyElement() {
    if (this.get('center')) {
      this.removeListeners();
    }
    this._super(...arguments);
  },

  canLoadMoreChanged() {
    if (this.get('canLoadMore')) {
      this.setIncludedInLayout(true);
    } else {
      // Delay removal to minimize impact on scroll position. Usually any new
      // rows have been rendered by now, but sometimes they are not, and
      // removing this element from the DOM will cause a small scrollback.
      next(() => schedule('afterRender', this, 'setIncludedInLayout', false));
    }
  },

  isLoadingChanged() {
    this.setVisible(this.get('isLoading'));
  },

  centerChanged() {
    this.updateTransform();

    if (this.get('center')) {
      this.addListeners();
    } else {
      this.removeListeners();
    }
  },

  addListeners() {
    let scrollElement = this.get('scrollElement');
    scrollElement.addEventListener('scroll', this._updateTransform);
    this._scrollElementResizeSensor = new ResizeSensor(scrollElement, this._updateTransform);
  },

  removeListeners() {
    this.get('scrollElement').removeEventListener('scroll', this._updateTransform);
    if (this._scrollElementResizeSensor) {
      this._scrollElementResizeSensor.detach();
    }
  },

  updateTransform() {
    let scrollElement = this.get('scrollElement');

    // this method can be triggered by the resize sensor before the element
    // (and `scrollElement`) exists
    if (!scrollElement) {
      return;
    }

    let translateX = 0;

    if (this.get('center')) {
      // keep indicator centered in viewport, even if user scrolls left or right
      translateX = Math.round(
        scrollElement.scrollLeft + (scrollElement.clientWidth - this.element.clientWidth) / 2
      );
    }

    this.setTranslateX(translateX);
  },

  setIncludedInLayout(value) {
    this.element.style.display = value ? '' : 'none';
  },

  setVisible(value) {
    this.element.style.visibility = value ? '' : 'hidden';
  },

  setTranslateX(value) {
    this.element.style.transform = value === 0 ? '' : `translateX(${value}px)`;
  },
});
