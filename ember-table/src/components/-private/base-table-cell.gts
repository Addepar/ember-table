import Component from '@glimmer/component';
import { action } from '@ember/object';
import type { EmberTableColumn } from '../../index.ts';
import type { ColumnMeta } from '../../-private/types.ts';

const TEXT_ALIGNMENTS = ['left', 'center', 'right'];

interface BaseCellSignature {
  Args: { class?: string };
}

/** Shared behavior of `<EmberTh>` and `<EmberTd>`. */
export default abstract class BaseTableCell<
  Signature extends BaseCellSignature = BaseCellSignature,
> extends Component<Signature> {
  abstract get columnMeta(): ColumnMeta | undefined;
  abstract get columnValue(): EmberTableColumn | undefined;

  get isFirstColumn() {
    return this.columnMeta?.index === 0;
  }

  get isLastColumn() {
    return this.columnMeta?.isLastRendered;
  }

  get isFixedLeft() {
    return this.columnMeta?.isFixed === 'left';
  }

  get isFixedRight() {
    return this.columnMeta?.isFixed === 'right';
  }

  get isSlack() {
    return this.columnMeta?.isSlack;
  }

  get isResizing() {
    return this.columnMeta?.isResizing;
  }

  get cellClass() {
    let classes = [];
    if (this.isFirstColumn) classes.push('is-first-column');
    if (this.isLastColumn) classes.push('is-last-column');
    if (this.isFixedLeft) classes.push('is-fixed-left');
    if (this.isFixedRight) classes.push('is-fixed-right');
    if (this.isSlack) classes.push('is-slack');
    if (this.isResizing) classes.push('is-resizing');
    let alignment = this.columnValue?.textAlign;
    if (alignment && TEXT_ALIGNMENTS.includes(alignment)) {
      classes.push(`ember-table__text-align-${alignment}`);
    }
    if (this.args.class) classes.push(this.args.class);
    return classes.join(' ');
  }

  // Inline styles are applied imperatively because the sticky polyfill also
  // writes inline styles on these cells, which a `style` binding would replace.
  @action
  updateStyles(element: HTMLElement) {
    let columnMeta = this.columnMeta;
    if (!columnMeta) return;
    let width = `${columnMeta.width}px`;
    element.style.width = width;
    element.style.minWidth = width;
    element.style.maxWidth = width;
    element.style.left = this.isFixedLeft ? `${Math.round(columnMeta.offsetLeft)}px` : '';
    element.style.right = this.isFixedRight ? `${Math.round(columnMeta.offsetRight)}px` : '';
    if (this.isSlack) {
      element.style.paddingLeft = '0';
      element.style.paddingRight = '0';
      element.style.display = width === '0px' ? 'none' : 'table-cell';
    }
  }
}
