const palindromes = function (str) {
    let processedStr = str.toLowerCase()
                            .split("")
                            .filter(character => character.match(/^[0-9a-z]+$/));
    const halfLength = processedStr.length / 2;
    for (let i = 0; i < halfLength; ++i) {
        if (processedStr.at(i) !== processedStr.at(processedStr.length - 1 - i)) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
