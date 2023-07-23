function renderLicenseBadge(license) {
  if (license === "none") {  
    return "";
  } else if (license !== "none") {
      `* ![Github License](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  
    }
}

function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return license = `* [License](#license)`;
  }
}

function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return license = `## License
    
    Licensed under the ${license} license.`
  }  
}

function generateMarkdown(data) {
  return `
  # ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#instillation)
  * [Usage](#usage)
  * [Contact-Me](#contact-me)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions) 
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contact Me
  * Name - ${data.name}
  * Email - ${data.email}
  * Github - ![Github](https://github.com/${data.github})
  ## Credits
  ${data.credits}
  ## Tests
  ${data.tests}
  ## Questions
  Please send your questions [here](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;