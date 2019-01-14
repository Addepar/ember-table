module.exports = {
  extends: ['@addepar', '@addepar/eslint-config/ember'],
  parser: 'babel-eslint',
  env: {
    es6: true,
  },
  rules: {
    'no-restricted-globals': 'off',

    'ember/closure-actions': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'off',

    'ember-best-practices/require-dependent-keys': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      // To disable errors about decorators before export
      legacyDecorators: true,
    },
  },
};
