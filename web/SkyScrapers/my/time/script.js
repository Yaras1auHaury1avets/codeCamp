const date = new Date();
const hour = date.getHours();
const sky = document.querySelector(".sky");
const root = document.querySelector(":root");

function changeColors(){
   if(hour<6){
    sky.style.background = "radial-gradient(circle closest-corner at 15% 15%, aliceblue 30%, rgb(52, 52, 79) )";
     root.style.setProperty("--building-color1", "black");
     root.style.setProperty("--building-color2", "black");
     root.style.setProperty("--building-color3", "black");
     root.style.setProperty("--building-color4", "black");
     root.style.setProperty("--window-color1", "rgb(209, 202, 202");
    root.style.setProperty("--window-color2", "grey");
     root.style.setProperty("--window-color3", "grey");
     root.style.setProperty("--window-color4", "rgb(209, 202, 202");
   }
}

changeColors();