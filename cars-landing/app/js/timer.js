




let dd = document.getElementById('dd');
let hr = document.getElementById('hr');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
let endDate = '06/23/2023 12:9:00';
=======
let endDate = '02/23/2024 12:9:00';
>>>>>>> 9087bdb (Update timer)
=======
let endDate = '08/23/2024 12:9:00';
>>>>>>> 23c0aa7 (e)
=======
let endDate = '010/23/2024 12:9:00';
>>>>>>> 03b3adb (tumer update)

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


    dd.style.strokeDashoffset = 200 - (200 * d) / 365;
    hr.style.strokeDashoffset = 200 - (200 * h) / 24;
    mm.style.strokeDashoffset = 200 - (200 * m) /60;
    ss.style.strokeDashoffset = 200 - (200 * s) / 60;
    // console.log(Math.floor(d));
});
