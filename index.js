/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-table-2',

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
