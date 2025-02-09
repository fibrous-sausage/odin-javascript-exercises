const palindromes = function (str) {
    // Explanation of regex:
    // ^ means beginning of string, $ means end of string
    // [] means match each character to a character inside the braces
    // 0-9 is short for all numbers from 0-9
    // a-z is short for all lowercase letters from a-z
    const cleanStr = str.toLowerCase()
                        .split("")
                        .filter(character => character.match(/^[0-9a-z]+$/));
    const reverseStr = cleanStr.toReversed();
    return cleanStr.join("") === reverseStr.join("");
};

// Do not edit below this line
module.exports = palindromes;
