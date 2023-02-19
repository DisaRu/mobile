const btn = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal-close');


btn.forEach(element => {
    element.addEventListener('click', () => {
        
        overlay.classList.add('overlay-active')
        modal.classList.add('modal-active')
    

    })



});
modalClose.addEventListener('click', () => {
    
    modal.classList.remove('modal-active')
    overlay.classList.remove('overlay-active')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay-active')
    modal.classList.remove('modal-active')

})