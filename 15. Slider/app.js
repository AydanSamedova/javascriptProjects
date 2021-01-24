const slider = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const gallery = document.querySelectorAll(".column")


slider.forEach(function(element, index) {
    element.style.left = `${index*100}%`;
});

let idx = 0;

nextBtn.addEventListener("click", function() {
    idx++;
    mySlide();

});
prevBtn.addEventListener("click", function() {
    idx--;
    mySlide();

});

function mySlide() {
    if (idx === slider.length) {
        idx = 0;
    }
    if (idx < 0) {
        idx = slider.length - 1
    }
    if (idx < slider.length - 1) {
        nextBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    if (idx > 0) {

        prevBtn.style.display = "block";
    } else {

        nextBtn.style.display = "none";
    }

    slider.forEach(function(element) {
        element.style.transform = `translateX(-${idx*100}%)`;

    })
}
prevBtn.style.display = "none";