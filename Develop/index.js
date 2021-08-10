// All of my packages. 
// The inquirer package is needed to get the users input from the terminal.
const inquirer = require('inquirer');
// The fs package is needed to write the README.md file to the file system.
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    
];

// This function will write the README file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            console.error(error);
        } return console.log("You've successfully generated the README file!")
    });
}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
