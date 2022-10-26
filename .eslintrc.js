module.exports = {
  extends: [
    '@addepar',
    '@addepar/eslint-config/ember'
  ],
  parser: 'babel-eslint',
  rules: {
    'no-prototype-builtins': 'off',
    'no-restricted-globals': 'off',

    'ember/avoid-leaking-state-in-ember-objects': 'off',
    'ember/closure-actions': 'off',
    'ember/no-actions-hash': 'off',
    'ember/no-assignment-of-untracked-properties-used-in-tracking-contexts': 'off',
    'ember/no-classic-classes': 'off',
    'ember/no-classic-components': 'off',
    'ember/no-component-lifecycle-hooks': 'off',
    'ember/no-get': 'off',
    'ember/no-observers': 'off',
    'ember/no-settled-after-test-helper': 'off',
    'ember/no-side-effects': 'off',
    'ember/no-test-import-export': 'off',
    'ember/require-computed-macros': 'off',
    'ember/require-computed-property-dependencies': 'off',
    'ember/require-return-from-computed': 'off',
    'ember/require-super-in-lifecycle-hooks': 'off',
    'ember/require-tagless-components': 'off',

    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@ember/object',
            importNames: ['observer'],
            message: 'For compatibility, use `import { observer } from "-private/utils/observer"`',
          },
          {
            name: '@ember/object/observers',
            importNames: ['addObserver', 'removeObserver'],
            message:
              'For compatibility, use `import { addObserver, removeObserver } from "-private/utils/observer"`',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      // TS Files
      files: ['./**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          legacyDecorators: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      env: {
        browser: true,
      },
    },
  ],
};
