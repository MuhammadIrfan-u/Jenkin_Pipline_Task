
const { sum, divide, multiply, subtract } = require('./calculator');

  test('divide two numbers', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(-6, 3)).toBe(-2);
  });

  test('throw error on divide by zero', () => {
    expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
  });


  test('multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 4)).toBe(-8);
  });


  test('subtract two numbers', () => {
    expect(subtract(10, 3)).toBe(7);
    expect(subtract(5, 8)).toBe(-3);
  });


test('adds 1 + 2 to equal ', ()=> {
    expect(sum(1, 2)).toBe(3);
});