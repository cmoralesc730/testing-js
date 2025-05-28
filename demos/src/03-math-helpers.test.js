const {substract, isEven} = require('./03-math-helpers.js');

test("Substract 10 - 3 should be 7", ()=>{
    const result = substract(10,3);
    expect(result).toBe(7);
});
test("Substract 3 - 10 should be -7", ()=>{
    const result = substract(3,10);
    expect(result).toBe(-7);
});

test("10 is even", ()=>{
    expect(isEven(10)).toBe(true);
});
test("3 is not even", ()=>{
    expect(isEven(3)).toBe(false);
});
test("0 is even", ()=>{
    expect(isEven(0)).toBe(true);
});