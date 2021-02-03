const cmdInput = process.argv.slice(2, process.argv.length);


const printcmdInput = (cmdInput) => {
    
    cmdInput.forEach(profileItem => console.log(profileItem));

    console.log("==========================");

  };
  
  printcmdInput(cmdInput);