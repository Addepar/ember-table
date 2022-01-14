import { settled, triggerEvent } from '@ember/test-helpers';
import { Promise } from 'rsvp';

/**

  Ported from https://github.com/emberjs/ember-test-helpers/blob/ea591697a98975737647b4c0043477cc6796569b/addon-test-support/%40ember/test-helpers/dom/scroll-to.ts

  This can be dropped in favor of the test-helpers provided scrollTo after
  Ember 2.18 support is dropped and test-helpers is upgraded.

*/

/**
  Scrolls DOM element or selector to the given coordinates.
  @public
  @param {string|HTMLElement} target the element or selector to trigger scroll on
  @param {Number} x x-coordinate
  @param {Number} y y-coordinate
  @return {Promise<void>} resolves when settled

  @example
  <caption>
    Scroll DOM element to specific coordinates
  </caption>

  scrollTo('#my-long-div', 0, 0); // scroll to top
  scrollTo('#my-long-div', 0, 100); // scroll down
*/
export default function scrollTo(target, x, y) {
  return Promise.resolve().then(() => {
    if (!target) {
      throw new Error('Must pass an element or selector to `scrollTo`.');
    }

    if (x === undefined || y === undefined) {
      throw new Error('Must pass both x and y coordinates to `scrollTo`.');
    }

    let element = target instanceof Node ? target : document.querySelector(target);
    if (!element) {
      throw new Error(`Element not found when calling \`scrollTo('${target}')\`.`);
    }

    element.scrollTop = y;
    element.scrollLeft = x;

    triggerEvent(element, 'scroll');

    return settled();
  });
}
