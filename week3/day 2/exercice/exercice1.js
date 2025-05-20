/* part1 */

const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,1);
console.log(people);

people[2] = "Jason";
console.log(people);

people.push("hamza");
console.log(people);

console.log(people.indexOf("Mary"));

let peopleCopy = people.slice(1, 3); 
console.log(peopleCopy);
console.log(people.indexOf("foo") === -1);
//The .indexOf() method returns the index of the first occurrence of the specified element in the array. If the element is not found, it returns -1.

let last = people[people.length - 1];
console.log(last); //





/* part2 */

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}


for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

