const slider = document.querySelector('.slider');
const sliderItem = document.querySelectorAll('.slider__item');
const btnPrev = document.querySelector('.slider__button-prev')
const btnNext = document.querySelector('.slider__button-next')
let width;
let count = 0;


function init() {
    console.log(width);
    width = document.querySelector('.slider-wrapper').offsetWidth;
    // slider.style.width = width * sliderItem.length + 'px';
    sliderItem.forEach(item => {
        item.style.width = width + 'px';
    })
    roll()
}
init()

addEventListener('resize', init)

btnNext.addEventListener('click', function(){
    count++;
    if(count >= sliderItem.length){
        count = 0;
    }
    document.querySelector('.slider__count-show').innerText = count+1;
    roll()
    console.log(count+1);

})
btnPrev.addEventListener('click', function(){
    count--;
    if(count < 0 ){
        count = sliderItem.length -1;
    }
    document.querySelector('.slider__count-show').innerText = count+1;
    roll()
    console.log(count+1);

})

function roll(){
    slider.style.transform = 'translate(-'+ count * width + 'px)'
}