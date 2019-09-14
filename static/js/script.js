async function makeRoster(){
    return await fetch("static/JelloRoster.json").then(data => data.json());
}