
const tabs = document.querySelectorAll('.switcher__button');
const contents = document.querySelectorAll('.switcher__img');

for (let item of tabs) {


    item.addEventListener('click', function () {



        for (let element of contents) {

            element.classList.add('hidden')
        }

        const contentShow = document.querySelector(`#` + item.dataset.car);
        contentShow.classList.remove('hidden');
        // contentShow.classList.remove('switcher__img-active')
        // console.log(item);

    }


    )

    










};
