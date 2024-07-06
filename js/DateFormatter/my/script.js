const format = document.querySelector("select");
const dateFormatEntry = document.querySelector("h2");
const date = new Date();
const year = date.getFullYear();
const months = ["January", "February", "March","April" , "May", "June", "July", "August", "September", "October", "November", "December"];
const month = months[date.getMonth()];
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();

function getFormatEntry(){
    const formatValue = +format.value;
    let dateText = "";
    switch(formatValue){
        case 0: dateText = `${day}-${month}-${year}`;
        break;
        case 1: dateText = `${year}-${month}-${day}`;
        break;
        case 2: dateText = `${month}-${day}-${year} ${hours} hours ${minutes} minutes`;
    }
    dateFormatEntry.innerText = dateText;
}

format.addEventListener("click", getFormatEntry);

