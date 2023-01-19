
const tabs = document.querySelectorAll('.accountant__tab');
const contents = document.querySelectorAll('.accountant__content');

for (let item of tabs) {


    item.addEventListener('click', function () {



        for (let element of contents) {
            element.classList.add('accountant__content--hidden')
        }

        const contentShow = document.querySelector(`#` + item.dataset.tab);
        contentShow.classList.remove('accountant__content--hidden')
        // contentShow.classList.remove('hidden')
        console.log(item);

    }


    )

    item.addEventListener('click', function () {

        for(let item of tabs){

            if (item.classList.contains('accountant__tab--active')) {

                item.classList.remove('accountant__tab--active')
            }
            
        }
        item.classList.add('accountant__tab--active')
     




    }


    )








};
