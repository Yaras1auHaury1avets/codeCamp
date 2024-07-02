const budgetInput = document.querySelector("#budget");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const snacks = document.querySelector("#snacks");
const exercise = document.querySelector("#exercise");
const items = document.querySelector("#items");
let arr = [breakfast, lunch, dinner,snacks,exercise];

const addEntryButton = document.querySelector("#addEntry");
const calculateButton = document.querySelector("#calculate");
const clearButton = document.querySelector("#clear");

addEntryButton.onclick = addEntry;
clearButton.onclick = clearInputs;

function addEntry(){
const item = document.querySelector(`#${items.value}`);
let str = "<div><label>Food</label><input type='text'><br><label>Calories</label><input type='text'></div>";
item.insertAdjacentHTML("beforeend",str);
}

function clearInputs(){
    budgetInput.value="";
    for(let i of arr){
        i.innerHTML="";
    }
}



