
function pyramid(base, character){
let row="";
for(let i=0; i<base; i++){
    row += ".".repeat(base-i-1) + character.repeat(i*2+1) +"\n";
}
alert(row);
}

pyramid(+(prompt("ENTER BASE")), prompt("ENTER CHARACTER"));