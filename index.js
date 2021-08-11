const fs = require('fs');
const inquirer = require('inquirer');
const { Manager, Intern, Engineer } = require('./lib/index.js');
const generateHTML = require('./src/generateHTML');
var manager;
var employees = [];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
    })
}

function  managerCard() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?"
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?"
        }
    ])
    .then(employeeData => {
        manager = new Manager(employeeData.name, employeeData.id, employeeData.email, employeeData.office)
        init();
    })
}

function internCard() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school is the intern from?"
        }
    ])
    .then(employeeData => {
        employees.push(new Intern(employeeData.name, employeeData.id, employeeData.email, employeeData.school))
        init();
    })
}

function  engineerCard() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engieer's id?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?"
        }
    ])
    .then(employeeData => {
        employees.push(new Engineer(employeeData.name, employeeData.id, employeeData.email, employeeData.github))
        init();
    })
}

function init() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Would you like to add an Intern or Engineer? Choose DONE when you are finished.',
            choices: ['Intern', 'Engineer', 'DONE']
        }
    ])
    .then(employeeData => {
        if (employeeData.choice === 'Intern') {
            internCard();
        } else if (employeeData.choice === 'Engineer') {
            engineerCard();
        } else {
            const content = generateHTML(manager, employees);
            writeToFile('./dist/index.html', content)
            console.log('Thank you!')
        }
    })
}

managerCard();
