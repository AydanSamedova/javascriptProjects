//variables
const btn = document.getElementById('btn');
const colorText = document.getElementById('text');
//colors
const arr = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'f', 'e'
];
//functions
function changeColor() {
    let newColor = '#' + '';
    for (let i = 0; i < 6; i++) {
        newColor += arr[Math.round(Math.random() * (arr.length - 1))];
        console.log(newColor)

    }
    document.body.style.backgroundColor = newColor;
    text.innerText = newColor;
}
//events
btn.addEventListener('click', changeColor);