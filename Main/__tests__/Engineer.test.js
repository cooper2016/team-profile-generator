const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const engineer = new Engineer(
        "Employee1",
        1,
        "employee1@gmail.com",
        "myGithub.com"
      );

      //verify that the new object has the correct properties
      expect(engineer.name).toEqual("Employee1");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("employee1@gmail.com");
      expect(engineer.github).toEqual("myGithub.com");

      //verify that fucntions can be called and return the correct properties
      expect(engineer.getName()).toEqual("Employee1");
      expect(engineer.getId()).toEqual(1);
      expect(engineer.getEmail()).toEqual("employee1@gmail.com");
      expect(engineer.getGithub()).toEqual("myGithub.com");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
