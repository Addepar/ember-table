'use strict';
const VersionChecker = require('ember-cli-version-checker');
const replace = require('broccoli-string-replace');

module.exports = {
  name: 'ember-table',

  options: {
    '@ember-decorators/argument': {
      disableValidatedComponent: true,
    },
  },

  included() {
    this._super.included.apply(this, arguments);

    this.checker = new VersionChecker(this.project).forEmber();

    let importOptions;

    // If `ember-cli-fastboot` is being used in the root project, use the
    // fastboot transform when importing
    if (this.project.findAddonByName('ember-cli-fastboot')) {
      importOptions = {
        using: [
          {
            transformation: 'fastbootShim',
          },
        ],
      };
    }

    this.import('node_modules/css-element-queries/src/ResizeSensor.js', importOptions);

    this.import('node_modules/hammerjs/hammer.js', importOptions);
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
