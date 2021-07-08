const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt(
    [
        {
            type: "input",
            message= "what is the project's title?",
            name: "title",
        },

        {
            type: "input",
            message= "what is the project's description?",
            name: "description",
        },

        {
            type: "input",
            message= "what is your GitHub username?",
            name: "github",
        },

        {
            type: "input",
            message= "what is your email address?",
            name: "email",
        },

        {
            type: "list",
            message= "what license(s) does your project have?",
            name: "licenses",
            choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
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
    title,
    description,
    username,
    email,
    licenses,
    instructionsForInstall,
    userGuide,
    contributingDevelopers,
    tests
}) => {
    const template =
        createNewFile(title, template);
}
);

function createNewFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Your README has been created");
    });
};
