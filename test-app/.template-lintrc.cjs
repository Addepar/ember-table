'use strict';

module.exports = {
  extends: 'recommended',
  ignore: ['dist/**', 'tmp/**', 'app/templates/docs/**'],
  rules: {
    // Existing test fixtures deliberately exercise legacy invocation and DOM
    // patterns. Modernizing those examples is separate from converting the
    // shipped component modules to GJS.
    'no-builtin-form-components': false,
    'no-curly-component-invocation': false,
    'no-forbidden-elements': false,
    'no-html-comments': false,
    'no-implicit-this': false,
    'no-inline-styles': false,
    'no-invalid-interactive': false,
    'no-quoteless-attributes': false,
    'no-redundant-fn': false,
    'no-unused-block-params': false,
    'require-button-type': false,
    'require-input-label': false,
    'require-valid-alt-text': false,
    'style-concatenation': false,
  },
};
