const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt(
    [
        {
            type: "input",
            message= "what is the project's title?",
            name: "title",
            validate: (value) => {
                if (value) { return true }
                else {
                    return "enter a value to continue."
                }
            },
        },

        {
            type: "input",
            message= "what is the project's description?",
            name: "description",
            validate: (value) => {
                if (value) { return true }
                else {
                    return "enter a value to continue."
                }
            },
        },

        {
            type: "input",
            message= "what is your GitHub username?",
            name: "username",
            validate: (value) => {
                if (value) { return true }
                else {
                    return "enter a value to continue."
                }
            },
        },

        {
            type: "input",
            message= "what is your email address?",
            name: "email",
            validate: (value) => {
                if (value) { return true }
                else {
                    return "enter a value to continue."
                }
            },
        },

        {
            type: "list",
            message= "what license(s) does your project have?",
            name: "licenses",
            choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
            validate: (value) => {
                if (value) { return true }
                else {
                    return "enter a value to continue."
                }
            },
        },

        {
            type: "input",
            message= "Installation Instructions:",
            name: "instructionsForInstall",

        },

        {
            type: "input",
            message= "User Guide for application:",
            name: "userGuide",
        },

        {
            type: "input",
            message= "Contributing Developers on application:",
            name: "contributingDevelopers",
        },

        {
            type: "input",
            message= "Tests",
            name: "tests",
        },
    ]
).then(({

}))