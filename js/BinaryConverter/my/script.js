const input = document.querySelector("input");
const button =document.querySelector("button");
const engineBin = document.querySelector(".engine");
const myBin = document.querySelector(".my")

button.addEventListener("click", toBinary);

function toBinary(){
   if(input.value=="") {
    engineBin.innerText = "0";
    myBin.innerText = "0";
   }
    else if(input.value.toLowerCase().includes("e")){
        engineBin.innerText = "0";
        myBin.innerText = "0";
        input.value = "";
       alert("ONLY DECIMAL NUMBERS ALLOWED"); 
    }  
    else{
        engineBin.innerText = engineBinary();
        let inputValue = Number(input.value);
        myBin.innerText =  inputValue<0 ? -myBinary(inputValue* -1) : myBinary(inputValue);
    }
}

function engineBinary(){
        return Number(input.value).toString(2);
}

function myBinary(num){
   if(num==1) return "1";
   return myBinary(Math.floor(num/2)) + num%2;
}