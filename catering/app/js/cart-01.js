cartWrapper = document.querySelector('.cart__wrapper')
window.addEventListener('click', function (event) {

    if (event.target.hasAttribute('data-toCart')) {
        card = event.target.closest('.card');



        const cardInfo = {
            cardId: card.dataset.id,
            cardImg: card.querySelector('.card__img').getAttribute('src'),
            cardTitle: card.querySelector('.card__title').innerText,
            cardCount: card.querySelector('.card__count').innerText,
            cardWeigth: card.querySelector('.card__cost-weigth').innerText,
            cardPrice: card.querySelector('.card__cost-price').innerText,

        }
        console.log(cardInfo);


        const cartItemHtml = `
        
        <div class="cart">
                    <ul class="cart__list">
                        <li class="cart__item" data-id="${cardInfo.id}">
                            <img src="${cardInfo.cardImg}"
                                alt="${cardInfo.cardTitle}" class="cart__list-item--img">
                            <h4 class="cart__item--title">${cardInfo.cardTitle}</h4>
                            
                            <div class="cart__item--price">${cardInfo.cardPrice} руб</div>

                            <div class="card__control">
                            <button class="card__button card__button-minus" data-action="minus">-</button>
                            <div class="card__count" data-counter>${cardInfo.cardCount}</div>
                            <button class="card__button card__button-plus" data-action="plus">+</button>
                        </div>
                        <li>
                    </ul>
                </div>
        
        `
        cartWrapper.insertAdjacentHTML('beforeend',cartItemHtml )
    }


})