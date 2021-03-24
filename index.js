const { TestScheduler } = require("@jest/core");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./dist/generateHTML");
const members = [];

// describe("Employee", ( => {
//     describe("Initialization", () => {
//         test("Can initialize an employee object", () => {
//             const e = new Employee();
//         })
//     })
// }));

determineEmployee()
function determineEmployee(){
    inquirer
      .prompt([
    {
      type: "list",
      name: "role",
      message: "What's the position?",
      choices: ["Manager", "Engineer", "Intern", "That's all of them"],
    },
])
.then((answer) => {
    switch (answer.role) {
        case "Manager":
            managerData();
            break;
        
        case "Engineer":
            engineerData();
            break;
        
        case "Intern":
            internData();
            break;
        
        case "That's all of them":
            generateHTML();
            break;
        
    }
});
}

function managerData(){
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is your Employee's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail address?",
    },
    {
      type: "number",
      name: "roomNumber",
      message: "What is your room number?",
    //   when: (answers) => answers.role === "Manager",
    },
])
.then((answer) => {
    const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        dep = (`Room Number: ` + answer.roomNumber),
    );
    members.push(manager);
    determineEmployee();
});
}

function engineerData(){
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Employee's name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is the Employee's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Employee's e-mail address?",
    },
    {
       type: "input",
       name: "github",
       message: "What is their Github username?",
    //    when: (answers) => answers.role === "Engineer",
    },
])
.then((answer) => {
    const engineer = new Engineer (
        answer.name,
        answer.id,
        answer.email,
        dep = (`Github: ` + `<a href="http://www.github.com/` + answer.github +`">` + answer.github + `</a>`)
    );
    members.push(engineer);
    determineEmployee();
});
}


function internData(){
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Employee's name?",
    },
    {
      type: "number",
      name: "id",
      message: "What is the Employee's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Employee's e-mail address?",
    },
    {
        type: "input",
        name: "school",
        message: "What school do they go to?",
     //    when: (answers) => answers.role === "Intern",
     },
 
])
.then((answer) => {
    const intern = new Intern (
        answer.name,
        answer.id,
        answer.email,
        dep = (`School: `+ answer.school)
    );
    members.push(intern);
    determineEmployee();
});
}


function saveTheFile(data) {
     fs.writeFile("./dist/index.html", generateHTML(data), function (err) {
      if (err) {
          return console.log(err);
     }
      console.log("File created");
