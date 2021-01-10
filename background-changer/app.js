//variables
const btn = document.getElementById('btn');
const colorText = document.getElementById('text');
const copyBtn = document.getElementById('btnCopy');
//colors
const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f', 'e'
];


//functions Color
function changeColor() {
    let newColor = "#" + ""
    for (let i = 1; i < 7; i++) {
        newColor += arr[Math.floor(Math.random() * (arr.length - 1))]
        console.log(newColor)
    }
    document.body.style.backgroundColor = newColor
    text.innerText = newColor
}


// function copyText
function copyText(htmlElement) {
    if (!htmlElement) {
        return;
    }
    //create input
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement("input")
    inputElement.setAttribute("value", elementText)
    document.body.appendChild(inputElement)
    inputElement.select()
    document.execCommand('copy')
        //remove input
    inputElement.parentNode.removeChild(inputElement)
}

//copy 

document.querySelector("#btnCopy").onclick =
    function() {
        copyText(document.querySelector("#text"))
    }


//events
btn.addEventListener("click", changeColor)