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

export function sortMultiple(itemA, itemB, sorts, compare) {
  let compareValue;

  for (let { valuePath, isAscending } of sorts) {
    let valueA = get(itemA, valuePath);
    let valueB = get(itemB, valuePath);

    compareValue = isAscending ? compare(valueA, valueB) : -compare(valueA, valueB);

    if (compareValue !== 0) {
      break;
    }
  }

  return compareValue;
}

function isExactlyNaN(value) {
  return typeof value === 'number' && isNaN(value);
}

function isEmpty(value) {
  return isNone(value) || isExactlyNaN(value);
}

function orderEmptyValues(itemA, itemB) {
  let aIsEmpty = isEmpty(itemA);
  let bIsEmpty = isEmpty(itemB);

  if (aIsEmpty && !bIsEmpty) {
    return -1;
  } else if (bIsEmpty && !aIsEmpty) {
    return 1;
  } else if (isNone(itemA) && isExactlyNaN(itemB)) {
    return -1;
  } else if (isExactlyNaN(itemA) && isNone(itemB)) {
    return 1;
  } else {
    return 0;
  }
}

export function compareValues(itemA, itemB) {
  if (isEmpty(itemA) || isEmpty(itemB)) {
    return orderEmptyValues(itemA, itemB);
  }

  return compare(itemA, itemB);
}
