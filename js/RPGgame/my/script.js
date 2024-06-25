let xp = 0;
let health = 100;
let gold = 50;
let weaponIndex = 0;
let monsterLife = 0;
let monsterIndex = 0;
const xpText = document.querySelector("#XP");
const healthText = document.querySelector("#health");
const goldText = document.querySelector("#gold");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const monsterStats = document.querySelector("#monster_stats");
const monsterName = document.querySelector("#monsterName");
const monsterHealth = document.querySelector("#monsterHealth");

const weapons = {
    0 : ["stick", 10],
    1 : ["knife", 30],
    2 : ["hammer", 50],
    3 : ["sword", 100],
}

const monsters = {
    0 : ["Slim", 15, 45],
    1 : ["Beast", 40, 120],
    2 : ["Dragon", 100, 300],
}

let weapon = ["stick"];

button1.onclick = goToStore;
button2.onclick = goToCave;
button3.onclick = fightDragon;

function goToCave(){
    button1.innerText = "Fight slime";
    button2.innerText = "Fight beast";
    button3.innerText = "Go to town square";
    button1.onclick = fightSlime;
    button2.onclick = fightBeast;
    button3.onclick = goToSquare;
    text.innerText = "You enter the cave! Fight or die!!! Or run away, if you are pussy!";  
}

function fightBeast(){
    button1.innerText = "Atack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
   
    text.innerText = "Kill the monster!!!";
    monsterIndex = 1;
    monsterLife = monsters[monsterIndex][2];
    monsterStats.style.display = "block";
    monsterHealth.innerText =  monsterLife;
    monsterName.innerText = monsters[monsterIndex][0];
    button1.onclick = attack;
    button2.onclick = dodge;
    button3.onclick = goToSquare;
}

function reset(){
     xp = 0;
 health = 100;
 gold = 50;
 weaponIndex = 0;
monsterLife = 0;
 monsterIndex = 0;
 button2.style.display = "inline";
 button3.style.display = "inline";
 button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goToStore;
    button2.onclick = goToCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. Do something, don't stay like a dumbass!";
}

function fightDragon(){
    button1.innerText = "Atack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    
    text.innerText = "Kill the monster!!!";
    monsterIndex = 2;
    monsterLife = monsters[monsterIndex][2];
    monsterStats.style.display = "block";
    monsterHealth.innerText =  monsterLife;
    monsterName.innerText = monsters[monsterIndex][0];
    button1.onclick = attack;
    button2.onclick = dodge;
    button3.onclick = goToSquare;
}

function fightSlime(){
    button1.innerText = "Atack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    
    text.innerText = "Kill the monster!!!";
    monsterIndex = 0;
    monsterLife = monsters[monsterIndex][2];
    monsterStats.style.display = "block";
    monsterHealth.innerText =  monsterLife;
    monsterName.innerText = monsters[monsterIndex][0];
    button1.onclick = attack;
    button2.onclick = dodge;
    button3.onclick = goToSquare;
    
}

function attack(){
    let monsterHit = Math.floor(Math.random()*(monsters[monsterIndex][1] + 1));
    let heroHit = Math.floor(Math.random()*(weapons[weaponIndex][1] + 1));
    health -= monsterHit;
    monsterLife -= heroHit;
    if(health<=0) {
        monsterStats.style.display = "none";
        text.innerText = monsters[monsterIndex][0] + " kills you!!! You are screwed!!!";
        healthText.innerText = "0";
        button1.innerText = "Play again";
        button2.style.display = "none";
        button3.style.display = "none";
        button1.onclick = reset;
    }
    else if(monsterIndex==2 && monsterLife<=0){
        monsterStats.style.display = "none";
        text.innerText = "You kill the dragon and win the game!!! Unbelievable!!!";
        button1.innerText = "Play again";
        button2.style.display = "none";
        button3.style.display = "none";
        button1.onclick = reset;
    }
    else if(monsterLife<=0){
        monsterStats.style.display = "none";
        text.innerText = monsters[monsterIndex][0] + " is dead!!! Take your gold!!!";
        gold += monsters[monsterIndex][1];
        goldText.innerText = gold;
        button1.innerText = "Fight slime";
    button2.innerText = "Fight beast";
    button3.innerText = "Go to town square";
    button1.onclick = fightSlime;
    button2.onclick = fightBeast;
    button3.onclick = goToSquare;
    }
    else {
        healthText.innerText = health;
        monsterHealth.innerText = monsterLife;
        button1.innerText = "Atack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    button1.onclick = attack;
    button2.onclick = dodge;
    button3.onclick = goToSquare;
    text.innerText = "Kill the monster!!!";
    }
}


function dodge(){
    button1.innerText = "Atack";
    button2.innerText = "Dodge";
    button3.innerText = "Run";
    button1.onclick = attack;
    button2.onclick = dodge;
    button3.onclick = goToSquare;
    text.innerText = "What a pussy!!! Fight! You can't win without attacks!";
}



function goToStore(){
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square";
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goToSquare;
    text.innerText = "You are in the store. Buy some shit or fuck off!";
}

function buyWeapon(){
  
    if(checkEnoughGold("weapon")){
        if(isNotBestWeapon()){
            
            gold -=30;
            goldText.innerText = gold;
            weaponIndex++;
            weapon.push(weapons[weaponIndex][0]);
            text.innerText = "You bought a " + weapon[weapon.length-1] +". Now you have " + weapon + "in your bag.";
        }
    }
}



function isNotBestWeapon(){
    if(weaponIndex==3){
       
        text.innerText = "You have the most powerful weapon. No upgrade is available";
        return false;
    }
    return true;
}

function buyHealth(){
if(checkEnoughGold("health")){
health += 10;
gold -= 10;
healthText.innerText = health;
goldText.innerText = gold;
text.innerText = "You bought some health, but you'll die anyway!"
}
}

function checkEnoughGold(purchase){
if(purchase=="health"){
    if(gold<10) text.innerText = "Looser!!! You have no money to buy more health!";
    return gold>=10;
}
if(gold<30) text.innerText = "Looser!!! You have no money to buy new weapon!";
return gold>=30;
}

function goToSquare(){
    button1.innerText = "Go to store";
    button2.innerText = "Go to cave";
    button3.innerText = "Fight dragon";
    button1.onclick = goToStore;
    button2.onclick = goToCave;
    button3.onclick = fightDragon;
    text.innerText = "You are in the town square. Do something, don't stay like a dumbass!";
}
