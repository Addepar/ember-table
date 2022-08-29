'use strict';
const VersionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-table',

  options: {
    babel: {
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-numeric-separator',
        '@babel/plugin-proposal-optional-catch-binding',
      ],
    },
  },

  included() {
    this._super.included.apply(this, arguments);

    this.checker = new VersionChecker(this.project);

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
    if (this.checker.for('ember-source').gte('2.3.0')) {
      return this._super.isDevelopingAddon.apply(this, arguments);
    }

    return false;
  },
};
