 var btnTranslate = document.querySelector("#btn-translate");
 var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click",
function clickEventHandler(){
    outputDiv.innerText = "Jabba Jabba" + txtInput.value;
} )  



 