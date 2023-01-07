orderTableInner = document.querySelector('.table__order-inner');
cartWrapper = document.querySelector('.cart__wrapper');
window.addEventListener('click', function (event) {
    // cartWrapperCounts = event.target.closest('.cart__wrapper');
    const toCartButton = event.target.closest('.card__control');
    if (toCartButton) {
        let cartInnerCounts = document.querySelectorAll("body > section.main.container > div > div.cart__box > div > div > div > div.card__control > div")
        // console.log(cartInnerCounts);

        let tableTotal;
        cartInnerCounts.forEach(element => {
            tableTotal = + element.innerHTML;


            console.log(tableTotal)
        });
    }

})
