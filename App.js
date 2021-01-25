var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
 
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?text=" + text; 
}
function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with server!");
}
function clickHandler(){
    var textInput = txtInput.value;
    fetch(getTranslationURL(textInput))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerText = json.contents.translated;
    })
    .catch(errorHandler);
    
}
btnTranslate.addEventListener("click", clickHandler);