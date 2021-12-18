function generateMarkdown(data) {
  `
  # ${data.Title}
  https://github.com/${data.Username}/${data.Title}
  # Description
  ${data.Description}
  # Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#licsense)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)
  # Installation
  The following must be installed to run this application
  ${data.Installation}
  # Usage
  In order to use this app, ${data.Usage}
  # Licsense
  This project is licensed under the ${data.License} license.
  ![Githib license]
  # Contributing
  Contributors: ${data.contributors}
  # Tests
  The following isn needed to run the test: ${data.Tests}
  # Questions
  If you have any questions about the repo, open an issue or contact ${data.Username} ${data.Email}
  
  `
}

module.exports = generateMarkdown;
