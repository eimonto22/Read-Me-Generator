// creates a function that renders and returns a license badge based on which license is chosen
function renderLiscenseBadge(license) {
    if (license !== "none") {
        return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

//Creates a function to generate a mardown Readme
function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLiscenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Deployed Application URL
    ${data.link}
    ## Screenshot
    ![alt-text](${data.screenshot})
    ## Table of Contents
    * Table of Contents
    * [freatures] (#features)
    * [Languagegs & Dependencies](#languageanddependencies)
    * [How to Use This Application](#HowtoUseThisApplication)
    * [Contributors](#contributors)
    * [Testing](#testing)
    * [Questions](#questions)
    ## Features
    ${data.features}
    ## Languages & Dependencies
    ${data.require}
    ## How to Use This Application:
    ${data.usage}
    ## Contributors
    ${data.contributors}
    ## Testing
    ${data.test}
    ## Questions
    Send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).)`;
}


module.exports = generateMarkdown;