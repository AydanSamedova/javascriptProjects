//variable
const upCount = document.getElementById('up');
const downCount = document.getElementById('down');
const resetCount = document.getElementById('reset');
const count = document.getElementById('text');


//------------functions-----------------------

//1. Count ++
function upBtn() {
    count.innerText = Number(count.innerText) + 1
    colorCount()
}
upCount.addEventListener("click", upBtn);

//2. Count --
function downBtn() {
    count.innerText = Number(count.innerText) - 1
    colorCount()
}
downCount.addEventListener("click", downBtn);

//3.Count = 0
function resetBtn() {
    count.innerText = 0;
    colorCount()
}
resetCount.addEventListener("click", resetBtn)

//Function color 
function colorCount() {
    if (count.innerText == 0) {
        count.style.color = 'black'
    } else if (count.innerText > 0) {
        count.style.color = ' rgb(101, 101, 228)'
    } else {
        count.style.color = 'rgb(253, 253, 130)'
    }
}