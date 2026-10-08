import type { TOC } from '@ember/component/template-only';
import EmberTr, { type EmberTrSignature } from 'ember-table/components/ember-tr/component';

// A row component with its own class, for tests of custom row components.
const CustomRow: TOC<EmberTrSignature> = <template>
  {{#if (has-block)}}
    <EmberTr
      @api={{@api}}
      @onClick={{@onClick}}
      @onDoubleClick={{@onDoubleClick}}
      @class="custom-row"
      ...attributes
      as |cell|
    >
      {{yield cell}}
    </EmberTr>
  {{else}}
    <EmberTr
      @api={{@api}}
      @onClick={{@onClick}}
      @onDoubleClick={{@onDoubleClick}}
      @class="custom-row"
      ...attributes
    />
  {{/if}}
</template>;

export default CustomRow;
