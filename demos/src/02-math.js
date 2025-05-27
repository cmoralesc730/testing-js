function sum (a, b) {
  return a + b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function average(array) {
  if (array.length === 0) return null;
  return array.reduce((a, b) => a + b) / array.length;
}

module.exports = {
  sum,
  multiply,
  divide,
  average
};
