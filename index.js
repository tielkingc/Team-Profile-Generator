const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err)
          return
        }
    })
}

function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id'
        }
    ])
    .then(employeeData => {
        const content = generateHTML(employeeData);
        writeToFile('./README.md', content);
    })
}