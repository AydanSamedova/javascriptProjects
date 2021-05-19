//ajax, callback, http requests

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest()
    }

    //Get request
    get(url, callback) {
        this.xhr.open('GET', url) //elaqe acikdir

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, this.xhr.responseText)
            } else {
                callback('yalnisliq var', null)
            }
        }

        this.xhr.send()
    }

    //Delete request
    delete(url, callback) {
        this.xhr.open('DELETE', url) //elaqe acikdir

        this.xhr.onload = () => {
            if (this.xhr.status == 200) {
                callback(null, "melumat silindi")
            } else {
                callback('yalnisliq var', null)
            }
        }

        this.xhr.send()
    }

    //Post request
    post(url, data, callback) {
        this.xhr.open('POST', url)
        this.xhr.setRequestHeader('Content-type', ' application/json') // json gonderdiyini bildirir
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                callback(null, this.xhr.responseText)
            } else {
                callback('ugursuz oldu', null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }

    //Put request
    put(url, data, callback) {
        this.xhr.open('PUT', url)
        this.xhr.setRequestHeader('Content-type', ' application/json') // json gonderdiyini bildirir
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText)
            } else {
                callback('ugursuz oldu', null)
            }
        }
        this.xhr.send(JSON.stringify(data))
    }
}

const request = new Request()

//get
// request.get('https://jsonplaceholder.typicode.com/albums/40', function(err, response) {
//     if (err === null) {
//         console.log(response)
//     } else {
//         console.log(err)
//     }
// })

//post
// request.post('https://jsonplaceholder.typicode.com/albums', { userId: 3, title: "Aydan" }, function(err, album) {
//     if (err === null) {
//         console.log(album)
//     } else {
//         console.log(err)
//     }
// })

//put
// request.put(
//     'https://jsonplaceholder.typicode.com/albums/1', { userId: 3, title: 'Aydan' },
//     function(err, album) {
//         if (err === null) {
//             console.log(album)
//         } else {
//             console.log(err)
//         }
//     }
// )

//delete
request.delete(
    'https://jsonplaceholder.typicode.com/albums/40',
    function(err, response) {
        if (err === null) {
            console.log(response)
        } else {
            console.log(err)
        }
    }
)