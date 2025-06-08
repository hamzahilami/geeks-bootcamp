const _ = require('lodash');
const math = require('./math');

const nums = [1, 2, 3, 4, 5];

const sum = _.sum(nums);
const product = nums.reduce(math.multiply, 1);

console.log("Sum using lodash:", sum);
console.log("Product using math module:", product);
console.log("Add 5 + 3 =", math.add(5, 3));
