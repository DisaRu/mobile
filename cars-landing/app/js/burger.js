// .active 


// .burgerBlock .burgerBlock-active 

document.querySelector('.burgerButtonArrow-wrapp').addEventListener('click', function () {
    document.querySelector('.burgerButtonArrow').classList.toggle('active');
    document.querySelector('.burgerBlock').classList.toggle('burgerBlock-active');
    document.querySelector('.burgerOverlay').classList.toggle('hidden');

    // if (e.target) {
    // }
    // console.log(e.target);
});
document.querySelector('.burgerOverlay').addEventListener('click', function () {
    document.querySelector('.burgerOverlay').classList.toggle('hidden');
    document.querySelector('.burgerButtonArrow').classList.toggle('active');
    document.querySelector('.burgerBlock').classList.toggle('burgerBlock-active');
    // document.querySelector('.burgerOverlay').classList.toggle('hidden');
});