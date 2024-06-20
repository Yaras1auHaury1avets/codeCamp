let xp = 0;
let health = 100;
let gold = 50;
const xpText = document.querySelector("#XP");
const healthText = document.querySelector("#health");
const goldText = document.querySelector("#gold");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");

button1.onclick = goToStore;
button2.onclick = goToCave;
button3.onclick = fightDragon;

const weapons = {
    0 : ["stick", 10],
    1 : ["knife", 30],
    2 : ["hammer", 50],
    3 : ["sword", 100],
}
let weaponIndex = 0;

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
    //button2.onclick = goToCave;
    //button3.onclick = fightDragon;
    text.innerText = "You are in the town square. Do something, don't stay like a dumbass!";
}
