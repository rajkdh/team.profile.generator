const createTeam = team => {
    const generateManager = manager => {
        return `
        <div class="card" id="manager-card">
        <div class="card-header" id="manager">
            <h2>${manager.getName()}</h2>
            <h3>${manager.getRole()}</h3>
        </div>
        <div class="list">
            <ul class="list-details">
                <li>ID: ${manager.getId()}</li>
                <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li>Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>  
        `;
    };
    const generateEngineer = engineer => {
        return `
    <div class="card" id="engineer-card">
        <div class="card-header" id="engineer">
            <h2>${engineer.getName()}</h2>
            <h3>${engineer.getRole()}</h3>
        </div>
        <div class="list">
            <ul class="list-details">
                <li>ID:  ${engineer.getId()}</li>
                <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `; 
    };
const generateIntern = intern => {
        return `
        <div class="card" id="intern-card">
        <div class="card-header" id="intern">
            <h2>${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
        </div>
        <div class="list">
            <ul class="list-details">
                <li>ID: ${intern.getId()}</li>
                <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li>School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
    };
    const html = [];

    html.push(team
        .filter(teamMembers => teamMembers.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(teamMembers => teamMembers.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(teamMembers => teamMembers.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="../src/assets/css/style.css">
    </head>
    
    <body>
        <div class="banner">           
            <h1>My Team</h1>
        </div>
        
        <div class="container">
                ${createTeam(team)}
        </div>   
   </body>
</html>
    `;
};
