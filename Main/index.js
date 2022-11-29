// include dependeancies
const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/Manager");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");

//array of our team members
const team = [];

// questions that will be asked when the app starts about manager
const managerQuestions = [
  {
    type: "input",
    message: "What is your team managers name?",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is your team managers id",
    name: "managerId",
  },
  {
    type: "input",
    message: "What is your team managers email?",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "What is your team managers office number?",
    name: "managerPhone",
  },
];

const engineerPrompt = [
  {
    type: "input",
    message: "What is the engineers name?",
    name: "engineerName",
  },
  {
    type: "input",
    message: "What is the engineers id?",
    name: "engineerID",
  },
  {
    type: "input",
    message: "What is the engineers email?",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "What is the engineers Github?",
    name: "engineerGithub",
  },
];

const internPrompt = [
  {
    type: "input",
    message: "What is the interns name?",
    name: "internName",
  },
  {
    type: "input",
    message: "What is the interns id?",
    name: "internID",
  },
  {
    type: "input",
    message: "What is the interns email?",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Where does the intern go to school?",
    name: "internSchool",
  },
];

const continuePrompt = [
  {
    type: "checkbox",
    message: "Would you like to add an Engineer, Intern, or no one?",
    name: "addMember",
    choices: ["Engineer", "Intern", "None"],
  },
];

// initialization function
const init = () => {
  //ask client for team manager information
  inquirer.prompt(managerQuestions).then((answer) => {
    const manager = new Manager(
      answer.managerName,
      answer.managerId,
      answer.managerEmail,
      answer.managerPhone
    );
    team.push(manager);
    continueFunction();
  });
};

const continueFunction = () => {};

// Function to write out HTML File
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created index.html file!")
  );
}

init();
