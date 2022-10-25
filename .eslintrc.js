module.exports = {
  extends: ['@addepar', '@addepar/eslint-config/ember'],
  parser: 'babel-eslint',
  rules: {
    'no-restricted-globals': 'off',

    'ember/closure-actions': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'off',

    'ember-best-practices/require-dependent-keys': 'off',

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
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
};
