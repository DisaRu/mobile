const item = document.querySelectorAll('.reviews__stars-item img');
const img = './images/reviews/360-768-1280-star1.svg';


for (const star of item) {


    star.addEventListener('mouseover', (e) => {

        star.src = img;
        console.log(e);
    });

}

