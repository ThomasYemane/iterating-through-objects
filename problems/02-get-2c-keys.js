/*
Write a function called get2CKeys(obj) that iterates through the object and
returns an array of the object's keys that have values with at least 2 'c's.
*/

// Your code here 
function get2CKeys(obj) {
  let result = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key];
      let count = 0;

      for (let char of value) {
        if (char === 'c') {
          count ++;
        }
      }
      if (count >= 2) {
        result.push(key);
      }
    }
  }
  return result;
}

const obj = {
  red: 'circle',
  blue: 'octagon',
  green: 'square'
}
console.log(get2CKeys(obj)); // ['red']

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = get2CKeys;
} catch {}
