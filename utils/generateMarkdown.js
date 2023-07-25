function renderLicenseBadge(license) {
	let badge = "";
	if (license === "None") {
		badge = "";
	} else if (license === "Apache 2.0") {
		badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
	} else if (license === "MIT") {
		badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
	} else if (license === "MPL-2.0") {
		badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
	}
	return badge;
}

function renderLicenseLink(license) {
	if (license === "none") {
		return "";
	} else {
		return (license = `* [License](#license)`);
	}
}

function renderLicenseSection(license) {
	if (license === "none") {
		return "";
	} else {
		return (license = `## License
    Licensed under the ${license} license.`);
	}
}

function generateMarkdown(data) {
	return `
  # ${data.title}
  ### by ${data.name}


  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}


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
  `;
}

module.exports = generateMarkdown;