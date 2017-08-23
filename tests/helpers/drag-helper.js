import { run } from '@ember/runloop';
import wait from 'ember-test-helpers/wait';

export function pressElement(target, x, y) {
  run(() => {
    const event = createMouseEvent('pointerdown', target, x, y);
    target.dispatchEvent(event);
  });
  return (window.wait || wait)();
}

export function moveMouse(target, x, y) {
  run(() => {
    const event = createMouseEvent('pointermove', target, x, y);
    target.dispatchEvent(event);
  });
  return (window.wait || wait)();
}

export function createMouseEvent(type, target, x, y) {
  const event = target.ownerDocument.createEvent('MouseEvents');
  const opts = {
    type,
    canBubble: true,
    cancelable: true,
    view: target.ownerDocument.defaultView,
    detail: 0,
    screenX: x,
    screenY: y,
    clientX: x,
    clientY: y,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    button: 0,
    relatedTarget: null
  };

  // Pass in the options
  event.initMouseEvent(
      opts.type,
      opts.canBubble,
      opts.cancelable,
      opts.view,
      opts.detail,
      opts.screenX,
      opts.screenY,
      opts.clientX,
      opts.clientY,
      opts.ctrlKey,
      opts.altKey,
      opts.shiftKey,
      opts.metaKey,
      opts.button,
      opts.relatedTarget
  );
  return event;
}
