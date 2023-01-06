function calc() {
    const cartItems = document.querySelectorAll('.cart__item');
    const cartTottal = document.querySelector('.cart__total');

    let totalPrice = 0;
    let totalWeght = 0;
    
    // console.log(cartItems);
    cartItems.forEach(function(item){


        const cartlWeght = parseInt( item.querySelector('.cart__item--weight').innerHTML);

        const priceCart = parseInt( item.querySelector('.cart__item--price').innerHTML);
        const countCart = parseInt( item.querySelector('.card__count').innerHTML);
        const currentPrice = priceCart * countCart;
        totalPrice += currentPrice;

        totalWeght += cartlWeght * countCart;
        console.log(totalWeght);
        

       
    });


    const cartDelivery = document.querySelector('.cart__dilivery');
    if(totalPrice  > 0){
        cartDelivery.classList.remove('none');

        cartTottal.innerHTML = `
        <div>Сумма: ${totalPrice} рублей</div>
        <div>Вес: ${totalWeght} гр.</div>
        
        
        `;
    }

    if(totalPrice <= 0){
        cartDelivery.classList.remove('none');
        cartTottal.innerHTML = `
     
        
        
        `;
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