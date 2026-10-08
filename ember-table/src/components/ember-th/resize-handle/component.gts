import type { TOC } from '@ember/component/template-only';
import type { TableColumnMeta } from '../../../index.ts';

export interface ResizeHandleSignature {
  Args: {
    /** The meta object of the column, as yielded by `<EmberTh>`. */
    columnMeta: TableColumnMeta;
  };
}

/**
 * The drag handle for resizing a column, for custom `<EmberTh>` blocks. It
 * renders only when the column is resizable.
 */
const ResizeHandle: TOC<ResizeHandleSignature> = <template>
  {{#if @columnMeta.isResizable}}
    <div data-test-resize-handle class="et-header-resize-area"></div>
  {{/if}}
</template>;

export default ResizeHandle;
