import { persons } from './data.js';

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, p) => sum + p.age, 0);
  return totalAge / persons.length;
}

console.log("Average age:", calculateAverageAge(persons));
