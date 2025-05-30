const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combined = epic.reduce((acc, curr) => acc + ' ' + curr, '').trim();
console.log(combined);
