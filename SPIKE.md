# Ember 7 / v2 addon modernization spike

This branch moves `ember-table` from its Ember 3.28-era v1 addon to a v2 addon
written in TypeScript, tested and documented in a Vite app.

## Layout

- `ember-table/`: the published v2 addon, entirely TypeScript. Components are
  `.gts` with Glint signatures; declarations are generated from source. The
  `ColumnTree`/`CollapseTree` models are still classic `EmberObject`s
  (computed properties, observers), written as native classes; components see
  them through the interfaces in `src/-private/types.ts`.
- `test-app/`: a Vite app hosting the test suite and the Docfy documentation
  site (`test-app/docs`). It has no ember-cli or compat layer: just the
  `ember()` Vite plugin and `ember-strict-application-resolver`, with every
  module it resolves listed in `app/app.ts`. Tests use strict-mode
  `<template>`s.
- pnpm workspace; CI runs lint, tests, and `@embroider/try` scenarios.

## Verified

- Ember 7.3: 240 browser tests, 238 pass, 2 skipped (pre-existing `skip`s).
  This includes the docs acceptance tests, which were always skipped before
  and now run against the Docfy site.
- Ember 6.4 (oldest the test app runs): 232 pass, 8 skipped. The 6 extra skips are the docs
  tests, gated on Ember 6.5+ because Docfy needs it.
- `pnpm lint` passes in both packages, including `ember-tsc` type-checking.
- The emitted declarations type-check from a consumer `.gts` app, and reject
  rows of the wrong shape.

## Notable decisions

- The peer floor is `ember-source >= 5.12`. The addon uses nothing newer, and
  runs in a 5.12 ember-cli app. CI only covers 6.4 and up: `ember-source` is a
  v2 addon from 6.1, and older versions need the compat layer, which the test
  app no longer has.
- The page objects from the unmaintained `ember-classy-page-object` are
  vendored into `test-support` (MIT), and its helpers are re-exported from
  `ember-table/test-support`.
- Components are exported from the package root for strict-mode apps.

- Components derive state through autotracking. The classic models read their
  inputs from component getters (`readOnly` aliases on `@dependentKeyCompat`
  getters) instead of having arguments pushed in.
- `hammerjs` is loaded with `importSync` when a header is set up, so evaluating
  the addon never touches `window` (FastBoot).
- Try scenarios are applied to both packages so the addon's dev copy of
  `ember-source` matches the app under test; otherwise its modules resolve a
  second Ember.
- The sticky polyfill registers its initial animation frame with
  `@ember/test-waiters`, which removed a flaky test (and the same race in
  consumers' tests).
- `data-test-*` attributes stay in the addon's templates, which ship
  uncompiled, so the consuming app's build strips them. The docs app does this
  with `strip-test-selectors` (the Vite successor to `ember-test-selectors`) in
  production builds: no `data-test-*` remains in the production bundle's
  templates, while the test build keeps all of them. The README shows
  consumers the same setup.

## Follow-ups

- Replace `@ember/render-modifiers` with `ember-modifier` (or local modifiers).
- Move the classic models from computed properties and observers to
  autotracking.
- Link the repository to a Vercel project (config is in `vercel.json`).
