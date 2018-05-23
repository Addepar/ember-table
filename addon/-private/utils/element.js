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

export function getScale(element) {
  let rect = element.getBoundingClientRect();

  if (element.offsetHeight === rect.height || rect.height === 0) {
    return 1;
  } else {
    return element.offsetHeight / rect.height;
  }
}

export function getInnerClientRect(element) {
  let scale = getScale(element);
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
