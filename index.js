const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
teamMembers = [];
 
run(){
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
    const engineer = new Engineer(answers.engineerName, answers.EngineerEmail, )
})
}
};

buildTeam();