function calc() {
    const cartItems = document.querySelectorAll('.cart__item');
    const cartTottal = document.querySelector('.cart__total');

    let totalPrice = 0;
    // console.log(cartItems);
    cartItems.forEach(function(item){
        
        const priceCart = parseInt( item.querySelector('.cart__item--price').innerHTML);
        const countCart = parseInt( item.querySelector('.card__count').innerHTML);
        const currentPrice = priceCart * countCart;
        totalPrice += currentPrice;

        console.log(totalPrice);
        

       
    });


    const cartDelivery = document.querySelector('.cart__dilivery');
    if(totalPrice  >= 0){
        cartDelivery.classList.remove('none');

        cartTottal.innerHTML = totalPrice + ' rub';
    }
    if(totalPrice > 600){
        cartDelivery.innerHTML = 'Доставка бесплатно';
    }
    if(totalPrice < 600){
        // cartDelivery.classList.add('none');
        cartDelivery.innerHTML = 'Доставка 500 рублей';
    }

}
calc() 