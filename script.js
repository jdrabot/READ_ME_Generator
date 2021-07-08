const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdowns.js");

const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the project's title?",
    },

    {
        type: "input",
        name: "description",
        message: "what is the project's description?",
    },

    {
        type: "input",
        name: "github",
        message: "what is your GitHub username?",
    },

    {
        type: "input",
        name: "email",
        message: "what is your email address?",
    },

    {
        type: "list",
        name: "licenses",
        message: "what license(s) does your project have?",
        choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
    },

    {
        type: "input",
        name: "instructionsForInstall",
        message: "Installation Instructions:",

    },

    {
        type: "input",
        name: "userGuide",
        message: "User Guide for application:",
    },

    {
        type: "input",
        name: "contributingDevelopers",
        message: "Contributing Developers on application:",
    },

    {
        type: "input",
        name: "tests",
        message: "Tests",
    },
]

function writeTheFile(fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log("Created README Successfully"));
};

function initialize() {
    inquirer.prompt(questions)
        .then((data) => {
            const answers = generateMarkdown(data);
            writeTheFile("README.md", answers);
        })
}

initialize();