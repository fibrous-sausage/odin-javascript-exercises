const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) {
        return "OOPS"
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        const worker = (counter, last, current) => {
            if (counter === n) {
                return current;
            } else {
                return worker(counter + 1, current, last + current);
            }
        }
        return worker(1, 0, 1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
