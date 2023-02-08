const moreBtn = document.querySelector(".more__btn");
const moreCloseBtn = document.querySelector(".more__btn-right");
const moreContent = document.querySelector(".more__content");



moreBtn.addEventListener("click", () => {
    moreCloseBtn.classList.toggle("more__btn-close");
    moreContent.classList.toggle("more__content-show");
})




// moreBtn.style.display = "none";



