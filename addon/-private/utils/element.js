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
