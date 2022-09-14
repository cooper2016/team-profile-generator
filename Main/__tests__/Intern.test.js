const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      const intern = new Intern(
        "Employee1",
        1,
        "employee1@gmail.com",
        "University of Minnesota"
      );

      //verify that the new object has the correct properties
      expect(intern.name).toEqual("Employee1");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("employee1@gmail.com");
      expect(intern.school).toEqual("University of Minnesota");

      //verify that fucntions can be called and return the correct properties
      expect(intern.getName()).toEqual("Employee1");
      expect(intern.getId()).toEqual(1);
      expect(intern.getEmail()).toEqual("employee1@gmail.com");
      expect(intern.getSchool()).toEqual("University of Minnesota");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
