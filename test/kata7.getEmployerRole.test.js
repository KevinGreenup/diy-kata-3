const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
      // Test case 1
      const employees1 = [
        { name: 'Satti', role: 'Developer' },
        { name: 'Jenny', role: 'Sales Associate' },
        { name: 'Javid', role: 'Human Recommended Reading Assistant' }
      ];
      expect(getEmployerRole('Javid', employees1)).toBe('Human Recommended Reading Assistant');
    
      // Test case 2
      const employees2 = [
        { name: 'John', role: 'Manager' },
        { name: 'Alice', role: 'Designer' },
        { name: 'Bob', role: 'Engineer' }
      ];
      expect(getEmployerRole('Alice', employees2)).toBe('Designer');
    
      // Test case 3 (Employee not found)
      const employees3 = [
        { name: 'Tom', role: 'Accountant' },
        { name: 'Emma', role: 'Administrator' }
      ];
      expect(getEmployerRole('Charlie', employees3)).toBe('Employee not found');
  });
});
