// veriables
const bg = document.getElementById('myDiv')
const btn = document.getElementById('btn')
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

//events
btn.addEventListener('click', myBtn)

//btn function
function myBtn() {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[getRandomNumber()]
    }
    bg.textContent = color
    bg.style.backgroundColor = color
}
//ranrom function
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}

myBtn()