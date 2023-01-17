


// const OpenBtn = document.querySelector(".burger__menu-button");
// const burgerMenu = document.querySelector(".burger__menu");
// const linkas = document.querySelector(".burger__nav");
// const overlay = document.querySelector(".burger__menu-overlay");


// OpenBtn.onclick = function () {
//     burgerMenu.classList.toggle("burger__menu-active");

// }
// linkas.onclick = function () {
//     burgerMenu.classList.toggle("burger__menu-active");


// }
// overlay.onclick = function () {
//     burgerMenu.classList.toggle("burger__menu-active");


// }


const slider = document.querySelector('.slider');
const sliderPrev = document.querySelector('.slider__button-prev');
const sliderNext = document.querySelector('.slider__button-next');

let sliderItemWrapper = document.querySelector('.slider-wrapper ');

let sliderItem = document.querySelector('.slider__item ');

addEventListener('resize', function(){
    sliderItem.style.width = sliderItemWrapper.offsetWidth;
    console.log(sliderItem.offsetWidth);

})



let sliderItemWidth = sliderItem.offsetWidth;
// console.log(sliderItemWidth);slider-wrapper

let sliderCount = 0;
let sliderMove = 0;
sliderPrev.addEventListener('click', function(){
    sliderCount = ++sliderCount;
    sliderMove += sliderItemWidth;
    slider.style.left = sliderMove+'px';
    console.log(sliderCount);
});

console.log(sliderMove);
sliderNext.addEventListener('click', function(){
    sliderMove +=  -sliderItemWidth;
    slider.style.left = sliderMove+'px';
});

