const axios = require("axios");
const util = require("util");
const fs = require("fs");
const inquirer = require("inquirer");
const questionsAsked = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt(questionsAsked);
};

async function init() {
    console.log("Welcome to this ReadMe Generator!");

    try {
        const answers = await promptUser();

        let github = await axios.get(`https://api.github.com/users/${answers.username}`)

        const md = generateMarkdown(answers, github.data);

        await writeFileAsync("README.md", md);

        console.log("You've created a new README file!");

    } catch (err) {
        console.log(err);

    }
};
init();

