// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title} 

![badmath](https://img.shields.io/badge/License-${data.license}-red)


  ## Description
  ${data.description}

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [contributions](#Contributors)
  * [Test](#Test)
  * [Repository](#Repository)
  * [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributors
  ${data.contributing}

  ## Test
  ${data.test}

  ## Repository
  ${data.repo}

  ## Questions? Contact me

  - ${data.github}

  - https://github.com/${data.github}

  - ${data.email}

`;
}

module.exports = generateMarkdown;
