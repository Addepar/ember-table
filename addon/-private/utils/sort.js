import { compare, isNone } from '@ember/utils';
import { get } from '@ember/object';

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

export function sortMultiple(itemA, itemB, sorts, compare, sortEmptyLast) {
  let compareValue;

  for (let { valuePath, isAscending } of sorts) {
    let valueA = get(itemA, valuePath);
    let valueB = get(itemB, valuePath);

    // The option only influences the outcome of an ascending sort.
    if (sortEmptyLast) {
      sortEmptyLast = isAscending;
    }

    compareValue = isAscending
      ? compare(valueA, valueB, sortEmptyLast)
      : -compare(valueA, valueB, sortEmptyLast);

    if (compareValue !== 0) {
      break;
    }
  }

  return compareValue;
}

function isExactlyNaN(value) {
  return typeof value === 'number' && isNaN(value);
}

function isEmptyString(value) {
  return typeof value === 'string' && value === '';
}

function isEmpty(value) {
  return isNone(value) || isExactlyNaN(value) || isEmptyString(value);
}

function orderEmptyValues(itemA, itemB, sortEmptyLast) {
  let aIsEmpty = isEmpty(itemA);
  let bIsEmpty = isEmpty(itemB);
  let less = -1;
  let more = 1;

  if (sortEmptyLast) {
    less = 1;
    more = -1;
  }

  if (aIsEmpty && !bIsEmpty) {
    return less;
  } else if (bIsEmpty && !aIsEmpty) {
    return more;
  } else if (isNone(itemA) && isExactlyNaN(itemB)) {
    return less;
  } else if (isExactlyNaN(itemA) && isNone(itemB)) {
    return more;
  } else {
    return 0;
  }
}

export function compareValues(itemA, itemB, sortEmptyLast) {
  if (isEmpty(itemA) || isEmpty(itemB)) {
    return orderEmptyValues(itemA, itemB, sortEmptyLast);
  }

  return compare(itemA, itemB);
}
