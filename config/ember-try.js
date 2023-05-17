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
          name: 'ember-lts-4.4',
          npm: {
            devDependencies: {
              'ember-source': '~4.4.0',
            },
          },
        },
        {
          name: 'ember-lts-4.12',
          npm: {
            devDependencies: {
              'ember-source': '~4.4.0',
            },
          },
        },
        // TEMPORARY DISABLE
        // {
        //   name: 'ember-release',
        //   npm: {
        //     devDependencies: {
        //       'ember-source': urls[0],
        //     },
        //   },
        // },
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
              'ember-cli-addon-docs': '^5.2.0',
              'ember-cli-addon-docs-yuidoc': '^1.0.0',
              'ember-cli-deploy': '^1.0.2',
              'ember-cli-deploy-build': '^1.1.1',
              'ember-cli-deploy-git': '^1.3.3',
              'ember-cli-deploy-git-ci': '^1.0.1',
            },
          },
        },
      ],
    };
  });
};
