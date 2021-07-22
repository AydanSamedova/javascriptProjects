//veriables
const slider = document.querySelector('.slider')
const colors = ['yellow', 'green', 'grey', 'pink', 'indigo']
const btn = document.querySelectorAll('.btn')

let counter = 0

btn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        let value = event.target
            //console.log(value)
        if (value.classList.contains('prevBtn')) {
            counter--
            if (counter < 0) {
                counter = colors.length - 1
            }
            console.log(counter)

            slider.style.backgroundColor = colors[counter]
        }
        if (value.classList.contains('nextBtn')) {
            counter++
            if (counter > colors.length - 1) {
                counter = 0
            }
            console.log(counter)
            slider.style.backgroundColor = colors[counter]
        }
    })
})