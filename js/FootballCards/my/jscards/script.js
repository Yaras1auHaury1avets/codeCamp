const criteria = document.getElementById("select");
const cards  = document.querySelector(".cards");
criteria.addEventListener("change", choosePlayers);
let team = [
    {
        name: "Sergio Almirón",
        Position: "forward",
        Number: 1,
        Nickname: "N/A",
    },
    {
        name: "Sergio Batista",
        Position: "midfielder",
        Number: 2,
        Nickname: "N/A",
    },
    {
        name: "Ricardo Bochini",
        Position: "midfielder",
        Number: 3,
        Nickname: "El Bocha",
    },
    {
       name: "Claudio Borghi", 
        Position: "midfielder",
        Number: 4,
        Nickname: "Bichi",
    },
    {
        name: "José Luis Brown",
        Position: "defender",
        Number: 5,
        Nickname: "Tata",
    },
    {
        name: "Daniel Passarella",
        Position: "defender",
        Number: 6,
        Nickname: "El Gran Capitán",
    },
    {
        name: "Jorge Burruchaga",
        Position: "forward",
        Number: 7,
        Nickname: "Burru",
    },
    {
        name: "Néstor Clausen",
        Position: "defender",
        Number: 8,
        Nickname: "N/A",
    },
    {
        name: "José Luis Cuciuffo",
        Position: "defender",
        Number: 9,
        Nickname: "El Cuchu",
    },
    {
       name: "(Captain) Diego Maradona", 
        Position: "midfielder",
        Number: 10,
        Nickname: "El Pibe de Oro",
    },
    {
       name: "Jorge Valdano", 
        Position: "forward",
        Number: 11,
        Nickname: "The Philosopher of Football",
    },
    {
        name: "Héctor Enrique",
Position: "midfielder",
Number: 12,
Nickname: "N/A",
    },
    {
        name: "Oscar Garré",
        Position: "defender",
        Number: 13,
        Nickname: "N/A",
    },
    {
        name: "Ricardo Giusti",
        Position: "midfielder",
        Number: 14,
        Nickname: "N/A",
    },
    {
        name: "Luis Islas",
        Position: "goalkeeper",
        Number: 15,
        Nickname: "El loco",
    },
    {
        name: "Julio Olarticoechea",
        Position: "defender",
        Number: 16,
        Nickname: "N/A",
    },
    {
        name: "Pedro Pasculli",
        Position: "forward",
        Number: 17,
        Nickname: "N/A",
    },
    {
        name: "Nery Pumpido",
        Position: "goalkeeper",
        Number: 18,
        Nickname: "N/A",
    },
    {
       name: "Oscar Ruggeri", 
        Position: "defender",
        Number: 19,
        Nickname: "El Cabezón",
    },
    {
        name: "Carlos Tapia",
        Position: "midfielder",
        Number: 20,
        Nickname: "N/A",
    },
    {
       name: "Marcelo Trobbiani", 
        Position: "midfielder",
        Number: 21,
        Nickname: "Calesita",
    },
    {
        name: "Héctor Zelada",
        Position: "goalkeeper",
        Number: 22,
        Nickname: "N/A",
    },
];

choosePlayers();

function choosePlayers(){
    cards.innerHTML = "";
    for(let i of team){
        if(criteria.value=="0") addPlayer(i);
        else if (criteria.value=="nicks" && i.Nickname!="N/A") addPlayer(i);
        else if(criteria.value==i.Position) addPlayer(i);
    }
}

function addPlayer(player){
    let str = `<div class="card">
                    <h2>${player.name}</h2>
                    <p>Position: ${player.Position}</p>
                    <p>Number: ${player.Number}</p>
                    <p>Nickname: ${player.Nickname}</p>
                </div>`;
      cards.insertAdjacentHTML("beforeend", str);  
}




