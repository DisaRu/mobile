// const { forEach } = require("lodash")

const cstmizeBox = document.querySelector('.customize__box')
const cstmizeImg = document.querySelector('.customize__img')

// cstmizeBox.addEventListener('click', (element) => {
//     item = element.target
//     console.log(item);
// })

// cstmizeBox.forEach(el) {
//     console.log(cstmizeBox);
// }


function addBorder() {
    cstmizeBox.addEventListener('click', (element) => {
        item = element.target;
        console.log(item);
        item.classList.toggle('active')
   
    })
};


addBorder()


// function addBorderClicker(){
//     window.addEventListener('click', (element) => {
//     item = element.target
//     item.classList.toggle('active')
//     // item.classList.remove('active')
//     console.log(item);
// })};


// addBorderClicker()