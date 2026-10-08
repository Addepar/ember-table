import { triggerEvent } from '@ember/test-helpers';

export async function mouseDown(target: Element, x?: number, y?: number): Promise<void> {
  await triggerEvent(target, 'pointerdown', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}

export async function mouseMove(target: Element, x?: number, y?: number): Promise<void> {
  await triggerEvent(target, 'pointermove', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}

export async function mouseUp(target: Element, x?: number, y?: number): Promise<void> {
  await triggerEvent(target, 'pointerup', {
    clientX: x,
    clientY: y,
    button: 0,
  });
}
