"use strict";
// add whatever parameters you deem necessary & write doc comment
// canConstructWord»
// This should accept two strings: word and letters.
// It should return true if the word can be built with the letters;
// otherwise, it should return false.

// There are only lowercase letters
// (with no spaces or punctuation) in both word and letters.

// Constraints: time complexity: O(w + k)
// (if w is the length of word and k is the length of letters)

// canConstructWord('aa', 'abc');
// false -- can't build "aa" with only 1 "a"

// canConstructWord('abc', 'dcba');
// true -- can build "abc" with letters "abcd"

// canConstructWord("aabb", "bcabad");
// true -- can build "aabbcc" with those letters

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

function canConstructWord(word, letters) {
  const wordObj = getFrequencyCounter(word);
  const lettersObj = getFrequencyCounter(letters);

  if (letters.length === 0) {
    return false;
  }

  for (let letter in wordObj) {
    // if letters[letter] < wordObj[letter], return false;
    if (!letter in lettersObj) {
      return false;
    } else if (lettersObj[letter] < wordObj[letter]) {
      return false;
    }
  }
  return true;
}
