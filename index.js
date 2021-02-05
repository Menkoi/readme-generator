// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile } = require('./utils/generate-site.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'what is your  project name? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide your project's description (Required)",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
                return false;
            }
        }
    },
    {
        type: "type",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage:"
    },
    {
        type: "input",
        name: "license",
        message: "Please provide the project license or your badge link"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the project contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide project tests"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },

  ]);
};

questions()
.then(data => {
    return generateMarkdown(data);
 })
 .then(pageHTML => {
    return writeFile(pageHTML);
})

// TODO: Create a function to write README file
//fs.writeFile('./README.md',generateMarkdown(data, githubInfo) , err => {
  //  if(err) throw err;

  //  console.log('README complete! check out README.md to see the output!');
//});

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
