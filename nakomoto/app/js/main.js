

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
    },


});

const swiper1 = new Swiper('.videoSwiper', {
    slidesPerView: 1,
    loop: true,

    // spaceBetween:10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {

    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            // spaceBetween:10,
        },
        // when window width is >= 640px
        700: {
            slidesPerView: 3,
            //   spaceBetween:10,
        },
        850: {
            slidesPerView: 5,
            // spaceBetween:10,
        }
    },


});


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







