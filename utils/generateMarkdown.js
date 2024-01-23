// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.proTitle}
  
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
    
    ## Description 
    ${data.proDesc}
  
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation 
    ${data.proInstall}
  
    ## Usage 
    ${data.proUsage}
  
    ## License 
    This project is license under ${data.proLicense}
  
    ## Contributing 
    ${data.proContributor}
  
    ## Tests
    ${data.proTest}
  
    ## Questions
    To get in contact regarding questions or contribution please reach this address - ${data.email}. More projects here: https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
