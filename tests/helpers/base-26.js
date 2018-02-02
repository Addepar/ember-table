import { assert } from '@ember/debug';

const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const BASE = 26;

/**
 * Convert an integer to bijective hexavigesimal notation (alphabetic base-26).
 *
 * @param {number} int - A positive integer above zero
 */
export function toBase26(int) {
  assert('base 26 conversion must receive an integer', Number.isInteger(int));
  assert('base 26 conversion must receive a positive value', int >= 0);

  if (int < BASE) {
    return ALPHA[int];
  }

  let result = '';
  int += 1;

  while (int > 0) {
    let index = (int % BASE) || BASE;
    result = ALPHA[index - 1] + result;
    int = Math.floor((int - 1) / BASE);
  }

  return result;
}
