const allPlayers = document.querySelectorAll(".card");
const nickNames = document.querySelectorAll(".nick");
const forward = document.querySelectorAll(".forward");
const midfielder = document.querySelectorAll(".midfielder");
const defender = document.querySelectorAll(".defender");
const goalkeeper = document.querySelectorAll(".goalkeeper");
let positions = [allPlayers, nickNames, forward, midfielder, defender, goalkeeper];
const criteria = document.getElementById("select");
criteria.addEventListener("change", viewPlayers);

function viewPlayers(){
    for(let i of allPlayers){
        i.style.display = "none";
    }

    for(let i of positions[+criteria.value]){
        i.style.display = "flex";
    }
}