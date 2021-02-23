//-------date----------
const date = document.getElementById("date");
// console.log(date)
date.innerHTML = new Date().getFullYear();

//----------Toggle---------
const navToggle = document.querySelector(".toggle-navbar")
const linkWrapper = document.querySelector(".links-wrapper")
const links = document.querySelector(".links")


navToggle.addEventListener("click", function() {
    linkWrapper.classList.toggle("show")
        // const wrapperHeight = linkWrapper.getBoundingClientRect().height;
        // const linksHeight = links.getBoundingClientRect().height;
        // console.log(linksHeight)
        // if (wrapperHeight === 0) {
        //     linkWrapper.style.height = `${linksHeight}px`;
        // } else {
        //     linkWrapper.style.height = 0;
        // }
});


//------------fixed navbar-------------

const navbar = document.getElementById("navbar");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function() {
    // console.log(window.pageYOffset)
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link")
    } else {
        topLink.classList.remove("show-link")
    }
});


//---------------smooth scroll-----------
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault()

        //navigate to spesifice link
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        //---
        const navHeight = navbar.getBoundingClientRect().height
        const wrapperHeight = linkWrapper.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains("fixed-nav")
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + wrapperHeight;

        }


        window.scrollTo({
            left: 0,
            top: position,
        });
        linkWrapper.style.height = 0;

    })
})