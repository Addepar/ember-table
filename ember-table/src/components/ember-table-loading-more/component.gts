import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { htmlSafe } from '@ember/template';
import { registerDestructor } from '@ember/destroyable';
import type Owner from '@ember/owner';
import { didInsert, didUpdate } from '@ember/render-modifiers';
import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import type { TableApiArg } from '../../-private/unwrap-api.ts';
import { unwrapApi } from '../../-private/unwrap-api.ts';
import { defaultTo } from '../../-private/utils/default-to.ts';

export interface EmberTableLoadingMoreSignature {
  Element: HTMLDivElement;
  Args: {
    /** @internal Provided by the yielded `loadingMore` component. */
    api?: TableApiArg;
    /**
     * Whether more rows can still load. When `false`, the indicator is removed from the layout.
     * @default true
     */
    canLoadMore?: boolean;
    /**
     * Centers the indicator horizontally in the visible part of the table.
     * @default true
     */
    center?: boolean;
    /** Classes to add to the element, alongside its own. */
    class?: string;
    /**
     * Shows the indicator below the rows while more are loading.
     * @default false
     */
    isLoading?: boolean;
  };
  Blocks: {
    /** The indicator, such as a spinner. Ember Table does not provide one. */
    default: [];
  };
}

/**
 * An indicator shown below the rows while more load, for infinite scrolling.
 * Combine it with `<EmberTbody>`'s `@lastReached` to load the next page.
 */
export default class EmberTableLoadingMore extends Component<EmberTableLoadingMoreSignature> {
  @tracked translateX = 0;
  private element: HTMLElement | null = null;
  private listeningTo: HTMLElement | null = null;
  private resizeSensor: ResizeSensor | null = null;

  constructor(owner: Owner, args: EmberTableLoadingMoreSignature['Args']) {
    super(owner, args);
    registerDestructor(this, () => this.removeListeners());
  }

  get scrollElement() {
    return unwrapApi(this.args.api)?.columnTree?.container ?? null;
  }

  get canLoadMore() {
    return defaultTo(this.args.canLoadMore, true);
  }

  get isLoading() {
    return defaultTo(this.args.isLoading, false);
  }

  get center() {
    return defaultTo(this.args.center, true);
  }

  get style() {
    let values = [
      `display:${this.canLoadMore ? '' : 'none'}`,
      `visibility:${this.isLoading ? '' : 'hidden'}`,
      `transform:${this.translateX ? `translateX(${this.translateX}px)` : ''}`,
    ];
    return htmlSafe(values.join(';'));
  }

  @action
  setup(element: HTMLElement) {
    this.element = element;
    this.sync();
  }

  @action
  sync() {
    let target = this.center ? this.scrollElement : null;
    if (target !== this.listeningTo) {
      this.removeListeners();
      if (target) {
        target.addEventListener('scroll', this.updateTransform);
        this.resizeSensor = new ResizeSensor(target, this.updateTransform);
        this.listeningTo = target;
      }
    }
    this.updateTransform();
  }

  removeListeners() {
    if (!this.listeningTo) return;
    this.listeningTo.removeEventListener('scroll', this.updateTransform);
    this.resizeSensor?.detach();
    this.resizeSensor = null;
    this.listeningTo = null;
  }

  @action
  updateTransform() {
    let scrollElement = this.scrollElement;
    if (!scrollElement || !this.element) return;
    this.translateX = this.center
      ? Math.round(
          scrollElement.scrollLeft + (scrollElement.clientWidth - this.element.clientWidth) / 2
        )
      : 0;
  }

  <template>
    <div
      ...attributes
      class="ember-table-loading-more {{@class}}"
      data-test-ember-table-loading-more
      style={{this.style}}
      {{didInsert this.setup}}
      {{didUpdate this.sync @center @canLoadMore @isLoading}}
    >
      {{yield}}
    </div>
  </template>
}
