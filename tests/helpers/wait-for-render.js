import { Promise as EmberPromise } from 'rsvp';
import wait from 'ember-test-helpers/wait';

export default function() {
  return wait().then(() => {
    return new EmberPromise((resolve) => {
      // Two RAFs needed since we take 3 frames to do the initial render
      requestAnimationFrame(() => requestAnimationFrame((resolve)));
    });
  });
}
