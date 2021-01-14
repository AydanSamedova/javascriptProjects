const reviews = [{
        id: 1,
        name: "Barbara Palvin",
        position: "Actress",
        img: "images.jpg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },

    {
        id: 2,
        name: "penn badgley",
        position: "Actor",
        img: "images (1).jpg",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
    },
    {
        id: 3,
        name: "Ester Exposito",
        position: "Actress",
        img: "images (2).jpg",
        text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently "
    },
    {
        id: 4,
        name: "Pedro Alanso",
        position: "Actor",
        img: "images (3).jpg",
        text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "
    },
]

//variebles
const img = document.getElementById("img");
const Uname = document.getElementById("author");
const job = document.getElementById("position");
const text = document.getElementById("text")

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const randomBtn = document.getElementById("random");

//items
let count = 0;


// events

window.addEventListener("DOMContentLoaded", function() {
    person(count)
});

function person(item) {
    const i = reviews[item];
    Uname.textContent = i.name;
    job.textContent = i.position;
    // img.src = i.img;
    img.setAttribute("src", i.img)
    text.textContent = i.text;
}



prevBtn.addEventListener("click", function() {
    count--;
    if (count < 0) {
        count = reviews.length - 1
    }
    person(count)
});


nextBtn.addEventListener("click", function() {
    count++;
    if (count > reviews.length - 1) {
        count = 0
    }
    person(count)
});

randomBtn.addEventListener("click", function() {
    count = Math.floor(Math.random() * reviews.length)
    console.log(count)
    person(count)
})