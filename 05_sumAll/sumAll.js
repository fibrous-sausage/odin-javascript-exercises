const sumAll = function(lowerBound, upperBound) {
    if (typeof(lowerBound) !== "number" || typeof(upperBound) !== "number") {
        return "ERROR";
    }

    if (lowerBound < 0 || upperBound < 0) {
        return "ERROR";
    }

    if (lowerBound !== Math.floor(lowerBound) || upperBound !== Math.floor(upperBound)) {
        return "ERROR";
    }

    if (lowerBound > upperBound) {
        let temp = upperBound;
        upperBound = lowerBound;
        lowerBound = temp;
    }

    let sum = 0;
    for (let i = lowerBound; i <= upperBound; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
