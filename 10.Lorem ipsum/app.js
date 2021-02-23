const text = ["lorem 1",
    "lorem 2", "lorem 3", "lorem 4", "lorem 5", "lorem 6", "lorem 7 ", "lorem 8", "lorem 9"

]



const myFrom = document.querySelector("form");
const textLorem = document.querySelector(".lorem-text");
const number = document.getElementById("num");





myFrom.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = parseInt(num.value);
    const random = Math.floor(Math.random() * text.length)


    if (isNaN(value) || value < 0 || value > 9) {
        textLorem.innerHTML = `<p class="result">${text[random]}</p>`
    } else {
        let myText = text.slice(0, value);
        myText = myText.map(function(item) {
            return `<p class="result">${item}</p>`
        }).join("");
        textLorem.innerHTML = myText;
    }
});