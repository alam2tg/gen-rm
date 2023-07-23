function renderLicenseBadge(license) {
  let badge = '';
  if (license === "none") {  
    return "";
  } else if (license === "Apache 2.0") {
    `![Github license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "MIT") {
    `![Github license](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "MPL-2.0") {
    `![Github license](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  }
  return badge;
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
  
  ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Table of Contents
  * [License](#license)
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