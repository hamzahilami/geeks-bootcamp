const letters = ['x', 'y', 'z', 'z']
const output={}

for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  if (output[letter]) {
    output[letter]++;
  } else {
    output[letter] = 1;
  }
}

const output2 = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(output)