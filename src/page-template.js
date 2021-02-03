const generateReadme = (projectTitle, projectDes) => {
    return`
    ${projectTitle} 
    ==========================

    DESCRIPTION
    -----------
    ${projectDes}
    `;
}

module.exports= generateReadme;