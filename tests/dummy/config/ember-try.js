'use strict';

const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function() {
  let { default: latestVersion } = await import('latest-version');

  return {
    packageManager: 'yarn',
    scenarios: [
      embroiderSafe(),
      embroiderOptimized(),
      {
        name: 'ember-lts-3.28',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '2.9.4',
            'ember-a11y-testing': '5.2.1',
            'ember-qunit': '6.0.0',
            'ember-source': '~3.28.0',
          },
        },
      },
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            '@ember/test-helpers': '2.9.4',
            'ember-a11y-testing': '5.2.1',
            'ember-qunit': '6.0.0',
            'ember-source': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-lts-5.12',
        npm: {
          devDependencies: {
            'ember-source': '~5.12.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await latestVersion('ember-source'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await latestVersion('ember-source', {
              version: 'beta',
            }),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await latestVersion('ember-source', {
              version: 'alpha',
            }),
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
          resolutions: {
            '@handlebars/parser': '~2.1.0',
          },
        },
      },
    ],
  };
};
