class Storage {
    //add film to storage
    static addToStorage(newFilm) {
            let films = this.addFilmToStorage()
            films.push(newFilm)
            localStorage.setItem('films', JSON.stringify(films))
        }
        //add film to storage function
    static addFilmToStorage() {
            let films

            if (localStorage.getItem('films') === null) {
                films = []
            } else {
                films = JSON.parse(localStorage.getItem('films'))
            }
            return films
        }
        //delete film from storge
    static deleteFilmStorage(title) {
            let films = this.addFilmToStorage()
                //splice method
            films.forEach(function(film, index) {
                if (film.title == title) {
                    films.splice(index, 1)
                } else {
                    // console.log('adlar beraber deyil')
                }
            })
            localStorage.setItem('films', JSON.stringify(films))
        }
        // delete all film
    static clearAllFilmsStorage() {
        localStorage.removeItem('films')
    }
}