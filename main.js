let rightArrow = document.querySelector(".right")
let leftArrow = document.querySelector(".left")
let slide = document.querySelector(".slide")

rightArrow.addEventListener("click" ,function (){
    let current = document.querySelector(".current")
    current.nextElementSibling.classList.add("current")
    current.classList.remove("current")


})