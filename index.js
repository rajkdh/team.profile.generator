const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const createTeam = require('./src/generate');
teamMembers = [];
 
function run() {
   function buildTeam(){
    inquirer.prompt([{
        type: 'list',
        name: "employeeType",
        message: 'Please select the position of your employee:',
        choices: ['Manager', 'Engineer', 'Intern']
    }]).then(function (userInput) {
        switch(userInput.employeeType){

            case 'Engineer':

                addEngineer();

            break;

            case 'Manager':

                addManager();

            break;

            case 'Intern':

                addIntern();
            
            break;

            default:
                createHTML();

        }
    })
   }
function addEngineer(){
    inquirer.prompt([
    {
        type: 'input',
        name: 'engineerName',
        message:'What is the name of the employee?'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'what is their ID numner?'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is their email address?'
    },
    {
        tpye: 'input',
        name: 'engineerGithub',
        message: 'What is their gitHub profile username?'
    },
]).then(answers => {
    const engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerGithub);
    teamMembers.push(engineer);
    buildTeam();
})
}

function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "internId",
        message: "What is the intern's employee ID number?" 
      },

      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "internSchool",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        buildTeam();
    });

}
function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's employee ID number?"
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      buildTeam();
    });
  
  }
function createHTML() {
    const P = ['\\', '|', '/', '-'];
    let x = 0;
    const loader = setInterval(() => {
    process.stdout.write(`\r${P[x++]}`);
    x %= P.length;
    }, 250)

    setTimeout(() => {
    clearInterval(loader);
        }, 5000);

fs.writeFile("./dist/new-team.html", createTeam(teamMembers))
    


}
buildTeam();  


}

run();

