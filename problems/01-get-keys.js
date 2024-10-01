/*
Write a function called getKeys(obj) that iterates through the object and
returns an array of the object's keys only.
*/

// Your code here
function getKeys(obj) {
  let array = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      array.push(key);
    }
  }
  return array;
}

const obj = {
  first: '1',
  second: 2,
  third: 'three',
};
console.log(getKeys(obj));

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getKeys;
} catch {}
