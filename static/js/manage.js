var options = "";
for(var i = 1; i<11; i++ ) {
    options += `<option value="${i}">${i}</option>`;
}
document.getElementById('newPower').innerHTML=options;
document.getElementById('newTech').innerHTML=options;
document.getElementById('newSpeed').innerHTML=options;
document.getElementById('upPower').innerHTML=options;
document.getElementById('upTech').innerHTML=options;
document.getElementById('upSpeed').innerHTML=options;

refresh();

function refresh() {
    // Update all widgets
    refreshList();
    refreshRemove();
    refreshUpdate();
    return false;
}

function save() {
    // pass json data to a saveRoster.php
    result = fetch("save.php", {
        method: 'POST',
        body: JSON.stringify(roster),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.text())
    .then(txt => document.getElementById("savebutton").innerHTML = txt)
    .catch(err => err);
    return result

}

function addMember() {
    // make a new member and push to roster
    let playerName = document.getElementById("newMember").value;
    let female = true
    if (document.getElementById("newGender").value == "guy") {
        female = false
    }
    let power = document.getElementById("newPower").value; 
    let tech = document.getElementById("newTech").value;
    let speed = document.getElementById("newSpeed").value;
    let newPlayer = {
        "name": playerName,
        "female": female,
        "power": power,
        "technique": tech,
        "speed": speed
    };
    console.log(newPlayer);
    roster.push(newPlayer);
    return false;
}

function update() {
    // read each form field and replace member with new data
    let playerName = document.getElementById("upMember").value;
    let updateName = document.getElementById("upName").value;
    if (updateName == "" || updateName == "New Name") {
        updateName = playerName;
    }
    let power = document.getElementById("upPower").value; 
    let tech = document.getElementById("upTech").value;
    let speed = document.getElementById("upSpeed").value;
    let newPlayer = {
        "name": updateName,
        "female": true,
        "power": power,
        "technique": tech,
        "speed": speed
    };
    for (var i=0; i < roster.length; i++) {
        if (roster[i]["name"] == playerName) {
            newPlayer["female"] = roster[i]["female"];
            roster[i] = newPlayer;
            break
        }
    }
    return false;
}

function remove() {
    // read each form field and remove matching member from roster
    let playerName = document.getElementById("delMember").value;
    for (var i=0; i < roster.length; i++) {
        if (roster[i]["name"] == playerName) {
            roster.splice(i,1);
            break
        }
    }
    return false;
}

function refreshRemove() {
    // populate the dropdown for Remove widget
    let select = document.getElementById("delMember");
    let opts = "";
    for (var i=0;i<roster.length;i++) {
        opts += `<option>${roster[i]["name"]}</option>`
    }
    select.innerHTML = opts;
    return false;
}

function refreshUpdate() {
    // populate the dropdown for Update widget
    let select = document.getElementById("upMember");
    let opts = "";
    for (var i=0;i<roster.length;i++) {
        opts += `<option>${roster[i]["name"]}</option>`
    }
    select.innerHTML = opts;
    return false;
}

function sex(b) {
   if (b == true) {
       return "Female"
   }
   return "Male"
}

function refreshList() {
    // display each player in the roster table
    let memTable = document.getElementById("memberTable");
    let data = `<table><tr>
    <th>Name</th>
    <th>Gender</th>
    <th>Power</th>
    <th>Technique</th>
    <th>Speed</th>
  </tr><tbody>`;
  for (var i=0;i<roster.length;i++) { // iterating like a caveman
    let gender = sex(roster[i]["female"])
      let row = `<tr>
      <td>${roster[i]["name"]}</td>
      <td>${gender}</td>
      <td>${roster[i]["power"]}</td>
      <td>${roster[i]["technique"]}</td>
      <td>${roster[i]["speed"]}</td>
      </tr>
      `
      data += row;
  }
  data += "</tbody></table>"
  memTable.innerHTML = data;
  return false;
}