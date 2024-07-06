const input = document.querySelector("input");
const button = document.querySelector("button");
const result = document.querySelector("#result");

button.onclick = checkPalindrome;

function checkPalindrome(){
    let inputText = input.value;
    if(inputText!==""){
        let chars = inputText.split("");
         chars = chars.filter( item => item.match(/[\da-zA-Z]/));
        chars = chars.map( item => item.toLowerCase());
        for(let i=0; i<Math.floor(chars.length/2);i++){
            if(chars[i]!=chars[chars.length -1 -i]) {
                result.innerText = `${inputText} is not a palindrome`;
                return;
            }
        }
        result.innerText = `${inputText} is a palindrome`;
    } else {
        alert("Please input a value");
    }
}

