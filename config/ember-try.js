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
            resolutions: {
              // ember-math-helpers has a dependency on newer htmlbars and it
              // conflicts this older version of ember with a message:
              // "ember-cli-htmlbars: Cannot find the ember-source addon"...
              'ember-cli-htmlbars': '^3',
            },
            devDependencies: {
              'ember-cli-shims': null,
              'ember-source': null,
              'ember-cli-addon-docs': null,
              'ember-angle-bracket-invocation-polyfill': null,
            },
          },
        },
        {
          name: 'ember-lts-2.4',
          bower: {
            dependencies: {
              ember: 'components/ember#lts-2-4',
            },
            resolutions: {
              ember: 'lts-2-4',
            },
          },
          npm: {
            resolutions: {
              // ember-math-helpers has a dependency on newer htmlbars and it
              // conflicts this older version of ember with a message:
              // "ember-cli-htmlbars: Cannot find the ember-source addon"...
              'ember-cli-htmlbars': '^3',
            },
            devDependencies: {
              'ember-source': null,
              'ember-cli-addon-docs': null,
              'ember-angle-bracket-invocation-polyfill': null,
            },
          },
        },
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
            },
            devDependencies: {
              'ember-source': null,
              'ember-angle-bracket-invocation-polyfill': null,
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-lts-2.12',
          npm: {
            devDependencies: {
              'ember-source': '~2.12.0',
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-lts-2.18',
          npm: {
            devDependencies: {
              'ember-source': '~2.18.0',
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-lts-3.4',
          npm: {
            devDependencies: {
              'ember-source': '~3.4.0',
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-lts-3.8',
          npm: {
            devDependencies: {
              'ember-source': '~3.8.0',
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-lts-3.16',
          npm: {
            devDependencies: {
              'ember-source': '~3.16.0',
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0],
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1],
              'ember-cli-addon-docs': null,
            },
          },
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2],
              'ember-cli-addon-docs': null,
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
  });
};
