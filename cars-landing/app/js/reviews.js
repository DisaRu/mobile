const item = document.querySelectorAll('.reviews__stars-item img');

const imgStroke = './images/reviews/360-768-1280-star.svg';
const imgFill = './images/reviews/360-768-1280-star1.svg';

for (const star of item) {


    star.addEventListener('mouseover', (e) => {
        if(star.src = imgStroke) {
            star.src = imgFill;
        } 
    });


}

