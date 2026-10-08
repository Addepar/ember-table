import path from 'node:path';
import { fileURLToPath } from 'node:url';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import { createHighlighter } from 'shiki';

const root = path.dirname(fileURLToPath(import.meta.url));

// Docfy runs rehype plugins synchronously, so the highlighter (themes and
// grammars) is loaded up front.
const highlighter = await createHighlighter({
  themes: ['github-light'],
  langs: ['glimmer-js', 'glimmer-ts', 'handlebars', 'javascript', 'typescript', 'scss', 'shellscript'],
});

export default {
  sections: {
    guides: { label: 'Guides', order: 1 },
    main: { label: 'Basics', order: 1 },
    header: { label: 'Header', order: 2 },
    body: { label: 'Body', order: 3 },
    testing: { label: 'Testing', order: 2 },
    api: { label: 'API Reference', order: 3 },
  },
  repository: {
    url: 'https://github.com/Addepar/ember-table',
    editBranch: 'master',
  },
  // Highlights code with Shiki. `gjs`/`gts` use the Glimmer grammars, which
  // also highlight the contents of `<template>`. Docfy escapes `{{` after rehype
  // plugins run, so highlighted templates stay safe.
  rehypePlugins: [
    [
      rehypeShikiFromHighlighter,
      highlighter,
      { theme: 'github-light', fallbackLanguage: 'text' },
    ],
  ],
  sources: [
    {
      root: path.join(root, 'docs'),
      pattern: '**/*.md',
      urlPrefix: 'docs',
    },
  ],
};
