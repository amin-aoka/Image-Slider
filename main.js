let rightArrow = document.querySelector(".right")
let leftArrow = document.querySelector(".left")
let slide = document.querySelectorAll(".slide")
let auto = false;


let nextSlide = function () {
    let current = document.querySelector(".current")
    current.classList.remove("current")
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current")
    } else {
        slide[0].classList.add("current")
    }
}

let prevSlide = function () {

    let current = document.querySelector(".current")
    current.classList.remove("current")
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current")
    } else {
        slide[slide.length - 1].classList.add("current")

    }
}

rightArrow.addEventListener("click", nextSlide)
leftArrow.addEventListener("click", prevSlide)
//this is  complete version up to now

if (auto){
setInterval(nextSlide, 5000);
}