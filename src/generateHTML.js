var Card = ``; 
function renderEmployees (data) {
    for (var i = 0; i < data.length; i++){
        if (data[i].getRole() === 'Intern') {
            Card = Card + `
            <div class="card">
            <div class="card-header bg-primary">
                ${data[i].getName()}<br>
                <span class="oi oi-book"></span> Intern
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border">ID: ${data[i].getID()}</li>
                    <li class="list-group-item border">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li class="list-group-item border">School: ${data[i].getSchool()}</li>
                </ul>
            </div>
            </div>
            `
        } else {
            Card = Card + `
            <div class="card">
            <div class="card-header bg-primary">
                ${data[i].getName()}<br>
                <span class="oi oi-laptop"></span> Engineer
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item border">ID: ${data[i].getID()}</li>
                    <li class="list-group-item border">Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></li>
                    <li class="list-group-item border">GitHub: <a href="https://www.github.com/${data[i].getGithub()}">${data[i].getGithub()}</a></li>
                </ul>
            </div>
            </div>
            `
        }
    }    
    return Card
}

function generateHTML (manager, employees) {
    const manCard = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <header class="bg-danger">My Team</header>
    <div class="main d-flex flex-wrap justify-content-evenly">
    <div class="card">
    <div class="card-header bg-primary">
        ${manager.getName()}<br>
        <span class="oi oi-briefcase"></span> Manager
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item border">ID: ${manager.getID()}</li>
            <li class="list-group-item border">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item border">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    </div>
    ${renderEmployees(employees)}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>
</html>
    `
    return manCard
}

module.exports = generateHTML;