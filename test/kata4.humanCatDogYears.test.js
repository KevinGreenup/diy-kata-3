const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  test('calculates human, cat, and dog years correctly', () => {
    // Test case 1
    expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
  
    // Test case 2
    expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
  
    // Test case 3
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
});
});