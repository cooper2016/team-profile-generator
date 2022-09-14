const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const manager = new Manager(
        "Employee1",
        1,
        "employee1@gmail.com",
        "(555)444-3333"
      );

      //verify that the new object has the correct properties
      expect(manager.name).toEqual("Employee1");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("employee1@gmail.com");
      expect(manager.officeNumber).toEqual("(555)444-3333");

      //verify that fucntions can be called and return the correct properties
      expect(manager.getName()).toEqual("Employee1");
      expect(manager.getId()).toEqual(1);
      expect(manager.getEmail()).toEqual("employee1@gmail.com");
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
