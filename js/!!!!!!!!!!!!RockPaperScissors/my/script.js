
const rulesButton = document.querySelector("#rules-button");
const rulesText = document.querySelector("#rules");
const playerScoreText = document.querySelector("#player-score");
const compScoreText = document.querySelector("#comp-score");
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resetButton = document.querySelector("#reset");
const announce = document.querySelector("h3");
let playerScore = 0;
let compScore = 0;
let isRulesHidden = true;
const rulesHtml = "<p>You will be playing against the computer.</p>"+
"<p>You can choose between Rock, Paper, and Scissors.</p>" +
"<p>The first one to three points wins.</p>" +
"<p>Here are the rules to getting a point in the game:</p>" +
"<p>Rock beats Scissors<br>Scissors beats Paper<br>Paper beats Rock</p>" +
"<p>If the player and computer choose the same option (Ex. Paper and Paper), then no one gets the point.</p>";

rulesButton.onclick = rules;
resetButton.onclick = reset;
rockButton.onclick = rock;
paperButton.onclick = paper;
scissorsButton.onclick = scissors;

function rock(){
    play("rock");
}

function paper(){
    play("paper");
}

function scissors(){
    play("scissors");
}

function rules(){
    if(isRulesHidden) {
        rulesText.innerHTML = rulesHtml;
        isRulesHidden = false;
    }
    else {
        rulesText.innerHTML = "";
        isRulesHidden = true;
    }
}

function reset(){
    rulesText.innerHTML = "";
        isRulesHidden = true;
        announce.innerText = "";
        playerScoreText.innerText = "Player Score: 0";
        compScoreText.innerText = "Computer Score: 0";
        playerScore = 0;
         compScore = 0;
}

function play(playerMove){
    
    let compMove = getComputerMove();
    if(playerMove==compMove) {
        draw(compMove);
    } else if(playerMove=="rock"){
        
        if(compMove=="paper") lose(compMove);
        
        else win(compMove);
        
    } else if(playerMove=="paper"){
        if(compMove=="rock") win(compMove);
        else lose(compMove);
    } else {
        if(compMove=="rock") lose(compMove);
        else win(compMove);
    }
}

function getComputerMove(){
    const compMove = Math.floor(Math.random()*3);
    switch(compMove){
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}

function win(compMove){
    
    playerScore++;
    playerScoreText.innerText = `Player Score: ${playerScore}`;
 announce.innerText = `COMPUTER CHOOSE ${compMove.toUpperCase()}! YOU WIN!!!`;
}

function lose(compMove){
    compScore++;
    compScoreText.innerText = `Computer Score: ${compScore}`;
    announce.innerText = `COMPUTER CHOOSE ${compMove.toUpperCase()}! YOU LOSE!!!`;
}

function draw(compMove){
    announce.innerText = `COMPUTER CHOOSE ${compMove.toUpperCase()}! DRAW!!!`;
}

