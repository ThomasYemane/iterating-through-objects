/*
Write a function called countCharacters(str) that takes in a string and returns
an object with all the characters in the string as keys and the frequency that
the characters show up in the string as values.
*/

function countCharacters(str) {
  // Your code here
  let charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

console.log(countCharacters('hello')); // => { h: 1, e: 1, l: 2, o: 1}

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = countCharacters;
} catch {}
