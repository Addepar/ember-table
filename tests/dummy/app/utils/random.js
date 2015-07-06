var seed = 6;
// source: http://indiegamr.com/generate-repeatable-random-numbers-in-js/
// in order to work 'Math.seed' must NOT be undefined,
// so in any case, you HAVE to provide a Math.seed
export function randomNumber(max = 1, min = 0, randomSeed = undefined) {
  if (randomSeed !== undefined) {
    // reset seed
    seed = randomSeed;
  }
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280;
  return min + rnd * (max - min);
}

/**
 * source: http://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates
 */
export function randomDate(start, end, randomSeed) {
  let random = randomNumber(1, 0, randomSeed);
  return new Date(start.getTime() + random * (end.getTime() - start.getTime()));
}

export function setRandomSeed(randomSeed = 6) {
  seed = randomSeed;
}
