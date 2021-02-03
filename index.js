const fs = require('fs');
const generateReadme = require('./src/page-template.js');
const cmdInput = process.argv.slice(2);
const [name, info] = cmdInput;

//const printcmdInput = (cmdInput) => {
 //   cmdInput.forEach(profileItem => console.log(profileItem));
 //   console.log("==========================");
 // };
  
  //printcmdInput(cmdInput);

 
fs.writeFile('README.md', generateReadme(name, info), err => {
    if (err) throw err;
    
    console.log("README complete! Check out README.md to see output!");
});