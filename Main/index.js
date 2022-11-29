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
const managerPrompts = [
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

const engineerPrompts = [
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
    type: "list",
    message: "Would you like to add an Engineer, Intern, or no one?",
    name: "addMember",
    choices: ["Engineer", "Intern", "None"],
  },
];

// initialization function
const init = () => {
  //ask client for team manager information
  inquirer.prompt(managerPrompts).then((answer) => {
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

//Function for adding additional team members
const continueFunction = () => {
  inquirer.prompt(continuePrompt).then((data) => {
    //if add engineer, run engineer prompt
    if (data.addMember === "Engineer") {
      inquirer.prompt(engineerPrompts).then((data) => {
        const engineer = new Engineer(
          data.engineerName,
          data.engineerID,
          data.engineerEmail,
          data.engineerGithub
        );
        //add engineer to the team
        team.push(engineer);
        continueFunction();
      });
      //if Intern run intern prompt
    } else if (data.addMember === "Intern") {
      inquirer.prompt(internPrompts).then((data) => {
        const intern = new Intern(
          data.internName,
          data.internID,
          data.internEmail,
          data.internSchool
        );
        //Add intern to team
        team.push(intern);
        continueFunction();
      });
    } else {
      writeToFile("index.html", html);
    }
  });
};

const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="text-center fs-3 bg-dark text-white py-5">Team Profile</header>

    <main class=" container d-grid gap-3">
          <!-- Employee Cards go here -->
           

    </main>
    
    <script type="module" src="index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>
</html>`;

// Function to write out HTML File
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log("Successfully created index.html file!")
  );
}

init();
