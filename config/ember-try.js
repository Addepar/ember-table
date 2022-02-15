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
          name: 'ember-lts-2.18',
          npm: {
            devDependencies: {
              '@ember/jquery': '^1.1.0',
              '@ember/test-helpers': '^1.7.0',
              'ember-a11y-testing': '^0.5.0',
              'ember-angle-bracket-invocation-polyfill': '^3.0.1',
              'ember-qunit': '^4.0.0',
              'ember-source': '~2.18.0',
              qunit: null,
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
          name: 'ember-lts-3.28',
          npm: {
            devDependencies: {
              'ember-source': '~3.28.0',
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
