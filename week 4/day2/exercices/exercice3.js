// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

// Using the spread operator to combine arrays into one
// ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); 
// Output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]


// ------2------
const country = "USA";

// Strings are iterable, so spreading "USA" results in an array of characters
console.log([...country]); 
// Output: ["U", "S", "A"]


// ------Bonus------
let newArray = [...[,,]];
console.log(newArray); 
// Output: [ <2 empty items> ]
// Note: This is not [undefined, undefined] — it's an array with 2 holes (elisions), 
// meaning the slots are empty/uninitialized.