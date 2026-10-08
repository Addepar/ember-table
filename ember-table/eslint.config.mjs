import globals from 'globals';
import js from '@eslint/js';
import ember from 'eslint-plugin-ember/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';
import n from 'eslint-plugin-n';
import babelParser from '@babel/eslint-parser';
import ts from 'typescript-eslint';

// Linting parses source on its own: the build's babel config contains async
// plugins that @babel/eslint-parser cannot load.
const parserOptions = {
  requireConfigFile: false,
  babelOptions: {
    configFile: false,
    babelrc: false,
    plugins: [['@babel/plugin-proposal-decorators', { version: 'legacy' }]],
  },
};

export default ts.config(
  js.configs.recommended,
  eslintConfigPrettier,
  ember.configs.base,
  ember.configs.gjs,
  { ignores: ['dist/', 'declarations/', 'node_modules/'] },
  {
    // The column and collapse trees are intentionally classic EmberObject models.
    rules: {
      'ember/no-get': 'off',
      'ember/no-classic-classes': 'off',
      'ember/no-runloop': 'off',
      'ember/require-computed-property-dependencies': 'off',
      'ember/no-at-ember-render-modifiers': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelParser,
      parserOptions,
    },
  },
  {
    files: ['**/*.gjs'],
    languageOptions: {
      parserOptions,
    },
  },
  {
    files: ['**/*.{ts,gts}'],
    languageOptions: {
      parser: ember.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [...ts.configs.recommendedTypeChecked, ember.configs.gts],
    rules: {
      // House style declares bindings with `let`.
      'prefer-const': 'off',
      // Rows may rely on `unknownProperty` and columns may be EmberObjects.
      'ember/no-get': 'off',
      // `@cached` getters populate per-row caches.
      'ember/no-side-effects': 'off',
      // Inputs of the classic models are `readOnly` aliases in `extend()` calls.
      'ember/no-computed-properties-in-native-classes': 'off',
      // `@action` binds methods that are passed as callbacks.
      '@typescript-eslint/unbound-method': 'off',
      // Kept deliberately; see the base rules above.
      'ember/no-at-ember-render-modifiers': 'off',
      'ember/no-runloop': 'off',
    },
  },
  {
    // The column and collapse trees are classic EmberObject models: computed
    // properties with dependent keys, observers, `init`/`destroy` hooks and
    // `get`/`set`.
    files: ['src/-private/column-tree.ts', 'src/-private/collapse-tree.ts'],
    rules: {
      'ember/classic-decorator-hooks': 'off',
      'ember/classic-decorator-no-classic-methods': 'off',
      'ember/require-computed-property-dependencies': 'off',
    },
  },
  {
    // Page objects get their properties from runtime definitions
    // (ember-cli-page-object), so they are typed `any`.
    files: ['src/test-support/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
  },
  {
    files: ['**/*.{js,gjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },
  {
    files: ['**/*.gjs'],
    rules: {
      'ember/no-computed-properties-in-native-classes': 'off',
      'ember/no-side-effects': 'off',
    },
  },
  {
    ...n.configs['flat/recommended-script'],
    files: ['**/*.cjs'],
    plugins: { n },
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 'latest',
      globals: { ...globals.node },
    },
  },
  {
    ...n.configs['flat/recommended-module'],
    files: ['**/*.mjs'],
    plugins: { n },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: { ...globals.node },
    },
    rules: { 'n/no-unpublished-import': 'off' },
  },
);
