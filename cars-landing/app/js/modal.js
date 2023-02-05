const btn = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal-close');

modalClose.addEventListener('click', () => {
    overlay.classList.remove('overlay-active')
    modal.classList.remove('modal-active')
})


btn.forEach(element => {
    element.addEventListener('click', () => {
        console.log('d')

        overlay.classList.add('overlay-active')
        modal.classList.add('modal-active')


    })



});

overlay.addEventListener('click', () => {
    overlay.classList.remove('overlay-active')
    modal.classList.remove('modal-active')
})