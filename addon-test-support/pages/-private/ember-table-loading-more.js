import PageObject from 'ember-classy-page-object';
import { findElement } from 'ember-classy-page-object/extend';

/**
 * Page object for "Loading More" component that renders beneath the body.
 */
export default PageObject.extend({
  scope: '[data-test-ember-table-loading-more]',

  /**
   * Returns the pixel value of the `translateX` transform applied to center
   * the indicator in the scroll viewport.
   */
  get translateX() {
    let transform = findElement(this).style.transform;
    let result = transform.match(/translateX\((\d+)px\)/);
    return result ? parseInt(result[1]) : 0;
  },

  /**
   * Returns if the LoadingMore component is occupying space in the layout.
   */
  get isIncludedInLayout() {
    return findElement(this).style.display !== 'none';
  },

  /**
   * Returns if the LoadingMore component and user block is visible.
   */
  get isShown() {
    return findElement(this).style.visibility !== 'hidden';
  },
});
