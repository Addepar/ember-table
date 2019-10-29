// Detect if ember-cli-addon-docs is in the project package.json.
// This is used at test runtime to decide whether to run the docs/
// acceptance tests.
const ADDON_DOCS_INSTALLED = Object.keys(require('../../../package.json').devDependencies).includes(
  'ember-cli-addon-docs'
);

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dummy',
    podModulePrefix: 'dummy/pods',
    environment,
    rootURL: '/',
    locationType: 'history',
    historySupportMiddleware: true,
    fastboot: {
      hostWhitelist: [/^localhost:\d+$/],
    },
    skipReorderingTests: process.env.SKIP_REORDERING_TESTS,
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Allow ember-cli-addon-docs to update the rootURL in compiled assets
    ENV.rootURL = 'ADDON_DOCS_ROOT_URL';
    ENV.locationType = 'router-scroll';
  }

  ENV.ADDON_DOCS_INSTALLED = ADDON_DOCS_INSTALLED;

  return ENV;
};
