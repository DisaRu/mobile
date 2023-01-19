const slider = document.querySelector('.slider');
const sliderPrev = document.querySelector('.slider__button-prev');
const sliderNext = document.querySelector('.slider__button-next');

let sliderItemWrapper = document.querySelector('.slider-wrapper');

addEventListener('resize', function(){
console.log(sliderItemWrapper.offsetWidth);
})


sliderPrev.addEventListener('click', function(){
    slider.style.width = 200+'px'

})