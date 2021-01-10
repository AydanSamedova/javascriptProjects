//veriables

const btn = document.querySelector("#btn")
const link = document.querySelector("#links")
const closeBtn = document.querySelector("#closeBtn")


btn.addEventListener("click", function() {
    link.classList.toggle("link-modal")
})

closeBtn.addEventListener("click", function() {
    link.classList.add("link-modal")
})