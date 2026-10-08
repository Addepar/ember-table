import { pageTitle } from 'ember-page-title';
import { LinkTo } from '@ember/routing';

<template>
  {{pageTitle "Ember Table"}}

  <header class="docs-header">
    <LinkTo @route="docs.index" class="docs-header__title">Ember Table</LinkTo>
    <nav class="docs-header__links" aria-label="Site">
      <LinkTo @route="docs.index">Docs</LinkTo>
      <a href="https://github.com/Addepar/ember-table">GitHub</a>
    </nav>
  </header>

  {{outlet}}
</template>
