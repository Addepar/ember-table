import type { TOC } from '@ember/component/template-only';
import type { TableColumnMeta } from '../../../index.ts';

export interface SortIndicatorSignature {
  Args: {
    /** The meta object of the column, as yielded by `<EmberTh>`. */
    columnMeta: TableColumnMeta;
  };
  Blocks: {
    /** Replaces the default indicator; receives the column's meta object. */
    default: [columnMeta: TableColumnMeta];
  };
}

/**
 * The sort direction indicator of a header cell, for custom `<EmberTh>`
 * blocks. It renders only while the column is sorted.
 */
const SortIndicator: TOC<SortIndicatorSignature> = <template>
  {{#if @columnMeta.isSorted}}
    <span
      data-test-sort-indicator
      class="et-sort-indicator {{if @columnMeta.isSortedAsc 'is-ascending' 'is-descending'}}"
    >
      {{#if (has-block)}}
        {{yield @columnMeta}}
      {{else if @columnMeta.isMultiSorted}}
        {{@columnMeta.sortIndex}}
      {{/if}}
    </span>
  {{/if}}

  {{#if @columnMeta.isSortable}}
    <button type="button" data-test-sort-toggle class="et-sort-toggle et-speech-only">
      Toggle Sort
    </button>
  {{/if}}
</template>;

export default SortIndicator;
