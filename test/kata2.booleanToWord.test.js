const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("returns Yes when passed true", () => {
    expect(booleanToWord(1)).toBe('Yes');
    expect(booleanToWord(2)).toBe('Yes');
    expect(booleanToWord(5)).toBe('Yes');
    });

    test("returns No when passed false", () => {
      expect(booleanToWord(0)).toBe('No');
      expect(booleanToWord(NaN)).toBe('No');
      expect(booleanToWord(undefined)).toBe('No');
    });
});
