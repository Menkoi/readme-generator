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

  ## Description
  ${data.description}

  ## Table of contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [contributions](#Contributors)
  * [Test](#Test)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  https://img.shields.io/badge/dynamic/yaml?url=<URL>&label=<LABEL>&query=${data.license}>&color=<COLOR>&prefix=<PREFIX>&suffix=<SUFFIX>

  ## Contributors
  ${data.contributing}

  ## Test
  ${data.test}

  ## Repository
  ${data.repo}

  # GitHub
  - ${data.github}
  - [Github Profile] (https://github.com/${data.github})
  - ${data.email}


`;
}

module.exports = generateMarkdown;
