const data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Cuty',
        age: 5,
        type: 'rabbit'
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog'
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat'
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog'
    },
    {
        name: 'Rex',
        age: 10,
        type: 'dog'
    },
];

let sum = 0;
for (let pet of data) {
    if (pet.type === 'dog') sum += pet.age * 7;
}

const total = data.reduce((acc, pet) => pet.type === 'dog' ? acc + pet.age * 7 : acc, 0);

console.log('Loop total:', sum);   
console.log('Reduce total:', total); 