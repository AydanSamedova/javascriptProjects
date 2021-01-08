//variables
const count = 0;
const btns = document.querySelectorAll('.btn')

const countText = document.querySelector('#text');




btns.forEach(function() {
    btns.addEventListener("click", function() {
        if ("up") {
            count++;
        } else if ("down") {
            count--;
        }
    })
})