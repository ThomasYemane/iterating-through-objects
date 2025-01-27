/*
Given a sentence, write a function called isPalindrome that returns true if the
sentence can be rearranged into a palindrome and false if not. Ignore whitespace
and assume all characters are lowercase.

Note: A palindrome is a sequence that reads the same backwards as is does
forward.
*/

const isPalindrome = (sentence) => {
  // Your code here
  let charCount = {};
  let cleaned = sentence.replace(/\s+/g, '').toLowerCase();

  for (let char of cleaned) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let oddCount = 0;
  for (let count of Object.values(charCount)) {
    if (count % 2 !== 0) {
      oddCount++;
    }
  }

  return oddCount <= 1;
};

console.log(isPalindrome('pop')); // true;
console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('yo banana boy')); // true
console.log(isPalindrome('this is the truth')); // false
console.log(isPalindrome('abab')); // true
// because 'abab' can be rearranged into a palindrome, 'abba'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = isPalindrome;
} catch {}
