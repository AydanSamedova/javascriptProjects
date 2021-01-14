// Variables
const cards = document.querySelectorAll(".card");

//function
cards.forEach(function(element) {
    const btn = element.querySelector(".btn");
    btn.addEventListener("click", function() {
        cards.forEach(function(item) {
            if (item !== element) {
                item.classList.remove("show");
            }
        });
        element.classList.toggle("show");
    });
});