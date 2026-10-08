import BaseTableCell from '../-private/base-table-cell.gts';
import { action, get } from '@ember/object';
import { next } from '@ember/runloop';
import { on } from '@ember/modifier';
import { didInsert, didUpdate, willDestroy } from '@ember/render-modifiers';
import { importSync } from '@embroider/macros';
import type Hammer from 'hammerjs';
import type { HammerInput } from 'hammerjs';
import { closest } from '../../-private/utils/element.ts';
import SortIndicator from './sort-indicator/component.gts';
import ResizeHandle from './resize-handle/component.gts';
import type { EmberTableColumn, EmberTableSort, TableColumnMeta } from '../../index.ts';
import type { HeaderCellApi, HeaderRowMeta } from '../../-private/types.ts';

const INACTIVE = 0;
const RESIZING = 1;
const REORDERING = 2;

const HAMMER_EVENTS = ['press', 'panstart', 'panmove', 'panend'];

export interface EmberThSignature<ColumnType extends EmberTableColumn = EmberTableColumn> {
  Element: HTMLTableCellElement;
  Args: {
    /** @internal Provided by the yielded `cell` component, or pass the row's yield. */
    api: HeaderCellApi<ColumnType> | { api: HeaderCellApi<ColumnType> };
    /** Classes to add to the element, alongside its own. */
    class?: string;
    /** Action sent when the user right clicks this element. */
    onContextMenu?: (event: MouseEvent) => void;
    /** Called by subclasses through `sendDropdownAction`. */
    onDropdownAction?: (...args: unknown[]) => void;
  };
  Blocks: {
    /** The column, its meta object and the header row's meta object. */
    default: [columnValue: ColumnType, columnMeta: TableColumnMeta, rowMeta: HeaderRowMeta];
  };
}

/**
 * A header cell. It sorts its column when clicked (if the header has
 * `@onUpdateSorts`), and supports resizing and reordering by dragging. Without a
 * block it renders the column's `name`, a sort indicator and a resize handle.
 */
export default class EmberTh<
  ColumnType extends EmberTableColumn = EmberTableColumn,
