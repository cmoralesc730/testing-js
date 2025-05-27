// Import math functions from the external module
const {sum, multiply, divide, average} = require('./02-math.js');

test('1 + 2 should equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('1 * 4 should equal 4', () => {
  expect(multiply(1, 4)).toBe(4);
});

test('6 / 3 should equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('Division with non-numeric input should return null', () => {
  expect(divide(6, "test")).toBeNull();
});

test('Average of [3, 7, 11] should be 7', () => {
  expect(average([3, 7, 11])).toBe(7);
});

test('Average of empty array should return null', () => {
  expect(average([])).toBeNull();
});
