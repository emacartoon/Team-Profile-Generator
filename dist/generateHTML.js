function generateHTML(members) {
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

let cards = ''; // the string we add on to
for (let i = 0; i < members.length; i++) {
    console.log(members[i])
    var data = members[i]
    const card = 
        `<div class="card">
        <div class="cardhead">
        <p id="name">${data.name}</p>
        <p id="role">${data.getRole()}</p>
        </div>
        <div class="cardbody">
        <div id="id" class="revver"><p>${data.id}</p></div>
        <div id="email" class="revver"><p>E-mail: <a href="mailto:${data.email}">${data.email}</a></p></div>
        <div id="dependent" class="revver"><p>${data.dep}</p></div>
        </div>
        </div>`
    ;
    //cardsGen.push(cards);
    //instead of array, how do wee add to a string, "make a big string"
     cards = cards.concat(card)
};

const footer =`
</div>
</main>
<footer>
<p>&copy; 2021 Emily "Emma" Lysyk</p>
</footer>
</body>
</html>`;

    return header + cards + footer;
}

module.exports = generateHTML;
