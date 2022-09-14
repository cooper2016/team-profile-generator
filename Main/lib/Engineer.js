const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(github) {
    const name = super.getName();
    const id = super.getId();
    const email = super.getEmail();

    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
