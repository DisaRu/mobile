// // main_list
// // main_list-item

// let item_value = document.querySelector('.main_list')
// let todoList = []
// let member = document.querySelector('.member')

// item_value.addEventListener('click', (event) => {
//     let item_inner = event.target
    
//     let temp = {}
//     temp.todo = item_inner.innerHTML
//     temp.check = false
//     var i = todoList.length
//     todoList[i] = temp
    
//     out()
//     console.log(temp.todo)
// })

// function out(){
//     var out = ''
//     for (var key in todoList){
//         out += todoList[key].todo
        
//     }
//     member.innerHTML = out
// }



// const list = document.querySelector('.main_list')

// list.addEventListener('click', (event) => {
//     const target = event.target
//     target.classList.add('item_taken')
    
    
// })



// // console.log(member)

$('.main_list-item').on('click', function(){
    let numberArr = []; // создаём пустой массив
    $(this).toggleClass('selected'); // вешаем класс
    $('.main_list-item.selected').each(function(){ // проходим по всем элементам с классом
    //   numberArr.push($(this).(+'<p>'text+'<p>'())); // добавляем их текст в массив
    });
    // Ниже лог, можно удалить
    console.clear();
    console.info('Выбраные номера: '+numberArr);
  });