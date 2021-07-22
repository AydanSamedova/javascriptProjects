const form = document.getElementById('input-form')
const input = document.getElementById('input-value')
const feedback = document.querySelector('.feedback')
const listItem = document.querySelector('.list-items')
const clearBtn = document.querySelector('.clearBtn')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const value = input.value
    if (value === '') {
        showFeedback(feedback, 'can not add empty value', 'alert-danger')
    } else {
        // add to list
        addItem(value)
            //add local storage
        addLocalStorage(value)
    }
})

//clear all
clearBtn.addEventListener('click', function() {
    listItem.innerHTML = ''
        //clear storage
    clearLocalStorage()
})

//dom content loaded
document.addEventListener('DOMContentLoaded', function() {
    loadItems()
})

//Delete item
listItem.addEventListener('click', function(event) {
    if (event.target.parentElement.classList.contains('remove-icon')) {
        let parent = event.target.parentElement.parentElement
        listItem.removeChild(parent)
        let text = event.target.parentElement.previousElementSibling.textContent
        clearSingle(text)
    }
})

//show feedback
function showFeedback(element, text, result) {
    element.classList.add('showItem', `${result}`)
    element.innerHTML = `<p>${text}</p>`
    setTimeout(function() {
        element.classList.remove('showItem', `${result}`)
    }, 3000)
}

//Add item
function addItem(value) {
    const div = document.createElement('div')
    div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2')

    div.innerHTML = ` <h5 class="item-title text-capitalize">${value}</h5>
       <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`

    listItem.appendChild(div)
        //console.log(div)
    input.value = ''
    showFeedback(feedback, 'item added to the list', 'alert-success')
}

// add to local storage
function addLocalStorage(value) {
    let items
    if (localStorage.getItem('list-items')) {
        items = JSON.parse(localStorage.getItem('list-items'))
    } else {
        items = []
    }
    items.push(value)
    localStorage.setItem('list-items', JSON.stringify(items))
}

//clear all from in the local storage
function clearLocalStorage() {
    localStorage.removeItem('list-items')
}

// clear single item from in the LS
function clearSingle(value) {
    const tempItems = JSON.parse(localStorage.getItem('list-items'))
    const items = tempItems.filter(function(item) {
        if (item !== value) {
            return item
        }
    })
    localStorage.removeItem('list-items')
    localStorage.setItem('list-items', JSON.stringify(items))
}

//show all items from local storage
function loadItems() {
    if (localStorage.getItem('list-items')) {
        const items = JSON.parse(localStorage.getItem('list-items'))
        items.forEach(function(item) {
            const div = document.createElement('div')
            div.classList.add(
                'item',
                'my-3',
                'd-flex',
                'justify-content-between',
                'p-2'
            )
            div.innerHTML = `<h5 class="item-title text-capitalize">${item}</h5>
      <span class="remove-icon"><i class="fas fa-trash"></i></span>`
            listItem.appendChild(div)
        })
    }
}