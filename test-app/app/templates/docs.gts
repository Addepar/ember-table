import { DocfyOutput, DocfyPreviousAndNextPage } from '@docfy/ember';
import type { NestedPageMetadata } from '@docfy/core/lib/types';
import DocsNav from '../components/docs-nav';

// DocfyOutput yields nested output by default (no `@type`).
const asNested = (output: unknown) => output as NestedPageMetadata;

<template>
  <div class="docs-layout">
    <nav class="docs-nav" aria-label="Documentation">
      <DocfyOutput @scope="docs" as |node|>
        <DocsNav @node={{asNested node}} />
      </DocfyOutput>
    </nav>

    <main class="docs-content">
      {{outlet}}

      <DocfyPreviousAndNextPage @scope="docs" as |previous next|>
        <div class="docs-pagination">
          {{#if previous}}
            <a href={{previous.url}}>← {{previous.title}}</a>
          {{/if}}
          {{#if next}}
            <a href={{next.url}}>{{next.title}} →</a>
          {{/if}}
        </div>
      </DocfyPreviousAndNextPage>
    </main>
  </div>
</template>
