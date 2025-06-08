function areAnagrams(str1, str2) {
  
    const normalizeString = (str) => {
        return str
            .toLowerCase() // Convert to lowercase for case-insensitive comparison
            .replace(/[^a-z0-9]/g, '') // Remove all characters that are NOT a-z or 0-9
            .trim(); // Trim any leading/trailing whitespace
    };

    const normalizedStr1 = normalizeString(str1);
    const normalizedStr2 = normalizeString(str2);

    // If the normalized strings have different lengths, they cannot be anagrams
    if (normalizedStr1.length !== normalizedStr2.length) {
        return false;
    }

    // Sort the characters of both normalized strings and compare them
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("Astronomer", "Moon starer"));       // true
console.log(areAnagrams("School master", "The classroom"));  // true
console.log(areAnagrams("The Morse Code", "Here come dots"));// true
console.log(areAnagrams("Hello", "Olelh"));                   // true
console.log(areAnagrams("Hello", "World"));                   // false
