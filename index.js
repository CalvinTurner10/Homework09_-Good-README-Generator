const fs = require ('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

const questions = [
        {

            type:'input',
            name: 'title',
            message: 'What title of the project?',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should have a title.');
                    return false;
                }
            }

        },
        {

            type:'input',
            name: 'description',
            message: 'Give a project description?',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should have a description.');
                    return false;
                }
            }

        },
        {

            type:'input',
            name: 'usage',
            message: 'Please provide a user story:',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should have a user story.');
                    return false;
                }
            }

        },
        {

            type:'input',
            name: 'installation',
            message: 'Provide the installation instructions:',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should have installation instructions.');
                    return false;
                }
            }

        },
        {

            type:'input',
            name: 'contributing',
            message: 'Provide the contribution guidelines:',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should have contribution guidelines.');
                    return false;
                }
            }

        },
        {

            type:'input',
            name: 'testing',
            message: 'Provide the testing instructions:',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should have testing instructions.');
                    return false;
                }
            }

        },
        {

            type:'list',
            name: 'license',
            message: 'What license will you use?',
            choices:[
                'Apache License v2.0',
                'GNU General Public License v3.0',
                'ISC',
                'MIT License',
                'None'
            ]

        },
        {

            type:'input',
            name: 'email',
            message: 'What is your email',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should your email.');
                    return false;
                }
            }

        },
        {

            type:'input',
            name: 'githubuser',
            message: 'What is your github username?',
            validate: input =>{
                if (input){
                    return true;

                } else{
                    console.log('The README should have your github username.');
                    return false;
                }
            }

        }
        
    
    ]
function formatLicense(license){
    switch (license){
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
    return license;


}


inquirer.prompt(questions).then(function(answers){
    console.log(generateMarkdown(answers));
    fs.writeFileSync(path.join(__dirname, 'README.md'), generateMarkdown(answers));
})
  