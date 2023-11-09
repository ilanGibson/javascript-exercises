const add = function(number1, ...otherNumbers) {
  let sum = 0;
  sum += number1;
  for (number of otherNumbers) {
    sum += number;
  }

  return (sum);
};

const subtract = function(number1, number2) {
  return (number1 - number2);
};

const sum = function(numberArray) {
  let sum = 0;
  for (number of numberArray) {
    sum += number;
  }

  return (sum);
};

const multiply = function(numberArray) {
  let product = 1;
  for (number of numberArray) {
    product *= number;
  }

  return (product);
};

const power = function(number1, number2) {
	return (number1 ** number2);
};

const factorial = function(number1) {
  temp = 1
	for (let i = number1; i > 0; i--) {
    temp *= i;
  }

  return (temp);
};

console.log(power(3,2));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
