/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-table',

  options: {
    nodeAssets: {
      'css-element-queries': {
        srcDir: 'src',
        import: ['ResizeSensor.js']
      },
      'hammerjs': {
        import: ['hammer.js']
      }
    }
  }
};
