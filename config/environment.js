'use strict';

module.exports = function(environment /* , appConfig */) {
  let ENV = {
    environment,
  };

  if (environment === 'development') {
    ENV['ember-a11y-testing'] = {
      componentOptions: {
        turnAuditOff: true, // Change to true to disable the audit in development
        visualNoiseLevel: 2,
        axeViolationClassNames: ['alert-box', 'alert-box--a11y'],
      },
    };
  }

  return ENV;
};
