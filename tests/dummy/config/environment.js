/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    baseURL: '/',
    // We can't use 'auto' for the location, because this breaks gh-pages.
    // (gh-pages doesn't support URLRewrite / server configuration files, so if
    // you try to load a route directly, you'll get a 404.)
    locationType: 'hash',
    EmberENV: {
      // TODO(azirbel): Disable prototype extensions
      // EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    /*
     * Dummy app configuration for ember-cli-content-security-policy.
     *
     * TODO(azirbel): CSP "unsafe" inline styles seem to be used for table rows
     * somehow, I haven't tracked it down. This is probably ok for now, but
     * could probably be cleaned up.
     *
     * We allow ghbtns.com to show the "Github stars" widget.
     * We allow avatars.githubusercontent.com and api.github.com for the Ajax
     * table example.
     *
     * We allow fast.fonts.net to load Univers fonts.
     */
    contentSecurityPolicy: {
      'default-src': "'self' ghbtns.com",
      'script-src': "'self' api.github.com",
      'font-src': "'self' fast.fonts.net",
      'connect-src': "'self' api.github.com",
      'img-src': "'self' ghbtns.com avatars.githubusercontent.com",
      'style-src': "'self' 'unsafe-inline' fast.fonts.net",
      'media-src': "'self'",
    }
  };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'gh-pages') {
    ENV.baseURL = '/ember-table/';
  }

  return ENV;
};