> extends BaseTableCell<EmberThSignature<ColumnType>> {
  private columnState = INACTIVE;
  private hammer: Hammer | null = null;
  private originalClientX = 0;
  private originalTargetWasResize = false;

  get api(): HeaderCellApi<ColumnType> {
    let api = this.args.api;
    return 'api' in api ? api.api : api;
  }

  get columnValue() {
    return this.api.columnValue;
  }

  get columnMeta() {
    return this.api.columnMeta;
  }

  get rowMeta() {
    return this.api.rowMeta;
  }

  get sorts() {
    return this.api.sorts ?? [];
  }

  get isSortable() {
    return this.columnMeta.isSortable;
  }

  get isResizable() {
    return this.columnMeta.isResizable;
  }

  get isReorderable() {
    return this.columnMeta.isReorderable;
  }

  get columnSpan() {
    return this.columnMeta.columnSpan;
  }

  get rowSpan() {
    return this.columnMeta.rowSpan;
  }

  @action
  setup(element: HTMLTableCellElement) {
    this.columnMeta.registerElement(element);
    // hammer.js touches `window` when evaluated, so load it only in the browser.
    let { default: HammerClass } = importSync('hammerjs') as { default: typeof Hammer };
    let hammer = new HammerClass(element);
    hammer.add(new HammerClass.Press({ time: 0 }));
    hammer.on('press', this.pressHandler);
    hammer.on('panstart', this.panStartHandler);
    hammer.on('panmove', this.panMoveHandler);
    hammer.on('panend', this.panEndHandler);
    this.hammer = hammer;
    this.updateStyles(element);
  }

  @action
  teardown() {
    if (!this.hammer) return;
    for (let event of HAMMER_EVENTS) this.hammer.off(event);
    this.hammer.destroy();
  }

  @action
  sendDropdownAction(...args: unknown[]) {
    this.args.onDropdownAction?.(...args);
  }

  @action
  click(event: MouseEvent) {
    let input = closest(event.target, 'button:not(.et-sort-toggle), input, label, a, select');
    if (this.columnState === INACTIVE && !input && this.isSortable) {
      this.updateSort({ toggle: event.ctrlKey || event.metaKey });
    }
  }

  @action
  contextMenu(event: MouseEvent) {
    this.args.onContextMenu?.(event);
    event.preventDefault();
    event.stopPropagation();
  }

  @action
  keyUp(event: KeyboardEvent) {
    let input = closest(event.target, 'button:not(.et-sort-toggle), input, label, a, select');
    if (this.columnState === INACTIVE && !input && event.key === 'Enter' && this.isSortable) {
      this.updateSort({ toggle: false });
    }
  }

  updateSort({ toggle }: { toggle: boolean }) {
    let valuePath = this.columnValue.valuePath;
    if (valuePath === undefined) return;
    let existing = this.sorts.find((sort) => get(sort, 'valuePath') === valuePath);
    let updated: EmberTableSort[] = toggle
      ? this.sorts.filter((sort) => get(sort, 'valuePath') !== valuePath)
      : [];
    if (!existing) updated.push({ valuePath, isAscending: false });
    else if (existing.isAscending === false) updated.push({ valuePath, isAscending: true });
    this.api.sendUpdateSort(updated);
  }

  @action
  private pressHandler(event: HammerInput) {
    let pointer = event.pointers[0];
    if (!pointer) return;
    this.originalClientX = pointer.clientX;
    this.originalTargetWasResize = pointer.target.classList.contains('et-header-resize-area');
  }

  @action
  private panStartHandler(event: HammerInput) {
    let clientX = event.pointers[0]?.clientX ?? 0;
    if (this.isResizable && this.originalTargetWasResize) {
      this.columnState = RESIZING;
      this.columnMeta.startResize(this.originalClientX);
    } else if (this.isReorderable) {
      this.columnState = REORDERING;
      this.columnMeta.startReorder(clientX);
    }
  }

  @action
  private panMoveHandler(event: HammerInput) {
    let clientX = event.pointers[0]?.clientX ?? 0;
    if (this.columnState === RESIZING) this.columnMeta.updateResize(clientX);
    else if (this.columnState === REORDERING) this.columnMeta.updateReorder(clientX);
  }

  @action
  private panEndHandler() {
    if (this.columnState === RESIZING) this.columnMeta.endResize();
    else if (this.columnState === REORDERING) this.columnMeta.endReorder();
    // Keep the trailing `click` from sorting the column after a drag.
    next(() => (this.columnState = INACTIVE));
  }

  <template>
    <th
      ...attributes
      colspan={{this.columnSpan}}
      rowspan={{this.rowSpan}}
      class="{{this.cellClass}}
        {{if this.isSortable 'is-sortable'}}
        {{if this.isResizable 'is-resizable'}}
        {{if this.isReorderable 'is-reorderable'}}"
      data-test-ember-table-slack={{if this.isSlack true}}
      {{didInsert this.setup}}
      {{didUpdate
        this.updateStyles
        this.columnMeta.width
        this.columnMeta.offsetLeft
        this.columnMeta.offsetRight
        this.columnMeta.isFixed
      }}
      {{willDestroy this.teardown}}
      {{on "click" this.click}}
      {{on "contextmenu" this.contextMenu}}
      {{on "keyup" this.keyUp}}
    >
      {{#if (has-block)}}
        {{yield this.columnValue this.columnMeta this.rowMeta}}
      {{else}}
        {{this.columnValue.name}}
        <SortIndicator @columnMeta={{this.columnMeta}} />
        <ResizeHandle @columnMeta={{this.columnMeta}} />
      {{/if}}
    </th>
  </template>
}
