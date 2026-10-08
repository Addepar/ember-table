import type { TOC } from '@ember/component/template-only';
import type { NestedPageMetadata } from '@docfy/core/lib/types';
import { DocfyLink } from '@docfy/ember';

interface DocsNavSignature {
  Args: { node: NestedPageMetadata };
}

// Renders Docfy's nested page metadata: a section's own pages, then its
// child sections, recursively.
const DocsNavSection: TOC<DocsNavSignature> = <template>
  <ul class="docs-nav__list">
    {{#each @node.pages as |page|}}
      <li>
        <DocfyLink @to={{page.url}} class="docs-nav__link" @activeClass="is-active">
          {{page.title}}
        </DocfyLink>
      </li>
    {{/each}}
  </ul>

  {{#each @node.children as |child|}}
    <section class="docs-nav__section">
      <h3 class="docs-nav__heading">{{child.label}}</h3>
      <DocsNavSection @node={{child}} />
    </section>
  {{/each}}
</template>;

export default DocsNavSection;
