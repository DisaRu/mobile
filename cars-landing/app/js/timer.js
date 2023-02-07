




let dd = document.getElementById('dd');
let hr = document.getElementById('hr');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let endDate = '05/06/2023 12:9:00';

let x = setInterval(function () {
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));



    document.querySelector('.days').innerHTML = d + '<br> <span>Дня</span>';
    document.querySelector('.hours').innerHTML = h + '<br> <span>Часов</span>';
    document.querySelector('.minutes').innerHTML = m + '<br> <span>Минут</span>';
    document.querySelector('.seconds').innerHTML = s + '<br> <span>Секунд</span>';


    dd.style.strokeDashoffset = 128 - (128 * d) / 2;
    hr.style.strokeDashoffset = 128 - (128 * h) / 60;
    mm.style.strokeDashoffset = 128 - (128 * m) /50;
    ss.style.strokeDashoffset = 150 - (150 * s) / 40;
    // console.log(Math.floor(d));
});