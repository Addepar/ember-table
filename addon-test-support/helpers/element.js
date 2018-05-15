export function getScale(element) {
  let rect = element.getBoundingClientRect();

  if (element.offsetHeight === rect.height || rect.height === 0) {
    return 1;
  } else {
    return element.offsetHeight / rect.height;
  }
}
