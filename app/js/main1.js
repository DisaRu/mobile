
member = document.querySelector('.member')
$('.main_list-item').on('click', function () {
    let numberArr = []; // создаём пустой массив
    $(this).toggleClass('selected'); // вешаем класс
    $('.main_list-item.selected').each(function ()  { // проходим по всем элементам с классом
        numberArr.push([$(this).text()]); // добавляем их текст в массив
    });

    var clearText = numberArr.join('\n')
    // var clearText = '<p>' + numberArr.join("</p><p>")  + '</p>'
    member.innerHTML = clearText
    console.log(numberArr)

});

    // token: "5081838361:AAHJEaGLIY91s6aOu2lYDJ5DjJfSpiq2rGw"
    // chat_id: "-1001862279523"

const TOKEN = "5081838361:AAHJEaGLIY91s6aOu2lYDJ5DjJfSpiq2rGw";
const CHAT_ID = "-1001862279523";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

document.getElementById('tg').addEventListener('submit', function(e){
  e.preventDefault();

  let message = `Boat\n`
  message += `<b>${ this.name.value}</b>\n`;
  message += `${ this.order.value}\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })

  console.log(message)
})
