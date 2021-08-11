// This function will return a license badge based on which license is passed in.

function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "\n[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n";
  } else if (license === "GNU GPLv3") {
    return "\n[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)\n";
  } else if (license === "ISC") {
    return "\n[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)\n";
  } else if (license === "MIT") {
    return "\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
  }
  //This will return a empty string if there is no license.
  else {
    return "";
  }
}

// This function will returns the license link.
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "(https://www.apache.org/licenses/LICENSE-2.0)";
  } else if (license === "GNU GPLv3") {
    return "(https://www.gnu.org/licenses/gpl-3.0.en.html)";
  } else if (license === "ISC") {
    return "(https://www.isc.org/licenses/)";
  } else if (license === "MIT") {
    return "(https://www.mit.edu/~amini/LICENSE.md)";
  }
  //This will return a empty string if there is no license.
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README

function renderLicenseSection(license) {
  if (license !== "None") {
    return `[Licensed under the ${license} license.]`;
  }
  //This will return a empty string if there is no license.
  else {
    return "";
  }
}

// the function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  ${renderLicenseBadge(response.license)}

  ## Description
${response.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Questions](#Questions)
* [Credits](#Credits)
* [License](#License)

## Installation
${response.install}

## Usage
${response.usage}

## Tests
${response.tests}

## Questions
Do you have questions? Contact me here:
* [GitHub](https://github.com/${response.github})
* [Email](${response.email})

## Credits 
${response.credits}

## License
${renderLicenseSection(response.license)}${renderLicenseLink(
    response.license
  )}`;
}

module.exports = generateMarkdown;
