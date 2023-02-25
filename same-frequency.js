"use strict";
/* This function takes one argument, items and iterates across items creating
an object consisting of keys equal to each element of items and a value of the
number of occurences of that element
*/
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

/** Takes two number arguments and returns true if both numbers contain the
 * same digits with the same frequency, otherwise returns false.
 */

function sameFrequency(num1, num2) {
  const iterableNum1 = num1.toString().split('');
  const iterableNum2 = num2.toString().split('');

  if (iterableNum1.length !== iterableNum2.length) return false;

  const num1Freq = getFrequencyCounter(iterableNum1);
  const num2Freq = getFrequencyCounter(iterableNum2);

  for (let numKey in num1Freq) {
    if (num1Freq[numKey] !== num2Freq[numKey]) {
      return false;
    }
  }
  return true;

}
