const btn = document.querySelector(".btn");
const video = document.querySelector(".video");
const switcher = document.querySelector('.switcher');





btn.addEventListener('click', function() {
    if (video.paused) {
        video.play()
        switcher.classList.remove('left')
    } else if (video.play) {
        video.pause()
        switcher.classList.add('left')
    }
})