class UI {
    static addFilmToUI(newFilm) {
        const filmList = document.querySelector("#films");

        filmList.innerHTML += `
    <tr>
    <td><img src="${newFilm.link}" class="img-fluid img-thumbnail"></td>
      <td>${newFilm.title}</td>
                                            <td>${newFilm.director}</td>
                                          
                                            <td><a href="#" id = "delete-film" class = "btn btn-dark">Filmi Sil</a></td>
                                          </tr>
    `
    }

    // clear inputs
    static clearInputs(elem1, elem2, elem3) {
        elem1.value = ''
        elem2.value = ''
        elem3.value = ''
    }


    // create message alert
    static messages(message, type) {
        const cardBody = document.querySelector('.card-body')

        const div = document.createElement('div')
        div.className = `alert alert-${type}`
        div.textContent = message
        cardBody.appendChild(div)

        setTimeout(function() {
            div.remove()
        }, 2000)
    }

    //add to storage
    static loadedFilms(films) {
        const filmList = document.getElementById("films")

        films.forEach(function(film) {
            filmList.innerHTML += `
    <tr>
    <td class="w-300"><img src="${film.link}" class="img-fluid img-thumbnail"></td>
      <td>${film.title}</td>
                                            <td>${film.director}</td>
                                          
                                            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
                                          </tr>
    `;
        })

    }

    //delete film from UI
    static deleteFilmFromUi(elem) {
        elem.parentElement.parentElement.remove()
    }


    //delete all films 
    static clearAllFilmsToUi() {
        let films = document.getElementById('films')
            // films.innerHTML = "";

        while (films.firstElementChild !== null) {
            films.firstElementChild.remove()
        }
    }
}