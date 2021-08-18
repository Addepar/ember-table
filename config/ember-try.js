/* eslint-env node */
const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary'),
  ]).then(urls => {
    return {
      useYarn: true,
      scenarios: [
        {
          name: 'ember-lts-2.8',
          bower: {
            dependencies: {
              ember: 'components/ember#lts-2-8',
            },
            resolutions: {
              ember: 'lts-2-8',
            },
          },
          npm: {
            resolutions: {
              // ember-math-helpers has a dependency on newer htmlbars and it
              // conflicts this older version of ember with a message:
              // "ember-cli-htmlbars: Cannot find the ember-source addon"...
              'ember-cli-htmlbars': '^3',
              // The 1.2.2 release causes an error related to a missing 'match'
              // property which is due to the lack of ember-source.
              // See https://github.com/pzuraq/ember-compatibility-helpers/issues/47
              'ember-compatibility-helpers': '1.2.1',
            },
            dependencies: {
              'ember-compatibility-helpers': '1.2.1',
            },
            devDependencies: {
              'ember-source': null,
              'ember-angle-bracket-invocation-polyfill': null,
            },
          },
        },
        {
          name: 'ember-lts-2.12',
          npm: {
            devDependencies: {
              'ember-source': '~2.12.0',
            },
          },
        },
        {
          name: 'ember-lts-2.18',
          npm: {
            devDependencies: {
              'ember-source': '~2.18.0',
            },
          },
        },
        {
          name: 'ember-lts-3.4',
          npm: {
            devDependencies: {
              'ember-source': '~3.4.0',
            },
          },
        },
        {
          name: 'ember-lts-3.8',
          npm: {
            devDependencies: {
              'ember-source': '~3.8.0',
            },
          },
        },
        {
          name: 'ember-lts-3.12',
          npm: {
            devDependencies: {
              'ember-source': '~3.12.0',
            },
          },
        },
        {
          name: 'ember-lts-3.16',
          npm: {
            devDependencies: {
              'ember-source': '~3.16.0',
            },
          },
        },
        {
          name: 'ember-lts-3.20',
          npm: {
            devDependencies: {
              'ember-source': '~3.20.0',
            },
          },
        },
        {
          name: 'ember-lts-3.24',
          npm: {
            devDependencies: {
              'ember-source': '~3.24.0',
            },
          },
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0],
            },
          },
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1],
            },
          },
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2],
            },
          },
        },
        {
          name: 'ember-default',
          npm: {
            devDependencies: {},
          },
        },
        {
          name: 'ember-production',
          command: 'ember test -e production',
          npm: {
            devDependencies: {},
          },
        },
        {
          name: 'ember-default-docs',
          command: 'ember test --filter="Acceptance | docs"',
          npm: {
            devDependencies: {
              'ember-data': '~3.24.0',
              'ember-cli-addon-docs': '^1.0.0',
              'ember-cli-addon-docs-yuidoc': '^1.0.0',
            },
          },
        },
      ],
    };
  });
};
