//variables
const form = document.getElementById('film-form')
const filmTitle = document.querySelector('#title')
const filmDirector = document.querySelector('#director')
const filmLink = document.querySelector('#link')
const secondCardBody = document.querySelectorAll('.card-body')[1]
const clearBtn = document.getElementById('clear-films')


//events
eventListeners()

function eventListeners() {
    form.addEventListener('submit', addFilm)
    document.addEventListener('DOMContentLoaded', function() {
        let films = Storage.addFilmToStorage()
        UI.loadedFilms(films)
    })
    secondCardBody.addEventListener('click', deleteFilm)
    clearBtn.addEventListener("click", clearAllFilms)
}

//add film to card
function addFilm(e) {
    const title = filmTitle.value
    const director = filmDirector.value
    const link = filmLink.value

    if (title === '' || director === '' || link === '') {
        UI.messages('Bos xana buraxmayin', 'danger')
    } else {
        const newFilm = new Film(title, director, link)
        UI.addFilmToUI(newFilm) // ui-a gonderme
        Storage.addToStorage(newFilm) //storage-e gonderme
        UI.messages('Film ugurla elave olundu', 'success')
    }

    UI.clearInputs(filmTitle, filmDirector, filmLink)
    e.preventDefault()
}

//delete film from card
function deleteFilm(e) {
    if (e.target.id === 'delete-film') {
        UI.deleteFilmFromUi(e.target)
        Storage.deleteFilmStorage(
            e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        )
        UI.messages('Film ugurla silindi', 'success')
    }
}

//clear all films from card
function clearAllFilms() {
    if (confirm("Butun filmler silinsin?")) {
        UI.clearAllFilmsToUi()
        Storage.clearAllFilmsStorage()
    }


}