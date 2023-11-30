const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(3)).toBe('Fizz') && expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(3)).toBe('Fizz') && expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(3)).toBe('Fizz') && expect(fizzBuzz(5)).toBe('Buzz');
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz())
  });
});
