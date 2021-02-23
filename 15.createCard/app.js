//check fields and button
document.addEventListener("DOMContentLoaded", function() {
    const display = new Display();
    display.checkFields();
    display.submitHide();
})

//add customer on submit
document.getElementById("form").addEventListener("submit", function(evet) {
    event.preventDefault();
    const name = this.querySelector(".name");
    const surname = this.querySelector(".surname");
    const course = this.querySelector(".course");

    const customer = new Customer(name.value, surname.value, course.value);
    // console.log(customer)
    const display = new Display();


    display.feedback(customer);
    display.clearField();


});


//display
function Display() {
    this.name = document.getElementById("name");
    this.surname = document.getElementById("surname");
    this.course = document.getElementById("course");
    this.customer = document.querySelector(".customer-list");
}



//check fields
Display.prototype.checkFields = function() {
    // console.log(this);

    this.name.addEventListener("blur", this.validateField);
    this.surname.addEventListener("blur", this.validateField);
    this.course.addEventListener("blur", this.validateField);
};




//validate each field
Display.prototype.validateField = function() {
    // console.log(this);
    if (this.value === "") {
        this.classList.remove("completed");
        this.classList.add("fail");
    } else {
        this.classList.add("completed");
        this.classList.remove("fail");
    }

    const completed = document.querySelectorAll(".completed");
    // console.log(completed.length)
    if (completed.length === 3) {
        document.querySelector(".btn").disabled = false;
    } else {
        document.querySelector(".btn").disabled = true;
    }

};



//button disabled
Display.prototype.submitHide = function() {
    const btn = document.querySelector(".btn");
    btn.disabled = true;
};

//loading and feedback
Display.prototype.feedback = function(customer) {
    const feedback = document.querySelector(".feedback");
    const loading = document.querySelector(".loading");


    feedback.classList.add("show", "alert", "alert-success");
    loading.classList.add("show");

    const object = this;
    object.submitHide();

    setTimeout(function() {
        feedback.classList.remove("show", "alert", "alert-success");
        loading.classList.remove("show");
        object.addCustomer(customer);
    }, 4000)
};

Display.prototype.addCustomer = function(customer) {
    // console.log(customer)

    const random = this.getRandom();
    const div = document.createElement("div");
    div.classList.add("col-6", "center", "customer-list");
    div.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="img/photo-${random}.jpg" class="card-img-top" alt="course">
                    <div class="card-body">
                        <h5 class="card-title">${customer.name}</h5>
                        <h5 class="card-title">${customer.surname}</h5>
                        <a href="#" class="btn ">Go to ${customer.course}</a>
                    </div>
                </div>`;
    this.customer.appendChild(div)
}


//Random img
Display.prototype.getRandom = function() {
    let random = Math.floor(Math.random() * 5 + 1)
    return random;
}


Display.prototype.clearField = function() {
    // console.log(this)
    this.name.value = '';
    this.surname.value = '';
    this.course.value = '';


    this.name.classList.remove("fail", "completed");
    this.surname.classList.remove("fail", "completed");
    this.course.classList.remove("fail", "completed");
}

//customer constructor function
function Customer(name, surname, course) {
    this.name = name;
    this.surname = surname;
    this.course = course;
}