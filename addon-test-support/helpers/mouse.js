import { triggerEvent } from '@ember/test-helpers';

export async function mouseDown(target, x, y) {
  await triggerEvent(target, 'pointerdown', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}

export async function mouseMove(target, x, y) {
  await triggerEvent(target, 'pointermove', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}

export async function mouseUp(target, x, y) {
  await triggerEvent(target, 'pointerup', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}
