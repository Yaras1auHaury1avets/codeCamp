const budgetInput = document.querySelector("#budget");
const breakfast = document.querySelector("#breakfast");
const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const snacks = document.querySelector("#snacks");
const exercise = document.querySelector("#exercise");
const items = document.querySelector("#items");
const result = document.querySelector("h2");
let arr = [breakfast, lunch, dinner,snacks,exercise];

const addEntryButton = document.querySelector("#addEntry");
const calculateButton = document.querySelector("#calculate");
const clearButton = document.querySelector("#clear");

addEntryButton.onclick = addEntry;
clearButton.onclick = clearInputs;
calculateButton.onclick = calculate;

function addEntry(){
const item = document.querySelector(`#${items.value}`);
let str = "<div><label>Food</label><input type='text'><br><label>Calories</label><input class='count' type='text'></div>";
item.insertAdjacentHTML("beforeend",str);
}

function clearInputs(){
    budgetInput.value="";
    result.innerText = "";
    for(let i of arr){
        i.innerHTML="";
    }
}

function calculate(){
    if(budgetInput.value===""){
        alert("ENTER BUDGET VALUE");
        return;
    } else {
        countCalories();
    }
}

function countCalories(){
    const list = document.querySelectorAll(".count:not(#exercise .count)");
    const  arr = Array.from(list);
    let sum = 0;
    for(let i of arr){
        sum += +i.value;
    }
    const listExercise = document.querySelectorAll("#exercise .count");
    const  arrExercise = Array.from(listExercise);
    if(arrExercise.length>0){
        for(let i of arrExercise){
            sum -= +i.value;
        }
    }
    deficiteOrProficite(sum);
}

function deficiteOrProficite(sum){
if(budgetInput.value < sum){
    result.innerText = "PROFICITE!!!"
} else if(budgetInput.value > sum){
    result.innerText = "DEFICITE!!!"
} else {
    result.innerText = "EXCELENT!!!"
}
}
