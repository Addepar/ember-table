/* eslint-env node */
module.exports = {
  scenarios: [
    {
      name: 'ember-1.11',
      bower: {
        dependencies: {
          ember: '~1.11.0',
          'ember-cli-shims': 'ember-cli/ember-cli-shims#0.0.3',
          'ember-data': '~1.13.0',
        },
        resolutions: {
          ember: '~1.11.0',
          'ember-cli-shims': '0.0.3',
          'ember-data': '~1.13.0',
        },
      },
      npm: {
        devDependencies: {
          'ember-cli-shims': null,
          'ember-cli-fastboot': null,
          'ember-data': '~1.13.0',
          'ember-source': null,
          fastboot: null,
          'ember-cli-addon-docs': null,
        },
      },
    },
    {
      name: 'ember-1.13',
      bower: {
        dependencies: {
          ember: '~1.13.0',
          'ember-cli-shims': '0.0.6',
          'ember-data': '~1.13.0',
        },
        resolutions: {
          ember: '~1.13.0',
          'ember-cli-shims': '0.0.6',
          'ember-data': '~1.13.0',
        },
      },
      npm: {
        devDependencies: {
          'ember-cli-shims': null,
          'ember-cli-fastboot': null,
          'ember-data': '~1.13.0',
          'ember-source': null,
          fastboot: null,
          'ember-cli-addon-docs': null,
        },
      },
    },
    {
      name: 'ember-2.0',
      bower: {
        dependencies: {
          ember: '~2.0',
          'ember-cli-shims': '0.1.0',
          'ember-data': '~2.1',
        },
        resolutions: {
          ember: '~2.0',
          'ember-cli-shims': '0.1.0',
          'ember-data': '~2.1',
        },
      },
      npm: {
        devDependencies: {
          'ember-cli-shims': null,
          'ember-cli-fastboot': null,
          'ember-data': '~2.0',
          'ember-source': null,
          fastboot: null,
        },
      },
    },
    {
      name: 'ember-2.4',
      bower: {
        dependencies: {
          ember: 'components/ember#lts-2-4',
        },
        resolutions: {
          ember: 'lts-2-4',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-2.8',
      bower: {
        dependencies: {
          ember: 'components/ember#lts-2-8',
        },
        resolutions: {
          ember: 'lts-2-8',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          ember: 'components/ember#release',
        },
        resolutions: {
          ember: 'release',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          ember: 'components/ember#beta',
        },
        resolutions: {
          ember: 'beta',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          ember: 'components/ember#canary',
        },
        resolutions: {
          ember: 'canary',
        },
      },
      npm: {
        devDependencies: {
          'ember-source': null,
        },
      },
    },
    {
      name: 'ember-default',
      npm: {
        devDependencies: {},
      },
    },
  ],
};
