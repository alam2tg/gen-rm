// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none" || null) {
    return `!* [Github License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none" || null) {
    return `\n* * [License](#license)\n`;
  } else {
  return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== none || null) {
    return `
    ## License
    
    Licensed under the ${license} license.`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#instillation)
  * [Usage](#usage)
  * [Contact-Me](#contact-me)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions) 
  ${renderLicenseLink(data.license)};
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contact Me
  * Name - ${data.name}
  * Email - ${data.email}
  * Github - [${data.github}](https://github.com/${data.github})
  ## Credits
  ${data.credits}
  ## Tests
  ${data.tests}
  ## Questions
  Please send your questions [here](mailto:${data.email}
  `;
}

module.exports = generateMarkdown;


// const badge = "* [License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" 
// from github - https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba