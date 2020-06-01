const questionsAsked = [
  // created title reference
  {
    message: "What is the Title of your repo?",
    name: "title"
  },
  // link to app URL
  {
    message: "Would you like a link to website?",
    name: "appLink"
  },
  // created ref for description
  {
    message: "Provide a description of your project",
    name: "description"
  },
  // created ref for info to install
  {
    message: "What command is used to Install?",
    name: "install"
  },
  // ref for usage of repo created
  {
    message: "What is this repo used for?",
    name: "usage"
  },
  // created ref for license 
  {
    message: "Please select a License?",
    name: "license",
    type: "list",
    choices: ["mit", "gpl", "apache-2.0", "mpl-2.0", "other", "none"]
  },
  // created ref for contributors 
  {
    message: "Contributors to this project",
    name: "contributors"
  },
  // created ref to run tests if needed
  {
    message: "Run Tests?",
    name: "tests"
  },
  // created ref for email
  {
    message: "Input GitHub email",
    name: "email"
  },
  // created ref for github username
  {
    message: "Input your GitHub username",
    name: "username"
  }
];

module.exports = questionsAsked;