function generateMarkdown(answers, data) {
  return `
<h1 align="center">${answers.title}</h1>

<p align="center" margin="35px">
  <a>
    <img src="https://img.shields.io/badge/Author%3A-Kenan%20Deari-blue"/></>
  <a>
  <a>
  <img src="https://img.shields.io/badge/Release%20Version%20-1.0-orange"/></>
  <a>
  </p>

## Description\n
${answers.description}

## Contents<br>
**[Installation](#Installation)**<br>
**[Usage](#Usage)**<br>
**[License](#License)**</br>
**[Contributors](#Contributors)**<br>
**[Tests](#Tests)**<br>
**[Contact](#Contact)**<br>


## **Installation**<br>
${answers.install}


## **Usage**<br>
${answers.usage}


## **License**<br>
${answers.license}


## **Contributors**<br>
${answers.contributors}


## **Tests**<br>
${answers.tests}


## **Contact**<br>
${answers.email}<br>


<img src="${data.avatar_url}" class="profile" align="left" height="80"/>
`;
}

module.exports = generateMarkdown;