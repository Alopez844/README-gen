// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const utils = require("utils");

const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the name of the project?",
    name:"Title",
}, {
    type: "input",
    message: "What is the project about? Detailed Description",
    name:"Description",
}, {
    type: "input",
    message: "Table of Contents",
    name:"Table of Contents",
}, {
    type: "input",
    message: "Describe installation process if needed.",
    name:"Installation",
}, {
    type: "input",
    message: "What is the project used for?",
    name:"Usage",
}, {
    type: "input",
    message: "What liscence is being used?",
    name:"License",
}, {
    type: "input",
    message: "Who contributed to this project?:",
    name:"Contributing",
}, {
    type: "input",
    message: "Waht command are needed to text the app?",
    name:"Tests",
}, {
    type: "input",
    message: "Contact info for inquiries?",
    name:"Questions",
}, {
    type: "input",
    message: "What is your Github username?",
    name:"Usernme",
}, {
    type: "input",
    message: "What is your email address?",
    name:"Email",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }     
        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generateMarkdown(data));
        })
}

// Function call to initialize app
init();
