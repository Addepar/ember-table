import { SUPPORTS_CLOSURE_ACTIONS } from 'ember-compatibility-helpers';

export default function(context, action, ...params) {
  if (SUPPORTS_CLOSURE_ACTIONS && typeof context[action] === 'function') {
    context[action](...params);
  }
  context.sendAction(action, ...params);
}
