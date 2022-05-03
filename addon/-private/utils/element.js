const VENDOR_MATCH_FNS = [
  'matches',
  'webkitMatchesSelector',
  'mozMatchesSelector',
  'msMatchesSelector',
  'oMatchesSelector',
];
let ELEMENT_MATCH_FN;

function setElementMatchFn(el) {
  VENDOR_MATCH_FNS.forEach(fn => {
    if (ELEMENT_MATCH_FN === undefined && typeof el[fn] === 'function') {
      ELEMENT_MATCH_FN = fn;
    }
  });
}

export function closest(el, selector) {
  if (ELEMENT_MATCH_FN === undefined) {
    setElementMatchFn(el);
  }
  while (el) {
    // TODO add explicit test
    if (el[ELEMENT_MATCH_FN](selector)) {
      return el;
    }
    el = el.parentElement;
  }

  return null;
}

/*
 * Calculate the scale of difference between an element's logical height
 * (the offsetHeight or getComputedStyle height) compared to its rendered
 * height (via getBoundingClientRect).
 *
 * Note that there are some interesting edge cases to consider around
 * these APIs.
 *
 *   - `getComputedStyle` returns a string from styles in pixels. For
 *     example `48.23px`. The precision of this API in Chrome seems to
 *     be 3 decimal places. Additionally, there can be unexpected values
 *     such as `auto`. Finally, this API may be slow compared to other
 *     DOM API calls.
 *   - `offsetHeight` always returns in integer. If the height of an
 *     element is at float precision, then the value is rounded. This
 *     makes it at best useful as a fallback.
 *   - `getComputedStyle` may return a smaller value than expected when
 *     used with exotic kinds of styling (likely due to passing/broder
 *     and block model or overflow issues?). In the ember table codebase
 *     today, only the `table` tag itself is passed in for measurement.
 *
 */
export function getScale(element) {
  let rect = element.getBoundingClientRect();
  let renderedHeight = rect.height;

  if (renderedHeight === 0) {
    return 1;
  }

  let computedHeightStyleValue = window.getComputedStyle(element).height;
  let computedHeightInPixels = Number(
    computedHeightStyleValue.substring(0, computedHeightStyleValue.length - 2)
  );

  let offsetHeight = element.offsetHeight;

  if (isNaN(computedHeightInPixels)) {
    computedHeightInPixels = offsetHeight;
  } else if (Math.abs(computedHeightInPixels - offsetHeight) >= 1) {
    throw new Error(
      "EmberTable's getScale() utility can only work on elements where height as derived from getComputedStyle is reliable. Usually this means padding is present on the target element."
    );
  }

  if (computedHeightInPixels === renderedHeight) {
    return 1;
  } else {
    let scale = computedHeightInPixels / renderedHeight;

    /*
     * If a scale is very close to an integer value, it should return an
     * integer value instead of a float with deep precision.
     *
     * Allowing only 4 digits of precision is arbitrary.
     */
    let roundedScale = Math.round(scale);
    if (Math.abs(roundedScale - scale) < 0.00001) {
      return roundedScale;
    }

    return scale;
  }
}

export function getInnerClientRect(element, scale) {
  let outerClientRect = element.getBoundingClientRect();

  let computedStyle = window.getComputedStyle(element);

  let borderTopWidth = parseFloat(computedStyle.getPropertyValue('border-top-width')) / scale;
  let borderBottomWidth = parseFloat(computedStyle.getPropertyValue('border-bottom-width')) / scale;
  let borderLeftWidth = parseFloat(computedStyle.getPropertyValue('border-left-width')) / scale;
  let borderRightWidth = parseFloat(computedStyle.getPropertyValue('border-right-width')) / scale;

  return {
    top: outerClientRect.top + borderTopWidth,
    bottom: outerClientRect.bottom - borderBottomWidth,
    left: outerClientRect.left + borderLeftWidth,
    right: outerClientRect.right - borderRightWidth,

    height: outerClientRect.height - borderTopWidth - borderBottomWidth,
    width: outerClientRect.width - borderLeftWidth - borderRightWidth,
  };
}

export function getOuterClientRect(element) {
  return element.getBoundingClientRect();
}
