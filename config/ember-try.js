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
          name: 'ember-lts-3.12',
          npm: {
            devDependencies: {
              'ember-source': '~3.12.0',
            },
            dependencies: {
              'ember-classy-page-object': '0.7.0',
            },
            resolutions: {
              'ember-classy-page-object': '0.7.0',
            },
          },
        },
        {
          name: 'ember-lts-3.16',
          npm: {
            devDependencies: {
              'ember-source': '~3.16.0',
            },
            dependencies: {
              'ember-classy-page-object': '0.7.0',
            },
            resolutions: {
              'ember-classy-page-object': '0.7.0',
            },
          },
        },
        {
          name: 'ember-lts-3.20',
          npm: {
            devDependencies: {
              'ember-source': '~3.20.0',
            },
            dependencies: {
              'ember-classy-page-object': '0.7.0',
            },
            resolutions: {
              'ember-classy-page-object': '0.7.0',
            },
          },
        },
        {
          name: 'ember-lts-3.24',
          npm: {
            devDependencies: {
              'ember-source': '~3.24.0',
            },
            dependencies: {
              'ember-classy-page-object': '0.7.0',
            },
            resolutions: {
              'ember-classy-page-object': '0.7.0',
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
          name: 'ember-lts-4.4',
          npm: {
            devDependencies: {
              'ember-source': '~4.4.0',
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
