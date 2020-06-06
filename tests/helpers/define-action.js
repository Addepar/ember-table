import { gte } from 'ember-compatibility-helpers';

export default function(testContext, actionName, actionHandler) {
  if (gte('1.13.0')) {
    testContext.set(actionName, actionHandler);
  } else {
    testContext.on(actionName, actionHandler);
  }
}
