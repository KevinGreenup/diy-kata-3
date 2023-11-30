const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
  
      // Test case 1
      const namesArray1 = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }];
      expect(joinNames(namesArray1)).toBe('Bart, Lisa & Maggie');
    
      // Test case 2
      const namesArray2 = [{ name: 'John' }, { name: 'Doe' }];
      expect(joinNames(namesArray2)).toBe('John & Doe');
    
      // Test case 3
      const namesArray3 = [{ name: 'Alice' }];
      expect(joinNames(namesArray3)).toBe('Alice');
    
      // Test case 4 (empty array)
      const namesArray4 = [];
      expect(joinNames(namesArray4)).toBe('');
    
    });
  });
