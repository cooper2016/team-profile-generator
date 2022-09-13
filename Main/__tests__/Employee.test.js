const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Employee1", 1, "employee1@gmail.com");

      //verify that the new object has the correct properties
      expect(employee.name).toEqual("Employee1");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("employee1@gmail.com");

      //verify that fucntions can be called and return the correct properties
      expect(employee.getName()).toEqual("Employee1");
      expect(employee.getId()).toEqual(1);
      expect(employee.getEmail()).toEqual("employee1@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
