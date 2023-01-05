

function cartToggleStatus() {
    const cartStatus = document.querySelector('.cart__status');
    const cartWrapper = document.querySelector('.cart__wrapper');
    const cartOrder = document.querySelector('.cart__order'); 
    const toggle = cartWrapper.children.length;
    

    if (toggle > 0) {
        cartStatus.classList.add('none');
        // cartOrder.classList.remove('none');
        
    } else {
        cartStatus.classList.remove('none');
        // cartrder.classList.add('none');
    }



    




}
