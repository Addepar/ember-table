import { run } from '@ember/runloop';
import wait from 'ember-test-helpers/wait';
import { triggerEvent } from 'ember-native-dom-helpers';

export async function pressElement(target, x, y) {
  await triggerEvent(target, 'pointerdown', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}

export async function moveMouse(target, x, y) {
  await triggerEvent(target, 'pointermove', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}

export async function releasePress(target, x, y) {
  await triggerEvent(target, 'pointerup', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}
