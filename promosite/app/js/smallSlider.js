const smallSliderWrapper = document.querySelector('.smallSlider__wrapper');
const smallSliderItem = document.querySelectorAll('.smallSlider__item');
const smallSliderLine = document.querySelector('.smallSlider__line');
const smalBtnPrev = document.querySelector('.smallSlider__button-prev')
const smallBtnNext = document.querySelector('.smallSlider__button-next')

let smallSliderWidth = 0;
let smallSliderCount = 0;
function smallSlilderInit() {
    smallSliderWidth = smallSliderWrapper.offsetWidth;

    smallSliderItem.forEach(item => {
        item.style.minWidth = smallSliderWidth + 'px';
        console.log(smallSliderWidth);
    })
    smalSliderRoll()
}
smallSlilderInit()

addEventListener('resize', smallSlilderInit,smalSliderRoll)


smallBtnNext.addEventListener('click', function(){
    smallSliderCount++;
    if(smallSliderCount >= smallSliderItem.length){
        smallSliderCount = 0;
    }
    document.querySelector('.smallSlider__count-show').innerText = smallSliderCount+1;
    smalSliderRoll()
    console.log(smallSliderCount+1);

})
smalBtnPrev.addEventListener('click', function(){
    smallSliderCount--;
    if(smallSliderCount < 0 ){
        smallSliderCount = smallSliderItem.length -1;
    }
    document.querySelector('.smallSlider__count-show').innerText = smallSliderCount+1;
    smalSliderRoll()
    // console.log(count+1);

})

function smalSliderRoll(){
    smallSliderLine.style.transform = 'translate(-'+ smallSliderCount * smallSliderWidth + 'px)'
}