//veriables
const form = document.getElementById('myForm')
const btn = document.getElementById('btn')
const message = document.getElementById('lastMessage')
    // const feedback =

//events
form.addEventListener('submit', function(e) {
    e.preventDefault()
    const input = document.getElementById('myInput')
    const value = input.value
    message.textContent = value
    input.value = ''
    const feedback = document.getElementById('feedback')

    if (value === '') {
        feedback.classList.remove('none')
    } else {
        feedback.classList.add('none')
    }
})