import globals from 'globals';
import js from '@eslint/js';
import ember from 'eslint-plugin-ember/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';
import qunit from 'eslint-plugin-qunit';
import n from 'eslint-plugin-n';
import babelParser from '@babel/eslint-parser';
import ts from 'typescript-eslint';

// Parse standalone: the app's babel config is async and build-oriented.
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
  { ignores: ['dist/', 'tmp/', 'node_modules/', 'app/templates/docs/'] },
  {
    // Test fixtures deliberately exercise the classic APIs ember-table supports.
    rules: {
      'ember/no-get': 'off',
      'ember/no-classic-classes': 'off',
      'ember/no-classic-components': 'off',
      'ember/require-tagless-components': 'off',
      'ember/no-runloop': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: { parser: babelParser, parserOptions },
  },
  {
    files: ['**/*.gjs'],
    languageOptions: { parserOptions },
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
    },
  },
  {
    files: ['**/*.gts'],
    rules: {
      // ember-eslint-parser reports variables read only by a <template> as
      // "only used as a type"; type-checking catches unused locals instead.
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['tests/**/*.gts'],
    rules: {
      // Strict-mode templates cannot see the test context's `this`, so tests
      // bind it to a local (`const ctx = this`) for their templates.
      '@typescript-eslint/no-this-alias': 'off',
    },
  },
  {
    files: ['tests/**/*.{ts,gts}'],
    rules: {
      // Page objects build their properties at runtime and the test context
      // holds whatever a test sets on it, so both are `any`.
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      // ember.configs.gts turns this back on; see the rules for all files.
      'ember/no-runloop': 'off',
    },
  },
  {
    files: ['**/*.{js,gjs,ts,gts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser },
    },
  },
  {
    ...qunit.configs.recommended,
    files: ['tests/**/*-test.{js,gjs,ts,gts}'],
    plugins: { qunit },
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
