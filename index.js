'use strict';
const VersionChecker = require('ember-cli-version-checker');
const replace = require('broccoli-string-replace');

module.exports = {
  name: 'ember-table',

  options: {
    nodeAssets: {
      'css-element-queries': {
        srcDir: 'src',
        import: ['ResizeSensor.js'],
      },
      hammerjs: {
        import: ['hammer.js'],
      },
    },
  },

  included() {
    this._super.included.apply(this, arguments);

    this.checker = new VersionChecker(this.project).forEmber();
  },

  isDevelopingAddon() {
    // this prevents templates from being cached before we can strip them out
    // they get cached by jshintAddonTree before we can intervene
    if (this.checker.gte('2.3.0')) {
      return this._super.isDevelopingAddon.apply(this, arguments);
    }

    return false;
  },

  treeForAddon(tree) {
    // strip out contextual components in versions that don't support them
    if (!this.checker.gte('2.3.0')) {
      tree = replace(tree, {
        files: ['**/*.hbs'],
        patterns: [
          {
            match: /\w*=\(component.*?\)/gm,
            replacement: '',
          },
        ],
      });
    }

    return this._super.treeForAddon.apply(this, [tree]);
  },
};
