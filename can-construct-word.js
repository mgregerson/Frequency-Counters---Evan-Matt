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

/* This function takes two arguments, a word and a string of letters.
It returns true if letters contains all the letters necessary to spell word
Otherwise it returns false.
*/
function canConstructWord(word, letters) {
  const wordObj = getFrequencyCounter(word);
  const lettersObj = getFrequencyCounter(letters);

  if (letters.length === 0) {
    return false;
  }

  for (let letter in wordObj) {
    if (!letter in lettersObj) {
      return false;
    } else if (lettersObj[letter] < wordObj[letter]) {
      return false;
    }
  }
  return true;
}
