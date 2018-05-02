import { compare } from '@ember/utils';

export function objectAt(items, index) {
  if (typeof items.objectAt === 'function') {
    return items.objectAt(index);
  }

  return items[index];
}

export function splice(items, start, count, ...add) {
  if (typeof items.replace === 'function' && typeof items.objectAt === 'function') {
    return items.replace(start, count, add);
  }

  return items.splice(start, count, ...add);
}

/**
 * Cycle shift an internal [start..end] to [start + 1...end, start].
 */
export function move(items, start, end) {
  let sourceItem = objectAt(items, start);

  splice(items, start, 1);
  splice(items, end, 0, sourceItem);
}

function merge(left, right, comparator) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    let comparison = comparator(left[leftIndex], right[rightIndex]);

    if (comparison <= 0) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex < left.length) {
    mergedArray.splice(mergedArray.length, 0, ...left.slice(leftIndex));
  }

  if (rightIndex < right.length) {
    mergedArray.splice(mergedArray.length, 0, ...right.slice(rightIndex));
  }

  return mergedArray;
}

/**
 * An implementation of the standard merge sort algorithm.
 *
 * This is necessary because we need a stable sorting algorithm that accepts
 * a general comparator. The built in sort function and Ember's sort functions
 * are not stable, and `_.sortBy` doesn't take a general comparator. Ideally
 * lodash would add a `_.sort` function whose API would mimic this function's.
 *
 * @function
 * @param {Array} array The array to be sorted
 * @param {Comparator} comparator The comparator function to compare elements with.
 * @returns {Array} A sorted array
 */
export function mergeSort(array, comparator = compare) {
  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let leftArray = mergeSort(array.slice(0, middleIndex), comparator);
  let rightArray = mergeSort(array.slice(middleIndex), comparator);

  return merge(leftArray, rightArray, comparator);
}
