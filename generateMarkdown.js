function renderLicenseBadge(license){
    
    switch(license){
        case 'Apache License v2.0':
            license = 'Apache%202.0';
            break;
            case 'GNU General Public License v3.0':
                license = 'GPL';
                break;
                case 'MIT License':
                    license = 'MIT';
                    break;

    }
    if (license !== 'None'){
        return `
        ![badge](https://img.shields.io/badge/License-${license}-blue)
        `;

    }else{
        return '';
    }
}
function renderLicenseLink(license){

    switch(license){
        case 'Apache License v2.0':
            return `
         [${license}] (https://choosealicense.com/licenses/apache-2.0/) 
         `;
         break;
         case 'GNU General Public License v3.0':
            return `
         [${license}] (https://choosealicense.com/licenses/gpl-3.0/) 
         `;
         break;
         case 'ISC':
            return `
         [${license}] (https://choosealicense.com/licenses/isc/) 
         `;
         break;
         case 'MIT License':
            return `
         [${license}] (https://choosealicense.com/licenses/mit/) 
         `;
         break;
         case 'None':
            return `
         [${license}] (https://choosealicense.com/licenses/unlicense/) 
         `;
         break;
         default:
             return `
             [${license}] (https://choosealicense.com/licenses/unlicense/) 
             `;  

    }
}
function renderLicenseSection(license){
    if (license !== 'None') {
      return `
      # License
      The application is covered under the following license:
      ${renderLicenseLink(license)}
      `;
        } else {
            return '';
        }
    }

    function generateMarkdown(data){
        console.log(data.license);
        return `
        # ${data.title}
        ${renderLicenseBadge(data.license)}

        ## Table of Contents
        
        *[Project Description](#project-description)
        *[Installation](#installation)
        * [Usage](#usage)
        * [License](#license)
        * [Contributions](#contributions)
        * [Test Instructions](#test-instructions)
        * [Questions](#questions)
        
        # Project Description
        $
    
    }
}