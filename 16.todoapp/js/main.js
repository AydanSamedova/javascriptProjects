//Variables
const form = document.getElementById('todo-form')
const toDoItem = document.getElementById('todo')
const list = document.querySelector('.list-group')
const firstCardBody = document.querySelectorAll('.card-body')[0]
const secondCardBody = document.querySelectorAll('.card-body')[1]
const filter = document.getElementById('filter')
const clear = document.getElementById('clear-todos')

eventListeners()

//butun eventler yigilir
function eventListeners() {
    form.addEventListener('submit', addToDo)
    document.addEventListener('DOMContentLoaded', loadedTodosUi)
    secondCardBody.addEventListener('click', deleteItem)
    filter.addEventListener('keydown', filterItems)
    clear.addEventListener('click', clearAll)
}

function loadedTodosUi() {
    let todos = getTodoLocalStorage()

    todos.forEach(function(newItem) {
        addToDoUi(newItem)
    })
}

//add to do item
function addToDo(e) {
    const newItem = toDoItem.value.trim()

    if (newItem === '') {
        showAlert('danger', 'zehmet olmasa todo daxil edin')
    } else {
        addToDoUi(newItem)
        addLocalStorage(newItem)
        showAlert('success', 'to do daxil edildi')
    }

    e.preventDefault()
}

//add to do item UI
function addToDoUi(newItem) {
    //create list item
    const listItem = document.createElement('li')
        //add class list item
    listItem.className = 'list-group-item d-flex justify-content-between'
        //create link
    const link = document.createElement('a')
        //add href
    link.href = '#'
        // add class for link
    link.className = 'delete-item'
        //add  icon for link
    link.innerHTML = "<i class ='fa fa-remove'></i>"
        //add text node
    listItem.appendChild(document.createTextNode(newItem))

    listItem.appendChild(link)
        //add ul child
    list.appendChild(listItem)

    // console.log(listItem)
    //input clear
    toDoItem.value = ''
}

// my storage function
function getTodoLocalStorage() {
    let todos

    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    return todos
}

// add storage
function addLocalStorage(newItem) {
    let todos = getTodoLocalStorage()
    todos.push(newItem)
    localStorage.setItem('todos', JSON.stringify(todos))
}

//alert
function showAlert(type, message) {
    const alert = document.createElement('div')
    alert.style.width = '50%'
    alert.classList = `alert alert-${type}`
    alert.textContent = message
    firstCardBody.appendChild(alert)

    setTimeout(function() {
        alert.remove()
    }, 2000)
}

//delete item
function deleteItem(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove()
        deleteItemToStorage(e.target.parentElement.parentElement.textContent)
        alert("silmek istediyinizden emin siniz?")
    }
}


//delete item to storage
function deleteItemToStorage(deleteItem) {
    let todos = getTodoLocalStorage();

    todos.forEach(function(item, index) {
        if (item === deleteItem) {
            todos.splice(index, 1)
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos))
}

//filtering
function filterItems(e) {
    const filterValue = e.target.value.toLowerCase()
    const items = document.querySelectorAll(".list-group-item")


    items.forEach(function(item) {
        const text = item.textContent.toLowerCase()
        if (text.indexOf(filterValue) === -1) {
            item.setAttribute("style", "display:none !important")
        } else {
            item.setAttribute("style", "display:block;")
        }
    })
}

//clear All items
function clearAll(e) {
    if (confirm("butun listleri silmek isteyirsiniz mi?")) {
        //version -1
        //list.innerHTML = ""

        //version -2
        while (list.firstElementChild != null) {
            list.removeChild(list.firstElementChild)
        }
        localStorage.removeItem("todos")
    }
}