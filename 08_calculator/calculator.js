const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(args) {
	return args.reduce((accum, curr) => accum + curr, 0);
};

const multiply = function(args) {
  return args.reduce((accum, curr) => accum * curr, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	let accum = 1;
  for (let k = n; k > 0; --k) {
    accum *= k;
  }
  return accum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
