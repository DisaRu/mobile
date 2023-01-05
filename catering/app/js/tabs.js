const tabs = document.querySelectorAll('.tab__category');
const category = document.querySelectorAll('.products__list');

for(let item of tabs ){

    item.addEventListener('click', function(){
        for(let element of category){
            element.classList.add("none")
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('none')

        console.log(content);
    })
}