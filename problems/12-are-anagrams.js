/*
Write a function called areAnagrams that takes in two words and returns a
boolean indicating whether or not the words are anagrams. Anagrams are words
that contain the same characters but not necessarily in the same order.

CHALLENGE: Can you do it with just one object?
*/

function areAnagrams(word1, word2) {
  // Your code here
  if (word1.length !== word2.length) {
    return false;
  }

  const charCount = {};

  for (let char of word1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of word2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return Object.values(charCount).every((count) => count === 0);
}

console.log(areAnagrams('cat', 'act')); // true
console.log(areAnagrams('restful', 'fluster')); // true
console.log(areAnagrams('cat', 'dog')); // false
console.log(areAnagrams('boot', 'bootcamp')); // false
console.log(areAnagrams('bott', 'boot')); // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = areAnagrams;
} catch {}
