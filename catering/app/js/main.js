


const OpenBtn = document.querySelector(".burger__menu-button");
const burgerMenu = document.querySelector(".burger__menu");
const linkas = document.querySelector(".burger__nav");
const overlay = document.querySelector(".burger__menu-overlay");


OpenBtn.onclick = function () {
    burgerMenu.classList.toggle("burger__menu-active");

}
linkas.onclick = function () {
    burgerMenu.classList.toggle("burger__menu-active")


}
overlay.onclick = function () {
    burgerMenu.classList.toggle("burger__menu-active")


}



// const buttonPlus = document.querySelector('.card__button-plus')
// const buttonMinus = document.querySelector('.card__button-minus')
// const cardCount = document.querySelector('.card__count')


// buttonMinus.addEventListener('click', function () {
//     if(+cardCount.innerText > 0){

//         cardCount.innerText =  --cardCount.innerText
//     }
//     if(+cardCount.innerText <= 0){
//         cardCount.classList.add('none')

//     }
//     else{
//         return
//     }
// });


// buttonPlus.addEventListener('click', function () {
//   cardCount.classList.remove('none')
//     cardCount.innerText =  ++cardCount.innerText
// });



const cardCount = document.querySelector('.card__count')

window.addEventListener('click', function (event) {
    let cardCount;

   


    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const parent = event.target.closest('.card__control')
        cardCount = parent.querySelector('[data-counter]')
    }



    if (event.target.dataset.action === 'plus') {
        cardCount.innerText = ++cardCount.innerText
    }

    if (event.target.dataset.action === 'minus') {

        if (+cardCount.innerText > 1) {
            cardCount.innerText = --cardCount.innerText;
        }else if(event.target.closest('.cart__wrapper') && +cardCount.innerText === 1 ){

            event.target.closest('.cart').remove();
            
            cartToggleStatus();  

            calc();
            
        }
        
        
        
    }
    
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart__wrapper')){
        calc();
    }


});