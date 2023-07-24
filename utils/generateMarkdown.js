function renderLicenseBadge(license) {
  let badge = '';
  if (license === "None") {
    badge = '';
  } else if (license === "Apache 2.0") {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (license === "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  } else if (license === "MPL-2.0") {
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
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

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  ${renderLicenseLink(data.license)}
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

  
  ## License
  MIT License
  Copyright (c) 2023 Aaron

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  `;
}

module.exports = generateMarkdown;