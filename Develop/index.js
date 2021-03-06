// All of my packages. 
// The inquirer package is needed to get the users input from the terminal.
const inquirer = require('inquirer');
// The fs package is needed to write the README.md file to the file system.
const fs = require('fs');
// This is needed to connect the two javascript files.
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user to input
const questions = [
    {
        type:"input",
        message: "Enter a title for your project",
        name: "title"

    },
    {
        type:"input",
        message: "Enter a description for your project",
        name: "description",
    },
    {
        type:"input",
        message: "Enter Project installation instructions",
        name: "install"
    },
    {
        type:"input",
        message: "Enter project usage information",
        name: "usage",
    },
    {
        type:"input",
        message: "Enter project test information",
        name: "test",
    },
    {
        type:"input",
        message: "Enter any collaborators and their contact info for your project",
        name: "credits"

    },
    {
        type:"input",
        message: "Enter your github username",
        name: "github"
    },
    {
        type:"input",
        message: "Enter your Email address",
        name: "email"
    },
    {
        type:"list",
        message: "Choose your project's license:",
        choices:["Apache License 2.0", "GNU GPLv3", "ISC", "MIT", "None"],
        name: "license",
    }
];

// This function will write the README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        }
        else { 
            console.log("You've successfully generated the README.md file!")
        }
    });
}

// This function will initialize app.
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
 init();
  