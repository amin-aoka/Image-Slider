let rightArrow = document.querySelector(".right")
let leftArrow = document.querySelector(".left")
let current = document.querySelector(".current")
let slide = document.querySelector(".slide")

rightArrow.addEventListener("click" ,function (){

    current.nextElementSibling.classList.add("current")
    current.classList.remove("current")


})