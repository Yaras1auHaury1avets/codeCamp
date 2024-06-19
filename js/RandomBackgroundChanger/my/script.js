const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const button = document.querySelector("button");
const body = document.querySelector("body");

button.onclick = changeColor;

function changeColor(){
    let backgroundAndFontColorArray = getColors();
    let backgroundColor = "#" + backgroundAndFontColorArray[0];
    let fontColor = backgroundAndFontColorArray[1];
    body.style.backgroundColor =  backgroundColor;
    h3.innerText = "Hex Code: " + backgroundColor;
    h1.style.color = fontColor;
    h3.style.color = fontColor;
}

function getColors(){
    let colors = ["", 0];
    for (let i=1; i<4;i++){
        let randomColor = Math.floor(Math.random()*256);
        colors[1] += randomColor;
        colors[0] += colorToHex(randomColor);

    }
    colors[1] = colors[1]>=384 ? "#000000" : "#FFFFFF";
    return colors;
}

function colorToHex(color){
    return  "" + toHex(Math.floor(color/16)) + toHex(color%16);
}

function toHex(number){
    if(number<10) return number;
    else if(number==10) return "A";
    else if(number==11) return "B";
    else if(number==12) return "C";
    else if(number==13) return "D";
    else if(number==14) return "E";
    else return "F";
}