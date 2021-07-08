function renderLicenseLink(license) { }
function renderLicenseBadge(license) { }
function renderLicenseSection(license) { }

function generateMarkdown(data) {
    return `# ${data.title}
    ## Table of Contents
    * [Description](#installation)
    * [Licenses](#licenses)
    * [Instructions For Install](#instructionsForInstall)
    * [User Guide](#userGuide)
    * [Contributing Developers](#contributingDevelopers)
    * [Tests](#tests)
    * 
    ## Description
    ${data.description}

    ## Licenses
    ${data.licenses}

    ## Instructions for Install
    ${data.instructionsForInstall}

    ## User Guide
    ${data.userGuide}

    ## Contributing Developers
    ${data.contributingDevelopers}

    ## Tests
    ${data.tests}



    # Contact
    * GitHub: ${data.username}
    * Email: ${data.email}`;
}

module.exports = generateMarkdown;