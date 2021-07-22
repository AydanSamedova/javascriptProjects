//veriables
let counterValue = 0
const box = document.getElementById('counter-box')
let counter = document.getElementById('counter-value')
const buttons = document.querySelectorAll('#btn')

buttons.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const value = event.target
        if (value.classList.contains('prevBtn')) {
            counterValue--
        } else if (value.classList.contains('nextBtn')) {
            counterValue++
        }

        counter.textContent = counterValue

        //colors
        if (counterValue === 0) {
            counter.style.color = 'black'
        } else if (counterValue > 0) {
            counter.style.color = 'green'
        } else if (counterValue < 0) {
            counter.style.color = 'red'
        }
    })
})