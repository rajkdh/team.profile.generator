const createTeam = team => {
    const generateManager = manager => {
        return `
        <div class="employee-card" id="manager-card">
    <div class="header" id="manager-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li>ID: ${manager.getId()}</li>
            <li>Email:${manager.getEmail()}</li>
            <li>Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>
        `;
    };
    const generateEngineer = engineer => {
        return `
        <div class="employee-card" id="engineer-card">
    <div class="header" id="engineer-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li>ID: ${engineer.getId()}</li>
            <li>Email:${engineer.getEmail()}</li>
            <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
        </ul>           
    </div>
</div>
        `; 
    };
const generateIntern = intern => {
        return `
    <div class="employee-card" id="intern-card>
        <div class="header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title">${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li>ID: ${intern.getId()}</li>
                <li>Email:${intern.getEmail()}</li>
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
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class= container>
        <div class=>           
                <h1 class="text-center text-white">My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
