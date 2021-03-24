const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");
const members = require("/index.js");

const cards = "";

const header =
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="../dist/style.css" />
    <title>Team Profile</title>
</head>
<body>
    <header>
        <h1>Team Profile</h1>
    </header>
    <nav>
        <p>&nbsp</p>
    </nav>
    <main class="team">
        <div class="row">
`;

const cardsArr = members.map(push(cards) => {
        return `
        <div class="card">
        <div class="cardhead">
        <p id="name">${data.name}</p>
        <p id="role">${data.role}</p>
        </div>
        <div class="cardbody">
        <div id="id" class="revver"><p>${data.id}</p></div>
        <div id="email" class="revver"><p>E-mail: <a href="mailto:${data.email}">${data.email}</a></p></div>
        <div id="dependent" class="revver"><p>${data.dep}</p></div>
        </div>
        </div>`;
    });
    

const footer =`
            </div>
</main>
<footer>
<p>&copy; 2021 Emily "Emma" Lysyk</p>
</footer>
</body>
</html>`;
    
function generateHTML() {
    return header + cards + footer;
}

module.exports = generateHTML;
