const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
      // Test case 1
      expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours.");
    
      // Test case 2
      expect(reachDestination(60, 15)).toBe("I should be there in 4 hours.");
    
      // Test case 3
      expect(reachDestination(30, 7.5)).toBe("I should be there in 4 hours.");
    
  });
});
