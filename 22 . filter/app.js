const filterBtns = document.querySelectorAll('.filters')

filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault()
        const value = e.target.dataset.filter
            // console.log(value)

        const items = document.querySelectorAll('.items')
            //console.log(items)

        items.forEach(function(item) {
            if (value === 'all') {
                item.style.display = 'block'
            } else {
                if (item.classList.contains(value)) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    })
})

const search = document.getElementById('search-input')

search.addEventListener('keyup', function() {
    let searchValue = search.value.toLowerCase().trim()
        // console.log(searchValue)

    const searchItem = document.querySelectorAll('.items')
    searchItem.forEach(function(item) {
        let type = item.dataset.item
            // console.log(type)
        if (type.includes(searchValue)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})