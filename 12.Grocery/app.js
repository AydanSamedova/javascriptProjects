//select items
const alert = document.querySelector(".alert")
const form = document.querySelector(".form")
const grocery = document.querySelector("#grocery")
const submitBtn = document.querySelector(".submit-btn")
const GroceryCont = document.querySelector(".grocery-cont")
const GrocerList = document.querySelector(".grocery-list")
const clearBtn = document.querySelector(".clear")


//edit option
let editItem;
let editFlag = false;
let editId = "";

//event listener

//functions
function addElement(e) {
    e.preventDefault();
    const value = grocery.value;
    // if (value) {
    //     console.log("value is true")
    // }
    const id = new Date().getTime().toString();
    if (value !== '' && editFlag) {
        console.log("add item to the list")
    } else if (value !== '' && editFlag) {
        console.log('editing');
    } else {
        alert.textContent = "empty value";
        alert.classList.add("alert-danger")
    }
}
//local storage
//setup items