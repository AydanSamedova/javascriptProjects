//veriables

const btn = document.querySelector("#btn")
const link = document.querySelector("#links")


btn.addEventListener("click", function() {
    link.classList.toggle("link-modal")
})