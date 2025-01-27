/*
Write a function called getKeys(obj) that iterates through the object and
returns an array of the object's keys only.
*/

// Your code here
function getValues(obj) {
  let valuesArray = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      valuesArray.push(obj[key]);
    }
  }

  return valuesArray;
}

const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2011,
};
console.log(getValues(car)); // ['Toyota', 'Corolla', 2011]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = getValues;
} catch {}
