

const OpenBtn = document.querySelector(".burger__menu-button");
const burgerMenu = document.querySelector(".burger__menu");
const linkas = document.querySelector(".burger__nav");
const overlay = document.querySelector(".burger__menu-overlay");


OpenBtn.onclick = function(){
    burgerMenu.classList.toggle("burger__menu-active");
   
}
linkas.onclick = function(){
    burgerMenu.classList.toggle("burger__menu-active")


}
overlay.onclick = function(){
    burgerMenu.classList.toggle("burger__menu-active")


}


