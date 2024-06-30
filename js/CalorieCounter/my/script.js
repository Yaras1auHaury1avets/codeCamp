const budgetInput = document.querySelector("#budget");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const snacks = document.querySelector("#snacks");
const exercise = document.querySelector("#exercise");
const items = document.querySelector("#items");

const addEntryButton = document.querySelector("#addEntry");
const calculateButton = document.querySelector("#calculate");
const clearButton = document.querySelector("#clear");

addEntryButton.onclick = addEntry;

function addEntry(){
const item = document.querySelector(`#${items.value}`);
let str = "<h1>AAAAAAAAAA</h1>";
item.insertAdjacentHTML("beforeend",str);
}

