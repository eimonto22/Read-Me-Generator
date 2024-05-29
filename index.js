// Required packages for the app
const fs = require ("fs");
const inquirer = require ("inquirer");
const path = require ("path");
const generateMarkdown = require ("./utils/generateMardown")

//Creates an array of questions for the readme that the user inputs

const questions = [
    {
        type: "input",
        name: "title",
        message: "Write the name of your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose and functionality of your progject.",
    },
    {
        type: "input",
        name: "scrennshot",
        message: "Input a relative path to display your screeenshot image.",
    },
    {
        type: "input",
        name: "link",
        message: "Select a license if applicable.",
        choices: ["MIT", "APACHE 2.0", "Boost 1.0", "MPL 2.0", "BSD2", "BSD3", "none"],
        //choices gives the user the option two pick form the selected above
    },
    {
        type: "input",
        name: "require",
        message: "List any dependencies used.",
    },
    {
        type: "input",
        name: "features",
        message: "List any special features your app provides.",
    },
    {
        type: "input",
        name: "usage",
        message: "Include languages or technologies used in the project.",
    },
    {
        type: "input",
        name: "creator",
        message: "Input your Github username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide a valid email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors, tutorial links, or Github usernames.",
        default: "",
    },
    {
        type: "input",
        name: "tests",
        message: "Provide a walkthrough of required test if applicable.",
    },
];

// This initializes the app
function init () {
    inquirer.createPromptModule(questions).then((responses) => {
        console.log("Creating Professional Read.md File..");
        writeToFile("./dist/ReadE.md", generateMarkdown({...responses}));
    }); 
}
init();

// writes the readme.md file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}