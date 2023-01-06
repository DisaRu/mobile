window.addEventListener('click', function (event) {
    const infoBtn = event.target.closest('.card__info');
    
    if (infoBtn) {
        const dataContent = infoBtn.querySelector('[data-info-content]');
        const infoContent = dataContent;
        infoContent.classList.toggle('card__info-show');
        // console.log(dataContent);

    }
    
    else {
        const dataContent = document.querySelectorAll('.info__content');
        dataContent.forEach(el => {
            el.hasChildNodes('.info__content')
            el.classList.remove('card__info-show');
            // console.log(el);
        });
      
    }
    
    
})

