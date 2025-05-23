const input = prompt("Enter several words separated by commas:");
const words = input.split(",").map(word => word.trim());
const maxLength = Math.max(...words.map(word => word.length));
const border = "*".repeat(maxLength + 4);

console.log(border);
for (const word of words) {
    const padded = word + " ".repeat(maxLength - word.length);
    console.log(`* ${padded} *`);
}
console.log(border);
