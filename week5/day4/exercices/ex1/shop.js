const products = require('./products');

function findProductByName(productName) {
  return products.find(p => p.name.toLowerCase() === productName.toLowerCase());
}

console.log(findProductByName("Laptop"));
console.log(findProductByName("Coffee Mug"));
console.log(findProductByName("Phone")); 
