const array = [[1],[2],[3],[[[4]]],[[[5]]]].flat(2);

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]].map(arrayS => arrayS.join(' '));

const greetingString = greeting.join(' ');

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]].flat(25);
console.log(trapped);


// output
// Hello young grasshopper! you are learning fast!
// 3