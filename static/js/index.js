// fetch roster and display to the list. Provide sorting functions.

async function initLineup() {
    var roster = await makeRoster();
    var rosterBox = document.getElementById("lineup");
    var playerList = ""
    roster.forEach(player => {
        let name = player["name"]
        playerList += 
        `<li>${name}&nbsp<button class="button" id="${name}" onclick="subtract('${name}'); newLineup()">X</button></li>`;
    })
    rosterBox.innerHTML = playerList;
    return await roster
}

async function subtract(playerName) {
    roster = Promise.resolve(roster).then(r => r.filter(player => player["name"] != playerName));
}

async function sort() {
    roster = await roster;
    var newRoster = [];
    var kickers = [];
    var shortGamers = [];
    var runners = [];

    var numCells = Math.floor(roster.length / 4)
    // Insert power kickers
    roster.sort((a,b)=> a["power"]-b["power"])
    for (i=0;i<numCells;i++) {
        kickers.push(roster.pop())
    }
    // Insert short-gamers
    roster.sort((a,b)=> a["technique"]-b["technique"])
    for (i=0;i<numCells;i++) {
        shortGamers.push(roster.pop())
    }
    // Insert fast runners
    roster.sort((a,b)=> a["speed"]-b["speed"])
    for (i=0;i<numCells;i++) {
        runners.push(roster.pop())
    }
    // Insert all into new roster
    for (i=0;i<numCells;i++) {
        if (runners.length >= i) {
            newRoster.push(runners[i]);
        }
        if (roster.length >= 1) {
            newRoster.push(roster.pop());
        }
        if (shortGamers.length >= i) {
            newRoster.push(shortGamers[i]);
        }
        if (kickers.length >= i) {
            newRoster.push(kickers[i]);
        }
    }
    // dump any remaining into the new roster
    while (roster.length > 0) {
        newRoster.push(roster.pop())
    }
    roster = Promise.resolve(newRoster);
    newLineup();
}

function powerSort(playerList) {

}

async function newLineup() {
    roster = await roster;
    var rosterBox = document.getElementById("lineup");
    var playerList = "";
    roster.forEach(player => {
        let name = player["name"]
        playerList += 
        `<li>${name}&nbsp<button class="button" id="${name}" onclick="subtract('${name}'); newLineup()">X</button></li>`;
    })
    rosterBox.innerHTML = playerList;
}

async function refresh() {
    roster = initLineup();
}

var roster = initLineup();